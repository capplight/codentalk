import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-milkmaid",
  title: "Молочница и ведро молока (по Эзопу)",
  subtitle:
    "Девушка несёт молоко и строит великие планы… Басня, будто написанная для урока про going to: вся она — о мечтах наперёд.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🥛", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Помнишь правило going to — «план заранее»? Вот целая басня, построенная на этой конструкции. Заодно узнаешь, откуда взялась пословица «не считай цыплят, пока не вылупились».",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Milkmaid and Her Pail",
      note: "Milkmaid — молочница, pail — ведро. Считай, сколько раз встретится going to — и увидишь, как растут планы девушки.",
      text: [
        "A young {milkmaid|молочница} carries a {pail|ведро} of milk on her head and dreams.",
        "«I am going to sell this milk at the market, — she thinks. — With the money I am going to buy twenty eggs».",
        "«The eggs are going to become twenty {chickens|цыплята}. I am going to sell the chickens and buy a beautiful dress!»",
        "«In this dress I am going to dance at the village party. All the boys are going to look at me — and I will turn my head like this!»",
        "She turns her head — and the pail falls. The milk is on the road. No milk, no eggs, no chickens, no dress.",
        "Her mother smiles: «Don't count your chickens before they hatch»." ,
      ],
      questions: [
        {
          q: "Какая была ПЕРВАЯ ступень плана молочницы?",
          options: [
            { t: "Продать молоко на рынке", ok: true },
            { t: "Купить платье" },
            { t: "Пойти на деревенский праздник" },
          ],
          why: "I am going to sell this milk at the market — с продажи молока начиналась вся цепочка планов.",
        },
        {
          q: "Почему ведро упало?",
          options: [
            { t: "Девушка тряхнула головой, представляя себя на празднике", ok: true },
            { t: "Она споткнулась о камень" },
            { t: "Ведро было дырявым" },
          ],
          why: "«I will turn my head like this!» She turns her head — and the pail falls. Мечта буквально уронила ведро.",
        },
        {
          q: "Что осталось от плана в итоге?",
          options: [
            { t: "Ничего: ни молока, ни яиц, ни цыплят, ни платья", ok: true },
            { t: "Только яйца" },
            { t: "Молоко и платье" },
          ],
          why: "No milk, no eggs, no chickens, no dress — вся цепочка рухнула вместе с ведром.",
        },
        {
          q: "Какая грамматика держит всю басню?",
          options: [
            { t: "going to — планы, задуманные заранее", ok: true },
            { t: "Past Simple — рассказ о прошлом" },
            { t: "should — советы" },
          ],
          why: "I am going to sell… buy… dance — каждая мечта молочницы построена на going to. Грамматика уровня A2 в действии!",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль — слова матери, знаменитая пословица",
      note: "Count — считать, chickens — цыплята, hatch — вылупляться.",
      audio: ["Don't count your chickens before they hatch."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Не считай цыплят, пока они не вылупились", ok: true },
            { t: "Носи ведро в руках, а не на голове" },
            { t: "Мечтать вредно" },
          ],
          why: "Don't count your chickens before they hatch — «Не считай цыплят до того, как они вылупятся». Русский аналог: «Цыплят по осени считают».",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "I am ",
      qAfter: " to buy twenty eggs.",
      hintRu: "Я собираюсь купить двадцать яиц. (конструкция плана: am … to)",
      note: "План заранее: am/is/are + going + to + глагол.",
      answer: "going",
      why: "I am going to buy twenty eggs — «Я собираюсь купить двадцать яиц». Главная конструкция басни.",
    },
  ],
  words: [
    { en: "milkmaid / pail", ru: "молочница / ведро" },
    { en: "market", ru: "рынок" },
    { en: "chickens", ru: "цыплята" },
    { en: "dress", ru: "платье" },
    { en: "count", ru: "считать" },
    { en: "hatch", ru: "вылупляться" },
  ],
};

export default chapter;
