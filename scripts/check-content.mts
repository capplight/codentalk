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
  type Quiz,
  type TaskBlock,
} from "../lib/content/types.ts";
import { checkPositionBalance } from "../lib/domain/testing.ts";
import {
  adresBloka,
  adresObrazca,
  adresRazgovora,
  adresSlova,
  adresVoprosa,
  adresYacheyki,
  zvuchashchee,
} from "../lib/content/zvuk.ts";
import { nayti } from "../lib/content/vozvrat.ts";
import { resheno } from "../courses/resheno.ts";
import { courses } from "../courses/index.ts";
import { existsSync } from "node:fs";
import { join } from "node:path";

const errors: string[] = [];
const warnings: string[] = [];

/**
 * Заготовки записей: место размечено, звука ещё нет.
 *
 * При обычной проверке они не ошибка — содержание пишется раньше озвучки.
 * Но выкладывать урок, где ученику обещан звук, а его нет, нельзя, поэтому
 * `--release` превращает их в ошибку.
 */
const planned: string[] = [];
const releaseMode = process.argv.includes("--release");

function fail(where: string, message: string): void {
  errors.push(`${where}: ${message}`);
}

/**
 * Замечания, о которых уже принято решение, молчат.
 *
 * До 20 августа `resheno.ts` читала одна-единственная проверка, а `warn()`
 * складывал всё подряд. Из-за этого разобранные случаи — с записанной причиной,
 * с именем решившего — висели в отчёте вечно. Скрипт, который каждый раз
 * спрашивает об одном и том же, перестают читать, и вместе со старым замечанием
 * теряется новое.
 *
 * Ошибок это не касается: замолчать можно то, что решает методист, а не то, что
 * неверно наверняка.
 */
const zamolchali: string[] = [];

/**
 * Разобран ли отдельный случай.
 *
 * Нужна отдельно от `warn()`, потому что часть замечаний собирается пачкой: в
 * одной строке отчёта перечислены все вопросы модуля. Замолчать такую строку
 * целиком нельзя — вместе с разобранным вопросом пропал бы соседний, о котором
 * ещё никто не думал. Поэтому решённые отсеиваются по одному, до сборки пачки.
 */
function razobrano(chto: string): boolean {
  const nayden = resheno.some((r) => chto.includes(r.chto));
  if (nayden) zamolchali.push(chto);
  return nayden;
}

function warn(where: string, message: string): void {
  const stroka = `${where}: ${message}`;
  if (resheno.some((r) => stroka.includes(r.chto))) {
    zamolchali.push(stroka);
    return;
  }
  warnings.push(stroka);
}

/**
 * Задание «исправь и запиши» без `exact: true`.
 *
 * Сверка ответа по умолчанию снимает регистр (`normalize` в
 * `lib/content/check.ts`). Значит задание, где вся ошибка — в маленькой букве,
 * засчитает дословно переписанную из условия ошибку как верный ответ. Комментарий
 * об этом стоит в самом `check.ts` с пометкой «проверено опытом: засчитывало», и
 * всё-таки 20 августа я написал такое задание снова — в работе части, где его
 * нашёл методист.
 *
 * Проверка ищет в условии строку, которая от ответа отличается ТОЛЬКО регистром,
 * и требует `exact`. Где ошибка не в регистре — молчит: там снятие регистра
 * ничего не портит.
 */
function trebuetExact(task: any): boolean {
  if (task.exact === true) return false;
  const otvet = typeof task.answer === "string" ? task.answer : "";
  if (!otvet.trim()) return false;

  const chistka = (v: string): string =>
    v
      .trim()
      .replace(/[«»"“”`]/g, "")
      .replace(/[’‘]/g, "'")
      .replace(/[.!?]+$/, "")
      .replace(/\s+/g, " ");

  const cel = chistka(otvet);
  const uslovie = String(task.prompt ?? "") + " " + String(task.before ?? "");
  // Куски условия в кавычках — там и стоит испорченная строка.
  for (const kusok of uslovie.match(/«[^»]+»/gu) ?? []) {
    const kandidat = chistka(kusok.slice(1, -1));
    if (kandidat === cel) continue;
    if (kandidat.toLowerCase() === cel.toLowerCase()) return true;
  }
  return false;
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
// Понятность текста
//
// Владелец прошёл полтора модуля и сказал главное: «описания очень сложные и
// непонятные… ты отталкиваешься от структуры у себя в голове, не учитывая
// представление ученика». Часть этой беды видна машине, и то, что видно машине,
// машина и ловит — глазами такое пропускается.
// ---------------------------------------------------------------------------

/**
 * Слова нашей кухни. Ученику они не говорят ничего.
 *
 * «Источник называет пять сочетаний», «описание первой ступени предполагает»,
 * «британская норма, которой держится курс» — за этими словами стоит наша
 * работа с материалами, а не устройство языка. Ученик про источники не знает и
 * знать не должен: он пришёл учить английский. Обоснование остаётся в поле
 * `sources` — оно для проверяющего.
 */
const KITCHEN_WORDS: Array<[RegExp, string]> = [
  [/источник/i, "«источник» — ученик не знает, что за источник, и не должен"],
  [/ступен[иья]|ступень/i, "разговор о ступенях — это наша разметка, а не язык"],
  [/дескриптор|словник|руководство для/i, "название нашей внутренней бумаги"],
  [/Cambridge|Oxford|Совет[а]? Европы|English Grammar Profile/i, "название источника в тексте урока"],
  [/держится курс|наш курс|курс держится|в курсе принят/i, "разговор об устройстве курса вместо языка"],
  // Границы модуля — тоже наша разметка. «В этом модуле наречие идёт после
  // don't» описывает наше решение, а не язык; ученик не знает, где кончается
  // модуль, и не должен знать. Нашёл редактор в модуле 17.
  [/в этом модуле|в этом уроке правило|начинающему (проще|легче)/i,
    "границы модуля и разговор о начинающем — это наша разметка, а не язык"],
];

/**
 * Длинное предложение. Предел выбран по живому тексту уроков: почти всё
 * написанное укладывается в двадцать слов, а то, что переваливает за двадцать
 * два, — это две-три мысли, слипшиеся через тире и запятые. Ровно на таких
 * местах владелец и ставил пометку «непонятно».
 *
 * Это замечание, а не ошибка: длина — признак беды, а не сама беда.
 */
const SENTENCE_LIMIT = 22;

/** Абзац объяснения, который читается как стена. */
const PARAGRAPH_LIMIT = 400;

function sentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?…])\s+(?=[А-ЯЁA-Z«—])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function words(sentence: string): number {
  return sentence.split(/\s+/).filter((w) => /[а-яёa-z]/i.test(w)).length;
}

/** Проверить кусок текста, который читает ученик. */
function checkProse(text: string | undefined, where: string, what: string): void {
  if (!text) return;

  for (const [pattern, why] of KITCHEN_WORDS) {
    const hit = text.match(pattern);
    if (hit) warn(where, `${what}: ${why} — «${hit[0]}»`);
  }

  for (const sentence of sentences(text)) {
    const count = words(sentence);
    if (count > SENTENCE_LIMIT) {
      warn(
        where,
        `${what}: предложение из ${count} слов — раздели его. «${sentence.slice(0, 60)}…»`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Задание — общее для упражнения в уроке и вопроса проверочной работы
// ---------------------------------------------------------------------------

/**
 * Два одинаковых варианта в одном задании.
 *
 * Не суждение, а поломка: ученик видит на экране две одинаковые кнопки и решает,
 * что сайт сломан, а выбор из трёх превращается в выбор из двух. Появляется это
 * при замене одной строки на ту, что в списке уже есть, — и однажды так и
 * доехало до боевого сайта, потому что не ловил ни один скрипт.
 */
function checkDubli(task: any, where: string): void {
  const spiski: Array<[string, string[]]> = [
    ["вариант", (task.options ?? []).map((o: any) => o.text)],
    ["часть", (task.parts ?? []).filter((p: any) => p.selectable).map((p: any) => p.text)],
    ["часть для сборки", task.items ?? []],
    ["пункт слева", task.left ?? []],
    ["пункт справа", task.right ?? []],
  ];
  for (const [chto, spisok] of spiski) {
    const vidno = new Set<string>();
    for (const text of spisok as string[]) {
      if (typeof text !== "string") continue;
      // Сравниваем с учётом заглавных: в модуле 12 стоит задание, где вся
      // разница между двумя частями — это буква S в слове Shop. Приведение к
      // нижнему регистру объявило бы верное задание сломанным.
      const klyuch = text.trim();
      if (vidno.has(klyuch)) fail(where, `в задании повторяется ${chto}: «${klyuch}»`);
      vidno.add(klyuch);
    }
  }
}

/**
 * Работа не должна быть зеркалом уроков.
 *
 * Написана после того, как три модуля подряд дали одну и ту же ошибку: я писал
 * проверочную работу ПОСЛЕ заданий уроков и по их образцу, меняя одно слово. В
 * модуле 24 из двадцати четырёх подсказок девятнадцать совпадали с урочными
 * буква в букву. Ученик тогда отвечает по узнаванию вида задания, а не разбирая
 * языковой факт заново, и работа перестаёт что-либо показывать.
 *
 * Ни один проверяющий этого сам не находил: методист говорил «вид задания почти
 * везде меняется», а совпадали не виды, а слова. Зато сравнение строк — работа
 * ровно для машины.
 *
 * Сравниваем без учёта заглавных, знаков и «ё». Короткие подсказки в три слова
 * и меньше пропускаем: «Учи их парами» может честно повториться.
 */
function slova(text: string): string {
  return text
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .join(" ");
}

function sobratPodskazki(tasks: TaskBlock[]): string[] {
  const out: string[] = [];
  for (const task of tasks) {
    for (const pole of [task.hint, (task as any).why]) {
      if (typeof pole === "string" && pole.trim()) out.push(pole);
    }
  }
  return out;
}

function checkRabotaNePovtoryaetUroki(mod: Module, where: string): void {
  const urochnye = new Set<string>();
  // Сырые строки нужны отдельно: разбить на предложения можно только по
  // знакам препинания, а в очищенных их уже нет. На этом первая редакция
  // проверки и промолчала.
  const syryeUrochnye: string[] = [];
  for (const lesson of mod.lessons) {
    const tasks = lesson.blocks.filter((b: any) => isTask(b)) as TaskBlock[];
    for (const text of sobratPodskazki(tasks)) {
      urochnye.add(slova(text));
      syryeUrochnye.push(text);
    }
  }

  /*
   * Хвосты урочных подсказок. Разбор часто начинается с самого ответа, а
   * дальше идёт объяснение — и именно объяснение повторяется дословно, при
   * том что вся строка целиком не совпадает.
   *
   * Настоящий случай, модуль 1: «D-A-N-A. Буквы называют по одной, на письме
   * их разделяет дефис» в уроке и «A-L-I-M. Буквы называют по одной, на
   * письме их разделяет дефис» в работе. Первая проверка это пропускала —
   * нашёл методист. Здесь сравниваются и хвосты, начиная со второго
   * предложения.
   */
  const hvosty = new Set<string>();
  for (const text of syryeUrochnye) {
    const chasti = text.split(/(?<=[.!?])\s+/);
    for (let i = 1; i < chasti.length; i++) {
      const hvost = slova(chasti.slice(i).join(" "));
      if (hvost.split(" ").length >= 5) hvosty.add(hvost);
    }
  }

  const povtory: string[] = [];
  for (const question of mod.quiz.questions as any[]) {
    for (const pole of [question.hint, question.why]) {
      if (typeof pole !== "string" || !pole.trim()) continue;
      const klyuch = slova(pole);
      if (klyuch.split(" ").length <= 3) continue;
      if (urochnye.has(klyuch)) {
        povtory.push(`${question.id}: «${pole}»`);
        continue;
      }
      const chasti = pole.split(/(?<=[.!?])\s+/);
      for (let i = 1; i < chasti.length; i++) {
        const hvost = slova(chasti.slice(i).join(" "));
        if (hvost.split(" ").length >= 5 && hvosty.has(hvost)) {
          povtory.push(`${question.id}: хвост разбора — «${chasti.slice(i).join(" ")}»`);
          break;
        }
      }
    }
  }

  if (povtory.length > 0) {
    fail(
      `${where} → проверочная`,
      `подсказка или разбор повторяют урок слово в слово (${povtory.length} шт.):\n      ` +
        povtory.join("\n      ") +
        "\n      Работа проверяет знание, а не память на вид задания: перепиши своими словами"
    );
  }
}

/**
 * Второй способ списать у самого себя: не слова разбора, а условие и сам пример.
 *
 * Проверка выше сравнивает подсказки и разборы. Методист вторым проходом по
 * модулю 2 нашёл ту же породу с другой стороны: условие работы совпадало с
 * урочным посимвольно («Допиши просьбу повторить: „Ещё раз, пожалуйста“»), а
 * фраза была та же самая — урок закрывал в ней одно слово, работа другое.
 * Разбор при этом был написан заново, и первая проверка молчала.
 *
 * Рядом нашлось и повторение самого примера: предложение «I ___ Dana.» стояло
 * в двух уроках и третий раз в работе — с тем же пропуском и тем же ответом.
 *
 * ДВА УРОВНЯ, И ГРАНИЦА МЕЖДУ НИМИ ВЫВЕРЕНА ОПЫТОМ. Первая редакция объявляла
 * ошибкой любое совпавшее условие — и на первом же прогоне обвинила девятнадцать
 * верных мест. «Допиши форму глагола be», «Сопоставь букву и её название» — это
 * не сценарий, а голое указание, какого рода работа предстоит; у двух разных
 * заданий оно совпадает законно. Скрипт, который кричит на правильное, хуже, чем
 * никакого: его перестают читать.
 *
 * Поэтому ошибка — только когда совпало И условие, И сам пример: это одно и то
 * же задание, переписанное дважды. Совпало что-то одно — вопрос методисту.
 */
/*
 * Части складываются через «|», и это не украшение. Первая редакция склеивала
 * их пробелом и прогоняла через `slova`, а он вычищает все знаки — граница
 * между «до пропуска», «ответом» и «после» пропадала. Проверку испытали
 * нарочно испорченным заданием, и она промолчала: ровно та мёртвая проверка,
 * против которой в этом проекте заведено правило.
 */
function yadroZadaniya(task: any): string {
  const chasti = (xs: any[]): string => xs.map((x) => slova(String(x ?? ""))).join(" | ");
  switch (task.kind) {
    case "gap":
      return chasti([task.before, task.answer, task.after]);
    case "short":
      return slova(String(task.answer ?? ""));
    case "order":
      return chasti([...(task.items ?? [])]);
    case "choice":
      return chasti([...(task.options ?? [])].map((o: any) => o.text));
    case "hottext":
      return chasti([...(task.parts ?? [])].map((p: any) => p.text));
    case "match":
      return chasti([...(task.left ?? []), ...(task.right ?? [])]);
    default:
      return "";
  }
}

/** Сколько в ядре настоящих слов — разделители не в счёт. */
function slovVYadre(yadro: string): number {
  return yadro.split("|").join(" ").split(/\s+/).filter(Boolean).length;
}

function checkRabotaNePovtoryaetZadaniya(mod: Module, where: string): void {
  const usloviya = new Map<string, string>();
  const yadra = new Map<string, string>();

  for (const lesson of mod.lessons) {
    for (const block of lesson.blocks as any[]) {
      if (!isTask(block)) continue;
      const uslovie = slova(String(block.prompt ?? ""));
      if (uslovie.split(" ").length > 3 && !usloviya.has(uslovie)) {
        usloviya.set(uslovie, `${lesson.slug} → ${block.id}`);
      }
      const yadro = yadroZadaniya(block);
      // Ядро в одно-два слова ничего не значит: ответом бывает одно слово, и
      // совпадёт оно у десятка заданий подряд.
      if (slovVYadre(yadro) >= 3 && !yadra.has(yadro)) {
        yadra.set(yadro, `${lesson.slug} → ${block.id}`);
      }
    }
  }

  const sovpali: string[] = [];
  const pohozhi: string[] = [];
  for (const question of mod.quiz.questions as any[]) {
    const uslovie = slova(String(question.prompt ?? ""));
    const yadro = yadroZadaniya(question);
    const gdeUslovie = usloviya.get(uslovie);
    const gdeYadro = yadro ? yadra.get(yadro) : undefined;

    if (gdeUslovie && gdeYadro) {
      sovpali.push(`${question.id}: то же задание, что ${gdeYadro} — «${question.prompt}»`);
    } else if (gdeUslovie) {
      if (!razobrano(question.id))
        pohozhi.push(`${question.id}: условие как у ${gdeUslovie} — «${question.prompt}»`);
    } else if (gdeYadro) {
      if (!razobrano(question.id))
        pohozhi.push(`${question.id}: тот же пример, что в ${gdeYadro}`);
    }
  }

  if (sovpali.length > 0) {
    fail(
      `${where} → проверочная`,
      `вопрос повторяет задание урока условием и примером сразу (${sovpali.length} шт.):\n      ` +
        sovpali.join("\n      ") +
        "\n      Это то же задание во второй раз: ученик узнаёт его раньше, чем читает"
    );
  }
  if (pohozhi.length > 0) {
    warn(
      `${where} → проверочная`,
      `вопрос перекликается с заданием урока (${pohozhi.length} шт.):\n      ` +
        pohozhi.join("\n      ") +
        "\n      Иногда это законно — голое указание или единственная в курсе фраза. Решает методист"
    );
  }
}

/**
 * Третий способ списать у самого себя — самый незаметный: ответ работы уже
 * напечатан в материале урока.
 *
 * Методист нашёл это в модуле 4. Работа просила написать вопрос целиком, и
 * верный ответ — «Is she from Turkey?» — оказался самой частой строкой всего
 * модуля: она стояла в двух таблицах, в разговоре, в расшифровке записи и в
 * задании на сопоставление. Ученик вспоминал картинку из таблицы, а перестановку
 * слов, ради которой задание и написано, не делал ни разу.
 *
 * Проверить это глазами нельзя: надо помнить весь модуль целиком. Зато машине
 * ровно на один проход.
 *
 * ПОЧЕМУ ЭТО ВОПРОС, А НЕ ОШИБКА. Один-два раза ответ и должен встретиться:
 * фраза сначала показывается, потом отрабатывается. Решает методист.
 *
 * ДВА ПОРОГА, И ОБА ВЫВЕРЕНЫ ПЕРВЫМ ПРОГОНОМ. Без них проверка выдала 39
 * замечаний, и почти все были на устойчивых оборотах: «Yes, I am», «No, I'm
 * not», «I am Alim». Их в модуле и должно быть много — курс им и учит, а
 * другого способа ответить на вопрос с be просто нет. Обвинять их — значит
 * требовать переписать то, что верно.
 *
 * Поэтому смотрим только на ответы от четырёх слов: короткий устойчивый оборот
 * так не выразишь, а собранное предложение — да. И считаем от четырёх
 * повторений: три — это обычная жизнь примера (показали, разобрали, свели).
 */
function sobratMaterial(lesson: any): string[] {
  const out: string[] = [];
  const sobrat = (x: any): void => {
    if (typeof x === "string") out.push(x);
    else if (Array.isArray(x)) x.forEach(sobrat);
    else if (x && typeof x === "object") {
      for (const [klyuch, znachenie] of Object.entries(x)) {
        // id, kind, tone и прочее служебное в счёт не идёт.
        if (["id", "kind", "tone", "pace", "voice", "slug"].includes(klyuch)) continue;
        sobrat(znachenie);
      }
    }
  };
  for (const block of lesson.blocks) if (!isTask(block)) sobrat(block);
  return out;
}

function otvetZadaniya(task: any): string {
  switch (task.kind) {
    // Задание на вставку сюда не входит намеренно. Там предложение и так стоит
    // перед глазами целиком, а произвести надо одно слово: то, что фраза знакома
    // по материалу, работе не мешает. Речь только о заданиях, где ученик строит
    // предложение сам.
    case "short":
      return String(task.answer ?? "");
    case "order":
      return (task.answer ?? []).map((i: number) => (task.items ?? [])[i]).join(" ");
    default:
      return "";
  }
}

const CHASTOTA_PREDELA = 4;
const DLINA_PREDELA = 4;

/**
 * Верный ответ задания напечатан во врезке ВЫШЕ него, в том же уроке.
 *
 * ЗАЧЕМ. Это самая частая ошибка приёмки 19 августа: во всех пяти уроках письма
 * первое задание отвечалось не разбором языка, а взглядом на два абзаца вверх.
 * Врезка называла ошибку и тут же давала верную запись, а задание спрашивало
 * ровно её. Методист нашёл это дважды подряд — и второй раз потому, что правка
 * ПЕРЕНЕСЛА совпадение с неверного варианта на верный.
 *
 * Смотрим только назад по уроку: врезка ПОСЛЕ задания — это разбор, и повтор в
 * ней законен. И только дословное совпадение от трёх слов: короткие обороты
 * вроде «I'm a student» ходят по курсу законно.
 *
 * Это сведения, а не ошибка. Иногда повтор нужен — задание на узнавание строки
 * из врезки бывает и осмысленным. Решает методист.
 */
const DLINA_UTECHKI = 4;

function checkOtvetNeStoitVyshe(lesson: any, where: string): void {
  const bylo: string[] = [];
  const utechki: string[] = [];

  const dlinnee = (s: string): boolean =>
    s.trim().split(/\s+/).filter(Boolean).length >= DLINA_UTECHKI;

  for (const block of lesson.blocks) {
    // Копим ТОЛЬКО врезки. Текст для чтения, пример и таблица — предмет
    // задания, и повтор из них законен: задание на то и дано, чтобы в них
    // смотреть. Утечка бывает из врезки, которая назвала ошибку и тут же
    // дала верную запись.
    if (!isTask(block)) {
      if (block.kind === "note") bylo.push(...sobratMaterial({ blocks: [block] }));
      continue;
    }

    // Задание, привязанное к тексту или записи, читает их по условию —
    // совпадение с ними не утечка. И задание на отметку частей: в нём
    // разобранные строки стоят по самому его устройству.
    if ((block as any).about || block.kind === "hottext") continue;

    const material = slova(bylo.join(" . "));
    if (!material) continue;

    // Что считается верным ответом: строка `answer`, а у выбора — текст
    // верного варианта. Подсказка и разбор не в счёт: их читают после.
    const otvety: string[] = [];
    const b = block as any;
    if (typeof b.answer === "string") otvety.push(b.answer);
    for (const o of b.options ?? []) if (o.correct) otvety.push(o.text);
    for (const p of b.parts ?? []) if (p.correct) otvety.push(p.text);

    for (const otvet of otvety) {
      if (!dlinnee(otvet)) continue;
      if (material.includes(slova(otvet))) {
        if (!razobrano(block.id)) utechki.push(`${block.id}: «${otvet.trim()}»`);
      }
    }
  }

  if (utechki.length > 0) {
    warn(
      where,
      `верный ответ напечатан выше по уроку (${utechki.length} шт.):\n      ` +
        utechki.join("\n      ") +
        "\n      Ученик найдёт его глазами, не разбирая язык. Решает методист"
    );
  }
}

function checkOtvetNePropechatan(mod: Module, where: string): void {
  const kuski: string[] = [];
  for (const lesson of mod.lessons) kuski.push(...sobratMaterial(lesson));
  const material = slova(kuski.join(" . "));

  const chasto: string[] = [];
  for (const question of mod.quiz.questions as any[]) {
    const syroy = otvetZadaniya(question).trim();
    // Длину считаем по сырой строке: `slova` рвёт «I'm» на два куска, и короткий
    // оборот из трёх слов проходил бы за четырёхсловный.
    if (syroy.split(/\s+/).filter(Boolean).length < DLINA_PREDELA) continue;
    const otvet = slova(syroy);
    if (!otvet) continue;
    let skolko = 0;
    let ot = material.indexOf(otvet);
    while (ot >= 0) {
      skolko++;
      ot = material.indexOf(otvet, ot + 1);
    }
    if (skolko >= CHASTOTA_PREDELA) {
      if (!razobrano(question.id))
        chasto.push(
          `${question.id}: «${otvetZadaniya(question).trim()}» — в материале ${skolko} раз`
        );
    }
  }

  if (chasto.length > 0) {
    warn(
      `${where} → проверочная`,
      `ответ вопроса напечатан в материале много раз (${chasto.length} шт.):\n      ` +
        chasto.join("\n      ") +
        "\n      Такой ответ вспоминают картинкой, а не строят. Решает методист"
    );
  }
}

function checkTask(task: TaskBlock, where: string): void {
  if (blank(task.prompt)) fail(where, "нет формулировки задания");
  checkDubli(task, where);

  if (trebuetExact(task)) {
    fail(
      where,
      "нужен exact: true — вся ошибка в условии сводится к регистру, а сверка по " +
        "умолчанию его снимает: дословно переписанная из условия ошибка засчитается верной"
    );
  }

  checkProse(task.prompt, where, "условие");
  checkProse(task.hint, where, "подсказка");
  checkProse(task.why, where, "разбор");
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
      // Части показываются в том порядке, в каком записаны. Если верный порядок
      // совпадает с записанным, задание решено ещё до открытия страницы.
      if (task.answer.every((n, i) => n === i)) {
        warn(where, "верный порядок совпадает с записанным — задание уже расставлено правильно");
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
      // Правая колонка показывается в записанном порядке. Если ответ — это
      // «первый к первому, второй ко второму», задание решается выбором верхнего
      // пункта в каждом списке, не читая. Та же беда, что была в первой версии
      // с верным ответом всегда на первом месте.
      if (task.answer.length > 1 && task.answer.every((n, i) => n === i)) {
        fail(
          where,
          "пары стоят напротив друг друга — задание решается выбором первого пункта в каждом списке"
        );
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

/**
 * Разбор примера считает строки — сходится ли счёт.
 *
 * ЗАЧЕМ. Самая дорогая ошибка 20 августа 2026, и она же самая незаметная.
 * Дописав в примеры по строке-две, я не тронул разборы под ними, и ДЕВЯТЬ
 * блоков стали лгать: «Три отдельные строки» при пяти, «Во всех трёх строках»
 * при четырёх, «Три вопроса подряд: место, погода, люди» при четырёх вопросах.
 * Ни `check:content`, ни `kontrol`, ни `yazyk` не сказали ничего: блоки целы,
 * слова свои, ступень выдержана. Нашли методист и редактор — оба, независимо,
 * пересчитав строки руками.
 *
 * Ошибка эта не разовая, а неизбежная: правка примера и разбор под ним лежат в
 * разных местах файла, и второе забывается всегда. Значит ей место в скрипте.
 *
 * КАК УСТРОЕНО. Ищем в разборе и подписи числительное — словом («три», «пять»)
 * или цифрой — и сравниваем с числом строк примера. Ошибкой не объявляем:
 * числительное в разборе может считать не строки, а что-то внутри них («у всех
 * трёх один смысл» при пяти строках — это про три случая написания). Поэтому
 * ВОПРОС: решает человек, а скрипт лишь показывает расхождение.
 */
const CHISLITELNYE: Record<string, number> = {
  "одна": 1, "одну": 1, "одно": 1, "один": 1, "одной": 1, "одном": 1,
  "два": 2, "две": 2, "двух": 2, "оба": 2, "обе": 2,
  "три": 3, "трёх": 3, "трех": 3,
  "четыре": 4, "четырёх": 4, "четырех": 4,
  "пять": 5, "пяти": 5,
  "шесть": 6, "шести": 6,
  "семь": 7, "семи": 7,
  "восемь": 8, "восьми": 8,
};

function checkChisloStrok(block: any, where: string): void {
  const strok = String(block.text ?? "").split("\n").map((s: string) => s.trim()).filter(Boolean).length;
  if (!strok) return;

  // Смотрим подпись и ПЕРВОЕ предложение разбора: счёт всего примера стоит
  // именно там — «Три отдельные строки…», «Пять дел подряд…». Дальше по разбору
  // числительные считают части («в первых двух строках речь об одном человеке»),
  // и брать их за общий счёт нельзя.
  const pervoe = String(block.explain ?? "").split(/(?<=[.!?])\s/)[0] ?? "";
  const govorit = `${block.caption ?? ""} ${pervoe}`.toLowerCase();
  const nazvano = new Set<number>();

  // Указание на часть примера — не счёт примера. Порядковое слово перед
  // числительным («в ПЕРВЫХ двух строках», «во ВТОРОЙ и третьей») означает
  // ровно это. Первая редакция их не отличала и дала двадцать срабатываний на
  // верном — при девяти настоящих ошибках это уже не проверка, а шум.
  if (/перв|втор|треть|четвёрт|четверт|пят(ой|ая)|последн/i.test(govorit)) return;

  // Считаем только те числительные, которые считают ИМЕННО строки примера.
  // Первая редакция брала любое число в разборе и дала полсотни срабатываний на
  // верном: «одну букву», «два звука», «в первой строке». Скрипт, который
  // кричит на правильное, хуже, чем никакого, — поэтому числительное засчитано,
  // только если сразу за ним (через слово-другое) стоит то, что в примере
  // считают построчно.
  // Строка и предложение — это ровно то, что в примере считают построчно.
  const STROKA = "строк|предложен";
  // А вопросы, дела и глаголы бывают не в каждой строке: в разговоре из четырёх
  // реплик вопросов два, и подпись «Два вопроса в разговоре» верна. Их считаем
  // только при слове-итоге — «подряд», «во всех», «отдельные»: оно и означает,
  // что перечислено содержимое примера целиком.
  const NE_VSEGDA_STROKA = "вопрос|дел[оа]|глагол|ответ";
  const ITOG = /подряд|всех|всём|отдельн/i;

  const proverit = (chislo: number, hvost: string): void => {
    const re = new RegExp(`${hvost}[^а-яё]+([а-яё]+[^а-яё]+)?(${STROKA})`, "i");
    const reMyagko = new RegExp(`${hvost}[^а-яё]+([а-яё]+[^а-яё]+)?(${NE_VSEGDA_STROKA})`, "i");
    if (re.test(govorit)) nazvano.add(chislo);
    else if (reMyagko.test(govorit) && ITOG.test(govorit)) nazvano.add(chislo);
  };

  for (const [slovo, chislo] of Object.entries(CHISLITELNYE)) {
    // Границу слова ищем сами: \b в JavaScript кириллицы не знает, и на этом
    // проект уже обжигался — проверка калек не находила «дедлайн» никогда.
    proverit(chislo, `(^|[^а-яёa-z])${slovo}`);
  }
  for (let c = 1; c <= 9; c += 1) proverit(c, `(^|[^\\d])${c}`);

  // Предложений в примере может быть больше, чем строк: «Hello! I'm Dana. I'm
  // from Almaty.» — одна строка и три предложения, и подпись «Три предложения о
  // себе» верна. Считаем и то, и другое.
  const predlozheniy = String(block.text ?? "")
    .split(/[.!?]+/)
    .map((s: string) => s.trim())
    .filter(Boolean).length;

  if (!nazvano.size || nazvano.has(strok) || nazvano.has(predlozheniy)) return;

  // Разбор вправе делить пример на части: «В четырёх строках сказано, чего не
  // было, и в одной — что было» при пяти строках верно. Если названные числа
  // складываются в число строк, счёт сходится.
  const summa = [...nazvano].reduce((a, b) => a + b, 0);
  if (summa === strok) return;

  // Разговор считают репликами: в обмене из четырёх строк вопросов два, и
  // подпись «Два вопроса в разговоре» верна. Числа реплик там не совпадут со
  // строками никогда.
  if (block.razgovor) return;

  warn(
    where,
    `в примере ${strok} строк, а разбор называет ${[...nazvano].sort().join(" и ")}. ` +
      "Либо счёт разошёлся с примером, либо числительное считает не строки — посмотри глазами"
  );
}

/**
 * Все ли строки примера звучат.
 *
 * ЗАЧЕМ. Проверка выше по файлу ловит обратное — звучащую строку, которой в
 * примере нет. А случай, когда строка есть, а звука у неё нет, молчал: образец
 * письма в модуле 2 ступени Elementary держал четыре строки и две кнопки, и так
 * лежал с самого написания. Нашёл редактор, сверив `zvuchat` с `text` вручную.
 *
 * Не ошибка, а сведения: у примера законно бывают строки без звука — русская
 * подпись, дата цифрой, строка «так сказать нельзя» (CLAUDE.md, раздел о
 * звуке). Решает методист.
 */
function checkZvukPokryvaetPrimer(block: any, where: string): void {
  const stroki = String(block.text ?? "").split("\n").map((s: string) => s.trim()).filter(Boolean);
  const zvuchit = new Set(Object.keys(zvuchashchee(block)));
  // Пример без звука вовсе — отдельный разговор, его ведёт checkGdeNetZvuka.
  if (!zvuchit.size || !stroki.length) return;

  // Часть строк не звучит по правилу, а не по недосмотру (CLAUDE.md, раздел о
  // звуке): русские подписи и транскрипцию читают глазами, дата цифрой читается
  // порядковым числительным, которого на ступени ещё нет, строка с двоеточием —
  // это заголовок столбца, а не речь.
  const molchitPoPravilu = (s: string): boolean =>
    /[а-яё]/i.test(s) || /\d/.test(s) || s.endsWith(":");

  const nemye = stroki.filter((s) => !zvuchit.has(s) && !molchitPoPravilu(s));
  if (!nemye.length) return;

  warn(
    where,
    `звучат не все строки примера: молчат ${nemye.map((s) => `«${s}»`).join(", ")}`
  );
}

function checkMaterial(block: Block, where: string): void {
  switch (block.kind) {
    case "explain":
      if (block.text.length === 0) fail(where, "объяснение пустое");
      if (block.text.some(blank)) fail(where, "пустой абзац в объяснении");
      block.text.forEach((paragraph, i) => {
        checkProse(paragraph, where, `абзац ${i + 1}`);
        if (paragraph.length > PARAGRAPH_LIMIT) {
          warn(
            where,
            `абзац ${i + 1}: ${paragraph.length} знаков — с телефона это стена текста, раздели`
          );
        }
      });
      break;

    case "example": {
      if (blank(block.code) && blank(block.text)) fail(where, "в примере нет ни кода, ни текста");

      // Звучащая строка, которой в примере нет, — это кнопка, которая никогда
      // не появится. Опечатка в ключе иначе не видна ничем.
      {
        const stroki = new Set(
          (block.text ?? "").split("\n").map((s) => s.trim()).filter(Boolean)
        );
        for (const klyuch of Object.keys(zvuchashchee(block))) {
          if (!stroki.has(klyuch)) {
            fail(where, `звучащая строка примера «${klyuch}» в тексте не найдена`);
          }
        }
      }

      // Разговор звучит целиком и по репликам делится по строкам. Без текста
      // делить нечего.
      if (block.razgovor && blank(block.text)) {
        fail(where, "пример помечен разговором, но текста в нём нет");
      }

      if (blank(block.explain)) fail(where, "пример без разбора — это картинка, а не пример");
      checkProse(block.explain, where, "разбор примера");
      checkChisloStrok(block, where);
      checkZvukPokryvaetPrimer(block, where);
      break;
    }

    case "table": {
      if (block.head.length === 0) fail(where, "у таблицы нет заголовков столбцов");
      if (block.rows.length === 0) fail(where, "таблица без строк");
      const wrong = block.rows.filter((r) => r.length !== block.head.length).length;
      if (wrong > 0) fail(where, `в ${wrong} строках число ячеек не совпадает с числом столбцов`);

      // Звучащая ячейка, которой в таблице нет, — это кнопка, которая никогда
      // не появится. Опечатка в ключе иначе не видна ничем.
      {
        const yacheyki = new Set(block.rows.flat());
        for (const klyuch of Object.keys(zvuchashchee(block))) {
          if (!yacheyki.has(klyuch)) {
            fail(where, `звучащая ячейка «${klyuch}» в таблице не найдена — опечатка в ключе`);
          }
        }
      }
      break;
    }

    case "note":
      if (blank(block.text)) fail(where, "врезка пустая");
      checkProse(block.text, where, "врезка");
      break;

    case "audio":
      // Расшифровка нужна и заготовке: по ней потом и делается запись
      if (blank(block.transcript)) {
        fail(where, "нет расшифровки — запись бесполезна без наушников и недоступна глухим");
      }
      if (block.planned) {
        if (!blank(block.src)) {
          fail(where, "заготовка помечена planned, но ссылка на запись уже есть — сними пометку");
        }
        planned.push(where);
      }
      // Ссылку на запись здесь не требуем: адрес выводится из самого текста
      // (lib/content/zvuk.ts), а есть ли файл — проверяет checkZvuk ниже. Она
      // же ловит расхождение, когда фразу поправили, а переозвучить забыли.
      break;

    case "image":
      if (blank(block.src)) fail(where, "нет ссылки на изображение");
      if (blank(block.alt)) fail(where, "нет описания изображения");
      break;

    case "text": {
      if (block.body.length === 0) fail(where, "текст пустой");
      if (block.body.some(blank)) fail(where, "пустой абзац в тексте");
      const slov = block.body.join(" ").split(/\s+/).filter(Boolean).length;
      // Порог зависит от вида текста. Объявление, вывеска и меню коротки по
      // своей природе: описания Совета Европы, с. 56, называют текстом даже
      // «Parking» и «No smoking». Требовать от них пятнадцати слов значит
      // запретить самый частый вид чтения на первых ступенях — на этом
      // проверка и споткнулась о настоящее меню из четырёх строк.
      const predel = block.genre === "notice" ? 6 : 15;
      if (slov < predel) {
        fail(
          where,
          `в тексте ${slov} слов, а нужно хотя бы ${predel} — это не текст, а пример; ` +
            "возьми вид example"
        );
      }
      // Порог взят с запасом: у Cambridge самый длинный текст экзамена A2 —
      // один «long text» на пять вопросов. Это не ошибка, а повод посмотреть.
      if (slov > 250) {
        warn(where, `в тексте ${slov} слов — на первых ступенях это много, решает методист`);
      }
      block.glossary?.forEach((item, i) => {
        const at = `${where}, слово словарика ${i + 1}`;
        if (blank(item.term)) fail(at, "нет самого слова");
        if (blank(item.translation)) fail(at, "нет перевода");
        // Заголовок — часть текста: «LOST AND FOUND» стоит именно в нём, и
        // объяснять его надо, а искать только в теле было ошибкой проверки.
        if (![...block.body, block.title ?? ""].some((p) => p.includes(item.term))) {
          warn(at, `«${item.term}» объяснено, но в тексте не встречается — проверить`);
        }
      });
      break;
    }

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

/**
 * Привязка заданий к источнику — тексту для чтения или записи.
 *
 * Три беды, каждая из которых видна скрипту и почти не видна глазу.
 *
 * 1. Задание ссылается на блок, которого нет. Опечатка в имени — и ученик
 *    отвечает на вопрос о неизвестно чём.
 * 2. Задание на слух стоит при записи с открытой расшифровкой. Тогда это не
 *    аудирование, а чтение: ответ лежит строкой ниже вопроса.
 * 3. Расшифровка спрятана, а спрашивать по записи нечего. Тогда мы просто
 *    отняли текст у того, кому он нужен, и не дали взамен ничего.
 */
function checkPrivyazka(lesson: Lesson, where: string): void {
  const poImeni = new Map(lesson.blocks.map((b) => [b.id, b]));
  const sprosheno = new Set<string>();

  for (const block of lesson.blocks) {
    if (!isTask(block)) continue;
    const pro = (block as { about?: string }).about;
    if (!pro) continue;

    const at = `${where} → ${block.id}`;
    const istochnik = poImeni.get(pro);

    if (!istochnik) {
      fail(at, `задание о блоке «${pro}», а такого блока в уроке нет`);
      continue;
    }
    if (istochnik.kind !== "text" && istochnik.kind !== "audio") {
      fail(at, `задание о блоке «${pro}», но тот не текст и не запись, а ${istochnik.kind}`);
      continue;
    }
    sprosheno.add(pro);

    if (istochnik.kind === "audio" && !istochnik.skryt) {
      fail(
        at,
        `задание по записи «${pro}», но её расшифровка на виду — это чтение, а не ` +
          "понимание на слух. Поставь записи skryt: true"
      );
    }

    // Ответ, которого в тексте нет, ученику не выиграть. Ищем только у заданий с
    // одним словесным ответом: у выбора и сопоставления искать нечего.
    if (istochnik.kind === "text" && (block.kind === "short" || block.kind === "gap")) {
      const otvet = String((block as { answer?: string }).answer ?? "").trim().toLowerCase();
      const telo = istochnik.body.join(" ").toLowerCase();
      // Замечание, а не ошибка: «не нашёл» — это не «нет». В этом проекте вывод
      // об отсутствии строки четырежды оказывался неверным.
      if (otvet.length > 2 && !telo.includes(otvet)) {
        warn(at, `ответ «${otvet}» в тексте «${pro}» не нашёлся — проверить, есть ли он там`);
      }
    }
  }

  for (const block of lesson.blocks) {
    if (block.kind === "audio" && block.skryt && !sprosheno.has(block.id)) {
      fail(
        `${where} → ${block.id}`,
        "расшифровка спрятана, а заданий по записи нет: текст отняли, взамен не дали ничего"
      );
    }
  }
}

/**
 * ВОЗВРАЩЕНИЕ: задание из пройденного модуля, взятое ссылкой.
 *
 * Проверка нужна ровно потому, что ссылка дешевле копии: сломанную копию видно
 * глазами, а сломанную ссылку — нет. Урок с ней просто не покажет задания, и
 * ученик не узнает, что его обманули.
 *
 * Испытано нарочно испорченным содержанием: ссылка вперёд, ссылка на себя,
 * ссылка на блок материала, повтор одной ссылки в уроке.
 */
function checkVozvrat(course: Course, mod: Module, lesson: Lesson, where: string): void {
  if (!lesson.vozvrat?.length) return;

  const nomerModulya = course.modules.findIndex((m) => m.slug === mod.slug);
  const vidennye = new Set<string>();

  for (const ssylka of lesson.vozvrat) {
    const klyuch = `${ssylka.iz}/${ssylka.zadanie}`;
    if (vidennye.has(klyuch)) {
      fail(where, `возвращение «${klyuch}» стоит в уроке дважды`);
      continue;
    }
    vidennye.add(klyuch);

    const otkuda = course.modules.findIndex((m) => m.slug === ssylka.iz);
    if (otkuda === -1) {
      fail(where, `возвращение ссылается на модуль «${ssylka.iz}», которого в курсе нет`);
      continue;
    }
    if (otkuda === nomerModulya) {
      fail(where, `возвращение «${klyuch}» ссылается на свой же модуль — это не возвращение`);
      continue;
    }
    if (otkuda > nomerModulya) {
      fail(
        where,
        `возвращение «${klyuch}» ссылается ВПЕРЁД, на модуль ${otkuda + 1}: ` +
          `ученик его ещё не проходил`
      );
      continue;
    }

    const naydeno = nayti(course, ssylka);
    if (!naydeno) {
      const modul = course.modules[otkuda];
      const estBlok = modul.lessons.some((l) => l.blocks.some((b) => b.id === ssylka.zadanie));
      fail(
        where,
        estBlok
          ? `возвращение «${klyuch}» ссылается на блок материала, а не на задание`
          : `возвращение «${klyuch}»: задания с таким именем в модуле нет`
      );
    }
  }
}

/**
 * Подсказка обещает место в тексте, а ответ стоит не там.
 *
 * Написана 21 августа 2026 по разбору модуля 5 Elementary. Задание спрашивало
 * «Кто был болен?», ответом стояло `chef`, а подсказка говорила «последнее слово
 * записи после слова was». Запись кончается на `The chef was ill.`: последнее
 * слово там `ill`, и слово после `was` — тоже `ill`. Подсказка уводила ровно в
 * неверный ответ, а читают её как раз те, кто не уверен.
 *
 * Проверяем только те обещания, которые машина может пересчитать: «первое
 * слово», «последнее слово», «первая строка», «последняя строка». Остальное
 * («сразу после», «в той же реплике») остаётся редактору.
 */
function checkPodskazkaObeshchaetMesto(lesson: any, where: string): void {
  const poId = new Map<string, any>();
  for (const b of lesson.blocks) if (b.id) poId.set(b.id, b);

  const tekstBloka = (b: any): string => {
    if (!b) return "";
    if (typeof b.transcript === "string") return b.transcript;
    if (Array.isArray(b.body)) return b.body.join("\n");
    if (typeof b.text === "string") return b.text;
    if (Array.isArray(b.text)) return b.text.join("\n");
    return "";
  };

  const golo = (s: string): string =>
    s.toLowerCase().replace(/[^a-zA-Z0-9'\s]/g, " ").replace(/\s+/g, " ").trim();

  for (const block of lesson.blocks) {
    if (!isTask(block)) continue;
    const t = block as any;
    const podskazka: string = [t.hint, t.why].filter(Boolean).join(" ");
    if (!podskazka) continue;
    if (typeof t.answer !== "string" || !t.answer.trim()) continue;

    // Что именно обещано. Проверяем ровно одно обещание — «последнее слово», —
    // и только его: испытание на всём курсе показало, что «первое слово» и
    // «первая строка» в подсказках почти всегда значат не то, что в них
    // написано буквально («первая вещь в списке», «в первой строке считай
    // часы»), и проверка на них кричала бы на верное.
    const proSlovo = /последн[а-яё]*\s+слово/i.test(podskazka);
    if (!proSlovo) continue;

    const istochnik = tekstBloka(poId.get(t.about)) || (typeof t.zvuk === "string" ? t.zvuk : "");
    if (!istochnik.trim()) continue;

    const otvet = golo(t.answer);
    // Ответ цифрой сверять нечем: в записи стоит слово («ninety»), в ответе 90.
    if (!otvet || !/^[a-z' ]+$/.test(otvet)) continue;

    const slova = golo(istochnik).split(" ").filter(Boolean);
    if (slova.length < 2) continue;
    const nuzhno = slova[slova.length - 1];
    // Ответ бывает с артиклем: `the chef`. Сверяем по последнему слову ответа.
    const hvost = otvet.split(" ").filter(Boolean).pop()!;
    if (hvost !== nuzhno && !razobrano(block.id)) {
      warn(
        `${where} → ${block.id}`,
        `подсказка обещает последнее слово, а там «${nuzhno}», ответ же «${hvost}»
      ` +
          "Читают подсказку те, кто не уверен: неверная уводит прямо в неверный ответ"
      );
    }
  }
}

/**
 * Условие говорит о человеке в третьем лице, а принимается вопрос на `you`.
 *
 * Написана 21 августа 2026 по разбору модуля 5 Elementary. Условие «Спроси по-
 * английски, ездил ли твой сослуживец отдыхать в палатке» принимало только
 * `Did you go camping?` — а `Did he go camping?` буквально отвечает на условие и
 * безупречен по-английски. Ученик пишет верно и читает «пока не так».
 *
 * Лечится двумя способами: доопределить условие («обратись к нему на you») либо
 * вписать формы с `he` в `accept`. Проверка смотрит оба.
 */
function checkTretyeLitsoPriOtveteNaYou(lesson: any, where: string): void {
  const TRETYE = /(^|[^а-яё])(он|его|ему|им|сослуживец|сослуживца|собеседник|собеседника|знакомый|знакомого|подруг|друг)([^а-яё]|$)/i;
  // Замечание снимается, если условие само называет, к кому обращаться. Тогда
  // третье лицо в условии — не тот, о ком вопрос, а тот, о ком в вопросе речь:
  // «Спроси у собеседника, знает ли он Алима» → Do you know Alim? Здесь всё
  // однозначно, и придираться не к чему.
  const SNYATO = /\byou\b|обратись|о\s+себе|собеседник|спроси\s+у\b|у\s+него\b|у\s+неё\b/i;

  for (const block of lesson.blocks) {
    if (!isTask(block)) continue;
    const t = block as any;
    if (typeof t.answer !== "string") continue;
    if (!/\byou\b/i.test(t.answer)) continue;

    const uslovie: string = t.prompt ?? "";
    if (!TRETYE.test(uslovie)) continue;
    if (SNYATO.test(uslovie)) continue;

    // Если третье лицо уже принимается — придираться не к чему.
    const prinimaem: string[] = [t.answer, ...(t.accept ?? [])];
    if (prinimaem.some((s) => /\b(he|she|they)\b/i.test(s))) continue;
    if (razobrano(block.id)) continue;

    warn(
      `${where} → ${block.id}`,
      "условие говорит о человеке в третьем лице, а принимается только ответ с you\n      " +
        `«${uslovie.trim()}» → «${t.answer.trim()}»\n      ` +
        "Либо скажи в условии «обратись к нему на you», либо впиши форму с he в accept"
    );
  }
}

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

  checkPrivyazka(lesson, where);
  checkPodskazkaObeshchaetMesto(lesson, where);
  checkTretyeLitsoPriOtveteNaYou(lesson, where);

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

/**
 * Две подписи-близнеца в одном модуле.
 *
 * ЗАЧЕМ. 20 августа 2026 я переименовал пример первого урока в «Что было вчера»
 * — и ровно так же называлась запись урока слушания того же модуля. Ученик
 * видит одинаковые заголовки над разными вещами и решает, что вернулся назад.
 * Нашёл это я сам, перечитывая окружение правки, и только потому, что круг
 * проверяющих к тому времени закончился, — то есть случайно.
 *
 * Проверка дешёвая, а ошибка неизбежная: подписи придумываются по одной, а
 * читаются подряд.
 */
function checkPodpisiNePovtoryayutsya(mod: Module, where: string): void {
  const vidno = new Map<string, string>();
  for (const lesson of mod.lessons) {
    for (const b of lesson.blocks as any[]) {
      // Словарь в каждом уроке подписан «Слова урока» — это условность курса, а
      // не недосмотр: ученик по ней и узнаёт словарь. Первая редакция проверки
      // выдала на ней сто четырнадцать срабатываний, все на верном.
      if (b.kind === "vocab") continue;

      const podpis = String(b.caption ?? "").trim();
      if (!podpis) continue;
      const bylo = vidno.get(podpis.toLowerCase());
      if (bylo && bylo !== lesson.slug) {
        warn(
          where,
          `подпись «${podpis}» стоит и в уроке ${bylo}, и в уроке ${lesson.slug} — ` +
            "ученик читает их подряд и решит, что вернулся назад"
        );
      }
      if (!bylo) vidno.set(podpis.toLowerCase(), lesson.slug);
    }
  }
}

/**
 * Карточка, не встречающаяся нигде, кроме себя самой.
 *
 * ЗАЧЕМ. Найдено руками дважды: восемь таких карточек в модуле 6 ступени
 * Elementary (нашёл методист) и четыре в модуле 8 (нашёл счётом автор). Ученик
 * видит слово с одним придуманным примером и больше не встречает его никогда —
 * значит слово взято ради счёта, а не ради речи. Норма ступени требует
 * тридцати карточек на модуль, и соблазн добрать их пустыми велик.
 *
 * ЧТО СЧИТАЕТСЯ РАБОТОЙ. Любое употребление вне словарных блоков: объяснение,
 * таблица, пример, текст для чтения, расшифровка записи, условие задания,
 * вариант, подсказка, разбор, вопрос проверочной работы. Собственный пример
 * карточки не в счёт — он и есть то место, где слово стоит одиноко.
 *
 * ПОЧЕМУ ПОБЛАЖКА В ОКОНЧАНИЯХ. Ищем слово вместе с обычными английскими
 * окончаниями: `degree` работает строкой `twenty degrees`, `close` — строкой
 * `going to be closed`. Ошибиться здесь лучше в сторону молчания: скрипт,
 * который кричит на верное, перестают читать.
 *
 * Это сведения, а не ошибка: карточка, работающая только в словарике, иногда
 * законна — так вводят перечень дней недели или цветов. Решает методист.
 */
function checkKartochkaRabotaet(mod: Module, where: string): void {
  const kuski: string[] = [];
  const sobrat = (x: any): void => {
    if (typeof x === "string") kuski.push(x);
    else if (Array.isArray(x)) x.forEach(sobrat);
    else if (x && typeof x === "object") {
      for (const [klyuch, znachenie] of Object.entries(x)) {
        if (["id", "kind", "tone", "pace", "voice", "slug"].includes(klyuch)) continue;
        sobrat(znachenie);
      }
    }
  };

  const kartochki: { slovo: string; urok: string }[] = [];
  for (const lesson of mod.lessons) {
    for (const block of lesson.blocks as any[]) {
      if (block.kind === "vocab") {
        for (const item of block.items ?? []) {
          const slovo = String(item.term ?? "").trim();
          if (slovo) kartochki.push({ slovo, urok: lesson.slug });
        }
        continue;
      }
      sobrat(block);
    }
  }
  sobrat(mod.quiz);

  const tekst = kuski.join(" \n ").toLowerCase();
  const bez: string[] = [];

  for (const { slovo, urok } of kartochki) {
    // Многоточие в карточке — это место, куда ученик подставляет своё:
    // «Can I have…?». Искать его вместе с многоточием значит не найти никогда.
    const nizhnee = slovo.toLowerCase().replace(/[…?]/g, "").replace(/\.\.\./g, "").trim();
    let rabotaet: boolean;
    if (/\s/.test(nizhnee)) {
      // Составное имя ищем как есть: окончания к нему не приставляются.
      rabotaet = tekst.includes(nizhnee);
    } else {
      const osnova = nizhnee.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      rabotaet = new RegExp(`\\b${osnova}(s|es|ing|ed|d|'s)?\\b`).test(tekst);
    }
    if (!rabotaet) bez.push(`«${slovo}» (${urok})`);
  }

  if (bez.length > 0) {
    warn(
      where,
      `карточка не встречается в модуле нигде, кроме себя (${bez.length} шт.):\n      ` +
        bez.join(", ") +
        "\n      Слово с одним придуманным примером ученик не встретит больше никогда. Решает методист"
    );
  }
}

function checkModule(course: Course, mod: Module, where: string): void {
  if (mod.sources.length === 0) {
    fail(where, "не заполнены источники: содержание не сочиняется самостоятельно");
  }
  checkPodpisiNePovtoryayutsya(mod, where);
  checkKartochkaRabotaet(mod, where);
  if (mod.outcomes.length === 0) fail(where, "у модуля не указано, чему он учит");
  if (mod.lessons.length === 0) fail(where, "в модуле нет уроков");

  // Список итогов стоит на странице прямо над списком уроков, и ученик читает
  // их как одну лестницу. Значит и порядок должен быть один: третий итог —
  // третий урок. Расхождение находил редактор глазами, теперь ловится здесь.
  const byLesson: string[] = [];
  for (const lesson of mod.lessons) {
    if (!byLesson.includes(lesson.outcome)) byLesson.push(lesson.outcome);
  }
  for (const outcome of mod.outcomes) {
    if (!byLesson.includes(outcome)) {
      fail(where, `итог модуля не принадлежит ни одному уроку: «${outcome}»`);
    }
  }
  if (byLesson.length === mod.outcomes.length) {
    for (let i = 0; i < byLesson.length; i += 1) {
      if (byLesson[i] !== mod.outcomes[i]) {
        fail(
          where,
          `порядок итогов модуля не совпадает с порядком уроков: ${i + 1}-м стоит ` +
            `«${mod.outcomes[i]}», а урок на этом месте учит «${byLesson[i]}»`
        );
        break;
      }
    }
  } else {
    fail(
      where,
      `итогов у модуля ${mod.outcomes.length}, а разных итогов у уроков ${byLesson.length}`
    );
  }

  const lessonSlugs = new Set<string>();
  for (const lesson of mod.lessons) {
    if (lessonSlugs.has(lesson.slug)) fail(where, `имя урока «${lesson.slug}» повторяется`);
    lessonSlugs.add(lesson.slug);
    checkLesson(lesson, `${where} → ${lesson.slug}`);
    checkOtvetNeStoitVyshe(lesson, `${where} → ${lesson.slug}`);
    checkVozvrat(course, mod, lesson, `${where} → ${lesson.slug}`);
  }

  checkRabotaNePovtoryaetUroki(mod, where);
  checkRabotaNePovtoryaetZadaniya(mod, where);
  checkOtvetNePropechatan(mod, where);

  checkQuiz(mod.quiz, `${where} → проверочная`, {
    label: "проверочной работе",
    // Итоги уроков модуля: каждый должен быть проверен, и чужих быть не должно
    mustCover: mod.lessons.map((lesson) => ({ outcome: lesson.outcome, where: `${where} → ${lesson.slug}` })),
    allowed: new Set(mod.lessons.map((lesson) => lesson.outcome)),
  });
}

// ---------------------------------------------------------------------------
// Проверочная работа и экзамен — правила общие
// ---------------------------------------------------------------------------

interface QuizRules {
  /** Как называть работу в сообщениях: «проверочной работе», «экзамене» */
  label: string;
  /** Итоги, каждый из которых обязан быть проверен хотя бы одним вопросом */
  mustCover: Array<{ outcome: string; where: string }>;
  /** Итоги, которыми вопрос вообще может быть помечен */
  allowed: Set<string>;
}

function checkQuiz(quiz: Quiz, quizWhere: string, rules: QuizRules): void {
  const questions = quiz.questions;

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

    // Развёрнутый ответ и произнесение вслух машина не оценивает. В уроке это
    // уместно — там показывается эталон. Здесь такой вопрос либо повис бы без
    // оценки, либо был бы засчитан наугад.
    if (question.kind === "essay" || question.kind === "speak") {
      fail(at, `вид «${question.kind}» машина не оценивает — в ${rules.label} ему не место`);
    }
  }

  // Каждый итог проверяется хотя бы одним вопросом.
  const covered = new Set(questions.map((q) => q.outcome));
  for (const target of rules.mustCover) {
    if (!covered.has(target.outcome)) {
      fail(
        target.where,
        `итог не проверяется ни одним вопросом в ${rules.label} — ` +
          "значит время ученика потрачено впустую"
      );
    }
  }

  // И наоборот: вопрос, помеченный итогом, которого нет ни у одного урока,
  // почти всегда описка в длинной строке.
  for (const question of questions) {
    if (!rules.allowed.has(question.outcome)) {
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

  if (quiz.ask !== undefined && quiz.ask > questions.length) {
    fail(quizWhere, `просит показать ${quiz.ask} вопросов, а в банке их ${questions.length}`);
  }
  if (quiz.ask !== undefined && quiz.ask === questions.length && questions.length > 4) {
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

/**
 * Имя урока уникально во ВСЁМ курсе, а не только внутри модуля.
 *
 * ЗАЧЕМ. Адрес урока — `/learn/[курс]/[урок]`, модуль в нём не участвует. Два
 * урока с одним именем в разных модулях — это столкновение адресов: второй
 * недостижим. Проверка внутри модуля этого не видела.
 *
 * Нашлось не догадкой: 19 августа урок чтения модуля 6 получил то же имя
 * `chitaem-spisok-veshchey`, что урок модуля 8, и заодно тот же id блока и тот
 * же предмет. Поймал методист, глазами. Дальше ловит эта строка.
 */
/**
 * Усилительное `did` в утверждении — оборот ступени C1.
 *
 * Написана 21 августа 2026 по разбору модуля 5 Elementary. В образце письма
 * стояло `Yes, I did go to the stadium.` Это усилительное `did`: English Grammar
 * Profile ставит его на C1 (PAST past simple, «USE: FOR EMPHASIS, WITH 'DID'»).
 * Весь модуль учил обратному — `did` начинает вопрос, — а соседняя работа
 * объявляла похожую запись негодной. Ученик читает подряд и видит спор.
 *
 * Ищем `did` + глагол в строке без знака вопроса. Отрицание (`didn't`, `did
 * not`) под правило не подпадает: там `did` законно и на A2.
 */
function checkUsilitelnoeDid(course: Course): void {
  const nahodki: string[] = [];

  const smotret = (stroka: string, gde: string): void => {
    if (typeof stroka !== "string") return;
    for (const kusok of stroka.split(/\n/)) {
      // Вопрос — законное место для did, и там оно первое слово.
      if (kusok.includes("?")) continue;
      // Русская речь о did («слово did уже сказало о прошлом») — не предмет.
      if (/[а-яё]/i.test(kusok)) continue;
      // Усиление узнаётся по порядку: подлежащее стоит ПЕРЕД did («I did go»).
      // В вопросе порядок обратный — «did you go», «what did you buy», — и
      // знака вопроса там может не быть: в задании на отметку части стоят
      // кусками без знаков препинания.
      const m = /\b(i|you|he|she|it|we|they)\s+did\s+(?!not\b)([a-z]{2,})/i.exec(kusok);
      if (!m) continue;
      // `did` бывает и обычным глаголом: «I did my work». Тогда за ним идёт не
      // действие, а вещь — с определителем впереди.
      if (/^(my|your|his|her|its|our|their|the|an?|this|that|these|those|it|them|nothing|everything|something|all)$/i.test(m[2])) continue;
      nahodki.push(`${gde}: «${kusok.trim()}»`);
      return;
    }
  };

  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      for (const block of lesson.blocks) {
        const b = block as any;
        const gde = `${mod.slug} → ${lesson.slug} → ${b.id}`;
        smotret(b.text, gde);
        if (Array.isArray(b.text)) for (const s of b.text) smotret(s, gde);
        if (Array.isArray(b.body)) for (const s of b.body) smotret(s, gde);
        if (Array.isArray(b.zvuchat)) for (const s of b.zvuchat) smotret(s, gde);
        for (const row of b.rows ?? []) for (const cell of row) smotret(cell, gde);
        smotret(b.transcript, gde);
        smotret(b.sample, gde);
        smotret(b.answer, gde);
        for (const o of b.options ?? []) smotret(o.text, gde);
        for (const p of b.parts ?? []) smotret(p.text, gde);
      }
    }
    for (const q of mod.quiz?.questions ?? []) {
      const gde = `${mod.slug} → проверочная → ${(q as any).id}`;
      const b = q as any;
      smotret(b.answer, gde);
      smotret(b.zvuk, gde);
      for (const o of b.options ?? []) smotret(o.text, gde);
      for (const p of b.parts ?? []) smotret(p.text, gde);
    }
  }

  const zhivye = [...new Set(nahodki)].filter((n) => !razobrano(n.split(":")[0].trim()));
  if (zhivye.length > 0) {
    warn(
      course.slug,
      `усилительное did в утверждении (${zhivye.length} шт.):\n      ` +
        zhivye.join("\n      ") +
        "\n      English Grammar Profile ставит этот оборот на C1. Проверь: если это " +
        "не усиление, впиши случай в courses/resheno.ts"
    );
  }
}

function checkImenaUrokovPoKursu(course: Course): void {
  const gde = new Map<string, string>();
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      const bylo = gde.get(lesson.slug);
      if (bylo) {
        fail(
          course.slug,
          `имя урока «${lesson.slug}» повторяется: ${bylo} и ${mod.slug}. ` +
            "Адрес урока модуля не знает, и второй урок станет недостижим"
        );
      } else {
        gde.set(lesson.slug, mod.slug);
      }
    }
  }

  // Проверку «имя блока повторяется в разных модулях» пробовали и сняли:
  // на курсе она дала 109 совпадений, почти все законные — `slovar-1`,
  // `zachem-…` и прочие имена, которые повторяются по устройству формата.
  // Скрипт, который кричит на правильное, хуже, чем никакого.

}

/**
 * Опора в `sources` называет урок, которого в модуле нет.
 *
 * ЗАЧЕМ. Записи опоры начинаются словами вида «УРОК ПИСЬМА «Пишем о своём
 * жилье»». Урок переименовали или переписали — опора осталась описывать
 * прежний, и следующему проверяющему сверять не с чем.
 *
 * Так и случилось 19 августа: три урока письма получили новый жанр и новые
 * названия, а их опоры продолжали говорить о старых — вплоть до числа строк в
 * образце и счёта слов. Поймал методист.
 */
function checkSourcesNazyvayutSushchestvuyushchie(course: Course): void {
  const nazvanie = /УРОК [А-ЯЁ]+ «([^»]+)»/gu;
  for (const mod of course.modules) {
    const est = new Set(mod.lessons.map((l) => l.title));
    for (const istochnik of mod.sources ?? []) {
      for (const m of istochnik.section.matchAll(nazvanie)) {
        if (!est.has(m[1])) {
          fail(
            `${course.slug} → ${mod.slug}`,
            `опора называет урок «${m[1]}», а такого урока в модуле нет — ` +
              "урок переименовали, а опору не поправили"
          );
        }
      }
    }
  }
}

function checkCourse(course: Course): void {
  const where = course.slug;
  if (course.modules.length === 0) fail(where, "в курсе нет модулей");

  const slugs = new Set<string>();
  for (const mod of course.modules) {
    if (slugs.has(mod.slug)) fail(where, `имя модуля «${mod.slug}» повторяется`);
    slugs.add(mod.slug);
    checkModule(course, mod, `${where} → ${mod.slug}`);
  }

  checkImenaUrokovPoKursu(course);
  checkSourcesNazyvayutSushchestvuyushchie(course);
  checkUsilitelnoeDid(course);

  /*
   * Части курса обязаны покрывать все модули и ровно по разу.
   *
   * Ошибка тут не видна глазом: модуль, забытый в частях, просто исчезает со
   * страницы, а модуль, попавший в две части, показывается дважды. И то и
   * другое легко сделать при добавлении нового модуля — список частей лежит в
   * другом месте файла, и про него забывают.
   */
  if (course.parts && course.parts.length > 0) {
    const vChastyah = new Map<string, number>();
    const imenaChastey = new Set<string>();
    for (const part of course.parts) {
      if (imenaChastey.has(part.slug)) fail(where, `имя части «${part.slug}» повторяется`);
      imenaChastey.add(part.slug);
      if (part.modules.length === 0) fail(where, `в части «${part.title}» нет модулей`);
      for (const name of part.modules) {
        vChastyah.set(name, (vChastyah.get(name) ?? 0) + 1);
        if (!slugs.has(name)) {
          fail(where, `часть «${part.title}» называет модуль «${name}», которого в курсе нет`);
        }
      }
    }
    /*
     * Проверочная работа части — если она написана.
     *
     * Правило покрытия здесь ДРУГОЕ, чем у работы модуля, и это не послабление.
     * Работа модуля обязана проверить каждый его итог: итогов восемь, вопросов
     * двадцать четыре, всё сходится. У части итогов пятьдесят, и требовать
     * вопрос на каждый значило бы сделать работу на полсотни вопросов — её
     * никто не пройдёт, и она перестанет быть проверкой.
     *
     * Поэтому требуем другое: каждый МОДУЛЬ части должен быть затронут. Часть
     * сдана, только если работают все шесть-семь модулей, а не половина.
     */
    for (const part of course.parts) {
      if (!part.quiz) continue;
      const gde = `${where} → часть «${part.title}» → проверочная`;
      const moduliChasti = part.modules
        .map((name) => course.modules.find((m) => m.slug === name))
        .filter((m): m is Module => Boolean(m));

      const vseItogi = moduliChasti.flatMap((m) => m.lessons.map((l) => l.outcome));
      checkQuiz(part.quiz, gde, {
        label: "проверочной работе части",
        mustCover: [],
        allowed: new Set(vseItogi),
      });

      for (const mod of moduliChasti) {
        const svoi = new Set(mod.lessons.map((l) => l.outcome));
        const skolko = part.quiz.questions.filter((q) => svoi.has(q.outcome)).length;
        if (skolko === 0) {
          fail(gde, `модуль «${mod.slug}» не затронут ни одним вопросом`);
        } else if (skolko === 1) {
          warn(gde, `модуль «${mod.slug}» затронут одним вопросом — этого мало на шесть уроков`);
        }
      }

      /*
       * Уроки умений тоже должны спрашиваться.
       *
       * Настоящая дыра, найденная 20 августа: работы частей писались 15 августа,
       * уроки чтения, слушания и письма дописали 19-го — и работа их не
       * спрашивала вовсе. Ученик проходил в части полтора десятка таких уроков,
       * а работа проверяла только правила. Ни одна проверка этого не видела:
       * покрытие считалось по модулям, а модули были затронуты.
       */
      const itogiUmeniy = new Set(
        moduliChasti.flatMap((m) =>
          m.lessons
            .filter((l) => /^(chitaem|slushaem|pishem|govorim)-/.test(l.slug))
            .map((l) => l.outcome)
        )
      );
      if (itogiUmeniy.size > 0) {
        const proUmeniya = part.quiz.questions.filter((q) => itogiUmeniy.has(q.outcome)).length;
        if (proUmeniya === 0) {
          fail(gde, `ни один вопрос не спрашивает об уроках умений, а их в части ${itogiUmeniy.size}`);
        } else if (proUmeniya < 3) {
          warn(
            gde,
            `об уроках умений спрашивают ${proUmeniya} ${proUmeniya === 1 ? "вопрос" : "вопроса"}, ` +
              `а самих уроков ${itogiUmeniy.size}`
          );
        }
      }

      /*
       * Работа части не должна быть зеркалом НИ УРОКОВ, НИ РАБОТ МОДУЛЕЙ.
       *
       * Сравнение с работами модулей дописано 20 августа, после того как
       * методист нашёл в новых вопросах тринадцать близнецов из двадцати
       * четырёх. Половина из них совпадала не с уроком, а с вопросом работы
       * модуля — а туда проверка не смотрела вовсе: сравнение со всем курсом
       * было написано для экзамена и на части не распространялось.
       *
       * Соблазн тот же, что у экзамена: работа части пишется последней, модули
       * уже перед глазами, и показательный пример просится в вопрос сам.
       */
      const usloviyaChasti = new Map<string, string>();
      const yadraChasti = new Map<string, string>();
      const zapomnitChast = (task: any, gdeZadanie: string): void => {
        const uslovie = slova(String(task.prompt ?? ""));
        if (uslovie.split(" ").length > 3 && !usloviyaChasti.has(uslovie)) {
          usloviyaChasti.set(uslovie, gdeZadanie);
        }
        const yadro = yadroZadaniya(task);
        if (slovVYadre(yadro) >= 3 && !yadraChasti.has(yadro)) yadraChasti.set(yadro, gdeZadanie);
      };
      for (const mod of moduliChasti) {
        for (const lesson of mod.lessons) {
          for (const block of lesson.blocks as any[]) {
            if (isTask(block)) zapomnitChast(block, `${mod.slug} → ${lesson.slug} → ${block.id}`);
          }
        }
        for (const question of mod.quiz.questions as any[]) {
          zapomnitChast(question, `${mod.slug} → работа → ${question.id}`);
        }
      }

      const zerkaloChasti: string[] = [];
      const pereklichkiChasti: string[] = [];
      for (const question of part.quiz.questions as any[]) {
        const uslovie = slova(String(question.prompt ?? ""));
        const yadro = yadroZadaniya(question);
        const gdeUslovie = usloviyaChasti.get(uslovie);
        const gdeYadro = yadro ? yadraChasti.get(yadro) : undefined;

        if (gdeUslovie && gdeYadro) {
          zerkaloChasti.push(`${question.id}: то же задание, что ${gdeYadro}`);
        } else if (gdeYadro && !razobrano(question.id)) {
          pereklichkiChasti.push(`${question.id}: тот же пример, что в ${gdeYadro}`);
        } else if (gdeUslovie && !razobrano(question.id)) {
          pereklichkiChasti.push(`${question.id}: условие как у ${gdeUslovie}`);
        }
      }

      if (zerkaloChasti.length > 0) {
        fail(
          gde,
          `вопрос повторяет задание части условием и примером сразу (${zerkaloChasti.length} шт.):\n      ` +
            zerkaloChasti.join("\n      ") +
            "\n      Ученик узнаёт задание раньше, чем читает его"
        );
      }
      if (pereklichkiChasti.length > 0) {
        warn(
          gde,
          `вопрос перекликается с заданием части (${pereklichkiChasti.length} шт.):\n      ` +
            pereklichkiChasti.join("\n      ") +
            "\n      Решает методист: устойчивую фразу иногда взять больше неоткуда"
        );
      }

      /*
       * Работа части не должна быть зеркалом уроков — тем более что писалась
       * она позже всех и соблазн взять готовый пример здесь сильнее всего.
       * Сравниваем с заданиями ВСЕХ уроков части сразу.
       */
      const usloviyaUrokov = new Set<string>();
      const yadraUrokov = new Set<string>();
      for (const mod of moduliChasti) {
        for (const lesson of mod.lessons) {
          for (const block of lesson.blocks as any[]) {
            if (!isTask(block)) continue;
            usloviyaUrokov.add(slova(String(block.prompt ?? "")));
            const yadro = yadroZadaniya(block);
            if (slovVYadre(yadro) >= 3) yadraUrokov.add(yadro);
          }
        }
      }
      for (const question of part.quiz.questions as any[]) {
        const uslovie = slova(String(question.prompt ?? ""));
        const yadro = yadroZadaniya(question);
        if (usloviyaUrokov.has(uslovie) && yadraUrokov.has(yadro)) {
          fail(gde, `вопрос «${question.id}» повторяет задание урока условием и примером сразу`);
        }
      }
    }

    for (const mod of course.modules) {
      const skolko = vChastyah.get(mod.slug) ?? 0;
      if (skolko === 0) {
        fail(where, `модуль «${mod.slug}» не попал ни в одну часть — на странице курса его не будет`);
      } else if (skolko > 1) {
        fail(where, `модуль «${mod.slug}» стоит в ${skolko} частях сразу`);
      }
    }
  }

  /*
   * Итоговый экзамен: охват — весь курс.
   *
   * ПРАВИЛО ОХВАТА ИЗМЕНЕНО 15 августа, и вот почему. Прежде здесь стояло
   * требование покрыть КАЖДЫЙ итог курса. Оно писалось, когда экзамена ещё не
   * было, и на бумаге звучало правильно: экзамен, спрашивающий про половину
   * умений, выдавал бы ступень за половину курса.
   *
   * На деле итогов в курсе двести. Экзамен на двести вопросов не сдаёт никто:
   * он перестаёт быть проверкой и становится вторым прохождением курса. Ни
   * один экзамен ступени так не устроен — Cambridge на этих ступенях
   * спрашивает несколько десятков заданий, а не всё подряд.
   *
   * Поэтому требование то же, что у работы части: затронут должен быть каждый
   * МОДУЛЬ, и не по одному разу. Ступень не выдаётся за половину курса, а
   * экзамен остаётся экзаменом.
   */
  if (course.exam) {
    const allLessons = course.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({ outcome: lesson.outcome, where: `${where} → ${lesson.slug}` }))
    );

    checkQuiz(course.exam, `${where} → экзамен`, {
      label: "экзамене",
      mustCover: [],
      allowed: new Set(allLessons.map((lesson) => lesson.outcome)),
    });

    for (const mod of course.modules) {
      const svoi = new Set(mod.lessons.map((l) => l.outcome));
      const skolko = course.exam.questions.filter((q) => svoi.has(q.outcome)).length;
      if (skolko === 0) {
        fail(`${where} → экзамен`, `модуль «${mod.slug}» не затронут ни одним вопросом`);
      } else if (skolko === 1) {
        warn(
          `${where} → экзамен`,
          `модуль «${mod.slug}» затронут одним вопросом — на восемь уроков этого мало`
        );
      }
    }

    /*
     * Экзамен не должен быть зеркалом — ни уроков, ни работ модулей.
     *
     * ЭТА ПРОВЕРКА НАПИСАНА ПОСЛЕ ТОГО, КАК МЕТОДИСТ НАШЁЛ ОДИННАДЦАТЬ ПОВТОРОВ
     * В ПЕРВОЙ ЖЕ РЕДАКЦИИ ЭКЗАМЕНА. Хуже находки было другое: в шапке файла
     * стояло «ни один вопрос не повторяет задание урока… это проверяется
     * скриптом» — а скрипт экзамен не смотрел вовсе. Сравнение с уроками
     * вызывалось только для работы модуля.
     *
     * Соблазн здесь сильнее, чем где-либо: экзамен пишется последним, весь
     * курс уже перед глазами, и показательный пример модуля просится в вопрос
     * сам. Ровно поэтому машина нужна: помнить полторы тысячи заданий человек
     * не может.
     */
    const usloviyaKursa = new Map<string, string>();
    const yadraKursa = new Map<string, string>();
    const zapomnit = (task: any, gde: string): void => {
      const uslovie = slova(String(task.prompt ?? ""));
      if (uslovie.split(" ").length > 3 && !usloviyaKursa.has(uslovie)) {
        usloviyaKursa.set(uslovie, gde);
      }
      const yadro = yadroZadaniya(task);
      if (slovVYadre(yadro) >= 3 && !yadraKursa.has(yadro)) yadraKursa.set(yadro, gde);
    };

    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        for (const block of lesson.blocks as any[]) {
          if (isTask(block)) zapomnit(block, `${mod.slug} → ${lesson.slug} → ${block.id}`);
        }
      }
      for (const question of mod.quiz.questions as any[]) {
        zapomnit(question, `${mod.slug} → работа → ${question.id}`);
      }
    }
    /*
     * И работы частей — они написаны раньше экзамена и тоже перед глазами.
     * Дописано 20 августа вместе с вопросами экзамена об умениях: до этого
     * экзамен сверялся с уроками и работами модулей, а части не видел.
     */
    for (const part of course.parts ?? []) {
      for (const question of (part.quiz?.questions ?? []) as any[]) {
        zapomnit(question, `часть ${part.slug} → ${question.id}`);
      }
    }

    /*
     * Экзамен обязан спрашивать об уроках умений.
     *
     * Настоящая дыра, найденная 20 августа: экзамен написан 15-го, уроки
     * чтения, слушания и письма — 19-го, и до правки экзамен не спрашивал о них
     * НИ ОДНИМ вопросом из пятидесяти. Пятьдесят шесть уроков — четверть курса —
     * не проверялись вовсе, а проверка молчала: охват считался по модулям, а
     * модули были затронуты.
     */
    const itogiUmeniyKursa = new Set(
      course.modules.flatMap((m) =>
        m.lessons
          .filter((l) => /^(chitaem|slushaem|pishem|govorim)-/.test(l.slug))
          .map((l) => l.outcome)
      )
    );
    if (itogiUmeniyKursa.size > 0) {
      const proUmeniya = course.exam.questions.filter((q) =>
        itogiUmeniyKursa.has(q.outcome)
      ).length;
      if (proUmeniya === 0) {
        fail(
          `${where} → экзамен`,
          `ни один вопрос не спрашивает об уроках умений, а их в курсе ${itogiUmeniyKursa.size}`
        );
      } else if (proUmeniya < 5) {
        warn(
          `${where} → экзамен`,
          `об уроках умений спрашивают ${proUmeniya} вопроса, а самих уроков ${itogiUmeniyKursa.size}`
        );
      }
    }

    const zerkalo: string[] = [];
    const pereklichki: string[] = [];
    for (const question of course.exam.questions as any[]) {
      const uslovie = slova(String(question.prompt ?? ""));
      const yadro = yadroZadaniya(question);
      const gdeUslovie = usloviyaKursa.get(uslovie);
      const gdeYadro = yadro ? yadraKursa.get(yadro) : undefined;

      if (gdeUslovie && gdeYadro) zerkalo.push(`${question.id}: то же задание, что ${gdeYadro}`);
      else if (gdeYadro && !razobrano(question.id))
        pereklichki.push(`${question.id}: тот же пример, что в ${gdeYadro}`);
      else if (gdeUslovie && !razobrano(question.id))
        pereklichki.push(`${question.id}: условие как у ${gdeUslovie}`);
    }

    if (zerkalo.length > 0) {
      fail(
        `${where} → экзамен`,
        `вопрос повторяет задание курса условием и примером сразу (${zerkalo.length} шт.):\n      ` +
          zerkalo.join("\n      ") +
          "\n      Экзамен пишется последним, и показательный пример просится в вопрос сам"
      );
    }
    if (pereklichki.length > 0) {
      warn(
        `${where} → экзамен`,
        `вопрос перекликается с заданием курса (${pereklichki.length} шт.):\n      ` +
          pereklichki.join("\n      ") +
          "\n      Решает методист: устойчивую фразу иногда взять больше неоткуда"
      );
    }

    // Экзамен решает судьбу ступени, поэтому его порог не может быть ниже,
    // чем у отдельной проверочной работы.
    const examRatio = course.exam.passRatio ?? 0.7;
    for (const mod of course.modules) {
      const quizRatio = mod.quiz.passRatio ?? 0.7;
      if (examRatio < quizRatio) {
        warn(
          `${where} → экзамен`,
          `порог экзамена ${Math.round(examRatio * 100)} ниже порога работы модуля «${mod.slug}» ` +
            `(${Math.round(quizRatio * 100)}) — сдать курс проще, чем его часть`
        );
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Термин раньше объяснения
//
// Ровно та ошибка, которую нашёл владелец и не поймали ни скрипт, ни две
// проверки: в первом уроке стояло задание «отметь гласные», а слова «гласный» в
// материале урока не было ни разу. Задание требовало того, чего не давали.
//
// Правило: слово-термин не появляется в задании раньше, чем в материале.
// ---------------------------------------------------------------------------

const TERMS: Array<[string, RegExp]> = [
  ["гласный", /гласн/i],
  ["согласный", /согласн[ыоаи]/i],
  ["местоимение", /местоимен/i],
  ["подлежащее", /подлежащ/i],
  ["артикль", /артикл/i],
  ["предлог", /предлог/i],
  ["апостроф", /апостроф/i],
  ["слог", /слог[аеиу]?\b/i],
  ["транскрипция", /транскрипц/i],
  ["множественное число", /множественн/i],
  ["прилагательное", /прилагательн/i],
];

/** Весь текст блока, который видит ученик. */
function blockText(block: Block): string {
  const parts: string[] = [];
  const push = (value: unknown): void => {
    if (typeof value === "string") parts.push(value);
  };

  const any = block as Record<string, unknown>;
  push(any.text);
  push(any.prompt);
  push(any.hint);
  push(any.why);
  push(any.explain);
  push(any.caption);
  if (Array.isArray(any.text)) any.text.forEach(push);
  if (Array.isArray(any.items)) any.items.forEach(push);
  if (Array.isArray(any.left)) any.left.forEach(push);
  if (Array.isArray(any.right)) any.right.forEach(push);
  if (Array.isArray(any.options)) {
    for (const option of any.options as Array<{ text?: string }>) push(option.text);
  }
  if (Array.isArray(any.parts)) {
    for (const part of any.parts as Array<{ text?: string }>) push(part.text);
  }
  if (Array.isArray(any.head)) any.head.forEach(push);
  if (Array.isArray(any.rows)) {
    for (const row of any.rows as string[][]) row.forEach(push);
  }

  return parts.join(" ");
}

function checkTermsOrder(course: Course): void {
  const lessons = course.modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({ lesson, where: `${course.slug} → ${mod.slug} → ${lesson.slug}` }))
  );

  for (const [name, pattern] of TERMS) {
    let explainedAt = -1;
    let askedAt = -1;
    let askedWhere = "";

    // Место считается по блокам, а не по урокам: объяснение, стоящее НИЖЕ
    // задания в том же уроке, ученику уже не поможет.
    lessons.forEach(({ lesson, where }, index) => {
      lesson.blocks.forEach((block, position) => {
        if (!pattern.test(blockText(block))) return;
        const at = index * 1000 + position;
        if (isTask(block)) {
          if (askedAt === -1) {
            askedAt = at;
            askedWhere = `${where} → ${block.id}`;
          }
        } else if (explainedAt === -1) {
          explainedAt = at;
        }
      });
    });

    if (askedAt === -1) continue;
    if (explainedAt === -1 || explainedAt > askedAt) {
      fail(
        askedWhere,
        `слово «${name}» стоит в задании, а в материале уроков до него не объяснено ни разу`
      );
    }
  }
}

/**
 * Слово, введённое словарной карточкой дважды.
 *
 * Карточка «Слова урока» — это обещание: слово новое, вот его перевод и
 * произношение. Когда то же слово через несколько модулей объявляют новым
 * снова, ученик решает, что забыл его, а поле `sources` вдобавок считает его
 * в новой лексике модуля дважды.
 *
 * Порода найдена методистом трижды: `coffee` в модуле 17 (введено в 14),
 * `cinema`, `sport` и `favourite` в модуле 21 (введены в 13, 16 и 11). У
 * `sport` совпал даже пример на карточке — слово в слово.
 *
 * Это вопрос, а не ошибка: бывает, что слово намеренно показывают снова в
 * другом значении. Но таких мест должно быть немного, и каждое решает методист.
 *
 * СРАВНИВАЕМ И ПЕРЕВОД, И ЭТО ГЛАВНОЕ. Первая редакция смотрела на само слово
 * и выдала семьдесят пять мест — почти все верные: `in` как место и `in` как
 * время, `no` как отклик и `no` как отрицание при слове. Это разные карточки об
 * одном написании, и вводить их дважды правильно. Настоящий повтор — когда
 * совпал и перевод: тогда вторая карточка не добавляет ничего.
 */
function checkSlovoNeVvoditsyaDvazhdy(course: Course): void {
  const gde = new Map<string, { mesto: string; perevod: string }>();
  const dvazhdy: string[] = [];

  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      for (const block of lesson.blocks as any[]) {
        if (block.kind !== "vocab") continue;
        for (const item of block.items ?? []) {
          const slovo = String(item.term ?? "").trim().toLowerCase();
          if (!slovo) continue;
          const perevod = slova(String(item.translation ?? ""));
          const bylo = gde.get(slovo);
          if (!bylo) {
            gde.set(slovo, { mesto: `${mod.slug} → ${lesson.slug}`, perevod });
          } else if (bylo.perevod === perevod) {
            dvazhdy.push(
              `«${slovo}» (${item.translation}): ${bylo.mesto} и ещё раз ${mod.slug} → ${lesson.slug}`
            );
          }
        }
      }
    }
  }

  /*
   * Разобранное молчит — то же правило, что у `npm run kontrol`.
   *
   * Три повтора методист разобрал и признал намеренными: слово нужно заданиям
   * второго урока, и его показывают там снова. Спрашивать о них каждый прогон
   * значит приучать не читать отчёт целиком.
   */
  const ostalos = dvazhdy.filter((s) => !resheno.some((r) => s.includes(r.chto)));

  if (ostalos.length > 0) {
    warn(
      course.slug,
      `слово введено словарной карточкой дважды (${ostalos.length} шт.):\n      ` +
        ostalos.join("\n      ") +
        "\n      Вторая карточка говорит ученику, что слово новое. Решает методист"
    );
  }
}

// ---------------------------------------------------------------------------
// Записи на месте
//
// Адрес записи выводится из текста, а не хранится в уроке. У этого есть одна
// беда, и она тихая: поправил фразу — получилось другое имя файла, а файла с
// таким именем нет, и вместо звука ученик получает пустоту. Заметить это
// чтением нельзя, потому что в материалах ничего не поменялось.
//
// Поэтому здесь сверяется список: на каждый звучащий кусок должен лежать файл.
// Лечится одной командой — `npm run ozvuchka`.
// ---------------------------------------------------------------------------

function checkZvuk(course: Course): void {
  // Курс по коду не озвучивается: его словарь — названия меток разметки.
  if (course.track !== "english") return;

  const netu: string[] = [];
  const est = (adres: string): boolean => existsSync(join(process.cwd(), "public", adres));

  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      for (const block of lesson.blocks) {
        if (block.kind === "audio") {
          if (block.planned) continue;
          const temp = block.pace === "slow" ? "slow" : "normal";
          const adres = block.src ?? adresBloka(block.transcript, temp, Boolean(block.voice));
          if (!est(adres)) netu.push(`${lesson.slug} · ${block.id}: «${block.transcript.slice(0, 60)}»`);
          continue;
        }

        // `zvuk` со совпадающими ключом и значением — это `zvuchat`, написанный
        // длинно. Не ошибка, но повод поправить: длинная запись повторяет
        // каждую фразу дважды, и расхождение между двумя половинами не видно
        // глазами.
        if (block.kind === "example" || block.kind === "table") {
          const lishnie = Object.entries(block.zvuk ?? {}).filter(([k, v]) => k === v);
          if (lishnie.length > 0) {
            warn(
              `${course.slug} → ${lesson.slug} → ${block.id}`,
              `в zvuk есть строки, которые звучат сами собой (${lishnie.length} шт.) — ` +
                "им место в zvuchat"
            );
          }
        }

        // Звук у примера: разговор целиком и строки по одной. Без этой проверки
        // забытая переозвучка примера не видна ничем — кнопка на странице есть,
        // а нажатие даёт тишину.
        if (block.kind === "example") {
          if (block.razgovor && block.text && !est(adresRazgovora(block.text))) {
            netu.push(`${lesson.slug} · пример ${block.id}: разговор целиком`);
          }
          for (const chto of Object.values(zvuchashchee(block))) {
            if (!est(adresYacheyki(chto))) {
              netu.push(`${lesson.slug} · пример ${block.id}: строка «${chto.slice(0, 40)}»`);
            }
          }
          continue;
        }

        if (block.kind === "table") {
          for (const chto of Object.values(zvuchashchee(block))) {
            if (!est(adresYacheyki(chto))) {
              netu.push(`${lesson.slug} · таблица ${block.id}: ячейка «${chto.slice(0, 40)}»`);
            }
          }
          continue;
        }

        if (block.kind === "vocab") {
          for (const item of block.items) {
            if (!est(adresSlova(item.term))) netu.push(`${lesson.slug} · слово «${item.term}»`);
          }
          continue;
        }

        if (isTask(block) && block.kind === "speak") {
          if (!est(adresObrazca(block.phrase))) {
            netu.push(`${lesson.slug} · ${block.id}: образец «${block.phrase.slice(0, 60)}»`);
          }
        }

        if (isTask(block) && block.zvuk && !est(adresVoprosa(block.zvuk))) {
          netu.push(`${lesson.slug} · ${block.id}: запись к заданию`);
        }
      }
    }

    for (const vopros of mod.quiz.questions) {
      if (vopros.zvuk && !est(adresVoprosa(vopros.zvuk))) {
        netu.push(`${mod.slug} · работа · ${vopros.id}: запись к вопросу`);
      }
    }
  }

  for (const vopros of course.exam?.questions ?? []) {
    if (vopros.zvuk && !est(adresVoprosa(vopros.zvuk))) {
      netu.push(`экзамен · ${vopros.id}: запись к вопросу`);
    }
  }

  /*
   * Работы частей проверка не смотрела до 20 августа — и молчала бы дальше.
   * Пока в них не было слушания, это ничего не стоило; в тот день у них
   * появились вопросы со звуком, и ученик получил бы тишину, а отчёт сказал бы
   * «ошибок нет». Урок общий: список мест, где живёт звук, надо дополнять
   * ВЕЗДЕ, а не только там, где о нём вспомнил.
   */
  for (const part of course.parts ?? []) {
    for (const vopros of part.quiz?.questions ?? []) {
      if (vopros.zvuk && !est(adresVoprosa(vopros.zvuk))) {
        netu.push(`часть ${part.slug} · ${vopros.id}: запись к вопросу`);
      }
    }
  }

  if (netu.length > 0) {
    fail(
      course.slug,
      `нет записей (${netu.length} шт.), запусти npm run ozvuchka:\n      ` +
        netu.slice(0, 15).join("\n      ") +
        (netu.length > 15 ? `\n      … и ещё ${netu.length - 15}` : "")
    );
  }
}

/**
 * Примеры и таблицы, у которых звука нет вовсе.
 *
 * ЗАЧЕМ. Решение владельца от 19 августа: звук стоит там, где ученик читает.
 * Проверка выше следит, чтобы обещанная запись существовала, — но молчит о
 * примере, которому звук просто забыли дать. Ступень Beginner переведена вся,
 * и без этого счётчика следующая начнётся с того же долга.
 *
 * Это не ошибка: у таблицы из русских подписей или из кусков предложения звука
 * и не должно быть. Поэтому — сведения, а решает методист.
 */
function checkGdeNetZvuka(course: Course): void {
  if (course.track !== "english") return;

  const nemye: string[] = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      for (const block of lesson.blocks) {
        if (block.kind !== "example" && block.kind !== "table") continue;
        if (block.kind === "example" && block.razgovor) continue;
        if (Object.keys(zvuchashchee(block)).length > 0) continue;
        nemye.push(`${mod.slug} → ${lesson.slug} → ${block.id}`);
      }
    }
  }

  if (nemye.length > 0) {
    warn(
      course.slug,
      `без звука вовсе (${nemye.length} шт.) — проверить, так ли задумано:\n      ` +
        nemye.slice(0, 20).join("\n      ") +
        (nemye.length > 20 ? `\n      … и ещё ${nemye.length - 20}` : "")
    );
  }
}

for (const course of courses) {
  checkCourse(course);
  checkTermsOrder(course);
  checkSlovoNeVvoditsyaDvazhdy(course);
  checkZvuk(course);
  checkGdeNetZvuka(course);
}

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
  tasks += course.exam?.questions.length ?? 0;
}

console.log(
  `Проверено: курсов ${courses.length}, уроков ${lessons}, заданий ${tasks}, ` +
    `учебного времени ${Math.round((minutes / 60) * 10) / 10} ч`
);

if (planned.length > 0) {
  if (releaseMode) {
    for (const where of planned) {
      errors.push(`${where}: заготовка записи, а звука нет — выкладывать такой урок нельзя`);
    }
  } else {
    console.log(
      `\nЗаготовок записей: ${planned.length}. Места размечены, звук не сделан.\n` +
        `Перед выкладкой проверь с --release: там это станет ошибкой.`
    );
    for (const where of planned) console.log(`  · ${where}`);
  }
}

if (warnings.length > 0) {
  console.log(`\nЗамечания (${warnings.length}) — сборку не останавливают:`);
  for (const w of warnings) console.log(`  · ${w}`);
}

if (zamolchali.length > 0) {
  console.log(
    `
Разобрано раньше и потому пропущено: ${zamolchali.length} (courses/resheno.ts).`
  );
}

if (errors.length > 0) {
  console.error(`\nОшибки (${errors.length}):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error("\nСодержание с ошибками выкладывать нельзя.");
  process.exit(1);
}

console.log("\nОшибок нет.");
