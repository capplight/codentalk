/**
 * Проверка учебного содержания нового формата.
 *
 * Делается скриптом, а не глазами и не отдельным агентом: тысяча заданий
 * проверяется за секунду, бесплатно и без пропусков. Полный список правил —
 * в конце docs/format-uroka.md.
 *
 * Запуск:  npm run check:content
 *
 * Возвращает ненулевой код при ошибках, поэтому годится для проверки перед
 * сборкой. Замечания (пометка «замечание») сборку не останавливают.
 */
import {
  isTask,
  isProductive,
  type Block,
  type Course,
  type Lesson,
  type Module,
  type TaskBlock,
} from "../lib/content/types.ts";
import { checkPositionBalance } from "../lib/domain/testing.ts";
import { courses } from "../courses/index.ts";

const errors: string[] = [];
const warnings: string[] = [];

function fail(where: string, message: string): void {
  errors.push(`${where}: ${message}`);
}

function warn(where: string, message: string): void {
  warnings.push(`${where}: ${message}`);
}

/** Имя блока: латиница в нижнем регистре, цифры и дефис. */
const ID_SHAPE = /^[a-z0-9][a-z0-9-]*$/;

function isPermutation(answer: number[], length: number): boolean {
  if (answer.length !== length) return false;
  const seen = new Set(answer);
  if (seen.size !== length) return false;
  return answer.every((n) => Number.isInteger(n) && n >= 0 && n < length);
}

function blank(value: string | undefined | null): boolean {
  return !value || value.trim().length === 0;
}

// ---------------------------------------------------------------------------
// Задание — общее для упражнения в уроке и вопроса проверочной работы
// ---------------------------------------------------------------------------

function checkTask(task: TaskBlock, where: string): void {
  if (blank(task.prompt)) fail(where, "нет формулировки задания");
  if (blank(task.why)) {
    fail(
      where,
      "нет разбора: без объяснения после ответа задание не учит, а на этом держится " +
        "решение не ограничивать долю заданий с выбором"
    );
  }

  switch (task.kind) {
    case "choice": {
      if (task.options.length < 2) fail(where, "меньше двух вариантов ответа");
      const correct = task.options.filter((o) => o.correct).length;
      if (task.multiple) {
        if (correct < 2) fail(where, "выбор нескольких, но верных вариантов меньше двух");
      } else if (correct !== 1) {
        fail(where, `верных вариантов ${correct}, а должен быть ровно один`);
      }
      if (correct === task.options.length) {
        fail(where, "верны все варианты — выбирать не из чего");
      }
      break;
    }

    case "gap": {
      if (blank(task.answer)) fail(where, "пустой ответ");
      if (blank(task.before) && blank(task.after)) {
        fail(where, "пропуск не окружён текстом — непонятно, куда вставлять");
      }
      break;
    }

    case "hottext": {
      const selectable = task.parts.filter((p) => p.selectable);
      const correct = task.parts.filter((p) => p.correct);
      if (selectable.length < 2) fail(where, "меньше двух отмечаемых частей");
      if (correct.length === 0) fail(where, "не отмечена ни одна верная часть");
      if (correct.some((p) => !p.selectable)) {
        fail(where, "верная часть не помечена как отмечаемая — её нельзя выбрать");
      }
      if (correct.length === selectable.length) {
        fail(where, "верны все отмечаемые части — задание проходится выделением всего подряд");
      }
      if (task.parts.some((p) => blank(p.text))) fail(where, "пустая часть текста");
      break;
    }

    case "order": {
      if (task.items.length < 2) fail(where, "меньше двух частей для расстановки");
      if (!isPermutation(task.answer, task.items.length)) {
        fail(where, "ответ не перестановка всех позиций: есть пропуски, повторы или чужие номера");
      }
      break;
    }

    case "match": {
      if (task.left.length !== task.right.length) {
        fail(where, `слева ${task.left.length} пунктов, справа ${task.right.length}`);
      }
      if (!isPermutation(task.answer, task.left.length)) {
        fail(where, "ответ не перестановка: пара найдётся не для каждого пункта");
      }
      break;
    }

    case "short": {
      if (blank(task.answer)) fail(where, "пустой ответ");
      break;
    }

    case "essay": {
      if (blank(task.sample)) fail(where, "нет образца ответа");
      if (task.checklist.length === 0) {
        fail(where, "нет списка для самопроверки — машина такой ответ не оценивает");
      }
      break;
    }

    case "code": {
      const { mustContain, mustNotContain } = task.check;
      if ((mustContain?.length ?? 0) === 0 && (mustNotContain?.length ?? 0) === 0) {
        fail(where, "нечего проверять: не задано ни одного условия");
      }
      break;
    }

    case "speak": {
      if (blank(task.phrase)) fail(where, "нет фразы для произнесения");
      break;
    }
  }
}

// ---------------------------------------------------------------------------
// Блок материала
// ---------------------------------------------------------------------------

function checkMaterial(block: Block, where: string): void {
  switch (block.kind) {
    case "explain":
      if (block.text.length === 0) fail(where, "объяснение пустое");
      if (block.text.some(blank)) fail(where, "пустой абзац в объяснении");
      break;

    case "example":
      if (blank(block.code) && blank(block.text)) fail(where, "в примере нет ни кода, ни текста");
      if (blank(block.explain)) fail(where, "пример без разбора — это картинка, а не пример");
      break;

    case "table": {
      if (block.head.length === 0) fail(where, "у таблицы нет заголовков столбцов");
      if (block.rows.length === 0) fail(where, "таблица без строк");
      const wrong = block.rows.filter((r) => r.length !== block.head.length).length;
      if (wrong > 0) fail(where, `в ${wrong} строках число ячеек не совпадает с числом столбцов`);
      break;
    }

    case "note":
      if (blank(block.text)) fail(where, "врезка пустая");
      break;

    case "audio":
      if (blank(block.src)) fail(where, "нет ссылки на запись");
      if (blank(block.transcript)) {
        fail(where, "нет расшифровки — запись бесполезна без наушников и недоступна глухим");
      }
      break;

    case "image":
      if (blank(block.src)) fail(where, "нет ссылки на изображение");
      if (blank(block.alt)) fail(where, "нет описания изображения");
      break;

    case "vocab": {
      if (block.items.length === 0) fail(where, "набор слов пустой");
      block.items.forEach((item, i) => {
        const at = `${where}, слово ${i + 1}`;
        if (blank(item.term)) fail(at, "нет самого слова");
        if (blank(item.translation)) fail(at, "нет перевода");
        if (blank(item.example)) fail(at, "нет примера употребления: слово без окружения не запоминается");
      });
      break;
    }
  }
}

// ---------------------------------------------------------------------------
// Урок
// ---------------------------------------------------------------------------

function checkLesson(lesson: Lesson, where: string): void {
  if (blank(lesson.outcome)) {
    fail(where, "нет итога урока — нечего проверять проверочной работой");
  }
  if (lesson.blocks.length === 0) {
    fail(where, "урок пустой");
    return;
  }

  const tasks = lesson.blocks.filter(isTask);
  if (tasks.length === 0) {
    fail(where, "в уроке нет ни одного задания: упражнения обязательны всегда");
  }

  const seen = new Set<string>();
  for (const block of lesson.blocks) {
    const at = `${where} → ${block.id || "блок без имени"}`;

    if (blank(block.id)) {
      fail(at, "у блока нет имени, а к имени привязываются пометки и заметки учеников");
    } else if (!ID_SHAPE.test(block.id)) {
      fail(at, "имя блока не по образцу: латиница в нижнем регистре, цифры и дефис");
    } else if (seen.has(block.id)) {
      fail(at, "имя блока повторяется внутри урока");
    }
    seen.add(block.id);

    if (isTask(block)) checkTask(block, at);
    else checkMaterial(block, at);
  }

  // Время урока против числа блоков. Оценка грубая: объяснение читают около
  // минуты, задание занимает примерно полторы. Расхождение больше пяти минут
  // означает, что оценку либо не пересчитали после правки, либо взяли с потолка.
  const materials = lesson.blocks.length - tasks.length;
  const expected = Math.round(materials * 1 + tasks.length * 1.5);
  if (lesson.estimatedMinutes < 8 || lesson.estimatedMinutes > 15) {
    warn(
      where,
      `указано ${lesson.estimatedMinutes} минут, формат рассчитан на 8–15: длинный урок лучше разделить`
    );
  }
  if (Math.abs(lesson.estimatedMinutes - expected) > 5) {
    warn(
      where,
      `указано ${lesson.estimatedMinutes} минут, по числу блоков выходит около ${expected}`
    );
  }
}

// ---------------------------------------------------------------------------
// Модуль
// ---------------------------------------------------------------------------

function checkModule(mod: Module, where: string): void {
  if (mod.sources.length === 0) {
    fail(where, "не заполнены источники: содержание не сочиняется самостоятельно");
  }
  if (mod.outcomes.length === 0) fail(where, "у модуля не указано, чему он учит");
  if (mod.lessons.length === 0) fail(where, "в модуле нет уроков");

  const lessonSlugs = new Set<string>();
  for (const lesson of mod.lessons) {
    if (lessonSlugs.has(lesson.slug)) fail(where, `имя урока «${lesson.slug}» повторяется`);
    lessonSlugs.add(lesson.slug);
    checkLesson(lesson, `${where} → ${lesson.slug}`);
  }

  const quizWhere = `${where} → проверочная`;
  const questions = mod.quiz.questions;

  if (questions.length === 0) {
    fail(quizWhere, "нет ни одного вопроса");
    return;
  }

  const ids = new Set<string>();
  for (const question of questions) {
    const at = `${quizWhere} → ${question.id || "вопрос без имени"}`;
    if (blank(question.id)) fail(at, "у вопроса нет имени");
    else if (ids.has(question.id)) fail(at, "имя вопроса повторяется");
    ids.add(question.id);
    checkTask(question, at);
  }

  // Каждый итог урока проверяется хотя бы одним вопросом.
  const covered = new Set(questions.map((q) => q.outcome));
  for (const lesson of mod.lessons) {
    if (!covered.has(lesson.outcome)) {
      fail(
        `${where} → ${lesson.slug}`,
        "итог урока не проверяется ни одним вопросом проверочной работы — " +
          "значит время ученика потрачено впустую"
      );
    }
  }

  // И наоборот: вопрос, помеченный итогом, которого нет ни у одного урока,
  // почти всегда описка в длинной строке.
  const lessonOutcomes = new Set(mod.lessons.map((l) => l.outcome));
  for (const question of questions) {
    if (!lessonOutcomes.has(question.outcome)) {
      fail(
        `${quizWhere} → ${question.id}`,
        `помечен итогом, которого нет ни у одного урока: «${question.outcome}»`
      );
    }
  }

  // Больше половины вопросов требуют произвести ответ, а не узнать его среди
  // подсказок. Решение 3 в docs/format-uroka.md.
  const productive = questions.filter((q) => isProductive(q.kind)).length;
  if (productive * 2 <= questions.length) {
    fail(
      quizWhere,
      `${productive} вопросов из ${questions.length} требуют произвести ответ, ` +
        "а должно быть больше половины: узнавание среди подсказок не показывает знаний"
    );
  }

  if (mod.quiz.ask !== undefined && mod.quiz.ask > questions.length) {
    fail(quizWhere, `просит показать ${mod.quiz.ask} вопросов, а в банке их ${questions.length}`);
  }
  if (mod.quiz.ask !== undefined && mod.quiz.ask === questions.length && questions.length > 4) {
    warn(quizWhere, "показываются все вопросы банка — при пересдаче ученик увидит те же самые");
  }

  // Положение верного ответа среди вариантов.
  const choices = questions.filter((q) => q.kind === "choice");
  if (choices.length > 0) {
    const indexes = choices.map((q) =>
      q.kind === "choice" ? q.options.findIndex((o) => o.correct) : -1
    );
    const optionCount = Math.max(
      ...choices.map((q) => (q.kind === "choice" ? q.options.length : 0))
    );
    const report = checkPositionBalance(indexes, optionCount);
    for (const problem of report.problems) fail(quizWhere, problem);
  }
}

// ---------------------------------------------------------------------------

function checkCourse(course: Course): void {
  const where = course.slug;
  if (course.modules.length === 0) fail(where, "в курсе нет модулей");

  const slugs = new Set<string>();
  for (const mod of course.modules) {
    if (slugs.has(mod.slug)) fail(where, `имя модуля «${mod.slug}» повторяется`);
    slugs.add(mod.slug);
    checkModule(mod, `${where} → ${mod.slug}`);
  }
}

for (const course of courses) checkCourse(course);

// ---------------------------------------------------------------------------
// Итог
// ---------------------------------------------------------------------------

let lessons = 0;
let tasks = 0;
let minutes = 0;
for (const course of courses) {
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      lessons += 1;
      minutes += lesson.estimatedMinutes;
      tasks += lesson.blocks.filter(isTask).length;
    }
    tasks += mod.quiz.questions.length;
  }
}

console.log(
  `Проверено: курсов ${courses.length}, уроков ${lessons}, заданий ${tasks}, ` +
    `учебного времени ${Math.round((minutes / 60) * 10) / 10} ч`
);

if (warnings.length > 0) {
  console.log(`\nЗамечания (${warnings.length}) — сборку не останавливают:`);
  for (const w of warnings) console.log(`  · ${w}`);
}

if (errors.length > 0) {
  console.error(`\nОшибки (${errors.length}):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error("\nСодержание с ошибками выкладывать нельзя.");
  process.exit(1);
}

console.log("\nОшибок нет.");
