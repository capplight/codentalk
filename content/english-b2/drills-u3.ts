import type { Chapter } from "@/lib/types";

const drills: Chapter = {
  slug: "drills-u3",
  title: "Тренажёр: язык презентаций",
  subtitle: "Отработка юнита «Презентации»: структура выступления и фразы-мостики.",
  section: "exercise",
  stages: [
    { icon: "🎤", name: "Открытие" },
    { icon: "🧭", name: "Структура" },
    { icon: "✅", name: "Готово" },
  ],
  steps: [
    {
      kind: "choice",
      stage: 0,
      tag: "Открытие",
      q: "Как начать презентацию о своём проекте?",
      note: "Let me tell you about… — стандартное вежливое открытие.",
      options: [
        { t: "Let me tell you about our project.", ok: true },
        { t: "So, project, right." },
        { t: "I will now speak about project." },
      ],
      why: "Let me tell you about… — естественное, профессиональное открытие.",
    },
    {
      kind: "fill",
      stage: 1,
      tag: "Структура",
      qBefore: "",
      qAfter: ", let me tell you our story.",
      hintRu: "Сначала позвольте рассказать нашу историю. (первый пункт структуры)",
      answer: "First",
      why: "First — первый шаг в структуре First → Then → Finally.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "Структура",
      q: "Ты переходишь ко второй части выступления. С какого слова начать?",
      note: "Then — переход к следующему пункту.",
      options: [
        { t: "Then, we tested it with real users.", ok: true },
        { t: "First, we tested it with real users, again." },
        { t: "Finally, we tested it with real users." },
      ],
      why: "Then обозначает следующий шаг после First.",
    },
    {
      kind: "fill",
      stage: 1,
      tag: "Структура",
      qBefore: "",
      qAfter: ", thank you for listening!",
      hintRu: "И в завершение — спасибо, что выслушали! (последний пункт структуры)",
      answer: "Finally",
      why: "Finally завершает структуру First → Then → Finally.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "Вопросы из зала",
      q: "Тебе задали сложный вопрос из зала, нужна секунда подумать. Что сказать?",
      note: "That's a great question — вежливо тянет паузу перед ответом.",
      options: [
        { t: "That's a great question.", ok: true },
        { t: "I don't know, next!" },
        { t: "Why do you ask that?" },
      ],
      why: "That's a great question — профессиональная пауза перед ответом.",
    },
    {
      kind: "assemble",
      stage: 2,
      tag: "Финал",
      q: "Собери финальную фразу выступления: «И в завершение — спасибо, что выслушали!»:",
      note: "Finally, thank you for listening! — стандартное закрытие презентации.",
      words: ["Finally,", "thank", "you", "for", "listening!"],
      answer: "Finally, thank you for listening!",
      why: "Finally, thank you for listening! — классическая финальная фраза. Тренажёр пройден!",
    },
  ],
  words: [],
};

export default drills;
