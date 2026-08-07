/** Нормализация для сравнения произнесённого текста с целевой фразой: без регистра, пунктуации и лишних пробелов. */
function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[.,!?;:'"“”]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

export type SpeakingVerdict = "great" | "close" | "retry";

export interface SpeakingResult {
  score: number;
  verdict: SpeakingVerdict;
}

/**
 * Грубая оценка совпадения услышанного текста с целевой фразой: доля слов
 * цели, которые нашлись в распознанном тексте. Не строгий тест произношения —
 * распознавание речи само по себе шумное, поэтому это ориентир, а не оценка.
 */
export function scoreSpeaking(target: string, heard: string): SpeakingResult {
  const targetWords = normalize(target);
  const heardWords = new Set(normalize(heard));
  if (targetWords.length === 0) return { score: 0, verdict: "retry" };
  const matched = targetWords.filter((w) => heardWords.has(w)).length;
  const score = Math.round((matched / targetWords.length) * 100);
  const verdict: SpeakingVerdict = score >= 80 ? "great" : score >= 45 ? "close" : "retry";
  return { score, verdict };
}
