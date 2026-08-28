import type { Module } from "@/lib/content/types";

/**
 * Модуль 30 курса «Английский · Elementary»: который.
 *
 * Программа: docs/programma-english-elementary.md, модуль 30 — «описывать
 * человека и вещь придаточным»; грамматика: `who` о том, кто действует, `which`
 * и `that` о вещи, место придаточного. Строка проверена 29 августа 2026, до
 * написания; разбор с цитатами — там же.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ МОДУЛЯ — «ОПИСАНИЕ», а то, к чему оно относится, зовётся
 * «словом, которое описываешь».
 *
 * ПЕРВАЯ РЕДАКЦИЯ БРАЛА ДЛЯ ВТОРОГО ФОРМУЛУ «ТОТ, О КОМ РЕЧЬ» И ПИСАЛА, ЧТО
 * КУРС ЕЁ УЖЕ ДЕРЖИТ. Курс её держит, но за другой вещью: двадцать шесть
 * вхождений в двенадцати модулях, и во всех «тот, о ком речь» — это
 * ПОДЛЕЖАЩЕЕ. Модуль 27: «Слово умения стоит сразу после того, о ком речь».
 * Модуль 30 пятнадцать раз брал ту же формулу под слово, к которому идёт
 * описание, — а в трёх строках его же таблицы это слово подлежащим не
 * является: «I have a friend who…», «This is my sister who…». Ученик,
 * прошедший двадцать девять модулей, поставил бы `who` за словом `I`.
 * Нашёл методист.
 *
 * И «о КОМ» стояло над сумкой, конвертом и фильмом — в модуле, который как раз
 * учит различать «кто» и «что». Это заметил редактор.
 *
 * ПРОВЕРКА ПО КУРСУ СДЕЛАНА ПЕРВОЙ — ТАК ТЕПЕРЬ ЗАВЕДЕНО. Придаточных в курсе
 * нет нигде: `who` встречается только вопросительным словом, `which` — только
 * внутри цитат из источников, `that` — указательным местоимением («that shop»)
 * и союзом при `say` и `hope`. Ни одного описания вроде «a friend who lives
 * here» ученик не видел, и строка свободна целиком.
 *
 * ИСТОЧНИКИ СОГЛАСНЫ, МЕРКА СТУПЕНИ НЕ НУЖНА. Руководство A2 Key, с. 52,
 * перечень Pronouns: «Relative: who, which, that». English Grammar Profile
 * даёт семь граф A2 в подкатегории `CLAUSES relative`.
 *
 * НО РАСКЛАДКА У ГРАФ НЕОЖИДАННАЯ, И ОНА ЗАДАЁТ УСТРОЙСТВО МОДУЛЯ:
 *
 * - **`who` — только о том, кто сам действует** (обе графы A2 — «SUBJECT»).
 *   В роли дополнения `who` стоит на B1.
 * - **`which` — и о том, что действует, и о том, с чем действуют** (четыре
 *   графы A2: subject и object, defining и non-defining).
 * - **`that` — только о том, с чем действуют**: единственная графа A2 —
 *   «FORM: DEFINING, OBJECT, WITH 'THAT'».
 *
 * ИЗ ЭТОГО НЕ СЛЕДУЕТ ЗАПРЕТА, И МОДУЛЬ ЕГО НЕ ДЕЛАЕТ. Графа — разрешение;
 * «the man that lives here» английскому не противоречит. Модуль учит своему
 * случаю: о человеке берём `who`, о вещи — `which` или `that`. Слов «только
 * так» и «так нельзя» про выбор местоимения в уроках нет.
 *
 * ПОЧЕМУ ЭТО НАДО ОГОВАРИВАТЬ ОТДЕЛЬНО. За две недели я трижды вывел из графы
 * запрет, которого у источника нет: модуль 7 («после `when` только законченное
 * действие»), модуль 10 («есть время в строке — значит договорённость»), модуль
 * 25 («о третьем лице только `has to`»). Каждый раз курс начинал объявлять
 * ошибкой безупречный английский.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ВСЁ ЭТО ВЫШЕ СТУПЕНИ: `where` и `when` придаточными
 * (оба B1), `whose` (B1 и B2), `the reason why` (B1), `the thing that` для
 * выделения (B1), придаточное с предлогом на конце (B1), оценочное придаточное
 * ко всему предложению (B2). Проверены по одной.
 *
 * ОПУЩЕННОЕ МЕСТОИМЕНИЕ («the clothes I wore») — A2, графа «FORM: DEFINING,
 * WITHOUT PRONOUN». В модуль не взято: три способа сказать одно и то же на этой
 * ступени довольно, а четвёртый — выбор, который нечем обосновать.
 *
 * СЛОВАРЬ МОДУЛЯ — ПЯТНАДЦАТЬ КАРТОЧЕК, ВСЕ НОВЫЕ ДЛЯ СТУПЕНИ. Мир модуля —
 * люди и вещи: их и надо описывать придаточным, поэтому слова тут работают
 * сами собой, а не подбираются под счёт.
 *
 * ДВА СЛОВА OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ОБА ВЗЯТЫ ПО МЕРКЕ СТУПЕНИ: discount
 * (B1) и contact (B1); оба стоят в словнике A2 Key, то есть входят в
 * требования экзамена.
 *
 * ТРАНСКРИПЦИЯ ДВУХ СОСТАВНЫХ ЗАПИСЕЙ ВЗЯТА ПО СЛОВАРНОЙ НОРМЕ: `ipa-en-uk`
 * многословных не знает. Ударение на первом слове — `/dɪˈpɑːtmənt stɔː/`,
 * `/fə ˈseɪl/` (у второго первое слово предлог, и потому ударение на втором).
 * Тот же ряд, что `car park` в модуле 29.
 */
const module: Module = {
  slug: "kotoryy",
  title: "Который",

  outcomes: [
    "описывать человека по тому, что он делает: a friend who lives in Almaty",
    "описывать вещь: the bag which is on the table",
    "ставить описание сразу за словом, которое описываешь: The film that I watched was long",
    "находить в письме, кого и что описывают",
    "слышать в разговоре, о каком человеке или вещи речь",
    "проверять подпись к снимку: назван человек, дано описание и сказано, чем он важен",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОК 1. CLAUSES, relative, A2, «FORM: DEFINING, SUBJECT, WITH 'WHO'» " +
        "— «Can use a defining relative clause with 'who' as the subject», " +
        "примеры «It's about a girl who went to the war when she was 22 years " +
        "old», «I'd like a pen-friend who really likes music and reading». И " +
        "A2, «FORM: NON-DEFINING, SUBJECT, WITH 'WHO'» — «Can use a " +
        "non-defining relative clause with 'who' as the subject», пример «I " +
        "watched it with my brother who was also interested in sports». " +
        "ОБЕ ГРАФЫ `WHO` НА A2 — ПРО ПОДЛЕЖАЩЕЕ. В роли дополнения `who` стоит " +
        "на B1: «FORM: DEFINING, OBJECT, WITH 'WHO/THAT'», пример «My friends " +
        "are the people who I love most». Поэтому урок 1 учит `who` только о " +
        "том, кто сам действует. " +
        "УРОК 2. CLAUSES, relative, A2, «FORM: DEFINING, SUBJECT, WITH " +
        "'WHICH'» — примеры «a piece of music which makes me cry», «You should " +
        "wear clothes which can get dirty». A2, «FORM: DEFINING, OBJECT, WITH " +
        "'WHICH'» — примеры «the computer game which I borrowed from Mayank», " +
        "«The coffee-cup which my good friend gave me is pretty». A2, «FORM: " +
        "NON-DEFINING, SUBJECT, WITH 'WHICH'» — «I bought it in Peter's Mobile " +
        "shop, which is near to my home». A2, «FORM: NON-DEFINING, OBJECT, " +
        "WITH 'WHICH'» — «The best of all was a marble statue which my aunt " +
        "gave me». " +
        "УРОК 3. CLAUSES, relative, A2, «FORM: DEFINING, OBJECT, WITH 'THAT'» " +
        "— «Can use a defining relative clause with 'that' as the object», " +
        "примеры «The team that I like is called 'The Monkeys'», «I bought " +
        "some clothes that I will need for my trip to Greece». " +
        "МЕСТО ОПИСАНИЯ ПОДПЁРТО ОТДЕЛЬНО: NOUNS, noun phrases, A2, «FORM: " +
        "WITH RELATIVE CLAUSE AS COMPLEMENT» — «Can form complex noun phrases " +
        "by using a defining relative clause as a complement to a noun " +
        "phrase», примеры «The mobile phone which I bought yesterday is " +
        "brilliant», «The person who gave me it was my father». Там же A2, " +
        "«FORM: WITH RELATIVE CLAUSE AS POSTMODIFIER». " +
        "ГРАФЫ «`that` КАК ПОДЛЕЖАЩЕЕ» НА A2 НЕ НАШЁЛ — искал по всем " +
        "девятнадцати строкам подкатегории `relative`. ЗАПРЕТА ИЗ ЭТОГО МОДУЛЬ " +
        "НЕ ДЕЛАЕТ: графа — разрешение, и «the man that lives here» " +
        "английскому не противоречит. Модуль учит своему случаю. " +
        "ЧЕГО НЕТ, И ВСЁ ЭТО ВЫШЕ СТУПЕНИ: `where` («FORM: WITH 'WHERE', " +
        "PLACE», B1); `when` («FORM/USE: 'WHEN', FOCUS», B1); `whose` («FORM: " +
        "WITH 'WHOSE NAME'», B1, и две графы B2); `the reason why` (B1); `the " +
        "thing that` для выделения («FORM/USE: 'THE' + NOUN + 'WHO/THAT', " +
        "FOCUS», B1); придаточное с предлогом на конце (PREPOSITIONS, «FORM: " +
        "STRANDING», B1); оценочное придаточное ко всему предложению (B2). " +
        "ОПУЩЕННОЕ МЕСТОИМЕНИЕ — A2, «FORM: DEFINING, WITHOUT PRONOUN», пример " +
        "«the clothes I wore». В модуль не взято: три способа сказать одно и то " +
        "же на этой ступени довольно. " +
        "ДВА ОБОРОТА В МОДУЛЕ ЗВУЧАТ И ПОТОМУ ОБЪЯВЛЯЮТСЯ ЗДЕСЬ, оба A2. " +
        "`a friend of mine` — PRONOUNS possessive, A2, «FORM: + 'OF MINE'»: " +
        "«Can use the possessive pronoun 'mine' after 'of' in the phrases 'a " +
        "friend of mine' and 'friends of mine'». `the one who…` и `the one " +
        "that…` — PRONOUNS substitution, A2, «FORM: 'ONE'», вместе с графами " +
        "придаточных; модуль 20 уже дал `the one with silver gates`. " +
        "ОСТОРОЖНО: графа B1 «FORM/USE: 'THE' + NOUN + 'WHO/THAT', FOCUS» " +
        "выглядит похоже, но она про выделение — «the person who», «the thing " +
        "that» вместо простого имени. Здесь `the one` заменяет уже названную " +
        "вещь, а это подстановка. Оба оборота назвал методист",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень Pronouns: «Relative: who, " +
        "which, that» — все три местоимения модуля названы прямо, и других в " +
        "перечне нет. " +
        "УРОК 5, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем письмо о снимках». с. 55, шкала «Reading " +
        "correspondence», графа A2: «Can understand short, simple personal " +
        "letters» — письмо со снимками написано другу, и потому шкала " +
        "здесь именно эта. " +
        "УРОК ПИСЬМА «Пишем о снимке». с. 67, шкала «Creative writing», " +
        "графа A2: «Can describe everyday aspects of their environment e.g. " +
        "people, places, a job or study experience in linked sentences» — " +
        "описание человека словами и есть этот случай. " +
        "ОПОРЫ ЧТЕНИЯ И ПИСЬМА РАЗВЕДЕНЫ НАРОЧНО — так подсказал методист при " +
        "разборе модуля 23",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Восемнадцать карточек модуля. Пятнадцать взяты из словника ступени " +
        "и новы для неё: businesswoman, housewife, shopper, good-looking, " +
        "beard, grandchild, department store, for sale, discount, envelope, " +
        "drawer, t-shirt, perfume, selfie, contact. " +
        "ЕЩЁ ТРИ — `aunt`, `uncle`, `husband` — ДОБАВЛЕНЫ ПО РАЗБОРУ. Oxford " +
        "помечает их A1, то есть числятся они за прошлой ступенью, но курс не " +
        "давал их НИ РАЗУ: ни карточкой, ни в текстах Beginner. А модуль " +
        "ставит их в опору — `husband` вообще ответ задания, которое ученик " +
        "пишет по-английски. Это та самая дыра между проверками, из-за " +
        "которой писался docs/dolg-slovarya-elementary.md. Нашёл методист. " +
        "СВЕРКА СЧИТАЕТ НОВЫХ ОДИННАДЦАТЬ, А НЕ ПЯТНАДЦАТЬ, и это не " +
        "противоречие: она сводит `shopper` к `shop`, а `drawer` к `draw` и " +
        "потому числит их за прошлой ступенью, а `good-looking` и `t-shirt` " +
        "не находит вовсе. Само слово ученик встречает впервые в обоих " +
        "случаях. " +
        "ДВА СЛОВА OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ОБА ВЗЯТЫ ПО МЕРКЕ СТУПЕНИ: " +
        "discount (B1) и contact (B1); оба стоят в словнике A2 Key, то есть " +
        "входят в требования экзамена. " +
        "Остальные тринадцать не нашлись ни в `oxford-3000`, ни в " +
        "`oxford-5000` — это не значит, что их там нет: составные и дефисные " +
        "записи оба списка ведут иначе. Проверено по обоим спискам построчно. " +
        "МИР МОДУЛЯ ВЫБРАН ПОД ПРЕДМЕТ: описывать придаточным надо людей и " +
        "вещи, поэтому слова тут работают сами собой, а не подбираются под " +
        "счёт",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "kotoryy-chelovek",
      title: "Который человек: a friend who lives in Almaty",
      estimatedMinutes: 15,
      outcome:
        "описывать человека по тому, что он делает: a friend who lives in Almaty",

      vozvrat: [{ iz: "esli", zadanie: "z1-dopisat-nastoyashchee-posle-if" }],

      blocks: [
        {
          id: "kak-nazvat-cheloveka",
          kind: "explain",
          text: [
            "Айгуль рассказывает о родне, и одних имён мало: Данияр их не знает.",
            "Она называет человека и сразу говорит, чем он занят.",
            "Для этого между ними ставят одно слово — who.",
          ],
        },
        {
          id: "chelovek-i-ego-opisanie",
          kind: "table",
          caption: "Человек и его описание",
          zvuchat: [
            "I have a friend.",
            "I have a friend who lives in Almaty.",
            "This is my sister.",
            "This is my sister who works in a bank.",
            "He is a shopper.",
            "He is a shopper who knows every discount.",
          ],
          head: ["Без описания", "С описанием"],
          rows: [
            ["I have a friend.", "I have a friend who lives in Almaty."],
            ["This is my sister.", "This is my sister who works in a bank."],
            ["He is a shopper.", "He is a shopper who knows every discount."],
          ],
        },
        {
          id: "kak-ustroeno-opisanie-cheloveka",
          kind: "explain",
          text: [
            "Слово who стоит сразу за словом, которое описываешь, и начинает описание.",
            "После who идёт глагол: lives, works, knows.",
            "Окончание у глагола живёт по правилу лица: a friend who lives, friends who live.",
            "Слово who берут тогда, когда человек сам что-то делает.",
            "Второй раз называть человека не нужно: не «a friend who he lives».",
          ],
        },
        {
          id: "ne-who-he",
          kind: "note",
          tone: "mistake",
          text:
            "«I have a friend who he works in a bank» — так не описывают." +
            "\n\nСлово who уже назвало человека, и he тут лишнее.",
        },
        {
          id: "razgovor-o-rodne",
          kind: "example",
          caption: "Разговор о родне",
          razgovor: true,
          zvuchat: [
            "This is my granny who lives in the village.",
            "And the woman with the long hair?",
            "That is my aunt, a businesswoman who works in a department store.",
            "And the good-looking man who is next to her?",
            "My uncle, the one who has a beard.",
          ],
          text:
            "This is my granny who lives in the village.\nAnd the woman with the long hair?\nThat is my aunt, a businesswoman who works in a department store.\nAnd the good-looking man who is next to her?\nMy uncle, the one who has a beard.",
          explain:
            "В каждой строке с who описание стоит сразу за человеком, и после " +
            "who идёт глагол. Человека второй раз не называют.",
        },
        {
          id: "slovar-lyudey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "businesswoman", translation: "деловая женщина, предпринимательница", example: "A businesswoman who works in a department store.", hint: "/ˈbɪznəsˌwʊmən/" },
            { term: "housewife", translation: "домохозяйка", example: "My aunt is a housewife who cooks for six people.", hint: "/ˈhaʊswaɪf/" },
            { term: "shopper", translation: "покупатель", example: "He is a shopper who knows every discount.", hint: "/ˈʃɒpə/" },
            { term: "grandchild", translation: "внук или внучка", example: "She has a grandchild who lives in Astana.", hint: "/ˈgræntʃaɪld/" },
            { term: "beard", translation: "борода", example: "My uncle, the one who has a beard.", hint: "/bɪəd/" },
            { term: "department store", translation: "универмаг", example: "A businesswoman who works in a department store.", hint: "/dɪˈpɑːtmənt stɔː/" },
            { term: "discount", translation: "скидка", example: "He is a shopper who knows every discount.", hint: "/ˈdɪskaʊnt/" },
            { term: "aunt", translation: "тётя", example: "That is my aunt, a businesswoman who works in a department store.", hint: "/ɑːnt/" },
            { term: "uncle", translation: "дядя", example: "My uncle, the one who has a beard.", hint: "/ˈʌŋkl/" },
            { term: "husband", translation: "муж", example: "The man who has a beard is her husband.", hint: "/ˈhʌzbənd/" },
            { term: "good-looking", translation: "привлекательный", example: "And the good-looking man who is next to her?", hint: "/gʊd ˈlʊkɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-who",
          kind: "gap",
          prompt: "Описание человека начинается одним словом. Допиши его.",
          before: "I have a friend ",
          after: " lives in Almaty.",
          answer: "who",
          hint: "Это слово ставят сразу за словом, которое описываешь.",
          why:
            "I have a friend who lives in Almaty. Слово which берут о вещи, а " +
            "здесь речь о человеке.",
        },
        {
          id: "z2-vybrat-vernoe-opisanie",
          kind: "choice",
          prompt: "В какой записи описание построено верно?",
          options: [
            { text: "This is my sister who she works in a bank." },
            { text: "This is my sister who work in a bank." },
            { text: "This is my sister who works in a bank.", correct: true },
          ],
          hint: "Проверь два места: не назван ли человек дважды и какое окончание у глагола.",
          why:
            "This is my sister who works in a bank. В первой записи лишнее " +
            "she, во второй у глагола пропало окончание.",
        },
        {
          id: "z3-otmetit-opisaniya-lyudey",
          kind: "hottext",
          prompt: "Отметь строки, где описан человек.",
          parts: [
            { text: "a shopper knows every discount", selectable: true },
            { text: " · " },
            { text: "a shopper who knows every discount", selectable: true, correct: true },
            { text: " · " },
            { text: "a grandchild lives in Astana", selectable: true },
            { text: " · " },
            { text: "a grandchild who lives in Astana", selectable: true, correct: true },
          ],
          hint: "Описание начинается словом who, а без него выходит целая строка.",
          why:
            "Вторая и четвёртая. Первая и третья — обычные строки: там просто " +
            "сказано, что человек делает, а не описан он сам.",
        },
        {
          id: "z4-sobrat-opisanie-cheloveka",
          kind: "order",
          prompt: "Собери строку: у меня есть тётя, которая работает в универмаге.",
          items: ["works in a department store.", "I have an aunt", "who"],
          answer: [1, 2, 0],
          hint: "Слово описания стоит сразу за словом, которое описываешь.",
          why:
            "I have an aunt who works in a department store. После who сразу " +
            "идёт глагол.",
        },
        {
          id: "z5-opisat-cheloveka",
          kind: "short",
          prompt:
            "Скажи: у меня есть внук, который живёт в Астане. Начни с I have.",
          answer: "I have a grandchild who lives in Astana.",
          accept: [
            "I have a grandchild who lives in Astana",
            "I have a grandchild who lives in Astana.",
          ],
          hint: "Между человеком и глаголом стоит одно слово.",
          why:
            "I have a grandchild who lives in Astana. Окончание у глагола " +
            "живёт по правилу лица.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kotoraya-veshch",
      title: "Которая вещь: the bag which is on the table",
      estimatedMinutes: 15,
      outcome: "описывать вещь: the bag which is on the table",

      blocks: [
        {
          id: "kak-nazvat-veshch",
          kind: "explain",
          text: [
            "Данияр ищет свою сумку в бюро находок, и сумок там десяток.",
            "Назвать вещь мало — надо сказать, какая она.",
            "О вещи описание начинают другим словом.",
          ],
        },
        {
          id: "veshch-i-eyo-opisanie",
          kind: "table",
          caption: "Вещь и её описание",
          zvuchat: [
            "the bag which is on the table",
            "the bag which I bought in May",
            "the envelope which has my name on it",
            "the perfume which my sister gave me",
          ],
          head: ["Вещь сама что-то делает", "С вещью что-то делают"],
          rows: [
            ["the bag which is on the table", "the bag which I bought in May"],
            ["the envelope which has my name on it", "the perfume which my sister gave me"],
          ],
        },
        {
          id: "kak-ustroeno-opisanie-veshchi",
          kind: "explain",
          text: [
            "О вещи описание начинают словом which.",
            "В левом столбце после which сразу идёт глагол: вещь сама что-то делает.",
            "В правом столбце после which идёт тот, кто действует: I bought, my sister gave.",
            "Вещь второй раз не называют: не «the bag which I bought it».",
            "О человеке в таком описании берут who, о вещи — which.",
          ],
        },
        {
          id: "ne-which-it",
          kind: "note",
          tone: "mistake",
          text:
            "«the bag which I bought it in May» — так не описывают.\n\nСлово " +
            "which уже назвало вещь, и it тут лишнее.",
        },
        {
          id: "razgovor-v-byuro-nahodok",
          kind: "example",
          caption: "Разговор в бюро находок",
          razgovor: true,
          zvuchat: [
            "I'm looking for a bag which is black and very old.",
            "We have three. Anything inside?",
            "An envelope which has my name on it, and a t-shirt which my granny made.",
          ],
          text:
            "I'm looking for a bag which is black and very old.\nWe have three. Anything inside?\nAn envelope which has my name on it, and a t-shirt which my granny made.",
          explain:
            "В первых двух описаниях после which сразу идёт глагол: вещь сама " +
            "что-то делает. В последнем после which стоит granny — с вещью " +
            "действует человек.",
        },
        {
          id: "slovar-veshchey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "envelope", translation: "конверт", example: "An envelope which has my name on it.", hint: "/ˈenvələʊp/" },
            { term: "t-shirt", translation: "футболка", example: "A t-shirt which my granny made.", hint: "/ˈtiː ʃɜːt/" },
            { term: "perfume", translation: "духи", example: "The perfume which my sister gave me.", hint: "/ˈpɜːfjuːm/" },
            { term: "drawer", translation: "выдвижной ящик", example: "The drawer which is always open.", hint: "/drɔː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-which",
          kind: "gap",
          prompt: "Описание вещи начинается одним словом. Допиши его.",
          before: "the bag ",
          after: " is on the table",
          answer: "which",
          hint: "Это слово берут о вещах, а не о людях.",
          why:
            "the bag which is on the table. Слово who берут о человеке, а " +
            "сумка — вещь.",
        },
        {
          id: "z2-otlichit-dva-vida-opisaniya",
          kind: "choice",
          prompt:
            "В строке the perfume which my sister gave me кто действует с вещью?",
          options: [
            { text: "Сами духи." },
            { text: "Сестра.", correct: true },
            { text: "Никто: духи просто стоят." },
          ],
          hint: "Смотри, что стоит сразу после which.",
          why:
            "Сестра. После which стоит my sister — значит с вещью действует " +
            "человек, а не она сама.",
        },
        {
          id: "z3-otmetit-veshchi",
          kind: "hottext",
          prompt: "Отметь строки, где вещь сама что-то делает.",
          parts: [
            { text: "the envelope which my aunt sent", selectable: true },
            { text: " · " },
            { text: "the drawer which is always open", selectable: true, correct: true },
            { text: " · " },
            { text: "the perfume which I bought in May", selectable: true },
            { text: " · " },
            { text: "the bag which has my name on it", selectable: true, correct: true },
          ],
          hint: "Смотри, стоит ли сразу после which глагол.",
          why:
            "Вторая и четвёртая: после which сразу идёт глагол. В первой и " +
            "третьей с вещью действует человек.",
        },
        {
          id: "z4-sobrat-opisanie-veshchi",
          kind: "order",
          prompt: "Собери строку: футболка, которую сшила моя бабушка.",
          items: ["my granny made", "a t-shirt", "which"],
          answer: [1, 2, 0],
          hint: "После which стоит тот, кто действует с вещью.",
          why:
            "a t-shirt which my granny made. Вещь второй раз не называют.",
        },
        {
          id: "z5-opisat-veshch",
          kind: "short",
          prompt:
            "Опиши конверт: на нём есть твоё имя. Начни с an envelope.",
          answer: "an envelope which has my name on it",
          accept: [
            "an envelope which has my name on it.",
            "An envelope which has my name on it",
            "An envelope which has my name on it.",
          ],
          hint: "Конверт тут действует сам, значит после which сразу глагол.",
          why:
            "an envelope which has my name on it. Окончание у глагола живёт по " +
            "правилу лица.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mesto-opisaniya",
      title: "Место описания: The film that I watched was long",
      estimatedMinutes: 14,
      outcome:
        "ставить описание сразу за словом, которое описываешь: The film that I watched was long",

      blocks: [
        {
          id: "gde-stoit-opisanie",
          kind: "explain",
          text: [
            "Айгуль пересказывает Данияру фильм и путается в порядке слов.",
            "По-русски описание можно отодвинуть в конец, и всё понятно.",
            "По-английски оно стоит вплотную к слову, которое описываешь.",
          ],
        },
        {
          id: "opisanie-vnutri-stroki",
          kind: "table",
          caption: "Описание внутри строки",
          head: ["Кто или что", "Описание", "Что о нём сказано"],
          rows: [
            ["The film", "that I watched", "was long."],
            ["The perfume", "that she gave me", "was very old."],
            ["The t-shirt", "that my granny made", "was new."],
          ],
        },
        {
          id: "kak-ustroeno-mesto",
          kind: "explain",
          text: [
            "Описание вклинивается в строку сразу за словом, которое описываешь.",
            "Главное о нём говорится уже после описания: was long, was very old.",
            "О вещи описание начинают и словом that, и словом which: оба годятся.",
            "О человеке в этом месте берут who, как в первом уроке.",
            "Описание ставят вплотную: отодвинешь в конец — читатель отнесёт его не к тому слову.",
          ],
        },
        {
          id: "ne-opisanie-v-konce",
          kind: "note",
          tone: "mistake",
          text:
            "«The film was long that I watched» — так строку не строят." +
            "\n\nОписание отошло от фильма, и кажется, что оно про длину.",
        },
        {
          id: "razgovor-o-filme",
          kind: "example",
          caption: "Разговор о фильме",
          razgovor: true,
          zvuchat: [
            "The film that I watched was long.",
            "Which one?",
            "The one that a friend of mine made.",
            "And the perfume that she gave me was very old.",
          ],
          text:
            "The film that I watched was long.\nWhich one?\nThe one that a friend of mine made.\nAnd the perfume that she gave me was very old.",
          explain:
            "В первой и последней строке описание стоит между словом и тем, что " +
            "о нём сказано. В третьей оно стоит вплотную к the one — и потому " +
            "понятно, что описывают фильм, а не друга.",
        },
        {
          id: "slovar-opisaniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "for sale", translation: "продаётся", example: "The drawer which is for sale is very old.", hint: "/fə ˈseɪl/" },
            { term: "selfie", translation: "селфи", example: "The selfie that she sent me was funny.", hint: "/ˈselfi/" },
            { term: "contact", translation: "связаться; связь", example: "The shop that I contact every week gives a discount.", hint: "/ˈkɒntækt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vernyy-poryadok",
          kind: "choice",
          prompt: "В какой записи описание стоит на своём месте?",
          options: [
            { text: "The selfie was funny that she sent me." },
            { text: "The selfie that she sent me was funny.", correct: true },
            { text: "The selfie what she sent me was funny." },
          ],
          hint: "Описание стоит вплотную к слову, которое описываешь.",
          why:
            "The selfie that she sent me was funny. В первой записи описание " +
            "отошло в конец, а в третьей вместо that стоит what — так описание " +
            "не начинают.",
        },
        {
          id: "z2-dopisat-that",
          kind: "gap",
          prompt: "С фильмом действует человек. Допиши слово описания.",
          before: "The film ",
          after: " I watched was long.",
          answer: "that",
          accept: ["which"],
          hint: "В этом месте годятся оба слова о вещи.",
          why:
            "The film that I watched was long. Запись which I watched тоже " +
            "верна: оба слова берут о вещи.",
        },
        {
          id: "z3-otmetit-vernoe-mesto",
          kind: "hottext",
          prompt: "Отметь строки, где описание стоит на своём месте.",
          parts: [
            { text: "The perfume was old that she gave me.", selectable: true },
            { text: " · " },
            { text: "The drawer which is for sale is very old.", selectable: true, correct: true },
            { text: " · " },
            { text: "The shop was closed that I contact every week.", selectable: true },
            { text: " · " },
            { text: "The shopper that I met knows every discount.", selectable: true, correct: true },
          ],
          hint: "Смотри, стоит ли описание вплотную к слову, которое описываешь.",
          why:
            "Вторая и четвёртая. В первой и третьей описание отошло в конец, и " +
            "непонятно, к чему оно.",
        },
        {
          id: "z4-sobrat-stroku-s-opisaniem",
          kind: "order",
          prompt: "Собери строку: селфи, которое она мне прислала, было смешным.",
          items: ["was funny.", "The selfie", "that she sent me"],
          answer: [1, 2, 0],
          hint: "Сначала вещь, потом описание, и только потом главное о ней.",
          why:
            "The selfie that she sent me was funny. Описание вклинивается " +
            "внутрь строки.",
        },
        {
          id: "z5-perestavit-opisanie",
          kind: "short",
          prompt:
            "Строку The drawer was very old that is for sale перепиши так, чтобы описание стояло на своём месте.",
          answer: "The drawer which is for sale was very old.",
          accept: [
            "The drawer which is for sale was very old",
            "The drawer which is for sale was very old.",
            "The drawer which is for sale was very old",
          ],
          hint: "Описание переезжает вплотную к слову, которое описываешь.",
          why:
            "The drawer which is for sale was very old. Годится и which: оба " +
            "слова берут о вещи.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pismo-o-snimkah",
      title: "Читаем письмо о снимках",
      estimatedMinutes: 13,
      outcome: "находить в письме, кого и что описывают",

      blocks: [
        {
          id: "zachem-chitat-pismo-o-snimkah",
          kind: "explain",
          text: [
            "Айгуль прислала Данияру снимки с семейного праздника.",
            "Людей на них много, и к каждому снимку она даёт описание.",
            "Ниже её письмо, и вопросы будут о нём.",
          ],
        },
        {
          id: "pismo-o-snimkah",
          kind: "text",
          title: "The photos from Sunday",
          genre: "message",
          body: [
            "Hi! Here are the photos from Sunday.",
            "The woman who is next to me is my aunt, a businesswoman who works in a department store.",
            "The man who has a beard is her husband, and the grandchild who is on his knees is their first.",
            "The t-shirt which I am wearing is the one that my granny made.",
            "The selfie which I sent you last week was from the same evening.",
          ],
          glossary: [
            { term: "on his knees", translation: "у него на коленях" },
            { term: "their first", translation: "их первый" },
            { term: "the same evening", translation: "тот же вечер" },
          ],
        },
        {
          id: "kak-chitat-opisaniya-v-pisme",
          kind: "note",
          tone: "info",
          text:
            "О человеке описание начинается словом who, о вещи — which или " +
            "that.\n\nОписание всегда стоит сразу за словом, которое описываешь.",
        },

        // ---- задания ----
        {
          id: "z1-kem-rabotaet-tyotya",
          about: "pismo-o-snimkah",
          kind: "choice",
          prompt: "Кем работает тётя?",
          options: [
            { text: "Домохозяйкой." },
            { text: "Предпринимательницей в универмаге.", correct: true },
            { text: "Продавщицей футболок." },
          ],
          hint: "Описание тёти стоит во второй строке, после слова who.",
          why:
            "Предпринимательницей: a businesswoman who works in a department " +
            "store.",
        },
        {
          id: "z2-kto-s-borodoy",
          about: "pismo-o-snimkah",
          kind: "short",
          prompt:
            "Кем приходится тёте человек с бородой? Ответь одним словом по-английски.",
          answer: "husband",
          accept: ["Husband", "her husband"],
          hint: "Про бороду сказано в третьей строке.",
          why: "The man who has a beard is her husband.",
        },
        {
          id: "z3-kto-sshil-futbolku",
          about: "pismo-o-snimkah",
          kind: "short",
          prompt: "Кто сшил футболку? Ответь одним словом по-английски.",
          answer: "granny",
          accept: ["Granny", "my granny", "her granny"],
          hint: "Про футболку сказано в четвёртой строке.",
          why: "The t-shirt which I am wearing is the one that my granny made.",
        },
        {
          id: "z4-otmetit-verno-o-snimkah",
          about: "pismo-o-snimkah",
          kind: "hottext",
          prompt: "Отметь то, что верно по письму.",
          parts: [
            { text: "у тёти есть муж с бородой", selectable: true, correct: true },
            { text: " · " },
            { text: "снимки сделаны в воскресенье", selectable: true, correct: true },
            { text: " · " },
            { text: "футболку купили в универмаге", selectable: true },
            { text: " · " },
            { text: "селфи снято в другой вечер", selectable: true },
          ],
          hint: "Про футболку сказано в четвёртой строке, про селфи — в пятой.",
          why:
            "Верно первое и второе. Футболку сшила бабушка, а селфи снято в тот " +
            "же вечер, что и остальные снимки.",
        },
        {
          id: "z5-k-chemu-otnositsya-opisanie",
          about: "pismo-o-snimkah",
          kind: "choice",
          prompt:
            "В строке the grandchild who is on his knees is their first — к кому относится описание?",
          options: [
            { text: "К мужу." },
            { text: "К внуку.", correct: true },
            { text: "К тёте." },
          ],
          hint: "Описание относится к тому слову, за которым стоит.",
          why:
            "К внуку: описание who is on his knees стоит сразу за словом " +
            "grandchild.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-opisanie",
      title: "Слушаем описание",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, о каком человеке или вещи речь",

      blocks: [
        {
          id: "zachem-slushat-opisanie",
          kind: "explain",
          text: [
            "Данияр описывает по телефону человека, которого встретил.",
            "Слушать надо, кто это и чем он занят.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-opisaniya",
          kind: "audio",
          caption: "Разговор о встрече",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "I met a woman who works in a department store. — Which one? — The " +
            "one near the bus stop. She gave me a t-shirt that my sister wanted.",
        },
        {
          id: "chto-slushat-v-opisanii",
          kind: "note",
          tone: "info",
          text:
            "О человеке описание идёт после who, о вещи — после which или " +
            "that.\n\nСлушай, что стоит сразу за этими словами.",
        },

        // ---- задания ----
        {
          id: "z1-gde-rabotaet-zhenshchina",
          about: "zapis-opisaniya",
          kind: "choice",
          prompt: "Послушай. Где работает эта женщина?",
          options: [
            { text: "На автобусной остановке." },
            { text: "В универмаге.", correct: true },
            { text: "В магазине футболок." },
          ],
          hint: "Описание звучит сразу после слова who.",
          why: "I met a woman who works in a department store.",
        },
        {
          id: "z2-chto-ona-dala",
          about: "zapis-opisaniya",
          kind: "short",
          prompt: "Послушай. Что она дала? Ответь одним словом по-английски.",
          answer: "t-shirt",
          accept: ["T-shirt", "a t-shirt"],
          hint: "Об этом сказано в самой последней реплике.",
          why: "She gave me a t-shirt that my sister wanted.",
        },
        {
          id: "z3-komu-nuzhna-veshch",
          about: "zapis-opisaniya",
          kind: "short",
          prompt: "Послушай. Кто хотел эту вещь? Ответь одним словом по-английски.",
          answer: "sister",
          accept: ["Sister", "my sister", "his sister"],
          hint: "Ответ звучит после слова that.",
          why: "a t-shirt that my sister wanted",
        },
        {
          id: "z4-otmetit-uslyshannoe-opisanie",
          about: "zapis-opisaniya",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "универмаг стоит у остановки", selectable: true, correct: true },
            { text: " · " },
            { text: "футболку хотела сестра", selectable: true, correct: true },
            { text: " · " },
            { text: "женщина работает на остановке", selectable: true },
            { text: " · " },
            { text: "футболку купил сам Данияр", selectable: true },
          ],
          hint: "Про остановку сказано во второй половине записи.",
          why:
            "Прозвучали первое и второе. Женщина работает в универмаге, а " +
            "футболку она дала, а не Данияр купил.",
        },
        {
          id: "z5-kakoe-slovo-o-veshchi",
          about: "zapis-opisaniya",
          kind: "choice",
          prompt:
            "В записи звучит a t-shirt that my sister wanted. Отчего здесь that, а не who?",
          options: [
            { text: "Описание относится к сестре, а не к футболке." },
            { text: "Описание относится к вещи, а не к человеку.", correct: true },
            { text: "Слово who бывает только в вопросе." },
          ],
          hint: "Спроси: что описывают — футболку или сестру?",
          why:
            "Описывают футболку. Слово who взяли бы, если бы описывали сестру.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-snimke",
      title: "Пишем о снимке",
      estimatedMinutes: 15,
      outcome:
        "проверять подпись к снимку: назван человек, дано описание и сказано, чем он важен",

      blocks: [
        {
          id: "zachem-proveryat-podpis",
          kind: "explain",
          text: [
            "Ученик прислал снимок и подписал его: «This is my family.»",
            "Читатель видит шесть человек и не знает, кто из них кто.",
            "Проверить свою подпись можно по трём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-podpisi",
          kind: "table",
          caption: "Что должно быть в подписи к снимку",
          zvuchat: [
            "This is my aunt.",
            "She is a businesswoman who works in a department store.",
            "She gave me the perfume which I use every day.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["кто на снимке", "This is my aunt."],
            ["описание через who, which или that", "She is a businesswoman who works in a department store."],
            ["чем этот человек важен", "She gave me the perfume which I use every day."],
          ],
        },
        {
          id: "chem-derzhitsya-podpis",
          kind: "explain",
          text: [
            "Первая строка называет человека одним словом.",
            "Вторая описывает его: чем он занят или какой он.",
            "Описание держится на слове who и стоит вплотную к человеку.",
            "Третья строка говорит, чем он важен тебе, и там часто нужна вещь.",
            "Без описания подпись не работает: на снимке шесть человек.",
          ],
        },
        {
          id: "obrazec-podpisi",
          kind: "example",
          caption: "Подпись Айгуль",
          zvuchat: [
            "This is my granny.",
            "She is a housewife who cooks for six people every Sunday.",
            "She made the t-shirt which I am wearing on this photo.",
          ],
          text:
            "This is my granny.\nShe is a housewife who cooks for six people every Sunday.\nShe made the t-shirt which I am wearing on this photo.",
          explain:
            "Первая строка называет человека, вторая описывает его через who, " +
            "третья говорит, чем он важен, и берёт описание вещи через which.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-podpisi",
          kind: "choice",
          prompt:
            "Подпись целиком: This is my family. Какой из трёх нужных строк здесь нет?",
          options: [
            { text: "Той, что называет человека." },
            { text: "Той, что описывает человека.", correct: true },
            { text: "Той, что говорит, чем он важен." },
          ],
          hint: "Спроси: узнает ли читатель кого-нибудь на снимке?",
          why:
            "Той, что описывает. Человек назван — семья, — но кто из шестерых " +
            "кто, не сказано.",
        },
        {
          id: "z2-dopisat-who-v-podpis",
          kind: "gap",
          prompt: "Описание человека начинается одним словом. Допиши его.",
          before: "She is a housewife ",
          after: " cooks for six people.",
          answer: "who",
          hint: "Речь о человеке, и он действует сам.",
          why:
            "She is a housewife who cooks for six people. Слово which берут о " +
            "вещи.",
        },
        {
          id: "z3-otmetit-stroki-podpisi",
          kind: "hottext",
          prompt: "Отметь строки, из которых читатель узнаёт про ОДНОГО человека на снимке.",
          parts: [
            { text: "The weather was nice that day.", selectable: true },
            { text: " · " },
            { text: "She is a housewife who cooks for six people.", selectable: true, correct: true },
            { text: " · " },
            { text: "This is my family.", selectable: true },
            { text: " · " },
            { text: "The man who has a beard is her husband.", selectable: true, correct: true },
          ],
          hint: "Нужное — описание одного человека, а не всех разом.",
          why:
            "Вторая и четвёртая. Про погоду читателю знать нечего, а третья " +
            "называет всех разом и никого в отдельности.",
        },
        {
          id: "z4-sobrat-tretyu-stroku",
          kind: "order",
          prompt:
            "Собери третью строку: она сшила футболку, которую я ношу на этом снимке.",
          items: ["I am wearing on this photo.", "She made the t-shirt", "which"],
          answer: [1, 2, 0],
          hint: "Описание вещи стоит сразу за ней.",
          why:
            "She made the t-shirt which I am wearing on this photo. С футболкой " +
            "действует человек, и после which стоит он.",
        },
        {
          id: "z5-napisat-podpis",
          kind: "essay",
          prompt:
            "Напиши подпись к снимку тремя строками. Назови человека. Опиши его через who. Скажи, чем он тебе важен, и опиши какую-нибудь вещь через which или that.",
          minWords: 16,
          sample:
            "This is my uncle.\nHe is a shopper who knows every discount in the city.\nHe gave me the drawer which is in my room now.",
          checklist: [
            "назван человек",
            "есть описание со словом who",
            "описание стоит сразу за человеком",
            "есть описание вещи со словом which или that",
          ],
          hint:
            "Бери обороты, которые знаешь: This is…, She is a … who…, the … which…",
          why:
            "Подпись работает, когда читатель отличает твоего человека от " +
            "остальных на снимке.",
        },
      ],
    },

  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, выбрать слово описания по слову, которое описываешь.

      // ---- итог 1 ----
      {
        id: "q-ispravit-who-he",
        kind: "short",
        outcome:
          "описывать человека по тому, что он делает: a friend who lives in Almaty",
        prompt:
          "Ученик написал: I have an uncle who he has a beard. Запиши строку без ошибки.",
        answer: "I have an uncle who has a beard.",
        accept: ["I have an uncle who has a beard"],
        hint: "Одно слово в строке названо дважды.",
        why:
          "I have an uncle who has a beard. Слово who уже назвало человека.",
      },
      {
        id: "q-nazvat-oshibku-v-okonchanii-opisaniya",
        kind: "choice",
        outcome:
          "описывать человека по тому, что он делает: a friend who lives in Almaty",
        prompt: "Запись a housewife who cook for six people неверна. Отчего?",
        options: [
          { text: "Слово who тут лишнее: хватило бы a housewife cooks." },
          { text: "У глагола в описании пропало окончание.", correct: true },
          { text: "Нужно поставить that вместо who." },
        ],
        hint: "Спроси, кто готовит: я, ты или одна домохозяйка.",
        why:
          "Окончание пропало: a housewife who cooks. В описании глагол живёт " +
          "по правилу лица.",
      },

      // ---- итог 2 ----
      {
        id: "q-vybrat-slovo-opisaniya",
        kind: "short",
        outcome: "описывать вещь: the bag which is on the table",
        prompt:
          "Речь о ящике, а не о человеке. Допиши слово описания: the drawer ___ is always open. Ответь одним словом по-английски.",
        answer: "which",
        accept: ["Which", "that"],
        hint: "О вещи берут не то слово, что о человеке.",
        why:
          "which. Годится и that, а who взяли бы о человеке.",
      },
      {
        id: "q-ispravit-which-it",
        kind: "short",
        outcome: "описывать вещь: the bag which is on the table",
        prompt:
          "Ученик написал: the perfume which my sister gave it to me. Запиши описание без ошибки.",
        answer: "the perfume which my sister gave me",
        accept: [
          "the perfume which my sister gave me.",
          "The perfume which my sister gave me",
          "the perfume that my sister gave me",
        ],
        hint: "Одно слово в описании названо дважды.",
        why:
          "the perfume which my sister gave me. Слово which уже назвало вещь, " +
          "и it тут лишнее.",
      },

      // ---- итог 3 ----
      {
        id: "q-perestavit-opisanie-na-mesto",
        kind: "short",
        outcome:
          "ставить описание сразу за словом, которое описываешь: The film that I watched was long",
        prompt:
          "Ученик написал: The envelope was empty that my aunt sent. Запиши строку без ошибки.",
        answer: "The envelope that my aunt sent was empty.",
        accept: [
          "The envelope that my aunt sent was empty",
          "The envelope which my aunt sent was empty.",
          "The envelope which my aunt sent was empty",
        ],
        hint: "Описание стоит не там, где ему место.",
        why:
          "The envelope that my aunt sent was empty. Описание вклинивается " +
          "сразу за словом, а главное о нём говорится после.",
      },
      {
        id: "q-k-chemu-tyanetsya-opisanie",
        kind: "choice",
        outcome:
          "ставить описание сразу за словом, которое описываешь: The film that I watched was long",
        prompt:
          "В строке The bag was heavy which my brother gave me описание стоит в конце. К какому слову его отнесёт читатель?",
        options: [
          { text: "К слову bag." },
          { text: "К слову heavy.", correct: true },
          { text: "К слову brother." },
        ],
        hint: "Описание тянется к тому слову, рядом с которым оказалось.",
        why:
          "К слову heavy. Оттого описание и ставят вплотную к тому слову, " +
          "которое описываешь.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-which-o-cheloveke",
        kind: "short",
        outcome: "находить в письме, кого и что описывают",
        prompt:
          "Ученик написал: I met a shopper which knows every discount. Запиши строку без ошибки.",
        answer: "I met a shopper who knows every discount.",
        accept: ["I met a shopper who knows every discount"],
        hint: "Одно слово взято не того разряда.",
        why:
          "I met a shopper who knows every discount. Покупатель — человек, а " +
          "which берут о вещи.",
      },
      {
        id: "q-chto-poteryali",
        kind: "short",
        outcome: "находить в письме, кого и что описывают",
        prompt:
          "В письме строка: I lost the envelope which has my name on it. Что потеряли? Ответь одним словом по-английски.",
        answer: "envelope",
        accept: ["Envelope", "an envelope"],
        hint: "Вещь названа до описания.",
        why: "I lost the envelope which has my name on it.",
      },

      // ---- итог 5 ----
      {
        id: "q-uslyshat-o-kom-rech",
        kind: "short",
        outcome: "слышать в разговоре, о каком человеке или вещи речь",
        zvuk: "I know a man who works in a bookshop.",
        prompt:
          "Послушай. Где работает этот человек? Ответь одним словом по-английски.",
        answer: "bookshop",
        accept: ["Bookshop", "a bookshop", "in a bookshop"],
        hint: "Ответ звучит в самом конце записи.",
        why: "I know a man who works in a bookshop.",
      },
      {
        id: "q-uslyshat-opisanie-veshchi",
        kind: "choice",
        outcome: "слышать в разговоре, о каком человеке или вещи речь",
        zvuk:
          "I'm looking for the envelope which my granny sent me last week.",
        prompt: "Послушай. Кто отправил конверт?",
        options: [
          { text: "Бабушка.", correct: true },
          { text: "Сестра." },
          { text: "Сам говорящий." },
        ],
        hint: "Ответ звучит сразу после слова which.",
        why: "the envelope which my granny sent me last week",
      },

      // ---- итог 6 ----
      {
        id: "q-dopisat-tretyu-stroku-podpisi",
        kind: "short",
        outcome: "проверять подпись к снимку: назван человек, дано описание и сказано, чем он важен",
        prompt:
          "К подписи допиши третью строку: дядя подарил тебе конверт, который ты хранишь до сих пор. Начни с He gave me.",
        answer: "He gave me the envelope which I still keep.",
        accept: [
          "He gave me the envelope which I still keep",
          "He gave me the envelope that I still keep.",
          "He gave me the envelope that I still keep",
        ],
        hint: "После слова описания стоит тот, кто действует с вещью.",
        why:
          "He gave me the envelope which I still keep. Годится и that: оба " +
          "слова берут о вещи.",
      },
      {
        id: "q-chego-net-v-podpisi-o-dyade",
        kind: "choice",
        outcome: "проверять подпись к снимку: назван человек, дано описание и сказано, чем он важен",
        prompt:
          "В подписи стоит: This is my uncle. He gave me the drawer which is in my room now. Какой из трёх нужных строк здесь нет?",
        options: [
          { text: "Той, что описывает человека.", correct: true },
          { text: "Той, что называет человека." },
          { text: "Той, что говорит, чем он важен." },
        ],
        hint: "Пройди по трём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что описывает. Дядя назван, чем важен — сказано, а чем он " +
          "занят или какой он, не сказано.",
      },
    ],
  },
};

export default module;
