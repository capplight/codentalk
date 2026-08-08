import { prisma } from "@/lib/db";
import {
  evaluateCourseAccess,
  startOfMonth,
  type AccessDecision,
  type EnrollmentRecord,
} from "@/lib/domain/enrollment";
import { ApiError } from "./respond";

/**
 * Связка между базой и чистыми правилами доступа.
 *
 * Сами правила живут в lib/domain/enrollment.ts и ничего не знают про базу.
 * Здесь мы только достаём нужные записи и передаём их туда.
 */

/** Есть ли у ученика действующая подписка на платные курсы. */
export async function hasActiveSubscription(
  userId: string,
  now = new Date()
): Promise<boolean> {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId,
      plan: "premium",
      status: { in: ["active", "trialing"] },
      OR: [{ currentPeriodEnd: null }, { currentPeriodEnd: { gt: now } }],
    },
    select: { id: true },
  });
  return !!subscription;
}

async function loadEnrollments(userId: string): Promise<EnrollmentRecord[]> {
  const rows = await prisma.enrollment.findMany({
    where: { userId },
    select: {
      courseId: true,
      periodMonth: true,
      completedAt: true,
      course: { select: { access: true } },
    },
  });
  return rows.map((r) => ({
    courseId: r.courseId,
    courseAccess: r.course.access,
    periodMonth: r.periodMonth,
    completedAt: r.completedAt,
  }));
}

export interface CourseAccessCheck extends AccessDecision {
  courseId: string;
}

/** Может ли ученик открыть курс прямо сейчас. */
export async function checkCourseAccess(
  userId: string,
  courseId: string,
  courseAccess: "free" | "premium",
  now = new Date()
): Promise<CourseAccessCheck> {
  const [enrollments, subscribed] = await Promise.all([
    loadEnrollments(userId),
    courseAccess === "premium" ? hasActiveSubscription(userId, now) : Promise.resolve(false),
  ]);

  const decision = evaluateCourseAccess({
    courseId,
    courseAccess,
    hasActiveSubscription: subscribed,
    enrollments,
    now,
  });

  return { ...decision, courseId };
}

/**
 * Проверяет доступ и, если курс платный и место свободно, занимает его.
 *
 * Занятие места и проверка идут одной операцией: иначе между ними можно было бы
 * открыть третий курс двумя одновременными запросами.
 */
export async function ensureEnrolled(
  userId: string,
  courseId: string,
  courseAccess: "free" | "premium",
  now = new Date()
): Promise<CourseAccessCheck> {
  const decision = await checkCourseAccess(userId, courseId, courseAccess, now);

  if (!decision.allowed) {
    throw new ApiError(
      decision.reason === "needs_subscription" ? "needs_subscription" : "no_free_slots",
      decision.reason === "needs_subscription"
        ? "Этот курс доступен по подписке"
        : "Уже занято два курса. Место освободится в начале следующего месяца или когда закончишь один из них."
    );
  }

  // Бесплатные курсы места не занимают, но запись всё равно заводим —
  // по ней строится список «мои курсы».
  await prisma.enrollment.upsert({
    where: {
      userId_courseId_periodMonth: {
        userId,
        courseId,
        periodMonth: startOfMonth(now),
      },
    },
    create: { userId, courseId, periodMonth: startOfMonth(now) },
    update: {},
  });

  return decision;
}
