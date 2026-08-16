/**
 * Проверочная работа модуля: что уходит в браузер и как считается балл.
 *
 * Главное правило (раздел 10 техзадания): правильные ответы не покидают сервер
 * до сдачи попытки. Ученик получает вопрос и варианты — и ничего сверх этого.
 * Ценность сертификата держится именно на этом.
 *
 * Чистые правила: ни базы, ни React.
 */
import { checkAnswer, type Answer } from "./check";
import { adresVoprosa } from "./zvuk";
import type { QuizQuestion, TaskBlock } from "./types";

/**
 * Вопрос в том виде, в каком его можно показать ученику.
 *
 * Тип перечисляет поля явно, а не вычитает лишние из задания. Так безопаснее:
 * при добавлении нового вида задания забытое поле НЕ утечёт само, а вызовет
 * ошибку сборки — придётся решить, показывать его или нет.
 */
export interface BrowserQuestion {
  id: string;
  kind: TaskBlock["kind"];
  prompt: string;
  /** choice: только надписи, без пометки о верности */
  options?: string[];
  multiple?: boolean;
  /** gap */
  before?: string;
  after?: string;
  /** hottext: какие части нажимаемы — но не какие из них верны */
  parts?: Array<{ text: string; selectable: boolean }>;
  /** order */
  items?: string[];
  /** match */
  left?: string[];
  right?: string[];
  /** code */
  starter?: string;
  /** speak */
  phrase?: string;
  translation?: string;
  /**
   * Адрес записи, по которой спрашивают. Именно АДРЕС, а не расшифровка:
   * расшифровка в ответе сервера была бы ответом на вопрос. Адрес выведен из
   * текста отпечатком и о содержании записи не говорит ничего.
   */
  zvuk?: string;
}

/**
 * Убрать из вопроса всё, по чему можно узнать ответ.
 *
 * Помимо очевидного `answer` убираются: пометки `correct`, принимаемые
 * написания `accept`, условия проверки кода `check`, подсказка `hint` и разбор
 * `why` — разбор пересказывает ответ своими словами, а подсказке в проверочной
 * работе не место: она измеряет знания, а не догадливость.
 */
export function forBrowser(question: QuizQuestion): BrowserQuestion {
  const base = {
    id: question.id,
    kind: question.kind,
    prompt: question.prompt,
    // Из `zvuk` наружу уходит только адрес файла.
    zvuk: question.zvuk ? adresVoprosa(question.zvuk) : undefined,
  };

  switch (question.kind) {
    case "choice":
      return {
        ...base,
        options: question.options.map((option) => option.text),
        multiple: question.multiple,
      };
    case "gap":
      return { ...base, before: question.before, after: question.after };
    case "hottext":
      return {
        ...base,
        parts: question.parts.map((part) => ({
          text: part.text,
          selectable: part.selectable === true,
        })),
      };
    case "order":
      return { ...base, items: question.items };
    case "match":
      return { ...base, left: question.left, right: question.right };
    case "code":
      return { ...base, starter: question.starter };
    case "speak":
      return { ...base, phrase: question.phrase, translation: question.translation };
    case "short":
      return base;
    case "essay":
      // В проверочной работе развёрнутого ответа быть не должно: машина его не
      // оценивает. Скрипт проверок это запрещает, здесь — на всякий случай.
      return base;
  }
}

/** Вопрос из базы: авторский вопрос, тема для разбора и группа для выборки. */
export type PooledQuestion = QuizQuestion & { topic: string; group?: string };

/**
 * Собрать банк вопросов из записей базы.
 *
 * Наружу и в ответы уходит имя записи в базе, а не имя из файла: по нему потом
 * сверяются ответы попытки, и оно переживает правку материалов.
 */
export function poolFrom(
  rows: Array<{ id: string; topic: string | null; groupKey?: string | null; payload: unknown }>
): PooledQuestion[] {
  return rows.map((row) => {
    const authored = row.payload as QuizQuestion;
    return {
      ...authored,
      id: row.id,
      outcome: row.topic ?? authored.outcome,
      topic: row.topic ?? authored.outcome,
      // Группа нужна только выборке. Где её нет — выборка идёт по теме, как
      // раньше: у работы модуля это верно, там все вопросы про один модуль.
      group: row.groupKey ?? undefined,
    };
  });
}

export interface QuizResult {
  score: number;
  correctCount: number;
  total: number;
  passed: boolean;
  answers: Array<{ questionId: string; correct: boolean; outcome: string }>;
  /** Итоги, где ошибок оказалось больше, чем верных ответов */
  weakOutcomes: string[];
}

/**
 * Подсчёт балла. Неотвеченный вопрос считается ошибкой, а не пропускается:
 * иначе работу можно было бы «сдать» на сто баллов, ответив на один вопрос.
 */
export function gradeQuiz(
  questions: QuizQuestion[],
  answers: Record<string, unknown>,
  passRatio: number
): QuizResult {
  const scored = questions.map((question) => {
    const given = answers[question.id];
    const verdict =
      given === undefined ? false : checkAnswer(question, given as Answer);
    return {
      questionId: question.id,
      // null означает «машина не оценивает»; в проверочной работе таких быть не
      // должно, но если попадёт — не засчитываем молча как верный
      correct: verdict === true,
      outcome: question.outcome,
    };
  });

  const correctCount = scored.filter((answer) => answer.correct).length;
  const total = questions.length;
  const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  // Слабое место — итог, где ошибок больше, чем верных ответов
  const byOutcome = new Map<string, { right: number; wrong: number }>();
  for (const answer of scored) {
    const cell = byOutcome.get(answer.outcome) ?? { right: 0, wrong: 0 };
    if (answer.correct) cell.right += 1;
    else cell.wrong += 1;
    byOutcome.set(answer.outcome, cell);
  }

  const weakOutcomes = [...byOutcome.entries()]
    .filter(([, cell]) => cell.wrong > cell.right)
    .map(([outcome]) => outcome);

  return {
    score,
    correctCount,
    total,
    passed: total > 0 && correctCount / total >= passRatio,
    answers: scored,
    weakOutcomes,
  };
}
