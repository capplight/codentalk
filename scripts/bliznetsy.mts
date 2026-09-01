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

/**
 * Доля общих слов: пересечение к МЕНЬШЕМУ из двух наборов.
 *
 * Первая редакция делила на больший — и порода пряталась ровно этим. Работа,
 * которая цитирует строку урочного текста, ДОБАВЛЯЕТ слов, набор растёт, и доля
 * ПАДАЕТ ниже порога. Модуль 24 Elementary: вопрос работы дословно повторял
 * вопрос урока вместе с ответом и списком `accept`, а доля выходила 43% и в
 * отчёт не попадала. Нашёл методист 1 сентября 2026.
 *
 * Деление на меньший отвечает на нужный вопрос: сколько слов УРОЧНОГО условия
 * встретилось в условии работы.
 */
function shozhest(a: string, b: string): number {
  const A = new Set(slova(a));
  const B = new Set(slova(b));
  if (!A.size || !B.size) return 0;
  let obshchih = 0;
  for (const x of A) if (B.has(x)) obshchih += 1;
  return obshchih / Math.min(A.size, B.size);
}

/**
 * Всё, что ученик видит кнопками и строками ответа. Знак впереди хранит роль:
 * иначе верный вариант одного задания совпал бы с неверным другого, а это
 * совсем не то же самое.
 */
function varianty(b: any): string[] {
  // Тексты чистятся тем же разбором, что и условие. Без этого
  // `She was driving while I was sleeping` и та же строка С ТОЧКОЙ не
  // совпадали — настоящий близнец в модуле 7 Elementary прятался за одним
  // знаком. Нашёл методист 1 сентября 2026.
  const ch = (s: string) => slova(String(s ?? "")).join(" ");
  const out: string[] = [];
  if (b.options) for (const o of b.options) out.push(`${o.correct ? "+" : "-"}${ch(o.text)}`);
  if (b.parts) for (const p of b.parts) if (p.selectable) out.push(`${p.correct ? "+" : "-"}${ch(p.text)}`);
  if (typeof b.answer === "string") out.push(`=${ch(b.answer)}`);
  if (b.items) out.push(`items:${b.items.map(ch).join("|")}`);
  if (b.left && b.right) out.push(`L:${b.left.map(ch).join("|")} R:${b.right.map(ch).join("|")}`);
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
    // ПАРТНЁР ВЫБИРАЕТСЯ ПО СИЛЕ ПРИЗНАКА, А НЕ ПО ДОЛЕ СЛОВ.
    //
    // Первая редакция брала задание с наибольшей долей общих слов и сверяла
    // варианты только с ним — а совпадать варианты могли с ДРУГИМ заданием.
    // Так прятались настоящие близнецы: `q-prosba-vybor` в модуле 19 Beginner
    // имеет долю 11%, но две его кнопки совпадают с урочными дословно. Нашёл
    // методист 1 сентября 2026, прогнав ту же сверку вручную.
    const vq = varianty(q);
    let luchshiy: any = null;
    let dolya = 0;
    let doslovno: string[] = [];
    for (const t of zadaniyaUrokov) {
      const s = shozhest(q.prompt, t.prompt);
      const d = vq.filter((v) => varianty(t).includes(v));
      // Совпавший вариант сильнее любой доли: у худших близнецов совпадают все
      // кнопки разом, включая верную.
      const silnee =
        d.length > doslovno.length || (d.length === doslovno.length && s > dolya);
      if (silnee) {
        dolya = s;
        doslovno = d;
        luchshiy = t;
      }
    }
    if (!luchshiy) continue;

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

// ---------------------------------------------------------------------------
// ВТОРАЯ ПОРОДА: РАБОТА ПЕРЕСПРАШИВАЕТ УРОЧНЫЙ МАТЕРИАЛ.
//
// Первая половина скрипта сверяет вопрос работы с ЗАДАНИЯМИ уроков. А работа
// умеет списывать и у самого материала: вставить в условие дословную строку из
// текста для чтения того же модуля и спросить по ней. Урок чтения тогда
// переигрывается второй раз вместо нового умения.
//
// Нашёл методист 1 сентября 2026, прогнав сверку вручную: на Elementary таких
// мест 32 в семнадцати модулях, из них в одиннадцати спрашивается ТОТ ЖЕ ФАКТ,
// который урок уже спросил по тому же тексту. На Beginner — ноль: там работы
// текстов не цитируют. Значит проверка не будет кричать на правильное.
//
// Сверяется дословное вхождение предложения длиной от пяти слов: короткая
// строка вроде «Call me» встречается и случайно.
// ---------------------------------------------------------------------------
let citat = 0;
const citaty: string[] = [];

for (const m of kurs.modules as Module[]) {
  if (modSlugi.length && !modSlugi.includes(m.slug)) continue;
  const voprosy = (m.quiz?.questions ?? []) as any[];
  if (!voprosy.length) continue;

  // Все строки материала модуля: тексты для чтения и расшифровки записей.
  const stroki: Array<{ text: string; gde: string }> = [];
  for (const urok of m.lessons) {
    for (const b of urok.blocks as any[]) {
      if (b.kind === "text" && Array.isArray(b.body)) {
        for (const s of b.body) stroki.push({ text: String(s), gde: `${urok.slug} · ${b.id}` });
      }
      if (b.kind === "audio" && typeof b.transcript === "string") {
        for (const s of b.transcript.split(/[.!?]\s+/)) {
          if (s.trim()) stroki.push({ text: s.trim(), gde: `${urok.slug} · ${b.id}` });
        }
      }
    }
  }

  for (const q of voprosy) {
    const uslovie = String(q.prompt ?? "");
    for (const s of stroki) {
      const slov = slova(s.text).length;
      if (slov < 5) continue;
      if (!uslovie.includes(s.text.replace(/[.!?]+$/, ""))) continue;
      if (resheno.some((r) => q.id === r.chto)) break;
      citat += 1;
      citaty.push(
        `  [${q.id}] цитирует материал урока ${s.gde}\n` +
          `     строка: ${s.text}\n` +
          `     условие: ${uslovie.slice(0, 110)}`
      );
      break;
    }
  }
}

if (citaty.length) {
  console.log(`\n=== Работа цитирует урочный материал — ${citat}`);
  for (const c of citaty) console.log(c);
  console.log(
    "\n  Правится дешевле всего так: брать не строку урочного текста, а КОРОТКИЙ\n" +
      "  НОВЫЙ текст того же жанра. Тогда снимается вся порода разом."
  );
}

console.log(`\nБлизнецов: ${vsego}. Разобрано раньше и потому пропущено: ${zamolchalo}.`);
if (citat) console.log(`Из них цитирующих урочный материал: ${citat}.`);
console.log(
  "Это сведения, а не ошибка. Совпадение бывает законным — «Сопоставь букву и её\n" +
    "название» сказать иначе нельзя. Решает методист, решённое кладётся в\n" +
    "courses/resheno.ts. Порода правится так: менять и предмет, и ВИД действия —\n" +
    "где урок давал выбор, работа требует произвести ответ или назвать причину."
);
