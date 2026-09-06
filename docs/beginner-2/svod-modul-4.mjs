// Свод замысла модуля 4, собранный РАЗБОРОМ документа, а не глазами.
// Читает plan-modul-4-uroki-2-9.md и plan-modul-4-urok-1.md, берёт таблицы
// заданий и таблицу банка вопросов, считает виды, строй и долю «произвести
// ответ» по мерке кода (lib/content/types.ts:570).
import { readFileSync } from "node:fs";

const PRODUCTIVE = ["gap", "short", "order", "code", "essay", "speak"];
const KINDS = ["choice", "gap", "short", "order", "match", "hottext", "setka", "speak", "essay", "code"];

const vid = (cell) => {
  const found = [...cell.matchAll(/`([a-z]+)`/g)].map((m) => m[1]).filter((k) => KINDS.includes(k));
  return found[0] ?? null;
};

const stroki = (text) =>
  text.split("\n").map((s) => s.trim()).filter((s) => s.startsWith("|"));

const yacheyki = (row) => row.split("|").slice(1, -1).map((c) => c.trim());

// --- уроки ---
const uroki = new Map();
const dobav = (n, kind) => {
  if (!uroki.has(n)) uroki.set(n, []);
  uroki.get(n).push(kind);
};

// урок 1 — из своего файла
const u1 = readFileSync(new URL("plan-modul-4-urok-1.md", import.meta.url), "utf8");
for (const row of stroki(u1)) {
  const c = yacheyki(row);
  if (c.length >= 4 && /^\| T\d/.test(row)) {
    const k = vid(c[3]);
    if (k) dobav(1, k);
  }
}

// уроки 2–9 — из разбираемого файла
const doc = readFileSync(new URL("plan-modul-4-uroki-2-9.md", import.meta.url), "utf8");
let tek = null;
for (const line of doc.split("\n")) {
  const zag = line.match(/^## (\d+)\. Урок (\d+)/);
  if (zag) tek = Number(zag[2]);
  if (/^## 1[0-9]\./.test(line)) tek = null;
  if (tek && line.trim().startsWith("|")) {
    const c = yacheyki(line.trim());
    if (c.length >= 4 && /^[A-Z]\d$/.test(c[0])) {
      const k = vid(c[2]);
      if (k) dobav(tek, k);
    }
  }
}

// --- банк работы ---
const bank = [];
let vBanke = false;
for (const line of doc.split("\n")) {
  if (/^## 12\./.test(line)) vBanke = true;
  else if (/^## 1[3-9]\./.test(line)) vBanke = false;
  if (vBanke && line.trim().startsWith("|")) {
    const c = yacheyki(line.trim());
    if (c.length >= 5 && /^\d+$/.test(c[0])) {
      const k = vid(c[2]);
      if (k) bank.push({ n: Number(c[0]), kind: k, itog: c[3].trim() });
    }
  }
}

console.log("СТРОЙ И ДОЛЯ «ПРОИЗВЕСТИ ОТВЕТ» ПО УРОКАМ\n");
const stroy = new Map();
for (const n of [...uroki.keys()].sort((a, b) => a - b)) {
  const v = uroki.get(n);
  const p = v.filter((k) => PRODUCTIVE.includes(k)).length;
  const podpis = v.join(" · ");
  console.log(`урок ${n}: ${podpis}  → произвести ${p}/${v.length}${p * 2 > v.length ? "" : "  ← НЕ БОЛЬШЕ ПОЛОВИНЫ"}`);
  stroy.set(n, podpis);
}

console.log("\nВИД × УРОК");
const vse = KINDS.filter((k) => [...uroki.values()].some((v) => v.includes(k)));
console.log("вид".padEnd(9) + [...uroki.keys()].sort((a, b) => a - b).map((n) => String(n)).join(" "));
for (const k of vse) {
  const s = [...uroki.keys()].sort((a, b) => a - b).map((n) => (uroki.get(n).includes(k) ? "+" : "—")).join(" ");
  console.log(k.padEnd(9) + s);
}
for (const k of vse) {
  const gde = [...uroki.keys()].filter((n) => uroki.get(n).includes(k));
  if (gde.length === 1) console.log(`  ${k} стоит один раз на весь модуль — урок ${gde[0]}`);
}

console.log("\nПАРЫ УРОКОВ: СОВПАДЕНИЕ СТРОЯ ПО МЕСТАМ");
const nums = [...uroki.keys()].sort((a, b) => a - b);
const pary = [];
for (let i = 0; i < nums.length; i++)
  for (let j = i + 1; j < nums.length; j++) {
    const a = uroki.get(nums[i]), b = uroki.get(nums[j]);
    const dl = Math.min(a.length, b.length);
    let sovp = 0;
    for (let m = 0; m < dl; m++) if (a[m] === b[m]) sovp++;
    pary.push({ a: nums[i], b: nums[j], sovp, iz: Math.max(a.length, b.length) });
  }
pary.sort((x, y) => y.sovp / y.iz - x.sovp / x.iz);
for (const p of pary.slice(0, 5))
  console.log(`  уроки ${p.a} и ${p.b}: ${p.sovp} мест из ${p.iz}${p.sovp >= 4 ? "  ← смотреть" : ""}`);

console.log("\nБАНК РАБОТЫ");
const prod = bank.filter((q) => PRODUCTIVE.includes(q.kind)).length;
console.log(`  вопросов ${bank.length}, произвести ответ ${prod}/${bank.length}${prod * 2 > bank.length ? "" : "  ← НЕ БОЛЬШЕ ПОЛОВИНЫ"}`);
const poVidam = {};
for (const q of bank) poVidam[q.kind] = (poVidam[q.kind] ?? 0) + 1;
console.log("  по видам: " + Object.entries(poVidam).map(([k, v]) => `${k} ${v}`).join(", "));
const itogi = new Set(bank.map((q) => q.itog));
const net = nums.filter((n) => !itogi.has(String(n)));
console.log(`  итогов покрыто ${itogi.size} из ${nums.length}` + (net.length ? `  ← БЕЗ ВОПРОСА: ${net.join(", ")}` : ""));
if (bank.some((q) => q.kind === "setka")) console.log("  ← В БАНКЕ СЕТКА: запрещено типом");
