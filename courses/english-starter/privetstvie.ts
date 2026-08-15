import type { Module } from "@/lib/content/types";

/**
 * Модуль 2 курса «Английский с нуля»: приветствие и имя.
 *
 * Первый модуль, написанный по формату из docs/format-uroka.md, — на него
 * равняются остальные. В курсе он стоит вторым: первым идёт алфавит, без
 * которого не прочитать даже транскрипцию в словаре урока.
 *
 * Состав сверен с программой docs/programma-english-starter.md.
 *
 * ЧТО ЗДЕСЬ НЕ ТАК, И ЭТО ИЗВЕСТНО:
 *
 * 1. Звука нет. Блок `audio` требует записей, а решение об их источнике за
 *    владельцем (docs/zadachi-vladeltsa.md, п. 1.4). До появления записей
 *    произношение дано международной транскрипцией, британская норма.
 *
 *    Русские подсказки вроде «хэЛОУ» здесь были и УБРАНЫ: методист показал, что
 *    они учат ошибке — «гуд» оглушает согласный, «сэнк» подменяет /θ/ русским
 *    «с», «эм» подменяет /æ/. Возвращать их нельзя.
 *
 *    Транскрипции сверены по трём источникам (см. docs/transkripciya-english-starter.md).
 *    Где источники расходились, выбрана словарная британская норма; спорные
 *    случаи — сильные и слабые формы are, to, am — оставлены в сильной форме,
 *    как принято при первом знакомстве со словом.
 *
 * 2. Итоги написаны как устные («здоровается», «называет имя»), а проверяются
 *    письменно: устное задание машина не оценивает и в проверочную работу не
 *    попадает. Разрыв признан открыто и закрывается тем же решением о звуке.
 *
 * 3. Уроков восемь — столько, сколько отводит программа. Модуль написан целиком.
 *    Первые три — речевые обороты целиком, следующие три разбирают их устройство
 *    (местоимения, be, короткие формы), седьмой добавляет переспрос, восьмой
 *    собирает всё в один разговор. Порядок намеренный: сначала оборот, потом
 *    разбор, а не наоборот.
 *
 * 4. Утверждения о том, кому и когда задают How are you?, как принято отвечать
 *    и что считается невежливым, из уроков УБРАНЫ: таких сведений нет ни в одном
 *    источнике в materials/. Руководства Cambridge описывают устройство
 *    экзамена и словники, документы Совета Европы — умения; разговорных
 *    обычаев не описывает никто. Если владелец как преподаватель подтвердит
 *    их из своего опыта, их можно вернуть — но уже как его свидетельство.
 *
 *    Проверка второй очереди нашла ещё четыре таких же места, пережившие первую:
 *    «hi чаще звучит между знакомыми», «эти три звучат учтивее и потому часто
 *    выбираются», «ответ короткий и всегда один и тот же», «разговор чаще всего
 *    обрывается». Все сняты. Вывод для следующих модулей: эту породу ошибки
 *    приходится вычищать не один раз, и одного прохода не хватает.
 *
 * 5. Артикль и множественное число программа отдаёт модулям 3 и 8, поэтому в
 *    уроках 4–8 их нет: примеры построены на именах и на fine/OK. Первый вариант
 *    уроков был полон «We're students» и «He is a teacher» — проверка это сняла.
 *    Краткий ответ «Yes, I am» по той же причине убран: он материал модуля 4.
 */
const module: Module = {
  slug: "privetstvie",
  title: "Приветствие",

  sources: [
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "Conversation, Pre-A1 и A1 (с. 74) — «greet people, state their name and take leave»; " +
        "Sociolinguistic appropriateness, A1 (с. 137) — простейшие приветствия без выбора между ними",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1, PRONOUNS subject/object «FORM: (SUBJECT) STATEMENTS» — дословно: «Can use the " +
        "pronouns 'I', 'you', 'he', 'she', 'it', 'we' and 'they' in the subject position " +
        "before a verb in statements». Состав урока о местоимениях — эти семь слов, взяты " +
        "отсюда поимённо. " +
        "A1, PRONOUNS subject/object «FORM: (SUBJECT) 'IT' FOR FIRST PERSON»: «Can use the " +
        "pronoun 'it' before 'be' to refer to a first person speaker or writer», пример " +
        "источника — «Hello Mrs Bishop. It's Clarisse». Это опора врезки о том, что о " +
        "звонящем или вошедшем говорят it. Прежняя редакция писала «ничего не добавлено», " +
        "хотя врезка добавлена: нашёл методист, строка найдена и названа. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'»: «Can use linking verb 'be'» — отсюда " +
        "урок о am/is/are. " +
        "A1, строка 5865: VERBS types «LINKING VERB 'BE'». " +
        "A1, строка 954: CLAUSES interrogatives «AFFIRMATIVE INTERROGATIVE, WITH 'BE'» — " +
        "пример источника дословно «How are you?». Этой строкой покрыты ОБА вопроса модуля: " +
        "и «How are you?», и «What's your name?» — они одного строения, и разметить их " +
        "по-разному было бы ошибкой. " +
        "A1, строка 168: ADJECTIVES position «PREDICATIVE, WITH 'BE'» (I'm fine). " +
        "A1: DETERMINERS possessives «WITH NOUNS» (your)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: hello, hi, good, morning, afternoon, " +
        "evening, night, bye, goodbye, see, you, your, I, be, name, what, nice, meet, too, " +
        "how, fine, OK, please, thank, thanks, sorry, welcome, he, she, it, we, they, " +
        "yes, again. " +
        "ОГОВОРКА: am, is и are отдельными словами в словнике не стоят — там одна запись " +
        "«be v. A1», и формы покрыты ею",
      license: "внутреннее использование",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — третий урок",
      section:
        "с. 74, Conversation, A1: «Can ask how people are and react to news». " +
        "с. 137, Sociolinguistic appropriateness, A1: «saying please, thank you, sorry». " +
        "СВЕРХ СТУПЕНИ: ответ на благодарность (you're welcome) — в руководстве A2 Key, " +
        "с. 51, функция «expressing and responding to thanks» отнесена к A2. " +
        "Взято по решению 1 программы: без ответа на спасибо разговор обрывается",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 42 и 44 — речь экзаменатора в устной части. Три строки бланка идут одна под " +
        "другой: «Good morning / afternoon / evening.», «and this is …….… .» и вопрос об " +
        "имени. Набор фраз урока 2 взят отсюда",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — урок о переспросе",
      section:
        "СВЕРХ СТУПЕНИ, И ЭТО ГЛАВНОЕ ЗДЕСЬ. с. 89, шкала Asking for clarification: просьба " +
        "повторить стоит на A2 («Can ask very simply for repetition when they do not " +
        "understand»; «Can signal non-understanding and ask for a word/sign to be spelt " +
        "out»). На A1 та же шкала даёт только «Can indicate with simple words/signs, intonation " +
        "and gestures that they do not understand». То же в руководстве A2 Key, с. 51: " +
        "«asking for repetition and clarification» — в списке функций A2. " +
        "Взято по решению 1 программы: разговор на первой ступени, по описанию той же " +
        "книги (с. 72, Overall oral interaction, A1), «totally dependent on repetition at " +
        "a slower rate, rephrasing and repair» — то есть ученику придётся переспрашивать " +
        "раньше, чем он дорастёт до ступени, где это умение описано. " +
        "Оговорка, которую нельзя опускать: цитата с. 72 описывает не умение просить, а " +
        "зависимость от того, что повторяет СОБЕСЕДНИК. Основанием для урока она сама по " +
        "себе не является — основание в решении 1. " +
        "ЧЕГО В ИСТОЧНИКАХ НЕТ: какими именно словами переспрашивают и что из них вежливее. " +
        "Поэтому Sorry?, Again, please и How do you spell that? взяты как обороты из уже " +
        "пройденного словаря, а не как «принятые» формулы",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — урок «Разговор целиком»",
      section:
        "с. 74, Conversation, Pre-A1: «Can greet people, state their name and take leave in " +
        "a simple way» — все три шага в одном описании, отсюда сборочный урок в конце " +
        "модуля. Дескриптор именно Pre-A1; A1 на той же странице говорит другое: «Can make " +
        "an introduction and use basic greeting and leave-taking expressions». " +
        "Порядок шагов (приветствие, имя, вежливый отклик, вопрос о делах, ответ, " +
        "прощание) источником не задан: это сборка из уже разобранных частей, а не " +
        "утверждение о том, как разговор устроен на самом деле. Так он и подан ученику",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Короткие формы be — урок 6",
      section:
        "ОТДЕЛЬНОГО ОПИСАНИЯ У ЭТОГО УМЕНИЯ НЕТ ни в English Grammar Profile, ни в " +
        "описаниях Совета Европы: поиск по CONTRACT, APOSTROPHE, 'M, 'RE даёт на A1 и A2 " +
        "одну строку, и та про отрицание (A1, NEGATION: «with contracted and uncontracted " +
        "forms»). Косвенные основания: та же строка показывает, что стяжённые формы на A1 " +
        "предполагаются, а речь экзаменатора в руководстве A2 Key (с. 42) начинается с " +
        "«I'm …». Короткие формы уже стоят в уроках 1–3 этого модуля, поэтому урок не " +
        "вводит новое, а разбирает встреченное",
      license: "внутренний разбор",
    },
  ],

  outcomes: [
    "здороваться, выбирая приветствие по времени дня, и прощаться",
    "называть своё имя и понимать, когда имя спрашивают",
    "отвечать на вопрос о делах, к месту говорить please, thank you и sorry и узнавать you're welcome",
    "ставить местоимение перед глаголом: I, you, he, she, it, we, they",
    "выбирать am, is или are по слову перед глаголом",
    "узнавать и писать короткие формы глагола be: I'm, you're, he's",
    "просить повторить сказанное и переспрашивать имя",
    "вести короткий разговор при знакомстве: от приветствия до прощания",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "hello-i-hi",
      title: "Hello и hi",
      estimatedMinutes: 12,
      outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",

      blocks: [
        {
          id: "dva-privetstviya",
          kind: "explain",
          text: [
            "В английском два повседневных приветствия: hello и hi. Они значат одно и то же " +
              "и оба подходят почти везде — в магазине, на работе, при встрече с незнакомым " +
              "человеком. Начни с любого.",
            "Ошибиться здесь нельзя: ни одно из двух приветствий никого не обидит.",
          ],
        },
        {
          id: "chtenie-hello",
          kind: "note",
          tone: "info",
          text:
            "Произношение записано той же транскрипцией, что и в модуле про алфавит: " +
            "hello — /həˈləʊ/. Значок ˈ стоит перед ударным слогом, значит ударение " +
            "здесь на втором.",
        },
        {
          id: "vremya-dnya",
          kind: "explain",
          text: [
            "Кроме hello есть приветствия по времени дня. Good morning — до полудня. " +
              "Good afternoon — с полудня до вечера. Good evening — вечером.",
            "Все три устроены одинаково: good и время суток. Заучивать их по отдельности " +
              "не придётся — достаточно знать три слова: morning, afternoon, evening.",
          ],
        },
        {
          id: "tablica-vremeni",
          kind: "table",
          caption: "Приветствия по времени дня",
          head: ["Английский", "Когда", "Как читается"],
          rows: [
            ["Good morning", "с утра до полудня", "/ˌgʊd ˈmɔːnɪŋ/"],
            ["Good afternoon", "с полудня до вечера", "/ˌgʊd ˌɑːftəˈnuːn/"],
            ["Good evening", "вечером", "/ˌgʊd ˈiːvnɪŋ/"],
          ],
        },
        {
          id: "good-night-oshibka",
          kind: "note",
          tone: "mistake",
          text:
            "Good evening говорят при встрече вечером. Good night — уходя или ложась спать, " +
            "как русское «спокойной ночи». Слова похожи, а случаи противоположные, поэтому " +
            "запомни эту пару целиком.",
        },
        {
          id: "proshchanie",
          kind: "explain",
          text: [
            "Прощаются словом goodbye или коротким bye. Ещё говорят see you — " +
              "дословно «увидимся». Все три подходят для повседневного разговора.",
            "Отдельно стоит good night. Это не приветствие: его говорят, расставаясь поздно " +
              "вечером или уходя спать, как русское «спокойной ночи». Здороваться вечером " +
              "нужно словами good evening.",
          ],
        },
        {
          // Заготовка: место под запись размечено, звука ещё нет. Слушание идёт
          // с первого урока не для полноты набора — описания ступени требуют
          // речи «very slowly and clearly», а ухо привыкает только временем.
          id: "zapis-privetstviya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай и повтори",
          transcript: "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye.",
        },
        {
          id: "slovar-1",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "hello", translation: "здравствуйте, привет", example: "Hello!", hint: "/həˈləʊ/" },
            { term: "hi", translation: "привет", example: "Hi!", hint: "/haɪ/" },
            {
              term: "good morning",
              translation: "доброе утро",
              example: "Good morning!",
              hint: "/ˌgʊd ˈmɔːnɪŋ/",
            },
            {
              term: "good afternoon",
              translation: "добрый день",
              example: "Good afternoon!",
              hint: "/ˌgʊd ˌɑːftəˈnuːn/",
            },
            {
              term: "good evening",
              translation: "добрый вечер",
              example: "Good evening!",
              hint: "/ˌgʊd ˈiːvnɪŋ/",
            },
            {
              term: "good night",
              translation: "спокойной ночи",
              example: "Good night!",
              hint: "/ˌgʊd ˈnaɪt/",
            },
            { term: "goodbye", translation: "до свидания", example: "Goodbye!", hint: "/gʊdˈbaɪ/" },
            { term: "bye", translation: "пока", example: "Bye!", hint: "/baɪ/" },
            { term: "see you", translation: "увидимся", example: "See you!", hint: "/ˈsiː juː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vremya-dnya",
          kind: "choice",
          prompt: "Ты заходишь в кафе в три часа дня. Как поздороваться?",
          options: [
            { text: "Good morning" },
            { text: "Good afternoon", correct: true },
            { text: "Good night" },
          ],
          hint: "Полдень уже прошёл, вечер ещё не наступил.",
          why:
            "Good afternoon — с полудня до вечера. Good morning уже поздно, а good night — " +
            "это прощание перед сном, а не приветствие.",
        },
        {
          id: "z2-good-night",
          kind: "choice",
          prompt: "Вечер, ты уходишь домой из гостей. Что сказать хозяевам?",
          options: [
            { text: "Good evening" },
            { text: "Good night", correct: true },
            { text: "Good morning" },
          ],
          hint: "Ты расстаёшься, а не здороваешься.",
          why:
            "Good night говорят при расставании поздно вечером. Good evening в этот момент " +
            "прозвучало бы так, будто ты только входишь.",
        },
        {
          id: "z3-napisat-privetstvie",
          kind: "gap",
          prompt: "Допиши приветствие, которое говорят утром.",
          before: "Good ",
          after: "!",
          answer: "morning",
          hint: "Утро по-английски.",
          why: "Good morning — приветствие до полудня.",
        },
        {
          id: "z4-otmetit-proshchaniya",
          kind: "hottext",
          prompt: "Отметь слова, которыми прощаются.",
          parts: [
            { text: "Hello", selectable: true },
            { text: " · " },
            { text: "Bye", selectable: true, correct: true },
            { text: " · " },
            { text: "Good evening", selectable: true },
            { text: " · " },
            { text: "See you", selectable: true, correct: true },
          ],
          hint: "Два из четырёх говорят при расставании.",
          why:
            "Bye и see you говорят при расставании. Hello и good evening — приветствия: " +
            "словами good evening здороваются вечером, а прощаются словами good night.",
        },
        {
          id: "z5-poryadok-razgovora",
          kind: "order",
          prompt: "Расставь фразы в том порядке, в каком их говорят в течение суток.",
          items: ["Good evening!", "Good morning!", "Good night!", "Good afternoon!"],
          answer: [1, 3, 0, 2],
          hint: "Утро, день, вечер — и то, что говорят последним, уходя спать.",
          why:
            "Good morning до полудня, good afternoon до вечера, good evening вечером. " +
            "Good night завершает сутки: это прощание, а не приветствие.",
        },
        {
          id: "z6-napisanie-hello",
          kind: "short",
          prompt: "Запиши по-английски приветствие, которое подходит в любое время дня.",
          answer: "hello",
          accept: ["hi"],
          hint: "Пять букв, две из них одинаковые и стоят рядом. Подойдёт и второе приветствие — оно из двух букв.",
          why:
            "Hello и hi годятся в любое время. В hello два l подряд, хотя слышится один звук: " +
            "написание и произношение в английском часто расходятся, и это придётся запоминать.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-vas-zovut",
      title: "Как тебя зовут",
      estimatedMinutes: 14,
      outcome: "называть своё имя и понимать, когда имя спрашивают",

      blocks: [
        {
          id: "ya-eto-i-am",
          kind: "explain",
          text: [
            "Чтобы назвать себя, по-английски говорят I am и своё имя: I am Alim. " +
              "Слово I — «я». Второе слово, am, идёт только после I и больше ни после " +
              "чего. Что это за слово, разберём в этом же модуле, в уроке про am, is и are.",
            "В русском в такой фразе глагола нет вовсе: «я Алим». В английском он обязателен. " +
              "Пропустить am нельзя: без него фраза остаётся незаконченной.",
          ],
        },
        {
          id: "primer-i-am",
          kind: "example",
          caption: "Как это выглядит",
          text: "I am Alim. — Я Алим.\nI am Dana. — Я Дана.",
          explain:
            "Порядок слов один и тот же: сначала I, потом am, потом имя. Имя пишется " +
            "с заглавной буквы — как и в русском.",
        },
        {
          id: "im-korotko",
          kind: "explain",
          text: [
            "В разговоре I am почти всегда сокращают до I'm. Значок между буквами называется " +
              "апострофом, он показывает, что букву a пропустили.",
            "Полное I am пишут и говорят, когда хотят выделить сказанное голосом: " +
              "I am Alim — «Алим — это я». В остальных случаях годится I'm.",
          ],
        },
        {
          id: "net-ty-i-vy",
          kind: "note",
          tone: "info",
          text:
            "Важное отличие от русского: в английском нет разницы между «ты» и «вы». Одно " +
            "слово you годится и для друга, и для начальника, и для незнакомого человека. " +
            "Поэтому your переводится и «твой», и «ваш» — по обстановке. Выбирать форму " +
            "обращения, как в русском, здесь не придётся: её просто нет.",
        },
        {
          id: "zaglavnaya-i",
          kind: "note",
          tone: "mistake",
          text:
            "Ловушка на письме: I пишется заглавной буквой везде, а не только в начале " +
            "предложения. Другие короткие слова так себя не ведут: am, is, your в середине " +
            "предложения пишутся с маленькой. В модуле про алфавит с заглавной писались " +
            "имена, страны и языки, а I требует её само по себе.",
        },
        {
          id: "vopros-imya",
          kind: "explain",
          text: [
            "Этот вопрос уже попадался в модуле про алфавит — там его брали целиком, не " +
              "разбирая. Теперь разберём. Спрашивают имя двумя способами: What is your " +
              "name? — дословно «какое есть твоё имя», и короче: What's your name? Здесь " +
              "what is стянуто апострофом.",
            "Отвечают либо полной фразой I'm Alim, либо одним именем: Alim. Оба ответа " +
              "правильны.",
          ],
        },
        {
          id: "primer-dialog",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Hello! What's your name?\n— I'm Dana. And you?\n— I'm Alim. Nice to meet you.\n— Nice to meet you too.",
          explain:
            "And you? — «а ты?»: так возвращают вопрос, не повторяя его целиком. " +
            "Nice to meet you — «приятно познакомиться», а too в ответе значит «тоже».",
        },
        {
          id: "slovar-2",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "I", translation: "я — всегда с заглавной буквы", example: "I am Alim.", hint: "/aɪ/" },
            { term: "am", translation: "есть (только после I)", example: "I am here.", hint: "/æm/" },
            { term: "I'm", translation: "я (короткая форма I am)", example: "I'm Dana.", hint: "/aɪm/" },
            { term: "name", translation: "имя", example: "What's your name?", hint: "/neɪm/" },
            { term: "your", translation: "ваш, твой", example: "your name", hint: "/jɔː/" },
            { term: "what", translation: "что, какой", example: "What's your name?", hint: "/wɒt/" },
            {
              term: "nice to meet you",
              translation: "приятно познакомиться",
              example: "Nice to meet you.",
              hint: "/ˌnaɪs tə ˈmiːt juː/",
            },
            { term: "too", translation: "тоже", example: "Nice to meet you too.", hint: "/tuː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-sebya",
          kind: "gap",
          prompt: "Допиши слово, чтобы получилось «Я Дана».",
          before: "I ",
          after: " Dana.",
          answer: "am",
          hint: "Форма глагола be, которая идёт со словом I.",
          why:
            "Со словом I идёт только am. Пропустить его нельзя: в английском " +
            "глагол в таком предложении обязателен.",
        },
        {
          id: "z2-kratkaya-forma",
          kind: "short",
          prompt: "Запиши фразу I am Alim в краткой форме.",
          answer: "I'm Alim",
          // Сверка с учётом заглавных: без неё задание засчитывало «i'm alim», а
          // следующее задание того же урока объявляет «i'm» ошибкой. Ученик
          // получал «верно» за то, что через минуту назовут неверным.
          exact: true,
          hint: "Апостроф встаёт на место пропущенной буквы.",
          why:
            "I am сокращается до I'm: апостроф заменяет букву a. Так говорят почти всегда, " +
            "а полная форма нужна, только когда фразу выделяют голосом.",
        },
        {
          id: "z3-zaglavnaya",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой.",
          parts: [
            { text: "I'm", selectable: true },
            { text: " · " },
            { text: "i am", selectable: true, correct: true },
            { text: " · " },
            { text: "What's", selectable: true },
            { text: " · " },
            { text: "i'm", selectable: true, correct: true },
          ],
          hint: "Одно слово в английском всегда пишется с заглавной буквы.",
          why:
            "I пишется заглавной всегда, где бы ни стояло. Поэтому «i am» и «i'm» — ошибки, " +
            "а «I'm» и «What's» написаны верно.",
        },
        {
          id: "z4-vopros",
          kind: "choice",
          prompt: "Как спросить имя?",
          options: [
            { text: "Your name?" },
            { text: "What your name?" },
            { text: "What's your name?", correct: true },
          ],
          hint: "Нужны и вопросительное слово, и глагол.",
          why:
            "What's your name? Первый вариант — обрывок без глагола и вопросительного слова. " +
            "Во втором пропущен глагол is: без него английский вопрос не строится.",
        },
        {
          id: "z5-poryadok-dialoga",
          kind: "order",
          prompt: "Расставь реплики знакомства по порядку.",
          items: [
            "I'm Dana. And you?",
            "Hello! What's your name?",
            "Nice to meet you.",
            "I'm Alim.",
          ],
          answer: [1, 0, 3, 2],
          hint: "Сначала здороваются и спрашивают, потом отвечают и возвращают вопрос.",
          why:
            "Сначала приветствие с вопросом, потом ответ и встречный вопрос, затем отвечает " +
            "второй, и в конце звучит «приятно познакомиться».",
        },
        {
          id: "z6-sopostavit",
          kind: "match",
          prompt: "Сопоставь английскую фразу и её перевод.",
          left: ["I'm Alim.", "What's your name?", "And you?", "Nice to meet you."],
          right: ["Как тебя зовут?", "Приятно познакомиться.", "Я Алим.", "А ты?"],
          answer: [2, 0, 3, 1],
          hint: "Начни с фразы, в которой есть имя.",
          why:
            "Все четыре фразы вместе составляют знакомство: назвать себя, спросить имя, " +
            "вернуть вопрос, вежливо закончить.",
        },
        {
          id: "z7-svoyo-imya",
          kind: "speak",
          prompt: "Произнеси вслух, как ты представишься по-английски. Подставь своё имя.",
          phrase: "Hello! I'm ... . Nice to meet you.",
          translation: "Здравствуйте! Я ... . Приятно познакомиться.",
          hint: "Не торопись: I'm — это один слог, /aɪm/, а не два.",
          why:
            "Это готовый набор фраз для первой встречи: приветствие, имя, вежливая концовка. " +
            "Повтори их несколько раз, чтобы они произносились без запинки.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-dela",
      title: "Как дела и вежливые слова",
      estimatedMinutes: 15,
      outcome: "отвечать на вопрос о делах, к месту говорить please, thank you и sorry и узнавать you're welcome",

      blocks: [
        {
          id: "how-are-you",
          kind: "explain",
          text: [
            "После приветствия часто звучит вопрос How are you? — «как дела». Он идёт следом " +
              "за hello почти всегда, поэтому учить их стоит вместе.",
            "Обычный ответ короткий: I'm fine, thank you — «хорошо, спасибо». Часто добавляют " +
              "встречный вопрос And you? — «а ты?». Развёрнуто рассказывать о своих делах в " +
              "этот момент не обязательно.",
          ],
        },
        {
          id: "primer-obmen",
          kind: "example",
          caption: "Как это звучит целиком",
          text: "— Good morning! How are you?\n— I'm fine, thank you. And you?\n— I'm fine too, thanks.",
          explain:
            "Обмен укладывается в три коротких реплики и почти не меняется. Выучи его " +
            "целиком, как одну фразу: тогда в разговоре не придётся собирать его по словам.",
        },
        {
          id: "ne-zhaluytes",
          kind: "note",
          tone: "info",
          text:
            "Короткий ответ здесь ничего не скрывает: I'm fine или I'm OK — это готовая " +
            "формула, а не оценка дня. Собеседник, который хочет услышать больше, спросит " +
            "отдельно.",
        },
        {
          id: "tablica-otvetov",
          kind: "table",
          caption: "Ответы на How are you?",
          head: ["Английский", "По-русски", "Как читается"],
          rows: [
            ["I'm fine, thank you.", "Хорошо, спасибо.", "/aɪm ˈfaɪn ˈθæŋk juː/"],
            ["I'm OK, thanks.", "Нормально, спасибо.", "/aɪm ˌəʊˈkeɪ ˈθæŋks/"],
            ["Fine, thanks.", "Хорошо, спасибо.", "/ˈfaɪn ˈθæŋks/"],
          ],
        },
        {
          id: "otkuda-are",
          kind: "note",
          tone: "info",
          text:
            "В уроке про своё имя сказано, что am идёт только с I. В How are you? стоит " +
            "другая форма того же слова — are, и она идёт с you. Разбирать все формы " +
            "сейчас не нужно: выучи вопрос целиком. Формы am, is и are разберём в этом же " +
            "модуле, немного позже.",
        },
        {
          id: "zvuk-th",
          kind: "note",
          tone: "info",
          text:
            "В словах thank и thanks буквы th передают звук /θ/, которого в русском нет. " +
            "Кончик языка при этом касается верхних зубов, а звук получается глухой, как " +
            "выдох. Скажешь русское «с» — выйдет не thank, а другое слово. Тот же /θ/ " +
            "встретится дальше в think, three, thirty.",
        },
        {
          id: "vezhlivye-slova",
          kind: "explain",
          text: [
            "Три слова вежливости нужны с первого дня: please — «пожалуйста» в просьбе, " +
              "thank you (короче — thanks) — «спасибо», sorry — «извините».",
            "На благодарность отвечают you're welcome — это «пожалуйста» в значении " +
              "«не за что». Говорить его самому пока не обязательно, а вот узнавать в " +
              "ответе стоит.",
          ],
        },
        {
          id: "please-oshibka",
          kind: "note",
          tone: "mistake",
          text:
            "Частая ошибка: сказать please в ответ на thank you. По-русски «пожалуйста» годится " +
            "и для просьбы, и для ответа на благодарность, а в английском это два разных слова. " +
            "Просьба — please. Ответ на спасибо — you're welcome.",
        },
        {
          id: "slovar-3",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "how", translation: "как", example: "How are you?", hint: "/haʊ/" },
            { term: "are", translation: "форма глагола be для you", example: "How are you?", hint: "/ɑː/" },
            { term: "fine", translation: "хорошо", example: "I'm fine.", hint: "/faɪn/" },
            { term: "OK", translation: "нормально", example: "I'm OK.", hint: "/ˌəʊˈkeɪ/" },
            { term: "please", translation: "пожалуйста (в просьбе)", example: "Coffee, please.", hint: "/pliːz/" },
            { term: "thank you", translation: "спасибо", example: "Thank you!", hint: "/ˈθæŋk juː/" },
            { term: "thanks", translation: "спасибо (короче)", example: "Thanks!", hint: "/θæŋks/" },
            { term: "sorry", translation: "извините", example: "Sorry!", hint: "/ˈsɒri/" },
            {
              term: "you're welcome",
              translation: "не за что",
              example: "— Thank you! — You're welcome.",
              hint: "/jɔː ˈwelkəm/",
            },
          ],
        },

        // ---- задания ----
        {
          id: "z1-otvet-na-how",
          kind: "choice",
          prompt: "Продавец в магазине говорит: «Hello! How are you?» Что ответить?",
          options: [
            { text: "Nice to meet you." },
            { text: "I'm fine, thank you.", correct: true },
            { text: "Yes, please." },
          ],
          hint: "Ответ должен говорить о делах, а не о знакомстве и не о согласии.",
          why:
            "I'm fine, thank you — ответ о делах, а спрашивают именно о них. «Nice to meet " +
            "you» говорят при знакомстве, а «Yes, please» — соглашаясь на предложение.",
        },
        {
          id: "z2-please-ili-welcome",
          kind: "choice",
          prompt: "Тебе помогли, и ты говоришь Thank you. Что ответит собеседник?",
          options: [
            { text: "Please" },
            { text: "You're welcome", correct: true },
            { text: "Sorry" },
          ],
          hint: "По-русски здесь было бы «пожалуйста», но в английском для этого другое слово.",
          why:
            "You're welcome — ответ на благодарность. Please годится только для просьбы: " +
            "русское «пожалуйста» подходит в обоих случаях, а в английском для каждого " +
            "случая своё слово.",
        },
        {
          id: "z3-dopisat-thank",
          kind: "gap",
          prompt: "Допиши слово, чтобы получилось «спасибо».",
          before: "Thank ",
          after: "!",
          answer: "you",
          hint: "Дословно: «благодарю тебя».",
          why: "Thank you — «спасибо». Короткий вид — thanks, но там you уже не нужно.",
        },
        {
          id: "z4-otmetit-vezhlivye",
          kind: "hottext",
          prompt: "Отметь слова, которыми благодарят.",
          parts: [
            { text: "Please", selectable: true },
            { text: " · " },
            { text: "Thanks", selectable: true, correct: true },
            { text: " · " },
            { text: "Sorry", selectable: true },
            { text: " · " },
            { text: "Thank you", selectable: true, correct: true },
          ],
          hint: "Два слова из четырёх значат «спасибо».",
          why:
            "Thanks и thank you — благодарность. Please — просьба, sorry — извинение.",
        },
        {
          id: "z5-poryadok-obmena",
          kind: "order",
          prompt: "Расставь реплики по порядку разговора.",
          items: [
            "I'm fine, thank you. And you?",
            "Good morning! How are you?",
            "I'm fine too, thanks.",
          ],
          answer: [1, 0, 2],
          hint: "Начинается с приветствия.",
          why:
            "Приветствие с вопросом, ответ со встречным вопросом, ответ второго. " +
            "Этот обмен почти не меняется, поэтому его учат целиком.",
        },
        {
          id: "z6-sopostavit-vezhlivost",
          kind: "match",
          prompt: "Сопоставь случай и нужное слово.",
          left: ["Просишь кофе", "Тебя поблагодарили", "Ты наступаешь кому-то на ногу", "Тебе помогли"],
          right: ["Sorry", "Thank you", "Please", "You're welcome"],
          answer: [2, 3, 0, 1],
          hint: "Дважды по-русски сказали бы «пожалуйста», но слова разные.",
          why:
            "Просьба — please, ответ на благодарность — you're welcome, извинение — sorry, " +
            "благодарность — thank you.",
        },
        {
          id: "z7-proiznesti-obmen",
          kind: "speak",
          prompt: "Произнеси вслух ответ на вопрос о делах вместе со встречным вопросом.",
          phrase: "I'm fine, thank you. And you?",
          translation: "Хорошо, спасибо. А ты?",
          hint: "Между fine и thank you — короткая пауза, как на запятой.",
          why:
            "Этот ответ звучит почти в каждом разговоре. Выучи его целиком — тогда не " +
            "придётся собирать фразу по словам и можно будет слушать собеседника.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mestoimeniya",
      title: "Я, ты, он: местоимения",
      estimatedMinutes: 14,
      outcome: "ставить местоимение перед глаголом: I, you, he, she, it, we, they",

      blocks: [
        {
          id: "zachem-mestoimeniya",
          kind: "explain",
          text: [
            "В прошлых уроках уже встречались I и you: I'm Alim, How are you? Пора собрать " +
              "их вместе с остальными — семь слов, которыми называют того, о ком речь. " +
              "Такие слова называют местоимениями.",
            "По-русски можно сказать «хорошо» и не называть, у кого хорошо. По-английски " +
              "так нельзя: перед глаголом обязательно стоит тот, о ком речь. Или имя — " +
              "Dana is fine, или местоимение — She is fine.",
            "Это слово, которое стоит перед глаголом, называют подлежащим. В She is fine " +
              "подлежащее — she, в Dana is fine — Dana. Дальше в курсе оно понадобится: " +
              "форма глагола выбирается именно по подлежащему.",
          ],
        },
        {
          id: "tablica-mestoimeniy",
          kind: "table",
          caption: "Семь местоимений-подлежащих",
          head: ["Местоимение", "Перевод", "О ком", "Пример"],
          rows: [
            ["I", "я", "о себе", "I'm Alim."],
            ["you", "ты, вы", "о собеседнике", "You're Dana."],
            ["he", "он", "о мужчине", "He's Nurlan."],
            ["she", "она", "о женщине", "She's Aigul."],
            ["it", "оно, это", "о предмете или о положении дел", "It's OK."],
            ["we", "мы", "о себе и других", "We're Alim and Dana."],
            ["they", "они", "о нескольких других", "They're Dana and Aigul."],
          ],
        },
        {
          id: "you-eto-i-ty-i-vy",
          kind: "note",
          tone: "info",
          text:
            "You — это и «ты», и «вы». Отдельного слова для вежливого обращения в английском " +
            "нет: к другу и к незнакомому человеку обращаются одинаково.",
        },
        {
          id: "i-vsegda-zaglavnaya",
          kind: "note",
          tone: "mistake",
          text:
            "Местоимение I пишется с заглавной буквы везде, а не только в начале " +
            "предложения. В строке «and I'm Alim» оно стоит посередине и всё равно заглавное. " +
            "Из семи местоимений так пишется одно только I. You, he, she, it, we и they " +
            "в середине предложения идут с маленькой буквы.",
        },
        {
          id: "he-i-she-tolko-o-lyudyah",
          kind: "note",
          tone: "info",
          text:
            "He говорят о мужчине, she — о женщине, it — о предмете и о том, как обстоят " +
            "дела: It's OK. Русское «он» годится и для стола, и для человека, английское " +
            "he — нет: стол это it.\n\nОдно исключение. Когда называют, кто пришёл или кто " +
            "звонит, о человеке тоже говорят it: It's Dana.",
        },
        {
          id: "zapis-mestoimeniy",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай местоимения по одному",
          transcript: "I. You. He. She. It. We. They.",
        },
        {
          id: "slovar-mestoimeniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "he", translation: "он", example: "He's Nurlan.", hint: "/hiː/" },
            { term: "she", translation: "она", example: "She's Dana.", hint: "/ʃiː/" },
            { term: "it", translation: "оно, это", example: "It's OK.", hint: "/ɪt/" },
            { term: "we", translation: "мы", example: "We're Alim and Dana.", hint: "/wiː/" },
            { term: "they", translation: "они", example: "They're Dana and Aigul.", hint: "/ðeɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-o-dane",
          kind: "choice",
          prompt: "Речь о Дане. Каким местоимением её назвать?",
          options: [{ text: "she", correct: true }, { text: "he" }, { text: "it" }],
          hint: "Дана — женское имя.",
          why: "She — о женщине. He говорят о мужчине, it — о предмете или о положении дел.",
        },
        {
          id: "z2-o-knige",
          kind: "choice",
          prompt: "Речь о столе. Каким местоимением его назвать?",
          options: [{ text: "he" }, { text: "she" }, { text: "it", correct: true }],
          hint: "Стол — предмет, а не человек.",
          why:
            "It — о предметах. По-русски стол «он», но английское he бывает только о " +
            "человеке.",
        },
        {
          id: "z3-vstavit-mestoimenie",
          kind: "gap",
          prompt: "Допиши местоимение: речь о себе и о Дане.",
          before: "",
          after: "'re Alim and Dana.",
          answer: "We",
          exact: true,
          hint: "Нас двое, и я среди них.",
          why:
            "We're Alim and Dana. We — «мы»: я и другие. Заглавная буква — потому что слово " +
            "открывает предложение.",
        },
        {
          id: "z4-zaglavnaya-i",
          kind: "hottext",
          prompt: "Отметь строки, где местоимение написано с ошибкой.",
          parts: [
            { text: "Yes, i am.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is Dana.", selectable: true },
            { text: " · " },
            { text: "Fine, and i'm Alim.", selectable: true, correct: true },
            { text: " · " },
            { text: "They are Dana and Aigul.", selectable: true },
          ],
          hint: "Одно местоимение пишется с заглавной в любом месте строки.",
          why:
            "I пишется с заглавной всегда: «Yes, I am», «and I'm Alim». She и they посреди " +
            "предложения пишутся со строчной, и в этих строках всё верно.",
        },
        {
          id: "z5-sopostavit-mestoimeniya",
          kind: "match",
          prompt: "Сопоставь местоимение и перевод.",
          left: ["they", "we", "she"],
          right: ["мы", "она", "они"],
          answer: [2, 0, 1],
          hint: "Два из трёх — о нескольких людях. Отличаются тем, входишь ли ты в их число.",
          why: "They — они, we — мы, she — она.",
        },
        {
          id: "z6-sobrat-predlozhenie",
          kind: "order",
          prompt: "Собери предложение: «Он Нурлан».",
          items: ["Nurlan", "He", "is"],
          answer: [1, 2, 0],
          hint: "Сначала тот, о ком речь, потом глагол.",
          why:
            "He is Nurlan. Подлежащее стоит первым, за ним глагол, и только потом всё " +
            "остальное. Английский порядок слов этого требует.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "svyazka-be",
      title: "Am, is, are: глагол, который связывает",
      estimatedMinutes: 15,
      outcome: "выбирать am, is или are по слову перед глаголом",

      blocks: [
        {
          id: "zachem-svyazka",
          kind: "explain",
          text: [
            "«Я Алим» по-русски обходится без глагола. По-английски глагол нужен: I am Alim. " +
              "Это глагол be — он связывает того, о ком речь, с тем, кто он и какой он.",
            "В настоящем времени у be три формы: am, is, are. Выбор зависит только от " +
              "подлежащего, и запомнить нужно всего три строки.",
          ],
        },
        {
          id: "tablica-be",
          kind: "table",
          caption: "Три формы и кому какая",
          head: ["Подлежащее", "Форма", "Пример", "Перевод"],
          rows: [
            ["I", "am", "I am Alim.", "Я Алим."],
            ["he, she, it", "is", "She is fine.", "У неё хорошо."],
            ["you, we, they", "are", "They are Dana and Aigul.", "Они Дана и Айгуль."],
          ],
        },
        {
          id: "am-tolko-s-i",
          kind: "note",
          tone: "info",
          text:
            "Форма am бывает только с I — больше ни с чем. Поэтому её и запоминают первой: " +
            "одна пара, одно слово, никаких исключений.",
        },
        {
          id: "propusk-glagola",
          kind: "note",
          tone: "mistake",
          text:
            "«She fine» — так по-английски не говорят: пропущено is. По-русски «у неё всё " +
            "хорошо» обходится без глагола, по-английски нет. Между подлежащим и остальным " +
            "должна стоять форма be: She is fine.",
        },
        {
          id: "primer-razgovora-be",
          kind: "example",
          caption: "Три формы в одном разговоре",
          text: "— How are you?\n— I am fine, thank you. Dana and Aigul are fine too.",
          explain:
            "Are — потому что you. Am — потому что I. Are во второй раз — потому что Dana " +
            "and Aigul это те же «они», they. Форму выбирает подлежащее, то есть слово " +
            "перед глаголом, а не смысл сказанного.",
        },
        {
          id: "zapis-be",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три формы в предложениях",
          transcript: "I am Alim. She is fine. They are Dana and Aigul. How are you?",
        },
        {
          id: "slovar-be",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "am", translation: "форма be для I", example: "I am Alim.", hint: "/æm/" },
            { term: "is", translation: "форма be для he, she, it", example: "She is fine.", hint: "/ɪz/" },
            { term: "are", translation: "форма be для you, we, they", example: "They are fine.", hint: "/ɑː/" },
            { term: "yes", translation: "да", example: "Yes, I am Alim.", hint: "/jes/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-forma-dlya-she",
          kind: "choice",
          prompt: "Какая форма нужна после she?",
          options: [{ text: "are" }, { text: "is", correct: true }, { text: "am" }],
          hint: "Она из той же строки, что he и it.",
          why: "She is. Форма is идёт с he, she и it. Am бывает только с I.",
        },
        {
          id: "z2-vstavit-am",
          kind: "gap",
          prompt: "Допиши форму глагола be.",
          before: "I ",
          after: " Dana.",
          answer: "am",
          hint: "С этим подлежащим форма всего одна.",
          why: "I am Dana. С I идёт только am — других вариантов нет.",
        },
        {
          id: "z3-vstavit-are",
          kind: "gap",
          prompt: "Допиши форму глагола be.",
          before: "They ",
          after: " Dana and Aigul.",
          answer: "are",
          hint: "They из той же строки, что you и we.",
          why: "They are Dana and Aigul. Форма are идёт с you, we и they.",
        },
        {
          id: "z4-najti-bez-glagola",
          kind: "hottext",
          prompt: "Отметь предложения, в которых пропущен глагол.",
          parts: [
            { text: "He Nurlan.", selectable: true, correct: true },
            { text: " · " },
            { text: "We are fine.", selectable: true },
            { text: " · " },
            { text: "She fine.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am Alim.", selectable: true },
          ],
          hint: "Ищи строки, где нет ни am, ни is, ни are.",
          why:
            "He Nurlan и She fine — без глагола. Должно быть He is Nurlan и She is fine: " +
            "без формы be английское предложение не строится.",
        },
        {
          id: "z5-sopostavit-formy",
          kind: "match",
          prompt: "Сопоставь подлежащее и форму глагола be.",
          left: ["I", "it", "we"],
          right: ["are", "am", "is"],
          answer: [1, 2, 0],
          hint: "Одна форма годится только для одного подлежащего.",
          why: "I am, it is, we are. Три строки таблицы — три пары.",
        },
        {
          id: "z6-ispravit-predlozhenie",
          kind: "short",
          prompt: "Исправь предложение и запиши его целиком: «She fine.»",
          answer: "She is fine.",
          exact: true,
          accept: ["She is fine", "She's fine.", "She's fine"],
          hint: "Не хватает одного слова между she и fine.",
          why:
            "She is fine — или коротко She's fine. Пропущена форма is, та, что идёт с he, " +
            "she и it. Засчитываются оба написания.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "korotkie-formy",
      title: "Короткие формы: I'm, you're, he's",
      estimatedMinutes: 13,
      outcome: "узнавать и писать короткие формы глагола be: I'm, you're, he's",

      blocks: [
        {
          id: "zachem-korotkie",
          kind: "explain",
          text: [
            "В прошлых уроках рядом стояли I am и I'm — и то и другое верно. Второе " +
              "называют короткой формой: два слова сливаются в одно, а на месте пропавшей " +
              "буквы ставят апостроф.",
            "Знать нужно обе: встречаются и та и другая, а значат они одно и то же. " +
              "Короткая форма уже попадалась тебе в первых уроках модуля — теперь разберём, " +
              "как она устроена.",
          ],
        },
        {
          id: "tablica-korotkih",
          kind: "table",
          caption: "Полная форма и короткая",
          head: ["Полная", "Короткая", "Что выпало"],
          rows: [
            ["I am", "I'm", "a в am"],
            ["you are", "you're", "a в are"],
            ["he is", "he's", "i в is"],
            ["she is", "she's", "i в is"],
            ["it is", "it's", "i в is"],
            ["we are", "we're", "a в are"],
            ["they are", "they're", "a в are"],
          ],
        },
        {
          id: "apostrof-ne-zapyataya",
          kind: "note",
          tone: "mistake",
          text:
            "Апостроф — это чёрточка вверху строки, а не запятая: I'm, а не I,m. Он стоит " +
            "ровно там, где выпала буква, и пробела вокруг себя не требует.",
        },
        {
          id: "posle-korotkoy-idut-slova",
          kind: "note",
          tone: "info",
          text:
            "После короткой формы всегда идут другие слова: I'm Alim, She's fine. Закончить " +
            "ею предложение нельзя — она держится за то, что стоит следом.",
        },
        {
          id: "zapis-korotkih",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай короткие формы",
          transcript: "I'm Alim. You're Dana. He's Nurlan. She's Aigul. It's OK. We're fine.",
        },

        // ---- задания ----
        {
          id: "z1-korotkaya-dlya-she-is",
          kind: "choice",
          prompt: "Как записать she is коротко?",
          options: [{ text: "she's", correct: true }, { text: "shes" }, { text: "she'is" }],
          hint: "Апостроф стоит на месте выпавшей буквы.",
          why: "She's. Выпала i, на её месте апостроф. Без апострофа выходит не слово, а набор букв.",
        },
        {
          id: "z2-dopisat-korotkuyu",
          kind: "gap",
          prompt: "Запиши коротко: they are.",
          before: "",
          after: " Dana and Aigul.",
          answer: "They're",
          exact: true,
          hint: "Выпадает та же буква, что в you are.",
          why: "They're Dana and Aigul. Из are выпала a, на её месте апостроф.",
        },
        {
          id: "z3-otmetit-oshibki",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой в короткой форме.",
          parts: [
            { text: "I'm Dana.", selectable: true },
            { text: " · " },
            { text: "He,s Alim.", selectable: true, correct: true },
            { text: " · " },
            { text: "Were fine.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's OK.", selectable: true },
          ],
          hint: "Одна ошибка — не тот знак, другая — знака нет вовсе.",
          why:
            "He,s — вместо апострофа запятая. Were — апостроф пропущен, должно быть We're. " +
            "Две другие строки записаны верно.",
        },
        {
          id: "z4-razvernut-polnostyu",
          kind: "short",
          prompt: "Запиши полностью, без короткой формы: «We're fine.»",
          answer: "We are fine.",
          exact: true,
          accept: ["We are fine"],
          hint: "Апостроф уходит, а на его место возвращается буква.",
          why: "We are fine. Короткая форма разворачивается обратно в два слова.",
        },
        {
          id: "z5-sopostavit-korotkie",
          kind: "match",
          prompt: "Сопоставь полную форму и короткую.",
          left: ["it is", "you are", "he is"],
          right: ["you're", "he's", "it's"],
          answer: [2, 0, 1],
          hint: "У двух из трёх выпадает одна и та же буква.",
          why: "It is — it's, you are — you're, he is — he's.",
        },
        {
          id: "z6-gde-korotkaya-ne-goditsya",
          kind: "choice",
          prompt: "В какой строке короткая форма не годится?",
          options: [
            { text: "I'm Alim." },
            { text: "Yes, I'm.", correct: true },
            { text: "She's fine." },
          ],
          hint: "Посмотри, есть ли после короткой формы другие слова.",
          why:
            "«Yes, I'm» — короткая форма стоит последней, а после неё должны идти слова. " +
            "Здесь нужна полная: Yes, I am. В двух других строках продолжение есть.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "peresprosit",
      title: "Если не удалось расслышать: Sorry?",
      estimatedMinutes: 12,
      outcome: "просить повторить сказанное и переспрашивать имя",

      blocks: [
        {
          id: "zachem-peresprashivat",
          kind: "explain",
          text: [
            "Собеседник называет имя, а ты его не разбираешь. Это случается с каждым, кто " +
              "начинает говорить на чужом языке, и переспрашивать здесь — не слабость, а " +
              "обычная часть разговора.",
            "Молча кивнуть — худший выход: собеседник продолжит, а нить уже потеряна. " +
              "Три коротких фразы решают дело.",
          ],
        },
        {
          id: "tablica-peresprosa",
          kind: "table",
          caption: "Чем переспрашивают",
          head: ["Фраза", "Перевод", "Когда"],
          rows: [
            ["Sorry?", "Простите?", "не слышно совсем"],
            ["Again, please.", "Ещё раз, пожалуйста.", "нужно повторение"],
            ["How do you spell that?", "Как это пишется?", "слово слышно, но неясно, как его написать"],
          ],
        },
        {
          id: "sorry-dva-znacheniya",
          kind: "note",
          tone: "info",
          text:
            "Слово sorry уже встречалось как извинение. Здесь оно работает иначе: сказанное " +
            "с вопросительной интонацией, голосом вверх, оно значит «повтори, пожалуйста». " +
            "Одно слово в двух ролях. На письме их различает знак вопроса, в речи — то, " +
            "как идёт голос.",
        },
        {
          id: "please-v-konce",
          kind: "note",
          tone: "mistake",
          text:
            "В «Again, please» слово please стоит в конце и отделено запятой. Само по себе " +
            "please — ещё не просьба, оно её только смягчает: просьбу несёт слово again.",
        },
        {
          id: "razgovor-s-peresprosom",
          kind: "example",
          caption: "Как это выглядит в разговоре",
          text:
            "— Hello! I'm Aigerim.\n— Sorry?\n— Aigerim. A-I-G-E-R-I-M.\n— Nice to meet you, Aigerim.",
          explain:
            "Переспрос не обрывает разговор, а спасает его. В ответ имя называют ещё раз и " +
            "сразу диктуют по буквам — так же, как в первом модуле.",
        },
        {
          id: "zapis-peresprosa",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай переспрос в разговоре",
          transcript: "Hello! I'm Aigerim. — Sorry? — Aigerim. A-I-G-E-R-I-M.",
        },
        {
          id: "slovar-peresprosa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "again", translation: "ещё раз", example: "Again, please.", hint: "/əˈgen/" },
            // Слово understand отсюда убрано: в уроке оно нигде не работало — ни в
            // объяснении, ни в задании, — а по смыслу спорило с уроком, который учит
            // сообщать о НЕпонимании. Своё место оно занимает в модуле 21, где есть
            // отрицание и оборот I don't understand. Нашёл методист.
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-skazat",
          kind: "choice",
          prompt: "Собеседник называет имя, но расслышать не удаётся. Что сказать?",
          options: [
            { text: "Thank you." },
            { text: "Sorry?", correct: true },
            { text: "Nice to meet you." },
          ],
          hint: "Нужна не вежливость вообще, а просьба повторить.",
          why:
            "Sorry? с вопросительной интонацией — просьба повторить. Thank you и Nice to " +
            "meet you разговор продолжают, но услышать имя ещё раз не помогают.",
        },
        {
          id: "z2-dopisat-please",
          kind: "gap",
          prompt: "Допиши просьбу повторить: «Ещё раз, пожалуйста».",
          before: "Again, ",
          after: ".",
          answer: "please",
          hint: "Слово вежливости, которое стоит в конце.",
          why: "Again, please. Please ставят в конец и отделяют запятой.",
        },
        {
          id: "z3-poryadok-peresprosa",
          kind: "order",
          prompt: "Расставь реплики по порядку.",
          items: ["Sorry?", "Hello! I'm Aigerim.", "Nice to meet you.", "Aigerim. A-I-G-E-R-I-M."],
          answer: [1, 0, 3, 2],
          hint: "Сначала представляются, и только потом переспрашивают.",
          why:
            "Приветствие с именем, переспрос, повтор имени по буквам, вежливая концовка. " +
            "Переспрос стоит между вопросом и ответом, а не в начале.",
        },
        {
          id: "z4-otmetit-peresprosy",
          kind: "hottext",
          prompt: "Отметь фразы, которыми просят повторить.",
          parts: [
            { text: "Sorry?", selectable: true, correct: true },
            { text: " · " },
            { text: "Good evening.", selectable: true },
            { text: " · " },
            { text: "Again, please.", selectable: true, correct: true },
            { text: " · " },
            { text: "See you.", selectable: true },
          ],
          hint: "Две из четырёх обращены к тому, что уже прозвучало.",
          why:
            "Sorry? и Again, please возвращают разговор назад. Good evening — приветствие, " +
            "See you — прощание.",
        },
        {
          id: "z5-sprosit-napisanie",
          kind: "short",
          prompt: "Имя услышано, но непонятно, как оно пишется. Запиши вопрос целиком.",
          answer: "How do you spell that?",
          exact: true,
          accept: ["How do you spell that"],
          hint: "Тот же вопрос, что в первом модуле.",
          why:
            "How do you spell that? В ответ имя продиктуют по буквам — и его можно будет " +
            "записать без ошибок.",
        },
        {
          id: "z6-peresprosit-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух переспрос и просьбу повторить.",
          phrase: "Sorry? Again, please.",
          translation: "Простите? Ещё раз, пожалуйста.",
          hint: "У Sorry голос идёт вверх, как в вопросе. У Again, please — ровно.",
          why:
            "Эти две фразы выручают в любом разговоре. Произнеси их несколько раз, чтобы " +
            "они шли одна за другой сами — тогда они придут на язык вовремя.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-celikom",
      title: "Разговор целиком: от hello до bye",
      estimatedMinutes: 15,
      outcome: "вести короткий разговор при знакомстве: от приветствия до прощания",

      blocks: [
        {
          id: "zachem-celikom",
          kind: "explain",
          text: [
            "Тебя знакомят с новым человеком. Дальше всё идёт подряд и быстро: " +
              "поздороваться, назвать себя, спросить, как дела, попрощаться.",
            "Каждая часть такого разговора уже встречалась по отдельности. Новое здесь " +
              "одно: теперь они идут друг за другом, и времени подбирать слова нет.",
            "Ниже — один из возможных порядков. Он не единственный: живой разговор " +
              "бывает короче и идёт иначе. Но если выучишь этот порядок, не придётся " +
              "каждый раз придумывать заново, что сказать дальше.",
          ],
        },
        {
          id: "poryadok-razgovora",
          kind: "table",
          caption: "Один разговор по шагам",
          head: ["Шаг", "Что говорят", "Пример"],
          rows: [
            ["1", "приветствие", "Good morning!"],
            ["2", "спросить имя", "What's your name?"],
            ["3", "назвать себя", "I'm Dana."],
            ["4", "вежливо откликнуться", "Nice to meet you."],
            ["5", "спросить о делах", "How are you?"],
            ["6", "ответить и вернуть вопрос", "I'm fine, thank you. And you?"],
            ["7", "попрощаться", "Goodbye!"],
          ],
        },
        {
          id: "polnyy-razgovor",
          kind: "example",
          caption: "Тот же порядок целиком",
          text:
            "— Good morning! What's your name?\n— I'm Dana. And you?\n— I'm Alim. Nice to meet you.\n" +
            "— Nice to meet you too. How are you?\n— I'm fine, thank you. And you?\n— Fine, thanks. Goodbye!\n— Bye!",
          explain:
            "Каждая реплика опирается на предыдущую: вопрос — ответ, ответ — встречный " +
            "вопрос. Слово too в «Nice to meet you too» значит «тоже»: оно возвращает " +
            "сказанное собеседнику.",
        },
        {
          id: "vstrechnyy-vopros",
          kind: "note",
          tone: "info",
          text:
            "And you? — короткий способ вернуть собеседнику любой вопрос. Он годится и " +
            "после имени, и после «как дела»: повторять вопрос целиком не нужно.",
        },
        {
          id: "gde-rvyotsya-razgovor",
          kind: "note",
          tone: "mistake",
          text:
            "У разговора есть место, где он легко останавливается: ответ прозвучал, а " +
            "встречный вопрос — нет. «I'm fine» — и тишина. Ответить так не ошибка, но " +
            "продолжать разговор придётся собеседнику. Добавь And you? — и очередь " +
            "переходит к нему.",
        },
        {
          id: "zapis-razgovora",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор целиком",
          transcript:
            "Good morning! What's your name? — I'm Dana. And you? — I'm Alim. Nice to meet you. " +
            "— Nice to meet you too. How are you? — I'm fine, thank you. And you? — Fine, thanks. Goodbye!",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor",
          kind: "order",
          prompt: "Расставь реплики разговора по порядку.",
          items: [
            "I'm fine, thank you. And you?",
            "Good morning! What's your name?",
            "How are you?",
            "I'm Dana.",
          ],
          answer: [1, 3, 2, 0],
          hint: "Сначала здороваются и спрашивают имя, о делах — позже.",
          why:
            "Приветствие с вопросом об имени, ответ, вопрос о делах, ответ со встречным " +
            "вопросом. Этот порядок и разобран в таблице урока.",
        },
        {
          id: "z2-chto-dalshe",
          kind: "choice",
          prompt: "Собеседник сказал: «Nice to meet you.» Что ответить?",
          options: [
            { text: "Nice to meet you too.", correct: true },
            { text: "Good night." },
            { text: "How do you spell that?" },
          ],
          hint: "Нужно вернуть сказанное, добавив «тоже».",
          why:
            "Nice to meet you too. Слово too возвращает вежливость собеседнику. Good night " +
            "говорят, уходя спать, а вопрос о написании здесь не к месту.",
        },
        {
          id: "z3-dopisat-vstrechnyy",
          kind: "gap",
          prompt: "Допиши встречный вопрос после своего ответа.",
          before: "I'm fine, thank you. And ",
          after: "?",
          answer: "you",
          hint: "Второе слово в этом вопросе — местоимение собеседника.",
          why: "And you? Так вопрос возвращают, не повторяя его целиком.",
        },
        {
          id: "z4-najti-obryv",
          kind: "hottext",
          prompt: "Отметь ответы, в которых есть встречный вопрос.",
          parts: [
            { text: "I'm fine, thank you. And you?", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm Alim.", selectable: true },
            { text: " · " },
            { text: "I'm Dana. And you?", selectable: true, correct: true },
            { text: " · " },
            { text: "Fine, thanks.", selectable: true },
          ],
          hint: "Ищи два слова, которыми вопрос возвращают собеседнику.",
          why:
            "And you? есть в двух ответах — после них очередь переходит к собеседнику. " +
            "«I'm Alim» и «Fine, thanks» отвечают верно, но разговор дальше не двигают.",
        },
        {
          id: "z5-sopostavit-shagi",
          kind: "match",
          prompt: "Сопоставь шаг разговора и фразу.",
          left: ["спросить имя", "спросить о делах", "попрощаться"],
          right: ["How are you?", "Goodbye!", "What's your name?"],
          answer: [2, 0, 1],
          hint: "Две фразы — вопросы, и различает их вопросительное слово.",
          why: "What's your name? — об имени, How are you? — о делах, Goodbye! — прощание.",
        },
        {
          id: "z6-razgovor-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух свою часть разговора: представься, спроси о делах и попрощайся.",
          phrase: "Hello! I'm ... . Nice to meet you. How are you? ... Goodbye!",
          translation: "Здравствуйте! Я ... . Приятно познакомиться. Как дела? ... До свидания!",
          hint: "Между репликами оставляй паузу — в разговоре там отвечает собеседник.",
          why:
            "Это весь модуль в одном упражнении: если фразы идут одна за другой сами, " +
            "значит, модуль собран в одну речь.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Заданий, где ответ нужно написать самому, — 11 из 21. Все восемь итогов проверяются.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      {
        id: "q-mestoimenie-o-nurlane",
        kind: "choice",
        outcome: "ставить местоимение перед глаголом: I, you, he, she, it, we, they",
        prompt: "Речь о Нурлане. Каким местоимением его назвать?",
        options: [{ text: "he", correct: true }, { text: "she" }, { text: "it" }],
        why: "He — о мужчине. She говорят о женщине, it — о предмете и о том, как обстоят дела.",
      },
      {
        id: "q-mestoimenie-my",
        kind: "gap",
        outcome: "ставить местоимение перед глаголом: I, you, he, she, it, we, they",
        prompt: "Допиши местоимение «мы».",
        before: "",
        after: " are Alim and Dana.",
        answer: "We",
        exact: true,
        why: "We are Alim and Dana. Местоимение стоит перед глаголом и открывает предложение.",
      },
      {
        id: "q-forma-be-they",
        kind: "choice",
        outcome: "выбирать am, is или are по слову перед глаголом",
        prompt: "Какая форма глагола be нужна после they?",
        options: [{ text: "are", correct: true }, { text: "is" }, { text: "am" }],
        why: "They are. Слово they указывает на нескольких людей, и с ним стоит та же форма are, что с you и we.",
      },
      {
        id: "q-vstavit-is",
        kind: "gap",
        outcome: "выбирать am, is или are по слову перед глаголом",
        prompt: "Допиши форму глагола be.",
        before: "She ",
        // Было «She ___ fine.» — то же предложение, что в двух заданиях урока.
        after: " OK.",
        answer: "is",
        why: "She is OK. С he, she и it идёт форма is.",
      },
      {
        id: "q-korotkaya-he-is",
        kind: "short",
        outcome: "узнавать и писать короткие формы глагола be: I'm, you're, he's",
        prompt: "Запиши коротко: we are.",
        answer: "we're",
        accept: ["We're"],
        why: "We're. Из are выпала a, и на её месте стоит апостроф.",
      },
      {
        id: "q-otvet-bez-korotkoy",
        kind: "choice",
        outcome: "узнавать и писать короткие формы глагола be: I'm, you're, he's",
        prompt: "В какой строке короткая форма записана верно?",
        options: [
          { text: "Its OK." },
          { text: "It's OK.", correct: true },
          { text: "It,s OK." },
        ],
        why:
          "It's OK. Апостроф — чёрточка вверху строки, и стоит она на месте выпавшей " +
          "буквы i. Запятая на это место не годится, а без знака слова сливаются.",
      },
      {
        id: "q-ne-rasslyshal",
        kind: "choice",
        outcome: "просить повторить сказанное и переспрашивать имя",
        // Прежний вопрос повторял урочный сценарий («имя названо, расслышать не
        // удаётся») вместе с обоими вариантами. Ученик отвечал по памяти на вид
        // задания. Нашёл методист вторым проходом.
        prompt: "Собеседник говорит тихо, и слов не разобрать. Что сказать?",
        options: [
          { text: "Nice to meet you." },
          { text: "You're welcome." },
          { text: "Sorry?", correct: true },
        ],
        why:
          "Sorry? с вопросительной интонацией — просьба повторить. Два других отклика " +
          "уместны в разговоре, но о непонимании не говорят ничего.",
      },
      {
        id: "q-dopisat-again",
        kind: "short",
        outcome: "просить повторить сказанное и переспрашивать имя",
        // Было задание на вставку со слово в слово тем же условием, что в уроке, и
        // с той же двухсловной фразой: урок закрывал одну половину, работа — другую.
        // Теперь фразу надо написать целиком, вместе со знаками.
        prompt: "Собеседник говорит быстро. Попроси повторить — два слова, начни с Again.",
        answer: "Again, please.",
        accept: ["Again, please", "again, please."],
        why: "Again, please. Вежливое слово идёт вторым, и от первого его отделяет запятая.",
      },
      {
        id: "q-razgovor-ot-i-do",
        kind: "order",
        outcome: "вести короткий разговор при знакомстве: от приветствия до прощания",
        // Прежний набор реплик повторял урочный: три куска из четырёх стояли на тех
        // же местах, и ученик расставлял их по памяти. Взят другой разговор — с
        // откликом на знакомство вместо вопроса о делах.
        prompt: "Расставь реплики разговора по порядку — от приветствия до прощания.",
        items: ["See you!", "I'm Alim.", "Hi! What's your name?", "Nice to meet you."],
        answer: [2, 1, 3, 0],
        why:
          "Hi! What's your name? — I'm Alim. — Nice to meet you. — See you! Сначала " +
          "здороваются и спрашивают имя, потом его называют, потом откликаются на " +
          "знакомство. Прощание идёт последним.",
      },
      {
        id: "q-vernut-vopros",
        kind: "gap",
        outcome: "вести короткий разговор при знакомстве: от приветствия до прощания",
        prompt: "Допиши встречный вопрос после своего ответа.",
        before: "I'm Alim. And ",
        after: "?",
        answer: "you",
        why: "And you? Так вопрос возвращают собеседнику, не повторяя его целиком.",
      },
      {
        id: "q-vecher",
        kind: "choice",
        outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",
        prompt: "Ты приходишь в гостиницу в восемь вечера. Что сказать?",
        options: [{ text: "Good morning" }, { text: "Good evening", correct: true }, { text: "Good night" }],
        why: "Good evening — вечернее приветствие. Good night говорят, уходя спать.",
      },
      {
        id: "q-dopisat-afternoon",
        kind: "gap",
        outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",
        prompt: "Допиши приветствие, которое говорят с полудня до вечера.",
        before: "Good ",
        after: "!",
        answer: "afternoon",
        why: "Good afternoon — приветствие с полудня до вечера.",
      },
      {
        id: "q-proshchanie",
        kind: "short",
        outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",
        prompt: "Напиши по-английски короткое прощание из трёх букв.",
        answer: "bye",
        accept: ["bye", "Bye", "bye!"],
        why: "Bye — обычное прощание между знакомыми.",
      },
      {
        id: "q-otmetit-privetstviya",
        kind: "hottext",
        outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",
        prompt: "Отметь приветствия.",
        parts: [
          { text: "Goodbye", selectable: true },
          { text: " · " },
          { text: "Good morning", selectable: true, correct: true },
          { text: " · " },
          { text: "See you", selectable: true },
          { text: " · " },
          { text: "Hi", selectable: true, correct: true },
        ],
        why: "Good morning и hi — приветствия. Goodbye и see you говорят при расставании.",
      },
      {
        id: "q-am",
        kind: "gap",
        outcome: "называть своё имя и понимать, когда имя спрашивают",
        prompt: "Допиши пропущенное слово.",
        before: "I ",
        // Было «I ___ Dana.» — ровно то предложение, которое ученик уже дважды
        // разбирал в уроках. Имя заменено, чтобы проверялось правило, а не память.
        after: " Alim.",
        answer: "am",
        why:
          "С подлежащим I употребляется am. В английском глагол в таком предложении обязателен.",
      },
      {
        id: "q-vopros-imya",
        kind: "choice",
        outcome: "называть своё имя и понимать, когда имя спрашивают",
        prompt: "Незнакомый человек говорит: «What's your name?» О чём он спрашивает?",
        options: [
          { text: "Откуда ты" },
          { text: "Как твои дела" },
          { text: "Как тебя зовут", correct: true },
        ],
        why: "What's your name? — вопрос об имени.",
      },
      {
        id: "q-poryadok-znakomstva",
        kind: "order",
        outcome: "называть своё имя и понимать, когда имя спрашивают",
        prompt: "Расставь реплики знакомства по порядку.",
        items: ["I'm Dana.", "What's your name?", "Nice to meet you."],
        answer: [1, 0, 2],
        why: "Сначала вопрос, потом имя, в конце — «приятно познакомиться».",
      },
      {
        id: "q-zaglavnaya-i",
        kind: "short",
        outcome: "называть своё имя и понимать, когда имя спрашивают",
        prompt: "Исправь ошибки и запиши фразу верно: «i am alim».",
        answer: "I am Alim",
        accept: ["I'm Alim"],
        // Сверка с учётом заглавных букв: без неё задание засчитывало бы
        // дословно переписанную из условия ошибку
        exact: true,
        why:
          "I всегда пишется заглавной буквой, имя — тоже с заглавной. Краткая форма I'm " +
          "здесь так же верна.",
      },
      {
        id: "q-otvet-na-how",
        kind: "short",
        outcome: "отвечать на вопрос о делах, к месту говорить please, thank you и sorry и узнавать you're welcome",
        prompt: "Тебя спросили «How are you?». Напиши обычный ответ: «хорошо, спасибо».",
        answer: "I'm fine, thank you",
        accept: [
          "I'm fine thank you",
          "I am fine, thank you",
          "I am fine thank you",
          "I'm fine, thanks",
          "I'm fine thanks",
          "I'm OK, thank you",
          "I'm OK thank you",
          "I'm OK, thanks",
          "I'm OK thanks",
          "Fine, thanks",
          "Fine thanks",
          "Fine, thank you",
          "Fine thank you",
        ],
        why:
          "I'm fine, thank you — обычный ответ. Подробный рассказ о делах в этот момент не ждут.",
      },
      {
        id: "q-vezhlivye",
        kind: "match",
        outcome: "отвечать на вопрос о делах, к месту говорить please, thank you и sorry и узнавать you're welcome",
        prompt: "Сопоставь случай и нужное слово.",
        left: ["Просишь чай", "Тебя поблагодарили", "Извиняешься"],
        right: ["You're welcome", "Sorry", "Please"],
        answer: [2, 0, 1],
        why:
          "Просьба — please, ответ на благодарность — you're welcome, извинение — sorry. " +
          "Русское «пожалуйста» подходит в двух случаях, а в английском для каждого своё слово.",
      },
      {
        id: "q-napisat-please",
        outcome: "отвечать на вопрос о делах, к месту говорить please, thank you и sorry и узнавать you're welcome",
        kind: "gap",
        prompt: "Ты просишь чай. Допиши слово вежливости.",
        before: "Tea, ",
        after: ".",
        answer: "please",
        why:
          "Please ставят в конце просьбы. Ответом на благодарность оно быть не может — " +
          "для этого есть you're welcome.",
      },
    ],
  },
};

export default module;
