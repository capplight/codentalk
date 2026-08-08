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

export const courses: Course[] = [webVvedenie];

export function findCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
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
