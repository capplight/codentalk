import type { Chapter } from "@/lib/types";

const drills: Chapter = {
  slug: "drills-u4",
  title: "Тренажёр: переговоры и регистры",
  subtitle: "Отработка юнита «Переговоры и регистры речи»: деловой vs дружеский регистр, вежливый отказ.",
  section: "exercise",
  stages: [
    { icon: "🤵", name: "Деловой регистр" },
    { icon: "🙅", name: "Вежливый отказ" },
    { icon: "✅", name: "Готово" },
  ],
  steps: [
    {
      kind: "choice",
      stage: 0,
      tag: "Регистр",
      q: "Другу ты скажешь «Wanna coffee?». А как это же сказать коллеге на встрече?",
      note: "Чем формальнее ситуация, тем длиннее и мягче фраза.",
      options: [
        { t: "Would you like a coffee?", ok: true },
        { t: "Wanna coffee?" },
        { t: "Coffee. Now?" },
      ],
      why: "Would you like a coffee? — вежливая, деловая форма того же вопроса.",
    },
    {
      kind: "choice",
      stage: 0,
      tag: "Регистр",
      q: "Другу — «Wait a sec». Как сказать инвестору на встрече?",
      note: "Could you hold on a moment, please? — деловой эквивалент.",
      options: [
        { t: "Could you hold on a moment, please?", ok: true },
        { t: "Wait a sec, please." },
        { t: "One sec, ok?" },
      ],
      why: "Could you hold on a moment, please? — полная, вежливая деловая формула.",
    },
    {
      kind: "fill",
      stage: 0,
      tag: "Деловая формула",
      qBefore: "We ",
      qAfter: " like to discuss the details.",
      hintRu: "Мы хотели бы обсудить детали. (would для вежливого «хотели бы»)",
      answer: "would",
      why: "We would like to discuss — стандартная деловая формула предложения.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "Вежливый отказ",
      q: "Инвестор предлагает условия, которые тебе не подходят. Как вежливо отказать?",
      note: "I'm afraid… — мягкое деловое «к сожалению».",
      options: [
        { t: "I'm afraid we can't agree to that.", ok: true },
        { t: "No way." },
        { t: "That's a bad deal." },
      ],
      why: "I'm afraid we can't agree to that — вежливый, но чёткий отказ.",
    },
    {
      kind: "choice",
      stage: 1,
      tag: "Вежливый отказ",
      q: "Тебе нужно время подумать перед ответом на предложение. Что сказать?",
      note: "Let me think it over — просьба о времени на раздумье.",
      options: [
        { t: "Let me think it over.", ok: true },
        { t: "Maybe, whatever." },
        { t: "I don't care, decide yourself." },
      ],
      why: "Let me think it over — профессиональная просьба о паузе перед решением.",
    },
    {
      kind: "assemble",
      stage: 2,
      tag: "Финал",
      q: "Собери вежливое завершение переговоров: «Спасибо большое за ваше время, я уважаю ваше решение»:",
      note: "Thank you so much for your time, I respect your decision.",
      words: ["Thank", "you", "so", "much", "for", "your", "time,", "I", "respect", "your", "decision."],
      answer: "Thank you so much for your time, I respect your decision.",
      why: "Thank you so much for your time, I respect your decision — достойное деловое завершение. Тренажёр пройден!",
    },
  ],
  words: [],
};

export default drills;
