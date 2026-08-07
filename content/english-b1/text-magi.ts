import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-gift-of-magi",
  title: "Дары волхвов (по О. Генри)",
  subtitle:
    "Самый известный рождественский рассказ Америки: у Деллы один доллар восемьдесят семь центов и один день до Рождества. Уровень B1.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🎁", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "О. Генри опубликовал этот рассказ в 1905 году. Двое бедных влюблённых, два подарка, одна невероятная ирония судьбы. Пересказ уровня B1 — но развязка бьёт так же сильно, как в оригинале.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Gift of the Magi (retold)",
      note: "Della и Jim — молодая пара. У каждого есть одно сокровище. Следи, как они решают проблему подарков — и чем это кончается.",
      text: [
        "Della counted her money again: one dollar and eighty-seven cents. Tomorrow was Christmas, and she had no {gift|подарок} for her husband Jim.",
        "The young couple was poor, but they had two {treasures|сокровища}: Della's beautiful long hair and Jim's gold watch from his father.",
        "Della looked in the mirror, then put on her coat and went out. An hour later her long hair was gone — she had sold it for twenty dollars.",
        "With the money she bought a beautiful chain for Jim's gold watch. «Now he can be proud of it», — she thought.",
        "In the evening Jim came home and stopped at the door. He looked at Della's short hair with a strange face — not angry, not sad, just… strange.",
        "He put a small box on the table. Inside were beautiful {combs|гребни} for her long hair. He had sold his watch to buy them.",
        "They sat together and smiled. The gifts were useless now — but their love was not. And that, says the author, was the wisest gift of all.",
      ],
      questions: [
        {
          q: "Какие два сокровища были у пары?",
          options: [
            { t: "Длинные волосы Деллы и золотые часы Джима", ok: true },
            { t: "Дом и машина" },
            { t: "Кольцо и ожерелье" },
          ],
          why: "Della's beautiful long hair and Jim's gold watch — два единственных богатства этой семьи.",
        },
        {
          q: "Что сделала Делла, чтобы купить подарок?",
          options: [
            { t: "Продала свои волосы за двадцать долларов", ok: true },
            { t: "Взяла деньги в долг" },
            { t: "Продала часы Джима" },
          ],
          why: "Her long hair was gone — she had sold it for twenty dollars — она продала волосы ради цепочки для часов.",
        },
        {
          q: "Что подарил Джим — и почему подарок оказался бесполезным?",
          options: [
            { t: "Гребни для волос, которые Делла только что продала", ok: true },
            { t: "Новое пальто, которое не подошло" },
            { t: "Цепочку для часов, которых больше нет" },
          ],
          why: "Inside were beautiful combs for her long hair — гребни для проданных волос. А цепочку подарила она — для проданных часов.",
        },
        {
          q: "«He had sold his watch to buy them» — почему здесь had sold?",
          options: [
            { t: "Это действие случилось РАНЬШЕ другого прошедшего события", ok: true },
            { t: "Это вежливая форма прошедшего" },
            { t: "Это ошибка автора" },
          ],
          why: "had sold — «прошлое до прошлого»: сначала продал часы, потом пришёл домой. Так английский показывает порядок событий.",
        },
        {
          q: "Что автор называет самым мудрым даром?",
          options: [
            { t: "Их любовь — готовность отдать самое дорогое", ok: true },
            { t: "Гребни" },
            { t: "Двадцать долларов" },
          ],
          why: "The gifts were useless now — but their love was not — подарки обесценились, любовь — нет.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Финальные слова рассказчика",
      note: "Wise → the wisest — мудрый → мудрейший. Полюбуйся превосходной степенью в живом тексте.",
      audio: ["They gave away their greatest treasures for each other. They were the wisest givers of all."],
      questions: [
        {
          q: "Почему рассказчик называет Деллу и Джима мудрейшими из дарящих?",
          options: [
            { t: "Каждый отдал своё самое дорогое ради другого", ok: true },
            { t: "Они сэкономили деньги" },
            { t: "Они выбрали практичные подарки" },
          ],
          why: "They gave away their greatest treasures for each other — в этом и есть мудрость дара.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Закрепи",
      qBefore: "The gifts were useless, but their love ",
      qAfter: " not.",
      hintRu: "Подарки стали бесполезными, но их любовь — нет. (была — прошедшее от is)",
      note: "Параллель: The gifts were… but their love was… — множественное и единственное в прошедшем.",
      answer: "was",
      why: "Their love was not (useless) — любовь бесполезной не стала. О. Генри прочитан в оригинальном духе!",
    },
  ],
  words: [
    { en: "gift", ru: "подарок" },
    { en: "treasure", ru: "сокровище" },
    { en: "proud", ru: "гордый" },
    { en: "combs", ru: "гребни" },
    { en: "useless", ru: "бесполезный" },
    { en: "wise → the wisest", ru: "мудрый → мудрейший" },
  ],
};

export default chapter;
