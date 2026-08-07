import type { Unit } from "@/lib/types";

const units: Unit[] = [
  {
    slug: "unit-1",
    title: "Present Perfect: опыт и результат",
    subtitle: "Время, которое связывает прошлое с настоящим: «я бывал», «я уже сделал».",
    goals: [
      "спрашивать об опыте: Have you ever…?",
      "использовать ever, never, already, yet",
      "различать Present Perfect и Past Simple",
    ],
    ruleIds: ["present-perfect", "perfect-signals", "perfect-vs-past"],
    exerciseSlugs: ["drills"],
    questSlug: "new-life",
    textSlug: "text-gift-of-magi",
  },
  {
    slug: "unit-2",
    title: "Мнения и обсуждения",
    subtitle: "Как высказать позицию, вежливо не согласиться и описать действие наречием.",
    goals: [
      "высказывать мнение (I think / In my opinion)",
      "вежливо возражать",
      "правильно образовывать наречия",
    ],
    ruleIds: ["opinions", "adverbs"],
    exerciseSlugs: ["drills-u2"],
    questSlug: "global-team",
    textSlug: "text-three-questions",
  },
  {
    slug: "unit-3",
    title: "Звонки и деловые письма",
    subtitle: "Формулы телефонного разговора и структура официального письма.",
    goals: [
      "вести деловой звонок (Could I speak to…?)",
      "писать письмо: Dear → суть → Best regards",
      "использовать вежливые формы could и would",
    ],
    ruleIds: ["polite-requests", "business-letter"],
    exerciseSlugs: ["drills-2"],
    questSlug: "calls-and-emails",
    textSlug: "text-cop-and-anthem",
  },
  {
    slug: "unit-4",
    title: "Условные предложения",
    subtitle: "«Если…, то…» для реальных условий и «на твоём месте я бы…» для советов.",
    goals: [
      "строить реальные условия (if + present, will)",
      "давать советы через If I were you, I would…",
      "не ставить will после if",
    ],
    ruleIds: ["first-conditional", "second-conditional"],
    exerciseSlugs: ["drills-u4"],
    questSlug: "if-i-were-you",
    textSlug: "text-happy-prince",
  },
  {
    slug: "unit-5",
    title: "Работа мечты",
    subtitle: "Собеседование уровня B1 и связки глаголов: want to do против enjoy doing.",
    goals: [
      "рассказывать о достижениях",
      "различать связки to + глагол и глагол + -ing",
      "задавать вопросы работодателю",
    ],
    ruleIds: ["verb-patterns"],
    exerciseSlugs: ["drills-u5"],
    questSlug: "dream-job",
    textSlug: "the-article",
  },
  {
    slug: "unit-6",
    title: "Своя история",
    subtitle: "Финал сезона: запуск собственного дела и разговор о том, что важно.",
    goals: ["рассказывать о результатах работы", "понимать отзывы", "выражать благодарность"],
    ruleIds: [],
    questSlug: "your-own-story",
  },
];

export default units;
