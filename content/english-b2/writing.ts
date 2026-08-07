import type { WritingPrompt } from "@/lib/types";

const writing: WritingPrompt[] = [
  {
    slug: "a-day-that-changed",
    title: "День, который всё изменил",
    instruction:
      "Напиши небольшой рассказ (6–8 предложений) о дне, который сильно на тебя повлиял. Свободно используй разные времена: Past Simple, Past Continuous, Present Perfect.",
    hint: "It was a normal morning. I was walking to work when … . Since that day, I have … .",
    minWords: 60,
    sample:
      "It was a normal Tuesday morning. I was walking to the metro station when I got a call about a job offer I wasn't expecting. I had applied for the position months earlier and had almost forgotten about it. I accepted immediately, without thinking twice. Since that day, my whole career has changed direction. I have learned more in the last year than in the previous five. Looking back, I still can't believe how one phone call changed everything.",
    checklist: [
      "Использованы минимум три разных времени",
      "Past Continuous описывает фон события (was walking, was doing)",
      "Present Perfect связывает прошлое с сегодняшним днём (has changed, have learned)",
    ],
  },
  {
    slug: "idioms-in-context",
    title: "Идиомы в разговоре",
    instruction:
      "Напиши короткий диалог или рассказ (6–8 предложений), используя минимум три идиомы из юнита (например: break the ice, under the weather, cost an arm and a leg, once in a blue moon).",
    hint: "Идиому нужно вписать в естественный контекст, а не просто перечислить.",
    minWords: 50,
    sample:
      "I hadn't seen my old friend Tom in years, so at the party I decided to break the ice by asking about his trip to Japan. He told me the flights had cost an arm and a leg, but it was worth it. Later he said he'd been feeling a bit under the weather since coming back, probably from the long flight. We don't meet often — once in a blue moon, really — so it was great to finally catch up.",
    checklist: [
      "Использовано минимум три идиомы из юнита",
      "Каждая идиома вписана в контекст, а не в отдельное предложение-список",
      "Смысл текста понятен даже без списка идиом рядом",
    ],
  },
  {
    slug: "polite-decline",
    title: "Вежливый отказ",
    instruction:
      "Напиши формальное письмо, в котором вежливо отклоняешь деловое предложение (например, условия инвестора). Используй формальный регистр речи и хотя бы одно предложение в страдательном залоге.",
    hint: "Thank you for your offer. However, after careful consideration, we have decided … . The proposal was reviewed by … .",
    minWords: 50,
    sample:
      "Dear Mr. Stone,\nThank you for your offer and for the time you spent discussing our project. However, after careful consideration, we have decided not to proceed with the proposed terms. The proposal was reviewed by the whole team, and we felt the conditions did not align with our long-term vision. We remain very grateful for your interest and would welcome the chance to talk again in the future.\nKind regards,\nAlim",
    checklist: [
      "Тон письма формальный, без разговорных слов и сокращений",
      "Есть хотя бы одно предложение в страдательном залоге (the proposal was reviewed)",
      "Отказ вежливый, но однозначный — не оставляет ложной надежды",
    ],
  },
];

export default writing;
