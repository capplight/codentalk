import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-sherlock-observe",
  title: "Шерлок Холмс: видеть и наблюдать (по Конан Дойлу)",
  subtitle:
    "Знаменитая сцена из «Скандала в Богемии» с легендарной цитатой: «You see, but you do not observe». Уровень B2 — почти оригинал.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🔍", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "«Скандал в Богемии» (1891) открывается сценой, где Холмс объясняет Ватсону разницу между «видеть» и «наблюдать». Эта цитата — одна из самых известных в английской литературе. Пересказ близок к оригиналу.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "A Scandal in Bohemia (retold scene)",
      note: "Диалог двух джентльменов викторианской эпохи. Лови иронию Холмса и разницу между see (видеть) и observe (наблюдать).",
      text: [
        "One evening Dr Watson visited his old friend Sherlock Holmes at Baker Street. Holmes looked at him and smiled.",
        "«I see you have been getting wet lately, — he said, — and that your servant girl is careless».",
        "«My dear Holmes! — cried Watson. — This is magic! How can you possibly know that?»",
        "«I do not guess. I {observe|наблюдаю}, — answered Holmes. — The leather on your left shoe has six fresh {scratches|царапины}. Somebody cleaned the mud from it very carelessly. So: bad weather, and a careless servant»." ,
        "Watson laughed: «You are right, of course. But when you explain it, everything sounds so simple! My eyes are as good as yours».",
        "«Quite so, — said Holmes. — You see, but you do not observe. For example: how many steps lead up to this room? You have climbed them hundreds of times».",
        "«I… I don't know. Perhaps twelve?» — «There are seventeen. You have seen them, but you have not observed. That, my dear Watson, is the whole difference».",
      ],
      questions: [
        {
          q: "Что Холмс понял по левому ботинку Ватсона?",
          options: [
            { t: "Была плохая погода, а служанка чистила обувь небрежно", ok: true },
            { t: "Ватсон купил новые ботинки" },
            { t: "Ватсон шёл пешком издалека" },
          ],
          why: "Шесть свежих царапин от небрежной чистки грязи → дождливая погода + careless servant. Дедукция из одной детали.",
        },
        {
          q: "«I do not guess. I observe» — в чём разница?",
          options: [
            { t: "Холмс не угадывает, а делает выводы из деталей", ok: true },
            { t: "Холмс скромничает" },
            { t: "Холмс признаётся, что подсматривал" },
          ],
          why: "Guess — угадывать наобум, observe — замечать детали и рассуждать. Метод Холмса — второе.",
        },
        {
          q: "Сколько ступенек ведёт в комнату — и знал ли это Ватсон?",
          options: [
            { t: "Семнадцать; Ватсон не знал, хотя поднимался сотни раз", ok: true },
            { t: "Двенадцать; Ватсон угадал" },
            { t: "Семь; Ватсон посчитал при Холмсе" },
          ],
          why: "There are seventeen. You have seen them, but you have not observed — видел сотни раз, но не наблюдал.",
        },
        {
          q: "«You see, but you do not observe» — как лучше передать смысл?",
          options: [
            { t: "«Вы смотрите, но не замечаете»", ok: true },
            { t: "«Вы слепы, Ватсон»" },
            { t: "«Вы наблюдательнее меня»" },
          ],
          why: "Смотреть — пассивно, наблюдать — активно замечать и анализировать. Великая цитата о внимании.",
        },
        {
          q: "Заметь грамматику: «You have been getting wet lately». Что подчёркивает эта форма?",
          options: [
            { t: "Действие повторялось в последнее время (и следы видны сейчас)", ok: true },
            { t: "Действие случится в будущем" },
            { t: "Действие произошло один раз давно" },
          ],
          why: "have been + -ing (Present Perfect Continuous): «вы промокали в последние дни» — процесс, растянутый до настоящего. Уровень B2+!",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Легендарная цитата — голосом",
      note: "Цитата, которую цитируют 130 лет. Услышь её целиком.",
      audio: ["You see, but you do not observe. The distinction is clear."],
      questions: [
        {
          q: "Какое слово Холмс противопоставляет слову «see»?",
          options: [
            { t: "observe — наблюдать", ok: true },
            { t: "guess — угадывать" },
            { t: "know — знать" },
          ],
          why: "You see, but you do not observe — видеть и наблюдать: в этой паре весь метод Холмса.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Цитата в разговорник",
      q: "Собери самую знаменитую фразу Холмса:",
      note: "Ты только что читал и слышал её. Соблюдай порядок: сначала see, потом observe.",
      words: ["You", "see,", "but", "you", "do", "not", "observe."],
      answer: "You see, but you do not observe.",
      why: "You see, but you do not observe — теперь эта цитата твоя. Конан Дойл прочитан почти в оригинале!",
      phrase: { en: "You see, but you do not observe.", ru: "Вы смотрите, но не наблюдаете." },
    },
  ],
  words: [
    { en: "observe", ru: "наблюдать" },
    { en: "careless", ru: "небрежный" },
    { en: "scratches", ru: "царапины" },
    { en: "quite so", ru: "именно так (викторианское)" },
    { en: "distinction", ru: "различие" },
    { en: "climb", ru: "подниматься" },
  ],
};

export default chapter;
