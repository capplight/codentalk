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
 * С 7 СЕНТЯБРЯ 2026 ОН И ЕСТЬ КУРС АНГЛИЙСКОГО В КАТАЛОГЕ. Решение владельца:
 * «замени старые два ступени новым beginner». Прежде он прятался от ученика —
 * тогда в нём был один модуль из тридцати; теперь десять, а прячутся оба
 * старых курса (см. `SKRYTY_OT_UCHENIKA` ниже).
 */
export const courses: Course[] = [
  englishStarter,
  englishElementary,
  englishBeginner2,
  webVvedenie,
];

/**
 * Курсы, которых ученик в каталоге НЕ видит.
 *
 * Курс из перечня `courses` не выбрасывается никогда — иначе его перестанут
 * проверять скрипты, а содержание, до которого нет дороги, выглядит в отчётах
 * работающим. Прячется он здесь, в одном месте и с причиной у каждого.
 *
 * ЗАМЕНА СТУПЕНЕЙ — РЕШЕНИЕ ВЛАДЕЛЬЦА ОТ 7 СЕНТЯБРЯ 2026: «замени старые два
 * ступени новым beginner». Прежде здесь прятался новый курс, теперь — оба
 * старых.
 *
 * ЦЕНА НАЗВАНА БЫЛА И ПРИНЯТА. Новый Beginner — десять модулей из тридцати по
 * программе ступени; старые два — двадцать пять и тридцать один. Значит с сайта
 * уходит пятьдесят шесть модулей, а ученик, шедший по Elementary, своего курса
 * в каталоге больше не найдёт. Его успехи в базе целы: прячется КАРТОЧКА, а не
 * содержание, и вернуть курс — это одна строка отсюда и выкладка.
 *
 * Старые курсы при этом остаются в `courses` и проверяются скриптами наравне с
 * новым: они заморожены решением от 5 сентября 2026 («старый курс навсегда
 * оставляем… но можем пока оттуда брать нужное») и служат складом готовых
 * кусков.
 */
const SKRYTY_OT_UCHENIKA = new Set(["english-starter", "english-elementary"]);

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
  const vidnye = courses.filter((course) => !SKRYTY_OT_UCHENIKA.has(course.slug));
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
