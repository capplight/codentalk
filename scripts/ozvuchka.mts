/**
 * Озвучка курса.
 *
 * Обходит материалы, собирает всё, что должно звучать, и делает недостающие
 * записи. Что уже сделано и не менялось — не трогает: повторный запуск после
 * правки одного урока стоит одной записи, а не всего курса.
 *
 * Звучит три вида:
 *   blok    — блоки материала (`kind: "audio"`), в том числе разговоры на два голоса;
 *   slovo   — слова словарей, по одному;
 *   obrazec — образцы к заданиям «произнеси вслух».
 *
 * Имя файла выводится из текста (`lib/content/zvuk.ts`), поэтому в материалах
 * ничего прописывать не нужно: поправил фразу — получилось другое имя.
 *
 * Запуск:
 *   npm run ozvuchka -- --spisok    опись без записи: что и сколько предстоит
 *   npm run ozvuchka                сделать недостающее
 *   npm run ozvuchka -- --lishnee   убрать записи, которым больше нет хозяина
 */
import { config } from "dotenv";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

config({ path: ".env.local", quiet: true });
config({ quiet: true });

const { courses } = await import("../courses/index.ts");
const { isTask } = await import("../lib/content/types.ts");
const { klyuchZvuka } = await import("../lib/content/zvuk.ts");
const { PROIZNOSHENIE } = await import("../lib/content/proiznoshenie.ts");

type TempZvuka = "normal" | "slow";
type RodZvuka = "blok" | "slovo" | "obrazec";

const KOREN = join(process.cwd(), "public", "zvuk");

/**
 * Из чего сделан каждый файл. Лежит ВНЕ `public/`: всё, что там, раздаётся
 * всем подряд, а это наша кухня, ученику она не нужна.
 */
const SOSTOYANIE = join(process.cwd(), "courses", "zvuk-sostoyanie.json");

/** Голоса британской нормы. Второй нужен только разговорам. */
const PERVYY = "en-GB-SoniaNeural";
const VTOROY = "en-GB-RyanNeural";

const tolkoOpis = process.argv.includes("--spisok");
const ubratLishnee = process.argv.includes("--lishnee");

// ---------------------------------------------------------------------------
// Опись: что должно звучать
// ---------------------------------------------------------------------------

interface Zapis {
  rod: RodZvuka;
  klyuch: string;
  text: string;
  temp: TempZvuka;
  dvaGolosa: boolean;
  /** Откуда взялось — для отчёта и разбора. */
  otkuda: string;
}

function sobratOpis(): Zapis[] {
  const zapisi = new Map<string, Zapis>();

  const dobavit = (z: Zapis): void => {
    const id = `${z.rod}/${z.klyuch}`;
    if (!zapisi.has(id)) zapisi.set(id, z);
  };

  for (const course of courses) {
    // Озвучиваем только языковые курсы. В курсе по коду словарь состоит из
    // `h1` и `h2` — это названия меток разметки, а не английские слова, и
    // читать их вслух незачем: урок там русский.
    if (course.track !== "english") continue;

    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        const gde = `${course.slug}/${lesson.slug}`;

        for (const block of lesson.blocks) {
          if (block.kind === "audio") {
            const temp: TempZvuka = block.pace === "slow" ? "slow" : "normal";
            const dvaGolosa = Boolean(block.voice);
            dobavit({
              rod: "blok",
              klyuch: klyuchZvuka(block.transcript, temp, dvaGolosa),
              text: block.transcript,
              temp,
              dvaGolosa,
              otkuda: `${gde} · ${block.id}`,
            });
            continue;
          }

          if (block.kind === "vocab") {
            for (const item of block.items) {
              dobavit({
                rod: "slovo",
                klyuch: klyuchZvuka(item.term, "slow"),
                text: item.term,
                temp: "slow",
                dvaGolosa: false,
                otkuda: `${gde} · словарь`,
              });
            }
            continue;
          }

          if (isTask(block) && block.kind === "speak") {
            dobavit({
              rod: "obrazec",
              klyuch: klyuchZvuka(block.phrase, "slow"),
              text: block.phrase,
              temp: "slow",
              dvaGolosa: false,
              otkuda: `${gde} · ${block.id}`,
            });
          }
        }
      }
    }
  }

  return [...zapisi.values()];
}

// ---------------------------------------------------------------------------
// Разметка чтения
// ---------------------------------------------------------------------------

function ekran(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Подставить подсказки произношения для имён собственных.
 *
 * Слово заменяется целиком: `Dana` в `Dana` — да, `Dana` внутри `Danais` — нет.
 * Границу считаем сами, потому что `\b` в JavaScript не знает нелатинских
 * букв — на этом в проекте уже обжигались с поиском калек.
 */
function sPodskazkami(text: string): string {
  let vyhod = text;
  for (const [slovo, mfa] of Object.entries(PROIZNOSHENIE)) {
    vyhod = vyhod.replace(
      new RegExp(`(^|[^A-Za-z])(${slovo})(?![A-Za-z])`, "g"),
      (_, do_, samo) => `${do_}<phoneme alphabet="ipa" ph="${mfa}">${samo}</phoneme>`,
    );
  }
  return vyhod;
}

/** Разговор делится по тире на реплики, голоса чередуются. */
function repliki(text: string, dvaGolosa: boolean): { golos: string; text: string }[] {
  if (!dvaGolosa) return [{ golos: PERVYY, text }];
  const chasti = text
    .split(/\s+—\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (chasti.length < 2) return [{ golos: PERVYY, text }];
  return chasti.map((chast, i) => ({ golos: i % 2 === 0 ? PERVYY : VTOROY, text: chast }));
}

function ssml(z: Zapis): string {
  const chasti = repliki(z.text, z.dvaGolosa)
    .map((r) => {
      const telo = sPodskazkami(ekran(r.text));
      const sTempom = z.temp === "slow" ? `<prosody rate="-25%">${telo}</prosody>` : telo;
      return `<voice name="${r.golos}">${sTempom}</voice>`;
    })
    .join("");
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">${chasti}</speak>`;
}

// ---------------------------------------------------------------------------
// Запись
// ---------------------------------------------------------------------------

const KEY = process.env.AZURE_SPEECH_KEY;
const REGION = process.env.AZURE_SPEECH_REGION;

/**
 * Бесплатная доля отпускает около двадцати обращений в минуту. Идём медленнее
 * нарочно: упереться в предел и разбираться с отказами дороже, чем подождать.
 */
const PAUZA_MS = 3200;
const POPYTOK = 5;

function pauza(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function sintez(telo: string): Promise<Buffer> {
  for (let popytka = 1; popytka <= POPYTOK; popytka += 1) {
    const otvet = await fetch(
      `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": KEY as string,
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
          "User-Agent": "codentalk",
        },
        body: telo,
      },
    );

    if (otvet.ok) return Buffer.from(await otvet.arrayBuffer());

    // 429 — уперлись в предел бесплатной доли, ждём и пробуем снова.
    if (otvet.status === 429 || otvet.status >= 500) {
      const zhdat = PAUZA_MS * 2 ** popytka;
      console.log(`    ждём ${Math.round(zhdat / 1000)} с (ответ ${otvet.status})`);
      await pauza(zhdat);
      continue;
    }

    const prichina = await otvet.text();
    throw new Error(`Azure ответил ${otvet.status}: ${prichina.slice(0, 300)}`);
  }
  throw new Error(`Не вышло за ${POPYTOK} попыток — Azure отказывает`);
}

// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const opis = sobratOpis();

  const poRodu = (rod: RodZvuka) => opis.filter((z) => z.rod === rod).length;
  console.log("Опись:");
  console.log(`  блоков материала:  ${poRodu("blok")}`);
  console.log(`  слов словарей:     ${poRodu("slovo")}`);
  console.log(`  образцов к «скажи»:${poRodu("obrazec")}`);
  console.log(`  всего записей:     ${opis.length}`);
  const znakov = opis.reduce((s, z) => s + z.text.length, 0);
  console.log(`  знаков:            ${znakov}\n`);

  // Состояние: из чего сделан каждый существующий файл.
  let sostoyanie: Record<string, string> = {};
  if (existsSync(SOSTOYANIE)) {
    sostoyanie = JSON.parse(await readFile(SOSTOYANIE, "utf8")) as Record<string, string>;
  }

  const nuzhno: { z: Zapis; telo: string; put: string; id: string; pochemu: string }[] = [];
  for (const z of opis) {
    const telo = ssml(z);
    const otpechatok = createHash("sha256").update(telo).digest("hex").slice(0, 16);
    const id = `${z.rod}/${z.klyuch}`;
    const put = join(KOREN, z.rod, `${z.klyuch}.mp3`);

    if (!existsSync(put)) {
      nuzhno.push({ z, telo, put, id, pochemu: "нет записи" });
    } else if (sostoyanie[id] !== otpechatok) {
      nuzhno.push({ z, telo, put, id, pochemu: "изменилось чтение" });
    }
  }

  console.log(`Сделать предстоит: ${nuzhno.length}`);
  const menyalos = nuzhno.filter((n) => n.pochemu === "изменилось чтение").length;
  if (menyalos > 0) console.log(`  из них переделать из-за правки чтения: ${menyalos}`);

  if (tolkoOpis) {
    console.log("\nОпись. Ничего не записано.");
    if (nuzhno.length > 0) {
      console.log("\nПервые десять из очереди:");
      for (const n of nuzhno.slice(0, 10)) {
        console.log(`  ${n.z.rod.padEnd(8)} ${n.pochemu.padEnd(18)} ${n.z.otkuda}`);
        console.log(`           «${n.z.text.slice(0, 90)}»`);
      }
    }
    return;
  }

  if (!KEY || !REGION) {
    console.error("\nНет AZURE_SPEECH_KEY или AZURE_SPEECH_REGION в .env.local");
    process.exit(1);
  }

  for (const rod of ["blok", "slovo", "obrazec"]) {
    await mkdir(join(KOREN, rod), { recursive: true });
  }

  let sdelano = 0;
  const nachalo = Date.now();
  for (const n of nuzhno) {
    const zvuk = await sintez(n.telo);
    await writeFile(n.put, zvuk);
    sostoyanie[n.id] = createHash("sha256").update(n.telo).digest("hex").slice(0, 16);
    sdelano += 1;

    // Состояние пишется на каждом шаге: прерванный прогон продолжается с места
    // остановки, а не начинается заново.
    await writeFile(SOSTOYANIE, JSON.stringify(sostoyanie, null, 0), "utf8");

    if (sdelano % 20 === 0 || sdelano === nuzhno.length) {
      const proshlo = Math.round((Date.now() - nachalo) / 1000);
      console.log(`  ${sdelano} из ${nuzhno.length}  (${proshlo} с)`);
    }
    if (sdelano < nuzhno.length) await pauza(PAUZA_MS);
  }

  // ---- лишнее -------------------------------------------------------------
  const zhivye = new Set(opis.map((z) => `${z.rod}/${z.klyuch}`));
  const lishnie: string[] = [];
  for (const rod of ["blok", "slovo", "obrazec"] as RodZvuka[]) {
    const papka = join(KOREN, rod);
    if (!existsSync(papka)) continue;
    for (const fayl of await readdir(papka)) {
      if (!fayl.endsWith(".mp3")) continue;
      const id = `${rod}/${fayl.replace(/\.mp3$/, "")}`;
      if (!zhivye.has(id)) lishnie.push(id);
    }
  }

  if (lishnie.length > 0) {
    if (ubratLishnee) {
      for (const id of lishnie) {
        await rm(join(KOREN, `${id}.mp3`));
        delete sostoyanie[id];
      }
      await writeFile(SOSTOYANIE, JSON.stringify(sostoyanie, null, 0), "utf8");
      console.log(`\nУбрано записей без хозяина: ${lishnie.length}`);
    } else {
      console.log(
        `\nЗаписей без хозяина: ${lishnie.length}. Убрать — npm run ozvuchka -- --lishnee`,
      );
    }
  }

  console.log(`\nГотово. Записано: ${sdelano}.`);
}

await main();
