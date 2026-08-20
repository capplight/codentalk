import { test } from "node:test";
import assert from "node:assert/strict";
import { imyaVozvrata, nayti, razvernutVozvraty } from "./vozvrat.ts";
import type { Course, Lesson, Module } from "./types.ts";

/**
 * Курс из двух модулей: в первом есть задание, во втором на него ссылаются.
 * Проверки испытываются нарочно испорченной ссылкой — правило проекта: чистый
 * отчёт сам по себе не доказывает ничего.
 */
function urok(slug: string, blocks: Lesson["blocks"], vozvrat?: Lesson["vozvrat"]): Lesson {
  return { slug, title: slug, estimatedMinutes: 13, outcome: `итог ${slug}`, blocks, vozvrat };
}

function kurs(): Course {
  const pervyy: Module = {
    slug: "modul-odin",
    title: "Модуль один",
    outcomes: ["итог urok-odin"],
    lessons: [
      urok("urok-odin", [
        { id: "obyasnenie", kind: "explain", text: ["Материал."] },
        {
          id: "z1-dopisat",
          kind: "gap",
          prompt: "Допиши форму.",
          before: "I ",
          after: " at home.",
          answer: "was",
          why: "I was at home.",
        },
      ]),
    ],
    quiz: { ask: 1, passRatio: 0.8, questions: [] },
  };

  const vtoroy: Module = {
    slug: "modul-dva",
    title: "Модуль два",
    outcomes: ["итог urok-dva"],
    lessons: [
      urok(
        "urok-dva",
        [
          {
            id: "z1-svoyo",
            kind: "short",
            prompt: "Напиши.",
            answer: "yes",
            why: "Разбор.",
          },
        ],
        [{ iz: "modul-odin", zadanie: "z1-dopisat" }]
      ),
    ],
    quiz: { ask: 1, passRatio: 0.8, questions: [] },
  };

  return {
    slug: "kurs",
    track: "english",
    title: "Курс",
    access: "free",
    modules: [pervyy, vtoroy],
  };
}

test("ссылка находит задание в пройденном модуле", () => {
  const course = kurs();
  const naydeno = nayti(course, { iz: "modul-odin", zadanie: "z1-dopisat" });
  assert.ok(naydeno);
  assert.equal(naydeno.zadanie.kind, "gap");
  assert.equal(naydeno.module.slug, "modul-odin");
  assert.equal(naydeno.lesson.slug, "urok-odin");
});

test("ссылка на несуществующий модуль ничего не находит", () => {
  assert.equal(nayti(kurs(), { iz: "modulya-net", zadanie: "z1-dopisat" }), undefined);
});

test("ссылка на несуществующее задание ничего не находит", () => {
  assert.equal(nayti(kurs(), { iz: "modul-odin", zadanie: "zadaniya-net" }), undefined);
});

test("ссылка на блок материала заданием не считается", () => {
  assert.equal(nayti(kurs(), { iz: "modul-odin", zadanie: "obyasnenie" }), undefined);
});

test("возвращение разворачивается в конец урока, за врезкой", () => {
  const course = kurs();
  const urokDva = course.modules[1].lessons[0];
  const razvernutyy = razvernutVozvraty(course, urokDva);

  const imena = razvernutyy.blocks.map((b) => b.id);
  assert.deepEqual(imena, ["z1-svoyo", "vozvrashchenie", "vozvrat-modul-odin-z1-dopisat"]);

  // Задание приезжает целиком, а не одной формулировкой: разбор обязателен.
  const vernuvsheesya = razvernutyy.blocks.at(-1) as { kind: string; why: string };
  assert.equal(vernuvsheesya.kind, "gap");
  assert.equal(vernuvsheesya.why, "I was at home.");
});

test("имя развёрнутого блока своё: одно задание может вернуться в двух уроках", () => {
  const imya = imyaVozvrata({ iz: "modul-odin", zadanie: "z1-dopisat" });
  assert.equal(imya, "vozvrat-modul-odin-z1-dopisat");
  assert.notEqual(imya, "z1-dopisat");
});

test("исходный урок не портится: разворот отдаёт новый объект", () => {
  const course = kurs();
  const urokDva = course.modules[1].lessons[0];
  const bylo = urokDva.blocks.length;
  razvernutVozvraty(course, urokDva);
  assert.equal(urokDva.blocks.length, bylo);
});

test("сломанная ссылка не роняет урок и не оставляет пустой врезки", () => {
  const course = kurs();
  const slomannyy = urok("urok-tri", [], [{ iz: "modulya-net", zadanie: "net" }]);
  const razvernutyy = razvernutVozvraty(course, slomannyy);
  assert.deepEqual(razvernutyy.blocks, []);
});

test("урок без возвращений возвращается тем же объектом", () => {
  const course = kurs();
  const bezVozvrata = course.modules[0].lessons[0];
  assert.equal(razvernutVozvraty(course, bezVozvrata), bezVozvrata);
});
