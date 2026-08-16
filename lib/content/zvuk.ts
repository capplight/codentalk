/**
 * Имена звуковых файлов.
 *
 * Имя выводится из самого текста, а не хранится в уроке. Из этого следует всё
 * остальное: озвучка не трогает материалы курса, правка фразы автоматически
 * означает другой файл, а страница находит запись, ничего не спрашивая у базы.
 *
 * Считать имя должны одинаково двое: скрипт озвучки (Node) и страница урока
 * (браузер). Поэтому здесь не `crypto`, а FNV-1a на BigInt — он одинаков везде
 * и не тянет за собой ничего.
 *
 * Осторожно: имя выводится из ТЕКСТА, а подсказки произношения имён живут
 * отдельно (`proiznoshenie.ts`). Поменяешь чтение слова `Astana` — текст
 * прежний, имя файла прежнее, а запись устарела. Эту беду ловит сам скрипт
 * озвучки: он помнит, из чего сделан каждый файл, и переделывает разошедшиеся.
 */

/** Темп чтения. На первых ступенях нужен медленный. */
export type TempZvuka = "normal" | "slow";

/** Что озвучиваем. Влияет только на папку — чтобы в них было видно глазами. */
export type RodZvuka = "blok" | "slovo" | "obrazec";

const OSNOVA = 0xcbf29ce484222325n;
const MNOZHITEL = 0x100000001b3n;
const MASKA = 0xffffffffffffffffn;

/** FNV-1a, 64 разряда. Одинаково в Node и в браузере. */
function otpechatok(stroka: string): string {
  let h = OSNOVA;
  for (let i = 0; i < stroka.length; i += 1) {
    h ^= BigInt(stroka.charCodeAt(i));
    h = (h * MNOZHITEL) & MASKA;
  }
  return h.toString(16).padStart(16, "0");
}

/**
 * Ключ записи: всё, что слышно. Текст, темп и признак разговора на два голоса.
 * Голоса перечислять незачем — какой именно голос читает, решает скрипт, и
 * менять его без переозвучки всё равно нельзя.
 */
export function klyuchZvuka(text: string, temp: TempZvuka, dvaGolosa = false): string {
  return otpechatok(`${temp}|${dvaGolosa ? "2" : "1"}|${text.trim()}`);
}

/** Адрес записи на сайте. Пусто не бывает: файл либо есть, либо проверка упала. */
export function adresZvuka(rod: RodZvuka, klyuch: string): string {
  return `/zvuk/${rod}/${klyuch}.mp3`;
}

/** Короткий путь для блока материала. */
export function adresBloka(text: string, temp: TempZvuka, dvaGolosa = false): string {
  return adresZvuka("blok", klyuchZvuka(text, temp, dvaGolosa));
}

/** Слово словаря читается медленно и по одному. */
export function adresSlova(slovo: string): string {
  return adresZvuka("slovo", klyuchZvuka(slovo, "slow"));
}

/** Образец к заданию «произнеси вслух». */
export function adresObrazca(fraza: string): string {
  return adresZvuka("obrazec", klyuchZvuka(fraza, "slow"));
}
