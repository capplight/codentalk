import { test } from "node:test";
import assert from "node:assert/strict";
import {
  checkEligibility,
  formatSerial,
  isValidSerialFormat,
} from "./certificate.ts";

const base = {
  allLessonsCompleted: true,
  hasExam: true,
  examPassed: true,
  alreadyIssued: false,
};

test("сертификат выдаётся, когда курс пройден и экзамен сдан", () => {
  assert.equal(checkEligibility(base).eligible, true);
});

test("без пройденных уроков сертификата нет", () => {
  const r = checkEligibility({ ...base, allLessonsCompleted: false });
  assert.equal(r.eligible, false);
  assert.equal(r.reason, "course_not_completed");
});

test("с несданным экзаменом сертификата нет — иначе он ничего не стоит", () => {
  const r = checkEligibility({ ...base, examPassed: false });
  assert.equal(r.eligible, false);
  assert.equal(r.reason, "exam_not_passed");
});

test("курсу без экзамена достаточно пройденных уроков", () => {
  const r = checkEligibility({ ...base, hasExam: false, examPassed: false });
  assert.equal(r.eligible, true);
});

test("повторно сертификат не выдаётся", () => {
  const r = checkEligibility({ ...base, alreadyIssued: true });
  assert.equal(r.eligible, false);
  assert.equal(r.reason, "already_issued");
});

test("уже выданный сертификат важнее прочих причин", () => {
  const r = checkEligibility({
    allLessonsCompleted: false,
    hasExam: true,
    examPassed: false,
    alreadyIssued: true,
  });
  assert.equal(r.reason, "already_issued");
});

test("номер сертификата имеет читаемый вид", () => {
  const serial = formatSerial(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
  assert.match(serial, /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
  assert.equal(isValidSerialFormat(serial), true);
});

test("в номере нет знаков, которые путают при переписывании", () => {
  // Прогоняем весь диапазон байтов, чтобы поймать любой символ алфавита
  const bytes = new Uint8Array(Array.from({ length: 256 }, (_, i) => i));
  const serial = formatSerial(bytes);
  for (const bad of ["0", "O", "1", "I", "L"]) {
    assert.ok(!serial.includes(bad), `в номере не должно быть «${bad}»`);
  }
});

test("испорченный номер отсеивается до обращения к базе", () => {
  assert.equal(isValidSerialFormat("не-номер"), false);
  assert.equal(isValidSerialFormat("ABCD-EFGH"), false, "не хватает третьей группы");
  assert.equal(isValidSerialFormat("ABC0-EFGH-JKMN"), false, "ноль запрещён");
});
