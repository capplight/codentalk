import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-ant-and-dove",
  title: "Муравей и голубка (по Эзопу)",
  subtitle:
    "Крошечная история о взаимовыручке: сегодня спасли тебя — завтра спасёшь ты. Одна из самых коротких и добрых басен Эзопа.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🐜", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Муравей, голубка и охотник — три героя, четыре предложения, вечная мысль. Идеальный текст, чтобы почувствовать: ты уже читаешь по-английски.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Ant and the Dove",
      note: "Ant — муравей, dove — голубка. История совсем короткая — прочитай её дважды и отвечай уверенно.",
      text: [
        "An {ant|муравей} is thirsty. He goes to the river and drinks. Oh no! He falls into the water!",
        "A {dove|голубка} sees him. She drops a {leaf|лист} into the river. The ant climbs on the leaf — he is safe!",
        "One week later, a {hunter|охотник} wants to catch the dove. She does not see him.",
        "The ant runs and bites the hunter's foot. «Ouch!» The dove hears him and flies away.",
        "One good turn deserves another: today you help me, tomorrow I help you.",
      ],
      questions: [
        {
          q: "Что случилось с муравьём у реки?",
          options: [
            { t: "Он упал в воду", ok: true },
            { t: "Он встретил охотника" },
            { t: "Он потерял лист" },
          ],
          why: "He falls into the water! — «Он падает в воду!» Fall — падать.",
        },
        {
          q: "Как голубка спасла муравья?",
          options: [
            { t: "Бросила в реку лист, и он забрался на него", ok: true },
            { t: "Вытащила его клювом" },
            { t: "Позвала других муравьёв" },
          ],
          why: "She drops a leaf into the river. The ant climbs on the leaf — лист стал для муравья лодкой.",
        },
        {
          q: "Как муравей вернул долг?",
          options: [
            { t: "Укусил охотника за ногу — голубка услышала и улетела", ok: true },
            { t: "Принёс голубке еду" },
            { t: "Спрятал голубку в траве" },
          ],
          why: "The ant runs and bites the hunter's foot — «Муравей подбегает и кусает охотника за ногу». Bite — кусать.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни — английская пословица о взаимной помощи",
      note: "Good turn — доброе дело, deserves — заслуживает, another — ещё одно.",
      audio: ["One good turn deserves another."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Доброе дело заслуживает ответного добра", ok: true },
            { t: "Муравьи сильнее охотников" },
            { t: "У реки нужно быть осторожным" },
          ],
          why: "One good turn deserves another — «Одно доброе дело заслуживает другого». Русский аналог: «Долг платежом красен».",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Закрепи",
      qBefore: "Today you help me, tomorrow I ",
      qAfter: " you.",
      hintRu: "Сегодня ты помогаешь мне, завтра я помогаю тебе. (help — помогать)",
      note: "Формула взаимности из финала басни. С «I» глагол без окончаний.",
      answer: "help",
      why: "Today you help me, tomorrow I help you — простая фраза, в которой вся басня.",
      phrase: { en: "Today you help me, tomorrow I help you.", ru: "Сегодня ты помогаешь мне, завтра я — тебе." },
    },
  ],
  words: [
    { en: "ant / dove", ru: "муравей / голубка" },
    { en: "river", ru: "река" },
    { en: "leaf", ru: "лист" },
    { en: "hunter", ru: "охотник" },
    { en: "bite", ru: "кусать" },
    { en: "fly away", ru: "улетать" },
  ],
};

export default chapter;
