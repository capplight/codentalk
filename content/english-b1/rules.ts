import type { RulesSet } from "@/lib/types";

const rules: RulesSet = {
  intro:
    "Уровень B1: уверенное общение. Здесь Present Perfect и его отличие от Past Simple, условные предложения, косвенные просьбы, наречия, глагольные связки (enjoy doing / want to do) и язык мнений.",
  groups: [
    {
      heading: "Present Perfect",
      blocks: [
        {
          id: "present-perfect",
          title: "Present Perfect — опыт и результат",
          summary: "have/has + третья форма глагола: I have visited London. Прошлое, важное сейчас.",
          body: [
            "Present Perfect связывает прошлое с настоящим: опыт за жизнь (I have been to London — я бывал в Лондоне), результат, который важен сейчас (I have finished — я закончил, вот результат).",
            "Формула: have (для I/you/we/they) или has (для he/she/it) + причастие. У правильных глаголов причастие = форме на -ed, у неправильных — своя третья форма: go → gone, see → seen, do → done, be → been.",
          ],
          table: {
            head: ["Глагол", "Past Simple", "3-я форма"],
            rows: [
              ["work", "worked", "worked"],
              ["go", "went", "gone"],
              ["be", "was/were", "been"],
              ["see", "saw", "seen"],
              ["do", "did", "done"],
              ["make", "made", "made"],
              ["find", "found", "found"],
              ["build", "built", "built"],
            ],
          },
          examples: [
            { en: "I have never lived abroad.", ru: "Я никогда не жил за границей." },
            { en: "She has already found a flat.", ru: "Она уже нашла квартиру." },
          ],
        },
        {
          id: "perfect-signals",
          title: "Слова-спутники: ever, never, already, just, yet, for, since",
          summary: "ever — когда-либо, never — никогда, already — уже, just — только что, yet — ещё/уже (в вопросах и отрицаниях), for — в течение, since — с (момента).",
          body: [
            "ever/never/already/just ставятся между have и глаголом: I have just arrived. yet идёт в конец отрицаний и вопросов: I haven't finished yet. Have you eaten yet?",
            "for + отрезок времени (for two years — уже два года), since + точка отсчёта (since 2023 — с 2023 года).",
          ],
          examples: [
            { en: "Have you ever tried sushi?", ru: "Ты когда-нибудь пробовал суши?" },
            { en: "I have worked here for a year.", ru: "Я работаю здесь уже год." },
            { en: "We have known each other since school.", ru: "Мы знакомы со школы." },
          ],
        },
        {
          id: "perfect-vs-past",
          title: "Present Perfect или Past Simple?",
          summary: "Есть точное время (yesterday, in 2020) → Past Simple. Опыт/результат без времени → Present Perfect.",
          body: [
            "Если названо КОГДА (yesterday, last week, in 2020, two days ago) — только Past Simple: I saw him yesterday.",
            "Если время не названо, а важен сам факт или результат — Present Perfect: I have seen this film (когда-то, неважно когда).",
          ],
          examples: [
            { en: "I finished the report yesterday.", ru: "Я закончил отчёт вчера (когда — названо)." },
            { en: "I have finished the report.", ru: "Я закончил отчёт (важен результат: он готов)." },
          ],
          mistakes: [
            { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", note: "С точным временем (yesterday) Present Perfect не используется." },
          ],
        },
      ],
    },
    {
      heading: "Условные предложения",
      blocks: [
        {
          id: "first-conditional",
          title: "Первое условное — реальное будущее",
          summary: "If + настоящее, will + глагол: If it rains, we will stay at home.",
          body: [
            "Описывает реальное условие и его вероятный результат. В части с if используется настоящее время (НЕ will!), в части результата — will.",
            "Части можно менять местами: We will stay at home if it rains — запятая тогда не нужна.",
          ],
          examples: [
            { en: "If you need help, I will help you.", ru: "Если понадобится помощь, я помогу." },
            { en: "If people like it, we will make it big.", ru: "Если людям понравится, мы сделаем его большим." },
          ],
          mistakes: [
            { wrong: "If it will rain, we will stay.", right: "If it rains, we will stay.", note: "После if — настоящее время, will туда не ставится." },
          ],
        },
        {
          id: "second-conditional",
          title: "Второе условное — фантазии и советы",
          summary: "If + прошедшее, would + глагол: If I were you, I would try.",
          body: [
            "Описывает нереальную или маловероятную ситуацию: «если бы… то бы…». В if-части — прошедшее время, в результате — would + глагол.",
            "Классика советов: If I were you, I would… — «на твоём месте я бы…». Обрати внимание: were используется со всеми лицами, даже с I и he — это особая форма для фантазий.",
          ],
          examples: [
            { en: "If I were you, I would apply.", ru: "На твоём месте я бы подал заявку." },
            { en: "If I had more time, I would travel.", ru: "Будь у меня больше времени, я бы путешествовал." },
            { en: "What would you do?", ru: "А ты бы что сделал?" },
          ],
        },
      ],
    },
    {
      heading: "Общение: мнения, просьбы, письма",
      blocks: [
        {
          id: "opinions",
          title: "Выражение мнения и вежливое несогласие",
          summary: "I think… / In my opinion… — мнение. I agree / I see your point, but I don't agree — согласие и спор.",
          body: [
            "Мнение вводят словами I think (that)…, In my opinion…, It seems to me… — так фраза звучит как позиция, а не как приговор.",
            "Формула вежливого несогласия: сначала признание (I see your point / That's true), затем возражение (but I don't agree / but I think…).",
          ],
          examples: [
            { en: "In my opinion, the blue version is better.", ru: "По моему мнению, синяя версия лучше." },
            { en: "I see your point, but I don't agree.", ru: "Понимаю вашу мысль, но не согласен." },
            { en: "That makes sense.", ru: "Это логично." },
          ],
        },
        {
          id: "polite-requests",
          title: "Вежливые просьбы: could, would",
          summary: "Could you…? / Would you…? — вежливее, чем can. Would like — вежливое «хочу».",
          body: [
            "could и would — «мягкие» формы для просьб к незнакомым, старшим и в деловой среде: Could you help me, please?",
            "I would like (I'd like) — вежливое «я хочу»: I'd like a coffee, please. В вопросе: Would you like…? — «не хотите ли…?»",
          ],
          examples: [
            { en: "Could I speak to Ms Carter, please?", ru: "Могу я поговорить с мисс Картер?" },
            { en: "I would like to book a table.", ru: "Я хотел бы забронировать столик." },
          ],
        },
        {
          id: "verb-patterns",
          title: "Глагольные связки: want to / enjoy doing",
          summary: "Одни глаголы требуют to (want to go), другие — -ing (enjoy going).",
          body: [
            "После want, need, hope, decide, plan идёт to + глагол: I want to learn. После enjoy, like (в значении хобби), finish, stop идёт глагол с -ing: I enjoy learning.",
          ],
          table: {
            head: ["+ to", "+ -ing"],
            rows: [
              ["want to go", "enjoy going"],
              ["need to work", "finish working"],
              ["hope to see", "stop worrying"],
              ["decide to stay", "keep learning"],
            ],
          },
          examples: [
            { en: "I enjoy helping people.", ru: "Мне нравится помогать людям." },
            { en: "We decided to build it together.", ru: "Мы решили делать это вместе." },
          ],
          mistakes: [
            { wrong: "I enjoy to help.", right: "I enjoy helping.", note: "После enjoy — глагол с -ing." },
          ],
        },
        {
          id: "business-letter",
          title: "Скелет делового письма",
          summary: "Dear + имя → I am writing about… → суть → Best regards + имя.",
          body: [
            "Формальное письмо всегда строится одинаково: приветствие Dear Ms/Mr + фамилия, первая строка о цели (I am writing about…), суть коротко, подпись Best regards / Kind regards и имя.",
            "Телефонные формулы того же регистра: Could I speak to…? / Hold on a moment, please. / Can I call you back?",
          ],
          examples: [
            { en: "Dear Ms Carter, I am writing about our project.", ru: "Уважаемая мисс Картер, пишу по поводу нашего проекта." },
            { en: "Best regards, Alim", ru: "С уважением, Алим" },
          ],
        },
        {
          id: "adverbs",
          title: "Наречия на -ly",
          summary: "Прилагательное + ly = как? slow → slowly, easy → easily.",
          body: [
            "Наречие описывает, КАК происходит действие, и обычно образуется добавлением -ly: quick → quickly (быстро).",
            "Исключения-ловушки: good → well (хорошо), fast → fast, hard → hard (усердно).",
          ],
          examples: [
            { en: "She speaks slowly and clearly.", ru: "Она говорит медленно и чётко." },
            { en: "He works hard and learns fast.", ru: "Он усердно работает и быстро учится." },
          ],
          mistakes: [
            { wrong: "She sings good.", right: "She sings well.", note: "good — прилагательное, well — наречие «хорошо»." },
          ],
        },
      ],
    },
  ],
};

export default rules;
