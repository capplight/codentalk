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
 * ПОРЯДОК ВЫВОДА — ОТ ХУДШЕГО. Сырое число велико (375 на ступени Beginner) и
 * включает законные совпадения: «Что вписывают в поле Address?» против «В какое
 * поле вписывают фамилию?» — вопрос обратный, и это не близнец. Поэтому список
 * идёт по силе признака: сперва дословно совпавшие варианты, потом доля слов.
 * Разбирать надо сверху, а не подряд.
 *
 *     npm run bliznetsy -- english-starter            весь курс
 *     npm run bliznetsy -- english-starter alfavit    один модуль
 *     npm run bliznetsy -- english-starter --hudshie 20   двадцать худших
 */
import { courses } from "../courses/index.ts";
import { isTask, type Module } from "../lib/content/types.ts";
import { resheno } from "../courses/resheno.ts";

const argv = process.argv.slice(2);
const iHudshie = argv.indexOf("--hudshie");
const skolkoHudshih = iHudshie >= 0 ? Number(argv[iHudshie + 1]) || 20 : 0;
// Из позиционных доводов первый — курс, остальные — модули. Из списка выкинуты
// сам флаг и стоящее за ним число.
const pozicionnye = argv.filter(
  (a, i) => !a.startsWith("--") && !(iHudshie >= 0 && i === iHudshie + 1)
);
const kursSlug = pozicionnye[0];
const modSlugi = pozicionnye.slice(1);

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
const vse: Array<{ modul: string; voprosov: number; nahodki: Array<{ sila: number; dolya: number; text: string }> }> = [];

for (const m of kurs.modules as Module[]) {
  if (modSlugi.length && !modSlugi.includes(m.slug)) continue;

  const zadaniyaUrokov: Array<any> = [];
  for (const urok of m.lessons) {
    for (const b of urok.blocks) if (isTask(b)) zadaniyaUrokov.push({ ...(b as any), _urok: urok.slug });
  }
  const voprosy = (m.quiz?.questions ?? []) as any[];
  if (!voprosy.length || !zadaniyaUrokov.length) continue;

  const nahodki: Array<{ sila: number; dolya: number; text: string }> = [];

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

    // ВОПРОС НА СЛУХ — особый случай, и без этой поблажки проверка кричала на
    // правильное. Рамку «Послушай… Ответь одним словом по-английски» задаёт
    // источник: руководство A2 Key, с. 29, раздел THE TASK требует от ответа
    // на слух одно слово, число, дату или время. Сказать это иначе нельзя, и
    // потому условия таких вопросов похожи всегда — до девяноста процентов.
    //
    // Опасен там не вид задания, а ОТВЕТ: если он совпал с урочным, ученик
    // пишет его по памяти, не слушая записи вовсе. Значит вопрос со звуком
    // показывается только тогда, когда совпал сам ответ. Четыре таких места
    // нашлись на Elementary 1 сентября 2026 — sing, Sunday, well, Friday.
    const naSluh = Boolean((q as any).zvuk) || Boolean((luchshiy as any).about);
    const otvetSovpal = doslovno.some((v) => v.startsWith("=") || v.startsWith("+"));
    if (naSluh && !otvetSovpal) continue;

    // ТО ЖЕ САМОЕ ДЛЯ ЗАДАНИЙ, ГДЕ ОТВЕТ ПИШУТ, А НЕ ВЫБИРАЮТ. Разбор методиста
    // от 1 сентября 2026: у `gap`, `short` и `order` рамка задана видом задания
    // и сказать её иначе нельзя — «Допиши недостающее слово», «Запиши
    // предложение целиком, начни с…». Порог 0.45 на них срабатывает почти
    // всегда, и настоящих среди срабатываний одна шестая.
    //
    // Опасен и здесь ответ: если он совпал дословно, ученик пишет строку по
    // памяти. Проверено методистом по одиннадцати модулям: из полутора сотен
    // остаётся около двадцати пяти, и каждый разобранный оказался настоящим.
    //
    // У `choice` и `hottext` поблажки нет нарочно: там дословно совпавшие
    // ВАРИАНТЫ и есть настоящий признак, и он работает.
    const otvetPishut = q.kind === "gap" || q.kind === "short" || q.kind === "order";
    const otvetDoslovno = doslovno.some((v) => v.startsWith("=") || v.startsWith("items:"));
    if (otvetPishut && !otvetDoslovno) continue;

    // Разобранное молчит. Сверяем ТОЛЬКО с именем вопроса, а не со всей фразой
    // замечания: записи в `resheno.ts` бывают короткими (там лежит слово `like`),
    // и по вхождению в длинную строку такая запись гасила бы всё подряд. На
    // этой ловушке проверка словника однажды замолчала целиком.
    if (resheno.some((r) => q.id === r.chto)) {
      zamolchalo += 1;
      continue;
    }

    vsego += 1;
    nahodki.push({
      sila: doslovno.length,
      dolya,
      text:
        `  [${q.id}] ${q.kind}, общих слов ${(dolya * 100).toFixed(0)}%  ↔  ` +
        `${luchshiy._urok} · ${luchshiy.id} (${luchshiy.kind})\n` +
        `     работа: ${q.prompt}\n` +
        `     урок  : ${luchshiy.prompt}` +
        (doslovno.length ? `\n     совпало дословно: ${doslovno.join("  ///  ")}` : ""),
    });
  }

  if (nahodki.length) {
    nahodki.sort((a, b) => b.sila - a.sila || b.dolya - a.dolya);
    vse.push({ modul: m.slug, voprosov: voprosy.length, nahodki });
  }
}

// Худшее первым: сперва дословно совпавшие варианты, потом доля общих слов.
// Разбирать список надо сверху: сырое число велико и включает законные
// совпадения, а признак «совпал вариант» сильнее любой доли.
if (skolkoHudshih) {
  const ploskiy = vse.flatMap((v) => v.nahodki.map((n) => ({ ...n, modul: v.modul })));
  ploskiy.sort((a, b) => b.sila - a.sila || b.dolya - a.dolya);
  console.log(`\n=== ${Math.min(skolkoHudshih, ploskiy.length)} худших из ${ploskiy.length}`);
  for (const n of ploskiy.slice(0, skolkoHudshih)) console.log(`\n[${n.modul}]\n${n.text}`);
} else {
  for (const v of vse) {
    console.log(`\n=== ${v.modul} — вопросов работы ${v.voprosov}, близнецов ${v.nahodki.length}`);
    for (const n of v.nahodki) console.log(n.text);
  }
}

console.log(`\nБлизнецов: ${vsego}. Разобрано раньше и потому пропущено: ${zamolchalo}.`);
console.log(
  "Это сведения, а не ошибка. Совпадение бывает законным — «Сопоставь букву и её\n" +
    "название» сказать иначе нельзя. Решает методист, решённое кладётся в\n" +
    "courses/resheno.ts. Порода правится так: менять и предмет, и ВИД действия —\n" +
    "где урок давал выбор, работа требует произвести ответ или назвать причину."
);
