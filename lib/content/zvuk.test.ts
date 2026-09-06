import { test } from "node:test";
import assert from "node:assert/strict";
import {
  klyuchZvuka,
  raskladkaGolosov,
  razgovorLi,
  razgovorVStroke,
  repliki,
} from "./zvuk.ts";

/*
 * ГОЛОСА РАЗГОВОРА. Испытания написаны 6 сентября 2026, когда владелец велел
 * давать женским именам женский голос, а мужским мужской, и завести голос
 * отдельным полем у реплики.
 *
 * До того дня проверить это было нечем: разбор на реплики жил внутри скрипта
 * озвучки с верхнеуровневым `await`, позвать его из теста было нельзя, и
 * раскладка голосов проверялась ТОЛЬКО СЛУХОМ. Этой породой проект обжигался
 * трижды — примеры-разговоры, блоки `audio`, ряд букв через запятую, — и всякий
 * раз отчёты были чисты: имя файла считается от текста, а не от того, кто его
 * читает.
 */

test("разговор без раскладки начинает женский голос и дальше чередует", () => {
  const r = repliki("Hello. — Hi.", true);
  assert.deepEqual(
    r.map((x) => x.golos),
    ["zhenskiy", "muzhskoy"]
  );
  assert.deepEqual(
    r.map((x) => x.text),
    ["Hello.", "Hi."]
  );
});

test("раскладка «m» сдвигает чередование: первым читает мужской", () => {
  const r = repliki("Hello. — Hi. — Good.", true, "m");
  assert.deepEqual(
    r.map((x) => x.golos),
    ["muzhskoy", "zhenskiy", "muzhskoy"]
  );
});

test("раскладка поимённо сильнее чередования", () => {
  // Один человек говорит две реплики подряд — чередование тут врёт, и ровно
  // ради этого случая владелец велел завести поле у реплики.
  const r = repliki("A. — B. — C.", true, "mmz");
  assert.deepEqual(
    r.map((x) => x.golos),
    ["muzhskoy", "muzhskoy", "zhenskiy"]
  );
});

test("раскладка короче реплик не оставляет записи немой", () => {
  // Недостающие реплики берут чередование. Ругается на это `check:content`, а
  // не звук: молчание здесь стоило бы ученику тишины.
  const r = repliki("A. — B. — C. — D.", true, "mm");
  assert.equal(r.length, 4);
  assert.equal(r[0].golos, "muzhskoy");
  assert.equal(r[1].golos, "muzhskoy");
});

test("реплики примера делятся переводом строки, а не тире", () => {
  // У примера-разговора реплика стоит на своей строке, и тире между ними нет
  // вовсе. Пока граница была одна, сорок таких примеров читались одним голосом.
  const r = repliki("— I am Dana.\n— I am Kim.", true);
  assert.deepEqual(
    r.map((x) => x.text),
    ["I am Dana.", "I am Kim."]
  );
  assert.deepEqual(
    r.map((x) => x.golos),
    ["zhenskiy", "muzhskoy"]
  );
});

test("не разговор читается одним голосом, и раскладка выбирает каким", () => {
  assert.deepEqual(repliki("Good morning.", false), [
    { golos: "zhenskiy", text: "Good morning." },
  ]);
  assert.deepEqual(repliki("Good morning.", false, "m"), [
    { golos: "muzhskoy", text: "Good morning." },
  ]);
});

/* ---------------------------------------------------------------- раскладка */

test("раскладка голосов считается по полям блока", () => {
  assert.equal(raskladkaGolosov({}), "");
  assert.equal(raskladkaGolosov({ pervyyGolos: "zhenskiy" }), "");
  assert.equal(raskladkaGolosov({ pervyyGolos: "muzhskoy" }), "m");
  assert.equal(raskladkaGolosov({ golosa: ["muzhskoy", "zhenskiy"] }), "mz");
  // Поимённая раскладка сильнее короткой записи.
  assert.equal(
    raskladkaGolosov({ pervyyGolos: "zhenskiy", golosa: ["muzhskoy", "muzhskoy"] }),
    "mm"
  );
});

test("обычная раскладка НЕ входит в ключ, а необычная входит", () => {
  // Первое — ради того, чтобы имена всех прежних записей курса остались
  // прежними. Второе — ради того, чтобы два одинаковых разговора с разными
  // голосами не столкнулись в одном файле.
  assert.equal(klyuchZvuka("A. — B.", "slow", true), klyuchZvuka("A. — B.", "slow", true, ""));
  assert.notEqual(klyuchZvuka("A. — B.", "slow", true), klyuchZvuka("A. — B.", "slow", true, "m"));
  assert.notEqual(
    klyuchZvuka("A. — B.", "slow", true, "mz"),
    klyuchZvuka("A. — B.", "slow", true, "zm")
  );
});

/* ------------------------------------------------- где разговор, а где пара */

test("тире в строке объяснения чаще значит пару, а не смену говорящего", () => {
  // Счёт по трём курсам 6 сентября 2026: строк с тире 72, разговоров среди них
  // 14. Прочитанная на два голоса пара развалилась бы между двумя людьми.
  assert.equal(razgovorVStroke("work — worked"), false);
  assert.equal(razgovorVStroke("a book — two books"), false);
  assert.equal(razgovorVStroke("G — J"), false);
  assert.equal(razgovorVStroke("four — zero — five"), false);

  assert.equal(razgovorVStroke("How many apples are there? — Three."), true);
  assert.equal(razgovorVStroke("What is this? — Milk."), true);
  assert.equal(razgovorVStroke("Seven, seven? — Yes."), true);
});

test("у записей признак разговора остался прежним и мягче", () => {
  // `razgovorLi` трогать нельзя: по нему считаны имена всех записей курса.
  assert.equal(razgovorLi("work — worked"), true);
  assert.equal(razgovorLi("Are you a teacher? — No, I'm not."), true);
  assert.equal(razgovorLi("Good morning."), false);
});
