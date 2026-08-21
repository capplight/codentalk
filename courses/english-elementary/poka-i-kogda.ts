import type { Module } from "@/lib/content/types";

/**
 * Модуль 7 курса «Английский · Elementary»: пока и когда.
 *
 * Программа: docs/programma-english-elementary.md, модуль 7 — «связывать два
 * прошедших дела»; грамматика: Past Simple и Past Continuous вместе; `when`,
 * `while`.
 *
 * ИМЕНА ГЛАВНЫХ ВЕЩЕЙ — «ДЛИТЕЛЬНОЕ ДЕЙСТВИЕ» И «ЗАКОНЧЕННОЕ ДЕЙСТВИЕ».
 *
 * Оба имени взяты из модуля 6 и не меняются здесь ни разу. Слов «фон» и
 * «событие» в тексте для ученика нет вовсе: это были бы вторые имена тем же
 * вещам, а модуль 5 уже показал, чем это кончается (CLAUDE.md, «Понятность
 * объяснения», пункт 3).
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, PAST past continuous, «USE: BACKGROUND
 *    EVENTS» — «Can use the past continuous to show that an event was happening
 *    in the background to the main event», пример источника «Yesterday we were
 *    studying maths in your house, and I left my book». Это весь модуль.
 *
 * 2. English Grammar Profile, A2, CONJUNCTIONS subordinating, «FORM: SIMPLE» —
 *    «Can use a limited range of simple subordinating conjunctions '(if, when,
 *    so, while)' to introduce a subordinate clause». Источник называет `when` и
 *    `while` прямо и держит их на A2.
 *
 * 3. English Grammar Profile, A2, CLAUSES subordinated, «FORM/USE: TIME» — «Can
 *    use a finite subordinate clause with time conjunctions, before or after a
 *    main clause», пример «I feel comfortable when I am wearing these clothes».
 *    Оговорка «before or after» — это урок 3 целиком: часть с `when` может стоять
 *    и впереди, и позади.
 *
 * 4. Описания Совета Европы, с. 67, шкала Creative writing, графа A2: «Can give
 *    very short, basic descriptions of events, past activities and personal
 *    experiences». Отсюда размер рассказа в уроках 5 и 8.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ОТРИЦАНИЯ И ВОПРОСА ДА/НЕТ У ДЛИТЕЛЬНОГО ДЕЙСТВИЯ. English Grammar Profile
 *   ставит обе строки на B1 (PAST past continuous, «FORM: NEGATIVE» и «FORM:
 *   QUESTIONS»), и модуль 6 их не давал. Здесь их тоже нет.
 * — СОЮЗОВ `as`, `until`, `before`, `after`. Источник в пункте 2 называет
 *   «limited range» и перечисляет четыре союза, из которых времени касаются два.
 *   Модуль берёт ровно эти два.
 * — НЕПРАВИЛЬНЫХ ГЛАГОЛОВ СВЕРХ ДЕСЯТКА МОДУЛЯ 3. Законченное действие требует
 *   формы прошедшего, а курс дал только `went`, `came`, `saw`, `met`, `had`,
 *   `got`, `took`, `ate`, `bought`, `wrote`. Все прочие действия модуля —
 *   правильные глаголы с окончанием `-ed`.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать восемь карточек, и все тридцать восемь несут слово,
 * которого на прошлой ступени не было.
 *
 *    Oxford 3000 помечает A2: accident, luck, lucky, suddenly, immediately,
 *    unfortunately, danger, safe, careful, carefully, broken, lost, missing,
 *    drop, engine, petrol, wheel, lock, trouble, cry, jump, hurt, track.
 *
 *    Oxford 3000 помечает B1, но словник A2 Key содержит: tyre, helicopter,
 *    deliver, receipt, battery, glove. По правилу ступени (CLAUDE.md, «Объём
 *    словаря») такое слово в запасе и взято.
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: ambulance, wallet,
 *    purse, luckily, motorbike, scooter, scarf, crossing, roundabout.
 *
 *    Два слова — `lock` и `track` — Oxford 3000 помечает A2, а словника A2 Key в
 *    них нет. Правило ступени принимает любое из двух оснований, и здесь работает
 *    первое.
 *
 *    Норма ступени — не меньше тридцати карточек и не меньше пятнадцати новых,
 *    считает `npm run kontrol`.
 *
 *    СЛОВА-ПОДПОРКИ: road, street, car, bus, door, window, phone, bag, money,
 *    home, work, shop, rain, wait, call, stop, open, close, help, run, walk,
 *    drive, look, find, cold, dark, late, quick — все A1 по Oxford 3000. Плюс
 *    слова прошлых модулей этой же ступени, у которых карточка уже есть: lift,
 *    corner, gate, pocket, bridge, platform, noise, storm, stairs, garage, roof.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного: одно в уроке 1 (форма `was` + `-ing`
 * из модуля 6 — она и есть левая половина каждой строки этого модуля) и одно в
 * уроке 4 (окончание `-ed` из модуля 2, а оно нужно правой половине). Берутся
 * ссылкой (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "poka-i-kogda",
  title: "Пока и когда",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past continuous, «USE: BACKGROUND EVENTS»: «Can use the past " +
        "continuous to show that an event was happening in the background to the " +
        "main event», пример источника — «Yesterday we were studying maths in your " +
        "house, and I left my book». " +
        "A2, CONJUNCTIONS subordinating, «FORM: SIMPLE»: «Can use a limited range " +
        "of simple subordinating conjunctions '(if, when, so, while)' to introduce " +
        "a subordinate clause» — источник называет when и while прямо. " +
        "A2, CLAUSES subordinated, «FORM/USE: TIME»: «Can use a finite subordinate " +
        "clause with time conjunctions, before or after a main clause», пример «I " +
        "feel comfortable when I am wearing these clothes» — оговорка «before or " +
        "after» это урок 3. " +
        "ЧЕГО НЕТ. B1, PAST past continuous, «FORM: NEGATIVE» и «FORM: QUESTIONS» " +
        "— отрицания и вопроса да/нет у длительного действия в модуле нет",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОКИ 5 И 8. с. 67, Creative writing, A2: «Can give very short, basic " +
        "descriptions of events, past activities and personal experiences» — отсюда " +
        "размер рассказа. " +
        "УРОК 6, ЧТЕНИЕ. с. 55, Reading correspondence, A2: «Can understand short, " +
        "simple personal letters». " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority (e.g. " +
        "very basic personal and family information, shopping, local geography, " +
        "employment), provided people articulate clearly and slowly» — отсюда " +
        "pace: \"slow\". Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
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
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: accident, luck, lucky, suddenly, " +
        "immediately, unfortunately, danger, safe, careful, carefully, broken, " +
        "lost, missing, drop, engine, petrol, wheel, lock, trouble, cry, jump, " +
        "hurt, track. " +
        "Помету B1 Oxford 3000 ставит шести словам — tyre, helicopter, deliver, " +
        "receipt, battery, glove, — а словник A2 Key их содержит: по правилу " +
        "ступени они в запасе и потому взяты. " +
        "Слов ambulance, wallet, purse, luckily, motorbike, scooter, scarf, " +
        "crossing, roundabout Oxford 3000 не содержит вовсе, а словник A2 Key " +
        "требует. " +
        "Подпорки: road, street, car, bus, door, window, phone, bag, money, home, " +
        "work, shop, rain, wait, call, stop, open, close, help, run, walk, drive, " +
        "look, find, cold, dark, late, quick — все A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Слов lock и " +
        "track словник не содержит, и взяты они по помете Oxford 3000 (A2) — " +
        "правило ступени принимает любое из двух оснований. Остальные тридцать " +
        "шесть карточек в словнике есть",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): accident /ˈæksɪdənt/, ambulance " +
        "/ˈæmbjʊləns/, suddenly /ˈsʌdnli/, careful /ˈkeəfl/, trouble /ˈtrʌbl/, " +
        "engine /ˈendʒɪn/, petrol /ˈpetrəl/, motorbike /ˈməʊtəbaɪk/, scooter " +
        "/ˈskuːtə/, tyre /ˈtaɪə/, helicopter /ˈhelɪkɒptə/, roundabout " +
        "/ˈraʊndəbaʊt/, deliver /dɪˈlɪvə/, receipt /rɪˈsiːt/",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "связывать длительное и законченное действие: I was cooking when he came",
    "выбирать when или while по тому, какое действие идёт следом",
    "ставить запятую, когда часть с when стоит впереди",
    "соединять два длительных действия словом while",
    "рассказывать о случае двумя действиями подряд",
    "понимать рассказ, где длительное действие прервано законченным",
    "слышать в записи, что шло и что случилось",
    "проверять рассказ: там ли стоит when, там ли while",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "dva-deystviya-razom",
      title: "Два действия разом: I was cooking when he came",
      estimatedMinutes: 15,
      outcome: "связывать длительное и законченное действие: I was cooking when he came",
      vozvrat: [{ iz: "chto-proishodilo", zadanie: "z2-vybrat-formu" }],

      blocks: [
        {
          id: "zachem-dva-deystviya",
          kind: "explain",
          text: [
            "Вчера шла готовка, и посреди неё пришёл сослуживец.",
            "Одно действие тянулось, другое случилось разом — и оба в одной строке.",
            "По-английски это I was cooking when my colleague came.",
            "Длительное действие берёт was и окончание -ing, законченное — форму прошедшего.",
          ],
        },
        {
          id: "dve-poloviny-stroki",
          kind: "table",
          caption: "Две половины одной строки",
          zvuchat: [
            "I was cooking",
            "when my colleague came",
            "She was reading",
            "when the phone stopped",
            "They were waiting",
            "when the bus arrived",
          ],
          head: ["Что тянулось", "Что случилось"],
          rows: [
            ["I was cooking", "when my colleague came"],
            ["She was reading", "when the phone stopped"],
            ["They were waiting", "when the bus arrived"],
          ],
        },
        {
          id: "pochemu-dve-formy-ryadom",
          kind: "explain",
          text: [
            "Левая половина показывает, что уже шло к тому мигу.",
            "Правая называет то, что случилось и заняло один миг.",
            "Поэтому формы разные, и поменять их местами нельзя.",
          ],
        },
        {
          id: "ne-oba-odinakovo",
          kind: "note",
          tone: "mistake",
          text:
            "«I cooked when my colleague came» говорит другое: сначала пришёл " +
            "сослуживец, а потом началась готовка.\n\nЧтобы сказать, что готовка уже " +
            "шла, левая половина берёт was cooking.",
        },
        {
          id: "primer-o-sluchae-na-doroge",
          kind: "example",
          caption: "Случай на дороге",
          zvuchat: [
            "I was walking home when I saw an accident.",
            "A car stopped near the crossing.",
            "Luckily, nobody was hurt.",
          ],
          text:
            "I was walking home when I saw an accident.\nA car stopped near the crossing.\nLuckily, nobody was hurt.",
          explain:
            "В первой строке две половины: ходьба уже шла, а вид происшествия случился " +
            "разом. Две другие строки говорят только о законченном.",
        },
        {
          id: "slovar-proisshestviya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "accident", translation: "происшествие, авария", example: "I saw an accident.", hint: "/ˈæksɪdənt/" },
            { term: "ambulance", translation: "скорая помощь", example: "The ambulance came quickly.", hint: "/ˈæmbjʊləns/" },
            { term: "suddenly", translation: "вдруг", example: "Suddenly a car stopped.", hint: "/ˈsʌdnli/" },
            { term: "luckily", translation: "к счастью", example: "Luckily, nobody was hurt.", hint: "/ˈlʌkɪli/" },
            { term: "danger", translation: "опасность", example: "There was no danger.", hint: "/ˈdeɪndʒə/" },
            { term: "safe", translation: "невредимый, в безопасности", example: "Everybody was safe.", hint: "/seɪf/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dlitelnoe",
          kind: "gap",
          prompt: "Готовка уже шла к тому мигу. Допиши недостающее слово.",
          before: "I ",
          after: " cooking when my colleague came.",
          answer: "was",
          hint: "Левая половина берёт ту же форму, что и всякое длительное действие.",
          why:
            "I was cooking when my colleague came. Длительное действие держится на " +
            "was и окончании -ing.",
        },
        {
          id: "z2-vybrat-paru-form",
          kind: "choice",
          prompt: "Как сказать, что чтение уже шло, а потом позвонили?",
          options: [
            { text: "She read when the phone called." },
            { text: "She was reading when somebody called.", correct: true },
            { text: "She was reading when somebody was calling." },
          ],
          hint: "Одна запись сделала оба действия законченными, другая — оба длительными.",
          why:
            "She was reading when somebody called. Чтение тянулось, поэтому was " +
            "reading, а звонок занял миг, поэтому called.",
        },
        {
          id: "z3-otmetit-chto-tyanulos",
          kind: "hottext",
          prompt: "Отметь половины, которые говорят о длительном действии.",
          parts: [
            { text: "I was walking home", selectable: true, correct: true },
            { text: " · " },
            { text: "when I saw an accident", selectable: true },
            { text: " · " },
            { text: "They were waiting at the gate", selectable: true, correct: true },
            { text: " · " },
            { text: "when the bus arrived", selectable: true },
          ],
          hint: "У длительного действия рядом с глаголом стоит форма was или were.",
          why:
            "О длительном действии говорят I was walking home и They were waiting at " +
            "the gate. Две другие половины называют то, что случилось разом.",
        },
        {
          id: "z4-sobrat-dve-poloviny",
          kind: "order",
          prompt: "Собери строку: готовка шла, и в этот миг пришёл сослуживец.",
          items: ["came.", "when my colleague", "cooking", "was", "I"],
          answer: [4, 3, 2, 1, 0],
          hint: "Сначала то, что тянулось, потом when и то, что случилось.",
          why:
            "I was cooking when my colleague came. Длительное действие идёт первым, " +
            "законченное — после when.",
        },
        {
          id: "z5-napisat-o-hodbe",
          kind: "short",
          prompt:
            "Скажи о себе по-английски: ходьба домой шла, и в этот миг случилось увидеть происшествие. Начни с I.",
          answer: "I was walking home when I saw an accident.",
          accept: ["I was walking home when I saw an accident"],
          hint: "Левая половина берёт was и окончание -ing, правая — форму saw.",
          why:
            "I was walking home when I saw an accident. Ходьба тянулась, а вид " +
            "происшествия занял миг.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "when-i-while",
      title: "When и while: какое слово взять",
      estimatedMinutes: 15,
      outcome: "выбирать when или while по тому, какое действие идёт следом",

      blocks: [
        {
          id: "zachem-dva-soyuza",
          kind: "explain",
          text: [
            "Связать две половины можно двумя словами: when и while.",
            "Оба переводятся «когда», но ставятся при разных действиях.",
            "Смотреть надо на то действие, которое идёт сразу за союзом.",
          ],
        },
        {
          id: "chto-posle-soyuza",
          kind: "table",
          caption: "Что стоит после союза",
          zvuchat: [
            "when the bus arrived",
            "when I saw an accident",
            "while I was cooking",
            "while she was reading",
          ],
          head: ["Союз", "Какое действие после него", "Пример"],
          rows: [
            ["when", "законченное", "when the bus arrived"],
            ["when", "законченное", "when I saw an accident"],
            ["while", "длительное", "while I was cooking"],
            ["while", "длительное", "while she was reading"],
          ],
        },
        {
          id: "pochemu-tak-delyat",
          kind: "explain",
          text: [
            "While само значит «пока», и после него всегда стоит то, что тянулось.",
            "When значит «в тот миг, когда», и после него стоит то, что случилось.",
            "Половины при этом можно ставить в любом порядке — важен только союз.",
          ],
        },
        {
          id: "ne-while-arrived",
          kind: "note",
          tone: "mistake",
          text:
            "«while the bus arrived» — так не говорят.\n\nПосле while стоит " +
            "длительное действие, а прибытие автобуса заняло один миг.",
        },
        {
          id: "primer-o-poteryannom-koshelke",
          kind: "example",
          caption: "Пропажа кошелька",
          zvuchat: [
            "While I was walking to the shop, I lost my purse.",
            "I dropped it near the roundabout.",
            "The wallet was missing too.",
          ],
          text:
            "While I was walking to the shop, I lost my purse.\nI dropped it near the roundabout.\nThe wallet was missing too.",
          explain:
            "В первой строке после while стоит длительное действие, и потому взято " +
            "именно оно. Вторая и третья строки союза не берут вовсе.",
        },
        {
          id: "slovar-propazhi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "wallet", translation: "бумажник", example: "The wallet was missing.", hint: "/ˈwɒlɪt/" },
            { term: "purse", translation: "кошелёк", example: "I lost my purse.", hint: "/pɜːs/" },
            { term: "lost", translation: "потерянный", example: "My purse was lost.", hint: "/lɒst/" },
            { term: "missing", translation: "пропавший", example: "The wallet was missing.", hint: "/ˈmɪsɪŋ/" },
            { term: "drop", translation: "ронять", example: "I dropped it near the roundabout.", hint: "/drɒp/" },
            { term: "careful", translation: "осторожный", example: "My sister is careful.", hint: "/ˈkeəfl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-while",
          kind: "gap",
          prompt: "После союза идёт длительное действие. Допиши союз.",
          before: "",
          after: " I was walking to the shop, I lost my purse.",
          answer: "While",
          hint: "Одно из двух слов значит «пока».",
          why: "While I was walking to the shop, I lost my purse. После while стоит длительное действие.",
        },
        {
          id: "z2-vybrat-soyuz",
          kind: "choice",
          prompt: "Какая запись верна?",
          options: [
            { text: "While the bus arrived, I was waiting." },
            { text: "When I was waiting, the bus arrived." },
            { text: "While I was waiting, the bus arrived.", correct: true },
          ],
          hint: "Смотри, какое действие стоит сразу за союзом.",
          why:
            "While I was waiting, the bus arrived. После while нужно длительное " +
            "действие, а прибытие автобуса заняло миг.",
        },
        {
          id: "z3-otmetit-vernye-soyuzy",
          kind: "hottext",
          prompt: "Отметь части, где союз выбран верно.",
          parts: [
            { text: "while I was cooking", selectable: true, correct: true },
            { text: " · " },
            { text: "while my colleague came", selectable: true },
            { text: " · " },
            { text: "when the ambulance arrived", selectable: true, correct: true },
            { text: " · " },
            { text: "when I was cooking dinner", selectable: true },
          ],
          hint: "После while — длительное, после when — законченное.",
          why:
            "Верны while I was cooking и when the ambulance arrived. В двух других " +
            "союз и действие не совпали по виду.",
        },
        {
          id: "z4-sopostavit-soyuz-i-deystvie",
          kind: "match",
          prompt: "Соедини начало с концом так, чтобы союз подошёл действию.",
          left: ["While I was reading,", "When I opened the door,", "While she was cooking,"],
          right: ["I helped her with the plates.", "somebody called me.", "the dog jumped on the sofa."],
          answer: [1, 2, 0],
          hint: "В одном ответе стоит her — значит он идёт к той половине, где речь о ней.",
          why:
            "While I was reading, somebody called me. When I opened the door, the dog " +
            "jumped on the sofa. While she was cooking, I helped her with the plates.",
        },
        {
          id: "z5-napisat-s-while",
          kind: "short",
          prompt:
            "Скажи о себе по-английски: пока шла ходьба в магазин, кошелёк потерялся. Начни с While.",
          answer: "While I was walking to the shop, I lost my purse.",
          accept: ["While I was walking to the shop, I lost my purse"],
          hint: "После While ставь длительное действие, а потом запятую и вторую половину.",
          why:
            "While I was walking to the shop, I lost my purse. После While стоит " +
            "длительное действие.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-vperedi",
      title: "Что впереди: запятая при перестановке",
      estimatedMinutes: 14,
      outcome: "ставить запятую, когда часть с when стоит впереди",

      blocks: [
        {
          id: "zachem-perestanovka",
          kind: "explain",
          text: [
            "Половины строки можно ставить в любом порядке.",
            "I was cooking when he came и When he came, I was cooking значат одно и то же.",
            "Меняется только одно: запятая.",
          ],
        },
        {
          id: "gde-zapyataya",
          kind: "table",
          caption: "Порядок и запятая",
          zvuchat: [
            "I was cooking when he came.",
            "When he came, I was cooking.",
            "I lost my purse while I was walking.",
            "While I was walking, I lost my purse.",
          ],
          head: ["Порядок", "Запись"],
          rows: [
            ["часть с when позади", "I was cooking when he came."],
            ["часть с when впереди", "When he came, I was cooking."],
            ["часть с while позади", "I lost my purse while I was walking."],
            ["часть с while впереди", "While I was walking, I lost my purse."],
          ],
        },
        {
          id: "pochemu-zapyataya",
          kind: "explain",
          text: [
            "Запятая стоит только в двух записях из четырёх, и обе они начинаются с союза.",
            "Она показывает, где кончилась часть с союзом и началась главная.",
            "Если часть с союзом стоит позади, запятая не нужна.",
          ],
        },
        {
          id: "ne-zapyataya-vsegda",
          kind: "note",
          tone: "mistake",
          text:
            "«I was cooking, when he came» — так не пишут.\n\nЧасть с when стоит " +
            "позади, и запятая перед ней не нужна.",
        },
        {
          id: "primer-o-dostavke",
          kind: "example",
          caption: "Посылка у двери",
          zvuchat: [
            "When the courier called, I was cleaning the stairs.",
            "Unfortunately, I did not hear the door.",
            "Immediately I looked for the receipt.",
          ],
          text:
            "When the courier called, I was cleaning the stairs.\nUnfortunately, I did not hear the door.\nImmediately I looked for the receipt.",
          explain:
            "В первой строке часть с when стоит впереди, и потому в середине запятая. " +
            "Дальше запятая появляется только после вводного слова.",
        },
        {
          id: "slovar-ocenki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "carefully", translation: "осторожно", example: "She was driving carefully.", hint: "/ˈkeəfəli/" },
            { term: "immediately", translation: "сразу же", example: "Immediately I looked for the receipt.", hint: "/ɪˈmiːdiətli/" },
            { term: "unfortunately", translation: "к сожалению", example: "Unfortunately, I did not hear the door.", hint: "/ʌnˈfɔːtʃənətli/" },
            { term: "luck", translation: "удача", example: "It was good luck.", hint: "/lʌk/" },
            { term: "lucky", translation: "удачливый, счастливый", example: "I was lucky.", hint: "/ˈlʌki/" },
            { term: "trouble", translation: "неприятность", example: "There was no trouble.", hint: "/ˈtrʌbl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-zapyatuyu",
          kind: "choice",
          prompt: "В какой записи запятая стоит верно?",
          options: [
            { text: "When he came, I was cooking.", correct: true },
            { text: "I was cooking, when he came." },
            { text: "When he came I was cooking." },
          ],
          hint: "Запятая нужна там, где часть с союзом стоит впереди.",
          why:
            "When he came, I was cooking. Часть с when стоит впереди, и запятая " +
            "показывает, где она кончилась.",
        },
        {
          id: "z2-perestavit-poloviny",
          kind: "order",
          prompt: "Собери ту же мысль, начав с части со while.",
          items: ["I lost my purse.", "I was walking,", "While"],
          answer: [2, 1, 0],
          hint: "Впереди союз, потом длительное действие с запятой, потом вторая половина.",
          why:
            "While I was walking, I lost my purse. Часть с while стоит впереди, и " +
            "после неё запятая.",
        },
        {
          id: "z3-otmetit-lishnyuyu-zapyatuyu",
          kind: "hottext",
          prompt: "Отметь записи, где запятая лишняя.",
          parts: [
            { text: "I was reading, when somebody called", selectable: true, correct: true },
            { text: " · " },
            { text: "When somebody called, I was reading", selectable: true },
            { text: " · " },
            { text: "She was driving, while I was sleeping", selectable: true, correct: true },
            { text: " · " },
            { text: "While I was sleeping, she was driving", selectable: true },
          ],
          hint: "Запятая нужна только тогда, когда часть с союзом стоит впереди.",
          why:
            "Лишняя запятая в I was reading, when somebody called и She was driving, " +
            "while I was sleeping. В обеих часть с союзом стоит позади.",
        },
        {
          id: "z4-sopostavit-poryadok",
          kind: "match",
          prompt: "Соедини запись с тем, как в ней стоят половины.",
          left: [
            "When the courier called, I was cleaning.",
            "I was cleaning when the courier called.",
            "While I was cleaning, the courier called.",
          ],
          right: [
            "длительное впереди, союз while, запятая есть",
            "часть с when впереди, запятая есть",
            "часть с when позади, запятой нет",
          ],
          answer: [1, 2, 0],
          hint: "Смотри на первое слово записи и на запятую.",
          why:
            "Первая запись начинается с when и берёт запятую. Вторая ставит часть с " +
            "when позади и обходится без запятой. Третья начинается с while.",
        },
        {
          id: "z5-napisat-s-perestanovkoy",
          kind: "short",
          prompt:
            "Перепиши эту мысль, начав с части с When: «I was cleaning the stairs when the courier called.»",
          answer: "When the courier called, I was cleaning the stairs.",
          accept: ["When the courier called, I was cleaning the stairs"],
          hint: "Часть с When уходит вперёд, и после неё нужна запятая.",
          why:
            "When the courier called, I was cleaning the stairs. Половины поменялись " +
            "местами, и запятая встала в середину.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dva-dlitelnyh",
      title: "Два длительных разом: while she was driving",
      estimatedMinutes: 14,
      outcome: "соединять два длительных действия словом while",
      vozvrat: [{ iz: "vchera-ya-rabotal", zadanie: "z1-dopisat-ed" }],

      blocks: [
        {
          id: "zachem-dva-dlitelnyh",
          kind: "explain",
          text: [
            "Иногда ни одно из двух действий не занимало миг: оба тянулись разом.",
            "Тогда обе половины берут was или were с окончанием -ing.",
            "Связывает их while: он ставится при длительном действии.",
          ],
        },
        {
          id: "oba-dlitelnyh",
          kind: "table",
          caption: "Оба действия тянулись",
          zvuchat: [
            "She was driving",
            "while I was sleeping",
            "I was cleaning the engine",
            "while my brother was waiting",
            "They were talking",
            "while the rain was falling",
          ],
          head: ["Первое действие", "Второе действие"],
          rows: [
            ["She was driving", "while I was sleeping"],
            ["I was cleaning the engine", "while my brother was waiting"],
            ["They were talking", "while the rain was falling"],
          ],
        },
        {
          id: "pochemu-tolko-while",
          kind: "explain",
          text: [
            "When тут не годится: после него ставят то, что случилось разом.",
            "Оба действия тянулись, значит союз только один — while.",
            "Формы was и were выбираются в каждой половине отдельно, по своему лицу.",
          ],
        },
        {
          id: "ne-when-oba-dlitelnyh",
          kind: "note",
          tone: "mistake",
          text:
            "«She was driving when I was sleeping» — так не говорят.\n\nОба действия " +
            "тянулись, и связать их надо словом while.",
        },
        {
          id: "primer-o-poezdke-na-mopede",
          kind: "example",
          caption: "По дороге за город",
          zvuchat: [
            "My brother was cleaning the engine while I was checking the wheel.",
            "The scooter was old, and the tyre was flat.",
            "We bought petrol at the crossing.",
          ],
          text:
            "My brother was cleaning the engine while I was checking the wheel.\nThe scooter was old, and the tyre was flat.\nWe bought petrol at the crossing.",
          explain:
            "В первой строке оба действия тянулись, и между ними стоит while. Во " +
            "второй сказано, каким что-то было, а в третьей — что случилось.",
        },
        {
          id: "slovar-transporta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "engine", translation: "двигатель", example: "My brother was cleaning the engine.", hint: "/ˈendʒɪn/" },
            { term: "petrol", translation: "бензин", example: "We bought petrol at the crossing.", hint: "/ˈpetrəl/" },
            { term: "wheel", translation: "колесо", example: "I was checking the wheel.", hint: "/wiːl/" },
            { term: "motorbike", translation: "мотоцикл", example: "The motorbike was old.", hint: "/ˈməʊtəbaɪk/" },
            { term: "scooter", translation: "самокат, мопед", example: "The scooter was old.", hint: "/ˈskuːtə/" },
            { term: "tyre", translation: "шина", example: "The tyre was flat.", hint: "/ˈtaɪə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-vtoroe-dlitelnoe",
          kind: "gap",
          prompt: "Оба действия тянулись. Допиши недостающее слово во второй половине.",
          before: "She was driving while I ",
          after: " sleeping.",
          answer: "was",
          hint: "Речь об одном человеке, и форма при нём короткая.",
          why: "She was driving while I was sleeping. При I стоит was.",
        },
        {
          id: "z2-vybrat-soyuz-dlya-dvuh",
          kind: "choice",
          prompt: "Оба действия тянулись. Какая запись верна?",
          options: [
            { text: "They were talking when the rain was falling." },
            { text: "They were talking while the rain was falling.", correct: true },
            { text: "They talked while the rain fell." },
          ],
          hint: "Одна запись взяла не тот союз, другая сделала оба действия законченными.",
          why:
            "They were talking while the rain was falling. Оба действия тянулись, и " +
            "союз при них только while.",
        },
        {
          id: "z3-otmetit-dva-dlitelnyh",
          kind: "hottext",
          prompt: "Отметь записи, где оба действия тянулись.",
          parts: [
            { text: "She was driving while I was sleeping", selectable: true, correct: true },
            { text: " · " },
            { text: "She was driving when I called", selectable: true },
            { text: " · " },
            { text: "They were talking while the rain was falling", selectable: true, correct: true },
            { text: " · " },
            { text: "They were talking when the bus arrived", selectable: true },
          ],
          hint: "Смотри на обе половины сразу: есть ли was или were в каждой.",
          why:
            "Оба действия тянулись в She was driving while I was sleeping и They were " +
            "talking while the rain was falling. В двух других вторая половина " +
            "называет то, что случилось разом.",
        },
        {
          id: "z4-sobrat-dva-dlitelnyh",
          kind: "order",
          prompt: "Собери строку о себе: пока брат чистил двигатель, шла проверка колеса.",
          items: ["the wheel.", "I was checking", "while", "was cleaning the engine", "My brother"],
          answer: [4, 3, 2, 1, 0],
          hint: "Сначала первое действие целиком, потом while, потом второе.",
          why:
            "My brother was cleaning the engine while I was checking the wheel. Оба " +
            "действия тянулись, и между ними стоит while.",
        },
        {
          id: "z5-napisat-dva-dlitelnyh",
          kind: "short",
          prompt:
            "Скажи по-английски: сестра вела машину, а в это время шёл дождь. Начни с My sister.",
          answer: "My sister was driving while the rain was falling.",
          accept: ["My sister was driving while the rain was falling"],
          hint: "Оба действия тянулись, значит в обеих половинах стоит was.",
          why:
            "My sister was driving while the rain was falling. Оба действия тянулись, " +
            "и связывает их while.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-sluchae",
      title: "Рассказ о том, как это вышло",
      estimatedMinutes: 15,
      outcome: "рассказывать о случае двумя действиями подряд",

      blocks: [
        {
          id: "zachem-rasskaz-o-sluchae",
          kind: "explain",
          text: [
            "Рассказ о случае строится в три хода.",
            "Сначала говорят, что уже шло. Потом — что случилось. Потом — чем кончилось.",
            "Первый ход берёт длительное действие, второй и третий — законченное.",
          ],
        },
        {
          id: "tri-hoda-rasskaza",
          kind: "table",
          caption: "Три хода рассказа",
          zvuchat: [
            "I was waiting at the bus stop.",
            "Suddenly a scooter stopped near me.",
            "The driver asked about the roundabout.",
          ],
          head: ["Ход", "Какое действие", "Пример"],
          rows: [
            ["что шло", "длительное", "I was waiting at the bus stop."],
            ["что случилось", "законченное", "Suddenly a scooter stopped near me."],
            ["чем кончилось", "законченное", "The driver asked about the roundabout."],
          ],
        },
        {
          id: "pochemu-imenno-tak",
          kind: "explain",
          text: [
            "Первый ход нужен, чтобы слушающий понял обстановку.",
            "Без него рассказ начинается с середины, и случай повисает в пустоте.",
            "Дальше идут только законченные действия: они и двигают рассказ.",
          ],
        },
        {
          id: "ne-nachinat-so-sluchivshegosya",
          kind: "note",
          tone: "info",
          text:
            "Начать сразу со второго хода можно, но тогда обстановку придётся " +
            "объяснять после.\n\nДержись порядка: сперва что шло, потом что случилось.",
        },
        {
          id: "primer-rasskaza-o-klyuche",
          kind: "example",
          caption: "Ключ и замок",
          zvuchat: [
            "I was looking for my key while my sister was waiting outside.",
            "Suddenly the lock opened.",
            "Luckily, the battery in my torch was new.",
          ],
          text:
            "I was looking for my key while my sister was waiting outside.\nSuddenly the lock opened.\nLuckily, the battery in my torch was new.",
          explain:
            "Три строки и три хода: сперва два длительных действия, потом то, что " +
            "случилось, потом оценка того, чем всё кончилось.",
        },
        {
          id: "slovar-melochey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "lock", translation: "замок", example: "Suddenly the lock opened.", hint: "/lɒk/" },
            { term: "battery", translation: "батарейка", example: "The battery was new.", hint: "/ˈbætəri/" },
            { term: "glove", translation: "перчатка", example: "I dropped my glove.", hint: "/glʌv/" },
            { term: "scarf", translation: "шарф", example: "My scarf was in the bag.", hint: "/skɑːf/" },
            { term: "broken", translation: "сломанный", example: "The lock was broken.", hint: "/ˈbrəʊkən/" },
            { term: "hurt", translation: "пострадать, ушибиться", example: "Nobody was hurt.", hint: "/hɜːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nayti-pervyy-hod",
          kind: "choice",
          prompt: "С какой строки начинают рассказ о случае?",
          options: [
            { text: "Suddenly the lock opened." },
            { text: "I was looking for my key.", correct: true },
            { text: "The battery was new." },
          ],
          hint: "Первый ход говорит об обстановке, а не о том, что случилось.",
          why:
            "I was looking for my key. Первый ход берёт длительное действие и " +
            "показывает, что уже шло.",
        },
        {
          id: "z2-vybrat-vtoroy-hod",
          kind: "choice",
          prompt: "Обстановка названа: I was waiting at the bus stop. Какая строка идёт следом?",
          options: [
            { text: "I was waiting for a long time." },
            { text: "The bus stop was near the crossing." },
            { text: "Suddenly a scooter stopped near me.", correct: true },
          ],
          hint: "Второй ход называет то, что случилось разом.",
          why:
            "Suddenly a scooter stopped near me. Две другие строки описывают " +
            "обстановку, а рассказ уже ждёт случившегося.",
        },
        {
          id: "z3-otmetit-hody",
          kind: "hottext",
          prompt: "Отметь строки, которые двигают рассказ, а не описывают обстановку.",
          parts: [
            { text: "Suddenly the lock opened", selectable: true, correct: true },
            { text: " · " },
            { text: "I was looking for my key", selectable: true },
            { text: " · " },
            { text: "The driver asked about the roundabout", selectable: true, correct: true },
            { text: " · " },
            { text: "My sister was waiting outside", selectable: true },
          ],
          hint: "Рассказ двигают законченные действия.",
          why:
            "Двигают рассказ Suddenly the lock opened и The driver asked about the " +
            "roundabout. Две другие строки описывают обстановку.",
        },
        {
          id: "z4-sobrat-rasskaz",
          kind: "order",
          prompt: "Собери рассказ по ходам: что шло, что случилось, чем кончилось.",
          items: [
            "Luckily, the battery was new.",
            "Suddenly the lock opened.",
            "I was looking for my key.",
          ],
          answer: [2, 1, 0],
          hint: "Порядок ходов назван в самом задании.",
          why:
            "I was looking for my key. Suddenly the lock opened. Luckily, the battery " +
            "was new. Порядок взят из условия задания.",
        },
        {
          id: "z5-napisat-pervyy-hod",
          kind: "short",
          prompt:
            "Начни рассказ о случае: скажи о себе, что ожидание шло на остановке. Начни с I.",
          answer: "I was waiting at the bus stop.",
          accept: ["I was waiting at the bus stop"],
          hint: "Первый ход берёт длительное действие: was и окончание -ing.",
          why:
            "I was waiting at the bus stop. Первый ход рассказа показывает, что уже " +
            "шло.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-proisshestvii",
      title: "Читаем о происшествии на дороге",
      estimatedMinutes: 13,
      outcome: "понимать рассказ, где длительное действие прервано законченным",

      blocks: [
        {
          id: "zachem-chitat-o-proisshestvii",
          kind: "explain",
          text: [
            "В рассказе о случае две линии идут разом.",
            "Одна показывает обстановку, другая двигает события.",
            "Ниже сообщение о том, что случилось по дороге домой.",
          ],
        },
        {
          id: "soobshchenie-o-proisshestvii",
          kind: "text",
          title: "Сообщение от Айгуль",
          genre: "message",
          body: [
            "Yesterday I was walking home from work when I saw an accident near the crossing.",
            "A motorbike stopped very quickly, and the driver dropped his glove on the track.",
            "While the ambulance was coming, two people were helping him. Luckily, nobody was hurt.",
            "A helicopter was going over the road at that moment. Some children were crying.",
            "When the ambulance arrived, I walked home. Unfortunately, I lost my scarf on the way.",
          ],
          glossary: [
            { term: "from work", translation: "с работы" },
            { term: "quickly", translation: "быстро" },
            { term: "over", translation: "над" },
            { term: "on the way", translation: "по дороге" },
          ],
        },
        {
          id: "kak-ustroen-rasskaz-o-sluchae",
          kind: "note",
          tone: "info",
          text:
            "Обстановку в сообщении держат длительные действия: шла ходьба, ехала " +
            "скорая, летел вертолёт.\n\nСобытия двигают законченные: увидела, " +
            "остановился, уронил, пришла.",
        },
        {
          id: "slovar-chteniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "cry", translation: "плакать", example: "Some children were crying.", hint: "/kraɪ/" },
            { term: "jump", translation: "прыгать", example: "The dog was jumping near the gate.", hint: "/dʒʌmp/" },
            { term: "helicopter", translation: "вертолёт", example: "A helicopter was going over the road.", hint: "/ˈhelɪkɒptə/" },
            { term: "receipt", translation: "чек", example: "The receipt was in my pocket.", hint: "/rɪˈsiːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-shlo-snachala",
          kind: "choice",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Что шло, когда Айгуль увидела происшествие?",
          options: [
            { text: "Она ехала на автобусе" },
            { text: "Она шла домой с работы", correct: true },
            { text: "Она ждала на остановке" },
          ],
          hint: "Об этом сказано в первой строке.",
          why: "Yesterday I was walking home from work when I saw an accident.",
        },
        {
          id: "z2-chto-uronil-voditel",
          kind: "short",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Что уронил водитель? Ответь одним английским словом.",
          answer: "glove",
          accept: ["his glove", "the glove"],
          hint: "Это слово стоит сразу после слова dropped.",
          why: "The driver dropped his glove on the track.",
        },
        {
          id: "z3-otmetit-dlitelnye-v-tekste",
          kind: "hottext",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Отметь то, что в сообщении тянулось, а не случилось разом.",
          parts: [
            { text: "ехала скорая", selectable: true, correct: true },
            { text: " · " },
            { text: "остановился мотоцикл", selectable: true },
            { text: " · " },
            { text: "летел вертолёт", selectable: true, correct: true },
            { text: " · " },
            { text: "пришла скорая", selectable: true },
          ],
          hint: "Тянулось то, что стоит с формой was или were и окончанием -ing.",
          why:
            "Тянулись while the ambulance was coming и A helicopter was going over " +
            "the road. Остановка мотоцикла и приход скорой заняли миг.",
        },
        {
          id: "z4-chto-poteryala",
          kind: "short",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Что Айгуль потеряла по дороге? Ответь одним английским словом.",
          answer: "scarf",
          accept: ["my scarf", "the scarf"],
          hint: "Об этом сказано в последней строке, после слова lost.",
          why: "Unfortunately, I lost my scarf on the way.",
        },
        {
          id: "z5-postradal-li-kto",
          kind: "choice",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Кто-нибудь пострадал?",
          options: [
            { text: "Водитель" },
            { text: "Никто", correct: true },
            { text: "Дети" },
          ],
          hint: "Это сказано в третьей строке, после слова Luckily.",
          why: "Luckily, nobody was hurt.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-propazhe",
      title: "Слушаем о пропаже",
      estimatedMinutes: 13,
      outcome: "слышать в записи, что шло и что случилось",

      blocks: [
        {
          id: "zachem-slushat-dve-linii",
          kind: "explain",
          text: [
            "В рассказе на слух две линии идут вперемешку.",
            "Различать их помогает окончание -ing: где оно есть, там действие тянулось.",
            "Ниже запись: двое говорят о пропавшем кошельке.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-o-propazhe",
          kind: "audio",
          caption: "Разговор о пропаже",
          pace: "slow",
          skryt: true,
          transcript:
            "Where did you lose it? — While I was walking to the shop. — What were " +
            "you doing at the crossing? — I was looking for my phone. — And the " +
            "purse? — It was in my glove. I dropped it near the roundabout.",
        },
        {
          id: "chto-slushat-o-propazhe",
          kind: "note",
          tone: "info",
          text:
            "Слушай, что человек делал у перехода, где лежал кошелёк и где он " +
            "выпал.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-dorogi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "crossing", translation: "пешеходный переход", example: "I was standing at the crossing.", hint: "/ˈkrɒsɪŋ/" },
            { term: "roundabout", translation: "круговое движение", example: "I dropped it near the roundabout.", hint: "/ˈraʊndəbaʊt/" },
            { term: "deliver", translation: "доставлять", example: "They deliver bread every morning.", hint: "/dɪˈlɪvə/" },
            { term: "track", translation: "дорожка, тропа", example: "The glove was on the track.", hint: "/træk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-delal-u-perehoda",
          kind: "choice",
          about: "zapis-o-propazhe",
          prompt: "Что человек делал у перехода?",
          options: [
            { text: "Ждал автобус" },
            { text: "Искал телефон", correct: true },
            { text: "Считал деньги" },
          ],
          hint: "Ответ идёт сразу за вопросом о переходе.",
          why: "What were you doing at the crossing? — I was looking for my phone.",
        },
        {
          id: "z2-gde-lezhal-koshelek",
          kind: "short",
          about: "zapis-o-propazhe",
          prompt: "Где лежал кошелёк? Ответь одним английским словом.",
          answer: "glove",
          accept: ["my glove", "the glove"],
          hint: "Это слово стоит сразу после слов It was in my.",
          why: "It was in my glove.",
        },
        {
          id: "z3-gde-vypal",
          kind: "short",
          about: "zapis-o-propazhe",
          prompt: "Где кошелёк выпал? Ответь одним английским словом.",
          answer: "roundabout",
          accept: ["the roundabout"],
          hint: "Это слово стоит в самом конце записи.",
          why: "I dropped it near the roundabout.",
        },
        {
          id: "z4-shel-li-poisk",
          kind: "choice",
          about: "zapis-o-propazhe",
          prompt: "Ходьба в магазин уже шла, когда кошелёк пропал?",
          options: [
            { text: "Нет, она только началась" },
            { text: "Да, она шла", correct: true },
            { text: "В записи об этом не сказано" },
          ],
          hint: "Слушай первую пару реплик и союз в ответе.",
          why: "While I was walking to the shop. После while стоит длительное действие.",
        },
        {
          id: "z5-vosstanovit-so-sluha",
          kind: "order",
          zvuk: "While I was walking to the shop. — And the purse?",
          prompt: "Послушай запись и собери из карточек то, что в ней сказано первым.",
          items: ["to the shop.", "walking", "was", "I", "While"],
          answer: [4, 3, 2, 1, 0],
          hint: "Первым стоит союз, за ним человек и длительное действие.",
          why:
            "While I was walking to the shop. После While идёт тот, кто действует, и " +
            "длительное действие.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-sluchae",
      title: "Пишем о том, как это вышло",
      estimatedMinutes: 15,
      outcome: "проверять рассказ: там ли стоит when, там ли while",

      blocks: [
        {
          id: "zachem-proveryat-soyuzy",
          kind: "explain",
          text: [
            "В рассказе о случае легче всего ошибиться в союзе.",
            "Проверить его просто: посмотри, какое действие идёт сразу за ним.",
            "Длительное — while. Законченное — when.",
          ],
        },
        {
          id: "proverka-soyuza",
          kind: "table",
          caption: "Как проверить союз",
          zvuchat: [
            "while I was waiting",
            "when the bus arrived",
            "while the rain was falling",
            "when I dropped my glove",
          ],
          head: ["Что стоит следом", "Какой союз нужен", "Пример"],
          rows: [
            ["was или were с -ing", "while", "while I was waiting"],
            ["форма прошедшего", "when", "when the bus arrived"],
            ["was или were с -ing", "while", "while the rain was falling"],
            ["форма прошедшего", "when", "when I dropped my glove"],
          ],
        },
        {
          id: "pochemu-proverka-rabotaet",
          kind: "explain",
          text: [
            "Правило одно и то же в любую сторону: союз смотрит вперёд, а не назад.",
            "Что стоит перед ним, значения не имеет.",
            "Поэтому проверять можно по одной половине, не читая всей строки.",
          ],
        },
        {
          id: "obrazets-rasskaza",
          kind: "example",
          caption: "Образец рассказа",
          zvuchat: [
            "Yesterday I was waiting at the bus stop when a scooter stopped near me.",
            "While the driver was looking at the wheel, I called my brother.",
            "Unfortunately, my phone battery was very low.",
            "Luckily, the bus arrived and I got home.",
          ],
          text:
            "Yesterday I was waiting at the bus stop when a scooter stopped near me.\nWhile the driver was looking at the wheel, I called my brother.\nUnfortunately, my phone battery was very low.\nLuckily, the bus arrived and I got home.",
          explain:
            "Четыре строки. В первой после when стоит форма прошедшего, во второй " +
            "после while — длительное действие, и оба союза выбраны верно.",
        },
        {
          id: "chto-proverit-v-rasskaze",
          kind: "note",
          tone: "info",
          text:
            "Проверь три вещи. После while стоит длительное действие, после when — " +
            "законченное, и запятая есть только там, где часть с союзом стоит " +
            "впереди.\n\nЕсли союз пришлось менять, проверь запятую заново.",
        },

        // ---- задания ----
        {
          id: "z1-nayti-nevernyy-soyuz",
          kind: "hottext",
          prompt: "Отметь части, где союз выбран неверно.",
          parts: [
            { text: "while the bus arrived", selectable: true, correct: true },
            { text: " · " },
            { text: "while I was waiting", selectable: true },
            { text: " · " },
            { text: "when the rain was falling", selectable: true, correct: true },
            { text: " · " },
            { text: "when I dropped my glove", selectable: true },
          ],
          hint: "Посмотри, какое действие стоит сразу за союзом.",
          why:
            "Неверны while the bus arrived и when the rain was falling. В первой после " +
            "while стоит законченное действие, во второй после when — длительное.",
        },
        {
          id: "z2-ispravit-soyuz",
          kind: "short",
          prompt: "Исправь союз и запиши целиком: «I was reading when somebody was calling me.»",
          answer: "I was reading while somebody was calling me.",
          accept: ["I was reading while somebody was calling me"],
          hint: "После союза стоит длительное действие, значит нужен другой союз.",
          why:
            "I was reading while somebody was calling me. После длительного действия " +
            "ставят while.",
        },
        {
          id: "z3-vybrat-zapyatuyu",
          kind: "choice",
          prompt: "В рассказе строка начинается с While. Какая запись верна?",
          options: [
            { text: "While the driver was looking at the wheel I called my brother." },
            { text: "While the driver was looking at the wheel, I called my brother.", correct: true },
            { text: "While, the driver was looking at the wheel I called my brother." },
          ],
          hint: "Запятая стоит там, где кончилась часть с союзом.",
          why:
            "While the driver was looking at the wheel, I called my brother. Часть с " +
            "союзом стоит впереди, и запятая идёт после неё.",
        },
        {
          id: "z4-napisat-rasskaz",
          kind: "essay",
          prompt:
            "Напиши рассказ о случае четырьмя строками. В первой скажи, что шло и что случилось, дальше — чем всё кончилось.",
          minWords: 18,
          sample:
            "Yesterday I was waiting at the bus stop when a scooter stopped near me.\nWhile the driver was looking at the wheel, I called my brother.\nUnfortunately, my phone battery was very low.\nLuckily, the bus arrived and I got home.",
          checklist: [
            "в первой строке есть и длительное действие, и законченное",
            "после while стоит длительное действие, после when — законченное",
            "запятая стоит только там, где часть с союзом идёт впереди",
            "у длительного действия есть форма was или were и окончание -ing",
          ],
          hint: "Бери законченные действия, формы которых знаешь: came, saw, stopped, called, arrived.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы каждый союз смотрел на " +
            "то действие, которое идёт сразу за ним.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от заданий уроков и другими углами: исправить
      // чужую запись, назвать причину ошибки, восстановить половину строки,
      // отличить по русскому переводу. Совпадений с заданиями уроков нет.

      // ---- итог 1 ----
      {
        id: "q-dve-formy-ispravit",
        kind: "short",
        outcome: "связывать длительное и законченное действие: I was cooking when he came",
        prompt: "Исправь ошибку и запиши целиком: «I cooked when my colleague was coming.»",
        answer: "I was cooking when my colleague came.",
        accept: ["I was cooking when my colleague came"],
        why:
          "I was cooking when my colleague came. Готовка тянулась, а приход занял " +
          "миг: формы стояли наоборот.",
      },
      {
        id: "q-dve-formy-prichina",
        kind: "choice",
        outcome: "связывать длительное и законченное действие: I was cooking when he came",
        prompt: "Чем «I read when he came» отличается от «I was reading when he came»?",
        options: [
          { text: "Ничем, это одно и то же" },
          { text: "В первой чтение началось после его прихода", correct: true },
          { text: "В первой он пришёл дважды" },
        ],
        why:
          "I was reading when he came говорит, что чтение уже шло. I read when he " +
          "came ставит чтение после прихода.",
      },

      // ---- итог 2 ----
      {
        id: "q-soyuz-ispravit",
        kind: "short",
        outcome: "выбирать when или while по тому, какое действие идёт следом",
        prompt: "Исправь союз и запиши целиком: «While the ambulance arrived, I called my brother.»",
        answer: "When the ambulance arrived, I called my brother.",
        accept: ["When the ambulance arrived, I called my brother"],
        why:
          "When the ambulance arrived, I called my brother. Приход скорой занял миг, " +
          "а при таком действии стоит when.",
      },
      {
        id: "q-soyuz-po-perevodu",
        kind: "short",
        outcome: "выбирать when или while по тому, какое действие идёт следом",
        prompt:
          "Допиши союз и запиши половину целиком: «___ the rain was falling» — по-русски «пока шёл дождь».",
        answer: "while the rain was falling",
        accept: ["While the rain was falling", "while the rain was falling."],
        why:
          "while the rain was falling. Слово «пока» показывает, что действие " +
          "тянулось, а при таком стоит while.",
      },

      // ---- итог 3 ----
      {
        id: "q-zapyataya-ispravit",
        kind: "short",
        outcome: "ставить запятую, когда часть с when стоит впереди",
        prompt: "Убери лишний знак и запиши целиком: «I was sleeping, when the phone stopped.»",
        answer: "I was sleeping when the phone stopped.",
        accept: ["I was sleeping when the phone stopped"],
        why:
          "I was sleeping when the phone stopped. Часть с when стоит позади, и " +
          "запятая перед ней не нужна.",
      },
      {
        id: "q-zapyataya-prichina",
        kind: "choice",
        outcome: "ставить запятую, когда часть с when стоит впереди",
        prompt: "Зачем в записи «When he came, I was cooking» нужна запятая?",
        options: [
          { text: "Она отделяет часть с союзом, стоящую впереди", correct: true },
          { text: "Она всегда стоит перед словом I" },
          { text: "Она показывает, что действие длилось долго" },
        ],
        why:
          "Запятая показывает, где кончилась часть с when и началась главная. Если " +
          "часть с союзом стоит позади, запятая не нужна.",
      },

      // ---- итог 4 ----
      {
        id: "q-dva-dlitelnyh-ispravit",
        kind: "short",
        outcome: "соединять два длительных действия словом while",
        prompt: "Исправь ошибку и запиши целиком: «She was driving when I was sleeping.»",
        answer: "She was driving while I was sleeping.",
        accept: ["She was driving while I was sleeping"],
        why:
          "She was driving while I was sleeping. Ни одно из двух действий не заняло " +
          "миг, а при таком союз только один.",
      },
      {
        id: "q-dva-dlitelnyh-otlichit",
        kind: "choice",
        outcome: "соединять два длительных действия словом while",
        prompt: "В какой записи оба действия тянулись?",
        options: [
          { text: "They were talking when the bus arrived." },
          { text: "They talked while the rain fell." },
          { text: "They were talking while the rain was falling.", correct: true },
        ],
        why:
          "They were talking while the rain was falling. В обеих половинах стоит were " +
          "или was и окончание -ing.",
      },

      // ---- итог 5 ----
      {
        id: "q-rasskaz-pervyy-hod",
        kind: "short",
        outcome: "рассказывать о случае двумя действиями подряд",
        prompt:
          "Рассказ начали так: «I cleaned the engine. Suddenly the rain started.» Первая строка должна описывать обстановку, а не двигать рассказ. Перепиши её.",
        answer: "I was cleaning the engine.",
        accept: ["I was cleaning the engine"],
        why:
          "I was cleaning the engine. Обстановку описывает длительное действие, и " +
          "потому первая строка берёт was и окончание -ing.",
      },
      {
        id: "q-rasskaz-lishnyaya-stroka",
        kind: "choice",
        outcome: "рассказывать о случае двумя действиями подряд",
        prompt: "Какая строка не двигает рассказ, а только описывает обстановку?",
        options: [
          { text: "The driver asked about the roundabout." },
          { text: "My sister was waiting outside.", correct: true },
          { text: "Suddenly the lock opened." },
        ],
        why:
          "My sister was waiting outside. Это длительное действие, и оно описывает " +
          "обстановку, а рассказ двигают законченные.",
      },

      // ---- итог 6 ----
      {
        id: "q-rasskaz-chto-tyanulos",
        kind: "choice",
        outcome: "понимать рассказ, где длительное действие прервано законченным",
        prompt:
          "В сообщении написано: «While the ambulance was coming, two people were helping him.» Что тянулось?",
        options: [
          { text: "Только приезд скорой" },
          { text: "Только помощь людей" },
          { text: "И приезд скорой, и помощь людей", correct: true },
        ],
        why:
          "Тянулось и то, и другое: в обеих половинах стоит was или were с окончанием " +
          "-ing.",
      },
      {
        id: "q-rasskaz-chto-sluchilos",
        kind: "short",
        outcome: "понимать рассказ, где длительное действие прервано законченным",
        prompt:
          "В сообщении написано: «While the ambulance was coming, two people were helping him.» Запиши по-английски ту половину, которая стоит после союза.",
        answer: "two people were helping him",
        accept: ["two people were helping him."],
        why:
          "Вторая половина — two people were helping him. Первая стоит перед " +
          "запятой и начинается с While.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-chto-shlo",
        kind: "choice",
        outcome: "слышать в записи, что шло и что случилось",
        zvuk: "While I was walking to the shop, I lost my purse.",
        prompt: "Послушай и ответь: что тянулось?",
        options: [
          { text: "Потеря кошелька" },
          { text: "Ходьба в магазин", correct: true },
          { text: "В записи об этом не сказано" },
        ],
        why:
          "While I was walking to the shop, I lost my purse. Тянулась ходьба: она " +
          "стоит после while.",
      },
      {
        id: "q-na-sluh-slovo-o-propazhe",
        kind: "short",
        outcome: "слышать в записи, что шло и что случилось",
        zvuk: "What were you doing near the gate? — I was looking for my receipt.",
        prompt: "Послушай и запиши одним английским словом, что человек искал.",
        answer: "receipt",
        accept: ["my receipt", "the receipt"],
        why: "Человек искал чек: I was looking for my receipt.",
      },

      // ---- итог 8 ----
      {
        id: "q-proverka-soyuza-i-zapyatoy",
        kind: "short",
        outcome: "проверять рассказ: там ли стоит when, там ли while",
        prompt:
          "В рассказе строка «When I was looking at the wheel, my brother called me.» Исправь союз и запиши целиком.",
        answer: "While I was looking at the wheel, my brother called me.",
        accept: ["While I was looking at the wheel, my brother called me"],
        why:
          "While I was looking at the wheel, my brother called me. После союза стоит " +
          "длительное действие, а при нём нужен while.",
      },
      {
        id: "q-proverka-chto-smotret",
        kind: "choice",
        outcome: "проверять рассказ: там ли стоит when, там ли while",
        prompt: "Куда смотреть, чтобы проверить союз?",
        options: [
          { text: "На то, что стоит перед союзом" },
          { text: "На запятую в середине строки" },
          { text: "На то действие, которое идёт сразу за союзом", correct: true },
        ],
        why:
          "Союз смотрит вперёд: длительное действие после него требует while, " +
          "законченное — when.",
      },
    ],
  },
};

export default module;
