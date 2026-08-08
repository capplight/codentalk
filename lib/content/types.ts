/**
 * Формат урока. Разбор и обоснование — docs/format-uroka.md.
 *
 * На этих типах будут написаны сотни уроков, поэтому здесь важнее строгость,
 * чем удобство: чем меньше свободы у автора, тем больше проверок можно сделать
 * скриптом и тем однообразнее выглядит курс для ученика.
 *
 * Виды заданий названы по QTI 3.0, чтобы банк вопросов можно было вывезти в
 * другую систему или ввезти чужой.
 */

// ---------------------------------------------------------------------------
// Имя блока
// ---------------------------------------------------------------------------

/**
 * Устойчивое имя блока внутри урока. Задаётся автором вручную и НЕ меняется
 * после выхода урока.
 *
 * Почему не порядковый номер и не отпечаток содержания: к блоку привязываются
 * пометки «непонятно» и заметки учеников. Номер съедет, стоит переставить два
 * абзаца; отпечаток съедет от исправленной опечатки. И в том, и в другом случае
 * пометки учеников молча переедут на чужое место — а это их работа, потерять её
 * нельзя. Имя, написанное руками, переживает и перестановку, и правку текста.
 */
export type BlockId = string;

interface BlockBase {
  /** Латиницей, через дефис, уникально внутри урока. Не менять после выхода. */
  id: BlockId;
}

// ---------------------------------------------------------------------------
// Блоки материала — закрытый набор из семи
// ---------------------------------------------------------------------------

/** Объяснение. Основа урока: течёт по странице серифным шрифтом. */
export interface ExplainBlock extends BlockBase {
  kind: "explain";
  /** Абзацы. Разделение на абзацы — обязанность автора, а не переносы в строке. */
  text: string[];
}

/** Разобранный пример. Показывается ДО самостоятельной попытки. */
export interface ExampleBlock extends BlockBase {
  kind: "example";
  caption?: string;
  /** Либо код, либо текст на изучаемом языке — но что-то одно должно быть. */
  code?: string;
  text?: string;
  /** Разбор: почему пример устроен именно так. Без него это не пример, а картинка. */
  explain: string;
}

/** Таблица: формы, спряжения, сопоставления — то, что списком не читается. */
export interface TableBlock extends BlockBase {
  kind: "table";
  caption?: string;
  head: string[];
  rows: string[][];
}

/** Короткая врезка сбоку от основного течения. */
export interface NoteBlock extends BlockBase {
  kind: "note";
  /** mistake — «так ошибаются чаще всего», info — «обрати внимание». */
  tone: "info" | "mistake";
  text: string;
}

/** Звук. Расшифровка обязательна: без неё запись бесполезна глухим и тем, кто без наушников. */
export interface AudioBlock extends BlockBase {
  kind: "audio";
  src: string;
  transcript: string;
  caption?: string;
}

/** Изображение. Описание обязательно — по той же причине, что и расшифровка. */
export interface ImageBlock extends BlockBase {
  kind: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface VocabItem {
  term: string;
  translation: string;
  /** Пример употребления. Слово без окружения не запоминается. */
  example: string;
  /** Произношение, если написание обманывает. */
  hint?: string;
}

/**
 * Набор слов темы. Отдельный вид, а не таблица, потому что у него есть вторая
 * работа: отсюда тренажёр повторения забирает слова сам.
 */
export interface VocabBlock extends BlockBase {
  kind: "vocab";
  caption?: string;
  items: VocabItem[];
}

export type MaterialBlock =
  | ExplainBlock
  | ExampleBlock
  | TableBlock
  | NoteBlock
  | AudioBlock
  | ImageBlock
  | VocabBlock;

export const MATERIAL_KINDS = [
  "explain",
  "example",
  "table",
  "note",
  "audio",
  "image",
  "vocab",
] as const;

// ---------------------------------------------------------------------------
// Задания — закрытый набор из девяти
// ---------------------------------------------------------------------------

interface TaskBase extends BlockBase {
  /** Что сделать. Формулировка обращена к ученику. */
  prompt: string;
  /** Подсказка по запросу. Ошибка ведёт к подсказке, а не к наказанию. */
  hint?: string;
  /**
   * Разбор после ответа. ОБЯЗАТЕЛЕН у каждого задания.
   * На нём держится решение не ограничивать долю заданий с выбором: вопрос с
   * вариантами работает тогда, когда после ответа человек получает объяснение.
   */
  why: string;
}

export interface ChoiceOption {
  text: string;
  correct?: boolean;
}

/** Выбор из вариантов. Признак multiple вместо отдельного вида — так же, как в QTI. */
export interface ChoiceTask extends TaskBase {
  kind: "choice";
  options: ChoiceOption[];
  /** true — верных несколько, засчитывается только полный набор. */
  multiple?: boolean;
}

/** Вставить пропущенное. Пропуск один: два пропуска — это два задания. */
export interface GapTask extends TaskBase {
  kind: "gap";
  before: string;
  after: string;
  answer: string;
  /** Другие принимаемые написания: сокращения, допустимые формы. */
  accept?: string[];
}

export interface HottextPart {
  text: string;
  /** true — по этой части можно нажать. Остальные — просто текст. */
  selectable?: boolean;
  /** true — часть входит в верный ответ. Верная часть обязана быть нажимаемой. */
  correct?: boolean;
}

/** Отметить части прямо в тексте: глаголы в прошедшем, ошибку в коде. */
export interface HottextTask extends TaskBase {
  kind: "hottext";
  parts: HottextPart[];
}

/** Восстановить порядок. Ответ — перестановка всех позиций. */
export interface OrderTask extends TaskBase {
  kind: "order";
  items: string[];
  /** Номера items в правильном порядке: [0, 2, 1]. */
  answer: number[];
}

/** Сопоставить пары. */
export interface MatchTask extends TaskBase {
  kind: "match";
  left: string[];
  right: string[];
  /** Для каждой позиции слева — номер её пары справа. */
  answer: number[];
}

/** Короткий ответ словами. Сверка по приведённой форме: регистр и пробелы не важны. */
export interface ShortTask extends TaskBase {
  kind: "short";
  answer: string;
  accept?: string[];
}

/** Развёрнутый ответ. Машина его не оценивает — показывает эталон и список для самопроверки. */
export interface EssayTask extends TaskBase {
  kind: "essay";
  sample: string;
  checklist: string[];
  minWords?: number;
}

/** Написать код и увидеть результат. */
export interface CodeTask extends TaskBase {
  kind: "code";
  starter: string;
  check: {
    mustContain?: string[];
    mustNotContain?: string[];
  };
}

/** Произнести вслух. Вне QTI: стандарт устную речь не описывает. */
export interface SpeakTask extends TaskBase {
  kind: "speak";
  phrase: string;
  translation?: string;
}

export type TaskBlock =
  | ChoiceTask
  | GapTask
  | HottextTask
  | OrderTask
  | MatchTask
  | ShortTask
  | EssayTask
  | CodeTask
  | SpeakTask;

export const TASK_KINDS = [
  "choice",
  "gap",
  "hottext",
  "order",
  "match",
  "short",
  "essay",
  "code",
  "speak",
] as const;

/**
 * Задания, где ответ надо произвести, а не узнать среди подсказок.
 * Из них проверочная работа модуля состоит больше чем наполовину — см. решение 3
 * в docs/format-uroka.md.
 */
export const PRODUCTIVE_KINDS = ["gap", "short", "order", "code", "essay", "speak"] as const;

export type Block = MaterialBlock | TaskBlock;

const TASK_KIND_SET: ReadonlySet<string> = new Set(TASK_KINDS);

export function isTask(block: Block): block is TaskBlock {
  return TASK_KIND_SET.has(block.kind);
}

export function isMaterial(block: Block): block is MaterialBlock {
  return !TASK_KIND_SET.has(block.kind);
}

export function isProductive(kind: string): boolean {
  return (PRODUCTIVE_KINDS as readonly string[]).includes(kind);
}

// ---------------------------------------------------------------------------
// Урок, модуль, курс
// ---------------------------------------------------------------------------

export interface Lesson {
  slug: string;
  title: string;
  /** Оценка времени с упражнениями. Формат рассчитан на 8–15 минут. */
  estimatedMinutes: number;
  /**
   * Ровно одна проверяемая формулировка «умеет…», по образцу описаний
   * Совета Европы. Скрипт следит, чтобы у неё нашёлся вопрос в проверочной
   * работе модуля: урок, чей итог ничем не проверяется, — потраченное время.
   */
  outcome: string;
  blocks: Block[];
}

/** Откуда взят материал. Внутреннее поле, ученику не показывается. */
export interface Source {
  ref: string;
  section?: string;
  license?: string;
}

/** Вопрос проверочной работы: то же задание плюс отметка, какой итог он проверяет. */
export type QuizQuestion = TaskBlock & {
  /** Должен дословно совпадать с outcome одного из уроков модуля. */
  outcome: string;
};

export interface Quiz {
  /** Сколько вопросов показать из банка. Пусто — показать все. */
  ask?: number;
  /** Доля верных ответов для зачёта, от 0 до 1. */
  passRatio?: number;
  questions: QuizQuestion[];
}

export interface Module {
  slug: string;
  title: string;
  /** Внутреннее: наружу не уходит, нужно проверяющему. Пустым быть не может. */
  sources: Source[];
  /** Что ученик будет уметь после модуля. */
  outcomes: string[];
  lessons: Lesson[];
  quiz: Quiz;
}

export interface Course {
  slug: string;
  /** Направление: english | web | ... */
  track: string;
  title: string;
  /** Ступень: A1, B2 — там, где ступени есть. */
  level?: string;
  access: "free" | "premium";
  modules: Module[];
}
