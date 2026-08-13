import type { Module } from "@/lib/content/types";

/**
 * Модуль 23 курса «Английский с нуля»: в магазине и кафе.
 *
 * Программа: docs/programma-english-starter.md, модуль 23 — «сделать покупку,
 * заказать еду и напиток»; грамматика: количество, `some`, неисчисляемые
 * (сверх A1).
 *
 * ГЛАВНАЯ ОПАСНОСТЬ МОДУЛЯ — само деление на исчисляемое и неисчисляемое. В
 * русском языке его нет в таком виде: «хлеб» и «деньги» ведут себя как обычные
 * слова, а «деньги» и вовсе множественного числа. По-английски `bread` и
 * `money` не считают вовсе: ни `a bread`, ни `two breads`, ни `moneys`.
 *
 * Ученик, выучивший в модуле 8 правило «много — значит -s», приделает -s и
 * сюда. Поэтому урок 2 говорит об отмене прямо и даёт признак: если вещь
 * нельзя пересчитать пальцем, слово не меняется.
 *
 * ЧТО ЭТОТ МОДУЛЬ НЕ ПОВТОРЯЕТ. Вопрос о цене `How much is it?` и слова `some`
 * и `a lot of` с множественным числом уже даны в модуле 9 «Числа, возраст,
 * цена». Здесь берётся другое: сами неисчисляемые слова, `some` с ними и
 * вопрос о количестве `How much bread?`.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. НЕИСЧИСЛЯЕМЫЕ БЕЗ АРТИКЛЯ — English Grammar Profile, DETERMINERS articles,
 *    A1, «FORM/USE: NO ARTICLE»: «Can use no article before a limited range of
 *    singular, plural and uncountable nouns when referring to things in
 *    general», пример источника: «In my free time I usually play football».
 *    То есть `I like bread` без артикля — ступень своя.
 *
 * 2. `some` С МНОЖЕСТВЕННЫМ — English Grammar Profile, DETERMINERS quantity,
 *    A1, «FORM: WITH PLURAL NOUNS»: «Can use a limited range of quantifying
 *    determiners with plural nouns ('some', 'lots of', 'a lot of' and
 *    numbers)», пример источника: «Near my home there are some shops». Это
 *    модуль 9, здесь только опора.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ И ОБЪЯВЛЕНО:
 *
 * — `some` И `any` С НЕИСЧИСЛЯЕМЫМИ — A2, DETERMINERS quantity, «FORM: WITH
 *   PLURAL AND UNCOUNTABLE NOUNS»: «Can use a range of quantifying determiners
 *   ('some', 'any', 'no', 'more', 'a lot of') with both plural nouns and
 *   uncountable nouns», пример источника — «I think we should bring some water
 *   to drink».
 *
 *   ПОЧЕМУ ВЗЯТО: программа называет неисчисляемые прямо и помечает их «сверх
 *   A1». Без них не купить ни хлеба, ни воды — а покупка и есть предмет
 *   модуля. Слово `any` при этом ученик уже видел в модуле 13, и там оно тоже
 *   объявлено взятым сверх.
 *
 * — `much` С НЕИСЧИСЛЯЕМЫМ В ВОПРОСЕ (`How much bread?`) — граница проходит
 *   тонко. Само слово `much` стоит в Oxford 3000 на A1, и вопрос `How much is
 *   it?` взят ещё в модуле 9 по строке QUESTIONS wh-. А вот `much` с
 *   существительным английский профиль называет только на A2 и только в
 *   отрицании («FORM: 'MUCH' WITH UNCOUNTABLE NOUNS, NEGATIVE»). Вопрос о
 *   количестве вида `How much bread?` источники не описывают вовсе — искал в
 *   английском профиле по подкатегориям quantity и wh-, в списке Cambridge
 *   Pre A1 Starters с. 29 и в словнике. НЕ НАШЁЛ, ПРОВЕРИТЬ методисту.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — СЛОВ `a bottle of`, `a cup of`, `a piece of`. Ими обычно и считают
 *   неисчисляемое, но ни в одном списке этой ступени их нет, а модуль и без
 *   них полон.
 * — ОТЛИЧИЯ `some` ОТ `any` ПО ПРАВИЛУ («some в утверждении, any в вопросе»).
 *   Источник ставит их в одну строку и правила не даёт. Модуль показывает оба
 *   в деле, но правила не сочиняет.
 * — СЛОВ `much` И `many` В СРАВНЕНИИ ДРУГ С ДРУГОМ. Это отдельный разговор, и
 *   `many` уже дан в модуле 9.
 */
const module: Module = {
  slug: "v-magazine-i-kafe",
  title: "В магазине и кафе",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, DETERMINERS articles, «FORM/USE: NO ARTICLE»: «Can use no article " +
        "before a limited range of singular, plural and uncountable nouns when " +
        "referring to things in general», пример источника — «In my free time I " +
        "usually play football». " +
        "A1, DETERMINERS quantity, «FORM: WITH PLURAL NOUNS»: «Can use a limited " +
        "range of quantifying determiners with plural nouns ('some', 'lots of', 'a " +
        "lot of' and numbers)», пример источника — «Near my home there are some " +
        "shops» — это опора на модуль 9. " +
        "A2, DETERMINERS quantity, «FORM: WITH PLURAL AND UNCOUNTABLE NOUNS»: «Can " +
        "use a range of quantifying determiners ('some', 'any', 'no', 'more', 'a " +
        "lot of') with both plural nouns and uncountable nouns», пример источника — " +
        "«I think we should bring some water to drink» — это неисчисляемые, взяты " +
        "сверх ступени и объявлены в шапке модуля. " +
        "Вопрос о количестве вида How much bread? источники не описывают: искал в " +
        "подкатегориях quantity и wh-. НЕ НАШЁЛ, проверить",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометкой A1: water n. A1, meat n. A1, rice n. A1, " +
        "money n. A1, price n. A1, shop n., v. A1, much det./pron. A1. Уже введены " +
        "раньше: bread, milk (модуль 19), tea, coffee, food, cake (модули 5, 14, 21)",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "узнавать слова, которые не считают: water, bread, money",
    "не ставить a и -s к таким словам",
    "говорить о количестве: some water",
    "спрашивать о количестве: How much bread?",
    "покупать в магазине",
    "заказывать в кафе",
    "говорить, что чего-то нет: I haven't got any water",
    "вести разговор о покупке целиком",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "chto-ne-schitayut",
      title: "Что не считают: water и bread",
      estimatedMinutes: 13,
      outcome: "узнавать слова, которые не считают: water, bread, money",

      blocks: [
        {
          id: "zachem-neschitaemye",
          kind: "explain",
          text: [
            "Книги можно пересчитать: одна книга, две книги, три книги.",
            "А воду — нет. Не бывает «одна вода» и «две воды»: считают не воду, а " +
              "стаканы или бутылки.",
            "Английский это различие держит строго, и слова вроде water ведут себя " +
              "иначе, чем book.",
          ],
        },
        {
          id: "tablica-schitayut-i-net",
          kind: "table",
          caption: "Что считают, а что нет",
          head: ["Считают", "Не считают"],
          rows: [
            ["a book — two books", "water"],
            ["a shop — two shops", "bread"],
            ["a friend — two friends", "money"],
          ],
        },
        {
          id: "kak-uznat-neschitaemoe",
          kind: "explain",
          text: [
            "Чтобы отличить одно от другого, попробуй показать пальцем и сосчитать.",
            "Книги, магазины, друзья считаются — значит слово обычное.",
            "Вода, хлеб, рис, мясо, деньги пальцем не считаются — значит слово из " +
              "второго столбца.",
          ],
        },
        {
          id: "dengi-lovushka",
          kind: "note",
          tone: "mistake",
          text:
            "Слово money — самая частая ловушка.\n\nПо-русски «деньги» стоят во " +
            "множественном числе, а по-английски money не считают вовсе: ни moneys, " +
            "ни a money.",
        },
        {
          id: "primer-neschitaemyh",
          kind: "example",
          caption: "Пять слов, которые не считают",
          text: "water\nbread\nmoney\nrice\nmeat",
          explain:
            "Все пять — вещества и вещи без счёта. Ни к одному из них не приделывают " +
            "-s и не ставят перед ними a.",
        },
        {
          id: "zapis-neschitaemyh",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пять слов",
          transcript: "water, bread, money, rice, meat",
        },
        {
          id: "slovar-neschitaemyh",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "water", translation: "вода", example: "I like water.", hint: "/ˈwɔːtə/" },
            { term: "money", translation: "деньги", example: "I have got money.", hint: "/ˈmʌni/" },
            { term: "rice", translation: "рис", example: "I like rice.", hint: "/raɪs/" },
            { term: "meat", translation: "мясо", example: "I don't like meat.", hint: "/miːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-otmetit-neschitaemye",
          kind: "hottext",
          prompt: "Отметь слова, которые не считают.",
          parts: [
            { text: "book", selectable: true },
            { text: " · " },
            { text: "water", selectable: true, correct: true },
            { text: " · " },
            { text: "money", selectable: true, correct: true },
            { text: " · " },
            { text: "shop", selectable: true },
          ],
          hint: "Попробуй показать пальцем и сосчитать.",
          why:
            "Не считают water и money. Книги и магазины пересчитать можно: two " +
            "books, two shops.",
        },
        {
          id: "z2-vybrat-schitaemoe",
          kind: "choice",
          prompt: "В каком ряду все слова считают?",
          options: [
            { text: "book, shop, friend", correct: true },
            { text: "water, book, money" },
            { text: "rice, meat, bread" },
          ],
          hint: "В ряду не должно быть ни воды, ни денег, ни еды без счёта.",
          why:
            "Считают book, shop и friend. В двух других рядах есть слова, которые " +
            "пальцем не сосчитать.",
        },
        {
          id: "z3-sopostavit-slova",
          kind: "match",
          prompt: "Сопоставь слово и его перевод.",
          left: ["water", "money", "meat"],
          right: ["мясо", "вода", "деньги"],
          answer: [1, 2, 0],
          hint: "Все три слова не считают.",
          why: "Water — вода, money — деньги, meat — мясо.",
        },
        {
          id: "z4-dopisat-neschitaemoe",
          kind: "gap",
          prompt: "Ты любишь рис. Допиши слово. Рис — rice.",
          before: "I like ",
          after: ".",
          answer: "rice",
          hint: "Слово стоит как есть, без всяких добавок.",
          why: "I like rice. К такому слову не приделывают ни a, ни -s.",
        },
        {
          id: "z5-napisat-o-vode",
          kind: "short",
          prompt: "Напиши, что тебе нравится вода. Вода — water.",
          answer: "I like water.",
          hint: "Слово стоит как есть.",
          why: "I like water. Перед ним ничего не ставят.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ni-a-ni-s",
      title: "Ни a, ни -s",
      estimatedMinutes: 13,
      outcome: "не ставить a и -s к таким словам",

      blocks: [
        {
          id: "zachem-dva-pravila",
          kind: "explain",
          text: [
            "У таких слов два запрета, и оба отменяют то, чему учили раньше.",
            "Первый: перед ними не ставят a. Не a water, а просто water.",
            "Второй: к ним не приделывают -s. Не waters, а water — сколько бы её ни " +
              "было.",
          ],
        },
        {
          id: "tablica-dva-zapreta",
          kind: "table",
          caption: "Как надо и как не надо",
          head: ["Верно", "Так не говорят"],
          rows: [
            ["water", "a water"],
            ["bread", "two breads"],
            ["money", "moneys"],
            ["I like rice.", "I like a rice."],
          ],
        },
        {
          id: "otmena-pravila-mnozhestvennogo",
          kind: "explain",
          text: [
            "В модуле «Один и много» правило было такое: много — значит -s.",
            "Здесь это правило не работает, и не потому, что оно неверное.",
            "Оно просто не о том: считать нечего, а значит и множественному числу " +
              "взяться неоткуда.",
          ],
        },
        {
          id: "v-kafe-govoryat-inache",
          kind: "note",
          tone: "info",
          text:
            "В кафе всё же говорят «a coffee» и «a tea».\n\nЭто короткая замена " +
            "словам «чашка кофе» и «чашка чая», и работает она только с заказом.",
        },
        {
          id: "primer-dvuh-zapretov",
          kind: "example",
          caption: "Два ряда рядом",
          text: "a book — two books\nwater — water\nbread — bread",
          explain:
            "В первом ряду слово меняется: появляется a, появляется -s. Во втором и " +
            "третьем слово одно и то же в любом случае.",
        },
        {
          id: "zapis-dvuh-zapretov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай, как это звучит",
          transcript: "a book, two books, water, bread",
        },
        {
          id: "slovar-dvuh-zapretov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "shop", translation: "магазин", example: "I work in a shop.", hint: "/ʃɒp/" },
            { term: "price", translation: "цена", example: "The price is here.", hint: "/praɪs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-otmetit-lishnee-a",
          kind: "hottext",
          prompt: "Отметь записи, где перед словом лишнее a.",
          parts: [
            { text: "I like water.", selectable: true },
            { text: " · " },
            { text: "I like a water.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like a book.", selectable: true },
            { text: " · " },
            { text: "I like a bread.", selectable: true, correct: true },
          ],
          hint: "Перед водой и хлебом a не ставят, перед книгой ставят.",
          why:
            "Верно: I like water и I like bread. А книгу считают, поэтому «I like a " +
            "book» без ошибки.",
        },
        {
          id: "z2-vybrat-bez-s",
          kind: "choice",
          prompt: "У тебя дома много хлеба. В каком предложении нет ошибки?",
          options: [
            { text: "I have got a lot of breads." },
            { text: "I have got a lot of bread.", correct: true },
            { text: "I have got a lot of a bread." },
          ],
          hint: "К такому слову не приделывают ни -s, ни a.",
          why: "I have got a lot of bread. Слово bread не меняется никогда.",
        },
        {
          id: "z3-dopisat-bez-a",
          kind: "gap",
          prompt: "Ты не любишь мясо. Допиши слово. Мясо — meat.",
          before: "I don't like ",
          after: ".",
          answer: "meat",
          hint: "Перед ним ничего не ставят.",
          why: "I don't like meat. Ни a, ни -s к этому слову не приходят.",
        },
        {
          id: "z4-otmetit-lishnee-s",
          kind: "hottext",
          prompt: "Отметь записи с лишним окончанием -s.",
          parts: [
            { text: "I have got money.", selectable: true },
            { text: " · " },
            { text: "I have got moneys.", selectable: true, correct: true },
            { text: " · " },
            { text: "I have got two books.", selectable: true },
            { text: " · " },
            { text: "I have got waters.", selectable: true, correct: true },
          ],
          hint: "Деньги и вода не считаются, книги считаются.",
          why:
            "Лишнее -s в «moneys» и «waters»: эти слова не считают. Верно: I have " +
            "got money и I have got water. А две книги пересчитать можно: two books.",
        },
        {
          id: "z5-napisat-bez-a",
          kind: "short",
          prompt: "Напиши, что ты не любишь мясо. Мясо — meat.",
          answer: "I don't like meat.",
          accept: ["I do not like meat."],
          hint: "Перед словом meat ничего не ставят.",
          why: "I don't like meat. Ни a, ни -s к нему не приходят.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "skolko-to",
      title: "Сколько-то: some water",
      estimatedMinutes: 12,
      outcome: "говорить о количестве: some water",

      blocks: [
        {
          id: "zachem-some-s-neschitaemym",
          kind: "explain",
          text: [
            "Сказать «вода» мало: в магазине нужна не вода вообще, а сколько-то воды.",
            "Для этого берут слово some: some water.",
            "Оно знакомо тебе с модуля «Числа, возраст, цена» — там оно стояло с " +
              "книгами и магазинами.",
          ],
        },
        {
          id: "tablica-some",
          kind: "table",
          caption: "Some с двумя видами слов",
          head: ["Английский", "Перевод"],
          rows: [
            ["some books", "несколько книг"],
            ["some water", "немного воды"],
            ["some bread", "немного хлеба"],
          ],
        },
        {
          id: "some-perevoditsya-po-raznomu",
          kind: "explain",
          text: [
            "Само слово some не меняется, а по-русски выходит по-разному.",
            "С книгами — «несколько», потому что книги считают.",
            "С водой — «немного», потому что воду не считают.",
          ],
        },
        {
          id: "ne-a-some",
          kind: "note",
          tone: "mistake",
          text:
            "«a some water» — так не говорят.\n\nСлова a и some вместе не идут: " +
            "либо одно, либо другое.",
        },
        {
          id: "primer-some",
          kind: "example",
          caption: "В магазине",
          text: "I'd like some bread.\nI'd like some water.\nI'd like some rice.",
          explain:
            "Во всех трёх стоит оборот I'd like из модуля «Мне нравится», а после " +
            "него — some и слово без всяких добавок.",
        },
        {
          id: "zapis-some",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три просьбы",
          transcript: "I'd like some bread. I'd like some water. I'd like some rice.",
        },
        {
          id: "any-v-voprose",
          kind: "note",
          tone: "info",
          text:
            "В вопросе рядом с some часто встречается any: Have you got any bread?" +
            "\n\nСлово any тебе знакомо с модуля «Здесь есть». Значит оно то же " +
            "самое — сколько-то.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-some",
          kind: "gap",
          prompt: "Ты просишь немного хлеба. Допиши недостающее слово.",
          before: "I'd like ",
          after: " bread.",
          answer: "some",
          hint: "Слово знакомо тебе по книгам и магазинам.",
          why: "I'd like some bread. Слово some годится и с хлебом, и с книгами.",
        },
        {
          id: "z2-vybrat-some",
          kind: "choice",
          prompt: "Ты просишь немного воды. В каком предложении нет ошибки?",
          options: [
            { text: "I'd like a some water." },
            { text: "I'd like some waters." },
            { text: "I'd like some water.", correct: true },
          ],
          hint: "Слова a и some вместе не идут, а -s к воде не приходит.",
          why: "I'd like some water. Ни a рядом с some, ни окончание -s тут не нужны.",
        },
        {
          id: "z3-otmetit-some",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой.",
          parts: [
            { text: "some bread", selectable: true },
            { text: " · " },
            { text: "a some bread", selectable: true, correct: true },
            { text: " · " },
            { text: "some books", selectable: true },
            { text: " · " },
            { text: "some breads", selectable: true, correct: true },
          ],
          hint: "Хлеб не считают, а книги считают.",
          why: "Верно: some bread и some books. Хлебу не нужны ни a, ни -s.",
        },
        {
          id: "z4-sobrat-some",
          kind: "order",
          prompt: "Собери просьбу: «Мне немного риса, пожалуйста.»",
          items: ["rice,", "some", "I'd like", "please."],
          answer: [2, 1, 0, 3],
          hint: "Сначала оборот I'd like, потом some.",
          why: "I'd like some rice, please. Слово some стоит перед названием.",
        },
        {
          id: "z5-napisat-some",
          kind: "short",
          prompt: "Попроси немного воды и добавь «пожалуйста». Вода — water.",
          answer: "I'd like some water, please.",
          accept: ["I would like some water, please."],
          hint: "Начни с оборота I'd like.",
          why: "I'd like some water, please. Полная запись I would like тоже верна.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "skolko-hleba",
      title: "Сколько хлеба: How much bread?",
      estimatedMinutes: 12,
      outcome: "спрашивать о количестве: How much bread?",

      blocks: [
        {
          id: "zachem-how-much",
          kind: "explain",
          text: [
            "Продавец спрашивает, сколько тебе хлеба. Или ты сам спрашиваешь у друга.",
            "Вопрос о количестве строится словами how much: How much bread?",
            "Их же ты знаешь по вопросу о цене: How much is it?",
          ],
        },
        {
          id: "tablica-how-much-i-many",
          kind: "table",
          caption: "Два вопроса о количестве",
          head: ["Английский", "Перевод", "О чём спрашивают"],
          rows: [
            ["How much bread?", "Сколько хлеба?", "то, что не считают"],
            ["How many books?", "Сколько книг?", "то, что считают"],
            ["How much is it?", "Сколько это стоит?", "цена"],
          ],
        },
        {
          id: "much-i-many-po-slovu",
          kind: "explain",
          text: [
            "Выбор между much и many зависит от слова, которое идёт следом.",
            "Слово считают — берут many: How many books?",
            "Слово не считают — берут much: How much water?",
          ],
        },
        {
          id: "ne-how-many-water",
          kind: "note",
          tone: "mistake",
          text:
            "«How many water?» — так не говорят.\n\nВоду не считают, значит и many " +
            "к ней не приходит. Верно: How much water?",
        },
        {
          id: "primer-how-much",
          kind: "example",
          caption: "В магазине",
          text: "— How much bread?\n— Some bread, please.\n— How many books?\n— Two books, please.",
          explain:
            "В первом вопросе слово bread не считают — стоит much. Во втором книги " +
            "считают — стоит many.",
        },
        {
          id: "zapis-how-much",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай два вопроса",
          transcript: "How much bread? How many books?",
        },
        {
          id: "how-much-eto-i-cena",
          kind: "note",
          tone: "info",
          text:
            "Вопрос How much is it? из модуля «Числа, возраст, цена» устроен так " +
            "же.\n\nЦену тоже не считают поштучно, поэтому и там стоит much.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-much",
          kind: "gap",
          prompt: "Ты спрашиваешь, сколько нужно воды. Допиши недостающее слово.",
          before: "How ",
          after: " water?",
          answer: "much",
          hint: "Воду не считают.",
          why: "How much water? С тем, что не считают, идёт much.",
        },
        {
          id: "z2-vybrat-much-ili-many",
          kind: "choice",
          prompt: "Ты спрашиваешь, сколько нужно книг. Как спросить?",
          options: [
            { text: "How much books?" },
            { text: "How many books?", correct: true },
            { text: "How many book?" },
          ],
          hint: "Книги считают, и во множественном числе у них окончание.",
          why: "How many books? Считают — значит many, и слово стоит с окончанием -s.",
        },
        {
          id: "z3-otmetit-much-i-many",
          kind: "hottext",
          prompt: "Отметь вопросы, где выбрано не то слово.",
          parts: [
            { text: "How much water?", selectable: true },
            { text: " · " },
            { text: "How many water?", selectable: true, correct: true },
            { text: " · " },
            { text: "How much books?", selectable: true, correct: true },
            { text: " · " },
            { text: "How many books?", selectable: true },
          ],
          hint: "Считают — many, не считают — much.",
          why: "Верно: How much water? и How many books?",
        },
        {
          id: "z4-sopostavit-much-many",
          kind: "match",
          prompt: "Сопоставь слово и вопрос, который с ним идёт.",
          left: ["rice", "shops", "money"],
          right: ["How many shops?", "How much money?", "How much rice?"],
          answer: [2, 0, 1],
          hint: "Считают только одно слово из трёх.",
          why: "Rice — How much rice? Shops — How many shops? Money — How much money?",
        },
        {
          id: "z5-sprosit-skolko",
          kind: "short",
          prompt: "Спроси, сколько нужно риса. Рис — rice.",
          answer: "How much rice?",
          hint: "Рис не считают.",
          why: "How much rice? С тем, что не считают, идёт much.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pokupka-v-magazine",
      title: "Покупка в магазине",
      estimatedMinutes: 13,
      outcome: "покупать в магазине",

      blocks: [
        {
          id: "zachem-pokupka",
          kind: "explain",
          text: [
            "Ты заходишь в магазин за хлебом и водой.",
            "Весь разговор укладывается в три шага: попросить, узнать цену, " +
              "поблагодарить.",
            "Все три у тебя уже есть — осталось поставить их подряд.",
          ],
        },
        {
          id: "tablica-shagov-pokupki",
          kind: "table",
          caption: "Три шага покупки",
          head: ["Шаг", "Как это выглядит"],
          rows: [
            ["попросить", "I'd like some bread, please."],
            ["узнать цену", "How much is it?"],
            ["поблагодарить", "Thanks!"],
          ],
        },
        {
          id: "prodavec-sprosit",
          kind: "explain",
          text: [
            "Продавец со своей стороны спросит примерно так же коротко.",
            "Can I help you? — «Вам помочь?» из модуля «Я умею».",
            "Anything else? — «Что-нибудь ещё?». Отвечают No, thank you.",
          ],
        },
        {
          id: "ne-give-me",
          kind: "note",
          tone: "mistake",
          text:
            "«Give me bread» звучит как приказ.\n\nВ магазине берут просьбу: I'd " +
            "like some bread, please. Или Can I have some bread?",
        },
        {
          id: "primer-pokupki",
          kind: "example",
          caption: "Разговор в магазине",
          text:
            "— Can I help you?\n— I'd like some bread, please.\n— Anything else?\n— No, thank you. How much is it?",
          explain:
            "Покупатель просит хлеб, отказывается от добавки и спрашивает цену. " +
            "Все три шага уложились в две реплики.",
        },
        {
          id: "zapis-pokupki",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай разговор в магазине",
          transcript: "Can I help you? I'd like some bread, please. Anything else? No, thank you.",
        },
        {
          id: "can-i-have-tozhe-goditsya",
          kind: "note",
          tone: "info",
          text:
            "Вместо I'd like часто говорят Can I have: Can I have some bread?\n\n" +
            "Оба оборота годятся, и оба ты уже знаешь.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-prosbu-v-magazine",
          kind: "choice",
          prompt: "Ты просишь в магазине немного хлеба. Как сказать?",
          options: [
            { text: "Give me bread." },
            { text: "I'd like some bread, please.", correct: true },
            { text: "I like bread." },
          ],
          hint: "В магазине просят, а не приказывают.",
          why:
            "I'd like some bread, please. Первое звучит как приказ, а третье говорит " +
            "о вкусе вообще.",
        },
        {
          id: "z2-dopisat-anything-else",
          kind: "gap",
          prompt: "Продавец спросил Anything else? Тебе больше ничего не нужно. Допиши недостающее.",
          before: "No, ",
          after: ".",
          answer: "thank you",
          accept: ["thanks"],
          hint: "С отказом идёт благодарность.",
          why: "No, thank you. Годится и короткое No, thanks.",
        },
        {
          id: "z3-sobrat-pokupku",
          kind: "order",
          prompt: "Собери разговор: сначала просьба, потом вопрос о цене, потом благодарность.",
          items: ["How much is it?", "I'd like some water, please.", "Thanks!"],
          answer: [1, 0, 2],
          hint: "Порядок задан в условии.",
          why: "I'd like some water, please. How much is it? Thanks!",
        },
        {
          id: "z4-otmetit-prikaz-v-magazine",
          kind: "hottext",
          prompt: "Отметь записи, которые в магазине звучат как приказ.",
          parts: [
            { text: "I'd like some rice, please.", selectable: true },
            { text: " · " },
            { text: "Give me rice.", selectable: true, correct: true },
            { text: " · " },
            { text: "Can I have some rice?", selectable: true },
            { text: " · " },
            { text: "Rice.", selectable: true, correct: true },
          ],
          hint: "Просьба строится оборотом I'd like или вопросом с can.",
          why:
            "В магазине говорят «I'd like some rice, please» или «Can I have some " +
            "rice?». Голое название и приказ там не годятся.",
        },
        {
          id: "z5-napisat-pokupku",
          kind: "short",
          prompt: "Попроси в магазине немного воды и добавь «пожалуйста». Вода — water.",
          answer: "I'd like some water, please.",
          accept: [
            "Can I have some water, please?",
            "I would like some water, please.",
          ],
          hint: "Годится и оборот I'd like, и вопрос с can.",
          why:
            "I'd like some water, please. Годится и Can I have some water, please?",
        },
      ],
    },

    // =====================================================================
    {
      slug: "zakaz-v-kafe",
      title: "Заказ в кафе",
      estimatedMinutes: 12,
      outcome: "заказывать в кафе",

      blocks: [
        {
          id: "zachem-zakaz",
          kind: "explain",
          text: [
            "В кафе разговор ещё короче, чем в магазине.",
            "Обычно хватает одной строки: I'd like a coffee, please.",
            "И здесь как раз тот случай, когда перед кофе ставят a.",
          ],
        },
        {
          id: "tablica-zakaza",
          kind: "table",
          caption: "Что говорят в кафе",
          head: ["Английский", "Перевод"],
          rows: [
            ["I'd like a coffee, please.", "Мне кофе, пожалуйста."],
            ["Can I have a cake?", "Можно мне пирожное?"],
            ["Anything else?", "Что-нибудь ещё?"],
          ],
        },
        {
          id: "pochemu-a-coffee",
          kind: "explain",
          text: [
            "Кофе не считают: это вещество, как вода.",
            "Но в кафе «a coffee» значит «чашка кофе», а чашки как раз считают.",
            "Поэтому в заказе a стоит, а в разговоре о вкусе — нет: I like coffee.",
          ],
        },
        {
          id: "ne-i-want",
          kind: "note",
          tone: "mistake",
          text:
            "«I want a coffee» звучит резко.\n\nВ кафе берут I'd like или Can I " +
            "have. Слово want оставь для рассказа о желаниях.",
        },
        {
          id: "primer-zakaza",
          kind: "example",
          caption: "Разговор в кафе",
          text:
            "— Can I help you?\n— I'd like a coffee and a cake, please.\n— Anything else?\n— No, thanks.",
          explain:
            "Два заказа соединены словом and. Отказ от добавки — коротким No, thanks.",
        },
        {
          id: "zapis-zakaza",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай заказ",
          transcript: "I'd like a coffee and a cake, please. Anything else? No, thanks.",
        },
        {
          id: "voda-v-kafe",
          kind: "note",
          tone: "info",
          text:
            "С водой в кафе говорят обоими способами: a water и some water.\n\n" +
            "Первое — про бутылку или стакан, второе — просто «немного воды».",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-zakaz",
          kind: "choice",
          prompt: "Ты заказываешь в кафе кофе. Как сказать?",
          options: [
            { text: "I want a coffee." },
            { text: "I'd like a coffee, please.", correct: true },
            { text: "I like coffee." },
          ],
          hint: "В кафе берут оборот I'd like.",
          why:
            "I'd like a coffee, please. Первое звучит резко, а третье говорит о " +
            "вкусе вообще.",
        },
        {
          id: "z2-dopisat-a-v-zakaze",
          kind: "gap",
          prompt: "Ты заказываешь пирожное. Допиши недостающее слово. Пирожное — cake.",
          before: "Can I have ",
          after: " cake?",
          answer: "a",
          hint: "Пирожные считают.",
          why: "Can I have a cake? Пирожное можно сосчитать, поэтому перед ним стоит a.",
        },
        {
          id: "z3-otmetit-zakaz-i-vkus",
          kind: "hottext",
          prompt: "Отметь записи, которыми делают заказ, а не говорят о вкусе.",
          parts: [
            { text: "I like coffee.", selectable: true },
            { text: " · " },
            { text: "I'd like a coffee, please.", selectable: true, correct: true },
            { text: " · " },
            { text: "Can I have a cake?", selectable: true, correct: true },
            { text: " · " },
            { text: "I like cake.", selectable: true },
          ],
          hint: "Заказ строится оборотом I'd like или вопросом с can.",
          why:
            "Заказ — «I'd like a coffee, please» и «Can I have a cake?». Два других " +
            "предложения о вкусе вообще.",
        },
        {
          id: "z4-sobrat-zakaz",
          kind: "order",
          prompt: "Собери заказ: «Мне кофе и пирожное, пожалуйста.»",
          items: ["and a cake,", "a coffee", "I'd like", "please."],
          answer: [2, 1, 0, 3],
          hint: "Сначала оборот I'd like, потом то, что заказываешь.",
          why: "I'd like a coffee and a cake, please. Два заказа соединяет and.",
        },
        {
          id: "z5-napisat-zakaz",
          kind: "short",
          prompt: "Закажи в кафе чай и добавь «пожалуйста». Чай — a tea.",
          answer: "I'd like a tea, please.",
          accept: ["Can I have a tea, please?", "I would like a tea, please."],
          hint: "Годится и оборот I'd like, и вопрос с can.",
          why: "I'd like a tea, please. Годится и Can I have a tea, please?",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chego-to-net",
      title: "Чего-то нет: I haven't got any water",
      estimatedMinutes: 12,
      outcome: "говорить, что чего-то нет: I haven't got any water",

      blocks: [
        {
          id: "zachem-any-v-otricanii",
          kind: "explain",
          text: [
            "Дома кончилась вода, и надо об этом сказать.",
            "В отрицании вместо some берут any: I haven't got any water.",
            "Оборот have got ты знаешь с модуля «Мои вещи», а слово any — с модуля " +
              "«Здесь есть».",
          ],
        },
        {
          id: "tablica-est-i-net",
          kind: "table",
          caption: "Есть и нет",
          head: ["Английский", "Перевод"],
          rows: [
            ["I have got some water.", "У меня есть немного воды."],
            ["I haven't got any water.", "У меня нет воды."],
            ["There isn't any bread.", "Хлеба нет."],
          ],
        },
        {
          id: "some-i-any-ryadom",
          kind: "explain",
          text: [
            "Правила «some только в утверждении» курс не даёт — оно не такое " +
              "простое.",
            "Держись образца: в утверждении обычно стоит some, в отрицании и в " +
              "вопросе — any.",
            "Образец покрывает почти всё, что встретится тебе в магазине.",
          ],
        },
        {
          id: "ne-havent-got-some",
          kind: "note",
          tone: "mistake",
          text:
            "«I haven't got some water» — так обычно не говорят.\n\nВ отрицании " +
            "берут any: I haven't got any water.",
        },
        {
          id: "primer-chego-to-net",
          kind: "example",
          caption: "Дома пусто",
          text: "I haven't got any bread.\nI haven't got any money.\nThere isn't any water.",
          explain:
            "Во всех трёх стоит any, и слово после него — без всяких добавок: ни a, " +
            "ни -s.",
        },
        {
          id: "zapis-chego-to-net",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I haven't got any bread. I haven't got any money. There isn't any water.",
        },
        {
          id: "any-i-v-voprose",
          kind: "note",
          tone: "info",
          text:
            "То же any идёт и в вопросе: Have you got any bread?\n\nОтвечают " +
            "коротко: Yes, I have. No, I haven't.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-any",
          kind: "gap",
          prompt: "У тебя дома нет хлеба. Допиши недостающее слово.",
          before: "I haven't got ",
          after: " bread.",
          answer: "any",
          hint: "В отрицании стоит не some.",
          why: "I haven't got any bread. В отрицании берут any.",
        },
        {
          id: "z2-vybrat-any",
          kind: "choice",
          prompt: "У тебя нет денег. В каком предложении нет ошибки?",
          options: [
            { text: "I haven't got any money.", correct: true },
            { text: "I haven't got any moneys." },
            { text: "I haven't got a money." },
          ],
          hint: "Деньги не считают.",
          why:
            "I haven't got any money. К слову money не приходят ни -s, ни a.",
        },
        {
          id: "z3-otmetit-some-v-otricanii",
          kind: "hottext",
          prompt: "Отметь отрицания, где вместо any стоит some.",
          parts: [
            { text: "I haven't got any water.", selectable: true },
            { text: " · " },
            { text: "I haven't got some water.", selectable: true, correct: true },
            { text: " · " },
            { text: "There isn't some bread.", selectable: true, correct: true },
            { text: " · " },
            { text: "There isn't any bread.", selectable: true },
          ],
          hint: "В отрицании держатся образца с any.",
          why: "Верно: I haven't got any water и There isn't any bread.",
        },
        {
          id: "z4-sobrat-otricanie",
          kind: "order",
          prompt: "Собери предложение: «У меня нет риса.»",
          items: ["rice", "any", "I haven't got"],
          answer: [2, 1, 0],
          hint: "Сначала оборот, потом any.",
          why: "I haven't got any rice. Слово any стоит перед названием.",
        },
        {
          id: "z5-napisat-otricanie",
          kind: "short",
          prompt: "Напиши, что у тебя нет воды. Вода — water.",
          answer: "I haven't got any water.",
          accept: ["I have not got any water."],
          hint: "В отрицании берут any.",
          why: "I haven't got any water. Слово water не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-o-pokupke",
      title: "Разговор о покупке целиком",
      estimatedMinutes: 13,
      outcome: "вести разговор о покупке целиком",

      blocks: [
        {
          id: "zachem-razgovor-o-pokupke",
          kind: "explain",
          text: [
            "Настоящий разговор в магазине редко идёт по одной строке.",
            "Продавец спрашивает, ты просишь, он уточняет количество, ты называешь " +
              "цену.",
            "Каждый кусок ты уже умеешь — собери их вместе.",
          ],
        },
        {
          id: "tablica-iz-chego-razgovor-o-pokupke",
          kind: "table",
          caption: "Из чего складывается разговор",
          head: ["Кто говорит", "Что говорит"],
          rows: [
            ["продавец", "Can I help you?"],
            ["покупатель", "I'd like some bread, please."],
            ["продавец", "How much bread?"],
            ["покупатель", "Two, please. How much is it?"],
          ],
        },
        {
          id: "poryadok-razgovora-o-pokupke",
          kind: "explain",
          text: [
            "Порядок один и тот же в любом магазине.",
            "Сначала просьба, потом уточнение количества, потом цена и " +
              "благодарность.",
            "Если чего-то нет, продавец скажет: Sorry, we haven't got any bread.",
          ],
        },
        {
          id: "ne-molchi",
          kind: "note",
          tone: "info",
          text:
            "На вопрос Anything else? молчать нельзя.\n\nОтвечают коротко: No, " +
            "thank you. Или называют, что ещё нужно.",
        },
        {
          id: "primer-razgovora-o-pokupke",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Can I help you?\n— I'd like some bread and some water, please.\n— Anything else?\n— No, thank you. How much is it?\n— Five hundred tenge.\n— Thanks!",
          explain:
            "Два товара соединены словом and. Дальше отказ от добавки, вопрос о цене " +
            "и благодарность. Разговор закончен.",
        },
        {
          id: "zapis-razgovora-o-pokupke",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай разговор целиком",
          transcript:
            "Can I help you? I'd like some bread and some water, please. Anything else? No, thank you. How much is it?",
        },
        {
          id: "tenge-i-cena",
          kind: "note",
          tone: "info",
          text:
            "Названия денег по-английски не переводят: tenge так и остаётся tenge." +
            "\n\nЧисла ты знаешь с модуля «Числа, возраст, цена».",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor-o-pokupke",
          kind: "order",
          prompt: "Собери разговор: сначала просьба, потом отказ от добавки, потом вопрос о цене.",
          items: ["No, thank you.", "I'd like some bread, please.", "How much is it?"],
          answer: [1, 0, 2],
          hint: "Порядок задан в условии.",
          why: "I'd like some bread, please. No, thank you. How much is it?",
        },
        {
          id: "z2-napisat-dva-tovara",
          kind: "short",
          prompt:
            "Попроси в магазине немного хлеба и немного воды. Хлеб — bread, вода — water.",
          answer: "I'd like some bread and some water, please.",
          accept: [
            "I'd like some bread and some water.",
            "Can I have some bread and some water, please?",
          ],
          hint: "Два товара соединяет and.",
          why:
            "I'd like some bread and some water, please. Слово some стоит перед " +
            "каждым из двух товаров.",
        },
        {
          id: "z3-dopisat-v-razgovore-o-pokupke",
          kind: "gap",
          prompt: "Продавец спрашивает, сколько тебе воды. Допиши недостающее слово.",
          before: "How ",
          after: " water?",
          answer: "much",
          hint: "Воду не считают.",
          why: "How much water? С тем, что не считают, идёт much.",
        },
        {
          id: "z4-otmetit-otvet-prodavcu",
          kind: "hottext",
          prompt: "Отметь ответы, которые на вопрос Anything else? не годятся.",
          parts: [
            { text: "No, thank you.", selectable: true },
            { text: " · " },
            { text: "Yes, please.", selectable: true },
            { text: " · " },
            { text: "I like bread.", selectable: true, correct: true },
            { text: " · " },
            { text: "How much bread?", selectable: true, correct: true },
          ],
          hint: "Вопрос спрашивает, нужно ли что-то ещё.",
          why:
            "На Anything else? отвечают No, thank you или Yes, please. Рассказ о " +
            "вкусе и встречный вопрос о количестве сюда не подходят.",
        },
        {
          id: "z5-razgovor-vsluh-o-pokupke",
          kind: "speak",
          prompt: "Разыграй вслух разговор в магазине: попроси хлеба, откажись от добавки, спроси цену.",
          phrase: "I'd like some bread, please. No, thank you. How much is it?",
          translation: "Мне немного хлеба, пожалуйста. Нет, спасибо. Сколько это стоит?",
          hint: "Три реплики: просьба, отказ, вопрос о цене.",
          why:
            "Три реплики — уже покупка. Всё, что нужно в магазине, у тебя есть.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.7,
    questions: [
      // Работа не повторяет задания уроков: другие слова, другие случаи, другой
      // пропущенный кусок.

      // ---- итог 1 ----
      {
        id: "q-neschitaemye-otmetit",
        kind: "hottext",
        outcome: "узнавать слова, которые не считают: water, bread, money",
        prompt: "Отметь слова, которые считают.",
        parts: [
          { text: "rice", selectable: true },
          { text: " · " },
          { text: "friend", selectable: true, correct: true },
          { text: " · " },
          { text: "shop", selectable: true, correct: true },
          { text: " · " },
          { text: "meat", selectable: true },
        ],
        hint: "Попробуй показать пальцем и сосчитать.",
        why: "Считают friend и shop: two friends, two shops. Рис и мясо не считают.",
      },
      {
        id: "q-neschitaemye-vybor",
        kind: "choice",
        outcome: "узнавать слова, которые не считают: water, bread, money",
        prompt: "В каком ряду ни одно слово не считают?",
        options: [
          { text: "water, money, rice", correct: true },
          { text: "book, water, shop" },
          { text: "friend, meat, book" },
        ],
        hint: "В ряду не должно быть ни книг, ни магазинов, ни друзей.",
        why: "Не считают water, money и rice. В двух других рядах есть считаемые слова.",
      },
      {
        id: "q-neschitaemye-sopostavit",
        kind: "match",
        outcome: "узнавать слова, которые не считают: water, bread, money",
        prompt: "Сопоставь слово и его перевод.",
        left: ["bread", "rice", "money"],
        right: ["деньги", "хлеб", "рис"],
        answer: [1, 2, 0],
        hint: "Все три слова не считают.",
        why: "Bread — хлеб, rice — рис, money — деньги.",
      },

      // ---- итог 2 ----
      {
        id: "q-bez-a-i-s-vybor",
        kind: "choice",
        outcome: "не ставить a и -s к таким словам",
        prompt: "У тебя дома много риса. В каком предложении нет ошибки?",
        options: [
          { text: "I have got a lot of rices." },
          { text: "I have got a lot of a rice." },
          { text: "I have got a lot of rice.", correct: true },
        ],
        hint: "К такому слову не приделывают ни -s, ни a.",
        why: "I have got a lot of rice. Слово rice не меняется никогда.",
      },
      {
        id: "q-bez-a-i-s-dopisat",
        kind: "gap",
        outcome: "не ставить a и -s к таким словам",
        prompt: "Ты любишь хлеб. Допиши слово. Хлеб — bread.",
        before: "I like ",
        after: ".",
        answer: "bread",
        hint: "Перед ним ничего не ставят.",
        why: "I like bread. Ни a, ни -s к этому слову не приходят.",
      },
      {
        id: "q-bez-a-i-s-otmetit",
        kind: "hottext",
        outcome: "не ставить a и -s к таким словам",
        prompt: "Отметь записи с ошибкой.",
        parts: [
          { text: "I like water.", selectable: true },
          { text: " · " },
          { text: "I like a money.", selectable: true, correct: true },
          { text: " · " },
          { text: "I like books.", selectable: true },
          { text: " · " },
          { text: "I like rices.", selectable: true, correct: true },
        ],
        hint: "Деньги и рис не считают, книги считают.",
        why: "Верно: I like water и I like books. Слова money и rice не меняются.",
      },

      // ---- итог 3 ----
      {
        id: "q-some-dopisat",
        kind: "gap",
        outcome: "говорить о количестве: some water",
        prompt: "Ты просишь немного риса. Допиши недостающее слово.",
        before: "I'd like ",
        after: " rice.",
        answer: "some",
        hint: "Слово знакомо тебе по книгам и магазинам.",
        why: "I'd like some rice. Слово some годится и с рисом, и с книгами.",
      },
      {
        id: "q-some-vybor",
        kind: "choice",
        outcome: "говорить о количестве: some water",
        prompt: "Ты просишь немного хлеба. В каком предложении нет ошибки?",
        options: [
          { text: "I'd like some bread.", correct: true },
          { text: "I'd like a some bread." },
          { text: "I'd like some breads." },
        ],
        hint: "Слова a и some вместе не идут, а -s к хлебу не приходит.",
        why: "I'd like some bread. Ни a рядом с some, ни окончание -s тут не нужны.",
      },
      {
        id: "q-some-napisat",
        kind: "short",
        outcome: "говорить о количестве: some water",
        prompt: "Попроси немного мяса и добавь «пожалуйста». Мясо — meat.",
        answer: "I'd like some meat, please.",
        accept: [
          "I would like some meat, please.",
          "Can I have some meat, please?",
        ],
        hint: "Начни с оборота I'd like.",
        why: "I'd like some meat, please. Годится и Can I have some meat, please?",
      },

      // ---- итог 4 ----
      {
        id: "q-how-much-dopisat",
        kind: "gap",
        outcome: "спрашивать о количестве: How much bread?",
        prompt: "Ты спрашиваешь, сколько нужно денег. Допиши недостающее слово.",
        before: "How ",
        after: " money?",
        answer: "much",
        hint: "Деньги не считают.",
        why: "How much money? С тем, что не считают, идёт much.",
      },
      {
        id: "q-how-much-vybor",
        kind: "choice",
        outcome: "спрашивать о количестве: How much bread?",
        prompt: "Ты спрашиваешь, сколько нужно магазинов обойти. Как спросить?",
        options: [
          { text: "How much shops?" },
          { text: "How many shops?", correct: true },
          { text: "How many shop?" },
        ],
        hint: "Магазины считают, и во множественном числе у них окончание.",
        why: "How many shops? Считают — значит many, и слово стоит с окончанием -s.",
      },
      {
        id: "q-how-much-sprosit",
        kind: "short",
        outcome: "спрашивать о количестве: How much bread?",
        prompt: "Спроси, сколько нужно воды. Вода — water.",
        answer: "How much water?",
        hint: "Воду не считают.",
        why: "How much water? С тем, что не считают, идёт much.",
      },

      // ---- итог 5 ----
      {
        id: "q-magazin-vybor",
        kind: "choice",
        outcome: "покупать в магазине",
        prompt: "Ты просишь в магазине немного риса. Как сказать?",
        options: [
          { text: "Give me rice." },
          { text: "I like rice." },
          { text: "Can I have some rice, please?", correct: true },
        ],
        hint: "В магазине просят, а не приказывают.",
        why:
          "Can I have some rice, please? Первое звучит как приказ, а второе говорит " +
          "о вкусе вообще.",
      },
      {
        id: "q-magazin-sobrat",
        kind: "order",
        outcome: "покупать в магазине",
        prompt: "Собери разговор: сначала просьба, потом вопрос о цене, потом благодарность.",
        items: ["Thanks!", "How much is it?", "I'd like some meat, please."],
        answer: [2, 1, 0],
        hint: "Порядок задан в условии.",
        why: "I'd like some meat, please. How much is it? Thanks!",
      },
      {
        id: "q-magazin-napisat",
        kind: "short",
        outcome: "покупать в магазине",
        prompt: "Попроси в магазине немного хлеба и добавь «пожалуйста». Хлеб — bread.",
        answer: "I'd like some bread, please.",
        accept: [
          "Can I have some bread, please?",
          "I would like some bread, please.",
        ],
        hint: "Годится и оборот I'd like, и вопрос с can.",
        why: "I'd like some bread, please. Годится и Can I have some bread, please?",
      },

      // ---- итог 6 ----
      {
        id: "q-kafe-dopisat",
        kind: "gap",
        outcome: "заказывать в кафе",
        prompt: "Ты заказываешь в кафе чай. Допиши недостающее слово. Чай — tea.",
        before: "I'd like ",
        after: " tea, please.",
        answer: "a",
        hint: "В кафе так говорят про чашку.",
        why: "I'd like a tea, please. В заказе a значит «чашка чая».",
      },
      {
        id: "q-kafe-vybor",
        kind: "choice",
        outcome: "заказывать в кафе",
        prompt: "Ты заказываешь в кафе пирожное. Как сказать?",
        options: [
          { text: "I want a cake." },
          { text: "Can I have a cake, please?", correct: true },
          { text: "I like cake." },
        ],
        hint: "В кафе берут I'd like или Can I have.",
        why:
          "Can I have a cake, please? Первое звучит резко, а третье говорит о вкусе " +
          "вообще.",
      },
      {
        id: "q-kafe-napisat",
        kind: "short",
        outcome: "заказывать в кафе",
        prompt: "Закажи в кафе кофе и пирожное. Кофе — a coffee, пирожное — a cake.",
        answer: "I'd like a coffee and a cake, please.",
        accept: [
          "I'd like a coffee and a cake.",
          "Can I have a coffee and a cake, please?",
        ],
        hint: "Два заказа соединяет and.",
        why: "I'd like a coffee and a cake, please. Слово and соединяет два заказа.",
      },

      // ---- итог 7 ----
      {
        id: "q-net-dopisat",
        kind: "gap",
        outcome: "говорить, что чего-то нет: I haven't got any water",
        prompt: "У тебя дома нет риса. Допиши недостающее слово.",
        before: "I haven't got ",
        after: " rice.",
        answer: "any",
        hint: "В отрицании стоит не some.",
        why: "I haven't got any rice. В отрицании берут any.",
      },
      {
        id: "q-net-vybor",
        kind: "choice",
        outcome: "говорить, что чего-то нет: I haven't got any water",
        prompt: "У тебя нет воды. В каком предложении нет ошибки?",
        options: [
          { text: "I haven't got any waters." },
          { text: "I haven't got a water." },
          { text: "I haven't got any water.", correct: true },
        ],
        hint: "Воду не считают.",
        why: "I haven't got any water. К слову water не приходят ни -s, ни a.",
      },
      {
        id: "q-net-napisat",
        kind: "short",
        outcome: "говорить, что чего-то нет: I haven't got any water",
        prompt: "Напиши, что у тебя нет денег. Деньги — money.",
        answer: "I haven't got any money.",
        accept: ["I have not got any money."],
        hint: "В отрицании берут any.",
        why: "I haven't got any money. Слово money не меняется.",
      },

      // ---- итог 8 ----
      {
        id: "q-razgovor-pokupka-sobrat",
        kind: "order",
        outcome: "вести разговор о покупке целиком",
        prompt: "Собери разговор: сначала просьба, потом отказ от добавки, потом благодарность.",
        items: ["No, thank you.", "Thanks!", "I'd like some water, please."],
        answer: [2, 0, 1],
        hint: "Порядок задан в условии.",
        why: "I'd like some water, please. No, thank you. Thanks!",
      },
      {
        id: "q-razgovor-pokupka-napisat",
        kind: "short",
        outcome: "вести разговор о покупке целиком",
        prompt:
          "Попроси в магазине немного мяса и немного риса. Мясо — meat, рис — rice.",
        answer: "I'd like some meat and some rice, please.",
        accept: [
          "I'd like some meat and some rice.",
          "Can I have some meat and some rice, please?",
        ],
        hint: "Два товара соединяет and.",
        why:
          "I'd like some meat and some rice, please. Слово some стоит перед каждым " +
          "из двух товаров.",
      },
      {
        id: "q-razgovor-pokupka-otmetit",
        kind: "hottext",
        outcome: "вести разговор о покупке целиком",
        prompt: "Отметь ответы, которые на вопрос Anything else? не годятся.",
        parts: [
          { text: "No, thank you.", selectable: true },
          { text: " · " },
          { text: "How much rice?", selectable: true, correct: true },
          { text: " · " },
          { text: "Yes, please. Some bread.", selectable: true },
          { text: " · " },
          { text: "I like meat.", selectable: true, correct: true },
        ],
        hint: "Вопрос спрашивает, нужно ли что-то ещё.",
        why:
          "На Anything else? отвечают No, thank you или называют, что ещё нужно. " +
          "Встречный вопрос и рассказ о вкусе сюда не подходят.",
      },
    ],
  },
};

export default module;
