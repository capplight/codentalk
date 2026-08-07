import type { WritingPrompt } from "@/lib/types";

const writing: WritingPrompt[] = [
  {
    slug: "have-you-ever",
    title: "Мой опыт",
    instruction:
      "Расскажи о своём опыте в 5–6 предложениях: что ты уже делал в жизни, а что ещё нет. Используй Present Perfect (have/has + ever, never, already, yet) и хотя бы раз Past Simple для деталей.",
    hint: "I have never … . I have already … . Last year I … (деталь конкретного случая).",
    minWords: 40,
    sample:
      "I have travelled to three countries, but I have never been to Europe. I have already learned the basics of English, and now I'm working on speaking. Last year I visited Turkey with my friends, and it was an amazing trip. I haven't tried snowboarding yet, but I want to.",
    checklist: [
      "Present Perfect использован для общего опыта (без конкретного времени)",
      "Past Simple использован для конкретного случая с датой или местом",
      "Есть хотя бы одно из слов: ever, never, already, yet",
    ],
  },
  {
    slug: "business-email",
    title: "Деловое письмо",
    instruction:
      "Напиши короткое деловое письмо коллеге: предложи перенести встречу на другой день. Используй структуру Dear … / суть письма / Best regards.",
    hint: "Dear …, I am writing to … . Could we … ? Best regards, …",
    minWords: 35,
    sample:
      "Dear Sarah,\nI am writing to ask about our meeting on Friday. Unfortunately, I have another appointment that day. Could we move the meeting to Monday morning instead? Please let me know if that works for you.\nBest regards,\nAlim",
    checklist: [
      "Письмо начинается с Dear и заканчивается Best regards / Kind regards",
      "Просьба сформулирована вежливо (Could we…?, Would it be possible…?)",
      "Есть чёткая причина переноса",
    ],
  },
  {
    slug: "if-i-were-you",
    title: "На твоём месте",
    instruction:
      "Друг сомневается, стоит ли менять работу. Дай ему совет через If I were you, I would … и опиши реальное условие через if + present, will.",
    hint: "If I were you, I would … . If you don't like your job, you will … .",
    minWords: 35,
    sample:
      "If I were you, I would talk to your manager first about your concerns. If the situation doesn't improve, you will probably need to start looking for a new job. If you find something better, you will feel much happier. But if you don't try to fix it first, you will never know if it could have worked.",
    checklist: [
      "Есть предложение If I were you, I would… (второе условное)",
      "Есть предложение с if + present, … will (первое условное)",
      "После if не стоит will в самом условии",
    ],
  },
];

export default writing;
