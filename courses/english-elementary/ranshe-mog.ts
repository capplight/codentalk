import type { Module } from "@/lib/content/types";

/**
 * Модуль 27 курса «Английский · Elementary»: раньше мог.
 *
 * Программа: docs/programma-english-elementary.md, модуль 27 — «говорить об
 * умении в прошлом»; грамматика: `could`, `couldn't`, вопрос `Could you…?` об
 * умении. Строка проверена 27 августа 2026, до написания; разбор с цитатами —
 * там же.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ МОДУЛЯ — «УМЕНИЕ В ПРОШЛОМ». Этим именем она зовётся во
 * всех уроках, в подписях таблиц и в разборах. Правило приписано после модуля
 * 5, где одна вещь получила три имени и ученик искал три разные вещи.
 *
 * ЭТО ПЕРВАЯ СТРОКА ЧАСТИ, ГДЕ ИСТОЧНИКИ РАСХОДЯТСЯ МЕЖДУ СОБОЙ.
 *
 * English Grammar Profile ставит на A2 только ОТРИЦАНИЕ: графа «USE: ABILITY»
 * говорит «Can use **the negative form** of 'could' to talk about inability»,
 * а утвердительное умение лежит графой ниже — «USE: ABILITY», B1, «Can use the
 * affirmative form of 'could' to talk about ability».
 *
 * Руководство A2 Key такого деления не знает. С. 51, Language specifications,
 * перечень Modals: «can (ability; requests; permission) **could (ability;
 * polite requests)** would (polite requests)». И собственный текст экзамена на
 * с. 10 пишет утвердительно: «Alice's daughter Demi started learning ballet
 * **as soon as she could walk**».
 *
 * РЕШЕНО ПО МЕРКЕ СТУПЕНИ: слово стоит в требованиях экзамена A2 Key — значит
 * входит в ступень, даже если English Grammar Profile ставит его выше. Так же
 * взяты модули 18–20 и 26. Подкрепление здесь даже сильнее обычного: не строка
 * словника, а перечень Language specifications — тот самый, откуда взяты
 * `mustn't (prohibition)` для модуля 25 и `should (advice)` для модуля 26.
 *
 * ЧТО ПО ЭТОЙ ЖЕ МЕРКЕ НЕ ВЗЯТО, И ЭТО ПРАВКА СТРОКИ ПРОГРАММЫ:
 *
 * 1. **Разрешение `Could I…?`** — English Grammar Profile ставит «USE:
 *    PERMISSION» на B1, а руководство в той же строке с. 51 приписывает
 *    разрешение слову `can`, не `could`. Два источника из двух против.
 * 2. **`was able to`** — English Grammar Profile, MODALITY expressions with
 *    be, B1, «USE: 'BE ABLE TO', PAST». На A2 у оборота есть только будущее
 *    («FORM/USE: 'WILL BE ABLE TO'»), и оно в курсе уже работает — модули 9 и
 *    23. В перечне Modals руководства `be able to` не назван вовсе.
 *
 * ТРЕТЬЕ НЕ ВЗЯТО НЕ ПО ИСТОЧНИКУ, А ПО КУРСУ. Графа A2 «USE: SUGGESTIONS»
 * разрешает `could` для предложений («We could have dinner after that»).
 * Уровню это не противоречит — но предлагать курс уже учит трижды: `Shall
 * we…?`, `Let's` и `Why don't we…?` в модуле 12, `should` в модуле 26.
 * Четвёртый способ того же назначения множит выбор, ничего не прибавляя.
 *
 * Это проверка по правилу, приписанному после модуля 26: строка проверяется и
 * по источнику, И ПО КУРСУ. В тот раз она не была сделана вовсе, и модуль
 * написал второй урок про `Why don't we`.
 *
 * ГРАНИЦА С МОДУЛЕМ 28. Вежливая просьба `Could you…?` — A2 и по графе «USE:
 * REQUESTS», и по руководству, но она отдана модулю 28 «Вежливо». Там она и
 * стоит уроком 1; `would like` и `would you` в модуль 28 не вошли — первое
 * потому, что это A1 и его целиком даёт ступень Beginner, второе потому, что
 * это B1. Здесь вопросительная форма берётся только об умении: «Could you swim when you were five?». Разрешает её графа
 * A2 «FORM: QUESTIONS» — она о форме, а о случае не говорит ничего.
 *
 * ИМЕНИ КЛАССА У `COULD` МОДУЛЬ НЕ ДАЁТ. Термина «модальный глагол» в видимом
 * тексте курса нет ни разу — это выяснилось при разборе модуля 25, где я
 * написал обратное. Вводить его здесь незачем: модуль учит одному слову и его
 * трём формам.
 *
 * СЛОВАРЬ МОДУЛЯ — ЧЕТЫРНАДЦАТЬ КАРТОЧЕК, ИЗ НИХ НОВЫХ ДЛЯ СТУПЕНИ
 * ТРИНАДЦАТЬ. Четырнадцатое — `footballer`: сверка сводит его к `football`,
 * а его Oxford помечает A1. Это ровно та же поправка, что была в модуле 26
 * с `walking` и `riding`, и в этот раз она сделана до проверяющих.
 *
 * Это пятый модуль подряд с недобором до тридцати, и вопрос владельцу открыт —
 * разбор в программе, под таблицей четвёртой части. Норму не форсируем
 * (уточнение владельца от 21 августа): карточка, которой негде работать, — это
 * добор счёта, и он запрещён прямо. В модуле 26 таких нашлось две, и обе сняты
 * по разбору методиста.
 *
 * Мир модуля выбран так, чтобы словам было где работать: детство, школьный
 * спектакль, футбол и бейсбол во дворе, первая неудача.
 *
 * ШЕСТЬ СЛОВ OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ВСЕ ШЕСТЬ ВЗЯТЫ ПО МЕРКЕ СТУПЕНИ:
 * `kick`, `upset`, `channel`, `costume`, `dressed` (B1) и `bat` (B2). Все
 * шесть стоят в словнике A2 Key. Первая редакция шапки объявляла только два из
 * них, а про остальные писала, что Oxford их не знает, — неверно; нашёл
 * методист. Мерка та же, что у самого `could`, и применяется ко всем
 * одинаково.
 *
 * ТРАНСКРИПЦИЯ ДВУХ СЛОВ ВЗЯТА ПО СЛОВАРНОЙ НОРМЕ: `ipa-en-uk` не знает
 * `record` и `upset` вовсе. Записано `/ˈrekɔːd/` (существительное, ударение на
 * первом слоге — у глагола оно другое) и `/ʌpˈset/`. Тот же ряд, что `windy` и
 * `path` в модуле 26; владельцу стоит на него взглянуть.
 *
 * СЛОВО `channel` ЗАПИСАНО `/ˈtʃænl/`, БЕЗ `ə` ПЕРЕД `l` — по условности
 * курса, подтверждённой владельцем 22 августа 2026. Источник даёт `tʃˈænəl`.
 */
const module: Module = {
  slug: "ranshe-mog",
  title: "Раньше мог",

  outcomes: [
    "рассказывать, что умел герой раньше: I could swim at six",
    "говорить, чего человек не умел: I couldn't ride a bike",
    "спрашивать об умении в прошлом и коротко отвечать: Could you swim? — Yes, I could.",
    "находить в рассказе о детстве, что человек умел, а что нет",
    "слышать в разговоре, что человек умел в детстве",
    "проверять рассказ о детстве: назван возраст, умение и то, что не выходило",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1–3. MODALITY, could. «FORM: NEGATIVE», A2 — «Can use the " +
        "negative form», примеры «Too bad you couldn't come», «I couldn't " +
        "close the window», «…he was ill, so he could not go to the game». " +
        "«USE: ABILITY», A2 — «Can use the negative form of 'could' to talk " +
        "about inability», примеры «I couldn't work without it», «I couldn't " +
        "buy the T-shirt because it was too expensive». " +
        "«FORM: QUESTIONS», A2 — «Can use the question form». " +
        "«FORM: AFFIRMATIVE», A2 — «Can use the affirmative form». " +
        "ОСТОРОЖНО: ЭТА ГРАФА НЕ ПРО УМЕНИЕ. Оба её примера про предложения — " +
        "«You could come by bus, and we could meet at the bus station», «We " +
        "could go to the museum near Cibeles». Так же и у «FORM: QUESTIONS»: " +
        "её примеры — просьбы, «Could you help me?», «Could we meet on Friday " +
        "afternoon?». Форму эти графы разрешают, а случай ими не задан. " +
        "УТВЕРДИТЕЛЬНОЕ УМЕНИЕ У ЭТОГО ИСТОЧНИКА — B1: «USE: ABILITY», B1, " +
        "«Can use the affirmative form of 'could' to talk about ability», " +
        "пример «…she could hear a man talking». Модуль его всё же берёт, и " +
        "основание — руководство A2 Key, см. следующую опору. " +
        "ЧЕГО НЕТ, И ВСЁ ЭТО B1: разрешение («USE: PERMISSION» — «Can use " +
        "'could I' to seek permission»); возможность («USE: POSSIBILITY»); " +
        "предложения с расширенным кругом глаголов («USE: SUGGESTIONS», " +
        "лексический диапазон 2); `was able to` о прошлом (MODALITY, " +
        "expressions with be, «USE: 'BE ABLE TO', PAST» — «Can use 'was able " +
        "to', 'were able to' to talk about facts in the past»). " +
        "ПРЕДЛОЖЕНИЯ ЧЕРЕЗ `could` НА A2 ЕСТЬ («USE: SUGGESTIONS», " +
        "лексический диапазон 1, пример «We could have dinner after that, if " +
        "you want»), но модуль их не берёт — не по уровню, а потому что " +
        "предлагать курс учит уже трижды: модуль 12 даёт `Shall we…?`, `Let's` " +
        "и `Why don't we…?`, модуль 26 — `should`",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "ОСНОВАНИЕ ДЛЯ УТВЕРДИТЕЛЬНОГО `could`. с. 51, Language " +
        "specifications, перечень Modals, строка целиком: «can (ability; " +
        "requests; permission) could (ability; polite requests) would (polite " +
        "requests)». Ограничения отрицанием там нет, и умение названо прямо. " +
        "Тот же перечень дал `mustn't (prohibition)` модулю 25 и `should " +
        "(advice)` модулю 26. " +
        "И СОБСТВЕННЫЙ ТЕКСТ ЭКЗАМЕНА ПИШЕТ УТВЕРДИТЕЛЬНО: с. 10, задание на " +
        "чтение — «Alice's daughter Demi started learning ballet as soon as " +
        "she could walk». " +
        "САМАЯ СИЛЬНАЯ ОПОРА — ТАМ ЖЕ, НА с. 51, В ПЕРЕЧНЕ «Inventory of " +
        "functions, notions and communicative tasks»: «expressing (in)ability " +
        "in the present and in the past». Прошедшее время названо прямо и без " +
        "оговорки про отрицание. Нашёл методист при разборе; первая редакция " +
        "опоры её не знала и потому объявляла решение меркой ступени, а оно " +
        "подпёрто источником напрямую. " +
        "КОРОТКИЕ ОТВЕТЫ УРОКА 3 — с. 52, перечень Verb forms: «Short " +
        "questions (Can you?) and answers (No, he doesn't)». " +
        "СМЫСЛ СЛОВА `costume` — КОСТЮМ ДЛЯ РОЛИ — ТОЖЕ ОТСЮДА: с. 10, " +
        "«making costumes for the dancers». Словник A2 Key даёт другое " +
        "значение, купальник, и на него опереться было нельзя. " +
        "РАЗРЕШЕНИЕ ТОЙ ЖЕ СТРОКОЙ ОТДАНО СЛОВУ `can`, А НЕ `could` — поэтому " +
        "модуль его и не берёт: тут оба источника согласны. " +
        "УРОК 5, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем рассказ о детстве». с. 54, шкала «Overall " +
        "reading comprehension», графа A2: «Can understand short, simple " +
        "texts on familiar matters of a concrete type which consist of high " +
        "frequency everyday or job-related language». " +
        "ПЕРВАЯ РЕДАКЦИЯ ОБРЕЗАЛА ЦИТАТУ НА СЛОВЕ everyday И НАЗВАЛА НЕ ТУ " +
        "ШКАЛУ — «Reading for information and argument». Поймала сверка: она " +
        "считает, сколько слов цитаты нашлось в источнике, и остановилась на " +
        "восемнадцати из девятнадцати. " +
        "УРОК ПИСЬМА «Пишем о детстве». с. 67, шкала «Creative writing», графа " +
        "A2: «Can give very short, basic descriptions of events, past " +
        "activities and personal experiences» и «Can tell a simple story». " +
        "Рассказ о том, что выходило в детстве, — ровно этот случай. " +
        "ОПОРЫ ЧТЕНИЯ И ПИСЬМА РАЗВЕДЕНЫ НАРОЧНО — так подсказал методист при " +
        "разборе модуля 23",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Четырнадцать карточек модуля взяты из словника ступени; новых для " +
        "ступени тринадцать: granny, kick, baseball, record, bat, fail, " +
        "upset, dinosaur, channel, costume, dressed, clown, pop. " +
        "Четырнадцатое — `footballer`: сверка сводит его к `football`, а его " +
        "Oxford помечает A1. Карточка всё же нужна: само слово ученик " +
        "встречает впервые. Почему четырнадцать, а не тридцать — разобрано в " +
        "программе: запас ступени подошёл к концу, и добирать счёт мёртвыми " +
        "карточками уточнение владельца от 21 августа запрещает прямо. " +
        "ЧТО ВЗЯТО ИЗ СЛОВНИКА: `bat (n)` — бита, а не летучая мышь, и " +
        "словник иллюстрирует её как раз бейсбольной («a baseball bat»); " +
        "`dressed (adj)` — только определение, пример словника «Hurry, you " +
        "need to get dressed!», поэтому в уроке стоит `get dressed`, а не " +
        "`dress`. " +
        "ЧЕГО СЛОВНИК НЕ ДАЁТ, ХОТЯ ПЕРВАЯ РЕДАКЦИЯ ЕМУ ЭТО ПРИПИСАЛА. " +
        "Существительного `record` в нём нет вовсе: стоит `record (v)` с " +
        "примером «They're recording a new album», то есть про запись музыки, " +
        "а не про рекорд. И `pop` помечен там `(n)`, а не `(n & adj)`. Обе " +
        "пометы на самом деле из Oxford 3000: `record n., v. A2` и `pop n., " +
        "adj. A2` — источник назван теперь верно. Нашёл методист. " +
        "СМЫСЛ `costume` СЛОВНИК ТОЖЕ НЕ ПОДТВЕРЖДАЕТ: он иллюстрирует его " +
        "купальником («I forgot my swimming costume»). Костюм для роли даёт " +
        "не он, а руководство A2 Key — цитата стоит в опоре на руководство, " +
        "выше. " +
        "ШЕСТЬ СЛОВ МОДУЛЯ OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ВСЕ ШЕСТЬ ВЗЯТЫ ПО " +
        "МЕРКЕ СТУПЕНИ: `kick v., n. B1`, `upset adj., v. B1`, `channel n. " +
        "B1`, `costume n. B1`, `dressed adj. B1` и `bat n. B2` (последнее — в " +
        "`oxford-5000`). Все шесть стоят в словнике A2 Key, то есть входят в " +
        "требования экзамена. Мерка та же, что у самого `could` выше, и " +
        "применяется ко всем одинаково. " +
        "ПЕРВАЯ РЕДАКЦИЯ ОБЪЯВЛЯЛА ТОЛЬКО ДВА СЛОВА ИЗ ШЕСТИ, а про пять " +
        "писала, что Oxford их не знает. Это неверно: `baseball n. A2`, " +
        "`fail v. A2`, `dressed adj. B1`, `costume n. B1`, `kick v., n. B1` " +
        "там есть. Не нашлись только `granny`, `footballer`, `dinosaur`, " +
        "`clown` — проверено по обоим спискам построчно",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "umel-ranshe",
      title: "Умел раньше: I could swim at six",
      estimatedMinutes: 15,
      outcome: "рассказывать, что умел герой раньше: I could swim at six",

      vozvrat: [{ iz: "stoit-i-ne-stoit", zadanie: "z1-dopisat-should" }],

      blocks: [
        {
          id: "detstvo-i-umenie",
          kind: "explain",
          text: [
            "Данияр и Айгуль смотрят старые снимки и вспоминают детство.",
            "Айгуль на снимке в бассейне: ей шесть лет, и она уже плавает.",
            "Об умении, которое было раньше, говорят другим словом.",
          ],
        },
        {
          id: "seychas-i-togda",
          kind: "table",
          caption: "Умение сейчас и умение в прошлом",
          zvuchat: [
            "I can swim.",
            "I could swim at six.",
            "you can swim",
            "you could swim",
            "he can swim",
            "he could swim",
          ],
          head: ["Умею сейчас", "Умел тогда"],
          rows: [
            ["I can swim.", "I could swim at six."],
            ["you can swim", "you could swim"],
            ["he can swim", "he could swim"],
          ],
        },
        {
          id: "kak-ustroeno-umenie-v-proshlom",
          kind: "explain",
          text: [
            "Об умении, которое было раньше, говорят словом could.",
            "Оно не меняется ни у одного лица: I could, you could, he could.",
            "Глагол после него стоит в обычной форме, и to не ставят.",
            "Вместо местоимения может стоять имя: my granny could cook, my friends could swim.",
            "Когда это было, говорят отдельно: at six, in school, when I was ten.",
          ],
        },
        {
          id: "ne-could-to",
          kind: "note",
          tone: "mistake",
          text:
            "«I could to swim» — так не говорят.\n\nПосле could слово to не " +
            "ставят: I could swim.",
        },
        {
          id: "razgovor-o-snimkah",
          kind: "example",
          caption: "Разговор над снимками",
          razgovor: true,
          zvuchat: [
            "I could swim at six. My granny took me to the pool.",
            "And I could kick a ball at four.",
            "My brother could play baseball, and he broke the school record.",
          ],
          text:
            "I could swim at six. My granny took me to the pool.\nAnd I could kick a ball at four.\nMy brother could play baseball, and he broke the school record.",
          explain:
            "Во всех трёх строках после could стоит обычная форма глагола: " +
            "swim, kick, play. В третьей вместо местоимения стоит my brother, " +
            "и слово could от этого не меняется.",
        },
        {
          id: "slovar-detstva",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "granny", translation: "бабушка", example: "My granny took me to the pool.", hint: "/ˈgræni/" },
            { term: "kick", translation: "пинать, бить по мячу", example: "I could kick a ball at four.", hint: "/kɪk/" },
            { term: "baseball", translation: "бейсбол", example: "My brother could play baseball.", hint: "/ˈbeɪsbɔːl/" },
            { term: "record", translation: "рекорд", example: "He broke the school record.", hint: "/ˈrekɔːd/" },
            { term: "footballer", translation: "футболист", example: "I was not a footballer.", hint: "/ˈfʊtbɔːlə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-could",
          kind: "gap",
          prompt: "Это умение было в прошлом. Допиши слово.",
          before: "I ",
          after: " swim at six.",
          answer: "could",
          hint: "Это то же can, только сказанное о прошлом.",
          why:
            "I could swim at six. Слово can сказало бы про сегодняшний день, а " +
            "речь о шести годах.",
        },
        {
          id: "z2-vybrat-umenie-v-proshlom",
          kind: "choice",
          prompt: "В какой записи об умении в прошлом сказано верно?",
          options: [
            { text: "I could to kick a ball." },
            { text: "I could kick a ball.", correct: true },
            { text: "I coulded kick a ball." },
          ],
          hint: "После слова умения глагол стоит в обычной форме, без to.",
          why:
            "I could kick a ball. В первой записи лишнее to, а во второй слово " +
            "could взяло окончание, которого у него не бывает.",
        },
        {
          id: "z3-otmetit-proshloe-umenie",
          kind: "hottext",
          prompt: "Отметь строки, где сказано об умении в прошлом.",
          parts: [
            { text: "My granny could cook well.", selectable: true, correct: true },
            { text: " · " },
            { text: "I can swim now.", selectable: true },
            { text: " · " },
            { text: "He could play baseball at school.", selectable: true, correct: true },
            { text: " · " },
            { text: "She can kick a ball.", selectable: true },
          ],
          hint: "Ищи слово could: оно и говорит о прошлом.",
          why:
            "Первая и третья. Во второй и четвёртой стоит can — речь о " +
            "сегодняшнем дне.",
        },
        {
          id: "z4-sobrat-umenie",
          kind: "order",
          prompt: "Собери строку: мой брат умел играть в бейсбол.",
          items: ["play baseball.", "My brother", "could"],
          answer: [1, 2, 0],
          hint: "Слово умения стоит сразу после того, о ком речь.",
          why:
            "My brother could play baseball. Слово could не меняется оттого, " +
            "что вместо местоимения стоит имя.",
        },
        {
          id: "z5-napisat-o-babushke",
          kind: "short",
          prompt:
            "Скажи, что твоя бабушка умела хорошо готовить. Начни с My granny.",
          answer: "My granny could cook well.",
          accept: ["My granny could cook well"],
          hint: "Слово умения стоит между тем, о ком речь, и глаголом.",
          why:
            "My granny could cook well. Запись My granny cooked well сказала " +
            "бы о самом деле, а не об умении.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-umel",
      title: "Не умел: I couldn't ride a bike",
      estimatedMinutes: 15,
      outcome: "говорить, чего человек не умел: I couldn't ride a bike",

      blocks: [
        {
          id: "chego-ne-vyhodilo",
          kind: "explain",
          text: [
            "На другом снимке Данияр рядом с велосипедом, а не на нём.",
            "Ему было семь, и ездить он ещё не умел.",
            "О том, чего не выходило, говорят тем же словом с отрицанием.",
          ],
        },
        {
          id: "umel-i-ne-umel",
          kind: "table",
          caption: "Умел и не умел",
          zvuchat: [
            "I could swim.",
            "I couldn't ride a bike.",
            "He could kick a ball.",
            "He couldn't catch it.",
            "My friends could read.",
            "My friends couldn't write.",
          ],
          head: ["Умел", "Не умел"],
          rows: [
            ["I could swim.", "I couldn't ride a bike."],
            ["He could kick a ball.", "He couldn't catch it."],
            ["My friends could read.", "My friends couldn't write."],
          ],
        },
        {
          id: "kak-ustroeno-otricanie-umeniya",
          kind: "explain",
          text: [
            "Слово could берёт not и сливается с ним: couldn't.",
            "Глагол после него остаётся в обычной форме: ride, catch, write.",
            "Слово did в такую строку не добавляют вовсе.",
            "Тем же оборотом говорят и о единственном случае: I couldn't open the door.",
            "Причину называют словом because: I couldn't hold the bat because it was heavy.",
          ],
        },
        {
          id: "ne-didnt-could",
          kind: "note",
          tone: "mistake",
          text:
            "«I didn't could ride a bike» — так не говорят.\n\nСлово could " +
            "берёт not само: I couldn't ride a bike.",
        },
        {
          id: "rasskaz-o-neudachah",
          kind: "example",
          caption: "Данияр о своих неудачах",
          zvuchat: [
            "I couldn't ride a bike at seven. The bike was too big.",
            "I couldn't hold the bat: it was heavy.",
            "I failed my first test at school, and I was upset all day.",
          ],
          text:
            "I couldn't ride a bike at seven. The bike was too big.\nI couldn't hold the bat: it was heavy.\nI failed my first test at school, and I was upset all day.",
          explain:
            "В первых двух строках couldn't говорит о том, чего не выходило, и " +
            "рядом названа причина. Третья строка о случае, а не об умении: " +
            "там стоит обычное прошедшее время.",
        },
        {
          id: "slovar-neudach",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bat", translation: "бита (в игре)", example: "I couldn't hold the bat.", hint: "/bæt/" },
            { term: "fail", translation: "не сдать, провалить", example: "I failed my first test at school.", hint: "/feɪl/" },
            { term: "upset", translation: "расстроенный", example: "I was upset all day.", hint: "/ʌpˈset/" },
            { term: "dinosaur", translation: "динозавр", example: "I could name every dinosaur.", hint: "/ˈdaɪnəsɔː/" },
            { term: "channel", translation: "телеканал", example: "I couldn't change the channel.", hint: "/ˈtʃænl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-couldnt",
          kind: "gap",
          prompt: "Ездить на велосипеде не выходило. Допиши слово.",
          before: "I ",
          after: " ride a bike at seven.",
          answer: "couldn't",
          hint: "Слово умения берёт not и сливается с ним.",
          why:
            "I couldn't ride a bike at seven. Слово didn't сюда не ставят: " +
            "could отрицает себя само.",
        },
        {
          id: "z2-otlichit-umenie-ot-sluchaya",
          kind: "choice",
          prompt:
            "Строки I couldn't open the door и I didn't open the door говорят о разном. Чем?",
          options: [
            { text: "В первой не вышло, во второй просто не стал.", correct: true },
            { text: "Первая о вчерашнем дне, вторая о сегодняшнем." },
            { text: "Первая длиннее второй." },
          ],
          hint: "Спроси: человек пробовал или нет?",
          why:
            "В первой не вышло: дверь не поддалась. Во второй человек её " +
            "просто не открывал.",
        },
        {
          id: "z3-otmetit-chego-ne-vyhodilo",
          kind: "hottext",
          prompt: "Отметь строки, где сказано, чего не выходило.",
          parts: [
            { text: "I couldn't change the channel.", selectable: true, correct: true },
            { text: " · " },
            { text: "I could name every dinosaur.", selectable: true },
            { text: " · " },
            { text: "He couldn't hold the bat.", selectable: true, correct: true },
            { text: " · " },
            { text: "She could read at five.", selectable: true },
          ],
          hint: "Ищи слово умения с not, а не без него.",
          why:
            "Первая и третья. Во второй и четвёртой стоит could без not — там " +
            "сказано, что выходило.",
        },
        {
          id: "z4-sobrat-otricanie",
          kind: "order",
          prompt: "Собери строку: он не мог удержать биту.",
          items: ["hold the bat.", "couldn't", "He"],
          answer: [2, 1, 0],
          hint: "Слово умения с not стоит сразу после того, о ком речь.",
          why:
            "He couldn't hold the bat. Глагол после него в обычной форме.",
        },
        {
          id: "z5-nazvat-prichinu",
          kind: "short",
          prompt:
            "Скажи одной строкой: ездить на велосипеде не выходило, потому что он был слишком велик. Начни с I couldn't.",
          answer: "I couldn't ride a bike because it was too big.",
          accept: [
            "I couldn't ride a bike because it was too big",
            "I couldn't ride a bike because it was too big.",
            "I couldn't ride a bike because the bike was too big.",
            "I couldn't ride a bike because the bike was too big",
            "I couldn't ride a bike, because it was too big",
            "I couldn't ride a bike, because it was too big.",
            "I couldn't ride a bike, because the bike was too big.",
            "I couldn't ride a bike, because the bike was too big",
          ],
          hint: "Причину присоединяют одним словом.",
          why:
            "I couldn't ride a bike because it was too big. Годится и because " +
            "the bike was too big — оба говорят о том же.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "umel-li-ty",
      title: "Умел ли: Could you swim when you were five?",
      estimatedMinutes: 14,
      outcome:
        "спрашивать об умении в прошлом и коротко отвечать: Could you swim? — Yes, I could.",

      blocks: [
        {
          id: "sprosit-ob-umenii",
          kind: "explain",
          text: [
            "Айгуль расспрашивает Данияра о школьном спектакле.",
            "Ей интересно, что он умел тогда, а чего нет.",
            "Слово умения в вопросе выходит в начало строки.",
          ],
        },
        {
          id: "rasskaz-i-vopros",
          kind: "table",
          caption: "Рассказ об умении и вопрос о нём",
          zvuchat: [
            "You could swim.",
            "Could you swim?",
            "He could sing pop songs.",
            "Could he sing pop songs?",
            "They could get dressed alone.",
            "Could they get dressed alone?",
          ],
          head: ["Рассказ", "Вопрос"],
          rows: [
            ["You could swim.", "Could you swim?"],
            ["He could sing pop songs.", "Could he sing pop songs?"],
            ["They could get dressed alone.", "Could they get dressed alone?"],
          ],
        },
        {
          id: "kak-ustroen-vopros-ob-umenii",
          kind: "explain",
          text: [
            "Слово could уходит в начало, а тот, о ком речь, встаёт за ним.",
            "Глагол остаётся в обычной форме: swim, sing, get.",
            "Слово did в такой вопрос не добавляют вовсе.",
            "Когда это было, ставят в конец: when you were five, at school.",
            "Отвечают коротко: Yes, I could или No, I couldn't.",
          ],
        },
        {
          id: "ne-did-you-could",
          kind: "note",
          tone: "mistake",
          text:
            "«Did you could swim?» — так не спрашивают.\n\nВ начало выходит " +
            "само could: Could you swim?",
        },
        {
          id: "razgovor-o-spektakle",
          kind: "example",
          caption: "Разговор о школьном спектакле",
          razgovor: true,
          zvuchat: [
            "Could you get dressed alone at five?",
            "No, I couldn't. My granny helped me with the costume.",
            "Could you play the clown at school?",
            "Yes, I could. Everybody laughed.",
          ],
          text:
            "Could you get dressed alone at five?\nNo, I couldn't. My granny helped me with the costume.\nCould you play the clown at school?\nYes, I could. Everybody laughed.",
          explain:
            "В обоих вопросах could стоит первым, а глагол остаётся в обычной " +
            "форме. В коротком ответе глагол не повторяют: No, I couldn't.",
        },
        {
          id: "slovar-spektaklya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "costume", translation: "костюм для роли", example: "My granny helped me with the costume.", hint: "/ˈkɒstjuːm/" },
            { term: "dressed", translation: "одетый", example: "Could you get dressed alone at five?", hint: "/drest/" },
            { term: "clown", translation: "клоун", example: "Could you play the clown?", hint: "/klaʊn/" },
            { term: "pop", translation: "поп-, эстрадный", example: "He could sing pop songs.", hint: "/pɒp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vopros-ob-umenii",
          kind: "choice",
          prompt: "Спроси, умел ли собеседник петь в пять лет.",
          options: [
            { text: "Did you could sing at five?" },
            { text: "Could you sang at five?" },
            { text: "Could you sing at five?", correct: true },
          ],
          hint: "В начало выходит само слово умения, а глагол не меняется.",
          why:
            "Could you sing at five? Слово did к нему не добавляют, а во " +
            "второй записи глагол взял прошедшую форму, хотя о прошлом уже " +
            "сказало could.",
        },
        {
          id: "z2-otvetit-korotko-da",
          kind: "short",
          prompt:
            "Тебя спросили: Could you swim at six? Ответь коротко — да, умение было.",
          answer: "Yes, I could.",
          accept: ["Yes, I could"],
          hint: "В коротком ответе глагол не повторяют.",
          why: "Yes, I could. Слово swim в таком ответе не звучит вовсе.",
        },
        {
          id: "z3-otmetit-vernye-voprosy",
          kind: "hottext",
          prompt: "Отметь вопросы, заданные верно.",
          parts: [
            { text: "Could you play the clown at school?", selectable: true, correct: true },
            { text: " · " },
            { text: "Did he could sing pop songs?", selectable: true },
            { text: " · " },
            { text: "Could they get dressed alone?", selectable: true, correct: true },
            { text: " · " },
            { text: "Could you to swim at five?", selectable: true },
          ],
          hint: "Слово did тут лишнее, и to после could тоже.",
          why:
            "Первый и третий. Во втором лишнее did, в четвёртом лишнее to.",
        },
        {
          id: "z4-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: умел ли он петь эстрадные песни?",
          items: ["sing pop songs?", "Could", "he"],
          answer: [1, 2, 0],
          hint: "Начни со слова умения.",
          why:
            "Could he sing pop songs? Глагол после него в обычной форме.",
        },
        {
          id: "z5-sprosit-o-kostyume",
          kind: "short",
          prompt:
            "Спроси, умел ли собеседник одеваться сам в пять лет. Начни с Could.",
          answer: "Could you get dressed alone at five?",
          accept: [
            "Could you get dressed alone at five",
            "Could you get dressed alone when you were five?",
            "Could you get dressed alone when you were five",
          ],
          hint: "Когда это было, ставят в конец строки.",
          why:
            "Could you get dressed alone at five? Годится и when you were " +
            "five — оба говорят о том же возрасте.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-detstve",
      title: "Читаем рассказ о детстве",
      estimatedMinutes: 13,
      outcome: "находить в рассказе о детстве, что человек умел, а что нет",

      blocks: [
        {
          id: "zachem-chitat-o-detstve",
          kind: "explain",
          text: [
            "Школьный сайт собирает рассказы выпускников о детстве.",
            "В таком рассказе ищут две вещи: что у человека выходило и что нет.",
            "Ниже рассказ, и вопросы будут о нём.",
          ],
        },
        {
          id: "rasskaz-o-detstve",
          kind: "text",
          title: "What I could do at seven",
          genre: "article",
          body: [
            "At seven I could swim well because my granny took me to the pool every Saturday.",
            "I could name every dinosaur in my book, and my friends could not.",
            "But I couldn't ride a bike: the bike was too big for me.",
            "I couldn't kick a ball well, so the big boys never took me into the game: I was not a footballer.",
            "At nine my brother gave me his old bat, and I started to play baseball.",
            "Two years later I broke the school record, and my granny came to watch.",
          ],
          glossary: [
            { term: "every Saturday", translation: "каждую субботу" },
            { term: "took me into the game", translation: "брали меня в игру" },
            { term: "could name", translation: "умел назвать" },
            { term: "Two years later", translation: "через два года" },
          ],
        },
        {
          id: "kak-iskat-v-rasskaze",
          kind: "note",
          tone: "info",
          text:
            "То, что выходило, ищут по слову could, а то, что не " +
            "выходило, — по couldn't.\n\nПричину называет слово because.",
        },

        // ---- задания ----
        {
          id: "z1-chto-vyhodilo",
          about: "rasskaz-o-detstve",
          kind: "short",
          prompt:
            "Что автор хорошо умел в семь лет? Ответь одним словом по-английски.",
          answer: "swim",
          accept: ["Swim", "swimming"],
          hint: "Об этом сказано в первой строке.",
          why: "At seven I could swim well.",
        },
        {
          id: "z2-chego-ne-vyhodilo",
          about: "rasskaz-o-detstve",
          kind: "choice",
          prompt: "Чего автор не умел?",
          options: [
            { text: "Плавать и называть динозавров." },
            { text: "Ездить на велосипеде и хорошо бить по мячу.", correct: true },
            { text: "Играть в бейсбол в девять лет." },
          ],
          hint: "Ищи строки со словом couldn't.",
          why:
            "Ездить на велосипеде и хорошо бить по мячу: I couldn't ride a " +
            "bike, I couldn't kick a ball well. Слово well тут важно: мяч " +
            "автор бил, но плохо.",
        },
        {
          id: "z3-pochemu-ne-vyhodilo",
          about: "rasskaz-o-detstve",
          kind: "choice",
          prompt: "Отчего у автора не выходило ездить на велосипеде?",
          options: [
            { text: "Велосипед был слишком велик.", correct: true },
            { text: "Велосипеда у него не было." },
            { text: "Бабушка не разрешала." },
          ],
          hint: "Причина стоит в той же строке, после двоеточия.",
          why:
            "Велосипед был слишком велик: the bike was too big for me.",
        },
        {
          id: "z4-v-kakom-vozraste-bita",
          about: "rasskaz-o-detstve",
          kind: "short",
          prompt:
            "В каком возрасте автор получил биту? Ответь числом.",
          answer: "9",
          accept: ["nine", "Nine", "девять"],
          hint: "Про биту сказано в пятой строке.",
          why: "At nine my brother gave me his old bat.",
        },
        {
          id: "z5-otmetit-verno-o-rasskaze",
          about: "rasskaz-o-detstve",
          kind: "hottext",
          prompt: "Отметь то, что верно по рассказу.",
          parts: [
            { text: "бабушка водила автора в бассейн", selectable: true, correct: true },
            { text: " · " },
            { text: "друзья не знали динозавров так хорошо", selectable: true, correct: true },
            { text: " · " },
            { text: "старшие мальчики звали автора в игру", selectable: true },
            { text: " · " },
            { text: "рекорд школы автор побил в девять лет", selectable: true },
          ],
          hint: "Про мальчиков сказано в четвёртой строке, про рекорд — в шестой.",
          why:
            "Верно первое и второе. В игру автора не звали, а рекорд он побил " +
            "через два года после девяти.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-detstve",
      title: "Слушаем рассказ о детстве",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что человек умел в детстве",

      blocks: [
        {
          id: "zachem-slushat-o-detstve",
          kind: "explain",
          text: [
            "Теперь Данияр расспрашивает о том же спектакле Айгуль.",
            "Слушать надо, что выходило у неё, а что нет.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-spektakle",
          kind: "audio",
          caption: "Разговор о спектакле",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Could you play the clown at school? — No, I couldn't. I was too " +
            "shy. But I could sing. — And the costume? — My granny made it. I " +
            "couldn't get dressed alone, so she helped me.",
        },
        {
          id: "chto-slushat-v-rasskaze",
          kind: "note",
          tone: "info",
          text:
            "Слушай, где звучит could, а где couldn't.\n\nПервое — о том, что " +
            "выходило, второе — о том, что нет.",
        },

        // ---- задания ----
        {
          id: "z1-chto-vyhodilo-v-zapisi",
          about: "zapis-o-spektakle",
          kind: "short",
          prompt:
            "Послушай. Что у говорящего выходило? Ответь одним словом по-английски.",
          answer: "sing",
          accept: ["Sing", "singing"],
          hint: "Ответ звучит в конце второй реплики.",
          why: "But I could sing.",
        },
        {
          id: "z2-kto-sdelal-kostyum",
          about: "zapis-o-spektakle",
          kind: "short",
          prompt:
            "Послушай. Кто сделал костюм? Ответь одним словом по-английски.",
          answer: "granny",
          accept: ["Granny", "my granny", "My granny", "her granny"],
          hint: "Об этом сказано в самой последней реплике.",
          why: "My granny made it.",
        },
        {
          id: "z3-pochemu-ne-igral-klouna",
          about: "zapis-o-spektakle",
          kind: "choice",
          prompt: "Послушай. Отчего говорящий не играл клоуна?",
          options: [
            { text: "Роль отдали другому." },
            { text: "Он был слишком застенчив.", correct: true },
            { text: "Не было костюма." },
          ],
          hint: "Причина названа сразу после короткого ответа.",
          why: "No, I couldn't. I was too shy.",
        },
        {
          id: "z4-otmetit-uslyshannoe",
          about: "zapis-o-spektakle",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "петь у говорящего выходило", selectable: true, correct: true },
            { text: " · " },
            { text: "одеться сам он не мог", selectable: true, correct: true },
            { text: " · " },
            { text: "костюм купили в магазине", selectable: true },
            { text: " · " },
            { text: "клоуна он всё-таки сыграл", selectable: true },
          ],
          hint: "Про костюм сказано в самой последней реплике.",
          why:
            "Прозвучали первое и второе. Костюм сделала бабушка, а клоуна " +
            "говорящий не играл.",
        },
        {
          id: "z5-chto-znachit-korotkiy-otvet",
          about: "zapis-o-spektakle",
          kind: "choice",
          prompt:
            "В записи звучит No, I couldn't. О чём этот ответ?",
          options: [
            { text: "О том, что говорящий не хотел." },
            { text: "О том, что у говорящего не вышло.", correct: true },
            { text: "О том, что вопроса он не понял." },
          ],
          hint: "Короткий ответ повторяет слово умения из вопроса.",
          why:
            "О том, что не вышло. Слово couldn't и говорит, что умения не " +
            "было: дальше названа причина — I was too shy.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-detstve",
      title: "Пишем о детстве",
      estimatedMinutes: 15,
      outcome:
        "проверять рассказ о детстве: назван возраст, умение и то, что не выходило",

      blocks: [
        {
          id: "zachem-proveryat-rasskaz",
          kind: "explain",
          text: [
            "Ученик прислал на школьный сайт одну строку: «My childhood was nice.»",
            "Читатель закроет это и не узнает о нём ничего.",
            "В рассказе о детстве пропускают не оценку, а сами дела.",
            "Проверить свой рассказ можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-rasskaze",
          kind: "table",
          caption: "Что должно быть в рассказе о детстве",
          zvuchat: [
            "At seven I could swim well.",
            "My granny took me to the pool every Saturday.",
            "But I couldn't ride a bike because the bike was too big.",
            "At nine I started to play baseball.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["сколько было лет и что выходило", "At seven I could swim well."],
            ["кто был рядом", "My granny took me to the pool every Saturday."],
            ["что не выходило и отчего", "But I couldn't ride a bike because the bike was too big."],
            ["чем дело кончилось", "At nine I started to play baseball."],
          ],
        },
        {
          id: "chem-derzhitsya-rasskaz",
          kind: "explain",
          text: [
            "Первая строка называет возраст и умение: at seven I could swim.",
            "Вторая говорит, кто был рядом, — рассказ становится живым.",
            "Третья называет то, что не выходило, и сразу причину — через because.",
            "Четвёртая говорит, чем дело кончилось.",
            "Оценку вроде nice ставить не нужно: дела говорят сами.",
          ],
        },
        {
          id: "obrazec-rasskaza",
          kind: "example",
          caption: "Рассказ Айгуль",
          zvuchat: [
            "At five I could sing pop songs, and everybody in the family listened.",
            "My brother taught me the words.",
            "But I couldn't get dressed alone because the costume was too hard for me.",
            "At six I could do it alone, and my granny only watched.",
          ],
          text:
            "At five I could sing pop songs, and everybody in the family listened.\nMy brother taught me the words.\nBut I couldn't get dressed alone because the costume was too hard for me.\nAt six I could do it alone, and my granny only watched.",
          explain:
            "Первая строка называет возраст и умение, вторая — того, кто был " +
            "рядом. Третья говорит, что не выходило, и тут же отчего. " +
            "Четвёртая — чем дело кончилось. Оценки нет ни одной, а рассказ " +
            "понятен.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-rasskazu",
          kind: "choice",
          prompt:
            "Рассказ целиком: My childhood was nice. Чего в нём не хватает?",
          options: [
            { text: "Имени того, кто писал." },
            { text: "Хотя бы одного дела: что выходило и что нет.", correct: true },
            { text: "Названия школы." },
          ],
          hint: "Спроси: что читатель узнал о человеке из этой строки?",
          why:
            "Хотя бы одного дела. Оценка есть, а того, чем человек занимался, " +
            "нет вовсе.",
        },
        {
          id: "z2-dopisat-prichinu-v-rasskaz",
          kind: "gap",
          prompt:
            "Одной строкой сказано и что не вышло, и отчего. Допиши слово.",
          before: "But I couldn't get dressed alone, ",
          after: " the costume was too hard for me.",
          answer: "because",
          hint: "Это слово присоединяет причину к тому, что не вышло.",
          why:
            "But I couldn't get dressed alone because the costume was too " +
            "hard for me. Без него вышли бы две отдельные мысли.",
        },
        {
          id: "z3-otmetit-stroki-o-delah",
          kind: "hottext",
          prompt: "Отметь строки, из которых читатель узнаёт о делах героя.",
          parts: [
            { text: "At five I could sing pop songs.", selectable: true, correct: true },
            { text: " · " },
            { text: "My childhood was nice.", selectable: true },
            { text: " · " },
            { text: "I couldn't get dressed alone.", selectable: true, correct: true },
            { text: " · " },
            { text: "It was a good year.", selectable: true },
          ],
          hint: "Ищи слово умения — с not и без.",
          why:
            "Первая и третья. Вторая и четвёртая дают оценку, а не дело.",
        },
        {
          id: "z4-sobrat-konec-rasskaza",
          kind: "order",
          prompt:
            "Собери последнюю строку рассказа: в шесть я уже мог сделать это сам.",
          items: ["do it alone.", "At six", "I could"],
          answer: [1, 2, 0],
          hint: "Возраст стоит в самом начале строки.",
          why:
            "At six I could do it alone. Такая строка и говорит, чем дело " +
            "кончилось.",
        },
        {
          id: "z5-napisat-rasskaz-o-detstve",
          kind: "essay",
          prompt:
            "Напиши на школьный сайт рассказ о своём детстве, четырьмя строками. Назови возраст и то, что выходило. Скажи, кто был рядом. Одной строкой через because назови то, что не выходило и отчего. Скажи, чем дело кончилось.",
          minWords: 15,
          sample:
            "At five I could sing pop songs, and everybody in the family listened.\nMy brother taught me the words.\nBut I couldn't get dressed alone because the costume was too hard for me.\nAt six I could do it alone, and my granny only watched.",
          checklist: [
            "назван возраст и то, что выходило",
            "сказано, кто был рядом",
            "есть строка со словом couldn't и причиной через because",
            "сказано, чем дело кончилось",
          ],
          hint:
            "Бери обороты, которые знаешь: At five I could…, But I couldn't… because…",
          why:
            "Рассказ работает, когда читатель видит дело, а не оценку.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, отличить умение от случая.

      // ---- итог 1 ----
      {
        id: "q-ispravit-can-v-proshlom",
        kind: "short",
        outcome: "рассказывать, что умел герой раньше: I could swim at six",
        prompt:
          "Ученик написал: When I was six I can swim. Запиши строку без ошибки.",
        answer: "When I was six I could swim.",
        accept: [
          "When I was six I could swim",
          "When I was six, I could swim.",
          "When I was six, I could swim",
        ],
        hint: "Начало строки говорит о прошлом, а конец — нет.",
        why:
          "When I was six I could swim. Слово can говорит о сегодняшнем дне, " +
          "а речь о шести годах.",
      },
      {
        id: "q-pochemu-could-ne-menyaetsya",
        kind: "choice",
        outcome: "рассказывать, что умел герой раньше: I could swim at six",
        prompt:
          "В какой записи ошибка?",
        options: [
          { text: "My friends could read at five." },
          { text: "My granny coulds cook well.", correct: true },
          { text: "He could play baseball." },
        ],
        hint: "Одно из трёх слов умения взяло окончание.",
        why:
          "My granny coulds cook well. Слово умения не меняется ни у одного " +
          "лица, окончания у него не бывает.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-couldnt-glagol",
        kind: "short",
        outcome: "говорить, чего человек не умел: I couldn't ride a bike",
        prompt:
          "Ученик написал: He couldn't caught the ball. Запиши строку без ошибки.",
        answer: "He couldn't catch the ball.",
        accept: ["He couldn't catch the ball", "He could not catch the ball."],
        hint: "О прошлом здесь говорит только первое слово.",
        why:
          "He couldn't catch the ball. Прошлое уже названо словом couldn't, и " +
          "глагол остаётся в обычной форме.",
      },
      {
        id: "q-nazvat-prichinu-oshibki-didnt-could",
        kind: "choice",
        outcome: "говорить, чего человек не умел: I couldn't ride a bike",
        prompt:
          "Запись I didn't could ride a bike неверна. Отчего?",
        options: [
          { text: "Слово could отрицает себя само, и didn't тут лишнее.", correct: true },
          { text: "Глагол ride надо поставить в прошедшую форму." },
          { text: "Слово could должно стоять перед didn't." },
        ],
        hint: "Посмотри, сколько слов в строке говорят «нет».",
        why:
          "Слово could отрицает себя само: I couldn't ride a bike. Второе " +
          "отрицание тут лишнее.",
      },

      // ---- итог 3 ----
      {
        id: "q-perepisat-rasskaz-v-vopros",
        kind: "short",
        outcome:
          "спрашивать об умении в прошлом и коротко отвечать: Could you swim? — Yes, I could.",
        prompt:
          "Строку She could read at five перепиши так, чтобы вышел вопрос об этом умении.",
        answer: "Could she read at five?",
        accept: ["Could she read at five"],
        hint: "Слово умения уходит в начало, а за ним встаёт тот, о ком речь.",
        why:
          "Could she read at five? Слово did в такой вопрос не добавляют.",
      },
      {
        id: "q-ispravit-korotkiy-otvet",
        kind: "short",
        outcome:
          "спрашивать об умении в прошлом и коротко отвечать: Could you swim? — Yes, I could.",
        prompt:
          "На вопрос Could you ride a bike at seven? ученик ответил: No, I didn't. Запиши короткий ответ без ошибки.",
        answer: "No, I couldn't.",
        accept: ["No, I couldn't", "No, I could not.", "No, I could not"],
        hint: "Короткий ответ повторяет то слово, с которого начался вопрос.",
        why:
          "No, I couldn't. Слово did в таком ответе не появляется вовсе: " +
          "вопрос начался не с него.",
      },

      // ---- итог 4 ----
      {
        id: "q-najti-umenie-v-rasskaze",
        kind: "choice",
        outcome: "находить в рассказе о детстве, что человек умел, а что нет",
        prompt:
          "В рассказе строка: I could name every dinosaur in my book, and my friends could not. Что она говорит?",
        options: [
          { text: "Автор знал динозавров, а его друзья — нет.", correct: true },
          { text: "Друзья знали динозавров лучше автора." },
          { text: "У друзей не было книги." },
        ],
        hint: "Вторая половина строки повторяет слово умения с отрицанием.",
        why:
          "Автор знал, а друзья нет. Оборот could not в конце и говорит, что " +
          "у друзей это не выходило.",
      },
      {
        id: "q-chto-sleduet-iz-stroki-rasskaza",
        kind: "choice",
        outcome: "находить в рассказе о детстве, что человек умел, а что нет",
        prompt:
          "В рассказе строка: I couldn't kick a ball well, so the big boys never took me into the game. Что из неё следует?",
        options: [
          { text: "Автор не любил футбол." },
          { text: "В дворовые игры автора не брали.", correct: true },
          { text: "Мальчики играли без мяча." },
        ],
        hint: "Смотри, что стоит после слова so.",
        why:
          "В игры автора не брали. Слово so и вводит то, чем обернулось " +
          "неумение.",
      },

      // ---- итог 5 ----
      {
        id: "q-uslyshat-chego-ne-umel",
        kind: "short",
        outcome: "слышать в разговоре, что человек умел в детстве",
        zvuk:
          "I couldn't play the guitar at ten, but I could draw very well.",
        prompt:
          "Послушай. На чём говорящий не умел играть в десять лет? Ответь одним словом по-английски.",
        answer: "guitar",
        accept: ["Guitar", "the guitar"],
        hint: "Ответ звучит в первой половине записи.",
        why:
          "Guitar. Второй половиной идёт то, что у говорящего как раз " +
          "выходило, — рисование.",
      },
      {
        id: "q-uslyshat-vozrast",
        kind: "short",
        outcome: "слышать в разговоре, что человек умел в детстве",
        zvuk: "My sister could read at four, and she read to me every evening.",
        prompt: "Послушай. Во сколько лет сестра умела читать? Ответь числом.",
        answer: "4",
        accept: ["four", "Four", "четыре"],
        hint: "Возраст назван сразу после слова умения.",
        why: "My sister could read at four.",
      },

      // ---- итог 6 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-rasskazu",
        kind: "choice",
        outcome:
          "проверять рассказ о детстве: назван возраст, умение и то, что не выходило",
        prompt:
          "Рассказ: At six I could swim. My granny took me to the pool. The water was cold. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что называет возраст." },
          { text: "Той, что говорит, кто был рядом." },
          { text: "Той, что называет то, что не выходило.", correct: true },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что называет неудачу. Возраст назван, бабушка названа, а " +
          "слова couldn't нет ни разу.",
      },
      {
        id: "q-dopisat-neudachu-v-rasskaz",
        kind: "short",
        outcome:
          "проверять рассказ о детстве: назван возраст, умение и то, что не выходило",
        prompt:
          "К рассказу допиши строку о том, что не выходило: поймать мяч не получалось. Начни с But и скажи о себе.",
        answer: "But I couldn't catch the ball.",
        accept: [
          "But I couldn't catch the ball",
          "But I could not catch the ball.",
          "But I could not catch the ball",
        ],
        hint: "В строке должно быть ровно одно слово со значением «нет».",
        why:
          "But I couldn't catch the ball. Глагол после него остаётся в " +
          "обычной форме.",
      },
      {
        id: "q-zachem-v-rasskaze-prichina",
        kind: "choice",
        outcome:
          "проверять рассказ о детстве: назван возраст, умение и то, что не выходило",
        prompt:
          "Отчего в рассказе о детстве нужна причина, а не только сама неудача?",
        options: [
          { text: "Так рассказ выходит длиннее." },
          { text: "Так принято заканчивать рассказ." },
          { text: "Без причины читатель решит, что дело в самом человеке.", correct: true },
        ],
        hint: "Сравни: «не мог ездить» и «не мог ездить: велосипед был велик».",
        why:
          "Без причины читатель решит, что дело в человеке. Строка про " +
          "слишком большой велосипед объясняет всё сразу.",
      },
    ],
  },
};

export default module;
