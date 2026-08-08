import { prisma } from "@/lib/db";
import { handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { MAX_ACTIVE_COURSES, countUsedSlots } from "@/lib/domain/enrollment";

/** Состояние подписки и занятых мест — строка в личном кабинете. */
export const GET = handler(async () => {
  const user = await requireUser();
  const now = new Date();

  const subscription = await prisma.subscription.findFirst({
    where: { userId: user.id },
    orderBy: [{ plan: "desc" }, { createdAt: "desc" }],
    select: {
      plan: true,
      status: true,
      provider: true,
      currentPeriodEnd: true,
      cancelAtPeriodEnd: true,
    },
  });

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: user.id },
    select: {
      courseId: true,
      periodMonth: true,
      completedAt: true,
      course: { select: { access: true } },
    },
  });

  const used = countUsedSlots(
    enrollments.map((e) => ({
      courseId: e.courseId,
      courseAccess: e.course.access,
      periodMonth: e.periodMonth,
      completedAt: e.completedAt,
    })),
    now
  );

  return ok({
    subscription: subscription ?? { plan: "free", status: "active", provider: "stub" },
    slots: { used, total: MAX_ACTIVE_COURSES },
  });
});
