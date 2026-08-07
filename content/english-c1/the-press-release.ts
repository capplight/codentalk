import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "the-press-release",
  title: "Пресс-релиз",
  subtitle: "Финальная, отредактированная версия пресс-релиза о партнёрстве — образец компактного письменного английского уровня C1.",
  section: "text",
  stages: [
    { icon: "📰", name: "Документ" },
    { icon: "🧐", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Вот финальный текст пресс-релиза после правок Эммы — сравни его с более тяжеловесным черновиком из прошлой главы. Заметь, сколько причастных оборотов и редуцированных придаточных делают его компактнее.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "CodeNTalk Partners With Global Education Foundation",
      note: "Почти каждое длинное предложение здесь держится на причастном обороте или редуцированном придаточном — посчитай, сколько ты найдёшь.",
      text: [
        "Founded by one person with a simple idea, CodeNTalk today announced a new partnership with the Global Education Foundation, aimed at bringing free language education to underserved communities worldwide.",
        "Having grown entirely through word of mouth, the platform now serves learners in over forty countries, offering courses ranging from absolute beginner to near-native fluency, all completely free of charge.",
        "«Access to quality education should not depend on income», said Alim, the platform's founder, speaking at the announcement. «Everything built here was built with that one idea in mind».",
        "The team building the platform, spread across multiple time zones, has maintained consistent quality without any paid advertising — a fact the foundation cited as central to its decision to partner.",
        "Learners interested in the new courses funded by this partnership can expect them to launch within the next six months, according to a statement released by both organisations.",
      ],
      questions: [
        {
          q: "Как выросла платформа CodeNTalk, согласно пресс-релизу?",
          options: [
            { t: "Полностью благодаря сарафанному радио", ok: true },
            { t: "Благодаря крупному рекламному бюджету" },
            { t: "Благодаря государственному финансированию" },
          ],
          why: "Having grown entirely through word of mouth — рост без единой платной рекламы.",
        },
        {
          q: "Какую главную идею повторяет основатель Алим в своей цитате?",
          options: [
            { t: "Доступ к качественному образованию не должен зависеть от дохода", ok: true },
            { t: "Технологии важнее содержания курсов" },
            { t: "Партнёрство было случайностью" },
          ],
          why: "Access to quality education should not depend on income — ключевая фраза, повторяющаяся с самой заявки на партнёрство.",
        },
        {
          q: "Что фонд назвал центральным фактором своего решения о партнёрстве?",
          options: [
            { t: "Стабильное качество без платной рекламы", ok: true },
            { t: "Большой штат маркетологов" },
            { t: "Известность основателя в прессе" },
          ],
          why: "a fact the foundation cited as central to its decision to partner — устойчивое качество сыграло решающую роль.",
        },
        {
          q: "Когда ожидается запуск новых курсов по партнёрству?",
          options: [
            { t: "В течение следующих шести месяцев", ok: true },
            { t: "Уже на следующей неделе" },
            { t: "Дата пока не объявлена" },
          ],
          why: "can expect them to launch within the next six months — конкретный, хоть и не мгновенный, срок.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Цитата основателя из пресс-релиза",
      note: "speaking at the announcement — причастный оборот, описывающий, как именно Алим сказал эту фразу.",
      audio: [
        "Access to quality education should not depend on income, said Alim, the platform's founder, speaking at the announcement.",
      ],
      questions: [
        {
          q: "Какую функцию выполняет «speaking at the announcement» в этом предложении?",
          options: [
            { t: "Причастный оборот, описывающий обстоятельства, в которых сказана цитата", ok: true },
            { t: "Отдельное самостоятельное предложение" },
            { t: "Название мероприятия" },
          ],
          why: "speaking at the announcement — компактный причастный оборот вместо «while he was speaking at the announcement».",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль для разговорника",
      q: "Собери главную цитату пресс-релиза:",
      note: "Access to quality education should not depend on income.",
      words: ["Access", "to", "quality", "education", "should", "not", "depend", "on", "income."],
      answer: "Access to quality education should not depend on income.",
      why: "Эта фраза прошла через всю историю C1 — от заявки на партнёрство до финального пресс-релиза.",
      phrase: { en: "Access to quality education should not depend on income.", ru: "Доступ к качественному образованию не должен зависеть от дохода." },
    },
  ],
  words: [
    { en: "underserved communities", ru: "сообщества с недостаточным доступом (к услугам)" },
    { en: "near-native fluency", ru: "уровень, близкий к носителю языка" },
    { en: "to cite", ru: "приводить в качестве примера, ссылаться" },
    { en: "statement", ru: "официальное заявление" },
  ],
};

export default chapter;
