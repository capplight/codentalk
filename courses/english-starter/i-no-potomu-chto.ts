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
 * ПРО ЗАПЯТУЮ. Правило дал владелец, оно записано в docs/punktuaciya.md:
 * перед сочинительным союзом ставится запятая, когда он соединяет ДВА ПОЛНЫХ
 * предложения. I work, and I study. I work, but I don't study. Если второй
 * части не хватает до предложения — запятой нет: I work and study, tea and
 * coffee. Придаточное с `because` запятой не требует.
 *
 * Две прежние редакции модуля были неверны обе. Первая объявляла запятую
 * ошибкой; я убрал утверждение, но оставил «по-английски она не нужна» — а это
 * тоже неправда для двух полных предложений. Верное правило пришло от
 * владельца, и по нему модуль переписан целиком: 130 мест.
 *
 * В перечислении запятые свои, и урок 2 разводит эти два случая.
 *
 * ВТОРАЯ ОПАСНОСТЬ — `because` в начале ответа. По-русски на вопрос «почему»
 * отвечают «потому что…», и это целый ответ. По-английски `because` тоже
 * годится в ответе, но в письме источник ставит его ПОСЛЕ главного
 * предложения: «I love her because she is friendly».
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Все пять союзов стоят на A1. Форма вопроса
 * `Why do you work here?` — выше ступени, она объявлена ниже отдельно.
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
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ И ОБЪЯВЛЕНО:
 *
 * — ФОРМА ВОПРОСА `Why do you work here?` — A2, английский профиль, QUESTIONS
 *   wh-, «FORM: WITH AUXILIARY 'DO'»: «Can use 'wh-'words + auxiliary 'do' +
 *   subject + main verb to form 'wh-'questions», пример источника — «What do
 *   you think?». Вопросов с вопросительным словом на A1 в профиле нет ни
 *   одного: подкатегория QUESTIONS wh- начинается сразу с A2.
 *
 *   ПОЧЕМУ ВЗЯТО: сама эта форма уже введена в модуле 16 «Спросить о делах» и
 *   там же объявлена взятой сверх ступени. Здесь к ней добавляется только новое
 *   слово `why`, которое в словнике стоит на A1. Без вопроса о причине урок про
 *   `because` остаётся половинчатым: назвать причину ученик умеет, а спросить
 *   о ней — нет.
 *
 *   ЗАПИСАНО ПОСЛЕ РАЗБОРА. Сначала шапка утверждала, что модуль не берёт
 *   ничего сверх A1. Это неверно, и это третий модуль подряд, где шапка врала о
 *   ступени. Проверять надо не слово, а конструкцию, в которой оно стоит:
 *   словник подтверждает `why adv. A1`, но о форме вопроса он не говорит
 *   ничего.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — ВОПРОСА `Why can't you come?`. Он стоял в таблице, в примере и в
 *   проверочной работе, а это B1: английский профиль, QUESTIONS wh-, «FORM:
 *   NEGATIVE QUESTIONS WITH MODALS», пример источника — «Why can't you do both
 *   things?». Хуже ступени было другое: урок объясняет «после why идёт do», а
 *   эта строка ему прямо противоречила и ничего не поясняла. Убран отовсюду.
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
        "A2, QUESTIONS wh-, «FORM: WITH AUXILIARY 'DO'»: «Can use 'wh-'words + " +
        "auxiliary 'do' + subject + main verb to form 'wh-'questions», пример " +
        "источника — «What do you think?» — это форма вопроса Why do you work here?, " +
        "взята сверх ступени и объявлена в шапке; та же форма уже введена в модуле 16",
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
    "соединять два предложения: I work, and I study",
    "перечислять через запятую: tea, coffee and water",
    "противопоставлять: I work, but I don't study",
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
      title: "И: I work, and I study",
      estimatedMinutes: 12,
      outcome: "соединять два предложения: I work, and I study",

      blocks: [
        {
          id: "zachem-and",
          kind: "explain",
          text: [
            "До сих пор весь курс шёл отдельными предложениями: I work. I study.",
            "Так говорят редко: два коротких предложения подряд звучат рублено.",
            "Их соединяют словом and: I work, and I study.",
          ],
        },
        {
          id: "tablica-and",
          kind: "table",
          caption: "Порознь и вместе",
          head: ["Порознь", "Вместе"],
          rows: [
            ["I work. I study.", "I work, and I study."],
            ["I like tea. I like coffee.", "I like tea, and I like coffee."],
            ["She is a teacher. He is a doctor.", "She is a teacher, and he is a doctor."],
          ],
        },
        {
          id: "zapyataya-pered-and",
          kind: "explain",
          text: [
            "По-русски перед «и» в таком предложении запятая обязательна: «я " +
              "работаю, и я учусь».",
            "По-английски она тоже нужна: I work, and I study.",
            "Запятая стоит перед and, когда по обе стороны — полные предложения.",
          ],
        },
        {
          id: "zapyataya-ne-vsegda",
          kind: "note",
          tone: "info",
          text:
            "Запятая нужна не перед каждым and.\n\nВ «tea and coffee» соединены два " +
            "слова, а не два предложения, и запятой там нет.",
        },
        {
          id: "primer-and",
          kind: "example",
          caption: "Три соединённых предложения",
          text: "I work, and I study.\nShe can swim, and she can drive.\nI like music, and I like sport.",
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
          transcript: "I work, and I study. She can swim, and she can drive. I like music, and I like sport.",
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
          before: "I work, ",
          after: " I study.",
          answer: "and",
          hint: "Слово соединяет две мысли.",
          why: "I work, and I study. По бокам от and — две полные мысли.",
        },
        {
          id: "z2-soedinit-dve-mysli",
          kind: "choice",
          prompt: "Ты любишь чай и любишь кофе. Как соединить это в одно предложение?",
          options: [
            { text: "I like tea, and I coffee." },
            { text: "I like tea, and I like coffee.", correct: true },
            { text: "I like tea. I like coffee." },
          ],
          hint: "Обе части должны остаться полными.",
          why:
            "I like tea, and I like coffee. У каждой части свой глагол. В первой " +
            "записи глагол потерян, а третья верна, но это по-прежнему два " +
            "предложения.",
        },
        {
          id: "z3-otmetit-dva-predlozheniya",
          kind: "hottext",
          prompt: "Отметь записи, где and соединяет два полных предложения.",
          parts: [
            { text: "I work, and I study.", selectable: true, correct: true },
            { text: " · " },
            { text: "tea and coffee", selectable: true },
            { text: " · " },
            { text: "She can swim, and she can drive.", selectable: true, correct: true },
            { text: " · " },
            { text: "Alim and Dana", selectable: true },
          ],
          hint: "Полная мысль — та, у которой есть свой глагол.",
          why:
            "I work, and I study и She can swim, and she can drive — по бокам от and " +
            "полные мысли. Tea and coffee и Alim and Dana соединяют только слова.",
        },
        {
          id: "z4-sobrat-and",
          kind: "order",
          prompt: "Собери предложение: «Я живу здесь и я работаю здесь.»",
          items: ["I work here.", "and", "I live here,"],
          answer: [2, 1, 0],
          hint: "Слово and стоит посередине.",
          why: "I live here, and I work here. По бокам от and — две полные мысли.",
        },
        {
          id: "z5-napisat-and",
          kind: "short",
          prompt: "Напиши, что ты умеешь плавать и умеешь водить машину. Плавать — swim, водить — drive.",
          answer: "I can swim, and I can drive.",
          hint: "Соедини две мысли словом and.",
          why: "I can swim, and I can drive. Перед and стоит запятая: по обе стороны полные предложения.",
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
            "Здесь запятые стоят между вещами, а не перед and.",
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
            "В каждом перечислении одна запятая и одно and — перед последней вещью. " +
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
          prompt: "Отметь перечисления, где между вещами запятые, а перед последней — and.",
          parts: [
            { text: "tea, coffee and milk", selectable: true, correct: true },
            { text: " · " },
            { text: "tea and coffee and milk", selectable: true },
            { text: " · " },
            { text: "bread, water, rice", selectable: true },
            { text: " · " },
            { text: "bread, water and rice", selectable: true, correct: true },
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
      title: "Но: I work, but I don't study",
      estimatedMinutes: 12,
      outcome: "противопоставлять: I work, but I don't study",

      blocks: [
        {
          id: "zachem-but",
          kind: "explain",
          text: [
            "Иногда вторая мысль не добавляется к первой, а спорит с ней.",
            "«Я работаю, но не учусь» — здесь and не годится вовсе.",
            "Для спора берут but: I work, but I don't study.",
          ],
        },
        {
          id: "tablica-and-i-but",
          kind: "table",
          caption: "Когда and, а когда but",
          head: ["Английский", "Перевод", "Что делает"],
          rows: [
            ["I work, and I study.", "Я работаю и учусь.", "добавляет"],
            ["I work, but I don't study.", "Я работаю, но не учусь.", "спорит"],
            ["I like tea, but I don't like coffee.", "Я люблю чай, но не люблю кофе.", "спорит"],
          ],
        },
        {
          id: "zapyataya-pered-but",
          kind: "explain",
          text: [
            "По-русски перед «но» запятая обязательна.",
            "По-английски она тоже стоит: I work, but I don't study.",
            "Правило то же, что с and: две полные части — значит запятая.",
          ],
        },
        {
          id: "ne-and-vmesto-but",
          kind: "note",
          tone: "mistake",
          text:
            "«I like tea, and I don't like coffee» — здесь нужно but.\n\nВторая мысль " +
            "спорит с первой, а and для спора не годится.",
        },
        {
          id: "primer-but",
          kind: "example",
          caption: "Три противопоставления",
          text:
            "I work, but I don't study.\nShe can drive, but she can't swim.\nI like tea, but I don't like coffee.",
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
          transcript: "I work, but I don't study. She can drive, but she can't swim. I like tea, but I don't like coffee.",
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
          before: "I work, ",
          after: " I don't study.",
          answer: "but",
          hint: "Вторая мысль спорит с первой.",
          why: "I work, but I don't study. Для спора берут but, а не and.",
        },
        {
          id: "z2-vybrat-and-ili-but",
          kind: "choice",
          prompt: "Ты умеешь водить машину, но не умеешь плавать. Как сказать?",
          options: [
            { text: "I can drive, and I can't swim." },
            { text: "I can drive, but I can't swim.", correct: true },
            { text: "I can drive, but I don't can swim." },
          ],
          hint: "Части спорят между собой, а слово can обходится без помощников.",
          why:
            "I can drive, but I can't swim. Слово and здесь не годится: мысли спорят. " +
            "А can отрицают через can't, слово don't ему не нужно.",
        },
        {
          id: "z3-otmetit-and-vmesto-but",
          kind: "hottext",
          prompt: "Отметь записи, где вторая мысль спорит с первой.",
          parts: [
            { text: "I like tea, and I like coffee.", selectable: true },
            { text: " · " },
            { text: "I like tea, and I don't like coffee.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim, and she can't drive.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim, and she can drive.", selectable: true },
          ],
          hint: "Спор виден по отрицанию во второй части.",
          why:
            "Спорят «I like tea, and I don't like coffee» и «She can swim, and she " +
            "can't drive». В таких предложениях яснее звучит but: I like tea, but I " +
            "don't like coffee.",
        },
        {
          id: "z4-sobrat-but",
          kind: "order",
          prompt: "Собери предложение: «Я люблю чай, но не люблю кофе.»",
          items: ["I don't like coffee.", "I like tea,", "but"],
          answer: [1, 2, 0],
          hint: "Слово but стоит посередине.",
          why: "I like tea, but I don't like coffee. По бокам от but — две полные мысли.",
        },
        {
          id: "z5-napisat-but",
          kind: "short",
          prompt:
            "Напиши, что твоя сестра умеет водить машину, но не умеет плавать. " +
            "Сестра — my sister.",
          answer: "My sister can drive, but she can't swim.",
          accept: ["My sister can drive, but she cannot swim."],
          hint: "Во второй части имя не повторяй — поставь she.",
          why:
            "My sister can drive, but she can't swim. Во второй части стоит she: имя " +
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
            ["but", "спорит", "I like tea, but I don't like coffee."],
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
            "сложнее.\n\nПока хватит того, чтобы предлагать выбор утверждением.",
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
            "В предложении «I work, and I study» слово I стоит дважды.",
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
            ["I work, and I study.", "I work and study."],
            ["She likes music, and she likes films.", "She likes music and films."],
            ["I can swim, and I can drive.", "I can swim and drive."],
          ],
        },
        {
          id: "kogda-mozhno-ubrat",
          kind: "explain",
          text: [
            "Убирать можно только тогда, когда во второй части тот же человек.",
            "Если повторяется ещё и can, убирают и его: I can swim, and I can " +
              "drive — I can swim and drive.",
            "Проверь себя так: если после сокращения непонятно, кто делает, — не " +
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
          text: "I work, and I study.\nI work and study.\nI work, and she studies.",
          explain:
            "Первые две строки значат одно. Третью сокращать нельзя: во второй части " +
            "другой человек — she, и это слово не убрать, иначе непонятно, кто " +
            "учится.",
        },
        {
          id: "zapis-koroche",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай длинную и короткую запись",
          transcript: "I work, and I study. I work and study.",
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
            { text: "I work, and I study." },
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
            { text: "I work, and I study.", selectable: true },
            { text: " · " },
            { text: "I work, and she studies.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can swim, and she can drive.", selectable: true },
            { text: " · " },
            { text: "She can swim, and he can drive.", selectable: true, correct: true },
          ],
          hint: "Сокращают только там, где в обеих частях один человек.",
          why:
            "Нельзя сократить «I work, and she studies» и «She can swim, and he can " +
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
          prompt: "Напиши короче: I like tea, and I like coffee.",
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
            "По-русски перед «потому что» запятая обязательна.\n\nА перед because " +
            "запятой нет: I work because I like it. Тут правило другое, чем у and " +
            "и but.",
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
            ["Why does she live here?", "Because she works in this shop."],
            ["Why are you happy?", "Because I have got a bike."],
          ],
        },
        {
          id: "otvet-s-because",
          kind: "explain",
          text: [
            "На вопрос why отвечают с because — и здесь оно стоит первым.",
            // Было «единственный случай, когда because начинает мысль» — это
            // неправда о языке: «Because it is near, I like this shop» тоже
            // говорят. Ограничение наше, курсовое, а не английское.
            "В остальных предложениях мы ставим because после главной части.",
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
            "— Why do you work here?\n— Because I like this shop.\n— Why does Dana work here?\n— Because she likes this shop too.",
          explain:
            "В первом вопросе после why стоит do, во втором — does: речь о Dana. В " +
            "ответах because стоит первым — так отвечают коротко.",
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
          prompt: "Отметь вопросы, где потеряно do или does.",
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
            "Собеседник спросил, как ты живёшь. Ты отвечаешь: I work. I study. I " +
              "want a good job.",
            "Три предложения подряд звучат как список дел, и связи между ними не " +
              "слышно.",
            "Соединишь их — и получится рассказ.",
          ],
        },
        {
          id: "tablica-spisok-i-rasskaz",
          kind: "table",
          caption: "Список и рассказ",
          head: ["Список", "Рассказ"],
          rows: [
            ["I work. I study.", "I work, and I study."],
            [
              "I like my work. I don't like early mornings.",
              "I like my work, but I don't like early mornings.",
            ],
            ["I study. I want a good job.", "I study because I want a good job."],
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
            "I work in a shop, and I study at a university.\nI like my work, but I don't like early mornings.\nI study because I want a good job.",
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
            "I work in a shop, and I study at a university. I like my work, but I don't like early mornings.",
        },
        {
          id: "svyazi-i-v-razgovore",
          kind: "note",
          tone: "info",
          text:
            "Те же слова держат и разговор, а не только рассказ.\n\nНа вопрос " +
            "отвечай не одним словом, а с причиной: Yes, I do because I like it.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-svyaznyy-rasskaz",
          kind: "order",
          prompt: "Собери рассказ: сначала что делаешь, потом возражение, потом причина.",
          items: [
            "I study because I want a good job.",
            "I work, and I study.",
            "I like my work, but I don't like early mornings.",
          ],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии.",
          why:
            "I work, and I study. I like my work, but I don't like early mornings. " +
            "I study because I want a good job.",
        },
        {
          id: "z2-napisat-s-and-i-but",
          kind: "short",
          prompt:
            "Напиши два предложения: ты работаешь и учишься; тебе нравится работа, " +
            "но не нравится рано вставать. Рано вставать — early mornings.",
          answer: "I work, and I study. I like my work, but I don't like early mornings.",
          accept: [
            "I work and study. I like my work, but I don't like early mornings.",
          ],
          hint: "В первом and, во втором but.",
          why:
            "I work, and I study. I like my work, but I don't like early mornings. " +
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
          prompt: "Отметь записи, где вторая часть спорит с первой или объясняет её.",
          parts: [
            { text: "I work, and I study.", selectable: true },
            { text: " · " },
            { text: "I like my work, and I don't like early mornings.", selectable: true, correct: true },
            { text: " · " },
            { text: "I study, and I want a good job.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like tea, and I like coffee.", selectable: true },
          ],
          hint: "Смотри на смысл: возражение или причина.",
          why:
            "Во втором части спорят — там яснее звучит but. В третьем вторая часть " +
            "объясняет первую — там просится because.",
        },
        {
          id: "z5-rasskaz-vsluh-svyaznyy",
          kind: "speak",
          prompt: "Расскажи вслух о себе: три предложения со словами and, but и because.",
          phrase:
            "I work, and I study. I like my work, but I don't like early mornings. I study because I want a good job.",
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
      // Работа написана заново, отдельно от уроков. Первая её редакция была
      // зеркалом: девятнадцать подсказок из двадцати четырёх совпадали с
      // урочными дословно, менялось одно слово в условии. Здесь другие углы —
      // исправить чужую запись, сосчитать союзы, узнать связку по смыслу,
      // ответить на вопрос, собрать другой рассказ.

      // ---- итог 1 ----
      {
        id: "q-soedinit-dva-predlozheniya",
        kind: "short",
        outcome: "соединять два предложения: I work, and I study",
        prompt: "Друг написал два предложения: I live here. I work here. Соедини их в одно.",
        answer: "I live here, and I work here.",
        accept: ["I live here and work here."],
        hint: "Обе части остаются полными.",
        why:
          "I live here, and I work here. Годится и короткая запись I live here and " +
          "work here.",
      },
      {
        id: "q-dva-cheloveka-v-odnom",
        kind: "choice",
        outcome: "соединять два предложения: I work, and I study",
        prompt: "Она учительница, он врач. Как сказать это одним предложением?",
        options: [
          { text: "She is a teacher, and he is a doctor.", correct: true },
          { text: "She is a teacher and doctor." },
          { text: "She and he are a teacher and a doctor." },
        ],
        hint: "Люди разные, поэтому обе части остаются целыми.",
        why:
          "She is a teacher, and he is a doctor. Вторая запись выходит про одного " +
          "человека сразу с двумя занятиями, а в третьей потерялось, кто есть кто.",
      },
      {
        id: "q-skolko-predlozheniy",
        kind: "hottext",
        outcome: "соединять два предложения: I work, and I study",
        prompt: "Отметь записи, в которых одно предложение, а не два.",
        parts: [
          { text: "I work. I study.", selectable: true },
          { text: " · " },
          { text: "I work, and I study.", selectable: true, correct: true },
          { text: " · " },
          { text: "She can swim, and she can drive.", selectable: true, correct: true },
          { text: " · " },
          { text: "I like tea. I like coffee.", selectable: true },
        ],
        hint: "Считай точки.",
        why:
          "Одно предложение в I work, and I study и She can swim, and she can drive: " +
          "в каждом одна точка. В двух других записях предложений по два.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-perechislenie",
        kind: "short",
        outcome: "перечислять через запятую: tea, coffee and water",
        prompt: "Друг перечислил напитки так: tea and coffee and milk. Запиши то же перечисление через запятую.",
        answer: "tea, coffee and milk",
        hint: "В списке and стоит один раз — перед последней вещью.",
        why: "Tea, coffee and milk. Между первыми двумя запятая, and — перед последней.",
      },
      {
        id: "q-skolko-and",
        kind: "hottext",
        outcome: "перечислять через запятую: tea, coffee and water",
        prompt: "Отметь перечисления, где слово and стоит один раз.",
        // Три строки из четырёх были дословно теми же, что в задании урока.
        // Взяты другие продукты.
        parts: [
          { text: "milk, cake and food", selectable: true, correct: true },
          { text: " · " },
          { text: "milk and cake and food", selectable: true },
          { text: " · " },
          { text: "water, rice and meat", selectable: true, correct: true },
          { text: " · " },
          { text: "water and rice and meat", selectable: true },
        ],
        hint: "Сосчитай, сколько раз встретилось and.",
        why:
          "В bread, water and rice и tea, coffee and milk слово and стоит один раз — " +
          "перед последней вещью.",
      },
      {
        id: "q-perechislit-dela",
        kind: "gap",
        outcome: "перечислять через запятую: tea, coffee and water",
        prompt: "Ты умеешь плавать, водить машину и рисовать. Допиши недостающее слово.",
        before: "I can swim, drive ",
        after: " draw.",
        answer: "and",
        hint: "Перед последним делом стоит соединяющее слово.",
        why: "I can swim, drive and draw. Дела перечисляют так же, как вещи.",
      },

      // ---- итог 3 ----
      {
        id: "q-zamenit-na-but",
        kind: "short",
        outcome: "противопоставлять: I work, but I don't study",
        prompt:
          "Друг написал: I like my work, and I don't like early mornings. " +
          "Замени соединение так, чтобы спор был слышен.",
        answer: "I like my work, but I don't like early mornings.",
        hint: "Меняется одно слово.",
        why:
          "I like my work, but I don't like early mornings. Слово but показывает, что " +
          "части спорят.",
      },
      {
        id: "q-sopostavit-spor",
        kind: "match",
        outcome: "противопоставлять: I work, but I don't study",
        prompt: "Сопоставь начало и продолжение, которое с ним спорит.",
        left: ["I like tea,", "She can swim,", "I work,"],
        right: ["but she can't drive.", "but I don't study.", "but I don't like coffee."],
        answer: [2, 0, 1],
        hint: "Продолжение всегда отрицает то, о чём начало говорит.",
        why:
          "I like tea, but I don't like coffee. She can swim, but she can't drive. " +
          "I work, but I don't study.",
      },
      {
        id: "q-brat-sport-i-muzyka",
        kind: "short",
        outcome: "противопоставлять: I work, but I don't study",
        prompt:
          "Напиши, что твой брат любит спорт, но не любит музыку. Брат — my brother, " +
          "спорт — sport, музыка — music.",
        answer: "My brother likes sport, but he doesn't like music.",
        accept: ["My brother likes sport, but he does not like music."],
        hint: "Речь о брате, поэтому у глагола появится окончание.",
        why:
          "My brother likes sport, but he doesn't like music. Во второй части стоит " +
          "he: имя уже названо.",
      },

      // ---- итог 4 ----
      {
        id: "q-dva-dnya-na-vybor",
        kind: "choice",
        outcome: "давать выбор: tea or coffee",
        prompt: "Ты можешь прийти в понедельник, а можешь во вторник — на выбор. Как сказать?",
        options: [
          { text: "Monday and Tuesday." },
          { text: "Monday or Tuesday.", correct: true },
          { text: "Monday but Tuesday." },
        ],
        hint: "Нужен один день из двух, а не оба сразу.",
        why:
          "Monday or Tuesday. Слово and взяло бы оба дня сразу, а but здесь не о чем " +
          "спорить.",
      },
      {
        id: "q-oba-srazu",
        kind: "gap",
        outcome: "давать выбор: tea or coffee",
        prompt: "Ты берёшь в магазине и хлеб, и молоко — оба сразу. Допиши недостающее слово.",
        before: "I'd like some bread ",
        after: " some milk.",
        answer: "and",
        hint: "Выбора здесь нет: нужно и то и другое.",
        why: "I'd like some bread and some milk. Слово or оставило бы выбор одного.",
      },
      {
        id: "q-predlozhit-dva-napitka",
        kind: "short",
        outcome: "давать выбор: tea or coffee",
        prompt: "Предложи собеседнику на выбор воду или чай. Вода — water, чай — tea.",
        answer: "Water or tea.",
        hint: "Между напитками стоит слово выбора.",
        why: "Water or tea. Собеседник возьмёт что-то одно.",
      },

      // ---- итог 5 ----
      {
        id: "q-korotkaya-zapis-bez-poter",
        kind: "hottext",
        outcome: "не повторять себя дважды: I work and study",
        prompt: "Отметь короткие записи, в которых ничего не сломано.",
        parts: [
          { text: "I work and study.", selectable: true, correct: true },
          { text: " · " },
          { text: "I work and studies.", selectable: true },
          { text: " · " },
          { text: "She can swim and drive.", selectable: true, correct: true },
          { text: " · " },
          { text: "She can swim and drives.", selectable: true },
        ],
        hint: "Окончание во второй части здесь лишнее.",
        why:
          "I work and study и She can swim and drive. В двух других записях у второго " +
          "глагола осталось окончание, которого там быть не должно.",
      },
      {
        id: "q-dana-muzyka-i-filmy",
        kind: "choice",
        outcome: "не повторять себя дважды: I work and study",
        prompt: "Дана любит музыку и любит фильмы. Как сказать это короче?",
        options: [
          { text: "Dana likes music and like films." },
          { text: "Dana likes music, and she likes films." },
          { text: "Dana likes music and films.", correct: true },
        ],
        hint: "Глагол называют один раз.",
        why:
          "Dana likes music and films. В первой записи у второго глагола сломано " +
          "окончание. Вторая запись верна, но не короче: в ней и Dana, и likes " +
          "названы дважды.",
      },
      {
        id: "q-napisat-koroche-hleb-i-ris",
        kind: "short",
        outcome: "не повторять себя дважды: I work and study",
        prompt: "Напиши короче: I like bread, and I like rice.",
        answer: "I like bread and rice.",
        hint: "То, что сказано дважды, назови один раз.",
        why: "I like bread and rice. Раз действие одно и то же, and соединяет уже не предложения, а два продукта.",
      },

      // ---- итог 6 ----
      {
        id: "q-otvetit-prichinoy-celikom",
        kind: "short",
        outcome: "называть причину: because",
        prompt:
          "Собеседник спросил, почему ты работаешь здесь. Причина — магазин рядом. " +
          "Ответь целым предложением.",
        answer: "I work here because this shop is near.",
        accept: ["I work here because it is near."],
        hint: "Главное стоит первым, because — вторым.",
        why:
          "I work here because this shop is near. Годится и короткое I work here " +
          "because it is near.",
      },
      {
        id: "q-otmetit-prichinu",
        kind: "hottext",
        outcome: "называть причину: because",
        prompt: "Отметь предложения, в которых названа причина.",
        parts: [
          { text: "I can't come because I work.", selectable: true, correct: true },
          { text: " · " },
          { text: "I like tea, and I like coffee.", selectable: true },
          { text: " · " },
          { text: "She is happy because she has got a bike.", selectable: true, correct: true },
          { text: " · " },
          { text: "I work, but I don't study.", selectable: true },
        ],
        hint: "Причину вводит одно слово.",
        why:
          "Причина названа в I can't come because I work и She is happy because she " +
          "has got a bike. В двух других предложениях части добавляют и спорят.",
      },
      {
        id: "q-dopisat-prichinu-dana",
        kind: "gap",
        outcome: "называть причину: because",
        prompt: "Дана любит этот магазин. Причина — он рядом. Допиши недостающее слово.",
        before: "Dana likes this shop ",
        after: " it is near.",
        answer: "because",
        hint: "Вторая часть отвечает на вопрос «почему».",
        why: "Dana likes this shop because it is near. Причина идёт второй частью.",
      },

      // ---- итог 7 ----
      {
        id: "q-ispravit-vopros-why",
        kind: "short",
        outcome: "спрашивать о причине: Why do you work here?",
        prompt: "Друг написал: Why you like this shop? Напиши этот вопрос без ошибки.",
        answer: "Why do you like this shop?",
        hint: "Не хватает одного слова.",
        why: "Why do you like this shop? После why идёт do.",
      },
      {
        id: "q-vopros-o-dane",
        kind: "choice",
        outcome: "спрашивать о причине: Why do you work here?",
        prompt: "Ты хочешь узнать, почему Дана учится. Как спросить?",
        options: [
          { text: "Why Dana studies?" },
          { text: "Why does Dana study?", correct: true },
          { text: "Why does Dana studies?" },
        ],
        hint: "Окончание уходит в does.",
        why:
          "Why does Dana study? Окончание -s ушло в does, поэтому у глагола его уже " +
          "нет, а без does вопрос неполон.",
      },
      {
        id: "q-why-otvetit",
        kind: "short",
        outcome: "спрашивать о причине: Why do you work here?",
        prompt:
          "Тебя спросили: Why do you live here? Причина — здесь твоя работа. Ответь " +
          "коротко, начав с because.",
        answer: "Because I work here.",
        accept: ["I live here because I work here."],
        hint: "Ответ на вопрос why начинается с because.",
        why: "Because I work here. Полный ответ I live here because I work here тоже верен.",
      },

      // ---- итог 8 ----
      {
        id: "q-sobrat-rasskaz-o-rabote",
        kind: "order",
        outcome: "рассказывать связно, с причинами",
        prompt:
          "Собери рассказ: сначала где работаешь, потом почему тебе там нравится, " +
          "потом чего не хватает.",
        items: [
          "I like this shop because it is near.",
          "I work in a shop.",
          "I like my work, but I want a good job.",
        ],
        answer: [1, 0, 2],
        hint: "Первым идёт само дело, причина — за ним.",
        why:
          "I work in a shop. I like this shop because it is near. I like my work, " +
          "but I want a good job.",
      },
      {
        id: "q-dva-predlozheniya-o-sebe",
        kind: "short",
        outcome: "рассказывать связно, с причинами",
        // Оба предложения были сквозными примерами модуля: «I work, and I study» —
        // это подзаголовок первого урока, он повторяется больше десяти раз, а
        // «I like tea, but I don't like coffee» — второй по частоте пример. Ученик
        // писал заученное. Взяты другие дела и другие вкусы. И в accept не хватало
        // четвёртой связки — короткой записи с полным do not. Нашёл методист.
        prompt:
          "Напиши два предложения о себе: ты читаешь и рисуешь; ты любишь музыку, но " +
          "не любишь спорт.",
        answer: "I read, and I draw. I like music, but I don't like sport.",
        accept: [
          "I read and draw. I like music, but I don't like sport.",
          "I read, and I draw. I like music, but I do not like sport.",
          "I read and draw. I like music, but I do not like sport.",
        ],
        hint: "Первое предложение соединяет, второе спорит.",
        why:
          "I read, and I draw. I like music, but I don't like sport. Запятая стоит там, " +
          "где соединяющее слово стоит между двумя целыми предложениями. Короткая запись " +
          "I read and draw тоже принимается.",
      },
      {
        id: "q-vybrat-svyazku-v-rasskaze",
        kind: "choice",
        outcome: "рассказывать связно, с причинами",
        // Здесь стояло «I don't like early mornings ___ I work in the morning», и
        // ошибкой объявлялось but — а «не люблю раннее утро, но работаю по утрам»
        // такое же верное предложение. Условие не задавало, причина это или спор.
        // Взят случай, где вторая часть может быть только причиной. Нашёл методист.
        prompt:
          "В рассказе не хватает слова: I like this shop ___ it is near my home. " +
          "Какое слово подойдёт?",
        options: [
          { text: "but" },
          { text: "or" },
          { text: "because", correct: true },
        ],
        hint: "Спроси себя: вторая часть спорит, предлагает выбор или отвечает «почему»?",
        why:
          "I like this shop because it is near my home. Вторая часть — причина, а не " +
          "спор и не выбор.",
      },
    ],
  },
};

export default module;
