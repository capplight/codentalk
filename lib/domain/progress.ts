/**
 * Правила учёта успехов. Разделы 4.3 и 6.2 документа docs/TZ-platform-v2.md.
 *
 * Как и правила доступа, здесь нет ни базы, ни React — только вычисления.
 */

export type LessonStatus = "not_started" | "in_progress" | "completed";

export interface LessonRef {
  slug: string;
  /** Слаг модуля; пусто — урок вне модулей (например, библиотека текстов) */
  moduleSlug: string | null;
  sort: number;
  kind: string;
}

export interface CourseProgressSummary {
  lessonsTotal: number;
  lessonsCompleted: number;
  /** Доля пройденного от нуля до единицы */
  ratio: number;
  /** Урок, с которого стоит продолжить; пусто — курс пройден целиком */
  nextLesson: LessonRef | null;
  /** Пройдены ли все уроки, кроме итогового экзамена */
  readyForExam: boolean;
  /** Сдан ли итоговый экзамен */
  examPassed: boolean;
}

/**
 * Куда возвращать ученика.
 *
 * Правило простое и намеренно предсказуемое: первый непройденный урок по
 * порядку. Не «последний открытый» — если человек заглянул вперёд из
 * любопытства, возвращать его туда неправильно.
 *
 * Итоговый экзамен пропускаем: он открывается только после всех модулей, и
 * предлагать его как «следующий шаг» посреди курса нельзя.
 */
export function findNextLesson(
  lessons: LessonRef[],
  statuses: Record<string, LessonStatus>
): LessonRef | null {
  const ordered = [...lessons].sort((a, b) => a.sort - b.sort);
  const regular = ordered.filter((l) => l.kind !== "exam");

  const unfinished = regular.find((l) => (statuses[l.slug] ?? "not_started") !== "completed");
  if (unfinished) return unfinished;

  // Все обычные уроки пройдены — предлагаем экзамен, если он есть и не сдан
  const exam = ordered.find((l) => l.kind === "exam");
  if (exam && (statuses[exam.slug] ?? "not_started") !== "completed") return exam;

  return null;
}

export function summarizeCourse(
  lessons: LessonRef[],
  statuses: Record<string, LessonStatus>
): CourseProgressSummary {
  const regular = lessons.filter((l) => l.kind !== "exam");
  const exam = lessons.find((l) => l.kind === "exam");

  const completed = regular.filter(
    (l) => (statuses[l.slug] ?? "not_started") === "completed"
  ).length;

  const examPassed = exam ? (statuses[exam.slug] ?? "not_started") === "completed" : false;

  return {
    lessonsTotal: regular.length,
    lessonsCompleted: completed,
    ratio: regular.length === 0 ? 0 : completed / regular.length,
    nextLesson: findNextLesson(lessons, statuses),
    readyForExam: regular.length > 0 && completed === regular.length,
    examPassed,
  };
}

/**
 * Пройден ли курс целиком. Это условие освобождения места из двух возможных
 * и выдачи сертификата.
 *
 * Курс без экзамена считается пройденным по всем урокам. Курс с экзаменом
 * требует ещё и сданного экзамена — иначе сертификат ничего не стоит.
 */
export function isCourseCompleted(summary: CourseProgressSummary, hasExam: boolean): boolean {
  if (summary.lessonsTotal === 0) return false;
  if (!summary.readyForExam) return false;
  return hasExam ? summary.examPassed : true;
}

export interface ModuleSummary {
  slug: string;
  lessonsTotal: number;
  lessonsCompleted: number;
  completed: boolean;
}

export function summarizeModules(
  lessons: LessonRef[],
  statuses: Record<string, LessonStatus>
): ModuleSummary[] {
  const byModule = new Map<string, LessonRef[]>();
  for (const lesson of lessons) {
    if (!lesson.moduleSlug) continue;
    const list = byModule.get(lesson.moduleSlug) ?? [];
    list.push(lesson);
    byModule.set(lesson.moduleSlug, list);
  }

  return [...byModule.entries()].map(([slug, list]) => {
    const done = list.filter(
      (l) => (statuses[l.slug] ?? "not_started") === "completed"
    ).length;
    return {
      slug,
      lessonsTotal: list.length,
      lessonsCompleted: done,
      completed: done === list.length,
    };
  });
}
