import { randomUUID } from "node:crypto";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { trebuetsyaUuid } from "@/lib/api/params";
import { selectQuestions } from "@/lib/domain/testing";
import { forBrowser, poolFrom } from "@/lib/content/quiz";
import { checkCourseAccess } from "@/lib/api/access";
import { plural } from "@/lib/plural";

type Params = { params: Promise<{ test: string }> };

/**
 * Начать попытку проверочной работы.
 *
 * ВАЖНО. В ответ уходят только вопросы и варианты — правильные ответы, разборы
 * и подсказки остаются на сервере (раздел 10 техзадания). Без этого ценность
 * сертификата нулевая: ответы читались бы в исходном коде страницы.
 *
 * Выборка вопросов закрепляется за попыткой: при обновлении страницы ученик
 * увидит те же вопросы, а не новые.
 */
export const POST = handler(async (_request: Request, { params }: Params) => {
  const user = await requireUser();
  const { test: testId } = await params;
  trebuetsyaUuid(testId, "Проверочная работа не найдена");

  const test = await prisma.test.findUnique({
    where: { id: testId },
    select: {
      id: true,
      title: true,
      kind: true,
      questionsPerAttempt: true,
      timeLimitMinutes: true,
      maxAttemptsPerDay: true,
      passScore: true,
      moduleId: true,
      course: { select: { id: true, slug: true, access: true, isPublished: true } },
      questions: { select: { id: true, topic: true, groupKey: true, payload: true } },
    },
  });

  if (!test || !test.course.isPublished) {
    throw new ApiError("not_found", "Проверочная работа не найдена");
  }

  const access = await checkCourseAccess(user.id, test.course.id, test.course.access);
  if (!access.allowed) {
    throw new ApiError(
      access.reason === "needs_subscription" ? "needs_subscription" : "no_free_slots",
      access.reason === "needs_subscription"
        ? "Этот курс доступен по подписке"
        : "Этот курс сейчас не входит в два активных"
    );
  }

  // Экзамен открывается, когда сданы все проверочные работы модулей. Он
  // спрашивает про весь курс, и сдавать его, не разобравшись с частями, —
  // потратить попытку впустую.
  if (test.kind === "final_exam") {
    const quizzes = await prisma.test.findMany({
      where: { courseId: test.course.id, kind: "module_quiz" },
      select: { id: true },
    });
    const passed = await prisma.testAttempt.findMany({
      where: { userId: user.id, passed: true, testId: { in: quizzes.map((q) => q.id) } },
      select: { testId: true },
    });
    const passedCount = new Set(passed.map((attempt) => attempt.testId)).size;

    if (quizzes.length > 0 && passedCount < quizzes.length) {
      throw new ApiError(
        "forbidden",
        `Экзамен откроется, когда сданы все проверочные работы модулей: сдано ${passedCount} из ${quizzes.length} ${plural(quizzes.length, "работы", "работ", "работ")}`
      );
    }
  }

  // Работа модуля открывается, когда пройдены все его уроки. Это не наказание:
  // она проверяет знания, а не догадливость, и сдавать её, не прочитав уроков,
  // значит зря потратить попытку.
  if (test.moduleId) {
    const lessons = await prisma.lesson.findMany({
      where: { moduleId: test.moduleId },
      select: { id: true },
    });
    const done = await prisma.lessonProgress.count({
      where: {
        userId: user.id,
        status: "completed",
        lessonId: { in: lessons.map((lesson) => lesson.id) },
      },
    });
    if (lessons.length > 0 && done < lessons.length) {
      throw new ApiError(
        "forbidden",
        `Работа откроется, когда пройдены все уроки модуля: пройдено ${done} из ${lessons.length} ${plural(lessons.length, "урока", "уроков", "уроков")}`
      );
    }
  }

  // Ограничение числа попыток в сутки — чтобы работу нельзя было пройти
  // перебором вариантов.
  if (test.maxAttemptsPerDay) {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    // Считаем только сданные попытки. Открытая и брошенная страница попытки не
    // тратит: ограничение защищает от подбора ответов, а не от передумавших.
    const recent = await prisma.testAttempt.count({
      where: {
        userId: user.id,
        testId: test.id,
        startedAt: { gte: since },
        submittedAt: { not: null },
      },
    });
    if (recent >= test.maxAttemptsPerDay) {
      throw new ApiError(
        "too_many_requests",
        `За сутки эту работу можно пройти не больше ${test.maxAttemptsPerDay} раз. Попробуй завтра — а пока загляни в разбор ошибок.`
      );
    }
  }

  const seed = randomUUID();
  const selected = selectQuestions(poolFrom(test.questions), test.questionsPerAttempt, seed);

  const attempt = await prisma.testAttempt.create({
    data: {
      userId: user.id,
      testId: test.id,
      questionIds: selected.map((question) => question.id),
      answers: {},
    },
    select: { id: true, startedAt: true },
  });

  return ok(
    {
      attempt: {
        id: attempt.id,
        startedAt: attempt.startedAt,
        timeLimitMinutes: test.timeLimitMinutes,
        passScore: test.passScore,
      },
      test: { title: test.title, kind: test.kind },
      // Правильные ответы, разборы и подсказки намеренно не передаются
      questions: selected.map(forBrowser),
    },
    201
  );
});
