import { courses } from "./courses/index.ts";

const c = courses.find((x) => x.slug === "english-starter")!;
const m = c.modules.find((x) => x.slug === "gde-eto")!;

console.log("МОДУЛЬ:", m.title);
console.log("итоги модуля:", JSON.stringify(m.outcomes, null, 1));
console.log("уроков:", m.lessons.length);
for (const l of m.lessons) console.log(`  - ${l.slug} | ${l.outcome} | ${l.estimatedMinutes} мин`);

console.log("\nСЛОВА МОДУЛЯ:");
for (const l of m.lessons) {
  for (const b of l.blocks) {
    if (b.kind === "vocab") for (const it of b.items) console.log(`   ${it.term} — ${it.translation}`);
  }
}

console.log("\nВОПРОСОВ В РАБОТЕ:", m.quiz.questions.length);
console.log("ВЫДАЁТСЯ ЗА ПОПЫТКУ:", m.quiz.questionsPerAttempt);

// Всё, что курс дал ДО этого модуля, — чтобы не потребовать неизученного.
const nomer = c.modules.indexOf(m);
const dano = new Set<string>();
for (let i = 0; i <= nomer; i += 1) {
  for (const l of c.modules[i].lessons) {
    for (const b of l.blocks) {
      if (b.kind === "vocab") for (const it of b.items) dano.add(it.term.toLowerCase());
    }
  }
}
console.log(`\nВСЕГО СЛОВ ДОСТУПНО К КОНЦУ МОДУЛЯ ${nomer + 1}: ${dano.size}`);
console.log([...dano].sort().join(", "));
