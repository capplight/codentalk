import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-lion-and-mouse",
  title: "Лев и мышь (по Эзопу)",
  subtitle:
    "Твоя первая настоящая история на английском — знаменитая басня Эзопа в простом пересказе. Прочитай и ответь на вопросы.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🦁", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Басням Эзопа больше двух тысяч лет — а читаются они как вчера написанные. Эта — про то, что маленький друг может спасти большого. Твой уровень уже позволяет прочитать её по-английски!",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Lion and the Mouse",
      note: "Текст простой: почти все слова тебе знакомы. Незнакомые подчёркнуты — нажми, и появится перевод. Прочитай не спеша, лучше дважды.",
      text: [
        "A big {lion|лев} sleeps in the forest. A little {mouse|мышь} runs on his nose.",
        "The lion wakes up. He is angry! «I can eat you!» he says.",
        "«Please, no! — says the mouse. — I am little, but one day I can help you».",
        "The lion laughs: «You? Help ME?» But he is kind and says: «OK, go home».",
        "One week later, the lion is in a {hunter's net|сеть охотника}. He cannot move!",
        "The mouse comes and eats the net — one, two, three! Now the lion is free.",
        "«Thank you, little friend, — says the lion. — Now I see: little friends are great friends»." ,
      ],
      questions: [
        {
          q: "Что делает лев в начале истории?",
          options: [
            { t: "Спит в лесу", ok: true },
            { t: "Охотится на мышь" },
            { t: "Ест обед" },
          ],
          why: "A big lion sleeps in the forest — «Большой лев спит в лесу».",
        },
        {
          q: "Что обещает мышь?",
          options: [
            { t: "Однажды помочь льву", ok: true },
            { t: "Принести льву еду" },
            { t: "Никогда не возвращаться" },
          ],
          why: "One day I can help you — «однажды я смогу тебе помочь».",
        },
        {
          q: "Что случилось со львом через неделю?",
          options: [
            { t: "Он попал в сеть охотника", ok: true },
            { t: "Он заболел" },
            { t: "Он потерялся в лесу" },
          ],
          why: "The lion is in a hunter's net. He cannot move! — «Лев в сети охотника. Он не может двигаться!»",
        },
        {
          q: "Как мышь спасла льва?",
          options: [
            { t: "Прогрызла сеть", ok: true },
            { t: "Позвала других львов" },
            { t: "Испугала охотника" },
          ],
          why: "The mouse comes and eats the net — «Мышь приходит и прогрызает сеть».",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни — послушай финальную фразу льва",
      note: "Одна фраза, все слова знакомые. Little — маленький, great — великий/отличный.",
      audio: ["Little friends are great friends."],
      questions: [
        {
          q: "Какова мораль басни?",
          options: [
            { t: "Маленькие друзья — великие друзья", ok: true },
            { t: "Львы всегда добрые" },
            { t: "Мыши живут в лесу" },
          ],
          why: "Little friends are great friends — «Маленькие друзья — великие друзья». Мораль на все времена.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Запомни мораль",
      q: "Собери мораль басни сам:",
      note: "Ты только что её слышал. Little — маленькие, great — великие.",
      words: ["Little", "friends", "are", "great", "friends."],
      answer: "Little friends are great friends.",
      why: "Little friends are great friends. Ты прочитал первую классическую историю на английском!",
      phrase: { en: "Little friends are great friends.", ru: "Маленькие друзья — великие друзья." },
    },
  ],
  words: [
    { en: "lion / mouse", ru: "лев / мышь" },
    { en: "forest", ru: "лес" },
    { en: "angry", ru: "злой, сердитый" },
    { en: "kind", ru: "добрый" },
    { en: "net", ru: "сеть" },
    { en: "free", ru: "свободный" },
  ],
};

export default chapter;
