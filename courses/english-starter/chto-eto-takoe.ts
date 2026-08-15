import type { Module } from "@/lib/content/types";

/**
 * Модуль 6 курса «Английский с нуля»: назвать предмет и спросить о нём.
 *
 * Программа: docs/programma-english-starter.md, модуль 6 — «назвать предмет и
 * спросить о нём»; грамматика: `this` / `that`, вопросительное слово `what`
 * (сверх A1).
 *
 * ЧТО ЗДЕСЬ СВЕРХ СТУПЕНИ — А ЭТО БОЛЬШЕ, ЧЕМ ОБЕЩАЕТ ПРОГРАММА:
 *
 * Программа помечает «сверх A1» только `what`. На деле опор у модуля шесть, и
 * пять из них выше ступени. Проверено построчно по English Grammar Profile:
 *
 *   1. `this` + существительное в единственном числе — A1. Единственное, что
 *      здесь своей ступени.
 *   2. `that` + существительное — A2 («FORM: 'THAT'», «USE: 'THAT', POINTING»).
 *      Оговорка: Oxford 3000 ставит `that` на A1, источники расходятся.
 *   3. `this` и `that` как самостоятельные слова, без существительного
 *      («What is this?») — A2, PRONOUNS demonstratives.
 *   4. Вопрос вида «What is this?» — A2, QUESTIONS wh- «FORM: MAIN VERB 'BE'».
 *   5. Вопрос вида «Is this a key?» — A2, QUESTIONS yes/no, тот же guideword.
 *   6. `money` без артикля — A2 по NOUNS uncountable, но проходит по A1
 *      «FORM/USE: NO ARTICLE». Даётся как одно исключение, а не как разряд слов.
 *
 * Взято по решению 1 программы, тем же основанием, что вопросительные слова:
 * без «что это такое» модуль о предметах не существует, а само умение —
 * первое, что нужно человеку в чужой стране. Пометки расставлены в `sources`
 * поимённо, чтобы проверяющий видел, где ступень своя, а где взятая вперёд.
 *
 * ЧЕГО ЗДЕСЬ НЕТ:
 *
 * — множественного числа (модуль 8): все предметы по одному;
 * — притяжательных (модуль 7): «моя сумка» сказать пока нельзя;
 * — определённого артикля `the`: он вводится позже, в модуле 10, урок «A и the»;
 * — прилагательных (модуль 11): предмет называется, но не описывается.
 *
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "chto-eto-takoe",
  title: "Что это такое",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "СВОЕЙ СТУПЕНИ: A1, DETERMINERS demonstratives «FORM: 'THIS' WITH SINGULAR NOUNS»: " +
        "«Can use 'this' with singular nouns», пример источника — «I like this place». " +
        "A1, DETERMINERS articles «FORM: WITH NOUNS» — артикль a перед названием предмета. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'». " +
        "A1, NEGATION «FORM: MAIN VERB 'BE'» — отрицание из модуля 5. " +
        "СВЕРХ СТУПЕНИ, ПЯТЬ ПУНКТОВ: " +
        "A2, DETERMINERS demonstratives «FORM: 'THAT'»: «Can use 'that' with singular nouns» " +
        "и «USE: 'THAT', POINTING». " +
        "A2, PRONOUNS demonstratives «FORM: 'THIS'» и «USE: 'THAT', ALREADY MENTIONED» — " +
        "употребление this и that без существительного. " +
        "A2, QUESTIONS wh- «FORM: MAIN VERB 'BE'»: «Can use 'wh-'words + main verb 'be' + " +
        "subject to form 'wh-' questions». " +
        "A2, QUESTIONS yes/no «FORM: MAIN VERB 'BE'»: «Can use main verb 'be' + subject to " +
        "form 'yes/no' questions» — на этом стоит урок 7 (Is this a key?). " +
        "A2, NOUNS uncountable «FORM: UNCOUNTABLE NOUNS» — слово money без артикля. Смягчает " +
        "дело A1, DETERMINERS articles «FORM/USE: NO ARTICLE»: «Can use no article before a " +
        "limited range of singular, plural and uncountable nouns when referring to things in " +
        "general». Выбран второй пункт: money даётся не как разряд слов, а как одно " +
        "исключение, которое запоминают. " +
        "Все взяты по решению 1 программы. Без них модуль о предметах не строится: спросить " +
        "«что это» и проверить догадку нечем. " +
        "РАСХОЖДЕНИЕ ИСТОЧНИКОВ, ВАЖНОЕ ДЛЯ ОЦЕНКИ: Oxford 3000 ставит `that` на A1, English " +
        "Grammar Profile — на A2. Так что «сверх ступени» здесь мягче, чем выглядит",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, Pre-A1 — дословно то, ради чего написан модуль: " +
        "«Can ask very simple questions for information, such as “What is this?” and " +
        "understand one- or two-word/sign answers». Вопрос назван в описании поимённо. " +
        "Оттуда же следует, что ответ из одного-двух слов на этой ступени — норма, а не " +
        "ошибка: в уроке 6 это учтено. " +
        "Там же, A1: «Can ask and answer questions about themselves and other people, " +
        "where they live, people they know, things they have» — про вещи во владении; " +
        "владельца модуль пока назвать не может (притяжательные в модуле 7), поэтому " +
        "опорным взят дескриптор Pre-A1, а не этот",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, перечень форм глагола для ступени Pre A1 Starters: «Verbs (Positive, " +
        "negative, question, imperative and short-answer forms, including contractions)». " +
        "Это единственный источник в materials/, где краткий ответ назван прямо: в English " +
        "Grammar Profile строки о кратких ответах нет ни на одной ступени (поиск по " +
        "SHORT ANSWER — ноль совпадений). Там же, с. 29, пример источника «Is that yours?» — " +
        "вопрос с that на ступени Starters",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 51, «Inventory of functions, notions and communicative tasks», дословно: " +
        "«identifying and describing simple objects (shape, size, weight, colour, purpose " +
        "or use, etc.)» — это и есть тема модуля. Оттуда же «asking and answering questions " +
        "about personal possessions» и «asking for and giving the spelling and meaning of " +
        "words». " +
        "ОГОВОРКА: описания признаков (shape, size, colour) модуль не даёт — прилагательные " +
        "программа отдаёт модулю 11. Здесь предмет только называется. " +
        "Формат заданий — по образцу разделов Reading and Writing того же руководства",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: this, that, what, book, pen, bag, key, phone, box, " +
        "table, chair, door, window, room, picture, car, bus, shop, ticket, money, map. " +
        "Слово taxi встречается один раз в примере таблицы и в словарь урока не вынесено. " +
        "ПРОВЕРЕНО ПОСТРОЧНО по выгрузке словника; слов выше A1 в модуле нет. " +
        "Это первый модуль, где лексика набирается по существу: двадцать одно слово против " +
        "трёх в модуле 5. Расхождение с числом 55 в программе остаётся и вынесено владельцу " +
        "(docs/zadachi-vladeltsa.md, п. 1.8)",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены " +
        "(CLAUDE.md, раздел о британской норме): `r` вместо `ɹ`, краткий гласный через `e`, " +
        "безударный конечный через `ə`",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "спрашивать «что это» и отвечать: What is this? — It's a book",
    "различать this и that: близко и далеко",
    "называть предметы, которые носишь с собой",
    "называть то, что стоит в комнате",
    "называть то, что вокруг на улице",
    "говорить, что предмет не тот, и называть верный: It isn't a pen, it's a key",
    "спрашивать о предмете с be и коротко отвечать",
    "вести разговор о предметах",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "chto-eto",
      title: "Что это: What is this?",
      estimatedMinutes: 14,
      outcome: "спрашивать «что это» и отвечать: What is this? — It's a book",

      blocks: [
        {
          id: "zachem-what",
          kind: "explain",
          text: [
            "Ты видишь предмет и не знаешь, как он называется. Спросить об этом — самый " +
              "быстрый способ выучить новое слово: ответ ты услышишь тут же и запомнишь " +
              "вместе с предметом.",
            "По-английски он короткий: What is this? Слово what значит «что», а this — " +
              "«это». Оба стоят в начале, глагол между ними.",
          ],
        },
        {
          id: "tablica-what",
          kind: "table",
          caption: "Вопрос и ответ",
          head: ["Вопрос", "Перевод", "Ответ"],
          rows: [
            ["What is this?", "Что это?", "It's a book."],
            ["What's this? (короче)", "Что это?", "It's a pen."],
            ["What is that?", "Что это вон там?", "It's a key."],
          ],
        },
        {
          id: "otvechayut-cherez-it",
          kind: "note",
          tone: "info",
          text:
            "Спрашивают через this, а отвечают через it: «What is this?» — «It's a book». " +
            "Местоимение it знакомо по модулю о местоимениях, и здесь оно на своём месте: " +
            "речь о предмете.",
        },
        {
          id: "ne-zabyt-a",
          kind: "note",
          tone: "mistake",
          text:
            "«It's book» — потерялся артикль. Перед названием предмета он стоит так же, " +
            "как перед названием занятия в модуле о рассказе о себе: It's a book.",
        },
        {
          id: "korotkaya-forma-whats",
          kind: "note",
          tone: "info",
          text:
            "What's — короткая запись от what is, и апостроф в ней на том же месте, что " +
            "всегда: там, где выпала буква i. Такой же оборот уже встречался в вопросе " +
            "What's your name?",
        },
        {
          id: "zapis-what",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопрос и ответ",
          transcript: "What is this? — It's a book. What's this? — It's a pen.",
        },
        {
          id: "slovar-what",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "what", translation: "что", example: "What is this?", hint: "/wɒt/" },
            { term: "this", translation: "это, этот", example: "What is this?", hint: "/ðɪs/" },
            { term: "book", translation: "книга", example: "It's a book.", hint: "/bʊk/" },
            { term: "pen", translation: "ручка", example: "It's a pen.", hint: "/pen/" },
            { term: "key", translation: "ключ", example: "It's a key.", hint: "/kiː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kak-sprosit",
          kind: "choice",
          prompt: "Как спросить «что это»?",
          options: [
            { text: "What this is?" },
            { text: "What is this?", correct: true },
            { text: "This is what?" },
          ],
          hint: "Сначала what, потом глагол, потом this.",
          why:
            "What is this? Порядок жёсткий: вопросительное слово, форма be, потом то, о чём " +
            "спрашивают.",
        },
        {
          id: "z2-dopisat-otvet",
          kind: "gap",
          prompt: "«What is this?» Перед тобой книга. Допиши ответ.",
          before: "It's a ",
          after: ".",
          answer: "book",
          hint: "Четыре буквы.",
          why: "It's a book. Отвечают через it, и артикль перед названием обязателен.",
        },
        {
          id: "z3-najti-propusk",
          kind: "hottext",
          prompt: "Отметь ответы, в которых потерялось короткое слово.",
          parts: [
            { text: "It's a pen.", selectable: true },
            { text: " · " },
            { text: "It's key.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's book.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's a book.", selectable: true },
          ],
          hint: "Между It's и названием предмета должно стоять одно слово.",
          why:
            "«It's key» и «It's book» — без a. Правильно: It's a key и It's a book.",
        },
        {
          id: "z4-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Что это?»",
          items: ["this", "What", "is"],
          answer: [1, 2, 0],
          hint: "Вопросительное слово идёт первым.",
          why: "What is this? Между what и this стоит форма be.",
        },
        {
          id: "z5-zapisat-vopros",
          kind: "short",
          prompt: "Запиши вопрос «что это» в полной записи, а не в короткой.",
          answer: "What is this?",
          exact: true,
          accept: ["What is this"],
          hint: "Три слова, знак вопроса в конце.",
          why: "What is this? Короткая запись — What's this?; здесь нужна полная.",
        },
        {
          id: "z6-otvetit-o-klyuche",
          kind: "short",
          prompt: "«What's this?» Перед тобой ключ. Ответь целиком.",
          answer: "It's a key.",
          exact: true,
          accept: ["It's a key", "It is a key.", "It is a key"],
          hint: "Ответ начинается с it, а не с this.",
          why: "It's a key — или полностью It is a key. Оба ответа верны.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "this-i-that",
      title: "This и that: близко и далеко",
      estimatedMinutes: 13,
      outcome: "различать this и that: близко и далеко",

      blocks: [
        {
          id: "zachem-that",
          kind: "explain",
          text: [
            "This говорят о том, что рядом: в руке, на столе перед тобой. О том, что " +
              "подальше — на другом конце комнаты, за окном, — говорят that.",
            "По-русски различие тоже есть: «этот» и «тот». Но по-русски это слово можно и " +
              "опустить — «что это?». По-английски нельзя: в вопросе What is …? на его " +
              "месте всегда стоит this или that.",
          ],
        },
        {
          id: "tablica-this-that",
          kind: "table",
          caption: "Рядом и подальше",
          head: ["Слово", "Когда", "Пример", "Перевод"],
          rows: [
            ["this", "предмет рядом", "What is this?", "Что это?"],
            ["that", "предмет подальше", "What is that?", "Что это вон там?"],
            ["this book", "эта книга, вот эта", "This book is a map.", "Эта книга — атлас."],
            ["that car", "та машина, вон та", "That car is a taxi.", "Та машина — такси."],
          ],
        },
        {
          id: "so-slovom-i-bez",
          kind: "note",
          tone: "info",
          text:
            "This и that работают двумя способами: сами по себе — «What is this?» — и перед " +
            "названием предмета: this book, that car. Значение одно и то же, меняется только " +
            "то, стоит ли следом само название.",
        },
        {
          id: "a-ischezaet",
          kind: "note",
          tone: "mistake",
          text:
            "«This a book» — лишнее слово. Между this или that и названием предмета a не " +
            "ставят: они сами показывают, о каком предмете речь. Правильно — this book, " +
            "that car. Но когда this стоит само по себе, как подлежащее, артикль a на своём " +
            "месте: This is a book.",
        },
        {
          id: "zapis-this-that",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай оба слова",
          transcript: "What is this? — It's a pen. What is that? — It's a car.",
        },
        {
          id: "slovar-this-that",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "that", translation: "то, тот (подальше)", example: "What is that?", hint: "/ðæt/" },
            { term: "car", translation: "машина", example: "It's a car.", hint: "/kɑː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-predmet-v-ruke",
          kind: "choice",
          prompt: "Предмет у тебя в руке. Каким словом о нём спросить?",
          options: [{ text: "this", correct: true }, { text: "that" }, { text: "it" }],
          hint: "В руке — значит совсем рядом.",
          why: "This — о том, что рядом. That говорят о том, что подальше.",
        },
        {
          id: "z2-predmet-za-oknom",
          kind: "gap",
          prompt: "Машина стоит за окном. Допиши слово в вопросе.",
          before: "What is ",
          after: "?",
          answer: "that",
          hint: "За окном — значит не рядом.",
          why: "What is that? Про то, что подальше, спрашивают через that.",
        },
        {
          id: "z3-lishnee-slovo",
          kind: "hottext",
          prompt: "Отметь строки, где стоит лишнее слово.",
          parts: [
            { text: "this book", selectable: true },
            { text: " · " },
            { text: "that a car", selectable: true, correct: true },
            { text: " · " },
            { text: "this a pen", selectable: true, correct: true },
            { text: " · " },
            { text: "that key", selectable: true },
          ],
          hint: "Между указательным словом и названием предмета короткого слова не ставят.",
          why:
            "«That a car» и «this a pen» — лишнее a: между this или that и названием " +
            "предмета оно не нужно. Правильно — this pen, that car.",
        },
        {
          id: "z4-sopostavit",
          kind: "match",
          prompt: "Сопоставь слово и то, что оно показывает.",
          left: ["this", "that", "it"],
          right: ["предмет, о котором уже сказали", "предмет рядом", "предмет подальше"],
          answer: [1, 2, 0],
          hint: "Одно из трёх не про расстояние вовсе.",
          why:
            "This — рядом, that — подальше, it — предмет, о котором речь уже шла: им " +
            "отвечают на вопрос.",
        },
        {
          id: "z5-sobrat-s-that",
          kind: "order",
          prompt: "Собери вопрос: «Что это вон там?»",
          items: ["that", "is", "What"],
          answer: [2, 1, 0],
          hint: "Порядок тот же, что и с this.",
          why: "What is that? Меняется только последнее слово, порядок остаётся.",
        },
        {
          id: "z6-zapisat-o-dalyokom",
          kind: "short",
          prompt: "Спроси о предмете, который стоит далеко. Запиши вопрос целиком.",
          answer: "What is that?",
          exact: true,
          accept: ["What is that", "What's that?", "What's that"],
          hint: "Три слова, и последнее — не this.",
          why: "What is that? Короткая запись — What's that?; засчитываются обе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "predmety-s-soboy",
      title: "Что носишь с собой",
      estimatedMinutes: 13,
      outcome: "называть предметы, которые носишь с собой",

      blocks: [
        {
          id: "zachem-predmety",
          kind: "explain",
          text: [
            "Первая шестёрка — то, что носят при себе: сумка, ключ, телефон, ручка, книга, " +
              "коробка. Эти вещи называют, когда что-то ищут или что-то потеряли.",
            "Предложения с ними устроены одинаково: It's a bag. This is a phone. Ничего " +
              "нового в предложении нет, новые только слова.",
          ],
        },
        {
          id: "tablica-predmetov",
          kind: "table",
          caption: "Шесть предметов",
          head: ["Слово", "Перевод", "Произношение"],
          rows: [
            ["bag", "сумка", "/bæg/"],
            ["key", "ключ", "/kiː/"],
            ["phone", "телефон", "/fəʊn/"],
            ["pen", "ручка", "/pen/"],
            ["book", "книга", "/bʊk/"],
            ["box", "коробка", "/bɒks/"],
          ],
        },
        {
          id: "phone-i-telefon",
          kind: "note",
          tone: "info",
          text:
            "Сочетание ph в начале слова phone звучит как /f/. В модуле про алфавит " +
            "разбирались пять других сочетаний, а это — шестое: приём тот же, буквы стоят " +
            "рядом и читаются вместе.",
        },
        {
          id: "box-i-oks",
          kind: "note",
          tone: "mistake",
          text:
            "В слове box последняя буква x называется /eks/, а звучит как /ks/: /bɒks/. " +
            "Русская Х тут ни при чём, хотя буква выглядит так же — об этом был отдельный " +
            "урок в первом модуле.",
        },
        {
          id: "zapis-predmetov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай шесть слов",
          transcript: "A bag. A key. A phone. A pen. A book. A box.",
        },
        {
          id: "slovar-predmetov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bag", translation: "сумка", example: "It's a bag.", hint: "/bæg/" },
            { term: "phone", translation: "телефон", example: "It's a phone.", hint: "/fəʊn/" },
            { term: "box", translation: "коробка", example: "It's a box.", hint: "/bɒks/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sumka",
          kind: "choice",
          prompt: "Как по-английски «сумка»?",
          options: [{ text: "box" }, { text: "bag", correct: true }, { text: "book" }],
          hint: "Три буквы, и все три разные.",
          why: "Bag — сумка. Box — коробка, book — книга.",
        },
        {
          id: "z2-dopisat-telefon",
          kind: "gap",
          prompt: "«What is this?» Перед тобой телефон. Допиши ответ.",
          before: "It's a ",
          after: ".",
          answer: "phone",
          hint: "Начинается с сочетания, которое звучит как /f/.",
          why: "It's a phone. Сочетание ph в начале звучит как /f/.",
        },
        {
          id: "z3-sopostavit-predmety",
          kind: "match",
          prompt: "Сопоставь слово и перевод.",
          left: ["key", "box", "pen"],
          right: ["коробка", "ручка", "ключ"],
          answer: [2, 0, 1],
          hint: "Одно из слов уже встречалось в первом уроке модуля.",
          why: "Key — ключ, box — коробка, pen — ручка.",
        },
        {
          id: "z4-otmetit-s-soboy",
          kind: "hottext",
          prompt: "Отметь слова, которые называют то, что помещается в сумку.",
          parts: [
            { text: "car", selectable: true },
            { text: " · " },
            { text: "key", selectable: true, correct: true },
            { text: " · " },
            { text: "pen", selectable: true, correct: true },
            { text: " · " },
            { text: "shop", selectable: true },
          ],
          hint: "Два слова называют то, что не носят с собой.",
          why: "Key и pen помещаются в сумку. Car — машина, shop — магазин.",
        },
        {
          id: "z5-prodiktovat-bag",
          kind: "short",
          prompt: "Продиктуй слово bag: запиши его по буквам через дефис.",
          answer: "B-A-G",
          accept: ["b-a-g", "B A G", "b a g"],
          hint: "Три буквы. Умение из первого модуля.",
          why: "B-A-G. Первая буква называется /biː/, а не «бэ».",
        },
        {
          id: "z6-otvetit-o-korobke",
          kind: "short",
          prompt: "«What's that?» Вдалеке стоит коробка. Ответь целиком.",
          answer: "It's a box.",
          exact: true,
          accept: ["It's a box", "It is a box.", "It is a box"],
          hint: "Отвечают через it, даже если спросили через that.",
          why: "It's a box. В ответе всегда it, каким бы словом ни спросили.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "v-komnate",
      title: "Что стоит в комнате",
      estimatedMinutes: 13,
      outcome: "называть то, что стоит в комнате",

      blocks: [
        {
          id: "zachem-komnata",
          kind: "explain",
          text: [
            "Вторая шестёрка — то, что окружает дома и на работе: стол, стул, дверь, " +
              "окно, комната, картина. Их называют, когда описывают жильё или ищут дорогу " +
              "внутри здания.",
            "Предложения те же: It's a table. That is a door. Слова новые, устройство " +
              "прежнее.",
          ],
        },
        {
          id: "tablica-komnaty",
          kind: "table",
          caption: "Шесть слов о комнате",
          head: ["Слово", "Перевод", "Произношение"],
          rows: [
            ["room", "комната", "/ruːm/"],
            ["table", "стол", "/ˈteɪbl/"],
            ["chair", "стул", "/tʃeə/"],
            ["door", "дверь", "/dɔː/"],
            ["window", "окно", "/ˈwɪndəʊ/"],
            ["picture", "картина", "/ˈpɪktʃə/"],
          ],
        },
        {
          id: "chair-i-ch",
          kind: "note",
          tone: "info",
          text:
            "В словах chair и picture есть один и тот же звук — /tʃ/. На письме его дают " +
            "разные буквы: в chair это ch, в picture — часть -ture на конце. Правила из " +
            "этого не выводи: сочетание tu под ударением читается иначе.",
        },
        {
          id: "table-bez-glasnogo",
          kind: "note",
          tone: "mistake",
          text:
            "Table звучит /ˈteɪbl/ — в конце нет гласного, хотя буква e написана. Она здесь " +
            "не читается: слово оканчивается на согласный /l/, как и apple из модуля про рассказ о себе.",
        },
        {
          id: "zapis-komnaty",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай шесть слов",
          transcript: "A room. A table. A chair. A door. A window. A picture.",
        },
        {
          id: "slovar-komnaty",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "room", translation: "комната", example: "It's a room.", hint: "/ruːm/" },
            { term: "table", translation: "стол", example: "It's a table.", hint: "/ˈteɪbl/" },
            { term: "chair", translation: "стул", example: "It's a chair.", hint: "/tʃeə/" },
            { term: "door", translation: "дверь", example: "It's a door.", hint: "/dɔː/" },
            { term: "window", translation: "окно", example: "It's a window.", hint: "/ˈwɪndəʊ/" },
            { term: "picture", translation: "картина", example: "It's a picture.", hint: "/ˈpɪktʃə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-stol-ili-stul",
          kind: "choice",
          prompt: "Как по-английски «стул»?",
          options: [{ text: "table" }, { text: "chair", correct: true }, { text: "room" }],
          hint: "Слова «стол» и «стул» по-английски совсем не похожи.",
          why: "Chair — стул. Table — стол, room — комната.",
        },
        {
          id: "z2-dopisat-okno",
          kind: "gap",
          prompt: "«What is that?» Вдалеке окно. Допиши ответ.",
          before: "It's a ",
          after: ".",
          answer: "window",
          hint: "Шесть букв, начинается с той, что называется /ˈdʌbljuː/.",
          why: "It's a window. Первая буква W, и её название в британской норме /ˈdʌbljuː/.",
        },
        {
          id: "z3-sopostavit-komnatu",
          kind: "match",
          prompt: "Сопоставь слово и перевод.",
          left: ["door", "picture", "room"],
          right: ["картина", "комната", "дверь"],
          answer: [2, 0, 1],
          hint: "Одно из слов уже встречалось в модуле о рассказе о себе.",
          why: "Door — дверь, picture — картина, room — комната.",
        },
        {
          id: "z4-otmetit-mebel",
          kind: "hottext",
          prompt: "Отметь слова, которые называют мебель.",
          parts: [
            { text: "door", selectable: true },
            { text: " · " },
            { text: "table", selectable: true, correct: true },
            { text: " · " },
            { text: "chair", selectable: true, correct: true },
            { text: " · " },
            { text: "window", selectable: true },
          ],
          hint: "Дверь и окно — части комнаты, а не мебель.",
          why: "Мебель — table и chair. Door и window — части самой комнаты.",
        },
        {
          id: "z5-eto-stol",
          kind: "short",
          prompt: "Перед тобой стол. Ответь на вопрос «What's this?» целиком.",
          answer: "It's a table.",
          exact: true,
          accept: ["It's a table", "It is a table.", "It is a table"],
          hint: "Отвечают через it.",
          why: "It's a table. Артикль a перед названием предмета обязателен.",
        },
        {
          id: "z6-sobrat-o-dveri",
          kind: "order",
          prompt: "Собери предложение: «То окно — не дверь».",
          items: ["door", "window", "That", "a", "is not"],
          answer: [2, 1, 4, 3, 0],
          hint: "Между that и window артикль не нужен, а перед последним словом — нужен.",
          why:
            "That window is not a door. После that артикля нет, а перед door он " +
            "обязателен.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "na-ulice",
      title: "Что вокруг на улице",
      estimatedMinutes: 13,
      outcome: "называть то, что вокруг на улице",

      blocks: [
        {
          id: "zachem-ulica",
          kind: "explain",
          text: [
            "Третья шестёрка — то, что встречается за дверью: машина, автобус, магазин, " +
              "билет, деньги, карта местности.",
            "Слово street из модуля о рассказе о себе тоже сюда относится — оно уже " +
              "знакомо.",
          ],
        },
        {
          id: "tablica-ulicy",
          kind: "table",
          caption: "Шесть слов о дороге",
          head: ["Слово", "Перевод", "Произношение"],
          rows: [
            ["car", "машина", "/kɑː/"],
            ["bus", "автобус", "/bʌs/"],
            ["shop", "магазин", "/ʃɒp/"],
            ["ticket", "билет", "/ˈtɪkɪt/"],
            ["money", "деньги", "/ˈmʌni/"],
            ["map", "карта (местности)", "/mæp/"],
          ],
        },
        {
          id: "money-bez-a",
          kind: "note",
          tone: "mistake",
          text:
            "Слово money — единственное в этой шестёрке, перед которым a не ставят: денег " +
            "не считают по одной штуке. Говорят просто money, без короткого слова впереди.",
        },
        {
          id: "shop-i-sh",
          kind: "note",
          tone: "info",
          text:
            "Сочетание sh в начале shop звучит как /ʃ/ — русское «ш». Ещё одно сочетание, " +
            "где две буквы читаются вместе.",
        },
        {
          id: "zapis-ulicy",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай шесть слов",
          transcript: "A car. A bus. A shop. A ticket. Money. A map.",
        },
        {
          id: "slovar-ulicy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bus", translation: "автобус", example: "It's a bus.", hint: "/bʌs/" },
            { term: "shop", translation: "магазин", example: "It's a shop.", hint: "/ʃɒp/" },
            { term: "ticket", translation: "билет", example: "It's a ticket.", hint: "/ˈtɪkɪt/" },
            { term: "money", translation: "деньги", example: "It's money.", hint: "/ˈmʌni/" },
            { term: "map", translation: "карта (местности)", example: "It's a map.", hint: "/mæp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-bilet",
          kind: "choice",
          prompt: "Как по-английски «билет»?",
          options: [{ text: "money" }, { text: "map" }, { text: "ticket", correct: true }],
          hint: "Шесть букв, две из них одинаковые.",
          why: "Ticket — билет. Money — деньги, map — карта.",
        },
        {
          id: "z2-dengi-bez-a",
          kind: "choice",
          prompt: "В какой строке про деньги сказано верно?",
          options: [
            { text: "It's money.", correct: true },
            { text: "It's a money." },
            { text: "It's an money." },
          ],
          hint: "Перед ним короткого слова не ставят.",
          why: "It's money. Money — единственное слово урока, которое обходится без a.",
        },
        {
          id: "z3-dopisat-avtobus",
          kind: "gap",
          prompt: "«What is that?» Вдалеке автобус. Допиши ответ.",
          before: "It's a ",
          after: ".",
          answer: "bus",
          hint: "Три буквы.",
          why: "It's a bus. Отвечают через it, артикль перед названием обязателен.",
        },
        {
          id: "z4-otmetit-v-doroge",
          kind: "hottext",
          prompt: "Отметь слова, без которых не сесть в автобус.",
          parts: [
            { text: "picture", selectable: true },
            { text: " · " },
            { text: "ticket", selectable: true, correct: true },
            { text: " · " },
            { text: "money", selectable: true, correct: true },
            { text: " · " },
            { text: "chair", selectable: true },
          ],
          hint: "Два слова о поездке, два — о комнате.",
          why: "Ticket и money нужны в дороге. Picture и chair — из комнаты.",
        },
        {
          id: "z5-sopostavit-dorogu",
          kind: "match",
          prompt: "Сопоставь слово и перевод.",
          left: ["shop", "map", "car"],
          right: ["машина", "магазин", "карта"],
          answer: [1, 2, 0],
          hint: "Одно из слов встречалось в прошлом уроке модуля.",
          why: "Shop — магазин, map — карта, car — машина.",
        },
        {
          id: "z6-eto-karta",
          kind: "short",
          prompt: "Перед тобой карта города. Ответь на «What's this?» целиком.",
          answer: "It's a map.",
          exact: true,
          accept: ["It's a map", "It is a map.", "It is a map"],
          hint: "Три слова и точка.",
          why: "It's a map — или полностью It is a map.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "eto-ne-to-a-vot-eto",
      title: "Это не то, а вот это",
      estimatedMinutes: 13,
      outcome: "говорить, что предмет не тот, и называть верный: It isn't a pen, it's a key",

      blocks: [
        {
          id: "zachem-otricat-predmet",
          kind: "explain",
          text: [
            "Собеседник назвал предмет неверно. Поправка строится в два шага — тем " +
              "же способом, что в прошлом модуле: сначала что не так, потом как есть.",
            "It isn't a pen. It's a key. Два коротких предложения, и предмет назван верно.",
          ],
        },
        {
          id: "tablica-popravok-o-predmete",
          kind: "table",
          caption: "Два шага о предмете",
          head: ["Догадка", "Не так", "Как есть"],
          rows: [
            ["Is this a pen?", "It isn't a pen.", "It's a key."],
            ["Is that a bus?", "It isn't a bus.", "It's a car."],
            ["Is this a book?", "It isn't a book.", "It's a map."],
          ],
        },
        {
          id: "it-v-oboih",
          kind: "note",
          tone: "info",
          text:
            "Оба предложения начинаются одинаково — с it. Повторять его обязательно: " +
            "сказать «It isn't a pen, a key» нельзя — без второго it предложение не " +
            "складывается.",
        },
        {
          id: "a-v-oboih",
          kind: "note",
          tone: "mistake",
          text:
            "Артикль нужен и в отрицании, и в утверждении: It isn't a pen. It's a key. " +
            "Пропуск в любом из двух предложений — ошибка.",
        },
        {
          id: "zapis-popravki-o-predmete",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай поправку",
          transcript: "Is this a pen? — No, it isn't. It isn't a pen. It's a key.",
        },

        // ---- задания ----
        {
          id: "z1-vtoroy-shag",
          kind: "choice",
          prompt: "«It isn't a book.» Что сказать дальше, если это карта?",
          options: [
            { text: "A map." },
            { text: "It's a map.", correct: true },
            { text: "Is a map." },
          ],
          hint: "Второе предложение строится целиком, а не обрывком.",
          why:
            "It's a map. Ответить одним «A map» тоже можно, и собеседник поймёт. Но целое " +
            "предложение годится в любом разговоре, поэтому тренируем его: оно начинается " +
            "с it, как и первое.",
        },
        {
          id: "z2-dopisat-otricanie-o-predmete",
          kind: "gap",
          prompt: "Допиши отрицание: «Это не автобус».",
          before: "It isn't a ",
          after: ".",
          answer: "bus",
          hint: "Три буквы.",
          why: "It isn't a bus. Артикль стоит и в отрицании тоже.",
        },
        {
          id: "z3-otmetit-poteri-a",
          kind: "hottext",
          prompt: "Отметь строки, где потерялось короткое слово.",
          parts: [
            { text: "It isn't pen.", selectable: true, correct: true },
            { text: " · " },
            { text: "It isn't a map.", selectable: true },
            { text: " · " },
            { text: "It's a key.", selectable: true },
            { text: " · " },
            { text: "It's book.", selectable: true, correct: true },
          ],
          hint: "Артикль нужен и в отрицании, и в утверждении.",
          why: "«It isn't pen» и «It's book» — без a. Правильно: It isn't a pen, It's a book.",
        },
        {
          id: "z4-popravit-o-predmete",
          kind: "short",
          prompt: "Собеседник сказал: «It's a pen.» На самом деле это ключ. Возрази и скажи, как есть, — два предложения.",
          answer: "It isn't a pen. It's a key.",
          exact: true,
          accept: [
            "It isn't a pen. It's a key",
            "It is not a pen. It is a key.",
            "It is not a pen. It is a key",
          ],
          hint: "Оба предложения начинаются с it.",
          why: "It isn't a pen. It's a key. Два шага, и в обоих артикль a на месте.",
        },
        {
          id: "z5-sobrat-popravku",
          kind: "order",
          prompt: "Расставь поправку по порядку.",
          items: ["It's a car.", "Is that a bus?", "It isn't a bus."],
          answer: [1, 2, 0],
          hint: "Сначала догадка собеседника.",
          why: "Is that a bus? — It isn't a bus. It's a car.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-o-predmete",
      title: "Спросить о предмете",
      estimatedMinutes: 13,
      outcome: "спрашивать о предмете с be и коротко отвечать",

      blocks: [
        {
          id: "zachem-sprosit-o-predmete",
          kind: "explain",
          text: [
            "Кроме «что это» есть второй способ спросить: назвать предмет самому и " +
              "проверить догадку. Is this a key? Строится он так же, как вопросы из модуля " +
              "про вопрос и краткий ответ, — перестановкой первых двух слов.",
            "Отвечают на него коротко: Yes, it is. No, it isn't. Слово it здесь то же, что " +
              "и в ответе на «что это».",
          ],
        },
        {
          id: "tablica-voprosov-o-predmete",
          kind: "table",
          caption: "Вопрос и два ответа",
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Is this a key?", "Yes, it is.", "No, it isn't."],
            ["Is that a bus?", "Yes, it is.", "No, it isn't."],
            ["Is this a map?", "Yes, it is.", "No, it isn't."],
          ],
        },
        {
          id: "otvet-vsegda-it",
          kind: "note",
          tone: "info",
          text:
            "Каким бы словом ни спросили — this или that, — в кратком ответе всегда it. " +
            "«Yes, this is» сказать нельзя: в ответе о предмете работает только it.",
        },
        {
          id: "dva-voprosa-ryadom",
          kind: "note",
          tone: "mistake",
          text:
            "Не путай два вопроса. «What is this?» спрашивает название, и в ответ его " +
            "называют. «Is this a key?» проверяет догадку, и в ответ говорят «да» или " +
            "«нет». Первое слово вопроса подсказывает, какой ответ нужен.",
        },
        {
          id: "zapis-voprosov-o-predmete",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай оба вопроса подряд",
          transcript: "What is this? — It's a key. Is this a key? — Yes, it is.",
        },

        // ---- задания ----
        {
          id: "z1-kakoy-otvet-nuzhen",
          kind: "choice",
          prompt: "«Is this a map?» Что ответить, если это правда?",
          options: [
            { text: "It's a map." },
            { text: "Yes, it is.", correct: true },
            { text: "Yes, this is." },
          ],
          hint: "Вопрос проверяет догадку, а не спрашивает название.",
          why:
            "Yes, it is. Первый ответ годится для вопроса «What is this?», а «Yes, this is» " +
            "неверно: в кратком ответе всегда it.",
        },
        {
          id: "z2-sdelat-vopros-o-predmete",
          kind: "short",
          prompt: "Сделай вопрос из «This is a key.»",
          answer: "Is this a key?",
          exact: true,
          accept: ["Is this a key"],
          hint: "Первые два слова меняются местами.",
          why: "Is this a key? Перестановка та же, что в модуле про вопрос.",
        },
        {
          id: "z3-otvetit-net",
          kind: "gap",
          prompt: "«Is that a bus?» На самом деле это машина. Допиши краткий ответ.",
          before: "No, it ",
          after: ".",
          answer: "isn't",
          hint: "Форма is с апострофом и not.",
          why: "No, it isn't. Полная запись — No, it is not; обе верны.",
        },
        {
          id: "z4-otmetit-voprosy-o-nazvanii",
          kind: "hottext",
          prompt: "Отметь вопросы, которые спрашивают название предмета.",
          parts: [
            { text: "What is this?", selectable: true, correct: true },
            { text: " · " },
            { text: "Is this a pen?", selectable: true },
            { text: " · " },
            { text: "What's that?", selectable: true, correct: true },
            { text: " · " },
            { text: "Is that a car?", selectable: true },
          ],
          hint: "Смотри на первое слово вопроса.",
          why:
            "Вопросы с what спрашивают название. Вопросы с формой be впереди проверяют " +
            "догадку, и ответ на них — «да» или «нет».",
        },
        {
          id: "z5-sopostavit-vopros-otvet",
          kind: "match",
          prompt: "Сопоставь вопрос и подходящий ответ.",
          left: ["What is this?", "Is this a key?", "Is that a bus?"],
          right: ["No, it isn't. It's a taxi.", "It's a phone.", "Yes, it is. It's a key."],
          answer: [1, 2, 0],
          hint: "Смотри не только на «да» и «нет», но и на то, какой предмет назван в ответе.",
          why:
            "На «что это» отвечают названием, на проверку догадки — «да» или «нет», а после " +
            "«нет» добавляют, как есть.",
        },
        {
          id: "z6-sprosit-o-dalyokom",
          kind: "short",
          prompt: "Вдалеке предмет, похожий на автобус. Проверь догадку: запиши вопрос целиком.",
          answer: "Is that a bus?",
          exact: true,
          accept: ["Is that a bus"],
          hint: "Вдалеке — значит that. Вопрос открывает форма be.",
          why: "Is that a bus? Форма is впереди, артикль a перед названием предмета.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-o-predmetah",
      title: "Разговор о предметах",
      estimatedMinutes: 15,
      outcome: "вести разговор о предметах",

      blocks: [
        {
          id: "zachem-razgovor-o-predmetah",
          kind: "explain",
          text: [
            "Ты в магазине, показываешь на предмет и не знаешь слова. Спрашиваешь, слышишь " +
              "ответ — и слово твоё.",
            "Такой разговор короткий и держится на двух вопросах: What is this? и " +
              "Is this a…?",
          ],
        },
        {
          id: "polnyy-razgovor-o-predmetah",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— What's this?\n— It's a ticket.\n— Is that a ticket too?\n— No, it isn't. It's a map.\n" +
            "— Sorry! And what is that?\n— It's money.",
          explain:
            "Слово too значит «тоже» — оно знакомо по модулю про приветствие. Заметь " +
            "последний ответ: перед money артикль не ставят.",
        },
        {
          id: "tablica-shagov-o-predmetah",
          kind: "table",
          caption: "Из чего складывается такой разговор",
          head: ["Шаг", "Пример"],
          rows: [
            ["спросить название", "What's this?"],
            ["назвать предмет", "It's a ticket."],
            ["проверить догадку", "Is that a ticket?"],
            ["ответить «нет»", "No, it isn't."],
            ["назвать верное", "It's a map."],
          ],
        },
        {
          id: "gde-teryayut-a",
          kind: "note",
          tone: "mistake",
          text:
            "В разговоре о предметах легко теряется артикль a: «It's ticket», «Is this " +
            "key?». Проверяй себя так: между It's и названием предмета всегда стоит одно " +
            "короткое слово. Из знакомых тебе слов исключение одно: money.",
        },
        {
          id: "zapis-razgovora-o-predmetah",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор целиком",
          transcript:
            "What's this? — It's a ticket. Is that a ticket too? — No, it isn't. It's a map. " +
            "— Sorry! And what is that? — It's money.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor-o-predmetah",
          kind: "order",
          prompt: "Расставь реплики разговора по порядку.",
          items: ["It's a ticket.", "What's this?", "No, it isn't. It's a map.", "Is that a ticket?"],
          answer: [1, 0, 3, 2],
          hint: "Сначала спрашивают название, догадку проверяют потом.",
          why:
            "Вопрос о названии, ответ, проверка догадки о втором предмете, ответ «нет» с " +
            "уточнением.",
        },
        {
          id: "z2-chto-otvetit-o-dengah",
          kind: "choice",
          prompt: "«What is that?» Там лежат деньги. Что ответить?",
          options: [
            { text: "It's a money." },
            { text: "It's money.", correct: true },
            { text: "That's money." },
          ],
          hint: "Перед этим словом a не ставят, а отвечают через it.",
          why:
            "It's money. Артикль a перед money не ставят, а отвечают на вопрос всегда " +
            "через it.",
        },
        {
          id: "z3-dopisat-vopros",
          kind: "gap",
          prompt: "Допиши вопросительное слово.",
          before: "",
          after: "'s this?",
          answer: "What",
          exact: true,
          hint: "С заглавной — слово открывает вопрос.",
          why: "What's this? Короткая запись от What is this?",
        },
        {
          id: "z4-otmetit-verno",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой.",
          parts: [
            { text: "It's a ticket.", selectable: true },
            { text: " · " },
            { text: "It's a money.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, this is.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, it isn't.", selectable: true },
          ],
          hint: "Одна ошибка — лишнее слово, другая — не то местоимение в ответе.",
          why:
            "«It's a money» — перед money артикль не ставят. «Yes, this is» — в кратком " +
            "ответе всегда it.",
        },
        {
          id: "z5-otvetit-i-popravit",
          kind: "short",
          prompt: "«Is this a book?» На самом деле это карта. Ответь «нет» коротко и назови верное — два предложения.",
          answer: "No, it isn't. It's a map.",
          exact: true,
          accept: [
            "No, it isn't. It's a map",
            "No, it is not. It is a map.",
            "No, it is not. It is a map",
          ],
          hint: "Сначала краткий ответ, потом отдельное предложение.",
          why: "No, it isn't. It's a map. Между двумя предложениями точка.",
        },
        {
          id: "z6-razgovor-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух свою часть разговора: спроси о предмете рядом, потом о предмете вдалеке.",
          phrase: "What's this? ... And what's that? ...",
          translation: "Что это? ... А что вон то? ...",
          hint: "Между вопросами оставляй паузу — там отвечает собеседник.",
          why:
            "Два вопроса, которыми пополняют запас слов в чужой стране. Повтори их вслух " +
            "несколько раз, пока не станут выговариваться свободно.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 18, спрашиваем восемь — по одному на каждый итог.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      {
        id: "q-sprosit-chto-eto",
        kind: "short",
        outcome: "спрашивать «что это» и отвечать: What is this? — It's a book",
        prompt: "Спроси о предмете, который лежит вдалеке. Запиши вопрос в полной записи.",
        answer: "What is that?",
        exact: true,
        accept: ["What is that"],
        why: "What is that? Вдалеке — значит that; в полной записи форма be не сливается с what.",
      },
      {
        id: "q-otvetit-o-knige",
        kind: "gap",
        outcome: "спрашивать «что это» и отвечать: What is this? — It's a book",
        prompt: "«What's that?» Вдалеке телефон. Допиши ответ.",
        before: "It's a ",
        after: ".",
        answer: "phone",
        why: "It's a phone. Отвечают через it, каким бы словом ни спросили.",
      },
      {
        id: "q-this-ili-that",
        kind: "choice",
        outcome: "различать this и that: близко и далеко",
        prompt: "Предмет стоит на другом конце комнаты. Каким словом о нём спросить?",
        options: [{ text: "that", correct: true }, { text: "this" }, { text: "it" }],
        why: "That — о том, что подальше. This говорят о том, что рядом.",
      },
      {
        id: "q-lishnee-a",
        kind: "choice",
        outcome: "различать this и that: близко и далеко",
        prompt: "В какой строке лишнее слово?",
        options: [
          { text: "that car" },
          { text: "this book" },
          { text: "this a pen", correct: true },
        ],
        why: "«This a pen» — между this и названием предмета a не ставят. Правильно: this pen.",
      },
      {
        id: "q-sumka-po-angliyski",
        kind: "gap",
        outcome: "называть предметы, которые носишь с собой",
        prompt: "Допиши название предмета: сумка.",
        before: "It's a ",
        after: ".",
        answer: "bag",
        why: "It's a bag. Bag — сумка, box — коробка.",
      },
      {
        id: "q-telefon-sopostavit",
        kind: "match",
        outcome: "называть предметы, которые носишь с собой",
        prompt: "Сопоставь слово и перевод.",
        left: ["phone", "box", "key"],
        right: ["ключ", "телефон", "коробка"],
        answer: [1, 2, 0],
        why: "Phone — телефон, box — коробка, key — ключ.",
      },
      {
        id: "q-stul-po-angliyski",
        kind: "choice",
        outcome: "называть то, что стоит в комнате",
        prompt: "Что значит слово picture?",
        options: [{ text: "комната" }, { text: "картина", correct: true }, { text: "дверь" }],
        why: "Picture — картина. Комната — room, дверь — door.",
      },
      {
        id: "q-okno-dopisat",
        kind: "gap",
        outcome: "называть то, что стоит в комнате",
        prompt: "Допиши название предмета: окно.",
        before: "It's a ",
        after: ".",
        answer: "window",
        why: "It's a window. Слово начинается с буквы W.",
      },
      {
        id: "q-bilet-po-angliyski",
        kind: "gap",
        outcome: "называть то, что вокруг на улице",
        prompt: "Допиши название предмета: билет.",
        before: "It's a ",
        after: ".",
        answer: "ticket",
        why: "It's a ticket. Ticket — билет, map — карта.",
      },
      {
        id: "q-dengi-bez-artiklya",
        kind: "choice",
        outcome: "называть то, что вокруг на улице",
        prompt: "В какой строке про деньги сказано верно?",
        options: [
          { text: "It's a money." },
          { text: "It's an money." },
          { text: "It's money.", correct: true },
        ],
        why: "It's money. Перед money артикль не ставят.",
      },
      {
        id: "q-popravit-predmet",
        kind: "short",
        outcome: "говорить, что предмет не тот, и называть верный: It isn't a pen, it's a key",
        prompt: "Собеседник сказал: «It's a bus.» На самом деле это машина. Возрази и назови верное — два предложения.",
        answer: "It isn't a bus. It's a car.",
        exact: true,
        accept: [
          "It isn't a bus. It's a car",
          "It is not a bus. It is a car.",
          "It is not a bus. It is a car",
        ],
        why: "It isn't a bus. It's a car. Два шага, и артикль a в обоих предложениях.",
      },
      {
        id: "q-poterya-a-v-otricanii",
        kind: "choice",
        outcome: "говорить, что предмет не тот, и называть верный: It isn't a pen, it's a key",
        prompt: "В какой строке потерялось короткое слово?",
        options: [
          { text: "It isn't a map." },
          { text: "It isn't pen.", correct: true },
          { text: "It's a key." },
        ],
        why: "«It isn't pen» — без a. Артикль нужен и в отрицании тоже.",
      },
      {
        id: "q-vopros-o-predmete",
        kind: "short",
        outcome: "спрашивать о предмете с be и коротко отвечать",
        prompt: "Проверь догадку о предмете вдалеке: спроси, автобус ли это. Запиши вопрос целиком.",
        answer: "Is that a bus?",
        exact: true,
        accept: ["Is that a bus"],
        why: "Is that a bus? Форма be впереди, вдалеке — значит that.",
      },
      {
        id: "q-kratkiy-otvet-o-predmete",
        kind: "gap",
        outcome: "спрашивать о предмете с be и коротко отвечать",
        prompt: "«Is this a key?» Это правда. Допиши краткий ответ.",
        before: "Yes, it ",
        after: ".",
        answer: "is",
        why: "Yes, it is. В кратком ответе о предмете всегда it.",
      },
      {
        id: "q-sobrat-razgovor-predmety",
        kind: "order",
        outcome: "вести разговор о предметах",
        prompt: "Расставь реплики по порядку.",
        items: ["It's a ticket.", "What's this?", "Is that a map?"],
        answer: [1, 0, 2],
        why: "Вопрос о названии, ответ, проверка догадки о втором предмете.",
      },
      {
        id: "q-otvetit-i-nazvat",
        kind: "short",
        outcome: "вести разговор о предметах",
        prompt: "«Is this a pen?» На самом деле это ключ. Ответь «нет» коротко и назови верное — два предложения.",
        answer: "No, it isn't. It's a key.",
        exact: true,
        accept: [
          "No, it isn't. It's a key",
          "No, it is not. It is a key.",
          "No, it is not. It is a key",
        ],
        why: "No, it isn't. It's a key. Краткий ответ и отдельное предложение о том, как есть.",
      },
      {
        id: "q-dva-voprosa-razlichit",
        kind: "hottext",
        outcome: "спрашивать о предмете с be и коротко отвечать",
        prompt: "Отметь вопросы, на которые отвечают «да» или «нет».",
        parts: [
          { text: "What is this?", selectable: true },
          { text: " · " },
          { text: "Is this a bag?", selectable: true, correct: true },
          { text: " · " },
          { text: "What's that?", selectable: true },
          { text: " · " },
          { text: "Is that a shop?", selectable: true, correct: true },
        ],
        why:
          "Вопросы, открытые формой be, проверяют догадку — на них отвечают «да» или «нет». " +
          "Вопросы с what спрашивают название.",
      },
      {
        id: "q-nazvanie-predmeta-otvet",
        kind: "short",
        outcome: "называть то, что вокруг на улице",
        prompt: "Перед тобой билет. Ответь на «What's this?» целиком.",
        answer: "It's a ticket.",
        exact: true,
        accept: ["It's a ticket", "It is a ticket.", "It is a ticket"],
        why: "It's a ticket — или полностью It is a ticket.",
      },
    ],
  },
};

export default module;
