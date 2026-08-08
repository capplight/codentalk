import { test } from "node:test";
import assert from "node:assert/strict";
import {
  findNextLesson,
  isCourseCompleted,
  summarizeCourse,
  summarizeModules,
  type LessonRef,
  type LessonStatus,
} from "./progress.ts";

const lessons: LessonRef[] = [
  { slug: "u1-rule", moduleSlug: "unit-1", sort: 0, kind: "quest" },
  { slug: "u1-drill", moduleSlug: "unit-1", sort: 1, kind: "practice" },
  { slug: "u2-quest", moduleSlug: "unit-2", sort: 2, kind: "quest" },
  { slug: "library-text", moduleSlug: null, sort: 3, kind: "reading" },
  { slug: "exam", moduleSlug: null, sort: 99, kind: "exam" },
];

const done = (...slugs: string[]): Record<string, LessonStatus> =>
  Object.fromEntries(slugs.map((s) => [s, "completed" as LessonStatus]));

test("продолжаем с первого непройденного, а не с последнего открытого", () => {
  const next = findNextLesson(lessons, { ...done("u1-rule"), "u2-quest": "in_progress" });
  assert.equal(next?.slug, "u1-drill", "загляд вперёд не должен сдвигать точку возврата");
});

test("экзамен не предлагается, пока не пройдены обычные уроки", () => {
  const next = findNextLesson(lessons, done("u1-rule", "u1-drill", "u2-quest"));
  assert.equal(next?.slug, "library-text");
});

test("когда всё пройдено, предлагается экзамен", () => {
  const next = findNextLesson(
    lessons,
    done("u1-rule", "u1-drill", "u2-quest", "library-text")
  );
  assert.equal(next?.slug, "exam");
});

test("после сдачи экзамена продолжать нечего", () => {
  const next = findNextLesson(
    lessons,
    done("u1-rule", "u1-drill", "u2-quest", "library-text", "exam")
  );
  assert.equal(next, null);
});

test("экзамен не входит в счёт пройденных уроков", () => {
  const s = summarizeCourse(lessons, done("u1-rule", "u1-drill"));
  assert.equal(s.lessonsTotal, 4, "четыре обычных урока, экзамен отдельно");
  assert.equal(s.lessonsCompleted, 2);
  assert.equal(s.readyForExam, false);
});

test("готовность к экзамену наступает при всех пройденных уроках", () => {
  const s = summarizeCourse(lessons, done("u1-rule", "u1-drill", "u2-quest", "library-text"));
  assert.equal(s.readyForExam, true);
  assert.equal(s.examPassed, false);
});

test("курс с экзаменом не считается пройденным без сданного экзамена", () => {
  const s = summarizeCourse(lessons, done("u1-rule", "u1-drill", "u2-quest", "library-text"));
  assert.equal(isCourseCompleted(s, true), false, "иначе сертификат ничего не стоит");
  assert.equal(isCourseCompleted(s, false), true, "курс без экзамена — пройден");
});

test("курс с экзаменом пройден, когда экзамен сдан", () => {
  const s = summarizeCourse(
    lessons,
    done("u1-rule", "u1-drill", "u2-quest", "library-text", "exam")
  );
  assert.equal(isCourseCompleted(s, true), true);
});

test("пустой курс пройденным не считается", () => {
  const s = summarizeCourse([], {});
  assert.equal(isCourseCompleted(s, false), false);
  assert.equal(s.ratio, 0, "деления на ноль быть не должно");
});

test("модули считаются отдельно, уроки вне модулей не учитываются", () => {
  const mods = summarizeModules(lessons, done("u1-rule", "u1-drill"));
  assert.equal(mods.length, 2);
  const unit1 = mods.find((m) => m.slug === "unit-1")!;
  assert.equal(unit1.completed, true);
  const unit2 = mods.find((m) => m.slug === "unit-2")!;
  assert.equal(unit2.completed, false);
});

test("порядок уроков берётся из sort, а не из порядка в массиве", () => {
  const shuffled = [...lessons].reverse();
  const next = findNextLesson(shuffled, done("u1-rule"));
  assert.equal(next?.slug, "u1-drill");
});
