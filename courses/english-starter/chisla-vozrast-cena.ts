import type { Module } from "@/lib/content/types";

/**
 * Модуль 9 курса «Английский с нуля»: числа, возраст, цена.
 *
 * Программа: docs/programma-english-starter.md, модуль 9 — «называть числа,
 * спрашивать возраст и цену»; грамматика: количественные определители,
 * `how old`, `how much` (сверх A1).
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. Количественные определители — A1, English Grammar Profile, DETERMINERS
 *    quantity «FORM: WITH PLURAL NOUNS»: «Can use a limited range of
 *    quantifying determiners with plural nouns ('some', 'lots of', 'a lot of'
 *    and numbers)». Числа названы в самом описании — ступень своя.
 *
 * 2. Возраст — Pre-A1, описания Совета Европы, с. 79, Information exchange:
 *    «Can tell people their age and ask people about their age». Это точное
 *    описание третьего урока, и оно НИЖЕ ступени A1.
 *
 * 3. `How many` и `how much` В ИСТОЧНИКЕ ЕСТЬ, и стоят они на B1:
 *    DETERMINERS quantity «FORM: 'MANY' WITH PLURAL NOUNS, INTERROGATIVE»
 *    (пример источника — «How many channels are there in Britain?») и
 *    «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS, INTERROGATIVE».
 *    Первая моя проверка утверждала, что таких строк нет. Это была та же
 *    ошибка, что в модуле 7: искал по словам how old и how much, а строки
 *    названы через many и much. Ошибку нашёл методист — второй раз подряд.
 *    Про `how old` строки действительно нет ни одной. Зато есть прямая опора
 *    на A1: VERBS types «FORM: LINKING VERB, 'BE'», и пример источника там —
 *    «I am 22 years old».
 *    Основание брать how many и how much: руководство A2 Key, с. 52, перечень
 *    вопросительных слов — «How; How much; How many; How often; How long»; и
 *    руководство для младших ступеней, с. 23, образец Pre A1 Starters —
 *    «How many children are there? two». То есть Cambridge спрашивает how many
 *    ниже ступени A1.
 *
 * ЧЕГО ЗДЕСЬ НЕТ:
 *
 * — настоящего простого времени (модуль 14): «сколько стоит» строится через
 *   `be`, а не через `cost`;
 * — прилагательных, кроме `old` в обороте про возраст (модуль 11);
 * — дат и времени (модуль 10): числа здесь только как счёт, возраст и цена.
 *
 * Звук есть: синтез речи Azure, британские голоса — решение владельца
 * 16 августа 2026 (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "chisla-vozrast-cena",
  title: "Числа, возраст, цена",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "СВОЕЙ СТУПЕНИ: A1, DETERMINERS quantity «FORM: WITH PLURAL NOUNS»: «Can use a " +
        "limited range of quantifying determiners with plural nouns ('some', 'lots of', " +
        "'a lot of' and numbers)» — числа и слово some названы в описании прямо. " +
        "A1, DETERMINERS quantity «FORM: WITH SINGULAR NOUNS»: «Can use a limited range of " +
        "quantifying determiners with singular nouns ('a', 'every')». " +
        "A1, NOUNS plural «FORM: PLURAL '-S'» — счёт требует множественного числа. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'» — пример источника «I am 22 years " +
        "old», то есть возраст через be описан на своей ступени. " +
        "СВЕРХ СТУПЕНИ: A2, QUESTIONS wh- «FORM: MAIN VERB 'BE'» — строение вопросов с how. " +
        "B1, DETERMINERS quantity «FORM: 'MANY' WITH PLURAL NOUNS, INTERROGATIVE»: «Can use " +
        "'many' with plural nouns in interrogative contexts», пример источника — «How many " +
        "channels are there in Britain?». B1, «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS, " +
        "INTERROGATIVE». Это ступень вопросов How many? и How much? " +
        "ОСНОВАНИЕ БРАТЬ ИХ ВСЁ РАВНО: руководство A2 Key, с. 52, перечень вопросительных " +
        "слов — «How; How much; How many; How often; How long; etc.»; и руководство для " +
        "младших ступеней, с. 23, образец Pre A1 Starters — «How many children are there? " +
        "two». Cambridge спрашивает how many ниже ступени A1. " +
        "Утвердительное many (many books) на A1 не подтверждено ничем и в модуле не даётся. " +
        "СЛОВО zero — A2 по Oxford 3000 и по словнику A2 Key; в словниках младших ступеней " +
        "его нет. Взято потому, что без нуля не продиктовать номер",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, Pre-A1, дословно: «Can tell people their age and ask " +
        "people about their age» — это точное описание урока о возрасте, и стоит оно НИЖЕ " +
        "ступени A1. " +
        "с. 56, Reading for orientation, Pre-A1: «Can find information about places, times " +
        "and prices on posters, flyers and notices» — цены названы прямо, и ступень здесь " +
        "Pre-A1, а не A1. " +
        "с. 79, Information exchange, A1: «Can express numbers, quantities and cost in a " +
        "limited way» — самое точное описание всего модуля. Там же Pre-A1: «Can use and " +
        "understand simple numbers in everyday conversations» и «Can ask for and give a " +
        "phone number»",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 16, Listening Part 2: «Where a number is required, candidates should be " +
        "encouraged to write numbers as digits rather than words to avoid spelling " +
        "mistakes. Candidates will only hear numbers 1–20 so they need plenty of practice " +
        "in hearing and recognising each of those numbers». Отсюда два решения модуля: " +
        "числа до двадцати разбираются подробно, десятки отдельным уроком; и в заданиях " +
        "ответ цифрой считается верным",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: number, one, two, three, four, five, six, seven, " +
        "eight, nine, ten, age, old, year, how, many, much, some, price. Проверено " +
        "построчно по выгрузке словника",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены " +
        "(CLAUDE.md, раздел о британской норме)",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "называть числа от одного до десяти",
    "называть числа от одиннадцати до двадцати",
    "говорить свой возраст и спрашивать о возрасте",
    "спрашивать и коротко отвечать, сколько предметов: How many?",
    "спрашивать цену: How much is it?",
    "диктовать номер по одной цифре",
    "называть числа от двадцати до ста",
    "говорить о количестве, не называя точного числа: some и a lot of",
    "вести короткий разговор о возрасте, количестве и цене",
    "находить в объявлении цену и количество",
    "различать на слух похожие числа и понимать цену в разговоре",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "chisla-do-desyati",
      title: "Числа от одного до десяти",
      estimatedMinutes: 13,
      outcome: "называть числа от одного до десяти",

      blocks: [
        {
          id: "zachem-chisla",
          kind: "explain",
          text: [
            "Числа встречаются везде: возраст, цена, номер комнаты, счёт в магазине. " +
              "Начнём с первого десятка: эти десять слов придётся выучить наизусть, как " +
              "буквы алфавита.",
            "Хорошая новость: дальше первого десятка почти всё строится из этих же слов.",
          ],
        },
        {
          id: "tablica-do-desyati",
          kind: "table",
          caption: "Первый десяток",
          head: ["Цифра", "Слово", "Произношение"],
          rows: [
            ["1", "one", "/wʌn/"],
            ["2", "two", "/tuː/"],
            ["3", "three", "/θriː/"],
            ["4", "four", "/fɔː/"],
            ["5", "five", "/faɪv/"],
            ["6", "six", "/sɪks/"],
            ["7", "seven", "/ˈsevn/"],
            ["8", "eight", "/eɪt/"],
            ["9", "nine", "/naɪn/"],
            ["10", "ten", "/ten/"],
          ],
        },
        {
          id: "two-i-bukvy",
          kind: "note",
          tone: "mistake",
          text:
            "В слове two буква w не читается: /tuː/. В eight не читается gh: /eɪt/. " +
            "Конец у eight и night выглядит одинаково, а звучит по-разному. В night " +
            "работает сочетание ight и даёт /aɪt/. В eight буквы делятся иначе: eigh " +
            "и t. Тот самый случай, о котором говорилось в модуле про алфавит: " +
            "сочетания запоминают вместе со словами.",
        },
        {
          id: "three-i-zvuk",
          kind: "note",
          tone: "info",
          text:
            "Слово three начинается со звука /θ/ — того же, что в thank you. Кончик языка " +
            "касается верхних зубов, голос не включается. Русское «с» на его месте " +
            "превращает three в нечто другое.",
        },
        {
          id: "chislo-i-mnozhestvennoe",
          kind: "note",
          tone: "info",
          text:
            "После числа больше одного название предмета стоит во множественном: two books, " +
            "five keys. Артикль при этом не нужен — число само говорит, сколько их.",
        },
        {
          id: "zapis-do-desyati",
          kind: "audio",
          pace: "slow",
          caption: "Послушай первый десяток",
          transcript: "One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.",
        },
        {
          id: "slovar-do-desyati",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "number", translation: "число, номер", example: "a phone number", hint: "/ˈnʌmbə/" },
            { term: "one", translation: "один", example: "one book", hint: "/wʌn/" },
            { term: "two", translation: "два", example: "two keys", hint: "/tuː/" },
            { term: "three", translation: "три", example: "three cars", hint: "/θriː/" },
            { term: "ten", translation: "десять", example: "ten people", hint: "/ten/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoe-chislo",
          kind: "choice",
          prompt: "Какое слово значит «три»?",
          options: [{ text: "three", correct: true }, { text: "two" }, { text: "ten" }],
          hint: "Начинается со звука, которого в русском нет.",
          why: "Three — три. Two — два, ten — десять.",
        },
        {
          id: "z2-dopisat-chislo",
          kind: "gap",
          prompt: "Допиши число словом: «пять книг».",
          before: "",
          after: " books",
          answer: "five",
          hint: "Четыре буквы.",
          why: "Five books. После числа больше одного название стоит во множественном.",
        },
        {
          id: "z3-sopostavit-chisla",
          kind: "match",
          prompt: "Сопоставь цифру и слово.",
          left: ["4", "7", "9"],
          right: ["seven", "nine", "four"],
          answer: [2, 0, 1],
          hint: "Сверься с таблицей первого десятка.",
          why: "4 — four, 7 — seven, 9 — nine.",
        },
        {
          id: "z4-otmetit-nechitaemye",
          kind: "hottext",
          prompt: "Отметь числа, где не читаются некоторые буквы.",
          parts: [
            { text: "two", selectable: true, correct: true },
            { text: " · " },
            { text: "six", selectable: true },
            { text: " · " },
            { text: "eight", selectable: true, correct: true },
            { text: " · " },
            { text: "ten", selectable: true },
          ],
          hint: "Произнеси каждое слово и сравни с написанием.",
          why:
            "В two не читается w, в eight — сочетание gh. Six и ten читаются буква в букву.",
        },
        {
          id: "z5-napisat-chislo",
          kind: "short",
          prompt: "Напиши словом число 8.",
          answer: "eight",
          accept: ["Eight"],
          hint: "Пять букв, две из них не читаются.",
          why: "Eight. Буквы gh на письме есть, а в звуке их нет.",
        },
        {
          id: "z6-skolko-knig",
          kind: "short",
          prompt: "Напиши по-английски «две книги» — число словом.",
          answer: "two books",
          accept: ["Two books"],
          hint: "Артикль здесь не нужен, а к book прибавляется буква.",
          why: "Two books. Число само говорит, сколько предметов, поэтому a не ставят.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chisla-do-dvadcati",
      title: "От одиннадцати до двадцати",
      estimatedMinutes: 13,
      outcome: "называть числа от одиннадцати до двадцати",

      blocks: [
        {
          id: "zachem-vtoroy-desyatok",
          kind: "explain",
          text: [
            "Второй десяток устроен хитрее первого. Одиннадцать и двенадцать правила не " +
              "слушаются, их запоминают целиком: eleven, twelve.",
            "Дальше проще: к знакомому числу прибавляется -teen. Four — fourteen, " +
              "six — sixteen, seven — seventeen.",
          ],
        },
        {
          id: "tablica-vtoroy-desyatok",
          kind: "table",
          caption: "Второй десяток",
          head: ["Цифра", "Слово", "Из чего собрано"],
          rows: [
            ["11", "eleven", "запомнить"],
            ["12", "twelve", "запомнить"],
            ["13", "thirteen", "three + teen, но three меняется"],
            ["14", "fourteen", "four + teen"],
            ["15", "fifteen", "five + teen, но five меняется"],
            ["16", "sixteen", "six + teen"],
            ["17", "seventeen", "seven + teen"],
            ["18", "eighteen", "eight + teen"],
            ["19", "nineteen", "nine + teen"],
            ["20", "twenty", "запомнить"],
          ],
        },
        {
          id: "tri-menyayutsya",
          kind: "note",
          tone: "mistake",
          text:
            "Два числа меняются при сборке: three → thirteen, five → fifteen. Запомни две " +
            "особые части: thir- и fif-. Написать «threeteen» и «fiveteen» — обычное дело, " +
            "пока не привыкнешь.",
        },
        {
          id: "teen-i-ty",
          kind: "note",
          tone: "info",
          text:
            "Окончание -teen значит «плюс десять», окончание -ty — «целый десяток». Отсюда " +
            "разница между fourteen (14) и forty (40) — и заметь, что four при этом теряет " +
            "букву u. Десятки разбираются в отдельном уроке этого же модуля.",
        },
        {
          id: "zapis-vtoroy-desyatok",
          kind: "audio",
          pace: "slow",
          caption: "Послушай второй десяток",
          transcript:
            "Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-chislo",
          kind: "choice",
          prompt: "Как правильно написать 13?",
          options: [{ text: "threeteen" }, { text: "thirteen", correct: true }, { text: "thriteen" }],
          hint: "Слово three при сборке меняется.",
          why: "Thirteen. «Threeteen» — сборка без изменения, такого слова нет.",
        },
        {
          id: "z2-dopisat-15",
          kind: "gap",
          prompt: "Допиши число словом: «пятнадцать книг».",
          before: "",
          after: " books",
          answer: "fifteen",
          hint: "Слово five при сборке меняется.",
          why: "Fifteen books. Five превращается в fif-, и только потом прибавляется -teen.",
        },
        {
          id: "z3-otmetit-zapominat",
          kind: "hottext",
          prompt: "Отметь числа, которые нельзя собрать из знакомых слов.",
          parts: [
            { text: "eleven", selectable: true, correct: true },
            { text: " · " },
            { text: "sixteen", selectable: true },
            { text: " · " },
            { text: "twelve", selectable: true, correct: true },
            { text: " · " },
            { text: "nineteen", selectable: true },
          ],
          hint: "Два числа не похожи ни на одно слово из первого десятка.",
          why:
            "Eleven и twelve надо запомнить. Sixteen и nineteen собраны из six и nine с " +
            "окончанием -teen.",
        },
        {
          id: "z4-sopostavit-vtoroy",
          kind: "match",
          prompt: "Сопоставь цифру и слово.",
          left: ["12", "17", "20"],
          right: ["seventeen", "twenty", "twelve"],
          answer: [2, 0, 1],
          hint: "Два слова начинаются одинаково, но значат разное.",
          why: "12 — twelve, 17 — seventeen, 20 — twenty.",
        },
        {
          id: "z5-napisat-18",
          kind: "short",
          prompt: "Напиши словом число 18.",
          answer: "eighteen",
          accept: ["Eighteen"],
          hint: "Восемь плюс окончание.",
          why: "Eighteen. Слово eight не меняется, к нему прибавляется -teen.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "skolko-let",
      title: "Сколько тебе лет",
      estimatedMinutes: 13,
      outcome: "говорить свой возраст и спрашивать о возрасте",

      blocks: [
        {
          id: "zachem-vozrast",
          kind: "explain",
          text: [
            "Сколько тебе лет — вопрос, который задают при знакомстве, в анкете и у врача. " +
              "Ответить на него и спросить самому нужно уметь с первых дней.",
            "По-английски возраст строится не так, как по-русски. Там, где по-русски «мне " +
              "двадцать лет», по-английски говорят «я есть двадцать»: I am twenty. Глагол " +
              "тот же be, что и всегда.",
          ],
        },
        {
          id: "tablica-vozrasta",
          kind: "table",
          caption: "Возраст",
          head: ["Вопрос", "Ответ", "Перевод ответа"],
          rows: [
            ["How old are you?", "I'm twenty.", "Мне двадцать."],
            ["How old is he?", "He's ten.", "Ему десять."],
            ["How old is she?", "She's nineteen.", "Ей девятнадцать."],
          ],
        },
        {
          id: "bez-let",
          kind: "note",
          tone: "mistake",
          text:
            "Слово «лет» в ответе не обязательно. «I'm twenty» и «I'm twenty years old» — " +
            "оба ответа верны. Короткий проще, с него и начнём: в заданиях спрашиваем его.",
        },
        {
          id: "have-ne-goditsya",
          kind: "note",
          tone: "mistake",
          text:
            "«I have twenty years» — перевод с русского слово в слово, и по-английски так " +
            "не говорят. Возраст выражают глаголом be, а не have got.",
        },
        {
          id: "how-old-celikom",
          kind: "note",
          tone: "info",
          text:
            "Вопрос How old are you? учится целиком, как «How do you spell that?» из модуля " +
            "про алфавит. Слово old значит «старый», но переводить вопрос дословно не " +
            "нужно — он означает «сколько тебе лет».",
        },
        {
          id: "zapis-vozrasta",
          kind: "audio",
          pace: "slow",
          caption: "Послушай вопрос и ответ",
          transcript: "How old are you? — I'm twenty. How old is he? — He's ten.",
        },
        {
          id: "slovar-vozrasta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "old", translation: "старый", example: "How old are you?", hint: "/əʊld/" },
            { term: "age", translation: "возраст", example: "my age", hint: "/eɪdʒ/" },
            { term: "year", translation: "год", example: "twenty years old", hint: "/jɪə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kak-sprosit-vozrast",
          kind: "choice",
          prompt: "Как спросить «сколько тебе лет»?",
          options: [
            { text: "How many are you?" },
            { text: "How old are you?", correct: true },
            { text: "How much are you?" },
          ],
          hint: "В вопросе стоит слово со значением «старый».",
          why:
            "How old are you? Вопрос с many спрашивает о количестве предметов, с much — о цене.",
        },
        {
          id: "z2-otvetit-o-vozraste",
          kind: "gap",
          prompt: "Тебе двадцать. Допиши ответ.",
          before: "I'm ",
          after: ".",
          answer: "twenty",
          hint: "Число словом, слово «лет» не нужно.",
          why: "I'm twenty. Возраст выражают глаголом be, слово years необязательно.",
        },
        {
          id: "z3-otmetit-oshibki-vozrasta",
          kind: "hottext",
          prompt: "Отметь ответы с ошибкой.",
          parts: [
            { text: "I have twenty years.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm twenty.", selectable: true },
            { text: " · " },
            { text: "She's nineteen.", selectable: true },
            { text: " · " },
            { text: "He have ten years.", selectable: true, correct: true },
          ],
          hint: "Возраст выражают одним определённым глаголом.",
          why:
            "«I have twenty years» и «He have ten years» — перевод с русского слово в слово. " +
            "Нужен глагол be: I'm twenty, He's ten.",
        },
        {
          id: "z4-sprosit-o-tretem",
          kind: "short",
          prompt: "Спроси, сколько лет ему. Запиши вопрос целиком.",
          answer: "How old is he?",
          accept: ["How old is he"],
          hint: "С he идёт форма is.",
          why: "How old is he? Форму be выбирают по тому, о ком речь.",
        },
        {
          id: "z5-sobrat-vopros-vozrasta",
          kind: "order",
          prompt: "Собери вопрос: «Сколько ей лет?»",
          items: ["she", "old", "How", "is"],
          answer: [2, 1, 3, 0],
          hint: "Два слова вопроса идут вместе и не разделяются.",
          why: "How old is she? Слова How old стоят рядом, за ними форма be.",
        },
        {
          id: "z6-vozrast-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух вопрос о возрасте и свой ответ.",
          phrase: "How old are you? — I'm ... .",
          translation: "Сколько тебе лет? — Мне ... .",
          hint: "Между вопросом и ответом сделай паузу: их произносят два человека.",
          why: "Эта пара звучит при знакомстве и в любом разговоре о возрасте.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "skolko-predmetov",
      title: "Сколько их: How many?",
      estimatedMinutes: 12,
      outcome: "спрашивать и коротко отвечать, сколько предметов: How many?",

      blocks: [
        {
          id: "zachem-how-many",
          kind: "explain",
          text: [
            "Чтобы спросить о количестве предметов, к слову how прибавляют many: How many " +
              "books? — «сколько книг?»",
            "После many название всегда во множественном: many books, many keys. Один " +
              "предмет так не считают: об одном предмете этот вопрос не задают.",
          ],
        },
        {
          id: "tablica-how-many",
          kind: "table",
          caption: "Вопрос о количестве",
          head: ["Вопрос", "Перевод", "Ответ"],
          rows: [
            ["How many books?", "Сколько книг?", "Three."],
            ["How many people?", "Сколько человек?", "Ten."],
            ["How many friends?", "Сколько друзей?", "Five."],
          ],
        },
        {
          id: "otvet-odnim-chislom",
          kind: "note",
          tone: "info",
          text:
            "На такой вопрос отвечают одним числом, и этого достаточно: «Four». Строить " +
            "целое предложение не нужно — спрашивали количество, его и назвали.",
        },
        {
          id: "many-s-mnozhestvennym",
          kind: "note",
          tone: "mistake",
          text:
            "«How many book?» — название осталось в единственном. После many всегда " +
            "множественное: How many books?",
        },
        {
          id: "zapis-how-many",
          kind: "audio",
          pace: "slow",
          caption: "Послушай вопрос и ответ",
          transcript: "How many books? — Three. How many people? — Ten.",
        },
        {
          id: "slovar-how-many",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "many", translation: "много; в вопросе — сколько", example: "How many books?", hint: "/ˈmeni/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kak-sprosit-skolko",
          kind: "choice",
          prompt: "Как спросить «сколько ключей»?",
          options: [
            { text: "How many key?" },
            { text: "How old keys?" },
            { text: "How many keys?", correct: true },
          ],
          hint: "После many название стоит во множественном.",
          why: "How many keys? В первом варианте название в единственном, во втором — не то слово.",
        },
        {
          id: "z2-dopisat-many",
          kind: "gap",
          prompt: "Допиши слово в вопросе о количестве.",
          before: "How ",
          after: " people?",
          answer: "many",
          hint: "Людей считают поштучно.",
          why: "How many people? О штуках спрашивают через many.",
        },
        {
          id: "z3-otmetit-nevernye-many",
          kind: "hottext",
          prompt: "Отметь вопросы с ошибкой.",
          parts: [
            { text: "How many books?", selectable: true },
            { text: " · " },
            { text: "How many car?", selectable: true, correct: true },
            { text: " · " },
            { text: "How many people?", selectable: true },
            { text: " · " },
            { text: "How many friend?", selectable: true, correct: true },
          ],
          hint: "Смотри на конец последнего слова.",
          why: "«How many car?» и «How many friend?» — название осталось в единственном числе.",
        },
        {
          id: "z4-sprosit-o-druzyah",
          kind: "short",
          prompt: "Спроси, сколько у собеседника друзей. Запиши вопрос из трёх слов.",
          answer: "How many friends?",
          accept: ["How many friends"],
          hint: "Название во множественном.",
          why: "How many friends? How, many и название во множественном числе.",
        },
        {
          id: "z5-otvetit-chislom",
          kind: "choice",
          prompt: "«How many books?» У тебя три книги. Что ответить?",
          options: [
            { text: "Three.", correct: true },
            { text: "I'm three." },
            { text: "Three old." },
          ],
          hint: "Одного числа достаточно.",
          why:
            "Three. Ответ «I'm three» говорит о возрасте, а «Three old» не значит ничего.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "skolko-stoit",
      title: "Сколько стоит: How much?",
      estimatedMinutes: 12,
      outcome: "спрашивать цену: How much is it?",

      blocks: [
        {
          id: "zachem-how-much",
          kind: "explain",
          text: [
            "Про цену спрашивают другим словом: How much is it? — «сколько это стоит?» " +
              "Этот вопрос нужен в любом магазине, на рынке и в кафе.",
            "Разница вот в чём: many спрашивает о штуках, much — о деньгах. Разбор, почему " +
              "так, идёт в модуле про магазин; пока запомни два вопроса как готовые.",
          ],
        },
        {
          id: "tablica-how-much",
          kind: "table",
          caption: "Вопрос о цене",
          head: ["Вопрос", "Перевод", "О чём"],
          rows: [
            ["How much is it?", "Сколько это стоит?", "об одном предмете"],
            ["How much are they?", "Сколько они стоят?", "о нескольких"],
            ["How many books?", "Сколько книг?", "о количестве, не о цене"],
          ],
        },
        {
          id: "much-i-many",
          kind: "note",
          tone: "mistake",
          text:
            "Much и many легко перепутать. Проверь себя вопросом: считаешь ли ты штуки? " +
            "Книги и ключи считают — значит many. Деньги и цену не считают штуками — " +
            "значит much.",
        },
        {
          id: "cena-cherez-be",
          kind: "note",
          tone: "info",
          text:
            "Цену спрашивают через be: How much is it? Глагола «стоить» здесь нет вовсе — " +
            "и это удобно, потому что be ты уже знаешь.",
        },
        {
          id: "zapis-how-much",
          kind: "audio",
          pace: "slow",
          caption: "Послушай вопрос о цене",
          transcript: "How much is it? — Ten. How much are they? — Twenty.",
        },
        {
          id: "slovar-how-much",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "much", translation: "много; в вопросе о цене — сколько", example: "How much is it?", hint: "/mʌtʃ/" },
            { term: "price", translation: "цена", example: "a good price", hint: "/praɪs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-much-ili-many",
          kind: "choice",
          prompt: "Как спросить цену одного предмета?",
          options: [
            { text: "How many is it?" },
            { text: "How much is it?", correct: true },
            { text: "How old is it?" },
          ],
          hint: "Цену штуками не считают.",
          why: "How much is it? Слово many спрашивает о количестве, old — о возрасте.",
        },
        {
          id: "z2-dopisat-much",
          kind: "gap",
          prompt: "Допиши слово в вопросе о цене нескольких предметов.",
          before: "How ",
          after: " are they?",
          answer: "much",
          hint: "Четыре буквы, и это не many.",
          why: "How much are they? О цене спрашивают через much, даже когда предметов несколько.",
        },
        {
          id: "z3-otmetit-o-cene",
          kind: "hottext",
          prompt: "Отметь вопросы о цене.",
          parts: [
            { text: "How much is it?", selectable: true, correct: true },
            { text: " · " },
            { text: "How many books?", selectable: true },
            { text: " · " },
            { text: "How much are they?", selectable: true, correct: true },
            { text: " · " },
            { text: "How old is he?", selectable: true },
          ],
          hint: "Ищи слово much.",
          why: "О цене спрашивают через much. Many — о количестве, old — о возрасте.",
        },
        {
          id: "z4-sopostavit-voprosy",
          kind: "match",
          prompt: "Сопоставь вопрос и то, о чём он.",
          left: ["How old are you?", "How many books?", "How much is it?"],
          right: ["о цене", "о возрасте", "о количестве"],
          answer: [1, 2, 0],
          hint: "Все три начинаются одинаково — различает их второе слово.",
          why: "How old — о возрасте, how many — о количестве, how much — о цене.",
        },
        {
          id: "z5-sprosit-cenu",
          kind: "short",
          prompt: "Спроси цену одного предмета. Запиши вопрос целиком.",
          answer: "How much is it?",
          accept: ["How much is it"],
          hint: "Четыре слова, глагол — форма be.",
          why: "How much is it? Глагола «стоить» в этом вопросе нет.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nomer-po-cifram",
      title: "Номер по одной цифре",
      estimatedMinutes: 12,
      outcome: "диктовать номер по одной цифре",

      blocks: [
        {
          id: "zachem-po-cifram",
          kind: "explain",
          text: [
            "Длинный номер — комнаты, рейса, счёта — называют не целым числом, а по одной " +
              "цифре: 742 — seven — four — two. Так собеседник успевает записать и не " +
              "путает похожие числа.",
            "Это то же умение, что и диктовать имя по буквам из первого модуля: только " +
              "вместо букв — цифры.",
          ],
        },
        {
          id: "tablica-nomerov",
          kind: "table",
          caption: "Как диктуют номер",
          head: ["Номер", "Как читают", "Где встречается"],
          rows: [
            ["12", "one — two", "часть длинного номера"],
            ["405", "four — zero — five", "номер комнаты"],
            // Было «часть телефона» — а урок нарочно переписан без телефона:
            // его программа отдаёт модулю 10. След прежней редакции, нашёл методист.
            ["77", "seven — seven", "часть номера рейса"],
          ],
        },
        {
          id: "zero-i-oh",
          kind: "note",
          tone: "info",
          text:
            "Ноль по-английски zero, произношение /ˈzɪərəʊ/. Без него не продиктовать ни " +
            "номер комнаты 405, ни номер счёта, поэтому он здесь.",
        },
        {
          id: "cifroy-tozhe-verno",
          kind: "note",
          tone: "info",
          text:
            "Записывать число цифрой — не ошибка, а способ не ошибиться: в слове twelve " +
            "легко описаться, в «12» нет. В заданиях цифра засчитывается везде, где не " +
            "сказано «словом».",
        },
        {
          id: "zapis-nomerov",
          kind: "audio",
          pace: "slow",
          caption: "Послушай, как диктуют номер",
          transcript: "Four — zero — five. Seven — seven. One — two.",
        },
        {
          id: "slovar-nomerov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "zero", translation: "ноль", example: "four — zero — five", hint: "/ˈzɪərəʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kak-diktuyut",
          kind: "choice",
          prompt: "Как называют номер комнаты 405?",
          options: [
            { text: "four hundred five" },
            { text: "four — zero — five", correct: true },
            { text: "forty — five" },
          ],
          hint: "Номер называют по одной цифре.",
          why:
            "Four — zero — five. Номер читают по цифрам, чтобы собеседник успел записать.",
        },
        {
          id: "z2-dopisat-zero",
          kind: "gap",
          prompt: "Допиши слово: ноль в номере.",
          before: "four — ",
          after: " — five",
          answer: "zero",
          hint: "Четыре буквы.",
          why: "Four — zero — five. Ноль в номере называют zero.",
        },
        {
          id: "z3-prodiktovat-nomer",
          kind: "short",
          prompt: "Продиктуй номер 12 по цифрам: запиши словами через дефис.",
          answer: "one — two",
          accept: ["one-two", "one - two", "One — two"],
          hint: "Две цифры, между ними чёрточка.",
          why: "One-two. Номер называют по одной цифре, а не целым числом.",
        },
        {
          id: "z4-otmetit-po-cifram",
          kind: "hottext",
          prompt: "Отметь записи, где номер прочитан по цифрам.",
          parts: [
            { text: "seven — seven", selectable: true, correct: true },
            { text: " · " },
            { text: "seventeen", selectable: true },
            { text: " · " },
            { text: "one — two", selectable: true, correct: true },
            { text: " · " },
            { text: "twelve", selectable: true },
          ],
          hint: "По цифрам — значит два слова вместо одного.",
          why:
            "«Seven — seven» и «one — two» прочитаны по цифрам. Seventeen и twelve — целые " +
            "числа.",
        },
        {
          id: "z5-zapisat-nomer",
          kind: "short",
          prompt: "Продиктовали: seven — four — two. Запиши номер цифрами, без пробелов.",
          answer: "742",
          hint: "Три цифры подряд.",
          why: "742. Записывать номер цифрами не ошибка: так меньше шансов ошибиться в написании.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "desyatki-i-sotnya",
      title: "Десятки и сотня",
      estimatedMinutes: 13,
      outcome: "называть числа от двадцати до ста",

      blocks: [
        {
          id: "zachem-desyatki",
          kind: "explain",
          text: [
            "Двадцатью числа не заканчиваются. Возраст, цена, номер дома — всё это часто " +
              "больше двадцати. Значит, нужен счёт до ста.",
            // Было «новых слов всего восемь»: twenty ученик знает с прошлого урока,
            // новых семь. Нашёл методист.
            "Хорошая новость: десятков всего восемь, и twenty из них уже знаком. Новых слов " +
              "семь, а всё остальное собирается из них и из первого десятка.",
          ],
        },
        {
          id: "tablica-desyatkov",
          kind: "table",
          caption: "Восемь десятков",
          head: ["Число", "Слово", "Из чего"],
          rows: [
            ["20", "twenty", "запомнить"],
            ["30", "thirty", "three, но начало меняется"],
            ["40", "forty", "four без буквы u"],
            ["50", "fifty", "five, но начало меняется"],
            ["60", "sixty", "six + ty"],
            ["70", "seventy", "seven + ty"],
            ["80", "eighty", "eight + y"],
            ["90", "ninety", "nine + ty"],
          ],
        },
        {
          id: "sostavnye-chisla",
          kind: "table",
          caption: "Между десятками — через дефис",
          head: ["Число", "Слово"],
          rows: [
            ["21", "twenty-one"],
            ["35", "thirty-five"],
            ["48", "forty-eight"],
            ["99", "ninety-nine"],
            ["100", "a hundred"],
          ],
        },
        {
          id: "defis-obyazatelen",
          kind: "note",
          tone: "mistake",
          text:
            "Между десятком и единицей ставят дефис: twenty-one, а не «twenty one». Это " +
            "одно слово, записанное через чёрточку.",
        },
        {
          id: "teen-i-ty-ne-putat",
          kind: "note",
          tone: "mistake",
          text:
            "Fourteen (14) и forty (40) на слух различаются ударением: в fourteen оно на " +
            "втором слоге, в forty — на первом. На письме различие видно сразу: -teen " +
            "против -ty.",
        },
        {
          id: "tri-menyayut-nachalo",
          kind: "note",
          tone: "info",
          text:
            "Три десятка меняют начало: three → thirty, five → fifty, four → forty (буква u " +
            "выпадает). Те же изменения были у thirteen и fifteen — правило одно.",
        },
        {
          id: "zapis-desyatkov",
          kind: "audio",
          pace: "slow",
          caption: "Послушай десятки",
          transcript:
            "Twenty. Thirty. Forty. Fifty. Sixty. Seventy. Eighty. Ninety. A hundred. Twenty-one. Thirty-five.",
        },
        {
          id: "slovar-desyatkov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "thirty", translation: "тридцать", example: "thirty books", hint: "/ˈθɜːti/" },
            { term: "forty", translation: "сорок", example: "forty people", hint: "/ˈfɔːti/" },
            { term: "fifty", translation: "пятьдесят", example: "fifty tenge", hint: "/ˈfɪfti/" },
            { term: "hundred", translation: "сто", example: "a hundred books", hint: "/ˈhʌndrəd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sorok",
          kind: "choice",
          prompt: "Как правильно написать 40?",
          options: [{ text: "fourty" }, { text: "forty", correct: true }, { text: "fourteen" }],
          hint: "Буква u при этом выпадает.",
          why: "Forty. «Fourty» — сборка без изменения, а fourteen значит 14.",
        },
        {
          id: "z2-dopisat-defis",
          kind: "gap",
          prompt: "Допиши число словом: 35.",
          before: "",
          after: " books",
          answer: "thirty-five",
          hint: "Десяток и единица через чёрточку.",
          why: "Thirty-five books. Между десятком и единицей стоит дефис.",
        },
        {
          id: "z3-otmetit-desyatki",
          kind: "hottext",
          prompt: "Отметь слова, которые называют десятки.",
          parts: [
            { text: "sixty", selectable: true, correct: true },
            { text: " · " },
            { text: "sixteen", selectable: true },
            { text: " · " },
            { text: "ninety", selectable: true, correct: true },
            { text: " · " },
            { text: "nineteen", selectable: true },
          ],
          hint: "У десятков окончание -ty, у второго десятка -teen.",
          why:
            "Sixty (60) и ninety (90) — десятки. Sixteen (16) и nineteen (19) — из второго " +
            "десятка.",
        },
        {
          id: "z4-sopostavit-desyatki",
          kind: "match",
          prompt: "Сопоставь число и слово.",
          left: ["30", "50", "80"],
          right: ["fifty", "eighty", "thirty"],
          answer: [2, 0, 1],
          hint: "Два числа из трёх меняют начало слова.",
          why: "30 — thirty, 50 — fifty, 80 — eighty.",
        },
        {
          id: "z5-napisat-sostavnoe",
          kind: "short",
          prompt: "Напиши словом число 21.",
          answer: "twenty-one",
          accept: ["Twenty-one", "twenty one"],
          hint: "Десяток, чёрточка, единица.",
          why: "Twenty-one. Через дефис — так пишут все числа между десятками.",
        },
        {
          id: "z6-vozrast-za-dvadcat",
          kind: "short",
          prompt: "Тебе тридцать два. Ответь на «How old are you?» целиком, число словом.",
          answer: "I'm thirty-two.",
          accept: ["I'm thirty-two", "I am thirty-two.", "I am thirty-two"],
          hint: "Слово years не нужно, а число пишется через дефис.",
          why: "I'm thirty-two. Возраст через be, число через дефис.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "some-i-a-lot-of",
      title: "Много и несколько: some и a lot of",
      estimatedMinutes: 12,
      outcome: "говорить о количестве, не называя точного числа: some и a lot of",

      blocks: [
        {
          id: "zachem-some",
          kind: "explain",
          text: [
            "Не всегда нужно называть точное число. «Несколько книг», «много друзей» — " +
              "по-английски some books, a lot of friends.",
            "Оба оборота стоят там же, где числа, — перед названием предмета. Поэтому и " +
              "учить их удобно рядом с числами.",
          ],
        },
        {
          id: "tablica-some",
          kind: "table",
          caption: "Количество без точного числа",
          head: ["Оборот", "Перевод", "Пример"],
          rows: [
            ["some", "несколько, немного", "some books"],
            ["a lot of", "много", "a lot of friends"],
            ["a", "один", "a book"],
          ],
        },
        {
          id: "some-s-mnozhestvennym",
          kind: "note",
          tone: "info",
          text:
            "После some и a lot of название стоит во множественном: some keys, a lot of " +
            "people. Правило то же, что после числа больше одного.",
        },
        {
          id: "a-lot-of-celikom",
          kind: "note",
          tone: "mistake",
          text:
            "A lot of — три слова, и они не разделяются: «a lot friends» и «lot of friends» " +
            "неверны. Оборот учится целиком.",
        },
        {
          id: "zapis-some",
          kind: "audio",
          pace: "slow",
          caption: "Послушай обороты",
          transcript: "Some books. A lot of friends. Some people. A lot of cars.",
        },
        {
          id: "slovar-some",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "some", translation: "несколько, немного", example: "some books", hint: "/sʌm/" },
            { term: "a lot of", translation: "много", example: "a lot of friends", hint: "/ə ˈlɒt əv/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-neskolko-knig",
          kind: "choice",
          prompt: "Как сказать «несколько книг»?",
          options: [{ text: "some book" }, { text: "some books", correct: true }, { text: "a books" }],
          hint: "После some название во множественном.",
          why:
            "Some books. В «some book» название осталось в единственном, а в «a books» " +
            "артикль стоит перед множественным числом — так не бывает.",
        },
        {
          id: "z2-dopisat-a-lot-of",
          kind: "gap",
          prompt: "Допиши недостающее слово: «много друзей».",
          before: "a lot ",
          after: " friends",
          answer: "of",
          hint: "Две буквы, и без них оборот не работает.",
          why: "A lot of friends. Оборот состоит из трёх слов и не разделяется.",
        },
        {
          id: "z3-otmetit-nevernye-oboroty",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой.",
          parts: [
            { text: "some keys", selectable: true },
            { text: " · " },
            { text: "a lot friends", selectable: true, correct: true },
            { text: " · " },
            { text: "a lot of people", selectable: true },
            { text: " · " },
            { text: "some car", selectable: true, correct: true },
          ],
          hint: "В одной строке потеряно слово, в другой — название в единственном.",
          why:
            "«A lot friends» — потеряно of. «Some car» — после some нужно множественное: " +
            "some cars.",
        },
        {
          id: "z4-sopostavit-kolichestvo",
          kind: "match",
          prompt: "Сопоставь оборот и перевод.",
          left: ["a book", "some books", "a lot of books"],
          right: ["несколько книг", "много книг", "одна книга"],
          answer: [2, 0, 1],
          hint: "Один из трёх — про единственный предмет.",
          why: "A book — одна книга, some books — несколько, a lot of books — много.",
        },
        {
          id: "z5-napisat-mnogo",
          kind: "short",
          prompt: "Напиши по-английски «много людей».",
          answer: "a lot of people",
          accept: ["A lot of people"],
          hint: "Оборот из трёх слов и слово во множественном.",
          why: "A lot of people. Слово people и так во множественном, s к нему не прибавляют.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-s-chislami",
      title: "Разговор, в котором есть числа",
      estimatedMinutes: 14,
      outcome: "вести короткий разговор о возрасте, количестве и цене",

      blocks: [
        {
          id: "zachem-razgovor-chisla",
          kind: "explain",
          text: [
            "В магазине спрашивают цену, при знакомстве — возраст. За один день числа " +
              "звучат десяток раз.",
            "Три вопроса держат весь такой разговор: How old…? How many…? How much…?",
          ],
        },
        {
          id: "polnyy-razgovor-chisla",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Hello! How old are you?\n— I'm nineteen. And you?\n— I'm twenty.\n" +
            "— How many books have you got?\n— A lot of books. How much is it?\n— Ten tenge.",
          explain:
            "Ответ на вопрос о цене называют вместе с деньгами: Ten tenge. Одно число без " +
            "названия денег можно принять и за количество.",
        },
        {
          id: "tablica-treh-voprosov",
          kind: "table",
          caption: "Три вопроса с how",
          head: ["Вопрос", "О чём", "Ответ"],
          rows: [
            ["How old are you?", "возраст", "I'm twenty."],
            ["How many books?", "количество", "Three."],
            ["How much is it?", "цена", "Ten."],
          ],
        },
        {
          id: "chto-putayut",
          kind: "note",
          tone: "mistake",
          text:
            "Все три вопроса начинаются с how, и различает их второе слово. Проверяй себя " +
            "по нему: old — о возрасте, many — о штуках, much — о деньгах.",
        },
        {
          id: "zapis-razgovora-chisla",
          kind: "audio",
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор целиком",
          transcript:
            "How old are you? — I'm nineteen. And you? — I'm twenty. How many books have you got? " +
            "— A lot of books.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor-chisla",
          kind: "order",
          prompt: "Расставь реплики по порядку.",
          items: ["I'm nineteen. And you?", "How old are you?", "I'm twenty."],
          answer: [1, 0, 2],
          hint: "Сначала спрашивают.",
          why: "How old are you? — I'm nineteen. And you? — I'm twenty.",
        },
        {
          id: "z2-vybrat-vopros",
          kind: "choice",
          prompt: "Ты хочешь узнать цену. Какой вопрос задать?",
          options: [
            { text: "How many is it?" },
            { text: "How old is it?" },
            { text: "How much is it?", correct: true },
          ],
          hint: "Различает вопросы второе слово.",
          why: "How much is it? Many — о количестве штук, old — о возрасте.",
        },
        {
          id: "z3-dopisat-v-razgovore",
          kind: "gap",
          prompt: "Допиши второе слово вопроса о количестве книг.",
          before: "How ",
          after: " books have you got?",
          answer: "many",
          hint: "Книги считают штуками.",
          why: "How many books have you got? Штуки считают через many.",
        },
        {
          id: "z4-otmetit-otvety-o-vozraste",
          kind: "hottext",
          prompt: "Отметь ответы о возрасте.",
          parts: [
            { text: "I'm twenty.", selectable: true, correct: true },
            { text: " · " },
            { text: "Three books.", selectable: true },
            { text: " · " },
            { text: "She's nineteen.", selectable: true, correct: true },
            { text: " · " },
            { text: "Ten.", selectable: true },
          ],
          hint: "Ответ о возрасте строится через форму be.",
          why:
            "«I'm twenty» и «She's nineteen» — о возрасте. «Three books» — о количестве, " +
            "«Ten» без глагола может быть и ценой, и количеством.",
        },
        {
          id: "z5-otvetit-o-vozraste",
          kind: "short",
          prompt: "«How old is she?» Ей пятнадцать. Ответь целиком.",
          answer: "She's fifteen.",
          accept: ["She's fifteen", "She is fifteen.", "She is fifteen"],
          hint: "Слово years не нужно.",
          why: "She's fifteen. Возраст выражают формой be и числом.",
        },
        {
          id: "z6-razgovor-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух три вопроса с how: о возрасте, о количестве, о цене.",
          phrase: "How old are you? How many books? How much is it?",
          translation: "Сколько тебе лет? Сколько книг? Сколько это стоит?",
          hint: "Различай второе слово — от него зависит смысл.",
          why: "Три вопроса, которых хватает на большинство разговоров с числами.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Здесь впервые появляются цены и время в тексте: описание A1
    // называет их прямо — «costs, the date and place of the event, departure
    // times». Опора записана в `sources`.
    // =====================================================================
    {
      slug: "chitaem-cennik",
      title: "Читаем ценник и объявление",
      estimatedMinutes: 13,
      outcome: "находить в объявлении цену и количество",

      blocks: [
        {
          id: "zachem-chitat-cennik",
          kind: "explain",
          text: [
            "Ценник и объявление читают ради одного числа. Всё остальное в них — " +
              "названия вещей, которые ты уже знаешь.",
            "Числа на письме чаще стоят цифрами, а не словами. Прочитать их вслух ты " +
              "умеешь: цифра 15 читается fifteen.",
          ],
        },
        {
          id: "cennik-v-magazine",
          kind: "text",
          genre: "notice",
          title: "SHOP",
          body: [
            "A book — 15",
            "A pen — 3",
            "Two pencils — 4",
            "A camera — 90",
          ],
        },
        {
          id: "razbor-cennika",
          kind: "note",
          tone: "info",
          text:
            "Число на ценнике — это цена всей строки. «Two pencils — 4» значит, что " +
              "четыре стоят два карандаша вместе, а не каждый.",
        },
        {
          id: "obyavlenie-o-gruppe",
          kind: "text",
          genre: "notice",
          title: "ENGLISH LESSONS",
          body: [
            "Students: 12",
            "Age: 15 — 20",
            "One lesson — 60",
            "Phone: 8 7 1 2 3 4 5",
          ],
          glossary: [{ term: "Age", translation: "возраст" }],
        },

        // ---- задания ----
        {
          id: "z1-cena-knigi",
          kind: "short",
          about: "cennik-v-magazine",
          prompt: "Посмотри на ценник SHOP. Сколько стоит книга? Ответь цифрой.",
          answer: "15",
          accept: ["fifteen", "пятнадцать"],
          hint: "Найди строку со словом book.",
          why: "A book — 15. Пятнадцать.",
        },
        {
          id: "z2-chto-dorozhe",
          kind: "choice",
          about: "cennik-v-magazine",
          prompt: "Посмотри на ценник SHOP. Что стоит дороже всего?",
          options: [
            { text: "Камера", correct: true },
            { text: "Книга" },
            { text: "Два карандаша" },
          ],
          hint: "Сравни четыре числа и выбери самое большое.",
          why: "A camera — 90. Девяносто больше, чем 15, 4 и 3.",
        },
        {
          id: "z3-skolko-uchenikov",
          kind: "short",
          about: "obyavlenie-o-gruppe",
          prompt:
            "Посмотри на объявление ENGLISH LESSONS. Сколько в группе учеников? " +
            "Ответь цифрой.",
          answer: "12",
          accept: ["twelve", "двенадцать"],
          hint: "Строка Students называет число людей, а не цену.",
          why: "Students: 12. Двенадцать учеников.",
        },
        {
          id: "z4-vozrast-gruppy",
          kind: "choice",
          about: "obyavlenie-o-gruppe",
          prompt:
            "Посмотри на объявление ENGLISH LESSONS. Возьмут ли в группу человека " +
            "четырнадцати лет?",
          options: [
            { text: "Нет, он младше", correct: true },
            { text: "Да, возраст подходит" },
            { text: "Про возраст в объявлении не сказано" },
          ],
          hint: "Строка Age называет два числа: от какого возраста и до какого.",
          why:
            "Age: 15 — 20. Тире между числами значит «с … до …». Четырнадцать меньше " +
            "пятнадцати, значит не подходит.",
        },
        {
          id: "z5-nomer-po-cifram",
          kind: "short",
          about: "obyavlenie-o-gruppe",
          prompt:
            "Посмотри на объявление ENGLISH LESSONS. Какая цифра в телефоне идёт " +
            "третьей? Ответь цифрой.",
          answer: "1",
          accept: ["one", "один"],
          hint: "Цифры в номере читают по одной: восемь, семь, один…",
          why: "Phone: 8 7 1 2 3 4 5. Третья цифра — 1, one.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-chisla",
      title: "Слушаем числа",
      estimatedMinutes: 13,
      outcome: "различать на слух похожие числа и понимать цену в разговоре",

      blocks: [
        {
          id: "zachem-slushat-chisla",
          kind: "explain",
          text: [
            "Числа на слух путают чаще всего остального. И путают не любые, а пары " +
              "вроде fifteen и fifty: у них одинаковое начало.",
            "Различает их ударение. В fifteen сильнее звучит вторая часть, в fifty — " +
              "первая. Послушай эту разницу, прежде чем отвечать.",
          ],
        },
        {
          id: "pary-chisel",
          kind: "table",
          caption: "Пары, которые путают — нажми, чтобы услышать",
          zvuk: {
            thirteen: "thirteen",
            thirty: "thirty",
            fifteen: "fifteen",
            fifty: "fifty",
            eighteen: "eighteen",
            eighty: "eighty",
          },
          head: ["Меньшее", "Большее"],
          rows: [
            ["thirteen", "thirty"],
            ["fifteen", "fifty"],
            ["eighteen", "eighty"],
          ],
        },
        {
          id: "gde-udarenie",
          kind: "note",
          tone: "info",
          text:
            "У чисел на -teen ударение падает на конец: /θɜːˈtiːn/. У десятков на -ty " +
              "оно в начале: /ˈθɜːti/. Конец слова при этом звучит совсем коротко, и " +
              "поймать его труднее, чем ударение.",
        },
        {
          id: "zapis-cena-v-magazine",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор в магазине",
          transcript:
            "How much is it? — It is thirty. — And this camera? — Ninety.",
        },
        {
          id: "zapis-vozrast-i-chislo",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай, что говорят о группе",
          transcript: "My sister is thirteen. There are fourteen students.",
        },

        // ---- задания ----
        {
          id: "z1-skolko-stoit-na-sluh",
          kind: "choice",
          about: "zapis-cena-v-magazine",
          prompt: "Послушай разговор. Какова первая названная цена?",
          options: [
            { text: "13" },
            { text: "30", correct: true },
            { text: "3" },
          ],
          hint: "Слушай, где сильнее звучит слово: в начале или в конце.",
          why:
            "It is thirty. В thirty ударение на первой части, и конец звучит коротко. " +
            "У thirteen ударение было бы на конце.",
        },
        {
          id: "z2-cena-kamery",
          kind: "short",
          about: "zapis-cena-v-magazine",
          prompt: "Послушай разговор. Сколько стоит камера? Ответь цифрой.",
          answer: "90",
          accept: ["ninety", "девяносто"],
          hint: "Это последнее слово записи.",
          why: "Ninety. Девяносто.",
        },
        {
          id: "z3-vozrast-sestry",
          kind: "short",
          about: "zapis-vozrast-i-chislo",
          prompt: "Послушай вторую запись. Сколько лет сестре? Ответь цифрой.",
          answer: "13",
          accept: ["thirteen", "тринадцать"],
          hint: "Ударение здесь падает на конец слова.",
          why: "My sister is thirteen. Тринадцать, а не тридцать: ударение в конце.",
        },
        {
          id: "z4-skolko-uchenikov-na-sluh",
          kind: "choice",
          about: "zapis-vozrast-i-chislo",
          prompt: "Послушай вторую запись. Сколько в группе учеников?",
          options: [
            { text: "40" },
            { text: "14", correct: true },
            { text: "4" },
          ],
          hint: "Опять слушай, куда падает ударение.",
          why: "There are fourteen students. Четырнадцать: ударение на конце слова.",
        },
        {
          id: "z5-skazat-paru",
          kind: "speak",
          prompt:
            "Произнеси вслух пару так, чтобы разница была слышна: сначала меньшее " +
            "число, потом большее.",
          phrase: "Fifteen. Fifty.",
          translation: "Пятнадцать. Пятьдесят.",
          hint: "В первом слове нажми на конец, во втором — на начало.",
          why:
            "Fifteen и fifty различает только ударение, и произносить его надо " +
            "заметно: иначе собеседник услышит не то число.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 21, спрашиваем девять — по одному на каждый из девяти итогов.
  // =======================================================================
  quiz: {
    ask: 9,
    passRatio: 0.8,
    questions: [
      // ---- чтение и слушание ------------------------------------------
      // Другой случай и другой вид задания, чем в уроках: там ценник магазина
      // и объявление о занятиях, здесь расписание и счёт в кафе.
      {
        id: "q-raspisanie-skolko-stoit",
        kind: "choice",
        outcome: "находить в объявлении цену и количество",
        prompt:
          "Объявление: «BUS 5. Ticket — 40. Students — 20.» Сколько заплатит ученик?",
        options: [
          { text: "20", correct: true },
          { text: "40" },
          { text: "5" },
        ],
        why:
          "Students — 20. Для учеников цена отдельная. Сорок — обычный билет, а пять — " +
          "номер автобуса.",
      },
      {
        id: "q-ispravit-cenu",
        kind: "short",
        outcome: "находить в объявлении цену и количество",
        prompt:
          "На ценнике стоит «A book — 50», а человек пересказал это как «The book is " +
          "fifteen». Он назвал не то число. Напиши верное английское слово.",
        answer: "fifty",
        why: "A book — 50, то есть fifty. Fifteen — это 15.",
      },
      {
        id: "q-na-sluh-vozrast",
        kind: "short",
        outcome: "различать на слух похожие числа и понимать цену в разговоре",
        zvuk: "How old is your brother? — He is sixteen.",
        prompt: "Послушай запись. Сколько лет брату? Ответь цифрой.",
        answer: "16",
        accept: ["sixteen", "шестнадцать"],
        why: "He is sixteen. Шестнадцать: ударение падает на конец слова.",
      },
      {
        id: "q-na-sluh-skolko-platit",
        kind: "choice",
        outcome: "различать на слух похожие числа и понимать цену в разговоре",
        zvuk: "Two tickets, please. — It is forty.",
        prompt: "Послушай запись. Сколько нужно заплатить?",
        options: [
          { text: "14" },
          { text: "4" },
          { text: "40", correct: true },
        ],
        why:
          "It is forty. Сорок: ударение в начале слова. У fourteen оно было бы на " +
          "конце.",
      },
      {
        id: "q-chislo-slovom",
        kind: "short",
        outcome: "называть числа от одного до десяти",
        prompt: "Напиши словом число 9.",
        answer: "nine",
        accept: ["Nine"],
        why: "Nine — девять. Не путай с nineteen (19).",
      },
      {
        id: "q-nechitaemye-bukvy",
        kind: "choice",
        outcome: "называть числа от одного до десяти",
        prompt: "В каком числе есть буквы, которые не читаются?",
        options: [{ text: "ten" }, { text: "six" }, { text: "two", correct: true }],
        why: "Two — буква w не читается: /tuː/.",
      },
      {
        id: "q-sobrat-13",
        kind: "choice",
        outcome: "называть числа от одиннадцати до двадцати",
        prompt: "Как правильно написать 15?",
        options: [{ text: "fifteen", correct: true }, { text: "fiveteen" }, { text: "fivteen" }],
        why: "Fifteen. Слово five при сборке меняется на fif-.",
      },
      {
        id: "q-napisat-14",
        kind: "short",
        outcome: "называть числа от одиннадцати до двадцати",
        prompt: "Напиши словом число 14.",
        answer: "fourteen",
        accept: ["Fourteen"],
        why: "Fourteen. Слово four не меняется, к нему прибавляется -teen.",
      },
      {
        id: "q-sprosit-vozrast",
        kind: "short",
        outcome: "говорить свой возраст и спрашивать о возрасте",
        // Было «спроси, сколько лет ей» — задание урока с заменённым местоимением.
        // Теперь на этот вопрос надо ответить, а не задать его заново.
        prompt: "«How old is your sister?» Ей девятнадцать. Ответь целым предложением.",
        answer: "She's nineteen.",
        accept: ["She is nineteen.", "She's nineteen", "She is nineteen"],
        why: "She's nineteen. Возраст называют без слова years, а форма be идёт от she.",
      },
      {
        id: "q-oshibka-vozrasta",
        kind: "choice",
        outcome: "говорить свой возраст и спрашивать о возрасте",
        prompt: "Как сказать «мне двадцать»?",
        options: [
          { text: "I have twenty years." },
          { text: "I'm twenty.", correct: true },
          { text: "I'm twenty year." },
        ],
        why: "I'm twenty. Возраст выражают глаголом be, а не have got.",
      },
      {
        id: "q-many-mnozhestvennoe",
        kind: "gap",
        outcome: "спрашивать и коротко отвечать, сколько предметов: How many?",
        prompt: "Допиши название во множественном: «сколько машин?»",
        before: "How many ",
        after: "?",
        answer: "cars",
        why: "How many cars? После many название стоит во множественном.",
      },
      {
        id: "q-otvet-na-many",
        // Было то же задание, что в уроке, с заменённым числом и словом: те же два
        // неверных варианта, тот же вид работы. Теперь негодные ответы надо найти
        // среди четырёх, а не выбрать верный из трёх.
        kind: "hottext",
        outcome: "спрашивать и коротко отвечать, сколько предметов: How many?",
        prompt: "Отметь ответы, которые на вопрос «How many books?» не годятся.",
        parts: [
          { text: "Seven.", selectable: true },
          { text: " · " },
          { text: "I'm seven.", selectable: true, correct: true },
          { text: " · " },
          { text: "Seven books.", selectable: true },
          { text: " · " },
          { text: "Seven years.", selectable: true, correct: true },
        ],
        why:
          "«I'm seven» говорит о возрасте, «seven years» — о годах. На вопрос о количестве " +
          "отвечают числом или числом с названием предмета.",
      },
      {
        id: "q-cena-vopros",
        kind: "short",
        outcome: "спрашивать цену: How much is it?",
        prompt: "Спроси цену нескольких предметов. Запиши вопрос целиком.",
        answer: "How much are they?",
        accept: ["How much are they"],
        why: "How much are they? Слово much не меняется от числа предметов — меняется только форма be.",
      },
      {
        id: "q-much-ili-many-quiz",
        kind: "choice",
        outcome: "спрашивать цену: How much is it?",
        prompt: "Какое слово спрашивает о цене?",
        options: [{ text: "many" }, { text: "old" }, { text: "much", correct: true }],
        why: "Much. Many спрашивает о количестве штук, old — о возрасте.",
      },
      {
        id: "q-sorok",
        // Было узнавание из тех же трёх строк, что в задании урока. Число то же —
        // выпадение u бывает только у него, — но написать его теперь надо самому.
        kind: "gap",
        outcome: "называть числа от двадцати до ста",
        prompt: "Допиши число словом: тебе 40 лет.",
        before: "I'm ",
        after: ".",
        answer: "forty",
        accept: ["Forty"],
        why: "Forty. Буква u из four выпадает — это единственное такое число.",
      },
      {
        id: "q-sostavnoe-chislo",
        kind: "short",
        outcome: "называть числа от двадцати до ста",
        // Было 48 — ровно та пара, что стоит готовым примером в таблице урока.
        prompt: "Напиши словом число 76.",
        answer: "seventy-six",
        accept: ["Seventy-six", "seventy six"],
        why: "Seventy-six. Семьдесят и шесть соединились в одно слово, а на месте склейки — дефис.",
      },
      {
        id: "q-teen-ili-ty",
        kind: "hottext",
        outcome: "называть числа от двадцати до ста",
        prompt: "Отметь слова, которые называют десятки.",
        parts: [
          { text: "seventeen", selectable: true },
          { text: " · " },
          { text: "seventy", selectable: true, correct: true },
          { text: " · " },
          { text: "thirty", selectable: true, correct: true },
          { text: " · " },
          { text: "thirteen", selectable: true },
        ],
        why: "Seventy (70) и thirty (30) — десятки, у них окончание -ty. У 17 и 13 окончание -teen.",
      },
      {
        id: "q-nomer-po-cifram",
        kind: "choice",
        outcome: "диктовать номер по одной цифре",
        // Номер 12 и ответ «one — two» стояли и в таблице урока, и в задании. А
        // неверный вариант «one hundred two» — чтение числа 102, не двенадцати:
        // так не ошибётся никто. Взят другой номер и настоящая ошибка — назвать
        // число целиком.
        prompt: "Как назовут номер комнаты 63?",
        options: [
          { text: "six — three", correct: true },
          { text: "sixty-three" },
          { text: "six hundred three" },
        ],
        why: "Six — three. Номер называют по одной цифре, чтобы собеседник успел записать.",
      },
      {
        id: "q-zapisat-nomer-quiz",
        kind: "short",
        outcome: "диктовать номер по одной цифре",
        prompt: "Продиктовали: nine — zero — four. Запиши номер цифрами, без пробелов.",
        answer: "904",
        why: "904. Записывать цифрами не ошибка.",
      },
      {
        id: "q-some-ili-a",
        kind: "choice",
        outcome: "говорить о количестве, не называя точного числа: some и a lot of",
        prompt: "Как сказать «несколько ключей»?",
        options: [{ text: "a keys" }, { text: "some key" }, { text: "some keys", correct: true }],
        why: "Some keys. После some название во множественном, а артикль a с ним не сочетается.",
      },
      {
        id: "q-a-lot-of-celikom",
        kind: "gap",
        outcome: "говорить о количестве, не называя точного числа: some и a lot of",
        prompt: "Допиши недостающее слово: «много людей».",
        before: "a lot ",
        after: " people",
        answer: "of",
        why: "A lot of people. Без of выйдет «a lot people», а так не говорят: слово of держит оборот вместе.",
      },
      {
        id: "q-tri-voprosa",
        // Было сопоставление тех же трёх пар, что в задании урока, только
        // перетасованных. Теперь вопрос надо выбрать под случай.
        kind: "choice",
        outcome: "вести короткий разговор о возрасте, количестве и цене",
        prompt: "Ты хочешь узнать, сколько стоит книга. Какой вопрос задать?",
        options: [
          { text: "How much is it?", correct: true },
          { text: "How many is it?" },
          { text: "How old is it?" },
        ],
        why: "How much is it? О цене спрашивают через much, о количестве штук — через many.",
      },
      {
        id: "q-sobrat-razgovor-chisla-quiz",
        kind: "order",
        outcome: "вести короткий разговор о возрасте, количестве и цене",
        prompt: "Расставь реплики по порядку.",
        items: ["I'm twenty.", "How old are you?", "And you?"],
        answer: [1, 0, 2],
        why: "How old are you? — I'm twenty. — And you?",
      },
      {
        id: "q-chislo-i-mnozhestvennoe",
        kind: "short",
        outcome: "называть числа от одного до десяти",
        prompt: "Напиши по-английски «три ключа» — число словом.",
        answer: "three keys",
        accept: ["Three keys"],
        why: "Three keys. После числа больше одного название во множественном, артикль не нужен.",
      },
      {
        id: "q-otvetit-o-svoyom-vozraste",
        kind: "gap",
        outcome: "говорить свой возраст и спрашивать о возрасте",
        prompt: "Тебе восемнадцать. Допиши ответ: число словом.",
        before: "I'm ",
        after: ".",
        answer: "eighteen",
        why: "I'm eighteen. Слово years необязательно.",
      },
    ],
  },
};

export default module;
