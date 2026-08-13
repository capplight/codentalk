import type { Module } from "@/lib/content/types";

/**
 * Модуль 24 курса «Английский с нуля»: и, но, потому что.
 *
 * Программа: docs/programma-english-starter.md, модуль 24 — «соединять
 * предложения и объяснять причину»; грамматика: сочинительные союзы,
 * `because`.
 *
 * ЧЕМ ЭТОТ МОДУЛЬ ОТЛИЧАЕТСЯ ОТ ОСТАЛЬНЫХ. В нём почти нет новых форм: все
 * пять союзов — короткие слова, и ни один из них ничего не меняет в
 * предложениях, которые соединяет. Настоящая трудность здесь другая — ученик
 * двадцать три модуля говорил отдельными предложениями, и связная речь для
 * него внове.
 *
 * Поэтому уроки построены не вокруг слов, а вокруг случаев: перечислить,
 * противопоставить, дать выбор, назвать причину.
 *
 * ГЛАВНАЯ ОПАСНОСТЬ — русская запятая. По-русски «я работаю, и я учусь» пишется
 * с запятой перед «и», а по-английски запятой там нет: I work and I study.
 * Зато в перечислении запятые как раз есть. Урок 2 разводит эти два случая.
 *
 * ВТОРАЯ ОПАСНОСТЬ — `because` в начале ответа. По-русски на вопрос «почему»
 * отвечают «потому что…», и это целый ответ. По-английски `because` тоже
 * годится в ответе, но в письме источник ставит его ПОСЛЕ главного
 * предложения: «I love her because she is friendly».
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Ступень подтверждена по всем пунктам, ничего
 * сверх A1 модуль не берёт.
 *
 * 1. English Grammar Profile, CLAUSES coordinated, A1, «FORM: MAIN CLAUSE +
 *    MAIN CLAUSE» — «Can combine two main declarative clauses using
 *    co-ordinating conjunctions ('and', 'but', 'or')», пример источника: «I
 *    like my college and I like my class».
 *
 * 2. English Grammar Profile, CLAUSES coordinated, A1, «FORM: CLAUSE + CLAUSE,
 *    ELLIPTED SUBJECT» — «Can omit the subject in a second main declarative
 *    clause when the subject is obvious or the same as the first clause»,
 *    пример источника: «She likes to listen to music and watch TV». Это урок 5.
 *
 * 3. English Grammar Profile, CONJUNCTIONS coordinating, A1, «USE: LISTING» —
 *    «Can use 'and' and 'or' before the final item in a list», пример
 *    источника: «I like to eat chicken, mushrooms and some vegetables». Это
 *    урок 2, и запятые в перечислении оттуда же.
 *
 * 4. English Grammar Profile, CLAUSES subordinated, A1, «FORM/USE: 'BECAUSE',
 *    REASONS» — «Can use a finite subordinate clause with 'because', after a
 *    main clause, to introduce reasons», пример источника: «I love her because
 *    she is friendly». Слово «after» в описании и есть основание урока 6:
 *    источник ставит причину после главного предложения.
 *
 * 5. Слова модуля — Oxford 3000, все A1: or conj. A1, because conj. A1, why
 *    adv. A1. Уже введены раньше: and, but.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — СОЮЗА `so` («поэтому»). В Oxford 3000 он стоит на A1, но программа его не
 *   называет, а английский профиль на этой ступени о нём молчит. Брать слово
 *   только потому, что оно есть в словнике, нельзя: словник отвечает за слова,
 *   а не за то, как их соединяют.
 * — НЕСКОЛЬКИХ ПРЕДЛОЖЕНИЙ ПОДРЯД С УКАЗАНИЯМИ («turn left and then go
 *   straight»). Источник ставит это на A2, отдельной строкой «FORM/USE:
 *   MULTIPLE MAIN CLAUSES, INSTRUCTIONS».
 * — ВОПРОСА С ВЫБОРОМ («Tea or coffee?» как вопрос). Источник ставит его на A2
 *   («QUESTIONS alternatives, FORM: WORD + WORD»). В уроке 4 `or` показано
 *   только в утверждении.
 */
const module: Module = {
  slug: "i-no-potomu-chto",
  title: "И, но, потому что",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, CLAUSES coordinated, «FORM: MAIN CLAUSE + MAIN CLAUSE»: «Can combine " +
        "two main declarative clauses using co-ordinating conjunctions ('and', " +
        "'but', 'or')», пример источника — «I like my college and I like my class». " +
        "A1, CLAUSES coordinated, «FORM: CLAUSE + CLAUSE, ELLIPTED SUBJECT»: «Can " +
        "omit the subject in a second main declarative clause when the subject is " +
        "obvious or the same as the first clause», пример источника — «She likes to " +
        "listen to music and watch TV». " +
        "A1, CONJUNCTIONS coordinating, «USE: LISTING»: «Can use 'and' and 'or' " +
        "before the final item in a list», пример источника — «I like to eat " +
        "chicken, mushrooms and some vegetables». " +
        "A1, CLAUSES subordinated, «FORM/USE: 'BECAUSE', REASONS»: «Can use a " +
        "finite subordinate clause with 'because', after a main clause, to " +
        "introduce reasons», пример источника — «I love her because she is " +
        "friendly». " +
        "A1, CONJUNCTIONS subordinating, «FORM: 'BECAUSE'»: «Can use 'because' as a " +
        "subordinating conjunction to introduce a subordinate clause». " +
        "Все записи стоят на A1 — модуль не берёт ничего сверх ступени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометкой A1: or conj. A1, because conj. A1, why adv. " +
        "A1. Уже введены раньше: and, but",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "соединять два предложения: I work and I study",
    "перечислять через запятую: tea, coffee and water",
    "противопоставлять: I work but I don't study",
    "давать выбор: tea or coffee",
    "не повторять себя дважды: I work and study",
    "называть причину: because",
    "спрашивать о причине: Why do you work here?",
    "рассказывать связно, с причинами",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "soedinyaem-and",
      title: "И: I work and I study",
      estimatedMinutes: 12,
      outcome: "соединять два предложения: I work and I study",

      blocks: [
        {
          id: "zachem-and",
          kind: "explain",
          text: [
            "До сих пор весь курс шёл отдельными предложениями: I work. I study.",
            "Так говорят редко: два коротких предложения подряд звучат рублено.",
            "Их соединяют словом and: I work and I study.",
          ],
        },
        {
          id: "tablica-and",
          kind: "table",
          caption: "Порознь и вместе",
          head: ["Порознь", "Вместе"],
          rows: [
            ["I work. I study.", "I work and I study."],
            ["I like tea. I like coffee.", "I like tea and I like coffee."],
            ["She is a teacher. He is a doctor.", "She is a teacher and he is a doctor."],
          ],
        },
        {
          id: "zapyatoy-net",
          kind: "explain",
          text: [
            "По-русски перед «и» в таком предложении стоит запятая: «я работаю, и я " +
              "учусь».",
            "По-английски запятой там нет: I work and I study.",
            "Это первое, на чём спотыкаются, и запомнить надо именно это.",
          ],
        },
        {
          id: "ne-zapyataya-pered-and",
          kind: "note",
          tone: "mistake",
          text:
            "«I work, and I study» — так обычно не пишут.\n\nПеред and в таком " +
            "предложении запятая не нужна.",
        },
        {
          id: "primer-and",
          kind: "example",
          caption: "Три соединённых предложения",
          text: "I work and I study.\nShe can swim and she can drive.\nI like music and I like sport.",
          explain:
            "В каждом предложении слово and стоит посередине, а по бокам от него — " +
            "две полные мысли. Ни одна из них не меняется.",
        },
        {
          id: "zapis-and",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I work and I study. She can swim and she can drive. I like music and I like sport.",
        },
        {
          id: "and-uzhe-vstrechalos",
          kind: "note",
          tone: "info",
          text:
            "Слово and тебе давно знакомо: Alim and Dana, tea and coffee.\n\nНовое " +
            "здесь одно — им можно соединять целые предложения, а не только слова.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-and",
          kind: "gap",
          prompt: "Ты работаешь и учишься. Допиши недостающее слово.",
          before: "I work ",
          after: " I study.",
          answer: "and",
          hint: "Слово соединяет две мысли.",
          why: "I work and I study. Запятая перед and здесь не нужна.",
        },
        {
          id: "z2-vybrat-bez-zapyatoy",
          kind: "choice",
          prompt: "Ты любишь чай и любишь кофе. В каком предложении нет ошибки?",
          options: [
            { text: "I like tea, and I like coffee." },
            { text: "I like tea and I like coffee.", correct: true },
            { text: "I like tea and I like coffee and." },
          ],
          hint: "Запятая перед and в таком предложении не ставится.",
          why:
            "I like tea and I like coffee. Слово and стоит один раз и посередине.",
        },
        {
          id: "z3-otmetit-lishnyuyu-zapyatuyu",
          kind: "hottext",
          prompt: "Отметь записи с лишней запятой.",
          parts: [
            { text: "I work and I study.", selectable: true },
            { text: " · " },
            { text: "I work, and I study.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim, and she can drive.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim and she can drive.", selectable: true },
          ],
          hint: "Перед and в соединённом предложении запятой нет.",
          why: "Верно: I work and I study и She can swim and she can drive.",
        },
        {
          id: "z4-sobrat-and",
          kind: "order",
          prompt: "Собери предложение: «Я живу здесь и я работаю здесь.»",
          items: ["I work here.", "and", "I live here"],
          answer: [2, 1, 0],
          hint: "Слово and стоит посередине.",
          why: "I live here and I work here. По бокам от and — две полные мысли.",
        },
        {
          id: "z5-napisat-and",
          kind: "short",
          prompt: "Напиши, что ты умеешь плавать и умеешь водить машину. Плавать — swim, водить — drive.",
          answer: "I can swim and I can drive.",
          hint: "Соедини две мысли словом and.",
          why: "I can swim and I can drive. Запятая перед and не нужна.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "perechislenie",
      title: "Перечисление: tea, coffee and water",
      estimatedMinutes: 12,
      outcome: "перечислять через запятую: tea, coffee and water",

      blocks: [
        {
          id: "zachem-perechislenie",
          kind: "explain",
          text: [
            "В магазине редко берут одну вещь: обычно их три или четыре.",
            "Ставить and между каждыми двумя нельзя — выйдет длинно и неуклюже.",
            "Перечисление строят так: между вещами запятые, а перед последней — and.",
          ],
        },
        {
          id: "tablica-perechisleniya",
          kind: "table",
          caption: "Как строится перечисление",
          head: ["Сколько вещей", "Как это выглядит"],
          rows: [
            ["две", "tea and coffee"],
            ["три", "tea, coffee and water"],
            ["четыре", "tea, coffee, water and milk"],
          ],
        },
        {
          id: "zapyataya-v-perechislenii",
          kind: "explain",
          text: [
            "Вот теперь запятые нужны — но только между вещами.",
            "Перед последней вещью запятой нет, там стоит and.",
            "Из двух вещей перечисления не выходит: там хватает одного and.",
          ],
        },
        {
          id: "ne-and-mezhdu-vsemi",
          kind: "note",
          tone: "mistake",
          text:
            "«tea and coffee and water» — так обычно не говорят.\n\nМежду первыми " +
            "вещами ставят запятые, а and — только перед последней.",
        },
        {
          id: "primer-perechisleniya",
          kind: "example",
          caption: "Список покупок",
          text: "I'd like some bread, some water and some rice.\nI like tea, coffee and milk.",
          explain:
            "В обоих перечислениях две запятые и одно and — перед последней вещью. " +
            "Слово some повторяется перед каждой вещью.",
        },
        {
          id: "zapis-perechisleniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай два перечисления",
          transcript: "I'd like some bread, some water and some rice. I like tea, coffee and milk.",
        },
        {
          id: "slovar-perechisleniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "or", translation: "или", example: "Tea or coffee.", hint: "/ɔː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-and-v-perechislenii",
          kind: "gap",
          prompt: "Ты перечисляешь три напитка. Допиши недостающее слово.",
          before: "tea, coffee ",
          after: " water",
          answer: "and",
          hint: "Перед последней вещью стоит одно слово.",
          why: "Tea, coffee and water. Перед последней вещью идёт and, а не запятая.",
        },
        {
          id: "z2-vybrat-perechislenie",
          kind: "choice",
          prompt: "Ты перечисляешь три вещи: хлеб, воду и рис. Как сказать?",
          options: [
            { text: "bread and water and rice" },
            { text: "bread, water, rice" },
            { text: "bread, water and rice", correct: true },
          ],
          hint: "Между вещами запятые, перед последней — and.",
          why:
            "Bread, water and rice. В первом варианте and лишнее, во втором его не " +
            "хватает перед последней вещью.",
        },
        {
          id: "z3-otmetit-perechislenie",
          kind: "hottext",
          prompt: "Отметь перечисления с ошибкой.",
          parts: [
            { text: "tea, coffee and milk", selectable: true },
            { text: " · " },
            { text: "tea and coffee and milk", selectable: true, correct: true },
            { text: " · " },
            { text: "bread, water, rice", selectable: true, correct: true },
            { text: " · " },
            { text: "bread, water and rice", selectable: true },
          ],
          hint: "Запятые между вещами, and перед последней.",
          why: "Верно: tea, coffee and milk и bread, water and rice.",
        },
        {
          id: "z4-sobrat-perechislenie",
          kind: "order",
          prompt: "Собери перечисление: «хлеб, молоко и вода».",
          items: ["and water", "bread,", "milk"],
          answer: [1, 2, 0],
          hint: "Слово and стоит перед последней вещью.",
          why: "Bread, milk and water. Запятая между первыми двумя, and перед третьей.",
        },
        {
          id: "z5-napisat-perechislenie",
          kind: "short",
          prompt:
            "Напиши, что тебе нравятся чай, кофе и молоко. Чай — tea, кофе — coffee, " +
            "молоко — milk.",
          answer: "I like tea, coffee and milk.",
          hint: "Между вещами запятые, перед последней — and.",
          why: "I like tea, coffee and milk. Запятая одна, and одно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "no-but",
      title: "Но: I work but I don't study",
      estimatedMinutes: 12,
      outcome: "противопоставлять: I work but I don't study",

      blocks: [
        {
          id: "zachem-but",
          kind: "explain",
          text: [
            "Иногда вторая мысль не добавляется к первой, а спорит с ней.",
            "«Я работаю, но не учусь» — здесь and не годится вовсе.",
            "Для спора берут but: I work but I don't study.",
          ],
        },
        {
          id: "tablica-and-i-but",
          kind: "table",
          caption: "Когда and, а когда but",
          head: ["Английский", "Перевод", "Что делает"],
          rows: [
            ["I work and I study.", "Я работаю и учусь.", "добавляет"],
            ["I work but I don't study.", "Я работаю, но не учусь.", "спорит"],
            ["I like tea but I don't like coffee.", "Я люблю чай, но не люблю кофе.", "спорит"],
          ],
        },
        {
          id: "zapyataya-pered-but",
          kind: "explain",
          text: [
            "По-русски перед «но» запятая обязательна.",
            "По-английски перед but её обычно не ставят: I work but I don't study.",
            "Правило то же, что с and, и запоминать его надо вместе.",
          ],
        },
        {
          id: "ne-and-vmesto-but",
          kind: "note",
          tone: "mistake",
          text:
            "«I like tea and I don't like coffee» — здесь нужно but.\n\nВторая мысль " +
            "спорит с первой, а and для спора не годится.",
        },
        {
          id: "primer-but",
          kind: "example",
          caption: "Три противопоставления",
          text:
            "I work but I don't study.\nShe can drive but she can't swim.\nI like tea but I don't like coffee.",
          explain:
            "Во всех трёх вторая часть — отрицание. Это самый частый случай для but, " +
            "но не единственный.",
        },
        {
          id: "zapis-but",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I work but I don't study. She can drive but she can't swim. I like tea but I don't like coffee.",
        },
        {
          id: "but-uzhe-vstrechalos",
          kind: "note",
          tone: "info",
          text:
            "Слово but встречалось тебе с модуля «Здесь есть».\n\nНовое здесь то, " +
            "что оно соединяет два полных предложения, а не два слова.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-but",
          kind: "gap",
          prompt: "Ты работаешь, но не учишься. Допиши недостающее слово.",
          before: "I work ",
          after: " I don't study.",
          answer: "but",
          hint: "Вторая мысль спорит с первой.",
          why: "I work but I don't study. Для спора берут but, а не and.",
        },
        {
          id: "z2-vybrat-and-ili-but",
          kind: "choice",
          prompt: "Ты умеешь водить машину, но не умеешь плавать. Как сказать?",
          options: [
            { text: "I can drive and I can't swim." },
            { text: "I can drive but I can't swim.", correct: true },
            { text: "I can drive, but I can't swim, and." },
          ],
          hint: "Вторая мысль спорит с первой.",
          why: "I can drive but I can't swim. Слово and здесь не годится: мысли спорят.",
        },
        {
          id: "z3-otmetit-and-vmesto-but",
          kind: "hottext",
          prompt: "Отметь записи, где вместо and нужно but.",
          parts: [
            { text: "I like tea and I like coffee.", selectable: true },
            { text: " · " },
            { text: "I like tea and I don't like coffee.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim and she can't drive.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim and she can drive.", selectable: true },
          ],
          hint: "Смотри, спорит ли вторая мысль с первой.",
          why:
            "But нужно там, где вторая часть отрицает: I like tea but I don't like " +
            "coffee, She can swim but she can't drive.",
        },
        {
          id: "z4-sobrat-but",
          kind: "order",
          prompt: "Собери предложение: «Я люблю чай, но не люблю кофе.»",
          items: ["I don't like coffee.", "I like tea", "but"],
          answer: [1, 2, 0],
          hint: "Слово but стоит посередине.",
          why: "I like tea but I don't like coffee. По бокам от but — две полные мысли.",
        },
        {
          id: "z5-napisat-but",
          kind: "short",
          prompt:
            "Напиши, что твоя сестра умеет водить машину, но не умеет плавать. " +
            "Сестра — my sister.",
          answer: "My sister can drive but she can't swim.",
          accept: ["My sister can drive but she cannot swim."],
          hint: "Во второй части имя не повторяй — поставь she.",
          why:
            "My sister can drive but she can't swim. Во второй части стоит she: имя " +
            "уже названо.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vybor-or",
      title: "Или: tea or coffee",
      estimatedMinutes: 11,
      outcome: "давать выбор: tea or coffee",

      blocks: [
        {
          id: "zachem-or",
          kind: "explain",
          text: [
            "Третий случай — выбор: одно или другое, но не всё сразу.",
            "Для него есть своё слово: or.",
            "Tea or coffee. I work on Monday or on Tuesday.",
          ],
        },
        {
          id: "tablica-treh-soyuzov",
          kind: "table",
          caption: "Три слова рядом",
          head: ["Слово", "Что делает", "Пример"],
          rows: [
            ["and", "добавляет", "tea and coffee"],
            ["but", "спорит", "I like tea but I don't like coffee."],
            ["or", "даёт выбор", "tea or coffee"],
          ],
        },
        {
          id: "or-i-v-perechislenii",
          kind: "explain",
          text: [
            "В перечислении or стоит на том же месте, что and, — перед последней " +
              "вещью.",
            "Tea, coffee or water — выбирают одно из трёх.",
            "Разница только в смысле: and берёт всё, or — что-то одно.",
          ],
        },
        {
          id: "ne-or-vmesto-and",
          kind: "note",
          tone: "mistake",
          text:
            "«I'd like some bread or some water» в магазине звучит странно.\n\nЕсли " +
            "берёшь и то и другое, нужно and. Слово or оставляет выбор.",
        },
        {
          id: "primer-or",
          kind: "example",
          caption: "Выбор",
          text: "tea or coffee\ntea, coffee or water\nI work on Monday or on Tuesday.",
          explain:
            "В первых двух строках выбирают напиток, в третьей — день. Всюду or " +
            "стоит перед последним из вариантов.",
        },
        {
          id: "zapis-or",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три записи",
          transcript: "tea or coffee, tea, coffee or water, I work on Monday or on Tuesday.",
        },
        {
          id: "vopros-s-or-pozzhe",
          kind: "note",
          tone: "info",
          text:
            "Спросить о выборе можно и вопросом — «Tea or coffee?», — но устроен он " +
            "сложнее.\n\nВ этом курсе довольно и того, чтобы предлагать выбор " +
            "утверждением.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-or",
          kind: "gap",
          prompt: "Ты предлагаешь на выбор чай или кофе. Допиши недостающее слово.",
          before: "tea ",
          after: " coffee",
          answer: "or",
          hint: "Слово даёт выбор, а не добавляет.",
          why: "Tea or coffee. Слово or оставляет выбор одного из двух.",
        },
        {
          id: "z2-vybrat-and-ili-or",
          kind: "choice",
          prompt: "Ты берёшь в магазине и хлеб, и воду. Как сказать?",
          options: [
            { text: "I'd like some bread or some water." },
            { text: "I'd like some bread and some water.", correct: true },
            { text: "I'd like some bread but some water." },
          ],
          hint: "Ты берёшь и то и другое.",
          why:
            "I'd like some bread and some water. Слово or оставило бы выбор, а but " +
            "здесь не о чем спорить.",
        },
        {
          id: "z3-sopostavit-soyuzy",
          kind: "match",
          prompt: "Сопоставь слово и то, что оно делает.",
          left: ["and", "but", "or"],
          right: ["даёт выбор", "добавляет", "спорит"],
          answer: [1, 2, 0],
          hint: "Три слова — три разных дела.",
          why: "And добавляет, but спорит, or даёт выбор.",
        },
        {
          id: "z4-otmetit-nuzhnoe-slovo",
          kind: "hottext",
          prompt: "Отметь записи, где даётся выбор одного из двух.",
          parts: [
            { text: "tea or coffee", selectable: true, correct: true },
            { text: " · " },
            { text: "tea and coffee", selectable: true },
            { text: " · " },
            { text: "Monday or Tuesday", selectable: true, correct: true },
            { text: " · " },
            { text: "Monday and Tuesday", selectable: true },
          ],
          hint: "Выбор даёт одно из трёх слов, которые ты знаешь.",
          why:
            "Выбор дают tea or coffee и Monday or Tuesday. Слово and берёт и то и " +
            "другое сразу.",
        },
        {
          id: "z5-napisat-or",
          kind: "short",
          prompt: "Предложи на выбор чай, кофе или воду. Чай — tea, кофе — coffee, вода — water.",
          answer: "Tea, coffee or water.",
          hint: "Между первыми запятая, перед последним — or.",
          why: "Tea, coffee or water. Слово or стоит на том же месте, что and.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-povtoryay-sebya",
      title: "Короче: I work and study",
      estimatedMinutes: 12,
      outcome: "не повторять себя дважды: I work and study",

      blocks: [
        {
          id: "zachem-koroche",
          kind: "explain",
          text: [
            "В предложении «I work and I study» слово I стоит дважды.",
            "Если речь об одном и том же человеке, второе можно убрать: I work and " +
              "study.",
            "Смысл не меняется, а звучит короче и живее.",
          ],
        },
        {
          id: "tablica-koroche",
          kind: "table",
          caption: "Длинно и коротко",
          head: ["Длинно", "Коротко"],
          rows: [
            ["I work and I study.", "I work and study."],
            ["She likes music and she likes films.", "She likes music and films."],
            ["I can swim and I can drive.", "I can swim and drive."],
          ],
        },
        {
          id: "kogda-mozhno-ubrat",
          kind: "explain",
          text: [
            "Убирать можно только тогда, когда во второй части тот же человек.",
            "«I work and she studies» сократить нельзя: люди разные.",
            "Проверить легко: если после сокращения непонятно, кто делает, — не " +
              "сокращай.",
          ],
        },
        {
          id: "ne-ubiray-pri-raznyh",
          kind: "note",
          tone: "mistake",
          text:
            "«I work and studies» — так не говорят.\n\nОкончание -s осталось от " +
            "другого человека, а его самого убрали. Верно: I work and study.",
        },
        {
          id: "primer-koroche",
          kind: "example",
          caption: "Одно и то же дважды",
          text: "I work and I study.\nI work and study.\nI work and she studies.",
          explain:
            "Первые две строки значат одно. Третью сокращать нельзя: во второй части " +
            "другой человек, и убрать его нечем.",
        },
        {
          id: "zapis-koroche",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай длинную и короткую запись",
          transcript: "I work and I study. I work and study.",
        },
        {
          id: "koroche-i-v-perechislenii",
          kind: "note",
          tone: "info",
          text:
            "Так же поступают и с перечислением: She likes music, films and " +
            "sport.\n\nГлагол назван один раз, а вещей после него три.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-korotkuyu-zapis",
          kind: "choice",
          prompt: "Ты работаешь и учишься. Как сказать короче?",
          options: [
            { text: "I work and I study." },
            { text: "I work and study.", correct: true },
            { text: "I work and studies." },
          ],
          hint: "Второе слово о себе можно убрать.",
          why:
            "I work and study. Первое верно, но длиннее, а в третьем осталось " +
            "окончание от другого человека.",
        },
        {
          id: "z2-dopisat-koroche",
          kind: "gap",
          prompt: "Ты умеешь плавать и водить машину. Скажи это короче. Водить — drive.",
          before: "I can swim and ",
          after: ".",
          answer: "drive",
          hint: "Слова I и can второй раз не нужны.",
          why: "I can swim and drive. Оба слова названы один раз.",
        },
        {
          id: "z3-otmetit-nelzya-sokratit",
          kind: "hottext",
          prompt: "Отметь предложения, которые сократить нельзя.",
          parts: [
            { text: "I work and I study.", selectable: true },
            { text: " · " },
            { text: "I work and she studies.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim and she can drive.", selectable: true },
            { text: " · " },
            { text: "She can swim and he can drive.", selectable: true, correct: true },
          ],
          hint: "Сокращают только там, где в обеих частях один человек.",
          why:
            "Нельзя сократить «I work and she studies» и «She can swim and he can " +
            "drive»: люди в частях разные.",
        },
        {
          id: "z4-sobrat-koroche",
          kind: "order",
          prompt: "Собери короткое предложение: «Она любит музыку и фильмы.»",
          items: ["films", "She likes", "and", "music"],
          answer: [1, 3, 2, 0],
          hint: "Глагол назван один раз.",
          why: "She likes music and films. Слово likes стоит один раз.",
        },
        {
          id: "z5-napisat-koroche",
          kind: "short",
          prompt: "Напиши короче: I like tea and I like coffee.",
          answer: "I like tea and coffee.",
          hint: "Убери всё, что повторяется.",
          why: "I like tea and coffee. Слова I и like названы по одному разу.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "prichina-because",
      title: "Почему: because",
      estimatedMinutes: 13,
      outcome: "называть причину: because",

      blocks: [
        {
          id: "zachem-because",
          kind: "explain",
          text: [
            "Сказать «я люблю этот магазин» мало: собеседник спросит почему.",
            "Причину вводят словом because: I like this shop because it is near.",
            "Сначала главное, потом причина — порядок именно такой.",
          ],
        },
        {
          id: "tablica-because",
          kind: "table",
          caption: "Главное и причина",
          head: ["Английский", "Перевод"],
          rows: [
            ["I like this shop because it is near.", "Мне нравится этот магазин, потому что он рядом."],
            ["I can't come because I work.", "Я не могу прийти, потому что работаю."],
            ["I like her because she is friendly.", "Она мне нравится, потому что она приветливая."],
          ],
        },
        {
          id: "poryadok-pri-because",
          kind: "explain",
          text: [
            "Слово because не соединяет две равные мысли, как and.",
            "Оно привязывает причину к главному, и потому стоит второй частью.",
            "После because идёт полное предложение: со своим подлежащим и глаголом.",
          ],
        },
        {
          id: "zapyataya-pered-because",
          kind: "note",
          tone: "info",
          text:
            "По-русски перед «потому что» запятая обязательна.\n\nПо-английски перед " +
            "because её обычно не ставят: I work because I like it.",
        },
        {
          id: "primer-because",
          kind: "example",
          caption: "Три причины",
          text:
            "I like this shop because it is near.\nI can't come because I work.\nShe is happy because she has got a bike.",
          explain:
            "В каждом предложении две части. Первая — что происходит, вторая — " +
            "почему. Обе полные, у обеих свой глагол.",
        },
        {
          id: "zapis-because",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три причины",
          transcript: "I like this shop because it is near. I can't come because I work.",
        },
        {
          id: "slovar-because",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "because", translation: "потому что", example: "I can't come because I work.", hint: "/bɪˈkɒz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-because",
          kind: "gap",
          prompt: "Ты не можешь прийти, потому что работаешь. Допиши недостающее слово.",
          before: "I can't come ",
          after: " I work.",
          answer: "because",
          hint: "Слово вводит причину.",
          why: "I can't come because I work. Сначала главное, потом причина.",
        },
        {
          id: "z2-vybrat-poryadok-because",
          kind: "choice",
          prompt: "Тебе нравится этот магазин, потому что он рядом. Как сказать?",
          options: [
            { text: "I like this shop because it is near.", correct: true },
            { text: "Because it is near I like this shop." },
            { text: "I like this shop because near." },
          ],
          hint: "Сначала главное, потом причина, и причина — полное предложение.",
          why:
            "I like this shop because it is near. После because нужно полное " +
            "предложение: it is near.",
        },
        {
          id: "z3-otmetit-nepolnuyu-prichinu",
          kind: "hottext",
          prompt: "Отметь записи, где после because не хватает слов.",
          parts: [
            { text: "I can't come because I work.", selectable: true },
            { text: " · " },
            { text: "I can't come because work.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is happy because bike.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is happy because she has got a bike.", selectable: true },
          ],
          hint: "После because идёт полное предложение со своим глаголом.",
          why:
            "Верно: I can't come because I work и She is happy because she has got a " +
            "bike. Одного слова после because не хватает.",
        },
        {
          id: "z4-sobrat-because",
          kind: "order",
          prompt: "Собери предложение: «Я люблю этот магазин, потому что он рядом.»",
          items: ["it is near.", "I like this shop", "because"],
          answer: [1, 2, 0],
          hint: "Сначала главное, потом because, потом причина.",
          why: "I like this shop because it is near. Причина идёт второй частью.",
        },
        {
          id: "z5-napisat-because",
          kind: "short",
          prompt:
            "Напиши, что ты не можешь прийти, потому что работаешь. Прийти — come, " +
            "работать — work.",
          answer: "I can't come because I work.",
          accept: ["I cannot come because I work."],
          hint: "После because идёт полное предложение.",
          why: "I can't come because I work. Обе части полные, у обеих свой глагол.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vopros-pochemu",
      title: "Вопрос почему: Why do you work here?",
      estimatedMinutes: 12,
      outcome: "спрашивать о причине: Why do you work here?",

      blocks: [
        {
          id: "zachem-vopros-pochemu",
          kind: "explain",
          text: [
            "Причину можно не только называть, но и спрашивать.",
            "Вопросительное слово для этого — why: Why do you work here?",
            "Строится вопрос как все вопросы о делах: why, do, тот, о ком речь, " +
              "глагол.",
          ],
        },
        {
          id: "tablica-why",
          kind: "table",
          caption: "Вопрос и ответ",
          head: ["Вопрос", "Ответ"],
          rows: [
            ["Why do you work here?", "Because I like this shop."],
            ["Why can't you come?", "Because I work."],
            ["Why are you happy?", "Because I have got a bike."],
          ],
        },
        {
          id: "otvet-s-because",
          kind: "explain",
          text: [
            "На вопрос why отвечают с because — и здесь оно стоит первым.",
            "Это единственный случай, когда because начинает мысль.",
            "Полный ответ тоже годится: I work here because I like this shop.",
          ],
        },
        {
          id: "ne-why-bez-do",
          kind: "note",
          tone: "mistake",
          text:
            "«Why you work here?» — так не говорят.\n\nПосле why идёт do, как и " +
            "после других вопросительных слов: Why do you work here?",
        },
        {
          id: "primer-why",
          kind: "example",
          caption: "Разговор о причинах",
          text:
            "— Why do you work here?\n— Because I like this shop.\n— Why can't you come tomorrow?\n— Because I work.",
          explain:
            "В обоих вопросах после why стоит do или can. В ответах because стоит " +
            "первым — так отвечают коротко.",
        },
        {
          id: "zapis-why",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопрос и ответ",
          transcript: "Why do you work here? Because I like this shop.",
        },
        {
          id: "slovar-why",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "why", translation: "почему", example: "Why do you work here?", hint: "/waɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-why",
          kind: "gap",
          prompt: "Ты хочешь узнать причину. Допиши недостающее слово.",
          before: "",
          after: " do you work here?",
          answer: "Why",
          hint: "Вопросительное слово о причине.",
          why: "Why do you work here? После why идёт do.",
        },
        {
          id: "z2-vybrat-vopros-why",
          kind: "choice",
          prompt: "Ты хочешь узнать, почему собеседник живёт здесь. Как спросить?",
          options: [
            { text: "Why you live here?" },
            { text: "Why do you live here?", correct: true },
            { text: "Why do you living here?" },
          ],
          hint: "После why идёт do, а глагол — без окончания.",
          why:
            "Why do you live here? Без do вопрос неполон, а окончание -ing сюда не " +
            "приходит.",
        },
        {
          id: "z3-otvetit-s-because",
          kind: "short",
          prompt:
            "Тебя спросили: Why do you work here? Причина — тебе нравится этот " +
            "магазин. Ответь коротко, начав с because.",
          answer: "Because I like this shop.",
          hint: "Короткий ответ начинается с because.",
          why: "Because I like this shop. В ответе because стоит первым.",
        },
        {
          id: "z4-otmetit-vopros-bez-do",
          kind: "hottext",
          prompt: "Отметь вопросы, где потеряно слово do.",
          parts: [
            { text: "Why do you work here?", selectable: true },
            { text: " · " },
            { text: "Why you work here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Why she likes this shop?", selectable: true, correct: true },
            { text: " · " },
            { text: "Why does she like this shop?", selectable: true },
          ],
          hint: "После why идёт do или does.",
          why:
            "Верно: Why do you work here? и Why does she like this shop? В двух " +
            "других вопросах потеряно do и does.",
        },
        {
          id: "z5-sprosit-why",
          kind: "short",
          prompt: "Спроси у собеседника, почему он работает здесь. Работать — work, здесь — here.",
          answer: "Why do you work here?",
          hint: "Четыре слова после вопросительного.",
          why: "Why do you work here? Порядок: why, do, you, глагол.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "svyaznyy-rasskaz",
      title: "Связный рассказ",
      estimatedMinutes: 13,
      outcome: "рассказывать связно, с причинами",

      blocks: [
        {
          id: "zachem-svyaznyy-rasskaz",
          kind: "explain",
          text: [
            "Рассказ из отдельных предложений похож на список.",
            "Пять слов этого модуля превращают список в речь.",
            "Соединяй, противопоставляй, объясняй — и рассказ пойдёт сам.",
          ],
        },
        {
          id: "tablica-pyat-slov",
          kind: "table",
          caption: "Пять слов на все случаи",
          head: ["Слово", "Когда брать"],
          rows: [
            ["and", "добавить"],
            ["but", "возразить"],
            ["or", "дать выбор"],
            ["because", "объяснить"],
            ["why", "спросить о причине"],
          ],
        },
        {
          id: "shagi-svyaznogo-rasskaza",
          kind: "explain",
          text: [
            "Начни с того, что делаешь, и добавь второе через and.",
            "Потом возрази себе через but: это оживляет рассказ сильнее всего.",
            "И объясни причину через because — вот и получился связный рассказ.",
          ],
        },
        {
          id: "ne-odin-and",
          kind: "note",
          tone: "info",
          text:
            "Рассказ из одних and читается тяжело.\n\nЧередуй: одно and, одно but, " +
            "одно because — этого хватает на целый рассказ о себе.",
        },
        {
          id: "primer-svyaznogo-rasskaza",
          kind: "example",
          caption: "Рассказ целиком",
          text:
            "I work in a shop and I study at a university.\nI like my work but I don't like early mornings.\nI study because I want a good job.",
          explain:
            "Первое предложение добавляет, второе возражает, третье объясняет. Три " +
            "слова — и рассказ держится вместе.",
        },
        {
          id: "zapis-svyaznogo-rasskaza",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "I work in a shop and I study at a university. I like my work but I don't like early mornings.",
        },
        {
          id: "svyazi-i-v-razgovore",
          kind: "note",
          tone: "info",
          text:
            "Те же слова держат и разговор, а не только рассказ.\n\nНа вопрос " +
            "отвечай не одним словом, а с причиной: Yes, I do, because I like it.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-svyaznyy-rasskaz",
          kind: "order",
          prompt: "Собери рассказ: сначала что делаешь, потом возражение, потом причина.",
          items: [
            "I study because I want a good job.",
            "I work and I study.",
            "I like my work but I don't like early mornings.",
          ],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии.",
          why:
            "I work and I study. I like my work but I don't like early mornings. " +
            "I study because I want a good job.",
        },
        {
          id: "z2-napisat-s-and-i-but",
          kind: "short",
          prompt:
            "Напиши два предложения: ты работаешь и учишься; тебе нравится работа, " +
            "но не нравится рано вставать. Рано вставать — early mornings.",
          answer: "I work and I study. I like my work but I don't like early mornings.",
          accept: [
            "I work and study. I like my work but I don't like early mornings.",
          ],
          hint: "В первом and, во втором but.",
          why:
            "I work and I study. I like my work but I don't like early mornings. " +
            "Годится и короткая запись I work and study.",
        },
        {
          id: "z3-dopisat-svyazku",
          kind: "gap",
          prompt: "Ты учишься, и причина в том, что хочешь хорошую работу. Допиши недостающее слово.",
          before: "I study ",
          after: " I want a good job.",
          answer: "because",
          hint: "Вторая часть объясняет первую.",
          why: "I study because I want a good job. Причина идёт второй частью.",
        },
        {
          id: "z4-otmetit-nuzhnuyu-svyazku",
          kind: "hottext",
          prompt: "Отметь записи, где вместо and нужно but или because.",
          parts: [
            { text: "I work and I study.", selectable: true },
            { text: " · " },
            { text: "I like my work and I don't like early mornings.", selectable: true, correct: true },
            { text: " · " },
            { text: "I study and I want a good job.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like tea and I like coffee.", selectable: true },
          ],
          hint: "Смотри на смысл: возражение или причина.",
          why:
            "Во втором нужно but: мысли спорят. В третьем нужно because: вторая " +
            "часть объясняет первую.",
        },
        {
          id: "z5-rasskaz-vsluh-svyaznyy",
          kind: "speak",
          prompt: "Расскажи вслух о себе: три предложения со словами and, but и because.",
          phrase:
            "I work and I study. I like my work but I don't like early mornings. I study because I want a good job.",
          translation:
            "Я работаю и учусь. Мне нравится моя работа, но не нравится рано вставать. Я учусь, потому что хочу хорошую работу.",
          hint: "По одному слову на предложение: сначала and, потом but, потом because.",
          why:
            "Три предложения и три разных слова — это уже связная речь, а не список.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.7,
    questions: [
      // Работа не повторяет задания уроков: другие предложения, другой
      // пропущенный кусок.

      // ---- итог 1 ----
      {
        id: "q-and-dopisat",
        kind: "gap",
        outcome: "соединять два предложения: I work and I study",
        prompt: "Ты живёшь здесь и работаешь здесь. Допиши недостающее слово.",
        before: "I live here ",
        after: " I work here.",
        answer: "and",
        hint: "Слово соединяет две мысли.",
        why: "I live here and I work here. Запятая перед and здесь не нужна.",
      },
      {
        id: "q-and-vybor",
        kind: "choice",
        outcome: "соединять два предложения: I work and I study",
        prompt: "Ты умеешь плавать и умеешь рисовать. В каком предложении нет ошибки?",
        options: [
          { text: "I can swim, and I can draw." },
          { text: "I can swim and I can draw.", correct: true },
          { text: "I can swim and and I can draw." },
        ],
        hint: "Запятая перед and в таком предложении не ставится.",
        why: "I can swim and I can draw. Слово and стоит один раз и посередине.",
      },
      {
        id: "q-and-napisat",
        kind: "short",
        outcome: "соединять два предложения: I work and I study",
        prompt: "Напиши, что тебе нравится музыка и нравится спорт. Музыка — music, спорт — sport.",
        answer: "I like music and I like sport.",
        accept: ["I like music and sport."],
        hint: "Соедини две мысли словом and.",
        why:
          "I like music and I like sport. Годится и короткая запись I like music and " +
          "sport.",
      },

      // ---- итог 2 ----
      {
        id: "q-perechislenie-vybor",
        kind: "choice",
        outcome: "перечислять через запятую: tea, coffee and water",
        prompt: "Ты перечисляешь три вещи: хлеб, молоко и рис. Как сказать?",
        options: [
          { text: "bread and milk and rice" },
          { text: "bread, milk, rice" },
          { text: "bread, milk and rice", correct: true },
        ],
        hint: "Между вещами запятые, перед последней — and.",
        why:
          "Bread, milk and rice. В первом варианте and лишнее, в третьем его не " +
          "хватает.",
      },
      {
        id: "q-perechislenie-dopisat",
        kind: "gap",
        outcome: "перечислять через запятую: tea, coffee and water",
        prompt: "Ты перечисляешь три напитка. Допиши недостающее слово.",
        before: "water, milk ",
        after: " tea",
        answer: "and",
        hint: "Перед последней вещью стоит одно слово.",
        why: "Water, milk and tea. Перед последней вещью идёт and, а не запятая.",
      },
      {
        id: "q-perechislenie-napisat",
        kind: "short",
        outcome: "перечислять через запятую: tea, coffee and water",
        prompt:
          "Напиши, что тебе нравятся хлеб, рис и мясо. Хлеб — bread, рис — rice, " +
          "мясо — meat.",
        answer: "I like bread, rice and meat.",
        hint: "Между вещами запятые, перед последней — and.",
        why: "I like bread, rice and meat. Запятая одна, and одно.",
      },

      // ---- итог 3 ----
      {
        id: "q-but-dopisat",
        kind: "gap",
        outcome: "противопоставлять: I work but I don't study",
        prompt: "Ты любишь кофе, но не любишь чай. Допиши недостающее слово.",
        before: "I like coffee ",
        after: " I don't like tea.",
        answer: "but",
        hint: "Вторая мысль спорит с первой.",
        why: "I like coffee but I don't like tea. Для спора берут but.",
      },
      {
        id: "q-but-vybor",
        kind: "choice",
        outcome: "противопоставлять: I work but I don't study",
        prompt: "Твой брат умеет плавать, но не умеет водить машину. Как сказать?",
        options: [
          { text: "My brother can swim but he can't drive.", correct: true },
          { text: "My brother can swim and he can't drive." },
          { text: "My brother can swim because he can't drive." },
        ],
        hint: "Вторая мысль спорит с первой.",
        why:
          "My brother can swim but he can't drive. Слово and здесь не годится, а " +
          "because вводит причину, которой тут нет.",
      },
      {
        id: "q-but-napisat",
        kind: "short",
        outcome: "противопоставлять: I work but I don't study",
        prompt: "Напиши, что ты работаешь, но не учишься. Работать — work, учиться — study.",
        answer: "I work but I don't study.",
        accept: ["I work but I do not study."],
        hint: "Соедини мысли словом but.",
        why: "I work but I don't study. Запятая перед but не нужна.",
      },

      // ---- итог 4 ----
      {
        id: "q-or-dopisat",
        kind: "gap",
        outcome: "давать выбор: tea or coffee",
        prompt: "Ты предлагаешь на выбор воду или молоко. Допиши недостающее слово.",
        before: "water ",
        after: " milk",
        answer: "or",
        hint: "Слово даёт выбор, а не добавляет.",
        why: "Water or milk. Слово or оставляет выбор одного из двух.",
      },
      {
        id: "q-or-vybor",
        kind: "choice",
        outcome: "давать выбор: tea or coffee",
        prompt: "Ты берёшь в магазине и рис, и мясо. Как сказать?",
        options: [
          { text: "I'd like some rice or some meat." },
          { text: "I'd like some rice but some meat." },
          { text: "I'd like some rice and some meat.", correct: true },
        ],
        hint: "Ты берёшь и то и другое.",
        why:
          "I'd like some rice and some meat. Слово or оставило бы выбор, а but здесь " +
          "не о чем спорить.",
      },
      {
        id: "q-or-sopostavit",
        kind: "match",
        outcome: "давать выбор: tea or coffee",
        prompt: "Сопоставь слово и то, что оно делает.",
        left: ["or", "and", "but"],
        right: ["спорит", "даёт выбор", "добавляет"],
        answer: [1, 2, 0],
        hint: "Три слова — три разных дела.",
        why: "Or даёт выбор, and добавляет, but спорит.",
      },

      // ---- итог 5 ----
      {
        id: "q-koroche-vybor",
        kind: "choice",
        outcome: "не повторять себя дважды: I work and study",
        prompt: "Ты умеешь плавать и умеешь рисовать. Как сказать короче?",
        options: [
          { text: "I can swim and draw.", correct: true },
          { text: "I can swim and I can draw." },
          { text: "I can swim and draws." },
        ],
        hint: "Слова I и can второй раз не нужны.",
        why:
          "I can swim and draw. Второе верно, но длиннее, а в третьем осталось " +
          "окончание от другого человека.",
      },
      {
        id: "q-koroche-dopisat",
        kind: "gap",
        outcome: "не повторять себя дважды: I work and study",
        prompt: "Ты любишь чай и кофе. Скажи это короче. Кофе — coffee.",
        before: "I like tea and ",
        after: ".",
        answer: "coffee",
        hint: "Слова I и like второй раз не нужны.",
        why: "I like tea and coffee. Глагол назван один раз.",
      },
      {
        id: "q-koroche-otmetit",
        kind: "hottext",
        outcome: "не повторять себя дважды: I work and study",
        prompt: "Отметь предложения, которые сократить нельзя.",
        parts: [
          { text: "I like tea and I like coffee.", selectable: true },
          { text: " · " },
          { text: "I like tea and she likes coffee.", selectable: true, correct: true },
          { text: " · " },
          { text: "He can swim and she can drive.", selectable: true, correct: true },
          { text: " · " },
          { text: "He can swim and he can drive.", selectable: true },
        ],
        hint: "Сокращают только там, где в обеих частях один человек.",
        why:
          "Нельзя сократить «I like tea and she likes coffee» и «He can swim and she " +
          "can drive»: люди в частях разные.",
      },

      // ---- итог 6 ----
      {
        id: "q-because-dopisat",
        kind: "gap",
        outcome: "называть причину: because",
        prompt: "Ты радуешься тому, что у тебя есть велосипед. Допиши недостающее слово.",
        before: "I am happy ",
        after: " I have got a bike.",
        answer: "because",
        hint: "Слово вводит причину.",
        why: "I am happy because I have got a bike. Сначала главное, потом причина.",
      },
      {
        id: "q-because-vybor",
        kind: "choice",
        outcome: "называть причину: because",
        prompt: "Ты не можешь прийти, потому что работаешь. Как сказать?",
        options: [
          { text: "Because I work I can't come." },
          { text: "I can't come because work." },
          { text: "I can't come because I work.", correct: true },
        ],
        hint: "Сначала главное, потом причина, и причина — полное предложение.",
        why:
          "I can't come because I work. После because нужно полное предложение: " +
          "I work.",
      },
      {
        id: "q-because-napisat",
        kind: "short",
        outcome: "называть причину: because",
        prompt:
          "Напиши, что тебе нравится этот магазин, потому что он рядом. Магазин — " +
          "this shop, рядом — near.",
        answer: "I like this shop because it is near.",
        accept: ["I like this shop because it's near."],
        hint: "После because идёт полное предложение.",
        why: "I like this shop because it is near. Обе части полные, у обеих свой глагол.",
      },

      // ---- итог 7 ----
      {
        id: "q-why-dopisat",
        kind: "gap",
        outcome: "спрашивать о причине: Why do you work here?",
        prompt: "Ты хочешь узнать, почему собеседник живёт здесь. Допиши недостающее слово.",
        before: "Why ",
        after: " you live here?",
        answer: "do",
        hint: "После вопросительного слова идёт то же, что во всех вопросах о делах.",
        why: "Why do you live here? После why идёт do.",
      },
      {
        id: "q-why-vybor",
        kind: "choice",
        outcome: "спрашивать о причине: Why do you work here?",
        prompt: "Ты хочешь узнать, почему твоя сестра любит этот магазин. Как спросить?",
        options: [
          { text: "Why she likes this shop?" },
          { text: "Why does she like this shop?", correct: true },
          { text: "Why does she likes this shop?" },
        ],
        hint: "О сестре идёт does, а окончание после него уже не нужно.",
        why:
          "Why does she like this shop? Окончание -s ушло в does, а без does вопрос " +
          "неполон.",
      },
      {
        id: "q-why-otvetit",
        kind: "short",
        outcome: "спрашивать о причине: Why do you work here?",
        prompt:
          "Тебя спросили: Why can't you come? Причина — ты работаешь. Ответь коротко, " +
          "начав с because.",
        answer: "Because I work.",
        hint: "Короткий ответ начинается с because.",
        why: "Because I work. В ответе на вопрос why слово because стоит первым.",
      },

      // ---- итог 8 ----
      {
        id: "q-svyaznyy-sobrat",
        kind: "order",
        outcome: "рассказывать связно, с причинами",
        prompt: "Собери рассказ: сначала что делаешь, потом причина, потом возражение.",
        items: [
          "I like my work but I don't like early mornings.",
          "I work in a shop.",
          "I work because I want money.",
        ],
        answer: [1, 2, 0],
        hint: "Порядок задан в условии.",
        why:
          "I work in a shop. I work because I want money. I like my work but I don't " +
          "like early mornings.",
      },
      {
        id: "q-svyaznyy-otmetit",
        kind: "hottext",
        outcome: "рассказывать связно, с причинами",
        prompt: "Отметь записи, где вместо and нужно but или because.",
        parts: [
          { text: "I work and I study.", selectable: true },
          { text: " · " },
          { text: "I like tea and I don't like coffee.", selectable: true, correct: true },
          { text: " · " },
          { text: "I am happy and I have got a bike.", selectable: true, correct: true },
          { text: " · " },
          { text: "I like music and I like sport.", selectable: true },
        ],
        hint: "Смотри на смысл: возражение или причина.",
        why:
          "Во втором нужно but: мысли спорят. В третьем нужно because: вторая часть " +
          "объясняет первую.",
      },
      {
        id: "q-svyaznyy-napisat",
        kind: "short",
        outcome: "рассказывать связно, с причинами",
        prompt:
          "Напиши два предложения: ты работаешь в магазине и учишься; ты учишься, " +
          "потому что хочешь хорошую работу. Хорошая работа — a good job.",
        answer: "I work in a shop and I study. I study because I want a good job.",
        accept: [
          "I work in a shop and study. I study because I want a good job.",
        ],
        hint: "В первом and, во втором because.",
        why:
          "I work in a shop and I study. I study because I want a good job. Годится " +
          "и короткая запись I work in a shop and study.",
      },
    ],
  },
};

export default module;
