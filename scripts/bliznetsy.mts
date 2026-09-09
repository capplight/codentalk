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

const naydennyy = courses.find((c) => c.slug === kursSlug);
if (!naydennyy) {
  console.error(`Курса «${kursSlug}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}
// Сторож выше стоял и раньше, но сужение типа теряется внутри функций ниже:
// TypeScript не переносит его через замыкание. Отдельное имя это чинит.
const kurs = naydennyy;

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

/**
 * БАНК ВОПРОСОВ И ТЕ УРОКИ, У КОТОРЫХ ОН МОГ СПИСАТЬ.
 *
 * Приписано 3 сентября 2026, по находке методиста. До этого скрипт обходил
 * только `kurs.modules` и работы ЧАСТЕЙ не видел вовсе: они лежат в
 * `kurs.parts[].quiz`. Восемьдесят вопросов ступени Elementary простояли
 * непроверенными, и методист нашёл в них руками пять близнецов — из них один
 * страшнее обычного: отвлекающий дословно совпадал с ВЕРНЫМ вариантом работы
 * модуля 7, то есть ученик, запомнивший строку как верную, выбирал её и
 * ошибался.
 *
 * Та же дыра была у `npm run kontrol`. Общее правило отсюда: **проверка,
 * написанная под модули, новый вид содержания не видит и об этом не говорит.**
 * Отчёт у неё остаётся чистым — ровно как «содержание, до которого нет дороги,
 * выглядит в отчёте как работающее».
 *
 * У работы части своя мерка списывания: она могла списать у ЛЮБОГО модуля
 * своей части, а не у одного.
 */
interface Bank {
  imya: string;
  voprosy: any[];
  moduli: Module[];
}

function banki(): Bank[] {
  const out: Bank[] = [];
  for (const m of kurs.modules as Module[]) {
    if (modSlugi.length && !modSlugi.includes(m.slug)) continue;
    out.push({ imya: m.slug, voprosy: (m.quiz?.questions ?? []) as any[], moduli: [m] });
  }
  for (const chast of (kurs as any).parts ?? []) {
    const voprosy = (chast.quiz?.questions ?? []) as any[];
    if (!voprosy.length) continue;
    const moduli = (kurs.modules as Module[]).filter((m) => chast.modules.includes(m.slug));
    if (modSlugi.length && !moduli.some((m) => modSlugi.includes(m.slug))) continue;
    out.push({ imya: `часть ${chast.slug}`, voprosy, moduli });
  }
  return out;
}

/**
 * Вопросы работ, повторяющие друг друга: и в разных модулях, и внутри одной
 * работы.
 *
 * ЗАЧЕМ. До 6 сентября 2026 проверка сверяла работу модуля с уроками и
 * материалом ЕГО ЖЕ модуля — а работу соседа не открывала вовсе. Методист
 * нашёл это руками, дописывая работу модуля 5: его вопрос со звуком просил
 * записать возраст цифрой, а вопрос работы модуля 4 — записать цифрой число.
 * Одно и то же действие в двух работах подряд, и отчёт молчал по устройству.
 *
 * Ученик проходит работы одну за другой, и для него это два соседних экрана,
 * а не два разных файла.
 *
 * Порог выше, чем у сверки с уроками: у работ рамки условий похожи законно
 * («Послушай запись и ответь одним словом» задаёт источник), и на обычном
 * пороге проверка кричала бы на правильное. Считаем близнецом только при
 * СОВПАВШЕМ ВИДЕ задания и доле общих слов от семидесяти процентов, либо при
 * дословно совпавшем варианте ответа — этот признак сильнее любой доли.
 */
function mezhduRabotami(): void {
  /*
   * Заглушки пропускаем и говорим об этом вслух. Две работы курса стоят
   * незаполненными, и все их условия — одна и та же строка «ПИШЕТ МЕТОДИСТ»:
   * без этой поблажки отчёт тонет в парах со стопроцентным совпадением рыбы.
   * Правило проекта: проверке на близнецов нельзя верить, пока модуль не
   * дописан, — а значит она обязана сама сказать, чего не считала.
   */
  const vse: Array<{ modul: string; q: any }> = [];
  const propushcheno = new Map<string, number>();
  for (const m of kurs.modules as Module[]) {
    for (const q of (m.quiz?.questions ?? []) as any[]) {
      if (zaglushka(String(q.prompt ?? ""))) {
        propushcheno.set(m.slug, (propushcheno.get(m.slug) ?? 0) + 1);
        continue;
      }
      vse.push({ modul: m.slug, q });
    }
  }
  /*
   * СЧИТАЕМ ВОПРОСЫ, А НЕ РАБОТЫ, и говорим это вслух.
   *
   * Прежняя строка гласила «Работы с незаполненными вопросами пропущены и НЕ
   * сверялись: …» и называла модули. Сборщик прочёл её буквально и записал в
   * отчёт, что обе его работы проверка пропустила целиком, — а пропущен был по
   * одному вопросу из двенадцати, остальные одиннадцать сверялись как всегда.
   *
   * Отчёт, сказавший о себе больше, чем сделал, обманывает вернее молчания:
   * ему верят и не перепроверяют.
   */
  if (propushcheno.size) {
    const spisok = [...propushcheno]
      .map(([slug, n]) => `${slug} (${n})`)
      .join(", ");
    console.log(
      `  Вопросов с незаполненным условием пропущено — они не сверялись: ` +
        `${spisok}. Прочие вопросы этих же работ сверены. Позвать снова, ` +
        `когда заглушки напишут.`
    );
  }
  const skazano = new Set<string>();
  for (let i = 0; i < vse.length; i += 1) {
    for (let j = i + 1; j < vse.length; j += 1) {
      const a = vse[i];
      const b = vse[j];
      /*
       * ВНУТРИ ОДНОЙ РАБОТЫ СВЕРЯЕМ ТОЖЕ — с 6 сентября 2026. Прежде здесь
       * стояло `if (a.modul === b.modul) continue`, то есть работа не
       * открывалась сама против себя вовсе. Методист нашёл руками, что вопросы
       * 3 и 5 работы модуля 7 — близнецы друг другу: оба `order`, оба «расставь
       * строки по порядку». Соседние экраны одной и той же работы — самое
       * тесное соседство, какое вообще бывает, и именно его проверка не видела.
       */
      if (modSlugi.length && !modSlugi.includes(a.modul) && !modSlugi.includes(b.modul)) continue;
      if (a.q.kind !== b.q.kind) continue;
      const dolya = shozhest(a.q.prompt, b.q.prompt);
      const va = varianty(a.q);
      /*
       * Совпавший вариант короче трёх знаков признаком не считается: ответы
       * `w`, `a`, `s` совпадают у любых двух заданий о букве, и на первом
       * прогоне такие пары дали половину шума при нулевой доле общих слов.
       * Признак должен говорить о СОДЕРЖАНИИ, а не о длине алфавита.
       */
      const doslovno = va
        .filter((v) => varianty(b.q).includes(v))
        .filter((v) => v.replace(/^[=+-]/, "").length >= 3);
      /*
       * ПОРОГ ОДИН И ТОТ ЖЕ ВНУТРИ РАБОТЫ И МЕЖДУ РАБОТАМИ, и это проверено
       * прогоном, а не выбрано на глаз.
       *
       * Замысел был другой: внутри одной работы рамка И ЕСТЬ предмет охоты, и
       * казалось, что порог там должен быть ниже. Пятьдесят процентов испытаны
       * и отвергнуты. Они дали четыре ложных пары («Запиши по-английски „шесть
       * дней"» против «Запиши этот вопрос по-английски»; число словом в цифру
       * против цифры в слово — вопросы обратные друг другу) — и ГЛАВНОГО НЕ
       * НАШЛИ ВСЁ РАВНО.
       *
       * ЧЕГО ЭТА ПРОВЕРКА НЕ ВИДИТ И НЕ УВИДИТ. Пара, ради которой она
       * писалась, — вопросы 3 и 5 работы модуля 7, оба `order`, оба «Расставь
       * строки по порядку: сперва…, потом…, а потом…». Ученик делает одно и то
       * же движение. Общих слов между ними меньше половины: рамка коротка, а
       * дальше идут разные слова о разном предмете. Долей слов такое не
       * ловится ни при каком пороге — ловится только человеком, и мерка у него
       * своя: назови вслух, ЧТО ДЕЛАЕТ ученик.
       */
      if (dolya < 0.7 && doslovno.length === 0) continue;
      /*
       * РАЗОБРАННОЕ МОЛЧИТ — дописано 6 сентября 2026. Ветка сверки работ между
       * собой была написана сегодня же и списка `resheno.ts` не читала вовсе:
       * методист разобрал три пары, положил записи с причинами — и они
       * продолжали печататься.
       *
       * Проверка, которая не умеет замолчать, умирает тихо: её перестают
       * читать, а вместе со старым замечанием теряется и новое. Это записано в
       * шапке самого списка, и всё равно новая ветка про него забыла.
       */
      if (resheno.some((r) => a.q.id === r.chto || b.q.id === r.chto)) {
        zamolchalo += 1;
        continue;
      }
      const klyuch = [a.q.id, b.q.id].sort().join("|");
      if (skazano.has(klyuch)) continue;
      skazano.add(klyuch);
      const gde = a.modul === b.modul ? " — ВНУТРИ ОДНОЙ РАБОТЫ" : "";
      console.log(
        `\n  [${a.modul} · ${a.q.id}] ↔ [${b.modul} · ${b.q.id}]${gde} ` +
          `${a.q.kind}, общих слов ${Math.round(dolya * 100)}%` +
          (doslovno.length ? `, совпало дословно: ${doslovno.join(", ")}` : "") +
          `\n     ${a.modul}: ${a.q.prompt}` +
          `\n     ${b.modul}: ${b.q.prompt}`
      );
    }
  }
}

/**
 * Незаполненная заглушка вместо условия.
 *
 * Проверке на близнецов нельзя верить, пока модуль не дописан: она покажет
 * совпадение ЗАГЛУШЕК, то есть однообразие рыбы, а не текста. Правило записано
 * в CLAUDE.md, и поблажка на него стояла ЗДЕСЬ ЖЕ — но только в одной ветке из
 * трёх, в сверке работ между собой.
 *
 * Нашёл сборщик работы части 1 — 6 сентября 2026: сверка работы с уроками дала
 * ему близнеца на 45%, и совпадала там его же заглушка. То есть каждый новый
 * банк получал ложную находку, пока редактор не написал текст.
 */
const zaglushka = (t: string): boolean =>
  t.includes("ПИШЕТ МЕТОДИСТ") || t.includes("ПИШЕТ РЕДАКТОР");

let propushchenoZaglushek = 0;
let vsego = 0;
let zamolchalo = 0;
const vse: Array<{ modul: string; voprosov: number; nahodki: Array<{ sila: number; dolya: number; text: string }> }> = [];

for (const bank of banki()) {
  const zadaniyaUrokov: Array<any> = [];
  for (const m of bank.moduli) {
    for (const urok of m.lessons) {
      for (const b of urok.blocks) if (isTask(b)) zadaniyaUrokov.push({ ...(b as any), _urok: urok.slug });
    }
  }
  const voprosy = bank.voprosy;
  if (!voprosy.length || !zadaniyaUrokov.length) continue;

  const nahodki: Array<{ sila: number; dolya: number; text: string }> = [];

  for (const q of voprosy) {
    if (zaglushka(String(q.prompt ?? ""))) {
      propushchenoZaglushek += 1;
      continue;
    }
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
    vse.push({ modul: bank.imya, voprosov: voprosy.length, nahodki });
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
// МЕРКА. Первая редакция искала вхождение строки ЦЕЛИКОМ и потому молчала о
// главном: работа цитирует не всю строку, а её кусок. После правок 2 сентября
// отчёт показывал ноль, а методист своей меркой — семь слов ПОДРЯД — нашёл
// семнадцать мест, одно из них в шестнадцать слов.
//
// Теперь меряется самый длинный общий отрезок слов подряд: строка попадает в
// список, если стоит в условии целиком (от пяти слов) или любым куском от семи
// слов. Семь — мерка методиста: короче встречается и случайно, а рамки вроде
// «Ответь одним словом по-английски» до семи не дотягивают.
// ---------------------------------------------------------------------------

/** Длина самого длинного отрезка слов подряд, общего у двух строк. */
function podryad(a: string[], b: string[]): number {
  if (!a.length || !b.length) return 0;
  let luchshee = 0;
  let prev: number[] = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i += 1) {
    const cur: number[] = new Array(b.length + 1).fill(0);
    for (let j = 1; j <= b.length; j += 1) {
      if (a[i - 1] === b[j - 1]) {
        cur[j] = prev[j - 1] + 1;
        if (cur[j] > luchshee) luchshee = cur[j];
      }
    }
    prev = cur;
  }
  return luchshee;
}

let citat = 0;
const citaty: Array<{ dlina: number; text: string }> = [];

for (const bank of banki()) {
  const voprosy = bank.voprosy.filter((q: any) => {
    if (!zaglushka(String(q.prompt ?? ""))) return true;
    propushchenoZaglushek += 1;
    return false;
  });
  if (!voprosy.length) continue;

  /*
   * Все строки материала: тексты для чтения, расшифровки записей И РУССКИЕ
   * ОБЪЯСНЕНИЯ. У работы части это строки ВСЕХ модулей части, а не одного.
   *
   * ОБЪЯСНЕНИЯ ДОПИСАНЫ 6 сентября 2026, и вот чем это вызвано. Второй
   * редактор нашёл в работе модуля 7 разбор, дословно повторяющий правило
   * урока 2 — двадцать три слова подряд. Проверка промолчала: она сверяла
   * условие вопроса с ЗАДАНИЯМИ урока и с ТЕКСТАМИ для чтения, а совпало
   * русское объяснение с русским разбором. Две дыры разом — и по источнику
   * (объяснений в списке не было), и по цели (`why` не сверялся вовсе).
   *
   * У русской прозы порог выше: служебные слова совпадают сами собой, и на
   * семи словах проверка кричала бы на правильное. Считаем от двенадцати.
   */
  const stroki: Array<{ text: string; gde: string }> = [];
  const prozaicheskie = new Set<string>();
  for (const urok of bank.moduli.flatMap((m) => m.lessons)) {
    for (const b of urok.blocks as any[]) {
      if (b.kind === "text" && Array.isArray(b.body)) {
        for (const s of b.body) stroki.push({ text: String(s), gde: `${urok.slug} · ${b.id}` });
      }
      if (b.kind === "audio" && typeof b.transcript === "string") {
        for (const s of b.transcript.split(/[.!?]\s+/)) {
          if (s.trim()) stroki.push({ text: s.trim(), gde: `${urok.slug} · ${b.id}` });
        }
      }
      if ((b.kind === "explain" || b.kind === "note") && Array.isArray(b.text)) {
        for (const s of b.text) {
          const t = String(s).trim();
          if (!t) continue;
          stroki.push({ text: t, gde: `${urok.slug} · ${b.id}` });
          prozaicheskie.add(t);
        }
      }
      /*
       * ПРИМЕРЫ, ТАБЛИЦЫ И ОБРАЗЕЦ ПИСЬМА ДОПИСАНЫ 10 сентября 2026, и повод
       * тот же, что был у объяснений 6 сентября.
       *
       * Второй редактор модуля 14 нашёл вопрос работы, списанный у урока
       * ДОСЛОВНО — и условием, и ответом. Проверка промолчала, и промолчала
       * по устройству: материал она собирала из четырёх видов блоков, а
       * `example`, `table` и поле `sample` у задания-сочинения в списке не
       * стояли вовсе. Нашёл он это собственным прогоном, а не отчётом.
       *
       * ЧТО ЭТО ЗНАЧИТ ДЛЯ ПРЕЖНИХ ЧИСТЫХ ОТЧЁТОВ: они ничего не доказывали.
       * Пример — самое частое место, откуда работа списывает строку, а образец
       * письма ученик читает целиком экраном раньше.
       *
       * КОРОТКИЕ ЯЧЕЙКИ ОТСЕИВАЮТСЯ САМИ: ниже стоит порог в пять слов, и
       * `study — studies` его не проходит. Значит таблица попадёт в сверку
       * только там, где в ячейке стоит целая строка.
       *
       * ЧИСЛА ПОСЛЕ ПРАВКИ, чтобы следующий не испугался: новый курс 1 → 7,
       * `english-starter` 12 → 90, `english-elementary` 10 → 87. Прирост
       * НАСТОЯЩИЙ, а не шум — проверено чтением: работа просит написать строку,
       * дословно напечатанную в таблице того же урока
       * (`Would you like to come to my party?`). На замороженных курсах их
       * столько потому, что писались они до того, как породу назвали, и чинить
       * там нечего — курсы доживают.
       */
      if (b.kind === "example") {
        for (const s of String(b.text ?? "").split("\n")) {
          const t = s.trim();
          if (t) stroki.push({ text: t, gde: `${urok.slug} · ${b.id}` });
        }
        const razbor = String(b.explain ?? "").trim();
        if (razbor) {
          stroki.push({ text: razbor, gde: `${urok.slug} · ${b.id}` });
          prozaicheskie.add(razbor);
        }
      }
      if (b.kind === "table" && Array.isArray(b.rows)) {
        for (const ryad of b.rows) {
          for (const yacheyka of ryad) {
            const t = String(yacheyka).trim();
            if (t) stroki.push({ text: t, gde: `${urok.slug} · ${b.id}` });
          }
        }
      }
      if (b.kind === "essay" && typeof b.sample === "string") {
        for (const s of b.sample.split(/[.!?]\s+/)) {
          const t = s.trim();
          if (t) stroki.push({ text: t, gde: `${urok.slug} · ${b.id}` });
        }
      }
    }
  }

  for (const q of voprosy) {
    /*
     * Сверяем и условие, и РАЗБОР: списать работа может обоими. Разбор
     * `why` до 6 сентября 2026 не сверялся вовсе, и через эту дыру прошло
     * двадцать три слова подряд.
     */
    const uslovie = [String(q.prompt ?? ""), String(q.why ?? "")].join(" ");
    const slovaUsloviya = slova(uslovie);

    // Из всех строк материала берём ту, что совпала САМЫМ ДЛИННЫМ отрезком:
    // список разбирают сверху, и сверху должно стоять худшее.
    let luchshaya: { text: string; gde: string } | null = null;
    let dlina = 0;
    for (const st of stroki) {
      const slovaStroki = slova(st.text);
      if (slovaStroki.length < 5) continue;
      const celikom = uslovie.includes(st.text.replace(/[.!?]+$/, ""));
      const n = podryad(slovaStroki, slovaUsloviya);
      // У русской прозы порог выше: служебные слова совпадают сами собой.
      const porog = prozaicheskie.has(st.text) ? 12 : 7;
      if (!celikom && n < porog) continue;
      const sila = celikom ? Math.max(n, slovaStroki.length) : n;
      if (sila > dlina) {
        dlina = sila;
        luchshaya = st;
      }
    }
    if (!luchshaya) continue;
    if (resheno.some((r) => q.id === r.chto)) continue;

    citat += 1;
    citaty.push({
      dlina,
      text:
        `  [${q.id}] цитирует материал урока ${luchshaya.gde} — ${dlina} слов подряд` +
        `\n     строка: ${luchshaya.text}` +
        `\n     условие: ${uslovie.slice(0, 110)}`,
    });
  }

}

if (citaty.length) {
  console.log(`\n=== Работа цитирует урочный материал — ${citat}`);
  citaty.sort((a, b) => b.dlina - a.dlina);
  for (const c of citaty) console.log(c.text);
  console.log(
    "\n  Правится дешевле всего так: брать не строку урочного текста, а КОРОТКИЙ\n" +
      "  НОВЫЙ текст того же жанра. Тогда снимается вся порода разом."
  );
}

console.log("\n=== Вопросы работ, повторяющие друг друга");
mezhduRabotami();

if (propushchenoZaglushek) {
  console.log(
    `\nВопросов с незаполненным условием пропущено: ${propushchenoZaglushek}. ` +
      `Их сверка не касалась вовсе — позвать снова, когда заглушки напишут.`
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
