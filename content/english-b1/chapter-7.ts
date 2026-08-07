import type { Chapter } from "@/lib/types";

const chapter7: Chapter = {
  slug: "the-article",
  title: "Статья о вас",
  subtitle:
    "Техноблог написал статью о вашем приложении, а популярный подкаст позвал в гости. Читаем настоящую статью и слушаем фрагмент эфира.",
  section: "text",
  stages: [
    { icon: "📰", name: "Статья" },
    { icon: "📄", name: "Читаем" },
    { icon: "🎙️", name: "Подкаст" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Финал" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Утро. Лукас кидает ссылку в командный чат: «Смотрите, кто в London Tech Weekly!» Это статья. О вас. Настоящая. Данияр уже отправил её маме.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "London Tech Weekly: «Two friends, one dream»",
      note: "Это уже настоящая статья уровня B1: читай целиком, не переводя каждое слово. Смысл незнакомых слов часто понятен из контекста — попробуй догадаться, прежде чем нажимать на подсказку.",
      text: [
        "A year ago, Alim moved from Kazakhstan to London with one suitcase. Today his free language app has more than one hundred thousand users.",
        "«We built it in the evenings, after work», says his friend and {co-founder|сооснователь} Daniyar. The idea is simple: people learn languages through stories, not boring exercises.",
        "The app has always been free. «Money is important, but it is not everything», Alim explains.",
        "The friends have already started working on new courses. Their {advice|совет} for beginners? «Start today. Your first word can change your life».",
      ],
      questions: [
        {
          q: "Сколько пользователей у приложения?",
          options: [
            { t: "Больше ста тысяч", ok: true },
            { t: "Ровно тысяча" },
            { t: "Больше миллиона" },
          ],
          why: "More than one hundred thousand users — «больше ста тысяч пользователей». More than — больше, чем.",
        },
        {
          q: "Когда друзья создавали приложение?",
          options: [
            { t: "По вечерам после работы", ok: true },
            { t: "В рабочее время" },
            { t: "Во время отпуска" },
          ],
          why: "We built it in the evenings, after work — «Мы делали его по вечерам, после работы».",
        },
        {
          q: "Верно или неверно: сначала приложение было платным?",
          options: [{ t: "Неверно", ok: true }, { t: "Верно" }],
          why: "The app has always been free — «Приложение всегда было бесплатным». Has always been — «всегда было (и есть)» — Present Perfect!",
        },
        {
          q: "Что уже начали делать друзья?",
          options: [
            { t: "Работать над новыми курсами", ok: true },
            { t: "Продавать рекламу" },
            { t: "Искать инвестора" },
          ],
          why: "The friends have already started working on new courses — «Друзья уже начали работать над новыми курсами». Have already started — знакомая конструкция!",
        },
        {
          q: "Какой совет они дают новичкам?",
          options: [
            { t: "Начать сегодня — первое слово может изменить жизнь", ok: true },
            { t: "Учить по сто слов в день" },
            { t: "Сначала выучить всю грамматику" },
          ],
          why: "Start today. Your first word can change your life — «Начни сегодня. Твоё первое слово может изменить твою жизнь».",
        },
      ],
    },
    {
      kind: "story",
      stage: 2,
      ru: "После статьи — приглашение: популярный EdTech-подкаст зовёт тебя в эфир. Через неделю ты сидишь в студии с наушниками. Вот фрагмент выпуска — послушай его ушами слушателя.",
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Фрагмент EdTech-подкаста с твоим участием",
      note: "Подкаст — самый живой формат аудирования: приветствие, представление гостя, первый вопрос. Лови, КАК тебя представили и О ЧЁМ первый вопрос.",
      audio: [
        "Welcome back to the EdTech podcast!",
        "Today our guest is Alim — the creator of a free language app with one hundred thousand users.",
        "Alim, your story began with one trip to London, right?",
        "That's true. One trip, one suitcase — and it changed everything.",
      ],
      questions: [
        {
          q: "Как ведущий представил гостя?",
          options: [
            { t: "Создатель бесплатного языкового приложения", ok: true },
            { t: "Известный лондонский преподаватель" },
            { t: "Инвестор из Казахстана" },
          ],
          why: "The creator of a free language app — «создатель бесплатного языкового приложения». Creator — создатель.",
        },
        {
          q: "С чего, по словам ведущего, началась история Алима?",
          options: [
            { t: "С одной поездки в Лондон", ok: true },
            { t: "С курсов программирования" },
            { t: "С работы в большой компании" },
          ],
          why: "Your story began with one trip to London — «Твоя история началась с одной поездки в Лондон».",
        },
        {
          q: "Что ответил Алим?",
          options: [
            { t: "«Одна поездка, один чемодан — и это изменило всё»", ok: true },
            { t: "«Это было легко с самого начала»" },
            { t: "«История началась гораздо раньше»" },
          ],
          why: "One trip, one suitcase — and it changed everything. — «Одна поездка, один чемодан — и это изменило всё».",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Цитата дня",
      qBefore: "Your first word can ",
      qAfter: " your life.",
      hintRu: "Твоё первое слово может изменить твою жизнь. (change — менять; фраза из статьи!)",
      note: "Эту фразу из статьи уже разнесли по соцсетям. Заверши её — она и правда о тебе.",
      answer: "change",
      why: "Your first word can change your life — «Твоё первое слово может изменить твою жизнь». У тебя это слово было «Hello».",
      phrase: { en: "Your first word can change your life.", ru: "Твоё первое слово может изменить твою жизнь." },
    },
    {
      kind: "story",
      stage: 4,
      ru: "Вечером мама присылает скриншот статьи со словами «Мой сын в лондонской газете!». Ты читаешь статьи и понимаешь подкасты на английском. Сезон 3 закрыт полностью!",
    },
  ],
  words: [
    { en: "co-founder", ru: "сооснователь" },
    { en: "more than", ru: "больше, чем" },
    { en: "advice", ru: "совет" },
    { en: "creator", ru: "создатель" },
    { en: "guest", ru: "гость" },
    { en: "it changed everything", ru: "это изменило всё" },
  ],
};

export default chapter7;
