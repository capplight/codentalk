import type { Chapter } from "@/lib/types";

const chapter7: Chapter = {
  slug: "email-and-voicemail",
  title: "Письмо и голосовое",
  subtitle:
    "После Эдинбурга приходит главное письмо сезона — официальное предложение о работе. Читаем деловое письмо и слушаем голосовое сообщение Сары.",
  section: "text",
  stages: [
    { icon: "📧", name: "Письмо" },
    { icon: "📄", name: "Читаем" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "✍️", name: "Отвечаем" },
    { icon: "🎉", name: "Новая глава" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Ты дома, в Алматы, разбираешь фото из Эдинбурга. Динь! Письмо с лондонского адреса. Тема: «Your offer — welcome to the team!» Это ОНО. Читай внимательно — в деловых письмах важна каждая деталь.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "Официальное письмо от Сары",
      note: "Деловое письмо читают с карандашом: даты, условия, что от тебя требуется. Найди в тексте три вещи: должность, откуда работать и что сделать до пятницы.",
      text: [
        "Dear Alim,",
        "Thank you for a great summer! We are happy to offer you a {junior developer|младший разработчик} position.",
        "You will work from Almaty and visit London twice a year. Your first day is 1 September.",
        "Please answer this email before Friday.",
        "Best regards,",
        "Sarah Miller",
      ],
      questions: [
        {
          q: "Какую позицию предлагает компания?",
          options: [
            { t: "Junior developer (младший разработчик)", ok: true },
            { t: "Team lead (руководитель команды)" },
            { t: "Дизайнер" },
          ],
          why: "We are happy to offer you a junior developer position — «Мы рады предложить вам позицию младшего разработчика».",
        },
        {
          q: "Откуда будет работать Алим?",
          options: [
            { t: "Из Алматы, с поездками в Лондон дважды в год", ok: true },
            { t: "Только из Лондона" },
            { t: "Из Эдинбурга" },
          ],
          why: "You will work from Almaty and visit London twice a year — «работать из Алматы и приезжать в Лондон дважды в год». Twice — дважды (помнишь «twice a day» от врача?).",
        },
        {
          q: "Когда первый рабочий день?",
          options: [{ t: "1 сентября", ok: true }, { t: "1 августа" }, { t: "В пятницу" }],
          why: "Your first day is 1 September — «Твой первый день — 1 сентября».",
        },
        {
          q: "Что нужно сделать до пятницы?",
          options: [
            { t: "Ответить на письмо", ok: true },
            { t: "Прилететь в Лондон" },
            { t: "Подписать контракт в офисе" },
          ],
          why: "Please answer this email before Friday — «Пожалуйста, ответьте на это письмо до пятницы». Before — до.",
        },
      ],
    },
    {
      kind: "story",
      stage: 2,
      ru: "Не успел ты дочитать — телефон звонит. Пропущенный звонок и голосовое сообщение от Сары. Деловое аудирование — задача посложнее: слушай внимательно!",
    },
    {
      kind: "listening",
      stage: 2,
      tag: "Аудирование",
      intro: "Голосовое сообщение от Сары",
      note: "В деловых голосовых главное — действия и время. Лови: что НЕ ЗАБЫТЬ и КОГДА первый созвон.",
      audio: [
        "Hi Alim, it's Sarah.",
        "I hope you got our email.",
        "Don't forget to sign the contract — it's in the second email.",
        "Our first video call will be on Monday at nine.",
        "We are really happy to have you on the team!",
      ],
      questions: [
        {
          q: "Что просит не забыть Сара?",
          options: [
            { t: "Подписать контракт", ok: true },
            { t: "Купить билет в Лондон" },
            { t: "Прислать фотографию" },
          ],
          why: "Don't forget to sign the contract — «Не забудь подписать контракт». Sign — подписать.",
        },
        {
          q: "Когда первый видеозвонок?",
          options: [
            { t: "В понедельник в 9", ok: true },
            { t: "В пятницу в 9" },
            { t: "В понедельник в 10" },
          ],
          why: "Our first video call will be on Monday at nine — «Первый видеозвонок — в понедельник в девять». On + день, at + время.",
        },
        {
          q: "Какое настроение у команды?",
          options: [
            { t: "Они очень рады, что ты в команде", ok: true },
            { t: "Они сомневаются в решении" },
            { t: "Они торопят с ответом" },
          ],
          why: "We are really happy to have you on the team! — «Мы очень рады, что ты в команде!»",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 3,
      tag: "Ответь на письмо",
      q: "Начни ответ Саре — прими предложение:",
      note: "Формула согласия в деловом письме: I am happy to accept — «я рад принять». Accept — принимать (предложение).",
      words: ["I", "am", "happy", "to", "accept", "your", "offer!"],
      answer: "I am happy to accept your offer!",
      why: "I am happy to accept your offer! — «Я рад принять ваше предложение!» Не забудь начать с Dear Sarah и закончить Best regards — ты это умеешь.",
      phrase: { en: "I am happy to accept your offer!", ru: "Я рад принять ваше предложение!" },
    },
    {
      kind: "story",
      stage: 4,
      ru: "Письмо отправлено, контракт подписан, будильник на понедельник заведён. Ты только что прочитал деловое письмо и понял голосовое сообщение без единого словаря. Сезон 2 закрыт полностью!",
    },
  ],
  words: [
    { en: "offer", ru: "предложение (о работе)" },
    { en: "position", ru: "должность" },
    { en: "twice a year", ru: "дважды в год" },
    { en: "before Friday", ru: "до пятницы" },
    { en: "sign the contract", ru: "подписать контракт" },
    { en: "accept", ru: "принять (предложение)" },
  ],
};

export default chapter7;
