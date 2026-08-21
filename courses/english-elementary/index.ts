import type { Course } from "@/lib/content/types";
import etoBylo from "./eto-bylo";
import vcheraYaRabotal from "./vchera-ya-rabotal";
import osobyeFormy from "./osobye-formy";
import yaNeDelal from "./ya-ne-delal";
import sprositOProshlom from "./sprosit-o-proshlom";
import chtoProishodilo from "./chto-proishodilo";
import pokaIKogda from "./poka-i-kogda";
import yaSobirayus from "./ya-sobirayus";
import yaSdelayu from "./ya-sdelayu";

/**
 * Английский · Elementary — ступень до A2.
 *
 * Программа курса: docs/programma-english-elementary.md. Задумано тридцать
 * один модуль в четырёх частях, здесь пока написанные. Модули добавляются по
 * одному: каждый проходит скрипт проверок, методиста, редактора и владельца.
 *
 * ЧАСТЕЙ И ЭКЗАМЕНА ЗДЕСЬ ПОКА НЕТ, и это не забывчивость. Часть первая по
 * программе — семь модулей; заводить её на одном значило бы обещать ученику
 * работу части, которой не из чего собраться. Экзамен на прошлой ступени
 * писался, когда все модули прошли второй разбор, и здесь порядок тот же.
 *
 * ГЛАВНОЕ ПРАВИЛО СТУПЕНИ, которое держат все модули: между ступенями нет
 * ссылок на память. Человек мог прийти сразу сюда, не проходя Beginner
 * (решение владельца от 16 августа), поэтому оборотов «ты уже знаешь» и «как
 * мы учили в прошлом курсе» в модулях не бывает вовсе.
 */
const course: Course = {
  slug: "english-elementary",
  track: "english",
  // Имя ступени, а не описание: на хабе направления карточка зовётся
  // Elementary, и внутри должно стоять то же самое.
  title: "Английский · Elementary",
  level: "до A2",
  tagline: "Для тех, кто говорит о себе в настоящем времени и хочет рассказать о прошлом",
  access: "premium",
  modules: [etoBylo, vcheraYaRabotal, osobyeFormy, yaNeDelal, sprositOProshlom, chtoProishodilo, pokaIKogda, yaSobirayus, yaSdelayu],
};

export default course;
