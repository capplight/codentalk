import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-jumping-frog",
  title: "Знаменитая скачущая лягушка (по Марку Твену)",
  subtitle:
    "Один из самых разговорных, живых рассказов на английском языке — отличный образец естественной, неформальной речи для уровня C1.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🐸", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Марк Твен опубликовал «Знаменитую скачущую лягушку из Калавераса» в 1865 году — рассказ, который сделал его знаменитым. Он написан почти разговорным языком рассказчика-балагура. Вот адаптированный отрывок.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Celebrated Jumping Frog (retold)",
      note: "Заметь неформальный, почти устный стиль рассказчика — будто он сидит рядом с тобой за столом и травит байки.",
      text: [
        "There was a fellow here once by the name of Jim Smiley, and if he ever got a chance to bet on anything, he'd bet on it — didn't matter what. Dogs, horses, chicken fights, camp meetings — Smiley would find a way to bet.",
        "He {trained|тренировал} a frog once, spent three months on nothing else. He taught that frog to jump higher than any frog in the county. He'd say, «Flies, Dan'l, flies!» and the frog would jump like a shot and snatch a fly right off the ground. Smiley was mighty proud of that frog.",
        "One day a stranger came into camp. Smiley, quiet as you please, asked if the man had ever seen a frog jump. The stranger said he reckoned he hadn't seen no frog worth talking about. Smiley couldn't let that go.",
        "«I've got a frog might win a bet for you, if I had a mind to bet», Smiley said. The stranger looked at the frog a long while. «Well», he says, «I don't see nothing 'bout that frog that's any better'n any other frog».",
        "They bet forty dollars. While Smiley went off to catch another frog for the stranger to compare, the stranger — quick as a wink — filled Dan'l full of quail shot, right up to the chin.",
        "When the jumping started, the other frog hopped off nice as you please. But Dan'l — Dan'l just gave a heave and never budged, planted there like a church. Smiley was the most surprised man you ever saw. He never did find out he'd been cheated, not for a good long time.",
      ],
      questions: [
        {
          q: "Что было главной страстью Джима Смайли?",
          options: [
            { t: "Спорить на что угодно", ok: true },
            { t: "Разводить лошадей на продажу" },
            { t: "Устраивать лагерные встречи" },
          ],
          why: "if he ever got a chance to bet on anything, he'd bet on it — азарт был его главной чертой.",
        },
        {
          q: "Чему Смайли научил свою лягушку Дэниела?",
          options: [
            { t: "Высоко прыгать и хватать мух на лету", ok: true },
            { t: "Плавать наперегонки" },
            { t: "Квакать по команде" },
          ],
          why: "He taught that frog to jump higher… and snatch a fly right off the ground.",
        },
        {
          q: "Что незнакомец сделал с лягушкой Смайли, пока тот отошёл?",
          options: [
            { t: "Накормил её дробью, чтобы она не могла прыгать", ok: true },
            { t: "Подменил её другой лягушкой" },
            { t: "Отпустил её на волю" },
          ],
          why: "the stranger… filled Dan'l full of quail shot, right up to the chin — грубая, но эффективная уловка.",
        },
        {
          q: "Чем закончилось состязание лягушек?",
          options: [
            { t: "Лягушка незнакомца прыгнула, а Дэниел не сдвинулся с места", ok: true },
            { t: "Обе лягушки прыгнули одинаково далеко" },
            { t: "Дэниел выиграл, несмотря ни на что" },
          ],
          why: "Dan'l just gave a heave and never budged, planted there like a church — дробь в желудке лишила его шансов.",
        },
        {
          q: "Узнал ли Смайли в этот момент, что его обманули?",
          options: [
            { t: "Нет, ещё долго не узнавал", ok: true },
            { t: "Да, сразу же" },
            { t: "Узнал только незнакомец рассказал ему сам" },
          ],
          why: "He never did find out he'd been cheated, not for a good long time — рассказ обрывается на его недоумении.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Ключевая реплика незнакомца",
      note: "«I don't see nothing 'bout that frog» — намеренно неправильная грамматика (двойное отрицание) как часть разговорного, диалектного стиля рассказчика.",
      audio: [
        "Well, I don't see nothing 'bout that frog that's any better'n any other frog.",
      ],
      questions: [
        {
          q: "Что странного в грамматике этой фразы — и почему автор так пишет намеренно?",
          options: [
            { t: "Двойное отрицание (don't… nothing) передаёт разговорный диалект персонажа", ok: true },
            { t: "Это обычная грамматическая ошибка автора" },
            { t: "Фраза написана на устаревшем литературном английском" },
          ],
          why: "Марк Твен намеренно использует нестандартную грамматику, чтобы передать живую устную речь простого рассказчика — приём, который стоит уметь распознавать на уровне C1.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль для разговорника",
      q: "Собери разговорную фразу об азарте Смайли:",
      note: "If he ever got a chance to bet on anything, he'd bet on it.",
      words: ["If", "he", "ever", "got", "a", "chance", "to", "bet", "on", "anything,", "he'd", "bet", "on", "it."],
      answer: "If he ever got a chance to bet on anything, he'd bet on it.",
      why: "he'd bet on it — разговорное сокращение he would. Ты прочитал Марка Твена почти в оригинале!",
      phrase: { en: "If he ever got a chance to bet on anything, he'd bet on it.", ru: "Если у него была возможность поспорить о чём угодно, он спорил." },
    },
  ],
  words: [
    { en: "to bet", ru: "спорить, делать ставку" },
    { en: "to snatch", ru: "схватить" },
    { en: "stranger", ru: "незнакомец" },
    { en: "to reckon", ru: "полагать, думать (разговорное)" },
    { en: "to cheat", ru: "обмануть, смошенничать" },
    { en: "to budge", ru: "сдвинуться с места" },
  ],
};

export default chapter;
