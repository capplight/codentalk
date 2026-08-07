import type { PlacementBand } from "@/content/placement";

/** Порядок уровней от простого к сложному */
export const BAND_ORDER: PlacementBand[] = ["starter", "a1", "a2", "b1", "b2"];

export const BAND_COURSE: Record<PlacementBand, string> = {
  starter: "english-starter",
  a1: "english-a1",
  a2: "english-a2",
  b1: "english-b1",
  b2: "english-b2",
};

export const BAND_LABEL: Record<PlacementBand, string> = {
  starter: "Starter",
  a1: "A1",
  a2: "A2",
  b1: "B1",
  b2: "B2",
};

/**
 * Тема каждого вопроса теста соответствует конкретному юниту уровня (см.
 * units.ts внутри content/english-<level>). Индекс в массиве — порядковый
 * номер вопроса внутри своего уровня (вопросы в placementQuestions идут
 * блоками по уровню).
 */
export const BAND_UNIT_MAP: Record<PlacementBand, string[]> = {
  starter: ["unit-1", "unit-3", "unit-4", "unit-2"],
  a1: ["unit-3", "unit-3", "unit-3", "unit-5"],
  a2: ["unit-1", "unit-1", "unit-3", "unit-4"],
  b1: ["unit-1", "unit-1", "unit-4", "unit-5"],
  b2: ["unit-6", "unit-1", "unit-6", "unit-5"],
};

export interface PlacementResult {
  /** Рекомендованный уровень для старта */
  recommended: PlacementBand;
  /** Юнит внутри рекомендованного уровня, с которого стоит начать — там первый пробел */
  recommendedUnit?: string;
  /** Все уровни пройдены — ученику уже выше B2 */
  aboveTop: boolean;
  correctByBand: Record<PlacementBand, { correct: number; total: number }>;
  totalCorrect: number;
  totalQuestions: number;
}

/**
 * Уровень считается «взятым», если верно не меньше 60% его вопросов.
 * Рекомендуем первый НЕвзятый уровень — именно там у ученика пробелы.
 * Внутри уровня дополнительно ищем первый вопрос с ошибкой и переводим его
 * тему в конкретный юнит — так рекомендация точнее, чем просто «начни с A2».
 */
export function evaluatePlacement(
  answers: Record<number, string>,
  questions: { band: PlacementBand; answer: string }[]
): PlacementResult {
  const byBand = {} as Record<PlacementBand, { correct: number; total: number }>;
  for (const band of BAND_ORDER) byBand[band] = { correct: 0, total: 0 };

  // локальный индекс вопроса внутри своего уровня — нужен для BAND_UNIT_MAP
  const localIndexByGlobalIndex: number[] = [];
  const bandCounters = {} as Record<PlacementBand, number>;
  for (const band of BAND_ORDER) bandCounters[band] = 0;

  questions.forEach((q, i) => {
    byBand[q.band].total += 1;
    if (answers[i] === q.answer) byBand[q.band].correct += 1;
    localIndexByGlobalIndex[i] = bandCounters[q.band];
    bandCounters[q.band] += 1;
  });

  let recommended: PlacementBand = "b2";
  let aboveTop = true;
  for (const band of BAND_ORDER) {
    const { correct, total } = byBand[band];
    const passed = total > 0 && correct / total >= 0.6;
    if (!passed) {
      recommended = band;
      aboveTop = false;
      break;
    }
  }

  let recommendedUnit: string | undefined;
  if (!aboveTop) {
    const firstWrong = questions.findIndex(
      (q, i) => q.band === recommended && answers[i] !== q.answer
    );
    if (firstWrong !== -1) {
      recommendedUnit = BAND_UNIT_MAP[recommended][localIndexByGlobalIndex[firstWrong]];
    }
  }

  const totalCorrect = BAND_ORDER.reduce((sum, b) => sum + byBand[b].correct, 0);
  const totalQuestions = BAND_ORDER.reduce((sum, b) => sum + byBand[b].total, 0);

  return {
    recommended,
    recommendedUnit,
    aboveTop,
    correctByBand: byBand,
    totalCorrect,
    totalQuestions,
  };
}
