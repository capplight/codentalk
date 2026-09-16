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
 * ВЕСЬ ВИДИМЫЙ РУССКИЙ ТЕКСТ НАПИСАН РЕДАКТОРОМ (13–15 сентября 2026), журнал —
 * `docs/beginner-2/pravka-redaktora-modul-16.md`. Сборщик не пишет
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
      ref: "Cambridge English, руководство для младших ступеней (Young Learners), с. 52, список A1 Movers, строка Must for obligation — опора слова homework",
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
      ref: "Cambridge English, руководство A2 Key, с. 52, раздел Interrogatives — почему How often не берётся",
      section:
        "«How; How much; How many; How often; How long; etc.» — оборот стоит на A2. В " +
        "English Grammar Profile строки `how often` нет во всём файле (перебор всех восьми " +
        "полей 1222 записей), у Young Learners — нет во всём тексте. Спрашивать о частоте " +
        "модуль учит вопросом `Do you always work?` — сложением двух разобранных вещей.",
    },
  ],

  outcomes: [
    "говорить, что бывает всегда и что иногда: I always work",
    "говорить, что бывает обычно и что часто: I usually get up early",
    "говорить одним словом never, что чего-то не бывает никогда",
    "ставить наречие частоты после формы be",
    "оставлять -s у глагола, когда о частоте говорят про одного человека",
    "начинать строку словом sometimes",
    "называть оборотом every и словом времени, как часто повторяется дело",
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
            "В строках ниже наречие частоты стоит перед глаголом, а оборот о времени стоит в конце. Места " +
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
          accept: [
            "Sometimes they walk in the park.",
            "They walk in the park sometimes.",
            "Sometimes, they walk in the park.",
          ],
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
       * дольше. Сказать always она не может — исключения есть. Довод «и sometimes
       * не может, так бывает куда чаще» снят решением методиста В5 от 14 сентября
       * 2026: он спорил с правилом урока 1 и держался на снятой шкале.
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
      outcome: "говорить, что бывает обычно и что часто: I usually get up early",

      vstuplenie:
        "Дана встаёт в семь утра почти каждый день, а в выходные спит дольше. Слово «всегда» о её " +
        "утре не подходит, потому что в выходные бывает иначе. Поэтому по-русски Дана скажет «я " +
        "обычно встаю рано». Здесь мы разберём слова usually и often и их место в строке.",

      blocks: [
        {
          id: "sluchay-usually",
          kind: "explain",
          znak: "1f305",
          text: [
            "Слово usually значит «обычно»",
            "Словом usually говорят о том, что бывает как правило, но с исключениями. Так Дана " +
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
            "Слово early значит «рано», а слово late значит «поздно». В обеих строках ниже эти слова " +
              "стоят в конце, после глагола.",
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
            "Слово do значит «делать»",
            "Слова do homework значат «делать домашнюю работу». В вопросе Do you work? слово do " +
              "стоит первым и не переводится, а в строках ниже оно глагол «делать». Поэтому наречие " +
              "частоты стоит перед ним, как перед всяким другим глаголом.",
            "I usually do my homework in the evening. — Я обычно делаю домашнюю работу вечером.",
            "We often do our homework at school. — Мы часто делаем домашнюю работу в школе.",
          ],
          zvuchat: ["I usually do my homework in the evening.", "We often do our homework at school."],
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
          hint: "Условие называет две вещи: как часто Айгерим готовит и где. Найди строку, где совпадают обе.",
          why:
            "Верна строка Aigerim usually cooks at home. В ней, как и в условии, сказано «обычно» и " +
            "«дома». В двух других строках стоит often, то есть «часто». Одна из них к тому же " +
            "заканчивается словами at school и говорит о школе.",
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
            "early, то есть «рано». Это слово говорит, когда я встаю, а не как часто.",
        },
        {
          id: "z3-vpisat-usually",
          kind: "gap",
          prompt: "Мама обычно встаёт рано. Впиши недостающее слово.",
          before: "My mother ",
          after: " gets up early.",
          answer: "usually",
          hint: "Перевод каждого наречия частоты стоит в таблице урока. Найди там слово «обычно».",
          why:
            "My mother usually gets up early. Слово usually значит «обычно» и стоит перед gets up, " +
            "между словами о маме и глаголом.",
        },
        {
          id: "z4-vpisat-often",
          kind: "gap",
          prompt: "Мы часто играем в футбол в парке. Впиши недостающее слово.",
          before: "We ",
          after: " play football in the park.",
          answer: "often",
          hint: "Загляни в слова урока. Там у каждого слова есть перевод.",
          why:
            "Ответ: often. Слово often значит «часто», и в строке We often play football in the park " +
            "оно стоит перед глаголом play.",
        },
        {
          /*
           * Строка сменена решением методиста В2: прежняя (о Нурлане) была близнецом
           * задания 4 урока 5. Окончание при одном человеке — предмет урока 5, здесь
           * его не производят. `Usually` в начале accept принимает, разбор молчит.
           */
          id: "z5-zapisat-oni-obychno-chitayut",
          kind: "short",
          prompt: "Запиши по-английски «Они обычно читают газеты».",
          answer: "They usually read newspapers.",
          accept: ["Usually they read newspapers.", "Usually, they read newspapers."],
          hint:
            "Слова в английской строке идут в том же порядке, что в русской фразе. Газет несколько, " +
            "поэтому слово «газета» нужно во множественном числе.",
          why:
            "They usually read newspapers. Наречие usually стоит перед глаголом read, так же как в " +
            "русской фразе «обычно» стоит перед словом «читают». Слово newspapers стоит во " +
            "множественном числе, потому что газет несколько.",
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
            "I usually drink tea in the morning. I often read in the evening. Слова usually и often " +
            "стоят сразу после I, а часть суток названа в конце строки. Ответ на это задание не " +
            "проверяется, поэтому сверься с образцом. Послушай его и повтори следом за ним.",
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
        "По-русски мы говорим «я никогда не пью кофе». Здесь мы разберём, как сказать это " +
        "по-английски словом never и где это слово стоит в строке.",

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
          /*
           * Решение методиста В6.1: расхождение «два русских слова — одно английское»
           * говорит этот случай, рядом со своими строками; вступление его не повторяет.
           */
          id: "sluchay-vtorogo-ne-ne-nuzhno",
          kind: "explain",
          znak: "1f4a1",
          text: [
            "Одно слово вместо «никогда не»",
            "В каждой русской строке ниже стоят два слова, «никогда» и «не». В английской строке рядом " +
              "их смысл передаёт одно слово never.",
            "I never swim. — Я никогда не плаваю.",
            "They never dance. — Они никогда не танцуют.",
          ],
          zvuchat: ["I never swim.", "They never dance."],
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
           * СЛУЧАЙ 7. Две строки о себе. Перевод собрал редактор, методист подтвердил
           * 14 сентября 2026; правило — о различии never и always (решение 1.4).
           */
          id: "sluchay-dve-stroki-o-sebe",
          kind: "explain",
          znak: "1f375",
          text: [
            "Чего не бывает никогда и что бывает всегда",
            "Слова never и always противоположны по смыслу, как «никогда» и «всегда». Первая строка " +
              "говорит, что кофе я не пью совсем. Вторая говорит, что чай я пью каждый раз.",
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
            { term: "never", translation: "никогда", example: "They never dance.", hint: "/ˈnevə/" },
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
            "Верна строка Dana never drinks milk in the evening. В двух других строках стоит always, а " +
            "это слово по смыслу противоположно never. В строке с in the morning вдобавок сказано об утре.",
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
          hint: "В пропуск встаёт одно слово, и оно передаёт русское «никогда не» целиком.",
          why:
            "My grandfather never watches television. В русской фразе перед словом «смотрит» стоят " +
            "«никогда» и «не», а в английской строке перед watches стоит одно never.",
        },
        {
          /*
           * Строка сменена решением методиста В2: прежняя (о Дане) отличалась от ответа
           * задания 4 урока 5 двумя словами, а окончание — предмет урока 5.
           * `They don't study in the afternoon.` не принимается: в ней нет «никогда».
           */
          id: "z4-zapisat-oni-nikogda-ne-zanimayutsya",
          kind: "short",
          prompt: "Запиши по-английски «Они никогда не занимаются днём».",
          answer: "They never study in the afternoon.",
          hint:
            "Сначала вспомни английский глагол для «занимаются» и поставь перед ним наречие частоты. " +
            "Слово «днём» и по-английски стоит в конце строки.",
          why:
            "They never study in the afternoon. Слово never стоит перед глаголом study, а оборот in the " +
            "afternoon, то есть «днём», закрывает строку.",
        },
        {
          id: "z5-sobrat-my-nikogda-ne-smotrim",
          kind: "order",
          prompt: "Собери из пяти кусков строку «Мы никогда не смотрим телевизор утром».",
          items: ["television", "We", "in the morning.", "watch", "never"],
          answer: [1, 4, 3, 0, 2],
          hint: "Слово television идёт сразу за глаголом, как «телевизор» за словом «смотрим».",
          why:
            "We never watch television in the morning. Порядок тот же, что в русской фразе, только " +
            "вместо «никогда не» стоит одно never.",
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
       * КАРТОЧКА `hungry` СТОИТ В МОДУЛЕ 10 (`kakoy-chelovek`) — проверено методистом
       * 14 сентября 2026 (В8.4); случай 6, где слово стояло, снят тем же решением.
       */
      slug: "ya-vsegda-zanyat",
      title: "Я всегда занят: I am always busy",
      estimatedMinutes: 12,
      outcome: "ставить наречие частоты после формы be",

      vstuplenie:
        "Утром у Кима уроки, и он всегда занят. По-русски Ким скажет «я всегда занят утром». Слово " +
        "«занят» не называет дела, а говорит о состоянии, как «устал» или «голоден». Здесь мы " +
        "разберём, где в такой строке стоит наречие частоты.",

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
            "Слово late уже знакомо в значении «поздно». В строке о человеке оно стоит после формы be, " +
              "и по-русски такую строку переводят глаголом «опаздывать».",
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
          /*
           * СЛУЧАЙ 7. Таблица трёх лиц. Переводы собрал редактор, методист подтвердил
           * 14 сентября 2026.
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
          caption: "Наречие usually перед глаголом и после формы be",
          head: ["С глаголом", "С формой be", "Перевод пары"],
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
            "Верна строка Kim is often late, потому что в строке о Киме late после is переводится " +
            "«опаздывает». " +
            "В двух других строках стоит never, то есть «никогда», а в одной из них вместо late стоит " +
            "busy.",
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
            "Отмечены is в первой строке, am в третьей и is в четвёртой. Во второй строке формы be нет, " +
            "потому что там стоит глагол play и наречие often идёт перед ним.",
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
            "My brother is always busy in the morning. Брат один, поэтому нужна форма is, и наречие " +
            "always стоит сразу после неё.",
        },
        {
          id: "z4-zapisat-oni-inogda-zanyaty",
          kind: "short",
          prompt: "Запиши по-английски «Они иногда заняты в школе».",
          answer: "They are sometimes busy at school.",
          accept: [
            "Sometimes they are busy at school.",
            "They're sometimes busy at school.",
            "They are busy at school sometimes.",
            "Sometimes, they are busy at school.",
            "They're busy at school sometimes.",
          ],
          hint:
            "Сначала выбери форму be для слова «они». Наречие частоты поставь после неё, а оборот о " +
            "школе в конец строки.",
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
          hint: "Слово о состоянии стоит после формы be и наречия частоты.",
          why:
            "I am often busy in the evening. Слово busy встаёт после куска am often, так же как " +
            "«занят» идёт после «часто» в русской фразе.",
        },
        {
          id: "z6-skazat-kakim-byvaesh",
          kind: "speak",
          prompt:
            "Скажи вслух две строки. В первой начни с I am и назови состояние, в котором ты часто " +
            "бываешь. Во второй поставь never и скажи о человеке, который никогда не опаздывает.",
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
        "«он всегда работает утром» и «она всегда работает вечером». Здесь мы разберём, как сказать " +
        "это по-английски, когда в строке об одном человеке есть наречие частоты.",

      blocks: [
        {
          id: "sluchay-he-i-she",
          kind: "explain",
          znak: "1f9d1",
          text: [
            "При he и she глагол с окончанием",
            "В строке об одном человеке к глаголу прибавляется -s, как в модуле «Что я делаю каждый " +
              "день». В строке с наречием частоты у глагола тоже есть это окончание.",
            "He always works in the morning. — Он всегда работает утром.",
            "She usually gets up early. — Она обычно встаёт рано.",
          ],
          zvuchat: ["He always works in the morning.", "She usually gets up early."],
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
            "Когда речь об одном человеке, глагол watch пишется watches, а study пишется studies. Так " +
              "они пишутся и в модуле «Что я делаю каждый день», урок «Два разных -s: boxes и he " +
              "watches». Наречие частоты ставим перед ними так же, как перед остальными глаголами.",
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
              "Наречие частоты стоит перед глаголом, как и в строках с he и she.",
            "Aigerim sometimes cooks at home. — Айгерим иногда готовит дома.",
            "My brother always swims at the weekend. — Мой брат всегда плавает в выходные.",
          ],
          zvuchat: ["Aigerim sometimes cooks at home.", "My brother always swims at the weekend."],
        },
        {
          /*
           * Решение методиста В7.3: новые строки и новое правило — буква s на конце
           * always принадлежит самому слову и окончанием не является.
           */
          id: "sluchay-ya-i-on-ryadom",
          kind: "explain",
          znak: "2696",
          text: [
            "Буква s на конце always и окончание глагола",
            "В обеих строках стоит одно и то же слово always, и буква s на его конце есть даже в строке " +
              "с I. Значит это буква самого слова. Окончание -s есть у глагола eats в строке с he. У " +
              "слова sometimes буква s на конце тоже своя.",
            "I always eat fish. — Я всегда ем рыбу.",
            "He always eats fish. — Он всегда ест рыбу.",
          ],
          zvuchat: ["I always eat fish.", "He always eats fish."],
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
            "Her brother usually drinks tea in the morning. Брат один, поэтому глагол пишется drinks. В " +
            "двух других строках стоит drink без окончания, а строка с in the evening говорит ещё и о " +
            "вечере.",
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
            "Окончание ищи у глагола, который идёт сразу за наречием частоты. Буква s на конце " +
            "sometimes принадлежит самому слову.",
          why:
            "Окончание есть у глаголов plays, drinks и sleeps, потому что в первой, третьей и четвёртой " +
            "строках речь об одном человеке. Во второй строке стоит We, и глагол read идёт без окончания.",
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
            "Nurlan often walks in the park. Гуляет один Нурлан, поэтому к глаголу walk прибавляется -s. " +
            "Наречие often при этом стоит перед глаголом.",
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
           * Пары сменены решением методиста В3: в прежних пары находились по наречию
           * и хвосту строки. Теперь наречие одно, слева везде I — пару находит глагол.
           */
          id: "z5-soedinit-o-sebe-i-o-drugom",
          kind: "match",
          prompt: "Соедини каждую строку о себе со строкой о другом человеке, где сказано о том же деле.",
          left: ["I usually study.", "I usually swim.", "I usually walk."],
          right: ["He usually swims.", "My brother usually walks.", "My sister usually studies."],
          answer: [2, 0, 1],
          hint:
            "Наречие во всех строках одно, поэтому пару находит глагол. В строке о другом человеке у " +
            "глагола появится окончание.",
          why:
            "Пары такие: study и studies, swim и swims, walk и walks. У глагола study окончание " +
            "пишется -ies, а к swim и walk прибавляется -s.",
        },
        {
          id: "z6-skazat-o-dvuh-rodnyh",
          kind: "speak",
          prompt:
            "Скажи вслух две строки о двух своих родных. В первой назови то, что один из них делает " +
            "часто. Во второй назови то, чего другой не делает никогда.",
          phrase: "My mother often cooks at home. My brother never sleeps in the afternoon.",
          translation: "Моя мама часто готовит дома. Мой брат никогда не спит днём.",
          hint: "Каждая строка говорит об одном человеке. Проверь, есть ли у глагола окончание.",
          why:
            "My mother often cooks at home. My brother never sleeps in the afternoon. Мама одна и брат " +
            "один, поэтому глаголы cooks и sleeps пишутся с окончанием, а наречия частоты стоят перед " +
            "ними. Ответ на это задание не проверяется, поэтому сверься с образцом. " +
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
        "По-русски мы говорим и «я иногда готовлю дома», и «иногда я готовлю дома». По-английски " +
        "слово sometimes тоже можно поставить и перед глаголом, и в начало строки. Здесь мы разберём " +
        "строки, которые начинаются словом sometimes.",

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
            "Обе строки ниже верны. Слова в них одни и те же, а место у sometimes разное. В русском " +
              "переводе слово «иногда» стоит там же, где sometimes в английской строке.",
            "I sometimes cook at home. — Я иногда готовлю дома.",
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
            "В русских строках ниже после «иногда» запятой нет, и в английских после sometimes её тоже " +
              "нет. За словом sometimes сразу идёт слово о том, кто делает.",
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
            "После sometimes может стоять имя или слова my father. Глагол после них идёт с " +
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
           * СВОД. Строение «перевод пары», как у сводов уроков 4 и 5 (решение
           * методиста В1): у двух мест sometimes переводы разные, по порядку слов.
           */
          id: "tablica-svod-uroka-6",
          kind: "table",
          znak: "1f4c3",
          caption: "Два места слова sometimes, и у каждой строки свой перевод",
          head: ["Перед глаголом", "В начале строки", "Перевод пары"],
          rows: [
            ["We sometimes eat fish.", "Sometimes we eat fish.", "Мы иногда едим рыбу. — Иногда мы едим рыбу."],
            ["She sometimes reads a magazine.", "Sometimes she reads a magazine.", "Она иногда читает журнал. — Иногда она читает журнал."],
          ],
          zvuchat: [
            "We sometimes eat fish.",
            "Sometimes we eat fish.",
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
            "Верна строка Sometimes my uncle works in the evening. Строка с in the morning начинается " +
            "так же, но говорит об утре. В строке с always дядя работает каждый раз, и тоже утром.",
        },
        {
          /*
           * Решение методиста В4: прежние пары находились глазом по совпадающим словам.
           * Справа теперь русский перевод, общих букв у пары нет.
           */
          id: "z2-soedinit-stroku-s-perevodom",
          kind: "match",
          prompt: "Соедини каждую английскую строку с её переводом.",
          left: ["Sometimes I drink milk.", "Sometimes I sing.", "Sometimes I dance."],
          right: ["Иногда я танцую.", "Иногда я пью молоко.", "Иногда я пою."],
          answer: [1, 2, 0],
          hint: "Начало у всех трёх строк одно и то же. Пару подскажет глагол, который идёт после I.",
          why:
            "Sometimes I drink milk значит «Иногда я пью молоко», а Sometimes I sing значит «Иногда я " +
            "пою». Строке Sometimes I dance соответствует «Иногда я танцую». В каждой паре «иногда» " +
            "стоит первым, как sometimes в английской строке.",
        },
        {
          id: "z3-vpisat-sometimes",
          kind: "gap",
          prompt:
            "Нурлан иногда играет в футбол в школе. Строка начинается наречием частоты. Впиши его.",
          before: "",
          after: " Nurlan plays football at school.",
          answer: "Sometimes",
          hint: "Слово в пропуске значит «иногда» и открывает строку, поэтому пиши его с заглавной буквы.",
          why:
            "Sometimes Nurlan plays football at school. Наречие частоты стоит первым, а за ним идут имя " +
            "и глагол с окончанием.",
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
          accept: ["Sometimes, we watch television."],
          hint: "Начни со слова, которое значит «иногда». За ним идут слово о том, кто смотрит, и глагол.",
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
          hint: "Сразу после sometimes стоит слово о том, кто делает, а за ним глагол.",
          why:
            "Sometimes I swim at the weekend. Слово sometimes перешло в начало. Слова I, swim и at the " +
            "weekend идут в том же порядке, что в строке I sometimes swim at the weekend.",
        },
        {
          id: "z6-skazat-chto-byvaet-inogda",
          kind: "speak",
          prompt:
            "Скажи вслух две строки и начни каждую словом sometimes. В первой назови то, что ты " +
            "делаешь иногда. Во второй назови то, что иногда делает кто-то из твоих родных.",
          phrase: "Sometimes I drink juice in the evening. Sometimes my grandmother cooks at home.",
          translation: "Иногда я пью сок вечером. Иногда моя бабушка готовит дома.",
          hint: "Вторая строка говорит об одном человеке из родных. Вспомни, что тогда происходит с глаголом.",
          why:
            "Sometimes I drink juice in the evening. Sometimes my grandmother cooks at home. Обе строки " +
            "начинаются наречием sometimes. Во второй строке бабушка одна, и глагол cooks пишется с " +
            "окончанием. Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай " +
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
      outcome: "называть оборотом every и словом времени, как часто повторяется дело",

      vstuplenie:
        "Айгерим видится с бабушкой каждый месяц. Слова «часто» и «иногда» не говорят, сколько времени " +
        "проходит между встречами, а слова «каждый месяц» говорят. Здесь мы разберём, как сказать " +
        "по-английски «каждый месяц» и «каждую неделю».",

      blocks: [
        {
          id: "sluchay-every-day-znakomo",
          kind: "explain",
          znak: "1f4c6",
          text: [
            "Оборот every day из модуля «Что я делаю каждый день»",
            "Слово every значит «каждый», поэтому every day значит «каждый день».",
            "I study English every day. — Я учу английский каждый день.",
            "She goes to school every day. — Она ходит в школу каждый день.",
          ],
          zvuchat: ["I study English every day.", "She goes to school every day."],
        },
        {
          id: "sluchay-every-week",
          kind: "explain",
          znak: "1f5d3",
          text: [
            "Оборот every week",
            "Вместо day после every можно поставить другое слово о времени. Слово week значит «неделя», " +
              "и every week значит «каждую неделю».",
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
            "Новое слово month",
            "Слово month значит «месяц». С ним оборот every month говорит, что дело повторяется каждый месяц.",
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
            "Оборот с every ставим в конец строки",
            "Сначала называем, кто делает, потом глагол и то, что к нему относится. Оборот с every ставим " +
              "после них, так же как оборот о времени in the evening.",
            "I read a newspaper every week. — Я читаю газету каждую неделю.",
            "She cooks every day. — Она готовит каждый день.",
          ],
          zvuchat: ["I read a newspaper every week.", "She cooks every day."],
        },
        {
          id: "tablica-slovo-posle-every-odno",
          kind: "table",
          znak: "1f4c3",
          caption: "После every слово о времени стоит в единственном числе",
          head: ["Оборот", "Перевод"],
          rows: [
            ["every day", "каждый день"],
            ["every week", "каждую неделю"],
            ["every month", "каждый месяц"],
          ],
          zvuchat: ["every day", "every week", "every month"],
        },
        {
          id: "sluchay-every-i-always",
          kind: "explain",
          znak: "2696",
          text: [
            "Чем every week отличается от always",
            "Оборот every week тоже отвечает на вопрос «как часто?», но это не наречие частоты. В нём два " +
              "слова: every и слово о времени.",
            "Слова always, often и sometimes не говорят, сколько времени проходит между двумя разами, а " +
              "every week говорит, что проходит неделя.",
            "I always work at home. — Я всегда работаю дома.",
            "I work every week. — Я работаю каждую неделю.",
          ],
          zvuchat: ["I always work at home.", "I work every week."],
        },
        {
          /*
           * ЭКРАН «Две строки о бабушке» СНЯТ — решение методиста от 15 сентября
           * 2026 (`reshenie-metodista-dolgi-15-sentyabrya.md`, 1.1): он третий раз
           * повторял мысль вступления и случая выше, и ни одно задание на него не
           * опиралось.
           *
           * СВОД — решение методиста 3.4.2: прежний свод держал те же обороты, что
           * таблица случая 5. Одна строка с тремя оборотами.
           */
          id: "tablica-svod-uroka-7",
          kind: "table",
          znak: "1f4c3",
          caption: "Оборот с every ставим в конец строки, а слово после every стоит в единственном числе",
          head: ["Строка", "Перевод"],
          rows: [
            ["I read every day.", "Я читаю каждый день."],
            ["I read every week.", "Я читаю каждую неделю."],
            ["I read every month.", "Я читаю каждый месяц."],
          ],
          zvuchat: ["I read every day.", "I read every week.", "I read every month."],
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
          prompt: "Дана ходит в библиотеку каждую неделю. Отметь строку, в которой это сказано верно.",
          options: [
            { text: "Dana goes to the library every days." },
            { text: "Dana goes to the library every weeks." },
            { text: "Dana goes to the library every week.", correct: true },
          ],
          hint: "Посмотри в каждой строке на слово после every и на его окончание.",
          why:
            "Верна строка Dana goes to the library every week. После every слово о времени стоит в " +
            "единственном числе, а в двух других строках у него окончание -s. Строка с every days к тому " +
            "же говорит о днях.",
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
          prompt:
            "В поле букв спрятаны пять слов из уроков этого модуля. Слово читается слева направо или " +
            "сверху вниз, и отметить надо все его буквы.",
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
            { slovo: "ALWAYS", podpis: "всегда" },
            { slovo: "NEVER", podpis: "никогда" },
            { slovo: "USUALLY", podpis: "обычно" },
            { slovo: "MONTH", podpis: "месяц" },
            { slovo: "MAGAZINE", podpis: "журнал" },
          ],
          hint: "Найди первую букву слова, а потом проверь буквы справа от неё и под ней.",
          why:
            "Спрятаны always, never, usually, month и magazine. Слова always и never лежат по столбцам, " +
            "а остальные три по строкам.",
        },
        {
          id: "z3-vpisat-month",
          kind: "gap",
          prompt: "Двоюродный брат играет в футбол каждый месяц. Впиши недостающее слово.",
          before: "My cousin plays football every ",
          after: ".",
          answer: "month",
          hint: "После every нужно слово о времени, и стоит оно в единственном числе.",
          why: "My cousin plays football every month. Слово month значит «месяц» и стоит после every без окончания.",
        },
        {
          /*
           * Оборот времени в начале строки урок не учит, а accept принимает:
           * строка верна, и наказывать за неё нельзя (18.7).
           */
          id: "z4-zapisat-vizhus-s-druzyami",
          kind: "short",
          prompt: "Запиши по-английски «Я вижусь с друзьями каждую неделю».",
          answer: "I see my friends every week.",
          accept: [
            "Every week I see my friends.",
            "I see friends every week.",
            "Every week, I see my friends.",
          ],
          hint: "Глагол для «вижусь» есть в словах этого урока. Оборот с every поставь в конец строки.",
          why:
            "I see my friends every week. Глагол see значит «видеть, видеться», а оборот every week " +
            "стоит в конце, после my friends.",
        },
        {
          id: "z5-sobrat-dana-chitaet-zhurnal",
          kind: "order",
          prompt: "Собери из четырёх кусков строку «Дана читает журнал каждый месяц».",
          items: ["every month.", "Dana", "a magazine", "reads"],
          answer: [1, 3, 2, 0],
          hint: "Слова здесь идут в том же порядке, что в строке I read a newspaper every week.",
          why:
            "Dana reads a magazine every month. Журнал назван сразу после глагола reads, а оборот every " +
            "month стоит в конце.",
        },
        {
          id: "z6-skazat-kazhduyu-nedelyu",
          kind: "speak",
          prompt:
            "Скажи вслух две строки. В первой скажи, что ты делаешь каждую неделю, а во второй скажи, что " +
            "кто-то из твоих родных делает каждый день.",
          phrase: "I play football every week. My brother drinks juice every day.",
          translation: "Я играю в футбол каждую неделю. Мой брат пьёт сок каждый день.",
          hint: "В обеих строках оборот с every поставь в конец.",
          why:
            "I play football every week. My brother drinks juice every day. В первой строке оборот every " +
            "week стоит после football, а во второй every day стоит после juice. У глагола drinks есть " +
            "окончание, потому что брат один. Ответ на это задание не проверяется, поэтому сверься с " +
            "образцом. Послушай его и повтори следом за ним.",
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
        "Ким знает, что Дана работает. Он хочет узнать, работает ли она утром, и если да, то каждое ли утро. " +
        "По-русски он спросит: «Ты всегда работаешь утром?». Здесь мы разберём, как задать такой вопрос " +
        "по-английски.",

      blocks: [
        {
          id: "sluchay-vopros-s-do-znakom",
          kind: "explain",
          znak: "2753",
          text: [
            "Вопрос с do из модуля «Спросить о делах»",
            "Вопрос о деле начинается словом do, а за ним идут слово о том, кто делает, и глагол.",
            "Do you work in the morning? — Ты работаешь утром?",
          ],
          zvuchat: ["Do you work in the morning?"],
        },
        {
          id: "sluchay-narechie-v-voprose",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "Наречие частоты в вопросе",
            "В вопросе первым идёт do. Наречие частоты стоит там же, где в строке без вопроса, то есть " +
              "между словом о том, кто делает, и глаголом.",
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
            "Короткий ответ не меняется",
            "На вопрос с наречием частоты отвечают так же, как на вопрос без него, словами Yes, I do или " +
              "No, I don't.",
            "Do you always cook at home? — Yes, I do. — Ты всегда готовишь дома? — Да.",
            "Do you always cook at home? — No, I don't. — Ты всегда готовишь дома? — Нет.",
          ],
          zvuchat: ["Do you always cook at home? — Yes, I do.", "Do you always cook at home? — No, I don't."],
        },
        {
          id: "sluchay-otvet-s-narechiem",
          kind: "explain",
          znak: "1f5e8",
          text: [
            "После короткого ответа можно добавить строку о себе",
            "На вопрос Do you always cook at home? короткий ответ говорит «нет». Следующая строка с наречием " +
              "частоты говорит, как часто человек готовит дома на самом деле.",
            "No, I don't. I sometimes cook at home. — Нет. Я иногда готовлю дома.",
          ],
          zvuchat: ["No, I don't. I sometimes cook at home."],
        },
        {
          id: "sluchay-vopros-o-neskolkih",
          kind: "explain",
          znak: "1f465",
          text: [
            "Вопрос о нескольких людях",
            "Когда спрашивают о нескольких людях, вместо you стоит they или your friends. Всё остальное в " +
              "вопросе не меняется.",
            "Do they usually eat at school? — Они обычно едят в школе?",
            "Do your friends often read a newspaper? — Твои друзья часто читают газету?",
          ],
          zvuchat: ["Do they usually eat at school?", "Do your friends often read a newspaper?"],
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
          caption: "Ким спрашивает Дану о работе. Первым говорит Ким.",
          text:
            "Do you work in the morning?\n" +
            "Yes, I do.\n" +
            "Do you always work in the morning?\n" +
            "No, I don't. I sometimes work in the evening.",
          perevod: {
            "Do you work in the morning?": "Ты работаешь утром?",
            "Yes, I do.": "Да.",
            "Do you always work in the morning?": "Ты всегда работаешь утром?",
            "No, I don't. I sometimes work in the evening.": "Нет. Я иногда работаю вечером.",
          },
          explain:
            "Сначала Ким узнаёт, работает ли Дана утром, и Дана отвечает «да». Потом он спрашивает со " +
            "словом always, каждое ли утро она работает. Дана отвечает «нет» и добавляет, что иногда работает вечером.",
        },
        {
          id: "tablica-do-kto-narechie-glagol",
          kind: "table",
          znak: "1f4c3",
          caption: "В вопросе сначала идёт do, потом слово о том, кто делает, наречие частоты и глагол",
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
          caption: "Вопрос с наречием частоты и два коротких ответа на него",
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
          prompt: "Ким хочет узнать, часто ли Дана пьёт кофе. Отметь вопрос, который ему нужен.",
          options: [
            { text: "Do you always drinks coffee?" },
            { text: "Do you often drink coffee?", correct: true },
            { text: "Do you often drinks coffee?" },
          ],
          hint: "Сверь наречие частоты с условием и посмотри на глагол после do.",
          why:
            "Верен вопрос Do you often drink coffee? Вопрос с always спрашивает, всегда ли Дана пьёт кофе. " +
            "В двух других вопросах у глагола лишнее окончание, а после do глагол идёт без него.",
        },
        {
          id: "z2-otmetit-slovo-v-voprose",
          kind: "hottext",
          prompt: "Отметь все наречия частоты в вопросах.",
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
          hint: "В вопросе наречие частоты стоит сразу после слова о том, кто делает.",
          why:
            "Отмечены usually, sometimes и always. Во втором вопросе за they сразу идёт глагол play, и " +
            "наречия частоты там нет.",
        },
        {
          id: "z3-vpisat-always-v-vopros",
          kind: "gap",
          prompt: "Спроси, всегда ли они занимаются в школе. Впиши недостающее слово.",
          before: "Do they ",
          after: " study at school?",
          answer: "always",
          hint: "Пропуск стоит между they и глаголом, там, где в вопросе стоит наречие частоты.",
          why: "Do they always study at school? Наречие always стоит после they и перед глаголом study.",
        },
        {
          id: "z4-sprosit-obychno-li-rano",
          kind: "short",
          prompt: "Спроси Дану, обычно ли она встаёт рано. Запиши вопрос по-английски.",
          answer: "Do you usually get up early?",
          hint: "Начни вопрос словом do. Наречие частоты стоит в нём там же, где в других вопросах этого урока.",
          why:
            "Do you usually get up early? Дану спрашивают на «ты», поэтому после do стоит you. Наречие " +
            "usually стоит перед get up, а early в конце вопроса.",
        },
        {
          /*
           * Куски — решение методиста, пункт 4: `often swim` одним куском, второй порядок
           * из них не складывается, и условие о месте наречия ничего не держит.
           */
          id: "z5-sobrat-vopros-s-often",
          kind: "order",
          prompt: "Собери вопрос из четырёх кусков.",
          items: ["often swim", "Do", "at the weekend?", "you"],
          answer: [1, 3, 0, 2],
          hint: "Вопрос устроен так же, как Do you always work in the morning?",
          why:
            "Do you often swim at the weekend? Кусок often swim стоит сразу после you, потому что наречие " +
            "частоты в вопросе идёт после слова о том, кто делает.",
        },
        {
          /*
           * Образец — разговор на два голоса.
           */
          id: "z6-sprosit-i-otvetit",
          kind: "speak",
          prompt: "Спроси вслух друга, обычно ли он пьёт молоко вечером, и ответь за него «да».",
          phrase: "Do you usually drink milk in the evening? — Yes, I do.",
          translation: "Ты обычно пьёшь молоко вечером? — Да.",
          hint: "Короткий ответ «да» берёт слово do из вопроса.",
          why:
            "Do you usually drink milk in the evening? — Yes, I do. В вопросе usually стоит после you и " +
            "перед глаголом drink. В коротком ответе Yes, I do наречия частоты нет. Ответ на это задание " +
            "не проверяется, поэтому сверься с образцом. Послушай его и повтори следом за ним.",
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
        "Айгерим пишет записку о себе. Она рассказывает, что делает всегда, что обычно и чего не делает " +
        "никогда. Здесь мы разберём эту записку и найдём в ней наречия частоты.",

      blocks: [
        {
          id: "tekst-zapiska-aygerim",
          kind: "text",
          znak: "1f4e9",
          title: "Записка от Айгерим",
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
         * ЗАДАНИЯ УРОКА 9 — замысел, раздел 18.9. Отвлекающие задания 2 — пересказ строк
         * текста той же длины (решение методиста 3.5.1).
         */
        {
          id: "z1-otmetit-narechiya-v-zapiske",
          kind: "hottext",
          prompt: "Отметь в записке все наречия частоты.",
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
          hint: "Наречие частоты стоит перед глаголом или сразу после формы be. Одна строка начинается таким словом.",
          why:
            "Отмечены always, usually, Sometimes, never, often и always в строке I am always busy. В строке о " +
            "бабушке стоит оборот every month. В нём два слова, поэтому это не наречие частоты. Об этом " +
            "говорит урок «Каждую неделю: every week, every month».",
        },
        {
          id: "z2-vybrat-chto-kazhdyy-mesyac",
          kind: "choice",
          prompt: "Что Айгерим делает каждый месяц? Отметь строку с ответом.",
          options: [
            { text: "She sees her grandmother.", correct: true },
            { text: "She swims at the weekend." },
            { text: "She drinks tea in the morning." },
          ],
          hint: "Найди в записке строку с оборотом every month.",
          why:
            "Верна строка She sees her grandmother. Плавает Айгерим иногда, в выходные, а чай пьёт часто, по " +
            "утрам. Каждый месяц она видится с бабушкой.",
        },
        {
          /*
           * В уроке чтения ответ законно берётся из текста (18.9): это и есть
           * умение урока, а не утечка.
           */
          id: "z3-zapisat-chto-ne-pyot",
          kind: "short",
          prompt: "Что Айгерим никогда не пьёт? Запиши одним английским словом.",
          answer: "coffee",
          hint: "Найди в записке строку со словом never.",
          why: "coffee, то есть кофе. В записке стоит строка I never drink coffee.",
        },
        {
          id: "z4-vpisat-usually-o-ney",
          kind: "gap",
          prompt:
            "В записке Айгерим пишет, как часто она занимается дома вечером. Расскажи об этом так, будто " +
            "говоришь о ней, и впиши недостающее слово.",
          before: "Aigerim ",
          after: " studies at home in the evening.",
          answer: "usually",
          hint: "Возьми наречие частоты из той строки записки, где Айгерим пишет о занятиях дома.",
          why:
            "Aigerim usually studies at home in the evening. Наречие usually взято из записки. В записке " +
            "стоит I study, а в строке об Айгерим глагол пишется studies.",
        },
        {
          /*
           * Один голос, мужской: говорит Ким (18.9).
           */
          id: "z5-rasskazat-o-sebe-kak-aygerim",
          kind: "speak",
          prompt:
            "Расскажи вслух о себе, как Айгерим в записке. Поздоровайся, назови своё имя и скажи две строки " +
            "о том, как часто ты что-то делаешь.",
          phrase: "Hello! My name is Kim. I usually get up late. I never drink milk in the evening.",
          pervyyGolos: "muzhskoy",
          translation: "Здравствуй! Меня зовут Ким. Я обычно встаю поздно. Я никогда не пью молоко вечером.",
          hint: "Начни так же, как Айгерим, со слова Hello и своего имени.",
          why:
            "Hello! My name is Kim. I usually get up late. I never drink milk in the evening. После " +
            "приветствия и имени идут две строки, и в каждой перед глаголом стоит наречие частоты. Ответ на " +
            "это задание не проверяется, поэтому сверься с образцом. Послушай его и повтори следом за ним.",
        },
      ],
    },

    {
      /*
       * УРОК 10. Замысел, 9.10. Запись и есть предмет урока, поэтому блоки
       * `audio` остаются.
       *
       * ОТВЕТЫ ЗАДАНИЙ НА СЛУХ — `never`, `magazine`, `early`, `weekend`, `usually`. НИ ОДНО
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
        "Ким спрашивает знакомую, часто ли она читает, а Нурлан рассказывает о своей работе. По-русски " +
        "Ким спросил бы её: «Ты часто читаешь?». Здесь мы разберём обе записи и запишем, что в них прозвучало.",

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
          caption: "Ким спрашивает знакомую о чтении. Первым говорит Ким.",
          transcript: "Do you often read a newspaper? — No, I never read newspapers. I sometimes read a magazine.",
        },
        /*
         * ЗАДАНИЯ ПО ЗАПИСИ 1 — замысел, раздел 18.10. Ответ одним словом.
         */
        {
          id: "z1-zapisat-kak-chasto-gazety",
          kind: "short",
          prompt: "Как часто знакомая Кима читает газеты? Запиши одним английским словом.",
          answer: "never",
          hint: "Знакомая Кима отвечает двумя предложениями. Нужное слово звучит в том предложении, где есть newspapers.",
          why: "never, то есть никогда. Знакомая Кима ответила: No, I never read newspapers.",
        },
        {
          id: "z2-zapisat-chto-chitaet-inogda",
          kind: "short",
          prompt: "Что знакомая Кима читает иногда? Запиши одним английским словом.",
          answer: "magazine",
          accept: ["a magazine"],
          hint: "Нужное слово звучит в конце второго предложения её ответа.",
          why: "magazine, то есть журнал. Она сказала: I sometimes read a magazine.",
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
          caption: "Нурлан рассказывает о своей работе. В записи говорит он один.",
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
          prompt: "Когда встаёт Нурлан? Запиши одним английским словом.",
          answer: "early",
          hint: "Нужное слово звучит в первом предложении записи, сразу после get up.",
          why: "early, то есть рано. Нурлан сказал: I always get up early.",
        },
        {
          id: "z4-zapisat-kogda-ne-rabotaet",
          kind: "short",
          prompt: "В какие дни Нурлан никогда не работает? Запиши одним английским словом.",
          answer: "weekend",
          accept: ["the weekend", "at the weekend"],
          hint: "О днях без работы Нурлан говорит в последнем предложении. Нужное слово звучит в самом его конце.",
          why: "weekend, то есть выходные. Нурлан сказал: I never work at the weekend.",
        },
        {
          id: "z5-vybrat-kak-chasto-utrom",
          kind: "choice",
          prompt: "Как часто Нурлан работает утром? Отметь наречие частоты из предложения о работе утром.",
          options: [{ text: "always" }, { text: "usually", correct: true }, { text: "never" }],
          hint: "Найди на слух предложение, в котором звучит in the morning.",
          why:
            "Верно usually, то есть обычно. Нурлан сказал: I usually work in the morning. Слово always звучит в " +
            "предложении о том, когда он встаёт, а never звучит в предложении о выходных.",
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
        "Новый знакомый спрашивает о твоём дне, и одной строкой тут не ответить. По-русски мы расскажем " +
        "так: «Утром я всегда пью чай, а вечером часто гуляю». Здесь мы разберём, как рассказать о себе " +
        "несколькими строками и сказать в них, как часто ты что-то делаешь.",

      blocks: [
        /*
         * ЗАДАНИЯ УРОКА 11 — состав методиста от 14 сентября 2026 (пункт 3.8): прежние
         * четыре устных задания повторяли задания уроков 1, 3, 6, 7, сборка — сборку
         * урока 3. Урок даёт связный рассказ, где наречия выбирает ученик (CEFR, с. 63),
         * и ответ на вопрос друга (с. 72). Образец 4 — разговор на два голоса.
         */
        {
          id: "z1-rasskazat-pro-utro",
          kind: "speak",
          prompt:
            "Расскажи вслух о своём утре тремя строками. Скажи, что бывает всегда, что бывает обычно и чего не " +
            "бывает никогда.",
          phrase: "I always drink milk in the morning. I usually cook breakfast. I never read in the morning.",
          translation: "Я всегда пью молоко утром. Я обычно готовлю завтрак. Я никогда не читаю утром.",
          hint: "Для трёх строк понадобятся три разных наречия частоты: always, usually и never.",
          why:
            "I always drink milk in the morning. I usually cook breakfast. I never read in the morning. В каждой " +
            "строке наречие частоты стоит после I и перед глаголом. В первой и третьей строке в конце стоит оборот " +
            "in the morning. " +
            "Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай его и повтори следом за ним.",
        },
        {
          id: "z2-rasskazat-sometimes-i-every",
          kind: "speak",
          prompt:
            "Расскажи вслух о себе двумя строками. Первую начни словом sometimes, а во второй скажи оборотом с " +
            "every, как часто ты что-то делаешь.",
          phrase: "Sometimes I read in the afternoon. I see my cousin every month.",
          translation: "Иногда я читаю днём. Я вижусь с двоюродным братом каждый месяц.",
          hint: "В первой строке за sometimes идут I и глагол, а во второй оборот с every стоит последним.",
          why:
            "Sometimes I read in the afternoon. I see my cousin every month. В первой строке sometimes стоит в " +
            "начале, и за ним идут I и глагол read. Во второй строке оборот every month стоит в конце, после слов my " +
            "cousin. Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай его и повтори " +
            "следом за ним.",
        },
        {
          id: "z3-rasskazat-kogda-mnogo-del",
          kind: "speak",
          prompt:
            "Скажи вслух, где у тебя всегда много дел и что ты часто делаешь вечером. Хватит двух строк.",
          phrase: "I am always busy at school. I often dance in the evening.",
          translation: "Я всегда занят в школе. Я часто танцую вечером.",
          hint: "Слова «много дел» скажи словом busy. Наречие always стоит между формой be и этим словом.",
          why:
            "I am always busy at school. I often dance in the evening. В первой строке always стоит после формы am, " +
            "а во второй often стоит перед глаголом dance. Ответ на это задание не проверяется, поэтому сверься с " +
            "образцом. Послушай его и повтори следом за ним.",
        },
        {
          id: "z4-otvetit-drugu",
          kind: "speak",
          prompt:
            "Друг спрашивает тебя: Do you often watch television? Ответь коротко, а потом скажи о себе строку с " +
            "наречием частоты.",
          phrase: "Do you often watch television? — No, I don't. I sometimes watch television in the evening.",
          pervyyGolos: "muzhskoy",
          translation: "Ты часто смотришь телевизор? — Нет. Я иногда смотрю телевизор вечером.",
          hint: "Сначала скажи Yes, I do или No, I don't. Потом добавь строку, где наречие частоты стоит перед watch.",
          why:
            "Do you often watch television? — No, I don't. I sometimes watch television in the evening. Короткий " +
            "ответ говорит «нет», а строка после него говорит, как часто это бывает. Наречие sometimes стоит в ней " +
            "перед глаголом watch. Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай его и " +
            "повтори следом за ним.",
        },
        {
          id: "z5-sobrat-stroku-o-sebe",
          kind: "order",
          prompt: "Собери из четырёх кусков строку о том, что ты обычно пьёшь днём.",
          items: ["drink", "I", "juice in the afternoon.", "usually"],
          answer: [1, 3, 0, 2],
          hint: "Подумай, где стоит наречие частоты в строке с глаголом.",
          why:
            "I usually drink juice in the afternoon. Наречие usually стоит после I и перед глаголом drink, а сок и " +
            "часть суток названы в конце строки.",
        },
      ],
    },
  ],

  /*
   * РАБОТА МОДУЛЯ — ДВЕНАДЦАТЬ ВОПРОСОВ. Замысел, 16.2 (переписана целиком по
   * разбору) и 16.3 (таблица видов по полю `kind`).
   *
   * ЧЕТЫРЕ ДЕЙСТВИЯ (решение методиста от 14 сентября 2026, пункт 5.3): исправить
   * чужую запись или переписать данную строку (`short`); ответить на вопрос
   * строкой о себе (`short`, вопрос 11); записать одно слово с новой записи
   * (`short` со звуком); назвать причину или частоту по записи (`choice`, все
   * варианты по-русски). Ни `gap`, ни `hottext`, ни `order`, ни `match`, ни
   * `speak`: их берут уроки.
   *
   * Порог показа — десять из двенадцати. Вопросов выбора два: верный на местах
   * 2 и 3. Производящих вопросов десять из двенадцати.
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
          "Нурлан хотел написать «Я иногда читаю газету», а написал: I always read a newspaper. Запиши строку " +
          "без ошибки.",
        answer: "I sometimes read a newspaper.",
        accept: [
          "Sometimes I read a newspaper.",
          "I read a newspaper sometimes.",
          "Sometimes, I read a newspaper.",
        ],
        why:
          "I sometimes read a newspaper. Слово always значит «всегда», а Нурлан хотел написать «иногда», поэтому в " +
          "строке нужно sometimes.",
      },
      {
        /*
         * ВОПРОС 2. Итог урока 2. Переписать данную строку по условию. Стоял одиннадцатым
         * и переставлен решением методиста от 15 сентября 2026 (Р12): вопрос ставит данное
         * usually в данную строку — это дело урока 2, а не урока 11. Итог урока 2 переписан
         * (Р11.2): «средняя частота» была снятой шкалой.
         */
        id: "q2-perepisat-s-usually",
        kind: "short",
        outcome: "говорить, что бывает обычно и что часто: I usually get up early",
        prompt:
          "В записи о себе стоит строка: I read at home. Добавь в неё «обычно» по-английски и запиши строку целиком.",
        answer: "I usually read at home.",
        accept: ["Usually I read at home.", "Usually, I read at home."],
        why: "I usually read at home. Наречие usually встаёт между I и глаголом read, а at home остаётся в конце.",
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
          "Ученик хотел сказать, что никогда не ест мясо, и написал: I don't eat meat. Строка верна, но «никогда» " +
          "в ней не сказано. Перепиши строку так, чтобы в ней было сказано «никогда».",
        answer: "I never eat meat.",
        accept: ["I don't ever eat meat."],
        why:
          "I never eat meat. Слово never значит «никогда не», и «не» в нём уже есть. Поэтому don't в строке " +
          "больше не нужно.",
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
          "Ученик написал: I always busy at the weekend. Запиши строку без ошибки.",
        answer: "I am always busy at the weekend.",
        accept: ["I'm always busy at the weekend."],
        why:
          "I am always busy at the weekend. В строке не хватало формы am. Наречие always стоит после неё, а слово " +
          "busy идёт следом.",
      },
      {
        /*
         * ВОПРОС 5. Итог урока 5. Исправить чужую запись.
         */
        id: "q5-ispravit-okonchanie",
        kind: "short",
        outcome: "оставлять -s у глагола, когда о частоте говорят про одного человека",
        prompt:
          "Ученик написал об Алиме: He often work at home. Запиши строку без ошибки.",
        answer: "He often works at home.",
        accept: ["He works at home often."],
        why:
          "He often works at home. Алим один, поэтому глагол work пишется с окончанием -s, и наречие often " +
          "перед ним этого не меняет.",
      },
      {
        /*
         * ВОПРОС 6. Итог урока 6. Переписать данную строку по условию.
         */
        id: "q6-perepisat-s-nachala",
        kind: "short",
        outcome: "начинать строку словом sometimes",
        prompt:
          "Ким написал: I sometimes walk to school. Перепиши строку так, чтобы наречие частоты стояло в начале.",
        answer: "Sometimes I walk to school.",
        accept: ["Sometimes, I walk to school."],
        why:
          "Sometimes I walk to school. Слово sometimes перешло в начало строки и пишется с заглавной буквы. " +
          "Остальные слова идут в прежнем порядке.",
      },
      {
        /*
         * ВОПРОС 7. Итог урока 7. Исправить чужую запись.
         */
        id: "q7-ispravit-every-months",
        kind: "short",
        outcome: "называть оборотом every и словом времени, как часто повторяется дело",
        prompt:
          "Ученик написал: I write to my uncle every months. Запиши строку без ошибки.",
        answer: "I write to my uncle every month.",
        why:
          "I write to my uncle every month. Слово после every пишется без окончания -s, как в уроке «Каждую " +
          "неделю: every week, every month».",
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
          "Ким спросил Дану: Do your parents cook fish? Он хотел узнать, часто ли её родители готовят рыбу. " +
          "Вставь в вопрос «часто» по-английски и запиши вопрос целиком.",
        answer: "Do your parents often cook fish?",
        accept: ["Do your parents cook fish often?"],
        why: "Do your parents often cook fish? Наречие often встаёт после your parents и перед глаголом cook.",
      },
      {
        /*
         * ВОПРОС 9. Итог урока 9. Запись печатается в условии и она новая — решение
         * методиста 5.1: страница работы уроков не показывает, а печатать текст урока 9
         * значит переигрывать урок чтения. Все три слова вариантов стоят в записи.
         */
        id: "q9-po-zapisi-kak-chasto-televizor",
        kind: "choice",
        outcome: "находить в записи, что человек делает всегда, а что иногда",
        prompt:
          "Ким написал о себе: I always eat at school. Sometimes I watch television in the afternoon. I often go " +
          "to the park. Как часто Ким смотрит телевизор днём?",
        options: [
          { text: "всегда" },
          { text: "иногда", correct: true },
          { text: "часто" },
        ],
        why:
          "Иногда. Строка о телевизоре начинается словом Sometimes, а оно значит «иногда». Слово always стоит в " +
          "строке о школе, а often в строке о парке.",
      },
      {
        /*
         * ВОПРОС 10. Итог урока 10. Одно слово с новой записи — решение методиста 5.1:
         * прежний ответ month вспоминался по уроку 7 и стоял на экране в вопросе 7,
         * а `every month` не принимался. Голоса по умолчанию: спрашивает женский,
         * отвечает мужской — в условии «он».
         *
         * ОТВЕТ НА СЛУХ — ОДНО СЛОВО: руководство A2 Key, с. 29.
         */
        id: "q10-na-sluh-kak-chasto-poyot",
        kind: "short",
        outcome: "понимать на слух, как часто человек что-то делает",
        zvuk: "Do you often sing? — I sing every day.",
        prompt:
          "В записи мужчину спрашивают, часто ли он поёт. Запиши слово, которое звучит в его ответе после every.",
        answer: "day",
        accept: ["every day"],
        why: "day. Он ответил: I sing every day. По-русски это «Я пою каждый день».",
      },
      {
        /*
         * ВОПРОС 11. Итог урока 11. Ответить на вопрос строкой о себе. Стоял вторым и
         * переставлен решением методиста от 15 сентября 2026 (Р12): отвечать другу строкой о
         * себе — дело уроков 8 и 11. Другие порядки, в том числе оборот времени в начале,
         * accept принимает молча — English Grammar Profile, FOCUS, A2 (Р4).
         */
        id: "q11-otvetit-drugu-so-slovom-usually",
        kind: "short",
        outcome: "строить о себе строку с наречием частоты",
        prompt:
          "Друг спрашивает тебя: Do you often swim in the evening? Ответь ему по-английски, что ты обычно " +
          "плаваешь вечером.",
        answer: "I usually swim in the evening.",
        accept: [
          "Yes, I usually swim in the evening.",
          "Yes, I do. I usually swim in the evening.",
          "Usually I swim in the evening.",
          "Yes, usually I swim in the evening.",
          "Yes, I do. Usually I swim in the evening.",
          "In the evening I usually swim.",
          "In the evening, I usually swim.",
          "Yes, in the evening I usually swim.",
          "Yes, I do. In the evening I usually swim.",
          "Usually, I swim in the evening.",
          "Yes, I do. Usually, I swim in the evening.",
          "Yes, I do. In the evening, I usually swim.",
        ],
        why:
          "I usually swim in the evening. Слово usually стоит после I и перед глаголом swim, а оборот in the " +
          "evening стоит в конце строки.",
      },
      {
        /*
         * ВОПРОС 12. Итог урока 1 (случай 6 — как часто и когда в одной строке).
         * Назвать причину ошибки — решение методиста 5.1: прежний вопрос о смысле был
         * близнецом сопоставления урока 3. Ошибка настоящая: русский порядок.
         */
        id: "q12-pochemu-oshibka-oborot-vremeni",
        kind: "choice",
        outcome: "говорить, что бывает всегда и что иногда: I always work",
        prompt:
          "Ученик хотел сказать «Они всегда днём спят» и написал: They always in the afternoon sleep. Почему это " +
          "ошибка?",
        options: [
          { text: "наречие always стоит не на своём месте" },
          { text: "перед наречием always не хватает формы are" },
          { text: "оборот in the afternoon стоит между always и глаголом sleep", correct: true },
        ],
        why:
          "Верна третья причина. Без ошибки строка такая: They always sleep in the afternoon. В ней always стоит " +
          "прямо перед глаголом sleep, а ученик разделил их оборотом, как в русской фразе «всегда днём спят». " +
          "Наречие always стоит на своём месте, и форма are перед ним не нужна, потому что в строке есть глагол.",
      },
    ],
  },
};

export default modul;
