import type { Module } from "@/lib/content/types";

/**
 * Модуль 25 курса «Английский с нуля»: вчера и завтра.
 *
 * Программа: docs/programma-english-starter.md, модуль 25 — «рассказать о
 * прошедшем и о планах»; грамматика: прошедшее простое (утверждение),
 * обстоятельства времени, `will` о планах.
 *
 * ЭТО ПОСЛЕДНИЙ МОДУЛЬ КУРСА, и он самый тяжёлый. Причин две.
 *
 * ПЕРВАЯ — особые глаголы. Двадцать четыре модуля ученик обходился правилами:
 * приделай `-s`, приделай `-ing`. Здесь впервые появляется список, который
 * правилом не берётся вовсе: `go — went`, `have — had`, `be — was`. Модуль
 * говорит об этом прямо в уроке 3, а не прячет за словами «запомни».
 *
 * ВТОРАЯ — соблазн дать всё. Прошедшее время большое: отрицание, вопрос,
 * длительное, совершенное. Программа отдаёт этому модулю только УТВЕРЖДЕНИЕ, и
 * модуль держится этого строго. Отрицание `I didn't work` и вопрос `Did you
 * work?` не показаны даже мельком: они идут в следующем курсе.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Ступень подтверждена, сверх A1 модуль не берёт
 * ничего.
 *
 * 1. English Grammar Profile, PAST past simple, A1, «FORM: AFFIRMATIVE» — «Can
 *    use the affirmative form with a limited range of regular and irregular
 *    verbs», пример источника: «Every day at college I went to class at 9 am».
 *    Слова «a limited range» и есть основание брать в модуль небольшой список
 *    особых глаголов, а не все подряд.
 *
 * 2. English Grammar Profile, PAST past simple, A1, «USE: EVERYDAY EVENTS AND
 *    STATES» — «Can use the past simple to talk about everyday events or
 *    states», пример источника: «The people were very polite».
 *
 * 3. English Grammar Profile, MODALITY will, A1, «FORM: AFFIRMATIVE» — «Can use
 *    the affirmative forms», пример источника: «I will be at your house at 7.30
 *    because I have an appointment before».
 *
 * 4. English Grammar Profile, MODALITY will, A1, «USE: PLANS AND INTENTIONS» —
 *    «Can use 'will' to talk about plans and intentions», пример источника:
 *    «I will bring some music to the dinner».
 *
 * 5. ОБСТОЯТЕЛЬСТВА ВРЕМЕНИ — описание ступени A1, с. 79, Information exchange:
 *    «Can indicate time by lexicalised phrases like "next week", "last Friday",
 *    "in November", "3 o'clock"». Источник называет обороты прямо, и модуль
 *    берёт их же.
 *
 * 6. Слова модуля — Oxford 3000, все A1: yesterday adv., n. A1, last det., adv.
 *    A1, next det., adv. A1, will modal v. A1. Уже введены раньше: tomorrow
 *    (модуль 10), week, day, morning, evening (модули 10 и 14).
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — ОТРИЦАНИЯ И ВОПРОСА В ПРОШЕДШЕМ (`I didn't work`, `Did you work?`).
 *   Программа отдаёт модулю только утверждение. Оба они есть в английском
 *   профиле на A2 отдельными строками, и место им — в следующем курсе.
 * — ОБОРОТА `going to`. Программа его не называет, а источник ставит на A2.
 * — ПОЛНОГО СПИСКА ОСОБЫХ ГЛАГОЛОВ. Источник говорит «a limited range», и
 *   модуль берёт шесть самых нужных: be, go, have, come, see, get.
 * — УДВОЕНИЯ СОГЛАСНОГО ПЕРЕД `-ed` (`stop — stopped`). Правило то же, что
 *   перед `-ing`, но глаголов такого вида в словаре курса почти нет, а лишнее
 *   правило в последнем модуле ни к чему.
 */
const module: Module = {
  slug: "vchera-i-zavtra",
  title: "Вчера и завтра",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, PAST past simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with a limited range of regular and irregular verbs», пример источника — " +
        "«Every day at college I went to class at 9 am». " +
        "A1, PAST past simple, «USE: EVERYDAY EVENTS AND STATES»: «Can use the past " +
        "simple to talk about everyday events or states», пример источника — «The " +
        "people were very polite». " +
        "A1, MODALITY will, «FORM: AFFIRMATIVE»: «Can use the affirmative forms», " +
        "пример источника — «I will be at your house at 7.30 because I have an " +
        "appointment before». " +
        "A1, MODALITY will, «USE: PLANS AND INTENTIONS»: «Can use 'will' to talk " +
        "about plans and intentions», пример источника — «I will bring some music " +
        "to the dinner». " +
        "Все записи стоят на A1 — модуль не берёт ничего сверх ступени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can indicate time by lexicalised phrases " +
        "like \"next week\", \"last Friday\", \"in November\", \"3 o'clock\"» — это " +
        "урок 5, обстоятельства времени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометкой A1: yesterday adv., n. A1, last det., adv. " +
        "A1, next det., adv. A1, will modal v. A1. Уже введены раньше: tomorrow, " +
        "week, day, morning, evening",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "рассказывать о вчерашнем дне: I worked yesterday",
    "писать окончание -ed без ошибок: like — liked, study — studied",
    "пользоваться особыми глаголами: go — went",
    "говорить, где был: I was at home",
    "называть время: yesterday, last week",
    "говорить о завтрашнем дне: I will work",
    "рассказывать о планах: I'll come tomorrow",
    "рассказывать о вчера и о завтра вместе",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vchera-ed",
      title: "Вчера: I worked yesterday",
      estimatedMinutes: 13,
      outcome: "рассказывать о вчерашнем дне: I worked yesterday",

      blocks: [
        {
          id: "zachem-proshedshee",
          kind: "explain",
          text: [
            "Весь курс шёл о том, что бывает и что идёт сейчас.",
            "Но разговор быстро доходит до вчерашнего дня: «Как прошёл твой вчерашний день?»",
            "Для прошлого у глагола своя форма, и делается она окончанием -ed: " +
              "worked.",
          ],
        },
        {
          id: "tablica-proshedshego",
          kind: "table",
          caption: "Сегодня и вчера",
          head: ["Английский", "Перевод"],
          rows: [
            ["I work every day.", "Я работаю каждый день."],
            ["I worked yesterday.", "Я работал вчера."],
            ["She played football.", "Она играла в футбол."],
          ],
        },
        {
          id: "ed-odno-na-vseh",
          kind: "explain",
          text: [
            "Окончание -ed одно на всех: I worked, he worked, they worked.",
            "Ни -s, ни другой формы здесь нет — это первый случай в курсе, когда " +
              "глагол не меняется по лицам вовсе.",
            "Меняется только само время: work стало worked.",
          ],
        },
        {
          id: "ne-worked-s",
          kind: "note",
          tone: "mistake",
          text:
            "«He workeds yesterday» — так не говорят.\n\nОкончание -s к прошедшей " +
            "форме не приходит: он ушёл вместе с настоящим временем.",
        },
        {
          id: "primer-proshedshego",
          kind: "example",
          caption: "Вчерашний день",
          text: "I worked yesterday.\nShe played football.\nWe watched a film.",
          explain:
            "Во всех трёх у глагола окончание -ed, и оно одинаково для I, she и we. " +
            "Слово yesterday показывает, что дело было вчера.",
        },
        {
          id: "zapis-proshedshego",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I worked yesterday. She played football. We watched a film.",
        },
        {
          id: "slovar-proshedshego",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "yesterday", translation: "вчера", example: "I worked yesterday.", hint: "/ˈjestədeɪ/" },
            { term: "watch", translation: "смотреть (фильм, телевизор)", example: "We watched a film.", hint: "/wɒtʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-ed",
          kind: "gap",
          prompt: "Вчера у тебя была работа. Допиши глагол в нужной форме. Работать — work.",
          before: "I ",
          after: " yesterday.",
          answer: "worked",
          hint: "К глаголу приделывают окончание прошедшего времени.",
          why: "I worked yesterday. Окончание -ed показывает, что дело было в прошлом.",
        },
        {
          id: "z2-vybrat-proshedshee",
          kind: "choice",
          prompt: "Твоя сестра вчера играла в футбол. В каком предложении нет ошибки?",
          options: [
            { text: "My sister playeds football." },
            { text: "My sister played football.", correct: true },
            { text: "My sister plays football yesterday." },
          ],
          hint: "Окончание -s к прошедшей форме не приходит.",
          why:
            "My sister played football. В третьем предложении глагол стоит в " +
            "настоящем времени, а слово yesterday говорит о прошлом.",
        },
        {
          id: "z3-otmetit-lishnee-s-v-proshedshem",
          kind: "hottext",
          prompt: "Отметь записи с лишним окончанием -s.",
          parts: [
            { text: "He worked yesterday.", selectable: true },
            { text: " · " },
            { text: "He workeds yesterday.", selectable: true, correct: true },
            { text: " · " },
            { text: "She playeds football.", selectable: true, correct: true },
            { text: " · " },
            { text: "She played football.", selectable: true },
          ],
          hint: "В прошедшем времени глагол одинаков для всех.",
          why: "Верно: He worked yesterday и She played football.",
        },
        {
          id: "z4-sobrat-proshedshee",
          kind: "order",
          prompt: "Собери предложение: «Мы вчера смотрели фильм.»",
          items: ["a film", "watched", "We", "yesterday"],
          answer: [2, 1, 0, 3],
          hint: "Слово yesterday встаёт в конец.",
          why: "We watched a film yesterday. Глагол с окончанием стоит вторым.",
        },
        {
          id: "z5-napisat-proshedshee",
          kind: "short",
          prompt: "Вчера у тебя была работа. Напиши это о себе: работать — work, вчера — yesterday.",
          answer: "I worked yesterday.",
          hint: "К глаголу приделай окончание прошедшего времени.",
          why: "I worked yesterday. Окончание -ed одно на всех.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-pishetsya-ed",
      title: "Как пишется -ed",
      estimatedMinutes: 13,
      outcome: "писать окончание -ed без ошибок: like — liked, study — studied",

      blocks: [
        {
          id: "zachem-pravila-ed",
          kind: "explain",
          text: [
            "У большинства глаголов окончание просто приделывается: work — worked.",
            "Но у двух видов глаголов из трёх перед окончанием кое-что меняется.",
            "Случаев ровно три, и разбираются они так же, как правила для -ing.",
          ],
        },
        {
          id: "tablica-ed",
          kind: "table",
          caption: "Три случая",
          head: ["Какой глагол", "Что происходит", "Пример"],
          rows: [
            ["обычный", "приделывается -ed", "work — worked"],
            ["кончается на e", "приделывается только -d", "like — liked"],
            ["кончается на согласный и y", "y меняется на i", "study — studied"],
          ],
        },
        {
          id: "e-i-y",
          kind: "explain",
          text: [
            "Если глагол кончается на e, второй такой же буквы не нужно: like — " +
              "liked, а не likeed.",
            "Если глагол кончается на согласный и y, буква y меняется на i: study — " +
              "studied.",
            "А если перед y стоит гласный, ничего не меняется: play — played.",
          ],
        },
        {
          id: "play-ne-menyaetsya",
          kind: "note",
          tone: "info",
          text:
            "Пара play — played как раз о том, почему важно смотреть на букву перед " +
            "y.\n\nВ play перед y стоит a, то есть гласный, — и y остаётся на месте.",
        },
        {
          id: "primer-ed",
          kind: "example",
          caption: "Три глагола рядом",
          text: "work — worked\nlike — liked\nstudy — studied",
          explain:
            "У work окончание приделано целиком. У like добавилась только d. У study " +
            "буква y стала i.",
        },
        {
          id: "zapis-ed",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три формы",
          transcript: "worked, liked, studied",
        },
        {
          id: "slovar-ed",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "last", translation: "прошлый", example: "last week", hint: "/lɑːst/" },
            { term: "next", translation: "следующий", example: "next week", hint: "/nekst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-liked",
          kind: "gap",
          prompt: "Глагол like в прошедшем времени. Допиши форму.",
          before: "I ",
          after: " this film.",
          answer: "liked",
          hint: "Глагол кончается на e, второй такой же не нужно.",
          why: "I liked this film. У like добавилась только буква d.",
        },
        {
          id: "z2-vybrat-studied",
          kind: "choice",
          prompt: "Какая запись верна?",
          options: [
            { text: "studyed" },
            { text: "studied", correct: true },
            { text: "likeed" },
          ],
          hint: "Перед y в study стоит согласный, а like кончается на e.",
          why:
            "Studied. У study буква y стала i. А likeed неверно: у like добавляется " +
            "только d.",
        },
        {
          id: "z3-otmetit-oshibki-ed",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой в окончании.",
          parts: [
            { text: "worked", selectable: true },
            { text: " · " },
            { text: "likeed", selectable: true, correct: true },
            { text: " · " },
            { text: "played", selectable: true },
            { text: " · " },
            { text: "studyed", selectable: true, correct: true },
          ],
          hint: "В одной записи лишняя e, в другой не изменилась y.",
          why: "Верно: liked и studied. Формы worked и played написаны без ошибок.",
        },
        {
          id: "z4-sopostavit-ed",
          kind: "match",
          prompt: "Сопоставь глагол и его форму прошедшего времени.",
          left: ["like", "study", "work"],
          right: ["worked", "liked", "studied"],
          answer: [1, 2, 0],
          hint: "У одного добавляется d, у другого меняется y.",
          why: "Like — liked, study — studied, work — worked.",
        },
        {
          id: "z5-napisat-studied",
          kind: "short",
          prompt: "Вчерашний день прошёл за учёбой. Напиши это о себе: учиться — study, вчера — yesterday.",
          answer: "I studied yesterday.",
          hint: "Буква y перед окончанием меняется на i.",
          why: "I studied yesterday. У study перед окончанием y стала i.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "osobye-glagoly",
      title: "Особые глаголы: go — went",
      estimatedMinutes: 14,
      outcome: "пользоваться особыми глаголами: go — went",

      blocks: [
        {
          id: "zachem-osobye",
          kind: "explain",
          text: [
            "У части глаголов прошедшая форма не строится по общему правилу.",
            "Её запоминают отдельно, как отдельное слово.",
            "Go — went. Не «goed», а именно went.",
          ],
        },
        {
          id: "tablica-osobyh",
          kind: "table",
          caption: "Шесть глаголов, которые надо знать",
          head: ["Настоящее", "Прошедшее", "Пример"],
          rows: [
            ["go", "went", "I went to work."],
            ["have", "had", "I had a good day."],
            ["come", "came", "She came at six."],
            ["see", "saw", "I saw my friend."],
            ["get", "got", "I got a letter."],
            ["do", "did", "I did my work."],
          ],
        },
        {
          id: "pochemu-tak",
          kind: "explain",
          text: [
            "Таких глаголов в английском около двух сотен, но нужны сразу не все.",
            "Эти шесть — самые частые, и без них не построить рассказа о вчерашнем " +
              "дне.",
            "Остальные приходят по одному, вместе с новыми словами.",
          ],
        },
        {
          id: "ne-goed",
          kind: "note",
          tone: "mistake",
          text:
            "«I goed to work» — так не говорят.\n\nОкончание -ed к таким глаголам не " +
            "приделывают вовсе: у них своя форма. Верно: I went to work.",
        },
        {
          id: "primer-osobyh",
          kind: "example",
          caption: "Вчерашний день целиком",
          text: "I went to work.\nI saw my friend.\nI had a good day.",
          explain:
            "Ни в одном из трёх нет окончания -ed. Форма взята из таблицы целиком, " +
            "как отдельное слово.",
        },
        {
          id: "zapis-osobyh",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I went to work. I saw my friend. I had a good day.",
        },
        {
          id: "uchit-parami",
          kind: "note",
          tone: "info",
          text:
            "Учить такие глаголы лучше парами: go — went, see — saw.\n\nПорознь они " +
            "не запоминаются: в голове должна лежать пара целиком.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-went",
          kind: "gap",
          prompt: "Вчера у тебя была работа. Допиши глагол в нужной форме. Ходить — go.",
          before: "I ",
          after: " to work yesterday.",
          answer: "went",
          hint: "У этого глагола своя форма, и окончания у неё нет.",
          why: "I went to work yesterday. Форма went не делается никаким правилом.",
        },
        {
          id: "z2-vybrat-osobyy",
          kind: "choice",
          prompt: "Вчера у тебя была встреча с другом. В каком предложении нет ошибки?",
          options: [
            { text: "I seed my friend yesterday." },
            { text: "I saw my friend yesterday.", correct: true },
            { text: "I sawed my friend yesterday." },
          ],
          hint: "У глагола see своя форма прошедшего времени.",
          why: "I saw my friend yesterday. Окончание -ed к особым глаголам не приходит.",
        },
        {
          id: "z3-otmetit-ed-u-osobyh",
          kind: "hottext",
          prompt: "Отметь записи, где к особому глаголу приделали -ed.",
          parts: [
            { text: "I went to work.", selectable: true },
            { text: " · " },
            { text: "I goed to work.", selectable: true, correct: true },
            { text: " · " },
            { text: "She comed at six.", selectable: true, correct: true },
            { text: " · " },
            { text: "She came at six.", selectable: true },
          ],
          hint: "У go и come свои формы: went и came.",
          why: "Верно: I went to work и She came at six.",
        },
        {
          id: "z4-sopostavit-osobye",
          kind: "match",
          prompt: "Сопоставь глагол и его форму прошедшего времени.",
          left: ["go", "see", "have"],
          right: ["had", "went", "saw"],
          answer: [1, 2, 0],
          hint: "Учи их парами.",
          why: "Go — went, see — saw, have — had.",
        },
        {
          id: "z5-napisat-osobyy",
          kind: "short",
          prompt: "Напиши, что у тебя вчера был хороший день. Иметь — have, хороший день — a good day.",
          answer: "I had a good day yesterday.",
          accept: ["I had a good day."],
          hint: "У глагола have своя форма прошедшего времени.",
          why: "I had a good day yesterday. Форма had берётся целиком, без окончания.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "byl-i-byli",
      title: "Где был: I was at home",
      estimatedMinutes: 13,
      outcome: "говорить, где был: I was at home",

      blocks: [
        {
          id: "zachem-was",
          kind: "explain",
          text: [
            "У формы be тоже есть прошедшее время, и оно нужно чаще всего.",
            "«Я был дома», «она была на работе» — всё это строится через was и were.",
            "Форм две вместо трёх: am и is стали was, are стало were.",
          ],
        },
        {
          id: "tablica-was-were",
          kind: "table",
          caption: "Было три формы, стало две",
          head: ["О ком", "Сейчас", "В прошлом"],
          rows: [
            ["I", "am", "was"],
            ["he, she, it", "is", "was"],
            ["we, you, they", "are", "were"],
          ],
        },
        {
          id: "was-eto-prosto",
          kind: "explain",
          text: [
            "Форм стало меньше, и запомнить их легче, чем настоящие.",
            "I was at home. She was at work. They were at school.",
            "После was и were всё идёт как прежде: место, занятие, какой человек.",
          ],
        },
        {
          id: "ne-were-s-i",
          kind: "note",
          tone: "mistake",
          text:
            "«I were at home» — так не говорят.\n\nСо словом I идёт was. Форма were " +
            "берётся только с we, you и they.",
        },
        {
          id: "primer-was",
          kind: "example",
          caption: "Где кто был",
          text: "I was at home.\nShe was at work.\nThey were at school.",
          explain:
            "В первых двух стоит was — речь об одном человеке. В третьем were, " +
            "потому что людей несколько.",
        },
        {
          id: "zapis-was",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I was at home. She was at work. They were at school.",
        },
        {
          id: "was-i-o-kakom",
          kind: "note",
          tone: "info",
          text:
            "Через was говорят и о том, каким что-то было: The film was good.\n\n" +
            "Это та же форма be, что в «It is good», только о прошлом.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-was",
          kind: "gap",
          prompt: "Вчерашний день прошёл дома. Допиши недостающее слово.",
          before: "I ",
          after: " at home yesterday.",
          answer: "was",
          hint: "Со словом I идёт одна из двух форм.",
          why: "I was at home yesterday. С I идёт was, а не were.",
        },
        {
          id: "z2-vybrat-were",
          kind: "choice",
          prompt: "Твои друзья вчера были в школе. В каком предложении нет ошибки?",
          options: [
            { text: "My friends was at school.", },
            { text: "My friends were at school.", correct: true },
            { text: "My friends are at school yesterday." },
          ],
          hint: "Друзей несколько.",
          why:
            "My friends were at school. О нескольких идёт were, а третье предложение " +
            "стоит в настоящем времени.",
        },
        {
          id: "z3-otmetit-was-were",
          kind: "hottext",
          prompt: "Отметь записи, где выбрана не та форма.",
          parts: [
            { text: "I was at home.", selectable: true },
            { text: " · " },
            { text: "I were at home.", selectable: true, correct: true },
            { text: " · " },
            { text: "They was at work.", selectable: true, correct: true },
            { text: " · " },
            { text: "They were at work.", selectable: true },
          ],
          hint: "С I идёт was, с they — were.",
          why: "Верно: I was at home и They were at work.",
        },
        {
          id: "z4-sobrat-was",
          kind: "order",
          prompt: "Собери предложение: «Она вчера была на работе.»",
          items: ["at work", "was", "yesterday", "She"],
          answer: [3, 1, 0, 2],
          hint: "Слово yesterday встаёт в конец.",
          why: "She was at work yesterday. Форма was стоит второй.",
        },
        {
          id: "z5-napisat-was",
          kind: "short",
          prompt: "Вчерашний день прошёл дома. Напиши это о себе: дома — at home, вчера — yesterday.",
          answer: "I was at home yesterday.",
          hint: "Со словом I идёт was.",
          why: "I was at home yesterday. Форма was одна на I, he, she и it.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kogda-eto-bylo",
      title: "Когда это было: yesterday, last week",
      estimatedMinutes: 12,
      outcome: "называть время: yesterday, last week",

      blocks: [
        {
          id: "zachem-obstoyatelstva",
          kind: "explain",
          text: [
            "Сказать «я работал» мало: собеседник спросит когда.",
            "Для этого есть готовые обороты: yesterday, last week, last Friday.",
            "Ставят их обычно в конец предложения: I worked last week.",
          ],
        },
        {
          id: "tablica-kogda",
          kind: "table",
          caption: "Когда это было",
          head: ["Английский", "Перевод"],
          rows: [
            ["yesterday", "вчера"],
            ["last week", "на прошлой неделе"],
            ["last Friday", "в прошлую пятницу"],
            ["last year", "в прошлом году"],
          ],
        },
        {
          id: "last-i-next",
          kind: "explain",
          text: [
            "Слово last значит «прошлый», а слово next — «следующий».",
            "Ставят их прямо перед словом времени: last week, next week.",
            "Никаких предлогов при этом не нужно: не «in last week», а просто last " +
              "week.",
          ],
        },
        {
          id: "ne-in-last-week",
          kind: "note",
          tone: "mistake",
          text:
            "«in last week» — так не говорят.\n\nС оборотами last и next предлог не " +
            "ставят вовсе: last week, next Friday.",
        },
        {
          id: "primer-kogda",
          kind: "example",
          caption: "Когда что было",
          text: "I worked yesterday.\nShe came last week.\nWe were at home last Friday.",
          explain:
            "Во всех трёх оборот времени стоит в конце. Глагол при этом в прошедшей " +
            "форме: worked, came, were.",
        },
        {
          id: "zapis-kogda",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I worked yesterday. She came last week. We were at home last Friday.",
        },
        {
          id: "dni-nedeli-uzhe-est",
          kind: "note",
          tone: "info",
          text:
            "Дни недели ты знаешь с модуля «Дни, даты, время».\n\nСтавь перед ними " +
            "last или next — и выйдет оборот времени: last Monday, next Sunday.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-last",
          kind: "gap",
          prompt: "На прошлой неделе у тебя была работа. Допиши недостающее слово.",
          before: "I worked ",
          after: " week.",
          answer: "last",
          hint: "Слово значит «прошлый».",
          why: "I worked last week. Предлог перед оборотом не нужен.",
        },
        {
          id: "z2-vybrat-bez-predloga",
          kind: "choice",
          prompt: "Твоя подруга приходила в прошлую пятницу. В каком предложении нет ошибки?",
          options: [
            { text: "She came in last Friday." },
            { text: "She came last Friday.", correct: true },
            { text: "She came on last Friday." },
          ],
          hint: "С оборотом last предлог не ставят.",
          why: "She came last Friday. Ни in, ни on перед last не нужны.",
        },
        {
          id: "z3-otmetit-lishniy-predlog",
          kind: "hottext",
          prompt: "Отметь записи с лишним предлогом.",
          parts: [
            { text: "I worked last week.", selectable: true },
            { text: " · " },
            { text: "I worked in last week.", selectable: true, correct: true },
            { text: " · " },
            { text: "She came on last Monday.", selectable: true, correct: true },
            { text: " · " },
            { text: "She came last Monday.", selectable: true },
          ],
          hint: "С last и next предлог не ставят.",
          why: "Верно: I worked last week и She came last Monday.",
        },
        {
          id: "z4-sopostavit-vremya",
          kind: "match",
          prompt: "Сопоставь оборот и его перевод.",
          left: ["yesterday", "last week", "last year"],
          right: ["в прошлом году", "вчера", "на прошлой неделе"],
          answer: [1, 2, 0],
          hint: "Слово last значит «прошлый».",
          why: "Yesterday — вчера, last week — на прошлой неделе, last year — в прошлом году.",
        },
        {
          id: "z5-napisat-kogda",
          kind: "short",
          prompt:
            "Прошлая пятница прошла дома. Напиши это о себе: дома — at home, " +
            "прошлая пятница — last Friday.",
          answer: "I was at home last Friday.",
          hint: "Оборот времени встаёт в конец, предлог не нужен.",
          why: "I was at home last Friday. Перед last предлога нет.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "zavtra-will",
      title: "Завтра: I will work",
      estimatedMinutes: 12,
      outcome: "говорить о завтрашнем дне: I will work",

      blocks: [
        {
          id: "zachem-will",
          kind: "explain",
          text: [
            "Осталось одно время — то, что ещё не случилось.",
            "Перед глаголом ставят will, и глагол не меняется вовсе: I will work.",
            "Это устроено так же просто, как can из модуля «Я умею».",
          ],
        },
        {
          id: "tablica-will",
          kind: "table",
          caption: "Вчера, сегодня, завтра",
          head: ["Английский", "Перевод"],
          rows: [
            ["I worked yesterday.", "Я работал вчера."],
            ["I work every day.", "Я работаю каждый день."],
            ["I will work tomorrow.", "Я буду работать завтра."],
          ],
        },
        {
          id: "will-odno-na-vseh",
          kind: "explain",
          text: [
            "Слово will одинаково для всех: I will, he will, they will.",
            "Окончания у него нет, и глагол после него стоит как в словаре.",
            "Ни -s, ни -ing, ни to — только will и глагол.",
          ],
        },
        {
          id: "ne-will-works",
          kind: "note",
          tone: "mistake",
          text:
            "«He will works tomorrow» — так не говорят.\n\nОкончание -s не приходит " +
            "ни к will, ни к глаголу после него. Верно: He will work tomorrow.",
        },
        {
          id: "primer-will",
          kind: "example",
          caption: "Завтрашний день",
          text: "I will work tomorrow.\nShe will come at six.\nWe will be at home.",
          explain:
            "Во всех трёх will стоит перед глаголом, а глагол — без окончания. В " +
            "третьем после will идёт be: она тоже не меняется.",
        },
        {
          id: "zapis-will",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "I will work tomorrow. She will come at six. We will be at home.",
        },
        {
          id: "slovar-will",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "will", translation: "часть будущего времени, само не переводится", example: "I will work tomorrow.", hint: "/wɪl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-will",
          kind: "gap",
          prompt: "Ты будешь работать завтра. Допиши недостающее слово.",
          before: "I ",
          after: " work tomorrow.",
          answer: "will",
          hint: "Оно встаёт перед глаголом и не меняется.",
          why: "I will work tomorrow. Глагол после will стоит без окончания.",
        },
        {
          id: "z2-vybrat-will",
          kind: "choice",
          prompt: "Твой брат будет работать завтра. В каком предложении нет ошибки?",
          options: [
            { text: "My brother wills work tomorrow." },
            { text: "My brother will works tomorrow." },
            { text: "My brother will work tomorrow.", correct: true },
          ],
          hint: "Окончание -s здесь не нужно нигде.",
          why:
            "My brother will work tomorrow. Окончание -s не приходит ни к will, ни к " +
            "глаголу после него.",
        },
        {
          id: "z3-otmetit-lishnee-s-pri-will",
          kind: "hottext",
          prompt: "Отметь записи с лишним окончанием -s.",
          parts: [
            { text: "She will come at six.", selectable: true },
            { text: " · " },
            { text: "She wills come at six.", selectable: true, correct: true },
            { text: " · " },
            { text: "He will works tomorrow.", selectable: true, correct: true },
            { text: " · " },
            { text: "He will work tomorrow.", selectable: true },
          ],
          hint: "Смотри и на will, и на глагол после него.",
          why: "Верно: She will come at six и He will work tomorrow.",
        },
        {
          id: "z4-sobrat-will",
          kind: "order",
          prompt: "Собери предложение: «Она придёт в шесть.»",
          items: ["at six", "come", "She", "will"],
          answer: [2, 3, 1, 0],
          hint: "Вторым идёт will, третьим — глагол.",
          why: "She will come at six. Порядок: она, will, глагол, время.",
        },
        {
          id: "z5-napisat-will",
          kind: "short",
          prompt: "Напиши, что ты будешь работать завтра. Работать — work, завтра — tomorrow.",
          answer: "I will work tomorrow.",
          hint: "Перед глаголом поставь will.",
          why: "I will work tomorrow. Глагол после will не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "plany",
      title: "Планы: I'll come tomorrow",
      estimatedMinutes: 12,
      outcome: "рассказывать о планах: I'll come tomorrow",

      blocks: [
        {
          id: "zachem-plany",
          kind: "explain",
          text: [
            "Чаще всего will нужно не для рассказа о будущем вообще, а для планов.",
            "«Я приду завтра», «я принесу музыку» — это обещания и намерения.",
            "В разговоре will при этом сливается с тем, кто говорит: I'll come.",
          ],
        },
        {
          id: "tablica-korotkoy-zapisi",
          kind: "table",
          caption: "Полная и короткая запись",
          head: ["Полностью", "Коротко"],
          rows: [
            ["I will come tomorrow.", "I'll come tomorrow."],
            ["She will be at home.", "She'll be at home."],
            ["We will work on Monday.", "We'll work on Monday."],
          ],
        },
        {
          id: "kak-slivaetsya",
          kind: "explain",
          text: [
            "Сливается will с любым словом слева: I'll, she'll, we'll, they'll.",
            "На письме на месте пропавших букв стоит апостроф.",
            "Обе записи верны, но в разговоре и в письме другу берут короткую.",
          ],
        },
        {
          id: "plan-i-obeshchanie",
          kind: "note",
          tone: "info",
          text:
            "Так же говорят и об обещании: I'll help you.\n\nПлан и обещание " +
            "по-английски строятся одинаково — через will.",
        },
        {
          id: "primer-planov",
          kind: "example",
          caption: "Разговор о планах",
          text: "— Would you like to come to my party?\n— Yes, I'd like to. I'll come at six.",
          explain:
            "Сначала приглашение из модуля «Просьбы и указания», потом согласие и " +
            "план: I'll come at six.",
        },
        {
          id: "zapis-planov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай короткую запись",
          transcript: "I'll come at six. She'll be at home. We'll work on Monday.",
        },
        {
          id: "apostrof-uzhe-znakom",
          kind: "note",
          tone: "info",
          text:
            "Апостроф в короткой записи тебе давно знаком: I'm, don't, can't, " +
            "I'd.\n\nЗдесь он делает то же самое — стоит там, где пропали буквы.",
        },

        // ---- задания ----
        {
          id: "z1-koroche-will",
          kind: "short",
          prompt: "Запиши короче: I will come tomorrow.",
          answer: "I'll come tomorrow.",
          hint: "Слово will сливается с тем, кто говорит.",
          why: "I'll come tomorrow. Апостроф стоит там, где пропали буквы wi.",
        },
        {
          id: "z2-vybrat-korotkuyu-zapis-will",
          kind: "choice",
          prompt: "Твоя сестра будет дома. Как записать это короче?",
          options: [
            { text: "She'll be at home.", correct: true },
            { text: "Shell be at home." },
            { text: "She'will be at home." },
          ],
          hint: "Апостроф стоит на месте пропавших букв.",
          why:
            "She'll be at home. Без апострофа выходит другое слово, а во третьем " +
            "варианте апостроф стоит не на месте.",
        },
        {
          id: "z3-dopisat-plan",
          kind: "gap",
          prompt: "Ты обещаешь помочь. Допиши недостающее слово.",
          before: "I'll ",
          after: " you.",
          answer: "help",
          hint: "После I'll глагол стоит как в словаре.",
          why: "I'll help you. Обещание строится через will, как и план.",
        },
        {
          id: "z4-otmetit-korotkuyu-zapis",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой в апострофе.",
          parts: [
            { text: "I'll come at six.", selectable: true },
            { text: " · " },
            { text: "Ill come at six.", selectable: true, correct: true },
            { text: " · " },
            { text: "We'll be at home.", selectable: true },
            { text: " · " },
            { text: "We'will be at home.", selectable: true, correct: true },
          ],
          hint: "Апостроф стоит там, где пропали буквы wi.",
          why: "Верно: I'll come at six и We'll be at home.",
        },
        {
          id: "z5-napisat-plan",
          kind: "short",
          prompt: "Напиши короткой записью, что ты придёшь в шесть. Прийти — come, в шесть — at six.",
          answer: "I'll come at six.",
          accept: ["I will come at six."],
          hint: "Слово will сливается со словом I.",
          why: "I'll come at six. Полная запись I will come at six тоже верна.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vchera-i-zavtra-vmeste",
      title: "Вчера и завтра вместе",
      estimatedMinutes: 14,
      outcome: "рассказывать о вчера и о завтра вместе",

      blocks: [
        {
          id: "zachem-vmeste",
          kind: "explain",
          text: [
            "Разговор о делах редко держится одного времени.",
            "«Вчера я работал, сегодня отдыхаю, завтра поеду к другу» — три времени " +
              "в одной мысли.",
            "Все три у тебя теперь есть, и различает их форма глагола.",
          ],
        },
        {
          id: "tablica-treh-vremen",
          kind: "table",
          caption: "Четыре времени рядом",
          head: ["Когда", "Как это выглядит"],
          rows: [
            ["вчера", "I worked yesterday."],
            ["каждый день", "I work every day."],
            ["сейчас", "I am working now."],
            ["завтра", "I will work tomorrow."],
          ],
        },
        {
          id: "kak-ne-pereputat",
          kind: "explain",
          text: [
            "Подсказку даёт слово времени, и смотреть надо на него.",
            "Yesterday и last week — прошедшая форма. Now — форма be и -ing.",
            "Tomorrow и next week — will. Every day — глагол без изменений.",
          ],
        },
        {
          id: "ne-smeshivay-vremena",
          kind: "note",
          tone: "mistake",
          text:
            "«I work yesterday» — так не говорят.\n\nСлово yesterday требует " +
            "прошедшей формы: I worked yesterday.",
        },
        {
          id: "primer-vmeste",
          kind: "example",
          caption: "Рассказ о трёх днях",
          text:
            "I worked yesterday.\nI am reading a book now.\nI will come to your party tomorrow.",
          explain:
            "Три предложения — три времени. В первом окончание -ed, во втором форма " +
            "be и -ing, в третьем will.",
        },
        {
          id: "zapis-vmeste",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "I worked yesterday. I am reading a book now. I will come to your party tomorrow.",
        },
        {
          id: "kurs-zakonchen",
          kind: "note",
          tone: "info",
          text:
            "Это последний урок курса.\n\nТеперь ты умеешь рассказать о себе, о " +
            "своих делах, о вчерашнем дне и о планах. С этого и начинается " +
            "настоящий разговор.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vremya-po-slovu",
          kind: "choice",
          prompt: "Вчера у тебя была работа. Как сказать?",
          options: [
            { text: "I work yesterday." },
            { text: "I worked yesterday.", correct: true },
            { text: "I will work yesterday." },
          ],
          hint: "Слово yesterday говорит о прошлом.",
          why: "I worked yesterday. Слово yesterday требует прошедшей формы.",
        },
        {
          id: "z2-dopisat-po-slovu-vremeni",
          kind: "gap",
          prompt: "Ты будешь работать завтра. Допиши недостающее слово.",
          before: "I ",
          after: " work tomorrow.",
          answer: "will",
          hint: "Слово tomorrow говорит о будущем.",
          why: "I will work tomorrow. Слово tomorrow требует will.",
        },
        {
          id: "z3-otmetit-pereputannye-vremena",
          kind: "hottext",
          prompt: "Отметь записи, где форма глагола не подходит слову времени.",
          parts: [
            { text: "I worked yesterday.", selectable: true },
            { text: " · " },
            { text: "I work yesterday.", selectable: true, correct: true },
            { text: " · " },
            { text: "I worked tomorrow.", selectable: true, correct: true },
            { text: " · " },
            { text: "I will work tomorrow.", selectable: true },
          ],
          hint: "Yesterday — прошедшая форма, tomorrow — will.",
          why: "Верно: I worked yesterday и I will work tomorrow.",
        },
        {
          id: "z4-sobrat-rasskaz-o-vremenah",
          kind: "order",
          prompt: "Собери рассказ: сначала о вчера, потом о сейчас, потом о завтра.",
          items: [
            "I will come tomorrow.",
            "I worked yesterday.",
            "I am reading a book now.",
          ],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии.",
          why: "I worked yesterday. I am reading a book now. I will come tomorrow.",
        },
        {
          id: "z5-rasskaz-vsluh-o-vremenah",
          kind: "speak",
          prompt: "Расскажи вслух о трёх днях: что было вчера, что сейчас, что будет завтра.",
          phrase: "I worked yesterday. I am reading a book now. I will work tomorrow.",
          translation: "Вчера я работал. Сейчас я читаю книгу. Завтра я буду работать.",
          hint: "Три предложения, три разных формы глагола.",
          why:
            "Три времени в одном рассказе — это и есть то, ради чего был весь курс.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.7,
    questions: [
      // Работа не повторяет задания уроков: другие глаголы, другие дни, другой
      // пропущенный кусок.

      // ---- итог 1 ----
      {
        id: "q-proshedshee-vybor",
        kind: "choice",
        outcome: "рассказывать о вчерашнем дне: I worked yesterday",
        prompt: "Твой брат вчера смотрел фильм. В каком предложении нет ошибки?",
        options: [
          { text: "My brother watched a film yesterday.", correct: true },
          { text: "My brother watcheds a film yesterday." },
          { text: "My brother watches a film yesterday." },
        ],
        hint: "Окончание -s к прошедшей форме не приходит.",
        why:
          "My brother watched a film yesterday. В третьем предложении глагол стоит " +
          "в настоящем времени, а yesterday говорит о прошлом.",
      },
      {
        id: "q-proshedshee-dopisat",
        kind: "gap",
        outcome: "рассказывать о вчерашнем дне: I worked yesterday",
        prompt: "Вчера у тебя был футбол. Допиши глагол в нужной форме. Играть — play.",
        before: "I ",
        after: " football yesterday.",
        answer: "played",
        hint: "К глаголу приделывают окончание прошедшего времени.",
        why: "I played football yesterday. Перед y стоит гласный, поэтому y не меняется.",
      },
      {
        id: "q-proshedshee-napisat",
        kind: "short",
        outcome: "рассказывать о вчерашнем дне: I worked yesterday",
        prompt: "Вчерашний вечер прошёл за фильмом. Напиши это о себе: смотреть — watch, фильм — a film.",
        answer: "I watched a film yesterday.",
        hint: "К глаголу приделай окончание прошедшего времени.",
        why: "I watched a film yesterday. Окончание -ed одно на всех.",
      },

      // ---- итог 2 ----
      {
        id: "q-ed-vybor",
        kind: "choice",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "Какая запись верна?",
        options: [
          { text: "likeed" },
          { text: "liked", correct: true },
          { text: "studyed" },
        ],
        hint: "У like на конце e, у study перед y стоит согласный.",
        why:
          "Liked: у like добавляется только d. А в studyed ошибка — верно studied.",
      },
      {
        id: "q-ed-dopisat",
        kind: "gap",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "Глагол study в прошедшем времени. Допиши форму.",
        before: "She ",
        after: " yesterday.",
        answer: "studied",
        hint: "Перед y стоит согласный, значит y меняется.",
        why: "She studied yesterday. У study буква y стала i.",
      },
      {
        id: "q-ed-sopostavit",
        kind: "match",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "Сопоставь глагол и его форму прошедшего времени.",
        left: ["play", "like", "study"],
        right: ["studied", "played", "liked"],
        answer: [1, 2, 0],
        hint: "У одного меняется y, у другого добавляется только d.",
        why: "Play — played, like — liked, study — studied.",
      },

      // ---- итог 3 ----
      {
        id: "q-osobye-vybor",
        kind: "choice",
        outcome: "пользоваться особыми глаголами: go — went",
        prompt: "Вчера у тебя была работа. В каком предложении нет ошибки?",
        options: [
          { text: "I goed to work yesterday." },
          { text: "I wented to work yesterday." },
          { text: "I went to work yesterday.", correct: true },
        ],
        hint: "У глагола go своя форма прошедшего времени.",
        why: "I went to work yesterday. Окончание -ed к особым глаголам не приходит.",
      },
      {
        id: "q-osobye-dopisat",
        kind: "gap",
        outcome: "пользоваться особыми глаголами: go — went",
        prompt: "Вчера у тебя была встреча с другом. Допиши глагол в нужной форме. Видеть — see.",
        before: "I ",
        after: " my friend yesterday.",
        answer: "saw",
        hint: "У этого глагола своя форма, и окончания у неё нет.",
        why: "I saw my friend yesterday. Форма saw берётся целиком.",
      },
      {
        id: "q-osobye-sopostavit",
        kind: "match",
        outcome: "пользоваться особыми глаголами: go — went",
        prompt: "Сопоставь глагол и его форму прошедшего времени.",
        left: ["come", "get", "do"],
        right: ["did", "came", "got"],
        answer: [1, 2, 0],
        hint: "Учи их парами.",
        why: "Come — came, get — got, do — did.",
      },

      // ---- итог 4 ----
      {
        id: "q-was-vybor",
        kind: "choice",
        outcome: "говорить, где был: I was at home",
        prompt: "Вчерашний день прошёл на работе. В каком предложении нет ошибки?",
        options: [
          { text: "I were at work yesterday." },
          { text: "I was at work yesterday.", correct: true },
          { text: "I am at work yesterday." },
        ],
        hint: "Со словом I идёт was.",
        why:
          "I was at work yesterday. Форма were берётся с we, you и they, а третье " +
          "предложение стоит в настоящем времени.",
      },
      {
        id: "q-was-dopisat",
        kind: "gap",
        outcome: "говорить, где был: I was at home",
        prompt: "Твои друзья вчера были дома. Допиши недостающее слово.",
        before: "My friends ",
        after: " at home yesterday.",
        answer: "were",
        hint: "Друзей несколько.",
        why: "My friends were at home yesterday. О нескольких идёт were.",
      },
      {
        id: "q-was-napisat",
        kind: "short",
        outcome: "говорить, где был: I was at home",
        prompt: "Напиши, что твоя сестра вчера была на работе. Сестра — my sister, на работе — at work.",
        answer: "My sister was at work yesterday.",
        hint: "Об одном человеке идёт was.",
        why: "My sister was at work yesterday. Форма was одна на I, he, she и it.",
      },

      // ---- итог 5 ----
      {
        id: "q-vremya-vybor",
        kind: "choice",
        outcome: "называть время: yesterday, last week",
        prompt: "На прошлой неделе у тебя была работа. Как сказать?",
        options: [
          { text: "I worked last week.", correct: true },
          { text: "I worked in last week." },
          { text: "I worked on last week." },
        ],
        hint: "С оборотом last предлог не ставят.",
        why: "I worked last week. Ни in, ни on перед last не нужны.",
      },
      {
        id: "q-vremya-dopisat",
        kind: "gap",
        outcome: "называть время: yesterday, last week",
        prompt: "Твоя подруга приходила в прошлый понедельник. Допиши недостающее слово.",
        before: "She came ",
        after: " Monday.",
        answer: "last",
        hint: "Слово значит «прошлый».",
        why: "She came last Monday. Предлог перед оборотом не нужен.",
      },
      {
        id: "q-vremya-napisat",
        kind: "short",
        outcome: "называть время: yesterday, last week",
        prompt:
          "Прошлая неделя прошла дома. Напиши это о себе: дома — at home, " +
          "прошлая неделя — last week.",
        answer: "I was at home last week.",
        hint: "Оборот времени встаёт в конец, предлог не нужен.",
        why: "I was at home last week. Перед last предлога нет.",
      },

      // ---- итог 6 ----
      {
        id: "q-will-vybor",
        kind: "choice",
        outcome: "говорить о завтрашнем дне: I will work",
        prompt: "Твоя сестра будет работать завтра. В каком предложении нет ошибки?",
        options: [
          { text: "My sister wills work tomorrow." },
          { text: "My sister will works tomorrow." },
          { text: "My sister will work tomorrow.", correct: true },
        ],
        hint: "Окончание -s здесь не нужно нигде.",
        why:
          "My sister will work tomorrow. Окончание -s не приходит ни к will, ни к " +
          "глаголу после него.",
      },
      {
        id: "q-will-dopisat",
        kind: "gap",
        outcome: "говорить о завтрашнем дне: I will work",
        prompt: "Ты будешь дома завтра. Допиши недостающее слово.",
        before: "I will ",
        after: " at home tomorrow.",
        answer: "be",
        hint: "После will форма be не меняется.",
        why: "I will be at home tomorrow. После will стоит be, а не am.",
      },
      {
        id: "q-will-sobrat",
        kind: "order",
        outcome: "говорить о завтрашнем дне: I will work",
        prompt: "Собери предложение: «Он придёт завтра.»",
        items: ["tomorrow", "come", "He", "will"],
        answer: [2, 3, 1, 0],
        hint: "Вторым идёт will, третьим — глагол.",
        why: "He will come tomorrow. Порядок: он, will, глагол, время.",
      },

      // ---- итог 7 ----
      {
        id: "q-plan-vybor",
        kind: "choice",
        outcome: "рассказывать о планах: I'll come tomorrow",
        prompt: "Вы с другом будете дома. Как записать это короче?",
        options: [
          { text: "We'll be at home.", correct: true },
          { text: "Well be at home." },
          { text: "We'will be at home." },
        ],
        hint: "Апостроф стоит на месте пропавших букв.",
        why:
          "We'll be at home. Без апострофа выходит другое слово, а в третьем " +
          "варианте апостроф стоит не на месте.",
      },
      {
        id: "q-plan-koroche",
        kind: "short",
        outcome: "рассказывать о планах: I'll come tomorrow",
        prompt: "Запиши короче: She will come at six.",
        answer: "She'll come at six.",
        hint: "Слово will сливается с тем, о ком речь.",
        why: "She'll come at six. Апостроф стоит там, где пропали буквы wi.",
      },
      {
        id: "q-plan-napisat",
        kind: "short",
        outcome: "рассказывать о планах: I'll come tomorrow",
        prompt: "Пообещай собеседнику помочь. Короткой записью. Помочь — help.",
        answer: "I'll help you.",
        accept: ["I will help you."],
        hint: "Обещание строится через will.",
        why: "I'll help you. Полная запись I will help you тоже верна.",
      },

      // ---- итог 8 ----
      {
        id: "q-vremena-vybor",
        kind: "choice",
        outcome: "рассказывать о вчера и о завтра вместе",
        prompt: "Ты придёшь завтра. Как сказать?",
        options: [
          { text: "I came tomorrow." },
          { text: "I will come tomorrow.", correct: true },
          { text: "I come tomorrow." },
        ],
        hint: "Слово tomorrow говорит о будущем.",
        why: "I will come tomorrow. Слово tomorrow требует will.",
      },
      {
        id: "q-vremena-otmetit",
        kind: "hottext",
        outcome: "рассказывать о вчера и о завтра вместе",
        prompt: "Отметь записи, где форма глагола не подходит слову времени.",
        parts: [
          { text: "I played football yesterday.", selectable: true },
          { text: " · " },
          { text: "I will play football yesterday.", selectable: true, correct: true },
          { text: " · " },
          { text: "I played football tomorrow.", selectable: true, correct: true },
          { text: " · " },
          { text: "I will play football tomorrow.", selectable: true },
        ],
        hint: "Yesterday — прошедшая форма, tomorrow — will.",
        why:
          "Верно: I played football yesterday и I will play football tomorrow.",
      },
      {
        id: "q-vremena-sobrat",
        kind: "order",
        outcome: "рассказывать о вчера и о завтра вместе",
        prompt: "Собери рассказ: сначала о завтра, потом о вчера, потом о сейчас.",
        items: [
          "I worked yesterday.",
          "I am reading a book now.",
          "I will work tomorrow.",
        ],
        answer: [2, 0, 1],
        hint: "Порядок задан в условии.",
        why: "I will work tomorrow. I worked yesterday. I am reading a book now.",
      },
    ],
  },
};

export default module;
