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
 * 6. Звука нет — решение об источнике записей за владельцем
 *    (docs/zadachi-vladeltsa.md, п. 1.4). Места размечены заготовками.
 */
const module: Module = {
  slug: "rasskaz-o-sebe",
  title: "Рассказ о себе",

  sources: [
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
        {
          id: "zapis-from",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай, как это звучит",
          transcript: "I'm from Kazakhstan. He's from Turkey. She's from Astana.",
        },
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
        {
          id: "zapis-stran",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай названия",
          transcript: "Kazakhstan. Turkey. Spain. Italy. France. Astana. Almaty.",
        },
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
          id: "zapis-artiklya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары",
          transcript: "A doctor. An artist. A teacher. An actor. A city. An apple.",
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
          explain:
            "Каждое предложение построено по одному образцу: кто — форма be — остальное. " +
            "Меняется только конец: имя, откуда, чем занят.",
        },
        {
          id: "zapis-zanyatiy",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай названия занятий",
          transcript: "A student. A teacher. A doctor. A driver. A nurse. An artist.",
        },
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
        {
          id: "zapis-in",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пару предложений",
          transcript: "I'm from Almaty. I'm in Astana. She's from Turkey. She's in Ankara.",
        },
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
          id: "zapis-poryadka",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай четыре предложения",
          transcript: "I am a student. She is from Turkey. He is in Astana. You are a teacher.",
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
          text:
            "— Hello! I'm Dana. Where are you from?\n— I'm from Turkey. And you?\n— I'm from Kazakhstan.",
          explain:
            "And you? возвращает вопрос собеседнику — тот же приём, что и в модуле про " +
            "приветствие. Повторять весь вопрос не нужно.",
        },
        {
          id: "zapis-voprosa",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопрос и ответ",
          transcript: "Where are you from? — I'm from Turkey. And you? — I'm from Kazakhstan.",
        },
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
        {
          id: "zapis-rasskaza",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай рассказ целиком",
          transcript:
            "Hello! I'm Dana. I'm from Almaty. I'm in Astana. I'm a student. Nice to meet you.",
        },

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
    ],
  },
};

export default module;
