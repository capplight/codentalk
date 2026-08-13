/**
 * Сверка модуля с источниками — то, что раньше делал проверяющий вручную.
 *
 * Отдельно от `check:content`, потому что там правила формата, а здесь работа с
 * материалами: цитаты, словники, порядок появления слов. И отдельно от `chain`,
 * потому что там картина по всему курсу, а здесь — разбор одного модуля.
 *
 * ГЛАВНОЕ ОБ УСТРОЙСТВЕ. Скрипт, который кричит на правильное, хуже, чем
 * никакого: его перестают читать, а потом начинают «исправлять» верное. Поэтому
 * здесь три уровня, а не один:
 *
 *   ОШИБКА    — неверно наверняка. Останавливает проверку (ненулевой код).
 *   ВОПРОС    — похоже на беду, но может быть и правильно. Решает методист.
 *   СВЕДЕНИЯ  — таблицы и счёты без всякой оценки.
 *
 * И три правила, от которых зависит, будут ли отчёт читать:
 *
 *   1. «Не нашёл» — это не «нет». Дважды в этом проекте вывод «такой строки в
 *      источнике нет» оказывался неверным: мешали типографский апостроф и
 *      перенос строки. Поэтому неудачный поиск никогда не становится ошибкой.
 *   2. Разобранное молчит. Решённые случаи лежат в courses/resheno.ts вместе с
 *      причиной, и скрипт о них больше не спрашивает.
 *   3. Сомнение решается в пользу тишины. Где проверка может ошибиться в обе
 *      стороны, она выбирает промолчать: пропущенное замечание найдёт методист,
 *      а ложное — отучит читать отчёт целиком.
 *
 * Запуск:
 *   npm run kontrol                            весь курс
 *   npm run kontrol -- english-starter         один курс
 *   npm run kontrol -- english-starter ya-ne-delayu    один модуль
 */
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { courses } from "../courses/index.ts";
import { isTask, type Block, type Course, type Module } from "../lib/content/types.ts";
import { otchyot, proveritResheno, skazat } from "./otchyot.mts";
import { zadaniyaModulya } from "./vidimoe.mts";

// ---------------------------------------------------------------------------
// Приведение текста к сравнимому виду
//
// Здесь собраны все ловушки, на которых этот проект уже обжигался. Каждая стоила
// либо ложного замечания владельцу, либо снятого из курса верного слова.
// ---------------------------------------------------------------------------

function privesti(s: string): string {
  return s
    // Типографский апостроф против прямого: из-за него `o'clock` «не нашёлся»
    // в Oxford 3000, и на этом был построен целый блокер, которого не было.
    .replace(/[‘’ʼ´`]/g, "'")
    .replace(/[“”„«»‟]/g, '"')
    // Тире всех видов — к дефису.
    .replace(/[‐-―−]/g, "-")
    // Мягкий перенос и неразрывный пробел: в PDF их не видно, а поиск ломают.
    .replace(/­/g, "")
    .replace(/[   ]/g, " ")
    // Слитные пары букв из PDF.
    .replace(/ﬀ/g, "ff").replace(/ﬁ/g, "fi").replace(/ﬂ/g, "fl")
    // Перенос слова через дефис в конце строки — склеиваем обратно.
    .replace(/-\s*\n\s*/g, "")
    // И только теперь схлопываем пробелы: строка в PDF переносится там, где ей
    // удобно, а не там, где кончается мысль. Из-за этого поиск по `like` выдавал
    // «like v., n. B1», хотя целиком строка — «like (find sb/sth pleasant) v. A1».
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

/** То же, но без знаков препинания: последняя попытка перед «не нашёл». */
function golyi(s: string): string {
  return privesti(s).replace(/[^a-zа-яё0-9 ]/gi, " ").replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------------------
// Материалы: текст из PDF достаётся один раз и складывается рядом
// ---------------------------------------------------------------------------

const MATERIALS = "materials";
const KESH = join(MATERIALS, ".text");

/** Какому имени источника какой файл соответствует. Порядок важен: ищем по началу. */
const FAILY: Array<[RegExp, string]> = [
  [/^English Grammar Profile/i, "English Grammar Profile Online.csv"],
  [/^Oxford 3000/i, "oxford-3000.pdf"],
  [/^Oxford 5000/i, "oxford-5000.pdf"],
  [/^Council of Europe/i, "cefr-companion-2020.pdf"],
  [/словник A2 Key|A2 Key Vocabulary/i, "cambridge-vocab-a2-key.pdf"],
  [/^Cambridge English, A2 Key/i, "cambridge-a2-key-handbook.pdf"],
  [/Pre A1 Starters|A1 Movers|A2 Flyers|младших ступеней/i, "cambridge-young-learners-pre-a1-a2.pdf"],
  [/ipa-en-uk/i, "ipa-en-uk.txt"],
  [/wikipron-en-uk/i, "wikipron-en-uk.tsv"],
];

const kesh = new Map<string, string>();

async function tekst(file: string): Promise<string | null> {
  if (kesh.has(file)) return kesh.get(file)!;

  const put = join(MATERIALS, file);
  if (!existsSync(put)) return null;

  let syroy: string;
  if (file.toLowerCase().endsWith(".pdf")) {
    const ryadom = join(KESH, file.replace(/\.pdf$/i, ".txt"));
    if (existsSync(ryadom)) {
      syroy = readFileSync(ryadom, "utf8");
    } else {
      // Разбор руководства на триста страниц — минуты, поэтому делается один раз
      // и складывается рядом с источником. Папка materials/ в репозиторий не
      // попадает, так что и разобранный текст туда не попадёт.
      process.stderr.write(`   разбираю ${file} — это надолго, но только раз…\n`);
      const { PDFParse } = await import("pdf-parse");
      const parser = new PDFParse({ data: readFileSync(put) });
      try {
        const result = await parser.getText();
        syroy = result.pages.map((p: any) => `\nс. ${p.num}\n${p.text}`).join("\n");
      } finally {
        await parser.destroy();
      }
      mkdirSync(KESH, { recursive: true });
      writeFileSync(ryadom, syroy, "utf8");
    }
  } else {
    syroy = readFileSync(put, "utf8");
  }

  const gotovo = privesti(syroy);
  kesh.set(file, gotovo);
  return gotovo;
}

function failIstochnika(ref: string): string | null {
  for (const [obrazec, file] of FAILY) if (obrazec.test(ref)) return file;
  return null;
}

// ---------------------------------------------------------------------------
// Проверка 1. Цитата из источника есть в источнике
//
// Порода ошибки настоящая и называется «подмена источника»: цитата обрезана так,
// что доказывает не то, что стоит рядом. Машина ловит половину этой беды — что
// цитата вообще существует и приведена дословно. Вторую половину — что она взята
// из нужной графы и доказывает именно наше утверждение — машина не ловит, и это
// навсегда остаётся работой методиста.
// ---------------------------------------------------------------------------

/**
 * Наш собственный оборот, приведённый рядом с источником. Проверять его по
 * источнику незачем: в шапке прямо сказано, что он наш.
 *
 * «ОБОРОТ „How do you spell your name?“ — наш вариант: источник называет…» —
 * первая редакция скрипта объявила это ненайденной цитатой, хотя тем же
 * предложением сказано, что она и не должна найтись.
 */
const NASHE = /наш|покрывает|в уроке|мы пишем|мы называем|наш вариант/i;

/**
 * Английские цитаты в «ёлочках»: только они и проверяются.
 *
 * Разрезаем по двум знакам. Многоточие — наше сокращение, и целиком такая
 * цитата в источнике не встречается никогда. Тире с пробелами — наш способ
 * склеить графы таблицы источника в одну строку: «Adjectives — Including
 * possessive adjectives — His name is Yusef» стоит в источнике тремя ячейками,
 * а не одной фразой.
 */
function citaty(s: string): string[] {
  const kuski: string[] = [];
  for (const m of s.matchAll(/«[^«»]+»/g)) {
    const vokrug = s.slice(Math.max(0, m.index! - 90), m.index! + m[0].length + 50);
    if (NASHE.test(vokrug)) continue;
    kuski.push(...m[0].slice(1, -1).split(/…|\.\.\.| — |\s-\s/));
  }
  return kuski
    .map((c) => c.trim())
    .filter((c) => /[a-z]/i.test(c))
    // Русский внутри — значит цитата пересказана, а не приведена.
    .filter((c) => !/[а-яё]/i.test(c))
    // Одно-два слова совпадут случайно и ничего не докажут.
    .filter((c) => c.split(/\s+/).length >= 4);
}

/** Ищем цитату в файле. Возвращает 0 — нет, число слов — совпало столько с начала. */
function poiskv(seno: string, senoGoloe: string, citata: string): number {
  const slova = golyi(citata).split(" ");
  if (seno.includes(privesti(citata))) return slova.length;
  if (senoGoloe.includes(golyi(citata))) return slova.length;
  // Не нашлась целиком — смотрим, находится ли начало. Если да, цитата
  // настоящая, но склеена из двух мест или дополнена нами.
  for (let n = slova.length - 1; n >= 5; n--) {
    if (senoGoloe.includes(slova.slice(0, n).join(" "))) return n;
  }
  return 0;
}

async function proveritCitaty(mod: Module, gde: string): Promise<void> {
  for (const source of mod.sources) {
    if (!source.section) continue;

    const file = failIstochnika(source.ref);
    if (!file) {
      // Ссылка на наш же урок — это законно и даже поощряется.
      if (/урок|модул/i.test(source.ref)) continue;
      skazat("ВОПРОС", gde, `источник «${source.ref}» не сопоставлен ни одному файлу в materials/`,
        "либо добавь его в список FAILY в этом скрипте, либо назови источник как в остальных модулях");
      continue;
    }

    const seno = await tekst(file);
    if (!seno) {
      skazat("ВОПРОС", gde, `файла ${file} нет в materials/ — цитаты источника «${source.ref}» не сверены`,
        "скачай источники: npm run sources");
      continue;
    }
    const senoGoloe = golyi(seno);

    for (const citata of citaty(source.section)) {
      const slov = golyi(citata).split(" ").length;
      const svoy = poiskv(seno, senoGoloe, citata);
      if (svoy === slov) continue;

      // Прежде чем сказать «не нашёл», обойдём остальные источники. Одна запись
      // `sources` часто ссылается на два места сразу («…английский профиль… и
      // руководство, с. 23…»), и цитата из второго законно отсутствует в
      // первом. Первая редакция скрипта на этом дала четыре ложных замечания.
      let chuzhoy: string | null = null;
      for (const [, drugoy] of FAILY) {
        if (drugoy === file || chuzhoy) continue;
        const t = await tekst(drugoy);
        if (t && poiskv(t, golyi(t), citata) === slov) chuzhoy = drugoy;
      }

      if (chuzhoy) {
        // Не беда сама по себе: беда, если ссылка ведёт не туда, где цитата.
        skazat("СВЕДЕНИЯ", gde,
          `цитата стоит не в том источнике, что назван: «${citata}»\n` +
          `   названо: ${source.ref} (${file}), найдено в: ${chuzhoy}`);
      } else if (svoy) {
        skazat("ВОПРОС", gde,
          `цитата совпадает с источником только первыми ${svoy} словами из ${slov}: «${citata}»`,
          `в ${file} есть «${golyi(citata).split(" ").slice(0, svoy).join(" ")}…», дальше расходится — сверь хвост глазами`);
      } else {
        skazat("ВОПРОС", gde, `цитату не нашёл ни в одном источнике: «${citata}»`,
          `названо: ${file}. «Не нашёл» не значит «нет»: проверь глазами через ` +
          `npm run pdf -- materials/${file} --find "…". Если цитата верна, впиши случай в courses/resheno.ts`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Проверка 2. Задание не требует слова, которого ученик не видел
//
// Это не то же самое, что проверка 2 в `chain`: там слово ищется в словарях, и
// потому законные случаи (форма уже введённого слова, служебное слово из
// таблицы) шумят вечно. Здесь условие жёстче и потому тише: слова не было в
// курсе ВООБЩЕ — ни в словаре, ни в объяснении, ни в примере, ни в таблице.
// Такое молчанием не оправдаешь, это ошибка.
// ---------------------------------------------------------------------------

/** Всё, что ученик видит в блоке, одной строкой. */
function tekstBloka(b: any): string {
  const chasti: string[] = [];
  const proydti = (v: unknown): void => {
    if (typeof v === "string") chasti.push(v);
    else if (Array.isArray(v)) v.forEach(proydti);
    else if (v && typeof v === "object") {
      for (const key of ["text", "term", "example", "translation", "caption", "explain"]) {
        proydti((v as any)[key]);
      }
    }
  };
  for (const key of Object.keys(b)) {
    if (key === "id" || key === "kind" || key === "src") continue;
    proydti(b[key]);
  }
  return chasti.join(" ");
}

function angliyskie(text: string): string[] {
  // Приводим до разбора на слова: из-за типографского апострофа `you’re`
  // распадалось на `you` и `re`, и `re` объявлялось невиданным словом.
  return (privesti(text).match(/[a-z][a-z']*/g) ?? []).filter(
    (w) => w.length > 1 || w === "a" || w === "i"
  );
}

/**
 * Что ученик обязан произвести или выбрать как верное.
 *
 * Не весь текст задания: условие, подсказка и разбор — это разговор о задании, и
 * английское слово в них ученику знать не нужно. А неверные варианты выбора и
 * вовсе пишутся нарочно неправильными — `fourty`, `is'nt`, `she'is`. Первая
 * редакция брала блок целиком и объявила ошибкой полтора десятка таких описок.
 *
 * Задания «отметь ошибку» (hottext) не берём совсем: там верный ответ — это и
 * есть описка, и отличить её от законного слова машина не может. Пропустить
 * такое задание дешевле, чем спорить о нём в каждом модуле.
 */
function trebuetsyaOtUchenika(b: any): string | null {
  switch (b.kind) {
    case "hottext":
      return null;
    case "choice":
      return (b.options ?? []).filter((o: any) => o.correct).map((o: any) => o.text).join(" ");
    case "gap":
      // Собираем предложение обратно, а не берём половинки по отдельности:
      // пропуск режет слово посередине (`We` + `'re Alim and Dana.`), и половина
      // `'re` выглядит невиданным словом. Так и вышло в первой редакции.
      return [b.answer, ...(b.accept ?? [])]
        .map((v: string) => `${b.before ?? ""}${v}${b.after ?? ""}`)
        .join(" ");
    case "short":
      return [b.answer, ...(b.accept ?? [])].join(" ");
    case "order":
      return (b.items ?? []).join(" ");
    case "match":
      return [...(b.left ?? []), ...(b.right ?? [])].join(" ");
    case "speak":
      return b.phrase ?? "";
    case "essay":
      return b.sample ?? "";
    case "code":
      return b.starter ?? "";
    default:
      return null;
  }
}

/**
 * Возможные исходные слова для формы. Проверяется, знакомо ли ученику хоть одно.
 * Список нарочно широкий: лишняя догадка делает проверку тише, пропущенная —
 * громче. Тишина здесь дешевле.
 */
function osnovy(word: string): string[] {
  const v = new Set<string>([word]);
  const w = word.replace(/'(s|t|re|ve|ll|d|m)$/, "");
  v.add(w);
  if (w.endsWith("n")) v.add(w.slice(0, -1)); // doesn't → does
  for (const [hvost, zamena] of [
    [/ies$/, "y"], [/es$/, ""], [/s$/, ""], [/ing$/, ""], [/ing$/, "e"],
    [/ied$/, "y"], [/ed$/, ""], [/ed$/, "e"], [/er$/, ""], [/est$/, ""],
  ] as Array<[RegExp, string]>) {
    if (hvost.test(w)) v.add(w.replace(hvost, zamena));
  }
  // Удвоенный согласный: running → run, bigger → big.
  const udvoen = w.match(/^(.*?)([bdgklmnprtz])\2(ing|ed|er|est)$/);
  if (udvoen) v.add(udvoen[1] + udvoen[2]);
  // Само слово остаётся в списке всегда, даже однобуквенное: `a` и `I` — слова,
  // и отбрасывать их вместе с обрубками вроде `s` от `books` нельзя. Первая
  // редакция этого не учла и объявила невиданными `I` и `a` сто восемь раз.
  return [...v].filter((s) => s.length > 1 || s === "a" || s === "i");
}

interface Vstrecha { urok: number; gde: string }

/**
 * Имена и названия: их не объясняют, их узнают. Определяем по заглавной букве
 * не в начале предложения — список руками вести бессмысленно, он устареет с
 * первым же новым уроком.
 */
function sobratImena(text: string): string[] {
  const naydeno: string[] = [];
  for (const m of text.matchAll(/[A-Za-zÀ-ÖØ-öø-ÿ'’]{2,}/g)) {
    if (!/^[A-ZÀ-ÖØ-Þ]/.test(m[0])) continue;
    const do_ = text.slice(0, m.index!).replace(/\s+$/, "");
    // Начало предложения заглавной букве не признак: там она стоит у любого слова.
    if (!do_ || /[.!?…:;"«(\[]$/.test(do_.slice(-1))) continue;
    // Türkiye распадается на `t` и `rkiye`, поэтому кладём и куски тоже.
    naydeno.push(...angliyskie(m[0]));
  }
  return naydeno;
}

function proveritSlova(course: Course, tolko: string | undefined): void {
  // Первым проходом — где каждое слово впервые появляется в материале, и все
  // имена курса. Без этого прохода слово, объяснённое двумя уроками позже,
  // выглядит как никогда не объяснённое, и замечание вводит в заблуждение:
  // ошибка тут в порядке, а не в отсутствии.
  const vMateriale = new Map<string, Vstrecha>();
  const imena = new Set<string>();

  let schet = 0;
  for (const mod of course.modules) {
    for (const les of mod.lessons) {
      schet += 1;
      const gde = `${mod.slug} → ${les.slug}`;
      for (const block of les.blocks as Block[]) {
        const b = block as any;
        sobratImena(tekstBloka(b)).forEach((n) => imena.add(n));
        if (isTask(b)) continue;
        for (const w of angliyskie(tekstBloka(b))) {
          if (!vMateriale.has(w)) vMateriale.set(w, { urok: schet, gde });
        }
      }
    }
  }

  const skazannoe = new Set<string>();  // одно слово — одно замечание на курс

  let nomer = 0;
  for (const mod of course.modules) {
    for (const les of mod.lessons) {
      nomer += 1;
      const gde = `${mod.slug} → ${les.slug}`;
      for (const block of les.blocks as Block[]) {
        const b = block as any;
        if (!isTask(b)) continue;
        const nuzhno = trebuetsyaOtUchenika(b);
        if (nuzhno === null) continue;

        for (const w of angliyskie(nuzhno)) {
          if (imena.has(w)) continue;
          // Слово того же урока считается знакомым: материал стоит выше задания.
          const vstrechi = osnovy(w).map((o) => vMateriale.get(o)).filter(Boolean) as Vstrecha[];
          const ranshe = vstrechi.some((v) => v.urok <= nomer);
          if (ranshe) continue;
          if (skazannoe.has(w)) continue;
          if (tolko && mod.slug !== tolko) continue;
          skazannoe.add(w);

          const pozzhe = vstrechi.sort((a, b) => a.urok - b.urok)[0];
          if (pozzhe) {
            skazat("ВОПРОС", gde,
              `задание требует слова \`${w}\` раньше, чем оно появляется в материале`,
              `материал даёт его в уроке ${pozzhe.urok} (${pozzhe.gde}) — либо переставь, либо возьми другое слово`);
          } else {
            skazat("ОШИБКА", gde,
              `задание требует слова \`${w}\`, которого в материале курса нет вообще`,
              "ученик не может его знать: введи слово в материале или замени в задании");
          }
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Проверка 2а. Разбор говорит о том же, что и верный ответ
//
// Порода настоящая и стоила трёх ошибок подряд в одном модуле. Переписывая
// задание, легко сменить условие и варианты и забыть поле `why`. Ученик
// отвечает верно, читает разбор про другое — и решает, что ошибся. Один раз
// разбор объяснял ответ, которого среди вариантов не было вовсе.
//
// Проверка нарочно грубая: ищем в разборе хоть одно значимое слово верного
// ответа. Совпало — молчим. Не совпало — ВОПРОС, а не ошибка: разбор бывает
// написан и вокруг ответа, не повторяя его дословно.
// ---------------------------------------------------------------------------

/** Что считается верным ответом — по видам заданий, где он есть в виде текста. */
function vernyiOtvet(b: any): string | null {
  switch (b.kind) {
    case "choice":
      return (b.options ?? []).filter((o: any) => o.correct).map((o: any) => o.text).join(" ");
    case "order":
      return Array.isArray(b.answer) && Array.isArray(b.items)
        ? b.answer.map((n: number) => b.items[n]).join(" ")
        : null;
    case "gap":
    case "short":
      return typeof b.answer === "string" ? b.answer : null;
    default:
      return null;
  }
}

function proveritRazbor(b: any, gde: string): void {
  const otvet = vernyiOtvet(b);
  if (!otvet || !b.why) return;

  const slova = znachimye(otvet);
  if (!slova.size) return;
  const vRazbore = znachimye(b.why);

  // Разбор, написанный по-русски вокруг ответа и не повторяющий его, — это
  // нормально и даже часто. Беда, которую ловим, выглядит иначе: разбор
  // цитирует английскую фразу, и это ЧУЖАЯ фраза. Поэтому молчим, пока в
  // разборе нет английского вовсе. Без этой оговорки проверка дала двадцать
  // одно замечание на курс, и почти все были ложными.
  if (!vRazbore.size) return;
  if ([...slova].some((w) => vRazbore.has(w))) return;

  skazat("ВОПРОС", gde, `разбор задания \`${b.id}\` не упоминает верного ответа`,
    `верно: «${otvet.trim().slice(0, 60)}», а разбор говорит о другом — ` +
    "проверь, не остался ли он от прежней редакции задания");
}

// ---------------------------------------------------------------------------
// Проверка 2б. Задание не наказывает за верный ответ
//
// Порода найдена владельцем: он прошёл один урок и трижды ответил правильно, а
// получил «пока не так». Ни скрипты, ни проверяющие её не видели — источникам
// она не противоречит, по-русски написано верно.
//
// Целиком это машине не по силам: «что ещё сюда подходит» — вопрос о языке.
// Но самый частый случай считается: короткий ответ да/нет, где условие не
// говорит, какой именно. Тогда верных ответов ровно два, а принимается один.
// ---------------------------------------------------------------------------

/** Ответ вида «Yes, I do.» / «No, he doesn't.» — то есть да или нет. */
const DA_NET = /^\s*(yes|no)\s*,/i;

/**
 * Слова условия, которые говорят, что именно отвечать.
 *
 * ГРАНИЦЫ СЛОВА ВРУЧНУЮ. `\b` и `\w` в JavaScript считают буквой только
 * латиницу, поэтому `/\bда\b/` не находит «да» никогда. Первая редакция этой
 * проверки выдала восемь замечаний, и все восемь были ложными: условия вроде
 * «Ответь „нет“ коротко» и «Ответь коротко и утвердительно» ответ как раз
 * называют. Третий случай той же ловушки в этом проекте.
 */
const SKAZANO = new RegExp(
  // Прямое указание: «да», «нет», «утвердительно».
  "(?<![а-яё])(да|нет)(?![а-яё])|утвердительн|отрицательн|" +
  // Ответ приведён в самом условии по-английски: «Запиши полностью: „No, they aren't“».
  "(?<![a-z])(yes|no)\s*,|" +
  // Факт о том, о ком речь: «Ты медсестра», «Она из Испании» — по нему ученик и
  // выбирает да или нет. Без этого правила проверка ругалась на пять верных
  // заданий из семи.
  "(?<![а-яё])(ты|он|она|они|брат|сестра)(?![а-яё])\s+[а-яё]|" +
  "не работа|не жив|не учит|не пь[её]|работа|жив[её]|учит|пь[её]т|знает|занят",
  "i"
);

function proveritDvaOtveta(b: any, gde: string): void {
  if (b.kind !== "short" && b.kind !== "gap") return;
  const otvet = typeof b.answer === "string" ? b.answer : "";
  if (!DA_NET.test(otvet)) return;
  if (SKAZANO.test(b.prompt ?? "")) return;

  // СВЕДЕНИЯ, а не вопрос: отличить «условие называет ответ» от «не называет»
  // машина берётся плохо. Условие говорит его то прямо («Ответь — да»), то
  // фактом («Ты медсестра»), то по-английски внутри цитаты. Калибровка съела
  // больше, чем проверка сберегла, поэтому здесь просто список для глаза.
  skazat("СВЕДЕНИЯ", gde, `ответ да/нет: \`${b.id}\` ждёт «${otvet.trim()}»
   условие: ${(b.prompt ?? "").slice(0, 90)}
   Проверь: говорит ли условие, какой ответ нужен. Если нет — верных два.`);
}

/** Сопоставление, где справа стоят и «да», и «нет» на однотипные вопросы. */
function proveritSopostavlenie(b: any, gde: string): void {
  if (b.kind !== "match") return;
  const sprava: string[] = b.right ?? [];
  const est = (obrazec: RegExp) => sprava.filter((x) => obrazec.test(x)).length;
  if (!est(/^yes\s*,/i) || !est(/^no\s*,/i)) return;

  // Слева два вопроса с одним и тем же началом — значит ответы к ним
  // взаимозаменяемы, и решений больше одного.
  const nachala = (b.left ?? []).map((x: string) => x.trim().split(/\s+/)[0].toLowerCase());
  const povtor = nachala.some((n: string, i: number) => nachala.indexOf(n) !== i);
  if (!povtor) return;
  // Условие с подробностями само задаёт выбор: «Собеседник здесь работает, он
  // преподаватель, а Дану не знает». Короткое «Сопоставь вопрос и ответ» —
  // не задаёт. Мерка грубая, но другой у машины нет.
  if ((b.prompt ?? "").length > 60) return;

  skazat("СВЕДЕНИЯ", gde, `сопоставление \`${b.id}\`: два вопроса начинаются одинаково, а справа есть и «да», и «нет»
   Ответы к таким вопросам взаимозаменяемы. Проверь, задаёт ли выбор условие.`);
}

// ---------------------------------------------------------------------------
// Проверка 3. Таблица «задание → блок»
//
// Оценки здесь нет и быть не может: блок бывает врезкой, итогом, подписью — и
// заданию соответствовать не обязан. Это просто то, что методист раньше собирал
// руками, тратя на пересчёт ход, ради которого его никто не звал.
// ---------------------------------------------------------------------------

const SLUZHEBNYE = new Set([
  "a", "an", "the", "is", "are", "am", "i", "you", "he", "she", "it", "we", "they",
  "my", "your", "his", "her", "its", "our", "their", "this", "that", "these", "those",
  "and", "or", "but", "in", "on", "at", "to", "of", "for", "with", "from", "not",
  "do", "does", "don", "doesn", "isn", "aren", "s", "t", "no", "yes", "there", "here",
  "what", "where", "who", "how", "when", "have", "has", "got", "be",
]);

function znachimye(text: string): Set<string> {
  return new Set(angliyskie(text).filter((w) => w.length >= 3 && !SLUZHEBNYE.has(w)));
}

function tablicaZadaniy(mod: Module, gde: string): void {
  const strok: string[] = [];

  for (const les of mod.lessons) {
    const materialy = (les.blocks as Block[]).filter((b) => !isTask(b));
    const zadaniya = (les.blocks as Block[]).filter((b) => isTask(b));
    const zadety = new Set<string>();

    for (const z of zadaniya) {
      const slova = znachimye(tekstBloka(z));
      // Перечислять все блоки, где нашлось хоть одно общее слово, бесполезно:
      // урок написан об одном, и в список попадает весь урок. Показываем два
      // самых близких — этого хватает, чтобы увидеть, к чему задание привязано.
      const blizkie = materialy
        .map((m) => ({
          id: m.id,
          obshchih: [...znachimye(tekstBloka(m))].filter((w) => slova.has(w)).length,
        }))
        .filter((r) => r.obshchih > 0)
        .sort((a, b) => b.obshchih - a.obshchih);

      // Показываем двоих, а засчитываем всех: блок, у которого связь есть, но не
      // самая сильная, задет заданием ничуть не меньше. Иначе в списке «без
      // задания» оказывается половина урока — и список перестают читать.
      blizkie.forEach((r) => zadety.add(r.id));
      // Задание про отдельные буквы сравнивать не по чему: слов длиннее двух
      // знаков в нём нет вовсе. Молчим — вместо того чтобы весь первый модуль
      // объявить заданиями без опоры.
      const nechem = slova.size === 0;
      strok.push(
        `   ${les.slug} · ${(z as any).kind.padEnd(7)} ${z.id.padEnd(22)} → ` +
          (blizkie.length
            ? blizkie.slice(0, 2).map((r) => `${r.id} (${r.obshchih})`).join(", ")
            : nechem
              ? "сравнивать не по чему: в задании только буквы"
              : "НИ ОДНОГО БЛОКА — задание проверяет то, чего в уроке нет?")
      );
    }

    const nikto = materialy.filter((m) => !zadety.has(m.id) && (m as any).kind !== "audio");
    if (nikto.length) {
      strok.push(`   ${les.slug} · без задания: ${nikto.map((m) => `${m.id} (${(m as any).kind})`).join(", ")}`);
    }
  }

  skazat("СВЕДЕНИЯ", gde, `задание → блок, ${mod.lessons.length} уроков:\n${strok.join("\n")}`);
}

// ---------------------------------------------------------------------------
// Проверка 4. Ступень слова по словнику
//
// Самая шумная из всех, если делать её в лоб, — пять ловушек этого проекта
// собраны именно здесь. Поэтому: ищем по всем вхождениям и берём САМУЮ НИЗКУЮ
// найденную ступень, а не первую. Ошибка в сторону занижения делает проверку
// тише, ошибка в сторону завышения — снимает из курса верное слово. Мы уже
// однажды чуть не сняли `like` и `long`.
// ---------------------------------------------------------------------------

const STUPENI = ["a1", "a2", "b1", "b2", "c1", "c2"];

let slovnik: Map<string, string> | null = null;

async function zagruzitSlovnik(): Promise<Map<string, string> | null> {
  if (slovnik) return slovnik;
  const seno = await tekst("oxford-3000.pdf");
  if (!seno) return null;

  const naydeno = new Map<string, string>();

  // Запись словника устроена так: слово, потом часть речи, потом ступень —
  // «zero number A2», «excuse n., v. B2», «long1 adj., adv. A1». Идём от пометы
  // назад и отбрасываем пометы частей речи, пока не упрёмся в само слово.
  //
  // Первая редакция просто брала все слова из окна в семьдесят знаков и
  // оставляла низшую ступень. Замысел был правильный — ошибаться в сторону
  // тишины, — но в сплошном списке каждое слово подбирало A1 у соседней записи,
  // и проверка молчала ВСЕГДА. Проверено опытом: `excuse` (B2) не нашёлся.
  const CHASTI_RECHI = new Set([
    "n", "v", "adj", "adv", "prep", "pron", "det", "conj", "exclam", "number",
    "modal", "phr", "aux", "article", "ordinal", "abbr", "a1", "a2", "b1", "b2", "c1", "c2",
  ]);

  // Пояснения в скобках убираем: «like (find sb/sth pleasant) v. A1» иначе даёт
  // слово `pleasant` вместо `like`. Это пятая ловушка словника в другом обличье.
  const bezSkobok = seno.replace(/\([^)]*\)/g, " ");

  for (const m of bezSkobok.matchAll(/\b(a1|a2|b1|b2|c1|c2)\b/g)) {
    const tokeny = (bezSkobok.slice(Math.max(0, m.index! - 60), m.index!).match(/[a-z][a-z']*\d?/g) ?? [])
      .map((w) => w.replace(/\d+$/, ""));
    while (tokeny.length && CHASTI_RECHI.has(tokeny[tokeny.length - 1])) tokeny.pop();
    const slovo = tokeny[tokeny.length - 1];
    if (!slovo || slovo.length < 2) continue;
    const bylo = naydeno.get(slovo);
    if (!bylo || STUPENI.indexOf(m[1]) < STUPENI.indexOf(bylo)) naydeno.set(slovo, m[1]);
  }
  slovnik = naydeno;
  return slovnik;
}

/** Слова, объявленные в шапке модуля как взятые сверх ступени. */
function obyavleno(mod: Module, course: Course): Set<string> {
  const put = join("courses", course.slug, `${mod.slug}.ts`);
  if (!existsSync(put)) return new Set();
  const file = readFileSync(put, "utf8");
  // До первого урока: это и шапка файла, и поле `sources`. Объявление о слове
  // сверх ступени стоит то там, то там — модуль 9 объявляет zero в источниках,
  // а модуль 15 в шапке, и обрезать на `sources:` значило половину не увидеть.
  const kraj = file.indexOf("lessons:");
  const shapka = (kraj > 0 ? file.slice(0, kraj) : file)
    // Цитаты источника — не наша речь, слова из них ничего не объявляют.
    .replace(/«[^«»]*»/g, " ")
    .replace(/\s*\+\s*\n\s*"/g, "");

  // Берём только те предложения, где ступень названа выше первой. Первая
  // редакция брала весь текст до уроков — и вместе с объявлениями забирала
  // перечень «все слова модуля с пометкой A1: number, one, two…», то есть
  // весь словарь. Проверка ступени после этого молчала всегда.
  const slova = new Set<string>();
  for (const predlozhenie of shapka.split(/(?<=[.;])\s+/)) {
    if (!/сверх ступени|выше ступени|\b(A2|B1|B2|C1)\b/i.test(predlozhenie)) continue;
    for (const w of angliyskie(predlozhenie)) slova.add(w);
  }
  return slova;
}

async function proveritStupen(mod: Module, course: Course, gde: string): Promise<void> {
  const slovar = await zagruzitSlovnik();
  if (!slovar) {
    skazat("ВОПРОС", gde, "словника oxford-3000.pdf нет — ступень слов не сверена", "npm run sources");
    return;
  }

  // Ступень курса записана человеческим языком — «до A1», «A2». Берём из строки
  // саму помету, а не первые два знака: на «до A1» отрезок дал «до», потолок
  // вышел отрицательным, и скрипт объявил превышением весь словарь модуля.
  const pometa = (course.level ?? "").match(/\b([abc][12])\b/i)?.[1].toLowerCase() ?? "a1";
  const potolok = STUPENI.indexOf(pometa);
  const skazano = obyavleno(mod, course);
  const vyshe: string[] = [];
  const netVSlovnike: string[] = [];
  const smotreno = new Set<string>();

  for (const les of mod.lessons) {
    for (const b of les.blocks as Block[]) {
      // Смотрим только словарь: слово в объяснении может стоять внутри готовой
      // фразы, и спрашивать о нём — тот самый шум, ради которого всё затевалось.
      if ((b as any).kind !== "vocab") continue;
      for (const item of (b as any).items ?? []) {
        const slovo = privesti(String(item.term)).replace(/[^a-z' ]/g, "");
        if (!slovo || smotreno.has(slovo)) continue;
        smotreno.add(slovo);
        if (skazano.has(slovo)) continue;

        // Сочетание из нескольких слов словником не меряется: `get up` там нет,
        // а `get` и `up` по отдельности ничего о сочетании не говорят.
        if (slovo.includes(" ")) continue;

        const nayden = osnovy(slovo).map((o) => slovar.get(o)).filter(Boolean) as string[];
        if (!nayden.length) { netVSlovnike.push(slovo); continue; }
        const nizshaya = nayden.sort((a, b) => STUPENI.indexOf(a) - STUPENI.indexOf(b))[0];
        if (STUPENI.indexOf(nizshaya) > potolok) vyshe.push(`${slovo} (${nizshaya.toUpperCase()})`);
      }
    }
  }

  if (vyshe.length) {
    skazat("ВОПРОС", gde, `словарь модуля берёт сверх ступени и не объявляет: ${vyshe.join(", ")}`,
      "либо объяви в шапке модуля со ссылкой на источник, либо замени слово");
  }
  if (netVSlovnike.length) {
    skazat("СВЕДЕНИЯ", gde,
      `в Oxford 3000 не нашлись: ${netVSlovnike.join(", ")}\n` +
      "   Это НЕ значит, что их там нет: строка переносится, апостроф бывает\n" +
      "   типографским, у омонимов к слову приписана цифра. Проверь глазами.");
  }
}

// ---------------------------------------------------------------------------
// Ход проверки
// ---------------------------------------------------------------------------

proveritResheno();

const [, , kursSlug, modulSlug] = process.argv;

for (const course of courses) {
  if (kursSlug && course.slug !== kursSlug) continue;
  console.log(`\n=== ${course.title} (${course.slug})`);

  proveritSlova(course, modulSlug);

  for (const mod of course.modules) {
    if (modulSlug && mod.slug !== modulSlug) continue;
    const gde = `${course.slug} → ${mod.slug}`;
    for (const b of zadaniyaModulya(mod)) {
      proveritRazbor(b as any, gde);
      proveritDvaOtveta(b as any, gde);
      proveritSopostavlenie(b as any, gde);
    }
    await proveritCitaty(mod, gde);
    await proveritStupen(mod, course, gde);
    tablicaZadaniy(mod, gde);
  }
}

otchyot(
  "Вопрос — не приговор: скрипт не умеет отличить верную цитату из нужной графы\n" +
  "от верной цитаты из соседней. Это по-прежнему работа методиста."
);
