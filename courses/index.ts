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

export const courses: Course[] = [englishStarter, webVvedenie];

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
  return courses.map((course) => {
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
