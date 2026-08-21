import type { Module } from "@/lib/content/types";

/**
 * Модуль 9 курса «Английский · Elementary»: я сделаю.
 *
 * Программа: docs/programma-english-elementary.md, модуль 9 — `will`, `won't`;
 * отрицание и вопрос.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «ОБЕЩАНИЕ».
 *
 * Так и только так модуль зовёт то, о чём учит говорить: обещание — то, что
 * человек берётся сделать. Слов «будущее время», «план» и «намерение» в тексте
 * для ученика нет ни разу. Слово «намерение» держит модуль 8, и здесь его нет
 * нарочно: два соседних модуля с одним именем для разных вещей путают сильнее,
 * чем два разных имени.
 *
 * ПРОСЬБА И ГОТОВНОСТЬ — НЕ ВТОРЫЕ ИМЕНА ОБЕЩАНИЮ. Оговорка стоит здесь, чтобы
 * следующий проверяющий не прочитал их так. Уроки 4 и 5 говорят о других делах:
 * урок 4 — о просьбе к собеседнику, урок 5 — о согласии третьего человека
 * помочь. Обещание даёт сам говорящий, просьбу обращают к другому, а готовность
 * помочь — это чужое согласие. Источник держит их тремя отдельными графами, и
 * модуль тоже.
 *
 * ЧЕМУ МОДУЛЬ УЧИТ, А ЧЕМУ НЕТ — САМОЕ ВАЖНОЕ МЕСТО.
 *
 * Программа звала этот модуль «Наверное, будет» и обещала «предсказывать и
 * обещать». Предсказание отсюда убрано, и это второй такой случай подряд: та же
 * ошибка нашлась в модуле 8, и оба раза её видно только при чтении примеров при
 * графах.
 *
 * English Grammar Profile ставит «FUTURE future simple (with will and shall),
 * USE: PREDICTIONS WITH 'WILL'» на B1 — «Can use 'will' and ''ll' to make
 * predictions», пример источника «It will be hotter because of global warming».
 * На A2 и ниже стоят другие работы того же слова: обещание, отрицание, вопрос,
 * просьба, готовность помочь. Их модуль и берёт.
 *
 * Значит записи вида `It will rain tomorrow` в модуле нет нигде. Запрета на неё
 * тоже нет нигде: ни одно задание не объявляет такую строку ошибкой. Выше
 * ступени стоит не сама запись, а её употребление ради предсказания.
 *
 * ОСТОРОЖНО, ЗДЕСЬ НЕЛЬЗЯ СКАЗАТЬ «ПРЕДСКАЗАНИЙ НЕТ НИ ОДНОГО». Первая редакция
 * шапки так и говорила, и методист это опроверг её же текстом: строки `The bus
 * won't be delayed` и `Don't worry, it won't matter` о деле говорящего не
 * сообщают ничего. Ступени они при этом не превышают, и опору назвал он же:
 * `MODALITY, will, A2, FORM: NEGATIVE` держит примером «Don't worry, you won't
 * need anything apart from some pencils…» — то есть источник сам показывает
 * `won't` в заверении о будущем. Такие строки в модуле есть, их две, и обе
 * стоят там, где успокаивают собеседника. Чего нет — так это предсказаний как
 * предмета урока: ни правила, ни задания о них.
 *
 * СЛОВА `SHALL` В МОДУЛЕ НЕТ. Источник держит его на A2 («FORM: AFFIRMATIVE
 * 'SHALL'», «USE: OFFERS WITH 'SHALL'», «USE: SUGGESTIONS WITH 'SHALL'»), но
 * программа отдала предложение помощи и приглашение модулю 12 («Давай я»), и
 * место ему там.
 *
 * СРАВНЕНИЯ С `BE GOING TO` ЗДЕСЬ НЕТ. Программа поручает сравнение модулю 10,
 * и раньше времени оно только мешает: ученик прошёл оборот going to одним
 * модулем раньше и ещё не пользуется им свободно.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A1, FUTURE future simple, «FORM: AFFIRMATIVE
 *    'WILL'» — «Can use the affirmative forms 'will' and ''ll'», пример
 *    источника «I will see you soon». Это урок 1, вместе с краткой записью.
 *
 * 2. English Grammar Profile, A1, там же, «USE: PLANS AND INTENTIONS WITH
 *    'WILL'» — «Can use 'will' and ''ll' to talk about plans and intentions»,
 *    пример «I will try to come to see you tomorrow». Это урок 1.
 *
 * 3. English Grammar Profile, A2, там же, «FORM: NEGATIVE 'WILL'» — «Can use
 *    the negative forms 'will not' and 'won't'», пример «Without them I will
 *    not be able to play football». Это урок 2.
 *
 * 4. English Grammar Profile, A2, там же, «FORM: QUESTIONS» — «Can use the
 *    question forms of 'will' and 'shall'», пример «Will you come?». И рядом
 *    «USE: PLANS AND INTENTIONS WITH 'WILL'» на A2 — «Can use 'will' to ask
 *    about plans and intentions», пример «Will you have a mobile phone?». Это
 *    урок 3.
 *
 * 5. English Grammar Profile, A2, там же, «USE: REQUESTS WITH 'WILL'» — «Can
 *    use 'will' to make requests», пример «Will you come tomorrow at 6.35 pm to
 *    my house?». Это урок 4.
 *
 *    ПРИМЕР ЭТОЙ ГРАФЫ ВАЖЕН ОТДЕЛЬНО. Он ничем не отличается по записи от
 *    вопроса о намерении: та же строка, что и в пункте 4. Значит различать их
 *    записью нельзя, и модуль этого не требует — он говорит прямо, что одна и
 *    та же запись работает и вопросом, и просьбой, а понимают по случаю.
 *
 *    ПРИЗНАК, ПО КОТОРОМУ УРОК 4 ОЦЕНИВАЕТ, — НАШ, А НЕ ИСТОЧНИКА. Задания
 *    смотрят на два заметных слова в строке: `me` (или `my`) и `please`. Первая
 *    редакция оценивала по выдуманному признаку «дело нужно самому говорящему»,
 *    и методист снял его: в источнике такого различения нет вовсе, а примеры
 *    обеих граф отличаются друг от друга ничем.
 *
 *    Она же выбросила из таблицы строку `Will you come on Friday?`, стоявшую
 *    там с пометой «спрашивают». Обе графы источника — `FUTURE … USE: REQUESTS
 *    WITH 'WILL'` («Will you come tomorrow at 6.35 pm to my house?») и
 *    `MODALITY, will, A2, USE: REQUESTS` («Will you come with me?») — берут
 *    «Will you come…» образцовой ПРОСЬБОЙ. Модуль объявлял её не-просьбой, да
 *    ещё и сам давал её приглашением в уроке 3.
 *
 * 6. English Grammar Profile, A2, там же, «USE: WILLINGNESS WITH 'WILL'» —
 *    «Can use 'will' to express willingness», пример «My mother will drive us
 *    there». Это урок 5. Ту же вещь держит вторая графа того же уровня —
 *    `MODALITY, will, A2, «USE: WILLINGNESS, OFFERS»`: «Can use 'will' to talk
 *    about willingness and offers», пример «My mother will get us there…».
 *    Обе строки её нашёл методист; первая редакция знала только одну.
 *
 *    ОТСЮДА ЖЕ РАСХОЖДЕНИЕ С ПРОГРАММОЙ, которое надо назвать прямо. Строка
 *    программы для модуля 12 звучит так: «shall I, shall we; will при
 *    готовности помочь». То есть урок 5 этого модуля программа отдавала
 *    двенадцатому. Молчаливого захвата быть не должно, и потому строки
 *    программы для модулей 9 и 12 поправлены, а основание записано там же:
 *    источник держит готовность и предложение помощи В ОДНОЙ графе одного
 *    уровня, значит разводить их по модулям — решение, а не выписка. Здесь
 *    остаётся `will` (готовность), в модуле 12 — `shall` (предложение и
 *    приглашение).
 *
 * 7. Описания Совета Европы, с. 79, шкала Information exchange, графа A2: «Can
 *    ask and answer questions about plans and intentions». Отсюда короткий
 *    ответ в уроке 3 стоит рядом с вопросом, а не отдельно. Той же строкой
 *    держится и сам короткий ответ `No, I won't`: отрицания оборота у него нет,
 *    он обрывается сразу после will.
 *
 * 8. Описания Совета Европы, с. 55, шкала Reading correspondence, графа A2:
 *    «Can understand short, simple personal letters». Это урок 6.
 *
 * 9. Описания Совета Европы, с. 84, шкала Notes, messages and forms, графа A2:
 *    «Can formulate short, simple notes and messages relating to matters in
 *    areas of immediate need». Это урок 8 — короткое сообщение о договорённости.
 *
 * 10. Руководство Cambridge A2 Key, с. 29, раздел THE TASK: «The candidates
 *     should only write ONE word, or a number, or a date, or a time for their
 *     answer». Поэтому ответы на вопросы к записи в уроке 7 односложные.
 *
 * ЖАНР ЧТЕНИЯ И ПИСЬМА — СООБЩЕНИЕ, а не объявление. Модуль 8 давал объявления,
 * и повторять их подряд незачем: ученик читает одно и то же строение второй раз
 * и не узнаёт нового. Раскладка видов заданий (docs/vidy-zadaniy.md) называет
 * «три объявления, семь вопросов» видом, который появляется со второй части, а
 * не единственным видом чтения в ней.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать четыре карточки, из них тридцать несут слово,
 * которого на прошлой ступени не было.
 *
 *    Oxford 3000 помечает A2: promise, ring, reply, arrange, matter, shut,
 *    manage, catch, hold, seem, several, lend, mind, sign, helpful,
 *    allow, usual, anyway, actually, sheet, wish, suppose, whole, clear,
 *    collect, repair.
 *
 *    Oxford 3000 помечает выше A2, а словник A2 Key содержит: bother (B1),
 *    glad (B1).
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: delayed,
 *    notebook.
 *
 *    Oxford 3000 помечает A1, и потому новыми они не считаются: soon, sure,
 *    forget, post. Взяты потому, что курс не давал их карточкой ни разу нигде.
 *
 *    ГЛАГОЛ «ОТПРАВИТЬ ПОЧТОЙ» — `POST`, А НЕ `MAIL`. Первая редакция взяла
 *    `mail`, и методист указал на две вещи сразу: словник A2 Key даёт `mail
 *    (n)` только существительным, а `post (v & n)` — и глаголом тоже; и
 *    британская норма курса (решение владельца: `flat`, `lift`, `autumn`) велит
 *    здесь `post`. Пометок разновидности языка наши источники не содержат, но
 *    решение владельца о британской норме стоит давно, и нового решения тут не
 *    нужно.
 *
 *    Слова promise, reply Oxford 3000 держит на A2, а словник A2 Key их не
 *    содержит. Правило ступени принимает любое из двух оснований.
 *
 *    КАЖДАЯ КАРТОЧКА РАБОТАЕТ В МОДУЛЕ и стоит в том уроке, где слово впервые
 *    встречается. Проверяет это `npm run check:content` — проверка написана
 *    после модуля 8, где четыре карточки не встречались нигде, кроме себя.
 *
 *    СЛОВА-ПОДПОРКИ: call, come, help, meet, bring, buy, send, wait, work,
 *    home, house, door, window, bag, book, key, car, bus, train, station, shop,
 *    money, time, day, evening, night, tomorrow, tonight, late, early, free,
 *    busy, sorry, please, brother, sister, friend, parents — все A1 по Oxford
 *    3000. Плюс слова прошлых модулей этой же ступени: colleague, appointment,
 *    calendar, notice, tickets.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного. В уроке 1 — выбор формы из модуля 8,
 * урок 1: там форма перед going to меняется по лицу, а здесь will не меняется
 * никогда, и разница видна сразу. В уроке 3 — короткий отрицательный ответ из
 * модуля 5, урок 2. Берутся ссылкой (`vozvrat`), устройство —
 * docs/format-uroka.md.
 */
const module: Module = {
  slug: "ya-sdelayu",
  title: "Я сделаю",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, FUTURE future simple (with will and shall), «FORM: AFFIRMATIVE " +
        "'WILL'»: «Can use the affirmative forms 'will' and ''ll'», пример " +
        "источника — «I will see you soon» — урок 1. " +
        "A1, там же, «USE: PLANS AND INTENTIONS WITH 'WILL'»: «Can use 'will' and " +
        "''ll' to talk about plans and intentions», пример — «I will try to come to " +
        "see you tomorrow» — урок 1. " +
        "A2, там же, «FORM: NEGATIVE 'WILL'»: «Can use the negative forms 'will " +
        "not' and 'won't'», пример — «Without them I will not be able to play " +
        "football» — урок 2. " +
        "A2, там же, «FORM: QUESTIONS»: «Can use the question forms of 'will' and " +
        "'shall'», пример — «Will you come?»; и «USE: PLANS AND INTENTIONS WITH " +
        "'WILL'» на A2: «Can use 'will' to ask about plans and intentions», пример " +
        "— «Will you have a mobile phone?» — урок 3. " +
        "A2, там же, «USE: REQUESTS WITH 'WILL'»: «Can use 'will' to make " +
        "requests», пример — «Will you come tomorrow at 6.35 pm to my house?» — " +
        "урок 4. ПРИМЕР ЭТОЙ ГРАФЫ ВАЖЕН ОТДЕЛЬНО: он ничем не отличается по записи " +
        "от вопроса о намерении, и потому урок 4 говорит прямо, что одна и та же " +
        "запись работает и вопросом, и просьбой, а понимают по случаю. " +
        "A2, там же, «USE: WILLINGNESS WITH 'WILL'»: «Can use 'will' to express " +
        "willingness», пример — «My mother will drive us there» — урок 5. " +
        "ЧЕГО НЕТ. B1, там же, «USE: PREDICTIONS WITH 'WILL'»: «Can use 'will' and " +
        "''ll' to make predictions», пример «It will be hotter because of global " +
        "warming» — предсказаний в модуле нет ни одного, и записи вроде It will " +
        "rain tomorrow тоже. Запрета на неё нет нигде: выше ступени стоит не сама " +
        "запись, а её употребление ради предсказания. " +
        "ТАКЖЕ НЕТ SHALL: три графы A2 («FORM: AFFIRMATIVE 'SHALL'», «USE: OFFERS " +
        "WITH 'SHALL'», «USE: SUGGESTIONS WITH 'SHALL'») отданы программой модулю " +
        "12",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК 3. с. 79, шкала Information exchange, A2: «Can ask and answer " +
        "questions about plans and intentions» — источник называет обе стороны, и " +
        "потому короткий ответ стоит рядом с вопросом. Той же строкой держится и " +
        "сам ответ No, I won't. " +
        "УРОК 6, ЧТЕНИЕ. с. 55, шкала Reading correspondence, A2: «Can understand " +
        "short, simple personal letters». " +
        "УРОК 8, ПИСЬМО. с. 84, шкала Notes, messages and forms, A2: «Can formulate " +
        "short, simple notes and messages relating to matters in areas of immediate " +
        "need» — отсюда и жанр урока, и его размер. " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority… " +
        "provided people articulate clearly and slowly» — отсюда pace: \"slow\". " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на вопросы к записи здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: promise, ring, reply, arrange, matter, " +
        "shut, manage, catch, hold, seem, several, lend, mind, sign, helpful, " +
        "allow, usual, anyway, actually, sheet, wish, suppose, whole, clear, " +
        "collect, repair. " +
        "Выше A2 Oxford 3000 ставит два слова — bother (B1) и glad (B1), — а " +
        "словник A2 Key их содержит: по правилу ступени они в запасе и потому " +
        "взяты. " +
        "Слов delayed и notebook Oxford 3000 не содержит вовсе, а словник A2 Key " +
        "требует. " +
        "Слова soon, sure, forget и post Oxford 3000 помечает A1, и новыми они не " +
        "считаются; взяты потому, что курс не давал их карточкой ни разу нигде. " +
        "ГЛАГОЛ post, А НЕ mail: словник A2 Key даёт mail только существительным " +
        "(«mail (n)»), а post — и глаголом («post (v & n)»); плюс британская норма " +
        "курса. Первая редакция взяла mail, поправлено по разбору методиста. " +
        "Подпорки: call, come, help, meet, bring, buy, send, wait, work, home, " +
        "house, door, window, bag, book, key, car, bus, train, station, shop, " +
        "money, time, day, evening, night, today, tomorrow, tonight, late, early, " +
        "free, busy, sorry, please, of course, brother, sister, friend, parents — " +
        "все A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Из тридцати " +
        "четырёх карточек модуля словник содержит тридцать две. Двух слов — promise " +
        "и reply — в нём нет, и ступень им подтверждает Oxford 3000 (обоим A2): " +
        "правило ступени принимает любое из двух оснований. " +
        "Слово wish словник даёт существительным («wish (n)»), и карточка вводит " +
        "его так же — «пожелание», Best wishes. Первая редакция давала глагол и " +
        "оборот I wish you a good evening, который источниками не подтверждается; " +
        "поправлено по разбору методиста",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): promise /ˈprɒmɪs/, ring /rɪŋ/, " +
        "reply /rɪˈplaɪ/, arrange /əˈreɪndʒ/, delay /dɪˈleɪ/, delayed /dɪˈleɪd/, " +
        "matter /ˈmætə/, shut /ʃʌt/, bother /ˈbɒðə/, manage /ˈmænɪdʒ/, catch " +
        "/kætʃ/, hold /həʊld/, seem /siːm/, several /ˈsevrəl/, lend /lend/, mind " +
        "/maɪnd/, sign /saɪn/, helpful /ˈhelpfl/, soon /suːn/, post /pəʊst/, allow " +
        "/əˈlaʊ/, glad /glæd/, usual /ˈjuːʒuəl/, anyway /ˈeniweɪ/, actually " +
        "/ˈæktʃuəli/, sheet /ʃiːt/, wish /wɪʃ/, suppose /səˈpəʊz/, notebook " +
        "/ˈnəʊtbʊk/, whole /həʊl/, clear /klɪə/, forget /fəˈget/, sure /ʃɔː/. " +
        "Слов collect и repair словарь не содержит. Запись /kəˈlekt/ выведена из " +
        "третьего варианта materials/wikipron-en-uk.tsv (kəlɛkt); первый вариант " +
        "там даёт kɒlɛkt, и он не наш. Запись /rɪˈpeə/ словарной норме отвечает, но " +
        "из wikipron не выводится вовсе: все три варианта там (ɹiːpɛə̯, ɹəpeə, " +
        "ɹəpeː) дают в первом слоге не ɪ. Это уточнение приписано по разбору " +
        "методиста: прежняя запись называла выводом то, чего источник не даёт. " +
        "Так же поступил модуль 8 со словом entrance. " +
        "СВЕРХ ПЯТИ УСЛОВНОСТЕЙ КУРСА пять записей приведены к словарной норме, и " +
        "по одним условностям их не вывести: clear (источник /klˈiə/, у нас " +
        "/klɪə/), suppose (/sʌpˈəʊz/ → /səˈpəʊz/), usual (/jˈuːʒuːəl/ → " +
        "/ˈjuːʒuəl/), actually (/ˈæktʃuːəli/ → /ˈæktʃuəli/), anyway (/ˈɛnɪwˌeɪ/ → " +
        "/ˈeniweɪ/). Во всех пяти источник, собранный машиной, расходится со " +
        "словарями в безударном гласном, и взята словарная запись",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "обещать: I will call you tomorrow",
    "говорить, чего не сделаешь: I won't be late",
    "спрашивать словом will и коротко отвечать",
    "просить: Will you help me?",
    "говорить о чужой готовности помочь: My brother will drive us",
    "понимать переписку о договорённости",
    "слышать в записи, кто за что берётся и когда",
    "проверять сообщение: словарную форму после will",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "obeshchayu-sdelat",
      title: "Я сделаю: I will call you",
      estimatedMinutes: 15,
      outcome: "обещать: I will call you tomorrow",
      vozvrat: [{ iz: "ya-sobirayus", zadanie: "z2-vybrat-formu-dlya-dvoih" }],

      blocks: [
        {
          id: "zachem-obeshchat",
          kind: "explain",
          text: [
            "Алим не успел ответить на письмо и говорит другу, что сделает это завтра.",
            "По-английски это I will reply tomorrow.",
            "Так дают обещание — берутся что-то сделать.",
            "Сначала называют того, кто действует, потом идёт слово will, а за ним сам глагол.",
          ],
        },
        {
          id: "will-po-licam",
          kind: "table",
          caption: "Слово will при разных лицах",
          zvuchat: [
            "I will arrange it.",
            "You will arrange it.",
            "He will arrange it.",
            "She will arrange it.",
            "We will arrange it.",
            "They will arrange it.",
          ],
          head: ["Кто", "Запись"],
          rows: [
            ["I", "I will arrange it."],
            ["you", "You will arrange it."],
            ["he", "He will arrange it."],
            ["she", "She will arrange it."],
            ["we", "We will arrange it."],
            ["they", "They will arrange it."],
          ],
        },
        {
          id: "will-ne-menyaetsya",
          kind: "explain",
          text: [
            "Во всех шести строках стоит одно и то же слово — will.",
            "Оно не меняется ни при каком лице, и запоминать тут нечего.",
            "Глагол после will стоит в словарной форме — той, что записана в словаре.",
          ],
        },
        {
          id: "ne-pribavlyat-s-i-to",
          kind: "note",
          tone: "mistake",
          text:
            "«He will calls» и «He will to call» — так сказать нельзя.\n\nПосле will " +
            "глагол окончаний не берёт и слова to перед собой не ставит: He will call.",
        },
        {
          id: "kratkaya-zapis-will",
          kind: "table",
          caption: "Полная запись и краткая",
          zvuchat: [
            "I will ring you",
            "I'll ring you",
            "he will ring you",
            "he'll ring you",
            "we will ring you",
            "we'll ring you",
            "they will ring you",
            "they'll ring you",
          ],
          head: ["Полностью", "Кратко"],
          rows: [
            ["I will ring you", "I'll ring you"],
            ["he will ring you", "he'll ring you"],
            ["we will ring you", "we'll ring you"],
            ["they will ring you", "they'll ring you"],
          ],
        },
        {
          id: "chto-ostaetsya-ot-will",
          kind: "explain",
          text: [
            "В краткой записи от will остаются две буквы ll, а на месте убранных встаёт апостроф — значок '.",
            "Так выходит I'll, he'll, we'll, they'll — и точно так же you'll и she'll.",
            "Читается краткая запись одним слогом вместе с местоимением.",
          ],
        },
        {
          id: "obeshchanie-v-soobshchenii",
          kind: "example",
          caption: "Обещание в сообщении",
          zvuchat: [
            "I promise I will reply tomorrow.",
            "I'll ring you in the evening.",
            "My sister will collect the tickets.",
            "We'll arrange it before Friday.",
          ],
          text:
            "I promise I will reply tomorrow.\nI'll ring you in the evening.\nMy sister will collect the tickets.\nWe'll arrange it before Friday.",
          explain:
            "Четыре строки, и в каждой стоит will — то полностью, то кратко. Глагол " +
            "после него везде в словарной форме: reply, ring, collect, arrange.",
        },
        {
          id: "slovar-obeshchaniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "promise", translation: "обещать", example: "I promise I will reply tomorrow.", hint: "/ˈprɒmɪs/" },
            { term: "reply", translation: "ответить", example: "I promise I will reply tomorrow.", hint: "/rɪˈplaɪ/" },
            { term: "ring", translation: "позвонить", example: "I'll ring you in the evening.", hint: "/rɪŋ/" },
            { term: "collect", translation: "забрать", example: "My sister will collect the tickets.", hint: "/kəˈlekt/" },
            { term: "arrange", translation: "устроить, договориться", example: "We'll arrange it before Friday.", hint: "/əˈreɪndʒ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-will",
          kind: "gap",
          prompt: "Алим берётся ответить завтра. Допиши недостающее слово.",
          before: "I ",
          after: " reply tomorrow.",
          answer: "will",
          hint: "Это слово одно и то же при любом лице.",
          why: "I will reply tomorrow. Слово will не меняется ни при каком лице.",
        },
        {
          id: "z2-vybrat-slovarnuyu-formu",
          kind: "choice",
          prompt: "Брат берётся позвонить вечером. Какая запись верна?",
          options: [
            { text: "My brother will rings in the evening." },
            { text: "My brother will to ring in the evening." },
            { text: "My brother will ring in the evening.", correct: true },
          ],
          hint: "Смотри, что стоит сразу после will.",
          why:
            "My brother will ring in the evening. После will глагол окончаний не " +
            "берёт и слова to перед собой не ставит.",
        },
        {
          id: "z3-otmetit-obeshchaniya",
          kind: "hottext",
          prompt: "Отметь записи, где глагол после will стоит верно.",
          parts: [
            { text: "She will collect the tickets", selectable: true, correct: true },
            { text: " · " },
            { text: "He will replies tomorrow", selectable: true },
            { text: " · " },
            { text: "They will arrange it", selectable: true, correct: true },
            { text: " · " },
            { text: "We will to ring you", selectable: true },
          ],
          hint: "Ищи окончание -s и лишнее слово to.",
          why:
            "Верны She will collect the tickets и They will arrange it. В " +
            "двух других к глаголу приросло -s и добавилось лишнее to.",
        },
        {
          id: "z4-sobrat-obeshchanie",
          kind: "order",
          prompt: "Собери строку краткой записью: я позвоню тебе вечером.",
          items: ["in the evening.", "you", "ring", "I'll"],
          answer: [3, 2, 1, 0],
          hint: "Краткая запись начинается с I'll, дальше идёт глагол.",
          why:
            "I'll ring you in the evening. От will остались две буквы ll, и апостроф " +
            "занял место убранных.",
        },
        {
          id: "z5-napisat-obeshchanie",
          kind: "short",
          prompt: "Пообещай по-английски забрать билеты завтра. Начни с I will.",
          answer: "I will collect the tickets tomorrow.",
          accept: [
            "I will collect the tickets tomorrow",
            "I'll collect the tickets tomorrow.",
            "I'll collect the tickets tomorrow",
          ],
          hint: "После will ставь глагол в словарной форме.",
          why:
            "I will collect the tickets tomorrow. Слово will не меняется, а глагол " +
            "после него стоит в словарной форме.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-sdelayu",
      title: "Не сделаю: I won't be late",
      estimatedMinutes: 14,
      outcome: "говорить, чего не сделаешь: I won't be late",

      blocks: [
        {
          id: "zachem-govorit-chego-ne-sdelaesh",
          kind: "explain",
          text: [
            "Дана опаздывала в прошлый раз и хочет сказать, что теперь этого не будет.",
            "По-английски это I won't be late.",
            "Отрицание собирают из will и слова not.",
          ],
        },
        {
          id: "polnoe-i-szhatoe-otricanie",
          kind: "table",
          caption: "Отрицание: полностью и сжато",
          zvuchat: [
            "I will not be late",
            "I won't be late",
            "he will not be late",
            "he won't be late",
            "we will not be late",
            "we won't be late",
          ],
          head: ["Полностью", "Сжато"],
          rows: [
            ["I will not be late", "I won't be late"],
            ["he will not be late", "he won't be late"],
            ["we will not be late", "we won't be late"],
          ],
        },
        {
          id: "pochemu-wont-a-ne-willnt",
          kind: "explain",
          text: [
            "Сжатая запись will not выглядит неожиданно: won't, а не willn't.",
            "Гласная в ней меняется, и запомнить это придётся отдельно.",
            "Глагол после won't остаётся в словарной форме, как и после will: Don't worry, it won't matter.",
          ],
        },
        {
          id: "ne-willnt",
          kind: "note",
          tone: "mistake",
          text:
            "«I willn't be late» — так не пишет никто.\n\nСжатая запись у will not " +
            "одна: won't.",
        },
        {
          id: "chego-ne-budet",
          kind: "example",
          caption: "Чего не будет",
          zvuchat: [
            "I won't be late tomorrow.",
            "I won't bother you in the evening.",
            "I won't shut the door.",
            "Don't worry, the bus won't be delayed.",
          ],
          text:
            "I won't be late tomorrow.\nI won't bother you in the evening.\nI won't shut the door.\nDon't worry, the bus won't be delayed.",
          explain:
            "Четыре строки, и в каждой стоит won't. Глагол после него везде в " +
            "словарной форме: be, bother, shut, be. Первые три говорят о самом " +
            "говорящем, а четвёртая успокаивает собеседника.",
        },
        {
          id: "slovar-zaderzhek",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "delayed", translation: "задержан", example: "Don't worry, the bus won't be delayed.", hint: "/dɪˈleɪd/" },
            { term: "matter", translation: "иметь значение", example: "It won't matter.", hint: "/ˈmætə/" },
            { term: "shut", translation: "закрыть", example: "I won't shut the door.", hint: "/ʃʌt/" },
            { term: "bother", translation: "беспокоить", example: "I won't bother you in the evening.", hint: "/ˈbɒðə/" },
            { term: "forget", translation: "забыть", example: "I won't forget the tickets.", hint: "/fəˈget/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-wont",
          kind: "gap",
          prompt: "Дана говорит, что не опоздает. Допиши недостающее слово.",
          before: "I ",
          after: " be late tomorrow.",
          answer: "won't",
          accept: ["will not"],
          hint: "Сжатая запись will not пишется через o.",
          why: "I won't be late tomorrow. Сжатая запись у will not одна — won't.",
        },
        {
          id: "z2-vybrat-otricanie",
          kind: "choice",
          prompt: "Автобус сегодня не задержат. Какая запись верна?",
          options: [
            { text: "The bus won't be delayed.", correct: true },
            { text: "The bus willn't be delayed." },
            { text: "The bus won't delayed today." },
          ],
          hint: "Смотри и на сжатую запись, и на то, что стоит после неё.",
          why:
            "The bus won't be delayed. Записи willn't не бывает, а в третьей " +
            "строке пропало слово be.",
        },
        {
          id: "z3-otmetit-vernye-otricaniya",
          kind: "hottext",
          prompt: "Отметь верно записанные отрицания.",
          parts: [
            { text: "I won't bother you", selectable: true, correct: true },
            { text: " · " },
            { text: "He willn't come", selectable: true },
            { text: " · " },
            { text: "We will not shut the door", selectable: true, correct: true },
            { text: " · " },
            { text: "She won't comes", selectable: true },
          ],
          hint: "Ищи запись willn't и окончание -s после сжатой формы.",
          why:
            "Верны I won't bother you и We will not shut the door. Записи willn't не " +
            "бывает, а глагол после won't окончаний не берёт.",
        },
        {
          id: "z4-perepisat-szhato",
          kind: "short",
          prompt: "Запиши сжато: «I will not bother you in the evening.»",
          answer: "I won't bother you in the evening.",
          accept: ["I won't bother you in the evening"],
          hint: "Сжатая запись меняет гласную и пишется через o.",
          why:
            "I won't bother you in the evening. Will not сжимается в won't, а не в " +
            "willn't.",
        },
        {
          id: "z5-napisat-chego-ne-sdelaesh",
          kind: "short",
          prompt: "Скажи о себе по-английски: билеты ты не забудешь. Начни с I.",
          answer: "I won't forget the tickets.",
          accept: ["I won't forget the tickets", "I will not forget the tickets.", "I will not forget the tickets"],
          hint: "После won't глагол стоит в словарной форме.",
          why:
            "I won't forget the tickets. Сжатая запись won't, а глагол после неё в " +
            "словарной форме.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-will",
      title: "Спросить: Will you come?",
      estimatedMinutes: 15,
      outcome: "спрашивать словом will и коротко отвечать",
      vozvrat: [{ iz: "sprosit-o-proshlom", zadanie: "z2-vybrat-otricatelnyy-otvet" }],

      blocks: [
        {
          id: "zachem-sprosit-will",
          kind: "explain",
          text: [
            "Айгуль собирает друзей и хочет знать, придёт ли Алим.",
            "По-английски она спрашивает: Will you come?",
            "Слово will уходит в начало строки, всё остальное остаётся на прежних местах.",
          ],
        },
        {
          id: "utverzhdenie-i-vopros-will",
          kind: "table",
          caption: "Утверждение и вопрос",
          zvuchat: [
            "You will come.",
            "Will you come?",
            "He will manage.",
            "Will he manage?",
            "They will catch the bus.",
            "Will they catch the bus?",
          ],
          head: ["Утверждение", "Вопрос"],
          rows: [
            ["You will come.", "Will you come?"],
            ["He will manage.", "Will he manage?"],
            ["They will catch the bus.", "Will they catch the bus?"],
          ],
        },
        {
          id: "chto-menyaetsya-v-voprose-will",
          kind: "explain",
          text: [
            "Слово will становится первым, а тот, о ком речь, — вторым.",
            "Глагол остаётся в словарной форме и не двигается.",
            "В конце строки вместо точки стоит вопросительный знак.",
          ],
        },
        {
          id: "korotkie-otvety-will",
          kind: "table",
          caption: "Короткие ответы",
          zvuchat: [
            "Will you come?",
            "Yes, I will.",
            "No, I won't.",
            "Will he manage?",
            "Yes, he will.",
            "No, he won't.",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Will you come?", "Yes, I will.", "No, I won't."],
            ["Will he manage?", "Yes, he will.", "No, he won't."],
          ],
        },
        {
          id: "otvet-povtoryaet-will",
          kind: "explain",
          text: [
            "В вопросе will стоит первым, а в ответе — вторым: Will you come? — Yes, I will.",
            "Меняется и лицо: спрашивают про you, а отвечать надо про I.",
            "Глагол в коротком ответе не повторяется вовсе — строка обрывается сразу после will.",
          ],
        },
        {
          id: "razgovor-o-vstreche",
          kind: "example",
          caption: "Разговор о встрече",
          razgovor: true,
          zvuchat: [
            "Will you come on Friday?",
            "Yes, I will. Several friends will come. Will Dana come too?",
            "No, she won't. She seems busy this week.",
          ],
          text:
            "Will you come on Friday?\nYes, I will. Several friends will come. Will Dana come too?\nNo, she won't. She seems busy this week.",
          explain:
            "Три реплики. Оба вопроса начинаются со слова will, а короткие ответы " +
            "повторяют его вторым словом и на этом обрываются.",
        },
        {
          id: "slovar-vstrechi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "manage", translation: "справиться, успеть", example: "Will he manage?", hint: "/ˈmænɪdʒ/" },
            { term: "catch", translation: "успеть на, поймать", example: "Will they catch the bus?", hint: "/kætʃ/" },
            { term: "hold", translation: "держать", example: "Will you hold my bag?", hint: "/həʊld/" },
            { term: "seem", translation: "казаться", example: "She seems busy this week.", hint: "/siːm/" },
            { term: "several", translation: "несколько", example: "Several friends will come on Friday.", hint: "/ˈsevrəl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-nachalo-voprosa-will",
          kind: "gap",
          prompt: "Спроси у собеседника, придёт ли он. Допиши недостающее слово.",
          before: "",
          after: " you come on Friday?",
          answer: "Will",
          hint: "Вопрос начинается с того самого слова, что стоит в обещании.",
          why: "Will you come on Friday? В вопросе слово will уходит на первое место.",
        },
        {
          id: "z2-vybrat-korotkiy-otvet-will",
          kind: "choice",
          prompt: "У тебя спросили про Дану: «Will Dana come?» Она не придёт. Какой ответ верен?",
          options: [
            { text: "No, she doesn't." },
            { text: "No, she won't.", correct: true },
            { text: "No, she isn't." },
          ],
          hint: "В ответе повторяется то же слово, с которого начался вопрос.",
          why:
            "No, she won't. Вопрос начался словом will, значит и ответ держится на " +
            "нём, а вместо имени встаёт she.",
        },
        {
          id: "z3-otmetit-verno-postroennye-voprosy-will",
          kind: "hottext",
          prompt: "Отметь верно построенные вопросы.",
          parts: [
            { text: "Will they catch the bus?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you will come?", selectable: true },
            { text: " · " },
            { text: "Will you hold my bag?", selectable: true, correct: true },
            { text: " · " },
            { text: "Will he manages?", selectable: true },
          ],
          hint: "В начале стоит will, а глагол — в словарной форме.",
          why:
            "Верны Will they catch the bus? и Will you hold my bag? В двух других на " +
            "первое место встало лишнее do и к глаголу приросло -s.",
        },
        {
          id: "z4-sopostavit-vopros-i-otvet-will",
          kind: "match",
          prompt: "Собери пары: вопрос и короткий ответ «да».",
          left: ["Will you hold my bag?", "Will Alim manage?", "Will your parents come?"],
          right: ["Yes, they will.", "Yes, I will.", "Yes, he will."],
          answer: [1, 2, 0],
          hint: "Смотри, о ком речь: об одном человеке, о двоих или о самом собеседнике.",
          why:
            "Вопрос про you требует I will, вопрос про Alim — he will, вопрос про " +
            "parents — they will.",
        },
        {
          id: "z5-napisat-vopros-o-avtobuse",
          kind: "short",
          prompt: "Спроси по-английски, успеют ли они на автобус. Начни с Will.",
          answer: "Will they catch the bus?",
          accept: ["Will they catch the bus"],
          hint: "После will ставь того, о ком речь, а потом глагол.",
          why:
            "Will they catch the bus? Слово will идёт первым, лицо — вторым, глагол " +
            "остаётся в словарной форме.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "poprosit-will",
      title: "Попросить: Will you help me?",
      estimatedMinutes: 14,
      outcome: "просить: Will you help me?",

      blocks: [
        {
          id: "zachem-prosit",
          kind: "explain",
          text: [
            "У Даны заняты руки, и она просит друга подержать сумку.",
            "По-английски это Will you hold my bag, please?",
            "Устроена просьба ровно так же, как вопрос: слово will впереди, потом you.",
            "Отличают их два заметных слова, и урок учит их искать.",
          ],
        },
        {
          id: "vopros-ili-prosba",
          kind: "table",
          caption: "Одна запись — два дела",
          zvuchat: [
            "Will your brother come soon?",
            "Will you lend me your notebook?",
            "Will you be at home at six?",
            "Will you sign this sheet, please?",
          ],
          head: ["Запись", "Что ею делают", "По чему видно"],
          rows: [
            ["Will your brother come soon?", "спрашивают", "речь о третьем человеке"],
            ["Will you lend me your notebook?", "просят", "слово me"],
            ["Will you be at home at six?", "может быть и тем, и другим", "нет ни me, ни please"],
            ["Will you sign this sheet, please?", "просят", "слово please"],
          ],
        },
        {
          id: "kak-otlichit-prosbu",
          kind: "explain",
          text: [
            "Устроены все четыре строки одинаково, и различают их два заметных слова.",
            "Слово me значит, что дело нужно самому говорящему: Will you lend me your notebook?",
            "Слово please прямо просит: Will you sign this sheet, please?",
            "Где нет ни того, ни другого, строку понимают по случаю: она может оказаться и вопросом, и просьбой.",
          ],
        },
        {
          id: "prosba-vezhlivo",
          kind: "note",
          tone: "info",
          text:
            "В строках этого урока please стоит в конце и отделяется " +
            "запятой.\n\nЗначит это слово «пожалуйста».",
        },
        {
          id: "prosby-na-rabote",
          kind: "example",
          caption: "Просьбы в конторе",
          zvuchat: [
            "Will you hold my bag, please?",
            "Will you lend me your notebook?",
            "Will you sign this sheet, please?",
            "My colleague is very helpful, so he will help.",
          ],
          text:
            "Will you hold my bag, please?\nWill you lend me your notebook?\nWill you sign this sheet, please?\nMy colleague is very helpful, so he will help.",
            explain:
            "Три первые строки — просьбы, и в каждой стоит либо me или my, либо " +
            "please. Четвёртая строка просьбой не является: она говорит о согласии " +
            "другого человека.",
        },
        {
          id: "slovar-prosby",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "lend", translation: "одолжить", example: "Will you lend me your notebook?", hint: "/lend/" },
            { term: "mind", translation: "возражать", example: "I don't mind.", hint: "/maɪnd/" },
            { term: "sign", translation: "подписать", example: "Will you sign this sheet, please?", hint: "/saɪn/" },
            { term: "helpful", translation: "отзывчивый", example: "My colleague is very helpful.", hint: "/ˈhelpfl/" },
            { term: "soon", translation: "скоро", example: "I will sign it soon.", hint: "/suːn/" },
            { term: "notebook", translation: "тетрадь", example: "Will you lend me your notebook?", hint: "/ˈnəʊtbʊk/" },
            { term: "sheet", translation: "лист", example: "Will you sign this sheet, please?", hint: "/ʃiːt/" },
          ],
        },
        {
          id: "otvet-na-prosbu",
          kind: "note",
          tone: "info",
          text:
            "На просьбу отвечают согласием: Yes, of course или I don't " +
            "mind.\n\nОборот I don't mind значит «я не против».",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-prosbu",
          kind: "gap",
          prompt: "Попроси собеседника подписать лист. Допиши недостающее слово.",
          before: "Will you ",
          after: " this sheet, please?",
          answer: "sign",
          hint: "Нужен глагол в словарной форме.",
          why: "Will you sign this sheet, please? После will глагол в словарной форме.",
        },
        {
          id: "z2-vybrat-prosbu",
          kind: "choice",
          prompt: "В какой строке видно, что просят, а не спрашивают?",
          options: [
            { text: "Will you be at home at six?" },
            { text: "Will your brother come soon?" },
            { text: "Will you lend me your notebook?", correct: true },
          ],
          hint: "Ищи слово me или слово please.",
          why:
            "Will you lend me your notebook? Просьбу здесь выдаёт слово me. В двух " +
            "других строках нет ни me, ни please.",
        },
        {
          id: "z3-otmetit-prosby",
          kind: "hottext",
          prompt: "Отметь строки, где по слову видно, что просят.",
          parts: [
            { text: "Will you hold my bag, please?", selectable: true, correct: true },
            { text: " · " },
            { text: "Will you be free tomorrow?", selectable: true },
            { text: " · " },
            { text: "Will you help me with the tickets?", selectable: true, correct: true },
            { text: " · " },
            { text: "Will your brother come soon?", selectable: true },
          ],
          hint: "Ищи слово me или слово please.",
          why:
            "Просят в Will you hold my bag, please? и Will you help me with the " +
            "tickets? В первой строке стоит please, во второй — me.",
        },
        {
          id: "z4-sobrat-prosbu",
          kind: "order",
          prompt: "Собери просьбу: одолжи мне свою тетрадь.",
          items: ["your notebook?", "me", "lend", "you", "Will"],
          answer: [4, 3, 2, 1, 0],
          hint: "Просьба начинается со слова will, дальше идёт you.",
          why:
            "Will you lend me your notebook? Слово will стоит первым, за ним you, " +
            "потом глагол в словарной форме.",
        },
        {
          id: "z5-napisat-prosbu-so-slovom-please",
          kind: "short",
          prompt:
            "Попроси по-английски подержать твою сумку и добавь в конце слово вежливости. Начни с Will you hold.",
          answer: "Will you hold my bag, please?",
          accept: ["Will you hold my bag, please", "Will you hold my bag please?"],
          hint: "В строках этого урока слово вежливости стоит последним.",
          why:
            "Will you hold my bag, please? Здесь просьбу выдают сразу два слова — my " +
            "и please.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-pomozhet",
      title: "Он поможет: My brother will drive us",
      estimatedMinutes: 14,
      outcome: "говорить о чужой готовности помочь: My brother will drive us",

      blocks: [
        {
          id: "zachem-govorit-o-chuzhoy-gotovnosti",
          kind: "explain",
          text: [
            "Айгуль везёт коробки на вокзал и не знает, как их довезти.",
            "Алим отвечает: My brother will drive us there.",
            "Так говорят о чужой готовности помочь — о том, что другой человек согласен.",
            "Слово will при этом то же самое, что и в обещании.",
          ],
        },
        {
          id: "kto-soglasen-pomoch",
          kind: "table",
          caption: "Кто согласен помочь",
          zvuchat: [
            "My brother will drive us there.",
            "My colleague will repair it.",
            "The staff will post the tickets.",
            "My parents will allow it.",
          ],
          head: ["Кто", "Чем поможет"],
          rows: [
            ["my brother", "My brother will drive us there."],
            ["my colleague", "My colleague will repair it."],
            ["the staff", "The staff will post the tickets."],
            ["my parents", "My parents will allow it."],
          ],
        },
        {
          id: "chem-gotovnost-otlichaetsya",
          kind: "explain",
          text: [
            "Обещание даёт сам говорящий, а здесь речь о согласии другого человека.",
            "Запись при этом та же: кто, потом will, потом глагол в словарной форме.",
            "Слово will не меняется и здесь — ни при brother, ни при parents.",
          ],
        },
        {
          id: "otkaz-tozhe-byvaet",
          kind: "note",
          tone: "info",
          text:
            "Отказ говорят тем же способом: The staff won't post the tickets " +
            "today.\n\nЭто значит, что люди не согласны это сделать, а не что почта " +
            "закрыта.",
        },
        {
          id: "kto-chem-pomozhet",
          kind: "example",
          caption: "Кто чем поможет",
          zvuchat: [
            "My colleague will repair the car on Tuesday.",
            "I'm glad: my parents will allow it.",
            "The staff will post the whole set of tickets.",
            "It is not the usual way, but it will work.",
          ],
          text:
            "My colleague will repair the car on Tuesday.\nI'm glad: my parents will allow it.\nThe staff will post the whole set of tickets.\nIt is not the usual way, but it will work.",
          explain:
            "Четыре строки, и в каждой will стоит перед глаголом в словарной форме. " +
            "В первых трёх речь о согласии других людей, в четвёртой — о самом деле.",
        },
        {
          id: "slovar-pomoshchi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "repair", translation: "починить", example: "My colleague will repair the car on Tuesday.", hint: "/rɪˈpeə/" },
            { term: "post", translation: "отправить почтой", example: "The staff will post the tickets.", hint: "/pəʊst/" },
            { term: "allow", translation: "разрешить", example: "My parents will allow it.", hint: "/əˈlaʊ/" },
            { term: "glad", translation: "рад", example: "I'm glad: my parents will allow it.", hint: "/glæd/" },
            { term: "usual", translation: "обычный", example: "It is not the usual way, but it will work.", hint: "/ˈjuːʒuəl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-o-brate",
          kind: "gap",
          prompt: "Брат согласен отвезти. Допиши недостающее слово.",
          before: "My brother ",
          after: " drive us there.",
          answer: "will",
          hint: "Это то же слово, что и в обещании: оно не меняется ни при каком лице.",
          why:
            "My brother will drive us there. Слово will одно и то же при любом лице.",
        },
        {
          id: "z2-vybrat-o-soglasii",
          kind: "choice",
          prompt: "В какой строке говорящий берётся за дело не сам, а называет согласного?",
          options: [
            { text: "I will repair the car on Tuesday." },
            { text: "My colleague will repair the car on Tuesday.", correct: true },
            { text: "I'll ring you about the car on Tuesday." },
          ],
          hint: "Смотри, кто стоит перед will: сам говорящий или другой человек.",
          why:
            "My colleague will repair the car on Tuesday. В двух других строках перед " +
            "will стоит I, а значит говорящий обещает сам.",
        },
        {
          id: "z3-otmetit-gotovnost",
          kind: "hottext",
          prompt: "Отметь строки, где на дело согласен не сам говорящий, а другой человек.",
          parts: [
            { text: "The staff will post the tickets", selectable: true, correct: true },
            { text: " · " },
            { text: "I'll post the tickets tomorrow", selectable: true },
            { text: " · " },
            { text: "My parents will allow it", selectable: true, correct: true },
            { text: " · " },
            { text: "I won't bother them", selectable: true },
          ],
          hint: "Смотри, кто стоит перед will: сам говорящий или кто-то другой.",
          why:
            "Другой человек согласен в The staff will post the tickets и My parents " +
            "will allow it. В двух остальных строках перед will стоит I.",
        },
        {
          id: "z4-perepisat-v-otkaz",
          kind: "short",
          prompt: "Человек не согласен. Перепиши строку: «My brother will drive us there.»",
          answer: "My brother won't drive us there.",
          accept: ["My brother won't drive us there", "My brother will not drive us there.", "My brother will not drive us there"],
          hint: "Отказ собирают из will и слова not.",
          why:
            "My brother won't drive us there. Отказ говорят тем же способом, только " +
            "со словом not.",
        },
        {
          id: "z5-napisat-o-kollege",
          kind: "short",
          prompt: "Скажи по-английски, что сослуживец починит машину во вторник. Начни с My colleague.",
          answer: "My colleague will repair the car on Tuesday.",
          accept: ["My colleague will repair the car on Tuesday"],
          hint: "После will глагол стоит в словарной форме.",
          why:
            "My colleague will repair the car on Tuesday. Слово will не меняется, а " +
            "глагол после него в словарной форме.",
        },
        {
          id: "z6-peredat-den-po-angliyski",
          kind: "short",
          prompt:
            "Сослуживец оставил записку по-русски: «Машину починю во вторник, звонить не надо». Напиши по-английски одним словом день недели.",
          answer: "Tuesday",
          accept: ["on Tuesday"],
          hint: "Нужен день недели, и записать его надо английским словом.",
          why: "Tuesday. В записке назван день недели, и по-английски он пишется так.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-perepisku",
      title: "Читаем переписку о встрече",
      estimatedMinutes: 13,
      outcome: "понимать переписку о договорённости",

      blocks: [
        {
          id: "zachem-chitat-perepisku",
          kind: "explain",
          text: [
            "Дана и Алим договариваются о встрече и пишут коротко.",
            "В такой переписке важно одно: кто что берётся сделать.",
            "Ниже два сообщения подряд, и вопросы будут именно об этом.",
          ],
        },
        {
          id: "dva-soobshcheniya",
          kind: "text",
          title: "Два сообщения",
          genre: "message",
          body: [
            "Hi Alim! I won't be free on Thursday, so let's meet on Friday. I'll collect the tickets in the morning and I'll ring you at six. Anyway, my sister will be at home, so she will hold the bags. Will you bring the notebook?",
            "Hi Dana! Friday is fine. Actually I'm busy till five, but I will manage. I won't be late, I promise. I'll bring the notebook and a sheet of paper. My brother will drive us to the station, so we won't miss the train. Best wishes, Alim!",
          ],
          glossary: [
            { term: "let's meet", translation: "давай встретимся" },
            { term: "is fine", translation: "подходит" },
            { term: "a sheet of paper", translation: "лист бумаги" },
            { term: "miss the train", translation: "опоздать на поезд" },
          ],
        },
        {
          id: "chto-iskat-v-perepiske",
          kind: "note",
          tone: "info",
          text:
            "В каждом сообщении несколько обещаний подряд, и все они держатся на " +
            "will.\n\nЧитая, отмечай, кто именно берётся за дело: тот, кто пишет, или " +
            "кто-то другой.",
        },
        {
          id: "slovar-perepiski",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "anyway", translation: "в любом случае", example: "Anyway, my sister will be at home.", hint: "/ˈeniweɪ/" },
            { term: "actually", translation: "на самом деле", example: "Actually I'm busy till five, but I will manage.", hint: "/ˈæktʃuəli/" },
            { term: "wish", translation: "пожелание", example: "Best wishes, Alim!", hint: "/wɪʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-v-kakoy-den-vstrecha",
          kind: "short",
          about: "dva-soobshcheniya",
          prompt: "В какой день они встретятся? Ответь одним английским словом.",
          answer: "Friday",
          accept: ["on Friday"],
          hint: "День назван в первом сообщении, сразу после слов let's meet.",
          why: "I won't be free on Thursday, so let's meet on Friday.",
        },
        {
          id: "z2-kto-zaberet-bilety",
          kind: "choice",
          about: "dva-soobshcheniya",
          prompt: "Кто заберёт билеты?",
          options: [
            { text: "Алим" },
            { text: "Дана", correct: true },
            { text: "Сестра Даны" },
          ],
          hint: "Об этом сказано в первом сообщении словами I'll collect.",
          why: "I'll collect the tickets in the morning — это пишет Дана.",
        },
        {
          id: "z3-o-chem-prosit-dana",
          kind: "choice",
          about: "dva-soobshcheniya",
          prompt: "О чём Дана просит Алима?",
          options: [
            { text: "Позвонить ей в шесть" },
            { text: "Отвезти её на вокзал" },
            { text: "Принести тетрадь", correct: true },
          ],
          hint: "Просьба стоит последней строкой первого сообщения.",
          why: "Will you bring the notebook? — это просьба, а не вопрос о планах.",
        },
        {
          id: "z4-otmetit-obeshchaniya-alima",
          kind: "hottext",
          about: "dva-soobshcheniya",
          prompt: "Отметь строки, где Алим говорит о себе.",
          parts: [
            { text: "I'll bring the notebook", selectable: true, correct: true },
            { text: " · " },
            { text: "My brother will drive us to the station", selectable: true },
            { text: " · " },
            { text: "I won't be late", selectable: true, correct: true },
            { text: " · " },
            { text: "she will hold the bags", selectable: true },
          ],
          hint: "Ищи строки, где перед will стоит I.",
          why:
            "О себе Алим говорит в I'll bring the notebook и I won't be late. В двух " +
            "других строках речь о его брате и о сестре Даны.",
        },
        {
          id: "z5-kto-otvezet-na-vokzal",
          kind: "short",
          about: "dva-soobshcheniya",
          prompt: "Кто отвезёт их на вокзал? Ответь одним английским словом.",
          answer: "brother",
          accept: ["my brother", "his brother"],
          hint: "Об этом сказано в последней строке второго сообщения.",
          why: "My brother will drive us to the station.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-obeshchaniya",
      title: "Слушаем, кто что обещает",
      estimatedMinutes: 13,
      outcome: "слышать в записи, кто за что берётся и когда",

      blocks: [
        {
          id: "zachem-slushat-obeshchaniya",
          kind: "explain",
          text: [
            "Алим звонит Дане и на ходу договаривается о завтрашнем дне.",
            "Обещания в разговоре идут подряд и часто в краткой записи.",
            "Ниже запись: двое делят дела на завтра.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-o-zavtrashnem-dne",
          kind: "audio",
          caption: "Разговор о завтрашнем дне",
          pace: "slow",
          skryt: true,
          transcript:
            "Will you collect the tickets tomorrow? — Yes, I will. I'll go to the " +
            "station at nine. — Good. I suppose the shop will be closed at eight. — " +
            "Then I won't be late. Will you bring the notebook? — Of course. I'll " +
            "write the whole list on one sheet, and it will be clear. — Thank you. " +
            "I'll ring you in the evening.",
        },
        {
          id: "chto-slushat-v-obeshchaniyah",
          kind: "note",
          tone: "info",
          text:
            "Слушай, кто идёт на вокзал и во сколько, что второй берётся " +
            "принести.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-razgovora-po-telefonu",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "suppose", translation: "полагать", example: "I suppose the shop will be closed at eight.", hint: "/səˈpəʊz/" },
            { term: "whole", translation: "целый, весь", example: "I'll write the whole list on one sheet.", hint: "/həʊl/" },
            { term: "clear", translation: "понятный", example: "I'll write the whole list on one sheet, and it will be clear.", hint: "/klɪə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kto-zaberet-bilety-v-zapisi",
          kind: "choice",
          about: "zapis-o-zavtrashnem-dne",
          prompt: "За что берётся тот, кто отвечает «Yes, I will»?",
          options: [
            { text: "Забрать билеты", correct: true },
            { text: "Принести тетрадь" },
            { text: "Написать список" },
          ],
          hint: "Смотри, на какой вопрос он отвечает согласием.",
          why:
            "Will you collect the tickets tomorrow? — Yes, I will. Тетрадь и список " +
            "берёт на себя второй собеседник.",
        },
        {
          id: "z2-vo-skolko-na-vokzal",
          kind: "short",
          about: "zapis-o-zavtrashnem-dne",
          prompt: "Во сколько он пойдёт на вокзал? Ответь одним английским словом.",
          answer: "nine",
          accept: ["at nine"],
          hint: "Время названо сразу после слов I'll go to the station.",
          why: "I'll go to the station at nine.",
        },
        {
          id: "z3-vosstanovit-uslyshannoe-will",
          kind: "order",
          zvuk: "I'll go to the station at nine.",
          prompt: "Послушай и собери фразу из услышанного.",
          items: ["at nine.", "to the station", "go", "I'll"],
          answer: [3, 2, 1, 0],
          hint: "Начало фразы — краткая запись, дальше идёт глагол.",
          why:
            "I'll go to the station at nine. От will остались две буквы ll, а глагол " +
            "стоит в словарной форме.",
        },
        {
          id: "z4-chto-prinesut",
          kind: "short",
          about: "zapis-o-zavtrashnem-dne",
          prompt: "Что просят принести? Ответь одним английским словом.",
          answer: "notebook",
          accept: ["the notebook", "a notebook"],
          hint: "Просьба звучит в конце четвёртой реплики.",
          why: "Will you bring the notebook? — Of course.",
        },
        {
          id: "z5-vo-skolko-zakroetsya-magazin",
          kind: "short",
          about: "zapis-o-zavtrashnem-dne",
          prompt: "Во сколько, по мнению собеседника, закроется магазин? Ответь одним английским словом.",
          answer: "eight",
          accept: ["at eight"],
          hint: "Время названо после слов I suppose the shop will be closed.",
          why: "I suppose the shop will be closed at eight.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-dogovorennosti",
      title: "Пишем сообщение о договорённости",
      estimatedMinutes: 15,
      outcome: "проверять сообщение: словарную форму после will",

      blocks: [
        {
          id: "zachem-proveryat-glagol",
          kind: "explain",
          text: [
            "Алим написал сообщение о завтрашней встрече и просит посмотреть, нет ли ошибок.",
            "Ошибаются в таких строках чаще всего справа от will.",
            "Проверить можно так: закрой пальцем will и посмотри на глагол.",
            "Он должен стоять в словарной форме — без окончания и без слова to перед ним.",
          ],
        },
        {
          id: "chto-stoit-posle-will",
          kind: "table",
          caption: "Что стоит после will",
          zvuchat: [
            "I will bring the notebook",
            "She will collect the tickets",
            "We won't be late",
          ],
          head: ["Запись", "Что после will", "Годится"],
          rows: [
            ["I will bring the notebook", "bring, словарная форма", "да"],
            ["She will collect the tickets", "collect, словарная форма", "да"],
            ["We won't be late", "be, словарная форма", "да"],
            ["He will brings the bags", "brings, с окончанием", "нет"],
          ],
        },
        {
          id: "pochemu-proverka-sprava",
          kind: "explain",
          text: [
            "Слово will не меняется никогда, и слева проверять нечего.",
            "Поэтому смотрят только вправо, по одному месту в каждой строке.",
            "Вторым делом проверяют сжатую запись: у will not она одна — won't.",
          ],
        },
        {
          id: "obrazets-soobshcheniya",
          kind: "example",
          caption: "Образец сообщения",
          zvuchat: [
            "Hi Dana! I'll be at the station at nine.",
            "I promise I won't forget the tickets.",
            "My sister will collect the notebook.",
            "Are you sure you will be free at nine?",
            "Will you bring the sheet, please?",
          ],
          text:
            "Hi Dana! I'll be at the station at nine.\nI promise I won't forget the tickets.\nMy sister will collect the notebook.\nAre you sure you will be free at nine?\nWill you bring the sheet, please?",
          explain:
            "Пять строк. В каждой глагол после will стоит в словарной форме, а " +
            "последняя строка — просьба со словом please.",
        },
        {
          id: "chto-proverit-v-soobshchenii",
          kind: "note",
          tone: "info",
          text:
            "Проверь четыре вещи.\n\nПосле will глагол стоит в словарной форме. " +
            "Сжатая запись отрицания — won't. Названы день или время. Есть строка с " +
            "просьбой.\n\nЕсли строку пришлось переписать, проверь её заново с начала.",
        },
        {
          id: "slovar-proverki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sure", translation: "уверенный", example: "Are you sure you will be free at nine?", hint: "/ʃɔː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nayti-oshibku-posle-will",
          kind: "hottext",
          prompt: "Отметь строки, где глагол после will стоит неверно.",
          parts: [
            { text: "My sister will posts the tickets", selectable: true, correct: true },
            { text: " · " },
            { text: "I'll ring you at six", selectable: true },
            { text: " · " },
            { text: "She will to sign the sheet", selectable: true, correct: true },
            { text: " · " },
            { text: "They won't forget the notebook", selectable: true },
          ],
          hint: "Ищи окончание -s и лишнее слово to.",
          why:
            "Неверны My sister will posts the tickets и She will to sign the sheet. " +
            "В первой к глаголу приросло -s, во второй появилось лишнее to.",
        },
        {
          id: "z2-ispravit-stroku-soobshcheniya",
          kind: "short",
          prompt: "Исправь строку сообщения и запиши целиком: «My sister will collects the tickets.»",
          answer: "My sister will collect the tickets.",
          accept: ["My sister will collect the tickets"],
          hint: "После will глагол окончаний не берёт.",
          why:
            "My sister will collect the tickets. Окончание -s после will не ставится " +
            "ни при каком лице.",
        },
        {
          id: "z3-vybrat-szhatuyu-zapis",
          kind: "choice",
          prompt: "Какая строка сообщения записана верно?",
          options: [
            { text: "I willn't be late." },
            { text: "I won't be late.", correct: true },
            { text: "I won't to be late." },
          ],
          hint: "Смотри и на сжатую запись, и на то, что стоит после неё.",
          why:
            "I won't be late. Записи willn't не бывает, а слова to после won't не " +
            "ставят.",
        },
        {
          id: "z4-napisat-soobshchenie",
          kind: "essay",
          prompt:
            "Напиши сообщение о завтрашней встрече четырьмя строками. Пообещай что-то сделать, скажи, чего не будет, и попроси собеседника о чём-нибудь.",
          minWords: 15,
          sample:
            "Hi Alim! I'll be at the shop at ten.\nI promise I won't forget the tickets.\nMy brother will repair the car on Tuesday.\nWill you ring me in the evening, please?",
          checklist: [
            "после will глагол стоит в словарной форме",
            "сжатая запись отрицания — won't",
            "названы день или время",
            "есть строка с просьбой",
          ],
          hint: "Бери глаголы, которые знаешь: bring, ring, collect, repair, sign, hold.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы после will глагол " +
            "стоял в словарной форме.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: развернуть сжатую
      // запись, перенести сказанное на другое лицо, переделать обещание в отказ,
      // подобрать ответ к вопросу, отличить просьбу от вопроса, ответить по
      // записи. Рамок и предметов заданий уроков здесь нет.

      // ---- итог 1 ----
      {
        id: "q-razvernut-ll",
        kind: "short",
        outcome: "обещать: I will call you tomorrow",
        prompt: "В строгом письме сокращений не ставят. Запиши без сокращения и целиком: «She'll arrange it.»",
        answer: "She will arrange it.",
        accept: ["She will arrange it"],
        why:
          "She will arrange it. Две буквы ll после апострофа — это и есть will, и в " +
          "полной записи оно возвращается целым словом.",
      },
      {
        id: "q-pochemu-net-s",
        kind: "choice",
        outcome: "обещать: I will call you tomorrow",
        prompt: "В какой строке глагол после will записан верно?",
        options: [
          { text: "My sister will rings you tonight." },
          { text: "My sister will ring you tonight.", correct: true },
          { text: "My sister wills ring you tonight." },
        ],
        why:
          "My sister will ring you tonight. Окончание -s не берёт ни глагол после " +
          "will, ни само will.",
      },

      // ---- итог 2 ----
      {
        id: "q-peredelat-v-otricanie",
        kind: "short",
        outcome: "говорить, чего не сделаешь: I won't be late",
        prompt:
          "Скажи о себе противоположное и запиши сжато и целиком: «I will shut the window.»",
        answer: "I won't shut the window.",
        accept: ["I won't shut the window"],
        why:
          "I won't shut the window. Will и not сжимаются в won't, и гласная в нём " +
          "меняется.",
      },
      {
        id: "q-najti-nesushchestvuyushchuyu-zapis",
        kind: "choice",
        outcome: "говорить, чего не сделаешь: I won't be late",
        prompt: "Какой записи в английском не бывает?",
        options: [
          { text: "will not" },
          { text: "won't" },
          { text: "willn't", correct: true },
        ],
        why:
          "Записи willn't не бывает: сжатая запись у will not одна — won't. Полная " +
          "запись will not тоже верна.",
      },

      // ---- итог 3 ----
      {
        id: "q-otvet-k-voprosu-o-roditelyah",
        kind: "short",
        outcome: "спрашивать словом will и коротко отвечать",
        prompt:
          "У тебя спросили: «Will your parents allow it?» Они не разрешат. Ответь коротко — нет.",
        answer: "No, they won't.",
        accept: ["No, they won't", "No, they will not.", "No, they will not"],
        why:
          "No, they won't. Слово parents называет двоих, и вместо него встаёт they.",
      },
      {
        id: "q-zadat-vopros-ob-avtobuse",
        kind: "short",
        outcome: "спрашивать словом will и коротко отвечать",
        prompt: "Ты хочешь узнать, успеет ли собеседник на автобус. Задай вопрос по-английски, начав с Will.",
        answer: "Will you catch the bus?",
        accept: ["Will you catch the bus"],
        why:
          "Will you catch the bus? Слово will идёт первым, лицо вторым, а глагол " +
          "остаётся в словарной форме.",
      },

      // ---- итог 4 ----
      {
        id: "q-otlichit-prosbu-ot-voprosa",
        kind: "choice",
        outcome: "просить: Will you help me?",
        prompt: "Собеседник сказал: «Will you carry this box?» Что он сделал?",
        options: [
          { text: "Спросил о планах собеседника" },
          { text: "Попросил о помощи", correct: true },
          { text: "Пообещал помочь сам" },
        ],
        why:
          "Коробка нужна говорящему, значит это просьба. Вопрос о планах спрашивал " +
          "бы о делах собеседника.",
      },
      {
        id: "q-dopisat-me",
        kind: "gap",
        outcome: "просить: Will you help me?",
        prompt:
          "Строка должна стать просьбой: помощь нужна самому говорящему. Допиши недостающее слово.",
        before: "Will you help ",
        after: " with the bags?",
        answer: "me",
        why:
          "Will you help me with the bags? Слово me и показывает, что помощь нужна " +
          "тому, кто говорит.",
      },

      // ---- итог 5 ----
      {
        id: "q-perenesti-na-kollegu",
        kind: "short",
        outcome: "говорить о чужой готовности помочь: My brother will drive us",
        prompt:
          "О себе говорят так: «I will post the tickets.» Скажи то же о сослуживце — за дело берётся он. Начни с My colleague.",
        answer: "My colleague will post the tickets.",
        accept: ["My colleague will post the tickets"],
        why:
          "My colleague will post the tickets. Слово will при смене лица не " +
          "меняется вовсе.",
      },
      {
        id: "q-chto-znachit-otkaz",
        kind: "choice",
        outcome: "говорить о чужой готовности помочь: My brother will drive us",
        prompt: "Что значит «My brother won't drive us there»?",
        options: [
          { text: "Брат не согласен нас отвезти", correct: true },
          { text: "Брат не умеет водить" },
          { text: "Дорога туда закрыта" },
        ],
        why:
          "Отказ говорят тем же способом, что и согласие, только со словом not. Речь " +
          "о согласии человека, а не о его умении и не о дороге.",
      },

      // ---- итог 6 ----
      {
        id: "q-perepiska-kto-beryotsya",
        kind: "choice",
        outcome: "понимать переписку о договорённости",
        prompt:
          "В сообщении написано: «My sister will be at home, so she will hold the bags.» Кто подержит сумки?",
        options: [
          { text: "Тот, кто пишет" },
          { text: "Сестра того, кто пишет", correct: true },
          { text: "Тот, кому пишут" },
        ],
        why: "she will hold the bags — речь о сестре, о ней и сказано строкой раньше.",
      },
      {
        id: "q-perepiska-chto-obeshchal",
        kind: "short",
        outcome: "понимать переписку о договорённости",
        prompt:
          "В сообщении написано: «Actually I'm busy till five, but I will manage. I won't be late, I promise.» Запиши одним английским словом, до какого часа человек занят.",
        answer: "five",
        accept: ["till five", "at five"],
        why:
          "Actually I'm busy till five. Занятость кончается в пять, и опоздания " +
          "человек не обещает.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-v-kakoy-den",
        kind: "short",
        outcome: "слышать в записи, кто за что берётся и когда",
        zvuk:
          "Will Alim repair the car on Tuesday? — No, he won't. He'll be busy, but he will repair it on Friday.",
        prompt: "Послушай и запиши одним английским словом, в какой день Алим починит машину.",
        answer: "Friday",
        accept: ["on Friday"],
        why:
          "No, he won't. He'll be busy, but he will repair it on Friday. Вторник " +
          "назван, чтобы от него отказаться.",
      },
      {
        id: "q-na-sluh-vo-skolko",
        kind: "short",
        outcome: "слышать в записи, кто за что берётся и когда",
        zvuk: "Will you ring me tonight? — Yes, I will. I'll ring you at seven.",
        prompt: "Послушай и запиши одним английским словом, во сколько человек позвонит.",
        answer: "seven",
        accept: ["at seven"],
        why: "Will you ring me tonight? — Yes, I will. I'll ring you at seven.",
      },

      // ---- итог 8 ----
      {
        id: "q-soobshchenie-ubrat-to",
        kind: "short",
        outcome: "проверять сообщение: словарную форму после will",
        prompt:
          "В сообщении написали «My friend will to hold the bags.» Одно слово здесь лишнее. Перепиши строку.",
        answer: "My friend will hold the bags.",
        accept: ["My friend will hold the bags"],
        why:
          "My friend will hold the bags. После will слово to не ставят: глагол идёт " +
          "сразу, в словарной форме.",
      },
      {
        id: "q-soobshchenie-chto-smotret",
        kind: "choice",
        outcome: "проверять сообщение: словарную форму после will",
        prompt: "В какой строке сообщения ошибки нет?",
        options: [
          { text: "My parents will allows it." },
          { text: "My parents will to allow it." },
          { text: "My parents will allow it.", correct: true },
        ],
        why:
          "My parents will allow it. В первой строке к глаголу приросло -s, во " +
          "второй перед ним встало лишнее to.",
      },
    ],
  },
};

export default module;
