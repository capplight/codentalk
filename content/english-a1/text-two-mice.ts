import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-town-mouse",
  title: "Городская и деревенская мышь (по Эзопу)",
  subtitle:
    "Классика о том, где жить лучше: в богатом городе со страхом или в бедной деревне со спокойствием. Уровень A1.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "🏠", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Две мыши — две жизни. Одна живёт в деревне просто и тихо, другая в городе — богато, но… Впрочем, прочитай сам. Текст уровня A1: чуть длиннее фразы, знакомая грамматика.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Town Mouse and the Country Mouse",
      note: "Country — деревня, town — город. Обрати внимание на there is/are и can — грамматика твоего уровня в живом тексте.",
      text: [
        "A {country|деревня} mouse lives in a small house. She eats simple food, but her life is quiet and happy.",
        "One day her friend from the {town|город} comes. «Your food is so simple! — she says. — Come to my house. There is cheese, bread and cake every day!»",
        "The country mouse goes to the town. The house is big and beautiful. On the table there is wonderful food.",
        "But when they start to eat, a big cat runs into the room! The two mice run and hide.",
        "Then a dog comes. The mice run again. They cannot eat, they cannot rest.",
        "«Thank you, but I want to go home, — says the country mouse. — Your food is rich, but my simple food is safe. I can eat it in {peace|покой}»." ,
      ],
      questions: [
        {
          q: "Какая жизнь у деревенской мыши?",
          options: [
            { t: "Простая, тихая и счастливая", ok: true },
            { t: "Богатая и опасная" },
            { t: "Голодная и грустная" },
          ],
          why: "She eats simple food, but her life is quiet and happy — простая еда, но тихая счастливая жизнь.",
        },
        {
          q: "Чем городская мышь заманивает подругу?",
          options: [
            { t: "Сыром, хлебом и тортом каждый день", ok: true },
            { t: "Большим садом" },
            { t: "Добрым котом" },
          ],
          why: "There is cheese, bread and cake every day! — «Каждый день есть сыр, хлеб и торт!»",
        },
        {
          q: "Кто помешал мышам поесть?",
          options: [
            { t: "Сначала кот, потом собака", ok: true },
            { t: "Только собака" },
            { t: "Хозяин дома" },
          ],
          why: "A big cat runs into the room! … Then a dog comes. — Сначала кот, потом собака.",
        },
        {
          q: "Почему деревенская мышь вернулась домой?",
          options: [
            { t: "Её простая еда безопасна — можно есть спокойно", ok: true },
            { t: "Ей не понравился вкус сыра" },
            { t: "Она поссорилась с подругой" },
          ],
          why: "My simple food is safe. I can eat it in peace — «Моя простая еда безопасна. Я могу есть её спокойно».",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни",
      note: "Better — лучше, fear — страх. Мораль строится на сравнении.",
      audio: ["Simple food in peace is better than rich food in fear."],
      questions: [
        {
          q: "Какова мораль?",
          options: [
            { t: "Простая еда в покое лучше богатой в страхе", ok: true },
            { t: "В городе жить всегда лучше" },
            { t: "Коты опаснее собак" },
          ],
          why: "Simple food in peace is better than rich food in fear — простое и спокойное лучше богатого и тревожного.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Закрепи",
      qBefore: "My simple food is ",
      qAfter: " — I can eat it in peace.",
      hintRu: "Моя простая еда безопасна — я могу есть её спокойно. (safe — безопасный)",
      note: "Слово из финала басни: safe — безопасный.",
      answer: "safe",
      why: "Safe — безопасный. Второй текст уровня A1 прочитан!",
    },
  ],
  words: [
    { en: "country / town", ru: "деревня / город" },
    { en: "quiet", ru: "тихий" },
    { en: "hide", ru: "прятаться" },
    { en: "rich", ru: "богатый" },
    { en: "safe", ru: "безопасный" },
    { en: "in peace", ru: "в покое, спокойно" },
  ],
};

export default chapter;
