import { test } from "node:test";
import assert from "node:assert/strict";
import {
  bedySetki,
  bukvyYacheek,
  mestaSlova,
  mozhnoDobavit,
  OBRAZEC_SETKI,
  yacheykiSlova,
} from "./setka.ts";
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

/*
 * ОТМЕЧАЮТСЯ ВСЕ БУКВЫ — решение владельца от 6 сентября 2026. Прежняя пара
 * испытаний проверяла `vydelenie()`: ученик нажимал первую ячейку и последнюю.
 * Функция снята вместе со способом, и испытания её ушли за ней — мёртвый
 * экспорт с живым тестом выглядит работающим устройством.
 */

test("буква добавляется только вправо или вниз и только вплотную", () => {
  // Пусто — годится любая ячейка: это начало слова.
  assert.equal(mozhnoDobavit(POLE, [], 0), true);
  assert.equal(mozhnoDobavit(POLE, [0], 1), true); // вправо
  assert.equal(mozhnoDobavit(POLE, [0], 5), true); // вниз
  assert.equal(mozhnoDobavit(POLE, [1], 0), false); // назад
  assert.equal(mozhnoDobavit(POLE, [0], 6), false); // наискось
  assert.equal(mozhnoDobavit(POLE, [0], 2), false); // через клетку
  assert.equal(mozhnoDobavit(POLE, [0], 0), false); // та же ячейка дважды
});

test("направление задают две первые буквы, и дальше оно держится", () => {
  // Пошли вправо — вниз свернуть уже нельзя.
  assert.equal(mozhnoDobavit(POLE, [0, 1], 2), true);
  assert.equal(mozhnoDobavit(POLE, [0, 1], 6), false);
  // Пошли вниз — вправо нельзя.
  assert.equal(mozhnoDobavit(POLE, [0, 5], 10), true);
  assert.equal(mozhnoDobavit(POLE, [0, 5], 6), false);
});

test("буквы отмеченных ячеек читаются в порядке нажатий", () => {
  assert.equal(bukvyYacheek(POLE, [0, 1, 2]), "CAT");
  assert.equal(bukvyYacheek(POLE, [0, 5, 10]), "COW");
  assert.equal(bukvyYacheek(POLE, []), "");
});

test("образец над полем и правда показывает два слова", () => {
  // Испытание не украшение: образец нарисован от руки, и ошибка в номерах
  // ячеек дала бы ученику картинку, где отмечено не слово.
  assert.equal(bukvyYacheek(OBRAZEC_SETKI.stroki, OBRAZEC_SETKI.poStroke), "CAT");
  assert.equal(bukvyYacheek(OBRAZEC_SETKI.stroki, OBRAZEC_SETKI.poStolbcu), "CUP");
  assert.deepEqual(bedySetki(OBRAZEC_SETKI.stroki, ["CAT", "CUP"]), []);
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
