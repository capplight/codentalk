import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-boy-who-cried-wolf",
  title: "Мальчик, который кричал «Волк!» (по Эзопу)",
  subtitle:
    "Великая басня о доверии — и отличная тренировка Past Simple: весь текст в прошедшем времени, как раз по теме уровня A2.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🐺", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Эта басня — про цену лжи. А для тебя ещё и тренажёр Past Simple: смотри, как работают went, cried, came, laughed в живой истории.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Boy Who Cried Wolf",
      note: "Весь текст — в прошедшем времени. Замечай глаголы с -ed и неправильные: went, came, ran. Shepherd — пастух.",
      text: [
        "A young {shepherd|пастух} boy watched sheep near a village. His work was boring.",
        "One day he wanted some fun. He ran to the village and cried: «Wolf! Wolf! A wolf is eating the sheep!»",
        "The people ran to help him. But there was no wolf. The boy laughed: «I tricked you!»",
        "A week later he did it again. «Wolf! Wolf!» The people came again — and again there was no wolf. They were angry.",
        "Then one evening a real {wolf|волк} came. The boy cried: «Wolf! Wolf! Please help!»",
        "But this time nobody came. The people said: «He is lying again». And the wolf took the sheep.",
        "The boy understood too late: nobody believes a {liar|лжец}, even when he tells the truth.",
      ],
      questions: [
        {
          q: "Почему мальчик в первый раз закричал «Волк!»?",
          options: [
            { t: "Ему было скучно, он хотел развлечься", ok: true },
            { t: "Он увидел настоящего волка" },
            { t: "Он хотел позвать друзей" },
          ],
          why: "His work was boring. One day he wanted some fun — работа была скучной, он хотел развлечься.",
        },
        {
          q: "Что сделали люди после второго обмана?",
          options: [
            { t: "Разозлились", ok: true },
            { t: "Посмеялись вместе с ним" },
            { t: "Забрали у него овец" },
          ],
          why: "The people came again — and again there was no wolf. They were angry. — Люди пришли снова и разозлились.",
        },
        {
          q: "Что случилось, когда пришёл настоящий волк?",
          options: [
            { t: "Никто не пришёл на помощь, и волк унёс овец", ok: true },
            { t: "Люди прибежали и прогнали волка" },
            { t: "Мальчик сам прогнал волка" },
          ],
          why: "But this time nobody came… And the wolf took the sheep. — Никто не пришёл, волк забрал овец.",
        },
        {
          q: "Найди в тексте: как будет «Я вас обманул!»?",
          options: [
            { t: "I tricked you!", ok: true },
            { t: "I helped you!" },
            { t: "I believed you!" },
          ],
          why: "I tricked you! — «Я вас обманул!» Trick — обманывать, разыгрывать.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни",
      note: "Believe — верить, liar — лжец, truth — правда. Три ключевых слова этой истории.",
      audio: ["Nobody believes a liar, even when he tells the truth."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Лжецу не верят, даже когда он говорит правду", ok: true },
            { t: "Волков не нужно бояться" },
            { t: "Работа пастуха очень скучная" },
          ],
          why: "Nobody believes a liar, even when he tells the truth — цена лжи: потерянное доверие.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "Then one evening a real wolf ",
      qAfter: " to the village.",
      hintRu: "Однажды вечером настоящий волк пришёл в деревню. (come — но в прошлом!)",
      note: "Неправильный глагол из текста: come → came.",
      answer: "came",
      why: "come → came — пришёл. Ты прочитал целую басню в Past Simple!",
    },
  ],
  words: [
    { en: "shepherd / sheep", ru: "пастух / овцы" },
    { en: "cried", ru: "кричал (cry → cried)" },
    { en: "tricked", ru: "обманул" },
    { en: "nobody", ru: "никто" },
    { en: "liar / truth", ru: "лжец / правда" },
    { en: "believe", ru: "верить" },
  ],
};

export default chapter;
