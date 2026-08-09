import type { Module } from "@/lib/content/types";

/**
 * Модуль 1 курса «Английский с нуля»: приветствие и имя.
 *
 * Первый модуль курса и первый модуль всей платформы, написанный по формату из
 * docs/format-uroka.md. На него будут равняться остальные.
 *
 * Состав сверен с программой docs/programma-english-starter.md.
 *
 * ЧТО ЗДЕСЬ НЕ ТАК, И ЭТО ИЗВЕСТНО:
 *
 * 1. Звука нет. Блок `audio` требует записей, а решение об их источнике за
 *    владельцем (docs/zadachi-vladeltsa.md, п. 1.4). Пока звука нет, подсказки
 *    произношения даны русскими буквами — это костыль, и он неточен: русская
 *    запись оглушает согласные и не различает звуков, которых в русском нет.
 *    Как появятся записи, подсказки заменяются звуком.
 *
 * 2. Итоги написаны как устные («здоровается», «называет имя»), а проверяются
 *    письменно: устное задание машина не оценивает и в проверочную работу не
 *    попадает. Разрыв признан открыто и закрывается тем же решением о звуке.
 *
 * 3. Модуль состоит из двух уроков, а программа отводит ему восемь. Это первая
 *    часть модуля, а не весь он.
 */
const module: Module = {
  slug: "privetstvie",
  title: "Приветствие",

  sources: [
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "Conversation, Pre-A1 и A1 (с. 74) — «greet people, state their name and take leave»; " +
        "Sociolinguistic appropriateness, A1 (с. 137) — простейшие приветствия без выбора между ними",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1: PRONOUNS subject «(SUBJECT) STATEMENTS»; VERBS types «LINKING VERB 'BE'»; " +
        "DETERMINERS possessives «WITH NOUNS» (your). " +
        "СВЕРХ СТУПЕНИ: вопрос «What's your name?» — QUESTIONS wh- «MAIN VERB 'BE'», A2. " +
        "Взят по решению 1 программы курса: без вопроса об имени знакомства не бывает",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "все шестнадцать слов модуля с пометкой A1: hello, hi, good, morning, afternoon, " +
        "evening, night, bye, goodbye, see, you, your, I, be, name, what, nice, meet, too",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 42 и 44 — речь экзаменатора в устной части: «Good morning / afternoon / evening. " +
        "I'm …, and this is … . What's your name?». Набор фраз урока 2 взят отсюда",
      license: "свободно распространяется, в уроки не копируется",
    },
  ],

  outcomes: [
    "здоровается, выбирая приветствие по времени дня, и прощается",
    "называет своё имя и понимает, когда имя спрашивают",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "hello-i-hi",
      title: "Hello и hi",
      estimatedMinutes: 12,
      outcome: "здоровается, выбирая приветствие по времени дня, и прощается",

      blocks: [
        {
          id: "dva-privetstviya",
          kind: "explain",
          text: [
            "В английском два повседневных приветствия: hello и hi. Они значат одно и то же " +
              "и оба подходят почти везде — в магазине, на работе, при встрече с незнакомым " +
              "человеком. Начните с любого: на этой ступени выбирать между ними не нужно.",
            "Разница есть, но небольшая: hi чаще звучит между теми, кто уже знаком. Ошибиться " +
              "здесь нельзя — ни одно из двух приветствий никого не обидит.",
          ],
        },
        {
          id: "chtenie-hello",
          kind: "note",
          tone: "info",
          text:
            "Как читается. Hello — «хэЛОУ». В подсказках произношения заглавными буквами " +
            "показан ударный слог: здесь ударение на второй, а не на первый. " +
            "Буква h произносится лёгким выдохом, без русского «х» с нажимом.",
        },
        {
          id: "vremya-dnya",
          kind: "explain",
          text: [
            "Кроме hello есть приветствия по времени дня. Good morning — до полудня. " +
              "Good afternoon — с полудня до вечера. Good evening — вечером.",
            "Эти три приветствия звучат учтивее и потому часто выбираются там, где важна " +
              "вежливость: в гостинице, на переговорах, в начале разговора с незнакомым " +
              "человеком. Именно ими начинает экзаменатор устную часть кембриджского экзамена.",
          ],
        },
        {
          id: "tablica-vremeni",
          kind: "table",
          caption: "Приветствия по времени дня",
          head: ["Английский", "Когда", "Как читается"],
          rows: [
            ["Good morning", "с утра до полудня", "гуд МОРнинг"],
            ["Good afternoon", "с полудня до вечера", "гуд афтэНУН"],
            ["Good evening", "вечером", "гуд ИВнинг"],
          ],
        },
        {
          id: "good-night-oshibka",
          kind: "note",
          tone: "mistake",
          text:
            "Частая ошибка: сказать good night при встрече вечером. Good evening — при встрече, " +
            "good night — при расставании. Слова похожи, а роли у них противоположные.",
        },
        {
          id: "proshchanie",
          kind: "explain",
          text: [
            "Прощаются словом goodbye или его краткой формой bye. Ещё говорят see you — " +
              "дословно «увидимся». Все три подходят для повседневного разговора.",
            "Отдельно стоит good night. Это не приветствие: его говорят, расставаясь поздно " +
              "вечером или уходя спать, как русское «спокойной ночи». Здороваться вечером " +
              "нужно словами good evening.",
          ],
        },
        {
          id: "slovar-1",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "hello", translation: "здравствуйте, привет", example: "Hello!", hint: "хэЛОУ" },
            { term: "hi", translation: "привет", example: "Hi!", hint: "хай" },
            {
              term: "good morning",
              translation: "доброе утро",
              example: "Good morning!",
              hint: "гуд МОРнинг",
            },
            {
              term: "good afternoon",
              translation: "добрый день",
              example: "Good afternoon!",
              hint: "гуд афтэНУН",
            },
            {
              term: "good evening",
              translation: "добрый вечер",
              example: "Good evening!",
              hint: "гуд ИВнинг",
            },
            { term: "goodbye", translation: "до свидания", example: "Goodbye!", hint: "гудБАЙ" },
            { term: "bye", translation: "пока", example: "Bye!", hint: "бай" },
            { term: "see you", translation: "увидимся", example: "See you!", hint: "си ю" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vremya-dnya",
          kind: "choice",
          prompt: "Вы заходите в кафе в три часа дня. Как поздороваться?",
          options: [
            { text: "Good morning" },
            { text: "Good afternoon", correct: true },
            { text: "Good night" },
          ],
          hint: "Полдень уже прошёл, вечер ещё не наступил.",
          why:
            "Good afternoon — с полудня до вечера. Good morning уже поздно, а good night — " +
            "это прощание перед сном, а не приветствие.",
        },
        {
          id: "z2-good-night",
          kind: "choice",
          prompt: "Вечер, вы уходите домой из гостей. Что сказать хозяевам?",
          options: [
            { text: "Good evening" },
            { text: "Good night", correct: true },
            { text: "Good morning" },
          ],
          hint: "Вы расстаётесь, а не здороваетесь.",
          why:
            "Good night говорят при расставании поздно вечером. Good evening в этот момент " +
            "прозвучало бы так, будто вы только пришли.",
        },
        {
          id: "z3-napisat-privetstvie",
          kind: "gap",
          prompt: "Допишите приветствие, которое говорят утром.",
          before: "Good ",
          after: "!",
          answer: "morning",
          hint: "Утро по-английски.",
          why: "Good morning — приветствие до полудня.",
        },
        {
          id: "z4-otmetit-proshchaniya",
          kind: "hottext",
          prompt: "Отметьте слова, которыми прощаются.",
          parts: [
            { text: "Hello", selectable: true },
            { text: " · " },
            { text: "Bye", selectable: true, correct: true },
            { text: " · " },
            { text: "Good evening", selectable: true },
            { text: " · " },
            { text: "See you", selectable: true, correct: true },
          ],
          hint: "Два из четырёх говорят при расставании.",
          why:
            "Bye и see you говорят при расставании. Hello и good evening — приветствия: " +
            "словами good evening здороваются вечером, а прощаются словами good night.",
        },
        {
          id: "z5-poryadok-razgovora",
          kind: "order",
          prompt: "Расставьте фразы в том порядке, в каком их говорят в течение суток.",
          items: ["Good evening!", "Good morning!", "Good night!", "Good afternoon!"],
          answer: [1, 3, 0, 2],
          hint: "Утро, день, вечер — и то, что говорят последним, уходя спать.",
          why:
            "Good morning до полудня, good afternoon до вечера, good evening вечером. " +
            "Good night завершает сутки: это прощание, а не приветствие.",
        },
        {
          id: "z6-napisanie-hello",
          kind: "short",
          prompt: "Запишите по-английски приветствие, которое подходит в любое время дня.",
          answer: "hello",
          accept: ["hi"],
          hint: "Пять букв, две из них одинаковые и стоят рядом. Или две буквы — тоже верно.",
          why:
            "Hello и hi годятся в любое время. В hello два l подряд, хотя слышится один звук: " +
            "написание и произношение в английском часто расходятся, и это придётся запоминать.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-vas-zovut",
      title: "Как вас зовут",
      estimatedMinutes: 14,
      outcome: "называет своё имя и понимает, когда имя спрашивают",

      blocks: [
        {
          id: "ya-eto-i-am",
          kind: "explain",
          text: [
            "Чтобы назвать себя, по-английски говорят I am и своё имя: I am Alim. " +
              "Слово I — «я», am — форма глагола be, которая употребляется только с " +
              "подлежащим I. Ни с каким другим словом am не сочетается.",
            "В русском в такой фразе глагола нет вовсе: «я Алим». В английском он обязателен. " +
              "Пропустить am нельзя: без него фраза остаётся незаконченной.",
          ],
        },
        {
          id: "primer-i-am",
          kind: "example",
          caption: "Как это выглядит",
          text: "I am Alim. — Я Алим.\nI am Dana. — Я Дана.",
          explain:
            "Порядок слов один и тот же: сначала I, потом am, потом имя. Имя пишется " +
            "с заглавной буквы — как и в русском.",
        },
        {
          id: "im-korotko",
          kind: "explain",
          text: [
            "В разговоре I am почти всегда сокращают до I'm. Значок между буквами называется " +
              "апострофом, он показывает, что букву a пропустили.",
            "Полное I am оставляют там, где сказанное выделяют голосом: I am Alim — «это именно " +
              "я Алим». В обычном разговоре это звучит слишком твёрдо, поэтому говорите I'm.",
          ],
        },
        {
          id: "zaglavnaya-i",
          kind: "note",
          tone: "mistake",
          text:
            "Ловушка на письме: I всегда пишется заглавной буквой, где бы ни стояло в предложении. " +
            "Это единственное местоимение с таким правилом. Написать i вместо I — ошибка, " +
            "которую замечают сразу. Дальше в курсе с заглавной буквы будут писаться ещё дни " +
            "недели, месяцы и названия стран и народов.",
        },
        {
          id: "vopros-imya",
          kind: "explain",
          text: [
            "Спрашивают имя двумя способами. Первый — What is your name? Дословно «какое есть " +
              "ваше имя». Второй, короче и мягче, — What's your name? Здесь what is сокращено " +
              "тем же апострофом.",
            "Отвечают либо полной фразой I'm Alim, либо одним именем: Alim. Оба ответа " +
              "правильны, короткий звучит естественнее.",
          ],
        },
        {
          id: "primer-dialog",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Hello! What's your name?\n— I'm Dana. And you?\n— I'm Alim. Nice to meet you.\n— Nice to meet you too.",
          explain:
            "And you? — «а вы?»: так возвращают вопрос, не повторяя его целиком. " +
            "Nice to meet you — «приятно познакомиться», а too в ответе значит «тоже».",
        },
        {
          id: "slovar-2",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "I", translation: "я — всегда с заглавной буквы", example: "I am Alim.", hint: "ай" },
            { term: "am", translation: "есть (только после I)", example: "I am here.", hint: "эм" },
            { term: "I'm", translation: "я (краткая форма I am)", example: "I'm Dana.", hint: "айм" },
            { term: "name", translation: "имя", example: "What's your name?", hint: "нэйм" },
            { term: "your", translation: "ваш, твой", example: "your name", hint: "ёр" },
            { term: "what", translation: "что, какой", example: "What's your name?", hint: "уот" },
            {
              term: "nice to meet you",
              translation: "приятно познакомиться",
              example: "Nice to meet you.",
              hint: "найс ту мит ю",
            },
            { term: "too", translation: "тоже", example: "Nice to meet you too.", hint: "ту" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-sebya",
          kind: "gap",
          prompt: "Допишите слово, чтобы получилось «Я Дана».",
          before: "I ",
          after: " Dana.",
          answer: "am",
          hint: "Форма глагола be, которая употребляется с подлежащим I.",
          why:
            "С подлежащим I употребляется только am. Пропустить его нельзя: в английском " +
            "глагол в таком предложении обязателен.",
        },
        {
          id: "z2-kratkaya-forma",
          kind: "short",
          prompt: "Запишите фразу I am Alim в краткой форме.",
          answer: "I'm Alim",
          hint: "Апостроф встаёт на место пропущенной буквы.",
          why:
            "I am сокращается до I'm: апостроф заменяет букву a. Так говорят почти всегда, " +
            "а полная форма нужна, только когда фразу выделяют голосом.",
        },
        {
          id: "z3-zaglavnaya",
          kind: "hottext",
          prompt: "Отметьте записи с ошибкой.",
          parts: [
            { text: "I'm", selectable: true },
            { text: " · " },
            { text: "i am", selectable: true, correct: true },
            { text: " · " },
            { text: "What's", selectable: true },
            { text: " · " },
            { text: "i'm", selectable: true, correct: true },
          ],
          hint: "Одно слово в английском всегда пишется с заглавной буквы.",
          why:
            "I пишется заглавной всегда, где бы ни стояло. Поэтому «i am» и «i'm» — ошибки, " +
            "а «I'm» и «What's» написаны верно.",
        },
        {
          id: "z4-vopros",
          kind: "choice",
          prompt: "Как спросить имя?",
          options: [
            { text: "Your name?" },
            { text: "What your name?" },
            { text: "What's your name?", correct: true },
          ],
          hint: "Нужны и вопросительное слово, и глагол.",
          why:
            "What's your name? Первый вариант — обрывок без глагола и вопросительного слова. " +
            "Во втором пропущен глагол is: без него английский вопрос не строится.",
        },
        {
          id: "z5-poryadok-dialoga",
          kind: "order",
          prompt: "Расставьте реплики знакомства по порядку.",
          items: [
            "I'm Dana. And you?",
            "Hello! What's your name?",
            "Nice to meet you.",
            "I'm Alim.",
          ],
          answer: [1, 0, 3, 2],
          hint: "Сначала здороваются и спрашивают, потом отвечают и возвращают вопрос.",
          why:
            "Сначала приветствие с вопросом, потом ответ и встречный вопрос, затем отвечает " +
            "второй, и в конце звучит «приятно познакомиться».",
        },
        {
          id: "z6-sopostavit",
          kind: "match",
          prompt: "Сопоставьте английскую фразу и её перевод.",
          left: ["I'm Alim.", "What's your name?", "And you?", "Nice to meet you."],
          right: ["Как вас зовут?", "Приятно познакомиться.", "Я Алим.", "А вы?"],
          answer: [2, 0, 3, 1],
          hint: "Начните с фразы, в которой есть имя.",
          why:
            "Все четыре фразы вместе составляют знакомство: назвать себя, спросить имя, " +
            "вернуть вопрос, вежливо закончить.",
        },
        {
          id: "z7-svoyo-imya",
          kind: "speak",
          prompt: "Произнесите вслух, как вы представитесь по-английски. Подставьте своё имя.",
          phrase: "Hello! I'm ... . Nice to meet you.",
          translation: "Здравствуйте! Я ... . Приятно познакомиться.",
          hint: "Не торопитесь: в I'm слышится один слог — «айм».",
          why:
            "Это готовый набор фраз для первой встречи: приветствие, имя, вежливая концовка. " +
            "Повторите их несколько раз, чтобы они произносились без запинки.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Заданий, где ответ нужно написать самому, — 5 из 8. Оба итога проверяются.
  // =======================================================================
  quiz: {
    ask: 6,
    passRatio: 0.7,
    questions: [
      {
        id: "q-vecher",
        kind: "choice",
        outcome: "здоровается, выбирая приветствие по времени дня, и прощается",
        prompt: "Вы пришли в гостиницу в восемь вечера. Что сказать?",
        options: [{ text: "Good morning" }, { text: "Good evening", correct: true }, { text: "Good night" }],
        why: "Good evening — вечернее приветствие. Good night говорят, уходя спать.",
      },
      {
        id: "q-dopisat-afternoon",
        kind: "gap",
        outcome: "здоровается, выбирая приветствие по времени дня, и прощается",
        prompt: "Допишите приветствие, которое говорят с полудня до вечера.",
        before: "Good ",
        after: "!",
        answer: "afternoon",
        why: "Good afternoon — приветствие с полудня до вечера.",
      },
      {
        id: "q-proshchanie",
        kind: "short",
        outcome: "здоровается, выбирая приветствие по времени дня, и прощается",
        prompt: "Напишите по-английски короткое прощание из трёх букв.",
        answer: "bye",
        accept: ["bye", "Bye", "bye!"],
        why: "Bye — обычное прощание между знакомыми.",
      },
      {
        id: "q-otmetit-privetstviya",
        kind: "hottext",
        outcome: "здоровается, выбирая приветствие по времени дня, и прощается",
        prompt: "Отметьте приветствия.",
        parts: [
          { text: "Goodbye", selectable: true },
          { text: " · " },
          { text: "Good morning", selectable: true, correct: true },
          { text: " · " },
          { text: "See you", selectable: true },
          { text: " · " },
          { text: "Hi", selectable: true, correct: true },
        ],
        why: "Good morning и hi — приветствия. Goodbye и see you говорят при расставании.",
      },
      {
        id: "q-am",
        kind: "gap",
        outcome: "называет своё имя и понимает, когда имя спрашивают",
        prompt: "Допишите пропущенное слово.",
        before: "I ",
        after: " Dana.",
        answer: "am",
        why:
          "С подлежащим I употребляется am. В английском глагол в таком предложении обязателен.",
      },
      {
        id: "q-vopros-imya",
        kind: "choice",
        outcome: "называет своё имя и понимает, когда имя спрашивают",
        prompt: "Незнакомый человек говорит: «What's your name?» О чём он спрашивает?",
        options: [
          { text: "Откуда вы" },
          { text: "Как ваши дела" },
          { text: "Как вас зовут", correct: true },
        ],
        why: "What's your name? — вопрос об имени.",
      },
      {
        id: "q-poryadok-znakomstva",
        kind: "order",
        outcome: "называет своё имя и понимает, когда имя спрашивают",
        prompt: "Расставьте реплики знакомства по порядку.",
        items: ["I'm Dana.", "What's your name?", "Nice to meet you."],
        answer: [1, 0, 2],
        why: "Сначала вопрос, потом имя, в конце — «приятно познакомиться».",
      },
      {
        id: "q-zaglavnaya-i",
        kind: "short",
        outcome: "называет своё имя и понимает, когда имя спрашивают",
        prompt: "Исправьте ошибки и запишите фразу верно: «i am alim».",
        answer: "I am Alim",
        accept: ["I'm Alim"],
        // Сверка с учётом заглавных букв: без неё задание засчитывало бы
        // дословно переписанную из условия ошибку
        exact: true,
        why:
          "I всегда пишется заглавной буквой, имя — тоже с заглавной. Краткая форма I'm " +
          "здесь так же верна.",
      },
    ],
  },
};

export default module;
