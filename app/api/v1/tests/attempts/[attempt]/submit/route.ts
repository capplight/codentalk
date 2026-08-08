import { z } from "zod";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { scoreAttempt, type Question } from "@/lib/domain/testing";

const bodySchema = z.object({
  /** Ответы: идентификатор вопроса → ответ (строка или последовательность) */
  answers: z.record(z.string(), z.unknown()),
});

type Params = { params: Promise<{ attempt: string }> };

/**
 * Сдать попытку и получить результат.
 *
 * Балл считается на сервере по вопросам, закреплённым за попыткой: подменить
 * набор вопросов или подсмотреть ответы из браузера нельзя.
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
          questions: { select: { id: true, kind: true, topic: true, payload: true } },
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
    const deadline =
      attempt.startedAt.getTime() + attempt.test.timeLimitMinutes * 60_000;
    // Небольшой запас на дорогу ответа до сервера
    timeExpired = Date.now() > deadline + 30_000;
  }

  const byId = new Map(attempt.test.questions.map((q) => [q.id, q]));
  const questions: Question[] = attempt.questionIds
    .map((id) => byId.get(id))
    .filter((q): q is NonNullable<typeof q> => !!q)
    .map((q) => {
      const payload = q.payload as { options?: string[]; answer: string | string[] };
      return {
        id: q.id,
        kind: q.kind as Question["kind"],
        topic: q.topic ?? "без темы",
        options: payload.options,
        answer: payload.answer,
      };
    });

  const result = scoreAttempt(questions, body.answers, attempt.test.passScore);

  await prisma.testAttempt.update({
    where: { id: attempt.id },
    data: {
      answers: body.answers as never,
      score: result.score,
      passed: result.passed,
      submittedAt: new Date(),
    },
  });

  // Слабые темы связываем с уроками, чтобы ученик мог сразу вернуться к нужному
  const weakTopicLessons = result.weakTopics.length
    ? await prisma.lesson.findMany({
        where: {
          courseId: attempt.test.courseId,
          module: { title: { in: result.weakTopics } },
        },
        select: { slug: true, title: true, module: { select: { title: true } } },
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
    weakTopics: result.weakTopics,
    // Куда вернуться, чтобы подтянуть слабое место
    suggestedLessons: weakTopicLessons.map((l) => ({
      slug: l.slug,
      title: l.title,
      topic: l.module?.title ?? null,
    })),
    // Разбор по вопросам: что верно, что нет. Правильные ответы теперь можно
    // показать — попытка сдана.
    review: result.answers.map((a) => ({
      questionId: a.questionId,
      correct: a.correct,
      topic: a.topic,
      correctAnswer: byId.get(a.questionId)
        ? ((byId.get(a.questionId)!.payload as { answer: unknown }).answer ?? null)
        : null,
    })),
  });
});
