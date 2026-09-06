/**
 * Обрезать SVG по самому рисунку.
 *
 * ЗАЧЕМ. Второй источник картинок — Openclipart — отдаёт файлы как есть, а
 * художники рисуют их на листе: у стола `viewBox` оказался «0 0 612 792», то
 * есть страница формата Letter, внутри которой рисунок занимает четверть. На
 * странице урока значок стоит квадратом 44 на 44 точки, и такой стол вышел бы
 * крошечным и сдвинутым в угол.
 *
 * Twemoji этой беды не знает: там у всех 3600 значков `viewBox` ровно «0 0 36
 * 36», рисунок занимает весь квадрат. Отсюда и повадка страницы задавать
 * картинке равные ширину и высоту.
 *
 * КАК СЧИТАЕТСЯ. Обводить рисунок глазами не надо: файл рисуется в картинку
 * заведомо большого размера, у неё обрезаются поля, и по смещениям обрезки
 * считается новый `viewBox` в тех же единицах, что и старый. Никакого разбора
 * путей — значит работает с любым файлом, как бы он ни был устроен внутри.
 *
 *   node scripts/obrezat-kartinku.mjs public/kartinki/stol.svg
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const RISOVAT = 1000;

const put = process.argv[2];
if (!put) {
  console.error("Скажи, какой файл обрезать.");
  process.exit(1);
}

const svg = readFileSync(put, "utf8");
const m = /viewBox="([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)"/.exec(svg);
if (!m) {
  console.error("У файла нет viewBox — обрезать нечего.");
  process.exit(1);
}
const [x0, y0, w0, h0] = m.slice(1).map(Number);

const bolshaya = await sharp(Buffer.from(svg), { limitInputPixels: false })
  .resize({ width: RISOVAT })
  .png()
  .toBuffer();

const { info } = await sharp(bolshaya)
  .trim({ threshold: 1 })
  .toBuffer({ resolveWithObject: true });

// Во что превратилась единица viewBox при рисовании.
const masshtab = RISOVAT / w0;
const x = x0 + info.trimOffsetLeft * -1 / masshtab;
const y = y0 + info.trimOffsetTop * -1 / masshtab;
const w = info.width / masshtab;
const h = info.height / masshtab;

// Квадрат вокруг рисунка: так значок встаёт в квадратную ячейку страницы, не
// растягиваясь. Поля добавляются поровну с двух сторон.
const storona = Math.max(w, h);
const kv = [
  (x - (storona - w) / 2).toFixed(2),
  (y - (storona - h) / 2).toFixed(2),
  storona.toFixed(2),
  storona.toFixed(2),
].join(" ");

writeFileSync(put, svg.replace(m[0], `viewBox="${kv}"`), "utf8");
console.log(`${put}: было «${m[1]} ${m[2]} ${m[3]} ${m[4]}», стало «${kv}»`);
