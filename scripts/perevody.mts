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

function razobrat(m: Module, chego: string[]): Schyot {
  const s: Schyot = { strok: 0, sPerevodom: 0, ssylki: 0 };

  for (const lesson of m.lessons) {
    for (const b of lesson.blocks as Block[]) {
      if (isTask(b)) continue;

      if (b.kind === "example") {
        for (const stroka of strokiPrimera(b.text)) {
          if (!nuzhenPerevod(stroka)) continue;
          s.strok += 1;
          if (b.perevod?.[stroka]) s.sPerevodom += 1;
          else chego.push(`${m.slug} · ${lesson.slug} · без перевода: ${stroka}`);
        }
      }

      // Ссылки ищем во всём видимом тексте блока, кроме заданий.
      const vidimoe: string[] = [];
      if (b.kind === "explain") vidimoe.push(...b.text);
      if (b.kind === "example") vidimoe.push(b.text, b.explain ?? "");
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
  const itog: Schyot = { strok: 0, sPerevodom: 0, ssylki: 0 };
  const poModulyam: Array<[string, Schyot]> = [];

  for (const m of course.modules) {
    const s = razobrat(m, chego);
    poModulyam.push([m.slug, s]);
    itog.strok += s.strok;
    itog.sPerevodom += s.sPerevodom;
    itog.ssylki += s.ssylki;
  }

  const dolya = itog.strok ? Math.round((itog.sPerevodom / itog.strok) * 100) : 100;
  console.log(`\n=== ${course.title} (${course.slug})`);
  console.log(`Строк примеров по-английски: ${itog.strok}`);
  console.log(`Из них с переводом рядом:    ${itog.sPerevodom} (${dolya}%)`);
  console.log(`Ссылок на другие модули:     ${itog.ssylki}`);

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
