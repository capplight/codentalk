import type { Module } from "@/lib/content/types";

/**
 * Модуль 3 курса «Английский с нуля»: рассказ о себе.
 *
 * Программа: docs/programma-english-starter.md, модуль 3 — «сказать, откуда он,
 * где живёт и чем занят»; грамматика: утвердительное предложение, предлоги
 * `from` и `in`, артикль с существительным.
 *
 * ЧЕМ ОГРАНИЧЕН МОДУЛЬ, И ЭТО НАМЕРЕННО:
 *
 * 1. Единственный глагол здесь — `be`. Настоящее простое время программа
 *    отдаёт модулю 14, поэтому «где живёт» выражается не через `live`, а через
 *    `I'm from Almaty` и `I'm in Astana`. Соблазн написать `I live in` велик,
 *    и в первом варианте модуля 2 такие обгоны программы уже случались.
 *
 *    ОГОВОРКА, ДОБАВЛЕНА ПОЗЖЕ: модуль 13 «Здесь есть» всё-таки берёт `I live
 *    in` — но как три готовых слова и только в одном месте, первым шагом
 *    рассказа о жилье. Без него рассказ не начать. Решение записано в шапке
 *    того модуля, разбор глагола по-прежнему остаётся модулю 14.
 *
 * 2. Множественного числа нет: оно в модуле 8. Поэтому в примерах один город,
 *    одна страна, одно занятие.
 *
 * 3. Притяжательные `my`, `your` программа отдаёт модулю 7. Здесь они не
 *    вводятся; `my name` из модуля 2 остаётся заученным оборотом.
 *
 * 4. Артикль — грамматика ИМЕННО этого модуля, поэтому `a` и `an` разбираются
 *    полноценно, с правилом по первому ЗВУКУ, а не по букве.
 *
 * 5. Вопрос `Where are you from?` взят сверх ступени: вопросительные слова
 *    English Grammar Profile ставит на A2, а программа берёт их по решению 1.
 *    Без вопроса «откуда ты» модуль остаётся рассказом в одну сторону.
 *
 * 6. Звук есть: синтез речи Azure, британские голоса — решение владельца
 *    16 августа 2026 (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "rasskaz-o-sebe",
  title: "Рассказ о себе",

  sources: [
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "ОПОРА УРОКА ЧТЕНИЯ, добавленного после разбора методиста. с. 19, состав Pre A1 " +
        "Starters Reading and Writing — ступень НИЖЕ нашей: часть 2 «Reading comprehension " +
        "based on a picture. Write 'yes'/'no' to show if sentence is correct or not». " +
        "с. 21 об оценке этой части: «This part tests the candidate's ability to read and " +
        "comprehend text at sentence level». То есть связного рассказа на этой ступени не " +
        "требуется — требуется предложение, и вид заданий урока взят отсюда. " +
        "с. 5, блок Pre A1 «Below 100»: «CAN read and understand some simple sentences, " +
        "including questions». " +
        "ЗАЧЕМ ЭТА ЗАПИСЬ. Сначала я решил, что до восьмого модуля читать не из чего, и " +
        "поставил первое чтение туда. Довод не выдержал проверки: источник ставит чтение " +
        "ниже нашей ступени, а к концу третьего модуля предложений уже четыре",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "ОПОРА УРОКА СЛУШАНИЯ, добавленного позже остальных. Cambridge English, руководство для младших ступеней, с. 5, блок Pre A1 «Below 100» — ступень НИЖЕ нашей, значит умение посильно. Дословно: «CAN understand some very simple spoken descriptions of people – such as name, gender, age, mood, appearance or what they are doing». Рассказ о себе из четырёх предложений — это описание человека, названное источником прямо.",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — опора задания на письмо",
      section:
        "ПЕРВЫЙ УРОК ПИСЬМА В КУРСЕ («Пишем о себе»). с. 67, шкала Overall written production, графа A1, дословно: «Can give information about matters of personal relevance (e.g. likes and dislikes, family, pets) using simple words/signs and basic expressions» и «Can produce simple isolated phrases and sentences». Четыре отдельных предложения о себе — это и есть «simple isolated phrases and sentences» о «matters of personal relevance». " +
        "ОГОВОРКА О СОСЕДНЕЙ ГРАФЕ: там же, с. 68, шкала Reports and essays, графы A1 и Pre-A1 — «No descriptors available». Эссе на этой ступени источник не предполагает вовсе, первые описания начинаются с A2. Поэтому письмо здесь — отдельные предложения о себе, а не рассуждение. " +
        "ПОРОГ В ДВЕНАДЦАТЬ СЛОВ — НАШ, а не из источника: четыре коротких предложения короче не выходят. Счёт слов Cambridge даёт только с A2 Key («25 words or more»), на нашей ступени его нет.",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves and " +
        "other people, where they live, people they know, things they have» — отсюда состав " +
        "модуля. " +
        "с. 62, Overall oral production, Pre-A1: «Can produce short phrases about themselves, " +
        "giving basic personal information (e.g. name, address, family, nationality)» — это " +
        "точное описание того, что модуль даёт, и ступень здесь именно Pre-A1. " +
        "ОГОВОРКА, ВАЖНАЯ ДЛЯ ЧЕСТНОСТИ: дескриптор A1 на шкале Sustained monologue " +
        "(с. 63) требует большего — «Can describe themselves, what they do and where they " +
        "live». Слова «чем занимаюсь» и «где живу» без настоящего простого времени не " +
        "выразить, а оно в модуле 14. Поэтому модуль честно стоит между Pre-A1 и A1: " +
        "занятие называется через be (I'm a student), а не через действие",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1, DETERMINERS articles «FORM: WITH NOUNS»: «Can use articles 'the', 'a' and 'an' " +
        "before nouns» — отсюда артикль. Оттуда же A1, «FORM: PREPOSITION + NO ARTICLE»: " +
        "«Can use no article before a limited range of nouns in some fixed expressions with " +
        "prepositions», пример источника — «If you are at home» — отсюда оговорка урока 3 " +
        "о том, что артикль стоит не всегда. " +
        "A1, PREPOSITIONS «FORM: SIMPLE»: «Can use a limited range of simple (single-word) " +
        "prepositions» и «FORM: PREPOSITION + NOUN PHRASE» — отсюда `from` и `in`. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'» — единственный глагол модуля. " +
        "A1, NOUNS types «PROPER NOUNS»: названия стран и городов с заглавной буквы. " +
        "СВЕРХ СТУПЕНИ: вопросительное слово `where` — QUESTIONS wh-, A2. Взято по " +
        "решению 1 программы: без вопроса «откуда ты» рассказ о себе остаётся монологом. " +
        "ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО: настоящее простое время (модуль 14), множественное " +
        "число (модуль 8), притяжательные определители (модуль 7)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "слова модуля с пометкой A1: from, in, country, city, town, capital, street, home, " +
        "student, teacher, doctor, driver, nurse, artist, actor, job, work, where. " +
        "Артикль там же отдельной записью: «a, an indefinite article A1». " +
        "ПРОВЕРЕНО ОТДЕЛЬНО: engineer стоит на A2 и в модуль не взят, хотя для правила " +
        "про `an` подошёл бы; вместо него artist и actor, оба A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 51, «Inventory of functions, notions and communicative tasks», дословно: " +
        "«asking for and giving personal details: (full) name, age, address, names of " +
        "relatives and friends, etc.» и «understanding and completing forms giving personal " +
        "details» — отсюда состав разговора о себе. Виды заданий модуля взяты по образцу " +
        "разделов Reading and Writing того же руководства (выбор из вариантов, вставка " +
        "пропущенного слова, сопоставление). " +
        "НАЗВАНИЯ СТРАН И ГОРОДОВ СТУПЕНЬЮ НЕ МЕРЯЮТСЯ — решение владельца от " +
        "15 августа 2026, записано в CLAUDE.md. Частотные словники составляются по " +
        "нарицательным словам, и названий стран в них нет и не будет. Пять стран " +
        "урока 2 выбраны по смыслу урока",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через `e`, безударный конечный — через `ə` (CLAUDE.md, раздел о " +
        "британской норме). Слова, где источники разошлись, вынесены в " +
        "docs/transkripciya-english-starter.md на решение владельца",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить, откуда ты: I'm from и название страны или города",
    "писать названия стран и городов с заглавной буквы",
    "ставить a или an по первому звуку следующего слова",
    "называть своё занятие: I'm a doctor, I'm a student",
    "говорить, где ты сейчас: in и название города",
    "строить предложение в порядке «кто — глагол — остальное»",
    "спрашивать, откуда собеседник, и отвечать на этот вопрос",
    "рассказывать о себе четырьмя предложениями",
    "понимать по короткому рассказу, откуда человек и чем он занят",
    "понимать на слух, откуда человек и чем он занят",
    "писать о себе четыре предложения и находить в них потерянные слова",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "otkuda-ty",
      title: "Откуда ты: from",
      estimatedMinutes: 13,
      outcome: "говорить, откуда ты: I'm from и название страны или города",

      blocks: [
        {
          id: "zachem-from",
          kind: "explain",
          text: [
            "Имя названо, здороваться уже получается. Следующее, о чём заходит речь при " +
              "знакомстве, — откуда человек. Для этого нужно всего одно короткое слово: from. " +
              "Такие слова называют предлогами: они стоят перед названием и показывают, как " +
              "оно связано с остальным.",
            "Строится фраза из уже знакомых частей: I'm — «я есть», from — «из», и название " +
              "страны или города. I'm from Kazakhstan. Порядок жёсткий, менять его нельзя.",
          ],
        },
        {
          id: "tablica-from",
          kind: "table",
          caption: "Один и тот же образец для всех",
          zvuchat: ["I'm from Kazakhstan.", "I'm from Almaty.", "He's from Turkey.",
            "She's from Astana.",
          ],
          head: ["Фраза", "Перевод"],
          rows: [
            ["I'm from Kazakhstan.", "Я из Казахстана."],
            ["I'm from Almaty.", "Я из Алматы."],
            ["He's from Turkey.", "Он из Турции."],
            ["She's from Astana.", "Она из Астаны."],
          ],
        },
        {
          id: "from-i-strana-i-gorod",
          kind: "note",
          tone: "info",
          text:
            "После from ставят и страну, и город — предлог один и тот же. По-русски " +
            "название после «из» ещё и меняет окончание: Казахстан — из Казахстана, " +
            "Турция — из Турции. По-английски слово не меняется вовсе.",
        },
        {
          id: "bez-glagola-nelzya",
          kind: "note",
          tone: "mistake",
          text:
            "«I from Kazakhstan» — без глагола, и по-английски так не говорят. Форма be " +
            "нужна и здесь: I am from Kazakhstan или коротко I'm from Kazakhstan.",
        },
        // Запись трёх фраз подряд убрана: те же фразы звучат в таблице выше,
        // каждая у своей строки.
        {
          id: "slovar-from",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "from", translation: "из, от", example: "I'm from Almaty.", hint: "/frɒm/" },
            { term: "city", translation: "город", example: "Astana is a city.", hint: "/ˈsɪti/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-predlog",
          kind: "choice",
          prompt: "Какое слово значит «из»?",
          options: [{ text: "from", correct: true }, { text: "in" }, { text: "too" }],
          hint: "Оно стоит между I'm и названием страны.",
          why: "From — «из». In означает «в», too — «тоже».",
        },
        {
          id: "z2-dopisat-from",
          kind: "gap",
          prompt: "Допиши предлог: «Я из Астаны».",
          before: "I'm ",
          after: " Astana.",
          answer: "from",
          hint: "Три буквы, начинается с той, что называется /ef/.",
          why: "I'm from Astana. Предлог from не меняется, какой бы город или страна ни шли следом.",
        },
        {
          id: "z3-najti-bez-glagola",
          kind: "hottext",
          prompt: "Отметь строки, в которых пропущен глагол.",
          parts: [
            { text: "I from Turkey.", selectable: true, correct: true },
            { text: " · " },
            { text: "She's from Almaty.", selectable: true },
            { text: " · " },
            { text: "He from Astana.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm from Kazakhstan.", selectable: true },
          ],
          hint: "В двух строках между тем, о ком речь, и предлогом ничего не стоит.",
          why:
            "«I from Turkey» и «He from Astana» — без формы be. Должно быть I'm from Turkey " +
            "и He's from Astana.",
        },
        {
          id: "z4-sobrat-frazu",
          kind: "order",
          prompt: "Собери предложение: «Она из Турции».",
          items: ["Turkey", "She's", "from"],
          answer: [1, 2, 0],
          hint: "Сначала тот, о ком речь, потом глагол с предлогом.",
          why: "She's from Turkey. Порядок в такой фразе всегда один и тот же.",
        },
        {
          id: "z5-zapisat-o-sebe",
          kind: "short",
          prompt: "Запиши по-английски: «Я из Казахстана». Начни с I'm.",
          answer: "I'm from Kazakhstan.",
          exact: true,
          accept: ["I'm from Kazakhstan", "I am from Kazakhstan.", "I am from Kazakhstan"],
          hint: "Название страны пишется с заглавной буквы.",
          why:
            "I'm from Kazakhstan — или полностью I am from Kazakhstan. Kazakhstan с " +
            "заглавной, как всякое название страны.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "strany-i-goroda",
      title: "Страны и города",
      estimatedMinutes: 14,
      outcome: "писать названия стран и городов с заглавной буквы",

      blocks: [
        {
          id: "zachem-nazvaniya",
          kind: "explain",
          text: [
            "Названия стран и городов по-английски пишутся не так, как звучат по-русски, и " +
              "запоминать их приходится отдельно. Турция по-английски Turkey, Испания — " +
              "Spain, Италия — Italy.",
            "Правило написания при этом одно, и оно уже знакомо по модулю про алфавит. " +
              "Название страны или города пишется с заглавной буквы, где бы оно ни стояло.",
          ],
        },
        {
          id: "tablica-stran",
          kind: "table",
          caption: "Страна и её столица",
          // Названия читаются не так, как пишутся по-русски: Turkey не «Турция»,
          // Rome не «Рим». Услышать надо каждое отдельно.
          zvuchat: ["Kazakhstan", "Turkey", "Spain", "Italy", "France", "Astana", "Ankara",
            "Madrid", "Rome", "Paris",
          ],
          head: ["По-английски", "По-русски", "Столица"],
          rows: [
            ["Kazakhstan", "Казахстан", "Astana"],
            ["Turkey", "Турция", "Ankara"],
            ["Spain", "Испания", "Madrid"],
            ["Italy", "Италия", "Rome"],
            ["France", "Франция", "Paris"],
          ],
        },
        {
          id: "goroda-tozhe-inache",
          kind: "note",
          tone: "info",
          text:
            "Названия городов по-английски тоже расходятся с русскими: Рим — Rome, " +
            "Париж — Paris, Москва — Moscow. А Алматы и Астана пишутся почти так же, как " +
            "звучат: Almaty, Astana.",
        },
        {
          id: "zaglavnaya-v-nazvanii",
          kind: "note",
          tone: "mistake",
          text:
            "«I'm from kazakhstan» — строчная буква в названии страны. Названия стран и " +
            "городов — такие же имена, как имена людей, и пишутся с заглавной буквы: " +
            "Kazakhstan, Almaty.",
        },
        // Запись всех названий подряд убрана: каждое звучит в таблице выше, у
        // своей строки, а Almaty — в таблице первого урока модуля.
        {
          id: "slovar-stran",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "capital", translation: "столица", example: "Astana is a capital city.", hint: "/ˈkæpɪtl/" },
            { term: "town", translation: "город (небольшой)", example: "Almaty is a city, not a town.", hint: "/taʊn/" },
            { term: "street", translation: "улица", example: "Abay Street", hint: "/striːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-stolica-kazahstana",
          kind: "choice",
          prompt: "В какой строке название страны записано по-английски и без ошибки?",
          options: [
            { text: "I'm from Turkey.", correct: true },
            { text: "I'm from Türkiye." },
            { text: "I'm from turkey." },
          ],
          hint: "Одна строка написана по-турецки, в другой ошибка в первой букве.",
          why:
            "I'm from Turkey. По-английски страна называется Turkey, и название страны " +
            "пишется с заглавной буквы.",
        },
        {
          id: "z2-ispraviti-zaglavnuyu",
          kind: "short",
          prompt: "Исправь ошибку и запиши предложение целиком: «I'm from spain.»",
          answer: "I'm from Spain.",
          exact: true,
          accept: ["I'm from Spain", "I am from Spain.", "I am from Spain"],
          hint: "Ошибка одна, и она в названии страны.",
          why: "I'm from Spain. Название страны пишется с заглавной буквы.",
        },
        {
          id: "z3-otmetit-oshibki-v-nazvaniyah",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой в написании.",
          parts: [
            { text: "She's from italy.", selectable: true, correct: true },
            { text: " · " },
            { text: "He's from France.", selectable: true },
            { text: " · " },
            { text: "I'm from Almaty.", selectable: true },
            { text: " · " },
            { text: "I'm from turkey.", selectable: true, correct: true },
          ],
          hint: "Правило то же, что в модуле про алфавит.",
          why:
            "Italy и Turkey — названия стран, а в этих строках они начинаются со строчной " +
            "буквы. France и Almaty записаны верно.",
        },
        {
          id: "z4-sopostavit-strany",
          kind: "match",
          prompt: "Сопоставь русское название и английское.",
          left: ["Испания", "Италия", "Франция"],
          right: ["France", "Spain", "Italy"],
          answer: [1, 2, 0],
          hint: "Одно из английских названий начинается с той же буквы, что и русское.",
          why:
            "Испания — Spain, Италия — Italy, Франция — France. Все три пишутся с " +
            "заглавной буквы.",
        },
        {
          id: "z5-dopisat-nazvanie",
          kind: "gap",
          prompt: "Допиши название страны по-английски: Испания.",
          before: "He's from ",
          after: ".",
          answer: "Spain",
          exact: true,
          hint: "Пять букв, с заглавной.",
          why: "He's from Spain. По-русски Испания, по-английски Spain — и обязательно с заглавной.",
        },
        {
          id: "z6-prodiktovat-stranu",
          kind: "short",
          prompt: "Продиктуй по буквам через дефис название страны Italy.",
          answer: "I-T-A-L-Y",
          accept: ["i-t-a-l-y", "I T A L Y", "i t a l y"],
          hint: "Пять букв. Последняя называется /waɪ/.",
          why: "I-T-A-L-Y. Диктовка по буквам — умение из первого модуля, вот оно и пригодилось.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "artikl-a-an",
      title: "Артикль: a и an",
      estimatedMinutes: 15,
      outcome: "ставить a или an по первому звуку следующего слова",

      blocks: [
        {
          // Раньше этот урок и все следующие называли артикль «маленьким словом
          // a» и обходились без термина. Владелец: «a артикль же, тут слишком
          // сильно перенесли в русский». Слово названо здесь и дальше по курсу
          // употребляется наравне с остальными школьными словами.
          id: "zachem-artikl",
          kind: "explain",
          text: [
            "В английском перед названием предмета или занятия обычно стоит маленькое " +
              "слово a: a city, a street, a doctor. Оно значит примерно «один из таких», " +
              "а отдельного перевода у него нет.",
            "Это слово называют артиклем. В русском артиклей нет вовсе — вот первое, чему " +
              "в нашем языке не находится пары. Дальше в курсе так и будем его называть.",
            "Пропускать артикль нельзя: «I'm doctor» звучит по-английски так же " +
              "неправильно, как «я есть врачом» по-русски. Правильно — I'm a doctor.",
          ],
        },
        {
          id: "a-ili-an",
          kind: "explain",
          text: [
            "У этого слова две формы. Перед согласным звуком пишут a, перед гласным — an: " +
              "a doctor, но an artist. Причина простая — два гласных подряд трудно " +
              "выговорить, и an разводит их согласным звуком.",
            "Смотрят на звук, а не на букву. Если слово начинается с гласного звука, " +
              "ставят an — даже когда первая буква на гласную не похожа.",
          ],
        },
        {
          // Артикль the в модуле не преподаётся, но и молчать о нём нельзя: ученик
          // встретит его в первом же английском тексте. Адрес настоящий — урок
          // «A и the» стоит в модуле 10. Нашёл методист вторым проходом.
          id: "est-i-tretiy",
          kind: "note",
          tone: "info",
          text:
            "Артиклей в английском не два, а три: кроме a и an есть the. Он значит " +
            "другое — «тот самый», о котором уже речь. Разберём его в модуле про дни " +
            "и время, в уроке «A и the». Пока хватит a и an.",
        },
        {
          id: "tablica-a-an",
          kind: "table",
          caption: "Когда a, когда an",
          // Звучат только примеры. Сама буква `a` отдельной кнопки не получает:
          // произнесённая в одиночку, она звучит названием буквы /eɪ/, а
          // артикль в речи безударен — ученик услышал бы не то, чему учит урок.
          zvuchat: ["a doctor, a teacher, a city, a nurse",
            "an artist, an actor, an apple, an egg",
          ],
          head: ["Форма", "Перед чем", "Примеры"],
          rows: [
            ["a", "согласный звук", "a doctor, a teacher, a city, a nurse"],
            ["an", "гласный звук", "an artist, an actor, an apple, an egg"],
          ],
        },
        {
          id: "zvuk-a-ne-bukva",
          kind: "note",
          tone: "mistake",
          text:
            "Смотреть надо на звук. Слово hour — «час» — начинается с буквы h, а звучит " +
            "/ˈaʊə/: первый звук гласный, поэтому пишут an hour. Обратный случай — " +
            "university, «университет»: буква u гласная, а звучит слово /ˌjuːnɪˈvɜːsɪti/, " +
            "и первый звук /j/ — согласный, поэтому a university.",
        },
        {
          id: "gde-artiklya-net",
          kind: "note",
          tone: "info",
          text:
            "Есть готовые обороты, где это слово не ставят вовсе: at home — «дома», " +
            "at work — «на работе». Их запоминают целиком, как есть. Правило про a и an " +
            "к ним не применяют — и таких оборотов немного.",
        },
        {
          id: "artikl-i-imena",
          kind: "note",
          tone: "info",
          text:
            "Перед именем, названием страны и города артикль не ставят: I'm Alim, " +
            "I'm from Spain. Имя и так одно-единственное, «один из таких» к нему не " +
            "подходит.",
        },
        {
          // Была отдельная запись шести слов подряд. Стала примером: пара
          // звучит одной кнопкой, и разницу между a и an слышно в сравнении, а
          // не в общем потоке.
          id: "pary-a-i-an",
          kind: "example",
          caption: "Пары: слева a, справа an",
          text: "a doctor — an artist\na teacher — an actor\na city — an apple",
          zvuchat: ["a doctor — an artist", "a teacher — an actor", "a city — an apple",
          ],
          explain:
            "В каждой паре слева слово на согласный звук, справа — на гласный. Послушай " +
            "пару целиком: перед гласным появляется n, и два слова связываются в одно " +
            "звучание.",
        },
        {
          id: "slovar-artiklya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            // Сами артикли в словаре не стояли: урок о них есть, а слова в
            // тренажёр повторения не попадали. Нашлось сквозной проверкой
            // курса — `npm run chain`.
            { term: "a", translation: "один из таких, называют впервые", example: "I'm a student.", hint: "/ə/" },
            { term: "an", translation: "то же перед гласным звуком", example: "She's an artist.", hint: "/ən/" },
            { term: "artist", translation: "художник", example: "She's an artist.", hint: "/ˈɑːtɪst/" },
            { term: "actor", translation: "актёр", example: "He's an actor.", hint: "/ˈæktə/" },
            { term: "apple", translation: "яблоко", example: "an apple", hint: "/ˈæpl/" },
            { term: "egg", translation: "яйцо", example: "an egg", hint: "/eg/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-a-ili-an-doctor",
          kind: "choice",
          prompt: "Что поставить перед словом doctor?",
          options: [{ text: "an" }, { text: "a", correct: true }, { text: "ничего" }],
          hint: "Слово начинается со звука /d/.",
          why: "A doctor. Звук /d/ согласный, значит a. An ставят перед гласным звуком.",
        },
        {
          id: "z2-dopisat-an",
          kind: "gap",
          prompt: "Допиши слово перед artist.",
          before: "She's ",
          after: " artist.",
          answer: "an",
          hint: "Слово artist начинается с гласного звука.",
          why: "She's an artist. Перед гласным звуком ставят an: два гласных подряд трудно выговорить.",
        },
        {
          id: "z3-otmetit-gde-nuzhen-an",
          kind: "hottext",
          prompt: "Отметь слова, перед которыми нужно an.",
          parts: [
            { text: "teacher", selectable: true },
            { text: " · " },
            { text: "actor", selectable: true, correct: true },
            { text: " · " },
            { text: "city", selectable: true },
            { text: " · " },
            { text: "egg", selectable: true, correct: true },
          ],
          hint: "Произнеси каждое слово и послушай, гласный там первый звук или согласный.",
          why:
            "Actor и egg начинаются с гласного звука — перед ними an. Teacher и city " +
            "начинаются с согласного, перед ними a.",
        },
        {
          id: "z4-najti-lishnee",
          kind: "choice",
          prompt: "В какой строке артикль лишний?",
          options: [
            { text: "I'm a Alim.", correct: true },
            { text: "She's a nurse." },
            { text: "It's a city." },
          ],
          hint: "Посмотри, что стоит после a: предмет, занятие или имя.",
          why:
            "«I'm a Alim» — перед именем a не ставят: имя и так одно-единственное. " +
            "Правильно I'm Alim.",
        },
        {
          id: "z5-sopostavit-artikl",
          kind: "match",
          prompt: "Сопоставь слово и запись, в которой оно стоит верно.",
          left: ["egg", "nurse", "city"],
          right: ["a city", "an egg", "a nurse"],
          answer: [1, 2, 0],
          hint: "Одно из трёх слов начинается с гласного звука.",
          why:
            "An egg, a nurse, a city. Egg начинается с гласного звука — перед ним an; " +
            "nurse и city начинаются с согласного, перед ними a.",
        },
        {
          id: "z6-zapisat-s-artiklem",
          kind: "short",
          prompt: "Запиши по-английски: «Она врач». Начни с She's.",
          answer: "She's a doctor.",
          exact: true,
          accept: ["She's a doctor", "She is a doctor.", "She is a doctor"],
          hint: "Не забудь маленькое слово перед занятием.",
          why: "She's a doctor. Перед названием занятия ставят a, и пропускать его нельзя.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chem-ty-zanyat",
      title: "Чем ты занимаешься",
      estimatedMinutes: 14,
      outcome: "называть своё занятие: I'm a doctor, I'm a student",

      blocks: [
        {
          id: "zachem-zanyatie",
          kind: "explain",
          text: [
            "После имени и страны о человеке остаётся сказать, чем он " +
              "занимается. Отвечают по тому же образцу, что и раньше: I'm a и название занятия.",
            "Слово be здесь снова единственный глагол, а перед занятием стоит a или an — " +
              "то самое слово из прошлого урока.",
          ],
        },
        {
          id: "tablica-zanyatiy",
          kind: "table",
          caption: "Занятия и как о них сказать",
          // Звучат оба английских столбца: само слово и оно же в предложении.
          // Артикль слышен только во втором.
          zvuchat: ["student", "teacher", "doctor", "driver", "nurse", "artist",
            "I'm a student.", "She's a teacher.", "He's a doctor.", "He's a driver.",
            "She's a nurse.", "She's an artist.",
          ],
          head: ["Слово", "Перевод", "Фраза"],
          rows: [
            ["student", "ученик, студент", "I'm a student."],
            ["teacher", "преподаватель", "She's a teacher."],
            ["doctor", "врач", "He's a doctor."],
            ["driver", "водитель", "He's a driver."],
            ["nurse", "медсестра, медбрат", "She's a nurse."],
            ["artist", "художник", "She's an artist."],
          ],
        },
        {
          id: "zanyatie-bez-roda",
          kind: "note",
          tone: "info",
          text:
            "Название занятия в английском чаще всего одно и то же для мужчины и для " +
            "женщины. Teacher — и преподаватель, и преподавательница. Doctor — врач в " +
            "обоих случаях. Но так не со всеми: у actor есть пара actress, о женщине. " +
            "Кто именно, показывает he или she перед глаголом.",
        },
        {
          id: "ne-zabyt-artikl",
          kind: "note",
          tone: "mistake",
          text:
            "«I'm student» — пропущено a. Перед названием занятия оно обязательно: " +
            "I'm a student. Это та же ошибка, что и «I'm doctor» из прошлого урока, и " +
            "исправляется она одним коротким словом.",
        },
        {
          id: "primer-znakomstva",
          kind: "example",
          caption: "Три предложения о себе",
          text: "Hello! I'm Dana. I'm from Almaty. I'm a student.",
          zvuchat: ["Hello! I'm Dana. I'm from Almaty. I'm a student.",
          ],
          explain:
            "Каждое предложение построено по одному образцу: кто — форма be — остальное. " +
            "Меняется только конец: имя, откуда, чем занят.",
        },
        // Запись шести названий подряд убрана: каждое звучит в таблице выше —
        // и само по себе, и в предложении.
        {
          id: "slovar-zanyatiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "student", translation: "ученик, студент", example: "I'm a student.", hint: "/ˈstjuːdənt/" },
            { term: "doctor", translation: "врач", example: "He's a doctor.", hint: "/ˈdɒktə/" },
            { term: "driver", translation: "водитель", example: "He's a driver.", hint: "/ˈdraɪvə/" },
            { term: "nurse", translation: "медсестра, медбрат", example: "She's a nurse.", hint: "/nɜːs/" },
            // Пример был «a job at a school»: предлог at курс объясняет только в
            // модуле 10, а здесь он стоял без разбора. Взято предложение из уже
            // разобранного.
            { term: "job", translation: "работа, занятие", example: "What's your job?", hint: "/dʒɒb/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kto-uchitsya",
          kind: "choice",
          prompt: "Как назвать по-английски того, кто учится?",
          options: [{ text: "a teacher" }, { text: "a doctor" }, { text: "a student", correct: true }],
          hint: "Слово похоже на русское «студент».",
          why: "A student — ученик или студент. A teacher — преподаватель, a doctor — врач.",
        },
        {
          id: "z2-dopisat-zanyatie",
          kind: "gap",
          prompt: "Допиши: «Он водитель».",
          before: "He's a ",
          after: ".",
          answer: "driver",
          hint: "Шесть букв, слово из таблицы урока.",
          why: "He's a driver. Название занятия идёт после a.",
        },
        {
          id: "z3-najti-propusk",
          kind: "hottext",
          prompt: "Отметь строки, где пропущено слово перед занятием.",
          parts: [
            { text: "I'm student.", selectable: true, correct: true },
            { text: " · " },
            { text: "She's a nurse.", selectable: true },
            { text: " · " },
            { text: "He's doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "She's an artist.", selectable: true },
          ],
          hint: "Между формой be и занятием должно стоять короткое слово.",
          why:
            "«I'm student» и «He's doctor» — без a. Должно быть I'm a student и He's a " +
            "doctor.",
        },
        {
          id: "z4-sopostavit-zanyatiya",
          kind: "match",
          prompt: "Сопоставь английское слово и перевод.",
          left: ["nurse", "driver", "teacher"],
          right: ["водитель", "преподаватель", "медсестра"],
          answer: [2, 0, 1],
          hint: "Одно из слов уже встречалось в модуле про алфавит.",
          why: "Nurse — медсестра или медбрат, driver — водитель, teacher — преподаватель.",
        },
        {
          id: "z5-sobrat-o-sebe",
          kind: "order",
          prompt: "Собери предложение: «Я преподаватель».",
          items: ["teacher", "a", "I'm"],
          answer: [2, 1, 0],
          hint: "Сначала «я есть», потом маленькое слово, потом занятие.",
          why: "I'm a teacher. Порядок тот же, что и во всех предложениях этого модуля.",
        },
        {
          id: "z6-zapisat-zanyatie",
          kind: "short",
          prompt: "Запиши по-английски: «Она художник». Начни с She's.",
          answer: "She's an artist.",
          exact: true,
          accept: ["She's an artist", "She is an artist.", "She is an artist"],
          hint: "Слово artist начинается с гласного звука.",
          why: "She's an artist. Перед гласным звуком ставят an, а не a.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-ya-nahozhus",
      title: "Где я: предлог in",
      estimatedMinutes: 13,
      outcome: "говорить, где ты сейчас: in и название города",

      blocks: [
        {
          id: "zachem-in",
          kind: "explain",
          text: [
            "From говорит, откуда человек родом. Но живёт он не всегда там же: родом из " +
              "Алматы, а сейчас в Астане. Для «где сейчас» нужен другой предлог — in.",
            "I'm from Almaty. I'm in Astana. Два предложения, два предлога, и путать их " +
              "нельзя: from — откуда, in — где.",
          ],
        },
        {
          id: "tablica-from-in",
          kind: "table",
          caption: "From и in рядом",
          // Соседние строки звучат по отдельности нарочно: разницу между from
          // и in слышно, когда две записи включают подряд.
          zvuchat: ["I'm from Almaty.", "I'm in Astana.", "She's from Turkey.",
            "She's in Ankara.",
          ],
          head: ["Фраза", "Перевод", "О чём"],
          rows: [
            ["I'm from Almaty.", "Я из Алматы.", "откуда родом"],
            ["I'm in Astana.", "Я в Астане.", "где сейчас"],
            ["She's from Turkey.", "Она из Турции.", "откуда родом"],
            ["She's in Ankara.", "Она в Анкаре.", "где сейчас"],
          ],
        },
        {
          id: "in-s-gorodom-i-stranoy",
          kind: "note",
          tone: "info",
          text:
            "In ставят и перед городом, и перед страной: in Astana, in Kazakhstan. Как и " +
            "from, этот предлог не меняется — меняется только название после него.",
        },
        {
          id: "ne-putat-from-i-in",
          kind: "note",
          tone: "mistake",
          text:
            "«I'm in Almaty» и «I'm from Almaty» — разные сообщения. Первое: сейчас " +
            "нахожусь в Алматы. Второе: родом оттуда. Одно слово меняет смысл целиком.",
        },
        // Запись четырёх предложений подряд убрана: те же четыре звучат в
        // таблице выше, каждое отдельно.
        {
          id: "slovar-in",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "in", translation: "в", example: "I'm in Astana.", hint: "/ɪn/" },
            { term: "home", translation: "дом, родной дом", example: "I'm at home.", hint: "/həʊm/" },
            { term: "work", translation: "работа", example: "I'm at work.", hint: "/wɜːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoy-predlog",
          kind: "choice",
          prompt: "Дана сейчас находится в Астане. Какой предлог нужен?",
          options: [{ text: "from" }, { text: "in", correct: true }, { text: "too" }],
          hint: "Речь о том, где она сейчас, а не откуда родом.",
          why: "In — «в», о том, где человек сейчас. From говорит, откуда он родом.",
        },
        {
          id: "z2-dopisat-in",
          kind: "gap",
          prompt: "Допиши предлог: «Он в Италии».",
          before: "He's ",
          after: " Italy.",
          answer: "in",
          hint: "Две буквы.",
          why: "He's in Italy. Предлог in годится и для города, и для страны.",
        },
        {
          id: "z3-otmetit-otkuda",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят, откуда человек родом.",
          parts: [
            { text: "I'm from Almaty.", selectable: true, correct: true },
            { text: " · " },
            { text: "She's in Rome.", selectable: true },
            { text: " · " },
            { text: "He's from Spain.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm in Astana.", selectable: true },
          ],
          hint: "Смотри на предлог, а не на название.",
          why:
            "From говорит, откуда человек родом: from Almaty, from Spain. In говорит, где " +
            "он сейчас.",
        },
        {
          id: "z4-perevesti-in",
          kind: "short",
          prompt: "Запиши по-английски: «Я в Алматы». Начни с I'm.",
          answer: "I'm in Almaty.",
          exact: true,
          accept: ["I'm in Almaty", "I am in Almaty.", "I am in Almaty"],
          hint: "Нужен предлог «где», а не «откуда».",
          why: "I'm in Almaty. Речь о том, где человек сейчас, поэтому in.",
        },
        {
          id: "z5-dva-predlozheniya",
          kind: "order",
          prompt: "Собери рассказ: сначала откуда родом, потом где сейчас.",
          items: ["I'm in Astana.", "I'm from Almaty."],
          answer: [1, 0],
          hint: "Первым идёт предложение с from.",
          why:
            "I'm from Almaty. I'm in Astana. Сначала говорят, откуда родом, потом — где " +
            "находятся сейчас.",
        },
        {
          id: "z6-vybrat-po-smyslu",
          kind: "choice",
          prompt: "Алим родился в Турции, а сейчас в Астане. Какая пара верна?",
          options: [
            { text: "He's in Turkey. He's from Astana." },
            { text: "He's from Turkey. He's in Astana.", correct: true },
            { text: "He's from Turkey. He's from Astana." },
          ],
          hint: "Родился — это from. Сейчас — это in.",
          why:
            "He's from Turkey. He's in Astana. Первый предлог говорит о происхождении, " +
            "второй — о том, где он сейчас.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "poryadok-slov",
      title: "Порядок слов в предложении",
      estimatedMinutes: 13,
      outcome: "строить предложение в порядке «кто — глагол — остальное»",

      blocks: [
        {
          id: "zachem-poryadok",
          kind: "explain",
          text: [
            "Все предложения этого модуля построены одинаково: сначала тот, о ком речь, " +
              "потом глагол, потом всё остальное. I'm a student. She's from Turkey. " +
              "He's in Astana.",
            "В русском слова можно переставлять почти как угодно: «я студент», «студент я» — " +
              "смысл держится на окончаниях. В английском окончаний почти нет, и смысл " +
              "держится на порядке. Переставишь — получится другое или бессмыслица.",
          ],
        },
        {
          id: "tablica-poryadka",
          kind: "table",
          caption: "Три места в предложении",
          head: ["Кто", "Глагол", "Остальное"],
          rows: [
            ["I", "am", "a student"],
            ["She", "is", "from Turkey"],
            ["He", "is", "in Astana"],
            ["You", "are", "a teacher"],
          ],
        },
        {
          id: "mesto-ne-pustuet",
          kind: "note",
          tone: "mistake",
          text:
            "Первые два места не пустуют никогда. «Am a student» — нет первого, «I a " +
            "student» — нет второго. Оба предложения по-английски не читаются, хотя по-русски " +
            "«студент» само по себе понятно.",
        },
        {
          id: "tochka-i-zaglavnaya",
          kind: "note",
          tone: "info",
          text:
            "Предложение начинается с заглавной буквы и заканчивается точкой — как и в " +
            "русском. Отличий несколько, и первое уже знакомо: слово I заглавное всегда, где " +
            "бы ни стояло. Дальше в курсе прибавятся дни недели и месяцы — в русском они " +
            "пишутся со строчной, в английском с заглавной.",
        },
        {
          // Была отдельная запись четырёх предложений разом. Стала примером:
          // ученик видит строку и слушает её же. Таблица выше звука не получает
          // нарочно — в её ячейках лежат куски предложения, а не предложение, и
          // читать вслух «am» отдельно не значит ничего.
          id: "chetyre-po-obrazcu",
          kind: "example",
          caption: "Те же четыре предложения подряд",
          text:
            "I am a student.\nShe is from Turkey.\nHe is in Astana.\nYou are a teacher.",
          zvuchat: ["I am a student.", "She is from Turkey.", "He is in Astana.",
            "You are a teacher.",
          ],
          explain:
            "Порядок в каждом одинаков: кто, глагол, остальное. Послушай строки по одной " +
            "и повтори вслух — так порядок запоминается не только глазами.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-student",
          kind: "order",
          prompt: "Собери предложение: «Я студент».",
          items: ["student", "I", "a", "am"],
          answer: [1, 3, 2, 0],
          hint: "Первое место — тот, о ком речь. Второе — глагол.",
          why: "I am a student. Кто, глагол, остальное — порядок в утверждении всегда такой.",
        },
        {
          id: "z2-sobrat-iz-turcii",
          kind: "order",
          prompt: "Собери предложение: «Она из Турции».",
          items: ["from", "is", "She", "Turkey"],
          answer: [2, 1, 0, 3],
          hint: "Предлог идёт после глагола, а не перед ним.",
          why: "She is from Turkey. Первое место — she, второе — is, дальше всё остальное.",
        },
        {
          id: "z3-najti-nepravilnyy",
          kind: "choice",
          prompt: "В какой строке порядок слов нарушен?",
          options: [
            { text: "He is in Astana." },
            { text: "A student I am.", correct: true },
            { text: "You are a teacher." },
          ],
          hint: "Найди строку, где первым стоит не тот, о ком речь.",
          why:
            "«A student I am» — первое место занято не тем. Правильно: I am a student. " +
            "Две другие строки построены верно.",
        },
        {
          id: "z4-otmetit-propusk",
          kind: "hottext",
          prompt: "Отметь строки, где одно из первых двух мест пустует.",
          parts: [
            { text: "Am a doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is a nurse.", selectable: true },
            { text: " · " },
            { text: "He from Italy.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am in Almaty.", selectable: true },
          ],
          hint: "В одной строке нет того, о ком речь; в другой — глагола.",
          why:
            "«Am a doctor» — нет первого места, «He from Italy» — нет глагола. Должно быть " +
            "I am a doctor и He is from Italy.",
        },
        {
          id: "z5-ispravit-poryadok",
          kind: "short",
          prompt: "Исправь порядок и запиши целиком: «In Astana he is.»",
          answer: "He is in Astana.",
          exact: true,
          accept: ["He is in Astana", "He's in Astana.", "He's in Astana"],
          hint: "Начни с того, о ком речь.",
          why: "He is in Astana — или коротко He's in Astana. Оба написания засчитываются.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-otkuda",
      title: "Спросить: Where are you from?",
      estimatedMinutes: 13,
      outcome: "спрашивать, откуда собеседник, и отвечать на этот вопрос",

      blocks: [
        {
          id: "zachem-vopros",
          kind: "explain",
          text: [
            "Рассказать о себе — половина разговора. Вторая половина — спросить. " +
              "«Откуда ты» по-английски Where are you from? Слово where значит «где, " +
              "откуда».",
            "Обрати внимание на порядок: в утверждении было you are, а в вопросе части " +
              "поменялись местами — are you. Как это устроено, разберём в следующем модуле. " +
              "Пока выучи вопрос целиком — так же, как How do you spell that? в модуле про " +
              "алфавит.",
          ],
        },
        {
          id: "tablica-voprosov",
          kind: "table",
          caption: "Вопрос и ответ",
          zvuchat: ["Where are you from?", "Where is he from?", "And you?",
            "I'm from Kazakhstan.", "He's from Turkey.", "I'm from Almaty.",
          ],
          head: ["Вопрос", "Перевод", "Ответ"],
          rows: [
            ["Where are you from?", "Откуда ты?", "I'm from Kazakhstan."],
            ["Where is he from?", "Откуда он?", "He's from Turkey."],
            ["And you?", "А ты?", "I'm from Almaty."],
          ],
        },
        {
          id: "from-v-konce",
          kind: "note",
          tone: "mistake",
          text:
            "Предлог from в этом вопросе стоит в самом конце: Where are you from? По-русски " +
            "«откуда» — одно слово, и хочется обойтись без from. Но без него вопрос " +
            "получается о другом: Where are you? — «где ты сейчас».",
        },
        {
          id: "razgovor-s-voprosom",
          kind: "example",
          caption: "Как это выглядит в разговоре",
          razgovor: true,
          text:
            "— Hello! I'm Dana. Where are you from?\n— I'm from Turkey. And you?\n— I'm from Kazakhstan.",
          explain:
            "And you? возвращает вопрос собеседнику — тот же приём, что и в модуле про " +
            "приветствие. Повторять весь вопрос не нужно.",
        },
        // Запись вопроса и ответа убрана: разговор выше звучит целиком и на два
        // голоса, а вопрос отдельно — в таблице.
        {
          id: "slovar-voprosa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "where", translation: "где, откуда", example: "Where are you from?", hint: "/weə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoy-vopros",
          kind: "choice",
          prompt: "Как спросить «откуда ты»?",
          options: [
            { text: "Where are you?" },
            { text: "Where are you from?", correct: true },
            { text: "What's your name?" },
          ],
          hint: "Один из вопросов спрашивает, где человек сейчас.",
          why:
            "Where are you from? — «откуда ты». Where are you? спрашивает, где человек " +
            "сейчас, а What's your name? — об имени.",
        },
        {
          id: "z2-dopisat-where",
          kind: "gap",
          prompt: "Допиши вопросительное слово.",
          before: "",
          after: " are you from?",
          answer: "Where",
          exact: true,
          hint: "Пять букв, с заглавной — слово открывает предложение.",
          why: "Where are you from? Слово where значит «где, откуда».",
        },
        {
          id: "z3-otvetit-na-vopros",
          kind: "short",
          prompt: "Тебя спросили: «Where are you from?» Ответь, что ты из Казахстана.",
          answer: "I'm from Kazakhstan.",
          exact: true,
          accept: ["I'm from Kazakhstan", "I am from Kazakhstan.", "I am from Kazakhstan"],
          hint: "Ответ начинается так же, как рассказ о себе в первом уроке модуля.",
          why: "I'm from Kazakhstan. В ответе повторяют предлог from, а не только название.",
        },
        {
          id: "z4-poryadok-razgovora",
          kind: "order",
          prompt: "Расставь реплики по порядку.",
          items: ["I'm from Turkey. And you?", "Hello! Where are you from?", "I'm from Kazakhstan."],
          answer: [1, 0, 2],
          hint: "Сначала здороваются и спрашивают.",
          why:
            "Сначала приветствие с вопросом, потом ответ со встречным вопросом, потом " +
            "ответ на него. And you? возвращает вопрос, не повторяя его целиком.",
        },
        {
          id: "z5-otmetit-voprosy-otkuda",
          kind: "hottext",
          prompt: "Отметь вопросы о том, откуда человек родом.",
          parts: [
            { text: "Where are you from?", selectable: true, correct: true },
            { text: " · " },
            { text: "How are you?", selectable: true },
            { text: " · " },
            { text: "Where is she from?", selectable: true, correct: true },
            { text: " · " },
            { text: "What's your name?", selectable: true },
          ],
          hint: "Ищи предлог в конце вопроса.",
          why:
            "О происхождении спрашивают вопросы с where и from на конце. How are you? — " +
            "о делах, What's your name? — об имени.",
        },
        {
          id: "z6-sprosit-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух вопрос и свой ответ.",
          phrase: "Where are you from? — I'm from ... .",
          translation: "Откуда ты? — Я из ... .",
          hint: "Между вопросом и ответом сделай паузу — их произносят два человека.",
          why:
            "Вопрос и ответ на него — пара, которая понадобится в первом же разговоре. " +
            "Проговори её несколько раз, подставляя свой город или свою страну.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-celikom",
      title: "Рассказ о себе целиком",
      estimatedMinutes: 15,
      outcome: "рассказывать о себе четырьмя предложениями",

      blocks: [
        {
          id: "zachem-rasskaz",
          kind: "explain",
          text: [
            "Тебя просят: «Расскажи о себе». Четырёх предложений для этого хватает: как " +
              "тебя зовут, откуда ты родом, где живёшь сейчас, чем занимаешься.",
            "I'm Alim. I'm from Almaty. I'm in Astana. I'm a student.",
            "Все четыре построены по одному образцу: кто — форма be — остальное.",
          ],
        },
        {
          id: "chetyre-predlozheniya",
          kind: "table",
          caption: "Четыре предложения о себе",
          zvuchat: ["I'm Dana.", "I'm from Almaty.", "I'm in Astana.", "I'm a student.",
          ],
          head: ["О чём", "Пример", "Перевод"],
          rows: [
            ["имя", "I'm Dana.", "Я Дана."],
            ["откуда родом", "I'm from Almaty.", "Я из Алматы."],
            ["где сейчас", "I'm in Astana.", "Я в Астане."],
            ["чем занят", "I'm a student.", "Я студентка."],
          ],
        },
        {
          id: "rasskaz-primer",
          kind: "example",
          caption: "Тот же рассказ подряд",
          text: "Hello! I'm Dana. I'm from Almaty. I'm in Astana. I'm a student. Nice to meet you.",
          zvuchat: ["Hello! I'm Dana. I'm from Almaty. I'm in Astana. I'm a student. Nice to meet you.",
          ],
          explain:
            "Первое и последнее предложения знакомы по модулю «Приветствие». Между ними " +
            "четыре предложения о себе, и каждое начинается одинаково: I'm.",
        },
        {
          id: "poryadok-svobodnyy",
          kind: "note",
          tone: "info",
          text:
            "Эти четыре предложения не держатся друг за друга: сказать сначала о занятии, " +
            "потом о городе — не ошибка. Жёсткий порядок только внутри предложения, а не " +
            "между ними.",
        },
        {
          id: "chto-legko-poteryat",
          kind: "note",
          tone: "mistake",
          text:
            "В длинном рассказе легче всего потерять два коротких слова: форму be и " +
            "артикль a перед занятием. «I from Almaty», «I'm student» — обе ошибки из этого " +
            "модуля, и обе исправляются одним словом.",
        },
        // Запись рассказа убрана: она слово в слово повторяла пример выше, а
        // теперь пример звучит сам.

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz",
          kind: "order",
          prompt: "Расставь предложения рассказа: имя, откуда родом, где сейчас, чем занят.",
          items: ["I'm in Astana.", "I'm a student.", "I'm Dana.", "I'm from Almaty."],
          answer: [2, 3, 0, 1],
          hint: "Начни с имени.",
          why:
            "I'm Dana. I'm from Almaty. I'm in Astana. I'm a student. Порядок между " +
            "предложениями свободный, но в задании просили именно этот.",
        },
        {
          id: "z2-najti-oshibki-v-rasskaze",
          kind: "hottext",
          prompt: "Отметь предложения с ошибкой.",
          parts: [
            { text: "I'm from Astana.", selectable: true },
            { text: " · " },
            { text: "I'm doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "I from Turkey.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm an artist.", selectable: true },
          ],
          hint: "В одном предложении нет короткого слова перед занятием, в другом — глагола.",
          why:
            "«I'm doctor» — пропущено a. «I from Turkey» — пропущена форма be. Правильно: " +
            "I'm a doctor и I'm from Turkey.",
        },
        {
          id: "z3-dopisat-o-zanyatii",
          kind: "gap",
          prompt: "Допиши недостающее слово: «Я преподаватель».",
          before: "I'm ",
          after: " teacher.",
          answer: "a",
          hint: "Одна буква. Слово teacher начинается с согласного звука.",
          why: "I'm a teacher. Перед согласным звуком ставят a, перед гласным — an.",
        },
        {
          id: "z4-vopros-i-otvet",
          kind: "match",
          prompt: "Сопоставь вопрос и подходящий ответ.",
          left: ["What's your name?", "Where are you from?", "How are you?"],
          right: ["I'm fine, thank you.", "I'm Dana.", "I'm from Almaty."],
          answer: [1, 2, 0],
          hint: "Все три ответа начинаются одинаково — смотри, что идёт дальше.",
          why:
            "Об имени — I'm Dana, о происхождении — I'm from Almaty, о делах — I'm fine, " +
            "thank you. Начало у ответов общее, а различает их конец.",
        },
        {
          id: "z5-zapisat-otkuda-rodom",
          kind: "short",
          prompt: "Запиши по-английски: «Я из Алматы». Начни с I'm.",
          answer: "I'm from Almaty.",
          exact: true,
          accept: ["I'm from Almaty", "I am from Almaty.", "I am from Almaty"],
          hint: "Нужен предлог «откуда», а не «где».",
          why: "I'm from Almaty. Речь о происхождении, поэтому from.",
        },
        {
          id: "z6-rasskaz-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух рассказ о себе: имя, откуда, где сейчас, чем занят.",
          phrase: "Hello! I'm ... . I'm from ... . I'm in ... . I'm a ... .",
          translation: "Здравствуйте! Я ... . Я из ... . Я в ... . Я ... .",
          hint: "Между предложениями делай паузу — это четыре отдельных сообщения.",
          why:
            "Это весь модуль в одном упражнении. Если четыре предложения идут одно за " +
            "другим сами, рассказ о себе собран.",
        },
      ],
    },

    // =====================================================================
    // ПЕРВЫЙ УРОК ЧТЕНИЯ В КУРСЕ.
    //
    // Сначала я решил, что до восьмого модуля читать не из чего, и поставил
    // первое чтение туда. Методист это опроверг, и опроверг источником:
    // руководство Cambridge ставит чтение на ступень НИЖЕ нашей и требует не
    // рассказа, а «text at sentence level» — предложения. К концу третьего
    // модуля их уже четыре, и они складываются в рассказ о себе.
    //
    // Отсюда и вид заданий: они взяты по образцу части 2 экзамена Pre A1
    // Starters — «верно ли это предложение о прочитанном», — а не по образцу
    // связного текста. Опора записана в `sources`.
    // =====================================================================
    {
      slug: "chitaem-o-cheloveke-korotko",
      title: "Читаем рассказ о себе",
      estimatedMinutes: 12,
      outcome: "понимать по короткому рассказу, откуда человек и чем он занят",

      blocks: [
        {
          id: "zachem-chitat-korotkiy-rasskaz",
          kind: "explain",
          text: [
            "Четыре предложения о себе ты уже умеешь составлять. Теперь научимся читать " +
              "такие же, написанные другими.",
            "Читать их подряд не обязательно. Ищи то предложение, где стоит нужное " +
              "слово: from — про страну, in — про город, a — про занятие.",
          ],
        },
        {
          id: "rasskaz-aigerim",
          kind: "text",
          genre: "message",
          title: "Aigerim",
          body: [
            "Hello! I am Aigerim.",
            "I am from Kazakhstan. I am in Almaty.",
            "I am a teacher.",
          ],
        },
        {
          id: "razbor-korotkogo-rasskaza",
          kind: "note",
          tone: "info",
          text:
            "Все четыре предложения начинаются одинаково — с I am. Читать надо не их, " +
              "а то, что идёт следом: имя, from, in или a.",
        },
        {
          id: "rasskaz-nurlana",
          kind: "text",
          genre: "message",
          title: "Nurlan",
          body: [
            "Hi! I am Nurlan. I am from Turkey.",
            "I am in Astana. I am a driver.",
          ],
        },

        // ---- задания ----
        {
          id: "z1-verno-li-o-aigerim",
          kind: "choice",
          about: "rasskaz-aigerim",
          prompt:
            "Прочитай рассказ Aigerim. Верно ли предложение: «Айгерим — врач»?",
          options: [
            { text: "Неверно, она преподаватель", correct: true },
            { text: "Верно" },
            { text: "В рассказе о занятии не сказано" },
          ],
          hint: "Занятие стоит после I am a.",
          why: "I am a teacher. Преподаватель, а не врач.",
        },
        {
          id: "z2-otkuda-aigerim-chtenie",
          kind: "short",
          about: "rasskaz-aigerim",
          prompt:
            "Прочитай рассказ Aigerim. Из какой страны она? Напиши название " +
            "по-английски.",
          answer: "Kazakhstan",
          accept: ["kazakhstan", "from Kazakhstan"],
          hint: "Страна идёт после from.",
          why: "I am from Kazakhstan. Названия стран пишутся с заглавной буквы.",
        },
        {
          id: "z3-verno-li-o-nurlane",
          kind: "choice",
          about: "rasskaz-nurlana",
          prompt: "Прочитай рассказ Nurlan. Верно ли предложение: «Нурлан в Астане»?",
          options: [
            { text: "Верно", correct: true },
            { text: "Неверно, он в Алматы" },
            { text: "Неверно, он в Турции" },
          ],
          hint: "Город идёт после in, страна — после from.",
          why:
            "I am in Astana. Турция в рассказе тоже названа, но после from: это " +
            "откуда он, а не где сейчас.",
        },
        {
          id: "z4-chem-zanyat-nurlan",
          kind: "short",
          about: "rasskaz-nurlana",
          prompt:
            "Прочитай рассказ Nurlan. Чем он занят? Ответь английским словом.",
          answer: "driver",
          accept: ["a driver", "I am a driver"],
          hint: "Занятие идёт после I am a.",
          why: "I am a driver. Водитель.",
        },
        {
          id: "z5-chem-otlichayutsya-rasskazy",
          kind: "choice",
          about: "rasskaz-nurlana",
          prompt:
            "Сравни два рассказа. Что у Айгерим и Нурлана совпадает?",
          options: [
            { text: "Страна" },
            { text: "Занятие" },
            { text: "Ни страна, ни город, ни занятие", correct: true },
          ],
          hint: "Прочитай в обоих рассказах строки с from, in и a.",
          why:
            "Айгерим из Казахстана, в Алматы, преподаватель. Нурлан из Турции, в " +
            "Астане, водитель. Совпадений нет ни в одной из трёх строк.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания. Первый, где можно слушать не отдельные слова, а связный
    // рассказ: к третьему модулю четыре предложения о себе уже строятся.
    //
    // Расшифровки спрятаны за кнопку, открытую всегда.
    // =====================================================================
    {
      slug: "slushaem-rasskaz-o-sebe",
      title: "Слушаем рассказ о себе",
      estimatedMinutes: 13,
      outcome: "понимать на слух, откуда человек и чем он занят",

      blocks: [
        {
          id: "zachem-slushat-rasskaz",
          kind: "explain",
          text: [
            "Когда человек рассказывает о себе, за полминуты звучит четыре разных " +
              "сведения. Запомнить все сразу трудно.",
            "Держись за первые слова предложений: они и говорят, о чём сейчас речь. " +
              "I'm from — про страну, I'm in — про город, I'm a — про занятие.",
          ],
        },
        {
          id: "za-chto-derzhatsya",
          kind: "table",
          caption: "Первые слова, по которым понятно, о чём речь",
          // Урок слушания: обе записи ниже остаются, они и есть его предмет.
          // А образцы звучат вдобавок — прежде чем ловить начало на слух в
          // потоке, полезно услышать его отдельно.
          zvuchat: ["I'm Alim.", "I'm from Kazakhstan.", "I'm in Astana.", "I'm a student.",
          ],
          head: ["Начало", "О чём оно", "Пример"],
          rows: [
            ["I'm …", "имя", "I'm Alim."],
            ["I'm from …", "откуда", "I'm from Kazakhstan."],
            ["I'm in …", "где сейчас", "I'm in Astana."],
            ["I'm a …", "занятие", "I'm a student."],
          ],
        },
        {
          id: "zapis-rasskaz-o-sebe-celikom",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай рассказ о себе",
          transcript:
            "Hello! I'm Aigerim. I'm from Kazakhstan. I'm in Almaty. I'm a teacher.",
        },
        {
          id: "zapis-vopros-otkuda",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай, как спрашивают, откуда человек",
          transcript:
            "Where are you from? — I'm from Turkey. And you? — I'm from Kazakhstan. " +
            "I'm a doctor.",
        },
        {
          id: "odno-i-to-zhe-nachalo",
          kind: "note",
          tone: "info",
          text:
            "Все четыре предложения начинаются одинаково — с I'm. Слушать надо не его, " +
              "а то, что идёт следом: from, in, a или сразу имя.",
        },

        // ---- задания ----
        {
          id: "z1-otkuda-aigerim",
          kind: "short",
          about: "zapis-rasskaz-o-sebe-celikom",
          prompt:
            "Послушай первую запись. Из какой страны человек? Напиши название " +
            "по-английски.",
          answer: "Kazakhstan",
          accept: ["kazakhstan", "KAZAKHSTAN"],
          hint: "Страна идёт после слов I'm from.",
          why:
            "I'm from Kazakhstan. Названия стран пишутся с заглавной буквы.",
        },
        {
          id: "z2-gde-seychas",
          kind: "choice",
          about: "zapis-rasskaz-o-sebe-celikom",
          prompt: "Послушай первую запись. Где человек находится сейчас?",
          options: [
            { text: "В Астане" },
            { text: "В Алматы", correct: true },
            { text: "Об этом не сказано" },
          ],
          hint: "Город идёт после слов I'm in.",
          why:
            "I'm in Almaty. From говорит, откуда человек родом, in — где он сейчас. " +
            "Это разные сведения, и в записи они оба.",
        },
        {
          id: "z3-chem-zanyat",
          kind: "short",
          about: "zapis-rasskaz-o-sebe-celikom",
          prompt:
            "Послушай первую запись. Чем человек занят? Ответь английским словом.",
          answer: "teacher",
          accept: ["a teacher", "I'm a teacher"],
          hint: "Занятие идёт после I'm a.",
          why: "I'm a teacher. Преподаватель.",
        },
        {
          id: "z4-otkuda-pervyy",
          kind: "choice",
          about: "zapis-vopros-otkuda",
          prompt: "Послушай вторую запись. Откуда тот, кто ответил первым?",
          options: [
            { text: "Из Казахстана" },
            { text: "Из Турции", correct: true },
            { text: "Он не ответил" },
          ],
          hint: "В записи названы две страны — важно, кто какую назвал.",
          why:
            "I'm from Turkey. Казахстан назвал второй собеседник, после слов And you?",
        },
        {
          id: "z5-zanyatie-vtorogo",
          kind: "short",
          about: "zapis-vopros-otkuda",
          prompt:
            "Послушай вторую запись. Чем занят второй собеседник? Ответь английским " +
            "словом.",
          answer: "doctor",
          accept: ["a doctor", "I'm a doctor"],
          hint: "Занятие названо в самом конце записи.",
          why: "I'm a doctor. Врач.",
        },
        {
          id: "z6-rasskazat-o-sebe-vsluh",
          kind: "speak",
          prompt:
            "Расскажи вслух о себе тремя предложениями: откуда ты, где сейчас и чем " +
            "занят.",
          phrase: "I'm from Kazakhstan. I'm in Almaty. I'm a student.",
          translation: "Я из Казахстана. Я в Алматы. Я студент.",
          hint: "Все три начинаются одинаково, разница в том, что идёт после I'm.",
          why:
            "Слушающий разбирает рассказ по словам from, in и a. Пропустишь их — " +
            "и он не поймёт, о чём каждое предложение.",
        },
      ],
    },

    // =====================================================================
    // ПЕРВЫЙ УРОК ПИСЬМА В КУРСЕ.
    //
    // Стоит отдельным уроком, а не заданием внутри восьмого: письмо идёт
    // дольше выбора и вставки, и восьмой урок вышел бы за формат 8–15 минут.
    // Место то же, что у чтения и слушания, — в конце модуля.
    //
    // Опора — в `sources`. Коротко: описания Совета Европы дают на этой
    // ступени «simple isolated phrases and sentences», а эссе не дают вовсе.
    // =====================================================================
    {
      slug: "pishem-o-sebe",
      title: "Пишем о себе",
      estimatedMinutes: 12,
      outcome: "писать о себе четыре предложения и находить в них потерянные слова",

      blocks: [
        {
          id: "zachem-pisat-o-sebe",
          kind: "explain",
          text: [
            "Рассказ о себе чаще пишут, чем произносят: строка в анкете на сайте, первое " +
              "сообщение новому знакомому, подпись под фотографией.",
            "На письме остаётся всё как есть. Пропущенное слово никуда не денется — его " +
              "видно, и его можно найти самому, прежде чем отправить.",
          ],
        },
        {
          id: "obrazec-pisma-o-sebe",
          kind: "example",
          caption: "Четыре строки о себе",
          text: "Hi! I'm Aigul.\nI'm from Kazakhstan.\nI'm in Almaty.\nI'm a nurse.",
          zvuchat: [
            "Hi! I'm Aigul.",
            "I'm from Kazakhstan.",
            "I'm in Almaty.",
            "I'm a nurse.",
          ],
          explain:
            "Четыре строки — четыре сведения: имя, страна, город, занятие. Записаны они " +
            "по одной, и так проще проверить, что ни одно не потеряно.",
        },
        {
          id: "chto-teryayut-na-pisme",
          kind: "note",
          tone: "mistake",
          text:
            "Теряют чаще всего три вещи. Форму be: «I from Almaty» вместо «I'm from " +
            "Almaty». Артикль перед занятием: «I'm nurse» вместо «I'm a nurse». Заглавную " +
            "букву в названии страны и города: «kazakhstan» вместо «Kazakhstan».\n\n" +
            "Прочитай написанное трижды — по одному разу на каждую из трёх потерь.",
        },

        // ---- задания ----
        {
          id: "z1-chto-poteryano",
          kind: "choice",
          prompt:
            "Человек написал о себе: «I'm Alim. I from Turkey. I'm a driver.» " +
            "Что потеряно во втором предложении?",
          options: [
            { text: "Форма be", correct: true },
            { text: "Артикль перед занятием" },
            { text: "Заглавная буква в названии страны" },
          ],
          hint: "Сравни второе предложение с первым: чем они отличаются в начале?",
          why:
            "I'm from Turkey. В первом и третьем предложениях стоит I'm, во втором — " +
            "только I. Артикль и заглавная буква здесь на месте.",
        },
        {
          id: "z2-ispravit-i-zapisat",
          kind: "short",
          prompt: "Исправь и запиши предложение целиком: «I in Astana.»",
          answer: "I'm in Astana.",
          // Полная запись принимается наравне с короткой: обе верны, и урок
          // сейчас не о выборе между ними. Регистр и точку в конце сверка
          // снимает сама, перечислять их незачем.
          accept: ["I am in Astana."],
          hint: "Между I и предлогом должна стоять форма be.",
          why:
            "I'm in Astana. Годится и полная запись — I am in Astana. Обе верны, разница " +
            "только в длине.",
        },
        {
          // ПЕРВОЕ ЗАДАНИЕ НА ПИСЬМО В КУРСЕ.
          //
          // Порог в двенадцать слов — НАШ, а не из источника: четыре коротких
          // предложения короче не выходят. Счёт слов Cambridge даёт только с
          // A2 Key («25 words or more»), на нашей ступени его нет.
          //
          // Машина письмо не оценивает: показывает образец и список для
          // самопроверки. Иначе пришлось бы объявлять ошибкой верный ответ,
          // написанный другими словами.
          id: "z3-napisat-o-sebe",
          kind: "essay",
          prompt:
            "Напиши о себе четыре предложения: как тебя зовут, откуда ты, где ты сейчас, " +
            "чем занимаешься.",
          minWords: 12,
          sample: "Hello! I'm Alim. I'm from Kazakhstan. I'm in Astana. I'm a student.",
          checklist: [
            "В каждом предложении есть I'm или I am.",
            "Перед названием занятия стоит a или an: I'm a student, а не I'm student.",
            "Имя, страна и город написаны с заглавной буквы.",
            "Каждое предложение кончается точкой.",
          ],
          hint:
            "Возьми четыре строки образца и подставь своё: I'm … . I'm from … . " +
            "I'm in … . I'm a … .",
          why:
            "Сравни свой ответ с образцом по четырём пунктам выше. Слова у каждого свои — " +
            "город, занятие и имя. Важно другое: в каждом предложении стоит форма be, а " +
            "перед занятием — артикль.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 18, из них 9 требуют написать ответ самому. Итогов восемь,
  // спрашиваем восемь.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.8,
    questions: [
      // ---- слушание ---------------------------------------------------
      // Другой случай и другой вид задания, чем в уроке: там рассказ о себе и
      // вопрос «откуда», здесь исправление чужого пересказа и город.
      {
        id: "q-chtenie-verno-li",
        kind: "choice",
        outcome: "понимать по короткому рассказу, откуда человек и чем он занят",
        prompt:
          "Рассказ: «Hello! I am Dana. I am from Turkey. I am in Almaty. I am a nurse.» " +
          "Верно ли предложение: «Дана из Алматы»?",
        options: [
          { text: "Верно" },
          { text: "Неверно, она из Турции", correct: true },
          { text: "В рассказе о стране не сказано" },
        ],
        why:
          "I am from Turkey. I am in Almaty. From говорит, откуда человек, in — где он " +
          "сейчас. Алматы — это второе.",
      },
      {
        id: "q-chtenie-chem-zanyata",
        kind: "short",
        outcome: "понимать по короткому рассказу, откуда человек и чем он занят",
        prompt:
          "Тот же рассказ: «I am Dana. I am from Turkey. I am in Almaty. I am a nurse.» " +
          "Чем занята Дана? Ответь английским словом.",
        answer: "nurse",
        accept: ["a nurse", "I am a nurse"],
        why: "I am a nurse. Медсестра. Занятие всегда идёт после I am a.",
      },
      {
        id: "q-na-sluh-otkuda-i-kem",
        kind: "short",
        outcome: "понимать на слух, откуда человек и чем он занят",
        zvuk: "I am Nurlan. I am from Kazakhstan. I am in Astana. I am a driver.",
        prompt:
          "Послушай запись. Чем занят человек? Ответь английским словом.",
        answer: "driver",
        accept: ["a driver", "I am a driver"],
        why:
          "I am a driver. Водитель. Занятие всегда идёт после I am a, а не после " +
          "from или in.",
      },
      {
        id: "q-na-sluh-ispravit-pereskaz",
        kind: "choice",
        outcome: "понимать на слух, откуда человек и чем он занят",
        zvuk: "I am Dana. I am from Turkey. I am in Almaty. I am a nurse.",
        prompt:
          "Послушай запись. Человек пересказал её так: «Dana is from Almaty». " +
          "Где он ошибся?",
        options: [
          { text: "Дана из Турции, а в Алматы она сейчас", correct: true },
          { text: "Дана не из Турции и не из Алматы" },
          { text: "Ошибки нет, пересказ верный" },
        ],
        why:
          "I am from Turkey. I am in Almaty. From — откуда человек, in — где он сейчас. " +
          "Пересказ перепутал одно с другим.",
      },
      {
        id: "q-predlog-otkuda",
        kind: "gap",
        outcome: "говорить, откуда ты: I'm from и название страны или города",
        prompt: "Допиши предлог: «Он из Италии» — речь о происхождении.",
        before: "He's ",
        after: " Italy.",
        answer: "from",
        why: "He's from Italy. From — «из», о происхождении. In говорит, где человек сейчас.",
      },
      {
        id: "q-zapisat-otkuda",
        kind: "short",
        outcome: "говорить, откуда ты: I'm from и название страны или города",
        prompt: "Запиши по-английски: «Он из Турции». Начни с He's.",
        answer: "He's from Turkey.",
        exact: true,
        accept: ["He's from Turkey", "He is from Turkey.", "He is from Turkey"],
        why: "He's from Turkey. Название страны — с заглавной буквы.",
      },
      {
        id: "q-zaglavnaya-strana",
        kind: "short",
        outcome: "писать названия стран и городов с заглавной буквы",
        prompt: "Исправь ошибку и запиши целиком: «I'm from italy.»",
        answer: "I'm from Italy.",
        exact: true,
        accept: ["I'm from Italy", "I am from Italy.", "I am from Italy"],
        why: "I'm from Italy. Название страны — это имя, и заглавная буква нужна ему в любом месте предложения.",
      },
      {
        id: "q-napisanie-italii",
        kind: "choice",
        outcome: "писать названия стран и городов с заглавной буквы",
        prompt: "Как по-английски пишется название Франции?",
        options: [{ text: "france" }, { text: "France", correct: true }, { text: "Francia" }],
        why: "France — с заглавной буквы. Со строчной название страны не пишут, а Francia — не английское написание.",
      },
      {
        id: "q-a-ili-an",
        kind: "gap",
        outcome: "ставить a или an по первому звуку следующего слова",
        prompt: "Допиши недостающее слово перед actor.",
        before: "He's ",
        after: " actor.",
        answer: "an",
        why: "He's an actor. Слово actor начинается с гласного звука, поэтому an.",
      },
      {
        id: "q-dopisat-artikl",
        kind: "gap",
        outcome: "ставить a или an по первому звуку следующего слова",
        prompt: "Допиши недостающее слово перед nurse.",
        before: "She's ",
        after: " nurse.",
        answer: "a",
        why: "She's a nurse. Слово nurse начинается с согласного звука.",
      },
      {
        id: "q-nazvat-zanyatie",
        kind: "gap",
        outcome: "называть своё занятие: I'm a doctor, I'm a student",
        prompt: "Допиши занятие: «Он врач».",
        before: "He's a ",
        after: ".",
        answer: "doctor",
        why: "He's a doctor. Врач по-английски doctor, и после a слово идёт без изменений.",
      },
      {
        id: "q-kto-uchitsya-quiz",
        kind: "choice",
        outcome: "называть своё занятие: I'm a doctor, I'm a student",
        prompt: "Как сказать «я студент»?",
        options: [
          { text: "I'm a student.", correct: true },
          { text: "I student." },
          { text: "Am a student." },
        ],
        why: "I'm a student. Нужны и форма be, и артикль a перед занятием: «I student» без глагола, «Am a student» без того, о ком речь.",
      },
      {
        id: "q-predlog-gde",
        kind: "gap",
        outcome: "говорить, где ты сейчас: in и название города",
        prompt: "Допиши предлог: «Она в Астане».",
        before: "She's ",
        after: " Astana.",
        answer: "in",
        why: "She's in Astana. In говорит, где человек сейчас.",
      },
      {
        id: "q-from-ili-in",
        kind: "choice",
        outcome: "говорить, где ты сейчас: in и название города",
        prompt: "Алим родом из Алматы, а сейчас в Риме. Как сказать про «сейчас»?",
        options: [
          { text: "He's in Rome.", correct: true },
          { text: "He's from Rome." },
          { text: "He's Rome." },
        ],
        why: "He's in Rome. Про «сейчас» говорят с in, про происхождение — с from.",
      },
      {
        id: "q-poryadok-sobrat",
        kind: "order",
        outcome: "строить предложение в порядке «кто — глагол — остальное»",
        prompt: "Собери предложение: «Она преподаватель».",
        items: ["teacher", "She", "a", "is"],
        answer: [1, 3, 2, 0],
        why: "She is a teacher. Кто, глагол, остальное.",
      },
      {
        id: "q-poryadok-najti",
        kind: "choice",
        outcome: "строить предложение в порядке «кто — глагол — остальное»",
        prompt: "В какой строке порядок слов нарушен?",
        options: [
          { text: "I am a driver." },
          { text: "From Spain she is.", correct: true },
          { text: "He is in Almaty." },
        ],
        why: "«From Spain she is» — первым стоит не тот, о ком речь. Правильно: She is from Spain.",
      },
      {
        id: "q-sprosit-otkuda-quiz",
        kind: "short",
        outcome: "спрашивать, откуда собеседник, и отвечать на этот вопрос",
        prompt: "Запиши целиком вопрос «откуда ты».",
        answer: "Where are you from?",
        exact: true,
        accept: ["Where are you from"],
        why: "Where are you from? Без from вопрос спрашивает, где человек сейчас.",
      },
      {
        id: "q-otvetit-otkuda",
        kind: "short",
        outcome: "спрашивать, откуда собеседник, и отвечать на этот вопрос",
        prompt: "Ответь на вопрос «Where are you from?», если ты из Испании. Начни с I'm.",
        answer: "I'm from Spain.",
        exact: true,
        accept: ["I'm from Spain", "I am from Spain.", "I am from Spain"],
        why: "I'm from Spain. В ответе повторяют предлог from.",
      },
      {
        id: "q-rasskaz-sobrat",
        kind: "order",
        outcome: "рассказывать о себе четырьмя предложениями",
        prompt: "Расставь рассказ по порядку: имя, откуда родом, чем занят.",
        items: ["I'm from Almaty.", "I'm a doctor.", "I'm Alim."],
        answer: [2, 0, 1],
        why: "I'm Alim. I'm from Almaty. I'm a doctor.",
      },
      {
        id: "q-rasskaz-oshibka",
        kind: "hottext",
        outcome: "строить предложение в порядке «кто — глагол — остальное»",
        prompt: "Отметь предложения с ошибкой.",
        parts: [
          { text: "I'm a nurse.", selectable: true },
          { text: " · " },
          { text: "I from Spain.", selectable: true, correct: true },
          { text: " · " },
          { text: "I'm in Rome.", selectable: true },
          { text: " · " },
          { text: "I'm teacher.", selectable: true, correct: true },
        ],
        why:
          "«I from Spain» — нет формы be. «I'm teacher» — нет артикля перед занятием.",
      },
      {
        id: "q-vopros-otvet-match",
        kind: "match",
        outcome: "спрашивать, откуда собеседник, и отвечать на этот вопрос",
        prompt: "Сопоставь вопрос и ответ.",
        left: ["Where are you from?", "What's your name?"],
        right: ["I'm Alim.", "I'm from Turkey."],
        answer: [1, 0],
        why: "О происхождении — I'm from Turkey, об имени — I'm Alim.",
      },
      {
        id: "q-artikl-pered-imenem",
        kind: "choice",
        outcome: "называть своё занятие: I'm a doctor, I'm a student",
        prompt: "В какой строке артикль лишний?",
        // Прежние отвлекающие варианты повторяли урочные, а «It's a city.» стояло
        // в обоих местах знак в знак. Взяты другие предложения, притом одно — с
        // названием города, чтобы разница между именем и занятием была видна.
        options: [
          { text: "I'm a student." },
          { text: "He's an artist." },
          { text: "She's a Dana.", correct: true },
        ],
        why: "Перед именем a не ставят: правильно She's Dana. Артикль нужен занятию, а не человеку.",
      },

      // ---- письмо -----------------------------------------------------
      // Угол другой, чем в уроке. Там задание называет, ЧТО потеряно, в одном
      // предложении из трёх; здесь надо найти строку, где не потеряно ничего,
      // и проверить сразу три вещи — форму be, артикль и заглавную букву.
      {
        id: "q-pismo-bez-poter",
        kind: "choice",
        outcome: "писать о себе четыре предложения и находить в них потерянные слова",
        prompt: "В какой строке анкеты не потеряно ничего?",
        options: [
          { text: "I'm from Spain." , correct: true },
          { text: "I'm from spain." },
          { text: "I from Spain." },
        ],
        hint: "Проверяй три вещи подряд: форма be, артикль, заглавная буква.",
        why:
          "I'm from Spain. Во второй строке название страны со строчной буквы, в " +
          "третьей потеряна форма be. Артикль здесь не нужен ни одной: он идёт перед " +
          "занятием, а не перед страной.",
      },
    ],
  },
};

export default module;
