import type { Chapter } from "@/lib/types";

const chapter7: Chapter = {
  slug: "postcard-from-daniyar",
  title: "Открытка из Лондона",
  subtitle:
    "Ты дома, в Алматы — и вдруг настоящая бумажная открытка от Данияра! А следом голосовое. Читаем и слушаем письма друга.",
  section: "text",
  stages: [
    { icon: "📬", name: "Почта" },
    { icon: "📄", name: "Читаем" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "✍️", name: "Отвечаем" },
    { icon: "🌟", name: "Финал" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Две недели дома. И вдруг в почтовом ящике — настоящая бумажная открытка: красный автобус, Биг-Бен и знакомый почерк. Данияр — человек старой школы!",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "Открытка от Данияра",
      note: "Читай в два прохода: первый — понять общий смысл, второй — найти детали. На вопросы отвечай, сверяясь с текстом, — так работают с текстом настоящие читатели.",
      text: [
        "Hello, friend! How are you?",
        "London is {boring|скучный} without you. Yesterday I went to our café near the hotel. The tea was good, but your place was {empty|пустой}!",
        "My exams start on Monday. Wish me luck!",
        "Come back next summer — my sofa waits for you.",
        "Your friend, Daniyar",
      ],
      questions: [
        {
          q: "Куда Данияр ходил вчера?",
          options: [
            { t: "В ваше кафе у отеля", ok: true },
            { t: "В Британский музей" },
            { t: "На рынок Кэмден" },
          ],
          why: "Yesterday I went to our café near the hotel — «Вчера я ходил в наше кафе у отеля». Went — прошлое от go.",
        },
        {
          q: "Что начинается в понедельник?",
          options: [
            { t: "Экзамены Данияра", ok: true },
            { t: "Каникулы Данияра" },
            { t: "Новая работа Данияра" },
          ],
          why: "My exams start on Monday — «Мои экзамены начинаются в понедельник».",
        },
        {
          q: "«Your place was empty» — что имеет в виду Данияр?",
          options: [
            { t: "Твоё место за столиком пустовало — он скучает", ok: true },
            { t: "Твоя комната в отеле свободна" },
            { t: "Кафе было закрыто" },
          ],
          why: "The tea was good, but your place was empty — «Чай был хорош, но твоё место пустовало». Так друг говорит «мне тебя не хватало».",
        },
        {
          q: "Верно или неверно: Данияр зовёт тебя вернуться следующим летом?",
          options: [{ t: "Верно", ok: true }, { t: "Неверно" }],
          why: "Come back next summer — my sofa waits for you. — «Возвращайся следующим летом — мой диван тебя ждёт». Верно!",
        },
      ],
    },
    {
      kind: "story",
      stage: 2,
      ru: "Ты фотографируешь открытку на память — и тут телефон оживает: голосовое от Данияра. Неделя прошла, у него новости!",
    },
    {
      kind: "listening",
      stage: 2,
      tag: "Аудирование",
      intro: "Голосовое сообщение от Данияра",
      note: "В голосовом будет прошедшее время: passed — сдал, was — был. Лови, ЧТО случилось и КОГДА нужно позвонить.",
      audio: [
        "Hello from London!",
        "I have news: I passed my first exam!",
        "It was hard, but I got the best mark in the group.",
        "Call me on Sunday, OK? Bye!",
      ],
      questions: [
        {
          q: "Какая новость у Данияра?",
          options: [
            { t: "Он сдал первый экзамен", ok: true },
            { t: "Он провалил экзамен" },
            { t: "Он нашёл новую работу" },
          ],
          why: "I passed my first exam! — «Я сдал первый экзамен!» Passed — сдал.",
        },
        {
          q: "Как он сдал?",
          options: [
            { t: "Лучше всех в группе", ok: true },
            { t: "Хуже всех в группе" },
            { t: "Со второй попытки" },
          ],
          why: "I got the best mark in the group — «Я получил лучшую оценку в группе». The best — та самая вершина сравнения!",
        },
        {
          q: "Когда нужно позвонить Данияру?",
          options: [{ t: "В воскресенье", ok: true }, { t: "В понедельник" }, { t: "Сегодня" }],
          why: "Call me on Sunday — «Позвони мне в воскресенье». Sunday — воскресенье.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 3,
      tag: "Ответь другу",
      qBefore: "Congratulations! Good ",
      qAfter: " with the next exams!",
      hintRu: "Поздравляю! Удачи со следующими экзаменами! (слово-пожелание, luck — удача)",
      note: "Good luck — «удачи». Данияр сам просил: Wish me luck! — «Пожелай мне удачи!»",
      answer: "luck",
      why: "Good luck with the next exams! — «Удачи со следующими экзаменами!» Пожелание отправлено.",
      phrase: { en: "Good luck!", ru: "Удачи!" },
    },
    {
      kind: "story",
      stage: 4,
      ru: "Ты убираешь открытку в ящик стола — к билету на самолёт и чеку из того самого кафе. Сезон 1 официально закрыт: ты читаешь письма и понимаешь голосовые на английском!",
    },
  ],
  words: [
    { en: "boring", ru: "скучный" },
    { en: "empty", ru: "пустой" },
    { en: "wish me luck", ru: "пожелай мне удачи" },
    { en: "mark", ru: "оценка" },
    { en: "on Monday / on Sunday", ru: "в понедельник / в воскресенье" },
    { en: "sofa", ru: "диван" },
  ],
};

export default chapter7;
