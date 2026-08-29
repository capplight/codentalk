import type { Module } from "@/lib/content/types";

/**
 * Модуль 31 курса «Английский · Elementary»: он сказал, что.
 *
 * Программа: docs/programma-english-elementary.md, модуль 31 — «пересказывать
 * чужие слова и переспрашивать»; грамматика: `say that` и `tell somebody
 * that`, сдвиг местоимения БЕЗ сдвига времени; вопрос-переспрос. Строка
 * проверена 29 августа 2026, до написания; разбор с цитатами — там же.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ МОДУЛЯ — «ПЕРЕСКАЗ». Половина строки, где стоит `say` или
 * `tell`, зовётся «вводом», вторая — «пересказанными словами».
 *
 * ЭТО ПОСЛЕДНИЙ МОДУЛЬ СТУПЕНИ. После него по решению владельца от 20 августа
 * идёт общий проход по всей ступени: круг на модуль был один, а мелкое,
 * найденное вторым и третьим кругом, копилось до этого места.
 *
 * ПРОВЕРКА ПО КУРСУ СДЕЛАНА ПЕРВОЙ. Пересказа чужих слов в курсе нет нигде:
 * `said` встречается в видимом тексте один раз, внутри рассказа («said wow»),
 * `told` — ни разу. Строка свободна целиком. Это первая строка за шесть, где
 * проверка по курсу ничего не нашла: у модулей 26, 28, 29 и 30 она находила
 * уже написанное.
 *
 * СТРОКА ТОЧНА ДО МЕЛОЧИ, И МЕЛОЧЬ ЭТА ГЛАВНАЯ. English Grammar Profile делит
 * пересказ надвое:
 *
 * - **A2** — «FORM: REPORTED STATEMENTS WITH 'SAY', **PRONOUN SHIFT**» и
 *   «FORM: REPORTED STATEMENTS WITH 'TELL', **PRONOUN SHIFT**»;
 * - **B1** — «FORM: REPORTED STATEMENTS, PRONOUN **AND TENSE** SHIFT».
 *
 * То есть сдвиг местоимения — ступень наша, сдвиг времени — следующая. И
 * примеры граф A2 это показывают прямо: «My mother said that she **can** take
 * us there», «my father told me that he **will** call» — время не сдвинуто.
 *
 * ОТСЮДА ПРАВИЛО, КОТОРОЕ МОДУЛЬ ДЕРЖИТ ТВЁРДО: пересказывая, время НЕ
 * трогаем. «I am busy» → «He said that he **is** busy». Это не упрощение и не
 * поблажка: так стоит у источника на этой ступени. Учитель, знающий про
 * «согласование времён», должен видеть здесь ссылку на графу, а не недосмотр.
 *
 * ВОПРОС-ПЕРЕСПРОС — ТОЖЕ A2, НО С ОГОВОРКОЙ ИСТОЧНИКА. Графа «FORM: QUESTION
 * TAGS» стоит с лексическим диапазоном 1: «Can use **a limited range of**
 * question tags». Расширенный набор лежит на B1 тремя отдельными графами.
 * Значит модуль берёт горстку самых ходовых и правила на все случаи из них не
 * строит — иначе повторится ошибка модуля 14, где оговорка «usually» стала
 * порогом.
 *
 * В РУКОВОДСТВЕ A2 KEY ВОПРОСА-ПЕРЕСПРОСА Я НЕ НАШЁЛ — искал по «question tag»
 * и «tag question» в разборе всего файла. Это «не нашёл», а не «нет»: оборот
 * держится на English Grammar Profile.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ВСЁ ЭТО B1: сдвиг времени; пересказ вопросов («asked
 * if», «asked why»); пересказ просьб и приказов («asked me to come»); прямая
 * речь в кавычках; `wonder`; расширенный набор переспросов; тег `right?`;
 * сдвиг слов о времени. Проверены по одной.
 *
 * СЛОВАРЬ МОДУЛЯ — ОДИННАДЦАТЬ КАРТОЧЕК, ВСЕ НОВЫЕ ДЛЯ СТУПЕНИ. Мир модуля —
 * новости и сообщения: их и пересказывают.
 *
 * ПЯТЬ СЛОВ OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ВСЕ ПЯТЬ ВЗЯТЫ ПО МЕРКЕ СТУПЕНИ:
 * `possibly` (B1), `mad` (B1), `file` (B1), `further` наречием (B1), `shame`
 * (B2); все пять стоят в словнике A2 Key.
 *
 * СДВИГ ВРЕМЕНИ МОДУЛЬ НЕ ОБЪЯВЛЯЕТ ОШИБКОЙ, И ЭТО ПРАВКА ПО РАЗБОРУ. Первая
 * редакция ставила «She said that she had the file» неверным вариантом
 * задания — а это графа СЛЕДУЮЩЕЙ ступени, то есть разрешение, которого мы не
 * даём, а не запрет. Заменено настоящей ученической ошибкой. Там же нашлись
 * ещё два задания, объявлявших ошибкой безупречные строки: ошибкой они
 * становятся только при известных исходных словах, а условие их не называло.
 */
const module: Module = {
  slug: "on-skazal-chto",
  title: "Он сказал, что",

  outcomes: [
    "пересказывать чужие слова: He said that he is busy",
    "называть, кому сказали: She told me that the shop is closed",
    "переспрашивать: It's fantastic, isn't it?",
    "находить в письме, кто что сказал",
    "слышать в разговоре, чьи слова пересказывают",
    "проверять пересказ: назван говорящий, сдвинуто местоимение, время оставлено",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОК 1. REPORTED SPEECH, A2, «FORM: REPORTED STATEMENTS WITH 'SAY', " +
        "PRONOUN SHIFT» — «Can report statements using a reporting clause with " +
        "'say' + 'that-'clause, with a pronoun shift where relevant», примеры " +
        "«My mother said that she can take us there», «The teacher said that " +
        "we have to bring a notebook, a pencil and a rubber». " +
        "УРОК 2. REPORTED SPEECH, A2, «FORM: REPORTED STATEMENTS WITH 'TELL', " +
        "PRONOUN SHIFT» — «Can report statements using a reporting clause with " +
        "'tell' + direct object + 'that-'clause, with a pronoun shift where " +
        "relevant», пример «my father told me that he will call». " +
        "СДВИГ ВРЕМЕНИ — B1, И ЭТО ГЛАВНАЯ ГРАНИЦА МОДУЛЯ. Графа «FORM: " +
        "REPORTED STATEMENTS, PRONOUN AND TENSE SHIFT» стоит на B1. Примеры " +
        "обеих граф A2 время не сдвигают: «said that she CAN take us», «told " +
        "me that he WILL call». Поэтому модуль учит пересказывать, оставляя " +
        "время как было, и говорит об этом ученику прямо. " +
        "УРОК 3. QUESTIONS, tags, A2, «FORM: QUESTION TAGS», ЛЕКСИЧЕСКИЙ " +
        "ДИАПАЗОН 1 — «Can use a limited range of question tags», примеры «You " +
        "don't know where I live, do you?», «It's fantastic, isn't it?», «It " +
        "differs from the story which you told me, doesn't it?». " +
        "СЛОВА «A LIMITED RANGE» ЗДЕСЬ РАБОТАЮТ: расширенный набор лежит на " +
        "B1 тремя графами, и у всех трёх диапазон 2 — «FORM: AFFIRMATIVE MAIN " +
        "CLAUSES + NEGATIVE QUESTION TAGS», «FORM: NEGATIVE MAIN CLAUSES + " +
        "AFFIRMATIVE QUESTION TAGS», «FORM: AFFIRMATIVE MAIN CLAUSES + " +
        "AFFIRMATIVE QUESTION TAGS». " +
        "МОДУЛЬ БЕРЁТ ТРИ ХВОСТИКА, И ВСЕ ТРИ СТОЯТ ПРИМЕРАМИ САМОЙ ГРАФЫ A2: " +
        "`isn't it` («It's fantastic, isn't it?»), `don't you` (по образцу «You " +
        "don't know where I live, do you?») и `doesn't it` («It differs from " +
        "the story which you told me, doesn't it?»). " +
        "ПЕРВАЯ РЕДАКЦИЯ БРАЛА ТРЕТЬИМ `aren't you` — а он стоит примером " +
        "графы B1 «AFFIRMATIVE MAIN CLAUSES + NEGATIVE QUESTION TAGS» («And so " +
        "you're moving to a different area, aren't you?»), и среди примеров A2 " +
        "его нет. Заменён. Нашёл методист. " +
        "И ПРАВИЛА НА ВСЕ СЛУЧАИ МОДУЛЬ ИЗ НИХ НЕ СТРОИТ: первая редакция " +
        "писала «в хвостике отрицание» и «отвечают Yes, it is» — оба " +
        "утверждения ломает первый же пример графы, «You don't know where I " +
        "live, do you?». Строки привязаны к своим случаям. " +
        "ПОДДЕРЖКА ДЛЯ ПРИДАТОЧНОГО С `that`: VERBS, patterns_that clauses, " +
        "A2, «FORM: REPORTING VERBS + DIRECT OBJECT 'THAT'-CLAUSE» (пример «My " +
        "mother said that she can help us») и A2, «FORM: VERBS + INDIRECT " +
        "OBJECT CLAUSE» (пример «Nisha told me you had an accident last " +
        "week»). Последняя графа же разрешает и опускать `that`. " +
        "ЧЕГО НЕТ, И ВСЁ ЭТО B1: сдвиг времени; пересказ вопросов («FORM: " +
        "REPORTED 'YES-NO' QUESTIONS», «FORM: REPORTED 'WH-' QUESTIONS»); " +
        "пересказ просьб и приказов («FORM: REPORTED REQUESTS AND COMMANDS»); " +
        "прямая речь в кавычках («FORM: DIRECT SPEECH, REPORTING CLAUSE, END " +
        "POSITION» и «INITIAL POSITION»); `wonder` («FORM/USE: 'WONDER', " +
        "REPORTED THOUGHT»); сдвиг слов о времени («FORM/USE: TEMPORAL SHIFTS, " +
        "FUTURE»); тег `right?` («FORM/USE: 'RIGHT' AS AN INFORMAL TAG»)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень Clause types: «Subordinate " +
        "clause following say, tell: She says (that) she's his sister.» — оба " +
        "глагола модуля названы прямо, и придаточное с `that` тоже. " +
        "ВОПРОСА-ПЕРЕСПРОСА В РУКОВОДСТВЕ НЕ НАШЁЛ: искал по «question tag» и " +
        "«tag question» в разборе всего файла, совпадений ноль. Это «не " +
        "нашёл», а не «нет» — оборот держится на English Grammar Profile, где " +
        "у него графа A2. " +
        "УРОК 5, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем пересказ разговора». с. 55, шкала «Reading " +
        "correspondence», графа A2: «Can understand short, simple personal " +
        "letters». " +
        "УРОК ПИСЬМА «Пишем, что сказали другие». с. 83, шкала " +
        "«Correspondence», графа A2: «Can compose short, simple notes, " +
        "e-mails and text messages». " +
        "ПЕРВАЯ РЕДАКЦИЯ ЦИТИРОВАЛА СОСЕДНЮЮ СТРОКУ ТОЙ ЖЕ ГРАФЫ — «Can " +
        "exchange information … responding to questions from the other " +
        "person», — а задание урока ответом на чьи-то вопросы не является. " +
        "Нашёл методист. " +
        "ОПОРЫ ЧТЕНИЯ И ПИСЬМА РАЗВЕДЕНЫ НАРОЧНО — так подсказал методист при " +
        "разборе модуля 23",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Одиннадцать карточек модуля взяты из словника ступени, и все " +
        "одиннадцать новые для ступени: advert, wifi, possibly, file, anymore, " +
        "What a shame!, awesome, further, guest-house, hoodie, mad about. " +
        "ДВА ЗАГОЛОВКА — СВЯЗКИ, И ЭТО ПО РАЗБОРУ. Первая редакция давала " +
        "`shame` («досада») и `mad` («без ума от чего-то») — но оба слова " +
        "работают только в связке, а главного своего значения (стыд; " +
        "сумасшедший) карточки не давали. Ученик прочёл бы «Are you mad?» " +
        "наоборот. Заголовками стали `What a shame!` и `mad about` — курс так " +
        "уже умеет с `on the way` в модуле 21. Нашёл методист. " +
        "КАРТОЧКА `dot` СНЯТА: она держалась на строке, которая стояла в " +
        "примере только затем, чтобы куда-то её деть. " +
        "ЧЕТЫРЕ СЛОВА OXFORD СТАВИТ ВЫШЕ СТУПЕНИ, И ВСЕ ЧЕТЫРЕ ВЗЯТЫ ПО МЕРКЕ " +
        "СТУПЕНИ: `possibly adv. B1`, `mad adj. B1`, `file n. B1`, `shame n. " +
        "B2`; все четыре стоят в словнике A2 Key, то есть входят в требования " +
        "экзамена. " +
        "`further adj. A2, adv. B1` — модуль берёт наречие («It is further " +
        "from here»), то есть и оно выше ступени; слов выше ступени пять, а не " +
        "четыре. Первая редакция опоры писала `further adv., adj. A2` и " +
        "числила его нашей ступенью. Нашёл методист. " +
        "Остальные шесть не нашлись ни в `oxford-3000`, ни в " +
        "`oxford-5000` — это не значит, что их там нет: составные и дефисные " +
        "записи оба списка ведут иначе. Проверено по обоим спискам построчно. " +
        "ПОЧЕМУ ДВЕНАДЦАТЬ, А НЕ ТРИДЦАТЬ — разобрано в программе, под " +
        "таблицей четвёртой части: вопрос о словаре ступени открыт у владельца",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "on-skazal",
      title: "Он сказал: He said that he is busy",
      estimatedMinutes: 15,
      outcome: "пересказывать чужие слова: He said that he is busy",

      vozvrat: [{ iz: "kotoryy", zadanie: "z1-dopisat-who" }],

      blocks: [
        {
          id: "zachem-pereskazyvat",
          kind: "explain",
          text: [
            "Данияр звонил Алиму, и Айгуль спрашивает, что тот ответил.",
            "Слова Алима надо передать своими устами, а не повторить как есть.",
            "Строка распадается на две половины: ввод и пересказанные слова.",
          ],
        },
        {
          id: "slova-i-pereskaz",
          kind: "table",
          caption: "Слова и пересказ",
          zvuchat: [
            "I am busy.",
            "He said that he is busy.",
            "We have a new advert.",
            "They said that they have a new advert.",
            "I possibly know the answer.",
            "She said that she possibly knows the answer.",
          ],
          head: ["Что человек сказал", "Как это пересказывают"],
          rows: [
            ["I am busy.", "He said that he is busy."],
            ["We have a new advert.", "They said that they have a new advert."],
            ["I possibly know the answer.", "She said that she possibly knows the answer."],
          ],
        },
        {
          id: "kak-ustroen-pereskaz",
          kind: "explain",
          text: [
            "Ввод — это he said, и после него ставят that.",
            "Меняется тот, о ком речь: I становится he, we становится they.",
            "Вместе с ним меняется и окончание глагола: I know, но she knows.",
            "ВРЕМЯ ОСТАЁТСЯ ТЕМ ЖЕ: было is — останется is.",
            "Слово that можно и опустить: He said he is busy.",
          ],
        },
        {
          id: "vremya-ostayotsya",
          kind: "note",
          tone: "info",
          text:
            "Время в пересказанных словах оставляют тем же, каким его " +
            "сказали.\n\nБыло «I am busy» — останется is: He said that he is " +
            "busy.",
        },
        {
          id: "razgovor-o-zvonke",
          kind: "example",
          caption: "Разговор о звонке",
          razgovor: true,
          zvuchat: [
            "What did Alim say?",
            "He said that he is busy and will possibly come on Sunday.",
            "And the advert? He said that they have a new one on the wifi page.",
          ],
          text:
            "What did Alim say?\nHe said that he is busy and will possibly come on Sunday.\nAnd the advert? He said that they have a new one on the wifi page.",
          explain:
            "В первом пересказе Алим говорил о себе словом I, а Данияр " +
            "пересказывает словом he. Во втором Алим говорил we, и Данияр " +
            "пересказывает they. Время не сдвинуто нигде: is остаётся is, have " +
            "остаётся have.",
        },
        {
          id: "slovar-pereskaza",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "advert", translation: "объявление, реклама", example: "They said that they have a new advert.", hint: "/ˈædvɜːt/" },
            { term: "wifi", translation: "вайфай, беспроводная сеть", example: "They have a new one on the wifi page.", hint: "/ˈwaɪfaɪ/" },
            { term: "possibly", translation: "возможно, может быть", example: "He said that he will possibly come on Sunday.", hint: "/ˈpɒsəbli/" },
            { term: "file", translation: "файл; папка", example: "She said that the file is on the table.", hint: "/faɪl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-mestoimenie",
          kind: "gap",
          prompt:
            "Алим сказал: I am busy. Пересказывая, слово I меняют. Допиши то, что встанет на его место.",
          before: "He said that ",
          after: " is busy.",
          answer: "he",
          hint: "Алим говорил о себе, а ты говоришь о нём.",
          why:
            "He said that he is busy. Слово I осталось бы словами самого " +
            "Алима, а не пересказом.",
        },
        {
          id: "z2-vybrat-vernyy-pereskaz",
          kind: "choice",
          prompt: "Дана сказала: I have the file. В какой записи пересказ верен?",
          options: [
            { text: "She said that I have the file." },
            { text: "She said that she have the file." },
            { text: "She said that she has the file.", correct: true },
          ],
          hint: "Меняется тот, о ком речь, а вместе с ним и окончание глагола.",
          why:
            "She said that she has the file. В первой записи не сдвинуто " +
            "местоимение, а во второй у глагола пропало окончание.",
        },
        {
          id: "z3-otmetit-pereskazy",
          kind: "hottext",
          prompt:
            "Айгуль сказала: I know the answer. Отметь строки, где ЕЁ слова пересказаны верно.",
          parts: [
            { text: "She said that I know the answer.", selectable: true },
            { text: " · " },
            { text: "She said that she knows the answer.", selectable: true, correct: true },
            { text: " · " },
            { text: "She said that she know the answer.", selectable: true },
            { text: " · " },
            { text: "She said she knows the answer.", selectable: true, correct: true },
          ],
          hint: "Смотри два места: местоимение и окончание глагола.",
          why:
            "Вторая и четвёртая. В первой местоимение осталось от слов самой " +
            "Айгуль, в третьей у глагола пропало окончание. Слово that можно и " +
            "опустить.",
        },
        {
          id: "z4-sobrat-pereskaz",
          kind: "order",
          prompt: "Собери пересказ: она сказала, что файл на столе.",
          items: ["the file is on the table.", "She said", "that"],
          answer: [1, 2, 0],
          hint: "Сначала ввод, потом слово that, потом сами слова.",
          why:
            "She said that the file is on the table. Время в пересказанных " +
            "словах остаётся тем же.",
        },
        {
          id: "z5-pereskazat-slova",
          kind: "short",
          prompt:
            "Айгуль сказала: I possibly know the answer. Перескажи её слова. Начни с She said.",
          answer: "She said that she possibly knows the answer.",
          accept: [
            "She said that she possibly knows the answer",
            "She said she possibly knows the answer.",
            "She said she possibly knows the answer",
          ],
          hint: "Вместе с местоимением меняется и окончание глагола.",
          why:
            "She said that she possibly knows the answer. Слово that можно и " +
            "опустить.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-skazal-mne",
      title: "Он сказал мне: She told me that the shop is closed",
      estimatedMinutes: 15,
      outcome: "называть, кому сказали: She told me that the shop is closed",

      blocks: [
        {
          id: "komu-skazali",
          kind: "explain",
          text: [
            "Данияр пересказывает не просто чужие слова, а сказанные ему.",
            "Тогда в вводе нужен другой глагол, и после него стоит тот, кому сказали.",
            "Остальное устроено так же: местоимение меняется, время остаётся.",
          ],
        },
        {
          id: "said-i-told",
          kind: "table",
          caption: "Два ввода",
          zvuchat: [
            "He said that the shop is closed.",
            "He told me that the shop is closed.",
            "She said that she is mad about football.",
            "She told us that she is mad about football.",
          ],
          head: ["Просто пересказ", "Пересказ с тем, кому сказали"],
          rows: [
            ["He said that the shop is closed.", "He told me that the shop is closed."],
            ["She said that she is mad about football.", "She told us that she is mad about football."],
          ],
        },
        {
          id: "chem-otlichayutsya-vvody",
          kind: "explain",
          text: [
            "Глагол said стоит один: после него сразу идёт that.",
            "Глагол told требует, чтобы за ним стоял тот, кому сказали: told me, told us.",
            "В таком пересказе одного told мало: без него строка не собирается.",
            "А said этого слова прямо за собой не берёт: не «said me».",
            "Дальше обе половины устроены одинаково.",
          ],
        },
        {
          id: "ne-said-me",
          kind: "note",
          tone: "mistake",
          text:
            "«He said me that the shop is closed» — так не пересказывают." +
            "\n\nЕсли назван тот, кому сказали, берут told: He told me that the " +
            "shop is closed.",
        },
        {
          id: "razgovor-o-magazine",
          kind: "example",
          caption: "Разговор о магазине",
          razgovor: true,
          zvuchat: [
            "The shop is closed. The guest-house told me that they have no bread anymore.",
            "What a shame! And the market?",
            "Aigul told us that the market is awesome, but it is further from here.",
            "And Dana told me that my hoodie is in her car.",
          ],
          text:
            "The shop is closed. The guest-house told me that they have no bread anymore.\nWhat a shame! And the market?\nAigul told us that the market is awesome, but it is further from here.\nAnd Dana told me that my hoodie is in her car.",
          explain:
            "Во всех трёх вводах с told сразу за глаголом стоит тот, кому " +
            "сказали: me, us и снова me. Время в пересказанных словах то же, " +
            "что было сказано.",
        },
        {
          id: "slovar-novostey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "anymore", translation: "больше не", example: "They have no bread anymore.", hint: "/ˌeniˈmɔː/" },
            { term: "What a shame!", translation: "Какая досада!", example: "What a shame! And the market?", hint: "/wɒt ə ˈʃeɪm/" },
            { term: "awesome", translation: "потрясающий", example: "The market is awesome.", hint: "/ˈɔːsəm/" },
            { term: "further", translation: "дальше", example: "It is further from here.", hint: "/ˈfɜːðə/" },
            { term: "guest-house", translation: "гостевой дом, маленькая гостиница", example: "The guest-house told me that they have no bread anymore.", hint: "/ˈgesthaʊs/" },
            { term: "hoodie", translation: "толстовка с капюшоном", example: "Dana told me that my hoodie is in her car.", hint: "/ˈhʊdi/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-told",
          kind: "gap",
          prompt: "Дальше назван тот, кому сказали. Допиши глагол ввода.",
          before: "He ",
          after: " me that the shop is closed.",
          answer: "told",
          hint: "Глагол said этого слова за собой не берёт.",
          why:
            "He told me that the shop is closed. Запись said me не годится " +
            "вовсе.",
        },
        {
          id: "z2-otlichit-said-ot-told",
          kind: "choice",
          prompt:
            "Кому именно сказали, в записи не названо. Какая запись верна?",
          options: [
            { text: "She told that the market is awesome." },
            { text: "She said that the market is awesome.", correct: true },
            { text: "She said us that the market is awesome." },
          ],
          hint: "Один глагол требует того, кому сказали, а другой обходится без него.",
          why:
            "She said that the market is awesome. Глаголу told нужен тот, кому " +
            "сказали, а said его за собой не берёт.",
        },
        {
          id: "z3-otmetit-vvody-s-told",
          kind: "hottext",
          prompt: "Отметь строки, где назван тот, кому сказали.",
          parts: [
            { text: "She said that the file is on the table.", selectable: true },
            { text: " · " },
            { text: "He told me that the shop is closed.", selectable: true, correct: true },
            { text: " · " },
            { text: "They said that they have a new advert.", selectable: true },
            { text: " · " },
            { text: "Aigul told us that the market is further.", selectable: true, correct: true },
          ],
          hint: "Ищи слово сразу после глагола ввода.",
          why:
            "Вторая и четвёртая: там стоят me и us. В первой и третьей после " +
            "ввода сразу идёт that.",
        },
        {
          id: "z4-sobrat-pereskaz-s-told",
          kind: "order",
          prompt: "Собери пересказ: Айгуль сказала нам, что рынок потрясающий.",
          items: ["that the market is awesome.", "Aigul told", "us"],
          answer: [1, 2, 0],
          hint: "Тот, кому сказали, стоит сразу за глаголом ввода.",
          why:
            "Aigul told us that the market is awesome. Между told и that " +
            "обязательно стоит тот, кому сказали.",
        },
        {
          id: "z5-pereskazat-s-told",
          kind: "short",
          prompt:
            "Гостевой дом сказал тебе: We have no bread anymore. Перескажи это. Начни с The guest-house told me.",
          answer: "The guest-house told me that they have no bread anymore.",
          accept: [
            "The guest-house told me that they have no bread anymore",
            "The guest-house told me they have no bread anymore.",
            "The guest-house told me they have no bread anymore",
          ],
          hint: "Слово we в пересказе меняется, а время остаётся.",
          why:
            "The guest-house told me that they have no bread anymore. Слово " +
            "that можно и опустить.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pereprosit",
      title: "Переспросить: It's fantastic, isn't it?",
      estimatedMinutes: 14,
      outcome: "переспрашивать: It's fantastic, isn't it?",

      blocks: [
        {
          id: "zachem-peresprashivat",
          kind: "explain",
          text: [
            "Данияр не уверен, что расслышал Айгуль, и хочет проверить.",
            "Целый вопрос ради этого не задают: к своей же строке добавляют хвостик.",
            "Хвостик короткий и стоит после запятой.",
          ],
        },
        {
          id: "tri-hvostika",
          kind: "table",
          caption: "Три переспроса",
          head: ["Строка", "Хвостик"],
          rows: [
            ["It's fantastic,", "isn't it?"],
            ["You know the answer,", "don't you?"],
            ["The market opens at eight,", "doesn't it?"],
          ],
        },
        {
          id: "kak-ustroen-hvostik",
          kind: "explain",
          text: [
            "В хвостике два слова, и второе называет то, о чём строка.",
            "После it's берут isn't it: It's fantastic, isn't it?",
            "Если в строке you и обычный глагол — don't you: You know the answer, don't you?",
            "Если в строке одна вещь и обычный глагол — doesn't it: The market opens at eight, doesn't it?",
            "Хвостик не спрашивает по-настоящему: он ждёт согласия, и отвечают тем же словом: Yes, it is или Yes, I do.",
          ],
        },
        {
          id: "hvostik-s-otricaniem",
          kind: "note",
          tone: "info",
          text:
            "Когда ждут согласия, к утвердительной строке берут хвостик с " +
            "отрицанием.\n\nIt's fantastic — и хвостик isn't it?",
        },
        {
          id: "razgovor-s-peresprosom",
          kind: "example",
          caption: "Разговор с переспросом",
          razgovor: true,
          zvuchat: [
            "The market is awesome, isn't it?",
            "Yes, it is. But it is further from here.",
            "You know the way, don't you?",
            "Yes, I do. The bus stops at the market, doesn't it?",
          ],
          text:
            "The market is awesome, isn't it?\nYes, it is. But it is further from here.\nYou know the way, don't you?\nYes, I do. The bus stops at the market, doesn't it?",
          explain:
            "В первом переспросе строка держится на is, и хвостик берёт isn't " +
            "it. Во втором стоят you и обычный глагол know — хвостик don't " +
            "you. В третьем речь об автобусе, и хвостик doesn't it. Ответы " +
            "повторяют то же слово: Yes, it is и Yes, I do.",
        },
        {
          id: "slovar-peresprosa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "mad about", translation: "без ума от чего-то", example: "Dana is mad about football.", hint: "/ˈmæd əbaʊt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-hvostik",
          kind: "gap",
          prompt:
            "Строка держится на слове is, и хвостик берут ему под стать. Допиши два слова.",
          before: "It's fantastic, ",
          after: "?",
          answer: "isn't it",
          hint: "В хвостике отрицание и то слово, о котором речь.",
          why:
            "It's fantastic, isn't it? Хвостик don't you годится там, где в " +
            "строке обычный глагол.",
        },
        {
          id: "z2-vybrat-hvostik",
          kind: "choice",
          prompt: "Строка: You know the answer. Какой хвостик к ней подходит?",
          options: [
            { text: "isn't it?" },
            { text: "don't you?", correct: true },
            { text: "doesn't it?" },
          ],
          hint: "Смотри, о ком строка: об it или о you.",
          why:
            "don't you? Строка о тебе, а isn't it и doesn't it берут к строке " +
            "про вещь.",
        },
        {
          id: "z3-otmetit-vernye-hvostiki",
          kind: "hottext",
          prompt: "Отметь строки, где хвостик подобран верно.",
          parts: [
            { text: "It's fantastic, don't you?", selectable: true },
            { text: " · " },
            { text: "The market opens at eight, doesn't it?", selectable: true, correct: true },
            { text: " · " },
            { text: "You know the way, isn't it?", selectable: true },
            { text: " · " },
            { text: "It's awesome, isn't it?", selectable: true, correct: true },
          ],
          hint: "Хвостик берут по тому, о ком или о чём строка.",
          why:
            "Вторая и четвёртая. В первой к it's взят хвостик для строки о " +
            "тебе, в третьей наоборот.",
        },
        {
          id: "z4-otvetit-na-perespros",
          kind: "short",
          prompt:
            "Тебя переспросили: It's awesome, isn't it? Согласись коротко.",
          answer: "Yes, it is.",
          accept: ["Yes, it is", "Yes it is."],
          hint: "В коротком ответе повторяют то слово, на котором держится строка.",
          why:
            "Yes, it is. Слово awesome в таком ответе не звучит.",
        },
        {
          id: "z5-peresprosit",
          kind: "short",
          prompt:
            "Скажи, что рынок потрясающий, и переспроси. Начни с The market.",
          answer: "The market is awesome, isn't it?",
          accept: [
            "The market is awesome, isn't it",
            "The market is awesome isn't it?",
          ],
          hint: "Хвостик стоит после запятой.",
          why:
            "The market is awesome, isn't it? Строка держится на is, и хвостик " +
            "берут ему под стать.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pereskaz-razgovora",
      title: "Читаем пересказ разговора",
      estimatedMinutes: 13,
      outcome: "находить в письме, кто что сказал",

      blocks: [
        {
          id: "zachem-chitat-pereskaz",
          kind: "explain",
          text: [
            "Айгуль не была на встрече и попросила Данияра написать, что там говорили.",
            "В таком письме ищут одно: кто что сказал.",
            "Ниже письмо, и вопросы будут о нём.",
          ],
        },
        {
          id: "pismo-s-pereskazom",
          kind: "text",
          title: "What they said at the meeting",
          genre: "message",
          body: [
            "Hi! I was at the meeting yesterday.",
            "Alim said that he is busy in May and will possibly come in June.",
            "The guest-house told us that they have no rooms anymore.",
            "Dana said that the new advert is awesome, but the file is too big for the wifi.",
            "Everybody said that the market is further from the station than we thought.",
          ],
          glossary: [
            { term: "at the meeting", translation: "на встрече" },
            { term: "too big", translation: "слишком большой" },
            { term: "than we thought", translation: "чем мы думали" },
          ],
        },
        {
          id: "kak-iskat-kto-chto-skazal",
          kind: "note",
          tone: "info",
          text:
            "Ввод начинается словом said или told, и говорящий стоит перед " +
            "ним.\n\nПосле told сразу идёт тот, кому сказали.",
        },

        // ---- задания ----
        {
          id: "z1-kogda-priedet-alim",
          about: "pismo-s-pereskazom",
          kind: "short",
          prompt: "В каком месяце Алим, возможно, приедет? Ответь одним словом по-английски.",
          answer: "June",
          accept: ["june"],
          hint: "Про Алима сказано во второй строке.",
          why: "Alim said that he is busy in May and will possibly come in June.",
        },
        {
          id: "z2-kto-skazal-o-komnatah",
          about: "pismo-s-pereskazom",
          kind: "choice",
          prompt: "Кто сказал, что комнат больше нет?",
          options: [
            { text: "Алим." },
            { text: "Гостевой дом.", correct: true },
            { text: "Дана." },
          ],
          hint: "Говорящий стоит перед вводом.",
          why:
            "Гостевой дом: The guest-house told us that they have no rooms " +
            "anymore.",
        },
        {
          id: "z3-chto-ne-tak-s-faylom",
          about: "pismo-s-pereskazom",
          kind: "choice",
          prompt: "Что не так с файлом?",
          options: [
            { text: "Он слишком большой для сети.", correct: true },
            { text: "Его потеряли." },
            { text: "Он открывается только на встрече." },
          ],
          hint: "Про файл сказано в четвёртой строке, после запятой.",
          why:
            "Он слишком большой: the file is too big for the wifi.",
        },
        {
          id: "z4-skolko-strok-s-told",
          about: "pismo-s-pereskazom",
          kind: "short",
          prompt:
            "Сколько человек в письме пересказано через told? Ответь числом.",
          answer: "1",
          accept: ["one", "One", "один"],
          hint: "Глагол told стоит не в каждой строке.",
          why:
            "Один: The guest-house told us. У остальных стоит said.",
        },
        {
          id: "z5-otmetit-verno-o-pisme",
          about: "pismo-s-pereskazom",
          kind: "hottext",
          prompt: "Отметь то, что верно по письму.",
          parts: [
            { text: "Алим занят в мае", selectable: true, correct: true },
            { text: " · " },
            { text: "рынок дальше от вокзала, чем думали", selectable: true, correct: true },
            { text: " · " },
            { text: "новое объявление никому не понравилось", selectable: true },
            { text: " · " },
            { text: "комнаты в гостевом доме ещё есть", selectable: true },
          ],
          hint: "Про объявление сказано в четвёртой строке, про комнаты — в третьей.",
          why:
            "Верно первое и второе. Объявление назвали потрясающим, а комнат " +
            "больше нет.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chuzhie-slova",
      title: "Слушаем чужие слова",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, чьи слова пересказывают",

      blocks: [
        {
          id: "zachem-slushat-chuzhie-slova",
          kind: "explain",
          text: [
            "Данияр пересказывает Айгуль то, что услышал в гостевом доме.",
            "Слушать надо, кто это сказал и что именно.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-pereskaza",
          kind: "audio",
          caption: "Разговор о встрече",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Dana told me that the advert is ready. — And the file? — She said " +
            "that the file is too big. It's a shame, isn't it?",
        },
        {
          id: "chto-slushat-v-pereskaze",
          kind: "note",
          tone: "info",
          text:
            "Говорящий стоит перед вводом, а после told — тот, кому " +
            "сказали.\n\nХвостик в конце — это переспрос, а не новый вопрос.",
        },

        // ---- задания ----
        {
          id: "z1-kto-skazal-ob-obyavlenii",
          about: "zapis-pereskaza",
          kind: "short",
          prompt: "Послушай. Кто сказал про объявление? Ответь одним словом по-английски.",
          answer: "Dana",
          accept: ["dana"],
          hint: "Говорящий назван в самом начале записи.",
          why: "Dana told me that the advert is ready.",
        },
        {
          id: "z2-chto-s-faylom",
          about: "zapis-pereskaza",
          kind: "choice",
          prompt: "Послушай. Что не так с файлом?",
          options: [
            { text: "Он не готов." },
            { text: "Он слишком большой.", correct: true },
            { text: "Его не нашли." },
          ],
          hint: "Про файл сказано в самой последней реплике.",
          why: "She said that the file is too big.",
        },
        {
          id: "z3-komu-skazala-dana",
          about: "zapis-pereskaza",
          kind: "short",
          prompt: "Послушай. Кому сказала Дана? Ответь одним словом по-английски.",
          answer: "me",
          accept: ["Me"],
          hint: "После told сразу идёт тот, кому сказали.",
          why: "Dana told me that the advert is ready.",
        },
        {
          id: "z4-chto-znachit-hvostik",
          about: "zapis-pereskaza",
          kind: "choice",
          prompt:
            "В конце звучит It's a shame, isn't it? Что делает говорящий?",
          options: [
            { text: "Спрашивает, что случилось." },
            { text: "Ждёт согласия.", correct: true },
            { text: "Пересказывает чужие слова." },
          ],
          hint: "Хвостик после запятой настоящего вопроса не задаёт.",
          why:
            "Ждёт согласия. Переспрос и нужен затем, чтобы собеседник " +
            "подтвердил.",
        },
        {
          id: "z5-otmetit-uslyshannoe-v-pereskaze",
          about: "zapis-pereskaza",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "объявление готово", selectable: true, correct: true },
            { text: " · " },
            { text: "файл слишком большой", selectable: true, correct: true },
            { text: " · " },
            { text: "файл уже отправили", selectable: true },
            { text: " · " },
            { text: "Дана сказала это всем", selectable: true },
          ],
          hint: "Про то, кому сказала Дана, слышно в первой реплике.",
          why:
            "Прозвучали первое и второе. Файл не отправляли, а сказала Дана " +
            "одному человеку: told me.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-chto-skazali",
      title: "Пишем, что сказали другие",
      estimatedMinutes: 15,
      outcome:
        "проверять пересказ: назван говорящий, сдвинуто местоимение, время оставлено",

      blocks: [
        {
          id: "zachem-proveryat-pereskaz",
          kind: "explain",
          text: [
            "Ученик написал другу: «They said something about the advert.»",
            "Друг не знает ни кто сказал, ни что именно.",
            "Проверить свой пересказ можно по трём вещам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-pereskaze",
          kind: "table",
          caption: "Что проверить в пересказе",
          zvuchat: [
            "Alim said that he is busy.",
            "Dana told me that the file is too big.",
            "She said that she will possibly come in June.",
          ],
          head: ["Что проверить", "Пример строки"],
          rows: [
            ["назван говорящий", "Alim said that he is busy."],
            ["после told стоит тот, кому сказали", "Dana told me that the file is too big."],
            ["местоимение сдвинуто, а время оставлено", "She said that she will possibly come in June."],
          ],
        },
        {
          id: "chem-derzhitsya-pereskaz",
          kind: "explain",
          text: [
            "Первое: без имени говорящего пересказ ничего не стоит.",
            "Второе: глагол told требует того, кому сказали, а said его не берёт.",
            "Третье: человек говорил о себе словом I, а ты говоришь о нём словом he или she.",
            "И время при этом остаётся тем же, каким было сказано.",
            "Слово that можно опустить, но остальное — нет.",
          ],
        },
        {
          id: "obrazec-pereskaza",
          kind: "example",
          caption: "Письмо Данияра",
          zvuchat: [
            "Hi! Three people called me today.",
            "My brother told me that he has my hoodie.",
            "Dana said that she is mad about the new film.",
            "The shop told us that the wifi is free for shoppers.",
          ],
          text:
            "Hi! Three people called me today.\nMy brother told me that he has my hoodie.\nDana said that she is mad about the new film.\nThe shop told us that the wifi is free for shoppers.",
          explain:
            "В каждой строке пересказа назван говорящий. После told стоит тот, " +
            "кому сказали, а после said сразу идёт that. Время нигде не " +
            "сдвинуто. Первая строка говорит, зачем письмо, и пересказом не " +
            "является.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-pereskazu",
          kind: "choice",
          prompt:
            "Пересказ целиком: They said something about the advert. Чего в нём не хватает?",
          options: [
            { text: "Даты встречи." },
            { text: "Самих слов: что именно сказали.", correct: true },
            { text: "Подписи." },
          ],
          hint: "Спроси: что друг узнал про объявление?",
          why:
            "Самих слов. Оборот said something не передаёт ничего, кроме того, " +
            "что разговор был.",
        },
        {
          id: "z2-dopisat-vvod-bez-adresata",
          kind: "gap",
          prompt:
            "Кому сказала Дана, ты не знаешь. Допиши глагол ввода.",
          before: "Dana ",
          after: " that she is mad about the new film.",
          answer: "said",
          hint: "Второй глагол ввода без того, кому сказали, не работает.",
          why:
            "Dana said that she is mad about the new film. Запись told that " +
            "не собирается: между told и that нужен тот, кому сказали.",
        },
        {
          id: "z3-otmetit-vernye-pereskazy",
          kind: "hottext",
          prompt: "Отметь строки, где пересказ сделан верно.",
          parts: [
            { text: "Dana said me that the advert is ready.", selectable: true },
            { text: " · " },
            { text: "Dana told me that the advert is ready.", selectable: true, correct: true },
            { text: " · " },
            { text: "Alim said that I am busy.", selectable: true },
            { text: " · " },
            { text: "Alim said that he is busy.", selectable: true, correct: true },
          ],
          hint: "Проверь два места: глагол ввода и местоимение.",
          why:
            "Вторая и четвёртая. В первой said взял того, кому сказали, а в " +
            "третьей местоимение осталось от слов самого Алима.",
        },
        {
          id: "z4-perepisat-said-v-told",
          kind: "short",
          prompt:
            "Строку Dana said that she has my hoodie перепиши так, чтобы стало видно: сказала она это тебе.",
          answer: "Dana told me that she has my hoodie.",
          accept: [
            "Dana told me that she has my hoodie",
            "Dana told me she has my hoodie.",
          ],
          hint: "Меняется глагол ввода, и за ним встаёт новое слово.",
          why:
            "Dana told me that she has my hoodie. Слово said того, кому " +
            "сказали, за собой не берёт.",
        },
        {
          id: "z5-napisat-pereskaz",
          kind: "essay",
          prompt:
            "Напиши другу, что сказали трое. Начни строкой о том, зачем письмо. Дальше три пересказа: в одном возьми said, в другом told с тем, кому сказали, и везде сдвинь местоимение.",
          minWords: 18,
          sample:
            "Hi! Three people called me today.\nMy brother told me that he has my hoodie.\nDana said that she is mad about the new film.\nThe shop told us that the wifi is free for shoppers.",
          checklist: [
            "сказано, зачем письмо",
            "в каждой строке пересказа назван говорящий",
            "есть строка с said и строка с told",
            "после told стоит тот, кому сказали",
          ],
          hint:
            "Бери обороты, которые знаешь: … said that …, … told me that …",
          why:
            "Пересказ работает, когда друг знает и кто сказал, и что именно.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, подобрать хвостик по строке.

      // ---- итог 1 ----
      {
        id: "q-pereskazat-bez-sdviga-vremeni",
        kind: "short",
        outcome: "пересказывать чужие слова: He said that he is busy",
        prompt:
          "Дана сказала: I am mad about football. Перескажи её слова, оставив время тем же. Начни с Dana said.",
        answer: "Dana said that she is mad about football.",
        accept: [
          "Dana said that she is mad about football",
          "Dana said she is mad about football.",
        ],
        hint: "Дана говорила о себе, а ты говоришь о ней.",
        why:
          "Dana said that she is mad about football. Дана сказала «I am mad», " +
          "и время остаётся тем же.",
      },
      {
        id: "q-nazvat-oshibku-v-mestoimenii",
        kind: "choice",
        outcome: "пересказывать чужие слова: He said that he is busy",
        prompt:
          "Алим сказал: I am busy. Запись He said that I am busy неверна. Отчего?",
        options: [
          { text: "Слово I осталось от слов самого Алима.", correct: true },
          { text: "После said не ставят that." },
          { text: "Глагол am надо поставить в прошедшее время." },
        ],
        hint: "Спроси: о ком говорит вторая половина строки?",
        why:
          "Слово I осталось от слов Алима. В пересказе о нём говорят словом " +
          "he.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-said-me",
        kind: "short",
        outcome: "называть, кому сказали: She told me that the shop is closed",
        prompt:
          "Ученик написал: Dana said me that the advert is ready. Запиши строку без ошибки.",
        answer: "Dana told me that the advert is ready.",
        accept: [
          "Dana told me that the advert is ready",
          "Dana told me the advert is ready.",
        ],
        hint: "Тот, кому сказали, требует другого глагола ввода.",
        why:
          "Dana told me that the advert is ready. Глагол said этого слова за " +
          "собой не берёт.",
      },
      {
        id: "q-vybrat-vvod-bez-adresata",
        kind: "choice",
        outcome: "называть, кому сказали: She told me that the shop is closed",
        prompt:
          "Кому сказали, ты не знаешь. Какая запись верна?",
        options: [
          { text: "Alim told that he is busy." },
          { text: "Alim told to me that he is busy." },
          { text: "Alim said that he is busy.", correct: true },
        ],
        hint: "Один глагол обходится без того, кому сказали, а другой нет.",
        why:
          "Alim said that he is busy. Глаголу told нужен тот, кому сказали, и " +
          "стоит он без предлога.",
      },

      // ---- итог 3 ----
      {
        id: "q-podobrat-hvostik",
        kind: "short",
        outcome: "переспрашивать: It's fantastic, isn't it?",
        prompt:
          "К строке The market opens at eight допиши хвостик-переспрос. Ответь двумя словами по-английски.",
        answer: "doesn't it",
        accept: ["Doesn't it", "doesn't it?"],
        hint: "Строка о рынке, и глагол в ней обычный.",
        why:
          "doesn't it? Хвостик don't you взяли бы к строке о тебе, а isn't it " +
          "— к строке со словом is.",
      },
      {
        id: "q-ispravit-hvostik",
        kind: "short",
        outcome: "переспрашивать: It's fantastic, isn't it?",
        prompt:
          "Ученик написал: You know the way, isn't it? Запиши хвостик без ошибки. Ответь двумя словами по-английски.",
        answer: "don't you",
        accept: ["Don't you", "don't you?"],
        hint: "Строка держится на обычном глаголе, а не на is.",
        why:
          "don't you? Хвостик isn't it берут к строке со словом is.",
      },

      // ---- итог 4 ----
      {
        id: "q-kto-skazal-v-pisme",
        kind: "choice",
        outcome: "находить в письме, кто что сказал",
        prompt:
          "В письме строка: The guest-house told us that they have no rooms anymore. Кто это сказал?",
        options: [
          { text: "Гостевой дом.", correct: true },
          { text: "Мы." },
          { text: "В строке это не названо." },
        ],
        hint: "Говорящий стоит перед вводом, а не после него.",
        why:
          "Гостевой дом. Слово us стоит после told — это тот, кому сказали.",
      },
      {
        id: "q-najti-adresata",
        kind: "short",
        outcome: "находить в письме, кто что сказал",
        prompt:
          "В письме строка: Alim told me that he is busy. Кому сказал Алим? Ответь одним словом по-английски.",
        answer: "me",
        accept: ["Me"],
        hint: "Это слово стоит сразу за глаголом ввода.",
        why: "Alim told me that he is busy.",
      },

      // ---- итог 5 ----
      {
        id: "q-uslyshat-govoryashchego",
        kind: "short",
        outcome: "слышать в разговоре, чьи слова пересказывают",
        zvuk: "Aigul told me that the market is further from the station.",
        prompt: "Послушай. Кто это сказал? Ответь одним словом по-английски.",
        answer: "Aigul",
        accept: ["aigul"],
        hint: "Имя звучит раньше глагола ввода.",
        why: "Aigul told me that the market is further from the station.",
      },
      {
        id: "q-uslyshat-chto-skazali",
        kind: "choice",
        outcome: "слышать в разговоре, чьи слова пересказывают",
        zvuk: "Alim said that the guest-house has no rooms anymore.",
        prompt: "Послушай. Что сказал Алим?",
        options: [
          { text: "Что комнат больше нет.", correct: true },
          { text: "Что гостевой дом закрылся." },
          { text: "Что комнаты подорожали." },
        ],
        hint: "Слушай, что идёт после слова that.",
        why: "Alim said that the guest-house has no rooms anymore.",
      },

      // ---- итог 6 ----
      {
        id: "q-chto-proverit-v-pereskaze",
        kind: "choice",
        outcome:
          "проверять пересказ: назван говорящий, сдвинуто местоимение, время оставлено",
        prompt:
          "Пересказ: Said that he is busy. Какой из трёх нужных вещей здесь нет?",
        options: [
          { text: "Сдвинутого местоимения." },
          { text: "Названного говорящего.", correct: true },
          { text: "Оставленного времени." },
        ],
        hint: "Пройди по трём нужным вещам и вычёркивай найденное.",
        why:
          "Названного говорящего. Местоимение сдвинуто, время оставлено — а " +
          "кто сказал, неизвестно.",
      },
      {
        id: "q-perepisat-slova-v-pereskaz",
        kind: "short",
        outcome:
          "проверять пересказ: назван говорящий, сдвинуто местоимение, время оставлено",
        prompt:
          "Дана сказала тебе: I have the file. Перескажи это одной строкой. Начни с Dana.",
        answer: "Dana told me that she has the file.",
        accept: [
          "Dana told me that she has the file",
          "Dana told me she has the file.",
          "Dana said that she has the file.",
          "Dana said she has the file.",
        ],
        hint: "Проверь два места: глагол ввода и слово, которым Дана звала себя.",
        why:
          "Dana told me that she has the file. Годится и said, если не " +
          "называть того, кому сказали.",
      },
      {
        id: "q-zachem-nazyvat-govoryashchego",
        kind: "choice",
        outcome:
          "проверять пересказ: назван говорящий, сдвинуто местоимение, время оставлено",
        prompt: "Отчего в пересказе обязательно называть говорящего?",
        options: [
          { text: "Так строка выходит длиннее." },
          { text: "Так принято начинать письмо." },
          { text: "Иначе читатель не знает, чьим словам верить.", correct: true },
        ],
        hint: "Представь письмо, где три строки начинаются словом said.",
        why:
          "Иначе непонятно, чьи это слова. Пересказ и нужен затем, чтобы " +
          "передать чужие слова вместе с их хозяином.",
      },
    ],
  },
};

export default module;
