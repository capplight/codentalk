import { courses } from "../courses/index.ts";
const c = courses.find((x) => x.slug === "english-starter")!;
let n = 0;
const bez: string[] = [];
for (const m of c.modules) {
  n++;
  const chtenie = m.lessons.filter((l) => (l.blocks as any[]).some((b) => b.kind === "text"));
  const slushanie = m.lessons.filter((l) => (l.blocks as any[]).some((b) => b.kind === "audio"));
  const pismo = m.lessons.filter((l) => (l.blocks as any[]).some((b) => b.kind === "essay"));
  const govor = m.lessons.filter((l) => (l.blocks as any[]).some((b) => b.kind === "speak"));
  console.log(
    `${String(n).padStart(2)} ${m.slug.padEnd(22)} чтение ${chtenie.length}  слушание ${slushanie.length}  письмо ${pismo.length}  говорение ${govor.length}`
  );
  if (chtenie.length === 0) bez.push(`${n} ${m.slug}`);
}
console.log("\nБЕЗ ТЕКСТА ДЛЯ ЧТЕНИЯ:", bez.length ? bez.join(", ") : "нет");
