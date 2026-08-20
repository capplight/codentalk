/**
 * Соседи правки: что изменилось рядом, а что осталось от прежнего текста.
 *
 * ЗАЧЕМ. Самая дорогая ошибка 20 августа 2026 и, судя по разборам, самая
 * повторяемая вообще. Я дописал по строке в примеры девяти уроков — и не тронул
 * разборы под ними. Девять блоков стали говорить «три строки» там, где их пять.
 * Ни одна проверка не сказала: блоки целы, слова свои, ступень выдержана.
 * Нашли методист и редактор, каждый своим кругом, и круги эти стоили дня.
 *
 * Причина не в невнимательности, а в устройстве содержания. Урок — это граф:
 * пример и разбор под ним, карточка и её звук, слово и перечень в шапке. Правлю
 * я его как текст, по одному месту. Значит связанное место забудется всегда — не
 * иногда, а всегда, и ловить это надо машиной.
 *
 * ЧТО ДЕЛАЕТ. Смотрит `git diff`, находит блоки, которых правка коснулась, и
 * говорит, какие поля этих блоков остались нетронутыми. Не ошибка и не запрет —
 * список мест, куда посмотреть перед тем, как звать проверяющих.
 *
 * Запуск:
 *   npm run sosedi              против последнего коммита
 *   npm run sosedi -- HEAD~3    против другого коммита
 *
 * ЧЕГО НЕ ДЕЛАЕТ. Не решает, надо ли править соседа: «пример дополнен, а разбор
 * прежний» бывает и верно. Решает человек, скрипт лишь не даёт не заметить.
 */
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const protiv = process.argv[2] ?? "HEAD";

/** Поля блока, которые ходят парами: тронул одно — посмотри на второе. */
const PARY: Array<{ tronul: RegExp; posmotri: string[]; pochemu: string }> = [
  {
    tronul: /^\s*(text|zvuchat|rows|head|items):/,
    posmotri: ["explain", "caption"],
    pochemu: "разбор и подпись считают строки и называют, что в них — они устаревают первыми",
  },
  {
    tronul: /^\s*(text|rows|items):/,
    posmotri: ["zvuchat", "zvuk"],
    pochemu: "звук выводится из самой строки: правка фразы означает другую запись, а её ещё нет",
  },
  {
    tronul: /^\s*(term|translation):/,
    posmotri: ["example", "hint"],
    pochemu: "перевод и пример должны говорить одно: у season перевод сказал «время года», а пример — про сезон в школе",
  },
  {
    tronul: /^\s*(answer|choices|options):/,
    posmotri: ["hint", "why", "prompt"],
    pochemu: "подсказка и разбор остаются от прежнего ответа — так в курсе уже висели три чужих разбора",
  },
];

/** Имя блока, внутри которого лежит строка файла. */
function blokStroki(stroki: string[], nomer: number): { id: string; ot: number; do_: number } | null {
  let ot = -1;
  for (let i = nomer; i >= 0; i -= 1) {
    if (/^\s*id: "/.test(stroki[i])) { ot = i; break; }
    // Вышли за пределы блока вверх — значит строка не в блоке.
    if (/^\s{6}\},\s*$/.test(stroki[i]) && i < nomer) break;
  }
  if (ot < 0) return null;
  const id = stroki[ot].match(/id: "([^"]+)"/)?.[1] ?? "?";

  let do_ = stroki.length - 1;
  for (let i = ot + 1; i < stroki.length; i += 1) {
    if (/^\s*id: "/.test(stroki[i])) { do_ = i - 1; break; }
  }
  return { id, ot, do_ };
}

let diff: string;
try {
  diff = execSync(`git diff ${protiv} -U0 -- courses/`, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
} catch {
  console.error(`Не вышло получить git diff против ${protiv}.`);
  process.exit(1);
}

if (!diff.trim()) {
  console.log(`Против ${protiv} в courses/ ничего не менялось.`);
  process.exit(0);
}

// Собираем: файл → изменённые строки (по новому файлу).
const tronuto = new Map<string, Set<number>>();
let tekushchiy = "";
for (const stroka of diff.split("\n")) {
  const fayl = stroka.match(/^\+\+\+ b\/(.+)$/);
  if (fayl) { tekushchiy = fayl[1]; continue; }
  const kusok = stroka.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/);
  if (kusok && tekushchiy) {
    const nachalo = Number(kusok[1]);
    const skolko = kusok[2] === undefined ? 1 : Number(kusok[2]);
    if (!tronuto.has(tekushchiy)) tronuto.set(tekushchiy, new Set());
    for (let i = 0; i < skolko; i += 1) tronuto.get(tekushchiy)!.add(nachalo + i - 1);
  }
}

let vsego = 0;

for (const [fayl, nomera] of tronuto) {
  let soderzhimoe: string;
  try {
    soderzhimoe = readFileSync(fayl, "utf8");
  } catch {
    continue; // файл удалён — соседей у него нет
  }
  const stroki = soderzhimoe.split("\n");

  // Блоки, которых коснулась правка, и какие строки в них тронуты.
  const bloki = new Map<string, { ot: number; do_: number; tronutye: number[] }>();
  for (const n of nomera) {
    const b = blokStroki(stroki, n);
    if (!b) continue;
    if (!bloki.has(b.id)) bloki.set(b.id, { ot: b.ot, do_: b.do_, tronutye: [] });
    bloki.get(b.id)!.tronutye.push(n);
  }

  const skazano: string[] = [];

  for (const [id, b] of bloki) {
    const telo = stroki.slice(b.ot, b.do_ + 1);
    const tronutyeStroki = b.tronutye.map((n) => stroki[n] ?? "");

    for (const para of PARY) {
      if (!tronutyeStroki.some((s) => para.tronul.test(s))) continue;

      // Сосед есть в блоке, но правка его не коснулась.
      const zabytye = para.posmotri.filter((pole) => {
        const estVBloke = telo.some((s) => new RegExp(`^\\s*${pole}:`).test(s));
        const tronut = tronutyeStroki.some((s) => new RegExp(`^\\s*${pole}:`).test(s)) ||
          b.tronutye.some((n) => {
            // Многострочное поле: смотрим, не попала ли правка внутрь него.
            for (let i = n; i >= b.ot; i -= 1) {
              if (new RegExp(`^\\s*${pole}:`).test(stroki[i])) return true;
              if (/^\s*[a-zA-Z_]+:/.test(stroki[i]) && i !== n) return false;
            }
            return false;
          });
        return estVBloke && !tronut;
      });

      if (zabytye.length) {
        skazano.push(
          `  ${id}: тронуто ${[...new Set(tronutyeStroki.map((s) => s.trim().split(":")[0].trim()))].join(", ")}, ` +
            `а ${zabytye.join(" и ")} осталось прежним\n     ${para.pochemu}`
        );
        vsego += 1;
      }
    }
  }

  if (skazano.length) {
    console.log(`\n${fayl}`);
    for (const s of skazano) console.log(s);
  }
}

console.log(
  vsego
    ? `\nМест, где сосед остался прежним: ${vsego}.\n` +
        "Это не ошибки — это список, куда посмотреть до того, как звать проверяющих."
    : `\nПротив ${protiv}: правок, у которых сосед остался прежним, не нашлось.`
);
