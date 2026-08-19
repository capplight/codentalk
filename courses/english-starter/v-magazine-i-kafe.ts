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
 * — `much` С НЕИСЧИСЛЯЕМЫМ В ВОПРОСЕ (`How much bread?`) — B1, английский
 *   профиль, DETERMINERS quantity, «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS,
 *   INTERROGATIVE»: «Can use 'much' with uncountable nouns in interrogative
 *   contexts», пример источника — «How much television do you watch?».
 *
 *   ПОЧЕМУ ВЗЯТО: то же основание, что в модуле 9, где по этой же строке взят
 *   вопрос `How much is it?` — руководство A2 Key, с. 52, перечень
 *   вопросительных слов: «How; How much; How many; How often; How long». То
 *   есть Cambridge спрашивает `how much` ниже той ступени, на которую строку
 *   ставит профиль.
 *
 *   ЗАПИСАНО ПОСЛЕ РАЗБОРА. Сначала здесь стояло «источники не описывают
 *   вовсе». Это неверно: я искал в подкатегориях quantity и wh- и не заглянул
 *   в NOUNS uncountable, а главное — не сверился с собственным модулем 9,
 *   который цитирует ту же строку дословно. Пятый случай в курсе, когда
 *   «в источнике этого нет» не выдержало проверки.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — СЛОВ `a bottle of`, `a cup of`, `a piece of`. Ими обычно и считают
 *   неисчисляемое, и в источнике они есть: A2, NOUNS uncountable, «FORM:
 *   CONTAINERS, QUANTITY EXPRESSIONS», пример источника — «We have to bring a
 *   bottle of water». То есть ступень позволяет. Не взяты по объёму: модуль и
 *   так вводит отмену артикля, отмену -s, `some`, `any` и вопрос о количестве.
 *   Раньше здесь стояло «ни в одном списке этой ступени их нет» — неверно.
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
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "ОПОРА УРОКА ЧТЕНИЯ. с. 56, шкала Reading for orientation, графа A1: «Can find and understand simple, important information in advertisements, programmes for special events, leaflets and brochures (e.g. what is proposed, costs, the date and place of the event, departure times)» — урок держится на цене, и она здесь названа прямо. Там же графа Pre-A1: «Can find information about places, times and prices on posters, flyers and notices». ОГОВОРКА, КОТОРУЮ НЕЛЬЗЯ ОПУСКАТЬ: само слово «меню» у источника стоит на A2 — «Can find specific, predictable information in simple everyday material such as advertisements, prospectuses, menus, reference lists and timetables», с. 56, графа A2 (проверено построчно: метка A2 стоит выше этой строки). Урок опирается на строки A1 и Pre-A1 о ценах, а не на строку про меню, но умолчать об этом нельзя. Нашёл методист. ОПОРА УРОКА СЛУШАНИЯ. Council of Europe, CEFR Companion Volume 2020, с. 48, шкала Overall oral comprehension, графа A1, дословно: «Can follow language which is very slow and carefully articulated, with long pauses for them to assimilate meaning» — отсюда pace: \"slow\" во всех записях. Там же: «Can recognise concrete information (e.g. places and times) on familiar topics encountered in everyday life, provided it is delivered slowly and clearly» — отсюда то, что спрашиваем конкретную вещь, а не смысл целиком. Для записей в два голоса — с. 49, шкала Understanding conversation between other people, графа A1: «Can understand words/signs and short sentences in a simple conversation (e.g. between a customer and a salesperson in a shop), provided people communicate very slowly and very clearly». Разговор в кафе — это ровно скобка источника про покупателя и продавца.",
      license: "внутреннее использование, публично не называем",
    },
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
        "B1, DETERMINERS quantity, «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS, " +
        "INTERROGATIVE»: «Can use 'much' with uncountable nouns in interrogative " +
        "contexts», пример источника — «How much television do you watch?» — это " +
        "вопрос How much bread?, взят сверх ступени по тому же основанию, что и " +
        "How much is it? в модуле 9. " +
        "A2, NOUNS uncountable, «FORM: CONTAINERS, QUANTITY EXPRESSIONS»: «Can refer " +
        "to an individual example or quantity of an uncountable noun using words for " +
        "containers and countable items», пример источника — «We have to bring a " +
        "bottle of water» — это a bottle of и a cup of, ступень позволяет, но в " +
        "модуль они не взяты по объёму",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новое слово модуля с пометкой A1: rice n. A1. " +
        "Уже введены раньше: bread, milk (модуль 19), tea (модуль 1), coffee " +
        "(модуль 14), food и cake (модуль 21), water (модули 1 и 15), money " +
        "(модуль 6), meat (модуль 15), price (модуль 9), shop (модули 6 и 12), " +
        "much (модуль 9). " +
        "ПРЕЖНЯЯ РЕДАКЦИЯ называла новыми семь слов, а новое из них одно. Шесть " +
        "остальных курс уже вводил, и пять из них стояли здесь словарными карточками " +
        "по второму разу. Сверка была сделана для одной половины списка и не сделана " +
        "для другой. Нашёл методист",
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
    "находить в меню нужное и понимать, сколько это стоит",
    "понимать на слух заказ и цену в разговоре",
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
          zvuchat: ["a book — two books", "water", "a shop — two shops", "bread",
            "a friend — two friends", "money",
          ],
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
          zvuchat: ["water", "bread", "money", "rice", "meat",
          ],
          text: "water\nbread\nmoney\nrice\nmeat",
          explain:
            "Все пять — вещества и вещи без счёта. Ни к одному из них не приделывают " +
            "-s и не ставят перед ними a.",
        },
        // Запись убрана: каждое слово звучит в таблице выше и в примере под ней.
        {
          id: "slovar-neschitaemyh",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "rice", translation: "рис", example: "I like rice.", hint: "/raɪs/" },
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
          // Столбец «как не надо» не звучит нарочно: там показаны записи, которых в
          // английском нет. Услышанная неверная фраза запоминается наравне с верной.
          zvuchat: ["water", "bread", "money", "I like rice.",
          ],
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
          zvuchat: ["a book — two books", "water — water", "bread — bread",
          ],
          text: "a book — two books\nwater — water\nbread — bread",
          explain:
            "В первом ряду слово меняется: появляется a, появляется -s. Во втором и " +
            "третьем слово одно и то же в любом случае.",
        },
        // Запись убрана: верные записи звучат в таблице выше и в примере под ней.
        // Словаря у урока больше нет: слова shop и price введены раньше — shop в
        // модулях 6 и 12, price в модуле 9. Урок весь об отмене артикля и -s.

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
          zvuchat: ["some books", "some water", "some bread",
          ],
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
          zvuchat: ["I'd like some bread.", "I'd like some water.", "I'd like some rice.",
          ],
          text: "I'd like some bread.\nI'd like some water.\nI'd like some rice.",
          explain:
            "Во всех трёх стоит оборот I'd like из модуля «Мне нравится», а после " +
            "него — some и слово без всяких добавок.",
        },
        // Запись убрана: все обороты звучат в таблице выше и в примере под ней.
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
            "Продавец спрашивает, сколько тебе хлеба. Или ты спрашиваешь у друга.",
            "Вопрос о количестве строится словами how much: How much bread?",
            "Их же ты знаешь по вопросу о цене: How much is it?",
          ],
        },
        {
          id: "tablica-how-much-i-many",
          kind: "table",
          caption: "Два вопроса о количестве",
          zvuchat: ["How much bread?", "How many books?", "How much is it?",
          ],
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
          razgovor: true,
          text: "— How much bread?\n— Some bread, please.\n— How many books?\n— Two books, please.",
          explain:
            "В первом вопросе слово bread не считают — стоит much. Во втором книги " +
            "считают — стоит many.",
        },
        // Запись убрана: оба вопроса звучат в таблице выше, а разговор — целиком.
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
          zvuchat: ["I'd like some bread, please.", "How much is it?", "Thanks!",
          ],
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
            "Can I help you? — «Тебе помочь?» из модуля «Я умею».",
            "Anything else? — «Что-нибудь ещё?». Отвечают No, thank you.",
          ],
        },
        {
          id: "ne-give-me",
          kind: "note",
          tone: "mistake",
          text:
            "«Give me bread» — это указание, и звучит оно прямо.\n\nВ магазине берут просьбу: I'd " +
            "like some bread, please. Или Can I have some bread?",
        },
        {
          id: "primer-pokupki",
          kind: "example",
          caption: "Разговор в магазине",
          razgovor: true,
          text:
            "— Can I help you?\n— I'd like some bread, please.\n— Anything else?\n— No, thank you. How much is it?",
          explain:
            "Покупатель просит хлеб, отказывается от добавки и спрашивает цену. " +
            "Все три шага уложились в две реплики.",
        },
        // Запись убрана: все три шага звучат в таблице выше, а разговор — целиком.
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
          hint: "В магазине берут не указание, а просьбу.",
          why:
            "I'd like some bread, please. Первое — указание, оно звучит прямо, а " +
            "третье говорит о вкусе вообще.",
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
          prompt: "Отметь записи, которые не звучат как просьба.",
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
            "Просьбы здесь две: I'd like some rice, please и Can I have some rice? " +
            "Give me rice — указание: предложение начинается с глагола. Rice — " +
            "просто название товара, глагола в нём нет.",
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
          zvuchat: ["I'd like a coffee, please.", "Can I have a cake?", "Anything else?",
          ],
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
            "«I want a coffee» говорит о желании вообще, а не о заказе.\n\nВ кафе берут I'd like или Can I " +
            "have. Слово want оставь для рассказа о желаниях.",
        },
        {
          id: "primer-zakaza",
          kind: "example",
          caption: "Разговор в кафе",
          razgovor: true,
          text:
            "— Can I help you?\n— I'd like a coffee and a cake, please.\n— Anything else?\n— No, thanks.",
          explain:
            "Два заказа соединены словом and. Отказ от добавки — коротким No, thanks.",
        },
        // Запись убрана: все реплики звучат в таблице выше, а разговор — целиком.
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
            "I'd like a coffee, please. Первое говорит о желании вообще, а третье — " +
            "о вкусе.",
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
          zvuchat: ["I have got some water.", "I haven't got any water.",
            "There isn't any bread.",
          ],
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
            "Точного правила, которое подошло бы всегда, здесь нет.",
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
          zvuchat: ["I haven't got any bread.", "I haven't got any money.",
            "There isn't any water.",
          ],
          text: "I haven't got any bread.\nI haven't got any money.\nThere isn't any water.",
          explain:
            "Во всех трёх стоит any, и слово после него — без всяких добавок: ни a, " +
            "ни -s.",
        },
        // Запись убрана: и «есть», и «нет» звучат в таблице выше.
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
            "Продавец спрашивает, ты просишь, он уточняет количество, ты называешь, " +
              "сколько нужно, и спрашиваешь цену.",
            "Каждый кусок ты уже умеешь — собери их вместе.",
          ],
        },
        {
          id: "tablica-iz-chego-razgovor-o-pokupke",
          kind: "table",
          caption: "Из чего складывается разговор",
          zvuchat: ["Can I help you?", "I'd like some bread, please.", "How much bread?",
            "Two, please. How much is it?",
          ],
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
          razgovor: true,
          text:
            "— Can I help you?\n— I'd like some bread and some water, please.\n— Anything else?\n— No, thank you. How much is it?\n— Five hundred tenge.\n— Thanks!",
          explain:
            "Два товара соединены словом and. Дальше отказ от добавки, вопрос о цене " +
            "и благодарность. Разговор закончен.",
        },
        // Запись убрана: разговор выше звучит целиком и на два голоса.
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

    // =====================================================================
    // Урок чтения. Меню — текст, ради которого чтение на этой ступени и нужно
    // чаще всего: в чужой стране его читают в первый же день.
    // =====================================================================
    {
      slug: "chitaem-menyu",
      title: "Читаем меню",
      estimatedMinutes: 13,
      outcome: "находить в меню нужное и понимать, сколько это стоит",

      blocks: [
        {
          id: "zachem-chitat-menyu",
          kind: "explain",
          text: [
            "Меню читают не подряд, а глазами по столбцам: слева название, справа цена. " +
              "Внутри столбца строки идут по одной вещи.",
            "Слова в меню почти все знакомы. Новое чаще всего одно — название блюда, " +
              "и его можно понять по цене и по соседям.",
          ],
        },
        {
          id: "menyu-kafe",
          kind: "text",
          genre: "notice",
          title: "CAFE",
          body: [
            "Tea — 30",
            "Coffee — 50",
            "Bread — 20",
            "Rice and meat — 90",
          ],
        },
        {
          id: "razbor-menyu",
          kind: "note",
          tone: "info",
          text:
            "Если в строке два продукта через and, цена у неё одна — за всё вместе. " +
              "Так в меню и пишут, когда блюдо составлено из нескольких вещей.",
        },
        {
          id: "zapiska-o-pokupkah",
          kind: "text",
          genre: "message",
          title: "A message from Alim",
          body: [
            "Hi! Can you buy some bread and some water?",
            "I haven't got any money now. I'd like a coffee too. Alim",
          ],
          // Слово buy введено в модуле 15; словарик здесь не нужен.
        },

        // ---- задания ----
        {
          id: "z1-skolko-stoit-kofe",
          kind: "short",
          about: "menyu-kafe",
          prompt: "Посмотри на меню CAFE. Сколько стоит кофе? Ответь цифрой.",
          answer: "50",
          accept: ["fifty", "пятьдесят"],
          hint: "Найди строку со словом Coffee.",
          why: "Coffee — 50. Пятьдесят.",
        },
        {
          id: "z2-chto-deshevle",
          kind: "choice",
          about: "menyu-kafe",
          prompt: "Посмотри на меню CAFE. Что дешевле всего?",
          options: [
            { text: "Чай" },
            { text: "Хлеб", correct: true },
            { text: "Кофе" },
          ],
          hint: "Сравни четыре числа и выбери самое маленькое.",
          why: "Bread — 20. Двадцать меньше, чем 30, 50 и 90.",
        },
        {
          id: "z3-chto-vhodit-v-blyudo",
          kind: "choice",
          about: "menyu-kafe",
          prompt: "Посмотри на меню CAFE. Что входит в блюдо за 90?",
          options: [
            { text: "Только рис" },
            { text: "Рис и мясо", correct: true },
            { text: "Рис, мясо и хлеб" },
          ],
          hint: "Слово and соединяет две вещи в одной строке.",
          why:
            "Rice and meat — 90. Девяносто за всё вместе, а хлеб стоит отдельной " +
            "строкой.",
        },
        {
          id: "z4-chto-prosyat-kupit",
          kind: "hottext",
          about: "zapiska-o-pokupkah",
          prompt: "Прочитай записку от Алима. Отметь то, что он просит купить.",
          parts: [
            { text: "bread", selectable: true, correct: true },
            { text: "water", selectable: true, correct: true },
            { text: "coffee", selectable: true },
          ],
          hint: "Просьба стоит в первом предложении, до слова money.",
          why:
            "Can you buy some bread and some water? Кофе он упоминает отдельно, и " +
            "не как просьбу купить: I'd like a coffee too.",
        },
        {
          id: "z5-est-li-dengi",
          kind: "choice",
          about: "zapiska-o-pokupkah",
          prompt: "Прочитай записку от Алима. Есть ли у него сейчас деньги?",
          options: [
            { text: "Есть" },
            { text: "Нет", correct: true },
            { text: "Про деньги не сказано" },
          ],
          hint: "Найди предложение со словом any.",
          why: "I haven't got any money now. Денег нет.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-zakaz",
      title: "Слушаем заказ",
      estimatedMinutes: 13,
      outcome: "понимать на слух заказ и цену в разговоре",

      blocks: [
        {
          id: "zachem-slushat-zakaz",
          kind: "explain",
          text: [
            "Разговор в кафе идёт быстро и по одному образцу. Зная его, можно слушать " +
              "не всё подряд, а два места: что заказали и сколько это стоит.",
            "Заказ начинается с I'd like, цена — с It is. Оба оборота короткие и стоят " +
              "в начале своих реплик.",
          ],
        },
        {
          id: "obrazec-razgovora-v-kafe",
          kind: "table",
          caption: "Из чего состоит разговор в кафе",
          // Урок слушания: обе записи ниже остаются, они и есть его предмет. Кнопки
          // у реплик добавлены вдобавок.
          zvuchat: ["Can I help you?", "I'd like a coffee, please.", "Anything else?",
            "No, thank you.", "How much is it?",
          ],
          head: ["Очередь", "Кто говорит", "Что звучит"],
          rows: [
            ["1", "продавец", "Can I help you?"],
            ["2", "покупатель", "I'd like a coffee, please."],
            ["3", "продавец", "Anything else?"],
            ["4", "покупатель", "No, thank you."],
            ["5", "покупатель", "How much is it?"],
          ],
        },
        {
          id: "some-i-a-na-sluh",
          kind: "note",
          tone: "info",
          text:
            "В заказе слышно, что именно берут: a coffee — одну чашку, some bread — " +
              "немного хлеба. Слово перед названием и говорит, считают эту вещь или нет.",
        },
        {
          id: "zapis-zakaz-v-kafe-polnyy",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор в кафе",
          transcript:
            "Can I help you? — I'd like a tea and some bread, please. — " +
            "Anything else? — No, thank you. How much is it? — It is fifty.",
        },
        {
          id: "zapis-v-magazine-net",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор в магазине",
          transcript:
            "Have you got any water? — No, we haven't. — And rice? — " +
            "Yes, we have. It is twenty.",
        },

        // ---- задания ----
        {
          id: "z1-chto-zakazali-v-kafe",
          kind: "hottext",
          about: "zapis-zakaz-v-kafe-polnyy",
          prompt: "Послушай первую запись. Отметь то, что заказали.",
          parts: [
            { text: "tea", selectable: true, correct: true },
            { text: "bread", selectable: true, correct: true },
            { text: "coffee", selectable: true },
          ],
          hint: "Заказ идёт после слов I'd like.",
          why:
            "I'd like a tea and some bread, please. Кофе в этой записи не звучит " +
            "вовсе.",
        },
        {
          id: "z2-skolko-platit",
          kind: "short",
          about: "zapis-zakaz-v-kafe-polnyy",
          prompt: "Послушай первую запись. Сколько нужно заплатить? Ответь цифрой.",
          answer: "50",
          accept: ["fifty", "пятьдесят"],
          hint: "Цена звучит в самом конце, после It is.",
          why: "It is fifty. Пятьдесят.",
        },
        {
          id: "z3-est-li-voda",
          kind: "choice",
          about: "zapis-v-magazine-net",
          prompt: "Послушай вторую запись. Есть ли в магазине вода?",
          options: [
            { text: "Есть" },
            { text: "Нет", correct: true },
            { text: "Про воду не спрашивали" },
          ],
          hint: "Первый ответ идёт сразу после первого вопроса.",
          why: "Have you got any water? — No, we haven't. Воды нет.",
        },
        {
          id: "z4-skolko-stoit-ris",
          kind: "short",
          about: "zapis-v-magazine-net",
          prompt: "Послушай вторую запись. Сколько стоит рис? Ответь цифрой.",
          answer: "20",
          accept: ["twenty", "двадцать"],
          hint: "Цена звучит в последнем предложении.",
          why: "Yes, we have. It is twenty. Двадцать.",
        },
        {
          id: "z5-sdelat-zakaz-vsluh",
          kind: "speak",
          prompt:
            "Сделай вслух заказ из двух вещей и спроси цену. Два предложения.",
          phrase: "I'd like a coffee and some bread, please. How much is it?",
          translation: "Мне кофе и немного хлеба, пожалуйста. Сколько это стоит?",
          hint: "Перед coffee поставь a, перед bread — some.",
          why:
            "Заказ и вопрос о цене идут подряд, и этого хватает на любую покупку. " +
            "Слово please делает просьбу вежливой.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от уроков и после разбора переписана целиком:
      // первый её вид повторял задания уроков с заменой одного слова, вплоть до
      // совпадения подсказок. Здесь другие случаи и другой угол: реплики
      // продавца, исправление чужой ошибки, разбор причины, а не только
      // подстановка слова в тот же образец.

      // ---- итог 1 ----
      // ---- чтение и слушание ------------------------------------------
      // Другой случай, чем в уроках: там меню кафе и записка Алима, здесь
      // ценник магазина и разговор о том, чего нет.
      {
        id: "q-menyu-skolko-vsego",
        kind: "short",
        outcome: "находить в меню нужное и понимать, сколько это стоит",
        prompt:
          "Меню: «Tea — 30. Bread — 20. Rice — 40.» Сколько стоит чай и хлеб вместе? " +
          "Ответь цифрой.",
        answer: "50",
        accept: ["fifty", "пятьдесят"],
        why: "Tea — 30, Bread — 20. Тридцать и двадцать вместе дают пятьдесят.",
      },
      {
        id: "q-menyu-chto-dorozhe",
        kind: "choice",
        outcome: "находить в меню нужное и понимать, сколько это стоит",
        prompt:
          "То же меню: «Tea — 30. Bread — 20. Rice — 40.» Что дороже всего?",
        options: [
          { text: "Чай" },
          { text: "Рис", correct: true },
          { text: "Хлеб" },
        ],
        why: "Rice — 40. Сорок больше, чем тридцать и двадцать.",
      },
      {
        id: "q-na-sluh-chego-net",
        kind: "short",
        outcome: "понимать на слух заказ и цену в разговоре",
        zvuk: "Have you got any bread? — No, we haven't. We have got rice.",
        prompt:
          "Послушай запись. Что в магазине есть? Ответь английским словом.",
        answer: "rice",
        accept: ["some rice"],
        why: "We have got rice. Хлеба нет, рис есть.",
      },
      {
        id: "q-na-sluh-cena-zakaza",
        kind: "choice",
        outcome: "понимать на слух заказ и цену в разговоре",
        zvuk: "I'd like a coffee, please. — It is thirty.",
        prompt: "Послушай запись. Сколько стоит заказ?",
        options: [
          { text: "13" },
          { text: "30", correct: true },
          { text: "3" },
        ],
        why:
          "It is thirty. Тридцать: ударение падает на первую часть слова. У thirteen " +
          "оно было бы на конце.",
      },
      {
        id: "q-schitaemoe-v-ryadu",
        kind: "choice",
        outcome: "узнавать слова, которые не считают: water, bread, money",
        prompt:
          "В ряду milk, money, shop, bread только одно слово можно сосчитать. Какое?",
        options: [
          { text: "milk" },
          { text: "shop", correct: true },
          { text: "bread" },
        ],
        hint: "Два магазина назвать можно, а два молока — нет.",
        why: "Shop. Магазины считают: two shops. Молоко, деньги и хлеб не считают.",
      },
      {
        id: "q-otmetit-dva",
        kind: "hottext",
        outcome: "узнавать слова, которые не считают: water, bread, money",
        prompt: "Отметь записи, которые сказать нельзя.",
        parts: [
          { text: "two books", selectable: true },
          { text: " · " },
          { text: "two moneys", selectable: true, correct: true },
          { text: " · " },
          { text: "two shops", selectable: true },
          { text: " · " },
          { text: "two rices", selectable: true, correct: true },
        ],
        hint: "Пересчитать пальцем можно не всё.",
        why:
          "Two books и two shops сказать можно. Деньги и рис не считают, поэтому " +
          "two moneys и two rices — ошибка.",
      },
      {
        id: "q-v-chem-oshibka-moneys",
        kind: "choice",
        outcome: "узнавать слова, которые не считают: water, bread, money",
        prompt: "Друг написал: I have got two moneys. В чём здесь ошибка?",
        options: [
          {
            text: "Деньги не считают: ни two moneys, ни two money сказать нельзя.",
            correct: true,
          },
          { text: "Достаточно убрать -s: two money." },
          { text: "Ошибки нет, так сказать можно." },
        ],
        hint: "Подумай, можно ли пересчитать деньги пальцем.",
        why:
          "Деньги не считают вовсе, поэтому перед ними не ставят число. " +
          "Верно: I have got money.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-a-bread",
        kind: "short",
        outcome: "не ставить a и -s к таким словам",
        prompt: "Друг написал: I like a bread. Напиши это предложение без ошибки.",
        answer: "I like bread.",
        hint: "Одно слово здесь лишнее.",
        why: "I like bread. Перед словом bread ничего не ставят.",
      },
      {
        id: "q-there-is-milk",
        kind: "choice",
        outcome: "не ставить a и -s к таким словам",
        prompt: "Ты пишешь другу, что в магазине есть молоко. В каком предложении нет ошибки?",
        options: [
          { text: "There are milks in the shop." },
          { text: "There is a milk in the shop." },
          { text: "There is milk in the shop.", correct: true },
        ],
        hint: "Молоко не считают, поэтому ни a, ни -s ему не нужны.",
        why: "There is milk in the shop. Слово milk не меняется.",
      },
      {
        id: "q-mnogo-risa",
        kind: "gap",
        outcome: "не ставить a и -s к таким словам",
        prompt: "У тебя дома много риса. Допиши недостающее слово. Рис — rice.",
        before: "I have got a lot of ",
        after: ".",
        answer: "rice",
        hint: "Слово остаётся таким, каким стоит в словаре.",
        why: "I have got a lot of rice. Ни a, ни окончание -s к нему не приходят.",
      },

      // ---- итог 3 ----
      {
        id: "q-eshchyo-nemnogo-moloka",
        kind: "choice",
        outcome: "говорить о количестве: some water",
        prompt: "Продавец спросил Anything else? Тебе нужно ещё немного молока. Как ответить?",
        options: [
          { text: "Yes, please. Milks." },
          { text: "Yes, please. Some milk.", correct: true },
          { text: "Yes, please. A milk." },
        ],
        hint: "«Немного» по-английски — одно короткое слово.",
        why: "Yes, please. Some milk. Слово some и значит «немного».",
      },
      {
        id: "q-some-v-rasskaze",
        kind: "gap",
        outcome: "говорить о количестве: some water",
        prompt: "Ты рассказываешь другу, что у тебя есть немного мяса. Допиши недостающее слово.",
        before: "I have got ",
        after: " meat.",
        answer: "some",
        hint: "То же слово, с которым просят в магазине.",
        why: "I have got some meat. Слово some годится и в просьбе, и в рассказе.",
      },
      {
        id: "q-napisat-est-voda",
        kind: "short",
        outcome: "говорить о количестве: some water",
        // «I have got some water» стоит строкой таблицы урока: ученик вспоминал её
        // целиком. Взят другой продукт.
        prompt: "Напиши другу, что у тебя есть немного риса. Рис — rice.",
        answer: "I have got some rice.",
        accept: ["I've got some rice."],
        hint: "Возьми оборот have got.",
        why: "I have got some rice. Короткая запись I've got some rice тоже верна.",
      },

      // ---- итог 4 ----
      {
        id: "q-vopros-prodavtsa-o-rise",
        kind: "choice",
        outcome: "спрашивать о количестве: How much bread?",
        prompt: "Ты просишь риса, и продавец хочет узнать количество. Что он спросит?",
        options: [
          { text: "How many rice?" },
          { text: "How much rices?" },
          { text: "How much rice?", correct: true },
        ],
        hint: "Рис не считают, и окончание к нему не приходит.",
        why: "How much rice? С тем, что не считают, идёт much, а слово остаётся как есть.",
      },
      {
        id: "q-ispravit-how-many-water",
        kind: "short",
        outcome: "спрашивать о количестве: How much bread?",
        // Ровно эта пара — «How many water?» и «How much water?» — стоит во врезке
        // урока с готовым разбором и ещё раз в задании. Взято другое слово.
        prompt: "Друг написал: How many money? Напиши этот вопрос без ошибки.",
        answer: "How much money?",
        hint: "Заменить нужно одно слово.",
        why: "How much money? Деньги по-английски не считают, поэтому many здесь не годится.",
      },
      {
        id: "q-sprosit-skolko-edy",
        kind: "short",
        outcome: "спрашивать о количестве: How much bread?",
        prompt: "Спроси, сколько нужно еды. Еда — food.",
        answer: "How much food?",
        hint: "Еду пальцем не пересчитать.",
        why: "How much food? Еду не считают, поэтому вопрос строится с much, а не many.",
      },

      // ---- итог 5 ----
      {
        id: "q-sobrat-nachalo-razgovora",
        kind: "order",
        outcome: "покупать в магазине",
        prompt:
          "Собери разговор: продавец предлагает помощь, ты просишь молока, продавец спрашивает про добавку.",
        items: ["Anything else?", "Can I help you?", "I'd like some milk, please."],
        answer: [1, 2, 0],
        hint: "Разговор начинает продавец.",
        why: "Can I help you? I'd like some milk, please. Anything else?",
      },
      {
        id: "q-otmetit-slova-prodavtsa",
        kind: "hottext",
        outcome: "покупать в магазине",
        prompt: "Отметь то, что говорит продавец.",
        parts: [
          { text: "Can I help you?", selectable: true, correct: true },
          { text: " · " },
          { text: "I'd like some rice, please.", selectable: true },
          { text: " · " },
          { text: "Anything else?", selectable: true, correct: true },
          { text: " · " },
          { text: "How much is it?", selectable: true },
        ],
        hint: "Продавец спрашивает, а покупатель просит и узнаёт цену.",
        why:
          "Продавец говорит Can I help you? и Anything else? Просьба и вопрос о " +
          "цене — слова покупателя.",
      },
      {
        id: "q-otvetit-prodavtsu-prosboy",
        kind: "short",
        outcome: "покупать в магазине",
        prompt:
          "Продавец спросил Can I help you? Попроси немного молока и добавь «пожалуйста». Молоко — milk.",
        answer: "I'd like some milk, please.",
        accept: [
          "Can I have some milk, please?",
          "I would like some milk, please.",
        ],
        hint: "Ответь просьбой, а не рассказом о том, что тебе нравится.",
        why: "I'd like some milk, please. Годится и Can I have some milk, please?",
      },

      // ---- итог 6 ----
      {
        id: "q-sopostavit-mesto-i-zakaz",
        kind: "match",
        outcome: "заказывать в кафе",
        prompt: "Сопоставь просьбу и её английскую запись.",
        left: [
          "в кафе — одну чашку чая",
          "в магазине — немного хлеба",
          "в магазине — немного воды",
        ],
        right: ["some bread", "some water", "a tea"],
        answer: [2, 0, 1],
        hint: "Чашку сосчитать можно, хлеб и воду — нет.",
        why:
          "В кафе — a tea: чашка одна, и её считают. В магазине — some bread и " +
          "some water.",
      },
      {
        id: "q-dobavka-v-kafe",
        kind: "gap",
        outcome: "заказывать в кафе",
        prompt: "В кафе спросили Anything else? Ты хочешь ещё чашку кофе. Допиши недостающее слово.",
        before: "Yes, please. Can I have ",
        after: " coffee?",
        answer: "a",
        hint: "Речь об одной чашке.",
        why: "Yes, please. Can I have a coffee? В заказе a значит «чашка».",
      },
      {
        id: "q-zakazat-chay-i-pirozhnoe",
        kind: "short",
        outcome: "заказывать в кафе",
        prompt: "Закажи в кафе чай и пирожное, добавь «пожалуйста». Чай — a tea, пирожное — a cake.",
        answer: "I'd like a tea and a cake, please.",
        accept: [
          "Can I have a tea and a cake, please?",
          "I would like a tea and a cake, please.",
        ],
        hint: "Перед каждым заказом стоит a.",
        why: "I'd like a tea and a cake, please. Слово a стоит перед каждым из двух заказов.",
      },

      // ---- итог 7 ----
      {
        id: "q-net-moloka-u-prodavtsa",
        kind: "choice",
        outcome: "говорить, что чего-то нет: I haven't got any water",
        prompt: "В магазине нет молока. Что скажет продавец?",
        options: [
          { text: "Sorry, we haven't got any milk.", correct: true },
          { text: "Sorry, we haven't got some milk." },
          { text: "Sorry, we haven't got a milk." },
        ],
        hint: "В отрицании слово some уступает место другому.",
        why: "Sorry, we haven't got any milk. В отрицании берут any, и слово milk не меняется.",
      },
      {
        id: "q-otmetit-chego-net",
        kind: "hottext",
        outcome: "говорить, что чего-то нет: I haven't got any water",
        prompt: "Отметь предложения, в которых чего-то нет.",
        parts: [
          { text: "There is some bread.", selectable: true },
          { text: " · " },
          { text: "There isn't any bread.", selectable: true, correct: true },
          { text: " · " },
          { text: "I have got some money.", selectable: true },
          { text: " · " },
          { text: "I haven't got any money.", selectable: true, correct: true },
        ],
        hint: "Ищи isn't и haven't.",
        why:
          "Чего-то нет в There isn't any bread и I haven't got any money. Два " +
          "других предложения говорят, что вещь есть.",
      },
      {
        id: "q-napisat-net-edy",
        kind: "short",
        outcome: "говорить, что чего-то нет: I haven't got any water",
        prompt: "Напиши, что у тебя нет еды. Еда — food.",
        answer: "I haven't got any food.",
        accept: ["I have not got any food."],
        hint: "После haven't got стоит any.",
        why: "I haven't got any food. Слово food не меняется.",
      },

      // ---- итог 8 ----
      {
        id: "q-sobrat-razgovor-iz-chetyryoh",
        kind: "order",
        outcome: "вести разговор о покупке целиком",
        prompt:
          "Собери разговор: продавец предлагает помощь, ты просишь хлеба, продавец спрашивает про добавку, ты отказываешься.",
        items: [
          "Anything else?",
          "I'd like some bread, please.",
          "No, thank you.",
          "Can I help you?",
        ],
        answer: [3, 1, 0, 2],
        hint: "Первым говорит продавец, последним — ты.",
        why: "Can I help you? I'd like some bread, please. Anything else? No, thank you.",
      },
      {
        id: "q-soglasitsya-na-dobavku",
        kind: "short",
        outcome: "вести разговор о покупке целиком",
        prompt:
          "Продавец спросил Anything else? Тебе нужно ещё немного риса. " +
          "Согласись и назови товар.",
        answer: "Yes, please. Some rice.",
        accept: [
          "Yes, please. I'd like some rice.",
          "Yes, please. Can I have some rice?",
          "Yes, please. Some rice, please.",
        ],
        hint: "Сначала согласись, потом назови товар.",
        why: "Yes, please. Some rice. Годится и полный ответ: Yes, please. I'd like some rice.",
      },
      {
        id: "q-konets-razgovora",
        kind: "choice",
        outcome: "вести разговор о покупке целиком",
        prompt: "Покупка сделана, деньги отданы. Что сказать продавцу в конце?",
        options: [
          { text: "Thanks!", correct: true },
          { text: "Anything else?" },
          { text: "Can I help you?" },
        ],
        hint: "Две другие записи говорит продавец.",
        why: "Thanks! Так покупатель заканчивает разговор.",
      },
    ],
  },
};

export default module;
