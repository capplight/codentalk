/**
 * Правила доступа к курсам. Раздел 1.2 документа docs/TZ-platform-v2.md.
 *
 * Здесь НЕТ ни базы данных, ни React — только чистые вычисления. Это сделано
 * намеренно: те же правила будет использовать мобильное приложение через
 * программный интерфейс, и они должны проверяться тестами без запуска сервера.
 */

export type CourseAccess = "free" | "premium";

export interface EnrollmentRecord {
  courseId: string;
  courseAccess: CourseAccess;
  /** Первое число месяца, за который занято место */
  periodMonth: Date;
  /** Заполнено => курс пройден, место освобождено досрочно */
  completedAt: Date | null;
}

export type AccessDenialReason = "needs_subscription" | "no_free_slots";

export interface AccessDecision {
  allowed: boolean;
  reason?: AccessDenialReason;
  /** Займёт ли обращение к курсу одно из двух мест */
  wouldUseSlot: boolean;
  usedSlots: number;
  /** Когда освободится ближайшее место, если все заняты */
  slotsFreeAt?: Date;
}

/** Сколько курсов по подписке можно вести одновременно */
export const MAX_ACTIVE_COURSES = 2;

/** Первое число месяца, к которому относится дата (в UTC, чтобы не зависеть от часового пояса) */
export function startOfMonth(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

/** Начало следующего месяца — момент, когда освобождаются все места */
export function nextMonthStart(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1));
}

function isSameMonth(a: Date, b: Date): boolean {
  return startOfMonth(a).getTime() === startOfMonth(b).getTime();
}

/**
 * Занятые места на текущий месяц.
 *
 * Бесплатные курсы места НЕ занимают — иначе бесплатный английский съедал бы
 * половину лимита и смысл бесплатного доступа терялся бы.
 * Пройденный курс освобождает место сразу, чтобы правило не наказывало прилежных.
 */
export function countUsedSlots(enrollments: EnrollmentRecord[], now: Date): number {
  return enrollments.filter(
    (e) =>
      e.courseAccess === "premium" &&
      e.completedAt === null &&
      isSameMonth(e.periodMonth, now)
  ).length;
}

/** Курсы, занимающие места прямо сейчас — чтобы показать ученику, что именно мешает */
export function activeSlotCourses(enrollments: EnrollmentRecord[], now: Date): string[] {
  return enrollments
    .filter(
      (e) =>
        e.courseAccess === "premium" &&
        e.completedAt === null &&
        isSameMonth(e.periodMonth, now)
    )
    .map((e) => e.courseId);
}

export interface AccessInput {
  courseId: string;
  courseAccess: CourseAccess;
  /** Есть ли действующая подписка на момент проверки */
  hasActiveSubscription: boolean;
  enrollments: EnrollmentRecord[];
  now: Date;
}

/**
 * Можно ли ученику открыть курс.
 *
 * Порядок проверок важен: сначала платность курса, потом подписка, потом места.
 * Иначе человек без подписки получил бы сообщение про занятые места, что сбивает с толку.
 */
export function evaluateCourseAccess(input: AccessInput): AccessDecision {
  const { courseId, courseAccess, hasActiveSubscription, enrollments, now } = input;
  const usedSlots = countUsedSlots(enrollments, now);

  // Бесплатный курс открыт всем и мест не занимает
  if (courseAccess === "free") {
    return { allowed: true, wouldUseSlot: false, usedSlots };
  }

  if (!hasActiveSubscription) {
    return {
      allowed: false,
      reason: "needs_subscription",
      wouldUseSlot: false,
      usedSlots,
    };
  }

  // Курс уже взят в этом месяце — место занято им же, повторно не тратится
  const alreadyActive = enrollments.some(
    (e) =>
      e.courseId === courseId && e.completedAt === null && isSameMonth(e.periodMonth, now)
  );
  if (alreadyActive) {
    return { allowed: true, wouldUseSlot: false, usedSlots };
  }

  if (usedSlots >= MAX_ACTIVE_COURSES) {
    return {
      allowed: false,
      reason: "no_free_slots",
      wouldUseSlot: false,
      usedSlots,
      slotsFreeAt: nextMonthStart(now),
    };
  }

  return { allowed: true, wouldUseSlot: true, usedSlots };
}
