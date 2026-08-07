import type { WritingPrompt } from "@/lib/types";

const writing: WritingPrompt[] = [
  {
    slug: "last-weekend",
    title: "Прошлые выходные",
    instruction:
      "Расскажи о прошлых выходных в 5–6 предложениях: куда ходил, что делал, понравилось ли. Используй Past Simple, включая неправильные глаголы.",
    hint: "Last weekend I went to … . I saw … . It was … .",
    minWords: 35,
    sample:
      "Last weekend I went to the cinema with my friend. We watched a new film and ate popcorn. After that we walked in the park because the weather was great. In the evening I cooked dinner and called my parents. It was a really good weekend.",
    checklist: [
      "Неправильные глаголы (went, saw, ate) использованы в прошедшей форме, а не с -ed",
      "Правильные глаголы образованы через -ed (walked, cooked, called)",
      "Есть слова-связки: after that, in the evening, because",
    ],
  },
  {
    slug: "next-month",
    title: "Планы на следующий месяц",
    instruction:
      "Опиши свои планы на следующий месяц в 4–5 предложениях. Используй going to для планов и will для одного спонтанного решения.",
    hint: "Next month I am going to … . I will … if I have time.",
    minWords: 30,
    sample:
      "Next month I am going to visit my grandparents. I am going to take the train because it's cheaper than flying. I am also going to start a new English course. If I have free time, I will read more books too.",
    checklist: [
      "Планы описаны через be going to, а не просто will",
      "Есть хотя бы одно решение «в моменте» через will",
      "Ответ звучит как реальные, а не выдуманные планы",
    ],
  },
  {
    slug: "advice-for-a-friend",
    title: "Совет другу",
    instruction:
      "Друг написал, что плохо спит и много устаёт на работе. Дай ему 3–4 совета. Используй should / shouldn't и одно предложение про обязанность (have to / must).",
    hint: "You should … . You shouldn't … . You have to … .",
    minWords: 30,
    sample:
      "I think you should go to bed earlier and turn off your phone before sleep. You shouldn't drink coffee in the evening. Also, you have to take a short break during work — it really helps. You should try it this week and tell me how it goes.",
    checklist: [
      "Использованы обе формы: should и shouldn't",
      "Есть хотя бы одно предложение с have to или must",
      "Советы связаны с проблемой друга, а не общие фразы",
    ],
  },
];

export default writing;
