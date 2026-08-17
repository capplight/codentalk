import type { Module } from "@/lib/content/types";

/**
 * Модуль 22 курса «Английский с нуля»: просьбы и указания.
 *
 * Программа: docs/programma-english-starter.md, модуль 22 — «вежливо просить,
 * приглашать, давать указания»; грамматика: повелительное наклонение (сверх
 * A1), `can` в просьбе, `would like` в приглашении.
 *
 * ГЛАВНАЯ ОСОБЕННОСТЬ МОДУЛЯ. Он первый, где предложение начинается прямо с
 * глагола: `Open the door`. Все двадцать один модуль до него учили, что перед
 * глаголом обязательно стоит тот, о ком речь, — и это правило здесь впервые
 * отменяется. Ученик, привыкший к `I open`, `He opens`, увидит `Open` и решит,
 * что потерялось слово.
 *
 * Поэтому урок 1 говорит об отмене прямо и объясняет, почему подлежащего нет:
 * указание даётся тому, с кем говорят, и называть его незачем.
 *
 * ВТОРАЯ ОСОБЕННОСТЬ — три способа сказать почти одно и то же: `Open the door`,
 * `Can you open the door?`, `Would you like to open the door?`. Модуль
 * разводит их по назначению, а не по «вежливости»: первое — указание, второе —
 * просьба, третье — приглашение. Так их называет и источник.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. ПОВЕЛИТЕЛЬНОЕ НАКЛОНЕНИЕ — English Grammar Profile, CLAUSES imperatives:
 *    — A2, «FORM: AFFIRMATIVE» — «Can form an affirmative imperative with the
 *      base form of a main verb», пример источника: «Goodbye. Write soon»;
 *    — A2, «USE: INSTRUCTIONS» — «Can use the imperative to give instructions»,
 *      пример источника: «Take a taxi to the Petrol station then call me»;
 *    — A2, «FORM/USE: NEGATIVE» — «Can form a negative imperative with the
 *      auxiliary verb 'do' + 'n't' + base form of a main verb, to give advice,
 *      instructions or orders», пример источника: «Don't tell Lucy, please».
 *
 *    ЭТО СВЕРХ СТУПЕНИ, И ТАК ЖЕ СЧИТАЕТ ПРОГРАММА. Второе основание — то же,
 *    что в модулях 15 и 16: Cambridge ставит повелительное наклонение НИЖЕ A1.
 *    Руководство для младших ступеней, список грамматики Pre A1 Starters,
 *    с. 29, графа «Verbs (Positive, negative, question, imperative and
 *    short-answer forms, including contractions)» с примером «Eat your lunch!».
 *    Два источника расходятся, и модуль держится того, который ниже: без
 *    указаний не обойтись ни на одном занятии.
 *
 * 2. ПРОСЬБА С `can` — English Grammar Profile, MODALITY can, A1, «USE:
 *    REQUESTS»: «Can use 'can' to make a request», пример источника: «Can you
 *    come on Sunday at seven o'clock?». Ступень своя, ничего сверх.
 *
 * 3. ПРИГЛАШЕНИЕ — English Grammar Profile, MODALITY would, A1, «USE:
 *    INVITATIONS WITH 'LIKE'»: «Can use 'would like to invite' to make
 *    invitations», пример источника: «I would like to invite you to dinner in
 *    my house on Saturday at 7 30 pm».
 *
 * 4. ВОПРОС `Would you like…?` — A2, CLAUSES interrogatives, «FORM:
 *    AFFIRMATIVE INTERROGATIVE, WITH MODAL AUXILIARY VERBS»: «Can form
 *    interrogative clauses ('yes/no' forms) with modal auxiliary verbs», пример
 *    источника: «Would you like to come with me?». Взят сверх ступени и
 *    объявлен: без него приглашения не выходит вовсе, а модуль 21 уже показал
 *    этот вопрос на узнавание.
 *
 * 5. РАЗРЕШЕНИЕ `Can I…?` (урок 5) — основание у него одно, и это Cambridge:
 *    руководство для младших ступеней, с. 29, объединённая строка «Can for
 *    requests/permission» с примером «Can I have some birthday cake?». В
 *    английском профиле отдельной строки под вопрос «можно ли мне» нет:
 *    ближайшая — MODALITY can, A2, «USE: PERMISSION», и она про утверждение
 *    «ты можешь», а не про вопрос. Расхождение объявлено здесь по разбору
 *    методиста: прежде урок 5 источником подтверждён не был вовсе.
 *
 * 6. Слова модуля — Oxford 3000: party n. A1, thanks exclam. A1. Уже введены
 *    раньше: open, close, come, go, sit, stand, wait, help, please, sorry,
 *    tomorrow.
 *
 * ЖДЁТ ВЛАДЕЛЬЦА. Слово `please` курс до сих пор объяснял как то, что «делает
 * просьбу мягче». Утверждения о вежливости источники не подтверждают вовсе —
 * ни один из них не помечает обороты по вежливости. Здесь оно оставлено, но
 * решение это уровня преподавателя, и владельцу стоит его подтвердить или
 * снять. Записано в docs/zadachi-vladeltsa.md.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — ОБОРОТА `let's`. English Grammar Profile ставит его на A2 отдельной
 *   строкой («FORM/USE: 'LET'S', SUGGESTION»), у Cambridge на Pre A1 его нет,
 *   и программа его не называет.
 * — ОБОРОТА `could you`. В английском профиле он ЕСТЬ — MODALITY could, A2,
 *   «USE: REQUESTS»: «Can use 'could' to make requests», пример источника —
 *   «Could you help me to paint my bedroom?». У Cambridge `could` появляется
 *   ещё выше, только на A2 Flyers. Не берём не потому, что его нет, а потому
 *   что `can you` уже покрывает просьбу целиком, а второй оборот того же
 *   назначения на этой ступени только множит выбор.
 *   ПЕРВАЯ РЕДАКЦИЯ писала «его нет ни в одном списке этой ступени» — это
 *   неверно, и запрещено правилами работы. Нашёл методист.
 * — УКАЗАНИЙ ИЗ НЕСКОЛЬКИХ ДЕЙСТВИЙ («Take a taxi then call me»). Источник даёт
 *   такой пример, но соединение двух указаний словом then — предмет модуля 24.
 */
const module: Module = {
  slug: "prosby-i-ukazaniya",
  title: "Просьбы и указания",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, CLAUSES imperatives, «FORM: AFFIRMATIVE»: «Can form an affirmative " +
        "imperative with the base form of a main verb», пример источника — " +
        "«Goodbye. Write soon». " +
        "A2, CLAUSES imperatives, «USE: INSTRUCTIONS»: «Can use the imperative to " +
        "give instructions». " +
        "A2, CLAUSES imperatives, «FORM/USE: NEGATIVE»: «Can form a negative " +
        "imperative with the auxiliary verb 'do' + 'n't' + base form of a main " +
        "verb, to give advice, instructions or orders», пример источника — «Don't " +
        "tell Lucy, please». " +
        "Всё это взято сверх ступени, как и говорит программа, и объявлено в шапке " +
        "модуля. " +
        "A1, MODALITY can, «USE: REQUESTS»: «Can use 'can' to make a request», " +
        "пример источника — «Can you come on Sunday at seven o'clock?». " +
        "A1, MODALITY would, «USE: INVITATIONS WITH 'LIKE'»: «Can use 'would like " +
        "to invite' to make invitations». " +
        "A2, CLAUSES interrogatives, «FORM: AFFIRMATIVE INTERROGATIVE, WITH MODAL " +
        "AUXILIARY VERBS»: «Can form interrogative clauses ('yes/no' forms) with " +
        "modal auxiliary verbs», пример источника — «Would you like to come with " +
        "me?» — это вопрос урока 6, взят сверх ступени и объявлен",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, Grammar and Structures List ступени Pre A1 Starters, графа «Verbs " +
        "(Positive, negative, question, imperative and short-answer forms, " +
        "including contractions)» с примером «Eat your lunch!». Cambridge ставит " +
        "повелительное наклонение ниже A1 — это второе основание взять его здесь",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "новое слово модуля с пометкой A1: party n. A1. Слово thanks (exclam., n. A1) " +
        "введено ещё в модуле 2 и здесь карточкой не повторяется — прежде повторялось, " +
        "с тем же переводом, примером и произношением. Нашёл методист",
      license: "внутреннее использование",
    },
    {
      ref: "docs/istochniki-vezhlivost.md",
      section:
        "сведения об обычаях, которых наши материалы не дают вовсе. Указание — " +
        "прямая форма, вопрос звучит мягче: Википедия, «Imperative mood» — «In " +
        "polite speech, orders or requests are often phrased instead as questions " +
        "or statements, rather than imperatives: Could you come here for a moment? " +
        "(more polite than 'Come here!')». " +
        "Слово please смягчает: Grammarly — «You can make imperative sentences " +
        "sound a little softer in tone by adding the word please». " +
        "Отказ: Longman, статья «no, thank you» — «used to say politely that you " +
        "do not want something». " +
        "Чего в источниках НЕТ: запрета говорить указание незнакомому человеку и " +
        "утверждения, что голое No звучит резко. Обе формулировки из модуля убраны",
      license: "открытые источники, ссылки в файле",
    },
  ],

  outcomes: [
    "давать указание: Open the door",
    "запрещать: Don't open the door",
    "ставить please в указании и просьбе",
    "просить: Can you help?",
    "спрашивать разрешения: Can I sit here?",
    "приглашать: Would you like to come?",
    "отвечать, когда предлагают вещь, и когда зовут: Yes, please. Yes, I'd like to.",
    "вести разговор с просьбой целиком",
    "понимать по объявлению, что делать и чего делать нельзя",
    "различать на слух указание, запрет и просьбу",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ukazanie",
      title: "Указание: Open the door",
      estimatedMinutes: 13,
      outcome: "давать указание: Open the door",

      blocks: [
        {
          id: "zachem-ukazanie",
          kind: "explain",
          text: [
            "У тебя заняты руки, и ты просишь знакомого открыть дверь.",
            "По-английски это одно слово и название вещи: Open the door.",
            "Ни I, ни you перед глаголом не ставят — и это новое.",
          ],
        },
        {
          id: "tablica-ukazaniy",
          kind: "table",
          caption: "Указание и обычное предложение",
          head: ["Английский", "Перевод"],
          rows: [
            ["You open the door.", "Ты открываешь дверь."],
            ["Open the door.", "Открой дверь."],
            ["Come here.", "Иди сюда."],
            ["Wait, please.", "Подожди, пожалуйста."],
          ],
        },
        {
          id: "pochemu-net-podlezhashchego",
          kind: "explain",
          text: [
            "Двадцать один модуль подряд перед глаголом стоял тот, о ком речь.",
            "Здесь его нет, и на то есть причина: указание даётся тому, с кем " +
              "говорят.",
            "Называть его незачем — он и так знает, что обращаются к нему.",
          ],
        },
        {
          id: "glagol-kak-v-slovare",
          kind: "note",
          tone: "info",
          text:
            "Глагол в указании стоит в том виде, в каком записан в словаре.\n\n" +
            "Ни -s, ни -ing, ни to: Open, Come, Wait.",
        },
        {
          id: "primer-ukazaniy",
          kind: "example",
          caption: "Четыре указания",
          text: "Open the door.\nClose the window.\nCome here.\nSit here.",
          explain:
            "Все четыре начинаются прямо с глагола. После него идёт то, к чему " +
            "указание относится: дверь, окно, место.",
        },
        {
          id: "zapis-ukazaniy",
          kind: "audio",
          pace: "slow",
          caption: "Послушай четыре указания",
          transcript: "Open the door. Close the window. Come here. Sit here.",
        },
        {
          id: "slovar-ukazaniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "party", translation: "вечеринка", example: "Come to my party.", hint: "/ˈpɑːti/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-ukazanie",
          kind: "choice",
          prompt: "Ты просишь знакомого открыть дверь. Как сказать?",
          options: [
            { text: "You open the door." },
            { text: "Open the door.", correct: true },
            { text: "To open the door." },
          ],
          hint: "Указание начинается прямо с глагола.",
          why:
            "Open the door. Первое предложение сообщает, что человек открывает дверь, " +
            "а слово to в указании не нужно.",
        },
        {
          id: "z2-dopisat-ukazanie",
          kind: "gap",
          prompt: "Ты просишь знакомого закрыть окно. Допиши глагол. Закрыть — close.",
          before: "",
          after: " the window.",
          answer: "Close",
          hint: "Указание начинается с глагола, и глагол стоит как в словаре.",
          why: "Close the window. Перед глаголом ничего не ставят.",
        },
        {
          id: "z3-otmetit-lishnee-v-ukazanii",
          kind: "hottext",
          // Прежде задание звалось «отметь, где лишнее слово» и объявляло ошибкой
          // «You come here» — а это верное предложение, только не указание.
          prompt: "Отметь записи, которые указанием не являются.",
          parts: [
            { text: "Come here.", selectable: true },
            { text: " · " },
            { text: "You come here.", selectable: true, correct: true },
            { text: " · " },
            { text: "To sit here.", selectable: true, correct: true },
            { text: " · " },
            { text: "Sit here.", selectable: true },
          ],
          hint: "Указание начинается прямо с глагола.",
          why:
            "«You come here» — рассказ о человеке, а «To sit here» и вовсе не " +
            "предложение. Указания здесь два: Come here и Sit here.",
        },
        {
          id: "z4-sobrat-ukazanie",
          kind: "order",
          prompt: "Собери указание: «Открой окно.»",
          items: ["window", "Open", "the"],
          answer: [1, 2, 0],
          hint: "Первым идёт глагол.",
          why: "Open the window. Сначала глагол, потом название вещи.",
        },
        {
          id: "z5-napisat-ukazanie",
          kind: "short",
          prompt: "Скажи знакомому, чтобы он подождал. Ждать — wait.",
          answer: "Wait.",
          accept: ["Wait, please."],
          hint: "Хватает одного глагола.",
          why: "Wait. Годится и Wait, please — с этим словом указание звучит мягче.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-delay",
      title: "Не делай: Don't open the door",
      estimatedMinutes: 12,
      outcome: "запрещать: Don't open the door",

      blocks: [
        {
          id: "zachem-zapret",
          kind: "explain",
          text: [
            "Иногда нужно обратное: не открывай, не закрывай, не жди.",
            "Перед глаголом встаёт don't: Don't open the door.",
            "Само указание при этом не меняется — прибавляется одно слово.",
          ],
        },
        {
          id: "tablica-zapreta",
          kind: "table",
          caption: "Указание и запрет",
          head: ["Английский", "Перевод"],
          rows: [
            ["Open the door.", "Открой дверь."],
            ["Don't open the door.", "Не открывай дверь."],
            ["Don't wait.", "Не жди."],
          ],
        },
        {
          id: "dont-uzhe-znakomo",
          kind: "explain",
          text: [
            "Слово don't ты знаешь с модуля «Я не делаю»: I don't work.",
            "Здесь оно делает ту же работу — отрицает, — но стоит в самом начале.",
            "Глагол после него по-прежнему без окончания.",
          ],
        },
        {
          id: "ne-dont-s-you",
          kind: "note",
          tone: "mistake",
          text:
            "«You don't open the door» — это не запрет.\n\nТак говорят о человеке: " +
            "он дверь не открывает. Запрет идёт без you: Don't open the door.",
        },
        {
          id: "primer-zapreta",
          kind: "example",
          caption: "Три запрета",
          text: "Don't open the window.\nDon't wait here.\nDon't come tomorrow.",
          explain:
            "Во всех трёх don't стоит первым, а глагол — сразу за ним и без " +
            "окончания.",
        },
        {
          id: "zapis-zapreta",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три запрета",
          transcript: "Don't open the window. Don't wait here. Don't come tomorrow.",
        },
        {
          id: "please-i-v-zaprete",
          kind: "note",
          tone: "info",
          text:
            "Слово please годится и в запрете: Don't wait, please.\n\nСтавят его так " +
            "же — в конце, через запятую.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dont",
          kind: "gap",
          prompt: "Ты просишь знакомого не открывать окно. Допиши недостающее слово.",
          before: "",
          after: " open the window.",
          answer: "Don't",
          accept: ["Do not"],
          hint: "Оно встаёт перед глаголом, в самом начале.",
          why: "Don't open the window. Годится и полная запись Do not.",
        },
        {
          id: "z2-vybrat-zapret",
          kind: "choice",
          prompt: "Ты просишь знакомого не ждать. Как сказать?",
          options: [
            { text: "You don't wait." },
            { text: "Don't wait.", correct: true },
            { text: "Don't waiting." },
          ],
          hint: "Запрет идёт без слова you, а глагол — без окончания.",
          why:
            "Don't wait. Первое предложение сообщает, что человек не ждёт, а окончание " +
            "-ing после don't не ставят.",
        },
        {
          id: "z3-otmetit-ne-zapret",
          kind: "hottext",
          prompt: "Отметь записи, которые запретом не являются.",
          parts: [
            { text: "Don't come here.", selectable: true },
            { text: " · " },
            { text: "You don't come here.", selectable: true, correct: true },
            { text: " · " },
            { text: "He doesn't come here.", selectable: true, correct: true },
            { text: " · " },
            { text: "Don't wait here.", selectable: true },
          ],
          hint: "Запрет идёт без того, о ком речь.",
          why:
            "«You don't come here» и «He doesn't come here» — рассказ о людях, а не " +
            "запрет. Запреты здесь два: Don't come here и Don't wait here.",
        },
        {
          id: "z4-sobrat-zapret",
          kind: "order",
          prompt: "Собери запрет: «Не закрывай дверь.»",
          items: ["the door", "Don't", "close"],
          answer: [1, 2, 0],
          hint: "Первым идёт don't.",
          why: "Don't close the door. Сначала don't, потом глагол, потом название вещи.",
        },
        {
          id: "z5-napisat-zapret",
          kind: "short",
          prompt: "Скажи знакомому, чтобы он не приходил завтра. Приходить — come, завтра — tomorrow.",
          answer: "Don't come tomorrow.",
          accept: ["Do not come tomorrow.", "Don't come tomorrow, please."],
          hint: "Запрет начинается с don't.",
          why: "Don't come tomorrow. Годится и полная запись Do not.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slovo-please",
      title: "Слово please: где оно стоит",
      estimatedMinutes: 11,
      outcome: "ставить please в указании и просьбе",

      blocks: [
        {
          id: "zachem-please",
          kind: "explain",
          text: [
            "«Open the door» — это указание, и звучит оно прямо.",
            "Одно слово меняет всё: Open the door, please.",
            "Слово please ты знаешь с модуля «Приветствие» — здесь оно работает в " +
              "полную силу.",
          ],
        },
        {
          id: "tablica-mesto-please",
          kind: "table",
          caption: "Два места для please",
          head: ["Английский", "Перевод", "Где стоит"],
          rows: [
            ["Open the door, please.", "Открой дверь, пожалуйста.", "в конце"],
            ["Please open the door.", "Пожалуйста, открой дверь.", "в начале"],
            ["Don't wait, please.", "Не жди, пожалуйста.", "в конце"],
          ],
        },
        {
          id: "zapyataya-pri-please",
          kind: "explain",
          text: [
            "В конце please отделяют запятой: Wait, please.",
            "В начале запятой нет: Please wait.",
            "Оба места верны, и выбирать можно любое.",
          ],
        },
        {
          id: "ne-please-v-seredine",
          kind: "note",
          tone: "mistake",
          text:
            "«Open please the door» — так не говорят.\n\nВ середину указания please " +
            "не ставят. Только в начало или в конец.",
        },
        {
          id: "primer-please",
          kind: "example",
          caption: "Одно указание тремя способами",
          text: "Open the door.\nOpen the door, please.\nPlease open the door.",
          explain:
            "Первое — голое указание. Второе и третье значат одно и то же: разница " +
            "только в том, где стоит please.",
        },
        {
          id: "zapis-please",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три записи",
          transcript: "Open the door. Open the door, please. Please open the door.",
        },
        {
          id: "please-i-v-prosbe",
          kind: "note",
          tone: "info",
          text:
            // Было «чаще всего его ставят в конец» — утверждение о частоте, а
            // частотности наши источники не дают вовсе. Осталось место и второй
            // возможный порядок, без счёта, где чего больше.
            "То же слово годится и в вопросе-просьбе: Can you help, please?\n\nМесто у " +
            "него в конце, а второе — перед глаголом: «Can you please help?».",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-please",
          kind: "gap",
          prompt: "Ты просишь знакомого подождать и добавляешь «пожалуйста». Допиши недостающее слово.",
          before: "Wait, ",
          after: ".",
          answer: "please",
          hint: "Слово стоит после запятой.",
          why: "Wait, please. В конце указания please отделяют запятой.",
        },
        {
          id: "z2-vybrat-mesto-please",
          kind: "choice",
          prompt: "Ты просишь знакомого открыть окно и добавляешь «пожалуйста». Как сказать?",
          options: [
            { text: "Open please the window." },
            { text: "Open the window, please.", correct: true },
            { text: "Open the please window." },
          ],
          hint: "Please стоит в начале или в конце, но не в середине.",
          why: "Open the window, please. В середину указания please не ставят.",
        },
        {
          id: "z3-otmetit-mesto-please",
          kind: "hottext",
          prompt: "Отметь записи, где please стоит не на своём месте.",
          parts: [
            { text: "Please come here.", selectable: true },
            { text: " · " },
            { text: "Come please here.", selectable: true, correct: true },
            { text: " · " },
            { text: "Don't please wait.", selectable: true, correct: true },
            { text: " · " },
            { text: "Don't wait, please.", selectable: true },
          ],
          hint: "Место у please только два: начало и конец.",
          why: "Верно: Please come here и Don't wait, please.",
        },
        {
          id: "z4-sobrat-s-please",
          kind: "order",
          prompt: "Собери указание: «Пожалуйста, закрой дверь.» Слово please поставь в начало.",
          items: ["the door", "Please", "close"],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии: please впереди.",
          why: "Please close the door. В начале please запятой не отделяют.",
        },
        {
          id: "z5-napisat-s-please",
          kind: "short",
          prompt: "Скажи знакомому, чтобы он сел здесь, и добавь «пожалуйста» в конце. Сесть — sit.",
          answer: "Sit here, please.",
          hint: "В конце please отделяют запятой.",
          why: "Sit here, please. Годится и Please sit here, но условие просило конец.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "prosba-s-can",
      title: "Просьба: Can you help?",
      estimatedMinutes: 13,
      outcome: "просить: Can you help?",

      blocks: [
        {
          id: "zachem-prosba-s-can",
          kind: "explain",
          text: [
            "Указание звучит прямо, и мягче оно не станет.",
            "Тогда берут вопрос с can: Can you help?",
            "Это уже не указание, а просьба — собеседник может и отказать.",
          ],
        },
        {
          id: "tablica-ukazanie-i-prosba",
          kind: "table",
          caption: "Указание и просьба",
          head: ["Английский", "Перевод", "Что это"],
          rows: [
            ["Open the door.", "Открой дверь.", "указание"],
            ["Can you open the door?", "Ты не откроешь дверь?", "просьба"],
            ["Can you help, please?", "Ты не поможешь?", "просьба"],
          ],
        },
        {
          id: "prosba-eto-vopros-po-vidu",
          kind: "explain",
          text: [
            "По виду просьба — обычный вопрос с can из модуля «Я умею».",
            "Порядок тот же: can, потом тот, кого просят, потом глагол.",
            "И вопросительный знак в конце тоже остаётся.",
          ],
        },
        {
          id: "ne-can-you-to-help",
          kind: "note",
          tone: "mistake",
          text:
            "«Can you to help?» — так не говорят.\n\nПосле can глагол стоит без to, " +
            "как и в рассказе об умении: Can you help?",
        },
        {
          id: "primer-prosby-s-can",
          kind: "example",
          caption: "Три просьбы",
          text: "Can you help, please?\nCan you open the door?\nCan you come tomorrow?",
          explain:
            "Во всех трёх can стоит первым, глагол — без окончания. Слово please " +
            "ставят в конце.",
        },
        {
          id: "zapis-prosby-s-can",
          kind: "audio",
          pace: "slow",
          caption: "Послушай три просьбы",
          transcript: "Can you help, please? Can you open the door? Can you come tomorrow?",
        },
        {
          id: "otvet-na-prosbu",
          kind: "note",
          tone: "info",
          text:
            "Отвечают на просьбу коротко: Yes, of course. Или просто Yes.\n\nОтказ " +
            "звучит так: Sorry, I can't.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-can-v-prosbe",
          kind: "gap",
          prompt: "Ты просишь незнакомого человека помочь. Допиши недостающее слово.",
          before: "",
          after: " you help, please?",
          answer: "Can",
          hint: "Просьба открывается тем же словом, что вопрос об умении.",
          why: "Can you help, please? Просьба по виду — вопрос с can.",
        },
        {
          id: "z2-vybrat-prosbu",
          kind: "choice",
          prompt: "Ты просишь незнакомого человека открыть дверь. Как сказать?",
          options: [
            { text: "Can you open the door?", correct: true },
            { text: "Can you to open the door?" },
            { text: "Can you opening the door?" },
          ],
          hint: "После can глагол стоит без добавок.",
          why:
            "Can you open the door? Ни to, ни окончание -ing после can не ставят.",
        },
        {
          id: "z3-otmetit-ukazaniya-i-prosby",
          kind: "hottext",
          prompt: "Отметь записи, которые являются просьбой, а не указанием.",
          parts: [
            { text: "Open the door.", selectable: true },
            { text: " · " },
            { text: "Can you open the door?", selectable: true, correct: true },
            { text: " · " },
            { text: "Can you wait, please?", selectable: true, correct: true },
            { text: " · " },
            { text: "Wait, please.", selectable: true },
          ],
          hint: "Просьба начинается с can и кончается вопросительным знаком.",
          why:
            "Просьбы — «Can you open the door?» и «Can you wait, please?». Два других " +
            "предложения указания.",
        },
        {
          id: "z4-sobrat-prosbu",
          kind: "order",
          prompt: "Собери просьбу: «Ты не закроешь окно?»",
          items: ["close", "Can", "the window?", "you"],
          answer: [1, 3, 0, 2],
          hint: "Первым идёт can, вторым — тот, кого просят.",
          why: "Can you close the window? Порядок тот же, что в вопросе об умении.",
        },
        {
          id: "z5-napisat-prosbu",
          kind: "short",
          prompt: "Попроси незнакомого человека прийти завтра. Прийти — come, завтра — tomorrow.",
          answer: "Can you come tomorrow?",
          accept: ["Can you come tomorrow, please?", "Can you please come tomorrow?"],
          hint: "Начни с can.",
          why: "Can you come tomorrow? Годится и с please в конце.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mozhno-mne",
      title: "Можно мне: Can I sit here?",
      estimatedMinutes: 12,
      outcome: "спрашивать разрешения: Can I sit here?",

      blocks: [
        {
          id: "zachem-razreshenie",
          kind: "explain",
          text: [
            "Бывает наоборот: не ты делаешь одолжение, а тебе нужно разрешение.",
            "Тогда после can стоит не you, а I: Can I sit here?",
            "Смысл меняется целиком: действие выполнишь ты, а разрешение даёт собеседник.",
          ],
        },
        {
          id: "tablica-can-i-can-you",
          kind: "table",
          caption: "Кто выполняет действие",
          head: ["Английский", "Перевод", "Кто делает"],
          rows: [
            ["Can you open the door?", "Ты не откроешь дверь?", "собеседник"],
            ["Can I open the door?", "Можно я открою дверь?", "ты"],
            ["Can I sit here?", "Можно мне здесь сесть?", "ты"],
          ],
        },
        {
          id: "kak-otlichit-can-i",
          kind: "explain",
          text: [
            "Различие в одном: смотри, кто стоит сразу после can.",
            "Can you — просишь собеседника. Can I — просишь разрешения себе.",
            "Больше в этих двух вопросах ничего не различается.",
          ],
        },
        {
          id: "ne-can-me",
          kind: "note",
          tone: "mistake",
          text:
            "«Can me sit here?» — так не говорят.\n\nПеред глаголом стоит I, а не " +
            "me. Слово me приходит только после глагола или предлога.",
        },
        {
          id: "primer-razresheniya",
          kind: "example",
          caption: "Разговор в кафе",
          text: "— Can I sit here?\n— Yes, of course.\n— Can I open the window?\n— Sorry, I'm cold.",
          explain:
            "В обоих вопросах после can стоит I: разрешения просит тот, кто " +
            "спрашивает. Ответ бывает и отказом.",
        },
        {
          id: "zapis-razresheniya",
          kind: "audio",
          pace: "slow",
          caption: "Послушай два вопроса",
          transcript: "Can I sit here? Can I open the window?",
        },
        {
          id: "can-i-help-you-tozhe-syuda",
          kind: "note",
          tone: "info",
          text:
            "Оборот Can I help you? из модуля «Я умею» устроен так же.\n\nПосле can " +
            "стоит I — значит помогать будет тот, кто спрашивает.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-i-v-razreshenii",
          kind: "gap",
          prompt: "Ты просишь разрешения сесть здесь. Допиши недостающее слово.",
          before: "Can ",
          after: " sit here?",
          answer: "I",
          exact: true,
          hint: "Открывать или садиться будешь ты.",
          why: "Can I sit here? Слово I пишется с заглавной буквы всегда.",
        },
        {
          id: "z2-vybrat-kto-delaet",
          kind: "choice",
          prompt: "Ты просишь разрешения открыть окно. Как сказать?",
          options: [
            { text: "Can you open the window?" },
            { text: "Can I open the window?", correct: true },
            { text: "Can me open the window?" },
          ],
          hint: "Смотри, кто будет открывать окно.",
          why:
            "Can I open the window? В первом вопросе окно откроет собеседник, а слово " +
            "me перед глаголом не ставят.",
        },
        {
          id: "z3-otmetit-razresheniya",
          kind: "hottext",
          prompt: "Отметь вопросы, где человек просит разрешения себе.",
          parts: [
            { text: "Can you wait here?", selectable: true },
            { text: " · " },
            { text: "Can I wait here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Can I come tomorrow?", selectable: true, correct: true },
            { text: " · " },
            { text: "Can you come tomorrow?", selectable: true },
          ],
          hint: "Смотри, кто стоит сразу после can.",
          why:
            "Разрешения просят в «Can I wait here?» и «Can I come tomorrow?». В двух " +
            "других вопросах просят собеседника.",
        },
        {
          id: "z4-sopostavit-kto-delaet",
          kind: "match",
          prompt: "Сопоставь вопрос и того, кто это сделает.",
          left: ["Can you help?", "Can I help?", "Can I sit here?"],
          right: ["собеседник поможет", "ты сядешь", "ты поможешь"],
          answer: [0, 2, 1],
          hint: "Смотри, кто стоит сразу после can.",
          why:
            "Can you help — поможет собеседник. Can I help — поможешь ты. Can I sit " +
            "here — сядешь ты.",
        },
        {
          id: "z5-napisat-razreshenie",
          kind: "short",
          prompt: "Попроси разрешения прийти завтра. Прийти — come, завтра — tomorrow.",
          answer: "Can I come tomorrow?",
          accept: ["Can I come tomorrow, please?"],
          hint: "После can стоит тот, кто это сделает.",
          why: "Can I come tomorrow? Приходить будешь ты, значит после can стоит I.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "priglashenie",
      title: "Приглашение: Would you like to come?",
      estimatedMinutes: 13,
      outcome: "приглашать: Would you like to come?",

      blocks: [
        {
          id: "zachem-priglashenie",
          kind: "explain",
          text: [
            "У тебя вечеринка, и ты зовёшь друга.",
            // Слово «приказ» модуль уже заменил в двух местах на «прямо» — так
            // говорит источник. Здесь и ещё в двух местах оно осталось: правка
            // была не доведена. Нашёл методист.
            "Указание «Come to my party» звучит прямо, а приглашение — это " +
              "предложение, от которого можно отказаться.",
            "Для него берут оборот из модуля «Мне нравится», но вопросом: Would you " +
              "like to come?",
          ],
        },
        {
          id: "tablica-priglasheniy",
          kind: "table",
          caption: "Приглашение и предложение вещи",
          head: ["Английский", "Перевод"],
          rows: [
            ["Would you like to come?", "Не хочешь прийти?"],
            ["Would you like to come to my party?", "Не хочешь прийти на мою вечеринку?"],
            ["Would you like a coffee?", "Хочешь кофе?"],
          ],
        },
        {
          id: "kak-ustroeno-priglashenie",
          kind: "explain",
          text: [
            "Оборот тот же, что в «I'd like», только would вышло вперёд.",
            "Порядок такой: would, you, like, потом to и глагол.",
            "Если предлагаешь вещь, а не занятие, слово to не нужно: Would you like a " +
              "coffee?",
          ],
        },
        {
          id: "ne-do-you-like-priglashenie",
          kind: "note",
          tone: "mistake",
          text:
            "«Do you like to come?» — это не приглашение.\n\nТак спрашивают о вкусе: " +
            "нравится ли человеку приходить вообще. Приглашение начинается с would.",
        },
        {
          id: "primer-priglasheniya",
          kind: "example",
          caption: "Приглашение на вечеринку",
          text: "— Would you like to come to my party?\n— Yes, I'd like to. Thanks!",
          explain:
            "Вопрос начинается с would. В ответе тот же оборот, только утверждением: " +
            "I'd like to.",
        },
        {
          id: "zapis-priglasheniya",
          kind: "audio",
          pace: "slow",
          caption: "Послушай приглашение и ответ",
          transcript: "Would you like to come to my party? Yes, I'd like to. Thanks!",
        },
        {
          id: "priglashenie-uzhe-vstrechalos",
          kind: "note",
          tone: "info",
          text:
            "Этот вопрос уже встречался тебе в модуле «Мне нравится» — там он стоял " +
            "одной строкой, для узнавания на слух.\n\nТеперь ты строишь его " +
            "самостоятельно.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-would",
          kind: "gap",
          prompt: "Ты приглашаешь друга прийти. Допиши недостающее слово.",
          before: "",
          after: " you like to come?",
          answer: "Would",
          hint: "Приглашение открывает то же слово, что стоит в обороте I'd like.",
          why: "Would you like to come? В приглашении would выходит вперёд.",
        },
        {
          id: "z2-vybrat-priglashenie",
          kind: "choice",
          prompt: "Ты приглашаешь друга на свою вечеринку. Как сказать?",
          options: [
            { text: "Do you like to come to my party?" },
            { text: "Would you like to come to my party?", correct: true },
            { text: "Would you like come to my party?" },
          ],
          hint: "Приглашение начинается с would, а перед глаголом стоит to.",
          why:
            "Would you like to come to my party? Вопрос с do спрашивает о вкусе, а " +
            "без to два глагола рядом не идут.",
        },
        {
          id: "z3-otmetit-priglasheniya",
          kind: "hottext",
          prompt: "Отметь записи, которые являются приглашением.",
          parts: [
            { text: "Come to my party.", selectable: true },
            { text: " · " },
            { text: "Would you like to come to my party?", selectable: true, correct: true },
            { text: " · " },
            { text: "Would you like a coffee?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you like coffee?", selectable: true },
          ],
          hint: "Приглашение начинается с would.",
          why:
            "Приглашения — «Would you like to come to my party?» и «Would you like a " +
            "coffee?». Первая запись — указание, последняя — вопрос о вкусе.",
        },
        {
          id: "z4-sobrat-priglashenie",
          kind: "order",
          prompt: "Собери приглашение: «Не хочешь чаю?»",
          items: ["like", "Would", "a tea?", "you"],
          answer: [1, 3, 0, 2],
          hint: "Первым идёт would, вторым — тот, кого приглашают.",
          why: "Would you like a tea? Перед названием вещи слово to не нужно.",
        },
        {
          id: "z5-napisat-priglashenie",
          kind: "short",
          prompt: "Пригласи друга прийти завтра. Прийти — come, завтра — tomorrow.",
          answer: "Would you like to come tomorrow?",
          hint: "Начни с would, перед глаголом поставь to.",
          why: "Would you like to come tomorrow? Порядок: would, you, like, to, глагол.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "otvet-na-priglashenie",
      title: "Ответ на приглашение: Yes, please",
      estimatedMinutes: 12,
      outcome: "отвечать, когда предлагают вещь, и когда зовут: Yes, please. Yes, I'd like to.",

      blocks: [
        {
          id: "zachem-otvet-na-priglashenie",
          kind: "explain",
          text: [
            "Тебя позвали на вечеринку или предложили чаю. Молчать нельзя, отвечать " +
              "надо коротко.",
            "На предложение вещи отвечают Yes, please или No, thank you.",
            "На приглашение к делу — Yes, I'd like to или Sorry, I can't.",
          ],
        },
        {
          id: "tablica-otvetov",
          kind: "table",
          caption: "Что отвечать",
          head: ["Вопрос", "Согласие", "Отказ"],
          rows: [
            ["Would you like a tea?", "Yes, please.", "No, thank you."],
            ["Would you like to come?", "Yes, I'd like to.", "Sorry, I can't."],
            ["Can you help?", "Yes, of course.", "Sorry, I can't."],
          ],
        },
        {
          id: "yes-please-i-no-thank-you",
          kind: "explain",
          text: [
            // Было «одним словом Yes не принято: фраза звучит незаконченной» —
            // утверждение об обычае, которого нет ни в одном нашем источнике.
            // Осталось то, что показано: пара ответов.
            "Пара Yes, please и No, thank you работает только с вещами.",
            "На «Would you like a tea?» отвечают одной из двух: Yes, please или " +
              "No, thank you.",
            "Второй — вежливый отказ: он говорит, что тебе этого не нужно.",
          ],
        },
        {
          id: "ne-no-please",
          kind: "note",
          tone: "mistake",
          text:
            "«No, please» — так не отвечают.\n\nСлово please идёт с согласием: " +
            "Yes, please. С отказом идёт thank you: No, thank you.",
        },
        {
          id: "primer-otvetov",
          kind: "example",
          caption: "Два коротких разговора",
          text:
            "— Would you like a coffee?\n— Yes, please.\n\n— Would you like to come tomorrow?\n— Sorry, I can't.",
          explain:
            "В первом разговоре предлагают вещь — ответ Yes, please. Во втором зовут " +
            "прийти, и отказ идёт со словом sorry.",
        },
        {
          id: "zapis-otvetov",
          kind: "audio",
          pace: "slow",
          caption: "Послушай два ответа",
          transcript: "Yes, please. No, thank you.",
        },
        {
          id: "thanks-koroche",
          kind: "note",
          tone: "info",
          text:
            "У thank you есть короткая форма — thanks.\n\nОба слова значат одно, " +
            "и в ответе годятся оба: No, thanks.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-please-v-otvete",
          kind: "gap",
          prompt: "Тебе предложили чаю, и ты соглашаешься. Допиши недостающее слово.",
          before: "Yes, ",
          after: ".",
          answer: "please",
          hint: "С согласием идёт слово из просьбы.",
          why: "Yes, please. Слово please идёт именно с согласием.",
        },
        {
          id: "z2-vybrat-otkaz",
          kind: "choice",
          prompt: "Тебе предложили кофе, а ты не хочешь. Как отказаться?",
          options: [
            { text: "No, please." },
            { text: "No, thank you.", correct: true },
            { text: "No, I don't like." },
          ],
          hint: "С отказом идёт thank you.",
          why:
            "No, thank you. Слово please идёт только с согласием, а «I don't like» " +
            "говорит о вкусе вообще, а не об этой чашке.",
        },
        {
          id: "z3-sopostavit-vopros-i-otvet",
          kind: "match",
          prompt: "Сопоставь вопрос и подходящий ответ.",
          left: ["Would you like a tea?", "Would you like to come?", "Can you help?"],
          right: ["Yes, of course.", "Yes, please.", "Yes, I'd like to."],
          answer: [1, 2, 0],
          hint: "На предложение вещи отвечают одним способом, на приглашение — другим.",
          why:
            "Would you like a tea? — Yes, please. Would you like to come? — Yes, I'd " +
            "like to. Can you help? — Yes, of course.",
        },
        {
          id: "z4-otmetit-neverne-otvety",
          kind: "hottext",
          prompt: "Отметь ответы, которых не бывает.",
          parts: [
            { text: "Yes, please.", selectable: true },
            { text: " · " },
            { text: "No, please.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, thank you.", selectable: true },
            { text: " · " },
            { text: "Yes, thanks please.", selectable: true, correct: true },
          ],
          hint: "Please идёт с согласием, thank you — и с согласием, и с отказом.",
          why:
            "Не бывает «No, please» и «Yes, thanks please». Верные ответы — Yes, " +
            "please и Yes, thank you.",
        },
        {
          id: "z5-napisat-otkaz",
          kind: "short",
          prompt: "Тебя позвали прийти завтра, но ты не можешь. Откажись двумя словами и словом sorry.",
          answer: "Sorry, I can't.",
          accept: ["Sorry, I cannot."],
          hint: "После sorry идёт короткий отказ с can.",
          why: "Sorry, I can't. Отказ на приглашение к делу строится с can.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-s-prosboy",
      title: "Разговор целиком",
      estimatedMinutes: 13,
      outcome: "вести разговор с просьбой целиком",

      blocks: [
        {
          id: "zachem-razgovor-s-prosboy",
          kind: "explain",
          text: [
            "Ты заходишь в кафе, где все места заняты, кроме одного.",
            "За один короткий разговор тебе понадобится и просьба, и разрешение, и " +
              "благодарность.",
            "Всё это у тебя уже есть — осталось сложить в нужном порядке.",
          ],
        },
        {
          id: "tablica-iz-chego-razgovor",
          kind: "table",
          caption: "Из чего складывается разговор",
          head: ["Что нужно", "Как это выглядит"],
          rows: [
            ["спросить разрешения", "Can I sit here?"],
            ["попросить", "Can you help, please?"],
            ["пригласить", "Would you like a coffee?"],
            ["ответить", "Yes, please."],
            ["поблагодарить", "Thanks!"],
          ],
        },
        {
          id: "poryadok-razgovora",
          kind: "explain",
          text: [
            "Порядок обычный: сначала вопрос, потом ответ, потом благодарность.",
            "Благодарность в конце — не украшение: без неё разговор обрывается.",
            "Слово thanks короче и годится в любом разговоре с приятелем.",
          ],
        },
        {
          id: "ne-tolko-ukazaniya",
          kind: "note",
          tone: "info",
          text:
            "Разговор из одних указаний звучит слишком прямо.\n\nЧередуй: указание, " +
            "просьба с can, приглашение — все три у тебя есть.",
        },
        {
          id: "primer-razgovora-s-prosboy",
          kind: "example",
          caption: "Разговор в кафе",
          text:
            "— Can I sit here?\n— Yes, of course.\n— Would you like a coffee?\n— Yes, please. Thanks!",
          explain:
            "Первый вопрос — разрешение себе. Второй — предложение собеседнику. " +
            "Ответы короткие, и в конце стоит благодарность.",
        },
        {
          id: "zapis-razgovora-s-prosboy",
          kind: "audio",
          pace: "slow",
          caption: "Послушай разговор целиком",
          transcript: "Can I sit here? Yes, of course. Would you like a coffee? Yes, please. Thanks!",
        },
        {
          id: "sorry-tozhe-nuzhen",
          kind: "note",
          tone: "info",
          text:
            "Слово sorry в таком разговоре тоже пригодится.\n\nИм " +
            "начинают отказ и им же обращаются к незнакомому человеку: Sorry, can " +
            "you help?",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor",
          kind: "order",
          prompt: "Собери разговор: сначала вопрос о месте, потом согласие, потом благодарность.",
          items: ["Yes, of course.", "Can I sit here?", "Thanks!"],
          answer: [1, 0, 2],
          hint: "Порядок задан в условии.",
          why: "Can I sit here? Yes, of course. Thanks!",
        },
        {
          id: "z2-napisat-prosbu-i-blagodarnost",
          kind: "short",
          prompt:
            "Напиши два предложения: попроси незнакомого человека помочь и поблагодари. " +
            "Помочь — help.",
          answer: "Can you help, please? Thanks!",
          // Условие про please не говорит ни слова, а принимался ответ только с
          // ним — при том что модуль сам учит: без please просьба тоже верна.
          // Задание наказывало за верный ответ. Нашёл методист.
          accept: [
            "Can you help, please? Thank you!",
            "Can you help? Thanks!",
            "Can you help? Thank you!",
          ],
          hint: "Сначала просьба, потом благодарность.",
          why:
            "Can you help, please? Thanks! Годится и полное Thank you, и просьба без " +
            "please — оно необязательное.",
        },
        {
          id: "z3-dopisat-v-razgovore",
          kind: "gap",
          prompt: "Тебе предложили кофе, и ты соглашаешься. Допиши недостающее слово.",
          before: "Would you like a coffee? — Yes, ",
          after: ".",
          answer: "please",
          hint: "С согласием идёт одно слово.",
          why: "Yes, please. С отказом было бы No, thank you.",
        },
        {
          id: "z4-otmetit-prikaz",
          kind: "hottext",
          prompt: "Отметь записи, которые звучат как указание, а не как просьба.",
          parts: [
            { text: "Can you help, please?", selectable: true },
            { text: " · " },
            { text: "Help me.", selectable: true, correct: true },
            { text: " · " },
            { text: "Open the door.", selectable: true, correct: true },
            { text: " · " },
            { text: "Can you open the door?", selectable: true },
          ],
          hint: "Просьба строится вопросом, а указание начинается с глагола.",
          why:
            "Указания — Help me и Open the door: предложение начинается с глагола. " +
            "Can you help, please? и Can you open the door? — просьбы.",
        },
        {
          id: "z5-razgovor-vsluh",
          kind: "speak",
          prompt: "Разыграй вслух разговор в кафе за обоих: спроси разрешения, ответь согласием, поблагодари.",
          phrase: "Can I sit here? Yes, of course. Thanks!",
          translation: "Можно мне здесь сесть? Да, конечно. Спасибо!",
          hint: "Три коротких предложения, и в конце благодарность.",
          why:
            "Три реплики — уже разговор. В нём есть вопрос, ответ и благодарность.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Правила в общественном месте — текст, который весь состоит
    // из указаний и запретов. Именно так они и встречаются в жизни.
    // =====================================================================
    {
      slug: "chitaem-pravila",
      title: "Читаем правила",
      estimatedMinutes: 13,
      outcome: "понимать по объявлению, что делать и чего делать нельзя",

      blocks: [
        {
          id: "zachem-chitat-pravila",
          kind: "explain",
          text: [
            "Правила в общественном месте пишут короткими указаниями, без слова «ты». " +
              "Open the door — «открой дверь», и понятно, что это к тебе.",
            "Запрет отличается одним словом в начале: Don't. Оно и переворачивает " +
              "указание в противоположное.",
          ],
        },
        {
          id: "pravila-v-biblioteke",
          kind: "text",
          genre: "notice",
          title: "LIBRARY",
          body: [
            "Please close the door.",
            "Don't eat here.",
            "Don't use your phone.",
            "Open: Monday — Saturday",
          ],
          glossary: [
            { term: "close", translation: "закрывать" },
            { term: "eat", translation: "есть, кушать" },
            { term: "use", translation: "пользоваться" },
          ],
        },
        {
          id: "razbor-pravil",
          kind: "note",
          tone: "info",
          text:
            "Слово please в первой строке не меняет смысла указания — оно смягчает " +
              "его. В запретах его не ставят: запрет и так короткий.",
        },
        {
          id: "zapiska-s-prosboy",
          kind: "text",
          genre: "message",
          title: "A message from Aigul",
          body: [
            "Hi! Can you help me on Sunday?",
            "Please come at ten. Don't come at nine, I am busy.",
            "Thank you! Aigul",
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-nelzya-v-biblioteke",
          kind: "hottext",
          about: "pravila-v-biblioteke",
          prompt: "Прочитай объявление LIBRARY. Отметь то, чего там делать нельзя.",
          parts: [
            { text: "close the door", selectable: true },
            { text: "eat here", selectable: true, correct: true },
            { text: "use your phone", selectable: true, correct: true },
          ],
          hint: "Запрет начинается со слова Don't.",
          why:
            "Don't eat here. Don't use your phone. А дверь как раз просят закрывать: " +
            "Please close the door.",
        },
        {
          id: "z2-chto-prosyat-sdelat",
          kind: "short",
          about: "pravila-v-biblioteke",
          prompt:
            "Прочитай объявление LIBRARY. Что просят сделать? Ответь английским словом " +
            "из первой строки.",
          answer: "close",
          accept: ["close the door"],
          hint: "Это единственная строка со словом please.",
          why: "Please close the door. Закрывать дверь.",
        },
        {
          id: "z3-rabotaet-li-v-voskresene",
          kind: "choice",
          about: "pravila-v-biblioteke",
          prompt: "Прочитай объявление LIBRARY. Работает ли библиотека в воскресенье?",
          options: [
            { text: "Работает" },
            { text: "Не работает", correct: true },
            { text: "Про воскресенье не сказано" },
          ],
          hint: "Последняя строка называет промежуток дней через тире.",
          why:
            "Open: Monday — Saturday. С понедельника по субботу. Воскресенье в этот " +
            "промежуток не входит.",
        },
        {
          id: "z4-vo-skolko-prihodit",
          kind: "short",
          about: "zapiska-s-prosboy",
          prompt:
            "Прочитай записку от Айгуль. Во сколько она просит прийти? Ответь цифрой.",
          answer: "10",
          accept: ["ten", "десять", "10 o'clock"],
          hint: "В записке названы два времени: одно с please, другое с Don't.",
          why:
            "Please come at ten. Don't come at nine. Десять — просьба, девять — запрет.",
        },
        {
          id: "z5-pochemu-ne-v-devyat",
          kind: "choice",
          about: "zapiska-s-prosboy",
          prompt: "Прочитай записку от Айгуль. Почему нельзя приходить в девять?",
          options: [
            { text: "Она будет занята", correct: true },
            { text: "Её не будет дома" },
            { text: "Причина не названа" },
          ],
          hint: "Причина стоит в том же предложении, после запятой.",
          why: "Don't come at nine, I am busy. Она занята.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-prosby",
      title: "Слушаем просьбы",
      estimatedMinutes: 13,
      outcome: "различать на слух указание, запрет и просьбу",

      blocks: [
        {
          id: "zachem-slushat-prosby",
          kind: "explain",
          text: [
            "Указание, запрет и просьба звучат по-разному, и различает их первое слово. " +
              "Open — указание, Don't open — запрет, Can you open — просьба.",
            "Значит слушать надо самое начало. Дальше во всех трёх идёт одно и то же " +
              "дело, и по нему не различишь ничего.",
          ],
        },
        {
          id: "tri-nachala",
          kind: "table",
          caption: "Три начала — нажми и сравни",
          zvuk: {
            "Open the door.": "Open the door.",
            "Don't open the door.": "Don't open the door.",
            "Can you open the door?": "Can you open the door?",
          },
          head: ["Что это", "Как звучит"],
          rows: [
            ["указание", "Open the door."],
            ["запрет", "Don't open the door."],
            ["просьба", "Can you open the door?"],
          ],
        },
        {
          id: "prosba-dlinnee",
          kind: "note",
          tone: "info",
          text:
            "Просьбу узнать легче двух других: она длиннее на два слова и кончается " +
              "вопросом. Указание и запрет короткие, и различает их только Don't.",
        },
        {
          id: "zapis-ukazaniya-i-zaprety",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "Please close the door. Don't eat here. Can you help me?",
        },
        {
          id: "zapis-razgovor-s-prosboy-o-meste",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Can I sit here? — Yes, of course. — Can I use your pen? — " +
            "Sorry, I can't. I am writing.",
        },

        // ---- задания ----
        {
          id: "z1-skolko-zapretov",
          kind: "choice",
          about: "zapis-ukazaniya-i-zaprety",
          prompt: "Послушай первую запись. Сколько в ней запретов?",
          options: [
            { text: "Один", correct: true },
            { text: "Два" },
            { text: "Ни одного" },
          ],
          hint: "Запрет начинается с Don't.",
          why:
            "Don't eat here — запрет один. Please close the door — указание, Can you " +
            "help me? — просьба.",
        },
        {
          id: "z2-o-chem-prosyat",
          kind: "short",
          about: "zapis-ukazaniya-i-zaprety",
          prompt:
            "Послушай первую запись. О чём в ней просят? Ответь английским словом.",
          answer: "help",
          accept: ["to help", "help me"],
          hint: "Просьба — самое длинное предложение, и оно кончается вопросом.",
          why: "Can you help me? О помощи.",
        },
        {
          id: "z3-mozhno-li-sest",
          kind: "choice",
          about: "zapis-razgovor-s-prosboy-o-meste",
          prompt: "Послушай разговор. Разрешили ли сесть?",
          options: [
            { text: "Разрешили", correct: true },
            { text: "Не разрешили" },
            { text: "Про место не спрашивали" },
          ],
          hint: "Первый ответ идёт сразу после первой просьбы.",
          why: "Can I sit here? — Yes, of course. Разрешили.",
        },
        {
          id: "z4-pochemu-otkazali",
          kind: "choice",
          about: "zapis-razgovor-s-prosboy-o-meste",
          prompt: "Послушай разговор. Почему не дали ручку?",
          options: [
            { text: "Ручки нет" },
            { text: "Ею сейчас пишут", correct: true },
            { text: "Причину не назвали" },
          ],
          hint: "После отказа человек объясняет причину.",
          why:
            "Sorry, I can't. I am writing. Отказ смягчён словом sorry, а причина " +
            "названа следом.",
        },
        {
          id: "z5-poprosit-i-zapretit",
          kind: "speak",
          prompt:
            "Произнеси вслух три предложения об одном и том же деле: указание, запрет " +
            "и просьбу.",
          phrase: "Close the door. Don't close the door. Can you close the door?",
          translation: "Закрой дверь. Не закрывай дверь. Можешь закрыть дверь?",
          hint: "Дело во всех трёх одно, меняется только начало.",
          why:
            "Собеседник различает их по первому слову. Проглотишь Don't — и запрет " +
            "услышится указанием, то есть наоборот.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа не повторяет задания уроков: другие глаголы, другие случаи,
      // другой пропущенный кусок.

      // ---- итог 1 ----
      // ---- чтение и слушание ------------------------------------------
      // Другой случай, чем в уроках: там правила библиотеки и записка Айгуль,
      // здесь объявление в автобусе и разговор о телефоне.
      {
        id: "q-obyavlenie-chto-zapreshcheno",
        kind: "choice",
        outcome: "понимать по объявлению, что делать и чего делать нельзя",
        prompt:
          "Объявление в автобусе: «Please close the window. Don't eat here. " +
          "Don't open the door.» Что просят СДЕЛАТЬ?",
        options: [
          { text: "Открыть дверь" },
          { text: "Закрыть окно", correct: true },
          { text: "Ничего не просят, только запрещают" },
        ],
        why:
          "Please close the window. Это единственная строка без Don't — значит " +
          "единственное указание, а не запрет.",
      },
      {
        id: "q-obyavlenie-skolko-zapretov",
        kind: "short",
        outcome: "понимать по объявлению, что делать и чего делать нельзя",
        prompt:
          "То же объявление: «Please close the window. Don't eat here. Don't open the " +
          "door.» Сколько в нём запретов? Ответь цифрой.",
        answer: "2",
        accept: ["два", "две"],
        why: "Don't eat here и Don't open the door. Два запрета.",
      },
      {
        id: "q-na-sluh-chto-eto-bylo",
        kind: "choice",
        outcome: "различать на слух указание, запрет и просьбу",
        zvuk: "Can you close the window?",
        prompt: "Послушай запись. Это указание, запрет или просьба?",
        options: [
          { text: "Указание" },
          { text: "Просьба", correct: true },
          { text: "Запрет" },
        ],
        why:
          "Can you close the window? Начинается с Can you и кончается вопросом — " +
          "значит просьба. Указание было бы просто Close the window.",
      },
      {
        id: "q-na-sluh-chto-nelzya",
        kind: "short",
        outcome: "различать на слух указание, запрет и просьбу",
        zvuk: "Please sit here. Don't use your phone.",
        prompt:
          "Послушай запись. Чем нельзя пользоваться? Ответь английским словом.",
        answer: "phone",
        accept: ["your phone", "a phone"],
        why: "Don't use your phone. Телефоном.",
      },
      {
        id: "q-ukazanie-vybor",
        kind: "choice",
        outcome: "давать указание: Open the door",
        prompt: "Ты просишь знакомого сесть здесь. Как сказать?",
        options: [
          { text: "You sit here." },
          { text: "Sit here.", correct: true },
          { text: "To sit here." },
        ],
        hint: "Перед глаголом здесь ничего не стоит.",
        why:
          "Sit here. Первое предложение сообщает, что человек садится, а слово to в " +
          "указании не нужно.",
      },
      {
        id: "q-ukazanie-dopisat",
        kind: "gap",
        outcome: "давать указание: Open the door",
        prompt: "Ты просишь знакомого подойти сюда. Допиши глагол. Подойти — come.",
        before: "",
        after: " here.",
        answer: "Come",
        hint: "Глагол стоит как в словаре, и перед ним ничего нет.",
        why: "Come here. Указание начинается с глагола.",
      },
      {
        id: "q-ukazanie-sobrat",
        kind: "order",
        outcome: "давать указание: Open the door",
        prompt: "Собери указание: «Закрой дверь.»",
        items: ["door", "Close", "the"],
        answer: [1, 2, 0],
        hint: "Начни с того, что надо сделать.",
        why: "Close the door. Указание начинается с действия, и того, к кому обращаются, в нём не называют.",
      },

      // ---- итог 2 ----
      {
        id: "q-zapret-dopisat",
        kind: "gap",
        outcome: "запрещать: Don't open the door",
        prompt: "Ты просишь знакомого не закрывать дверь. Допиши недостающее слово.",
        before: "",
        after: " close the door.",
        answer: "Don't",
        accept: ["Do not"],
        hint: "Слово из двух частей, и место у него первое.",
        why: "Don't close the door. Don't — это сжатое do not, и длинная запись принимается тоже.",
      },
      {
        id: "q-zapret-vybor",
        kind: "choice",
        outcome: "запрещать: Don't open the door",
        prompt: "Ты просишь знакомого не приходить завтра. Как сказать?",
        options: [
          { text: "Don't come tomorrow.", correct: true },
          { text: "You don't come tomorrow." },
          { text: "Don't coming tomorrow." },
        ],
        hint: "Того, к кому обращаются, в запрете не называют.",
        why:
          "Don't come tomorrow. Второе предложение сообщает, что человек не приходит, " +
          "а окончание -ing после don't не ставят.",
      },
      {
        id: "q-zapret-napisat",
        kind: "short",
        outcome: "запрещать: Don't open the door",
        prompt: "Скажи знакомому, чтобы он не ждал здесь. Ждать — wait, здесь — here.",
        answer: "Don't wait here.",
        accept: ["Do not wait here.", "Don't wait here, please."],
        hint: "Перед глаголом встанет одно слово из двух частей.",
        why: "Don't wait here. Запрет собран из готового указания: впереди встало одно слово, остальное не изменилось.",
      },

      // ---- итог 3 ----
      {
        id: "q-please-dopisat",
        kind: "gap",
        outcome: "ставить please в указании и просьбе",
        prompt: "Ты просишь знакомого подойти сюда и добавляешь «пожалуйста» в конце.",
        before: "Come here, ",
        after: ".",
        answer: "please",
        hint: "В конце это слово идёт после запятой.",
        why: "Come here, please. В конце please отделяют запятой.",
      },
      {
        id: "q-please-vybor",
        kind: "choice",
        outcome: "ставить please в указании и просьбе",
        prompt: "Ты просишь знакомого открыть дверь и добавляешь «пожалуйста». Как сказать?",
        options: [
          { text: "Open please the door." },
          { text: "Open the please door." },
          { text: "Open the door, please.", correct: true },
        ],
        hint: "В середину указания это слово не встаёт.",
        why: "Open the door, please. Вежливое слово ждёт конца указания. В середине оно разделило бы действие и дверь.",
      },
      {
        id: "q-please-napisat",
        kind: "short",
        outcome: "ставить please в указании и просьбе",
        prompt:
          "Скажи знакомому, чтобы он закрыл окно, и поставь «пожалуйста» в начале. " +
          "Закрыть — close, окно — the window.",
        answer: "Please close the window.",
        hint: "В начале please запятой не отделяют.",
        why: "Please close the window. Условие просило начало, поэтому запятой нет.",
      },

      // ---- итог 4 ----
      {
        id: "q-prosba-dopisat",
        kind: "gap",
        outcome: "просить: Can you help?",
        prompt: "Ты просишь незнакомого человека подождать. Допиши недостающее слово.",
        before: "",
        after: " you wait, please?",
        answer: "Can",
        hint: "Первое слово то же, что в вопросе «умеешь ли ты».",
        why: "Can you wait, please? Со словом can выходит вопрос, а вопрос звучит мягче прямого указания.",
      },
      {
        id: "q-prosba-vybor",
        kind: "choice",
        outcome: "просить: Can you help?",
        prompt: "Ты просишь незнакомого человека закрыть окно. Как сказать?",
        options: [
          { text: "Can you close the window?", correct: true },
          { text: "Can you closing the window?" },
          { text: "Can you to close the window?" },
        ],
        hint: "К глаголу здесь ничего не приделывают.",
        why: "Can you close the window? Ни окончание -ing, ни to после can не ставят.",
      },
      {
        id: "q-prosba-napisat",
        kind: "short",
        outcome: "просить: Can you help?",
        // «Can you help, please?» — сквозной пример модуля, он стоит в пяти местах
        // до этого вопроса. Ученик доставал строку из памяти. Взято другое дело.
        prompt: "Попроси незнакомого человека закрыть окно и добавь «пожалуйста». Закрыть — close, окно — the window.",
        answer: "Can you close the window, please?",
        accept: ["Can you please close the window?"],
        hint: "Начни с can, а please поставь в конец.",
        why: "Can you close the window, please? Просьба строится вопросом с can.",
      },

      // ---- итог 5 ----
      {
        id: "q-razreshenie-dopisat",
        kind: "gap",
        outcome: "спрашивать разрешения: Can I sit here?",
        prompt: "Ты просишь разрешения открыть окно. Допиши недостающее слово.",
        before: "Can ",
        after: " open the window?",
        answer: "I",
        exact: true,
        hint: "Окно откроешь ты, а не собеседник.",
        why: "Can I open the window? Разрешения спрашивают о себе, и после can встаёт I — всегда с заглавной.",
      },
      {
        id: "q-razreshenie-vybor",
        kind: "choice",
        outcome: "спрашивать разрешения: Can I sit here?",
        prompt: "Ты просишь разрешения подождать здесь. Как сказать?",
        options: [
          { text: "Can you wait here?" },
          { text: "Can me wait here?" },
          { text: "Can I wait here?", correct: true },
        ],
        hint: "Смотри, кто будет ждать.",
        why:
          "Can I wait here? В первом вопросе ждать будет собеседник, а слово me перед " +
          "глаголом не ставят.",
      },
      {
        id: "q-razreshenie-napisat",
        kind: "short",
        outcome: "спрашивать разрешения: Can I sit here?",
        // «Can I sit here?» — сквозной пример модуля, семь мест до этого вопроса.
        prompt: "Попроси разрешения подождать здесь. Ждать — wait, здесь — here.",
        answer: "Can I wait here?",
        accept: ["Can I wait here, please?"],
        hint: "Ждать собираешься ты — значит с себя и начинай после can.",
        why: "Can I wait here? Ждать будешь ты, значит после can стоит I.",
      },

      // ---- итог 6 ----
      {
        id: "q-priglashenie-dopisat",
        kind: "gap",
        outcome: "приглашать: Would you like to come?",
        prompt: "Ты приглашаешь друга на свою вечеринку. Допиши недостающее слово.",
        before: "Would you like to come to my ",
        after: "?",
        answer: "party",
        hint: "Слово называет то, куда ты зовёшь.",
        why: "Would you like to come to my party? Приглашение начинается с would.",
      },
      {
        id: "q-priglashenie-vybor",
        kind: "choice",
        outcome: "приглашать: Would you like to come?",
        prompt: "Ты предлагаешь другу кофе. Как сказать?",
        options: [
          { text: "Do you like a coffee?" },
          { text: "Would you like to a coffee?" },
          { text: "Would you like a coffee?", correct: true },
        ],
        hint: "Перед названием вещи слово to не нужно.",
        why:
          "Would you like a coffee? Вопрос с do спрашивает о вкусе вообще, а слово to " +
          "стоит только перед глаголом.",
      },
      {
        id: "q-priglashenie-napisat",
        kind: "short",
        outcome: "приглашать: Would you like to come?",
        prompt: "Пригласи друга прийти на твою вечеринку. Прийти — come, вечеринка — my party.",
        answer: "Would you like to come to my party?",
        hint: "Пять слов до глагола, и первое из них — не do.",
        why: "Would you like to come to my party? Приглашение открывает would, а само действие приходит после to.",
      },

      // ---- итог 7 ----
      {
        id: "q-otvet-vybor",
        kind: "choice",
        outcome: "отвечать, когда предлагают вещь, и когда зовут: Yes, please. Yes, I'd like to.",
        prompt: "Тебе предложили чаю, и ты соглашаешься. Как ответить?",
        options: [
          { text: "Yes, please.", correct: true },
          { text: "No, please." },
          { text: "Yes, thanks please." },
        ],
        hint: "С согласием идёт одно короткое слово.",
        why: "Yes, please. Слово please идёт с согласием, а «No, please» не говорят.",
      },
      {
        id: "q-otvet-dopisat",
        kind: "gap",
        outcome: "отвечать, когда предлагают вещь, и когда зовут: Yes, please. Yes, I'd like to.",
        prompt: "Тебе предложили кофе, а ты не хочешь. Допиши недостающее.",
        before: "No, ",
        after: ".",
        answer: "thank you",
        accept: ["thanks"],
        hint: "С отказом идёт благодарность.",
        why: "No, thank you. Годится и короткое No, thanks.",
      },
      {
        id: "q-otvet-napisat",
        kind: "short",
        outcome: "отвечать, когда предлагают вещь, и когда зовут: Yes, please. Yes, I'd like to.",
        prompt: "Тебя позвали прийти завтра, и ты соглашаешься. Ответь оборотом I'd like to.",
        answer: "Yes, I'd like to.",
        accept: ["Yes, I would like to."],
        hint: "На приглашение к делу отвечают тем же оборотом.",
        why: "Yes, I'd like to. Полная запись I would like to тоже верна.",
      },

      // ---- итог 8 ----
      {
        id: "q-razgovor-sobrat",
        kind: "order",
        outcome: "вести разговор с просьбой целиком",
        prompt: "Собери разговор: сначала предложение кофе, потом согласие, потом благодарность.",
        items: ["Thanks!", "Would you like a coffee?", "Yes, please."],
        answer: [1, 2, 0],
        hint: "Сначала предложение, потом согласие, потом благодарность.",
        why: "Would you like a coffee? Yes, please. Thanks!",
      },
      {
        id: "q-razgovor-napisat",
        kind: "short",
        outcome: "вести разговор с просьбой целиком",
        prompt:
          "Напиши два предложения: попроси разрешения сесть здесь и поблагодари. " +
          "Сесть — sit, здесь — here.",
        answer: "Can I sit here? Thanks!",
        accept: ["Can I sit here? Thank you!"],
        hint: "Сначала вопрос, потом благодарность.",
        why: "Can I sit here? Thanks! Предложения два, и знак вопроса нужен только первому. Вместо Thanks принимается и Thank you.",
      },
      {
        id: "q-razgovor-vybor",
        kind: "choice",
        outcome: "вести разговор с просьбой целиком",
        prompt: "Что из этого прозвучит как просьба, а не как указание?",
        options: [
          { text: "Wait." },
          { text: "Can you wait, please?", correct: true },
          { text: "Don't wait." },
        ],
        hint: "Одно из трёх построено как вопрос.",
        why:
          "Can you wait, please? Просьба строится вопросом. Wait — указание, " +
          "Don't wait — запрет, и оба звучат прямо.",
      },
    ],
  },
};

export default module;
