import { test } from "node:test";
import assert from "node:assert/strict";
import {
  evaluateCourseAccess,
  countUsedSlots,
  nextMonthStart,
  startOfMonth,
  type EnrollmentRecord,
} from "./enrollment.ts";

const NOW = new Date("2026-08-15T12:00:00Z");
const THIS_MONTH = new Date("2026-08-01T00:00:00Z");
const LAST_MONTH = new Date("2026-07-01T00:00:00Z");

function premium(courseId: string, periodMonth = THIS_MONTH, completedAt: Date | null = null): EnrollmentRecord {
  return { courseId, courseAccess: "premium", periodMonth, completedAt };
}

function free(courseId: string, periodMonth = THIS_MONTH): EnrollmentRecord {
  return { courseId, courseAccess: "free", periodMonth, completedAt: null };
}

test("бесплатный курс открыт без подписки и мест не занимает", () => {
  const d = evaluateCourseAccess({
    courseId: "english-a1",
    courseAccess: "free",
    hasActiveSubscription: false,
    enrollments: [],
    now: NOW,
  });
  assert.equal(d.allowed, true);
  assert.equal(d.wouldUseSlot, false);
});

test("платный курс без подписки закрыт, и причина именно в подписке", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: false,
    enrollments: [],
    now: NOW,
  });
  assert.equal(d.allowed, false);
  assert.equal(d.reason, "needs_subscription");
});

test("без подписки причина — подписка, а не места, даже когда мест нет", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: false,
    enrollments: [premium("a"), premium("b")],
    now: NOW,
  });
  assert.equal(d.reason, "needs_subscription");
});

test("с подпиской и свободными местами курс открывается и занимает место", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: true,
    enrollments: [premium("a")],
    now: NOW,
  });
  assert.equal(d.allowed, true);
  assert.equal(d.wouldUseSlot, true);
  assert.equal(d.usedSlots, 1);
});

test("третий курс не открывается, и сказано, когда освободится место", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: true,
    enrollments: [premium("a"), premium("b")],
    now: NOW,
  });
  assert.equal(d.allowed, false);
  assert.equal(d.reason, "no_free_slots");
  assert.deepEqual(d.slotsFreeAt, new Date("2026-09-01T00:00:00Z"));
});

test("бесплатные курсы не съедают места платных", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: true,
    enrollments: [free("english-a1"), free("english-a2"), premium("a")],
    now: NOW,
  });
  assert.equal(d.allowed, true, "бесплатные не должны занимать места");
  assert.equal(d.usedSlots, 1);
});

test("пройденный курс освобождает место сразу", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: true,
    enrollments: [premium("a"), premium("b", THIS_MONTH, new Date("2026-08-10T00:00:00Z"))],
    now: NOW,
  });
  assert.equal(d.allowed, true);
  assert.equal(d.usedSlots, 1);
});

test("места прошлого месяца текущий не занимают", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: true,
    enrollments: [premium("a", LAST_MONTH), premium("b", LAST_MONTH)],
    now: NOW,
  });
  assert.equal(d.allowed, true);
  assert.equal(d.usedSlots, 0);
});

test("уже взятый курс открывается повторно и второго места не тратит", () => {
  const d = evaluateCourseAccess({
    courseId: "french-a1",
    courseAccess: "premium",
    hasActiveSubscription: true,
    enrollments: [premium("french-a1"), premium("b")],
    now: NOW,
  });
  assert.equal(d.allowed, true, "свой же курс должен открываться при занятых местах");
  assert.equal(d.wouldUseSlot, false);
});

test("подсчёт занятых мест не зависит от часового пояса даты", () => {
  const lateNight = new Date("2026-08-31T23:59:59Z");
  assert.equal(countUsedSlots([premium("a")], lateNight), 1);
  const firstMoment = new Date("2026-08-01T00:00:00Z");
  assert.equal(countUsedSlots([premium("a")], firstMoment), 1);
});

test("границы месяца считаются верно, включая декабрь", () => {
  assert.deepEqual(startOfMonth(new Date("2026-12-31T23:00:00Z")), new Date("2026-12-01T00:00:00Z"));
  assert.deepEqual(nextMonthStart(new Date("2026-12-15T00:00:00Z")), new Date("2027-01-01T00:00:00Z"));
});
