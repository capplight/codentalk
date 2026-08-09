/**
 * Сверочная таблица транскрипций для слов курса.
 *
 * Готовой правильной транскрипции в открытом доступе нет: каждый из трёх
 * источников в чём-то ненадёжен (см. CLAUDE.md, раздел о британской норме).
 * Поэтому скрипт не выбирает за преподавателя, а кладёт варианты рядом и
 * помечает те слова, где источники разошлись, — их решает владелец.
 *
 * Запуск:  npx tsx scripts/ipa-table.mts english-starter > docs/transkripciya.md
 */
import { readFileSync } from "node:fs";
import { findCourse } from "../courses/index.ts";

const slug = process.argv[2] ?? "english-starter";
const course = findCourse(slug);
if (!course) {
  console.error(`Курса ${slug} нет в courses/index.ts`);
  process.exit(1);
}

const M = "e:/My Project/codentalk.kz/materials";

/** ipa-dict: свободная лицензия, собран машиной. Ударение стоит не по норме. */
const ipaDict = new Map<string, string>();
for (const line of readFileSync(`${M}/ipa-en-uk.txt`, "utf8").split("\n")) {
  const [word, ipa] = line.split("\t");
  if (word && ipa && !ipaDict.has(word)) ipaDict.set(word, ipa.split(",")[0].trim());
}

/** WikiPron: из Викисловаря, писали люди, но есть областные варианты. */
const wikipron = new Map<string, string[]>();
for (const line of readFileSync(`${M}/wikipron-en-uk.tsv`, "utf8").split("\n")) {
  const [word, phonemes] = line.split("\t");
  if (!word || !phonemes) continue;
  const form = phonemes.replace(/\s+/g, "");
  const list = wikipron.get(word) ?? [];
  if (!list.includes(form)) list.push(form);
  wikipron.set(word, list);
}

/** CMUdict: надёжен и с ударением, но американский и в своей записи. */
const cmu = new Map<string, string>();
for (const line of readFileSync(`${M}/cmudict.txt`, "utf8").split("\n")) {
  const space = line.indexOf(" ");
  if (space < 1 || line.startsWith(";;;")) continue;
  const word = line.slice(0, space).replace(/\(\d+\)$/, "");
  if (!cmu.has(word)) cmu.set(word, line.slice(space + 1).split("#")[0].trim());
}

/** Слова курса: из блоков vocab, составные разбираются на части. */
const words: string[] = [];
/** Краткие формы с апострофом: в источниках их почти нет, произношение даёт преподаватель. */
const contractions: string[] = [];
for (const module of course.modules) {
  for (const lesson of module.lessons) {
    for (const block of lesson.blocks) {
      if (block.kind !== "vocab") continue;
      for (const item of block.items) {
        // Делим только по пробелам. Резать по апострофу нельзя: из «I'm» и
        // «you're» получались бы обрывки «i», «m», «re», которых в языке нет,
        // а в таблице они выглядели бы как настоящие слова.
        for (const part of item.term.toLowerCase().split(/\s+/)) {
          const clean = part.replace(/[^a-z'’]/g, "").replace(/’/g, "'");
          if (clean.length === 0) continue;
          if (clean.includes("'")) {
            contractions.push(clean);
            continue;
          }
          if (!words.includes(clean)) words.push(clean);
        }
      }
    }
  }
}

/** Сравниваем без знаков ударения и косых черт — иначе разойдётся всё подряд. */
const bare = (s: string) => s.replace(/[\/ˈˌ.]/g, "");

console.log(`# Транскрипции: ${course.title}\n`);
console.log("Британская норма. Составлено скриптом `npx tsx scripts/ipa-table.mts`.\n");
console.log(
  "Столбец «решение» заполняет преподаватель там, где источники разошлись.\n" +
    "Где стоит «сходится» — можно брать как есть.\n"
);
console.log("| Слово | ipa-dict | Викисловарь | CMU (амер.) | Итог | Решение |");
console.log("|---|---|---|---|---|---|");

let agree = 0;
let differ = 0;
let missing = 0;

for (const word of words) {
  const a = ipaDict.get(word);
  const b = wikipron.get(word) ?? [];
  const c = cmu.get(word);

  let verdict: string;
  if (!a && b.length === 0) {
    verdict = "**нет в источниках**";
    missing += 1;
  } else if (a && b.some((v) => bare(v) === bare(a))) {
    verdict = b.length > 1 ? "сходится, но есть варианты" : "сходится";
    agree += 1;
  } else {
    verdict = "**разошлись**";
    differ += 1;
  }

  const bShown = b.length > 3 ? `${b.slice(0, 3).join(" · ")} …` : b.join(" · ") || "—";
  console.log(
    `| ${word} | ${a ?? "—"} | ${bShown} | ${c ?? "—"} | ${verdict} | |`
  );
}

console.log(
  `\nВсего слов ${words.length}: сходится ${agree}, разошлись ${differ}, нет в источниках ${missing}.`
);

if (contractions.length > 0) {
  const unique = [...new Set(contractions)];
  console.log(
    `\n## Краткие формы\n\n` +
      unique.map((c) => `- ${c}`).join("\n") +
      `\n\nВ словарях транскрипции их обычно нет: это сращения двух слов. ` +
      `Произношение задаёт преподаватель.`
  );
}
