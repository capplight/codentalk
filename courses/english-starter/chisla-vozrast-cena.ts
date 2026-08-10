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
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
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
        "числа до двадцати разбираются подробно, а дальше только десятки; и в заданиях " +
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
    "называет числа от одного до десяти",
    "называет числа от одиннадцати до двадцати",
    "говорит свой возраст и спрашивает о возрасте",
    "спрашивает, сколько предметов: How many?",
    "спрашивает цену: How much is it?",
    "диктует номер по одной цифре",
    "говорит о количестве, не называя точного числа: some и a lot of",
    "ведёт короткий разговор о возрасте, количестве и цене",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "chisla-do-desyati",
      title: "Числа от одного до десяти",
      estimatedMinutes: 13,
      outcome: "называет числа от одного до десяти",

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
            "В слове two буква w не читается: /tuː/. То же в eight — там не читается gh: " +
            "/eɪt/. Осторожно: в модуле про алфавит сочетание ight давало /aɪt/ в night, а " +
            "здесь оно звучит /eɪt/. Тот самый случай, о котором там и предупреждали: " +
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
            "five keys. Слово a при этом не нужно — число само говорит, сколько их.",
        },
        {
          id: "zapis-do-desyati",
          kind: "audio",
          planned: true,
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
          hint: "Слово a здесь не нужно, а к book прибавляется буква.",
          why: "Two books. Число само говорит, сколько предметов, поэтому a не ставят.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chisla-do-dvadcati",
      title: "От одиннадцати до двадцати",
      estimatedMinutes: 13,
      outcome: "называет числа от одиннадцати до двадцати",

      blocks: [
        {
          id: "zachem-vtoroy-desyatok",
          kind: "explain",
          text: [
            "Второй десяток источник называет отдельно: на кембриджском экзамене для " +
              "начинающих звучат числа только до двадцати, и их отрабатывают особо. " +
              "Значит, и нам дальше пока идти не нужно.",
            "Одиннадцать и двенадцать приходится запомнить: eleven, twelve. Дальше проще — " +
              "к знакомому числу прибавляется -teen.",
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
            "Окончание -teen значит «плюс десять», окончание -ty — «десятков». Отсюда " +
            "разница между fourteen (14) и forty (40) — и заметь, что four при этом теряет " +
            "букву u. Десятки будут дальше, а пока хватит первых двадцати.",
        },
        {
          id: "zapis-vtoroy-desyatok",
          kind: "audio",
          planned: true,
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
      outcome: "говорит свой возраст и спрашивает о возрасте",

      blocks: [
        {
          id: "zachem-vozrast",
          kind: "explain",
          text: [
            "Описание первой ступени называет это умение прямо: сказать, сколько тебе лет, " +
              "и спросить об этом другого.",
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
            "Слово «лет» в ответе не обязательно: «I'm twenty» и «I'm twenty years old» — " +
            "обе записи верны, и вторая стоит в самом описании ступени. Короткой проще " +
            "начать, поэтому в заданиях спрашиваем её.",
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
          planned: true,
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
      outcome: "спрашивает, сколько предметов: How many?",

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
            "На такой вопрос отвечают одним числом — этого достаточно. Руководство для " +
            "младших ступеней прямо советует отрабатывать ответы одним словом.",
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
          planned: true,
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
      outcome: "спрашивает цену: How much is it?",

      blocks: [
        {
          id: "zachem-how-much",
          kind: "explain",
          text: [
            "Про цену спрашивают другим словом: How much is it? — «сколько это стоит?» " +
              "Описания ступеней называют цены прямо: их нужно узнавать в объявлениях и на " +
              "ценниках, а самому — называть числа, количество и стоимость.",
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
          planned: true,
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
            { term: "price", translation: "цена", example: "the price of a ticket", hint: "/praɪs/" },
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
      outcome: "диктует номер по одной цифре",

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
            ["77", "seven — seven", "часть телефона"],
          ],
        },
        {
          id: "zero-i-oh",
          kind: "note",
          tone: "info",
          text:
            "Ноль по-английски zero, произношение /ˈzɪərəʊ/. Это единственное слово " +
            "модуля, которое стоит ступенью выше остальных, — но без него номер не " +
            "продиктовать.",
        },
        {
          id: "cifroy-tozhe-verno",
          kind: "note",
          tone: "info",
          text:
            "Записывать число цифрой — не ошибка. Руководство для младших ступеней прямо " +
            "советует писать цифрами, чтобы не ошибиться в написании слова. В заданиях " +
            "курса цифра тоже засчитывается, если не сказано «словом».",
        },
        {
          id: "zapis-nomerov",
          kind: "audio",
          planned: true,
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
          why: "742. Записывать номер цифрами не ошибка — так даже советуют на экзамене.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "some-i-a-lot-of",
      title: "Много и несколько: some и a lot of",
      estimatedMinutes: 12,
      outcome: "говорит о количестве, не называя точного числа: some и a lot of",

      blocks: [
        {
          id: "zachem-some",
          kind: "explain",
          text: [
            "Не всегда нужно называть точное число. «Несколько книг», «много друзей» — " +
              "по-английски some books, a lot of friends.",
            "Оба оборота названы в описании ступени вместе с числами, так что учить их " +
              "стоит рядом.",
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
          planned: true,
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
            "слово a стоит перед множественным числом — так не бывает.",
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
      outcome: "ведёт короткий разговор о возрасте, количестве и цене",

      blocks: [
        {
          id: "zachem-razgovor-chisla",
          kind: "explain",
          text: [
            "Про числа пройдено всё: счёт, возраст, количество, цена, номер. Соберём это " +
              "в разговор — такой, какой случается в магазине и при знакомстве.",
            "Три вопроса держат весь разговор: How old…? How many…? How much…?",
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
          planned: true,
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
        id: "q-chislo-slovom",
        kind: "short",
        outcome: "называет числа от одного до десяти",
        prompt: "Напиши словом число 9.",
        answer: "nine",
        accept: ["Nine"],
        why: "Nine — девять. Не путай с nineteen (19).",
      },
      {
        id: "q-nechitaemye-bukvy",
        kind: "choice",
        outcome: "называет числа от одного до десяти",
        prompt: "В каком числе есть буквы, которые не читаются?",
        options: [{ text: "ten" }, { text: "six" }, { text: "two", correct: true }],
        why: "Two — буква w не читается: /tuː/.",
      },
      {
        id: "q-sobrat-13",
        kind: "choice",
        outcome: "называет числа от одиннадцати до двадцати",
        prompt: "Как правильно написать 15?",
        options: [{ text: "fifteen", correct: true }, { text: "fiveteen" }, { text: "fivteen" }],
        why: "Fifteen. Слово five при сборке меняется на fif-.",
      },
      {
        id: "q-napisat-14",
        kind: "short",
        outcome: "называет числа от одиннадцати до двадцати",
        prompt: "Напиши словом число 14.",
        answer: "fourteen",
        accept: ["Fourteen"],
        why: "Fourteen. Слово four не меняется, к нему прибавляется -teen.",
      },
      {
        id: "q-sprosit-vozrast",
        kind: "short",
        outcome: "говорит свой возраст и спрашивает о возрасте",
        prompt: "Спроси, сколько лет ей. Запиши вопрос целиком.",
        answer: "How old is she?",
        accept: ["How old is she"],
        why: "How old is she? С she идёт форма is.",
      },
      {
        id: "q-oshibka-vozrasta",
        kind: "choice",
        outcome: "говорит свой возраст и спрашивает о возрасте",
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
        outcome: "спрашивает, сколько предметов: How many?",
        prompt: "Допиши название во множественном: «сколько машин?»",
        before: "How many ",
        after: "?",
        answer: "cars",
        why: "How many cars? После many название стоит во множественном.",
      },
      {
        id: "q-otvet-na-many",
        kind: "choice",
        outcome: "спрашивает, сколько предметов: How many?",
        prompt: "«How many friends?» У тебя пять друзей. Что ответить?",
        options: [{ text: "I'm five." }, { text: "Five.", correct: true }, { text: "Five old." }],
        why: "Five. Одного числа достаточно; «I'm five» говорит о возрасте.",
      },
      {
        id: "q-cena-vopros",
        kind: "short",
        outcome: "спрашивает цену: How much is it?",
        prompt: "Спроси цену нескольких предметов. Запиши вопрос целиком.",
        answer: "How much are they?",
        accept: ["How much are they"],
        why: "How much are they? О цене спрашивают через much, даже когда предметов несколько.",
      },
      {
        id: "q-much-ili-many-quiz",
        kind: "choice",
        outcome: "спрашивает цену: How much is it?",
        prompt: "Какое слово спрашивает о цене?",
        options: [{ text: "many" }, { text: "old" }, { text: "much", correct: true }],
        why: "Much. Many спрашивает о количестве штук, old — о возрасте.",
      },
      {
        id: "q-nomer-po-cifram",
        kind: "choice",
        outcome: "диктует номер по одной цифре",
        prompt: "Как назовут номер комнаты 12?",
        options: [
          { text: "one — two", correct: true },
          { text: "twelve" },
          { text: "one hundred two" },
        ],
        why: "One — two. Номер называют по одной цифре, чтобы собеседник успел записать.",
      },
      {
        id: "q-zapisat-nomer-quiz",
        kind: "short",
        outcome: "диктует номер по одной цифре",
        prompt: "Продиктовали: nine — zero — four. Запиши номер цифрами, без пробелов.",
        answer: "904",
        why: "904. Записывать цифрами не ошибка.",
      },
      {
        id: "q-some-ili-a",
        kind: "choice",
        outcome: "говорит о количестве, не называя точного числа: some и a lot of",
        prompt: "Как сказать «несколько ключей»?",
        options: [{ text: "a keys" }, { text: "some key" }, { text: "some keys", correct: true }],
        why: "Some keys. После some название во множественном, а слово a с ним не сочетается.",
      },
      {
        id: "q-a-lot-of-celikom",
        kind: "gap",
        outcome: "говорит о количестве, не называя точного числа: some и a lot of",
        prompt: "Допиши недостающее слово: «много людей».",
        before: "a lot ",
        after: " people",
        answer: "of",
        why: "A lot of people. Оборот состоит из трёх слов и не разделяется.",
      },
      {
        id: "q-tri-voprosa",
        kind: "match",
        outcome: "ведёт короткий разговор о возрасте, количестве и цене",
        prompt: "Сопоставь вопрос и то, о чём он.",
        left: ["How much is it?", "How old are you?", "How many books?"],
        right: ["о возрасте", "о количестве", "о цене"],
        answer: [2, 0, 1],
        why: "How much — о цене, how old — о возрасте, how many — о количестве.",
      },
      {
        id: "q-sobrat-razgovor-chisla-quiz",
        kind: "order",
        outcome: "ведёт короткий разговор о возрасте, количестве и цене",
        prompt: "Расставь реплики по порядку.",
        items: ["I'm twenty.", "How old are you?", "And you?"],
        answer: [1, 0, 2],
        why: "How old are you? — I'm twenty. — And you?",
      },
      {
        id: "q-chislo-i-mnozhestvennoe",
        kind: "short",
        outcome: "называет числа от одного до десяти",
        prompt: "Напиши по-английски «три ключа» — число словом.",
        answer: "three keys",
        accept: ["Three keys"],
        why: "Three keys. После числа больше одного название во множественном, слово a не нужно.",
      },
      {
        id: "q-otvetit-o-svoyom-vozraste",
        kind: "gap",
        outcome: "говорит свой возраст и спрашивает о возрасте",
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
