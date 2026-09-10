import { test } from "node:test";
import assert from "node:assert/strict";
import {
  modulOtkryt,
  modulSeychas,
  sostoyanieModuley,
  urokOtkryt,
  type ModulDlyaDostupa,
} from "./dostup-moduley.ts";

/** Три модуля по два урока — этого хватает на все случаи замка. */
const KURS: ModulDlyaDostupa[] = [
  { slug: "m1", uroki: ["u1", "u2"] },
  { slug: "m2", uroki: ["u3", "u4"] },
  { slug: "m3", uroki: ["u5", "u6"] },
];

const otkryty = (proydennye: string[]): string[] =>
  sostoyanieModuley(KURS, new Set(proydennye))
    .filter((m) => m.otkryt)
    .map((m) => m.slug);

test("гостю открыт первый модуль и только он", () => {
  assert.deepEqual(otkryty([]), ["m1"]);
});

test("половина первого модуля второго не открывает", () => {
  assert.deepEqual(otkryty(["u1"]), ["m1"]);
});

test("все уроки первого модуля открывают второй, работа не требуется", () => {
  // Это и есть выбранная владельцем степень замка: держат уроки, а не работа.
  assert.deepEqual(otkryty(["u1", "u2"]), ["m1", "m2"]);
});

test("пройденное открыто навсегда — замок ведёт вперёд, а не запирает позади", () => {
  const sost = sostoyanieModuley(KURS, new Set(["u1", "u2", "u3", "u4"]));
  assert.deepEqual(
    sost.map((m) => m.otkryt),
    [true, true, true]
  );
  assert.equal(sost[0].zakonchen, true);
});

test("НИКОГО НЕ ОТБРАСЫВАЕМ НАЗАД: урок, пройденный до замка, держит модуль открытым", () => {
  // Замка не было полтора месяца, и люди ходили вразнобой. Человек прошёл один
  // урок третьего модуля и ни одного первого — третий обязан остаться открытым,
  // и второй вместе с ним.
  assert.deepEqual(otkryty(["u5"]), ["m1", "m2", "m3"]);
});

test("дыра посередине счёт не обрывает", () => {
  // Пройден первый модуль целиком и один урок третьего, второй не тронут.
  assert.deepEqual(otkryty(["u1", "u2", "u6"]), ["m1", "m2", "m3"]);
});

test("модуль без уроков ступень не запирает", () => {
  // Недописанный модуль — это дыра в содержании, а не непроходимая стена.
  const kurs: ModulDlyaDostupa[] = [
    { slug: "m1", uroki: [] },
    { slug: "m2", uroki: ["u1"] },
  ];
  const sost = sostoyanieModuley(kurs, new Set());
  assert.deepEqual(
    sost.map((m) => m.otkryt),
    [true, true]
  );
});

test("закрытый модуль называет причину, открытый молчит", () => {
  const sost = sostoyanieModuley(KURS, new Set());
  assert.equal(sost[0].zhdyot, undefined);
  assert.equal(sost[1].zhdyot, "предыдущий модуль не пройден");
});

test("счёт уроков считается по каждому модулю отдельно", () => {
  const sost = sostoyanieModuley(KURS, new Set(["u1", "u3", "u4"]));
  assert.deepEqual(
    sost.map((m) => `${m.urokovProydeno} из ${m.urokovVsego}`),
    ["1 из 2", "2 из 2", "0 из 2"]
  );
});

test("урок открыт ровно тогда, когда открыт его модуль", () => {
  const proydennye = new Set(["u1", "u2"]);
  assert.equal(urokOtkryt(KURS, proydennye, "u3"), true);
  assert.equal(urokOtkryt(KURS, proydennye, "u5"), false);
});

test("внутри открытого модуля порядка нет: последний урок доступен сразу", () => {
  // «Свой темп» остаётся в силе там, где он ничего не ломает.
  assert.equal(urokOtkryt(KURS, new Set(), "u2"), true);
});

test("урок вне модулей замком не трогается", () => {
  assert.equal(urokOtkryt(KURS, new Set(), "biblioteka-tekstov"), true);
});

test("на экране — первый открытый незаконченный модуль", () => {
  assert.equal(modulSeychas(KURS, new Set()), "m1");
  assert.equal(modulSeychas(KURS, new Set(["u1", "u2"])), "m2");
  assert.equal(modulSeychas(KURS, new Set(["u1", "u2", "u3"])), "m2");
});

test("всё пройдено — показываем последний модуль, а не пустоту", () => {
  assert.equal(modulSeychas(KURS, new Set(["u1", "u2", "u3", "u4", "u5", "u6"])), "m3");
});

test("курс без модулей ничего не показывает и не падает", () => {
  assert.equal(modulSeychas([], new Set()), null);
  assert.deepEqual(sostoyanieModuley([], new Set()), []);
  assert.equal(modulOtkryt([], new Set(), "m1"), false);
});

test("модуль, которого нет в базе, ступень не запирает", () => {
  // Уроки живут в файлах, отметки — в базе. Урок, не доехавший до базы, пройти
  // нельзя: отметке негде лечь. С замком такой модуль запер бы ступень
  // навсегда и молча — человек делает всё, что может, и упирается в стену.
  const znaetBaza = new Set(["u1", "u2", "u5", "u6"]); // второго модуля в базе нет
  const sost = sostoyanieModuley(KURS, new Set(["u1", "u2"]), znaetBaza);
  assert.deepEqual(
    sost.map((m) => m.otkryt),
    [true, true, true]
  );
  assert.equal(sost[1].zakonchen, true);
});

test("половина модуля в базе — считается по тому, что есть", () => {
  // Дошёл до базы один урок из двух. Пройти можно только его, и он открывает
  // следующий модуль: требовать недостижимого нельзя.
  const znaetBaza = new Set(["u1", "u3", "u4"]);
  const sost = sostoyanieModuley(KURS, new Set(["u1"]), znaetBaza);
  assert.equal(sost[0].zakonchen, true);
  assert.equal(sost[1].otkryt, true);
});

test("без третьего довода всё считается по-прежнему", () => {
  // Так зовут испытания и всё, что базы не касается.
  assert.equal(sostoyanieModuley(KURS, new Set(["u1"]))[0].zakonchen, false);
});
