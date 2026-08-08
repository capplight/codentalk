import { prisma } from "@/lib/db";
import { summarizeCourse, type LessonRef, type LessonStatus } from "@/lib/domain/progress";
import { MAX_ACTIVE_COURSES, countUsedSlots, nextMonthStart } from "@/lib/domain/enrollment";

/**
 * Данные личного кабинета.
 *
 * Живут отдельной функцией, потому что нужны в двух местах: странице кабинета
 * и методу /api/v1/me/overview для будущего приложения. Если считать их
 * дважды, они рано или поздно разойдутся.
 */

export interface OverviewCourse {
  slug: string;
  title: string;
  level: string | null;
  access: "free" | "premium";
  trackSlug: string;
  lessonsCompleted: number;
  lessonsTotal: number;
  readyForExam: boolean;
  completedAt: Date | null;
  holdsSlot: boolean;
  nextLesson: { slug: string; title: string; minutes: number | null } | null;
}

export interface Overview {
  displayName: string;
  continueWith: OverviewCourse | null;
  courses: OverviewCourse[];
  certificates: {
    serial: string;
    issuedAt: Date;
    finalScore: number | null;
    courseTitle: string;
  }[];
  slots: { used: number; total: number; freeAt: Date | null };
}

export async function buildOverview(userId: string, now = new Date()): Promise<Overview> {
  const [user, enrollments, progressRows, certificates] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { displayName: true } }),
    prisma.enrollment.findMany({
      where: { userId },
      orderBy: { activatedAt: "desc" },
      select: {
        courseId: true,
        periodMonth: true,
        completedAt: true,
        course: {
          select: {
            id: true,
            slug: true,
            title: true,
            level: true,
            access: true,
            track: { select: { slug: true } },
            lessons: {
              orderBy: { sort: "asc" },
              select: {
                slug: true,
                title: true,
                sort: true,
                kind: true,
                estimatedMinutes: true,
                module: { select: { slug: true } },
              },
            },
          },
        },
      },
    }),
    prisma.lessonProgress.findMany({
      where: { userId },
      select: {
        status: true,
        updatedAt: true,
        lesson: { select: { slug: true, courseId: true } },
      },
    }),
    prisma.certificate.findMany({
      where: { userId, revokedAt: null },
      orderBy: { issuedAt: "desc" },
      select: {
        serial: true,
        issuedAt: true,
        finalScore: true,
        course: { select: { title: true } },
      },
    }),
  ]);

  const statusByCourse = new Map<string, Record<string, LessonStatus>>();
  for (const row of progressRows) {
    const map = statusByCourse.get(row.lesson.courseId) ?? {};
    map[row.lesson.slug] = row.status;
    statusByCourse.set(row.lesson.courseId, map);
  }

  const isCurrentMonth = (d: Date) =>
    d.getUTCMonth() === now.getUTCMonth() && d.getUTCFullYear() === now.getUTCFullYear();

  const courses: OverviewCourse[] = enrollments.map((e) => {
    const lessons: LessonRef[] = e.course.lessons.map((l) => ({
      slug: l.slug,
      moduleSlug: l.module?.slug ?? null,
      sort: l.sort,
      kind: l.kind,
    }));
    const summary = summarizeCourse(lessons, statusByCourse.get(e.course.id) ?? {});
    const nextRaw = summary.nextLesson
      ? e.course.lessons.find((l) => l.slug === summary.nextLesson!.slug)
      : undefined;

    return {
      slug: e.course.slug,
      title: e.course.title,
      level: e.course.level,
      access: e.course.access,
      trackSlug: e.course.track.slug,
      lessonsCompleted: summary.lessonsCompleted,
      lessonsTotal: summary.lessonsTotal,
      readyForExam: summary.readyForExam,
      completedAt: e.completedAt,
      holdsSlot:
        e.course.access === "premium" &&
        e.completedAt === null &&
        isCurrentMonth(e.periodMonth),
      nextLesson: nextRaw
        ? { slug: nextRaw.slug, title: nextRaw.title, minutes: nextRaw.estimatedMinutes }
        : null,
    };
  });

  // Продолжаем тот курс, где ученик был позже всего и который ещё не пройден.
  // Не «первый в списке»: человек мог месяц назад начать второй курс, а вчера
  // заниматься первым — вернуть его надо туда, где он был вчера.
  const lastTouchedCourseId = progressRows
    .slice()
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())[0]?.lesson.courseId;
  const lastTouchedSlug = enrollments.find((e) => e.course.id === lastTouchedCourseId)?.course.slug;

  const continueWith =
    courses.find((c) => c.nextLesson && c.slug === lastTouchedSlug) ??
    courses.find((c) => c.nextLesson) ??
    null;

  const used = countUsedSlots(
    enrollments.map((e) => ({
      courseId: e.courseId,
      courseAccess: e.course.access,
      periodMonth: e.periodMonth,
      completedAt: e.completedAt,
    })),
    now
  );

  return {
    displayName: user?.displayName ?? "",
    continueWith,
    courses,
    certificates: certificates.map((c) => ({
      serial: c.serial,
      issuedAt: c.issuedAt,
      finalScore: c.finalScore,
      courseTitle: c.course.title,
    })),
    slots: {
      used,
      total: MAX_ACTIVE_COURSES,
      freeAt: used >= MAX_ACTIVE_COURSES ? nextMonthStart(now) : null,
    },
  };
}
