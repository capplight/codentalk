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
 * Руководство A2 Key, с. 49, перечень Tenses: «Present perfect simple: recent
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
 * СЛОВАРЬ МОДУЛЯ. Тридцать карточек, все тридцать новые для ступени.
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
    "сказать, чего не делал никогда: I have never tried it",
    "спросить об опыте: Have you ever been to Astana?",
    "сказать, где бывал: I have been to the mountains",
    "находить в рассказе о поездке, что человек видел и делал",
    "слышать в разговоре, кто что видел",
    "проверять рассказ об опыте: сказано, что видел и каким это было",
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
        "с. 49, Language specifications, перечень Tenses: «Present perfect " +
        "simple: recent past with just, indefinite past with yet, already, " +
        "never, ever; unfinished past with for and since». Отсюда `ever` и " +
        "`never` уроков 3 и 4. Строка проверена по ОБОИМ разборам источника: " +
        "двухколоночная вёрстка её не разорвала. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем рассказ о поездке» и УРОК ПИСЬМА «Пишем о том, что " +
        "видел». с. 66, шкала «Overall written production», графа A2: «Can " +
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
        "Тридцать карточек модуля взяты из словника ступени; все тридцать новые " +
        "для ступени. " +
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
            "Для такого разговора у английского есть отдельное время.",
          ],
        },
        {
          id: "kogda-eto-bylo-i-bylo-li-voobshche",
          kind: "table",
          caption: "Когда это было и было ли вообще",
          zvuchat: [
            "I saw a dolphin last summer.",
            "I have seen a dolphin.",
          ],
          head: ["О дне: когда", "Об опыте: было ли"],
          rows: [
            ["I saw a dolphin last summer.", "I have seen a dolphin."],
            ["We visited the island in May.", "We have visited the island."],
          ],
        },
        {
          id: "iz-chego-sostoit",
          kind: "explain",
          text: [
            "Слева стоит день: last summer, in May — и это уже знакомое время.",
            "Справа дня нет вовсе, и вместо него появилось слово have.",
            "После have идёт особая форма глагола: seen, visited.",
            "Это время называется Present Perfect.",
            "Оно говорит не о дне, а о том, случалось ли это в жизни.",
          ],
        },
        {
          id: "ryad-po-licam-have",
          kind: "table",
          caption: "Кто и какое слово берёт",
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
            "У пяти лиц стоит have, и только у he и she — has.",
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
          explain:
            "Первая строка говорит об опыте: дня в ней нет, и потому have seen. " +
            "В третьей строке рядом стоят оба времени: have visited — об опыте, " +
            "а were — о том самом дне.",
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
          hint: "Дня в строке нет, значит и слова о дне не будет.",
          why:
            "I have seen a dolphin. Запись I saw ждёт дня, а в I have see глагол " +
            "остался без особой формы.",
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
          prompt: "Отметь строки, которые говорят об опыте, а не о дне.",
          parts: [
            { text: "I have seen a dolphin.", selectable: true, correct: true },
            { text: " · " },
            { text: "We saw a dolphin on Monday.", selectable: true },
            { text: " · " },
            { text: "We have visited the mountains.", selectable: true, correct: true },
            { text: " · " },
            { text: "I visited the island in May.", selectable: true },
          ],
          hint: "Спроси у каждой строки: назван ли в ней день?",
          why:
            "Первая и третья. Во второй и четвёртой стоит день — on Monday, in " +
            "May, — и это разговор о дне, а не об опыте.",
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
          id: "z5-napisat-o-gorah",
          kind: "short",
          prompt:
            "Скажи по-английски, что бывал в горах. Дня не называй, начни с I have.",
          answer: "I have seen the mountains.",
          accept: [
            "I have seen the mountains",
            "I have visited the mountains.",
            "I have visited the mountains",
          ],
          hint: "После have глагол берёт особую форму.",
          why:
            "I have seen the mountains. Годится и I have visited the mountains: " +
            "оба глагола говорят об одном и том же опыте.",
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
            "Первая — обычная, вторая — о прошлом дне, третья — после have.",
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
          head: ["Обычная", "О прошлом дне", "После have"],
          rows: [
            ["visit", "visited", "visited"],
            ["try", "tried", "tried"],
            ["see", "saw", "seen"],
            ["eat", "ate", "eaten"],
            ["be", "was", "been"],
          ],
        },
        {
          id: "kak-eto-ustroeno-s-formami",
          kind: "explain",
          text: [
            "У большинства глаголов вторая и третья формы одинаковы: visited, tried.",
            "Они берут окончание -ed, как в разговоре о прошлом дне.",
            "А у тех глаголов, которые в модуле «Особые формы» брали своё прошедшее, третья форма тоже своя.",
            "See — saw — seen, eat — ate — eaten, be — was — been.",
            "Такие формы не выводятся правилом, их запоминают.",
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
            "Have you tried this curry?",
            "Yes, and I have eaten a grilled steak too.",
            "With garlic?",
            "With garlic and chilli. It was very hot!",
          ],
          text:
            "Have you tried this curry?\nYes, and I have eaten a grilled steak too.\nWith garlic?\nWith garlic and chilli. It was very hot!",
          explain:
            "Глагол try берёт -ed, как большинство: tried. А eat берёт свою " +
            "форму: eaten. В последней строке стоит was — там речь уже о том " +
            "самом дне, а не об опыте.",
        },
        {
          id: "slovar-edy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "curry", translation: "карри", example: "Have you tried this curry?", hint: "/ˈkʌri/" },
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
            "I have seen a crocodile. Форма saw говорит о прошлом дне, а после " +
            "have нужна третья.",
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
            "Tried и been. Формы saw и ate — вторые: они говорят о прошлом дне " +
            "и после have не встают.",
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
            "Ученик написал: I have saw a zebra. Запиши строку без ошибки.",
          answer: "I have seen a zebra.",
          accept: ["I have seen a zebra"],
          hint: "После have нужна третья форма, а стоит вторая.",
          why:
            "I have seen a zebra. Три формы этого глагола: see, saw, seen.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nikogda-ne-videl",
      title: "Никогда не видел: I have never seen",
      estimatedMinutes: 14,
      outcome: "сказать, чего не делал никогда: I have never tried it",

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
            "I have never seen a kangaroo.",
            "And a crocodile? There is one near the water.",
            "I have never seen a crocodile too. This is a good day!",
          ],
          text:
            "Look, a kangaroo!\nI have never seen a kangaroo.\nAnd a crocodile? There is one near the water.\nI have never seen a crocodile too. This is a good day!",
          explain:
            "В обеих строках never стоит между have и третьей формой. Слово not " +
            "рядом не появляется ни разу: одного отрицания довольно.",
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
            { text: "I have never not seen a kangaroo." },
          ],
          hint: "Отрицание в такой строке одно.",
          why:
            "I have never seen a kangaroo. В двух других записях отрицаний два, " +
            "а по-английски хватает одного.",
        },
        {
          id: "z3-otmetit-gde-never-na-meste",
          kind: "hottext",
          prompt: "Отметь строки, где never стоит на своём месте.",
          parts: [
            { text: "I have never tried chilli.", selectable: true, correct: true },
            { text: " · " },
            { text: "I never have tried chilli.", selectable: true },
            { text: " · " },
            { text: "We have never seen a zebra.", selectable: true, correct: true },
            { text: " · " },
            { text: "We have seen never a zebra.", selectable: true },
          ],
          hint: "Слово стоит между have и третьей формой глагола.",
          why:
            "Первая и третья. Во второй never ушло перед have, в четвёртой — за " +
            "глагол, а его место между ними.",
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
            "Скажи по-английски, что никогда не пробовал карри. Начни с I have.",
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
            "Без ever вопрос тоже верен, но тогда он про недавнее, а не про жизнь.",
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
          caption: "Разговор о спорте",
          razgovor: true,
          zvuchat: [
            "Have you ever tried surfing?",
            "No, I haven't. And you?",
            "Yes, I have. I have tried diving too.",
            "Have you ever played rugby or cricket?",
          ],
          text:
            "Have you ever tried surfing?\nNo, I haven't. And you?\nYes, I have. I have tried diving too.\nHave you ever played rugby or cricket?",
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
      outcome: "сказать, где бывал: I have been to the mountains",

      blocks: [
        {
          id: "byval-li-ty-tam",
          kind: "explain",
          text: [
            "Чаще всего об опыте спрашивают про места: был ли ты там.",
            "У глагола be третья форма — been, и она работает именно так.",
            "После неё ставят короткое to, а следом само место.",
          ],
        },
        {
          id: "byl-i-byval",
          kind: "table",
          caption: "Был в тот день и бывал вообще",
          zvuchat: [
            "I was in Astana last May.",
            "I have been to Astana.",
            "We were on a horse farm.",
            "We have been to a horse farm.",
          ],
          head: ["О дне", "Об опыте"],
          rows: [
            ["I was in Astana last May.", "I have been to Astana."],
            ["We were on a horse farm.", "We have been to a horse farm."],
          ],
        },
        {
          id: "kak-ustroeno-been-to",
          kind: "explain",
          text: [
            "Слева стоит день и слово was — это разговор о том дне.",
            "Справа дня нет, стоит have been, и это разговор обо всей жизни.",
            "Предлог при been всегда to, а не in: I have been to Astana.",
            "Оборот значит, что человек там бывал и уже вернулся.",
          ],
        },
        {
          id: "ne-have-been-in",
          kind: "note",
          tone: "mistake",
          text:
            "«I have been in Astana» в разговоре об опыте — так не говорят.\n\n" +
            "При been ставят to: I have been to Astana.",
        },
        {
          id: "razgovor-o-mestah",
          kind: "example",
          caption: "Разговор о местах",
          razgovor: true,
          zvuchat: [
            "Have you ever been to the mountains?",
            "Yes, I have. And I have been to a farm with horses and goats.",
            "A farm? Were there donkeys?",
            "Two donkeys and a swan. The swan was very loud!",
          ],
          text:
            "Have you ever been to the mountains?\nYes, I have. And I have been to a farm with horses and goats.\nA farm? Were there donkeys?\nTwo donkeys and a swan. The swan was very loud!",
          explain:
            "В первых двух строках речь об опыте, и потому have been to. В " +
            "третьей и четвёртой разговор перешёл на тот самый день, и там уже " +
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
            "I have been to Astana. Запись have been in говорила бы, что человек " +
            "там сейчас.",
        },
        {
          id: "z2-vybrat-ob-opyte-mesta",
          kind: "choice",
          prompt:
            "Скажи, что бывал в горах. Когда именно — неважно.",
          options: [
            { text: "I was in the mountains." },
            { text: "I have been in the mountains." },
            { text: "I have been to the mountains.", correct: true },
          ],
          hint: "Дня нет, значит и слова о дне не будет; а при been стоит to.",
          why:
            "I have been to the mountains. Запись I was ждёт дня, а have been in " +
            "сказала бы, что человек там сейчас.",
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
          hint: "Ищи, где назван день и где стоит was или were.",
          why:
            "Первая и третья. Во второй стоит день in May, а в четвёртой was — " +
            "рассказ о том самом дне.",
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
          id: "z5-sprosit-o-more",
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
      outcome: "находить в рассказе о поездке, что человек видел и делал",

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
            "I have seen a zebra with a very long tail and two young pandas.",
            "The pandas have thick fur, and they eat all day.",
            "I have never seen a bird's nest so close: it was near the path.",
            "A swan opened its wings, and everybody said wow.",
            "I have tried the food there too: a grilled steak with garlic.",
          ],
          glossary: [
            { term: "wildlife park", translation: "парк дикой природы" },
            { term: "thick", translation: "густой" },
            { term: "bird", translation: "птица" },
          ],
        },
        {
          id: "kak-iskat-v-rasskaze-ob-opyte",
          kind: "note",
          tone: "info",
          text:
            "Опыт ищут по слову have и третьей форме глагола.\n\nА рассказ о " +
            "том самом дне — по словам was и were.",
        },
        {
          id: "slovar-dikoy-prirody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "fur", translation: "мех, шерсть", example: "The pandas have thick fur.", hint: "/fɜː/" },
            { term: "tail", translation: "хвост", example: "A zebra with a very long tail.", hint: "/teɪl/" },
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
          answer: "zebra",
          accept: ["Zebra", "a zebra"],
          hint: "Про хвост сказано во второй строке.",
          why: "I have seen a zebra with a very long tail.",
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
          why: "I have seen a zebra with a very long tail and two young pandas.",
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
      title: "Пишем о том, что видел",
      estimatedMinutes: 15,
      outcome: "проверять рассказ об опыте: сказано, что видел и каким это было",

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
            "I have never seen a swan so close.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["где бывал", "I have been to a wildlife park."],
            ["что видел", "I have seen a zebra and two pandas."],
            ["каким это было", "I was amazed by the pandas, but the zebra was quiet."],
            ["чего не видел раньше", "I have never seen a swan so close."],
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
          zvuchat: [
            "I have been to a wildlife park near the mountains.",
            "I have seen a zebra, two pandas and a very old crocodile.",
            "I was amazed by the pandas, but the crocodile was dead quiet.",
            "I have never seen a swan so close, because it came to the path.",
          ],
          text:
            "I have been to a wildlife park near the mountains.\nI have seen a zebra, two pandas and a very old crocodile.\nI was amazed by the pandas, but the crocodile was dead quiet.\nI have never seen a swan so close, because it came to the path.",
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
            { term: "dead", translation: "мёртвый; совсем", example: "The crocodile was dead quiet.", hint: "/ded/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-rasskazu",
          kind: "choice",
          prompt:
            "Рассказ целиком: I have been to a park. It was good. Чего в нём не хватает?",
          options: [
            { text: "Имени того, кто писал." },
            { text: "Не сказано, что автор там видел.", correct: true },
            { text: "Даты поездки." },
          ],
          hint: "Представь себя читателем: захочешь ли ты туда после такого?",
          why:
            "Не сказано, что автор видел. Место названо, оценка есть, а самого " +
            "рассказа нет.",
        },
        {
          id: "z2-dopisat-o-tom-chto-videl",
          kind: "gap",
          prompt: "Речь об опыте, и глагол see стоит после have. Допиши форму.",
          before: "I have ",
          after: " a swan and two donkeys.",
          answer: "seen",
          hint: "После have глагол берёт третью форму.",
          why:
            "I have seen a swan and two donkeys. Форма saw говорила бы о " +
            "прошлом дне.",
        },
        {
          id: "z3-otmetit-stroki-ob-opyte",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят об опыте, а не о том дне.",
          parts: [
            { text: "I have been to a farm.", selectable: true, correct: true },
            { text: " · " },
            { text: "The goats were very loud.", selectable: true },
            { text: " · " },
            { text: "I have never tried surfing.", selectable: true, correct: true },
            { text: " · " },
            { text: "It was a hot day.", selectable: true },
          ],
          hint: "Ищи слово have и третью форму глагола.",
          why:
            "Первая и третья: в них стоит have. Во второй и четвёртой — were и " +
            "was, а это рассказ о том дне.",
        },
        {
          id: "z4-svyazat-stroki-o-lebede",
          kind: "short",
          prompt:
            "Соедини две строки одним словом: I have never seen a swan so close. It came to the path. Запиши получившуюся строку целиком.",
          answer: "I have never seen a swan so close, because it came to the path.",
          accept: [
            "I have never seen a swan so close, because it came to the path",
            "I have never seen a swan so close because it came to the path.",
            "I have never seen a swan so close because it came to the path",
          ],
          hint: "Вторая строка называет причину первой.",
          why:
            "I have never seen a swan so close, because it came to the path. " +
            "Слово because и связывает причину со следствием.",
        },
        {
          id: "z5-napisat-rasskaz-ob-opyte",
          kind: "essay",
          prompt:
            "Напиши рассказ об опыте, четырьмя строками. Скажи, где бывал, что видел, каким это было и чего не видел раньше.",
          minWords: 18,
          sample:
            "I have been to a wildlife park near the mountains.\nI have seen a zebra, two pandas and a very old crocodile.\nI was amazed by the pandas, but the crocodile was dead quiet.\nI have never seen a swan so close, because it came to the path.",
          checklist: [
            "сказано, где бывал: have been to",
            "названо, что видел: have seen",
            "сказано, каким это было — там уже was или were",
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
        id: "q-otlichit-den-ot-opyta",
        kind: "choice",
        outcome: "рассказать об опыте: I have seen a dolphin",
        prompt:
          "Строки I saw a dolphin и I have seen a dolphin говорят о разном. Чем?",
        options: [
          { text: "Первая о своём, вторая о чужом." },
          { text: "Первая о дельфине, вторая о нескольких." },
          { text: "Первая о дне, вторая о жизни целиком.", correct: true },
        ],
        hint: "Спроси у каждой строки: можно ли к ней добавить last summer?",
        why:
          "Первая о дне, вторая о жизни целиком. К I saw день добавить можно, " +
          "а к I have seen — нет.",
      },
      {
        id: "q-napisat-ob-opyte-ostrova",
        kind: "short",
        outcome: "рассказать об опыте: I have seen a dolphin",
        prompt:
          "Скажи по-английски, что бывал на этом острове. Дня не называй, начни с I have.",
        answer: "I have visited this island.",
        accept: [
          "I have visited this island",
          "I have seen this island.",
          "I have seen this island",
        ],
        hint: "Слово о дне в такую строку не встаёт.",
        why:
          "I have visited this island. Годится и I have seen this island: оба " +
          "глагола говорят об опыте.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-have-ate",
        kind: "short",
        outcome: "строить третью форму глагола: visited, seen, been",
        prompt:
          "Ученик написал: I have ate curry with garlic. Запиши строку без ошибки.",
        answer: "I have eaten curry with garlic.",
        accept: ["I have eaten curry with garlic"],
        hint: "Проверь, какая из трёх форм встаёт после have.",
        why:
          "I have eaten curry with garlic. Форма ate — вторая, а после have " +
          "стоит третья.",
      },
      {
        id: "q-pochemu-tretya-forma",
        kind: "choice",
        outcome: "строить третью форму глагола: visited, seen, been",
        prompt: "У каких глаголов вторая и третья формы совпадают?",
        options: [
          { text: "У тех, что берут окончание -ed.", correct: true },
          { text: "У тех, что называют движение." },
          { text: "У тех, что стоят после have." },
        ],
        hint: "Сравни try — tried — tried и see — saw — seen.",
        why:
          "У тех, что берут -ed. У глаголов со своей формой прошедшего третья " +
          "тоже своя: see — saw — seen.",
      },

      // ---- итог 3 ----
      {
        id: "q-ispravit-dva-otricaniya",
        kind: "short",
        outcome: "сказать, чего не делал никогда: I have never tried it",
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
        outcome: "сказать, чего не делал никогда: I have never tried it",
        prompt: "Где в строке стоит слово never?",
        options: [
          { text: "В самом начале строки." },
          { text: "Между have и третьей формой глагола.", correct: true },
          { text: "В самом конце строки." },
        ],
        hint: "Вспомни строку I have never seen a panda.",
        why:
          "Между have и третьей формой. Записи never have seen и have seen " +
          "never по-английски не встречаются.",
      },

      // ---- итог 4 ----
      {
        id: "q-otvetit-na-vopros-ob-opyte",
        kind: "short",
        outcome: "спросить об опыте: Have you ever been to Astana?",
        prompt:
          "Тебя спросили: Have you ever been to a farm? Такой опыт у тебя есть. Ответь коротко.",
        answer: "Yes, I have.",
        accept: ["Yes, I have"],
        hint: "Глагол в таком ответе не звучит вовсе.",
        why:
          "Yes, I have. Ответ строится на том же слове, с которого начался " +
          "вопрос, а been в нём не повторяют.",
      },
      {
        id: "q-pochemu-ne-do-you-ever",
        kind: "choice",
        outcome: "спросить об опыте: Have you ever been to Astana?",
        prompt: "Отчего запись Do you ever seen a dolphin? не годится?",
        options: [
          { text: "Слово ever нельзя ставить в вопрос." },
          { text: "Слово dolphin требует the." },
          { text: "В начало должно выйти have, а не do.", correct: true },
        ],
        hint: "Посмотри, какое слово стоит в рассказе перед глаголом.",
        why:
          "В начало должно выйти have. В рассказе стоит you have seen, и в " +
          "вопрос выходит именно have.",
      },
      {
        id: "q-sprosit-o-gorah",
        kind: "short",
        outcome: "спросить об опыте: Have you ever been to Astana?",
        prompt:
          "Спроси по-английски, бывал ли собеседник когда-нибудь в горах. Начни с Have.",
        answer: "Have you ever been to the mountains?",
        accept: [
          "Have you ever been to the mountains",
          "Have you ever been to the mountains?",
        ],
        hint: "Слово о всей жизни стоит после you, а при been — короткое to.",
        why:
          "Have you ever been to the mountains? Порядок такой: have, кто, ever, " +
          "третья форма, место.",
      },

      // ---- итог 5 ----
      {
        id: "q-pochemu-been-to",
        kind: "choice",
        outcome: "сказать, где бывал: I have been to the mountains",
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
        outcome: "сказать, где бывал: I have been to the mountains",
        prompt:
          "Ученик написал: I have been in a horse farm. Запиши строку без ошибки.",
        answer: "I have been to a horse farm.",
        accept: ["I have been to a horse farm"],
        hint: "При been стоит другое короткое слово.",
        why:
          "I have been to a horse farm. Запись have been in сказала бы, что " +
          "человек там сейчас.",
      },

      // ---- итог 6 ----
      {
        id: "q-najti-opyt-v-rasskaze",
        kind: "choice",
        outcome: "находить в рассказе о поездке, что человек видел и делал",
        prompt:
          "В рассказе строка: I have never seen a bird's nest so close. Что из этого следует?",
        options: [
          { text: "Гнездо было далеко." },
          { text: "Так близко автор гнезда раньше не видел.", correct: true },
          { text: "Автор не видел гнезда и в этот раз." },
        ],
        hint: "Слово never говорит о том, чего не было раньше.",
        why:
          "Так близко автор гнезда раньше не видел. В этот раз видел — потому " +
          "он об этом и пишет.",
      },
      {
        id: "q-chto-avtor-proboval",
        kind: "short",
        outcome: "находить в рассказе о поездке, что человек видел и делал",
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
        outcome: "проверять рассказ об опыте: сказано, что видел и каким это было",
        prompt:
          "Рассказ: I have been to a farm. I have seen goats and donkeys. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что называет место." },
          { text: "Той, что говорит, каким это было.", correct: true },
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
        outcome: "проверять рассказ об опыте: сказано, что видел и каким это было",
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
        outcome: "проверять рассказ об опыте: сказано, что видел и каким это было",
        prompt:
          "Отчего в рассказе об опыте рядом стоят have seen и was?",
        options: [
          { text: "Чтобы рассказ не был однообразным." },
          { text: "Одно говорит о жизни, другое о том дне.", correct: true },
          { text: "Так короче писать." },
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
