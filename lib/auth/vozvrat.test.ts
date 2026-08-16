import { strict as assert } from "node:assert";
import { test } from "node:test";
import { kudaVernutsya, PO_UMOLCHANIYU } from "./vozvrat.ts";

test("свой путь принимается как есть", () => {
  assert.equal(kudaVernutsya("/learn/english-starter/pervye-slova"), "/learn/english-starter/pervye-slova");
});

test("пустое значение ведёт на главную", () => {
  assert.equal(kudaVernutsya(undefined), PO_UMOLCHANIYU);
  assert.equal(kudaVernutsya(""), PO_UMOLCHANIYU);
});

test("чужой сайт не принимается ни в одном написании", () => {
  // Каждая строка — настоящий приём увода со страницы входа.
  assert.equal(kudaVernutsya("https://chuzhoy-sayt.kz"), PO_UMOLCHANIYU);
  assert.equal(kudaVernutsya("//chuzhoy-sayt.kz"), PO_UMOLCHANIYU);
  assert.equal(kudaVernutsya("/\\chuzhoy-sayt.kz"), PO_UMOLCHANIYU);
  assert.equal(kudaVernutsya("javascript:alert(1)"), PO_UMOLCHANIYU);
});
