import type { Module } from "@/lib/content/types";

/**
 * Модуль 7 курса «Английский с нуля»: мои вещи.
 *
 * Программа: docs/programma-english-starter.md, модуль 7 — «сказать, что у него
 * есть и чьё это»; грамматика: притяжательные `my, your, his, her, our`,
 * `have got` (сверх A1).
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ — И ЧТО ВЫЯСНИЛОСЬ:
 *
 * 1. Притяжательные `my, your, his, her, our` — A1, English Grammar Profile,
 *    DETERMINERS possessives «FORM: WITH NOUNS». Ступень своя.
 *
 * 2. `have got` — ИСТОЧНИКИ РАСХОДЯТСЯ, и пометка «(сверх A1)» в программе
 *    поставлена верно.
 *    English Grammar Profile ставит обороты модуля на A2 тремя строками:
 *    CLAUSES declarative «FORM: NEGATIVE DECLARATIVE WITH 'HAVE'» — дословно
 *    «'have' + 'not' or 'n't (got)'», пример «now I haven't got any money»
 *    (это урок 4); CLAUSES interrogatives «FORM: AFFIRMATIVE INTERROGATIVE,
 *    WITH AUXILIARY 'BE/HAVE'», пример «Have you got a new dress for the
 *    party?» (это урок 5); VERBS types «FORM: AUXILIARY VERBS 'HAVE' AND 'DO'».
 *    Cambridge при этом ставит оборот ниже: руководство для младших ступеней,
 *    с. 11, перечень структур ступени Pre A1 Starters — «Have (got) for
 *    possession: Have you got a pen? She hasn't got a dog.»
 *    Первая моя проверка утверждала, что в English Grammar Profile этих строк
 *    нет вовсе. Это было неверно: искал по слову GOT и не увидел строк, где
 *    оборот описан через auxiliary 'have'. Ошибку нашёл методист.
 *
 * 3. Притяжательный `'s` (Dana's bag) — A2, DETERMINERS possessives «FORM:
 *    SINGULAR NOUN + ''S'». Программа его модулю не отдаёт, и я его НЕ БЕРУ:
 *    «чьё это» здесь выражается только притяжательными словами.
 *
 * ЧЕГО ЗДЕСЬ НЕТ:
 *
 * — множественного числа (модуль 8): «у меня есть сестра», не «две сестры»;
 * — `their` и `its`: программа называет пять притяжательных, беру ровно их;
 * — `mine`, `yours` (A2, PRONOUNS possessive) — их в программе нет вовсе;
 * — настоящего простого времени (модуль 14): `I have a car` не берётся,
 *   только `I've got a car`.
 *
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "moi-veshchi",
  title: "Мои вещи",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, DETERMINERS possessives «FORM: WITH NOUNS»: «Can use possessive determiners " +
        "'my', 'your', 'his', 'her' and 'our' before nouns» — перечень взят поимённо, " +
        "ничего не добавлено. " +
        "A1, DETERMINERS articles «FORM: WITH NOUNS» — артикль там, где притяжательного нет. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'». " +
        "СВЕРХ СТУПЕНИ: A2, CLAUSES declarative «FORM: NEGATIVE DECLARATIVE WITH 'HAVE'» — " +
        "«'have' + 'not' or 'n't (got)'», пример источника «now I haven't got any money» " +
        "(урок 4). A2, CLAUSES interrogatives «FORM: AFFIRMATIVE INTERROGATIVE, WITH " +
        "AUXILIARY 'BE/HAVE'», пример «Have you got a new dress for the party?» (урок 5). " +
        "A2, VERBS types «FORM: AUXILIARY VERBS 'HAVE' AND 'DO'». Пометка «(сверх A1)» в " +
        "программе этим подтверждается. Cambridge при этом ставит оборот ниже — см. запись " +
        "о руководстве для младших ступеней. " +
        "НЕ БЕРЁТСЯ НАМЕРЕННО: A2, «FORM: SINGULAR NOUN + ''S'» — притяжательный `'s`; " +
        "A2, PRONOUNS possessive — `mine`, `yours`",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 11, перечень структур ступени Pre A1 Starters, дословно: «Have (got) for " +
        "possession — Have you got a pen? She hasn't got a dog.» Это единственный источник " +
        "в materials/, который ставит оборот НИЖЕ ступени A1: по English Grammar Profile это A2. " +
        "Там же: «Adjectives — Including possessive adjectives — His name is Yusef» и " +
        "«Pronouns — Including demonstrative, personal, and possessive» — притяжательные " +
        "на той же ступени. " +
        "Там же формы глагола: «Positive, negative, question, imperative and short-answer " +
        "forms, including contractions» — отсюда haven't got и Have you got…?",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves and " +
        "other people, where they live, people they know, **things they have**» — последние " +
        "два пункта и есть содержание модуля: люди, которых знаешь, и вещи, которые есть. " +
        "В модуле 6 этот дескриптор был взят не полностью именно потому, что владельца " +
        "назвать было нечем; здесь он подходит целиком",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 51, «Inventory of functions, notions and communicative tasks», дословно: " +
        "«asking and answering questions about personal possessions» и «asking for and " +
        "giving personal details: (full) name, age, address, names of relatives and " +
        "friends, etc.» — отсюда и вещи, и родные",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: my, your, his, her, our, mother, father, sister, " +
        "brother, friend, family, dog, cat, bike, camera, pencil. Из прежних модулей работают " +
        "bag, key, phone, book, room, car, pen, student — все тоже A1. " +
        "Проверено построчно по выгрузке словника; слов выше A1 в модуле нет",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены " +
        "(CLAUDE.md, раздел о британской норме)",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорит «мой» и «твой»: my bag, your key",
    "говорит «его», «её», «наш»: his phone, her bag, our room",
    "говорит, что у него есть: I've got a car",
    "говорит, чего у него нет: I haven't got a car",
    "спрашивает, есть ли что-то: Have you got a pen?",
    "называет родных и друзей",
    "спрашивает и отвечает, чья это вещь",
    "рассказывает о своих вещах и о своей семье",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "moy-i-tvoy",
      title: "Мой и твой",
      estimatedMinutes: 13,
      outcome: "говорит «мой» и «твой»: my bag, your key",

      blocks: [
        {
          id: "zachem-prityazhatelnye",
          kind: "explain",
          text: [
            "Назвать предмет ты уже умеешь: It's a bag. Осталось сказать, чей он: my bag — " +
              "моя сумка, your bag — твоя сумка.",
            "Слово my ставят перед названием предмета, ровно на то место, где раньше стояло " +
              "a. Оба сразу не ставят: «my a bag» — ошибка. Что-то одно.",
          ],
        },
        {
          id: "tablica-moy-tvoy",
          kind: "table",
          caption: "Чья вещь",
          head: ["Слово", "Перевод", "Пример", "Перевод примера"],
          rows: [
            ["my", "мой, моя", "It's my bag.", "Это моя сумка."],
            ["your", "твой, твоя, ваш", "It's your key.", "Это твой ключ."],
          ],
        },
        {
          id: "my-vmesto-a",
          kind: "note",
          tone: "mistake",
          text:
            "«It's a my bag» — лишнее слово. Место перед названием предмета одно, и его " +
            "занимает либо a, либо my. Правильно: It's a bag или It's my bag.",
        },
        {
          id: "your-i-tvoy-i-vash",
          kind: "note",
          tone: "info",
          text:
            "Your — это и «твой», и «ваш», так же как you — и «ты», и «вы». Отдельного слова " +
            "для вежливого обращения в английском нет, и здесь тоже.",
        },
        {
          id: "my-name-uzhe-bylo",
          kind: "note",
          tone: "info",
          text:
            "Оборот my name из модуля про приветствие устроен так же: my перед названием. " +
            "Тогда его брали целиком, теперь видно, как он собран.",
        },
        {
          id: "zapis-moy-tvoy",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары",
          transcript: "My bag. Your bag. My key. Your key. It's my phone. It's your phone.",
        },
        {
          id: "slovar-moy-tvoy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "my", translation: "мой, моя", example: "It's my bag.", hint: "/maɪ/" },
            { term: "your", translation: "твой, ваш", example: "It's your key.", hint: "/jɔː/" },
            { term: "pencil", translation: "карандаш", example: "It's my pencil.", hint: "/ˈpensl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-lishnee",
          kind: "choice",
          prompt: "В какой строке лишнее слово?",
          options: [
            { text: "It's my bag." },
            { text: "It's a my bag.", correct: true },
            { text: "It's a bag." },
          ],
          hint: "Перед названием предмета стоит что-то одно.",
          why: "«It's a my bag» — a и my борются за одно место. Нужно что-то одно.",
        },
        {
          id: "z2-dopisat-moy",
          kind: "gap",
          prompt: "Допиши слово: «Это моя книга».",
          before: "It's ",
          after: " book.",
          answer: "my",
          hint: "Две буквы, и артикль a при этом уходит.",
          why: "It's my book. Слово my встало на место, где раньше стояло a.",
        },
        {
          id: "z3-otmetit-oshibki",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой.",
          parts: [
            { text: "It's my pencil.", selectable: true },
            { text: " · " },
            { text: "It's your a phone.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's a key.", selectable: true },
            { text: " · " },
            { text: "It's a my bag.", selectable: true, correct: true },
          ],
          hint: "Ищи строки, где перед названием предмета стоят сразу два слова.",
          why:
            "«It's your a phone» и «It's a my bag» — по два слова на одно место. Правильно: " +
            "It's your phone и It's my bag.",
        },
        {
          id: "z4-sobrat-o-svoyom",
          kind: "order",
          prompt: "Собери предложение: «Это мой телефон».",
          items: ["phone", "It's", "my"],
          answer: [1, 2, 0],
          hint: "Слово о принадлежности стоит перед названием предмета.",
          why: "It's my phone. Порядок тот же, что был с a.",
        },
        {
          id: "z5-zapisat-o-tvoyom",
          kind: "short",
          prompt: "Запиши по-английски: «Это твой карандаш». Начни с It's.",
          answer: "It's your pencil.",
          exact: true,
          accept: ["It's your pencil", "It is your pencil.", "It is your pencil"],
          hint: "Артикль здесь не нужен.",
          why: "It's your pencil. Перед названием предмета стоит your, и a уже не нужно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ego-eyo-nash",
      title: "Его, её, наш",
      estimatedMinutes: 13,
      outcome: "говорит «его», «её», «наш»: his phone, her bag, our room",

      blocks: [
        {
          id: "zachem-ostalnye",
          kind: "explain",
          text: [
            "Кроме my и your есть ещё три: his — «его», her — «её», our — «наш». Всего пять " +
              "слов, и все они работают одинаково: стоят перед названием предмета.",
            "Выбор зависит от владельца, а не от предмета. По-русски «его сумка» и «его " +
              "ключ» меняют окончание — по-английски his не меняется никогда.",
          ],
        },
        {
          id: "tablica-pyati",
          kind: "table",
          caption: "Пять слов о принадлежности",
          head: ["Слово", "Перевод", "Пример"],
          rows: [
            ["my", "мой", "my bag"],
            ["your", "твой, ваш", "your key"],
            ["his", "его", "his phone"],
            ["her", "её", "her book"],
            ["our", "наш", "our room"],
          ],
        },
        {
          id: "vybor-po-vladeltsu",
          kind: "note",
          tone: "mistake",
          text:
            "Выбирают по владельцу, а не по предмету. У Нурлана сумка — his bag, хотя " +
            "«сумка» по-русски женского рода. У Даны телефон — her phone, хотя «телефон» " +
            "мужского. Английские слова о роде предмета ничего не знают.",
        },
        {
          id: "his-i-her-ne-putat",
          kind: "note",
          tone: "info",
          text:
            "His идёт от he, her — от she. Если помнишь, кто из них мужчина, а кто женщина, " +
            "то и здесь не ошибёшься: his — о нём, her — о ней.",
        },
        {
          id: "zapis-pyati",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пять слов",
          transcript: "My bag. Your key. His phone. Her book. Our room.",
        },
        {
          id: "slovar-pyati",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "his", translation: "его", example: "It's his phone.", hint: "/hɪz/" },
            { term: "her", translation: "её", example: "It's her book.", hint: "/hɜː/" },
            { term: "our", translation: "наш", example: "It's our room.", hint: "/ˈaʊə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sumka-nurlana",
          kind: "choice",
          prompt: "Сумка принадлежит Нурлану. Как сказать?",
          options: [{ text: "her bag" }, { text: "his bag", correct: true }, { text: "our bag" }],
          hint: "Выбирают по владельцу, а не по роду слова «сумка».",
          why: "His bag. Нурлан — он, значит his. Слово her было бы о ней.",
        },
        {
          id: "z2-dopisat-eyo",
          kind: "gap",
          prompt: "Телефон принадлежит Дане. Допиши слово.",
          before: "It's ",
          after: " phone.",
          answer: "her",
          hint: "Три буквы, и слово идёт от she.",
          why: "It's her phone. Дана — она, значит her, хотя «телефон» по-русски мужского рода.",
        },
        {
          id: "z3-sopostavit-pyat",
          kind: "match",
          prompt: "Сопоставь слово и перевод.",
          left: ["his", "our", "her"],
          right: ["наш", "её", "его"],
          answer: [2, 0, 1],
          hint: "Два из трёх — об одном человеке, третье — о нескольких.",
          why: "His — его, our — наш, her — её.",
        },
        {
          id: "z4-otmetit-o-ney",
          kind: "hottext",
          prompt: "Отметь строки, где речь о вещах женщины.",
          parts: [
            { text: "her bag", selectable: true, correct: true },
            { text: " · " },
            { text: "his key", selectable: true },
            { text: " · " },
            { text: "her pencil", selectable: true, correct: true },
            { text: " · " },
            { text: "our room", selectable: true },
          ],
          hint: "Ищи слово, которое идёт от she.",
          why: "Her — о ней. His — о нём, our — о нас.",
        },
        {
          id: "z5-zapisat-o-nashem",
          kind: "short",
          prompt: "Запиши по-английски: «Это наша комната». Начни с It's.",
          answer: "It's our room.",
          exact: true,
          accept: ["It's our room", "It is our room.", "It is our room"],
          hint: "Слово о нас начинается с той же буквы, что и our.",
          why: "It's our room. Артикль при этом не нужен.",
        },
        {
          id: "z6-sobrat-o-ego-veshchi",
          kind: "order",
          prompt: "Собери предложение: «Это его карандаш».",
          items: ["pencil", "his", "It's"],
          answer: [2, 1, 0],
          hint: "Сначала It's, потом слово о принадлежности, потом название предмета.",
          why: "It's his pencil. Порядок неизменный.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "u-menya-est",
      title: "У меня есть: I've got",
      estimatedMinutes: 14,
      outcome: "говорит, что у него есть: I've got a car",

      blocks: [
        {
          id: "zachem-have-got",
          kind: "explain",
          text: [
            "«У меня есть машина» по-английски строится не так, как по-русски. Там, где " +
              "по-русски вещь как бы находится у человека, по-английски человек её имеет: " +
              "I have got a car — дословно «я имею машину».",
            "Есть и короткая запись: I've got a car. Апостроф на месте выпавших букв ha, " +
              "и получается то же, что с I'm и he's.",
          ],
        },
        {
          id: "tablica-have-got",
          kind: "table",
          caption: "У кого что есть",
          head: ["Полная запись", "Короткая", "Перевод"],
          rows: [
            ["I have got a car.", "I've got a car.", "У меня есть машина."],
            ["You have got a bike.", "You've got a bike.", "У тебя есть велосипед."],
            ["He has got a dog.", "He's got a dog.", "У него есть собака."],
            ["She has got a cat.", "She's got a cat.", "У неё есть кошка."],
            ["We have got a room.", "We've got a room.", "У нас есть комната."],
          ],
        },
        {
          id: "has-u-tretih",
          kind: "note",
          tone: "mistake",
          text:
            "У he, she и it не have, а has: He has got a dog. Это та же тройка, что берёт " +
            "форму is у глагола be.",
        },
        {
          id: "poryadok-slov-have-got",
          kind: "note",
          tone: "info",
          text:
            "Порядок в предложении прежний: сначала тот, о ком речь, потом глагол, потом " +
            "остальное. Просто глагол теперь из двух слов: have got.",
        },
        {
          id: "zapis-have-got",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай, у кого что есть",
          transcript: "I've got a car. You've got a bike. He's got a dog. She's got a cat.",
        },
        {
          id: "slovar-have-got",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "dog", translation: "собака", example: "I've got a dog.", hint: "/dɒɡ/" },
            { term: "cat", translation: "кошка", example: "She's got a cat.", hint: "/kæt/" },
            { term: "bike", translation: "велосипед", example: "You've got a bike.", hint: "/baɪk/" },
            { term: "camera", translation: "фотоаппарат", example: "He's got a camera.", hint: "/ˈkæmrə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-have-ili-has",
          kind: "choice",
          prompt: "Какое слово нужно после she?",
          options: [{ text: "have" }, { text: "has", correct: true }, { text: "are" }],
          hint: "Та же тройка, что берёт форму is.",
          why: "She has got. Форма has идёт с he, she и it — как и is у глагола be.",
        },
        {
          id: "z2-dopisat-have",
          kind: "gap",
          prompt: "Допиши недостающее слово: «У меня есть велосипед».",
          before: "I've ",
          after: " a bike.",
          answer: "got",
          hint: "Три буквы.",
          why: "I've got a bike. Глагол здесь из двух слов, и второе — got.",
        },
        {
          id: "z3-otmetit-oshibki-has",
          kind: "hottext",
          prompt: "Отметь строки, где выбрана не та форма.",
          parts: [
            { text: "He have got a dog.", selectable: true, correct: true },
            { text: " · " },
            { text: "I've got a camera.", selectable: true },
            { text: " · " },
            { text: "She have got a cat.", selectable: true, correct: true },
            { text: " · " },
            { text: "We've got a room.", selectable: true },
          ],
          hint: "С he и she форма другая.",
          why:
            "«He have got» и «She have got» — с ними идёт has. Правильно: He has got, " +
            "She has got.",
        },
        {
          id: "z4-korotkaya-forma-hes-got",
          kind: "short",
          prompt: "Запиши коротко: «He has got a dog.»",
          answer: "He's got a dog.",
          exact: true,
          accept: ["He's got a dog"],
          hint: "Слипаются he и has, апостроф на месте выпавших букв.",
          why: "He's got a dog. Запись he's тут от he has, а не от he is.",
        },
        {
          id: "z5-sobrat-est",
          kind: "order",
          prompt: "Собери предложение: «У неё есть кошка».",
          items: ["cat", "got", "She's", "a"],
          answer: [2, 1, 3, 0],
          hint: "Сначала кто, потом глагол из двух слов, потом предмет.",
          why: "She's got a cat. Артикль a перед названием предмета обязателен.",
        },
        {
          id: "z6-zapisat-o-sebe",
          kind: "short",
          prompt: "Запиши по-английски: «У меня есть фотоаппарат». Начни с I've.",
          answer: "I've got a camera.",
          exact: true,
          accept: ["I've got a camera", "I have got a camera.", "I have got a camera"],
          hint: "Не забудь артикль a перед названием предмета.",
          why: "I've got a camera — или полностью I have got a camera.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "u-menya-net",
      title: "У меня нет: haven't got",
      estimatedMinutes: 13,
      outcome: "говорит, чего у него нет: I haven't got a car",

      blocks: [
        {
          id: "zachem-otricanie-have",
          kind: "explain",
          text: [
            "Отрицание строится знакомым способом: слово not после первого слова глагола. " +
              "I have not got a car → коротко I haven't got a car.",
            "Апостроф там же, где всегда, — на месте выпавшей буквы o в not. Это тот же приём, " +
              "что в isn't и aren't из модуля про отрицание.",
          ],
        },
        {
          id: "tablica-otricaniya-have",
          kind: "table",
          caption: "Чего нет",
          head: ["Полная запись", "Короткая", "Перевод"],
          rows: [
            ["I have not got a car.", "I haven't got a car.", "У меня нет машины."],
            ["You have not got a bike.", "You haven't got a bike.", "У тебя нет велосипеда."],
            ["He has not got a dog.", "He hasn't got a dog.", "У него нет собаки."],
            ["She has not got a cat.", "She hasn't got a cat.", "У неё нет кошки."],
          ],
        },
        {
          id: "hasnt-u-tretih",
          kind: "note",
          tone: "mistake",
          text:
            "У he, she и it отрицание тоже своё: hasn't got, а не haven't got. Форма " +
            "выбирается по тому же правилу, что и в утверждении.",
        },
        {
          id: "a-ostayotsya-v-otricanii",
          kind: "note",
          tone: "info",
          text:
            "Артикль остаётся и в отрицании: I haven't got a car. По-русски «у меня нет " +
            "машины» обходится без него, по-английски — нет.",
        },
        {
          id: "zapis-otricaniya-have",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай отрицания",
          transcript: "I haven't got a car. He hasn't got a dog. She hasn't got a cat.",
        },

        // ---- задания ----
        {
          id: "z1-forma-otricaniya",
          kind: "choice",
          prompt: "Какая форма нужна после he?",
          options: [{ text: "haven't got" }, { text: "hasn't got", correct: true }, { text: "isn't got" }],
          hint: "Та же тройка, что берёт has.",
          why: "He hasn't got. С he, she и it идёт has, и в отрицании тоже.",
        },
        {
          id: "z2-dopisat-otricanie",
          kind: "gap",
          prompt: "Допиши отрицание: «У меня нет собаки».",
          before: "I ",
          after: " got a dog.",
          answer: "haven't",
          hint: "Апостроф на месте выпавшей буквы o.",
          why: "I haven't got a dog. Полная запись — I have not got a dog.",
        },
        {
          id: "z3-razvernut-otricanie",
          kind: "short",
          prompt: "Запиши полностью, без короткой формы: «She hasn't got a cat.»",
          answer: "She has not got a cat.",
          exact: true,
          accept: ["She has not got a cat"],
          hint: "Апостроф уходит, буква возвращается.",
          why: "She has not got a cat. Hasn't разворачивается в has not.",
        },
        {
          id: "z4-otmetit-nevernye",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой.",
          parts: [
            { text: "He haven't got a bike.", selectable: true, correct: true },
            { text: " · " },
            { text: "I haven't got a camera.", selectable: true },
            { text: " · " },
            { text: "She hasn't got a dog.", selectable: true },
            { text: " · " },
            { text: "I haven't got camera.", selectable: true, correct: true },
          ],
          hint: "Одна ошибка — не та форма, другая — потерянное слово.",
          why:
            "«He haven't got» — нужна форма hasn't. «I haven't got camera» — потерян артикль.",
        },
        {
          id: "z5-popravit-o-veshchi",
          kind: "short",
          prompt: "Собеседник сказал: «You've got a car.» У тебя машины нет. Возрази одним предложением.",
          answer: "I haven't got a car.",
          exact: true,
          accept: [
            "I haven't got a car",
            "I have not got a car.",
            "I have not got a car",
            "No, I haven't.",
            "No, I haven't",
          ],
          hint: "Отвечаешь о себе, значит первое слово меняется.",
          why: "I haven't got a car. Про you сказали — про I отвечаешь.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "est-li-u-tebya",
      title: "Есть ли у тебя: Have you got?",
      estimatedMinutes: 13,
      outcome: "спрашивает, есть ли что-то: Have you got a pen?",

      blocks: [
        {
          id: "zachem-vopros-have",
          kind: "explain",
          text: [
            "Вопрос строится перестановкой — так же, как с глаголом be. You have got a pen → " +
              "Have you got a pen?",
            "Меняются местами первые два слова: тот, о ком речь, и первое слово глагола. " +
              "Слово got остаётся на месте.",
          ],
        },
        {
          id: "tablica-voprosa-have",
          kind: "table",
          caption: "Вопрос и краткие ответы",
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Have you got a pen?", "Yes, I have.", "No, I haven't."],
            ["Has he got a dog?", "Yes, he has.", "No, he hasn't."],
            ["Has she got a bike?", "Yes, she has.", "No, she hasn't."],
          ],
        },
        {
          id: "v-otvete-bez-got",
          kind: "note",
          tone: "mistake",
          text:
            "В кратком ответе слова got нет: «Yes, I have», а не «Yes, I have got». " +
            "Повторяют только то, о ком речь, и первое слово глагола — как в модуле про " +
            "вопрос и краткий ответ.",
        },
        {
          id: "has-otkryvaet-vopros",
          kind: "note",
          tone: "info",
          text:
            "Про he, she и it вопрос открывает has: Has he got a dog? Это то же правило, " +
            "что в утверждении и в отрицании, — форма выбирается по тому, о ком речь.",
        },
        {
          id: "primer-prosby",
          kind: "example",
          caption: "Зачем это нужно",
          text: "— Have you got a pen?\n— Yes, I have.\n— Thank you!",
          explain:
            "Этим вопросом просят одолжить вещь. Ответ короткий, а дальше в ход идут слова " +
            "вежливости из модуля про приветствие.",
        },
        {
          id: "zapis-voprosa-have",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопрос и ответы",
          transcript: "Have you got a pen? — Yes, I have. Has he got a dog? — No, he hasn't.",
        },

        // ---- задания ----
        {
          id: "z1-sdelat-vopros-have",
          kind: "short",
          prompt: "Сделай вопрос из «You have got a bike.»",
          answer: "Have you got a bike?",
          exact: true,
          accept: ["Have you got a bike"],
          hint: "Меняются местами первые два слова.",
          why: "Have you got a bike? Got остаётся на месте, знак вопроса в конце.",
        },
        {
          id: "z2-otvetit-da",
          kind: "choice",
          prompt: "«Have you got a pen?» Ответь утвердительно и коротко.",
          options: [
            { text: "Yes, I have got." },
            { text: "Yes, I have.", correct: true },
            { text: "Yes, I've." },
          ],
          hint: "В кратком ответе слова got нет, и короткая форма в конце не ставится.",
          why:
            "Yes, I have. Слово got в ответе не повторяют, а «Yes, I've» невозможно: " +
            "короткую форму в конце предложения не ставят. С haven't такого запрета нет: " +
            "«No, I haven't» — верно.",
        },
        {
          id: "z3-dopisat-has",
          kind: "gap",
          prompt: "Допиши первое слово вопроса про Нурлана.",
          before: "",
          after: " he got a camera?",
          answer: "Has",
          exact: true,
          hint: "С заглавной — слово открывает вопрос.",
          why: "Has he got a camera? С he идёт has, и в вопросе эта форма выходит вперёд.",
        },
        {
          id: "z4-otmetit-voprosy",
          kind: "hottext",
          prompt: "Отметь строки, в которых задан вопрос.",
          parts: [
            { text: "Have you got a dog?", selectable: true, correct: true },
            { text: " · " },
            { text: "She's got a cat.", selectable: true },
            { text: " · " },
            { text: "Has he got a bike?", selectable: true, correct: true },
            { text: " · " },
            { text: "I haven't got a car.", selectable: true },
          ],
          hint: "Смотри, что стоит первым словом.",
          why: "В вопросе первым идёт have или has. В сообщении первым стоит тот, о ком речь.",
        },
        {
          id: "z5-otvetit-net",
          kind: "gap",
          prompt: "«Has she got a bike?» У неё велосипеда нет. Допиши краткий ответ.",
          before: "No, she ",
          after: ".",
          answer: "hasn't",
          hint: "Слова got в ответе нет.",
          why: "No, she hasn't. Повторяют только she и форму глагола.",
        },
        {
          id: "z6-poprosit-ruchku",
          kind: "speak",
          prompt: "Произнеси вслух просьбу одолжить ручку и ответ на неё.",
          phrase: "Have you got a pen? — Yes, I have.",
          translation: "У тебя есть ручка? — Да.",
          hint: "В вопросе голос к концу идёт вверх.",
          why:
            "Тот же вопрос годится и как просьба дать что-то на время.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rodnye-i-druzya",
      title: "Родные и друзья",
      estimatedMinutes: 13,
      outcome: "называет родных и друзей",

      blocks: [
        {
          id: "zachem-rodnye",
          kind: "explain",
          text: [
            "Have got говорят не только о вещах: I've got a sister — «у меня есть сестра». " +
              "Так же рассказывают о родных и друзьях.",
            "Слова здесь новые, а устройство прежнее: have got и слова о принадлежности из " +
              "первых двух уроков.",
          ],
        },
        {
          id: "tablica-rodnyh",
          kind: "table",
          caption: "Шесть слов о родных",
          head: ["Слово", "Перевод", "Произношение"],
          rows: [
            ["family", "семья", "/ˈfæmɪli/"],
            ["mother", "мать", "/ˈmʌðə/"],
            ["father", "отец", "/ˈfɑːðə/"],
            ["sister", "сестра", "/ˈsɪstə/"],
            ["brother", "брат", "/ˈbrʌðə/"],
            ["friend", "друг, подруга", "/frend/"],
          ],
        },
        {
          id: "th-v-rodnyh",
          kind: "note",
          tone: "info",
          text:
            "В mother, father и brother буквы th передают звук /ð/, которого в русском нет. " +
            "Кончик языка касается верхних зубов — так же, как в thank you из модуля про " +
            "приветствие. Разница одна: здесь включается голос. Тот же звук стоит в " +
            "this и that.",
        },
        {
          id: "friend-bez-roda",
          kind: "note",
          tone: "info",
          text:
            "Friend — и «друг», и «подруга»: слово о роде не говорит. Кто именно, показывает " +
            "he или she рядом: He's my friend. She's my friend.",
        },
        {
          id: "zapis-rodnyh",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай шесть слов",
          transcript: "Family. Mother. Father. Sister. Brother. Friend.",
        },
        {
          id: "slovar-rodnyh",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "family", translation: "семья", example: "my family", hint: "/ˈfæmɪli/" },
            { term: "mother", translation: "мать", example: "my mother", hint: "/ˈmʌðə/" },
            { term: "father", translation: "отец", example: "my father", hint: "/ˈfɑːðə/" },
            { term: "sister", translation: "сестра", example: "I've got a sister.", hint: "/ˈsɪstə/" },
            { term: "brother", translation: "брат", example: "I've got a brother.", hint: "/ˈbrʌðə/" },
            { term: "friend", translation: "друг, подруга", example: "She's my friend.", hint: "/frend/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sestra",
          kind: "choice",
          prompt: "Как по-английски «сестра»?",
          options: [{ text: "brother" }, { text: "mother" }, { text: "sister", correct: true }],
          hint: "У всех трёх слов конец совпадает — различай их по началу.",
          why: "Sister — сестра. Brother — брат, mother — мать.",
        },
        {
          id: "z2-dopisat-brata",
          kind: "gap",
          prompt: "Допиши: «У меня есть брат».",
          before: "I've got a ",
          after: ".",
          answer: "brother",
          hint: "Семь букв, первая — b.",
          why: "I've got a brother. Артикль a перед названием обязателен и здесь.",
        },
        {
          id: "z3-sopostavit-rodnyh",
          kind: "match",
          prompt: "Сопоставь слово и перевод.",
          left: ["father", "friend", "family"],
          right: ["семья", "отец", "друг"],
          answer: [1, 2, 0],
          hint: "Два слова начинаются с одной буквы — различай по остальному.",
          why: "Father — отец, friend — друг, family — семья.",
        },
        {
          id: "z4-otmetit-so-zvukom",
          kind: "hottext",
          prompt: "Отметь слова, в которых звучит /ð/ — тот звук, что в this и that.",
          parts: [
            { text: "sister", selectable: true },
            { text: " · " },
            { text: "mother", selectable: true, correct: true },
            { text: " · " },
            { text: "brother", selectable: true, correct: true },
            { text: " · " },
            { text: "friend", selectable: true },
          ],
          hint: "Произнеси каждое слово: в двух язык окажется между зубами.",
          why:
            "Mother /ˈmʌðə/ и brother /ˈbrʌðə/. В sister звучит /s/, во friend — /f/ и /d/, " +
            "звука /ð/ в них нет.",
        },
        {
          id: "z5-o-svoyom-druge",
          kind: "short",
          prompt: "Запиши по-английски: «Она моя подруга». Начни с She's.",
          answer: "She's my friend.",
          exact: true,
          accept: ["She's my friend", "She is my friend.", "She is my friend"],
          hint: "Слово friend годится и о ней, и о нём.",
          why: "She's my friend. Артикль здесь не нужен: перед названием стоит my.",
        },
        {
          id: "z6-prodiktovat-family",
          kind: "short",
          prompt: "Продиктуй слово family: запиши его по буквам через дефис.",
          answer: "F-A-M-I-L-Y",
          accept: ["f-a-m-i-l-y", "F A M I L Y", "f a m i l y"],
          hint: "Шесть букв. Последняя называется /waɪ/.",
          why: "F-A-M-I-L-Y. Умение из первого модуля пригодится и здесь.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chya-eto-veshch",
      title: "Чья это вещь",
      estimatedMinutes: 13,
      outcome: "спрашивает и отвечает, чья это вещь",

      blocks: [
        {
          id: "zachem-chya",
          kind: "explain",
          text: [
            "Вещь нашлась, а чья — неизвестно. Спрашивают так: Is this your bag? — «Это " +
              "твоя сумка?» Вопрос строится перестановкой, как всегда с be.",
            "Отвечают коротко и, если нужно, называют владельца: No, it isn't. It's her bag.",
          ],
        },
        {
          id: "tablica-chya",
          kind: "table",
          caption: "Вопрос о владельце",
          head: ["Вопрос", "Да", "Нет — и как на самом деле"],
          rows: [
            ["Is this your bag?", "Yes, it is.", "No, it isn't. It's her bag."],
            ["Is this his pencil?", "Yes, it is.", "No, it isn't. It's my pencil."],
            ["Is that our room?", "Yes, it is.", "No, it isn't. It's your room."],
          ],
        },
        {
          id: "otvet-cherez-it",
          kind: "note",
          tone: "mistake",
          text:
            "В ответе всегда it, даже если спросили через this или that: «Yes, it is», а не " +
            "«Yes, this is». Правило то же, что в модуле про предметы.",
        },
        {
          id: "moy-v-otvete",
          kind: "note",
          tone: "info",
          text:
            "Отвечая о своей вещи, меняешь слово: спросили your — отвечаешь my. Так же, как " +
            "с местоимениями: спросили про you — отвечаешь про I.",
        },
        {
          id: "zapis-chya",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор о находке",
          transcript: "Is this your bag? — No, it isn't. It's her bag.",
        },

        // ---- задания ----
        {
          id: "z1-sprosit-chya",
          kind: "short",
          prompt: "Спроси, твоя ли это сумка. Запиши вопрос целиком.",
          answer: "Is this your bag?",
          exact: true,
          accept: ["Is this your bag", "Is that your bag?", "Is that your bag"],
          hint: "Вопрос открывает форма be.",
          why: "Is this your bag? Перестановка та же, что во всех вопросах с be.",
        },
        {
          id: "z2-otvetit-o-svoyom",
          kind: "choice",
          prompt: "«Is this your pencil?» Карандаш твой. Что ответить?",
          options: [
            { text: "Yes, it is. It's your pencil." },
            { text: "Yes, it is. It's my pencil.", correct: true },
            { text: "Yes, this is." },
          ],
          hint: "Спросили про your — отвечаешь про себя.",
          why:
            "Yes, it is. It's my pencil. Первый ответ повторяет чужое слово, третий — " +
            "неверное местоимение.",
        },
        {
          id: "z3-dopisat-vladeltsa",
          kind: "gap",
          prompt: "Сумка принадлежит Дане. Допиши ответ.",
          before: "No, it isn't. It's ",
          after: " bag.",
          answer: "her",
          hint: "Дана — она.",
          why: "No, it isn't. It's her bag. Выбирают по владельцу, а не по роду слова.",
        },
        {
          id: "z4-otmetit-nevernye-otvety",
          kind: "hottext",
          prompt: "Отметь ответы с ошибкой.",
          parts: [
            { text: "Yes, it is.", selectable: true },
            { text: " · " },
            { text: "Yes, this is.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, it isn't. It's his key.", selectable: true },
            { text: " · " },
            { text: "No, it isn't. It's a my key.", selectable: true, correct: true },
          ],
          hint: "Одна ошибка — не то местоимение, другая — лишнее слово.",
          why:
            "«Yes, this is» — в ответе всегда it. «It's a my key» — a и my на одном месте.",
        },
        {
          id: "z5-sobrat-razgovor-o-nahodke",
          kind: "order",
          prompt: "Расставь разговор по порядку.",
          items: ["No, it isn't. It's his bag.", "Is this your bag?", "Thank you!"],
          answer: [1, 0, 2],
          hint: "Сначала спрашивают.",
          why: "Is this your bag? — No, it isn't. It's his bag. — Thank you!",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-veshchah",
      title: "Рассказ о своих вещах и семье",
      estimatedMinutes: 15,
      outcome: "рассказывает о своих вещах и о своей семье",

      blocks: [
        {
          id: "zachem-rasskaz-o-veshchah",
          kind: "explain",
          text: [
            "Всё собрано: чьё это, что есть, чего нет, как спросить. Соединим их в рассказ — " +
              "такой, каким отвечают на вопрос «расскажи о себе» после имени и занятия.",
            "Рассказ строится тремя оборотами: I've got…, I haven't got…, It's my…",
          ],
        },
        {
          id: "polnyy-rasskaz-o-veshchah",
          kind: "example",
          caption: "Рассказ целиком",
          text:
            "I'm Dana. I've got a sister. Her name is Aliya. I haven't got a brother. " +
            "My sister is a student. I've got a cat.",
          explain:
            "Второе и третье предложения соединяют слово о принадлежности с оборотом из " +
            "модуля про приветствие: her name — «её имя». Слово her здесь о сестре, о " +
            "которой только что сказали.",
        },
        {
          id: "tablica-oborotov",
          kind: "table",
          caption: "Три оборота рассказа",
          head: ["Оборот", "О чём", "Пример"],
          rows: [
            ["I've got…", "что есть", "I've got a sister."],
            ["I haven't got…", "чего нет", "I haven't got a brother."],
            ["It's my…", "чьё это", "It's my camera."],
          ],
        },
        {
          id: "chto-legko-poteryat-veshchi",
          kind: "note",
          tone: "mistake",
          text:
            "В длинном рассказе теряются два коротких слова: got и a. «I've a sister» — нет " +
            "got, «I've got sister» — нет a. В обоих случаях не хватает одного слова.",
        },
        {
          id: "zapis-rasskaza-o-veshchah",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "I'm Dana. I've got a sister. Her name is Aliya. I haven't got a brother. " +
            "My sister is a student. I've got a cat.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-o-veshchah",
          kind: "order",
          prompt: "Расставь рассказ по порядку: имя, что есть, чего нет.",
          items: ["I haven't got a brother.", "I'm Alim.", "I've got a sister."],
          answer: [1, 2, 0],
          hint: "Начни с имени.",
          why: "I'm Alim. I've got a sister. I haven't got a brother.",
        },
        {
          id: "z2-najti-poteri",
          kind: "hottext",
          prompt: "Отметь предложения, в которых потерялось слово.",
          parts: [
            { text: "I've got a cat.", selectable: true },
            { text: " · " },
            { text: "I've a sister.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's my camera.", selectable: true },
            { text: " · " },
            { text: "I've got brother.", selectable: true, correct: true },
          ],
          hint: "В одном предложении нет got, в другом — короткого слова перед названием.",
          why:
            "«I've a sister» — нет got. «I've got brother» — нет a. Правильно: I've got a " +
            "sister, I've got a brother.",
        },
        {
          id: "z3-dopisat-o-seme",
          kind: "gap",
          prompt: "Допиши: «У меня есть сестра».",
          before: "I've got a ",
          after: ".",
          answer: "sister",
          hint: "Шесть букв.",
          why: "I've got a sister. Оборот тот же, что и о вещах.",
        },
        {
          id: "z4-sopostavit-oboroty",
          kind: "match",
          prompt: "Сопоставь оборот и то, о чём он.",
          left: ["I've got…", "I haven't got…", "It's my…"],
          right: ["чьё это", "что есть", "чего нет"],
          answer: [1, 2, 0],
          hint: "Два оборота о наличии, третий — о принадлежности.",
          why: "I've got — что есть, I haven't got — чего нет, It's my — чьё это.",
        },
        {
          id: "z5-zapisat-dva-predlozheniya",
          kind: "short",
          prompt: "Запиши по-английски: «У меня есть кошка. Это моя кошка.» Два предложения.",
          answer: "I've got a cat. It's my cat.",
          exact: true,
          accept: [
            "I've got a cat. It's my cat",
            "I have got a cat. It is my cat.",
            "I have got a cat. It is my cat",
          ],
          hint: "В первом предложении a, во втором — my вместо него.",
          why:
            "I've got a cat. It's my cat. В первом предложении артикль a, во втором его место " +
            "занимает my.",
        },
        {
          id: "z6-rasskaz-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух рассказ о себе: что у тебя есть, чего нет, чья вещь рядом.",
          phrase: "I've got a ... . I haven't got a ... . It's my ... .",
          translation: "У меня есть ... . У меня нет ... . Это мой ... .",
          hint: "Между предложениями делай паузу.",
          why: "Это весь модуль в одном упражнении: наличие, отсутствие и принадлежность.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 18, спрашиваем восемь — по одному на каждый итог.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      {
        id: "q-moy-lishnee",
        kind: "choice",
        outcome: "говорит «мой» и «твой»: my bag, your key",
        prompt: "В какой строке два слова борются за одно место?",
        options: [
          { text: "It's your key." },
          { text: "It's a key." },
          { text: "It's a your key.", correct: true },
        ],
        why: "«It's a your key» — перед названием предмета стоит либо a, либо your.",
      },
      {
        id: "q-dopisat-tvoy",
        kind: "gap",
        outcome: "говорит «мой» и «твой»: my bag, your key",
        prompt: "Допиши слово: «Это твоя сумка».",
        before: "It's ",
        after: " bag.",
        answer: "your",
        why: "It's your bag. Артикль a при этом уходит.",
      },
      {
        id: "q-vybor-po-vladeltsu",
        kind: "gap",
        outcome: "говорит «его», «её», «наш»: his phone, her bag, our room",
        prompt: "Книга принадлежит Алиму. Допиши слово.",
        before: "It's ",
        after: " book.",
        answer: "his",
        why: "It's his book. Алим — он, значит his, хотя «книга» по-русски женского рода.",
      },
      {
        id: "q-sopostavit-prityazhatelnye",
        kind: "match",
        outcome: "говорит «его», «её», «наш»: his phone, her bag, our room",
        prompt: "Сопоставь слово и того, кому принадлежит вещь.",
        left: ["his key", "her key", "our key"],
        right: ["ключ нескольких людей", "ключ мужчины", "ключ женщины"],
        answer: [1, 2, 0],
        why: "His — о мужчине, her — о женщине, our — о нескольких, включая тебя.",
      },
      {
        id: "q-est-u-nego",
        kind: "gap",
        outcome: "говорит, что у него есть: I've got a car",
        prompt: "Допиши форму глагола: «У него есть собака».",
        before: "He ",
        after: " got a dog.",
        answer: "has",
        why: "He has got a dog. С he, she и it идёт has — как и is у глагола be.",
      },
      {
        id: "q-zapisat-est",
        kind: "short",
        outcome: "говорит, что у него есть: I've got a car",
        prompt: "Запиши по-английски: «У меня есть велосипед». Начни с I've.",
        answer: "I've got a bike.",
        exact: true,
        accept: ["I've got a bike", "I have got a bike.", "I have got a bike"],
        why: "I've got a bike. Глагол из двух слов, и артикль перед названием обязателен.",
      },
      {
        id: "q-net-u-neyo",
        kind: "gap",
        outcome: "говорит, чего у него нет: I haven't got a car",
        prompt: "Допиши отрицание: «У неё нет собаки».",
        before: "She ",
        after: " got a dog.",
        answer: "hasn't",
        why: "She hasn't got a dog. С she идёт has, и в отрицании тоже.",
      },
      {
        id: "q-a-v-otricanii",
        kind: "choice",
        outcome: "говорит, чего у него нет: I haven't got a car",
        prompt: "В какой строке потерялось слово?",
        options: [
          { text: "I haven't got a car." },
          { text: "He hasn't got camera.", correct: true },
          { text: "She hasn't got a cat." },
        ],
        why: "«He hasn't got camera» — потерян артикль. Он нужен и в отрицании.",
      },
      {
        id: "q-sdelat-vopros-have",
        kind: "short",
        outcome: "спрашивает, есть ли что-то: Have you got a pen?",
        prompt: "Спроси, есть ли у собеседника фотоаппарат. Запиши вопрос целиком.",
        answer: "Have you got a camera?",
        exact: true,
        accept: ["Have you got a camera"],
        why: "Have you got a camera? Первые два слова поменялись местами.",
      },
      {
        id: "q-kratkiy-otvet-have",
        kind: "choice",
        outcome: "спрашивает, есть ли что-то: Have you got a pen?",
        prompt: "«Has he got a bike?» У него велосипеда нет. Ответь коротко.",
        options: [
          { text: "No, he hasn't.", correct: true },
          { text: "No, he hasn't got." },
          { text: "No, he isn't." },
        ],
        why: "No, he hasn't. Got в кратком ответе не повторяют, а isn't — форма другого глагола.",
      },
      {
        id: "q-brat-po-angliyski",
        kind: "gap",
        outcome: "называет родных и друзей",
        prompt: "Допиши: «У неё есть сестра».",
        before: "She's got a ",
        after: ".",
        answer: "sister",
        why: "She's got a sister. Sister — сестра, brother — брат.",
      },
      {
        id: "q-drug-bez-roda",
        kind: "choice",
        outcome: "называет родных и друзей",
        prompt: "Как сказать «она моя подруга»?",
        options: [
          { text: "She's my friend.", correct: true },
          { text: "She's a my friend." },
          { text: "She's my a friend." },
        ],
        why: "She's my friend. Слово friend годится и о ней, и о нём, а a при my не нужно.",
      },
      {
        id: "q-sprosit-chya-veshch",
        kind: "short",
        outcome: "спрашивает и отвечает, чья это вещь",
        prompt: "Спроси, его ли это карандаш. Запиши вопрос целиком.",
        answer: "Is this his pencil?",
        exact: true,
        accept: ["Is this his pencil", "Is that his pencil?", "Is that his pencil"],
        why: "Is this his pencil? Вопрос открывает форма be.",
      },
      {
        id: "q-otvetit-o-svoey-veshchi",
        kind: "choice",
        outcome: "спрашивает и отвечает, чья это вещь",
        prompt: "«Is this your bag?» Сумка твоя. Что ответить?",
        options: [
          { text: "Yes, this is." },
          { text: "Yes, it is. It's your bag." },
          { text: "Yes, it is. It's my bag.", correct: true },
        ],
        why: "Yes, it is. It's my bag. Спросили про your — отвечаешь про себя.",
      },
      {
        id: "q-sobrat-rasskaz-veshchi",
        kind: "order",
        outcome: "рассказывает о своих вещах и о своей семье",
        prompt: "Расставь рассказ по порядку: имя, что есть, чего нет.",
        items: ["I've got a cat.", "I haven't got a dog.", "I'm Dana."],
        answer: [2, 0, 1],
        why: "I'm Dana. I've got a cat. I haven't got a dog.",
      },
      {
        id: "q-dva-predlozheniya-o-veshchi",
        kind: "short",
        outcome: "рассказывает о своих вещах и о своей семье",
        prompt: "Запиши по-английски: «У меня есть фотоаппарат. Это мой фотоаппарат.» Два предложения.",
        answer: "I've got a camera. It's my camera.",
        exact: true,
        accept: [
          "I've got a camera. It's my camera",
          "I have got a camera. It is my camera.",
          "I have got a camera. It is my camera",
        ],
        why: "I've got a camera. It's my camera. В первом a, во втором его место занимает my.",
      },
      {
        id: "q-otmetit-poteri-got",
        kind: "hottext",
        outcome: "говорит, что у него есть: I've got a car",
        prompt: "Отметь предложения, в которых потерялось слово.",
        parts: [
          { text: "We've got a room.", selectable: true },
          { text: " · " },
          { text: "She's got camera.", selectable: true, correct: true },
          { text: " · " },
          { text: "He's got a bike.", selectable: true },
          { text: " · " },
          { text: "You've a dog.", selectable: true, correct: true },
        ],
        why: "«She's got camera» — нет a. «You've a dog» — нет got.",
      },
      {
        id: "q-th-v-slovah",
        kind: "hottext",
        outcome: "называет родных и друзей",
        prompt: "Отметь слова, называющие мужчину.",
        parts: [
          { text: "father", selectable: true, correct: true },
          { text: " · " },
          { text: "sister", selectable: true },
          { text: " · " },
          { text: "mother", selectable: true },
          { text: " · " },
          { text: "brother", selectable: true, correct: true },
        ],
        why: "Father — отец, brother — брат. Sister и mother называют женщину.",
      },
    ],
  },
};

export default module;
