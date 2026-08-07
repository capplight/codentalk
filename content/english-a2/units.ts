import type { Unit } from "@/lib/types";

const units: Unit[] = [
  {
    slug: "unit-1",
    title: "Прошедшее время",
    subtitle: "Всё о прошлом: was/were, окончание -ed, неправильные глаголы и вопросы через did.",
    goals: [
      "рассказывать, что было (was / were)",
      "образовывать прошедшее через -ed",
      "знать главные неправильные глаголы",
      "задавать вопросы о прошлом через did",
    ],
    ruleIds: ["was-were", "past-regular", "past-irregular", "past-did"],
    exerciseSlugs: ["drills"],
    questSlug: "one-year-later",
    textSlug: "text-boy-who-cried-wolf",
  },
  {
    slug: "unit-2",
    title: "Планы и обещания",
    subtitle: "Два способа говорить о будущем: going to для планов и will для решений в моменте.",
    goals: [
      "рассказывать о планах через going to",
      "давать обещания через will",
      "различать план и решение прямо сейчас",
    ],
    ruleIds: ["going-to", "will", "going-to-vs-will"],
    exerciseSlugs: ["drills-u2"],
    questSlug: "internship-first-day",
    textSlug: "text-milkmaid",
  },
  {
    slug: "unit-3",
    title: "Сравнения",
    subtitle: "Больше, дешевле, самый лучший — как сравнивать вещи и выбирать из вариантов.",
    goals: [
      "сравнивать два предмета (-er than)",
      "называть самый лучший вариант (the best)",
      "читать объявления об аренде",
    ],
    ruleIds: ["comparative", "superlative"],
    exerciseSlugs: ["drills-u3"],
    questSlug: "room-to-rent",
    textSlug: "text-golden-goose",
  },
  {
    slug: "unit-4",
    title: "Советы и обязанности",
    subtitle: "Should, must и have to: как советовать, как говорить о правилах и запретах.",
    goals: [
      "давать советы через should",
      "говорить об обязанностях (must / have to)",
      "различать «нельзя» и «не обязательно»",
    ],
    ruleIds: ["should", "have-to-must"],
    exerciseSlugs: ["drills-2"],
    questSlug: "at-the-doctor",
    textSlug: "text-father-and-sons",
  },
  {
    slug: "unit-5",
    title: "Собеседование и деловая переписка",
    subtitle: "Как рассказать о себе работодателю и разобраться в официальном письме.",
    goals: ["рассказывать о себе на собеседовании", "читать деловое письмо", "принимать предложение"],
    ruleIds: [],
    questSlug: "the-interview",
    textSlug: "email-and-voicemail",
  },
  {
    slug: "unit-6",
    title: "Путешествие и повторение",
    subtitle: "Финал сезона: поездка в Эдинбург, где встречается всё изученное разом.",
    goals: ["понимать объявления на вокзале", "сравнивать места", "обещать вернуться"],
    ruleIds: [],
    questSlug: "edinburgh",
  },
];

export default units;
