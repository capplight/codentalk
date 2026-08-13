import type { Module } from "@/lib/content/types";

/**
 * Модуль 14 курса «Английский с нуля»: что я делаю.
 *
 * Программа: docs/programma-english-starter.md, модуль 14 — «рассказывать о
 * привычных делах»; грамматика: настоящее простое время, утверждение; привычки
 * и общие сведения.
 *
 * ЭТО ПЕРЕЛОМ КУРСА. Двенадцать модулей подряд предложение строилось на `be` и
 * `have got`: I am a student, I've got a car, There is a shop. Здесь впервые
 * появляется обычный глагол — и вместе с ним окончание -s в третьем лице,
 * которого в русском нет вовсе.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. Настоящее простое, утверждение — A1. English Grammar Profile, PRESENT
 *    present simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form with a
 *    limited range of regular and irregular verbs», пример источника — «Every
 *    day at college I learn new words and new things».
 *
 * 2. Привычки и общие сведения — тоже A1, отдельной строкой: «USE: HABITS AND
 *    GENERAL FACTS — Can use the present simple to talk about repeated events or
 *    habits, and general facts», пример источника — «I work in a supermarket».
 *    Это ровно то, что программа ставит модулю целью.
 *
 * 3. ОКОНЧАНИЕ -S В ТРЕТЬЕМ ЛИЦЕ отдельной строки в источнике НЕ ИМЕЕТ: оно
 *    входит в ту же строку «FORM: AFFIRMATIVE» и отдельной ступени не получает.
 *    Второе подтверждение — руководство Cambridge для младших ступеней, с. 52,
 *    список «что нового на A1 Movers»: «She never eats meat», «He plays
 *    badminton on Saturdays», «My brother reads more quickly than my sister» —
 *    третье лицо с -s на ступени A1.
 *
 * 4. Слова — Oxford 3000, все A1: work, live, study, like (глагол), want, know,
 *    go, come, read, write, speak, play, eat, drink, watch, listen, start,
 *    finish, help, make, get, open, close, breakfast, lunch, dinner, coffee,
 *    football, music, every.
 *
 *    ЛОВУШКА СЛОВНИКА, ЧУТЬ НЕ СТОИВШАЯ УРОКА: строка про `like` в PDF
 *    переносится, и поиск выдаёт «like v., n. B1». Целиком она читается так:
 *    «like (find sb/sth pleasant) v. A1, n. B1» — то есть ГЛАГОЛ на A1, а на B1
 *    только существительное. Проверять надо строку до конца.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ:
 *
 * — ОБОРОТ `get up`. English Grammar Profile, VERBS phrasal, **A2**, «FORM: NO
 *   OBJECT»: «Can use a limited range of phrasal verbs without an object»,
 *   пример источника — «I'm going to get up early on Saturday». Ниже A2
 *   фразовых глаголов в файле нет вовсе. Словник A2 Key, с. 11: «get up (phr v)
 *   • to get up in the morning». И программа отдаёт глаголы с предлогом модулю
 *   20 — здесь оборот взят на шесть модулей раньше.
 *
 *   ЗАЩИТА, которая всё-таки есть: руководство Cambridge для младших ступеней,
 *   с. 52, список «что нового на A1 Movers», строка «Must for obligation» —
 *   «Must I get up now?». То есть на A1 оборот в примерах присутствует.
 *
 *   Без него распорядок дня не начать: «встаю в семь» — первый шаг рассказа.
 *   Превышение нашёл методист, первая редакция шапки о нём молчала.
 *
 * — ГЛАГОЛ `know`. English Grammar Profile, PRESENT present simple, A2, «USE:
 *   MENTAL PROCESS VERBS»: «Can use the present simple with a limited range of
 *   mental process verbs including 'think', 'hope', 'know'». Первая редакция
 *   шапки объявляла его снятым и добавляла от себя оговорку «в значении
 *   мнения», которой в источнике нет. Опора, чтобы оставить: CEFR, с. 79, A1 —
 *   «Can ask and answer questions about themselves and other people, where they
 *   live, people they know, things they have».
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ:
 *
 * — отрицания с `don't` — модуль 15. По ступени оно тоже A1 («FORM: NEGATIVE»,
 *   пример «I don't like meat and fish»), но программа отдаёт его отдельному
 *   модулю, и здесь его нет ни разу;
 * — вопросов с `do` — модуль 16. Там их придётся объявить превышением: «FORM:
 *   QUESTIONS» стоит на A2;
 * — наречий частоты — модуль 17. Осторожно со ступенью: строка «FORM: WITH
 *   ADVERBS OF INDEFINITE FREQUENCY» стоит на A2, но сами `always` и
 *   `sometimes` — A1 (ADVERBS, «USE: FREQUENCY»), а на A2 только расширенный
 *   набор (usually, often, never). Здесь частота выражается оборотом `every
 *   day`, где `every` — A1;
 * — `like` + глагол с -ing («I like swimming»): по ступени вопросов нет —
 *   English Grammar Profile, VERBS patterns, A1, «FORM: 'LIKE' + 'TO'-INFINITIVE
 *   OR + '-ING'», пример источника «I like to work with my teacher». Настоящая
 *   причина другая: программа отдаёт оборот модулю 21. Первая редакция шапки
 *   называла ложное основание — будто он A2; нашёл методист. Здесь `like` идёт
 *   только с названием: I like music;
 * — глагола `have` о еде («have breakfast»): модуль 7 дал `have got` в значении
 *   обладания, а еда — другое употребление, словниками не описанное. Поэтому в
 *   уроках `eat breakfast`;
 * — настоящего длительного времени — модуль 18.
 *
 * ДВА СЛОВА ВВЕДЕНЫ СЛОВАРЁМ ПОЗЖЕ, ЧЕМ ВСТРЕТИЛИСЬ, и это намеренно:
 * — `speak` стоял в модуле 1 внутри готовой фразы `I speak English` — там урок
 *   был о заглавной букве, а не о глаголе;
 * — `live` стоял в модуле 13 внутри готового `I live in`, и врезка того модуля
 *   прямо обещала разбор здесь.
 * Оба показывает `npm run chain`; оба объяснены здесь.
 *
 * ОПОРА НА ПРЕДЫДУЩИЕ МОДУЛИ: время и предлоги времени — модуль 10; места —
 * модуль 12; окончание -es у существительных — модуль 8 (правило то же, и урок
 * 3 прямо на него ссылается); местоимения — модуль 2; `and` — модуль 1;
 * `there is` — модуль 13.
 *
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "chto-ya-delayu",
  title: "Что я делаю",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, PRESENT present simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with a limited range of regular and irregular verbs», пример источника — «Every " +
        "day at college I learn new words and new things». " +
        "A1, там же «USE: HABITS AND GENERAL FACTS»: «Can use the present simple to talk " +
        "about repeated events or habits, and general facts», пример источника — «I work " +
        "in a supermarket». " +
        "ОКОНЧАНИЕ -S В ТРЕТЬЕМ ЛИЦЕ: отдельной строки в источнике нет ни на одной " +
        "ступени, оно входит в «FORM: AFFIRMATIVE». Проверено сплошным разбором " +
        "подраздела present simple — двадцать четыре строки, из них на A1 четыре; " +
        "отдельной формы третьего лица среди них нет. Первая редакция этой записи " +
        "называла тринадцать строк — ошибка счёта, нашёл методист. " +
        "Дополнительная опора: A1, VERBS types, «FORM: MAIN VERBS» — «Can use regular " +
        "and irregular main verbs in simple verb phrases». " +
        "ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО, всё из того же подраздела: A2 «FORM: QUESTIONS», A2 " +
        "«FORM: WITH ADVERBS OF INDEFINITE FREQUENCY», A2 «USE: MENTAL PROCESS VERBS» " +
        "(think, hope, know в значении мнения). A1 «FORM: NEGATIVE» по ступени проходит, " +
        "но программа отдаёт отрицание модулю 15",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, грамматический список ступени Pre A1 Starters, строка «Present simple»: " +
        "«Nick is happy. I don't like eggs. Eat your lunch! Is that your sister? Yes, it " +
        "is» — время названо прямо на самой низкой ступени. " +
        "с. 29, тот же список Starters, строка «Adverbs»: «My grandma lives here. She lives " +
        "here too» — третье лицо с окончанием -s стоит на самой низкой описанной ступени. " +
        "Это второе подтверждение того, что окончание не требует отдельной ступени. " +
        "ОСТОРОЖНО: первая редакция ссылалась на с. 52 и приводила три примера, из " +
        "которых «When does school start?» окончания -s как раз НЕ содержит, а два других " +
        "стоят в строках про наречия и предлоги. Цитаты были настоящие, вывод " +
        "приставленный. Нашёл методист. " +
        "с. 52, список «что нового на A1 Movers», строка «Must for obligation»: «Must I " +
        "get up now?» — защита оборота get up, см. шапку. " +
        "ОСТОРОЖНО СО ССЫЛКОЙ: печатная нумерация и лист файла расходятся, список Starters " +
        "извлекается и с листа 11 — это оглавление с уменьшенной копией. Ссылаться надо на " +
        "печатную страницу",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 63, Sustained monologue: describing experience, A1: «Can describe themselves, " +
        "what they do and where they live» — «что человек делает» названо прямо. " +
        "Там же, A1: «Can describe simple aspects of their everyday life in a series of " +
        "simple sentences» — это дословно последний урок модуля, рассказ о дне " +
        "несколькими предложениями. " +
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves " +
        "and other people, where they live, people they know, things they have» — отсюда " +
        "же опора для глагола know. " +
        "ЧЕСТНАЯ ОГОВОРКА, БЕЗ КОТОРОЙ ССЫЛКА ОДНОСТОРОННЯЯ: на тех же страницах слова " +
        "«habits and routines» стоят в строках A2 — с. 63 «Can describe plans and " +
        "arrangements, habits and routines…» и с. 79 «Can ask and answer questions about " +
        "habits and routines». Модуль называется «привычные дела», и опорой ему служат " +
        "строки A1 выше, а не эти. Нашёл методист",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля, все с пометкой A1: work (v., n.), live1 (v.), study (n., v.), " +
        "want, know, go, come, read, write, speak, play (v., n.), eat, drink (n., v.), " +
        "watch (v., n.), start (v.), finish (v.), help (v., n.), get, open " +
        "(adj., v.), close1 (v.), breakfast, lunch, dinner, coffee, football, music, every " +
        "(det.). " +
        "СЛОВО like: строка в PDF переносится и обрывается на «like v., n. B1». Целиком: " +
        "«like (find sb/sth pleasant) v. A1, n. B1» — глагол A1, существительное B1. Берём " +
        "глагол. " +
        "ЛОВУШКИ ТОГО ЖЕ РЯДА, уже известные курсу: омонимы записаны с цифрой вплотную " +
        "(live1, close1), и поиск по слову с пробелом их не находит",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e вместо ɛ (help — /help/, every — /ˈevri/), конечный безударный " +
        "через ə вместо ɐ (dinner — /ˈdɪnə/), r вместо ɹ. " +
        "ДВА СЛОВА С ДВУМЯ ЧТЕНИЯМИ: wikipron на `live` даёт и /laɪv/ (прилагательное " +
        "«живой»), и /lɪv/ — глагол; на `close` три записи, среди них /kləʊs/ " +
        "(прилагательное «близкий») и /kləʊz/ — глагол. Взяты глагольные: /lɪv/ и " +
        "/kləʊz/. В ipa-en-uk.txt обоих слов нет вовсе — проверено. Первая редакция этой " +
        "записи утверждала, что источник даёт только чужую часть речи; это неверно, " +
        "нашёл методист",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить, что делаешь: I work, I live in Astana",
    "прибавлять -s, когда речь об одном: he works, the shop opens",
    "прибавлять -es там, где одной s мало: goes, watches, studies",
    "рассказывать распорядок дня со временем: I get up at seven",
    "говорить, что нравится: I like music",
    "говорить о том, что верно всегда: The shop opens at nine",
    "рассказывать о нескольких людях: we work, they live",
    "рассказывать о своём дне четырьмя предложениями",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ya-delayu",
      title: "Я делаю: I work",
      estimatedMinutes: 14,
      outcome: "говорить, что делаешь: I work, I live in Astana",

      blocks: [
        {
          id: "zachem-prostoe",
          kind: "explain",
          text: [
            "Знакомый спрашивает, чем ты занимаешься. Сказать I'm a doctor ты умеешь с " +
              "модуля «Рассказ о себе». А сказать «я работаю в больнице» ещё нечем.",
            "Для этого нужен обычный глагол: I work in a hospital. Слово work значит " +
              "«работать», и ставят его сразу после того, кто действует.",
            "До сих пор действие в предложении называла форма be — am, is, are. Форма be — " +
              "это тоже глагол.",
            "Теперь на её месте может стоять любое действие: work, live, study.",
          ],
        },
        {
          id: "tablica-glagolov",
          kind: "table",
          caption: "Пять дел",
          head: ["Английский", "Перевод", "Как читается"],
          rows: [
            ["I work.", "Я работаю.", "/wɜːk/"],
            ["I live in Astana.", "Я живу в Астане.", "/lɪv/"],
            ["I study English.", "Я учу английский.", "/ˈstʌdi/"],
            ["I read books.", "Я читаю книги.", "/riːd/"],
            ["I play football.", "Я играю в футбол.", "/pleɪ/"],
          ],
        },
        {
          id: "be-ili-glagol",
          kind: "note",
          tone: "mistake",
          text:
            "Форма be и действие вместе не идут.\n\n«I am work» сказать нельзя, хотя рука " +
            "тянется: до сих пор после I всегда стояло am.\n\nЛибо am и название — I am a " +
            "doctor.\n\nЛибо действие — I work. Вместе am и work не ставят.",
        },
        {
          id: "poryadok-s-glagolom",
          kind: "explain",
          text: [
            "Порядок тот же, что и раньше: сначала тот, кто действует, потом само действие, " +
              "потом остальное.",
            "I | work | in a hospital.",
            "Это тот самый порядок «кто — глагол — остальное» из модуля «Рассказ о себе». " +
              "Изменился только глагол.",
          ],
        },
        {
          id: "primer-o-sebe",
          kind: "example",
          caption: "Разговор о делах",
          text:
            "— Are you a student?\n— No, I'm not. I work in a shop.\n— And your English?\n" +
            "— I study English every day.",
          explain:
            "Во второй строке два предложения рядом: одно с формой be, другое с обычным " +
              "глаголом. " +
              "Оборот every day значит «каждый день» и стоит в конце.",
        },
        {
          id: "zapis-glagolov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пять дел",
          transcript:
            "I work. I live in Astana. I study English. I read books. I play football.",
        },
        {
          id: "slovar-glagolov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "work", translation: "работать", example: "I work in a shop.", hint: "/wɜːk/" },
            { term: "live", translation: "жить", example: "I live in Astana.", hint: "/lɪv/" },
            { term: "study", translation: "учить, учиться", example: "I study English.", hint: "/ˈstʌdi/" },
            { term: "read", translation: "читать", example: "I read books.", hint: "/riːd/" },
            { term: "play", translation: "играть", example: "I play football.", hint: "/pleɪ/" },
            { term: "every day", translation: "каждый день", example: "I study every day.", hint: "/ˈevri deɪ/" },
            { term: "football", translation: "футбол", example: "I play football.", hint: "/ˈfʊtbɔːl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-glagol",
          kind: "gap",
          prompt: "Ты живёшь в Астане. Допиши глагол.",
          before: "I ",
          after: " in Astana.",
          answer: "live",
          hint: "Слово есть в таблице урока, во второй строке.",
          why: "I live in Astana. После I сразу идёт действие, без формы be.",
        },
        {
          id: "z2-be-ili-glagol",
          kind: "choice",
          prompt: "Ты работаешь в магазине. Как сказать?",
          options: [
            { text: "I works in a shop." },
            { text: "I work in a shop.", correct: true },
            { text: "I am a work in a shop." },
          ],
          hint: "Форма be и действие вместе не идут.",
          why:
            "I work in a shop. Форма am нужна перед названием — I am a doctor, — а перед " +
            "действием её нет.",
        },
        {
          id: "z3-sopostavit-glagoly",
          kind: "match",
          prompt: "Сопоставь глагол и перевод.",
          left: ["study", "read", "play"],
          right: ["читать", "играть", "учить"],
          answer: [2, 0, 1],
          hint: "Сверься с таблицей урока.",
          why: "Study — учить, read — читать, play — играть.",
        },
        {
          id: "z4-otmetit-dva-glagola",
          kind: "hottext",
          prompt: "Отметь записи, где два глагола стоят подряд.",
          parts: [
            { text: "I work in a hospital.", selectable: true },
            { text: " · " },
            { text: "I am work in a hospital.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am live in Astana.", selectable: true, correct: true },
            { text: " · " },
            { text: "I live in Astana.", selectable: true },
          ],
          hint: "Ищи am рядом с действием.",
          why:
            "Лишняя форма am во второй и третьей записях. Верно: I work in a hospital, " +
            "I live in Astana.",
        },
        {
          id: "z5-sobrat-o-sebe",
          kind: "order",
          prompt: "Собери предложение: «Я учу английский каждый день».",
          items: ["every day", "English", "I study"],
          answer: [2, 1, 0],
          hint: "Оборот «каждый день» идёт в самом конце.",
          why: "I study English every day.",
        },
        {
          id: "z6-napisat-o-rabote",
          kind: "short",
          prompt: "Ты работаешь в больнице. Запиши предложение целиком, начни с I.",
          answer: "I work in a hospital.",
          exact: true,
          accept: ["I work in a hospital"],
          hint: "Больницу называют впервые, значит перед ней стоит a.",
          why: "I work in a hospital. Сначала I, потом действие, потом место.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-delaet-s",
      title: "Он делает: окончание -s",
      estimatedMinutes: 14,
      outcome: "прибавлять -s, когда речь об одном: he works, the shop opens",

      blocks: [
        {
          id: "zachem-okonchanie-s",
          kind: "explain",
          text: [
            "Ты рассказываешь не о себе, а о брате: он работает в магазине. По-русски " +
              "меняется окончание глагола — «работаю», «работает».",
            "По-английски тоже меняется, но иначе и только в одном случае: к глаголу " +
              "прибавляют -s. He works in a shop.",
            "Прибавляют его, когда речь об одном человеке или предмете — о нём, о ней, об " +
              "этом. То есть после he, she, it.",
          ],
        },
        {
          id: "tablica-s",
          kind: "table",
          caption: "Я и он",
          head: ["Я", "Он или она", "Перевод второго столбца"],
          rows: [
            ["I work.", "He works.", "Он работает."],
            ["I live in Astana.", "She lives in Astana.", "Она живёт в Астане."],
            ["I read books.", "He reads books.", "Он читает книги."],
            ["I play football.", "She plays football.", "Она играет в футбол."],
          ],
        },
        {
          id: "tolko-tretye-lico",
          kind: "note",
          tone: "info",
          text:
            "Окончание -s достаётся только he, she и it. После I, you, we и they глагол " +
            "стоит как в словаре: I work, you work, we work, they work.\n\nВ русском " +
            "окончание меняется у каждого лица, в английском — у одного.",
        },
        {
          id: "s-ne-mnozhestvennoe",
          kind: "note",
          tone: "info",
          text:
            "Это то же окончание -s, что у названий предметов в модуле «Один и много». " +
            "Только значит оно противоположное.\n\nУ названия предмета -s значит «их " +
            "много»: books — книги.\n\nУ глагола -s значит «он один»: he works — работает " +
            "один человек.",
        },
        {
          id: "primer-o-brate",
          kind: "example",
          caption: "Рассказ о брате",
          text:
            "This is my brother. He lives in Almaty.\nHe works in a hospital.\n" +
            "He plays football every day.",
          explain:
            "Три предложения об одном человеке, и в каждом у глагола стоит -s. Первое " +
            "предложение — с формой be, потому что в нём называют, кто это.",
        },
        {
          id: "zapis-s",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары",
          transcript:
            "I work. He works. I live. She lives. I read. He reads. I play. She plays.",
        },
        {
          id: "slovar-s",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "works", translation: "работает", example: "He works in a shop.", hint: "/wɜːks/" },
            { term: "lives", translation: "живёт", example: "She lives in Astana.", hint: "/lɪvz/" },
            { term: "write", translation: "писать", example: "I write my name.", hint: "/raɪt/" },
            { term: "speak", translation: "говорить", example: "She speaks English.", hint: "/spiːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-s",
          kind: "gap",
          prompt: "Брат работает в больнице. Допиши глагол вместе с окончанием.",
          before: "He ",
          after: " in a hospital.",
          answer: "works",
          hint: "Речь об одном человеке, значит окончание нужно.",
          why: "He works in a hospital. После he глагол берёт -s.",
        },
        {
          id: "z2-kto-beryot-s",
          kind: "choice",
          prompt: "После какого слова глагол берёт окончание -s?",
          options: [
            { text: "we" },
            { text: "they" },
            { text: "she", correct: true },
          ],
          hint: "Окончание достаётся тому, кто один.",
          why: "После she. Слова we и they говорят о нескольких, и окончания там нет.",
        },
        {
          id: "z3-otmetit-lishnee-s",
          kind: "hottext",
          prompt: "Отметь записи, где окончание -s лишнее.",
          parts: [
            { text: "He reads books.", selectable: true },
            { text: " · " },
            { text: "They works in a shop.", selectable: true, correct: true },
            { text: " · " },
            { text: "We lives in Astana.", selectable: true, correct: true },
            { text: " · " },
            { text: "She plays football.", selectable: true },
          ],
          hint: "Смотри на первое слово каждой записи.",
          why:
            "They и we говорят о нескольких — глагол там без окончания: they work, we " +
            "live.",
        },
        {
          id: "z4-perestroit-na-nego",
          kind: "short",
          prompt: "Скажи то же самое о сестре: «I speak Kazakh.» Начни с She.",
          answer: "She speaks Kazakh.",
          exact: true,
          accept: ["She speaks Kazakh"],
          hint: "Меняется первое слово и окончание глагола.",
          why: "She speaks Kazakh. После she у глагола появляется -s.",
        },
        {
          id: "z5-sobrat-o-neyo",
          kind: "order",
          prompt: "Собери предложение: «Она живёт в Алматы».",
          items: ["in Almaty", "She", "lives"],
          answer: [1, 2, 0],
          hint: "Сначала тот, о ком речь, потом действие.",
          why: "She lives in Almaty.",
        },
        {
          id: "z6-napisat-o-brate",
          kind: "short",
          prompt: "Брат читает книги каждый день. Запиши предложение целиком, начни с He.",
          answer: "He reads books every day.",
          exact: true,
          accept: ["He reads books every day"],
          hint: "Окончание нужно только глаголу, а слово books и так стоит во множественном числе.",
          why: "He reads books every day. У глагола -s, потому что речь об одном человеке.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "okonchanie-es",
      title: "Когда одной s мало: goes, watches",
      estimatedMinutes: 14,
      outcome: "прибавлять -es там, где одной s мало: goes, watches, studies",

      blocks: [
        {
          id: "zachem-es-u-glagola",
          kind: "explain",
          text: [
            "Брат ходит на работу — значит нужна s: he gos? Так не пишут и не читают.",
            "Вместо одной s прибавляют -es: he goes. То же самое со словом watch — " +
              "«смотреть»: he watches.",
            "Правило то же, что у названий предметов в модуле «Один и много»: где одной s " +
              "мало, ставят -es.",
          ],
        },
        {
          id: "tablica-es",
          kind: "table",
          caption: "Где нужно -es",
          head: ["Глагол", "Он или она", "Как читается"],
          rows: [
            ["go", "he goes", "/ɡəʊz/"],
            ["watch", "she watches", "/ˈwɒtʃɪz/"],
            ["finish", "he finishes", "/ˈfɪnɪʃɪz/"],
            ["work", "he works", "/wɜːks/"],
          ],
        },
        {
          id: "kogda-es",
          kind: "explain",
          text: [
            "Смотри на последний звук глагола. Если он сам похож на s — «с», «з», «ш», «ч» — " +
              "прибавляют -es: watches, finishes, closes.",
            "Слово go — особый случай: оно кончается на гласный, и к нему тоже прибавляют " +
              "-es.",
            "Всем остальным хватает одной s: works, reads, lives, plays.",
          ],
        },
        {
          id: "es-zvuchit-otdelno",
          kind: "note",
          tone: "info",
          text:
            "Окончание -es добавляет слову слог. Watch произносят в один слог, watches — в " +
            "два: /ˈwɒtʃɪz/.\n\nПоэтому его и ставят: без гласного звуки «ч» и «с» подряд " +
            "не выговорить.\n\nУ go иначе: goes звучит в один слог, /ɡəʊz/, и лишняя буква " +
            "нужна только на письме.\n\nСамо окончание читается то «с», то «з»: works — " +
            "/wɜːks/, lives — /lɪvz/. Выбирать не приходится, оно подстраивается само.",
        },
        {
          // Долг, висевший с модуля 8: там сказано «на конце меняется и сама
          // буква y… это правило разбирается позже», без адреса. Адрес теперь
          // здесь, и в модуле 8 стоит ссылка.
          id: "y-menyaetsya-na-i",
          kind: "explain",
          text: [
            "Есть третий случай. Если глагол кончается на y, к которому не примыкает " +
              "гласный, буква y меняется на i: study — he studies.",
            "Так же ведут себя названия предметов из модуля «Один и много»: city — cities.",
            "А если перед y стоит гласный, ничего не меняется: play — he plays.",
          ],
        },
        {
          id: "primer-es",
          kind: "example",
          caption: "День брата",
          text:
            "My brother goes to work at eight.\nHe finishes at five.\n" +
            "He watches football in the evening.",
          explain:
            "Три глагола с окончанием es. Время названо предлогом at, а часть суток — " +
            "оборотом in the evening из модуля «Дни, даты, время».",
        },
        {
          id: "zapis-es",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай окончания",
          transcript:
            "He goes. She watches. He finishes. He works. He reads.",
        },
        {
          id: "slovar-es",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "go", translation: "идти, ходить, ездить", example: "I go to work.", hint: "/ɡəʊ/" },
            { term: "goes", translation: "ходит, ездит", example: "He goes to work.", hint: "/ɡəʊz/" },
            { term: "watch", translation: "смотреть", example: "I watch football.", hint: "/wɒtʃ/" },
            { term: "finish", translation: "заканчивать", example: "I finish at five.", hint: "/ˈfɪnɪʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-s-ili-es",
          kind: "choice",
          prompt: "Сестра смотрит футбол. Какую запись выбрать?",
          options: [
            { text: "She watchs football." },
            { text: "She watches football.", correct: true },
            { text: "She watch football." },
          ],
          hint: "Последний звук слова watch сам похож на s.",
          why: "She watches football. После звука «ч» прибавляют es.",
        },
        {
          id: "z2-dopisat-goes",
          kind: "gap",
          prompt: "Брат ходит на работу. Допиши глагол вместе с окончанием.",
          before: "He ",
          after: " to work.",
          answer: "goes",
          hint: "Глаголу go нужно -es, а не одна s.",
          why: "He goes to work. К go прибавляют es, а не одну s.",
        },
        {
          id: "z3-otmetit-okonchaniya",
          kind: "hottext",
          prompt: "Отметь записи, где окончание выбрано неверно.",
          parts: [
            { text: "He goes to work.", selectable: true },
            { text: " · " },
            { text: "She watchs football.", selectable: true, correct: true },
            { text: " · " },
            { text: "He finishs at five.", selectable: true, correct: true },
            { text: " · " },
            { text: "She reads books.", selectable: true },
          ],
          hint: "Проверь последний звук каждого глагола.",
          why:
            "Ошибки во второй и третьей записях: watchs и finishs. После «ч» и «ш» нужно -es: " +
            "she watches, he finishes.",
        },
        {
          id: "z4-sopostavit-okonchaniya",
          kind: "match",
          prompt: "Сопоставь глагол и его форму для he.",
          left: ["go", "work", "watch"],
          right: ["works", "watches", "goes"],
          answer: [2, 0, 1],
          hint: "Двум глаголам из трёх нужна es.",
          why: "Go — goes, work — works, watch — watches.",
        },
        {
          id: "z5-studies",
          kind: "gap",
          prompt: "Брат учит английский. Допиши глагол вместе с окончанием.",
          before: "He ",
          after: " English.",
          answer: "studies",
          hint: "Перед буквой y стоит согласный, значит y меняется.",
          why: "He studies English. Буква y уступила место i, и дальше идёт -es.",
        },
        {
          id: "z6-napisat-s-es",
          kind: "short",
          prompt: "Сестра заканчивает в пять. Запиши предложение целиком, начни с She.",
          answer: "She finishes at five.",
          exact: true,
          accept: ["She finishes at five"],
          hint: "Слово finish кончается на звук «ш».",
          why: "She finishes at five. После «ш» прибавляют es.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "moy-den",
      title: "Мой день по часам",
      estimatedMinutes: 13,
      outcome: "рассказывать распорядок дня со временем: I get up at seven",

      blocks: [
        {
          id: "zachem-den",
          kind: "explain",
          text: [
            "Тебя спрашивают, во сколько ты встаёшь. Время называть ты умеешь с модуля «Дни, " +
              "даты, время», а самого действия до сих пор не было.",
            "Теперь оно есть: I get up at seven. Оборот get up значит «вставать», и берут " +
              "его целиком, двумя словами.",
          ],
        },
        {
          id: "tablica-dnya",
          kind: "table",
          caption: "День по часам",
          head: ["Время", "Английский", "Перевод"],
          rows: [
            ["7:00", "I get up at seven.", "Я встаю в семь."],
            ["8:00", "I eat breakfast at eight.", "Я завтракаю в восемь."],
            ["9:00", "I start work at nine.", "Я начинаю работу в девять."],
            ["18:00", "I finish at six.", "Я заканчиваю в шесть."],
            ["20:00", "I watch football in the evening.", "Вечером я смотрю футбол."],
            ["7:00", "He gets up at seven.", "Он встаёт в семь."],
          ],
        },
        {
          id: "at-pered-chasom",
          kind: "note",
          tone: "info",
          text:
            "Перед точным временем стоит at — то же правило, что в модуле «Дни, даты, " +
            "время»: at seven, at eight.\n\nА перед частью суток — in: in the morning, in " +
            "the evening.",
        },
        {
          id: "get-up-celikom",
          kind: "note",
          tone: "mistake",
          text:
            "Get up берут двумя словами сразу.\n\nБез up глагол get говорит не о подъёме с " +
            "постели, а о том, что человек что-то получает.\n\nСлово up — часть самого " +
            "действия, и оно идёт вместе с get.\n\nОкончание -s достаётся первому слову: " +
            "He gets up at seven.",
        },
        {
          id: "primer-dnya",
          kind: "example",
          caption: "Обычный день",
          text:
            "I get up at seven.\nI go to work at eight.\nI eat lunch at one.\n" +
            "I read in the evening.",
          explain:
            "Четыре предложения по порядку часов. В каждом сначала действие, потом время: " +
            "время в таких предложениях идёт в конец.",
        },
        {
          id: "zapis-dnya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай распорядок",
          transcript:
            "I get up at seven. I go to work at eight. I eat lunch at one. I read in the " +
            "evening.",
        },
        {
          id: "slovar-dnya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "get up", translation: "вставать", example: "I get up at seven.", hint: "/ˌɡet ˈʌp/" },
            { term: "eat", translation: "есть", example: "I eat breakfast.", hint: "/iːt/" },
            { term: "breakfast", translation: "завтрак", example: "I eat breakfast at eight.", hint: "/ˈbrekfəst/" },
            { term: "lunch", translation: "обед", example: "I eat lunch at one.", hint: "/lʌntʃ/" },
            { term: "dinner", translation: "ужин", example: "I eat dinner at seven.", hint: "/ˈdɪnə/" },
            { term: "start", translation: "начинать", example: "I start work at nine.", hint: "/stɑːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-vremya",
          kind: "gap",
          prompt: "Ты встаёшь в семь. Допиши предлог перед временем.",
          before: "I get up ",
          after: " seven.",
          answer: "at",
          hint: "Перед точным временем стоит тот же предлог, что и в модуле «Дни, даты, время».",
          why: "I get up at seven. Перед часом ставят at.",
        },
        {
          id: "z2-poryadok-dnya",
          kind: "order",
          prompt: "Расставь предложения по порядку дня.",
          items: [
            "I eat lunch at one.",
            "I get up at seven.",
            "I go to work at eight.",
          ],
          answer: [1, 2, 0],
          hint: "Смотри на часы в каждом предложении.",
          why: "Семь, восемь, час: I get up at seven. I go to work at eight. I eat lunch at one.",
        },
        {
          id: "z3-otmetit-get-up",
          kind: "hottext",
          prompt: "Отметь записи, где потеряно слово up.",
          parts: [
            { text: "I get up at seven.", selectable: true },
            { text: " · " },
            { text: "I get at seven.", selectable: true, correct: true },
            { text: " · " },
            { text: "She gets at eight.", selectable: true, correct: true },
            { text: " · " },
            { text: "She gets up at eight.", selectable: true },
          ],
          hint: "Действие «вставать» состоит из двух слов.",
          why:
            "Во второй и третьей записях осталось одно get, а нужно get up и gets up.",
        },
        {
          id: "z4-napisat-zavtrak",
          kind: "short",
          prompt: "Ты завтракаешь в восемь. Запиши предложение целиком, начни с I.",
          answer: "I eat breakfast at eight.",
          exact: true,
          accept: ["I eat breakfast at eight"],
          hint: "Время идёт в конец, и перед ним стоит at.",
          why: "I eat breakfast at eight.",
        },
        {
          id: "z5-o-brate-den",
          kind: "short",
          prompt: "Брат встаёт в шесть. Запиши предложение целиком, начни с He.",
          answer: "He gets up at six.",
          exact: true,
          accept: ["He gets up at six"],
          hint: "Речь об одном человеке — значит у глагола появляется окончание.",
          why: "He gets up at six. Окончание -s достаётся первому слову оборота: gets up.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-lyublyu",
      title: "Что я люблю: like",
      estimatedMinutes: 12,
      outcome: "говорить, что нравится: I like music",

      blocks: [
        {
          id: "zachem-like",
          kind: "explain",
          text: [
            "В модуле «Какой он» любимый цвет называют так: My favourite colour is blue. Этой " +
              "фразой называют один любимый цвет, а сказать «я люблю музыку» ею не выйдет.",
            "Для этого есть глагол like: I like music — «я люблю музыку». По смыслу это то же, " +
              "что «мне нравится музыка».",
            "После like идёт название того, что нравится, без всякого предлога: I like " +
              "football, I like coffee.",
          ],
        },
        {
          id: "tablica-like",
          kind: "table",
          caption: "Что кому нравится",
          head: ["Английский", "Перевод"],
          rows: [
            ["I like music.", "Я люблю музыку."],
            ["I like football.", "Я люблю футбол."],
            ["She likes coffee.", "Она любит кофе."],
            ["He likes books.", "Он любит книги."],
          ],
        },
        {
          id: "like-bez-predloga",
          kind: "note",
          tone: "mistake",
          text:
            "После like предлога нет.\n\nПо-русски говорят «нравится кому», и рука тянется " +
            "поставить лишнее слово. По-английски же like сразу берёт название: I like " +
            "music, а не «I like to music».",
        },
        {
          id: "like-i-okonchanie",
          kind: "note",
          tone: "info",
          text:
            "Глагол like меняется как остальные глаголы: I like, you like, we like — без " +
            "окончания; " +
            "he likes, she likes — с -s.",
        },
        {
          id: "primer-like",
          kind: "example",
          caption: "Разговор о том, что нравится",
          text:
            "— I like football. And you?\n— I like music.\n— My brother likes football too.",
          explain:
            "В третьей строке речь о брате — одном человеке, поэтому likes с окончанием. " +
            "Слово too значит «тоже» и стоит в конце.",
        },
        {
          id: "zapis-like",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай, что кому нравится",
          transcript:
            "I like music. I like football. She likes coffee. He likes books.",
        },
        {
          id: "slovar-like",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "like", translation: "любить, нравиться", example: "I like music.", hint: "/laɪk/" },
            { term: "music", translation: "музыка", example: "I like music.", hint: "/ˈmjuːzɪk/" },
            { term: "coffee", translation: "кофе", example: "She likes coffee.", hint: "/ˈkɒfi/" },
            { term: "drink", translation: "пить", example: "I drink coffee.", hint: "/drɪŋk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-like",
          kind: "gap",
          prompt: "Ты любишь музыку. Допиши глагол.",
          before: "I ",
          after: " music.",
          answer: "like",
          hint: "Слово стоит в первой строке таблицы.",
          why: "I like music. После like название идёт сразу, без предлога.",
        },
        {
          id: "z2-lishniy-predlog",
          kind: "choice",
          prompt: "Ты любишь футбол. Как сказать?",
          options: [
            { text: "I like to football." },
            { text: "I like football.", correct: true },
            { text: "I am like football." },
          ],
          hint: "После like предлога нет, и форма am не нужна.",
          why: "I like football. Like — обычный глагол и берёт название сразу.",
        },
        {
          id: "z3-likes-o-nyom",
          kind: "gap",
          prompt: "Сестра любит кофе. Допиши глагол вместе с окончанием.",
          before: "She ",
          after: " coffee.",
          answer: "likes",
          hint: "Речь об одном человеке.",
          why: "She likes coffee. После she у глагола появляется -s.",
        },
        {
          id: "z4-otmetit-like",
          kind: "hottext",
          prompt: "Отметь записи с лишним словом.",
          parts: [
            { text: "I like coffee.", selectable: true },
            { text: " · " },
            { text: "I like to music.", selectable: true, correct: true },
            { text: " · " },
            { text: "He likes books.", selectable: true },
            { text: " · " },
            { text: "He is likes football.", selectable: true, correct: true },
          ],
          hint: "Лишними бывают предлог и форма be.",
          why:
            "Во второй записи лишний предлог to, в четвёртой — форма is. Верно: I like " +
            "music, He likes football.",
        },
        {
          id: "z5-napisat-like",
          kind: "short",
          prompt: "Брат любит книги. Запиши предложение целиком, начни с He.",
          answer: "He likes books.",
          exact: true,
          accept: ["He likes books"],
          hint: "Окончание нужно глаголу, а слово books и так стоит во множественном числе.",
          why: "He likes books.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "tak-byvaet-vsegda",
      title: "Так бывает всегда",
      estimatedMinutes: 12,
      outcome: "говорить о том, что верно всегда: The shop opens at nine",

      blocks: [
        {
          id: "zachem-obshchee",
          kind: "explain",
          text: [
            "На двери магазина написано: 9:00–21:00. Ты хочешь сказать знакомому, во сколько " +
              "магазин открывается — не сегодня, а вообще, всегда.",
            "Для этого берут тот же глагол с -s: The shop opens at nine.",
            "Так говорят не только о своих делах, но и о том, что верно всегда.",
            "Когда магазин открыт, когда идёт автобус, когда начинается школа.",
          ],
        },
        {
          id: "tablica-obshchego",
          kind: "table",
          caption: "То, что верно всегда",
          head: ["Английский", "Перевод"],
          rows: [
            ["The shop opens at nine.", "Магазин открывается в девять."],
            ["The shop closes at nine in the evening.", "Магазин закрывается в девять вечера."],
            ["The bus goes to the station.", "Автобус идёт до станции."],
            ["School starts in September.", "Школа начинается в сентябре."],
          ],
        },
        {
          id: "predmet-tozhe-beryot-s",
          kind: "note",
          tone: "info",
          text:
            "Магазин и автобус — не люди, но каждый из них один. Значит глагол берёт -s: " +
            "the shop opens, the bus goes.\n\nПравило то же, что после he и she: если " +
            "предмет один, у глагола есть окончание.",
        },
        {
          id: "close-zvonkiy",
          kind: "note",
          tone: "info",
          text:
            "Слово close пишется одинаково, а читается по-разному.\n\nГлагол «закрывать» " +
            "кончается на «з»: /kləʊz/.\n\nПрилагательное «близкий» кончается на «с»: " +
            "/kləʊs/. Здесь везде глагол, так что читай через «з».",
        },
        {
          id: "primer-obshchego",
          kind: "example",
          caption: "Расписание",
          text:
            "The shop opens at nine.\nThe bus goes to the station every day.\n" +
            "My brother works there.",
          explain:
            "Первые два предложения — о том, что верно всегда. Третье о человеке, и глагол " +
            "в нём устроен так же: works с окончанием.",
        },
        {
          id: "zapis-obshchego",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай расписание",
          transcript:
            "The shop opens at nine. The shop closes at nine in the evening. The bus goes " +
            "to the station.",
        },
        {
          id: "slovar-obshchego",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "open", translation: "открываться, открывать", example: "The shop opens at nine.", hint: "/ˈəʊpən/" },
            { term: "close", translation: "закрываться, закрывать", example: "The shop closes at nine.", hint: "/kləʊz/" },
            { term: "come", translation: "приходить", example: "The bus comes at eight.", hint: "/kʌm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-opens",
          kind: "gap",
          prompt: "Магазин открывается в девять. Допиши глагол вместе с окончанием.",
          before: "The shop ",
          after: " at nine.",
          answer: "opens",
          hint: "Магазин один, значит окончание нужно.",
          why: "The shop opens at nine. Предмет в единственном числе берёт -s так же, как he.",
        },
        {
          id: "z2-avtobus-idyot",
          kind: "choice",
          prompt: "Автобус идёт до станции. Какую запись выбрать?",
          options: [
            { text: "The bus go to the station." },
            { text: "The bus goes to the station.", correct: true },
            { text: "The bus going to the station." },
          ],
          hint: "Автобус один, а глагол go требует es.",
          why: "The bus goes to the station.",
        },
        {
          id: "z3-otmetit-obshchee",
          kind: "hottext",
          prompt: "Отметь записи, где у глагола потеряно окончание.",
          parts: [
            { text: "The shop open at nine.", selectable: true, correct: true },
            { text: " · " },
            { text: "The shop closes at nine.", selectable: true },
            { text: " · " },
            { text: "The bus come at eight.", selectable: true, correct: true },
            { text: " · " },
            { text: "School starts in September.", selectable: true },
          ],
          hint: "Смотри, о скольких предметах идёт речь.",
          why:
            "Окончание потеряно в первой и третьей записях. Магазин один и автобус один, " +
            "значит нужно The shop opens и The bus comes.",
        },
        {
          id: "z4-napisat-zakryvaetsya",
          kind: "short",
          prompt: "Магазин закрывается в девять вечера. Запиши предложение целиком, начни с The shop.",
          answer: "The shop closes at nine in the evening.",
          exact: true,
          accept: ["The shop closes at nine in the evening"],
          hint: "Сначала время по часам, потом часть суток.",
          why: "The shop closes at nine in the evening.",
        },
        {
          id: "z5-sobrat-obshchee",
          kind: "order",
          prompt: "Собери предложение: «Школа начинается в сентябре».",
          items: ["in September", "starts", "School"],
          answer: [2, 1, 0],
          hint: "Перед месяцем стоит in.",
          why: "School starts in September.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "my-i-oni",
      title: "Мы и они",
      estimatedMinutes: 12,
      outcome: "рассказывать о нескольких людях: we work, they live",

      blocks: [
        {
          id: "zachem-my-oni",
          kind: "explain",
          text: [
            "Ты рассказываешь не о себе и не о брате, а о семье: мы живём в Астане. Или о " +
              "друзьях: они работают в больнице.",
            "Тут глагол проще всего: он стоит как в словаре, без всякого окончания. " +
              "We live in Astana. They work in a hospital.",
            "Окончание -s появляется только после he, she и it. После остальных слов глагол " +
              "не меняется.",
          ],
        },
        {
          id: "tablica-vseh-lic",
          kind: "table",
          caption: "Кто и какая форма глагола",
          head: ["Кто", "Глагол", "Пример"],
          rows: [
            ["I", "work", "I work in a shop."],
            ["you", "work", "You work in a shop."],
            ["he, she, it", "works", "He works in a shop."],
            ["we", "work", "We work in a shop."],
            ["they", "work", "They work in a shop."],
          ],
        },
        {
          id: "odna-stroka-iz-pyati",
          kind: "note",
          tone: "info",
          text:
            "Из пяти строк таблицы окончание есть только в одной. Запоминать проще так: " +
            "глагол не меняется нигде, кроме he, she и it.",
        },
        {
          id: "sushchestvitelnoe-vmesto-mestoimeniya",
          kind: "note",
          tone: "mistake",
          text:
            "На месте he и they часто стоит не местоимение, а название.\n\nMy brother works " +
            "— брат один, значит окончание нужно.\n\nMy friends work — друзей несколько, " +
            "окончания нет.\n\nСмотри не на само слово, а на то, об одном человеке речь " +
            "или о нескольких.",
        },
        {
          id: "primer-my-oni",
          kind: "example",
          caption: "О семье и друзьях",
          text:
            "We live in Astana.\nMy friends live in Almaty.\n" +
            "They work in a hospital and play football every day.",
          explain:
            "В третьей строке два действия подряд, соединённые словом and. Оба глагола стоят " +
            "без окончания, потому что речь о нескольких людях.",
        },
        {
          id: "zapis-my-oni",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай все формы",
          transcript:
            "I work. You work. He works. She works. We work. They work.",
        },
        {
          id: "slovar-my-oni",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "help", translation: "помогать", example: "They help my brother.", hint: "/help/" },
            { term: "know", translation: "знать", example: "We know Dana.", hint: "/nəʊ/" },
            { term: "want", translation: "хотеть", example: "They want coffee.", hint: "/wɒnt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-they",
          kind: "gap",
          prompt: "Друзья живут в Алматы. Допиши глагол.",
          before: "They ",
          after: " in Almaty.",
          answer: "live",
          hint: "Речь о нескольких, значит окончание не нужно.",
          why: "They live in Almaty. После they глагол стоит как в словаре.",
        },
        {
          id: "z2-brat-ili-druzya",
          kind: "choice",
          prompt: "Друзья работают в больнице. Какую запись выбрать?",
          options: [
            { text: "My friends works in a hospital." },
            { text: "My friends work in a hospital.", correct: true },
            { text: "My friends is working in a hospital." },
          ],
          hint: "Смотри не на слово friends, а на то, о скольких людях речь.",
          why:
            "My friends work in a hospital. Друзей несколько — окончания у глагола нет.",
        },
        {
          id: "z3-otmetit-formy",
          kind: "hottext",
          prompt: "Отметь записи, где форма глагола выбрана неверно.",
          parts: [
            { text: "We work in a shop.", selectable: true },
            { text: " · " },
            { text: "My brother work in a shop.", selectable: true, correct: true },
            { text: " · " },
            { text: "They lives in Astana.", selectable: true, correct: true },
            { text: " · " },
            { text: "She lives in Astana.", selectable: true },
          ],
          hint: "Проверь по каждой записи, об одном речь или о нескольких.",
          why:
            "Ошибки во второй и третьей записях. Брат один — нужно My brother works. Слово " +
            "they говорит о нескольких — нужно They live.",
        },
        {
          id: "z4-perestroit-na-nih",
          kind: "short",
          prompt: "Скажи то же самое о друзьях: «He knows Dana.» Начни с My friends.",
          answer: "My friends know Dana.",
          exact: true,
          accept: ["My friends know Dana"],
          hint: "Друзей несколько, значит окончание уходит.",
          why: "My friends know Dana. Глагол вернулся к словарной форме.",
        },
        {
          id: "z5-sobrat-o-nas",
          kind: "order",
          prompt: "Собери предложение: «Мы помогаем брату каждый день».",
          items: ["every day", "help my brother", "We"],
          answer: [2, 1, 0],
          hint: "Оборот «каждый день» идёт в конец.",
          why: "We help my brother every day.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-dne",
      title: "Рассказать о своём дне",
      estimatedMinutes: 14,
      outcome: "рассказывать о своём дне четырьмя предложениями",

      blocks: [
        {
          id: "zachem-rasskaz-o-dne",
          kind: "explain",
          text: [
            "Знакомый спрашивает, как проходит твой день. Одним предложением тут не " +
              "ответишь: ему интересно и когда ты встаёшь, и чем занимаешься, и что делаешь " +
              "вечером.",
            "Четырёх предложений для этого хватает: во сколько встаёшь, где работаешь или " +
              "учишься, во сколько заканчиваешь, что делаешь вечером.",
            "Каждое такое предложение ты уже умеешь сказать по одному. Осталось поставить их " +
              "подряд.",
          ],
        },
        {
          id: "shagi-rasskaza-o-dne",
          kind: "table",
          caption: "Рассказ по шагам",
          head: ["Шаг", "О чём", "Пример"],
          rows: [
            ["1", "во сколько встаёшь", "I get up at seven."],
            ["2", "где работаешь или учишься", "I work in a shop."],
            ["3", "во сколько заканчиваешь", "I finish at six."],
            ["4", "что делаешь вечером", "I watch football in the evening."],
          ],
        },
        {
          id: "poryadok-rasskaza-o-dne",
          kind: "note",
          tone: "info",
          text:
            "Порядок идёт по часам: сначала утро, потом день, потом вечер. Так рассказ " +
            "легче слушать — собеседник не переспрашивает, когда именно это бывает.",
        },
        {
          id: "primer-rasskaza-o-dne",
          kind: "example",
          caption: "День целиком",
          text:
            "I get up at seven.\nI study English at school.\nI finish at three.\n" +
            "I play football in the evening.",
          explain:
            "Четыре предложения, четыре глагола, и все без окончания: речь о себе. " +
            "Если бы речь шла о брате, в каждом появилось бы -s.",
        },
        {
          id: "primer-o-brate-celikom",
          kind: "example",
          caption: "И то же самое о брате",
          text:
            "He gets up at seven.\nHe studies English at school.\nHe finishes at three.\n" +
            "He plays football in the evening.",
          explain:
            "Тот же рассказ, только о брате: в каждом глаголе появилось окончание. " +
            "У studies и finishes оно длиннее, и у studies буква y уступила место i.",
        },
        {
          id: "zapis-rasskaza-o-dne",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай оба рассказа",
          transcript:
            "I get up at seven. I study English at school. I finish at three. I play " +
            "football in the evening. He gets up at seven. He studies English at school.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-den",
          kind: "order",
          prompt: "Расставь предложения так, чтобы вышел рассказ по шагам.",
          items: [
            "I finish at six.",
            "I get up at seven.",
            "I watch football in the evening.",
            "I work in a shop.",
          ],
          answer: [1, 3, 0, 2],
          hint: "Порядок идёт по часам.",
          why:
            "I get up at seven. I work in a shop. I finish at six. I watch football in the " +
            "evening.",
        },
        {
          id: "z2-vtoroy-shag-den",
          kind: "short",
          prompt: "Ты учишь английский в школе. Запиши второй шаг рассказа целиком, начни с I.",
          answer: "I study English at school.",
          exact: true,
          accept: ["I study English at school"],
          hint: "Речь о себе, значит окончания у глагола нет.",
          why: "I study English at school.",
        },
        {
          id: "z3-tot-zhe-o-brate",
          kind: "short",
          prompt: "Скажи то же самое о брате: «I finish at three.» Начни с He.",
          answer: "He finishes at three.",
          exact: true,
          accept: ["He finishes at three"],
          hint: "Слово finish кончается на звук «ш».",
          why: "He finishes at three. После «ш» прибавляют es.",
        },
        {
          id: "z4-otmetit-shagi",
          kind: "hottext",
          prompt: "Отметь рассказы, в которых пропущен первый шаг.",
          parts: [
            { text: "I get up at seven. I work in a shop.", selectable: true },
            { text: " · " },
            { text: "I work in a shop. I finish at six.", selectable: true, correct: true },
            { text: " · " },
            { text: "I get up at eight. I study English.", selectable: true },
            { text: " · " },
            { text: "I finish at six. I read in the evening.", selectable: true, correct: true },
          ],
          hint: "Первый шаг называет время подъёма.",
          why:
            "Во второй и четвёртой записях рассказ начинается с середины дня, а о подъёме " +
            "не сказано ничего.",
        },
        {
          id: "z5-rasskazat-den-vsluh",
          kind: "speak",
          prompt:
            "Расскажи вслух о своём дне: во сколько встаёшь, где работаешь или учишься, во сколько заканчиваешь, что делаешь вечером.",
          phrase:
            "I get up at seven. I work in a shop. I finish at six. I watch football in the evening.",
          translation:
            "Я встаю в семь. Я работаю в магазине. Я заканчиваю в шесть. Вечером я смотрю футбол.",
          hint: "Четыре коротких предложения по шагам таблицы.",
          why:
            "Четыре предложения дают полный ответ. Собирать их в одно длинное не нужно.",
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
    passRatio: 0.7,
    questions: [
      {
        id: "q-ya-rabotayu",
        kind: "short",
        outcome: "говорить, что делаешь: I work, I live in Astana",
        prompt: "Ты работаешь в магазине. Запиши предложение целиком, начни с I.",
        answer: "I work in a shop.",
        exact: true,
        accept: ["I work in a shop"],
        why: "I work in a shop. После I сразу идёт действие, без формы be.",
      },
      {
        id: "q-dva-glagola",
        kind: "choice",
        outcome: "говорить, что делаешь: I work, I live in Astana",
        prompt: "Ты живёшь в Алматы. Как сказать?",
        options: [
          { text: "I lives in Almaty." },
          { text: "I live in Almaty.", correct: true },
          { text: "I am a live in Almaty." },
        ],
        why: "I live in Almaty. Форма be и действие вместе не идут.",
      },
      {
        id: "q-sobrat-o-sebe-quiz",
        kind: "order",
        outcome: "говорить, что делаешь: I work, I live in Astana",
        prompt: "Собери предложение: «Я читаю книги каждый день».",
        items: ["books", "I read", "every day"],
        answer: [1, 0, 2],
        why: "I read books every day.",
      },
      {
        id: "q-dopisat-s",
        kind: "gap",
        outcome: "прибавлять -s, когда речь об одном: he works, the shop opens",
        prompt: "Сестра говорит по-английски. Допиши глагол вместе с окончанием.",
        before: "She ",
        after: " English.",
        answer: "speaks",
        why: "She speaks Kazakh. После she у глагола появляется -s.",
      },
      {
        id: "q-kto-beryot-s-quiz",
        kind: "choice",
        outcome: "прибавлять -s, когда речь об одном: he works, the shop opens",
        prompt: "После какого слова глагол берёт окончание -s?",
        options: [
          { text: "they" },
          { text: "you" },
          { text: "he", correct: true },
        ],
        why: "После he. Окончание достаётся тому, кто один.",
      },
      {
        id: "q-perestroit-na-nego-quiz",
        kind: "short",
        outcome: "прибавлять -s, когда речь об одном: he works, the shop opens",
        prompt: "Скажи то же самое о брате: «I play football.» Начни с He.",
        answer: "He plays football.",
        exact: true,
        accept: ["He plays football"],
        why: "He plays football.",
      },
      {
        id: "q-es-vybor",
        kind: "choice",
        outcome: "прибавлять -es там, где одной s мало: goes, watches, studies",
        prompt: "Брат смотрит футбол. Какую запись выбрать?",
        options: [
          { text: "He watchs football." },
          { text: "He watch football." },
          { text: "He watches football.", correct: true },
        ],
        why: "He watches football. После звука «ч» прибавляют es.",
      },
      {
        id: "q-dopisat-goes-quiz",
        kind: "gap",
        outcome: "прибавлять -es там, где одной s мало: goes, watches, studies",
        prompt: "Сестра ходит на работу. Допиши глагол вместе с окончанием.",
        before: "She ",
        after: " to work.",
        answer: "goes",
        why: "She goes to work. К go прибавляют es.",
      },
      {
        id: "q-studies-quiz",
        kind: "short",
        outcome: "прибавлять -es там, где одной s мало: goes, watches, studies",
        prompt: "Брат учит английский. Запиши предложение целиком, начни с He.",
        answer: "He studies English.",
        exact: true,
        accept: ["He studies English"],
        why: "He studies English. Перед y стоит согласный, значит y уступает место i.",
      },
      {
        id: "q-vremya-predlog",
        kind: "gap",
        outcome: "рассказывать распорядок дня со временем: I get up at seven",
        prompt: "Ты встаёшь в шесть. Допиши предлог перед временем.",
        before: "I get up ",
        after: " six.",
        answer: "at",
        why: "I get up at six. Перед точным временем ставят at.",
      },
      {
        id: "q-den-poryadok",
        kind: "order",
        outcome: "рассказывать распорядок дня со временем: I get up at seven",
        prompt: "Расставь предложения по порядку дня.",
        items: [
          "I finish at six.",
          "I eat breakfast at eight.",
          "I get up at seven.",
        ],
        answer: [2, 1, 0],
        why: "Семь, восемь, шесть: I get up at seven. I eat breakfast at eight. I finish at six.",
      },
      {
        id: "q-den-napisat",
        kind: "short",
        outcome: "рассказывать распорядок дня со временем: I get up at seven",
        prompt: "Ты обедаешь в час. Запиши предложение целиком, начни с I.",
        answer: "I eat lunch at one.",
        exact: true,
        accept: ["I eat lunch at one"],
        why: "I eat lunch at one.",
      },
      {
        id: "q-like-dopisat",
        kind: "gap",
        outcome: "говорить, что нравится: I like music",
        prompt: "Брат любит кофе. Допиши глагол вместе с окончанием.",
        before: "He ",
        after: " coffee.",
        answer: "likes",
        why: "He likes coffee.",
      },
      {
        id: "q-like-predlog",
        kind: "choice",
        outcome: "говорить, что нравится: I like music",
        prompt: "Ты любишь музыку. Как сказать?",
        options: [
          { text: "I like music.", correct: true },
          { text: "I like to music." },
          { text: "I am like music." },
        ],
        why: "I like music. После like предлога нет.",
      },
      {
        id: "q-like-napisat",
        kind: "short",
        outcome: "говорить, что нравится: I like music",
        prompt: "Сестра любит книги. Запиши предложение целиком, начни с She.",
        answer: "She likes books.",
        exact: true,
        accept: ["She likes books"],
        why: "She likes books.",
      },
      {
        id: "q-magazin-zakryvaetsya",
        kind: "gap",
        outcome: "говорить о том, что верно всегда: The shop opens at nine",
        prompt: "Магазин закрывается в девять. Допиши глагол вместе с окончанием.",
        before: "The shop ",
        after: " at nine.",
        answer: "closes",
        why: "The shop closes at nine. Предмет один — значит окончание нужно.",
      },
      {
        id: "q-avtobus-quiz",
        kind: "choice",
        outcome: "говорить о том, что верно всегда: The shop opens at nine",
        prompt: "Автобус приходит в восемь. Какую запись выбрать?",
        options: [
          { text: "The bus come at eight." },
          { text: "The bus comes at eight.", correct: true },
          { text: "The bus is come at eight." },
        ],
        why: "The bus comes at eight.",
      },
      {
        id: "q-shkola-quiz",
        kind: "short",
        outcome: "говорить о том, что верно всегда: The shop opens at nine",
        prompt: "Школа начинается в сентябре. Запиши предложение целиком, начни с School.",
        answer: "School starts in September.",
        exact: true,
        accept: ["School starts in September"],
        why: "School starts in September. Перед месяцем стоит in.",
      },
      {
        id: "q-oni-rabotayut",
        kind: "gap",
        outcome: "рассказывать о нескольких людях: we work, they live",
        prompt: "Друзья работают в больнице. Допиши глагол.",
        before: "They ",
        after: " in a hospital.",
        answer: "work",
        why: "They work in a hospital. После they окончания нет.",
      },
      {
        id: "q-druzya-vybor",
        kind: "choice",
        outcome: "рассказывать о нескольких людях: we work, they live",
        prompt: "Друзья живут в Астане. Какую запись выбрать?",
        options: [
          { text: "My friends lives in Astana." },
          { text: "My friends lives in Astana." },
          { text: "My friends live in Astana.", correct: true },
        ],
        why: "My friends live in Astana. Друзей несколько — окончания нет.",
      },
      {
        id: "q-my-pomogaem",
        kind: "short",
        outcome: "рассказывать о нескольких людях: we work, they live",
        prompt: "Скажи то же самое о себе и о брате: «He knows Dana.» Начни с We.",
        answer: "We know Dana.",
        exact: true,
        accept: ["We know Dana"],
        why: "We know Dana. Глагол вернулся к словарной форме.",
      },
      {
        id: "q-rasskaz-den-poryadok",
        kind: "order",
        outcome: "рассказывать о своём дне четырьмя предложениями",
        prompt: "Расставь предложения так, чтобы вышел рассказ по шагам.",
        items: [
          "I read in the evening.",
          "I study English at school.",
          "I finish at three.",
          "I get up at seven.",
        ],
        answer: [3, 1, 2, 0],
        why:
          "I get up at seven. I study English at school. I finish at three. I read in the " +
          "evening.",
      },
      {
        id: "q-rasskaz-den-shag",
        kind: "short",
        outcome: "рассказывать о своём дне четырьмя предложениями",
        prompt: "Ты заканчиваешь в шесть. Запиши третий шаг рассказа целиком, начни с I.",
        answer: "I finish at six.",
        exact: true,
        accept: ["I finish at six"],
        why: "I finish at six. Третий шаг называет время окончания.",
      },
      {
        id: "q-rasskaz-den-otmetit",
        kind: "hottext",
        outcome: "рассказывать о своём дне четырьмя предложениями",
        prompt: "Отметь записи, где у глагола потеряно окончание.",
        parts: [
          { text: "He gets up at seven.", selectable: true },
          { text: " · " },
          { text: "He work in a shop.", selectable: true, correct: true },
          { text: " · " },
          { text: "He finishes at six.", selectable: true },
          { text: " · " },
          { text: "He watch football in the evening.", selectable: true, correct: true },
        ],
        why:
          "Окончание потеряно во второй и четвёртой записях: нужно He works и He watches.",
      },
    ],
  },
};

export default module;
