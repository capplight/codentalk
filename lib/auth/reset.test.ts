import { strict as assert } from "node:assert";
import { test } from "node:test";
import {
  kodGoden,
  otpechatkiSovpadayut,
  otpechatokKoda,
  sozdatKod,
  ZHIZN_KODA_MINUT,
} from "./reset.ts";

test("два кода подряд не совпадают", () => {
  const a = sozdatKod();
  const b = sozdatKod();
  assert.notEqual(a.kod, b.kod);
  assert.notEqual(a.otpechatok, b.otpechatok);
});

test("в базу ложится отпечаток, а не сам код", () => {
  const { kod, otpechatok } = sozdatKod();
  assert.notEqual(kod, otpechatok);
  // По отпечатку код восстановить нельзя, а проверить — можно.
  assert.equal(otpechatokKoda(kod), otpechatok);
});

test("срок годности — час от создания", () => {
  const seychas = new Date("2026-08-16T10:00:00Z");
  const { godenDo } = sozdatKod(seychas);
  assert.equal(godenDo.getTime() - seychas.getTime(), ZHIZN_KODA_MINUT * 60_000);
});

test("свежий неиспользованный код годен", () => {
  const seychas = new Date("2026-08-16T10:00:00Z");
  const zapis = { expiresAt: new Date("2026-08-16T10:30:00Z"), usedAt: null };
  assert.equal(kodGoden(zapis, seychas), true);
});

test("просроченный код негоден", () => {
  const seychas = new Date("2026-08-16T11:30:00Z");
  const zapis = { expiresAt: new Date("2026-08-16T10:30:00Z"), usedAt: null };
  assert.equal(kodGoden(zapis, seychas), false);
});

test("код срабатывает один раз", () => {
  const seychas = new Date("2026-08-16T10:00:00Z");
  const zapis = {
    expiresAt: new Date("2026-08-16T10:30:00Z"),
    usedAt: new Date("2026-08-16T10:05:00Z"),
  };
  assert.equal(kodGoden(zapis, seychas), false);
});

test("сравнение отпечатков не падает на разной длине", () => {
  assert.equal(otpechatkiSovpadayut("abc", "abcd"), false);
  assert.equal(otpechatkiSovpadayut("abc", "abc"), true);
});
