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
 *   умения. Второе подтверждение по ступени: руководство Cambridge, с. 76,
 *   описание A2 Flyers — «the present continuous tense of some action verbs
 *   (for example: come, go, buy, put on, carry)»; там же в списке
 *   грамматики — «Present continuous (not with future reference) — What are
 *   you doing?».
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
        "A2, та же подкатегория, «FORM: NEGATIVE» и «FORM: QUESTIONS» — это ступень " +
        "уроков 6 и 7, взята сверх и объявлена в шапке модуля",
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
        "все слова модуля с пометкой A1: now, dance, sing, sit, stand, wait, open, rain. " +
        "Проверено построчно по выгрузке словника",
      license: "внутреннее использование",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 62, Overall oral production, A1: «Can produce simple, mainly isolated " +
        "phrases about people and places» — это урок 8, рассказ из отдельных " +
        "предложений. " +
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
          planned: true,
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
          prompt: "Собери предложение: «Я жду прямо сейчас.»",
          items: ["waiting", "I", "now", "am"],
          answer: [1, 3, 0, 2],
          hint: "Вторым идёт форма be, третьим — глагол с окончанием.",
          why: "I am waiting now. Сначала I, потом am, потом waiting.",
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
            "«He is workings» — так не говорят.\n\nОкончание -s сюда не приходит вовсе: " +
            "о том, кто действует, уже сказала форма is.",
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
          planned: true,
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
            { term: "sing", translation: "петь", example: "She is singing.", hint: "/sɪŋ/" },
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
          prompt: "Отметь записи, где у глагола лишнее окончание -s.",
          parts: [
            { text: "He is working.", selectable: true },
            { text: " · " },
            { text: "He is workings.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is standing.", selectable: true },
            { text: " · " },
            { text: "She is standings.", selectable: true, correct: true },
          ],
          hint: "При форме be окончание -s глаголу не нужно.",
          why:
            "Лишнее -s в «He is workings» и «She is standings». Верно: He is working, " +
            "She is standing.",
        },
        {
          id: "z4-perestroit-na-nego",
          kind: "short",
          prompt: "Скажи то же самое о сестре: I am waiting. Сестра — my sister.",
          answer: "My sister is waiting.",
          accept: ["my sister is waiting.", "My sister is waiting"],
          hint: "Меняется только форма be.",
          why: "My sister is waiting. Am заменилось на is, окончание -ing осталось.",
        },
        {
          id: "z5-sobrat-o-nyom",
          kind: "order",
          prompt: "Собери предложение: «Он стоит здесь.»",
          items: ["standing", "He", "here", "is"],
          answer: [1, 3, 0, 2],
          hint: "Вторым идёт форма be.",
          why: "He is standing here. Форма is, потом глагол с окончанием, потом всё остальное.",
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
            "У большинства глаголов окончание просто приписывается: work — working, " +
              "read — reading, wait — waiting.",
            "Но у двух видов глаголов перед окончанием кое-что меняется. Их и разбираем.",
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
            ["один гласный между согласными", "согласный удваивается", "sit — sitting"],
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
            "Удвоение нужно там, где в глаголе один гласный и он стоит между " +
            "согласными: sit — sitting, run — running.\n\nБез удвоения слово читалось " +
            "бы иначе: sit и site — разные слова.\n\nВ слове open гласных два, и " +
            "удвоения нет: opening.",
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
          planned: true,
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
          prompt: "Глагол sit с окончанием -ing. Какая запись верна?",
          options: [
            { text: "siting" },
            { text: "sitting", correct: true },
            { text: "siteing" },
          ],
          hint: "В глаголе один гласный, и он между согласными.",
          why: "Sitting. У коротких глаголов такого вида последняя буква удваивается.",
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
          accept: ["she is dancing.", "She is dancing", "She is dancing now."],
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
            "что идёт в эту минуту. Разницу задаёт запись, а слова now и but её только " +
            "подчёркивают.",
        },
        {
          id: "zapis-razlicheniya-seychas",
          kind: "audio",
          planned: true,
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
          prompt: "По понедельникам ты работаешь. Как сказать?",
          options: [
            { text: "I am working on Monday." },
            { text: "I work on Monday.", correct: true },
            { text: "I am work on Monday." },
          ],
          hint: "Речь о том, что повторяется, а не о том, что идёт сейчас.",
          why:
            "I work on Monday. О повторяющемся говорят записью о делах вообще, без формы " +
            "be и без окончания -ing.",
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
            { text: "I am working on Monday every week.", selectable: true, correct: true },
            { text: " · " },
            { text: "It is raining now.", selectable: true },
            { text: " · " },
            { text: "It rains now.", selectable: true, correct: true },
          ],
          hint: "Слова every week и every day говорят о повторении, слово now — о минуте.",
          why:
            "О повторяющемся говорят записью о делах вообще: I work on Monday every " +
            "week. Со словом now — о происходящем: It is raining now.",
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
            "Форма are идёт не только со словом they, но и с названием нескольких людей.",
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
          planned: true,
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
          accept: ["they are waiting.", "They are waiting"],
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
            "Тебя зовут по делу, а ты сейчас занят другим.",
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
          planned: true,
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
            "I'm not.\n\nГлагол в ответе не повторяют.",
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
          planned: true,
          pace: "slow",
          caption: "Послушай два вопроса",
          transcript: "Are you working? What are you doing?",
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
            "Отдельное предложение о происходящем рассказом не становится.",
            "Рассказ — это несколько предложений подряд: что делаешь ты, что делают " +
              "другие, что происходит вокруг.",
            "Все части у тебя уже есть. Осталось сложить их в нужном порядке.",
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
            "Рассказ из одних I выходит однообразным.\n\nСкажи и о других: о сестре, о " +
            "друзьях, о погоде за окном.",
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
          planned: true,
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
            "Напиши два предложения: ты читаешь книгу, а твоя сестра поёт. Сестра — my sister.",
          answer: "I am reading a book. My sister is singing.",
          accept: [
            "i am reading a book. my sister is singing.",
            "I'm reading a book. My sister is singing.",
          ],
          hint: "О себе — am, об одном другом человеке — is.",
          why:
            "I am reading a book. My sister is singing. Форма be разная, окончание -ing " +
            "одно и то же.",
        },
        {
          id: "z3-o-druzyah-seychas",
          kind: "gap",
          prompt: "Твои друзья ждут на улице. Допиши недостающее слово.",
          before: "My friends ",
          after: " waiting outside.",
          answer: "are",
          accept: ["Are"],
          hint: "Друзей несколько.",
          why: "My friends are waiting outside. О нескольких — форма are.",
        },
        {
          id: "z4-pogoda-seychas",
          kind: "short",
          prompt: "Напиши, что сейчас идёт дождь.",
          answer: "It is raining.",
          accept: ["it is raining.", "It is raining", "It's raining.", "It is raining now."],
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
    passRatio: 0.7,
    questions: [
      // ---- итог 1 ----
      {
        id: "q-seychas-dopisat",
        kind: "gap",
        outcome: "говорить, что делаешь прямо сейчас: I am working",
        prompt: "Ты ждёшь прямо сейчас. Допиши недостающее слово.",
        before: "I ",
        after: " waiting now.",
        answer: "am",
        accept: ["Am"],
        hint: "Форма be, которая идёт со словом I.",
        why: "I am waiting now. Без формы be запись неполна.",
      },
      {
        id: "q-seychas-vybor",
        kind: "choice",
        outcome: "говорить, что делаешь прямо сейчас: I am working",
        prompt: "Ты сидишь здесь прямо сейчас. Как сказать?",
        options: [
          { text: "I sitting here." },
          { text: "I am sit here." },
          { text: "I am sitting here.", correct: true },
        ],
        hint: "Нужны обе части: форма be и окончание.",
        why: "I am sitting here. В первом нет формы be, во втором — окончания.",
      },
      {
        id: "q-seychas-sobrat",
        kind: "order",
        outcome: "говорить, что делаешь прямо сейчас: I am working",
        prompt: "Собери предложение: «Я работаю прямо сейчас.»",
        items: ["now", "working", "I", "am"],
        answer: [2, 3, 1, 0],
        hint: "Вторым идёт форма be.",
        why: "I am working now.",
      },

      // ---- итог 2 ----
      {
        id: "q-drugoy-seychas-dopisat",
        kind: "gap",
        outcome: "говорить, что делает другой человек: He is working",
        prompt: "Твоя сестра поёт прямо сейчас. Допиши недостающее слово.",
        before: "My sister ",
        after: " singing.",
        answer: "is",
        accept: ["Is"],
        hint: "Об одном другом человеке.",
        why: "My sister is singing. С he, she и с именем идёт is.",
      },
      {
        id: "q-drugoy-seychas-otmetit",
        kind: "hottext",
        outcome: "говорить, что делает другой человек: He is working",
        prompt: "Отметь записи, где у глагола лишнее окончание -s.",
        parts: [
          { text: "He is waiting.", selectable: true },
          { text: " · " },
          { text: "He is waitings.", selectable: true, correct: true },
          { text: " · " },
          { text: "She is dancing.", selectable: true },
          { text: " · " },
          { text: "She is dancings.", selectable: true, correct: true },
        ],
        hint: "При форме be окончание -s глаголу не нужно.",
        why: "Лишнее -s в «He is waitings» и «She is dancings».",
      },

      // ---- итог 3 ----
      {
        id: "q-ing-vybor",
        kind: "choice",
        outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
        prompt: "Глагол dance с окончанием -ing. Какая запись верна?",
        options: [
          { text: "danceing" },
          { text: "dancsing" },
          { text: "dancing", correct: true },
        ],
        hint: "Буква e перед окончанием уходит.",
        why: "Dancing. У глаголов на e эта буква уходит.",
      },
      {
        id: "q-ing-sopostavit",
        kind: "match",
        outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
        prompt: "Сопоставь глагол и его форму с окончанием.",
        left: ["sit", "make", "read"],
        right: ["making", "reading", "sitting"],
        answer: [2, 0, 1],
        hint: "У одного удваивается согласный, у другого уходит e.",
        why: "Sit — sitting, make — making, read — reading.",
      },
      {
        id: "q-ing-napisat",
        kind: "short",
        outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
        prompt: "Напиши, что она готовит чай прямо сейчас. Готовить — make, чай — tea.",
        answer: "She is making tea.",
        accept: ["she is making tea.", "She is making tea"],
        hint: "У make перед окончанием уходит буква e.",
        why: "She is making tea. Буква e ушла: making.",
      },

      // ---- итог 4 ----
      {
        id: "q-razlichenie-vybor",
        kind: "choice",
        outcome: "различать «сейчас» и «всегда»: I'm working — I work",
        prompt: "По воскресеньям ты не работаешь. Как сказать про воскресенья?",
        options: [
          { text: "I am not work on Sunday." },
          { text: "I don't work on Sunday.", correct: true },
          { text: "I am not work on Sunday." },
        ],
        hint: "Речь о том, что повторяется каждое воскресенье.",
        why:
          "I don't work on Sunday. О повторяющемся говорят записью о делах вообще, а не " +
          "о том, что идёт сейчас.",
      },
      {
        id: "q-razlichenie-otmetit",
        kind: "hottext",
        outcome: "различать «сейчас» и «всегда»: I'm working — I work",
        prompt: "Отметь записи, где выбран не тот способ.",
        parts: [
          { text: "It is raining now.", selectable: true },
          { text: " · " },
          { text: "It rains now.", selectable: true, correct: true },
          { text: " · " },
          { text: "I usually read in the evening.", selectable: true },
          { text: " · " },
          { text: "I am reading in the evening every day.", selectable: true, correct: true },
        ],
        hint: "Слово now — о минуте, слово every day — о повторении.",
        why: "Верно: It is raining now, I read in the evening every day.",
      },
      {
        id: "q-razlichenie-dopisat",
        kind: "gap",
        outcome: "различать «сейчас» и «всегда»: I'm working — I work",
        prompt: "Ты всегда работаешь по понедельникам. Допиши глагол в нужном виде.",
        before: "I always ",
        after: " on Monday.",
        answer: "work",
        accept: ["Work"],
        hint: "Слово always говорит о том, что повторяется.",
        why: "I always work on Monday. О повторяющемся — глагол без окончания -ing.",
      },

      // ---- итог 5 ----
      {
        id: "q-neskolko-seychas-dopisat",
        kind: "gap",
        outcome: "говорить о нескольких: We are waiting",
        prompt: "Ты ждёшь вместе с другом прямо сейчас. Допиши недостающее слово.",
        before: "We ",
        after: " waiting.",
        answer: "are",
        accept: ["Are"],
        hint: "Со словом we.",
        why: "We are waiting. С we, you и they идёт are.",
      },
      {
        id: "q-neskolko-seychas-vybor",
        kind: "choice",
        outcome: "говорить о нескольких: We are waiting",
        prompt: "Твои друзья работают прямо сейчас. Как сказать?",
        options: [
          { text: "My friends are working.", correct: true },
          { text: "My friends is working." },
          { text: "My friends are works." },
        ],
        hint: "Друзей несколько, а окончание у глагола одно.",
        why: "My friends are working. О нескольких — are, окончание -s сюда не приходит.",
      },

      // ---- итог 6 ----
      {
        id: "q-otricanie-seychas-dopisat",
        kind: "gap",
        outcome: "отрицать происходящее: I'm not working",
        prompt: "Он сейчас не ждёт. Допиши недостающее слово.",
        before: "He is ",
        after: " waiting.",
        answer: "not",
        accept: ["Not"],
        hint: "Оно встаёт сразу после формы be.",
        why: "He is not waiting. При форме be отрицает not.",
      },
      {
        id: "q-otricanie-seychas-otmetit",
        kind: "hottext",
        outcome: "отрицать происходящее: I'm not working",
        prompt: "Отметь записи, где отрицание построено не тем словом.",
        parts: [
          { text: "I am not reading.", selectable: true },
          { text: " · " },
          { text: "I don't reading.", selectable: true, correct: true },
          { text: " · " },
          { text: "She isn't singing.", selectable: true },
          { text: " · " },
          { text: "She doesn't singing.", selectable: true, correct: true },
        ],
        hint: "При форме be отрицает not.",
        why: "Don't и doesn't идут с глаголом без окончания.",
      },
      {
        id: "q-otricanie-seychas-napisat",
        kind: "short",
        outcome: "отрицать происходящее: I'm not working",
        prompt: "Напиши, что ты сейчас не работаешь.",
        answer: "I am not working now.",
        accept: [
          "i am not working now.",
          "I'm not working now.",
          "I am not working.",
          "I'm not working.",
        ],
        hint: "После формы be идёт not.",
        why: "I am not working now. Или короче: I'm not working now.",
      },

      // ---- итог 7 ----
      {
        id: "q-vopros-seychas-sobrat",
        kind: "order",
        outcome: "спрашивать, что происходит: What are you doing?",
        prompt: "Собери вопрос: «Что она делает?»",
        items: ["is", "doing?", "What", "she"],
        answer: [2, 0, 3, 1],
        hint: "Вопросительное слово впереди, за ним форма be.",
        why: "What is she doing? Порядок: What, is, she, doing.",
      },
      {
        id: "q-vopros-seychas-vybor",
        kind: "choice",
        outcome: "спрашивать, что происходит: What are you doing?",
        prompt: "Ты хочешь узнать, ждут ли твои друзья. Как спросить?",
        options: [
          { text: "Do your friends waiting?" },
          { text: "Are your friends waiting?", correct: true },
          { text: "Are waiting your friends?" },
        ],
        hint: "Форма be впереди, потом те, о ком речь.",
        why:
          "Are your friends waiting? Do идёт с глаголом без окончания, а в третьем " +
          "варианте порядок перевёрнут.",
      },
      {
        id: "q-vopros-seychas-otvetit",
        kind: "short",
        outcome: "спрашивать, что происходит: What are you doing?",
        prompt: "Тебя спросили: Are you reading? Ты читаешь. Ответь коротко — да.",
        answer: "Yes, I am.",
        accept: ["yes, I am.", "Yes, I am"],
        hint: "Глагол в коротком ответе не повторяют.",
        why: "Yes, I am. Короткая форма I'm в конце ответа не ставится.",
      },

      // ---- итог 8 ----
      {
        id: "q-rasskaz-seychas-sobrat",
        kind: "order",
        outcome: "рассказывать, что происходит вокруг",
        prompt: "Собери рассказ: сначала о себе, потом о друзьях, потом о погоде.",
        items: ["My friends are waiting.", "It is raining.", "I am sitting at home."],
        answer: [2, 0, 1],
        hint: "Порядок задан в условии.",
        why: "I am sitting at home. My friends are waiting. It is raining.",
      },
      {
        id: "q-rasskaz-seychas-napisat",
        kind: "short",
        outcome: "рассказывать, что происходит вокруг",
        prompt: "Напиши два предложения: ты сидишь дома, а сейчас идёт дождь. Дома — at home.",
        answer: "I am sitting at home. It is raining.",
        accept: [
          "i am sitting at home. it is raining.",
          "I'm sitting at home. It's raining.",
        ],
        hint: "О себе — am, о погоде — is через it.",
        why: "I am sitting at home. It is raining.",
      },
      {
        id: "q-rasskaz-seychas-dopisat",
        kind: "gap",
        outcome: "рассказывать, что происходит вокруг",
        prompt: "Твоя сестра читает прямо сейчас. Допиши глагол с окончанием.",
        before: "My sister is ",
        after: " a book.",
        answer: "reading",
        accept: ["Reading"],
        hint: "Окончание приписывается без изменений.",
        why: "My sister is reading a book. У read окончание приписывается как есть.",
      },
    ],
  },
};

export default module;
