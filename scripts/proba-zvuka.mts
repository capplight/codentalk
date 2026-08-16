/**
 * Проба голоса перед озвучкой курса.
 *
 * Делает десяток образцов и складывает их рядом с готовой страницей, где их
 * можно послушать подряд. Задача пробы — не «работает ли», а «годится ли на
 * слух»: выговор, темп, мёртвая ли интонация и как машина читает имена.
 *
 * Запуск:  npx tsx scripts/proba-zvuka.mts <куда складывать>
 */
import { config } from "dotenv";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

config({ path: ".env.local", quiet: true });

const KEY = process.env.AZURE_SPEECH_KEY;
const REGION = process.env.AZURE_SPEECH_REGION;
if (!KEY || !REGION) {
  console.error("Нет AZURE_SPEECH_KEY или AZURE_SPEECH_REGION в .env.local");
  process.exit(1);
}

const kuda = process.argv[2];
if (!kuda) {
  console.error("Скажи, куда складывать: npx tsx scripts/proba-zvuka.mts <папка>");
  process.exit(1);
}

/** Голоса британской нормы. Разные нужны для разговоров, иначе выходит каша. */
const GOLOS = {
  zhenskiy: "en-GB-SoniaNeural",
  muzhskoy: "en-GB-RyanNeural",
  zhenskiy2: "en-GB-LibbyNeural",
} as const;

/** Экранирование: в расшифровках встречаются кавычки и амперсанды. */
function ekran(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface Replika {
  golos: string;
  text: string;
  /** Темп: медленный нужен на первых ступенях. */
  medlenno?: boolean;
}

function ssml(repliki: Replika[]): string {
  const chasti = repliki
    .map((r) => {
      const telo = r.medlenno
        ? `<prosody rate="-25%">${r.text}</prosody>`
        : r.text;
      return `<voice name="${r.golos}">${telo}</voice>`;
    })
    .join("\n  ");
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">
  ${chasti}
</speak>`;
}

async function sintez(telo: string): Promise<Buffer> {
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
  if (!otvet.ok) {
    const prichina = await otvet.text();
    throw new Error(`Azure ответил ${otvet.status}: ${prichina.slice(0, 300)}`);
  }
  return Buffer.from(await otvet.arrayBuffer());
}

/** Имя с подсказкой, как его читать. */
function imya(slovo: string, mfa: string): string {
  return `<phoneme alphabet="ipa" ph="${mfa}">${slovo}</phoneme>`;
}

interface Obrazec {
  fayl: string;
  chto: string;
  zachem: string;
  vidno: string;
  repliki: Replika[];
}

const obrazcy: Obrazec[] = [
  {
    fayl: "01-alfavit.mp3",
    chto: "Буквы по одной, медленно",
    zachem: "Модуль 1 весь на этом. Слышно ли разницу между буквами.",
    vidno: "A. B. C. D. E. F. G.",
    repliki: [{ golos: GOLOS.zhenskiy, text: "A. B. C. D. E. F. G.", medlenno: true }],
  },
  {
    fayl: "02-privetstvie.mp3",
    chto: "Приветствия, медленно",
    zachem: "Настоящий блок из модуля 1, как он лежит в курсе сейчас.",
    vidno: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
    repliki: [
      {
        golos: GOLOS.zhenskiy,
        text: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
        medlenno: true,
      },
    ],
  },
  {
    fayl: "03-razgovor-dva-golosa.mp3",
    chto: "Разговор на два голоса",
    zachem: "Пятнадцать таких в курсе. Понятно ли, где кончается один и начинается другой.",
    vidno:
      "Good morning! What's your name? — I'm Dana. And you? — I'm Alim. Nice to meet you. — Nice to meet you too.",
    repliki: [
      { golos: GOLOS.muzhskoy, text: "Good morning! What's your name?", medlenno: true },
      {
        golos: GOLOS.zhenskiy,
        text: `I'm ${imya("Dana", "dɑːˈnɑː")}. And you?`,
        medlenno: true,
      },
      {
        golos: GOLOS.muzhskoy,
        text: `I'm ${imya("Alim", "ɑːˈliːm")}. Nice to meet you.`,
        medlenno: true,
      },
      { golos: GOLOS.zhenskiy, text: "Nice to meet you too.", medlenno: true },
    ],
  },
  {
    fayl: "04-tot-zhe-razgovor-odnim-golosom.mp3",
    chto: "Тот же разговор одним голосом",
    zachem: "Сравнить с предыдущим: стоит ли возня с двумя голосами.",
    vidno: "то же самое",
    repliki: [
      {
        golos: GOLOS.zhenskiy,
        text: "Good morning! What's your name? I'm Dana. And you? I'm Alim. Nice to meet you. Nice to meet you too.",
        medlenno: true,
      },
    ],
  },
  {
    fayl: "05-temp-medlennyy.mp3",
    chto: "Фраза в медленном темпе",
    zachem: "Описания Совета Европы для A1 требуют «very slowly and clearly». Достаточно ли медленно.",
    vidno: "I haven't got any bread. I haven't got any money.",
    repliki: [
      {
        golos: GOLOS.zhenskiy,
        text: "I haven't got any bread. I haven't got any money.",
        medlenno: true,
      },
    ],
  },
  {
    fayl: "06-temp-obychnyy.mp3",
    chto: "Та же фраза в обычном темпе",
    zachem: "Для сравнения. Может, медленный лишний и звучит по-дурацки.",
    vidno: "то же самое",
    repliki: [
      { golos: GOLOS.zhenskiy, text: "I haven't got any bread. I haven't got any money." },
    ],
  },
  {
    fayl: "07-slova-slovarya.mp3",
    chto: "Пять слов словаря по одному",
    zachem: "359 таких слов. Здесь интонации нет вовсе, машине это даётся лучше всего.",
    vidno: "water. bread. money. rice. meat.",
    repliki: [
      { golos: GOLOS.zhenskiy, text: "water. bread. money. rice. meat.", medlenno: true },
    ],
  },
  {
    fayl: "08-imena-bez-podskazki.mp3",
    chto: "Наши имена БЕЗ подсказки",
    zachem: "Как машина прочитает их сама. Скорее всего плохо — слушай внимательно.",
    vidno: "Aigerim. Astana. Almaty. Alim. Nurlan. Aigul. Dana. Kazakhstan.",
    repliki: [
      {
        golos: GOLOS.zhenskiy,
        text: "Aigerim. Astana. Almaty. Alim. Nurlan. Aigul. Dana. Kazakhstan.",
        medlenno: true,
      },
    ],
  },
  {
    fayl: "09-imena-s-podskazkoy.mp3",
    chto: "Те же имена С подсказкой транскрипцией",
    zachem: "Мой вариант чтения. Ты преподаватель — скажи, где я ошибся.",
    vidno:
      "Aigerim /ˌaɪɡeˈriːm/ · Astana /ˌæstɑːˈnɑː/ · Almaty /ˌɑːlmɑːˈtiː/ · Alim /ɑːˈliːm/ · " +
      "Nurlan /nʊrˈlɑːn/ · Aigul /aɪˈɡuːl/ · Dana /dɑːˈnɑː/ · Kazakhstan /ˌkæzəkˈstɑːn/",
    repliki: [
      {
        golos: GOLOS.zhenskiy,
        text: [
          imya("Aigerim", "ˌaɪɡeˈriːm"),
          imya("Astana", "ˌæstɑːˈnɑː"),
          imya("Almaty", "ˌɑːlmɑːˈtiː"),
          imya("Alim", "ɑːˈliːm"),
          imya("Nurlan", "nʊrˈlɑːn"),
          imya("Aigul", "aɪˈɡuːl"),
          imya("Dana", "dɑːˈnɑː"),
          imya("Kazakhstan", "ˌkæzəkˈstɑːn"),
        ].join(". ") + ".",
        medlenno: true,
      },
    ],
  },
  {
    fayl: "10-drugoy-zhenskiy-golos.mp3",
    chto: "Второй женский голос",
    zachem: "Выбор голоса: Libby вместо Sonia. Та же фраза, что в образце 2.",
    vidno: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
    repliki: [
      {
        golos: GOLOS.zhenskiy2,
        text: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
        medlenno: true,
      },
    ],
  },
  {
    fayl: "11-muzhskoy-golos.mp3",
    chto: "Мужской голос",
    zachem: "То же самое голосом Ryan.",
    vidno: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
    repliki: [
      {
        golos: GOLOS.muzhskoy,
        text: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
        medlenno: true,
      },
    ],
  },
];

async function main(): Promise<void> {
  await mkdir(kuda, { recursive: true });

  let znakov = 0;
  for (const o of obrazcy) {
    const telo = ssml(o.repliki);
    znakov += o.repliki.reduce((s, r) => s + r.text.length, 0);
    const zvuk = await sintez(telo);
    await writeFile(join(kuda, o.fayl), zvuk);
    console.log(`  ✓ ${o.fayl}  ${(zvuk.length / 1024).toFixed(0)} кБ`);
  }

  const stranica = `<title>Проба голоса</title>
<style>
  body { font: 16px/1.6 system-ui, sans-serif; max-width: 46rem; margin: 2rem auto; padding: 0 1rem; }
  h1 { font-size: 1.5rem; }
  .o { border: 1px solid #ddd; border-radius: 10px; padding: 1rem; margin: 1rem 0; }
  .o h2 { font-size: 1.05rem; margin: 0 0 .3rem; }
  .z { color: #555; font-size: .9rem; margin: 0 0 .6rem; }
  .v { background: #f6f6f6; border-radius: 6px; padding: .5rem .7rem; margin: 0 0 .7rem; font-size: .95rem; }
  audio { width: 100%; }
</style>
<h1>Проба голоса — Azure, британская норма</h1>
<p>Одиннадцать образцов. Слушай подряд и говори, что не так: выговор, темп, мёртвая ли интонация,
как читаются имена. Особенно важны образцы 8 и 9 — там наши имена без подсказки и с подсказкой.</p>
${obrazcy
  .map(
    (o) => `<div class="o">
  <h2>${o.chto}</h2>
  <p class="z">${o.zachem}</p>
  <p class="v">${ekran(o.vidno)}</p>
  <audio controls src="${o.fayl}"></audio>
</div>`,
  )
  .join("\n")}
`;
  await writeFile(join(kuda, "proba.html"), stranica, "utf8");

  console.log(`\nЗнаков потрачено: ${znakov} из 500 000 бесплатных в месяц.`);
  console.log(`Открыть: ${join(kuda, "proba.html")}`);
}

await main();
