import type { Module } from "@/lib/content/types";

/**
 * Модуль 21 курса «Английский с нуля»: мне нравится.
 *
 * Программа: docs/programma-english-starter.md, модуль 21 — «говорить о вкусах
 * и желаниях»; грамматика: `like` + инфинитив или `-ing`, `would like`,
 * `really`, `very much`.
 *
 * ЧТО МОДУЛЬ ПРОДОЛЖАЕТ. Слово `like` ученик знает с модуля 14, но только с
 * названием вещи: `I like music`. Там же в шапке записано, что сочетание с
 * глаголом отдано этому модулю. Здесь оно и вводится.
 *
 * ГЛАВНАЯ ОПАСНОСТЬ МОДУЛЯ — окончание `-ing` после `like`. Модуль 18 учил, что
 * `-ing` означает «происходит прямо сейчас», а здесь `I like reading` не о
 * сегодняшнем дне вовсе: это о вкусах вообще. Ученик, выучивший `-ing` как знак
 * настоящей минуты, прочтёт «мне нравится, что я читаю сейчас».
 *
 * Поэтому урок 2 говорит об этом прямо: после `like` окончание `-ing` работает
 * иначе, и форма be рядом с ним не стоит.
 *
 * ВТОРАЯ ОПАСНОСТЬ — `would like` и `like`. Они похожи, а значат разное: `I like
 * coffee` — о вкусе вообще, `I'd like a coffee` — просьба сейчас. Урок 6 ставит
 * их рядом, потому что порознь их не различить.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Ступень подтверждена, сверх A1 модуль берёт один
 * пункт и объявляет его.
 *
 * 1. English Grammar Profile, VERBS patterns_with to and -ing, ступень A1:
 *    — «FORM: 'LIKE' + 'TO'-INFINITIVE OR + '-ING'» — «Can use 'like' followed
 *      either by a 'to'-infinitive or an '-ing' form, with no change in
 *      meaning», пример источника: «I like to work with my teacher». Это
 *      основание уроков 1 и 2, и там же сказано главное: разницы в значении
 *      между двумя способами нет;
 *    — «FORM: VERB + 'TO'-INFINITIVE» — «Can use a limited range of verbs
 *      followed by a 'to'-infinitive», пример источника: «I like to go to the
 *      zoo»;
 *    — «FORM: 'WOULD LIKE TO'» — «Can use 'would like to' + infinitive».
 *
 * 2. English Grammar Profile, MODALITY would, ступень A1:
 *    — «FORM: AFFIRMATIVE WITH 'LIKE'» — «Can use the affirmative form with
 *      'like'», пример источника: «I'd like to invite you to dinner»;
 *    — «USE: WISHES AND PREFERENCES WITH 'LIKE'» — «Can use 'would like' to
 *      talk about wishes and preferences», пример источника: «If possible, I'd
 *      like to come to see you on Tuesday afternoon».
 *
 * 3. English Grammar Profile, ADVERBS, ступень A1, «USE: DEGREE WITH VERBS» —
 *    «Can use 'really' and 'very much' with verbs expressing preference
 *    ('like', 'love'), for emphasis», пример источника: «I really like theatre
 *    and a classical music». Это основание урока 4, и слова названы в источнике
 *    поимённо — оба взяты.
 *
 * 4. Слова модуля — Oxford 3000, все A1: love v. A1, food n. A1, sport n. A1,
 *    swimming n. A1, cinema n. A1, favourite adj. A1, cake n. A1. Уже введены
 *    раньше: like, music, coffee (модуль 14), tea (модуль 5), film
 *    (модуль 17), walk (модуль 15).
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ И ОБЪЯВЛЕНО:
 *
 * — ВОПРОС `Would you like…?` — A2, CLAUSES interrogatives, «FORM: AFFIRMATIVE
 *   INTERROGATIVE, WITH MODAL AUXILIARY VERBS»: «Can form interrogative clauses
 *   ('yes/no' forms) with modal auxiliary verbs», пример источника — «Would you
 *   like to come with me?».
 *
 *   ПОЧЕМУ ВЗЯТ И НАСКОЛЬКО. Урок 7 показывает его одной строкой — как узнать
 *   в чужой речи, а не как строить самому. Полностью вопрос разбирается в
 *   модуле 22, где по программе стоит `would like` в приглашении. Задания на
 *   построение этого вопроса здесь нет ни одного: иначе модуль 21 отберёт у
 *   модуля 22 его же предмет.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — ПРИГЛАШЕНИЙ. `Would you like to come?` — предмет модуля 22.
 * — ГЛАГОЛА `love` В СОЧЕТАНИИ С ГЛАГОЛОМ (`I love reading`). Источник называет
 *   `love` в одной строке с `like` для наречий, но строка про инфинитив и
 *   `-ing` говорит только о `like`. Поэтому `love` в модуле стоит лишь с
 *   названием вещи: `I love music`.
 * — ОТРИЦАНИЯ `I wouldn't like`. Источник его на этой ступени не называет,
 *   и в разговоре о вкусах оно почти не нужно.
 */
const module: Module = {
  slug: "mne-nravitsya",
  title: "Мне нравится",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, VERBS patterns_with to and -ing, «FORM: 'LIKE' + 'TO'-INFINITIVE OR + " +
        "'-ING'»: «Can use 'like' followed either by a 'to'-infinitive or an '-ing' " +
        "form, with no change in meaning», пример источника — «I like to work with " +
        "my teacher». " +
        "A1, VERBS patterns_with to and -ing, «FORM: VERB + 'TO'-INFINITIVE»: «Can " +
        "use a limited range of verbs followed by a 'to'- infinitive», пример " +
        "источника — «I like to go to the zoo». " +
        "A1, VERBS patterns_with to and -ing, «FORM: 'WOULD LIKE TO'»: «Can use " +
        "'would like to' + infinitive». " +
        "A1, MODALITY would, «USE: WISHES AND PREFERENCES WITH 'LIKE'»: «Can use " +
        "'would like' to talk about wishes and preferences». " +
        "A1, ADVERBS adverbs and adverb phrases: types and meanings, «USE: DEGREE " +
        "WITH VERBS»: «Can use 'really' and 'very much' with verbs expressing " +
        "preference ('like', 'love'), for emphasis», пример источника — «I really " +
        "like theatre and a classical music». " +
        "A2, CLAUSES interrogatives, «FORM: AFFIRMATIVE INTERROGATIVE, WITH MODAL " +
        "AUXILIARY VERBS»: «Can form interrogative clauses ('yes/no' forms) with " +
        "modal auxiliary verbs», пример источника — «Would you like to come with " +
        "me?» — это вопрос Would you like…?, взят сверх ступени одной строкой на " +
        "узнавание и объявлен в шапке модуля",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометкой A1: love v. A1, food n. A1, swimming n. A1, " +
        "cake n. A1. " +
        "ПРЕЖНЯЯ РЕДАКЦИЯ называла новыми ещё три слова — sport, cinema и favourite, " +
        "— а они введены раньше: sport в модуле 16, cinema в модуле 13, favourite в " +
        "модуле 11. У sport совпадал даже пример на карточке. Вторая карточка говорит " +
        "ученику, что слово новое, и он решает, что забыл его. Карточки убраны, слова " +
        "остались в работе урока. Нашёл методист",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "говорить, что нравится делать: I like to read",
    "пользоваться формой с -ing: I like reading",
    "говорить, что не нравится: I don't like waiting",
    "усиливать сказанное: I really like it",
    "спрашивать о вкусах: Do you like coffee?",
    "просить то, чего хочешь сейчас: I'd like a coffee",
    "говорить о своём желании: I'd like to go home",
    "рассказывать о своих вкусах",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "nravitsya-delat",
      title: "Нравится делать: I like to read",
      estimatedMinutes: 13,
      outcome: "говорить, что нравится делать: I like to read",

      blocks: [
        {
          id: "zachem-nravitsya-delat",
          kind: "explain",
          text: [
            "Сказать «мне нравится музыка» ты умеешь с модуля «Что я делаю»: I like " +
              "music.",
            "Но чаще нравится не вещь, а занятие: читать, гулять, готовить.",
            "Тогда после like ставят to и глагол: I like to read.",
          ],
        },
        {
          id: "tablica-like-to",
          kind: "table",
          caption: "Нравится вещь и нравится занятие",
          head: ["Английский", "Перевод"],
          rows: [
            ["I like music.", "Мне нравится музыка."],
            ["I like to read.", "Мне нравится читать."],
            ["I like to walk.", "Мне нравится гулять."],
          ],
        },
        {
          id: "glagol-bez-izmeneniy",
          kind: "explain",
          text: [
            "Глагол после to стоит в том виде, в каком записан в словаре.",
            "Окончания ему не нужны: ни -s, ни -ing.",
            "I like to read — и всё. Слово to здесь обязательно.",
          ],
        },
        {
          id: "ne-like-read",
          kind: "note",
          tone: "mistake",
          text:
            "«I like read» — так не говорят.\n\nМежду двумя глаголами нужно to: " +
            "I like to read.",
        },
        {
          id: "primer-like-to",
          kind: "example",
          caption: "Три занятия",
          text: "I like to read.\nI like to cook.\nMy sister likes to swim.",
          explain:
            "В третьем предложении у like стоит -s, потому что речь о сестре. А глагол " +
            "после to остаётся без окончания всегда.",
        },
        {
          id: "zapis-like-to",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I like to read. I like to cook. My sister likes to swim.",
        },
        {
          id: "slovar-like-to",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "love", translation: "очень любить", example: "I love music.", hint: "/lʌv/" },
            { term: "food", translation: "еда", example: "I like this food.", hint: "/fuːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-to-posle-like",
          kind: "gap",
          prompt: "Тебе нравится готовить. Допиши недостающее слово.",
          before: "I like ",
          after: " cook.",
          answer: "to",
          hint: "Между двумя глаголами стоит одно короткое слово.",
          why: "I like to cook. Без to два глагола рядом не ставят.",
        },
        {
          id: "z2-vybrat-like-to-read",
          kind: "choice",
          prompt: "Тебе нравится читать. В каком предложении нет ошибки?",
          options: [
            { text: "I like read." },
            { text: "I like to read.", correct: true },
            { text: "I like to reads." },
          ],
          hint: "Нужно to, а глагол после него — без окончания.",
          why:
            "I like to read. Без to получается два глагола подряд, а окончание -s " +
            "после to не приходит.",
        },
        {
          id: "z3-otmetit-bez-to",
          kind: "hottext",
          prompt: "Отметь записи, где потеряно слово to.",
          parts: [
            { text: "I like to walk.", selectable: true },
            { text: " · " },
            { text: "I like walk.", selectable: true, correct: true },
            { text: " · " },
            { text: "She likes cook.", selectable: true, correct: true },
            { text: " · " },
            { text: "She likes to cook.", selectable: true },
          ],
          hint: "Перед вторым глаголом всегда стоит to.",
          why: "Верно: I like to walk и She likes to cook.",
        },
        {
          id: "z4-sobrat-like-to-swim",
          kind: "order",
          prompt: "Собери предложение: «Мне нравится плавать.»",
          items: ["swim", "like", "I", "to"],
          answer: [2, 1, 3, 0],
          hint: "Третьим идёт короткое слово перед глаголом.",
          why: "I like to swim. Сначала I, потом like, потом to, потом глагол.",
        },
        {
          id: "z5-napisat-like-to",
          kind: "short",
          prompt: "Напиши, что тебе нравится гулять. Гулять — walk.",
          answer: "I like to walk.",
          // Форму с -ing ученик встретит в следующем уроке, но если он уже её
          // знает — ответ верен, и засчитать его обязаны.
          accept: ["I like walking."],
          hint: "Не забудь слово между глаголами.",
          why: "I like to walk. Между like и walk стоит to.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vtoroy-sposob",
      title: "Форма с -ing: I like reading",
      estimatedMinutes: 14,
      outcome: "пользоваться формой с -ing: I like reading",

      blocks: [
        {
          id: "zachem-vtoroy-sposob",
          kind: "explain",
          text: [
            "У этой мысли есть и вторая форма — с окончанием -ing: I like reading.",
            "Значит он ровно то же, что I like to read. Выбирай любой.",
            "Форма с -ing встречается чаще, и узнавать её надо обязательно.",
          ],
        },
        {
          id: "tablica-dva-sposoba",
          kind: "table",
          caption: "Две формы, одно значение",
          head: ["Форма с to", "Форма с -ing", "Перевод"],
          rows: [
            ["I like to read.", "I like reading.", "Мне нравится читать."],
            ["I like to swim.", "I like swimming.", "Мне нравится плавать."],
            ["I like to cook.", "I like cooking.", "Мне нравится готовить."],
          ],
        },
        {
          id: "ing-zdes-inache",
          kind: "explain",
          text: [
            "Окончание -ing тебе знакомо по модулю «Прямо сейчас»: I am reading — " +
              "читаю в эту минуту.",
            "После like оно работает иначе и о минуте не говорит вовсе.",
            "Отличить просто: там рядом стоит форма be, а здесь её нет.",
          ],
        },
        {
          id: "ne-like-am-reading",
          kind: "note",
          tone: "mistake",
          text:
            "«I like am reading» — так не говорят.\n\nФорма be сюда не приходит: " +
            "после like сразу идёт глагол с окончанием. Верно: I like reading.",
        },
        {
          id: "primer-dva-sposoba",
          kind: "example",
          caption: "Одно и то же дважды",
          text: "I like reading. I like to read.\nI am reading now.",
          explain:
            "Первые два предложения значат одно: мне нравится читать. Третье — о том, " +
            "что идёт сейчас, и в нём стоит форма be.",
        },
        {
          id: "zapis-dva-sposoba",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I like reading. I like to read. I am reading now.",
        },
        {
          id: "slovar-vtoroy-sposob",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "swimming", translation: "плавание", example: "I like swimming.", hint: "/ˈswɪmɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-ing-posle-like",
          kind: "gap",
          prompt: "Тебе нравится плавать. Скажи это формой с -ing. Плавать — swim.",
          before: "I like ",
          after: ".",
          answer: "swimming",
          hint: "У swim перед окончанием удваивается последняя буква.",
          why: "I like swimming. Это то же самое, что I like to swim.",
        },
        {
          id: "z2-vybrat-like-reading",
          kind: "choice",
          prompt: "Тебе нравится читать. Какая запись говорит именно об этом?",
          options: [
            { text: "I am reading." },
            { text: "I like reading.", correct: true },
            { text: "I like am reading." },
          ],
          hint: "Форма be рядом с like не стоит.",
          why:
            "I like reading. Первая запись — о том, что идёт сейчас, а в третьей " +
            "форма be лишняя.",
        },
        {
          id: "z3-otmetit-oba-sposoba",
          kind: "hottext",
          prompt: "Отметь записи, которые значат «мне нравится готовить».",
          parts: [
            { text: "I like to cook.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am cooking.", selectable: true },
            { text: " · " },
            { text: "I like cooking.", selectable: true, correct: true },
            { text: " · " },
            { text: "I cook every day.", selectable: true },
          ],
          hint: "Способов два, и оба начинаются одинаково.",
          why:
            "I like to cook и I like cooking значат одно. «I am cooking» — о том, что " +
            "идёт сейчас, «I cook every day» — о том, что бывает каждый день.",
        },
        {
          id: "z4-sopostavit-sposoby",
          kind: "match",
          prompt: "Сопоставь запись с to и ту же мысль с окончанием -ing.",
          left: ["I like to swim.", "I like to read.", "I like to cook."],
          right: ["I like cooking.", "I like swimming.", "I like reading."],
          answer: [1, 2, 0],
          hint: "Глагол в паре один и тот же.",
          why: "To swim — swimming, to read — reading, to cook — cooking.",
        },
        {
          id: "z5-napisat-vtorym-sposobom",
          kind: "short",
          prompt: "Напиши это формой с -ing: I like to walk.",
          answer: "I like walking.",
          hint: "Слово to уходит, а глагол берёт окончание.",
          why: "I like walking. Значение то же самое, что у I like to walk.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-ne-nravitsya",
      title: "Что не нравится: I don't like waiting",
      estimatedMinutes: 12,
      outcome: "говорить, что не нравится: I don't like waiting",

      blocks: [
        {
          id: "zachem-ne-nravitsya",
          kind: "explain",
          text: [
            "Рассказ о вкусах неполон, пока не сказано и обратное.",
            "Отрицание строится как всегда: перед like встаёт don't.",
            "I don't like waiting. Обе формы после этого работают по-прежнему.",
          ],
        },
        {
          id: "tablica-ne-nravitsya",
          kind: "table",
          caption: "Нравится и не нравится",
          head: ["Английский", "Перевод"],
          rows: [
            ["I like waiting.", "Мне нравится ждать."],
            ["I don't like waiting.", "Мне не нравится ждать."],
            ["She doesn't like waiting.", "Ей не нравится ждать."],
          ],
        },
        {
          id: "posle-dont-bez-s",
          kind: "explain",
          text: [
            "После don't и doesn't глагол like стоит без окончания.",
            "Это правило из модуля «Я не делаю», и здесь оно не меняется.",
            "She doesn't like — а не She doesn't likes.",
          ],
        },
        {
          id: "ne-dont-likes",
          kind: "note",
          tone: "mistake",
          text:
            "«She doesn't likes waiting» — так не говорят.\n\nОкончание -s уже " +
            "ушло в doesn't. Верно: She doesn't like waiting.",
        },
        {
          id: "primer-ne-nravitsya",
          kind: "example",
          caption: "Что человеку не нравится",
          text: "I don't like waiting.\nI don't like to wait.\nMy brother doesn't like cooking.",
          explain:
            "Первые два предложения значат одно: отрицание не отменяет ни одного из " +
            "двух форм. В третьем стоит doesn't, потому что речь о брате.",
        },
        {
          id: "zapis-ne-nravitsya",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I don't like waiting. I don't like to wait. My brother doesn't like cooking.",
        },
        // Словаря у урока больше нет: единственным словом было cinema, а оно
        // введено в модуле 13. Новых слов урок не даёт — он весь о грамматике.

        // ---- задания ----
        {
          id: "z1-dopisat-dont-like",
          kind: "gap",
          prompt: "Тебе не нравится ждать. Допиши недостающее слово.",
          before: "I ",
          after: " like waiting.",
          answer: "don't",
          accept: ["do not"],
          hint: "Отрицание встаёт перед like.",
          why: "I don't like waiting. Годится и полная запись do not.",
        },
        {
          id: "z2-vybrat-doesnt-like",
          kind: "choice",
          prompt: "Твоей сестре не нравится готовить. В каком предложении нет ошибки?",
          options: [
            { text: "My sister doesn't likes cooking." },
            { text: "My sister don't like cooking." },
            { text: "My sister doesn't like cooking.", correct: true },
          ],
          hint: "О сестре идёт doesn't, а окончание после него уже не нужно.",
          why:
            "My sister doesn't like cooking. Окончание -s ушло в doesn't, а don't " +
            "идёт не с сестрой, а с I, you, we и they.",
        },
        {
          id: "z3-otmetit-lishnee-s-posle-doesnt",
          kind: "hottext",
          prompt: "Отметь записи, где у глагола лишнее окончание.",
          parts: [
            { text: "He doesn't like waiting.", selectable: true },
            { text: " · " },
            { text: "He doesn't likes waiting.", selectable: true, correct: true },
            { text: " · " },
            { text: "She doesn't likes swimming.", selectable: true, correct: true },
            { text: " · " },
            { text: "She doesn't like swimming.", selectable: true },
          ],
          hint: "Окончание уже стоит в doesn't.",
          why: "Верно: He doesn't like waiting и She doesn't like swimming.",
        },
        {
          id: "z4-sobrat-ne-nravitsya",
          kind: "order",
          prompt: "Собери предложение: «Мне не нравится ждать.»",
          items: ["waiting", "don't", "I", "like"],
          answer: [2, 1, 3, 0],
          hint: "Отрицание стоит между I и like.",
          why: "I don't like waiting. Сначала I, потом don't, потом like.",
        },
        {
          id: "z5-napisat-ne-nravitsya",
          kind: "short",
          prompt: "Напиши, что тебе не нравится готовить. Готовить — cook.",
          answer: "I don't like cooking.",
          accept: ["I don't like to cook.", "I do not like cooking.", "I do not like to cook."],
          hint: "Годится любая из двух форм.",
          why:
            "I don't like cooking. Годится и I don't like to cook: отрицание не " +
            "отменяет ни одной из форм.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ochen-nravitsya",
      title: "Очень нравится: I really like it",
      estimatedMinutes: 12,
      outcome: "усиливать сказанное: I really like it",

      blocks: [
        {
          id: "zachem-usilenie",
          kind: "explain",
          text: [
            "«Мне нравится» и «мне очень нравится» — разные вещи.",
            "Усилить помогает слово really, и стоит оно перед like: I really like it.",
            "Есть и другое слово — very much, но оно встаёт в конец: I like it very " +
              "much.",
          ],
        },
        {
          id: "tablica-usileniya",
          kind: "table",
          caption: "Два места для усиления",
          head: ["Английский", "Перевод", "Где стоит слово"],
          rows: [
            ["I like it.", "Мне это нравится.", "—"],
            ["I really like it.", "Мне это очень нравится.", "перед like"],
            ["I like it very much.", "Мне это очень нравится.", "в конце"],
          ],
        },
        {
          id: "gde-really",
          kind: "explain",
          text: [
            "Место у really то же, что у наречий частоты из модуля «Как часто».",
            "Оно встаёт между тем, о ком речь, и глаголом: I really like sport.",
            "А very much обычно ставят в конец: I like sport very much.",
          ],
        },
        {
          id: "ne-really-v-konce",
          kind: "note",
          tone: "mistake",
          text:
            "«I like it really» — так обычно не говорят.\n\nСлово really стоит перед " +
            "глаголом, а в конец ставят very much.",
        },
        {
          id: "primer-usileniya",
          kind: "example",
          caption: "Обычно и с усилением",
          text: "I like music.\nI really like music.\nI like music very much.",
          explain:
            "Вторая и третья строки значат одно и то же. Разница только в том, где " +
            "стоит усиление: really — перед глаголом, very much — в конце.",
        },
        {
          id: "zapis-usileniya",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I like music. I really like music. I like music very much.",
        },
        {
          id: "love-eto-tozhe-usilenie",
          kind: "note",
          tone: "info",
          text:
            "Усилить можно и глаголом love: I love music.\n\nОн сильнее, чем " +
            "like, и с названием вещи ведёт себя так же: I love sport.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-really",
          kind: "gap",
          prompt: "Тебе очень нравится спорт. Допиши недостающее слово.",
          before: "I ",
          after: " like sport.",
          answer: "really",
          hint: "Усиление стоит перед глаголом.",
          why: "I really like sport. Слово really встаёт между I и like.",
        },
        {
          id: "z2-vybrat-mesto-really",
          kind: "choice",
          prompt: "Тебе очень нравится эта еда. В каком предложении нет ошибки?",
          options: [
            { text: "I like really this food." },
            { text: "I really like this food.", correct: true },
            { text: "Really I like this food." },
          ],
          hint: "Really стоит между тем, о ком речь, и глаголом.",
          why:
            "I really like this food. Слово really встаёт перед глаголом, как и " +
            "наречия частоты.",
        },
        {
          id: "z3-otmetit-mesto-usileniya",
          kind: "hottext",
          prompt: "Отметь записи, где усиление стоит не на своём месте.",
          parts: [
            { text: "I really like sport.", selectable: true },
            { text: " · " },
            { text: "I like sport really.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like very much sport.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like sport very much.", selectable: true },
          ],
          hint: "Really идёт перед глаголом, very much — в конец.",
          why:
            "Верно: I really like sport и I like sport very much. В «I like sport " +
            "really» и «I like very much sport» усиление стоит не на своём месте.",
        },
        {
          id: "z4-sobrat-very-much",
          kind: "order",
          prompt:
            "Собери предложение: «Мне очень нравится этот фильм.» Слова very much " +
            "поставь в конец.",
          items: ["very much", "this film", "like", "I"],
          answer: [3, 2, 1, 0],
          hint: "Усиление very much идёт в самый конец.",
          why: "I like this film very much. Слова very much стоят после того, что нравится.",
        },
        {
          id: "z5-napisat-really",
          kind: "short",
          prompt: "Напиши, что тебе очень нравится музыка. Усиль словом really.",
          answer: "I really like music.",
          hint: "Really стоит перед глаголом.",
          why: "I really like music. То же можно сказать и так: I like music very much.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-o-vkusah",
      title: "Спросить о вкусах: Do you like coffee?",
      estimatedMinutes: 12,
      outcome: "спрашивать о вкусах: Do you like coffee?",

      blocks: [
        {
          id: "zachem-vopros-o-vkusah",
          kind: "explain",
          text: [
            "Разговор о вкусах в одну сторону не идёт: спросить надо и самому.",
            "Вопрос строится через do — так же, как в модуле «Спросить о делах».",
            "Do you like coffee? Do you like swimming?",
          ],
        },
        {
          id: "tablica-vopros-o-vkusah",
          kind: "table",
          caption: "Три вопроса о вкусах",
          head: ["Английский", "Перевод"],
          rows: [
            ["Do you like coffee?", "Тебе нравится кофе?"],
            ["Do you like swimming?", "Тебе нравится плавать?"],
            ["What do you like?", "Что тебе нравится?"],
          ],
        },
        {
          id: "otvet-o-vkusah",
          kind: "explain",
          text: [
            "Ответ короткий и знакомый: Yes, I do. No, I don't.",
            "Глагол like в ответе не повторяют.",
            "А после короткого ответа хорошо добавить своё: No, I don't. I like tea.",
          ],
        },
        {
          id: "ne-smeshivay-dva-sposoba",
          kind: "note",
          tone: "mistake",
          text:
            "«Do you like to swimming?» — так не говорят.\n\nСпособа два, и брать " +
            "надо один: либо to swim, либо swimming.",
        },
        {
          id: "primer-voprosa-o-vkusah",
          kind: "example",
          caption: "Разговор о вкусах",
          text: "— Do you like coffee?\n— No, I don't. I like tea.\n— What do you like doing?\n— I like reading.",
          explain:
            "В первом вопросе после like стоит название вещи. В третьем — вопрос о " +
            "занятии, и там же форма с -ing: doing и reading с окончанием.",
        },
        {
          id: "zapis-voprosa-o-vkusah",
          kind: "audio",
          pace: "slow",
          caption: "Послушай разговор",
          transcript: "Do you like coffee? No, I don't. I like tea.",
        },
        // Словаря у урока больше нет: единственным словом было favourite, а оно
        // введено в модуле 11.

        // ---- задания ----
        {
          id: "z1-dopisat-do-v-voprose-o-vkusah",
          kind: "gap",
          prompt: "Ты хочешь узнать, нравится ли собеседнику кофе. Допиши недостающее слово.",
          before: "",
          after: " you like coffee?",
          answer: "Do",
          hint: "Вопрос о вкусах открывает то же слово, что вопрос о делах.",
          why: "Do you like coffee? Вопрос строится через do.",
        },
        {
          id: "z2-vybrat-vopros-o-zanyatii",
          kind: "choice",
          prompt: "Ты хочешь узнать, нравится ли собеседнику плавать. Как спросить?",
          options: [
            { text: "Do you like to swimming?" },
            { text: "Do you like swimming?", correct: true },
            { text: "Do you like swim?" },
          ],
          hint: "Способ нужно взять один, а не оба сразу.",
          why:
            "Do you like swimming? Годится и Do you like to swim, а вот смешивать " +
            "формы нельзя.",
        },
        {
          id: "z3-otvetit-net-o-vkusah",
          kind: "short",
          prompt: "Тебя спросили: Do you like coffee? Кофе тебе не нравится. Ответь коротко — нет.",
          answer: "No, I don't.",
          accept: ["No, I do not."],
          hint: "Глагол like в ответе не повторяют.",
          why: "No, I don't. Хватает одного don't.",
        },
        {
          id: "z4-otmetit-smeshannye-sposoby",
          kind: "hottext",
          prompt: "Отметь вопросы, где две формы смешаны в одну.",
          parts: [
            { text: "Do you like reading?", selectable: true },
            { text: " · " },
            { text: "Do you like to reading?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you like to cooking?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you like to cook?", selectable: true },
          ],
          hint: "Либо to и глагол без окончания, либо окончание без to.",
          why: "Верно: Do you like reading? и Do you like to cook?",
        },
        {
          id: "z5-sprosit-chto-nravitsya",
          kind: "short",
          prompt: "Спроси у собеседника, что ему нравится.",
          answer: "What do you like?",
          hint: "Четыре слова, первое — вопросительное.",
          why: "What do you like? После What идёт do, потом you, потом like.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "hochu-seychas",
      title: "Хочу сейчас: I'd like a coffee",
      estimatedMinutes: 13,
      outcome: "просить то, чего хочешь сейчас: I'd like a coffee",

      blocks: [
        {
          id: "zachem-would-like",
          kind: "explain",
          text: [
            "Ты в кафе и хочешь кофе. «I like coffee» тут не подходит: это о вкусе " +
              "вообще, а не о том, чего ты хочешь сейчас.",
            "Для желания есть свой оборот: I'd like a coffee.",
            "I'd — короткая запись от I would. Полностью: I would like a coffee.",
          ],
        },
        {
          id: "tablica-like-i-would-like",
          kind: "table",
          caption: "Вкус и желание",
          head: ["Английский", "Перевод", "О чём речь"],
          rows: [
            ["I like coffee.", "Мне нравится кофе.", "о вкусе вообще"],
            ["I'd like a coffee.", "Я хочу кофе.", "о желании сейчас"],
            ["I'd like a tea, please.", "Я хочу чаю, пожалуйста.", "о желании сейчас"],
          ],
        },
        {
          id: "kak-ustroeno-would-like",
          kind: "explain",
          text: [
            "Оборот один на всех: I'd like, he'd like, we'd like.",
            "Слово would не меняется — как и can из модуля «Я умею».",
            "После него всегда стоит like, а дальше — то, чего хочешь.",
          ],
        },
        {
          id: "ne-would-like-to-veshch",
          kind: "note",
          tone: "mistake",
          text:
            "«I'd like to a coffee» — так не говорят.\n\nСлово to нужно только перед " +
            "глаголом. Перед названием вещи его нет: I'd like a coffee.",
        },
        {
          id: "primer-would-like",
          kind: "example",
          caption: "В кафе",
          text: "— I'd like a coffee, please.\n— And you?\n— I'd like a tea.",
          explain:
            "В обоих ответах стоит I'd like и название того, чего хочет человек. " +
            "Слово please делает просьбу мягче и ставится в конце.",
        },
        {
          id: "zapis-would-like",
          kind: "audio",
          pace: "slow",
          caption: "Послушай два заказа",
          transcript: "I'd like a coffee, please. I'd like a tea.",
        },
        {
          id: "slovar-would-like",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "would", translation: "часть оборота I'd like, само не переводится", example: "I would like a coffee.", hint: "/wʊd/" },
            { term: "cake", translation: "торт, пирожное", example: "I'd like a cake.", hint: "/keɪk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-would-like",
          kind: "gap",
          prompt: "Ты в кафе и хочешь кофе. Допиши недостающее слово.",
          before: "I'd ",
          after: " a coffee.",
          answer: "like",
          hint: "После I'd всегда идёт одно и то же слово.",
          why: "I'd like a coffee. Оборот целиком: I'd like.",
        },
        {
          id: "z2-vybrat-like-ili-would-like",
          kind: "choice",
          prompt: "Ты сейчас в кафе и хочешь чаю. Как сказать?",
          options: [
            { text: "I like tea." },
            { text: "I'd like a tea.", correct: true },
            { text: "I'd like to a tea." },
          ],
          hint: "О желании сейчас говорят оборотом I'd like.",
          why:
            "I'd like a tea. Первое предложение — о вкусе вообще, а в третьем слово " +
            "to лишнее: оно нужно только перед глаголом.",
        },
        {
          id: "z3-otmetit-lishnee-to",
          kind: "hottext",
          prompt: "Отметь записи, где слово to лишнее.",
          parts: [
            { text: "I'd like a coffee.", selectable: true },
            { text: " · " },
            { text: "I'd like to a coffee.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'd like to a cake.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'd like a cake.", selectable: true },
          ],
          hint: "Перед названием вещи слово to не ставят.",
          why: "Верно: I'd like a coffee и I'd like a cake.",
        },
        {
          id: "z4-sopostavit-vkus-i-zhelanie",
          kind: "match",
          prompt: "Сопоставь предложение и то, о чём в нём речь.",
          left: ["I like coffee.", "I'd like a coffee.", "I don't like coffee."],
          right: ["чего человек хочет сейчас", "что человеку нравится вообще", "что человеку не нравится"],
          answer: [1, 0, 2],
          hint: "Оборот I'd like говорит о желании в эту минуту.",
          why:
            "I like coffee — о вкусе вообще. I'd like a coffee — о желании сейчас. " +
            "I don't like coffee — о том, что человеку не нравится.",
        },
        {
          id: "z5-napisat-zakaz",
          kind: "short",
          prompt: "Ты в кафе и хочешь чаю. Напиши это и добавь «пожалуйста». Чай — a tea.",
          answer: "I'd like a tea, please.",
          accept: ["I would like a tea, please."],
          hint: "Слово please идёт в конце.",
          why: "I'd like a tea, please. Полная запись I would like тоже верна.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "hochetsya-sdelat",
      title: "Хочется сделать: I'd like to go home",
      estimatedMinutes: 13,
      outcome: "говорить о своём желании: I'd like to go home",

      blocks: [
        {
          id: "zachem-would-like-to",
          kind: "explain",
          text: [
            "Хотеть можно не только вещь, но и занятие: пойти домой, посмотреть фильм.",
            "Тогда после I'd like ставят to и глагол: I'd like to go home.",
            "Это то же самое to, что после обычного like.",
          ],
        },
        {
          id: "tablica-would-like-to",
          kind: "table",
          caption: "Хочу вещь и хочу занятие",
          head: ["Английский", "Перевод"],
          rows: [
            ["I'd like a coffee.", "Я хочу кофе."],
            ["I'd like to go home.", "Я хочу пойти домой."],
            ["I'd like to see this film.", "Я хочу посмотреть этот фильм."],
          ],
        },
        {
          id: "raznica-like-i-would-like-to",
          kind: "explain",
          text: [
            "Разница с обычным like остаётся прежней.",
            "I like to read — о вкусе вообще, читать нравится всегда.",
            "I'd like to read — о желании сейчас, хочется почитать в эту минуту.",
          ],
        },
        {
          id: "vtorogo-sposoba-zdes-net",
          kind: "note",
          tone: "mistake",
          text:
            "«I'd like reading» о желании — так не говорят.\n\nФорма с окончанием " +
            "-ing работает только у обычного like. После I'd like стоит слово to " +
            "и глагол: I'd like to read.",
        },
        {
          id: "primer-would-like-to",
          kind: "example",
          caption: "Три желания",
          text: "I'd like to go home.\nI'd like to see this film.\nMy sister would like to swim.",
          explain:
            "В третьем предложении оборот стоит полностью: would like. Он одинаков " +
            "для всех, и окончание -s к нему не приходит.",
        },
        {
          id: "zapis-would-like-to",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три желания",
          transcript: "I'd like to go home. I'd like to see this film. My sister would like to swim.",
        },
        {
          id: "vopros-vstretitsya-dalshe",
          kind: "note",
          tone: "info",
          text:
            "В чужой речи встретится и вопрос: Would you like to come?\n\nЭто " +
            "приглашение. Строить его самому научишься в следующем модуле, а пока " +
            "хватит того, чтобы узнавать его на слух.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-to-posle-would-like",
          kind: "gap",
          prompt: "Ты хочешь пойти домой. Допиши недостающее слово.",
          before: "I'd like ",
          after: " go home.",
          answer: "to",
          hint: "Перед глаголом стоит то же слово, что после обычного like.",
          why: "I'd like to go home. Перед глаголом всегда идёт to.",
        },
        {
          id: "z2-vybrat-would-like-to",
          kind: "choice",
          prompt: "Ты хочешь посмотреть этот фильм. В каком предложении нет ошибки?",
          options: [
            { text: "I'd like seeing this film." },
            { text: "I'd like see this film." },
            { text: "I'd like to see this film.", correct: true },
          ],
          hint: "После I'd like форма с -ing не работает.",
          why:
            "I'd like to see this film. Окончание -ing после I'd like не ставят, а " +
            "без to два глагола рядом не идут.",
        },
        {
          id: "z3-otmetit-ing-posle-would-like",
          kind: "hottext",
          prompt: "Отметь записи, где после I'd like стоит глагол с окончанием.",
          parts: [
            { text: "I'd like to go home.", selectable: true },
            { text: " · " },
            { text: "I'd like going home.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'd like swimming.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'd like to swim.", selectable: true },
          ],
          hint: "После I'd like идёт только to и глагол.",
          why: "Верно: I'd like to go home и I'd like to swim.",
        },
        {
          id: "z4-sopostavit-vkus-i-zhelanie-s-glagolom",
          kind: "match",
          prompt: "Сопоставь предложение и его перевод.",
          left: ["I like to read.", "I'd like to read.", "I am reading."],
          right: ["Я читаю сейчас.", "Мне нравится читать.", "Я хочу почитать."],
          answer: [1, 2, 0],
          hint: "Три записи — три разных смысла.",
          why:
            "I like to read — о вкусе вообще. I'd like to read — о желании сейчас. " +
            "I am reading — о том, что идёт в эту минуту.",
        },
        {
          id: "z5-napisat-zhelanie",
          kind: "short",
          prompt: "Напиши, что ты хочешь пойти домой. Пойти домой — go home.",
          answer: "I'd like to go home.",
          accept: ["I would like to go home."],
          hint: "После I'd like идёт to и глагол.",
          why: "I'd like to go home. Полная запись I would like тоже верна.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-vkusah",
      title: "Рассказ о вкусах",
      estimatedMinutes: 13,
      outcome: "рассказывать о своих вкусах",

      blocks: [
        {
          id: "zachem-rasskaz-o-vkusah",
          kind: "explain",
          text: [
            "При знакомстве быстро доходит до вопроса «а что тебе нравится».",
            "Одним предложением тут не отделаться: собеседник ждёт нескольких.",
            "Всё нужное у тебя есть — осталось выстроить их подряд.",
          ],
        },
        {
          id: "tablica-iz-chego-rasskaz",
          kind: "table",
          caption: "Из чего складывается рассказ",
          head: ["Что сказать", "Как это выглядит"],
          rows: [
            ["что нравится", "I like reading."],
            ["что нравится очень", "I really like sport."],
            ["что не нравится", "I don't like waiting."],
            ["чего хочется сейчас", "I'd like to see this film."],
          ],
        },
        {
          id: "shagi-rasskaza-o-vkusah",
          kind: "explain",
          text: [
            "Начни с того, что нравится: этого обычно больше.",
            "Потом скажи, что нравится особенно сильно, — с really или с very much.",
            "И добавь обратное: без него рассказ звучит одинаково ровным.",
          ],
        },
        {
          id: "ne-tolko-like",
          kind: "note",
          tone: "info",
          text:
            "Рассказ из одного like выходит однообразным.\n\nЧередуй: like, really " +
            "like, love, don't like — все четыре у тебя уже есть.",
        },
        {
          id: "primer-rasskaza-o-vkusah",
          kind: "example",
          caption: "Рассказ целиком",
          text:
            "I like reading, and I really like sport.\nI don't like waiting.\nMy favourite food is bread.",
          explain:
            "Первое предложение соединяет два вкуса словом and. Второе говорит " +
            "обратное. Третье называет любимое — через favourite.",
        },
        {
          id: "zapis-rasskaza-o-vkusah",
          kind: "audio",
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "I like reading, and I really like sport. I don't like waiting. My favourite food is bread.",
        },
        {
          id: "favourite-eto-lyubimyy",
          kind: "note",
          tone: "info",
          text:
            "Слово favourite ставят перед названием: my favourite food, my favourite " +
            "film.\n\nОно само значит «любимый», и усиливать его словом really не " +
            "нужно.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-o-vkusah",
          kind: "order",
          prompt:
            "Собери рассказ: сначала что нравится, потом что не нравится, потом " +
            "что любимое.",
          items: ["I don't like waiting.", "My favourite food is bread.", "I like reading."],
          answer: [2, 0, 1],
          hint: "Порядок задан в условии.",
          why: "I like reading. I don't like waiting. My favourite food is bread.",
        },
        {
          id: "z2-dva-predlozheniya-o-vkusah",
          kind: "short",
          prompt:
            "Напиши два предложения о себе: что тебе очень нравится спорт и что не " +
            "нравится ждать. Спорт — sport, ждать — wait.",
          answer: "I really like sport. I don't like waiting.",
          accept: ["I really like sport. I don't like to wait."],
          hint: "В первом усиление, во втором отрицание.",
          why:
            "I really like sport. I don't like waiting. Годится и I don't like to " +
            "wait: годятся обе формы.",
        },
        {
          id: "z3-dopisat-favourite",
          kind: "gap",
          prompt: "Твоя любимая еда — хлеб. Допиши недостающее слово.",
          before: "My ",
          after: " food is bread.",
          answer: "favourite",
          hint: "Слово стоит перед названием.",
          why: "My favourite food is bread. Слово favourite значит «любимый».",
        },
        {
          id: "z4-otmetit-odnoobrazie",
          kind: "hottext",
          prompt: "Отметь записи, где сказано о сильном чувстве, а не о простом.",
          parts: [
            { text: "I like music.", selectable: true },
            { text: " · " },
            { text: "I really like music.", selectable: true, correct: true },
            { text: " · " },
            { text: "I love music.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like sport.", selectable: true },
          ],
          hint: "Усиливают слово really и глагол love.",
          why:
            "О сильном чувстве говорят I really like music и I love music. Два других " +
            "предложения — о простом.",
        },
        {
          id: "z5-rasskaz-vsluh-o-vkusah",
          kind: "speak",
          prompt: "Расскажи вслух о своих вкусах: три предложения.",
          phrase: "I like reading. I really like sport. I don't like waiting.",
          translation: "Мне нравится читать. Мне очень нравится спорт. Мне не нравится ждать.",
          hint: "Начни с того, что нравится, и не забудь обратное.",
          why:
            "Три предложения — уже рассказ. В нём есть и вкус, и усиление, и " +
            "обратное.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа не повторяет задания уроков: другие занятия, другие люди, другой
      // пропущенный кусок. Где верных ответов два — принимаются оба.

      // ---- итог 1 ----
      {
        id: "q-like-to-vybor",
        kind: "choice",
        outcome: "говорить, что нравится делать: I like to read",
        prompt: "Тебе нравится гулять. В каком предложении нет ошибки?",
        options: [
          { text: "I like walk." },
          { text: "I like to walk.", correct: true },
          { text: "I like to walks." },
        ],
        hint: "Между двумя глаголами стоит to, а окончание после него не нужно.",
        why: "I like to walk. Без to два глагола рядом не ставят, а -s после to не приходит.",
      },
      {
        id: "q-like-to-napisat",
        kind: "short",
        outcome: "говорить, что нравится делать: I like to read",
        prompt: "Напиши, что твоей сестре нравится готовить. Сестра — my sister, готовить — cook.",
        answer: "My sister likes to cook.",
        // Обе формы верны — источник говорит об этом прямо.
        accept: ["My sister likes cooking."],
        hint: "О сестре у like стоит окончание -s.",
        why:
          "My sister likes to cook. Годится и My sister likes cooking: формы две, " +
          "и значат они одно.",
      },
      {
        id: "q-like-to-sobrat",
        kind: "order",
        outcome: "говорить, что нравится делать: I like to read",
        // «I like to read» — заглавный пример первого урока, напечатанный в модуле
        // одиннадцать раз. Собирали заученное. Взят другой глагол.
        prompt: "Собери предложение: «Мне нравится готовить.»",
        items: ["cook", "to", "I", "like"],
        answer: [2, 3, 1, 0],
        hint: "Между like и глаголом встаёт ещё одно слово.",
        why: "I like to cook. Порядок: I, like, to, cook.",
      },

      // ---- итог 2 ----
      {
        id: "q-like-ing-dopisat",
        kind: "gap",
        outcome: "пользоваться формой с -ing: I like reading",
        prompt: "Тебе нравится готовить. Скажи это формой с -ing. Готовить — cook.",
        before: "I like ",
        after: ".",
        answer: "cooking",
        hint: "Запиши глагол так, чтобы to не понадобилось.",
        why: "I like cooking. Это то же самое, что I like to cook.",
      },
      {
        id: "q-like-ing-vybor",
        kind: "choice",
        outcome: "пользоваться формой с -ing: I like reading",
        prompt: "Какая запись значит «мне нравится гулять»?",
        options: [
          { text: "I like walking.", correct: true },
          { text: "I am walking." },
          { text: "I walk every day." },
        ],
        hint: "Речь о вкусе, а не о том, что идёт сейчас.",
        why:
          "I like walking. «I am walking» — о том, что идёт сейчас, «I walk every " +
          "day» — о том, что бывает каждый день.",
      },
      {
        id: "q-like-ing-perepisat",
        kind: "short",
        outcome: "пользоваться формой с -ing: I like reading",
        prompt: "Напиши это формой с -ing: I like to swim.",
        answer: "I like swimming.",
        hint: "У короткого глагола на один согласный буква перед окончанием повторяется.",
        why: "I like swimming. Слово to ушло, глагол взял окончание.",
      },

      // ---- итог 3 ----
      {
        id: "q-ne-nravitsya-dopisat",
        kind: "gap",
        outcome: "говорить, что не нравится: I don't like waiting",
        prompt: "Твоему брату не нравится ждать. Допиши недостающее слово.",
        before: "My brother ",
        after: " like waiting.",
        answer: "doesn't",
        accept: ["does not"],
        hint: "О брате идёт своя форма отрицания.",
        why: "My brother doesn't like waiting. С he, she и с именем идёт doesn't.",
      },
      {
        id: "q-ne-nravitsya-vybor",
        kind: "choice",
        outcome: "говорить, что не нравится: I don't like waiting",
        prompt: "Тебе не нравится гулять. В каком предложении нет ошибки?",
        options: [
          { text: "I don't likes walking." },
          { text: "I not like walking." },
          { text: "I don't like walking.", correct: true },
        ],
        hint: "После don't глагол стоит без окончания.",
        why:
          "I don't like walking. Окончание -s после don't не приходит, а без don't " +
          "отрицания не выходит.",
      },
      {
        id: "q-ne-nravitsya-napisat",
        kind: "short",
        outcome: "говорить, что не нравится: I don't like waiting",
        // «I don't like waiting» — заглавный пример своего урока, в модуле он стоит
        // семь раз. Взят другой глагол.
        prompt: "Напиши, что тебе не нравится гулять. Гулять — walk.",
        answer: "I don't like walking.",
        accept: [
          "I don't like to walk.",
          "I do not like walking.",
          "I do not like to walk.",
        ],
        hint: "Отрицание строится через don't.",
        why: "I don't like walking. Годится и I don't like to walk.",
      },

      // ---- итог 4 ----
      {
        id: "q-usilenie-dopisat",
        kind: "gap",
        outcome: "усиливать сказанное: I really like it",
        prompt: "Тебе очень нравится этот фильм. Усиль словами very much.",
        before: "I like this film ",
        after: ".",
        answer: "very much",
        hint: "Эти слова идут в самый конец.",
        why: "I like this film very much. Слова very much ставят после того, что нравится.",
      },
      {
        id: "q-usilenie-vybor",
        kind: "choice",
        outcome: "усиливать сказанное: I really like it",
        prompt: "Твоему брату очень нравится плавание. Как сказать?",
        options: [
          { text: "My brother really likes swimming.", correct: true },
          { text: "My brother likes really swimming." },
          { text: "My brother really like swimming." },
        ],
        hint: "Really встаёт перед глаголом, а у глагола о брате есть окончание.",
        why:
          "My brother really likes swimming. Really стоит перед глаголом, и " +
          "окончание -s у likes остаётся на месте.",
      },
      {
        id: "q-usilenie-napisat",
        kind: "short",
        outcome: "усиливать сказанное: I really like it",
        prompt: "Напиши, что твоей сестре очень нравится музыка. Усиль словом really.",
        answer: "My sister really likes music.",
        hint: "Really стоит перед глаголом, а у глагола о сестре есть окончание.",
        why: "My sister really likes music. Really встаёт между сестрой и глаголом.",
      },

      // ---- итог 5 ----
      {
        id: "q-vopros-o-vkusah-dopisat",
        kind: "gap",
        outcome: "спрашивать о вкусах: Do you like coffee?",
        prompt: "Ты хочешь узнать, нравится ли собеседнику плавать. Допиши недостающее слово.",
        before: "Do you like ",
        after: "?",
        answer: "swimming",
        accept: ["to swim"],
        hint: "Обе записи глагола здесь равно хороши.",
        why: "Do you like swimming? Годится и Do you like to swim.",
      },
      {
        id: "q-vopros-o-vkusah-vybor",
        kind: "choice",
        outcome: "спрашивать о вкусах: Do you like coffee?",
        prompt: "Ты хочешь узнать, что нравится собеседнику. Как спросить?",
        options: [
          { text: "What you like?" },
          { text: "What like you?" },
          { text: "What do you like?", correct: true },
        ],
        hint: "После вопросительного слова идёт do.",
        why: "What do you like? Без do вопрос не строится, а порядок «What like you» перевёрнут.",
      },
      {
        id: "q-vopros-o-vkusah-sprosit",
        kind: "short",
        outcome: "спрашивать о вкусах: Do you like coffee?",
        prompt: "Спроси у собеседника, нравится ли ему спорт. Спорт — sport.",
        answer: "Do you like sport?",
        hint: "Вопрос начинается с двух букв.",
        why: "Do you like sport? Вопрос строится через do.",
      },

      // ---- итог 6 ----
      {
        id: "q-would-like-dopisat",
        kind: "gap",
        outcome: "просить то, чего хочешь сейчас: I'd like a coffee",
        prompt: "Ты в кафе и хочешь чаю. Допиши недостающее слово.",
        before: "I'd like ",
        after: " tea.",
        answer: "a",
        hint: "Перед названием одной вещи стоит короткое слово.",
        why: "I'd like a tea. Перед названием вещи слово to не ставят.",
      },
      {
        id: "q-would-like-vybor",
        kind: "choice",
        outcome: "просить то, чего хочешь сейчас: I'd like a coffee",
        prompt: "Ты сейчас в кафе и хочешь кофе. Как сказать?",
        options: [
          { text: "I'd like a coffee.", correct: true },
          { text: "I like coffee." },
          { text: "I'd like to a coffee." },
        ],
        hint: "Речь о желании прямо сейчас, а не о вкусе вообще.",
        why:
          "I'd like a coffee. «I like coffee» — о вкусе вообще, а в третьем " +
          "предложении слово to лишнее.",
      },
      {
        id: "q-would-like-napisat",
        kind: "short",
        outcome: "просить то, чего хочешь сейчас: I'd like a coffee",
        prompt: "Ты в кафе и хочешь пирожное. Напиши это и добавь «пожалуйста». Пирожное — a cake.",
        answer: "I'd like a cake, please.",
        accept: ["I would like a cake, please."],
        hint: "Начни с оборота о желании и не забудь вежливое слово.",
        why: "I'd like a cake, please. Короткое I'd прячет в себе would, поэтому и длинная запись годится.",
      },

      // ---- итог 7 ----
      {
        id: "q-would-like-to-dopisat",
        kind: "gap",
        outcome: "говорить о своём желании: I'd like to go home",
        prompt: "Ты хочешь посмотреть этот фильм. Допиши глагол. Посмотреть — see.",
        before: "I'd like to ",
        after: " this film.",
        answer: "see",
        hint: "Глагол после to стоит без окончания.",
        why: "I'd like to see this film. После to глагол берётся как в словаре.",
      },
      {
        id: "q-would-like-to-vybor",
        kind: "choice",
        outcome: "говорить о своём желании: I'd like to go home",
        prompt: "Ты хочешь пойти домой. В каком предложении нет ошибки?",
        options: [
          { text: "I'd like going home." },
          { text: "I'd like go home." },
          { text: "I'd like to go home.", correct: true },
        ],
        hint: "Два глагола рядом сами не встанут.",
        why:
          "I'd like to go home. В первой записи лишнее -ing, во второй пропало to. " +
          "Без to два действия подряд не встают.",
      },
      {
        id: "q-would-like-to-sopostavit",
        kind: "match",
        outcome: "говорить о своём желании: I'd like to go home",
        prompt: "Сопоставь предложение и его перевод.",
        left: ["I like to swim.", "I'd like to swim.", "I am swimming."],
        right: ["Я плаваю сейчас.", "Мне нравится плавать.", "Я хочу поплавать."],
        answer: [1, 2, 0],
        hint: "Различай вкус вообще, желание сейчас и дело этой минуты.",
        why:
          "I like to swim — о вкусе вообще. I'd like to swim — о желании сейчас. " +
          "I am swimming — о том, что идёт в эту минуту.",
      },

      // ---- итог 8 ----
      {
        id: "q-rasskaz-o-vkusah-sobrat",
        kind: "order",
        outcome: "рассказывать о своих вкусах",
        prompt:
          "Собери рассказ: сначала что не нравится, потом что нравится, потом что " +
          "любимое.",
        items: ["My favourite sport is swimming.", "I don't like cooking.", "I like reading."],
        answer: [1, 2, 0],
        hint: "Условие называет порядок прямо.",
        why: "I don't like cooking. I like reading. My favourite sport is swimming.",
      },
      {
        id: "q-rasskaz-o-vkusah-napisat",
        kind: "short",
        outcome: "рассказывать о своих вкусах",
        prompt:
          "Напиши два предложения о себе: что тебе нравится кино и что не нравится " +
          "готовить. Кино — the cinema, готовить — cook.",
        answer: "I like the cinema. I don't like cooking.",
        accept: [
          "I like the cinema. I don't like to cook.",
          "I like the cinema. I do not like cooking.",
        ],
        hint: "Во втором предложении отрицание, и способ можно взять любой.",
        why:
          "I like the cinema. I don't like cooking. Годится и I don't like to cook.",
      },
      {
        id: "q-rasskaz-o-vkusah-dopisat",
        kind: "gap",
        outcome: "рассказывать о своих вкусах",
        prompt: "Твой любимый вид спорта — плавание. Допиши недостающее слово.",
        before: "My favourite ",
        after: " is swimming.",
        answer: "sport",
        hint: "Слово favourite стоит перед названием.",
        why: "My favourite sport is swimming. Слово favourite идёт перед названием.",
      },
    ],
  },
};

export default module;
