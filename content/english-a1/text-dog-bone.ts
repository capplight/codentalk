import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-dog-and-bone",
  title: "Собака и кость (по Эзопу)",
  subtitle:
    "Собака, мост и отражение в воде: короткая басня о том, как жадность оставляет ни с чем. Читается за две минуты, помнится всю жизнь.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🐕", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Ещё одна классика Эзопа — про собаку, которая захотела две кости и осталась без единой. Следи за словом reflection — «отражение»: на нём держится вся история.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Dog and the Bone",
      note: "Dog — собака, bone — кость. Читай не спеша и следи, что собака видит в воде на самом деле.",
      text: [
        "A dog has a big {bone|кость}. She is happy and goes home with it.",
        "On the way there is a small {bridge|мост} over the river.",
        "The dog looks into the water — and sees another dog with another bone!",
        "«Her bone is bigger than mine! I want it too!» — thinks the dog.",
        "She opens her mouth to take the second bone… and her own bone falls into the water.",
        "There is no second dog. It is only her {reflection|отражение}. Now the dog has no bone at all.",
      ],
      questions: [
        {
          q: "Кого собака увидела в воде?",
          options: [
            { t: "Своё собственное отражение", ok: true },
            { t: "Другую собаку, которая плыла по реке" },
            { t: "Рыбу с костью" },
          ],
          why: "It is only her reflection — «Это лишь её отражение». Reflection — отражение.",
        },
        {
          q: "Почему собака открыла пасть?",
          options: [
            { t: "Захотела отнять «вторую» кость", ok: true },
            { t: "Захотела позвать другую собаку" },
            { t: "Устала нести кость" },
          ],
          why: "She opens her mouth to take the second bone — жадность: своя кость есть, но «чужая» кажется больше.",
        },
        {
          q: "Чем закончилась история?",
          options: [
            { t: "Собака осталась совсем без кости", ok: true },
            { t: "Собака достала обе кости" },
            { t: "Собака переплыла реку" },
          ],
          why: "Now the dog has no bone at all — «Теперь у собаки нет кости вовсе». At all — совсем, вообще.",
        },
        {
          q: "«Her bone is bigger than mine» — что значит mine?",
          options: [
            { t: "«Моя» (кость) — без повторения слова bone", ok: true },
            { t: "«Шахта»" },
            { t: "«Маленькая»" },
          ],
          why: "Mine — «мой/моя», когда предмет не повторяют: my bone → mine. Полезное слово уровня A1!",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни",
      note: "Chase — гнаться, lose — терять. Мораль о цене жадности.",
      audio: ["If you chase two bones, you can lose both."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Погонишься за двумя костями — потеряешь обе", ok: true },
            { t: "Не смотри в воду с моста" },
            { t: "Большая кость лучше маленькой" },
          ],
          why: "If you chase two bones, you can lose both — русский аналог: «За двумя зайцами погонишься — ни одного не поймаешь».",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "Her bone is ",
      qAfter: " than mine!",
      hintRu: "Её кость больше моей! (big — но в форме сравнения)",
      note: "Сравнение из басни: big → bigger + than.",
      answer: "bigger",
      why: "Her bone is bigger than mine — «Её кость больше моей». Именно это сравнение и погубило собаку!",
    },
  ],
  words: [
    { en: "bone", ru: "кость" },
    { en: "bridge", ru: "мост" },
    { en: "reflection", ru: "отражение" },
    { en: "mine", ru: "мой, моя (без существительного)" },
    { en: "at all", ru: "совсем, вообще" },
    { en: "both", ru: "оба, обе" },
  ],
};

export default chapter;
