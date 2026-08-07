import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-golden-goose",
  title: "Гусыня и золотые яйца (по Эзопу)",
  subtitle:
    "Басня о жадности, которая убивает удачу. Прошедшее время, сравнения и вечный урок экономики — всё в одном коротком тексте.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🥚", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Выражение «зарезать курицу, несущую золотые яйца» пришло из этой басни — ей больше двух тысяч лет, а бизнесмены цитируют её до сих пор.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Goose with the Golden Eggs",
      note: "Goose — гусыня, golden — золотой. Снова Past Simple в деле: had, found, became, wanted, killed.",
      text: [
        "A poor {farmer|фермер} and his wife had a {goose|гусыня}.",
        "One morning they found a strange egg in the nest. It was heavy and yellow. It was… {golden|золотой}!",
        "Every morning the goose gave them one golden egg. The farmer sold the eggs, and the family became richer and richer.",
        "But the farmer wanted more. «One egg a day is too slow, — he said. — Inside the goose there are hundreds of eggs! I want them all today».",
        "So he killed the goose and looked inside. But there were no eggs there at all. It was a simple goose inside.",
        "Now the farmer had no goose and no golden eggs. {Greed|жадность} took everything.",
      ],
      questions: [
        {
          q: "Что находили фермер и жена каждое утро?",
          options: [
            { t: "Одно золотое яйцо", ok: true },
            { t: "Сотню золотых яиц" },
            { t: "Обычные яйца" },
          ],
          why: "Every morning the goose gave them one golden egg — каждое утро одно золотое яйцо.",
        },
        {
          q: "Почему фермер убил гусыню?",
          options: [
            { t: "Думал, что внутри сотни яиц, и хотел все сразу", ok: true },
            { t: "Гусыня перестала нести яйца" },
            { t: "Семье нечего было есть" },
          ],
          why: "«Inside the goose there are hundreds of eggs! I want them all today» — жадность: всё и сразу.",
        },
        {
          q: "Что оказалось внутри гусыни?",
          options: [
            { t: "Ничего — обычная гусыня", ok: true },
            { t: "Сотни яиц" },
            { t: "Одно большое яйцо" },
          ],
          why: "There were no eggs there at all. It was a simple goose inside. — Внутри не было никаких яиц.",
        },
        {
          q: "«The family became richer and richer» — что это значит?",
          options: [
            { t: "Семья становилась всё богаче и богаче", ok: true },
            { t: "Семья была самой богатой" },
            { t: "Семья разбогатела мгновенно" },
          ],
          why: "richer and richer — «всё богаче и богаче»: повтор сравнительной степени показывает рост. Грамматика A2 в деле!",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни",
      note: "Greed — жадность, lose — терять. Короткая и жёсткая мораль.",
      audio: ["When you want everything, you can lose everything."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Кто хочет всё и сразу — может потерять всё", ok: true },
            { t: "Золото не приносит счастья" },
            { t: "Гусыню нужно было продать" },
          ],
          why: "When you want everything, you can lose everything — жадность губит то, что уже есть.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "The family ",
      qAfter: " richer and richer.",
      hintRu: "Семья становилась всё богаче и богаче. (become — но в прошлом!)",
      note: "Неправильный глагол: become → became («становиться» → «становился»).",
      answer: "became",
      why: "become → became. Ещё один неправильный глагол в твою коллекцию!",
    },
  ],
  words: [
    { en: "farmer / goose", ru: "фермер / гусыня" },
    { en: "golden", ru: "золотой" },
    { en: "nest", ru: "гнездо" },
    { en: "became", ru: "стал (become → became)" },
    { en: "greed", ru: "жадность" },
    { en: "richer and richer", ru: "всё богаче и богаче" },
  ],
};

export default chapter;
