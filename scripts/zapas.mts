/**
 * Запас модуля: чем можно пользоваться, когда пишешь в него урок.
 *
 * ЗАЧЕМ. Главное правило содержания — задание не требует того, чего в курсе не
 * было. Проверить это по памяти нельзя: к двенадцатому модулю в курсе уже
 * двести слов, а какие из них даны ДО него, помнит только порядок файлов.
 * Выяснять это вручную на каждом модуле — верный способ ошибиться, и я уже
 * ошибался: брал слово, которое вводится тремя модулями позже.
 *
 * Скрипт отвечает на три вопроса сразу:
 *   — какие слова уже даны словарной карточкой к концу этого модуля;
 *   — что даётся ПОЗЖЕ и потому запрещено;
 *   — какие итоги у модуля и сколько в нём уроков.
 *
 * Запуск:
 *   npm run zapas -- english-starter gde-eto
 *   npm run zapas -- english-starter gde-eto --pozzhe   что нельзя брать
 */
import { courses } from "../courses/index.ts";

const [, , kursSlug, modulSlug] = process.argv;
const pokazatPozzhe = process.argv.includes("--pozzhe");

if (!kursSlug || !modulSlug) {
  console.error("Укажи курс и модуль: npm run zapas -- english-starter gde-eto");
  process.exit(1);
}

const course = courses.find((c) => c.slug === kursSlug);
if (!course) {
  console.error(`Курса «${kursSlug}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

const nomer = course.modules.findIndex((m) => m.slug === modulSlug);
if (nomer < 0) {
  console.error(`Модуля «${modulSlug}» в курсе нет.`);
  console.error("Есть: " + course.modules.map((m, i) => `${i + 1}. ${m.slug}`).join("\n       "));
  process.exit(1);
}

const modul = course.modules[nomer];

/** Слова, введённые словарной карточкой в этих модулях. */
function slovaModuley(ot: number, do_: number): Map<string, string> {
  const out = new Map<string, string>();
  for (let i = ot; i <= do_; i += 1) {
    for (const lesson of course!.modules[i].lessons) {
      for (const block of lesson.blocks) {
        if (block.kind !== "vocab") continue;
        for (const item of block.items) {
          if (!out.has(item.term.toLowerCase())) {
            out.set(item.term.toLowerCase(), `${course!.modules[i].slug}`);
          }
        }
      }
    }
  }
  return out;
}

const dano = slovaModuley(0, nomer);
const pozzhe = slovaModuley(nomer + 1, course.modules.length - 1);
// Слово, данное раньше, «поздним» не считается, даже если карточка есть и там.
for (const slovo of dano.keys()) pozzhe.delete(slovo);

console.log(`\n=== Модуль ${nomer + 1} из ${course.modules.length}: ${modul.title} (${modul.slug})\n`);

console.log("ИТОГИ МОДУЛЯ:");
for (const o of modul.outcomes) console.log(`  · ${o}`);

console.log(`\nУРОКОВ: ${modul.lessons.length}`);
for (const l of modul.lessons) {
  console.log(`  ${l.slug.padEnd(28)} ${l.estimatedMinutes} мин · ${l.outcome}`);
}

console.log(`\nВОПРОСОВ В РАБОТЕ: ${modul.quiz.questions.length}, выдаётся ${modul.quiz.ask ?? "все"}`);

console.log(`\nМОЖНО БРАТЬ — слов дано к концу модуля ${nomer + 1}: ${dano.size}\n`);
console.log(
  [...dano.keys()]
    .sort()
    .join(", ")
    .replace(/(.{92}[^,]*, )/g, "$1\n"),
);

if (pokazatPozzhe) {
  console.log(`\n\nНЕЛЬЗЯ БРАТЬ — вводится позже: ${pozzhe.size}\n`);
  const poModulyam = new Map<string, string[]>();
  for (const [slovo, gde] of pozzhe) {
    if (!poModulyam.has(gde)) poModulyam.set(gde, []);
    poModulyam.get(gde)!.push(slovo);
  }
  for (const [gde, slova] of poModulyam) {
    console.log(`  ${gde}: ${slova.sort().join(", ")}`);
  }
}

console.log(
  "\nПомни: словарная карточка — не весь язык модуля. Грамматика идёт по программе,\n" +
    "и её порядок этот скрипт не знает. Смотри docs/programma-english-starter.md.",
);
