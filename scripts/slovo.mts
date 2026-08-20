/**
 * Справка о слове: какая ступень, входит ли в словник экзамена, как читается,
 * не дано ли уже.
 *
 * ЗАЧЕМ. С 20 августа у ступени есть норма словаря: не меньше пятнадцати новых
 * слов на модуль (CLAUDE.md, «Объём словаря и число модулей»). Проверять
 * каждое слово вручную — открывать два PDF и словарь произношения, и так на
 * каждую карточку. Гадание же кончается тем, что модуль набирает слова прошлой
 * ступени: в первых двух модулях Elementary из 81 карточки новыми оказались
 * три, и заметил это только счёт.
 *
 * Скрипт отвечает разом на четыре вопроса:
 *   — какую ступень слову ставит Oxford 3000;
 *   — входит ли слово в словник A2 Key (требования экзамена);
 *   — как оно записано в ipa-en-uk (с оговорками условностей курса);
 *   — не дано ли оно уже словарной карточкой и в каком модуле.
 *
 * Запуск:
 *   npm run slovo -- airport library terrible
 *   npm run slovo -- --zapas 40        сорок слов ступени, ещё не взятых курсом
 *
 * Чего скрипт НЕ решает. Он не говорит, годится ли слово уроку: это дело
 * методиста и владельца. Транскрипцию он показывает как есть в источнике —
 * знаки `ɹ`, `ɡ`, `ɛ`, `ɐ` в курсе пишутся иначе (CLAUDE.md, «Английский —
 * британская норма»), и приведение к нашей условности остаётся за человеком.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { courses } from "../courses/index.ts";
import type { Block } from "../lib/content/types.ts";

const KESH = join("materials", ".text");
const STUPENI = ["a1", "a2", "b1", "b2", "c1", "c2"];

function trebuetsya(put: string, kak: string): string {
  if (!existsSync(put)) {
    console.error(`Нет файла ${put}. Собери его: ${kak}`);
    process.exit(1);
  }
  return readFileSync(put, "utf8");
}

// --- Oxford 3000: слово → ступень ------------------------------------------
// Разбор тот же, что в kontrol.mts, и по той же причине идёт от пометы назад:
// в сплошном списке слово иначе подбирает ступень соседней записи.
function oxford(): Map<string, string> {
  const syroy = trebuetsya(join(KESH, "oxford-3000.txt"), "npm run kontrol -- english-starter");
  const seno = syroy.replace(/\([^)]*\)/g, " ").toLowerCase();
  const CHASTI = new Set([
    "n", "v", "adj", "adv", "prep", "pron", "det", "conj", "exclam", "number",
    "modal", "phr", "aux", "article", "ordinal", "abbr", ...STUPENI,
  ]);
  const karta = new Map<string, string>();
  for (const m of seno.matchAll(/\b(a1|a2|b1|b2|c1|c2)\b/g)) {
    const tokeny = (seno.slice(Math.max(0, m.index! - 60), m.index!).match(/[a-z][a-z']*\d?/g) ?? [])
      .map((w) => w.replace(/\d+$/, ""));
    while (tokeny.length && CHASTI.has(tokeny[tokeny.length - 1])) tokeny.pop();
    const slovo = tokeny[tokeny.length - 1];
    if (!slovo || slovo.length < 2) continue;
    const bylo = karta.get(slovo);
    if (!bylo || STUPENI.indexOf(m[1]) < STUPENI.indexOf(bylo)) karta.set(slovo, m[1]);
  }
  return karta;
}

// --- Словник A2 Key: перечень требований экзамена ---------------------------
// Читается построчно и только построчно: одна запись в строке, и стоит
// схлопнуть переносы — разберётся ноль слов. На этом уже обожглись в kontrol.
function a2key(): Set<string> {
  const syroy = trebuetsya(join(KESH, "cambridge-vocab-a2-key.txt"), "npm run kontrol -- english-elementary");
  const naydeno = new Set<string>();
  for (const syraya of syroy.split("\n")) {
    const stroka = syraya.replace(/[‘’ʼ]/g, "'").trim().toLowerCase();
    const m = stroka.match(
      /^([a-z][a-z' -]*?) \((n|v|adj|adv|prep|pron|det|conj|exclam|modal|number|abbr)\b/
    );
    if (m) naydeno.add(m[1].trim());
  }
  return naydeno;
}

// --- Произношение ----------------------------------------------------------
function proiznoshenie(): Map<string, string> {
  const put = join("materials", "ipa-en-uk.txt");
  const karta = new Map<string, string>();
  if (!existsSync(put)) return karta;
  for (const stroka of readFileSync(put, "utf8").split("\n")) {
    const [slovo, zapis] = stroka.split("\t");
    if (!slovo || !zapis) continue;
    const klyuch = slovo.trim().toLowerCase();
    if (!karta.has(klyuch)) karta.set(klyuch, zapis.trim().split(",")[0].trim());
  }
  return karta;
}

// --- Что курс уже даёт карточкой -------------------------------------------
function vzyato(): Map<string, string> {
  const karta = new Map<string, string>();
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const les of mod.lessons) {
        for (const b of les.blocks as Block[]) {
          if ((b as any).kind !== "vocab") continue;
          for (const item of (b as any).items ?? []) {
            const slovo = String(item.term).toLowerCase().trim();
            if (!karta.has(slovo)) karta.set(slovo, `${course.slug} → ${mod.slug}`);
          }
        }
      }
    }
  }
  return karta;
}

// ---------------------------------------------------------------------------

const dovody = process.argv.slice(2);
const ox = oxford();
const a2 = a2key();
const ipa = proiznoshenie();
const dano = vzyato();

const zapasIndex = dovody.indexOf("--zapas");
if (zapasIndex >= 0) {
  const skolko = Number(dovody[zapasIndex + 1]) || 40;
  // Запас ступени: слово требует экзамен A2, а прошлая ступень его не давала и
  // Oxford не помечает первой ступенью. Уже взятые курсом не показываем.
  const zapas = [...a2]
    .filter((w) => !w.includes(" ") && ox.get(w) !== "a1" && !dano.has(w))
    .sort();
  console.log(`Запас ступени A2: ${zapas.length} слов, ещё не взятых курсом. Первые ${skolko}:\n`);
  for (const w of zapas.slice(0, skolko)) {
    const zapis = ipa.get(w);
    console.log(`  ${w.padEnd(16)} ${(ox.get(w) ?? "нет в Oxford").padEnd(12)} ${zapis ?? ""}`);
  }
  process.exit(0);
}

if (!dovody.length) {
  console.error("Укажи слова: npm run slovo -- airport library terrible");
  console.error("Или посмотри запас ступени: npm run slovo -- --zapas 40");
  process.exit(1);
}

for (const syroe of dovody) {
  const slovo = syroe.toLowerCase().trim();
  const stupen = ox.get(slovo);
  const vSlovnike = a2.has(slovo);
  const gde = dano.get(slovo);

  // Новым для ступени считаем по тому же правилу, что и kontrol: помета выше
  // первой ступени либо слова нет в Oxford, но его требует экзамен.
  const novoe = stupen ? STUPENI.indexOf(stupen) >= 1 : vSlovnike;

  console.log(`\n${slovo}`);
  console.log(`  Oxford 3000:   ${stupen ? stupen.toUpperCase() : "не нашлось (это не значит, что его там нет)"}`);
  console.log(`  словник A2 Key: ${vSlovnike ? "да" : "нет"}`);
  console.log(`  ipa-en-uk:     ${ipa.get(slovo) ?? "нет записи — спорное слово решает владелец"}`);
  console.log(`  для ступени:   ${novoe ? "НОВОЕ" : "с прошлой ступени"}`);
  if (gde) console.log(`  уже дано:      ${gde}`);
}
