/**
 * Правила проверочных работ. Раздел 5.4 документа docs/TZ-platform-v2.md.
 *
 * Владелец отдельно просил, чтобы проверка была настоящей, а не формальностью.
 * Отсюда три решения, заложенные здесь:
 *   1) вопросы выдаются выборкой из банка — вторая попытка даёт другие;
 *   2) вопросы и варианты перемешиваются;
 *   3) у каждого вопроса есть тема, и по итогам ученик видит свои слабые места,
 *      а не только «6 из 10».
 *
 * Ни базы, ни React — только вычисления.
 */

export type QuestionKind = "choice" | "fill" | "order" | "match";

export interface Question {
  id: string;
  kind: QuestionKind;
  /** Тема для разбора слабых мест: «прошедшее время», «артикли» */
  topic: string;
  /** Варианты для kind = "choice" */
  options?: string[];
  /** Правильный ответ: строка либо последовательность для order/match */
  answer: string | string[];
}

export interface ScoredAnswer {
  questionId: string;
  correct: boolean;
  topic: string;
}

export interface AttemptResult {
  score: number;
  correctCount: number;
  total: number;
  passed: boolean;
  answers: ScoredAnswer[];
  /** Темы, где ошибок больше, чем верных ответов */
  weakTopics: string[];
}

/* ------------------------------------------------------------------ */
/* Перемешивание с заданным зерном                                     */
/* ------------------------------------------------------------------ */

/**
 * Простой генератор псевдослучайных чисел с зерном.
 *
 * Нужен именно предсказуемый: выборка вопросов закрепляется за попыткой, и при
 * повторном открытии страницы ученик должен увидеть те же вопросы в том же
 * порядке. С обычным Math.random это было бы невозможно.
 */
function seededRandom(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 1_000_000) / 1_000_000;
  };
}

export function shuffle<T>(items: T[], seed: string): T[] {
  const random = seededRandom(seed);
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/* ------------------------------------------------------------------ */
/* Выдача вопросов                                                     */
/* ------------------------------------------------------------------ */

/**
 * Выборка вопросов из банка.
 *
 * По возможности берём по вопросу из разных тем, а не десять подряд по одной:
 * иначе работа проверяет случайный кусок курса, а не курс.
 */
export function selectQuestions<T extends { topic: string }>(
  pool: T[],
  count: number,
  seed: string
): T[] {
  if (pool.length <= count) return shuffle(pool, seed);

  const byTopic = new Map<string, T[]>();
  for (const q of shuffle(pool, seed)) {
    const list = byTopic.get(q.topic) ?? [];
    list.push(q);
    byTopic.set(q.topic, list);
  }

  const topics = shuffle([...byTopic.keys()], `${seed}:topics`);
  const picked: T[] = [];

  // Идём по кругу темам, пока не наберём нужное число
  let round = 0;
  while (picked.length < count) {
    let addedThisRound = false;
    for (const topic of topics) {
      const list = byTopic.get(topic)!;
      if (round < list.length) {
        picked.push(list[round]);
        addedThisRound = true;
        if (picked.length === count) break;
      }
    }
    if (!addedThisRound) break;
    round += 1;
  }

  return picked;
}

/** Варианты ответа перемешиваются, чтобы положение верного не запоминалось. */
export function shuffleOptions(question: Question, seed: string): Question {
  if (question.kind !== "choice" || !question.options) return question;
  return { ...question, options: shuffle(question.options, `${seed}:${question.id}`) };
}

/* ------------------------------------------------------------------ */
/* Проверка ответов                                                    */
/* ------------------------------------------------------------------ */

/**
 * Приведение ответа к сравнимому виду: убираем лишние пробелы, регистр и
 * знаки препинания по краям. Ученик не должен терять балл из-за точки.
 */
export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:]+$/u, "")
    .replace(/\s+/gu, " ");
}

function isCorrect(question: Question, given: unknown): boolean {
  if (given === undefined || given === null) return false;

  if (Array.isArray(question.answer)) {
    if (!Array.isArray(given)) return false;
    if (given.length !== question.answer.length) return false;
    return question.answer.every(
      (expected, i) => normalizeAnswer(expected) === normalizeAnswer(String(given[i]))
    );
  }

  if (typeof given !== "string") return false;
  return normalizeAnswer(question.answer) === normalizeAnswer(given);
}

export const DEFAULT_PASS_SCORE = 70;

export function scoreAttempt(
  questions: Question[],
  given: Record<string, unknown>,
  passScore = DEFAULT_PASS_SCORE
): AttemptResult {
  const answers: ScoredAnswer[] = questions.map((q) => ({
    questionId: q.id,
    correct: isCorrect(q, given[q.id]),
    topic: q.topic,
  }));

  const correctCount = answers.filter((a) => a.correct).length;
  const total = questions.length;
  const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  // Слабая тема — та, где неверных ответов не меньше, чем верных.
  const byTopic = new Map<string, { right: number; wrong: number }>();
  for (const a of answers) {
    const entry = byTopic.get(a.topic) ?? { right: 0, wrong: 0 };
    if (a.correct) entry.right += 1;
    else entry.wrong += 1;
    byTopic.set(a.topic, entry);
  }
  const weakTopics = [...byTopic.entries()]
    .filter(([, v]) => v.wrong > 0 && v.wrong >= v.right)
    .map(([topic]) => topic);

  return {
    score,
    correctCount,
    total,
    passed: score >= passScore,
    answers,
    weakTopics,
  };
}

/* ------------------------------------------------------------------ */
/* Проверка качества банка вопросов                                    */
/* ------------------------------------------------------------------ */

export interface BalanceReport {
  balanced: boolean;
  /** Сколько раз верный ответ стоял на каждой позиции */
  positions: number[];
  /** Самая длинная цепочка подряд идущих вопросов с ответом на одном месте */
  longestRun: number;
  problems: string[];
}

/**
 * Проверка распределения правильных ответов по позициям.
 *
 * Это не теоретическая предосторожность. В первой версии во всех двадцати
 * вопросах теста уровня верный ответ стоял первым, и тест проходился нажатием
 * первой кнопки, ничего не проверяя. Владелец заметил это по скриншоту.
 */
export function checkAnswerBalance(questions: Question[]): BalanceReport {
  const choice = questions.filter((q) => q.kind === "choice" && q.options);
  const problems: string[] = [];

  if (choice.length === 0) {
    return { balanced: true, positions: [], longestRun: 0, problems: [] };
  }

  const maxOptions = Math.max(...choice.map((q) => q.options!.length));
  const indexes: number[] = [];

  for (const q of choice) {
    const index = q.options!.findIndex(
      (o) => normalizeAnswer(o) === normalizeAnswer(String(q.answer))
    );
    if (index === -1) {
      problems.push(`Вопрос ${q.id}: правильного ответа нет среди вариантов`);
      // -1 разрывает цепочку: неизвестная позиция не продолжает счёт подряд идущих
      indexes.push(-1);
      continue;
    }
    indexes.push(index);
  }

  const report = checkPositionBalance(indexes, maxOptions);
  return { ...report, balanced: problems.length === 0 && report.balanced, problems: [...problems, ...report.problems] };
}

/**
 * Ядро проверки: на каких местах стоят верные ответы.
 *
 * Отделено от разбора вопросов, потому что тем же правилом проверяется и
 * содержание в репозитории (scripts/check-content.mts), где вопросы имеют
 * другую форму. Правило должно быть записано один раз, иначе две проверки
 * со временем разойдутся.
 *
 * Позиция -1 означает «место неизвестно» и цепочку подряд идущих разрывает.
 */
export function checkPositionBalance(indexes: number[], optionCount: number): BalanceReport {
  const problems: string[] = [];
  const positions = new Array<number>(Math.max(optionCount, 1)).fill(0);

  let longestRun = indexes.length > 0 ? 1 : 0;
  let currentRun = 1;
  let previousIndex = -1;

  for (const index of indexes) {
    if (index === -1) {
      previousIndex = -1;
      currentRun = 1;
      continue;
    }
    positions[index] += 1;

    if (index === previousIndex) {
      currentRun += 1;
      longestRun = Math.max(longestRun, currentRun);
    } else {
      currentRun = 1;
    }
    previousIndex = index;
  }

  const known = indexes.filter((i) => i !== -1).length;

  // Ни одна позиция не должна получать больше половины всех верных ответов
  const half = known / 2;
  positions.forEach((count, i) => {
    if (count > half) {
      problems.push(
        `Верный ответ стоит на позиции ${i + 1} в ${count} вопросах из ${known} — тест можно пройти, нажимая одну и ту же кнопку`
      );
    }
  });

  if (longestRun >= 4) {
    problems.push(
      `Подряд идут ${longestRun} вопросов с верным ответом на одном месте`
    );
  }

  return { balanced: problems.length === 0, positions, longestRun, problems };
}
