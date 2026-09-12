import type { Module } from "@/lib/content/types";

/**
 * МОДУЛЬ 16 «Как часто». Наречия частоты: always, usually, often, sometimes,
 * never, и точная частота оборотом every.
 *
 * Замысел целиком — `docs/beginner-2/plan-modul-16.md`, разбор второго
 * методиста — `docs/beginner-2/razbor-zamysla-modul-16.md`, ответы владельца —
 * `docs/beginner-2/otvety-vladeltsa-13-sentyabrya.md`. Замысел прошёл круг:
 * написан, разобран (одиннадцать находок), доработан, четыре вопроса владельцу
 * закрыты 13 сентября 2026.
 *
 * ВЕСЬ ВИДИМЫЙ РУССКИЙ ТЕКСТ СТОИТ ЗАГЛУШКАМИ «ПИШЕТ РЕДАКТОР». Сборщик не пишет
 * ни объяснений, ни условий, ни разборов: решение владельца от 5 сентября 2026
 * — «НИЧЕГО НЕ ПИШИ. Пусть весь урок пишут редактор и методист». Английские
 * строки и переводы рядом с ними взяты из замысла дословно: их назвал методист.
 *
 * ---------------------------------------------------------------------------
 * ТРИ ВЕЩИ ШАПКИ — названы до первой строки редактора (замысел, раздел 4)
 * ---------------------------------------------------------------------------
 *
 * 1. ИМЯ ГЛАВНОЙ ВЕЩИ — «наречие частоты». Настоящий термин русской грамматики,
 *    в курсе вводится впервые. РЕШЕНО ВЛАДЕЛЬЦЕМ 13 сентября 2026: «Называть» —
 *    одной строкой внутри случая 5 урока 1, без отдельного экрана. Решение
 *    8 сентября о `very` этим не отменяется: там класс был побочным.
 * 2. ЗАИМСТВОВАННЫЕ ТЕРМИНЫ: «глагол», «оборот», «предлог», «артикль» — модуль
 *    13; «отрицание» — модуль 14; «утверждение», «короткий ответ» — модуль 15.
 *    Слова «подлежащее» в курсе нет, и модуль его не заводит: курс говорит
 *    «слово о том, кто делает» и «перед глаголом».
 * 3. ОБЩЕЕ СЛОВО — «частота». Слово модуля, а не термин: определять его нельзя.
 *
 * ---------------------------------------------------------------------------
 * ТРИ РАСХОЖДЕНИЯ ИСТОЧНИКОВ — ИХ ЧИТАЕТ СЛЕДУЮЩИЙ ПРОВЕРЯЮЩИЙ (замысел, 6.3)
 * ---------------------------------------------------------------------------
 *
 * БЕЗ ЭТИХ СТРОК СЛЕДУЮЩИЙ ПРОВЕРЯЮЩИЙ СНИМЕТ ЗАКОННОЕ как превышение ступени и
 * будет прав по своему источнику.
 *
 * 1. МЕСТО НАРЕЧИЯ ПОСЛЕ ФОРМЫ BE — СВЕРХ СТУПЕНИ, ВЗЯТО РЕШЕНИЕМ ВЛАДЕЛЬЦА ОТ
 *    13 СЕНТЯБРЯ 2026 (урок 4). English Grammar Profile кладёт его на A2:
 *    ADVERBS / position, FORM: MID POSITION (`1741163706938x493393825408503100`),
 *    «…and after modal verbs, auxiliary verbs and be»; графа A1 той же
 *    подкатегории даёт только место между подлежащим и глаголом. Cambridge,
 *    руководство младших ступеней, печатает такие строки лишь в текстах A2
 *    Flyers. `I don't usually work` в модуль не входит по причине СОСТАВА: в
 *    модуле уже есть одно место сверх ступени, второго не ставим. Ступень
 *    причиной не называется — графа у обоих мест одна.
 * 2. `never`, `usually`, `often` — РАСХОЖДЕНИЕ ИСТОЧНИКОВ, ВЗЯТЫ ПО ПРАВИЛУ ОТ
 *    10 СЕНТЯБРЯ И РЕШЕНИЮ ОТ 13 СЕНТЯБРЯ. English Grammar Profile, ADVERBS /
 *    types and meanings, USE: FREQUENCY, A2 (`1741163706722x916354910575195800`):
 *    «an increasing range of adverbs ('usually', 'often', 'never', 'weekly')»; на
 *    A1 — только `always`, `sometimes`. `never` стоит на A1 Movers у Cambridge
 *    дважды: тематический словник `Time`, с. 83, и список грамматики, с. 52
 *    («She never eats meat.»). `usually` и `often` на A1 даёт только Oxford 3000;
 *    у Cambridge они не найдены ни в одном списке.
 * 3. НАСТОЯЩЕЕ ВРЕМЯ С НАРЕЧИЕМ ЧАСТОТЫ — У ENGLISH GRAMMAR PROFILE ЕСТЬ ГРАФА
 *    A2. PRESENT / present simple, FORM: WITH ADVERBS OF INDEFINITE FREQUENCY
 *    (`1741163713633x403618875526840800`). Графы A1 в этой подкатегории нет, а
 *    все четыре графы A1 из `egp` модуля показывают то же сочетание своими
 *    примерами. Запрета из графы A2 не выводим: графа — это разрешение.
 *
 * ---------------------------------------------------------------------------
 * ЧЕГО В МОДУЛЕ НЕТ — с адресами (замысел, 7.2 и 16.7)
 * ---------------------------------------------------------------------------
 *
 * - `How often…?` — ни один источник не даёт на ступени (EGP: нет во всём
 *   файле; Young Learners: нет; A2 Key, с. 52 — на A2). Адрес — Elementary.
 * - `once a week`, `twice a week` — единственное место в EGP стоит на A2.
 * - `Does he always work?` — третьего лица графа A1 не называет, а `does`
 *   модуль 15 взял расхождением; складывать два спорных места нельзя.
 * - дни недели — тема `Time` отдаёт их модулю 18. НИ ОДНА СТРОКА МОДУЛЯ НЕ
 *   НАЗЫВАЕТ ДНЯ НЕДЕЛИ.
 * - шкала «always — usually — often — sometimes — never». РЕШЕНО ВЛАДЕЛЬЦЕМ
 *   13 сентября 2026: «Не нужна». У каждого слова свой перевод, порядка между
 *   ними модуль не утверждает: опоры у такого порядка нет ни в одном источнике.
 *
 * ---------------------------------------------------------------------------
 * РЕЗЕРВ СТРОК (замысел, раздел 9)
 * ---------------------------------------------------------------------------
 *
 * У каждого урока есть строки, которые в материал НЕ идут и живут только в
 * заданиях. Правило проекта: строка, которую задание просит произвести, не
 * стоит выше в уроке — ни в примере, ни в таблице, ни во врезке, ни в примере
 * карточки. Проверка утечки сверяет ответы только от четырёх слов, поэтому
 * резерв сверяется глазами, а не отчётом.
 */
const modul: Module = {
  slug: "kak-chasto",
  title: "Как часто",
  znak: "1f501",

  temy: ["Time"],

  egp: [
    // ADVERBS / types and meanings, USE: FREQUENCY, A1 — уроки 1–3.
    // «Can use a limited range of adverbs ('always', 'sometimes') to talk about
    // frequency.» Графа разведена с соседкой A2 по НАБОРУ СЛОВ (`Lexical Range`
    // 1 и 2), о месте наречия не говорит, и её пример ступени места не доказывает.
    "1741163706722x604132732561016200",
    // ADVERBS / position, FORM: FREQUENCY, MID POSITION, A1 — уроки 1, 2, 3, 5, 8.
    // «Can use frequency adverbs in the usual mid position, between the subject
    // and the main verb.» Главное правило модуля.
    "1741163706930x543836854317855550",
    // ADVERBS / position, FORM: FRONT POSITION, A1 — урок 6.
    // «Can use a limited range of adverbs in front position.» Оба примера графы
    // со словом sometimes.
    "1741163706930x279245648285079580",
    // ADVERBS / adverbs as modifiers, FORM: DEGREE and TIME, MODIFYING VERBS, A1.
    // «Can use degree and time adverbs to modify verbs.» ГРАНИЦА НАЗВАНА: графа о
    // наречиях меры И времени, модуль берёт только вторую половину; графа A1
    // `USE: DEGREE WITH VERBS` остаётся нерозданной.
    "1741163706728x987923532840156800",
  ],

  egpPovtor: [
    "1741163713626x486355013779909760", // PRESENT simple, FORM: AFFIRMATIVE — модуль 13
    "1741163713626x414037782388433340", // PRESENT simple, USE: HABITS AND GENERAL FACTS — модуль 13
    "1741163715288x929829619225120500", // VERBS/types, FORM: MAIN VERBS — модуль 13
    "1741163709012x230041547102954000", // DETERMINERS/quantity, 'A','EVERY' — модуль 13 (урок 7)
    "1741163708789x819248395543273500", // DETERMINERS/articles, PREPOSITION+'THE' — модуль 13 (at the weekend)
    "1741163715288x539616242661052000", // VERBS/types, LINKING VERB 'BE' — модуль 2 (урок 4)
    "1741163708329x286701804737242940", // CLAUSES/declarative, AFFIRMATIVE — модуль 2
    "1741163713867x609205291409504700", // PRONOUNS, (SUBJECT) QUESTIONS — модуль 15 (урок 8)
  ],

  sources: [
    {
      ref: "CEFR Companion 2020, с. 72, шкала Overall oral interaction, графа Pre-A1 — главный дескриптор модуля",
      section:
        "«Can ask and answer questions about themselves and daily routines, using short, " +
        "formulaic expressions and relying on gestures to reinforce the information.» " +
        "Распорядок дня назван прямо и стоит ниже ступени курса, то есть взят законно. " +
        "Дескриптор не занят ни одним модулем курса: проверено поиском по `sources` всех " +
        "файлов и по всем замыслам.",
    },
    {
      ref: "CEFR Companion 2020, с. 63, шкала Sustained monologue: describing experience, графа A1 — второй дескриптор, делится",
      section:
        "«Can describe simple aspects of their everyday life in a series of simple " +
        "sentences.» Эту строку держат ещё модули 6, 12 и 13, и она делится по аспектам: " +
        "модуль 6 — родные, модуль 12 — комната, модуль 13 — что делаю каждый день, " +
        "модуль 16 — как часто это бывает.",
    },
    {
      ref: "Cambridge, Young Learners, с. 83, тематический словник Time, столбец A1 MOVERS; с. 52, строка Adverbs",
      section:
        "Словник A1 Movers даёт `always`, `never`, `sometimes`, `every`, `week`, " +
        "`weekend`. Список грамматики A1 Movers, строка Adverbs: «She never eats meat.» — " +
        "и слово `never`, и место наречия между подлежащим и глаголом. `usually` и `often` " +
        "не найдены ни в одном списке и ни в одном словнике руководства: искал по всему " +
        "разобранному тексту, оба слова стоят только в связной прозе советов.",
    },
    {
      ref: "Cambridge, Young Learners, с. 52, строка Must for obligation — опора слова homework",
      section:
        "«He must do his homework.» Оборот `do homework` напечатан источником на ступени; " +
        "модальный глагол оттуда модуль не берёт. Живая строка модуля — `I always do my " +
        "homework in the evening.`, где `do` стоит один раз и в одной роли.",
    },
    {
      ref: "English Grammar Profile, DETERMINERS/quantity, FORM: WITH SINGULAR NOUNS, A1 — опора урока 7",
      section:
        "«Can use a limited range of quantifying determiners with singular nouns ('a', " +
        "'every')», пример графы «I go to college every day». Пункт роздан модулю 13, " +
        "здесь он повторяется: `every week`, `every month`.",
    },
    {
      ref: "Cambridge, A2 Key Handbook, с. 52, раздел Interrogatives — почему How often не берётся",
      section:
        "«How; How much; How many; How often; How long; etc.» — оборот стоит на A2. В " +
        "English Grammar Profile строки `how often` нет во всём файле (перебор всех восьми " +
        "полей 1222 записей), у Young Learners — нет во всём тексте. Спрашивать о частоте " +
        "модуль учит вопросом `Do you always work?` — сложением двух разобранных вещей.",
    },
  ],

  outcomes: [
    "говорить, что бывает всегда и что иногда: I always work",
    "называть среднюю частоту словами usually и often",
    "говорить одним словом never, что чего-то не бывает никогда",
    "ставить наречие частоты после формы be",
    "оставлять -s у глагола, когда о частоте говорят про одного человека",
    "начинать строку словом sometimes",
    "называть точную частоту оборотом every и словом времени",
    "спрашивать о частоте вопросом с do",
    "находить в записи, что человек делает всегда, а что иногда",
    "понимать на слух, как часто человек что-то делает",
    "строить о себе строку с наречием частоты",
  ],

  lessons: [
    {
      /*
       * УРОК 1. Замысел, 9.1 с правкой 16.6.
       *
       * НАЧАЛО — РУССКАЯ ФРАЗА, а не определение: по-русски «я всегда работаю
       * утром», и слово о частоте стоит перед тем, что делаем. По-английски —
       * там же.
       *
       * РЕЗЕРВ СТРОК УРОКА 1 (в материал не идут): `They sometimes walk in the
       * park.` — ответ задания 4; `We always cook in the evening.` — ответ
       * задания 5.
       */
      slug: "vsegda-i-inogda",
      title: "Всегда и иногда: I always work",
      estimatedMinutes: 12,
      outcome: "говорить, что бывает всегда и что иногда: I always work",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается РУССКОЙ ФРАЗОЙ. По-русски мы говорим «я " +
        "всегда работаю утром» и «я иногда читаю вечером», и слово о частоте стоит перед " +
        "тем, что делаем. По-английски оно стоит там же.",

      blocks: [
        {
          /*
           * СЛУЧАЙ 1. always — всегда.
           */
          id: "sluchay-always",
          kind: "explain",
          znak: "1f501",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что always значит «всегда».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. always значит «всегда, без исключений».",
            "I always work in the morning. — Я всегда работаю утром.",
            "We always eat at home. — Мы всегда едим дома.",
          ],
          zvuchat: ["I always work in the morning.", "We always eat at home."],
        },
        {
          /*
           * СЛУЧАЙ 2. Место: перед глаголом.
           */
          id: "sluchay-mesto-pered-glagolom",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что наречие стоит перед глаголом.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. always встаёт перед глаголом, после слова о " +
              "том, кто делает.",
            "I always read in the evening. — Я всегда читаю вечером.",
            "They always study at school. — Они всегда занимаются в школе.",
          ],
          zvuchat: ["I always read in the evening.", "They always study at school."],
        },
        {
          /*
           * СЛУЧАЙ 3. sometimes — иногда.
           */
          id: "sluchay-sometimes",
          kind: "explain",
          znak: "1f504",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что sometimes значит «иногда».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. sometimes значит «иногда, не каждый раз», и " +
              "место у него то же.",
            "I sometimes cook at the weekend. — Я иногда готовлю в выходные.",
            "We sometimes watch television. — Мы иногда смотрим телевизор.",
          ],
          zvuchat: ["I sometimes cook at the weekend.", "We sometimes watch television."],
        },
        {
          /*
           * СЛУЧАЙ 4. Глагол не меняется. ПРАВКА 16.6: второй пример укорочен до
           * `We eat.` → `We sometimes eat.`, иначе строка совпадала с ответом
           * задания 4. Стрелки в видимом тексте нет: пары идут строками с
           * переводом.
           */
          id: "sluchay-glagol-ne-menyaetsya",
          kind: "explain",
          znak: "1f4d0",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что глагол от нового слова не меняется.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. От нового слова глагол остаётся прежним.",
            "I work. — Я работаю.",
            "I always work. — Я всегда работаю.",
            "We eat. — Мы едим.",
            "We sometimes eat. — Мы иногда едим.",
          ],
          zvuchat: ["I work.", "I always work.", "We eat.", "We sometimes eat."],
        },
        {
          /*
           * СЛУЧАЙ 5. Термин на месте — «наречие частоты». РЕШЕНО ВЛАДЕЛЬЦЕМ
           * 13 сентября 2026: называть одной строкой внутри случая.
           *
           * СТРОКИ СО СВОИМ ТИРЕ ПЕРЕВОДА НЕ ПОЛУЧАЮТ, поэтому здесь пары «слово
           * — перевод», и английское слово одно: `razobrat()` разберёт их парой.
           */
          id: "sluchay-narechie-chastoty",
          kind: "explain",
          znak: "1f4da",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая называет слова always и sometimes наречиями частоты.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Слова, которые отвечают «как часто», зовут " +
              "наречиями частоты.",
            "always — всегда",
            "sometimes — иногда",
          ],
          zvuchat: ["always", "sometimes"],
        },
        {
          /*
           * СЛУЧАЙ 6. Наречие и оборот времени в одной строке.
           */
          id: "sluchay-narechie-i-oborot",
          kind: "explain",
          znak: "1f305",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, где стоят наречие и оборот времени.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Наречие стоит перед глаголом, оборот времени " +
              "— в конце.",
            "They sometimes swim at the weekend. — Они иногда плавают в выходные.",
            "We always study in the evening. — Мы всегда занимаемся вечером.",
          ],
          zvuchat: ["They sometimes swim at the weekend.", "We always study in the evening."],
        },
        {
          /*
           * СЛУЧАЙ 7. Две строки рядом.
           */
          id: "sluchay-dve-stroki-ryadom",
          kind: "explain",
          znak: "1f375",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что одно слово меняет весь смысл.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Одним словом меняется весь смысл.",
            "I always drink tea. — Я всегда пью чай.",
            "I sometimes drink milk. — Я иногда пью молоко.",
          ],
          zvuchat: ["I always drink tea.", "I sometimes drink milk."],
        },
        {
          /*
           * СЛУЧАЙ 8. Таблица-свод.
           */
          id: "tablica-svod-uroka-1",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет, что стоит в двух строках.",
          head: ["Строка", "Перевод"],
          rows: [
            ["I always work.", "Я всегда работаю."],
            ["I sometimes work.", "Я иногда работаю."],
          ],
          zvuchat: ["I always work.", "I sometimes work."],
        },
        {
          /*
           * СЛОВАРЬ УРОКА. Пример карточки вправе совпадать со строкой случая
           * (так устроен модуль 13), но не с ответом задания: в словарь ученик
           * заходит нарочно. Наречиям частоты значка по существу нет — это не
           * вещь.
           */
          id: "slova-uroka-1",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "always",
              translation: "всегда",
              example: "I always work in the morning.",
              hint: "/ˈɔːlweɪz/",
            },
            {
              term: "sometimes",
              translation: "иногда",
              example: "I sometimes read in the evening.",
              hint: "/ˈsʌmtaɪmz/",
            },
          ],
        },
        {
          /*
           * З1. СТУПЕНЬКА «УЗНАТЬ». Опора — случаи 1 и 3.
           */
          id: "z1-vybrat-bez-isklyucheniy",
          kind: "choice",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие говорит, что Дана готовит дома каждое утро, без исключений, " +
            "и просит выбрать строку. Отвлекающие (замысел 18.1): второй — sometimes, третий — " +
            "вечером, а не утром.",
          options: [
            { text: "Dana always cooks at home in the morning.", correct: true },
            { text: "Dana sometimes cooks at home in the morning." },
            { text: "Dana always cooks at home in the evening." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку и почему не подходят две другие.",
        },
        {
          /*
           * З2. СТУПЕНЬКА «УЗНАТЬ». Замысел 18.1: четыре строки, в третьей
           * отмечать нечего — нарочно, чтобы задание не проходилось отметкой
           * второго слова каждой строки.
           */
          id: "z2-otmetit-slovo-o-chastote",
          kind: "hottext",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит отметить ВСЕ слова о частоте.",
          /*
           * ОТМЕЧАТЬ МОЖНО КАЖДОЕ СЛОВО, КРОМЕ АРТИКЛЯ И ПРЕДЛОГА, — как в модуле
           * 13. Первая сборка давала отмечать только верные слова, и
           * `check:content` сказал: задание проходится выделением всего подряд.
           */
          parts: [
            { text: "I ", selectable: true },
            { text: "sometimes ", selectable: true, correct: true },
            { text: "sleep ", selectable: true },
            { text: "in the " },
            { text: "afternoon", selectable: true },
            { text: ".\n" },
            { text: "They ", selectable: true },
            { text: "always ", selectable: true, correct: true },
            { text: "play ", selectable: true },
            { text: "football ", selectable: true },
            { text: "at " },
            { text: "school", selectable: true },
            { text: ".\n" },
            { text: "We ", selectable: true },
            { text: "read ", selectable: true },
            { text: "in the " },
            { text: "evening", selectable: true },
            { text: ".\n" },
            { text: "My ", selectable: true },
            { text: "sister ", selectable: true },
            { text: "always ", selectable: true, correct: true },
            { text: "drinks ", selectable: true },
            { text: "water ", selectable: true },
            { text: "in the " },
            { text: "morning", selectable: true },
            { text: "." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, где в строке стоит слово о частоте.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три отмеченных слова и строку, где отмечать нечего.",
        },
        {
          /*
           * З3. СТУПЕНЬКА «ПРОИЗВЕСТИ». «Дана готовит дома каждый раз» — вписать.
           */
          id: "z3-vpisat-always",
          kind: "gap",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие говорит, что Дана готовит дома каждый раз, без исключений, " +
            "и просит вписать слово.",
          before: "Dana ",
          after: " cooks at home.",
          answer: "always",
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку целиком.",
        },
        {
          /*
           * З4. СТУПЕНЬКА «ПРОИЗВЕСТИ». Из резерва урока, ПРАВКА 16.6.
           *
           * ДВА ВЕРНЫХ ОТВЕТА, И ОБА ОБЯЗАНЫ СТОЯТЬ: sometimes законно и перед
           * глаголом (графа MID POSITION), и в начале строки (графа FRONT
           * POSITION) — обе A1. Принять один значит наказать за правоту.
           */
          id: "z4-zapisat-oni-inogda-gulyayut",
          kind: "short",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие просит написать по-английски «Они иногда гуляют в парке».",
          answer: "They sometimes walk in the park.",
          accept: ["Sometimes they walk in the park."],
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку и говорит, что верно и начать с sometimes.",
        },
        {
          /*
           * З5. СТУПЕНЬКА «ПРОИЗВЕСТИ». Сборка, ПРАВКА 16.6.
           *
           * СТРОКА С ALWAYS, А НЕ С SOMETIMES: у sometimes верных порядков два, а
           * сборка принимает один.
           */
          id: "z5-sobrat-my-vsegda-gotovim",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит собрать строку из кусков.",
          items: ["in the evening.", "cook", "We", "always"],
          answer: [2, 3, 1, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, где стоит слово о частоте.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет собранную строку.",
        },
        {
          /*
           * З6. СТУПЕНЬКА «ПРИМЕНИТЬ К СЕБЕ». Образец не повторяет строк урока.
           */
          id: "z6-skazat-o-sebe-always-sometimes",
          kind: "speak",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие просит сказать о себе одну строку с always и одну с " +
            "sometimes.",
          phrase: "I always drink water in the morning. I sometimes play football at the weekend.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, где стоит слово о частоте.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор под образец. Формула самопроверки курса стоит дословно: " +
            "«Ответ на это задание не проверяется, поэтому сверься с образцом».",
        },
      ],
    },

    {
      /*
       * УРОК 2. Замысел, 9.2 с правками 16.7 (шкала снята) и 14.3 (`go to bed`
       * заменено на `get up late`).
       *
       * НАЧАЛО — СЦЕНА: Дана встаёт в семь почти каждый день, но в выходные спит
       * дольше. Сказать always она не может — исключения есть; sometimes тоже не
       * может — так бывает куда чаще, чем иногда.
       *
       * СЛУЧАЙ 4 «ЧЕМ OFTEN ОТЛИЧАЕТСЯ ОТ USUALLY» СНЯТ (16.7): сравнение по
       * частоте опоры не имеет, и владелец 13 сентября 2026 решил шкалу не
       * возвращать. Номера остальных случаев в замысле не сдвинуты.
       *
       * РЕЗЕРВ СТРОК УРОКА 2: `I often read a newspaper.`, `Nurlan usually walks
       * in the park.`, `We often cook at home.`
       */
      slug: "obychno-i-chasto",
      title: "Обычно и часто: I usually get up early",
      estimatedMinutes: 12,
      outcome: "называть среднюю частоту словами usually и often",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Дана встаёт в семь почти каждый день, " +
        "но в выходные спит дольше. Сказать «всегда» она не может, и «иногда» тоже не может.",

      blocks: [
        {
          id: "sluchay-usually",
          kind: "explain",
          znak: "1f305",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что usually значит «обычно».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. usually значит «почти всегда, но не без " +
              "исключений».",
            "I usually get up early. — Я обычно встаю рано.",
            "We usually study in the evening. — Мы обычно занимаемся вечером.",
          ],
          zvuchat: ["I usually get up early.", "We usually study in the evening."],
        },
        {
          id: "sluchay-usually-mesto-to-zhe",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что у usually то же место.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. usually встаёт перед глаголом.",
            "They usually eat at home. — Они обычно едят дома.",
            "I usually walk in the park. — Я обычно гуляю в парке.",
          ],
          zvuchat: ["They usually eat at home.", "I usually walk in the park."],
        },
        {
          id: "sluchay-often",
          kind: "explain",
          znak: "1f501",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что often значит «часто».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. often значит «часто, много раз».",
            "We often walk in the park. — Мы часто гуляем в парке.",
            "I often read a magazine. — Я часто читаю журнал.",
          ],
          zvuchat: ["We often walk in the park.", "I often read a magazine."],
        },
        {
          /*
           * СЛУЧАЙ 5. Первая строка совпадает с примером случая 1 — так в
           * замысле: случай вводит слова early и late, и строка с early у урока
           * одна.
           */
          id: "sluchay-early-i-late",
          kind: "explain",
          znak: "23f0",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая называет новые слова early и late.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. early — рано, late — поздно, и оба стоят в " +
              "конце строки.",
            "I usually get up early. — Я обычно встаю рано.",
            "I sometimes get up late. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I usually get up early.", "I sometimes get up late."],
        },
        {
          /*
           * СЛУЧАЙ 6. Четыре слова и четыре перевода (16.7).
           *
           * ПОРЯДОК СТРОК — ПОРЯДОК УРОКОВ, А НЕ ЧАСТОТЫ: always и sometimes из
           * урока 1, usually и often из этого урока. Выстроить их «от всегда к
           * иногда» значило бы вернуть снятую шкалу молча.
           */
          id: "tablica-chetyre-slova",
          kind: "table",
          znak: "1f4c3",
          naTomZheEkrane: true,
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, что у каждого слова свой перевод.",
          head: ["Слово", "Перевод", "Строка"],
          rows: [
            ["always", "всегда", "ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.2, случай 6)."],
            ["sometimes", "иногда", "ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.2, случай 6)."],
            ["usually", "обычно", "ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.2, случай 6)."],
            ["often", "часто", "ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.2, случай 6)."],
          ],
          zvuchat: ["always", "sometimes", "usually", "often"],
        },
        {
          id: "sluchay-homework",
          kind: "explain",
          znak: "1f4dd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о строке с homework.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. do homework — делать домашнюю работу.",
            "I usually do my homework in the evening. — Я обычно делаю домашнюю работу вечером.",
            "We often do homework at school. — Мы часто делаем домашнюю работу в школе.",
          ],
          zvuchat: ["I usually do my homework in the evening.", "We often do homework at school."],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод. Порядок строк — порядок уроков, а не частоты (16.7).
           */
          id: "tablica-svod-uroka-2",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет четыре строки с разными словами.",
          head: ["Строка", "Перевод"],
          rows: [
            ["I always work in the morning.", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["I sometimes work in the morning.", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["I usually work in the morning.", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["I often work in the morning.", "ПИШЕТ РЕДАКТОР: перевод строки."],
          ],
          zvuchat: [
            "I always work in the morning.",
            "I sometimes work in the morning.",
            "I usually work in the morning.",
            "I often work in the morning.",
          ],
        },
        {
          /*
           * СЛОВАРЬ УРОКА. Значки только у вещей и дел; наречиям и словам early и
           * late значка нет по существу (решение владельца от 8 сентября 2026 о
           * прилагательных).
           */
          id: "slova-uroka-2",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "usually", translation: "обычно", example: "I usually get up early.", hint: "/ˈjuːʒuəli/" },
            { term: "often", translation: "часто", example: "We often walk in the park.", hint: "/ˈɒfn/" },
            { term: "early", translation: "рано", example: "She usually gets up early.", hint: "/ˈɜːli/" },
            { term: "late", translation: "поздно", example: "I sometimes get up late.", hint: "/leɪt/" },
            {
              term: "homework",
              translation: "домашняя работа",
              example: "I always do my homework in the evening.",
              hint: "/ˈhəʊmwɜːk/",
              znak: "1f4dd",
            },
            {
              term: "newspaper",
              translation: "газета",
              example: "My father often reads a newspaper.",
              hint: "/ˈnjuːzpeɪpə/",
              znak: "1f4f0",
            },
            {
              term: "magazine",
              translation: "журнал",
              example: "I sometimes read a magazine.",
              hint: "/ˌmægəˈziːn/",
              znak: "1f4d6",
            },
          ],
        },
        /*
         * ЗАДАНИЯ УРОКА 2. Все английские строки — замысел, раздел 18.2.
         *
         * З5 ПРИНИМАЕТ `Usually` В НАЧАЛЕ, КОТОРОГО УРОК НЕ УЧИТ: строка верна, и
         * наказывать за неё нельзя. Разбор это место не называет — accept служит
         * ученику, а разбор учит.
         */
        {
          id: "z1-vybrat-obychno-doma",
          kind: "choice",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие говорит, что Айгерим ОБЫЧНО готовит ДОМА, и просит выбрать " +
            "строку. Отвлекающие (замысел 18.2): первый — often, второй — в школе.",
          options: [
            { text: "Aigerim often cooks at home." },
            { text: "Aigerim usually cooks at school." },
            { text: "Aigerim usually cooks at home.", correct: true },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку и чем не подходят две другие.",
        },
        {
          /*
           * Строка 3 держит `early` нарочно: это слово о времени, а не о частоте.
           */
          id: "z2-otmetit-usually-i-often",
          kind: "hottext",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит отметить ВСЕ слова о частоте.",
          parts: [
            { text: "We ", selectable: true },
            { text: "usually ", selectable: true, correct: true },
            { text: "play ", selectable: true },
            { text: "football ", selectable: true },
            { text: "at " },
            { text: "school", selectable: true },
            { text: ".\n" },
            { text: "My ", selectable: true },
            { text: "brother ", selectable: true },
            { text: "often ", selectable: true, correct: true },
            { text: "reads ", selectable: true },
            { text: "a " },
            { text: "magazine ", selectable: true },
            { text: "in the " },
            { text: "evening", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "get up ", selectable: true },
            { text: "early", selectable: true },
            { text: ".\n" },
            { text: "They ", selectable: true },
            { text: "often ", selectable: true, correct: true },
            { text: "drink ", selectable: true },
            { text: "juice ", selectable: true },
            { text: "in the " },
            { text: "morning", selectable: true },
            { text: "." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, где в строке стоит слово о частоте.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три отмеченных слова и говорит, почему early не отмечается.",
        },
        {
          id: "z3-vpisat-usually",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие говорит, что мама ОБЫЧНО встаёт рано, и просит вписать слово.",
          before: "My mother ",
          after: " gets up early.",
          answer: "usually",
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку целиком.",
        },
        {
          id: "z4-vpisat-often",
          kind: "gap",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие говорит, что мы ЧАСТО играем в футбол в парке, и просит " +
            "вписать слово.",
          before: "We ",
          after: " play football in the park.",
          answer: "often",
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку целиком.",
        },
        {
          id: "z5-zapisat-nurlan-obychno-gulyaet",
          kind: "short",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие просит написать по-английски «Нурлан обычно гуляет в парке».",
          answer: "Nurlan usually walks in the park.",
          accept: ["Usually Nurlan walks in the park."],
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку; место usually в начале не называет.",
        },
        {
          id: "z6-skazat-o-sebe-usually-often",
          kind: "speak",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие просит сказать о себе одну строку с usually и одну с often.",
          phrase: "I usually drink tea in the morning. I often read in the evening.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, где стоит слово о частоте.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор под образец. Формула самопроверки курса стоит дословно: " +
            "«Ответ на это задание не проверяется, поэтому сверься с образцом».",
        },
      ],
    },

    {
      /*
       * УРОК 3. Замысел, 9.3 с правками 16.7 (без порядка по частоте), 16.8
       * (`match` вместо `hottext`) и 16.10.
       *
       * НАЧАЛО — РУССКАЯ ФРАЗА: по-русски «я никогда не пью кофе» — два слова,
       * «никогда» и «не». По-английски хватает одного.
       *
       * ОСТОРОЖНО, РЕДАКТОР (16.10): ни одной строки, где рядом стоят `never` и
       * отрицание с `do`, — ни в примере, ни в столбце «так нельзя». Случай 3
       * говорит, что в НАШИХ строках одно слово передаёт «никогда не». Что
       * сочетание `never` с `don't` невозможно, урок НЕ говорит: у такой строки
       * бывает законное чтение.
       *
       * РЕЗЕРВ СТРОК УРОКА 3: `Dana never cooks in the morning.`, `I never walk
       * to school.`, `We never watch television in the morning.`
       */
      slug: "nikogda",
      title: "Никогда: I never drink coffee",
      estimatedMinutes: 12,
      outcome: "говорить одним словом never, что чего-то не бывает никогда",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается РУССКОЙ ФРАЗОЙ. По-русски «я никогда не пью " +
        "кофе» — это два слова, «никогда» и «не». По-английски хватает одного.",

      blocks: [
        {
          id: "sluchay-never",
          kind: "explain",
          znak: "1f6ab",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что never значит «никогда».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. never значит «никогда».",
            "I never drink coffee. — Я никогда не пью кофе.",
            "We never work at the weekend. — Мы никогда не работаем в выходные.",
          ],
          zvuchat: ["I never drink coffee.", "We never work at the weekend."],
        },
        {
          id: "sluchay-never-mesto-to-zhe",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что у never то же место.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. never встаёт перед глаголом, как и другие " +
              "наречия частоты.",
            "They never eat meat. — Они никогда не едят мясо.",
            "I never read newspapers. — Я никогда не читаю газет.",
          ],
          zvuchat: ["They never eat meat.", "I never read newspapers."],
        },
        {
          id: "sluchay-vtorogo-ne-ne-nuzhno",
          kind: "explain",
          znak: "1f4a1",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что второго «не» в английской строке нет.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В русской строке два слова, в английской " +
              "одно: never уже говорит «не». Правило говорит о НАШИХ строках, а не о языке.",
            "I never drink coffee. — Я никогда не пью кофе.",
            "We never cook at home. — Мы никогда не готовим дома.",
          ],
          zvuchat: ["I never drink coffee.", "We never cook at home."],
        },
        {
          id: "sluchay-never-i-dont",
          kind: "explain",
          znak: "2696",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что never и don't говорят про одно по-разному.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. I don't drink coffee — не пью; I never drink " +
              "coffee — не пью никогда.",
            "I don't drink coffee. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I never drink coffee. — Я никогда не пью кофе.",
          ],
          zvuchat: ["I don't drink coffee.", "I never drink coffee."],
        },
        {
          /*
           * СЛУЧАЙ 5. Пять слов и пять переводов, без порядка по частоте (16.7):
           * порядок строк — порядок уроков.
           */
          id: "tablica-pyat-slov",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, что у каждого из пяти слов свой перевод.",
          head: ["Слово", "Перевод"],
          rows: [
            ["always", "всегда"],
            ["sometimes", "иногда"],
            ["usually", "обычно"],
            ["often", "часто"],
            ["never", "никогда"],
          ],
          zvuchat: ["always", "sometimes", "usually", "often", "never"],
        },
        {
          /*
           * СЛУЧАЙ 6. Переводов замысел не дал — они стоят заглушками.
           */
          id: "sluchay-never-s-oborotom",
          kind: "explain",
          znak: "1f305",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о never и обороте времени в одной строке.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Оборот времени стоит в конце.",
            "I never work in the morning. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "We never swim at the weekend. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I never work in the morning.", "We never swim at the weekend."],
        },
        {
          /*
           * СЛУЧАЙ 7. Две строки о себе. Перевода замысел не дал.
           */
          id: "sluchay-dve-stroki-o-sebe",
          kind: "explain",
          znak: "1f375",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о двух строках о себе.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Две строки рядом говорят о себе больше, чем " +
              "одна.",
            "I never drink coffee. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I always drink tea. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I never drink coffee.", "I always drink tea."],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод. ОСТОРОЖНО, МЕТОДИСТ: замысел даёт своду тот же
           * состав, что таблице случая 5 («пять наречий с переводами»). Две
           * одинаковые таблицы в одном уроке ученик прочтёт как возврат назад.
           * Собрано по замыслу, решает методист.
           */
          id: "tablica-svod-uroka-3",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода урока.",
          head: ["Слово", "Перевод"],
          rows: [
            ["always", "всегда"],
            ["sometimes", "иногда"],
            ["usually", "обычно"],
            ["often", "часто"],
            ["never", "никогда"],
          ],
          zvuchat: ["always", "sometimes", "usually", "often", "never"],
        },
        {
          id: "slova-uroka-3",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "never", translation: "никогда", example: "I never drink coffee.", hint: "/ˈnevə/" },
          ],
        },
        {
          /*
           * Сопоставление из правки 16.8 — строки и смыслы дословно. usually и
           * often в пары нарочно не взяты: развести их можно только по шкале, а
           * шкала снята (16.7). Место в наборе — второе задание урока.
           */
          id: "z-soedinit-stroku-so-smyslom",
          kind: "match",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит соединить строку с тем, как часто так бывает.",
          left: ["I always cook at home.", "I sometimes cook at home.", "I never cook at home."],
          right: ["ни разу", "каждый раз, без исключений", "не каждый раз"],
          answer: [1, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, на какое слово смотреть.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три пары.",
        },
        // @@ЗАДАНИЯ-УРОК-3@@ — строки остальных заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 4. Замысел, 9.4. РЕШЕНО ВЛАДЕЛЬЦЕМ 13 сентября 2026: «Оставить без
       * don't usually». Урок остаётся; место наречия после формы be — одно место
       * модуля сверх ступени, объявленное в шапке файла.
       *
       * ОПОРА — ГРАФА A2, И ПРЕВЫШЕНИЕ ОБЪЯВЛЕНО. English Grammar Profile,
       * ADVERBS / position, FORM: MID POSITION, A2: «…between the subject and the
       * main verb and after modal verbs, auxiliary verbs and be». Пример графы A1
       * `USE: FREQUENCY` («they are always very friendly») ступени этого места НЕ
       * доказывает: та графа разведена с соседкой по набору слов, а не по месту.
       *
       * НАЧАЛО — СЦЕНА: утром у Кима уроки, и он занят. «Занят» — не то, что он
       * делает, а то, какой он.
       *
       * РЕЗЕРВ СТРОК УРОКА 4: `They are sometimes busy at school.`, `I am often
       * busy in the evening.`, `Nurlan is never late.`
       *
       * ПРОВЕРИТЬ СБОРЩИКУ: карточка `hungry` в строке случая 6 — стоит ли она
       * раньше модуля 16. Замысел ручается за слова урока, но это слово в его
       * перечне проверенных не названо.
       */
      slug: "ya-vsegda-zanyat",
      title: "Я всегда занят: I am always busy",
      estimatedMinutes: 12,
      outcome: "ставить наречие частоты после формы be",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Утром у Кима уроки, и он занят. «Занят» " +
        "говорит не о том, что он делает, а о том, какой он.",

      blocks: [
        {
          id: "sluchay-busy",
          kind: "explain",
          znak: "1f4bc",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая называет слово busy.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. busy говорит, какой человек, и стоит после " +
              "формы be.",
            "I am busy. — Я занят.",
            "My mother is busy. — Моя мама занята.",
          ],
          zvuchat: ["I am busy.", "My mother is busy."],
        },
        {
          id: "sluchay-narechie-posle-be",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что с формой be наречие стоит после неё.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. С формой be наречие частоты встаёт после неё.",
            "I am always busy in the morning. — Я всегда занят утром.",
            "Dana is often busy at the weekend. — Дана часто занята в выходные.",
          ],
          zvuchat: ["I am always busy in the morning.", "Dana is often busy at the weekend."],
        },
        {
          id: "sluchay-glagol-i-be-ryadom",
          kind: "explain",
          znak: "2696",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая ставит рядом строку с глаголом и строку с формой be.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. С глаголом наречие стоит перед ним, с формой " +
              "be — после неё.",
            "I always work. — Я всегда работаю.",
            "I am always busy. — Я всегда занят.",
          ],
          zvuchat: ["I always work.", "I am always busy."],
        },
        {
          id: "sluchay-are",
          kind: "explain",
          znak: "1f465",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о форме are.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. У we и they форма are, место наречия то же.",
            "We are sometimes late. — Мы иногда опаздываем.",
            "They are never late. — Они никогда не опаздывают.",
          ],
          zvuchat: ["We are sometimes late.", "They are never late."],
        },
        {
          id: "sluchay-late-o-cheloveke",
          kind: "explain",
          znak: "23f0",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что late о человеке значит «опаздывает».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. late в такой строке значит «опоздал».",
            "He is often late. — Он часто опаздывает.",
            "I am never late. — Я никогда не опаздываю.",
          ],
          zvuchat: ["He is often late.", "I am never late."],
        },
        {
          id: "sluchay-never-s-formoy-be",
          kind: "explain",
          znak: "1f6ab",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о never с формой be.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. never стоит после формы be, и «не» к нему не " +
              "нужно.",
            "She is never busy in the evening. — Она никогда не занята вечером.",
            "We are never hungry in the morning. — Мы никогда не голодны утром.",
          ],
          zvuchat: ["She is never busy in the evening.", "We are never hungry in the morning."],
        },
        {
          /*
           * СЛУЧАЙ 7. Таблица трёх лиц. Переводов замысел не дал — заглушки.
           */
          id: "tablica-tri-lica",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, что наречие стоит после каждой формы be.",
          head: ["Строка", "Перевод"],
          rows: [
            ["I am always busy.", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["He is always busy.", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["We are always busy.", "ПИШЕТ РЕДАКТОР: перевод строки."],
          ],
          zvuchat: ["I am always busy.", "He is always busy.", "We are always busy."],
        },
        {
          id: "tablica-svod-uroka-4",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода ставит рядом строку с глаголом и с формой be.",
          head: ["Строка", "Перевод"],
          rows: [
            ["I always work.", "Я всегда работаю."],
            ["I am always busy.", "Я всегда занят."],
          ],
          zvuchat: ["I always work.", "I am always busy."],
        },
        {
          id: "slova-uroka-4",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "busy",
              translation: "занят",
              example: "I am always busy in the morning.",
              hint: "/ˈbɪzi/",
            },
          ],
        },
        // @@ЗАДАНИЯ-УРОК-4@@ — строки заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 5. Замысел, 9.5 с правкой 16.8 (`match` вместо order).
       *
       * НАЧАЛО — СЦЕНА: Нурлан работает утром, а его сестра — вечером. О каждом
       * из них говорят по отдельности, и окончание у глагола своё.
       *
       * РЕЗЕРВ СТРОК УРОКА 5: `Dana always cooks in the evening.`, `My sister
       * often reads a newspaper.`, `He never studies at the weekend.`
       */
      slug: "on-vsegda-rabotaet",
      title: "Он всегда работает: He always works",
      estimatedMinutes: 12,
      outcome: "оставлять -s у глагола, когда о частоте говорят про одного человека",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Нурлан работает утром, а его сестра — " +
        "вечером. О каждом говорят по отдельности, и окончание у глагола своё.",

      blocks: [
        {
          id: "sluchay-he-i-she",
          kind: "explain",
          znak: "1f9d1",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о he и she.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. У одного человека к глаголу прибавляется -s, " +
              "и новое слово этого не меняет.",
            "He always works in the morning. — Он всегда работает утром.",
            "She usually gets up early. — Она обычно встаёт рано.",
          ],
          zvuchat: ["He always works in the morning.", "She usually gets up early."],
        },
        {
          id: "sluchay-mesto-narechiya-u-odnogo",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о месте слова о частоте.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Слово стоит между тем, кто делает, и глаголом.",
            "Dana often reads a magazine. — Дана часто читает журнал.",
            "My father never drinks coffee. — Мой папа никогда не пьёт кофе.",
          ],
          zvuchat: ["Dana often reads a magazine.", "My father never drinks coffee."],
        },
        {
          id: "sluchay-narechie-ne-menyaetsya",
          kind: "explain",
          znak: "1f4a1",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что слово о частоте само не меняется.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Окончание прибавляется к глаголу, а не к слову " +
              "о частоте.",
            "He often walks in the park. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "She often walks in the park. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["He often walks in the park.", "She often walks in the park."],
        },
        {
          /*
           * `watch` ГЛАГОЛОМ. Модуль 13 печатает `He watches television.` в
           * видимом тексте, значит это не заимствование вперёд (замысел 14.2).
           * Карточка `watch` в `odezhda.ts` переводит «часы» — долг чужого
           * модуля, записан в записке.
           */
          id: "sluchay-es-i-ies",
          kind: "explain",
          znak: "270f",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о написании -es и -ies.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Правила написания из модуля 13 работают и " +
              "здесь.",
            "He never watches television in the morning. — Он никогда не смотрит телевизор утром.",
            "She always studies in the evening. — Она всегда занимается вечером.",
          ],
          zvuchat: ["He never watches television in the morning.", "She always studies in the evening."],
        },
        {
          id: "sluchay-imya-vmesto-he",
          kind: "explain",
          znak: "1f464",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что с именем то же самое.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. С именем вместо he и she глагол тоже с окончанием.",
            "Aigerim sometimes cooks at home. — Айгерим иногда готовит дома.",
            "My brother always does his homework in the evening. — Мой брат всегда делает " +
              "домашнюю работу вечером.",
          ],
          zvuchat: ["Aigerim sometimes cooks at home.", "My brother always does his homework in the evening."],
        },
        {
          id: "sluchay-ya-i-on-ryadom",
          kind: "explain",
          znak: "2696",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая ставит рядом строку о себе и строку о нём.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "I always work in the morning. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "He always works in the morning. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I always work in the morning.", "He always works in the morning."],
        },
        {
          /*
           * СЛУЧАЙ 7. Замысел: «шесть строк со словом usually» — сами строки не
           * названы. Ячейки ждут методиста.
           */
          id: "tablica-usually-u-vseh",
          kind: "table",
          znak: "1f4c3",
          caption:
            "ПИШЕТ РЕДАКТОР: подпись говорит, что у I, you, we, they глагол без изменений, а у he, " +
            "she и имени — с окончанием.",
          head: ["Строка", "Перевод"],
          rows: [
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
          ],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод «два столбца: без окончания и с окончанием» — строки
           * не названы.
           */
          id: "tablica-svod-uroka-5",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет два столбца.",
          head: ["Без окончания", "С окончанием"],
          rows: [
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 8).", "ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.5, случай 8)."],
          ],
        },
        {
          /*
           * Сопоставление из правки 16.8 — английские строки дословно. Ступенька
           * «узнать»: окончание -s ученик видит, а не ставит.
           */
          id: "z-soedinit-o-sebe-i-o-drugom",
          kind: "match",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит соединить строку о себе со строкой о другом человеке.",
          left: ["I always read in the evening.", "I often walk in the park.", "I never drink coffee."],
          right: ["He often walks in the park.", "My father never drinks coffee.", "She always reads in the evening."],
          answer: [2, 0, 1],
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, по какому слову искать пару.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три пары.",
        },
        // @@ЗАДАНИЯ-УРОК-5@@ — строки остальных заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 6. Замысел, 9.6 с правкой 16.8 (`match` вместо hottext).
       *
       * ОПОРА: English Grammar Profile, ADVERBS / position, FORM: FRONT
       * POSITION, A1 — «Can use a limited range of adverbs in front position».
       * Оба примера графы со словом sometimes.
       *
       * ОСТОРОЖНО, РЕДАКТОР: ни «только», ни «нельзя». Про always, usually,
       * often и never урок не говорит вовсе — ни что им можно в начало, ни что
       * нельзя. Графа — разрешение, а не запрет.
       *
       * РЕЗЕРВ СТРОК УРОКА 6: `Sometimes I swim at the weekend.`, `Sometimes my
       * mother works in the evening.`, `Sometimes we watch television.`
       */
      slug: "inogda-s-nachala",
      title: "Иногда — с начала: Sometimes I read",
      estimatedMinutes: 12,
      outcome: "начинать строку словом sometimes",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается РУССКОЙ ФРАЗОЙ. По-русски мы часто начинаем с " +
        "«иногда»: «Иногда я готовлю дома». По-английски так тоже говорят.",

      blocks: [
        {
          id: "sluchay-sometimes-v-nachale",
          kind: "explain",
          znak: "1f51c",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что sometimes бывает в начале.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. sometimes можно поставить и в начало строки.",
            "Sometimes I cook at home. — Иногда я готовлю дома.",
            "Sometimes we walk in the park. — Иногда мы гуляем в парке.",
          ],
          zvuchat: ["Sometimes I cook at home.", "Sometimes we walk in the park."],
        },
        {
          id: "sluchay-oba-mesta-verny",
          kind: "explain",
          znak: "2705",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что оба места верны.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Смысл от места не меняется, перевод один.",
            "I sometimes cook at home. — ПИШЕТ РЕДАКТОР: перевод строки, один на обе.",
            "Sometimes I cook at home. — ПИШЕТ РЕДАКТОР: перевод строки, один на обе.",
          ],
          zvuchat: ["I sometimes cook at home.", "Sometimes I cook at home."],
        },
        {
          id: "sluchay-zapyataya-ne-nuzhna",
          kind: "explain",
          znak: "270f",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что запятая не нужна.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. После sometimes сразу идёт слово о том, кто делает.",
            "Sometimes I read a magazine. — Иногда я читаю журнал.",
            "Sometimes they eat at school. — Иногда они едят в школе.",
          ],
          zvuchat: ["Sometimes I read a magazine.", "Sometimes they eat at school."],
        },
        {
          id: "sluchay-sometimes-s-imenem",
          kind: "explain",
          znak: "1f464",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о строке с именем.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "Sometimes Dana cooks at home. — Иногда Дана готовит дома.",
            "Sometimes my father reads a newspaper. — Иногда мой папа читает газету.",
          ],
          zvuchat: ["Sometimes Dana cooks at home.", "Sometimes my father reads a newspaper."],
        },
        {
          id: "sluchay-sometimes-s-oborotom",
          kind: "explain",
          znak: "1f305",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит об обороте времени.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Оборот времени остаётся в конце.",
            "Sometimes I work at the weekend. — Иногда я работаю в выходные.",
            "Sometimes we study in the evening. — Иногда мы занимаемся вечером.",
          ],
          zvuchat: ["Sometimes I work at the weekend.", "Sometimes we study in the evening."],
        },
        {
          /*
           * СЛУЧАЙ 6. Замысел: «две строки подряд с переводами» — строки не
           * названы.
           */
          id: "sluchay-zachem-nachinat-s-nego",
          kind: "explain",
          znak: "1f442",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, зачем начинать со слова sometimes.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Так сразу слышно, что бывает не всегда.",
            "ПИШЕТ РЕДАКТОР: строку и перевод называет методист (замысел 9.6, случай 6).",
            "ПИШЕТ РЕДАКТОР: строку и перевод называет методист (замысел 9.6, случай 6).",
          ],
        },
        {
          id: "sluchay-dve-stroki-always-i-sometimes",
          kind: "explain",
          znak: "1f4dd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая ставит рядом две строки.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "I always work in the morning. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Sometimes I work in the evening. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I always work in the morning.", "Sometimes I work in the evening."],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод «таблица двух мест» — строки не названы.
           */
          id: "tablica-svod-uroka-6",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет два места sometimes.",
          head: ["Перед глаголом", "В начале"],
          rows: [
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.6, случай 8).", "ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.6, случай 8)."],
          ],
        },
        {
          /*
           * Сопоставление из правки 16.8 — английские строки дословно. Партнёр
           * у каждой строки один: слова совпадают, отличается место sometimes.
           * СБОРЩИКУ (16.8): ни одна из шести строк не должна стоять ответом
           * задания этого же урока — сверить, когда методист назовёт задания.
           */
          id: "z-soedinit-dva-mesta-sometimes",
          kind: "match",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит соединить строку со строкой того же смысла.",
          left: ["I sometimes read a magazine.", "We sometimes walk in the park.", "They sometimes eat at school."],
          right: ["Sometimes they eat at school.", "Sometimes I read a magazine.", "Sometimes we walk in the park."],
          answer: [1, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка говорит, какие слова должны совпасть.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три пары и говорит, что обе строки пары верны.",
        },
        // @@ЗАДАНИЯ-УРОК-6@@ — строки остальных заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 7. Замысел, 9.7 с правками 16.8 (`setka` вместо hottext) и 16.11.
       *
       * ОПОРА: English Grammar Profile, DETERMINERS / quantity, FORM: WITH
       * SINGULAR NOUNS, A1 — «…quantifying determiners with singular nouns (a,
       * every)», пример «I go to college every day». Пункт роздан модулю 13,
       * здесь он повторяется.
       *
       * РЕЗЕРВ СТРОК УРОКА 7 (16.11): `We go to the park every week.`, `Dana
       * reads a magazine every month.`, `I see my friends every week.`
       */
      slug: "kazhduyu-nedelyu",
      title: "Каждую неделю: every week, every month",
      estimatedMinutes: 12,
      outcome: "называть точную частоту оборотом every и словом времени",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Айгерим видится с бабушкой раз в месяц — " +
        "не «часто» и не «иногда», а ровно раз в месяц.",

      blocks: [
        {
          id: "sluchay-every-day-znakomo",
          kind: "explain",
          znak: "1f4c6",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что every day уже знаком по модулю «Что я делаю " +
              "каждый день».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "I study English every day. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I study English every day."],
        },
        {
          id: "sluchay-every-week",
          kind: "explain",
          znak: "1f5d3",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая называет every week.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. К every прибавляется слово времени.",
            "I swim every week. — Я плаваю каждую неделю.",
            "We study English every week. — Мы учим английский каждую неделю.",
          ],
          zvuchat: ["I swim every week.", "We study English every week."],
        },
        {
          id: "sluchay-month",
          kind: "explain",
          znak: "1f4c5",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая называет новое слово month.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "I see my grandmother every month. — Я вижусь с бабушкой каждый месяц.",
            "We go to the library every month. — Мы ходим в библиотеку каждый месяц.",
          ],
          zvuchat: ["I see my grandmother every month.", "We go to the library every month."],
        },
        {
          id: "sluchay-oborot-v-konce",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что оборот с every стоит в конце.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Оборот с every стоит в конце строки.",
            "I read a newspaper every week. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "She cooks every day. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I read a newspaper every week.", "She cooks every day."],
        },
        {
          id: "tablica-slovo-posle-every-odno",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, что после every стоит одно слово: every day.",
          head: ["Оборот", "Перевод"],
          rows: [
            ["every day", "ПИШЕТ РЕДАКТОР: перевод."],
            ["every week", "ПИШЕТ РЕДАКТОР: перевод."],
            ["every month", "ПИШЕТ РЕДАКТОР: перевод."],
          ],
          zvuchat: ["every day", "every week", "every month"],
        },
        {
          id: "sluchay-every-i-always",
          kind: "explain",
          znak: "2696",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, чем every week не похож на always.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. every week называет срок, always говорит, что " +
              "исключений нет.",
            "I always work in the morning. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I work every week. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I always work in the morning.", "I work every week."],
        },
        {
          id: "sluchay-often-i-every-month",
          kind: "explain",
          znak: "1f475",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая ставит рядом две строки о бабушке.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "I often see my grandmother. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I see my grandmother every month. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I often see my grandmother.", "I see my grandmother every month."],
        },
        {
          id: "tablica-svod-uroka-7",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет три оборота.",
          head: ["Оборот", "Перевод"],
          rows: [
            ["every day", "ПИШЕТ РЕДАКТОР: перевод."],
            ["every week", "ПИШЕТ РЕДАКТОР: перевод."],
            ["every month", "ПИШЕТ РЕДАКТОР: перевод."],
          ],
          zvuchat: ["every day", "every week", "every month"],
        },
        {
          /*
           * `see` — ТРИНАДЦАТАЯ КАРТОЧКА (замысел 14.1): глагола «видеть» в курсе
           * не было ни одного. Перевод широкий, без скобки.
           */
          id: "slova-uroka-7",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "month",
              translation: "месяц",
              example: "I see my grandmother every month.",
              hint: "/mʌnθ/",
              znak: "1f4c5",
            },
            {
              term: "see",
              translation: "видеть, видеться",
              example: "I see my grandmother every month.",
              hint: "/siː/",
              znak: "1f440",
            },
          ],
        },
        {
          /*
           * СЕТКА (правка 16.8). Слова выбраны методистом, поле построено машиной
           * 13 сентября 2026 и сверено `bedySetki` и `lishnieSlova` — обе пусты
           * при словаре курса вместе с карточками модуля 16. После подключения
           * модуля `check:content` зовёт те же функции заново.
           *
           * ALWAYS и NEVER — по столбцу; USUALLY, MONTH, MAGAZINE — по строке.
           */
          id: "z-najti-slova-v-setke",
          kind: "setka",
          prompt: "ПИШЕТ РЕДАКТОР: условие говорит, сколько слов спрятано, и просит нажать их буквы по порядку.",
          stroki: [
            "GMONTHFHN",
            "USSQHTBAA",
            "MAGAZINEL",
            "JNLKRNPGW",
            "IFIHOENKA",
            "NJZXZVQIY",
            "LOMBPEZYS",
            "GNYEZRJWF",
            "UXUSUALLY",
          ],
          slova: [
            { slovo: "ALWAYS", podpis: "ПИШЕТ РЕДАКТОР: подпись слова." },
            { slovo: "NEVER", podpis: "ПИШЕТ РЕДАКТОР: подпись слова." },
            { slovo: "USUALLY", podpis: "ПИШЕТ РЕДАКТОР: подпись слова." },
            { slovo: "MONTH", podpis: "ПИШЕТ РЕДАКТОР: подпись слова." },
            { slovo: "MAGAZINE", podpis: "ПИШЕТ РЕДАКТОР: подпись слова." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет пять слов.",
        },
        // @@ЗАДАНИЯ-УРОК-7@@ — строки остальных заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 8. Замысел, 9.8.
       *
       * ЧЕГО В УРОКЕ НЕТ: вопроса о третьем лице (Does he always work?). Графа
       * A1 перечисляет лица и третьего среди них не называет, а модуль 15 взял
       * does расхождением источников; складывать два спорных места в одно
       * нельзя (замысел 7.2).
       *
       * РЕЗЕРВ СТРОК УРОКА 8: `Do you often swim at the weekend?`, `Do they
       * always study in the evening?`, `Do you usually get up early?`
       */
      slug: "sprashivayu-o-chastote",
      title: "Спрашиваю: Do you always work?",
      estimatedMinutes: 12,
      outcome: "спрашивать о частоте вопросом с do",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Ким знает, что Дана работает, и хочет " +
        "узнать, каждое ли это утро.",

      blocks: [
        {
          id: "sluchay-vopros-s-do-znakom",
          kind: "explain",
          znak: "2753",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что вопрос с do уже знаком по модулю «Спросить о " +
              "делах».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "Do you work in the morning? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Do you work in the morning?"],
        },
        {
          id: "sluchay-narechie-v-voprose",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о слове о частоте в вопросе.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Слово встаёт перед глаголом, как и в " +
              "утверждении.",
            "Do you always work in the morning? — Ты всегда работаешь утром?",
            "Do they often walk in the park? — Они часто гуляют в парке?",
          ],
          zvuchat: ["Do you always work in the morning?", "Do they often walk in the park?"],
        },
        {
          /*
           * СЛУЧАЙ 3. Замысел даёт полную запись `No, I do not.` с пометой «в
           * уроке — короткая запись», значит на экране `No, I don't.` Переводов
           * замысел не дал.
           */
          id: "sluchay-korotkiy-otvet",
          kind: "explain",
          znak: "1f4ac",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что отвечают как обычно.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "Do you always cook at home? — Yes, I do. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Do you always cook at home? — No, I don't. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Do you always cook at home? — Yes, I do.", "Do you always cook at home? — No, I don't."],
        },
        {
          id: "sluchay-otvet-s-narechiem",
          kind: "explain",
          znak: "1f5e8",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит, что после короткого ответа можно добавить строку о " +
              "себе.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "No, I don't. I sometimes cook at home. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["No, I don't. I sometimes cook at home."],
        },
        {
          id: "sluchay-vopros-o-neskolkih",
          kind: "explain",
          znak: "1f465",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая говорит о вопросе о нескольких людях.",
            "ПИШЕТ РЕДАКТОР: правило одной строкой.",
            "Do they usually eat at school? — Они обычно едят в школе?",
            "Do you often read a newspaper? — Ты часто читаешь газету?",
          ],
          zvuchat: ["Do they usually eat at school?", "Do you often read a newspaper?"],
        },
        {
          /*
           * СЛУЧАЙ 6. «Сцена из трёх реплик: Ким и Дана» — реплики не названы.
           * Когда методист их назовёт: у Кима мужской голос, и если первым
           * говорит он, нужен `pervyyGolos: "muzhskoy"`.
           */
          id: "razgovor-kim-i-dana",
          kind: "example",
          znak: "1f4ac",
          razgovor: true,
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, кто с кем говорит и кто первым.",
          text: "ПИШЕТ РЕДАКТОР: три реплики называет методист (замысел 9.8, случай 6).",
          explain: "ПИШЕТ РЕДАКТОР: разбор разговора.",
        },
        {
          id: "tablica-do-kto-narechie-glagol",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит о порядке: do, кто, слово о частоте, глагол.",
          head: ["Строка", "Перевод"],
          rows: [
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.8, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.8, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.8, случай 7).", "ПИШЕТ РЕДАКТОР: перевод."],
          ],
        },
        {
          id: "tablica-svod-uroka-8",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет вопрос и два коротких ответа.",
          head: ["Строка", "Перевод"],
          rows: [
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.8, случай 8).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.8, случай 8).", "ПИШЕТ РЕДАКТОР: перевод."],
            ["ПИШЕТ РЕДАКТОР: строку называет методист (замысел 9.8, случай 8).", "ПИШЕТ РЕДАКТОР: перевод."],
          ],
        },
        // @@ЗАДАНИЯ-УРОК-8@@ — строки заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 9. Замысел, 9.9 с правкой 16.11 (задание 3 спрашивает «что не
       * пьёт», ответ `coffee`).
       *
       * ТЕКСТ ДЛЯ ЧТЕНИЯ — дословно из замысла, жанр `message`. Методист
       * проверил пословно: ни одного слова вне курса, дней недели нет, `but` и
       * `after` не взяты. Перевода у связного текста нет — решение владельца от
       * 6 сентября 2026; звука у текста чтения пока тоже нет.
       */
      slug: "chitaem-nedelya-aygerim",
      title: "Читаем: неделя Айгерим",
      estimatedMinutes: 12,
      outcome: "находить в записи, что человек делает всегда, а что иногда",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Айгерим пишет о себе, что делает всегда, " +
        "а что иногда.",

      blocks: [
        {
          id: "tekst-zapiska-aygerim",
          kind: "text",
          znak: "1f4e9",
          title: "ПИШЕТ РЕДАКТОР: заголовок записки.",
          genre: "message",
          body: [
            "Hello! My name is Aigerim. I am a student.",
            "I always get up early.",
            "I usually study at home in the evening.",
            "Sometimes I swim at the weekend.",
            "I never drink coffee.",
            "I often drink tea in the morning.",
            "I am always busy.",
            "I see my grandmother every month.",
            "Do you get up early?",
          ],
        },
        // @@ЗАДАНИЯ-УРОК-9@@ — строки заданий называет методист (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 10. Замысел, 9.10. Запись и есть предмет урока, поэтому блоки
       * `audio` остаются.
       *
       * ОТВЕТЫ ЗАДАНИЙ НА СЛУХ — `never`, `magazine`, `early`, `weekend`. НИ ОДНО
       * ИЗ НИХ НЕ СТОИТ РЯДОМ НИ ЛАТИНИЦЕЙ, НИ КИРИЛЛИЦЕЙ: подпись «у стойки
       * записывают Энн Бейкер» однажды отменила задание на слух (модуль 5).
       * Редактору — подписи записей о том, КТО и О ЧЁМ, без газет, журналов и
       * выходных.
       */
      slug: "slushaem-kak-chasto",
      title: "Слушаем: как часто",
      estimatedMinutes: 11,
      outcome: "понимать на слух, как часто человек что-то делает",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ и не называет ни одного ответа заданий.",

      blocks: [
        {
          /*
           * ЗАПИСЬ 1. Первым говорит Ким — за ним в курсе закреплён мужской
           * голос, поэтому `pervyyGolos`.
           */
          id: "zapis-kim-sprashivaet-o-chtenii",
          kind: "audio",
          znak: "1f3a7",
          voice: "два голоса",
          pace: "slow",
          skryt: true,
          pervyyGolos: "muzhskoy",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, кто спрашивает и кто говорит первым.",
          transcript: "Do you often read a newspaper? — No, I never read newspapers. I sometimes read a magazine.",
        },
        // @@ЗАДАНИЯ-ЗАПИСЬ-1@@ — два short по записи 1 (замысел, раздел 18)
        {
          /*
           * ЗАПИСЬ 2. Рассказ Нурлана, один голос: поля `voice` нет нарочно —
           * `dvaGolosa = Boolean(block.voice)`, и любая строка там значит два
           * голоса. Голос мужской — Нурлан.
           */
          id: "zapis-nurlan-o-rabote",
          kind: "audio",
          znak: "1f3a7",
          pace: "slow",
          skryt: true,
          pervyyGolos: "muzhskoy",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, кто рассказывает и о чём, без ответов заданий.",
          transcript:
            "I always get up early. I usually work in the morning. Sometimes I work in the evening. " +
            "I never work at the weekend.",
        },
        // @@ЗАДАНИЯ-ЗАПИСЬ-2@@ — два short по записи 2 и choice (замысел, раздел 18)
      ],
    },

    {
      /*
       * УРОК 11. Замысел, 9.11. Итог назван по проверяемой половине (16.11):
       * урок строит строку сборкой и вслух, вопрос 11 работы — записью.
       *
       * ОБРАЗЕЦ-РАЗГОВОР ЗВУЧИТ НА ДВА ГОЛОСА (починено в коде 12 сентября
       * 2026). После сборки — `npm run ozvuchka`, иначе у образцов тишина.
       */
      slug: "govorim-kak-chasto-u-tebya",
      title: "Говорим: как часто у тебя",
      estimatedMinutes: 10,
      outcome: "строить о себе строку с наречием частоты",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ или РУССКОЙ ФРАЗОЙ о том, как рассказать, " +
        "что делаешь часто и что никогда.",

      blocks: [
        // @@ЗАДАНИЯ-УРОК-11@@ — четыре speak и order (замысел, раздел 18.11)
      ],
    },
  ],

  /*
   * РАБОТА МОДУЛЯ — ДВЕНАДЦАТЬ ВОПРОСОВ. Замысел, 16.2 (переписана целиком по
   * разбору) и 16.3 (таблица видов по полю `kind`).
   *
   * ТРИ ДЕЙСТВИЯ И ТОЛЬКО ОНИ: исправить чужую запись или переписать данную
   * строку (`short`); назвать причину или смысл (`choice`, все варианты
   * по-русски); записать одно слово с новой записи (`short` со звуком). Ни
   * `gap`, ни `hottext`, ни `order`, ни `match`, ни `speak`: их берут уроки.
   *
   * Порог показа — десять из двенадцати. Верный ответ в вопросах выбора стоит
   * на местах 1, 2, 3 — по разу каждое. Производящих вопросов девять из
   * двенадцати.
   *
   * ЭТА ТАБЛИЦА ВИДОВ ВЕРНА НА 13 сентября 2026 и устареет, как только уроки
   * будут написаны: перед приёмкой её сверяют заново, разбором обоих мест.
   */
  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      {
        /*
         * ВОПРОС 1. Итог урока 1. Исправить чужую запись.
         */
        id: "q1-ispravit-always-na-sometimes",
        kind: "short",
        outcome: "говорить, что бывает всегда и что иногда: I always work",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что Нурлан читает газету не каждый день, а " +
          "написал I always read a newspaper., и просит записать строку без ошибки.",
        answer: "I sometimes read a newspaper.",
        accept: ["Sometimes I read a newspaper."],
        why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку и говорит, почему always не подходит.",
      },
      {
        /*
         * ВОПРОС 2. Итог урока 2. Назвать причину, варианты по-русски.
         */
        id: "q2-pochemu-ne-always",
        kind: "choice",
        outcome: "называть среднюю частоту словами usually и often",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что Дана встаёт рано почти каждый день, а в " +
          "выходные позже, и спрашивает, почему ей не подходит строка Dana always gets up early.",
        options: [
          { text: "always говорит, что исключений нет, а у Даны они есть", correct: true },
          { text: "always говорит, что так бывает часто" },
          { text: "always говорит, что так бывает изредка" },
        ],
        why: "ПИШЕТ РЕДАКТОР: разбор говорит, какое слово подошло бы Дане.",
      },
      {
        /*
         * ВОПРОС 3. Итог урока 3. Переписать верную строку, ПРАВКА 16.10.
         *
         * СТРОКИ С ОШИБКОЙ ЗДЕСЬ НЕТ НАРОЧНО: у двойного отрицания бывает
         * законное чтение, и в «так нельзя» такая строка не ставится.
         */
        id: "q3-perepisat-s-never",
        kind: "short",
        outcome: "говорить одним словом never, что чего-то не бывает никогда",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что ученик хотел сказать, что никогда не ест мясо, " +
          "и написал I don't eat meat. Строка верна, но слова «никогда» в ней нет; просит " +
          "переписать её так, чтобы оно было.",
        answer: "I never eat meat.",
        accept: ["I don't ever eat meat."],
        why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку и говорит, что never уже значит «не».",
      },
      {
        /*
         * ВОПРОС 4. Итог урока 4. Исправить чужую запись. Урок 4 остаётся
         * решением владельца от 13 сентября 2026.
         */
        id: "q4-ispravit-bez-formy-be",
        kind: "short",
        outcome: "ставить наречие частоты после формы be",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что ученик написал I always busy at the weekend., и " +
          "просит записать строку без ошибки.",
        answer: "I am always busy at the weekend.",
        why: "ПИШЕТ РЕДАКТОР: разбор говорит, чего не хватало, и где встаёт наречие.",
      },
      {
        /*
         * ВОПРОС 5. Итог урока 5. Исправить чужую запись.
         */
        id: "q5-ispravit-okonchanie",
        kind: "short",
        outcome: "оставлять -s у глагола, когда о частоте говорят про одного человека",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что ученик написал об Алиме He often work at the " +
          "weekend., и просит записать строку без ошибки.",
        answer: "He often works at the weekend.",
        why: "ПИШЕТ РЕДАКТОР: разбор говорит, почему у глагола стоит окончание.",
      },
      {
        /*
         * ВОПРОС 6. Итог урока 6. Переписать данную строку по условию.
         */
        id: "q6-perepisat-s-nachala",
        kind: "short",
        outcome: "начинать строку словом sometimes",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что Ким написал I sometimes walk to school., и " +
          "просит переписать строку так, чтобы она начиналась со слова о частоте.",
        answer: "Sometimes I walk to school.",
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку и говорит, что смысл от места не меняется.",
      },
      {
        /*
         * ВОПРОС 7. Итог урока 7. Исправить чужую запись.
         */
        id: "q7-ispravit-every-months",
        kind: "short",
        outcome: "называть точную частоту оборотом every и словом времени",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что ученик написал I write to my uncle every " +
          "months., и просит записать строку без ошибки.",
        answer: "I write to my uncle every month.",
        why: "ПИШЕТ РЕДАКТОР: разбор говорит, почему после every слово стоит в единственном числе.",
      },
      {
        /*
         * ВОПРОС 8. Итог урока 8. Переписать данный вопрос по условию, ПРАВКА
         * 13 сентября: прежняя запись с русского описания была действием урока 8.
         */
        id: "q8-perepisat-vopros-s-often",
        kind: "short",
        outcome: "спрашивать о частоте вопросом с do",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что Ким спросил Дану Do you cook at home?, а хотел " +
          "узнать, часто ли она готовит, и просит переписать вопрос так, чтобы в нём было " +
          "«часто».",
        answer: "Do you often cook at home?",
        why: "ПИШЕТ РЕДАКТОР: разбор называет вопрос и говорит, где в нём встаёт наречие.",
      },
      {
        /*
         * ВОПРОС 9. Итог урока 9. Назвать причину по записке Айгерим, ПРАВКА
         * 16.11: варианты говорят о строке о плавании, потому что always и never
         * в записке тоже есть.
         */
        id: "q9-pochemu-ne-kazhduyu-nedelyu",
        kind: "choice",
        outcome: "находить в записи, что человек делает всегда, а что иногда",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие спрашивает по записке Айгерим, почему видно, что плавает она " +
          "не каждую неделю.",
        options: [
          { text: "в строке о плавании стоит every week" },
          { text: "в строке о плавании стоит sometimes", correct: true },
          { text: "в строке о плавании стоит always" },
        ],
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку записки о плавании.",
      },
      {
        /*
         * ВОПРОС 10. Итог урока 10. Одно слово с НОВОЙ записи: в уроке 10 её нет.
         *
         * `him` В ЗАПИСИ НЕТ НАРОЧНО: слова в курсе нет ни карточкой, ни в
         * видимом тексте. Говорящих запись не называет, голоса идут по очереди.
         *
         * ОТВЕТ НА СЛУХ — ОДНО СЛОВО: руководство A2 Key, с. 29.
         */
        id: "q10-na-sluh-kak-chasto-s-dyadey",
        kind: "short",
        outcome: "понимать на слух, как часто человек что-то делает",
        zvuk: "Do you often see your uncle? — I see my uncle every month.",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие спрашивает, как часто он видится с дядей, и просит ответить " +
          "одним словом.",
        answer: "month",
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку записи с ответом.",
      },
      {
        /*
         * ВОПРОС 11. Итог урока 11. Переписать данную строку по условию, ПРАВКА
         * 13 сентября.
         */
        id: "q11-perepisat-s-usually",
        kind: "short",
        outcome: "строить о себе строку с наречием частоты",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что в записи о себе стоит строка I eat at home., и " +
          "просит переписать её так, чтобы в ней было «обычно».",
        answer: "I usually eat at home.",
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку и говорит, где встаёт наречие.",
      },
      {
        /*
         * ВОПРОС 12. Итог урока 1 второй раз. Назвать смысл, варианты по-русски.
         */
        id: "q12-chto-znachit-never",
        kind: "choice",
        outcome: "говорить, что бывает всегда и что иногда: I always work",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что Ким написал We never eat at school., и " +
          "спрашивает, что это значит.",
        options: [
          { text: "они едят в школе не каждый день" },
          { text: "они всегда едят в школе" },
          { text: "они не едят в школе совсем", correct: true },
        ],
        why: "ПИШЕТ РЕДАКТОР: разбор говорит, что значит never.",
      },
    ],
  },
};

export default modul;
