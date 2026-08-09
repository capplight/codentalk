/**
 * Текст из PDF — чтобы источники в materials/ можно было читать и сверять.
 *
 * Встроенное чтение PDF в этой среде не работает: нужна внешняя программа,
 * которой нет. Без этого скрипта все руководства Cambridge и документы Совета
 * Европы лежат мёртвым грузом, а проверка содержания по источникам невозможна.
 *
 * Запуск:
 *   npm run pdf -- materials/cefr-companion-2020.pdf --find "Pre-A1"
 *   npm run pdf -- materials/cefr-companion-2020.pdf 46 52
 *   npm run pdf -- materials/cefr-companion-2020.pdf            (весь текст)
 *
 * Поиск показывает номера страниц с совпадением и строку вокруг него — так в
 * документе на триста страниц находится нужное место. Номера страниц те же,
 * что у самого файла, поэтому на них можно ссылаться в проверке.
 */
import { readFileSync } from "node:fs";
import { PDFParse } from "pdf-parse";

const [, , file, ...rest] = process.argv;

if (!file) {
  console.error('Укажи файл: npm run pdf -- materials/имя.pdf [--find "что искать" | от до]');
  process.exit(1);
}

const parser = new PDFParse({ data: readFileSync(file) });

try {
  const findAt = rest.indexOf("--find");
  const from = findAt === -1 && rest[0] ? Number(rest[0]) : undefined;
  const to = findAt === -1 && rest[1] ? Number(rest[1]) : undefined;

  // Просим только нужные страницы: разбор трёхсот страниц ради двух — минуты ожидания
  const result = await parser.getText(
    from !== undefined ? { first: from, last: to ?? from } : undefined
  );

  if (findAt !== -1) {
    const needle = rest[findAt + 1];
    if (!needle) {
      console.error("После --find укажи, что искать");
      process.exit(1);
    }
    const lower = needle.toLowerCase();
    let found = 0;

    for (const page of result.pages) {
      const lines = page.text.split("\n");
      lines.forEach((line, index) => {
        if (!line.toLowerCase().includes(lower)) return;
        found += 1;
        const around = lines
          .slice(Math.max(0, index - 1), index + 2)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
        console.log(`с. ${page.num}: ${around.slice(0, 240)}`);
      });
    }

    console.log(`\nВсего совпадений: ${found}, страниц в файле: ${result.pages.length}`);
  } else {
    for (const page of result.pages) {
      console.log(`\n=============== страница ${page.num} ===============\n`);
      console.log(page.text);
    }
  }
} finally {
  await parser.destroy();
}

// Разбор PDF оставляет за собой рабочие потоки, и без явного завершения процесс
// уходит с ненулевым кодом — при частом использовании это выглядит как поломка.
process.exit(0);
