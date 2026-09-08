/**
 * Контактное полотно кандидатов Openclipart: найти, скачать, свести в один PNG.
 *
 * ЗАЧЕМ ПОЛОТНО, А НЕ ПРОСМОТР ПО ОДНОМУ. Правило проекта «оформление
 * проверяется глазами» относится и к значкам, но глядеть надо не на картинку, а
 * на РЯД: так сразу видно, выбивается ли кандидат стилем из соседних Twemoji и
 * не сливаются ли двое на маленьком размере. По одному открывать дороже, а
 * соседства при этом не видно вовсе.
 *
 * ЧТО ЭТО ЛОВИТ НА ДЕЛЕ. Из восьми «водяных бутылок» годной оказалась одна:
 * остальные — рисунок от руки, шампанское и человек с бутылкой. По имени файла
 * ни одну из них отличить нельзя.
 *
 * Openclipart отдаёт файл как есть, страницей формата Letter: взятый файл ещё
 * надо обрезать — `node scripts/obrezat-kartinku.mjs <файл>`.
 *
 *   node scripts/polotno-openclipart.mjs "water bottle" <куда> 8
 */
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const ZAPROS = process.argv[2];
const KUDA = process.argv[3];
const SKOLKO = Number(process.argv[4] ?? 8);
await mkdir(KUDA, { recursive: true });

const stranica = await (await fetch(
  `https://openclipart.org/search/?query=${encodeURIComponent(ZAPROS)}`)).text();
const adresa = [...new Set([...stranica.matchAll(/href="\/detail\/(\d+)\/([^"]*)"/g)]
  .map((m) => `${m[1]}/${m[2]}`))].slice(0, SKOLKO);

const RAZMER = 128, PODPIS = 26, STOLBCOV = 4;
const plitki = [];
for (const a of adresa) {
  const [id, imya] = a.split("/");
  let svg;
  for (const u of [`https://openclipart.org/download/${id}/${imya}.svg`,
                   `https://openclipart.org/download/${id}/`]) {
    const o = await fetch(u);
    if (o.ok) { svg = Buffer.from(await o.arrayBuffer()); break; }
  }
  if (!svg || !svg.toString("utf8", 0, 400).includes("svg")) { console.log(`не взялось: ${a}`); continue; }
  await writeFile(`${KUDA}/${id}.svg`, svg);
  let png;
  try {
    png = await sharp(svg, { density: 200 }).resize(RAZMER, RAZMER, { fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 } }).flatten({ background: "#fff" }).png().toBuffer();
  } catch (e) { console.log(`не рисуется: ${a} — ${e.message.split("\n")[0]}`); continue; }
  const podpis = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${RAZMER}" height="${PODPIS}">` +
    `<rect width="100%" height="100%" fill="white"/>` +
    `<text x="${RAZMER / 2}" y="12" font-family="monospace" font-size="10" text-anchor="middle">${id}</text>` +
    `<text x="${RAZMER / 2}" y="23" font-family="monospace" font-size="8" text-anchor="middle">${
      imya.slice(0, 24)}</text></svg>`);
  plitki.push(await sharp({ create: { width: RAZMER, height: RAZMER + PODPIS, channels: 3,
    background: { r: 255, g: 255, b: 255 } } })
    .composite([{ input: png, top: 0, left: 0 }, { input: podpis, top: RAZMER, left: 0 }])
    .png().toBuffer());
}
const strok = Math.ceil(plitki.length / STOLBCOV);
await sharp({ create: { width: STOLBCOV * RAZMER, height: strok * (RAZMER + PODPIS),
  channels: 3, background: { r: 255, g: 255, b: 255 } } })
  .composite(plitki.map((input, i) => ({ input, left: (i % STOLBCOV) * RAZMER,
    top: Math.floor(i / STOLBCOV) * (RAZMER + PODPIS) })))
  .png().toFile(`${KUDA}/polotno.png`);
console.log(`«${ZAPROS}»: плиток ${plitki.length} → ${KUDA}/polotno.png`);
