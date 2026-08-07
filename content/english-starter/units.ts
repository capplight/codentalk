import type { Unit } from "@/lib/types";

const units: Unit[] = [
  {
    slug: "unit-1",
    title: "Первые слова и глагол to be",
    subtitle: "Знакомство, приветствие и главная связка английского языка.",
    goals: ["здороваться и знакомиться", "называть своё имя", "правильно ставить am / is / are"],
    ruleIds: ["pronouns", "to-be"],
    exerciseSlugs: ["drills"],
    questSlug: "hello",
    textSlug: "text-lion-and-mouse",
  },
  {
    slug: "unit-2",
    title: "Вопросы и отрицания",
    subtitle: "Как спросить и как сказать «не» — плюс числа и анкета на визу.",
    goals: [
      "задавать вопросы с am / is / are",
      "строить отрицания через not",
      "считать и понимать числа на слух",
    ],
    ruleIds: ["to-be-negative", "question-words"],
    exerciseSlugs: ["drills-2"],
    questSlug: "numbers-and-ticket",
    textSlug: "text-hare-and-tortoise",
  },
  {
    slug: "unit-3",
    title: "Семья и принадлежность",
    subtitle: "Мой, твой, его, её — и глагол have, чтобы рассказать, что у тебя есть.",
    goals: ["рассказывать о семье", "говорить «у меня есть…»", "различать his и her"],
    ruleIds: ["possessive", "have"],
    exerciseSlugs: ["drills-3"],
    questSlug: "my-family",
    textSlug: "text-ant-and-dove",
  },
  {
    slug: "unit-4",
    title: "Вещи, артикли и вежливость",
    subtitle: "Артикли a / an, множественное число и вежливые просьбы перед вылетом.",
    goals: [
      "выбирать между a и an",
      "образовывать множественное число",
      "вежливо просить и заказывать",
    ],
    ruleIds: ["articles", "plural", "word-order", "politeness"],
    exerciseSlugs: ["drills-4"],
    questSlug: "packing",
    textSlug: "message-from-aidana",
  },
];

export default units;
