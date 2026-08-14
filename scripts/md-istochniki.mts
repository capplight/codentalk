/**
 * Второй разбор источников — через markitdown.
 *
 * ЗАЧЕМ ВТОРОЙ, КОГДА ЕСТЬ ПЕРВЫЙ. Самая опасная ошибка этого проекта —
 * утверждение «в источнике этого нет». За две недели оно семь раз не выдержало
 * проверки, и каждый раз причина была одна: искали в разобранном тексте, а
 * разбор потерял или покорёжил нужное место.
 *
 * Разборщики portят по-разному. `pdf-parse` (наш первый, кэш в materials/.text)
 * читает строки подряд и теряет строение таблиц. `markitdown` строит таблицы,
 * но на некоторых страницах рассыпает буквы: «P a s t c o ntinuous».
 *
 * Отсюда правило: **не нашлось в одном — ищем во втором.** Два независимых
 * разбора одного PDF ошибаются в разных местах, и совпадение их промахов
 * маловероятно. Это прямо уменьшает число ложных «этого нет».
 *
 * И второе, чего один разбор не даёт вовсе: **расхождение между ними — само по
 * себе находка.** На странице 79 описаний Совета Европы два разбора ставят
 * пометку ступени в разных местах таблицы, то есть относят одну и ту же строку
 * к A1 и к A2. Раньше это молчало, а теперь видно и уходит методисту вопросом.
 *
 * Запуск:
 *   npm run md                       — разобрать все PDF, которых ещё нет
 *   npm run md -- materials/имя.pdf  — только этот файл, заново
 *
 * Кэш лежит в materials/.md/ рядом с materials/.text/ и в репозиторий не
 * попадает: materials/ целиком в .gitignore.
 */
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import { spawnSync } from "node:child_process";

const MATERIALS = "materials";
const KESH = join(MATERIALS, ".md");

/** markitdown ставится через pip и зовётся как модуль Python. */
function razobrat(pdf: string, kuda: string): boolean {
  const r = spawnSync("python", ["-m", "markitdown", pdf, "-o", kuda], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.error || r.status !== 0) {
    console.error(`   не вышло: ${r.stderr?.trim() || r.error?.message || "код " + r.status}`);
    return false;
  }
  return true;
}

const [, , ...args] = process.argv;
mkdirSync(KESH, { recursive: true });

const faily = args.length
  ? args
  : readdirSync(MATERIALS)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((f) => join(MATERIALS, f));

if (faily.length === 0) {
  console.log("PDF в materials/ не нашлось.");
  process.exit(0);
}

let sdelano = 0;
let propushcheno = 0;

for (const pdf of faily) {
  if (!existsSync(pdf)) {
    console.error(`нет файла: ${pdf}`);
    continue;
  }
  const kuda = join(KESH, basename(pdf).replace(/\.pdf$/i, ".md"));

  // Заново разбираем только по прямой просьбе: разбор идёт минуту-три.
  if (args.length === 0 && existsSync(kuda)) {
    propushcheno += 1;
    continue;
  }

  process.stdout.write(`разбираю ${basename(pdf)} — это надолго, но только раз…\n`);
  if (razobrat(pdf, kuda)) {
    const kb = Math.round(statSync(kuda).size / 1024);
    console.log(`   готово: ${kuda} (${kb} кБ)`);
    sdelano += 1;
  }
}

console.log(
  `\nРазобрано: ${sdelano}. Уже было: ${propushcheno}.` +
    `\nТеперь npm run kontrol ищет цитаты в обоих разборах — и в .text, и в .md.`
);
