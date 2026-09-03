/**
 * Перечень курсов нового формата.
 *
 * ВНИМАНИЕ: этот файл тянет за собой ВСЁ содержание всех курсов. В клиентских
 * компонентах его импортировать нельзя — однажды такой импорт раздул одну
 * страницу с 5 кБ до 149 кБ. Нужны только заголовки — сделай лёгкий помощник,
 * который берёт их из базы.
 */
import type { Course, Lesson, Module } from "@/lib/content/types";
import webVvedenie from "./web-vvedenie";
import englishStarter from "./english-starter";
import englishElementary from "./english-elementary";
import englishBeginner2 from "./english-beginner-2";

/*
 * ОБРАЗЕЦ НОВОГО ФОРМАТА ПОДКЛЮЧЁН ЗДЕСЬ НАРОЧНО, хотя он ещё не дописан.
 *
 * Правило записано в CLAUDE.md кровью экзамена Elementary: содержание, до
 * которого нет дороги, выглядит в отчётах работающим. Пока курс не стоял в
 * этом перечне, ни `check:content`, ни `kontrol`, ни `bliznetsy` его не
 * смотрели — а отчёт был чист.
 *
 * Ученику он при этом не мешает: в каталоге курс закрыт от показа (см.
 * `courseCards`), потому что в нём один модуль из двадцати с лишним.
 */
export const courses: Course[] = [
  englishStarter,
  englishElementary,
  englishBeginner2,
  webVvedenie,
];

/**
 * Курсы, которые ученик видит в каталоге.
 *
 * Недописанный курс из перечня не выбрасывается — иначе его перестанут
 * проверять скрипты, — а прячется здесь, в одном месте и с объяснением.
 */
const NEDOPISANY = new Set(["english-beginner-2"]);

export function findCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

/**
 * Сведения о курсе для витрины: только то, что нужно карточке.
 *
 * Отдельная функция, чтобы витрине не приходилось разбирать всё содержание —
 * и чтобы было видно, что именно уходит на страницу.
 */
export interface CourseCard {
  slug: string;
  track: string;
  title: string;
  tagline: string | null;
  level: string | null;
  access: "free" | "premium";
  modules: number;
  lessons: number;
  minutes: number;
  hasExam: boolean;
}

export function courseCards(): CourseCard[] {
  const vidnye = courses.filter((course) => !NEDOPISANY.has(course.slug));
  return vidnye.map((course) => {
    const lessons = lessonsInOrder(course);
    return {
      slug: course.slug,
      track: course.track,
      title: course.title,
      tagline: course.tagline ?? null,
      level: course.level ?? null,
      access: course.access,
      modules: course.modules.length,
      lessons: lessons.length,
      minutes: lessons.reduce((sum, entry) => sum + entry.lesson.estimatedMinutes, 0),
      hasExam: course.exam !== undefined,
    };
  });
}

/** Курсы нового формата в этом направлении — витрине нужно знать, что открыто. */
export function cardsForTrack(trackSlug: string): CourseCard[] {
  return courseCards().filter((card) => card.track === trackSlug);
}

/** Уроки курса подряд, в порядке модулей — так, как их проходят. */
export function lessonsInOrder(course: Course): Array<{ module: Module; lesson: Lesson }> {
  return course.modules.flatMap((module) => module.lessons.map((lesson) => ({ module, lesson })));
}

export interface LessonPlace {
  course: Course;
  module: Module;
  lesson: Lesson;
  /** Номер урока во всём курсе, с единицы */
  number: number;
  total: number;
  previous?: Lesson;
  next?: Lesson;
}

/** Найти урок и его окружение: что было до и что будет после. */
export function findLesson(courseSlug: string, lessonSlug: string): LessonPlace | undefined {
  const course = findCourse(courseSlug);
  if (!course) return undefined;

  const all = lessonsInOrder(course);
  const at = all.findIndex((entry) => entry.lesson.slug === lessonSlug);
  if (at === -1) return undefined;

  return {
    course,
    module: all[at].module,
    lesson: all[at].lesson,
    number: at + 1,
    total: all.length,
    previous: at > 0 ? all[at - 1].lesson : undefined,
    next: at < all.length - 1 ? all[at + 1].lesson : undefined,
  };
}
