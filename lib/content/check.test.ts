import { test } from "node:test";
import assert from "node:assert/strict";
import { checkAnswer, missingParts, normalize } from "./check.ts";
import type { TaskBlock } from "./types.ts";

test("приведённая форма: регистр, пробелы и ё не решают судьбу ответа", () => {
  assert.equal(normalize("  Ещё  ТУТ "), "еще тут");
  assert.equal(normalize("«strong»"), "strong");
});

test("выбор одного варианта", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "choice",
    prompt: "?",
    why: "разбор",
    options: [{ text: "a" }, { text: "b", correct: true }, { text: "c" }],
  };
  assert.equal(checkAnswer(task, [1]), true);
  assert.equal(checkAnswer(task, [0]), false);
  assert.equal(checkAnswer(task, []), false);
});

test("выбор нескольких: частичный ответ не засчитывается", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "choice",
    prompt: "?",
    why: "разбор",
    multiple: true,
    options: [{ text: "a", correct: true }, { text: "b" }, { text: "c", correct: true }],
  };
  assert.equal(checkAnswer(task, [0, 2]), true);
  assert.equal(checkAnswer(task, [2, 0]), true, "порядок нажатий не важен");
  assert.equal(checkAnswer(task, [0]), false);
  assert.equal(checkAnswer(task, [0, 1, 2]), false, "нажать всё — не ответ");
});

test("вставка пропущенного: принимаются оговорённые написания", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "gap",
    prompt: "?",
    why: "разбор",
    before: "<",
    after: ">",
    answer: "h1",
    accept: ["H1 "],
  };
  assert.equal(checkAnswer(task, "h1"), true);
  assert.equal(checkAnswer(task, " H1 "), true);
  assert.equal(checkAnswer(task, "h2"), false);
  assert.equal(checkAnswer(task, "   "), false, "пустой ответ не верен");
});

test("отметить в тексте: лишняя отметка портит ответ", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "hottext",
    prompt: "?",
    why: "разбор",
    parts: [
      { text: "раз", selectable: true, correct: true },
      { text: " и " },
      { text: "два", selectable: true },
    ],
  };
  assert.equal(checkAnswer(task, [0]), true);
  assert.equal(checkAnswer(task, [0, 2]), false);
  assert.equal(checkAnswer(task, []), false);
});

test("порядок: важна именно последовательность", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "order",
    prompt: "?",
    why: "разбор",
    items: ["a", "b", "c"],
    answer: [0, 2, 1],
  };
  assert.equal(checkAnswer(task, [0, 2, 1]), true);
  assert.equal(checkAnswer(task, [0, 1, 2]), false);
});

test("код: проверяются и обязательное, и запрещённое", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "code",
    prompt: "?",
    why: "разбор",
    starter: "",
    check: { mustContain: ["<ul>", "<li>"], mustNotContain: ["<ol>"] },
  };
  assert.equal(checkAnswer(task, "<ul><li>Соль</li></ul>"), true);
  assert.equal(checkAnswer(task, "<UL><LI>Соль</LI></UL>"), true, "регистр тегов не важен");
  assert.equal(checkAnswer(task, "<ol><li>Соль</li></ol>"), false);
  assert.deepEqual(missingParts(task, "<ol><li>x</li></ol>"), [
    "не хватает <ul>",
    "лишнее <ol>",
  ]);
});

test("развёрнутый ответ и произнесение машина не оценивает", () => {
  const essay: TaskBlock = {
    id: "t",
    kind: "essay",
    prompt: "?",
    why: "разбор",
    sample: "образец",
    checklist: ["пункт"],
  };
  assert.equal(checkAnswer(essay, "что угодно"), null);
});

test("апостроф различает слова: im и I'm — не одно и то же", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "short",
    prompt: "?",
    why: "разбор",
    answer: "I'm Alim",
  };
  assert.equal(checkAnswer(task, "I'm Alim"), true);
  assert.equal(checkAnswer(task, "im alim"), false, "задание про апостроф обязано видеть апостроф");
  assert.equal(checkAnswer(task, "I’m Alim"), true, "кривой апостроф из телефона принимается");
});

test("знак в конце не решает судьбу ответа", () => {
  const task: TaskBlock = { id: "t", kind: "short", prompt: "?", why: "р", answer: "hello" };
  assert.equal(checkAnswer(task, "Hello!"), true);
  assert.equal(checkAnswer(task, "hello."), true);
});

test("признак exact ловит ошибку в заглавной букве", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "short",
    prompt: "Исправьте: «i am alim»",
    why: "разбор",
    answer: "I am Alim",
    exact: true,
  };
  assert.equal(checkAnswer(task, "I am Alim"), true);
  assert.equal(
    checkAnswer(task, "i am alim"),
    false,
    "дословно переписанная из условия ошибка не должна засчитываться"
  );
  assert.equal(checkAnswer(task, "I am alim"), false, "имя тоже с заглавной");
});

test("без exact регистр по-прежнему не важен", () => {
  const task: TaskBlock = { id: "t", kind: "gap", prompt: "?", why: "р", before: "", after: "", answer: "morning" };
  assert.equal(checkAnswer(task, "MORNING"), true);
});
