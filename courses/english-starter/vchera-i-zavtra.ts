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
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Прошедшее простое стоит на A1 по обоим
 * источникам. А вот `will` источники разводят по разным ступеням — это
 * объявлено ниже отдельно.
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
 * 5а. ПРОШЕДШЕЕ ПРОСТОЕ ПОДТВЕРЖДАЕТ И CAMBRIDGE — руководство для младших
 *    ступеней, список «что нового на A1 Movers»: «Past simple regular and
 *    irregular forms», примеры источника — «We went to the park yesterday»,
 *    «Her father cooked lunch on Friday». Это же снимает вопрос о слове
 *    `yesterday`: в английском профиле оно стоит в строке наречий времени на
 *    A2, но у Cambridge оно же входит в пример ступени A1. Слово в словнике
 *    тоже A1.
 *
 * 6. Слова модуля — Oxford 3000: yesterday adv., n. A1, will modal v. A1,
 *    last (final) det. A1 (наречное last в том же словнике стоит на A2, но
 *    модуль берёт его только перед словом времени: last week, last Friday),
 *    next adj., adv. A1. Уже введены раньше: tomorrow (модуль 10), week, day,
 *    morning, evening (модули 10 и 14).
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ И ОБЪЯВЛЕНО:
 *
 * — `will` О БУДУЩЕМ. Источники расходятся, и это надо было увидеть сразу.
 *   Английский профиль ставит его на A1 (пункты 3 и 4 выше). Cambridge — на
 *   A2: список «что нового на A2 Flyers» называет «Will — Will you do your
 *   homework this evening?», а в списке A1 Movers слова `will` нет вовсе.
 *
 *   ПОЧЕМУ ЭТО ВАЖНО: `will` стоит в том же списке и в соседней строке с `Be
 *   going to`, а `going to` модуль сам же исключил со словами «источник ставит
 *   на A2». Проверить одну строку таблицы и не заметить соседнюю — это и есть
 *   ошибка разбора.
 *
 *   ПОЧЕМУ ВЗЯТО: программа отдаёт модулю `will` о планах прямо, и без него
 *   курс кончается на прошедшем времени, не давая сказать ни слова о завтра.
 *   Из трёх прежних расхождений между английским профилем и Cambridge курс все
 *   три решил в пользу Cambridge (docs/programma-english-starter.md, «Три
 *   решения, где источники расходятся»), поэтому здесь честнее считать `will`
 *   взятым сверх ступени. Окончательное решение за владельцем
 *   (docs/zadachi-vladeltsa.md, п. 1.28).
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
        "Обе записи про will стоят здесь на A1, но руководство Cambridge ставит его " +
        "на A2 — расхождение разобрано в шапке модуля",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge, руководство для младших ступеней (Pre A1 Starters — A2 Flyers)",
      section:
        "список «что нового на A1 Movers»: «Past simple regular and irregular " +
        "forms», примеры источника — «We went to the park yesterday», «Her father " +
        "cooked lunch on Friday» — это уроки 1–4 и слово yesterday. " +
        "Список «что нового на A2 Flyers»: «Will — Will you do your homework this " +
        "evening?», а строкой ВЫШЕ стоит «Be going to — It isn't going to rain " +
        "today». Это will, взято сверх ступени и объявлено в шапке модуля. " +
        "Порядок строк в прежней редакции был назван обратным; сверил методист по " +
        "странице источника",
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
        "новые слова модуля: yesterday adv., n. A1, will modal v. A1, next adj., " +
        "adv. A1, last (final) det. A1 — наречное last в той же записи стоит на A2, " +
        "но модуль берёт его только перед словом времени: last week, last Friday. " +
        "Уже введены раньше: tomorrow, week, day, morning, evening",
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
    "различать в тексте, что было, что есть и что будет",
    "слышать, о вчера, о сейчас или о завтра идёт речь",
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
            "Это время называется Past Simple.",
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
          prompt: "Собери предложение: «Мы вчера смотрели фильм.» Слово о времени поставь в конец.",
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
          accept: ["Yesterday I worked."],
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
            // Было «случаев ровно три, и разбираются они так же, как правила для
            // -ing» — а набор случаев там другой: у -ing есть удвоение согласной,
            // здесь его нет. «Ровно три» давало ложное чувство полноты. Нашёл
            // методист.
            "У большинства глаголов окончание просто приделывается: work — worked.",
            "Но у некоторых перед окончанием кое-что меняется.",
            "Смотри на конец слова — так же, как в правиле про -ing. Разберём три " +
              "случая, которые встретятся тебе в этом модуле.",
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
          accept: ["Yesterday I studied."],
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
            ["get", "got", "I got a book."],
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
          accept: ["I had a good day.", "Yesterday I had a good day."],
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
          prompt: "Собери предложение: «Она вчера была на работе.» Слово о времени поставь в конец.",
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
          accept: ["Yesterday I was at home."],
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
          accept: ["Last Friday I was at home."],
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
          prompt: "Собери предложение: «Она придёт в шесть.» Слова о времени поставь в конец.",
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
          accept: ["Tomorrow I will work.", "I'll work tomorrow."],
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
          why: "I'll come at six. Просили короткую запись, но полная I will come at six тоже верна.",
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

    // =====================================================================
    // Урок чтения. Последний в курсе, и текст в нём самый длинный: рассказ о
    // вчера, сейчас и завтра сразу. Читать его — значит держать все три
    // времени, и это же итог всего курса.
    // =====================================================================
    {
      slug: "chitaem-o-treh-vremenah",
      title: "Читаем о вчера, сегодня и завтра",
      estimatedMinutes: 14,
      outcome: "различать в тексте, что было, что есть и что будет",

      blocks: [
        {
          id: "zachem-chitat-o-treh",
          kind: "explain",
          text: [
            "В одном рассказе легко встречаются все три времени: вчера было одно, " +
              "сегодня другое, завтра третье.",
            "Различают их по глаголу и по слову времени рядом: yesterday, now, " +
              "tomorrow. Второе надёжнее — оно длиннее и заметнее.",
          ],
        },
        {
          id: "rasskaz-o-nedele-daniyara",
          kind: "text",
          genre: "article",
          title: "Daniyar",
          body: [
            "Yesterday Daniyar worked in the shop. He finished at six and went home.",
            "Now he is reading a book. He is at home.",
            "Tomorrow he will work in the morning. He will finish at two.",
          ],
          glossary: [{ term: "went", translation: "пошёл (особая форма от go)" }],
        },
        {
          id: "razbor-treh-vremen",
          kind: "note",
          tone: "info",
          text:
            "Обрати внимание на глаголы: worked и went — про вчера, is reading — про " +
              "сейчас, will work — про завтра. Слово времени в начале строки говорит " +
              "то же самое, но заметить его легче.",
        },
        {
          id: "pismo-o-planah",
          kind: "text",
          genre: "email",
          title: "A message from Aigul",
          body: [
            "Hi! Yesterday I was at home because I was busy.",
            "Tomorrow I will come at ten. I will help you with the books.",
            "See you! Aigul",
          ],
        },

        // ---- задания ----
        {
          id: "z1-gde-byl-vchera",
          kind: "short",
          about: "rasskaz-o-nedele-daniyara",
          prompt:
            "Прочитай рассказ Daniyar. Где он работал вчера? Ответь английским словом.",
          answer: "shop",
          accept: ["the shop", "in the shop"],
          hint: "Первая строка начинается со слова Yesterday.",
          why: "Yesterday Daniyar worked in the shop. В магазине.",
        },
        {
          id: "z2-chto-delaet-seychas",
          kind: "choice",
          about: "rasskaz-o-nedele-daniyara",
          prompt: "Прочитай рассказ Daniyar. Что он делает сейчас?",
          options: [
            { text: "Работает" },
            { text: "Читает", correct: true },
            { text: "Идёт домой" },
          ],
          hint: "Найди строку со словом Now.",
          why:
            "Now he is reading a book. Форма is с окончанием -ing — про эту минуту.",
        },
        {
          id: "z3-vo-skolko-zakonchit-zavtra",
          kind: "short",
          about: "rasskaz-o-nedele-daniyara",
          prompt:
            "Прочитай рассказ Daniyar. Во сколько он закончит завтра? Ответь цифрой.",
          answer: "2",
          accept: ["two", "два", "2 o'clock"],
          hint: "В рассказе два времени окончания: одно про вчера, другое про завтра.",
          why:
            "Tomorrow… He will finish at two. Шесть — это вчера: He finished at six.",
        },
        {
          id: "z4-pochemu-byla-doma",
          kind: "short",
          about: "pismo-o-planah",
          prompt:
            "Прочитай письмо от Айгуль. Почему вчера она была дома? Ответь английским " +
            "словом.",
          answer: "busy",
          accept: ["I was busy", "she was busy"],
          hint: "Причина стоит после because.",
          why: "Yesterday I was at home because I was busy. Была занята.",
        },
        {
          id: "z5-kogda-pridyot",
          kind: "choice",
          about: "pismo-o-planah",
          prompt: "Прочитай письмо от Айгуль. Когда она придёт?",
          options: [
            { text: "Вчера в десять" },
            { text: "Завтра в десять", correct: true },
            { text: "Сегодня в десять" },
          ],
          hint: "Слово времени стоит в начале строки, а глагол идёт с will.",
          why:
            "Tomorrow I will come at ten. И слово Tomorrow, и will — оба про будущее.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания. Последний в курсе.
    // =====================================================================
    {
      slug: "slushaem-tri-vremeni",
      title: "Слушаем три времени",
      estimatedMinutes: 14,
      outcome: "слышать, о вчера, о сейчас или о завтра идёт речь",

      blocks: [
        {
          id: "zachem-slushat-tri-vremeni",
          kind: "explain",
          text: [
            "На слух время различить труднее, чем на письме: окончание -ed короткое, " +
              "will проглатывают до одного звука.",
            "Зато слово времени звучит отчётливо и стоит с краю — в начале или в конце. " +
              "Оно и есть самая надёжная примета.",
          ],
        },
        {
          id: "tri-vremeni-na-sluh",
          kind: "table",
          caption: "Три времени — нажми и сравни",
          zvuk: {
            "Yesterday I worked at home.": "Yesterday I worked at home.",
            "Now I am working at home.": "Now I am working at home.",
            "Tomorrow I will work at home.": "Tomorrow I will work at home.",
          },
          head: ["Когда", "Как звучит"],
          rows: [
            ["вчера", "Yesterday I worked at home."],
            ["сейчас", "Now I am working at home."],
            ["завтра", "Tomorrow I will work at home."],
          ],
        },
        {
          id: "slovo-vremeni-nadezhnee",
          kind: "note",
          tone: "info",
          text:
            "Если слово времени не прозвучало, лови глагол: worked кончается лишним " +
              "звуком, will звучит перед делом, а форма с -ing идёт после am или is.",
        },
        {
          id: "zapis-rasskaz-o-treh-dnyah",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай рассказ",
          transcript:
            "Yesterday I worked in a school. Now I am reading a book. " +
            "Tomorrow I will go to the park.",
        },
        {
          id: "zapis-razgovor-o-planah",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Where were you yesterday? — I was at home. — And tomorrow? — " +
            "Tomorrow I will work.",
        },

        // ---- задания ----
        {
          id: "z1-gde-rabotal-vchera-na-sluh",
          kind: "short",
          about: "zapis-rasskaz-o-treh-dnyah",
          prompt:
            "Послушай первую запись. Где человек работал вчера? Ответь английским " +
            "словом.",
          answer: "school",
          accept: ["a school", "in a school"],
          hint: "Первое предложение начинается со слова Yesterday.",
          why: "Yesterday I worked in a school. В школе.",
        },
        {
          id: "z2-chto-budet-zavtra",
          kind: "choice",
          about: "zapis-rasskaz-o-treh-dnyah",
          prompt: "Послушай первую запись. Что человек будет делать завтра?",
          options: [
            { text: "Работать в школе" },
            { text: "Читать книгу" },
            { text: "Пойдёт в парк", correct: true },
          ],
          hint: "Последнее предложение начинается со слова Tomorrow.",
          why: "Tomorrow I will go to the park. В парк.",
        },
        {
          id: "z3-skolko-vremen",
          kind: "choice",
          about: "zapis-rasskaz-o-treh-dnyah",
          prompt: "Послушай первую запись. Сколько разных времён в ней звучит?",
          options: [
            { text: "Два" },
            { text: "Три", correct: true },
            { text: "Одно" },
          ],
          hint: "Считай слова времени: их слышно лучше, чем окончания.",
          why:
            "Yesterday — вчера, Now — сейчас, Tomorrow — завтра. Три предложения, три " +
            "времени.",
        },
        {
          id: "z4-gde-byl-vchera-na-sluh",
          kind: "short",
          about: "zapis-razgovor-o-planah",
          prompt:
            "Послушай вторую запись. Где человек был вчера? Ответь английским словом.",
          answer: "home",
          accept: ["at home", "I was at home"],
          hint: "Ответ идёт сразу после первого вопроса.",
          why: "I was at home. Дома.",
        },
        {
          id: "z5-rasskazat-o-treh-vremenah",
          kind: "speak",
          prompt:
            "Расскажи вслух о себе тремя предложениями: что было вчера, что сейчас и " +
            "что будет завтра.",
          phrase: "Yesterday I worked. Now I am reading. Tomorrow I will work.",
          translation: "Вчера я работал. Сейчас я читаю. Завтра я буду работать.",
          hint: "Слово времени ставь первым — с него слушающему легче.",
          why:
            "Это весь курс в трёх предложениях. Если они идут одно за другим сами, " +
            "три времени ты различаешь уверенно.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа написана заново, отдельно от уроков. Первая её редакция была
      // зеркалом: шестнадцать подсказок и разборов из сорока восьми совпадали
      // с урочными слово в слово. Здесь другие углы — перевести предложение в
      // другое время, исправить чужую запись, назвать причину ошибки, отличить
      // прошлое от будущего по смыслу, а не по образцу задания.

      // ---- итог 1 ----
      // ---- чтение и слушание ------------------------------------------
      // Другой случай, чем в уроках: там рассказ о Данияре и письмо Айгуль,
      // здесь записка о поездке и разговор о выходном.
      {
        id: "q-tekst-kogda-eto-bylo",
        kind: "choice",
        outcome: "различать в тексте, что было, что есть и что будет",
        prompt:
          "Записка: «Yesterday I was in Almaty. Now I am in Astana. Tomorrow I will " +
          "go home.» Где человек сейчас?",
        options: [
          { text: "В Астане", correct: true },
          { text: "В Алматы" },
          { text: "Дома" },
        ],
        why:
          "Now I am in Astana. Алматы — это вчера, дом — завтра. Слово времени в " +
          "начале каждой строки и говорит, о чём она.",
      },
      {
        id: "q-tekst-chto-budet",
        kind: "short",
        outcome: "различать в тексте, что было, что есть и что будет",
        prompt:
          "Та же записка: «Yesterday I was in Almaty. Now I am in Astana. Tomorrow I " +
          "will go home.» Какое слово показывает, что речь о будущем? Ответь " +
          "английским словом.",
        answer: "tomorrow",
        accept: ["will", "Tomorrow"],
        why:
          "Tomorrow I will go home. О будущем говорят два знака сразу: слово tomorrow " +
          "и will перед делом.",
      },
      {
        id: "q-na-sluh-kogda-rabotal",
        kind: "choice",
        outcome: "слышать, о вчера, о сейчас или о завтра идёт речь",
        zvuk: "Yesterday I worked in a shop. Tomorrow I will work in a school.",
        prompt: "Послушай запись. Где человек будет работать завтра?",
        options: [
          { text: "В магазине" },
          { text: "Нигде" },
          { text: "В школе", correct: true },
        ],
        why:
          "Tomorrow I will work in a school. Магазин был вчера: Yesterday I worked " +
          "in a shop.",
      },
      {
        id: "q-na-sluh-chto-seychas",
        kind: "short",
        outcome: "слышать, о вчера, о сейчас или о завтра идёт речь",
        zvuk: "Yesterday I was busy. Now I am reading a book.",
        prompt:
          "Послушай запись. Что человек делает сейчас? Ответь английским словом с " +
          "окончанием -ing.",
        answer: "reading",
        accept: ["I am reading", "am reading"],
        why: "Now I am reading a book. Читает.",
      },
      {
        id: "q-perevesti-v-proshedshee",
        kind: "short",
        outcome: "рассказывать о вчерашнем дне: I worked yesterday",
        prompt: "Переведи в прошедшее время: I work in a shop.",
        answer: "I worked in a shop.",
        hint: "Меняется только глагол.",
        why: "I worked in a shop. Всё остальное осталось на месте.",
      },
      {
        id: "q-otmetit-o-proshlom",
        kind: "hottext",
        outcome: "рассказывать о вчерашнем дне: I worked yesterday",
        prompt: "Отметь предложения о прошлом.",
        parts: [
          { text: "I work every day.", selectable: true },
          { text: " · " },
          { text: "We watched a film.", selectable: true, correct: true },
          { text: " · " },
          { text: "She played football.", selectable: true, correct: true },
          { text: " · " },
          { text: "He works at school.", selectable: true },
        ],
        hint: "Смотри на конец глагола.",
        why:
          "О прошлом говорят We watched a film и She played football: у глагола " +
          "окончание -ed. Два других предложения о том, что бывает всегда.",
      },
      {
        id: "q-chto-ne-tak-work-yesterday",
        kind: "choice",
        outcome: "рассказывать о вчерашнем дне: I worked yesterday",
        prompt: "Друг написал: I work yesterday. Что здесь не так?",
        options: [
          {
            text: "Глагол стоит в настоящем времени, а yesterday говорит о прошлом.",
            correct: true,
          },
          { text: "Слово yesterday стоит не на своём месте." },
          { text: "Перед глаголом не хватает will." },
        ],
        hint: "Сравни глагол и слово времени.",
        why:
          "Верно: I worked yesterday. Слово времени и форма глагола должны " +
          "говорить об одном.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-likeed",
        kind: "short",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "Друг написал: I likeed this film. Напиши это предложение без ошибки.",
        answer: "I liked this film.",
        hint: "У этого глагола на конце уже есть e.",
        why: "I liked this film. К like добавляется только d.",
      },
      {
        id: "q-dopisat-played",
        kind: "gap",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "Вчера ты и твои друзья играли в футбол. Допиши глагол в нужной форме. Играть — play.",
        before: "We ",
        after: " football yesterday.",
        answer: "played",
        hint: "Перед y здесь стоит гласный.",
        why:
          "We played football yesterday. У play перед y стоит a, поэтому y остаётся " +
          "на месте.",
      },
      {
        id: "q-ryad-form",
        kind: "choice",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "В каком ряду обе формы написаны верно?",
        options: [
          { text: "likeed, studied" },
          { text: "liked, studyed" },
          { text: "liked, studied", correct: true },
        ],
        hint: "Проверь в ряду обе формы, а не первую.",
        why: "Liked и studied. У like добавилась буква d, а у study буква y стала i.",
      },

      // ---- итог 3 ----
      {
        id: "q-perevesti-go",
        kind: "short",
        outcome: "пользоваться особыми глаголами: go — went",
        // «I went to work» — единственный контекст для go во всём уроке, он стоит
        // там четыре раза. Взято другое место.
        prompt: "Переведи в прошедшее время: I go to school.",
        answer: "I went to school.",
        hint: "У go нет окончания в прошедшем — есть только went.",
        why: "I went to school. Went — самостоятельное слово, а не go с добавкой.",
      },
      {
        id: "q-otmetit-osobye-glagoly",
        kind: "hottext",
        outcome: "пользоваться особыми глаголами: go — went",
        prompt: "Отметь глаголы, у которых форма прошедшего времени своя.",
        parts: [
          { text: "work", selectable: true },
          { text: " · " },
          { text: "see", selectable: true, correct: true },
          { text: " · " },
          { text: "play", selectable: true },
          { text: " · " },
          { text: "come", selectable: true, correct: true },
        ],
        hint: "Особый глагол окончания -ed не берёт.",
        why:
          "Свои формы у see и come: saw и came. У work и play обычное окончание: " +
          "worked, played.",
      },
      {
        id: "q-sopostavit-tri-osobyh",
        kind: "match",
        outcome: "пользоваться особыми глаголами: go — went",
        prompt: "Сопоставь глагол и его форму прошедшего времени.",
        left: ["do", "get", "come"],
        right: ["came", "did", "got"],
        answer: [1, 2, 0],
        hint: "Ни одну из трёх форм правило не даёт.",
        why: "Do — did, get — got, come — came.",
      },

      // ---- итог 4 ----
      {
        id: "q-dopisat-were",
        kind: "gap",
        outcome: "говорить, где был: I was at home",
        prompt: "Твои друзья вчера были в школе. Допиши недостающее слово.",
        before: "My friends ",
        after: " at school yesterday.",
        answer: "were",
        hint: "Друг здесь не один.",
        why:
          "My friends were at school yesterday. Форма were подходит, когда речь " +
          "о нескольких людях, а не об одном.",
      },
      {
        id: "q-ispravit-they-was",
        kind: "short",
        outcome: "говорить, где был: I was at home",
        prompt: "Друг написал: They was at work. Напиши это предложение без ошибки.",
        answer: "They were at work.",
        hint: "Меняется одно слово.",
        why: "They were at work. Со словом they идёт were.",
      },
      {
        id: "q-my-doma-vchera",
        kind: "choice",
        outcome: "говорить, где был: I was at home",
        prompt: "Вчера дома были ты и твоя сестра. Как сказать?",
        options: [
          { text: "We was at home yesterday." },
          { text: "We were at home yesterday.", correct: true },
          { text: "We are at home yesterday." },
        ],
        hint: "Речь о двоих сразу.",
        why:
          "We were at home yesterday. Про двоих и больше говорят were, а третий " +
          "вариант к тому же стоит в настоящем времени.",
      },

      // ---- итог 5 ----
      {
        id: "q-chto-lishnee-on-last",
        kind: "choice",
        outcome: "называть время: yesterday, last week",
        prompt: "Друг написал: I studied on last Friday. Что здесь лишнее?",
        options: [
          { text: "Ничего лишнего нет, так сказать можно." },
          { text: "Предлог on: перед last он не нужен.", correct: true },
          { text: "Окончание -ed: его тут быть не должно." },
        ],
        hint: "Посмотри, что стоит перед словом last.",
        why: "I studied last Friday. Перед оборотом с last предлог не ставят.",
      },
      {
        id: "q-dopisat-last-year",
        kind: "gap",
        outcome: "называть время: yesterday, last week",
        prompt: "Твоя подруга приходила в прошлом году. Допиши недостающее слово.",
        before: "She came ",
        after: " year.",
        answer: "last",
        hint: "Нужно слово со значением «прошлый».",
        why: "She came last year. Last, как и next, предлога перед собой не требует.",
      },
      {
        id: "q-brat-na-rabote-na-proshloy-nedele",
        kind: "short",
        outcome: "называть время: yesterday, last week",
        prompt:
          "Напиши, что твой брат был на работе на прошлой неделе. Брат — my brother, " +
          "на работе — at work, прошлая неделя — last week.",
        answer: "My brother was at work last week.",
        accept: ["Last week my brother was at work."],
        hint: "Оборот с last предлога не требует.",
        why: "My brother was at work last week. Об одном человеке идёт was.",
      },

      // ---- итог 6 ----
      {
        id: "q-sestra-budet-uchitsya",
        kind: "short",
        outcome: "говорить о завтрашнем дне: I will work",
        prompt:
          "Напиши, что твоя сестра будет учиться завтра. Сестра — my sister, " +
          "учиться — study, завтра — tomorrow.",
        answer: "My sister will study tomorrow.",
        accept: ["Tomorrow my sister will study."],
        hint: "После will глагол окончания не берёт.",
        why:
          "My sister will study tomorrow. Ни will, ни глагол за ним окончание -s " +
          "не берут.",
      },
      {
        id: "q-chto-ne-tak-will-works",
        kind: "choice",
        outcome: "говорить о завтрашнем дне: I will work",
        prompt: "Друг написал: She will comes tomorrow. Что здесь не так?",
        options: [
          { text: "Слово will должно стоять после глагола." },
          { text: "Слово tomorrow здесь лишнее." },
          { text: "У глагола после will окончание -s лишнее.", correct: true },
        ],
        hint: "Посмотри на глагол, который стоит после will.",
        why: "She will come tomorrow. Will не меняет форму глагола, который идёт следом.",
      },
      {
        id: "q-otmetit-o-zavtra",
        kind: "hottext",
        outcome: "говорить о завтрашнем дне: I will work",
        prompt: "Отметь предложения о завтрашнем дне.",
        parts: [
          { text: "I worked yesterday.", selectable: true },
          { text: " · " },
          { text: "I will work tomorrow.", selectable: true, correct: true },
          { text: " · " },
          { text: "She will come at six.", selectable: true, correct: true },
          { text: " · " },
          { text: "She came at six.", selectable: true },
        ],
        hint: "О будущем говорит одно короткое слово перед глаголом.",
        why:
          "О завтрашнем дне говорят I will work tomorrow и She will come at six. Два " +
          "других предложения о прошлом.",
      },

      // ---- итог 7 ----
      {
        id: "q-koroche-we-will",
        kind: "short",
        outcome: "рассказывать о планах: I'll come tomorrow",
        prompt: "Запиши короче: We will be at home.",
        answer: "We'll be at home.",
        hint: "Will теряет часть букв и сливается с предыдущим словом.",
        why: "We'll be at home. Пропали буквы wi.",
      },
      {
        id: "q-gde-apostrof",
        kind: "choice",
        outcome: "рассказывать о планах: I'll come tomorrow",
        prompt: "В какой записи апостроф стоит верно?",
        options: [
          { text: "Hell come at six." },
          { text: "He'll come at six.", correct: true },
          { text: "He'will come at six." },
        ],
        hint: "Проверь, не потерялось ли значение слова без апострофа.",
        why:
          "He'll come at six. Апостроф встаёт вместо пропавших букв w и i, а не " +
          "перед всем словом will.",
      },
      {
        id: "q-poobeshchat-priyti",
        kind: "short",
        outcome: "рассказывать о планах: I'll come tomorrow",
        // «I'll come tomorrow» стоит в таблице урока и ответом задания. Взято
        // другое обещание из тех же слов модуля.
        prompt:
          "Пообещай собеседнику позвонить завтра, короткой записью. Позвонить — call, " +
          "завтра — tomorrow.",
        answer: "I'll call you tomorrow.",
        // Полная запись из принимаемых убрана: условие прямо просит короткую, а
        // засчитывать оба — значит обещать одно и проверять другое. То же место
        // редактор нашёл в работе части.
        accept: ["I'll call you tomorrow"],
        hint: "Обещание о будущем строится так же, как план.",
        why:
          "I'll call you tomorrow. Полная форма I will call you tomorrow тоже " +
          "правильна, но задание просило короткую запись.",
      },

      // ---- итог 8 ----
      {
        id: "q-vremya-sporit-s-glagolom",
        kind: "hottext",
        outcome: "рассказывать о вчера и о завтра вместе",
        prompt: "Отметь предложения, где слово времени спорит с формой глагола.",
        parts: [
          { text: "I worked yesterday.", selectable: true },
          { text: " · " },
          { text: "I will work yesterday.", selectable: true, correct: true },
          { text: " · " },
          { text: "She came tomorrow.", selectable: true, correct: true },
          { text: " · " },
          { text: "She will come tomorrow.", selectable: true },
        ],
        hint: "Yesterday говорит о прошлом, tomorrow — о будущем.",
        why:
          "Спорят I will work yesterday и She came tomorrow: слово времени говорит " +
          "об одном, а форма глагола о другом.",
      },
      {
        id: "q-sobrat-rasskaz-s-nastoyashchim",
        kind: "order",
        outcome: "рассказывать о вчера и о завтра вместе",
        prompt: "Собери рассказ: сначала о сейчас, потом о вчера, потом о завтра.",
        items: [
          "I worked yesterday.",
          "I will work tomorrow.",
          "I am reading a book now.",
        ],
        answer: [2, 0, 1],
        hint: "Условие называет порядок прямо.",
        why: "I am reading a book now. I worked yesterday. I will work tomorrow.",
      },
      {
        id: "q-vchera-rabota-zavtra-dom",
        kind: "short",
        outcome: "рассказывать о вчера и о завтра вместе",
        prompt:
          "Напиши о себе два предложения: вчерашний день прошёл на работе, " +
          "завтрашний пройдёт дома. На работе — at work, дома — at home.",
        answer: "I was at work yesterday. I will be at home tomorrow.",
        accept: ["I was at work yesterday. I'll be at home tomorrow."],
        hint: "Первое предложение о вчера, второе о завтра.",
        why:
          "I was at work yesterday. I will be at home tomorrow. Годится и короткая " +
          "запись I'll be at home tomorrow.",
      },
    ],
  },
};

export default module;
