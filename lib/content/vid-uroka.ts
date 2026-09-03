/**
 * Вид урока: правила, чтение, слушание, письмо, говорение.
 *
 * ЗАЧЕМ ЭТО ПОНАДОБИЛОСЬ. На карте курса у каждого урока свой узел, и глядя на
 * развёрнутый модуль полезно сразу видеть: пять уроков правил, потом чтение,
 * потом слушание, потом письмо. Одними названиями это не читается — они разные
 * и длинные.
 *
 * ПОЧЕМУ ВЫВОД, А НЕ ПОЛЕ У КАЖДОГО УРОКА. Уроков около пятисот, и проставить
 * поле руками — это пятьсот правок ради того, что в девяноста восьми случаях из
 * ста однозначно следует из состава урока: текст для чтения бывает только в
 * уроке чтения, запись — только в уроке слушания.
 *
 * ПОЧЕМУ ВЫВОДА ОДНОГО МАЛО. Он ошибается, и ошибается предсказуемо: запись
 * стоит и в уроке правил про алфавит, сочинение — в уроках правил нового
 * формата. Поэтому у урока есть поле `vid`, и оно ГЛАВНЕЕ вывода. Проставлено
 * оно ровно там, где вывод ошибался: девять уроков на четыре курса.
 *
 * ПОЧЕМУ ЭТО НЕ РАЗЪЕДЕТСЯ МОЛЧА. Дописал в урок правил запись — и он стал бы
 * «слушанием» без единого слова в отчёте. За этим следит `check:content`: он
 * сверяет вывод со вторым, независимым признаком — заголовком («Читаем…»,
 * «Слушаем…», «Пишем…») — и о расхождении спрашивает. Решает методист.
 */
import type { Lesson } from "./types";

export type VidUroka = "pravila" | "chtenie" | "slushanie" | "pismo" | "govorenie";

/** Как вид зовётся ученику. */
export const IMYA_VIDA: Record<VidUroka, string> = {
  pravila: "правила",
  chtenie: "чтение",
  slushanie: "слушание",
  pismo: "письмо",
  govorenie: "говорение",
};

/**
 * Значок вида — Twemoji, файлы у нас (`npm run znachki`).
 *
 * У правил значка нет нарочно: их большинство, и значок у каждого второго узла
 * превратился бы в шум. Помечены умения — то, что среди правил и выделяется.
 */
export const ZNAK_VIDA: Partial<Record<VidUroka, string>> = {
  chtenie: "1f4d6",
  slushanie: "1f3a7",
  pismo: "270d",
  govorenie: "1f5e3",
};

/** Что говорит о виде урока его заголовок. Пусто — заголовок молчит. */
export function vidPoZagolovku(title: string): VidUroka | null {
  if (/^Чита[ею]м/i.test(title)) return "chtenie";
  if (/^Слушаем/i.test(title)) return "slushanie";
  if (/^Пишем/i.test(title)) return "pismo";
  if (/^Говорим/i.test(title)) return "govorenie";
  return null;
}

/** Что говорит о виде урока его состав. */
export function vidPoSostavu(lesson: Lesson): VidUroka {
  const vidy = new Set(lesson.blocks.map((block) => block.kind));
  if (vidy.has("text")) return "chtenie";
  if (vidy.has("audio")) return "slushanie";
  if (vidy.has("essay")) return "pismo";
  return "pravila";
}

/**
 * Вид урока. Поле автора главнее вывода, вывод главнее заголовка: заголовок —
 * признак для проверки, а не для показа.
 */
export function vidUroka(lesson: Lesson): VidUroka {
  return lesson.vid ?? vidPoZagolovku(lesson.title) ?? vidPoSostavu(lesson);
}
