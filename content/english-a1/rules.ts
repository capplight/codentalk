import type { RulesSet } from "@/lib/types";

const rules: RulesSet = {
  intro:
    "Уровень A1: ты уже строишь фразы — пора научиться говорить о привычках и о том, что происходит прямо сейчас. Здесь Present Simple, Present Continuous, вопросы с do/does, предлоги и умение сравнивать «эту» и «ту» вещь.",
  groups: [
    {
      heading: "Настоящее время",
      blocks: [
        {
          id: "present-simple",
          title: "Present Simple — привычки и факты",
          summary: "Регулярные действия и факты: I work, we play. Глагол в обычной форме.",
          body: [
            "Present Simple описывает то, что происходит регулярно или всегда: привычки, расписание, факты о мире. Сигнальные слова: every day, usually, always, often, sometimes, never.",
            "Глагол берётся в базовой форме (work, live, like) без изменений — кроме третьего лица (см. следующее правило).",
          ],
          examples: [
            { en: "I drink tea every morning.", ru: "Я пью чай каждое утро." },
            { en: "We live in Almaty.", ru: "Мы живём в Алматы." },
            { en: "Buses stop here.", ru: "Автобусы останавливаются здесь." },
          ],
        },
        {
          id: "third-person-s",
          title: "-s в третьем лице (he / she / it)",
          summary: "С he/she/it к глаголу добавляется -s: he works, she likes, it rains.",
          body: [
            "Главная ловушка Present Simple: с he, she, it глагол получает окончание -s. С остальными (I, you, we, they) — без -s.",
            "После -o, -s, -sh, -ch, -x добавляется -es (go → goes, watch → watches). После согласной + y → -ies (study → studies).",
          ],
          table: {
            head: ["Местоимение", "Форма", "Пример"],
            rows: [
              ["I / you / we / they", "work", "They work here."],
              ["he / she / it", "works", "He works here."],
              ["he (go)", "goes", "She goes home."],
              ["he (study)", "studies", "He studies English."],
            ],
          },
          examples: [
            { en: "She likes coffee.", ru: "Она любит кофе." },
            { en: "It works well.", ru: "Это хорошо работает." },
          ],
          mistakes: [
            { wrong: "He like tea.", right: "He likes tea.", note: "С he/she/it глагол получает -s." },
          ],
        },
        {
          id: "do-does",
          title: "Вопросы и отрицания: do / does",
          summary: "Вопрос: Do you…? / Does he…? Отрицание: don't / doesn't.",
          body: [
            "В Present Simple вопросы и отрицания строятся с помощником do (для I/you/we/they) и does (для he/she/it). Сам глагол при этом возвращается в базовую форму — без -s.",
            "Отрицание: don't = do not, doesn't = does not.",
          ],
          table: {
            head: ["Тип", "I/you/we/they", "he/she/it"],
            rows: [
              ["Вопрос", "Do you like it?", "Does he like it?"],
              ["Отрицание", "I don't like it.", "She doesn't like it."],
            ],
          },
          examples: [
            { en: "Do you speak English?", ru: "Ты говоришь по-английски?" },
            { en: "She doesn't eat meat.", ru: "Она не ест мясо." },
          ],
          mistakes: [
            { wrong: "Does he likes tea?", right: "Does he like tea?", note: "После does глагол без -s: -s уже «ушёл» в does." },
          ],
        },
        {
          id: "present-continuous",
          title: "Present Continuous — прямо сейчас",
          summary: "Действие в момент речи: am/is/are + глагол-ing. I am working now.",
          body: [
            "Present Continuous описывает то, что происходит в данный момент. Формула: to be (am/is/are) + глагол с окончанием -ing.",
            "Сигнальные слова: now, right now, at the moment, look!, listen!",
          ],
          examples: [
            { en: "I am reading now.", ru: "Я сейчас читаю." },
            { en: "She is talking to a client.", ru: "Она разговаривает с клиентом." },
            { en: "Look! It is raining.", ru: "Смотри! Идёт дождь." },
          ],
          mistakes: [
            { wrong: "I working now.", right: "I am working now.", note: "Нужна связка am/is/are перед -ing." },
          ],
        },
        {
          id: "simple-vs-continuous",
          title: "Present Simple или Continuous?",
          summary: "Simple — вообще/регулярно (I work). Continuous — прямо сейчас (I am working).",
          body: [
            "Сравни: I work in London — я работаю в Лондоне (вообще, это моя работа). I am working now — я работаю прямо сейчас (в этот момент).",
            "Ориентируйся на сигнальные слова: every day/usually → Simple; now/at the moment → Continuous.",
          ],
          examples: [
            { en: "He usually drinks tea, but now he is drinking coffee.", ru: "Обычно он пьёт чай, но сейчас пьёт кофе." },
          ],
        },
      ],
    },
    {
      heading: "Указатели, предлоги, количество",
      blocks: [
        {
          id: "this-that",
          title: "this / that / these / those",
          summary: "this — этот (рядом), that — тот (далеко). Мн. ч.: these — эти, those — те.",
          body: [
            "Указательные слова показывают на предметы. Рядом — this (один) / these (много). Далеко — that (один) / those (много).",
          ],
          table: {
            head: ["", "Один", "Много"],
            rows: [
              ["Рядом", "this (этот)", "these (эти)"],
              ["Далеко", "that (тот)", "those (те)"],
            ],
          },
          examples: [
            { en: "This is my seat.", ru: "Это моё место." },
            { en: "How much are these shoes?", ru: "Сколько стоят эти туфли?" },
          ],
        },
        {
          id: "prepositions",
          title: "Предлоги места и направления",
          summary: "in — в, on — на, at — в точке/у, to — к (движение).",
          body: [
            "in — внутри (in the room, in London), on — на поверхности (on the table), at — в конкретной точке или у места (at the door, at work, at 5 o'clock).",
            "to показывает направление движения: go to London, come to me.",
          ],
          examples: [
            { en: "The keys are on the table.", ru: "Ключи на столе." },
            { en: "I go to work at nine.", ru: "Я иду на работу в девять." },
            { en: "She is in the café.", ru: "Она в кафе." },
          ],
        },
        {
          id: "how-much-many",
          title: "How much / How many и цены",
          summary: "How much? — сколько стоит / сколько (неисчисляемого). How many? — сколько штук.",
          body: [
            "О цене спрашивают How much: одна вещь → How much is…?, несколько → How much are…?",
            "How many считает штуки (исчисляемое): How many brothers do you have?",
          ],
          examples: [
            { en: "How much is this cup?", ru: "Сколько стоит эта чашка?" },
            { en: "How many people are there?", ru: "Сколько там людей?" },
          ],
        },
      ],
    },
    {
      heading: "Полезные конструкции",
      blocks: [
        {
          id: "can",
          title: "Глагол can — умение, просьба, разрешение",
          summary: "can + глагол: I can swim (умею), Can you help? (просьба), Can I sit here? (разрешение).",
          body: [
            "Can — модальный глагол. После него глагол идёт без to и без -s: I can, he can (не «cans»).",
            "Значения: умение (I can drive), просьба (Can you help me?), разрешение (Can I come in?). Отрицание — can't.",
          ],
          examples: [
            { en: "I can speak a little English.", ru: "Я немного говорю по-английски." },
            { en: "Can you repeat, please?", ru: "Можете повторить, пожалуйста?" },
          ],
          mistakes: [
            { wrong: "She cans swim.", right: "She can swim.", note: "Can не меняется и не берёт -s." },
          ],
        },
        {
          id: "there-is-are",
          title: "there is / there are — «есть, имеется»",
          summary: "there is + одна вещь, there are + несколько. О том, что где-то находится.",
          body: [
            "Конструкция there is/are сообщает, что нечто существует или находится в каком-то месте. Одна вещь → there is, несколько → there are.",
            "Отрицание: there is no…, there are no… Вопрос: Is there…? / Are there…?",
          ],
          examples: [
            { en: "There is a café near the hotel.", ru: "Рядом с отелем есть кафе." },
            { en: "There are two windows in the room.", ru: "В комнате два окна." },
            { en: "Is there a problem?", ru: "Есть проблема?" },
          ],
        },
        {
          id: "adjectives",
          title: "Прилагательные и их место",
          summary: "Прилагательное ставится ПЕРЕД существительным: a red car, a big city.",
          body: [
            "В английском прилагательное стоит перед предметом, а не после: «красная машина» → a red car (не «a car red»).",
            "Прилагательные не меняются по числу: a big house, big houses (не «bigs»).",
          ],
          examples: [
            { en: "I have a blue jacket.", ru: "У меня синяя куртка." },
            { en: "It is a beautiful old city.", ru: "Это красивый старый город." },
          ],
          mistakes: [
            { wrong: "a jacket blue", right: "a blue jacket", note: "Цвет и другие прилагательные — перед существительным." },
          ],
        },
      ],
    },
  ],
};

export default rules;
