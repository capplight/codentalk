import type { Chapter } from "@/lib/types";

const drills: Chapter = {
  slug: "drills-u2",
  title: "Тренажёр: идиомы",
  subtitle: "Отработка юнита «Идиомы»: узнавать и уместно использовать устойчивые фразы.",
  section: "exercise",
  stages: [
    { icon: "🍰", name: "Значение" },
    { icon: "🗣️", name: "В контексте" },
    { icon: "✅", name: "Готово" },
  ],
  steps: [
    {
      kind: "choice",
      stage: 0,
      tag: "Значение",
      q: "«The test was a piece of cake». Что это значит?",
      note: "a piece of cake — «проще простого», а не буквально про торт.",
      options: [
        { t: "Тест был очень лёгким.", ok: true },
        { t: "На тесте раздавали торт." },
        { t: "Тест был очень сложным." },
      ],
      why: "a piece of cake — идиома «проще простого», о лёгкости, не о еде.",
    },
    {
      kind: "choice",
      stage: 0,
      tag: "Значение",
      q: "«It's raining cats and dogs». Что это значит?",
      note: "Дословный перевод («дождь из кошек и собак») не работает — это идиома.",
      options: [
        { t: "Идёт очень сильный дождь.", ok: true },
        { t: "На улице кошки и собаки гуляют вместе." },
        { t: "Погода солнечная и тёплая." },
      ],
      why: "It's raining cats and dogs — «льёт как из ведра».",
    },
    {
      kind: "fill",
      stage: 0,
      tag: "Значение",
      qBefore: "We meet ",
      qAfter: " — maybe once a year.",
      hintRu: "Мы встречаемся очень редко — может, раз в год. (идиома «раз в голубую луну»)",
      answer: "once in a blue moon",
      why: "once in a blue moon — «очень редко», ровно подходит к «раз в год».",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "В контексте",
      q: "Друг уезжает в путешествие. Что ему сказать?",
      note: "hit the road — «отправиться в путь».",
      options: [
        { t: "Have a great trip, hit the road!", ok: true },
        { t: "Have a great trip, break a leg!" },
        { t: "Have a great trip, piece of cake!" },
      ],
      why: "hit the road уместно перед отъездом, break a leg — перед выступлением/экзаменом.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "В контексте",
      q: "Друг идёт на важное собеседование. Что пожелать?",
      note: "break a leg — «ни пуха ни пера» перед испытанием.",
      options: [
        { t: "Good luck, break a leg!", ok: true },
        { t: "Good luck, hit the road!" },
        { t: "Good luck, once in a blue moon!" },
      ],
      why: "break a leg — пожелание удачи перед выступлением или испытанием.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "В контексте",
      q: "Коллега точно нашёл причину проблемы. Как это отметить?",
      note: "hit the nail on the head — «попасть в точку».",
      options: [
        { t: "You hit the nail on the head!", ok: true },
        { t: "You hit the road!" },
        { t: "That's a piece of cake!" },
      ],
      why: "hit the nail on the head — точно определить суть проблемы.",
    },
    {
      kind: "assemble",
      stage: 2,
      tag: "Финал",
      q: "Собери фразу: «Лучше поздно, чем никогда, — давай начнём прямо сейчас»:",
      note: "Better late than never — идиома целиком, как одно слово.",
      words: ["Better", "late", "than", "never,", "let's", "start", "now."],
      answer: "Better late than never, let's start now.",
      why: "Better late than never — «начинать не поздно». Тренажёр пройден!",
    },
  ],
  words: [],
};

export default drills;
