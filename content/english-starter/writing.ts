import type { WritingPrompt } from "@/lib/types";

const writing: WritingPrompt[] = [
  {
    slug: "about-me",
    title: "Расскажи о себе",
    instruction:
      "Напиши 3–4 простых предложения о себе: как тебя зовут, сколько тебе лет, откуда ты. Используй глагол to be (am / is / are).",
    hint: "Начни так: My name is… I am … years old. I am from … .",
    minWords: 15,
    sample: "My name is Alim. I am 21 years old. I am from Kazakhstan. I am a student.",
    checklist: [
      "В каждом предложении есть am, is или are",
      "Имя и страна написаны с большой буквы",
      "Предложения простые и понятные, без лишних слов",
    ],
  },
  {
    slug: "my-family",
    title: "Моя семья",
    instruction:
      "Опиши свою семью в 3–4 предложениях: кто есть в семье и что у тебя есть (используй have got / I have).",
    hint: "Например: I have got a sister. Her name is … . My mother is … .",
    minWords: 15,
    sample:
      "I have got a big family. I have got a sister and a brother. My mother is a teacher. My father is a doctor.",
    checklist: [
      "Использован глагол have (got) хотя бы раз",
      "Есть притяжательные местоимения: my, her, his",
      "Каждое предложение — законченная мысль",
    ],
  },
  {
    slug: "my-bag",
    title: "Мой чемодан",
    instruction:
      "Напиши список из 4–5 вещей, которые ты берёшь в поездку, и вежливо попроси одну вещь у друга (Can I have…?).",
    hint: "I have got a passport, a phone and … . Can I have your umbrella, please?",
    minWords: 15,
    sample:
      "I have got a passport, a phone, a jacket and a bottle of water. Can I have a map, please? Thank you very much!",
    checklist: [
      "Перед словом в единственном числе стоит a или an, где нужно",
      "Просьба начинается с Can I…?",
      "В конце просьбы есть please",
    ],
  },
];

export default writing;
