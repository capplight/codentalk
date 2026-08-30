/**
 * Близнецы: вопрос проверочной работы, повторяющий задание урока.
 *
 * ЗАЧЕМ. Это самая устойчивая ошибка проекта: работа пишется ПОСЛЕ заданий
 * уроков и по их образцу — тот же вид задания, то же условие, менялось одно
 * слово. Ученик тогда отвечает по узнаванию вида задания, а не разбирая
 * языковой факт заново, и работа перестаёт что-либо показывать.
 *
 * ЧЕГО НЕ ВИДИТ `check:content`. Он сверяет ПОДСКАЗКУ И РАЗБОР — потому что
 * писался против другого случая: разбор работы, списанный с разбора урока. А
 * совпадают чаще всего УСЛОВИЕ и ВАРИАНТЫ. 31 августа 2026 методист написал
 * этот разбор руками и нашёл 39 близнецов на три модуля ступени Beginner, из
 * них четырнадцать дословных, — при чистом отчёте `check:content`.
 *
 * Скрипт написан по его черновику и оставлен постоянным по правилу храповика:
 * механическое уходит в скрипты и обратно не возвращается.
 *
 * ЧТО ОН СЧИТАЕТ. Два признака, и второй важнее первого:
 *
 * 1. Доля общих слов условия. Знаки и регистр снимаются, слова сравниваются
 *    множествами. Порог 0.45 подобран так, чтобы не кричать на «Допиши слово»
 *    и подобные короткие рамки, которых в курсе десятки.
 * 2. ДОСЛОВНО СОВПАВШИЕ ВАРИАНТЫ — два и больше. Это признак сильнее доли:
 *    совпасть могут и разные по виду задания, если у них общий набор кнопок.
 *
 * ЭТО СВЕДЕНИЯ, А НЕ ОШИБКА, и сборку скрипт не останавливает. Совпадение
 * бывает законным: «Сопоставь букву и её название» — голое указание, другого
 * способа сказать нет. Решает методист, и решённое кладётся в
 * `courses/resheno.ts`.
 *
 *     npm run bliznetsy -- english-starter            весь курс
 *     npm run bliznetsy -- english-starter alfavit    один модуль
 */
import { courses } from "../courses/index.ts";
import { isTask, type Module } from "../lib/content/types.ts";
import { resheno } from "../courses/resheno.ts";

const [, , kursSlug, ...modSlugi] = process.argv;

if (!kursSlug) {
  console.error("Укажи курс: npm run bliznetsy -- english-starter [модуль …]");
  process.exit(1);
}

const kurs = courses.find((c) => c.slug === kursSlug);
if (!kurs) {
  console.error(`Курса «${kursSlug}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

/** Условие без знаков и регистра: сравнивать надо слова, а не запятые. */
function slova(s: string): string[] {
  return (s ?? "")
    .toLowerCase()
    .replace(/[«»"'’.,!?:;—–()\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/** Доля общих слов: пересечение к большему из двух наборов. */
function shozhest(a: string, b: string): number {
  const A = new Set(slova(a));
  const B = new Set(slova(b));
  if (!A.size || !B.size) return 0;
  let obshchih = 0;
  for (const x of A) if (B.has(x)) obshchih += 1;
  return obshchih / Math.max(A.size, B.size);
}

/**
 * Всё, что ученик видит кнопками и строками ответа. Знак впереди хранит роль:
 * иначе верный вариант одного задания совпал бы с неверным другого, а это
 * совсем не то же самое.
 */
function varianty(b: any): string[] {
  const out: string[] = [];
  if (b.options) for (const o of b.options) out.push(`${o.correct ? "+" : "-"}${o.text}`);
  if (b.parts) for (const p of b.parts) if (p.selectable) out.push(`${p.correct ? "+" : "-"}${p.text}`);
  if (typeof b.answer === "string") out.push(`=${b.answer}`);
  if (b.items) out.push(`items:${b.items.join("|")}`);
  if (b.left && b.right) out.push(`L:${b.left.join("|")} R:${b.right.join("|")}`);
  return out;
}

const PORG_SHOZHESTI = 0.45;
const PORG_VARIANTOV = 2;

let vsego = 0;
let zamolchalo = 0;

for (const m of kurs.modules as Module[]) {
  if (modSlugi.length && !modSlugi.includes(m.slug)) continue;

  const zadaniyaUrokov: Array<any> = [];
  for (const urok of m.lessons) {
    for (const b of urok.blocks) if (isTask(b)) zadaniyaUrokov.push({ ...(b as any), _urok: urok.slug });
  }
  const voprosy = (m.quiz?.questions ?? []) as any[];
  if (!voprosy.length || !zadaniyaUrokov.length) continue;

  const nahodki: string[] = [];

  for (const q of voprosy) {
    let luchshiy: any = null;
    let dolya = 0;
    for (const t of zadaniyaUrokov) {
      const s = shozhest(q.prompt, t.prompt);
      if (s > dolya) {
        dolya = s;
        luchshiy = t;
      }
    }
    if (!luchshiy) continue;

    const vq = varianty(q);
    const vt = varianty(luchshiy);
    const doslovno = vq.filter((v) => vt.includes(v));

    if (dolya < PORG_SHOZHESTI && doslovno.length < PORG_VARIANTOV) continue;

    // Разобранное молчит. Сверяем ТОЛЬКО с именем вопроса, а не со всей фразой
    // замечания: записи в `resheno.ts` бывают короткими (там лежит слово `like`),
    // и по вхождению в длинную строку такая запись гасила бы всё подряд. На
    // этой ловушке проверка словника однажды замолчала целиком.
    if (resheno.some((r) => q.id === r.chto)) {
      zamolchalo += 1;
      continue;
    }

    vsego += 1;
    nahodki.push(
      `  [${q.id}] ${q.kind}, общих слов ${(dolya * 100).toFixed(0)}%  ↔  ` +
        `${luchshiy._urok} · ${luchshiy.id} (${luchshiy.kind})\n` +
        `     работа: ${q.prompt}\n` +
        `     урок  : ${luchshiy.prompt}` +
        (doslovno.length ? `\n     совпало дословно: ${doslovno.join("  ///  ")}` : "")
    );
  }

  if (nahodki.length) {
    console.log(`\n=== ${m.slug} — вопросов работы ${voprosy.length}, близнецов ${nahodki.length}`);
    for (const n of nahodki) console.log(n);
  }
}

console.log(`\nБлизнецов: ${vsego}. Разобрано раньше и потому пропущено: ${zamolchalo}.`);
console.log(
  "Это сведения, а не ошибка. Совпадение бывает законным — «Сопоставь букву и её\n" +
    "название» сказать иначе нельзя. Решает методист, решённое кладётся в\n" +
    "courses/resheno.ts. Порода правится так: менять и предмет, и ВИД действия —\n" +
    "где урок давал выбор, работа требует произвести ответ или назвать причину."
);
