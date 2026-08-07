import type { Unit } from "@/lib/types";

const units: Unit[] = [
  {
    slug: "unit-1",
    title: "Смысл между строк",
    subtitle: "Иностранный журналист звонит с вопросами о прошлом — время для гипотез и предположений.",
    goals: [
      "строить смешанные условные (прошлое влияет на настоящее)",
      "предполагать о прошлом через must/might/can't have",
      "давать интервью о прошлых решениях",
    ],
    ruleIds: ["mixed-conditionals", "past-modals-speculation"],
    exerciseSlugs: ["drills-u1"],
    questSlug: "the-journalist-calls",
    textSlug: "text-the-necklace",
  },
  {
    slug: "unit-2",
    title: "Эмфаза и акцент",
    subtitle: "Приглашение выступить на международной конференции — учимся расставлять акценты в речи.",
    goals: [
      "выделять мысль через it was… that / what… was",
      "использовать инверсию после never, not only",
      "готовить выступление с чёткими акцентами",
    ],
    ruleIds: ["cleft-sentences", "inversion"],
    exerciseSlugs: ["drills-u2"],
    questSlug: "the-keynote-invitation",
    textSlug: "text-if-poem",
  },
  {
    slug: "unit-3",
    title: "Официальный и академический язык",
    subtitle: "Заявка на партнёрство с международным фондом — язык грантов, отчётов и деловых писем.",
    goals: [
      "заменять глаголы существительными (номинализация)",
      "смягчать утверждения через hedging",
      "использовать формальные связки вместо разговорных",
    ],
    ruleIds: ["nominalization", "hedging", "formal-connectors"],
    exerciseSlugs: ["drills-u3"],
    questSlug: "the-partnership-proposal",
    textSlug: "the-proposal",
  },
  {
    slug: "unit-4",
    title: "Живой английский на высоком уровне",
    subtitle: "Неформальный ужин с международной командой — фразовые глаголы и естественная беглость.",
    goals: [
      "использовать продвинутые фразовые глаголы и коллокации",
      "понимать эллипсис и замещение в живой речи",
      "поддерживать непринуждённую беседу с носителями",
    ],
    ruleIds: ["phrasal-verbs-advanced", "ellipsis-substitution"],
    exerciseSlugs: ["drills-u4"],
    questSlug: "dinner-with-collaborators",
    textSlug: "text-jumping-frog",
  },
  {
    slug: "unit-5",
    title: "Сложные конструкции",
    subtitle: "Редактура пресс-релиза с носителем языка — причастные обороты и компактные фразы.",
    goals: [
      "сокращать предложения через причастные обороты",
      "использовать редуцированные придаточные",
      "редактировать текст в сторону более естественного звучания",
    ],
    ruleIds: ["participle-clauses", "reduced-relatives"],
    exerciseSlugs: ["drills-u5"],
    questSlug: "editing-the-press-release",
    textSlug: "the-press-release",
  },
  {
    slug: "unit-6",
    title: "Голос, который слышат",
    subtitle: "Финал сезона: главная речь на международной конференции — и разговор с ученицей Аминой.",
    goals: [
      "использовать приёмы убедительной речи (правило трёх, анафора)",
      "строить риторические вопросы",
      "произносить речь, которую запомнят",
    ],
    ruleIds: ["rhetorical-devices"],
    exerciseSlugs: ["drills-u6"],
    questSlug: "the-world-is-listening",
  },
];

export default units;
