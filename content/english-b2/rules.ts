import type { RulesSet } from "@/lib/types";

const rules: RulesSet = {
  intro:
    "Уровень B2: свободная речь. Сводная карта всех времён, страдательный залог, косвенная речь, хвостовые вопросы, идиомы и регистры вежливости — всё, что отличает «знаю английский» от «живу на английском».",
  groups: [
    {
      heading: "Карта времён",
      blocks: [
        {
          id: "tense-map",
          title: "Сводная таблица времён",
          summary: "Четыре главных времени + два будущих: выбирай по сигнальным словам.",
          body: [
            "К уровню B2 ты знаешь все основные времена. Главное — быстро выбирать нужное. Ориентируйся на сигнальные слова и на вопрос «когда и зачем?».",
          ],
          table: {
            head: ["Время", "Формула", "Когда", "Сигналы"],
            rows: [
              ["Present Simple", "V / V+s", "привычки, факты", "every day, usually, always"],
              ["Present Continuous", "am/is/are + V-ing", "прямо сейчас", "now, at the moment, look!"],
              ["Past Simple", "V2 (worked, went)", "факт в прошлом", "yesterday, ago, in 2020"],
              ["Present Perfect", "have/has + V3", "опыт, результат", "ever, never, already, just, yet"],
              ["going to", "am/is/are going to + V", "план заранее", "план, намерение"],
              ["will", "will + V", "решение сейчас, обещание", "OK, I'll…; prediction"],
            ],
          },
          examples: [
            { en: "I check emails every morning.", ru: "Я проверяю почту каждое утро (привычка)." },
            { en: "I am checking it right now.", ru: "Проверяю прямо сейчас (процесс)." },
            { en: "I checked it yesterday.", ru: "Проверил вчера (факт в прошлом)." },
            { en: "I have already checked it.", ru: "Уже проверил (результат готов)." },
          ],
        },
        {
          id: "past-continuous",
          title: "Past Continuous — процесс в прошлом",
          summary: "was/were + V-ing: что происходило В МОМЕНТ прошлого. I was reading when you called.",
          body: [
            "Past Continuous описывает длящееся действие в конкретный момент прошлого. Часто в паре с Past Simple: длинное действие (was doing) прервано коротким (did).",
          ],
          examples: [
            { en: "I was walking home when it started to rain.", ru: "Я шёл домой, когда начался дождь." },
            { en: "At nine we were having a meeting.", ru: "В девять у нас шла встреча." },
          ],
        },
        {
          id: "passive",
          title: "Страдательный залог (Passive)",
          summary: "be + третья форма: The castle was built 900 years ago. Важно ЧТО сделано, а не КЕМ.",
          body: [
            "Passive используют, когда исполнитель неважен или неизвестен: English is spoken everywhere — на английском говорят везде.",
            "Формула: нужная форма be + V3. Настоящее: is made. Прошлое: was made. Если исполнителя всё же нужно назвать — добавь by: was built by the Romans.",
          ],
          examples: [
            { en: "This castle was built 900 years ago.", ru: "Этот замок построен 900 лет назад." },
            { en: "The app was made by two friends.", ru: "Приложение создано двумя друзьями." },
          ],
        },
        {
          id: "reported",
          title: "Косвенная речь",
          summary: "He said (that)… — передай чужие слова, сдвинув время на шаг назад.",
          body: [
            "Пересказывая чужие слова, вводи их через said (that) / told me (that). Время обычно сдвигается назад: am → was, will → would, can → could.",
            "«I am tired», — said Tom → Tom said he was tired.",
          ],
          examples: [
            { en: "She said she would call back.", ru: "Она сказала, что перезвонит." },
            { en: "He told me he had a new job.", ru: "Он сказал мне, что у него новая работа." },
          ],
        },
      ],
    },
    {
      heading: "Живая речь",
      blocks: [
        {
          id: "tag-questions",
          title: "Хвостовые вопросы (…, isn't it?)",
          summary: "Утверждение + «хвостик» наоборот: It's cold, isn't it? You like tea, don't you?",
          body: [
            "Хвостовой вопрос приглашает собеседника согласиться. Правило зеркала: утверждение положительное → хвост отрицательный, и наоборот. Вспомогательный глагол хвоста повторяет глагол фразы.",
          ],
          table: {
            head: ["Фраза", "Хвост"],
            rows: [
              ["It is cold,", "isn't it?"],
              ["You like tea,", "don't you?"],
              ["She went home,", "didn't she?"],
              ["You haven't seen it,", "have you?"],
            ],
          },
          examples: [
            { en: "Lovely weather, isn't it?", ru: "Прекрасная погода, не так ли? (классика британского small talk)" },
          ],
        },
        {
          id: "idioms",
          title: "Идиомы — говори как местный",
          summary: "Устойчивые фразы, которые не переводятся дословно: a piece of cake — проще простого.",
          body: [
            "Идиомы делают речь живой. Учи их целиком, как одно слово, вместе с ситуацией употребления.",
          ],
          table: {
            head: ["Идиома", "Дословно", "Смысл"],
            rows: [
              ["a piece of cake", "кусок торта", "проще простого"],
              ["it's raining cats and dogs", "дождь из кошек и собак", "льёт как из ведра"],
              ["once in a blue moon", "раз в голубую луну", "очень редко"],
              ["break a leg", "сломай ногу", "ни пуха ни пера"],
              ["hit the road", "ударить дорогу", "отправиться в путь"],
              ["hit the nail on the head", "попасть по шляпке гвоздя", "попасть в точку"],
              ["better late than never", "лучше поздно, чем никогда", "начинать не поздно"],
            ],
          },
          examples: [
            { en: "Don't worry, the test was a piece of cake.", ru: "Не переживай, тест был проще простого." },
          ],
        },
        {
          id: "understatement",
          title: "Британские преуменьшения (understatement)",
          summary: "«Not bad» у британца значит «отлично». Чем сдержаннее слова — тем сильнее чувство.",
          body: [
            "Британцы избегают громких слов. Похвала звучит сдержанно: not bad — отлично, quite good — прекрасно. Проблемы преуменьшаются: a bit of a nightmare («немножко кошмар») — полная катастрофа.",
            "Ирония о погоде — часть культуры: Lovely weather! под проливным дождём.",
          ],
          table: {
            head: ["Слова британца", "Реальный смысл"],
            rows: [
              ["Not bad!", "Отлично!"],
              ["Quite good, actually.", "Правда здорово."],
              ["A bit of a nightmare.", "Полная катастрофа."],
              ["I might be a little late.", "Сильно опоздаю."],
              ["Interesting…", "Сомнительно…"],
            ],
          },
          examples: [
            { en: "— How was the exam? — Not bad at all!", ru: "— Как экзамен? — Совсем неплохо! (= блестяще)" },
          ],
        },
        {
          id: "formal-register",
          title: "Регистры: деловой и дружеский",
          summary: "С друзьями — короче и проще, в делах — could/would, полные формы и формулы вежливости.",
          body: [
            "Одна мысль звучит по-разному в разных ситуациях. Другу: Wanna coffee? Коллеге: Would you like a coffee? Правило простое: чем меньше вы знакомы — тем длиннее и мягче фраза.",
            "Ключевые деловые формулы: We would like to…, I'm afraid…, Let me think it over, Thank you for your time, I respect your decision.",
          ],
          table: {
            head: ["Дружески", "Официально"],
            rows: [
              ["Wait a sec.", "Could you hold on a moment, please?"],
              ["No.", "I'm afraid we can't agree to that."],
              ["What do you want?", "What exactly do you offer?"],
              ["Thanks!", "Thank you so much for your time."],
            ],
          },
          examples: [
            { en: "We would like to discuss the details.", ru: "Мы хотели бы обсудить детали." },
          ],
        },
        {
          id: "presentations",
          title: "Язык презентаций",
          summary: "Скелет: First… Then… Finally…; мостики: Let me…, That's a great question.",
          body: [
            "Выступление держится на связках. Открытие: Let me tell you about… План: First → Then → Finally. Вопросы из зала: That's a great question (пауза подумать). Финал: Thank you for listening!",
          ],
          examples: [
            { en: "First, let me tell you our story.", ru: "Сначала позвольте рассказать нашу историю." },
            { en: "Finally, thank you for listening!", ru: "И в завершение — спасибо, что выслушали!" },
          ],
        },
      ],
    },
  ],
};

export default rules;
