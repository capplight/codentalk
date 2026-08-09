import type { Module } from "@/lib/content/types";

/**
 * Модуль 1 курса «Английский с нуля»: алфавит и своё имя.
 *
 * Программа: docs/programma-english-starter.md, раздел «Почему курс начинается
 * с алфавита». Список ошибок, которых здесь следует избегать, —
 * docs/format-uroka.md, «Чему научил первый модуль».
 *
 * ЧТО ЗДЕСЬ НЕ ТАК, И ЭТО ИЗВЕСТНО:
 *
 * 1. Написано два урока, а программа отводит модулю восемь. Это первая часть.
 *
 * 2. Половина замысла ждёт звука. Источник разносит умения по колонкам: буквы на
 *    этой ступени СЛУШАЮТ и ПИШУТ. Слушание пока невозможно — записей нет, и
 *    решение об их источнике за владельцем (docs/zadachi-vladeltsa.md, п. 1.4).
 *    Поэтому итоги названы так, как их можно проверить сегодня: продиктованное
 *    слово ученик получает записью через дефис, а не голосом. Как появится звук, те же
 *    задания получат настоящую диктовку.
 *
 * 3. Названий букв нет ни в одном словнике. Произношение собрано из
 *    wikipron-en-uk.tsv: в ipa-en-uk.txt отсутствуют двенадцать названий из
 *    двадцати шести. Британская норма: `z` — zed.
 *
 *    РЕШЕНО ВЛАДЕЛЬЦЕМ (август 2026):
 *    — семь названий (F, L, M, N, S, X, Z) пишем через `e`, а не `ɛ`, хотя в
 *      источниках стоит `ɛ`. Обычная словарная запись, принята для всего курса
 *      (CLAUDE.md, раздел о британской норме);
 *    — `Kazakh` — `/kəˈzɑːk/`, британская форма.
 *
 *    ЕЩЁ ОТКРЫТО:
 *    — `/ˈdʌbljuː/` для W: слова `double-u` нет ни в одном из трёх файлов
 *      произношения. Написано по общей норме и ждёт слова владельца;
 *    — противопоставление zed/zee как британского и американского: оба слова
 *      помечены и в британском, и в американском файле Викисловаря.
 */
const module: Module = {
  slug: "alfavit",
  title: "Алфавит и своё имя",

  sources: [
    {
      ref: "Cambridge English, Pre A1 Starters — Can Do summary",
      section:
        "с. 9: «CAN understand letters of the English alphabet when heard» (слушание) и " +
        "«CAN write the letters of the English alphabet», «CAN write name using the English " +
        "alphabet» (письмо). Умения разнесены по колонкам — модуль опирается на письменную",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 16: «paying particular attention to the vowels and the ‘difficult' consonants, " +
        "such as G and J» — отсюда выбор трудных букв. " +
        "с. 59: «Even at A2 Flyers level, candidates often seem uncertain about the names of " +
        "some letters» — отсюда решение повторять названия и после этого модуля",
      license: "свободно распространяется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section: "с. 136, шкала правописания, A1: «Can spell their address, nationality and other personal details»",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1, NOUNS types «PROPER NOUNS»: «Can use proper nouns with a capital letter to refer " +
        "to specific people, places, days and things». " +
        "СВЕРХ СТУПЕНИ: «How do you spell that?» — список структур Pre A1 Starters, с. 11 " +
        "(impersonal you). Взято по решению 1 программы",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section: "слова модуля с пометкой A1: letter, name, spell, spelling, word, country",
      license: "внутреннее использование",
    },
    {
      ref: "wikipron-en-uk.tsv (данные Викисловаря)",
      section: "произношение названий букв, британская норма",
      license: "CC BY-SA, используется как справочник, база не перепубликуется",
    },
  ],

  outcomes: [
    "узнаёт букву по её названию и записывает слово, продиктованное по буквам",
    "пишет с заглавной буквы имена, страны и названия языков",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "bukvy-i-nazvaniya",
      title: "Буквы и их названия",
      estimatedMinutes: 15,
      outcome: "узнаёт букву по её названию и записывает слово, продиктованное по буквам",

      blocks: [
        {
          id: "zachem-nazvaniya",
          kind: "explain",
          text: [
            "Латинские буквы знакомы по вывескам, названиям товаров и раскладке клавиатуры. Но узнавать " +
              "букву и знать её название — разные умения. Прочитать hotel сможет почти каждый; " +
              "сказать, из каких букв оно состоит, — уже нет.",
            "Названия букв нужны не для того, чтобы рассказать алфавит подряд. Имя, фамилию и адрес по-английски уточняют по буквам: собеседник называет буквы одну за другой, и надо " +
              "успеть записать. Без названий букв этот разговор невозможен.",
          ],
        },
        {
          // Объяснение стоит ДО таблицы намеренно: иначе ученик двадцать шесть
          // раз встречает незнакомую запись, а потом узнаёт, что это было.
          id: "chto-takoe-transkripciya",
          kind: "note",
          tone: "info",
          text:
            "В таблице ниже названия букв записаны не русскими буквами, а значками между " +
            "косыми чертами: /biː/. Это международная транскрипция — та же, что в словарях. " +
            "Русскими буквами английские звуки передать нельзя: многих из них в русском нет, " +
            "и «би» вместо /biː/ учило бы неправильному. " +
            "Значок ˈ ставится перед ударным слогом. Разбирать все значки сразу не нужно — " +
            "они будут встречаться по одному вместе со словами.",
        },
        {
          id: "tablica-alfavita",
          kind: "table",
          caption: "Двадцать шесть букв и их названия",
          head: ["Буква", "Название", "Буква", "Название"],
          rows: [
            ["A a", "/eɪ/", "N n", "/en/"],
            ["B b", "/biː/", "O o", "/əʊ/"],
            ["C c", "/siː/", "P p", "/piː/"],
            ["D d", "/diː/", "Q q", "/kjuː/"],
            ["E e", "/iː/", "R r", "/ɑː/"],
            ["F f", "/ef/", "S s", "/es/"],
            ["G g", "/dʒiː/", "T t", "/tiː/"],
            ["H h", "/eɪtʃ/", "U u", "/juː/"],
            ["I i", "/aɪ/", "V v", "/viː/"],
            ["J j", "/dʒeɪ/", "W w", "/ˈdʌbljuː/"],
            ["K k", "/keɪ/", "X x", "/eks/"],
            ["L l", "/el/", "Y y", "/waɪ/"],
            ["M m", "/em/", "Z z", "/zed/"],
          ],
        },
        {
          id: "zapis-alfavita",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай алфавит целиком",
          transcript:
            "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
        },
        {
          id: "trudnye-bukvy",
          kind: "note",
          tone: "mistake",
          text:
            "Источник советует особо отработать гласные и трудные согласные — например, G и J: " +
            "G называется /dʒiː/, а J — /dʒeɪ/. Начало у них одинаковое, различает их " +
            "второй звук: у G он тот же, что в B и C, у J — тот же, что в A и K.",
        },
        {
          id: "zed-ili-zee",
          kind: "note",
          tone: "info",
          text:
            "Последняя буква в британской норме называется zed, в американской — zee. Наш " +
            "курс держится британской, поэтому в таблице стоит /zed/. Услышав zee, знай: это " +
            "та же буква.",
        },
        {
          id: "kak-diktuyut",
          kind: "example",
          caption: "Как выглядит разговор по буквам",
          text:
            "— What's your name?\n— Alim.\n— How do you spell that?\n— A-L-I-M.",
          explain:
            "How do you spell that? — «как это пишется». Так спрашивают, когда слово можно расслышать неверно: по телефону, у стойки " +
            "в гостинице, при заполнении бланка. В ответ буквы называют одну за другой, а на " +
            "письме их разделяют дефисом — короткой чёрточкой, как в A-L-I-M.",
        },
        {
          id: "slovar-bukvy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "letter", translation: "буква", example: "the letter B", hint: "/ˈletə/" },
            { term: "word", translation: "слово", example: "a long word", hint: "/wɜːd/" },
            { term: "spell", translation: "писать по буквам", example: "How do you spell it?", hint: "/spel/" },
            { term: "spelling", translation: "написание", example: "the spelling of my name", hint: "/ˈspelɪŋ/" },
            { term: "name", translation: "имя", example: "my name", hint: "/neɪm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-zapisat-po-bukvam",
          kind: "short",
          prompt: "Собеседник продиктовал: H-O-T-E-L. Запиши слово целиком.",
          answer: "hotel",
          hint: "Буквы идут подряд — запиши их одним словом, без чёрточек.",
          why:
            "Hotel. Так и выглядит запись под диктовку: буквы называют по одной, а ты " +
            "складываешь из них слово.",
        },
        {
          id: "z2-nazvat-po-bukvam",
          kind: "short",
          prompt: "Запиши по буквам, через дефис, слово name.",
          answer: "N-A-M-E",
          accept: ["n-a-m-e", "N A M E", "n a m e"],
          hint: "Четыре буквы, между ними дефис — как в примере выше.",
          why:
            "N-A-M-E. Так записывают продиктованное: каждая буква отдельно, дефис их разделяет.",
        },
        {
          id: "z3-g-ili-j",
          kind: "choice",
          prompt: "Какая буква называется /dʒeɪ/?",
          options: [{ text: "G" }, { text: "J", correct: true }, { text: "Y" }],
          hint: "У этой буквы гласный тот же, что в названиях A и K.",
          why:
            "J — /dʒeɪ/. У G начало такое же, но второй звук другой: /dʒiː/. Источник советует " +
            "отработать эти две буквы особо.",
        },
        {
          id: "z4-sopostavit-bukvy",
          kind: "match",
          prompt: "Сопоставь букву и её название.",
          left: ["C", "Q", "W", "Z"],
          right: ["/ˈdʌbljuː/", "/zed/", "/siː/", "/kjuː/"],
          answer: [2, 3, 0, 1],
          hint: "Сверься с таблицей выше — все четыре буквы в ней есть.",
          why:
            "C — /siː/, Q — /kjuː/, W — /ˈdʌbljuː/, Z — /zed/. W — единственная, чьё название " +
            "состоит из двух слогов.",
        },
        {
          id: "z5-otmetit-glasnye",
          kind: "hottext",
          prompt: "Отметь буквы, которые в английском алфавите считаются гласными.",
          parts: [
            { text: "A", selectable: true, correct: true },
            { text: " · " },
            { text: "B", selectable: true },
            { text: " · " },
            { text: "E", selectable: true, correct: true },
            { text: " · " },
            { text: "K", selectable: true },
            { text: " · " },
            { text: "O", selectable: true, correct: true },
            { text: " · " },
            { text: "T", selectable: true },
          ],
          hint: "Гласных букв в алфавите немного, и все они здесь есть.",
          why:
            "A, E, O — гласные. Гласными считаются A, E, I, O, U — буква Y ведёт себя по-разному и стоит особняком. Источник отдельно " +
            "советует уделять им особое внимание.",
        },
        {
          id: "z6-vopros-o-napisanii",
          kind: "gap",
          prompt: "Допиши слово, чтобы получился вопрос «как это пишется?».",
          before: "How do you ",
          after: " that?",
          answer: "spell",
          hint: "Есть в словаре урока.",
          why: "How do you spell that? — этим вопросом просят продиктовать слово по буквам.",
        },
        {
          id: "z7-svoyo-imya-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух своё имя по буквам, как в примере.",
          phrase: "A-L-I-M",
          translation: "Алим — по буквам.",
          hint: "Не торопись: между буквами делают маленькую паузу.",
          why:
            "Своё имя по буквам приходится называть чаще всего, что есть в этом модуле, " +
            "поэтому его стоит довести до беглости. Платформа это упражнение не проверяет — оно для тебя.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "zaglavnaya-bukva",
      title: "Заглавная буква",
      estimatedMinutes: 12,
      outcome: "пишет с заглавной буквы имена, страны и названия языков",

      blocks: [
        {
          id: "gde-zaglavnaya",
          kind: "explain",
          text: [
            "В английском с заглавной буквы пишется больше слов, чем в русском. Имена и " +
              "фамилии — как и у нас. А вот дальше начинаются расхождения: с заглавной пишутся " +
              "страны и названия языков.",
            "По-русски «казахский язык», «русский язык», «английский язык» пишут с маленькой " +
              "буквы. По-английски — Kazakh, Russian, English. Заметно это сразу, поэтому стоит запомнить " +
              "сейчас, а не переучиваться потом.",
          ],
        },
        {
          id: "primer-zaglavnyh",
          kind: "example",
          caption: "Сравни",
          text:
            "My name is Alim. I am from Kazakhstan.\nI speak Kazakh, Russian and English.",
          explain:
            "Alim — имя, Kazakhstan — страна, Kazakh, Russian, English — языки. Все с " +
            "заглавной. По-русски с заглавной здесь писались бы только имя и название страны.",
        },
        {
          id: "i-vsegda",
          kind: "note",
          tone: "info",
          text:
            "Отдельно стоит I — «я». Оно пишется заглавной всегда, где бы ни стояло в " +
            "предложении. Среди местоимений так пишется только оно.",
        },
        {
          id: "slovar-zaglavnaya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "country", translation: "страна", example: "my country", hint: "/ˈkʌntri/" },
            { term: "English", translation: "английский язык", example: "I speak English.", hint: "/ˈɪŋɡlɪʃ/" },
            { term: "Russian", translation: "русский язык", example: "I speak Russian.", hint: "/ˈrʌʃn/" },
            { term: "Kazakh", translation: "казахский язык", example: "I speak Kazakh.", hint: "/kəˈzɑːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-najti-oshibki",
          kind: "hottext",
          prompt: "Отметь слова, написанные с ошибкой.",
          parts: [
            { text: "english", selectable: true, correct: true },
            { text: " · " },
            { text: "Kazakhstan", selectable: true },
            { text: " · " },
            { text: "russian", selectable: true, correct: true },
            { text: " · " },
            { text: "Alim", selectable: true },
          ],
          hint: "Названия языков в английском пишутся не так, как в русском.",
          why:
            "English и Russian — названия языков, они пишутся с заглавной. Kazakhstan и Alim " +
            "написаны верно.",
        },
        {
          id: "z2-ispravit-stranu",
          kind: "short",
          prompt: "Исправь ошибку и запиши верно: «i am from kazakhstan».",
          answer: "I am from Kazakhstan",
          accept: ["I'm from Kazakhstan"],
          exact: true,
          hint: "Ошибок две: слово «я» и название страны.",
          why:
            "I пишется заглавной всегда, Kazakhstan — потому что это страна. Краткая форма " +
            "I'm здесь так же верна.",
        },
        {
          id: "z3-yazyk-s-zaglavnoy",
          kind: "gap",
          prompt: "Допиши название английского языка так, как оно пишется по-английски.",
          before: "I speak ",
          after: ".",
          answer: "English",
          exact: true,
          hint: "Первая буква не такая, как в русском.",
          why:
            "English, Russian, Kazakh — все с заглавной. Написание со строчной здесь ошибка, " +
            "хотя в русском именно так и пишут.",
        },
        {
          id: "z4-chto-s-zaglavnoy",
          kind: "choice",
          prompt: "В каком предложении заглавные буквы расставлены верно?",
          options: [
            { text: "My Country is Kazakhstan." },
            { text: "My country is kazakhstan." },
            { text: "My country is Kazakhstan.", correct: true },
          ],
          hint: "С заглавной пишется название страны — но не само слово «страна».",
          why:
            "Kazakhstan — название страны, поэтому с заглавной. Country — обычное слово, " +
            "оно ничего не называет по имени, и заглавная ему не нужна.",
        },
        {
          id: "z5-porjadok-bukv",
          kind: "order",
          prompt: "Расставь буквы в том порядке, в каком они идут в алфавите.",
          items: ["Q", "F", "W", "K"],
          answer: [1, 3, 0, 2],
          hint: "Сверься с таблицей: она идёт сверху вниз, сначала левый столбец.",
          why:
            "F, K, Q, W. Порядок букв придётся помнить: по нему устроены словари, " +
            "списки и указатели.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Заданий, где ответ нужно написать самому, — 5 из 8. Оба итога проверяются.
  // =======================================================================
  quiz: {
    ask: 6,
    passRatio: 0.7,
    questions: [
      {
        id: "q-zapisat-slovo",
        kind: "short",
        outcome: "узнаёт букву по её названию и записывает слово, продиктованное по буквам",
        prompt: "Собеседник продиктовал: N-A-M-E. Запиши слово целиком.",
        answer: "name",
        why: "Name. Буквы называют по одной, а ты складываешь из них слово.",
      },
      {
        id: "q-po-bukvam",
        kind: "short",
        outcome: "узнаёт букву по её названию и записывает слово, продиктованное по буквам",
        prompt: "Запиши по буквам, через дефис, слово word.",
        answer: "W-O-R-D",
        accept: ["w-o-r-d", "W O R D", "w o r d"],
        why: "W-O-R-D. Каждая буква отдельно, дефис их разделяет.",
      },
      {
        id: "q-nazvanie-bukvy",
        kind: "choice",
        outcome: "узнаёт букву по её названию и записывает слово, продиктованное по буквам",
        prompt: "Какая буква называется /dʒiː/?",
        options: [{ text: "J" }, { text: "Z" }, { text: "G", correct: true }],
        why: "G — /dʒiː/. У J начало такое же, но гласный другой: /dʒeɪ/.",
      },
      {
        id: "q-sopostavit",
        kind: "match",
        outcome: "узнаёт букву по её названию и записывает слово, продиктованное по буквам",
        prompt: "Сопоставь букву и её название.",
        left: ["H", "R", "Z"],
        right: ["/zed/", "/eɪtʃ/", "/ɑː/"],
        answer: [1, 2, 0],
        why: "H — /eɪtʃ/, R — /ɑː/, Z — /zed/ по британской норме.",
      },
      {
        id: "q-vopros-spell",
        kind: "gap",
        outcome: "узнаёт букву по её названию и записывает слово, продиктованное по буквам",
        prompt: "Допиши вопрос «как это пишется?».",
        before: "How do you ",
        after: " that?",
        answer: "spell",
        why: "How do you spell that? — просьба продиктовать слово по буквам.",
      },
      {
        id: "q-ispravit-yazyk",
        kind: "short",
        outcome: "пишет с заглавной буквы имена, страны и названия языков",
        prompt: "Исправь ошибку и запиши верно: «i speak english».",
        answer: "I speak English",
        exact: true,
        why: "I всегда с заглавной, English — потому что это название языка.",
      },
      {
        id: "q-najti-oshibku",
        kind: "hottext",
        outcome: "пишет с заглавной буквы имена, страны и названия языков",
        prompt: "Отметь слова, написанные с ошибкой.",
        parts: [
          { text: "Dana", selectable: true },
          { text: " · " },
          { text: "kazakhstan", selectable: true, correct: true },
          { text: " · " },
          { text: "English", selectable: true },
          { text: " · " },
          { text: "russian", selectable: true, correct: true },
        ],
        why: "Страна и язык пишутся с заглавной: Kazakhstan, Russian. Dana и English написаны верно.",
      },
      {
        id: "q-strana-s-zaglavnoy",
        kind: "gap",
        outcome: "пишет с заглавной буквы имена, страны и названия языков",
        prompt: "Дана из Казахстана. Допиши название её страны по-английски.",
        before: "Dana is from ",
        after: ".",
        answer: "Kazakhstan",
        exact: true,
        why:
          "Kazakhstan — страна, поэтому с заглавной. Названия стран в английском всегда пишутся с заглавной.",
      },
    ],
  },
};

export default module;
