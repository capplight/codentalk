import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit, resetRateLimits } from "./rate-limit.ts";

beforeEach(() => resetRateLimits());

const OPTS = { limit: 3, windowSeconds: 60 };
const T0 = 1_000_000;

test("в пределах разрешённого пропускает", () => {
  for (let i = 0; i < 3; i += 1) {
    assert.equal(checkRateLimit("a", OPTS, T0).allowed, true, `попытка ${i + 1}`);
  }
});

test("сверх предела не пропускает и говорит, сколько ждать", () => {
  for (let i = 0; i < 3; i += 1) checkRateLimit("a", OPTS, T0);
  const result = checkRateLimit("a", OPTS, T0);
  assert.equal(result.allowed, false);
  assert.equal(result.retryAfterSeconds, 60);
});

test("разные обращающиеся считаются отдельно", () => {
  for (let i = 0; i < 3; i += 1) checkRateLimit("a", OPTS, T0);
  assert.equal(checkRateLimit("b", OPTS, T0).allowed, true);
});

test("после окончания окна счёт начинается заново", () => {
  for (let i = 0; i < 3; i += 1) checkRateLimit("a", OPTS, T0);
  assert.equal(checkRateLimit("a", OPTS, T0 + 59_000).allowed, false, "окно ещё идёт");
  assert.equal(checkRateLimit("a", OPTS, T0 + 61_000).allowed, true, "окно кончилось");
});

test("остаток уменьшается на каждой попытке", () => {
  assert.equal(checkRateLimit("a", OPTS, T0).remaining, 2);
  assert.equal(checkRateLimit("a", OPTS, T0).remaining, 1);
  assert.equal(checkRateLimit("a", OPTS, T0).remaining, 0);
});
