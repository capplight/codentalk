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
import { adresBloka, adresObrazca, adresSlova, adresVoprosa } from "../lib/content/zvuk.ts";
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
      pohozhi.push(`${question.id}: условие как у ${gdeUslovie} — «${question.prompt}»`);
    } else if (gdeYadro) {
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
      chasto.push(`${question.id}: «${otvetZadaniya(question).trim()}» — в материале ${skolko} раз`);
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

    case "example":
      if (blank(block.code) && blank(block.text)) fail(where, "в примере нет ни кода, ни текста");
      if (blank(block.explain)) fail(where, "пример без разбора — это картинка, а не пример");
      checkProse(block.explain, where, "разбор примера");
      break;

    case "table": {
      if (block.head.length === 0) fail(where, "у таблицы нет заголовков столбцов");
      if (block.rows.length === 0) fail(where, "таблица без строк");
      const wrong = block.rows.filter((r) => r.length !== block.head.length).length;
      if (wrong > 0) fail(where, `в ${wrong} строках число ячеек не совпадает с числом столбцов`);

      // Звучащая ячейка, которой в таблице нет, — это кнопка, которая никогда
      // не появится. Опечатка в ключе иначе не видна ничем.
      if (block.zvuk) {
        const yacheyki = new Set(block.rows.flat());
        for (const klyuch of Object.keys(block.zvuk)) {
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
      if (slov < 15) {
        fail(where, `в тексте ${slov} слов — это не текст, а пример; возьми вид example`);
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

function checkCourse(course: Course): void {
  const where = course.slug;
  if (course.modules.length === 0) fail(where, "в курсе нет модулей");

  const slugs = new Set<string>();
  for (const mod of course.modules) {
    if (slugs.has(mod.slug)) fail(where, `имя модуля «${mod.slug}» повторяется`);
    slugs.add(mod.slug);
    checkModule(mod, `${where} → ${mod.slug}`);
  }

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

    const zerkalo: string[] = [];
    const pereklichki: string[] = [];
    for (const question of course.exam.questions as any[]) {
      const uslovie = slova(String(question.prompt ?? ""));
      const yadro = yadroZadaniya(question);
      const gdeUslovie = usloviyaKursa.get(uslovie);
      const gdeYadro = yadro ? yadraKursa.get(yadro) : undefined;

      if (gdeUslovie && gdeYadro) zerkalo.push(`${question.id}: то же задание, что ${gdeYadro}`);
      else if (gdeYadro) pereklichki.push(`${question.id}: тот же пример, что в ${gdeYadro}`);
      else if (gdeUslovie) pereklichki.push(`${question.id}: условие как у ${gdeUslovie}`);
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

  if (netu.length > 0) {
    fail(
      course.slug,
      `нет записей (${netu.length} шт.), запусти npm run ozvuchka:\n      ` +
        netu.slice(0, 15).join("\n      ") +
        (netu.length > 15 ? `\n      … и ещё ${netu.length - 15}` : "")
    );
  }
}

for (const course of courses) {
  checkCourse(course);
  checkTermsOrder(course);
  checkSlovoNeVvoditsyaDvazhdy(course);
  checkZvuk(course);
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

if (errors.length > 0) {
  console.error(`\nОшибки (${errors.length}):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error("\nСодержание с ошибками выкладывать нельзя.");
  process.exit(1);
}

console.log("\nОшибок нет.");
