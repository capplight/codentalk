import type { Course, Phrase } from "@/lib/types";

/**
 * Словарь уровня: все новые слова из глав курса, без дублей.
 * Прогресс — по системе Лейтнера (5 коробок, localStorage, без бэкенда):
 * верный ответ — слово двигается в коробку выше, ошибка — сразу в коробку 0.
 * Коробки 0–2 = «учу», 3–4 = «знаю».
 */

const STORAGE_KEY = "codentalk-vocab-v1";
const MAX_BOX = 4;
const MASTERED_BOX = 3;

export interface VocabProgress {
  box: number;
  seenAt: string;
}
export type VocabMap = Record<string, VocabProgress>;

export function vocabKey(courseSlug: string, en: string): string {
  return `${courseSlug}:${en.toLowerCase()}`;
}

/** Собирает все слова курса в порядке появления глав, без повторов (по английскому слову). */
export function getCourseVocabulary(course: Course): Phrase[] {
  const seen = new Set<string>();
  const list: Phrase[] = [];
  for (const chapter of course.chapters) {
    for (const word of chapter.words) {
      const key = word.en.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      list.push(word);
    }
  }
  return list;
}

/** Синхронное чтение прогресса — для однократной сборки сессии тренажёра в useEffect. */
export function getVocabProgressSnapshot(): VocabMap {
  return readMap();
}

function readMap(): VocabMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function writeMap(map: VocabMap) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

export function markWord(courseSlug: string, en: string, correct: boolean) {
  const map = readMap();
  const key = vocabKey(courseSlug, en);
  const prevBox = map[key]?.box ?? 0;
  const nextBox = correct ? Math.min(prevBox + 1, MAX_BOX) : 0;
  map[key] = { box: nextBox, seenAt: new Date().toISOString() };
  writeMap(map);
}

export function isMastered(progress: VocabProgress | undefined): boolean {
  return (progress?.box ?? 0) >= MASTERED_BOX;
}

/**
 * Набор слов для тренировки: сначала новые (никогда не показанные), затем
 * те, что «в процессе» (коробка 0–2), с приоритетом самых слабых. Уже
 * выученные слова (коробка 3–4) в обычную сессию не попадают.
 */
export function buildSession(
  words: Phrase[],
  map: VocabMap,
  courseSlug: string,
  size = 10
): Phrase[] {
  const withStatus = words.map((w) => {
    const p = map[vocabKey(courseSlug, w.en)];
    return { word: w, box: p?.box ?? -1 }; // -1 = ещё не показывали
  });
  const learning = withStatus
    .filter((x) => x.box >= 0 && x.box < MASTERED_BOX)
    .sort((a, b) => a.box - b.box);
  const fresh = withStatus.filter((x) => x.box === -1);
  const ordered = [...fresh, ...learning].map((x) => x.word);
  if (ordered.length >= size) return ordered.slice(0, size);
  // слов «на повторение» не хватает — добираем уже выученные, чтобы сессия не была пустой
  const mastered = withStatus.filter((x) => x.box >= MASTERED_BOX).map((x) => x.word);
  return [...ordered, ...mastered].slice(0, size);
}
