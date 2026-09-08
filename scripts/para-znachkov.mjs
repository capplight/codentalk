/**
 * Два значка Twemoji в одном файле — когда у слова нет своего значка, а есть пара.
 *
 * ПОВОД. Владелец 8 сентября 2026 просил картинку карточке `grandparents`:
 * «grandparents - бабушка с дедушкой». Одного такого значка нет ни в Twemoji, ни
 * где-либо ещё: это ДВА человека, а не один. Файл собирается из `1f475` и
 * `1f474` — оба уже лежат в `public/twemoji`, оба под CC-BY, и упоминание в
 * подвале сайта их покрывает.
 *
 * СВОИМ РИСОВАНИЕМ ЭТО НЕ ЯВЛЯЕТСЯ и запрета от 3 сентября не нарушает: ни одной
 * новой линии не рисуется, два готовых значка расставляются рядом.
 *
 * МАСШТАБ ПОДБИРАЕТСЯ ГЛАЗАМИ, а не считается. Первая сборка шла в 24/36, и
 * фигуры наложились — левая почти спряталась за правой. Проверять надо на сорока
 * точках: столько значок занимает в словаре урока.
 *
 *   node scripts/para-znachkov.mjs public/twemoji/1f475.svg public/twemoji/1f474.svg  *     public/kartinki/babushka-i-dedushka.svg
 */
import { readFile, writeFile } from "node:fs/promises";

const [levyy, pravyy, kuda] = process.argv.slice(2);
const nutro = async (p) => {
  const s = await readFile(p, "utf8");
  const m = s.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!m) throw new Error(`не разобрать: ${p}`);
  return m[1];
};
/* Каждый значок рисуется в квадрате 36×36. Ставим два по 24 с небольшим
   наложением: иначе на 40 точках экрана обе фигуры станут неразличимы. */
const M = 20 / 36;
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">` +
  `<g transform="translate(-0.5,8) scale(${M})">${await nutro(levyy)}</g>` +
  `<g transform="translate(16.5,8) scale(${M})">${await nutro(pravyy)}</g>` +
  `</svg>`;
await writeFile(kuda, svg, "utf8");
console.log(`${kuda}: ${svg.length} знаков`);
