import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-fox-and-grapes",
  title: "Лиса и виноград (по Эзопу)",
  subtitle:
    "Откуда взялось выражение «зелен виноград»? Из этой басни. Прочитай оригинальную историю про лису, которая не признала поражение.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🦊", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "«Sour grapes» — «кислый виноград» — так англичане до сих пор называют случаи, когда человек ругает то, чего не смог получить. Выражению две с половиной тысячи лет — и родилось оно здесь.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Fox and the Grapes",
      note: "Fox — лиса, grapes — виноград. Обрати внимание на can и can't — они главные в этой истории.",
      text: [
        "A hungry {fox|лиса} walks in a garden. She sees beautiful {grapes|виноград} on a high branch.",
        "«They look so sweet! I want them!» — she thinks.",
        "The fox jumps. She cannot reach the grapes. She jumps again and again — but the {branch|ветка} is too high.",
        "The fox is tired. She stops, looks at the grapes and says:",
        "«I don't want them! I am sure they are {sour|кислый}». And she walks away.",
        "It is easy to hate what you cannot have.",
      ],
      questions: [
        {
          q: "Почему лиса не достала виноград?",
          options: [
            { t: "Ветка была слишком высоко", ok: true },
            { t: "Виноград был кислым" },
            { t: "В саду был сторож" },
          ],
          why: "The branch is too high — «Ветка слишком высоко». Too high — слишком высоко.",
        },
        {
          q: "Что лиса сказала, уходя?",
          options: [
            { t: "«Я и не хочу его — он наверняка кислый»", ok: true },
            { t: "«Я вернусь завтра с лестницей»" },
            { t: "«Это лучший виноград в саду»" },
          ],
          why: "«I don't want them! I am sure they are sour» — лиса сделала вид, что виноград ей и не нужен.",
        },
        {
          q: "Виноград действительно был кислым?",
          options: [
            { t: "Неизвестно — лиса его даже не попробовала", ok: true },
            { t: "Да, лиса его попробовала" },
            { t: "Нет, он был сладким — лиса съела одну ягоду" },
          ],
          why: "Лиса не дотянулась до винограда, значит и вкуса знать не могла. «Кислый» — просто оправдание.",
        },
        {
          q: "«It is easy to hate what you cannot have» — как это понять?",
          options: [
            { t: "Легко ругать то, что не можешь получить", ok: true },
            { t: "Ненавидеть легко, а любить трудно" },
            { t: "Нельзя хотеть слишком многого" },
          ],
          why: "Легко объявить недостижимое «плохим» — это защищает самолюбие. Про таких и говорят: sour grapes.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Знаменитое выражение из басни",
      note: "Sour — кислый. Всего два слова — но их знает каждый носитель английского.",
      audio: ["Sour grapes."],
      questions: [
        {
          q: "Когда англичане говорят «sour grapes»?",
          options: [
            { t: "Когда человек ругает то, чего не смог получить", ok: true },
            { t: "Когда еда испортилась" },
            { t: "Когда урожай не удался" },
          ],
          why: "Sour grapes — «зелен виноград»: обесценивание недоступного. Прямая цитата из басни.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "The fox jumps, but she ",
      qAfter: " reach the grapes.",
      hintRu: "Лиса прыгает, но не может дотянуться до винограда. (отрицание от can, слитно: cannot)",
      note: "«Не может» = cannot (или can't). В тексте использована полная форма — cannot.",
      answer: "cannot",
      why: "She cannot reach the grapes — «Она не может дотянуться до винограда». Cannot = can't.",
    },
  ],
  words: [
    { en: "fox", ru: "лиса" },
    { en: "grapes", ru: "виноград" },
    { en: "branch", ru: "ветка" },
    { en: "reach", ru: "дотянуться" },
    { en: "sour / sweet", ru: "кислый / сладкий" },
    { en: "sour grapes", ru: "«зелен виноград» (обесценивание недоступного)" },
  ],
};

export default chapter;
