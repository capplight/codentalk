/**
 * Забор значков Twemoji к нам, в `public/twemoji`.
 *
 * ЗАЧЕМ ЗАБИРАТЬ, А НЕ ССЫЛАТЬСЯ. Картинка, которую страница тянет с чужого
 * адреса, рассказывает чужой стороне, кто к нам пришёл и что читает, — и
 * пропадает вместе с чужим сервером. То же правило, по которому шрифты
 * забираются во время сборки (см. `app/layout.tsx`).
 *
 * ЧТО ЗАБИРАТЬ, СКРИПТ НЕ ВЫДУМЫВАЕТ. Он обходит курсы и берёт значки, которые
 * названы в самом содержании — поле `znak` у блока и у слова словаря. Значит
 * список не разъезжается с уроками: добавил случай со значком — забрал файл.
 *
 * ЛИЦЕНЗИЯ. Twemoji — CC-BY 4.0, требуется упоминание. Оно стоит в подвале
 * сайта (`app/layout.tsx`). Разбор лицензий четырёх библиотек, с цитатами, —
 * `docs/beginner-2/kartinki-otkuda.md`.
 *
 * ОСТОРОЖНО С КОДАМИ. Часть знаков лежит БЕЗ указателя вида `fe0f`: `261d-fe0f`
 * отдаёт 404, а `261d` работает. Поэтому скрипт не молчит о неудаче, а называет
 * код и останавливается с ошибкой: пропущенный файл на странице выглядит просто
 * пустым местом, и заметить его глазами трудно.
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { courses } from "../courses/index.ts";
import { isTask, type Course } from "../lib/content/types.ts";

const OTKUDA = "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg";
const KUDA = "public/twemoji";

/** Все значки, названные содержанием курсов. */
function nuzhnye(spisok: Course[]): Map<string, string[]> {
  const gde = new Map<string, string[]>();
  const otmetit = (znak: string | undefined, mesto: string) => {
    if (!znak) return;
    const bylo = gde.get(znak) ?? [];
    bylo.push(mesto);
    gde.set(znak, bylo);
  };

  for (const kurs of spisok) {
    for (const modul of kurs.modules) {
      for (const urok of modul.lessons) {
        for (const blok of urok.blocks) {
          otmetit(blok.znak, `${kurs.slug}/${urok.slug}/${blok.id}`);
          if (!isTask(blok) && blok.kind === "vocab") {
            for (const slovo of blok.items) {
              otmetit(slovo.znak, `${kurs.slug}/${urok.slug}/${blok.id}/${slovo.term}`);
            }
          }
        }
      }
    }
  }
  return gde;
}

const znaki = nuzhnye(courses);
if (znaki.size === 0) {
  console.log("Ни один урок значков не называет — забирать нечего.");
  process.exit(0);
}

await mkdir(KUDA, { recursive: true });
const est = new Set(
  (await readdir(KUDA).catch(() => [] as string[])).map((f) => f.replace(/\.svg$/, ""))
);

let vzyato = 0;
let bylo = 0;
const poteryany: string[] = [];

for (const [kod, mesta] of [...znaki].sort()) {
  if (est.has(kod)) {
    bylo += 1;
    continue;
  }
  const otvet = await fetch(`${OTKUDA}/${kod}.svg`);
  if (!otvet.ok) {
    poteryany.push(`${kod} (${otvet.status}) — ${mesta[0]}`);
    continue;
  }
  await writeFile(join(KUDA, `${kod}.svg`), await otvet.text(), "utf8");
  vzyato += 1;
}

console.log(`Значков названо содержанием: ${znaki.size}`);
console.log(`Уже лежало: ${bylo}, забрано сейчас: ${vzyato}`);

if (poteryany.length > 0) {
  console.log("\nНЕ НАШЛИСЬ — проверь код знака:");
  for (const stroka of poteryany) console.log("  " + stroka);
  process.exit(1);
}

// Файл, на который никто не ссылается, — след переименованного блока.
// Сведениями, не ошибкой: удаляет человек, а не скрипт.
const lishnie = [...est].filter((kod) => !znaki.has(kod));
if (lishnie.length > 0) {
  console.log(`\nЛежат, но не нужны никому (${lishnie.length}): ${lishnie.join(", ")}`);
}
