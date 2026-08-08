import { test } from "node:test";
import assert from "node:assert/strict";
import {
  checkAnswerBalance,
  normalizeAnswer,
  scoreAttempt,
  selectQuestions,
  shuffle,
  shuffleOptions,
  type Question,
} from "./testing.ts";

function q(id: string, topic: string, answer: string, options?: string[]): Question {
  return { id, topic, kind: "choice", answer, options: options ?? [answer, "нет", "не то"] };
}

/* --- перемешивание --- */

test("перемешивание с одним зерном даёт один и тот же порядок", () => {
  const items = ["a", "b", "c", "d", "e"];
  assert.deepEqual(shuffle(items, "x"), shuffle(items, "x"), "иначе вопросы менялись бы при обновлении страницы");
});

test("разные зёрна дают разный порядок", () => {
  const items = ["a", "b", "c", "d", "e", "f", "g", "h"];
  assert.notDeepEqual(shuffle(items, "one"), shuffle(items, "two"));
});

test("перемешивание не теряет и не добавляет элементы", () => {
  const items = ["a", "b", "c", "d", "e"];
  assert.deepEqual([...shuffle(items, "z")].sort(), [...items].sort());
});

/* --- выборка вопросов --- */

test("если банк меньше запрошенного, берём всё", () => {
  const pool = [q("1", "времена", "was"), q("2", "артикли", "a")];
  assert.equal(selectQuestions(pool, 10, "s").length, 2);
});

test("выборка берёт вопросы из разных тем, а не десять по одной", () => {
  const pool = [
    ...Array.from({ length: 10 }, (_, i) => q(`t${i}`, "времена", "was")),
    ...Array.from({ length: 10 }, (_, i) => q(`a${i}`, "артикли", "a")),
    ...Array.from({ length: 10 }, (_, i) => q(`p${i}`, "предлоги", "in")),
  ];
  const picked = selectQuestions(pool, 6, "seed");
  const topics = new Set(picked.map((x) => x.topic));
  assert.equal(picked.length, 6);
  assert.equal(topics.size, 3, "должны быть представлены все три темы");
});

test("повторная выборка с другим зерном даёт другой набор", () => {
  const pool = Array.from({ length: 30 }, (_, i) => q(`q${i}`, `тема${i % 5}`, "ответ"));
  const first = selectQuestions(pool, 10, "attempt-1").map((x) => x.id);
  const second = selectQuestions(pool, 10, "attempt-2").map((x) => x.id);
  assert.notDeepEqual(first, second, "вторая попытка должна давать другие вопросы");
});

/* --- проверка ответов --- */

test("лишние пробелы, регистр и точка в конце не отнимают балл", () => {
  assert.equal(normalizeAnswer("  Went. "), "went");
  assert.equal(normalizeAnswer("I  have   done"), "i have done");
});

test("подсчёт балла и порога", () => {
  const questions = [q("1", "т", "a"), q("2", "т", "b"), q("3", "т", "c"), q("4", "т", "d")];
  const r = scoreAttempt(questions, { "1": "a", "2": "b", "3": "c", "4": "нет" }, 70);
  assert.equal(r.correctCount, 3);
  assert.equal(r.score, 75);
  assert.equal(r.passed, true);
});

test("ниже порога — не сдано", () => {
  const questions = [q("1", "т", "a"), q("2", "т", "b")];
  const r = scoreAttempt(questions, { "1": "a", "2": "мимо" }, 70);
  assert.equal(r.score, 50);
  assert.equal(r.passed, false);
});

test("неотвеченный вопрос считается ошибкой, а не пропускается", () => {
  const questions = [q("1", "т", "a"), q("2", "т", "b")];
  const r = scoreAttempt(questions, { "1": "a" });
  assert.equal(r.total, 2);
  assert.equal(r.score, 50);
});

test("слабые темы называются, а не только общий балл", () => {
  const questions = [
    q("1", "прошедшее время", "was"),
    q("2", "прошедшее время", "went"),
    q("3", "артикли", "a"),
    q("4", "артикли", "an"),
  ];
  const r = scoreAttempt(questions, { "1": "мимо", "2": "мимо", "3": "a", "4": "an" });
  assert.deepEqual(r.weakTopics, ["прошедшее время"]);
});

test("вопросы с последовательностью ответов сравниваются по порядку", () => {
  const question: Question = {
    id: "1",
    kind: "order",
    topic: "порядок слов",
    answer: ["I", "am", "here"],
  };
  assert.equal(scoreAttempt([question], { "1": ["I", "am", "here"] }).correctCount, 1);
  assert.equal(scoreAttempt([question], { "1": ["am", "I", "here"] }).correctCount, 0);
  assert.equal(scoreAttempt([question], { "1": ["I", "am"] }).correctCount, 0);
});

test("пустая работа не делит на ноль", () => {
  const r = scoreAttempt([], {});
  assert.equal(r.score, 0);
  assert.equal(r.passed, false);
});

/* --- качество банка вопросов --- */

test("банк, где верный ответ всегда первый, признаётся негодным", () => {
  // Ровно тот случай, что был в первой версии
  const pool = Array.from({ length: 20 }, (_, i) =>
    q(`q${i}`, "тема", "верно", ["верно", "мимо", "тоже мимо"])
  );
  const report = checkAnswerBalance(pool);
  assert.equal(report.balanced, false);
  assert.ok(
    report.problems.some((p) => p.includes("одну и ту же кнопку")),
    "проверка должна прямо называть суть беды"
  );
});

test("равномерный банк проходит проверку", () => {
  const pool = [
    q("1", "т", "a", ["a", "b", "c"]),
    q("2", "т", "b", ["a", "b", "c"]),
    q("3", "т", "c", ["a", "b", "c"]),
    q("4", "т", "b", ["a", "b", "c"]),
    q("5", "т", "a", ["a", "b", "c"]),
    q("6", "т", "c", ["a", "b", "c"]),
  ];
  assert.equal(checkAnswerBalance(pool).balanced, true);
});

test("вопрос, где верного ответа нет среди вариантов, вылавливается", () => {
  const bad: Question = {
    id: "bad",
    kind: "choice",
    topic: "т",
    answer: "правильный",
    options: ["первый", "второй"],
  };
  const report = checkAnswerBalance([bad]);
  assert.equal(report.balanced, false);
  assert.ok(report.problems[0].includes("нет среди вариантов"));
});

test("перемешивание вариантов сохраняет их состав", () => {
  const question = q("1", "т", "b", ["a", "b", "c", "d"]);
  const mixed = shuffleOptions(question, "seed");
  assert.deepEqual([...mixed.options!].sort(), ["a", "b", "c", "d"]);
  assert.equal(mixed.answer, "b", "правильный ответ не должен подменяться");
});
