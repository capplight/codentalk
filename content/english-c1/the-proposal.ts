import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "the-proposal",
  title: "Заявка на партнёрство",
  subtitle: "Полный текст заявки, которую отправил Алим — образец делового письма уровня C1: номинализация, hedging и формальные связки в действии.",
  section: "text",
  stages: [
    { icon: "📄", name: "Документ" },
    { icon: "🧐", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Вот полный текст заявки — прочитай её как настоящий деловой документ и обрати внимание, как формальный язык меняет тон истории.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "Partnership Proposal — CodeNTalk",
      note: "Заметь: почти нет разговорных слов, много существительных вместо глаголов (decision, growth, improvement) и осторожных формулировок (it could be argued, this may suggest).",
      text: [
        "Dear members of the selection committee,",
        "We are writing to propose a partnership between CodeNTalk and your foundation. CodeNTalk is a free language-learning platform built on the belief that {access|доступ} to quality education should not depend on income.",
        "Our decision to keep the platform completely free from the outset led to rapid, organic growth: over one million downloads within two years, without any paid advertising. It could be argued that this growth is a direct result of trust — {learners|учащиеся} return to a platform that never asks them to pay.",
        "The market for language education is highly competitive. Nevertheless, our approach remains {distinct|отличный}: every feature, from vocabulary training to speaking practice, is designed around a single principle — no penalties, no pressure, no cost.",
        "Furthermore, our model has already been tested informally across several countries through word of mouth alone. This may suggest that the demand for free, high-quality education extends far beyond our original market.",
        "Notwithstanding the resource constraints of a small independent team, we have maintained consistent quality across every course we have published. We would welcome the opportunity to discuss the details of a possible partnership at your convenience.",
        "Yours faithfully,\nAlim, Founder, CodeNTalk",
      ],
      questions: [
        {
          q: "На каком принципе построен CodeNTalk, согласно заявке?",
          options: [
            { t: "Доступ к качественному образованию не должен зависеть от дохода", ok: true },
            { t: "Платформа должна приносить максимум прибыли" },
            { t: "Образование должно быть доступно только продвинутым ученикам" },
          ],
          why: "access to quality education should not depend on income — ключевой принцип, заявленный в начале письма.",
        },
        {
          q: "Чем автор объясняет быстрый органический рост платформы?",
          options: [
            { t: "Доверием — учащиеся возвращаются на платформу, которая никогда не просит платить", ok: true },
            { t: "Большим рекламным бюджетом" },
            { t: "Партнёрством с другими компаниями" },
          ],
          why: "It could be argued that this growth is a direct result of trust — hedging-формулировка, не категоричное заявление.",
        },
        {
          q: "Что автор говорит о конкуренции на рынке языкового образования?",
          options: [
            { t: "Рынок конкурентный, но подход CodeNTalk остаётся особенным", ok: true },
            { t: "Конкурентов на рынке нет вообще" },
            { t: "Рынок слишком мал для роста" },
          ],
          why: "The market… is highly competitive. Nevertheless, our approach remains distinct — формальное противопоставление через Nevertheless.",
        },
        {
          q: "На что намекает предложение о международном спросе («This may suggest that…»)?",
          options: [
            { t: "Спрос на бесплатное образование может выходить далеко за пределы исходного рынка", ok: true },
            { t: "Спроса на международном рынке точно нет" },
            { t: "Команда уже полностью покрыла международный рынок" },
          ],
          why: "This may suggest that… — осторожная формулировка о возможности, а не факт.",
        },
        {
          q: "Чем заканчивается заявка?",
          options: [
            { t: "Предложением обсудить детали партнёрства в удобное время", ok: true },
            { t: "Требованием немедленного ответа" },
            { t: "Списком конкретных финансовых условий" },
          ],
          why: "We would welcome the opportunity to discuss the details… at your convenience — вежливое, открытое завершение делового письма.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Ключевое предложение заявки",
      note: "Notwithstanding — книжная формальная связка, встречается реже, чем however, но звучит весомее.",
      audio: [
        "Notwithstanding the resource constraints of a small independent team, we have maintained consistent quality across every course we have published.",
      ],
      questions: [
        {
          q: "О чём говорит это предложение, несмотря на ограниченность ресурсов команды?",
          options: [
            { t: "Команда сохранила стабильное качество во всех курсах", ok: true },
            { t: "Команда решила приостановить разработку курсов" },
            { t: "Качество курсов со временем снизилось" },
          ],
          why: "we have maintained consistent quality — несмотря на трудности (notwithstanding), качество не пострадало.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль для разговорника",
      q: "Собери фразу-принцип заявки: «Доступ к качественному образованию не должен зависеть от дохода»:",
      note: "Access to quality education should not depend on income.",
      words: ["Access", "to", "quality", "education", "should", "not", "depend", "on", "income."],
      answer: "Access to quality education should not depend on income.",
      why: "Access to quality education should not depend on income — главный принцип всей заявки, сформулированный одной фразой.",
      phrase: { en: "Access to quality education should not depend on income.", ru: "Доступ к качественному образованию не должен зависеть от дохода." },
    },
  ],
  words: [
    { en: "selection committee", ru: "отборочный комитет" },
    { en: "outset", ru: "начало, старт" },
    { en: "word of mouth", ru: "сарафанное радио" },
    { en: "resource constraints", ru: "ограниченность ресурсов" },
    { en: "yours faithfully", ru: "с уважением (формальная подпись письма)" },
  ],
};

export default chapter;
