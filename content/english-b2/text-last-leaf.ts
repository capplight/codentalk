import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-last-leaf",
  title: "Последний лист (по О. Генри)",
  subtitle:
    "Рассказ о художнике, который так и не написал шедевра… или всё-таки написал? Уровень B2: длинные фразы, взрослая ирония, сильный финал.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🍂", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "«Последний лист» (1907) — вершина О. Генри. История про болезнь, надежду и одну очень странную картину. Пересказ уровня B2: почти оригинальная сложность.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Last Leaf (retold)",
      note: "Уровень B2 — подсказок в тексте меньше, смысл некоторых слов лови из контекста. Обрати внимание на связь погоды, болезни и надежды.",
      text: [
        "In a small artists' district of New York, young Johnsy lay ill with {pneumonia|пневмония}. The doctor said quietly: «Medicine will not help if the patient does not want to live».",
        "Johnsy had stopped wanting. She lay by the window and counted the leaves on the old ivy vine across the street. «When the last leaf falls, — she said, — I will go too».",
        "Downstairs lived old Behrman, a painter who had talked for forty years about the masterpiece he would paint one day — and had never started it.",
        "That night a cold rain beat against the windows, and the wind tore at the vine. In the morning Johnsy looked out — and there, against the brick wall, one brave leaf still held on.",
        "It held on the next day, and the next. «Something has made that leaf stay, — said Johnsy at last. — It is wrong to want to die. Bring me some soup».",
        "She recovered. And only then did she learn that Behrman had died of pneumonia. On the stormy night, with a lantern and a ladder, he had painted the leaf on the wall — his first and last masterpiece.",
      ],
      questions: [
        {
          q: "Что, по словам доктора, было важнее лекарств?",
          options: [
            { t: "Желание пациента жить", ok: true },
            { t: "Тёплая погода" },
            { t: "Дорогие процедуры" },
          ],
          why: "Medicine will not help if the patient does not want to live — без воли к жизни медицина бессильна.",
        },
        {
          q: "С чем Джонси связала свою жизнь?",
          options: [
            { t: "С последним листом плюща за окном", ok: true },
            { t: "С приходом весны" },
            { t: "С окончанием дождей" },
          ],
          why: "«When the last leaf falls, I will go too» — упадёт последний лист — уйду и я.",
        },
        {
          q: "Что мы знаем о Бермане до финала?",
          options: [
            { t: "Сорок лет говорил о будущем шедевре, но не начал его", ok: true },
            { t: "Был знаменитым художником" },
            { t: "Был врачом Джонси" },
          ],
          why: "…had talked for forty years about the masterpiece he would paint one day — and had never started it.",
        },
        {
          q: "Почему лист не упал в бурю?",
          options: [
            { t: "Берман нарисовал его на стене в ту ночь", ok: true },
            { t: "Лист был крепче остальных" },
            { t: "Ветер стих к утру" },
          ],
          why: "He had painted the leaf on the wall — лист был нарисован в ночь бури. Поэтому он «держался».",
        },
        {
          q: "Почему нарисованный лист называют шедевром Бермана?",
          options: [
            { t: "Эта картина спасла человеческую жизнь", ok: true },
            { t: "Её купил музей" },
            { t: "Она была технически совершенна" },
          ],
          why: "His first and last masterpiece — величие картины не в технике, а в том, что она вернула Джонси волю к жизни.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мысль рассказа — в одной фразе",
      note: "Sacrifice — жертва. B2-аудирование без упрощений.",
      audio: ["The greatest masterpiece is not made of paint. It is made of sacrifice."],
      questions: [
        {
          q: "Из чего, по этой мысли, сделан величайший шедевр?",
          options: [
            { t: "Из жертвы, а не из краски", ok: true },
            { t: "Из дорогих материалов" },
            { t: "Из многолетнего труда" },
          ],
          why: "It is made of sacrifice — Берман отдал жизнь за один нарисованный лист.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "On the stormy night Behrman ",
      qAfter: " painted the leaf on the wall.",
      hintRu: "В ту бурную ночь Берман нарисовал лист на стене (ещё ДО того, как об этом узнали — «прошлое до прошлого»).",
      note: "Past Perfect: had + V3 — действие, случившееся раньше другого прошедшего события.",
      answer: "had",
      why: "had painted — сначала нарисовал (ночью), потом об этом узнали. Past Perfect расставляет события по порядку.",
    },
  ],
  words: [
    { en: "ivy vine", ru: "плющ (вьющееся растение)" },
    { en: "masterpiece", ru: "шедевр" },
    { en: "hold on", ru: "держаться" },
    { en: "recover", ru: "выздороветь" },
    { en: "lantern / ladder", ru: "фонарь / лестница" },
    { en: "sacrifice", ru: "жертва" },
  ],
};

export default chapter;
