import type { Module } from "@/lib/content/types";

/**
 * Модуль 2 курса «Английский · Elementary»: вчера я работал.
 *
 * Программа: docs/programma-english-elementary.md, модуль 2 — «рассказывать о
 * законченных делах»; грамматика: Past Simple, утверждение; окончание `-ed` и
 * его чтение.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, PAST past simple, «FORM: AFFIRMATIVE» — «Can
 *    use the affirmative form with an increasing range of verbs», пример
 *    источника: «I forgot to tell you some details about tomorrow evening».
 *    Ступенью ниже та же форма стоит с оговоркой «limited range of regular and
 *    irregular verbs» (A1) — то есть на нашей ступени круг глаголов растёт, и
 *    модуль берёт сорок два правильных.
 *
 * 2. English Grammar Profile, A1, PAST past simple, «USE: EVERYDAY EVENTS AND
 *    STATES» — «Can use the past simple to talk about everyday events or
 *    states». Это и есть рассказ о вчерашнем дне.
 *
 * 3. Cambridge, руководство для младших ступеней, список «что нового на A1
 *    Movers»: «Past simple regular and irregular forms», примеры источника —
 *    «We went to the park yesterday», «Her father cooked lunch on Friday».
 *    Второй пример — правильный глагол с `-ed`, ровно наш случай.
 *
 * 4. Описания Совета Европы, с. 67, Sustained monologue: describing
 *    experience, A2: «Can give very short, basic descriptions of events, past
 *    activities and personal experiences». Отсюда размер рассказа в уроках 4 и
 *    8: несколько простых предложений подряд, а не связный текст.
 *
 * ЧТЕНИЕ ОКОНЧАНИЯ — ОПОРА НЕ ГРАММАТИЧЕСКАЯ, И ЭТО НАДО СКАЗАТЬ ПРЯМО.
 *
 * Урок 3 учит, что `-ed` читается тремя способами: /t/, /d/, /ɪd/. Ни English
 * Grammar Profile, ни руководство Cambridge такого правила не дают — первый
 * описывает формы, второй в разделе Pronunciation говорит об отдельных звуках,
 * ударении и интонации вообще, а не об окончании прошедшего времени.
 *
 * Опора здесь — СЛОВАРЬ ПРОИЗНОШЕНИЯ, `materials/ipa-en-uk.txt`, и правило
 * выведено из него сверкой, а не взято из головы:
 *   · worked /wɜːkt/, watched /wɒtʃt/, cooked /kʊkt/, walked /wɔːkt/,
 *     asked /ɑːskt/, finished /fɪnɪʃt/, danced /dɑːnst/ — везде /t/;
 *   · played /pleɪd/, cleaned /kliːnd/, opened /əʊpənd/, called /kɔːld/,
 *     stayed /steɪd/, lived /lɪvd/ — везде /d/;
 *   · wanted /wɒntɪd/, needed /niːdɪd/, started /stɑːtɪd/, waited /weɪtɪd/,
 *     visited /vɪzɪtɪd/ — везде /ɪd/, и все пять оканчиваются на t или d.
 *
 * Если методист сочтёт такую опору недостаточной, урок 3 снимается, а чтение
 * окончания уходит в озвучку без отдельного правила. Программа его требует, но
 * программа — не источник.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ОТРИЦАНИЯ И ВОПРОСА (`I didn't work`, `Did you work?`). Программа отдаёт их
 *   модулям 4 и 5. Здесь только утверждение.
 * — НЕПРАВИЛЬНЫХ ГЛАГОЛОВ (`go — went`). Им отдан модуль 3 целиком. В текстах
 *   и записях этого модуля их нет ни одного — проверено сверкой по словам.
 * — УДВОЕНИЯ СОГЛАСНОГО (`stop — stopped`). Глаголов такого вида в словаре
 *   модуля нет, а правило без применения — лишнее. ПОЧЕМУ их нет, сказать
 *   важнее, чем что их нет: удвоение требует одного гласного перед одним
 *   конечным согласным под ударением. У наших `pack` и `camp` на конце два
 *   согласных, у `cycle` — `e`, у `boil` и `sail` перед `l` стоит диграф.
 *   Британское удвоение держится и на `-l` (`travel — travelled`), и это
 *   слово есть в словнике ступени: возьмёт его следующий — утверждение шапки
 *   сломается молча. Найдено методистом 20 августа.
 *
 * РЕШЕНИЯ ПРЕПОДАВАТЕЛЯ, КОТОРЫХ В ИСТОЧНИКАХ НЕТ И БЫТЬ НЕ МОЖЕТ.
 *
 * Словник A2 Key даёт эти слова одной строкой с частью речи и без единого
 * примера — «boil (v)», «camp (v)», «pack (v)», «sail (v)», «snack (n)». Oxford
 * 3000 даёт только ступень. Значит всякое сужение перевода — наше решение, и
 * оно записано здесь, чтобы следующий проверяющий не гадал, намерение это или
 * недосмотр. Раздел дописан 20 августа по третьему разбору методиста: в модуле
 * 1 такой раздел был, в этом не было ни строки.
 *
 * — `offer` «предлагать (угощение, помощь)» и `suggest` «предлагать (мысль,
 *   план)» разведены пометами: одним переводом ученик не выбрал бы, какое брать.
 * — `pass` сужен до «проходить мимо»: второе значение примером не показано.
 *   У словника примеры есть, но другие — «You pass the station on the left»
 *   и «to pass a driving test».
 * — `tidy` «наводить порядок», а не «прибирать»: рядом стоит `clean` «убирать»,
 *   и по-русски это было бы одно слово.
 * — `snack` «лёгкая еда», а не «перекус»: второе разговорное.
 * — `boil` «кипятить», без «варить»: второе спорит с `cook` в том же модуле.
 * — `pack` «собирать вещи», а не «укладывать»: иначе в примере выходит
 *   «я уложил вещи мою сумку».
 * — `camp` «ночевать в палатке», а не «жить»: `live` в этом же модуле переведён
 *   словом «жить».
 * — `sail` «плавать под парусом»: вид глагола выровнен с соседними `cycle` и
 *   `camp`.
 *
 * ВОЗВРАЩЕНИЕ. Со второго модуля раскладка требует задания из пройденного
 * (docs/programma-english-elementary.md, «Где они появляются»). Здесь их три:
 * два в уроке 5 и одно в уроке 8, все из модуля 1 — про was/were и обороты
 * времени. Берутся ссылкой (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "vchera-ya-rabotal",
  title: "Вчера я работал",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with an increasing range of verbs», пример источника — «I forgot to tell " +
        "you some details about tomorrow evening». " +
        "A1, PAST past simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with a limited range of regular and irregular verbs» — ступенью ниже круг " +
        "глаголов ограничен, у нас он растёт. " +
        "A1, PAST past simple, «USE: EVERYDAY EVENTS AND STATES»: «Can use the past " +
        "simple to talk about everyday events or states» — опора рассказа о дне",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge, руководство для младших ступеней (Pre A1 Starters — A2 Flyers)",
      section:
        "список «что нового на A1 Movers»: «Past simple regular and irregular " +
        "forms», примеры источника — «We went to the park yesterday» и «Her father " +
        "cooked lunch on Friday». Второй пример — правильный глагол с окончанием, " +
        "то есть ровно то, чему учит модуль",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК 8, ПИСЬМО. с. 67, шкала Creative writing, графа A2: «Can give very " +
        "short, basic descriptions of events, past activities and personal " +
        "experiences»; там же: «Can create diary entries that describe activities " +
        "(e.g. daily routine, outings, sports, hobbies), people and places, using " +
        "basic, concrete vocabulary and simple phrases and sentences with simple " +
        "connectives like 'and', 'but' and 'because'». В первой редакции эта строка " +
        "была названа шкалой Sustained monologue — страница верна, графа нет; " +
        "поправлено по разбору методиста. " +
        "УРОК 4, РАССКАЗ ВСЛУХ. с. 63, шкала Sustained monologue: describing " +
        "experience, графа A2: «Can give short, basic descriptions of events and " +
        "activities». " +
        "с. 55, Reading correspondence, A2: «Can understand short, simple personal " +
        "letters» — урок 6. " +
        "с. 48, Overall oral comprehension, A2: «Can understand phrases and " +
        "expressions related to areas of most immediate priority (e.g. very basic " +
        "personal and family information, shopping, local geography, employment), " +
        "provided people articulate clearly and slowly» — урок 7 и pace: \"slow\". " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find).",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt — опора урока 3",
      section:
        "Правила чтения окончания в грамматических источниках нет: English Grammar " +
        "Profile описывает формы, а руководство Cambridge в разделе Pronunciation " +
        "говорит об отдельных звуках, ударении и интонации вообще. Правило выведено " +
        "сверкой по словарю произношения: worked /wɜːkt/, watched /wɒtʃt/, cooked " +
        "/kʊkt/, walked /wɔːkt/, asked /ɑːskt/, finished /fɪnɪʃt/ — /t/; played " +
        "/pleɪd/, cleaned /kliːnd/, opened /əʊpənd/, called /kɔːld/, stayed /steɪd/, " +
        "lived /lɪvd/ — /d/; wanted /wɒntɪd/, needed /niːdɪd/, started /stɑːtɪd/, " +
        "waited /weɪtɪd/, visited /vɪzɪtɪd/ — /ɪd/, и все пять оканчиваются на t " +
        "или d. Опора объявлена в шапке модуля как не грамматическая",
      license: "внутреннее использование",
    },
    {
      ref: "English Grammar Profile — опора уроков 4 и 5",
      section:
        "A2, ADVERBS adverbs and adverb phrases: types and meanings, «USE: " +
        "SEQUENCING»: «Can use a limited range of adverbs and adverb phrases " +
        "('first', 'then', 'after that') to order segments of discourse», пример " +
        "источника — «First, we played housie and blind man's bluff. After that a " +
        "magician showed us a lot of magic tricks» — это урок 4, те самые три слова. " +
        "A2, ADVERBS adverbs as modifiers, «FORM: TIME and SEQUENCING, MODIFYING " +
        "CLAUSES», пример источника — «Yesterday I went shopping and bought some " +
        "clothes» — это урок 5. " +
        "ОГОВОРКА: в том же источнике есть B1, PAST past simple, «USE: ORDERING OF " +
        "PAST EVENTS» — «Can use the past simple to order sequences of events in the " +
        "past, in the context of narratives». Урок 4 опирается НЕ на неё: он даёт " +
        "три наречия ступени A2, а не связный рассказ ступени B1",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "глаголы модуля с пометой A1: work, play, watch, cook, clean, help, listen, " +
        "study, like, want, need, start, finish, open, close, walk, talk, ask, " +
        "answer, wait, live, visit, call, stay, dance. Слова обстановки: yesterday " +
        "A1, morning A1, evening A1, day A1, letter A1, room A1, dinner A1, music A1, " +
        "homework A1, garden A1, friend A1, desk A1; подпорки в примерах карточек " +
        "book, tea, money, door, car, water, bag, park — тоже A1. " +
        "Сверх A1 и в пределах ступени: invite A2, borrow A2, offer A2, enter A2, " +
        "shout A2, celebrate A2, save A2, worry A2, tidy A2, push A2, pass A2, " +
        "fix A2, suggest A2, boil A2, pack A2, cycle A2, sail A2, camp A2. " +
        "У слова pass взята помета pass v. A2, а не pass n. B1. " +
        "Слово invite взято в урок 3 нарочно: на нём видно, что чтение окончания " +
        "решает звук, а не буква",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list",
      section:
        "опора слова snack, которого в Oxford 3000 нет вовсе: стоит и в алфавитном " +
        "перечне словника, и в тематическом списке Food. " +
        "ОГОВОРКА: словник называет требования экзамена A2 Key, а не ступень слова, " +
        "и другого подтверждения для snack в materials/ не нашлось. " +
        "Опора добавлена 20 августа по разбору методиста. Тем же разбором из модуля " +
        "убраны два слова: supper — потому что утверждение «поздний ужин» источниками " +
        "не подтверждается (в тематическом списке Food этого слова нет вовсе), и " +
        "weekly — потому что Oxford 5000 ставит его на B2, а сверка шла по Oxford " +
        "3000, где слова нет, и потому молчала",
      license: "внутреннее использование, публично не называем",
    },
  ],

  outcomes: [
    "рассказывать о законченном деле: I worked yesterday",
    "писать окончание -ed без ошибок: like — liked, study — studied",
    "различать три чтения окончания -ed по последнему звуку глагола",
    "рассказывать о дне несколькими делами подряд",
    "ставить дело и время вместе: I worked yesterday, I cooked last night",
    "понимать письмо о том, как прошёл день",
    "слышать в записи, что человек делал",
    "проверять рассказ о дне: окончание -ed, слова порядка, was в строке о самом дне",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "delo-v-proshlom",
      title: "Вчера я работал: I worked",
      estimatedMinutes: 15,
      outcome: "рассказывать о законченном деле: I worked yesterday",

      blocks: [
        {
          id: "zachem-ed",
          kind: "explain",
          text: [
            "Прошлый модуль отвечал на вопрос, где человек был. Этот — на вопрос, что он делал.",
            "«Я работал», «Она готовила», «Мы смотрели фильм».",
            "У глагола для этого есть своя форма: к нему прибавляется окончание -ed.",
          ],
        },
        {
          id: "formy-ed",
          kind: "table",
          caption: "Дело сейчас и дело вчера",
          zvuchat: ["I work", "I worked", "he works", "he worked"],
          head: ["О настоящем", "О прошлом"],
          rows: [
            ["I work", "I worked"],
            ["you work", "you worked"],
            ["he works", "he worked"],
            ["she works", "she worked"],
            ["it works", "it worked"],
            ["we work", "we worked"],
            ["they work", "they worked"],
          ],
        },
        {
          id: "odna-forma",
          kind: "explain",
          text: [
            "Окончание -ed одно на всех: I worked, he worked, they worked.",
            "Форма глагола здесь не зависит от того, о ком речь.",
            "В настоящем времени у he и she появляется -s, а в прошедшем его нет ни у кого.",
            "Вместо местоимения может стоять имя, и окончание то же: my sister cooked, " +
              "my parents watched a film.",
          ],
        },
        {
          id: "ne-workeds",
          kind: "note",
          tone: "mistake",
          text:
            "«He workeds yesterday» — так не говорят.\n\nОкончание -s остаётся в настоящем " +
            "времени и в прошедшую форму не приходит.",
        },
        {
          id: "primer-vchera",
          kind: "example",
          caption: "Дела вчерашнего дня",
          zvuchat: ["I worked in the morning.", "I cooked dinner.", "We watched a film.", "She offered tea.", "He entered the room."],
          text: "I worked in the morning.\nI cooked dinner.\nWe watched a film.\nShe offered tea.\nHe entered the room.",
          explain:
            "Пять дел подряд, и у каждого глагола окончание -ed. Слово in the morning " +
            "говорит, когда это было.",
        },
        {
          id: "slovar-del",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "work", translation: "работать", example: "I worked yesterday.", hint: "/wɜːk/" },
            { term: "cook", translation: "готовить", example: "I cooked dinner.", hint: "/kʊk/" },
            { term: "dinner", translation: "ужин", example: "I cooked dinner.", hint: "/ˈdɪnə/" },
            { term: "watch", translation: "смотреть", example: "We watched a film.", hint: "/wɒtʃ/" },
            { term: "play", translation: "играть", example: "They played football.", hint: "/pleɪ/" },
            { term: "clean", translation: "убирать, чистить", example: "She cleaned the room.", hint: "/kliːn/" },
            { term: "room", translation: "комната", example: "She cleaned the room.", hint: "/ruːm/" },
            { term: "morning", translation: "утро", example: "I worked in the morning.", hint: "/ˈmɔːnɪŋ/" },
            { term: "borrow", translation: "брать на время", example: "I borrowed a book.", hint: "/ˈbɒrəʊ/" },
            { term: "offer", translation: "предлагать (угощение, помощь)", example: "She offered tea.", hint: "/ˈɒfə/" },
            { term: "enter", translation: "входить", example: "He entered the room.", hint: "/ˈentə/" },
            { term: "shout", translation: "кричать", example: "My brother shouted in the morning.", hint: "/ʃaʊt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-ed",
          kind: "gap",
          prompt: "Вчера был рабочий день. Скажи об этом по-английски. Работать — work.",
          before: "I ",
          after: " yesterday.",
          answer: "worked",
          hint: "К глаголу приходит окончание прошедшего времени.",
          why: "I worked yesterday. Окончание -ed показывает, что дело закончено.",
        },
        {
          id: "z2-vybrat-formu-ed",
          kind: "choice",
          prompt: "Твоя сестра вчера готовила ужин. Где нет ошибки?",
          options: [
            { text: "My sister cookeds dinner." },
            { text: "My sister cooked dinner.", correct: true },
            { text: "My sister cooks dinner yesterday." },
          ],
          hint: "Окончание -s в прошедшую форму не приходит.",
          why:
            "My sister cooked dinner. В записи My sister cooks dinner yesterday глагол стоит " +
            "в настоящем времени, а слово yesterday говорит о прошлом.",
        },
        {
          id: "z3-otmetit-proshedshie",
          kind: "hottext",
          prompt: "Отметь глаголы, которые стоят в прошедшем времени.",
          parts: [
            { text: "works", selectable: true },
            { text: " · " },
            { text: "cleaned", selectable: true, correct: true },
            { text: " · " },
            { text: "watched", selectable: true, correct: true },
            { text: " · " },
            { text: "plays", selectable: true },
          ],
          hint: "У прошедшего времени своё окончание.",
          why: "Прошедшие — cleaned и watched. У works и plays окончание настоящего времени.",
        },
        {
          id: "z4-sobrat-delo",
          kind: "order",
          prompt: "Собери предложение: «Мы вчера смотрели фильм.»",
          items: ["a film", "watched", "We", "yesterday"],
          answer: [2, 1, 0, 3],
          hint: "yesterday встаёт в конец.",
          why: "We watched a film yesterday. Глагол стоит вторым, время — последним.",
        },
        {
          id: "z5-napisat-delo",
          kind: "short",
          prompt: "Напиши о себе: вчерашнее дело — уборка комнаты. Убирать — clean, комната — the room.",
          answer: "I cleaned the room.",
          accept: ["I cleaned the room", "I cleaned the room yesterday.", "Yesterday I cleaned the room."],
          hint: "Начни с I и приделай окончание к глаголу.",
          why: "I cleaned the room. Окончание -ed одно на всех.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-pishetsya-ed",
      title: "Как пишется -ed",
      estimatedMinutes: 15,
      outcome: "писать окончание -ed без ошибок: like — liked, study — studied",

      blocks: [
        {
          id: "zachem-pisat",
          kind: "explain",
          text: [
            "Окончание одно, а пишется по-разному.",
            "Разница видна по последней букве глагола, и случаев всего четыре.",
          ],
        },
        {
          id: "tri-sluchaya",
          kind: "table",
          caption: "Три случая написания",
          zvuchat: ["work — worked", "like — liked", "study — studied"],
          head: ["Глагол кончается на", "Что делаем", "Пример"],
          rows: [
            ["любую букву, кроме e и y", "прибавляют -ed", "work — worked"],
            ["e", "прибавляют только -d", "like — liked"],
            ["согласную и y", "меняют y на i и прибавляют -ed", "study — studied"],
            ["гласную и y", "прибавляют -ed, y остаётся", "play — played"],
          ],
        },
        {
          id: "pro-y",
          kind: "explain",
          text: [
            "В третьей строке важно, что стоит перед y.",
            "Согласная — y уступает место i: study — studied. Гласная — y остаётся на " +
              "месте, и прибавляется целое окончание: play — played.",
          ],
        },
        {
          id: "ne-studyed",
          kind: "note",
          tone: "mistake",
          text:
            "«studyed» и «likeed» — так не пишут.\n\nПосле согласной y уходит: study — studied. " +
            "После e второе e не ставят: like — liked.",
        },
        {
          id: "primer-napisaniya",
          kind: "example",
          caption: "Пять глаголов рядом",
          zvuchat: ["I worked at home.", "I liked the film.", "She studied English.", "We celebrated at home.", "She tidied the desk."],
          text: "I worked at home.\nI liked the film.\nShe studied English.\nWe celebrated at home.\nShe tidied the desk.",
          explain:
            "У work окончание целиком.\n\nУ like и celebrate — одна буква: конечное e " +
            "уже есть.\n\nУ study и tidy вместо y стоит i.\n\nСмысл у всех пяти один: " +
            "дело было и закончилось.",
        },
        {
          id: "slovar-napisaniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "like", translation: "нравиться", example: "I liked the film.", hint: "/laɪk/" },
            { term: "study", translation: "учить, заниматься", example: "She studied English.", hint: "/ˈstʌdi/" },
            { term: "live", translation: "жить", example: "We lived in Almaty.", hint: "/lɪv/" },
            { term: "dance", translation: "танцевать", example: "They danced at the party.", hint: "/dɑːns/" },
            { term: "carry", translation: "нести", example: "He carried the bag.", hint: "/ˈkæri/" },
            { term: "homework", translation: "домашняя работа", example: "I finished my homework.", hint: "/ˈhəʊmwɜːk/" },
            { term: "celebrate", translation: "праздновать", example: "We celebrated at home.", hint: "/ˈseləbreɪt/" },
            { term: "save", translation: "копить", example: "He saved money.", hint: "/seɪv/" },
            { term: "worry", translation: "тревожиться", example: "I worried about my brother.", hint: "/ˈwʌri/" },
            { term: "tidy", translation: "наводить порядок", example: "She tidied the desk.", hint: "/ˈtaɪdi/" },
            { term: "desk", translation: "письменный стол", example: "She tidied the desk.", hint: "/desk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-liked",
          kind: "gap",
          prompt: "Фильм тебе понравился. Допиши глагол like в нужной форме.",
          before: "I ",
          after: " the film.",
          answer: "liked",
          hint: "Глагол кончается на e — окончание короче обычного.",
          why: "I liked the film. После e ставят только -d, второе e не пишут.",
        },
        {
          id: "z2-vybrat-napisanie",
          kind: "choice",
          prompt: "Она вчера занималась английским. Где написано верно?",
          options: [
            { text: "She studyed English." },
            { text: "She studied English.", correct: true },
            { text: "She studies English yesterday." },
          ],
          hint: "Перед y стоит согласная.",
          why:
            "She studied English. Перед y согласная d, поэтому y меняется на i. Третья " +
            "строка стоит в настоящем времени.",
        },
        {
          id: "z3-sopostavit-napisanie",
          kind: "match",
          prompt: "Сопоставь глагол и его прошедшую форму.",
          left: ["work", "like", "study", "play"],
          right: ["played", "worked", "studied", "liked"],
          answer: [1, 3, 2, 0],
          hint: "Смотри на последнюю букву глагола.",
          why:
            "work — worked, like — liked (только -d), study — studied (y стало i), " +
            "play — played (перед y гласная, y остаётся).",
        },
        {
          id: "z4-otmetit-oshibki-napisaniya",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой в написании.",
          parts: [
            { text: "cleaned", selectable: true },
            { text: " · " },
            { text: "likeed", selectable: true, correct: true },
            { text: " · " },
            { text: "carryed", selectable: true, correct: true },
            { text: " · " },
            { text: "danced", selectable: true },
          ],
          hint: "Проверь глаголы на e и на y.",
          why:
            "Неверны likeed (после e только -d: liked) и carryed (перед y согласная, " +
            "значит carried).",
        },
        {
          id: "z5-napisat-napisanie",
          kind: "short",
          prompt: "Напиши: они танцевали на празднике. Танцевать — dance, праздник — the party.",
          answer: "They danced at the party.",
          accept: ["They danced at the party"],
          hint: "Глагол кончается на e.",
          why: "They danced at the party. После e ставят только -d.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-chitaetsya-ed",
      title: "Как читается -ed",
      estimatedMinutes: 15,
      outcome: "различать три чтения окончания -ed по последнему звуку глагола",

      blocks: [
        {
          id: "zachem-chitat-ed",
          kind: "explain",
          text: [
            "Пишется окончание одинаково, а звучит по-разному — тремя способами.",
            "Это слышно сразу: worked кончается глухим звуком, played — звонким, " +
              "а wanted получает целый лишний слог.",
            "Знать это нужно не для красоты: на слух прошедшее время узнают именно по " +
              "окончанию.",
          ],
        },
        {
          id: "tri-chteniya",
          kind: "table",
          caption: "Три чтения окончания",
          zvuchat: ["worked, watched, cooked, asked", "played, cleaned, opened, called", "wanted, needed, started, invited"],
          head: ["Звучит", "Когда", "Примеры"],
          rows: [
            ["«т» /t/", "после глухого звука", "worked, watched, cooked, asked"],
            ["«д» /d/", "после звонкого звука и после гласного", "played, cleaned, opened, called"],
            ["«ид» /ɪd/", "после звука t и после звука d", "wanted, needed, started, invited"],
          ],
        },
        {
          id: "pro-lishniy-slog",
          kind: "explain",
          text: [
            "Глухой звук произносят без голоса, звонкий — с голосом. Приложи пальцы к " +
              "горлу и скажи «ссс», потом «ззз»: на «ззз» горло дрожит — это и есть " +
              "звонкий звук.",
            "Окончание подстраивается под последний звук глагола: после глухого оно и " +
              "само глухое, «т», после звонкого — «д». Выбирать не приходится, само так " +
              "выходит.",
            "Считать надо звук, а не букву: invite кончается буквой e, а звуком t — и " +
              "получается invited, /ɪnˈvaɪtɪd/.",
            "Третий случай слышно лучше всех: слово становится длиннее на слог.",
            "want — один слог, wanted — уже два: wan-ted, /ˈwɒntɪd/.",
            "Так выходит потому, что после t или d ещё один такой же звук просто не " +
              "выговорить подряд.",
          ],
        },
        {
          id: "ne-vsegda-ed",
          kind: "note",
          tone: "info",
          text:
            "На слух «т» и «д» в конце почти не отличить, и это нормально.\n\nИх узнают " +
            "по последнему звуку самого глагола.\n\nВажнее заметить сам факт окончания: " +
            "если в конце слышен лишний звук — речь о прошлом.",
        },
        {
          id: "zapis-treh-chteniy",
          kind: "audio",
          caption: "Три чтения подряд",
          pace: "slow",
          transcript: "I worked. I played. I wanted.",
        },
        {
          id: "slovar-chteniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "want", translation: "хотеть", example: "I wanted coffee.", hint: "/wɒnt/" },
            { term: "need", translation: "нуждаться", example: "We needed help.", hint: "/niːd/" },
            { term: "start", translation: "начинать", example: "The film started at seven.", hint: "/stɑːt/" },
            { term: "visit", translation: "навещать", example: "I visited my friend.", hint: "/ˈvɪzɪt/" },
            { term: "invite", translation: "приглашать", example: "She invited us to dinner.", hint: "/ɪnˈvaɪt/" },
            { term: "open", translation: "открывать", example: "She opened the letter.", hint: "/ˈəʊpən/" },
            { term: "letter", translation: "письмо", example: "She opened the letter.", hint: "/ˈletə/" },
            { term: "friend", translation: "друг", example: "I visited my friend.", hint: "/frend/" },
            { term: "push", translation: "толкать", example: "He pushed the door.", hint: "/pʊʃ/" },
            { term: "pass", translation: "проходить мимо", example: "We passed the museum.", hint: "/pɑːs/" },
            { term: "fix", translation: "чинить", example: "My father fixed the car.", hint: "/fɪks/" },
            { term: "suggest", translation: "предлагать (мысль, план)", example: "She suggested a picnic.", hint: "/səˈdʒest/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-chtenie",
          kind: "choice",
          // Без about: задание о правиле, а не о понимании записи. Запись рядом
          // показывает слова, и прятать её расшифровку незачем.
          prompt: "В каком слове окончание добавляет целый слог?",
          options: [
            { text: "worked" },
            { text: "wanted", correct: true },
            { text: "played" },
          ],
          hint: "Слог добавляется после t и после d.",
          why: "wanted — /ˈwɒntɪd/, два слога. Слово кончается на t, поэтому окончание звучит /ɪd/.",
        },
        {
          id: "z2-otmetit-lishniy-slog",
          kind: "hottext",
          prompt: "Отметь слова, где окончание звучит /ɪd/ и добавляет слог.",
          parts: [
            { text: "visited", selectable: true, correct: true },
            { text: " · " },
            { text: "cooked", selectable: true },
            { text: " · " },
            { text: "needed", selectable: true, correct: true },
            { text: " · " },
            { text: "cleaned", selectable: true },
          ],
          hint: "Посмотри, на какой звук кончается сам глагол.",
          why:
            "visited и needed: visit кончается на t, need — на d. У cook и clean на конце " +
            "другие звуки, и слог не прибавляется.",
        },
        {
          id: "z3-sopostavit-chtenie",
          kind: "match",
          prompt: "Сопоставь слово и то, как звучит его окончание.",
          left: ["watched", "called", "started"],
          right: ["/ɪd/", "/t/", "/d/"],
          answer: [1, 2, 0],
          hint: "Смотри на последний звук глагола.",
          why: "watched — /t/, called — /d/, started — /ɪd/, потому что start кончается на t.",
        },
        {
          id: "z4-dopisat-chtenie",
          kind: "gap",
          prompt: "Фильм начался в семь. Допиши глагол start в прошедшей форме.",
          before: "The film ",
          after: " at seven.",
          answer: "started",
          hint: "Глагол кончается на t, и окончание добавит слог.",
          why: "The film started at seven. Окончание звучит /ɪd/: /ˈstɑːtɪd/.",
        },
        {
          id: "z5-napisat-o-pisme",
          kind: "short",
          prompt: "Напиши: она открыла письмо. Открывать — open, письмо — the letter.",
          answer: "She opened the letter.",
          accept: ["She opened the letter"],
          hint: "Глагол кончается на звонкий звук.",
          why: "She opened the letter. Окончание звучит /d/: /ˈəʊpənd/.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "moy-vcherashniy-den",
      title: "Мой вчерашний день",
      estimatedMinutes: 15,
      outcome: "рассказывать о дне несколькими делами подряд",

      blocks: [
        {
          id: "zachem-neskolko-del",
          kind: "explain",
          text: [
            "Одно дело — ещё не рассказ. Рассказ выходит, когда дел несколько и они идут по порядку.",
            "Для порядка есть три слова: first — сначала, then — потом, after that — после этого.",
          ],
        },
        {
          id: "slova-poryadka",
          kind: "table",
          caption: "Слова порядка",
          zvuchat: ["First I worked.", "Then I cooked dinner.", "After that we watched a film."],
          head: ["Английский", "Перевод"],
          rows: [
            ["First I worked.", "Сначала я работал."],
            ["Then I cooked dinner.", "Потом я приготовил ужин."],
            ["After that we watched a film.", "После этого мы посмотрели фильм."],
          ],
        },
        {
          id: "gde-stoyat-slova-poryadka",
          kind: "explain",
          text: [
            "Эти слова встают в начало предложения, перед тем, о ком речь.",
            "Дальше всё как обычно: кто, глагол с окончанием, остальное.",
            "Два дела можно соединить в одно предложение через запятую — тогда then " +
              "встаёт после неё: First I worked, then I cooked dinner.",
          ],
        },
        {
          id: "primer-rasskaza-o-dne",
          kind: "example",
          caption: "День Айгуль",
          zvuchat: ["First I boiled water.", "Then I cleaned the room.", "After that I helped my mother.", "Then I listened to music.", "After that I packed my bag."],
          text: "First I boiled water.\nThen I cleaned the room.\nAfter that I helped my mother.\nThen I listened to music.\nAfter that I packed my bag.",
          explain:
            "Пять дел в том порядке, в каком они были. У каждого глагола окончание -ed, " +
            "а слово порядка стоит первым.",
        },
        {
          id: "slovar-rasskaza",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "help", translation: "помогать", example: "I helped my mother.", hint: "/help/" },
            { term: "listen", translation: "слушать", example: "I listened to music.", hint: "/ˈlɪsn/" },
            { term: "music", translation: "музыка", example: "I listened to music.", hint: "/ˈmjuːzɪk/" },
            { term: "walk", translation: "гулять, идти пешком", example: "We walked in the garden.", hint: "/wɔːk/" },
            { term: "garden", translation: "сад", example: "We walked in the garden.", hint: "/ˈgɑːdn/" },
            { term: "finish", translation: "заканчивать", example: "I finished my homework.", hint: "/ˈfɪnɪʃ/" },
            { term: "snack", translation: "лёгкая еда", example: "I wanted a snack.", hint: "/snæk/" },
            { term: "boil", translation: "кипятить", example: "I boiled water in the morning.", hint: "/bɔɪl/" },
            { term: "pack", translation: "собирать вещи", example: "I packed my bag.", hint: "/pæk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-poryadok",
          kind: "gap",
          prompt: "Сначала была уборка, потом — ужин. Допиши слово порядка перед вторым делом.",
          before: "First I cleaned the room. ",
          after: " I cooked dinner.",
          answer: "Then",
          accept: ["then"],
          hint: "Слово значит «потом».",
          why: "Then I cooked dinner. Слово порядка стоит в начале предложения.",
        },
        {
          id: "z2-sobrat-den",
          kind: "order",
          prompt: "Собери рассказ о дне так, чтобы дела шли по порядку.",
          items: [
            "After that we watched a film.",
            "First I worked in the morning.",
            "Then I cooked dinner.",
          ],
          answer: [1, 2, 0],
          hint: "Смотри на слова порядка: сначала, потом, после этого.",
          why:
            "First I worked in the morning. Then I cooked dinner. After that we watched " +
            "a film. Порядок задают слова, а не сами дела.",
        },
        {
          id: "z3-nayti-lishnee-delo",
          kind: "choice",
          prompt: "Три слова называют дело, а одно — нет. Какое лишнее?",
          options: [
            { text: "cleaned" },
            { text: "garden", correct: true },
            { text: "helped" },
            { text: "walked" },
          ],
          hint: "Три слова отвечают на вопрос «что делал», а одно называет место.",
          why: "Лишнее — garden: это место. Остальные три — глаголы в прошедшем времени.",
        },
        {
          id: "z4-otmetit-poryadok",
          kind: "hottext",
          prompt: "Отметь слова порядка в этом рассказе.",
          parts: [
            { text: "First", selectable: true, correct: true },
            { text: " I walked in the garden. " },
            { text: "Then", selectable: true, correct: true },
            { text: " I finished my homework and " },
            { text: "listened", selectable: true },
            { text: " to music." },
          ],
          hint: "Слова порядка стоят в начале предложений.",
          why: "Слова порядка — First и Then. Слово listened называет дело, а не порядок.",
        },
        {
          id: "z5-napisat-den",
          kind: "short",
          prompt:
            "Напиши о себе двумя делами: сначала работа, потом ужин. Работать — work, " +
            "готовить ужин — cook dinner.",
          answer: "First I worked. Then I cooked dinner.",
          accept: [
            "First I worked. Then I cooked dinner",
            "First I worked, then I cooked dinner.",
            "First I worked, then I cooked dinner",
          ],
          hint: "Два предложения, в начале каждого — слово порядка.",
          why:
            "First I worked. Then I cooked dinner. Слова порядка показывают, что было " +
            "раньше, а что позже.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dela-i-vremya",
      title: "Дело и время вместе",
      estimatedMinutes: 15,
      outcome: "ставить дело и время вместе: I worked yesterday, I cooked last night",

      blocks: [
        {
          id: "zachem-vmeste",
          kind: "explain",
          text: [
            "Дело названо, а когда оно было — нет. Собеседник спросит об этом первым.",
            "Обороты времени те же, что в прошлом модуле: yesterday, last night, two days ago.",
            "Новое здесь одно: теперь они стоят не при was, а при глаголе с окончанием -ed.",
          ],
        },
        {
          id: "delo-i-vremya",
          kind: "table",
          caption: "Дело и время в одном предложении",
          zvuchat: ["I worked yesterday.", "She cooked last night.", "They visited us two days ago."],
          head: ["Английский", "Перевод"],
          rows: [
            ["I worked yesterday.", "Я работал вчера."],
            ["She cooked last night.", "Она готовила прошлой ночью."],
            ["We cleaned the room last week.", "Мы убирали комнату на прошлой неделе."],
            ["They visited us two days ago.", "Они навещали нас два дня назад."],
          ],
        },
        {
          id: "gde-stoit-vremya",
          kind: "explain",
          text: [
            "Оборот времени встаёт в конец предложения, после глагола.",
            "Если дела идут по порядку, оборот выносят и в самое начало: Yesterday I worked.",
            "Между делом и временем ничего не вставляют: I worked yesterday, а не I " +
              "yesterday worked.",
          ],
        },
        {
          id: "ne-i-yesterday-worked",
          kind: "note",
          tone: "mistake",
          text:
            "«I yesterday worked» — так не говорят.\n\nМесто оборота времени — конец " +
            "предложения или самое его начало, но не середина.",
        },
        {
          id: "primer-nedeli",
          kind: "example",
          caption: "Дела Данияра",
          zvuchat: ["I worked yesterday.", "I visited my friend two days ago.", "We danced at a party last week.", "We cycled last night.", "We camped a month ago."],
          text: "I worked yesterday.\nI visited my friend two days ago.\nWe danced at a party last week.\nWe cycled last night.\nWe camped a month ago.",
          explain:
            "Пять дел, и у каждого свой оборот времени. Каждый стоит в конце своего " +
            "предложения.",
        },
        {
          id: "slovar-vmeste",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "call", translation: "звонить", example: "I called my friend yesterday.", hint: "/kɔːl/" },
            { term: "wait", translation: "ждать", example: "We waited ten minutes.", hint: "/weɪt/" },
            { term: "ask", translation: "спрашивать", example: "She asked about the film.", hint: "/ɑːsk/" },
            { term: "answer", translation: "отвечать", example: "He answered the letter.", hint: "/ˈɑːnsə/" },
            { term: "stay", translation: "оставаться", example: "We stayed at home last night.", hint: "/steɪ/" },
            { term: "evening", translation: "вечер", example: "I called her in the evening.", hint: "/ˈiːvnɪŋ/" },
            { term: "cycle", translation: "ездить на велосипеде", example: "We cycled two days ago.", hint: "/ˈsaɪkl/" },
            { term: "sail", translation: "плавать под парусом", example: "We sailed last week.", hint: "/seɪl/" },
            { term: "camp", translation: "ночевать в палатке", example: "We camped last week.", hint: "/kæmp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-vremya",
          kind: "gap",
          prompt: "Уборка была на прошлой неделе. Допиши пропущенное слово.",
          before: "We cleaned the room ",
          after: " week.",
          answer: "last",
          hint: "Слово значит «прошлый»: last week — прошлая неделя.",
          why: "We cleaned the room last week. Оборот стоит в конце предложения.",
        },
        {
          id: "z2-vybrat-mesto-vremeni",
          kind: "choice",
          prompt: "Мысль одна: «Я работал вчера». Где нет ошибки?",
          options: [
            { text: "I yesterday worked." },
            { text: "I worked yesterday.", correct: true },
            { text: "I worked yesterday ago." },
          ],
          hint: "Оборот времени не встаёт между тем, о ком речь, и делом.",
          why:
            "I worked yesterday. В записи I yesterday worked оборот попал в середину, а в " +
            "I worked yesterday ago к нему приделано лишнее ago.",
        },
        {
          id: "z3-sobrat-delo-i-vremya",
          kind: "order",
          prompt: "Собери предложение: «Они навещали нас два дня назад.»",
          items: ["two days ago", "visited", "They", "us"],
          answer: [2, 1, 3, 0],
          hint: "Сначала кто, потом дело, потом кого, и только потом время.",
          why: "They visited us two days ago. Оборот времени стоит последним.",
        },
        {
          id: "z4-napisat-vecher",
          kind: "short",
          prompt: "Напиши о вчерашнем звонке другу. Звонить — call, друг — my friend.",
          answer: "I called my friend yesterday.",
          accept: [
            "I called my friend yesterday",
            "Yesterday I called my friend.",
            "I called my friend in the evening.",
          ],
          hint: "Оборот времени поставь в конец.",
          why: "I called my friend yesterday. Или в начало: Yesterday I called my friend.",
        },
      ],

      // Возвращение: обороты времени и формы was/were из модуля 1. Тема та же —
      // когда это было, — а форма другая, и это перемешивание тем.
      vozvrat: [
        { iz: "eto-bylo", zadanie: "z1-dopisat-ago" },
        { iz: "eto-bylo", zadanie: "z4-sobrat-gde-byl" },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-dne",
      title: "Читаем письмо о дне",
      estimatedMinutes: 13,
      outcome: "понимать письмо о том, как прошёл день",

      blocks: [
        {
          id: "zachem-chitat-o-dne",
          kind: "explain",
          text: [
            "До сих пор предложения шли по одному. В письме они идут подряд, и понимать надо " +
              "всё сразу.",
            "Ниже письмо о вчерашнем дне: в нём встречаются только глаголы с окончанием -ed " +
              "и форма was.",
            "Читай целиком, потом отвечай на вопросы: они о том, что произошло.",
          ],
        },
        {
          id: "pismo-o-dne",
          kind: "text",
          title: "Письмо от Алима",
          genre: "email",
          body: [
            "Hi Dana!",
            "Yesterday was a long day. First I worked in the morning, then I cooked " +
              "dinner for my family.",
            "After that my brother and I cleaned the garden. We finished at seven and " +
              "listened to music.",
            "In the evening I called my friend and we talked about the new film. It " +
              "started at nine, but I was very tired and stayed at home.",
            "How was your day?",
            "Alim",
          ],
          glossary: [
            { term: "long", translation: "долгий, длинный" },
            { term: "family", translation: "семья" },
            { term: "about", translation: "о, про" },
            { term: "but", translation: "но" },
          ],
        },
        {
          id: "kak-chitat-o-dne",
          kind: "note",
          tone: "info",
          text:
            "Порядок дел в письме задают три слова: First, then, After that.\n\nЕсли " +
            "потерять их, рассказ рассыпается на отдельные предложения.",
        },

        // ---- задания ----
        {
          id: "z1-chto-utrom",
          kind: "choice",
          about: "pismo-o-dne",
          prompt: "Что Алим делал утром?",
          options: [
            { text: "Готовил ужин" },
            { text: "Работал", correct: true },
            { text: "Убирал сад" },
          ],
          hint: "Утро названо в письме прямо.",
          why: "First I worked in the morning. Ужин был потом, а сад — после этого.",
        },
        {
          id: "z2-s-kem-ubiral",
          kind: "short",
          about: "pismo-o-dne",
          prompt: "С кем он убирал сад? Ответь по-английски.",
          answer: "brother",
          accept: ["my brother", "his brother", "My brother"],
          hint: "Слово стоит перед словами and I.",
          why: "After that my brother and I cleaned the garden.",
        },
        {
          id: "z3-vo-skolko-zakonchili",
          kind: "short",
          about: "pismo-o-dne",
          prompt: "Во сколько они закончили? Ответь английским словом.",
          answer: "seven",
          accept: ["at seven", "At seven", "7", "at 7"],
          hint: "Время стоит сразу после слова finished.",
          why: "We finished at seven and listened to music.",
        },
        {
          id: "z4-pochemu-ne-poshyol",
          kind: "choice",
          about: "pismo-o-dne",
          prompt: "Почему Алим остался дома вечером?",
          options: [
            { text: "Фильм начался слишком поздно" },
            { text: "Он очень устал", correct: true },
            { text: "Друг не позвонил" },
          ],
          hint: "Причина стоит после слова but.",
          why: "It started at nine, but I was very tired and stayed at home.",
        },
        {
          id: "z5-otmetit-dela",
          kind: "hottext",
          about: "pismo-o-dne",
          prompt: "Отметь дела, которые есть в письме.",
          parts: [
            { text: "cooked", selectable: true, correct: true },
            { text: " · " },
            { text: "danced", selectable: true },
            { text: " · " },
            { text: "cleaned", selectable: true, correct: true },
            { text: " · " },
            { text: "visited", selectable: true },
          ],
          hint: "Проверь каждое дело по письму.",
          why: "В письме есть cooked и cleaned. Слов danced и visited в нём нет.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-dne-vtoroy",
      title: "Слушаем рассказ о делах",
      estimatedMinutes: 13,
      outcome: "слышать в записи, что человек делал",

      blocks: [
        {
          id: "zachem-slushat-dela",
          kind: "explain",
          text: [
            "Прочитать worked и услышать worked — разные умения: окончание в речи короткое.",
            "Ниже запись: человек рассказывает, что делал вчера.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
            "Открой её после ответов: иначе выйдет чтение, а не слушание.",
          ],
        },
        {
          id: "zapis-o-delah",
          kind: "audio",
          caption: "Что было вчера",
          pace: "slow",
          skryt: true,
          transcript:
            "Yesterday I worked at home. In the morning I cleaned the room and cooked " +
            "dinner. Then I called my sister and we talked about her new work. In the " +
            "evening I watched a film. It started at eight and finished at ten.",
        },
        {
          id: "chto-slushat-v-delah",
          kind: "note",
          tone: "info",
          text:
            "В записи дел много — worked, cleaned, cooked, called, watched и ещё " +
            "несколько.\n\nСлушая, держи в уме два вопроса: что человек делал и когда.",
        },

        // ---- задания ----
        {
          id: "z1-gde-rabotal",
          kind: "choice",
          about: "zapis-o-delah",
          prompt: "Послушай запись. Где человек работал вчера?",
          options: [
            { text: "Дома", correct: true },
            { text: "В школе" },
            { text: "В саду" },
          ],
          hint: "Место названо в первой строке.",
          why: "Yesterday I worked at home.",
        },
        {
          id: "z2-chto-utrom-na-sluh",
          kind: "short",
          about: "zapis-o-delah",
          prompt: "Что человек готовил утром? Ответь одним английским словом.",
          answer: "dinner",
          accept: ["Dinner"],
          hint: "Слово стоит после cooked.",
          why: "In the morning I cleaned the room and cooked dinner.",
        },
        {
          id: "z3-o-chyom-govorili",
          kind: "choice",
          about: "zapis-o-delah",
          prompt: "О чём человек говорил с сестрой?",
          options: [
            { text: "О новом фильме" },
            { text: "О её новой работе", correct: true },
            { text: "О вчерашнем ужине" },
          ],
          hint: "Тема разговора названа сразу после слова about.",
          why: "Then I called my sister and we talked about her new work.",
        },
        {
          id: "z4-vo-skolko-film",
          kind: "short",
          about: "zapis-o-delah",
          prompt: "Во сколько начался фильм? Ответь английским словом.",
          answer: "eight",
          accept: ["at eight", "At eight", "8", "at 8"],
          hint: "Время стоит после слова started.",
          why: "It started at eight and finished at ten.",
        },
        {
          id: "z5-vosstanovit-uslyshannoe",
          kind: "order",
          zvuk: "In the evening I watched a film.",
          prompt: "Послушай запись и собери из карточек то, что в ней сказано.",
          items: ["a film", "In the evening", "watched", "I"],
          answer: [1, 3, 2, 0],
          hint: "Оборот времени стоит первым, потом кто, потом дело.",
          why:
            "In the evening I watched a film. Оборот времени вынесен в начало, дальше " +
            "обычный порядок: кто, дело, что.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-svoyom-dne",
      title: "Пишем о своём дне",
      estimatedMinutes: 13,
      outcome: "проверять рассказ о дне: окончание -ed, слова порядка, was в строке о самом дне",

      blocks: [
        {
          id: "zachem-pisat-o-dne",
          kind: "explain",
          text: [
            "Прочитать чужой рассказ легче, чем написать свой: при письме форму глагола " +
              "не подскажет никто, выбирать её тебе.",
            "Ниже образец на четыре строки. По нему и напишешь о своём вчерашнем дне.",
          ],
        },
        {
          id: "obrazec-pisma",
          kind: "example",
          caption: "Образец: четыре строки о дне",
          zvuchat: ["First I studied English.", "Then I helped my sister.", "After that I walked in the park.", "It was a busy day."],
          text:
            "First I studied English.\nThen I helped my sister.\nAfter that I walked in the park.\nIt was a busy day.",
          explain:
            "Три дела по порядку и одна строка о том, каким день вышел. Последняя строка " +
            "берёт was — это форма из прошлого модуля, глагола с окончанием в ней нет.",
        },
        {
          id: "chto-proverit-v-pisme",
          kind: "note",
          tone: "info",
          text:
            "Перед тем как сравнить с образцом, проверь себя.\n\nУ каждого глагола есть " +
            "окончание -ed.\n\nСлова порядка стоят в начале предложений.\n\nВ строке о " +
            "самом дне стоит was, а не глагол с окончанием -ed.",
        },

        // ---- задания ----
        {
          id: "z1-ispravit-okonchanie",
          kind: "short",
          prompt: "Исправь ошибку и запиши целиком: «After that I clean the garden.»",
          answer: "After that I cleaned the garden.",
          accept: ["After that I cleaned the garden"],
          hint: "Речь о вчерашнем дне.",
          why: "After that I cleaned the garden. Без окончания предложение говорит о том, что бывает всегда.",
        },
        {
          id: "z2-vybrat-poslednyuyu-stroku",
          kind: "choice",
          prompt: "Какой строкой закончить рассказ о дне?",
          options: [
            { text: "It long day." },
            { text: "It was a long day.", correct: true },
            { text: "It was a long day yesterday ago." },
          ],
          hint: "В строке о самом дне нужна форма глагола.",
          why:
            "It was a long day. В записи It long day нет формы глагола вовсе, а в It was a " +
            "long day yesterday ago приделано лишнее ago.",
        },
        {
          id: "z3-napisat-o-dne",
          kind: "essay",
          prompt:
            "Напиши о своём вчерашнем дне: три дела по порядку и одна строка о том, " +
            "каким вышел день. Слова порядка — First, Then, After that.",
          minWords: 12,
          sample:
            "First I worked in the morning.\nThen I cleaned the room.\nAfter that I " +
            "listened to music.\nIt was a quiet day.",
          checklist: [
            "у каждого дела есть окончание -ed",
            "слова порядка стоят в начале предложений: First, Then, After that",
            "в строке о самом дне стоит was, а не глагол с окончанием -ed",
            "все четыре строки — о вчерашнем дне, а не о том, что бывает всегда",
          ],
          why:
            "У каждого глагола здесь своё окончание -ed, а слова порядка стоят в " +
            "начале строк. Последняя строка говорит не о деле, а о самом дне. Твой " +
            "рассказ будет о других делах, а устроен так же.",
        },
      ],

      // Возвращение: форма was из первого модуля нужна последней строке
      // рассказа, и здесь она встречается впервые за два урока.
      vozvrat: [{ iz: "eto-bylo", zadanie: "z1-dopisat-o-pogode" }],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от уроков и другими углами: исправить чужую
      // запись, назвать причину ошибки, передать с русского, восстановить
      // порядок. Совпадений видов и устройства с заданиями уроков нет.

      // ---- итог 1 ----
      {
        id: "q-delo-ispravit",
        kind: "short",
        outcome: "рассказывать о законченном деле: I worked yesterday",
        prompt: "Исправь ошибку и запиши целиком: «My brother watchs a film yesterday.»",
        answer: "My brother watched a film yesterday.",
        accept: ["My brother watched a film yesterday"],
        why:
          "My brother watched a film yesterday. Слово yesterday говорит о прошлом, " +
          "значит и глагол нужен в прошедшей форме.",
      },
      {
        id: "q-delo-prichina",
        kind: "choice",
        outcome: "рассказывать о законченном деле: I worked yesterday",
        prompt: "Почему запись «He workeds yesterday» неверна?",
        options: [
          { text: "Потому что -s бывает только у he, she и it в настоящем времени", correct: true },
          { text: "Потому что после he глагол не меняется вовсе" },
          { text: "Потому что yesterday нельзя ставить в конец" },
        ],
        why:
          "He worked yesterday. В прошедшем времени форма одна на всех: ни -s, ни другого " +
          "окончания по лицам там нет.",
      },
      // ---- итог 2 ----
      {
        id: "q-napisanie-y",
        kind: "gap",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "Они несли коробки. Допиши глагол carry в прошедшей форме.",
        before: "They ",
        after: " the boxes.",
        answer: "carried",
        why: "They carried the boxes. Перед y стоит согласная r, поэтому y меняется на i.",
      },
      {
        id: "q-napisanie-vybor",
        kind: "choice",
        outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
        prompt: "В каком слове написание верное?",
        options: [
          { text: "playd" },
          { text: "played", correct: true },
          { text: "plaied" },
        ],
        why:
          "played. Перед y стоит гласная a, поэтому y остаётся на месте и приходит " +
          "целое окончание -ed.",
      },
      // ---- итог 3 ----
      {
        id: "q-chtenie-slog",
        kind: "short",
        outcome: "различать три чтения окончания -ed по последнему звуку глагола",
        zvuk: "I waited. I cooked. I called.",
        prompt: "Послушай запись. В каком слове окончание добавляет целый слог? Ответь одним словом.",
        answer: "waited",
        accept: ["Waited"],
        why: "waited — /ˈweɪtɪd/. Глагол wait кончается на t, поэтому окончание звучит /ɪd/.",
      },
      {
        id: "q-chtenie-prichina",
        kind: "choice",
        outcome: "различать три чтения окончания -ed по последнему звуку глагола",
        prompt: "Почему в слове needed окончание звучит /ɪd/?",
        options: [
          { text: "Потому что глагол короткий" },
          { text: "Потому что need кончается на d", correct: true },
          { text: "Потому что после n всегда идёт /ɪd/" },
        ],
        why:
          "Потому что need кончается на d: needed — /ˈniːdɪd/. После t и после d ещё " +
          "один такой же звук подряд не выговорить, поэтому появляется лишний слог.",
      },
      // ---- итог 4 ----
      {
        id: "q-poryadok-vpisat",
        kind: "gap",
        outcome: "рассказывать о дне несколькими делами подряд",
        prompt:
          "В рассказе пропало слово порядка: «First I finished my homework. ___ I " +
          "visited my friend.» Впиши пропущенное.",
        before: "",
        after: " I visited my friend.",
        answer: "Then",
        accept: ["then", "After that", "after that"],
        why:
          "Then I visited my friend. Первое дело названо словом First, значит второе " +
          "берёт Then или After that.",
      },
      // ---- итог 5 ----
      {
        id: "q-vremya-mesto",
        kind: "short",
        outcome: "ставить дело и время вместе: I worked yesterday, I cooked last night",
        prompt: "Исправь порядок и запиши целиком: «She last night cooked dinner.»",
        answer: "She cooked dinner last night.",
        accept: ["She cooked dinner last night", "Last night she cooked dinner."],
        why:
          "She cooked dinner last night. Оборот времени встаёт в конец или в самое " +
          "начало, но не в середину.",
      },
      {
        id: "q-vremya-perevod",
        kind: "short",
        outcome: "ставить дело и время вместе: I worked yesterday, I cooked last night",
        prompt: "Напиши по-английски: «Мы ждали два часа.» Ждать — wait, час — hour.",
        answer: "We waited two hours.",
        accept: ["We waited two hours", "We waited for two hours.", "We waited 2 hours."],
        why: "We waited two hours. Окончание -ed звучит здесь /ɪd/: wait кончается на t.",
      },
      // ---- итог 6 ----
      {
        id: "q-chtenie-pismo",
        kind: "choice",
        outcome: "понимать письмо о том, как прошёл день",
        prompt:
          "Записка: «Yesterday I cleaned the garden. Then I cooked dinner. In the " +
          "evening I called my sister.» Что человек делал последним?",
        options: [
          { text: "Убирал сад" },
          { text: "Звонил сестре", correct: true },
          { text: "Готовил ужин" },
        ],
        why:
          "In the evening I called my sister. Порядок задают слова: Yesterday, Then, In " +
          "the evening.",
      },
      {
        id: "q-chtenie-slovo",
        kind: "short",
        outcome: "понимать письмо о том, как прошёл день",
        prompt:
          "Та же записка: «Yesterday I cleaned the garden. Then I cooked dinner. In the " +
          "evening I called my sister.» Что человек готовил? Ответь английским словом.",
        answer: "dinner",
        accept: ["Dinner"],
        why: "Then I cooked dinner.",
      },
      // ---- итог 7 ----
      {
        id: "q-sluh-chto-delal",
        kind: "choice",
        outcome: "слышать в записи, что человек делал",
        zvuk: "Yesterday I visited my friend. We listened to music and talked about the new film.",
        prompt: "Послушай запись. Что человек делал вчера?",
        options: [
          { text: "Навещал друга", correct: true },
          { text: "Убирал комнату" },
          { text: "Работал в саду" },
        ],
        why: "Yesterday I visited my friend.",
      },
      {
        id: "q-sluh-slovo",
        kind: "short",
        outcome: "слышать в записи, что человек делал",
        zvuk: "In the morning I cleaned the room. Then I helped my mother in the garden.",
        prompt: "Послушай запись. Кому человек помогал? Ответь одним английским словом.",
        answer: "mother",
        accept: ["my mother", "My mother"],
        why: "Then I helped my mother in the garden.",
      },
      // ---- итог 8 ----
      {
        id: "q-pismo-proverka",
        kind: "choice",
        outcome: "проверять рассказ о дне: окончание -ed, слова порядка, was в строке о самом дне",
        prompt:
          "В рассказе о дне написано: «After that I listen to music.» Что здесь не так?",
        options: [
          { text: "У глагола нет окончания -ed", correct: true },
          { text: "After that нельзя ставить в начало" },
          { text: "Нужно убрать слово to" },
        ],
        why:
          "After that I listened to music. Рассказ о вчерашнем дне, значит у дела нужно " +
          "окончание прошедшего времени.",
      },
      {
        id: "q-pismo-napisat",
        kind: "short",
        outcome: "проверять рассказ о дне: окончание -ed, слова порядка, was в строке о самом дне",
        prompt:
          "Напиши последнюю строку рассказа о дне: «День был долгий.» День — the day, " +
          "долгий — long.",
        answer: "It was a long day.",
        accept: ["It was a long day", "The day was long."],
        why:
          "It was a long day. В строке о самом дне стоит форма was: дела в ней нет, есть " +
          "только то, каким день вышел.",
      },
    ],
  },
};

export default module;
