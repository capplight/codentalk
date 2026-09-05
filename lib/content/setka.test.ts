import { test } from "node:test";
import assert from "node:assert/strict";
import { bedySetki, mestaSlova, vydelenie, yacheykiSlova } from "./setka.ts";
import { checkAnswer } from "./check.ts";
import type { TaskBlock } from "./types.ts";

/*
 * Сетка испытывается нарочно испорченной, а не только исправной: чистый отчёт
 * сам по себе не доказывает ничего — в этом проекте так нашлись три мёртвые
 * проверки подряд.
 */

const POLE = [
  "CATXQ",
  "OZBED",
  "WJKLM",
  "PENQR",
  "STUVW",
];

test("слово находится по строке и по столбцу", () => {
  assert.deepEqual(mestaSlova(POLE, "CAT"), [{ stroka: 0, stolbec: 0, vniz: false, dlina: 3 }]);
  assert.deepEqual(mestaSlova(POLE, "BED"), [{ stroka: 1, stolbec: 2, vniz: false, dlina: 3 }]);
  // COW идёт сверху вниз по первому столбцу.
  assert.deepEqual(mestaSlova(POLE, "cow"), [{ stroka: 0, stolbec: 0, vniz: true, dlina: 3 }]);
});

test("задом наперёд и наискось не считается", () => {
  assert.deepEqual(mestaSlova(POLE, "TAC"), []);
  assert.deepEqual(mestaSlova(POLE, "CZK"), []);
});

test("ячейки слова считаются номерами по всей сетке", () => {
  assert.deepEqual(yacheykiSlova(POLE, mestaSlova(POLE, "BED")[0]), [7, 8, 9]);
  assert.deepEqual(yacheykiSlova(POLE, mestaSlova(POLE, "COW")[0]), [0, 5, 10]);
});

test("выделение читается слева направо, с какого бы конца ни начали", () => {
  assert.equal(vydelenie(POLE, 0, 2), "CAT");
  // Ученик нажал последнюю букву первой — слово всё равно то же.
  assert.equal(vydelenie(POLE, 2, 0), "CAT");
  assert.equal(vydelenie(POLE, 10, 0), "COW");
});

test("выделение наискось не засчитывается", () => {
  assert.equal(vydelenie(POLE, 0, 6), null);
});

test("беды сетки называются, а не молчат", () => {
  assert.deepEqual(bedySetki(POLE, ["CAT", "BED", "COW"]), []);

  const bedy = bedySetki(["ABC", "DEFG"], ["DOG", "AB", "AB"]);
  assert.equal(bedy.length, 3);
  assert.ok(bedy.some((b) => b.includes("разной длины")));
  assert.ok(bedy.some((b) => b.includes("«DOG»")));
  assert.ok(bedy.some((b) => b.includes("дважды")));

  // Слово, которого в сетке нет ни по строке, ни по столбцу, — задание без
  // ответа: ученик ищет и не находит, а отчёт молчит.
  assert.ok(bedySetki(POLE, ["DOG"])[0].includes("ни по строке"));
  // Кириллица в поле: буквы В и С неотличимы от латинских на экране. Ровно то,
  // на чём споткнулся второй редактор в таблице урока 3.
  assert.ok(bedySetki(["САТ", "OZB"], ["CAT"])[0].includes("не только латинские"));
});

test("задание засчитывается, когда найдены все слова", () => {
  const task: TaskBlock = {
    id: "t",
    kind: "setka",
    prompt: "?",
    why: "разбор",
    stroki: POLE,
    slova: [{ slovo: "CAT" }, { slovo: "BED", podpis: "кровать" }],
  };
  assert.equal(checkAnswer(task, [0, 1]), true);
  assert.equal(checkAnswer(task, [1, 0]), true, "порядок нахождения не важен");
  assert.equal(checkAnswer(task, [0]), false);
  assert.equal(checkAnswer(task, []), false);
});
