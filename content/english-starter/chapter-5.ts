import type { Chapter } from "@/lib/types";

const chapter5: Chapter = {
  slug: "message-from-aidana",
  title: "Сообщение от Айданы",
  subtitle:
    "Вечер перед вылетом. Айдана прислала записку и голосовое — твоё первое настоящее чтение и аудирование на английском!",
  section: "text",
  stages: [
    { icon: "🌙", name: "Вечер" },
    { icon: "📄", name: "Читаем" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "✅", name: "Всё понял!" },
    { icon: "🛫", name: "Завтра — вылет" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Вечер перед вылетом. Чемодан собран, документы проверены. Телефон вибрирует — сообщение от Айданы. Целиком на английском! «Справишься, — написала она по-русски в конце. — Ты готов». Проверим?",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "Сообщение от Айданы",
      note: "Сначала прочитай текст целиком, не застревая на незнакомых словах: подчёркнутые можно нажать и увидеть перевод. Потом отвечай на вопросы — подглядывать в текст можно и нужно!",
      text: [
        "Hello! Are you ready?",
        "Your {flight|рейс} is at ten. The airport bus is at seven — don't be late!",
        "Take your {passport|паспорт} and your ticket. Don't take food — they have food on the plane.",
        "Call me from London! Good luck!",
        "— Aidana",
      ],
      questions: [
        {
          q: "Во сколько рейс?",
          options: [{ t: "В 10", ok: true }, { t: "В 7" }, { t: "В 6" }],
          why: "Your flight is at ten — «Твой рейс в десять». Ten — 10.",
        },
        {
          q: "Во сколько автобус в аэропорт?",
          options: [{ t: "В 7", ok: true }, { t: "В 10" }, { t: "В 9" }],
          why: "The airport bus is at seven — «Автобус в аэропорт в семь». Seven — 7.",
        },
        {
          q: "Что нужно взять с собой?",
          options: [
            { t: "Паспорт и билет", ok: true },
            { t: "Еду и воду" },
            { t: "Тёплую куртку" },
          ],
          why: "Take your passport and your ticket — «Возьми паспорт и билет».",
        },
        {
          q: "Верно или неверно: еду брать не нужно?",
          options: [{ t: "Верно", ok: true }, { t: "Неверно" }],
          why: "Don't take food — they have food on the plane. — «Еду не бери — еда есть в самолёте». Верно!",
        },
      ],
    },
    {
      kind: "story",
      stage: 2,
      ru: "Ты понял всё сообщение! А через минуту приходит ещё и голосовое. Наушники в уши — слушаем.",
    },
    {
      kind: "listening",
      stage: 2,
      tag: "Аудирование",
      intro: "Голосовое сообщение от Айданы",
      note: "Слушай спокойно: можно переслушивать сколько угодно раз. Сначала просто улови общий смысл, при втором прослушивании лови детали — числа и действия.",
      audio: [
        "Hi! It's Aidana.",
        "One more thing: the taxi to the bus station comes at six.",
        "And please call me from the airport, OK?",
        "Good night!",
      ],
      questions: [
        {
          q: "Во сколько приедет такси?",
          options: [{ t: "В 6", ok: true }, { t: "В 7" }, { t: "В 10" }],
          why: "The taxi comes at six — «Такси приедет в шесть». Six — 6.",
        },
        {
          q: "О чём просит Айдана?",
          options: [
            { t: "Позвонить ей из аэропорта", ok: true },
            { t: "Написать ей из самолёта" },
            { t: "Разбудить её в шесть" },
          ],
          why: "Please call me from the airport — «Пожалуйста, позвони мне из аэропорта».",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 3,
      tag: "Собери ответ",
      q: "Ответь Айдане — ты готов к поездке:",
      note: "Всё знакомое: I am ready — я готов, for my trip — к моей поездке.",
      words: ["I", "am", "ready", "for", "my", "trip!"],
      answer: "I am ready for my trip!",
      why: "I am ready for my trip! — «Я готов к поездке!» И это чистая правда: ты только что прочитал и понял на слух настоящий английский.",
      phrase: { en: "I am ready for my trip!", ru: "Я готов к поездке!" },
    },
    {
      kind: "story",
      stage: 4,
      ru: "Айдана отвечает одним смайликом: 🎉. Ты выключаешь свет. Завтра в это время ты будешь в Лондоне — и ты уже умеешь читать и понимать английский на слух. Курс Starter пройден полностью!",
    },
  ],
  words: [
    { en: "flight", ru: "рейс" },
    { en: "don't be late", ru: "не опаздывай" },
    { en: "take", ru: "возьми" },
    { en: "call me", ru: "позвони мне" },
    { en: "one more thing", ru: "и ещё кое-что" },
    { en: "good night", ru: "спокойной ночи" },
  ],
};

export default chapter5;
