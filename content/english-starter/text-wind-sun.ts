import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-wind-and-sun",
  title: "Северный ветер и солнце (по Эзопу)",
  subtitle:
    "Спор ветра и солнца: кто сильнее? Ответ удивит — и запомнится вместе с десятком простых английских слов.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🌬️", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Эту басню Эзопа лингвисты любят особенно: именно её переводят на сотни языков, чтобы сравнивать их звучание. Теперь её прочитаешь и ты — по-английски.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The North Wind and the Sun",
      note: "Wind — ветер, sun — солнце. Все фразы короткие, время — настоящее. Читай спокойно, подчёркнутые слова подскажут перевод.",
      text: [
        "The North {Wind|ветер} and the {Sun|солнце} have a question: who is {stronger|сильнее}?",
        "They see a man on the road. He has a warm {coat|пальто}.",
        "«Watch me! — says the Wind. — I can take his coat!» He blows and blows. But the man holds his coat — the coat stays on.",
        "Now it is the Sun's turn. The Sun smiles and gives the man warm light.",
        "The man is hot. He takes off his coat himself!",
        "«You see, — says the Sun. — Warm words open more doors than a cold wind»." ,
      ],
      questions: [
        {
          q: "О чём спорят ветер и солнце?",
          options: [
            { t: "Кто из них сильнее", ok: true },
            { t: "Кто из них теплее" },
            { t: "Чьё пальто у путника" },
          ],
          why: "Who is stronger? — «Кто сильнее?» Strong — сильный, stronger — сильнее.",
        },
        {
          q: "Что делает ветер, чтобы победить?",
          options: [
            { t: "Дует изо всех сил", ok: true },
            { t: "Зовёт на помощь дождь" },
            { t: "Ждёт ночи" },
          ],
          why: "He blows and blows — «Он дует и дует». Blow — дуть.",
        },
        {
          q: "Почему человек сам снял пальто?",
          options: [
            { t: "Солнце согрело его, и ему стало жарко", ok: true },
            { t: "Ветер сорвал с него пальто" },
            { t: "Пальто порвалось" },
          ],
          why: "The man is hot. He takes off his coat himself! — «Человеку жарко. Он сам снимает пальто!» Take off — снимать.",
        },
        {
          q: "Верно или неверно: ветер выиграл спор?",
          options: [{ t: "Неверно", ok: true }, { t: "Верно" }],
          why: "Пальто снялось от тепла солнца, а не от силы ветра. Победило солнце.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни — слова солнца",
      note: "Warm — тёплый, cold — холодный, doors — двери. Смысл лови по этим трём словам.",
      audio: ["Warm words open more doors than a cold wind."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Тёплые слова открывают больше дверей, чем холодный ветер", ok: true },
            { t: "В холод нужно тёплое пальто" },
            { t: "Солнце всегда сильнее ветра" },
          ],
          why: "Warm words open more doors than a cold wind — доброта убеждает лучше силы.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Закрепи",
      q: "Собери вывод басни: «Солнце сильнее ветра»:",
      note: "Знакомое сравнение: stronger than — «сильнее, чем».",
      words: ["The", "Sun", "is", "stronger", "than", "the", "Wind."],
      answer: "The Sun is stronger than the Wind.",
      why: "The Sun is stronger than the Wind — и басня прочитана, и сравнение отработано!",
    },
  ],
  words: [
    { en: "wind / sun", ru: "ветер / солнце" },
    { en: "strong → stronger", ru: "сильный → сильнее" },
    { en: "coat", ru: "пальто" },
    { en: "blow", ru: "дуть" },
    { en: "take off", ru: "снимать (одежду)" },
    { en: "warm / cold", ru: "тёплый / холодный" },
  ],
};

export default chapter;
