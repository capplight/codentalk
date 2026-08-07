import type { Unit } from "@/lib/types";

const units: Unit[] = [
  {
    slug: "unit-1",
    title: "Все времена в живой речи",
    subtitle: "Сводная карта времён и процесс в прошлом — как выбирать нужное не задумываясь.",
    goals: [
      "выбирать время по сигнальным словам",
      "использовать Past Continuous",
      "различать Past Simple и Present Perfect",
    ],
    ruleIds: ["tense-map", "past-continuous"],
    exerciseSlugs: ["drills"],
    questSlug: "all-tenses-one-day",
    textSlug: "text-last-leaf",
  },
  {
    slug: "unit-2",
    title: "Идиомы",
    subtitle: "Фразы, которые не переводятся дословно, — и без которых речь звучит как учебник.",
    goals: ["понимать идиомы в речи", "использовать их уместно", "догадываться о смысле из контекста"],
    ruleIds: ["idioms"],
    exerciseSlugs: ["drills-u2"],
    questSlug: "idioms",
    textSlug: "text-three-men-boat",
  },
  {
    slug: "unit-3",
    title: "Презентации",
    subtitle: "Как выступать перед залом: структура, фразы-мостики и ответы на вопросы.",
    goals: [
      "строить выступление: First → Then → Finally",
      "брать паузу профессионально",
      "завершать выступление",
    ],
    ruleIds: ["presentations"],
    exerciseSlugs: ["drills-u3"],
    questSlug: "the-presentation",
    textSlug: "text-sherlock-observe",
  },
  {
    slug: "unit-4",
    title: "Переговоры и регистры речи",
    subtitle: "Разница между разговором с другом и с инвестором — и как вежливо сказать «нет».",
    goals: [
      "уточнять условия предложения",
      "переключаться между деловым и дружеским регистром",
      "вежливо отказывать",
    ],
    ruleIds: ["formal-register"],
    exerciseSlugs: ["drills-u4"],
    questSlug: "negotiations",
    textSlug: "text-the-bet",
  },
  {
    slug: "unit-5",
    title: "Британский юмор",
    subtitle: "Преуменьшения, ирония и хвостовые вопросы — культурный код, а не только грамматика.",
    goals: [
      "расшифровывать британские преуменьшения",
      "строить хвостовые вопросы",
      "поддерживать светскую беседу",
    ],
    ruleIds: ["understatement", "tag-questions"],
    exerciseSlugs: ["drills-2"],
    questSlug: "british-humour",
    textSlug: "the-big-interview",
  },
  {
    slug: "unit-6",
    title: "Пассив и косвенная речь",
    subtitle: "Последние две большие темы курса — и финал всей истории.",
    goals: [
      "использовать страдательный залог",
      "передавать чужие слова",
      "рассказывать о своём пути",
    ],
    ruleIds: ["passive", "reported"],
    exerciseSlugs: ["drills-u6"],
    questSlug: "full-circle",
  },
];

export default units;
