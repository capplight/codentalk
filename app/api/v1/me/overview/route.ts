import { prisma } from "@/lib/db";
import { handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import {
  summarizeCourse,
  type LessonRef,
  type LessonStatus,
} from "@/lib/domain/progress";
import { MAX_ACTIVE_COURSES, countUsedSlots } from "@/lib/domain/enrollment";

/**
 * Данные личного кабинета.
 *
 * Главное здесь — «продолжить»: раздел 6.1 техзадания называет эту кнопку
 * важнейшим элементом всего интерфейса. Поэтому она считается на сервере, а не
 * собирается из кусочков на странице.
 */
export const GET = handler(async () => {
  const user = await requireUser();
  const now = new Date();

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: user.id },
    orderBy: { activatedAt: "desc" },
    select: {
      courseId: true,
      periodMonth: true,
      completedAt: true,
      activatedAt: true,
      course: {
        select: {
          id: true,
          slug: true,
          title: true,
          level: true,
          access: true,
          track: { select: { slug: true, title: true } },
          lessons: {
            orderBy: { sort: "asc" },
            select: {
              slug: true,
              sort: true,
              kind: true,
              estimatedMinutes: true,
              module: { select: { slug: true } },
            },
          },
        },
      },
    },
  });

  const progressRows = await prisma.lessonProgress.findMany({
    where: { userId: user.id },
    select: { status: true, updatedAt: true, lesson: { select: { slug: true, courseId: true } } },
  });

  const statusByCourse = new Map<string, Record<string, LessonStatus>>();
  for (const row of progressRows) {
    const map = statusByCourse.get(row.lesson.courseId) ?? {};
    map[row.lesson.slug] = row.status;
    statusByCourse.set(row.lesson.courseId, map);
  }

  const courses = enrollments.map((e) => {
    const lessons: LessonRef[] = e.course.lessons.map((l) => ({
      slug: l.slug,
      moduleSlug: l.module?.slug ?? null,
      sort: l.sort,
      kind: l.kind,
    }));
    const statuses = statusByCourse.get(e.course.id) ?? {};
    const summary = summarizeCourse(lessons, statuses);

    const nextMinutes = summary.nextLesson
      ? e.course.lessons.find((l) => l.slug === summary.nextLesson!.slug)?.estimatedMinutes ?? null
      : null;

    return {
      course: {
        slug: e.course.slug,
        title: e.course.title,
        level: e.course.level,
        access: e.course.access,
        track: e.course.track,
      },
      lessonsCompleted: summary.lessonsCompleted,
      lessonsTotal: summary.lessonsTotal,
      readyForExam: summary.readyForExam,
      completedAt: e.completedAt,
      nextLesson: summary.nextLesson
        ? { slug: summary.nextLesson.slug, minutes: nextMinutes }
        : null,
      activatedAt: e.activatedAt,
    };
  });

  // Продолжить предлагаем тот курс, где ученик был позже всего и который ещё
  // не пройден. Если таких нет — кабинет покажет каталог.
  const lastTouchedCourseId = progressRows
    .slice()
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())[0]?.lesson.courseId;

  const continueWith =
    courses.find(
      (c) =>
        c.nextLesson &&
        enrollments.find((e) => e.course.slug === c.course.slug)?.course.id ===
          lastTouchedCourseId
    ) ?? courses.find((c) => c.nextLesson) ?? null;

  const usedSlots = countUsedSlots(
    enrollments.map((e) => ({
      courseId: e.courseId,
      courseAccess: e.course.access,
      periodMonth: e.periodMonth,
      completedAt: e.completedAt,
    })),
    now
  );

  const certificates = await prisma.certificate.findMany({
    where: { userId: user.id, revokedAt: null },
    select: {
      serial: true,
      issuedAt: true,
      finalScore: true,
      course: { select: { slug: true, title: true } },
    },
    orderBy: { issuedAt: "desc" },
  });

  return ok({
    continueWith,
    courses,
    certificates,
    slots: { used: usedSlots, total: MAX_ACTIVE_COURSES },
  });
});
