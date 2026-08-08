import { randomUUID } from "node:crypto";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { checkCourseAccess } from "@/lib/api/access";
import { selectQuestions, shuffleOptions, type Question } from "@/lib/domain/testing";

type Params = { params: Promise<{ test: string }> };

/**
 * Начать попытку проверочной работы.
 *
 * ВАЖНО. В ответ уходят только вопросы и варианты — правильные ответы остаются
 * на сервере. Раздел 10 техзадания: без этого ценность сертификата нулевая,
 * потому что ответы можно посмотреть в браузере.
 *
 * Выборка вопросов закрепляется за попыткой: при обновлении страницы ученик
 * увидит те же вопросы, а не новые.
 */
export const POST = handler(async (_request: Request, { params }: Params) => {
  const user = await requireUser();
  const { test: testId } = await params;

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
      course: { select: { id: true, access: true, isPublished: true } },
      questions: {
        select: { id: true, kind: true, topic: true, payload: true },
      },
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

  // Ограничение числа попыток в сутки — чтобы экзамен нельзя было пройти
  // перебором вариантов.
  if (test.maxAttemptsPerDay) {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recent = await prisma.testAttempt.count({
      where: { userId: user.id, testId: test.id, startedAt: { gte: since } },
    });
    if (recent >= test.maxAttemptsPerDay) {
      throw new ApiError(
        "too_many_requests",
        `За сутки можно пройти эту работу не больше ${test.maxAttemptsPerDay} раз. Попробуй завтра — и загляни в разбор ошибок.`
      );
    }
  }

  const pool: Question[] = test.questions.map((q) => {
    const payload = q.payload as { options?: string[]; answer: string | string[] };
    return {
      id: q.id,
      kind: q.kind as Question["kind"],
      topic: q.topic ?? "без темы",
      options: payload.options,
      answer: payload.answer,
    };
  });

  const seed = randomUUID();
  const selected = selectQuestions(pool, test.questionsPerAttempt, seed).map((q) =>
    shuffleOptions(q, seed)
  );

  const attempt = await prisma.testAttempt.create({
    data: {
      userId: user.id,
      testId: test.id,
      questionIds: selected.map((q) => q.id),
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
      // Правильные ответы намеренно не передаются
      questions: selected.map((q) => ({
        id: q.id,
        kind: q.kind,
        topic: q.topic,
        options: q.options,
      })),
    },
    201
  );
});
