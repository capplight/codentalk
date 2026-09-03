import type { Module } from "@/lib/content/types";

/**
 * Модуль 24 курса «Английский · Elementary»: как долго.
 *
 * Программа: docs/programma-english-elementary.md, модуль 24 — «называть
 * длительность»; грамматика: Present Perfect с `for`, `How long…?`. Строка
 * проверена 25 августа 2026, до написания; разбор с цитатами — там же.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «PRESENT PERFECT», И ЗДЕСЬ ОНО НЕ НАЗЫВАЕТСЯ. Первая
 * встреча была в модуле 22, там имя и стоит. Правило курса: время называют один
 * раз, при первой встрече внутри ступени.
 *
 * ЧЕМ ЭТОТ МОДУЛЬ ОТЛИЧАЕТСЯ ОТ ДВУХ ПРЕДЫДУЩИХ. Модуль 22 говорил об опыте за
 * всю жизнь, модуль 23 — о делах к сроку, а этот о том, СКОЛЬКО ВРЕМЕНИ дело
 * длится и всё ещё длится: «я живу здесь два года и живу сейчас».
 *
 * СЕРДЦЕВИНА МОДУЛЯ — УРОК 1 — ДЕРЖИТСЯ НА ОДНОМ ИСТОЧНИКЕ ИЗ ДВУХ, И ЭТО
 * НАДО ЗНАТЬ. У урока 2 подпорок две, см. ниже.
 *
 * - **`How long` даёт руководство прямо.** A2 Key, с. 52, перечень
 *   вопросительных слов: «Who; Whose; Which How; How much; How many; How often;
 *   **How long**; etc.» У English Grammar Profile отдельной графы про `How
 *   long` нет вовсе — искал по графам, дескрипторам и примерам всех уровней до
 *   B1 включительно. НО УСТРОЙСТВО вопроса описывает вторая графа, которую
 *   первая редакция шапки пропустила: QUESTIONS wh-, A2, «FORM: WITH
 *   AUXILIARY 'HAVE'» — «Can use 'wh-'words + auxiliary 'have' to form
 *   'wh-'questions ► present perfect», пример «How have you been?». Нашёл
 *   методист.
 * - **`for` в ОТРИЦАНИИ подтверждён на A2:** «FORM/USE: TIME WITH 'FOR'» —
 *   «Can use **the negative form** with 'for'…», пример «I haven't eaten
 *   Italian food for a long time».
 * - **`for` В УТВЕРЖДЕНИИ — то есть главный случай модуля — графы нет НИ НА
 *   ОДНОМ УРОВНЕ.** Первая редакция шапки писала, что его покрывает графа B1
 *   «USE: UNFINISHED», — это неверно, и проверяется её же примером: «In spite
 *   of bad weather forecasts on TV, it has been a sunny, warm weekend», «I've
 *   had a really nice week». Графа о периоде НЕОПРЕДЕЛЁННОМ («unlimited or
 *   indefinite»), а `for two years` — отрезок определённый, ровно обратное.
 *   Нашёл методист; правило «к цитате читается её пример» сработало против
 *   меня.
 *
 *   Ближайшее, что источник знает, — B1 «FORM/USE: DURATION WITH 'SINCE'» и
 *   B1 `present perfect continuous, USE: SINGLE CONTINUING EVENT` («often with
 *   'for' or 'since'», пример «I've been studying International business there
 *   for four years»). То есть длительность утверждением источник видит у
 *   ПРОДОЛЖЕННОЙ формы, а простой формы с `for` он не описывает вовсе.
 *
 * Значит утверждение держится на одной строке руководства — «unfinished past
 * with **for** and since» (с. 52, перечень Tenses), без оговорки об отрицании.
 * Мерка курса берёт по руководству и словнику, и модуль берёт. Но записать это
 * надо прямо, а не спрятать.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ:
 *
 * - **`since`** — программа его в этой строке не обещает, а графа «FORM/USE:
 *   DURATION WITH 'SINCE'» стоит на B1 отдельно от `for`;
 * - **Present Perfect Continuous** («I have been studying for four years») — B1
 *   целиком, хотя по-русски «сколько времени ты учишься» просится именно им;
 * - `already`, `yet`, `just` — их место в модуле 23.
 *
 * СЛОВАРЬ МОДУЛЯ — СЕМНАДЦАТЬ КАРТОЧЕК, И ЭТО ПРОДОЛЖЕНИЕ РЕШЕНИЯ МОДУЛЯ 23.
 *
 * Норма ступени — тридцать карточек, но запас ступени к двадцать четвёртому
 * модулю выбран почти весь: больше половины остатка Oxford помечает B1, часть
 * американская (`candy`, `elevator`, `eraser`, `mail`, `soccer`), у десятка
 * молчит транскрипция. Набрать тридцать слов, которые работают ДРУГ НА ДРУГА в
 * одном модуле, из такого остатка нельзя — выходят мёртвые карточки, а их
 * ловит проверка и запрещает уточнение владельца от 21 августа («не надо
 * форсить»).
 *
 * Поэтому модуль берёт семнадцать работающих карточек. Каждая встречается в
 * тексте, примере или задании, а не только в себе самой. Сверка `kontrol`
 * пишет об этом вопросом, а не ошибкой. **Вопрос владельцу открыт и записан в
 * программе:** либо поздние модули берут меньше карточек, либо словарь ступени
 * пополняется из другого источника.
 *
 * ВОСЕМЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000: advanced, click, photography,
 * horror, length, ad, software, plus — B1. Все восемь стоят в словнике
 * A2 Key.
 *
 * ВОСЬМОЕ СЛОВО ВЫШЕ СТУПЕНИ — `plus`, И ЗДЕСЬ Я ОШИБСЯ ВТОРОЙ РАЗ ПОДРЯД.
 * Сверка сказала «plus (B1)», я поискал в файле строку `^plus ` и не нашёл —
 * потому что там стоит **`plus1 prep. B1, adj., conj., n. B2`**, с цифрой
 * омонима. Об этом предупреждает сама сверка: «у омонимов к слову приписана
 * цифра». Модуль берёт `plus` предлогом, значит B1. Нашёл методист.
 *
 * Урок отсюда шире одного слова: в модуле 23 сверка ошиблась, а здесь была
 * права — **проверять надо и её слова, и своё опровержение**. Поиск по началу
 * строки не годится: у омонимов цифра, а часть речи бывает не та.
 *
 * `comic` OXFORD 3000 НЕ ЗНАЕТ, НО OXFORD 5000 СТАВИТ ЕГО НА B2
 * (`comic adj., n. B2`), и это тоже объявляется.
 *
 * ПЯТИ СЛОВ НЕ ЗНАЕТ НИ ОДИН ИЗ ДВУХ СПИСКОВ: studies, diploma, beginner,
 * vocabulary, chatroom.
 *
 * А `article` OXFORD ЗНАЕТ И СТАВИТ НА A1 (`article n. A1`), то есть слово
 * с прошлой ступени. Первая редакция шапки числила его среди незнакомых
 * Oxford — проверил построчно и поправил.
 *
 * ОСТОРОЖНО С ПОМЕТОЙ OXFORD — НА ЭТОМ Я УЖЕ ОШИБСЯ В МОДУЛЕ 23. Сверка
 * сравнивает ОСНОВЫ, и «слово (B1)» в её отчёте может относиться к другой части
 * речи: там она сказала «fried (B1)», а в файле стоит `fry v. B1`. Помету
 * проверяют по строке `oxford-3000`, а не по ответу скрипта. Здесь проверено
 * построчно.
 */
const module: Module = {
  slug: "kak-dolgo",
  title: "Как долго",
  znak: "1f4cf",

  outcomes: [
    "сказать, сколько времени длится дело: I have studied English for two years",
    "спросить о длительности: How long have you studied English?",
    "сказать, чего давно не было: I haven't seen him for a long time",
    "находить в рассказе о курсе, кто чем занимается и сколько времени",
    "слышать в разговоре, сколько времени человек чем-то занят",
    "проверять рассказ о занятии: названо дело, срок и уровень",
  ],

  sources: [
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень вопросительных слов: «Who; " +
        "Whose; Which / How; How much; How many; How often; How long; etc.» — " +
        "(косая черта здесь — конец строки на странице, разборщик склеил " +
        "«Which How» в одно) " +
        "отсюда весь урок 2. У English Grammar Profile отдельной графы про `How " +
        "long` НЕТ ВОВСЕ: искал по графам, дескрипторам и примерам всех уровней " +
        "до B1 включительно. " +
        "Там же, перечень Tenses: «Present perfect simple: recent past with " +
        "just, indefinite past with yet, already, never, ever; unfinished past " +
        "with for and since». НА ЭТОЙ СТРОКЕ ДЕРЖИТСЯ ГЛАВНЫЙ СЛУЧАЙ МОДУЛЯ — " +
        "длительность утверждением, — и оговорки об отрицании руководство не " +
        "делает. " +
        "ОСТОРОЖНО С РАЗБОРАМИ ЭТОЙ СТРОКИ: разбор `.md` вклеивает в неё " +
        "соседний столбец. Подтверждают разбор `.text` и прямой поиск по PDF " +
        "через `npm run pdf`. " +
        "УРОК 5, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "УРОК 3. PAST, present perfect simple, A2, «FORM/USE: TIME WITH 'FOR'»: " +
        "«Can use the negative form with 'for' to talk about a past event or " +
        "action which hasn't occurred again in the period of time up to now», " +
        "пример «I haven't eaten Italian food for a long time». " +
        "ЗДЕСЬ ГЛАВНАЯ ОГОВОРКА МОДУЛЯ, И ОНА ОБЪЯВЛЯЕТСЯ ПРЯМО: графа " +
        "подтверждает `for` только В ОТРИЦАНИИ, а утверждения с длительностью " +
        "простой формой источник не описывает НИ НА ОДНОМ УРОВНЕ. Первая " +
        "редакция опоры ссылалась здесь на B1 «USE: UNFINISHED» — неверно: её " +
        "примеры «it has been a sunny, warm weekend» и «I've had a really nice " +
        "week» говорят о периоде неопределённом, а `for two years` определён. " +
        "Нашёл методист. Значит урок 1 держится на строке руководства A2 Key. " +
        "А У УРОКА 2 ПОДПОРОК ДВЕ. Кроме руководства, его устройство прямо " +
        "описывает QUESTIONS wh-, A2, «FORM: WITH AUXILIARY 'HAVE'»: «Can use " +
        "'wh-'words + auxiliary 'have' to form 'wh-'questions. ► present " +
        "perfect», пример «How have you been?». Первая редакция эту графу " +
        "пропустила и написала «подпорка одна» — нашёл методист. " +
        "ОПОРА ФОРМЫ. A2, «FORM: AFFIRMATIVE» — «Can use the affirmative form " +
        "'have' + '-ed' with pronouns 'I' and 'we'», и A2, «FORM: QUESTIONS» — " +
        "«Can use the question form 'have you' + '-ed' with with a limited " +
        "range of verbs» (предлог `with` в источнике стоит ДВАЖДЫ, это его " +
        "опечатка, цитата повторяет её как есть). Граница лиц та же, что в " +
        "модулях 22 и 23: ряд показан таблицей целиком, задания держатся `I`, " +
        "`we` и вопроса у `you`. " +
        "ЧЕГО НЕТ: `since` — «FORM/USE: DURATION WITH 'SINCE'», B1, и программа " +
        "его в этой строке не обещает; Present Perfect Continuous — B1 целиком",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем рассказ о курсе». с. 55, шкала «Reading " +
        "correspondence», графа A2: «Can understand short, simple personal " +
        "letters». Опора взята для ВОСПРИЯТИЯ отдельно от опоры на письмо — " +
        "разведение подсказал методист при разборе модуля 23, где урок чтения " +
        "остался подпёрт шкалой письменного взаимодействия. " +
        "УРОК ПИСЬМА «Пишем о своём занятии». с. 66, шкала «Overall written " +
        "production», графа A2: «Can produce a series of simple phrases and " +
        "sentences linked with simple connectors like» — далее в источнике " +
        "перечислены and, but и because. Рассказ о занятии пишется читателям " +
        "вообще, а не человеку по имени, и потому здесь производство текста, а " +
        "не переписка; с. 81 разводит эти шкалы прямо",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Семнадцать карточек модуля взяты из словника ступени; новых для " +
        "ступени пятнадцать, а `article` и `such` Oxford помечает A1 и A2. Почему семнадцать, а не тридцать — разобрано в " +
        "шапке модуля и в программе: запас ступени выбран почти весь, и " +
        "набирать норму словами, которые в модуле не работают, запрещает " +
        "уточнение владельца от 21 августа. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `studies (n pl)` — учёба, " +
        "занятия; `comic (n)` — журнал с рисованными историями, а не " +
        "прилагательное; `click (v)` — нажимать; `such (det)`. " +
        "ВОСЕМЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000, И ЭТО ОБЪЯВЛЯЕТСЯ НАРОЧНО: " +
        "advanced, click, photography, horror, length, ad, software, plus — " +
        "B1. Проверено " +
        "ПОСТРОЧНО по `oxford-3000`, а не по ответу сверки: она сравнивает " +
        "основы и в модуле 23 из-за этого сказала «fried (B1)», тогда как в " +
        "файле стоит `fry v. B1`. " +
        "ВОСЬМОЕ СЛОВО ВЫШЕ СТУПЕНИ — `plus`: в файле стоит `plus1 prep. B1`, " +
        "с цифрой омонима, и модуль берёт его предлогом. Первая редакция " +
        "опоры написала, что строки нет вовсе, — я искал по началу строки и " +
        "не увидел цифры. Нашёл методист. " +
        "`comic` OXFORD 3000 НЕ ЗНАЕТ, А OXFORD 5000 СТАВИТ НА B2 (`comic " +
        "adj., n. B2`) — объявляется наравне с прочими. " +
        "ПЯТИ СЛОВ НЕ ЗНАЕТ НИ ОДИН СПИСОК: studies, diploma, beginner, " +
        "vocabulary, chatroom. А `article` Oxford ставит на A1, то есть это " +
        "слово с прошлой ступени",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "dva-goda-uzhe",
      title: "Уже два года: I have studied English for two years",
      estimatedMinutes: 15,
      outcome: "сказать, сколько времени длится дело: I have studied English for two years",

      vozvrat: [{ iz: "uzhe-i-eshchyo-net", zadanie: "z1-dopisat-already" }],

      blocks: [
        {
          id: "delo-dlitsya-i-seychas",
          kind: "explain",
          text: [
            "Айгуль учит английский. Начала два года назад и учит до сих пор.",
            "Тут важны сразу две вещи: дело началось раньше и не кончилось.",
            "I have studied English for two years. — Я учу английский два года.",
            "Присмотрись к переводу: по-русски глагол стоит в настоящем времени — «учу».",
            "По-английски там have и третья форма, а не просто study.",
            "Отсюда и частая ошибка I study English for two years: рука пишет по русскому образцу.",
          ],
        },
        {
          id: "kogda-nachal-i-skolko-dlitsya",
          kind: "table",
          caption: "Кончилось и идёт до сих пор",
          zvuchat: [
            "I studied English for two years.",
            "I have studied English for two years.",
            "We lived here for four months.",
            "We have lived here for four months.",
          ],
          head: ["Дело кончилось", "Дело идёт до сих пор"],
          rows: [
            ["I studied English for two years.", "I have studied English for two years."],
            ["We lived here for four months.", "We have lived here for four months."],
          ],
        },
        {
          id: "chto-delaet-for",
          kind: "explain",
          text: [
            "Отрезок времени стоит в обоих столбцах: два года, четыре месяца.",
            "Перед отрезком стоит короткое for — «в течение».",
            "Слева глагол в прошедшем: studied, lived. Там дело кончилось.",
            "Справа стоит have и третья форма. Там дело идёт до сих пор.",
            "Различает их не отрезок, а слово have перед глаголом.",
          ],
        },
        {
          id: "ryad-po-licam-dlitelnost",
          kind: "table",
          caption: "Как это звучит у каждого лица",
          zvuchat: [
            "I have studied",
            "we have studied",
            "you have studied",
            "he has studied",
            "she has studied",
            "they have studied",
          ],
          head: ["Кто", "Как это звучит целиком"],
          rows: [
            ["I", "I have studied"],
            ["we", "we have studied"],
            ["you", "you have studied"],
            ["he", "he has studied"],
            ["she", "she has studied"],
            ["they", "they have studied"],
          ],
        },
        {
          id: "ne-i-study-two-years",
          kind: "note",
          tone: "mistake",
          text:
            "«I study English two years» — так не говорят.\n\nЕсли дело идёт с " +
            "прошлого до сих пор, берут have и третью форму: I have studied " +
            "English for two years.",
        },
        {
          id: "razgovor-o-kurse",
          kind: "example",
          caption: "Разговор о курсе",
          razgovor: true,
          zvuchat: [
            "I have studied English for two years.",
            "And your vocabulary is good! I haven't had such a good teacher before.",
            "I have used this software for a year, and it helps.",
          ],
          text:
            "I have studied English for two years.\nAnd your vocabulary is good! I haven't had such a good teacher before.\nI have used this software for a year, and it helps.",
          perevod: {
            "I have studied English for two years.":
              "Я учу английский два года.",
            "And your vocabulary is good! I haven't had such a good teacher before.":
              "И словарный запас у тебя хороший! У меня раньше не было такого хорошего преподавателя.",
            "I have used this software for a year, and it helps.":
              "Я пользуюсь этой программой год, и она помогает.",
          },
          explain:
            "В первой и третьей строках после have стоит третья форма, а за ней " +
            "отрезок времени с for. Обе говорят, что дело идёт и сейчас. Во " +
            "второй строке have тоже есть, но отрезка нет: она о том, чего в " +
            "жизни не случалось.",
        },
        {
          id: "slovar-kursa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "photography", translation: "фотография как занятие", example: "I have studied photography for a year.", hint: "/fəˈtɒgrəfi/" },
            { term: "vocabulary", translation: "словарный запас", example: "And your vocabulary is good!", hint: "/vəʊˈkæbjʊləri/" },
            { term: "software", translation: "программа для компьютера", example: "I have used this software for a year.", hint: "/ˈsɒftweə/" },
            { term: "studies", translation: "учёба, занятия", example: "My studies take four hours a week.", hint: "/ˈstʌdɪz/" },
            { term: "such", translation: "такой", example: "I haven't had such a good teacher before.", hint: "/sʌtʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-for",
          kind: "gap",
          prompt: "Дальше стоит отрезок времени. Допиши короткое слово.",
          before: "I have studied English ",
          after: " two years.",
          answer: "for",
          hint: "Это слово ставят перед отрезком времени, а не перед днём.",
          why:
            "I have studied English for two years. Без него строка сказала бы " +
            "просто, что английский был в жизни.",
        },
        {
          id: "z2-vybrat-o-dlitelnosti",
          kind: "choice",
          prompt:
            "Данияр начал заниматься фотографией год назад и занимается до сих пор. Как он скажет?",
          options: [
            { text: "I study photography a year." },
            { text: "I have studied photography for a year.", correct: true },
            { text: "I studied photography a year ago." },
          ],
          hint: "Дело идёт от прошлого до сих пор.",
          why:
            "I have studied photography for a year. Первая запись оборвана, а " +
            "третья говорит только о начале.",
        },
        {
          id: "z3-otmetit-o-dlitelnosti",
          kind: "hottext",
          prompt: "Отметь строки о деле, которое идёт до сих пор.",
          parts: [
            { text: "I have studied English for two years.", selectable: true, correct: true },
            { text: " · " },
            { text: "I studied English two years ago.", selectable: true },
            { text: " · " },
            { text: "We have lived here for four months.", selectable: true, correct: true },
            { text: " · " },
            { text: "We lived here for four months.", selectable: true },
          ],
          hint: "Ищи have перед третьей формой: отрезок есть и там, и там.",
          why:
            "Первая и третья. Во второй и четвёртой глагол стоит в прошедшем, и " +
            "дело уже кончилось.",
        },
        {
          id: "z4-sobrat-o-zhilye",
          kind: "order",
          prompt: "Собери строку: мы живём здесь четыре месяца.",
          items: ["for four months.", "We have", "lived here"],
          answer: [1, 2, 0],
          hint: "Отрезок времени с коротким словом идёт в конец.",
          why:
            "We have lived here for four months. Порядок такой: кто, have, " +
            "третья форма, место, отрезок времени.",
        },
        {
          id: "z5-napisat-o-programme",
          kind: "short",
          prompt:
            "Скажи по-английски, что пользуешься этой программой уже год. Начни с I have.",
          answer: "I have used this software for a year.",
          accept: [
            "I have used this software for a year",
            "I have used this software for one year.",
            "I have used this software for one year",
          ],
          hint: "После третьей формы идёт короткое слово и отрезок времени.",
          why:
            "I have used this software for a year. Слово for стоит перед " +
            "отрезком, а не перед днём начала.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-dolgo-vopros",
      title: "Как долго: How long have you studied English?",
      estimatedMinutes: 14,
      outcome: "спросить о длительности: How long have you studied English?",

      blocks: [
        {
          id: "sprosit-skolko-vremeni",
          kind: "explain",
          text: [
            "Про чужое занятие спрашивают: сколько времени человек этим занимается.",
            "По-английски вопрос начинают двумя словами сразу.",
            "Дальше идёт то же, что в обычном вопросе: have, кто, третья форма.",
          ],
        },
        {
          id: "rasskaz-i-vopros-o-dlitelnosti",
          kind: "table",
          caption: "Рассказ и вопрос",
          zvuchat: [
            "You have studied English for two years.",
            "How long have you studied English?",
            "You have lived here for four months.",
            "How long have you lived here?",
          ],
          head: ["Рассказ", "Вопрос"],
          rows: [
            ["You have studied English for two years.", "How long have you studied English?"],
            ["You have lived here for four months.", "How long have you lived here?"],
          ],
        },
        {
          id: "kak-ustroen-vopros-o-dlitelnosti",
          kind: "explain",
          text: [
            "Два слова how long вместе значат «как долго».",
            "После них have выходит вперёд, а тот, о ком речь, встаёт за ним.",
            "Отрезок времени в вопросе не называют: о нём и спрашивают.",
            "Отвечают строкой с for: For two years или I have studied it for two years.",
          ],
        },
        {
          id: "ne-how-long-do-you",
          kind: "note",
          tone: "mistake",
          text:
            "«How long do you study English?» — так не спрашивают о деле, " +
            "которое идёт с прошлого до сих пор.\n\nПосле how long выходит " +
            "have: How long have you studied English?",
        },
        {
          id: "razgovor-o-zanyatiyah",
          kind: "example",
          caption: "Разговор о занятиях",
          razgovor: true,
          zvuchat: [
            "How long have you studied photography?",
            "For a year. I have taken photos of the moon!",
            "I have read comics for six years, but that isn't studying!",
          ],
          text:
            "How long have you studied photography?\nFor a year. I have taken photos of the moon!\nI have read comics for six years, but that isn't studying!",
          perevod: {
            "How long have you studied photography?":
              "Сколько ты уже занимаешься фотографией?",
            "For a year. I have taken photos of the moon!":
              "Год. Я снимал луну!",
            "I have read comics for six years, but that isn't studying!":
              "Я читаю комиксы шесть лет, но это не занятия!",
          },
          explain:
            "В вопросе how long стоит первым, а отрезок времени не называют. " +
            "Короткий ответ For a year повторяет только отрезок, без глагола, " +
            "и дальше идёт обычная строка о длительности.",
        },
        {
          id: "slovar-uvlecheniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "moon", translation: "луна", example: "I have taken photos of the moon for a year.", hint: "/muːn/" },
            { term: "chatroom", translation: "чат, комната для разговора", example: "How long have you talked in this chatroom?", hint: "/ˈtʃætruːm/" },
            { term: "comic", translation: "журнал с рисованными историями", example: "I have read comics for six years.", hint: "/ˈkɒmɪk/" },
            { term: "article", translation: "статья", example: "I haven't read articles for a month.", hint: "/ˈɑːtɪkl/" },
            { term: "length", translation: "длина, продолжительность", example: "The length of the course is two years.", hint: "/leŋθ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vopros-o-dlitelnosti",
          kind: "choice",
          prompt: "Спроси, сколько времени собеседник читает комиксы.",
          options: [
            { text: "How long do you read comics?" },
            { text: "How long you have read comics?" },
            { text: "How long have you read comics?", correct: true },
          ],
          hint: "После двух первых слов вперёд выходит have.",
          why:
            "How long have you read comics? В первой записи стоит do, а во " +
            "второй have осталось на месте рассказа.",
        },
        {
          id: "z2-dopisat-how-long",
          kind: "gap",
          prompt: "Спрашивают о длительности. Допиши два слова в начало.",
          before: "",
          after: " have you used this software?",
          answer: "How long",
          hint: "Эти два слова вместе значат «как долго».",
          why:
            "How long have you used this software? Одно слово How спросило бы о " +
            "способе, а не о времени.",
        },
        {
          id: "z3-otvetit-korotko-o-dlitelnosti",
          kind: "short",
          prompt:
            "Тебя спросили: How long have you studied photography? Ответь коротко — год.",
          answer: "For a year.",
          accept: ["For a year", "for a year", "For one year.", "For one year"],
          hint: "В коротком ответе называют только отрезок времени.",
          why:
            "For a year. Глагол в таком ответе не повторяют.",
        },
        {
          id: "z4-sobrat-vopros-o-komiksah",
          kind: "order",
          prompt: "Собери вопрос: как долго идёт этот разговор в чате?",
          items: ["in this chatroom?", "How long", "have you talked"],
          answer: [1, 2, 0],
          hint: "Начни с двух слов о длительности.",
          why:
            "How long have you talked in this chatroom? Отрезок времени в " +
            "вопросе не называют: о нём и спрашивают.",
        },
        {
          id: "z5-sprosit-o-zhilye",
          kind: "short",
          prompt:
            "Спроси по-английски, сколько времени собеседник живёт здесь. Начни с How long.",
          answer: "How long have you lived here?",
          accept: ["How long have you lived here"],
          hint: "После двух первых слов идёт have, потом тот, о ком речь.",
          why:
            "How long have you lived here? Порядок такой: how long, have, кто, " +
            "третья форма, место.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "davno-ne-bylo",
      title: "Давно не было: I haven't seen him for a long time",
      estimatedMinutes: 14,
      outcome: "сказать, чего давно не было: I haven't seen him for a long time",

      blocks: [
        {
          id: "chego-davno-ne-sluchalos",
          kind: "explain",
          text: [
            "Бывает обратное: дело не случалось долго и до сих пор не случилось.",
            "По-русски говорят «давно не видел», «сто лет не был».",
            "По-английски берут отрицание и тот же отрезок времени с for.",
          ],
        },
        {
          id: "dlitsya-i-ne-sluchalos",
          kind: "table",
          caption: "Длится и не случалось",
          zvuchat: [
            "I have studied English for two years.",
            "I haven't studied English for two years.",
            "I have written articles for a year.",
            "I haven't written articles for a year.",
          ],
          head: ["Идёт до сих пор", "Не случалось всё это время"],
          rows: [
            ["I have studied English for two years.", "I haven't studied English for two years."],
            ["I have written articles for a year.", "I haven't written articles for a year."],
          ],
        },
        {
          id: "chto-menyaet-otricanie",
          kind: "explain",
          text: [
            "Слово have берёт not и сливается с ним: haven't.",
            "Третья форма глагола при этом не меняется: studied остаётся studied.",
            "Отрезок времени с for остаётся на месте, в конце строки.",
            "А смысл переворачивается: дело не случалось всё это время.",
          ],
        },
        {
          id: "ne-long-time-ago",
          kind: "note",
          tone: "mistake",
          text:
            "«I haven't seen Alim a long time ago» — так не говорят.\n\nПеред " +
            "отрезком времени стоит for, а не ago: I haven't seen Alim for a " +
            "long time.",
        },
        {
          id: "razgovor-o-druge",
          kind: "example",
          caption: "Разговор о друге",
          razgovor: true,
          zvuchat: [
            "I haven't seen Alim for a long time.",
            "We have talked in a chatroom for two years, and that is all.",
            "I haven't watched a horror film with him for a year!",
          ],
          text:
            "I haven't seen Alim for a long time.\nWe have talked in a chatroom for two years, and that is all.\nI haven't watched a horror film with him for a year!",
          perevod: {
            "I haven't seen Alim for a long time.":
              "Я давно не видел Алима.",
            "We have talked in a chatroom for two years, and that is all.":
              "Мы два года общаемся в чате, и только.",
            "I haven't watched a horror film with him for a year!":
              "Я год не смотрел с ним ужастиков!",
          },
          explain:
            "В первой и третьей строках стоит haven't: дела не случалось всё " +
            "это время. Во второй строке отрицания нет, и там дело идёт до сих " +
            "пор.",
        },
        {
          id: "slovar-obshcheniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "horror", translation: "(о фильме) ужасов", example: "I haven't watched a horror film for a year!", hint: "/ˈhɒrə/" },
            { term: "click", translation: "нажимать", example: "Click here and open the chatroom.", hint: "/klɪk/" },
            { term: "ad", translation: "объявление", example: "I have clicked the ad twice.", hint: "/æd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-otricanie",
          kind: "gap",
          prompt: "Алима давно не видно. Допиши слово.",
          before: "I ",
          after: " seen Alim for a long time.",
          answer: "haven't",
          hint: "Слово have берёт not и сливается с ним.",
          why:
            "I haven't seen Alim for a long time. Форма has сюда не встанет: " +
            "она идёт к he и she.",
        },
        {
          id: "z2-vybrat-pered-otrezkom",
          kind: "choice",
          prompt: "Какое слово стоит перед отрезком времени?",
          options: [
            { text: "ago" },
            { text: "for", correct: true },
            { text: "in" },
          ],
          hint: "Сравни two years ago и for two years.",
          why:
            "For. Слово ago идёт ПОСЛЕ отрезка и говорит о дне начала, а in " +
            "ставят перед месяцем.",
        },
        {
          id: "z3-otmetit-chego-ne-bylo",
          kind: "hottext",
          prompt: "Отметь строки о том, чего долго не случалось.",
          parts: [
            { text: "I haven't seen Alim for a long time.", selectable: true, correct: true },
            { text: " · " },
            { text: "We have talked in a chatroom for two years.", selectable: true },
            { text: " · " },
            { text: "I haven't read a comic for a month.", selectable: true, correct: true },
            { text: " · " },
            { text: "I have used this software for a year.", selectable: true },
          ],
          hint: "Ищи haven't перед третьей формой.",
          why:
            "Первая и третья. Во второй и четвёртой отрицания нет, и там дела " +
            "идут до сих пор.",
        },
        {
          id: "z4-sobrat-o-filme",
          kind: "order",
          prompt: "Собери строку: я давно не смотрел фильм ужасов.",
          items: ["watched a horror film", "for a long time.", "I haven't"],
          answer: [2, 0, 1],
          hint: "Отрезок времени идёт в самый конец.",
          why:
            "I haven't watched a horror film for a long time. Слово for стоит " +
            "перед отрезком, а не после него.",
        },
        {
          id: "z5-napisat-o-chatroom",
          kind: "short",
          prompt:
            "Скажи по-английски, что давно не был в чате. Начни с I haven't.",
          answer: "I haven't been in a chatroom for a long time.",
          accept: [
            "I haven't been in a chatroom for a long time",
            "I haven't been in the chatroom for a long time.",
            "I haven't been in the chatroom for a long time",
            "I haven't been to a chatroom for a long time.",
            "I haven't been to a chatroom for a long time",
            "I haven't been to the chatroom for a long time.",
            "I haven't been to the chatroom for a long time",
          ],
          hint: "Третья форма глагола be — been, а отрезок времени идёт в конец.",
          why:
            "I haven't been in a chatroom for a long time. Речь о том, сколько " +
            "времени человека там не было, и потому стоит in. Строка с to — про " +
            "то, что он туда не заходил, — тоже верна и засчитывается.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-rasskaz-o-kurse",
      title: "Читаем рассказ о курсе",
      estimatedMinutes: 13,
      outcome: "находить в рассказе о курсе, кто чем занимается и сколько времени",

      blocks: [
        {
          id: "zachem-chitat-o-kurse",
          kind: "explain",
          text: [
            "Люди рассказывают о своих курсах, чтобы посоветовать их другим.",
            "В таком рассказе ищут две вещи: чем человек занят и сколько времени.",
            "Ниже письмо, и вопросы будут о нём.",
          ],
        },
        {
          id: "pismo-o-kurse",
          kind: "text",
          title: "A letter from Aigul",
          genre: "email",
          body: [
            "Hello! I have studied English for two years, and I still like it.",
            "I was a beginner, and now I am in the advanced group.",
            "My studies take four hours a week, plus the software at home.",
            "The length of the course is three years, so I have one year more.",
            "I haven't written articles in English for a long time.",
            "Click the ad on our page and read about the diploma!",
          ],
          glossary: [
            { term: "still", translation: "по-прежнему" },
            { term: "group", translation: "группа" },
            { term: "one year more", translation: "ещё год" },
          ],
        },
        {
          id: "kak-iskat-dlitelnost",
          kind: "note",
          tone: "info",
          text:
            "Длительность ищут по слову for и отрезку времени за ним.\n\nА путь " +
            "человека виден по двум точкам: кем он был и кто он теперь.",
        },
        {
          id: "slovar-pisma-o-kurse",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "beginner", translation: "начинающий", example: "I was a beginner, and now I am in the advanced group.", hint: "/bɪˈgɪnə/" },
            { term: "advanced", translation: "продвинутый", example: "Now I am in the advanced group.", hint: "/ədˈvænst/" },
            { term: "diploma", translation: "диплом", example: "Read about the diploma!", hint: "/dɪˈpləʊmə/" },
            { term: "plus", translation: "плюс, вдобавок", example: "Four hours a week, plus the software at home.", hint: "/plʌs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-skolko-let-uchit",
          about: "pismo-o-kurse",
          kind: "short",
          prompt: "Сколько лет Айгуль учит английский? Ответь числом.",
          answer: "2",
          accept: ["two", "два"],
          hint: "Про это сказано в самой первой строке.",
          why: "I have studied English for two years.",
        },
        {
          id: "z2-v-kakoy-ona-gruppe",
          about: "pismo-o-kurse",
          kind: "choice",
          prompt: "В какой группе Айгуль сейчас?",
          options: [
            { text: "В группе для начинающих." },
            { text: "В продвинутой группе.", correct: true },
            { text: "Она занимается одна." },
          ],
          hint: "Про группу сказано во второй строке.",
          why:
            "В продвинутой: I was a beginner, and now I am in the advanced " +
            "group. Начинающей она была раньше.",
        },
        {
          id: "z3-skolko-dlitsya-kurs",
          about: "pismo-o-kurse",
          kind: "short",
          prompt: "Сколько лет длится курс? Ответь числом.",
          answer: "3",
          accept: ["three", "три"],
          hint: "Про длительность курса сказано в четвёртой строке.",
          why: "The length of the course is three years.",
        },
        {
          id: "z4-otmetit-verno-o-kurse",
          about: "pismo-o-kurse",
          kind: "hottext",
          prompt: "Отметь то, что верно по письму.",
          parts: [
            { text: "Айгуль занимается четыре часа в неделю", selectable: true, correct: true },
            { text: " · " },
            { text: "статей по-английски она давно не писала", selectable: true, correct: true },
            { text: " · " },
            { text: "курс она уже закончила", selectable: true },
            { text: " · " },
            { text: "английский ей разонравился", selectable: true },
          ],
          hint: "Про статьи сказано в пятой строке, про курс — в четвёртой.",
          why:
            "Верно первое и второе. Курс не закончен — остался год, а английский " +
            "ей по-прежнему нравится.",
        },
        {
          id: "z5-chto-znachit-for-two-years",
          about: "pismo-o-kurse",
          kind: "choice",
          prompt:
            "Первая строка: I have studied English for two years. Что из этого следует?",
          options: [
            { text: "Айгуль училась два года и бросила." },
            { text: "Айгуль начнёт учить английский через два года." },
            { text: "Айгуль учит английский два года и учит сейчас.", correct: true },
          ],
          hint: "Оборот с for говорит о деле, которое ещё идёт.",
          why:
            "Учит два года и учит сейчас. Про брошенное сказали бы I studied " +
            "English for two years — глаголом прошедшего времени.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-skolko-vremeni",
      title: "Слушаем, сколько времени",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, сколько времени человек чем-то занят",

      blocks: [
        {
          id: "zachem-slushat-o-dlitelnosti",
          kind: "explain",
          text: [
            "Двое знакомятся на курсе и спрашивают друг друга о занятиях.",
            "Слушать надо, кто чем занят и сколько времени.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-dlitelnosti",
          kind: "audio",
          caption: "Разговор на курсе",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "How long have you studied English? — For three years. And you? — " +
            "I have studied it for a year, but I haven't used it at work yet.",
        },
        {
          id: "chto-slushat-o-dlitelnosti",
          kind: "note",
          tone: "info",
          text:
            "Слушай отрезок времени после слова for.\n\nЭто и есть ответ на " +
            "вопрос «как долго».",
        },

        // ---- задания ----
        {
          id: "z1-skolko-let-u-pervogo",
          about: "zapis-o-dlitelnosti",
          kind: "short",
          prompt: "Послушай. Сколько лет первый учит английский? Ответь числом.",
          answer: "3",
          accept: ["three", "три"],
          hint: "Ответ звучит во второй реплике, после слова For.",
          why: "For three years.",
        },
        {
          id: "z2-skolko-u-vtorogo",
          about: "zapis-o-dlitelnosti",
          kind: "short",
          prompt: "Послушай. Сколько времени учит английский второй? Ответь одним словом по-английски.",
          answer: "year",
          accept: ["Year", "a year", "one year"],
          hint: "Об этом сказано в самой последней реплике.",
          why: "I have studied it for a year.",
        },
        {
          id: "z3-chego-vtoroy-ne-delal",
          about: "zapis-o-dlitelnosti",
          kind: "choice",
          prompt: "Послушай. Чего второй пока не делал?",
          options: [
            { text: "Не занимался с программой." },
            { text: "Не пользовался английским на работе.", correct: true },
            { text: "Не сдавал экзамен." },
          ],
          hint: "Об этом говорят в конце последней реплики.",
          why:
            "Не пользовался на работе: I haven't used it at work yet.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-dlitelnosti",
          about: "zapis-o-dlitelnosti",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "первый учит английский три года", selectable: true, correct: true },
            { text: " · " },
            { text: "второй учит английский год", selectable: true, correct: true },
            { text: " · " },
            { text: "оба учат английский одинаково долго", selectable: true },
            { text: " · " },
            { text: "первый работает переводчиком", selectable: true },
          ],
          hint: "Оба отрезка звучат после слова for.",
          why:
            "Прозвучали первое и второе. Три года и год — это разные отрезки, а " +
            "про работу первого речи не было.",
        },
        {
          id: "z5-chto-znachit-for-v-zapisi",
          about: "zapis-o-dlitelnosti",
          kind: "choice",
          prompt: "В записи звучит For three years. На какой вопрос это ответ?",
          options: [
            { text: "Когда это началось?" },
            { text: "Как долго это длится?", correct: true },
            { text: "Сколько раз в неделю?" },
          ],
          hint: "Вспомни, каким вопросом начинается запись.",
          why:
            "Как долго это длится. Про начало ответили бы Two years ago, а про " +
            "число раз — Twice a week.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-svoyom-zanyatii",
      title: "Пишем о своём занятии",
      estimatedMinutes: 15,
      outcome: "проверять рассказ о занятии: названо дело, срок и уровень",

      blocks: [
        {
          id: "zachem-proveryat-rasskaz-o-zanyatii",
          kind: "explain",
          text: [
            "Ученик написал: «I study English. It is good.» — «Я учу английский. Это хорошо.»",
            "Читателю неясно главное: давно ли и на каком он уровне.",
            "В рассказе о занятии пропускают не само дело, а его срок.",
            "Проверить свой рассказ можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-rasskaze-o-zanyatii",
          kind: "table",
          caption: "Что должно быть в рассказе",
          zvuchat: [
            "I have played basketball for three years.",
            "I was a beginner, but now I play in the school team.",
            "We train two hours a week.",
            "I haven't been to the pool for a month.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["чем занят и сколько времени", "I have played basketball for three years."],
            ["с чего начал и где сейчас", "I was a beginner, but now I play in the school team."],
            ["сколько это берёт времени", "We train two hours a week."],
            ["чего давно не делал", "I haven't been to the pool for a month."],
          ],
        },
        {
          id: "chem-derzhitsya-rasskaz-o-zanyatii",
          kind: "explain",
          text: [
            "Первая строка называет занятие и срок — там have, третья форма и for.",
            "Вторая говорит о начале и о сегодняшнем дне: was и обычное настоящее.",
            "Третья считает время в неделю: это уже обычное настоящее.",
            "Четвёртая называет то, чего давно не было, — с haven't и for.",
            "Строки связывают словами and, but и because: без них выйдет список.",
          ],
        },
        {
          id: "obrazec-rasskaza-o-zanyatii",
          kind: "example",
          caption: "Рассказ Данияра",
          perevod: {
            "I have played basketball for three years, and I still like it.":
              "Я играю в баскетбол три года, и мне до сих пор нравится.",
            "I was a beginner, but now I play in the school team.":
              "Я был новичком, а теперь играю за школьную команду.",
            "We train two hours a week, plus a game on Saturday.":
              "Мы тренируемся два часа в неделю плюс игра в субботу.",
            "I haven't been to the pool for a month because basketball takes my evenings.":
              "В бассейне я не был месяц, потому что баскетбол занимает все вечера.",
          },
          zvuchat: [
            "I have played basketball for three years, and I still like it.",
            "I was a beginner, but now I play in the school team.",
            "We train two hours a week, plus a game on Saturday.",
            "I haven't been to the pool for a month because basketball takes my evenings.",
          ],
          text:
            "I have played basketball for three years, and I still like it.\nI was a beginner, but now I play in the school team.\nWe train two hours a week, plus a game on Saturday.\nI haven't been to the pool for a month because basketball takes my evenings.",
          explain:
            "Первая и четвёртая строки стоят на have и for: одна о том, что " +
            "длится, другая о том, чего давно не было. Вторая и третья говорят " +
            "о начале и о сегодняшнем распорядке, и там have не нужно.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-rasskazu-o-zanyatii",
          kind: "choice",
          prompt:
            "Рассказ целиком: I study English. It is good. Чего в нём не хватает?",
          options: [
            { text: "Не сказано, давно ли и на каком он уровне.", correct: true },
            { text: "Имени того, кто писал." },
            { text: "Названия города." },
          ],
          hint: "Представь читателя: захочет ли он на такой курс?",
          why:
            "Не сказано, давно ли и на каком уровне. Занятие названо, оценка " +
            "есть, а срока нет.",
        },
        {
          id: "z2-dopisat-for-v-rasskaz",
          kind: "gap",
          prompt: "Речь о деле, которое идёт до сих пор. Допиши слово перед глаголом.",
          before: "I ",
          after: " played basketball for three years.",
          answer: "have",
          hint: "Отрезок времени уже стоит; не хватает слова, которое говорит «и сейчас».",
          why:
            "I have played basketball for three years. Без have строка сказала " +
            "бы, что дело кончилось.",
        },
        {
          id: "z3-otmetit-stroki-o-sroke",
          kind: "hottext",
          prompt: "Отметь строки, из которых читатель узнаёт срок.",
          parts: [
            { text: "I have played basketball for three years.", selectable: true, correct: true },
            { text: " · " },
            { text: "I like this team.", selectable: true },
            { text: " · " },
            { text: "I haven't been to the pool for a month.", selectable: true, correct: true },
            { text: " · " },
            { text: "The coach is very good.", selectable: true },
          ],
          hint: "Ищи короткое слово перед отрезком времени.",
          why:
            "Первая и третья: в них стоит for и отрезок. Про команду и тренера " +
            "сказано без всякого срока.",
        },
        {
          id: "z4-svyazat-stroki-o-zanyatii",
          kind: "short",
          prompt:
            "Тебя спросили: Why haven't you been to the pool? Причина — basketball takes my evenings. Ответь целой строкой, начав с I haven't been to the pool for a month.",
          answer: "I haven't been to the pool for a month because basketball takes my evenings.",
          accept: [
            "I haven't been to the pool for a month because basketball takes my evenings",
            "I haven't been to the pool for a month because basketball takes my evenings.",
            "I haven't been to the pool for a month, because basketball takes my evenings",
            "I haven't been to the pool for a month, because basketball takes my evenings.",
          ],
          hint: "На вопрос со словом why отвечают частью с because.",
          why:
            "I haven't been to the pool for a month because basketball takes " +
            "my evenings. Слово because и связывает причину со следствием.",
        },
        {
          id: "z5-napisat-o-zanyatii",
          kind: "essay",
          prompt:
            "Напиши о своём занятии, четырьмя строками. Назови дело и срок, начало и сегодняшний уровень, время в неделю и то, чего давно не делал.",
          minWords: 16,
          sample:
            "I have played basketball for three years, and I still like it.\nI was a beginner, but now I play in the school team.\nWe train two hours a week, plus a game on Saturday.\nI haven't been to the pool for a month because basketball takes my evenings.",
          checklist: [
            "названо дело и срок: have, третья форма и for",
            "сказано, с чего начал и где сейчас",
            "названо время в неделю",
            "есть строка с haven't и for",
          ],
          hint:
            "Бери обороты, которые знаешь: I have played … for, I was a beginner, We train … hours a week, I haven't … for a month.",
          why:
            "Рассказ работает, когда читателю ясно, давно ли идёт занятие и " +
            "далеко ли зашло дело.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: переписать строку,
      // исправить чужую запись, отличить две записи по смыслу.

      // ---- итог 1 ----
      {
        id: "q-perepisat-nachalo-v-dlitelnost",
        kind: "short",
        outcome: "сказать, сколько времени длится дело: I have studied English for two years",
        prompt:
          "Строку I started this course a month ago перепиши так, чтобы она говорила о длительности, а не о начале.",
        answer: "I have studied this course for a month.",
        accept: [
          "I have studied this course for a month",
          "I have done this course for a month.",
          "I have done this course for a month",
        ],
        hint: "Слово ago уходит, а перед отрезком встаёт другое.",
        why:
          "I have studied this course for a month. Глагол при этом берёт третью " +
          "форму, и появляется have.",
      },
      {
        id: "q-otlichit-nachalo-ot-dlitelnosti",
        kind: "choice",
        outcome: "сказать, сколько времени длится дело: I have studied English for two years",
        prompt:
          "Строки I lived here for four months и I have lived here for four months говорят о разном. Чем?",
        options: [
          { text: "В первой человек здесь больше не живёт.", correct: true },
          { text: "В первой речь о будущем." },
          { text: "В первой отрезок времени длиннее." },
        ],
        hint: "Спроси у каждой строки: живёт ли человек здесь сейчас?",
        why:
          "В первой человек здесь больше не живёт. Оборот с have говорит, что " +
          "дело идёт до сих пор.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-how-long-do",
        kind: "short",
        outcome: "спросить о длительности: How long have you studied English?",
        prompt:
          "Ученик написал: How long do you use this software? Запиши вопрос без ошибки.",
        answer: "How long have you used this software?",
        accept: ["How long have you used this software"],
        hint: "После двух первых слов выходит не do.",
        why:
          "How long have you used this software? Запись с do годилась бы " +
          "вопросу о том, что бывает обычно, а не о длительности.",
      },
      {
        id: "q-napisat-vopros-o-shkole",
        kind: "short",
        outcome: "спросить о длительности: How long have you studied English?",
        prompt:
          "Спроси по-английски, сколько времени человек работает в этой школе. Начни с How long.",
        answer: "How long have you worked at this school?",
        accept: [
          "How long have you worked at this school",
          "How long have you worked at this school?",
          "How long have you worked at this school",
        ],
        hint: "Глагол work берёт -ed, как большинство.",
        why:
          "How long have you worked at this school? Ни одного числа в вопросе " +
          "нет: число и есть то, чего ждут в ответ.",
      },

      // ---- итог 3 ----
      {
        id: "q-vybrat-for-ili-ago",
        kind: "choice",
        outcome: "сказать, чего давно не было: I haven't seen him for a long time",
        prompt:
          "В какой строке короткое слово перед отрезком времени поставлено верно?",
        options: [
          { text: "I haven't used this software a month ago." },
          { text: "I haven't used this software for a month.", correct: true },
          { text: "I haven't used this software in a month ago." },
        ],
        hint: "Слово ago живёт при прошедшем времени и стоит ПОСЛЕ отрезка.",
        why:
          "I haven't used this software for a month. Запись с ago годилась бы " +
          "другой строке: I used this software a month ago.",
      },
      {
        id: "q-chto-znachit-havent-for",
        kind: "choice",
        outcome: "сказать, чего давно не было: I haven't seen him for a long time",
        prompt:
          "Строка: I haven't watched a horror film for a year. Что из этого следует?",
        options: [
          { text: "Человек смотрел фильм ужасов год подряд." },
          { text: "Человек посмотрит фильм ужасов через год." },
          { text: "Человек не смотрел фильмов ужасов весь этот год.", correct: true },
        ],
        hint: "Отрицание переворачивает смысл, а отрезок остаётся на месте.",
        why:
          "Не смотрел весь этот год. Без haven't строка сказала бы, что дело " +
          "идёт до сих пор.",
      },

      // ---- итог 4 ----
      {
        id: "q-najti-srok-v-rasskaze",
        kind: "short",
        outcome: "находить в рассказе о курсе, кто чем занимается и сколько времени",
        // Было: дословно тот же вопрос, ответ и accept, что у задания урока 4,
        // с приписанной перед ними цитатой из того же текста. Нашёл методист.
        prompt:
          "В объявлении о клубе строка: We have met every Friday for five years. " +
          "В какой день недели собирается клуб? Ответь английским словом.",
        answer: "Friday",
        accept: ["friday", "on Friday"],
        hint: "День назван в самой строке.",
        why:
          "Friday. Оборот for five years говорит о сроке, а день стоит перед ним, " +
          "после слова every.",
      },
      {
        id: "q-najti-uroven-v-rasskaze",
        kind: "choice",
        outcome: "находить в рассказе о курсе, кто чем занимается и сколько времени",
        // Строка была дословно из письма для чтения того же модуля. Взята новая
        // строка того же жанра, слова — карточки этого же модуля.
        prompt:
          "В письме строка: I was in the beginner group, and now I have a diploma. Что из этого следует?",
        options: [
          { text: "Человек закончил курс.", correct: true },
          { text: "Человек только записался." },
          { text: "Человек занимается в начальной группе." },
        ],
        hint: "Слово was говорит о прошлом, now — о сегодняшнем дне.",
        why:
          "Закончил курс. В начальной группе человек был раньше, а сейчас у него " +
          "диплом.",
      },

      // ---- итог 5 ----
      {
        id: "q-uslyshat-skolko-let",
        kind: "short",
        outcome: "слышать в разговоре, сколько времени человек чем-то занят",
        zvuk: "How long have you studied photography? — For four years.",
        prompt: "Послушай. Сколько лет человек занимается фотографией? Ответь числом.",
        answer: "4",
        accept: ["four", "четыре"],
        hint: "Ответ звучит после слова For.",
        why: "For four years.",
      },
      {
        id: "q-uslyshat-chego-davno-ne-bylo",
        kind: "short",
        outcome: "слышать в разговоре, сколько времени человек чем-то занят",
        zvuk: "I have used this software for a month, but I haven't read the articles for a long time.",
        prompt:
          "Послушай. Чего человек давно не делал? Ответь одним словом по-английски.",
        answer: "articles",
        accept: ["Articles", "the articles"],
        hint: "Ответ стоит после слов haven't read.",
        why: "But I haven't read the articles for a long time.",
      },

      // ---- итог 6 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-rasskazu-o-zanyatii",
        kind: "choice",
        outcome: "проверять рассказ о занятии: названо дело, срок и уровень",
        // Строка «My studies take four hours a week» была дословно из письма для
        // чтения того же модуля — семь слов подряд. Взята другая.
        prompt:
          "Рассказ: I have studied English for a year. My lessons take three hours a week. I haven't written articles for a long time. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что говорит, с чего начал и где сейчас.", correct: true },
          { text: "Той, что называет дело и срок." },
          { text: "Той, что называет время в неделю." },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что говорит о начале и сегодняшнем уровне. Дело со сроком, часы " +
          "в неделю и то, чего давно не было, названы. А с чего человек начал и " +
          "где он теперь — не сказано.",
      },
      {
        id: "q-dopisat-stroku-ob-urovne",
        kind: "short",
        outcome: "проверять рассказ о занятии: названо дело, срок и уровень",
        prompt:
          "К рассказу допиши строку об уровне: раньше был начинающим, теперь читаешь статьи. Начни с I was.",
        answer: "I was a beginner, and now I read articles.",
        accept: [
          "I was a beginner, and now I read articles",
          "I was a beginner and now I read articles.",
          "I was a beginner and now I read articles",
        ],
        hint: "О прошлом говорят через was, о сегодняшнем дне — обычным настоящим.",
        why:
          "I was a beginner, and now I read articles. Оборот с have тут не " +
          "нужен: речь о двух точках, а не о длительности.",
      },
      {
        id: "q-pochemu-v-rasskaze-raznye-vremena",
        kind: "choice",
        outcome: "проверять рассказ о занятии: названо дело, срок и уровень",
        prompt:
          "Отчего в рассказе о занятии рядом стоят have studied, was и take?",
        options: [
          { text: "Все три говорят о сроке, но разными словами." },
          { text: "Все три говорят о сегодняшнем дне." },
          { text: "Они говорят о разном: о сроке, о начале и о распорядке.", correct: true },
        ],
        hint: "Спроси у каждой строки, о чём она.",
        why:
          "Они говорят о разном. Длительность требует have и for, начало — " +
          "прошедшего времени, а часы в неделю — обычного настоящего.",
      },
    ],
  },
};

export default module;
