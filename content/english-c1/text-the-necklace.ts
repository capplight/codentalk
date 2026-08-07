import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-the-necklace",
  title: "Ожерелье (по Ги де Мопассану)",
  subtitle:
    "Классика французской новеллы в адаптации для уровня C1 — история одной ночи, которая стоила десяти лет жизни. Идеальный текст для темы сожалений и гипотез.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "💎", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Ги де Мопассан опубликовал «Ожерелье» в 1884 году. Это одна из самых известных новелл о цене одной ночи тщеславия — и почти учебный пример смешанных условных: «если бы она не заняла то ожерелье…»",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Necklace (retold)",
      note: "Текст на уровне C1 — почти без упрощений. Обрати внимание на модальные глаголы предположения и условные конструкции.",
      text: [
        "Mathilde Loisel was a pretty woman who felt she {deserved|заслуживала} a far more elegant life than the one her husband's modest salary could offer. When he brought home an invitation to a grand ball, she was not delighted — she was in despair. She had nothing fine enough to wear.",
        "Her husband gave her his savings for a new dress. Still, Mathilde was anxious: without jewels, she would look poor among the wealthy guests. She borrowed a stunning diamond necklace from her old friend Madame Forestier, who must have trusted her completely to lend something so {precious|драгоценный}.",
        "At the ball, Mathilde was radiant. Every man noticed her, every woman envied her. She danced until dawn, intoxicated by a happiness she had never known. It was, without question, the finest night of her life.",
        "But when she reached home, she discovered the necklace was gone. Had it fallen in the carriage? On the street? They searched everywhere, but it could not have simply vanished into thin air — and yet it had.",
        "Terrified of confessing, the Loisels borrowed an enormous sum and bought an identical necklace to replace it. They returned it to Madame Forestier without a word of explanation, and then spent the next ten years working relentlessly to repay the debt.",
        "Ten years later, Mathilde — now aged and worn by poverty — met Madame Forestier by chance. Barely recognising her old friend, Madame Forestier listened in astonishment as Mathilde finally told the truth. «If only you had told me sooner», she said. «That necklace was fake — it was worth almost nothing at all».",
      ],
      questions: [
        {
          q: "Почему Матильда была в отчаянии, получив приглашение на бал?",
          options: [
            { t: "У неё не было достаточно элегантного наряда", ok: true },
            { t: "Она не любила танцевать" },
            { t: "Она недолюбливала своего мужа" },
          ],
          why: "She had nothing fine enough to wear — приглашение стало проблемой, а не радостью.",
        },
        {
          q: "Что можно сказать о мадам Форестье, судя по фразе «she must have trusted her completely»?",
          options: [
            { t: "Автор уверен: подруга доверяла Матильде очень сильно", ok: true },
            { t: "Автор сомневается, доверяла ли подруга Матильде" },
            { t: "Подруга точно не доверяла Матильде" },
          ],
          why: "must have trusted — уверенное предположение о прошлом: раз она одолжила такую драгоценность, доверие было полным.",
        },
        {
          q: "Что произошло по пути домой с бала?",
          options: [
            { t: "Ожерелье пропало", ok: true },
            { t: "Матильда потеряла туфлю" },
            { t: "Карета сломалась" },
          ],
          why: "When she reached home, she discovered the necklace was gone.",
        },
        {
          q: "Как супруги Луазель поступили, обнаружив пропажу?",
          options: [
            { t: "Заняли огромную сумму и купили точно такое же ожерелье", ok: true },
            { t: "Сразу признались подруге в потере" },
            { t: "Уехали из города" },
          ],
          why: "The Loisels borrowed an enormous sum and bought an identical necklace — они выбрали десять лет тяжёлого труда вместо признания.",
        },
        {
          q: "Какой поворот ждёт читателя в финале?",
          options: [
            { t: "Настоящее ожерелье было почти ничего не стоящей подделкой", ok: true },
            { t: "Мадам Форестье сама была должна Матильде" },
            { t: "Ожерелье так и не нашли" },
          ],
          why: "That necklace was fake — it was worth almost nothing at all — вся жертва оказалась напрасной.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Финальная реплика мадам Форестье",
      note: "If only you had told me sooner — сожаление о прошлом (If only + Past Perfect), классическая C1-конструкция.",
      audio: [
        "If only you had told me sooner, Mathilde. That necklace was fake — it was worth almost nothing at all.",
      ],
      questions: [
        {
          q: "Что выражает фраза «If only you had told me sooner»?",
          options: [
            { t: "Сожаление о том, что правда не открылась раньше", ok: true },
            { t: "Требование заплатить немедленно" },
            { t: "Благодарность за честность" },
          ],
          why: "If only + Past Perfect — сожаление о прошлом, которое нельзя изменить.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль для разговорника",
      q: "Собери главную мысль новеллы — смешанное условное о судьбе Матильды:",
      note: "If she hadn't hidden the truth, she wouldn't have lost ten years of her life.",
      words: ["If", "she", "hadn't", "hidden", "the", "truth,", "she", "wouldn't", "have", "lost", "ten", "years."],
      answer: "If she hadn't hidden the truth, she wouldn't have lost ten years.",
      why: "If she hadn't hidden the truth, she wouldn't have lost ten years — одна скрытая правда стоила десятилетия жизни. Ты прочитал Мопассана по-английски!",
      phrase: { en: "If she hadn't hidden the truth, she wouldn't have lost ten years.", ru: "Если бы она не скрыла правду, она бы не потеряла десять лет." },
    },
  ],
  words: [
    { en: "to deserve", ru: "заслуживать" },
    { en: "in despair", ru: "в отчаянии" },
    { en: "to borrow", ru: "занять, одолжить (взять)" },
    { en: "radiant", ru: "сияющий" },
    { en: "to vanish", ru: "исчезнуть" },
    { en: "relentlessly", ru: "неустанно, без передышки" },
  ],
};

export default chapter;
