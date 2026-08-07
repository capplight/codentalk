import { isTask, type Course, type Phrase } from "@/lib/types";

/**
 * Разговорник уровня: все фразы, которые встречались в заданиях (поле `phrase`
 * на шагах квестов), без повторов. Готовый материал для разговорной практики —
 * не нужно вести отдельный контент.
 */
export function getCoursePhrasebook(course: Course): Phrase[] {
  const seen = new Set<string>();
  const list: Phrase[] = [];
  for (const chapter of course.chapters) {
    for (const step of chapter.steps) {
      if (!isTask(step) || !step.phrase) continue;
      const key = step.phrase.en.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      list.push(step.phrase);
    }
  }
  return list;
}
