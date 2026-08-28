import type { Module } from "@/lib/content/types";

/**
 * Модуль 15 курса «Английский · Elementary»: самый.
 *
 * Программа: docs/programma-english-elementary.md, модуль 15 — «выделять одно из
 * многих»; грамматика: превосходная степень, `the`, `one of the`.
 *
 * ПРОГРАММА РАСХОДИТСЯ С ИСТОЧНИКОМ В ОДНОМ МЕСТЕ, И ОБОРОТ `ONE OF THE` СНЯТ.
 * English Grammar Profile ставит его на B1: ADJECTIVES superlatives, «FORM: 'ONE
 * OF THE'» — «Can use 'one of the' before a superlative adjective, followed by a
 * plural noun», пример «It was one of the best days». Выше ступени, и модуль его
 * не берёт. Строка программы исправлена, основание записано там же. Это пятый
 * случай расхождения программы с источником на этой ступени.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «ВЫДЕЛЕНИЕ», А ИМЯ ФОРМЫ — «ФОРМА ВЫДЕЛЕНИЯ».
 *
 * Вещей две, и потому имён два: выделение — то, что делает говорящий (из многих
 * называет одно), форма выделения — то, во что встаёт прилагательное. Слов
 * «степень», «превосходство», «первенство» в тексте для ученика нет ни разу.
 *
 * ОСТОРОЖНО С СОСЕДНИМ МОДУЛЕМ. Модуль 14 зовёт своё «сравнением» и «формой
 * сравнения», и эти два имени здесь работают тоже — но только когда речь о
 * прошлом модуле. Путать их нельзя: сравнение берёт две вещи, выделение — много.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Все графы English Grammar Profile, A2, раздел
 * ADJECTIVES superlatives:
 *
 * 1. «FORM: WITH '-EST'» — «Can form superlative adjectives by adding the suffix
 *    '-est', to adjectives of one syllable», пример источника «… it's the
 *    biggest and oldest m…». Это урок 1.
 *
 * 2. «FORM: WITH 'THE'» — «Can form a noun phrase with 'the' + superlative
 *    adjective + noun», пример «It has the latest technology». Это урок 1: слово
 *    the при форме выделения обязательно, и графа говорит об этом прямо.
 *
 * 3. «FORM: WITH '-EST'» (вторая графа того же имени) — «with adjectives of one
 *    syllable with a short vowel, by doubling the final consonant and adding
 *    '-est'», и «FORM: WITH '-ST'» — «to adjectives ending in '–e'». Это урок 2,
 *    правописание.
 *
 * 4. «FORM: WITH 'THE MOST'» — «Can form superlative adjective phrases using
 *    'the most', with longer adjectives of two or more syllables». Это урок 3.
 *
 * 5. «FORM/USE: WITH 'IN' + NOUN» — «Can use prepositional phrases with 'in' +
 *    singular name of a place after a superlative adjective», пример «It's the
 *    biggest room in the house». И «FORM/USE: WITH 'OF' + NOUN» — «to refer to
 *    one thing within a set or part of a set», пример «it was the best project
 *    of all». Это урок 4: где именно самое.
 *
 * 6. «FORM: WITH 'MY' OR 'YOUR'» — «Can form a noun phrase with 'my' or 'your' +
 *    superlative adjective + noun», пример «I bought these clothes for my
 *    youngest brother». Это урок 5. Там же A1, «FORM: 'MY BEST FRIEND'» — «Can
 *    use the irregular superlative adjective 'best' in the phrase 'my best
 *    friend'»: отсюда `best` в модуле.
 *
 * 7. Описания Совета Европы, с. 84, шкала «Notes, messages and forms», графа
 *    A2: «Can formulate short, simple notes and messages relating to matters in
 *    areas of immediate need». Опора урока письма.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК:
 *
 * - `one of the` — B1, см. выше;
 * - `the best` перед вещью с Present Perfect («It was the best film I have
 *   seen») — B1, «FORM/USE: 'THE BEST' WITH NOUN AND PRESENT PERFECT»;
 * - `the best` перед вещью с `to` («the best time to go») — B1;
 * ПРО `WORST` ОТДЕЛЬНО, И ЗДЕСЬ ДВА ИСТОЧНИКА РАСХОДЯТСЯ. Слова `worst` нет в
 * примерах ни одной графы A2 English Grammar Profile — оно встречается только на
 * B1 и B2. Сперва я взял из этого осторожность и не строил на нём заданий.
 * Методист возразил вторым источником: словник A2 Key даёт `worst (adj)` строкой
 * 2320, то есть слово входит в требования экзамена ступени. Вдобавок модуль 14
 * строит на `worse` четыре задания при том же основании — одно основание, два
 * решения в соседних модулях.
 *
 * Поэтому `worst` вводится наравне с `best`, и работа спрашивает его один раз.
 * Запрета на него нигде не написано, и написать нельзя: такой графы нет.
 *
 * СЛОВАРЬ МОДУЛЯ. Счёт даёт `npm run kontrol`, и сверяться надо с ним, а не с
 * памятью. Норма владельца от 20 августа — не меньше тридцати карточек и не
 * меньше пятнадцати новых для ступени.
 *
 * Слова собраны вокруг случая модуля: выделяют одно из многих, а выделять удобно
 * зверей и места. Отсюда `whale`, `eagle`, `camel` и `rainforest`, `ocean`,
 * `nature`. Набор не случайный: у зверей есть настоящее самое-самое, и урок не
 * приходится выдумывать.
 *
 * СНЯТО ПРИ ПОДБОРЕ: `desert` — рядом с `dessert` из модуля 13 пара слишком
 * похожа, а чтения `desert` в `ipa-en-uk` нет вовсе; `creature` — Oxford ставит
 * его на B2; `explore` — B1.
 */
const module: Module = {
  slug: "samyy",
  title: "Самый",

  outcomes: [
    "выделять одно из многих: the biggest animal",
    "выбирать написание формы выделения: the biggest, the nicest",
    "выделять длинным прилагательным: the most beautiful",
    "говорить, где именно самое: the biggest room in the house",
    "выделять своё: my best friend, my youngest brother",
    "находить в тексте, что самое большое и самое старое",
    "слышать в разговоре, что назвали самым",
    "проверять заметку: у каждого самого названо, среди кого",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, ADJECTIVES superlatives, «FORM: WITH '-EST'»: «Can form superlative " +
        "adjectives by adding the suffix '-est', to adjectives of one syllable» — " +
        "урок 1. " +
        "A2, там же, «FORM: WITH 'THE'»: «Can form a noun phrase with 'the' + " +
        "superlative adjective + noun», пример источника — «It has the latest " +
        "technology» — урок 1. Графа прямо называет слово the частью оборота. " +
        "A2, там же, «FORM: WITH '-EST'» (вторая графа того же имени): «with " +
        "adjectives of one syllable with a short vowel, by doubling the final " +
        "consonant and adding '-est'», и «FORM: WITH '-ST'»: «to adjectives ending " +
        "in '–e'» — урок 2. " +
        "A2, там же, «FORM: WITH 'THE MOST'»: «Can form superlative adjective " +
        "phrases using 'the most', with longer adjectives of two or more " +
        "syllables» — урок 3. " +
        "A2, там же, «FORM/USE: WITH 'IN' + NOUN»: «Can use prepositional phrases " +
        "with 'in' + singular name of a place after a superlative adjective», " +
        "пример — «It's the biggest room in the house» — урок 4. " +
        "A2, там же, «FORM/USE: WITH 'OF' + NOUN»: «Can use a limited range of " +
        "prepositional phrases with 'of' after a superlative adjective, to refer to " +
        "one thing within a set or part of a set», пример — «I learned to surf, " +
        "this was the best part of the trip» (A2 WAYSTAGE) — урок 4. " +
        "ОСТОРОЖНО С ПРИМЕРАМИ ЭТОЙ ГРАФЫ: сперва здесь стоял пример «it was the " +
        "best project of all», а он помечен в источнике B1 THRESHOLD. Графа A2, но " +
        "ссылаться надо на её примеры уровня A2, иначе следующий проверяющий " +
        "потеряет полчаса. Нашёл методист. " +
        "A2, там же, «FORM: WITH 'MY' OR 'YOUR'»: «Can form a noun phrase with 'my' " +
        "or 'your' + superlative adjective + noun», пример — «I bought these " +
        "clothes for my youngest brother» — урок 5. " +
        "A1, там же, «FORM: 'MY BEST FRIEND'»: «Can use the irregular superlative " +
        "adjective 'best' in the phrase 'my best friend'», пример — «She's my best " +
        "friend» — урок 5. " +
        "A2, там же, «FORM: ELLIPSIS, WITH 'THE'»: «Can use 'the' with a limited " +
        "range of superlative adjectives without a following noun, when the noun is " +
        "understood», пример — «the computer game was the best» — урок 5. " +
        "ЧЕГО НЕТ, И ЭТО РАСХОЖДЕНИЕ С ПРОГРАММОЙ. B1, там же, «FORM: 'ONE OF " +
        "THE'»: «Can use 'one of the' before a superlative adjective, followed by a " +
        "plural noun», пример «It was one of the best days». Программа отдавала " +
        "оборот этому модулю, источник ставит его на B1 — строка программы " +
        "исправлена. " +
        "ТАКЖЕ ВЫШЕ СТУПЕНИ: B1, «FORM/USE: 'THE BEST' WITH NOUN AND PRESENT " +
        "PERFECT»; B1, «FORM: 'THE BEST' WITH NOUN AND 'TO-' INFINITIVE»; и B1, " +
        "CLAUSES comparatives, «FORM/USE: 'THE BEST (THAT)'» — «It's the best place " +
        "that I have ever seen». Третью нашёл методист. " +
        "ПРО WORST ОТДЕЛЬНО: слова worst нет в примерах ни одной графы A2. Модуль " +
        "даёт его одной строкой рядом с best и заданий на нём не строит. Это " +
        "осторожность, а не запрет: графы, запрещающей worst, не существует",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ПИСЬМА «Пишем заметку о самом». с. 84, шкала «Notes, messages and " +
        "forms», графа A2: «Can formulate short, simple notes and messages relating " +
        "to matters in areas of immediate need». " +
        "Шкала выбрана нарочно, а не соседняя: с. 81 того же документа разводит их " +
        "прямо — Correspondence о переписке, «Notes, messages and forms» о передаче " +
        "сведений",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Все карточки модуля взяты из словника ступени. Подбор шёл через " +
        "`npm run slovo -- --zapas`. " +
        "СНЯТЫ ПРИ ПОДБОРЕ: `creature` — Oxford 3000 ставит его на B2; `explore` — " +
        "B1; `desert` — чтения нет в `ipa-en-uk`, а рядом с `dessert` из модуля 13 " +
        "пара слишком похожа, и путаница вышла бы дороже слова",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə`, знак ударения перед слогом",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "samyy-bolshoy",
      title: "Самый большой: the biggest animal",
      estimatedMinutes: 15,
      outcome: "выделять одно из многих: the biggest animal",
      vozvrat: [{ iz: "bolshe-i-menshe", zadanie: "z1-dopisat-okonchanie-sravneniya" }],

      blocks: [
        {
          id: "zachem-vydelyat",
          kind: "explain",
          text: [
            "Данияр читает про зверей и хочет назвать самого большого из всех.",
            "По-английски это the biggest animal.",
            "Так делают выделение: из многих называют одно.",
            "Прилагательное для этого встаёт в форму выделения, и перед ней стоит the.",
          ],
        },
        {
          id: "forma-vydeleniya",
          kind: "table",
          caption: "Обычная форма и форма выделения",
          zvuchat: [
            "the biggest animal",
            "the oldest tree",
            "the smallest bird",
            "the tallest man",
          ],
          head: ["Обычная форма", "Форма выделения"],
          rows: [
            ["big", "the biggest animal"],
            ["old", "the oldest tree"],
            ["small", "the smallest bird"],
            ["tall", "the tallest man"],
          ],
        },
        {
          id: "kak-sobrana-forma",
          kind: "explain",
          text: [
            "К короткому прилагательному прибавляют окончание -est: old — oldest.",
            "Перед формой выделения стоит слово the: the oldest tree.",
            "Оно и говорит, что такой один: без него вышло бы «какое-то дерево».",
            "Сама вещь идёт сразу после формы: the oldest tree, the smallest bird.",
          ],
        },
        {
          id: "ne-zabyt-the",
          kind: "note",
          tone: "mistake",
          text:
            "«a biggest animal» — так не говорят.\n\nПеред формой выделения стоит " +
            "the: the biggest animal.",
        },
        {
          id: "zveri-i-razmery",
          kind: "example",
          caption: "Кто самый большой",
          razgovor: true,
          zvuchat: [
            "The whale is the biggest animal.",
            "And on land?",
            "The elephant.",
            "What about the tallest?",
            "The giraffe is the tallest animal on land.",
          ],
          text:
            "The whale is the biggest animal.\nAnd on land?\nThe elephant.\nWhat about the tallest?\nThe giraffe is the tallest animal on land.",
          explain:
            "Каждый раз из всех зверей называют одного. Слово the стоит и перед " +
            "формой выделения, и перед самим зверем — это разные the.",
        },
        {
          id: "slovar-zverey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "whale", translation: "кит", example: "The whale is the biggest animal.", hint: "/weɪl/" },
            { term: "eagle", translation: "орёл", example: "The eagle is the fastest bird here.", hint: "/ˈiːgl/" },
            { term: "camel", translation: "верблюд", example: "The camel is the strongest here.", hint: "/ˈkæml/" },
            { term: "tiger", translation: "тигр", example: "The tiger is the biggest cat.", hint: "/ˈtaɪgə/" },
            { term: "shark", translation: "акула", example: "The shark is the fastest fish here.", hint: "/ʃɑːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-est",
          kind: "gap",
          prompt: "Кит — самый большой зверь. Допиши недостающее слово.",
          before: "The whale is the ",
          after: " animal.",
          answer: "biggest",
          hint: "К слову big прибавляется окончание, и согласная удваивается.",
          why:
            "The whale is the biggest animal. Окончание -est и делает форму " +
            "выделения.",
        },
        {
          id: "z2-vybrat-s-the",
          kind: "choice",
          prompt: "Орёл — самая быстрая птица здесь. Какая запись верна?",
          options: [
            { text: "The eagle is the fastest bird here.", correct: true },
            { text: "The eagle is a fastest bird here." },
            { text: "The eagle is fastest bird here." },
          ],
          hint: "Перед формой выделения стоит одно определённое слово.",
          why:
            "The eagle is the fastest bird here. Ни a, ни пустое место перед формой " +
            "выделения не годятся: там стоит the.",
        },
        {
          id: "z3-otmetit-formy-vydeleniya",
          kind: "hottext",
          prompt: "Отметь строки с формой выделения.",
          parts: [
            { text: "the oldest tree", selectable: true, correct: true },
            { text: " · " },
            { text: "an old tree", selectable: true },
            { text: " · " },
            { text: "the smallest bird", selectable: true, correct: true },
            { text: " · " },
            { text: "a smaller bird", selectable: true },
          ],
          hint: "Форму выделения узнают по окончанию -est и слову the.",
          why:
            "Выделение в первой и третьей строках. Во второй прилагательное " +
            "обычное, а в четвёртой стоит форма сравнения — она берёт две вещи, а " +
            "не много.",
        },
        {
          id: "z4-sobrat-vydelenie",
          kind: "order",
          prompt: "Собери строку: тигр — самая большая кошка.",
          items: ["cat.", "biggest", "is the", "The tiger"],
          answer: [3, 2, 1, 0],
          hint: "Слово the стоит дважды: перед тигром и перед формой выделения.",
          why:
            "The tiger is the biggest cat. Второе the открывает оборот выделения, а " +
            "сама вещь идёт сразу за формой.",
        },
        {
          id: "z5-napisat-o-ptice",
          kind: "short",
          prompt:
            "Орёл — самая быстрая птица здесь. Скажи это по-английски, начав с The eagle.",
          answer: "The eagle is the fastest bird here.",
          accept: ["The eagle is the fastest bird here"],
          hint: "Форма выделения от fast — fastest, и перед ней the.",
          why:
            "The eagle is the fastest bird here. Слово here говорит, среди кого " +
            "птица самая быстрая.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-pishetsya-vydelenie",
      title: "Как пишется: the biggest, the nicest",
      estimatedMinutes: 14,
      outcome: "выбирать написание формы выделения: the biggest, the nicest",

      blocks: [
        {
          id: "zachem-pravopisanie-est",
          kind: "explain",
          text: [
            "Окончание -est прибавляется не ко всякому слову одинаково.",
            "У big выходит biggest, у nice — nicest, у easy — easiest.",
            "Правила те же, что у формы сравнения: удвоение, буква e и буква y.",
          ],
        },
        {
          id: "tri-sluchaya-est",
          kind: "table",
          caption: "Три случая написания",
          zvuchat: [
            "big — the biggest",
            "hot — the hottest",
            "nice — the nicest",
            "large — the largest",
            "easy — the easiest",
            "busy — the busiest",
          ],
          head: ["Чем кончается слово", "Что делают", "Пример"],
          rows: [
            ["одна согласная после краткого гласного", "согласную удваивают", "big — the biggest"],
            ["одна согласная после краткого гласного", "согласную удваивают", "hot — the hottest"],
            ["буква e", "прибавляют только -st", "nice — the nicest"],
            ["буква e", "прибавляют только -st", "large — the largest"],
            ["буква y", "y меняют на i и прибавляют -est", "easy — the easiest"],
            ["буква y", "y меняют на i и прибавляют -est", "busy — the busiest"],
          ],
        },
        {
          id: "pochemu-tak-est",
          kind: "explain",
          text: [
            "Удвоение и здесь держит гласный кратким: без второй g вышло бы bigest.",
            "У слов на e второй e не пишут, поэтому окончание сокращается до -st.",
            "Слова на y меняют её на i, как и в форме сравнения: busy — busiest.",
            "Остальные короткие слова берут -est без изменений: small — smallest.",
          ],
        },
        {
          id: "slovar-prirody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "ocean", translation: "океан", example: "The Pacific is the largest ocean.", hint: "/ˈəʊʃn/" },
            { term: "rainforest", translation: "тропический лес", example: "The rainforest is the wettest place here.", hint: "/ˈreɪnfɒrɪst/" },
            { term: "nature", translation: "природа", example: "The rainforest is the richest environment in nature.", hint: "/ˈneɪtʃə/" },
            { term: "wild", translation: "дикий", example: "The wildest animal here is the tiger.", hint: "/waɪld/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-udvoenie-est",
          kind: "gap",
          prompt: "Это самое жаркое место здесь. Допиши форму выделения слова hot.",
          before: "It is the ",
          after: " place here.",
          answer: "hottest",
          hint: "После краткого гласного согласную удваивают.",
          why:
            "It is the hottest place here. Без второй t гласный читался бы иначе.",
        },
        {
          id: "z2-vybrat-st",
          kind: "choice",
          prompt: "Тихий океан — самый большой. Какая запись верна?",
          options: [
            { text: "The Pacific is the largeest ocean." },
            { text: "The Pacific is the largest ocean.", correct: true },
            { text: "The Pacific is the most large ocean." },
          ],
          hint: "Слово large уже кончается на нужную букву.",
          why:
            "The Pacific is the largest ocean. К слову на e прибавляют только -st, " +
            "и слово most при коротком прилагательном не ставят.",
        },
        {
          id: "z3-sootnesti-slovo-i-vydelenie",
          kind: "match",
          prompt: "Соедини слово и его форму выделения.",
          left: ["nice", "hot", "busy"],
          right: ["the busiest", "the nicest", "the hottest"],
          answer: [1, 2, 0],
          hint: "Смотри на последнюю букву каждого слова.",
          why:
            "Слово на e берёт только -st, слово с кратким гласным удваивает " +
            "согласную, слово на y меняет её на i.",
        },
        {
          id: "z4-otmetit-vernoe-napisanie-est",
          kind: "hottext",
          prompt: "Отметь формы выделения, написанные верно.",
          parts: [
            { text: "the largest", selectable: true, correct: true },
            { text: " · " },
            { text: "the easyest", selectable: true },
            { text: " · " },
            { text: "the wildest", selectable: true, correct: true },
            { text: " · " },
            { text: "the hotest", selectable: true },
          ],
          hint: "Проверь каждое слово по его последней букве.",
          why:
            "Верны the largest и the wildest. В the easyest буква y должна была " +
            "стать i, а в the hotest не удвоилась согласная.",
        },
        {
          id: "z5-napisat-formu-ot-busy",
          kind: "short",
          prompt:
            "Напиши форму выделения слова busy вместе со словом the — по-английски.",
          answer: "the busiest",
          accept: ["The busiest", "busiest"],
          hint: "Слово кончается на y.",
          why: "The busiest. Буква y меняется на i, и прибавляется -est.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "samyy-cherez-most",
      title: "Через the most: the most beautiful",
      estimatedMinutes: 14,
      outcome: "выделять длинным прилагательным: the most beautiful",

      blocks: [
        {
          id: "zachem-most",
          kind: "explain",
          text: [
            "Дана показывает снимки и хочет назвать самое красивое место.",
            "По-английски это the most beautiful place.",
            "К длинному прилагательному окончание -est не прибавляют.",
            "Вместо него ставят два слова: the most, а само прилагательное не меняется.",
          ],
        },
        {
          id: "korotkoe-i-dlinnoe-est",
          kind: "table",
          caption: "Короткое прилагательное и длинное",
          zvuchat: [
            "the biggest",
            "the oldest",
            "the most beautiful",
            "the most expensive",
          ],
          head: ["Слово", "Форма выделения"],
          rows: [
            ["big", "the biggest"],
            ["old", "the oldest"],
            ["beautiful", "the most beautiful"],
            ["expensive", "the most expensive"],
          ],
        },
        {
          id: "gde-most-a-gde-est",
          kind: "explain",
          text: [
            "Длинным считают прилагательное из двух слогов и больше: beau-ti-ful, ex-pen-sive.",
            "Слог — это часть слова с одним гласным звуком: big один слог, ea-sy два.",
            "Слова на -y, -er и -et — исключение: они двусложные, но берут окончание, а не most.",
            "Так выходит the easiest, the busiest, the cleverest, the quietest.",
            "Слово the стоит перед most, а не после: the most beautiful.",
          ],
        },
        {
          id: "ne-oba-srazu-est",
          kind: "note",
          tone: "mistake",
          text:
            "«the most biggest» — так не говорят.\n\nЛибо окончание -est, либо " +
            "слово most: the biggest, the most beautiful.",
        },
        {
          id: "snimki-iz-poezdki",
          kind: "example",
          caption: "Снимки из поездки",
          razgovor: true,
          zvuchat: [
            "This is the most beautiful place in the country.",
            "And the oldest?",
            "The palace of the king and the queen.",
            "Was it the most expensive trip?",
            "No, the cheapest. The square there is a circle, and the environment is the cleanest here.",
          ],
          text:
            "This is the most beautiful place in the country.\nAnd the oldest?\nThe palace of the king and the queen.\nWas it the most expensive trip?\nNo, the cheapest. The square there is a circle, and the environment is the cleanest here.",
          explain:
            "Длинные прилагательные берут the most, короткие — окончание. В одном " +
            "разговоре встречаются оба способа, и это обычное дело.",
        },
        {
          id: "slovar-mest",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "king", translation: "король", example: "The king lived in the oldest palace.", hint: "/kɪŋ/" },
            { term: "queen", translation: "королева", example: "The queen is on the money here.", hint: "/kwiːn/" },
            { term: "giraffe", translation: "жираф", example: "The giraffe is the tallest animal here.", hint: "/dʒɪˈrɑːf/" },
            { term: "environment", translation: "окружающая среда", example: "The rainforest is the richest environment.", hint: "/ɪnˈvaɪrənmənt/" },
            { term: "palace", translation: "дворец", example: "The palace of the king and the queen.", hint: "/ˈpælɪs/" },
            { term: "circle", translation: "круг", example: "We draw a circle slowly.", hint: "/ˈsɜːkl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-sposob-est",
          kind: "choice",
          prompt: "Это самое красивое место. Какая запись верна?",
          options: [
            { text: "This is the beautifulest place." },
            { text: "This is the most beautifulest place." },
            { text: "This is the most beautiful place.", correct: true },
          ],
          hint: "У длинного прилагательного окончания не бывает.",
          why:
            "This is the most beautiful place. Длинное слово берёт the most и само " +
            "не меняется; два способа разом не соединяют.",
        },
        {
          id: "z2-dopisat-most",
          kind: "gap",
          prompt: "Это была самая дорогая поездка. Допиши недостающее слово.",
          before: "It was the ",
          after: " expensive trip.",
          answer: "most",
          hint: "Слово expensive длинное, и окончание к нему не прибавляют.",
          why:
            "It was the most expensive trip. Форма выделения у длинного слова " +
            "собирается из the и most.",
        },
        {
          id: "z3-otmetit-vernye-est",
          kind: "hottext",
          prompt: "Отметь строки, где форма выделения собрана верно.",
          parts: [
            { text: "the most expensive trip", selectable: true, correct: true },
            { text: " · " },
            { text: "the most biggest animal", selectable: true },
            { text: " · " },
            { text: "the oldest tree", selectable: true, correct: true },
            { text: " · " },
            { text: "the expensivest hotel", selectable: true },
          ],
          hint: "У каждого слова один способ, а не два.",
          why:
            "Верны первая и третья строки. Во второй сошлись most и окончание, а в " +
            "четвёртой длинное слово взяло окончание, которого у него не бывает.",
        },
        {
          id: "z4-sobrat-s-most",
          kind: "order",
          prompt: "Собери строку: это самое красивое место в стране.",
          items: ["in the country.", "beautiful place", "most", "This is the"],
          answer: [3, 2, 1, 0],
          hint: "Слово most стоит между the и самим прилагательным.",
          why:
            "This is the most beautiful place in the country. Слово the открывает " +
            "оборот, а most идёт сразу за ним.",
        },
        {
          id: "z5-napisat-o-poezdke",
          kind: "short",
          prompt:
            "Поездка вышла самой дорогой. Скажи это по-английски, начав с It was.",
          answer: "It was the most expensive trip.",
          accept: ["It was the most expensive trip"],
          hint: "Длинное прилагательное берёт the most.",
          why:
            "It was the most expensive trip. Окончание -est слову expensive не " +
            "годится: оно длинное.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-imenno-samoe",
      title: "Где именно самое: the biggest room in the house",
      estimatedMinutes: 14,
      outcome: "говорить, где именно самое: the biggest room in the house",

      blocks: [
        {
          id: "zachem-govorit-gde",
          kind: "explain",
          text: [
            "Сказать «самая большая комната» мало: непонятно, среди каких комнат.",
            "Алим говорит It's the biggest room in the house.",
            "Слова in the house и называют круг, среди которого комната самая большая.",
            "Без этого круга выделение остаётся половинчатым, как сравнение без than.",
          ],
        },
        {
          id: "in-ili-of",
          kind: "table",
          caption: "Два способа назвать круг",
          zvuchat: [
            "the biggest room in the house",
            "the tallest animal in the zoo",
            "the best project of all",
            "the youngest of the three",
          ],
          head: ["Круг", "Запись"],
          rows: [
            ["место — через in", "the biggest room in the house"],
            ["место — через in", "the tallest animal in the zoo"],
            ["набор вещей — через of", "the best project of all"],
            ["набор вещей — через of", "the youngest of the three"],
          ],
        },
        {
          id: "kogda-in-a-kogda-of",
          kind: "explain",
          text: [
            "Слово in ставят перед местом: в доме, в зоопарке, в стране, в городе.",
            "Слово of ставят перед набором: из всех, из трёх, из этих.",
            "Различить можно по вопросу: если о круге спрашивают «где», нужен in.",
            "Если можно спросить «среди кого», нужен of.",
          ],
        },
        {
          id: "zoopark-i-dom",
          kind: "example",
          caption: "В зоопарке",
          razgovor: true,
          zvuchat: [
            "It is the biggest zoo in the country.",
            "Which animal is the tallest?",
            "The giraffe.",
            "And the oldest of all?",
            "The tortoise. She is fifty.",
            "The funniest?",
            "The penguin.",
          ],
          text:
            "It is the biggest zoo in the country.\nWhich animal is the tallest?\nThe giraffe.\nAnd the oldest of all?\nThe tortoise. She is fifty.\nThe funniest?\nThe penguin.",
          explain:
            "Про зоопарк круг назван местом — in the country. Про черепаху кругом " +
            "стал набор зверей — of all.",
        },
        {
          id: "slovar-zooparka",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "tortoise", translation: "черепаха", example: "The tortoise is the oldest of all.", hint: "/ˈtɔːtəs/" },
            { term: "penguin", translation: "пингвин", example: "The penguin is the funniest here.", hint: "/ˈpeŋgwɪn/" },
            { term: "parrot", translation: "попугай", example: "The parrot is the noisiest in the zoo.", hint: "/ˈpærət/" },
            { term: "lizard", translation: "ящерица", example: "The lizard is the quietest of all.", hint: "/ˈlɪzəd/" },
            { term: "spider", translation: "паук", example: "The spider is the smallest here.", hint: "/ˈspaɪdə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-in",
          kind: "gap",
          prompt: "Это самая большая комната в доме. Допиши недостающее слово.",
          before: "It's the biggest room ",
          after: " the house.",
          answer: "in",
          hint: "После круга можно спросить «где» — значит слово одно.",
          why:
            "It's the biggest room in the house. Дом — это место, и перед местом " +
            "стоит in.",
        },
        {
          id: "z2-vybrat-of",
          kind: "choice",
          prompt: "Черепаха — самая старая из всех. Какая запись верна?",
          options: [
            { text: "The tortoise is the oldest in all." },
            { text: "The tortoise is the oldest of all.", correct: true },
            { text: "The tortoise is the oldest all." },
          ],
          hint: "«Из всех» — это набор, а не место.",
          why:
            "The tortoise is the oldest of all. Перед набором стоит of, а in " +
            "говорил бы о месте.",
        },
        {
          id: "z3-vybrat-slovo-pered-krugom",
          kind: "choice",
          prompt:
            "Жираф — самый высокий из трёх. Какое слово поставить перед кругом?",
          options: [
            { text: "The giraffe is the tallest in the three." },
            { text: "The giraffe is the tallest of the three.", correct: true },
            { text: "The giraffe is the tallest at the three." },
          ],
          hint: "Три зверя — это набор, а не место.",
          why:
            "The giraffe is the tallest of the three. Перед набором стоит of, а in " +
            "назвало бы место: in the zoo, in the country.",
        },
        {
          id: "z4-otmetit-polnye-vydeleniya",
          kind: "hottext",
          prompt: "Отметь строки, где назван круг.",
          parts: [
            { text: "the tallest animal in the zoo", selectable: true, correct: true },
            { text: " · " },
            { text: "the tallest animal", selectable: true },
            { text: " · " },
            { text: "the youngest of the three", selectable: true, correct: true },
            { text: " · " },
            { text: "the youngest brother", selectable: true },
          ],
          hint: "Круг вводят слова in и of.",
          why:
            "Круг назван в первой и третьей строках. Во второй и четвёртой не " +
            "сказано, среди кого выделяют.",
        },
        {
          id: "z5-napisat-s-krugom",
          kind: "short",
          prompt:
            "Паук — самый маленький в зоопарке. Скажи это по-английски, начав с The spider.",
          answer: "The spider is the smallest in the zoo.",
          accept: ["The spider is the smallest in the zoo"],
          hint: "Зоопарк — это место.",
          why:
            "The spider is the smallest in the zoo. Перед местом стоит in, а не of.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "moy-luchshiy-drug",
      title: "Моё самое: my best friend",
      estimatedMinutes: 14,
      outcome: "выделять своё: my best friend, my youngest brother",

      blocks: [
        {
          id: "zachem-moy",
          kind: "explain",
          text: [
            "Вместо the перед формой выделения может стоять my или your.",
            "Дана говорит She's my best friend — «она моя лучшая подруга».",
            "Слово my заменяет the и заодно говорит, чей это самый.",
            "Форма выделения при этом не меняется вовсе.",
          ],
        },
        {
          id: "the-ili-my",
          kind: "table",
          caption: "The, my и your перед формой выделения",
          zvuchat: [
            "the best friend",
            "my best friend",
            "the youngest brother",
            "my youngest brother",
            "your oldest photo",
          ],
          head: ["С the", "Со своим словом"],
          rows: [
            ["the best friend", "my best friend"],
            ["the youngest brother", "my youngest brother"],
            ["the oldest photo", "your oldest photo"],
          ],
        },
        {
          id: "best-i-worst",
          kind: "explain",
          text: [
            "У good форма выделения своя, как и форма сравнения: good — better — best.",
            "У bad она тоже своя: bad — worse — worst.",
            "Их запоминают целиком: ни окончания, ни слова most к ним не прибавляют.",
            "Оборот my best friend берут готовым, целиком.",
          ],
        },
        {
          id: "bez-veshchi",
          kind: "explain",
          text: [
            "Иногда вещь после формы выделения не называют вовсе.",
            "The computer game was the best — «компьютерная игра была лучшей».",
            "Так делают, когда из разговора и так ясно, лучшей среди чего.",
            "Слово the при этом остаётся: без него оборота не выйдет.",
          ],
        },
        {
          id: "podarki",
          kind: "example",
          caption: "Подарки на день рождения",
          razgovor: true,
          zvuchat: [
            "My friends gave me presents, but the computer game was the best.",
            "And the worst?",
            "A duck for the bath.",
            "Who gave it?",
            "My youngest brother. He has a puppy, a kitten and a rabbit: three pets in one flat.",
          ],
          text:
            "My friends gave me presents, but the computer game was the best.\nAnd the worst?\nA duck for the bath.\nWho gave it?\nMy youngest brother. He has a puppy, a kitten and a rabbit: three pets in one flat.",
          explain:
            "В первой строке вещь после the best не названа: ясно, что речь о " +
            "подарках. В последней перед формой выделения стоит my.",
        },
        {
          id: "slovar-domashnih",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "puppy", translation: "щенок", example: "My puppy is the youngest here.", hint: "/ˈpʌpi/" },
            { term: "kitten", translation: "котёнок", example: "The kitten is the smallest of all.", hint: "/ˈkɪtn/" },
            { term: "rabbit", translation: "кролик", example: "My rabbit is the quietest pet.", hint: "/ˈræbɪt/" },
            { term: "pet", translation: "домашнее животное", example: "My rabbit is the quietest pet.", hint: "/pet/" },
            { term: "duck", translation: "утка", example: "The duck is the noisiest of all.", hint: "/dʌk/" },
            { term: "worst", translation: "самый плохой", example: "The socks were the worst present.", hint: "/wɜːst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-my",
          kind: "gap",
          prompt: "Она твоя лучшая подруга. Допиши слово перед формой выделения.",
          before: "She's ",
          after: " best friend.",
          answer: "your",
          hint: "Подруга не своя, а собеседника.",
          why:
            "She's your best friend. Слово your заменяет the и говорит, чья это " +
            "подруга.",
        },
        {
          id: "z2-vybrat-best",
          kind: "choice",
          prompt: "Игра оказалась лучшей. Какая запись верна?",
          options: [
            { text: "The game was the goodest." },
            { text: "The game was the most good." },
            { text: "The game was the best.", correct: true },
          ],
          hint: "У good форма выделения своя.",
          why:
            "The game was the best. Ни окончание, ни most к good не прибавляют: у " +
            "него есть best.",
        },
        {
          id: "z3-otmetit-verno-sobrannye",
          kind: "hottext",
          prompt: "Отметь строки, собранные верно.",
          parts: [
            { text: "my youngest brother", selectable: true, correct: true },
            { text: " · " },
            { text: "my the youngest brother", selectable: true },
            { text: " · " },
            { text: "the computer game was the best", selectable: true, correct: true },
            { text: " · " },
            { text: "the computer game was the goodest", selectable: true },
          ],
          hint: "Слово my заменяет the, а не стоит рядом с ним.",
          why:
            "Верны первая и третья строки. Во второй my и the сошлись вместе, а в " +
            "четвёртой стоит goodest, хотя у good форма выделения своя — best.",
        },
        {
          id: "z4-sobrat-s-my",
          kind: "order",
          prompt: "Собери строку: подарок дал мой младший брат.",
          items: ["brother.", "youngest", "my", "The present was from"],
          answer: [3, 2, 1, 0],
          hint: "Слово my стоит перед формой выделения, а не после неё.",
          why:
            "The present was from my youngest brother. Слово my заняло место the.",
        },
        {
          id: "z5-napisat-o-podarke",
          kind: "short",
          prompt:
            "Из всех подарков компьютерная игра оказалась лучшей. Скажи это по-английски, начав с The computer game.",
          answer: "The computer game was the best.",
          accept: [
            "The computer game was the best",
            "The computer game was the best of all.",
          ],
          hint: "Вещь после формы выделения называть не нужно.",
          why:
            "The computer game was the best. Слово the остаётся, хотя вещи после " +
            "него нет: и так ясно, лучшей среди чего.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-zooparke",
      title: "Читаем заметку о зоопарке",
      estimatedMinutes: 13,
      outcome: "находить в тексте, что самое большое и самое старое",

      blocks: [
        {
          id: "zachem-chitat-o-zooparke",
          kind: "explain",
          text: [
            "Данияр читает заметку о зоопарке перед поездкой.",
            "В такой заметке ищут самое: самое большое, самое старое, самое редкое.",
            "Ниже заметка, и вопросы будут о них.",
          ],
        },
        {
          id: "zametka-o-zooparke",
          kind: "text",
          title: "THE CITY ZOO",
          genre: "article",
          body: [
            "It is the biggest zoo in the country. It opened in 1982 and it is also the oldest.",
            "The zoo is a good place to see nature: the animals here live in the wildest gardens of the city.",
            "The tallest animal here is the giraffe. The biggest is the elephant, and the smallest is the spider.",
            "The oldest animal is a tortoise. She is fifty and she was the first animal in the zoo.",
            "The parrots are the noisiest animals here, and the lizards are the quietest.",
            "The heaviest animal is the hippo. The slowest is the snail, and the lightest is the butterfly.",
            "The most expensive ticket is 2 000 tenge. Tickets for children are the cheapest.",
          ],
          glossary: [
            { term: "it opened", translation: "он открылся" },
            { term: "the first animal", translation: "первое животное" },
            { term: "tickets for children", translation: "билеты для детей" },
          ],
        },
        {
          id: "kak-iskat-samoe",
          kind: "note",
          tone: "info",
          text:
            "Самое ищут по слову the рядом с окончанием -est или со словом " +
            "most.\n\nПосле него сразу стоит и сама вещь, и часто круг: in the zoo, " +
            "of all.",
        },
        {
          id: "slovar-zametki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "butterfly", translation: "бабочка", example: "The butterfly is the lightest here.", hint: "/ˈbʌtəflaɪ/" },
            { term: "snail", translation: "улитка", example: "The snail is the slowest of all.", hint: "/sneɪl/" },
            { term: "hippo", translation: "бегемот", example: "The hippo is the heaviest here.", hint: "/ˈhɪpəʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kto-samyy-vysokiy",
          about: "zametka-o-zooparke",
          kind: "short",
          prompt: "Какое животное самое высокое? Ответь одним словом по-английски.",
          answer: "giraffe",
          accept: ["Giraffe", "the giraffe"],
          hint: "Ищи слово tallest.",
          why: "The tallest animal here is the giraffe.",
        },
        {
          id: "z2-skolko-let-cherepahe",
          about: "zametka-o-zooparke",
          kind: "short",
          prompt: "Сколько лет черепахе? Ответь числом.",
          answer: "fifty",
          accept: ["50", "Fifty"],
          hint: "Возраст назван сразу после слова о черепахе.",
          why: "She is fifty. Черепаха названа самым старым животным зоопарка.",
        },
        {
          id: "z3-otmetit-verno-o-zooparke",
          about: "zametka-o-zooparke",
          kind: "hottext",
          prompt: "Отметь то, что верно по заметке.",
          parts: [
            { text: "зоопарк самый старый в стране", selectable: true, correct: true },
            { text: " · " },
            { text: "самое шумное место — дом ящериц", selectable: true },
            { text: " · " },
            { text: "детские билеты самые дешёвые", selectable: true, correct: true },
            { text: " · " },
            { text: "самое маленькое животное — бабочка", selectable: true },
          ],
          hint: "Про шум и про самое маленькое в заметке сказано прямо.",
          why:
            "Верно первое и третье. Шумнее всего дом попугаев, а самое маленькое " +
            "животное — паук.",
        },
        {
          id: "z4-samyy-dorogoy-bilet",
          about: "zametka-o-zooparke",
          kind: "short",
          prompt: "Сколько стоит самый дорогой билет? Ответь числом.",
          answer: "2000",
          accept: ["2 000", "две тысячи", "2000 tenge"],
          hint: "Цена стоит рядом со словами most expensive.",
          why: "The most expensive ticket is 2 000 tenge.",
        },
        {
          id: "z5-v-kakom-godu",
          about: "zametka-o-zooparke",
          kind: "short",
          prompt: "В каком году открылся зоопарк? Ответь числом.",
          answer: "1982",
          accept: ["в 1982"],
          hint: "Год стоит в первой строке заметки.",
          why: "It opened in 1982 and it is also the oldest.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-samom",
      title: "Слушаем, что назвали самым",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что назвали самым",

      blocks: [
        {
          id: "zachem-slushat-o-samom",
          kind: "explain",
          text: [
            "В разговоре о поездке самое называют несколько раз подряд.",
            "Слушать надо две вещи: что назвали самым и среди кого.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-samom",
          kind: "audio",
          caption: "Разговор после поездки",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Which place was the most beautiful? — The rainforest. The heart of it " +
            "is the wettest place on earth. — And the hottest? — The south. — What " +
            "was the best day of all? — The last one. We saw the biggest whale in " +
            "the ocean, like a real explorer.",
        },
        {
          id: "chto-slushat-o-samom",
          kind: "note",
          tone: "info",
          text:
            "Слушай, какое место назвали самым красивым, какое самым жарким и что " +
            "видели в последний день.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-poezdki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "explorer", translation: "путешественник", example: "The explorer saw the biggest whale.", hint: "/ɪkˈsplɔːrə/" },
            { term: "elephant", translation: "слон", example: "The elephant is the biggest animal on land.", hint: "/ˈelɪfənt/" },
            { term: "heart", translation: "сердце, середина", example: "The heart of the rainforest is the wettest place.", hint: "/hɑːt/" },
            { term: "earth", translation: "земля, планета", example: "The wettest place on earth.", hint: "/ɜːθ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-samoe-krasivoe",
          about: "zapis-o-samom",
          kind: "short",
          prompt: "Какое место назвали самым красивым? Ответь одним словом по-английски.",
          answer: "rainforest",
          accept: ["Rainforest", "the rainforest"],
          hint: "Ответ стоит сразу после первого вопроса.",
          why: "Which place was the most beautiful? — The rainforest.",
        },
        {
          id: "z2-chto-videli",
          about: "zapis-o-samom",
          kind: "choice",
          prompt: "Что они видели в последний день?",
          options: [
            { text: "Самого большого кита.", correct: true },
            { text: "Самую высокую гору." },
            { text: "Самый старый город." },
          ],
          hint: "Про последний день сказано в самом конце записи.",
          why:
            "Самого большого кита: We saw the biggest whale in the ocean. Про гору " +
            "и город в записи не говорят вовсе.",
        },
        {
          id: "z3-samoe-zharkoe",
          about: "zapis-o-samom",
          kind: "short",
          prompt: "Какое место назвали самым жарким? Ответь одним словом по-английски.",
          answer: "south",
          accept: ["South", "the south"],
          hint: "Ответ стоит сразу после второго вопроса записи.",
          why:
            "The south. Про самое красивое место спросили первым, и это оказался " +
            "тропический лес.",
        },
        {
          id: "z4-otmetit-nazvannoe-samym",
          about: "zapis-o-samom",
          kind: "hottext",
          prompt: "Отметь то, что в записи названо самым.",
          parts: [
            { text: "тропический лес", selectable: true, correct: true },
            { text: " · " },
            { text: "юг", selectable: true, correct: true },
            { text: " · " },
            { text: "первый день", selectable: true },
            { text: " · " },
            { text: "кит", selectable: true, correct: true },
          ],
          hint: "Про день сказано, но не про первый.",
          why:
            "Самыми названы лес, юг и кит. Лучшим днём назвали последний, а не " +
            "первый.",
        },
        {
          id: "z5-skazat-vsluh-o-samom",
          kind: "speak",
          prompt: "Скажи вслух: тропический лес — самое красивое место здесь.",
          phrase: "The rainforest is the most beautiful place here.",
          translation: "Тропический лес — самое красивое место здесь.",
          hint: "Прилагательное длинное, значит берёт the most.",
          why:
            "The rainforest is the most beautiful place here. Слово here называет " +
            "круг, среди которого место самое красивое.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-zametku-o-samom",
      title: "Пишем заметку о самом",
      estimatedMinutes: 15,
      outcome: "проверять заметку: у каждого самого названо, среди кого",

      blocks: [
        {
          id: "zachem-proveryat-zametku",
          kind: "explain",
          text: [
            "Дана написала заметку о своём городе, и читатель не понял, о чём речь.",
            "В заметке про самое пропускают не слова, а круг: среди кого самое.",
            "Проверить можно так: у каждого самого найди слова со in или of.",
            "Без круга «самый большой парк» значит что угодно: в городе, в стране, в мире.",
          ],
        },
        {
          id: "est-li-krug",
          kind: "table",
          caption: "Назван ли круг",
          zvuchat: [
            "It is the biggest park in the city.",
            "It is the biggest park.",
            "The oldest of all is the mosque.",
          ],
          head: ["Строка", "Круг", "Годится"],
          rows: [
            ["It is the biggest park in the city.", "in the city", "да"],
            ["It is the biggest park.", "не назван", "нет"],
            ["The oldest of all is the mosque.", "of all", "да"],
          ],
        },
        {
          id: "kogda-krug-ne-nuzhen",
          kind: "explain",
          text: [
            "Круг нужен не в каждой строке: он может стоять в начале заметки один раз.",
            "Если заметка названа «Мой город», дальше можно писать без in the city.",
            "А вот первое самое лучше писать с кругом: до него читателю неясно, о чём речь.",
            "То же правило было у сравнения: первое сравнение идёт со словом than.",
          ],
        },
        {
          id: "obrazets-zametki",
          kind: "example",
          caption: "Заметка Даны",
          zvuchat: [
            "My city is the oldest in the country.",
            "The quietest side of it is behind the market, and the noise level there is the lowest.",
            "The most beautiful place is the old square.",
            "My best photo is from the top of the hill.",
          ],
          text:
            "My city is the oldest in the country.\nThe quietest side of it is behind the market, and the noise level there is the lowest.\nThe most beautiful place is the old square.\nMy best photo is from the top of the hill.",
          explain:
            "Круг назван в первой строке — in the country, — и дальше он уже не " +
            "нужен: слово here его заменяет. Последняя строка берёт my вместо the.",
        },
        {
          id: "slovar-zametki-o-gorode",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "mosque", translation: "мечеть", example: "The oldest of all is the mosque.", hint: "/mɒsk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-net-v-zametke",
          kind: "choice",
          prompt:
            "В заметке стоит одна строка: It is the biggest park. Чего в ней не хватает?",
          options: [
            { text: "Слова the." },
            { text: "Круга: непонятно, самый большой среди каких парков.", correct: true },
            { text: "Формы выделения." },
          ],
          hint: "Спроси себя, где именно этот парк самый большой.",
          why:
            "Круга. Слово the на месте, форма выделения собрана верно, а вот in the " +
            "city читателю не хватает.",
        },
        {
          id: "z2-dopisat-krug",
          kind: "gap",
          prompt: "Допиши круг: это самый большой парк в городе.",
          before: "It is the biggest park ",
          after: ".",
          answer: "in the city",
          hint: "Город — это место.",
          why:
            "It is the biggest park in the city. Перед местом стоит in, а of назвало " +
            "бы набор.",
        },
        {
          id: "z3-otmetit-zametki-s-krugom",
          kind: "hottext",
          prompt: "Отметь строки, где круг назван.",
          parts: [
            { text: "the oldest mosque in the country", selectable: true, correct: true },
            { text: " · " },
            { text: "the most beautiful place", selectable: true },
            { text: " · " },
            { text: "the youngest of the three", selectable: true, correct: true },
            { text: " · " },
            { text: "my best photo", selectable: true },
          ],
          hint: "Круг вводят слова in и of.",
          why:
            "Круг назван в первой и третьей строках. Во второй и четвёртой не " +
            "сказано, среди чего выделяют.",
        },
        {
          id: "z4-ispravit-stroku-zametki",
          kind: "short",
          prompt:
            "Строку The quietest place is behind the market допиши так, чтобы стало ясно: самое тихое в городе.",
          answer: "The quietest place in the city is behind the market.",
          accept: [
            "The quietest place in the city is behind the market",
            "In the city the quietest place is behind the market.",
          ],
          hint: "Круг встаёт сразу после самой вещи, до глагола.",
          why:
            "The quietest place in the city is behind the market. Круг стоит рядом " +
            "с вещью, а не в конце строки.",
        },
        {
          id: "z5-napisat-zametku",
          kind: "essay",
          prompt:
            "Напиши заметку о своём городе четырьмя строками. В первой назови самое с кругом, дальше назови ещё три самых — одно из них длинным прилагательным, одно со словом my.",
          minWords: 16,
          sample:
            "My city is the oldest in the country.\nThe quietest side of it is behind the market, and the noise level there is the lowest.\nThe most beautiful place is the old square.\nMy best photo is from the top of the hill.",
          checklist: [
            "в первой строке назван круг: in или of",
            "названы не меньше четырёх разных самых",
            "одно самое собрано со словом most",
            "одно самое собрано со словом my",
          ],
          hint:
            "Бери формы, которые знаешь: the biggest, the oldest, the quietest, the most beautiful, my best.",
          why:
            "Заметка работает, когда у первого самого назван круг, а дальше читатель " +
            "уже знает, о чём речь.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину, отличить выделение от сравнения, услышать
      // разговор, дописать круг.

      // ---- итог 1 ----
      {
        id: "q-otlichit-vydelenie-ot-sravneniya",
        kind: "choice",
        outcome: "выделять одно из многих: the biggest animal",
        prompt:
          "Две строки: The whale is bigger и The whale is the biggest. Чем они разные?",
        options: [
          { text: "Первая берёт две вещи, вторая — много.", correct: true },
          { text: "Первая о прошлом, вторая о настоящем." },
          { text: "Ничем: обе про размер." },
        ],
        hint: "Посчитай, сколько вещей нужно каждой строке.",
        why:
          "Первая берёт две вещи, вторая — много. Сравнение требует второй вещи, " +
          "выделение — круга, среди которого выделяют.",
      },
      {
        id: "q-ispravit-a-vmesto-the",
        kind: "short",
        outcome: "выделять одно из многих: the biggest animal",
        prompt:
          "Ученик написал: The camel is a strongest animal here. Запиши строку без ошибки.",
        answer: "The camel is the strongest animal here.",
        accept: ["The camel is the strongest animal here"],
        hint: "Ошибка в коротком слове перед формой выделения.",
        why:
          "The camel is the strongest animal here. Слово a значит «какой-то», а " +
          "самый бывает один — потому перед формой выделения стоит the.",
      },
      {
        id: "q-skolko-the-v-stroke",
        kind: "choice",
        outcome: "выделять одно из многих: the biggest animal",
        prompt:
          "Сколько раз слово the стоит в строке The tiger is the biggest cat?",
        options: [
          { text: "Один." },
          { text: "Два, и это ошибка." },
          { text: "Два, и они о разном.", correct: true },
        ],
        hint: "Посмотри, что стоит после каждого the.",
        why:
          "Два, и они о разном. Первое стоит перед самим тигром, второе открывает " +
          "оборот выделения.",
      },

      // ---- итог 2 ----
      {
        id: "q-pochemu-tolko-st",
        kind: "choice",
        outcome: "выбирать написание формы выделения: the biggest, the nicest",
        prompt:
          "Почему у слова large в форме выделения прибавились только буквы st, а не -est?",
        options: [
          { text: "Потому что слово короткое." },
          { text: "Потому что после g не бывает двух гласных." },
          { text: "Потому что оно уже кончается на e.", correct: true },
        ],
        hint: "Прочитай слово по буквам и посмотри, чего в нём уже хватает.",
        why:
          "Потому что оно уже кончается на e. Второй такой буквы не пишут, и от " +
          "окончания остаются две.",
      },
      {
        id: "q-ispravit-hotest",
        kind: "short",
        outcome: "выбирать написание формы выделения: the biggest, the nicest",
        prompt:
          "Ученик написал: It is the hotest place here. Запиши строку без ошибки.",
        answer: "It is the hottest place here.",
        accept: ["It is the hottest place here"],
        hint: "В слове не хватает одной буквы.",
        why:
          "It is the hottest place here. После краткого гласного согласную " +
          "удваивают, иначе слово читается иначе.",
      },

      // ---- итог 3 ----
      {
        id: "q-kakoe-voz-most",
        kind: "choice",
        outcome: "выделять длинным прилагательным: the most beautiful",
        prompt: "Какое из этих прилагательных возьмёт the most, а не окончание?",
        options: [
          { text: "old" },
          { text: "beautiful", correct: true },
          { text: "wild" },
        ],
        hint: "Посчитай слоги в каждом слове.",
        why:
          "Beautiful. В нём три слога — beau-ti-ful, — а old и wild короткие и " +
          "берут окончание.",
      },
      {
        id: "q-ispravit-dva-sposoba-est",
        kind: "short",
        outcome: "выделять длинным прилагательным: the most beautiful",
        prompt:
          "Ученик написал: It is the most biggest zoo. Запиши строку без ошибки.",
        answer: "It is the biggest zoo.",
        accept: ["It is the biggest zoo"],
        hint: "Способов два, а в строке они сошлись оба.",
        why:
          "It is the biggest zoo. Слово big короткое, значит берёт окончание, а " +
          "most при нём лишнее.",
      },

      // ---- итог 4 ----
      {
        id: "q-in-ili-of",
        kind: "short",
        outcome: "говорить, где именно самое: the biggest room in the house",
        prompt:
          "Допиши слово перед кругом: the youngest ___ the three. Ответь одним словом по-английски.",
        answer: "of",
        accept: ["Of"],
        hint: "Спроси о круге «где» и «среди кого» — который вопрос подойдёт.",
        why:
          "Of. Спросить «где — среди трёх?» нельзя, а «среди кого?» можно, и " +
          "потому здесь of.",
      },
      {
        id: "q-ispravit-krug",
        kind: "short",
        outcome: "говорить, где именно самое: the biggest room in the house",
        prompt:
          "Ученик написал: The tortoise is the oldest in all. Запиши строку без ошибки.",
        answer: "The tortoise is the oldest of all.",
        accept: ["The tortoise is the oldest of all"],
        hint: "Ошибка в коротком слове перед кругом.",
        why:
          "The tortoise is the oldest of all. Слова all — это набор зверей, а не " +
          "место, и потому перед ним of.",
      },
      {
        id: "q-zachem-krug",
        kind: "choice",
        outcome: "говорить, где именно самое: the biggest room in the house",
        prompt: "Зачем в обороте выделения нужен круг?",
        options: [
          { text: "Он говорит, среди кого выделяют.", correct: true },
          { text: "Он заменяет слово the." },
          { text: "Он делает прилагательное длиннее." },
        ],
        hint: "Прочитай оборот без круга и посмотри, что осталось неясным.",
        why:
          "Он говорит, среди кого выделяют. Без него «самая большая комната» " +
          "значит что угодно: в доме, в городе, в стране.",
      },

      // ---- итог 5 ----
      {
        id: "q-my-i-the",
        kind: "choice",
        outcome: "выделять своё: my best friend, my youngest brother",
        prompt: "Почему в обороте my best friend нет слова the?",
        options: [
          { text: "Потому что best короткое слово." },
          { text: "Потому что the ставят только с длинными словами." },
          { text: "Потому что слово my стоит на месте the.", correct: true },
        ],
        hint: "Сравни с оборотом the best friend.",
        why:
          "Слово my стоит на месте the. Два слова разом там не бывают: либо my, " +
          "либо the.",
      },
      {
        id: "q-forma-ot-bad-est",
        kind: "short",
        outcome: "выделять своё: my best friend, my youngest brother",
        prompt:
          "Ученик написал: The socks were the baddest present. Запиши строку без ошибки.",
        answer: "The socks were the worst present.",
        accept: ["The socks were the worst present"],
        hint: "У bad форма выделения своя, и на -est она не кончается.",
        why:
          "The socks were the worst present. У good и bad формы выделения свои: " +
          "best и worst.",
      },

      // ---- итог 6 ----
      {
        id: "q-otlichit-samoe-ot-sravneniya-v-tekste",
        kind: "choice",
        outcome: "находить в тексте, что самое большое и самое старое",
        prompt:
          "В заметке две строки: The zoo is older than the park. The mosque is the oldest building here. Что из них выделяет одно из многих?",
        options: [
          { text: "Обе." },
          { text: "Вторая.", correct: true },
          { text: "Первая." },
        ],
        hint: "Выделение узнают по слову the и окончанию -est.",
        why:
          "Вторая. Первая сравнивает две вещи через than, а выделяет одно из " +
          "многих только строка с the oldest.",
      },
      {
        id: "q-chto-samoe-tihoe",
        kind: "short",
        outcome: "находить в тексте, что самое большое и самое старое",
        prompt:
          "В заметке стоит: The parrots are the noisiest animals here, and the lizards are the quietest. Кто самый тихий? Ответь одним словом по-английски.",
        answer: "lizards",
        accept: ["Lizards", "the lizards", "lizard"],
        hint: "Слова noisiest и quietest значат разное.",
        why:
          "The lizards. Слово quietest называет самых тихих, а попугаи, наоборот, " +
          "самые шумные.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-samoe-zharkoe",
        kind: "short",
        outcome: "слышать в разговоре, что назвали самым",
        zvuk:
          "Which place was the hottest? — The south. — And the coldest? — The top of the hill.",
        prompt:
          "Послушай. Что назвали самым холодным? Ответь одним словом по-английски.",
        answer: "top",
        accept: ["Top", "the top", "the top of the hill", "hill"],
        hint: "Ответ стоит после второго вопроса.",
        why:
          "The top of the hill. Про юг спросили первым, и он назван самым жарким.",
      },
      {
        id: "q-uslyshat-samoe-staroe",
        kind: "short",
        outcome: "слышать в разговоре, что назвали самым",
        zvuk:
          "Which building is the oldest in the city? — The mosque. — And the tallest? — The hotel near the station.",
        prompt:
          "Послушай. Какое здание назвали самым старым? Ответь одним словом по-английски.",
        answer: "mosque",
        accept: ["Mosque", "the mosque"],
        hint: "Зданий названо два, и нужное стоит после первого вопроса.",
        why:
          "The mosque. Самой высокой назвали гостиницу, но спрошено про самое " +
          "старое.",
      },

      // ---- итог 8 ----
      {
        id: "q-dopisat-krug-v-zametku",
        kind: "short",
        outcome: "проверять заметку: у каждого самого названо, среди кого",
        prompt:
          "К строке заметки My city is the oldest допиши круг: в стране. Запиши строку целиком.",
        answer: "My city is the oldest in the country.",
        accept: ["My city is the oldest in the country"],
        hint: "Страна — это место.",
        why:
          "My city is the oldest in the country. Круг в первой строке заметки нужен " +
          "всегда: до него читателю сравнивать не с чем.",
      },
      {
        id: "q-nuzhen-li-krug-vezde",
        kind: "choice",
        outcome: "проверять заметку: у каждого самого названо, среди кого",
        prompt:
          "В заметке круг назван в первой строке. Нужно ли повторять его дальше?",
        options: [
          { text: "Да, в каждой строке." },
          { text: "Нет, если из заметки ясно, о чём речь.", correct: true },
          { text: "Нет, круг вообще не нужен." },
        ],
        hint: "Вспомни, зачем круг нужен в первой строке.",
        why:
          "Нет, если ясно из заметки. Дальше его заменяет слово here или сама " +
          "заметка.",
      },
      {
        id: "q-pochemu-zametka-ne-yasna",
        kind: "choice",
        outcome: "проверять заметку: у каждого самого названо, среди кого",
        prompt:
          "Заметка целиком: I saw a park. It is the biggest. Почему читатель не поймёт?",
        options: [
          { text: "Не сказано, среди каких парков он самый большой.", correct: true },
          { text: "Не сказано, где парк." },
          { text: "В заметке нет формы выделения." },
        ],
        hint: "Форма выделения собрана верно — не хватает другого.",
        why:
          "Не сказано, среди каких парков. Место в заметке тоже не названо, но " +
          "главное здесь круг: без него самый большой значит что угодно.",
      },
    ],
  },
};

export default module;
