import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-if-poem",
  title: "«If—» (по Редьярду Киплингу)",
  subtitle:
    "Одно из самых цитируемых стихотворений на английском языке — построено почти целиком на условных конструкциях и внутренней эмфазе. Отрывок для уровня C1.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🖋️", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Редьярд Киплинг написал «If—» в 1910 году как совет сыну. Стихотворение построено на длинной цепочке условий «if…» — и заканчивается наградой, которая перевешивает их все. Вот отрывок в оригинале.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "If— (excerpt)",
      note: "Это оригинальный, неадаптированный текст 1910 года — читай медленно. Обрати внимание на повтор «If you can…» в начале почти каждой строки: это анафора.",
      text: [
        "If you can keep your head when all about you {are losing theirs|теряют голову} and blaming it on you,",
        "If you can trust yourself when all men doubt you, but make allowance for their doubting too;",
        "If you can wait and not be tired by waiting, or being lied about, don't deal in lies,",
        "Or being hated, don't give way to hating, and yet don't look too good, nor talk too wise;",
        "If you can dream — and not make dreams your {master|хозяин}; if you can think — and not make thoughts your aim;",
        "If you can meet with Triumph and Disaster and treat those two {impostors|самозванцы} just the same;",
        "If you can fill the unforgiving minute with sixty seconds' worth of distance run — yours is the Earth and everything that's in it, and — which is more — you'll be a Man, my son!",
      ],
      questions: [
        {
          q: "Какой грамматический приём повторяется в начале почти каждой строки?",
          options: [
            { t: "Условные предложения с If", ok: true },
            { t: "Расщеплённые предложения с It was" },
            { t: "Пассивный залог" },
          ],
          why: "Каждая строка начинается с If you can… — это одновременно условная конструкция и анафора (стилистический повтор).",
        },
        {
          q: "Что означает «treat those two impostors just the same» о Triumph и Disaster?",
          options: [
            { t: "Относиться к успеху и провалу одинаково спокойно", ok: true },
            { t: "Не доверять никому из друзей" },
            { t: "Избегать любых рисков" },
          ],
          why: "impostors — «самозванцы»: и триумф, и катастрофа обманчивы, если придавать им слишком большое значение.",
        },
        {
          q: "«If you can dream — and not make dreams your master» — какой совет здесь даётся?",
          options: [
            { t: "Мечтать, но не становиться рабом своих мечтаний", ok: true },
            { t: "Никогда не мечтать" },
            { t: "Делиться мечтами со всеми" },
          ],
          why: "not make dreams your master — мечты полезны, пока не начинают управлять тобой.",
        },
        {
          q: "Какая награда обещана в финале отрывка?",
          options: [
            { t: "Весь мир — и звание настоящего Человека", ok: true },
            { t: "Богатство и слава" },
            { t: "Долгая жизнь без трудностей" },
          ],
          why: "yours is the Earth and everything that's in it… you'll be a Man — итог всех условий: не вещи, а состояние человека.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Ключевая строка о триумфе и катастрофе",
      note: "just the same — «одинаково», несмотря на разницу. Устойчивое выражение для равного отношения к разным вещам.",
      audio: [
        "If you can meet with Triumph and Disaster and treat those two impostors just the same.",
      ],
      questions: [
        {
          q: "Почему Киплинг называет Триумф и Катастрофу «самозванцами» (impostors)?",
          options: [
            { t: "Оба обманчивы — не стоит придавать им слишком большое значение", ok: true },
            { t: "Оба на самом деле одно и то же событие" },
            { t: "Оба неизбежны и предсказуемы" },
          ],
          why: "impostors — то, что притворяется важнее, чем есть на самом деле.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль для разговорника",
      q: "Собери фразу об умении сохранять голову холодной в хаосе:",
      note: "If you can keep your head when everyone else is losing theirs.",
      words: ["If", "you", "can", "keep", "your", "head", "when", "everyone", "else", "is", "losing", "theirs."],
      answer: "If you can keep your head when everyone else is losing theirs.",
      why: "keep your head — сохранять хладнокровие. Ты прочитал Киплинга в оригинале!",
      phrase: { en: "If you can keep your head when everyone else is losing theirs.", ru: "Если ты можешь сохранять голову холодной, когда все вокруг её теряют." },
    },
  ],
  words: [
    { en: "to lose one's head", ru: "терять голову, паниковать" },
    { en: "to make allowance for", ru: "делать скидку на, учитывать" },
    { en: "impostor", ru: "самозванец" },
    { en: "unforgiving", ru: "неумолимый, не прощающий ошибок" },
    { en: "worth", ru: "стоимостью в, ценность" },
  ],
};

export default chapter;
