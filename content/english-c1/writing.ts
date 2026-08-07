import type { WritingPrompt } from "@/lib/types";

const writing: WritingPrompt[] = [
  {
    slug: "a-decision-that-mattered",
    title: "Решение, которое всё изменило",
    instruction:
      "Опиши в 5–6 предложениях важное решение из своей жизни, используя смешанное условное (If I hadn't…, I wouldn't be…) и хотя бы одно предположение о прошлом (must/might/can't have).",
    hint: "If I hadn't…, I wouldn't be… Looking back, I must have… At the time, I might have…",
    minWords: 50,
    sample:
      "Three years ago, I almost turned down a job offer that felt too risky at the time. If I hadn't taken it, I wouldn't be doing work I actually love today. Looking back, I must have been more ready for the change than I realised — otherwise I wouldn't have said yes at all. There were moments when I might have made the safer choice, and part of me still wonders what that path would have looked like. But if I weren't willing to take that kind of risk, I probably wouldn't have grown as much as I did.",
    checklist: [
      "Есть хотя бы одно смешанное условное (Past Perfect → would / Past Simple → would have)",
      "Есть хотя бы одно предположение о прошлом (must/might/can't have)",
      "Текст говорит о реальном или правдоподобном решении, а не абстрактно",
    ],
  },
  {
    slug: "a-formal-pitch",
    title: "Формальное предложение",
    instruction:
      "Напиши короткую формальную заявку (5–7 предложений) с идеей для организации или фонда. Используй номинализацию (decision, growth, improvement), hedging (it could be argued that…) и хотя бы одну формальную связку (nevertheless, furthermore, notwithstanding).",
    hint: "We are writing to propose… Our decision to… It could be argued that… Furthermore/Nevertheless…",
    minWords: 60,
    sample:
      "We are writing to propose a collaboration between our two organisations. Our decision to focus on accessibility from the very beginning has led to steady growth among users who were previously underserved. It could be argued that this growth reflects a real gap in the market rather than simple luck. Furthermore, our approach has already shown measurable improvement in user retention over the past year. Notwithstanding the limited resources of a small team, we have maintained consistent quality across every project we have released. We would welcome the opportunity to discuss this further at your convenience.",
    checklist: [
      "Использована хотя бы одна номинализация (decision, growth, improvement и т.п.)",
      "Есть hedging-формулировка (it could be argued that / this may suggest that)",
      "Есть хотя бы одна формальная связка вместо разговорной (but → however/nevertheless)",
    ],
  },
  {
    slug: "why-it-matters",
    title: "Почему это важно",
    instruction:
      "Напиши короткую убедительную речь (5–7 предложений) о том, во что ты веришь. Используй правило трёх (три параллельные фразы подряд) и заверши риторическим вопросом.",
    hint: "We believe… We believe… We believe… (правило трёх) Заверши вопросом: Why should…? / If not now, then when?",
    minWords: 50,
    sample:
      "We believe that knowledge should be free. We believe that talent has nothing to do with income. We believe that the right teacher, at the right moment, can change a life completely. Every year, thousands of people give up on learning something new simply because they can't afford it — and that has never made sense to me. If access is the only thing standing between someone and their potential, why should we accept that as normal? If not now, then when do we start changing it?",
    checklist: [
      "Есть правило трёх — три параллельные фразы подряд (одинаковая структура)",
      "Текст заканчивается риторическим вопросом, а не утверждением",
      "Речь звучит как личная позиция, а не список фактов",
    ],
  },
];

export default writing;
