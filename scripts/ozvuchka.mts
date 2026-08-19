/**
 * Озвучка курса.
 *
 * Обходит материалы, собирает всё, что должно звучать, и делает недостающие
 * записи. Что уже сделано и не менялось — не трогает: повторный запуск после
 * правки одного урока стоит одной записи, а не всего курса.
 *
 * Звучит четыре вида:
 *   blok    — блоки материала (`kind: "audio"`), в том числе разговоры на два голоса;
 *   slovo   — слова словарей, по одному;
 *   obrazec — образцы к заданиям «произнеси вслух»;
 *   vopros  — записи, по которым спрашивают задания, работы модулей и экзамен.
 *
 * Про последний вид отдельно: его расшифровка НИКОГДА не уходит в браузер,
 * иначе она была бы ответом на вопрос. Наружу идёт только адрес файла, а он
 * выведен отпечатком и о содержании не говорит ничего.
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
const { klyuchZvuka, zvuchashchee } = await import("../lib/content/zvuk.ts");
const { PROIZNOSHENIE } = await import("../lib/content/proiznoshenie.ts");

type TempZvuka = "normal" | "slow";
type RodZvuka = "blok" | "slovo" | "obrazec" | "vopros";

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

          if (block.kind === "example") {
            // Разговор — одной записью на два голоса; остальное дробится по
            // строкам примера. Решение владельца от 19 августа.
            if (block.razgovor && block.text) {
              dobavit({
                rod: "blok",
                klyuch: klyuchZvuka(block.text, "slow", true),
                text: block.text,
                temp: "slow",
                dvaGolosa: true,
                otkuda: `${gde} · пример ${block.id}`,
              });
            }
            for (const chto of Object.values(zvuchashchee(block))) {
              dobavit({
                rod: "slovo",
                klyuch: klyuchZvuka(chto, "slow"),
                text: chto,
                temp: "slow",
                dvaGolosa: false,
                otkuda: `${gde} · пример ${block.id}`,
              });
            }
            continue;
          }

          if (block.kind === "table") {
            for (const chto of Object.values(zvuchashchee(block))) {
              dobavit({
                rod: "slovo",
                klyuch: klyuchZvuka(chto, "slow"),
                text: chto,
                temp: "slow",
                dvaGolosa: false,
                otkuda: `${gde} · таблица ${block.id}`,
              });
            }
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

          // Запись, по которой спрашивает само задание.
          if (isTask(block) && block.zvuk) {
            dobavit({
              rod: "vopros",
              klyuch: klyuchZvuka(block.zvuk, "slow"),
              text: block.zvuk,
              temp: "slow",
              dvaGolosa: false,
              otkuda: `${gde} · ${block.id}`,
            });
          }
        }
      }

      // Вопросы проверочной работы модуля тоже умеют звучать.
      for (const vopros of module.quiz.questions) {
        if (!vopros.zvuk) continue;
        dobavit({
          rod: "vopros",
          klyuch: klyuchZvuka(vopros.zvuk, "slow"),
          text: vopros.zvuk,
          temp: "slow",
          dvaGolosa: false,
          otkuda: `${course.slug}/${module.slug} · работа · ${vopros.id}`,
        });
      }
    }

    // И вопросы итогового экзамена.
    for (const vopros of course.exam?.questions ?? []) {
      if (!vopros.zvuk) continue;
      dobavit({
        rod: "vopros",
        klyuch: klyuchZvuka(vopros.zvuk, "slow"),
        text: vopros.zvuk,
        temp: "slow",
        dvaGolosa: false,
        otkuda: `${course.slug} · экзамен · ${vopros.id}`,
      });
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

/**
 * Тире внутри одной реплики — это не смена говорящего, а связка пары:
 * «G — J. B — V. M — N.». Azure по умолчанию делает на нём паузу длиннее, чем
 * на точке, и пары слышатся наоборот: «G» отдельно, «J. B» вместе. Нашёл
 * владелец на слух.
 *
 * Лечим коротким явным перерывом. Точку не трогаем: её пауза и так длиннее,
 * а лишняя разметка заставила бы переозвучить весь курс без нужды.
 */
function tireVnutriRepliki(text: string): string {
  return text.replace(/\s+—\s+/g, '<break time="200ms"/>');
}

/**
 * Знаки препинания — явными перерывами.
 *
 * Azure сам расставляет паузы по знакам, и расставляет их неверно для учебной
 * записи: на запятой держит дольше, чем на точке, а перечисление «tea, sea,
 * eat» сливается в одно слово. Владелец услышал это первым.
 *
 * Ставим перерывы сами и в правильном порядке: точка и вопрос дольше всего,
 * запятая заметно короче. Знак при этом остаётся в тексте — он нужен разбору
 * интонации, — а перерыв идёт следом.
 */
const PAUZA_TOCHKA = 700;
const PAUZA_ZAPYATAYA = 300;

function znakiPrepinaniya(text: string): string {
  return text
    // Точка, вопрос и восклицание в конце предложения. Точку внутри записи
    // вида «D-A-N-A.» это не трогает: там перед знаком стоит буква и дефис,
    // а не конец слова с пробелом следом.
    .replace(/([.!?])(\s+)/g, `$1<break time="${PAUZA_TOCHKA}ms"/>`)
    .replace(/,(\s+)/g, `,<break time="${PAUZA_ZAPYATAYA}ms"/>`);
}

/** Разговор делится по тире на реплики, голоса чередуются. */
function repliki(text: string, dvaGolosa: boolean): { golos: string; text: string }[] {
  if (!dvaGolosa) return [{ golos: PERVYY, text }];
  const chasti = text
    .split(/\s+—\s+/)
    .map((s) => s.trim())
    // Первая реплика записана с тире в начале строки, и разделитель его не
    // съедает: перед ним нет пробела. Убираем сами — знак говорящего звучать
    // не должен.
    .map((s) => s.replace(/^—\s*/, ""))
    .filter(Boolean);
  if (chasti.length < 2) return [{ golos: PERVYY, text }];
  return chasti.map((chast, i) => ({ golos: i % 2 === 0 ? PERVYY : VTOROY, text: chast }));
}

/**
 * Одиночная латинская буква читается как ИМЯ буквы, а не как слово.
 *
 * Без этого `A` звучит как безударный артикль, а `I` — как местоимение. Для
 * таблицы алфавита это и есть всё её содержание.
 */
function odinochnayaBukva(text: string): boolean {
  return /^[A-Za-z]$/.test(text.trim());
}

/**
 * Несколько букв подряд через точку — тоже названия букв, а не слова.
 *
 * Понадобилось у семей названий: строка «A /eɪ/, H /eɪtʃ/, J /dʒeɪ/, K /keɪ/»
 * должна звучать как «A. H. J. K.», и без разметки синтез прочтёт первую букву
 * безударным артиклем, а `I` — местоимением. Та же беда, что у одиночной
 * буквы, только в ряду.
 *
 * Пауза между буквами — как на точке: их сравнивают по одной, а не слушают
 * скороговоркой.
 */
function ryadBukv(text: string): boolean {
  return /^([A-Za-z]\.\s*)+$/.test(text.trim());
}

/**
 * Диктовка через дефис — `D-A-N-A`. Тоже буквы, но перерыв между ними короче:
 * это одно слово по буквам, а не сравнение разных букв.
 */
function diktovka(text: string): boolean {
  return /^[A-Za-z](-[A-Za-z])+$/.test(text.trim());
}

/**
 * Значение звука, записанное в косых чертах, — это транскрипция, а не текст.
 *
 * Нужно там, где произнести надо ЗВУК, а не буквы: сочетание `ea` синтез сам
 * прочтёт как две буквы, а услышать ученик должен /iː/. Пишем `ea: "/iː/"`, и
 * скрипт отдаёт синтезу разметку `<phoneme>`.
 *
 * Условность общая: она понадобится всюду, где звук объясняется отдельно от
 * слова.
 */
function transkripciya(text: string): string | null {
  const m = text.trim().match(/^\/(.+)\/$/);
  return m ? m[1] : null;
}

function ssml(z: Zapis): string {
  const mfa = transkripciya(z.text);
  if (mfa) {
    const telo = `<phoneme alphabet="ipa" ph="${mfa}">${mfa}</phoneme>`;
    return (
      `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">` +
      `<voice name="${PERVYY}"><prosody rate="-25%">${telo}</prosody></voice></speak>`
    );
  }

  if (odinochnayaBukva(z.text)) {
    const telo = `<say-as interpret-as="characters">${z.text.trim()}</say-as>`;
    return (
      `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">` +
      `<voice name="${PERVYY}"><prosody rate="-25%">${telo}</prosody></voice></speak>`
    );
  }

  if (ryadBukv(z.text) || diktovka(z.text)) {
    const razdelitel = diktovka(z.text) ? "-" : ".";
    const pereryv = diktovka(z.text) ? 250 : PAUZA_TOCHKA;
    const telo = z.text
      .trim()
      .split(razdelitel)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((b) => `<say-as interpret-as="characters">${b}</say-as>`)
      .join(`<break time="${pereryv}ms"/>`);
    return (
      `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">` +
      `<voice name="${PERVYY}"><prosody rate="-25%">${telo}</prosody></voice></speak>`
    );
  }
  return ssmlObychnyy(z);
}

function ssmlObychnyy(z: Zapis): string {
  const chasti = repliki(z.text, z.dvaGolosa)
    .map((r) => {
      const telo = znakiPrepinaniya(tireVnutriRepliki(sPodskazkami(ekran(r.text))));
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
    // Обрыв соединения — не отказ Azure, а сеть. Ловится отдельно: без этого
    // одна сорвавшаяся связь роняла весь прогон, а прогон идёт больше часа.
    // Так и случилось 19 августа на 368-й записи из 769.
    let otvet: Response;
    try {
      otvet = await fetch(
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
    } catch (beda) {
      if (popytka === POPYTOK) throw beda;
      const zhdat = PAUZA_MS * 2 ** popytka;
      const chto = beda instanceof Error ? beda.message : String(beda);
      console.log(`    связь оборвалась (${chto}); ждём ${Math.round(zhdat / 1000)} с`);
      await pauza(zhdat);
      continue;
    }

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

  for (const rod of ["blok", "slovo", "obrazec", "vopros"]) {
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
  for (const rod of ["blok", "slovo", "obrazec", "vopros"] as RodZvuka[]) {
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
