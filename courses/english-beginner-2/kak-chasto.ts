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
        "По-русски мы говорим «я всегда работаю утром» и «я иногда читаю вечером». В этих " +
        "строках слова «всегда» и «иногда» стоят перед глаголом. По-английски слова с тем же " +
        "смыслом стоят на том же месте. Здесь мы разберём слова always и sometimes и их место в строке.",

      blocks: [
        {
          /*
           * СЛУЧАЙ 1. always — всегда.
           */
          id: "sluchay-always",
          kind: "explain",
          znak: "1f501",
          text: [
            "Слово always значит «всегда»",
            "Словом always говорят о том, что бывает каждый раз, без исключений.",
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
            "Слово always стоит перед глаголом",
            "Первым в строке идёт слово о том, кто делает, потом always, а потом глагол. В " +
              "русской строке «я всегда читаю» слова идут в том же порядке.",
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
            "Слово sometimes значит «иногда»",
            "Словом sometimes говорят о том, что бывает не каждый раз. В строке оно встаёт на то " +
              "же место, что и always, то есть перед глаголом.",
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
            "Глагол остаётся прежним",
            "Когда в строку добавлено always или sometimes, глагол остаётся таким же, каким был " +
              "в строке без этого слова.",
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
            "Как называются слова о частоте",
            "В русском языке слова «всегда» и «иногда» относятся к наречиям. Английские слова с " +
              "тем же смыслом называют наречиями частоты, потому что они отвечают на вопрос «как " +
              "часто?».",
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
            "Как часто и когда в одной строке",
            "Наречие частоты стоит перед глаголом, а оборот о времени стоит в конце строки. Места " +
              "у них разные, поэтому в одной строке можно сказать и как часто, и когда.",
            "They sometimes swim at the weekend. — Они иногда плавают в выходные.",
            "We always study in the evening. — Мы всегда занимаемся вечером.",
          ],
          zvuchat: ["They sometimes swim at the weekend.", "We always study in the evening."],
        },
        {
          /*
           * СЛУЧАЙ 7. Таблица-свод. Прежний случай 7 «Две строки рядом» снят
           * решением методиста от 13 сентября 2026: годной пары строк для него нет,
           * а всё, что он показывал, уже есть в случаях 4 и 6 и в своде.
           */
          id: "tablica-svod-uroka-1",
          kind: "table",
          znak: "1f4c3",
          caption: "Одна и та же строка сначала со словом always, потом со словом sometimes",
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
            "Дана готовит дома каждое утро, без исключений. Отметь строку, в которой сказано " +
            "ровно это.",
          options: [
            { text: "Dana always cooks at home in the morning.", correct: true },
            { text: "Dana sometimes cooks at home in the morning." },
            { text: "Dana sometimes cooks at home in the evening." },
          ],
          hint: "Сверь с условием два места в каждой строке: наречие частоты и часть суток.",
          why:
            "Верна строка Dana always cooks at home in the morning. Вторая строка со словом " +
            "sometimes говорит, что утром Дана готовит не каждый раз. Третья строка расходится с " +
            "условием дважды. В ней тоже стоит sometimes, и говорит она о вечере, потому что в " +
            "конце стоит in the evening.",
        },
        {
          /*
           * З2. СТУПЕНЬКА «УЗНАТЬ». Замысел 18.1: четыре строки, в третьей
           * отмечать нечего — нарочно, чтобы задание не проходилось отметкой
           * второго слова каждой строки.
           */
          id: "z2-otmetit-slovo-o-chastote",
          kind: "hottext",
          prompt: "Отметь в этих строках все наречия частоты.",
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
          hint:
            "Наречие частоты стоит между словом о том, кто делает, и глаголом. Посмотри в каждой " +
            "строке, какое слово стоит на этом месте.",
          why:
            "Отмечены sometimes в первой строке и always во второй и четвёртой. Третья строка " +
            "говорит, что мы читаем вечером, но не говорит, как часто. Наречия частоты в ней нет, " +
            "поэтому отмечать там нечего.",
        },
        {
          /*
           * З3. СТУПЕНЬКА «ПРОИЗВЕСТИ». «Дана готовит дома каждый день» — вписать.
           */
          id: "z3-vpisat-always",
          kind: "gap",
          prompt:
            "Дана готовит дома каждый день, без исключений. Впиши недостающее слово.",
          before: "Dana ",
          after: " cooks at home.",
          answer: "always",
          hint: "Вспомни, каким словом говорят о том, что бывает каждый раз.",
          why:
            "Ответ: always. Целиком строка выглядит так: Dana always cooks at home. Наречие " +
            "частоты стоит перед глаголом и говорит, что Дана готовит дома каждый раз.",
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
            "Запиши по-английски «Они иногда гуляют в парке».",
          answer: "They sometimes walk in the park.",
          accept: ["Sometimes they walk in the park."],
          hint:
            "Начни со слова о том, кто гуляет. Наречие частоты поставь перед глаголом, а оборот о " +
            "парке в конец строки.",
          why:
            "They sometimes walk in the park. Наречие sometimes стоит перед глаголом walk, так же " +
            "как в русской строке «иногда» стоит перед словом «гуляют». Начать строку словом " +
            "sometimes тоже верно, и такой порядок разбирает урок «Иногда — с начала: Sometimes I read».",
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
          prompt: "Собери из четырёх кусков строку «Мы всегда готовим вечером».",
          items: ["in the evening.", "cook", "We", "always"],
          answer: [2, 3, 1, 0],
          hint: "Наречие частоты стоит перед глаголом.",
          why:
            "Собралась строка We always cook in the evening. Первым стоит We, за ним наречие " +
            "always, потом глагол cook, а оборот in the evening стоит в конце.",
        },
        {
          /*
           * З6. СТУПЕНЬКА «ПРИМЕНИТЬ К СЕБЕ». Образец не повторяет строк урока.
           */
          id: "z6-skazat-o-sebe-always-sometimes",
          kind: "speak",
          prompt:
            "Скажи вслух о себе две строки. В первой поставь always и назови то, что ты делаешь " +
            "всегда. Во второй поставь sometimes и назови то, что ты делаешь иногда.",
          phrase: "I always drink water in the morning. I sometimes play football at the weekend.",
          translation: "Я всегда пью воду утром. Я иногда играю в футбол в выходные.",
          hint: "В каждой строке наречие частоты стоит перед глаголом.",
          why:
            "I always drink water in the morning. I sometimes play football at the weekend. В " +
            "обеих строках наречие частоты стоит перед глаголом, а оборот о времени стоит в конце. " +
            "Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай его и " +
            "повтори следом за ним.",
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
        "Дана встаёт в семь утра почти каждый день, а в выходные спит дольше. Слово «всегда» о её " +
        "утре не подходит, потому что в выходные бывает иначе. Слово «иногда» тоже не подходит, " +
        "потому что рано она встаёт почти каждый день. По-русски Дана скажет «я обычно встаю рано». " +
        "Здесь мы разберём слова usually и often и их место в строке.",

      blocks: [
        {
          id: "sluchay-usually",
          kind: "explain",
          znak: "1f305",
          text: [
            "Слово usually значит «обычно»",
            "Словом usually говорят о том, что бывает как правило, но не без исключений. Так Дана " +
              "говорит о своём утре.",
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
            "Слово usually стоит перед глаголом",
            "У слова usually то же место в строке, что у always и sometimes. Первым идёт слово о " +
              "том, кто делает, потом usually, а потом глагол.",
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
            "Слово often значит «часто»",
            "Словом often говорят о том, что случается много раз. В строке оно тоже стоит перед " +
              "глаголом.",
            "We often walk in the park. — Мы часто гуляем в парке.",
            "I often read a magazine. — Я часто читаю журнал.",
          ],
          zvuchat: ["We often walk in the park.", "I often read a magazine."],
        },
        {
          /*
           * СЛУЧАЙ 4. Четыре слова и четыре перевода (16.7). Стоит отдельным
           * экраном сразу после often: так решил методист 14 сентября 2026 (reshenie-metodista-uroki-2-6-modul-16.md,
           * пункт 2.2) — на экране early и late таблица была бы второй мыслью.
           *
           * ПОРЯДОК СТРОК — ПОРЯДОК УРОКОВ, А НЕ ЧАСТОТЫ: always и sometimes из
           * урока 1, usually и often из этого урока. Выстроить их «от всегда к
           * иногда» значило бы вернуть снятую шкалу молча.
           */
          id: "tablica-chetyre-slova",
          kind: "table",
          znak: "1f4c3",
          caption: "Четыре наречия частоты и перевод каждого из них",
          head: ["Слово", "Перевод", "Строка", "Перевод строки"],
          rows: [
            ["always", "всегда", "I always drink water.", "Я всегда пью воду."],
            ["sometimes", "иногда", "I sometimes drink coffee.", "Я иногда пью кофе."],
            ["usually", "обычно", "I usually drink milk.", "Я обычно пью молоко."],
            ["often", "часто", "I often drink juice.", "Я часто пью сок."],
          ],
          zvuchat: [
            "I always drink water.",
            "I sometimes drink coffee.",
            "I usually drink milk.",
            "I often drink juice.",
          ],
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
            "Слова early и late значат «рано» и «поздно»",
            "Слово early значит «рано», а слово late значит «поздно». Оба слова стоят в конце " +
              "строки, после глагола.",
            "I usually get up early. — Я обычно встаю рано.",
            "I sometimes get up late. — Я иногда встаю поздно.",
          ],
          zvuchat: ["I usually get up early.", "I sometimes get up late."],
        },
        {
          id: "sluchay-homework",
          kind: "explain",
          znak: "1f4dd",
          text: [
            "Как часто делают домашнюю работу",
            "Слова do homework значат «делать домашнюю работу», и do здесь значит «делать». " +
              "Наречие частоты стоит перед do, потому что do в этой строке глагол.",
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
          caption: "Одна и та же строка с каждым из четырёх наречий частоты",
          head: ["Строка", "Перевод"],
          rows: [
            ["I always work in the morning.", "Я всегда работаю утром."],
            ["I sometimes work in the morning.", "Я иногда работаю утром."],
            ["I usually work in the morning.", "Я обычно работаю утром."],
            ["I often work in the morning.", "Я часто работаю утром."],
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
              example: "I often read a magazine.",
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
          prompt: "Айгерим обычно готовит дома. Отметь строку, в которой сказано ровно это.",
          options: [
            { text: "Aigerim often cooks at home." },
            { text: "Aigerim often cooks at school." },
            { text: "Aigerim usually cooks at home.", correct: true },
          ],
          hint: "Переведи в каждой строке наречие частоты и сверь с условием, где Айгерим готовит.",
          why:
            "Верна строка Aigerim usually cooks at home. В первой строке стоит often, а это «часто», " +
            "в условии же сказано «обычно». Вторая строка расходится с условием дважды. В ней тоже " +
            "стоит often, и говорит она о школе, потому что в конце стоит at school.",
        },
        {
          /*
           * Строка 3 держит `early` нарочно: это слово о времени, а не о частоте.
           */
          id: "z2-otmetit-usually-i-often",
          kind: "hottext",
          prompt: "Найди и отметь все наречия частоты в этих строках.",
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
          hint:
            "Наречие частоты стоит перед глаголом и отвечает на вопрос «как часто?». Проверь этим " +
            "вопросом каждое слово, которое хочешь отметить.",
          why:
            "Отмечены usually в первой строке и often во второй и четвёртой. В третьей строке стоит " +
            "early, а это «рано». Слово early говорит, когда я встаю, а не как часто, поэтому в " +
            "третьей строке отмечать нечего.",
        },
        {
          id: "z3-vpisat-usually",
          kind: "gap",
          prompt: "Мама обычно встаёт рано. Впиши недостающее слово.",
          before: "My mother ",
          after: " gets up early.",
          answer: "usually",
          hint: "Вспомни, каким словом говорят о том, что бывает как правило, но не без исключений.",
          why:
            "Ответ: usually. Целиком строка выглядит так: My mother usually gets up early. Наречие " +
            "частоты стоит перед глаголом и значит «обычно».",
        },
        {
          id: "z4-vpisat-often",
          kind: "gap",
          prompt: "Мы часто играем в футбол в парке. Впиши недостающее слово.",
          before: "We ",
          after: " play football in the park.",
          answer: "often",
          hint: "Вспомни, каким словом говорят о том, что случается много раз.",
          why:
            "Ответ: often. Целиком строка выглядит так: We often play football in the park. Наречие " +
            "частоты стоит перед глаголом и значит «часто».",
        },
        {
          id: "z5-zapisat-nurlan-obychno-gulyaet",
          kind: "short",
          prompt: "Запиши по-английски «Нурлан обычно гуляет в парке».",
          answer: "Nurlan usually walks in the park.",
          accept: ["Usually Nurlan walks in the park."],
          hint:
            "Начни с имени и поставь наречие частоты перед глаголом. Нурлан один, поэтому у глагола " +
            "будет окончание.",
          why:
            "Nurlan usually walks in the park. Наречие usually стоит перед глаголом walks, так же как " +
            "в русской строке «обычно» стоит перед словом «гуляет». У глагола есть окончание, потому " +
            "что Нурлан один.",
        },
        {
          id: "z6-skazat-o-sebe-usually-often",
          kind: "speak",
          prompt:
            "Скажи вслух о себе две строки. В первой поставь usually и назови то, что ты делаешь " +
            "обычно. Во второй поставь often и назови то, что ты делаешь часто.",
          phrase: "I usually drink tea in the morning. I often read in the evening.",
          translation: "Я обычно пью чай утром. Я часто читаю вечером.",
          hint: "Поставь наречие частоты сразу после I, перед глаголом.",
          why:
            "I usually drink tea in the morning. I often read in the evening. В обеих строках " +
            "наречие частоты стоит перед глаголом, а оборот о времени стоит в конце. Ответ на это " +
            "задание не проверяется, поэтому сверься с образцом. Послушай его и повтори следом за ним.",
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
        "По-русски мы говорим «я никогда не пью кофе». В этой строке о том, чего не бывает, говорят " +
        "два слова, «никогда» и «не». По-английски для этого хватает одного слова. Здесь мы " +
        "разберём слово never и его место в строке.",

      blocks: [
        {
          id: "sluchay-never",
          kind: "explain",
          znak: "1f6ab",
          text: [
            "Слово never значит «никогда»",
            "Словом never говорят о том, чего не бывает ни разу.",
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
            "Слово never стоит перед глаголом",
            "У слова never то же место, что у других наречий частоты. Оно стоит после слова о том, " +
              "кто делает, и перед глаголом.",
            "They never eat fish. — Они никогда не едят рыбу.",
            "I never read newspapers. — Я никогда не читаю газет.",
          ],
          zvuchat: ["They never eat fish.", "I never read newspapers."],
        },
        {
          id: "sluchay-vtorogo-ne-ne-nuzhno",
          kind: "explain",
          znak: "1f4a1",
          text: [
            "Одно слово вместо «никогда не»",
            "В русской строке рядом стоят два слова, «никогда» и «не». В английских строках ниже их " +
              "смысл передаёт одно слово never.",
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
            "«Не пью» и «никогда не пью»",
            "В строке с don't сказано, что я не пью кофе. В строке с never к этому добавлено, как " +
              "часто, и по-русски там стоит слово «никогда».",
            "I don't drink coffee. — Я не пью кофе.",
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
          caption: "Пять наречий частоты и перевод каждого из них",
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
            "Слово never рядом с оборотом о времени",
            "Слово never стоит перед глаголом, а оборот о времени стоит в конце строки, как и с " +
              "другими наречиями частоты.",
            "I never work in the morning. — Я никогда не работаю утром.",
            "We never swim at the weekend. — Мы никогда не плаваем в выходные.",
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
            "Чего не бывает никогда и что бывает всегда",
            "Слова never и always противоположны по смыслу, как «никогда» и «всегда». Первая строка " +
              "говорит, что кофе я не пью ни разу, а вторая говорит, что чай я пью каждый раз.",
            "I never drink coffee. — Я никогда не пью кофе.",
            "I always drink tea. — Я всегда пью чай.",
          ],
          zvuchat: ["I never drink coffee.", "I always drink tea."],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод «не и никогда» — замысел 18.12. Прежний состав
           * повторял таблицу случая 5, и урок показал бы один экран дважды.
           */
          id: "tablica-svod-uroka-3",
          kind: "table",
          znak: "1f4c3",
          caption: "Одна и та же строка сначала с don't, потом с never",
          head: ["Строка", "Перевод"],
          rows: [
            ["I don't sing at school.", "Я не пою в школе."],
            ["I never sing at school.", "Я никогда не пою в школе."],
          ],
          zvuchat: ["I don't sing at school.", "I never sing at school."],
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
          id: "z1-vybrat-nikogda-vecherom",
          kind: "choice",
          prompt: "Дана никогда не пьёт молоко вечером. Отметь строку, в которой сказано ровно это.",
          options: [
            { text: "Dana always drinks milk in the evening." },
            { text: "Dana never drinks milk in the evening.", correct: true },
            { text: "Dana always drinks milk in the morning." },
          ],
          hint: "Проверь в каждой строке, как часто Дана пьёт молоко и в какую часть суток.",
          why:
            "Верна строка Dana never drinks milk in the evening. В первой строке стоит always, а это " +
            "«всегда». Третья строка расходится с условием дважды. В ней тоже стоит always, и говорит " +
            "она об утре, потому что в конце стоит in the morning.",
        },
        {
          /*
           * Сопоставление из правки 16.8 — строки и смыслы дословно. usually и
           * often в пары нарочно не взяты: развести их можно только по шкале, а
           * шкала снята (16.7). Место в наборе — второе задание урока.
           */
          id: "z2-soedinit-stroku-so-smyslom",
          kind: "match",
          prompt: "Соедини каждую строку с тем, как часто так бывает.",
          left: ["I always cook at home.", "I sometimes cook at home.", "I never cook at home."],
          right: ["ни разу", "каждый раз, без исключений", "не каждый раз"],
          answer: [1, 2, 0],
          hint: "Сравни три строки и найди слово, которым они отличаются.",
          why:
            "Строка с always значит «каждый раз, без исключений». Строка с sometimes значит «не " +
            "каждый раз», а строка с never значит «ни разу». Остальные слова во всех трёх строках " +
            "одинаковые, поэтому пара находится по наречию частоты.",
        },
        /*
         * Остальные задания урока 3 — замысел, раздел 18.3.
         */
        {
          id: "z3-vpisat-never",
          kind: "gap",
          prompt: "Дедушка никогда не смотрит телевизор. Впиши недостающее слово.",
          before: "My grandfather ",
          after: " watches television.",
          answer: "never",
          hint: "Вспомни, каким словом говорят о том, чего не бывает ни разу.",
          why:
            "Ответ: never. Целиком строка выглядит так: My grandfather never watches television. " +
            "Одно слово never передаёт русское «никогда не» и стоит перед глаголом.",
        },
        {
          /*
           * `Dana doesn't cook in the morning.` не принимается нарочно (18.3):
           * строка верна, но в ней нет «никогда», названного условием.
           */
          id: "z4-zapisat-dana-nikogda-ne-gotovit",
          kind: "short",
          prompt: "Запиши по-английски «Дана никогда не готовит утром».",
          answer: "Dana never cooks in the morning.",
          hint:
            "Для «никогда не» хватит одного наречия частоты. Поставь его перед глаголом, а оборот о " +
            "времени в конец строки.",
          why:
            "Dana never cooks in the morning. Слово never передаёт «никогда не» и стоит перед глаголом " +
            "cooks. У глагола есть окончание, потому что Дана одна, а оборот in the morning стоит в конце.",
        },
        {
          id: "z5-sobrat-my-nikogda-ne-smotrim",
          kind: "order",
          prompt: "Собери из пяти кусков строку «Мы никогда не смотрим телевизор утром».",
          items: ["television", "We", "in the morning.", "watch", "never"],
          answer: [1, 4, 3, 0, 2],
          hint: "Наречие частоты стоит перед глаголом, а оборот о времени в конце строки.",
          why:
            "Собралась строка We never watch television in the morning. Первым стоит We, за ним " +
            "never, потом глагол watch и слово television, а оборот in the morning стоит в конце.",
        },
        {
          id: "z6-skazat-nikogda-i-vsegda",
          kind: "speak",
          prompt:
            "Скажи вслух о себе две строки. В первой поставь never и назови то, чего ты не делаешь " +
            "никогда. Во второй поставь always и назови то, что ты делаешь всегда.",
          phrase: "I never sleep in the afternoon. I always drink juice in the morning.",
          translation: "Я никогда не сплю днём. Я всегда пью сок утром.",
          hint: "Для «никогда не» хватит одного слова never. Оба наречия частоты поставь перед глаголом.",
          why:
            "I never sleep in the afternoon. I always drink juice in the morning. В первой строке " +
            "never одним словом передаёт «никогда не». В обеих строках наречие частоты стоит перед " +
            "глаголом. Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай его " +
            "и повтори следом за ним.",
        },
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
        "Утром у Кима уроки, и он всегда занят. По-русски Ким скажет «я всегда занят утром». Слово " +
        "«занят» не называет дела, а говорит о состоянии, как «устал» или «голоден». По-английски " +
        "слово о состоянии стоит после формы be. Здесь мы разберём, где в такой строке стоит " +
        "наречие частоты.",

      blocks: [
        {
          id: "sluchay-busy",
          kind: "explain",
          znak: "1f4bc",
          text: [
            "Слово busy значит «занят»",
            "Слово busy говорит о состоянии человека. Поэтому оно стоит после формы be, как tired и " +
              "hungry.",
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
            "Наречие частоты после формы be",
            "В строке с формой be наречие частоты стоит после неё, а слово о состоянии идёт следом.",
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
            "Строка с глаголом и строка с формой be",
            "С глаголом наречие частоты стоит перед ним, а с формой be после неё. В обеих строках " +
              "always стоит прямо перед work и busy, так же как «всегда» стоит перед «работаю» и «занят».",
            "I always work. — Я всегда работаю.",
            "I am always busy. — Я всегда занят.",
          ],
          zvuchat: ["I always work.", "I am always busy."],
        },
        {
          id: "sluchay-late-o-cheloveke",
          kind: "explain",
          znak: "23f0",
          text: [
            "Слово late о человеке",
            "Слово late уже знакомо в значении «поздно». После формы be оно говорит о человеке, и " +
              "по-русски такую строку переводят глаголом «опаздывать».",
            "He is often late. — Он часто опаздывает.",
            "I am never late. — Я никогда не опаздываю.",
          ],
          zvuchat: ["He is often late.", "I am never late."],
        },
        {
          id: "sluchay-are",
          kind: "explain",
          znak: "1f465",
          text: [
            "Форма are при we и they",
            "При we и they стоит форма are. Наречие частоты стоит после неё так же, как после am и is.",
            "We are sometimes late. — Мы иногда опаздываем.",
            "They are never late. — Они никогда не опаздывают.",
          ],
          zvuchat: ["We are sometimes late.", "They are never late."],
        },
        {
          id: "sluchay-never-s-formoy-be",
          kind: "explain",
          znak: "1f6ab",
          text: [
            "Слово never после формы be",
            "Слово never тоже стоит после формы be. По-русски здесь снова два слова, «никогда» и " +
              "«не», а в английской строке их смысл передаёт одно слово never.",
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
          caption: "Наречие always после форм am, is и are",
          head: ["Строка", "Перевод"],
          rows: [
            ["I am always busy.", "Я всегда занят."],
            ["He is always busy.", "Он всегда занят."],
            ["We are always busy.", "Мы всегда заняты."],
          ],
          zvuchat: ["I am always busy.", "He is always busy.", "We are always busy."],
        },
        {
          /*
           * СВОД — состав методиста от 14 сентября 2026 (пункт 4.3): прежний свод
           * повторял случай 3 побуквенно. Строение как у свода урока 5. usually в
           * уроке 4 не стоит нигде, поэтому строки не совпадают ни с одним ответом.
           */
          id: "tablica-svod-uroka-4",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода — строка с глаголом и строка с формой be, наречие usually.",
          head: ["ПИШЕТ РЕДАКТОР: заголовок столбца с глаголом.", "ПИШЕТ РЕДАКТОР: заголовок столбца с формой be.", "ПИШЕТ РЕДАКТОР: заголовок столбца перевода."],
          rows: [
            ["We usually work.", "We are usually busy.", "Мы обычно работаем. — Мы обычно заняты."],
            ["He usually gets up late.", "He is usually late.", "Он обычно встаёт поздно. — Он обычно опаздывает."],
          ],
          zvuchat: ["We usually work.", "We are usually busy.", "He usually gets up late.", "He is usually late."],
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
        /*
         * ЗАДАНИЯ УРОКА 4 — замысел, раздел 18.4.
         *
         * ВЫБОР ПРОВЕРЯЕТ СМЫСЛ, А НЕ МЕСТО НАРЕЧИЯ: у строки `I always am busy`
         * есть законное выделительное чтение, неверного варианта по месту нет.
         * По той же причине в сборке `am often` — один кусок.
         */
        {
          id: "z1-vybrat-chasto-opazdyvaet",
          kind: "choice",
          prompt: "Ким часто опаздывает. Отметь строку, в которой сказано ровно это.",
          options: [
            { text: "Kim is never late." },
            { text: "Kim is never busy." },
            { text: "Kim is often late.", correct: true },
          ],
          hint: "Переведи в каждой строке наречие частоты и слово после него.",
          why:
            "Верна строка Kim is often late. В первой строке стоит never, а это «никогда». Вторая " +
            "строка расходится с условием дважды. В ней тоже стоит never, а в конце стоит busy, то " +
            "есть «занят», а не «опаздывает».",
        },
        {
          id: "z2-otmetit-formu-be",
          kind: "hottext",
          prompt: "Отметь форму be в каждой строке, где она есть.",
          parts: [
            { text: "My ", selectable: true },
            { text: "sister ", selectable: true },
            { text: "is ", selectable: true, correct: true },
            { text: "always ", selectable: true },
            { text: "busy ", selectable: true },
            { text: "in the " },
            { text: "evening", selectable: true },
            { text: ".\n" },
            { text: "They ", selectable: true },
            { text: "often ", selectable: true },
            { text: "play ", selectable: true },
            { text: "football ", selectable: true },
            { text: "at " },
            { text: "school", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "am ", selectable: true, correct: true },
            { text: "never ", selectable: true },
            { text: "hungry ", selectable: true },
            { text: "in the " },
            { text: "afternoon", selectable: true },
            { text: ".\n" },
            { text: "Dana ", selectable: true },
            { text: "is ", selectable: true, correct: true },
            { text: "sometimes ", selectable: true },
            { text: "late", selectable: true },
            { text: "." },
          ],
          hint:
            "Найди в каждой строке наречие частоты и посмотри на слово перед ним. Формой be бывают " +
            "am, is и are.",
          why:
            "Отмечены is в первой строке, am в третьей и is в четвёртой. Во второй строке стоит глагол " +
            "play, и наречие often стоит перед ним. Формы be в этой строке нет, поэтому отмечать там " +
            "нечего.",
        },
        {
          id: "z3-vpisat-is",
          kind: "gap",
          prompt: "Брат всегда занят утром. Впиши недостающую форму be.",
          before: "My brother ",
          after: " always busy in the morning.",
          answer: "is",
          hint: "Брат один. Вспомни, какая форма be стоит при he.",
          why:
            "Ответ: is. Целиком строка выглядит так: My brother is always busy in the morning. Брат " +
            "один, поэтому стоит is, а наречие always стоит после этой формы.",
        },
        {
          id: "z4-zapisat-oni-inogda-zanyaty",
          kind: "short",
          prompt: "Запиши по-английски «Они иногда заняты в школе».",
          answer: "They are sometimes busy at school.",
          accept: ["Sometimes they are busy at school."],
          hint:
            "При they возьми форму are. Наречие частоты поставь после неё, а оборот о школе в конец " +
            "строки.",
          why:
            "They are sometimes busy at school. Наречие sometimes стоит после формы are, а busy идёт " +
            "за ним. Начать строку словом sometimes тоже верно, и такой порядок разбирает урок " +
            "«Иногда — с начала: Sometimes I read».",
        },
        {
          id: "z5-sobrat-ya-chasto-zanyat",
          kind: "order",
          prompt: "Собери из четырёх кусков строку «Я часто занят вечером».",
          items: ["busy", "I", "in the evening.", "am often"],
          answer: [1, 3, 0, 2],
          hint: "Строка начинается словом I, а оборот о времени стоит в конце.",
          why:
            "Собралась строка I am often busy in the evening. Первым стоит I, за ним форма am и " +
            "наречие often, потом busy, а оборот in the evening стоит в конце.",
        },
        {
          id: "z6-skazat-kakim-byvaesh",
          kind: "speak",
          prompt:
            "Скажи вслух две строки. В первой начни с I am и назови состояние, в котором ты часто " +
            "бываешь. Во второй назови человека, который никогда не опаздывает.",
          phrase: "I am often hungry in the afternoon. My sister is never late.",
          translation: "Я часто голоден днём. Моя сестра никогда не опаздывает.",
          hint: "В обеих строках поставь наречие частоты после формы be.",
          why:
            "I am often hungry in the afternoon. My sister is never late. В обеих строках наречие " +
            "частоты стоит после формы be, а hungry и late идут за ним. Ответ на это задание не " +
            "проверяется, поэтому сверься с образцом. Послушай его и повтори следом за ним.",
        },
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
        "Нурлан всегда работает утром, а его сестра всегда работает вечером. По-русски мы говорим " +
        "«он всегда работает утром» и «она всегда работает вечером». В английской строке об одном " +
        "человеке у глагола есть окончание -s. Здесь мы разберём, как наречие частоты стоит в " +
        "строке об одном человеке.",

      blocks: [
        {
          id: "sluchay-he-i-she",
          kind: "explain",
          znak: "1f9d1",
          text: [
            "При he и she глагол с окончанием",
            "В строке об одном человеке к глаголу прибавляется -s, как в модуле «Что я делаю каждый " +
              "день». Когда в строку добавлено наречие частоты, окончание остаётся на месте.",
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
            "Место наречия частоты в строке об одном человеке",
            "Наречие частоты стоит между словом о том, кто делает, и глаголом. Окончание у глагола " +
              "этого места не меняет.",
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
            "Наречие частоты окончания не получает",
            "Окончание -s прибавляется к глаголу. Наречие частоты от этого не меняется, и в строке о " +
              "нём оно такое же, как в строке о ней.",
            "He often eats at school. — Он часто ест в школе.",
            "She often eats at school. — Она часто ест в школе.",
          ],
          zvuchat: ["He often eats at school.", "She often eats at school."],
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
            "Окончания -es и -ies рядом с наречием частоты",
            "Глаголы watch и study пишутся с окончаниями -es и -ies, как в уроке «Два разных -s: " +
              "boxes и he watches». Наречие частоты этого написания не меняет.",
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
            "Имя вместо he и she",
            "Когда вместо he или she стоит имя или слова my brother, глагол тоже идёт с окончанием. " +
              "Наречие частоты стоит перед ним на прежнем месте.",
            "Aigerim sometimes cooks at home. — Айгерим иногда готовит дома.",
            "My brother always swims at the weekend. — Мой брат всегда плавает в выходные.",
          ],
          zvuchat: ["Aigerim sometimes cooks at home.", "My brother always swims at the weekend."],
        },
        {
          id: "sluchay-ya-i-on-ryadom",
          kind: "explain",
          znak: "2696",
          text: [
            "Строка о себе и строка о нём",
            "В строке о себе глагол стоит без окончания, а в строке о нём с окончанием. Наречие always " +
              "в обеих строках одно и то же и стоит на том же месте.",
            "I always work in the morning. — Я всегда работаю утром.",
            "He always works in the morning. — Он всегда работает утром.",
          ],
          zvuchat: ["I always work in the morning.", "He always works in the morning."],
        },
        {
          /*
           * СЛУЧАЙ 7. Семь строк со словом usually — замысел 18.12: подлежащих
           * семь, а не шесть, как стояло в 9.5.
           */
          id: "tablica-usually-u-vseh",
          kind: "table",
          znak: "1f4c3",
          caption: "При I, you, we и they глагол без окончания, а при he, she и имени с окончанием",
          head: ["Без окончания", "Перевод", "С окончанием", "Перевод"],
          rows: [
            ["I usually cook fish.", "Я обычно готовлю рыбу.", "He usually cooks fish.", "Он обычно готовит рыбу."],
            ["You usually cook fish.", "Ты обычно готовишь рыбу.", "She usually cooks fish.", "Она обычно готовит рыбу."],
            ["We usually cook fish.", "Мы обычно готовим рыбу.", "Dana usually cooks fish.", "Дана обычно готовит рыбу."],
            ["They usually cook fish.", "Они обычно готовят рыбу.", "—", "—"],
          ],
          zvuchat: [
            "I usually cook fish.",
            "You usually cook fish.",
            "We usually cook fish.",
            "They usually cook fish.",
            "He usually cooks fish.",
            "She usually cooks fish.",
            "Dana usually cooks fish.",
          ],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод «два столбца» — замысел 18.12, три строки в столбце.
           */
          id: "tablica-svod-uroka-5",
          kind: "table",
          znak: "1f4c3",
          caption: "В каждой паре наречие частоты одно и то же, а окончание есть у глагола во втором столбце",
          head: ["Без окончания", "С окончанием", "Перевод пары"],
          rows: [
            ["I always work.", "He always works.", "Я всегда работаю. — Он всегда работает."],
            ["We often read.", "She often reads.", "Мы часто читаем. — Она часто читает."],
            ["They never cook.", "Dana never cooks.", "Они никогда не готовят. — Дана никогда не готовит."],
          ],
          zvuchat: [
            "I always work.",
            "He always works.",
            "We often read.",
            "She often reads.",
            "They never cook.",
            "Dana never cooks.",
          ],
        },
        /*
         * ЗАДАНИЯ УРОКА 5 — замысел, раздел 18.5.
         */
        {
          id: "z1-vybrat-brat-obychno-utrom",
          kind: "choice",
          prompt: "Её брат обычно пьёт чай утром. Отметь строку, в которой это сказано верно.",
          options: [
            { text: "Her brother usually drink tea in the morning." },
            { text: "Her brother usually drinks tea in the morning.", correct: true },
            { text: "Her brother usually drink tea in the evening." },
          ],
          hint: "Проверь в каждой строке окончание у глагола и часть суток.",
          why:
            "Верна строка Her brother usually drinks tea in the morning. В первой строке у глагола " +
            "drink нет окончания, хотя брат один. Третья строка неверна дважды. В ней тоже нет " +
            "окончания, и говорит она о вечере, потому что в конце стоит in the evening.",
        },
        {
          id: "z2-otmetit-glagol-s-okonchaniem",
          kind: "hottext",
          prompt: "Отметь глагол с окончанием в каждой строке, где он есть.",
          parts: [
            { text: "My ", selectable: true },
            { text: "uncle ", selectable: true },
            { text: "often ", selectable: true },
            { text: "plays ", selectable: true, correct: true },
            { text: "football ", selectable: true },
            { text: "at the " },
            { text: "weekend", selectable: true },
            { text: ".\n" },
            { text: "We ", selectable: true },
            { text: "usually ", selectable: true },
            { text: "read ", selectable: true },
            { text: "in the " },
            { text: "evening", selectable: true },
            { text: ".\n" },
            { text: "Aigerim ", selectable: true },
            { text: "never ", selectable: true },
            { text: "drinks ", selectable: true, correct: true },
            { text: "juice", selectable: true },
            { text: ".\n" },
            { text: "She ", selectable: true },
            { text: "sometimes ", selectable: true },
            { text: "sleeps ", selectable: true, correct: true },
            { text: "in the " },
            { text: "afternoon", selectable: true },
            { text: "." },
          ],
          hint:
            "Смотри на глагол сразу после наречия частоты. Буква s на конце слов always и sometimes " +
            "окончанием не считается.",
          why:
            "Отмечены plays в первой строке, drinks в третьей и sleeps в четвёртой. Вторая строка " +
            "начинается с We, людей несколько, поэтому у глагола read окончания нет, и отмечать там " +
            "нечего.",
        },
        {
          id: "z3-vpisat-walks",
          kind: "gap",
          prompt: "Нурлан часто гуляет в парке. Впиши глагол walk в нужной форме.",
          before: "Nurlan often ",
          after: " in the park.",
          answer: "walks",
          hint: "Посмотри, сколько человек гуляет.",
          why:
            "Ответ: walks. Целиком строка выглядит так: Nurlan often walks in the park. Нурлан один, " +
            "поэтому у глагола стоит окончание -s, а наречие often остаётся перед глаголом.",
        },
        {
          id: "z4-zapisat-dana-vsegda-gotovit",
          kind: "short",
          prompt: "Запиши по-английски «Дана всегда готовит вечером».",
          answer: "Dana always cooks in the evening.",
          hint:
            "Начни с имени и поставь наречие частоты перед глаголом. Дана одна, поэтому у глагола " +
            "будет окончание.",
          why:
            "Dana always cooks in the evening. Наречие always стоит перед глаголом cooks. Дана одна, " +
            "поэтому у глагола есть окончание -s, а оборот in the evening стоит в конце.",
        },
        {
          /*
           * Сопоставление из правки 16.8 — английские строки дословно. Ступенька
           * «узнать»: окончание -s ученик видит, а не ставит.
           */
          id: "z5-soedinit-o-sebe-i-o-drugom",
          kind: "match",
          prompt:
            "Соедини каждую строку о себе со строкой о другом человеке, где то же дело и то же " +
            "наречие частоты.",
          left: ["I always read in the evening.", "I often walk in the park.", "I never drink coffee."],
          right: ["He often walks in the park.", "My father never drinks coffee.", "She always reads in the evening."],
          answer: [2, 0, 1],
          hint: "Ищи пару по глаголу. В строке о другом человеке у него появится окончание.",
          why:
            "Пары находятся по глаголу, который в обеих строках один и тот же. В строках о себе стоят " +
            "read, walk и drink, а в строках о другом человеке reads, walks и drinks.",
        },
        {
          id: "z6-skazat-o-dvuh-rodnyh",
          kind: "speak",
          prompt:
            "Скажи вслух две строки о двух своих родных. В первой назови то, что один из них делает " +
            "часто. Во второй назови то, чего другой не делает никогда.",
          phrase: "My mother often cooks at home. My brother never sleeps in the afternoon.",
          translation: "Моя мама часто готовит дома. Мой брат никогда не спит днём.",
          hint: "В каждой строке речь об одном человеке, поэтому у глагола будет окончание.",
          why:
            "My mother often cooks at home. My brother never sleeps in the afternoon. В обеих строках " +
            "речь об одном человеке, поэтому у глаголов cooks и sleeps есть окончание. Наречие частоты " +
            "стоит перед глаголом. Ответ на это задание не проверяется, поэтому сверься с образцом. " +
            "Послушай его и повтори следом за ним.",
        },
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
        "По-русски мы говорим «я иногда готовлю дома» и «иногда я готовлю дома», и обе строки значат " +
        "одно и то же. По-английски слово sometimes тоже можно поставить и перед глаголом, и в начало " +
        "строки. Здесь мы разберём строки, которые начинаются словом sometimes.",

      blocks: [
        {
          id: "sluchay-sometimes-v-nachale",
          kind: "explain",
          znak: "1f51c",
          text: [
            "Слово sometimes в начале строки",
            "Слово sometimes можно поставить первым, перед словом о том, кто делает. Остальные слова " +
              "идут в прежнем порядке.",
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
            "Оба места верны",
            "Строка со словом sometimes перед глаголом и строка с ним в начале значат одно и то же. " +
              "Поэтому перевод у них тоже один.",
            "I sometimes cook at home. — Иногда я готовлю дома.",
            "Sometimes I cook at home. — Иногда я готовлю дома.",
          ],
          zvuchat: ["I sometimes cook at home.", "Sometimes I cook at home."],
        },
        {
          id: "sluchay-zapyataya-ne-nuzhna",
          kind: "explain",
          znak: "270f",
          text: [
            "Запятая после sometimes не нужна",
            "По-русски после «иногда» в начале строки запятую не ставят, и в английских строках ниже " +
              "её тоже нет. За словом sometimes сразу идёт слово о том, кто делает.",
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
            "Слово sometimes перед именем",
            "После sometimes может стоять и имя или слова my father. Глагол после них идёт с " +
              "окончанием, как в других строках об одном человеке.",
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
            "Оборот о времени остаётся в конце",
            "Слово sometimes переходит в начало строки, а оборот о времени остаётся на своём месте, в " +
              "конце.",
            "Sometimes I work at the weekend. — Иногда я работаю в выходные.",
            "Sometimes we study in the evening. — Иногда мы занимаемся вечером.",
          ],
          zvuchat: ["Sometimes I work at the weekend.", "Sometimes we study in the evening."],
        },
        {
          /*
           * СЛУЧАЙ 6. Строки — замысел 18.12.
           */
          id: "sluchay-zachem-nachinat-s-nego",
          kind: "explain",
          znak: "1f442",
          text: [
            "Первым сказано, как часто",
            "Когда строка начинается словом sometimes, первым сказано, что так бывает не каждый раз, " +
              "а уже потом кто и что делает.",
            "Sometimes my sister sings at home. — Иногда моя сестра поёт дома.",
            "Sometimes my brother dances at school. — Иногда мой брат танцует в школе.",
          ],
          zvuchat: ["Sometimes my sister sings at home.", "Sometimes my brother dances at school."],
        },
        {
          id: "sluchay-dve-stroki-always-i-sometimes",
          kind: "explain",
          znak: "1f4dd",
          text: [
            "Две строки о работе рядом",
            "Первая строка говорит, что утром я работаю каждый раз. Вторая начинается словом sometimes " +
              "и говорит, что вечером я работаю не каждый раз.",
            "I always work in the morning. — Я всегда работаю утром.",
            "Sometimes I work in the evening. — Иногда я работаю вечером.",
          ],
          zvuchat: ["I always work in the morning.", "Sometimes I work in the evening."],
        },
        {
          /*
           * СЛУЧАЙ 8. Свод «таблица двух мест» — замысел 18.12.
           */
          id: "tablica-svod-uroka-6",
          kind: "table",
          znak: "1f4c3",
          caption: "Два места слова sometimes и один перевод на обе строки",
          head: ["Слово перед глаголом", "Слово в начале", "Перевод"],
          rows: [
            ["I sometimes cook at home.", "Sometimes I cook at home.", "Иногда я готовлю дома."],
            ["She sometimes reads a magazine.", "Sometimes she reads a magazine.", "Иногда она читает журнал."],
          ],
          zvuchat: [
            "I sometimes cook at home.",
            "Sometimes I cook at home.",
            "She sometimes reads a magazine.",
            "Sometimes she reads a magazine.",
          ],
        },
        /*
         * ЗАДАНИЯ УРОКА 6 — замысел, раздел 18.6. Оборот `walk to school` урок
         * обходит: так звучит вопрос 6 работы.
         */
        {
          id: "z1-vybrat-dyadya-inogda-vecherom",
          kind: "choice",
          prompt: "Дядя иногда работает вечером. Отметь строку, в которой сказано ровно это.",
          options: [
            { text: "Sometimes my uncle works in the evening.", correct: true },
            { text: "Sometimes my uncle works in the morning." },
            { text: "My uncle always works in the morning." },
          ],
          hint: "Переведи каждую строку и сверь с условием, как часто дядя работает и когда.",
          why:
            "Верна строка Sometimes my uncle works in the evening. Вторая строка говорит об утре, " +
            "потому что в конце стоит in the morning. Третья строка расходится с условием дважды. В ней " +
            "стоит always, а это «всегда», и говорит она тоже об утре.",
        },
        {
          /*
           * Сопоставление из правки 16.8 — английские строки дословно. Партнёр
           * у каждой строки один: слова совпадают, отличается место sometimes.
           * СБОРЩИКУ (16.8): ни одна из шести строк не должна стоять ответом
           * задания этого же урока — сверить, когда методист назовёт задания.
           */
          id: "z2-soedinit-dva-mesta-sometimes",
          kind: "match",
          prompt: "Соедини каждую строку со строкой, которая значит то же самое.",
          left: ["I sometimes read a magazine.", "We sometimes walk in the park.", "They sometimes eat at school."],
          right: ["Sometimes they eat at school.", "Sometimes I read a magazine.", "Sometimes we walk in the park."],
          answer: [1, 2, 0],
          hint: "Сравни в строках все слова, кроме sometimes. У строк одной пары они совпадают.",
          why:
            "Пара находится по словам, которые совпадают, и у каждой строки она одна. Обе строки пары " +
            "верны и значат одно и то же, а различаются они местом слова sometimes.",
        },
        {
          id: "z3-vpisat-sometimes",
          kind: "gap",
          prompt:
            "Нурлан иногда играет в футбол в школе. Строка начинается наречием частоты. Впиши его.",
          before: "",
          after: " Nurlan plays football at school.",
          answer: "Sometimes",
          hint: "Вспомни, каким словом говорят о том, что бывает не каждый раз.",
          why:
            "Ответ: Sometimes. Целиком строка выглядит так: Sometimes Nurlan plays football at school. " +
            "Наречие частоты стоит первым, а за ним идут имя и глагол с окончанием.",
        },
        {
          /*
           * `We sometimes watch television.` не принимается нарочно (18.6): условие
           * прямо называет начало строки.
           */
          id: "z4-zapisat-inogda-smotrim",
          kind: "short",
          prompt: "Запиши по-английски «Иногда мы смотрим телевизор». Начни строку наречием частоты.",
          answer: "Sometimes we watch television.",
          hint: "Слова в английской строке идут в том же порядке, что в русской фразе.",
          why:
            "Sometimes we watch television. Строка начинается наречием sometimes, как русская фраза " +
            "начинается словом «иногда», а за ним идут we и глагол watch.",
        },
        {
          id: "z5-sobrat-inogda-ya-plavayu",
          kind: "order",
          prompt:
            "Собери из четырёх кусков строку «Иногда я плаваю в выходные». Начни её наречием частоты.",
          items: ["swim", "Sometimes", "at the weekend.", "I"],
          answer: [1, 3, 0, 2],
          hint: "Кусок с заглавной буквой стоит первым, а кусок с точкой последним.",
          why:
            "Собралась строка Sometimes I swim at the weekend. Первым стоит Sometimes, за ним I и " +
            "глагол swim, а оборот at the weekend стоит в конце.",
        },
        {
          id: "z6-skazat-chto-byvaet-inogda",
          kind: "speak",
          prompt:
            "Скажи вслух две строки и начни каждую словом sometimes. В первой назови то, что ты " +
            "делаешь иногда. Во второй назови то, что иногда делает кто-то из твоих родных.",
          phrase: "Sometimes I drink juice in the evening. Sometimes my grandmother cooks at home.",
          translation: "Иногда я пью сок вечером. Иногда моя бабушка готовит дома.",
          hint: "Во второй строке речь об одном человеке, поэтому у глагола будет окончание.",
          why:
            "Sometimes I drink juice in the evening. Sometimes my grandmother cooks at home. Обе строки " +
            "начинаются наречием sometimes. Во второй речь об одном человеке, поэтому у глагола cooks " +
            "есть окончание. Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай " +
            "его и повтори следом за ним.",
        },
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
        /*
         * ЗАДАНИЯ УРОКА 7 — замысел, раздел 18.7. Обороты `write to … every month`
         * и `see my uncle every month` урок обходит: так звучат вопросы 7 и 10 работы.
         */
        {
          id: "z1-vybrat-kazhduyu-nedelyu",
          kind: "choice",
          prompt: "ПИШЕТ РЕДАКТОР: условие говорит, что Дана ходит в библиотеку КАЖДУЮ НЕДЕЛЮ, и просит выбрать строку.",
          options: [
            { text: "Dana goes to the library every days." },
            { text: "Dana goes to the library every weeks." },
            { text: "Dana goes to the library every week.", correct: true },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к выбору о библиотеке — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку о библиотеке и чем не подходят две другие.",
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
          id: "z2-najti-slova-v-setke",
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
        {
          id: "z3-vpisat-month",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие говорит, что двоюродный брат играет в футбол КАЖДЫЙ МЕСЯЦ.",
          before: "My cousin plays football every ",
          after: ".",
          answer: "month",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к вставке о двоюродном брате — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку о двоюродном брате целиком.",
        },
        {
          /*
           * Оборот времени в начале строки урок не учит, а accept принимает:
           * строка верна, и наказывать за неё нельзя (18.7).
           */
          id: "z4-zapisat-vizhus-s-druzyami",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит написать по-английски «Я вижусь с друзьями каждую неделю».",
          answer: "I see my friends every week.",
          accept: ["Every week I see my friends."],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи о друзьях — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ о друзьях.",
        },
        {
          id: "z5-sobrat-dana-chitaet-zhurnal",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит собрать строку из кусков.",
          items: ["every month.", "Dana", "a magazine", "reads"],
          answer: [1, 3, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к сборке о журнале.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет собранную строку о журнале.",
        },
        {
          id: "z6-skazat-kazhduyu-nedelyu",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит сказать о себе, что делаешь каждую неделю, и о ком-то из родных, что он делает каждый день.",
          phrase: "I play football every week. My brother drinks juice every day.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца о каждой неделе.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию о каждой неделе.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец о каждой неделе с формулой самопроверки курса.",
        },
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
           * СЛУЧАЙ 6. Сцена — замысел 18.8: реплик четыре, а не три, как стояло в
           * 9.8 (без уточняющего вопроса в сцене нет слова о частоте). Первым
           * говорит Ким, за ним в курсе закреплён мужской голос.
           */
          id: "razgovor-kim-i-dana",
          kind: "example",
          znak: "1f4ac",
          razgovor: true,
          pervyyGolos: "muzhskoy",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит, кто с кем говорит и что первым говорит Ким.",
          text:
            "Do you work in the morning?\n" +
            "Yes, I do.\n" +
            "Do you always work in the morning?\n" +
            "No, I don't. I sometimes work in the evening.",
          perevod: {
            "Do you work in the morning?": "ПИШЕТ РЕДАКТОР: перевод первой реплики.",
            "Yes, I do.": "ПИШЕТ РЕДАКТОР: перевод второй реплики.",
            "Do you always work in the morning?": "ПИШЕТ РЕДАКТОР: перевод третьей реплики.",
            "No, I don't. I sometimes work in the evening.": "ПИШЕТ РЕДАКТОР: перевод четвёртой реплики.",
          },
          explain: "ПИШЕТ РЕДАКТОР: разбор разговора.",
        },
        {
          id: "tablica-do-kto-narechie-glagol",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись говорит о порядке: do, кто, слово о частоте, глагол.",
          head: ["Строка", "Перевод"],
          rows: [
            ["Do you usually sing at home?", "Ты обычно поёшь дома?"],
            ["Do they often read in the evening?", "Они часто читают вечером?"],
            ["Do we always eat at home?", "Мы всегда едим дома?"],
          ],
          zvuchat: [
            "Do you usually sing at home?",
            "Do they often read in the evening?",
            "Do we always eat at home?",
          ],
        },
        {
          id: "tablica-svod-uroka-8",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись свода называет вопрос и два коротких ответа.",
          head: ["Строка", "Перевод"],
          rows: [
            ["Do you often play football?", "Ты часто играешь в футбол?"],
            ["Yes, I do.", "Да."],
            ["No, I don't.", "Нет."],
          ],
          zvuchat: ["Do you often play football?", "Yes, I do.", "No, I don't."],
        },
        /*
         * ЗАДАНИЯ УРОКА 8 — замысел, раздел 18.8.
         */
        {
          id: "z1-vybrat-chasto-li-kofe",
          kind: "choice",
          prompt: "ПИШЕТ РЕДАКТОР: условие говорит, что Ким хочет узнать, ЧАСТО ли Дана пьёт кофе, и просит выбрать вопрос.",
          options: [
            { text: "Do you always drinks coffee?" },
            { text: "Do you often drink coffee?", correct: true },
            { text: "Do you often drinks coffee?" },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к выбору о кофе — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку о кофе и чем не подходят две другие.",
        },
        {
          id: "z2-otmetit-slovo-v-voprose",
          kind: "hottext",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит отметить слово о частоте в вопросах.",
          parts: [
            { text: "Do ", selectable: true },
            { text: "you ", selectable: true },
            { text: "usually ", selectable: true, correct: true },
            { text: "sleep ", selectable: true },
            { text: "in the " },
            { text: "afternoon", selectable: true },
            { text: "?\n" },
            { text: "Do ", selectable: true },
            { text: "they ", selectable: true },
            { text: "play ", selectable: true },
            { text: "football ", selectable: true },
            { text: "at " },
            { text: "school", selectable: true },
            { text: "?\n" },
            { text: "Do ", selectable: true },
            { text: "you ", selectable: true },
            { text: "sometimes ", selectable: true, correct: true },
            { text: "dance ", selectable: true },
            { text: "at " },
            { text: "home", selectable: true },
            { text: "?\n" },
            { text: "Do ", selectable: true },
            { text: "your ", selectable: true },
            { text: "parents ", selectable: true },
            { text: "always ", selectable: true, correct: true },
            { text: "eat ", selectable: true },
            { text: "at " },
            { text: "home", selectable: true },
            { text: "?" },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к отметке слова в вопросах.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет отмеченные слова слова в вопросах и строку, где отмечать нечего.",
        },
        {
          id: "z3-vpisat-always-v-vopros",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит спросить, ВСЕГДА ли они занимаются в школе.",
          before: "Do they ",
          after: " study at school?",
          answer: "always",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к вставке о занятиях в школе — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку о занятиях в школе целиком.",
        },
        {
          id: "z4-sprosit-obychno-li-rano",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит спросить Дану, ОБЫЧНО ли она встаёт рано.",
          answer: "Do you usually get up early?",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи о раннем подъёме — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ о раннем подъёме.",
        },
        {
          /*
           * ОДИН ПОРЯДОК ДЕРЖИТ ТОЛЬКО УСЛОВИЕ (18.8): `Do you swim often at the
           * weekend?` тоже верный английский. Условие обязано назвать место слова
           * о частоте — перед глаголом.
           */
          id: "z5-sobrat-vopros-s-often",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит собрать вопрос и прямо говорит: слово о частоте стоит перед глаголом.",
          items: ["swim", "Do", "at the weekend?", "often", "you"],
          answer: [1, 4, 3, 0, 2],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к сборке о плавании.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет собранную строку о плавании.",
        },
        {
          /*
           * Образец — разговор на два голоса.
           */
          id: "z6-sprosit-i-otvetit",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит спросить друга, обычно ли он пьёт молоко вечером, и ответить за него.",
          phrase: "Do you usually drink milk in the evening? — Yes, I do.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца о молоке вечером.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию о молоке вечером.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец о молоке вечером с формулой самопроверки курса.",
        },
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
        /*
         * ЗАДАНИЯ УРОКА 9 — замысел, раздел 18.9. Строку `Sometimes I swim at the
         * weekend.` задания обходят: на ней стоит вопрос 9 работы.
         */
        {
          id: "z1-otmetit-narechiya-v-zapiske",
          kind: "hottext",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит отметить в записке все наречия частоты. every month не отмечается.",
          parts: [
            { text: "Hello", selectable: true },
            { text: "! " },
            { text: "My ", selectable: true },
            { text: "name ", selectable: true },
            { text: "is ", selectable: true },
            { text: "Aigerim", selectable: true },
            { text: ". " },
            { text: "I ", selectable: true },
            { text: "am ", selectable: true },
            { text: "a " },
            { text: "student", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "always ", selectable: true, correct: true },
            { text: "get ", selectable: true },
            { text: "up ", selectable: true },
            { text: "early", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "usually ", selectable: true, correct: true },
            { text: "study ", selectable: true },
            { text: "at " },
            { text: "home ", selectable: true },
            { text: "in the " },
            { text: "evening", selectable: true },
            { text: ".\n" },
            { text: "Sometimes ", selectable: true, correct: true },
            { text: "I ", selectable: true },
            { text: "swim ", selectable: true },
            { text: "at the " },
            { text: "weekend", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "never ", selectable: true, correct: true },
            { text: "drink ", selectable: true },
            { text: "coffee", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "often ", selectable: true, correct: true },
            { text: "drink ", selectable: true },
            { text: "tea ", selectable: true },
            { text: "in the " },
            { text: "morning", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "am ", selectable: true },
            { text: "always ", selectable: true, correct: true },
            { text: "busy", selectable: true },
            { text: ".\n" },
            { text: "I ", selectable: true },
            { text: "see ", selectable: true },
            { text: "my ", selectable: true },
            { text: "grandmother ", selectable: true },
            { text: "every ", selectable: true },
            { text: "month", selectable: true },
            { text: ".\n" },
            { text: "Do ", selectable: true },
            { text: "you ", selectable: true },
            { text: "get ", selectable: true },
            { text: "up ", selectable: true },
            { text: "early", selectable: true },
            { text: "?" },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к отметке в записке.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет отмеченные слова в записке и строку, где отмечать нечего.",
        },
        {
          id: "z2-vybrat-chto-kazhdyy-mesyac",
          kind: "choice",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, что Айгерим делает КАЖДЫЙ МЕСЯЦ.",
          options: [
            { text: "She sees her grandmother.", correct: true },
            { text: "She swims." },
            { text: "She drinks tea." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к выбору о записке — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку о записке и чем не подходят две другие.",
        },
        {
          /*
           * В уроке чтения ответ законно берётся из текста (18.9): это и есть
           * умение урока, а не утечка.
           */
          id: "z3-zapisat-chto-ne-pyot",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, что Айгерим никогда не пьёт, и просит ответить одним словом.",
          answer: "coffee",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи о напитке — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ о напитке.",
        },
        {
          id: "z4-vpisat-usually-o-ney",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит пересказать о ней строку записки, где она занимается дома вечером.",
          before: "Aigerim ",
          after: " studies at home in the evening.",
          answer: "usually",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к вставке о занятиях дома — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку о занятиях дома целиком.",
        },
        {
          /*
           * Один голос, мужской: говорит Ким (18.9).
           */
          id: "z5-rasskazat-o-sebe-kak-aygerim",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит рассказать о себе так же, как Айгерим.",
          phrase: "Hello! My name is Kim. I usually get up late. I never drink milk in the evening.",
          pervyyGolos: "muzhskoy",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца рассказа о себе.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию рассказа о себе.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец рассказа о себе с формулой самопроверки курса.",
        },
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
        /*
         * ЗАДАНИЯ ПО ЗАПИСИ 1 — замысел, раздел 18.10. Ответ одним словом.
         */
        {
          id: "z1-zapisat-kak-chasto-gazety",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, как часто второй говорящий читает газеты; ответ одним словом.",
          answer: "never",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи по записи 1 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ по записи 1.",
        },
        {
          id: "z2-zapisat-chto-chitaet-inogda",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, что он читает иногда; ответ одним словом.",
          answer: "magazine",
          accept: ["a magazine"],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи о чтении — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ о чтении.",
        },
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
        /*
         * ЗАДАНИЯ ПО ЗАПИСИ 2 — замысел, раздел 18.10.
         */
        {
          id: "z3-zapisat-kogda-vstayot",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, когда Нурлан встаёт; одно английское слово о времени. «Рано» и «поздно» не называются.",
          answer: "early",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи по записи 2 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ по записи 2.",
        },
        {
          id: "z4-zapisat-kogda-ne-rabotaet",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, когда Нурлан никогда не работает; ответ одним словом.",
          answer: "weekend",
          accept: ["the weekend", "at the weekend"],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к записи о выходных — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верный ответ о выходных.",
        },
        {
          id: "z5-vybrat-kak-chasto-utrom",
          kind: "choice",
          prompt: "ПИШЕТ РЕДАКТОР: условие спрашивает, как часто Нурлан работает УТРОМ.",
          options: [{ text: "always" }, { text: "usually", correct: true }, { text: "never" }],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к выбору по записи 2 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет верную строку по записи 2 и чем не подходят две другие.",
        },
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
        /*
         * ЗАДАНИЯ УРОКА 11 — замысел, раздел 18.11. Все образцы одним голосом.
         */
        {
          id: "z1-skazat-chto-vsegda",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит сказать о себе, что делаешь ВСЕГДА.",
          phrase: "I always read in the afternoon.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца о всегда.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию о всегда.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец о всегда с формулой самопроверки курса.",
        },
        {
          id: "z2-skazat-chto-inogda-s-nachala",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит сказать о себе, что делаешь ИНОГДА, начав со слова о частоте.",
          phrase: "Sometimes I cook in the evening.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца об иногда.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию об иногда.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец об иногда с формулой самопроверки курса.",
        },
        {
          id: "z3-skazat-chego-nikogda",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит сказать о себе, чего НИКОГДА не делаешь.",
          phrase: "I never play football at school.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца о никогда.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию о никогда.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец о никогда с формулой самопроверки курса.",
        },
        {
          id: "z4-skazat-chto-kazhduyu-nedelyu",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит сказать о себе, что делаешь КАЖДУЮ НЕДЕЛЮ.",
          phrase: "I eat fish every week.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца о каждой неделе.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к устному заданию о каждой неделе.",
          why: "ПИШЕТ РЕДАКТОР: разбор под образец о каждой неделе с формулой самопроверки курса.",
        },
        {
          id: "z5-sobrat-stroku-o-sebe",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие просит собрать строку о себе.",
          items: ["watch", "I", "television in the evening.", "never"],
          answer: [1, 3, 0, 2],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к сборке о себе.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет собранную строку о себе.",
        },
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
          "ПИШЕТ РЕДАКТОР: условие говорит, что в записи о себе стоит строка I read at home., и " +
          "просит переписать её так, чтобы в ней было «обычно».",
        answer: "I usually read at home.",
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку и говорит, где встаёт наречие.",
      },
      {
        /*
         * ВОПРОС 12. Итог урока 1 второй раз. Назвать смысл, варианты по-русски.
         */
        id: "q12-chto-znachit-sometimes",
        kind: "choice",
        outcome: "говорить, что бывает всегда и что иногда: I always work",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие говорит, что Ким написал We sometimes study at home., и " +
          "спрашивает, что это значит.",
        options: [
          { text: "они всегда занимаются дома" },
          { text: "они не занимаются дома совсем" },
          { text: "они занимаются дома не каждый день", correct: true },
        ],
        why: "ПИШЕТ РЕДАКТОР: разбор говорит, что значит sometimes.",
      },
    ],
  },
};

export default modul;
