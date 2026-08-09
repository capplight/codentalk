import type { Module } from "@/lib/content/types";

/**
 * Модуль 1 курса «Английский с нуля»: приветствие и имя.
 *
 * Первый модуль курса и первый модуль всей платформы, написанный по формату из
 * docs/format-uroka.md. На него будут равняться остальные.
 *
 * Состав сверен с программой docs/programma-english-starter.md: местоимения в
 * роли подлежащего и глагол `be` как связка — оба пункта ступени A1.
 *
 * Звука пока нет: блок `audio` требует записей, а решение об их источнике за
 * владельцем. Места, где звук нужен, помечены в тексте — см. docs/zadachi-vladeltsa.md.
 */
const module: Module = {
  slug: "privetstvie",
  title: "Приветствие",

  sources: [
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section: "Overall spoken interaction, A1 (с. 72); Общие описания Pre-A1 (с. 24)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section: "A1: PRONOUNS (SUBJECT) STATEMENTS; VERBS types: LINKING VERB 'BE'",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section: "слова с пометкой A1: hello, name, meet, from, thank",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "здоровается и прощается так, как принято в разное время дня",
    "называет своё имя и понимает, когда имя спрашивают",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "hello-i-hi",
      title: "Hello и hi",
      estimatedMinutes: 12,
      outcome: "здоровается и прощается так, как принято в разное время дня",

      blocks: [
        {
          id: "dva-privetstviya",
          kind: "explain",
          text: [
            "В английском два повседневных приветствия: hello и hi. Они значат одно и то же, " +
              "но звучат по-разному по вежливости. Hello подходит везде: незнакомому человеку, " +
              "в магазине, в письме на работу. Hi — приветствие своим: друзьям, однокурсникам, " +
              "коллегам, с которыми вы на короткой ноге.",
            "Ошибиться здесь не страшно. Hello вместо hi звучит чуть суше, чем нужно, но никого " +
              "не обидит. А вот hi начальнику при первой встрече прозвучит слишком запросто.",
          ],
        },
        {
          id: "chtenie-hello",
          kind: "note",
          tone: "info",
          text:
            "Как читается. Hello — «хэЛОУ», ударение на второй слог, а не на первый. " +
            "Буква h произносится лёгким выдохом, без русского «х» с нажимом.",
        },
        {
          id: "vremya-dnya",
          kind: "explain",
          text: [
            "Кроме hello есть приветствия по времени дня. Good morning — до полудня. " +
              "Good afternoon — с полудня примерно до шести вечера. Good evening — вечером.",
            "Они вежливее, чем hello, и потому уместны там, где важна учтивость: в гостинице, " +
              "на переговорах, при обращении к незнакомому человеку старше вас.",
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
            "Частая ошибка: сказать good night при встрече вечером. Good night — это не " +
            "приветствие, а прощание перед сном, вроде русского «спокойной ночи». Вечером " +
            "здороваются словами good evening.",
        },
        {
          id: "proshchanie",
          kind: "explain",
          text: [
            "Прощаются словом goodbye или его коротким видом bye. Bye — как hi: между своими " +
              "и в обычном разговоре. Goodbye звучит суше и окончательнее, поэтому в живой речи " +
              "его берут реже, чем можно подумать по учебникам.",
            "Ещё говорят see you — дословно «увидимся». Это самое частое прощание среди знакомых.",
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
          id: "z2-hi-ili-hello",
          kind: "choice",
          prompt: "Вы впервые пришли на собеседование. Что уместнее сказать?",
          options: [
            { text: "Hi" },
            { text: "Hello", correct: true },
            { text: "Разницы нет, оба одинаковы" },
          ],
          hint: "Одно из двух приветствий — для своих.",
          why:
            "Hello подходит и незнакомым, и в деловой обстановке. Hi — приветствие между " +
            "своими, на собеседовании оно прозвучит слишком запросто.",
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
            "good evening здороваются вечером, а прощаются словом good night.",
        },
        {
          id: "z5-poryadok-razgovora",
          kind: "order",
          prompt: "Расставьте реплики так, чтобы получился короткий разговор при встрече и расставании.",
          items: ["Bye!", "Hello!", "Hi!"],
          answer: [1, 2, 0],
          hint: "Сначала здороваются, потом прощаются.",
          why:
            "Один здоровается — hello, другой отвечает — hi, в конце разговора звучит " +
            "прощание bye.",
        },
        {
          id: "z6-napisanie-na-sluh",
          kind: "short",
          prompt: "Запишите по-английски приветствие, которое читается «хэЛОУ».",
          answer: "hello",
          hint: "Пять букв, две из них одинаковые и стоят рядом.",
          why:
            "Hello. Обратите внимание: два l подряд, хотя на слух слышится один звук — " +
            "написание и произношение в английском часто расходятся.",
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
              "Слово I — «я», am — форма глагола be, которая ставится только после I.",
            "В русском в такой фразе глагола нет вовсе: «я Алим». В английском он обязателен. " +
              "Пропустить am нельзя — фраза развалится, как если бы по-русски сказали " +
              "«я быть Алим» наоборот.",
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
              "апострофом, он показывает, что букву a выбросили.",
            "Полное I am оставляют там, где нужно подчеркнуть слово: I am Alim — «это именно я " +
              "Алим». В обычной речи это звучит слишком твёрдо, поэтому по умолчанию берите I'm.",
          ],
        },
        {
          id: "zaglavnaya-i",
          kind: "note",
          tone: "mistake",
          text:
            "Ловушка письма: I всегда пишется заглавной буквой, где бы ни стояло в предложении. " +
            "Это единственное такое слово в английском. Написать i вместо I — самая заметная " +
            "ошибка новичка.",
        },
        {
          id: "vopros-imya",
          kind: "explain",
          text: [
            "Спрашивают имя двумя способами. Первый — What is your name? Дословно «какое есть " +
              "ваше имя». Второй, короче и мягче, — What's your name? Здесь what is сокращено " +
              "тем же апострофом.",
            "Отвечают либо полной фразой I'm Alim, либо просто именем: Alim. Оба ответа " +
              "приняты, короткий звучит естественнее.",
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
            { term: "I", translation: "я", example: "I am Alim.", hint: "ай, всегда с заглавной" },
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
          accept: ["am", "'m"],
          hint: "Форма глагола be, которая ставится после I.",
          why: "После I ставится только am. Пропустить его нельзя: в английском глагол обязателен.",
        },
        {
          id: "z2-kratkaya-forma",
          kind: "short",
          prompt: "Запишите кратко фразу I am Alim.",
          answer: "I'm Alim",
          accept: ["I'm Alim.", "im alim", "I'm Alim!"],
          hint: "Апостроф встаёт на место выброшенной буквы.",
          why:
            "I am сокращается до I'm: апостроф заменяет букву a. Так говорят почти всегда, " +
            "полная форма нужна только для нажима.",
        },
        {
          id: "z3-zaglavnaya",
          kind: "hottext",
          prompt: "Отметьте слова, написанные с ошибкой.",
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
            { text: "Who are you?" },
            { text: "What's your name?", correct: true },
            { text: "I'm your name." },
          ],
          hint: "Дословно: «какое есть ваше имя».",
          why:
            "What's your name? — обычный вопрос об имени. Who are you? тоже переводится " +
            "«кто вы», но звучит требовательно, почти как оклик охранника.",
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
            "Приветствие и вопрос, ответ с возвращённым вопросом, ответ второго, и в конце — " +
            "«приятно познакомиться».",
        },
        {
          id: "z6-sopostavit",
          kind: "match",
          prompt: "Сопоставьте английскую фразу и её перевод.",
          left: ["I'm Alim.", "What's your name?", "And you?", "Nice to meet you."],
          right: ["Я Алим.", "Как вас зовут?", "А вы?", "Приятно познакомиться."],
          answer: [0, 1, 2, 3],
          hint: "Начните с той, где стоит имя.",
          why:
            "Все четыре фразы вместе составляют знакомство: назвать себя, спросить имя, " +
            "вернуть вопрос, ответить на знакомство.",
        },
        {
          id: "z7-svoyo-imya",
          kind: "speak",
          prompt: "Произнесите вслух, как вы представитесь по-английски. Подставьте своё имя.",
          phrase: "Hello! I'm ... . Nice to meet you.",
          translation: "Здравствуйте! Я ... . Приятно познакомиться.",
          hint: "Не торопитесь: в I'm слышится один слог — «айм».",
          why:
            "Это готовая связка для первой встречи: приветствие, имя, вежливая концовка. " +
            "Её стоит довести до того, чтобы она произносилась не задумываясь.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Требуют произвести ответ: 5 из 8. Оба итога покрыты.
  // =======================================================================
  quiz: {
    ask: 6,
    passRatio: 0.7,
    questions: [
      {
        id: "q-vecher",
        kind: "choice",
        outcome: "здоровается и прощается так, как принято в разное время дня",
        prompt: "Вы пришли в гостиницу в восемь вечера. Что сказать?",
        options: [{ text: "Good morning" }, { text: "Good evening", correct: true }, { text: "Good night" }],
        why: "Good evening — вечернее приветствие. Good night говорят, уходя спать.",
      },
      {
        id: "q-dopisat-afternoon",
        kind: "gap",
        outcome: "здоровается и прощается так, как принято в разное время дня",
        prompt: "Допишите приветствие, которое говорят днём.",
        before: "Good ",
        after: "!",
        answer: "afternoon",
        why: "Good afternoon — с полудня до вечера.",
      },
      {
        id: "q-proshchanie",
        kind: "short",
        outcome: "здоровается и прощается так, как принято в разное время дня",
        prompt: "Напишите по-английски короткое прощание из трёх букв.",
        answer: "bye",
        accept: ["bye", "Bye", "bye!"],
        why: "Bye — обычное прощание между знакомыми.",
      },
      {
        id: "q-otmetit-privetstviya",
        kind: "hottext",
        outcome: "здоровается и прощается так, как принято в разное время дня",
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
        accept: ["am", "'m"],
        why: "После I ставится am. В английском глагол в таком предложении обязателен.",
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
        prompt: "Исправьте ошибку и запишите фразу верно: «i am alim».",
        answer: "I am Alim",
        accept: ["I am Alim.", "I'm Alim", "I'm Alim.", "I am Alim!"],
        why:
          "I всегда пишется заглавной буквой, имя — тоже с заглавной. Краткая форма I'm " +
          "здесь так же верна.",
      },
    ],
  },
};

export default module;
