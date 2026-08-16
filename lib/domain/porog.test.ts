import { test } from "node:test";
import assert from "node:assert/strict";
import { nuzhnoVerno } from "./porog.ts";

test("порог 80% при десяти вопросах — восемь верных", () => {
  assert.equal(nuzhnoVerno(80, 10), 8);
});

test("округление вверх, а не вниз", () => {
  // 75% от десяти — семь с половиной. Половину вопроса ответить нельзя,
  // и в спорном случае считаем в пользу строгости.
  assert.equal(nuzhnoVerno(75, 10), 8);
  assert.equal(nuzhnoVerno(80, 30), 24);
  assert.equal(nuzhnoVerno(75, 30), 23);
});

test("порог не может требовать больше, чем есть вопросов", () => {
  assert.equal(nuzhnoVerno(100, 5), 5);
  assert.equal(nuzhnoVerno(120, 5), 5);
});

test("работа без вопросов не ломает счёт", () => {
  assert.equal(nuzhnoVerno(80, 0), 0);
});
