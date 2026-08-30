import type { Module } from "@/lib/content/types";

/**
 * Модуль 13 курса «Английский · Elementary»: может быть.
 *
 * Программа: docs/programma-english-elementary.md, модуль 13 — «говорить о
 * возможном»; грамматика: `may`, `might`; наречия уверенности.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «ПРЕДПОЛОЖЕНИЕ», И ОНО ОДНО НА ВЕСЬ МОДУЛЬ.
 *
 * Предположение — то, в чём говорящий не уверен. Слов «возможность», «догадка»,
 * «вероятность» в тексте для ученика нет ни разу: это были бы вторые имена той
 * же вещи (CLAUDE.md, «Понятность объяснения», пункт 3). Противопоставляется оно
 * УВЕРЕННОСТИ — второму настоящему слову, которое вводит урок 4.
 *
 * ГЛАВНАЯ ОПАСНОСТЬ ЭТОГО МОДУЛЯ: ПРИДУМАТЬ РАЗНИЦУ МЕЖДУ `MAY` И `MIGHT`.
 *
 * Её здесь нет, и это не моя оценка, а то, что стоит в источнике. English
 * Grammar Profile даёт обеим строкам A2 одну и ту же работу дословно:
 * `MODALITY may`, «USE: POSSIBILITY» — «Can use 'may' to talk about weak
 * possibility referring to the present and the future»; `MODALITY might`, «USE:
 * POSSIBILITY» — «Can use 'might' to talk about weak possibility». Разница,
 * которую любят учебники («might слабее»), из наших источников не следует
 * никак, и данных о том, «как принято», в `materials/` нет вовсе.
 *
 * Поэтому урок 2 говорит прямо: обе строки делают одно дело. Если следующей
 * сессии захочется дописать «may увереннее» — сначала пусть найдёт графу,
 * которая это говорит. Правило CLAUDE.md: графа источника это РАЗРЕШЕНИЕ, а не
 * запрет, и придуманных различий из неё не выводят.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, MODALITY might, «FORM: AFFIRMATIVE» — «Can use
 *    the affirmative form», пример источника «The weather might be hot and
 *    sunny». Это урок 1, и пример источника сам о погоде.
 *
 * 2. English Grammar Profile, A2, MODALITY might, «USE: POSSIBILITY» — «Can use
 *    'might' to talk about weak possibility», пример «My dad isn't working that
 *    day, he might take us». Это урок 1.
 *
 * 3. English Grammar Profile, A2, MODALITY may, «FORM: AFFIRMATIVE» — «Can use
 *    the affirmative form», пример «[talking about clothes] So I may need them»,
 *    и «USE: POSSIBILITY» с примером «[talking about an important document] It
 *    may be in our room inside my bag». Это урок 2, и пример источника сам о
 *    потерянной вещи — оттуда же случай всего модуля.
 *
 * 4. English Grammar Profile, A2, ADVERBS «USE: CERTAINTY» — «Can use a limited
 *    range of adverbs ('maybe', 'perhaps') to indicate degrees of certainty».
 *    Там же A2, MODALITY adverbs, «FORM: CLAUSE POSITION» — «Can use adverbs of
 *    certainty and possibility ('maybe', 'perhaps'), before a clause or ellipted
 *    clause». Это урок 3, и место наречия взято из второй графы: перед строкой.
 *
 * 5. English Grammar Profile, A2, MODALITY adjectives, «FORM: 'BE' + 'SURE' +
 *    CLAUSE» — «Can use 'I' + 'be' + 'sure' + clause», пример «I'm sure I can
 *    beat you at chess». Это урок 4.
 *
 * 6. Описания Совета Европы, с. 83, Correspondence, графа A2: «Can compose
 *    short, simple notes, e-mails and text messages (e.g. to send or reply to an
 *    invitation, to confirm or change an arrangement)». Опора урока письма.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК.
 *
 * - `may not` и `might not`. Отрицание обеих строк источник ставит на B1:
 *   `MODALITY may`, «FORM: NEGATIVE», и `MODALITY might`, «FORM: NEGATIVE».
 *   Выше ступени. В уроке об этом не сказано ни слова — просто нет.
 * - `May I…?` в значении просьбы. `MODALITY may`, «USE: PERMISSION» — B1.
 * - `might` советом («You might need to bring…») — B1, «USE: SUGGESTIONS».
 * - `might have` о прошлом — B1.
 * - Слова `probably` и `possibly`. Оба стоят в словнике A2 Key, но Oxford 3000
 *   ставит `possibly` на B1, а графа источника называет наречия уверенности
 *   поимённо и коротко: «a limited range of adverbs ('maybe', 'perhaps')».
 *   Модуль берёт ровно эти два.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать две карточки у самого модуля, из них двадцать девять
 * несут слово, какого на прошлой ступени не было. Норма владельца от 20 августа
 * — не меньше тридцати карточек и не меньше пятнадцати новых. Счёт даёт `npm
 * run kontrol`, и сверяться надо с ним, а не с памятью: за одну правку он
 * менялся трижды.
 *
 * ПОСЛЕДНИЙ УРОК — «СЛОВА ЧАСТИ», И ОН НЕ МОДУЛЯ, А ЧАСТИ ВТОРОЙ. Решение
 * владельца от 29 августа 2026, разбор — в модуле 7, где стоит такой же урок
 * для части первой.
 *
 * Тема части второй — город, дорога и бланки: тридцать записей, все из словника
 * A2 Key. Названия зданий здесь составные (`post office`, `bus station`), и это
 * главная мысль урока: первое слово говорит, что там делают, второе — что это
 * за место.
 *
 * ЧЕТЫРЕ СЛОВА ВЗЯТЫ РЯДОМ С УЖЕ ДАННЫМИ, И КАЖДОЕ ОБЪЯВЛЕНО В ПЕРЕВОДЕ:
 * `aeroplane` при данном раньше `plane`, `no one` при `nobody`, `okay` и `all
 * right` при `alright`. Это не повтор: ученик встретит все записи, и карточка
 * прямо говорит, что это второе имя той же вещи.
 *
 * ТРАНСКРИПЦИЯ СОСТАВНЫХ ЗАПИСЕЙ СОБРАНА ИЗ ЧАСТЕЙ — как в модуле 7 и как курс
 * уже делал в `swimming kit`. Вопрос об этом стоит перед владельцем.
 *
 * Слова собраны вокруг случая модуля: вещь потерялась, и о ней приходится
 * гадать. Отсюда и вещи (`handbag`, `necklace`, `headphones`), и места
 * (`cabinet`, `bookcase`, `carpet`), и то, из чего вещь сделана (`silver`,
 * `plastic`, `metal`) — по этим словам вещь и описывают в объявлении.
 *
 * СНЯТО ПРИ ПОДБОРЕ, И ПРИЧИНА ОДНА НА ВСЕХ: наши источники дают этим словам
 * спорное чтение, а такие слова решает владелец как преподаватель.
 * `wind` и `windy` — оба источника читают их как глагол «наматывать»
 * (`waɪnd`), а не как ветер. `drawer` и `document` Викисловарь даёт по-
 * американски. `wifi` не знает ни один источник. Слова остаются в запасе
 * ступени, и погоду модуль описывает без них.
 */
const module: Module = {
  slug: "mozhet-byt",
  title: "Может быть",

  outcomes: [
    "говорить о возможном: It might rain tomorrow",
    "говорить о возможном через may: It may be in my backpack",
    "ставить maybe перед строкой: Maybe it's in the car",
    "говорить об уверенности: I'm sure it's in the cabinet",
    "отличать уверенность от предположения",
    "находить в объявлении приметы вещи и время работы",
    "слышать в прогнозе, что обещают наверняка, а что нет",
    "проверять объявление о пропаже: вещь, приметы, место и предположение о ней",
    "называть места в городе и заполнять бланк: post office, occupation",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, MODALITY might, «FORM: AFFIRMATIVE»: «Can use the affirmative form», " +
        "пример источника — «The weather might be hot and sunny» — урок 1. Пример " +
        "источника сам о погоде, оттуда и случай урока. " +
        "A2, MODALITY might, «USE: POSSIBILITY»: «Can use 'might' to talk about " +
        "weak possibility», пример — «My dad isn't working that day, he might take " +
        "us» — урок 1. " +
        "A2, MODALITY may, «FORM: AFFIRMATIVE»: «Can use the affirmative form», " +
        "пример — «So I may need them» — урок 2. " +
        "A2, MODALITY may, «USE: POSSIBILITY»: «Can use 'may' to talk about weak " +
        "possibility referring to the present and the future», пример — «It may be " +
        "in our room inside my bag» — урок 2. Пример источника сам о потерянной " +
        "вещи, и отсюда случай всего модуля. " +
        "ОБЕ ГРАФЫ ГОВОРЯТ ОБ ОДНОМ И ТОМ ЖЕ — «weak possibility», — поэтому урок " +
        "2 не выдумывает разницы между may и might. Учебники её проводят, наши " +
        "источники нет, а данных о том, «как принято», в materials/ нет вовсе. " +
        "A2, ADVERBS adverbs and adverb phrases: types and meanings, «USE: " +
        "CERTAINTY»: «Can use a limited range of adverbs ('maybe', 'perhaps') to " +
        "indicate degrees of certainty» — урок 3. Там же A2, MODALITY adverbs, " +
        "«FORM: CLAUSE POSITION»: «Can use adverbs of certainty and possibility " +
        "('maybe', 'perhaps'), before a clause or ellipted clause» — отсюда место " +
        "наречия перед строкой. " +
        "A2, MODALITY adjectives, «FORM: 'BE' + 'SURE' + CLAUSE»: «Can use 'I' + " +
        "'be' + 'sure' + clause», пример — «I'm sure I can beat you at chess» — " +
        "урок 4. " +
        "ЧЕГО НЕТ. B1, MODALITY may, «FORM: NEGATIVE», и B1, MODALITY might, «FORM: " +
        "NEGATIVE» — отрицания обеих строк выше ступени, поэтому may not и might " +
        "not в модуле нет. Запрета на них в уроке не написано. " +
        "B1, MODALITY may, «USE: PERMISSION» — May I…? просьбой выше ступени. " +
        "B1, MODALITY might, «USE: SUGGESTIONS» и «USE: POSSIBILITY IN THE PAST» — " +
        "совет и прошлое выше ступени. " +
        "ВРЕМЯ, О КОТОРОМ ГОВОРЯТ ОБЕ СТРОКИ. Урок 1 утверждает, что речь идёт о " +
        "сегодняшнем дне или о завтрашнем, но не о прошлом, и на этом стоит вопрос " +
        "работы. Основание не в графах might, а рядом: A2, MODALITY may, «USE: " +
        "POSSIBILITY» — «referring to the present and the future», — и B1, MODALITY " +
        "might, «USE: POSSIBILITY IN THE PAST» с оборотом might have. Нашёл " +
        "методист: без этих двух ссылок утверждение урока сверять было не с чем. " +
        "MAY В ЗАДАНИЯХ УРОКА 1. Задания z1 и z5 принимают may наравне с might, " +
        "хотя may даётся уроком позже. Это решение, а не недосмотр: наказывать за " +
        "верный английский нельзя, а ученику may в задании не показывают — поле " +
        "accept говорит, что засчитать, а не что напечатать. `npm run kontrol` " +
        "ставит на это вопрос; вопрос разобран здесь",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ПИСЬМА «Пишем объявление о пропаже». с. 84, шкала «Notes, messages " +
        "and forms», графа A2: «Can formulate short, simple notes and messages " +
        "relating to matters in areas of immediate need». " +
        "ОСТОРОЖНО, ЗДЕСЬ ЛЕГКО ВЗЯТЬ СОСЕДНЮЮ ШКАЛУ. Сперва тут стояла с. 83, " +
        "Correspondence — цитата верная, но не о том жанре. Тот же документ, с. 81, " +
        "разводит их прямо: «There are two scales: “Correspondence” and “Notes, " +
        "messages and forms”. The former focuses on an interpersonal exchange, " +
        "while the latter concerns information transfer». Объявление о пропаже — " +
        "передача сведений, а не переписка. Нашёл методист. " +
        "ЖАНР УРОКА ЧТЕНИЯ ТОТ ЖЕ, НО СТОРОНА ДРУГАЯ: ученик читает объявление " +
        "бюро о находках, а пишет объявление хозяина о пропаже. Новых слов ему при " +
        "этом не нужно — приметы и места те же",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Все тридцать три карточки модуля взяты из словника ступени: might, " +
        "umbrella, " +
        "heavy, handbag, backpack, cabinet, bookcase, carpet, app, download, " +
        "upload, folder, headphones, speaker, case, password, silver, metal, " +
        "plastic, cover, bracelet, thin, soft, necklace, earring, belt, raincoat, " +
        "coat, sock, jumper, sunglasses, comb, toothbrush. " +
        "СНЯТЫ ПРИ ПОДБОРЕ: possibly и file — Oxford 3000 ставит их на B1; wind, " +
        "windy, drawer, document, wifi — спорное чтение, см. опору о произношении. " +
        "СНЯТЫ ПО РАЗБОРУ МЕТОДИСТА, И ЭТО ВАЖНЕЕ ПРОЧЕГО. Опора говорила, что все " +
        "карточки взяты из словника ступени, а три слова там не стояли: " +
        "`forecast` — в словнике A2 Key его нет вовсе, он стоит в словнике B1 " +
        "Preliminary, а Oxford 5000 даёт «forecast n., v. B2»; " +
        "`basket` — то же самое: в A2 Key есть только basketball, само слово " +
        "в B1 Preliminary, Oxford 5000 даёт B2. Заменено на cupboard, уже данный " +
        "модулем 6 этой ступени; " +
        "`bright` — словник ограничивает слово цветом: «bright (adj – for colours) " +
        "• bright pink», а модуль брал его о погоде. Заменено на sunny, уже данный " +
        "модулем 1. " +
        "ТУДА ЖЕ ОБОРОТ `look like`: словник даёт look, look after, look at, look " +
        "for, look out — но не look like, а English Grammar Profile ставит его на " +
        "B1 (CLAUSES comparatives, «FORM: LINKING VERB + 'LIKE' OR 'SIMILAR TO'»). " +
        "Урок 5 спрашивает What is it? " +
        "СМЫСЛ, КОТОРЫЙ СЛОВНИК НЕ РАЗЛИЧАЕТ. Cambridge даёт `cover`, `case`, " +
        "`speaker` и `cabinet` без пояснений и почти без примеров, а модуль учит " +
        "их как «чехол», «футляр», «колонка» и «шкафчик». Сами слова ступени " +
        "принадлежат, а смысл выбран нами: методист отметил это как решение " +
        "владельца как преподавателя. " +
        "УРОК СЛОВ ЧАСТИ ВТОРОЙ берёт ещё тридцать записей, и все тридцать " +
        "словник содержит: post office, bus station, petrol station, police " +
        "station, sports centre, shopping centre, shop assistant, traffic light, " +
        "police officer, police car, aeroplane, driving licence, close to, out " +
        "of, by accident, nationality, occupation, birth, identification, Mr, " +
        "Mrs, Ms, okay, all right, no one, instead of, minus, well known, " +
        "left-hand, right hand. " +
        "ДВЕ ЗАМЕНЫ ПО РАЗБОРУ МЕТОДИСТА 30 августа 2026. Карточка `driving` " +
        "стояла отдельной записью, а словник ведёт `driving/driver's licence` — " +
        "взято `driving licence`; заодно ушёл прежний пример с `-ing` в " +
        "подлежащем (English Grammar Profile, NOUNS types, B2, «FORM '-ING' " +
        "FORMS, SUBJECT»). Карточка `since` снята отсюда и перенесена в урок " +
        "слов части четвёртой: её единственное употребление требует Present " +
        "Perfect, а это B1 (PAST present perfect simple, «FORM/USE: DURATION " +
        "WITH 'SINCE'») и модуль 22 нашей ступени. На её место взято `shopping " +
        "centre` — здание, и тема урока та же",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение всех карточек модуля. Условности курса применены: `r` вместо `ɹ`, " +
        "`g` вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, знак ударения перед слогом. " +
        "СНЯТЫ НАРОЧНО: `wind` и `windy` — оба источника читают их как глагол " +
        "«наматывать» (`waɪnd`), а не как ветер; `drawer` и `document` Викисловарь " +
        "даёт по-американски; `wifi` не знает ни один источник. Такие слова решает " +
        "владелец как преподаватель, и ради нескольких карточек копить ему решения " +
        "незачем. Слова остались в запасе ступени",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "mozhet-byt-might",
      title: "Может быть: It might rain tomorrow",
      estimatedMinutes: 15,
      outcome: "говорить о возможном: It might rain tomorrow",
      vozvrat: [{ iz: "davay-ya", zadanie: "z1-dopisat-shall" }],

      blocks: [
        {
          id: "zachem-govorit-o-vozmozhnom",
          kind: "explain",
          text: [
            "Алим смотрит на небо и не знает, будет ли завтра дождь.",
            "It might rain tomorrow. — Завтра, может быть, пойдёт дождь.",
            "Так делают предположение: говорят о том, в чём не уверены.",
            "По-русски для этого хватает вставленных слов — «может быть», «наверное».",
            "Сам глагол при этом не меняется: «пойдёт» остаётся «пойдёт».",
            "По-английски меняется как раз глагольная часть: вместо will встаёт might.",
            "В модуле «Я сделаю» строка It will rain tomorrow говорила то же о завтрашнем дожде, только без сомнения.",
          ],
        },
        {
          id: "might-po-licam",
          kind: "table",
          caption: "Might при разных лицах",
          zvuchat: [
            "I might come.",
            "You might come.",
            "He might come.",
            "She might come.",
            "It might rain.",
            "We might come.",
            "They might come.",
          ],
          head: ["Кто", "Запись"],
          rows: [
            ["I", "I might come."],
            ["you", "You might come."],
            ["he", "He might come."],
            ["she", "She might come."],
            ["it", "It might rain."],
            ["we", "We might come."],
            ["they", "They might come."],
          ],
        },
        {
          id: "chto-ne-menyaetsya",
          kind: "explain",
          text: [
            "Само слово might не меняется ни при одном лице.",
            "И глагол после него не меняется тоже: у he и she окончания -s тут нет.",
            "Вместо местоимения может стоять имя, и запись та же: Dana might come.",
            "Речь при этом о сегодняшнем дне или о завтрашнем, но не о прошлом.",
          ],
        },
        {
          id: "ne-stavim-s-posle-might",
          kind: "note",
          tone: "mistake",
          text:
            "«He might comes» — так не говорят.\n\nПосле might глагол стоит как " +
            "есть: He might come.",
        },
        {
          id: "pogoda-na-zavtra",
          kind: "example",
          caption: "Разговор о завтрашней погоде",
          razgovor: true,
          zvuchat: [
            "What is the weather tomorrow?",
            "It might rain tomorrow.",
            "Then I'll take an umbrella.",
            "The morning might be sunny, but take it anyway.",
          ],
          text:
            "What is the weather tomorrow?\nIt might rain tomorrow.\nThen I'll take an umbrella.\nThe morning might be sunny, but take it anyway.",
          perevod: {
            "What is the weather tomorrow?": "Какая завтра погода?",
            "It might rain tomorrow.": "Завтра, может быть, пойдёт дождь.",
            "Then I'll take an umbrella.": "Тогда я возьму зонт.",
            "The morning might be sunny, but take it anyway.":
              "Утро, может быть, будет солнечным, но всё равно возьми.",
          },
          explain:
            "Оба предположения о завтрашнем дне, и оба стоят со словом might. " +
            "Между ними обычное будущее — I'll take, — потому что зонт человек " +
            "берёт наверняка.",
        },
        {
          id: "slovar-pogody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "umbrella", translation: "зонт", example: "Then I'll take an umbrella.", hint: "/ʌmˈbrelə/" },
            { term: "heavy", translation: "сильный, тяжёлый", example: "The rain might be heavy tomorrow.", hint: "/ˈhevi/" },
            { term: "might", translation: "может быть, возможно", example: "The weather might be hot.", hint: "/maɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-might",
          kind: "gap",
          prompt: "Завтра, может быть, пойдёт дождь. Допиши недостающее слово.",
          before: "It ",
          after: " rain tomorrow.",
          answer: "might",
          accept: ["may"],
          hint: "Одно слово перед глаголом делает всю строку предположением.",
          why:
            "It might rain tomorrow. Слово might стоит перед глаголом и говорит, " +
            "что дождь только возможен. Слово may сюда годится так же — оно " +
            "приходит следующим уроком.",
        },
        {
          id: "z2-vybrat-bez-okonchaniya",
          kind: "choice",
          prompt: "Дана, может быть, придёт завтра. Какая запись верна?",
          options: [
            { text: "Dana might comes tomorrow." },
            { text: "Dana might to come tomorrow." },
            { text: "Dana might come tomorrow.", correct: true },
          ],
          hint: "Проверь, что стоит между might и самим глаголом.",
          why:
            "Dana might come tomorrow. После might глагол стоит как есть: ни " +
            "окончания, ни слова to перед ним.",
        },
        {
          id: "z3-otmetit-predpolozheniya",
          kind: "hottext",
          prompt: "Отметь строки, где о деле говорят как о возможном.",
          parts: [
            { text: "The rain might be heavy tomorrow", selectable: true, correct: true },
            { text: " · " },
            { text: "The weather is warm today", selectable: true },
            { text: " · " },
            { text: "We might take an umbrella", selectable: true, correct: true },
            { text: " · " },
            { text: "The morning is sunny", selectable: true },
          ],
          hint: "Возможное узнают по слову перед глаголом.",
          why:
            "Возможное в первой и третьей строках — там стоит might. Вторая и " +
            "четвёртая говорят о деле как о верном.",
        },
        {
          id: "z4-sobrat-o-pogode",
          kind: "order",
          prompt: "Собери строку: утро, может быть, будет ясным.",
          items: ["sunny.", "be", "might", "The morning"],
          answer: [3, 2, 1, 0],
          hint: "Сначала о чём речь, потом might, потом сам глагол.",
          why:
            "The morning might be sunny. Слово might стоит сразу перед глаголом, " +
            "а не в начале строки.",
        },
        {
          id: "z5-napisat-o-dozhde",
          kind: "short",
          prompt:
            "Прогноз не обещает точно. Скажи по-английски, что дождь завтра может быть сильным. Начни с The rain.",
          answer: "The rain might be heavy tomorrow.",
          accept: [
            "The rain might be heavy tomorrow",
            "The rain may be heavy tomorrow.",
            "The rain may be heavy tomorrow",
          ],
          hint: "Сильный дождь по-английски heavy rain.",
          why:
            "The rain might be heavy tomorrow. Слово might делает строку " +
            "предположением, а heavy говорит, каким дождь может выйти.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "to-zhe-cherez-may",
      title: "То же через may: It may be in my backpack",
      estimatedMinutes: 14,
      outcome: "говорить о возможном через may: It may be in my backpack",

      blocks: [
        {
          id: "zachem-vtoroe-slovo",
          kind: "explain",
          text: [
            "У Даны пропал ключ, и она перебирает места, где он может лежать.",
            "По-английски она говорит It may be in my backpack.",
            "Слово may делает ровно то же, что might: превращает строку в предположение.",
            "Собирают её так же — may, потом глагол без окончаний.",
          ],
        },
        {
          id: "may-i-might-ryadom",
          kind: "table",
          caption: "Одна мысль двумя словами",
          zvuchat: [
            "It may be in my backpack.",
            "It might be in my backpack.",
            "She may know.",
            "She might know.",
          ],
          head: ["Через may", "Через might"],
          rows: [
            ["It may be in my backpack.", "It might be in my backpack."],
            ["She may know.", "She might know."],
          ],
        },
        {
          id: "raznicy-net",
          kind: "explain",
          text: [
            "Обе строки в таблице говорят, что говорящий не уверен.",
            "Обе годятся и о сегодняшнем дне, и о завтрашнем.",
            "Значит на этом месте годится любое из двух слов: бери то, которое вспомнилось.",
          ],
        },
        {
          id: "gde-mozhet-lezhat",
          kind: "example",
          caption: "Ключ куда-то делся",
          razgovor: true,
          zvuchat: [
            "Where is the key?",
            "It may be in my handbag.",
            "I looked there.",
            "Then it might be in the cabinet, or under the carpet.",
          ],
          text:
            "Where is the key?\nIt may be in my handbag.\nI looked there.\nThen it might be in the cabinet, or under the carpet.",
          perevod: {
            "Where is the key?": "Где ключ?",
            "It may be in my handbag.": "Может быть, он у меня в сумке.",
            "I looked there.": "Я там смотрел.",
            "Then it might be in the cabinet, or under the carpet.":
              "Тогда, может быть, он в шкафчике или под ковром.",
          },
          explain:
            "Первое место названо через may, второе через might, и разницы между " +
            "ними нет. Оба раза говорящий гадает, а не знает.",
        },
        {
          id: "slovar-mest",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "handbag", translation: "сумочка", example: "It may be in my handbag.", hint: "/ˈhændbæg/" },
            { term: "backpack", translation: "рюкзак", example: "It may be in my backpack.", hint: "/ˈbækpæk/" },
            { term: "cabinet", translation: "шкафчик", example: "It might be in the cabinet.", hint: "/ˈkæbɪnət/" },
            { term: "bookcase", translation: "книжный шкаф", example: "The book may be in the bookcase.", hint: "/ˈbʊkkeɪs/" },
            { term: "carpet", translation: "ковёр", example: "It might be under the carpet.", hint: "/ˈkɑːpɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-may",
          kind: "gap",
          prompt: "Ключ, может быть, лежит в рюкзаке. Допиши недостающее слово.",
          before: "It ",
          after: " be in my backpack.",
          answer: "may",
          accept: ["might"],
          hint: "Перед глаголом встаёт слово неуверенности — годится любое из двух.",
          why:
            "It may be in my backpack. Слово might сюда подходит так же: оба " +
            "ставят перед глаголом ту же неуверенность.",
        },
        {
          id: "z2-perepisat-cherez-might",
          kind: "short",
          prompt:
            "Строку It may be in the cabinet скажи другим словом, не меняя смысла.",
          answer: "It might be in the cabinet.",
          accept: ["It might be in the cabinet"],
          hint: "Меняется ровно одно слово, остальное остаётся как было.",
          why:
            "It might be in the cabinet. Смысл не изменился: обе строки говорят о " +
            "возможном.",
        },
        {
          id: "z3-vybrat-pri-neskolkih",
          kind: "choice",
          prompt: "Ключей несколько, и они, может быть, в шкафу. Какая запись верна?",
          options: [
            { text: "The keys may are in the cupboard." },
            { text: "The keys may be in the cupboard.", correct: true },
            { text: "The keys may being in the cupboard." },
          ],
          hint: "После may глагол не меняется, сколько бы вещей ни было.",
          why:
            "The keys may be in the cupboard. Форма be остаётся и при одной вещи, " +
            "и при нескольких: слово may её не трогает.",
        },
        {
          id: "z4-otmetit-vernye-zapisi",
          kind: "hottext",
          prompt: "Отметь строки, записанные верно.",
          parts: [
            { text: "It may be under the carpet", selectable: true, correct: true },
            { text: " · " },
            { text: "It may to be in the cabinet", selectable: true },
            { text: " · " },
            { text: "She may be at home", selectable: true, correct: true },
            { text: " · " },
            { text: "He may knows the way", selectable: true },
          ],
          hint: "Смотри, что стоит между may и глаголом и чем глагол кончается.",
          why:
            "Верны первая и третья строки. Во второй перед глаголом влезло to, а в " +
            "четвёртой к глаголу приросло окончание.",
        },
        {
          id: "z5-nazvat-mesto",
          kind: "short",
          prompt:
            "Тебя спросили, где книга. Наверняка не знаешь, но думаешь на книжный шкаф. Ответь одной строкой через may.",
          answer: "It may be in the bookcase.",
          accept: ["It may be in the bookcase", "It might be in the bookcase."],
          hint: "Книжный шкаф по-английски the bookcase.",
          why:
            "It may be in the bookcase. Строка через might сюда тоже подходит: оба " +
            "слова делают одно дело.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "maybe-v-nachale",
      title: "Maybe перед строкой: Maybe it's in the car",
      estimatedMinutes: 14,
      outcome: "ставить maybe перед строкой: Maybe it's in the car",

      blocks: [
        {
          id: "zachem-maybe",
          kind: "explain",
          text: [
            "Дана ищет ключ дальше и вспоминает про машину.",
            "Она говорит Maybe it's in the car.",
            "Слово maybe встаёт перед всей строкой, а не внутрь неё.",
            "Поэтому глагол остаётся обычным: it's, а не it may be.",
            "Так же работает слово perhaps: Perhaps it's in the car.",
          ],
        },
        {
          id: "dva-sposoba-vsomnitsya",
          kind: "table",
          caption: "Где стоит слово неуверенности",
          zvuchat: [
            "It might be in the car.",
            "Maybe it's in the car.",
            "The app may be old.",
            "Perhaps the app is old.",
          ],
          head: ["Внутри строки", "Перед строкой"],
          rows: [
            ["It might be in the car.", "Maybe it's in the car."],
            ["The app may be old.", "Perhaps the app is old."],
          ],
        },
        {
          id: "chto-menyaetsya-so-slovom",
          kind: "explain",
          text: [
            "Слова might и may встают внутрь строки, перед глаголом.",
            "Слова maybe и perhaps встают снаружи, перед всей строкой.",
            "Поэтому после maybe глагол остаётся тем же, каким был: it's, the app is.",
            "Смысл у обоих способов один: говорящий не уверен.",
          ],
        },
        {
          id: "maybe-ne-vnutri",
          kind: "note",
          tone: "mistake",
          text:
            "«It maybe in the car» — так не говорят.\n\nВ строке не хватает " +
            "глагола: слово maybe его не заменяет. Годится Maybe it's in the car " +
            "или It may be in the car.",
        },
        {
          id: "gde-fayl",
          kind: "example",
          caption: "Пропала запись с телефона",
          razgovor: true,
          zvuchat: [
            "I can't find the song.",
            "Maybe the download stopped.",
            "Perhaps it's in another folder.",
            "Or maybe the app is old.",
          ],
          text:
            "I can't find the song.\nMaybe the download stopped.\nPerhaps it's in another folder.\nOr maybe the app is old.",
          perevod: {
            "I can't find the song.": "Не могу найти песню.",
            "Maybe the download stopped.": "Может быть, загрузка оборвалась.",
            "Perhaps it's in another folder.": "Возможно, она в другой папке.",
            "Or maybe the app is old.": "Или, может быть, приложение старое.",
          },
          explain:
            "Все три предположения стоят словом снаружи, и глаголы внутри строк " +
            "обычные: stopped, is. Слово or перед maybe просто присоединяет " +
            "следующее предположение к прежнему.",
        },
        {
          id: "slovar-telefona",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "app", translation: "приложение", example: "Maybe the app is old.", hint: "/æp/" },
            { term: "download", translation: "загрузка", example: "Maybe the download stopped.", hint: "/ˈdaʊnləʊd/" },
            { term: "upload", translation: "выгрузка", example: "The upload may be slow today.", hint: "/ˈʌpləʊd/" },
            { term: "folder", translation: "папка", example: "Perhaps it's in another folder.", hint: "/ˈfəʊldə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-postavit-maybe",
          kind: "gap",
          prompt:
            "Про машину наверняка не знаешь. Допиши слово перед строкой.",
          before: "",
          after: " it's in the car.",
          answer: "Maybe",
          accept: ["Perhaps"],
          hint: "Это слово встаёт снаружи, а глагол внутри строки не трогает.",
          why:
            "Maybe it's in the car. Слово стоит перед всей строкой, и потому " +
            "внутри осталось обычное it's. Слово perhaps годится здесь так же.",
        },
        {
          id: "z2-vybrat-vernoe-mesto",
          kind: "choice",
          prompt: "Приложение, может быть, старое. Какая запись верна?",
          options: [
            { text: "The app maybe old." },
            { text: "Maybe the app is old.", correct: true },
            { text: "Maybe the app old." },
          ],
          hint: "Слово maybe стоит снаружи, а строка после него обычная.",
          why:
            "Maybe the app is old. Внутри строки остался обычный глагол is, а " +
            "maybe встал перед ней.",
        },
        {
          id: "z3-perepisat-cherez-maybe",
          kind: "short",
          prompt:
            "Строку The download may be slow скажи через maybe, не меняя смысла.",
          answer: "Maybe the download is slow.",
          accept: [
            "Maybe the download is slow",
            "Perhaps the download is slow.",
          ],
          hint: "Слово may уходит, а глагол становится обычным.",
          why:
            "Maybe the download is slow. Вместе с may из строки уходит и её " +
            "неуверенность внутри — она переезжает в первое слово.",
        },
        {
          id: "z4-otmetit-vernoe",
          kind: "hottext",
          prompt: "Отметь строки, записанные верно.",
          parts: [
            { text: "Perhaps the folder is empty", selectable: true, correct: true },
            { text: " · " },
            { text: "The upload maybe slow", selectable: true },
            { text: " · " },
            { text: "Maybe the app is old", selectable: true, correct: true },
            { text: " · " },
            { text: "It maybe in the car", selectable: true },
          ],
          hint: "Слово maybe годится только перед всей строкой.",
          why:
            "Верны первая и третья строки. Во второй и четвёртой maybe стоит " +
            "внутри строки, а там место для may или might.",
        },
        {
          id: "z5-sobrat-s-perhaps",
          kind: "order",
          prompt: "Собери строку: может быть, выгрузка идёт медленно.",
          items: ["slow.", "is", "the upload", "Perhaps"],
          answer: [3, 2, 1, 0],
          hint: "Слово неуверенности идёт первым, и строка за ним обычная.",
          why:
            "Perhaps the upload is slow. После perhaps строка собрана так же, как " +
            "без него.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ya-uveren",
      title: "Я уверен: I'm sure it's in the cabinet",
      estimatedMinutes: 14,
      outcome: "говорить об уверенности: I'm sure it's in the cabinet",

      blocks: [
        {
          id: "zachem-uverennost",
          kind: "explain",
          text: [
            "Ключ нашёлся, и на другой день Дану снова спрашивают, где он.",
            "Теперь сомнений нет, и она говорит I'm sure it's in the cabinet.",
            "Так говорят об уверенности: предположение здесь уже не годится.",
            "Сначала идёт I'm sure, а за ним обычная строка о самом деле.",
            "Слово sure значит «уверен».",
          ],
        },
        {
          id: "uveren-ili-net",
          kind: "table",
          caption: "Уверен и не уверен",
          zvuchat: [
            "I'm sure it's in the cabinet.",
            "Maybe it's in the cabinet.",
            "I'm sure she knows the password.",
            "She might know the password.",
          ],
          head: ["Уверенность", "Предположение"],
          rows: [
            ["I'm sure it's in the cabinet.", "Maybe it's in the cabinet."],
            ["I'm sure she knows the password.", "She might know the password."],
          ],
        },
        {
          id: "kak-sobrana-uverennost",
          kind: "explain",
          text: [
            "После I'm sure строка обычная, как после maybe: it's, she knows.",
            "Окончание -s у третьего лица там остаётся: she knows, he works.",
            "Меняет всё только начало: I'm sure говорит, что говорящий не гадает.",
          ],
        },
        {
          id: "razgovor-o-naushnikah",
          kind: "example",
          caption: "Наушники нашлись не сразу",
          razgovor: true,
          zvuchat: [
            "Where are my headphones?",
            "I'm sure they're in the black case.",
            "The case is empty.",
            "Then maybe the speaker is on the shelf with them.",
          ],
          text:
            "Where are my headphones?\nI'm sure they're in the black case.\nThe case is empty.\nThen maybe the speaker is on the shelf with them.",
          perevod: {
            "Where are my headphones?": "Где мои наушники?",
            "I'm sure they're in the black case.":
              "Я уверен, что они в чёрном чехле.",
            "The case is empty.": "Чехол пустой.",
            "Then maybe the speaker is on the shelf with them.":
              "Тогда, может быть, колонка лежит на полке вместе с ними.",
          },
          explain:
            "Первая строка обещает наверняка, и обещание не сбылось. Второе " +
            "предположение сказано осторожнее — со словом maybe.",
        },
        {
          id: "slovar-veshchey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "headphones", translation: "наушники", example: "Where are my headphones?", hint: "/ˈhedfəʊnz/" },
            { term: "speaker", translation: "колонка", example: "Maybe the speaker is on the shelf.", hint: "/ˈspiːkə/" },
            { term: "case", translation: "футляр", example: "I'm sure they're in the black case.", hint: "/keɪs/" },
            { term: "password", translation: "пароль", example: "I'm sure she knows the password.", hint: "/ˈpɑːswɜːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-sure",
          kind: "gap",
          prompt: "Ты не сомневаешься, что вещь в шкафчике. Допиши недостающее слово.",
          before: "I'm ",
          after: " it's in the cabinet.",
          answer: "sure",
          hint: "Это слово значит «уверен».",
          why:
            "I'm sure it's in the cabinet. После него идёт обычная строка о самом " +
            "деле.",
        },
        {
          id: "z2-vybrat-okonchanie-posle-sure",
          kind: "choice",
          prompt: "Сомнений нет: Дана знает пароль. Какая запись верна?",
          options: [
            { text: "I'm sure Dana know the password." },
            { text: "I'm sure Dana knows the password.", correct: true },
            { text: "I sure Dana knows the password." },
          ],
          hint: "После I'm sure строка обычная, а у третьего лица окончание своё.",
          why:
            "I'm sure Dana knows the password. Окончание -s осталось на месте, а в " +
            "начале нужен глагол: не I sure, а I'm sure.",
        },
        {
          id: "z3-otlichit-po-nachalu",
          kind: "hottext",
          prompt: "Отметь строки, где говорящий уверен.",
          parts: [
            { text: "I'm sure the case is in the car", selectable: true, correct: true },
            { text: " · " },
            { text: "Maybe the case is in the car", selectable: true },
            { text: " · " },
            { text: "I'm sure he knows the password", selectable: true, correct: true },
            { text: " · " },
            { text: "He might know the password", selectable: true },
          ],
          hint: "Уверенность видна по первым двум словам строки.",
          why:
            "Уверен говорящий в первой и третьей строках. Во второй и четвёртой " +
            "стоят слова неуверенности — maybe и might.",
        },
        {
          id: "z4-sobrat-uverennost",
          kind: "order",
          prompt: "Собери строку: сомнений нет, наушники в футляре.",
          items: ["in the case.", "the headphones are", "sure", "I'm"],
          answer: [3, 2, 1, 0],
          hint: "Сначала два слова об уверенности, потом обычная строка.",
          why:
            "I'm sure the headphones are in the case. Наушников несколько, поэтому " +
            "внутри строки стоит are.",
        },
        {
          id: "z5-skazat-uverenno",
          kind: "short",
          prompt:
            "Ты точно знаешь, что колонка на полке. Скажи это по-английски, начав с I'm.",
          answer: "I'm sure the speaker is on the shelf.",
          accept: ["I'm sure the speaker is on the shelf", "I'm sure that the speaker is on the shelf."],
          hint: "Колонка одна, и потому внутри строки стоит is.",
          why:
            "I'm sure the speaker is on the shelf. Начало говорит об уверенности, " +
            "а дальше идёт обычная строка.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "tochno-ili-vozmozhno",
      title: "Точно или может быть",
      estimatedMinutes: 14,
      outcome: "отличать уверенность от предположения",

      blocks: [
        {
          id: "zachem-otlichat",
          kind: "explain",
          text: [
            "Данияр сказал приятелю I'm sure the bag is in the car, и тот съездил зря.",
            "Скажи он It may be in the car — приятель сначала позвонил бы.",
            "Слово выбирают не для красоты: от него зависит, поедет человек или нет.",
            "Уверенность обещает, предположение только называет одно из мест.",
          ],
        },
        {
          id: "chetyre-sposoba",
          kind: "table",
          caption: "Чем сказать об одном и том же",
          zvuchat: [
            "I'm sure it's silver.",
            "It may be silver.",
            "It might be silver.",
            "Maybe it's silver.",
          ],
          head: ["Запись", "Что она обещает"],
          rows: [
            ["I'm sure it's silver.", "говорящий не сомневается"],
            ["It may be silver.", "говорящий не уверен"],
            ["It might be silver.", "говорящий не уверен"],
            ["Maybe it's silver.", "говорящий не уверен"],
          ],
        },
        {
          id: "tri-iz-chetyreh-odno",
          kind: "explain",
          text: [
            "Три нижние строки все три говорят о неуверенности, и любая из них годится.",
            "Собраны они по-разному: may и might стоят внутри строки, maybe — перед ней.",
            "Верхняя строка стоит особняком: она одна обещает наверняка.",
            "Выбирать надо между верхней и любой из нижних, а не между нижними.",
          ],
        },
        {
          id: "opisanie-veshchi",
          kind: "example",
          caption: "Что за вещь потерялась",
          razgovor: true,
          zvuchat: [
            "What is it?",
            "I'm sure it's a metal bracelet.",
            "Silver or not?",
            "It may be silver, I don't remember.",
            "Thin or heavy?",
            "Maybe it's thin.",
          ],
          text:
            "What is it?\nI'm sure it's a metal bracelet.\nSilver or not?\nIt may be silver, I don't remember.\nThin or heavy?\nMaybe it's thin.",
          perevod: {
            "What is it?": "Что это за вещь?",
            "I'm sure it's a metal bracelet.":
              "Я уверен, что это металлический браслет.",
            "Silver or not?": "Серебряный или нет?",
            "It may be silver, I don't remember.":
              "Может быть, серебряный, я не помню.",
            "Thin or heavy?": "Тонкий или массивный?",
            "Maybe it's thin.": "Может быть, тонкий.",
          },
          explain:
            "О самой вещи хозяин говорит уверенно, а о серебре и о толщине — нет. " +
            "Три разных способа стоят в одном разговоре и не мешают друг другу.",
        },
        {
          id: "slovar-materialov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "silver", translation: "серебряный", example: "It may be silver.", hint: "/ˈsɪlvə/" },
            { term: "metal", translation: "металлический", example: "I'm sure it's a metal bracelet.", hint: "/ˈmetl/" },
            { term: "plastic", translation: "пластмассовый", example: "Maybe it's plastic.", hint: "/ˈplɑːstɪk/" },
            { term: "cover", translation: "чехол, обложка", example: "The cover may be plastic.", hint: "/ˈkʌvə/" },
            { term: "bracelet", translation: "браслет", example: "I'm sure it's a metal bracelet.", hint: "/ˈbreɪslət/" },
            { term: "thin", translation: "тонкий", example: "Maybe it's a thin silver bracelet.", hint: "/θɪn/" },
            { term: "soft", translation: "мягкий", example: "Inside there is a soft plastic cover.", hint: "/sɒft/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-po-obeshchaniyu",
          kind: "choice",
          prompt:
            "Вещь у тебя перед глазами, и она металлическая. Какая запись верна?",
          options: [
            { text: "Maybe it's metal." },
            { text: "I'm sure it's metal.", correct: true },
            { text: "It might be metal." },
          ],
          hint: "Вещь перед глазами, значит гадать не о чем.",
          why:
            "I'm sure it's metal. Две другие строки сказали бы о неуверенности, а " +
            "вещь лежит перед глазами.",
        },
        {
          id: "z2-oslabit-obeshchanie",
          kind: "short",
          prompt:
            "Строку I'm sure it's silver перепиши так, чтобы она перестала обещать наверняка. Начни со слова It.",
          answer: "It may be silver.",
          accept: ["It might be silver.", "It may be silver", "It might be silver"],
          hint: "Начало уходит, а внутрь строки встаёт одно слово.",
          why:
            "It may be silver. Строка через might сюда подходит так же: оба слова " +
            "делают одно дело.",
        },
        {
          id: "z3-sootnesti-zapis-i-obeshchanie",
          kind: "match",
          prompt: "Соедини запись и то, что она обещает.",
          left: [
            "I'm sure the cover is plastic.",
            "The cover may be plastic.",
            "Maybe the cover is plastic.",
          ],
          right: [
            "говорящий не уверен, слово стоит перед строкой",
            "говорящий не сомневается",
            "говорящий не уверен, слово стоит внутри строки",
          ],
          answer: [1, 2, 0],
          hint: "Две строки обещают одно, и различить их можно только по месту слова.",
          why:
            "Первая обещает наверняка. Во второй слово неуверенности стоит внутри " +
            "строки, в третьей — перед ней.",
        },
        {
          id: "z4-otmetit-obeshchanie",
          kind: "hottext",
          prompt: "После каких строк стоит сперва позвонить, а не ехать?",
          parts: [
            { text: "It might be in the office", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm sure it's in the office", selectable: true },
            { text: " · " },
            { text: "Maybe it's in the office", selectable: true, correct: true },
            { text: " · " },
            { text: "It may be in the office", selectable: true, correct: true },
          ],
          hint: "Звонят там, где вещи может и не оказаться.",
          why:
            "Позвонить стоит после трёх строк с предположением: вещь там может " +
            "быть, а может и не быть. Наверняка обещает только I'm sure it's in " +
            "the office.",
        },
        {
          id: "z5-otvetit-dvumya-strokami",
          kind: "short",
          prompt:
            "Про серебро память молчит, и обещать нечего. Скажи о браслете одной строкой, начав со слова It.",
          answer: "It may be silver.",
          accept: [
            "It may be silver",
            "It might be silver.",
            "It might be silver",
          ],
          hint: "Слово неуверенности встаёт внутрь строки, перед глаголом.",
          why:
            "It may be silver. Строка через might сюда подходит так же, а вот I'm " +
            "sure обещала бы то, чего говорящий не знает.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-obyavlenie-o-nahodkah",
      title: "Читаем объявление бюро находок",
      estimatedMinutes: 13,
      outcome: "находить в объявлении приметы вещи и время работы",

      blocks: [
        {
          id: "zachem-chitat-obyavlenie",
          kind: "explain",
          text: [
            "На вокзале висит объявление о найденных вещах.",
            "Такой текст не читают подряд: в нём ищут свою вещь по приметам.",
            "Приметы — это что за вещь, из чего она и какого цвета.",
            "Ниже объявление, и вопросы будут о приметах и о времени работы.",
          ],
        },
        {
          id: "obyavlenie-byuro",
          kind: "text",
          title: "LOST PROPERTY",
          genre: "notice",
          body: [
            "LOST PROPERTY OFFICE — PLATFORM 2",
            "We have a silver necklace, a metal bracelet and a black belt.",
            "We also have an earring, a green raincoat and two grey socks.",
            "The office is open from nine to six. It may be closed at lunchtime.",
            "Come with your ticket. Maybe your thing is here!",
          ],
          glossary: [
            { term: "lunchtime", translation: "обеденный перерыв" },
            { term: "LOST PROPERTY", translation: "бюро находок" },
            { term: "We have", translation: "у нас есть" },
            { term: "Come with", translation: "приходи с" },
          ],
        },
        {
          id: "kak-iskat-primety",
          kind: "note",
          tone: "info",
          text:
            "Примету называет прилагательное, и в английском оно стоит ПЕРЕД вещью: " +
            "silver necklace, metal bracelet, green raincoat.\n\nПо этим парам свою " +
            "вещь и узнают.",
        },
        {
          id: "slovar-ukrasheniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "necklace", translation: "ожерелье", example: "We have a silver necklace.", hint: "/ˈnekləs/" },
            { term: "sock", translation: "носок", example: "We have two grey socks.", hint: "/sɒk/" },
            { term: "earring", translation: "серьга", example: "We also have an earring.", hint: "/ˈɪərɪŋ/" },
            { term: "belt", translation: "ремень", example: "We have a black belt.", hint: "/belt/" },
            { term: "raincoat", translation: "плащ", example: "We also have a green raincoat.", hint: "/ˈreɪnkəʊt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-iz-chego-ozherelye",
          about: "obyavlenie-byuro",
          kind: "short",
          prompt: "Из чего сделано ожерелье? Ответь одним словом по-английски.",
          answer: "silver",
          accept: ["Silver"],
          hint: "Примета стоит прямо перед самой вещью.",
          why: "A silver necklace. Прилагательное стоит перед самой вещью.",
        },
        {
          id: "z2-skolko-noskov",
          about: "obyavlenie-byuro",
          kind: "short",
          prompt: "Сколько носков в бюро находок? Ответь числом.",
          answer: "two",
          accept: ["2", "Two"],
          hint: "Число стоит прямо перед словом socks.",
          why: "Two grey socks. Число названо перед приметой и самой вещью.",
        },
        {
          id: "z3-otmetit-veshchi-iz-obyavleniya",
          about: "obyavlenie-byuro",
          kind: "hottext",
          prompt: "Отметь вещи, которые есть в бюро находок.",
          parts: [
            { text: "a bracelet", selectable: true, correct: true },
            { text: " · " },
            { text: "headphones", selectable: true },
            { text: " · " },
            { text: "a raincoat", selectable: true, correct: true },
            { text: " · " },
            { text: "an umbrella", selectable: true },
          ],
          hint: "Читай оба перечня вещей подряд.",
          why:
            "В бюро есть браслет и плащ. Наушников и зонта в объявлении нет вовсе.",
        },
        {
          id: "z4-do-skolki-otkryto",
          about: "obyavlenie-byuro",
          kind: "short",
          prompt: "До скольки открыто бюро? Ответь числом.",
          answer: "six",
          accept: ["6", "Six", "at six"],
          hint: "Время работы названо двумя числами через слово to.",
          why: "The office is open from nine to six. Второе число и есть конец дня.",
        },
        {
          id: "z5-chto-neizvestno",
          about: "obyavlenie-byuro",
          kind: "choice",
          prompt: "О чём объявление говорит неуверенно?",
          options: [
            { text: "О времени открытия." },
            { text: "О перерыве на обед.", correct: true },
            { text: "О номере платформы." },
          ],
          hint: "Ищи в объявлении строку со словом may.",
          why:
            "О перерыве. Строка It may be closed at lunchtime — единственная, где " +
            "стоит слово неуверенности.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-prognoz",
      title: "Слушаем прогноз погоды",
      estimatedMinutes: 13,
      outcome: "слышать в прогнозе, что обещают наверняка, а что нет",

      blocks: [
        {
          id: "zachem-slushat-prognoz",
          kind: "explain",
          text: [
            "Прогноз говорят голосом и повторяют не всегда.",
            "Слушать надо три вещи: что обещают наверняка, о чём говорят неуверенно и что советуют взять.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-prognoza",
          kind: "audio",
          caption: "Прогноз и разговор о нём",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "The morning is sunny and dry. The rain might be heavy after four. — " +
            "Shall I take a raincoat? — Take a coat, it may be cold. — And the socks? " +
            "— Maybe two pairs.",
        },
        {
          id: "chto-slushat-v-prognoze",
          kind: "note",
          tone: "info",
          text:
            "Слушай, каким обещают утро, когда возможен дождь и что советуют " +
            "надеть.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-odezhdy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "coat", translation: "пальто", example: "Take a coat, it may be cold.", hint: "/kəʊt/" },
            { term: "jumper", translation: "свитер", example: "A jumper might be enough today.", hint: "/ˈdʒʌmpə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakim-obeshchayut-utro",
          about: "zapis-prognoza",
          kind: "short",
          prompt: "Каким обещают утро? Ответь одним словом по-английски.",
          answer: "sunny",
          accept: ["dry"],
          hint: "Об утре сказано двумя словами, и любое из них годится.",
          why:
            "The morning is sunny and dry. Об утре говорят наверняка, без слов " +
            "неуверенности.",
        },
        {
          id: "z2-kogda-dozhd",
          about: "zapis-prognoza",
          kind: "short",
          prompt: "После скольки возможен сильный дождь? Ответь числом.",
          answer: "four",
          accept: ["4", "Four", "after four"],
          hint: "Число стоит в конце строки о дожде.",
          why: "The rain might be heavy after four. Час назван после слова after.",
        },
        {
          id: "z3-chto-sovetuyut-vzyat",
          about: "zapis-prognoza",
          kind: "choice",
          prompt: "Что советуют взять?",
          options: [
            { text: "Плащ." },
            { text: "Зонт." },
            { text: "Пальто.", correct: true },
          ],
          hint: "Про плащ спросили, но ответили другое.",
          why:
            "Пальто. На вопрос о плаще отвечают Take a coat — советуют не то, о " +
            "чём спросили.",
        },
        {
          id: "z4-o-chem-govoryat-neuverenno",
          about: "zapis-prognoza",
          kind: "hottext",
          prompt: "Отметь то, о чём в записи говорят неуверенно.",
          parts: [
            { text: "сильный дождь", selectable: true, correct: true },
            { text: " · " },
            { text: "ясное утро", selectable: true },
            { text: " · " },
            { text: "холод", selectable: true, correct: true },
            { text: " · " },
            { text: "две пары носков", selectable: true, correct: true },
          ],
          hint: "Неуверенность слышна по словам might, may и maybe.",
          why:
            "Неуверенно говорят о дожде, о холоде и о носках. Об утре сказано " +
            "наверняка: The morning is sunny and dry.",
        },
        {
          id: "z5-skazat-vsluh",
          kind: "speak",
          prompt:
            "Скажи вслух: утро ясное, а дождь после четырёх возможен.",
          phrase: "The morning is sunny. The rain might be heavy after four.",
          translation: "Утро ясное. Дождь после четырёх может быть сильным.",
          hint: "Первая строка обещает, вторая гадает.",
          why:
            "The morning is sunny. The rain might be heavy after four. Слово might " +
            "стоит только во второй строке.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-obyavlenie-o-propazhe",
      title: "Пишем объявление о пропаже",
      estimatedMinutes: 15,
      outcome: "проверять объявление о пропаже: вещь, приметы, место и предположение о ней",

      blocks: [
        {
          id: "zachem-proveryat-obyavlenie",
          kind: "explain",
          text: [
            "Дана потеряла сумочку и написала объявление, а нашедший не понял, о чём речь.",
            "В объявлении о пропаже забывают не слова, а приметы.",
            "Проверить можно так: найди в тексте саму вещь, её приметы и место пропажи.",
            "Без примет объявление подходит к любой сумочке, и потому не работает.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-obyavlenii",
          kind: "table",
          caption: "Хватает ли примет",
          zvuchat: [
            "I lost a black handbag at the station.",
            "I lost a handbag.",
            "I lost a small silver earring in the park.",
          ],
          head: ["Строка", "Что в ней есть", "Годится"],
          rows: [
            ["I lost a black handbag at the station.", "вещь, примета, место", "да"],
            ["I lost a handbag.", "только вещь", "нет"],
            ["I lost a small silver earring in the park.", "вещь, две приметы, место", "да"],
          ],
        },
        {
          id: "pochemu-primety",
          kind: "explain",
          text: [
            "Примета отвечает на вопрос «как её узнать»: цвет, размер, из чего сделана.",
            "Называет её прилагательное, и стоит оно перед самой вещью: a black handbag.",
            "Место отвечает на вопрос «где искать»: на вокзале, в парке, в автобусе.",
            "Приметы своей вещи хозяин знает, и потому называет их наверняка: a small black handbag.",
            "А место пропажи он часто не помнит, и тогда говорит осторожно: Maybe I lost it on the bus.",
            "От этого и зависит, где искать: по примете вещь узнают, по месту её ищут.",
          ],
        },
        {
          id: "obrazets-obyavleniya",
          kind: "example",
          caption: "Объявление Даны",
          perevod: {
            "Inside there is a comb, a toothbrush and a soft plastic cover.":
              "Внутри расчёска, зубная щётка и мягкий пластиковый чехол.",
            "I'm sure I had it at nine. Maybe I lost it on the bus.":
              "Я уверена, что в девять она у меня была. Может быть, я потеряла её в автобусе.",
            "Please call me. The bag may be at the lost property office.":
              "Позвоните мне, пожалуйста. Сумка, может быть, в бюро находок.",
          },
          zvuchat: [
            "LOST: a small black handbag.",
            "Inside there is a comb, a toothbrush and a soft plastic cover.",
            "I'm sure I had it at nine. Maybe I lost it on the bus.",
            "Please call me. The bag may be at the lost property office.",
          ],
          text:
            "LOST: a small black handbag.\nInside there is a comb, a toothbrush and a soft plastic cover.\nI'm sure I had it at nine. Maybe I lost it on the bus.\nPlease call me. The bag may be at the lost property office.",
          explain:
            "Сама вещь и её приметы стоят первыми и сказаны наверняка. О месте и о " +
            "бюро находок Дана говорит осторожно — она не знает.",
        },
        {
          id: "slovar-obyavleniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sunglasses", translation: "тёмные очки", example: "I lost my sunglasses at the station.", hint: "/ˈsʌnglɑːsɪz/" },
            { term: "comb", translation: "расчёска", example: "Inside there is a comb.", hint: "/kəʊm/" },
            { term: "toothbrush", translation: "зубная щётка", example: "Inside there is a toothbrush.", hint: "/ˈtuːθbrʌʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-net-v-obyavlenii",
          kind: "choice",
          prompt:
            "В объявлении стоит строка: I lost a bracelet at the station. Чего в ней не хватает?",
          options: [
            { text: "Места." },
            { text: "Примет.", correct: true },
            { text: "Самой вещи." },
          ],
          hint: "Спроси себя, как нашедший узнает этот браслет среди других.",
          why:
            "Примет. Вещь названа словом bracelet, место — словами at the station, " +
            "а вот какой браслет, никто не узнает.",
        },
        {
          id: "z2-dopisat-primetu",
          kind: "gap",
          prompt:
            "Допиши примету к строке объявления: браслет серебряный.",
          before: "I lost a ",
          after: " bracelet at the station.",
          answer: "silver",
          hint: "Прилагательное встаёт перед самой вещью.",
          why:
            "I lost a silver bracelet at the station. Прилагательное стоит перед " +
            "вещью, а не после неё.",
        },
        {
          id: "z3-otmetit-polnye-obyavleniya",
          kind: "hottext",
          prompt: "Отметь строки, где названы и приметы, и место.",
          parts: [
            { text: "I lost a green raincoat on the bus", selectable: true, correct: true },
            { text: " · " },
            { text: "I lost my headphones", selectable: true },
            { text: " · " },
            { text: "I lost a small metal case in the park", selectable: true, correct: true },
            { text: " · " },
            { text: "I lost a comb at nine", selectable: true },
          ],
          hint: "Место отвечает на вопрос «где», а не «когда».",
          why:
            "Полны первая и третья строки. Во второй нет ни примет, ни места, а в " +
            "четвёртой нет примет, и вместо места назван час.",
        },
        {
          id: "z4-skazat-o-meste-ostorozhno",
          kind: "short",
          prompt:
            "Место пропажи очков не вспоминается, но мысль об автобусе есть. Напиши эту строку, начав со слова Maybe.",
          answer: "Maybe I lost my sunglasses on the bus.",
          accept: [
            "Maybe I lost my sunglasses on the bus",
            "Maybe I lost the sunglasses on the bus.",
          ],
          hint: "Слово неуверенности стоит перед всей строкой.",
          why:
            "Maybe I lost my sunglasses on the bus. О месте говорят осторожно, " +
            "потому что человек его не помнит.",
        },
        {
          id: "z5-napisat-obyavlenie",
          kind: "essay",
          prompt:
            "Напиши объявление о пропаже четырьмя строками. Назови вещь с приметами, что внутри, где вещь была в последний раз и где она может быть теперь.",
          minWords: 16,
          sample:
            "LOST: a small black handbag.\nInside there is a comb, a toothbrush and a soft plastic cover.\nI'm sure I had it at nine. Maybe I lost it on the bus.\nPlease call me. The bag may be at the lost property office.",
          checklist: [
            "названа сама вещь",
            "названы приметы: цвет, размер или из чего сделана",
            "названо, что лежит внутри",
            "названо место, где вещь была в последний раз",
            "о том, где вещь теперь, сказано словом may, might или maybe",
          ],
          hint:
            "Приметы бери те, что знаешь: black, small, silver, metal, plastic, green.",
          why:
            "Объявление работает, когда нашедший может узнать вещь по приметам, а " +
            "хозяин не обещает того, чего не знает.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slova-chasti-gorod",
      title: "Слова о городе и бланках",
      estimatedMinutes: 15,
      outcome: "называть места в городе и заполнять бланк: post office, occupation",

      blocks: [
        {
          id: "zachem-slova-o-gorode",
          kind: "explain",
          text: [
            "В чужом городе спрашивают дорогу, ищут нужное здание и заполняют бланки.",
            "Слова для всех трёх дел собраны в этом уроке.",
            "Многие названия зданий состоят из двух слов: post office, bus station.",
            "Первое слово говорит, что там делают, второе — что это за место.",
          ],
        },
        {
          id: "zdaniya-goroda",
          kind: "table",
          caption: "Здания и что в них",
          zvuchat: ["post office", "bus station", "petrol station", "police station", "sports centre", "shopping centre"],
          head: ["Английский", "Перевод", "Что там делают"],
          rows: [
            ["post office", "почта", "отправляют письма"],
            ["bus station", "автовокзал", "садятся на междугородний автобус"],
            ["petrol station", "заправка", "заливают бензин"],
            ["police station", "отделение полиции", "заявляют о пропаже"],
            ["sports centre", "спортивный центр", "занимаются спортом"],
            ["shopping centre", "торговый центр", "покупают вещи"],
          ],
        },
        {
          id: "slovar-zdaniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "post office", translation: "почта", example: "The post office may be closed today.", hint: "/ˈpəʊst ɒfɪs/" },
            { term: "bus station", translation: "автовокзал", example: "The bus station is close to the market.", hint: "/ˈbʌs steɪʃn/" },
            { term: "petrol station", translation: "заправка", example: "There is a petrol station near the traffic light.", hint: "/ˈpetrəl steɪʃn/" },
            { term: "police station", translation: "отделение полиции", example: "The police station is out of the centre.", hint: "/pəˈliːs steɪʃn/" },
            { term: "sports centre", translation: "спортивный центр", example: "Maybe the sports centre is open on Sunday.", hint: "/ˈspɔːts sentə/" },
            { term: "shopping centre", translation: "торговый центр", example: "The shopping centre is behind the market.", hint: "/ˈʃɒpɪŋ sentə/" },
            { term: "shop assistant", translation: "продавец", example: "The shop assistant may know the price.", hint: "/ˈʃɒp əsɪstənt/" },
            { term: "traffic light", translation: "светофор", example: "There is a petrol station near the traffic light.", hint: "/ˈtræfɪk laɪt/" },
          ],
        },
        {
          id: "primer-v-gorode",
          kind: "example",
          caption: "В незнакомом городе",
          zvuchat: [
            "The post office may be closed today.",
            "The bus station is close to the market.",
            "The shopping centre is behind the market.",
            "There is a petrol station near the traffic light.",
            "The police station is out of the centre.",
            "Maybe the sports centre is open on Sunday.",
            "The shop assistant may know the price.",
          ],
          text:
            "The post office may be closed today.\nThe bus station is close to the market.\nThe shopping centre is behind the market.\nThere is a petrol station near the traffic light.\nThe police station is out of the centre.\nMaybe the sports centre is open on Sunday.\nThe shop assistant may know the price.",
          perevod: {
            "The post office may be closed today.":
              "Почта сегодня, может быть, закрыта.",
            "The bus station is close to the market.":
              "Автовокзал рядом с рынком.",
            "The shopping centre is behind the market.":
              "Торговый центр за рынком.",
            "There is a petrol station near the traffic light.":
              "У светофора есть заправка.",
            "The police station is out of the centre.":
              "Отделение полиции не в центре.",
            "Maybe the sports centre is open on Sunday.":
              "Может быть, спортивный центр открыт в воскресенье.",
            "The shop assistant may know the price.":
              "Продавец, может быть, знает цену.",
          },
          explain:
            "Семь строк об одном городе. В трёх из них стоит may или maybe: о " +
            "чужом городе редко знают наверняка.",
        },
        {
          id: "slovar-dorogi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "police officer", translation: "полицейский", example: "A police officer showed us the way.", hint: "/pəˈliːs ɒfɪsə/" },
            { term: "police car", translation: "полицейская машина", example: "A police car stopped at the traffic light.", hint: "/pəˈliːs kɑː/" },
            { term: "aeroplane", translation: "самолёт (полное слово вместо plane)", example: "Our aeroplane may be late.", hint: "/ˈeərəpleɪn/" },
            { term: "driving licence", translation: "водительские права", example: "I always take my driving licence.", hint: "/ˈdraɪvɪŋ laɪsns/" },
            { term: "close to", translation: "близко к", example: "The bus station is close to the market.", hint: "/ˈkləʊs tə/" },
            { term: "out of", translation: "за пределами, из", example: "The police station is out of the centre.", hint: "/ˈaʊt əv/" },
            { term: "by accident", translation: "случайно", example: "We found the museum by accident.", hint: "/baɪ ˈæksɪdənt/" },
          ],
        },
        {
          id: "primer-doroga",
          kind: "example",
          caption: "Дорога и случай",
          zvuchat: [
            "A police officer showed us the way.",
            "A police car stopped at the traffic light.",
            "We found the museum by accident.",
            "I always take my driving licence.",
            "Our aeroplane may be late.",
          ],
          text:
            "A police officer showed us the way.\nA police car stopped at the traffic light.\nWe found the museum by accident.\nI always take my driving licence.\nOur aeroplane may be late.",
          perevod: {
            "A police officer showed us the way.":
              "Полицейский показал нам дорогу.",
            "A police car stopped at the traffic light.":
              "У светофора остановилась полицейская машина.",
            "We found the museum by accident.":
              "Музей мы нашли случайно.",
            "I always take my driving licence.":
              "Я всегда беру с собой водительские права.",
            "Our aeroplane may be late.":
              "Наш самолёт, может быть, задержится.",
          },
          explain:
            "Пять строк о дороге. Здесь accident значит не «происшествие», а " +
            "«случайность»: by accident — это «не нарочно».",
        },
        {
          id: "slovar-blanka",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "nationality", translation: "гражданство", example: "Write your nationality here.", hint: "/ˌnæʃəˈnæləti/" },
            { term: "occupation", translation: "род занятий", example: "My occupation is teacher.", hint: "/ˌɒkjuˈpeɪʃn/" },
            { term: "birth", translation: "рождение", example: "The date of birth is on the first line.", hint: "/bɜːθ/" },
            { term: "identification", translation: "удостоверение личности (полное слово)", example: "Bring identification with you.", hint: "/aɪˌdentɪfɪˈkeɪʃn/" },
            { term: "Mr", translation: "перед фамилией мужчины", example: "Mr Petrov may come at five.", hint: "/ˈmɪstə/" },
            { term: "Mrs", translation: "перед фамилией замужней женщины", example: "Mrs Petrova is a teacher.", hint: "/ˈmɪsɪz/" },
            { term: "Ms", translation: "перед фамилией женщины, когда о семье не говорят", example: "Ms Bishop is our new manager.", hint: "/mɪz/" },
          ],
        },
        {
          id: "primer-blank",
          kind: "example",
          caption: "Бланк в отделении",
          zvuchat: [
            "Write your nationality here.",
            "My occupation is teacher.",
            "The date of birth is on the first line.",
            "Bring identification with you.",
            "Mr Petrov may come at five.",
            "Mrs Petrova is a teacher.",
            "Ms Bishop is our new manager.",
          ],
          text:
            "Write your nationality here.\nMy occupation is teacher.\nThe date of birth is on the first line.\nBring identification with you.\nMr Petrov may come at five.\nMrs Petrova is a teacher.\nMs Bishop is our new manager.",
          perevod: {
            "Write your nationality here.":
              "Гражданство впишите здесь.",
            "My occupation is teacher.": "Род занятий у меня — преподаватель.",
            "The date of birth is on the first line.":
              "Дата рождения стоит на первой строке.",
            "Bring identification with you.":
              "Удостоверение личности нужно иметь при себе.",
            "Mr Petrov may come at five.":
              "Господин Петров, может быть, придёт в пять.",
            "Mrs Petrova is a teacher.": "Госпожа Петрова — преподаватель.",
            "Ms Bishop is our new manager.":
              "Госпожа Бишоп — наш новый управляющий.",
          },
          explain:
            "Семь строк одного бланка. Обращение стоит перед фамилией и точки после " +
            "себя не требует.",
        },
        {
          id: "ms-kogda-somnevaeshsya",
          kind: "note",
          tone: "info",
          text:
            "Mrs говорит, что женщина замужем, а Ms о семье не говорит " +
            "ничего.\n\nВ этом вся разница между двумя обращениями.",
        },
        {
          id: "korotkie-slova-goroda",
          kind: "table",
          caption: "Короткие слова, которые нужны каждый день",
          zvuchat: [
            "Okay, I'll wait here.",
            "All right, let's meet at six.",
            "No one knows the way.",
            "I took the bus instead of the tram.",
            "It is minus ten today.",
            "The market is well known here.",
            "The post office is on the left-hand side.",
            "He showed the way with his right hand.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["Okay, I'll wait here.", "Хорошо, я подожду здесь."],
            ["All right, let's meet at six.", "Ладно, встретимся в шесть."],
            ["No one knows the way.", "Никто не знает дороги."],
            ["I took the bus instead of the tram.", "Я поехал на автобусе вместо трамвая."],
            ["It is minus ten today.", "Сегодня минус десять."],
            ["The market is well known here.", "Рынок здесь широко известен."],
            ["The post office is on the left-hand side.", "Почта по левой стороне."],
            ["He showed the way with his right hand.", "Он показал дорогу правой рукой."],
          ],
        },
        {
          id: "slovar-korotkih",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "okay", translation: "хорошо, договорились", example: "Okay, I'll wait here.", hint: "/ˌəʊˈkeɪ/" },
            { term: "all right", translation: "ладно, всё в порядке", example: "All right, let's meet at six.", hint: "/ˌɔːl ˈraɪt/" },
            { term: "no one", translation: "никто (то же самое, что nobody)", example: "No one knows the way.", hint: "/ˈnəʊ wʌn/" },
            { term: "instead of", translation: "вместо чего-то", example: "I took the bus instead of the tram.", hint: "/ɪnˈsted əv/" },
            { term: "minus", translation: "минус", example: "It is minus ten today.", hint: "/ˈmaɪnəs/" },
            { term: "well known", translation: "широко известный", example: "The market is well known here.", hint: "/ˌwel ˈnəʊn/" },
            { term: "left-hand", translation: "левый (о стороне)", example: "The post office is on the left-hand side.", hint: "/ˌleft ˈhænd/" },
            { term: "right hand", translation: "правая рука", example: "He showed the way with his right hand.", hint: "/ˌraɪt ˈhænd/" },
          ],
        },
        {
          id: "pochemu-defis",
          kind: "note",
          tone: "info",
          text:
            "В left-hand дефис есть, а в right hand его нет, и это не " +
            "описка.\n\nТак эти две записи и стоят в словаре: одна с дефисом, " +
            "другая без него.",
        },

        // ---- задания ----

        {
          id: "z1-vybrat-zdanie",
          kind: "choice",
          prompt: "Куда идут, чтобы отправить письмо?",
          options: [
            { text: "police station" },
            { text: "post office", correct: true },
            { text: "petrol station" },
          ],
          hint: "Первое слово нужного названия значит «почта».",
          why:
            "post office. В police station заявляют о пропаже, а на petrol station " +
            "заливают бензин.",
        },
        {
          id: "z2-dopisat-storonu",
          kind: "gap",
          prompt: "Почта стоит по левой стороне улицы. Допиши пропущенное слово.",
          before: "The post office is on the ",
          after: " side.",
          answer: "left-hand",
          hint: "Перед словом «сторона» это слово пишут через дефис.",
          why: "The post office is on the left-hand side. Дефис здесь на месте.",
        },
        {
          id: "z3-soedinit-blank",
          kind: "match",
          prompt: "Соедини строку бланка с тем, что в неё пишут.",
          left: ["Nationality", "Occupation", "Date of birth", "Ms"],
          right: [
            "род занятий",
            "гражданство",
            "перед фамилией женщины",
            "дата рождения",
          ],
          answer: [1, 0, 3, 2],
          hint: "Слово occupation значит «занятие», а nationality — «страна, чей ты гражданин».",
          why:
            "Nationality — гражданство, Occupation — род занятий, Date of birth — " +
            "дата рождения, Ms — обращение перед фамилией женщины.",
        },
        {
          id: "z4-skazat-vmesto",
          kind: "short",
          prompt: "Расскажи о своей вчерашней поездке: автобус вместо трамвая. Начни строку с I и возьми оборот со словом instead.",
          answer: "I took the bus instead of the tram.",
          accept: [
            "I took the bus instead of the tram",
            "I took a bus instead of a tram.",
            "I took a bus instead of a tram",
          ],
          hint: "После instead стоит короткое слово of, а за ним — то, чего не выбрали.",
          why:
            "I took the bus instead of the tram. Оборот instead of ставят перед " +
            "тем, что осталось в стороне.",
        },
        {
          id: "z5-otmetit-zdaniya",
          kind: "hottext",
          prompt: "Отметь названия зданий.",
          parts: [
            { text: "bus station", selectable: true, correct: true },
            { text: " · " },
            { text: "traffic light", selectable: true },
            { text: " · " },
            { text: "sports centre", selectable: true, correct: true },
            { text: " · " },
            { text: "by accident", selectable: true },
          ],
          hint: "Здание — это место, куда можно войти.",
          why:
            "Верны bus station и sports centre. Traffic light — светофор на улице, " +
            "а by accident — оборот со значением «случайно».",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, решить по последствию, услышать
      // разговор, дописать примету.

      // ---- итог 1 ----
      {
        id: "q-ispravit-okonchanie-posle-might",
        kind: "short",
        outcome: "говорить о возможном: It might rain tomorrow",
        prompt:
          "Ученик написал: The bus might comes late. Запиши строку без ошибки.",
        answer: "The bus might come late.",
        accept: ["The bus might come late"],
        hint: "Ошибка в самом глаголе, а не в слове перед ним.",
        why:
          "The bus might come late. Окончание третьего лица после might " +
          "пропадает: слово might уже сказало, о ком речь.",
      },
      {
        id: "q-pochemu-ne-o-proshlom",
        kind: "choice",
        outcome: "говорить о возможном: It might rain tomorrow",
        prompt:
          "О чём говорит строка It might be cold — о вчерашнем дне, о сегодняшнем или о завтрашнем?",
        options: [
          { text: "О вчерашнем." },
          { text: "О сегодняшнем или о завтрашнем.", correct: true },
          { text: "Только о завтрашнем." },
        ],
        hint: "Вспомни, о каком времени модуль говорит вообще.",
        why:
          "О сегодняшнем или о завтрашнем. О прошлом такая строка не говорит, и " +
          "слова о вчерашнем дне рядом с ней не ставят.",
      },
      {
        id: "q-napisat-o-vozmozhnom-dele",
        kind: "short",
        outcome: "говорить о возможном: It might rain tomorrow",
        prompt:
          "Ты не знаешь, придёт ли Данияр в субботу. Скажи это по-английски, начав с Daniyar.",
        answer: "Daniyar might come on Saturday.",
        accept: [
          "Daniyar might come on Saturday",
          "Daniyar may come on Saturday.",
        ],
        hint: "После имени идёт слово неуверенности, потом глагол без окончания.",
        why:
          "Daniyar might come on Saturday. Строка через may сюда подходит так же.",
      },

      // ---- итог 2 ----
      {
        id: "q-kakaya-obeshchaet",
        kind: "choice",
        outcome: "говорить о возможном через may: It may be in my backpack",
        prompt:
          "Три строки: It may be in the car, It might be in the car, I'm sure it's in the car. Какая обещает наверняка?",
        options: [
          { text: "It may be in the car." },
          { text: "It might be in the car." },
          { text: "I'm sure it's in the car.", correct: true },
        ],
        hint: "Две строки из трёх собраны одинаково и говорят об одном.",
        why:
          "I'm sure it's in the car. Первые две годятся обе и обе говорят о " +
          "возможном, а обещает только третья.",
      },
      {
        id: "q-nazvat-vtoroe-mesto",
        kind: "short",
        outcome: "говорить о возможном через may: It may be in my backpack",
        prompt:
          "Первое место не подошло: I looked in my handbag. Назови второе — карман — одной строкой через may.",
        answer: "It may be in my pocket.",
        accept: [
          "It may be in my pocket",
          "It might be in my pocket.",
          "Maybe it's in my pocket.",
          "It may be in the pocket.",
        ],
        hint: "Начни с It, а место поставь в конец строки.",
        why:
          "It may be in my pocket. Годятся и might, и maybe — все три говорят о " +
          "возможном.",
      },

      // ---- итог 3 ----
      {
        id: "q-pochemu-maybe-ne-vnutri",
        kind: "choice",
        outcome: "ставить maybe перед строкой: Maybe it's in the car",
        prompt:
          "Запись The bracelet maybe in the cupboard не годится. Почему?",
        options: [
          { text: "В строке не хватает глагола: maybe его не заменяет.", correct: true },
          { text: "Слово bracelet стоит не на месте." },
          { text: "Слово maybe надо перенести в начало строки." },
        ],
        hint: "Прочитай строку без слова maybe и посмотри, что от неё осталось.",
        why:
          "В строке не хватает глагола. Слово maybe встаёт снаружи и глагола не " +
          "заменяет: Maybe the bracelet is in the cupboard.",
      },
      {
        id: "q-perepisat-cherez-vneshnee-slovo",
        kind: "short",
        outcome: "ставить maybe перед строкой: Maybe it's in the car",
        prompt:
          "Строку The speaker may be broken скажи так, чтобы слово неуверенности встало перед всей строкой.",
        answer: "Maybe the speaker is broken.",
        accept: [
          "Maybe the speaker is broken",
          "Perhaps the speaker is broken.",
        ],
        hint: "Глагол внутри строки станет обычным.",
        why:
          "Maybe the speaker is broken. Слово perhaps годится здесь так же, как " +
          "maybe.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-propushchennyy-glagol",
        kind: "short",
        outcome: "говорить об уверенности: I'm sure it's in the cabinet",
        prompt:
          "Ученик написал: I sure the belt is in the cabinet. Запиши строку без ошибки.",
        answer: "I'm sure the belt is in the cabinet.",
        accept: ["I'm sure the belt is in the cabinet", "I am sure the belt is in the cabinet."],
        hint: "В начале строки пропало одно короткое слово.",
        why:
          "I'm sure the belt is in the cabinet. По-английски перед sure стоит " +
          "глагол: I'm или I am.",
      },
      {
        id: "q-okonchanie-posle-sure",
        kind: "choice",
        outcome: "говорить об уверенности: I'm sure it's in the cabinet",
        prompt:
          "Почему в строке I'm sure Dana knows the password у глагола осталось окончание?",
        options: [
          { text: "Потому что после I'm sure строка обычная.", correct: true },
          { text: "Потому что речь о завтрашнем дне." },
          { text: "Потому что Dana — имя, а не местоимение." },
        ],
        hint: "Сравни со строкой Dana might know the password.",
        why:
          "Потому что после I'm sure строка обычная. Окончание пропадает только " +
          "там, где перед глаголом встало may или might.",
      },

      // ---- итог 5 ----
      {
        id: "q-reshit-po-posledstviyu",
        kind: "choice",
        outcome: "отличать уверенность от предположения",
        prompt:
          "Приятель написал: The case may be in my office. Стоит ли ехать за футляром прямо сейчас?",
        options: [
          { text: "Да, он обещал." },
          { text: "Нет: он не уверен, и футляра там может не быть.", correct: true },
          { text: "Да, слово may обещает наверняка." },
        ],
        hint: "Смотри на слово перед глаголом и спроси, что оно обещает.",
        why:
          "Нет. Слово may говорит, что человек гадает; наверняка обещала бы строка " +
          "I'm sure it's in my office.",
      },
      {
        id: "q-usilit-obeshchanie",
        kind: "short",
        outcome: "отличать уверенность от предположения",
        prompt:
          "Строку Maybe the cover is plastic перепиши так, чтобы она обещала наверняка. Начни с I'm.",
        answer: "I'm sure the cover is plastic.",
        accept: ["I'm sure the cover is plastic", "I'm sure that the cover is plastic."],
        hint: "Слово неуверенности уходит, а начало строки меняется.",
        why:
          "I'm sure the cover is plastic. Строка после I'm sure осталась той же, " +
          "какой была после maybe.",
      },
      {
        id: "q-perevesti-obeshchanie-v-dogadku",
        kind: "short",
        outcome: "отличать уверенность от предположения",
        prompt:
          "Приятель обещал: I'm sure the case is in the car. Он ошибся и хочет сказать осторожнее. Перепиши строку, начав со слова The.",
        answer: "The case may be in the car.",
        accept: [
          "The case may be in the car",
          "The case might be in the car.",
          "The case might be in the car",
        ],
        hint: "Обещание из начала строки уходит, а на его место внутри встаёт одно слово.",
        why:
          "The case may be in the car. Строка через might годится так же, а начало " +
          "I'm sure уходит вместе с обещанием.",
      },

      // ---- итог 6 ----
      {
        id: "q-skolko-veshchey-v-obyavlenii",
        kind: "choice",
        outcome: "находить в объявлении приметы вещи и время работы",
        prompt:
          "В объявлении стоит: We have a green raincoat, a metal case and two grey socks. Сколько разных вещей там названо?",
        options: [
          { text: "Две." },
          { text: "Три.", correct: true },
          { text: "Четыре." },
        ],
        hint: "Носки названы парой, но вещь это одна.",
        why:
          "Три. Плащ, футляр и носки; число два относится к носкам, а не к " +
          "перечню.",
      },
      {
        id: "q-chego-net-v-chuzhom-obyavlenii",
        kind: "choice",
        outcome: "находить в объявлении приметы вещи и время работы",
        prompt:
          "Объявление целиком: LOST PROPERTY. We have a belt and an earring. Come with your ticket. Чего в нём нет?",
        options: [
          { text: "Времени работы.", correct: true },
          { text: "Перечня вещей." },
          { text: "Указания, что взять с собой." },
        ],
        hint: "Проверь, знает ли читатель, когда приходить.",
        why:
          "Времени работы. Вещи перечислены, билет назван, а когда бюро открыто, " +
          "читатель не узнает.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-o-chem-neuverenno",
        kind: "short",
        outcome: "слышать в прогнозе, что обещают наверняка, а что нет",
        zvuk:
          "The afternoon is dry. The rain might be heavy. — Then I'll take a jumper.",
        prompt:
          "Послушай. Что в записи названо неуверенно — dry или heavy? Ответь одним словом по-английски.",
        answer: "heavy",
        accept: ["Heavy"],
        hint: "Неуверенность слышна по слову перед глаголом.",
        why:
          "Heavy. Строка The rain might be heavy стоит со словом might, а о дне " +
          "сказано наверняка.",
      },
      {
        id: "q-uslyshat-chas",
        kind: "short",
        outcome: "слышать в прогнозе, что обещают наверняка, а что нет",
        zvuk:
          "The rain may be heavy after six. — Then I'll come at five.",
        prompt:
          "Послушай. Во сколько собеседник обещает прийти? Ответь числом.",
        answer: "five",
        accept: ["5", "Five", "at five"],
        hint: "Чисел в записи два, и нужное стоит рядом с обещанием прийти.",
        why:
          "Five. Второе число — час, после которого возможен дождь, и к приходу " +
          "оно не относится.",
      },

      // ---- итог 8 ----
      {
        id: "q-dopisat-mesto-v-obyavlenii",
        kind: "short",
        outcome: "проверять объявление о пропаже: вещь, приметы, место и предположение о ней",
        prompt:
          "К строке объявления I lost a black comb допиши место — в парке. Запиши строку целиком.",
        answer: "I lost a black comb in the park.",
        accept: ["I lost a black comb in the park"],
        hint: "Место присоединяют в конец строки.",
        why:
          "I lost a black comb in the park. Примета стоит перед вещью, а место " +
          "закрывает строку.",
      },
      {
        id: "q-o-chem-govoryat-ostorozhno-v-obyavlenii",
        kind: "choice",
        outcome: "проверять объявление о пропаже: вещь, приметы, место и предположение о ней",
        prompt:
          "О чём в объявлении о пропаже говорят осторожно, словом maybe или may?",
        options: [
          { text: "О цвете вещи." },
          { text: "О размере вещи." },
          { text: "О том, где вещь может быть теперь.", correct: true },
        ],
        hint: "Осторожно говорят о том, чего хозяин сам не знает.",
        why:
          "О том, где вещь теперь. Приметы хозяин знает и называет их наверняка, а " +
          "место пропажи он часто не помнит.",
      },
      {
        id: "q-dopisat-primetu-i-mesto",
        kind: "short",
        outcome: "проверять объявление о пропаже: вещь, приметы, место и предположение о ней",
        prompt:
          "Объявление говорит только I lost a handbag. Допиши примету — чёрная — и место — на вокзале. Запиши строку целиком.",
        answer: "I lost a black handbag at the station.",
        accept: ["I lost a black handbag at the station"],
        hint: "Примета встаёт перед вещью, место закрывает строку.",
        why:
          "I lost a black handbag at the station. Без этих двух добавок объявление " +
          "подходит к любой сумочке.",
      },

      // ---- итог 9 ----
      {
        id: "q-kuda-za-benzinom",
        kind: "short",
        outcome: "называть места в городе и заполнять бланк: post office, occupation",
        prompt: "Назови по-английски место, где заливают бензин. Оно из двух слов.",
        answer: "petrol station",
        accept: ["a petrol station", "the petrol station"],
        hint: "Первое слово — само горючее.",
        why: "petrol station. Bus station — автовокзал, а police station — отделение полиции.",
      },
      {
        id: "q-ispravit-obrashchenie-na-blanke",
        kind: "short",
        outcome: "называть места в городе и заполнять бланк: post office, occupation",
        prompt:
          "В бланке написали: Mr. Petrov. Точка здесь лишняя. Запиши строку без ошибки.",
        answer: "Mr Petrov",
        hint: "Обращение стоит перед фамилией, и точки после себя не требует.",
        why:
          "Mr Petrov. Обращения Mr, Mrs и Ms пишут без точки, а стоят они перед " +
          "фамилией.",
      },
    ],
  },
};

export default module;
