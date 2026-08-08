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

  const [progressRows, existing, bestExam] = await Promise.all([
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
  const hasExam = course.lessons.some((l) => l.kind === "exam");

  const eligibility = checkEligibility({
    allLessonsCompleted: summary.readyForExam,
    hasExam,
    examPassed: summary.examPassed,
    alreadyIssued: !!existing,
  });

  if (!eligibility.eligible) {
    if (eligibility.reason === "already_issued") {
      // Не ошибка: просто отдаём уже выданный
      return ok({ certificate: existing, alreadyIssued: true });
    }
    throw new ApiError(
      "forbidden",
      eligibility.reason === "exam_not_passed"
        ? "Сертификат выдаётся после сдачи итогового экзамена"
        : "Сначала нужно пройти все уроки курса"
    );
  }

  const certificate = await prisma.certificate.create({
    data: {
      userId: user.id,
      courseId: course.id,
      serial: formatSerial(randomBytes(16)),
      finalScore: bestExam?.score ?? null,
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
