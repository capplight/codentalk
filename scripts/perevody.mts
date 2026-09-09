/**
 * Мерка переделки объяснений: три числа, по которым видно состояние ступени.
 *
 * 1. СТРОКИ ПРИМЕРОВ С ПЕРЕВОДОМ. Правило 9 (`docs/format-uroka.md`, раздел
 *    «Объяснение пишется по-русски»): английская строка не стоит без перевода.
 *    Считаются только строки, в которых есть английские буквы: русская подпись
 *    и дата цифрой перевода не требуют.
 *
 * 2. ССЫЛКИ НА ДРУГИЕ МОДУЛИ. Правило 13: связь с соседними модулями — часть
 *    объяснения. Ищется в видимом тексте, а не в комментариях: комментарии
 *    ученик не читает, а «модуль» в шапке файла стоит в каждом.
 *
 * 3. ОДНА СТРОКА — ДВА РАЗНЫХ ПЕРЕВОДА В ОДНОМ МОДУЛЕ. Ученик читает их подряд
 *    и ищет разницу, которой нет. Проверка написана 31 августа 2026 по находке
 *    редактора: `Can I help you?` переводилось в модуле 23 тремя способами —
 *    «Чем могу помочь?», «Что будете заказывать?» и «Тебе помочь?» в собственном
 *    разборе того же модуля. Это сведения, а не ошибка: расхождение бывает и
 *    нарочным, когда урок показывает два русских соответствия одной строке.
 *
 * Ярлыков в сводах здесь НЕТ нарочно, хотя они и были третьей мыслью. Их уже
 * ищет `npm run yazyk` во всём видимом тексте, а отличить свод от обычной
 * таблицы скрипт не может: у пяти сводов ступени Elementary общего имени нет.
 * Полусработавшая проверка хуже отсутствующей — её перестают читать.
 *
 * Скрипт НИЧЕГО НЕ ЗАПРЕЩАЕТ и сборку не останавливает. Он отвечает на вопрос
 * «сколько осталось», а не «верно ли написано»: перевод бывает и лишним
 * (строка «I am» в таблице форм), а ссылка на модуль — навязчивой.
 *
 *     npm run perevody                    все курсы
 *     npm run perevody -- english-starter  один курс
 *     npm run perevody -- english-starter --chego   чего не хватает, по строкам
 */
import { courses } from "../courses/index.ts";
import { isTask, type Block, type Module } from "../lib/content/types.ts";
import { razgovorVStroke } from "../lib/content/zvuk.ts";

const kursSlug = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : undefined;
const pokazatChego = process.argv.includes("--chego");

/**
 * Нужен ли строке перевод рядом.
 *
 * Английские буквы есть — значит по умолчанию нужен. Два случая, когда нет, и
 * оба нашлись на ступени Beginner, где перевод устроен иначе, чем на
 * Elementary:
 *
 * 1. Перевод уже стоит В САМОЙ СТРОКЕ: `I am Alim. — Я Алим.` Признак —
 *    кириллица внутри строки. Первая редакция этого не знала и объявила
 *    непереведёнными 611 строк из 611, включая переведённые.
 * 2. Строка — имя собственное или одиночное слово в уроке алфавита (`Dana`,
 *    `spell`, пара букв `G — J`). Переводить там нечего: урок о написании.
 *
 * Второй случай узнаётся грубо — по отсутствию пробела и точки. Скрипт даёт
 * сведения, а не ошибку, поэтому промолчать здесь безопаснее, чем закричать.
 */
function nuzhenPerevod(s: string): boolean {
  if (!/[A-Za-z]/.test(s)) return false;
  if (/[А-Яа-яЁё]/.test(s)) return false;
  // Тире реплики словом не считается: `— Alim.` — это одно слово, а не два.
  // Продиктованное по буквам тоже: `— Aigerim. A-I-G-E-R-I-M.` — это имя и оно
  // же по буквам, переводить там нечего.
  const bezTire = s
    .replace(/^\s*—\s*/, "")
    .replace(/\b(?:[A-Za-z]-){2,}[A-Za-z]\.?/g, "")
    .trim();
  const slov = bezTire.split(/\s+/).filter(Boolean).length;
  if (slov <= 1) return false;
  // Пара или ряд отдельных букв: `G — J`, `A B C`, продиктованное `A-L-I-M.`
  if (/^(?:[A-Za-z](?:\s*[—-]\s*|\s+))*[A-Za-z]\.?$/.test(bezTire)) return false;
  // Строка, у которой ЕСТЬ СВОЁ ТИРЕ и обе половины английские: `work —
  // working`, `a doctor — an artist`. Перевода такая строка не получает, и это
  // правило редактора от 31 августа 2026, а не поблажка проверки: перевод
  // выводится на страницу через своё тире и с этим слился бы — на экране вышло
  // бы четыре куска подряд, и какой к какому, не разобрать. Такие пары
  // переводятся словарём урока или таблицей.
  if (/\s—\s/.test(bezTire)) return false;
  return true;
}

interface Schyot {
  strok: number;
  sPerevodom: number;
  ssylki: number;
  /** Одна и та же строка, переведённая в модуле двумя разными способами. */
  raznoboy: number;
  /** Английская строка ВНУТРИ объяснения или врезки, у которой русского нет вовсе. */
  golye: number;
  /** Строка таблицы с целой английской фразой, где ни в одной ячейке нет русского. */
  tablicyBezRusskogo: number;
}

/**
 * Английская строка внутри объяснения или врезки, у которой русского нет рядом.
 *
 * ЗАЧЕМ ЭТО ЗАВЕДЕНО — 7 сентября 2026. Второй редактор принимал модуль 9 и
 * нашёл двенадцать таких строк: `Is the box big? — Yes, it is.`,
 * `What colour is it? — Red.` и ещё десять. **Шесть экранов урока 3 шли без
 * единого русского слова рядом с английским.**
 *
 * А `npm run perevody` показывал 100 %. И показывал верно — по своему вопросу:
 * он считает строки ПРИМЕРОВ, у которых есть поле `perevod`, а эти лежат внутри
 * `explain`, где такого поля нет вовсе. Проверка отвечала на свой вопрос, а не
 * на мой, — порода, которой проект дорожит с тех пор, как «порода снята» из
 * чистого отчёта однажды не вывелась.
 *
 * ЧИНИТСЯ ЭТО НЕ ПОЛЕМ, А ПЕРЕПИСЫВАНИЕМ: у объяснения перевода нет и не будет,
 * значит строку разводят надвое, как это делает модуль 7, — вопрос отдельной
 * строкой с русским рядом, ответ отдельной. Потому здесь сведения, а не ошибка.
 *
 * ПАРЫ СЮДА НЕ СЧИТАЮТСЯ. `fourteen — forty`, `work — worked`, `G — J` перевода
 * не получают по давнему правилу редактора: перевод выводится через тире и с
 * их собственным тире слился бы. Отличает пару от разговора `razgovorVStroke`:
 * у разговора перед тире стоит знак конца предложения.
 */
function goloyStrokoy(t: string): boolean {
  const s = t.trim();
  if (!/[A-Za-z]/.test(s)) return false;
  if (/[А-Яа-яЁё]/.test(s)) return false;
  // Транскрипция, одиночное слово, ряд букв — не строка.
  if (/^\/[^/]+\/$/.test(s)) return false;
  const bezTire = s.replace(/^—\s*/, "");
  if (bezTire.split(/\s+/).filter(Boolean).length <= 1) return false;
  // Пара со своим тире — законно без перевода; разговор — нет.
  if (/\s—\s/.test(s) && !razgovorVStroke(s)) return false;
  return true;
}

/** Строки примера: у примера они разделены переводом строки. */
function strokiPrimera(text: string): string[] {
  return text.split("\n").map((s) => s.trim()).filter(Boolean);
}

/**
 * Ссылка на модуль в видимом тексте.
 *
 * ОСТОРОЖНО, ЗДЕСЬ ЛОВУШКА, И Я В НЕЁ УЖЕ ПОПАЛ ПРИ НАПИСАНИИ ЭТОГО ЖЕ ФАЙЛА.
 * Первая редакция кончалась на `модул[еяию]\b` и не находила НИ ОДНОЙ ссылки
 * из девятнадцати: `\b` в JavaScript считает словом только `[A-Za-z0-9_]`, а
 * между кириллической буквой и пробелом границы для него нет. Ровно из-за неё
 * когда-то не находилась ни одна калька и ни одна ссылка на имя модуля.
 * Поэтому конец слова задан явным перечнем букв, а не `\b`.
 */
const SSYLKA = /модул[еяию](?![А-Яа-яЁё])/i;

/**
 * ЧЕТВЁРТОЕ ЧИСЛО: С ЧЕГО НАЧИНАЕТСЯ УРОК ПРАВИЛ.
 *
 * Приписано 3 сентября 2026, после того как владелец открыл модуль 2 ступени
 * Elementary, урок 4 «Мой вчерашний день» и сказал про его вступление:
 * «рандомная блевотина из слов… даже я, будучи опытным учителем, не понимаю
 * вообще о чём речь». Там стояло:
 *
 *     «Одно дело — ещё не рассказ. Рассказ выходит, когда дел несколько и они
 *      идут по порядку.»
 *
 * Это ОПРЕДЕЛЕНИЕ нашего же слова: ученику объясняют, что такое «рассказ», хотя
 * он пришёл не за этим. Правило 8 (`docs/format-uroka.md`) требует обратного —
 * называть русскую фразу, которой ученик пользуется каждый день: «сначала я
 * работал, потом приготовил ужин».
 *
 * ПОЧЕМУ МЕРКА ИМЕННО ТАКАЯ, А НЕ ПРОЩЕ. Первая попытка считала первое
 * предложение плохим, если в нём нет ни английской строки, ни русской фразы в
 * кавычках: 119 уроков из 146. Она хоронила и принятый владельцем образец —
 * модуль 8 начинается «В субботу у Данияра шахматы, и он говорит об этом
 * заранее», и это ХОРОШО. Разница не в наличии кавычек:
 *
 *   · СЦЕНА — есть человек и время: «Вчера в семь вечера у тебя шла работа».
 *     Ученику есть что представить.
 *   · ОБОБЩЕНИЕ — подлежащее это наше слово о предмете: «рассказ», «разговор»,
 *     «предложение», «дело». Представить нечего.
 *
 * Поэтому замечание ставится только там, где первое предложение начинается
 * обобщением И в нём нет ни лица, ни времени, ни английской строки, ни русской
 * фразы. Первый прогон: Elementary 12, Beginner 3 — счёт сошёлся с тем, что
 * владелец видит глазами, и все двенадцать при чтении оказались настоящими.
 *
 * Это СВЕДЕНИЯ, а не ошибка. Урок умений (чтение, слушание, письмо, говорение)
 * начинается иначе — он ставит случай, — и в счёт не входит вовсе.
 */
const LICO = /\bты\b|\bтебе\b|\bтебя\b|\bтвой|\bтвоя|\bтвоё|\bтвои|Дана|Дане|Даны|Алим|Айгуль|Данияр|сослужив|подруг|друг|мам|брат|сестр/i;
const VREMYA = /вчера|сегодня|завтра|утром|вечером|в субботу|в воскресенье|в семь|в пять|на прошлой неделе|только что|сейчас/i;
const OBOBSHCHENIE = /^(рассказ|разговор|предложение|дело|слово|форма|вопрос|ответ|описание|строка|глагол|фраза|правило|запись|список|текст|письмо|одно дело|две|три|каждый|обычно|чаще всего|иногда|раньше)/i;

/** Урок умений вступление ставит иначе: он называет случай, а не строку. */
function urokUmeniy(lesson: Module["lessons"][number]): boolean {
  return lesson.blocks.some((b) => ["text", "audio", "essay", "speak"].includes(b.kind));
}

/** Начинается ли урок правил обобщением вместо сцены или русской фразы. */
function nachatObobshcheniem(perv: string): boolean {
  if (/[A-Za-z]/.test(perv)) return false;
  if (/[«"„][^»"“]{2,}[»"“]/.test(perv)) return false;
  if (/по-русски/i.test(perv)) return false;
  if (LICO.test(perv) || VREMYA.test(perv)) return false;
  return OBOBSHCHENIE.test(perv);
}

function razobrat(m: Module, chego: string[]): Schyot {
  const s: Schyot = { strok: 0, sPerevodom: 0, ssylki: 0, raznoboy: 0, golye: 0, tablicyBezRusskogo: 0 };
  // Разнобой ищется ВНУТРИ модуля, а не по курсу: между модулями одна строка
  // законно переводится по-разному, потому что стоит в разных сценах.
  const vstrechalos = new Map<string, string>();

  for (const lesson of m.lessons) {
    for (const b of lesson.blocks as Block[]) {
      if (isTask(b)) continue;

      if (b.kind === "example") {
        for (const stroka of strokiPrimera(b.text ?? "")) {
          if (!nuzhenPerevod(stroka)) continue;
          s.strok += 1;
          const perevod = b.perevod?.[stroka];
          if (perevod) {
            s.sPerevodom += 1;
            const bylo = vstrechalos.get(stroka);
            if (bylo && bylo !== perevod) {
              s.raznoboy += 1;
              chego.push(
                `${m.slug} · ${lesson.slug} · один перевод на двоих: «${stroka}» — ` +
                  `«${bylo}» и «${perevod}»`
              );
            } else if (!bylo) {
              vstrechalos.set(stroka, perevod);
            }
          } else {
            chego.push(`${m.slug} · ${lesson.slug} · без перевода: ${stroka}`);
          }
        }
      }

      // Английская строка внутри объяснения или врезки без русского рядом.
      if (b.kind === "explain" || b.kind === "note") {
        for (const t of b.text) {
          if (!goloyStrokoy(t)) continue;
          s.golye += 1;
          chego.push(
            `${m.slug} · ${lesson.slug} · ${b.kind === "note" ? "врезка" : "объяснение"} ` +
              `${b.id}: русского рядом нет — ${t.trim()}`
          );
        }
      }

      /*
       * СТРОКА ТАБЛИЦЫ С ЦЕЛОЙ АНГЛИЙСКОЙ ФРАЗОЙ И БЕЗ РУССКОГО РЯДОМ.
       *
       * ПОВОД — находка второго редактора модуля 14, 10 сентября 2026: три
       * таблицы модуля из семи оставляли английские строки без перевода,
       * включая таблицу главного противопоставления. А эта проверка таблиц НЕ
       * ВИДЕЛА ВОВСЕ — она брала у таблицы одну подпись.
       *
       * ПРИЗНАК СУЖЕН ДО ЦЕЛОЙ ФРАЗЫ НАРОЧНО, и вот чем это вызвано. Первая
       * редакция считала английской всякую ячейку от трёх латинских слов — и
       * закричала на таблицы ФОРМ: `I was not | I wasn't`, `my first name |
       * my surname`. Им перевод по строке не нужен: это парадигма, а не
       * строки. Счёт по всем курсам был 137 + 271 + 33.
       *
       * Теперь ячейка считается фразой, только если начинается с заглавной и
       * кончается точкой, вопросительным или восклицательным знаком. Счёт стал
       * 129 + 160 + 13, и на новом курсе это ровно две таблицы, обе названные
       * редактором.
       *
       * ЗАМОРОЖЕННЫЕ КУРСЫ ДАЮТ МНОГО, и это ожидаемо: они писались до правила
       * «у каждой английской строки перевод рядом», и чинить там нечего.
       */
      if (b.kind === "table" && Array.isArray(b.rows)) {
        const fraza = (c: string) =>
          /^[A-Z][^\u0400-\u04FF]*[.?!]$/.test(c.trim()) && (c.match(/[A-Za-z']+/g) ?? []).length >= 3;
        for (const ryad of b.rows) {
          if (!ryad.some((c) => fraza(String(c)))) continue;
          if (ryad.some((c) => /[\u0400-\u04FF]/.test(String(c)))) continue;
          s.tablicyBezRusskogo += 1;
          chego.push(
            `${m.slug} · ${lesson.slug} · таблица ${b.id}: русского в строке нет — ` +
              ryad.join(" | ")
          );
        }
      }

      // Ссылки ищем во всём видимом тексте блока, кроме заданий.
      const vidimoe: string[] = [];
      if (b.kind === "explain") vidimoe.push(...b.text);
      if (b.kind === "example") vidimoe.push(b.text ?? "", b.explain ?? "");
      if (b.kind === "note") vidimoe.push(...b.text);
      if (b.kind === "table") vidimoe.push(b.caption ?? "");
      for (const t of vidimoe) if (SSYLKA.test(t)) s.ssylki += 1;
    }
  }
  return s;
}

for (const course of courses) {
  if (kursSlug && course.slug !== kursSlug) continue;

  const chego: string[] = [];
  const itog: Schyot = { strok: 0, sPerevodom: 0, ssylki: 0, raznoboy: 0, golye: 0, tablicyBezRusskogo: 0 };
  const poModulyam: Array<[string, Schyot]> = [];

  for (const m of course.modules) {
    const s = razobrat(m, chego);
    poModulyam.push([m.slug, s]);
    itog.strok += s.strok;
    itog.sPerevodom += s.sPerevodom;
    itog.ssylki += s.ssylki;
    itog.raznoboy += s.raznoboy;
    itog.golye += s.golye;
    itog.tablicyBezRusskogo += s.tablicyBezRusskogo;
  }

  const dolya = itog.strok ? Math.round((itog.sPerevodom / itog.strok) * 100) : 100;
  console.log(`\n=== ${course.title} (${course.slug})`);
  console.log(`Строк примеров по-английски: ${itog.strok}`);
  console.log(`Из них с переводом рядом:    ${itog.sPerevodom} (${dolya}%)`);
  console.log(`Ссылок на другие модули:     ${itog.ssylki}`);
  console.log(`Строк с двумя переводами:    ${itog.raznoboy}`);
  console.log(
    `Голых строк в объяснениях:   ${itog.golye}` +
      ` (сведения: английское без русского рядом; чинится разводом надвое)`
  );
  console.log(
    `Строк таблиц без русского:   ${itog.tablicyBezRusskogo}` +
      ` (сведения: целая английская фраза в таблице, где русского нет ни в одной ячейке)`
  );

  // Четвёртое число: уроки правил, начатые обобщением, а не сценой.
  const obobshcheniya: string[] = [];
  let urokovPravil = 0;
  for (const [mi, m] of course.modules.entries()) {
    for (const [li, lesson] of m.lessons.entries()) {
      if (urokUmeniy(lesson)) continue;
      const first = lesson.blocks.find((b) => !isTask(b) && b.kind === "explain");
      if (!first || first.kind !== "explain") continue;
      urokovPravil += 1;
      const perv = String(first.text[0] ?? "").trim();
      if (nachatObobshcheniem(perv)) {
        obobshcheniya.push(`м${mi + 1} у${li + 1} ${lesson.title}\n      → ${perv}`);
      }
    }
  }
  console.log(
    `Уроков правил начато обобщением: ${obobshcheniya.length} из ${urokovPravil}` +
      ` (сведения: ждут сцены или русской фразы)`
  );
  if (pokazatChego) for (const o of obobshcheniya) console.log(`    ${o}`);

  console.log(`\nПо модулям (строк / с переводом / ссылок):`);
  poModulyam.forEach(([slug, s], i) => {
    const znak = s.strok === s.sPerevodom ? "  " : "→ ";
    console.log(`${znak}${String(i + 1).padStart(2)}. ${slug.padEnd(24)} ${String(s.strok).padStart(3)} / ${String(s.sPerevodom).padStart(3)} / ${s.ssylki}`);
  });

  if (pokazatChego) {
    console.log(`\nЧего не хватает (${chego.length}):`);
    for (const c of chego) console.log(`  ${c}`);
  } else if (chego.length) {
    console.log(`\nЧтобы увидеть каждую строку: npm run perevody -- ${course.slug} --chego`);
  }
}
