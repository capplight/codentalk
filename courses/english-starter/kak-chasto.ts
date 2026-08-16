import type { Module } from "@/lib/content/types";

/**
 * Модуль 17 курса «Английский с нуля»: как часто.
 *
 * Программа: docs/programma-english-starter.md, модуль 17 — «говорить,
 * насколько часто что-то происходит»; грамматика: наречия частоты и их место в
 * предложении.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. МЕСТО НАРЕЧИЯ — A1, и это главное правило модуля. English Grammar
 *    Profile, ADVERBS position, «FORM: FREQUENCY, MID POSITION»: «Can use
 *    frequency adverbs in the usual mid position, between the subject and the
 *    main verb», пример источника — «In my free time I always listen to music,
 *    watch TV, clean my room».
 *
 * 2. СЛОВА `always` и `sometimes` — A1 названы поимённо. ADVERBS, «USE:
 *    FREQUENCY», A1: «Can use a limited range of adverbs ('always',
 *    'sometimes') to talk about frequency».
 *
 * 3. Слова модуля — Oxford 3000, все A1: morning, evening, weekend, music,
 *    coffee, film, gym, park, late, early, together.
 *
 * РАСХОЖДЕНИЕ ИСТОЧНИКОВ, О КОТОРОМ НАДО ЗНАТЬ: слова `usually`, `often`,
 * `never`.
 *
 * — English Grammar Profile кладёт их на A2: ADVERBS, «USE: FREQUENCY», A2 —
 *   «Can use an increasing range of adverbs ('usually', 'often', 'never',
 *   'weekly') to talk about frequency», пример — «People usually try to eat
 *   their breakfast between 7 and 9 am».
 * — Oxford 3000 даёт все три как A1: «usually adv. A1», «often adv. A1»,
 *   «never adv. A1».
 * — Cambridge, с. 52, список «что нового на A1 Movers», строка «Adverbs» —
 *   «She never eats meat». То есть наречие частоты в нужном месте и со словом
 *   never стоит на A1.
 *
 * СЧЁТ РАЗНЫЙ ДЛЯ РАЗНЫХ СЛОВ, и это поправка методиста. У `never` два
 * источника из трёх за A1: Oxford 3000 и Cambridge против английского
 * профиля. А `usually` и `often` у Cambridge НЕ НАЗВАНЫ ВОВСЕ — ни в
 * грамматическом списке, ни в тематическом словнике (с. 83, графа Time).
 * Значит у них счёт один на один, а третий источник молчит. Взяты они
 * потому, что без них нет средней частоты: между «всегда» и «иногда»
 * зияет дыра. Это тот же случай, что
 * п. 1.19 в задачах владельца: словники и профиль меряют разное — профиль
 * описывает, СКОЛЬКИМИ наречиями ученик владеет, а словник — само слово.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ:
 *
 * — НАРЕЧИЕ ПОСЛЕ ФОРМЫ be — «I am always busy» (урок 4). Строка A1 описывает
 *   только место между тем, о ком речь, и главным глаголом. Место после формы
 *   be названо ступенью выше: ADVERBS position, A2, «FORM: MID POSITION» —
 *   «Can use adverbs in mid position between the subject and the main verb and
 *   after modal verbs, auxiliary verbs and 'be'».
 *
 *   ПОЧЕМУ ВЗЯТО: без этого правило модуля даёт ученику неверную фразу. Он
 *   выучил «наречие перед глаголом», знает I am busy — и складывает «I always
 *   am busy». Правило, которое ломается на первом же знакомом предложении,
 *   хуже, чем правило с оговоркой.
 *
 * — НАРЕЧИЕ В ОТРИЦАНИИ — «I don't usually work on Sunday» (урок 5). Та же
 *   строка A2: наречие после вспомогательного глагола. Взято по той же
 *   причине: ученик умеет строить отрицание с модуля 15 и складывает два
 *   умения сам, а порядок в них разный.
 *
 * ЧЕГО В МОДУЛЕ НЕТ:
 *
 * — ВОПРОС `How often…?` Просто потому, что программа его не называет:
 *   модуль учит говорить о частоте, а не спрашивать о ней. ПЕРВАЯ РЕДАКЦИЯ
 *   ПИСАЛА ЗДЕСЬ, что вопросы с how стоят на B1. Это неправда: строки про
 *   how often в источнике нет вовсе, а B1 относится к графе об определителях
 *   при существительном. Цитата была из чужой графы — нашёл методист.
 *
 * — НАРЕЧИЯ В НАЧАЛЕ И В КОНЦЕ предложения — «Sometimes I work on Sunday».
 *   Такое место есть и оно законно, но описано отдельными строками (ADVERBS
 *   position, «FORM: FRONT POSITION» и «FORM: END POSITION»), а два места
 *   сразу для одного слова начинающего сбивают. Модуль даёт одно место.
 */
const module: Module = {
  slug: "kak-chasto",
  title: "Как часто",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, ADVERBS position, «FORM: FREQUENCY, MID POSITION»: «Can use frequency " +
        "adverbs in the usual mid position, between the subject and the main verb», " +
        "пример источника — «In my free time I always listen to music, watch TV, clean " +
        "my room». Это главное правило модуля. " +
        "A1, ADVERBS «USE: FREQUENCY»: «Can use a limited range of adverbs ('always', " +
        "'sometimes') to talk about frequency». " +
        "A2, ADVERBS «USE: FREQUENCY»: «Can use an increasing range of adverbs " +
        "('usually', 'often', 'never', 'weekly') to talk about frequency» — отсюда " +
        "расхождение со словником, см. шапку модуля. " +
        "A2, ADVERBS position, «FORM: MID POSITION»: «Can use adverbs in mid position " +
        "between the subject and the main verb and after modal verbs, auxiliary verbs " +
        "and 'be'» — это ступень уроков 4 и 5, взята сверх и объявлена",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 52, список «что нового на A1 Movers», строка «Adverbs» — «She never eats " +
        "meat.», «He sang loudly.», «My mother talks a lot.». Первый пример даёт и " +
        "слово never, и место наречия между тем, о ком речь, и глаголом. " +
        "с. 29, список Pre A1 Starters, строка «Adverbs» — «I'm colouring it now.», «My " +
        "grandma lives here.», «She lives here too.»: на самой низкой ступени наречия " +
        "уже есть, но частоты среди них нет",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: always, sometimes, usually, often, never, " +
        "morning, evening, weekend, music, coffee, film, gym, park, late, early, " +
        "together. Проверено построчно по выгрузке словника",
      license: "внутреннее использование",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about " +
        "themselves and other people, where they live, people they know, things they " +
        "have». Рассказ о своих делах с частотой — часть этого умения",
      license: "внутреннее использование, публично не называем",
    },
  ],

  outcomes: [
    "говорить, как часто что-то бывает: I always work on Monday",
    "называть среднюю частоту: I usually get up at seven",
    "говорить, что чего-то не бывает никогда: I never drink coffee",
    "ставить наречие при форме be: I am always busy",
    "соединять наречие с отрицанием: I don't usually work on Sunday",
    "говорить о частоте у другого человека: He always works late",
    "спрашивать о частоте: Do you always work on Monday?",
    "рассказывать о своей неделе, называя частоту",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vsegda-i-inogda",
      title: "Всегда и иногда: always, sometimes",
      estimatedMinutes: 14,
      outcome: "говорить, как часто что-то бывает: I always work on Monday",

      blocks: [
        {
          id: "zachem-chastota",
          kind: "explain",
          text: [
            "Ты умеешь сказать I work on Monday — по понедельникам я работаю. Но так " +
              "бывает не у всех и не всегда.",
            "У одного это каждый понедельник без исключения. У другого — через раз. " +
              "Сказать об этом можно одним словом.",
            "Такое слово называется наречием: оно стоит рядом с глаголом и говорит, как " +
              "часто это бывает. Always — всегда, sometimes — иногда.",
          ],
        },
        {
          id: "tablica-vsegda-inogda",
          kind: "table",
          caption: "Всегда и иногда",
          head: ["Английский", "Перевод", "Как часто"],
          rows: [
            ["I always work on Monday.", "По понедельникам я всегда работаю.", "каждый раз"],
            ["I sometimes work on Monday.", "По понедельникам я иногда работаю.", "не каждый раз"],
            ["I work on Monday.", "По понедельникам я работаю.", "о частоте не сказано"],
          ],
        },
        {
          id: "gde-stoit-narechie",
          kind: "explain",
          text: [
            "У наречия частоты своё место, и это не конец предложения.",
            "Наречие стоит между тем, о ком речь, и глаголом: I always work. Сначала I, " +
              "потом always, потом work.",
            // Было «По-английски место одно» — а задания этого же урока принимают
            // «Sometimes I work on Sunday», и принимают верно: такой порядок есть.
            // Утверждение спорило с собственными ответами. Нашёл методист.
            "По-русски порядок свободнее: «я всегда работаю» и «я работаю всегда» — оба " +
              "годятся. По-английски держись места между тем, о ком речь, и глаголом: " +
              "оно подходит всегда.",
          ],
        },
        {
          id: "ne-v-nachalo",
          kind: "note",
          tone: "mistake",
          text:
            "«Always I work» — так не говорят.\n\nНаречие идёт вторым, после того, о ком " +
            "речь: I always work.",
        },
        {
          // Слово sometimes в начале предложения — не ошибка, и задания урока такой
          // ответ принимают. Молчать об этом нельзя: ученик прочтёт, что место
          // одно, а потом увидит зачтённый другой порядок.
          id: "sometimes-v-nachale",
          kind: "note",
          tone: "info",
          text:
            "Со словом sometimes есть и второй порядок: Sometimes I work on Sunday. Он " +
            "тоже верный. Со словом always так не говорят, поэтому проще держаться одного " +
            "места для всех слов сразу.",
        },
        {
          id: "primer-vsegda",
          kind: "example",
          caption: "Три предложения подряд",
          text: "I always get up at seven.\nI sometimes read in the evening.\nI always work in the morning.",
          explain:
            "В каждом предложении наречие стоит на одном и том же месте: после I и до " +
            "глагола. Дальше идёт всё остальное — at seven, in the evening, in the morning.",
        },
        {
          id: "zapis-vsegda",
          kind: "audio",
          pace: "slow",
          caption: "Послушай, где стоит наречие",
          transcript: "I always work on Monday. I sometimes work on Monday.",
        },
        {
          id: "slovar-vsegda",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "always", translation: "всегда", example: "I always work on Monday.", hint: "/ˈɔːlweɪz/" },
            { term: "sometimes", translation: "иногда", example: "I sometimes read in the evening.", hint: "/ˈsʌmtaɪmz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-always",
          kind: "gap",
          prompt: "Ты работаешь по понедельникам каждый раз. Допиши недостающее слово.",
          before: "I ",
          after: " work on Monday.",
          answer: "always",
          accept: ["Always"],
          hint: "Оно значит «всегда».",
          why: "I always work on Monday. Наречие стоит после I и до глагола.",
        },
        {
          id: "z2-vybrat-poryadok",
          kind: "choice",
          prompt: "Ты иногда читаешь по вечерам. Как сказать?",
          options: [
            { text: "I sometimes read in the evening.", correct: true },
            { text: "Sometimes I read in the evening." },
            { text: "I read sometimes in the evening." },
          ],
          hint: "Наречие идёт вторым, после того, о ком речь.",
          why: "I sometimes read in the evening. Место наречия — между I и глаголом.",
        },
        {
          id: "z3-otmetit-mesto",
          kind: "hottext",
          prompt: "Отметь предложения, где наречие стоит не на своём месте.",
          parts: [
            { text: "I always get up at seven.", selectable: true },
            { text: " · " },
            { text: "Always I get up at seven.", selectable: true, correct: true },
            { text: " · " },
            { text: "I sometimes work on Sunday.", selectable: true },
            { text: " · " },
            { text: "I work always on Sunday.", selectable: true, correct: true },
          ],
          hint: "Наречие частоты стоит перед глаголом, а не после него.",
          why:
            "Не на месте в «Always I get up at seven» и «I work always on Sunday». " +
            "Наречие частоты идёт после того, о ком речь, и до глагола.",
        },
        {
          id: "z4-sobrat-vsegda",
          kind: "order",
          prompt: "Собери предложение: «Я всегда работаю по утрам.»",
          items: ["in the morning", "always", "I", "work"],
          answer: [2, 1, 3, 0],
          hint: "Второе слово — наречие, третье — глагол.",
          why: "I always work in the morning. После I идёт always, потом глагол work.",
        },
        {
          id: "z5-napisat-o-sebe",
          kind: "short",
          prompt: "Напиши, что ты иногда работаешь по воскресеньям.",
          answer: "I sometimes work on Sunday.",
          accept: [
            "i sometimes work on sunday.",
            "I sometimes work on Sunday",
            "Sometimes I work on Sunday.",
            "sometimes i work on sunday.",
          ],
          hint: "Пять слов, наречие вторым.",
          why: "I sometimes work on Sunday. Наречие стоит между I и work.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "obychno-i-chasto",
      title: "Обычно и часто: usually, often",
      estimatedMinutes: 13,
      outcome: "называть среднюю частоту: I usually get up at seven",

      blocks: [
        {
          id: "zachem-obychno",
          kind: "explain",
          text: [
            "Между «всегда» и «иногда» есть середина. Ты встаёшь в семь почти каждый " +
              "день, но в выходные позже.",
            "Always тут не подходит: исключения есть. Sometimes тоже не подходит: это " +
              "куда чаще, чем иногда.",
            "Для середины есть два слова: usually — обычно, often — часто.",
          ],
        },
        {
          id: "tablica-chetyre",
          kind: "table",
          caption: "Четыре наречия по убыванию",
          head: ["Слово", "Перевод", "Пример"],
          rows: [
            ["always", "всегда", "I always work on Monday."],
            ["usually", "обычно", "I usually get up at seven."],
            ["often", "часто", "I often read in the evening."],
            ["sometimes", "иногда", "I sometimes go to the gym."],
          ],
        },
        {
          id: "mesto-to-zhe",
          kind: "explain",
          text: [
            "Место у всех четырёх одно и то же: после того, о ком речь, и до глагола.",
            "I usually get up at seven. I often read in the evening.",
            "Выучив место один раз, ты ставишь на него любое из этих слов.",
          ],
        },
        {
          id: "chem-otlichayutsya",
          kind: "note",
          tone: "info",
          text:
            "Usually и often различаются не местом, а смыслом.\n\nUsually — так заведено, " +
            "это обычный порядок вещей. Often — так бывает много раз, но заведённым " +
            "порядком это не называют.",
        },
        {
          id: "primer-obychno",
          kind: "example",
          caption: "День одного человека",
          text:
            "I usually get up at seven.\nI often read in the morning.\nI sometimes go to the gym in the evening.",
          explain:
            "Три предложения — три разные частоты. Место наречия во всех трёх одно, " +
            "меняется только слово.",
        },
        {
          id: "zapis-obychno",
          kind: "audio",
          pace: "slow",
          caption: "Послушай четыре наречия",
          transcript:
            "I always work on Monday. I usually get up at seven. I often read in the evening. I sometimes go to the gym.",
        },
        {
          id: "slovar-obychno",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "usually", translation: "обычно", example: "I usually get up at seven.", hint: "/ˈjuːʒuəli/" },
            { term: "often", translation: "часто", example: "I often read in the evening.", hint: "/ˈɒfn/" },
            { term: "gym", translation: "спортзал", example: "I go to the gym.", hint: "/dʒɪm/" },
            { term: "early", translation: "рано", example: "I get up early.", hint: "/ˈɜːli/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-usually",
          kind: "gap",
          prompt: "Ты встаёшь в семь почти каждый день. Допиши недостающее слово.",
          before: "I ",
          after: " get up at seven.",
          answer: "usually",
          accept: ["Usually"],
          hint: "Так заведено, но исключения бывают.",
          why: "I usually get up at seven. Usually — обычный порядок вещей.",
        },
        {
          id: "z2-vybrat-narechie",
          kind: "choice",
          prompt: "Ты ходишь в спортзал два-три раза в неделю. Какое слово подойдёт?",
          options: [
            { text: "I always go to the gym." },
            { text: "I often go to the gym.", correct: true },
            { text: "I never go to the gym." },
          ],
          hint: "Много раз, но не каждый день.",
          why: "I often go to the gym. Always говорит о каждом разе, а два-три раза в неделю — often.",
        },
        {
          id: "z3-sopostavit-chastotu",
          kind: "match",
          prompt: "Сопоставь предложение и то, как часто это бывает.",
          left: [
            "I always work on Monday.",
            "I usually get up at seven.",
            "I sometimes go to the gym.",
          ],
          right: ["не каждый раз", "каждый раз без исключений", "почти каждый день"],
          answer: [1, 2, 0],
          hint: "Always сильнее usually, usually сильнее sometimes.",
          why:
            "Always — каждый раз без исключений. Usually — почти каждый день. Sometimes — " +
            "не каждый раз.",
        },
        {
          id: "z4-sobrat-often",
          kind: "order",
          prompt: "Собери предложение: «Я часто читаю по вечерам.»",
          items: ["read", "I", "in the evening", "often"],
          answer: [1, 3, 0, 2],
          hint: "Наречие вторым, глагол третьим.",
          why: "I often read in the evening. Порядок тот же, что с always.",
        },
        {
          id: "z5-napisat-usually",
          kind: "short",
          prompt: "Напиши, что ты обычно встаёшь рано. Рано — early.",
          answer: "I usually get up early.",
          accept: [
            "i usually get up early.",
            "I usually get up early",
            "Usually I get up early.",
            "usually i get up early.",
          ],
          hint: "Наречие частоты стоит вторым, early — в конце.",
          why:
            "I usually get up early. Usually говорит о частоте и стоит перед глаголом, " +
            "early говорит о времени и стоит в конце.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nikogda",
      title: "Никогда: never",
      estimatedMinutes: 14,
      outcome: "говорить, что чего-то не бывает никогда: I never drink coffee",

      blocks: [
        {
          id: "zachem-never",
          kind: "explain",
          text: [
            "Ты не пьёшь кофе. Совсем, никогда.",
            "Сказать об этом можно отрицанием: I don't drink coffee. Но есть слово " +
              "покороче — never, «никогда».",
            "I never drink coffee. Место у него то же, что у остальных наречий частоты: " +
              "после того, о ком речь, и до глагола.",
          ],
        },
        {
          id: "tablica-never",
          kind: "table",
          caption: "Два способа сказать «не пью»",
          head: ["Английский", "Перевод", "Что сказано"],
          rows: [
            ["I don't drink coffee.", "Я не пью кофе.", "не пью"],
            ["I never drink coffee.", "Я никогда не пью кофе.", "не пью ни разу"],
            ["I sometimes drink coffee.", "Я иногда пью кофе.", "бывает"],
          ],
        },
        {
          id: "never-bez-dont",
          kind: "explain",
          text: [
            "В английском отрицание в предложении одно.",
            "Never само по себе отрицательное, поэтому don't при нём не ставят.",
            "I never drink coffee — верно. «I don't never drink coffee» — нет.",
          ],
        },
        {
          id: "dva-otricaniya",
          kind: "note",
          tone: "mistake",
          text:
            "По-русски отрицаний два: «я никогда не пью».\n\nПо-английски одно: I never " +
            "drink. Слово «не» в перевод добавляется само, а в английское предложение — нет.",
        },
        {
          id: "primer-never",
          kind: "example",
          caption: "Что не бывает никогда",
          text: "I never drink coffee.\nI never work on Sunday.\nI never go to bed late.",
          explain:
            "Во всех трёх предложениях нет ни don't, ни not. Never делает всю работу " +
            "само и стоит на обычном месте наречия.",
        },
        {
          id: "zapis-never",
          kind: "audio",
          pace: "slow",
          caption: "Послушай два способа",
          transcript: "I don't drink coffee. I never drink coffee.",
        },
        {
          id: "slovar-never",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "never", translation: "никогда", example: "I never drink coffee.", hint: "/ˈnevə/" },
            // Слово coffee стояло здесь как новое, а введено оно в модуле 14.
            { term: "late", translation: "поздно", example: "I go to bed late.", hint: "/leɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-never",
          kind: "gap",
          prompt: "Ты не пьёшь кофе совсем. Допиши недостающее слово.",
          before: "I ",
          after: " drink coffee.",
          answer: "never",
          accept: ["Never"],
          hint: "Оно значит «никогда» и работает без don't.",
          why: "I never drink coffee. При never отрицание don't не нужно.",
        },
        {
          id: "z2-lishnee-dont",
          kind: "hottext",
          prompt: "Отметь предложения, где отрицание стоит дважды.",
          parts: [
            { text: "I never work on Sunday.", selectable: true },
            { text: " · " },
            { text: "I don't never work on Sunday.", selectable: true, correct: true },
            { text: " · " },
            { text: "I never drink coffee.", selectable: true },
            { text: " · " },
            { text: "I don't never drink coffee.", selectable: true, correct: true },
          ],
          hint: "Never уже отрицает само.",
          why:
            "Дважды отрицают «I don't never work on Sunday» и «I don't never drink " +
            "coffee». Верно — без don't.",
        },
        {
          id: "z3-vybrat-never",
          kind: "choice",
          prompt: "Ты не работаешь по воскресеньям ни разу. Как сказать одним словом о частоте?",
          options: [
            { text: "I never work on Sunday.", correct: true },
            { text: "I don't never work on Sunday." },
            { text: "I never don't work on Sunday." },
          ],
          hint: "Отрицание в предложении одно.",
          why: "I never work on Sunday. Never стоит на месте наречия и отрицает само.",
        },
        {
          id: "z4-perestroit-v-never",
          kind: "short",
          prompt: "Скажи сильнее, через never: I don't go to the gym.",
          answer: "I never go to the gym.",
          accept: ["i never go to the gym.", "I never go to the gym"],
          hint: "Don't уходит, never встаёт на его место.",
          why: "I never go to the gym. Don't убирают, потому что never отрицает само.",
        },
        {
          id: "z5-sobrat-never",
          kind: "order",
          prompt: "Собери предложение: «Я никогда не ложусь поздно.»",
          items: ["late", "go to bed", "I", "never"],
          answer: [2, 3, 1, 0],
          hint: "Четыре части, и don't среди них нет.",
          why: "I never go to bed late. Отрицание одно, и это never.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "narechie-i-be",
      title: "Наречие и форма be",
      estimatedMinutes: 14,
      outcome: "ставить наречие при форме be: I am always busy",

      blocks: [
        {
          id: "zachem-s-be",
          kind: "explain",
          text: [
            "Ты знаешь оборот I am busy и знаешь, что наречие стоит перед глаголом.",
            "Сложив два умения, получаешь «I always am busy». Так не говорят.",
            "Форма be — это am, is или are. С ней порядок другой: наречие идёт после " +
              "неё. I am always busy.",
          ],
        },
        {
          id: "tablica-s-be",
          kind: "table",
          caption: "Два порядка рядом",
          head: ["Слово после того, о ком речь", "Порядок", "Пример"],
          rows: [
            ["действие", "наречие перед глаголом", "I always work."],
            ["форма be", "наречие после формы be", "I am always busy."],
            ["форма be", "наречие после формы be", "He is never late."],
          ],
        },
        {
          id: "pochemu-tak",
          kind: "explain",
          text: [
            "Различить их можно по слову, которое стоит сразу после того, о ком речь.",
            "Если там am, is или are — наречие идёт следом за ними.",
            "Если там глагол-действие — наречие идёт перед ним.",
          ],
        },
        {
          id: "late-dva-znacheniya",
          kind: "note",
          tone: "info",
          text:
            "«I always am busy» и «She never is late» — так не говорят. При форме be " +
            "порядок один: сначала она, потом наречие.\n\nИ обрати внимание на late. " +
            "После глагола это «поздно»: I go to bed late. После формы be — «опоздавший»: " +
            "She is never late значит «она никогда не опаздывает».",
        },
        {
          id: "primer-s-be",
          kind: "example",
          caption: "Четыре предложения подряд",
          text:
            "I am always busy on Monday.\nI always work on Monday.\nShe is never late.\nShe never comes late.",
          explain:
            "Первое и третье — с формой be, наречие после неё. Второе и четвёртое — с " +
            "глаголом-действием, наречие перед ним. Смысл близкий, а порядок разный.",
        },
        {
          id: "zapis-s-be",
          kind: "audio",
          pace: "slow",
          caption: "Послушай оба порядка",
          transcript: "I am always busy. I always work. She is never late. She never comes late.",
        },
        {
          // В этом блоке стояли weekend и park, и оба — повторы: weekend введён
          // в модуле 16, park в модуле 12. Вместо них карточка, которой урок
          // требовал и не имел: слово late здесь работает по-другому. После
          // глагола это «поздно» (модуль 17, урок 3), а после формы be —
          // «опоздавший», и на этом стоят три задания урока. Нашёл методист.
          id: "slovar-s-be",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "late",
              translation: "опоздавший (после формы be)",
              example: "She is never late.",
              hint: "/leɪt/",
            },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-posle-be",
          kind: "gap",
          prompt: "По понедельникам у тебя всегда много дел. Допиши недостающее слово.",
          before: "I am ",
          after: " busy on Monday.",
          answer: "always",
          accept: ["Always"],
          hint: "После формы be наречие идёт следом за ней.",
          why: "I am always busy on Monday. При форме be наречие стоит после неё.",
        },
        {
          id: "z2-vybrat-poryadok-be",
          kind: "choice",
          prompt: "Она никогда не опаздывает. Как сказать через форму be?",
          options: [
            { text: "She is never late.", correct: true },
            { text: "She never is late." },
            { text: "Never she is late." },
          ],
          hint: "Смотри, что идёт сразу после того, о ком речь.",
          why: "She is never late. Форма be стоит раньше наречия.",
        },
        {
          id: "z3-otmetit-pereputannye",
          kind: "hottext",
          prompt: "Отметь предложения, где наречие и форма be перепутаны местами.",
          parts: [
            { text: "I am always busy.", selectable: true },
            { text: " · " },
            { text: "I always am busy.", selectable: true, correct: true },
            { text: " · " },
            { text: "He is never late.", selectable: true },
            { text: " · " },
            { text: "He never is late.", selectable: true, correct: true },
          ],
          hint: "Форма be идёт первой.",
          why:
            "Перепутаны в «I always am busy» и «He never is late». Верно — I am always " +
            "busy, He is never late.",
        },
        {
          id: "z4-dva-predlozheniya",
          kind: "short",
          prompt:
            "Напиши два предложения о себе: что у тебя всегда много дел и что ты " +
            "всегда работаешь. Много дел — busy.",
          answer: "I am always busy. I always work.",
          accept: [
            "i am always busy. i always work.",
            "I am always busy. I always work",
            "I'm always busy. I always work.",
          ],
          hint: "В первом форма be впереди наречия, во втором наречие впереди глагола.",
          why:
            "I am always busy. I always work. Порядок разный, потому что после I стоит " +
            "то форма be, то глагол-действие.",
        },
        {
          id: "z5-o-sestre-s-be",
          kind: "short",
          prompt: "Напиши, что твоя сестра никогда не опаздывает. Сестра — my sister.",
          answer: "My sister is never late.",
          accept: ["my sister is never late.", "My sister is never late"],
          hint: "Форма be для одного другого человека — is.",
          why: "My sister is never late. После is идёт never, потом late.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "narechie-v-otricanii",
      title: "Наречие и отрицание",
      estimatedMinutes: 13,
      outcome: "соединять наречие с отрицанием: I don't usually work on Sunday",

      blocks: [
        {
          id: "zachem-v-otricanii",
          kind: "explain",
          text: [
            "По воскресеньям ты обычно не работаешь — но раз в месяц выходишь.",
            "Never тут не годится: исключения есть. Нужны два слова сразу — отрицание и " +
              "наречие.",
            "I don't usually work on Sunday. Наречие встаёт после don't.",
          ],
        },
        {
          id: "tablica-otricanie-narechie",
          kind: "table",
          caption: "Отрицание с наречием и без",
          head: ["Английский", "Перевод"],
          rows: [
            ["I don't work on Sunday.", "По воскресеньям я не работаю."],
            ["I don't usually work on Sunday.", "По воскресеньям я обычно не работаю."],
            ["I don't often work on Sunday.", "По воскресеньям я редко работаю."],
          ],
        },
        {
          id: "poryadok-v-otricanii",
          kind: "explain",
          text: [
            "Порядок такой же, как с формой be: наречие идёт после don't, а не перед ним.",
            "Сначала don't, потом usually, потом глагол.",
            "«I usually don't work» тоже говорят. Держись одного места: наречие после don't.",
          ],
        },
        {
          id: "chasto-i-redko",
          kind: "note",
          tone: "info",
          text:
            "I don't often work — «я редко работаю».\n\nОтдельное слово для этого " +
            "не нужно: «редко» даёт отрицание при often.",
        },
        {
          id: "primer-v-otricanii",
          kind: "example",
          caption: "Три отрицания с наречием",
          text:
            "I don't usually work on Sunday.\nI don't often go to the gym.\nI don't usually drink coffee in the evening.",
          explain:
            "Во всех трёх сначала идёт don't, потом наречие, потом глагол. Всё остальное — " +
            "в конце.",
        },
        {
          id: "zapis-v-otricanii",
          kind: "audio",
          pace: "slow",
          caption: "Послушай отрицание с наречием",
          transcript: "I don't usually work on Sunday. I don't often go to the gym.",
        },
        // Словаря у урока больше нет: film и music оказались повторами (модули 16
        // и 14), а других новых слов урок не даёт — он весь о месте наречия при
        // отрицании. Ставить слово ради карточки нельзя: словарь — это новые
        // слова, а не заполнитель.

        // ---- задания ----
        {
          id: "z1-dopisat-v-otricanii",
          kind: "gap",
          prompt: "По воскресеньям ты обычно не работаешь. Допиши недостающее слово.",
          before: "I don't ",
          after: " work on Sunday.",
          answer: "usually",
          accept: ["Usually"],
          hint: "Наречие идёт после don't.",
          why: "I don't usually work on Sunday. Наречие встаёт между don't и глаголом.",
        },
        {
          id: "z2-vybrat-mesto",
          kind: "choice",
          prompt: "Ты редко ходишь в спортзал. Как сказать?",
          options: [
            { text: "I don't often go to the gym.", correct: true },
            { text: "I often don't go to the gym." },
            { text: "I don't go often to the gym." },
          ],
          hint: "Сначала don't, потом наречие.",
          why: "I don't often go to the gym. Наречие стоит после don't и до глагола.",
        },
        {
          id: "z3-otmetit-poryadok",
          kind: "hottext",
          // Четыре других задания вида «Отметь…» в этом модуле — про настоящие
          // ошибки, и по накопленной привычке это читалось как «найди ошибку».
          // А тут отмечают верный второй порядок. Сказано прямо.
          prompt: "Оба порядка верны. Отметь те предложения, где наречие стоит перед don't.",
          parts: [
            { text: "I don't usually work on Sunday.", selectable: true },
            { text: " · " },
            { text: "I usually don't work on Sunday.", selectable: true, correct: true },
            { text: " · " },
            { text: "I don't often read in the evening.", selectable: true },
            { text: " · " },
            { text: "I often don't read in the evening.", selectable: true, correct: true },
          ],
          hint: "Наречие идёт после don't.",
          why:
            "Перед don't наречие стоит в «I usually don't work on Sunday» и «I often " +
            "don't read in the evening».",
        },
        {
          id: "z4-sobrat-otricanie",
          kind: "order",
          prompt: "Собери предложение: «Я обычно не пью кофе по вечерам.»",
          items: ["drink coffee", "usually", "I", "in the evening", "don't"],
          answer: [2, 4, 1, 0, 3],
          hint: "Третьим идёт наречие, вторым — don't.",
          why: "I don't usually drink coffee in the evening. Порядок: I, don't, usually, глагол.",
        },
        {
          id: "z5-napisat-otricanie",
          kind: "short",
          prompt: "Напиши, что ты редко смотришь фильмы. Смотреть — watch, фильмы — films.",
          answer: "I don't often watch films.",
          accept: ["i don't often watch films.", "I don't often watch films"],
          hint: "«Редко» здесь — это don't при often.",
          why: "I don't often watch films. Отрицание при often и даёт значение «редко».",
        },
      ],
    },

    // =====================================================================
    {
      slug: "o-drugom-cheloveke",
      title: "О другом человеке",
      estimatedMinutes: 14,
      outcome: "говорить о частоте у другого человека: He always works late",

      blocks: [
        {
          id: "zachem-o-drugom",
          kind: "explain",
          text: [
            "О себе ты уже говоришь: I always work. Теперь о брате.",
            "Наречие остаётся на своём месте, а глагол берёт окончание, как всегда в " +
              "рассказе об одном другом человеке.",
            "He always works late. Сначала he, потом always, потом works.",
          ],
        },
        {
          id: "tablica-o-drugom",
          kind: "table",
          caption: "О себе и о нём",
          head: ["О себе", "О нём", "Что изменилось"],
          rows: [
            ["I always work.", "He always works.", "окончание у глагола"],
            ["I never drink coffee.", "She never drinks coffee.", "окончание у глагола"],
            ["I am always busy.", "He is always busy.", "форма be"],
          ],
        },
        {
          id: "okonchanie-ostayotsya",
          kind: "explain",
          text: [
            "Наречие на окончание не влияет никак.",
            "He works — he always works. Наречие встаёт перед глаголом, а -s остаётся " +
              "там, где был.",
            "Это не то же самое, что вопрос или отрицание: там окончание уходит в does. " +
              "Здесь уходить некуда, и оно остаётся.",
          ],
        },
        {
          id: "ne-teryay-okonchanie",
          kind: "note",
          tone: "mistake",
          text:
            "«He always work» — окончание потеряно.\n\nНаречие ничего не забирает: верно " +
            "He always works.",
        },
        {
          id: "primer-o-drugom",
          kind: "example",
          caption: "Рассказ о брате",
          text:
            "My brother always works late.\nHe usually gets up at six.\nHe never drinks coffee.\nHe is often busy at the weekend.",
          explain:
            "В первых трёх предложениях глагол с окончанием, наречие перед ним. В " +
            "четвёртом форма be, и наречие идёт после неё.",
        },
        {
          id: "zapis-o-drugom",
          kind: "audio",
          pace: "slow",
          caption: "Послушай рассказ о брате",
          transcript:
            "My brother always works late. He usually gets up at six. He never drinks coffee.",
        },
        // Словаря у урока больше нет: единственным словом было together, а оно
        // введено в модуле 16. Новых слов в уроке нет вовсе — он про порядок
        // слов, наречие с окончанием -s у глагола. Проверено по всем словам
        // урока: brother, always, late, usually, never, coffee, often, busy,
        // weekend — все введены раньше.

        // ---- задания ----
        {
          id: "z1-dopisat-o-nyom",
          kind: "gap",
          prompt: "Твой брат всегда работает допоздна. Допиши глагол с нужным окончанием.",
          before: "My brother always ",
          after: " late.",
          answer: "works",
          accept: ["Works"],
          hint: "Речь об одном другом человеке.",
          why: "My brother always works late. Наречие окончание не забирает.",
        },
        {
          id: "z2-vybrat-okonchanie",
          kind: "choice",
          prompt: "Она никогда не пьёт кофе. Как сказать?",
          options: [
            { text: "She never drinks coffee.", correct: true },
            { text: "She never drink coffee." },
            { text: "She doesn't never drink coffee." },
          ],
          hint: "Окончание остаётся, а don't при never не ставят.",
          why: "She never drinks coffee. Наречие стоит перед глаголом, окончание при глаголе.",
        },
        {
          id: "z3-otmetit-poteryannoe",
          kind: "hottext",
          prompt: "Отметь предложения, где у глагола потеряно окончание.",
          parts: [
            { text: "He always works late.", selectable: true },
            { text: " · " },
            { text: "He always work late.", selectable: true, correct: true },
            { text: " · " },
            { text: "She usually gets up at six.", selectable: true },
            { text: " · " },
            { text: "She usually get up at six.", selectable: true, correct: true },
          ],
          hint: "Об одном другом человеке глагол берёт -s.",
          why:
            "Окончание потеряно в «He always work late» и «She usually get up at six».",
        },
        {
          id: "z4-perestroit-na-nego",
          kind: "short",
          prompt: "Скажи то же самое о брате: I often read in the evening. Брат — my brother.",
          answer: "My brother often reads in the evening.",
          accept: [
            "my brother often reads in the evening.",
            "My brother often reads in the evening",
          ],
          hint: "Наречие на месте, у глагола появляется окончание.",
          why:
            "My brother often reads in the evening. Место наречия не поменялось, " +
            "изменился только глагол.",
        },
        {
          id: "z5-sobrat-o-drugom",
          kind: "order",
          prompt: "Собери предложение: «Она обычно встаёт в шесть.»",
          items: ["at six", "usually", "gets up", "She"],
          answer: [3, 1, 2, 0],
          hint: "Наречие вторым, глагол с окончанием третьим.",
          why: "She usually gets up at six. Наречие перед глаголом, окончание при глаголе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "narechie-v-voprose",
      title: "Наречие в вопросе",
      estimatedMinutes: 13,
      outcome: "спрашивать о частоте: Do you always work on Monday?",

      blocks: [
        {
          id: "zachem-v-voprose",
          kind: "explain",
          text: [
            "Спросить о частоте можно тем же вопросом, что и о деле, — добавив наречие.",
            "Do you work on Monday? — работаешь ли по понедельникам. Do you always work " +
              "on Monday? — всегда ли работаешь.",
            "Наречие встаёт после того, о ком речь, и до глагола — на своё обычное место.",
          ],
        },
        {
          id: "tablica-v-voprose",
          kind: "table",
          caption: "Вопрос с наречием и без",
          head: ["Английский", "Перевод"],
          rows: [
            ["Do you work on Monday?", "Ты работаешь по понедельникам?"],
            ["Do you always work on Monday?", "Ты всегда работаешь по понедельникам?"],
            ["Does he usually get up early?", "Он обычно встаёт рано?"],
          ],
        },
        {
          id: "mesto-v-voprose",
          kind: "explain",
          text: [
            "Порядок в вопросе такой: Do, тот, о ком речь, наречие, глагол.",
            "Do you always work? — Do, you, always, work.",
            "Место наречия то же самое, что и в рассказе: сразу перед глаголом.",
          ],
        },
        {
          id: "ne-posle-do",
          kind: "note",
          tone: "mistake",
          text:
            "«Do always you work?» — так не говорят.\n\nНаречие идёт после того, о ком " +
            "речь, а не сразу после Do.",
        },
        {
          id: "primer-v-voprose",
          kind: "example",
          caption: "Расспросить о привычках",
          text:
            "— Do you always work on Monday?\n— Yes, I do.\n— Does your brother usually get up early?\n— No, he doesn't.",
          explain:
            "В обоих вопросах наречие стоит перед глаголом. Ответы короткие, а наречие в " +
            "них не повторяется.",
        },
        {
          id: "zapis-v-voprose",
          kind: "audio",
          pace: "slow",
          caption: "Послушай вопрос с наречием",
          transcript: "Do you always work on Monday? Does he usually get up early?",
        },
        {
          id: "slovar-v-voprose",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "at the weekend", translation: "в выходные", example: "Do you work at the weekend?", hint: "/ət ðə ˌwiːkˈend/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-v-voprose",
          kind: "gap",
          prompt: "Ты хочешь узнать, всегда ли собеседник работает по понедельникам. Допиши недостающее слово.",
          before: "Do you ",
          after: " work on Monday?",
          answer: "always",
          accept: ["Always"],
          hint: "Наречие идёт после you.",
          why: "Do you always work on Monday? Наречие стоит перед глаголом.",
        },
        {
          id: "z2-vybrat-poryadok-voprosa",
          kind: "choice",
          prompt: "Ты хочешь узнать, обычно ли брат встаёт рано. Как спросить?",
          options: [
            { text: "Does your brother usually get up early?", correct: true },
            { text: "Does usually your brother get up early?" },
            { text: "Usually does your brother get up early?" },
          ],
          hint: "Наречие идёт после того, о ком речь.",
          why:
            "Does your brother usually get up early? Порядок: Does, человек, наречие, глагол.",
        },
        {
          id: "z3-otmetit-mesto-v-voprose",
          kind: "hottext",
          prompt: "Отметь вопросы, где наречие стоит сразу после Do.",
          parts: [
            { text: "Do you always work here?", selectable: true },
            { text: " · " },
            { text: "Do always you work here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you often read?", selectable: true },
            { text: " · " },
            { text: "Do often you read?", selectable: true, correct: true },
          ],
          hint: "После Do идёт тот, о ком речь.",
          why:
            "Сразу после Do наречие стоит в «Do always you work here?» и «Do often you " +
            "read?». Верно — Do you always work here?, Do you often read?",
        },
        {
          id: "z4-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Ты часто ходишь в спортзал?»",
          items: ["go to the gym?", "often", "Do", "you"],
          answer: [2, 3, 1, 0],
          hint: "Наречие третьим, глагол последним.",
          why: "Do you often go to the gym? Порядок: Do, you, наречие, глагол.",
        },
        {
          id: "z5-sprosit-o-vyhodnyh",
          kind: "short",
          prompt: "Спроси у собеседника, работает ли он обычно в выходные. Выходные — at the weekend.",
          answer: "Do you usually work at the weekend?",
          accept: [
            "do you usually work at the weekend?",
            "Do you usually work at the weekend",
          ],
          hint: "Наречие после you, обстоятельство в конце.",
          why:
            "Do you usually work at the weekend? Наречие стоит перед глаголом, а at the " +
            "weekend — в конце.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nedelya-celikom",
      title: "Неделя целиком",
      estimatedMinutes: 15,
      outcome: "рассказывать о своей неделе, называя частоту",

      blocks: [
        {
          id: "zachem-nedelya",
          kind: "explain",
          text: [
            "Отдельное предложение о частоте рассказом не становится.",
            "Рассказ — это несколько предложений подряд, где частота у каждого своя.",
            "Все части у тебя уже есть. Осталось сложить их в нужном порядке.",
          ],
        },
        {
          id: "shagi-rasskaza",
          kind: "table",
          caption: "Из чего складывается рассказ",
          head: ["Что сказать", "Пример"],
          rows: [
            ["что бывает каждый раз", "I always work on Monday."],
            ["что бывает обычно", "I usually get up at seven."],
            ["что бывает иногда", "I sometimes go to the gym."],
            ["чего не бывает никогда", "I never drink coffee."],
          ],
        },
        {
          id: "poryadok-v-rasskaze",
          kind: "explain",
          text: [
            "Порядок предложений в рассказе свободный, а порядок слов внутри каждого — нет.",
            "Наречие стоит перед глаголом или после формы be, и это не меняется от " +
              "того, каким по счёту идёт предложение.",
          ],
        },
        {
          id: "chereduy-chastotu",
          kind: "note",
          tone: "info",
          text:
            "Рассказ из одних always выходит однообразным.\n\nЧередуй частоту: что-то " +
            "бывает всегда, что-то иногда, чего-то не бывает вовсе.",
        },
        {
          id: "primer-nedelya",
          kind: "example",
          caption: "Рассказ о своей неделе",
          text:
            "I usually get up at seven.\nI always work on Monday.\nI sometimes go to the gym in the evening.\nI never work at the weekend.\nI am always busy on Friday.",
          explain:
            "Пять предложений и четыре разные частоты. В последнем стоит форма be, " +
            "поэтому наречие идёт после неё.",
        },
        {
          id: "zapis-nedelya",
          kind: "audio",
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "I usually get up at seven. I always work on Monday. I sometimes go to the gym in the evening. I never work at the weekend.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz",
          kind: "order",
          prompt: "Собери рассказ: сначала о подъёме, потом о понедельнике, потом о выходных.",
          items: [
            "I never work at the weekend.",
            "I usually get up at seven.",
            "I always work on Monday.",
          ],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии: подъём, понедельник, выходные.",
          why:
            "I usually get up at seven. I always work on Monday. I never work at the " +
            "weekend.",
        },
        {
          id: "z2-tri-chastoty",
          kind: "short",
          prompt: "Напиши о себе три предложения: что бывает всегда, что иногда, чего не бывает никогда.",
          answer: "I always work on Monday. I sometimes go to the gym. I never drink coffee.",
          accept: [
            "i always work on monday. i sometimes go to the gym. i never drink coffee.",
          ],
          hint: "Три разных наречия, каждое перед своим глаголом.",
          why:
            "I always work on Monday. I sometimes go to the gym. I never drink coffee. " +
            "Годится и другой набор дел — важно, что частота у трёх предложений разная.",
        },
        {
          id: "z3-o-brate-rasskaz",
          kind: "short",
          prompt: "Напиши два предложения о брате: он всегда работает допоздна и никогда не пьёт кофе.",
          answer: "My brother always works late. He never drinks coffee.",
          accept: [
            "my brother always works late. he never drinks coffee.",
            "My brother always works late. He never drinks coffee",
          ],
          hint: "Об одном другом человеке глагол берёт окончание.",
          why:
            "My brother always works late. He never drinks coffee. Наречие перед " +
            "глаголом, окончание при глаголе.",
        },
        {
          id: "z4-s-formoy-be",
          kind: "gap",
          prompt: "Допиши предложение так, чтобы вышло «По пятницам у меня всегда много дел».",
          before: "I am ",
          after: " busy on Friday.",
          answer: "always",
          accept: ["Always"],
          hint: "После формы be наречие идёт следом за ней.",
          why: "I am always busy on Friday. При форме be наречие стоит после неё.",
        },
        {
          id: "z5-rasskaz-vsluh",
          kind: "speak",
          prompt: "Расскажи вслух о своей неделе: три предложения с разной частотой.",
          phrase:
            "I usually get up at seven. I always work on Monday. I never work at the weekend.",
          translation:
            "Обычно я встаю в семь. По понедельникам я всегда работаю. В выходные я никогда не работаю.",
          hint: "Наречие перед глаголом, обстоятельство времени в конце.",
          why:
            "Три предложения, три частоты. Наречие в каждом стоит на одном и том же " +
            "месте — перед глаголом.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // ---- итог 1 ----
      {
        id: "q-vsegda-dopisat",
        kind: "gap",
        outcome: "говорить, как часто что-то бывает: I always work on Monday",
        prompt: "Ты читаешь по вечерам не каждый раз. Допиши недостающее слово.",
        before: "I ",
        after: " read in the evening.",
        answer: "sometimes",
        accept: ["Sometimes"],
        hint: "Оно значит «иногда».",
        why: "I sometimes read in the evening. Наречие стоит между I и глаголом.",
      },
      {
        id: "q-vsegda-vybor",
        kind: "choice",
        outcome: "говорить, как часто что-то бывает: I always work on Monday",
        prompt: "Ты каждое утро работаешь. Как сказать?",
        options: [
          { text: "Always I work in the morning." },
          { text: "I always work in the morning.", correct: true },
          { text: "I work always in the morning." },
        ],
        hint: "Наречие идёт вторым.",
        why: "I always work in the morning. Место наречия — после I и до глагола.",
      },
      {
        id: "q-vsegda-sobrat",
        kind: "order",
        outcome: "говорить, как часто что-то бывает: I always work on Monday",
        prompt: "Собери предложение: «Я иногда работаю по воскресеньям.»",
        items: ["on Sunday", "I", "work", "sometimes"],
        answer: [1, 3, 2, 0],
        hint: "Слово о частоте встаёт между тем, кто говорит, и делом.",
        why: "I sometimes work on Sunday.",
      },

      // ---- итог 2 ----
      {
        id: "q-obychno-dopisat",
        kind: "gap",
        outcome: "называть среднюю частоту: I usually get up at seven",
        prompt: "Ты ходишь в парк почти каждый день. Допиши недостающее слово.",
        before: "I ",
        after: " go to the park.",
        answer: "usually",
        accept: ["Usually"],
        hint: "Нужно слово о том, что бывает почти всегда.",
        why: "I usually go to the park. Usually — обычный порядок вещей.",
      },
      {
        id: "q-obychno-vybor",
        kind: "choice",
        outcome: "называть среднюю частоту: I usually get up at seven",
        prompt: "Ты встаёшь рано почти всегда, кроме выходных. Как сказать?",
        options: [
          { text: "I always get up early." },
          { text: "I never get up early." },
          { text: "I usually get up early.", correct: true },
        ],
        hint: "Исключения есть, значит always не подходит.",
        why: "I usually get up early. Usually допускает исключения, always — нет.",
      },
      {
        id: "q-obychno-napisat",
        kind: "short",
        outcome: "называть среднюю частоту: I usually get up at seven",
        prompt: "Напиши, что ты часто читаешь по утрам.",
        answer: "I often read in the morning.",
        accept: ["i often read in the morning.", "I often read in the morning"],
        hint: "Наречие вторым, обстоятельство в конце.",
        why: "I often read in the morning. Наречие стоит перед глаголом.",
      },

      // ---- итог 3 ----
      {
        id: "q-never-vybor",
        kind: "choice",
        outcome: "говорить, что чего-то не бывает никогда: I never drink coffee",
        prompt: "Ты не ходишь в спортзал совсем. Как сказать через never?",
        options: [
          { text: "I don't never go to the gym." },
          { text: "I never go to the gym.", correct: true },
          { text: "I never don't go to the gym." },
        ],
        hint: "Слово never отрицает само, без помощников.",
        why: "I never go to the gym. При never слово don't не нужно.",
      },
      {
        id: "q-never-perestroit",
        kind: "short",
        outcome: "говорить, что чего-то не бывает никогда: I never drink coffee",
        prompt: "Скажи то же самое через never: I don't work on Sunday.",
        answer: "I never work on Sunday.",
        accept: ["i never work on sunday.", "I never work on Sunday"],
        hint: "Одно слово заменяет собой два.",
        why: "I never work on Sunday. Never отрицает само, поэтому don't убирают.",
      },
      {
        id: "q-never-otmetit",
        kind: "hottext",
        outcome: "говорить, что чего-то не бывает никогда: I never drink coffee",
        prompt: "Отметь предложения, где отрицание стоит дважды.",
        // Две записи из четырёх были дословно взяты из примера и задания уроков.
        // Ученик узнавал строку. Взяты другие подлежащие и другие действия.
        parts: [
          { text: "We never work at the weekend.", selectable: true },
          { text: " · " },
          { text: "We don't never work at the weekend.", selectable: true, correct: true },
          { text: " · " },
          { text: "He never reads in the morning.", selectable: true },
          { text: " · " },
          { text: "He doesn't never read in the morning.", selectable: true, correct: true },
        ],
        hint: "Never отрицает само.",
        why:
          "Дважды отрицают «I don't never go to bed late» и «She doesn't never drink " +
          "coffee».",
      },

      // ---- итог 4 ----
      {
        id: "q-be-dopisat",
        kind: "gap",
        outcome: "ставить наречие при форме be: I am always busy",
        prompt: "Она никогда не опаздывает. Допиши недостающее слово.",
        before: "She is ",
        after: " late.",
        answer: "never",
        accept: ["Never"],
        hint: "Слово is уже стоит — допиши слово о частоте.",
        why: "She is never late. Опозданий не бывает совсем, поэтому идёт never.",
      },
      {
        id: "q-be-vybor",
        kind: "choice",
        outcome: "ставить наречие при форме be: I am always busy",
        prompt: "По понедельникам у тебя всегда много дел. Как сказать?",
        options: [
          { text: "I always am busy on Monday." },
          { text: "Always I am busy on Monday." },
          { text: "I am always busy on Monday.", correct: true },
        ],
        hint: "Смотри, что идёт сразу после I.",
        why: "I am always busy on Monday. Слово am выходит вперёд слова always.",
      },
      {
        id: "q-be-otmetit",
        kind: "hottext",
        outcome: "ставить наречие при форме be: I am always busy",
        prompt: "Отметь предложения, где наречие и форма be перепутаны местами.",
        parts: [
          { text: "He is often busy.", selectable: true },
          { text: " · " },
          { text: "He often is busy.", selectable: true, correct: true },
          { text: " · " },
          { text: "I am never late.", selectable: true },
          { text: " · " },
          { text: "I never am late.", selectable: true, correct: true },
        ],
        hint: "Проверь в каждой паре, что стоит раньше.",
        why: "Перепутаны в «He often is busy» и «I never am late».",
      },

      // ---- итог 5 ----
      {
        id: "q-otricanie-dopisat",
        kind: "gap",
        outcome: "соединять наречие с отрицанием: I don't usually work on Sunday",
        prompt: "Ты редко ходишь в парк. Допиши недостающее слово.",
        before: "I don't ",
        after: " go to the park.",
        answer: "often",
        accept: ["Often"],
        hint: "«Редко» здесь — это отрицание при этом наречии.",
        why: "I don't often go to the park. Отрицание при often даёт значение «редко».",
      },
      {
        id: "q-otricanie-vybor",
        kind: "choice",
        outcome: "соединять наречие с отрицанием: I don't usually work on Sunday",
        prompt: "По воскресеньям ты обычно не работаешь. Как сказать?",
        options: [
          { text: "I usually don't work on Sunday." },
          { text: "I don't usually work on Sunday.", correct: true },
          { text: "I don't work usually on Sunday." },
        ],
        hint: "Слово о частоте стоит не первым и не последним.",
        why: "I don't usually work on Sunday. Слово usually стоит внутри отрицания, а не рядом с ним.",
      },
      {
        id: "q-otricanie-sobrat",
        kind: "order",
        outcome: "соединять наречие с отрицанием: I don't usually work on Sunday",
        prompt: "Собери предложение: «Я редко смотрю фильмы по вечерам.»",
        items: ["in the evening", "watch films", "I", "often", "don't"],
        answer: [2, 4, 3, 1, 0],
        hint: "Наречие идёт третьим, после don't.",
        why: "I don't often watch films in the evening.",
      },

      // ---- итог 6 ----
      {
        id: "q-drugoy-dopisat",
        kind: "gap",
        outcome: "говорить о частоте у другого человека: He always works late",
        prompt: "Твоя сестра обычно встаёт в шесть. Допиши глагол с нужным окончанием.",
        before: "My sister usually ",
        after: " up at six.",
        answer: "gets",
        accept: ["Gets"],
        hint: "Сестра одна, и глагол это показывает.",
        why: "My sister usually gets up at six. Наречие окончание не забирает.",
      },
      {
        id: "q-drugoy-otmetit",
        kind: "hottext",
        outcome: "говорить о частоте у другого человека: He always works late",
        prompt: "Отметь предложения, где у глагола потеряно окончание.",
        parts: [
          { text: "He never drinks coffee.", selectable: true },
          { text: " · " },
          { text: "He never drink coffee.", selectable: true, correct: true },
          { text: " · " },
          { text: "She often reads in the evening.", selectable: true },
          { text: " · " },
          { text: "She often read in the evening.", selectable: true, correct: true },
        ],
        hint: "Смотри на конец глагола, а не на наречие.",
        why: "Окончание потеряно в «He never drink coffee» и «She often read in the evening».",
      },
      {
        id: "q-drugoy-napisat",
        kind: "short",
        outcome: "говорить о частоте у другого человека: He always works late",
        prompt: "Напиши, что твоя сестра обычно встаёт рано. Сестра — my sister.",
        answer: "My sister usually gets up early.",
        accept: ["my sister usually gets up early.", "My sister usually gets up early"],
        hint: "Наречие частоты вторым, глагол с окончанием третьим.",
        why:
          "My sister usually gets up early. Слово usually встало между сестрой и действием, " +
          "а окончание -s осталось при действии.",
      },

      // ---- итог 7 ----
      {
        id: "q-vopros-dopisat",
        kind: "gap",
        outcome: "спрашивать о частоте: Do you always work on Monday?",
        prompt: "Ты хочешь узнать, часто ли собеседник читает. Допиши недостающее слово.",
        before: "Do you ",
        after: " read?",
        answer: "often",
        accept: ["Often"],
        hint: "Нужно слово о том, что бывает часто.",
        why: "Do you often read? Наречие стоит перед глаголом.",
      },
      {
        id: "q-vopros-vybor",
        kind: "choice",
        outcome: "спрашивать о частоте: Do you always work on Monday?",
        prompt: "Ты хочешь узнать, часто ли сестра работает в выходные. Как спросить?",
        options: [
          { text: "Does your sister often work at the weekend?", correct: true },
          { text: "Does your sister works often at the weekend?" },
          { text: "Does often your sister work at the weekend?" },
        ],
        hint: "Наречие идёт после того, о ком речь, а глагол остаётся без окончания.",
        why:
          "Does your sister often work at the weekend? Во второй записи глагол зря взял -s, " +
          "в третьей often обогнало сестру.",
      },
      {
        id: "q-vopros-sobrat",
        kind: "order",
        outcome: "спрашивать о частоте: Do you always work on Monday?",
        prompt: "Собери вопрос: «Он обычно встаёт рано?»",
        items: ["early", "usually", "Does", "get up", "he"],
        answer: [2, 4, 1, 3, 0],
        hint: "Наречие третьим, глагол четвёртым.",
        why: "Does he usually get up early? Наречие стоит между he и действием, а действие идёт без окончания.",
      },

      // ---- итог 8 ----
      {
        id: "q-rasskaz-sobrat",
        kind: "order",
        outcome: "рассказывать о своей неделе, называя частоту",
        prompt: "Собери рассказ: сначала о понедельнике, потом о вечере, потом о кофе.",
        items: [
          "I never drink coffee.",
          "I always work on Monday.",
          "I sometimes read in the evening.",
        ],
        answer: [1, 2, 0],
        hint: "Порядок задан в условии.",
        why: "I always work on Monday. I sometimes read in the evening. I never drink coffee.",
      },
      {
        id: "q-rasskaz-napisat",
        kind: "short",
        outcome: "рассказывать о своей неделе, называя частоту",
        prompt: "Напиши два предложения о себе: что бывает обычно и чего не бывает никогда.",
        answer: "I usually get up at seven. I never work at the weekend.",
        accept: ["i usually get up at seven. i never work at the weekend."],
        hint: "Два разных наречия, каждое перед своим глаголом.",
        why:
          "I usually get up at seven. I never work at the weekend. Годится и другой " +
          "набор дел — важно, что частота у двух предложений разная.",
      },
      {
        id: "q-rasskaz-dopisat",
        kind: "gap",
        outcome: "рассказывать о своей неделе, называя частоту",
        // Задание было тем же, что в уроке, до последнего английского слова:
        // менялся только русский перевод условия. И в переводе стояло «я занят» —
        // краткое прилагательное, которое выдаёт пол ученика.
        prompt: "Допиши предложение так, чтобы вышло «По понедельникам у меня всегда много дел».",
        before: "I am ",
        after: " busy on Monday.",
        answer: "always",
        accept: ["Always"],
        hint: "Слово am уже стоит — допиши слово о частоте.",
        why: "I am always busy on Monday. Дел много каждый понедельник без исключений.",
      },
    ],
  },
};

export default module;
