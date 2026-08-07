import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-cop-and-anthem",
  title: "Полицейский и гимн (по О. Генри)",
  subtitle:
    "Бездомный Сопи мечтает попасть в тюрьму на зиму — но удача упряма. Самая ироничная новелла О. Генри в пересказе уровня B1.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "🍂", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "«Полицейский и гимн» (1904) — фирменная ирония О. Генри: герой изо всех сил нарушает закон, чтобы попасть в тёплую тюрьму, но… Финал этой истории входит во все списки лучших концовок мировой новеллистики.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Cop and the Anthem (retold)",
      note: "Soapy — имя героя (Сопи), jail — тюрьма. Следи за иронией: каждая попытка попасть в тюрьму проваливается по смешной причине.",
      text: [
        "Winter was coming, and {homeless|бездомный} Soapy needed a warm place. His dream was simple: three months in {jail|тюрьма}, with a bed and food.",
        "He tried to break a shop window — but the policeman didn't believe that Soapy had done it: «Criminals run away, and you are standing here!»",
        "He ate dinner at a restaurant and said he had no money — but the waiters just threw him out. No police at all.",
        "He shouted and danced in the street like a {drunk|пьяный} man — the policeman said: «He is just a happy student. Leave him alone».",
        "Tired and sad, Soapy stopped near an old church. Inside, an organ played a beautiful {anthem|гимн}. Soapy remembered his mother, his old dreams, his clean young years.",
        "«I will change my life! — he decided. — Tomorrow I will find a job. I will become an honest man!»",
        "At that moment a policeman put a hand on his shoulder: «What are you doing here?» — And the judge said: «Three months in jail»." ,
      ],
      questions: [
        {
          q: "О чём мечтал Сопи в начале зимы?",
          options: [
            { t: "Попасть в тюрьму на три месяца — там тепло и кормят", ok: true },
            { t: "Найти работу и жильё" },
            { t: "Уехать на юг" },
          ],
          why: "His dream was simple: three months in jail, with a bed and food — тюрьма как зимняя квартира.",
        },
        {
          q: "Почему полицейский не арестовал Сопи за разбитую витрину?",
          options: [
            { t: "Не поверил: преступники убегают, а Сопи стоял на месте", ok: true },
            { t: "Витрина не разбилась" },
            { t: "Сопи успел спрятаться" },
          ],
          why: "«Criminals run away, and you are standing here!» — честное поведение Сопи сработало против его плана.",
        },
        {
          q: "Что изменило Сопи у церкви?",
          options: [
            { t: "Гимн напомнил ему о матери и прежней чистой жизни", ok: true },
            { t: "Священник предложил ему работу" },
            { t: "Он нашёл деньги на ступенях" },
          ],
          why: "Soapy remembered his mother, his old dreams, his clean young years — музыка разбудила лучшее в нём.",
        },
        {
          q: "В чём ирония финала?",
          options: [
            { t: "Его арестовали именно тогда, когда он решил стать честным", ok: true },
            { t: "Тюрьма оказалась закрыта на зиму" },
            { t: "Судья оказался его братом" },
          ],
          why: "Весь день он добивался ареста и не мог его получить; а в момент духовного перерождения получил свои «три месяца». Классика О. Генри.",
        },
        {
          q: "«The policeman didn't believe that Soapy had done it» — зачем здесь had done?",
          options: [
            { t: "Разбитие витрины случилось РАНЬШЕ разговора — прошлое до прошлого", ok: true },
            { t: "Для вежливости" },
            { t: "Так говорят только полицейские" },
          ],
          why: "Past Perfect: had done — действие до другого прошедшего момента. Ты уже видел это в «Дарах волхвов»!",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Решение Сопи у церкви — переломный момент рассказа",
      note: "Три обещания подряд — все через will. Момент решения = will, помнишь?",
      audio: [
        "I will change my life.",
        "Tomorrow I will find a job.",
        "I will become an honest man.",
      ],
      questions: [
        {
          q: "Какие решения принял Сопи?",
          options: [
            { t: "Изменить жизнь, найти работу, стать честным", ok: true },
            { t: "Разбить ещё одну витрину" },
            { t: "Уйти из города навсегда" },
          ],
          why: "I will change my life… find a job… become an honest man — три решения в момент речи, все через will.",
        },
        {
          q: "Почему во всех фразах именно will?",
          options: [
            { t: "Это решения, принятые прямо сейчас, в момент озарения", ok: true },
            { t: "Это планы, задуманные давно" },
            { t: "После церкви можно говорить только will" },
          ],
          why: "Решение в момент речи → will. Если бы Сопи планировал заранее, было бы going to. Грамматика подчёркивает драму!",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "«I ",
      qAfter: " become an honest man!» — Soapy decided.",
      hintRu: "«Я стану честным человеком!» — решил Сопи. (решение в момент речи)",
      note: "Момент решения — will. Одно слово, которое меняло жизнь Сопи… почти.",
      answer: "will",
      why: "I will become an honest man — решение в моменте. О. Генри прочитан, ирония понята, will закреплён.",
    },
  ],
  words: [
    { en: "homeless", ru: "бездомный" },
    { en: "jail", ru: "тюрьма" },
    { en: "anthem", ru: "гимн" },
    { en: "honest", ru: "честный" },
    { en: "judge", ru: "судья" },
    { en: "leave him alone", ru: "оставьте его в покое" },
  ],
};

export default chapter;
