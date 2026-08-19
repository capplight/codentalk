import { courses } from "../courses/index.ts";
const m = courses.find((x) => x.slug === "english-starter")!.modules[Number(process.argv[2]) - 1];
console.log("ИТОГИ:"); m.outcomes.forEach((o, i) => console.log(" ", i + 1, o));
console.log("УРОКИ:"); m.lessons.forEach((l, i) => console.log(" ", i + 1, l.slug, "—", l.outcome, `(${l.estimatedMinutes})`));
console.log("РАБОТА: вопросов", m.quiz.questions.length, "выдаётся", (m.quiz as any).ask);
