import type { WritingPrompt } from "@/lib/types";

const writing: WritingPrompt[] = [
  {
    slug: "my-day",
    title: "Мой обычный день",
    instruction:
      "Опиши свой обычный день в 4–5 предложениях: во сколько встаёшь, что делаешь утром, вечером. Используй Present Simple.",
    hint: "I get up at … . I have breakfast at … . In the evening I … .",
    minWords: 25,
    sample:
      "I get up at seven o'clock. I have breakfast and go to work. I usually finish work at six. In the evening I watch TV or read a book. I go to bed at eleven.",
    checklist: [
      "У глаголов в третьем лице (he/she/it) добавлено -s",
      "Есть хотя бы одно слово-время: usually, always, at … o'clock",
      "Все предложения о привычных действиях, а не о том, что происходит прямо сейчас",
    ],
  },
  {
    slug: "my-room",
    title: "Моя комната",
    instruction:
      "Опиши свою комнату в 4–5 предложениях: что там есть, где что находится. Используй there is / there are и предлоги (in, on, at).",
    hint: "There is a bed in my room. There are two windows. My desk is next to the bed.",
    minWords: 25,
    sample:
      "There is a big bed in my room. There are two windows and a small table. My laptop is on the table. There is a lamp next to the bed. I love my room because it is quiet.",
    checklist: [
      "There is использовано для одного предмета, there are — для нескольких",
      "Есть хотя бы один предлог места: in, on, at, next to",
      "Описание похоже на настоящую комнату, а не на список слов",
    ],
  },
  {
    slug: "yesterday",
    title: "Вчерашний день",
    instruction:
      "Расскажи, каким был вчерашний день, в 4–5 предложениях. Используй was / were и хотя бы один вопрос с was.",
    hint: "Yesterday was … . I was at … . The weather was … . Were you at home?",
    minWords: 25,
    sample:
      "Yesterday was Saturday. I was at home in the morning. The weather was sunny, so I was in the park in the afternoon. My friends were there too. Were you at home yesterday?",
    checklist: [
      "Использованы обе формы: was (я/он/она) и were (ты/мы/они)",
      "Есть хотя бы одно предложение-вопрос",
      "Понятно, о каком дне идёт речь (вчера)",
    ],
  },
];

export default writing;
