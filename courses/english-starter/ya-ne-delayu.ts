import type { Module } from "@/lib/content/types";

/**
 * Модуль 15 курса «Английский с нуля»: я не делаю.
 *
 * Программа: docs/programma-english-starter.md, модуль 15 — «отрицать привычные
 * дела»; грамматика: настоящее простое время, отрицание; отрицание с `do`.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. Отрицание с `don't` — A1, и двумя строками сразу. English Grammar Profile,
 *    NEGATION, «FORM: AUXILIARY VERB 'DO', PRESENT»: «Can form negative
 *    statements of main verbs in the present simple with 'don't' + main verb»,
 *    примеры источника — «I don't have a dining room, so we eat in the living
 *    room», «We don't like other lessons». И PRESENT present simple, «FORM:
 *    NEGATIVE»: «Can use the negative form with a limited range of regular and
 *    irregular verbs», примеры — «I don't like meat and fish», «You don't know
 *    the place».
 *
 * 2. Существительное без артикля о вещах вообще («I don't eat meat») — A1:
 *    DETERMINERS articles, «FORM/USE: NO ARTICLE»: «Can use no article before a
 *    limited range of singular, plural and uncountable nouns when referring to
 *    things in general», пример источника — «In my free time I usually play
 *    football».
 *
 * 3. Слова — Oxford 3000, все A1: cook, drive, walk, sleep, buy, sing, swim,
 *    wash, understand, meat, fish, tea, water.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ — ГЛАВНОЕ, ЧТО НАДО ЗНАТЬ ОБ ЭТОМ МОДУЛЕ:
 *
 * — ФОРМА `doesn't`. Разбирал построчно: на A1 в примерах источника стоит
 *   только `don't` — «I don't have…», «We don't like…», «I don't like meat and
 *   fish», «You don't know the place». Ни одного `doesn't` на A1 нет.
 *   Единственное вхождение в подразделе present simple — строка A2 «FORM:
 *   NEGATIVE»: «Can use the negative form with an increasing range of regular
 *   and irregular verbs», пример источника — «It doesn't cost very much».
 *   Второе подтверждение ступени: руководство Cambridge для младших ступеней,
 *   с. 77, список «что нового на A2 Flyers» — «I won't buy her a CD because she
 *   doesn't like music».
 *
 *   ПОЧЕМУ ВСЁ-ТАКИ ВЗЯТО: модуль 14 научил говорить `he works`, `the shop
 *   opens`, и без `doesn't` ученик не может отрицать ничего из этого. Курс,
 *   который даёт третье лицо в утверждении и отнимает его в отрицании, оставляет
 *   ученика с половиной умения. Защита по ступени: тот же список Cambridge для
 *   Pre A1 Starters (с. 29) вводит глаголы сразу во всех формах — «Positive,
 *   negative, question, imperative and short-answer forms, including
 *   contractions».
 *
 * — ВОПРОС `Do you work on Sunday?` — ровно один, в примере первого урока, и
 *   ученику он дан готовой фразой с адресом («разберём в модуле „Спросить о
 *   делах“»). Ступень: A2, PRESENT present simple, «FORM: QUESTIONS» — «Can use
 *   'yes/no' and 'wh-' question forms with 'you'». Первая редакция шапки
 *   объявляла его отсутствующим, хотя он есть; нашёл методист.
 *
 * — ГЛАГОЛ `understand` в настоящем простом. Само слово A1 по Oxford 3000, но
 *   употребление источник кладёт выше: PRESENT present simple, **B1**, «USE:
 *   MENTAL PROCESS VERBS» — «Can use the present simple with an increasing range
 *   of mental process verbs, including 'remember', 'understand', 'believe'». На
 *   A2 в той же строке только think, hope, know. Оборот `I don't understand`
 *   нужен ученику в первом же живом разговоре, поэтому взят. Нашёл методист.
 *
 *   Записано владельцу: docs/zadachi-vladeltsa.md, п. 1.10.
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ:
 *
 * — кратких ответов `No, I don't` — они бывают только на вопрос, а вопрос идёт
 *   в модуле 16. Здесь отрицание только в сообщении;
 * — отрицательного повелительного наклонения («Don't go!») — A2 отдельной
 *   строкой, «FORM: 'DO', IMPERATIVES», и по программе это модуль 22;
 * — слова `never` — по программе модуль 17, и по ступени оно A2 (на A1 из
 *   наречий частоты стоят только `always` и `sometimes`);
 * — количества и слова `some` с неисчисляемыми — модуль 23. Слова `meat`,
 *   `fish`, `water` здесь стоят без артикля и без количества, по строке A1
 *   «FORM/USE: NO ARTICLE» выше;
 * — `didn't` — прошедшее время, модуль 25, ступень A2.
 *
 * ОПОРА НА ПРЕДЫДУЩИЕ МОДУЛИ: настоящее простое и окончание -s — модуль 14;
 * отрицание с формой `be` и короткая запись через апостроф — модуль 5; поправка
 * в два шага — тоже модуль 5; дни недели и время — модуль 10; места — модуль 12.
 *
 * Звук есть: синтез речи Azure, британские голоса — решение владельца
 * 16 августа 2026 (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "ya-ne-delayu",
  title: "Я не делаю",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, NEGATION, «FORM: AUXILIARY VERB 'DO', PRESENT»: «Can form negative statements " +
        "of main verbs in the present simple with 'don't' + main verb», примеры источника — " +
        "«I don't have a dining room, so we eat in the living room», «We don't like other " +
        "lessons, for example: French language». " +
        "A1, PRESENT present simple, «FORM: NEGATIVE»: «Can use the negative form with a " +
        "limited range of regular and irregular verbs», примеры — «I don't like meat and " +
        "fish», «You don't know the place». " +
        "A1, DETERMINERS articles, «FORM/USE: NO ARTICLE»: «Can use no article before a " +
        "limited range of singular, plural and uncountable nouns when referring to things " +
        "in general» — отсюда I don't eat meat без артикля. " +
        "ВЗЯТО СВЕРХ СТУПЕНИ: форма doesn't. На A1 во всех примерах источника стоит только " +
        "don't. На A1 нет ни одного вхождения doesn't и does not — проверено по всем " +
        "строкам файла. Ближайшее — A2, «FORM: NEGATIVE»: «Can use the negative form with " +
        "an increasing range of regular and irregular verbs», пример источника — «It " +
        "doesn't cost very much». " +
        "ТАКЖЕ ВЗЯТО СВЕРХ СТУПЕНИ: вопрос Do you work on Sunday? в примере первого урока " +
        "(A2, «FORM: QUESTIONS») и глагол understand в настоящем простом (B1, «USE: MENTAL " +
        "PROCESS VERBS» — remember, understand, believe; на A2 в той же строке только " +
        "think, hope, know). Первая редакция объявляла оба отсутствующими; нашёл методист. " +
        "ОГОВОРКА ПО understand, второй проход: строка B1 описывает употребление с " +
        "придаточным — пример источника «I don't remember the title of the film». Урок " +
        "берёт голую форму «I don't understand» без придаточного, то есть проще образца, " +
        "а само слово стоит на A1 в Oxford 3000. Ступень названа по самой строгой из " +
        "возможных оценок, но случай легче, чем она предполагает. " +
        "ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО: A2 " +
        "NEGATION «FORM: 'DO', IMPERATIVES» (Don't go! — модуль 22), A2 NEGATION «FORM: " +
        "AUXILIARY VERB 'DO', PAST» (didn't — модуль 25)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, грамматический список ступени Pre A1 Starters, строка «Present simple»: " +
        "«Nick is happy. I don't like eggs. Eat your lunch! Is that your sister? Yes, it " +
        "is» — отрицание с don't названо прямо на самой низкой ступени, тем же примером, " +
        "что и в English Grammar Profile. " +
        "Там же строка «Verbs»: «Positive, negative, question, imperative and short-answer " +
        "forms, including contractions» — глаголы вводятся сразу во всех формах. Это " +
        "защита для doesn't. " +
        "ОСТОРОЖНО СО ССЫЛКОЙ НА с. 77: первая редакция приводила оттуда «I won't buy her " +
        "a CD because she doesn't like music» как доказательство, что doesn't у Cambridge " +
        "стоит на A2. Это подмена: строка стоит в графе «Will», новым на ступени объявлен " +
        "won't, а doesn't попал в пример попутно. Отдельной строки об отрицании present " +
        "simple на с. 77 нет вовсе. Нашёл методист. " +
        "Ступень doesn't держится только на English Grammar Profile — см. запись выше. " +
        "Руководство Cambridge, наоборот, кладёт отрицание present simple со стяжениями на " +
        "Pre A1 Starters (с. 29, строка «Verbs»), то есть работает в пользу оборота",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 63, Sustained monologue: describing experience, A1: «Can describe simple " +
        "aspects of their everyday life in a series of simple sentences» — рассказ о " +
        "повседневном несколькими предложениями, что и делает последний урок. " +
        "ОГОВОРКА, как и в модуле 14: на той же странице строки со словами «habits and " +
        "routines» стоят на A2. Опора модуля — строка A1 выше, а не они",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля, все с пометкой A1: cook (v.), drive (v.), walk (v., n.), " +
        "sleep (v.), buy (v.), sing (v.), swim (v.), wash (v.), understand (v.), meat " +
        "(n.), fish (n.), tea (n.), water (n.). Слова прежних модулей: work, live, study, " +
        "read, play, watch, go, get up, like, eat, drink, know, coffee, football, music, " +
        "every day, Sunday, shop, hospital, school",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e вместо ɛ, конечный безударный через ə вместо ɐ (water — /ˈwɔːtə/ " +
        "при /wˈɔːtɐ/ в источнике), r вместо ɹ (drive — /draɪv/ при /dɹˈaɪv/). " +
        "Отдельно: don't — /dəʊnt/, doesn't — /ˈdʌznt/; в doesn't гласный не такой, как в " +
        "does во всех прочих употреблениях, и это стоит помнить при озвучке",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить, чего не делаешь сам: I don't work on Sunday",
    "говорить, чего не делает другой человек: He doesn't work on Sunday",
    "писать полную и короткую запись: do not и don't",
    "различать отрицание с формой be и с don't: I'm not a doctor — I don't work",
    "поправлять собеседника: сказать, что не так, и как на самом деле",
    "называть свои привычки через «не»: I don't eat meat",
    "говорить, чего не делают несколько человек: My friends don't live here",
    "рассказывать, что делаешь и чего не делаешь",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ne-delayu-dont",
      title: "Я не делаю: don't",
      estimatedMinutes: 13,
      outcome: "говорить, чего не делаешь сам: I don't work on Sunday",

      blocks: [
        {
          id: "zachem-dont",
          kind: "explain",
          text: [
            "Тебя зовут на работу в воскресенье. Ответить надо, что по воскресеньям ты не " +
              "работаешь. А нечем: отрицание ты умеешь строить только с формой be — " +
              "I'm not a doctor.",
            "С обычным глаголом отрицание строят иначе: перед ним ставят don't. " +
              "I don't work on Sunday.",
            "Само слово don't ничего не называет. Оно только показывает, что этого нет.",
          ],
        },
        {
          id: "tablica-dont",
          kind: "table",
          caption: "Делаю и не делаю",
          head: ["Делаю", "Не делаю", "Перевод отрицания"],
          rows: [
            ["I work on Sunday.", "I don't work on Sunday.", "По воскресеньям я не работаю."],
            ["I drink coffee.", "I don't drink coffee.", "Я не пью кофе."],
            ["I play football.", "I don't play football.", "Я не играю в футбол."],
            ["I know Dana.", "I don't know Dana.", "Я не знаю Дану."],
          ],
        },
        {
          id: "dont-pered-deystviem",
          kind: "explain",
          text: [
            "Порядок такой: сначала тот, кто действует, потом don't, потом сам глагол.",
            "I | don't | work | on Sunday.",
            "Сам глагол при этом не меняется: work остаётся work.",
          ],
        },
        {
          id: "dont-ne-s-be",
          kind: "note",
          tone: "mistake",
          text:
            "Don't не ставят рядом с формой be.\n\n«I don't am a doctor» сказать нельзя. У " +
            "формы be своё отрицание — I'm not a doctor, оно разобрано в модуле «Не так».",
        },
        {
          id: "primer-dont",
          kind: "example",
          caption: "Разговор о воскресенье",
          text:
            "— Do you work on Sunday?\n— No. I don't work on Sunday. I read books.",
          explain:
            "Вопрос в первой строке пока бери целиком: его разберём в модуле «Спросить о " +
            "делах». Важен ответ: сначала что не так, потом как на самом деле — так же, " +
            "как в модуле «Не так».",
        },
        {
          id: "zapis-dont",
          kind: "audio",
          pace: "slow",
          caption: "Послушай пары",
          transcript:
            "I work on Sunday. I don't work on Sunday. I drink coffee. I don't drink " +
            "coffee. I know Dana. I don't know Dana.",
        },
        {
          id: "slovar-dont",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "don't", translation: "не (перед глаголом)", example: "I don't work.", hint: "/dəʊnt/" },
            { term: "drive", translation: "водить машину", example: "I don't drive.", hint: "/draɪv/" },
            { term: "cook", translation: "готовить", example: "I cook on Sunday.", hint: "/kʊk/" },
            { term: "walk", translation: "ходить пешком", example: "I walk to work.", hint: "/wɔːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dont",
          kind: "gap",
          prompt: "По воскресеньям ты не работаешь. Допиши недостающее слово.",
          before: "I ",
          after: " work on Sunday.",
          answer: "don't",
          hint: "Оно стоит перед глаголом и само ничего не называет.",
          why: "I don't work on Sunday. Слово don't ставят перед самим глаголом.",
        },
        {
          id: "z2-dont-ili-not",
          kind: "choice",
          prompt: "Ты не пьёшь кофе. Как сказать?",
          options: [
            { text: "I not drink coffee." },
            { text: "I don't drink coffee.", correct: true },
            { text: "I don't am drink coffee." },
          ],
          hint: "Одного not мало: перед глаголом ставят don't.",
          why:
            "I don't drink coffee. Одного not мало: перед глаголом нужно целое слово don't.",
        },
        {
          id: "z3-otmetit-lishnee-be",
          kind: "hottext",
          prompt: "Отметь записи, где рядом с don't стоит лишняя форма be.",
          parts: [
            { text: "I don't work on Sunday.", selectable: true },
            { text: " · " },
            { text: "I don't am a doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am not a doctor.", selectable: true },
            { text: " · " },
            { text: "I don't am work.", selectable: true, correct: true },
          ],
          hint: "Ищи am рядом с don't.",
          why:
            "Лишняя форма am во второй и четвёртой записях. У формы be своё отрицание: " +
            "I am not a doctor.",
        },
        {
          id: "z4-sobrat-dont",
          kind: "order",
          prompt: "Собери предложение: «Я не вожу машину».",
          items: ["drive", "I", "don't"],
          answer: [1, 2, 0],
          hint: "Сначала тот, кто действует, потом don't.",
          why: "I don't drive. Сам глагол после don't не меняется.",
        },
        {
          id: "z5-napisat-dont",
          kind: "short",
          prompt: "Ты не играешь в футбол. Запиши предложение целиком, начни с I.",
          answer: "I don't play football.",
          exact: true,
          accept: ["I don't play football"],
          hint: "Порядок: кто, don't, глагол.",
          why: "I don't play football.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-ne-delaet",
      title: "Он не делает: doesn't",
      estimatedMinutes: 14,
      outcome: "говорить, чего не делает другой человек: He doesn't work on Sunday",

      blocks: [
        {
          id: "zachem-doesnt",
          kind: "explain",
          text: [
            "Ты рассказываешь о брате: по воскресеньям он не работает. Сказать He don't work " +
              "нельзя — так же, как нельзя было сказать He work.",
            "Об одном человеке отрицание строят через doesn't: He doesn't work on Sunday.",
            "Doesn't — это тот же don't, только с окончанием: do превращается в does.",
            "Окончание тут -es, а не одна -s, — как у go, которое даёт goes. Это разбирали " +
              "в модуле «Что я делаю», в уроке «Когда одной s мало».",
          ],
        },
        {
          id: "tablica-doesnt",
          kind: "table",
          caption: "Я и он",
          head: ["Я", "Он или она", "Перевод второго столбца"],
          rows: [
            ["I don't work.", "He doesn't work.", "Он не работает."],
            ["I don't drive.", "She doesn't drive.", "Она не водит машину."],
            ["I don't like coffee.", "He doesn't like coffee.", "Он не любит кофе."],
            ["I don't know Dana.", "She doesn't know Dana.", "Она не знает Дану."],
          ],
        },
        {
          id: "okonchanie-uhodit",
          kind: "note",
          tone: "mistake",
          text:
            "В утверждении окончание -s стоит у глагола: He works.\n\nВ отрицании оно " +
            "переходит к doesn't, а глагол остаётся без него: He doesn't work.\n\n«He " +
            "doesn't works» сказать нельзя: окончание одно и стоит один раз.",
        },
        {
          id: "gde-stoit-s",
          kind: "table",
          caption: "Где стоит окончание",
          head: ["Утверждение", "Отрицание"],
          rows: [
            ["He works.", "He doesn't work."],
            ["She goes to work.", "She doesn't go to work."],
            ["The shop opens at nine.", "The shop doesn't open at nine."],
          ],
        },
        {
          id: "primer-doesnt",
          kind: "example",
          caption: "Рассказ о брате",
          text:
            "My brother works in a shop.\nHe doesn't work on Sunday.\n" +
            "He doesn't drive, he walks.",
          explain:
            "В первой строке утверждение: окончание у works. Во второй строке и в начале " +
            "третьей окончание стоит у doesn't, а сам глагол без него. В конце третьей " +
            "строки снова утверждение — he walks, и окончание опять у глагола.",
        },
        {
          id: "zapis-doesnt",
          kind: "audio",
          pace: "slow",
          caption: "Послушай пары",
          transcript:
            "I don't work. He doesn't work. I don't drive. She doesn't drive. He works. " +
            "He doesn't work.",
        },
        {
          id: "slovar-doesnt",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "doesn't", translation: "не (об одном человеке или предмете)", example: "He doesn't work.", hint: "/ˈdʌznt/" },
            { term: "sleep", translation: "спать", example: "He doesn't sleep in the day.", hint: "/sliːp/" },
            { term: "buy", translation: "покупать", example: "She doesn't buy coffee.", hint: "/baɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-doesnt",
          kind: "gap",
          prompt: "Брат не водит машину. Допиши недостающее слово.",
          before: "He ",
          after: " drive.",
          answer: "doesn't",
          hint: "Речь об одном человеке, значит окончание переходит к отрицанию.",
          why: "He doesn't drive. Об одном человеке отрицание строят через doesn't.",
        },
        {
          id: "z2-gde-okonchanie",
          kind: "choice",
          prompt: "Сестра не работает по воскресеньям. Какую запись выбрать?",
          options: [
            { text: "She doesn't works on Sunday." },
            { text: "She don't work on Sunday." },
            { text: "She doesn't work on Sunday.", correct: true },
          ],
          hint: "Окончание -s стоит в предложении один раз.",
          why:
            "She doesn't work on Sunday. Окончание перешло к doesn't, и у самого глагола его " +
            "больше нет.",
        },
        {
          id: "z3-otmetit-dva-okonchaniya",
          kind: "hottext",
          prompt: "Отметь записи, где окончание -s стоит дважды.",
          parts: [
            { text: "He doesn't work.", selectable: true },
            { text: " · " },
            { text: "He doesn't works.", selectable: true, correct: true },
            { text: " · " },
            { text: "She doesn't goes to work.", selectable: true, correct: true },
            { text: " · " },
            { text: "She doesn't go to work.", selectable: true },
          ],
          hint: "Проверь оба слова: и отрицание, и само действие.",
          why:
            "Окончание стоит дважды во второй и третьей записях. Верно: He doesn't work, " +
            "She doesn't go to work.",
        },
        {
          id: "z4-perestroit-v-otricanie",
          kind: "short",
          prompt: "Сделай отрицание: «The shop opens at nine.» Начни с The shop.",
          answer: "The shop doesn't open at nine.",
          exact: true,
          accept: ["The shop doesn't open at nine"],
          hint: "Магазин один, значит нужен doesn't.",
          why:
            "The shop doesn't open at nine. Предмет в единственном числе ведёт себя так " +
            "же, как he и she.",
        },
        {
          id: "z5-napisat-o-sestre",
          kind: "short",
          prompt: "Сестра не покупает кофе. Запиши предложение целиком, начни с She.",
          answer: "She doesn't buy coffee.",
          exact: true,
          accept: ["She doesn't buy coffee"],
          hint: "Окончание переходит к отрицанию, а не остаётся у глагола.",
          why: "She doesn't buy coffee.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "polnaya-i-korotkaya",
      title: "Полная и короткая запись",
      estimatedMinutes: 11,
      outcome: "писать полную и короткую запись: do not и don't",

      blocks: [
        {
          id: "zachem-polnaya",
          kind: "explain",
          text: [
            "В объявлении на двери написано: The shop does not open on Sunday. Ты знаешь " +
              "doesn't, а тут два слова.",
            "Это одно и то же. Don't и doesn't — короткая запись, do not и does not — " +
              "полная.",
            "Приём знакомый по модулю «Не так»: два слова сливаются в одно, а на месте " +
              "пропавшей буквы o ставят апостроф.",
          ],
        },
        {
          id: "tablica-polnoy",
          kind: "table",
          caption: "Полная и короткая",
          head: ["Полная", "Короткая", "Пример"],
          rows: [
            ["do not", "don't", "I don't work on Sunday."],
            ["does not", "doesn't", "He doesn't work on Sunday."],
          ],
        },
        {
          id: "gde-kakaya",
          kind: "note",
          tone: "info",
          text:
            "Значат они одно и то же, и понимать надо обе.\n\nВ заданиях курса пиши " +
            "короткую — don't и doesn't, если в самом задании не сказано иначе.",
        },
        {
          id: "apostrof-na-meste-o",
          kind: "note",
          tone: "mistake",
          text:
            "Апостроф стоит там, где выпала буква o: don't, doesn't.\n\n«Dont» и «does'nt» " +
            "— частые описки. Проверяй себя по полной записи: do not, does not.",
        },
        {
          id: "primer-polnoy",
          kind: "example",
          caption: "Объявление и разговор",
          text:
            "The shop does not open on Sunday.\n\n— Sorry, we don't open on Sunday.",
          explain:
            "Одно и то же двумя записями: на двери полная запись, в разговоре короткая.",
        },
        {
          id: "slovar-polnoy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "do not", translation: "не (полная запись)", example: "I do not work.", hint: "/duː nɒt/" },
            { term: "does", translation: "форма do об одном человеке", example: "He does not work.", hint: "/dʌz/" },
            { term: "does not", translation: "не (полная запись об одном)", example: "He does not work.", hint: "/dʌz nɒt/" },
          ],
        },
        {
          id: "zapis-polnoy",
          kind: "audio",
          pace: "slow",
          caption: "Послушай обе записи",
          transcript:
            "I do not work. I don't work. He does not work. He doesn't work.",
        },

        // ---- задания ----
        {
          id: "z1-korotkaya-zapis",
          kind: "short",
          prompt: "Запиши коротко: «I do not work on Sunday.» Начни с I.",
          answer: "I don't work on Sunday.",
          exact: true,
          accept: ["I don't work on Sunday"],
          hint: "Апостроф встаёт на место выпавшей буквы.",
          why: "I don't work on Sunday. Do и not слились в одно слово.",
        },
        {
          id: "z2-polnaya-zapis",
          kind: "short",
          prompt: "Запиши полностью: «He doesn't drive.» Начни с He.",
          answer: "He does not drive.",
          exact: true,
          accept: ["He does not drive"],
          hint: "Вместо апострофа возвращается буква o и пробел.",
          why: "He does not drive. Короткая запись разворачивается в два слова.",
        },
        {
          id: "z3-otmetit-opiski",
          kind: "hottext",
          prompt: "Отметь записи с опиской.",
          parts: [
            { text: "I don't work.", selectable: true },
            { text: " · " },
            { text: "I dont work.", selectable: true, correct: true },
            { text: " · " },
            { text: "He does'nt work.", selectable: true, correct: true },
            { text: " · " },
            { text: "He doesn't work.", selectable: true },
          ],
          hint: "Апостроф стоит на месте буквы o.",
          why:
            "Описки во второй и третьей записях: в одной апострофа нет вовсе, в другой он " +
            "стоит не на своём месте. Верно don't и doesn't.",
        },
        {
          id: "z4-sopostavit-zapisi",
          kind: "match",
          prompt: "Сопоставь полную запись и короткую.",
          left: ["do not", "does not"],
          right: ["doesn't", "don't"],
          answer: [1, 0],
          hint: "Смотри, у какой формы есть окончание -s.",
          why: "Do not — don't, does not — doesn't.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-be-a-dont",
      title: "Не be, а don't",
      estimatedMinutes: 13,
      outcome: "различать отрицание с формой be и с don't: I'm not a doctor — I don't work",

      blocks: [
        {
          id: "zachem-razlichenie",
          kind: "explain",
          text: [
            "Тебя спрашивают: Are you a doctor? Ответить надо двумя предложениями: I'm not a " +
              "doctor и I don't work in a hospital.",
            "Отрицание в них разное. После формы be ставят not, перед глаголом — don't.",
            "Выбирают по тому, что стоит сразу после слова о человеке.",
          ],
        },
        {
          id: "tablica-razlicheniya",
          kind: "table",
          caption: "Два отрицания",
          head: ["Что в предложении", "Отрицание", "Пример"],
          rows: [
            ["форма be", "not после неё", "I'm not a doctor."],
            ["форма be", "not после неё", "The shop isn't big."],
            ["глагол", "don't перед ним", "I don't work."],
            ["глагол", "doesn't перед ним", "He doesn't work."],
          ],
        },
        {
          id: "kak-proverit",
          kind: "explain",
          text: [
            "Посмотри, что стоит сразу после слова о человеке: форма be или глагол.",
            "I am a doctor — стоит am, значит отрицание I'm not.",
            "I work — стоит глагол, значит отрицание I don't work.",
          ],
        },
        {
          id: "dve-oshibki-srazu",
          kind: "note",
          tone: "mistake",
          text:
            "Ошибиться можно в обе стороны, и обе ошибки частые.\n\n«I don't am a doctor» — " +
            "don't поставлен к форме be.\n\n«I'm not work» — форма be поставлена к " +
            "глаголу.\n\nВерно: I'm not a doctor. I don't work.",
        },
        {
          id: "primer-razlicheniya",
          kind: "example",
          caption: "Разговор о работе",
          text:
            "— Are you a doctor?\n— No, I'm not a doctor. I don't work in a hospital.\n" +
            "— And your brother?\n— He isn't a doctor. He doesn't work in a hospital.",
          explain:
            "В каждом ответе два предложения: одно с формой be, другое с глаголом. " +
            "Отрицание в них разное, и путать их нельзя.",
        },
        {
          id: "zapis-razlicheniya",
          kind: "audio",
          pace: "slow",
          caption: "Послушай оба отрицания рядом",
          transcript:
            "I'm not a doctor. I don't work in a hospital. He isn't a doctor. He doesn't " +
            "work in a hospital.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-otricanie",
          kind: "choice",
          prompt: "Ты не студент. Как сказать?",
          options: [
            { text: "I don't a student." },
            { text: "I'm not a student.", correct: true },
            { text: "I don't am a student." },
          ],
          hint: "Здесь названо занятие, а не дело.",
          why:
            "I'm not a student. Названию занятия нужна форма be, а отрицание к ней — not.",
        },
        {
          id: "z2-vybrat-vtoroe",
          kind: "choice",
          prompt: "Ты не работаешь в больнице. Как сказать?",
          options: [
            { text: "I'm not work in a hospital." },
            { text: "I not work in a hospital." },
            { text: "I don't work in a hospital.", correct: true },
          ],
          hint: "Здесь названо дело, а не занятие.",
          why: "I don't work in a hospital. Перед глаголом ставят don't.",
        },
        {
          id: "z3-otmetit-pereputannye",
          kind: "hottext",
          prompt: "Отметь записи, где отрицание выбрано неверно.",
          parts: [
            { text: "I'm not a doctor.", selectable: true },
            { text: " · " },
            { text: "I'm not work.", selectable: true, correct: true },
            { text: " · " },
            { text: "I don't work.", selectable: true },
            { text: " · " },
            { text: "I don't a doctor.", selectable: true, correct: true },
          ],
          hint: "Смотри, что стоит после отрицания: занятие или глагол.",
          why:
            "Отрицания перепутаны во второй и четвёртой записях. Верно: I'm not a doctor " +
            "и I don't work.",
        },
        {
          id: "z4-dva-predlozheniya",
          kind: "short",
          prompt: "Ты не врач и не работаешь в больнице. Запиши два предложения, начни с I'm not.",
          answer: "I'm not a doctor. I don't work in a hospital.",
          exact: true,
          accept: ["I'm not a doctor. I don't work in a hospital"],
          hint: "В первом предложении названо занятие, во втором — глагол.",
          why:
            "I'm not a doctor. I don't work in a hospital. Отрицания разные, потому что " +
            "после первого стоит занятие, а после второго глагол.",
        },
        {
          id: "z5-o-brate-razlichenie",
          kind: "short",
          prompt: "Брат не водит машину. Запиши предложение целиком, начни с He.",
          answer: "He doesn't drive.",
          exact: true,
          accept: ["He doesn't drive"],
          hint: "Названо дело, и речь об одном человеке.",
          why: "He doesn't drive.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-tak-a-vot-tak",
      title: "Не пью кофе — пью чай",
      estimatedMinutes: 12,
      outcome: "поправлять собеседника: сказать, что не так, и как на самом деле",

      blocks: [
        {
          id: "zachem-popravka",
          kind: "explain",
          text: [
            "Собеседник говорит: ты пьёшь кофе. А ты пьёшь чай. Одного «нет» тут мало — " +
              "он узнает только то, чего ты не делаешь.",
            "Поправку строят в два шага: сначала что не так, потом как на самом деле. " +
              "I don't drink coffee. I drink tea.",
            "Тот же приём был в модуле «Не так», только там оба шага были с формой be: " +
              "I'm not a doctor. I'm a nurse.",
          ],
        },
        {
          id: "tablica-popravok",
          kind: "table",
          caption: "Два шага",
          head: ["Шаг 1: что не так", "Шаг 2: как на самом деле"],
          rows: [
            ["I don't drink coffee.", "I drink tea."],
            ["I don't eat meat.", "I eat fish."],
            ["He doesn't drive.", "He walks."],
            ["She doesn't work on Sunday.", "She reads books."],
          ],
        },
        {
          id: "vtoroy-shag-bez-dont",
          kind: "note",
          tone: "mistake",
          text:
            "Второй шаг — обычное утверждение, и don't в нём нет.\n\n«I don't drink coffee. " +
            "I don't drink tea» значит, что ты не пьёшь ни того ни другого. Это уже другая " +
            "мысль.\n\nВо втором шаге окончание возвращается к глаголу: he walks.",
        },
        {
          id: "okonchanie-vo-vtorom-shage",
          kind: "note",
          tone: "info",
          text:
            "Если речь об одном человеке, во втором шаге окончание возвращается: He doesn't " +
            "drive, he walks.\n\nВ первом шаге окончание стоит у doesn't, во втором " +
            "возвращается к глаголу.",
        },
        {
          id: "primer-popravki",
          kind: "example",
          caption: "Поправка в разговоре",
          text:
            "— You drink coffee.\n— No, I don't drink coffee. I drink tea.\n" +
            "— And your brother?\n— He doesn't drink tea. He drinks water.",
          explain:
            "Оба ответа устроены одинаково: сначала что не так, потом как на самом деле. В " +
            "последней строке окончание вернулось к drinks.",
        },
        {
          id: "zapis-popravki",
          kind: "audio",
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай поправки",
          transcript:
            "I don't drink coffee. I drink tea. I don't eat meat. I eat fish. He doesn't " +
            "drive. He walks.",
        },
        {
          id: "slovar-popravki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "meat", translation: "мясо", example: "I don't eat meat.", hint: "/miːt/" },
            { term: "fish", translation: "рыба", example: "I eat fish.", hint: "/fɪʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vtoroy-shag",
          kind: "short",
          prompt: "Ты не пьёшь кофе, ты пьёшь чай. Запиши второй шаг целиком, начни с I.",
          answer: "I drink tea.",
          exact: true,
          accept: ["I drink tea"],
          hint: "Второй шаг — обычное утверждение, отрицания в нём нет.",
          why: "I drink tea. Во втором шаге don't не нужен.",
        },
        {
          id: "z2-otmetit-dva-otricaniya",
          kind: "hottext",
          prompt: "Отметь поправки, где отрицание стоит дважды.",
          parts: [
            { text: "I don't eat meat. I eat fish.", selectable: true },
            { text: " · " },
            { text: "I don't eat meat. I don't eat fish.", selectable: true, correct: true },
            { text: " · " },
            { text: "He doesn't drive. He doesn't walk.", selectable: true, correct: true },
            { text: " · " },
            { text: "He doesn't drive. He walks.", selectable: true },
          ],
          hint: "Поправка называет и то, чего нет, и то, что есть.",
          why:
            "Во второй и третьей записях отрицание стоит в обоих шагах, и поправки не " +
            "выходит. Верны первая и четвёртая.",
        },
        {
          id: "z3-okonchanie-vernulos",
          kind: "gap",
          prompt: "Брат не водит машину, он ходит пешком. Допиши глагол вместе с окончанием.",
          before: "He doesn't drive. He ",
          after: ".",
          answer: "walks",
          hint: "Во втором шаге окончание возвращается к действию.",
          why: "He doesn't drive. He walks. Второй шаг — утверждение, и окончание в нём есть.",
        },
        {
          id: "z4-sobrat-popravku",
          kind: "order",
          prompt: "Собери поправку: «Я не ем мясо. Я ем рыбу».",
          items: ["I eat fish.", "I don't eat meat."],
          answer: [1, 0],
          hint: "Сначала говорят, чего нет.",
          why: "I don't eat meat. I eat fish.",
        },
        {
          id: "z5-napisat-popravku",
          kind: "short",
          prompt:
            "Сестра не работает по воскресеньям, она читает книги. Запиши оба шага, начни с She.",
          answer: "She doesn't work on Sunday. She reads books.",
          exact: true,
          accept: ["She doesn't work on Sunday. She reads books"],
          hint: "В первом шаге окончание у doesn't, во втором — у действия.",
          why:
            "She doesn't work on Sunday. She reads books. В первом шаге окончание у " +
            "doesn't, во втором — у reads.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chego-ne-delayu",
      title: "Чего я не делаю",
      estimatedMinutes: 12,
      outcome: "называть свои привычки через «не»: I don't eat meat",

      blocks: [
        {
          id: "zachem-chego-ne",
          kind: "explain",
          text: [
            "О себе часто приходится говорить именно через «не»: не ем мясо, не вожу машину, " +
              "не пью кофе. Так отвечают в гостях, в кафе и на работе.",
            "Такие глаголы стоят после don't и не меняются: eat, drink, drive.",
          ],
        },
        {
          id: "tablica-chego-ne",
          kind: "table",
          caption: "Чего не делают",
          head: ["Английский", "Перевод", "Как читается новое слово"],
          rows: [
            ["I don't eat meat.", "Я не ем мясо.", "/miːt/"],
            ["I don't drink coffee.", "Я не пью кофе.", "/ˈkɒfi/"],
            ["I don't drive.", "Я не вожу машину.", "/draɪv/"],
            ["I don't sing.", "Я не пою.", "/sɪŋ/"],
            ["I don't swim.", "Я не плаваю.", "/swɪm/"],
            ["I don't sleep in the day.", "Днём я не сплю.", "/sliːp/"],
          ],
        },
        {
          id: "bez-artiklya",
          kind: "note",
          tone: "info",
          text:
            "Когда говоришь о еде и питье вообще, артикль не нужен: I don't eat meat, I don't " +
            "drink tea.\n\nАртикль вернётся, если речь об одной штуке: a fish — это одна " +
            "рыба.\n\nТо же с football: I play football — об игре вообще.",
        },
        {
          id: "deystvie-bez-nazvaniya",
          kind: "note",
          tone: "info",
          text:
            "После некоторых глаголов добавлять нечего: I don't drive, I don't swim — " +
            "предложение уже закончено.",
        },
        {
          id: "primer-chego-ne",
          kind: "example",
          caption: "В гостях",
          text:
            "— Tea or coffee?\n— Tea, please. I don't drink coffee.\n— And meat?\n" +
            "— I don't eat meat. I eat fish.",
          explain:
            "Ответить коротким предложением с don't проще, чем объяснять. Слово please " +
            "знакомо по модулю «Приветствие».",
        },
        {
          id: "zapis-chego-ne",
          kind: "audio",
          pace: "slow",
          caption: "Послушай пять предложений",
          transcript:
            "I don't eat meat. I don't drink coffee. I don't drive. I don't sing. " +
            "I don't swim.",
        },
        {
          id: "slovar-chego-ne",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sing", translation: "петь", example: "I don't sing.", hint: "/sɪŋ/" },
            { term: "swim", translation: "плавать", example: "I don't swim.", hint: "/swɪm/" },
            { term: "wash", translation: "мыть", example: "I wash my car on Sunday.", hint: "/wɒʃ/" },
            { term: "understand", translation: "понимать", example: "I don't understand.", hint: "/ˌʌndəˈstænd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-ne-em",
          kind: "short",
          prompt: "Ты не ешь мясо. Запиши предложение целиком, начни с I.",
          answer: "I don't eat meat.",
          exact: true,
          accept: ["I don't eat meat"],
          hint: "Речь о мясе вообще, а не об одном куске.",
          why: "I don't eat meat. О еде вообще говорят без артикля.",
        },
        {
          id: "z2-lishniy-artikl",
          kind: "hottext",
          prompt: "Отметь записи с лишним артиклем.",
          parts: [
            { text: "I don't eat meat.", selectable: true },
            { text: " · " },
            { text: "I don't eat a meat.", selectable: true, correct: true },
            { text: " · " },
            { text: "I don't drink a water.", selectable: true, correct: true },
            { text: " · " },
            { text: "I don't drink water.", selectable: true },
          ],
          hint: "Речь о еде и питье вообще, а не об одной штуке.",
          why:
            "Лишний артикль во второй и третьей записях. Верно: I don't eat meat, I don't " +
            "drink water.",
        },
        {
          id: "z3-dopisat-deystvie",
          kind: "gap",
          prompt: "Ты не плаваешь. Допиши глагол.",
          before: "I don't ",
          after: ".",
          answer: "swim",
          hint: "Слово есть в списке «Слова урока».",
          why: "I don't swim. После don't действие не меняется.",
        },
        {
          id: "z4-ne-ponimayu",
          kind: "choice",
          prompt: "Ты не понимаешь собеседника. Как сказать?",
          options: [
            { text: "I don't understand.", correct: true },
            { text: "I'm not understand." },
            { text: "I don't understands." },
          ],
          hint: "Названо действие, и речь о себе.",
          why:
            "I don't understand. Форма be тут не нужна, и окончания у действия после don't " +
            "не бывает.",
        },
        {
          id: "z5-o-sestre-chego-ne",
          kind: "short",
          prompt: "Сестра не поёт. Запиши предложение целиком, начни с She.",
          answer: "She doesn't sing.",
          exact: true,
          accept: ["She doesn't sing"],
          hint: "Речь об одном человеке.",
          why: "She doesn't sing.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "oni-ne-delayut",
      title: "Они не делают",
      estimatedMinutes: 11,
      outcome: "говорить, чего не делают несколько человек: My friends don't live here",

      blocks: [
        {
          id: "zachem-oni-ne",
          kind: "explain",
          text: [
            "Ты рассказываешь о друзьях: они живут не здесь. Или о родителях: они не водят " +
              "машину.",
            "О нескольких людях отрицание строят через don't — так же, как о себе. " +
              "My friends don't live here.",
            "Doesn't ставят, только когда речь об одном: he, she, it.",
          ],
        },
        {
          id: "tablica-oni-ne",
          kind: "table",
          caption: "Кто и какое отрицание",
          head: ["Кто", "Отрицание", "Пример"],
          rows: [
            ["I, you, we, they", "don't", "They don't live here."],
            ["he, she, it", "doesn't", "He doesn't live here."],
            ["один человек по имени", "doesn't", "Dana doesn't live here."],
            ["несколько человек", "don't", "My friends don't live here."],
          ],
        },
        {
          id: "smotri-skolko-ih",
          kind: "note",
          tone: "mistake",
          text:
            "Выбирай не по слову, а по количеству: об одном человеке — doesn't, о нескольких " +
            "— don't.\n\nMy brother doesn't work — брат один.\n\nMy friends don't work — " +
            "друзей несколько.",
        },
        {
          id: "primer-oni-ne",
          kind: "example",
          caption: "О друзьях",
          text:
            "My friends don't live in Astana. They live in Almaty.\n" +
            "They don't work on Sunday.",
          explain:
            "Оба предложения о нескольких людях, поэтому don't. Во втором предложении вместо " +
            "my friends стоит they: повторять их не нужно.",
        },
        {
          id: "slovar-oni-ne",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "parents", translation: "родители", example: "My parents don't drive.", hint: "/ˈpeərənts/" },
          ],
        },
        {
          id: "zapis-oni-ne",
          kind: "audio",
          pace: "slow",
          caption: "Послушай все формы",
          transcript:
            "I don't work. You don't work. He doesn't work. She doesn't work. We don't " +
            "work. They don't work.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-oni-ne",
          kind: "gap",
          prompt: "Друзья не живут здесь. Допиши недостающее слово.",
          before: "My friends ",
          after: " live here.",
          answer: "don't",
          hint: "Друзей несколько.",
          why: "My friends don't live here. О нескольких людях отрицание строят через don't.",
        },
        {
          id: "z2-roditeli-ne",
          kind: "choice",
          prompt: "Родители не водят машину. Какую запись выбрать?",
          options: [
            { text: "My parents doesn't drive." },
            { text: "My parents don't drives." },
            { text: "My parents don't drive.", correct: true },
          ],
          hint: "Родителей несколько.",
          why: "My parents don't drive. Форма doesn't достаётся только одному.",
        },
        {
          id: "z3-otmetit-formy-otricaniya",
          kind: "hottext",
          prompt: "Отметь записи, где отрицание выбрано неверно.",
          parts: [
            { text: "They don't work on Sunday.", selectable: true },
            { text: " · " },
            { text: "My brother don't work on Sunday.", selectable: true, correct: true },
            { text: " · " },
            { text: "Dana don't live here.", selectable: true, correct: true },
            { text: " · " },
            { text: "She doesn't live here.", selectable: true },
          ],
          hint: "Брат один, и Дана одна.",
          why:
            "Ошибки во второй и третьей записях: нужно My brother doesn't work и Dana " +
            "doesn't live here.",
        },
        {
          id: "z4-perestroit-na-nih",
          kind: "short",
          prompt: "Запиши то же о друзьях: «He doesn't work on Sunday.» Начни с My friends.",
          answer: "My friends don't work on Sunday.",
          exact: true,
          accept: ["My friends don't work on Sunday"],
          hint: "Друзей несколько: вместо doesn't нужен don't.",
          why: "My friends don't work on Sunday.",
        },
        {
          id: "z5-sobrat-oni-ne",
          kind: "order",
          prompt: "Собери предложение: «Мои родители не живут в Астане».",
          items: ["in Astana", "My parents", "don't live"],
          answer: [1, 2, 0],
          hint: "Место идёт в конец.",
          why: "My parents don't live in Astana.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "delayu-i-ne-delayu",
      title: "Что делаю и чего не делаю",
      estimatedMinutes: 13,
      outcome: "рассказывать, что делаешь и чего не делаешь",

      blocks: [
        {
          id: "zachem-oba",
          kind: "explain",
          text: [
            "Знакомый спрашивает про твои выходные. Полный ответ обычно состоит из двух " +
              "половин: что ты делаешь и чего не делаешь.",
            "Четырёх предложений хватает: два о том, что есть, два о том, чего нет.",
            "Каждое ты уже умеешь сказать по одному. Осталось поставить их подряд.",
          ],
        },
        {
          id: "shagi-oba",
          kind: "table",
          caption: "Рассказ по шагам",
          head: ["Шаг", "О чём", "Пример"],
          rows: [
            ["1", "что делаешь", "I get up at nine on Sunday."],
            ["2", "чего не делаешь", "I don't work."],
            ["3", "что делаешь ещё", "I read books."],
            ["4", "чего не делаешь ещё", "I don't watch football."],
          ],
        },
        {
          id: "chereduy",
          kind: "note",
          tone: "info",
          text:
            "Чередовать шаги удобнее, чем ставить все отрицания подряд: рассказ из одних " +
            "«не» слушать тяжело.",
        },
        {
          id: "primer-oba",
          kind: "example",
          caption: "Воскресенье целиком",
          text:
            "I get up at nine on Sunday.\nI don't work.\nI cook and read books.\n" +
            "I don't watch football.",
          explain:
            "Четыре предложения, два из них с don't. В третьем два действия соединены " +
            "словом and, и оба стоят без изменений.",
        },
        {
          id: "primer-oba-o-brate",
          kind: "example",
          caption: "Тот же рассказ, но о брате",
          text:
            "He gets up at nine on Sunday.\nHe doesn't work.\nHe cooks and reads books.\n" +
            "He doesn't watch football.",
          explain:
            "В утверждениях окончание стоит у глаголов: gets, cooks, reads. В отрицаниях " +
            "оно перешло к doesn't.",
        },
        {
          id: "zapis-oba",
          kind: "audio",
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай оба рассказа",
          transcript:
            "I get up at nine on Sunday. I don't work. I cook and read books. I don't " +
            "watch football. He gets up at nine on Sunday. He doesn't work. He cooks and " +
            "reads books. He doesn't watch football.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-oba",
          kind: "order",
          prompt: "Расставь предложения так, чтобы вышел рассказ по шагам.",
          items: [
            "I don't work.",
            "I read books.",
            "I get up at nine on Sunday.",
            "I don't watch football.",
          ],
          answer: [2, 0, 1, 3],
          hint: "Первый шаг говорит, что ты делаешь.",
          why:
            "I get up at nine on Sunday. I don't work. I read books. I don't watch " +
            "football.",
        },
        {
          id: "z2-vtoroy-shag-oba",
          kind: "short",
          prompt: "По воскресеньям ты не работаешь. Запиши второй шаг целиком, начни с I.",
          answer: "I don't work.",
          exact: true,
          accept: ["I don't work"],
          hint: "Отрицание о себе строят через don't.",
          why: "I don't work.",
        },
        {
          id: "z3-tot-zhe-o-brate",
          kind: "short",
          prompt: "Запиши то же о брате: «I don't watch football.» Начни с He.",
          answer: "He doesn't watch football.",
          exact: true,
          accept: ["He doesn't watch football"],
          hint: "Окончание достаётся отрицанию.",
          why: "He doesn't watch football.",
        },
        {
          id: "z4-dva-shaga-podryad",
          kind: "short",
          prompt:
            "Ты встаёшь в девять, но не работаешь. Запиши оба предложения, начни с I.",
          answer: "I get up at nine. I don't work.",
          exact: true,
          accept: ["I get up at nine. I don't work"],
          hint: "Первое предложение — утверждение, второе — отрицание.",
          why:
            "I get up at nine. I don't work. Первый шаг говорит, что ты делаешь, второй — " +
            "чего не делаешь.",
        },
        {
          id: "z5-rasskazat-vsluh-oba",
          kind: "speak",
          prompt:
            "Расскажи вслух про воскресенье: что делаешь, чего не делаешь, что делаешь ещё, чего не делаешь ещё.",
          phrase:
            "I get up at nine on Sunday. I don't work. I read books. I don't watch football.",
          translation:
            "По воскресеньям я встаю в девять. Я не работаю. Я читаю книги. Я не смотрю футбол.",
          hint: "Четыре коротких предложения по шагам таблицы.",
          why:
            "Четырёх предложений хватает: собеседник узнаёт и что ты делаешь, и чего не " +
            "делаешь.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 24, из них 17 требуют написать ответ самому или расставить
  // части. Итогов восемь, на каждый приходится по три вопроса.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.8,
    questions: [
      {
        id: "q-dont-dopisat",
        kind: "gap",
        outcome: "говорить, чего не делаешь сам: I don't work on Sunday",
        prompt: "Ты не пьёшь кофе. Допиши недостающее слово.",
        before: "I ",
        after: " drink coffee.",
        answer: "don't",
        why: "I don't drink coffee. Перед действием ставят don't.",
      },
      {
        id: "q-dont-vybor",
        kind: "choice",
        outcome: "говорить, чего не делаешь сам: I don't work on Sunday",
        prompt: "Ты не ходишь пешком на работу. Как сказать?",
        options: [
          { text: "I not walk to work." },
          { text: "I don't walk to work.", correct: true },
          { text: "I don't am walk to work." },
        ],
        why: "I don't walk to work. Одного not мало, нужно целое слово don't.",
      },
      {
        id: "q-dont-napisat",
        kind: "short",
        outcome: "говорить, чего не делаешь сам: I don't work on Sunday",
        // «I don't work on Sunday» напечатано в модуле шесть раз: в двух таблицах,
        // в разговоре, в ответе задания урока 1 и в задании урока 3. Ученик писал
        // фразу по памяти. Взяты другой день и другое действие.
        prompt: "По субботам ты не готовишь. Запиши предложение целиком, начни с I.",
        answer: "I don't cook on Saturday.",
        exact: true,
        accept: ["I don't cook on Saturday"],
        why: "I don't cook on Saturday.",
      },
      {
        id: "q-doesnt-dopisat",
        kind: "gap",
        outcome: "говорить, чего не делает другой человек: He doesn't work on Sunday",
        prompt: "Дана не поёт. Допиши недостающее слово.",
        before: "Dana ",
        after: " sing.",
        answer: "doesn't",
        why: "Dana doesn't sing. Дана одна, значит doesn't.",
      },
      {
        id: "q-doesnt-okonchanie",
        kind: "choice",
        outcome: "говорить, чего не делает другой человек: He doesn't work on Sunday",
        prompt: "Брат не работает по воскресеньям. Какую запись выбрать?",
        options: [
          { text: "He doesn't works on Sunday." },
          { text: "He doesn't work on Sunday.", correct: true },
          { text: "He don't work on Sunday." },
        ],
        why:
          "He doesn't work on Sunday. Окончание перешло к doesn't, у действия его больше " +
          "нет.",
      },
      {
        id: "q-doesnt-perestroit",
        kind: "short",
        outcome: "говорить, чего не делает другой человек: He doesn't work on Sunday",
        prompt: "Сделай отрицание: «My brother cooks on Sunday.» Начни с My brother.",
        answer: "My brother doesn't cook on Sunday.",
        exact: true,
        accept: ["My brother doesn't cook on Sunday"],
        why:
          "My brother doesn't cook on Sunday. Окончание перешло к doesn't, у глагола его " +
          "больше нет.",
      },
      {
        id: "q-korotkaya",
        kind: "short",
        outcome: "писать полную и короткую запись: do not и don't",
        prompt: "Запиши коротко: «I do not drive.» Начни с I.",
        answer: "I don't drive.",
        exact: true,
        accept: ["I don't drive"],
        why: "I don't drive. Апостроф встаёт на место выпавшей буквы o.",
      },
      {
        id: "q-polnaya",
        kind: "short",
        outcome: "писать полную и короткую запись: do not и don't",
        prompt: "Запиши полностью: «She doesn't cook.» Начни с She.",
        answer: "She does not cook.",
        exact: true,
        accept: ["She does not cook"],
        why: "She does not cook.",
      },
      {
        id: "q-opiska",
        kind: "hottext",
        outcome: "писать полную и короткую запись: do not и don't",
        prompt: "Отметь записи с опиской.",
        parts: [
          { text: "I dont cook.", selectable: true, correct: true },
          { text: " · " },
          { text: "I don't cook.", selectable: true },
          { text: " · " },
          { text: "He doesn't cook.", selectable: true },
          { text: " · " },
          { text: "He does'nt cook.", selectable: true, correct: true },
        ],
        why:
          "Описки в первой и четвёртой записях. Апостроф стоит на месте буквы o: don't, " +
          "doesn't.",
      },
      {
        id: "q-be-ili-dont",
        kind: "choice",
        outcome: "различать отрицание с формой be и с don't: I'm not a doctor — I don't work",
        prompt: "Ты не учитель. Как сказать?",
        options: [
          { text: "I don't a teacher." },
          { text: "I don't am a teacher." },
          { text: "I'm not a teacher.", correct: true },
        ],
        why: "I'm not a teacher. Учитель — это не действие, а кто ты, и такому предложению нужна форма be с not.",
      },
      {
        id: "q-pereputannye",
        kind: "hottext",
        outcome: "различать отрицание с формой be и с don't: I'm not a doctor — I don't work",
        prompt: "Отметь записи, где отрицание выбрано неверно.",
        parts: [
          { text: "I don't study English.", selectable: true },
          { text: " · " },
          { text: "I'm not study English.", selectable: true, correct: true },
          { text: " · " },
          { text: "I don't a student.", selectable: true, correct: true },
          { text: " · " },
          { text: "I'm not a student.", selectable: true },
        ],
        why:
          "Отрицания перепутаны во второй и третьей записях. Верно: I don't study English " +
          "и I'm not a student.",
      },
      {
        id: "q-dva-otricaniya-napisat",
        kind: "short",
        outcome: "различать отрицание с формой be и с don't: I'm not a doctor — I don't work",
        prompt: "Ты не студент и не учишь английский. Запиши два предложения, начни с I'm not.",
        answer: "I'm not a student. I don't study English.",
        exact: true,
        accept: ["I'm not a student. I don't study English"],
        why: "I'm not a student. I don't study English.",
      },
      {
        id: "q-popravka-vtoroy",
        kind: "short",
        outcome: "поправлять собеседника: сказать, что не так, и как на самом деле",
        prompt: "Ты не ешь мясо, ты ешь рыбу. Запиши второй шаг целиком, начни с I.",
        answer: "I eat fish.",
        exact: true,
        accept: ["I eat fish"],
        why: "I eat fish. Во втором шаге отрицания нет.",
      },
      {
        id: "q-popravka-okonchanie",
        kind: "gap",
        outcome: "поправлять собеседника: сказать, что не так, и как на самом деле",
        prompt: "Сестра не пьёт кофе, она пьёт чай. Допиши глагол вместе с окончанием.",
        before: "She doesn't drink coffee. She ",
        after: " tea.",
        answer: "drinks",
        why: "She doesn't drink coffee. She drinks tea. Во втором шаге окончание вернулось.",
      },
      {
        id: "q-popravka-sobrat",
        kind: "order",
        outcome: "поправлять собеседника: сказать, что не так, и как на самом деле",
        // Пара «He doesn't drive. He walks.» — сквозной пример урока: таблица,
        // врезка и задание. Собирали заученную витрину. Взята другая пара.
        prompt: "Собери поправку: «Она не пьёт кофе. Она пьёт чай».",
        items: ["She drinks tea.", "She doesn't drink coffee."],
        answer: [1, 0],
        why: "She doesn't drink coffee. She drinks tea.",
      },
      {
        id: "q-bez-artiklya",
        kind: "hottext",
        outcome: "называть свои привычки через «не»: I don't eat meat",
        prompt: "Отметь записи с лишним артиклем.",
        // Три записи из четырёх были дословно теми же, что в задании урока.
        // Оставлена одна общая, остальные взяты на других словах модуля.
        parts: [
          { text: "I don't drink coffee.", selectable: true },
          { text: " · " },
          { text: "I don't drink a coffee.", selectable: true, correct: true },
          { text: " · " },
          { text: "I don't eat a fish.", selectable: true, correct: true },
          { text: " · " },
          { text: "I don't eat meat.", selectable: true },
        ],
        why:
          "Лишний артикль во второй и третьей записях: речь о питье вообще, а не об " +
          "одном стакане.",
      },
      {
        id: "q-chego-ne-napisat",
        kind: "short",
        outcome: "называть свои привычки через «не»: I don't eat meat",
        prompt: "Ты не плаваешь. Запиши предложение целиком, начни с I.",
        answer: "I don't swim.",
        exact: true,
        accept: ["I don't swim"],
        why: "I don't swim.",
      },
      {
        id: "q-ne-ponimayu-quiz",
        kind: "short",
        outcome: "называть свои привычки через «не»: I don't eat meat",
        prompt: "Ты не понимаешь собеседника. Запиши предложение целиком, начни с I.",
        answer: "I don't understand.",
        exact: true,
        accept: ["I don't understand"],
        why: "I don't understand. Форма be тут не нужна.",
      },
      {
        id: "q-oni-ne-dopisat",
        kind: "gap",
        outcome: "говорить, чего не делают несколько человек: My friends don't live here",
        prompt: "Родители не живут здесь. Допиши недостающее слово.",
        before: "My parents ",
        after: " live here.",
        answer: "don't",
        why: "My parents don't live here. Родителей несколько.",
      },
      {
        id: "q-oni-ne-vybor",
        kind: "choice",
        outcome: "говорить, чего не делают несколько человек: My friends don't live here",
        prompt: "Дана не живёт здесь. Какую запись выбрать?",
        options: [
          { text: "Dana doesn't live here.", correct: true },
          { text: "Dana don't live here." },
          { text: "Dana doesn't lives here." },
        ],
        why: "Dana doesn't live here. Дана одна, значит doesn't.",
      },
      {
        id: "q-oni-ne-perestroit",
        kind: "short",
        outcome: "говорить, чего не делают несколько человек: My friends don't live here",
        prompt: "Запиши то же о друзьях: «She doesn't cook.» Начни с My friends.",
        answer: "My friends don't cook.",
        exact: true,
        accept: ["My friends don't cook"],
        why: "My friends don't cook.",
      },
      {
        id: "q-rasskaz-oba-poryadok",
        kind: "order",
        outcome: "рассказывать, что делаешь и чего не делаешь",
        // Раньше здесь стоял тот же рассказ, что в уроке, только перемешанный:
        // ученик узнавал знакомые четыре предложения, а не строил рассказ. Другой
        // день, и порядок задан временем, а не привычкой к образцу.
        prompt: "Расставь предложения по времени дня. Первым идёт подъём.",
        items: [
          "I don't read books in the evening.",
          "I work in the afternoon.",
          "I don't cook in the morning.",
          "I get up at seven.",
        ],
        answer: [3, 2, 1, 0],
        why:
          "I get up at seven. I don't cook in the morning. I work in the afternoon. I don't read books in the evening.",
      },
      {
        id: "q-rasskaz-oba-shag",
        kind: "short",
        outcome: "рассказывать, что делаешь и чего не делаешь",
        prompt: "Ты не смотришь футбол. Запиши предложение целиком, начни с I.",
        answer: "I don't watch football.",
        exact: true,
        accept: ["I don't watch football"],
        why: "I don't watch football.",
      },
      {
        id: "q-rasskaz-oba-o-brate",
        kind: "short",
        outcome: "рассказывать, что делаешь и чего не делаешь",
        prompt: "Запиши то же о брате: «I don't work.» Начни с He.",
        answer: "He doesn't work.",
        exact: true,
        accept: ["He doesn't work"],
        why: "He doesn't work. Окончание достаётся отрицанию.",
      },
    ],
  },
};

export default module;
