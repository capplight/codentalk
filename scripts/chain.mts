/**
 * Сквозная проверка цепочки уроков по всему курсу.
 *
 * Отдельно от `check:content`, потому что здесь не правила, а картина: скрипт
 * показывает подозрительные места, а решает по ним методист. Ошибкой сборки
 * ничего из этого не считается — иначе законные случаи (слово `morning` внутри
 * `Good morning` в модуле 2, а словарём введено в модуле 10) шумели бы вечно.
 *
 * Написан после того, как выяснилось: слово `the` стояло в курсе 418 раз и не
 * объяснялось нигде. Ни скрипт, ни оба проверяющих этого не ловили — каждый
 * смотрел свой модуль, а дыра была видна только на всём курсе сразу.
 *
 * Запуск:  npm run chain           (весь курс)
 *          npm run chain -- english-starter
 */
import { courses } from "../courses/index.ts";
import { isTask, type Block, type Course } from "../lib/content/types.ts";

/** Всё, что видит ученик в блоке, одной строкой. */
function blockText(b: any): string {
  const parts: string[] = [];
  const strings = [
    "text", "caption", "explain", "transcript", "prompt", "hint", "why",
    "before", "after", "answer", "phrase", "translation", "starter",
  ];
  for (const key of strings) {
    const v = b[key];
    if (typeof v === "string") parts.push(v);
    if (Array.isArray(v)) parts.push(v.filter((x) => typeof x === "string").join(" "));
  }
  // Списки разбираем по значениям, а не через JSON: иначе в текст попадают
  // имена полей — text, correct, selectable — и заслоняют собой всё.
  const walk = (v: unknown): void => {
    if (typeof v === "string") parts.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") {
      for (const key of ["text", "term", "example", "translation"]) walk((v as any)[key]);
    }
  };
  for (const key of ["rows", "head", "items", "parts", "options", "left", "right", "accept"]) {
    walk(b[key]);
  }
  return parts.join(" ");
}

/**
 * Слова, которые ученику объяснять не надо: имена, названия стран и городов.
 * Список маленький намеренно — чем он длиннее, тем меньше проверка находит.
 */
const NAMES = new Set([
  "alim", "dana", "aigul", "aygul", "nurlan", "almaty", "astana", "kazakhstan",
  "turkey", "spain", "italy", "june", "may", "march", "april", "august",
  "september", "october", "november", "december", "january", "february", "july",
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "english", "russian", "kazakh", "parking", "station", "hospital", "hotel",
]);

interface Spot { lesson: number; where: string }

function checkCourse(course: Course): void {
  console.log(`\n=== ${course.title} (${course.slug})`);

  const definedAt = new Map<string, Spot>();
  const firstUse = new Map<string, Spot>();
  const firstInTask = new Map<string, Spot>();
  const useCount = new Map<string, number>();
  const promises: string[] = [];

  let lesson = 0;
  for (const mod of course.modules) {
    for (const les of mod.lessons) {
      lesson += 1;
      const where = `${mod.slug} → ${les.slug}`;
      for (const block of les.blocks as Block[]) {
        const b = block as any;

        if (b.kind === "vocab") {
          for (const item of b.items ?? []) {
            const term = String(item.term).toLowerCase();
            if (!definedAt.has(term)) definedAt.set(term, { lesson, where });
          }
        }

        const text = blockText(b);

        // Обещание без адреса: ученик остаётся в недопонимании и не знает, где
        // ждать ответа. Ссылка на название урока или модуля адресом считается.
        // Слово «позже» само по себе обещанием не является: «в выходные позже»
        // — это про время суток. Ищем его только при глаголе, который и делает
        // обещание. Иначе проверка ругается на верный текст.
        for (const promise of text.match(/[^.«»]{0,60}(разберём|научимся|будем разбирать|пока не|дальше в курсе|дойдём|вернёмся|(будет|это) позже)[^.]{0,80}\./gi) ?? []) {
          if (!/модул|урок/i.test(promise)) promises.push(`${where}: ${promise.trim()}`);
        }

        for (const word of text.toLowerCase().match(/[a-z][a-z']*/g) ?? []) {
          if (NAMES.has(word)) continue;
          // Отдельные буквы — материал первого модуля, а не слова.
          if (word.length === 1 && word !== "a" && word !== "i") continue;
          useCount.set(word, (useCount.get(word) ?? 0) + 1);
          if (!firstUse.has(word)) firstUse.set(word, { lesson, where });
          if (isTask(b) && !firstInTask.has(word)) firstInTask.set(word, { lesson, where });
        }
      }
    }
  }

  // 1. Слово живёт в курсе, а словарём его не вводили нигде.
  const never = [...useCount]
    .filter(([word]) => !definedAt.has(word))
    .filter(([, n]) => n >= 12)
    .sort((a, b) => b[1] - a[1]);
  // Список не приговор: сюда законно попадают формы уже введённых слов (books,
  // she's) и слова, разобранные таблицей, а не словарём (числа). Смотреть надо
  // на другое: есть ли здесь слово, которое курс не объясняет ВООБЩЕ. Именно
  // так нашлось `the` — 418 раз и ни одного объяснения.
  console.log(`\n1. Часто употребляются, но словарём не введены (порог — 12 раз): ${never.length}`);
  console.log("   Проверь по каждому: объяснено ли оно где-нибудь хоть как-нибудь.");
  for (const [word, n] of never.slice(0, 25)) {
    console.log(`   ${String(n).padStart(4)} ×  ${word.padEnd(14)} впервые: ${firstUse.get(word)!.where}`);
  }

  // 2. Задание требует слова раньше, чем словарь его дал.
  const late = [...definedAt]
    .map(([word, def]) => ({ word, def, use: firstInTask.get(word) }))
    .filter((row) => row.use && row.use.lesson < row.def.lesson)
    .sort((a, b) => a.use!.lesson - b.use!.lesson);
  console.log(`\n2. В задании раньше, чем в словаре: ${late.length}`);
  for (const row of late) {
    console.log(`   ${row.word.padEnd(14)} задание: ${row.use!.where.padEnd(44)} словарь: ${row.def.where}`);
  }

  // 3. Обещание без адреса.
  console.log(`\n3. Обещано «позже» без названия урока или модуля: ${promises.length}`);
  for (const line of promises) console.log(`   ${line}`);
}

const only = process.argv[2];
for (const course of courses) {
  if (only && course.slug !== only) continue;
  checkCourse(course);
}
console.log("\nЭто картина, а не приговор: каждую строку разбирает методист.");
