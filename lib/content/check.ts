/**
 * Проверка ответа на задание. Чистые правила: без базы, без React.
 *
 * Одна и та же функция работает в браузере (упражнения урока отвечают сразу) и
 * на сервере (проверочная работа модуля). Иначе две проверки со временем разойдутся,
 * и ученик получит «верно» в уроке и «неверно» в проверочной за тот же ответ.
 */
import type { TaskBlock } from "./types";

/**
 * Приведённая форма ответа: лишние пробелы, вид кавычек и знак в конце не должны
 * решать судьбу ответа. Буква «ё» приравнивается к «е» — ученик пишет как
 * привык, а не как настроена его раскладка.
 *
 * **Апостроф НЕ вырезается.** В английском он различает слова: `im` и `I'm` —
 * не одно и то же, и задание про краткую форму обязано это видеть. Если автор
 * хочет принять написание без апострофа, он добавляет его в `accept` осознанно.
 *
 * **Регистр снимается только при обычной сверке.** Для заданий про заглавную
 * букву есть признак `exact` — см. ниже.
 */
export function normalize(value: string): string {
  return normalizeKeepingCase(value).toLowerCase().replace(/ё/g, "е");
}

/**
 * То же приведение, но с сохранением регистра — для заданий, где заглавная
 * буква и есть предмет проверки: `I`, дни недели, месяцы, национальности.
 *
 * Без этого задание «исправьте „i am alim“» засчитывало бы дословно
 * переписанную из условия ошибку. Проверено опытом: засчитывало.
 */
export function normalizeKeepingCase(value: string): string {
  return value
    .trim()
    .replace(/[«»"“”`]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[.!?]+$/, "")
    .replace(/\s+/g, " ");
}

function matchesText(
  given: string,
  answer: string,
  accept: string[] | undefined,
  exact: boolean
): boolean {
  const prepare = exact ? normalizeKeepingCase : normalize;
  const normalized = prepare(given);
  if (normalized.length === 0) return false;
  if (normalized === prepare(answer)) return true;
  return (accept ?? []).some((variant) => prepare(variant) === normalized);
}

function sameOrder(given: number[], answer: number[]): boolean {
  return given.length === answer.length && given.every((n, i) => n === answer[i]);
}

/** Ответ ученика. Форма зависит от вида задания. */
export type Answer = string | number[] | boolean;

/**
 * Развёрнутый ответ и произнесение вслух машина не оценивает: у первого нет
 * единственно верного варианта, второе оценивается распознаванием речи отдельно.
 * Для них возвращается null — «проверять нечего, показать эталон».
 */
export function checkAnswer(task: TaskBlock, given: Answer): boolean | null {
  switch (task.kind) {
    case "choice": {
      const picked = Array.isArray(given) ? given : [];
      const correct = task.options
        .map((option, index) => (option.correct ? index : -1))
        .filter((index) => index !== -1);
      if (picked.length !== correct.length) return false;
      const set = new Set(picked);
      return correct.every((index) => set.has(index));
    }

    case "gap":
    case "short":
      return (
        typeof given === "string" &&
        matchesText(given, task.answer, task.accept, task.exact === true)
      );

    case "hottext": {
      const picked = new Set(Array.isArray(given) ? given : []);
      const correct = task.parts
        .map((part, index) => (part.correct ? index : -1))
        .filter((index) => index !== -1);
      if (picked.size !== correct.length) return false;
      return correct.every((index) => picked.has(index));
    }

    case "order":
      return Array.isArray(given) && sameOrder(given, task.answer);

    case "match":
      return Array.isArray(given) && sameOrder(given, task.answer);

    case "code": {
      if (typeof given !== "string") return false;
      const written = given.toLowerCase().replace(/\s+/g, " ");
      const { mustContain = [], mustNotContain = [] } = task.check;
      const hasAll = mustContain.every((part) => written.includes(part.toLowerCase()));
      const hasNone = mustNotContain.every((part) => !written.includes(part.toLowerCase()));
      return hasAll && hasNone;
    }

    case "essay":
    case "speak":
      return null;
  }
}

/** Чего именно не хватает в коде — чтобы подсказка называла причину, а не «неверно». */
export function missingParts(task: TaskBlock, given: string): string[] {
  if (task.kind !== "code") return [];
  const written = given.toLowerCase().replace(/\s+/g, " ");
  const missing = (task.check.mustContain ?? []).filter(
    (part) => !written.includes(part.toLowerCase())
  );
  const extra = (task.check.mustNotContain ?? []).filter((part) =>
    written.includes(part.toLowerCase())
  );
  return [...missing.map((p) => `не хватает ${p}`), ...extra.map((p) => `лишнее ${p}`)];
}
