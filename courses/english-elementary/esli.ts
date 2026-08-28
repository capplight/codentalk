import type { Module } from "@/lib/content/types";

/**
 * Модуль 29 курса «Английский · Elementary»: если.
 *
 * Программа: docs/programma-english-elementary.md, модуль 29 — «ставить
 * условие»; грамматика: `if` + настоящее время с `will`, с `can` и с
 * повелительным; `if` против `when`. Строка проверена 28 августа 2026, до
 * написания; разбор с цитатами — там же.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ МОДУЛЯ — «УСЛОВИЕ». Половина строки со словом `if` зовётся
 * «половиной с условием», вторая — «главной половиной». Те же два имени
 * держит модуль 11, и это нарочно: там они уже введены для `when`.
 *
 * ПРО `WHEN` МОДУЛЬ НЕ ПИШЕТ: ЭТОТ УРОК В КУРСЕ ЕСТЬ.
 *
 * Модуль 11 «По расписанию», урок «Позвоню, когда приеду: I'll call you when I
 * arrive» — таблица из двух половин, объяснение «в половине со словом when
 * будущего не ставят» и врезка «I'll call you when I will arrive — так сказать
 * нельзя». Строка программы обещала это модулю 29; писать второй такой урок
 * значило бы повторить ошибку модуля 26.
 *
 * Проверка по курсу заняла одну команду, и это третий раз подряд, когда она
 * находит уже написанное. Значит она идёт ВПЕРЕДИ проверки по источнику.
 *
 * ЧТО ОСТАЁТСЯ МОДУЛЮ: `if`. Слово встречается в четырёх модулях, но всегда
 * готовым оборотом со словариком — `if you can`, `if you prefer`, `if it is
 * windy`. Условия ученику не объясняли ни разу.
 *
 * И РАЗЛИЧИЕ `IF` С `WHEN` — НАСТОЯЩИЙ ПРЕДМЕТ МОДУЛЯ. Модуль 11 дал срок:
 * «позвоню, когда приеду» — приеду обязательно. Здесь условие: «позвоню, если
 * приеду» — может, и не приеду. Форма одна, смысл разный. Внутри ступени
 * ссылка на модуль 11 законна и нужна, и урок 3 на ней стоит.
 *
 * РАСХОЖДЕНИЕ ИСТОЧНИКОВ, ТРЕТЬЕ ПОДРЯД.
 *
 * English Grammar Profile ставит первое условное предложение — `if` +
 * настоящее + `will` — на **B1**: «FORM/USE: PRESENT SIMPLE 'IF' CLAUSE +
 * 'WILL', FUTURE, LIKELY OUTCOME (FIRST CONDITIONAL)». На A2 у `if` три графы,
 * и `will` в них не названо: «FORM: 'IF' + PRESENT SIMPLE», «FORM/USE: PRESENT
 * SIMPLE 'IF' CLAUSE, REAL CONDITIONS» (там главная половина — настоящее
 * время, `can` или повелительное) и «FORM: PRESENT SIMPLE 'IF' CLAUSE +
 * IMPERATIVE».
 *
 * А руководство A2 Key даёт первое условное прямо и примером. С. 52, перечень
 * Clause types: «Subordinate clause following **if**, when, where, because:
 * **I'll leave if you do that again.** He'll come when you call.»
 *
 * РЕШЕНО ПО МЕРКЕ СТУПЕНИ, той же, что у `could` в модуле 27: конструкция
 * названа в Language specifications экзамена — значит входит в ступень.
 * Подкрепление сильнее обычного: руководство не просто называет союз, а даёт
 * готовый пример нужного вида.
 *
 * ОСТОРОЖНО С ГРАФОЙ A2 «FORM: 'IF' + PRESENT SIMPLE»: один из её примеров сам
 * содержит `will` — «if you want to pass it **you will have to** study very
 * hard». Это не доказательство уровня, но и не пустяк: цитата читается вместе
 * с примером, и пример здесь на стороне руководства.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ВСЁ ЭТО B1: второе условное (`if` + прошедшее +
 * `would`), третье условное, `unless`, `if I were you`, `if so` и `if not`,
 * `if` + настоящее длительное. Шесть отдельных граф, проверены по одной.
 *
 * ОБОРОТ `if you want` МОДУЛЬ НЕ БЕРЁТ, ПОТОМУ ЧТО ОН В КУРСЕ ЕСТЬ. Это графа
 * A2 «USE: 'IF' CLAUSE + IMPERATIVE, HEDGING» — смягчение просьбы, — и на ней
 * стоит модуль 28 («chess if you prefer»). Здесь она только называется.
 *
 * СЛОВАРЬ МОДУЛЯ — ПЯТНАДЦАТЬ КАРТОЧЕК, ВСЕ НОВЫЕ ДЛЯ СТУПЕНИ. Десять из них —
 * глаголы с послелогом и составные существительные из того запаса, который до
 * 28 августа был невидим: разбор словника не знал помет `(mv)` и `(phr v)`, а
 * подсчёт запаса выбрасывал всё, где есть пробел.
 *
 * ТРАНСКРИПЦИЯ МНОГОСЛОВНЫХ ЗАПИСЕЙ ВЗЯТА ПО СЛОВАРНОЙ НОРМЕ: `ipa-en-uk` их
 * не знает вовсе. Ударение у глагола с послелогом стоит на послелоге — `/weɪk
 * ˈʌp/`, `/tɜːn ˈɒf/`; у составного существительного на первом слове —
 * `/ˈkɑː pɑːk/`, `/əˈlɑːm klɒk/`. Тот же ряд, что `record` в модуле 27;
 * владельцу стоит на него взглянуть.
 */
const module: Module = {
  slug: "esli",
  title: "Если",

  outcomes: [
    "ставить условие с обещанием: If you come, I'll show you the city",
    "ставить условие с просьбой и с can: If you find it, call me",
    "различать условие и срок: if it rains — when it rains",
    "находить в письме, что случится при каком условии",
    "слышать в разговоре, при каком условии человек согласен",
    "проверять записку с условием: названо само условие, что будет и что делать иначе",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1–3. CLAUSES, conditional. «FORM: 'IF' + PRESENT SIMPLE», A2 — " +
        "«Can form conditional subordinate clause with 'if' + present simple», " +
        "примеры «If you buy a gift for me, please buy a book», «If you agree, " +
        "we can go shopping after the film». " +
        "«FORM/USE: PRESENT SIMPLE 'IF' CLAUSE, REAL CONDITIONS», A2 — «Can " +
        "use 'if' + present simple with present simple, 'can' or imperative in " +
        "the main clause to refer to things that are true now or very likely " +
        "to happen», примеры «If I have spare time I always read a book», «If " +
        "you need to contact me, here is my number». " +
        "«FORM: PRESENT SIMPLE 'IF' CLAUSE + IMPERATIVE», A2 — «Can use 'if' + " +
        "present simple, with an imperative in the main clause», примеры «If " +
        "you find it, call me», «If you want to come, just tell me». " +
        "ПЕРВОЕ УСЛОВНОЕ У ЭТОГО ИСТОЧНИКА — B1: «FORM/USE: PRESENT SIMPLE " +
        "'IF' CLAUSE + 'WILL', FUTURE, LIKELY OUTCOME (FIRST CONDITIONAL)». " +
        "Модуль его всё же берёт, и основание — руководство A2 Key, см. " +
        "следующую опору. " +
        "ОСТОРОЖНО С ПРИМЕРОМ ГРАФЫ A2 «FORM: 'IF' + PRESENT SIMPLE»: он сам " +
        "содержит `will` — «if you want to pass it you will have to study very " +
        "hard». Уровня это не доказывает, но пример на стороне руководства. " +
        "ЧЕГО НЕТ, И ВСЁ ЭТО B1: второе условное («FORM/USE: 'IF' + PAST " +
        "SIMPLE + 'WOULD'»); третье условное («'IF' + PAST PERFECT + 'WOULD " +
        "HAVE'»); `unless` («FORM/USE: 'UNLESS', EXCEPTIONS»); `if I were you`; " +
        "`if so` и `if not` («ELLIPTED 'IF SO'», «ELLIPTED 'IF NOT'»); `if` + " +
        "настоящее длительное («PRESENT CONTINUOUS 'IF' CLAUSE»). " +
        "СМЯГЧЕНИЕ ПРОСЬБЫ (`if you want`, `if you like`, `if you prefer`) — " +
        "A2, «USE: 'IF' CLAUSE + IMPERATIVE, HEDGING». Модуль его не берёт: на " +
        "этой графе уже стоит модуль 28 «Вежливо»",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "ОСНОВАНИЕ ДЛЯ ПЕРВОГО УСЛОВНОГО. с. 52, Language specifications, " +
        "перечень Clause types: «Subordinate clause following if, when, where, " +
        "because: I'll leave if you do that again. He'll come when you call.» " +
        "Это ровно `will` в главной половине и настоящее время после `if`. Тот " +
        "же перечень дал модулю 11 связку с `when`. " +
        "УРОК 5, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем правила проката». с. 54, шкала «Overall reading " +
        "comprehension», графа A2: «Can understand short, simple texts on " +
        "familiar matters of a concrete type which consist of high frequency " +
        "everyday or job-related language». " +
        "УРОК ПИСЬМА «Пишем записку с условием». с. 83, шкала " +
        "«Correspondence», графа A2: «Can compose short, simple notes, e-mails " +
        "and text messages (e.g. to send or reply to an invitation, to confirm " +
        "or change an arrangement)» — записка о том, что делать при перемене " +
        "погоды, и есть «change an arrangement». " +
        "ОПОРЫ ЧТЕНИЯ И ПИСЬМА РАЗВЕДЕНЫ НАРОЧНО — так подсказал методист при " +
        "разборе модуля 23",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Пятнадцать карточек модуля взяты из словника ступени, и все " +
        "пятнадцать новые для ступени. " +
        "ДЕСЯТЬ ИЗ НИХ — ГЛАГОЛЫ С ПОСЛЕЛОГОМ И СОСТАВНЫЕ СУЩЕСТВИТЕЛЬНЫЕ: " +
        "`wake up (phr v)`, `break down (phr v)`, `turn off (phr v)`, `turn on " +
        "(phr v)`, `look for (phr v)`, `find out (phr v)`, `get off (phr v)`, " +
        "`get on (phr v)`, `alarm clock (n)`, `car park (n)`. Ещё три " +
        "многословных: `credit card (n)`, `at all (adv)`, `because of (prep)`, " +
        "`by post (prep phr)`. До 28 августа весь этот пласт был для курса " +
        "невидим: разбор словника не знал помет `(mv)` и `(phr v)`, а подсчёт " +
        "запаса выбрасывал всё, где есть пробел. " +
        "ЧТО ГОВОРИТ OXFORD: `underground n. A2` — единственное слово модуля, " +
        "которое там нашлось. Остальные четырнадцать не нашлись ни в " +
        "`oxford-3000`, ни в `oxford-5000` — это не значит, что их там нет: " +
        "многословные записи оба списка ведут иначе. Проверено по обоим " +
        "спискам построчно. " +
        "`underground` ВЗЯТО В БРИТАНСКОМ ЗНАЧЕНИИ — метро; словник даёт его в " +
        "тематическом перечне транспорта рядом с `bus stop` и `car park`",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "esli-pridyosh",
      title: "Если придёшь: If you come, I'll show you the city",
      estimatedMinutes: 15,
      outcome: "ставить условие с обещанием: If you come, I'll show you the city",

      vozvrat: [{ iz: "vezhlivo", zadanie: "z1-dopisat-could-v-prosbu" }],

      blocks: [
        {
          id: "obeshchanie-pri-uslovii",
          kind: "explain",
          text: [
            "Данияр зовёт друга в Алматы, но тот ещё не решил.",
            "Данияр обещает не просто так, а при условии: если приедешь.",
            "Строка распадается на две половины, и в каждой своё время.",
          ],
        },
        {
          id: "dve-poloviny-so-slovom-if",
          kind: "table",
          caption: "Две половины строки",
          zvuchat: [
            "If you come",
            "I'll show you the city",
            "If the bus breaks down",
            "we'll take the underground",
            "If I wake up early",
            "I'll call you",
          ],
          head: ["Половина с условием", "Главная половина"],
          rows: [
            ["If you come", "I'll show you the city"],
            ["If the bus breaks down", "we'll take the underground"],
            ["If I wake up early", "I'll call you"],
          ],
        },
        {
          id: "kak-ustroeno-uslovie",
          kind: "explain",
          text: [
            "В главной половине стоит will — обещание о будущем.",
            "А в половине с условием его не ставят: там глагол настоящего времени.",
            "Окончание в этой половине живёт по правилу лица: I wake up, но the bus breaks down.",
            "Половины можно поменять местами: I'll show you the city if you come.",
            "Когда условие стоит впереди, между половинами ставят запятую.",
          ],
        },
        {
          id: "ne-will-v-polovine-s-if",
          kind: "note",
          tone: "mistake",
          text:
            "«If you will come, I'll show you the city» — так сказать нельзя." +
            "\n\nВ половине с условием будущего не ставят: If you come.",
        },
        {
          id: "razgovor-o-priezde",
          kind: "example",
          caption: "Разговор о приезде",
          razgovor: true,
          zvuchat: [
            "If you come in May, I'll show you the city.",
            "And if my flight is late?",
            "Then I'll meet you at the airport. If the bus breaks down, we'll take the underground.",
          ],
          text:
            "If you come in May, I'll show you the city.\nAnd if my flight is late?\nThen I'll meet you at the airport. If the bus breaks down, we'll take the underground.",
          explain:
            "В обеих строках с will главная половина обещает, а половина с " +
            "условием стоит в настоящем времени. Запятая стоит там, где условие " +
            "идёт впереди.",
        },
        {
          id: "slovar-priezda",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "wake up", translation: "просыпаться", example: "If I wake up early, I'll call you.", hint: "/weɪk ˈʌp/" },
            { term: "break down", translation: "ломаться, выходить из строя", example: "If the bus breaks down, we'll take the underground.", hint: "/breɪk ˈdaʊn/" },
            { term: "underground", translation: "метро", example: "We'll take the underground.", hint: "/ˈʌndəgraʊnd/" },
            { term: "alarm clock", translation: "будильник", example: "If the alarm clock rings, I'll wake up.", hint: "/əˈlɑːm klɒk/" },
            { term: "car park", translation: "автостоянка", example: "If the car park is full, we'll leave the car here.", hint: "/ˈkɑː pɑːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-nastoyashchee-posle-if",
          kind: "gap",
          prompt: "В половине с условием стоит настоящее время. Допиши глагол.",
          before: "If you ",
          after: " in May, I'll show you the city.",
          answer: "come",
          hint: "Слово will сюда не ставят, и окончания у глагола нет.",
          why:
            "If you come in May, I'll show you the city. Запись will come в " +
            "этой половине не годится.",
        },
        {
          id: "z2-vybrat-vernoe-uslovie",
          kind: "choice",
          prompt: "В какой записи условие построено верно?",
          options: [
            { text: "If the bus will break down, we'll take the underground." },
            { text: "If the bus breaks down, we'll take the underground.", correct: true },
            { text: "If the bus break down, we will take the underground." },
          ],
          hint: "Проверь обе половины: где стоит will и какое окончание у глагола.",
          why:
            "If the bus breaks down, we'll take the underground. В первой " +
            "записи will попало в половину с условием, а во второй у глагола " +
            "пропало окончание.",
        },
        {
          id: "z3-otmetit-glavnye-poloviny",
          kind: "hottext",
          prompt: "Отметь главные половины — те, где дано обещание.",
          parts: [
            { text: "I'll call you", selectable: true, correct: true },
            { text: " · " },
            { text: "if I wake up early", selectable: true },
            { text: " · " },
            { text: "we'll take the underground", selectable: true, correct: true },
            { text: " · " },
            { text: "if the car park is full", selectable: true },
          ],
          hint: "Обещание держится на will, а условие начинается с if.",
          why:
            "Первая и третья. Вторая и четвёртая начинаются с if — это условия.",
        },
        {
          id: "z4-sobrat-uslovie",
          kind: "order",
          prompt: "Собери строку: если будильник зазвонит, я проснусь.",
          items: ["I'll wake up.", "If the alarm clock", "rings,"],
          answer: [1, 2, 0],
          hint: "Условие стоит впереди, и после него запятая.",
          why:
            "If the alarm clock rings, I'll wake up. Запятая делит половины, " +
            "когда условие идёт первым.",
        },
        {
          id: "z5-postavit-uslovie",
          kind: "short",
          prompt:
            "Скажи: если стоянка будет полна, мы оставим машину здесь. Начни с If.",
          answer: "If the car park is full, we'll leave the car here.",
          accept: [
            "If the car park is full, we'll leave the car here",
            "If the car park is full, we will leave the car here.",
            "If the car park is full we'll leave the car here.",
          ],
          hint: "В половине с условием стоит настоящее время, даже если речь о завтрашнем дне.",
          why:
            "If the car park is full, we'll leave the car here. Годится и " +
            "полная запись we will leave.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "esli-naydyosh",
      title: "Если найдёшь: If you find it, call me",
      estimatedMinutes: 15,
      outcome: "ставить условие с просьбой и с can: If you find it, call me",

      blocks: [
        {
          id: "uslovie-ne-tolko-s-obeshchaniem",
          kind: "explain",
          text: [
            "Айгуль потеряла в поезде сумку и оставила проводнику записку.",
            "В главной половине у неё не обещание, а просьба: позвони.",
            "Главная половина бывает четырёх видов, и половина с условием при этом не меняется.",
          ],
        },
        {
          id: "tri-vida-glavnoy-poloviny",
          kind: "table",
          caption: "Четыре вида главной половины",
          zvuchat: [
            "If you find it, call me.",
            "If you find it, you can call me.",
            "If you find it, I'll come at once.",
            "If you turn off the light, the room is dark.",
          ],
          head: ["Главная половина", "Пример строки"],
          rows: [
            ["просьба", "If you find it, call me."],
            ["можно так", "If you find it, you can call me."],
            ["обещание", "If you find it, I'll come at once."],
            ["всегда так", "If you turn off the light, the room is dark."],
          ],
        },
        {
          id: "kak-ustroeny-tri-vida",
          kind: "explain",
          text: [
            "Просьба начинается прямо с глагола: call me, look for it, turn on the light.",
            "Слово can говорит, что так можно: you can call me.",
            "Обещание держится на will, и это уже знакомый вид.",
            "Четвёртый вид говорит о том, что бывает всегда: там оба глагола в настоящем времени.",
            "Половина с условием во всех четырёх видах одна и та же.",
          ],
        },
        {
          id: "ne-if-you-will-find",
          kind: "note",
          tone: "mistake",
          text:
            "«If you will find it, call me» — так не просят.\n\nПосле if стоит " +
            "настоящее время: If you find it.",
        },
        {
          id: "zapiska-provodniku",
          kind: "example",
          caption: "Записка проводнику",
          zvuchat: [
            "If you find a black bag, call me, please.",
            "If you look for it in the evening, you can turn on the light.",
            "If you find out something, I'll come at once.",
          ],
          text:
            "If you find a black bag, call me, please.\nIf you look for it in the evening, you can turn on the light.\nIf you find out something, I'll come at once.",
          explain:
            "Три строки, и половина с условием у всех одинаковая. Различаются " +
            "главные половины: просьба, слово can и обещание с will.",
        },
        {
          id: "slovar-propazhi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "look for", translation: "искать", example: "If you look for it in the evening, you can turn on the light.", hint: "/lʊk ˈfɔː/" },
            { term: "find out", translation: "выяснить, узнать", example: "If you find out something, I'll come at once.", hint: "/faɪnd ˈaʊt/" },
            { term: "turn on", translation: "включить", example: "You can turn on the light.", hint: "/tɜːn ˈɒn/" },
            { term: "turn off", translation: "выключить", example: "If you turn off the light, the room is dark.", hint: "/tɜːn ˈɒf/" },
            { term: "credit card", translation: "кредитная карта", example: "If you find my credit card, call me at once.", hint: "/ˈkredɪt kɑːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-prosbu",
          kind: "gap",
          prompt: "В главной половине стоит просьба. Допиши глагол.",
          before: "If you find a black bag, ",
          after: " me, please.",
          answer: "call",
          hint: "Просьба начинается прямо с глагола, без will и без you.",
          why:
            "If you find a black bag, call me, please. Запись you will call " +
            "сделала бы из просьбы обещание.",
        },
        {
          id: "z2-otlichit-prosbu-ot-obeshchaniya",
          kind: "choice",
          prompt:
            "Строки If you find it, call me и If you find it, I'll come говорят о разном. Чем?",
          options: [
            { text: "В первой просят, во второй обещают.", correct: true },
            { text: "Первая о сегодняшнем дне, вторая о завтрашнем." },
            { text: "В первой условие другое." },
          ],
          hint: "Смотри только на главные половины: условие у них одинаковое.",
          why:
            "В первой просьба, во второй обещание. Условие у обеих одно и то " +
            "же: if you find it.",
        },
        {
          id: "z3-otmetit-uslovie-s-can",
          kind: "hottext",
          prompt: "Отметь строки, где главная половина говорит «так можно».",
          parts: [
            { text: "If you look for it, you can turn on the light.", selectable: true, correct: true },
            { text: " · " },
            { text: "If you find it, call me.", selectable: true },
            { text: " · " },
            { text: "If you have a credit card, you can pay here.", selectable: true, correct: true },
            { text: " · " },
            { text: "If you find out something, I'll come.", selectable: true },
          ],
          hint: "Ищи слово can в главной половине.",
          why:
            "Первая и третья. Во второй просьба, в четвёртой обещание с will.",
        },
        {
          id: "z4-sobrat-uslovie-s-prosboy",
          kind: "order",
          prompt: "Собери строку: если найдёшь мою карту, позвони мне сразу.",
          items: ["at once.", "If you find my credit card,", "call me"],
          answer: [1, 2, 0],
          hint: "Условие стоит впереди, и после него запятая.",
          why:
            "If you find my credit card, call me at once. Просьба начинается " +
            "прямо с глагола.",
        },
        {
          id: "z5-napisat-uslovie-s-can",
          kind: "short",
          prompt:
            "Скажи: если ищешь её вечером, можно включить свет. Начни с If.",
          answer: "If you look for it in the evening, you can turn on the light.",
          accept: [
            "If you look for it in the evening, you can turn on the light",
            "If you look for it in the evening you can turn on the light.",
          ],
          hint: "Слово can стоит в главной половине, перед глаголом.",
          why:
            "If you look for it in the evening, you can turn on the light. " +
            "Слово can и говорит, что так можно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "esli-ili-kogda",
      title: "Если или когда: if it rains — when it rains",
      estimatedMinutes: 14,
      outcome: "различать условие и срок: if it rains — when it rains",

      blocks: [
        {
          id: "uslovie-i-srok",
          kind: "explain",
          text: [
            "Данияр и Айгуль собираются в горы и спорят о погоде.",
            "Данияр говорит «когда пойдёт дождь», Айгуль — «если пойдёт».",
            "Слово при этом меняется одно, а смысл — весь.",
          ],
        },
        {
          id: "if-protiv-when",
          kind: "table",
          caption: "Условие и срок",
          zvuchat: [
            "If it rains, we'll stay at home.",
            "When it rains, we'll stay at home.",
            "If the shop closes, I'll come back.",
            "When the shop closes, I'll come back.",
          ],
          head: ["С условием: может и не быть", "Со сроком: будет наверняка"],
          rows: [
            ["If it rains, we'll stay at home.", "When it rains, we'll stay at home."],
            ["If the shop closes, I'll come back.", "When the shop closes, I'll come back."],
          ],
        },
        {
          id: "chem-otlichayutsya",
          kind: "explain",
          text: [
            "Слово if говорит, что этого может и не случиться.",
            "Слово when говорит, что это случится, и называет только срок.",
            "Устроены обе строки одинаково: настоящее время после союза, will в главной половине.",
            "Связку со словом when разбирал модуль «По расписанию» — там она называла время.",
            "Выбирают по смыслу: дождь может не пойти, а магазин закроется в любом случае.",
          ],
        },
        {
          id: "ne-when-o-somnitelnom",
          kind: "note",
          tone: "mistake",
          text:
            "«When my flight is late, I'll call you» — так о самолёте не " +
            "говорят.\n\nОпоздание может и не случиться, а слово when обещает " +
            "его наверняка.",
        },
        {
          id: "spor-o-pogode",
          kind: "example",
          caption: "Спор о погоде",
          razgovor: true,
          zvuchat: [
            "When it rains in the mountains, we'll come back at once.",
            "If it rains. It doesn't rain there every day!",
            "Fine. If it rains, we'll get on the bus and go home.",
            "And if we come back early because of the rain, I'll cook something.",
          ],
          text:
            "When it rains in the mountains, we'll come back at once.\nIf it rains. It doesn't rain there every day!\nFine. If it rains, we'll get on the bus and go home.\nAnd if we come back early because of the rain, I'll cook something.",
          explain:
            "Первая строка со словом when обещает дождь наверняка. Айгуль " +
            "поправляет одним словом — if, — и дальше уже все строки с ним: " +
            "дождя может и не быть. Оборот because of называет причину.",
        },
        {
          id: "slovar-pogody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "get on", translation: "сесть в транспорт", example: "We'll get on the bus and go home.", hint: "/get ˈɒn/" },
            { term: "get off", translation: "выйти из транспорта", example: "If you get off at the station, call me.", hint: "/get ˈɒf/" },
            { term: "at all", translation: "вообще, совсем", example: "If it doesn't rain at all, we'll walk to the lake.", hint: "/ət ˈɔːl/" },
            { term: "because of", translation: "из-за", example: "If we stay at home because of the rain, I'll cook something.", hint: "/bɪˈkɒz əv/" },
            { term: "by post", translation: "почтой", example: "If you can't come, send it by post.", hint: "/baɪ ˈpəʊst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-if-ili-when",
          kind: "choice",
          prompt: "Самолёт может опоздать, а может и нет. Какая запись верна?",
          options: [
            { text: "When my flight is late, I'll call you." },
            { text: "If my flight is late, I'll call you.", correct: true },
            { text: "If my flight will be late, I'll call you." },
          ],
          hint: "Опоздание — дело неверное, а не назначенное.",
          why:
            "If my flight is late, I'll call you. Слово when обещало бы " +
            "опоздание наверняка, а в третьей записи will попало в половину с " +
            "условием.",
        },
        {
          id: "z2-otmetit-uslovie",
          kind: "hottext",
          prompt: "Отметь строки, где сказано об условии, а не о сроке.",
          parts: [
            { text: "If it rains, we'll stay at home.", selectable: true, correct: true },
            { text: " · " },
            { text: "When the shop closes, I'll come back.", selectable: true },
            { text: " · " },
            { text: "If the bus breaks down, we'll get on another one.", selectable: true, correct: true },
            { text: " · " },
            { text: "When I wake up, I'll call you.", selectable: true },
          ],
          hint: "Ищи слово if: оно и говорит, что этого может не быть.",
          why:
            "Первая и третья. Во второй и четвёртой стоит when — там названо " +
            "время, а не условие.",
        },
        {
          id: "z3-dopisat-when",
          kind: "gap",
          prompt: "Магазин закроется в любом случае. Допиши слово.",
          before: "",
          after: " the shop closes, I'll come back.",
          answer: "When",
          hint: "Речь о сроке, а не о том, что может не случиться.",
          why:
            "When the shop closes, I'll come back. Слово if сказало бы, что " +
            "магазин может и не закрыться.",
        },
        {
          id: "z4-sobrat-stroku-s-if",
          kind: "order",
          prompt: "Собери строку: если дождя не будет совсем, мы дойдём до озера пешком.",
          items: ["to the lake.", "If it doesn't rain at all,", "we'll walk"],
          answer: [1, 2, 0],
          hint: "Условие стоит впереди, и после него запятая.",
          why:
            "If it doesn't rain at all, we'll walk to the lake. Оборот at all " +
            "усиливает отрицание.",
        },
        {
          id: "z5-vybrat-po-smyslu",
          kind: "short",
          prompt:
            "Приехать может и не выйти. Скажи: если не смогу приехать, я отправлю это почтой. Начни с If.",
          answer: "If I can't come, I'll send it by post.",
          accept: [
            "If I can't come, I'll send it by post",
            "If I can't come I'll send it by post.",
          ],
          hint: "Неуверенность называет слово if, а не when.",
          why:
            "If I can't come, I'll send it by post. Слово when обещало бы, что " +
            "приехать не выйдет наверняка.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pravila-prokata",
      title: "Читаем правила проката",
      estimatedMinutes: 13,
      outcome: "находить в письме, что случится при каком условии",

      blocks: [
        {
          id: "zachem-chitat-pravila",
          kind: "explain",
          text: [
            "Айгуль берёт напрокат велосипед и читает памятку.",
            "В такой памятке каждая строка говорит: если так — будет вот что.",
            "Ниже памятка, и вопросы будут о ней.",
          ],
        },
        {
          id: "pamyatka-prokata",
          kind: "text",
          title: "Before you take the bike",
          genre: "notice",
          body: [
            "If you take the bike for a day, it costs 2000 tenge.",
            "If you pay by credit card, you can take it at once.",
            "If the bike breaks down, call us and we'll bring another one.",
            "If you leave the bike in the car park, turn off the light on it.",
            "If you come back after eight, you can get off at the bus stop and leave the bike there.",
          ],
          glossary: [
            { term: "for a day", translation: "на день" },
            { term: "it costs", translation: "это стоит" },
            { term: "another one", translation: "другой" },
          ],
        },
        {
          id: "kak-chitat-pamyatku",
          kind: "note",
          tone: "info",
          text:
            "Каждая строка памятки состоит из половины с условием и главной " +
            "половины.\n\nГлавная половина бывает просьбой, обещанием, словом " +
            "can или тем, что бывает всегда.",
        },

        // ---- задания ----
        {
          id: "z1-skolko-stoit-den",
          about: "pamyatka-prokata",
          kind: "short",
          prompt: "Сколько стоит велосипед на день? Ответь числом.",
          answer: "2000",
          accept: ["2000 tenge", "2000 тенге"],
          hint: "Об этом сказано в первой строке.",
          why: "If you take the bike for a day, it costs 2000 tenge.",
        },
        {
          id: "z2-chto-budet-pri-polomke",
          about: "pamyatka-prokata",
          kind: "choice",
          prompt: "Что будет, если велосипед сломается?",
          options: [
            { text: "Деньги вернут." },
            { text: "Привезут другой.", correct: true },
            { text: "Придётся чинить самому." },
          ],
          hint: "Про поломку сказано в третьей строке.",
          why:
            "Привезут другой: call us and we'll bring another one.",
        },
        {
          id: "z3-chto-prosyat-sdelat-na-stoyanke",
          about: "pamyatka-prokata",
          kind: "short",
          prompt:
            "Что просят сделать, если велосипед оставляют на стоянке? Ответь двумя словами по-английски.",
          answer: "turn off",
          accept: ["Turn off", "turn off the light"],
          hint: "Главная половина четвёртой строки — просьба.",
          why: "If you leave the bike in the car park, turn off the light on it.",
        },
        {
          id: "z4-otmetit-verno-o-pamyatke",
          about: "pamyatka-prokata",
          kind: "hottext",
          prompt: "Отметь то, что верно по памятке.",
          parts: [
            { text: "с картой велосипед дают сразу", selectable: true, correct: true },
            { text: " · " },
            { text: "после восьми велосипед можно оставить у остановки", selectable: true, correct: true },
            { text: " · " },
            { text: "на стоянке велосипед оставлять нельзя", selectable: true },
            { text: " · " },
            { text: "при поломке деньги возвращают", selectable: true },
          ],
          hint: "Про стоянку сказано в четвёртой строке, про поломку — в третьей.",
          why:
            "Верно первое и второе. Оставлять на стоянке можно, а при поломке " +
            "привозят другой велосипед.",
        },
        {
          id: "z5-kakaya-polovina-glavnaya",
          about: "pamyatka-prokata",
          kind: "choice",
          prompt:
            "Строка: If you pay by credit card, you can take it at once. Что стоит в главной половине?",
          options: [
            { text: "Просьба." },
            { text: "Слово can: так можно.", correct: true },
            { text: "Обещание с will." },
          ],
          hint: "Смотри вторую половину строки, после запятой.",
          why:
            "Слово can. Оно и говорит, что при таком условии велосипед дают " +
            "сразу.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-uslovie",
      title: "Слушаем условие",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, при каком условии человек согласен",

      blocks: [
        {
          id: "zachem-slushat-uslovie",
          kind: "explain",
          text: [
            "Данияр зовёт Айгуль в горы, и она соглашается не просто так.",
            "Слушать надо, при каком условии она поедет и что будет иначе.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-ob-uslovii",
          kind: "audio",
          caption: "Разговор о поездке",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Would you like to go to the mountains on Sunday? — If it doesn't " +
            "rain, I'll come. — And if it rains? — Then I'll stay at home. Call " +
            "me when you wake up.",
        },
        {
          id: "chto-slushat-v-uslovii",
          kind: "note",
          tone: "info",
          text:
            "Условие звучит после слова if, а обещание — после will." +
            "\n\nСлово when называет срок, а не условие.",
        },

        // ---- задания ----
        {
          id: "z1-v-kakoy-den-zovut",
          about: "zapis-ob-uslovii",
          kind: "short",
          prompt: "Послушай. На какой день зовут? Ответь одним словом по-английски.",
          answer: "Sunday",
          accept: ["sunday", "on Sunday"],
          hint: "День назван в конце первой реплики.",
          why: "Would you like to go to the mountains on Sunday?",
        },
        {
          id: "z2-pri-kakom-uslovii-soglasna",
          about: "zapis-ob-uslovii",
          kind: "choice",
          prompt: "Послушай. При каком условии Айгуль поедет?",
          options: [
            { text: "Если Данияр заедет за ней." },
            { text: "Если не будет дождя.", correct: true },
            { text: "Если поедут утром." },
          ],
          hint: "Условие звучит во второй реплике, сразу после if.",
          why: "If it doesn't rain, I'll come.",
        },
        {
          id: "z3-chto-budet-pri-dozhde",
          about: "zapis-ob-uslovii",
          kind: "choice",
          prompt: "Послушай. Что будет, если дождь пойдёт?",
          options: [
            { text: "Айгуль останется дома.", correct: true },
            { text: "Поедут на автобусе." },
            { text: "Перенесут на другой день." },
          ],
          hint: "Об этом сказано сразу после вопроса про дождь.",
          why: "Then I'll stay at home.",
        },
        {
          id: "z4-chto-prosyat-sdelat",
          about: "zapis-ob-uslovii",
          kind: "short",
          prompt:
            "Послушай. Когда просят позвонить? Ответь двумя словами по-английски.",
          answer: "wake up",
          accept: ["Wake up", "when you wake up"],
          hint: "Просьба стоит в самом конце записи.",
          why: "Call me when you wake up.",
        },
        {
          id: "z5-pochemu-when-a-ne-if",
          about: "zapis-ob-uslovii",
          kind: "choice",
          prompt:
            "В конце звучит Call me when you wake up. Отчего здесь when, а не if?",
          options: [
            { text: "Проснуться человек в любом случае." , correct: true },
            { text: "После call всегда ставят when." },
            { text: "Слово if в просьбах не бывает." },
          ],
          hint: "Спроси: это может не случиться или случится наверняка?",
          why:
            "Проснуться человек в любом случае, и названо только время. Слово " +
            "if говорило бы, что он может и не проснуться.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-zapisku-s-usloviem",
      title: "Пишем записку с условием",
      estimatedMinutes: 15,
      outcome:
        "проверять записку с условием: названо само условие, что будет и что делать иначе",

      blocks: [
        {
          id: "zachem-proveryat-zapisku",
          kind: "explain",
          text: [
            "Ученик написал другу: «Maybe we'll meet tomorrow.»",
            "Друг прочтёт это и не будет знать, идти ему завтра или нет.",
            "В записке с условием главное — сказать, что делать в каждом случае.",
            "Проверить свою записку можно по трём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-zapiske",
          kind: "table",
          caption: "Что должно быть в записке с условием",
          zvuchat: [
            "We'll meet at the bus stop at four.",
            "If it rains, we'll go to the cafe.",
            "If I can't come, I'll call you at three.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["главный план", "We'll meet at the bus stop at four."],
            ["что будет при перемене", "If it rains, we'll go to the cafe."],
            ["что делать, если план сорвётся", "If I can't come, I'll call you at three."],
          ],
        },
        {
          id: "chem-derzhitsya-zapiska",
          kind: "explain",
          text: [
            "Первая строка называет главный план: место и время.",
            "Вторая говорит, что будет при перемене погоды или обстоятельств.",
            "Третья называет запасной ход — что делать, если план сорвётся.",
            "Во второй и третьей строке половина с условием стоит впереди, и после неё запятая.",
            "Слово maybe всего этого не заменяет: оно не отвечает ни на один вопрос.",
          ],
        },
        {
          id: "obrazec-zapiski",
          kind: "example",
          caption: "Записка Данияра",
          zvuchat: [
            "We'll meet at the car park at five.",
            "If the bus breaks down, I'll take a taxi.",
            "If you can't come, send me a message.",
          ],
          text:
            "We'll meet at the car park at five.\nIf the bus breaks down, I'll take a taxi.\nIf you can't come, send me a message.",
          explain:
            "Первая строка называет план, вторая — что будет, если помешает " +
            "случай, третья — запасной ход. В главной половине второй строки " +
            "обещание, а третьей — просьба.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-zapiske",
          kind: "choice",
          prompt:
            "Записка целиком: Maybe we'll meet tomorrow. Чего в ней не хватает?",
          options: [
            { text: "Подписи." },
            { text: "Места, времени и того, что делать при перемене.", correct: true },
            { text: "Обратного адреса." },
          ],
          hint: "Спроси: сможет ли друг завтра куда-нибудь прийти?",
          why:
            "Места, времени и запасного хода. Слово maybe не отвечает ни на " +
            "один из этих вопросов.",
        },
        {
          id: "z2-dopisat-zapyatuyu",
          kind: "choice",
          prompt: "В какой записи запятая стоит верно?",
          options: [
            { text: "If it rains we'll go to the cafe." },
            { text: "If it rains, we'll go to the cafe.", correct: true },
            { text: "If, it rains we'll go to the cafe." },
          ],
          hint: "Запятая делит две половины, когда условие идёт первым.",
          why:
            "If it rains, we'll go to the cafe. Запятая стоит там, где " +
            "кончается половина с условием.",
        },
        {
          id: "z3-otmetit-stroki-zapiski",
          kind: "hottext",
          prompt: "Отметь строки, из которых друг узнаёт, что делать.",
          parts: [
            { text: "We'll meet at the bus stop at four.", selectable: true, correct: true },
            { text: " · " },
            { text: "The weather is nice today.", selectable: true },
            { text: " · " },
            { text: "If it rains, we'll go to the cafe.", selectable: true, correct: true },
            { text: " · " },
            { text: "Maybe we'll meet tomorrow.", selectable: true },
          ],
          hint: "Нужное — это место, время и запасной ход.",
          why:
            "Первая и третья. Про погоду сегодня знать бесполезно, а maybe " +
            "ничего не назначает.",
        },
        {
          id: "z4-sobrat-zapasnoy-hod",
          kind: "order",
          prompt: "Собери запасной ход: если я не смогу прийти, я позвоню в три.",
          items: ["at three.", "If I can't come,", "I'll call you"],
          answer: [1, 2, 0],
          hint: "Условие стоит впереди, и после него запятая.",
          why:
            "If I can't come, I'll call you at three. Запасной ход и есть " +
            "строка с условием.",
        },
        {
          id: "z5-napisat-zapisku",
          kind: "essay",
          prompt:
            "Напиши другу записку тремя строками. Назови место и время встречи. Скажи, что будет, если пойдёт дождь. Скажи, что сделаешь, если не сможешь прийти.",
          minWords: 18,
          sample:
            "We'll meet in the city centre at six.\nIf it rains, we'll go to the museum.\nIf I can't come, I'll send a message.",
          checklist: [
            "названы место и время",
            "есть строка со словом if про дождь",
            "есть строка со словом if про запасной ход",
            "после половины с условием стоит запятая",
          ],
          hint:
            "Бери обороты, которые знаешь: We'll meet at…, If it rains…, If I can't come…",
          why:
            "Записка работает, когда друг знает и главный план, и что делать " +
            "при перемене.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, выбрать союз по смыслу случая.

      // ---- итог 1 ----
      {
        id: "q-ispravit-will-posle-if",
        kind: "short",
        outcome: "ставить условие с обещанием: If you come, I'll show you the city",
        prompt:
          "Ученик написал: If you will come in May, I'll show you the city. Запиши строку без ошибки.",
        answer: "If you come in May, I'll show you the city.",
        accept: [
          "If you come in May, I'll show you the city",
          "If you come in May, I will show you the city.",
        ],
        hint: "Одно слово стоит не в своей половине.",
        why:
          "If you come in May, I'll show you the city. Слово will живёт только " +
          "в главной половине.",
      },
      {
        id: "q-nazvat-oshibku-v-okonchanii",
        kind: "choice",
        outcome: "ставить условие с обещанием: If you come, I'll show you the city",
        prompt: "Запись If the bus break down, we'll take a taxi неверна. Отчего?",
        options: [
          { text: "Слово if нельзя ставить перед the bus." },
          { text: "У глагола в половине с условием пропало окончание.", correct: true },
          { text: "После taxi нужна запятая." },
        ],
        hint: "Спроси, кто ломается: я, ты или автобус.",
        why:
          "Окончание пропало: the bus breaks down. В этой половине глагол " +
          "живёт по правилу лица.",
      },

      // ---- итог 2 ----
      {
        id: "q-perepisat-obeshchanie-v-prosbu",
        kind: "short",
        outcome: "ставить условие с просьбой и с can: If you find it, call me",
        prompt:
          "Строку If you find it, I'll call you перепиши так, чтобы вместо обещания вышла просьба позвонить мне.",
        answer: "If you find it, call me.",
        accept: ["If you find it, call me", "If you find it, please call me."],
        hint: "Просьба начинается прямо с глагола.",
        why:
          "If you find it, call me. В просьбе нет ни will, ни того, к кому " +
          "обращаются.",
      },
      {
        id: "q-napisat-glavnuyu-polovinu-s-can",
        kind: "short",
        outcome: "ставить условие с просьбой и с can: If you find it, call me",
        prompt:
          "Скажи: если у тебя есть карта, платить можно прямо здесь. Начни с If и возьми слово can.",
        answer: "If you have a credit card, you can pay here.",
        accept: [
          "If you have a credit card, you can pay here",
          "If you have a credit card you can pay here.",
        ],
        hint: "Разрешение и просьба различаются одним словом.",
        why:
          "If you have a credit card, you can pay here. Запись pay here была " +
          "бы просьбой, а не разрешением.",
      },

      // ---- итог 3 ----
      {
        id: "q-vybrat-soyuz-po-smyslu",
        kind: "short",
        outcome: "различать условие и срок: if it rains — when it rains",
        prompt:
          "Автобус приходит по расписанию, опоздания не ждут. Допиши союз к строке: ___ the bus comes, we'll get on. Ответь одним словом по-английски.",
        answer: "When",
        accept: ["when"],
        hint: "Спроси: автобус точно придёт?",
        why:
          "When. Автобус придёт наверняка, названо только время; слово if " +
          "сказало бы, что он может и не прийти.",
      },
      {
        id: "q-nazvat-raznicu-if-when",
        kind: "choice",
        outcome: "различать условие и срок: if it rains — when it rains",
        prompt:
          "Строки If it rains, we'll stay at home и When it rains, we'll stay at home говорят о разном. Чем?",
        options: [
          { text: "В первой дождь под вопросом, во второй он будет.", correct: true },
          { text: "Первая о завтрашнем дне, вторая о сегодняшнем." },
          { text: "Во второй нет обещания." },
        ],
        hint: "Спроси у каждой строки: дождь точно будет?",
        why:
          "В первой дождь может и не пойти, во второй он назначен, и названо " +
          "только время.",
      },

      // ---- итог 4 ----
      {
        id: "q-najti-uslovie-v-pamyatke",
        kind: "choice",
        outcome: "находить в письме, что случится при каком условии",
        prompt:
          "В памятке строка: If you come back after eight, you can get off at the bus stop and leave the bike there. Что она разрешает?",
        options: [
          { text: "Возвращаться позже восьми." },
          { text: "Оставить велосипед у остановки после восьми.", correct: true },
          { text: "Не платить за поздний возврат." },
        ],
        hint: "Смотри главную половину — ту, где стоит can.",
        why:
          "Оставить велосипед у остановки. Слово can стоит именно при этом " +
          "действии.",
      },
      {
        id: "q-skolko-polovin-v-stroke",
        kind: "short",
        outcome: "находить в письме, что случится при каком условии",
        prompt:
          "В памятке строка: If the bike breaks down, call us. Какое слово начинает половину с условием? Ответь одним словом по-английски.",
        answer: "If",
        accept: ["if"],
        hint: "Это самое первое слово строки.",
        why: "If. С него и начинается половина с условием.",
      },

      // ---- итог 5 ----
      {
        id: "q-uslyshat-uslovie",
        kind: "short",
        outcome: "слышать в разговоре, при каком условии человек согласен",
        zvuk: "If the weather is fine, we'll walk to the lake.",
        prompt:
          "Послушай. Куда пойдут при хорошей погоде? Ответь одним словом по-английски.",
        answer: "lake",
        accept: ["Lake", "the lake"],
        hint: "Ответ звучит в самом конце записи.",
        why: "If the weather is fine, we'll walk to the lake.",
      },
      {
        id: "q-uslyshat-chto-budet-inache",
        kind: "choice",
        outcome: "слышать в разговоре, при каком условии человек согласен",
        zvuk:
          "If the shop is closed, I'll buy the bread tomorrow. — Fine, I'll wait.",
        prompt: "Послушай. При каком условии хлеб купят завтра?",
        options: [
          { text: "Если магазин закрыт.", correct: true },
          { text: "Если не будет денег." },
          { text: "Если пойдёт дождь." },
        ],
        hint: "Условие звучит сразу после слова if.",
        why: "If the shop is closed, I'll buy the bread tomorrow.",
      },

      // ---- итог 6 ----
      {
        id: "q-chego-ne-hvataet-chuzhoy-zapiske",
        kind: "choice",
        outcome:
          "проверять записку с условием: названо само условие, что будет и что делать иначе",
        prompt:
          "Записка: We'll meet at the bus stop at four. If it rains, we'll go to the cafe. Какой из трёх нужных строк здесь нет?",
        options: [
          { text: "Той, что называет место и время." },
          { text: "Той, что говорит, что делать при дожде." },
          { text: "Той, что говорит, что делать, если план сорвётся.", correct: true },
        ],
        hint: "Пройди по трём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что называет запасной ход. План есть, перемена погоды учтена — " +
          "а что делать, если человек не придёт, не сказано.",
      },
      {
        id: "q-dopisat-zapasnoy-hod",
        kind: "short",
        outcome:
          "проверять записку с условием: названо само условие, что будет и что делать иначе",
        prompt:
          "К записке допиши запасной ход: если автобус сломается, ты напишешь сообщение. Начни с If.",
        answer: "If the bus breaks down, I'll send a message.",
        accept: [
          "If the bus breaks down, I'll send a message",
          "If the bus breaks down, I will send a message.",
          "If the bus breaks down I'll send a message.",
        ],
        hint: "Сначала условие, потом обещание.",
        why:
          "If the bus breaks down, I'll send a message. После половины с " +
          "условием стоит запятая.",
      },
      {
        id: "q-zachem-v-zapiske-zapasnoy-hod",
        kind: "choice",
        outcome:
          "проверять записку с условием: названо само условие, что будет и что делать иначе",
        prompt: "Отчего в записке нужен запасной ход, а не только главный план?",
        options: [
          { text: "Так записка выходит длиннее." },
          { text: "Так принято заканчивать записку." },
          { text: "Иначе друг будет ждать и не узнает, что случилось.", correct: true },
        ],
        hint: "Представь друга, который стоит у остановки в четыре.",
        why:
          "Иначе друг будет ждать. Строка с условием и говорит ему, чего " +
          "ожидать, если план сорвётся.",
      },
    ],
  },
};

export default module;
