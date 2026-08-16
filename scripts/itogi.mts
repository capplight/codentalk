/**
 * Итоги уроков по частям курса — рабочий список для того, кто пишет
 * проверочную работу части.
 *
 * ЗАЧЕМ. У вопроса работы поле `outcome` обязано совпадать с итогом урока
 * ДОСЛОВНО, иначе проверка не пропустит. Итоги лежат в двадцати пяти файлах, и
 * выписывать их руками — верный способ ошибиться в запятой.
 *
 * Запуск: npm run --silent itogi -- english-starter
 */
import { courses } from "../courses/index.ts";

const [kurs] = process.argv.slice(2);
const course = courses.find((c) => c.slug === kurs);

if (!course) {
  console.error(`Курса «${kurs}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

for (const part of course.parts ?? []) {
  console.log(`\n=== ЧАСТЬ: ${part.title} (${part.slug})`);
  console.log(`    ${part.tagline ?? ""}`);
  for (const name of part.modules) {
    const mod = course.modules.find((m) => m.slug === name);
    if (!mod) continue;
    console.log(`\n  МОДУЛЬ ${mod.title} (${mod.slug})`);
    for (const lesson of mod.lessons) {
      console.log(`    ${lesson.outcome}`);
    }
  }
}
