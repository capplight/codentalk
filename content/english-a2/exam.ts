import type { Chapter } from "@/lib/types";

const exam: Chapter = {
  slug: "exam",
  title: "Экзамен уровня A2",
  subtitle:
    "Сезон «Возвращение» в одном испытании: прошедшее время, планы, сравнения, советы — плюс чтение объявления и деловое аудирование.",
  exam: true,
  stages: [
    { icon: "📝", name: "Фразы" },
    { icon: "🔢", name: "Грамматика" },
    { icon: "📄", name: "Чтение" },
    { icon: "🎧", name: "Аудирование" },
    { icon: "🎓", name: "Результат" },
  ],
  steps: [
    {
      kind: "fill",
      stage: 0,
      tag: "Впиши слово",
      qBefore: "Yesterday we ",
      qAfter: " to a concert in the park.",
      hintRu: "Вчера мы ходили на концерт в парке. (go — но в прошлом!)",
      rule: "past-irregular",
      answer: "went",
      why: "Yesterday — сигнал прошлого, go — неправильный глагол: go → went.",
    },
    {
      kind: "choice",
      stage: 0,
      tag: "План или обещание?",
      q: "«I am going to visit my parents in July» — что это?",
      rule: "going-to-vs-will",
      options: [
        { t: "План, задуманный заранее", ok: true },
        { t: "Решение прямо сейчас" },
        { t: "Рассказ о прошлом" },
      ],
      why: "Going to — план, который был до разговора. Решение в моменте было бы через will.",
    },
    {
      kind: "fill",
      stage: 0,
      tag: "Впиши слово",
      qBefore: "Don't worry! I ",
      qAfter: " call you tonight.",
      hintRu: "Не волнуйся! Я позвоню тебе вечером. (обещание в момент разговора)",
      rule: "will",
      answer: "will",
      why: "Обещание «сделаю» в момент разговора → will: I will call you tonight.",
    },
    {
      kind: "fill",
      stage: 1,
      tag: "Впиши слово",
      qBefore: "This café is ",
      qAfter: " than the café near my house.",
      hintRu: "Это кафе дешевле, чем кафе у моего дома. (cheap — дешёвый, нужна форма сравнения)",
      rule: "comparative",
      answer: "cheaper",
      why: "Короткое слово + -er + than: cheap → cheaper — «дешевле, чем».",
    },
    {
      kind: "assemble",
      stage: 1,
      tag: "Собери фразу",
      q: "Дай совет заболевшему другу:",
      words: ["You", "should", "see", "a", "doctor."],
      answer: "You should see a doctor.",
      why: "Совет = should: You should see a doctor — «Тебе стоит показаться врачу».",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "Вопрос",
      q: "В кассе спрашивают: «Single or return?» Тебе нужно туда и обратно. Ответ?",
      options: [
        { t: "A return, please.", ok: true },
        { t: "A single, please." },
        { t: "I am single." },
      ],
      why: "Return — туда-обратно, single — в одну сторону. А «I am single» — о семейном положении 🙂",
    },
    {
      kind: "reading",
      stage: 2,
      tag: "Чтение",
      title: "Объявление о комнате",
      note: "Читаешь объявление об аренде — самый практичный навык уровня A2. Найди цену, детали и условие.",
      text: [
        "ROOM TO RENT — Greenwich",
        "Big room with two windows, five minutes from the park.",
        "It is quieter and cheaper than rooms in the centre: eighty pounds a week.",
        "Call after six in the evening.",
      ],
      questions: [
        {
          q: "Сколько стоит комната?",
          options: [
            { t: "80 фунтов в неделю", ok: true },
            { t: "18 фунтов в неделю" },
            { t: "80 фунтов в месяц" },
          ],
          why: "Eighty pounds a week — «восемьдесят фунтов в неделю». Аренду в Британии считают неделями!",
        },
        {
          q: "Чем комната лучше комнат в центре?",
          options: [
            { t: "Тише и дешевле", ok: true },
            { t: "Больше и светлее" },
            { t: "Ближе к метро" },
          ],
          why: "Quieter and cheaper than rooms in the centre — «тише и дешевле, чем комнаты в центре». Сравнения в деле!",
        },
        {
          q: "Когда можно звонить?",
          options: [
            { t: "После шести вечера", ok: true },
            { t: "До шести вечера" },
            { t: "В любое время" },
          ],
          why: "Call after six in the evening — «звоните после шести вечера». After — после.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Голосовое сообщение от коллеги — деловое аудирование",
      note: "Рабочая ситуация: что случилось и что будет. Лови прошлое и будущее в одном сообщении.",
      audio: [
        "Hi! It's Tom.",
        "I finished the report yesterday.",
        "Tomorrow we are going to show it to Sarah.",
        "The meeting is at eleven. See you!",
      ],
      questions: [
        {
          q: "Что Том сделал вчера?",
          options: [
            { t: "Закончил отчёт", ok: true },
            { t: "Показал отчёт Саре" },
            { t: "Отменил встречу" },
          ],
          why: "I finished the report yesterday — «Я закончил отчёт вчера». Finished — закончил.",
        },
        {
          q: "Что запланировано на завтра и во сколько?",
          options: [
            { t: "Показать отчёт Саре, встреча в 11", ok: true },
            { t: "Написать новый отчёт к 11" },
            { t: "Встреча с Томом в 7" },
          ],
          why: "We are going to show it to Sarah. The meeting is at eleven — «Покажем его Саре. Встреча в одиннадцать».",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Финал экзамена",
      q: "Задай главный вопрос о прошлом — ты выучил его в этом сезоне:",
      words: ["What", "did", "you", "do", "last", "year?"],
      answer: "What did you do last year?",
      why: "What did you do last year? — вопрос о прошлом через did. Уровень A2 подтверждён!",
    },
  ],
  words: [],
};

export default exam;
