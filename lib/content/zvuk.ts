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
export type RodZvuka = "blok" | "slovo" | "obrazec" | "vopros";

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

/**
 * Запись при вопросе — та, по которой спрашивают.
 *
 * Отдельная папка от образцов не ради порядка: одна и та же фраза может быть и
 * образцом для повторения, и вопросом на понимание. Смешай их — и правка одной
 * молча испортит другую.
 */
export function adresVoprosa(fraza: string): string {
  return adresZvuka("vopros", klyuchZvuka(fraza, "slow", razgovorLi(fraza)));
}

/**
 * Разговор ли это.
 *
 * Вопрос на слух часто бывает разговором: спросили — ответили. Прочитанный
 * одним голосом, он перестаёт быть разговором и становится длинным
 * предложением, а решение владельца от 19 августа требует двух голосов. Реплики
 * в таких записях разделены тире с пробелами — так они и записаны в материалах.
 *
 * Правило живёт здесь, а не в скрипте озвучки, по той же причине, что и всё
 * остальное в этом файле: считать имя файла должны одинаково и скрипт, и
 * страница. Разойдутся — ученик получит тишину.
 */
export function razgovorLi(text: string): boolean {
  return / — /.test(text);
}

/**
 * Ячейка таблицы: название буквы, форма глагола, что угодно, что ученик хочет
 * послушать отдельно. Живёт в той же папке, что и слова словаря: и там, и там
 * звучит одна короткая единица, и разделять их незачем.
 */
export function adresYacheyki(chto: string): string {
  return adresZvuka("slovo", klyuchZvuka(chto, "slow"));
}

/**
 * Разговор из примера: звучит целиком, одной записью, на два голоса.
 *
 * Отдельно от `adresYacheyki`, потому что ключ учитывает признак двух голосов:
 * один и тот же текст, прочитанный одним голосом и двумя, — это разные записи.
 */
export function adresRazgovora(text: string): string {
  return adresZvuka("blok", klyuchZvuka(text, "slow", true));
}

/**
 * Что звучит у примера или таблицы — одним списком «строка → что произнести».
 *
 * Записей две, потому что случая два. `zvuchat` — обычный: произносится ровно
 * то, что напечатано. `zvuk` — расхождение: в ячейке «A a», а произнести надо
 * название буквы один раз.
 *
 * Собирать их вместе должны одинаково страница урока, скрипт озвучки и
 * проверки. Разойдись они — и ученик получит кнопку без файла, а проверка
 * этого не увидит.
 */
export function zvuchashchee(
  block: { zvuk?: Record<string, string>; zvuchat?: string[] }
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of block.zvuchat ?? []) out[s] = s;
  // `zvuk` идёт вторым: где обе записи назвали одну строку, побеждает та,
  // которая говорит, ЧТО произнести.
  for (const [k, v] of Object.entries(block.zvuk ?? {})) out[k] = v;
  return out;
}
