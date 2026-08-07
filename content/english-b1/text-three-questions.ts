import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-three-questions",
  title: "Три вопроса (по Льву Толстому)",
  subtitle:
    "Царь ищет ответы на три главных вопроса жизни — а находит их не у мудрецов, а на грядке у отшельника. Философия Толстого в пересказе уровня B1.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "👑", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Лев Толстой написал «Три вопроса» в 1885 году. Рассказ давно переведён на английский и вошёл в мировую классику. Читать Толстого по-английски — особое удовольствие для русскоязычного читателя: ты знаешь дух, а учишь язык.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Three Questions (retold)",
      note: "King — царь, hermit — отшельник. Три вопроса повторяются через весь текст — они помогут не потерять нить.",
      text: [
        "A {king|царь} wanted to know three things: What is the right time for every action? Who are the most important people? What is the most important thing to do?",
        "«If I know this, — he thought, — I will never fail». He offered a great reward, but no wise man could answer.",
        "Then the king went to an old {hermit|отшельник} who lived in the forest. The hermit was digging his garden. He was weak, so the king took the {spade|лопата} and dug for him all day.",
        "In the evening a {wounded|раненый} man ran out of the forest. The king washed his wound and took care of him all night.",
        "In the morning the man said: «I came here to kill you, but your guards wounded me — and you saved my life. Forgive me». The king had made a friend out of an enemy.",
        "«Your questions have been answered, — said the hermit. — The most important time is NOW. The most important person is the one who is with you. The most important thing is to do good for that person»." ,
      ],
      questions: [
        {
          q: "Какие три вопроса мучили царя?",
          options: [
            { t: "Когда действовать, кто самый важный человек, что важнее всего делать", ok: true },
            { t: "Как разбогатеть, как победить врагов, как прожить дольше" },
            { t: "Где жить, кого любить, кому верить" },
          ],
          why: "What is the right time? Who are the most important people? What is the most important thing to do? — три вопроса из первого абзаца.",
        },
        {
          q: "Что царь делал у отшельника весь день?",
          options: [
            { t: "Копал за него огород", ok: true },
            { t: "Задавал вопросы мудрецам" },
            { t: "Охотился в лесу" },
          ],
          why: "The king took the spade and dug for him all day — царь взял лопату и копал за слабого старика.",
        },
        {
          q: "Кем оказался раненый человек?",
          options: [
            { t: "Врагом, который пришёл убить царя", ok: true },
            { t: "Слугой отшельника" },
            { t: "Заблудившимся охотником" },
          ],
          why: "«I came here to kill you… and you saved my life» — враг стал другом, потому что царь спас его.",
        },
        {
          q: "Каков ответ на вопрос «какое время самое важное»?",
          options: [
            { t: "Сейчас", ok: true },
            { t: "Юность" },
            { t: "Время принятия решений" },
          ],
          why: "The most important time is NOW — только настоящим мгновением мы владеем.",
        },
        {
          q: "«The king had made a friend out of an enemy» — почему здесь had made?",
          options: [
            { t: "Действие завершилось к моменту утреннего разговора — «прошлое до прошлого»", ok: true },
            { t: "Это вежливая форма" },
            { t: "Это ошибка перевода" },
          ],
          why: "Past Perfect (had made): к утру дружба уже состоялась. Порядок событий в прошлом — работа had + V3.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Ответ отшельника — сердце рассказа",
      note: "Три ответа подряд. Слушай спокойно, при повторе лови каждый по отдельности.",
      audio: [
        "The most important time is now.",
        "The most important person is the one who is with you.",
        "The most important thing is to do good.",
      ],
      questions: [
        {
          q: "Кто, по словам отшельника, самый важный человек?",
          options: [
            { t: "Тот, кто рядом с тобой прямо сейчас", ok: true },
            { t: "Царь" },
            { t: "Самый мудрый из людей" },
          ],
          why: "The most important person is the one who is with you — не где-то далеко, а рядом.",
        },
        {
          q: "Что важнее всего делать?",
          options: [
            { t: "Добро тому, кто рядом", ok: true },
            { t: "Готовиться к будущему" },
            { t: "Искать мудрецов" },
          ],
          why: "The most important thing is to do good — делать добро здесь и сейчас.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль в разговорник",
      q: "Собери первый ответ отшельника:",
      note: "Превосходная степень + важнейшая мысль Толстого: The most important time…",
      words: ["The", "most", "important", "time", "is", "now."],
      answer: "The most important time is now.",
      why: "The most important time is now — «Самое важное время — сейчас». Толстой прочитан по-английски!",
      phrase: { en: "The most important time is now.", ru: "Самое важное время — сейчас." },
    },
  ],
  words: [
    { en: "king", ru: "царь, король" },
    { en: "hermit", ru: "отшельник" },
    { en: "spade / dig", ru: "лопата / копать" },
    { en: "wounded", ru: "раненый" },
    { en: "forgive", ru: "прощать" },
    { en: "enemy → friend", ru: "враг → друг" },
  ],
};

export default chapter;
