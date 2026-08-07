import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-three-men-boat",
  title: "Трое в лодке: все болезни сразу (по Джерому К. Джерому)",
  subtitle:
    "Герой читает медицинский справочник и находит у себя всё, кроме одной болезни. Легендарная сцена британского юмора (1889) — уровень B2.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🤒", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "«Трое в лодке, не считая собаки» — самая смешная книга викторианской Англии. Сцена, где рассказчик находит у себя все болезни из справочника, — эталон британского юмора, который ты изучал в главе про understatement. Теперь прочти первоисточник.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "Three Men in a Boat: the Medical Book (retold)",
      note: "Рассказ от первого лица. Юмор строится на серьёзном тоне в абсурдной ситуации — фирменный британский приём. Housemaid's knee — «колено горничной» (воспаление колена).",
      text: [
        "One day I felt a little ill and went to the library to read about my {illness|болезнь} in a big medical book.",
        "I read about {cholera|холера} — and understood that I had it. I read about typhoid fever — clearly, I had had it for months without knowing!",
        "I became interested in my case and went through the whole alphabet. The only illness I did NOT have was housemaid's knee.",
        "I felt rather hurt about this at first. Why didn't I have housemaid's knee? After a while, however, I decided to be less {greedy|жадный}: I had every other illness in the book.",
        "I went to my doctor — my old friend. He examined me, then he wrote a {prescription|рецепт} and gave it to me. I read it:",
        "«One pound of beefsteak every six hours. A ten-mile walk every morning. A bed at eleven sharp every night. And don't fill your head with things you do not understand»." ,
      ],
      questions: [
        {
          q: "Зачем герой пошёл в библиотеку?",
          options: [
            { t: "Почитать о своей лёгкой болезни в медицинском справочнике", ok: true },
            { t: "Взять роман на выходные" },
            { t: "Встретиться с доктором" },
          ],
          why: "I felt a little ill and went… to read about my illness — маленькое недомогание + большой справочник = катастрофа.",
        },
        {
          q: "Что герой «обнаружил» у себя?",
          options: [
            { t: "Все болезни из справочника, кроме одной", ok: true },
            { t: "Только холеру" },
            { t: "Ни одной болезни" },
          ],
          why: "The only illness I did NOT have was housemaid's knee — весь алфавит болезней, кроме «колена горничной».",
        },
        {
          q: "Как герой отреагировал на отсутствие «колена горничной»?",
          options: [
            { t: "Сначала обиделся: почему это у него его нет?!", ok: true },
            { t: "Обрадовался" },
            { t: "Пошёл проверяться повторно" },
          ],
          why: "I felt rather hurt about this at first — обидеться, что у тебя нет болезни, — вершина комического абсурда.",
        },
        {
          q: "Каким было «лекарство» доктора?",
          options: [
            { t: "Бифштекс, прогулки, сон вовремя и не забивать голову ерундой", ok: true },
            { t: "Месяц в больнице" },
            { t: "Дюжина настоящих лекарств" },
          ],
          why: "Beefsteak, a ten-mile walk, a bed at eleven — доктор-друг прописал здоровый образ жизни и здравый смысл.",
        },
        {
          q: "На чём построен юмор этой сцены?",
          options: [
            { t: "Абсолютно серьёзный тон в абсурдной ситуации", ok: true },
            { t: "На игре слов" },
            { t: "На нелепых костюмах героев" },
          ],
          why: "Герой описывает бред с научной серьёзностью — тот самый deadpan, родной брат understatement из главы о британском юморе.",
        },
        {
          q: "«I had had it for months» — что это за форма?",
          options: [
            { t: "Past Perfect: болезнь «была» ещё ДО момента чтения", ok: true },
            { t: "Опечатка — had написано дважды случайно" },
            { t: "Усиление: очень сильно болел" },
          ],
          why: "had had — Past Perfect глагола have: первый had — вспомогательный, второй — смысловой. Выглядит странно, но абсолютно правильно!",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Рецепт доктора — целиком",
      note: "Sharp — здесь «ровно» (о времени). Финальная строка рецепта — лучший совет в этой главе.",
      audio: [
        "One pound of beefsteak every six hours.",
        "A ten-mile walk every morning.",
        "A bed at eleven sharp every night.",
        "And don't fill your head with things you do not understand.",
      ],
      questions: [
        {
          q: "Во сколько доктор велел ложиться спать?",
          options: [
            { t: "Ровно в одиннадцать", ok: true },
            { t: "В десять" },
            { t: "После полуночи" },
          ],
          why: "A bed at eleven sharp — «в постель ровно в одиннадцать». Sharp — точно, минута в минуту.",
        },
        {
          q: "Каков последний пункт рецепта?",
          options: [
            { t: "Не забивать голову тем, чего не понимаешь", ok: true },
            { t: "Принимать лекарство дважды в день" },
            { t: "Прийти на приём через неделю" },
          ],
          why: "Don't fill your head with things you do not understand — совет, актуальный и в эпоху интернет-самодиагностики.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Совет в разговорник",
      q: "Собери финальный совет доктора:",
      note: "Fill — наполнять, head — голова. Отрицательный совет начинается с Don't.",
      words: ["Don't", "fill", "your", "head", "with", "things", "you", "do", "not", "understand."],
      answer: "Don't fill your head with things you do not understand.",
      why: "Don't fill your head with things you do not understand — совет 1889 года, который стоит повесить над каждым экраном. Джером прочитан!",
      phrase: { en: "Don't fill your head with things you do not understand.", ru: "Не забивай голову тем, чего не понимаешь." },
    },
  ],
  words: [
    { en: "illness", ru: "болезнь" },
    { en: "prescription", ru: "рецепт (врачебный)" },
    { en: "examine", ru: "осматривать" },
    { en: "greedy", ru: "жадный" },
    { en: "sharp (about time)", ru: "ровно (о времени)" },
    { en: "had had", ru: "Past Perfect глагола have" },
  ],
};

export default chapter;
