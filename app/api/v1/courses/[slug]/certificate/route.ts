import { randomBytes } from "node:crypto";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { checkEligibility, formatSerial } from "@/lib/domain/certificate";
import { summarizeCourse, type LessonRef, type LessonStatus } from "@/lib/domain/progress";
import { startOfMonth } from "@/lib/domain/enrollment";

type Params = { params: Promise<{ slug: string }> };

/**
 * Выдать сертификат за пройденный курс.
 *
 * Право на сертификат проверяется на сервере заново, по записям об успехах.
 * Заодно отмечаем курс пройденным — это освобождает одно из двух мест.
 */
export const POST = handler(async (_request: Request, { params }: Params) => {
  const user = await requireUser();
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      isPublished: true,
      lessons: {
        orderBy: { sort: "asc" },
        select: { slug: true, sort: true, kind: true, module: { select: { slug: true } } },
      },
    },
  });

  if (!course || !course.isPublished) {
    throw new ApiError("not_found", "Курс не найден");
  }

  const [progressRows, existing, bestExam, quizzes, passedAttempts] = await Promise.all([
    prisma.lessonProgress.findMany({
      where: { userId: user.id, lesson: { courseId: course.id } },
      select: { status: true, lesson: { select: { slug: true } } },
    }),
    prisma.certificate.findFirst({
      where: { userId: user.id, courseId: course.id, revokedAt: null },
      select: { serial: true, issuedAt: true },
    }),
    prisma.testAttempt.findFirst({
      where: {
        userId: user.id,
        passed: true,
        test: { courseId: course.id, kind: "final_exam" },
      },
      orderBy: { score: "desc" },
      select: { score: true },
    }),
    prisma.test.findMany({
      where: { courseId: course.id, kind: "module_quiz" },
      select: { id: true },
    }),
    prisma.testAttempt.findMany({
      where: { userId: user.id, passed: true, test: { courseId: course.id } },
      select: { testId: true, score: true },
    }),
  ]);

  const statuses: Record<string, LessonStatus> = Object.fromEntries(
    progressRows.map((r) => [r.lesson.slug, r.status])
  );
  const lessons: LessonRef[] = course.lessons.map((l) => ({
    slug: l.slug,
    moduleSlug: l.module?.slug ?? null,
    sort: l.sort,
    kind: l.kind,
  }));

  const summary = summarizeCourse(lessons, statuses);

  // Экзамен бывает двух видов: урок-экзамен первой версии и отдельная работа
  // вида final_exam в новом формате. Сертификат должен требовать любого из них.
  const finalExam = await prisma.test.findFirst({
    where: { courseId: course.id, kind: "final_exam" },
    select: { id: true },
  });
  const hasExam = course.lessons.some((l) => l.kind === "exam") || finalExam !== null;
  const examPassed = summary.examPassed || bestExam !== null;

  const passedTestIds = new Set(passedAttempts.map((attempt) => attempt.testId));

  const eligibility = checkEligibility({
    allLessonsCompleted: summary.readyForExam,
    hasExam,
    examPassed,
    alreadyIssued: !!existing,
    // У курсов первой версии проверочных работ модулей нет — там правило прежнее
    quizzes:
      quizzes.length > 0
        ? {
            total: quizzes.length,
            passed: quizzes.filter((quiz) => passedTestIds.has(quiz.id)).length,
          }
        : undefined,
  });

  if (!eligibility.eligible) {
    if (eligibility.reason === "already_issued") {
      // Не ошибка: просто отдаём уже выданный
      return ok({ certificate: existing, alreadyIssued: true });
    }

    const message =
      eligibility.reason === "exam_not_passed"
        ? "Сертификат выдаётся после сдачи итогового экзамена"
        : eligibility.reason === "quizzes_not_passed"
          ? `Осталось сдать проверочных работ: ${eligibility.quizzesLeft}. ` +
            "Отметка «урок пройден» ставится нажатием и знаний не подтверждает."
          : "Сначала нужно пройти все уроки курса";

    throw new ApiError("forbidden", message);
  }

  // Итоговый балл: у курса с экзаменом — экзаменационный, иначе средний по
  // лучшим сданным проверочным работам. Пустое место в сертификате хуже
  // честного среднего: оно выглядит так, будто знания никто не проверял.
  const bestByTest = new Map<string, number>();
  for (const attempt of passedAttempts) {
    const score = attempt.score ?? 0;
    if (score > (bestByTest.get(attempt.testId) ?? -1)) bestByTest.set(attempt.testId, score);
  }
  const quizAverage =
    bestByTest.size > 0
      ? Math.round([...bestByTest.values()].reduce((sum, s) => sum + s, 0) / bestByTest.size)
      : null;

  const certificate = await prisma.certificate.create({
    data: {
      userId: user.id,
      courseId: course.id,
      serial: formatSerial(randomBytes(16)),
      finalScore: bestExam?.score ?? quizAverage,
    },
    select: { serial: true, issuedAt: true, finalScore: true },
  });

  // Пройденный курс освобождает место сразу — правило из раздела 1.2
  await prisma.enrollment.updateMany({
    where: {
      userId: user.id,
      courseId: course.id,
      periodMonth: startOfMonth(new Date()),
      completedAt: null,
    },
    data: { completedAt: new Date() },
  });

  return ok({ certificate, alreadyIssued: false }, 201);
});
