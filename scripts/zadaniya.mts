/**
 * Задания модуля в виде, удобном для чтения человеком.
 *
 * Не проверка: ничего не оценивает и ни на что не ругается. Нужна затем, чтобы
 * пройти модуль как ученик — увидеть условие, все варианты и то, что засчитано
 * верным, рядом друг с другом. Из файла на полторы тысячи строк это выуживается
 * долго, а беды вроде «у задания два верных ответа» видны только так.
 *
 * Запуск:
 *   npm run --silent zadaniya -- english-starter alfavit
 */
import { courses } from "../courses/index.ts";
import { isTask, type Block } from "../lib/content/types.ts";

const [, , kursSlug, modulSlug] = process.argv;

function pokazat(b: any, gde: string): void {
  console.log(`\n${gde} · ${b.kind} · ${b.id}`);
  console.log(`  ?  ${b.prompt}`);
  if (b.hint) console.log(`  ~  ${b.hint}`);

  switch (b.kind) {
    case "choice":
      for (const o of b.options ?? []) console.log(`  ${o.correct ? "ВЕРНО" : "  —  "} ${o.text}`);
      break;
    case "gap":
      console.log(`  =  ${b.before ?? ""}[${b.answer}]${b.after ?? ""}`);
      break;
    case "short":
      console.log(`  =  ${b.answer}`);
      break;
    case "order":
      console.log(`  ?  части: ${(b.items ?? []).join(" / ")}`);
      console.log(`  =  ${(b.answer ?? []).map((n: number) => b.items[n]).join(" ")}`);
      break;
    case "match":
      (b.left ?? []).forEach((l: string, i: number) =>
        console.log(`  =  ${l}  →  ${b.right?.[b.answer?.[i]]}`));
      console.log(`     все ответы: ${(b.right ?? []).join(" / ")}`);
      break;
    case "hottext":
      for (const p of b.parts ?? []) {
        if (!p.selectable) continue;
        console.log(`  ${p.correct ? "ВЕРНО" : "  —  "} ${p.text}`);
      }
      break;
    case "speak":
      console.log(`  =  ${b.phrase}`);
      break;
    case "essay":
      console.log(`  =  ${b.sample}`);
      break;
  }
  if (b.accept?.length) console.log(`  +  принимает также: ${b.accept.join(" | ")}`);
  // Без этой пометки не видно главной ловушки заданий «исправь ошибку»: если
  // сверка идёт без учёта заглавных, дословно переписанная из условия ошибка
  // засчитывается как верный ответ. В этом проекте так и было.
  if (b.kind === "gap" || b.kind === "short") {
    console.log(`  *  заглавные ${b.exact ? "СВЕРЯЮТСЯ" : "не важны"}`);
  }
  console.log(`  !  ${b.why}`);
}

function pokazatModul(mod: any): void {
  console.log(`\n=========== ${mod.title} (${mod.slug})`);
  for (const les of mod.lessons) {
    for (const b of les.blocks as Block[]) if (isTask(b)) pokazat(b, les.slug);
  }
  console.log(`\n=========== проверочная работа`);
  for (const q of mod.quiz.questions) pokazat(q, "работа");
}

let nashli = false;
for (const course of courses) {
  if (kursSlug && course.slug !== kursSlug) continue;
  for (const mod of course.modules) {
    if (modulSlug && mod.slug !== modulSlug) continue;
    nashli = true;
    pokazatModul(mod);
  }
}

// Придержанный модуль в курс не включён, а читать его нужно как раз тогда,
// когда он придержан: именно в нём идут правки. Берём прямо из файла.
if (!nashli && kursSlug && modulSlug) {
  const mod = (await import(`../courses/${kursSlug}/${modulSlug}.ts`)).default;
  console.log(`(модуль в курс не включён, читаю файл courses/${kursSlug}/${modulSlug}.ts)`);
  pokazatModul(mod);
}
