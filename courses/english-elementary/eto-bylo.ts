import type { Module } from "@/lib/content/types";

/**
 * Модуль 1 курса «Английский · Elementary»: это было.
 *
 * Программа: docs/programma-english-elementary.md, модуль 1 — «говорить, где и
 * каким что-то было»; грамматика: `was`, `were`, отрицание и вопрос,
 * обстоятельства `yesterday`, `last week`.
 *
 * ПЕРВЫЙ МОДУЛЬ СТУПЕНИ, и на нём держится правило, которое здесь важнее
 * прочих: МЕЖДУ СТУПЕНЯМИ НЕТ ССЫЛОК НА ПАМЯТЬ. Решение владельца от 16
 * августа: человек мог прийти сразу сюда, не проходя Beginner. Поэтому в
 * модуле нет ни одного оборота «ты уже знаешь `to be`», «как мы учили»,
 * «вспомни настоящее время». Настоящее время `am/is/are` появляется строкой с
 * примером там, где оно понадобилось для сравнения, — и не раньше.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A1, PAST past simple, «USE: EVERYDAY EVENTS AND
 *    STATES» — «Can use the past simple to talk about everyday events or
 *    states», и первый же пример источника: «The people were very polite».
 *    Это `were` в самом источнике, а слово «states» описывает ровно то, чем
 *    занят модуль: не событие, а состояние. Рядом стоит A2, «FORM:
 *    AFFIRMATIVE» — «Can use the affirmative form with an increasing range of
 *    verbs»: на нашей ступени круг глаголов растёт, и `be` в нём первый.
 *    Для урока 2 (каким это было) — A2, ADJECTIVES position, «FORM:
 *    PREDICATIVE, WITH 'BE'»: «Can use an increasing range of adjectives
 *    predicatively, after 'be'», и A2, ADJECTIVES combining с примером «The
 *    weather was cloudy but fine».
 *
 * 2. English Grammar Profile, A2, QUESTIONS wh-, «FORM: MAIN VERB 'BE'» — «Can
 *    use 'wh-'words + main verb 'be' + subject to form 'wh-' questions», пример
 *    источника: «How was your dinner yesterday?». Это прямая опора уроков 4 и
 *    5: в примере источника стоит ровно наша конструкция — вопросительное
 *    слово, `was`, подлежащее, и обстоятельство времени в конце.
 *
 * 3. English Grammar Profile, A2, QUESTIONS yes/no, «FORM: MAIN VERB 'BE'» —
 *    «Can use main verb 'be' + subject to form 'yes/no' questions», пример
 *    источника: «Are you ok?». Строка описывает `be` как главный глагол
 *    вопроса; пример в ней настоящего времени, и об этом ниже отдельно.
 *
 * 4. English Grammar Profile, A2, ADVERBS «USE: TIME» — «Can use a limited
 *    range of adverbs ('yesterday', 'just', 'now', 'already',) to refer to the
 *    timing of an event», пример источника: «Yesterday I went shopping». Это
 *    урок 6. Слово `yesterday` источник называет прямо, первым в списке.
 *
 * 5. Описания Совета Европы, с. 67, шкала Sustained monologue: describing
 *    experience, графа A2: «Can give very short, basic descriptions of events,
 *    past activities and personal experiences». Это итог модуля целиком.
 *    Там же с. 79, Information exchange, A2: «Can ask and answer questions
 *    about pastimes and past activities» — уроки 4 и 5, где спрашивают, а не
 *    только рассказывают.
 *
 * 6. Слова модуля — Oxford 3000, все A1 и A2 при потолке ступени A2. Из A2
 *    взяты `noisy` и `alone`; остальные стоят на A1 и берутся заново, потому
 *    что курс не ссылается на прошлую ступень.
 *
 * ОТРИЦАНИЕ И ВОПРОС: ОПОРА ПРЯМАЯ, А НЕ КОСВЕННАЯ.
 *
 * Первая редакция модуля объявляла оба места взятыми «сверх источника». Разбор
 * методиста показал, что опора есть, и притом прямая; здесь она записана.
 *
 * — ОТРИЦАНИЕ `wasn't`/`weren't` (урок 3). English Grammar Profile, A1,
 *   NEGATION, «FORM: MAIN VERB 'BE'»: «Can form negative statements of main
 *   verb 'be', with contracted and uncontracted forms». ВРЕМЕНИ В ЭТОЙ СТРОКЕ
 *   НЕ УКАЗАНО — и это не небрежность источника: в той же подкатегории он
 *   помечает время всюду, где хочет ограничить («FORM: AUXILIARY VERB 'DO',
 *   PRESENT» на A1 против «…PAST» на A2; «AUXILIARY VERBS 'BE', 'HAVE',
 *   PRESENT» на A2 против «…PAST» на B1). Строка про главный глагол `be` —
 *   единственная без пометы, то есть покрывает оба времени.
 *   Рядом: A2, PAST past simple, «FORM: NEGATIVE» — «Can use the negative form
 *   with a limited range of regular and irregular verbs»; `be` — глагол
 *   неправильный, и строка не сводит отрицание к `didn't`.
 *   И примеры ступени A2, где форма стоит целиком: «but it wasn't expensive, I
 *   only spent thirty pounds!», «I bought these clothes because they weren't
 *   expensive».
 *
 * — ВОПРОС `Was/Were …?` (урок 4). English Grammar Profile, A2, PAST past
 *   simple, «FORM: QUESTIONS»: «Can use 'yes/no' and 'wh-' question forms with
 *   'you' with a limited range of verbs». Это строка прошедшего времени, она
 *   прямо называет yes/no-вопрос и сужена до `you` — ровно `Were you at the
 *   party?`, которому учит урок. Перестановку подпирает A1, PRONOUNS, «FORM:
 *   (SUBJECT) QUESTIONS WITH 'BE'»: «Can use the pronouns 'you' and 'it' after
 *   'be' in question forms».
 *   Короткий ответ (Yes, I was) — руководство Cambridge A2 Key, «Inventory of
 *   grammatical areas»: «Short questions (Can you?) and answers (No, he
 *   doesn't)».
 *
 * ЧТО ВЗЯТО ИЗ СОСЕДНИХ ТЕМ И ОБЪЯВЛЕНО.
 *
 * Модуль не может сослаться на прошлую ступень, поэтому вводит нужное сам. Всё
 * перечисленное по источнику в пределах ступени, но названо здесь, чтобы
 * следующий проверяющий не гадал, намерение это или недосмотр:
 *
 * — АРТИКЛИ `a` и `the` (урок 1, блок `a-i-the`) — A1, DETERMINERS articles,
 *   «FORM: WITH NOUNS»: «Can use articles 'the', 'a' and 'an' before nouns».
 *   Без них нельзя было написать даже `at the party` в первой же таблице.
 * — ПРЕДЛОГ МЕСТА И СОЧЕТАНИЯ БЕЗ АРТИКЛЯ (урок 1, блоки `at-i-in`,
 *   `kak-vybrat-mesto`) — A1, DETERMINERS articles, «FORM: PREPOSITION + NO
 *   ARTICLE»: «Can use no article before a limited range of nouns in some fixed
 *   expressions with prepositions», пример источника — «If you are at home, I
 *   can come tomorrow». Отсюда `at home`, `at work`, `at school` без артикля —
 *   и `in` с городом и деревней.
 * — ПУСТОЕ `it` о погоде (урок 2) — A2, PRONOUNS, «FORM: (SUBJECT) EMPTY 'IT'»:
 *   «Can use 'it' as an empty subject when there is nothing else to put in
 *   subject position, particularly with weather or time». Поэтому блок и не
 *   называет `it` вещью.
 * — `my`, `your` при названии (A1), `very` при прилагательном (A1), `but`
 *   между частями предложения (A1) — все три стоят в источнике на ступень ниже
 *   нашей и вводятся примером на месте.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ПРОШЕДШЕГО ВРЕМЕНИ СМЫСЛОВЫХ ГЛАГОЛОВ (`I worked`, `I went`). Программа
 *   отдаёт их модулям 2 и 3. Здесь не показаны даже мельком: модуль о `be`.
 * — `DIDN'T` И `DID YOU …?`. Они приходят с смысловыми глаголами, в модулях 4
 *   и 5. Смешать их с `wasn't` — самая частая порча этой темы.
 * — PAST CONTINUOUS (`I was working`). Форма начинается с того же `was`, и
 *   соблазн показать её здесь велик. Программа отдаёт её модулю 6, и модуль
 *   держится: в текстах и записях ни одного `-ing` после `was`.
 * — «ВОЗВРАЩЕНИЯ» — вопросов из пройденных модулей. Возвращаться не к чему:
 *   модуль первый. Со второго вид обязателен, см. программу, раздел «Где они
 *   появляются».
 */
const module: Module = {
  slug: "eto-bylo",
  title: "Это было",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with an increasing range of verbs», пример источника — «I forgot to tell " +
        "you some details about tomorrow evening». " +
        "A2, QUESTIONS wh-, «FORM: MAIN VERB 'BE'»: «Can use 'wh-'words + main verb " +
        "'be' + subject to form 'wh-' questions», пример источника — «How was your " +
        "dinner yesterday?» — это уроки 4 и 5. " +
        "A2, QUESTIONS yes/no, «FORM: MAIN VERB 'BE'»: «Can use main verb 'be' + " +
        "subject to form 'yes/no' questions», пример источника — «Are you ok?»; " +
        "пример настоящего времени, прошедший взят из соседней строки про wh-, и " +
        "это объявлено в шапке модуля. " +
        "A2, ADVERBS «USE: TIME»: «Can use a limited range of adverbs ('yesterday', " +
        "'just', 'now', 'already',) to refer to the timing of an event», пример " +
        "источника — «Yesterday I went shopping» — это урок 6. " +
        "A2, PAST past simple, «FORM: QUESTIONS»: «Can use 'yes/no' and 'wh-' " +
        "question forms with 'you' with a limited range of verbs» — прямая опора " +
        "урока 4. " +
        "A1, PAST past simple, «USE: EVERYDAY EVENTS AND STATES»: «Can use the past " +
        "simple to talk about everyday events or states», пример источника — «The " +
        "people were very polite» — опора уроков 1 и 2. " +
        "ОТРИЦАНИЕ, урок 3: A1, NEGATION «FORM: MAIN VERB 'BE'»: «Can form negative " +
        "statements of main verb 'be', with contracted and uncontracted forms» — " +
        "строка без пометы времени, тогда как соседние строки той же подкатегории " +
        "время помечают; плюс A2, PAST past simple «FORM: NEGATIVE»: «Can use the " +
        "negative form with a limited range of regular and irregular verbs», плюс " +
        "примеры ступени A2: «but it wasn't expensive, I only spent thirty pounds!» " +
        "и «I bought these clothes because they weren't expensive». " +
        "ВЗЯТОЕ ИЗ СОСЕДНИХ ТЕМ: A1, DETERMINERS articles «FORM: WITH NOUNS»: «Can " +
        "use articles 'the', 'a' and 'an' before nouns»; A1, DETERMINERS articles " +
        "«FORM: PREPOSITION + NO ARTICLE»: «Can use no article before a limited " +
        "range of nouns in some fixed expressions with prepositions», пример " +
        "источника — «If you are at home, I can come tomorrow»; A2, PRONOUNS «FORM: " +
        "(SUBJECT) EMPTY 'IT'»: «Can use 'it' as an empty subject when there is " +
        "nothing else to put in subject position, particularly with weather or " +
        "time». " +
        "НЕСОКРАЩЁННОЕ NOT (урок 3, «берут для строгости и в деловых письмах») — " +
        "NEGATION, «FORM/USE: 'NOT', EMPHASIS»: «Can use uncontracted 'not' for " +
        "emphasis or in formal contexts». Строка стоит на B2, то есть выше нашей " +
        "ступени; берём из неё не форму, а сведение о том, где она уместна. " +
        "Разобрано в шапке модуля",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "ИТОГ МОДУЛЯ. с. 67, шкала Sustained monologue: describing experience, " +
        "графа A2, дословно: «Can give very short, basic descriptions of events, " +
        "past activities and personal experiences» — отсюда и размер рассказа, " +
        "которого модуль требует: несколько отдельных строк, а не связный текст. " +
        "УРОКИ 4 И 5. с. 79, Information exchange, A2: «Can ask and answer " +
        "questions about pastimes and past activities» — источник называет обе " +
        "стороны, спросить и ответить, поэтому короткий ответ (Yes, I was) стоит в " +
        "уроке рядом с вопросом, а не отдельно. Там же, с. 79: «Can ask and answer " +
        "simple questions about an event (e.g. ask where and when it took place, " +
        "who was there and what it was like)» — это урок 5 целиком, вместе с who и " +
        "с how was it. " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find).",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — опора уроков чтения и слушания",
      section:
        "УРОК 7, ЧТЕНИЕ. с. 55, шкала Reading correspondence, графа A2, дословно: " +
        "«Can understand short, simple personal letters» — отсюда жанр письма и его " +
        "длина. " +
        "УРОК 8, СЛУШАНИЕ. с. 48, шкала Overall oral comprehension, графа A2: «Can " +
        "understand phrases and expressions related to areas of most immediate " +
        "priority (e.g. very basic personal and family information, shopping, local " +
        "geography, employment), provided people articulate clearly and slowly» — " +
        "отсюда pace: \"slow\" в записи и то, что спрашиваем о простом: где был и " +
        "как было",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 51–52, «Inventory of grammatical areas», раздел Verbs: «Past simple: " +
        "past events» и «Verb forms — Affirmative, interrogative, negative» — это " +
        "тема модуля целиком: утверждение, вопрос и отрицание в прошедшем. Там же: " +
        "«Short questions (Can you?) and answers (No, he doesn't)» — опора блока " +
        "короткого ответа в уроке 4. " +
        "Номера страниц взяты разборщиком PDF; печатный колонтитул на развороте " +
        "показывает «49 Language specifications», и при сверке глазами число может " +
        "разойтись.",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "слова модуля и их ступень: home A1, work A1, school A1, party A1, market " +
        "A1, station A1, weather A1, cold A1, hot A1, expensive A1, cheap A1, " +
        "delicious A1, boring A1, great A1, busy A1, tired A1, free A1, ready A1, " +
        "angry A1, holiday A1, trip A1, museum A1, beach A1, village A1, city A1, " +
        "restaurant A1, yesterday A1, last A1, ago A1, night A1, week A1, month A1, " +
        "year A1, late A1, quiet A1, film A1, dinner A1, shop A1, hotel A1, " +
        "concert A1, happy A1. Сверх A1 и в пределах ступени: noisy A2, alone A2. " +
        "Слово early в перечне первой редакции стояло, а в модуле не встречалось — " +
        "убрано по замечанию методиста",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "рассказывать, где прошёл вчерашний день: I was at home",
    "говорить, каким что-то было: The film was great",
    "говорить, где не был и каким что-то не было: I wasn't at work",
    "спрашивать, было ли: Were you at the party?",
    "спрашивать о прошлом вопросительным словом: Where were you?",
    "называть время прошлого: yesterday, last week, two days ago",
    "понимать короткое письмо о том, как прошли дни",
    "слышать в записи, где человек был и каким это было",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "byl-i-byli",
      title: "Где это было: I was at home",
      estimatedMinutes: 13,
      outcome: "рассказывать, где прошёл вчерашний день: I was at home",

      blocks: [
        {
          id: "zachem-was",
          kind: "explain",
          text: [
            "Разговор о вчерашнем дне быстро доходит до простого: где человек был.",
            "«Я был дома», «Мы были на работе», «Она была в школе».",
            "В английском для этого две формы — was и were. Какая с кем — ниже.",
            "В таблице они стоят рядом с теми формами, которыми о том же говорят " +
              "сейчас: I was — I am.",
          ],
        },
        {
          // Формы по лицам, по одному лицу в строке. Замечание владельца от
          // 20 августа: сначала парадигма столбиком, как в учебнике, и только
          // потом объяснение словами.
          id: "formy-po-licam",
          kind: "table",
          caption: "Формы по лицам",
          zvuchat: ["I was", "you were", "he was", "we were", "they were"],
          head: ["О прошлом", "О настоящем"],
          rows: [
            ["I was", "I am"],
            ["you were", "you are"],
            ["he was", "he is"],
            ["she was", "she is"],
            ["it was", "it is"],
            ["we were", "we are"],
            ["they were", "they are"],
          ],
        },
        {
          id: "pravilo-vybora",
          kind: "explain",
          text: [
            "Was — когда речь об одном: I was, he was, she was, it was.",
            "Were — когда о нескольких: we were, they were. И с you тоже were: это " +
              "слово берёт were всегда, даже когда обращаются к одному человеку.",
            "Вместо местоимения может стоять имя или название, и выбор тот же: my " +
              "sister — она одна, was; my parents — их двое, were.",
          ],
        },
        {
          id: "ne-i-were",
          kind: "note",
          tone: "mistake",
          text:
            "«I were at home» — так не говорят.\n\nО себе всегда was: I was at home.",
        },
        {
          // Артикль вводится здесь, а не «когда-нибудь»: уже в таблице ниже
          // стоит at the party, а курс не может сослаться на прошлую ступень.
          // English Grammar Profile, A1, DETERMINERS articles, «FORM: WITH
          // NOUNS»: «Can use articles 'the', 'a' and 'an' before nouns.»
          id: "a-i-the",
          kind: "explain",
          text: [
            "В таблице ниже места записаны по-разному: at home — без лишних слов, at " +
              "the station — со словом the. Разберём эти короткие слова, иначе таблицу " +
              "не прочитать.",
            "Перед названием предмета в английском обычно стоит короткое слово — a " +
              "или the. Эти два слова называют артиклями.",
            "A ставят, когда предмет называют впервые и он один из многих: a village — " +
              "какая-то деревня.",
            "The ставят, когда обоим понятно, о чём речь: the station — тот самый " +
              "вокзал.",
            "В русском таких слов нет, и в переводе они не появляются.",
          ],
        },
        {
          // English Grammar Profile, A1, DETERMINERS articles, «FORM: PREPOSITION
          // + NO ARTICLE»: «Can use no article before a limited range of nouns in
          // some fixed expressions with prepositions», пример источника — «If you
          // are at home, I can come tomorrow».
          id: "at-i-in",
          kind: "table",
          caption: "Место: где артикль есть, а где нет",
          zvuchat: ["at home", "at the station", "in a village"],
          head: ["Английский", "Перевод"],
          rows: [
            ["at home", "дома"],
            ["at work", "на работе"],
            ["at school", "в школе"],
            ["at the station", "на вокзале"],
            ["at the market", "на рынке"],
            ["in Almaty", "в Алматы"],
            ["in a village", "в деревне"],
          ],
        },
        {
          id: "kak-vybrat-mesto",
          kind: "explain",
          text: [
            "Три сочетания — at home, at work, at school — сложились без артикля, и " +
              "так их и запоминают целиком.",
            "У остальных мест артикль на месте: at the station, at the market.",
            "С городом, деревней и страной берут не at, а in: in Almaty, in a village.",
            "Теперь соберём это в целые предложения: форма в каждом выбрана по " +
              "тому, о ком или о чём речь.",
          ],
        },
        {
          id: "tablica-was-were",
          kind: "table",
          caption: "Кто или что — и какая форма",
          zvuchat: ["My sister was at work.", "My parents were at the market.", "The film was good."],
          head: ["Английский", "Перевод"],
          rows: [
            ["My sister was at work.", "Моя сестра была на работе."],
            ["My parents were at the market.", "Мои родители были на рынке."],
            ["The film was good.", "Фильм был хороший."],
            ["The shops were expensive.", "Магазины были дорогие."],
            ["It was cold.", "Было холодно."],
            ["You were at the party.", "Вы были на празднике."],
          ],
        },
        {
          id: "primer-gde-byl",
          kind: "example",
          caption: "Вчерашний вечер",
          zvuchat: ["I was at home.", "My sister was at school.", "My parents were at the station."],
          text: "I was at home.\nMy sister was at school.\nMy parents were at the station.",
          explain:
            "В первых двух строках речь об одном человеке — стоит was. В третьей " +
            "людей двое, и форма меняется на were.",
        },
        {
          id: "slovar-mest",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "home", translation: "дом, дома", example: "I was at home.", hint: "/həʊm/" },
            { term: "work", translation: "работа", example: "He was at work.", hint: "/wɜːk/" },
            { term: "school", translation: "школа", example: "She was at school.", hint: "/skuːl/" },
            { term: "party", translation: "праздник, вечеринка", example: "You were at the party.", hint: "/ˈpɑːti/" },
            { term: "market", translation: "рынок", example: "They were at the market.", hint: "/ˈmɑːkɪt/" },
            { term: "station", translation: "вокзал, станция", example: "We were at the station.", hint: "/ˈsteɪʃn/" },
            { term: "yesterday", translation: "вчера", example: "I was at home yesterday.", hint: "/ˈjestədeɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-was",
          kind: "gap",
          prompt: "Вчера у тебя был выходной, и день прошёл дома. Допиши нужную форму.",
          before: "I ",
          after: " at home.",
          answer: "was",
          hint: "О себе, об одном человеке, — was.",
          why: "I was at home. С I всегда стоит was.",
        },
        {
          id: "z2-vybrat-formu",
          kind: "choice",
          prompt: "Твои родители вчера были на рынке. Где нет ошибки?",
          options: [
            { text: "My parents was at the market." },
            { text: "My parents were at the market.", correct: true },
            { text: "My parents are at the market yesterday." },
          ],
          hint: "Родителей двое.",
          why:
            "My parents were at the market. Когда людей больше одного, форма were. " +
            "В третьей строке глагол стоит в настоящем времени, а речь о вчера.",
        },
        {
          id: "z3-otmetit-were",
          kind: "hottext",
          prompt: "Отметь записи, где форма выбрана неверно.",
          parts: [
            { text: "She was at school.", selectable: true },
            { text: " · " },
            { text: "I were at home.", selectable: true, correct: true },
            { text: " · " },
            { text: "They were at work.", selectable: true },
            { text: " · " },
            { text: "We was at the station.", selectable: true, correct: true },
          ],
          hint: "Проверь, к кому относится каждая форма.",
          why:
            "Неверны «I were at home» (про себя одного — was) и «We was at the " +
            "station» (нас несколько — were).",
        },
        {
          id: "z4-sobrat-gde-byl",
          kind: "order",
          prompt: "Собери предложение: «Мы были на вокзале.»",
          items: ["at the station", "were", "We"],
          answer: [2, 1, 0],
          hint: "Порядок тот же, что в настоящем времени: кто, потом форма глагола.",
          why: "We were at the station. Место стоит после формы глагола.",
        },
        {
          id: "z5-napisat-o-sebe",
          kind: "short",
          prompt: "Напиши о себе: вчера у тебя была работа. Работа — work.",
          answer: "I was at work.",
          // Условие говорит «вчера», и ученик вправе дописать yesterday.
          accept: ["I was at work", "I was at work yesterday.", "Yesterday I was at work."],
          hint: "Начни с I и поставь нужную форму.",
          why: "I was at work. Перед местом стоит at: at work, at school, at home.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-eto-bylo",
      title: "Каким это было: The film was great",
      estimatedMinutes: 13,
      outcome: "говорить, каким что-то было: The film was great",

      blocks: [
        {
          id: "zachem-kakoe",
          kind: "explain",
          text: [
            "Назвать место — половина рассказа. Вторая половина — каким это было.",
            "«Фильм был хороший», «Погода была холодная», «Еда была вкусная».",
            "Формы те же самые, was и were, а после них встаёт слово, отвечающее на " +
              "вопрос «какой»: good, cold, delicious. Такие слова зовут прилагательными.",
          ],
        },
        {
          id: "tablica-kakoe",
          kind: "table",
          caption: "Каким это было",
          zvuchat: ["The film was great.", "The weather was cold.", "The shops were expensive."],
          head: ["Английский", "Перевод"],
          rows: [
            ["The film was great.", "Фильм был отличный."],
            ["The dinner was delicious.", "Ужин был вкусный."],
            ["The weather was cold.", "Погода была холодная."],
            ["The shops were expensive.", "Магазины были дорогие."],
            ["The lessons were boring.", "Уроки были скучные."],
          ],
        },
        {
          id: "prilagatelnoe-ne-menyaetsya",
          kind: "note",
          tone: "info",
          text:
            "Английское прилагательное не меняется ни по роду, ни по числу.\n\nThe " +
            "film was great и the films were great — слово great одно и то же.",
        },
        {
          id: "it-o-pogode",
          kind: "explain",
          text: [
            "О погоде англичане говорят через it: It was cold. It was hot.",
            "Слова «оно» в переводе нет: по-русски выходит «было холодно».",
            "It не называет никакой вещи: оно просто занимает место того, о ком речь. " +
              "Форма при нём всегда was.",
          ],
        },
        {
          id: "ne-was-good-people",
          kind: "note",
          tone: "mistake",
          text:
            "«The shops was expensive» — так не говорят.\n\nФорму выбирают не по " +
            "последнему слову, а по тому, об одном идёт речь или о нескольких. " +
            "Магазинов много — значит were.",
        },
        {
          id: "primer-o-poezdke",
          kind: "example",
          caption: "Два дня на море",
          zvuchat: ["The hotel was cheap.", "The beach was quiet.", "The days were hot."],
          text: "The hotel was cheap.\nThe beach was quiet.\nThe days were hot.",
          explain:
            "Три отдельные строки — так и выглядит короткий рассказ о поездке: не " +
            "длинный текст, а несколько простых предложений подряд.",
        },
        {
          id: "slovar-priznakov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "weather", translation: "погода", example: "The weather was cold.", hint: "/ˈweðə/" },
            { term: "cold", translation: "холодный", example: "It was cold.", hint: "/kəʊld/" },
            { term: "hot", translation: "жаркий, горячий", example: "The days were hot.", hint: "/hɒt/" },
            { term: "expensive", translation: "дорогой", example: "The shops were expensive.", hint: "/ɪkˈspensɪv/" },
            { term: "cheap", translation: "дешёвый", example: "The hotel was cheap.", hint: "/tʃiːp/" },
            { term: "delicious", translation: "вкусный", example: "The dinner was delicious.", hint: "/dɪˈlɪʃəs/" },
            { term: "boring", translation: "скучный", example: "The lessons were boring.", hint: "/ˈbɔːrɪŋ/" },
            { term: "great", translation: "отличный", example: "The film was great.", hint: "/greɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-o-pogode",
          kind: "gap",
          prompt: "Вчера было холодно. Допиши форму глагола.",
          before: "It ",
          after: " cold yesterday.",
          answer: "was",
          hint: "Речь об одной вещи — о погоде.",
          why: "It was cold yesterday. О погоде говорят через it, и it берёт was.",
        },
        {
          id: "z2-vybrat-priznak",
          kind: "choice",
          prompt: "Ужин был вкусный. Где нет ошибки?",
          options: [
            { text: "The dinner were delicious." },
            { text: "The dinner was delicious.", correct: true },
            { text: "The dinner is delicious." },
          ],
          hint: "Ужин один.",
          why:
            "The dinner was delicious. Ужин один — was. В третьей строке глагол стоит " +
            "в настоящем времени, а речь о вчерашнем ужине.",
        },
        {
          // «Найди лишнее» — вид из раскладки видов заданий: дешёвое
          // разнообразие там, где нужен словарь.
          id: "z3-nayti-lishnee",
          kind: "choice",
          prompt: "Три слова отвечают на вопрос «какой», а одно — нет. Какое лишнее?",
          options: [
            { text: "delicious" },
            { text: "market", correct: true },
            { text: "cold" },
            { text: "boring" },
          ],
          hint: "Три слова отвечают на вопрос «какой», а одно называет место.",
          why:
            "Лишнее — market: это место, а delicious, cold и boring — прилагательные.",
        },
        {
          id: "z4-sopostavit-priznaki",
          kind: "match",
          prompt: "Сопоставь английское и русское.",
          left: ["The hotel was cheap.", "The beach was quiet.", "The lessons were boring."],
          right: ["Уроки были скучные.", "Отель был дешёвый.", "Пляж был тихий."],
          answer: [1, 2, 0],
          hint: "Смотри на прилагательное в конце.",
          why:
            "The hotel was cheap — отель был дешёвый. The beach was quiet — пляж был " +
            "тихий. The lessons were boring — уроки были скучные.",
        },
        {
          id: "z5-napisat-o-filme",
          kind: "short",
          prompt: "Напиши: праздник был отличный. Праздник — the party, отличный — great.",
          answer: "The party was great.",
          accept: ["The party was great"],
          hint: "Праздник один.",
          why: "The party was great. Речь об одном — форма was.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-bylo-tak",
      title: "Чего не было: I wasn't at work",
      estimatedMinutes: 13,
      outcome: "говорить, где не был и каким что-то не было: I wasn't at work",

      blocks: [
        {
          id: "zachem-otricanie",
          kind: "explain",
          text: [
            "Ответ о вчерашнем дне часто отрицательный: «меня там не было», «я не был " +
              "занят», «погода была не холодная».",
            "Отрицание строится одинаково для обеих форм: после was или were встаёт not.",
          ],
        },
        {
          id: "tablica-otricaniya",
          kind: "table",
          caption: "Было и не было",
          zvuchat: ["I was at home.", "I wasn't at work.", "They weren't at school."],
          head: ["Английский", "Перевод"],
          rows: [
            ["I was at home.", "Я был дома."],
            ["I wasn't at work.", "Я не был на работе."],
            ["She wasn't busy.", "Она не была занята."],
            ["We weren't tired.", "Мы не были усталыми."],
            ["They weren't at school.", "Их не было в школе."],
          ],
        },
        {
          id: "otricanie-po-licam",
          kind: "table",
          caption: "Отрицание: полностью и коротко",
          zvuchat: ["I wasn't", "you weren't", "he wasn't", "we weren't", "they weren't"],
          head: ["Полностью", "Коротко"],
          rows: [
            ["I was not", "I wasn't"],
            ["you were not", "you weren't"],
            ["he was not", "he wasn't"],
            ["she was not", "she wasn't"],
            ["it was not", "it wasn't"],
            ["we were not", "we weren't"],
            ["they were not", "they weren't"],
          ],
        },
        {
          id: "gde-stoit-not",
          kind: "explain",
          text: [
            "Not стоит сразу после was или were, а не перед ними: I was not, а не I " +
              "not was.",
            "Was not и were not в разговоре сжимают в одно слово — wasn't и weren't. " +
              "В таблице выше они рядом: слева полная запись, справа короткая.",
            "Короткую берут в разговоре и в письме другу, полную — в деловом письме и " +
              "там, где надо сказать строго.",
          ],
        },
        {
          id: "ne-didnt-be",
          kind: "note",
          tone: "mistake",
          text:
            "«I didn't be at work» — так не говорят.\n\nУ was и were отрицание своё: " +
            "wasn't, weren't. Другой глагол для него не нужен.",
        },
        {
          id: "primer-otricanie",
          kind: "example",
          caption: "Ответ на вопрос о вчера",
          zvuchat: ["I wasn't at the party.", "I was at home.", "I wasn't free."],
          text: "I wasn't at the party.\nI was at home.\nI wasn't free.",
          explain:
            "Отрицание и утверждение стоят рядом: сначала чего не было, потом что " +
            "было. Так и строится обычный ответ.",
        },
        {
          id: "slovar-sostoyaniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "busy", translation: "занят, занята", example: "She wasn't busy.", hint: "/ˈbɪzi/" },
            { term: "tired", translation: "усталый", example: "We weren't tired.", hint: "/ˈtaɪəd/" },
            { term: "free", translation: "свободный", example: "I wasn't free.", hint: "/friː/" },
            { term: "ready", translation: "готовый", example: "The dinner wasn't ready.", hint: "/ˈredi/" },
            { term: "angry", translation: "сердитый", example: "My father wasn't angry.", hint: "/ˈæŋgri/" },
            { term: "alone", translation: "один, в одиночестве", example: "I wasn't alone.", hint: "/əˈləʊn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-wasnt",
          kind: "gap",
          prompt: "Вчера тебя не было на работе. Допиши отрицательную форму.",
          before: "I ",
          after: " at work.",
          answer: "wasn't",
          accept: ["was not"],
          hint: "Отрицание пишется одним словом: was и not вместе.",
          why: "I wasn't at work. Полная запись — I was not at work, и она тоже верна.",
        },
        {
          id: "z2-vybrat-otricanie",
          kind: "choice",
          prompt: "Их не было в школе. Где нет ошибки?",
          options: [
            { text: "They didn't be at school." },
            { text: "They weren't at school.", correct: true },
            { text: "They not were at school." },
          ],
          hint: "У was и were своё отрицание.",
          why:
            "They weren't at school. Отрицание строится своей формой, а not встаёт " +
            "после формы глагола, а не перед ней.",
        },
        {
          id: "z3-otmetit-otricanie",
          kind: "hottext",
          prompt: "Отметь записи, где отрицание собрано неверно.",
          parts: [
            { text: "She wasn't busy.", selectable: true },
            { text: " · " },
            { text: "We not were tired.", selectable: true, correct: true },
            { text: " · " },
            { text: "I didn't be free.", selectable: true, correct: true },
            { text: " · " },
            { text: "They weren't at home.", selectable: true },
          ],
          hint: "Смотри, где стоит not и не появился ли лишний глагол.",
          why:
            "Неверны «We not were tired» (not встаёт после were) и «I didn't be " +
            "free» (у was своё отрицание — wasn't).",
        },
        {
          id: "z4-sobrat-otricanie",
          kind: "order",
          prompt: "Собери предложение: «Ужин не был готов.»",
          items: ["ready", "The dinner", "wasn't"],
          answer: [1, 2, 0],
          hint: "Порядок тот же, что в утверждении.",
          why: "The dinner wasn't ready. Прилагательное стоит последним.",
        },
        {
          id: "z5-napisat-otricanie",
          kind: "short",
          prompt: "Напиши о себе: вчера дел не было. Занят — busy.",
          answer: "I wasn't busy.",
          accept: ["I was not busy.", "I wasn't busy", "I was not busy", "I wasn't busy yesterday.", "Yesterday I wasn't busy."],
          hint: "Начни с I и поставь отрицательную форму.",
          why: "I wasn't busy. Сокращённая запись обычна для разговора.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "bylo-li",
      title: "Был ли: Were you at the party?",
      estimatedMinutes: 13,
      outcome: "спрашивать, было ли: Were you at the party?",

      blocks: [
        {
          id: "zachem-vopros",
          kind: "explain",
          text: [
            "О чужом вчерашнем дне спрашивают не реже, чем рассказывают о своём.",
            "Вопрос делается перестановкой: форма глагола выходит вперёд, а тот, о " +
              "ком речь, встаёт за ней.",
            "Was he at home? Were you at the party?",
          ],
        },
        {
          id: "tablica-voprosa",
          kind: "table",
          caption: "Утверждение и вопрос",
          zvuchat: ["You were at the party.", "Were you at the party?", "Was he at home?"],
          head: ["Английский", "Перевод"],
          rows: [
            ["You were at the party.", "Вы были на празднике."],
            ["Were you at the party?", "Вы были на празднике?"],
            ["He was at home.", "Он был дома."],
            ["Was he at home?", "Он был дома?"],
            ["Was the film good?", "Фильм был хороший?"],
          ],
        },
        {
          id: "vopros-po-licam",
          kind: "table",
          caption: "Вопрос и ответ на него",
          zvuchat: ["Yes, I was.", "No, I wasn't.", "Yes, they were.", "No, they weren't."],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Were you …?", "Yes, I was.", "No, I wasn't."],
            ["Was he …?", "Yes, he was.", "No, he wasn't."],
            ["Was she …?", "Yes, she was.", "No, she wasn't."],
            ["Was it …?", "Yes, it was.", "No, it wasn't."],
            ["Were we …?", "Yes, we were.", "No, we weren't."],
            ["Were they …?", "Yes, they were.", "No, they weren't."],
          ],
        },
        {
          id: "korotkiy-otvet",
          kind: "explain",
          text: [
            "На такой вопрос отвечают двумя-тремя словами: Yes, I was. No, I wasn't. " +
              "Это и называют коротким ответом.",
            "В нём берут ту же форму, что стояла в вопросе, но ставят её обратно.",
            "Was he at home? — Yes, he was: в вопросе форма впереди, в ответе — после " +
              "того, о ком речь.",
            "Спрашивают про you, а отвечают про I: Were you at the party? — Yes, I was.",
            "Ответить целым предложением тоже можно: Yes, I was at the party. Но " +
              "короткого хватает.",
          ],
        },
        {
          id: "ne-yes-i-am-was",
          kind: "note",
          tone: "mistake",
          text:
            "Yes, I am — ответ о том, что происходит сейчас.\n\nО вчерашнем дне " +
            "отвечают Yes, I was.",
        },
        {
          id: "razgovor-o-prazdnike",
          kind: "example",
          caption: "Короткий разговор",
          // Разговор звучит одной кнопкой и на два голоса: вопрос и ответ
          // должны звучать разговором, а не одним длинным предложением.
          razgovor: true,
          text: "— Were you at the party?\n— No, I wasn't. I was at home.\n— Was it good?\n— Yes, it was.",
          explain:
            "Спрашивают перестановкой, отвечают короткой формой. Второй вопрос — о " +
            "самом празднике, и в нём стоит it.",
        },
        {
          id: "slovar-sobytiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "holiday", translation: "отпуск, каникулы, праздник", example: "Were you on holiday?", hint: "/ˈhɒlədeɪ/" },
            { term: "trip", translation: "поездка", example: "Was the trip long?", hint: "/trɪp/" },
            { term: "museum", translation: "музей", example: "Were they at the museum?", hint: "/mjuˈziːəm/" },
            { term: "concert", translation: "концерт", example: "Was the concert good?", hint: "/ˈkɒnsət/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-vopros",
          kind: "gap",
          prompt: "Спроси у друга, был ли он на празднике. Допиши форму глагола.",
          before: "",
          after: " you at the party?",
          answer: "Were",
          accept: ["were"],
          hint: "С you в прошедшем времени идёт одна форма.",
          why: "Were you at the party? Форма выходит вперёд — так и получается вопрос.",
        },
        {
          id: "z2-vybrat-vopros",
          kind: "choice",
          prompt: "Нужно спросить: «Он был дома?» Где нет ошибки?",
          options: [
            { text: "He was at home?" },
            { text: "Was he at home?", correct: true },
            { text: "Did he be at home?" },
          ],
          hint: "Вопрос делается перестановкой.",
          why:
            "Was he at home? Первая строка — утверждение со знаком вопроса, а " +
            "перестановки в ней нет. В третьей взят did, а у was вопрос получается " +
            "перестановкой.",
        },
        {
          id: "z3-otmetit-otvety",
          kind: "hottext",
          prompt: "Отметь верные короткие ответы на вопрос «Were you at the party?».",
          parts: [
            { text: "Yes, I was.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, I am.", selectable: true },
            { text: " · " },
            { text: "No, I wasn't.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, I didn't.", selectable: true },
          ],
          hint: "В ответе повторяется форма из вопроса.",
          why:
            "Верны «Yes, I was» и «No, I wasn't» — в них та же форма, что в вопросе.",
        },
        {
          id: "z4-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Поездка была долгая?»",
          items: ["long", "the trip", "Was"],
          answer: [2, 1, 0],
          hint: "Начни с формы глагола.",
          why: "Was the trip long? Форма стоит первой, за ней — о чём речь.",
        },
        {
          id: "z5-napisat-vopros",
          kind: "short",
          prompt: "Спроси у двух друзей, были ли они в музее. Музей — the museum.",
          answer: "Were you at the museum?",
          accept: ["Were you at the museum"],
          hint: "К нескольким людям обращаются тем же словом you.",
          why: "Were you at the museum? С you всегда were, сколько бы людей ни было.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-i-kak",
      title: "Где и как это было: Where were you?",
      estimatedMinutes: 13,
      outcome: "спрашивать о прошлом вопросительным словом: Where were you?",

      blocks: [
        {
          id: "zachem-voprosnye-slova",
          kind: "explain",
          text: [
            "Ответ «да» или «нет» разговор не поддержит. Дальше спрашивают где, как, " +
              "кто и почему.",
            "Такой вопрос собирается из трёх частей: вопросительное слово, потом " +
              "форма глагола, потом тот, о ком речь.",
            "Where were you? How was the film?",
          ],
        },
        {
          id: "tablica-voprosnyh-slov",
          kind: "table",
          caption: "Вопрос с вопросительным словом",
          zvuchat: ["Where were you?", "How was the film?", "Who was there?"],
          head: ["Английский", "Перевод"],
          rows: [
            ["Where were you?", "Где вы были?"],
            ["How was the film?", "Каким был фильм?"],
            ["How was your day?", "Как прошёл день?"],
            ["Who was there?", "Кто там был?"],
            ["Why were you late?", "Почему вы опоздали?"],
          ],
        },
        {
          id: "poryadok-treh-chastey",
          kind: "explain",
          text: [
            "Порядок частей не меняется: сначала вопросительное слово, потом форма " +
              "глагола, потом остальное.",
            "Where was your sister? — Where стоит первым, was — вторым, your sister — " +
              "третьим.",
            "Слово who — исключение по смыслу: оно само и есть тот, о ком речь, " +
              "поэтому за ним сразу идёт was: Who was there?",
          ],
        },
        {
          id: "ne-where-you-were",
          kind: "note",
          tone: "mistake",
          text:
            "«Where you were?» — так не спрашивают.\n\nПосле вопросительного слова " +
            "форма глагола идёт раньше того, о ком речь: Where were you?",
        },
        {
          id: "primer-rassprosa",
          kind: "example",
          caption: "Расспрос о выходном",
          zvuchat: ["Where were you on Sunday?", "How was the weather?", "Who was with you?"],
          text: "Where were you on Sunday?\nHow was the weather?\nWho was with you?",
          explain:
            "Три вопроса подряд об одном дне: место, погода, люди. Так и выглядит " +
            "разговор о том, как прошли выходные.",
        },
        {
          id: "slovar-mest-dva",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "beach", translation: "пляж", example: "We were at the beach.", hint: "/biːtʃ/" },
            { term: "village", translation: "деревня, село", example: "I was in a village.", hint: "/ˈvɪlɪdʒ/" },
            { term: "city", translation: "город", example: "The city was noisy.", hint: "/ˈsɪti/" },
            { term: "restaurant", translation: "ресторан", example: "The restaurant was full.", hint: "/ˈrestrɒnt/" },
            { term: "noisy", translation: "шумный", example: "The city was noisy.", hint: "/ˈnɔɪzi/" },
            { term: "quiet", translation: "тихий", example: "The village was quiet.", hint: "/ˈkwaɪət/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-voprosnoe-slovo",
          kind: "gap",
          prompt: "Спроси, где человек был. Допиши вопросительное слово.",
          before: "",
          after: " were you yesterday?",
          answer: "Where",
          accept: ["where"],
          hint: "Слово о месте.",
          why: "Where were you yesterday? Вопросительное слово стоит первым.",
        },
        {
          id: "z2-vybrat-poryadok",
          kind: "choice",
          prompt: "Нужно спросить: «Как прошёл день?» Где нет ошибки?",
          options: [
            { text: "How your day was?" },
            { text: "How was your day?", correct: true },
            { text: "How is your day?" },
          ],
          hint: "Проверь, что стоит вторым.",
          why:
            "How was your day? В первой строке форма глагола ушла в конец, в третьей она " +
            "стоит в настоящем времени, а речь о вчера.",
        },
        {
          id: "z3-otmetit-poryadok",
          kind: "hottext",
          prompt: "Отметь вопросы, собранные неверно.",
          parts: [
            { text: "Where were you?", selectable: true },
            { text: " · " },
            { text: "Why you were late?", selectable: true, correct: true },
            { text: " · " },
            { text: "Who was there?", selectable: true },
            { text: " · " },
            { text: "How the film was?", selectable: true, correct: true },
          ],
          hint: "Смотри, что идёт сразу после вопросительного слова.",
          why:
            "Неверны «Why you were late?» и «How the film was?». В обоих форма " +
            "глагола ушла в конец. Её место — сразу за вопросительным словом.",
        },
        {
          id: "z4-sopostavit-vopros-otvet",
          kind: "match",
          prompt: "Сопоставь вопрос и ответ.",
          left: ["Where were you?", "How was the weather?", "Who was there?"],
          right: ["It was hot.", "My sister.", "I was at the beach."],
          answer: [2, 0, 1],
          hint: "Смотри на вопросительное слово: место, состояние или человек.",
          why:
            "Where — о месте: I was at the beach. How — о том, каким это было: It was hot. " +
            "Who — о человеке: My sister.",
        },
        {
          id: "z5-napisat-vopros-kak",
          kind: "short",
          prompt: "Спроси у друга, как прошла его поездка. Поездка — the trip.",
          answer: "How was the trip?",
          accept: ["How was your trip?", "How was the trip"],
          hint: "Начни со слова о том, каким что-то было.",
          why: "How was the trip? Или How was your trip? — оба вопроса верны.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kogda-eto-bylo",
      title: "Когда это было: yesterday, last week",
      estimatedMinutes: 13,
      outcome: "называть время прошлого: yesterday, last week, two days ago",

      blocks: [
        {
          id: "zachem-vremya",
          kind: "explain",
          text: [
            "Форма глагола говорит, что дело в прошлом. Но собеседнику важно и другое: " +
              "когда именно.",
            "Для этого есть готовые слова и сочетания, и их немного: yesterday, last week, " +
              "two days ago, in 2019. Дальше зовём их оборотами времени.",
          ],
        },
        {
          id: "tablica-kogda",
          kind: "table",
          caption: "Как назвать время",
          zvuchat: ["I was at home yesterday.", "We were in Almaty last week.", "She was here two days ago."],
          head: ["Английский", "Перевод"],
          rows: [
            ["I was at home yesterday.", "Я был дома вчера."],
            ["It was cold last night.", "Прошлой ночью было холодно."],
            ["We were in Almaty last week.", "Мы были в Алматы на прошлой неделе."],
            ["She was here two days ago.", "Она была здесь два дня назад."],
            ["They were at school in 2019.", "Они были в школе в 2019 году."],
          ],
        },
        {
          id: "kak-sobrany-oboroty",
          kind: "table",
          caption: "Как собран каждый оборот",
          zvuchat: ["Last week I was on holiday.", "She was here two days ago.", "I was at home yesterday."],
          head: ["Оборот", "Как собран", "Пример"],
          rows: [
            ["last week", "слово last и слово о времени; артикля перед last нет", "Last week I was on holiday."],
            ["two days ago", "сначала — сколько времени прошло, потом ago", "She was here two days ago."],
            ["in 2019", "in и год", "They were at school in 2019."],
            ["yesterday", "одно слово, ничего к нему не добавляют", "I was at home yesterday."],
          ],
        },
        {
          id: "kak-ustroeny-oboroty",
          kind: "explain",
          text: [
            "Last — это «прошлый», и артикля перед ним не ставят: last week, last " +
              "night, last year.",
            "Ago — это «назад», и оно идёт последним, после того, сколько времени " +
              "прошло: two days ago, a month ago.",
            "Сам оборот встаёт в конец предложения: I was at home yesterday. В " +
              "рассказе по порядку его выносят и в начало: Yesterday I was at home.",
          ],
        },
        {
          id: "ne-the-last-week",
          kind: "note",
          tone: "mistake",
          text:
            "«the last week» и «ago two days» — так не говорят.\n\nПеред last артикль " +
            "не ставят, а ago идёт после того, сколько времени прошло: two days ago.",
        },
        {
          id: "primer-kogda",
          kind: "example",
          caption: "Одна неделя",
          zvuchat: ["Yesterday I was at work.", "Last week I was on holiday.", "A month ago I was in a village."],
          text: "Yesterday I was at work.\nLast week I was on holiday.\nA month ago I was in a village.",
          explain:
            "Во всех трёх строках оборот времени стоит в начале. Так удобнее, когда " +
            "рассказываешь по порядку: сначала когда, потом что.",
        },
        {
          id: "slovar-vremeni",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "last", translation: "прошлый", example: "We were in Almaty last week.", hint: "/lɑːst/" },
            { term: "ago", translation: "назад", example: "She was here two days ago.", hint: "/əˈgəʊ/" },
            { term: "night", translation: "ночь", example: "It was cold last night.", hint: "/naɪt/" },
            { term: "week", translation: "неделя", example: "Last week I was on holiday.", hint: "/wiːk/" },
            { term: "month", translation: "месяц", example: "A month ago I was in a village.", hint: "/mʌnθ/" },
            { term: "year", translation: "год", example: "Last year I was at school.", hint: "/jɪə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-ago",
          kind: "gap",
          prompt: "Скажи о себе: последний раз на рынке — два дня назад. Допиши слово, которое ставят последним.",
          before: "I was at the market two days ",
          after: ".",
          answer: "ago",
          hint: "Оно идёт последним, после «два дня».",
          why: "I was at the market two days ago. Ago всегда стоит после того, сколько времени прошло, а не перед.",
        },
        {
          id: "z2-vybrat-oborot",
          kind: "choice",
          prompt: "Мы были в Алматы на прошлой неделе. Где нет ошибки?",
          options: [
            { text: "We were in Almaty the last week." },
            { text: "We were in Almaty last week.", correct: true },
            { text: "We are in Almaty last week." },
          ],
          hint: "Перед last артикля не бывает.",
          why:
            "We were in Almaty last week. Артикль the перед last не ставят, а в третьей " +
            "строке глагол стоит в настоящем времени, хотя речь о прошлой неделе.",
        },
        {
          id: "z3-otmetit-oborot",
          kind: "hottext",
          prompt: "Отметь записи, где оборот времени собран неверно.",
          parts: [
            { text: "last night", selectable: true },
            { text: " · " },
            { text: "ago three days", selectable: true, correct: true },
            { text: " · " },
            { text: "in 2019", selectable: true },
            { text: " · " },
            { text: "the last month", selectable: true, correct: true },
          ],
          hint: "Проверь порядок у ago и артикль у last.",
          why:
            "Неверны «ago three days» (нужно three days ago) и «the last month» " +
            "(артикль перед last не ставят).",
        },
        {
          id: "z4-sobrat-kogda",
          kind: "order",
          prompt: "Собери предложение: «Прошлой ночью было холодно.»",
          items: ["cold", "It", "last night", "was"],
          answer: [1, 3, 0, 2],
          hint: "О погоде говорят через it, оборот времени встаёт в конец.",
          why: "It was cold last night. Сначала о чём речь и форма глагола, потом прилагательное, потом время.",
        },
        {
          id: "z5-napisat-kogda",
          kind: "short",
          prompt: "Напиши о себе: неделю назад у тебя был отпуск. Отпуск — on holiday, неделя — a week.",
          answer: "I was on holiday a week ago.",
          accept: ["A week ago I was on holiday.", "I was on holiday a week ago"],
          hint: "Перед ago ставят то, сколько времени прошло.",
          why: "I was on holiday a week ago. Оборот можно поставить и в начало: A week ago I was on holiday.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-poezdke",
      title: "Читаем письмо о поездке",
      estimatedMinutes: 13,
      outcome: "понимать короткое письмо о том, как прошли дни",

      blocks: [
        {
          id: "zachem-chitat-pismo",
          kind: "explain",
          text: [
            "Отдельные предложения — это упражнение. В жизни то же самое читают в письме " +
              "от знакомого.",
            "Ниже письмо о поездке: в нём встречаются только was и were.",
            "Читай целиком, а потом отвечай на вопросы: они не о словах, а о том, что " +
              "произошло.",
          ],
        },
        {
          id: "pismo-o-poezdke",
          kind: "text",
          title: "Письмо от Айгуль",
          genre: "email",
          body: [
            "Hi Dana!",
            "Last week I was in Turkey with my sister. The hotel was cheap and " +
              "very quiet. The weather was hot every day, and the beach was great.",
            "On Friday we were at a big market in the city. The market was noisy, " +
              "but the food was delicious. My sister wasn't happy: the shops were " +
              "expensive.",
            "Two days ago we were at home again. I was tired, but it was a good trip.",
            "How was your week?",
            "Aigul",
          ],
          glossary: [
            { term: "with", translation: "с (кем-то)" },
            { term: "every day", translation: "каждый день" },
            { term: "again", translation: "снова, опять" },
            { term: "but", translation: "но" },
            { term: "happy", translation: "довольный, счастливый" },
            { term: "On Friday", translation: "в пятницу" },
          ],
        },
        {
          id: "kak-chitat-takoe-pismo",
          kind: "note",
          tone: "info",
          text:
            "В письме время названо трижды: last week, on Friday, two days ago.\n\nЕсли " +
            "потерять эти обороты, порядок событий рассыпается — читай их особенно " +
            "внимательно.",
        },

        // ---- задания ----
        {
          id: "z1-gde-byla-aigul",
          kind: "short",
          about: "pismo-o-poezdke",
          prompt: "Где Айгуль была на прошлой неделе? Ответь по-английски.",
          answer: "Turkey",
          accept: ["In Turkey", "in Turkey"],
          hint: "Смотри первую строку письма после приветствия.",
          why: "Last week I was in Turkey with my sister.",
        },
        {
          id: "z2-kakim-byl-otel",
          kind: "choice",
          about: "pismo-o-poezdke",
          prompt: "Каким был отель?",
          options: [
            { text: "Дорогим и шумным" },
            { text: "Дешёвым и тихим", correct: true },
            { text: "Дешёвым и шумным" },
          ],
          hint: "О самом отеле сказано одной строкой.",
          why:
            "The hotel was cheap and very quiet. Шумным был рынок, а не отель: The " +
            "market was noisy.",
        },
        {
          id: "z3-pochemu-sestra",
          kind: "choice",
          about: "pismo-o-poezdke",
          prompt: "Почему сестра была недовольна?",
          options: [
            { text: "Магазины были дорогие", correct: true },
            { text: "Еда была невкусная" },
            { text: "Погода была холодная" },
          ],
          hint: "Причина стоит сразу после двоеточия.",
          why:
            "My sister wasn't happy: the shops were expensive. Еда, наоборот, была " +
            "вкусная, а погода — жаркая.",
        },
        {
          id: "z4-kogda-vernulis",
          kind: "short",
          about: "pismo-o-poezdke",
          prompt: "Когда они вернулись домой? Ответь оборотом из письма по-английски.",
          answer: "two days ago",
          accept: ["Two days ago"],
          hint: "Оборот стоит в начале предпоследней части письма.",
          why: "Two days ago we were at home again.",
        },
        {
          id: "z5-otmetit-oboroty",
          kind: "hottext",
          about: "pismo-o-poezdke",
          prompt: "Отметь обороты времени, которые есть в письме.",
          parts: [
            { text: "last week", selectable: true, correct: true },
            { text: " · " },
            { text: "yesterday", selectable: true },
            { text: " · " },
            { text: "two days ago", selectable: true, correct: true },
            { text: " · " },
            { text: "last year", selectable: true },
          ],
          hint: "Проверь каждый оборот по письму.",
          why:
            "В письме стоят last week и two days ago. Слов yesterday и last year в " +
            "нём нет.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-dne",
      title: "Слушаем рассказ о дне",
      estimatedMinutes: 13,
      outcome: "слышать в записи, где человек был и каким это было",

      blocks: [
        {
          id: "zachem-slushat",
          kind: "explain",
          text: [
            "Прочитать was и услышать was — разные умения: в речи эту форму легко " +
              "пропустить.",
            "Ниже запись: человек рассказывает о вчерашнем дне.",
            "Слушай целиком, а потом отвечай. Расшифровка спрятана под кнопкой.",
            "Открой её после ответов: иначе выйдет чтение, а не слушание.",
          ],
        },
        {
          id: "zapis-o-vchera",
          kind: "audio",
          caption: "Рассказ о вчерашнем дне",
          pace: "slow",
          skryt: true,
          transcript:
            "Yesterday I was very busy. In the morning I was at work. At one o'clock " +
            "I was at a restaurant with my brother. The food was delicious, but the " +
            "restaurant was noisy. In the evening I was at home. I was tired, but the " +
            "film on TV was great.",
        },
        {
          id: "chto-slushat",
          kind: "note",
          tone: "info",
          text:
            "В записи трижды названо место: at work, at a restaurant, at home.\n\nСлушая, " +
            "держи в уме два вопроса: где человек был и что он об этом говорит.",
        },

        // ---- задания ----
        {
          id: "z1-gde-byl-utrom",
          kind: "choice",
          about: "zapis-o-vchera",
          prompt: "Послушай запись. Где человек был утром?",
          options: [
            { text: "Дома" },
            { text: "На работе", correct: true },
            { text: "В ресторане" },
          ],
          hint: "Утро названо в записи прямо.",
          why: "In the morning I was at work. Дома он был вечером, а в ресторане — в час дня.",
        },
        {
          id: "z2-s-kem-byl",
          kind: "short",
          about: "zapis-o-vchera",
          prompt: "С кем он был в ресторане? Ответь одним английским словом.",
          answer: "brother",
          accept: ["my brother", "My brother"],
          hint: "Слово стоит сразу после названия места.",
          why: "At one o'clock I was at a restaurant with my brother.",
        },
        {
          id: "z3-kakim-byl-restoran",
          kind: "choice",
          about: "zapis-o-vchera",
          prompt: "Что человек говорит о ресторане?",
          options: [
            { text: "Еда была вкусная, но было шумно", correct: true },
            { text: "Еда была невкусная, но было тихо" },
            { text: "Еда была дорогая, но было тихо" },
          ],
          hint: "В записи об этом две части, соединённые словом but.",
          why:
            "The food was delicious, but the restaurant was noisy. О цене в записи не " +
            "сказано ничего.",
        },
        {
          id: "z4-kakim-byl-den",
          kind: "short",
          about: "zapis-o-vchera",
          prompt: "Каким был день у человека? Ответь английским прилагательным из первой строки.",
          answer: "busy",
          accept: ["very busy"],
          hint: "Оно стоит в самом начале записи.",
          why: "Yesterday I was very busy.",
        },
        {
          id: "z5-otmetit-mesta",
          kind: "hottext",
          about: "zapis-o-vchera",
          prompt: "Отметь места, которые названы в записи.",
          parts: [
            { text: "work", selectable: true, correct: true },
            { text: " · " },
            { text: "school", selectable: true },
            { text: " · " },
            { text: "restaurant", selectable: true, correct: true },
            { text: " · " },
            { text: "home", selectable: true, correct: true },
            { text: " · " },
            { text: "market", selectable: true },
          ],
          hint: "Проверь каждое место по записи.",
          why: "В записи названы work, restaurant и home. Ни школы, ни рынка в ней нет.",
        },
        {
          // «Восстанови услышанное» — вид из раскладки видов заданий
          // (docs/vidy-zadaniy.md). Ученик не узнаёт готовое среди вариантов, а
          // достаёт фразу из памяти и собирает её сам. Запись своя, короткая:
          // собрать длинную строку на слух с первого раза нельзя.
          id: "z6-vosstanovit-uslyshannoe",
          kind: "order",
          zvuk: "I was at a restaurant with my brother.",
          prompt: "Послушай запись и собери из карточек то, что услышал.",
          items: ["with my brother", "I", "at a restaurant", "was"],
          answer: [1, 3, 2, 0],
          hint: "Начни с того, о ком речь, потом форма глагола.",
          why:
            "I was at a restaurant with my brother. Сначала о ком речь, потом форма " +
            "глагола, потом место, а с кем — последним.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от уроков и другими углами: перевести с
      // русского, исправить чужую запись, выбрать форму по числу людей, назвать
      // причину ошибки. Совпадений с заданиями уроков нет ни в одном разборе.

      // ---- итог 1: где ты был ----
      {
        id: "q-gde-byl-prichina",
        kind: "choice",
        outcome: "рассказывать, где прошёл вчерашний день: I was at home",
        prompt: "Почему запись «We was at the market» неверна?",
        options: [
          { text: "Рынок один, поэтому нужна форма were" },
          { text: "Речь о нескольких людях, поэтому нужна форма were", correct: true },
          { text: "После we форма глагола не ставится вовсе" },
        ],
        why:
          "We were at the market. Форму выбирают по тому, о ком речь, а не по " +
          "названию места: нас несколько — were.",
      },
      {
        id: "q-gde-byl-ispravit",
        kind: "short",
        outcome: "рассказывать, где прошёл вчерашний день: I was at home",
        prompt: "Исправь ошибку и запиши предложение целиком: «We was at the market.»",
        answer: "We were at the market.",
        accept: ["We were at the market"],
        why: "We were at the market. С we идёт were.",
      },
      // ---- итог 2: каким это было ----
      {
        id: "q-kakim-bylo-ispravit",
        kind: "short",
        outcome: "говорить, каким что-то было: The film was great",
        prompt: "Исправь ошибку и запиши целиком: «The lessons was boring.»",
        answer: "The lessons were boring.",
        accept: ["The lessons were boring"],
        why:
          "The lessons were boring. Уроков несколько, поэтому were. Само " +
          "прилагательное не меняется: boring и в единственном числе, и во " +
          "множественном.",
      },
      {
        id: "q-kakim-bylo-perevod",
        kind: "short",
        outcome: "говорить, каким что-то было: The film was great",
        prompt: "Напиши по-английски: «Погода была жаркая.» Погода — the weather.",
        answer: "The weather was hot.",
        accept: ["The weather was hot", "It was hot."],
        why: "The weather was hot. Можно и через it: It was hot.",
      },
      // ---- итог 3: чего не было ----
      {
        id: "q-otricanie-napisat",
        kind: "short",
        outcome: "говорить, где не был и каким что-то не было: I wasn't at work",
        prompt: "Напиши по-английски целиком: «Их не было дома.» Дом — home.",
        answer: "They weren't at home.",
        accept: ["They were not at home.", "They weren't at home", "They were not at home"],
        why: "They weren't at home. Про нескольких — форма weren\'t.",
      },
      {
        id: "q-otricanie-prichina",
        kind: "choice",
        outcome: "говорить, где не был и каким что-то не было: I wasn't at work",
        prompt: "Почему запись «I didn't be free» неверна?",
        options: [
          { text: "Потому что did нужен только в вопросе" },
          { text: "Потому что not должен стоять перед was" },
          { text: "У was есть своё отрицание — wasn't, и did для него не нужен", correct: true },
        ],
        why:
          "I wasn't free. Форма was отрицается сама: wasn't. И not в ней стоит " +
          "после формы, а не перед ней.",
      },
      // ---- итог 4: было ли ----
      {
        id: "q-vopros-napisat",
        kind: "short",
        outcome: "спрашивать, было ли: Were you at the party?",
        prompt: "Спроси, был ли концерт хорошим. Концерт — the concert, хороший — good.",
        answer: "Was the concert good?",
        accept: ["Was the concert good"],
        why: "Was the concert good? Форма глагола выходит вперёд — так получается вопрос.",
      },
      {
        id: "q-korotkiy-otvet",
        kind: "short",
        outcome: "спрашивать, было ли: Were you at the party?",
        prompt:
          "Тебя спросили: «Were you at the museum?» Тебя там не было. Ответь коротко, двумя словами после No.",
        answer: "No, I wasn't.",
        accept: ["No, I wasn't", "No I wasn't.", "No, I was not."],
        why: "No, I wasn't. В коротком ответе повторяется та же форма, что в вопросе.",
      },
      // ---- итог 5: где и как ----
      {
        id: "q-gde-i-kak-sprosit",
        kind: "short",
        outcome: "спрашивать о прошлом вопросительным словом: Where were you?",
        prompt: "Спроси у друга, каким был концерт. Концерт — the concert.",
        answer: "How was the concert?",
        accept: ["How was the concert"],
        why:
          "How was the concert? После вопросительного слова идёт форма глагола, и " +
          "только за ней — то, о чём речь.",
      },
      {
        id: "q-gde-i-kak-kto",
        kind: "short",
        outcome: "спрашивать о прошлом вопросительным словом: Where were you?",
        prompt: "Спроси, кто был на празднике. Праздник — the party.",
        answer: "Who was at the party?",
        accept: ["Who was at the party"],
        why:
          "Who was at the party? Слово who само и есть тот, о ком речь, поэтому за " +
          "ним сразу идёт was.",
      },
      // ---- итог 6: время прошлого ----
      {
        id: "q-vremya-ispravit",
        kind: "short",
        outcome: "называть время прошлого: yesterday, last week, two days ago",
        prompt: "Исправь ошибку и запиши целиком: «I was in Astana the last month.»",
        answer: "I was in Astana last month.",
        accept: ["I was in Astana last month"],
        why: "I was in Astana last month. Артикль the перед last не ставят.",
      },
      {
        id: "q-vremya-poryadok",
        kind: "short",
        outcome: "называть время прошлого: yesterday, last week, two days ago",
        prompt: "Исправь порядок и запиши целиком: «He was in a village ago three days.»",
        answer: "He was in a village three days ago.",
        accept: ["He was in a village three days ago"],
        why: "He was in a village three days ago. Сначала — сколько времени прошло, потом ago.",
      },
      // ---- итог 7: чтение ----
      {
        id: "q-chtenie-zapiska",
        kind: "choice",
        outcome: "понимать короткое письмо о том, как прошли дни",
        prompt:
          "Записка: «Last night I was at a concert. It was great, but the city was " +
          "very noisy. Two days ago I was at home with a book.» Где человек был позавчера?",
        options: [
          { text: "На концерте" },
          { text: "Дома", correct: true },
          { text: "В магазине" },
        ],
        why:
          "Two days ago I was at home with a book. Концерт был прошлой ночью — last " +
          "night.",
      },
      {
        id: "q-chtenie-oborot",
        kind: "short",
        outcome: "понимать короткое письмо о том, как прошли дни",
        prompt:
          "Та же записка: «Last night I was at a concert. It was great, but the city " +
          "was very noisy. Two days ago I was at home with a book.» Каким был концерт? " +
          "Ответь английским прилагательным.",
        answer: "great",
        accept: ["It was great.", "It was great"],
        why: "It was great. Слово noisy сказано о городе, а не о самом концерте.",
      },
      // ---- итог 8: слушание ----
      {
        id: "q-sluh-gde-byl",
        kind: "choice",
        outcome: "слышать в записи, где человек был и каким это было",
        zvuk: "Last week I was in a small village. The weather was cold, but the days were quiet.",
        prompt: "Послушай запись. Где человек был на прошлой неделе?",
        options: [
          { text: "В деревне", correct: true },
          { text: "В городе" },
          { text: "На море" },
        ],
        why: "Last week I was in a small village.",
      },
      {
        id: "q-sluh-kakoe-bylo",
        kind: "short",
        outcome: "слышать в записи, где человек был и каким это было",
        zvuk: "Yesterday I was at a big market. The market was noisy, and the food was expensive.",
        prompt: "Послушай запись. Каким был рынок? Ответь одним английским словом.",
        answer: "noisy",
        accept: ["It was noisy.", "It was noisy"],
        why: "The market was noisy. Дорогой была еда, а не сам рынок.",
      },
    ],
  },
};

export default module;
