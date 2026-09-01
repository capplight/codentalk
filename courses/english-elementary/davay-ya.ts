import type { Module } from "@/lib/content/types";

/**
 * Модуль 12 курса «Английский · Elementary»: давай я.
 *
 * Программа: docs/programma-english-elementary.md, модуль 12 — «предлагать
 * помощь и звать вместе»; грамматика: `shall I`, `shall we`, `let's`,
 * `why don't we`.
 *
 * ИМЁН ЗДЕСЬ ДВА, И ОНИ НАЗЫВАЮТ РАЗНЫЕ ВЕЩИ: «ПРЕДЛОЖИТЬ ПОМОЩЬ» И «ПОЗВАТЬ
 * ВМЕСТЕ».
 *
 * Это не нарушение правила об одном имени (CLAUDE.md, «Понятность объяснения»,
 * пункт 3): правило запрещает звать ОДНУ вещь тремя словами, а здесь вещи две.
 * Помощь предлагают, когда дело сделает один — тот, кто предлагает. Вместе зовут,
 * когда дело сделают оба. Разница видна и в английском: `Shall I…?` против
 * `Shall we…?`. У каждой вещи имя одно и держится по всему модулю.
 *
 * СЛОВА «ПРЕДЛОЖЕНИЕ» В ТЕКСТЕ ДЛЯ УЧЕНИКА НЕТ НИ РАЗУ, И ЭТО НАРОЧНО. Курс уже
 * зовёт этим словом другое — предложение как строку речи («Ужин не был готов.»,
 * модуль 1). Два смысла одного слова в одном курсе ученик разложить не обязан,
 * поэтому здесь работают глаголы: предложить, позвать, ответить.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, FUTURE future simple (with will and shall),
 *    «USE: OFFERS WITH 'SHALL'» — «Can use 'shall I' to make offers», пример
 *    источника «Shall I wait for you?». Это урок 1. Та же графа стоит в файле и
 *    вторым заходом: A2, MODALITY shall, «USE: OFFERS» — «Can use 'shall I' to
 *    make offers», пример «Shall I go and buy some cake and crackers?».
 *
 * 2. English Grammar Profile, A2, там же, «USE: SUGGESTIONS WITH 'SHALL'» —
 *    «Can use 'shall we' to make suggestions», пример источника «Shall we go to
 *    my friend's house to get it?». Это урок 2.
 *
 * 3. English Grammar Profile, A2, CLAUSES imperatives, «FORM/USE: 'LET'S',
 *    SUGGESTION» — «Can use 'let's' + base form of a main verb, for first person
 *    plural imperatives to make a suggestion», пример источника «The concert
 *    will be in Canecão. Let's go!!!». Это урок 3. Слова «base form» и берёт
 *    урок: после let's глагол стоит без окончания.
 *
 * 4. English Grammar Profile, A2, CLAUSES interrogatives, «FORM: NEGATIVE 'WH-'
 *    INTERROGATIVE» — «Can form negative 'wh-' interrogative clauses», пример
 *    источника «Why don't we watch a film?». Это урок 4.
 *
 *    ОСТОРОЖНО, ЗДЕСЬ ЛЕГКО СОВРАТЬ. Графа описывает ФОРМУ — отрицательный
 *    вопрос с вопросительным словом, — а не зов вместе. Зовом вместе её делает
 *    пример источника, и урок опирается именно на пример. Утверждать, будто
 *    источник называет `why don't we` способом позвать, нельзя.
 *
 * 5. Описания Совета Европы, с. 75, графа A2: «Can discuss what to do in the
 *    evening or at the weekend. Can make and respond to suggestions. Can agree
 *    and disagree with others». Отсюда весь состав модуля разом, и урок 5 в
 *    особенности: источник требует не только звать, но и ОТВЕЧАТЬ. Там же с. 74,
 *    A2: «Can make and respond to invitations, suggestions and apologies».
 *
 * 6. Руководство A2 Key, с. 52, Language specifications, раздел Tenses: «Future
 *    with will and shall: offers, promises, predictions, etc.» — слово «offers»
 *    стоит в источнике первым.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК.
 *
 * - `I shall`, `we shall` утверждением. Графа A2 у источника есть — «FORM:
 *   AFFIRMATIVE 'SHALL'», пример «I shall come with you», — но случай модуля
 *   другой: предложить и позвать, а это вопрос. Запрета на утверждение здесь не
 *   написано нигде: его просто нет в уроке, как нет и множества другого.
 * - `shan't` и `shall not`. Отрицание стоит у источника на C1: «FORM: NEGATIVE
 *   'SHALL'» — «Can use the negative form 'shall not'». Выше ступени.
 * - `Would you like…?`. Графа A2 есть — CLAUSES interrogatives, «FORM:
 *   AFFIRMATIVE INTERROGATIVE, WITH MODAL AUXILIARY VERBS», пример «Would you
 *   like to come with me?». Модулю она не нужна: четыре способа позвать и так
 *   лежат в уроках 1–4, а пятый сделал бы урок перечнем.
 *
 *   ОБЕЩАНИЕ «оставлено следующему модулю» НЕ ИСПОЛНИЛОСЬ, и это надо знать:
 *   модуль 13 оборота не взял, а модуль 28 «Вежливо» берёт его только на
 *   узнавание — там отвечают на приглашение, а не учат приглашать. Учит
 *   приглашать ступень Beginner, урок «Приглашение: Would you like to come?».
 *   Нашёл методист при разборе модуля 28.
 * - Имени времени модуль не даёт. `shall` источник кладёт сразу в две
 *   подкатегории — `future simple (with will and shall)` и `MODALITY shall`, — а
 *   имя `Future Simple` курс уже назвал в модуле 9, при первой встрече. Второй
 *   раз называть незачем.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать две карточки, из них двадцать восемь несут слово,
 * какого на прошлой ступени не было. Норма владельца от 20 августа — не меньше
 * тридцати карточек и не меньше пятнадцати новых. Слова взяты из запаса ступени
 * (`npm run slovo -- --zapas`), то есть из требований экзамена A2 Key, и каждое
 * работает в модуле не только в своей карточке.
 *
 * Четыре карточки старые нарочно. `sorry` и `can't` вводятся заново, потому что
 * между ступенями нет ссылок на память: на них стоит весь урок 5, и ученик,
 * пришедший сразу сюда, иначе встретил бы `can't` впервые в правильном ответе.
 * Нашёл методист. `club` и `road` работают в образце урока письма.
 *
 * Снято по разбору: `guest` (карточка уже есть в модуле 3 этой же ступени),
 * `hurry`, `biscuit` и `jam` (нигде в модуле не работали), `slice` — словник
 * ступени даёт только существительное, а глагол Oxford ставит на B1, поэтому в
 * уроке 1 теперь `cut the bread`.
 *
 * Два слова из первого списка сняты нарочно, и это стоит помнить: `path` и
 * `envelope`. Наши источники дают им спорное чтение — Викисловарь пишет `path`
 * через короткий гласный (областной вариант), а `envelope` через носовой. Оба
 * решались бы владельцем как преподавателем, а ради двух карточек копить ему
 * решения незачем. Слова остаются в запасе ступени.
 */
const module: Module = {
  slug: "davay-ya",
  title: "Давай я",

  outcomes: [
    "предлагать помощь: Shall I carry your bag?",
    "звать вместе: Shall we play golf on Saturday?",
    "звать коротко: Let's bake a pizza",
    "звать вопросом: Why don't we meet at the square?",
    "отвечать на зов: согласиться, отказать или отложить",
    "находить в сообщении, куда и во сколько зовут",
    "слышать в разговоре, куда позвали и о чём условились",
    "проверять приглашение: названы место, час и дело",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, FUTURE future simple (with will and shall), «USE: OFFERS WITH " +
        "'SHALL'»: «Can use 'shall I' to make offers», пример источника — «Shall I " +
        "wait for you?» — урок 1. Та же графа вторым заходом: A2, MODALITY shall, " +
        "«USE: OFFERS», пример — «Shall I go and buy some cake and crackers?». " +
        "A2, FUTURE future simple (with will and shall), «USE: SUGGESTIONS WITH " +
        "'SHALL'»: «Can use 'shall we' to make suggestions», пример источника — " +
        "«Shall we go to my friend's house to get it?» — урок 2. " +
        "A2, CLAUSES imperatives, «FORM/USE: 'LET'S', SUGGESTION»: «Can use 'let's' " +
        "+ base form of a main verb, for first person plural imperatives to make a " +
        "suggestion», пример источника — «The concert will be in Canecão. Let's " +
        "go!!!» — урок 3. Оттуда же правило урока о глаголе без окончания: в самой " +
        "графе стоит «base form». " +
        "A2, CLAUSES interrogatives, «FORM: NEGATIVE 'WH-' INTERROGATIVE»: «Can " +
        "form negative 'wh-' interrogative clauses», пример источника — «Why don't " +
        "we watch a film?» — урок 4. ГРАФА ОПИСЫВАЕТ ФОРМУ, А НЕ ЗОВ ВМЕСТЕ: зовом " +
        "её делает пример, и урок опирается на пример. " +
        "ЧЕГО НЕТ. A2, там же, «FORM: AFFIRMATIVE 'SHALL'»: «Can use the " +
        "affirmative form 'shall' with 'I' and 'we'», пример «I shall come with " +
        "you» — утверждения в модуле нет, потому что случай модуля вопрос. Запрета " +
        "на утверждение в уроке не написано. " +
        "C1, там же, «FORM: NEGATIVE 'SHALL'»: «Can use the negative form 'shall " +
        "not'» — отрицание выше ступени, `shan't` в модуле нет. " +
        "A2, CLAUSES interrogatives, «FORM: AFFIRMATIVE INTERROGATIVE, WITH MODAL " +
        "AUXILIARY VERBS», пример «Would you like to come with me?» — в модуле " +
        "не взято, чтобы урок не стал перечнем способов. Приглашать учит " +
        "ступень Beginner, а модуль 28 «Вежливо» берёт оборот на узнавание: " +
        "там отвечают на приглашение",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "ОПОРА ВСЕГО МОДУЛЯ. с. 75, графа A2: «Can discuss what to do in the " +
        "evening or at the weekend. Can make and respond to suggestions. Can agree " +
        "and disagree with others». Слово «respond» и есть основание урока 5: " +
        "источник требует не только звать, но и отвечать. " +
        "с. 74, A2: «Can make and respond to invitations, suggestions and " +
        "apologies» — то же требование другой шкалой. " +
        "УРОК ПИСЬМА «Пишем приглашение». с. 83, Correspondence, графа A2: «Can " +
        "compose short, simple notes, e-mails and text messages (e.g. to send or " +
        "reply to an invitation, to confirm or change an arrangement)». Приглашение " +
        "названо источником прямо. Точную графу нашёл методист — прежняя ссылка " +
        "пересказывала её как «короткое сообщение» и была слабее. Жанр тот же, что " +
        "у урока чтения этого модуля, поэтому новых слов уроку письма не нужно",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, раздел Tenses: «Future with will and " +
        "shall: offers, promises, predictions, etc.» — слово offers стоит в " +
        "источнике первым, и модуль занят им. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Все тридцать две карточки модуля взяты из словника ступени: pull, serve, " +
        "golf, sailing, skate, racket, net, square, bake, pizza, recipe, mix, " +
        "omelette, mushroom, supper, strawberry, sorry, can't, certainly, alright, " +
        "perhaps, relaxing, lemonade, dessert, honey, melon, grape, pear, noon, " +
        "sweet, club, road. " +
        "Подбор шёл через `npm run slovo -- --zapas`: это слова требований " +
        "экзамена A2, до которых курс ещё не дошёл. " +
        "СНЯТО ПО РАЗБОРУ МЕТОДИСТА: `slice`. Словник даёт две записи, обе с " +
        "пометой существительного — «slice (n)», — а Oxford 3000 ставит глагол на " +
        "B1. Урок 1 берёт `cut the bread`. " +
        "ОГОВОРКА ПО СЛОВУ NET. В словнике оно есть, но проиллюстрировано " +
        "единственным примером «I found a great website on the net», и в " +
        "тематический список спорта не входит. Модуль учит другому смыслу — сетка " +
        "между игроками. Нашёл методист; слово в требованиях ступени есть, смысл " +
        "решается как обычный выбор примера",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение всех карточек модуля. Условности курса применены: `r` вместо `ɹ`, " +
        "`g` вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, знак ударения перед слогом. " +
        "СНЯТЫ НАРОЧНО: `path` и `envelope`. Источники дают им спорное чтение — " +
        "Викисловарь пишет `path` через короткий гласный (областной вариант), " +
        "`envelope` через носовой, — а такие слова решает владелец как " +
        "преподаватель. Слова остались в запасе ступени",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "pomogu-shall-i",
      title: "Помочь: Shall I carry your bag?",
      estimatedMinutes: 15,
      outcome: "предлагать помощь: Shall I carry your bag?",
      vozvrat: [{ iz: "po-raspisaniyu", zadanie: "z1-dopisat-okonchanie" }],

      blocks: [
        {
          id: "zachem-predlagat-pomoshch",
          kind: "explain",
          text: [
            "Дана несёт две тяжёлые сумки, и Алим видит это с другой стороны улицы.",
            "Shall I carry your bag? — Давай я понесу твою сумку?",
            "Так предлагают помощь: дело сделает один — тот, кто предложил.",
            "По-русски это «давай я», и знак вопроса здесь не обязателен: «Давай я понесу».",
            "По-английски строка обязательно вопрос — оттого shall и стоит первым.",
            "За ним идёт I, а после него сам глагол.",
          ],
        },
        {
          id: "chto-mozhno-predlozhit",
          kind: "table",
          caption: "Что предлагают сделать",
          zvuchat: [
            "Shall I carry your bag?",
            "Shall I help you?",
            "Shall I serve the tea?",
            "Shall I pull the door?",
            "Shall I call a taxi?",
          ],
          head: ["Что происходит", "Как предложить помощь"],
          rows: [
            ["сумки тяжёлые", "Shall I carry your bag?"],
            ["человек не справляется", "Shall I help you?"],
            ["гости сели за стол", "Shall I serve the tea?"],
            ["дверь не открывается", "Shall I pull the door?"],
            ["на улице поздно", "Shall I call a taxi?"],
          ],
        },
        {
          id: "kak-ustroena-stroka-pomoshchi",
          kind: "explain",
          text: [
            "Слово shall стоит первым, потому что это вопрос.",
            "Глагол после I не берёт никаких окончаний: carry, help, serve, pull, call.",
            "Слово to между I и глаголом не ставят.",
            "А что именно сделать — говорят после глагола: your bag, the tea, the door.",
          ],
        },
        {
          id: "ne-stavim-to",
          kind: "note",
          tone: "mistake",
          text:
            "«Shall I to carry your bag?» — так не говорят.\n\nПосле I сразу идёт " +
            "глагол: Shall I carry your bag?",
        },
        {
          id: "pomoshch-na-kuhne",
          kind: "example",
          caption: "На кухне перед приходом гостей",
          razgovor: true,
          zvuchat: [
            "Shall I cut the bread?",
            "Yes, please.",
            "Shall I serve the tea?",
            "Not yet, the guests are late.",
            "Shall I help you with the plates?",
            "Thank you!",
          ],
          text:
            "Shall I cut the bread?\nYes, please.\nShall I serve the tea?\nNot yet, the guests are late.\nShall I help you with the plates?\nThank you!",
          perevod: {
            "Shall I cut the bread?": "Давай я нарежу хлеб.",
            "Yes, please.": "Да, пожалуйста.",
            "Shall I serve the tea?": "Давай я подам чай.",
            "Not yet, the guests are late.": "Пока не надо, гости опаздывают.",
            "Shall I help you with the plates?": "Давай я помогу с тарелками.",
            "Thank you!": "Спасибо!",
          },
          explain:
            "Каждый раз предлагается одно дело и каждый раз одним человеком: cut, " +
            "serve, help. Хозяйка отвечает коротко, и о том, как отвечают, — урок 5.",
        },
        {
          id: "slovar-pomoshchi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "pull", translation: "тянуть", example: "Shall I pull the door?", hint: "/pʊl/" },
            { term: "serve", translation: "подавать на стол", example: "Shall I serve the tea?", hint: "/sɜːv/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-shall",
          kind: "gap",
          prompt: "Сумки тяжёлые, и ты берёшься их нести. Допиши недостающее слово.",
          before: "",
          after: " I carry your bag?",
          answer: "Shall",
          hint: "Строка начинается со слова, которое делает её вопросом.",
          why:
            "Shall I carry your bag? Слово shall стоит первым, и потому строка — " +
            "вопрос, а не рассказ о себе.",
        },
        {
          id: "z2-vybrat-bez-to",
          kind: "choice",
          prompt: "Ты берёшься подать чай. Какая запись верна?",
          options: [
            { text: "Shall I to serve the tea?" },
            { text: "Shall I serve the tea?", correct: true },
            { text: "Shall we serve the tea?" },
          ],
          hint: "Чай подаёшь ты один, и слово после shall это показывает.",
          why:
            "Shall I serve the tea? Слово to после I не ставят, а we сказало бы, " +
            "что чай подают двое.",
        },
        {
          id: "z3-otmetit-predlozhennuyu-pomoshch",
          kind: "hottext",
          prompt: "Отметь строки, которыми предлагают помощь.",
          parts: [
            { text: "Shall I pull the door?", selectable: true, correct: true },
            { text: " · " },
            { text: "I carry your bag every day", selectable: true },
            { text: " · " },
            { text: "Shall I cut the bread?", selectable: true, correct: true },
            { text: " · " },
            { text: "Dana serves the tea at six", selectable: true },
          ],
          hint: "Помощь предлагают вопросом, и он начинается со слова shall.",
          why:
            "Помощь предлагают Shall I pull the door? и Shall I cut the bread? " +
            "Остальные строки о том, что бывает всегда, и никто ничего не берётся " +
            "сделать сейчас.",
        },
        {
          id: "z4-sobrat-pomoshch",
          kind: "order",
          prompt: "Собери строку: ты берёшься вызвать такси.",
          items: ["a taxi?", "call", "Shall", "I"],
          answer: [2, 3, 1, 0],
          hint: "Сначала shall, потом тот, кто берётся, потом дело.",
          why:
            "Shall I call a taxi? Слово shall открывает вопрос, за ним идёт I, а " +
            "дело стоит последним.",
        },
        {
          id: "z5-napisat-pomoshch",
          kind: "short",
          prompt:
            "Дана не может открыть тяжёлую дверь. Возьмись потянуть её, начав со слова Shall.",
          answer: "Shall I pull the door?",
          accept: ["Shall I pull the door"],
          hint: "Дверь по-английски the door, а тянуть — pull.",
          why:
            "Shall I pull the door? Дело названо после I, и глагол стоит без " +
            "окончания.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "poydem-shall-we",
      title: "Пойдём вместе: Shall we play golf?",
      estimatedMinutes: 15,
      outcome: "звать вместе: Shall we play golf on Saturday?",

      blocks: [
        {
          id: "zachem-zvat-vmeste",
          kind: "explain",
          text: [
            "В субботу у Алима и Данияра свободный день, и Алим зовёт друга на площадку.",
            "Shall we play golf on Saturday? — Давай сыграем в гольф в субботу?",
            "Так зовут вместе: дело сделают оба, а не один.",
            "Разница с прошлым уроком в одном слове — там было I, здесь we.",
          ],
        },
        {
          id: "odin-ili-oba",
          kind: "table",
          caption: "Один делает или оба",
          zvuchat: [
            "Shall I carry your bag?",
            "Shall we carry the box together?",
            "Shall I call a taxi?",
            "Shall we call a taxi?",
          ],
          head: ["Кто делает дело", "Запись"],
          rows: [
            ["один — тот, кто предлагает", "Shall I carry your bag?"],
            ["оба", "Shall we carry the box together?"],
            ["один — тот, кто предлагает", "Shall I call a taxi?"],
            ["оба едут", "Shall we call a taxi?"],
          ],
        },
        {
          id: "chto-menyaet-we",
          kind: "explain",
          text: [
            "Слово we значит «мы» — говорящий и тот, к кому он обращается.",
            "Глагол после we стоит без окончания так же, как после I: play, go, meet.",
            "Куда и когда — говорят в конце: on Saturday, at the square, after supper.",
          ],
        },
        {
          id: "zanyatiya-vmeste",
          kind: "example",
          caption: "Суббота у Алима и Данияра",
          razgovor: true,
          zvuchat: [
            "Shall we play tennis on Saturday?",
            "I don't have a racket.",
            "Shall we go sailing?",
            "The lake is far.",
            "Shall we skate at the square?",
            "Now that's a good day.",
          ],
          text:
            "Shall we play tennis on Saturday?\nI don't have a racket.\nShall we go sailing?\nThe lake is far.\nShall we skate at the square?\nNow that's a good day.",
          perevod: {
            "Shall we play tennis on Saturday?":
              "Давай сыграем в теннис в субботу?",
            "I don't have a racket.": "У меня нет ракетки.",
            "Shall we go sailing?": "Давай покатаемся на лодке под парусом?",
            "The lake is far.": "До озера далеко.",
            "Shall we skate at the square?": "Давай покатаемся на коньках на площади?",
            "Now that's a good day.": "Вот это будет хороший день.",
          },
          explain:
            "Каждый раз зовут вместе, и каждый раз с новым делом: tennis, sailing, " +
            "skate. Друг отвечает не «да» и не «нет», а называет причину.",
        },
        {
          id: "igra-i-set",
          kind: "note",
          tone: "info",
          text:
            "У игры с мячом через сетку своя пара слов: racket — то, чем бьют, net " +
            "— сетка между игроками.\n\nShall we play tennis? The net is new.",
        },
        {
          id: "slovar-vmeste",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "golf", translation: "гольф", example: "Shall we play golf on Saturday?", hint: "/gɒlf/" },
            { term: "sailing", translation: "парусный спорт", example: "Shall we go sailing?", hint: "/ˈseɪlɪŋ/" },
            { term: "skate", translation: "кататься на коньках", example: "Shall we skate at the square?", hint: "/skeɪt/" },
            { term: "racket", translation: "ракетка", example: "I don't have a racket.", hint: "/ˈrækɪt/" },
            { term: "net", translation: "сетка", example: "The net is new.", hint: "/net/" },
            { term: "square", translation: "площадь", example: "Shall we skate at the square?", hint: "/skweə/" },
            { term: "supper", translation: "ужин", example: "And supper? Let's cook at home.", hint: "/ˈsʌpə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-we-ili-i",
          kind: "choice",
          prompt: "Ты зовёшь друга играть в гольф вместе с тобой. Какая запись верна?",
          options: [
            { text: "Shall I play golf on Saturday?" },
            { text: "Shall we play golf on Saturday?", correct: true },
            { text: "Shall we to play golf on Saturday?" },
          ],
          hint: "Дело сделают двое, и лишних слов перед глаголом нет.",
          why:
            "Shall we play golf on Saturday? Слово we говорит, что играют оба, а " +
            "to перед глаголом не ставят.",
        },
        {
          id: "z2-dopisat-we",
          kind: "gap",
          prompt: "Вы оба идёте на площадь кататься. Допиши недостающее слово.",
          before: "Shall ",
          after: " skate at the square?",
          answer: "we",
          hint: "Катаются двое, и потому нужно слово «мы».",
          why:
            "Shall we skate at the square? Катаются оба, поэтому стоит we, а не I.",
        },
        {
          id: "z3-sootnesti-zov-i-otvet",
          kind: "match",
          prompt: "Соедини зов и ответ, который к нему подходит.",
          left: [
            "Shall we play tennis?",
            "Shall we go sailing?",
            "Shall we skate at the square?",
          ],
          right: ["The lake is far.", "The square is full.", "The net is broken."],
          answer: [2, 0, 1],
          hint: "В каждом ответе названа помеха ровно тому делу, о котором спросили.",
          why:
            "Про теннис отвечают о сетке, про парусный спорт — о далёком озере, про " +
            "коньки — о людной площади. Помеха всегда о том самом деле.",
        },
        {
          id: "z4-sobrat-zov",
          kind: "order",
          prompt: "Собери строку: ты зовёшь пойти под парусом в воскресенье.",
          items: ["on Sunday?", "sailing", "we", "Shall", "go"],
          answer: [3, 2, 4, 1, 0],
          hint: "Сначала shall и we, потом два слова о самом деле, потом день.",
          why:
            "Shall we go sailing on Sunday? Дело здесь из двух слов — go sailing, — " +
            "а день стоит в конце.",
        },
        {
          id: "z5-napisat-zov",
          kind: "short",
          prompt:
            "Позови друга покататься на коньках на площади. Начни со слова Shall.",
          answer: "Shall we skate at the square?",
          accept: ["Shall we skate at the square"],
          hint: "Площадь по-английски the square, а кататься на коньках — skate.",
          why:
            "Shall we skate at the square? Катаются оба, поэтому we, и место названо " +
            "после глагола.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "davay-lets",
      title: "Давай: Let's bake a pizza",
      estimatedMinutes: 14,
      outcome: "звать коротко: Let's bake a pizza",

      blocks: [
        {
          id: "zachem-lets",
          kind: "explain",
          text: [
            "Вечером дома скучно, и Дана предлагает брату занятие.",
            "Let's bake a pizza. — Давай испечём пиццу.",
            "Русское «давай» и английское let's тут совпадают почти буквально.",
            "Это тоже приглашение сделать что-то вместе, но короче: вопроса здесь нет, есть готовое дело на двоих.",
            "После let's глагол стоит без окончания: bake, mix, go, watch.",
          ],
        },
        {
          id: "vopros-ili-korotko",
          kind: "table",
          caption: "Тот же зов двумя способами",
          zvuchat: [
            "Shall we bake a pizza?",
            "Let's bake a pizza.",
            "Shall we watch a film?",
            "Let's watch a film.",
          ],
          head: ["Вопросом", "Коротко"],
          rows: [
            ["Shall we bake a pizza?", "Let's bake a pizza."],
            ["Shall we watch a film?", "Let's watch a film."],
          ],
        },
        {
          id: "chem-otlichayutsya",
          kind: "explain",
          text: [
            "Вопрос спрашивает согласия, и собеседнику остаётся согласиться или отказать.",
            "Короткая строка зовёт сразу, будто дело уже решено на двоих.",
            "Годятся обе, и обеим отвечают одинаково — об ответах следующий урок.",
            "Вопросительный знак в конце короткой строки не ставят: спрашивать в ней не о чем.",
            "Обычно там точка, а когда зовут с жаром — восклицательный знак: Let's go!",
          ],
        },
        {
          id: "gotovim-vmeste",
          kind: "example",
          caption: "Вечер у плиты",
          razgovor: true,
          zvuchat: [
            "Let's bake a pizza.",
            "We don't have a recipe.",
            "Let's mix eggs and cheese then.",
            "An omelette with mushrooms?",
            "Yes.",
          ],
          text:
            "Let's bake a pizza.\nWe don't have a recipe.\nLet's mix eggs and cheese then.\nAn omelette with mushrooms?\nYes.",
          perevod: {
            "Let's bake a pizza.": "Давай испечём пиццу.",
            "We don't have a recipe.": "У нас нет рецепта.",
            "Let's mix eggs and cheese then.":
              "Тогда давай смешаем яйца и сыр.",
            "An omelette with mushrooms?": "Омлет с грибами?",
            "Yes.": "Да.",
          },
          explain:
            "Первый зов не прошёл — рецепта нет, — и тогда зовут иначе. Слово then " +
            "значит «тогда» и связывает второй зов с помехой.",
        },
        {
          id: "lets-bez-okonchaniya",
          kind: "note",
          tone: "mistake",
          text:
            "«Let's baking a pizza» и «Let's to bake a pizza» — так не говорят.\n\nПосле " +
            "let's глагол стоит как есть: Let's bake a pizza.",
        },
        {
          id: "slovar-kuhni",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bake", translation: "печь", example: "Let's bake a pizza.", hint: "/beɪk/" },
            { term: "pizza", translation: "пицца", example: "Let's bake a pizza.", hint: "/ˈpiːtsə/" },
            { term: "recipe", translation: "рецепт", example: "We don't have a recipe.", hint: "/ˈresɪpi/" },
            { term: "mix", translation: "смешивать", example: "Let's mix eggs and cheese.", hint: "/mɪks/" },
            { term: "omelette", translation: "омлет", example: "An omelette with mushrooms?", hint: "/ˈɒmlət/" },
            { term: "mushroom", translation: "гриб", example: "An omelette with mushrooms?", hint: "/ˈmʌʃruːm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-glagol-posle-lets",
          kind: "gap",
          prompt: "Вы собираетесь испечь пиццу. Допиши недостающее слово.",
          before: "Let's ",
          after: " a pizza.",
          answer: "bake",
          hint: "Печь по-английски одно короткое слово, и окончаний оно здесь не берёт.",
          why: "Let's bake a pizza. После let's глагол стоит без окончания.",
        },
        {
          id: "z2-vybrat-vernuyu-korotkuyu",
          kind: "choice",
          prompt: "Вы решили смешать яйца и сыр. Какая запись верна?",
          options: [
            { text: "Let's mixing eggs and cheese." },
            { text: "Let's mix eggs and cheese.", correct: true },
            { text: "Let's to mix eggs and cheese." },
          ],
          hint: "Проверь окончание глагола после let's.",
          why:
            "Let's mix eggs and cheese. Ни -ing, ни -s после let's не бывает: глагол " +
            "стоит как есть.",
        },
        {
          id: "z3-perepisat-vopros-korotko",
          kind: "short",
          prompt:
            "Строку Shall we watch a film? скажи короче, начав со слова Let's.",
          answer: "Let's watch a film.",
          accept: ["Let's watch a film", "Lets watch a film"],
          hint: "Слово we уходит внутрь let's, а глагол остаётся прежним.",
          why:
            "Let's watch a film. Короткая строка не спрашивает согласия, поэтому в " +
            "конце точка.",
        },
        {
          id: "z4-otmetit-korotkie-zovy",
          kind: "hottext",
          prompt: "Отметь строки, где глагол после let's записан верно.",
          parts: [
            { text: "Let's bake a pizza", selectable: true, correct: true },
            { text: " · " },
            { text: "Let's to mix the eggs", selectable: true },
            { text: " · " },
            { text: "Let's go to the square", selectable: true, correct: true },
            { text: " · " },
            { text: "Let's baking an omelette", selectable: true },
          ],
          hint: "Ищи глагол без окончаний.",
          why:
            "Верны Let's bake a pizza и Let's go to the square. В остальных к глаголу " +
            "приросло окончание, а после let's его не бывает.",
        },
        {
          id: "z5-sobrat-omlet",
          kind: "order",
          prompt: "Собери строку: давай сделаем омлет с грибами.",
          items: ["with mushrooms.", "an omelette", "make", "Let's"],
          answer: [3, 2, 1, 0],
          hint: "Сначала let's, потом глагол, потом само блюдо и добавка к нему.",
          why:
            "Let's make an omelette with mushrooms. Слово with присоединяет добавку и " +
            "стоит после блюда.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pochemu-by-ne",
      title: "Почему бы не: Why don't we meet at the square?",
      estimatedMinutes: 14,
      outcome: "звать вопросом: Why don't we meet at the square?",

      blocks: [
        {
          id: "zachem-pochemu-by-ne",
          kind: "explain",
          text: [
            "Дана и её гостья не решили, где встретиться, и разговор идёт по кругу.",
            "Дана говорит Why don't we meet at the square?",
            "По-русски это «а почему бы нам не встретиться на площади».",
            "Строка выглядит отрицанием, а зовёт вместе — как и два прошлых способа.",
          ],
        },
        {
          id: "tri-sposoba-pozvat",
          kind: "table",
          caption: "Три способа позвать на одно и то же",
          zvuchat: [
            "Shall we meet at the square?",
            "Let's meet at the square.",
            "Why don't we meet at the square?",
          ],
          head: ["Способ", "Запись"],
          rows: [
            ["вопросом", "Shall we meet at the square?"],
            ["коротко", "Let's meet at the square."],
            ["через «почему бы не»", "Why don't we meet at the square?"],
          ],
        },
        {
          id: "kak-sobrana-stroka",
          kind: "explain",
          text: [
            "Строку собирают из трёх частей: why, потом don't we, потом глагол.",
            "Глагол и здесь стоит без окончания: meet, go, bake, invite.",
            "Ответить на неё можно так же, как на любое приглашение, и об этом следующий урок.",
          ],
        },
        {
          id: "vybor-mesta",
          kind: "example",
          caption: "Где встретиться с гостьей",
          razgovor: true,
          zvuchat: [
            "Why don't we meet at the station?",
            "It's noisy there.",
            "Why don't we meet at the square?",
            "Perfect.",
            "And supper?",
            "Let's cook at home.",
          ],
          text:
            "Why don't we meet at the station?\nIt's noisy there.\nWhy don't we meet at the square?\nPerfect.\nAnd supper?\nLet's cook at home.",
          perevod: {
            "Why don't we meet at the station?":
              "А почему бы не встретиться на вокзале?",
            "It's noisy there.": "Там шумно.",
            "Why don't we meet at the square?":
              "А почему бы не встретиться на площади?",
            "Perfect.": "Отлично.",
            "And supper?": "А ужин?",
            "Let's cook at home.": "Давай приготовим дома.",
          },
          explain:
            "Первое место не подошло, и тогда зовут в другое. Последний зов сказан " +
            "коротко — способ выбирают по ходу разговора.",
        },
        {
          id: "slovar-vstrechi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            
            { term: "strawberry", translation: "клубника", example: "Let's buy strawberries for supper.", hint: "/ˈstrɔːbəri/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dont-we",
          kind: "gap",
          prompt: "Ты зовёшь встретиться на площади. Допиши недостающие слова.",
          before: "Why ",
          after: " meet at the square?",
          answer: "don't we",
          hint: "После why идут два слова, и второе из них — «мы».",
          why:
            "Why don't we meet at the square? Часть don't we стоит между why и " +
            "глаголом.",
        },
        {
          id: "z2-vybrat-glagol-bez-okonchaniya",
          kind: "choice",
          prompt: "Ты зовёшь позвать гостя на ужин. Какая запись верна?",
          options: [
            { text: "Why don't we invites the guest to supper?" },
            { text: "Why don't we invite the guest to supper?", correct: true },
            { text: "Why don't we inviting the guest to supper?" },
          ],
          hint: "Проверь окончание глагола после don't we.",
          why:
            "Why don't we invite the guest to supper? После don't we глагол стоит без " +
            "окончания.",
        },
        {
          id: "z3-sobrat-pochemu-by-ne",
          kind: "order",
          prompt: "Собери строку: почему бы нам не купить клубники.",
          items: ["strawberries?", "buy", "don't we", "Why"],
          answer: [3, 2, 1, 0],
          hint: "Сначала why, потом don't we, потом глагол и само дело.",
          why:
            "Why don't we buy strawberries? Глагол стоит третьим, а то, что покупают, " +
            "— в конце.",
        },
        {
          id: "z4-otmetit-zovy-vmeste",
          kind: "hottext",
          prompt: "Отметь строки, которыми зовут вместе.",
          parts: [
            { text: "Why don't we meet at the square?", selectable: true, correct: true },
            { text: " · " },
            { text: "Why don't you like supper?", selectable: true },
            { text: " · " },
            { text: "Let's invite the guest", selectable: true, correct: true },
            { text: " · " },
            { text: "Shall I pull the door?", selectable: true },
          ],
          hint: "Вместе зовут там, где дело делают оба.",
          why:
            "Вместе зовут Why don't we meet at the square? и Let's invite the guest. " +
            "Вторая строка спрашивает о чужом вкусе, а четвёртая берётся сделать дело " +
            "в одиночку.",
        },
        {
          id: "z5-napisat-pochemu-by-ne",
          kind: "short",
          prompt:
            "Прежние затеи не подошли. Позови приготовить ужин дома, начав со слова Why.",
          answer: "Why don't we cook supper at home?",
          accept: [
            "Why don't we cook supper at home",
            "Why don't we make supper at home?",
            "Why don't we have supper at home?",
          ],
          hint: "Ужин по-английски supper, а дома — at home.",
          why:
            "Why don't we cook supper at home? Глагол стоит после don't we, а место — " +
            "в конце строки.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "otvet-na-zov",
      title: "Согласиться и отказаться",
      estimatedMinutes: 15,
      outcome: "отвечать на зов: согласиться, отказать или отложить",

      blocks: [
        {
          id: "zachem-otvechat",
          kind: "explain",
          text: [
            "Данияра зовут в гольф в субботу, а в субботу он работает.",
            "Он отвечает Sorry, I can't. I work on Saturday.",
            "Позвать — половина разговора, и без ответа он обрывается.",
            "Ответить можно тремя способами: согласиться, отказать или отложить.",
            "Слово sorry значит «извини», а can't — «не могу»: Sorry, I can't.",
          ],
        },
        {
          id: "chem-otvechayut",
          kind: "table",
          caption: "Чем отвечают на приглашение",
          zvuchat: [
            "Good idea.",
            "Certainly.",
            "Alright.",
            "Sorry, I can't.",
            "Perhaps later.",
          ],
          head: ["Ответ", "Что он делает"],
          rows: [
            ["Good idea.", "соглашается"],
            ["Certainly.", "соглашается"],
            ["Alright.", "соглашается"],
            ["Sorry, I can't.", "отказывает"],
            ["Perhaps later.", "откладывает"],
          ],
        },
        {
          id: "otkaz-s-prichinoy",
          kind: "explain",
          text: [
            "Три согласия из таблицы делают одно дело, и разница между ними невелика.",
            "А вот у отказа есть вторая половина — причина, и она важнее выбора слов.",
            "Причину говорят отдельной строкой и обычным настоящим временем: I work on Saturday.",
            "С причиной разговор идёт дальше: собеседник знает, когда звать снова.",
            "Ответ Perhaps later дела не закрывает — слово perhaps значит «может быть».",
          ],
        },
        {
          id: "otvet-na-pomoshch",
          kind: "note",
          tone: "info",
          text:
            "У предложенной помощи есть свои две строки: Yes, please — принять, No, " +
            "thanks — отказаться.\n\nShall I serve the tea? — Yes, please.",
        },
        {
          id: "subbota-troih",
          kind: "example",
          caption: "Суббота втроём",
          razgovor: true,
          zvuchat: [
            "Shall we play golf?",
            "Sorry, I can't. I work on Saturday.",
            "Why don't we meet on Sunday?",
            "Good idea.",
            "Let's go sailing then.",
            "Certainly, the lake is relaxing.",
          ],
          text:
            "Shall we play golf?\nSorry, I can't. I work on Saturday.\nWhy don't we meet on Sunday?\nGood idea.\nLet's go sailing then.\nCertainly, the lake is relaxing.",
          perevod: {
            "Shall we play golf?": "Давай сыграем в гольф?",
            "Sorry, I can't. I work on Saturday.":
              "Извини, не могу. В субботу я работаю.",
            "Why don't we meet on Sunday?":
              "А почему бы не встретиться в воскресенье?",
            "Good idea.": "Хорошая мысль.",
            "Let's go sailing then.": "Тогда давай покатаемся на лодке под парусом.",
            "Certainly, the lake is relaxing.":
              "Конечно, на озере спокойно.",
          },
          explain:
            "Отказ идёт с причиной, и разговор не обрывается: собеседник зовёт на " +
            "другой день. Дальше согласие звучит дважды и разными словами.",
        },
        {
          id: "slovar-otveta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sorry", translation: "извини", example: "Sorry, I can't. I work on Saturday.", hint: "/ˈsɒri/" },
            { term: "can't", translation: "не могу", example: "Sorry, I can't.", hint: "/kɑːnt/" },
            { term: "certainly", translation: "конечно", example: "Certainly, the lake is relaxing.", hint: "/ˈsɜːtnli/" },
            { term: "alright", translation: "ладно, хорошо", example: "Alright, let's meet at the square.", hint: "/ɔːlˈraɪt/" },
            { term: "perhaps", translation: "может быть", example: "Perhaps later.", hint: "/pəˈhæps/" },
            { term: "relaxing", translation: "спокойный, дающий отдых", example: "The lake is relaxing.", hint: "/rɪˈlæksɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-otvet-na-pomoshch",
          kind: "choice",
          prompt:
            "Тебе предложили: Shall I serve the tea? Ты хочешь, чтобы чай подали. Что ответить?",
          options: [
            { text: "No, thanks." },
            { text: "Yes, please.", correct: true },
            { text: "Perhaps later." },
          ],
          hint: "Чай нужен сейчас, и помощь ты принимаешь.",
          why:
            "Yes, please. Так принимают предложенную помощь. Первый ответ от неё " +
            "отказывается, а третий переносит дело на потом.",
        },
        {
          id: "z2-dopisat-prichinu",
          kind: "gap",
          prompt:
            "Тебя зовут в гольф в субботу, но в субботу ты работаешь. Допиши недостающее слово отказа.",
          before: "Sorry, I ",
          after: ". I work on Saturday.",
          answer: "can't",
          hint: "Одно короткое слово говорит, что дело не выйдет.",
          why:
            "Sorry, I can't. I work on Saturday. Причина идёт следующей строкой, и от " +
            "неё отказ перестаёт звучать резко.",
        },
        {
          id: "z3-sootnesti-otvet-i-smysl",
          kind: "match",
          prompt: "Соедини ответ и то, что он значит.",
          left: ["Certainly.", "Perhaps later.", "Sorry, I can't."],
          right: ["отказ", "согласие без раздумий", "не сейчас"],
          answer: [1, 2, 0],
          hint: "Одно из трёх оставляет дело открытым, а не закрывает его.",
          why:
            "Certainly соглашается сразу, Perhaps later откладывает, Sorry, I can't " +
            "закрывает дело.",
        },
        {
          id: "z4-otmetit-soglasie",
          kind: "hottext",
          prompt: "Отметь ответы, которыми соглашаются.",
          parts: [
            { text: "Good idea.", selectable: true, correct: true },
            { text: " · " },
            { text: "Sorry, I can't.", selectable: true },
            { text: " · " },
            { text: "Alright.", selectable: true, correct: true },
            { text: " · " },
            { text: "Perhaps later.", selectable: true },
          ],
          hint: "Согласие закрывает дело в пользу зова, а не откладывает его.",
          why:
            "Соглашаются Good idea и Alright. Sorry, I can't отказывает, а Perhaps " +
            "later переносит дело на потом.",
        },
        {
          id: "z5-otkazat-s-prichinoy",
          kind: "short",
          prompt:
            "Тебя зовут кататься на коньках в воскресенье. Откажись и назови причину — в воскресенье приезжает гость. Напиши обе строки.",
          answer: "Sorry, I can't. Our guest arrives on Sunday.",
          accept: [
            "Sorry, I can't. The guest arrives on Sunday.",
            "Sorry, I can't. My guest arrives on Sunday.",
            "Sorry, I can't. Our guest arrives on Sunday",
            "Sorry, I can't. Our guest comes on Sunday.",
            "Sorry, I can't. Our guest comes on Sunday",
            "Sorry, I can't. My guest comes on Sunday.",
            "Sorry, I can't. The guest comes on Sunday.",
          ],
          hint: "Сначала короткий отказ, потом причина обычным настоящим временем.",
          why:
            "Sorry, I can't. Our guest arrives on Sunday. Причина стоит отдельной " +
            "строкой, и у глагола третьего лица окончание -s.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-priglashenie",
      title: "Читаем приглашение",
      estimatedMinutes: 13,
      outcome: "находить в сообщении, куда и во сколько зовут",

      blocks: [
        {
          id: "zachem-chitat-priglashenie",
          kind: "explain",
          text: [
            "Данияр получил от Алима сообщение и читает его на ходу.",
            "В таком тексте ищут три вещи: куда зовут, во сколько и что взять с собой.",
            "Ниже это сообщение, и вопросы будут о них.",
          ],
        },
        {
          id: "soobshchenie-ot-alima",
          kind: "text",
          title: "Сообщение от Алима",
          genre: "message",
          body: [
            "Hi! Shall we meet at the square on Saturday? The weather is warm, and the park near it is quiet and relaxing.",
            "Why don't we take something for supper? Let's bake a pizza at my place after the walk.",
            "I have the recipe, but I don't have cheese. Shall I buy it in the morning?",
            "Bring lemonade and a melon if you can. My sister makes a dessert with honey, and it is very sweet.",
            "We start at four. Perhaps Dana will come too — she skates at the square every Saturday.",
          ],
          glossary: [
            { term: "at my place", translation: "у меня дома" },
            { term: "if you can", translation: "если сможешь" },
            { term: "will come too", translation: "тоже придёт" },
          ],
        },
        {
          id: "gde-iskat-v-priglashenii",
          kind: "note",
          tone: "info",
          text:
            "Место и час ищут после слова at: первое at называет место, второе — " +
            "время.\n\nПросьбу принести ищут после слова bring. Остальное в " +
            "сообщении можно прочитать быстро.",
        },
        {
          id: "slovar-priglasheniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "lemonade", translation: "лимонад", example: "Bring lemonade and a melon.", hint: "/ˌleməˈneɪd/" },
            { term: "dessert", translation: "сладкое блюдо", example: "My sister makes a dessert with honey.", hint: "/dɪˈzɜːt/" },
            { term: "honey", translation: "мёд", example: "My sister makes a dessert with honey.", hint: "/ˈhʌni/" },
            { term: "melon", translation: "дыня", example: "Bring lemonade and a melon.", hint: "/ˈmelən/" },
            { term: "sweet", translation: "сладкий", example: "The dessert with honey is very sweet.", hint: "/swiːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-gde-vstrecha",
          about: "soobshchenie-ot-alima",
          kind: "choice",
          prompt: "Где Алим зовёт встретиться?",
          options: [
            { text: "At the square.", correct: true },
            { text: "At his place." },
            { text: "In the park near the station." },
          ],
          hint: "Место встречи стоит в самом первом зове сообщения.",
          why:
            "At the square. Дома пекут пиццу после прогулки, а парк только назван " +
            "рядом с площадью.",
        },
        {
          id: "z2-vo-skolko",
          about: "soobshchenie-ot-alima",
          kind: "short",
          prompt: "Во сколько они начинают? Ответь одним словом или числом.",
          answer: "four",
          accept: ["4", "at four", "Four"],
          hint: "Час назван в последней части сообщения.",
          why: "We start at four. Час стоит после слова at.",
        },
        {
          id: "z3-chto-prinesti",
          about: "soobshchenie-ot-alima",
          kind: "hottext",
          prompt: "Отметь то, что Данияра просят принести.",
          parts: [
            { text: "lemonade", selectable: true, correct: true },
            { text: " · " },
            { text: "cheese", selectable: true },
            { text: " · " },
            { text: "a melon", selectable: true, correct: true },
            { text: " · " },
            { text: "a recipe", selectable: true },
          ],
          hint: "Просьба принести стоит после слова bring.",
          why:
            "Принести просят lemonade и a melon. Сыр Алим берётся купить сам, а " +
            "рецепт у него уже есть.",
        },
        {
          id: "z4-kto-chto-delaet",
          about: "soobshchenie-ot-alima",
          kind: "match",
          prompt: "Соедини человека и его дело по сообщению.",
          left: ["Алим", "сестра Алима", "Дана"],
          right: [
            "делает сладкое с мёдом",
            "катается на площади по субботам",
            "покупает сыр утром",
          ],
          answer: [2, 0, 1],
          hint: "Каждое дело названо в сообщении отдельной строкой.",
          why:
            "Алим берётся купить сыр, его сестра делает сладкое с мёдом, а Дана " +
            "катается на площади каждую субботу.",
        },
        {
          id: "z5-nazvat-blyudo",
          about: "soobshchenie-ot-alima",
          kind: "short",
          prompt:
            "Что Алим зовёт испечь у себя дома? Ответь одним словом по-английски.",
          answer: "pizza",
          accept: ["a pizza", "Pizza"],
          hint: "Блюдо названо там, где сказано про место после прогулки.",
          why: "Let's bake a pizza at my place. Печь зовут именно пиццу.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-vstreche",
      title: "Слушаем разговор о субботе",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, куда позвали и о чём условились",

      blocks: [
        {
          id: "zachem-slushat-razgovor",
          kind: "explain",
          text: [
            "В разговоре зовут не один раз: первую затею отклоняют, вторую принимают.",
            "Слушать надо три вещи: куда позвали сперва, почему отказали и на чём сошлись.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-razgovora",
          kind: "audio",
          caption: "Разговор о субботе",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Shall we play golf on Saturday? — Sorry, I can't. My guest arrives at " +
            "noon. — Why don't we meet on Sunday then? — Good idea. Shall I bring a " +
            "melon? — Bring grapes, please. And a pear for Dana. — Alright. Let's " +
            "meet at the square at three.",
        },
        {
          id: "chto-slushat-v-razgovore",
          kind: "note",
          tone: "info",
          text:
            "Слушай, в какой день зовут сперва, что помешало, какой день выбрали и " +
            "что просят принести.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-fruktov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "grape", translation: "виноградина", example: "Bring grapes, please.", hint: "/greɪp/" },
            { term: "pear", translation: "груша", example: "And a pear for Dana.", hint: "/peə/" },
            { term: "noon", translation: "полдень (второе имя, рядом с midday)", example: "My guest arrives at noon.", hint: "/nuːn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoy-den-vybrali",
          about: "zapis-razgovora",
          kind: "short",
          prompt: "В какой день они условились встретиться? Ответь одним словом.",
          answer: "Sunday",
          accept: ["sunday", "on Sunday"],
          hint: "Первый день не подошёл, и назвали другой.",
          why:
            "Why don't we meet on Sunday then? — Good idea. В субботу приезжает " +
            "гость, поэтому выбрали воскресенье.",
        },
        {
          id: "z2-chto-pomeshalo",
          about: "zapis-razgovora",
          kind: "choice",
          prompt: "Почему суббота не подошла?",
          options: [
            { text: "Приезжает гость.", correct: true },
            { text: "Нет ракетки." },
            { text: "На площади шумно." },
          ],
          hint: "Причина названа сразу после короткого отказа.",
          why:
            "My guest arrives at noon. Причина стоит рядом с отказом, и она о " +
            "приезде гостя.",
        },
        {
          id: "z3-chto-prosyat-prinesti",
          about: "zapis-razgovora",
          kind: "hottext",
          prompt: "Отметь то, что просят принести.",
          parts: [
            { text: "grapes", selectable: true, correct: true },
            { text: " · " },
            { text: "a melon", selectable: true },
            { text: " · " },
            { text: "a pear", selectable: true, correct: true },
            { text: " · " },
            { text: "lemonade", selectable: true },
          ],
          hint: "Дыню предложили, но попросили другое.",
          why:
            "Просят grapes и a pear. Дыню собеседник предложил сам, и ему ответили " +
            "иначе.",
        },
        {
          id: "z4-vo-skolko-vstrecha",
          about: "zapis-razgovora",
          kind: "short",
          prompt: "Во сколько они встречаются? Ответь числом.",
          answer: "three",
          accept: ["3", "at three", "Three"],
          hint: "Час назван в самой последней строке разговора.",
          why: "Let's meet at the square at three. Час стоит в конце разговора.",
        },
        {
          id: "z5-skazat-vsluh",
          kind: "speak",
          prompt:
            "Скажи вслух: позови встретиться на площади в три и предложи принести грушу.",
          phrase: "Let's meet at the square at three. Shall I bring a pear?",
          translation: "Давай встретимся на площади в три. Мне принести грушу?",
          hint: "Сначала позови вместе, потом предложи помощь.",
          why:
            "Let's meet at the square at three. Shall I bring a pear? Первая строка " +
            "зовёт обоих, вторая берётся сделать дело в одиночку.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-priglashenie",
      title: "Пишем приглашение",
      estimatedMinutes: 15,
      outcome: "проверять приглашение: названы место, час и дело",

      blocks: [
        {
          id: "zachem-proveryat-priglashenie",
          kind: "explain",
          text: [
            "Дана написала приглашение и просит проверить его перед отправкой.",
            "В приглашении забывают не слова, а сведения: то место, то час.",
            "Проверить можно так: найди в тексте место, час и само дело.",
            "Чего не нашёл — того читатель не узнает и будет переспрашивать.",
          ],
        },
        {
          id: "chego-ne-hvataet",
          kind: "table",
          caption: "Что должно быть в приглашении",
          zvuchat: [
            "Let's meet at the square at four.",
            "Shall we bake a pizza?",
            "Let's meet on Saturday.",
          ],
          head: ["Строка", "Чего в ней нет", "Годится"],
          rows: [
            ["Let's meet at the square at four.", "всё названо", "да"],
            ["Shall we bake a pizza?", "нет места и часа", "нет"],
            ["Let's meet on Saturday.", "нет места и часа", "нет"],
          ],
        },
        {
          id: "pochemu-tri-svedeniya",
          kind: "explain",
          text: [
            "Место отвечает на вопрос «куда идти», час — «во сколько там быть».",
            "Дело отвечает на вопрос «что взять с собой»: на коньки нужны коньки, на кухню — продукты.",
            "Без любого из трёх приглашение придётся дописывать вторым сообщением.",
          ],
        },
        {
          id: "obrazets-priglasheniya",
          kind: "example",
          caption: "Приглашение Даны",
          zvuchat: [
            "Hi! Why don't we play golf at the club at ten on Saturday?",
            "Let's take the early bus — the road is long.",
            "Bring your racket if you have one. The club is expensive, but the golf is good.",
            "Shall I book the seats today?",
          ],
          text:
            "Hi! Why don't we play golf at the club at ten on Saturday?\nLet's take the early bus — the road is long.\nBring your racket if you have one. The club is expensive, but the golf is good.\nShall I book the seats today?",
          perevod: {
            "Hi! Why don't we play golf at the club at ten on Saturday?":
              "Привет! А почему бы не сыграть в гольф в клубе в субботу в десять?",
            "Let's take the early bus — the road is long.":
              "Давай поедем ранним автобусом: дорога долгая.",
            "Bring your racket if you have one. The club is expensive, but the golf is good.":
              "Возьми ракетку, если есть. Клуб дорогой, зато гольф хороший.",
            "Shall I book the seats today?": "Давай я забронирую места сегодня?",
          },
          explain:
            "Место, час и день стоят в первой же строке. Дальше названо дело, потом " +
            "просьба принести, и в конце — предложенная помощь.",
        },
        {
          id: "slovar-pisma",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "club", translation: "клуб", example: "The club is expensive, but the golf is good.", hint: "/klʌb/" },
            { term: "road", translation: "дорога", example: "Let's take the early bus — the road is long.", hint: "/rəʊd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet",
          kind: "choice",
          prompt:
            "В приглашении стоит одна строка: Why don't we play golf at ten? Чего в ней не хватает?",
          options: [
            { text: "Часа." },
            { text: "Места.", correct: true },
            { text: "Дела." },
          ],
          hint: "Проверь по трём сведениям и назови то единственное, которого нет.",
          why:
            "Не хватает места. Час назван словами at ten, дело — словами play golf, " +
            "а вот куда идти, читатель не узнает.",
        },
        {
          id: "z2-dopisat-chas",
          kind: "gap",
          prompt:
            "Допиши час к строке приглашения: встреча на площади в четыре.",
          before: "Let's meet at the square ",
          after: ".",
          answer: "at four",
          hint: "Час присоединяют тем же словом, что и место.",
          why:
            "Let's meet at the square at four. Час стоит после места и с тем же " +
            "словом at.",
        },
        {
          id: "z3-otmetit-polnye-stroki",
          kind: "hottext",
          prompt: "Отметь строки, где названы и место, и час.",
          parts: [
            { text: "Let's take the early bus to the club at nine", selectable: true, correct: true },
            { text: " · " },
            { text: "Shall we go sailing on Saturday?", selectable: true },
            { text: " · " },
            { text: "Why don't we meet at the station at six?", selectable: true, correct: true },
            { text: " · " },
            { text: "Let's cook supper at my place", selectable: true },
          ],
          hint: "Смотри, есть ли в строке и место, и число часа.",
          why:
            "Полны первая и третья строки. Во второй назван только день, а в " +
            "четвёртой — только место.",
        },
        {
          id: "z4-ispravit-priglashenie",
          kind: "short",
          prompt:
            "Строку Shall we skate? допиши так, чтобы в ней были место и час: площадь, три часа.",
          answer: "Shall we skate at the square at three?",
          accept: ["Shall we skate at the square at three"],
          hint: "Сначала место, потом час, и оба со словом at.",
          why:
            "Shall we skate at the square at three? Место и час прибавляются в конец " +
            "и оба со словом at.",
        },
        {
          id: "z5-napisat-priglashenie",
          kind: "essay",
          prompt:
            "Напиши приглашение четырьмя строками. Позови вместе с местом и часом, назови дело, попроси что-нибудь принести и предложи свою помощь.",
          minWords: 15,
          sample:
            "Hi! Shall we meet at the square at four on Sunday?\nLet's skate for an hour, and then bake a pizza at my place.\nBring grapes and a pear if you can.\nShall I buy lemonade in the morning?",
          checklist: [
            "названы место и час",
            "названо само дело",
            "есть просьба принести",
            "есть строка со своей помощью — она начинается со Shall I",
          ],
          hint: "Бери способы, которые знаешь: Shall we, Let's, Why don't we, Shall I.",
          why:
            "Приглашение полно, когда читателю не нужно переспрашивать: он знает " +
            "место, час, дело и то, что от него ждут.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, отличить два случая по смыслу, собрать
      // ответ по чужой реплике, прочитать чужое приглашение.

      // ---- итог 1 ----
      {
        id: "q-ispravit-to-posle-i",
        kind: "short",
        outcome: "предлагать помощь: Shall I carry your bag?",
        prompt:
          "Ученик написал: Shall I to cut the bread? Запиши строку без ошибки.",
        answer: "Shall I cut the bread?",
        accept: ["Shall I cut the bread"],
        hint: "Одно слово в строке лишнее.",
        why: "Shall I cut the bread? Слово to между I и глаголом не ставят.",
      },
      {
        id: "q-nazvat-kto-delaet",
        kind: "choice",
        outcome: "предлагать помощь: Shall I carry your bag?",
        prompt:
          "Строка Shall I call a taxi? Кто, по ней, будет вызывать такси?",
        options: [
          { text: "Оба." },
          { text: "Тот, кто говорит.", correct: true },
          { text: "Тот, к кому обращаются." },
        ],
        hint: "Смотри на слово после shall.",
        why:
          "Тот, кто говорит. Слово I называет одного человека — самого " +
          "говорящего.",
      },
      {
        id: "q-pochemu-stroka-ne-goditsya",
        kind: "choice",
        outcome: "предлагать помощь: Shall I carry your bag?",
        prompt:
          "Ученик хотел взяться подать чай и написал: I serve the tea? Почему так не годится?",
        options: [
          { text: "Глагол взят не тот." },
          { text: "Строка не стала вопросом: перед I нет слова shall.", correct: true },
          { text: "Чай нельзя подать одному." },
        ],
        hint: "Сравни со строкой из урока: чего в записи ученика недостаёт в начале.",
        why:
          "Строка не стала вопросом. Взяться сделать дело можно только вопросом, а " +
          "вопрос открывает слово shall: Shall I serve the tea?",
      },

      // ---- итог 2 ----
      {
        id: "q-otlichit-i-ot-we",
        kind: "choice",
        outcome: "звать вместе: Shall we play golf on Saturday?",
        prompt:
          "Ты хочешь сказать, что в гольф играете вы вдвоём. Какая запись это значит?",
        options: [
          { text: "Shall I play golf?" },
          { text: "Shall I play golf with you?" },
          { text: "Shall we play golf?", correct: true },
        ],
        hint: "Различие между строками — в одном слове после shall.",
        why:
          "Shall we play golf? Слово we значит говорящего и собеседника разом.",
      },
      {
        id: "q-pochemu-net-okonchaniya",
        kind: "choice",
        outcome: "звать вместе: Shall we play golf on Saturday?",
        prompt:
          "Почему в строке Shall we go sailing? у глагола go нет окончания?",
        options: [
          { text: "После shall глагол стоит без окончания.", correct: true },
          { text: "Потому что речь о будущем." },
          { text: "Потому что go — особый глагол." },
        ],
        hint: "Проверь на другом глаголе: Shall we meet? Shall we bake?",
        why:
          "После shall глагол стоит без окончания. Это верно и для meet, и для " +
          "bake, и для любого другого.",
      },
      {
        id: "q-sobrat-zov-na-ploshchad",
        kind: "order",
        outcome: "звать вместе: Shall we play golf on Saturday?",
        prompt: "Собери зов: поиграть в теннис в клубе в десять.",
        items: ["at ten?", "at the club", "tennis", "play", "we", "Shall"],
        answer: [5, 4, 3, 2, 1, 0],
        hint: "Место идёт перед часом.",
        why:
          "Shall we play tennis at the club at ten? Место стоит после дела, а час " +
          "закрывает строку.",
      },

      // ---- итог 3 ----
      {
        id: "q-ispravit-lets",
        kind: "short",
        outcome: "звать коротко: Let's bake a pizza",
        prompt:
          "Ученик написал: Let's to make an omelette. Запиши строку без ошибки.",
        answer: "Let's make an omelette.",
        accept: ["Let's make an omelette", "Lets make an omelette"],
        hint: "Одно слово в строке лишнее, и стоит оно перед глаголом.",
        why:
          "Let's make an omelette. Слово to сюда переносят из других оборотов, а " +
          "после let's глагол стоит как есть.",
      },
      {
        id: "q-tochka-ili-vopros",
        kind: "choice",
        outcome: "звать коротко: Let's bake a pizza",
        prompt:
          "Какой знак не годится в конце строки Let's mix eggs and cheese?",
        options: [
          { text: "Точка." },
          { text: "Восклицательный знак." },
          { text: "Вопросительный знак.", correct: true },
          { text: "Годятся все три." },
        ],
        hint: "Спроси себя, о чём эта строка спрашивает собеседника.",
        why:
          "Вопросительный знак. Строка ни о чём не спрашивает: дело названо сразу " +
          "на двоих. Точка годится, а восклицательный знак ставят, когда зовут с " +
          "жаром — Let's go!",
      },

      // ---- итог 4 ----
      {
        id: "q-sobrat-pochemu-by-ne-supper",
        kind: "order",
        outcome: "звать вопросом: Why don't we meet at the square?",
        prompt: "Собери зов: почему бы нам не сесть на ранний автобус.",
        items: ["the early bus?", "take", "don't we", "Why"],
        answer: [3, 2, 1, 0],
        hint: "Между вопросительным словом и глаголом стоят ещё два слова.",
        why:
          "Why don't we take the early bus? Собрано верно, если глагол оказался " +
          "третьим, а само дело закрыло строку.",
      },
      {
        id: "q-otlichit-zov-ot-voprosa-o-vkuse",
        kind: "choice",
        outcome: "звать вопросом: Why don't we meet at the square?",
        prompt:
          "Ученик хотел позвать вместе и написал: Why don't they take the bus? Что в строке не так?",
        options: [
          { text: "Слово they говорит о других людях, а не о говорящем с собеседником.", correct: true },
          { text: "После don't глагол стоит с окончанием." },
          { text: "Слово why здесь лишнее." },
        ],
        hint: "Спроси, кто по этой строке садится в автобус.",
        why:
          "Слово they говорит о других людях. Позвать вместе можно только через " +
          "we: Why don't we take the bus?",
      },

      // ---- итог 5 ----
      {
        id: "q-otvet-na-pomoshch-ili-zov",
        kind: "choice",
        outcome: "отвечать на зов: согласиться, отказать или отложить",
        prompt:
          "На зов «Shall we bake a pizza?» отвечают «Sorry, I can't. I work on Saturday.» Чего в этом ответе не хватает по правилу урока?",
        options: [
          { text: "Ничего: отказ полон" },
          { text: "Слова please" },
          { text: "Причина названа, но не сказано, когда получится", correct: true },
        ],
        why:
          "Отказ назвал причину, но не отложил дело на другой день. Полный отказ " +
          "звучит так: Sorry, I can't. I work on Saturday. Shall we bake it on Sunday?",
      },
      {
        id: "q-chto-daet-prichina",
        kind: "choice",
        outcome: "отвечать на зов: согласиться, отказать или отложить",
        prompt:
          "Один ответил Sorry, I can't. Другой — Sorry, I can't. I work on Saturday. Что даёт вторая строка?",
        options: [
          { text: "Она короче первой." },
          { text: "Собеседник узнаёт, когда звать снова.", correct: true },
          { text: "Она превращает отказ в согласие." },
        ],
        hint: "Подумай, что собеседник знает после второго ответа и не знает после первого.",
        why:
          "Собеседник узнаёт, когда звать снова. Работа названа субботой, значит " +
          "воскресенье свободно, и разговор идёт дальше.",
      },
      {
        id: "q-otlozhit-delo",
        kind: "short",
        outcome: "отвечать на зов: согласиться, отказать или отложить",
        prompt:
          "Тебя зовут печь пиццу, но сейчас у тебя другое дело. Отложи затею, не отказывая, — двумя словами по-английски.",
        answer: "Perhaps later.",
        accept: ["Perhaps later", "perhaps later"],
        hint: "Первое слово значит «может быть».",
        why:
          "Perhaps later. Такой ответ не закрывает дело, а переносит его на " +
          "потом.",
      },

      // ---- итог 6 ----
      {
        id: "q-prochitat-chuzhoe-priglashenie",
        kind: "short",
        outcome: "находить в сообщении, куда и во сколько зовут",
        prompt:
          "В сообщении стоит: Shall we meet at the station at six? Bring a melon. Куда зовут? Ответь одним словом по-английски.",
        answer: "station",
        accept: ["the station", "Station", "at the station"],
        hint: "Слово at стоит в строке дважды, и место названо при первом.",
        why:
          "Station. При первом at стоит место, при втором — время. Второе at " +
          "отвечает на вопрос «во сколько», и это не всегда число: at noon значит " +
          "«в полдень».",
      },
      {
        id: "q-chto-prosyat-v-soobshchenii",
        kind: "short",
        outcome: "проверять приглашение: названы место, час и дело",
        prompt:
          "В сообщении стоит: Let's bake a pizza at four. Bring cheese and grapes. Что просят принести? Назови оба слова по-английски.",
        answer: "cheese and grapes",
        accept: ["cheese, grapes", "cheese and grapes."],
        hint: "В сообщении два дела: одно делают вместе, о втором просят.",
        why:
          "Cheese and grapes. Пиццу пекут вдвоём, а названное после bring несёт " +
          "тот, кому пишут.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-chem-soshlis",
        kind: "short",
        outcome: "слышать в разговоре, куда позвали и о чём условились",
        zvuk:
          "Shall we meet on Sunday? — Sorry, I can't. — Why don't we meet on Monday? — Good idea.",
        prompt:
          "Послушай разговор. В какой день встретятся? Ответь одним словом по-английски.",
        answer: "Monday",
        accept: ["monday", "on Monday"],
        hint: "Дней названо два, а согласие прозвучало один раз.",
        // Разбор называл Sunday при ответе Monday — след прежней редакции. Нашёл
        // kontrol: «разбор задания не упоминает верного ответа».
        why:
          "Monday. Слова Good idea стоят после второго дня, значит выбран он, а " +
          "первый день закрыт отказом.",
      },
      {
        id: "q-kuda-pozvali-sperva",
        kind: "short",
        outcome: "слышать в разговоре, куда позвали и о чём условились",
        zvuk:
          "Shall we play golf? — Sorry, I can't. — Let's go sailing then. — Certainly.",
        prompt:
          "Послушай разговор. Куда позвали первым? Ответь одним словом по-английски.",
        answer: "golf",
        accept: ["Golf", "play golf"],
        hint: "Зовов в разговоре два, и первый не прошёл.",
        why: "Golf. Первый зов закрыт отказом, и тогда позвали под парус.",
      },

      // ---- итог 8 ----
      {
        id: "q-chego-net-v-chuzhom-priglashenii",
        kind: "short",
        outcome: "проверять приглашение: названы место, час и дело",
        prompt:
          "В приглашении стоит строка: Let's bake a pizza on Sunday. Часа в ней нет. Допиши час — шесть — и запиши строку целиком.",
        answer: "Let's bake a pizza at six on Sunday.",
        accept: [
          "Let's bake a pizza at six on Sunday",
          "Let's bake a pizza on Sunday at six.",
          "Lets bake a pizza at six on Sunday.",
        ],
        hint: "Час присоединяют словом at.",
        why:
          "Let's bake a pizza at six on Sunday. Час идёт со словом at, и без него " +
          "читателю пришлось бы переспрашивать.",
      },
      {
        id: "q-dopisat-mesto-v-priglashenii",
        kind: "short",
        outcome: "проверять приглашение: названы место, час и дело",
        prompt:
          "К строке Shall we skate at five? допиши место — площадь. Запиши строку целиком.",
        answer: "Shall we skate at the square at five?",
        accept: ["Shall we skate at the square at five"],
        hint: "Место ставят перед часом.",
        why:
          "Shall we skate at the square at five? Место идёт первым, час — " +
          "следом.",
      },
      {
        id: "q-nazvat-tretye-svedenie",
        kind: "choice",
        outcome: "проверять приглашение: названы место, час и дело",
        prompt:
          "Место и час в приглашении названы. Какое третье сведение проверяют перед отправкой?",
        options: [
          { text: "Имя отправителя." },
          { text: "Погоду." },
          { text: "Само дело.", correct: true },
        ],
        hint: "Оно отвечает на вопрос, что взять с собой.",
        why:
          "Само дело. По нему читатель понимает, что брать: на коньки одно, на " +
          "кухню другое.",
      },
    ],
  },
};

export default module;
