import type { Module } from "@/lib/content/types";

/**
 * Модуль 22 курса «Английский · Elementary»: я это делал.
 *
 * Программа: docs/programma-english-elementary.md, модуль 22 — «рассказывать об
 * опыте»; грамматика: Present Perfect, утверждение, `been`, `ever`, `never`.
 * Строка проверена 24 августа 2026, до написания; разбор с цитатами — там же,
 * под таблицей четвёртой части.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «PRESENT PERFECT».
 *
 * Это первая встреча ученика с ним на ступени, значит время называется здесь и
 * ровно один раз: «Это время называется Present Perfect». Модули 23 и 24
 * работают тем же временем и имени не повторяют — правило курса называет его
 * при первой встрече ВНУТРИ СТУПЕНИ.
 *
 * ВТОРОЕ ИМЯ, КОТОРОЕ ПРИХОДИТСЯ ВВЕСТИ, — «ТРЕТЬЯ ФОРМА ГЛАГОЛА». Русского
 * обиходного имени у неё нет, а придумывать ярлык запрещено. «Третья форма» —
 * настоящий термин русских учебников, и он же связывает урок с модулем 3 этой
 * ступени, где ученик разбирал неправильные глаголы и их вторую форму.
 *
 * ЧЕМУ ЭТО ВРЕМЯ СЛУЖИТ У НАС — ТОЛЬКО ОПЫТУ. English Grammar Profile, PAST,
 * present perfect simple, A2, «USE: EXPERIENCES»: «Can use the present perfect
 * simple to talk about experiences up to now», примеры «I've seen the British
 * Museum», «We have visited the Coliseum and several museums». Прочие случаи
 * того же времени раздаёт программа дальше: `just`, `yet`, `already` — модуль
 * 23, `for` и `since` — модуль 24. Дело не в ступени, а в порядке.
 *
 * `BEEN` ПОДТВЕРДИЛ НЕ ДЕСКРИПТОР, А ПРИМЕР ГРАФЫ. Графа A2 «FORM:
 * AFFIRMATIVE» о слове `been` не говорит ни слова, зато её собственный пример
 * содержит его прямо: «I like Japanese people and I've been to Japan more than
 * three times». Правило проекта «к цитате всегда читается её пример» сработало
 * в нашу пользу: без чтения примера оборот пришлось бы объявлять взятым выше
 * графы, а он подтверждён на A2.
 *
 * `EVER` И `NEVER` ДАЁТ РУКОВОДСТВО, И ЭТО ПРОВЕРЕНО ПО ОБОИМ РАЗБОРАМ.
 * Руководство A2 Key, с. 52, перечень Tenses: «Present perfect simple: recent
 * past with just, indefinite past with yet, already, never, ever; unfinished
 * past with for and since». Строка цела и в разборе `.md`, и в разборе
 * `.text` — двухколоночная вёрстка её не разорвала. English Grammar Profile
 * при этом даёт на A2 графу «FORM: WITH ADVERBS» с примером «I have never seen
 * a competition like that before».
 *
 * ГРАНИЦА, КОТОРУЮ НАДО ЗНАТЬ, И РЕШЕНИЕ ПО НЕЙ.
 *
 * Графа A2 «FORM: AFFIRMATIVE» говорит дословно: «Can use the affirmative form
 * 'have' + '-ed' **with pronouns 'I' and 'we'**, and with a limited range of
 * verbs». Формы `has` там нет вовсе, а B1 «FORM: AFFIRMATIVE» звучит так: «Can
 * use the affirmative forms with a range of pronouns and nouns».
 *
 * То есть третье лицо (`he has seen`) — шаг на B1. **Ряд показывается таблицей
 * целиком, а задания держатся подтверждённых лиц:** утверждение спрашивается у
 * `I` и `we`, вопрос — у `you`. Решение то же, что в модуле 21 с
 * притяжательными, и по тому же доводу: половина парадигмы хуже целой — ученик
 * спросит про «он» на первом же примере, — но спрашивать с него то, чего
 * источник на ступени не подтверждает, мы не будем.
 *
 * ВОПРОС ЗАКОНЕН ВО ВТОРОМ ЛИЦЕ: графа A2 «FORM: QUESTIONS» — «Can use the
 * question form 'have you' + '-ed'», примеры «Have you bought anything?»,
 * «Where have you been?». Отсюда главный оборот модуля `Have you ever been
 * to…?` стоит на двух графах A2 сразу и на строке руководства.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ:
 *
 * - `just`, `yet`, `already`, `for`, `since` — их место в модулях 23 и 24;
 * - различение `has been` и `has gone` — B1, и без третьего лица оно здесь
 *   бессмысленно;
 * - Present Perfect Continuous — B1 целиком.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать карточек, из них новых для ступени двадцать
 * пять: `island`, `mountain`, `ever`, `horse` и `bird` Oxford помечает A1, то есть
 * они с прошлой ступени. Норма (тридцать карточек, пятнадцать новых)
 * выдержана с запасом. Первая редакция шапки писала «все тридцать» — цифра
 * была ложной, нашёл методист.
 *
 * ШЕСТЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000: rugby, fur, tail, wing, brave,
 * amazed — B1. Все шесть стоят в словнике A2 Key. Мерка та же, что в модулях
 * 18–21.
 *
 * СЕМНАДЦАТИ СЛОВ OXFORD 3000 НЕ ЗНАЕТ ВОВСЕ — это не «выше ступени», а
 * отсутствие пометы: dolphin, crocodile, kangaroo, panda, zebra, curry,
 * garlic, chilli, steak, grilled, diving, surfing, cricket, swan, donkey,
 * goat, nest. Словник A2 Key содержит все семнадцать, и мерка берёт их оттуда.
 *
 * ЖИВОТНЫХ В МОДУЛЕ МНОГО НАРОЧНО. Вопрос «Have you ever seen a dolphin?» —
 * самый частый и самый естественный случай опыта на этой ступени, а уроки
 * чтения и слушания идут о парке дикой природы. Слова работают друг на друга,
 * а не набраны для счёта.
 */
const module: Module = {
  slug: "ya-eto-delal",
  title: "Я это делал",

  outcomes: [
    "рассказать об опыте: I have seen a dolphin",
    "строить третью форму глагола: visited, seen, been",
    "назвать то, чего не было в жизни: I have never tried it",
    "спросить об опыте: Have you ever been to Astana?",
    "рассказать о посещённых местах: I have been to the mountains",
    "находить в рассказе о поездке, что человек увидел и попробовал",
    "слышать в разговоре, кто что видел",
    "проверять рассказ об опыте: названо увиденное и дана оценка",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1–5. PAST, present perfect simple. " +
        "A2, «USE: EXPERIENCES»: «Can use the present perfect simple to talk " +
        "about experiences up to now», примеры «I've seen the British Museum», " +
        "«We have visited the Coliseum and several museums» — отсюда весь " +
        "предмет модуля. " +
        "A2, «FORM: AFFIRMATIVE»: «Can use the affirmative form 'have' + '-ed' " +
        "with pronouns 'I' and 'we', and with a limited range of verbs». " +
        "ПРИМЕР ЭТОЙ ЖЕ ГРАФЫ ПОДТВЕРЖДАЕТ `been`, о котором дескриптор молчит: " +
        "«I like Japanese people and I've been to Japan more than three times». " +
        "Отсюда урок 5. " +
        "A2, «FORM: QUESTIONS»: «Can use the question form 'have you' + '-ed' " +
        "with with a limited range of verbs» — предлог `with` в источнике стоит " +
        "ДВАЖДЫ, это его опечатка, и цитата повторяет её как есть. Примеры " +
        "графы: «Have you bought anything?», " +
        "«Where have you been?» — отсюда урок 4. " +
        "A2, «FORM: WITH ADVERBS»: «Can use the present perfect simple with a " +
        "limited range of adverbs in the normal mid position», пример «I have " +
        "never seen a competition like that before, and I love it» — отсюда " +
        "урок 3 и место наречия между have и глаголом. " +
        "ГРАНИЦА ЛИЦ ОБЪЯВЛЕНА В ШАПКЕ: на A2 утверждение идёт от `I` и `we`, а " +
        "«a range of pronouns and nouns» — это B1, «FORM: AFFIRMATIVE» той же " +
        "подкатегории. Таблица показывает ряд целиком, задания держатся " +
        "подтверждённых лиц. " +
        "ЧЕГО НЕТ: `just`, `yet`, `already`, `for`, `since` — их место в " +
        "модулях 23 и 24 по программе, а не по ступени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень Tenses: «Present perfect " +
        "simple: recent past with just, indefinite past with yet, already, " +
        "never, ever; unfinished past with for and since». Отсюда `ever` и " +
        "`never` уроков 3 и 4. " +
        "ОСТОРОЖНО, ЗДЕСЬ ПЕРВАЯ РЕДАКЦИЯ ОПОРЫ СОВРАЛА. Она писала, что строка " +
        "проверена по обоим разборам и вёрстка её не разорвала. Это неправда: " +
        "разбор `.md` вклеил в неё соседний столбец и читается «indefinite past " +
        "with Double genitive: a friend of theirs». Строку подтверждают разбор " +
        "`.text` (там она разорвана на две, но цела) и прямой поиск по PDF " +
        "через `npm run pdf`. Нашёл методист. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем рассказ о поездке» и УРОК ПИСЬМА «Пишем рассказ " +
        "об опыте». с. 66, шкала «Overall written production», графа A2: «Can " +
        "produce a series of simple phrases and sentences linked with simple " +
        "connectors like» — далее в источнике перечислены and, but и because. " +
        "Рассказ об опыте пишется читателям вообще, а не человеку по имени, и " +
        "потому опора здесь — производство текста, а не переписка. " +
        "ШКАЛА ВЫБРАНА НАРОЧНО: с. 81 разводит соседей прямо, Correspondence — " +
        "о переписке, «Notes, messages and forms» — о передаче сведений " +
        "человеку. " +
        "И ОСТОРОЖНО С СОСЕДНЕЙ СТРОКОЙ ТОЙ ЖЕ ШКАЛЫ: «Can produce simple " +
        "isolated phrases and sentences» — это графа A1, проверил; наша графа " +
        "требует связок",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Тридцать карточек модуля взяты из словника ступени; новых для ступени " +
        "двадцать пять, а `island`, `mountain`, `ever`, `horse` и `bird` Oxford " +
        "помечает A1. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `diving (n)` и `surfing (n)` — " +
        "названия занятий, и уроки берут именно их; `grilled (adj)` — " +
        "прилагательное при еде; `steak (n)`, `curry (n)`, `chilli (n)`, " +
        "`garlic (n)` стоят в тематическом списке Food and Drink. " +
        "ШЕСТЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000, И ЭТО ОБЪЯВЛЯЕТСЯ НАРОЧНО: " +
        "rugby, fur, tail, wing, brave, amazed — B1. Все шесть стоят в словнике " +
        "A2 Key, то есть входят в требования экзамена, к которому ведёт " +
        "ступень. Мерка та же, что в модулях 18–21: слово в словнике — слово " +
        "ступени. " +
        "СЕМНАДЦАТИ СЛОВ OXFORD 3000 НЕ ЗНАЕТ ВОВСЕ: dolphin, crocodile, " +
        "kangaroo, panda, zebra, curry, garlic, chilli, steak, grilled, diving, " +
        "surfing, cricket, swan, donkey, goat, nest. Это не «выше ступени», а " +
        "отсутствие пометы: частотные словники составляются по нарицательным " +
        "словам общего обихода, и названия животных с блюдами туда попадают " +
        "неровно. Словник A2 Key содержит все семнадцать",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ya-eto-videl",
      title: "Я это видел: I have seen a dolphin",
      estimatedMinutes: 15,
      outcome: "рассказать об опыте: I have seen a dolphin",

      vozvrat: [{ iz: "svoy-i-sam", zadanie: "z2-dopisat-my" }],

      blocks: [
        {
          id: "vopros-o-zhizni-a-ne-o-dne",
          kind: "explain",
          text: [
            "Айгуль спрашивает Данияра, видел ли он когда-нибудь дельфина.",
            "Ей неважно, когда это было: вчера, три года назад или в детстве.",
            "Важно одно — было это в его жизни или не было.",
            "I have seen a dolphin. — Я видел дельфина.",
            "А строка I saw a dolphin из модуля «Неправильные глаголы» переводится так же.",
            "По-русски обе — «я видел дельфина», и различить их переводом нельзя.",
            "Различает их другое, и об этом весь модуль.",
          ],
        },
        {
          id: "kogda-eto-bylo-i-bylo-li-voobshche",
          kind: "table",
          caption: "Когда это было и было ли вообще",
          zvuchat: [
            "I saw a dolphin last summer.",
            "I have seen a dolphin.",
            "We visited the island in May.",
            "We have visited the island.",
          ],
          head: ["О случае: когда", "Об опыте: было ли", "По-русски и то и другое"],
          rows: [
            [
              "I saw a dolphin last summer.",
              "I have seen a dolphin.",
              "Я видел дельфина.",
            ],
            [
              "We visited the island in May.",
              "We have visited the island.",
              "Мы были на острове.",
            ],
          ],
        },
        {
          id: "iz-chego-sostoit",
          kind: "explain",
          text: [
            "Слева стоит оборот времени: last summer, in May. Это Past Simple — время из модулей о прошлом.",
            "Справа оборота времени нет вовсе, и вместо него появилось слово have.",
            "После have идёт особая форма глагола: seen, visited.",
            "Перевод у левой и правой строки одинаковый, значит выбирают не по нему.",
            "Смотрят на одно: назван ли оборот времени.",
            "Назван — берут Past Simple. Не назван и неважен — берут другое время.",
            "Оно называется Present Perfect и говорит не о том, когда это было, а о том, случалось ли вообще.",
          ],
        },
        {
          id: "ryad-po-licam-have",
          kind: "table",
          caption: "Как это звучит у каждого лица",
          zvuchat: [
            "I have seen",
            "we have seen",
            "you have seen",
            "he has seen",
            "she has seen",
            "they have seen",
          ],
          head: ["Кто", "Как это звучит целиком"],
          rows: [
            ["I", "I have seen"],
            ["we", "we have seen"],
            ["you", "you have seen"],
            ["he", "he has seen"],
            ["she", "she has seen"],
            ["they", "they have seen"],
          ],
        },
        {
          id: "chto-menyaetsya-v-ryadu",
          kind: "explain",
          text: [
            "У четырёх лиц стоит have, и только у he и she — has.",
            "Сам глагол при этом не меняется: seen остаётся seen.",
            "В речи have часто сливается с местоимением: I've seen, we've seen.",
          ],
        },
        {
          id: "ne-i-have-see",
          kind: "note",
          tone: "mistake",
          text:
            "«I have visit the island» — так не говорят.\n\nПосле have глагол " +
            "берёт особую форму: I have visited the island.",
        },
        {
          id: "razgovor-o-delfine",
          kind: "example",
          caption: "Разговор о дельфине",
          razgovor: true,
          zvuchat: [
            "I have seen a dolphin!",
            "Wow! Where?",
            "We have visited a big island, and the dolphins were near the boat.",
          ],
          text:
            "I have seen a dolphin!\nWow! Where?\nWe have visited a big island, and the dolphins were near the boat.",
          perevod: {
            "I have seen a dolphin!": "Я видел дельфина!",
            "Wow! Where?": "Ого! Где?",
            "We have visited a big island, and the dolphins were near the boat.":
              "Мы были на большом острове, и дельфины плавали у лодки.",
          },
          explain:
            "Первая строка говорит об опыте: оборота времени в ней нет, и потому " +
            "have seen. В третьей строке рядом стоят оба времени: have visited — " +
            "об опыте, а were — о том самом случае.",
        },
        {
          id: "slovar-poezdki-k-moryu",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "dolphin", translation: "дельфин", example: "I have seen a dolphin!", hint: "/ˈdɒlfɪn/" },
            { term: "island", translation: "остров", example: "We have visited a big island.", hint: "/ˈaɪlənd/" },
            { term: "mountain", translation: "гора", example: "We have visited the mountains.", hint: "/ˈmaʊntɪn/" },
            { term: "wow", translation: "ух ты", example: "Wow! Where?", hint: "/waʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-ob-opyte",
          kind: "choice",
          prompt:
            "Данияр говорит, что дельфина он видел. Когда — он не называет. Как он скажет?",
          options: [
            { text: "I saw a dolphin." },
            { text: "I have seen a dolphin.", correct: true },
            { text: "I have see a dolphin." },
          ],
          hint: "Оборота времени в строке нет, значит речь об опыте.",
          why:
            "I have seen a dolphin. Запись I saw ждёт оборота времени, а в I have " +
            "see глагол остался без особой формы.",
        },
        {
          id: "z2-dopisat-have",
          kind: "gap",
          prompt: "Речь о себе и об опыте. Допиши слово.",
          before: "I ",
          after: " visited the island.",
          answer: "have",
          hint: "Это слово стоит перед глаголом и говорит, что речь об опыте.",
          why:
            "I have visited the island. Слово has сюда не встанет: оно идёт к he " +
            "и she.",
        },
        {
          id: "z3-otmetit-ob-opyte",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят об опыте, а не о случае.",
          parts: [
            { text: "I have seen a dolphin.", selectable: true, correct: true },
            { text: " · " },
            { text: "We saw a dolphin on Monday.", selectable: true },
            { text: " · " },
            { text: "We have visited the mountains.", selectable: true, correct: true },
            { text: " · " },
            { text: "I visited the island in May.", selectable: true },
          ],
          hint: "Спроси у каждой строки: есть ли в ней оборот времени?",
          why:
            "Первая и третья. Во второй и четвёртой стоит оборот времени — on " +
            "Monday, in May, — и это разговор о случае, а не об опыте.",
        },
        {
          id: "z4-sobrat-ob-ostrove",
          kind: "order",
          prompt: "Собери строку: мы бывали на этом острове. День не называют.",
          items: ["visited", "We have", "this island."],
          answer: [1, 0, 2],
          hint: "Начни с того, кто говорит, а слово о глаголе поставь следом.",
          why:
            "We have visited this island. Слово have идёт сразу за тем, кто " +
            "говорит, а глагол — за ним.",
        },
        {
          id: "z5-napisat-o-delfine",
          kind: "short",
          prompt:
            "Скажи по-английски, что дельфина доводилось видеть. Дня не называй, начни с I have.",
          answer: "I have seen a dolphin.",
          accept: [
            "I have seen a dolphin",
            "I have seen the dolphin.",
            "I have seen the dolphin",
          ],
          hint: "После have глагол берёт особую форму.",
          why:
            "I have seen a dolphin. Форма saw ждала бы оборота времени, а после " +
            "have стоит третья.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "tretya-forma",
      title: "Третья форма: visited, seen, been",
      estimatedMinutes: 15,
      outcome: "строить третью форму глагола: visited, seen, been",

      blocks: [
        {
          id: "posle-have-osobaya-forma",
          kind: "explain",
          text: [
            "После have у глагола стоит не обычная форма, а особая.",
            "У русского такого нет, и запомнить её приходится отдельно.",
            "Эту форму зовут третьей: у глагола их три, и это последняя.",
            "Первая — обычная, вторая — о прошлом, третья — после have.",
          ],
        },
        {
          id: "tri-formy-glagola",
          kind: "table",
          caption: "Три формы глагола",
          zvuchat: [
            "visited",
            "tried",
            "seen",
            "eaten",
            "been",
          ],
          head: ["Обычная", "О прошлом", "После have"],
          rows: [
            ["visit", "visited", "visited"],
            ["try", "tried", "tried"],
            ["see", "saw", "seen"],
            ["eat", "ate", "eaten"],
            ["be", "was, were", "been"],
          ],
        },
        {
          id: "kak-eto-ustroeno-s-formami",
          kind: "explain",
          text: [
            "У большинства глаголов вторая и третья формы одинаковы: visited, tried.",
            "Они берут окончание -ed, как в разговоре о прошлом.",
            "У глаголов из модуля «Неправильные глаголы» третья форма бывает двух видов.",
            "Своя, третья по счёту: see — saw — seen, eat — ate — eaten, be — was и were — been.",
            "Или та же, что вторая: meet — met — met, buy — bought — bought, have — had — had.",
            "Такие формы не выводятся правилом, их запоминают вместе со второй.",
          ],
        },
        {
          id: "tretya-forma-desyati-glagolov",
          kind: "table",
          caption: "Третья форма у глаголов из модуля «Неправильные глаголы»",
          zvuchat: [
            "see — saw — seen",
            "eat — ate — eaten",
            "go — went — gone",
            "take — took — taken",
            "write — wrote — written",
            "do — did — done",
            "meet — met — met",
            "buy — bought — bought",
            "have — had — had",
            "get — got — got",
            "come — came — come",
          ],
          // Три одинаковых написания читаются по-разному, и синтез сам этого не
          // различит: первая форма /riːd/, вторая и третья /red/. Поэтому здесь
          // не `zvuchat`, а `zvuk` — произносится не то, что напечатано.
          zvuk: { "read — read — read": "reed — red — red" },
          head: ["Глагол", "Три формы"],
          rows: [
            ["видеть", "see — saw — seen"],
            ["есть", "eat — ate — eaten"],
            ["идти, ехать", "go — went — gone"],
            ["брать", "take — took — taken"],
            ["писать", "write — wrote — written"],
            ["делать", "do — did — done"],
            ["встречать", "meet — met — met"],
            ["покупать", "buy — bought — bought"],
            ["иметь", "have — had — had"],
            ["получать", "get — got — got"],
            ["приходить", "come — came — come"],
            ["читать", "read — read — read"],
          ],
        },
        {
          id: "chto-vidno-po-tablice",
          kind: "explain",
          text: [
            "В шести строках сверху третья форма своя: seen, eaten, gone.",
            "Из шести нижних четыре берут вторую форму без изменений: met, bought, had, got.",
            "У come третья форма совпадает не со второй, а с первой, а у read все три одинаковы.",
            "Read при этом читается по-разному: первая /riːd/, вторая и третья /red/.",
          ],
        },
        {
          id: "ne-i-have-saw",
          kind: "note",
          tone: "mistake",
          text:
            "«I have saw a crocodile» — так не говорят.\n\nПосле have идёт " +
            "третья форма, а saw — вторая: I have seen a crocodile.",
        },
        {
          id: "razgovor-o-ede",
          kind: "example",
          caption: "Разговор о еде",
          razgovor: true,
          zvuchat: [
            "I have tried this curry.",
            "And I have eaten a grilled steak here.",
            "With garlic?",
            "With garlic and chilli. It was very hot!",
          ],
          text:
            "I have tried this curry.\nAnd I have eaten a grilled steak here.\nWith garlic?\nWith garlic and chilli. It was very hot!",
          perevod: {
            "I have tried this curry.": "Я пробовал это карри.",
            "And I have eaten a grilled steak here.":
              "А я ел здесь стейк на гриле.",
            "With garlic?": "С чесноком?",
            "With garlic and chilli. It was very hot!":
              "С чесноком и перцем чили. Было очень остро!",
          },
          explain:
            "Глагол try берёт -ed, как большинство: tried. А eat берёт свою " +
            "форму: eaten. В последней строке стоит was — там речь уже о том " +
            "самом случае, а не об опыте.",
        },
        {
          id: "slovar-edy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "curry", translation: "карри", example: "I have tried this curry.", hint: "/ˈkʌri/" },
            { term: "crocodile", translation: "крокодил", example: "I have seen a crocodile.", hint: "/ˈkrɒkədaɪl/" },
            { term: "steak", translation: "стейк", example: "I have eaten a grilled steak.", hint: "/steɪk/" },
            { term: "grilled", translation: "жаренный на решётке", example: "I have eaten a grilled steak.", hint: "/grɪld/" },
            { term: "garlic", translation: "чеснок", example: "With garlic and chilli.", hint: "/ˈgɑːlɪk/" },
            { term: "chilli", translation: "острый перец", example: "With garlic and chilli.", hint: "/ˈtʃɪli/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-tretyu-formu",
          kind: "gap",
          prompt: "Глагол see стоит после have. Допиши его третью форму.",
          before: "I have ",
          after: " a crocodile.",
          answer: "seen",
          hint: "Вторая форма этого глагола — saw, а третья другая.",
          why:
            "I have seen a crocodile. Форма saw говорит о прошлом, а после have " +
            "нужна третья.",
        },
        {
          id: "z2-vybrat-vernuyu-formu",
          kind: "choice",
          prompt: "В какой строке третья форма поставлена верно?",
          options: [
            { text: "I have ate a grilled steak." },
            { text: "I have eat a grilled steak." },
            { text: "I have eaten a grilled steak.", correct: true },
          ],
          hint: "Три формы этого глагола: eat, ate, eaten.",
          why:
            "I have eaten a grilled steak. Форма ate — вторая, а eat — обычная; " +
            "после have стоит третья.",
        },
        {
          id: "z3-otmetit-tretyu-formu",
          kind: "hottext",
          prompt: "Отметь слова, которые стоят в третьей форме.",
          parts: [
            { text: "tried", selectable: true, correct: true },
            { text: " · " },
            { text: "saw", selectable: true },
            { text: " · " },
            { text: "been", selectable: true, correct: true },
            { text: " · " },
            { text: "ate", selectable: true },
          ],
          hint: "Третья форма — та, что встаёт после have.",
          why:
            "Tried и been. Формы saw и ate — вторые: они говорят о прошлом и " +
            "после have не встают.",
        },
        {
          id: "z4-sobrat-o-karri",
          kind: "order",
          prompt: "Собери строку: я пробовал это карри.",
          items: ["this curry.", "tried", "I have"],
          answer: [2, 1, 0],
          hint: "Глагол try берёт окончание -ed, как большинство.",
          why:
            "I have tried this curry. Форма tried годится и второй, и третьей: " +
            "у таких глаголов они совпадают.",
        },
        {
          id: "z5-ispravit-have-saw",
          kind: "short",
          prompt:
            "Ученик написал: I have saw a dolphin here. Запиши строку без ошибки.",
          answer: "I have seen a dolphin here.",
          accept: ["I have seen a dolphin here"],
          hint: "После have нужна третья форма, а стоит вторая.",
          why:
            "I have seen a dolphin here. Три формы этого глагола: see, saw, seen.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nikogda-ne-videl",
      title: "Никогда не видел: I have never seen",
      estimatedMinutes: 14,
      outcome: "назвать то, чего не было в жизни: I have never tried it",

      blocks: [
        {
          id: "chego-ne-bylo-ni-razu",
          kind: "explain",
          text: [
            "Про опыт говорят и обратное: этого в жизни не было ни разу.",
            "По-русски тут стоит «никогда не»: я никогда не видел кенгуру.",
            "По-английски отрицание одно, и это слово never.",
            "Стоит оно в строго определённом месте.",
          ],
        },
        {
          id: "gde-stoit-never",
          kind: "table",
          caption: "Где стоит never",
          zvuchat: [
            "I have seen a panda.",
            "I have never seen a panda.",
            "We have tried chilli.",
            "We have never tried chilli.",
          ],
          head: ["Было", "Не было ни разу"],
          rows: [
            ["I have seen a panda.", "I have never seen a panda."],
            ["We have tried chilli.", "We have never tried chilli."],
          ],
        },
        {
          id: "kak-rabotaet-never",
          kind: "explain",
          text: [
            "Слово never встаёт между have и третьей формой глагола.",
            "Больше в строке ничего не меняется: ни have, ни сам глагол.",
            "Второго отрицания при нём не ставят: never отрицает само.",
            "По-русски отрицаний два — «никогда не», — и это сбивает.",
          ],
        },
        {
          id: "ne-havent-never",
          kind: "note",
          tone: "mistake",
          text:
            "«I haven't never seen a panda» — так не говорят.\n\nОтрицание " +
            "здесь одно: I have never seen a panda.",
        },
        {
          id: "razgovor-v-parke-zhivotnyh",
          kind: "example",
          caption: "Разговор в парке",
          razgovor: true,
          zvuchat: [
            "Look, a kangaroo!",
            "I have never seen a kangaroo before!",
            "And a crocodile? There is one near the water.",
            "I have never seen a crocodile before. This is a good day!",
          ],
          text:
            "Look, a kangaroo!\nI have never seen a kangaroo before!\nAnd a crocodile? There is one near the water.\nI have never seen a crocodile before. This is a good day!",
          perevod: {
            "Look, a kangaroo!": "Смотри, кенгуру!",
            "I have never seen a kangaroo before!":
              "Я никогда раньше не видел кенгуру!",
            "And a crocodile? There is one near the water.":
              "А крокодила? Вон он у воды.",
            "I have never seen a crocodile before. This is a good day!":
              "Крокодила я тоже никогда раньше не видел. Хороший день!",
          },
          explain:
            "В обеих строках never стоит между have и третьей формой. Слово not " +
            "рядом не появляется ни разу: одного отрицания довольно. А before в " +
            "конце говорит «до этого дня»: сейчас-то оба зверя перед глазами.",
        },
        {
          id: "slovar-parka",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "kangaroo", translation: "кенгуру", example: "I have never seen a kangaroo.", hint: "/ˌkæŋgəˈruː/" },
            { term: "panda", translation: "панда", example: "I have never seen a panda.", hint: "/ˈpændə/" },
            { term: "zebra", translation: "зебра", example: "I have seen a zebra.", hint: "/ˈzebrə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-never",
          kind: "gap",
          prompt: "Панды в твоей жизни не было ни разу. Допиши слово.",
          before: "I have ",
          after: " seen a panda.",
          answer: "never",
          hint: "Место этого слова — между have и глаголом.",
          why:
            "I have never seen a panda. Слово not сюда не встанет: у этого " +
            "случая своё слово.",
        },
        {
          id: "z2-vybrat-odno-otricanie",
          kind: "choice",
          prompt: "Кенгуру в твоей жизни не было ни разу. Как это сказать?",
          options: [
            { text: "I haven't never seen a kangaroo." },
            { text: "I have never seen a kangaroo.", correct: true },
            { text: "I never seen a kangaroo." },
          ],
          hint: "Отрицание в такой строке одно.",
          why:
            "I have never seen a kangaroo. В первой записи отрицаний два, а " +
            "хватает одного; в третьей потерялось само have.",
        },
        {
          id: "z3-otmetit-gde-never-na-meste",
          kind: "hottext",
          prompt: "Отметь строки, где never стоит на своём месте.",
          parts: [
            { text: "I have never tried chilli.", selectable: true, correct: true },
            { text: " · " },
            { text: "I never tried chilli have.", selectable: true },
            { text: " · " },
            { text: "We have never seen a zebra.", selectable: true, correct: true },
            { text: " · " },
            { text: "We have seen never a zebra.", selectable: true },
          ],
          hint: "Слово стоит между have и третьей формой глагола.",
          why:
            "Первая и третья. Во второй и четвёртой never ушло в конец или " +
            "разорвало have с глаголом, а его обычное место — между ними.",
        },
        {
          id: "z4-sobrat-o-krokodile",
          kind: "order",
          prompt: "Собери строку: мы никогда не видели крокодила.",
          items: ["never", "a crocodile.", "We have", "seen"],
          answer: [2, 0, 3, 1],
          hint: "Порядок такой: кто, have, never, глагол, вещь.",
          why:
            "We have never seen a crocodile. Слово never встаёт ровно между have " +
            "и seen.",
        },
        {
          id: "z5-napisat-o-nikogda",
          kind: "short",
          prompt:
            "Скажи по-английски, что карри в твоей жизни не было ни разу. Начни с I have.",
          answer: "I have never tried curry.",
          accept: [
            "I have never tried curry",
            "I have never tried the curry.",
            "I have never tried the curry",
          ],
          hint: "Отрицание одно, и оно стоит после have.",
          why:
            "I have never tried curry. Глагол try берёт -ed, а never стоит перед " +
            "ним.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ty-kogda-nibud",
      title: "Ты когда-нибудь: Have you ever been to Astana?",
      estimatedMinutes: 15,
      outcome: "спросить об опыте: Have you ever been to Astana?",

      blocks: [
        {
          id: "sprosit-o-chuzhom-opyte",
          kind: "explain",
          text: [
            "Про свой опыт рассказывают, а про чужой спрашивают.",
            "По-русски спрашивают «ты когда-нибудь…?».",
            "По-английски слово have выходит в начало, а внутрь встаёт ever.",
          ],
        },
        {
          id: "rasskaz-i-vopros",
          kind: "table",
          caption: "Рассказ и вопрос",
          zvuchat: [
            "You have tried surfing.",
            "Have you ever tried surfing?",
            "You have seen a dolphin.",
            "Have you ever seen a dolphin?",
          ],
          head: ["Рассказ", "Вопрос"],
          rows: [
            ["You have tried surfing.", "Have you ever tried surfing?"],
            ["You have seen a dolphin.", "Have you ever seen a dolphin?"],
          ],
        },
        {
          id: "kak-ustroen-vopros-ob-opyte",
          kind: "explain",
          text: [
            "Слово have уходит в начало строки, а тот, о ком речь, встаёт за ним.",
            "Слово ever идёт следом и значит «когда-нибудь в жизни».",
            "Третья форма глагола остаётся на месте: tried, seen.",
            "Слово ever и говорит, что спрашивают про всю жизнь целиком.",
          ],
        },
        {
          id: "korotkie-otvety-have",
          kind: "table",
          caption: "Короткие ответы",
          zvuchat: [
            "Yes, I have.",
            "No, I haven't.",
          ],
          head: ["Да", "Нет"],
          rows: [
            ["Yes, I have.", "No, I haven't."],
          ],
        },
        {
          id: "ne-do-you-ever-seen",
          kind: "note",
          tone: "mistake",
          text:
            "«Do you ever seen a dolphin?» — так не спрашивают.\n\nВ начало " +
            "выходит have, а не do: Have you ever seen a dolphin?",
        },
        {
          id: "razgovor-o-sporte",
          kind: "example",
          caption: "Алим и Данияр о видах спорта",
          razgovor: true,
          zvuchat: [
            "Have you ever tried surfing?",
            "No, I haven't. And you?",
            "Yes, I have. I have tried diving too.",
            "Have you ever played rugby or cricket?",
          ],
          text:
            "Have you ever tried surfing?\nNo, I haven't. And you?\nYes, I have. I have tried diving too.\nHave you ever played rugby or cricket?",
          perevod: {
            "Have you ever tried surfing?":
              "Ты когда-нибудь пробовал сёрфинг?",
            "No, I haven't. And you?": "Нет. А ты?",
            "Yes, I have. I have tried diving too.":
              "Да. И дайвинг я тоже пробовал.",
            "Have you ever played rugby or cricket?":
              "А в регби или крикет ты когда-нибудь играл?",
          },
          explain:
            "В обоих вопросах have стоит первым, а ever — сразу за you. Короткий " +
            "ответ повторяет только have: Yes, I have. No, I haven't.",
        },
        {
          id: "slovar-sporta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "ever", translation: "когда-нибудь", example: "Have you ever tried surfing?", hint: "/ˈevə/" },
            { term: "surfing", translation: "сёрфинг", example: "Have you ever tried surfing?", hint: "/ˈsɜːfɪŋ/" },
            { term: "diving", translation: "ныряние с аквалангом", example: "I have tried diving too.", hint: "/ˈdaɪvɪŋ/" },
            { term: "rugby", translation: "регби", example: "Have you ever played rugby?", hint: "/ˈrʌgbi/" },
            { term: "cricket", translation: "крикет", example: "Have you ever played cricket?", hint: "/ˈkrɪkɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vopros",
          kind: "choice",
          prompt: "Спроси, пробовал ли собеседник сёрфинг хоть раз в жизни.",
          options: [
            { text: "Do you ever tried surfing?" },
            { text: "Have you ever tried surfing?", correct: true },
            { text: "You have ever tried surfing?" },
          ],
          hint: "В начало вопроса выходит то же слово, что стоит перед глаголом.",
          why:
            "Have you ever tried surfing? Слово do к этому времени не подходит, " +
            "а в третьей записи have осталось на месте рассказа.",
        },
        {
          id: "z2-dopisat-ever",
          kind: "gap",
          prompt: "Спрашивают про всю жизнь, а не про вчера. Допиши слово.",
          before: "Have you ",
          after: " seen a dolphin?",
          answer: "ever",
          hint: "Это слово значит «когда-нибудь» и стоит сразу после you.",
          why:
            "Have you ever seen a dolphin? Без него вопрос был бы про недавнее.",
        },
        {
          id: "z3-otvetit-korotko-o-regbi",
          kind: "short",
          prompt:
            "Тебя спросили: Have you ever played rugby? Ответь коротко — нет.",
          answer: "No, I haven't.",
          accept: ["No, I haven't", "No, I have not.", "No, I have not"],
          hint: "Короткий ответ повторяет только слово перед глаголом.",
          why:
            "No, I haven't. Глагол played в ответе не повторяют.",
        },
        {
          id: "z4-sobrat-vopros-o-nyryanii",
          kind: "order",
          prompt: "Собери вопрос: приходилось ли собеседнику пробовать ныряние?",
          items: ["you ever", "diving?", "Have", "tried"],
          answer: [2, 0, 3, 1],
          hint: "Начни со слова, которое вышло в начало из рассказа.",
          why:
            "Have you ever tried diving? Порядок такой: have, кто, ever, третья " +
            "форма.",
        },
        {
          id: "z5-sprosit-o-krikete",
          kind: "short",
          prompt:
            "Спроси по-английски, играл ли собеседник когда-нибудь в крикет. Начни с Have.",
          answer: "Have you ever played cricket?",
          accept: ["Have you ever played cricket"],
          hint: "После you встаёт слово о всей жизни, а глагол берёт третью форму.",
          why:
            "Have you ever played cricket? Глагол play берёт -ed, как " +
            "большинство.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ya-tam-byl",
      title: "Я там был: I have been to Astana",
      estimatedMinutes: 14,
      outcome: "рассказать о посещённых местах: I have been to the mountains",

      blocks: [
        {
          id: "byval-li-ty-tam",
          kind: "explain",
          text: [
            "«Доводилось бывать в Астане?» — по-русски спрашивают так, не называя, когда это было.",
            "Речь не о том, когда именно, а о том, случалось ли вообще.",
            "У глагола be для этого есть третья форма — been.",
          ],
        },
        {
          id: "byl-i-byval",
          kind: "table",
          caption: "Был в тот раз и бывал вообще",
          zvuchat: [
            "I was in Astana last May.",
            "I have been to Astana.",
            "We were on a horse farm.",
            "We have been to a horse farm.",
          ],
          head: ["О том случае", "Об опыте"],
          rows: [
            ["I was in Astana last May.", "I have been to Astana."],
            ["We were on a horse farm.", "We have been to a horse farm."],
          ],
        },
        {
          id: "kak-ustroeno-been-to",
          kind: "explain",
          text: [
            "Слева стоит оборот времени и слово was — это разговор о том случае.",
            "Справа оборота времени нет, стоит have been, и это разговор обо всей жизни.",
            "Когда говорят, что где-то побывал и вернулся, ставят to: I have been to Astana.",
            "Оборот значит, что человек там бывал и уже вернулся.",
          ],
        },
        {
          id: "ne-have-been-in",
          kind: "note",
          tone: "mistake",
          text:
            "«I have been to Astana yesterday» — так не говорят.\n\nОборот " +
            "говорит о жизни целиком, и оборот времени при нём не ставят: I have " +
            "been to Astana.",
        },
        {
          id: "razgovor-o-mestah",
          kind: "example",
          caption: "Дана расспрашивает Алима о поездках",
          razgovor: true,
          zvuchat: [
            "Have you ever been to the mountains?",
            "Yes, I have. And I have been to a farm with horses and goats.",
            "A farm? Were there donkeys?",
            "Two donkeys and a swan. The swan was very loud!",
          ],
          text:
            "Have you ever been to the mountains?\nYes, I have. And I have been to a farm with horses and goats.\nA farm? Were there donkeys?\nTwo donkeys and a swan. The swan was very loud!",
          perevod: {
            "Have you ever been to the mountains?":
              "Ты когда-нибудь бывал в горах?",
            "Yes, I have. And I have been to a farm with horses and goats.":
              "Да. И на ферме с лошадьми и козами я тоже бывал.",
            "A farm? Were there donkeys?": "На ферме? Ослы там были?",
            "Two donkeys and a swan. The swan was very loud!":
              "Два осла и лебедь. Лебедь был очень громкий!",
          },
          explain:
            "В первых двух строках речь об опыте, и потому have been to. В " +
            "третьей и четвёртой разговор перешёл на тот самый случай, и там уже " +
            "стоит were и was.",
        },
        {
          id: "slovar-fermy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "horse", translation: "лошадь", example: "A farm with horses and goats.", hint: "/hɔːs/" },
            { term: "goat", translation: "коза", example: "A farm with horses and goats.", hint: "/gəʊt/" },
            { term: "donkey", translation: "осёл", example: "Were there donkeys?", hint: "/ˈdɒŋki/" },
            { term: "swan", translation: "лебедь", example: "The swan was very loud!", hint: "/swɒn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-to",
          kind: "gap",
          prompt: "После been ставят короткое слово. Допиши его.",
          before: "I have been ",
          after: " Astana.",
          answer: "to",
          hint: "Это не in: у оборота своё слово.",
          why:
            "I have been to Astana. Это то самое короткое слово, которое " +
            "присоединяет место к been.",
        },
        {
          id: "z2-vybrat-ob-opyte-mesta",
          kind: "choice",
          prompt:
            "Скажи об опыте: в горах бывать доводилось. Когда именно — неважно.",
          options: [
            { text: "I was in the mountains." },
            { text: "I have been in the mountains." },
            { text: "I have been to the mountains.", correct: true },
          ],
          hint: "Оборота времени нет, значит речь об опыте; а при been стоит to.",
          why:
            "I have been to the mountains. Запись I was ждёт оборота времени, а have been in " +
            "the mountains говорит не о поездке, а о том, сколько человек там " +
            "пробыл.",
        },
        {
          id: "z3-otmetit-o-byvanii",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят о жизни, а не о том дне.",
          parts: [
            { text: "I have been to a horse farm.", selectable: true, correct: true },
            { text: " · " },
            { text: "We were on the island in May.", selectable: true },
            { text: " · " },
            { text: "We have been to the mountains.", selectable: true, correct: true },
            { text: " · " },
            { text: "The swan was very loud.", selectable: true },
          ],
          hint: "Ищи, где стоит оборот времени и где стоит was или were.",
          why:
            "Первая и третья. Во второй стоит оборот времени in May, а в четвёртой " +
            "was: это рассказ о том самом случае.",
        },
        {
          id: "z4-sobrat-o-ferme",
          kind: "order",
          prompt: "Собери строку: мы бывали на ферме.",
          items: ["been", "a farm.", "We have", "to"],
          answer: [2, 0, 3, 1],
          hint: "Короткое слово стоит между been и местом.",
          why:
            "We have been to a farm. Без to строка оборвалась бы: место надо " +
            "чем-то присоединить.",
        },
        {
          id: "z5-sprosit-ob-ostrove",
          kind: "short",
          prompt:
            "Спроси по-английски, бывал ли собеседник когда-нибудь на острове. Начни с Have.",
          answer: "Have you ever been to an island?",
          accept: [
            "Have you ever been to an island",
            "Have you ever been to the island?",
            "Have you ever been to the island",
          ],
          hint: "Соедини вопрос об опыте с оборотом о месте.",
          why:
            "Have you ever been to an island? Слово ever стоит после you, а to — " +
            "после been.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-rasskaz-o-poezdke",
      title: "Читаем рассказ о поездке",
      estimatedMinutes: 13,
      outcome: "находить в рассказе о поездке, что человек увидел и попробовал",

      blocks: [
        {
          id: "zachem-chitat-rasskaz-o-poezdke",
          kind: "explain",
          text: [
            "Люди пишут о поездках, чтобы посоветовать место другим.",
            "В таком рассказе ищут две вещи: что человек видел и что делал.",
            "Ниже рассказ, и вопросы будут о нём.",
          ],
        },
        {
          id: "rasskaz-o-parke",
          kind: "text",
          title: "A day at the wildlife park",
          genre: "article",
          body: [
            "I have been to many parks, but this one is the best.",
            "I have seen a monkey with a very long tail and two young pandas.",
            "Their fur is thick, and they eat all day.",
            "I have never seen a bird's nest so close: it was near the path.",
            "A swan opened its wings, and everybody said wow.",
            "I have tried the food there too: a grilled steak with garlic.",
          ],
          glossary: [
            { term: "wildlife park", translation: "парк дикой природы" },
            { term: "thick", translation: "густой" },
            { term: "bird", translation: "птица" },
            { term: "monkey", translation: "обезьяна" },
            { term: "path", translation: "тропинка" },
          ],
        },
        {
          id: "kak-iskat-v-rasskaze-ob-opyte",
          kind: "note",
          tone: "info",
          text:
            "Опыт ищут по слову have и третьей форме глагола.\n\nА рассказ о " +
            "том самом дне — по глаголу, при котором have нет: opened, said, was.",
        },
        {
          id: "slovar-dikoy-prirody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "fur", translation: "мех, шерсть", example: "Their fur is thick.", hint: "/fɜː/" },
            { term: "tail", translation: "хвост", example: "A monkey with a very long tail.", hint: "/teɪl/" },
            { term: "wing", translation: "крыло", example: "A swan opened its wings.", hint: "/wɪŋ/" },
            { term: "nest", translation: "гнездо", example: "I have never seen a bird's nest so close.", hint: "/nest/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoe-zhivotnoe-s-hvostom",
          about: "rasskaz-o-parke",
          kind: "short",
          prompt: "У какого животного был длинный хвост? Ответь одним словом по-английски.",
          answer: "monkey",
          accept: ["Monkey", "a monkey"],
          hint: "Про хвост сказано во второй строке.",
          why: "I have seen a monkey with a very long tail.",
        },
        {
          id: "z2-chego-avtor-ne-videl-ranshe",
          about: "rasskaz-o-parke",
          kind: "choice",
          prompt: "Чего автор не видел так близко ни разу до этого?",
          options: [
            { text: "Панду." },
            { text: "Птичье гнездо.", correct: true },
            { text: "Лебедя." },
          ],
          hint: "Ищи строку со словом never.",
          why:
            "Птичье гнездо: I have never seen a bird's nest so close. Слово " +
            "never и говорит, что раньше такого не было.",
        },
        {
          id: "z3-skolko-pand",
          about: "rasskaz-o-parke",
          kind: "short",
          prompt: "Сколько панд видел автор? Ответь числом.",
          answer: "2",
          accept: ["two", "две"],
          hint: "Про панд сказано во второй строке.",
          why: "I have seen a monkey with a very long tail and two young pandas.",
        },
        {
          id: "z4-otmetit-verno-o-parke",
          about: "rasskaz-o-parke",
          kind: "hottext",
          prompt: "Отметь то, что верно по рассказу.",
          parts: [
            { text: "автор бывал и в других парках", selectable: true, correct: true },
            { text: " · " },
            { text: "автор пробовал там еду", selectable: true, correct: true },
            { text: " · " },
            { text: "панды едят только утром", selectable: true },
            { text: " · " },
            { text: "гнездо было далеко", selectable: true },
          ],
          hint: "Про другие парки сказано в самой первой строке.",
          why:
            "Верно первое и второе. Панды едят весь день, а гнездо было близко — " +
            "у самой тропинки.",
        },
        {
          id: "z5-pochemu-have-been",
          about: "rasskaz-o-parke",
          kind: "choice",
          prompt:
            "Первая строка: I have been to many parks. Что это значит?",
          options: [
            { text: "Автор сейчас в этих парках." },
            { text: "Автор бывал во многих парках раньше.", correct: true },
            { text: "Автор поедет в парки завтра." },
          ],
          hint: "Оборот have been to говорит о всей жизни, а не о дне.",
          why:
            "Автор бывал во многих парках раньше. Оборот have been to и значит " +
            "«бывал и вернулся».",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-kto-chto-videl",
      title: "Слушаем, кто что видел",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, кто что видел",

      blocks: [
        {
          id: "zachem-slushat-o-vidennom",
          kind: "explain",
          text: [
            "Двое сравнивают, кто где бывал и что видел.",
            "Слушать надо, у кого какой опыт есть, а какого нет.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-tom-kto-chto-videl",
          kind: "audio",
          caption: "Разговор об опыте",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Have you ever been to a wildlife park? — Yes, I have. I have seen a " +
            "monkey there. — And a dolphin? — No, I have never seen a dolphin. " +
            "But I have tried diving! — Diving? You are brave!",
        },
        {
          id: "chto-slushat-ob-opyte",
          kind: "note",
          tone: "info",
          text:
            "Слушай, где звучит have, а где have never.\n\nПервое говорит, что " +
            "опыт есть, второе — что его не было ни разу.",
        },
        {
          id: "slovar-obezyany",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "monkey", translation: "обезьяна", example: "I have seen a monkey there.", hint: "/ˈmʌŋki/" },
            { term: "brave", translation: "смелый", example: "Diving? You are brave!", hint: "/breɪv/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kogo-videl-v-parke",
          about: "zapis-o-tom-kto-chto-videl",
          kind: "short",
          prompt: "Послушай. Кого он видел в парке? Ответь одним словом по-английски.",
          answer: "monkey",
          accept: ["Monkey", "a monkey"],
          hint: "Ответ звучит во второй реплике.",
          why: "I have seen a monkey there.",
        },
        {
          id: "z2-videl-li-delfina",
          about: "zapis-o-tom-kto-chto-videl",
          kind: "choice",
          prompt: "Послушай. Видел ли он дельфина?",
          options: [
            { text: "Да, видел." },
            { text: "Нет, ни разу.", correct: true },
            { text: "Об этом не говорили." },
          ],
          hint: "Про дельфина говорят в последних двух репликах.",
          why:
            "Нет, ни разу: I have never seen a dolphin. Слово never и говорит, " +
            "что этого не было.",
        },
        {
          id: "z3-chto-on-proboval",
          about: "zapis-o-tom-kto-chto-videl",
          kind: "short",
          prompt: "Послушай. Что он пробовал? Ответь одним словом по-английски.",
          answer: "diving",
          accept: ["Diving"],
          hint: "Об этом сказано в самой последней реплике.",
          why: "But I have tried diving!",
        },
        {
          id: "z4-otmetit-uslyshannoe-ob-opyte",
          about: "zapis-o-tom-kto-chto-videl",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "он бывал в парке дикой природы", selectable: true, correct: true },
            { text: " · " },
            { text: "он ни разу не видел дельфина", selectable: true, correct: true },
            { text: " · " },
            { text: "он видел там крокодила", selectable: true },
            { text: " · " },
            { text: "он играл в регби", selectable: true },
          ],
          hint: "Про парк спрашивают в самом начале.",
          why:
            "Прозвучали первое и второе. Про крокодила и регби речи не было " +
            "вовсе.",
        },
        {
          id: "z5-chto-znachit-never-v-zapisi",
          about: "zapis-o-tom-kto-chto-videl",
          kind: "choice",
          prompt: "В записи звучит I have never seen. Что это значит?",
          options: [
            { text: "Он видел это давно." },
            { text: "Он не видел этого ни разу в жизни.", correct: true },
            { text: "Он не хочет это видеть." },
          ],
          hint: "Слово never говорит не о желании, а об опыте.",
          why:
            "Он не видел этого ни разу в жизни. Про давнее сказали бы I saw it " +
            "long ago.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-tom-chto-videl",
      title: "Пишем рассказ об опыте",
      estimatedMinutes: 15,
      outcome: "проверять рассказ об опыте: названо увиденное и дана оценка",

      blocks: [
        {
          id: "zachem-proveryat-rasskaz-ob-opyte",
          kind: "explain",
          text: [
            "Ученик написал: «I have been to a park. It was good.»",
            "Читателю это не говорит ничего: непонятно, что он там видел.",
            "В рассказе об опыте пропускают не поездку, а то, что в ней было.",
            "Проверить свой рассказ можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-rasskaze",
          kind: "table",
          caption: "Что должно быть в рассказе",
          zvuchat: [
            "I have been to a wildlife park.",
            "I have seen a zebra and two pandas.",
            "I was amazed by the pandas, but the zebra was quiet.",
            "I have never seen a swan so close before.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["место", "I have been to a wildlife park."],
            ["увиденное", "I have seen a zebra and two pandas."],
            ["оценка", "I was amazed by the pandas, but the zebra was quiet."],
            ["чего раньше не случалось", "I have never seen a swan so close before."],
          ],
        },
        {
          id: "chem-derzhitsya-rasskaz-ob-opyte",
          kind: "explain",
          text: [
            "Первая строка называет место и ставит have been to.",
            "Вторая перечисляет увиденное — и там снова have и третья форма.",
            "Третья говорит, каким это было, и вот тут появляются was и were: речь о том дне.",
            "Четвёртая называет то, чего раньше не случалось, — со словом never.",
            "Строки связывают словами and, but и because: без них выйдет список.",
          ],
        },
        {
          id: "obrazec-rasskaza-ob-opyte",
          kind: "example",
          caption: "Рассказ Данияра",
          perevod: {
            "I have been to a wildlife park near the mountains.":
              "Я бывал в природном парке у гор.",
            "I have seen a zebra, two pandas and a very old crocodile.":
              "Я видел зебру, двух панд и очень старого крокодила.",
            "I was amazed by the pandas, but the crocodile was very quiet.":
              "Панды меня поразили, а крокодил был очень тихий.",
            "I have never seen a swan so close before. It came to the path!":
              "Так близко лебедя я раньше никогда не видел. Он вышел на дорожку!",
          },
          zvuchat: [
            "I have been to a wildlife park near the mountains.",
            "I have seen a zebra, two pandas and a very old crocodile.",
            "I was amazed by the pandas, but the crocodile was very quiet.",
            "I have never seen a swan so close before. It came to the path!",
          ],
          text:
            "I have been to a wildlife park near the mountains.\nI have seen a zebra, two pandas and a very old crocodile.\nI was amazed by the pandas, but the crocodile was very quiet.\nI have never seen a swan so close before. It came to the path!",
          explain:
            "Первые две строки об опыте: have been, have seen. Третья о том " +
            "дне, и потому was. Четвёртая снова об опыте, со словом never.",
        },
        {
          id: "slovar-vpechatleniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "amazed", translation: "поражённый", example: "I was amazed by the pandas.", hint: "/əˈmeɪzd/" },
            { term: "bird", translation: "птица", example: "I have never seen a bird's nest so close.", hint: "/bɜːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-rasskazu",
          kind: "choice",
          prompt:
            "Рассказ целиком: I have been to a farm. I have seen goats and horses. Чего в нём не хватает?",
          options: [
            { text: "Имени того, кто писал." },
            { text: "Даты поездки." },
            { text: "Не сказано, каким это было.", correct: true },
          ],
          hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
          why:
            "Не сказано, каким это было. Ферма названа, козы с лошадьми " +
            "перечислены — а стоит ли туда ехать, читатель не узнает.",
        },
        {
          id: "z2-vybrat-stroku-ob-opyte",
          kind: "choice",
          prompt:
            "Какая строка годится в рассказ об опыте, а не в рассказ о том дне?",
          options: [
            { text: "I saw a swan near the path." },
            { text: "The swan was very loud." },
            { text: "I have seen a swan and two donkeys.", correct: true },
          ],
          hint: "В рассказе об опыте день не называют, а глагол стоит после have.",
          why:
            "I have seen a swan and two donkeys. В первых двух строках речь о " +
            "том самом дне: там saw и was.",
        },
        {
          id: "z3-sobrat-stroku-ocenki",
          kind: "order",
          prompt:
            "Собери третью строку рассказа — ту, что говорит, каким это было.",
          items: ["were", "The goats", "very loud."],
          answer: [1, 0, 2],
          hint: "Речь о том самом дне, значит стоит were, а не have.",
          why:
            "The goats were very loud. Оценка — единственная строка рассказа, " +
            "где have не появляется вовсе.",
        },
        {
          id: "z4-svyazat-stroki-o-pandah",
          kind: "short",
          prompt:
            "Тебя спросили: Why were the pandas quiet? Причина — they ate all day. Ответь целой строкой.",
          answer: "The pandas were quiet because they ate all day.",
          accept: [
            "The pandas were quiet because they ate all day",
            "The pandas were quiet because they ate all day.",
            "The pandas were quiet, because they ate all day",
            "The pandas were quiet, because they ate all day.",
          ],
          hint: "На вопрос со словом why отвечают частью с because.",
          why:
            "The pandas were quiet because they ate all day. Ответ повторяет " +
            "вопрос и добавляет к нему причину.",
        },
        {
          id: "z5-napisat-rasskaz-ob-opyte",
          kind: "essay",
          prompt:
            "Напиши рассказ об опыте, четырьмя строками. Назови место, увиденное, оценку и то, чего раньше не случалось.",
          minWords: 16,
          sample:
            "I have been to a wildlife park near the mountains.\nI have seen a zebra, two pandas and a very old crocodile.\nI was amazed by the pandas, but the crocodile was very quiet.\nI have never seen a swan so close before. It came to the path!",
          checklist: [
            "названо место: have been to",
            "перечислено увиденное: have seen",
            "дана оценка — там уже was или were",
            "есть строка со словом never",
          ],
          hint:
            "Бери обороты, которые знаешь: I have been to, I have seen, I have never seen.",
          why:
            "Рассказ работает, когда читатель понимает, что там можно увидеть, " +
            "не переспрашивая.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину выбора, отличить два времени по смыслу,
      // произвести ответ собеседнику.

      // ---- итог 1 ----
      {
        id: "q-perepisat-den-v-opyt",
        kind: "short",
        outcome: "рассказать об опыте: I have seen a dolphin",
        prompt:
          "Строку I visited a farm last May перепиши так, чтобы она говорила не о дне, а об опыте.",
        answer: "I have visited a farm.",
        accept: ["I have visited a farm"],
        hint: "Слово о дне уходит, а перед глаголом появляется другое.",
        why:
          "I have visited a farm. День last May в такой строке не остаётся: " +
          "она говорит о жизни целиком.",
      },
      {
        id: "q-napisat-ob-opyte-ostrova",
        kind: "short",
        outcome: "рассказать об опыте: I have seen a dolphin",
        prompt:
          "Скажи по-английски, что этот остров в твоей жизни был. Дня не называй, начни с I have.",
        answer: "I have been to this island.",
        accept: [
          "I have been to this island",
          "I have visited this island.",
          "I have visited this island",
        ],
        hint: "Слово о дне в такую строку не встаёт.",
        why:
          "I have been to this island. Годится и I have visited this island: " +
          "оба оборота говорят об одном опыте — человек там побывал.",
      },

      // ---- итог 2 ----
      {
        id: "q-vybrat-formu-posle-have",
        kind: "choice",
        outcome: "строить третью форму глагола: visited, seen, been",
        prompt:
          "У глагола eat три формы: eat, ate, eaten. Какая из них встаёт после have?",
        options: [
          { text: "eat — она обычная и годится везде." },
          { text: "ate — она же о прошлом." },
          { text: "eaten — третья.", correct: true },
        ],
        hint: "После have у глагола стоит не вторая форма, а следующая за ней.",
        why:
          "Eaten. Форма ate говорит о прошлом дне и после have не встаёт, а " +
          "eat — обычная.",
      },
      {
        id: "q-pochemu-tretya-forma",
        kind: "choice",
        outcome: "строить третью форму глагола: visited, seen, been",
        prompt: "У глагола see третья форма seen, а у buy — bought, как и вторая. Что это значит?",
        options: [
          { text: "У неправильных глаголов третья форма бывает и своя, и та же, что вторая", correct: true },
          { text: "У buy третьей формы нет вовсе" },
          { text: "Слово bought здесь стоит по ошибке" },
        ],
        hint: "Сравни see — saw — seen и buy — bought — bought.",
        why:
          "У неправильных глаголов третья форма бывает и своя, и та же, что " +
          "вторая. Обе запоминают вместе со второй.",
      },

      // ---- итог 3 ----
      {
        id: "q-ispravit-dva-otricaniya",
        kind: "short",
        outcome: "назвать то, чего не было в жизни: I have never tried it",
        prompt:
          "Ученик написал: I haven't never tried diving. Запиши строку без ошибки.",
        answer: "I have never tried diving.",
        accept: ["I have never tried diving"],
        hint: "Одно из двух отрицаний лишнее.",
        why:
          "I have never tried diving. Слово never отрицает само, и второго " +
          "отрицания при нём не ставят.",
      },
      {
        id: "q-gde-mesto-never",
        kind: "choice",
        outcome: "назвать то, чего не было в жизни: I have never tried it",
        prompt: "Где в строке стоит слово never?",
        options: [
          { text: "В самом начале строки." },
          { text: "Между have и третьей формой глагола.", correct: true },
          { text: "В самом конце строки." },
        ],
        hint: "Вспомни строку I have never seen a panda.",
        why:
          "Между have и третьей формой. Это обычное место наречия, и урок учит " +
          "именно ему.",
      },

      // ---- итог 4 ----
      {
        id: "q-otvetit-na-vopros-ob-opyte",
        kind: "short",
        outcome: "спросить об опыте: Have you ever been to Astana?",
        prompt:
          "Тебя спросили: Have you ever been to a farm? Ответь коротко — да.",
        answer: "Yes, I have.",
        accept: ["Yes, I have"],
        hint: "Глагол в таком ответе не звучит вовсе.",
        why:
          "Yes, I have. Ответ строится на том же слове, с которого начался " +
          "вопрос, а been в нём не повторяют.",
      },
      {
        id: "q-ispravit-do-you-ever",
        kind: "short",
        outcome: "спросить об опыте: Have you ever been to Astana?",
        prompt:
          "Ученик написал: Do you ever seen a crocodile? Запиши вопрос без ошибки.",
        answer: "Have you ever seen a crocodile?",
        accept: ["Have you ever seen a crocodile"],
        hint: "Посмотри, какое слово стоит в рассказе перед глаголом.",
        why:
          "Have you ever seen a crocodile? В рассказе стоит you have seen, и в " +
          "вопрос выходит have, а не do.",
      },
      {
        id: "q-vybrat-vernyy-vopros",
        kind: "choice",
        outcome: "спросить об опыте: Have you ever been to Astana?",
        prompt: "В каком вопросе порядок слов верный?",
        options: [
          { text: "Have ever you been to the mountains?" },
          { text: "Have you ever been to the mountains?", correct: true },
          { text: "You have ever been to the mountains?" },
        ],
        hint: "Слово о всей жизни стоит сразу за тем, о ком речь.",
        why:
          "Have you ever been to the mountains? В первом ever встало слишком " +
          "рано, а в третьем have осталось на месте рассказа.",
      },

      // ---- итог 5 ----
      {
        id: "q-pochemu-been-to",
        kind: "choice",
        outcome: "рассказать о посещённых местах: I have been to the mountains",
        prompt:
          "Строки I have been to Astana и I was in Astana говорят о разном. Чем?",
        options: [
          { text: "Первая о жизни, вторая о том дне.", correct: true },
          { text: "Первая о поездке туда, вторая о жизни там." },
          { text: "Первая вежливее второй." },
        ],
        hint: "Спроси, к какой из них можно добавить last May.",
        why:
          "Первая о жизни, вторая о том дне. К I was день добавить можно, к I " +
          "have been — нет.",
      },
      {
        id: "q-ispravit-been-in",
        kind: "short",
        outcome: "рассказать о посещённых местах: I have been to the mountains",
        prompt:
          "Ученик хотел сказать, что бывал на ферме, и написал: I was in a horse farm. Запиши это оборотом об опыте.",
        answer: "I have been to a horse farm.",
        accept: [
          "I have been to a horse farm",
          "I have been on a horse farm.",
          "I have been on a horse farm",
        ],
        hint: "Оборот об опыте начинается со слова have.",
        why:
          "I have been to a horse farm. Оборот об опыте собирают из have been, а " +
          "место при нём вводит to. Строка have been on здесь годится так же.",
      },

      // ---- итог 6 ----
      {
        id: "q-najti-opyt-v-rasskaze",
        kind: "choice",
        outcome: "находить в рассказе о поездке, что человек увидел и попробовал",
        // Тот же факт и тот же отвлекающий стояли в задании урока 6. Взята другая
        // строка того же рассказа по смыслу — и другой набор ошибок.
        // Первая правка взяла строку со словом such — а карточка such стоит в
        // модуле 24, двумя модулями позже. Нашёл методист. И разбор был обрублен:
        // «в этот раз попробовал» — кто попробовал, из него не следовало.
        prompt:
          "В рассказе строка: I have never eaten curry before. Что из этого следует?",
        options: [
          { text: "Автор не стал есть карри." },
          { text: "Карри автор пробует впервые.", correct: true },
          { text: "Карри автору не понравился." },
        ],
        hint: "Слово never говорит о том, чего не было раньше.",
        why:
          "Пробует впервые. Слово never говорит, что раньше такого не случалось, а " +
          "пишет автор об этом потому, что в этот раз попробовал.",
      },
      {
        id: "q-chto-avtor-proboval",
        kind: "short",
        outcome: "находить в рассказе о поездке, что человек увидел и попробовал",
        prompt:
          "В рассказе строка: I have tried the food there: a grilled steak with garlic. С чем был стейк? Ответь одним словом по-английски.",
        answer: "garlic",
        accept: ["Garlic", "with garlic"],
        hint: "Ответ стоит в самом конце строки.",
        why: "A grilled steak with garlic.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-chto-videl",
        kind: "short",
        outcome: "слышать в разговоре, кто что видел",
        zvuk: "Have you ever seen a kangaroo? — No, but I have seen a panda.",
        prompt: "Послушай. Кого он видел? Ответь одним словом по-английски.",
        answer: "panda",
        accept: ["Panda", "a panda"],
        hint: "Ответ звучит во второй реплике, после слова but.",
        why: "Panda. В записи звучит But I have seen a panda.",
      },
      {
        id: "q-uslyshat-chego-ne-bylo",
        kind: "short",
        outcome: "слышать в разговоре, кто что видел",
        zvuk: "I have been to the mountains, but I have never tried surfing.",
        prompt:
          "Послушай. Чего он не пробовал ни разу? Ответь одним словом по-английски.",
        answer: "surfing",
        accept: ["Surfing"],
        hint: "Ответ стоит после слов have never tried.",
        why:
          "Surfing. Всё остальное в записи — то, что человек делал, и только " +
          "сёрфинг стоит после never.",
      },

      // ---- итог 8 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-rasskazu",
        kind: "choice",
        outcome: "проверять рассказ об опыте: названо увиденное и дана оценка",
        prompt:
          "Рассказ: I have been to a farm. I have seen goats and donkeys. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что говорит, каким это было.", correct: true },
          { text: "Той, что называет место." },
          { text: "Той, что перечисляет увиденное." },
        ],
        hint: "Пройди по рассказу строку за строкой и вычёркивай найденное.",
        why:
          "Той, что говорит, каким это было. Место названо, увиденное " +
          "перечислено, а оценки нет — и читатель не поймёт, стоит ли ехать.",
      },
      {
        id: "q-dopisat-stroku-o-tom-kakim-bylo",
        kind: "short",
        outcome: "проверять рассказ об опыте: названо увиденное и дана оценка",
        prompt:
          "К рассказу допиши строку о том, каким это было: козы были шумными. Начни с The goats.",
        answer: "The goats were loud.",
        accept: [
          "The goats were loud",
          "The goats were very loud.",
          "The goats were very loud",
        ],
        hint: "Речь о том самом дне, а не об опыте.",
        why:
          "The goats were loud. Здесь стоит were, потому что говорят о дне, а " +
          "не о жизни целиком.",
      },
      {
        id: "q-pochemu-v-rasskaze-dva-vremeni",
        kind: "choice",
        outcome: "проверять рассказ об опыте: названо увиденное и дана оценка",
        prompt:
          "Отчего в рассказе об опыте рядом стоят have seen и was?",
        options: [
          { text: "Чтобы рассказ не был однообразным." },
          { text: "Так короче писать." },
          { text: "Одно говорит о жизни, другое о том дне.", correct: true },
        ],
        hint: "Спроси у каждой строки, о чём она: о жизни или о дне.",
        why:
          "Одно говорит о жизни, другое о том дне. Опыт называют через have, а " +
          "подробности того дня — через was и were.",
      },
    ],
  },
};

export default module;
