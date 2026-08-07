import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-happy-prince",
  title: "Счастливый принц (по Оскару Уайльду)",
  subtitle:
    "Одна из самых красивых сказок в английской литературе — в адаптации для уровня B1. История о статуе, ласточке и настоящей щедрости.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🏛️", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Оскар Уайльд написал «Счастливого принца» в 1888 году. Сказка давно в общественном достоянии — и всё ещё разбивает сердца читателей. Вот её краткий пересказ уровня B1.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Happy Prince (retold)",
      note: "Текст длиннее и взрослее — уровень B1. Читай в два прохода: сначала историю, потом детали. Замечай Present Perfect и Past Simple.",
      text: [
        "High above the city stood the {statue|статуя} of the Happy Prince. He was covered with gold, and his eyes were two bright {sapphires|сапфиры}.",
        "One night a little {swallow|ласточка} stopped by his feet and saw that the Prince was crying. «When I was alive, I never cried, — he said. — Now I stand here and see all the pain of my city».",
        "«In a small house a mother has a sick boy. She has no money. Little swallow, take the {ruby|рубин} from my sword and bring it to her».",
        "Night after night the swallow carried the Prince's gold and jewels to the poor people of the city. It became cold, but she did not want to leave her friend.",
        "Soon the Prince was grey and simple — he had given away everything. The swallow kissed him and fell down at his feet: the winter had taken her.",
        "The town leaders looked at the grey statue and said: «It is not beautiful anymore» — and pulled it down. But the Prince's heart and the little bird were the most {precious|драгоценный} things in the whole city.",
      ],
      questions: [
        {
          q: "Почему принц плакал?",
          options: [
            { t: "Со своей высоты он видел всю боль города", ok: true },
            { t: "Ему было холодно зимой" },
            { t: "У него украли золото" },
          ],
          why: "Now I stand here and see all the pain of my city — при жизни он не знал горя, а теперь видит его сверху.",
        },
        {
          q: "Что делала ласточка ночь за ночью?",
          options: [
            { t: "Разносила золото и камни принца бедным", ok: true },
            { t: "Искала себе новый дом" },
            { t: "Согревала принца крыльями" },
          ],
          why: "Night after night the swallow carried the Prince's gold and jewels to the poor people — она стала его крыльями.",
        },
        {
          q: "Почему ласточка не улетела в тёплые края?",
          options: [
            { t: "Не хотела оставлять друга", ok: true },
            { t: "Забыла дорогу на юг" },
            { t: "Принц запретил ей улетать" },
          ],
          why: "It became cold, but she did not want to leave her friend — дружба оказалась сильнее инстинкта.",
        },
        {
          q: "«He had given away everything» — что это значит?",
          options: [
            { t: "Он раздал всё, что имел", ok: true },
            { t: "Он всё потерял случайно" },
            { t: "У него всё отобрали" },
          ],
          why: "give away — «раздарить, отдать». He had given away everything — раздал всё до последнего сапфира.",
        },
        {
          q: "Что сделали городские власти с потускневшей статуей?",
          options: [
            { t: "Снесли — «она больше не красивая»", ok: true },
            { t: "Покрасили заново" },
            { t: "Перенесли в музей" },
          ],
          why: "«It is not beautiful anymore» — and pulled it down. Люди увидели только облезлое золото, но не увидели сердца.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Финальная мысль сказки",
      note: "Precious — драгоценный. Уайльд говорит о том, что настоящая ценность — не золото.",
      audio: [
        "The Prince gave away his gold, but his heart became the most precious thing in the city.",
      ],
      questions: [
        {
          q: "Что стало самым драгоценным в городе?",
          options: [
            { t: "Сердце принца, отдавшего всё", ok: true },
            { t: "Золото со статуи" },
            { t: "Новая статуя мэра" },
          ],
          why: "His heart became the most precious thing — щедрость дороже золота.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль для разговорника",
      q: "Собери главную мысль сказки:",
      note: "Giving — отдавание (глагол give + -ing как существительное). Receiving — получение.",
      words: ["Giving", "is", "better", "than", "receiving."],
      answer: "Giving is better than receiving.",
      why: "Giving is better than receiving — «Отдавать лучше, чем получать». Ты прочитал Уайльда по-английски!",
      phrase: { en: "Giving is better than receiving.", ru: "Отдавать лучше, чем получать." },
    },
  ],
  words: [
    { en: "statue", ru: "статуя" },
    { en: "swallow", ru: "ласточка" },
    { en: "jewels", ru: "драгоценности" },
    { en: "give away", ru: "раздать, отдать" },
    { en: "precious", ru: "драгоценный" },
    { en: "pull down", ru: "снести" },
  ],
};

export default chapter;
