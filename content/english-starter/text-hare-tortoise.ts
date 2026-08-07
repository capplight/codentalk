import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-hare-and-tortoise",
  title: "Заяц и черепаха (по Эзопу)",
  subtitle:
    "Самая известная басня о скорости и упорстве — в простом пересказе для нулевого уровня. Slow but steady!",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🐢", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Ещё одна басня Эзопа — про гонку зайца и черепахи. Спойлер: побеждает не тот, кто быстрее. Читай и убедись сам!",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Hare and the Tortoise",
      note: "Hare — заяц, tortoise — черепаха. Остальное ты знаешь или догадаешься. Вопросы — с подглядыванием в текст, это нормально!",
      text: [
        "A {hare|заяц} is very fast. A {tortoise|черепаха} is very slow.",
        "«You are so slow! — laughs the hare. — I am the fastest animal in the forest!»",
        "«Let's have a {race|гонка}», — says the tortoise.",
        "The race starts. The hare runs fast, very fast. The tortoise walks slowly: one step, two steps.",
        "The hare thinks: «I have time. I can sleep a little». He sleeps under a tree.",
        "The tortoise walks and walks and walks. She does not stop.",
        "The hare wakes up — but it is late! The tortoise is at the {finish line|финиш}. She is the winner!",
      ],
      questions: [
        {
          q: "Кто предложил устроить гонку?",
          options: [
            { t: "Черепаха", ok: true },
            { t: "Заяц" },
            { t: "Лев" },
          ],
          why: "«Let's have a race», — says the tortoise. — Гонку предложила черепаха.",
        },
        {
          q: "Что сделал заяц во время гонки?",
          options: [
            { t: "Лёг спать под деревом", ok: true },
            { t: "Бежал без остановки" },
            { t: "Помог черепахе" },
          ],
          why: "He sleeps under a tree — «Он спит под деревом». Слишком уверен в победе!",
        },
        {
          q: "Что делала черепаха?",
          options: [
            { t: "Шла и шла, не останавливаясь", ok: true },
            { t: "Тоже спала" },
            { t: "Бежала быстрее зайца" },
          ],
          why: "The tortoise walks and walks and walks. She does not stop. — Шла медленно, но без остановки.",
        },
        {
          q: "Верно или неверно: заяц выиграл гонку?",
          options: [{ t: "Неверно", ok: true }, { t: "Верно" }],
          why: "The tortoise is at the finish line. She is the winner! — Победила черепаха.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни — знаменитая английская пословица",
      note: "Slow — медленный, steady — упорный, постоянный. Эту пословицу знает каждый англичанин!",
      audio: ["Slow but steady wins the race."],
      questions: [
        {
          q: "Как звучит мораль?",
          options: [
            { t: "«Медленный, но упорный выигрывает гонку»", ok: true },
            { t: "«Быстрый всегда первый»" },
            { t: "«Не спи под деревом»" },
          ],
          why: "Slow but steady wins the race — «Медленный, но упорный выигрывает гонку». Это и про изучение языка!",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Запомни пословицу",
      q: "Собери мораль — она пригодится тебе в учёбе:",
      note: "Slow but steady — «медленно, но верно». Wins — выигрывает.",
      words: ["Slow", "but", "steady", "wins", "the", "race."],
      answer: "Slow but steady wins the race.",
      why: "Slow but steady wins the race. Один урок в день — и ты черепаха, которая обгонит всех зайцев.",
      phrase: { en: "Slow but steady wins the race.", ru: "Медленный, но упорный выигрывает гонку." },
    },
  ],
  words: [
    { en: "hare / tortoise", ru: "заяц / черепаха" },
    { en: "fast / slow", ru: "быстрый / медленный" },
    { en: "race", ru: "гонка" },
    { en: "step", ru: "шаг" },
    { en: "winner", ru: "победитель" },
    { en: "steady", ru: "упорный, постоянный" },
  ],
};

export default chapter;
