import { courses } from "./courses/index.ts";
import { isTask } from "./lib/content/types.ts";

const kurs = courses.find((c: any) => c.slug === "english-starter")!;
const mods = process.argv.slice(2);

function norm(s: string): string {
  return (s ?? "").toLowerCase().replace(/[«»"'’.,!?:;—–\-()]/g, " ").replace(/\s+/g, " ").trim();
}
function toks(s: string): string[] { return norm(s).split(" ").filter(Boolean); }
function sim(a: string, b: string): number {
  const A = new Set(toks(a)), B = new Set(toks(b));
  if (!A.size || !B.size) return 0;
  let inter = 0; for (const x of A) if (B.has(x)) inter++;
  return inter / Math.max(A.size, B.size);
}
function variants(b: any): string[] {
  const out: string[] = [];
  if (b.options) for (const o of b.options) out.push((o.correct ? "+" : "-") + o.text);
  if (b.parts) for (const p of b.parts) if (p.selectable) out.push((p.correct ? "+" : "-") + p.text);
  if (b.answer !== undefined && typeof b.answer === "string") out.push("=" + b.answer);
  if (b.items) out.push("items:" + b.items.join("|"));
  if (b.left) out.push("L:" + b.left.join("|") + " R:" + b.right.join("|"));
  return out;
}

for (const mSlug of mods) {
  const m = kurs.modules.find((x: any) => x.slug === mSlug);
  if (!m) { console.log("нет модуля " + mSlug); continue; }
  const lessonTasks: any[] = [];
  for (const l of m.lessons) for (const b of l.blocks) if (isTask(b)) lessonTasks.push({ ...b, _l: l.slug });
  const quiz = (m.quiz?.questions ?? []) as any[];
  console.log("\n===== " + m.slug + "  (вопросов работы: " + quiz.length + ", заданий уроков: " + lessonTasks.length + ")");
  for (const q of quiz) {
    let best: any = null, bs = 0;
    for (const t of lessonTasks) { const s = sim(q.prompt, t.prompt); if (s > bs) { bs = s; best = t; } }
    const vq = variants(q), vb = best ? variants(best) : [];
    const shared = vq.filter((v) => vb.includes(v));
    if (bs >= 0.45 || shared.length >= 2) {
      console.log(`\n  [${q.id}] ${q.kind}  ~${bs.toFixed(2)}  ↔  ${best._l} · ${best.id} (${best.kind})`);
      console.log(`     работа: ${q.prompt}`);
      console.log(`     урок  : ${best.prompt}`);
      if (shared.length) console.log(`     совпали дословно: ${shared.join("  ///  ")}`);
    }
  }
}
