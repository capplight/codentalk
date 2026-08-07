import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-crow-and-pitcher",
  title: "Ворона и кувшин (по Эзопу)",
  subtitle:
    "Басня про смекалку: как достать воду, если клюв не дотягивается? Инженерное решение возрастом две тысячи лет.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🐦", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Учёные проверяли: вороны РЕАЛЬНО так умеют! Эзоп знал это две тысячи лет назад. Прочитай, как птица решила инженерную задачу.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Crow and the Pitcher",
      note: "Crow — ворона, pitcher — кувшин. Следи за there is и can — они тут работают вовсю.",
      text: [
        "It is a hot day. A {crow|ворона} is very {thirsty|хочет пить} — she needs water.",
        "She sees a {pitcher|кувшин}. There is water in it! But there is a problem: the water is low, and the crow's {beak|клюв} is short.",
        "She cannot drink. What can she do?",
        "The crow thinks. Then she takes a small {stone|камень} and drops it into the pitcher. The water goes up a little.",
        "She drops another stone, and another, and another. With every stone the water goes up, up, up.",
        "Now the water is high. The crow drinks. «Where there is a will, there is a way», — she thinks.",
      ],
      questions: [
        {
          q: "Какая проблема у вороны?",
          options: [
            { t: "Вода в кувшине слишком низко, клюв не достаёт", ok: true },
            { t: "Кувшин пустой" },
            { t: "Кувшин слишком тяжёлый" },
          ],
          why: "The water is low, and the crow's beak is short — вода низко, а клюв короткий.",
        },
        {
          q: "Как ворона решила задачу?",
          options: [
            { t: "Бросала камни в кувшин, и вода поднималась", ok: true },
            { t: "Разбила кувшин" },
            { t: "Позвала других ворон" },
          ],
          why: "She drops stones into the pitcher… with every stone the water goes up — камни поднимают воду.",
        },
        {
          q: "Что происходило с водой с каждым камнем?",
          options: [
            { t: "Поднималась всё выше", ok: true },
            { t: "Становилась грязной" },
            { t: "Выливалась из кувшина" },
          ],
          why: "With every stone the water goes up, up, up — с каждым камнем вода всё выше.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль — знаменитая английская пословица",
      note: "Will — здесь «воля, желание», way — путь, способ. Слушай ритм фразы — она построена на повторе.",
      audio: ["Where there is a will, there is a way."],
      questions: [
        {
          q: "Как перевести мораль?",
          options: [
            { t: "«Было бы желание — найдётся способ»", ok: true },
            { t: "«Вода дороже золота»" },
            { t: "«Каждый камень на счету»" },
          ],
          why: "Where there is a will, there is a way — «Где есть воля, там есть путь». Русский аналог: «Было бы желание…»",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Запомни пословицу",
      q: "Собери пословицу — одну из самых любимых у англичан:",
      note: "Дважды there is: Where there is a will, there is a way.",
      words: ["Where", "there", "is", "a", "will,", "there", "is", "a", "way."],
      answer: "Where there is a will, there is a way.",
      why: "Where there is a will, there is a way — и конструкция there is из твоего уровня, и вечная мудрость.",
      phrase: { en: "Where there is a will, there is a way.", ru: "Было бы желание — найдётся способ." },
    },
  ],
  words: [
    { en: "crow", ru: "ворона" },
    { en: "thirsty", ru: "испытывающий жажду" },
    { en: "pitcher", ru: "кувшин" },
    { en: "beak", ru: "клюв" },
    { en: "stone", ru: "камень" },
    { en: "will / way", ru: "воля / путь, способ" },
  ],
};

export default chapter;
