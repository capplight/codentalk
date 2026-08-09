import { test } from "node:test";
import assert from "node:assert/strict";
import { forBrowser, gradeQuiz } from "./quiz.ts";
import type { QuizQuestion } from "./types.ts";

const OUTCOME = "умеет размечать заголовки";

/** По одному вопросу каждого вида — чтобы проверка не забыла ни один. */
const questions: QuizQuestion[] = [
  {
    id: "q-choice",
    kind: "choice",
    outcome: OUTCOME,
    prompt: "Какой тег?",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    hint: "ПОДСКАЗКА",
    options: [{ text: "p" }, { text: "h1", correct: true }],
  },
  {
    id: "q-gap",
    kind: "gap",
    outcome: OUTCOME,
    prompt: "Допишите",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    before: "<",
    after: ">",
    answer: "СЕКРЕТНЫЙОТВЕТ",
    accept: ["ДРУГОЕПРИНИМАЕМОЕ"],
  },
  {
    id: "q-short",
    kind: "short",
    outcome: OUTCOME,
    prompt: "Сколько?",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    answer: "СЕКРЕТНЫЙОТВЕТ",
  },
  {
    id: "q-hottext",
    kind: "hottext",
    outcome: OUTCOME,
    prompt: "Отметьте",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    parts: [
      { text: "раз", selectable: true, correct: true },
      { text: " и " },
      { text: "два", selectable: true },
    ],
  },
  {
    id: "q-order",
    kind: "order",
    outcome: OUTCOME,
    prompt: "Расставьте",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    items: ["a", "b"],
    answer: [1, 0],
  },
  {
    id: "q-match",
    kind: "match",
    outcome: OUTCOME,
    prompt: "Сопоставьте",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    left: ["a"],
    right: ["b"],
    answer: [0],
  },
  {
    id: "q-code",
    kind: "code",
    outcome: OUTCOME,
    prompt: "Напишите",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    starter: "",
    check: { mustContain: ["СЕКРЕТНОЕУСЛОВИЕ"] },
  },
  {
    id: "q-speak",
    kind: "speak",
    outcome: OUTCOME,
    prompt: "Произнесите",
    why: "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    phrase: "Hello",
  },
];

test("в браузер не уходит ничего, по чему узнаётся ответ", () => {
  const sent = JSON.stringify(questions.map(forBrowser));

  for (const forbidden of [
    "СЕКРЕТНЫЙОТВЕТ",
    "ДРУГОЕПРИНИМАЕМОЕ",
    "СЕКРЕТНОЕУСЛОВИЕ",
    "РАЗБОР-ВЫДАЁТ-ОТВЕТ",
    "ПОДСКАЗКА",
    "correct",
    "answer",
    "accept",
    "check",
  ]) {
    assert.ok(
      !sent.includes(forbidden),
      `в браузер утекло «${forbidden}» — ответ можно посмотреть в исходном коде страницы`
    );
  }
});

test("вопрос при этом остаётся показываемым", () => {
  const choice = forBrowser(questions[0]);
  assert.deepEqual(choice.options, ["p", "h1"]);
  assert.equal(choice.prompt, "Какой тег?");

  const hottext = forBrowser(questions[3]);
  assert.deepEqual(
    hottext.parts?.map((p) => p.selectable),
    [true, false, true],
    "какие части нажимаемы — видно, какие верны — нет"
  );
});

test("балл считается по сданным ответам, порог соблюдается", () => {
  const answers = {
    "q-choice": [1],
    "q-gap": "секретныйответ",
    "q-short": "не то",
  };
  const result = gradeQuiz(questions.slice(0, 3), answers, 0.7);

  assert.equal(result.total, 3);
  assert.equal(result.correctCount, 2);
  assert.equal(result.score, 67);
  assert.equal(result.passed, false, "67 ниже порога 70");
});

test("неотвеченный вопрос считается ошибкой, а не пропускается", () => {
  const result = gradeQuiz(questions.slice(0, 3), { "q-choice": [1] }, 0.7);
  assert.equal(result.total, 3);
  assert.equal(result.correctCount, 1);
  assert.equal(result.score, 33);
});

test("слабые итоги называются по имени", () => {
  const other = "умеет оформлять списки";
  const mixed: QuizQuestion[] = [
    { ...questions[0], id: "a", outcome: other },
    { ...questions[1], id: "b", outcome: other },
  ];
  const result = gradeQuiz(mixed, { a: [0], b: "мимо" }, 0.7);
  assert.deepEqual(result.weakOutcomes, [other]);
});
