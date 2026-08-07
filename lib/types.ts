/**
 * Модель контента: курс → главы → шаги.
 * Шаг — либо кусочек истории (story), либо задание (choice / assemble / fill).
 *
 * В английском тексте историй работает разметка перевода:
 *   "The {plane|самолёт} lands in London."
 * Слово в фигурных скобках становится кликабельным с всплывающим переводом.
 */

export interface Stage {
  icon: string;
  name: string;
}

export interface Phrase {
  en: string;
  ru: string;
}

interface BaseStep {
  /** Индекс этапа маршрута (Stage), к которому относится шаг */
  stage: number;
}

export interface StoryStep extends BaseStep {
  kind: "story";
  /** Английский текст с разметкой {word|перевод} */
  en?: string;
  /** Русский подстрочник */
  ru: string;
  /** Если это реплика персонажа */
  who?: string;
  say?: string;
}

export interface ChoiceOption {
  t: string;
  ok?: boolean;
}

export interface ChoiceStep extends BaseStep {
  kind: "choice";
  tag: string;
  q: string;
  options: ChoiceOption[];
  /** Мини-объяснение: показывается как подсказка после неправильного ответа */
  note?: string;
  /** Якорь правила из справочника уровня (RulesSet) — даёт ссылку «📖 Правило» в обратной связи */
  rule?: string;
  /** Объяснение после правильного ответа */
  why: string;
  /** Фраза, которая попадает в разговорник */
  phrase?: Phrase;
}

export interface AssembleStep extends BaseStep {
  kind: "assemble";
  tag: string;
  q: string;
  words: string[];
  answer: string;
  note?: string;
  rule?: string;
  why: string;
  phrase?: Phrase;
}

export interface FillStep extends BaseStep {
  kind: "fill";
  tag: string;
  qBefore: string;
  qAfter: string;
  /** Русская подсказка-перевод всей фразы */
  hintRu: string;
  answer: string;
  note?: string;
  rule?: string;
  why: string;
  phrase?: Phrase;
}

export interface ListenStep extends BaseStep {
  kind: "listen";
  tag: string;
  q: string;
  /** Английская фраза, которую озвучиваем (текст на экране не показывается) */
  audio: string;
  options: ChoiceOption[];
  note?: string;
  rule?: string;
  why: string;
  phrase?: Phrase;
}

/** Вопрос к тексту или аудио (для reading / listening) */
export interface CompQuestion {
  q: string;
  options: ChoiceOption[];
  why: string;
}

export interface ReadingStep extends BaseStep {
  kind: "reading";
  tag: string;
  /** Заголовок текста (например, «Записка от Айданы») */
  title: string;
  /** Абзацы текста; поддерживается разметка {word|перевод} */
  text: string[];
  note?: string;
  questions: CompQuestion[];
  /** Фраза для разговорника (опционально) */
  phrase?: Phrase;
}

export interface ListeningStep extends BaseStep {
  kind: "listening";
  tag: string;
  /** Русское описание того, что сейчас прозвучит */
  intro: string;
  /** Аудио по предложениям — озвучиваются подряд; текст на экране не показывается */
  audio: string[];
  note?: string;
  questions: CompQuestion[];
  phrase?: Phrase;
}

export type Step = StoryStep | ChoiceStep | AssembleStep | FillStep | ListenStep | ReadingStep | ListeningStep;
export type TaskStep = ChoiceStep | AssembleStep | FillStep | ListenStep | ReadingStep | ListeningStep;

/** Раздел уровня, к которому относится глава */
export type Section = "quest" | "text" | "exercise";

export interface Chapter {
  slug: string;
  title: string;
  subtitle: string;
  /** Что ученик научится делать: показывается на обложке и как чек-лист в финале */
  goals?: string[];
  /** Раздел: квест (по умолчанию), текст для чтения или тренажёр-упражнение */
  section?: Section;
  /** Экзамен уровня: другая обложка, оценка по числу подсказок в финале */
  exam?: boolean;
  /** Этапы маршрута для прогресс-бара */
  stages: Stage[];
  steps: Step[];
  /** Новые слова главы для финального экрана */
  words: Phrase[];
}

/* ---------- Правила (грамматический справочник уровня) ---------- */

export interface RuleExample {
  en: string;
  ru: string;
}

export interface RuleMistake {
  wrong: string;
  right: string;
  note: string;
}

export interface RuleTable {
  head: string[];
  rows: string[][];
}

export interface RuleBlock {
  /** Якорь для оглавления */
  id: string;
  title: string;
  /** Одно-двухстрочная суть правила */
  summary: string;
  /** Абзацы объяснения простым языком */
  body: string[];
  table?: RuleTable;
  examples: RuleExample[];
  /** Типичные ошибки: как неправильно → как правильно */
  mistakes?: RuleMistake[];
}

export interface RuleGroup {
  /** Тема-раздел справочника, например «Времена» */
  heading: string;
  blocks: RuleBlock[];
}

export interface RulesSet {
  intro: string;
  groups: RuleGroup[];
}

/**
 * Юнит — учебная единица уровня по одной теме (как раздел в учебнике).
 * Порядок прохождения: правило → упражнения → квест → текст → проверка.
 */
export interface Unit {
  slug: string;
  /** Тема юнита: «Прошедшее время», «Сравнения» */
  title: string;
  subtitle: string;
  /** Чему научит юнит */
  goals?: string[];
  /** id блоков из справочника уровня — показываются прямо в юните */
  ruleIds: string[];
  /** Слаг главы-квеста */
  questSlug?: string;
  /** Слаги тренажёров */
  exerciseSlugs?: string[];
  /** Слаг текста для чтения и аудирования */
  textSlug?: string;
}

/** Задание на письмо: инструкция + подсказка + эталонный ответ + чек-лист самопроверки. */
export interface WritingPrompt {
  slug: string;
  title: string;
  /** Что нужно написать (по-русски) */
  instruction: string;
  /** Как построить ответ: план или опорные фразы */
  hint: string;
  minWords: number;
  /** Эталонный ответ на английском — открывается по кнопке */
  sample: string;
  /** Пункты самопроверки перед тем, как открыть эталон */
  checklist: string[];
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  level: string;
  /** Короткое имя уровня для «пути» (Starter, A1, A2…) */
  short?: string;
  emoji: string;
  comingSoon?: boolean;
  chapters: Chapter[];
  /** Навыки уровня в формате CEFR «я умею…» — цели и итоговый чек-лист */
  goals?: string[];
  /** Юниты уровня — основной учебный путь */
  units?: Unit[];
  /** Задания на письмо уровня */
  writing?: WritingPrompt[];
  /** Грамматический справочник уровня (раздел «Правила») */
  rules?: RulesSet;
  /** Анонсы будущих глав */
  upcoming?: string[];
  /** Программа курса-анонса — что будет внутри */
  syllabus?: string[];
}

export function chaptersOf(course: Course, section: Section): Chapter[] {
  return course.chapters.filter((ch) => (ch.section ?? "quest") === section);
}

/**
 * Тест на определение уровня. Есть не у каждого направления: он нужен там, где
 * ученик может прийти с уже накопленными знаниями (языки), и бессмыслен там,
 * где все начинают с нуля (программирование).
 */
export interface PlacementInfo {
  /** Заголовок страницы теста */
  title: string;
  /** Подводка под заголовком */
  lead: string;
  /** Надпись на кнопке со страницы направления */
  cta: string;
}

/**
 * Направление обучения (верхний уровень каталога): «Английский», «Python»…
 * Внутри направления — уровни (courses), внутри уровней — главы.
 */
export interface Track {
  slug: string;
  title: string;
  /** Короткий подзаголовок для карточки на главной */
  tagline: string;
  description: string;
  emoji: string;
  levels: Course[];
  comingSoon?: boolean;
  /** Тест уровня направления — если его нет, раздел просто не показывается */
  placement?: PlacementInfo;
  /** Программа направления-анонса */
  syllabus?: string[];
}

export function isTask(step: Step): step is TaskStep {
  return step.kind !== "story";
}

export function countTasks(chapter: Chapter): number {
  return chapter.steps.filter(isTask).length;
}
