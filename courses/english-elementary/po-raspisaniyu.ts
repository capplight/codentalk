import type { Module } from "@/lib/content/types";

/**
 * Модуль 11 курса «Английский · Elementary»: по расписанию.
 *
 * Программа: docs/programma-english-elementary.md, модуль 11 — «называть время
 * отправления, начала, работы»; грамматика: Present Simple о будущем; `when` с
 * настоящим временем.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «РАСПИСАНИЕ».
 *
 * Так и только так модуль зовёт то, о чём учит говорить: расписание — то, что
 * назначено не тобой, а заведённым порядком: поезда, самолёты, магазины,
 * занятия. Слов «план» и «будущее время» в тексте для ученика нет ни разу.
 *
 * Слова «договорённость» и «намерение» здесь тоже не работают: ими зовут своё
 * то, чему учили модули 10 и 8.
 *
 * ЧЕГО МОДУЛЬ НЕ ДЕЛАЕТ. Он не сравнивает четыре записи о будущем и не требует
 * выбрать из них верную. Правила выбора у источника нет: он лишь по-разному
 * называет работу каждой. Ни одно задание не объявляет ошибкой другую запись.
 *
 * ТРИ ОШИБКИ ПЕРВОЙ РЕДАКЦИИ, найденные методистом. Записаны здесь, потому что
 * каждая — образец породы, на которой этот курс уже обжигался.
 *
 * 1. «ПОСЛЕ HOPE НЕ СТАВЯТ WILL» — ЭТО БЫЛА ВЫДУМКА. Графа источника (A2,
 *    «USE: 'HOPE'») даёт РАЗРЕШЕНИЕ поставить настоящее время, а не запрет на
 *    `will`. Примеры других граф того же файла показывают обратное: «I hope you
 *    will be there» (ADVERBS, A1, Pass), «I hope you will be fine very soon»
 *    (A1, Pass), «I hope it will not be boring!» (MODALITY will, A2, Pass). Три
 *    работы, все сданы, две из них A1. Первая редакция объявляла такие строки
 *    ошибкой в семи местах. Теперь урок 5 учит одному: после `I hope` идёт
 *    обычная строка настоящего времени, и окончание в ней живёт по общему
 *    правилу. Запрета нет нигде.
 *
 * 2. ОКОНЧАНИЕ `-S` БЫЛО ДАНО КАК ПРАВИЛО ЧИСЛА, а оно правило ЛИЦА. Первая
 *    редакция писала «когда речь об одной вещи, к глаголу прирастает -s» — по
 *    такому правилу выходит `I arrives` и `you likes`. Курс на прошлой ступени
 *    формулирует верно (`courses/english-starter/chto-ya-delayu.ts`: «после he,
 *    she, it»), и на этой ступени `-s` не объясняется больше нигде — модуль 11
 *    единственное место. Поэтому урок 1 даёт парадигму таблицей, по лицу в
 *    строке (CLAUDE.md, «Формы показываются таблицей»).
 *
 * 3. НИ ОДНА АНГЛИЙСКАЯ СТРОКА НЕ НЕСЛА ПРИЗНАКА БУДУЩЕГО. Без него `The train
 *    leaves at six` — это графа A1 «USE: HABITS AND GENERAL FACTS», то есть
 *    привычка, а не расписание на завтра. Сам пример графы A2 несёт контекст в
 *    скобках: «[Talking about a film] It begins on 8 o'clock in the evening».
 *    Теперь признак будущего — `tomorrow`, `on Monday`, `next week` — стоит в
 *    примерах и заданиях всех уроков правил.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, FUTURE present simple for future use, «USE:
 *    TIMETABLES AND PLANS» — «Can use the present simple to talk about
 *    timetabled events in the future», пример «[Talking about a film] It begins
 *    on 8 o'clock in the evening». Это уроки 1, 2 и 3.
 *
 * 2. English Grammar Profile, A2, там же, «FORM: WITH 'WHEN'» — «Can use the
 *    present simple with 'when' to refer to the future», пример «I'll tell you
 *    more when I meet you». Это урок 4. В главной половине примера стоит
 *    `will`, а настоящее время — только в половине со словом `when`; урок
 *    устроен так же, и слово `will` ученик получил модулем 9.
 *
 * 3. English Grammar Profile, A2, там же, «USE: 'HOPE'» — «Can use the present
 *    simple with 'I hope' to talk about hopes and wishes for the future»,
 *    пример «I hope you enjoy your holiday too». Это урок 5.
 *
 * 4. English Grammar Profile, A1, PRESENT present simple, «FORM: AFFIRMATIVE» и
 *    A2, «FORM: NEGATIVE». Формы уроков 1 и 2.
 *
 * 5. Руководство Cambridge A2 Key, с. 52, Language specifications — четыре
 *    строки этой страницы держат четыре места модуля:
 *    — Tenses: «Present simple: states, habits, systems and processes **and
 *      with future meaning**» — весь модуль;
 *    — Verb forms: «Short questions (Can you?) and answers (**No, he
 *      doesn't**)» — короткий ответ третьего лица в уроке 3;
 *    — Interrogatives: «What; **What (+ noun)** … (including the interrogative
 *      forms of all tenses and modals listed)» — вопрос `What time does…?`;
 *    — Clause types: «Subordinate clause following if, when, where, because» с
 *      примером «**He'll come when you call**» — урок 4.
 *
 *    ЗДЕСЬ ИСТОЧНИКИ РАСХОДЯТСЯ, И ЭТО НАДО НАЗВАТЬ. English Grammar Profile
 *    относит вопрос Present Simple с третьим лицом к B1 (PRESENT present
 *    simple, «FORM: QUESTIONS», «with a wide range of subjects», пример «Does
 *    your brother go with your parents?»), а его графа A2 оговорена как
 *    «question forms with 'you'». Руководство Cambridge держит третье лицо на
 *    A2 и само спрашивает им в работе на слух: с. 27, Listening Part 3 — «Why
 *    does Laura like Dublin?». Модуль идёт за руководством: экзамен ступени
 *    спрашивает так, значит ученик должен уметь.
 *
 * 6. Описания Совета Европы, шкала Reading for orientation, графа A2: «Can find
 *    specific, predictable information in simple everyday material such as
 *    advertisements, prospectuses, menus, reference lists and timetables». Это
 *    урок 6.
 *
 * 7. Описания Совета Европы, шкала Correspondence, графа A2: «Can compose
 *    short, simple notes, e-mails and text messages (e.g. to send or reply to
 *    an invitation, to confirm or change an arrangement)». Это урок 8.
 *
 * 8. Руководство Cambridge A2 Key, с. 29, раздел THE TASK: «The candidates
 *    should only write ONE word, or a number, or a date, or a time for their
 *    answer». Поэтому ответы на вопросы к записи в уроке 7 односложные.
 *
 * ЖАНР УРОКА ПИСЬМА НЕ СОВПАДАЕТ С ЖАНРОМ УРОКА ЧТЕНИЯ, и по правилу CLAUDE.md
 * это оговаривается. Урок 6 даёт заметку (`article`), урок 8 просит записку.
 * Основание: шкала Correspondence на A2 говорит именно о записках и коротких
 * сообщениях, а заметку в газете ученику писать незачем. Слова заметки при этом
 * все знакомы: записка урока 8 берёт их же.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ПРИДАТОЧНОГО С `IF`. Графа A2 у источника есть, но программа отдала условие
 *   модулю 29.
 * — ОБОРОТА `AS SOON AS`. English Grammar Profile ставит его на B1.
 * — ВОПРОСА С `HOPE`. Источник даёт только утверждение с `I hope`.
 *
 * ОСТОРОЖНО С ФОРМУЛИРОВКОЙ ПРО `WHEN`. Говорить «после when не бывает will»
 * нельзя: это верно для придаточного времени и неверно для вопроса (`When will
 * you arrive?`). Модуль говорит «в половине со словом when», и так же надо
 * говорить дальше.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать три карточки, из них семнадцать несут слово,
 * которого на прошлой ступени не было.
 *
 *    Oxford 3000 помечает A2: direct, international, comfortable, empty,
 *    continue, least, simple, recently, less, single, per.
 *
 *    Oxford 3000 помечает выше A2, а словник A2 Key содержит: port (B1),
 *    delay (B2), total (B1), latest (B1).
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: chemist,
 *    bookshop.
 *
 *    Oxford 3000 помечает A1, и потому новыми они не считаются: journey,
 *    airport, flight, leave, arrive, change, theatre, pool, midnight, hour,
 *    plane, taxi, quick, full, slow, before. Взяты потому, что на ЭТОЙ ступени
 *    курс их карточкой не давал, а расписание без них не описать. Слово `hour`
 *    карточка на Beginner было (`dni-daty-vremya`), и повтор законен: между
 *    ступенями нет ссылок на память.
 *
 *    ДВЕ ПОМЕТЫ ИСПРАВЛЕНЫ ПО РАЗБОРУ МЕТОДИСТА. `per` Oxford 3000 содержит —
 *    «per prep. A2», — и первая редакция числила его среди отсутствующих. Про
 *    `hour` первая редакция писала «курс не давал ни разу нигде», а он давался
 *    на прошлой ступени.
 *
 *    КАЖДАЯ КАРТОЧКА РАБОТАЕТ В МОДУЛЕ и стоит в том уроке, где слово впервые
 *    встречается. Первая редакция поставила `least`, `single` и `less` в уроки,
 *    где этих слов нет вовсе; поправлено.
 *
 *    СЛОВА-ПОДПОРКИ: train, bus, shop, school, film, class, ticket, open,
 *    close, start, take, cost, come, go, tell, call, meet, like, enjoy, day,
 *    week, morning, evening, night, time, new, old, next, big, tomorrow — все
 *    A1 по Oxford 3000. Плюс слова прошлых модулей этой же ступени: platform,
 *    timetable, station, seat.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного. В уроке 1 — выбор записи о
 * договорённости из модуля 10, урок 1: там та же речь о будущем, но другой
 * случай. В уроке 4 — слово `will` из модуля 9, урок 1: без него главную
 * половину строки с `when` не построить. Берутся ссылкой (`vozvrat`).
 */
const module: Module = {
  slug: "po-raspisaniyu",
  title: "По расписанию",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, FUTURE present simple for future use, «USE: TIMETABLES AND PLANS»: " +
        "«Can use the present simple to talk about timetabled events in the future», " +
        "пример источника — «[Talking about a film] It begins on 8 o'clock in the " +
        "evening» — уроки 1, 2 и 3. ПРИМЕР ЭТОЙ ГРАФЫ НЕСЁТ КОНТЕКСТ В СКОБКАХ, и " +
        "потому во всех уроках правил стоит признак будущего: tomorrow, on Monday, " +
        "next week. Без него строка попадает в графу A1 «USE: HABITS AND GENERAL " +
        "FACTS» — привычка, а не расписание. Первая редакция признака не ставила " +
        "нигде; нашёл методист. " +
        "A2, там же, «FORM: WITH 'WHEN'»: «Can use the present simple with 'when' to " +
        "refer to the future», пример — «I'll tell you more when I meet you» — урок " +
        "4. В главной половине примера стоит will, а настоящее время только в " +
        "половине со словом when. " +
        "A2, там же, «USE: 'HOPE'»: «Can use the present simple with 'I hope' to talk " +
        "about hopes and wishes for the future», пример — «I hope you enjoy your " +
        "holiday too» — урок 5. " +
        "ЭТА ГРАФА — РАЗРЕШЕНИЕ, А НЕ ЗАПРЕТ. Первая редакция вывела из неё правило " +
        "«после hope не ставят will» и объявила ошибкой безупречные строки в семи " +
        "местах. Опровергают её примеры других граф того же файла: «I hope you will " +
        "be there» (ADVERBS adverbs as modifiers, A1, Pass), «I hope you will be fine " +
        "very soon» (ADVERBS adverb phrases - form, A1, Pass), «I hope it will not be " +
        "boring!» (MODALITY will, A2, Pass). Запрета в модуле нет нигде. " +
        "A1, PRESENT present simple, «FORM: AFFIRMATIVE»: «Can use the affirmative " +
        "form with a limited range of regular and irregular verbs» — форма урока 1. " +
        "ЭТО ПРАВИЛО ЛИЦА, А НЕ ЧИСЛА: окончание -s появляется у he, she, it. Первая " +
        "редакция дала его как правило числа, и по нему выходило I arrives. " +
        "A2, PRESENT present simple, «FORM: NEGATIVE»: «Can use the negative form " +
        "with an increasing range of regular and irregular verbs» — урок 2. " +
        "РАСХОЖДЕНИЕ ИСТОЧНИКОВ ПО ВОПРОСУ С ТРЕТЬИМ ЛИЦОМ: A2, PRESENT present " +
        "simple, «FORM: QUESTIONS» оговорена как «question forms with 'you'», а " +
        "вопрос с любым подлежащим стоит на B1 («with a wide range of subjects», " +
        "пример «Does your brother go with your parents?»). Руководство Cambridge " +
        "держит третье лицо на A2 — см. следующую запись. " +
        "ЧЕГО НЕТ. A2, PRESENT present simple, «FORM/USE: REAL AND IMAGINED " +
        "SITUATIONS AFTER 'IF'» — придаточное с if программа отдала модулю 29. B1, " +
        "FUTURE present simple for future use, «FORM: WITH 'AS SOON AS'» — выше " +
        "ступени. Вопроса с hope не описывает ни одна графа A2",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "ОПОРА ВСЕГО МОДУЛЯ. с. 52, Language specifications, раздел Tenses: " +
        "«Present simple: states, habits, systems and processes and with future " +
        "meaning (and verbs not used in the continuous form)». " +
        "УРОК 3, КОРОТКИЙ ОТВЕТ ТРЕТЬЕГО ЛИЦА. Там же, раздел Verb forms: «Short " +
        "questions (Can you?) and answers (No, he doesn't)» — источник сам приводит " +
        "he doesn't. " +
        "УРОК 3, ВОПРОС WHAT TIME. Там же, раздел Interrogatives: «What; What (+ " +
        "noun); … (including the interrogative forms of all tenses and modals " +
        "listed)». " +
        "И РАБОТА САМОГО ЭКЗАМЕНА спрашивает третьим лицом: с. 27, Listening Part 3 " +
        "— «Why does Laura like Dublin?». Значит ученик ступени должен это уметь, " +
        "как бы ни делил графы English Grammar Profile. " +
        "УРОК 4. Там же, раздел Clause types: «Subordinate clause following if, when, " +
        "where, because», и следующей строкой пример — «He'll come when you call». " +
        "Первая редакция цитировала пример с if, которого модуль нарочно не даёт; " +
        "нашёл методист. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer»",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК 6, ЧТЕНИЕ. шкала Reading for orientation, графа A2: «Can find " +
        "specific, predictable information in simple everyday material such as " +
        "advertisements, prospectuses, menus, reference lists and timetables». " +
        "УРОК 8, ПИСЬМО. шкала Correspondence, графа A2: «Can compose short, simple " +
        "notes, e-mails and text messages (e.g. to send or reply to an invitation, to " +
        "confirm or change an arrangement)». " +
        "ЖАНР УРОКА ПИСЬМА НЕ СОВПАДАЕТ С ЖАНРОМ УРОКА ЧТЕНИЯ, и это оговорка по " +
        "правилу CLAUDE.md: урок 6 даёт заметку, урок 8 просит записку. Основание — " +
        "шкала Correspondence говорит именно о записках и коротких сообщениях, а " +
        "заметку ученику писать незачем. Слова при этом общие: записка берёт словарь " +
        "заметки. " +
        "УРОК 7, СЛУШАНИЕ. шкала Overall oral comprehension, графа A2: «Can " +
        "understand phrases and expressions related to areas of most immediate " +
        "priority… provided people articulate clearly and slowly» — отсюда pace: " +
        "\"slow\"",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: direct, international, comfortable, empty, " +
        "continue, least, simple, recently, less, single, per. " +
        "Выше A2 Oxford 3000 ставит четыре слова — port (B1), delay (B2), total " +
        "(B1), latest (B1), — а словник A2 Key их содержит: по правилу ступени они в " +
        "запасе и потому взяты. " +
        "Слов chemist и bookshop Oxford 3000 не содержит вовсе, а словник A2 Key " +
        "требует. " +
        "Слова journey, airport, flight, leave, arrive, change, theatre, pool, " +
        "midnight, hour, plane, taxi, quick, full, slow и before Oxford 3000 помечает " +
        "A1, и новыми они не считаются; взяты потому, что на ЭТОЙ ступени курс их " +
        "карточкой не давал. " +
        "ДВЕ ПОМЕТЫ ИСПРАВЛЕНЫ ПО РАЗБОРУ МЕТОДИСТА: per в Oxford 3000 есть («per " +
        "prep. A2»), а hour давался карточкой на Beginner. " +
        "Подпорки: train, bus, shop, school, film, class, ticket, open, close, start, " +
        "take, cost, come, go, tell, call, meet, like, enjoy, day, week, morning, " +
        "evening, night, time, new, old, next, big, tomorrow — все A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Из тридцати трёх " +
        "карточек модуля словник содержит тридцать два; единственное исключение — " +
        "direct, и ступень ему подтверждает Oxford 3000 (A2)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): direct /daɪˈrekt/, international " +
        "/ˌɪntəˈnæʃənəl/, comfortable /ˈkʌmftəbl/, empty /ˈempti/, continue " +
        "/kənˈtɪnjuː/, least /liːst/, less /les/, simple /ˈsɪmpl/, recently " +
        "/ˈriːsəntli/, port /pɔːt/, delay /dɪˈleɪ/, total /ˈtəʊtl/, latest " +
        "/ˈleɪtəst/, chemist /ˈkemɪst/, bookshop /ˈbʊkʃɒp/, per /pɜː/, journey " +
        "/ˈdʒɜːni/, airport /ˈeəpɔːt/, flight /flaɪt/, leave /liːv/, arrive " +
        "/əˈraɪv/, change /tʃeɪndʒ/, pool /puːl/, midnight /ˈmɪdnaɪt/, single " +
        "/ˈsɪŋgl/, plane /pleɪn/, taxi /ˈtæksi/, quick /kwɪk/, full /fʊl/, slow " +
        "/sləʊ/, before /bɪˈfɔː/, hour /ˈaʊə/. " +
        "СВЕРХ ПЯТИ УСЛОВНОСТЕЙ КУРСА одна запись приведена к словарной норме: " +
        "theatre — источник даёт /θˈiətɐ/, по условностям вышло бы /ˈθiətə/, а в " +
        "модуле стоит /ˈθɪətə/. Замену i на ɪ перечень условностей не содержит, и " +
        "потому она названа здесь; нашёл методист",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "называть время по расписанию: The train leaves at six tomorrow",
    "говорить, чего в расписании нет: The chemist doesn't open on Sunday",
    "спрашивать о расписании и коротко отвечать",
    "связывать два дела словом when: I'll call you when I arrive",
    "говорить о надежде: I hope you like it",
    "находить нужное время в заметке о поезде",
    "слышать в объявлении время и место",
    "проверять записку: у каждого дела названо время",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "poezd-uhodit-v-shest",
      title: "По расписанию: The train leaves at six tomorrow",
      estimatedMinutes: 15,
      outcome: "называть время по расписанию: The train leaves at six tomorrow",
      vozvrat: [{ iz: "uzhe-dogovorilis", zadanie: "z2-vybrat-dogovorennost" }],

      blocks: [
        {
          id: "zachem-govorit-o-raspisanii",
          kind: "explain",
          text: [
            "Поезд уходит завтра в шесть, и никто из говорящих на это не влияет.",
            "По-английски это The train leaves at six tomorrow.",
            "Так говорят о расписании — о том, что назначено заведённым порядком.",
            "Речь при этом о завтрашнем дне, а глагол стоит в настоящем времени.",
          ],
        },
        {
          id: "formy-po-licam",
          kind: "table",
          caption: "Формы по лицам",
          zvuchat: [
            "I leave at six tomorrow.",
            "You leave at six tomorrow.",
            "He leaves at six tomorrow.",
            "She leaves at six tomorrow.",
            "It leaves at six tomorrow.",
            "We leave at six tomorrow.",
            "They leave at six tomorrow.",
          ],
          head: ["Кто", "Запись"],
          rows: [
            ["I", "I leave at six tomorrow."],
            ["you", "You leave at six tomorrow."],
            ["he", "He leaves at six tomorrow."],
            ["she", "She leaves at six tomorrow."],
            ["it", "It leaves at six tomorrow."],
            ["we", "We leave at six tomorrow."],
            ["they", "They leave at six tomorrow."],
          ],
        },
        {
          id: "otkuda-beretsya-s",
          kind: "explain",
          text: [
            "Окончание -s появляется у трёх лиц: he, she, it.",
            "У остальных глагол остаётся без окончания: I leave, you leave, we leave, they leave.",
            "Вместо местоимения часто стоит имя или название вещи, и тогда смотрят, чем его заменить.",
            "Один поезд — это it, значит The train leaves. Несколько поездов — это they, значит The trains leave.",
          ],
        },
        {
          id: "priznak-budushchego",
          kind: "note",
          tone: "info",
          text:
            "Чтобы стало ясно, что речь о будущем, в строку ставят слово: tomorrow, " +
            "on Monday, next week.\n\nБез такого слова строка говорит о заведённом " +
            "порядке вообще: The shop opens at nine — так бывает каждый день.",
        },
        {
          id: "raspisanie-poezdki",
          kind: "example",
          caption: "Расписание поездки",
          zvuchat: [
            "The train leaves at six tomorrow morning.",
            "The journey takes four hours.",
            "We arrive at the port at ten.",
            "The bookshop at the airport opens at nine on Monday.",
          ],
          text:
            "The train leaves at six tomorrow morning.\nThe journey takes four hours.\nWe arrive at the port at ten.\nThe bookshop at the airport opens at nine on Monday.",
          explain:
            "Четыре строки, и все о завтрашнем дне и понедельнике. Окончание -s стоит " +
            "у leaves, takes и opens: поезд, поездка и магазин — это it. У arrive " +
            "окончания нет, потому что we — не третье лицо.",
        },
        {
          id: "slovar-poezdki-po-raspisaniyu",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "leave", translation: "отправляться, уходить", example: "The train leaves at six tomorrow morning.", hint: "/liːv/" },
            { term: "arrive", translation: "прибывать", example: "We arrive at the port at ten.", hint: "/əˈraɪv/" },
            { term: "journey", translation: "поездка, путь", example: "The journey takes four hours.", hint: "/ˈdʒɜːni/" },
            { term: "hour", translation: "час", example: "The journey takes four hours.", hint: "/ˈaʊə/" },
            { term: "port", translation: "порт", example: "We arrive at the port at ten.", hint: "/pɔːt/" },
            { term: "bookshop", translation: "книжный магазин", example: "The bookshop at the airport opens at nine on Monday.", hint: "/ˈbʊkʃɒp/" },
            { term: "airport", translation: "аэропорт", example: "The bookshop at the airport opens at nine on Monday.", hint: "/ˈeəpɔːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-okonchanie",
          kind: "gap",
          prompt: "Поезд уходит завтра в шесть. Допиши недостающее слово.",
          before: "The train ",
          after: " at six tomorrow.",
          answer: "leaves",
          hint: "Один поезд — это it, а у it окончание есть.",
          why:
            "The train leaves at six tomorrow. Поезд заменяется словом it, и потому у " +
            "глагола -s.",
        },
        {
          id: "z2-vybrat-o-neskolkih",
          kind: "choice",
          prompt: "Магазины открываются в понедельник в девять. Какая запись верна?",
          options: [
            { text: "The shops opens at nine on Monday." },
            { text: "The shops open at nine on Monday.", correct: true },
            { text: "The shops opening at nine on Monday." },
          ],
          hint: "Несколько магазинов заменяются словом they, а у they окончания нет.",
          why:
            "The shops open at nine on Monday. Несколько вещей — это they, и глагол " +
            "остаётся без окончания.",
        },
        {
          id: "z3-otmetit-vernye-okonchaniya",
          kind: "hottext",
          prompt: "Отметь записи, где окончание глагола выбрано верно.",
          parts: [
            { text: "The train arrives at ten tomorrow", selectable: true, correct: true },
            { text: " · " },
            { text: "The trains leaves at six tomorrow", selectable: true },
            { text: " · " },
            { text: "We arrive at the port on Monday", selectable: true, correct: true },
            { text: " · " },
            { text: "I leaves at six tomorrow", selectable: true },
          ],
          hint: "Замени каждое начало местоимением: it, they, we, I.",
          why:
            "Верны The train arrives at ten tomorrow и We arrive at the port on " +
            "Monday. Во второй строке поездов несколько — это they, в четвёртой стоит " +
            "I, и окончания там не бывает.",
        },
        {
          id: "z4-sobrat-o-poezde",
          kind: "order",
          prompt: "Собери строку: поезд уходит завтра в шесть утра.",
          items: ["tomorrow morning.", "at six", "leaves", "The train"],
          answer: [3, 2, 1, 0],
          hint: "Сначала о чём речь, потом глагол, потом время.",
          why:
            "The train leaves at six tomorrow morning. Час стоит после глагола, а " +
            "слово о завтрашнем дне — в самом конце.",
        },
        {
          id: "z5-napisat-o-magazine",
          kind: "short",
          prompt:
            "В понедельник книжный магазин открывается в девять — так стоит в расписании. Скажи об этом по-английски, начав с The bookshop.",
          answer: "The bookshop opens at nine on Monday.",
          accept: ["The bookshop opens at nine on Monday"],
          hint: "Один магазин — это it, и глагол берёт окончание -s.",
          why:
            "The bookshop opens at nine on Monday. Магазин заменяется словом it, и " +
            "потому у глагола окончание.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-po-raspisaniyu",
      title: "Не по расписанию: The chemist doesn't open on Sunday",
      estimatedMinutes: 14,
      outcome: "говорить, чего в расписании нет: The chemist doesn't open on Sunday",

      blocks: [
        {
          id: "zachem-govorit-chego-net-v-raspisanii",
          kind: "explain",
          text: [
            "В воскресенье аптека закрыта, и об этом надо предупредить заранее.",
            "По-английски это The chemist doesn't open on Sunday.",
            "Отрицание собирают из слова doesn't или don't и глагола без окончания.",
          ],
        },
        {
          id: "doesnt-i-dont",
          kind: "table",
          caption: "Когда doesn't, а когда don't",
          zvuchat: [
            "I don't leave on Sunday.",
            "You don't leave on Sunday.",
            "He doesn't leave on Sunday.",
            "It doesn't leave on Sunday.",
            "We don't leave on Sunday.",
            "They don't leave on Sunday.",
          ],
          head: ["Кто", "Запись"],
          rows: [
            ["I", "I don't leave on Sunday."],
            ["you", "You don't leave on Sunday."],
            ["he", "He doesn't leave on Sunday."],
            ["it", "It doesn't leave on Sunday."],
            ["we", "We don't leave on Sunday."],
            ["they", "They don't leave on Sunday."],
          ],
        },
        {
          id: "kuda-devalos-okonchanie",
          kind: "explain",
          text: [
            "Окончание -s в отрицании уходит с глагола и прирастает к слову do: doesn't.",
            "Поэтому глагол стоит в словарной форме — open, а не opens.",
            "У всех прочих лиц ставят don't, и окончания нет ни там ни там.",
          ],
        },
        {
          id: "ne-doesnt-opens",
          kind: "note",
          tone: "mistake",
          text:
            "«The chemist doesn't opens on Sunday» — так сказать нельзя.\n\nОкончание " +
            "стоит один раз: либо у глагола, либо у doesn't.",
        },
        {
          id: "chego-net-v-raspisanii",
          kind: "example",
          caption: "Чего нет в расписании",
          zvuchat: [
            "The chemist doesn't open on Sunday.",
            "The direct flight doesn't leave next week.",
            "The shops in the port don't close at six on Monday.",
            "The pool doesn't open in the morning: it is empty then.",
          ],
          text:
            "The chemist doesn't open on Sunday.\nThe direct flight doesn't leave next week.\nThe shops in the port don't close at six on Monday.\nThe pool doesn't open in the morning: it is empty then.",
          explain:
            "Четыре строки. В трёх речь об одной вещи — это it, и там стоит " +
            "doesn't. В третьей магазинов несколько: они заменяются словом they, и " +
            "потому don't.",
        },
        {
          id: "slovar-zakrytyh-dney",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "chemist", translation: "аптека", example: "The chemist doesn't open on Sunday.", hint: "/ˈkemɪst/" },
            { term: "flight", translation: "рейс", example: "The direct flight doesn't leave next week.", hint: "/flaɪt/" },
            { term: "direct", translation: "прямой", example: "The direct flight doesn't leave next week.", hint: "/daɪˈrekt/" },
            { term: "pool", translation: "бассейн", example: "The pool doesn't open in the morning.", hint: "/puːl/" },
            { term: "empty", translation: "пустой", example: "The pool is empty in the morning.", hint: "/ˈempti/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-doesnt",
          kind: "gap",
          prompt: "В воскресенье аптека не работает. Допиши недостающее слово.",
          before: "The chemist ",
          after: " open on Sunday.",
          answer: "doesn't",
          accept: ["does not"],
          hint: "Аптека — это it, и окончание уходит к слову do.",
          why:
            "The chemist doesn't open on Sunday. Аптека заменяется словом it, и " +
            "потому doesn't.",
        },
        {
          id: "z2-vybrat-otricanie-raspisaniya",
          kind: "choice",
          prompt: "Бассейн завтра утром не открывается. Какая запись верна?",
          options: [
            { text: "The pool don't open tomorrow morning." },
            { text: "The pool doesn't opens tomorrow morning." },
            { text: "The pool doesn't open tomorrow morning.", correct: true },
          ],
          hint: "Проверь два места: слово do и окончание глагола.",
          why:
            "The pool doesn't open tomorrow morning. Бассейн — это it, значит " +
            "doesn't, а глагол при этом без окончания.",
        },
        {
          id: "z3-otmetit-vernye-otricaniya-raspisaniya",
          kind: "hottext",
          prompt: "Отметь верно записанные отрицания.",
          parts: [
            { text: "The shops don't close at six", selectable: true, correct: true },
            { text: " · " },
            { text: "The flight doesn't leaves next week", selectable: true },
            { text: " · " },
            { text: "I don't leave on Sunday", selectable: true, correct: true },
            { text: " · " },
            { text: "The pool don't open in the morning", selectable: true },
          ],
          hint: "Окончание стоит один раз: либо у do, либо у глагола.",
          why:
            "Верны The shops don't close at six и I don't leave on Sunday. Во второй " +
            "строке окончание стоит дважды, в четвёртой бассейн — это it, и нужно " +
            "doesn't.",
        },
        {
          id: "z4-perepisat-v-otricanie",
          kind: "short",
          prompt: "Скажи противоположное и запиши целиком: «The direct flight leaves next week.»",
          answer: "The direct flight doesn't leave next week.",
          accept: [
            "The direct flight doesn't leave next week",
            "The direct flight does not leave next week.",
            "The direct flight does not leave next week",
          ],
          hint: "Окончание уходит с глагола к слову do.",
          why:
            "The direct flight doesn't leave next week. Рейс — это it, и потому " +
            "doesn't, а глагол остаётся без окончания.",
        },
        {
          id: "z5-napisat-o-zakrytom-magazine",
          kind: "short",
          prompt:
            "Магазины в понедельник в шесть не закрываются. Скажи об этом по-английски, начав с The shops.",
          answer: "The shops don't close at six on Monday.",
          accept: [
            "The shops don't close at six on Monday",
            "The shops do not close at six on Monday.",
            "The shops do not close at six on Monday",
          ],
          hint: "Несколько магазинов — это they, и окончания нет нигде.",
          why:
            "The shops don't close at six on Monday. Магазины заменяются словом they, " +
            "и потому don't.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vo-skolko-nachalo",
      title: "Спросить: What time does the film start?",
      estimatedMinutes: 14,
      outcome: "спрашивать о расписании и коротко отвечать",

      blocks: [
        {
          id: "zachem-sprosit-o-raspisanii",
          kind: "explain",
          text: [
            "Айгуль зовёт в кино завтра, но времени начала не знает.",
            "По-английски она спрашивает: What time does the film start tomorrow?",
            "Вопрос собирают из слова does или do и глагола без окончания.",
          ],
        },
        {
          id: "utverzhdenie-i-vopros-o-raspisanii",
          kind: "table",
          caption: "Утверждение и вопрос",
          zvuchat: [
            "The film starts at eight tomorrow.",
            "What time does the film start tomorrow?",
            "The trains leave at six on Monday.",
            "What time do the trains leave on Monday?",
            "The bookshop opens at nine.",
            "Does the bookshop open at nine?",
          ],
          head: ["Утверждение", "Вопрос"],
          rows: [
            ["The film starts at eight tomorrow.", "What time does the film start tomorrow?"],
            ["The trains leave at six on Monday.", "What time do the trains leave on Monday?"],
            ["The bookshop opens at nine.", "Does the bookshop open at nine?"],
          ],
        },
        {
          id: "chto-menyaetsya-v-voprose-o-raspisanii",
          kind: "explain",
          text: [
            "Слово does или do встаёт перед тем, о чём спрашивают.",
            "Выбирают его по тому же лицу: у he, she, it — does, у прочих — do.",
            "Глагол при этом теряет окончание: does the film start, а не starts.",
            "Оборот what time значит «во сколько» и стоит в самом начале.",
          ],
        },
        {
          id: "korotkie-otvety-o-raspisanii",
          kind: "table",
          caption: "Короткие ответы",
          zvuchat: [
            "Does the bookshop open at nine?",
            "Yes, it does.",
            "No, it doesn't.",
            "Do the trains leave at six?",
            "Yes, they do.",
            "No, they don't.",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Does the bookshop open at nine?", "Yes, it does.", "No, it doesn't."],
            ["Do the trains leave at six?", "Yes, they do.", "No, they don't."],
          ],
        },
        {
          id: "otvet-povtoryaet-does",
          kind: "explain",
          text: [
            "В коротком ответе повторяется то же слово, с которого начался вопрос.",
            "Вместо названия одной вещи встаёт it, вместо нескольких — they.",
            "Глагол в ответе не повторяется: строка обрывается сразу после does или do.",
          ],
        },
        {
          id: "razgovor-o-kino",
          kind: "example",
          caption: "Разговор о кино",
          razgovor: true,
          zvuchat: [
            "What time does the film start tomorrow?",
            "At eight. Does the theatre open at seven?",
            "Yes, it does. The seats there are comfortable.",
          ],
          text:
            "What time does the film start tomorrow?\nAt eight. Does the theatre open at seven?\nYes, it does. The seats there are comfortable.",
          explain:
            "Три реплики. В первой вопрос начинается с what time, во второй — со " +
            "слова does, и короткий ответ повторяет его вторым словом.",
        },
        {
          id: "slovar-kino-i-teatra",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "theatre", translation: "театр", example: "Does the theatre open at seven?", hint: "/ˈθɪətə/" },
            { term: "comfortable", translation: "удобный", example: "The seats there are comfortable.", hint: "/ˈkʌmftəbl/" },
            { term: "quick", translation: "быстрый", example: "The train is quick, and it is never full.", hint: "/kwɪk/" },
            { term: "full", translation: "полный", example: "The train is quick, and it is never full.", hint: "/fʊl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-does",
          kind: "gap",
          prompt: "Спроси, во сколько завтра начинается фильм. Допиши недостающее слово.",
          before: "What time ",
          after: " the film start tomorrow?",
          answer: "does",
          hint: "Фильм — это it, и слово do берёт окончание.",
          why: "What time does the film start tomorrow? Фильм — это it, и потому does.",
        },
        {
          id: "z2-vybrat-vopros-o-poezdah",
          kind: "choice",
          prompt: "Спроси, во сколько поезда уходят в понедельник. Какая запись верна?",
          options: [
            { text: "What time does the trains leave on Monday?" },
            { text: "What time do the trains leave on Monday?", correct: true },
            { text: "What time do the trains leaves on Monday?" },
          ],
          hint: "Несколько поездов — это they, и окончания нет нигде.",
          why:
            "What time do the trains leave on Monday? Поезда — это they, значит do, а " +
            "глагол остаётся без окончания.",
        },
        {
          id: "z3-otmetit-verno-postroennye-voprosy-o-raspisanii",
          kind: "hottext",
          prompt: "Отметь верно построенные вопросы.",
          parts: [
            { text: "Does the bookshop open at nine?", selectable: true, correct: true },
            { text: " · " },
            { text: "Does the film starts at eight?", selectable: true },
            { text: " · " },
            { text: "What time do the shops close?", selectable: true, correct: true },
            { text: " · " },
            { text: "What time the theatre opens?", selectable: true },
          ],
          hint: "Проверь окончание глагола и слово does или do в начале.",
          why:
            "Верны Does the bookshop open at nine? и What time do the shops close? Во " +
            "второй строке окончание стоит дважды, в четвёртой слово does пропало.",
        },
        {
          id: "z4-sopostavit-vopros-i-otvet-o-raspisanii",
          kind: "match",
          prompt: "Собери пары: вопрос и короткий ответ «да».",
          left: [
            "Does the theatre open at seven?",
            "Do the shops close at six?",
            "Are the seats comfortable?",
          ],
          right: ["Yes, they do.", "Yes, it does.", "Yes, they are."],
          answer: [1, 0, 2],
          hint: "Смотри на два: на число и на то, с какого слова начался вопрос.",
          why:
            "Театр один — Yes, it does. Магазинов несколько — Yes, they do. Третий " +
            "вопрос начинается не с do, а с are, и ответ повторяет are.",
        },
        {
          id: "z5-napisat-vopros-o-teatre",
          kind: "short",
          prompt: "Спроси по-английски, открывается ли театр в семь. Начни с Does.",
          answer: "Does the theatre open at seven?",
          accept: ["Does the theatre open at seven"],
          hint: "После does глагол стоит без окончания.",
          why:
            "Does the theatre open at seven? Слово does идёт первым, а глагол теряет " +
            "окончание.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pozvonyu-kogda-priedu",
      title: "Позвоню, когда приеду: I'll call you when I arrive",
      estimatedMinutes: 14,
      outcome: "связывать два дела словом when: I'll call you when I arrive",
      vozvrat: [{ iz: "ya-sdelayu", zadanie: "z1-dopisat-will" }],

      blocks: [
        {
          id: "zachem-svyazyvat-dva-dela",
          kind: "explain",
          text: [
            "Алим уезжает завтра и обещает позвонить сразу после приезда.",
            "По-английски это I'll call you when I arrive.",
            "Оба дела впереди, но в половине со словом when глагол стоит в настоящем времени.",
          ],
        },
        {
          id: "dve-poloviny-so-slovom-when",
          kind: "table",
          caption: "Две половины строки",
          zvuchat: [
            "I'll call you",
            "when I arrive",
            "I'll tell you more",
            "when I meet you",
            "We'll leave",
            "when the shop closes",
          ],
          head: ["Главная половина", "Половина со словом when"],
          rows: [
            ["I'll call you", "when I arrive"],
            ["I'll tell you more", "when I meet you"],
            ["We'll leave", "when the shop closes"],
          ],
        },
        {
          id: "pochemu-nastoyashchee-posle-when",
          kind: "explain",
          text: [
            "В главной половине стоит will — то самое слово обещания.",
            "А в половине со словом when его не ставят: там глагол настоящего времени.",
            "Окончание в этой половине живёт по правилу лица: I arrive, но the shop closes.",
          ],
        },
        {
          id: "ne-will-v-polovine-s-when",
          kind: "note",
          tone: "mistake",
          text:
            "«I'll call you when I will arrive» — так сказать нельзя.\n\nВ половине со " +
            "словом when будущего не ставят: там настоящее время.",
        },
        {
          id: "obeshchanie-s-when",
          kind: "example",
          caption: "Обещание с when",
          zvuchat: [
            "I'll call you when I arrive at the airport tomorrow.",
            "I'll tell you more when I meet you.",
            "We'll leave when the international flight arrives.",
            "The journey continues when the delay finishes: the change at the port takes an hour.",
          ],
          text:
            "I'll call you when I arrive at the airport tomorrow.\nI'll tell you more when I meet you.\nWe'll leave when the international flight arrives.\nThe journey continues when the delay finishes: the change at the port takes an hour.",
          explain:
            "Четыре строки. В первых трёх главная половина держится на will, а в " +
            "половине со словом when стоит настоящее время. В четвёртой will нет " +
            "вовсе: обе половины о расписании.",
        },
        {
          id: "slovar-zaderzhki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "delay", translation: "задержка", example: "The journey continues when the delay finishes.", hint: "/dɪˈleɪ/" },
            { term: "continue", translation: "продолжаться", example: "The journey continues when the delay finishes.", hint: "/kənˈtɪnjuː/" },
            { term: "international", translation: "международный", example: "We'll leave when the international flight arrives.", hint: "/ˌɪntəˈnæʃənəl/" },
            { term: "change", translation: "пересадка", example: "The change at the port takes an hour.", hint: "/tʃeɪndʒ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-nastoyashchee-posle-when",
          kind: "gap",
          prompt: "Алим позвонит сразу после приезда. Допиши недостающее слово.",
          before: "I'll call you when I ",
          after: " at the airport.",
          answer: "arrive",
          hint: "В половине со словом when глагол стоит в настоящем времени.",
          why:
            "I'll call you when I arrive at the airport. В половине со словом when " +
            "будущего не ставят.",
        },
        {
          id: "z2-vybrat-vernuyu-svyazku",
          kind: "choice",
          prompt: "Какая запись верна?",
          options: [
            { text: "I'll tell you more when I will meet you." },
            { text: "I'll tell you more when I meet you.", correct: true },
            { text: "I tell you more when I will meet you." },
          ],
          hint: "Слово will стоит только в главной половине.",
          why:
            "I'll tell you more when I meet you. В главной половине will есть, в " +
            "половине со словом when его нет.",
        },
        {
          id: "z3-otmetit-vernye-svyazki",
          kind: "hottext",
          prompt: "Отметь верно построенные половины со словом when.",
          parts: [
            { text: "when the shop closes", selectable: true, correct: true },
            { text: " · " },
            { text: "when I will arrive", selectable: true },
            { text: " · " },
            { text: "when we meet", selectable: true, correct: true },
            { text: " · " },
            { text: "when the delay will finish", selectable: true },
          ],
          hint: "Ищи слово will: в этой половине его быть не должно.",
          why:
            "Верны when the shop closes и when we meet. В двух других стоит will.",
        },
        {
          id: "z4-sobrat-obeshchanie-s-when",
          kind: "order",
          prompt: "Собери строку: я позвоню тебе, когда приеду завтра в аэропорт.",
          items: ["at the airport tomorrow.", "when I arrive", "you", "I'll call"],
          answer: [3, 2, 1, 0],
          hint: "Сначала главная половина с will, потом половина со словом when.",
          why:
            "I'll call you when I arrive at the airport tomorrow. Главная половина " +
            "идёт первой.",
        },
        {
          id: "z5-napisat-obeshchanie-s-when",
          kind: "short",
          prompt:
            "Пообещай по-английски рассказать больше при встрече. Начни с I'll tell you more.",
          answer: "I'll tell you more when I meet you.",
          accept: [
            "I'll tell you more when I meet you",
            "I will tell you more when I meet you.",
            "I will tell you more when I meet you",
            "I'll tell you more when we meet.",
            "I'll tell you more when we meet",
            "I will tell you more when we meet.",
            "I will tell you more when we meet",
          ],
          hint: "В половине со словом when ставь настоящее время.",
          why:
            "I'll tell you more when I meet you. Годится и when we meet: обе записи " +
            "верны, и обе принимаются.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nadeyus-ponravitsya",
      title: "Надеюсь: I hope you like it",
      estimatedMinutes: 13,
      outcome: "говорить о надежде: I hope you like it",

      blocks: [
        {
          id: "zachem-govorit-o-nadezhde",
          kind: "explain",
          text: [
            "Дана дарит книгу и хочет пожелать, чтобы она понравилась.",
            "По-английски это I hope you like it.",
            "Речь о том, что ещё впереди, а после hope идёт обычная строка настоящего времени.",
          ],
        },
        {
          id: "chto-idet-posle-hope",
          kind: "table",
          caption: "Что идёт после I hope",
          zvuchat: [
            "I hope you like it.",
            "I hope you enjoy the journey.",
            "I hope the delay finishes soon.",
            "I hope the shops open at nine tomorrow.",
          ],
          head: ["Запись", "Почему такое окончание"],
          rows: [
            ["I hope you like it.", "you — не третье лицо"],
            ["I hope you enjoy the journey.", "you — не третье лицо"],
            ["I hope the delay finishes soon.", "задержка одна, это it"],
            ["I hope the shops open at nine tomorrow.", "магазинов несколько, это they"],
          ],
        },
        {
          id: "okonchanie-posle-hope",
          kind: "explain",
          text: [
            "После I hope идёт обычная строка настоящего времени.",
            "Окончание в ней живёт по правилу лица: you like, но the delay finishes.",
            "Оборот I hope годится и в письме, и в разговоре.",
          ],
        },
        {
          id: "hope-i-pozhelanie",
          kind: "note",
          tone: "info",
          text:
            "По-русски I hope you enjoy the journey — это «надеюсь, поездка " +
            "понравится».\n\nПо-английски глагол там стоит в настоящем времени, хотя " +
            "речь о будущем.",
        },
        {
          id: "pozhelaniya-v-pisme",
          kind: "example",
          caption: "Пожелания в письме",
          zvuchat: [
            "I hope you enjoy the journey.",
            "I hope the flight arrives at ten tomorrow.",
            "I hope the total is not too big.",
            "I hope you like the new bookshop: it opened recently and the timetable there is simple.",
          ],
          text:
            "I hope you enjoy the journey.\nI hope the flight arrives at ten tomorrow.\nI hope the total is not too big.\nI hope you like the new bookshop: it opened recently and the timetable there is simple.",
          explain:
            "Четыре строки. После I hope везде стоит настоящее время. Окончание же " +
            "зависит от лица: you enjoy без него, а the flight arrives с ним.\n\nВ " +
            "четвёртой строке после двоеточия идёт уже другая мысль, не о надежде: " +
            "opened — обычное прошедшее время.",
        },
        {
          id: "slovar-pozhelaniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "total", translation: "итог, общая сумма", example: "I hope the total is not too big.", hint: "/ˈtəʊtl/" },
            { term: "simple", translation: "простой", example: "The timetable there is simple.", hint: "/ˈsɪmpl/" },
            { term: "recently", translation: "недавно", example: "It opened recently and the timetable there is simple.", hint: "/ˈriːsəntli/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-posle-hope",
          kind: "gap",
          prompt: "Пожелай, чтобы поездка понравилась. Допиши глагол, который стоит в примере урока.",
          before: "I hope you ",
          after: " the journey.",
          answer: "enjoy",
          accept: ["like"],
          hint: "После hope глагол стоит в настоящем времени.",
          why:
            "I hope you enjoy the journey. Годится и like: обе записи верны, и обе " +
            "принимаются. Окончания у обеих нет, потому что you — не третье лицо.",
        },
        {
          id: "z2-vybrat-okonchanie-posle-hope",
          kind: "choice",
          prompt: "Пожелай, чтобы рейс прибыл завтра в десять. Какая запись верна?",
          options: [
            { text: "I hope the flight arrive at ten tomorrow." },
            { text: "I hope the flight arrives at ten tomorrow.", correct: true },
            { text: "I hope the flight arriving at ten tomorrow." },
          ],
          hint: "Рейс — это it, и глагол берёт окончание.",
          why:
            "I hope the flight arrives at ten tomorrow. Рейс заменяется словом it, и " +
            "потому окончание -s.",
        },
        {
          id: "z3-otmetit-vernye-pozhelaniya",
          kind: "hottext",
          prompt: "Отметь записи, где окончание после hope выбрано верно.",
          parts: [
            { text: "I hope you like it", selectable: true, correct: true },
            { text: " · " },
            { text: "I hope the delay finish soon", selectable: true },
            { text: " · " },
            { text: "I hope the shops open at nine", selectable: true, correct: true },
            { text: " · " },
            { text: "I hope the flight arrive on Monday", selectable: true },
          ],
          hint: "Замени каждое начало местоимением: you, it, they, it.",
          why:
            "Верны I hope you like it и I hope the shops open at nine. Задержка и " +
            "рейс — это it, и там нужно окончание -s.",
        },
        {
          id: "z4-ispravit-okonchanie-posle-hope",
          kind: "short",
          prompt: "Окончание пропало. Исправь и запиши целиком: «I hope the delay finish soon.»",
          answer: "I hope the delay finishes soon.",
          accept: ["I hope the delay finishes soon"],
          hint: "Задержка одна — это it.",
          why:
            "I hope the delay finishes soon. Задержка заменяется словом it, и потому " +
            "у глагола окончание -s.",
        },
        {
          id: "z5-napisat-pozhelanie",
          kind: "short",
          prompt:
            "Пожелай по-английски, чтобы собеседнику понравился новый книжный магазин. Начни с I hope you.",
          answer: "I hope you like the new bookshop.",
          accept: ["I hope you like the new bookshop", "I hope you enjoy the new bookshop.", "I hope you enjoy the new bookshop"],
          hint: "После hope ставь настоящее время.",
          why:
            "I hope you like the new bookshop. Годится и enjoy. Окончания нет, потому " +
            "что you — не третье лицо.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-raspisanie",
      title: "Читаем заметку о новом поезде",
      estimatedMinutes: 13,
      outcome: "находить нужное время в заметке о поезде",

      blocks: [
        {
          id: "zachem-chitat-raspisanie",
          kind: "explain",
          text: [
            "Дана едет к морю и читает на сайте вокзала заметку о новом поезде.",
            "Такой текст не читают подряд: в нём ищут одну строку.",
            "Ниже эта заметка, и вопросы будут о времени и о цене.",
          ],
        },
        {
          id: "zametka-o-poezde",
          kind: "text",
          title: "Новый поезд до порта",
          genre: "article",
          body: [
            "The new direct train to the port starts on Monday. It leaves the station at six in the morning and arrives at ten.",
            "The journey takes four hours, and the seats are comfortable. The train is quick, and it is never full.",
            "A single ticket costs less than the old one. A plane to the port costs more, and the taxi from the airport is slow.",
            "The train doesn't leave on Sunday. On Saturday the latest train leaves at midnight and arrives at four.",
            "The bookshop and the chemist at the station open at nine. The pool near the port opens at seven.",
          ],
          glossary: [
            { term: "to the port", translation: "до порта" },
            { term: "costs less than", translation: "стоит меньше, чем" },
            { term: "the old one", translation: "старый" },
          ],
        },
        {
          id: "kak-iskat-v-raspisanii",
          kind: "note",
          tone: "info",
          text:
            "Нужное сведение ищут по глаголам: leaves, arrives, opens, takes, " +
            "costs.\n\nРядом с ними и стоит нужное число или час.",
        },
        {
          id: "slovar-raspisaniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "single", translation: "в один конец", example: "A single ticket costs less than the old one.", hint: "/ˈsɪŋgl/" },
            { term: "less", translation: "меньше", example: "A single ticket costs less than the old one.", hint: "/les/" },
            { term: "midnight", translation: "полночь", example: "On Saturday the latest train leaves at midnight.", hint: "/ˈmɪdnaɪt/" },
            { term: "latest", translation: "самый поздний", example: "On Saturday the latest train leaves at midnight.", hint: "/ˈleɪtəst/" },
            { term: "plane", translation: "самолёт", example: "A plane to the port costs more.", hint: "/pleɪn/" },
            { term: "taxi", translation: "такси", example: "The taxi from the airport is slow.", hint: "/ˈtæksi/" },
            { term: "slow", translation: "медленный", example: "The taxi from the airport is slow.", hint: "/sləʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vo-skolko-uhodit-poezd",
          kind: "short",
          about: "zametka-o-poezde",
          prompt: "Во сколько поезд уходит со станции по будням? Ответь одним английским словом.",
          answer: "six",
          accept: ["at six"],
          hint: "Час назван в первом абзаце, сразу после слова leaves.",
          why: "It leaves the station at six in the morning and arrives at ten.",
        },
        {
          id: "z2-v-kakoy-den-net-poezda",
          kind: "short",
          about: "zametka-o-poezde",
          prompt: "В какой день поезда нет? Ответь одним английским словом.",
          answer: "Sunday",
          accept: ["on Sunday"],
          hint: "Об этом сказано в четвёртом абзаце, в записи с doesn't.",
          why: "The train doesn't leave on Sunday.",
        },
        {
          id: "z3-skolko-dlitsya-poezdka",
          kind: "choice",
          about: "zametka-o-poezde",
          prompt: "Сколько длится поездка?",
          options: [
            { text: "Два часа" },
            { text: "Четыре часа", correct: true },
            { text: "Шесть часов" },
          ],
          hint: "Об этом сказано во втором абзаце, после слова takes.",
          why: "The journey takes four hours.",
        },
        {
          id: "z4-otmetit-vremya-otkrytiya",
          kind: "hottext",
          about: "zametka-o-poezde",
          prompt: "Отметь строки, где сказано, во сколько что-то открывается.",
          parts: [
            { text: "The bookshop and the chemist at the station open at nine", selectable: true, correct: true },
            { text: " · " },
            { text: "The journey takes four hours", selectable: true },
            { text: " · " },
            { text: "The pool near the port opens at seven", selectable: true, correct: true },
            { text: " · " },
            { text: "A single ticket costs less than the old one", selectable: true },
          ],
          hint: "Ищи глагол open или opens.",
          why:
            "Строк две. Первая — The bookshop and the chemist at the station open at " +
            "nine. Вторая — The pool near the port opens at seven.",
        },
        {
          id: "z5-chem-otlichaetsya-subbota",
          kind: "choice",
          about: "zametka-o-poezde",
          prompt: "Чем суббота отличается от будней?",
          options: [
            { text: "Поезд идёт дольше" },
            { text: "Поезд уходит в полночь", correct: true },
            { text: "Поезд не идёт совсем" },
          ],
          hint: "Об этом сказано в четвёртом абзаце, после слов On Saturday.",
          why: "On Saturday the latest train leaves at midnight and arrives at four.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-obyavlenie",
      title: "Слушаем объявление на вокзале",
      estimatedMinutes: 13,
      outcome: "слышать в объявлении время и место",

      blocks: [
        {
          id: "zachem-slushat-obyavlenie",
          kind: "explain",
          text: [
            "На вокзале расписание сообщают голосом, и повторяют его не всегда.",
            "Слушать надо четыре вещи: время отправления, путь, время прибытия и остановки.",
            "Ниже запись: объявление, а потом короткий разговор о нём.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-obyavleniya",
          kind: "audio",
          caption: "Объявление и разговор",
          pace: "slow",
          skryt: true,
          transcript:
            "Two trains per day leave for the port. The direct train leaves at ten " +
            "from platform four. — What time does it arrive? — At two. — And the next " +
            "one? — The next train leaves at midnight. It doesn't stop at the airport.",
        },
        {
          id: "chto-slushat-v-obyavlenii",
          kind: "note",
          tone: "info",
          text:
            "Слушай, во сколько уходит поезд, с какого пути, когда прибывает и где " +
            "не останавливается.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-vokzala",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "per", translation: "в, за", example: "Two trains per day leave for the port.", hint: "/pɜː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vo-skolko-uhodit-pryamoy",
          kind: "short",
          about: "zapis-obyavleniya",
          prompt: "Во сколько уходит прямой поезд? Ответь одним английским словом.",
          answer: "ten",
          accept: ["at ten"],
          hint: "Час назван во второй строке объявления.",
          why: "The direct train leaves at ten from platform four.",
        },
        {
          id: "z2-s-kakogo-puti",
          kind: "short",
          about: "zapis-obyavleniya",
          prompt: "С какого пути уходит прямой поезд? Ответь одним английским словом.",
          answer: "four",
          accept: ["platform four", "from platform four"],
          hint: "Путь назван в конце второй строки, после слова platform.",
          why: "The direct train leaves at ten from platform four.",
        },
        {
          id: "z3-vosstanovit-uslyshannoe-raspisanie",
          kind: "order",
          zvuk: "The direct train leaves at ten from platform four.",
          prompt: "Послушай и собери фразу из услышанного.",
          items: ["from platform four.", "at ten", "leaves", "The direct train"],
          answer: [3, 2, 1, 0],
          hint: "Слушай, что человек назвал раньше — час или путь.",
          why:
            "The direct train leaves at ten from platform four. Час назван раньше " +
            "пути, и услышать это можно только по записи.",
        },
        {
          id: "z4-vo-skolko-pribyvaet",
          kind: "short",
          about: "zapis-obyavleniya",
          prompt: "Во сколько прямой поезд прибывает? Ответь одним английским словом.",
          answer: "two",
          accept: ["at two"],
          hint: "Ответ звучит третьей репликой.",
          why: "What time does it arrive? — At two.",
        },
        {
          id: "z5-ostanavlivaetsya-li-v-aeroportu",
          kind: "choice",
          about: "zapis-obyavleniya",
          prompt: "Останавливается ли ночной поезд в аэропорту?",
          options: [
            { text: "Да" },
            { text: "Нет", correct: true },
            { text: "В записи об этом не сказано" },
          ],
          hint: "Об этом сказано последними словами записи.",
          why: "It doesn't stop at the airport.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-zapisku-s-raspisaniem",
      title: "Пишем записку с расписанием",
      estimatedMinutes: 15,
      outcome: "проверять записку: у каждого дела названо время",

      blocks: [
        {
          id: "zachem-proveryat-zapisku",
          kind: "explain",
          text: [
            "Алим оставил Дане записку о завтрашней поездке и просит её проверить.",
            "В записке с расписанием час пропускают чаще, чем ошибаются в окончании.",
            "Проверить можно так: у каждого дела найди час.",
            "Если часа нет, читателю придётся переспрашивать, а записка для того и пишется, чтобы не переспрашивать.",
          ],
        },
        {
          id: "est-li-chas-u-dela",
          kind: "table",
          caption: "Есть ли у дела час",
          zvuchat: [
            "The plane leaves at six tomorrow",
            "The chemist opens at nine",
            "The bookshop opens",
          ],
          head: ["Строка", "Час", "Годится"],
          rows: [
            ["The plane leaves at six tomorrow", "at six", "да"],
            ["The chemist opens at nine", "at nine", "да"],
            ["The bookshop opens", "нет", "нет: непонятно, когда"],
          ],
        },
        {
          id: "pochemu-proverka-po-chasu",
          kind: "explain",
          text: [
            "Пропущенный час глазами не поймать: строка при этом выглядит верной.",
            "Поэтому сначала проверяют час у каждого дела.",
            "Вторым шагом смотрят на окончание: у he, she, it оно есть, у прочих нет.",
            "Пожелание в конце — не дело, и часа ему не нужно.",
          ],
        },
        {
          id: "obrazets-zapiski",
          kind: "example",
          caption: "Образец записки",
          zvuchat: [
            "Hi Dana! The plane leaves at six tomorrow, so the taxi comes at four.",
            "The change at the port takes at least an hour.",
            "The chemist at the airport doesn't open before nine.",
            "I'll call you when I arrive. I hope you enjoy the journey!",
          ],
          text:
            "Hi Dana! The plane leaves at six tomorrow, so the taxi comes at four.\nThe change at the port takes at least an hour.\nThe chemist at the airport doesn't open before nine.\nI'll call you when I arrive. I hope you enjoy the journey!",
          explain:
            "Четыре строки. У каждого дела назван свой час, а в последней строке " +
            "стоят оба оборота модуля: половина со словом when и I hope.",
        },
        {
          id: "chto-proverit-v-zapiske",
          kind: "note",
          tone: "info",
          text:
            "Проверь четыре вещи.\n\nУ каждого дела назван час. Окончание глагола " +
            "выбрано по лицу. В половине со словом when нет будущего. В записке есть " +
            "пожелание.\n\nЕсли строку пришлось переписать, проверь её заново с начала.",
        },
        {
          id: "slovar-zapiski",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "least", translation: "at least — по крайней мере", example: "The change at the port takes at least an hour.", hint: "/liːst/" },
            { term: "before", translation: "раньше, до", example: "The chemist doesn't open before nine.", hint: "/bɪˈfɔː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nayti-stroku-bez-chasa",
          kind: "hottext",
          prompt: "Отметь строки, где час не назван.",
          parts: [
            { text: "The bookshop opens", selectable: true, correct: true },
            { text: " · " },
            { text: "The plane leaves at six tomorrow", selectable: true },
            { text: " · " },
            { text: "The taxi comes", selectable: true, correct: true },
            { text: " · " },
            { text: "The chemist opens at nine", selectable: true },
          ],
          hint: "Ищи час: at six, at nine.",
          why:
            "Часа нет в The bookshop opens и The taxi comes. В двух других строках " +
            "стоят at six и at nine.",
        },
        {
          id: "z2-dopisat-chas-v-stroku",
          kind: "short",
          prompt:
            "В записке строка «The bookshop opens.» Допиши час — в девять — и запиши строку целиком.",
          answer: "The bookshop opens at nine.",
          accept: ["The bookshop opens at nine"],
          hint: "Час ставят в конце строки со словом at.",
          why:
            "The bookshop opens at nine. Названный час и делает строку понятной " +
            "читателю.",
        },
        {
          id: "z3-vybrat-vernuyu-stroku-zapiski",
          kind: "choice",
          prompt: "Какая строка записки записана верно?",
          options: [
            { text: "I'll call you when I will arrive." },
            { text: "I'll call you when I arrive.", correct: true },
            { text: "I call you when I will arrive." },
          ],
          hint: "Слово will стоит только в главной половине.",
          why:
            "I'll call you when I arrive. В половине со словом when будущего не " +
            "ставят, а в главной половине will нужен.",
        },
        {
          id: "z4-napisat-zapisku",
          kind: "essay",
          prompt:
            "Напиши записку о завтрашней поездке четырьмя строками. Назови час отправления, длину пути, одно место с часом открытия и пожелание.",
          minWords: 16,
          sample:
            "Hi Dana! The plane leaves at six tomorrow, so the taxi comes at four.\nThe change at the port takes at least an hour.\nThe chemist at the airport doesn't open before nine.\nI'll call you when I arrive. I hope you enjoy the journey!",
          checklist: [
            "у каждого дела назван час",
            "окончание глагола выбрано по лицу",
            "в половине со словом when нет будущего",
            "в записке есть пожелание",
          ],
          hint: "Бери глаголы, которые знаешь: leave, arrive, open, close, take, start.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы у каждого дела был " +
            "назван час.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: перенести на другое
      // лицо, назвать причину окончания, собрать вопрос по ответу, прочитать
      // заметку, ответить по записи.

      // ---- итог 1 ----
      {
        id: "q-perenesti-na-drugoe-lico",
        kind: "short",
        outcome: "называть время по расписанию: The train leaves at six tomorrow",
        prompt:
          "О себе говорят так: «I arrive at ten on Monday.» Скажи то же о самолёте, начав с The plane.",
        answer: "The plane arrives at ten on Monday.",
        accept: ["The plane arrives at ten on Monday"],
        why:
          "The plane arrives at ten on Monday. Самолёт заменяется словом it, а у it " +
          "окончание есть.",
      },
      {
        id: "q-pochemu-net-okonchaniya",
        kind: "choice",
        outcome: "называть время по расписанию: The train leaves at six tomorrow",
        prompt: "Почему в записи «We arrive at ten tomorrow» у глагола нет окончания?",
        options: [
          { text: "Потому что речь о завтрашнем дне" },
          { text: "Потому что we — не третье лицо", correct: true },
          { text: "Потому что поезд один" },
        ],
        why:
          "Окончание -s появляется только у he, she, it. Слово we к ним не " +
          "относится.",
      },

      // ---- итог 2 ----
      {
        id: "q-ubrat-lishnee-okonchanie",
        kind: "short",
        outcome: "говорить, чего в расписании нет: The chemist doesn't open on Sunday",
        prompt:
          "Окончание стоит дважды. Исправь и запиши целиком: «The taxi doesn't comes at four.»",
        answer: "The taxi doesn't come at four.",
        accept: ["The taxi doesn't come at four"],
        why:
          "The taxi doesn't come at four. Окончание уже стоит у doesn't, и глаголу " +
          "оно не нужно.",
      },
      {
        id: "q-dont-ili-doesnt",
        kind: "gap",
        outcome: "говорить, чего в расписании нет: The chemist doesn't open on Sunday",
        prompt: "Речь о нескольких самолётах. Допиши пропущенное слово.",
        before: "The planes ",
        after: " leave on Sunday.",
        answer: "don't",
        accept: ["do not"],
        why:
          "The planes don't leave on Sunday. Несколько вещей — это they, и потому " +
          "don't.",
      },

      // ---- итог 3 ----
      {
        id: "q-vopros-k-otvetu-o-vremeni",
        kind: "short",
        outcome: "спрашивать о расписании и коротко отвечать",
        prompt:
          "Собеседник ответил: «At seven.» Задай вопрос об открытии бассейна, начав с What time.",
        answer: "What time does the pool open?",
        accept: ["What time does the pool open"],
        why:
          "What time does the pool open? Бассейн — это it, значит does, а глагол " +
          "теряет окончание.",
      },
      {
        id: "q-korotkiy-otvet-o-samolyotah",
        kind: "short",
        outcome: "спрашивать о расписании и коротко отвечать",
        prompt:
          "У тебя спросили: «Do the planes leave at midnight?» Самолёты улетают в полночь. Ответь коротко — да.",
        answer: "Yes, they do.",
        accept: ["Yes, they do"],
        why: "Yes, they do. Самолётов несколько, и вместо них встаёт they.",
      },

      // ---- итог 4 ----
      {
        id: "q-ubrat-budushchee-iz-poloviny-s-when",
        kind: "short",
        outcome: "связывать два дела словом when: I'll call you when I arrive",
        prompt:
          "Одно слово здесь лишнее. Исправь и запиши целиком: «We'll leave when the shop will close.»",
        answer: "We'll leave when the shop closes.",
        accept: [
          "We'll leave when the shop closes",
          "We will leave when the shop closes.",
          "We will leave when the shop closes",
        ],
        why:
          "We'll leave when the shop closes. В половине со словом when будущего не " +
          "ставят, и глагол берёт окончание -s: магазин — это it.",
      },
      {
        id: "q-sobrat-obeshchanie",
        kind: "order",
        outcome: "связывать два дела словом when: I'll call you when I arrive",
        prompt: "Собери строку: мы уедем, когда прибудет международный рейс.",
        items: ["arrives.", "when the international flight", "leave", "We'll"],
        answer: [3, 2, 1, 0],
        why:
          "We'll leave when the international flight arrives. Главная половина идёт " +
          "первой, а в половине со словом when стоит настоящее время.",
      },

      // ---- итог 5 ----
      {
        id: "q-napisat-pozhelanie-o-magazine",
        kind: "short",
        outcome: "говорить о надежде: I hope you like it",
        prompt:
          "Пожелай по-английски, чтобы магазины завтра открылись в девять. Начни с I hope.",
        answer: "I hope the shops open at nine tomorrow.",
        accept: ["I hope the shops open at nine tomorrow"],
        why:
          "I hope the shops open at nine tomorrow. Магазинов несколько — это they, и " +
          "окончания у глагола нет.",
      },
      {
        id: "q-pochemu-okonchanie-posle-hope",
        kind: "choice",
        outcome: "говорить о надежде: I hope you like it",
        prompt:
          "Почему в записи «I hope the delay finishes soon» у глагола есть окончание?",
        options: [
          { text: "Потому что задержка одна — это it", correct: true },
          { text: "Потому что перед ним стоит hope" },
          { text: "Потому что речь о будущем" },
        ],
        why:
          "После hope окончание живёт по обычному правилу лица: задержка — это it, и " +
          "потому -s.",
      },

      // ---- итог 6 ----
      {
        id: "q-zametka-skolko-stoit",
        kind: "choice",
        outcome: "находить нужное время в заметке о поезде",
        prompt:
          "В заметке написано: «A single ticket costs less than the old one.» Что из этого видно?",
        options: [
          { text: "Билет в один конец стал дороже" },
          { text: "Билетов в один конец больше нет" },
          { text: "Билет в один конец стал дешевле", correct: true },
        ],
        why: "costs less — стоит меньше, значит дешевле прежнего.",
      },
      {
        id: "q-zametka-v-subbotu",
        kind: "short",
        outcome: "находить нужное время в заметке о поезде",
        prompt:
          "В заметке: «On Saturday the latest train leaves at midnight and arrives at four.» Запиши одним английским словом время прибытия.",
        answer: "four",
        accept: ["at four"],
        why: "Время отправления — midnight, прибытия — four. Нужно второе.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-s-kakogo-puti",
        kind: "short",
        outcome: "слышать в объявлении время и место",
        zvuk: "The train to the airport leaves at nine from platform two.",
        prompt: "Послушай и запиши одним английским словом, с какого пути уходит поезд.",
        answer: "two",
        accept: ["platform two", "from platform two"],
        why: "The train to the airport leaves at nine from platform two.",
      },
      {
        id: "q-na-sluh-gde-ostanovka",
        kind: "short",
        outcome: "слышать в объявлении время и место",
        zvuk: "Does this train stop at the port? — No, it doesn't. It stops at the theatre.",
        prompt: "Послушай и запиши одним английским словом, где поезд останавливается.",
        answer: "theatre",
        accept: ["the theatre", "at the theatre"],
        why:
          "Названы два места: в порту не останавливается, а останавливается у " +
          "theatre. Нужно второе.",
      },

      // ---- итог 8 ----
      {
        id: "q-zapiska-chego-ne-hvataet",
        kind: "choice",
        outcome: "проверять записку: у каждого дела названо время",
        prompt: "В записке строка «The pool opens.» Чего в ней не хватает?",
        options: [
          { text: "Окончания у глагола" },
          { text: "Слова doesn't" },
          { text: "Часа", correct: true },
        ],
        why:
          "Грамматика здесь верна: бассейн — это it, окончание на месте. Не хватает " +
          "именно часа.",
      },
      {
        id: "q-zapiska-dopisat-chas",
        kind: "short",
        outcome: "проверять записку: у каждого дела названо время",
        prompt:
          "В записке строка «The taxi comes.» Допиши час — в четыре — и запиши строку целиком.",
        answer: "The taxi comes at four.",
        accept: ["The taxi comes at four"],
        why:
          "The taxi comes at four. Грамматика в строке была верна, не хватало именно " +
          "часа.",
      },
    ],
  },
};

export default module;
