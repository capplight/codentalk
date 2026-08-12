/**
 * Модуль в виде текста — того, который читает ученик, и только его.
 *
 * Нужен редактору. Сейчас он читает файл `.ts` целиком: полторы тысячи строк с
 * именами блоков, признаками `correct` и полем `sources`, до которого ему нет
 * дела. Его работа — русский язык, то есть ровно то, что видно ученику.
 *
 * Ничего не добавляется от себя: подписи ролей («врезка», «разбор задания») —
 * это названия мест, а не новый текст. Ничего не теряется: разбор сверяется сам
 * с собой, и всё, что не попало в вывод, печатается отдельным списком в конце.
 *
 * Запуск:
 *   npm run tekst -- english-starter ya-ne-delayu
 *   npm run tekst -- english-starter ya-ne-delayu > modul-15.md
 */
import { courses } from "../courses/index.ts";
import { kuskiModulya } from "./vidimoe.mts";

const [, , kursSlug, modulSlug] = process.argv;

if (!kursSlug) {
  console.error("Укажи курс: npm run tekst -- english-starter [модуль]");
  process.exit(1);
}

for (const course of courses) {
  if (course.slug !== kursSlug) continue;

  for (const mod of course.modules) {
    if (modulSlug && mod.slug !== modulSlug) continue;

    const { kuski, poteryano } = kuskiModulya(mod);

    let urok = "";
    for (const k of kuski) {
      // Заголовок нового урока: `gde` устроено как «модуль → урок → блок».
      const chasti = k.gde.split(" → ");
      if (chasti[1] && chasti[1] !== urok) {
        urok = chasti[1];
        console.log(`\n\n## ${urok}\n`);
      }

      switch (k.rol) {
        case "название модуля":
          console.log(`# ${k.text}\n`);
          break;
        case "название урока":
          console.log(`**${k.text}**\n`);
          break;
        case "объяснение":
          console.log(`${k.text}\n`);
          break;
        default:
          console.log(`_${k.rol}:_ ${k.text}\n`);
      }
    }

    if (poteryano.length) {
      console.log(`\n\n---\n\n**В текст не попало (это ошибка разбора, а не урока):**\n`);
      for (const s of poteryano) console.log(`- ${s}`);
    }
  }
}
