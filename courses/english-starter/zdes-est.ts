import type { Module } from "@/lib/content/types";

/**
 * Модуль 13 курса «Английский с нуля»: здесь есть.
 *
 * Программа: docs/programma-english-starter.md, модуль 13 — «сообщать, что
 * где-то что-то есть»; грамматика: `there is`, `there are`.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. Сам оборот — A1, и подтверждён дважды. English Grammar Profile, VERBS
 *    «there is/are»: «FORM: 'THERE IS' — Can use 'there is' + singular noun
 *    phrase as complement», пример источника «In my College there is a big
 *    library»; «FORM: 'THERE ARE' — Can use 'there are' + plural noun phrase as
 *    complement», пример «There are two bathrooms». И руководство Cambridge для
 *    младших ступеней, с. 29–30, грамматический список ступени Pre A1 Starters:
 *    «There is/There are — There is a monkey in the tree. There are some books on
 *    the table». То есть оборот стоит даже ниже A1. ОСТОРОЖНО СО ССЫЛКОЙ: список
 *    «что нового на A1 Movers» — это с. 52, оборота там нет; первая редакция этой
 *    шапки называла с. 30 списком Movers, ошибку нашёл методист.
 *
 * 2. `some` перед множественным — A1: DETERMINERS quantity «FORM: WITH PLURAL
 *    NOUNS», пример источника — «Near my home there are some shops», то есть
 *    ровно наш оборот. Второй раз то же сочетание стоит в списке Cambridge
 *    выше: «There are some books on the table».
 *
 * 3. Слова о жилье — Oxford 3000, все A1: kitchen, bedroom, bathroom, bath,
 *    flat, garden, bed, wall, tree, TV, television, people, cinema, library,
 *    market, restaurant, but. Слова прежних модулей: room, house, school,
 *    picture, window, door, table, chair, street, book.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ И ПОЧЕМУ — ЧИТАТЬ ОБЯЗАТЕЛЬНО:
 *
 * — ОТРИЦАНИЕ `There isn't` / `There aren't`. English Grammar Profile ставит его
 *   на B1: «FORM: NEGATIVE — Can use 'There' + 'be' + 'n't' with countable and
 *   uncountable nouns», пример источника «There isn't any noise». Пример
 *   источника при этом сложнее нашего: там неисчисляемое существительное. Наши
 *   предложения — только с исчисляемым: There isn't a garden, There aren't any
 *   shops. Про `any` — отдельный пункт ниже.
 * — ВОПРОС `Is there…?` / `Are there…?`. Строки о нём нет ни на одной ступени: в
 *   English Grammar Profile подраздел `there is/are` вопросительной формы не
 *   описывает вовсе.
 *
 *   Основание держать оба здесь: тот же список Pre A1 Starters (с. 29) вводит
 *   глаголы сразу во всех формах — «Positive, negative, question, imperative and
 *   short-answer forms, including contractions». Без вопроса модуль теряет то,
 *   ради чего он нужен: спросить, есть ли поблизости магазин. Без отрицания на
 *   вопрос нельзя ответить «нет».
 * — СЛОВО `any` в вопросе и в отрицании во множественном числе. Ступень: A2 —
 *   DETERMINERS quantity, «FORM: WITH PLURAL AND UNCOUNTABLE NOUNS» («some»,
 *   «any», «no», «more», «a lot of»), и NEGATION, A2, «FORM: DETERMINERS 'ANY',
 *   'MUCH', 'MANY' — Can use determiners 'any', 'much' and 'many' with nouns in
 *   negative contexts».
 *
 *   Почему всё-таки взят: без него естественного отрицания во множественном в
 *   английском нет вовсе — «There aren't shops» не говорят. Пример источника к
 *   строке B1 об отрицании это и показывает: «There isn't any noise». В вопросе
 *   `some` не ошибка, но значит «я почти уверен, что есть», а урок ставит
 *   ученика в положение приезжего, который как раз не знает.
 *
 *   ИСТОРИЯ ПРАВКИ, чтобы никто не переоткрывал: первая редакция брала `any`
 *   молча, а шапка утверждала, что его нет, — незаявленное превышение, нашёл
 *   методист. Затем `any` был снят целиком. Владелец как преподаватель решил
 *   вернуть его объявленным: оттенок важнее экономии на ступени.
 * — СОЮЗ `but`. По ступени вопросов нет: English Grammar Profile, CONJUNCTIONS
 *   coordinating, A1 — «Can use single word conjunctions ('and, but, or') to
 *   combine sentences». Но программа отдаёт союзы модулю 24, а здесь он взят
 *   одиннадцатью модулями раньше — ради предложения «библиотеки нет, но есть
 *   школа». Первая редакция вдобавок утверждала, что союз знаком по модулю 1, —
 *   ложная ссылка, нашёл методист.
 * — ОБОРОТ `I live in`. Настоящее простое время программа отдаёт модулю 14, и
 *   модуль 3 в своей шапке прямо записал решение не брать `I live in` раньше.
 *   Здесь он взят как готовые три слова: без него рассказ о жилье не начать,
 *   потому что первый шаг называет само жильё. Ученику это сказано прямо во
 *   врезке `i-live-celikom`. По ступени вопросов нет: PRESENT present simple,
 *   A1, «FORM: AFFIRMATIVE» и «USE: HABITS AND GENERAL FACTS».
 *
 *   ЭТО РЕШЕНИЕ УРОВНЯ ПРЕПОДАВАТЕЛЯ, а не вывод из источника. Записано
 *   владельцу: docs/zadachi-vladeltsa.md, п. 1.10 — общий счёт превышений.
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ:
 *
 * — `there is` + неисчисляемое (There is some water) — A2, отдельная строка
 *   «FORM: 'THERE IS' + UNCOUNTABLE». Неисчисляемые программа отдаёт модулю 23;
 * — `there is/are` + `a lot of` — тоже A2, отдельная строка. Слово `a lot of`
 *   ученик знает из модуля 9, но с этим оборотом оно здесь не соединяется;
 * — настоящего простого времени, кроме готового `I live in` выше: «в доме стоит
 *   стол» строится через there is, а не через stand;
 * — слова `sofa`: в Oxford 3000 его нет вовсе, есть только в словнике A2 Key.
 *
 * ОПОРА НА ПРЕДЫДУЩИЕ МОДУЛИ: предлоги места и названия мест в городе — модуль
 * 12; числа — модуль 9; множественное число — модуль 8; артикли a/an — модуль 3,
 * the — модуль 10; вопрос перестановкой и краткий ответ — модуль 4; отрицание с
 * not и короткая форма — модуль 5; слово `some` — модуль 9.
 *
 * Звук есть: синтез речи Azure, британские голоса — решение владельца
 * 16 августа 2026 (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "zdes-est",
  title: "Здесь есть",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, VERBS «there is/are», «FORM: 'THERE IS'»: «Can use 'there is' + singular noun " +
        "phrase as complement», примеры источника — «My home is nice, there is a nice " +
        "garden», «In my College there is a big library». " +
        "A1, там же «FORM: 'THERE ARE'»: «Can use 'there are' + plural noun phrase as " +
        "complement», примеры — «There are two bathrooms», «There are many shops and " +
        "schools». " +
        "A1, DETERMINERS quantity «FORM: WITH PLURAL NOUNS»: «Can use a limited range of " +
        "quantifying determiners with plural nouns ('some', 'lots of', 'a lot of' and " +
        "numbers)», пример источника — «Near my home there are some shops». " +
        "A1, NOUNS «noun phrases - grammatical functions», «FORM: AS COMPLEMENT OF 'BE'», " +
        "пример источника — «There is a big garden». " +
        "ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО, всё из того же подраздела: A2 «FORM: 'THERE IS' + " +
        "UNCOUNTABLE», A2 «FORM: 'THERE IS/ARE' + A LOT OF», B1 «FORM: 'THERE' + MODAL " +
        "VERBS». " +
        "ВЗЯТО СВЕРХ СТУПЕНИ: B1 «FORM: NEGATIVE» — «Can use 'There' + 'be' + 'n't' with " +
        "countable and uncountable nouns», пример источника «There isn't any noise». " +
        "Вопросительной формы оборота подраздел не описывает ни на одной ступени. " +
        "ТАКЖЕ ВЗЯТО СВЕРХ СТУПЕНИ: A2, DETERMINERS quantity «FORM: WITH PLURAL AND " +
        "UNCOUNTABLE NOUNS» и A2, NEGATION «FORM: DETERMINERS 'ANY', 'MUCH', 'MANY'» — " +
        "слово any в вопросе и в отрицании во множественном. Решение владельца как " +
        "преподавателя: без any естественного отрицания во множественном нет вовсе",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29–30, грамматический список ступени Pre A1 Starters: «There is/There are — " +
        "There is a monkey in the tree. There are some books on the table». То есть оборот " +
        "стоит ДАЖЕ НИЖЕ A1, а сочетание there are + some подтверждено вторым источником. " +
        "ВНИМАНИЕ СЛЕДУЮЩЕМУ ПРОВЕРЯЮЩЕМУ: список «что нового на A1 Movers» — это с. 52, и " +
        "оборота there is/are в нём нет. Прежняя редакция этой записи называла с. 30 " +
        "списком Movers — ошибка, нашёл методист. И ещё: тот же текст извлекается из PDF с " +
        "листа 11, потому что это оглавление с уменьшенной копией страницы; ссылаться надо " +
        "на печатную нумерацию, с. 29. " +
        "с. 29, тот же список, строка «Verbs»: формы перечислены разом — " +
        "«Positive, negative, question, imperative and short-answer forms, including " +
        "contractions». Это основание давать вопрос и отрицание вместе с утверждением, " +
        "хотя отдельных строк о них нет. " +
        "с. 50, A1 Movers, задание устной части (Part 2, рассказ по картинкам): «The " +
        "structures candidates will need most frequently in this task are There is/are, " +
        "the present tense of the verbs be and have (got)» — оборот назван среди самых " +
        "нужных. СТУПЕНЬ ЗДЕСЬ ДРУГАЯ, и это важно: цитата стоит рядом с перечнем Pre A1 " +
        "Starters, но сама она из раздела A1 Movers. Подпись уточнил методист, чтобы " +
        "довод не читался как подтверждение низкой ступени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — опора урока письма",
      section:
        "УРОК ПИСЬМА «Пишем о своём жилье». с. 67, шкала Creative writing, графа A1, дословно: «Can describe in very simple language what a room looks like». Описание комнаты названо источником прямо — это и есть предмет урока. " +
        "Там же, с. 66, шкала Overall written production, графа A1: «Can produce simple isolated phrases and sentences» — четыре отдельных предложения о жилье это и есть. " +
        "ОГОВОРКА О СОСЕДНЕЙ ГРАФЕ: с. 68, шкала Reports and essays, графы A1 и Pre-A1 — «No descriptors available». Рассуждения на ступени нет. " +
        "ПОРОГ В ДВЕНАДЦАТЬ СЛОВ — НАШ, а не из источника: столько выходит в четырёх коротких предложениях, которых требует условие. Порог нарочно взят ниже образца (в нём 23 слова), чтобы не отсекать короткий верный ответ. " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find).",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 63, Sustained monologue: describing experience, A1: «Can describe themselves,  ОПОРА ДВУХ УРОКОВ УМЕНИЙ, добавленных позже остальных. Чтение — с. 56, графа A1: «Can recognise familiar names, words/signs and very basic phrases on simple notices in the most common everyday situations» и «Can find and understand simple, important information in advertisements, programmes for special events, leaflets and brochures». Слушание — с. 52, графа A1: «Can pick out concrete information (e.g. places and times) from short recordings on familiar everyday topics, provided they are delivered very slowly and clearly». Обе строки сверены построчно обоими разборами и стоят именно в графе A1: в модуле 12 я такую же цитату приписал A1, а она была из Pre-A1. " +
        "what they do and where they live» — рассказ о своём жилье назван прямо. " +
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves " +
        "and other people, where they live, people they know, things they have» — вопрос о " +
        "жилье тоже. " +
        "ОГОВОРКА: описания говорят об умении рассказать, но не называют оборота, которым " +
        "это делают. Оборот взят из двух источников выше",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля, все с пометкой A1: kitchen, bedroom, bathroom, bath, flat, " +
        "garden, bed, wall, tree, TV, television, people, cinema, library, market, " +
        "restaurant, but (conj.). Слова прежних модулей: room, house, school, shop, " +
        "station, street, park, window, door, table, chair, picture, book, some, near, " +
        "there. " +
        "СЛОВО any: в Oxford 3000 строка целиком — «any det., pron. A1, adv. A2». Мы берём " +
        "определитель, то есть A1. Выше ступени не " +
        "само слово, а его употребление в вопросе и отрицании: это A2 по English Grammar " +
        "Profile, см. запись выше. " +
        "НЕ ВЗЯТЫ ПО СТУПЕНИ: fridge, lamp, cupboard — все A2; sofa — в Oxford 3000 его " +
        "нет вовсе, только в словнике A2 Key, с. 28",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e, конечный безударный через ə, слоговой согласный без ə, r вместо " +
        "ɹ (CLAUDE.md, раздел о британской норме). Отдельно: there — /ðeə/, оба файла " +
        "сходятся; kitchen — /ˈkɪtʃɪn/; bathroom — /ˈbɑːθruːm/, гласный долгий",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить, что где-то есть один предмет: There is a shop",
    "говорить, что предметов несколько: There are two rooms",
    "называть комнаты и то, что в них стоит",
    "говорить о нескольких, не называя числа: There are some books",
    "спрашивать, есть ли что-то, и коротко отвечать: Is there a shop? — Yes, there is",
    "говорить, чего нет: There isn't a garden",
    "рассказывать, что есть в городе: cinema, library, market, restaurant",
    "рассказывать о своём жилье четырьмя предложениями",
    "понимать по объявлению, что есть в жилье и рядом с ним",
    "понимать на слух, что где-то есть, а чего нет",
    "находить в объявлении о сдаче потерянное there и форму be не по числу",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "there-is",
      title: "Здесь есть: there is",
      estimatedMinutes: 13,
      outcome: "говорить, что где-то есть один предмет: There is a shop",

      blocks: [
        {
          id: "zachem-there-is",
          kind: "explain",
          text: [
            "Ты объясняешь знакомому, где живёшь, и хочешь сказать: рядом со станцией есть " +
              "магазин. Не «магазин у станции», а именно «у станции есть магазин».",
            "По-английски такое предложение начинают с оборота there is: There is a shop " +
              "near the station. Оборот — это несколько слов, которые всегда идут вместе.",
            "Слово there знакомо по модулю «Где это»: там оно значило «там». Здесь оно не " +
              "значит ничего и только открывает предложение. Смысл несёт то, что идёт " +
              "после is.",
          ],
        },
        {
          id: "tablica-there-is",
          kind: "table",
          caption: "Что где есть",
          zvuchat: ["There is a shop near the station.", "There is a park behind the school.",
            "There is a bus stop opposite the hotel.", "There is a picture on the wall.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["There is a shop near the station.", "Рядом со станцией есть магазин."],
            ["There is a park behind the school.", "За школой есть парк."],
            ["There is a bus stop opposite the hotel.", "Напротив гостиницы есть остановка."],
            ["There is a picture on the wall.", "На стене есть картина."],
          ],
        },
        {
          id: "poryadok-there-is",
          kind: "explain",
          text: [
            "Порядок в таких предложениях один: there, потом is, потом сам предмет, потом " +
              "место. Держись его — он подходит всегда.",
            "There is | a shop | near the station.",
            "Место в конце — то самое, что разбирали в модуле «Где это»: предлог и " +
              "название места.",
          ],
        },
        {
          id: "there-i-artikl",
          kind: "note",
          tone: "info",
          text:
            "После there is стоит a: предмет называют впервые, собеседник о нём ещё не " +
            "знает. Это правило из модуля «Дни, даты, время», урок «A и the».\n\nА место в " +
            "конце идёт с the: near the station — станция в разговоре одна.",
        },
        {
          id: "ne-put-s-it-is",
          kind: "note",
          tone: "mistake",
          text:
            "There is и It is переводятся похоже, но говорят о разном.\n\nIt is a shop — «это " +
            "магазин»: ты показываешь на здание и говоришь, что оно такое.\n\nThere is a " +
            "shop — «магазин есть»: ты сообщаешь, что он там вообще стоит.\n\nПро магазин у " +
            "станции нельзя сказать It is a shop near the station: получится «это магазин, " +
            "который у станции».",
        },
        {
          id: "primer-there-is",
          kind: "example",
          caption: "Разговор о районе",
          razgovor: true,
          text:
            "— Where is your flat?\n— It's near the station.\n— Is it a good flat?\n" +
            "— Yes, it is. There is a park behind the house.",
          explain:
            "В первых строках знакомые вопросы из прежних модулей. Новое только последнее " +
            "предложение: оно не говорит, где парк, а сообщает, что парк вообще есть.",
        },
        // Запись убрана: все четыре предложения звучат в таблице выше.
        {
          id: "slovar-there-is",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "there is", translation: "есть, имеется", example: "There is a shop.", hint: "/ðeər ɪz/" },
            { term: "flat", translation: "квартира", example: "My flat is near the park.", hint: "/flæt/" },
            { term: "wall", translation: "стена", example: "a picture on the wall", hint: "/wɔːl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-there-is",
          kind: "gap",
          prompt: "За школой есть парк. Допиши два недостающих слова.",
          before: "",
          after: " a park behind the school.",
          answer: "There is",
          hint: "Такое предложение всегда начинается одинаково.",
          why:
            "There is a park behind the school. Сначала there, потом форма is, потом сам " +
            "предмет.",
        },
        {
          id: "z2-there-ili-it",
          kind: "choice",
          prompt: "Ты сообщаешь, что рядом с домом есть магазин. Как сказать?",
          options: [
            { text: "There is a shop near the house.", correct: true },
            { text: "It is a shop near the house." },
            { text: "Is a shop near the house." },
          ],
          hint: "It is говорят о предмете, на который показывают.",
          why:
            "There is a shop near the house. Запись It is сообщала бы, что это за здание, а не " +
            "то, что магазин вообще есть.",
        },
        {
          id: "z3-sobrat-there-is",
          kind: "order",
          prompt: "Собери предложение: «Напротив гостиницы есть остановка».",
          items: ["opposite the hotel", "a bus stop", "There is"],
          answer: [2, 1, 0],
          hint: "Сначала оборот there is, потом предмет, и только в конце место.",
          why:
            "There is a bus stop opposite the hotel. Место всегда идёт последним.",
        },
        {
          id: "z4-otmetit-poryadok",
          kind: "hottext",
          prompt: "Отметь записи с неверным порядком слов.",
          parts: [
            { text: "There is a park near the school.", selectable: true },
            { text: " · " },
            { text: "There is near the school a park.", selectable: true, correct: true },
            { text: " · " },
            { text: "There is a shop in the street.", selectable: true },
            { text: " · " },
            { text: "There a shop is in the street.", selectable: true, correct: true },
          ],
          hint: "Держись порядка из урока: there, is, предмет, место.",
          why:
            "Порядок нарушен во второй и четвёртой записях: во второй место втиснуто между " +
            "is и предметом, в четвёртой форма is стоит после предмета.",
        },
        {
          id: "z5-napisat-there-is",
          kind: "short",
          prompt: "На стене есть картина. Запиши предложение целиком, начни с There.",
          answer: "There is a picture on the wall.",
          exact: true,
          accept: ["There is a picture on the wall"],
          hint: "Предмет называют впервые, значит перед ним стоит a.",
          why:
            "There is a picture on the wall. Перед картиной стоит a — о ней говорят впервые. " +
            "Перед стеной the: собеседнику ясно, о какой стене речь.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "there-are",
      title: "Их несколько: there are",
      estimatedMinutes: 13,
      outcome: "говорить, что предметов несколько: There are two rooms",

      blocks: [
        {
          id: "zachem-there-are",
          kind: "explain",
          text: [
            "В квартире не одна комната, а две. Сказать There is two rooms нельзя: форма is " +
              "идёт с одним предметом.",
            "Когда предметов несколько, ставят there are: There are two rooms.",
            "Это то же правило, что в модуле «Один и много»: is — об одном, are — о " +
              "нескольких. Меняется только форма be, всё остальное на местах.",
          ],
        },
        {
          id: "tablica-there-are",
          kind: "table",
          caption: "Один и несколько",
          zvuchat: ["There is a room.", "There are two rooms.", "There is a shop.",
            "There are three shops.", "There is a tree.", "There are four trees.",
            "There is a chair.", "There are five chairs.",
          ],
          head: ["Один", "Несколько", "Перевод второго столбца"],
          rows: [
            ["There is a room.", "There are two rooms.", "Есть две комнаты."],
            ["There is a shop.", "There are three shops.", "Есть три магазина."],
            ["There is a tree.", "There are four trees.", "Есть четыре дерева."],
            ["There is a chair.", "There are five chairs.", "Есть пять стульев."],
          ],
        },
        {
          id: "okonchanie-i-are",
          kind: "note",
          tone: "mistake",
          text:
            "Меняются сразу два слова, и второе часто забывают.\n\n«There are two room» — " +
            "форма are стоит верно, а окончание у слова room потеряно. Верно: There are " +
            "two rooms.",
        },
        {
          id: "chislo-pered-nazvaniem",
          kind: "note",
          tone: "info",
          text:
            "Число ставят перед названием предмета, как в русском: two rooms, three shops. " +
            "Артикль при этом уходит — это правило из модуля «Один и много».",
        },
        {
          id: "primer-there-are",
          kind: "example",
          caption: "Разговор о квартире",
          razgovor: true,
          text:
            "— Is your flat big?\n— No, it isn't. There are two rooms.\n— And a garden?\n" +
            "— Yes, there is a garden behind the house.",
          explain:
            "Во второй строке о комнатах говорят there are — их две. В четвёртой сад один, " +
            "и потому there is.",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-there-are",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "there are", translation: "есть, имеются", example: "There are two rooms.", hint: "/ðeər ɑː/" },
            { term: "garden", translation: "сад", example: "a garden behind the house", hint: "/ˈgɑːdn/" },
            { term: "tree", translation: "дерево", example: "a tree in the garden", hint: "/triː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-is-ili-are",
          kind: "choice",
          prompt: "В доме три комнаты. Какую форму выбрать?",
          options: [
            { text: "There are three rooms.", correct: true },
            { text: "There is three rooms." },
            { text: "There are three room." },
          ],
          hint: "Смотри на число предметов и на окончание слова room.",
          why:
            "There are three rooms. Комнат несколько — значит are, и окончание -s тоже " +
            "нужно.",
        },
        {
          id: "z2-dopisat-are",
          kind: "gap",
          prompt: "В саду четыре дерева. Допиши недостающее слово.",
          before: "There ",
          after: " four trees in the garden.",
          answer: "are",
          hint: "Деревьев больше одного.",
          why: "There are four trees in the garden. Форма are идёт с несколькими предметами.",
        },
        {
          id: "z3-otmetit-okonchanie",
          kind: "hottext",
          prompt: "Отметь записи, где потеряно окончание.",
          parts: [
            { text: "There are two shops.", selectable: true },
            { text: " · " },
            { text: "There are two shop.", selectable: true, correct: true },
            { text: " · " },
            { text: "There are five chair.", selectable: true, correct: true },
            { text: " · " },
            { text: "There are five chairs.", selectable: true },
          ],
          hint: "После числа больше одного название предмета меняется.",
          why:
            "Окончание потеряно во второй и третьей записях: two shop, five chair. После are " +
            "название предмета всегда стоит во множественном числе.",
        },
        {
          id: "z4-perestroit-vo-mnozhestvennoe",
          kind: "short",
          prompt: "Скажи то же самое о трёх магазинах: «There is a shop.» Начни с There are.",
          answer: "There are three shops.",
          exact: true,
          accept: ["There are three shops"],
          hint: "Меняются два слова: форма be и название предмета.",
          why:
            "There are three shops. Артикль a уходит, на его место встаёт число.",
        },
        {
          id: "z5-sopostavit-formy",
          kind: "match",
          prompt: "Сопоставь начало предложения и его продолжение.",
          left: ["There is", "There are", "There isn't"],
          right: ["two shops.", "a picture on the wall.", "a garden."],
          answer: [1, 0, 2],
          hint: "Форма is идёт с одним предметом, are — с несколькими.",
          why:
            "There is a picture on the wall. There are two shops. There isn't a garden.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "komnaty-i-veshchi",
      title: "Комнаты и вещи в них",
      estimatedMinutes: 13,
      outcome: "называть комнаты и то, что в них стоит",

      blocks: [
        {
          id: "zachem-komnaty",
          kind: "explain",
          text: [
            "Квартиру снимают, дом описывают, комнату в гостинице просят поменять. Всюду " +
              "нужны одни и те же слова: кухня, спальня, ванная.",
            "Слов будет четыре. Из room — «комната» сложены bedroom и bathroom, а kitchen " +
              "придётся запомнить.",
          ],
        },
        {
          id: "tablica-komnat",
          kind: "table",
          caption: "Комнаты",
          // Звучит слово, а не транскрипция рядом с ним: транскрипцию читают глазами.
          zvuchat: ["room", "bedroom", "bathroom", "kitchen",
          ],
          head: ["Слово", "Перевод", "Как читается"],
          rows: [
            ["room", "комната", "/ruːm/"],
            ["bedroom", "спальня", "/ˈbedruːm/"],
            ["bathroom", "ванная", "/ˈbɑːθruːm/"],
            ["kitchen", "кухня", "/ˈkɪtʃɪn/"],
          ],
        },
        {
          id: "slova-iz-dvuh",
          kind: "note",
          tone: "info",
          text:
            "Bedroom и bathroom сложены каждое из двух слов: bed — кровать, bath — ванна, " +
            "room — комната. Отсюда и смысл: комната с кроватью, комната с ванной.\n\n" +
            "Пишут их слитно, одним словом, и ударение стоит на первой части.",
        },
        {
          id: "tablica-veshchey",
          kind: "table",
          caption: "Что стоит в комнате",
          zvuchat: ["bed", "There is a bed in the bedroom.", "table",
            "There is a table in the kitchen.", "chair", "There are two chairs.", "TV",
            "There is a TV in the room.", "picture", "There is a picture on the wall.",
            "window", "There are two windows.",
          ],
          head: ["Слово", "Перевод", "Пример"],
          rows: [
            ["bed", "кровать", "There is a bed in the bedroom."],
            ["table", "стол", "There is a table in the kitchen."],
            ["chair", "стул", "There are two chairs."],
            ["TV", "телевизор", "There is a TV in the room."],
            ["picture", "картина", "There is a picture on the wall."],
            ["window", "окно", "There are two windows."],
          ],
        },
        {
          id: "tv-i-television",
          kind: "note",
          tone: "info",
          text:
            "У телевизора два названия. Television — полное, TV — короткое. Короткое читают " +
            "по названиям букв: /ˌtiː ˈviː/.",
        },
        {
          id: "primer-komnat",
          kind: "example",
          caption: "Квартира по комнатам",
          zvuchat: ["There are two rooms in my flat.",
            "There is a bed and a table in the bedroom.", "There is a TV on the table.",
          ],
          text:
            "There are two rooms in my flat.\nThere is a bed and a table in the bedroom.\n" +
            "There is a TV on the table.",
          explain:
            "Три предложения об одной квартире. В первом комнат несколько — there are. Во " +
            "втором два предмета соединены словом and, но форма be одна: is.",
        },
        // Запись убрана: каждое слово звучит в таблицах выше.
        {
          id: "slovar-komnat",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bedroom", translation: "спальня", example: "a bed in the bedroom", hint: "/ˈbedruːm/" },
            { term: "bathroom", translation: "ванная", example: "The bathroom is small.", hint: "/ˈbɑːθruːm/" },
            { term: "kitchen", translation: "кухня", example: "a table in the kitchen", hint: "/ˈkɪtʃɪn/" },
            { term: "bed", translation: "кровать", example: "There is a bed.", hint: "/bed/" },
            { term: "bath", translation: "ванна", example: "a bath in the bathroom", hint: "/bɑːθ/" },
            { term: "TV", translation: "телевизор", example: "a TV in the room", hint: "/ˌtiː ˈviː/" },
            { term: "television", translation: "телевизор (полное слово)", example: "a television in the room", hint: "/ˈtelɪvɪʒn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-komnatu",
          kind: "gap",
          prompt: "В спальне есть кровать. Допиши название комнаты.",
          before: "There is a bed in the ",
          after: ".",
          answer: "bedroom",
          hint: "Слово сложено из двух: кровать и комната.",
          why: "Bedroom — комната с кроватью. Пишется слитно, одним словом.",
        },
        {
          id: "z2-sopostavit-komnaty",
          kind: "match",
          prompt: "Сопоставь комнату и то, что в ней стоит.",
          left: ["kitchen", "bedroom", "bathroom"],
          right: ["a bed", "a bath", "a table"],
          answer: [2, 0, 1],
          hint: "Каждое из двух длинных слов подсказывает ответ само.",
          why: "В кухне стол, в спальне кровать, в ванной ванна.",
        },
        {
          id: "z3-otmetit-komnaty",
          kind: "hottext",
          prompt: "Отметь слова, которые называют комнату.",
          parts: [
            { text: "kitchen", selectable: true, correct: true },
            { text: " · " },
            { text: "chair", selectable: true },
            { text: " · " },
            { text: "bathroom", selectable: true, correct: true },
            { text: " · " },
            { text: "tree", selectable: true },
          ],
          hint: "Сверься с таблицей комнат.",
          why: "Kitchen и bathroom — комнаты. Chair — стул, tree — дерево.",
        },
        {
          id: "z4-napisat-o-kuhne",
          kind: "short",
          prompt: "На кухне есть стол. Запиши предложение целиком, начни с There.",
          answer: "There is a table in the kitchen.",
          exact: true,
          accept: ["There is a table in the kitchen"],
          hint: "Стол называют впервые, а кухня в квартире одна.",
          why:
            "There is a table in the kitchen. Перед столом a, перед кухней the.",
        },
        {
          id: "z5-sobrat-o-komnate",
          kind: "order",
          prompt: "Собери предложение: «В комнате есть телевизор».",
          items: ["in the room", "There is", "a TV"],
          answer: [1, 2, 0],
          hint: "Место идёт в конце.",
          why: "There is a TV in the room. Порядок тот же, что и в первом уроке модуля.",
        },
        {
          id: "z6-skolko-okon",
          kind: "short",
          prompt: "В комнате два окна. Запиши предложение целиком, начни с There.",
          answer: "There are two windows in the room.",
          exact: true,
          accept: ["There are two windows in the room"],
          hint: "Окон больше одного — значит меняются два слова.",
          why:
            "There are two windows in the room. Форма are и окончание -s у слова window.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "some-neskolko",
      title: "Несколько: there are some",
      estimatedMinutes: 12,
      outcome: "говорить о нескольких, не называя числа: There are some books",

      blocks: [
        {
          id: "zachem-some",
          kind: "explain",
          text: [
            "Ты говоришь, что на столе лежат книги. Считать их незачем — важно, что они " +
              "там есть, и их несколько.",
            "Для этого перед названием ставят some: There are some books on the table.",
            "Слово some знакомо по модулю «Числа, возраст, цена». Здесь оно работает так " +
              "же и встаёт сразу после there are.",
          ],
        },
        {
          id: "tablica-some",
          kind: "table",
          caption: "С числом и без числа",
          zvuchat: ["There are three books.", "There are some books.", "There are two shops.",
            "There are some shops.", "There are five people.", "There are some people.",
          ],
          head: ["Число названо", "Число не названо", "Перевод второго столбца"],
          rows: [
            ["There are three books.", "There are some books.", "Есть несколько книг."],
            ["There are two shops.", "There are some shops.", "Есть несколько магазинов."],
            ["There are five people.", "There are some people.", "Там несколько человек."],
          ],
        },
        {
          id: "some-tolko-so-mnozhestvennym",
          kind: "note",
          tone: "mistake",
          text:
            "Some идёт только с несколькими предметами, и форма be при нём всегда are.\n\n" +
            "«There is some book» сказать нельзя: если книга одна, нужен артикль a — There " +
            "is a book.",
        },
        {
          id: "some-i-okonchanie",
          kind: "note",
          tone: "info",
          text:
            "Окончание -s после some остаётся на месте: some books, some shops, some " +
            "chairs. Слово some числа не заменяет, оно только говорит, что предметов " +
            "несколько.",
        },
        {
          id: "primer-some",
          kind: "example",
          caption: "Разговор о комнате",
          razgovor: true,
          text:
            "— Is the room big?\n— Yes, it is. There is a table and some chairs.\n" +
            "— And a TV?\n— Yes, there is a TV on the table.",
          explain:
            "Во второй строке стол один — перед ним a, стульев несколько — перед ними some. " +
            "Форма be одна на оба предмета, и выбирают её по первому: стол один, значит is.",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-some",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "some", translation: "несколько, какие-то", example: "some books", hint: "/sʌm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-some",
          kind: "gap",
          prompt: "На столе несколько книг, сколько именно — неважно. Допиши недостающее слово.",
          before: "There are ",
          after: " books on the table.",
          answer: "some",
          hint: "Это слово встречалось в модуле про числа.",
          why:
            "There are some books on the table. Слово some говорит, что книг несколько, но " +
            "не называет числа.",
        },
        {
          id: "z2-some-ili-a",
          kind: "choice",
          prompt: "В комнате несколько стульев. Как сказать?",
          options: [
            { text: "There are some chairs.", correct: true },
            { text: "There is some chair." },
            { text: "There are some chair." },
          ],
          hint: "Some идёт только с несколькими предметами.",
          why:
            "There are some chairs. Форма are и окончание -s: стульев больше одного.",
        },
        {
          id: "z3-otmetit-some",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой.",
          parts: [
            { text: "There are some shops.", selectable: true },
            { text: " · " },
            { text: "There is some shop.", selectable: true, correct: true },
            { text: " · " },
            { text: "There are some people.", selectable: true },
            { text: " · " },
            { text: "There are some book.", selectable: true, correct: true },
          ],
          hint: "Проверь две вещи: форму be и окончание.",
          why:
            "Ошибка во второй и четвёртой записях. Во второй магазин один, значит нужен a; в " +
            "четвёртой потеряно окончание -s.",
        },
        {
          id: "z4-napisat-some",
          kind: "short",
          prompt: "Рядом со станцией несколько магазинов. Запиши предложение целиком, начни с There.",
          answer: "There are some shops near the station.",
          exact: true,
          accept: ["There are some shops near the station"],
          hint: "Число не называют, поэтому вместо него стоит some.",
          why:
            "There are some shops near the station. Станция одна — перед ней the.",
        },
        {
          id: "z5-sobrat-so-some",
          kind: "order",
          prompt: "Собери предложение: «В саду несколько деревьев».",
          items: ["some trees", "in the garden", "There are"],
          answer: [2, 0, 1],
          hint: "Порядок прежний: оборот, предмет, место.",
          why: "There are some trees in the garden.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "est-li",
      title: "Есть ли здесь: Is there?",
      estimatedMinutes: 13,
      outcome: "спрашивать, есть ли что-то, и коротко отвечать: Is there a shop? — Yes, there is",

      blocks: [
        {
          id: "zachem-vopros",
          kind: "explain",
          text: [
            "Ты в чужом городе и ищешь магазин. Спросить Where is the shop? нельзя: это " +
              "вопрос о магазине, который точно есть, а ты этого не знаешь.",
            "Нужен другой вопрос: есть ли здесь магазин вообще. По-английски — Is there a " +
              "shop near here?",
            "Строится он перестановкой первых двух слов, как все вопросы с be из модуля " +
              "«Вопрос и краткий ответ»: There is → Is there.",
          ],
        },
        {
          id: "tablica-voprosa",
          kind: "table",
          caption: "Сообщение и вопрос",
          zvuchat: ["There is a shop near here.", "Is there a shop near here?",
            "There is a bathroom in the flat.", "Is there a bathroom in the flat?",
            "There are two rooms.", "Are there two rooms?", "There are some books.",
            "Are there any books?",
          ],
          head: ["Сообщение", "Вопрос"],
          rows: [
            ["There is a shop near here.", "Is there a shop near here?"],
            ["There is a bathroom in the flat.", "Is there a bathroom in the flat?"],
            ["There are two rooms.", "Are there two rooms?"],
            ["There are some books.", "Are there any books?"],
          ],
        },
        {
          id: "some-i-any-v-voprose",
          kind: "note",
          tone: "info",
          text:
            "Смотри последнюю строку таблицы: в сообщении стоит some, а в вопросе — any.\n\n" +
            "Some значит «несколько есть». В вопросе о том, есть ли что-то, такое слово " +
            "прозвучало бы так, будто ты уже знаешь ответ. А ты как раз не знаешь — " +
            "поэтому any.\n\n" +
            "Запомни пару целиком: There are some books. — Are there any books?",
        },
        {
          id: "kratkiy-otvet-there",
          kind: "explain",
          text: [
            "Отвечают на такой вопрос коротко, и в ответе повторяют there — как повторяли " +
              "местоимение в модуле «Вопрос и краткий ответ».",
            "Is there a shop near here? — Yes, there is. Или: No, there isn't.",
            "Are there two rooms? — Yes, there are. Или: No, there aren't.",
          ],
        },
        {
          id: "tablica-otvetov-there",
          kind: "table",
          caption: "Краткие ответы",
          zvuchat: ["Is there a shop?", "Yes, there is.", "No, there isn't.",
            "Are there two rooms?", "Yes, there are.", "No, there aren't.",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Is there a shop?", "Yes, there is.", "No, there isn't."],
            ["Are there two rooms?", "Yes, there are.", "No, there aren't."],
          ],
        },
        {
          id: "otvet-bez-there",
          kind: "note",
          tone: "mistake",
          text:
            "В кратком ответе слово there обязательно.\n\nНа вопрос Is there a shop? " +
            "отвечают Yes, there is. Ответ «Yes, it is» звучит о другом: слово it говорит о " +
            "предмете, на который показывают.\n\nА спрашивали не о нём, а о том, есть ли " +
            "магазин вообще.",
        },
        {
          id: "primer-voprosa-there",
          kind: "example",
          caption: "Разговор на улице",
          razgovor: true,
          text:
            "— Excuse me. Is there a shop near here?\n— Yes, there is. It's opposite the " +
            "park.\n— Thank you.",
          explain:
            "Сначала спрашивают, есть ли магазин, и только потом — где он. Слова Excuse me " +
            "и Thank you знакомы по прежним модулям.",
        },
        // Запись убрана: и сообщения, и вопросы, и краткие ответы звучат в таблицах выше.
        {
          id: "slovar-voprosa-there",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "Is there…?", translation: "есть ли…?", example: "Is there a shop near here?", hint: "/ɪz ðeə/" },
            { term: "Are there…?", translation: "есть ли… (о нескольких)?", example: "Are there two rooms?", hint: "/ɑː ðeə/" },
            { term: "any", translation: "сколько-нибудь, хоть какие-то", example: "Are there any books?", hint: "/ˈeni/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-postroit-vopros",
          kind: "short",
          prompt: "Спроси, есть ли поблизости магазин. Запиши вопрос целиком.",
          answer: "Is there a shop near here?",
          exact: true,
          accept: ["Is there a shop near here"],
          hint: "Первые два слова меняются местами.",
          why:
            "Is there a shop near here? Форма is выходит вперёд, как во всех вопросах с be.",
        },
        {
          id: "z2-vybrat-otvet",
          kind: "choice",
          prompt: "Тебя спросили: «Is there a garden?» Сада нет. Как ответить?",
          options: [
            { text: "No, there isn't.", correct: true },
            { text: "No, it isn't." },
            { text: "No, there aren't." },
          ],
          hint: "В коротком ответе стоит то же слово there, что и в вопросе.",
          why:
            "No, there isn't. Сад один, поэтому isn't; слово there в ответе обязательно.",
        },
        {
          id: "z3-is-ili-are-v-voprose",
          kind: "gap",
          prompt: "Спроси, есть ли в квартире две спальни. Допиши первое слово.",
          before: "",
          after: " there two bedrooms in the flat?",
          answer: "Are",
          hint: "Спален две, а не одна.",
          why: "Are there two bedrooms in the flat? Несколько предметов — значит are.",
        },
        {
          id: "z4-otmetit-otvety",
          kind: "hottext",
          prompt: "Отметь ответы, в которых потеряно слово there.",
          parts: [
            { text: "Yes, there is.", selectable: true },
            { text: " · " },
            { text: "Yes, it is.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, there aren't.", selectable: true },
            { text: " · " },
            { text: "No, they aren't.", selectable: true, correct: true },
          ],
          hint: "На вопрос с there отвечают тем же словом.",
          why:
            "Верны «Yes, there is» и «No, there aren't». В двух других стоят it и they — " +
            "они отвечают о предмете, а не о том, есть ли он.",
        },
        {
          id: "z5-dopisat-any",
          kind: "gap",
          prompt: "Спроси, есть ли поблизости магазины. Допиши недостающее слово.",
          before: "Are there ",
          after: " shops near here?",
          answer: "any",
          hint: "В сообщении на этом месте стоит some, а в вопросе — другое слово.",
          why:
            "Are there any shops near here? Ты не знаешь, есть ли магазины, — значит any.",
        },
        {
          id: "z6-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Есть ли в квартире ванная?»",
          items: ["in the flat", "a bathroom", "Is there"],
          answer: [2, 1, 0],
          hint: "Порядок тот же, что в сообщении, только первые два слова переставлены.",
          why: "Is there a bathroom in the flat?",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chego-net",
      title: "Чего нет: There isn't",
      estimatedMinutes: 12,
      outcome: "говорить, чего нет: There isn't a garden",

      blocks: [
        {
          id: "zachem-otricanie-there",
          kind: "explain",
          text: [
            "Тебя спросили про сад, а сада у дома нет. Коротким «No, there isn't» ответ " +
              "закончить можно, но собеседник узнает мало.",
            "Полное отрицание говорит то же самое целым предложением: There isn't a garden.",
            "Слово not ставят после формы be: There is not a garden.",
            "В короткой форме is и not сливаются в isn't. Это правило из модуля «Не так».",
          ],
        },
        {
          id: "tablica-otricaniya-there",
          kind: "table",
          caption: "Есть и нет",
          zvuchat: ["There is a garden.", "There isn't a garden.", "There is a TV.",
            "There isn't a TV.", "There are some shops.", "There aren't any shops.",
          ],
          head: ["Есть", "Нет", "Перевод отрицания"],
          rows: [
            ["There is a garden.", "There isn't a garden.", "Сада нет."],
            ["There is a TV.", "There isn't a TV.", "Телевизора нет."],
            ["There are some shops.", "There aren't any shops.", "Магазинов нет."],
          ],
        },
        {
          id: "some-i-any-v-otricanii",
          kind: "note",
          tone: "info",
          text:
            "Последняя строка таблицы устроена так же, как вопрос из урока «Есть ли здесь»: " +
            "в утвердительном предложении some, в отрицании any.\n\nСказать «There aren't " +
            "shops» нельзя — без any тут не обойтись.\n\nЗапомни пару целиком: There are " +
            "some shops. — There aren't any shops.",
        },
        {
          id: "otricanie-s-chislom",
          kind: "note",
          tone: "info",
          text:
            "Спальня в квартире одна, а собеседник говорит, что их две. Ты его " +
            "поправляешь: There aren't two bedrooms — «спален не две».\n\nЭто поправка к " +
            "числу. Она не значит, что спален нет вовсе.\n\nЕсли спален нет совсем, " +
            "говорят иначе: There aren't any bedrooms.",
        },
        {
          id: "odno-otricanie-there",
          kind: "note",
          tone: "mistake",
          text:
            "Отрицание в предложении одно.\n\n«There isn't no garden» сказать нельзя, хотя " +
            "по-русски двойное отрицание привычно: «нет никакого сада». По-английски " +
            "хватает одного isn't.",
        },
        {
          id: "primer-otricaniya-there",
          kind: "example",
          caption: "Разговор о квартире",
          razgovor: true,
          text:
            "— Is there a garden?\n— No, there isn't. There is a park near the house.\n" +
            "— And a bathroom?\n— Yes, there is.",
          explain:
            "Ответ идёт в два шага, как в модуле «Не так»: сначала чего нет, потом что " +
            "есть вместо этого.",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-otricaniya-there",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "there isn't", translation: "нет (об одном)", example: "There isn't a garden.", hint: "/ðeər ˈɪznt/" },
            { term: "there aren't", translation: "нет (о нескольких)", example: "There aren't any books.", hint: "/ðeər ɑːnt/" },
            { term: "any", translation: "никаких (в отрицании)", example: "There aren't any shops.", hint: "/ˈeni/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-otricanie",
          kind: "gap",
          prompt: "Телевизора в комнате нет. Допиши недостающее слово.",
          before: "There ",
          after: " a TV in the room.",
          answer: "isn't",
          hint: "Телевизор один, и отрицание записывают коротко.",
          why: "There isn't a TV in the room. Форма is и not сливаются в isn't.",
        },
        {
          id: "z2-dopisat-any",
          kind: "gap",
          prompt: "Магазинов поблизости нет. Допиши недостающее слово.",
          before: "There aren't ",
          after: " shops near here.",
          answer: "any",
          hint: "В сообщении на этом месте стоял бы some.",
          why:
            "There aren't any shops near here. Магазинов нет вовсе, и без any такое " +
            "предложение не строится.",
        },
        {
          id: "z3-otmetit-dvoynoe",
          kind: "hottext",
          prompt: "Отметь записи, где отрицание стоит дважды.",
          parts: [
            { text: "There isn't a garden.", selectable: true },
            { text: " · " },
            { text: "There isn't no garden.", selectable: true, correct: true },
            { text: " · " },
            { text: "There aren't any shops.", selectable: true },
            { text: " · " },
            { text: "There aren't no shops.", selectable: true, correct: true },
          ],
          hint: "Слово no в этих записях лишнее.",
          why:
            "Отрицание стоит дважды во второй и четвёртой записях — так по-английски не " +
            "говорят.",
        },
        {
          id: "z4-napisat-otricanie",
          kind: "short",
          prompt: "Сада за домом нет. Запиши предложение целиком, начни с There.",
          answer: "There isn't a garden behind the house.",
          exact: true,
          accept: ["There isn't a garden behind the house"],
          hint: "Сад один, значит isn't. Место идёт в конце.",
          why:
            "There isn't a garden behind the house. Порядок прежний, добавилось только " +
            "отрицание.",
        },
        {
          id: "z5-otvetit-i-utochnit",
          kind: "short",
          prompt:
            "Тебя спросили: «Is there a TV?» Телевизора нет, но есть картина. Ответь двумя предложениями, начни с No.",
          answer: "No, there isn't. There is a picture.",
          exact: true,
          accept: ["No, there isn't. There is a picture"],
          hint: "Сначала краткий ответ, потом то, что есть вместо этого.",
          why:
            "No, there isn't. There is a picture. Два шага: чего нет и что есть.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-est-v-gorode",
      title: "Что есть в городе",
      estimatedMinutes: 13,
      outcome: "рассказывать, что есть в городе: cinema, library, market, restaurant",

      blocks: [
        {
          id: "zachem-gorod",
          kind: "explain",
          text: [
            "Тебя спрашивают, как живётся в твоём городе. Ответ строится тем же оборотом: " +
              "There is a park near my house.",
            "Мест, которые давал модуль «Где это», для такого рассказа мало. Добавляются " +
              "четыре новых: cinema, library, market, restaurant.",
          ],
        },
        {
          id: "tablica-mest-goroda",
          kind: "table",
          caption: "Четыре новых места",
          // Звучит слово, а не транскрипция рядом с ним.
          zvuchat: ["cinema", "library", "market", "restaurant",
          ],
          head: ["Слово", "Перевод", "Как читается"],
          rows: [
            ["cinema", "кинотеатр", "/ˈsɪnəmə/"],
            ["library", "библиотека", "/ˈlaɪbrəri/"],
            ["market", "рынок", "/ˈmɑːkɪt/"],
            ["restaurant", "ресторан", "/ˈrestrɒnt/"],
          ],
        },
        {
          id: "library-ne-knizhnyy",
          kind: "note",
          tone: "mistake",
          text:
            "Library — это библиотека, а не книжный магазин. Слова похожи на слуху, а " +
            "места разные: в library книги берут почитать.",
        },
        {
          id: "restaurant-chtenie",
          kind: "note",
          tone: "info",
          text:
            "Слово restaurant длиннее, чем звучит. После rest на письме стоит шесть букв — " +
            "aurant, а слышно только /rɒnt/: буквы au в середине не звучат вовсе.",
        },
        {
          id: "primer-goroda-there",
          kind: "example",
          caption: "Рассказ о городе",
          zvuchat: ["There is a cinema in my street.",
            "There are two markets near the station.",
            "There isn't a library, but there is a school.",
          ],
          text:
            "There is a cinema in my street.\nThere are two markets near the station.\n" +
            "There isn't a library, but there is a school.",
          explain:
            "Три предложения об одном городе. В третьем сначала сказано, чего нет, потом — " +
            "что есть. Соединяет две части слово but — «но».",
        },
        // Запись убрана: каждое место звучит в таблице выше, а рассказ — построчно.
        {
          id: "slovar-goroda-there",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "cinema", translation: "кинотеатр", example: "a cinema in my street", hint: "/ˈsɪnəmə/" },
            { term: "library", translation: "библиотека", example: "There isn't a library.", hint: "/ˈlaɪbrəri/" },
            { term: "market", translation: "рынок", example: "two markets near the station", hint: "/ˈmɑːkɪt/" },
            { term: "restaurant", translation: "ресторан", example: "a restaurant opposite the park", hint: "/ˈrestrɒnt/" },
            { term: "but", translation: "но", example: "There isn't a library, but there is a school.", hint: "/bʌt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-mesto-goroda",
          kind: "gap",
          prompt: "На моей улице есть кинотеатр. Допиши название места.",
          before: "There is a ",
          after: " in my street.",
          answer: "cinema",
          hint: "Слово похоже на русское и начинается со звука /s/.",
          why: "Cinema — кинотеатр. Читается /ˈsɪnəmə/, буква c даёт звук /s/.",
        },
        {
          id: "z2-sopostavit-mesta-goroda",
          kind: "match",
          prompt: "Сопоставь место и то, зачем туда идут.",
          left: ["library", "market", "restaurant"],
          right: ["поесть", "взять книгу", "купить овощи"],
          answer: [1, 2, 0],
          hint: "Library — не магазин.",
          why: "В библиотеку за книгой, на рынок за овощами, в ресторан поесть.",
        },
        {
          id: "z3-otmetit-mesta",
          kind: "hottext",
          prompt: "Отметь слова, которые называют место в городе.",
          parts: [
            { text: "market", selectable: true, correct: true },
            { text: " · " },
            { text: "kitchen", selectable: true },
            { text: " · " },
            { text: "cinema", selectable: true, correct: true },
            { text: " · " },
            { text: "bed", selectable: true },
          ],
          hint: "Сверься с таблицей этого урока.",
          why: "Market и cinema — места в городе. Kitchen — комната, bed — кровать.",
        },
        {
          id: "z4-napisat-o-gorode",
          kind: "short",
          prompt: "Рядом со станцией два рынка. Запиши предложение целиком, начни с There.",
          answer: "There are two markets near the station.",
          exact: true,
          accept: ["There are two markets near the station"],
          hint: "Рынков два, значит меняются форма be и окончание.",
          why: "There are two markets near the station.",
        },
        {
          id: "z5-est-i-net",
          kind: "order",
          prompt: "Собери предложение: «Библиотеки нет, но есть школа».",
          items: ["but", "There isn't a library,", "there is a school."],
          answer: [1, 0, 2],
          hint: "Сначала то, чего нет.",
          why:
            "There isn't a library, but there is a school. Слово but соединяет два " +
            "предложения.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-zhilye",
      title: "Рассказать о своём жилье",
      estimatedMinutes: 14,
      outcome: "рассказывать о своём жилье четырьмя предложениями",

      blocks: [
        {
          id: "zachem-rasskaz-zhilyo",
          kind: "explain",
          text: [
            "Знакомый спрашивает, как ты живёшь. Ответить одним предложением не выйдет: " +
              "ему интересно и что за жильё, и сколько комнат, и что рядом.",
            "Четырёх предложений для этого хватает: где живёшь, сколько комнат, что в " +
              "комнате, что рядом с домом.",
            "Каждое такое предложение уже разобрано по отдельности. Новое здесь одно: теперь " +
              "они идут подряд.",
          ],
        },
        {
          id: "shagi-rasskaza-zhilyo",
          kind: "table",
          caption: "Рассказ по шагам",
          zvuchat: ["I live in a flat.", "There are two rooms.", "There is a bed and a table.",
            "There is a park near the house.",
          ],
          head: ["Шаг", "О чём", "Пример"],
          rows: [
            ["1", "где живёшь", "I live in a flat."],
            ["2", "сколько комнат", "There are two rooms."],
            ["3", "что в комнате", "There is a bed and a table."],
            ["4", "что рядом", "There is a park near the house."],
          ],
        },
        {
          id: "i-live-celikom",
          kind: "note",
          tone: "info",
          text:
            "Первый шаг стоит особняком: I live in a flat — единственное предложение " +
            "рассказа без оборота there is.\n\nСлово live разбирается в модуле «Что я " +
            "делаю». Пока бери три слова целиком, как одно: I live in.",
        },
        {
          id: "poryadok-rasskaza",
          kind: "note",
          tone: "mistake",
          text:
            "Начинать с мебели не стоит. «There is a bed» без первого шага непонятно: " +
            "собеседник ещё не знает, о каком жилье речь.\n\nПорядок тот же, что в " +
            "рассказе о себе: сначала общее, потом частности.",
        },
        {
          id: "primer-rasskaza-zhilyo",
          kind: "example",
          caption: "Рассказ целиком",
          zvuchat: ["I live in a flat.", "There are two rooms and a kitchen.",
            "There is a TV in the big room.", "There is a market near the house.",
          ],
          text:
            "I live in a flat.\nThere are two rooms and a kitchen.\n" +
            "There is a TV in the big room.\nThere is a market near the house.",
          explain:
            "Четыре предложения, и три из них построены одним оборотом. Во втором комнат " +
            "несколько, поэтому are; в третьем и четвёртом предмет один, поэтому is.",
        },
        // Запись убрана: рассказ выше звучит построчно, а шаги — в таблице.

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz",
          kind: "order",
          prompt: "Расставь предложения так, чтобы вышел рассказ по шагам.",
          items: [
            "There is a park near the house.",
            "I live in a flat.",
            "There is a TV in the room.",
            "There are three rooms.",
          ],
          answer: [1, 3, 2, 0],
          hint: "Сначала говорят, где живут.",
          why:
            "I live in a flat. There are three rooms. There is a TV in the room. There is a " +
            "park near the house. Начинать с мебели или с парка нельзя: непонятно, о каком " +
            "жилье речь.",
        },
        {
          id: "z2-vtoroy-shag",
          kind: "short",
          prompt: "В твоей квартире две комнаты. Запиши второй шаг рассказа целиком, начни с There.",
          answer: "There are two rooms.",
          exact: true,
          accept: ["There are two rooms"],
          hint: "Комнат больше одной.",
          why: "There are two rooms. Форма are и окончание -s.",
        },
        {
          id: "z3-tretiy-shag",
          kind: "short",
          prompt: "В комнате есть кровать. Запиши третий шаг рассказа целиком, начни с There.",
          answer: "There is a bed in the room.",
          exact: true,
          accept: ["There is a bed in the room"],
          hint: "Кровать одна, а комната та самая, о которой речь.",
          why: "There is a bed in the room. Перед кроватью a, перед комнатой the.",
        },
        {
          id: "z4-otmetit-polnye",
          kind: "hottext",
          prompt: "Отметь рассказы, в которых пропущен первый шаг.",
          parts: [
            { text: "I live in a house. There is a garden.", selectable: true },
            { text: " · " },
            { text: "There are two rooms. There is a TV.", selectable: true, correct: true },
            { text: " · " },
            { text: "I live in a flat. There are three rooms.", selectable: true },
            { text: " · " },
            { text: "There is a bed. There is a table.", selectable: true, correct: true },
          ],
          hint: "Первый шаг называет само жильё.",
          why:
            "Во второй и четвёртой записи сразу идут частности, а о жилье не сказано " +
            "ничего.",
        },
        {
          id: "z5-rasskazat-vsluh",
          kind: "speak",
          prompt:
            "Расскажи вслух о своём жилье: где живёшь, сколько комнат, что в комнате, что рядом.",
          phrase:
            "I live in a flat. There are two rooms. There is a TV in the room. " +
            "There is a shop near the house.",
          translation:
            "Я живу в квартире. Есть две комнаты. В комнате есть телевизор. Рядом с домом " +
            "есть магазин.",
          hint: "Четыре коротких предложения по шагам таблицы.",
          why:
            "Четыре предложения дают полный ответ. Собирать их в одно длинное не нужно.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Описание жилья и города — первый текст, где `there is`
    // работает по назначению. Опора — в `sources`.
    // =====================================================================
    {
      slug: "chitaem-o-zhilye",
      title: "Читаем объявление о жилье",
      estimatedMinutes: 13,
      outcome: "понимать по объявлению, что есть в жилье и рядом с ним",

      blocks: [
        {
          id: "zachem-chitat-o-zhilye",
          kind: "explain",
          text: [
            "Объявление о жилье отвечает на два вопроса: что есть внутри и что есть " +
              "рядом. Обо всём этом говорят оборотом there is.",
            "Читают такое объявление, чтобы понять одно — подходит жильё или нет.",
          ],
        },
        {
          id: "obyavlenie-o-kvartire",
          kind: "text",
          genre: "notice",
          // Строки «There is no garden» здесь БЫЛО и убрано. Определитель `no`
          // перед существительным — A2, в шапке модуля он не объявлен, а урок
          // «Чего нет» двумя уроками раньше учит прямо обратному: «There isn't
          // no garden» сказать нельзя. Ученик увидел бы `no garden` как верную
          // запись через два урока после запрета. Нашёл методист.
          title: "FLAT FOR RENT",
          body: [
            "There are two rooms and a kitchen.",
            "There is a big window in the room.",
            "There is a shop and a bus stop near the house.",
            "There isn't a garden.",
          ],
          glossary: [{ term: "FOR RENT", translation: "сдаётся" }],
        },
        {
          // Врезка нарочно не называет сад: сначала называла, и задание «чего
          // при квартире нет» решалось её чтением.
          id: "razbor-obyavleniya-o-zhilye",
          kind: "note",
          tone: "info",
          text:
            "Объявление о жилье отвечает по строкам: что есть внутри, что есть рядом, " +
              "чего нет вовсе. Последнюю строку читай особенно внимательно — в ней " +
              "отрицание, и она короткая.",
        },
        {
          // Слово `cafe` вводится карточкой только в модуле 16, а местоимение
          // `one` вместо названного существительного — A2 и здесь не
          // объяснялось. Оба нашёл методист; взяты уже известные слова.
          id: "zapiska-o-rayone",
          kind: "text",
          genre: "message",
          title: "A message from Nurlan",
          body: [
            "Hi! There is a good shop near my house. There is a park too.",
            "There isn't a hospital near my house. It is in the city centre. Nurlan",
          ],
          glossary: [{ term: "city centre", translation: "центр города" }],
        },

        // ---- задания ----
        {
          id: "z1-skolko-komnat",
          kind: "short",
          about: "obyavlenie-o-kvartire",
          prompt:
            "Прочитай объявление FLAT FOR RENT. Сколько в квартире комнат? Ответь цифрой.",
          answer: "2",
          accept: ["two", "две", "два"],
          hint: "Число стоит в первой строке.",
          why: "There are two rooms and a kitchen. Две комнаты, а кухня отдельно.",
        },
        {
          id: "z2-chego-net-v-kvartire",
          kind: "choice",
          about: "obyavlenie-o-kvartire",
          prompt: "Прочитай объявление FLAT FOR RENT. Чего при квартире нет?",
          options: [
            { text: "Кухни" },
            { text: "Сада", correct: true },
            { text: "Окна" },
          ],
          hint: "Ищи строку, где после формы be стоит отрицание.",
          why:
            "There isn't a garden. Кухня и окно в объявлении названы, а сад — нет.",
        },
        {
          id: "z3-chto-ryadom-s-domom",
          kind: "hottext",
          about: "obyavlenie-o-kvartire",
          prompt:
            "Прочитай объявление FLAT FOR RENT. Отметь то, что есть рядом с домом.",
          parts: [
            { text: "a shop", selectable: true, correct: true },
            { text: "a bus stop", selectable: true, correct: true },
            { text: "a garden", selectable: true },
            { text: "a kitchen", selectable: true },
          ],
          hint: "Рядом с домом — это строка со словами near the house.",
          why:
            "There is a shop and a bus stop near the house. Кухня внутри квартиры, а " +
            "сада при доме нет.",
        },
        {
          id: "z4-est-li-kino",
          kind: "choice",
          about: "zapiska-o-rayone",
          prompt: "Прочитай записку от Нурлана. Есть ли больница рядом с его домом?",
          options: [
            { text: "Есть" },
            { text: "Рядом нет, она в центре города", correct: true },
            { text: "Нет нигде" },
          ],
          hint: "Про больницу сказано двумя предложениями подряд.",
          why:
            "There isn't a hospital near my house. It is in the city centre. Первое " +
            "предложение говорит, чего рядом нет, второе — где оно есть.",
        },
        {
          id: "z5-chto-est-u-nurlana",
          kind: "short",
          about: "zapiska-o-rayone",
          prompt:
            "Прочитай записку от Нурлана. Какое место рядом с его домом названо " +
            "хорошим? Ответь английским словом.",
          answer: "shop",
          accept: ["a shop", "the shop"],
          hint: "Слово good стоит в записке только один раз.",
          why: "There is a good shop near my house. Магазин.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-chto-est",
      title: "Слушаем, что где есть",
      estimatedMinutes: 13,
      outcome: "понимать на слух, что где-то есть, а чего нет",

      blocks: [
        {
          id: "zachem-slushat-chto-est",
          kind: "explain",
          text: [
            "Когда рассказывают, что где есть, слушать надо не только названия вещей. " +
              "Половина смысла — в том, есть вещь или её нет.",
            "Отрицание звучит коротко и легко теряется. Держи ухо на словах isn't, " +
              "aren't и no.",
          ],
        },
        {
          id: "est-ili-net-na-sluh",
          kind: "table",
          caption: "Есть и нет — что слышно",
          // Урок слушания: обе записи ниже остаются, они и есть его предмет. Кнопки
          // у пар добавлены вдобавок — отрицание здесь и различает пару.
          zvuchat: ["There is a shop.", "There isn't a shop.", "There are two rooms.",
            "There aren't two rooms.", "There is a park.", "There isn't a park.",
          ],
          // Третья строка называла «There is no garden» верной записью, а урок
          // «Чего нет» двумя уроками раньше запрещает `no` в этом месте. Взята
          // другая пара, и сад из таблицы убран: он же ответ задания ниже.
          head: ["Есть", "Нет"],
          rows: [
            ["There is a shop.", "There isn't a shop."],
            ["There are two rooms.", "There aren't two rooms."],
            ["There is a park.", "There isn't a park."],
          ],
        },
        {
          id: "zapis-rasskaz-o-dome",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай рассказ о доме",
          transcript:
            "There are three rooms in my house. There is a big kitchen. " +
            "There isn't a garden.",
        },
        {
          id: "zapis-vopros-o-gorode",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор о городе",
          transcript:
            "Is there a cinema in your town? — Yes, there is. — And a museum? — " +
            "No, there isn't. But there is a good library.",
        },

        // ---- задания ----
        {
          id: "z1-skolko-komnat-na-sluh",
          kind: "short",
          about: "zapis-rasskaz-o-dome",
          prompt: "Послушай первую запись. Сколько в доме комнат? Ответь цифрой.",
          answer: "3",
          accept: ["three", "три"],
          hint: "Число звучит в самом начале.",
          why: "There are three rooms in my house. Три.",
        },
        {
          id: "z2-chego-net-v-dome",
          kind: "choice",
          about: "zapis-rasskaz-o-dome",
          prompt: "Послушай первую запись. Чего в доме нет?",
          options: [
            { text: "Кухни" },
            { text: "Комнат" },
            { text: "Сада", correct: true },
          ],
          hint: "Отрицание звучит в последнем предложении.",
          why: "There isn't a garden. Сада нет, а большая кухня есть.",
        },
        {
          id: "z3-est-li-kino-na-sluh",
          kind: "choice",
          about: "zapis-vopros-o-gorode",
          prompt: "Послушай разговор. Есть ли в городе кинотеатр?",
          options: [
            { text: "Есть", correct: true },
            { text: "Нет" },
            { text: "Об этом не спрашивали" },
          ],
          hint: "Короткий ответ идёт сразу после вопроса.",
          why: "Is there a cinema in your town? — Yes, there is. Есть.",
        },
        {
          id: "z4-chto-est-vmesto-muzeya",
          kind: "short",
          about: "zapis-vopros-o-gorode",
          prompt:
            "Послушай разговор. Музея в городе нет, а что есть вместо него? Ответь " +
            "английским словом.",
          answer: "library",
          accept: ["a library", "a good library"],
          hint: "Последнее предложение начинается с But.",
          why: "But there is a good library. Библиотека.",
        },
        {
          id: "z5-sprosit-vsluh",
          kind: "speak",
          prompt:
            "Спроси вслух, есть ли в городе собеседника парк, и сам ответь, что в твоём " +
            "городе он есть.",
          phrase: "Is there a park in your town? Yes, there is a park in my town.",
          translation: "Есть ли парк в твоём городе? Да, в моём городе есть парк.",
          hint: "В вопросе is идёт перед there, в ответе — после.",
          why:
            "Is there…? — вопрос, There is… — ответ. Меняется только порядок двух слов.",
        },
      ],
    },

    // =====================================================================
    // Урок письма. Опора — в `sources`: описание комнаты названо источником
    // дословно, шкала Creative writing.
    //
    // Итог назван по той половине, которую проверяет работа: письмо машина не
    // оценивает. То же решение, что в модулях 3 и 11.
    // =====================================================================
    {
      slug: "pishem-o-zhilye",
      title: "Пишем объявление о сдаче",
      estimatedMinutes: 12,
      outcome: "находить в объявлении о сдаче потерянное there и форму be не по числу",

      blocks: [
        {
          id: "zachem-pisat-o-zhilye",
          kind: "explain",
          text: [
            "Объявление о сдаче разобрано в этом модуле, в уроке чтения. Теперь " +
              "напишешь своё.",
            "Читающий ищет в нём одно: подходит ему жильё или нет. Поэтому каждое " +
              "предложение начинается с There is или There are, а последнее говорит, " +
              "чего в жилье нет, — из-за него объявление чаще всего и закрывают.",
          ],
        },
        {
          id: "obrazec-o-zhilye",
          kind: "example",
          caption: "Объявление о сдаче",
          // Образец нарочно не тот, что в уроке чтения этого модуля: там две
          // комнаты, большое окно и нет сада, здесь три комнаты, рынок рядом и
          // нет ванной. Прежний образец повторял устный рассказ восьмого урока
          // в трёх строках из четырёх — нашёл методист.
          text:
            "HOUSE FOR RENT\nThere are three rooms and a kitchen.\n" +
            "There is a market near the house.\nThere isn't a bathroom.",
          zvuchat: [
            "There are three rooms and a kitchen.",
            "There is a market near the house.",
            "There isn't a bathroom.",
          ],
          explain:
            "Заголовок говорит, что жильё сдают, — он знаком по уроку чтения. Дальше " +
            "строки по одной: сколько комнат, что рядом с домом и чего в нём нет. " +
            "Последняя строка важнее прочих: ради неё объявление и дочитывают.",
        },
        {
          id: "chto-teryayut-o-zhilye",
          kind: "note",
          tone: "mistake",
          text:
            "Теряют слово there. «Are two rooms» и «Is a TV in the room» по-английски не " +
            "читаются: перед формой be должно стоять there. Оно и говорит, что речь о " +
            "наличии, а не о том, каковы эти комнаты.",
        },
        {
          id: "chislo-i-forma",
          kind: "note",
          tone: "info",
          text:
            "Форму выбирает то, что идёт следом. Одна вещь — There is a kitchen. " +
            "Несколько — There are two rooms. Число при этом можно и не называть: There " +
            "are some rooms.",
        },

        // ---- задания ----
        {
          // Прежде задание брало ровно тот случай, что разобран во врезке выше
          // («Are two rooms»), и ответ читался оттуда. Теперь строк три, и
          // проверить надо каждую. Нашёл методист.
          id: "z1-najti-bez-poteri",
          kind: "choice",
          prompt: "В какой строке ничего не потеряно?",
          options: [
            { text: "Is a garden near the house." },
            { text: "There is a kitchen.", correct: true },
            { text: "Are some books on the table." },
          ],
          hint: "Перед формой be должно стоять короткое слово. Найди строку, где оно есть.",
          why:
            "There is a kitchen. В двух других строках потеряно there: верно было бы " +
            "There is a garden near the house и There are some books on the table.",
        },
        {
          id: "z2-ispravit-formu",
          kind: "short",
          prompt: "Исправь и запиши предложение целиком: «There is two rooms.»",
          answer: "There are two rooms.",
          exact: true,
          accept: ["There are two rooms"],
          hint: "Форму выбирает то, что идёт следом: комнат две.",
          why:
            "There are two rooms. Комнат несколько, значит are. Слово there при этом не " +
            "меняется никогда.",
        },
        {
          // Порог в двенадцать слов — наш. Четыре строки условия дают ровно
          // столько: «I live in a flat» (5) плюс три коротких предложения. Так,
          // чтобы верный ответ порог не отсекал — на этом я уже споткнулся в
          // модуле 3, и нашёл методист.
          id: "z3-napisat-o-zhilye",
          kind: "essay",
          prompt:
            "Напиши объявление о сдаче жилья: заголовок FLAT FOR RENT или HOUSE FOR " +
            "RENT, потом сколько комнат, потом что есть рядом, потом чего в жилье нет.",
          // Порог в двенадцать слов — наш: столько выходит в самом коротком
          // верном ответе («FLAT FOR RENT. There are two rooms. There is a shop
          // near the house. There isn't a garden.» — шестнадцать; двенадцать
          // оставлено с запасом на объявление покороче).
          minWords: 12,
          sample:
            "FLAT FOR RENT. There are two rooms. There is a shop near the house. " +
            "There isn't a garden.",
          checklist: [
            "Есть заголовок: FLAT FOR RENT или HOUSE FOR RENT.",
            "В каждом предложении есть there.",
            "После there стоит is, если вещь одна, и are, если их несколько.",
            "В последней строке сказано, чего НЕТ: there isn't или there aren't.",
          ],
          hint:
            "Возьми образец и подставь своё: FLAT FOR RENT. There are … . There is … " +
            "near the house. There isn't … .",
          why:
            "Сравни свой ответ с образцом по четырём пунктам выше. Жильё у каждого своё. " +
            "Важно другое: слово there стоит в каждом предложении, форму после него " +
            "выбирает число, а последняя строка говорит о том, чего нет.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 24, из них 16 требуют написать ответ самому или расставить
  // части. Итогов восемь, на каждый приходится по три вопроса.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.8,
    questions: [
      // ---- чтение и слушание ------------------------------------------
      // Другой случай и другой вид задания, чем в уроках: там квартира и
      // записка о районе, здесь комната в гостинице и вопрос о школе.
      {
        // ОБА ВОПРОСА ПЕРЕПИСАНЫ ПОСЛЕ МЕТОДИСТА. В первом стоял определитель
        // `no` перед существительным — это A2, и урок «Чего нет» из этого же
        // модуля учит обратному. Второй требовал исправить форму глагола и
        // объявления не содержал вовсе, хотя помечен итогом чтения.
        id: "q-obyavlenie-gostinicy",
        kind: "hottext",
        outcome: "понимать по объявлению, что есть в жилье и рядом с ним",
        prompt:
          "Объявление: «HOTEL. There is a TV in the room. There isn't a kitchen. " +
          "There is a shop near the hotel.» Отметь то, чего в гостинице нет.",
        parts: [
          { text: "a TV", selectable: true },
          { text: "a kitchen", selectable: true, correct: true },
          { text: "a shop", selectable: true },
        ],
        why:
          "There isn't a kitchen. Кухни нет. Телевизор в номере есть, магазин есть рядом.",
      },
      {
        id: "q-obyavlenie-skolko-komnat",
        kind: "short",
        outcome: "понимать по объявлению, что есть в жилье и рядом с ним",
        prompt:
          "Объявление: «FLAT. There are three rooms. There is a small kitchen. " +
          "There isn't a bus stop near the house.» Сколько в квартире комнат? " +
          "Ответь цифрой.",
        answer: "3",
        accept: ["three", "три"],
        why:
          "There are three rooms. Три. Форма are и окончание s оба говорят, что комнат " +
          "несколько.",
      },
      {
        id: "q-na-sluh-est-li-shkola",
        kind: "choice",
        outcome: "понимать на слух, что где-то есть, а чего нет",
        zvuk: "Is there a school near your house? — No, there isn't. But there is a park.",
        prompt: "Послушай запись. Что есть рядом с домом?",
        options: [
          { text: "Парк", correct: true },
          { text: "Школа" },
          { text: "И школа, и парк" },
        ],
        why: "No, there isn't. But there is a park. Школы нет, парк есть.",
      },
      {
        id: "q-na-sluh-skolko-okon",
        kind: "short",
        outcome: "понимать на слух, что где-то есть, а чего нет",
        zvuk: "There are four windows in the room. There is no table.",
        prompt: "Послушай запись. Сколько в комнате окон? Ответь цифрой.",
        answer: "4",
        accept: ["four", "четыре"],
        why: "There are four windows in the room. Четыре.",
      },
      {
        id: "q-there-is-napisat",
        kind: "short",
        outcome: "говорить, что где-то есть один предмет: There is a shop",
        prompt: "За школой есть парк. Запиши предложение целиком, начни с There.",
        answer: "There is a park behind the school.",
        exact: true,
        accept: ["There is a park behind the school"],
        why: "There is a park behind the school. Место идёт последним.",
      },
      {
        id: "q-there-ili-it",
        kind: "choice",
        outcome: "говорить, что где-то есть один предмет: There is a shop",
        prompt: "Ты сообщаешь, что напротив парка есть гостиница. Как сказать?",
        options: [
          { text: "It is a hotel opposite the park." },
          { text: "There is a hotel opposite the park.", correct: true },
          { text: "Is a hotel opposite the park." },
        ],
        why:
          "There is a hotel opposite the park. Запись It is сообщала бы, что это за здание.",
      },
      {
        id: "q-sobrat-there-is",
        kind: "order",
        outcome: "говорить, что где-то есть один предмет: There is a shop",
        // Предложение «There is a shop near the station» напечатано в уроке
        // четырежды: в объяснении, в таблице, в разборе порядка слов и в
        // расшифровке записи. Ученик вспоминал рисунок. Взято другое сочетание.
        prompt: "Собери предложение: «Рядом с парком есть гостиница».",
        items: ["near the park", "There is", "a hotel"],
        answer: [1, 2, 0],
        why: "There is a hotel near the park.",
      },
      {
        id: "q-there-are-vybor",
        kind: "choice",
        outcome: "говорить, что предметов несколько: There are two rooms",
        prompt: "В доме четыре комнаты. Какую запись выбрать?",
        options: [
          { text: "There is four rooms." },
          { text: "There are four room." },
          { text: "There are four rooms.", correct: true },
        ],
        why: "There are four rooms. В первой записи глагол не изменился, как будто комната одна. Во второй у комнаты пропало окончание -s.",
      },
      {
        id: "q-there-are-dopisat",
        kind: "gap",
        outcome: "говорить, что предметов несколько: There are two rooms",
        prompt: "В саду пять деревьев. Допиши недостающее слово.",
        before: "There ",
        after: " five trees in the garden.",
        answer: "are",
        why: "There are five trees in the garden.",
      },
      {
        id: "q-there-are-perestroit",
        kind: "short",
        outcome: "говорить, что предметов несколько: There are two rooms",
        prompt: "Скажи то же самое о двух стульях: «There is a chair.» Начни с There are.",
        answer: "There are two chairs.",
        exact: true,
        accept: ["There are two chairs"],
        why: "There are two chairs. Артикль уходит, на его место встаёт число.",
      },
      {
        id: "q-komnata-nazvat",
        kind: "gap",
        outcome: "называть комнаты и то, что в них стоит",
        prompt: "В ванной есть окно. Допиши название комнаты.",
        before: "There is a window in the ",
        after: ".",
        answer: "bathroom",
        why: "Bathroom — ванная. Слово сложено из bath и room и пишется слитно.",
      },
      {
        id: "q-komnata-sopostavit",
        kind: "match",
        outcome: "называть комнаты и то, что в них стоит",
        prompt: "Сопоставь слово и перевод.",
        left: ["kitchen", "bed", "wall"],
        right: ["стена", "кухня", "кровать"],
        answer: [1, 2, 0],
        why: "Kitchen — кухня, bed — кровать, wall — стена.",
      },
      {
        id: "q-komnata-napisat",
        kind: "short",
        outcome: "называть комнаты и то, что в них стоит",
        prompt: "В спальне есть кровать. Запиши предложение целиком, начни с There.",
        answer: "There is a bed in the bedroom.",
        exact: true,
        accept: ["There is a bed in the bedroom"],
        why: "There is a bed in the bedroom.",
      },
      {
        id: "q-some-dopisat",
        kind: "gap",
        outcome: "говорить о нескольких, не называя числа: There are some books",
        // Предложение совпадало с урочным буква в букву — менялась только вводная
        // фраза условия. Взяты другой предмет и другое место.
        prompt: "В комнате несколько стульев. Допиши недостающее слово.",
        before: "There are ",
        after: " chairs in the room.",
        answer: "some",
        why: "There are some chairs in the room.",
      },
      {
        id: "q-some-oshibka",
        kind: "hottext",
        outcome: "говорить о нескольких, не называя числа: There are some books",
        prompt: "Отметь записи с ошибкой.",
        parts: [
          { text: "There are some trees.", selectable: true },
          { text: " · " },
          { text: "There is some tree.", selectable: true, correct: true },
          { text: " · " },
          { text: "There are some chair.", selectable: true, correct: true },
          { text: " · " },
          { text: "There are some people.", selectable: true },
        ],
        why:
          "Ошибка во второй и третьей записях. Во второй дерево одно — нужен a; в третьей " +
          "потеряно окончание.",
      },
      {
        id: "q-some-napisat",
        kind: "short",
        outcome: "говорить о нескольких, не называя числа: There are some books",
        prompt: "В саду несколько деревьев. Запиши предложение целиком, начни с There.",
        answer: "There are some trees in the garden.",
        exact: true,
        accept: ["There are some trees in the garden"],
        why: "There are some trees in the garden. Деревьев несколько, поэтому идёт are, а число не названо.",
      },
      {
        id: "q-vopros-postroit",
        kind: "short",
        outcome: "спрашивать, есть ли что-то, и коротко отвечать: Is there a shop? — Yes, there is",
        prompt: "Спроси, есть ли в квартире ванная. Запиши вопрос целиком.",
        answer: "Is there a bathroom in the flat?",
        exact: true,
        accept: ["Is there a bathroom in the flat"],
        why: "Is there a bathroom in the flat? Форма is выходит вперёд.",
      },
      {
        id: "q-vopros-are",
        kind: "gap",
        outcome: "спрашивать, есть ли что-то, и коротко отвечать: Is there a shop? — Yes, there is",
        prompt: "Спроси, есть ли рядом магазины. Допиши первое слово.",
        before: "",
        after: " there any shops near here?",
        answer: "Are",
        why:
          "Are there any shops near here? Слово shops стоит во множественном числе — " +
          "значит are. А в вопросе вместо some стоит any.",
      },
      {
        id: "q-vopros-otvet",
        kind: "choice",
        outcome: "спрашивать, есть ли что-то, и коротко отвечать: Is there a shop? — Yes, there is",
        prompt: "Тебя спросили: «Are there two bedrooms?» Спальни две. Как ответить?",
        options: [
          { text: "Yes, they are." },
          { text: "Yes, there is." },
          { text: "Yes, there are.", correct: true },
        ],
        why: "Yes, there are. В ответе повторяют there и форму are.",
      },
      {
        id: "q-otricanie-dopisat",
        kind: "gap",
        outcome: "говорить, чего нет: There isn't a garden",
        prompt: "Сада у дома нет. Допиши недостающее слово.",
        before: "There ",
        after: " a garden.",
        answer: "isn't",
        why: "There isn't a garden. Сад один, поэтому isn't.",
      },
      {
        id: "q-otricanie-vybor",
        kind: "choice",
        outcome: "говорить, чего нет: There isn't a garden",
        prompt: "Магазинов поблизости нет. Как сказать?",
        options: [
          { text: "There isn't any shops." },
          { text: "There aren't any shops.", correct: true },
          { text: "There aren't some shops." },
        ],
        why:
          "There aren't any shops. Слово shops стоит во множественном числе — значит " +
          "aren't, а в отрицании вместо some стоит any.",
      },
      {
        id: "q-otricanie-napisat",
        kind: "short",
        outcome: "говорить, чего нет: There isn't a garden",
        prompt: "Телевизора в комнате нет. Запиши предложение целиком, начни с There.",
        answer: "There isn't a TV in the room.",
        exact: true,
        accept: ["There isn't a TV in the room"],
        why: "There isn't a TV in the room.",
      },
      {
        id: "q-gorod-nazvat",
        kind: "gap",
        outcome: "рассказывать, что есть в городе: cinema, library, market, restaurant",
        prompt: "Рядом с парком есть библиотека. Допиши название места.",
        before: "There is a ",
        after: " near the park.",
        answer: "library",
        why: "Library — библиотека. Книги там берут почитать, а не покупают.",
      },
      {
        id: "q-gorod-sopostavit",
        kind: "match",
        outcome: "рассказывать, что есть в городе: cinema, library, market, restaurant",
        prompt: "Сопоставь место и перевод.",
        left: ["cinema", "market", "restaurant"],
        right: ["рынок", "ресторан", "кинотеатр"],
        answer: [2, 0, 1],
        why: "Cinema — кинотеатр, market — рынок, restaurant — ресторан.",
      },
      {
        id: "q-gorod-napisat",
        kind: "short",
        outcome: "рассказывать, что есть в городе: cinema, library, market, restaurant",
        prompt: "На моей улице есть ресторан. Запиши предложение целиком, начни с There.",
        answer: "There is a restaurant in my street.",
        exact: true,
        accept: ["There is a restaurant in my street"],
        why: "There is a restaurant in my street.",
      },
      {
        id: "q-rasskaz-poryadok",
        kind: "order",
        outcome: "рассказывать о своём жилье четырьмя предложениями",
        prompt: "Расставь предложения так, чтобы вышел рассказ по шагам.",
        items: [
          "There is a library near the house.",
          "There is a table in the kitchen.",
          "There are four rooms.",
          "I live in a house.",
        ],
        answer: [3, 2, 1, 0],
        why:
          "I live in a house. There are four rooms. There is a table in the kitchen. " +
          "There is a library near the house. Сначала говорят о самом жилье.",
      },
      {
        id: "q-rasskaz-shag",
        kind: "short",
        outcome: "рассказывать о своём жилье четырьмя предложениями",
        prompt: "В твоей квартире три комнаты. Запиши второй шаг рассказа целиком, начни с There.",
        answer: "There are three rooms.",
        exact: true,
        accept: ["There are three rooms"],
        why: "There are three rooms. Второй шаг называет число комнат.",
      },
      {
        id: "q-rasskaz-otmetit",
        kind: "hottext",
        outcome: "рассказывать о своём жилье четырьмя предложениями",
        prompt: "Отметь шаг, с которого начинают рассказ о жилье.",
        parts: [
          { text: "There is a market near the house.", selectable: true },
          { text: " · " },
          { text: "I live in a house.", selectable: true, correct: true },
          { text: " · " },
          { text: "There is a bed in the bedroom.", selectable: true },
          { text: " · " },
          { text: "There are two rooms.", selectable: true },
        ],
        why:
          "I live in a house. Первый шаг называет само жильё, и без него остальные " +
          "предложения непонятны.",
      },

      // ---- письмо -----------------------------------------------------
      // Угол другой, чем в уроке. Там форма спорит с числом в одной короткой
      // строке; здесь в строке ДВЕ вещи — одна и несколько, — и одной формой
      // их не покрыть. Прежний вопрос почти дословно повторял задание урока:
      // нашёл методист.
      {
        id: "q-forma-ne-po-chislu",
        kind: "choice",
        outcome: "находить в объявлении о сдаче потерянное there и форму be не по числу",
        prompt:
          "Человек написал: «There are a kitchen and some books.» Что здесь не так?",
        options: [
          { text: "Потеряно слово there" },
          { text: "Форма are стоит перед одной вещью", correct: true },
          { text: "Всё верно" },
        ],
        hint: "Слово there на месте. Посмотри, что идёт сразу после are.",
        why:
          "There is a kitchen and there are some books. Кухня одна, и перед ней нужна " +
          "форма is. Одной формой два разных числа не покрыть.",
      },
    ],
  },
};

export default module;
