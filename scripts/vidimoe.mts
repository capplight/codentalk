/**
 * Всё, что в уроке видит ученик, — по порядку и с указанием, что это за кусок.
 *
 * Отсюда берут двое: `npm run tekst` печатает урок для редактора, `npm run
 * yazyk` проверяет по этим же кускам русский язык. Общий разбор нужен затем,
 * чтобы редактор и проверка смотрели ровно на один и тот же текст.
 *
 * ГЛАВНОЕ ТРЕБОВАНИЕ — НИЧЕГО НЕ ПОТЕРЯТЬ И НИЧЕГО НЕ ПРИДУМАТЬ. Поэтому здесь
 * два разбора сразу: подробный, который знает про каждый вид блока и называет
 * роль куска, и слепой, который просто собирает все строки объекта. Слепой
 * проверяет подробный: если строка есть в блоке, а в кусках её нет, скрипт
 * говорит об этом вслух. Без такой сверки любая правка формата урока тихо
 * выкинула бы часть текста из проверки, и никто бы не заметил.
 */
import { isTask, type Block, type Lesson, type Module } from "../lib/content/types.ts";
import { zvuchashchee } from "../lib/content/zvuk.ts";

export interface Kusok {
  /** Урок и блок, чтобы замечание можно было найти. */
  gde: string;
  /** Что это: объяснение, врезка, условие задания, разбор, произношение… */
  rol: string;
  text: string;
}

/**
 * Поля, которых ученик не видит: имена, признаки, номера правильных ответов.
 * Нужны слепому разбору — иначе он потребует показать ученику слово `hottext`.
 */
const NEVIDIMYE = new Set([
  "id", "kind", "src", "correct", "selectable", "exact", "multiple",
  "minWords", "planned", "pace", "voice", "answer", "check", "tone",
  // Появились вместе с чтением и слушанием. `about` — имя блока, `genre` —
  // вид текста, `skryt` — прятать ли расшифровку. Ни одно из них ученик не
  // читает: это разметка, а не текст.
  "about", "genre", "skryt", "razgovor",
  // `zvuchat` — список строк, которые звучат сами собой. Подробный разбор
  // берёт их через `zvuchashchee`, и слепому они не нужны.
  "zvuchat",
]);

/** Слепой разбор: все строки блока, кроме заведомо невидимых полей. */
function vseStroki(b: any): string[] {
  const out: string[] = [];
  const walk = (v: unknown, klyuch: string): void => {
    if (NEVIDIMYE.has(klyuch)) return;
    if (typeof v === "string") { if (v.trim()) out.push(v); return; }
    if (Array.isArray(v)) { v.forEach((x) => walk(x, klyuch)); return; }
    if (v && typeof v === "object") {
      for (const [k, x] of Object.entries(v)) walk(x, k);
    }
  };
  for (const [k, v] of Object.entries(b)) walk(v, k);
  return out;
}

/** Подробный разбор одного блока. Порядок кусков — порядок чтения. */
function kuskiBloka(b: any, gde: string): Kusok[] {
  const k: Kusok[] = [];
  const dobavit = (rol: string, text: unknown): void => {
    if (typeof text === "string" && text.trim()) k.push({ gde, rol, text });
  };

  switch (b.kind) {
    case "explain":
      (b.text ?? []).forEach((p: string) => dobavit("объяснение", p));
      break;
    case "example":
      dobavit("подпись примера", b.caption);
      dobavit("пример", b.code ?? b.text);
      dobavit("разбор примера", b.explain);
      // Звук у строки примера ученик слышит, значит его тоже надо проверять.
      for (const chto of Object.values(zvuchashchee(b))) dobavit("звук строки примера", chto);
      break;
    case "table":
      dobavit("подпись таблицы", b.caption);
      // Строка целиком, а не по ячейкам: таблица читается строками, и редактору
      // нужна она же. Сверка на потерянное смотрит вхождение, а не совпадение,
      // поэтому склейка ничего не прячет.
      dobavit("заголовки таблицы", (b.head ?? []).join(" | "));
      (b.rows ?? []).forEach((r: string[]) => dobavit("строка таблицы", r.join(" | ")));
      for (const chto of Object.values(zvuchashchee(b))) dobavit("звук ячейки", chto);
      break;
    case "note":
      dobavit(b.tone === "mistake" ? "врезка об ошибке" : "врезка", b.text);
      break;
    case "audio":
      dobavit("подпись записи", b.caption);
      dobavit("расшифровка записи", b.transcript);
      break;
    case "image":
      dobavit("описание рисунка", b.alt);
      dobavit("подпись рисунка", b.caption);
      break;
    case "text":
      dobavit("заголовок текста", b.title);
      (b.body ?? []).forEach((p: string) => dobavit("текст для чтения", p));
      for (const it of b.glossary ?? []) {
        dobavit("слово из текста", it.term);
        dobavit("перевод слова из текста", it.translation);
      }
      break;
    case "vocab":
      dobavit("подпись словаря", b.caption);
      for (const it of b.items ?? []) {
        dobavit("слово", it.term);
        dobavit("перевод", it.translation);
        dobavit("пример к слову", it.example);
        dobavit("произношение", it.hint);
      }
      break;

    // ---- задания ----
    default:
      dobavit("условие задания", b.prompt);
      dobavit("подсказка", b.hint);
      dobavit("разбор задания", b.why);
      // Ученик её не читает, а слышит, но проверять её всё равно нужно: это
      // английский текст курса, и ошибка в нём такая же ошибка.
      dobavit("запись к заданию", b.zvuk);
      switch (b.kind) {
        case "choice":
          (b.options ?? []).forEach((o: any) =>
            dobavit(o.correct ? "верный вариант" : "неверный вариант", o.text));
          break;
        case "gap":
          dobavit("начало предложения", b.before);
          dobavit("конец предложения", b.after);
          dobavit("ответ", b.answer);
          (b.accept ?? []).forEach((a: string) => dobavit("принимаемый ответ", a));
          break;
        case "hottext":
          (b.parts ?? []).forEach((p: any) => dobavit("часть текста", p.text));
          break;
        case "order":
          (b.items ?? []).forEach((i: string) => dobavit("часть для сборки", i));
          break;
        case "match":
          (b.left ?? []).forEach((i: string) => dobavit("слева", i));
          (b.right ?? []).forEach((i: string) => dobavit("справа", i));
          break;
        case "short":
          dobavit("ответ", b.answer);
          (b.accept ?? []).forEach((a: string) => dobavit("принимаемый ответ", a));
          break;
        case "essay":
          dobavit("образец ответа", b.sample);
          (b.checklist ?? []).forEach((c: string) => dobavit("пункт самопроверки", c));
          break;
        case "code":
          dobavit("заготовка кода", b.starter);
          break;
        case "speak":
          dobavit("что произнести", b.phrase);
          dobavit("перевод", b.translation);
          break;
      }
  }
  return k;
}

/** Куски блока плюс список того, что подробный разбор не увидел. */
export function kuskiSSverkoy(b: Block, gde: string): { kuski: Kusok[]; poteryano: string[] } {
  const kuski = kuskiBloka(b as any, gde);
  // Вхождение, а не совпадение: строка таблицы склеена из ячеек, и каждая
  // ячейка внутри неё цела. Требовать точного совпадения значило бы объявить
  // потерянным то, что на месте.
  const vsyo = kuski.map((k) => k.text).join("\n");
  const poteryano = vseStroki(b as any).filter((s) => !vsyo.includes(s));
  return { kuski, poteryano };
}

export function kuskiUroka(mod: Module, les: Lesson): { kuski: Kusok[]; poteryano: string[] } {
  const kuski: Kusok[] = [{ gde: `${mod.slug} → ${les.slug}`, rol: "название урока", text: les.title }];
  kuski.push({ gde: `${mod.slug} → ${les.slug}`, rol: "итог урока", text: les.outcome });
  const poteryano: string[] = [];

  for (const b of les.blocks as Block[]) {
    const gde = `${mod.slug} → ${les.slug} → ${b.id}`;
    const r = kuskiSSverkoy(b, gde);
    kuski.push(...r.kuski);
    poteryano.push(...r.poteryano.map((s) => `${gde}: ${s}`));
  }
  return { kuski, poteryano };
}

export function kuskiModulya(mod: Module): { kuski: Kusok[]; poteryano: string[] } {
  const kuski: Kusok[] = [{ gde: mod.slug, rol: "название модуля", text: mod.title }];
  mod.outcomes.forEach((o) => kuski.push({ gde: mod.slug, rol: "итог модуля", text: o }));
  const poteryano: string[] = [];

  for (const les of mod.lessons) {
    const r = kuskiUroka(mod, les);
    kuski.push(...r.kuski);
    poteryano.push(...r.poteryano);
  }
  for (const q of mod.quiz.questions) {
    const gde = `${mod.slug} → проверочная работа → ${q.id}`;
    const r = kuskiSSverkoy(q as unknown as Block, gde);
    // Поле outcome вопроса — служебное: оно повторяет итог урока и ученику не
    // показывается, поэтому в потерянное не идёт.
    kuski.push(...r.kuski);
    poteryano.push(...r.poteryano.filter((s) => s !== (q as any).outcome).map((s) => `${gde}: ${s}`));
  }
  return { kuski, poteryano };
}

/** Только задания: нужно проверкам, которые смотрят на требуемое от ученика. */
export function zadaniyaModulya(mod: Module): Block[] {
  const out: Block[] = [];
  for (const les of mod.lessons) out.push(...(les.blocks as Block[]).filter(isTask));
  out.push(...(mod.quiz.questions as unknown as Block[]));
  return out;
}
