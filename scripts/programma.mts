/**
 * ПРОГРАММА СТУПЕНИ: две проверки, которых у курса не было.
 *
 * Обе написаны 5 сентября 2026 по определениям методиста
 * (docs/beginner-2/programma-stupeni.md, раздел 6) после решения владельца:
 * модуль есть дело с дескриптором, внутри дела грамматика, а норма словаря
 * считается по теме, а не по числу карточек.
 *
 *   1. НОРМА СЛОВАРЯ ПО ТЕМЕ. У модуля объявлена тема словника, и счёт
 *      спрашивает не «тридцать ли карточек», а сколько слов ступени из этой
 *      темы ученик получил карточкой.
 *
 *   2. РАЗДАЧА ПУНКТОВ ГРАММАТИКИ. Каждый модуль объявляет, какие пункты
 *      English Grammar Profile он вводит, и счёт сверяет, что все пункты
 *      ступени розданы и ни один не роздан дважды.
 *
 * ЗАЧЕМ ЭТО ВООБЩЕ. Пока таких счётов не было, грамматика решала, где стоять
 * словам: `platform` и `stamp` вводились в модуле о неправильных глаголах,
 * `sock` и `coat` — в модуле «Может быть». Счёт по обоим старым курсам:
 * одежда 5 карточек из 16 слов ступени, природа 5 из 22, тело 6 из 19. Ни одна
 * проверка об этом не спрашивала — спросить было не у чего. И второе: модули
 * 12 и 26 Elementary оба взялись за `Why don't we…?` и разрезали строку
 * по-разному, а ученик получил два несовместимых разбора одной строки.
 *
 * Запуск:  npm run programma -- english-beginner-2
 *
 * Курс называется НАРОЧНО и обязателен. Старые два курса заморожены решением
 * владельца от 5 сентября: они не чинятся, и кричать на них незачем.
 *
 * ЧЕГО ЭТА ПРОВЕРКА НЕ УМЕЕТ И УМЕТЬ НЕ БУДЕТ. Она видит, что пункт ОБЪЯВЛЕН, —
 * не то, что урок его действительно преподаёт. Сверка объявленного с текстом
 * урока остаётся работой методиста навсегда.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { courses } from "../courses/index.ts";
import type { Block, Course } from "../lib/content/types.ts";
import { otchyot, proveritResheno, skazat } from "./otchyot.mts";

const MATERIALS = "materials";

// ---------------------------------------------------------------------------
// Опись тем: закрытая, из Приложения 2 словника A2 Key (с. 25–32)
// ---------------------------------------------------------------------------
/**
 * ОПИСЕЙ ДВЕ, И ВТОРАЯ НЕ ГОДИТСЯ. Руководство A2 Key на с. 53 даёт свой
 * перечень тем экзамена — двадцать строк с другими именами (`Clothes`,
 * `Daily life`, `Transport`), и слов при нём нет. Для нормы словаря годится
 * только эта опись: у неё под каждым именем стоит список слов.
 */
const OPIS_TEM = [
  "Appliances",
  "Clothes and Accessories",
  "Colours",
  "Communication and Technology",
  "Documents and Texts",
  "Education",
  "Entertainment and Media",
  "Family and Friends",
  "Food and Drink",
  "Health, Medicine and Exercise",
  "Hobbies and Leisure",
  "House and Home",
  "Measurements",
  "Personal Feelings, Opinions and Experiences (adjectives)",
  "Places: Buildings",
  "Places: Countryside",
  "Places: Town and City",
  "Services",
  "Shopping",
  "Sport",
  "The Natural World",
  "Time",
  "Travel and Transport",
  "Weather",
  "Work and Jobs",
];

interface ZapisTemy {
  tema: string;
  /** Написания одной записи: `television / TV` — две строки, слово одно. */
  napisaniya: string[];
}

/** Колонтитул, попавший внутрь таблицы: разбор PDF затаскивает его в ячейку. */
const MUSOR = /UCLES|^Page \d+ of|A2 Key and Key for|^Schools$|^Vocabulary List$|^Topic Lists$/i;

/**
 * ЧИТАЕМ ВТОРОЙ РАЗБОР, А НЕ ПЕРВЫЙ — И ЭТО НЕ ПРИДИРКА.
 *
 * Списки набраны четырьмя колонками. `pdf-parse` склеивает колонки одной
 * строки в одну строку текста: у темы `Weather` первая строка приходит как
 * `cloud hot sun wet`. Резать её по пробелам нельзя — в списках есть записи из
 * двух слов (`get dressed`, `ice cream`, `police officer`). Методист проверил:
 * наивный построчный разбор даёт 296 записей вместо 1159.
 *
 * Разбор markitdown сохраняет таблицу, и каждая запись стоит своей ячейкой.
 * Это тот самый случай, ради которого в проекте держат два разбора одного PDF.
 */
function temyIzSlovnika(): ZapisTemy[] | null {
  const put = join(MATERIALS, ".md", "cambridge-vocab-a2-key.md");
  if (!existsSync(put)) {
    skazat("ОШИБКА", put, "второго разбора словника нет — темы модулей не сверены", "npm run md");
    return null;
  }
  const chasti = readFileSync(put, "utf8").split(/^\s*Appendix 2\s*$/m);
  const hvost = chasti[chasti.length - 1];

  const zapisi: ZapisTemy[] = [];
  const imena = new Set(OPIS_TEM);
  let tema = "";
  for (const syraya of hvost.split("\n")) {
    const stroka = syraya.trim();
    if (imena.has(stroka)) {
      tema = stroka;
      continue;
    }
    if (!tema || !stroka.startsWith("|")) continue;
    for (const yacheyka of stroka.split("|")) {
      const napisaniya = razobratYacheyku(yacheyka);
      if (napisaniya.length) zapisi.push({ tema, napisaniya });
    }
  }
  return zapisi;
}

function razobratYacheyku(syraya: string): string[] {
  let s = syraya.trim();
  if (!s || /^[-\s]+$/.test(s)) return [];
  if (MUSOR.test(s)) return [];
  // `January - December`, `Monday - Sunday` — отсылка к Приложению 1, а не слова.
  if (/\s[-–—]\s/.test(s)) return [];
  // Пометка в скобках: `break (n)`, `lorry (US truck)`, `costume (swimming)`.
  s = s.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  if (!s) return [];
  // Косая черта — два написания одного слова. Запись закрыта, если карточка
  // есть у любого: `jewellery / jewelry`, `television / TV`.
  return s
    .split("/")
    .map((w) => w.trim().toLowerCase())
    .filter((w) => /[a-z]/.test(w));
}

// ---------------------------------------------------------------------------
// Oxford 3000: какая слову ступень
// ---------------------------------------------------------------------------
const STUPENI = ["a1", "a2", "b1", "b2", "c1", "c2"];

/**
 * Разбор тот же, что в `kontrol.mts` и `slovo.mts`, и по той же причине идёт
 * от пометы НАЗАД: в сплошном списке слово иначе подбирает ступень соседней
 * записи. Ровно на этом однажды умерла целая проверка — каждое слово получало
 * A1 у соседа, и отчёт был зелёный.
 */
function oxford(): Map<string, string> {
  const put = join(MATERIALS, ".text", "oxford-3000.txt");
  const karta = new Map<string, string>();
  if (!existsSync(put)) {
    skazat("ВОПРОС", put, "словника Oxford нет — ступень слов темы не сверена",
      "разбор соберёт npm run kontrol -- english-starter");
    return karta;
  }
  const seno = readFileSync(put, "utf8").replace(/\([^)]*\)/g, " ").toLowerCase();
  const CHASTI = new Set([
    "n", "v", "adj", "adv", "prep", "pron", "det", "conj", "exclam", "number",
    "modal", "phr", "aux", "article", "ordinal", "abbr", ...STUPENI,
  ]);
  for (const m of seno.matchAll(/\b(a1|a2|b1|b2|c1|c2)\b/g)) {
    const tokeny = (seno.slice(Math.max(0, m.index! - 60), m.index!).match(/[a-z][a-z']*\d?/g) ?? [])
      .map((w) => w.replace(/\d+$/, ""));
    while (tokeny.length && CHASTI.has(tokeny[tokeny.length - 1])) tokeny.pop();
    const slovo = tokeny[tokeny.length - 1];
    if (!slovo || slovo.length < 2) continue;
    const bylo = karta.get(slovo);
    if (!bylo || STUPENI.indexOf(m[1]) < STUPENI.indexOf(bylo)) karta.set(slovo, m[1]);
  }
  return karta;
}

// ---------------------------------------------------------------------------
// Карточки курса: слово → номер самого раннего модуля, где оно дано
// ---------------------------------------------------------------------------
/**
 * КАРТОЧКА, И ТОЛЬКО КАРТОЧКА. Перевод рядом со строкой, ячейка таблицы и
 * употребление в примере введением слова не считаются — решено 2 сентября
 * 2026: «Карточка — там, где слово работает, а не там, где названо». Карточка
 * даёт то, чего перевод не даёт: словарную форму в отрыве от строки,
 * транскрипцию, свою запись звука и место в словаре урока.
 *
 * Усечения основ не берём вовсе: слова списков короткие и стоят в словарной
 * форме, а усечение врёт в обе стороны — `est` однажды превратило `forest` в
 * `for`, а `offer` в `off`.
 */
function karto4ki(course: Course): Map<string, number> {
  const karta = new Map<string, number>();
  course.modules.forEach((mod, nomer) => {
    for (const les of mod.lessons) {
      for (const b of les.blocks as Block[]) {
        if (b.kind !== "vocab") continue;
        for (const item of b.items ?? []) {
          const slovo = String(item.term).toLowerCase().trim();
          if (!karta.has(slovo)) karta.set(slovo, nomer);
        }
      }
    }
  });
  return karta;
}

// ---------------------------------------------------------------------------
// Проверка 1: норма словаря по теме
// ---------------------------------------------------------------------------
function slovarPoTemam(course: Course): void {
  const zapisi = temyIzSlovnika();
  if (!zapisi) return;

  const naydenoTem = new Set(zapisi.map((z) => z.tema));
  const ox = oxford();
  const stupenZapisi = (z: ZapisTemy) => {
    let luchshaya: string | undefined;
    for (const w of z.napisaniya) {
      const s = ox.get(w);
      if (s && (!luchshaya || STUPENI.indexOf(s) < STUPENI.indexOf(luchshaya))) luchshaya = s;
    }
    return luchshaya;
  };
  const a1 = zapisi.filter((z) => stupenZapisi(z) === "a1");

  // СТОРОЖ РАЗБОРА. Ровно так словник однажды разобрался в ноль слов, а отчёт
  // остался зелёным: мёртвая проверка выглядит как чистая.
  if (naydenoTem.size !== OPIS_TEM.length || zapisi.length < 1100 || a1.length < 550) {
    const propali = OPIS_TEM.filter((t) => !naydenoTem.has(t));
    skazat("ОШИБКА", "materials/.md/cambridge-vocab-a2-key.md",
      `разбор тем словника сломан: тем ${naydenoTem.size} из 25, записей ${zapisi.length} ` +
      `(ждём не меньше 1100), из них A1 ${a1.length} (ждём не меньше 550)` +
      (propali.length ? `; не нашлось тем: ${propali.join("; ")}` : ""),
      "пересобрать второй разбор: npm run md");
    return;
  }

  const dano = karto4ki(course);
  const zakryta = (z: ZapisTemy, doModulya: number) =>
    z.napisaniya.some((w) => dano.has(w) && dano.get(w)! <= doModulya);

  // --- объявление темы у модуля
  const obyavleno = new Map<string, number[]>();
  course.modules.forEach((mod, nomer) => {
    const gde = `${course.slug} → ${mod.slug}`;
    const temy = mod.temy ?? [];
    if (!temy.length) {
      skazat("ОШИБКА", gde,
        `модуль «${mod.title}» не объявляет темы словника: пустое поле temy`,
        "имя берётся дословно из Приложения 2 словника A2 Key — опись в scripts/programma.mts");
      return;
    }
    for (const tema of temy) {
      if (!naydenoTem.has(tema)) {
        skazat("ОШИБКА", gde, `тема «${tema}» не из описи Приложения 2 словника A2 Key`,
          "у руководства есть ВТОРАЯ опись тем на с. 53, с другими именами и без слов — она для нормы не годится");
        continue;
      }
      obyavleno.set(tema, [...(obyavleno.get(tema) ?? []), nomer]);
    }
    if (temy.length > 2) {
      skazat("ВОПРОС", gde, `модуль объявляет ${temy.length} темы словника`,
        "две законны (семья и работа), три и больше — признак того, что модуль не стоит ни на чём");
    }
  });

  // --- полнота спрашивается у КУРСА, а не у модуля: тема бывает у двух модулей
  const posledniy = course.modules.length - 1;
  for (const [tema, moduli] of [...obyavleno].sort()) {
    const svoi = a1.filter((z) => z.tema === tema);
    if (!svoi.length) continue;
    const est = svoi.filter((z) => zakryta(z, posledniy));
    const imena = moduli.map((n) => course.modules[n].slug).join(", ");
    if (est.length / svoi.length < 2 / 3) {
      const netu = svoi.filter((z) => !zakryta(z, posledniy)).map((z) => z.napisaniya[0]);
      skazat("ВОПРОС", `${course.slug} → тема ${tema}`,
        `к концу курса закрыто ${est.length} слов A1 из ${svoi.length}; тему объявили модули: ${imena}. ` +
        `Без карточки: ${netu.join(", ")}`,
        "либо взять слова карточками, либо разобрать список и записать решение в courses/resheno.ts");
    } else {
      skazat("СВЕДЕНИЯ", `${course.slug} → тема ${tema}`,
        `закрыто ${est.length} из ${svoi.length} слов A1; модули: ${imena}`);
    }
  }

  // --- сведения по модулям
  const stroki: string[] = [];
  course.modules.forEach((mod, nomer) => {
    const temy = mod.temy ?? [];
    const svoi = a1.filter((z) => temy.includes(z.tema));
    const est = svoi.filter((z) => zakryta(z, nomer)).length;
    const vsego = [...dano.entries()].filter(([, n]) => n === nomer).length;
    const svoiSlova = new Set(svoi.flatMap((z) => z.napisaniya));
    const vne = [...dano.entries()].filter(([w, n]) => n === nomer && !svoiSlova.has(w)).length;
    stroki.push(
      `  ${String(nomer + 1).padStart(2)}. ${mod.slug.padEnd(22)} ${(temy.join(" + ") || "—").padEnd(44)} ` +
      `слов A1 в теме ${String(svoi.length).padStart(3)}, закрыто ${String(est).padStart(3)}, ` +
      `карточек ${String(vsego).padStart(3)}, из них вне темы ${vne}`
    );
  });
  skazat("СВЕДЕНИЯ", course.slug,
    `норма словаря по темам, модулей ${course.modules.length}:\n${stroki.join("\n")}`);

  const nikem = OPIS_TEM.filter((t) => !obyavleno.has(t));
  if (nikem.length) {
    const skolko = nikem.map((t) => `${t} (${a1.filter((z) => z.tema === t).length})`);
    skazat("СВЕДЕНИЯ", course.slug,
      `тем не объявил ни один модуль: ${nikem.length} из 25, в них слов A1 —\n  ${skolko.join("\n  ")}`);
  }
}

// ---------------------------------------------------------------------------
// Проверка 2: раздача пунктов грамматики
// ---------------------------------------------------------------------------
/**
 * ФАЙЛ НЕ ПОСТРОЧНЫЙ: 6091 строка на 1222 записи — поле `Example` держит
 * переносы строк внутри кавычек. Читать только настоящим разбором.
 */
function razborCsv(syroy: string): string[][] {
  const stroki: string[][] = [];
  let pole = "";
  let stroka: string[] = [];
  let vKavychkah = false;
  for (let i = 0; i < syroy.length; i += 1) {
    const z = syroy[i];
    if (vKavychkah) {
      if (z !== '"') {
        pole += z;
        continue;
      }
      if (syroy[i + 1] === '"') {
        pole += '"';
        i += 1;
        continue;
      }
      vKavychkah = false;
      continue;
    }
    if (z === '"') {
      vKavychkah = true;
      continue;
    }
    if (z === ",") {
      stroka.push(pole);
      pole = "";
      continue;
    }
    if (z === "\r") continue;
    if (z === "\n") {
      stroka.push(pole);
      stroki.push(stroka);
      stroka = [];
      pole = "";
      continue;
    }
    pole += z;
  }
  if (pole.length || stroka.length) {
    stroka.push(pole);
    stroki.push(stroka);
  }
  return stroki;
}

interface Punkt {
  id: string;
  razdel: string;
  podrazdel: string;
  stupen: string;
  diapazon: string;
  zagolovok: string;
  mozhet: string;
  primer: string;
}

function punkty(): Punkt[] | null {
  const put = join(MATERIALS, "English Grammar Profile Online.csv");
  if (!existsSync(put)) {
    skazat("ВОПРОС", put, "перечня пунктов грамматики нет — раздача не сверена",
      "источник лежит вне репозитория, забирается вместе с materials/");
    return null;
  }
  const stroki = razborCsv(readFileSync(put, "utf8"));
  const shapka = stroki[0].map((s) => s.trim());
  const nomer = (imya: string) => shapka.indexOf(imya);
  const spisok = stroki
    .slice(1)
    .filter((s) => s.length >= shapka.length && s[0].trim())
    .map((s) => ({
      id: s[nomer("id")].trim(),
      razdel: s[nomer("SuperCategory")].trim(),
      podrazdel: s[nomer("SubCategory")].trim(),
      // Хвостовой пробел у Level есть в трёх записях. Без обрезки они выпадут
      // из счёта своей ступени — на A1 сейчас не сказывается, на A2 сказалось бы.
      stupen: s[nomer("Level")].trim().toUpperCase(),
      diapazon: s[nomer("Lexical Range")].trim(),
      zagolovok: s[nomer("Guideword")].trim(),
      mozhet: s[nomer("Can-do statement")].trim(),
      primer: s[nomer("Example")].trim(),
    }));

  // Сторож: записей должно выйти ровно 1222, иначе разбор сломан.
  if (spisok.length !== 1222) {
    skazat("ОШИБКА", put, `разбор перечня сломан: записей ${spisok.length}, а в файле их 1222`,
      "поле Example держит переносы строк внутри кавычек — построчное чтение тут не годится");
    return null;
  }
  return spisok;
}

function razdachaGrammatiki(course: Course): void {
  const spisok = punkty();
  if (!spisok) return;

  const poId = new Map(spisok.map((p) => [p.id, p]));
  const stupen = (course.level ?? "A1").toUpperCase();
  const svoi = spisok.filter((p) => p.stupen === stupen);

  const vvodit = new Map<string, string[]>();
  const povtoryaet = new Map<string, string[]>();
  for (const mod of course.modules) {
    const gde = `${course.slug} → ${mod.slug}`;
    const gruppy: [string, string[], Map<string, string[]>][] = [
      ["egp", mod.egp ?? [], vvodit],
      ["egpPovtor", mod.egpPovtor ?? [], povtoryaet],
    ];
    for (const [pole, spisokId, karta] of gruppy) {
      for (const id of spisokId) {
        const p = poId.get(id);
        if (!p) {
          skazat("ОШИБКА", gde, `в поле ${pole} стоит пункт ${id}, которого нет в перечне грамматики`,
            "ключ пункта — поле id из materials/English Grammar Profile Online.csv");
          continue;
        }
        if (p.stupen !== stupen) {
          skazat("ОШИБКА", gde,
            `пункт ${id} («${p.zagolovok}») стоит на ступени ${p.stupen}, а курс ведёт к ${stupen}`);
          continue;
        }
        karta.set(id, [...(karta.get(id) ?? []), mod.slug]);
      }
    }
  }

  // Один пункт у двух модулей в egp — ровно та беда, что случилась на
  // Elementary: модули 12 и 26 оба учили `Why don't we…?` и резали строку
  // по-разному. Законное исключение — расширение набора слов: Lexical Range
  // больше единицы (на A1 таких пунктов три).
  for (const [id, moduli] of vvodit) {
    if (moduli.length < 2) continue;
    const p = poId.get(id)!;
    if (Number(p.diapazon) > 1) continue;
    skazat("ВОПРОС", course.slug,
      `пункт «${p.zagolovok}» вводят сразу ${moduli.length} модуля: ${moduli.join(", ")}`,
      "решает методист: либо один вводит, а другие ставят его в egpPovtor, либо это законное расширение");
  }

  const nikem = svoi.filter((p) => !vvodit.has(p.id) && !povtoryaet.has(p.id));
  if (nikem.length) {
    const podrobno = nikem.map(
      (p) =>
        `  ${p.id}\n    ${p.razdel} / ${p.podrazdel} — ${p.zagolovok}\n` +
        `    ${p.mozhet}\n    ${p.primer.split("\n")[0]}`
    );
    // ПОЧЕМУ ОДНИМ ЗАМЕЧАНИЕМ, А НЕ СТА ДЕВЯТЬЮ. Сто девять одинаковых вопросов
    // подряд читать перестанут — а вместе с ними перестанут читать и остальные.
    // Счёт идёт вопросом, подробности печатаются сведениями.
    skazat("ВОПРОС", course.slug,
      `пунктов ступени ${stupen} не назвал ни один модуль: ${nikem.length} из ${svoi.length}`,
      "часть курс вправе не брать, но каждый пропуск разбирает методист и кладёт в courses/resheno.ts с причиной");
    skazat("СВЕДЕНИЯ", course.slug, `нерозданные пункты ступени ${stupen}:\n${podrobno.join("\n")}`);
  }

  const stroki = course.modules.map(
    (mod, n) =>
      `  ${String(n + 1).padStart(2)}. ${mod.slug.padEnd(22)} вводит ${String((mod.egp ?? []).length).padStart(2)}, ` +
      `повторяет ${String((mod.egpPovtor ?? []).length).padStart(2)}`
  );
  skazat("СВЕДЕНИЯ", course.slug,
    `раздача пунктов ступени ${stupen}: роздано ${vvodit.size} из ${svoi.length}\n${stroki.join("\n")}`);
}

// ---------------------------------------------------------------------------

const imya = process.argv.slice(2).find((d) => !d.startsWith("-"));
if (!imya) {
  console.error("Укажи курс: npm run programma -- english-beginner-2");
  console.error("Курс называется нарочно: старые два заморожены и в счёт не идут.");
  process.exit(1);
}
const course = courses.find((c) => c.slug === imya);
if (!course) {
  console.error(`Курса «${imya}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

console.log(`Программа курса «${course.title}»\n`);
proveritResheno();
slovarPoTemam(course);
razdachaGrammatiki(course);
otchyot("Чего проверка не умеет: она видит, что тема и пункт ОБЪЯВЛЕНЫ, — не то, что урок их преподаёт.");
