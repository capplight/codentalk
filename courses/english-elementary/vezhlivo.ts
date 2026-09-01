import type { Module } from "@/lib/content/types";

/**
 * Модуль 28 курса «Английский · Elementary»: вежливо.
 *
 * Программа: docs/programma-english-elementary.md, модуль 28 — «вежливо
 * просить, соглашаться, отказываться и выбирать»; грамматика: `Could you…?`,
 * `I'd love to`, `No, thank you`, `I'd prefer`. Строка проверена 28 августа
 * 2026, до написания; разбор с цитатами — там же.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ МОДУЛЯ — «ВЕЖЛИВЫЙ ОБОРОТ». Этим именем она зовётся во всех
 * уроках, в подписях таблиц и в разборах.
 *
 * ОТ СТРОКИ ПРОГРАММЫ ОСТАЛАСЬ ТРЕТЬ, И ПРИЧИНА НЕ В УРОВНЕ.
 *
 * Строка обещала `would like`, `would you`, `could you` и краткое `I'd`.
 * Проверка по источнику И ПО КУРСУ — оба вопроса сразу, по правилу,
 * приписанному после модуля 26, — сняла две трети:
 *
 * 1. **`would like` — это A1**, все три графы English Grammar Profile («FORM:
 *    AFFIRMATIVE WITH 'LIKE'», «USE: WISHES AND PREFERENCES WITH 'LIKE'», «USE:
 *    INVITATIONS WITH 'LIKE'»). И ступень Beginner учит его ТРЕМЯ уроками:
 *    «Хочу сейчас: I'd like a coffee», «Хочется сделать: I'd like to go home»,
 *    «Приглашение: Would you like to come?». Повторить это Elementary вправе —
 *    между ступенями нет ссылок на память, — но потратить на повтор целый
 *    модуль значит не дать ученику ничего нового.
 * 2. **`would you` как вежливая просьба — B1** («USE: POLITE REQUESTS»).
 *    Руководство A2 Key в перечне Modals его даёт, то есть источники
 *    расходятся, как и с `could` в модуле 27. Но решает третий довод: просьбу
 *    курс уже умеет говорить двумя способами — `Can you help?` из Beginner и
 *    `Could you…?` отсюда. Третий множит выбор, ничего не прибавляя.
 *
 * ЧТО ВСТАЛО НА ОСВОБОДИВШЕЕСЯ МЕСТО — ЧЕТЫРЕ ГРАФЫ A2, КОТОРЫХ СТРОКА НЕ
 * НАЗЫВАЛА ВОВСЕ. У `would` на этой ступени есть своё, и оно не про `like`:
 * «FORM: AFFIRMATIVE» (примеры «I'd **love** to have a pen-friend in Japan», «I
 * would **prefer** Sunday afternoon») и «USE: WISHES AND PREFERENCES» — «Can
 * use 'would' with **a wide range of verbs**».
 *
 * То есть Beginner дал один глагол — `like`, — а A2 добавляет остальные. Это и
 * есть прибавка модуля.
 *
 * ПРИГЛАШЕНИЕ `Would you like…?` В МОДУЛЕ ЗВУЧИТ, НО УРОКОМ НЕ РАЗБИРАЕТСЯ:
 * иначе отвечать не на что. Оно вводится строкой с примером, как знакомая вещь,
 * — по тому же правилу, по которому вводится любое чужое знание.
 *
 * ОТКАЗ ПОДПЁРТ ВЫПИСКОЙ, А НЕ СООБРАЖЕНИЕМ. `docs/istochniki-vezhlivost.md`,
 * пункт 3: Longman, статья «no, thank you». Утверждать, будто голое `No` звучит
 * резко, нельзя — словарь про это молчит, и в выписке это оговорено.
 *
 * СЛОВАРЬ МОДУЛЯ — ЧЕТЫРНАДЦАТЬ КАРТОЧЕК, ИЗ НИХ НОВЫХ ДЛЯ СТУПЕНИ
 * ТРИНАДЦАТЬ, И ВПЕРВЫЕ ЗА ПЯТЬ МОДУЛЕЙ ИХ БЫЛО ИЗ ЧЕГО ВЫБИРАТЬ.
 *
 * 28 августа нашлось, что `npm run slovo -- --zapas` считал запас ступени вдвое
 * меньше настоящего: разбор словника не знал помет `(mv)` и `(phr v)`, а отбор
 * выбрасывал всё, где есть пробел. Терялись все модальные глаголы и все 25
 * глаголов с послелогом. После починки запас — 199 слов вместо 92.
 *
 * Модуль первым берёт из найденного: `pick up`, `look after`, `fill in`,
 * `come back` — глаголы с послелогом, которых курс не давал вовсе, хотя экзамен
 * требует их наравне с прочими.
 *
 * ТРАНСКРИПЦИЯ ГЛАГОЛОВ С ПОСЛЕЛОГОМ ВЗЯТА ПО СЛОВАРНОЙ НОРМЕ: `ipa-en-uk`
 * многословных записей не знает вовсе. Ударение ставится на послелог — `/pɪk
 * ˈʌp/`, `/fɪl ˈɪn/`, — а у `look after` на первый слог послелога: `/lʊk
 * ˈɑːftə/`. Тот же ряд, что `record` и `upset` в модуле 27; владельцу стоит на
 * него взглянуть.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ВСЁ ЭТО ВЫШЕ СТУПЕНИ: `would you mind` (B1, «USE:
 * POLITE REQUESTS»); `would` после `if` (B1); `I'd rather` — в English Grammar
 * Profile отдельной графой не нашёл, в словнике A2 Key записи `rather` тоже
 * нет, искал по обоим.
 */
const module: Module = {
  slug: "vezhlivo",
  title: "Вежливо",

  outcomes: [
    "вежливо просить: Could you help me?",
    "отвечать на приглашение с радостью и с благодарностью: I'd love to. — No, thank you.",
    "называть, что лучше: I'd prefer Sunday",
    "находить в письме, о чём просят и что предлагают на выбор",
    "слышать в разговоре, согласился человек или отказался",
    "проверять ответ на приглашение: сказано спасибо, дан ответ и назван день",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОК 1. MODALITY, could, A2, «USE: REQUESTS» — «Can use 'could' to " +
        "make requests», примеры «Could you help me to paint my bedroom?», «I " +
        "left my umbrella in your house yesterday. … Could you bring it to " +
        "school tomorrow, please?». И A2, «FORM: QUESTIONS» — «Can use the " +
        "question form», примеры «Could you help me?», «Could we meet on " +
        "Friday afternoon?». " +
        "УРОКИ 2–3. MODALITY, would, A2, «FORM: AFFIRMATIVE» — «Can use the " +
        "affirmative form», примеры «I'd love to have a pen-friend in Japan», " +
        "«I would prefer Sunday afternoon». И A2, «USE: WISHES AND " +
        "PREFERENCES» — «Can use 'would' with a wide range of verbs to talk " +
        "about wishes and preferences», примеры «I would prefer to go on " +
        "Sunday because on Sunday I have no school», «I'd prefer to see it " +
        "tomorrow», «Bring your new CD! I'd love to hear it». " +
        "ИМЕННО «A WIDE RANGE OF VERBS» И ЕСТЬ ПРИБАВКА СТУПЕНИ: графы с " +
        "`like` — «FORM: AFFIRMATIVE WITH 'LIKE'», «USE: WISHES AND " +
        "PREFERENCES WITH 'LIKE'», «USE: INVITATIONS WITH 'LIKE'» — все A1, и " +
        "первая ступень их уже дала. " +
        "ПРИГЛАШЕНИЕ, НА КОТОРОЕ ОТВЕЧАЮТ: A2, «FORM: QUESTIONS WITH 'LIKE'» — " +
        "«Can use the question form 'would you like'», примеры «Sarah, would " +
        "you like to play tennis this evening?», «I'm going to a concert on " +
        "Saturday. Would you like to go with me?». Уроком оно не разбирается: " +
        "первая ступень дала его целиком, здесь оно вводится строкой с " +
        "примером. " +
        "ЧЕГО НЕТ, И ВСЁ ЭТО B1: `would` вежливой просьбой («USE: POLITE " +
        "REQUESTS» — «often in the fixed expression 'would you mind'»); общая " +
        "вопросительная форма `would` («FORM: QUESTIONS»); `would` после `if`; " +
        "`would` о прошлом. " +
        "ОБОРОТА `I'd rather` НЕ НАШЁЛ ВОВСЕ: искал по `MODALITY,would` (все " +
        "23 строки) и по слову `rather` во всём файле",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 51, Language specifications, перечень Modals: «can (ability; " +
        "requests; permission) could (ability; polite requests) would (polite " +
        "requests)» — вежливая просьба через `could` названа прямо. " +
        "ТАМ ЖЕ, В ПЕРЕЧНЕ «Inventory of functions, notions and communicative " +
        "tasks», три строки подряд про этот модуль: «making and " +
        "granting/refusing simple requests», «giving and responding to " +
        "invitations», «expressing preferences, likes and dislikes». " +
        "ОСТОРОЖНО: ТОТ ЖЕ ПЕРЕЧЕНЬ MODALS ДАЁТ И `would (polite requests)`, " +
        "то есть с English Grammar Profile, где это B1, источники расходятся — " +
        "как и с `could` в модуле 27. Здесь оборот всё же не взят, и причина " +
        "не в уровне: просьбу курс уже говорит через `can you` (первая " +
        "ступень) и через `could you` (этот модуль). " +
        "УРОК 5, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "docs/istochniki-vezhlivost.md",
      section:
        "УРОК 1, `PLEASE`. Пункт 1: Grammarly — «You can make imperative " +
        "sentences sound a little softer in tone by adding the word please». " +
        "Там же Википедия, статья «Imperative mood»: «In polite speech, orders " +
        "or requests are often phrased instead as questions or statements, " +
        "rather than imperatives: Could you come here for a moment? (more " +
        "polite than 'Come here!')» — это подпирает и сам оборот урока 1. " +
        "УРОК 2, ОТКАЗ. Пункт 3: Longman Dictionary of Contemporary English, " +
        "статья «no, thank you» — «used to say politely that you do not want " +
        "something», пример словаря: «'Would you like some more coffee?' 'No, " +
        "thank you, I'm fine.'» Пример словаря сам ставит отказ рядом с " +
        "приглашением через `would you like`, то есть подпирает и урок 2 " +
        "целиком. " +
        "ЧЕГО ОТСЮДА НЕ СЛЕДУЕТ И ЧЕГО МОДУЛЬ НЕ ГОВОРИТ: будто голое `No` " +
        "звучит резко. Словарь описывает вежливую форму, а не резкость " +
        "остальных — это прямо оговорено в самой выписке",
      license: "выписки из открытых источников",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем письмо от хозяев». с. 55, шкала «Reading " +
        "correspondence», графа A2: «Can understand very simple formal e-mails " +
        "and letters (e.g. confirmation of a booking or online purchase)». " +
        "ПЕРВАЯ РЕДАКЦИЯ ЦИТИРОВАЛА СОСЕДНЮЮ СТРОКУ ТОЙ ЖЕ ГРАФЫ — «Can " +
        "understand short, simple personal letters», — а письмо от гостиницы " +
        "личным не является. Нашёл методист. " +
        "УРОК ПИСЬМА «Отвечаем на приглашение». с. 83, шкала " +
        "«Correspondence», графа A2: «Can compose short, simple notes, e-mails " +
        "and text messages (e.g. to send or reply to an invitation, to confirm " +
        "or change an arrangement)» — ответ на приглашение назван прямо. " +
        "И с. 74, шкала «Overall spoken interaction», графа A2: «Can make and " +
        "respond to invitations, suggestions and apologies» — это про уроки 2 " +
        "и 5",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Четырнадцать карточек модуля взяты из словника ступени; новых для " +
        "ступени тринадцать. Четырнадцатое — `prefer`: Oxford помечает его A1, " +
        "то есть по помете оно с прошлой ступени, но курс его не давал ни " +
        "разу, поэтому карточка нужна. " +
        "ПЕРВАЯ РЕДАКЦИЯ ОПОРЫ ПИСАЛА «пятнадцать» И «все новые» — обе цифры " +
        "неверны, и вторая противоречила той же опоре двадцатью строками ниже. " +
        "Нашёл методист. " +
        "ЧЕТЫРЕ КАРТОЧКИ — ГЛАГОЛЫ С ПОСЛЕЛОГОМ: `pick up (phr v)`, `look " +
        "after (phr v)`, `fill in (phr v)` и `come back` — последний стоит в " +
        "словнике с пометой `(v)`, а не `(phr v)`; первая редакция приписала " +
        "ему чужую помету. Курс не давал таких " +
        "вовсе, и причина оказалась не в отборе, а в разборе: до 28 августа " +
        "`npm run slovo` не знал пометы `(phr v)` и терял все 25 записей этого " +
        "рода, а подсчёт запаса выбрасывал всё, где есть пробел. Запас ступени " +
        "после починки — 199 слов вместо 92. " +
        "`prefer` НАШЁЛСЯ ПО ТОЙ ЖЕ ПРИЧИНЕ: в словнике он записан как `prefer " +
        "/ would prefer (v)`, то есть нужный модулю оборот источник называет " +
        "прямо, а прежний разбор эту строку не читал. " +
        "ДВА СЛОВА OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ОБА ВЗЯТЫ ПО МЕРКЕ СТУПЕНИ: " +
        "excuse (B2) и afterwards (B2); оба стоят в словнике A2 Key, то есть " +
        "входят в требования экзамена. Не нашлись ни в `oxford-3000`, ни в " +
        "`oxford-5000`: receptionist, penfriend, board game, city centre, " +
        "bus stop, each other, as well, pick up, look after, fill in, come " +
        "back — проверено по обоим спискам построчно",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vezhlivaya-prosba",
      title: "Вежливая просьба: Could you help me?",
      estimatedMinutes: 15,
      outcome: "вежливо просить: Could you help me?",

      vozvrat: [{ iz: "stoit-i-ne-stoit", zadanie: "z2-vybrat-sovet" }],

      blocks: [
        {
          id: "prosba-k-neznakomomu",
          kind: "explain",
          text: [
            "Айгуль в гостинице, и ей нужно заполнить бланк.",
            "Человека за стойкой она видит впервые.",
            "Просьба к незнакомому звучит мягче, если начать её иначе.",
            "Слово could уже встречалось в модуле «Раньше мог»: там оно спрашивало об умении — Could you swim at six?",
            "Здесь то же слово не спрашивает, а просит.",
            "Could you help me? — Не могли бы вы мне помочь?",
            "По-русски вежливость тоже делают прошедшей формой: не «можете», а «не могли бы».",
            "Приём один и тот же в обоих языках — отодвинуть просьбу подальше от прямого требования.",
          ],
        },
        {
          id: "prosto-i-vezhlivo",
          kind: "table",
          caption: "Просьба обычная и вежливая",
          zvuchat: [
            "Can you help me?",
            "Could you help me?",
            "Can you fill in this form?",
            "Could you fill in this form?",
            "Can you pick me up at six?",
            "Could you pick me up at six?",
          ],
          head: ["Обычная просьба", "Вежливая просьба"],
          rows: [
            ["Can you help me?", "Could you help me?"],
            ["Can you fill in this form?", "Could you fill in this form?"],
            ["Can you pick me up at six?", "Could you pick me up at six?"],
          ],
        },
        {
          id: "kak-ustroena-vezhlivaya-prosba",
          kind: "explain",
          text: [
            "Вежливый оборот начинается со слова could, а дальше всё как в обычной просьбе.",
            "Глагол после того, к кому обращаются, стоит в обычной форме: help, fill, pick.",
            "Слово please ставят в конец, и просьба звучит ещё мягче.",
            "Оборот годится и незнакомому, и своим.",
            "Excuse me — обращение к незнакомому, по-русски «извините».",
          ],
        },
        {
          id: "ne-could-you-to",
          kind: "note",
          tone: "mistake",
          text:
            "«Could you to help me?» — так не просят.\n\nПосле could слово to " +
            "не ставят: Could you help me?",
        },
        {
          id: "razgovor-u-stoyki",
          kind: "example",
          caption: "Разговор у стойки",
          razgovor: true,
          zvuchat: [
            "Excuse me, could you help me, please?",
            "Of course. What can I do for you?",
            "Could you fill in this form for me? And could you look after my bag?",
          ],
          text:
            "Excuse me, could you help me, please?\nOf course. What can I do for you?\nCould you fill in this form for me? And could you look after my bag?",
          perevod: {
            "Excuse me, could you help me, please?":
              "Извините, не могли бы вы мне помочь?",
            "Of course. What can I do for you?": "Конечно. Чем могу помочь?",
            "Could you fill in this form for me? And could you look after my bag?":
              "Не могли бы вы заполнить за меня этот бланк? И не присмотрите за моей сумкой?",
          },
          explain:
            "В трёх просьбах подряд стоит один и тот же оборот, и глагол после " +
            "него не меняется: help, fill, look. Слово please стоит в конце " +
            "первой просьбы, а Excuse me — перед ней.",
        },
        {
          id: "slovar-prosby",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "excuse", translation: "извините", example: "Excuse me, could you help me?", hint: "/ɪkˈskjuːz/" },
            { term: "fill in", translation: "заполнить", example: "Could you fill in this form?", hint: "/fɪl ˈɪn/" },
            { term: "pick up", translation: "забрать, заехать за кем-то", example: "Could you pick me up at six?", hint: "/pɪk ˈʌp/" },
            { term: "look after", translation: "присмотреть за кем-то или чем-то", example: "Could you look after my bag?", hint: "/lʊk ˈɑːftə/" },
            { term: "receptionist", translation: "человек за стойкой, администратор", example: "The receptionist filled in the form.", hint: "/rɪˈsepʃənɪst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-could-v-prosbu",
          kind: "gap",
          prompt: "Это вежливая просьба к незнакомому. Допиши слово.",
          before: "",
          after: " you help me, please?",
          answer: "Could",
          hint: "С этого слова и начинается вежливый оборот.",
          why:
            "Could you help me, please? Запись Can you help me тоже понятна, но " +
            "звучит проще.",
        },
        {
          id: "z2-vybrat-vezhlivuyu-prosbu",
          kind: "choice",
          prompt: "В какой записи вежливая просьба построена верно?",
          options: [
            { text: "Could you to fill in this form?" },
            { text: "Could you fill in this form?", correct: true },
            { text: "Could you filling in this form?" },
          ],
          hint: "После could глагол стоит в обычной форме, без to.",
          why:
            "Could you fill in this form? В первой записи лишнее to, во второй " +
            "глагол взял окончание -ing.",
        },
        {
          id: "z3-otmetit-vezhlivye-prosby",
          kind: "hottext",
          prompt: "Отметь строки, где просьба сказана вежливым оборотом.",
          parts: [
            { text: "Could you look after my bag?", selectable: true, correct: true },
            { text: " · " },
            { text: "Help me with the form.", selectable: true },
            { text: " · " },
            { text: "Could you pick me up at six?", selectable: true, correct: true },
            { text: " · " },
            { text: "Can you help me?", selectable: true },
          ],
          hint: "Ищи слово could в самом начале строки.",
          why:
            "Первая и третья. Вторая — прямое указание, а четвёртая просьба " +
            "обычная, не вежливая.",
        },
        {
          id: "z4-sobrat-prosbu",
          kind: "order",
          prompt: "Собери вежливую просьбу: не могли бы вы заехать за мной в шесть?",
          items: ["pick me up at six?", "Could", "you"],
          answer: [1, 2, 0],
          hint: "Начни со слова вежливого оборота.",
          why:
            "Could you pick me up at six? Глагол после того, к кому " +
            "обращаются, стоит в обычной форме.",
        },
        {
          id: "z5-poprosit-vezhlivo",
          kind: "short",
          prompt:
            "Попроси незнакомого человека присмотреть за твоей сумкой. Начни с Could.",
          answer: "Could you look after my bag?",
          accept: [
            "Could you look after my bag",
            "Could you look after my bag, please?",
            "Could you look after my bag please?",
          ],
          hint: "Слово after стоит сразу после глагола.",
          why:
            "Could you look after my bag? Годится и с please в конце — так " +
            "мягче.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "radostnoe-soglasie",
      title: "Радостное согласие: I'd love to",
      estimatedMinutes: 15,
      outcome: "отвечать на приглашение с радостью и с благодарностью: I'd love to. — No, thank you.",

      blocks: [
        {
          id: "otvet-na-priglashenie",
          kind: "explain",
          text: [
            "Данияр зовёт Айгуль на концерт: Would you like to come with me?",
            "Отвечать на приглашение ты уже умеешь: в модуле «Давай я» это были Good idea и Sorry, I can't.",
            "Здесь два других оборота: один показывает радость, другой отказывает с благодарностью.",
          ],
        },
        {
          id: "soglasie-i-otkaz",
          kind: "table",
          caption: "Согласие и отказ",
          zvuchat: [
            "Would you like to come with me?",
            "I'd love to.",
            "No, thank you.",
            "Would you like some coffee?",
            "Yes, I'd love some coffee.",
            "No, thank you, I'm fine.",
          ],
          head: ["Зовут", "Согласие", "Отказ"],
          rows: [
            ["Would you like to come with me?", "I'd love to.", "No, thank you."],
            ["Would you like some coffee?", "Yes, I'd love some coffee.", "No, thank you, I'm fine."],
          ],
        },
        {
          id: "kak-ustroeno-soglasie",
          kind: "explain",
          text: [
            "Запись I'd — это короткое I would, и читается она в одно слово.",
            "После I'd love ставят to, а глагол можно не повторять: хватает I'd love to.",
            "Если предлагают вещь, а не занятие, вместо to ставят слово вещи: I'd love some coffee.",
            "Отказ говорят вместе с благодарностью: No, thank you.",
            "К отказу можно добавить причину, и тогда он не звучит обрывом: No, thank you, I'm busy.",
          ],
        },
        {
          id: "ne-i-would-love",
          kind: "note",
          tone: "mistake",
          text:
            "«I'd love come» — так не отвечают.\n\nПосле love ставят to: I'd " +
            "love to. Договорить целиком тоже можно — I'd love to come.",
        },
        {
          id: "razgovor-o-koncerte",
          kind: "example",
          caption: "Разговор о концерте",
          razgovor: true,
          zvuchat: [
            "Would you like to come to the concert with me?",
            "I'd love to! We haven't seen each other for a year.",
            "My penfriend from Poland is here. Would she like to come as well?",
            "Of course. Would you like to eat something afterwards?",
            "No, thank you, we have to come back early.",
          ],
          text:
            "Would you like to come to the concert with me?\nI'd love to! We haven't seen each other for a year.\nMy penfriend from Poland is here. Would she like to come as well?\nOf course. Would you like to eat something afterwards?\nNo, thank you, we have to come back early.",
          perevod: {
            "Would you like to come to the concert with me?":
              "Не хотите сходить со мной на концерт?",
            "I'd love to! We haven't seen each other for a year.":
              "С удовольствием! Мы не виделись целый год.",
            "My penfriend from Poland is here. Would she like to come as well?":
              "У меня в гостях подруга по переписке из Польши. Она тоже захочет пойти?",
            "Of course. Would you like to eat something afterwards?":
              "Конечно. А потом не хотите чего-нибудь поесть?",
            "No, thank you, we have to come back early.":
              "Нет, спасибо, нам надо вернуться пораньше.",
          },
          explain:
            "В первом ответе глагол не повторён: хватило I'd love to. В " +
            "последней строке стоит отказ с благодарностью, и рядом названа " +
            "причина — поэтому он не звучит обрывом.",
        },
        {
          id: "slovar-otveta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "as well", translation: "тоже, также", example: "Would she like to come as well?", hint: "/əz ˈwel/" },
            { term: "afterwards", translation: "потом, после этого", example: "Would you like to eat something afterwards?", hint: "/ˈɑːftəwədz/" },
            { term: "come back", translation: "вернуться", example: "We have to come back early.", hint: "/kʌm ˈbæk/" },
            { term: "penfriend", translation: "друг по переписке", example: "My penfriend from Poland is here.", hint: "/ˈpenfrend/" },
            { term: "each other", translation: "друг друга", example: "We haven't seen each other for a year.", hint: "/iːtʃ ˈʌðə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-soglasie",
          kind: "gap",
          prompt: "Тебя зовут на концерт, и пойти хочется. Допиши слово.",
          before: "I'd ",
          after: " to!",
          answer: "love",
          hint: "Это слово говорит не просто о согласии, а о радости.",
          why:
            "I'd love to! Запись I'd like to тоже понятна, но радости в ней " +
            "меньше.",
        },
        {
          id: "z2-otlichit-soglasie-ot-otkaza",
          kind: "choice",
          prompt:
            "Строку No, thank you, I'm busy сказали в ответ на приглашение. Что она значит?",
          options: [
            { text: "Человек согласился и поблагодарил." },
            { text: "Человек отказался и назвал причину.", correct: true },
            { text: "Человек не расслышал вопроса." },
          ],
          hint: "Смотри, что стоит после запятой.",
          why:
            "Отказался и назвал причину. Оборот No, thank you — это отказ, а " +
            "I'm busy объясняет его.",
        },
        {
          id: "z3-otmetit-soglasiya",
          kind: "hottext",
          prompt: "Отметь строки, которыми соглашаются.",
          parts: [
            { text: "I'd love to!", selectable: true, correct: true },
            { text: " · " },
            { text: "No, thank you.", selectable: true },
            { text: " · " },
            { text: "Yes, I'd love some coffee.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, thank you, I'm busy.", selectable: true },
          ],
          hint: "Ищи оборот со словом love.",
          why:
            "Первая и третья. Во второй и четвёртой стоит отказ с " +
            "благодарностью.",
        },
        {
          id: "z4-sobrat-otkaz",
          kind: "order",
          prompt: "Собери отказ с причиной: нет, спасибо, мне надо рано вернуться.",
          items: ["I have to come back early.", "No,", "thank you,"],
          answer: [1, 2, 0],
          hint: "Сначала отказ с благодарностью, потом причина.",
          why:
            "No, thank you, I have to come back early. Причина идёт следом и " +
            "объясняет отказ.",
        },
        {
          id: "z5-otvetit-soglasiem",
          kind: "short",
          prompt:
            "Тебя позвали: Would you like to come to the concert? Ответь так, чтобы была видна радость. Начни с I'd.",
          answer: "I'd love to.",
          accept: [
            "I'd love to",
            "I'd love to!",
            "I would love to.",
            "I'd love to come.",
            "I'd love to come!",
          ],
          hint: "Радость показывает один глагол, и это не like.",
          why:
            "I'd love to. Годится и полная запись I would love to — она просто " +
            "длиннее.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-luchshe",
      title: "Что лучше: I'd prefer Sunday",
      estimatedMinutes: 14,
      outcome: "называть, что лучше: I'd prefer Sunday",

      blocks: [
        {
          id: "vybor-mezhdu-dvumya",
          kind: "explain",
          text: [
            "Данияр зовёт в субботу, а у Айгуль в субботу дела.",
            "Отказываться совсем ей не хочется: хочется другого дня.",
            "Она отвечает I'd prefer Sunday.",
          ],
        },
        {
          id: "hochu-i-luchshe-by",
          kind: "table",
          caption: "Согласие и выбор",
          zvuchat: [
            "I'd love to come on Saturday.",
            "I'd prefer Sunday.",
            "I'd love to meet at the bus stop.",
            "I'd prefer the city centre.",
            "I'd love to play football.",
            "I'd prefer a board game.",
          ],
          head: ["Согласие", "Выбор: так лучше"],
          rows: [
            ["I'd love to come on Saturday.", "I'd prefer Sunday."],
            ["I'd love to meet at the bus stop.", "I'd prefer the city centre."],
            ["I'd love to play football.", "I'd prefer a board game."],
          ],
        },
        {
          id: "kak-ustroen-vybor",
          kind: "explain",
          text: [
            "Оборот I'd prefer называет то, что человеку больше по душе.",
            "После него ставят прямо название вещи или дня: I'd prefer Sunday.",
            "Если речь о занятии, ставят to и глагол: I'd prefer to meet on Sunday.",
            "Причину присоединяют словом because: I'd prefer Sunday because I work on Saturday.",
            "Это не отказ: человек согласен, но выбирает другое.",
          ],
        },
        {
          id: "ne-i-prefer-to-sunday",
          kind: "note",
          tone: "mistake",
          text:
            "«I'd prefer to Sunday» — так не выбирают.\n\nСлово to ставят " +
            "только перед глаголом: I'd prefer to meet on Sunday.",
        },
        {
          id: "razgovor-o-dne-vstrechi",
          kind: "example",
          caption: "Разговор о дне встречи",
          razgovor: true,
          zvuchat: [
            "Would you like to meet on Saturday?",
            "I'd prefer Sunday because I work on Saturday.",
            "Fine. And where? At the bus stop?",
            "I'd prefer the city centre. There is a nice cafe near the shops.",
          ],
          text:
            "Would you like to meet on Saturday?\nI'd prefer Sunday because I work on Saturday.\nFine. And where? At the bus stop?\nI'd prefer the city centre. There is a nice cafe near the shops.",
          perevod: {
            "Would you like to meet on Saturday?":
              "Не хотите встретиться в субботу?",
            "I'd prefer Sunday because I work on Saturday.":
              "Мне бы лучше воскресенье, потому что в субботу я работаю.",
            "Fine. And where? At the bus stop?":
              "Хорошо. А где? На остановке?",
            "I'd prefer the city centre. There is a nice cafe near the shops.":
              "Я бы предпочёл центр города. У магазинов есть хорошее кафе.",
          },
          explain:
            "В обоих ответах после оборота стоит прямо то, что выбирают: день и " +
            "место. В первом рядом названа причина, и потому выбор не звучит " +
            "отказом.",
        },
        {
          // Свод связки «Модальные глаголы». Их на ступени шесть, и разбросаны
          // они по шестнадцати модулям: shall в 12-м, may и might в 13-м, must и
          // have to в 25-м, should в 26-м, could в 27-м и здесь. Ученик собирает
          // их впервые.
          id: "pered-svodom",
          kind: "explain",
          text: [
            "Слов, которые встают перед глаголом, в курсе набралось семь.",
            "Вот они рядом.",
          ],
        },
        {
          id: "modalnye-svod",
          kind: "table",
          caption: "Слова перед глаголом: что каждое из них делает",
          zvuchat: [
            "Shall I help you?",
            "It might rain.",
            "You must show your ID.",
            "You should take a map.",
            "He could swim at six.",
            "Could you help me?",
            "It may be silver.",
            "Would you like to come?",
          ],
          head: ["По-английски", "По-русски", "Что делает"],
          rows: [
            ["Shall I help you?", "Давай я помогу?", "предлагает помощь"],
            ["It might rain.", "Может быть, пойдёт дождь.", "сомневается"],
            ["You must show your ID.", "Пропуск надо показать.", "обязывает"],
            ["You should take a map.", "Тебе стоит взять карту.", "советует"],
            ["He could swim at six.", "В шесть лет он умел плавать.", "говорит об умении"],
            ["Could you help me?", "Не могли бы вы мне помочь?", "просит вежливо"],
            ["It may be silver.", "Может быть, серебряный.", "сомневается"],
            ["Would you like to come?", "Не хотите прийти?", "вежливо зовёт"],
          ],
        },
        {
          id: "chto-obshchego-u-modalnyh",
          kind: "explain",
          text: [
            "Восемь строк, семь слов, шесть разных модулей — а устроены все одинаково.",
            "Каждое стоит перед глаголом, и глагол после него остаётся словарным: help, rain, show, take.",
            "Ни одно из них не берёт окончания -s даже при he и she.",
            "Различает их не устройство, а работа — то, что стоит в столбце «Что делает».",
            "И заметь два места: could работает в двух строках по-разному, а may и might сомневаются одинаково.",
          ],
        },
        {
          id: "slovar-vybora",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "prefer", translation: "предпочитать", example: "I'd prefer Sunday.", hint: "/prɪˈfɜː/" },
            { term: "city centre", translation: "центр города", example: "I'd prefer the city centre.", hint: "/ˈsɪti ˈsentə/" },
            { term: "bus stop", translation: "автобусная остановка", example: "At the bus stop?", hint: "/ˈbʌs stɒp/" },
            { term: "board game", translation: "настольная игра", example: "I'd prefer a board game.", hint: "/ˈbɔːd geɪm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-prefer",
          kind: "gap",
          prompt: "Человек согласен, но выбирает другой день. Допиши слово.",
          before: "I'd ",
          after: " Sunday.",
          answer: "prefer",
          hint: "Это слово называет то, что человеку больше по душе.",
          why:
            "I'd prefer Sunday. Оборот I'd love to сказал бы про согласие, а " +
            "здесь выбирают другое.",
        },
        {
          id: "z2-vybrat-vernuyu-zapis",
          kind: "choice",
          prompt: "Тебе больше подходит пятница. В какой записи выбор назван верно?",
          options: [
            { text: "I'd prefer to Friday." },
            { text: "I'd prefer Friday.", correct: true },
            { text: "I'd prefer Friday to meet." },
          ],
          hint: "После оборота день ставят прямо, без лишних слов.",
          why:
            "I'd prefer Friday. Слово to ставят только перед глаголом, и стоит " +
            "оно сразу за оборотом: I'd prefer to meet on Friday.",
        },
        {
          id: "z3-otmetit-vybor",
          kind: "hottext",
          prompt: "Отметь строки, где человек выбирает другое, а не отказывается.",
          parts: [
            { text: "I'd prefer the city centre.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, thank you.", selectable: true },
            { text: " · " },
            { text: "I'd prefer a board game.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, thank you, I'm busy.", selectable: true },
          ],
          hint: "Ищи оборот, после которого назван день, место или занятие.",
          why:
            "Первая и третья. Во второй и четвёртой стоит отказ, а не выбор.",
        },
        {
          id: "z4-sobrat-vybor-s-prichinoy",
          kind: "order",
          prompt: "Собери строку: мне бы лучше воскресенье, потому что в субботу я работаю.",
          items: ["because I work on Saturday.", "I'd prefer", "Sunday,"],
          answer: [1, 2, 0],
          hint: "Сначала выбор, потом причина.",
          why:
            "I'd prefer Sunday because I work on Saturday. Слово because и " +
            "присоединяет причину.",
        },
        {
          id: "z5-nazvat-vybor",
          kind: "short",
          prompt:
            "Тебя зовут встретиться на остановке, но лучше в центре города. Ответь, начав с I'd.",
          answer: "I'd prefer the city centre.",
          accept: [
            "I'd prefer the city centre",
            "I would prefer the city centre.",
            "I'd prefer to meet in the city centre.",
          ],
          hint: "После оборота ставят прямо то место, которое выбираешь.",
          why:
            "I'd prefer the city centre. Годится и I'd prefer to meet in the " +
            "city centre — там выбрано занятие, а не место.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pismo-hozyaev",
      title: "Читаем письмо от хозяев",
      estimatedMinutes: 13,
      outcome: "находить в письме, о чём просят и что предлагают на выбор",

      blocks: [
        {
          id: "zachem-chitat-pismo-hozyaev",
          kind: "explain",
          text: [
            "Айгуль сняла комнату в маленькой гостинице и получила письмо оттуда.",
            "В таком письме ищут две вещи: о чём просят и что дают на выбор.",
            "Ниже письмо, и вопросы будут о нём.",
          ],
        },
        {
          id: "pismo-ot-hozyaev",
          kind: "text",
          title: "Before you arrive",
          genre: "email",
          body: [
            "Dear Aigul, thank you for your booking. We need two things before you arrive.",
            "Could you fill in the form on our site? It takes two minutes.",
            "Could you send us your bus number? The receptionist will meet you.",
            "We can pick you up at the bus stop at four, or you can walk from the city centre if you prefer.",
            "In the evening our guests play board games in the hall. Would you like to join them?",
          ],
          glossary: [
            { term: "thank you for your booking", translation: "спасибо за бронирование" },
            { term: "on our site", translation: "на нашем сайте" },
            { term: "join them", translation: "присоединиться к ним" },
          ],
        },
        {
          id: "kak-iskat-v-pisme",
          kind: "note",
          tone: "info",
          text:
            "Просьбу ищут по обороту could you, а приглашение — по would you " +
            "like.\n\nВыбор автор отдаёт словами if you prefer.",
        },

        // ---- задания ----
        {
          id: "z1-o-chyom-prosyat-pervym-delom",
          about: "pismo-ot-hozyaev",
          kind: "choice",
          prompt: "О чём хозяева просят в первую очередь?",
          options: [
            { text: "Заполнить бланк на сайте.", correct: true },
            { text: "Приехать к четырём часам." },
            { text: "Принести настольную игру." },
          ],
          hint: "Первая просьба стоит во второй строке письма.",
          why:
            "Заполнить бланк: Could you fill in the form on our site?",
        },
        {
          id: "z2-otmetit-prosby-hozyaev",
          about: "pismo-ot-hozyaev",
          kind: "hottext",
          prompt: "Отметь то, о чём хозяева просят.",
          parts: [
            { text: "заполнить бланк", selectable: true, correct: true },
            { text: " · " },
            { text: "сообщить номер автобуса", selectable: true, correct: true },
            { text: " · " },
            { text: "дойти пешком из центра", selectable: true },
            { text: " · " },
            { text: "играть в настольные игры", selectable: true },
          ],
          hint: "Просьбы начинаются с оборота could you.",
          why:
            "Заполнить бланк и сообщить номер автобуса. Пешком дойти — это " +
            "выбор, а игры вечером — приглашение.",
        },
        {
          id: "z3-vo-skolko-mogut-vstretit",
          about: "pismo-ot-hozyaev",
          kind: "short",
          prompt: "Во сколько хозяева могут встретить гостью? Ответь числом.",
          answer: "4",
          accept: ["four", "Four", "четыре"],
          hint: "Про остановку сказано в четвёртой строке.",
          why: "We can pick you up at the bus stop at four.",
        },
        {
          id: "z4-chto-dayut-na-vybor",
          about: "pismo-ot-hozyaev",
          kind: "choice",
          prompt: "Что хозяева дают на выбор?",
          options: [
            { text: "Приехать в субботу или в воскресенье." },
            { text: "Заплатить сразу или потом." },
            { text: "Быть встреченной на остановке или дойти пешком.", correct: true },
          ],
          hint: "Выбор стоит в той строке, где есть слова if you prefer.",
          why:
            "Встретят на остановке или гостья дойдёт пешком. В письме это одна " +
            "строка. Оборот if you prefer и отдаёт выбор гостье.",
        },
        {
          id: "z5-kto-vstretit",
          about: "pismo-ot-hozyaev",
          kind: "short",
          prompt:
            "Кто встретит гостью, если она сообщит номер автобуса? Ответь одним словом по-английски.",
          answer: "receptionist",
          accept: ["Receptionist", "the receptionist"],
          hint: "Об этом сказано во второй половине третьей строки.",
          why: "The receptionist will meet you.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-otvet",
      title: "Слушаем ответ на приглашение",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, согласился человек или отказался",

      blocks: [
        {
          id: "zachem-slushat-otvet",
          kind: "explain",
          text: [
            "Данияр зовёт Айгуль, и она отвечает не сразу согласием.",
            "Слушать надо, что ей не подходит и что она выбирает взамен.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-otveta",
          kind: "audio",
          caption: "Разговор о выходных",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Would you like to come to the city centre on Saturday? — I'd love " +
            "to, but I work on Saturday. I'd prefer Sunday. — Fine. Could you " +
            "pick up the tickets afterwards? — Of course.",
        },
        {
          id: "chto-slushat-v-otvete",
          kind: "note",
          tone: "info",
          text:
            "Согласие звучит оборотом I'd love to, отказ — No, thank " +
            "you.\n\nВыбор другого дня звучит оборотом I'd prefer.",
        },

        // ---- задания ----
        {
          id: "z1-kakoy-den-predlagayut",
          about: "zapis-otveta",
          kind: "short",
          prompt: "Послушай. На какой день зовут? Ответь одним словом по-английски.",
          answer: "Saturday",
          accept: ["saturday", "on Saturday"],
          hint: "День назван в конце самой первой реплики.",
          why: "Would you like to come to the city centre on Saturday?",
        },
        {
          id: "z2-kakoy-den-vybirayut",
          about: "zapis-otveta",
          kind: "short",
          prompt:
            "Послушай. Какой день предпочитает второй собеседник? Ответь одним словом по-английски.",
          answer: "Sunday",
          accept: ["sunday", "on Sunday"],
          hint: "Ответ звучит в конце второй реплики.",
          why: "I'd prefer Sunday.",
        },
        {
          id: "z3-kto-kak-otvetil",
          about: "zapis-otveta",
          kind: "choice",
          prompt: "Послушай. Как ответила Айгуль?",
          options: [
            { text: "Отказалась совсем." },
            { text: "Пойти рада, но выбрала другой день.", correct: true },
            { text: "Согласилась на субботу." },
          ],
          hint: "Слушай, что стоит после слова but.",
          why:
            "Пойти рада, но выбрала воскресенье: I'd love to, but I work on " +
            "Saturday. I'd prefer Sunday.",
        },
        {
          id: "z4-otmetit-uslyshannoe-v-otvete",
          about: "zapis-otveta",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "Айгуль работает в субботу", selectable: true, correct: true },
            { text: " · " },
            { text: "её просят забрать билеты", selectable: true, correct: true },
            { text: " · " },
            { text: "встречу назначили на остановке", selectable: true },
            { text: " · " },
            { text: "Айгуль отказалась совсем", selectable: true },
          ],
          hint: "Про билеты сказано в предпоследней реплике.",
          why:
            "Прозвучали первое и второе. Место встречи — центр города, а " +
            "отказа не было: Айгуль выбрала другой день.",
        },
        {
          id: "z5-chto-znachit-prosba-v-konce",
          about: "zapis-otveta",
          kind: "choice",
          prompt:
            "В конце звучит Could you pick up the tickets afterwards? Что это?",
          options: [
            { text: "Приглашение." },
            { text: "Вежливая просьба.", correct: true },
            { text: "Отказ." },
          ],
          hint: "Смотри, с какого слова начинается строка.",
          why:
            "Вежливая просьба. Оборот could you и делает просьбу мягче, а " +
            "приглашение начиналось бы с would you like.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "otvechaem-na-priglashenie",
      title: "Отвечаем на приглашение",
      estimatedMinutes: 15,
      outcome:
        "проверять ответ на приглашение: сказано спасибо, дан ответ и назван день",

      blocks: [
        {
          id: "zachem-proveryat-otvet",
          kind: "explain",
          text: [
            "Ученик ответил на приглашение одной строкой: «OK.» — «Ладно.»",
            "Приглашавший не знает, придёт гость или нет и когда.",
            "В ответе на приглашение пропускают не вежливость, а само дело.",
            "Проверить свой ответ можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-otvete",
          kind: "table",
          caption: "Что должно быть в ответе на приглашение",
          zvuchat: [
            "Thank you for the invitation!",
            "I'd love to come.",
            "I'd prefer Sunday because I work on Saturday.",
            "Could you pick me up at the bus stop?",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["спасибо за приглашение", "Thank you for the invitation!"],
            ["ответ: придёшь или нет", "I'd love to come."],
            ["день и отчего он", "I'd prefer Sunday because I work on Saturday."],
            ["своя просьба, если она есть", "Could you pick me up at the bus stop?"],
          ],
        },
        {
          id: "chem-derzhitsya-otvet",
          kind: "explain",
          text: [
            "Первая строка благодарит: приглашавший узнаёт, что письмо дошло.",
            "Вторая говорит главное — придёшь или нет.",
            "Третья называет день и сразу причину — через because.",
            "Четвёртая просит о своём, и просьбу смягчает оборот could you.",
            "Слово OK всего этого не заменяет: оно не отвечает ни на один вопрос.",
          ],
        },
        {
          id: "obrazec-otveta",
          kind: "example",
          caption: "Ответ Айгуль",
          perevod: {
            "Thank you for the invitation!": "Спасибо за приглашение!",
            "I'd love to come to the concert.":
              "Я с удовольствием схожу на концерт.",
            "I'd prefer Sunday because I work on Saturday.":
              "Я бы предпочла воскресенье, потому что в субботу работаю.",
            "Could you pick me up at the bus stop at four?":
              "Не могли бы вы забрать меня с остановки в четыре?",
          },
          zvuchat: [
            "Thank you for the invitation!",
            "I'd love to come to the concert.",
            "I'd prefer Sunday because I work on Saturday.",
            "Could you pick me up at the bus stop at four?",
          ],
          text:
            "Thank you for the invitation!\nI'd love to come to the concert.\nI'd prefer Sunday because I work on Saturday.\nCould you pick me up at the bus stop at four?",
          explain:
            "Первая строка благодарит, вторая отвечает, третья называет день и " +
            "причину, четвёртая просит. Просьба стоит последней и смягчена " +
            "оборотом could you.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-otvetu",
          kind: "choice",
          prompt: "Ответ целиком: OK. Чего в нём не хватает?",
          options: [
            { text: "Подписи." },
            { text: "Всего: ни спасибо, ни ответа, ни дня.", correct: true },
            { text: "Обратного адреса." },
          ],
          hint: "Спроси: что приглашавший узнал из этой строки?",
          why:
            "Всего сразу. Приглашавший не знает ни придёт ли гость, ни в какой " +
            "день.",
        },
        {
          id: "z2-dopisat-nachalo-otveta",
          kind: "gap",
          prompt: "С этого начинают ответ на приглашение. Допиши слово.",
          before: "Thank you for the ",
          after: "!",
          answer: "invitation",
          hint: "Это слово называет то, на что ты отвечаешь.",
          why:
            "Thank you for the invitation! Так приглашавший сразу видит, что " +
            "письмо дошло.",
        },
        {
          id: "z3-otmetit-stroki-otveta",
          kind: "hottext",
          prompt: "Отметь строки, из которых приглашавший узнаёт что-то нужное.",
          parts: [
            { text: "I'd love to come to the concert.", selectable: true, correct: true },
            { text: " · " },
            { text: "The weather is nice today.", selectable: true },
            { text: " · " },
            { text: "I'd prefer Sunday.", selectable: true, correct: true },
            { text: " · " },
            { text: "OK.", selectable: true },
          ],
          hint: "Нужное — это ответ и день.",
          why:
            "Первая и третья. Про погоду приглашавший узнаёт, но делать ему с " +
            "этим нечего, а OK не говорит ничего.",
        },
        {
          id: "z4-sobrat-svoyu-prosbu",
          kind: "order",
          prompt:
            "Собери вежливую просьбу для ответа: не могли бы вы встретить меня на остановке?",
          items: ["at the bus stop?", "Could you", "pick me up"],
          answer: [1, 2, 0],
          hint: "Начни со слова вежливого оборота.",
          why:
            "Could you pick me up at the bus stop? Место стоит в конце строки.",
        },
        {
          id: "z5-napisat-otvet-na-priglashenie",
          kind: "essay",
          prompt:
            "Ответь на приглашение четырьмя строками. Поблагодари. Скажи, придёшь или нет. Назови день и через because его причину. Попроси о чём-нибудь через Could you.",
          minWords: 16,
          sample:
            "Thank you for the invitation!\nI'd love to come to the concert.\nI'd prefer Sunday because I work on Saturday.\nCould you pick me up at the bus stop at four?",
          checklist: [
            "сказано спасибо за приглашение",
            "сказано, придёшь или нет",
            "назван день и через because причина",
            "есть просьба, которая начинается с Could you",
          ],
          hint:
            "Бери обороты, которые знаешь: Thank you for…, I'd love to…, I'd prefer… because…, Could you…?",
          why:
            "Ответ работает, когда приглашавший знает всё сразу: придёшь ли, " +
            "когда и о чём тебя просить.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, отличить один вежливый оборот от другого.

      // ---- итог 1 ----
      {
        id: "q-ispravit-could-to",
        kind: "short",
        outcome: "вежливо просить: Could you help me?",
        prompt:
          "Ученик написал: Could you to open the window? Запиши строку без ошибки.",
        answer: "Could you open the window?",
        accept: ["Could you open the window"],
        hint: "Одно слово в строке лишнее.",
        why:
          "Could you open the window? После could слово to не ставят никогда.",
      },
      {
        id: "q-otlichit-prosbu-ot-priglasheniya",
        kind: "choice",
        outcome: "находить в письме, о чём просят и что предлагают на выбор",
        prompt:
          "Строки Could you come at six? и Would you like to come at six? говорят о разном. Чем?",
        options: [
          { text: "В первой просят, во второй зовут.", correct: true },
          { text: "Первая вежливее второй." },
          { text: "Первая о завтрашнем дне, вторая о сегодняшнем." },
        ],
        hint: "Спроси: кому это нужно — говорящему или собеседнику?",
        why:
          "В первой просят прийти, во второй зовут в гости. Просьба нужна " +
          "говорящему, приглашение — обоим.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-povtor-glagola",
        kind: "short",
        outcome: "отвечать на приглашение с радостью и с благодарностью: I'd love to. — No, thank you.",
        prompt:
          "На приглашение Would you like to see the new film? ученик ответил: I'd love it to see. Запиши ответ без ошибки.",
        answer: "I'd love to.",
        accept: ["I'd love to", "I would love to.", "I'd love to see it."],
        hint: "После love стоит to, а дальше можно ничего не говорить.",
        why:
          "I'd love to. Годится и полный ответ I'd love to see it, но слово it " +
          "не ставят между love и to.",
      },
      {
        id: "q-napisat-vezhlivyy-otkaz",
        kind: "short",
        outcome: "отвечать на приглашение с радостью и с благодарностью: I'd love to. — No, thank you.",
        prompt:
          "Тебе предложили: Would you like some more coffee? Больше не хочется. Ответь вежливо и добавь, что всё в порядке.",
        answer: "No, thank you, I'm fine.",
        accept: [
          "No, thank you, I'm fine",
          "No thank you, I'm fine.",
          "No, thank you. I'm fine.",
          "No, thank you, I am fine.",
        ],
        hint: "Одним словом «нет» тут не обходятся.",
        why:
          "No, thank you, I'm fine. Ответ I'd love to означал бы согласие, а " +
          "голое No оставило бы собеседника без объяснения.",
      },

      // ---- итог 3 ----
      {
        id: "q-perepisat-otkaz-v-vybor",
        kind: "short",
        outcome: "называть, что лучше: I'd prefer Sunday",
        prompt:
          "Ученик хотел выбрать пятницу и написал: I'd prefer to Friday. Запиши строку без ошибки.",
        answer: "I'd prefer Friday.",
        accept: ["I'd prefer Friday", "I would prefer Friday."],
        hint: "Одно слово в строке лишнее.",
        why:
          "I'd prefer Friday. Слово to тут не нужно: за оборотом стоит день, а " +
          "не глагол.",
      },
      {
        id: "q-nazvat-oshibku-v-prefer",
        kind: "choice",
        outcome: "называть, что лучше: I'd prefer Sunday",
        prompt: "Запись I'd prefer to the city centre неверна. Отчего?",
        options: [
          { text: "Слово to ставят только перед глаголом.", correct: true },
          { text: "Перед city centre не ставят the." },
          { text: "Оборот I'd prefer бывает только с днями." },
        ],
        hint: "Вспомни, где в этом обороте место у слова to.",
        why:
          "Слово to ставят только перед глаголом: I'd prefer to meet in the " +
          "city centre. Артикль на месте, а оборот годится для любого выбора.",
      },

      // ---- итог 4 ----
      {
        id: "q-najti-prosbu-v-pisme",
        kind: "choice",
        outcome: "находить в письме, о чём просят и что предлагают на выбор",
        prompt:
          "В письме строка: Could you pick up my sister at the bus stop? Что делает автор?",
        options: [
          { text: "Просит встретить сестру.", correct: true },
          { text: "Зовёт на остановку." },
          { text: "Предлагает поехать вместе." },
        ],
        hint: "Смотри, с какого оборота начинается строка.",
        why:
          "Просит встретить. Оборот could you и делает это просьбой, а не " +
          "приглашением.",
      },
      {
        id: "q-otlichit-predlozhenie-ot-prosby",
        kind: "short",
        outcome: "находить в письме, о чём просят и что предлагают на выбор",
        prompt:
          "Хозяева написали гостье: We can play board games, or chess if you prefer. Кто выбирает занятие? Ответь одним словом по-русски.",
        answer: "гостья",
        accept: [
          "Гостья", "гость", "Гость", "она", "Она",
          "читатель", "получатель", "адресат", "приглашённый",
        ],
        hint: "Смотри, к кому относится слово prefer.",
        why:
          "Гостья. Оборот if you prefer и отдаёт выбор тому, кто получил " +
          "письмо.",
      },

      // ---- итог 5 ----
      {
        id: "q-uslyshat-soglasie",
        kind: "short",
        outcome: "слышать в разговоре, согласился человек или отказался",
        zvuk:
          "Would you like to play football on Friday? — I'd love to!",
        prompt:
          "Послушай. Каким словом собеседник показал радость? Ответь одним словом по-английски.",
        answer: "love",
        accept: ["Love", "I'd love to", "I'd love to."],
        hint: "Это слово стоит между I'd и to.",
        why:
          "Love. Ответ I'd like to тоже был бы согласием, но радости в нём " +
          "меньше.",
      },
      {
        id: "q-uslyshat-otkaz",
        kind: "choice",
        outcome: "слышать в разговоре, согласился человек или отказался",
        zvuk:
          "Would you like to come to the concert? — No, thank you, I have to look after my sister.",
        prompt: "Послушай. Что ответил собеседник?",
        options: [
          { text: "Согласился и поблагодарил." },
          { text: "Отказался и назвал причину.", correct: true },
          { text: "Выбрал другой день." },
        ],
        hint: "Слушай, что стоит после благодарности.",
        why:
          "Отказался и назвал причину: ему надо присмотреть за сестрой.",
      },

      // ---- итог 6 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-otvetu",
        kind: "choice",
        outcome:
          "проверять ответ на приглашение: сказано спасибо, дан ответ и назван день",
        prompt:
          "Ответ: Thank you for the invitation! I'd love to come. Could you pick me up? Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что благодарит." },
          { text: "Той, что просит о своём." },
          { text: "Той, что называет день и причину.", correct: true },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что называет день. Спасибо сказано, ответ дан, просьба есть — " +
          "а когда придёт гость, неизвестно.",
      },
      {
        id: "q-dopisat-den-v-otvet",
        kind: "short",
        outcome:
          "проверять ответ на приглашение: сказано спасибо, дан ответ и назван день",
        prompt:
          "К ответу допиши строку с днём и причиной: лучше пятница, потому что в четверг у тебя занятия. Начни с I'd.",
        answer: "I'd prefer Friday because I have classes on Thursday.",
        accept: [
          "I'd prefer Friday because I have classes on Thursday",
          "I'd prefer Friday because I have classes on Thursday.",
          "I'd prefer Friday, because I have classes on Thursday",
          "I'd prefer Friday, because I have classes on Thursday.",
        ],
        hint: "Сначала выбор, потом причина через одно слово.",
        why:
          "I'd prefer Friday because I have classes on Thursday. Сначала " +
          "выбор, потом то, что его объясняет.",
      },
      {
        id: "q-poryadok-strok-otveta",
        kind: "choice",
        outcome:
          "проверять ответ на приглашение: сказано спасибо, дан ответ и назван день",
        prompt:
          "В ответе на приглашение своя просьба стоит последней строкой. А какая строка стоит первой?",
        options: [
          { text: "Та, что называет день." },
          { text: "Та, что благодарит за приглашение.", correct: true },
          { text: "Та, что говорит, придёшь или нет." },
        ],
        hint: "Вспомни порядок четырёх строк ответа.",
        why:
          "Та, что благодарит. Дальше идёт ответ, потом день с причиной, и " +
          "только в конце своя просьба.",
      },
    ],
  },
};

export default module;
