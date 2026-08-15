import type { Module } from "@/lib/content/types";

/**
 * Модуль 10 курса «Английский с нуля»: дни, даты, время.
 *
 * Программа: docs/programma-english-starter.md, модуль 10 — «назвать день,
 * дату, время и номер телефона»; грамматика: предлоги времени `at`, `in`, `on`;
 * артикль в оборотах времени.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. Предлоги — A1, English Grammar Profile, PREPOSITIONS «FORM: SIMPLE»:
 *    «Can use a limited range of simple (single-word) prepositions». Там же
 *    «FORM: PREPOSITION + NOUN PHRASE» — A1.
 *
 * 2. Отсутствие артикля в оборотах вроде `at night` — A1, DETERMINERS articles
 *    «FORM: PREPOSITION + NO ARTICLE»: «Can use no article before a limited
 *    range of nouns in some fixed expressions with prepositions». Пример
 *    источника на A1 — `at home`; строка с примером `at night` стоит на B1
 *    («an increasing range»). Мы даём ровно четыре оборота, а не разряд.
 *
 * 3. Все дни недели и все месяцы — A1 по Oxford 3000, проверено построчно.
 *    Там же A1: time, hour, minute, half, quarter, past, day, week, month,
 *    year, today, tomorrow, morning, afternoon, evening, night, date,
 *    birthday, when, meeting, lesson.
 *
 * 4. ОПРЕДЕЛЁННЫЙ АРТИКЛЬ — урок «A и the», дописан позже остальных по
 *    решению владельца (был блокер, docs/zadachi-vladeltsa.md, п. 1.18).
 *    Ступень: Oxford 3000, с. 10 — `the definite article A1`; English Grammar
 *    Profile, DETERMINERS articles, A1, «FORM: WITH NOUNS»: «Can use articles
 *    'the', 'a' and 'an' before nouns», пример источника — «She lives in a
 *    small flat in the town».
 *
 *    ПОЧЕМУ ИМЕННО ЗДЕСЬ, А НЕ В МОДУЛЕ 3 ИЛИ 11. Счёт по всему курсу, в тексте
 *    для ученика (комментарии и `sources` исключены, проверочные работы учтены):
 *    модули 1–9 — НОЛЬ, этот модуль — 175, из них 37 в самом уроке об артикле;
 *    модуль 11 — 121; модуль 12 — 315. То есть первое употребление приходится
 *    ровно сюда, и правило вводится там, где впервые нужно. В модуле 3 его
 *    вводить было бы рано по другой причине: разницу показывают вторым
 *    упоминанием («I've got a meeting. The meeting is on Monday»), а сказать
 *    что-либо о предмете во второй раз ученик до этого модуля не может — ни
 *    времени, ни прилагательных у него ещё нет.
 *
 *    ПРАВИЛО В УРОКЕ ШИРЕ, ЧЕМ «СО ВТОРОГО РАЗА», и это находка методиста.
 *    Первая редакция урока учила только второму упоминанию — и объявляла
 *    ошибкой то, что курс требует делать через два урока: «The meeting is at
 *    seven» стоит в уроке «At, in, on» при первом упоминании, и таких мест в
 *    модуле десяток. Источник тоже шире: cambridge-young-learners-pre-a1-a2.pdf,
 *    с. 29, грамматический список Pre A1 Starters, строка Determiners — «Put the
 *    hat on the boy's head», тоже первое упоминание. Поэтому урок даёт оба
 *    случая: собеседник понимает, о чём речь, либо из разговора, либо из
 *    обстановки.
 *
 *    ЧЕГО ИСТОЧНИКИ НЕ ЗАКРЫВАЮТ ВОВСЕ: употребления артикля в связном тексте
 *    (первое упоминание, ситуация, единственность) нет ни в English Grammar
 *    Profile, который описывает форму, ни в руководствах Cambridge, где есть
 *    только примеры. Формулировка урока — решение уровня преподавателя, и
 *    владелец о нём предупреждён.
 *
 *    ЧЕГО В УРОКЕ НЕТ НАМЕРЕННО: `the` + прилагательное + существительное
 *    («opposite the new café») стоит на A2 отдельной строкой — DETERMINERS
 *    articles, «FORM/USE: 'THE' + ADJECTIVES, SPECIFYING». Поэтому во всех
 *    примерах урока между `the` и названием ничего не стоит.
 *
 *    ОБОРОТ `I've got a meeting` — решение уровня преподавателя. Руководство
 *    Cambridge (с. 29) даёт `have got` со значением обладания: «Have you got a
 *    pen?». Встреча обладанием не является, и сочетаемость словники не
 *    описывают. Оборот при этом обиходный, а другого способа назвать встречу
 *    на этой ступени нет: настоящее простое время идёт в модуле 14.
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ:
 *
 * — номер телефона: программа отдаёт его этому модулю, но урок про диктовку
 *   номера уже стоит в модуле 9 (docs/zadachi-vladeltsa.md, п. 1.12).
 *   Повторять не стал;
 * — настоящего простого времени (модуль 14): «занятие начинается в девять»
 *   строится через be — `The lesson is at nine`, а не через `start`;
 * — оборота `there is` (модуль 13);
 * — предлога места: `at` места стоит отдельной строкой в перечне Cambridge и
 *   идёт в модуле 12. Поэтому уговор о встрече здесь называет день и время, но
 *   НЕ место: раньше итог обещал место, а модуль его не давал (нашёл методист);
 * — порядковых числительных: без них дата вслух неполна, и это блокер для
 *   владельца (docs/zadachi-vladeltsa.md, п. 1.17).
 *
 * ПРИЛАГАТЕЛЬНЫЕ ЗДЕСЬ ЕСТЬ, И ЭТО ОСОЗНАННО. Их ровно три: `free`, `busy`,
 * `good`, все A1 по Oxford 3000 и все после формы `be` (A1, ADJECTIVES
 * position). Без «свободен» и «занят» о встрече не договориться. Описание
 * признаков предметов остаётся модулю 11. Раньше шапка утверждала, что
 * прилагательных в модуле нет вовсе, — это было прямой неправдой.
 *
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "dni-daty-vremya",
  title: "Дни, даты, время",

  sources: [
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 48, Overall oral comprehension, Pre-A1, дословно: «Can recognise numbers, " +
        "prices, dates and days of the week, provided they are delivered slowly and clearly " +
        "in a defined, familiar everyday context» — дни недели и даты названы поимённо, и " +
        "ступень здесь НИЖЕ A1. Там же A1: «Can recognise concrete information (e.g. places " +
        "and times) on familiar topics». " +
        "с. 73, Understanding an interlocutor, тот же перечень. " +
        "с. 56, Reading for orientation, Pre-A1: «Can find information about places, times " +
        "and prices on posters, flyers and notices». " +
        "ОГОВОРКА: все три строки описывают УЗНАВАНИЕ, а модуль требует и называть. " +
        "Производство опирается на A2 Key (запись ниже), а не на эти строки. " +
        "СНЯТО ПОСЛЕ ПРОВЕРКИ МЕТОДИСТОМ: раньше здесь стояла ссылка на с. 125 («telling " +
        "the time») как на основание умения назвать время. Это подмена: страница 125 — " +
        "шкала Building on pluricultural repertoire, она о межкультурной осведомлённости, " +
        "и та же строка прямо продолжается словами «even though they may have difficulty " +
        "applying this». Цитата настоящая, вывод был чужой",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 51, «Inventory of functions, notions and communicative tasks», дословно: " +
        "«asking and telling people the time, day and/or date» — отсюда состав модуля " +
        "целиком, и это ЕДИНСТВЕННАЯ опора на производство. Там же с. 53, перечень " +
        "предлогов: «Time: at, on, in, during, etc.» — отсюда три предлога урока 6; " +
        "during не берём, он к времени-отрезку. " +
        "Там же с. 53 предлоги МЕСТА стоят отдельной строкой: «Location: to, on, inside, " +
        "next to, at (home), etc.» — то есть at места надо вводить отдельно, и модуль его " +
        "не вводит. " +
        "СЛОВО o'clock есть в словнике A2 Key, с. 15",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 81, тематический список «Numbers»: 1–20 — Pre A1 Starters, «21–100, 1st–20th, " +
        "hundred, pair» — A1 Movers, «101–1,000, 21st–31st…» — A2 Flyers. То есть " +
        "порядковые до двадцатого стоят на A1 MOVERS, а не на A2, как было записано " +
        "сначала. Ошибку нашёл методист. " +
        "с. 29, грамматический список Pre A1 Starters: «Prepositions of place and time — " +
        "We go to school in the morning» — оборот in the morning подтверждён на самой " +
        "низкой ступени. " +
        "ТАМ ЖЕ строка «Determiners»: «It's a banana. This is an apple. Put the hat on the " +
        "boy's head. I want some milk» — определённый артикль стоит на Pre A1 Starters, " +
        "то есть НИЖЕ A1, и в примере источника the стоит при первом упоминании, по " +
        "обстановке. Это опора урока «A и the» и основание того, что правило в нём шире, " +
        "чем «со второго раза». Нашёл методист. " +
        "с. 67, образец A2 Flyers: «10 o'clock at night» — отсюда оборот at night. " +
        "РАСХОЖДЕНИЕ ИСТОЧНИКОВ, ТРЕБУЕТ РЕШЕНИЯ ВЛАДЕЛЬЦА: тематический список «Time» на " +
        "с. 83 ставит hour, minute, month, past, quarter, time, tomorrow, date и ВСЕ " +
        "двенадцать месяцев на A2 Flyers, тогда как Oxford 3000 даёт их все на A1. " +
        "Расходятся два источника, а не источник с автором. Модуль держится Oxford 3000; " +
        "записано в docs/zadachi-vladeltsa.md, п. 1.19",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1, PREPOSITIONS «FORM: SIMPLE»: «Can use a limited range of simple (single-word) " +
        "prepositions» — at, in, on. Там же A1 «FORM: PREPOSITION + NOUN PHRASE». " +
        "A1, DETERMINERS articles «FORM: WITH NOUNS»: «Can use articles 'the', 'a' and " +
        "'an' before nouns», пример источника — «She lives in a small flat in the town» — " +
        "основание урока «A и the». Все три артикля стоят одной строкой и на A1. " +
        "ЧЕГО В УРОКЕ НЕТ: A2, DETERMINERS articles «FORM/USE: 'THE' + ADJECTIVES, " +
        "SPECIFYING» — the перед прилагательным с существительным, пример источника " +
        "«My house is opposite the new café». Поэтому между the и названием в уроке " +
        "ничего не стоит. " +
        "A1, DETERMINERS articles «FORM: PREPOSITION + NO ARTICLE», пример источника — " +
        "«If you are at home»: отсюда оборот at night без артикля. Строка с примером " +
        "«The weather is very cold at night» стоит на B1, поэтому в уроке даётся не " +
        "правило, а четыре готовых оборота. " +
        "A1, DETERMINERS articles «FORM: PREPOSITION + 'THE' + NOUN»: «Can use 'the' in " +
        "prepositional phrases relating to time», пример источника — «I work at the " +
        "weekend». Это прямая опора для in the morning, in the afternoon, in the evening, " +
        "и она на A1. Нашёл методист: раньше здесь стояла соседняя, менее точная строка. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'» — единственный глагол модуля. " +
        "A1, NOUNS types «PROPER NOUNS» — дни и месяцы с заглавной буквы. " +
        "A1, ADJECTIVES position «FORM: PREDICATIVE, WITH 'BE'» — отсюда free и busy " +
        "после формы be. Ступень своя, но описание признаков программа отдаёт модулю 11, " +
        "поэтому здесь их ровно три: free, busy, good. " +
        "СВЕРХ СТУПЕНИ, ДВА ПУНКТА: " +
        "вопросительные слова when и what time — QUESTIONS wh-, A2, взяты по решению 1 " +
        "программы, как и where в модуле 3; " +
        "пустое it в «It's eight o'clock» — PRONOUNS subject/object «FORM: (SUBJECT) EMPTY " +
        "'IT'», A2: «Can use 'it' as an empty subject… particularly with weather or time». " +
        "Это НЕ то же самое, что указательное it модуля 6, где есть на что указывать. " +
        "Нашёл методист; без пустого it время не назвать ни одним способом. " +
        "ПОРЯДКОВЫЕ ЧИСЛИТЕЛЬНЫЕ: в English Grammar Profile их нет ни на одной ступени " +
        "(поиск по ordinal даёт ноль строк), но он описывает грамматику, а не разряды " +
        "числительных, — отсутствие там ничего не доказывает. По словнику младших " +
        "ступеней 1st–20th стоят на A1 Movers, по Oxford 3000 first, third, fourth, fifth " +
        "— все A1. То есть ступень их допускает. В модуле их всё равно нет: дата вслух " +
        "требует ещё и оборота с the, и решение за владельцем " +
        "(docs/zadachi-vladeltsa.md, п. 1.17)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "проверено построчно, все A1: Monday, Tuesday, Wednesday, Thursday, Friday, " +
        "Saturday, Sunday; January, March, August, November, December (остальные месяцы " +
        "того же ряда); time, hour, minute, half, quarter, past, day, week, month, year, " +
        "today, tomorrow, morning, afternoon, evening, night, date, birthday, when, " +
        "meeting, lesson, free, busy, good, at, in, on. " +
        "АРТИКЛЬ the — с. 10, «the definite article A1», между that и theatre. " +
        "СЛОВО o'clock — тоже A1: «o'clock adv. A1», с. 7, между ocean и October. " +
        "Первая моя проверка утверждала, что его в Oxford 3000 нет вовсе, и на этом " +
        "строилось целое рассуждение о превышении ступени. Причина промаха: в файле " +
        "стоит типографский апостроф ’, а искал я прямой '. Нашёл методист. " +
        "ОГОВОРКА, КОТОРУЮ ИСТОЧНИК ЗАКРЫТЬ НЕ МОЖЕТ: Oxford 3000 даёт часть речи, но не " +
        "значение. Что free здесь «не занят», а не «бесплатный», словником не " +
        "подтверждается",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e, конечный безударный через ə, слоговой согласный без ə " +
        "(CLAUDE.md, раздел о британской норме). Wednesday — /ˈwenzdeɪ/, буква d не " +
        "звучит; сверено по обоим файлам. " +
        "АРТИКЛЬ the: у него две формы, и оба файла это дают — ipa-en-uk.txt «the /ðə, " +
        "ði/», wikipron-en-uk.tsv «the ð ə» и «the ð i». Поэтому урок говорит про обе: " +
        "/ðə/ перед согласным звуком, /ði/ перед гласным",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "называть дни недели и писать их с заглавной буквы",
    "называть месяцы и записывать дату цифрой и месяцем",
    "говорить, который час: It's seven o'clock",
    "называть половину и четверть часа",
    "выбирать a или the: I've got a meeting — The meeting is on Monday",
    "называть часть суток: in the morning, at night",
    "ставить at, in или on перед словом о времени",
    "спрашивать о дне и о времени: When и What time",
    "договариваться о встрече: называть день, время и часть суток",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "dni-nedeli",
      title: "Дни недели",
      estimatedMinutes: 13,
      outcome: "называть дни недели и писать их с заглавной буквы",

      blocks: [
        {
          id: "zachem-dni",
          kind: "explain",
          text: [
            "Тебе называют день встречи: Monday. Или ты видишь на двери магазина Sunday и " +
              "закрытые ставни. Семь слов, без которых не разобрать ни расписание, ни " +
              "объявление на двери.",
            "Все семь кончаются одинаково — на day, «день». Запоминать нужно только " +
              "начало слова.",
          ],
        },
        {
          id: "tablica-dney",
          kind: "table",
          caption: "Семь дней",
          head: ["По-английски", "По-русски", "Как читается"],
          rows: [
            ["Monday", "понедельник", "/ˈmʌndeɪ/"],
            ["Tuesday", "вторник", "/ˈtjuːzdeɪ/"],
            ["Wednesday", "среда", "/ˈwenzdeɪ/"],
            ["Thursday", "четверг", "/ˈθɜːzdeɪ/"],
            ["Friday", "пятница", "/ˈfraɪdeɪ/"],
            ["Saturday", "суббота", "/ˈsætədeɪ/"],
            ["Sunday", "воскресенье", "/ˈsʌndeɪ/"],
          ],
        },
        {
          id: "wednesday-bez-d",
          kind: "note",
          tone: "mistake",
          text:
            "В слове Wednesday букв d две, и первая из них не звучит: Wed-nes-day читается " +
            "как /ˈwenzdeɪ/, «уэнздэй». Вторая d слышна — она в конце, в day. Похожий " +
            "случай был в модуле про числа: в eight не читается gh. Диктуют при этом все " +
            "буквы, включая немую.",
        },
        {
          id: "dni-s-zaglavnoy",
          kind: "note",
          tone: "mistake",
          text:
            "Дни недели в английском пишутся с заглавной буквы всегда, где бы они ни " +
            "стояли: I'm free on Friday. По-русски «пятница» посреди предложения идёт с " +
            "маленькой — это то же расхождение, что с названиями языков в модуле про " +
            "алфавит.",
        },
        {
          id: "primer-dney",
          kind: "example",
          caption: "Как это звучит",
          text:
            "— Are you free on Monday?\n— No, I'm not. I'm free on Tuesday.\n" +
            "— Tuesday is OK.",
          explain:
            "Слово on ставят перед днём недели: on Monday, on Tuesday. Почему именно on, " +
            "разберём в уроке «At, in, on: какой предлог когда». Пока запомни пару целиком.",
        },
        {
          id: "zapis-dney",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай семь дней подряд",
          transcript:
            "Monday. Tuesday. Wednesday. Thursday. Friday. Saturday. Sunday.",
        },
        {
          id: "slovar-dney",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "Monday", translation: "понедельник", example: "on Monday", hint: "/ˈmʌndeɪ/" },
            { term: "Tuesday", translation: "вторник", example: "on Tuesday", hint: "/ˈtjuːzdeɪ/" },
            { term: "Wednesday", translation: "среда", example: "on Wednesday", hint: "/ˈwenzdeɪ/" },
            { term: "Thursday", translation: "четверг", example: "on Thursday", hint: "/ˈθɜːzdeɪ/" },
            { term: "Friday", translation: "пятница", example: "on Friday", hint: "/ˈfraɪdeɪ/" },
            { term: "Saturday", translation: "суббота", example: "on Saturday", hint: "/ˈsætədeɪ/" },
            { term: "Sunday", translation: "воскресенье", example: "on Sunday", hint: "/ˈsʌndeɪ/" },
            { term: "day", translation: "день", example: "a good day", hint: "/deɪ/" },
            { term: "week", translation: "неделя", example: "this week", hint: "/wiːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-napisat-den",
          kind: "gap",
          prompt: "Допиши день недели: среда.",
          before: "I'm free on ",
          after: ".",
          answer: "Wednesday",
          exact: true,
          hint: "Девять букв, и одна из них не звучит.",
          why:
            "Wednesday. С заглавной буквы, потому что это день недели, и с буквой d " +
            "внутри, хотя она не читается.",
        },
        {
          id: "z2-poryadok-dney",
          kind: "order",
          prompt: "Расставь дни в том порядке, в каком они идут в неделе.",
          items: ["Thursday", "Monday", "Saturday", "Tuesday"],
          answer: [1, 3, 0, 2],
          hint: "Неделя начинается с понедельника.",
          why:
            "Monday, Tuesday, Thursday, Saturday. Между вторником и четвергом стоит " +
            "среда, а между четвергом и субботой — пятница, но их в списке нет.",
        },
        {
          id: "z3-oshibka-v-zaglavnoy",
          kind: "hottext",
          prompt: "Отметь записи, где день недели написан с ошибкой.",
          parts: [
            { text: "I'm free on friday.", selectable: true, correct: true },
            { text: " · " },
            { text: "Sunday is a good day.", selectable: true },
            { text: " · " },
            { text: "See you on sunday.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm busy on Tuesday.", selectable: true },
          ],
          hint: "Правило то же, что у названий языков в модуле про алфавит.",
          why:
            "Friday и Sunday нужны с заглавной буквы. Остальные две записаны верно, хотя " +
            "день в них стоит не в начале предложения.",
        },
        {
          id: "z4-kakoy-den",
          kind: "choice",
          prompt: "Какой день идёт сразу после Wednesday?",
          options: [
            { text: "Tuesday" },
            { text: "Friday" },
            { text: "Thursday", correct: true },
          ],
          hint: "Сверься с таблицей: она идёт сверху вниз, от понедельника.",
          why:
            "Thursday. Tuesday идёт до Wednesday, а Friday — через день после неё.",
        },
        {
          id: "z5-zapisat-subbotu",
          kind: "short",
          prompt: "Тебя спрашивают, в какой день ты можешь встретиться. Ответь: в субботу. Запиши ответ целиком.",
          answer: "I'm free on Saturday.",
          exact: true,
          accept: ["I'm free on Saturday", "I am free on Saturday.", "I am free on Saturday"],
          hint: "Образец есть в примере урока, замени только день.",
          why:
            "I'm free on Saturday. Перед днём недели ставят on, а сам день пишут с " +
            "заглавной буквы.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mesyacy-i-data",
      title: "Месяцы и дата",
      estimatedMinutes: 14,
      outcome: "называть месяцы и записывать дату цифрой и месяцем",

      blocks: [
        {
          id: "zachem-mesyacy",
          kind: "explain",
          text: [
            "В билете стоит 12 March, в анкете — строка Date of birth, «дата рождения». Двенадцать названий, и " +
              "почти все узнаются с первого взгляда: March похоже на «март», April — на " +
              "«апрель», September — на «сентябрь».",
            "На письме January и February узнаются, а вслух звучат совсем не как «январь» и «февраль». Их придётся выучить отдельно.",
          ],
        },
        {
          id: "tablica-mesyacev",
          kind: "table",
          caption: "Двенадцать месяцев",
          head: ["По-английски", "По-русски", "Как читается"],
          rows: [
            ["January", "январь", "/ˈdʒænjʊəri/"],
            ["February", "февраль", "/ˈfebrʊəri/"],
            ["March", "март", "/mɑːtʃ/"],
            ["April", "апрель", "/ˈeɪprəl/"],
            ["May", "май", "/meɪ/"],
            ["June", "июнь", "/dʒuːn/"],
            ["July", "июль", "/dʒuˈlaɪ/"],
            ["August", "август", "/ˈɔːgəst/"],
            ["September", "сентябрь", "/sepˈtembə/"],
            ["October", "октябрь", "/ɒkˈtəʊbə/"],
            ["November", "ноябрь", "/nəʊˈvembə/"],
            ["December", "декабрь", "/dɪˈsembə/"],
          ],
        },
        {
          id: "mesyacy-s-zaglavnoy",
          kind: "note",
          tone: "mistake",
          text:
            "Месяцы, как и дни недели, пишутся с заглавной буквы: in May, in December. " +
            "Русское «в мае» идёт с маленькой, английское — нет.",
        },
        {
          id: "kak-zapisat-datu",
          kind: "example",
          caption: "Как записывают дату",
          text:
            "Date of birth: 12 March 2001\nDate: 5 May\nMy birthday is in May.",
          explain:
            "В бланке дату пишут цифрой и названием месяца: 12 March. Название месяца " +
            "с заглавной буквы. Год, если он нужен, идёт последним. А когда называют только месяц, " +
            "перед ним ставят in: in May.",
        },
        {
          id: "data-vsluh-pozzhe",
          kind: "note",
          tone: "info",
          // Было «Они идут дальше в курсе» — обещание, которого курс не держит:
          // порядковых числительных в нём нет ни одного, и место для них ещё не
          // решено (п. 1.17 задач владельца). Обещать то, чего нет, нельзя.
          text:
            "Записать дату ты уже можешь, а прочитать её вслух — пока нет: для этого " +
            "нужны особые формы чисел, вроде «пятое» вместо «пять». Этому наш курс не " +
            "учит. Пока называй месяц целиком: My birthday is in May.",
        },
        {
          id: "zapis-mesyacev",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай двенадцать месяцев",
          transcript:
            "January. February. March. April. May. June. July. August. September. October. " +
            "November. December.",
        },
        {
          id: "slovar-mesyacev",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "January", translation: "январь", example: "in January", hint: "/ˈdʒænjʊəri/" },
            { term: "March", translation: "март", example: "12 March", hint: "/mɑːtʃ/" },
            { term: "May", translation: "май", example: "in May", hint: "/meɪ/" },
            { term: "August", translation: "август", example: "in August", hint: "/ˈɔːgəst/" },
            { term: "December", translation: "декабрь", example: "in December", hint: "/dɪˈsembə/" },
            { term: "month", translation: "месяц", example: "this month", hint: "/mʌnθ/" },
            { term: "year", translation: "год", example: "this year", hint: "/jɪə/" },
            { term: "date", translation: "дата", example: "Date: 5 May", hint: "/deɪt/" },
            { term: "birthday", translation: "день рождения", example: "my birthday", hint: "/ˈbɜːθdeɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-zapisat-datu",
          kind: "gap",
          prompt: "Дана родилась двенадцатого марта. Заполни поле бланка.",
          before: "Date of birth: 12 ",
          after: "",
          answer: "March",
          exact: true,
          hint: "Название месяца, и оно пишется не так, как в русском.",
          why: "12 March. Сначала число, потом месяц — и месяц с заглавной буквы.",
        },
        {
          id: "z2-mesyac-rozhdeniya",
          kind: "short",
          prompt: "Твой день рождения в августе. Запиши это предложение целиком.",
          answer: "My birthday is in August.",
          exact: true,
          accept: ["My birthday is in August"],
          hint: "Образец есть в примере урока: перед месяцем ставят in.",
          why:
            "My birthday is in August. Перед названием месяца стоит in, а сам месяц — с " +
            "заглавной буквы.",
        },
        {
          id: "z3-poryadok-mesyacev",
          kind: "order",
          prompt: "Расставь месяцы по порядку в году.",
          items: ["November", "March", "July", "January"],
          answer: [3, 1, 2, 0],
          hint: "Год начинается с января.",
          why:
            "January, March, July, November. Первый, третий, седьмой и одиннадцатый " +
            "месяцы года.",
        },
        {
          id: "z4-najti-oshibku-v-date",
          kind: "hottext",
          prompt: "Отметь записи даты, сделанные с ошибкой.",
          parts: [
            { text: "5 may", selectable: true, correct: true },
            { text: " · " },
            { text: "12 March", selectable: true },
            { text: " · " },
            { text: "3 october", selectable: true, correct: true },
            { text: " · " },
            { text: "8 June", selectable: true },
          ],
          hint: "Смотри на первую букву названия месяца.",
          why:
            "«5 may» и «3 october» написаны с маленькой буквы, а месяц требует заглавной: " +
            "5 May, 3 October.",
        },
        {
          id: "z5-sopostavit-mesyacy",
          kind: "match",
          prompt: "Сопоставь месяц и его номер в году.",
          left: ["February", "September", "June"],
          right: ["шестой", "второй", "девятый"],
          answer: [1, 2, 0],
          hint: "Сверься с таблицей: она идёт сверху вниз, от января.",
          why: "February — второй месяц, June — шестой, September — девятый.",
        },
        {
          id: "z6-mesyac-po-chteniyu",
          kind: "choice",
          prompt: "Какой месяц читается как /ˈɔːgəst/?",
          options: [
            { text: "April" },
            { text: "August", correct: true },
            { text: "October" },
          ],
          hint: "Начало названия звучит как русское «о», длинное.",
          why:
            "August — /ˈɔːgəst/. April читается /ˈeɪprəl/, October — /ɒkˈtəʊbə/.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kotoryy-chas",
      title: "Который час: целые часы",
      estimatedMinutes: 12,
      outcome: "говорить, который час: It's seven o'clock",

      blocks: [
        {
          id: "zachem-chas",
          kind: "explain",
          text: [
            "На часах ровно семь. По-английски это It's seven o'clock. Слово o'clock " +
              "значит «часов» и ставится после числа, а не перед ним.",
            "Слово o'clock годится, только когда минут нет вовсе: 7:00, 9:00, 12:00. " +
              "Если на часах 7:10 или 7:30, o'clock не говорят — там нужны другие слова, " +
              "и они в следующем уроке.",
          ],
        },
        {
          id: "tablica-chasov",
          kind: "table",
          caption: "Целые часы",
          head: ["На часах", "По-английски", "По-русски"],
          rows: [
            ["7:00", "It's seven o'clock.", "Семь часов."],
            ["9:00", "It's nine o'clock.", "Девять часов."],
            ["12:00", "It's twelve o'clock.", "Двенадцать часов."],
            ["1:00", "It's one o'clock.", "Час."],
          ],
        },
        {
          id: "chasy-do-dvenadcati",
          kind: "note",
          tone: "info",
          text:
            "Считают по циферблату, до двенадцати. Пятнадцать часов по-английски — three " +
            "o'clock, а не fifteen o'clock. Утро от вечера отличают словами, и они в " +
            "уроке «Утро, день, вечер, ночь».",
        },
        {
          id: "apostrof-v-oclock",
          kind: "note",
          tone: "mistake",
          text:
            "В слове o'clock есть апостроф — тот же знак, что в I'm и he's. Он стоит " +
            "после буквы o, и пробела вокруг себя не требует: o'clock, а не o clock.",
        },
        {
          id: "primer-chasa",
          kind: "example",
          caption: "Как спрашивают время",
          text: "— What time is it?\n— It's eight o'clock.\n— Thank you.",
          explain:
            "What time is it? — «сколько времени». Отвечают через it: здесь оно ни на какой предмет не показывает, а просто открывает ответ о времени. Как в модуле про " +
            "предметы: It's eight o'clock. Сам вопрос разберём в уроке «Когда и во сколько», пока " +
            "запомни его целиком.",
        },
        {
          id: "zapis-chasov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай целые часы",
          transcript:
            "It's seven o'clock. It's nine o'clock. It's twelve o'clock. What time is it?",
        },
        {
          id: "slovar-chasov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "time", translation: "время", example: "What time is it?", hint: "/taɪm/" },
            { term: "o'clock", translation: "часов (о целом часе)", example: "seven o'clock", hint: "/əˈklɒk/" },
            { term: "hour", translation: "час (единица времени)", example: "an hour", hint: "/ˈaʊə/" },
            { term: "today", translation: "сегодня", example: "today", hint: "/təˈdeɪ/" },
            { term: "tomorrow", translation: "завтра", example: "tomorrow", hint: "/təˈmɒrəʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-chas",
          kind: "short",
          prompt: "На часах 10:00. Запиши ответ на вопрос «What time is it?» целиком.",
          answer: "It's ten o'clock.",
          exact: true,
          accept: ["It's ten o'clock", "It is ten o'clock.", "It is ten o'clock"],
          hint: "Образец есть в примере урока, замени только число.",
          why: "It's ten o'clock. Слово o'clock стоит после числа, а не перед ним.",
        },
        {
          id: "z2-dopisat-oclock",
          kind: "gap",
          prompt: "Допиши слово, которого не хватает.",
          before: "It's six ",
          after: ".",
          answer: "o'clock",
          hint: "В нём есть апостроф.",
          why:
            "It's six o'clock. Без o'clock фраза не закончена: six сам по себе — просто " +
            "число.",
        },
        {
          id: "z3-najti-oshibku-v-chase",
          kind: "hottext",
          prompt: "Отметь записи времени, сделанные с ошибкой.",
          parts: [
            { text: "It's o'clock nine.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's four o'clock.", selectable: true },
            { text: " · " },
            { text: "It's fifteen o'clock.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's one o'clock.", selectable: true },
          ],
          hint: "Одна ошибка в порядке слов, вторая — в самом числе.",
          why:
            "«It's o'clock nine» — o'clock должно стоять после числа. «It's fifteen " +
            "o'clock» — считают до двенадцати, пятнадцать часов это three o'clock.",
        },
        {
          id: "z4-chto-znachit-oclock",
          kind: "choice",
          prompt: "В каком случае годится слово o'clock?",
          options: [
            { text: "Когда на часах 7:30" },
            { text: "Когда на часах 7:00", correct: true },
            { text: "Когда на часах 7:15" },
          ],
          hint: "Смотри на минуты.",
          why:
            "O'clock говорят только о целом часе, когда минут нет вовсе. Для 7:30 и 7:15 " +
            "есть другие слова — они в следующем уроке.",
        },
        {
          // Раньше здесь просили продиктовать o'clock по буквам. Слово стояло в
          // самом задании, записи нет — проверялся набор текста, а не умение
          // назвать время. Нашёл методист.
          id: "z5-prodiktovat-oclock",
          kind: "short",
          prompt: "Тебя спросили: «What time is it?» На часах 12:00. Ответь целиком.",
          answer: "It's twelve o'clock.",
          exact: true,
          accept: ["It's twelve o'clock", "It is twelve o'clock.", "It is twelve o'clock"],
          hint: "Считают по циферблату: полдень — это двенадцать, а не ноль.",
          why:
            "It's twelve o'clock. Полдень и полночь называют одинаково — twelve o'clock, " +
            "а разводит их часть суток.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "polovina-i-chetvert",
      title: "Половина и четверть",
      estimatedMinutes: 14,
      outcome: "называть половину и четверть часа",

      blocks: [
        {
          id: "zachem-polovina",
          kind: "explain",
          // Самое трудное место модуля. В первом виде оно держалось на метафоре
          // «смотрим вперёд — смотрят назад», и редактор прочитал его как
          // ученик: непонятно, куда смотреть — на стрелку, на число, на шкалу.
          // Теперь сначала слово past, потом смысл, потом расхождение с русским,
          // и только в конце ловушка — с названной причиной.
          text: [
            "На часах 7:30. По-английски это It's half past seven.",
            "Разберём по словам: half — «половина», past — «после». Вместе выходит " +
              "«половина после семи»: семь часов уже было, и после них прошло полчаса.",
            "По-русски то же время зовут «полвосьмого»: мы считаем до восьми, а " +
              "по-английски отсчитывают от семи. Число разное, время одно.",
            "Отсюда и ловушка. Half past seven похоже на «полседьмого», но это 7:30, а " +
              "не 6:30. Держись за слово past: назван тот час, который уже прошёл.",
          ],
        },
        {
          id: "tablica-polovin",
          kind: "table",
          caption: "Половина, четверть и минуты",
          head: ["На часах", "По-английски", "Дословно"],
          rows: [
            ["7:30", "half past seven", "половина после семи"],
            ["7:15", "a quarter past seven", "четверть после семи"],
            ["7:45", "a quarter to eight", "четверть до восьми"],
            ["7:20", "twenty past seven", "двадцать после семи"],
            ["7:40", "twenty to eight", "двадцать до восьми"],
          ],
        },
        {
          id: "past-i-to",
          kind: "explain",
          text: [
            "Quarter — четверть часа, то есть пятнадцать минут. Half — половина, " +
              "тридцать минут.",
            "Всё остальное держится на двух словах. Past — «после»: минуты уже прошли, и " +
              "называют час, который был. To — «до»: минуты остались, и называют час, " +
              "который будет.",
            "Граница между ними — половина. До 7:30 включительно говорят past и " +
              "seven. После 7:30 говорят to и eight.",
          ],
        },
        {
          id: "artikl-pered-chetvertyu",
          kind: "note",
          tone: "info",
          text:
            "Обрати внимание на артикль: перед quarter он есть, перед half его нет. " +
            "A quarter past seven, но half past seven. Правила здесь нет — эти два " +
            "оборота запоминают как есть.",
        },
        {
          id: "primer-polovin",
          kind: "example",
          caption: "Разговор на остановке",
          text:
            "— What time is it?\n— It's half past six.\n— And your bus?\n" +
            "— At a quarter to seven.",
          explain:
            "Half past six — это 6:30. A quarter to seven — 6:45, четверть до семи. " +
            "Время автобуса стоит после at: перед точным временем ставят именно at.\n\n" +
            "And your bus? — «А твой автобус?». Так возвращают вопрос собеседнику, как " +
            "And you? в модуле «Вопрос и краткий ответ».",
        },
        {
          id: "zapis-polovin",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай половину и четверть",
          transcript:
            "Half past seven. A quarter past seven. A quarter to eight. Twenty past seven. " +
            "Twenty to eight.",
        },
        {
          id: "slovar-polovin",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "half", translation: "половина", example: "half past seven", hint: "/hɑːf/" },
            { term: "quarter", translation: "четверть", example: "a quarter past six", hint: "/ˈkwɔːtə/" },
            { term: "past", translation: "после (о времени)", example: "ten past four", hint: "/pɑːst/" },
            { term: "to", translation: "до (о времени)", example: "ten to four", hint: "/tuː/" },
            { term: "minute", translation: "минута", example: "five minutes", hint: "/ˈmɪnɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-polovina-vosmogo",
          kind: "short",
          prompt: "На часах 9:30. Запиши тремя словами: два слова и название часа.",
          answer: "half past nine",
          accept: ["Half past nine", "It's half past nine.", "It's half past nine"],
          hint: "Англичане называют час, который уже был, а не тот, который будет.",
          why:
            "Half past nine. По-русски это «полдесятого», но по-английски называют " +
            "девять — тот час, после которого прошла половина.",
        },
        {
          id: "z2-chetvert-do",
          kind: "gap",
          prompt: "На часах 5:45. Допиши недостающее слово.",
          before: "It's a quarter ",
          after: " six.",
          answer: "to",
          hint: "Минуты ещё остались до шести, а не прошли после пяти.",
          why:
            "A quarter to six. Слово to значит «до»: до шести осталась четверть часа.",
        },
        {
          id: "z3-past-ili-to",
          kind: "choice",
          prompt: "На часах 3:20. Какое слово нужно?",
          options: [
            { text: "to" },
            { text: "o'clock" },
            { text: "past", correct: true },
          ],
          hint: "Двадцать минут уже прошли после трёх.",
          why:
            "Twenty past three. Минуты прошли — значит past, и называют три. Слово to " +
            "понадобилось бы после половины, o'clock — только для целого часа.",
        },
        {
          id: "z4-sopostavit-vremya",
          kind: "match",
          prompt: "Сопоставь время на часах и его английскую запись.",
          left: ["4:15", "4:30", "4:45"],
          right: ["half past four", "a quarter to five", "a quarter past four"],
          answer: [2, 0, 1],
          hint: "После половины называют уже следующий час.",
          why:
            "4:15 — a quarter past four, 4:30 — half past four, 4:45 — a quarter to " +
            "five. В последней строке час уже пятый: до него осталась четверть.",
        },
        {
          id: "z5-najti-oshibku-v-polovine",
          kind: "hottext",
          prompt: "Отметь записи времени, где перепутаны past и to.",
          parts: [
            { text: "6:50 — ten past seven", selectable: true, correct: true },
            { text: " · " },
            { text: "8:10 — ten past eight", selectable: true },
            { text: " · " },
            { text: "9:20 — twenty to nine", selectable: true, correct: true },
            { text: " · " },
            { text: "3:40 — twenty to four", selectable: true },
          ],
          hint: "Проверь каждую строку: минуты уже прошли или ещё остались?",
          why:
            "6:50 — это ten to seven: десять минут остались. 9:20 — twenty past nine: " +
            "двадцать минут прошли. Остальные две записаны верно.",
        },
        {
          id: "z6-perevesti-vremya",
          kind: "short",
          prompt: "Собеседник сказал: «a quarter past eight». Запиши это время цифрами, через двоеточие.",
          answer: "8:15",
          hint: "Четверть часа — это пятнадцать минут, и они уже прошли.",
          why:
            "8:15. Past значит «после»: четверть прошла после восьми.",
        },
      ],
    },

    // =====================================================================
    {
      // Урок дописан позже остальных, по просьбе владельца. До него курс не
      // разбирал определённый артикль нигде, хотя дальше он идёт сплошь: 99
      // раз в этом модуле, 91 в одиннадцатом, 228 в двенадцатом. Место выбрано
      // по счёту: в модулях 1–9 слова the нет ни разу, а первое употребление
      // приходится ровно на следующие уроки этого модуля. Заплатки «бери в
      // готовых предложениях как есть» из модулей 10, 11 и 12 сняты.
      slug: "a-i-the",
      title: "A и the",
      estimatedMinutes: 13,
      outcome: "выбирать a или the: I've got a meeting — The meeting is on Monday",

      blocks: [
        {
          id: "zachem-the",
          kind: "explain",
          text: [
            "Ты пишешь знакомому: I've got a meeting. Ни о какой встрече он до этой минуты " +
              "не знал. Ты называешь её впервые, поэтому стоит a.",
            "Дальше речь идёт уже об этой самой встрече. Второй раз говорят the: " +
              "The meeting is on Monday.",
            "Правило за этим простое. A — собеседник ещё не знает, о чём ты говоришь. " +
              "The — уже знает.",
          ],
        },
        {
          id: "tablica-a-the",
          kind: "table",
          caption: "Первый раз и дальше",
          head: ["Называешь впервые", "Говоришь об этом же", "Перевод второго"],
          rows: [
            ["I've got a meeting.", "The meeting is on Monday.", "Встреча в понедельник."],
            ["I've got a lesson.", "The lesson is on Friday.", "Занятие в пятницу."],
          ],
        },
        {
          // Методист: правило «the со второго раза» курс нарушает в следующих
          // же уроках — «The meeting is at seven» стоит там при первом
          // упоминании. И источник шире: Cambridge Pre A1 Starters даёт
          // «Put the hat on the boy's head» тоже с первого раза. Поэтому
          // второй случай разбирается здесь же, а не замалчивается.
          id: "the-i-bez-pervogo-raza",
          kind: "explain",
          text: [
            "Знать, о чём речь, собеседник может не только из разговора. Иногда и так " +
              "ясно: занятие у вас одно, о встрече вы уже договорились, стол в комнате " +
              "один.",
            "Тогда the ставят сразу, без всякого a: The meeting is on Monday. Так " +
              "построено большинство предложений этого модуля.",
          ],
        },
        {
          id: "otkuda-yasno",
          kind: "table",
          caption: "Откуда собеседник знает, о чём речь",
          head: ["Предложение", "Почему the"],
          rows: [
            ["The meeting is on Monday.", "о встрече вы уже говорили"],
            ["The lesson is on Friday.", "занятие у вас одно"],
          ],
        },
        {
          id: "the-ne-menyaetsya",
          kind: "note",
          tone: "info",
          text:
            "Пишут the всегда одинаково, какой бы звук ни шёл следом: the meeting, the " +
            "artist. Выбирать, как между a и an, не приходится.\n\nА читают двумя " +
            "способами: /ðə/ перед согласным звуком и /ði/ перед гласным — the artist, " +
            "the hour.",
        },
        {
          id: "the-s-pervogo-raza",
          kind: "note",
          tone: "mistake",
          text:
            "The ставят, когда собеседник может понять, о чём речь. Если понять неоткуда, " +
            "нужен a: сказать незнакомому человеку «The meeting is on Monday» — значит " +
            "услышать в ответ «о какой встрече?».\n\nПо-русски артиклей нет, и рука " +
            "тянется ставить the везде. Проверяй себя одним вопросом: понимает ли " +
            "собеседник, о чём я говорю? Если нет — a.",
        },
        {
          id: "primer-a-the",
          kind: "example",
          caption: "Разговор о встрече",
          text:
            "— I've got a meeting.\n— Is the meeting on Monday?\n— No, it isn't. " +
            "It's on Friday.",
          explain:
            "В первой строке встреча названа впервые — a meeting. Во второй собеседник " +
            "спрашивает уже о ней же, поэтому the meeting. Вопрос построен перестановкой, " +
            "как в модуле «Вопрос и краткий ответ».",
        },
        {
          id: "zapis-a-the",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай a и the рядом",
          transcript:
            "I've got a meeting. The meeting is on Monday. I've got a lesson. " +
            "The lesson is on Friday.",
        },
        {
          id: "slovar-a-the",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "the", translation: "тот самый, о котором речь", example: "The meeting is on Monday.", hint: "/ðə/, перед гласным звуком /ði/" },
            { term: "meeting", translation: "встреча", example: "a meeting on Monday", hint: "/ˈmiːtɪŋ/" },
            { term: "lesson", translation: "занятие", example: "a lesson on Friday", hint: "/ˈlesn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vtoroy-raz",
          kind: "gap",
          prompt: "Встреча уже названа. Допиши артикль во втором предложении.",
          before: "I've got a meeting. ",
          after: " meeting is on Monday.",
          answer: "The",
          hint: "Собеседник уже знает, о какой встрече речь.",
          why:
            "The meeting is on Monday. Первый раз встречу назвали через a, дальше о ней " +
            "же говорят the.",
        },
        {
          id: "z2-pervyy-raz",
          kind: "choice",
          prompt: "Ты начинаешь разговор и сообщаешь о занятии. Как сказать?",
          options: [
            { text: "I've got a lesson.", correct: true },
            { text: "I've got the lesson." },
            { text: "I've got lesson." },
          ],
          hint: "Собеседник о занятии ещё не слышал.",
          why:
            "I've got a lesson. Занятие называют впервые, поэтому a. The значил бы, что " +
            "собеседник уже знает, о каком занятии речь.",
        },
        {
          id: "z3-otmetit-oshibki-the",
          kind: "hottext",
          prompt: "Отметь записи, где артикль выбран неверно.",
          parts: [
            { text: "I've got a meeting. The meeting is on Friday.", selectable: true },
            { text: " · " },
            { text: "I've got the meeting. A meeting is on Friday.", selectable: true, correct: true },
            { text: " · " },
            { text: "I've got a lesson. The lesson is on Monday.", selectable: true },
            { text: " · " },
            { text: "I've got the lesson. A lesson is on Monday.", selectable: true, correct: true },
          ],
          hint: "Смотри, какое предложение идёт первым.",
          why:
            "Во второй и четвёртой записи артикли переставлены местами: сначала стоит the, " +
            "хотя называют впервые.",
        },
        {
          id: "z4-sobrat-vtoroe",
          kind: "order",
          prompt: "Первое предложение сказано: I've got a lesson. Собери второе: «Занятие в пятницу».",
          items: ["is", "lesson", "The", "on Friday"],
          answer: [2, 1, 0, 3],
          hint: "О занятии уже сказано, значит впереди стоит the.",
          why:
            "The lesson is on Friday. Порядок обычный: сначала то, о чём речь, потом " +
            "форма be, потом остальное.",
        },
        {
          id: "z5-napisat-paru",
          kind: "short",
          prompt:
            "Занятие уже названо, оно в среду. Запиши второе предложение целиком, начни с The.",
          answer: "The lesson is on Wednesday.",
          exact: true,
          accept: ["The lesson is on Wednesday"],
          hint: "Образец — вторая строка таблицы, день в ней другой.",
          why:
            "The lesson is on Wednesday. Второй раз о том же самом говорят с the.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chasti-sutok",
      title: "Утро, день, вечер, ночь",
      estimatedMinutes: 13,
      outcome: "называть часть суток: in the morning, at night",

      blocks: [
        {
          id: "zachem-chasti-sutok",
          kind: "explain",
          text: [
            "Ты говоришь «seven o'clock», а собеседник не понимает: семь утра или семь " +
              "вечера? Часы в английском идут до двенадцати, поэтому часть суток " +
              "приходится называть отдельно.",
            "Слова знакомы по модулю про приветствие: morning, afternoon, evening. " +
              "Добавляется четвёртое — night, ночь.",
          ],
        },
        {
          id: "tablica-sutok",
          kind: "table",
          caption: "Четыре части суток",
          head: ["Оборот", "Когда", "Пример"],
          // Границы намеренно нестрогие: разбивку суток по часам ни один
          // источник не задаёт, а прежняя таблица оставляла два часа ночи
          // без места вовсе. Нашёл методист.
          rows: [
            ["in the morning", "утром", "at seven in the morning"],
            ["in the afternoon", "днём, после полудня", "at three in the afternoon"],
            ["in the evening", "вечером", "at eight in the evening"],
            ["at night", "ночью", "at two at night"],
          ],
        },
        {
          id: "night-vypadaet",
          kind: "note",
          tone: "mistake",
          text:
            "Три оборота устроены одинаково, а четвёртый выпадает из ряда. Утром, днём и " +
            "вечером — in the morning, in the afternoon, in the evening. Ночью — at night, " +
            "без the и с другим предлогом. Правила здесь нет, оборот запоминают целиком.",
        },
        {
          id: "oborot-celikom",
          kind: "note",
          tone: "info",
          text:
            "Слово the знакомо по уроку «A и the»: оно говорит, что собеседник уже знает, " +
            "о чём речь.\n\nВ оборотах о частях суток спрашивать себя об этом не нужно: " +
            "утро в сутках одно, и the стоит там всегда. Бери оборот целиком, как одно " +
            "длинное слово: in-the-morning.",
        },
        {
          id: "primer-sutok",
          kind: "example",
          caption: "Когда именно",
          text:
            "— The meeting is at seven.\n— At seven in the morning?\n" +
            "— No, at seven in the evening.",
          explain:
            "Часть суток ставят после времени: at seven in the morning. Так и " +
            "переспрашивают, если непонятно: сначала время, потом часть суток.",
        },
        {
          id: "zapis-sutok",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай четыре оборота",
          transcript:
            "In the morning. In the afternoon. In the evening. At night. " +
            "The meeting is at seven in the evening.",
        },
        {
          id: "slovar-sutok",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "morning", translation: "утро", example: "in the morning", hint: "/ˈmɔːnɪŋ/" },
            { term: "afternoon", translation: "день (после полудня)", example: "in the afternoon", hint: "/ˌɑːftəˈnuːn/" },
            { term: "evening", translation: "вечер", example: "in the evening", hint: "/ˈiːvnɪŋ/" },
            { term: "night", translation: "ночь", example: "at night", hint: "/naɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-utrom",
          kind: "gap",
          prompt: "Допиши оборот: в семь утра.",
          before: "at seven ",
          after: "",
          answer: "in the morning",
          hint: "Три слова, и первое из них — предлог.",
          why:
            "At seven in the morning. Часть суток ставят после времени, и оборот берут " +
            "целиком.",
        },
        {
          id: "z2-nochyu",
          kind: "choice",
          prompt: "Как сказать «ночью»?",
          options: [
            { text: "in the night" },
            { text: "at night", correct: true },
            { text: "on night" },
          ],
          hint: "Этот оборот выпадает из ряда трёх остальных.",
          why:
            "At night — без the и с предлогом at. Три остальные части суток идут иначе: " +
            "in the morning, in the afternoon, in the evening.",
        },
        {
          id: "z3-otmetit-oshibki-sutok",
          kind: "hottext",
          prompt: "Отметь обороты, записанные с ошибкой.",
          parts: [
            { text: "in the evening", selectable: true },
            { text: " · " },
            { text: "in the night", selectable: true, correct: true },
            { text: " · " },
            { text: "at the morning", selectable: true, correct: true },
            { text: " · " },
            { text: "in the afternoon", selectable: true },
          ],
          hint: "Один оборот идёт с at и без the, три остальных — с in и с the.",
          why:
            "Ночью — at night, без the. Утром — in the morning, а не at the morning. " +
            "Остальные два записаны верно.",
        },
        {
          id: "z4-sobrat-vremya-sutok",
          kind: "order",
          prompt: "Собери фразу: «в три часа дня».",
          items: ["the afternoon", "three", "in", "at"],
          answer: [3, 1, 2, 0],
          hint: "Сначала время, потом часть суток.",
          why:
            "At three in the afternoon. Порядок жёсткий: предлог, время, потом оборот о " +
            "части суток.",
        },
        {
          id: "z5-vecherom-celikom",
          kind: "short",
          prompt: "Встреча в восемь вечера. Запиши предложение целиком, начни с The meeting.",
          answer: "The meeting is at eight in the evening.",
          exact: true,
          accept: ["The meeting is at eight in the evening"],
          hint: "Образец есть в примере урока, замени время и часть суток.",
          why:
            "The meeting is at eight in the evening. Форма is стоит после подлежащего, " +
            "дальше время, дальше часть суток.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "at-in-on",
      title: "At, in, on: какой предлог когда",
      estimatedMinutes: 14,
      outcome: "ставить at, in или on перед словом о времени",

      blocks: [
        {
          id: "zachem-predlogi",
          kind: "explain",
          text: [
            "В прошлых уроках предлоги уже стояли: on Monday, in May, at seven. Каждый " +
              "раз свой — и это не случайность.",
            "Предлог выбирает не событие, а слово, которое идёт сразу после него. " +
              "At — перед часами: at seven. On — перед днём и датой: on Monday. " +
              "In — перед месяцем и годом: in May.",
          ],
        },
        {
          id: "tablica-predlogov",
          kind: "table",
          caption: "Три предлога",
          head: ["Предлог", "С чем", "Пример"],
          rows: [
            ["at", "точное время", "at seven o'clock, at half past six"],
            ["on", "день недели, дата", "on Monday, on 5 May"],
            ["in", "месяц, год, часть суток", "in May, in 2026, in the morning"],
          ],
        },
        {
          // В уроке 2 ученик выучил in May, а здесь в одной таблице видит и
          // in May, и on 5 May. Шага между ними не было — нашёл редактор.
          id: "mesyac-ili-data",
          kind: "note",
          tone: "info",
          text:
            "Смотри на то, что названо. Назван только месяц — in May. Названо число — " +
            "on 5 May. Число делает из месяца день, а перед днём стоит on.",
        },
        {
          id: "lestnica-predlogov",
          kind: "example",
          caption: "Одно событие, три предлога",
          text:
            "The meeting is at seven.\nThe meeting is on Friday.\n" +
            "The meeting is in May.",
          explain:
            "Речь об одной и той же встрече, а предлог каждый раз другой. Его выбирает " +
            "не встреча, а то слово, которое идёт следом: seven, Friday, May.",
        },
        {
          id: "at-night-isklyuchenie",
          kind: "note",
          tone: "mistake",
          text:
            "Одно исключение уже встречалось: at night. По правилу ждали бы in, как у " +
            "остальных частей суток, но здесь стоит at. Это единственный оборот модуля, " +
            "который правилу не подчиняется.",
        },
        {
          id: "predlog-ne-perevoditsya",
          kind: "note",
          tone: "info",
          text:
            "По-русски во всех трёх случаях было бы «в»: в семь, в пятницу, в мае. " +
            "Поэтому подобрать предлог по переводу нельзя — его выбирают по слову, " +
            "которое стоит после.",
        },
        {
          id: "zapis-predlogov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предлога подряд",
          transcript:
            "At seven o'clock. On Monday. In May. At night. In the morning.",
        },
        {
          id: "slovar-predlogov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "at", translation: "в (о точном времени)", example: "at six o'clock", hint: "/æt/" },
            { term: "on", translation: "в (о дне и дате)", example: "on Friday", hint: "/ɒn/" },
            { term: "in", translation: "в (о месяце и годе)", example: "in June", hint: "/ɪn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-predlog-pered-dnyom",
          kind: "gap",
          prompt: "Допиши предлог: занятие в четверг.",
          before: "The lesson is ",
          after: " Thursday.",
          answer: "on",
          hint: "Дальше идёт день недели.",
          why: "On Thursday. Перед днём недели ставят on.",
        },
        {
          id: "z2-predlog-pered-vremenem",
          kind: "gap",
          prompt: "Допиши предлог: занятие в пять часов.",
          before: "The lesson is ",
          after: " five o'clock.",
          answer: "at",
          hint: "Дальше идёт точное время.",
          why: "At five o'clock. Перед точным временем ставят at.",
        },
        {
          id: "z3-sopostavit-predlogi",
          kind: "match",
          prompt: "Сопоставь слово и предлог, который перед ним стоит.",
          left: ["Monday", "June", "half past six"],
          right: ["in", "at", "on"],
          answer: [2, 0, 1],
          hint: "Предлог выбирает слово, которое идёт сразу после него.",
          why:
            "On Monday — день. In June — месяц. At half past six — точное время.",
        },
        {
          id: "z4-otmetit-oshibki-predlogov",
          kind: "hottext",
          prompt: "Отметь записи с неверным предлогом.",
          parts: [
            { text: "at nine o'clock", selectable: true },
            { text: " · " },
            { text: "in Friday", selectable: true, correct: true },
            { text: " · " },
            { text: "on December", selectable: true, correct: true },
            { text: " · " },
            { text: "in the evening", selectable: true },
          ],
          hint: "Проверь по таблице, что идёт после предлога: время, день или месяц.",
          why:
            "Перед днём недели нужен on: on Friday. Перед месяцем — in: in December. " +
            "Остальные две записаны верно.",
        },
        {
          id: "z5-tri-predloga-v-odnom",
          kind: "short",
          prompt:
            "Встреча в понедельник. Запиши предложение целиком, начни с The meeting.",
          answer: "The meeting is on Monday.",
          exact: true,
          accept: ["The meeting is on Monday"],
          hint: "Перед днём недели стоит on, а сам день — с заглавной буквы.",
          why:
            "The meeting is on Monday. Предлог выбирает слово, которое идёт следом, — " +
            "здесь это день недели.",
        },
        {
          // Раньше вопрос спрашивал, ПОЧЕМУ говорят at night, и верный вариант
          // дословно пересказывал врезку — проверялась память о формулировке, а
          // подсказка указывала на ответ. Английского в задании не было вовсе.
          // Нашёл методист.
          id: "z6-pochemu-at-night",
          kind: "choice",
          prompt: "В какой записи оба предлога стоят верно?",
          options: [
            { text: "at eleven in the night" },
            { text: "in eleven at night" },
            { text: "at eleven at night", correct: true },
          ],
          hint: "Перед точным временем предлог один и тот же. Ночь идёт не как вечер.",
          why:
            "At eleven at night. Перед временем стоит at по общему правилу. Оборот о " +
            "ночи тоже идёт с at, в отличие от in the morning и in the evening.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kogda-i-vo-skolko",
      title: "Когда и во сколько",
      estimatedMinutes: 13,
      outcome: "спрашивать о дне и о времени: When и What time",

      blocks: [
        {
          id: "zachem-sprosit-o-vremeni",
          kind: "explain",
          text: [
            "Тебя позвали на встречу, но не сказали, когда она. Спрашивают об этом двумя " +
              "разными способами: When и What time. Отвечают на них тоже разное.",
            "When? — «когда»: в ответ ждут день или месяц. What time? — «во сколько»: в " +
              "ответ ждут часы и минуты.",
          ],
        },
        {
          id: "tablica-voprosov-o-vremeni",
          kind: "table",
          caption: "Два вопроса и что на них отвечают",
          head: ["Вопрос", "Перевод", "Ответ"],
          rows: [
            ["When is the meeting?", "Когда встреча?", "On Friday."],
            ["What time is the meeting?", "Во сколько встреча?", "At seven o'clock."],
            ["When is your birthday?", "Когда у тебя день рождения?", "In May."],
            ["What time is it?", "Сколько времени?", "It's half past six."],
          ],
        },
        {
          id: "poryadok-v-voprose",
          kind: "explain",
          text: [
            "Устроены оба вопроса одинаково. Сначала сам вопрос — When или What time, — потом форма " +
              "be, потом то, о чём спрашивают: When is the meeting?",
            "Это тот же порядок, что в модуле про вопросы: форма be встаёт перед " +
              "подлежащим. Новое здесь только слово в самом начале.",
          ],
        },
        {
          id: "otvet-s-predlogom",
          kind: "note",
          tone: "mistake",
          text:
            "В ответе предлог не пропадает: не «Friday», а «On Friday». Не «seven», а " +
            "«At seven». Полный ответ был бы The meeting is on Friday. Коротко говорят On Friday — от " +
            "предложения остаётся конец вместе с предлогом.",
        },
        {
          id: "primer-dvuh-voprosov",
          kind: "example",
          caption: "Оба вопроса подряд",
          text:
            "— When is the lesson?\n— On Wednesday.\n— And what time?\n" +
            "— At a quarter past four.",
          explain:
            "Сначала спросили про день, потом про время. Во втором вопросе слово is не " +
            "повторяют: «And what time?» — этого достаточно, потому что речь всё ещё об " +
            "уроке.",
        },
        {
          id: "zapis-voprosov-o-vremeni",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай два вопроса и ответы",
          transcript:
            "When is the lesson? On Wednesday. What time is the lesson? At a quarter past four.",
        },
        {
          id: "slovar-voprosov-o-vremeni",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "when", translation: "когда", example: "When is the meeting?", hint: "/wen/" },
            { term: "what time", translation: "во сколько", example: "What time is it?", hint: "/wɒt taɪm/" },
            { term: "free", translation: "свободен", example: "I'm free on Friday.", hint: "/friː/" },
            { term: "busy", translation: "занят", example: "I'm busy at six.", hint: "/ˈbɪzi/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoy-vopros",
          kind: "choice",
          prompt: "Ты хочешь узнать, в какой день встреча. Что спросить?",
          options: [
            { text: "What time is the meeting?" },
            { text: "When is the meeting?", correct: true },
            { text: "Where is the meeting?" },
          ],
          hint: "Спрашиваешь про день, а не про часы и не про место.",
          why:
            "When is the meeting? — вопрос о дне. What time спрашивает про часы, where — " +
            "про место.",
        },
        {
          id: "z2-otvetit-s-predlogom",
          kind: "gap",
          prompt: "Тебя спросили: «When is your birthday?» Твой день рождения в июне. Допиши ответ.",
          before: "",
          after: " June.",
          answer: "In",
          exact: true,
          hint: "Полный ответ был бы My birthday is in June. Оставь конец вместе с предлогом.",
          why:
            "In June. Предлог в ответе не пропадает, а с заглавной буквы он потому, что " +
            "стоит первым.",
        },
        {
          id: "z3-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Во сколько занятие?»",
          items: ["the lesson", "time", "is", "What"],
          answer: [3, 1, 2, 0],
          hint: "Сначала вопросительные слова, потом форма be.",
          why:
            "What time is the lesson? Порядок тот же, что в модуле про вопросы: форма be " +
            "стоит перед тем, о чём спрашивают.",
        },
        {
          id: "z4-otmetit-otvety",
          kind: "hottext",
          prompt: "Отметь ответы, которые подходят на вопрос «What time is the meeting?»",
          parts: [
            { text: "On Monday.", selectable: true },
            { text: " · " },
            { text: "At six o'clock.", selectable: true, correct: true },
            { text: " · " },
            { text: "In May.", selectable: true },
            { text: " · " },
            { text: "At half past nine.", selectable: true, correct: true },
          ],
          hint: "Спрашивают про часы и минуты, а не про день и не про месяц.",
          why:
            "At six o'clock и at half past nine отвечают про время. «On Monday» — про " +
            "день, «In May» — про месяц: это ответы на When.",
        },
        {
          id: "z5-sprosit-o-vremeni",
          kind: "short",
          prompt: "Спроси у собеседника, во сколько занятие. Запиши вопрос целиком.",
          answer: "What time is the lesson?",
          exact: true,
          accept: ["What time is the lesson"],
          hint: "Образец есть в таблице урока, замени только последнее слово.",
          why:
            "What time is the lesson? Вопросительные слова впереди, за ними форма be, " +
            "потом то, о чём спрашивают.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dogovoritsya-o-vstreche",
      title: "Договориться о встрече",
      estimatedMinutes: 14,
      outcome: "договариваться о встрече: называть день, время и часть суток",

      blocks: [
        {
          // Раньше урок называл ещё и место — At the school. Методист показал,
          // что предлог места стоит у Cambridge отдельной строкой и идёт в
          // модуле 12: ученик, выучивший «at — перед часами», на «at the school»
          // споткнётся. Место убрано из итога, шагов и заданий.
          id: "zachem-dogovoritsya",
          kind: "explain",
          text: [
            "Ты пишешь знакомому: «Давай встретимся». Он отвечает: «Когда?»",
            "Чтобы ответить, надо назвать три вещи: день, время и часть суток — утро " +
              "это или вечер. Если не назвать хоть одну, собеседник переспросит.",
          ],
        },
        {
          id: "shagi-ugovora",
          kind: "table",
          caption: "Как договариваются о встрече",
          head: ["Шаг", "Что говорят", "Пример"],
          rows: [
            ["1", "спросить, свободен ли собеседник", "Are you free on Friday?"],
            ["2", "ответить", "Yes, I am. / No, I'm not."],
            ["3", "спросить о времени", "What time?"],
            ["4", "назвать время", "At six."],
            ["5", "уточнить часть суток", "In the evening."],
            ["6", "подтвердить", "OK. See you on Friday!"],
          ],
        },
        {
          id: "polnyy-ugovor",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Hello! Are you free on Friday?\n— Yes, I am. What time?\n" +
            "— At six.\n— In the morning?\n— No, in the evening.\n" +
            "— OK. See you on Friday!",
          explain:
            "Каждая реплика добавляет одно сведение: день, время, часть суток. Вопрос «What " +
            "time?» здесь короткий — из модуля про вопросы известно, что повторять всю " +
            "фразу не нужно.",
        },
        {
          id: "gde-ugovor-rvyotsya",
          kind: "note",
          tone: "mistake",
          text:
            "Тут договорённость и рвётся. «At six» без in the evening " +
            "можно понять и как шесть утра. Если время может значить и то и другое — " +
            "назови часть суток сразу.",
        },
        {
          id: "see-you-s-dnyom",
          kind: "note",
          tone: "info",
          text:
            "После оборота see you из модуля про приветствие можно назвать день: See you on " +
            "Friday. Предлог тот же самый, что и везде перед днём недели.",
        },
        {
          // Урок остался без словаря, а слово school стояло в таблице, примере
          // и трёх заданиях без перевода. Нашёл редактор.
          id: "slovar-vstrechi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "see you", translation: "увидимся", example: "See you on Friday!", hint: "/ˈsiː juː/" },
            { term: "OK", translation: "хорошо, договорились", example: "OK. See you!", hint: "/ˌəʊˈkeɪ/" },
            { term: "good", translation: "хорошо (отклик на сказанное)", example: "Good. See you!", hint: "/gʊd/" },
          ],
        },
        {
          id: "zapis-ugovora",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор целиком",
          transcript:
            "Are you free on Friday? — Yes, I am. What time? — At six. — In the morning? " +
            "— No, in the evening. — OK. See you on Friday!",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-ugovor",
          kind: "order",
          prompt: "Расставь реплики разговора по порядку.",
          items: [
            "At six in the evening.",
            "Are you free on Friday?",
            "See you on Friday!",
            "Yes, I am. What time?",
          ],
          answer: [1, 3, 0, 2],
          hint: "Сначала спрашивают про день, прощаются в самом конце.",
          why:
            "Вопрос о дне, ответ со встречным вопросом, время, прощание. Назвать время " +
            "раньше, чем выяснили день, невозможно.",
        },
        {
          id: "z2-dopisat-chast-sutok",
          kind: "gap",
          prompt: "Встреча в шесть вечера. Допиши то, без чего время можно понять неверно.",
          before: "At six ",
          after: ".",
          answer: "in the evening",
          hint: "Три слова. Оборот целиком есть в уроке «Утро, день, вечер, ночь».",
          why:
            "At six in the evening. Без части суток «at six» можно понять и как шесть " +
            "утра — на этом договорённость и рвётся.",
        },
        {
          id: "z3-otmetit-nepolnoe",
          kind: "hottext",
          prompt: "Отметь договорённости, после которых встреча не состоится.",
          parts: [
            { text: "On Friday at six in the evening.", selectable: true },
            { text: " · " },
            { text: "At six in the evening.", selectable: true, correct: true },
            { text: " · " },
            { text: "On Monday at nine.", selectable: true, correct: true },
            { text: " · " },
            { text: "On Sunday at nine in the morning.", selectable: true },
          ],
          hint: "Нужны три сведения: день, время и часть суток.",
          why:
            "Во второй не назван день. В третьей есть день и время, но неясно, девять " +
            "утра или девять вечера. Остальные две называют всё.",
        },
        {
          id: "z4-otvetit-na-free",
          kind: "short",
          prompt:
            "Тебя спросили: «Are you free on Sunday?» Этот день у тебя свободен. Ответь кратко, двумя словами после Yes.",
          answer: "Yes, I am.",
          exact: true,
          accept: ["Yes, I am"],
          hint: "Краткий ответ из модуля про вопросы: Yes, и дальше два слова.",
          why:
            "Yes, I am. Полную форму здесь не сокращают: «Yes, I'm» невозможно, короткая " +
            "форма в конце не ставится.",
        },
        {
          id: "z5-nazvat-vstrechu",
          kind: "short",
          prompt:
            "Назначь встречу на вторник, в половине восьмого вечера. Запиши предложение целиком, начни с The meeting.",
          answer: "The meeting is on Tuesday at half past seven in the evening.",
          exact: true,
          accept: ["The meeting is on Tuesday at half past seven in the evening"],
          hint: "Порядок такой: день, потом время, потом часть суток.",
          why:
            "The meeting is on Tuesday at half past seven in the evening. Три предлога " +
            "подряд, и каждый выбран по слову, которое идёт следом.",
        },
        {
          id: "z6-proiznesti-ugovor",
          kind: "speak",
          prompt: "Произнеси вслух договорённость о встрече: пятница, шесть вечера.",
          phrase: "See you on Friday at six in the evening!",
          translation: "Увидимся в пятницу в шесть вечера!",
          hint: "Назови всё подряд: день, время, часть суток.",
          why:
            "Такой фразой договорённость и закрывают: день, время, часть суток. Она ждёт " +
            "тебя вслух, а не на письме.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 22, из них 15 требуют написать ответ самому. Итогов восемь,
  // на каждый приходится не меньше двух вопросов, поэтому спрашиваем восемь.
  // =======================================================================
  quiz: {
    // Девять итогов — девять вопросов, как в модуле «Числа, возраст, цена».
    // При восьми один итог остался бы неспрошенным, и какой именно — вышло бы
    // случайно.
    ask: 9,
    passRatio: 0.7,
    questions: [
      {
        id: "q-den-posle-vtornika",
        kind: "short",
        outcome: "называть дни недели и писать их с заглавной буквы",
        prompt: "Какой день идёт сразу после Tuesday? Запиши его.",
        answer: "Wednesday",
        exact: true,
        why: "Wednesday. Буква d в нём не звучит, но пишется.",
      },
      {
        id: "q-den-s-zaglavnoy",
        kind: "gap",
        outcome: "называть дни недели и писать их с заглавной буквы",
        prompt: "Допиши день недели: суббота.",
        before: "I'm free on ",
        after: ".",
        answer: "Saturday",
        exact: true,
        why: "Saturday, с заглавной буквы: дни недели в английском пишутся так всегда.",
      },
      {
        id: "q-poryadok-dney-quiz",
        kind: "order",
        outcome: "называть дни недели и писать их с заглавной буквы",
        prompt: "Расставь дни в том порядке, в каком они идут в неделе.",
        items: ["Friday", "Sunday", "Monday", "Wednesday"],
        answer: [2, 3, 0, 1],
        why: "Monday, Wednesday, Friday, Sunday. Неделя начинается с понедельника.",
      },
      {
        id: "q-zapisat-datu-quiz",
        kind: "gap",
        outcome: "называть месяцы и записывать дату цифрой и месяцем",
        prompt: "Запиши дату в бланке: третье октября.",
        before: "Date: 3 ",
        after: "",
        answer: "October",
        exact: true,
        why: "3 October. День в бланке остаётся цифрой, а месяц пишут словом и с заглавной буквы.",
      },
      {
        id: "q-mesyac-rozhdeniya-quiz",
        kind: "short",
        outcome: "называть месяцы и записывать дату цифрой и месяцем",
        prompt: "Твой день рождения в декабре. Запиши предложение целиком, начни с My birthday.",
        answer: "My birthday is in December.",
        exact: true,
        accept: ["My birthday is in December"],
        why: "My birthday is in December. Перед месяцем ставят in, сам месяц — с заглавной.",
      },
      {
        // Раньше здесь спрашивали, какой месяц девятый: ученик отвечал по
        // русскому календарю, ни слова по-английски не производя, и к своему
        // итогу вопрос отношения не имел. Нашёл методист.
        id: "q-mesyac-po-nomeru",
        kind: "short",
        outcome: "называть месяцы и записывать дату цифрой и месяцем",
        prompt: "Собеседник диктует дату: восьмое сентября. Запиши её так, как пишут в бланке.",
        answer: "8 September",
        exact: true,
        why: "8 September. Сначала число, потом месяц с заглавной буквы.",
      },
      {
        id: "q-celyy-chas",
        kind: "short",
        outcome: "говорить, который час: It's seven o'clock",
        prompt: "На часах 11:00. Запиши ответ на вопрос «What time is it?» целиком.",
        answer: "It's eleven o'clock.",
        exact: true,
        accept: ["It's eleven o'clock", "It is eleven o'clock.", "It is eleven o'clock"],
        why: "It's eleven o'clock. Слово o'clock стоит после числа.",
      },
      {
        // Раньше все три варианта были по-русски с цифрами: английского в
        // вопросе не было вовсе. Нашёл методист.
        id: "q-kogda-oclock",
        kind: "choice",
        outcome: "говорить, который час: It's seven o'clock",
        prompt: "На часах 2:00. Какая запись верна?",
        options: [
          { text: "It's o'clock two." },
          { text: "It's two hour." },
          { text: "It's two o'clock.", correct: true },
        ],
        why:
          "It's two o'clock. Слово o'clock стоит после числа. Hour — это час как " +
          "единица времени, во «сколько времени» оно не годится.",
      },
      {
        id: "q-polovina-quiz",
        kind: "short",
        outcome: "называть половину и четверть часа",
        prompt: "На часах 4:30. Запиши тремя словами: два слова и название часа.",
        answer: "half past four",
        accept: ["Half past four", "It's half past four.", "It's half past four"],
        why:
          "Half past four. По-русски это «полпятого», а по-английски называют час, " +
          "после которого прошла половина.",
      },
      {
        id: "q-chetvert-quiz",
        kind: "gap",
        outcome: "называть половину и четверть часа",
        prompt: "На часах 8:45. Допиши недостающее слово.",
        before: "It's a quarter ",
        after: " nine.",
        answer: "to",
        why: "A quarter to nine. Минуты остались до девяти, значит to.",
      },
      {
        // Раньше ответом были цифры, и ученик не производил ни одного
        // английского слова. Нашёл методист.
        id: "q-vremya-ciframi",
        kind: "short",
        outcome: "называть половину и четверть часа",
        // Время 3:20 в уроке уже разобрано с готовым ответом. Взято другое.
        prompt: "На часах 5:25. Запиши, который час: три слова.",
        answer: "twenty-five past five",
        accept: [
          "Twenty-five past five",
          "It's twenty-five past five.",
          "It's twenty-five past five",
          "twenty five past five",
        ],
        why: "Twenty-five past five. Двадцать пять минут прошли после пяти, значит past.",
      },
      {
        id: "q-past-ili-to-quiz",
        kind: "choice",
        outcome: "называть половину и четверть часа",
        // Время 6:50 разобрано в уроке вместе с ответом: ученик узнавал цифры,
        // а не считал минуты. Взято другое.
        prompt: "На часах 8:40. Какое слово нужно?",
        options: [
          { text: "past" },
          { text: "to", correct: true },
          { text: "o'clock" },
        ],
        why: "Twenty to nine. До девяти осталось двадцать минут, значит to.",
      },
      {
        id: "q-the-po-situacii",
        kind: "choice",
        outcome: "выбирать a или the: I've got a meeting — The meeting is on Monday",
        prompt: "О встрече вы с собеседником уже договорились. Как о ней сказать?",
        options: [
          { text: "The meeting is on Monday.", correct: true },
          { text: "A meeting is on Monday." },
          { text: "Meeting is on Monday." },
        ],
        why:
          "The meeting is on Monday. Собеседник знает, о какой встрече речь, — значит " +
          "the, даже если вслух её ещё не называли.",
      },
      {
        id: "q-pervyy-raz-quiz",
        kind: "short",
        outcome: "выбирать a или the: I've got a meeting — The meeting is on Monday",
        prompt:
          "Ты впервые говоришь знакомому, что у тебя есть занятие. Запиши предложение целиком.",
        answer: "I've got a lesson.",
        exact: true,
        accept: ["I've got a lesson", "I have got a lesson.", "I have got a lesson"],
        why:
          "I've got a lesson. Занятие называют впервые, и понять, о каком речь, " +
          "собеседнику неоткуда — поэтому a.",
      },
      {
        id: "q-artikl-pri-pervom",
        kind: "gap",
        outcome: "выбирать a или the: I've got a meeting — The meeting is on Monday",
        prompt: "Ты впервые говоришь о занятии. Допиши артикль.",
        before: "I've got ",
        after: " lesson.",
        answer: "a",
        why:
          "I've got a lesson. О занятии говорят впервые, и собеседник о нём ещё не " +
          "знает.",
      },
      {
        // Раньше это был дословный близнец задания урока: тот же вопрос и те
        // же три варианта, переставленные местами. Нашёл методист.
        id: "q-nochyu-quiz",
        kind: "short",
        outcome: "называть часть суток: in the morning, at night",
        prompt: "Поезд уходит в два часа ночи. Допиши время целиком после слова at: два слова и оборот о ночи.",
        answer: "at two at night",
        accept: ["At two at night", "at two at night."],
        hint: "Оборот о ночи идёт не так, как три остальных.",
        why:
          "At two at night. Здесь два раза at: первый перед временем, второй внутри " +
          "оборота о ночи.",
      },
      {
        id: "q-utrom-quiz",
        kind: "gap",
        outcome: "называть часть суток: in the morning, at night",
        prompt: "Допиши оборот: в девять утра.",
        before: "at nine ",
        after: "",
        answer: "in the morning",
        why: "At nine in the morning. Часть суток ставят после времени.",
      },
      {
        id: "q-vecher-celikom",
        kind: "short",
        outcome: "называть часть суток: in the morning, at night",
        prompt: "Занятие в семь вечера. Запиши предложение целиком, начни с The lesson.",
        answer: "The lesson is at seven in the evening.",
        exact: true,
        accept: ["The lesson is at seven in the evening"],
        why: "The lesson is at seven in the evening. Сначала время, потом часть суток.",
      },
      {
        id: "q-predlog-pered-mesyacem",
        kind: "gap",
        outcome: "ставить at, in или on перед словом о времени",
        prompt: "Допиши предлог: встреча в марте.",
        before: "The meeting is ",
        after: " March.",
        answer: "in",
        why: "In March. Перед месяцем ставят in.",
      },
      {
        // Раньше — та же формулировка, что в задании урока, с заменой трёх
        // слов. Теперь вопрос требует произвести всю цепочку. Нашёл методист.
        id: "q-sopostavit-predlogi-quiz",
        kind: "short",
        outcome: "ставить at, in или on перед словом о времени",
        // Порядок кусков модуль нигде не задаёт, а «at nine on Sunday in June» —
        // такой же верный английский. Условие теперь называет порядок прямо, и
        // обратный тоже принимается. Нашёл методист.
        prompt:
          "Занятие в июне, в воскресенье, в девять часов. Запиши три куска подряд, " +
          "каждый со своим предлогом: сначала месяц, потом день, потом время.",
        answer: "in June on Sunday at nine",
        accept: [
          "In June on Sunday at nine",
          "in June, on Sunday, at nine",
          "at nine on Sunday in June",
          "at nine, on Sunday, in June",
        ],
        hint: "Три предлога, и каждый выбирает слово, которое идёт следом.",
        why:
          "In June on Sunday at nine. Месяц берёт in, день — on, точное время — at.",
      },
      {
        id: "q-oshibka-v-predloge",
        kind: "hottext",
        outcome: "ставить at, in или on перед словом о времени",
        prompt: "Отметь записи с неверным предлогом.",
        parts: [
          { text: "on Tuesday", selectable: true },
          { text: " · " },
          { text: "at June", selectable: true, correct: true },
          { text: " · " },
          { text: "in the afternoon", selectable: true },
          { text: " · " },
          { text: "in half past five", selectable: true, correct: true },
        ],
        why:
          "Перед месяцем нужен in: in June. Перед точным временем — at: at half past " +
          "five. Остальные две записаны верно.",
      },
      {
        id: "q-kakoy-vopros-quiz",
        kind: "choice",
        outcome: "спрашивать о дне и о времени: When и What time",
        prompt: "Ты хочешь узнать, во сколько занятие. Что спросить?",
        options: [
          { text: "What time is the lesson?", correct: true },
          { text: "When is the lesson?" },
          { text: "Where is the lesson?" },
        ],
        why:
          "What time спрашивает про часы. When спрашивает про день, where — про место.",
      },
      {
        // Раньше заглавная буква у «When» выдавала первую позицию, а элементов
        // было три. Теперь все части со строчной, и их четыре. Нашёл методист.
        id: "q-sobrat-vopros-quiz",
        kind: "order",
        outcome: "спрашивать о дне и о времени: When и What time",
        // Собирали ровно то предложение, что и в задании урока. Взято другое —
        // о встрече.
        prompt: "Собери вопрос «во сколько встреча?». Заглавную букву поставишь сам.",
        items: ["meeting", "time", "is", "what", "the"],
        answer: [3, 1, 2, 4, 0],
        why:
          "What time is the meeting? Сначала сам вопрос — what time, — потом форма be, " +
          "потом то, о чём спрашивают.",
      },
      {
        // Раньше вопросительный знак стоял только у одной реплики, и она одна
        // могла быть первой. Нашёл методист.
        id: "q-ugovor-poryadok",
        kind: "order",
        outcome: "договариваться о встрече: называть день, время и часть суток",
        prompt: "Расставь реплики разговора по порядку.",
        items: [
          "In the evening.",
          "At seven. Is that OK?",
          "Are you free on Monday? What time?",
        ],
        answer: [2, 1, 0],
        why:
          "Сначала спрашивают про день и время, потом называют час и переспрашивают, " +
          "потом уточняют часть суток. Три реплики, и в двух из них есть вопрос.",
      },
      {
        id: "q-nazvat-vstrechu-quiz",
        kind: "short",
        outcome: "договариваться о встрече: называть день, время и часть суток",
        prompt:
          "Назначь встречу на среду, в четверть шестого вечера. Запиши предложение целиком, начни с The meeting.",
        answer: "The meeting is on Wednesday at a quarter past five in the evening.",
        exact: true,
        accept: ["The meeting is on Wednesday at a quarter past five in the evening"],
        why:
          "The meeting is on Wednesday at a quarter past five in the evening. День, " +
          "время, часть суток — и свой предлог перед каждым.",
      },
    ],
  },
};

export default module;
