/**
 * Какие карточки курса стоят без картинки и какие значки уже заняты.
 *
 * ЗАЧЕМ ОТДЕЛЬНОЙ КОМАНДОЙ, А НЕ СТРОКОЙ В `check:content`. Владелец решил
 * 8 сентября 2026, что картинка при знакомстве со словом обязательна, — но тем
 * же ответом вывел из-под правила прилагательные («значок покажет вещь, а не
 * признак»), а служебные слова были выведены ещё 6 сентября. Отличить
 * прилагательное от существительного содержание не позволяет: класса слова в
 * карточке нет. Значит проверка в общем отчёте перечисляла бы сорок с лишним
 * законных строк каждый прогон — ровно тот скрипт, который кричит на правильное
 * и потому перестаёт читаться.
 *
 * Здесь список спрашивают нарочно, когда за картинки берутся.
 *
 * ВТОРАЯ ПОЛОВИНА ВЫВОДА — ЗАНЯТЫЕ ЗНАЧКИ, и она не украшение. Повтор значка
 * между карточками законен (в словаре ученик не угадывает, а читает слово рядом
 * с картинкой), но знать о нём надо: `town` и `village` в курсе
 * противопоставлены, и одна картинка на оба стёрла бы разницу.
 */
import { courses } from "../courses/index.ts";

const imya = process.argv[2];
if (!imya) {
  console.error("Скажи, какой курс: npm run bez-znachka -- english-beginner-2");
  process.exit(1);
}
const kurs = courses.find((c) => c.slug === imya);
if (!kurs) {
  console.error(`Курса «${imya}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

type Slovo = { term: string; translation: string; znak?: string };

const bez: string[] = [];
const zanyato = new Map<string, string[]>();
let vsego = 0;

for (const [nomer, mod] of kurs.modules.entries()) {
  for (const les of mod.lessons) {
    for (const b of les.blocks) {
      if (!("kind" in b) || b.kind !== "vocab") continue;
      for (const it of ((b as { items?: Slovo[] }).items ?? [])) {
        vsego++;
        if (it.znak) {
          zanyato.set(it.znak, [...(zanyato.get(it.znak) ?? []), it.term]);
        } else {
          bez.push(`  м${nomer + 1} ${mod.slug} → ${les.slug}\t${it.term} — ${it.translation}`);
        }
      }
    }
  }
}

console.log(`Карточек в курсе: ${vsego}. Без картинки: ${bez.length}.`);
if (bez.length > 0) console.log(bez.join("\n"));

const povtory = [...zanyato].filter(([, slova]) => slova.length > 1);
console.log(
  `\nРазных значков занято: ${zanyato.size}. ` +
    `Из них стоят у нескольких слов: ${povtory.length}.`
);
for (const [kod, slova] of povtory.sort()) console.log(`  ${kod}\t${slova.join(", ")}`);
