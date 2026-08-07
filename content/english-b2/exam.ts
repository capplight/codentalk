import type { Chapter } from "@/lib/types";

const exam: Chapter = {
  slug: "exam",
  title: "Экзамен уровня B2",
  subtitle:
    "Финальное испытание всего пути: времена в живой речи, идиомы, переговорные формулы, британский юмор — и чтение с аудированием без упрощений.",
  exam: true,
  stages: [
    { icon: "📝", name: "Идиомы и фразы" },
    { icon: "🔢", name: "Времена" },
    { icon: "📄", name: "Чтение" },
    { icon: "🎧", name: "Аудирование" },
    { icon: "🎓", name: "Результат" },
  ],
  steps: [
    {
      kind: "choice",
      stage: 0,
      tag: "Идиомы",
      q: "Коллега говорит о задаче: «Don't worry, it's a piece of cake». Что он имеет в виду?",
      rule: "idioms",
      options: [
        { t: "Задача очень простая", ok: true },
        { t: "За задачу дают премию" },
        { t: "Задача сладкая, но вредная" },
      ],
      why: "A piece of cake — «проще простого». Идиомы не переводятся дословно!",
    },
    {
      kind: "choice",
      stage: 0,
      tag: "Британский код",
      q: "Британский партнёр посмотрел вашу презентацию и сказал: «Not bad at all!» Как это понимать?",
      rule: "understatement",
      options: [
        { t: "Это высокая похвала", ok: true },
        { t: "Он разочарован" },
        { t: "Ему всё равно" },
      ],
      why: "Understatement: not bad (at all) в устах британца ≈ «отлично». Чем сдержаннее слова — тем выше оценка.",
    },
    {
      kind: "assemble",
      stage: 0,
      tag: "Переговоры",
      q: "Инвестор ждёт ответа прямо сейчас. Возьми паузу профессионально:",
      words: ["Let", "me", "think", "it", "over."],
      answer: "Let me think it over.",
      why: "Let me think it over — «Позвольте мне это обдумать». Пауза в переговорах — сила, а не слабость.",
    },
    {
      kind: "fill",
      stage: 1,
      tag: "Времена",
      qBefore: "I have ",
      qAfter: " finished the report — you can read it now.",
      hintRu: "Я уже закончил отчёт — можешь читать. (слово-«уже» в Present Perfect)",
      answer: "already",
      why: "Already («уже») + Present Perfect — результат, готовый прямо сейчас: I have already finished.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "Времена",
      q: "Выбери грамматически верную фразу о событии со словом «yesterday»:",
      rule: "tense-map",
      options: [
        { t: "I found the bug yesterday.", ok: true },
        { t: "I have found the bug yesterday." },
        { t: "I find the bug yesterday." },
      ],
      why: "Точное время в прошлом (yesterday) → Past Simple: I found. Present Perfect с yesterday не дружит!",
    },
    {
      kind: "fill",
      stage: 1,
      tag: "Времена",
      qBefore: "Look at the sky! It ",
      qAfter: " raining cats and dogs!",
      hintRu: "Посмотри на небо! Льёт как из ведра! (связка процесса для it)",
      answer: "is",
      why: "Процесс прямо сейчас: it is raining. Плюс идиома: raining cats and dogs — льёт как из ведра.",
    },
    {
      kind: "reading",
      stage: 2,
      tag: "Чтение",
      title: "Отзыв в App Store",
      note: "Финальное чтение: живой отзыв пользователя со всеми красками разговорного языка. Читай и лови смысл между строк.",
      text: [
        "★★★★★ «Better late than never!»",
        "I have tried many language apps, and honestly — most of them were a bit of a nightmare: streaks, ads, pressure.",
        "This one is different. The stories pulled me in, and after two months I passed my first real interview in English!",
        "If you are afraid to start, remember: mistakes are not the enemy. Download it — you won't regret it.",
      ],
      questions: [
        {
          q: "Что пользователь говорит о других приложениях?",
          options: [
            { t: "Большинство были «слегка кошмаром»: счётчики дней, реклама, давление", ok: true },
            { t: "Все они были прекрасны" },
            { t: "Он не пробовал другие приложения" },
          ],
          why: "Most of them were a bit of a nightmare — «большинство были слегка кошмаром» (то самое преуменьшение = очень плохо).",
        },
        {
          q: "Какого результата достиг пользователь за два месяца?",
          options: [
            { t: "Прошёл первое настоящее собеседование на английском", ok: true },
            { t: "Переехал в Лондон" },
            { t: "Выучил тысячу слов" },
          ],
          why: "After two months I passed my first real interview in English — «через два месяца я прошёл первое настоящее собеседование на английском».",
        },
        {
          q: "«Better late than never» — что значит заголовок отзыва?",
          options: [
            { t: "«Лучше поздно, чем никогда»", ok: true },
            { t: "«Опаздывать нельзя никогда»" },
            { t: "«Позже будет лучше»" },
          ],
          why: "Better late than never — «Лучше поздно, чем никогда». Пословица о том, что начинать никогда не поздно.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Финальное аудирование курса: живая речь без упрощений",
      note: "Последнее испытание. Обычный темп, длинные фразы — всё как в жизни. Ты готов к этому с первой главы.",
      audio: [
        "Ladies and gentlemen, one more announcement.",
        "We would like to thank our partners from Kazakhstan.",
        "Their free app has helped thousands of students this year.",
        "If you haven't tried it yet — well, better late than never!",
      ],
      questions: [
        {
          q: "Кого благодарит спикер?",
          options: [
            { t: "Партнёров из Казахстана", ok: true },
            { t: "Студентов из Лондона" },
            { t: "Организаторов конференции" },
          ],
          why: "We would like to thank our partners from Kazakhstan — «Мы хотели бы поблагодарить наших партнёров из Казахстана».",
        },
        {
          q: "Что сделало приложение в этом году?",
          options: [
            { t: "Помогло тысячам студентов", ok: true },
            { t: "Заработало миллионы" },
            { t: "Вышло на новый рынок" },
          ],
          why: "Their free app has helped thousands of students this year — «их бесплатное приложение помогло тысячам студентов в этом году». Has helped — Present Perfect!",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Финал всего пути",
      q: "Последняя фраза последнего экзамена. Ты знаешь её лучше всех:",
      words: ["Never", "stop", "learning!"],
      answer: "Never stop learning!",
      why: "Never stop learning! — «Никогда не переставай учиться!» Все пять уровней сданы. Это был длинный путь — и он твой.",
    },
  ],
  words: [],
};

export default exam;
