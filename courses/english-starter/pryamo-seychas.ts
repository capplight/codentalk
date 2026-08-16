import type { Module } from "@/lib/content/types";

/**
 * Модуль 18 курса «Английский с нуля»: прямо сейчас.
 *
 * Программа: docs/programma-english-starter.md, модуль 18 — «сообщать, что
 * происходит в эту минуту»; грамматика: настоящее длительное, вспомогательный
 * `be`.
 *
 * ГЛАВНАЯ ОПАСНОСТЬ МОДУЛЯ, И ОНА НЕ В СТУПЕНИ. Модуль 14 учит правилу «форма
 * be и глагол вместе не идут»: `I am work` — ошибка, и на этом там построен
 * целый урок с врезкой и заданием на опознание. Здесь ученик видит `I am
 * working` и решает, что его обманули.
 *
 * Поэтому урок 1 начинается со столкновения, а не обходит его: сначала
 * показывается, что прежнее правило осталось верным (голый глагол после be
 * по-прежнему нельзя), и только потом вводится окончание `-ing` как то, что и
 * делает разницу. Не сказать об этом прямо — значит оставить ученика с двумя
 * противоречащими правилами и без способа их развести.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. УТВЕРЖДЕНИЕ — A1. English Grammar Profile, PRESENT present continuous,
 *    «FORM: AFFIRMATIVE»: «Can use the affirmative form», пример источника —
 *    «I am sending you some flowers, because you are not well».
 *
 * 2. УПОТРЕБЛЕНИЕ «происходит сейчас» — A1. Та же подкатегория, «USE: EVENTS
 *    IN PROGRESS»: «Can use the present continuous with a limited range of
 *    verbs to talk about situations and events in progress», пример источника —
 *    «[in a message to someone who is ill] We are missing you».
 *
 * 3. Слова модуля — Oxford 3000, все A1: now, dance, sing, sit, stand, wait,
 *    open, rain.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ И ОБЪЯВЛЕНО:
 *
 * — ОТРИЦАНИЕ `I'm not working` (урок 6) — A2, PRESENT present continuous,
 *   «FORM: NEGATIVE».
 * — ВОПРОС `What are you doing?` (урок 7) — A2, та же подкатегория, «FORM:
 *   QUESTIONS».
 *
 *   ПОЧЕМУ ВЗЯТЫ: то же основание, что в модулях 15 и 16. Курс, который учит
 *   утверждать и отнимает отрицание и вопрос, оставляет ученика с третью
 *   умения. Второе подтверждение по ступени: руководство Cambridge, с. 29,
 *   список грамматики Pre A1 Starters — «Present continuous (not with future
 *   reference) — What are you doing?», и заголовок графы там «Verbs (Positive,
 *   negative, question, imperative and short-answer forms)». То есть у
 *   Cambridge отрицание и вопрос стоят на той же ступени, что утверждение.
 *   Совет с. 76 — это Flyers Speaking Part 3, устная часть, а не список
 *   грамматики: приписывать ему ступень нельзя. Разбор методиста.
 *
 * — ПУСТОЕ `it` О ПОГОДЕ (`It is raining`) — A2, PRONOUNS subject/object,
 *   «FORM: (SUBJECT) EMPTY 'IT'»: «Can use 'it' as an empty subject when there
 *   is nothing else to put in subject position, particularly with weather or
 *   time», пример источника — «It's warm and windy».
 *
 *   ПОЧЕМУ ВЗЯТО: модуль 10 уже взял ту же строку сверх ступени, но только для
 *   времени («It's eight o'clock»). Здесь она распространяется на погоду —
 *   иначе не сказать «идёт дождь», а без погоды рассказ о происходящем вокруг
 *   рассыпается. Заимствование объявлено здесь по разбору методиста: прежде
 *   оно молчало, и следующий проверяющий не отличил бы замысел от недосмотра.
 *
 * ЧЕГО В МОДУЛЕ НЕТ:
 *
 * — НАСТОЯЩЕЕ ДЛИТЕЛЬНОЕ О БУДУЩЕМ («I'm working tomorrow»). Cambridge
 *   помечает свой список прямо: «not with future reference». Значит и мы не
 *   берём.
 * — ГЛАГОЛЫ, КОТОРЫЕ В ЭТОЙ ФОРМЕ НЕ УПОТРЕБЛЯЮТСЯ (`know`, `like`). Источник
 *   говорит о «limited range of verbs», не называя списка, поэтому модуль
 *   держится глаголов действия и об исключениях молчит.
 */
const module: Module = {
  slug: "pryamo-seychas",
  title: "Прямо сейчас",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, PRESENT present continuous, «FORM: AFFIRMATIVE»: «Can use the affirmative " +
        "form», пример источника — «I am sending you some flowers, because you are not " +
        "well». " +
        "A1, PRESENT present continuous, «USE: EVENTS IN PROGRESS»: «Can use the present " +
        "continuous with a limited range of verbs to talk about situations and events in " +
        "progress», пример источника — «We are missing you». " +
        "A2, PRESENT present continuous, «FORM: NEGATIVE»: «Can use the negative " +
        "form», пример источника — «[talking about a computer] I'm not using it any " +
        "more» — это ступень урока 6, взята сверх и объявлена в шапке модуля. " +
        "В прежней редакции цитата стояла во множественном числе, «negative forms»; " +
        "в источнике единственное. Нашёл методист. " +
        "A2, QUESTIONS yes/no, «FORM: AUXILIARY 'BE'»: «Can use auxiliary 'be' + " +
        "subject + the '-ing' form (continuous form) to form 'yes/no' questions», " +
        "пример источника — «Are you going to come?» — это вопрос Are you working? " +
        "из урока 7. " +
        "A2, QUESTIONS wh-, «FORM: WITH AUXILIARY 'BE'»: «Can use 'wh-'words + " +
        "auxiliary 'be' to form 'wh-'questions», пример источника — «Who are you " +
        "going with?» — это вопрос What are you doing? из того же урока. " +
        "ПЕРВАЯ РЕДАКЦИЯ подпирала оба вопроса строкой «FORM: QUESTIONS» из " +
        "подкатегории present continuous. Ступень она называет ту же, но говорит " +
        "только о вопросах с вопросительным словом и притом в письмах, а вопроса " +
        "Are you working? не описывает вовсе. Нашёл методист. " +
        "A2, PRONOUNS subject/object, «FORM: (SUBJECT) EMPTY 'IT'»: «Can use 'it' as " +
        "an empty subject when there is nothing else to put in subject position, " +
        "particularly with weather or time», пример источника — «It's warm and " +
        "windy» — это It is raining, взято сверх и объявлено в шапке модуля",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, Grammar and Structures List ступени Pre A1 Starters, строка «Present " +
        "continuous (not with future reference)» с примерами «What are you doing?» и " +
        "«The cat's sleeping». Заголовок графы там — «Verbs (Positive, negative, " +
        "question, imperative and short-answer forms, including contractions)», то есть " +
        "отрицание, вопрос и краткий ответ у Cambridge стоят на той же ступени. " +
        "с. 76, Speaking Part 3, совет к устной части: «the present continuous tense of " +
        "some action verbs (for example: come, go, buy, put on, carry, open, laugh)». " +
        "ПЕРВАЯ РЕДАКЦИЯ приписывала вторую цитату странице 76 и ступени A2 Flyers. " +
        "Обе пометы неверны: списка A2 Flyers это не касается вовсе (он на с. 77 и " +
        "настоящего длительного не содержит). Нашёл методист. " +
        "Помета «not with future reference» — прямое основание не брать в модуль " +
        "настоящее длительное о будущем",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: now, dance, sing, sit, stand, wait, open, rain, " +
        "а также do («do1 v., auxiliary v. A1») и outside как наречие («outside adv. A1»; " +
        "как предлог и прилагательное оно A2, но модуль берёт наречие: waiting outside). " +
        "Проверено построчно по выгрузке словника. ПРЕЖНЯЯ РЕДАКЦИЯ писала «все слова» и " +
        "перечисляла восемь из десяти: do и outside в список не попали, и следующий " +
        "проверяющий их бы не сверил. Нашёл методист",
      license: "внутреннее использование",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 62, Overall oral production, A1: «Can produce simple, mainly isolated " +
        "phrases about people and places» — это задание урока 8, где рассказ " +
        "произносится вслух. " +
        "с. 66, Overall written production, A1: «Can produce simple isolated phrases " +
        "and sentences» — это остальные задания урока 8 и вопросы работы по " +
        "восьмому итогу: они письменные. Разделение по разбору методиста: прежде " +
        "весь урок 8 опирался на графу об устной речи, хотя письменных заданий в " +
        "нём четыре из пяти. " +
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves " +
        "and other people…» — это урок 7, где спрашивают и отвечают. " +
        "ПЕРВАЯ РЕДАКЦИЯ подпирала уроком 8 графу об обмене вопросами, хотя урок 8 — " +
        "монолог. Нашёл методист",
      license: "внутреннее использование, публично не называем",
    },
  ],

  outcomes: [
    "говорить, что делаешь прямо сейчас: I am working",
    "говорить, что делает другой человек: He is working",
    "писать окончание -ing без ошибок: make — making, sit — sitting",
    "различать «сейчас» и «всегда»: I'm working — I work",
    "говорить о нескольких: We are waiting",
    "отрицать происходящее: I'm not working",
    "спрашивать, что происходит: What are you doing?",
    "рассказывать, что происходит вокруг",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "seychas-ya-delayu",
      title: "Прямо сейчас: I am working",
      estimatedMinutes: 15,
      outcome: "говорить, что делаешь прямо сейчас: I am working",

      blocks: [
        {
          id: "zachem-seychas",
          kind: "explain",
          text: [
            "Ты умеешь сказать I work in a shop — я работаю в магазине. Это про твою " +
              "работу вообще: и вчера, и сегодня, и завтра.",
            "А сейчас, в эту минуту, ты не в магазине: ты дома и работаешь за " +
              "компьютером. Сказать «я работаю» об этой минуте прежними словами не выйдет.",
            "Для этого есть отдельная запись: I am working. Она говорит не о твоей " +
              "работе вообще, а о том, что идёт в эту минуту.",
            "Это время называется Present Continuous.",
          ],
        },
        {
          id: "pravilo-ne-slomalos",
          kind: "note",
          tone: "info",
          text:
            "В модуле «Что я делаю» сказано: форма be и действие вместе не идут, «I am " +
            "work» — ошибка.\n\nПравило верно и здесь. Глагол без окончания — work, " +
            "read, wait — с формой be по-прежнему не ставят.\n\nWorking — уже не голый " +
            "глагол: у него есть окончание -ing. Перед ним am стоит по праву.",
        },
        {
          id: "tablica-seychas",
          kind: "table",
          caption: "Вообще и прямо сейчас",
          head: ["Английский", "Перевод", "О чём"],
          rows: [
            ["I work in a shop.", "Я работаю в магазине.", "о работе вообще"],
            ["I am working now.", "Я работаю прямо сейчас.", "о том, что идёт сейчас"],
            ["I am work now.", "—", "так сказать нельзя"],
          ],
        },
        {
          id: "iz-chego-sostoit",
          kind: "explain",
          text: [
            "Запись складывается из двух частей: форма be и глагол с окончанием -ing.",
            "I am working. Сначала I, потом am, потом working.",
            "Обе части обязательны. Без формы be выйдет «I working», без окончания — " +
              "«I am work», и то и другое неверно.",
          ],
        },
        {
          id: "primer-seychas",
          kind: "example",
          caption: "Что происходит в эту минуту",
          text: "I am working now.\nI am reading a book.\nI am waiting.",
          explain:
            "Во всех трёх после I стоит am, а глагол оканчивается на -ing. Слово now " +
            "можно и не говорить: сама запись уже сообщает, что дело идёт сейчас.",
        },
        {
          id: "zapis-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай две записи подряд",
          transcript: "I work in a shop. I am working now.",
        },
        {
          id: "slovar-seychas",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "now", translation: "сейчас", example: "I am working now.", hint: "/naʊ/" },
            { term: "wait", translation: "ждать", example: "I am waiting.", hint: "/weɪt/" },
            { term: "sit", translation: "сидеть", example: "I am sitting here.", hint: "/sɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-am",
          kind: "gap",
          prompt: "Ты работаешь прямо сейчас. Допиши недостающее слово.",
          before: "I ",
          after: " working now.",
          answer: "am",
          accept: ["Am"],
          hint: "Форма be, которая идёт со словом I.",
          why: "I am working now. Без формы be выйдет «I working», а так не говорят.",
        },
        {
          id: "z2-vybrat-zapis",
          kind: "choice",
          prompt: "Ты читаешь книгу прямо сейчас. Как сказать?",
          options: [
            { text: "I am read a book." },
            { text: "I am reading a book.", correct: true },
            { text: "I reading a book." },
          ],
          hint: "Нужны обе части: форма be и окончание.",
          why:
            "I am reading a book. В первом варианте нет окончания, во втором — формы be. " +
            "Нужны обе.",
        },
        {
          id: "z3-otmetit-nepolnye",
          kind: "hottext",
          prompt: "Отметь записи, где не хватает одной из двух частей.",
          parts: [
            { text: "I am waiting.", selectable: true },
            { text: " · " },
            { text: "I waiting.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am sitting here.", selectable: true },
            { text: " · " },
            { text: "I am sit here.", selectable: true, correct: true },
          ],
          hint: "В одной записи потеряна форма be, в другой — окончание.",
          why:
            "«I waiting» — без формы be. «I am sit here» — без окончания -ing. Верно: " +
            "I am waiting, I am sitting here.",
        },
        {
          id: "z4-sobrat-seychas",
          kind: "order",
          // Слово now из этой сборки убрано нарочно: оно свободно встаёт и в начало
          // предложения, а задание на сборку принимает ровно один порядок слов.
          prompt: "Собери предложение: «Я жду здесь.»",
          items: ["waiting", "I", "here", "am"],
          answer: [1, 3, 0, 2],
          hint: "Вторым идёт форма be, третьим — глагол с окончанием.",
          why: "I am waiting here. Сначала I, потом am, потом waiting.",
        },
        {
          id: "z5-napisat-o-sebe-seychas",
          kind: "short",
          prompt: "Напиши, что ты сидишь здесь прямо сейчас. Сидеть — sit, здесь — here.",
          answer: "I am sitting here now.",
          accept: [
            "i am sitting here now.",
            "I am sitting here now",
            "I'm sitting here now.",
            "I am sitting here.",
            "I'm sitting here.",
          ],
          hint: "У глагола sit перед окончанием удваивается последняя буква.",
          why:
            "I am sitting here now. У sit удваивается t: sitting. Об этом подробнее в " +
            "уроке «Как пишется -ing».",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-delaet-seychas",
      title: "Он делает сейчас: He is working",
      estimatedMinutes: 13,
      outcome: "говорить, что делает другой человек: He is working",

      blocks: [
        {
          id: "zachem-o-drugom-seychas",
          kind: "explain",
          text: [
            "О себе ты уже говоришь: I am working. Теперь о брате.",
            "Меняется только форма be: со словом he идёт is, а не am.",
            "He is working. Окончание -ing остаётся на месте.",
          ],
        },
        {
          id: "tablica-formy-be-seychas",
          kind: "table",
          caption: "Форма be по тому, о ком речь",
          head: ["О ком", "Форма be", "Пример"],
          rows: [
            ["I", "am", "I am working."],
            ["he, she", "is", "He is working."],
            ["we, they", "are", "They are working."],
          ],
        },
        {
          id: "okonchanie-ne-menyaetsya",
          kind: "explain",
          text: [
            "В рассказе о привычных делах глагол о третьем человеке берёт окончание -s: " +
              "he works.",
            "Здесь этого нет. Окончание -ing одно на всех, а разницу показывает форма be.",
            "He works — о работе вообще. He is working — о том, что идёт сейчас.",
          ],
        },
        {
          id: "ne-dva-okonchaniya",
          kind: "note",
          tone: "mistake",
          text:
            "«He is works» — так не говорят.\n\nОкончание -s сюда не приходит вовсе: " +
            "о том, кто действует, уже сказала форма is. При форме be у глагола " +
            "стоит окончание -ing.",
        },
        {
          id: "primer-o-drugom-seychas",
          kind: "example",
          caption: "Что делают другие",
          text: "He is working now.\nShe is reading.\nMy brother is waiting.",
          explain:
            "Во всех трёх стоит is, потому что речь об одном другом человеке. Глагол " +
            "везде с окончанием -ing и без -s.",
        },
        {
          id: "zapis-o-drugom-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай о себе и о нём",
          transcript: "I am working. He is working. She is reading.",
        },
        {
          id: "slovar-o-drugom-seychas",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "stand", translation: "стоять", example: "He is standing here.", hint: "/stænd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-is",
          kind: "gap",
          prompt: "Твой брат работает прямо сейчас. Допиши недостающее слово.",
          before: "My brother ",
          after: " working now.",
          answer: "is",
          accept: ["Is"],
          hint: "Об одном другом человеке — форма is.",
          why: "My brother is working now. С he, she и с именем идёт is.",
        },
        {
          id: "z2-vybrat-formu",
          kind: "choice",
          prompt: "Она поёт прямо сейчас. Как сказать?",
          options: [
            { text: "She am singing." },
            { text: "She is sings." },
            { text: "She is singing.", correct: true },
          ],
          hint: "Форма be — по тому, о ком речь; окончание у глагола одно.",
          why:
            "She is singing. Am идёт только с I, а окончание -s сюда не приходит: о том, " +
            "кто действует, уже сказала форма is.",
        },
        {
          id: "z3-otmetit-lishnee-s",
          kind: "hottext",
          prompt: "Отметь записи, где у глагола стоит -s вместо окончания -ing.",
          parts: [
            { text: "He is working.", selectable: true },
            { text: " · " },
            { text: "He is works.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is standing.", selectable: true },
            { text: " · " },
            { text: "She is stands.", selectable: true, correct: true },
          ],
          hint: "При форме be у глагола всегда окончание -ing.",
          why:
            "В «He is works» и «She is stands» у глагола стоит -s, а нужно окончание " +
            "-ing. Верно: He is working, She is standing.",
        },
        {
          id: "z4-perestroit-na-nego",
          kind: "short",
          prompt: "Скажи то же самое о сестре: I am waiting. Сестра — my sister.",
          answer: "My sister is waiting.",
          accept: ["my sister is waiting.", "My sister is waiting", "My sister's waiting."],
          hint: "Меняется только форма be.",
          why: "My sister is waiting. Am заменилось на is, окончание -ing осталось.",
        },
        {
          id: "z5-sobrat-o-nyom",
          kind: "order",
          prompt: "Собери предложение: «Мой брат читает книгу.»",
          items: ["a", "book", "My brother", "reading", "is"],
          answer: [2, 4, 3, 0, 1],
          hint: "Вторым идёт форма be, третьим — глагол с окончанием.",
          why: "My brother is reading a book. Форма is, потом глагол, потом всё остальное.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-pishetsya-ing",
      title: "Как пишется -ing",
      estimatedMinutes: 14,
      outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",

      blocks: [
        {
          id: "zachem-pravila-ing",
          kind: "explain",
          text: [
            // Урок открывался обзором правила: сколько видов глаголов и что в них
            // меняется. Правило понятности требует сначала случай. Взят случай,
            // который ученик уже может произвести сам и на котором ошибётся.
            "Ты умеешь сказать I am working. Скажи то же самое про sit — «я сижу».",
            "Если получилось I am siting, вышла ошибка: правильно I am sitting, с двумя t. " +
              "А если бы речь шла про make, лишней оказалась бы, наоборот, буква: не " +
              "makeing, а making.",
            "У большинства глаголов окончание просто приписывается: work — working, " +
              "read — reading, wait — waiting. Разберём два случая, где это не так.",
          ],
        },
        {
          id: "tablica-ing",
          kind: "table",
          caption: "Три случая",
          head: ["Какой глагол", "Что происходит", "Пример"],
          rows: [
            ["обычный", "окончание приписывается", "work — working"],
            ["кончается на e", "e уходит", "make — making"],
            ["в один слог и на конце один согласный", "согласный удваивается", "sit — sitting"],
          ],
        },
        {
          id: "bukva-e-uhodit",
          kind: "explain",
          text: [
            "Если глагол кончается на e, эта буква уходит: make — making, dance — dancing.",
            "Писать makeing нельзя: уходит именно конечная e, которую и так не читают.",
          ],
        },
        {
          id: "soglasnyy-udvaivaetsya",
          kind: "note",
          tone: "info",
          text:
            "Удвоение нужно у коротких глаголов в один слог. У тех, где на конце " +
            "один согласный, а перед ним один гласный: sit — sitting, " +
            "run — running.\n\nСлог — часть слова с одним гласным звуком: в sit слог " +
            "один, в open — два, o-pen.\n\nЕсли на конце два согласных, удвоения нет: " +
            "work — working, stand — standing, sing — singing.\n\nЕсли перед " +
            "согласным два гласных, удвоения тоже нет: wait — waiting, " +
            "read — reading.\n\nВ слове open два слога, и оно сюда не подходит: " +
            "opening.\n\nЗачем это нужно: без удвоения слово читалось бы иначе, ведь " +
            "sit и site — разные слова.",
        },
        {
          id: "primer-ing",
          kind: "example",
          caption: "Три глагола рядом",
          text: "work — working\nmake — making\nsit — sitting",
          explain:
            "У work окончание приписано без изменений. У make ушла буква e. У sit " +
            "удвоилась t.",
        },
        {
          id: "zapis-ing",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три глагола с окончанием",
          transcript: "working, making, sitting",
        },
        {
          id: "slovar-ing",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "make", translation: "делать, готовить", example: "She is making tea.", hint: "/meɪk/" },
            { term: "dance", translation: "танцевать", example: "She is dancing.", hint: "/dɑːns/" },
            { term: "open", translation: "открывать", example: "He is opening the door.", hint: "/ˈəʊpən/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-making",
          kind: "gap",
          prompt: "Глагол make с окончанием -ing. Допиши форму.",
          before: "She is ",
          after: " tea.",
          answer: "making",
          accept: ["Making"],
          hint: "Буква e перед окончанием уходит.",
          why: "She is making tea. У make уходит e: making, а не makeing.",
        },
        {
          id: "z2-vybrat-sitting",
          kind: "choice",
          prompt: "Какая запись верна?",
          options: [
            { text: "openning" },
            { text: "danceing" },
            { text: "sitting", correct: true },
          ],
          hint: "Удвоение нужно у коротких глаголов в один слог с одним согласным на конце.",
          why:
            "Sitting. Глагол sit в один слог и кончается на один согласный, поэтому t " +
            "удваивается. В openning удвоение лишнее: в open два слога, верно " +
            "opening. В danceing не ушла " +
            "буква e, верно dancing.",
        },
        {
          id: "z3-otmetit-oshibki-ing",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой в окончании.",
          parts: [
            { text: "working", selectable: true },
            { text: " · " },
            { text: "makeing", selectable: true, correct: true },
            { text: " · " },
            { text: "dancing", selectable: true },
            { text: " · " },
            { text: "siting", selectable: true, correct: true },
          ],
          hint: "В одной записи не ушла буква e, в другой не удвоился согласный.",
          why: "Верно: making и sitting. Working и dancing написаны без ошибок.",
        },
        {
          id: "z4-sopostavit-ing",
          kind: "match",
          prompt: "Сопоставь глагол и его форму с окончанием.",
          left: ["make", "sit", "wait"],
          right: ["waiting", "making", "sitting"],
          answer: [1, 2, 0],
          hint: "У одного уходит буква, у другого удваивается.",
          why: "Make — making, sit — sitting, wait — waiting.",
        },
        {
          id: "z5-napisat-dancing",
          kind: "short",
          prompt: "Напиши, что она танцует прямо сейчас. Танцевать — dance.",
          answer: "She is dancing.",
          accept: [
            "she is dancing.",
            "She is dancing",
            "She is dancing now.",
            "She's dancing.",
            "She's dancing now.",
          ],
          hint: "У dance перед окончанием уходит буква e.",
          why: "She is dancing. Буква e ушла: dancing, а не danceing.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "seychas-ili-vsegda",
      title: "Сейчас или всегда",
      estimatedMinutes: 15,
      outcome: "различать «сейчас» и «всегда»: I'm working — I work",

      blocks: [
        {
          id: "zachem-razlichenie-seychas",
          kind: "explain",
          text: [
            "Теперь у тебя два способа сказать «я работаю», и они значат разное.",
            "I work — о работе вообще: такая у тебя работа. I am working — о том, что " +
              "идёт в эту минуту.",
            "Разница видна на примере: I work in a shop, but now I am reading a book. " +
              "Работа в магазине, а прямо сейчас — книга.",
          ],
        },
        {
          id: "tablica-razlicheniya-seychas",
          kind: "table",
          caption: "Два способа рядом",
          head: ["Английский", "Перевод", "Когда так говорят"],
          rows: [
            ["I work on Monday.", "По понедельникам я работаю.", "так заведено"],
            ["I am working now.", "Я работаю прямо сейчас.", "идёт в эту минуту"],
            ["He reads books.", "Он читает книги.", "вообще, всегда"],
            ["He is reading a book.", "Он читает книгу.", "прямо сейчас"],
          ],
        },
        {
          id: "slova-podskazki",
          kind: "explain",
          text: [
            "Выбрать помогает слово рядом.",
            "Со словами о частоте — always, usually, on Monday — идёт запись о делах " +
              "вообще: I always work on Monday.",
            "Со словом now — запись о том, что идёт сейчас: I am working now.",
          ],
        },
        {
          id: "ne-pereputay",
          kind: "note",
          tone: "mistake",
          text:
            "«I am working on Monday every week» — так не говорят.\n\nЕсли дело " +
            "повторяется, нужна запись о делах вообще: I work on Monday every week.",
        },
        {
          id: "primer-razlicheniya-seychas",
          kind: "example",
          caption: "Один человек, две записи",
          text:
            "I work in a shop.\nBut now I am sitting at home.\nMy sister sings well.\nShe is singing now.",
          explain:
            "Первая и третья строки — о том, что вообще так. Вторая и четвёртая — о том, " +
            "что идёт в эту минуту. Разницу задаёт сама запись, а слова now и but эту " +
            "разницу только подчёркивают.",
        },
        {
          id: "zapis-razlicheniya-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай две записи подряд",
          transcript: "I work in a shop. But now I am sitting at home.",
        },
        {
          id: "slovar-razlicheniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "rain", translation: "идти о дожде", example: "It is raining now.", hint: "/reɪn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-zapis-po-slovu",
          kind: "choice",
          // Слова every week стоят во всех трёх вариантах нарочно. Без них
          // «I am working on Monday» — верное предложение о ближайшем понедельнике,
          // и объявлять его ошибкой нельзя.
          prompt: "Ты работаешь по понедельникам каждую неделю. Как сказать?",
          options: [
            { text: "I am working on Monday every week." },
            { text: "I work on Monday every week.", correct: true },
            { text: "I am work on Monday every week." },
          ],
          hint: "Слова every week говорят, что дело повторяется.",
          why:
            "I work on Monday every week. О повторяющемся говорят записью о делах " +
            "вообще, без формы be и без окончания -ing.",
        },
        {
          id: "z2-vybrat-seychas",
          kind: "choice",
          prompt: "Прямо сейчас идёт дождь. Как сказать?",
          options: [
            { text: "It is raining now.", correct: true },
            { text: "It rains now." },
            { text: "It is rain now." },
          ],
          hint: "Слово now говорит, что дело идёт в эту минуту.",
          why:
            "It is raining now. Со словом now нужна запись о происходящем: форма be и " +
            "окончание -ing.",
        },
        {
          id: "z3-otmetit-pereputannye-seychas",
          kind: "hottext",
          prompt: "Отметь записи, где выбран не тот способ.",
          parts: [
            { text: "I always work on Monday.", selectable: true },
            { text: " · " },
            { text: "I am reading in the evening every day.", selectable: true, correct: true },
            { text: " · " },
            { text: "It is raining now.", selectable: true },
            { text: " · " },
            { text: "It rains now.", selectable: true, correct: true },
          ],
          hint: "Слова every day говорят о повторении, слово now — о минуте.",
          why:
            "О повторяющемся говорят записью о делах вообще: I read in the evening " +
            "every day. Со словом now — о происходящем: It is raining now.",
        },
        {
          id: "z4-dopisat-po-slovu",
          kind: "gap",
          prompt: "Ты обычно читаешь по вечерам. Допиши глагол в нужном виде.",
          before: "I usually ",
          after: " in the evening.",
          answer: "read",
          accept: ["Read"],
          hint: "Слово usually говорит о том, что заведено.",
          why: "I usually read in the evening. О заведённом говорят глаголом без окончания -ing.",
        },
        {
          id: "z5-dve-zapisi",
          kind: "short",
          prompt:
            "Напиши два предложения: ты работаешь в магазине вообще, но прямо сейчас " +
            "сидишь дома. Дома — at home.",
          answer: "I work in a shop. Now I am sitting at home.",
          accept: [
            "i work in a shop. now i am sitting at home.",
            "I work in a shop. Now I'm sitting at home.",
            "I work in a shop. I am sitting at home now.",
            "I work in a shop. I'm sitting at home now.",
            // Урок сам показывает оба образца — с точкой и со словом but. Ученик,
            // списавший строение с примера, обязан получить «верно».
            "I work in a shop. But now I am sitting at home.",
            "I work in a shop. But now I'm sitting at home.",
            "I work in a shop, but now I am sitting at home.",
            "I work in a shop, but now I'm sitting at home.",
          ],
          hint: "В первом предложении глагол без окончания, во втором — форма be и -ing.",
          why:
            "I work in a shop. Now I am sitting at home. Первое — о работе вообще, " +
            "второе — о том, что идёт сейчас.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "my-i-oni-seychas",
      title: "Мы и они сейчас",
      estimatedMinutes: 12,
      outcome: "говорить о нескольких: We are waiting",

      blocks: [
        {
          id: "zachem-neskolko-seychas",
          kind: "explain",
          text: [
            "Если людей несколько, меняется всё та же одна часть — форма be.",
            "Со словами we, you и they идёт are: We are waiting. They are working.",
            "Окончание -ing остаётся прежним.",
          ],
        },
        {
          id: "tablica-neskolko-seychas",
          kind: "table",
          caption: "Все три формы вместе",
          head: ["О ком", "Форма be", "Пример"],
          rows: [
            ["I", "am", "I am waiting."],
            ["he, she, it", "is", "She is waiting."],
            ["we, you, they", "are", "We are waiting."],
          ],
        },
        {
          id: "imena-vo-mnozhestvennom",
          kind: "explain",
          text: [
            "Форма are идёт не только со словом they, но и там, где подлежащее " +
              "называет нескольких людей.",
            "My friends are waiting. Alim and Dana are working.",
            "Считать надо людей, а не слова: my friends — это несколько человек, значит are.",
          ],
        },
        {
          id: "oshibka-is-pri-mnogih",
          kind: "note",
          tone: "mistake",
          text:
            "«My friends is waiting» — так не говорят.\n\nДрузей несколько, значит нужна " +
            "форма are: My friends are waiting.",
        },
        {
          id: "primer-neskolko-seychas",
          kind: "example",
          caption: "Что делают несколько человек",
          text: "We are waiting.\nThey are working now.\nMy friends are sitting here.",
          explain:
            "Во всех трёх стоит are, потому что речь о нескольких. Глагол с окончанием " +
            "-ing и без всяких добавок.",
        },
        {
          id: "zapis-neskolko-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай об одном и о нескольких",
          transcript: "She is waiting. They are waiting. My friends are working.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-are",
          kind: "gap",
          prompt: "Твои друзья ждут прямо сейчас. Допиши недостающее слово.",
          before: "My friends ",
          after: " waiting.",
          answer: "are",
          accept: ["Are"],
          hint: "Друзей несколько.",
          why: "My friends are waiting. О нескольких людях — форма are.",
        },
        {
          id: "z2-odin-ili-neskolko-seychas",
          kind: "choice",
          prompt: "Алим и Дана работают прямо сейчас. Как сказать?",
          options: [
            { text: "Alim and Dana is working." },
            { text: "Alim and Dana are working.", correct: true },
            { text: "Alim and Dana are works." },
          ],
          hint: "Людей двое, а окончание у глагола одно.",
          why:
            "Alim and Dana are working. Людей двое — значит are. Окончание -s сюда не " +
            "приходит.",
        },
        {
          id: "z3-otmetit-formu-be",
          kind: "hottext",
          prompt: "Отметь записи, где форма be не подходит.",
          parts: [
            { text: "They are working.", selectable: true },
            { text: " · " },
            { text: "They is working.", selectable: true, correct: true },
            { text: " · " },
            { text: "We are sitting.", selectable: true },
            { text: " · " },
            { text: "We is sitting.", selectable: true, correct: true },
          ],
          hint: "С we и they идёт одна и та же форма.",
          why: "С we и they идёт are. Верно: They are working, We are sitting.",
        },
        {
          id: "z4-perestroit-na-mnogih",
          kind: "short",
          prompt: "Скажи то же самое о нескольких: He is waiting. Они — they.",
          answer: "They are waiting.",
          accept: ["they are waiting.", "They are waiting", "They're waiting."],
          hint: "Меняется только форма be.",
          why: "They are waiting. Is заменилось на are, окончание осталось.",
        },
        {
          id: "z5-sobrat-o-nas",
          kind: "order",
          prompt: "Собери предложение: «Мы ждём здесь.»",
          items: ["here", "waiting", "We", "are"],
          answer: [2, 3, 1, 0],
          hint: "Вторым идёт форма be.",
          why: "We are waiting here. С we идёт are.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "seychas-ne-delayu",
      title: "Сейчас не делаю",
      estimatedMinutes: 13,
      outcome: "отрицать происходящее: I'm not working",

      blocks: [
        {
          id: "zachem-otricanie-seychas",
          kind: "explain",
          text: [
            "Тебя зовут по делу, а ты в эту минуту делаешь что-то другое.",
            "Отрицание строится не через don't, а через not после формы be: I am not " +
              "working.",
            "Это тот же порядок, что в модуле «Не так»: I am not a doctor. Слово not " +
              "встаёт сразу после формы be.",
          ],
        },
        {
          id: "tablica-otricanie-seychas",
          kind: "table",
          caption: "Утверждение и отрицание",
          head: ["Английский", "Перевод"],
          rows: [
            ["I am working.", "Я работаю сейчас."],
            ["I am not working.", "Я сейчас не работаю."],
            ["He is not waiting.", "Он сейчас не ждёт."],
          ],
        },
        {
          id: "korotkaya-zapis-otricaniya",
          kind: "explain",
          text: [
            "Короткая запись здесь та же, что и прежде: I'm not working, he isn't " +
              "waiting.",
            "Обе записи верны.",
          ],
        },
        {
          id: "ne-dont",
          kind: "note",
          tone: "mistake",
          text:
            "«I don't working» — так не говорят.\n\nСлово don't идёт с глаголом без " +
            "окончания: I don't work. А при форме be отрицает not: I am not working.",
        },
        {
          id: "primer-otricaniya-seychas",
          kind: "example",
          caption: "Чего сейчас не происходит",
          text: "I am not working now.\nShe isn't reading.\nThey aren't waiting.",
          explain:
            "Во всех трёх not стоит сразу после формы be. В двух последних форма и not " +
            "слились в короткую запись.",
        },
        {
          id: "zapis-otricaniya-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай отрицание",
          transcript: "I am not working now. She isn't reading.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-not",
          kind: "gap",
          prompt: "Ты сейчас не работаешь. Допиши недостающее слово.",
          before: "I am ",
          after: " working now.",
          answer: "not",
          accept: ["Not"],
          hint: "Оно встаёт сразу после формы be.",
          why: "I am not working now. При форме be отрицает слово not.",
        },
        {
          id: "z2-vybrat-otricanie-seychas",
          kind: "choice",
          prompt: "Она сейчас не читает. Как сказать?",
          options: [
            { text: "She doesn't reading." },
            { text: "She is not reading.", correct: true },
            { text: "She not is reading." },
          ],
          hint: "Отрицает not, и стоит оно после формы be.",
          why:
            "She is not reading. Doesn't идёт с глаголом без окончания, а порядок «not " +
            "is» перевёрнут.",
        },
        {
          id: "z3-otmetit-dont",
          kind: "hottext",
          prompt: "Отметь записи, где отрицание построено не тем словом.",
          parts: [
            { text: "I am not waiting.", selectable: true },
            { text: " · " },
            { text: "I don't waiting.", selectable: true, correct: true },
            { text: " · " },
            { text: "He isn't working.", selectable: true },
            { text: " · " },
            { text: "He doesn't working.", selectable: true, correct: true },
          ],
          hint: "При форме be отрицает not, а не don't.",
          why:
            "Don't и doesn't идут с глаголом без окончания. Верно: I am not waiting, " +
            "He isn't working.",
        },
        {
          id: "z4-korotkaya-zapis-otr",
          kind: "short",
          prompt: "Запиши короче: He is not waiting.",
          answer: "He isn't waiting.",
          accept: ["he isn't waiting.", "He isn't waiting", "He's not waiting."],
          hint: "Форма be и not сливаются.",
          why: "He isn't waiting. Годится и He's not waiting: сливаться могут обе пары.",
        },
        {
          id: "z5-napisat-otricanie-seychas",
          kind: "short",
          prompt: "Напиши, что ты сейчас не ждёшь.",
          answer: "I am not waiting now.",
          accept: [
            "i am not waiting now.",
            "I'm not waiting now.",
            "I am not waiting.",
            "I'm not waiting.",
          ],
          hint: "После формы be идёт not, потом глагол с окончанием.",
          why: "I am not waiting now. Или короче: I'm not waiting now.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-proishodit",
      title: "Что происходит: What are you doing?",
      estimatedMinutes: 14,
      outcome: "спрашивать, что происходит: What are you doing?",

      blocks: [
        {
          id: "zachem-vopros-seychas",
          kind: "explain",
          text: [
            "Ты звонишь другу и хочешь узнать, чем он сейчас занят.",
            "Вопрос строится тем же способом, что и вопрос с формой be: она выходит " +
              "вперёд. Are you working?",
            "А чтобы спросить «что ты делаешь», перед ней ставят вопросительное слово: " +
              "What are you doing?",
            "Слово do здесь — обычный глагол «делать», и окончание -ing он берёт как " +
              "все: doing. В модуле «Спросить о делах» то же самое do открывало вопрос " +
              "и само не переводилось — здесь у него своё значение.",
          ],
        },
        {
          id: "tablica-voprosa-seychas",
          kind: "table",
          caption: "Два вида вопроса",
          head: ["Английский", "Перевод"],
          rows: [
            ["Are you working?", "Ты сейчас работаешь?"],
            ["Is he waiting?", "Он сейчас ждёт?"],
            ["What are you doing?", "Что ты делаешь?"],
          ],
        },
        {
          id: "poryadok-voprosa-seychas",
          kind: "explain",
          text: [
            "Порядок такой: форма be, потом тот, о ком речь, потом глагол с окончанием.",
            "Are you working? — Are, you, working.",
            "С вопросительным словом оно встаёт впереди всего: What are you doing?",
          ],
        },
        {
          id: "otvet-na-vopros-seychas",
          kind: "note",
          tone: "info",
          text:
            "Короткий ответ здесь такой же, как на вопрос с формой be: Yes, I am. No, " +
            "I'm not.\n\nГлагол в ответе не повторяют.\n\nЕсть похожий на вид " +
            "вопрос — What do you do? из модуля «Спросить о делах».\n\nОн " +
            "спрашивает, кем человек работает. А What are you doing? — что человек " +
            "делает в эту минуту.",
        },
        {
          id: "primer-voprosa-seychas",
          kind: "example",
          caption: "Разговор по телефону",
          text:
            "— Are you working?\n— No, I'm not. I am sitting at home.\n— What are you doing?\n— I am reading a book.",
          explain:
            "Сначала вопрос на да или нет, потом короткий ответ, потом вопрос с " +
            "вопросительным словом и ответ целым предложением.",
        },
        {
          id: "zapis-voprosa-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай два вопроса",
          transcript: "Are you working? What are you doing?",
        },
        {
          id: "slovar-voprosa-seychas",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "do", translation: "делать", example: "What are you doing?", hint: "/duː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-are-v-voprose",
          kind: "gap",
          prompt: "Ты хочешь узнать, работает ли собеседник сейчас. Допиши недостающее слово.",
          before: "",
          after: " you working?",
          answer: "Are",
          accept: ["are"],
          hint: "Вопрос открывает форма be.",
          why: "Are you working? Форма be выходит вперёд, как и в вопросе Are you a doctor?",
        },
        {
          id: "z2-vybrat-poryadok-voprosa-seychas",
          kind: "choice",
          prompt: "Ты хочешь узнать, ждёт ли твой брат. Как спросить?",
          options: [
            { text: "Is your brother waiting?", correct: true },
            { text: "Does your brother waiting?" },
            { text: "Is waiting your brother?" },
          ],
          hint: "Форма be впереди, потом тот, о ком речь.",
          why:
            "Is your brother waiting? Does идёт с глаголом без окончания, а в третьем " +
            "варианте порядок перевёрнут.",
        },
        {
          id: "z3-sobrat-vopros-what",
          kind: "order",
          prompt: "Собери вопрос: «Что ты делаешь?»",
          items: ["doing?", "you", "What", "are"],
          answer: [2, 3, 1, 0],
          hint: "Вопросительное слово впереди всего, за ним форма be.",
          why: "What are you doing? Порядок: What, are, you, doing.",
        },
        {
          id: "z4-otvetit-korotko-seychas",
          kind: "short",
          prompt: "Тебя спросили: Are you working? Ты не работаешь. Ответь коротко — нет.",
          answer: "No, I'm not.",
          accept: ["no, I'm not.", "No, I'm not", "No, I am not."],
          hint: "Глагол в коротком ответе не повторяют.",
          why: "No, I'm not. Или полностью: No, I am not.",
        },
        {
          id: "z5-sprosit-chto-delaet",
          kind: "short",
          prompt: "Спроси у собеседника, что он делает.",
          answer: "What are you doing?",
          accept: ["what are you doing?", "What are you doing"],
          hint: "Четыре слова, первое — вопросительное.",
          why: "What are you doing? После вопросительного слова идёт форма be, потом you.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-vokrug",
      title: "Что происходит вокруг",
      estimatedMinutes: 15,
      outcome: "рассказывать, что происходит вокруг",

      blocks: [
        {
          id: "zachem-rasskaz-seychas",
          kind: "explain",
          text: [
            "Друг звонит и спрашивает, что у тебя происходит. Одним предложением тут " +
              "не обойтись.",
            "Он ждёт нескольких: что делаешь ты, что делают рядом другие, что за " +
              "окном.",
            "Из таких трёх-четырёх предложений и выходит рассказ.",
          ],
        },
        {
          id: "shagi-rasskaza-seychas",
          kind: "table",
          caption: "Из чего складывается рассказ",
          head: ["Что сказать", "Пример"],
          rows: [
            ["что делаешь ты", "I am sitting at home."],
            ["что делает другой", "My sister is reading."],
            ["что делают несколько", "My friends are waiting."],
            ["что происходит вокруг", "It is raining."],
          ],
        },
        {
          id: "forma-be-menyaetsya",
          kind: "explain",
          text: [
            "В рассказе меняется только форма be: am о себе, is об одном другом, are о " +
              "нескольких.",
            "Окончание -ing остаётся одним и тем же во всех предложениях.",
          ],
        },
        {
          id: "chereduy-lica",
          kind: "note",
          tone: "info",
          text:
            "Рассказ только про себя выходит однообразным.\n\nСкажи и о других: о " +
            "сестре, о друзьях, о погоде за окном.",
        },
        {
          id: "primer-rasskaza-seychas",
          kind: "example",
          caption: "Что происходит прямо сейчас",
          text:
            "I am sitting at home.\nI am reading a book.\nMy sister is singing.\nMy friends are waiting outside.\nIt is raining.",
          explain:
            "Пять предложений и три разные формы be. Окончание -ing во всех пяти одно и " +
            "то же.",
        },
        {
          id: "zapis-rasskaza-seychas",
          kind: "audio",
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "I am sitting at home. My sister is singing. My friends are waiting. It is raining.",
        },

        {
          id: "slovar-vokrug",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "outside", translation: "снаружи, на улице", example: "They are waiting outside.", hint: "/ˌaʊtˈsaɪd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-seychas",
          kind: "order",
          prompt: "Собери рассказ: сначала о себе, потом о сестре, потом о погоде.",
          items: ["It is raining.", "I am sitting at home.", "My sister is singing."],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии.",
          why: "I am sitting at home. My sister is singing. It is raining.",
        },
        {
          id: "z2-tri-predlozheniya-seychas",
          kind: "short",
          prompt:
            "Напиши два предложения: ты сейчас читаешь книгу, а твоя сестра сейчас " +
            "поёт. Сестра — my sister.",
          answer: "I am reading a book. My sister is singing.",
          accept: [
            "i am reading a book. my sister is singing.",
            "I'm reading a book. My sister is singing.",
            "I am reading a book. My sister's singing.",
            "I'm reading a book. My sister's singing.",
          ],
          hint: "О себе — am, об одном другом человеке — is.",
          why:
            "I am reading a book. My sister is singing. Форма be разная, окончание -ing " +
            "одно и то же.",
        },
        {
          id: "z3-o-druzyah-seychas",
          kind: "gap",
          // Пропуск нарочно не на форме be: точно такое же задание уже стоит в
          // уроке «Мы и они сейчас», и второй раз оно ничему не учит.
          prompt: "Твои друзья сейчас ждут на улице. Допиши глагол с окончанием.",
          before: "My friends are ",
          after: " outside.",
          answer: "waiting",
          hint: "Форма be уже стоит, дело за глаголом.",
          why: "My friends are waiting outside. При форме be у глагола окончание -ing.",
        },
        {
          id: "z4-pogoda-seychas",
          kind: "short",
          prompt: "Напиши, что сейчас идёт дождь.",
          answer: "It is raining.",
          accept: [
            "it is raining.",
            "It is raining",
            "It's raining.",
            "It is raining now.",
            "It's raining now.",
          ],
          hint: "О погоде говорят через it.",
          why: "It is raining. О погоде говорят через it, как и о времени.",
        },
        {
          id: "z5-rasskaz-vsluh-seychas",
          kind: "speak",
          prompt: "Расскажи вслух, что происходит вокруг тебя прямо сейчас: три предложения.",
          phrase: "I am sitting at home. My sister is singing. It is raining.",
          translation: "Я сижу дома. Моя сестра поёт. Идёт дождь.",
          hint: "Форма be меняется по тому, о ком речь, окончание -ing остаётся.",
          why:
            "Три предложения, три формы be, одно окончание. Так и строится рассказ о " +
            "происходящем.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа не повторяет задания уроков: у каждого вопроса своё положение,
      // свой глагол и свой пропущенный кусок. Ученик, который выучил задания
      // наизусть, работу так не сдаст — она проверяет умение, а не память.
      //
      // В списках accept стоят только по-настоящему другие записи — краткие
      // формы и другой порядок слов. Заглавные буквы и точка в конце ответа
      // сверкой и так не учитываются, повторять их незачем.

      // ---- итог 1 ----
      {
        id: "q-seychas-dopisat",
        kind: "gap",
        outcome: "говорить, что делаешь прямо сейчас: I am working",
        prompt: "Прямо сейчас ты работаешь. Допиши глагол с окончанием. Работать — work.",
        before: "I am ",
        after: " now.",
        answer: "working",
        hint: "Слово am на месте — не хватает окончания у глагола.",
        why: "I am working now. При форме be у глагола всегда окончание -ing.",
      },
      {
        id: "q-seychas-vybor",
        kind: "choice",
        outcome: "говорить, что делаешь прямо сейчас: I am working",
        prompt: "Ты сейчас поёшь. В каком предложении нет ошибки?",
        options: [
          { text: "I is singing." },
          { text: "I singing." },
          { text: "I am singing.", correct: true },
        ],
        hint: "Со словом I идёт своя форма be, и без неё запись неполна.",
        why:
          "I am singing. Со словом I идёт am, а не is. Без формы be запись неполна: " +
          "«I singing» так не говорят.",
      },
      {
        id: "q-seychas-sobrat",
        kind: "order",
        outcome: "говорить, что делаешь прямо сейчас: I am working",
        // «I am reading a book» напечатано в модуле четыре раза целым предложением:
        // в примере урока 1, в разговоре урока 7, в примере и в ответе урока 8.
        // Ученик расставлял слова по памяти рисунка. Взято другое предложение.
        prompt: "Собери предложение: «Я открываю дверь.»",
        items: ["the", "opening", "door", "I", "am"],
        answer: [3, 4, 1, 0, 2],
        hint: "Начни с того, кто говорит, и не разрывай the door.",
        why: "I am opening the door. Сначала I, потом am, потом глагол с окончанием.",
      },

      // ---- итог 2 ----
      {
        id: "q-drugoy-seychas-vybor",
        kind: "choice",
        outcome: "говорить, что делает другой человек: He is working",
        prompt: "Твой друг сейчас танцует. В каком предложении нет ошибки?",
        options: [
          { text: "My friend is dancing.", correct: true },
          { text: "My friend is dances." },
          { text: "My friend dancing." },
        ],
        hint: "Нужны обе части: форма be и окончание -ing.",
        why:
          "My friend is dancing. При форме be глагол берёт окончание -ing, а -s сюда " +
          "не приходит. Без формы be запись неполна.",
      },
      {
        id: "q-drugoy-seychas-otmetit",
        kind: "hottext",
        outcome: "говорить, что делает другой человек: He is working",
        prompt: "Отметь записи, где у глагола нет окончания -ing.",
        parts: [
          { text: "He is waiting.", selectable: true },
          { text: " · " },
          { text: "He is waits.", selectable: true, correct: true },
          { text: " · " },
          { text: "She is sing.", selectable: true, correct: true },
          { text: " · " },
          { text: "She is singing.", selectable: true },
        ],
        hint: "Смотри на конец глагола в каждой записи.",
        why:
          "В «He is waits» и «She is sing» окончания нет. Верно: He is waiting, " +
          "She is singing.",
      },
      {
        id: "q-drugoy-seychas-napisat",
        kind: "short",
        outcome: "говорить, что делает другой человек: He is working",
        prompt: "Напиши, что твой брат сейчас поёт. Брат — my brother, петь — sing.",
        answer: "My brother is singing.",
        // Условие говорит «сейчас», поэтому ответ со словом now тоже верен.
        accept: [
          "My brother's singing.",
          "My brother is singing now.",
          "My brother's singing now.",
        ],
        hint: "Брат один, и форма be для него своя.",
        why: "My brother is singing. Брат один, поэтому ему досталась форма is, а к пению прибавилось -ing.",
      },

      // ---- итог 3 ----
      {
        id: "q-ing-dopisat",
        kind: "gap",
        outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
        prompt: "Он сейчас сидит дома. Допиши глагол с окончанием. Сидеть — sit.",
        before: "He is ",
        after: " at home.",
        answer: "sitting",
        hint: "Глагол в один слог и кончается на один согласный.",
        why: "He is sitting at home. У sit удваивается t: sitting, а не siting.",
      },
      {
        id: "q-ing-sopostavit",
        kind: "match",
        outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
        prompt: "Сопоставь глагол и то, как он пишется с окончанием.",
        left: ["dance", "open", "read"],
        right: ["reading", "dancing", "opening"],
        answer: [1, 2, 0],
        hint: "У одного уходит буква e, у двух других окончание приписывается как есть.",
        why: "Dance — dancing, open — opening, read — reading.",
      },
      {
        id: "q-ing-napisat",
        kind: "short",
        outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
        prompt: "Напиши, что он сейчас открывает дверь. Открывать — open, дверь — the door.",
        answer: "He is opening the door.",
        accept: ["He's opening the door."],
        hint: "В слове open два слога, удвоения нет.",
        why:
          "He is opening the door. Согласный удваивается только у коротких глаголов в " +
          "один слог, а в open слогов два.",
      },

      // ---- итог 4 ----
      // Оба вопроса о различении спрашивают о значении, а не «какая запись
      // верна». Так ни одно верное английское предложение не объявляется
      // ошибкой: все три варианта верны, но условию отвечает один.
      {
        id: "q-razlichenie-seychas",
        kind: "choice",
        outcome: "различать «сейчас» и «всегда»: I'm working — I work",
        prompt: "В каком предложении речь о том, что идёт прямо в эту минуту?",
        options: [
          { text: "I read books in the evening." },
          { text: "I am reading a book.", correct: true },
          { text: "I work in a shop." },
        ],
        hint: "О том, что идёт сейчас, говорят формой be и окончанием -ing.",
        why:
          "I am reading a book. Форма be и окончание -ing показывают, что дело идёт в " +
          "эту минуту. Два других предложения — о том, что вообще так.",
      },
      {
        id: "q-razlichenie-vsegda",
        kind: "choice",
        outcome: "различать «сейчас» и «всегда»: I'm working — I work",
        prompt: "В каком предложении речь о том, что повторяется каждый день?",
        options: [
          { text: "It is raining now." },
          { text: "It rains every day.", correct: true },
          { text: "I am sitting at home." },
        ],
        hint: "О том, что повторяется, говорят глаголом без окончания -ing.",
        why:
          "It rains every day. Глагол без формы be и без окончания -ing говорит о том, " +
          "что бывает вообще. Два других предложения — о том, что идёт сейчас.",
      },
      {
        id: "q-razlichenie-dopisat",
        kind: "gap",
        outcome: "различать «сейчас» и «всегда»: I'm working — I work",
        prompt: "Прямо сейчас идёт дождь. Допиши глагол в нужном виде. Идти о дожде — rain.",
        before: "It is ",
        after: " now.",
        answer: "raining",
        hint: "Дождь идёт не вообще, а в эту самую минуту.",
        why: "It is raining now. Со словом now идёт запись о происходящем.",
      },

      // ---- итог 5 ----
      {
        id: "q-neskolko-seychas-dopisat",
        kind: "gap",
        outcome: "говорить о нескольких: We are waiting",
        prompt:
          "Ты и твой друг сейчас стоите на улице. Допиши глагол с окончанием. " +
          "Стоять — stand.",
        before: "We are ",
        after: " outside.",
        answer: "standing",
        hint: "Слово are уже стоит — допиши глагол.",
        why:
          "We are standing outside. Форма be меняется по тому, о ком речь, а окончание " +
          "-ing остаётся прежним.",
      },
      {
        id: "q-neskolko-seychas-vybor",
        kind: "choice",
        outcome: "говорить о нескольких: We are waiting",
        prompt: "В каком предложении форма be выбрана верно?",
        options: [
          { text: "My friends is waiting outside." },
          { text: "My friend are waiting outside." },
          { text: "My friends are waiting outside.", correct: true },
        ],
        hint: "Смотри на окончание -s у слова friend: друг один или друзей несколько.",
        why:
          "My friends are waiting outside. О нескольких идёт are, об одном — is: " +
          "My friend is waiting outside.",
      },
      {
        id: "q-neskolko-seychas-napisat",
        kind: "short",
        outcome: "говорить о нескольких: We are waiting",
        prompt: "Напиши, что твои друзья сейчас танцуют. Друзья — my friends.",
        answer: "My friends are dancing.",
        accept: ["My friends are dancing now."],
        hint: "О нескольких — форма are.",
        why: "My friends are dancing. С we, you, they и с несколькими людьми идёт are.",
      },

      // ---- итог 6 ----
      {
        id: "q-otricanie-seychas-dopisat",
        kind: "gap",
        outcome: "отрицать происходящее: I'm not working",
        prompt: "Она сейчас не читает. Допиши недостающее слово.",
        before: "She ",
        after: " not reading.",
        answer: "is",
        hint: "Сначала форма be, потом not.",
        why: "She is not reading. Слово not встаёт сразу после формы be.",
      },
      {
        id: "q-otricanie-seychas-koroche",
        kind: "short",
        outcome: "отрицать происходящее: I'm not working",
        prompt: "Запиши короче: They are not waiting.",
        answer: "They aren't waiting.",
        accept: ["They're not waiting."],
        hint: "Сливаться могут обе пары слов.",
        why:
          "They aren't waiting. Годится и They're not waiting: сливаться могут либо " +
          "are и not, либо they и are.",
      },
      {
        id: "q-otricanie-seychas-napisat",
        kind: "short",
        outcome: "отрицать происходящее: I'm not working",
        prompt: "Напиши, что твои друзья сейчас не работают. Друзья — my friends.",
        answer: "My friends are not working.",
        accept: [
          "My friends aren't working.",
          "My friends are not working now.",
          "My friends aren't working now.",
        ],
        hint: "Not встаёт сразу после формы be.",
        why: "My friends are not working. Или короче: My friends aren't working.",
      },

      // ---- итог 7 ----
      {
        id: "q-vopros-seychas-dopisat",
        kind: "gap",
        outcome: "спрашивать, что происходит: What are you doing?",
        prompt: "Ты хочешь узнать, поёт ли сейчас твоя сестра. Допиши недостающее слово.",
        before: "",
        after: " your sister singing?",
        answer: "Is",
        hint: "Сестра одна, и вопрос начинается с формы be.",
        why: "Is your sister singing? Форма be выходит вперёд, а за ней идёт тот, о ком речь.",
      },
      {
        id: "q-vopros-seychas-vybor",
        kind: "choice",
        outcome: "спрашивать, что происходит: What are you doing?",
        prompt: "Ты хочешь узнать, что делает твой брат. Как спросить?",
        options: [
          { text: "What is your brother doing?", correct: true },
          { text: "What your brother is doing?" },
          { text: "What is doing your brother?" },
        ],
        hint: "Проверь, что стоит сразу за словом What.",
        why:
          "What is your brother doing? Порядок такой: вопросительное слово, форма be, " +
          "тот, о ком речь, и глагол с окончанием.",
      },
      {
        id: "q-vopros-seychas-sprosit",
        kind: "short",
        outcome: "спрашивать, что происходит: What are you doing?",
        prompt: "Спроси у собеседника, ждут ли сейчас его друзья. Его друзья — your friends.",
        answer: "Are your friends waiting?",
        accept: ["Are your friends waiting now?"],
        hint: "Друзей несколько — выбери для них форму be.",
        why: "Are your friends waiting? Форма be выходит вперёд, а за ней — те, о ком речь.",
      },

      // ---- итог 8 ----
      {
        id: "q-rasskaz-seychas-sobrat",
        kind: "order",
        outcome: "рассказывать, что происходит вокруг",
        prompt: "Собери рассказ: сначала о погоде, потом о себе, потом о брате.",
        items: ["I am sitting at home.", "My brother is singing.", "It is raining."],
        answer: [2, 0, 1],
        hint: "Условие называет порядок прямо.",
        why: "It is raining. I am sitting at home. My brother is singing.",
      },
      {
        id: "q-rasskaz-seychas-napisat",
        kind: "short",
        outcome: "рассказывать, что происходит вокруг",
        prompt:
          "Напиши два предложения: ты сейчас читаешь книгу, а твои друзья сейчас ждут " +
          "на улице. На улице — outside.",
        answer: "I am reading a book. My friends are waiting outside.",
        accept: ["I'm reading a book. My friends are waiting outside."],
        hint: "О себе — am, о нескольких — are.",
        why:
          "I am reading a book. My friends are waiting outside. Ты один, друзей несколько — " +
          "оттого am в первом предложении и are во втором.",
      },
      {
        id: "q-rasskaz-seychas-dopisat",
        kind: "gap",
        outcome: "рассказывать, что происходит вокруг",
        prompt: "Сейчас идёт дождь. Допиши недостающее слово.",
        before: "It ",
        after: " raining.",
        answer: "is",
        hint: "Слово it ведёт себя как he и she.",
        why: "It is raining. С it идёт is — так же, как с he и she.",
      },
    ],
  },
};

export default module;
