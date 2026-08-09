import { z } from "zod";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { gradeQuiz, poolFrom } from "@/lib/content/quiz";

const bodySchema = z.object({
  /** Ответы: имя вопроса → ответ. Форма ответа зависит от вида задания. */
  answers: z.record(z.string(), z.unknown()),
});

type Params = { params: Promise<{ attempt: string }> };

/**
 * Сдать попытку и получить результат.
 *
 * Балл считается на сервере по вопросам, закреплённым за попыткой: подменить
 * набор вопросов или подсмотреть ответы из браузера нельзя.
 *
 * Разбор возвращается только сейчас, после сдачи: до неё он оставался на
 * сервере вместе с ответами.
 */
export const POST = handler(async (request: Request, { params }: Params) => {
  const user = await requireUser();
  const { attempt: attemptId } = await params;
  const body = bodySchema.parse(await readJson(request));

  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    select: {
      id: true,
      userId: true,
      questionIds: true,
      startedAt: true,
      submittedAt: true,
      test: {
        select: {
          id: true,
          passScore: true,
          timeLimitMinutes: true,
          courseId: true,
          questions: { select: { id: true, topic: true, payload: true } },
        },
      },
    },
  });

  if (!attempt) {
    throw new ApiError("not_found", "Попытка не найдена");
  }
  // Чужую попытку сдать нельзя — проверяем владельца, а не только вход
  if (attempt.userId !== user.id) {
    throw new ApiError("forbidden", "Это чужая попытка");
  }
  if (attempt.submittedAt) {
    throw new ApiError("conflict", "Эта попытка уже сдана");
  }

  // Время вышло — принимаем, что успели, но отмечаем это
  let timeExpired = false;
  if (attempt.test.timeLimitMinutes) {
    const deadline = attempt.startedAt.getTime() + attempt.test.timeLimitMinutes * 60_000;
    // Небольшой запас на дорогу ответа до сервера
    timeExpired = Date.now() > deadline + 30_000;
  }

  const byId = new Map(poolFrom(attempt.test.questions).map((q) => [q.id, q]));
  const asked = attempt.questionIds
    .map((id) => byId.get(id))
    .filter((question): question is NonNullable<typeof question> => !!question);

  const result = gradeQuiz(asked, body.answers, attempt.test.passScore / 100);

  await prisma.testAttempt.update({
    where: { id: attempt.id },
    data: {
      answers: body.answers as never,
      score: result.score,
      passed: result.passed,
      submittedAt: new Date(),
    },
  });

  // Слабое место — это итог урока. По нему сразу находится урок, к которому
  // стоит вернуться: сверяемся по самому итогу, а не по названию модуля.
  const weakLessons = result.weakOutcomes.length
    ? await prisma.lesson.findMany({
        where: { courseId: attempt.test.courseId, outcome: { in: result.weakOutcomes } },
        select: { slug: true, title: true, outcome: true, course: { select: { slug: true } } },
        take: 10,
      })
    : [];

  return ok({
    score: result.score,
    correctCount: result.correctCount,
    total: result.total,
    passed: result.passed,
    passScore: attempt.test.passScore,
    timeExpired,
    weakOutcomes: result.weakOutcomes,
    // Куда вернуться, чтобы подтянуть слабое место
    suggestedLessons: weakLessons.map((lesson) => ({
      slug: lesson.slug,
      course: lesson.course.slug,
      title: lesson.title,
      outcome: lesson.outcome,
    })),
    // Разбор по вопросам. Показать его можно только теперь: попытка сдана.
    review: result.answers.map((answer) => {
      const question = byId.get(answer.questionId);
      return {
        questionId: answer.questionId,
        correct: answer.correct,
        outcome: answer.outcome,
        prompt: question?.prompt ?? "",
        why: question?.why ?? "",
      };
    }),
  });
});
