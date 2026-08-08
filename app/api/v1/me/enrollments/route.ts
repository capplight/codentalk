import { prisma } from "@/lib/db";
import { handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import {
  MAX_ACTIVE_COURSES,
  countUsedSlots,
  nextMonthStart,
} from "@/lib/domain/enrollment";

/** Мои курсы: что взято, что занимает места и когда они освободятся. */
export const GET = handler(async () => {
  const user = await requireUser();
  const now = new Date();

  const rows = await prisma.enrollment.findMany({
    where: { userId: user.id },
    orderBy: { activatedAt: "desc" },
    select: {
      periodMonth: true,
      activatedAt: true,
      completedAt: true,
      courseId: true,
      course: {
        select: {
          slug: true,
          title: true,
          access: true,
          level: true,
          track: { select: { slug: true } },
        },
      },
    },
  });

  const usedSlots = countUsedSlots(
    rows.map((r) => ({
      courseId: r.courseId,
      courseAccess: r.course.access,
      periodMonth: r.periodMonth,
      completedAt: r.completedAt,
    })),
    now
  );

  return ok({
    enrollments: rows.map((r) => ({
      course: r.course,
      activatedAt: r.activatedAt,
      completedAt: r.completedAt,
      // Занимает ли этот курс место прямо сейчас
      holdsSlot:
        r.course.access === "premium" &&
        r.completedAt === null &&
        r.periodMonth.getUTCMonth() === now.getUTCMonth() &&
        r.periodMonth.getUTCFullYear() === now.getUTCFullYear(),
    })),
    slots: {
      used: usedSlots,
      total: MAX_ACTIVE_COURSES,
      freeAt: usedSlots >= MAX_ACTIVE_COURSES ? nextMonthStart(now) : null,
    },
  });
});
