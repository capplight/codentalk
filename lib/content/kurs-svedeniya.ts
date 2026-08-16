import { findCourse, lessonsInOrder } from "@/courses";

/**
 * Сведения о курсе для сертификата: ступень и часы.
 *
 * Берутся из файлов курса, а не из базы: в базе лежит зеркало, где часов нет
 * вовсе — они складываются из времени уроков. Отдельный файл затем, чтобы
 * страница проверки и бланк считали их одинаково: разойдись они, на бланке и
 * на проверке стояли бы разные числа, и документ перестал бы подтверждать сам
 * себя.
 */
export interface SvedeniyaKursa {
  /** «до A1» — как записано у курса. Пусто там, где ступеней нет. */
  stupen: string | null;
  /** Часы занятий, округлённые вверх до целого. */
  chasov: number;
}

export function svedeniyaKursa(slug: string): SvedeniyaKursa {
  const course = findCourse(slug);
  if (!course) return { stupen: null, chasov: 0 };

  const minut = lessonsInOrder(course).reduce(
    (sum, entry) => sum + entry.lesson.estimatedMinutes,
    0
  );

  return {
    stupen: course.level ?? null,
    chasov: Math.max(1, Math.round(minut / 60)),
  };
}
