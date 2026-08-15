import type { Module } from "@/lib/content/types";

/**
 * Модуль 5 курса «Английский с нуля»: отрицание с be.
 *
 * Программа: docs/programma-english-starter.md, модуль 5 — «отрицать: сказать,
 * что это не так»; грамматика: отрицание с `be`, отрицательное предложение.
 *
 * ЧЕМ ОГРАНИЧЕН МОДУЛЬ:
 *
 * 1. Отрицается только `be`. Отрицание с `don't` описание ступени тоже ставит
 *    на A1, но настоящее простое время программа отдаёт модулю 15 — значит и
 *    `don't` ждёт там же. Здесь его нет.
 *
 * 2. Множественного числа нет (модуль 8), притяжательных нет (модуль 7).
 *    Описание признаков программа отдаёт модулю 11, поэтому прилагательных
 *    здесь только два, и оба нужны для самого отрицания: `right` и `wrong`.
 *    Основание — English Grammar Profile, A1, ADJECTIVES position
 *    «FORM: PREDICATIVE, WITH 'BE'».
 *
 * 3. ПРОДОЛЖЕНИЕ МОДУЛЯ 4. Там `No, I'm not` был дан готовым оборотом, без
 *    разбора. Здесь он разбирается и распространяется на любое предложение с
 *    `be`. Повтор намеренный: сначала оборот, потом устройство — тот же
 *    порядок, что в модуле 2.
 *
 * 4. Звука нет — решение об источнике записей за владельцем
 *    (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "ne-tak",
  title: "Не так",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, NEGATION negation «FORM: MAIN VERB 'BE'»: «Can form negative statements of main " +
        "verb 'be', with contracted and uncontracted forms», пример источника — «My college " +
        "is not very big». Обе записи, полная и короткая, названы источником прямо, поэтому " +
        "модуль даёт обе. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'». " +
        "A1, PRONOUNS subject/object «FORM: (SUBJECT) STATEMENTS». " +
        "A1, ADJECTIVES position «FORM: PREDICATIVE, WITH 'BE'»: «Can use a limited range of " +
        "adjectives predicatively, after 'be'» — отсюда right и wrong в You are right. " +
        "ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО: A1, NEGATION «FORM: AUXILIARY VERB 'DO', PRESENT» — " +
        "отрицание с don't. По ступени оно проходит, но требует настоящего простого " +
        "времени, а его программа отдаёт модулю 15",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves and " +
        "other people…» — поправить собеседника значит ответить на его вопрос точнее. " +
        "ОГОВОРКА: отдельного описания «умеет отрицать» в книге нет ни на одной ступени. " +
        "Отрицание — не умение общения, а устройство языка, и описания его не перечисляют. " +
        "Основание модуля — строка English Grammar Profile выше и программа курса",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова написанных уроков с пометкой A1: not, right, wrong (прилагательное; " +
        "наречие wrong стоит на B1 и не берётся). Остальное — слова модулей 1–4. " +
        "Произношение: not /nɒt/, right /raɪt/, wrong /rɒŋ/ — сверено по ipa-en-uk.txt, " +
        "где вместо `r` стоит `ɹ`. Курс держит словарную запись `r` во всех модулях",
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
    "строить отрицание, поставив not после формы be",
    "писать короткие формы отрицания: isn't, aren't, I'm not",
    "различать no и not и ставить каждое на своё место",
    "поправлять собеседника: говорить, что не так и как на самом деле",
    "говорить, что это не тот предмет и не то место: it isn't, he isn't in",
    "говорить, прав собеседник или нет: You're right, You're wrong",
    "отвечать на вопрос отрицанием и уточнять",
    "вести разговор, в котором возражаешь и поправляешь собеседника",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "not-posle-be",
      title: "Not после формы be",
      estimatedMinutes: 14,
      outcome: "строить отрицание, поставив not после формы be",

      blocks: [
        {
          id: "zachem-otricanie",
          kind: "explain",
          text: [
            "В прошлом модуле ответ «нет» брался целиком: No, I'm not. Теперь разберём, как " +
              "он устроен, — и тогда отрицать можно будет любое предложение, а не только " +
              "отвечать на вопрос.",
            "Устроено просто: слово not ставят сразу после формы be. I am a student → " +
              "I am not a student. Больше ничего не меняется: ни порядок слов, ни всё " +
              "остальное в предложении.",
          ],
        },
        {
          id: "tablica-otricaniya",
          kind: "table",
          caption: "Утверждение и отрицание",
          head: ["Как есть", "Как не есть", "Перевод"],
          rows: [
            ["I am a student.", "I am not a student.", "Я не студент."],
            ["She is from Turkey.", "She is not from Turkey.", "Она не из Турции."],
            ["He is in Astana.", "He is not in Astana.", "Он не в Астане."],
            ["They are Dana and Aigul.", "They are not Dana and Aigul.", "Они не Дана и Айгуль."],
          ],
        },
        {
          id: "not-ne-pered-be",
          kind: "note",
          tone: "mistake",
          text:
            "«I not am a student» — самая понятная ошибка: по-русски «не» стоит перед " +
            "глаголом, и рука тянется поставить not туда же. По-английски наоборот: " +
            "сначала форма be, и только за ней not.",
        },
        {
          id: "odno-otricanie",
          kind: "note",
          tone: "info",
          text:
            "Одного not достаточно: усиливать отрицание вторым словом, как в русском «я не " +
            "студент никакой», в английском не принято. Пока тебе для этого и слов нет — " +
            "просто запомни, что not в предложении один.",
        },
        {
          id: "primer-popravki",
          kind: "example",
          caption: "Зачем это нужно в разговоре",
          text: "— Is she a nurse?\n— No, she is not a nurse. She is a doctor.",
          explain:
            "Краткого «нет» часто мало: собеседник узнал только то, чего нет. Полное " +
            "отрицание позволяет сказать, что именно не так, а следующим предложением — " +
            "как на самом деле.",
        },
        {
          id: "zapis-otricaniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай утверждение и отрицание рядом",
          transcript:
            "I am a student. I am not a student. She is from Turkey. She is not from Turkey.",
        },
        {
          id: "slovar-otricaniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "not", translation: "не", example: "I am not a doctor.", hint: "/nɒt/" },
            { term: "right", translation: "правильный, верный", example: "You are right.", hint: "/raɪt/" },
            { term: "wrong", translation: "неправильный, не тот", example: "It is wrong.", hint: "/rɒŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-gde-stoit-not",
          kind: "choice",
          prompt: "Куда ставят слово not?",
          options: [
            { text: "Сразу после формы be", correct: true },
            { text: "Перед формой be" },
            { text: "В самый конец предложения" },
          ],
          hint: "По-русски «не» стоит перед глаголом, по-английски — наоборот.",
          why:
            "Not идёт сразу после формы be: I am not, she is not. Перед формой be его " +
            "ставят по русской привычке, и это ошибка.",
        },
        {
          id: "z2-dopisat-not",
          kind: "gap",
          prompt: "Допиши слово, чтобы вышло отрицание: «Он не водитель».",
          before: "He is ",
          after: " a driver.",
          answer: "not",
          hint: "Три буквы, стоят сразу за is.",
          why: "He is not a driver. Слово not встало после is, остальное осталось на месте.",
        },
        {
          id: "z3-sdelat-otricanie",
          kind: "short",
          prompt: "Сделай отрицание из «She is from Spain.» Запиши целиком, без короткой формы.",
          answer: "She is not from Spain.",
          exact: true,
          accept: ["She is not from Spain"],
          hint: "Добавляется одно слово, и место у него определённое.",
          why: "She is not from Spain. Not встало после is; больше ничего не менялось.",
        },
        {
          id: "z4-otmetit-oshibki",
          kind: "hottext",
          prompt: "Отметь строки, где not стоит не на своём месте.",
          parts: [
            { text: "I not am a student.", selectable: true, correct: true },
            { text: " · " },
            { text: "He is not in Rome.", selectable: true },
            { text: " · " },
            { text: "She not is a nurse.", selectable: true, correct: true },
            { text: " · " },
            { text: "They are not from Turkey.", selectable: true },
          ],
          hint: "Not должен стоять сразу после формы be, а не перед ней.",
          why:
            "«I not am» и «She not is» — not перед формой be. Правильно: I am not, she is " +
            "not. Две другие строки построены верно.",
        },
        {
          id: "z5-sobrat-otricanie",
          kind: "order",
          prompt: "Собери предложение: «Я не врач».",
          items: ["doctor", "not", "I", "am", "a"],
          answer: [2, 3, 1, 4, 0],
          hint: "Сначала тот, о ком речь, потом форма be, потом not.",
          why:
            "I am not a doctor. Порядок неизменный: кто, форма be, not, дальше всё " +
            "остальное вместе со словом a.",
        },
        {
          id: "z6-popravit-sobesednika",
          kind: "short",
          prompt: "Собеседник сказал: «You are a teacher.» Ты студент. Возрази целиком, без короткой формы.",
          answer: "I am not a teacher.",
          exact: true,
          accept: ["I am not a teacher"],
          hint: "Отвечаешь о себе, значит местоимение меняется на I.",
          why:
            "I am not a teacher. Про you спросили — про I отвечаешь; форма be меняется на " +
            "am, за ней встаёт not.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "korotkie-formy-otricaniya",
      title: "Isn't, aren't, I'm not",
      estimatedMinutes: 14,
      outcome: "писать короткие формы отрицания: isn't, aren't, I'm not",

      blocks: [
        {
          id: "zachem-korotkie-otricaniya",
          kind: "explain",
          text: [
            "У отрицания, как и у утверждения, есть короткая запись. She is not → " +
              "she isn't. They are not → they aren't. Приём знакомый по I'm и he's: " +
              "апостроф встаёт на место выпавшей буквы. Здесь выпадает o из not.",
            "Обе записи одинаково правильны, и встречаются обе. Знать нужно тоже обе, " +
              "а пользоваться — какой удобнее.",
          ],
        },
        {
          id: "tablica-korotkih-otricaniy",
          kind: "table",
          caption: "Полная запись и короткая",
          head: ["Полная", "Короткая", "Что выпало"],
          rows: [
            ["I am not", "I'm not", "a в am — слипается местоимение с глаголом"],
            ["you are not", "you aren't", "o в not"],
            ["he is not", "he isn't", "o в not"],
            ["she is not", "she isn't", "o в not"],
            ["it is not", "it isn't", "o в not"],
            ["we are not", "we aren't", "o в not"],
            ["they are not", "they aren't", "o в not"],
          ],
        },
        {
          id: "pervoe-lico-osoboe",
          kind: "note",
          tone: "mistake",
          text:
            "Первая строка стоит особняком: у неё слипается не глагол с not, а местоимение " +
            "с глаголом. Получается I'm not; записи «amn't» в английском не используют. " +
            "У остальных шести строк наоборот.",
        },
        {
          id: "dve-korotkie-u-odnogo",
          kind: "note",
          tone: "info",
          text:
            "У строк с are и is коротких записей на самом деле две: they aren't и " +
            "they're not, she isn't и she's not. Обе верны. Чтобы не путаться, в курсе " +
            "берём первую — ту, где слипается глагол с not.",
        },
        {
          id: "zapis-korotkih-otricaniy",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай короткие формы",
          transcript: "I'm not a student. She isn't from Turkey. They aren't in Astana.",
        },

        // ---- задания ----
        {
          id: "z1-korotkaya-dlya-is-not",
          kind: "choice",
          prompt: "Как записать she is not коротко?",
          options: [
            { text: "she isnt" },
            { text: "she isn't", correct: true },
            { text: "she is'nt" },
          ],
          hint: "Апостроф стоит ровно на месте выпавшей буквы.",
          why:
            "She isn't. Выпала o из not, на её месте апостроф. Без апострофа и с апострофом " +
            "не на месте — обе записи неверны.",
        },
        {
          id: "z2-dopisat-arent",
          kind: "gap",
          prompt: "Запиши коротко: they are not.",
          before: "They ",
          after: " in Rome.",
          answer: "aren't",
          hint: "Выпадает та же буква, что у isn't.",
          why: "They aren't in Rome. Из not выпала o, на её месте апостроф.",
        },
        {
          id: "z3-razvernut",
          kind: "short",
          prompt: "Запиши полностью, без короткой формы: «He isn't a driver.»",
          answer: "He is not a driver.",
          exact: true,
          accept: ["He is not a driver"],
          hint: "Апостроф уходит, буква возвращается.",
          why: "He is not a driver. Isn't разворачивается в is not.",
        },
        {
          id: "z4-otmetit-nevernye",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой в короткой форме.",
          parts: [
            { text: "I amn't a doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "She isn't from Spain.", selectable: true },
            { text: " · " },
            { text: "They arent in Almaty.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm not a nurse.", selectable: true },
          ],
          hint: "Одного слова в английском нет вовсе, в другом пропущен апостроф.",
          why:
            "«Amn't» не существует — нужно I'm not. «Arent» без апострофа — нужно aren't. " +
            "Две другие строки записаны верно.",
        },
        {
          id: "z5-sopostavit-korotkie",
          kind: "match",
          prompt: "Сопоставь полную запись и короткую.",
          left: ["I am not", "it is not", "we are not"],
          right: ["we aren't", "I'm not", "it isn't"],
          answer: [1, 2, 0],
          hint: "У одной пары слипается не глагол с not, а местоимение с глаголом.",
          why: "I am not — I'm not, it is not — it isn't, we are not — we aren't.",
        },
        {
          id: "z6-zapisat-korotko",
          kind: "short",
          prompt: "Запиши коротко: «Я не преподаватель». Начни с I'm.",
          answer: "I'm not a teacher.",
          exact: true,
          accept: ["I'm not a teacher"],
          hint: "У первого лица короткая форма только одна.",
          why: "I'm not a teacher. Записи «amn't» не используют, поэтому слипается I с am.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "no-i-not",
      title: "No и not: два разных слова",
      estimatedMinutes: 12,
      outcome: "различать no и not и ставить каждое на своё место",

      blocks: [
        {
          id: "zachem-razlichat",
          kind: "explain",
          text: [
            "По-русски «нет» и «не» — разные слова, и спутать их никому в голову не приходит. " +
              "По-английски так же: no и not делают разную работу, а похожи только на вид.",
            "No — это ответ. В тех предложениях, которые ты пока строишь, оно стоит в " +
              "начале: No, I'm not. " +
              "Not — часть предложения. Оно отрицает и стоит внутри, после формы be: " +
              "I am not a student.",
          ],
        },
        {
          id: "tablica-no-not",
          kind: "table",
          caption: "Где какое слово",
          head: ["Слово", "Работа", "Где стоит", "Пример"],
          rows: [
            ["no", "ответ «нет»", "в начале, перед запятой", "No, I'm not."],
            ["not", "отрицание", "внутри, после формы be", "I am not a student."],
          ],
        },
        {
          id: "oba-v-odnom-otvete",
          kind: "note",
          tone: "info",
          text:
            "В полном ответе на вопрос встречаются оба сразу: No, I'm not a student. " +
            "Сначала no отвечает на вопрос, потом not отрицает внутри предложения. Друг " +
            "друга они не заменяют.",
        },
        {
          id: "no-vmesto-not",
          kind: "note",
          tone: "mistake",
          text:
            "«I am no a student» — на месте not оказалось no. Внутри предложения после " +
            "формы be стоит только not. И наоборот: ответ начинается с No, а не с Not.",
        },
        {
          id: "zapis-no-not",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай оба слова в одном ответе",
          transcript: "Are you a student? — No, I'm not. I am not a student. I am a teacher.",
        },
        {
          id: "slovar-no-not",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "no", translation: "нет", example: "No, I'm not.", hint: "/nəʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoe-slovo",
          kind: "choice",
          prompt: "Какое слово ставят внутри предложения, после формы be?",
          options: [{ text: "not", correct: true }, { text: "no" }, { text: "оба годятся" }],
          hint: "Одно из них — ответ, другое — часть предложения.",
          why: "Not. Слово no — это ответ, и оно стоит в начале, перед запятой.",
        },
        {
          id: "z2-dopisat-no",
          kind: "gap",
          prompt: "Допиши слово-ответ в начале.",
          before: "",
          after: ", I'm not a driver.",
          answer: "No",
          exact: true,
          hint: "Две буквы, с заглавной — слово открывает предложение.",
          why: "No, I'm not a driver. Ответ начинается с no, а отрицает внутри уже not.",
        },
        {
          id: "z3-otmetit-putanicu",
          kind: "hottext",
          prompt: "Отметь строки, где no и not перепутаны местами.",
          parts: [
            { text: "I am no a doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, I'm not.", selectable: true },
            { text: " · " },
            { text: "Not, she isn't.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is not a nurse.", selectable: true },
          ],
          hint: "Внутри предложения — not, в начале ответа — no.",
          why:
            "«I am no a doctor» — внутри нужен not. «Not, she isn't» — ответ начинается с " +
            "No. Две другие строки верны.",
        },
        {
          id: "z4-sopostavit-rabotu",
          kind: "match",
          prompt: "Сопоставь слово и его работу.",
          left: ["no", "not"],
          right: ["отрицает внутри предложения", "отвечает на вопрос"],
          answer: [1, 0],
          hint: "Одно из них ты говоришь первым словом ответа.",
          why: "No отвечает на вопрос, not отрицает внутри предложения.",
        },
        {
          id: "z5-polnyy-otvet",
          kind: "short",
          prompt: "«Are you a doctor?» Ответь полностью: сначала «нет», потом целое предложение.",
          answer: "No, I am not a doctor.",
          exact: true,
          accept: ["No, I am not a doctor", "No, I'm not a doctor.", "No, I'm not a doctor"],
          hint: "В ответе встретятся оба слова: и no, и not.",
          why:
            "No, I am not a doctor — или коротко No, I'm not a doctor. No отвечает, not " +
            "отрицает.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "popravit-sobesednika",
      title: "Не так, а вот так",
      estimatedMinutes: 14,
      outcome: "поправлять собеседника: говорить, что не так и как на самом деле",

      blocks: [
        {
          id: "zachem-popravlyat",
          kind: "explain",
          text: [
            "Одного отрицания в разговоре мало. «I'm not a doctor» — и собеседник знает " +
              "только, кем ты не работаешь. В этом курсе поправку строим в два шага: сказать, " +
              "что не так, и сразу — как на самом деле.",
            "Второе предложение — обычное утверждение, которое ты умеешь строить с первого " +
              "модуля. Ничего нового учить не нужно, нужно только не останавливаться на " +
              "первом шаге.",
          ],
        },
        {
          id: "tablica-popravok",
          kind: "table",
          caption: "Два шага поправки",
          head: ["Что сказал собеседник", "Шаг 1: не так", "Шаг 2: как есть"],
          rows: [
            ["You are a doctor.", "I'm not a doctor.", "I'm a nurse."],
            ["She is from Turkey.", "She isn't from Turkey.", "She's from Spain."],
            ["He is in Rome.", "He isn't in Rome.", "He's in Almaty."],
          ],
        },
        {
          id: "vtoroy-shag-obyazatelen",
          kind: "note",
          tone: "mistake",
          text:
            "Если остановиться на первом шаге, собеседник узнает только, что его догадка " +
            "неверна, но не узнает, как на самом деле. Второе предложение короткое, но без " +
            "него поправка не закончена.",
        },
        {
          id: "sorry-pered-popravkoy",
          kind: "note",
          tone: "info",
          text:
            "Перед поправкой можно поставить sorry — слово из модуля про приветствие. " +
            "Sorry, I'm not a doctor. I'm a nurse. Здесь оно не извинение за проступок, а " +
            "смягчение возражения.",
        },
        {
          id: "primer-popravki-v-razgovore",
          kind: "example",
          caption: "Поправка в разговоре",
          text:
            "— Hello! Are you Dana?\n— Sorry, I'm not Dana. I'm Aigul.\n— Sorry! Nice to meet you, Aigul.",
          explain:
            "Собеседник обознался. Ответ строится теми же двумя шагами: сначала что не " +
            "так — I'm not Dana, потом как есть — I'm Aigul.",
        },
        {
          id: "zapis-popravki",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай поправку",
          transcript: "Are you Dana? — Sorry, I'm not Dana. I'm Aigul.",
        },
        {
          id: "slovar-popravki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sorry", translation: "простите, извини", example: "Sorry, I'm not Dana.", hint: "/ˈsɒri/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-skolko-shagov",
          kind: "choice",
          prompt: "Из чего состоит поправка?",
          options: [
            { text: "Только из отрицания" },
            { text: "Из отрицания и того, как на самом деле", correct: true },
            { text: "Только из слова sorry" },
          ],
          hint: "Собеседнику мало знать, чего нет.",
          why:
            "Из двух шагов: сначала что не так, потом как на самом деле. После одного " +
            "отрицания собеседник по-прежнему не знает, как есть.",
        },
        {
          id: "z2-dopisat-vtoroy-shag",
          kind: "gap",
          prompt: "Допиши второй шаг поправки: на самом деле она медсестра.",
          before: "She isn't a doctor. She's a ",
          after: ".",
          answer: "nurse",
          hint: "Слово из модуля про занятия.",
          why:
            "She isn't a doctor. She's a nurse. Второе предложение — обычное утверждение " +
            "со словом a перед занятием.",
        },
        {
          id: "z3-otmetit-nezakonchennye",
          kind: "hottext",
          prompt: "Отметь поправки, в которых сделан только первый шаг.",
          parts: [
            { text: "I'm not a driver. I'm a teacher.", selectable: true },
            { text: " · " },
            { text: "She isn't from Spain.", selectable: true, correct: true },
            { text: " · " },
            { text: "He isn't in Rome. He's in Astana.", selectable: true },
            { text: " · " },
            { text: "I'm not Dana.", selectable: true, correct: true },
          ],
          hint: "Ищи ответы из одного предложения.",
          why:
            "«She isn't from Spain» и «I'm not Dana» говорят только, чего нет. В двух " +
            "других есть второе предложение о том, как на самом деле.",
        },
        {
          id: "z4-sobrat-popravku",
          kind: "order",
          prompt: "Расставь поправку по порядку.",
          items: ["I'm a nurse.", "Sorry,", "I'm not a doctor."],
          answer: [1, 2, 0],
          hint: "Смягчение идёт первым, как есть — последним.",
          why: "Sorry, I'm not a doctor. I'm a nurse. Сначала смягчение, потом два шага поправки.",
        },
        {
          id: "z5-popravit-celikom",
          kind: "short",
          prompt: "Собеседник сказал: «You are from Turkey.» Ты из Казахстана. Возрази и скажи, как есть, — два предложения.",
          answer: "I'm not from Turkey. I'm from Kazakhstan.",
          exact: true,
          accept: [
            "I'm not from Turkey. I'm from Kazakhstan",
            "I am not from Turkey. I am from Kazakhstan.",
            "I am not from Turkey. I am from Kazakhstan",
          ],
          hint: "Первое предложение с not, второе — обычное утверждение.",
          why:
            "I'm not from Turkey. I'm from Kazakhstan. Два шага: что не так и как на самом " +
            "деле.",
        },
        {
          id: "z6-popravka-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух поправку о себе: возрази на «You are a student» и назови своё занятие.",
          phrase: "Sorry, I'm not a student. I'm a ... .",
          translation: "Простите, я не студент. Я ... .",
          hint: "Между двумя предложениями сделай короткую паузу.",
          why:
            "Поправка из двух шагов — то, что понадобится в любом разговоре о себе. " +
            "Проговори её, подставив своё занятие.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "eto-ne-to",
      title: "Это не то: отрицание о предметах и местах",
      estimatedMinutes: 13,
      outcome: "говорить, что это не тот предмет и не то место: it isn't, he isn't in",

      blocks: [
        {
          id: "zachem-o-predmetah",
          kind: "explain",
          text: [
            "Отрицать можно не только про людей. It isn't a city — «это не город». " +
              "He isn't in Astana — «он не в Астане». Устроено так же: форма be, за ней not.",
            "Меняется только то, о чём речь. Само отрицание всегда устроено одинаково — " +
              "запоминать для каждого случая отдельное правило не нужно.",
          ],
        },
        {
          id: "tablica-o-predmetah",
          kind: "table",
          caption: "О предмете, о месте, о положении дел",
          head: ["О чём", "Отрицание", "Перевод"],
          rows: [
            ["о предмете", "It isn't a city.", "Это не город."],
            ["о месте", "He isn't in Rome.", "Он не в Риме."],
            ["о происхождении", "She isn't from Spain.", "Она не из Испании."],
            ["о положении дел", "It isn't OK.", "Это не в порядке."],
          ],
        },
        {
          id: "it-o-mnogom",
          kind: "note",
          tone: "info",
          text:
            "Местоимение it годится и для предмета, и для положения дел — об этом " +
            "говорилось в модуле про местоимения. В отрицании оно ведёт себя так же, как " +
            "he и she: it isn't.",
        },
        {
          id: "predlog-ostayotsya",
          kind: "note",
          tone: "mistake",
          text:
            "Предлог из отрицания не выпадает: «He isn't Rome» — потерялось in. Not " +
            "добавляется, а всё остальное предложение остаётся как было: He isn't in Rome.",
        },
        {
          id: "zapis-o-predmetah",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай четыре отрицания",
          transcript: "It isn't a city. He isn't in Rome. She isn't from Spain. It isn't OK.",
        },

        // ---- задания ----
        {
          id: "z1-o-predmete",
          kind: "choice",
          prompt: "Как сказать «это не город»?",
          options: [
            { text: "It isn't a city.", correct: true },
            { text: "It not is a city." },
            { text: "It isn't city." },
          ],
          hint: "Форма be, за ней not; артикль a перед словом city остаётся.",
          why:
            "It isn't a city. Во втором варианте not стоит перед формой be, в третьем " +
            "потерялся артикль.",
        },
        {
          id: "z2-dopisat-predlog",
          kind: "gap",
          prompt: "Допиши предлог: «Она не в Алматы».",
          before: "She isn't ",
          after: " Almaty.",
          answer: "in",
          hint: "Речь о том, где она сейчас.",
          why: "She isn't in Almaty. Предлог из отрицания не выпадает.",
        },
        {
          id: "z3-otmetit-poteri",
          kind: "hottext",
          prompt: "Отметь строки, где что-то потерялось.",
          parts: [
            { text: "He isn't Rome.", selectable: true, correct: true },
            { text: " · " },
            { text: "It isn't a city.", selectable: true },
            { text: " · " },
            { text: "She isn't nurse.", selectable: true, correct: true },
            { text: " · " },
            { text: "She isn't from Spain.", selectable: true },
          ],
          hint: "В одной строке нет предлога, в другой — короткого слова перед занятием.",
          why:
            "«He isn't Rome» — нет in. «She isn't nurse» — нет a. Правильно: He isn't in " +
            "Rome и She isn't a nurse.",
        },
        {
          id: "z4-sdelat-otricanie-o-predmete",
          kind: "short",
          prompt: "Сделай отрицание из «It is a town.» Запиши короткой формой.",
          answer: "It isn't a town.",
          exact: true,
          accept: ["It isn't a town"],
          hint: "Is и not слипаются в одно слово.",
          why: "It isn't a town. Полная запись — It is not a town; обе верны.",
        },
        {
          id: "z5-sopostavit-o-chyom",
          kind: "match",
          prompt: "Сопоставь отрицание и то, о чём оно.",
          left: ["It isn't a city.", "He isn't in Rome.", "She isn't from Spain."],
          right: ["о происхождении", "о предмете", "о месте"],
          answer: [1, 2, 0],
          hint: "Смотри на предлог: from или in.",
          why:
            "О предмете говорят без предлога, о месте — с in, о происхождении — с from.",
        },
        {
          id: "z6-popravit-o-gorode",
          kind: "short",
          prompt: "Собеседник сказал: «She is in Rome.» На самом деле она в Астане. Возрази и скажи, как есть, — два предложения.",
          answer: "She isn't in Rome. She's in Astana.",
          exact: true,
          accept: [
            "She isn't in Rome. She's in Astana",
            "She is not in Rome. She is in Astana.",
            "She is not in Rome. She is in Astana",
          ],
          hint: "Предлог in остаётся в обоих предложениях, названия городов — с заглавной.",
          why:
            "She isn't in Rome. She's in Astana. Два шага поправки, и предлог in никуда " +
            "не делся.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "prav-ne-prav",
      title: "Ты прав, ты не прав",
      estimatedMinutes: 12,
      outcome: "говорить, прав собеседник или нет: You're right, You're wrong",

      blocks: [
        {
          id: "zachem-prav",
          kind: "explain",
          text: [
            "Кроме поправки есть более короткий способ отозваться на сказанное: сказать, " +
              "прав собеседник или нет. You're right — «ты прав». You're wrong — «ты не " +
              "прав».",
            "Обе фразы устроены знакомо: местоимение, форма be и слово после неё. Ничего " +
              "нового в устройстве нет, новые только два слова.",
          ],
        },
        {
          id: "tablica-prav",
          kind: "table",
          caption: "Отозваться на сказанное",
          head: ["Фраза", "Перевод", "Когда"],
          rows: [
            ["You're right.", "Ты прав.", "собеседник угадал"],
            ["You're wrong.", "Ты не прав.", "собеседник ошибся"],
            ["You aren't right.", "Ты не прав.", "то же, но через отрицание"],
            ["Yes, I am.", "Да.", "подтвердить догадку о себе"],
          ],
        },
        {
          id: "dva-sposoba-vozrazit",
          kind: "note",
          tone: "info",
          text:
            "На эту догадку обе фразы отвечают одинаково: собеседник ошибся. Устроены они " +
            "по-разному — в wrong отрицание спрятано в самом слове, а во втором стоит " +
            "открыто, через not. Знать полезно обе: вторая строится из того, что ты уже " +
            "умеешь. Но переносить это на другие слова нельзя: «not old» — вовсе не всегда " +
            "«young».",
        },
        {
          id: "right-v-konce",
          kind: "note",
          tone: "info",
          text:
            "Слово right встречалось в первом уроке модуля со значением «правильный». " +
            "Здесь оно то же, только стоит после формы be. You are right — «ты прав», " +
            "дословно «ты правильный в том, что сказал».",
        },
        {
          id: "zapis-prav",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай отклики",
          transcript: "You're right. You're wrong. You aren't right. Are you Dana?",
        },

        // ---- задания ----
        {
          id: "z1-sobesednik-ugadal",
          kind: "choice",
          prompt: "Собеседник угадал. Что сказать?",
          options: [
            { text: "You're wrong." },
            { text: "You're right.", correct: true },
            { text: "You aren't right." },
          ],
          hint: "Два варианта из трёх говорят об ошибке.",
          why: "You're right — «ты прав». Два других отклика говорят, что собеседник ошибся.",
        },
        {
          id: "z2-dopisat-otklik",
          kind: "gap",
          prompt: "Допиши слово: «Ты не прав» — через отрицание.",
          before: "You aren't ",
          after: ".",
          answer: "right",
          hint: "То же слово, что и в «You're right».",
          why:
            "You aren't right. Отрицание стоит открыто, а слово right остаётся тем же.",
        },
        {
          id: "z3-dva-sposoba",
          kind: "match",
          prompt: "Сопоставь фразу и перевод.",
          left: ["You're right.", "You're wrong.", "You aren't right."],
          right: ["Ты не прав — через отрицание.", "Ты прав.", "Ты не прав."],
          answer: [1, 2, 0],
          hint: "Две строки из трёх говорят одно и то же разными способами.",
          why:
            "You're right — ты прав. You're wrong и You aren't right отвечают на одно и то " +
            "же: собеседник ошибся. Различаются они устройством, а не смыслом.",
        },
        {
          id: "z4-otmetit-o-oshibke",
          kind: "hottext",
          prompt: "Отметь отклики, которые говорят, что собеседник ошибся.",
          parts: [
            { text: "You're right.", selectable: true },
            { text: " · " },
            { text: "You're wrong.", selectable: true, correct: true },
            { text: " · " },
            { text: "You aren't right.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, I am.", selectable: true },
          ],
          hint: "Один отклик прячет отрицание в слове, другой ставит его открыто.",
          why:
            "You're wrong и You aren't right говорят об ошибке. Два других подтверждают " +
            "сказанное.",
        },
        {
          id: "z5-otozvatsya-i-popravit",
          kind: "short",
          prompt: "Собеседник ошибся: сказал, что ты врач. Скажи, что он не прав, — через отрицание, тремя словами.",
          answer: "You aren't right.",
          exact: true,
          accept: ["You aren't right", "You are not right.", "You are not right"],
          hint: "Форма be с not, за ней знакомое слово.",
          why: "You aren't right — или полностью You are not right.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "otricanie-v-razgovore",
      title: "Отрицание в вопросе и ответе",
      estimatedMinutes: 14,
      outcome: "отвечать на вопрос отрицанием и уточнять",

      blocks: [
        {
          id: "zachem-sobrat",
          kind: "explain",
          text: [
            "Вопрос ты строишь с прошлого модуля, отрицание — с этого. Вместе они дают " +
              "полный обмен: спросили — отвечаешь «нет» — уточняешь, как на самом деле.",
            "Ответ при этом бывает трёх длин, и все три верны. Совсем коротко: No, I'm " +
              "not. Полным предложением: No, I'm not a student. С уточнением: No, I'm not. " +
              "I'm a teacher.",
          ],
        },
        {
          id: "tablica-treh-dlin",
          kind: "table",
          caption: "Три длины ответа",
          head: ["Длина", "Ответ", "Что узнал собеседник"],
          rows: [
            ["короткий", "No, I'm not.", "только что не так"],
            ["полный", "No, I'm not a student.", "то же, но подробнее"],
            ["с уточнением", "No, I'm not. I'm a teacher.", "и что не так, и как есть"],
          ],
        },
        {
          id: "tretya-dlina-luchshe",
          kind: "note",
          tone: "info",
          text:
            "Третий ответ полезнее двух других: он один сообщает, как на самом деле. Первые " +
            "два не ошибочны — просто после них собеседнику приходится спрашивать снова.",
        },
        {
          id: "ne-slepivat",
          kind: "note",
          tone: "mistake",
          text:
            "«No, I'm not a student a teacher» — два предложения слиплись в одно. Это два " +
            "отдельных предложения: No, I'm not. I'm a teacher. Между ними точка.",
        },
        {
          id: "primer-obmena",
          kind: "example",
          caption: "Полный обмен",
          text:
            "— Are you from Astana?\n— No, I'm not. I'm from Almaty. And you?\n— I'm from Astana.",
          explain:
            "Ответ из двух предложений и встречный вопрос — разговор идёт дальше сам. " +
            "Оборот And you? знаком по модулю про приветствие.",
        },
        {
          id: "zapis-obmena",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай обмен",
          transcript: "Are you from Astana? — No, I'm not. I'm from Almaty. And you? — I'm from Astana.",
        },

        // ---- задания ----
        {
          id: "z1-kakoy-otvet-polnee",
          kind: "choice",
          prompt: "Какой ответ сообщает и что не так, и как на самом деле?",
          options: [
            { text: "No, I'm not." },
            { text: "No, I'm not a student." },
            { text: "No, I'm not. I'm a teacher.", correct: true },
          ],
          hint: "Ищи ответ из двух предложений.",
          why:
            "No, I'm not. I'm a teacher. Два других верны, но говорят только о том, чего нет.",
        },
        {
          id: "z2-otvetit-s-utochneniem",
          kind: "short",
          prompt: "«Are you a doctor?» Ты медсестра. Ответь коротко и уточни — два предложения.",
          answer: "No, I'm not. I'm a nurse.",
          exact: true,
          accept: ["No, I'm not. I'm a nurse", "No, I am not. I am a nurse.", "No, I am not. I am a nurse"],
          hint: "Между двумя предложениями точка.",
          why: "No, I'm not. I'm a nurse. Краткий ответ и отдельное предложение о том, как есть.",
        },
        {
          id: "z3-otmetit-slipshiesya",
          kind: "hottext",
          prompt: "Отметь ответы, где два предложения слиплись в одно.",
          parts: [
            { text: "No, I'm not. I'm a teacher.", selectable: true },
            { text: " · " },
            { text: "No, I'm not a student a teacher.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, she isn't. She's from Spain.", selectable: true },
            { text: " · " },
            { text: "No, he isn't in Rome in Almaty.", selectable: true, correct: true },
          ],
          hint: "Ищи строки, где нет точки посередине.",
          why:
            "В двух строках два предложения слиты без точки. Должно быть: No, I'm not. I'm a " +
            "teacher — и No, he isn't in Rome. He's in Almaty.",
        },
        {
          id: "z4-sobrat-obmen",
          kind: "order",
          prompt: "Расставь обмен по порядку.",
          items: ["I'm from Almaty.", "Are you from Astana?", "No, I'm not."],
          answer: [1, 2, 0],
          hint: "Сначала вопрос, потом краткий ответ, потом уточнение.",
          why: "Are you from Astana? — No, I'm not. I'm from Almaty.",
        },
        {
          id: "z5-otvetit-o-drugom",
          kind: "short",
          prompt: "«Is she from Turkey?» Она из Испании. Ответь коротко и уточни — два предложения.",
          answer: "No, she isn't. She's from Spain.",
          exact: true,
          accept: [
            "No, she isn't. She's from Spain",
            "No, she is not. She is from Spain.",
            "No, she is not. She is from Spain",
          ],
          hint: "В ответе о ней краткая форма — isn't.",
          why: "No, she isn't. She's from Spain. Тот же порядок, что и в ответе о себе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-s-vozrazheniem",
      title: "Разговор с возражением",
      estimatedMinutes: 15,
      outcome: "вести разговор, в котором возражаешь и поправляешь собеседника",

      blocks: [
        {
          id: "zachem-razgovor-vozrazheniya",
          kind: "explain",
          text: [
            "Собеседник говорит: You're from Astana. А ты из Алматы. Согласиться нельзя, " +
              "промолчать неудобно — остаётся возразить и сказать, как есть.",
            "Разговор с возражением ничем не хуже разговора, где все соглашаются: " +
              "поправка сообщает о тебе столько же, сколько согласие.",
          ],
        },
        {
          id: "polnyy-razgovor-vozrazheniya",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Hello! Are you Dana?\n— Sorry, I'm not Dana. I'm Aigul.\n" +
            "— Sorry! Are you a student, Aigul?\n— No, I'm not. I'm a teacher. And you?\n" +
            "— I'm a student. Nice to meet you!",
          explain:
            "Две поправки подряд, и разговор не разваливается: каждая состоит из двух " +
            "шагов, а после второй идёт встречный вопрос.",
        },
        {
          id: "tablica-shagov-vozrazheniya",
          kind: "table",
          caption: "Из чего складывается такой разговор",
          head: ["Шаг", "Пример"],
          rows: [
            ["догадка собеседника", "Are you Dana?"],
            ["смягчение", "Sorry,"],
            ["что не так", "I'm not Dana."],
            ["как на самом деле", "I'm Aigul."],
            ["встречный вопрос", "And you?"],
          ],
        },
        {
          id: "vozrazhenie-ne-ssora",
          kind: "note",
          tone: "info",
          text:
            "Возразить — не значит поспорить. Поправка сообщает, как есть: собеседник " +
            "строил догадку, а ты даёшь ему верные сведения.",
        },
        {
          id: "gde-rvyotsya",
          kind: "note",
          tone: "mistake",
          text:
            "Разговор останавливается там, где после отрицания не сказано, как есть: " +
            "собеседнику нечего продолжать. Поправляется это одним коротким предложением.",
        },
        {
          id: "zapis-razgovora-vozrazheniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор целиком",
          transcript:
            "Hello! Are you Dana? — Sorry, I'm not Dana. I'm Aigul. — Sorry! Are you a " +
            "student, Aigul? — No, I'm not. I'm a teacher. And you? — I'm a student.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor-vozrazheniya",
          kind: "order",
          prompt: "Расставь реплики разговора по порядку.",
          items: [
            "No, I'm not. I'm a teacher.",
            "Are you Dana?",
            "Are you a student?",
            "Sorry, I'm not Dana. I'm Aigul.",
          ],
          answer: [1, 3, 2, 0],
          hint: "Сначала догадка об имени, потом вопрос о занятии.",
          why:
            "Догадка, поправка в два шага, новый вопрос, ответ с уточнением. Каждая реплика " +
            "опирается на предыдущую.",
        },
        {
          id: "z2-chto-otvetit-na-dogadku",
          kind: "choice",
          prompt: "«Are you a driver?» Ты преподаватель. Что ответить?",
          options: [
            { text: "No, I'm not driver. I'm teacher." },
            { text: "Sorry, I'm not a driver. I'm a teacher.", correct: true },
            { text: "Sorry, I'm not a driver." },
          ],
          hint: "Проверь, есть ли второй шаг и не потерялось ли короткое слово перед занятием.",
          why:
            "Sorry, I'm not a driver. I'm a teacher. В первом варианте потерян артикль, в " +
            "третьем нет второго шага.",
        },
        {
          id: "z3-dopisat-vstrechnyy",
          kind: "gap",
          prompt: "Допиши встречный вопрос после своего ответа.",
          before: "No, I'm not. I'm a teacher. And ",
          after: "?",
          answer: "you",
          hint: "Приём из модуля про приветствие.",
          why: "And you? Так вопрос возвращают, не повторяя его целиком.",
        },
        {
          id: "z4-otmetit-tupiki",
          kind: "hottext",
          prompt: "Отметь реплики, после которых собеседник так и не узнал, как на самом деле.",
          parts: [
            { text: "No, I'm not. I'm a nurse. And you?", selectable: true },
            { text: " · " },
            { text: "No, I'm not.", selectable: true, correct: true },
            { text: " · " },
            { text: "Sorry, I'm not Dana. I'm Aigul.", selectable: true },
            { text: " · " },
            { text: "You aren't right.", selectable: true, correct: true },
          ],
          hint: "Ищи реплики, после которых собеседник не знает, что сказать.",
          why:
            "«No, I'm not» и «You aren't right» сообщают только отрицание. Две другие " +
            "реплики говорят, как на самом деле, и разговор идёт дальше.",
        },
        {
          id: "z5-popravit-i-sprosit",
          kind: "short",
          prompt: "«Are you from Almaty?» Ты из Астаны. Возрази, скажи как есть и верни вопрос — три предложения.",
          answer: "I'm not from Almaty. I'm from Astana. And you?",
          exact: true,
          accept: [
            "I'm not from Almaty. I'm from Astana. And you",
            "I am not from Almaty. I am from Astana. And you?",
            "I am not from Almaty. I am from Astana. And you",
          ],
          hint: "Три предложения: что не так, как есть, встречный вопрос.",
          why:
            "I'm not from Almaty. I'm from Astana. And you? Три шага, и разговор переходит " +
            "к собеседнику.",
        },
        {
          id: "z6-razgovor-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух свою часть разговора: возрази на догадку, скажи как есть и верни вопрос.",
          phrase: "Sorry, I'm not ... . I'm ... . And you?",
          translation: "Извини, я не ... . Я ... . А ты?",
          hint: "Между предложениями делай паузу — это три отдельных сообщения.",
          why:
            "Это весь модуль в одном упражнении: смягчение, отрицание, как есть и встречный " +
            "вопрос.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Модуль написан целиком: восемь уроков, восемь итогов. Вопросов 22,
  // спрашиваем восемь — по одному на каждый итог.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      {
        id: "q-gde-not",
        kind: "choice",
        outcome: "строить отрицание, поставив not после формы be",
        prompt: "В какой строке not стоит верно?",
        options: [
          { text: "She not is a nurse." },
          { text: "She is a nurse not." },
          { text: "She is not a nurse.", correct: true },
        ],
        why: "She is not a nurse. Not идёт сразу после формы be — не перед ней и не в конце.",
      },
      {
        id: "q-sdelat-otricanie",
        kind: "short",
        outcome: "строить отрицание, поставив not после формы be",
        prompt: "Сделай отрицание из «He is in Rome.» Запиши целиком, без короткой формы.",
        answer: "He is not in Rome.",
        exact: true,
        accept: ["He is not in Rome"],
        why: "He is not in Rome. Not встало после is.",
      },
      {
        id: "q-dopisat-not",
        kind: "gap",
        outcome: "строить отрицание, поставив not после формы be",
        prompt: "Допиши слово: «Она не медсестра».",
        before: "She is ",
        after: " a nurse.",
        answer: "not",
        why: "She is not a nurse. Слово not стоит сразу за формой be.",
      },
      {
        id: "q-korotkaya-isnt",
        kind: "short",
        outcome: "писать короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Запиши коротко: he is not.",
        answer: "he isn't",
        exact: true,
        accept: ["He isn't"],
        why: "He isn't. Апостроф показывает место пропавшей буквы: is not сжалось в isn't.",
      },
      {
        id: "q-amnt",
        kind: "choice",
        outcome: "писать короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Как коротко сказать «я не врач»?",
        options: [
          { text: "I'm not a doctor.", correct: true },
          { text: "I amn't a doctor." },
          { text: "I not am a doctor." },
        ],
        why: "I'm not a doctor. Записи «amn't» не используют, а «I not am» — неверный порядок.",
      },
      {
        id: "q-razvernut-arent",
        kind: "short",
        outcome: "писать короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Запиши полностью, без короткой формы: «They aren't in Astana.»",
        answer: "They are not in Astana.",
        exact: true,
        accept: ["They are not in Astana"],
        why: "They are not in Astana. Aren't разворачивается в are not.",
      },
      {
        id: "q-najti-oshibku-v-poryadke",
        kind: "hottext",
        outcome: "строить отрицание, поставив not после формы be",
        prompt: "Отметь строки, где not стоит не на своём месте.",
        parts: [
          { text: "She not is a teacher.", selectable: true, correct: true },
          { text: " · " },
          { text: "They are not from Spain.", selectable: true },
          { text: " · " },
          { text: "I not am a driver.", selectable: true, correct: true },
          { text: " · " },
          { text: "He is not in Almaty.", selectable: true },
        ],
        why: "Not идёт после формы be: she is not, I am not. В двух строках он встал перед ней.",
      },
      {
        id: "q-sobrat-otricanie",
        kind: "order",
        outcome: "строить отрицание, поставив not после формы be",
        prompt: "Собери предложение: «Она не преподаватель».",
        items: ["teacher", "is", "She", "not", "a"],
        answer: [2, 1, 3, 4, 0],
        why: "She is not a teacher. Кто, форма be, not, дальше всё остальное.",
      },
      {
        id: "q-sopostavit-korotkie-otricaniya",
        kind: "match",
        outcome: "писать короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Сопоставь полную запись и короткую.",
        left: ["you are not", "she is not", "I am not"],
        right: ["I'm not", "you aren't", "she isn't"],
        answer: [1, 2, 0],
        why: "You are not — you aren't, she is not — she isn't, I am not — I'm not.",
      },
      {
        id: "q-apostrof-na-meste",
        kind: "gap",
        outcome: "писать короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Запиши коротко: we are not.",
        before: "We ",
        after: " from Spain.",
        answer: "aren't",
        why: "We aren't from Spain. Апостроф стоит ровно на месте выпавшей буквы o.",
      },
      {
        id: "q-gde-no-gde-not",
        kind: "gap",
        outcome: "различать no и not и ставить каждое на своё место",
        prompt: "Допиши слово-ответ в начале.",
        before: "",
        after: ", I'm not a nurse.",
        answer: "No",
        exact: true,
        why: "No, I'm not a nurse. В начале ответа стоит no, внутри предложения отрицает not.",
      },
      {
        id: "q-no-vmesto-not",
        kind: "choice",
        outcome: "различать no и not и ставить каждое на своё место",
        prompt: "В какой строке слова перепутаны местами?",
        options: [
          { text: "No, I'm not." },
          { text: "I am no a doctor.", correct: true },
          { text: "She is not a nurse." },
        ],
        why: "«I am no a doctor» — внутри предложения нужен not. Правильно: I am not a doctor.",
      },
      {
        id: "q-popravit-dvumya-shagami",
        kind: "short",
        outcome: "поправлять собеседника: говорить, что не так и как на самом деле",
        prompt: "Собеседник сказал: «You are a driver.» Ты преподаватель. Возрази и скажи, как есть, — два предложения.",
        answer: "I'm not a driver. I'm a teacher.",
        exact: true,
        accept: [
          "I'm not a driver. I'm a teacher",
          "I am not a driver. I am a teacher.",
          "I am not a driver. I am a teacher",
        ],
        why: "I'm not a driver. I'm a teacher. В первом предложении ты не соглашаешься, во втором называешь своё занятие.",
      },
      {
        id: "q-nezakonchennaya-popravka",
        kind: "choice",
        outcome: "поправлять собеседника: говорить, что не так и как на самом деле",
        prompt: "Какая поправка закончена?",
        options: [
          { text: "She isn't a doctor. She's a nurse.", correct: true },
          { text: "She isn't a doctor." },
          { text: "Sorry." },
        ],
        why:
          "Закончена та, где есть второй шаг: как на самом деле. Одно отрицание оставляет " +
          "собеседника ни с чем.",
      },
      {
        id: "q-otricanie-o-predmete",
        kind: "short",
        outcome: "говорить, что это не тот предмет и не то место: it isn't, he isn't in",
        prompt: "Сделай отрицание из «It is a city.» Запиши короткой формой.",
        answer: "It isn't a city.",
        exact: true,
        accept: ["It isn't a city"],
        why: "It isn't a city. Полная запись — It is not a city; обе верны.",
      },
      {
        id: "q-predlog-ne-vypadaet",
        kind: "gap",
        outcome: "говорить, что это не тот предмет и не то место: it isn't, he isn't in",
        prompt: "Допиши предлог: «Он не в Риме».",
        before: "He isn't ",
        after: " Rome.",
        answer: "in",
        why: "He isn't in Rome. Отрицание меняет только глагол, а предлог in остаётся на месте.",
      },
      {
        id: "q-prav-ili-net",
        kind: "choice",
        outcome: "говорить, прав собеседник или нет: You're right, You're wrong",
        prompt: "Собеседник ошибся. Какие два отклика годятся?",
        multiple: true,
        options: [
          { text: "You're wrong.", correct: true },
          { text: "You're right." },
          { text: "You aren't right.", correct: true },
        ],
        why: "Об ошибке говорят и You're wrong, и You aren't right. You're right — наоборот, согласие.",
      },
      {
        id: "q-vozrazit-cherez-otricanie",
        kind: "gap",
        outcome: "говорить, прав собеседник или нет: You're right, You're wrong",
        prompt: "Допиши слово: собеседник ошибается, скажи это одним словом.",
        before: "You are ",
        after: ".",
        answer: "wrong",
        why: "You are wrong. Здесь отрицание спрятано в самом слове, а not не нужен.",
      },
      {
        id: "q-otvet-s-utochneniem",
        kind: "short",
        outcome: "отвечать на вопрос отрицанием и уточнять",
        prompt: "«Are you a student?» Ты преподаватель. Ответь коротко и уточни — два предложения.",
        answer: "No, I'm not. I'm a teacher.",
        exact: true,
        accept: [
          "No, I'm not. I'm a teacher",
          "No, I am not. I am a teacher.",
          "No, I am not. I am a teacher",
        ],
        why: "No, I'm not. I'm a teacher. Сначала короткий отклик на вопрос, потом отдельная мысль о занятии.",
      },
      {
        id: "q-slipshiesya-predlozheniya",
        kind: "choice",
        outcome: "отвечать на вопрос отрицанием и уточнять",
        prompt: "В какой строке два предложения слиплись в одно?",
        options: [
          { text: "No, she isn't. She's from Spain." },
          { text: "No, I'm not. I'm a nurse." },
          { text: "No, he isn't in Rome in Almaty.", correct: true },
        ],
        why:
          "«No, he isn't in Rome in Almaty» — два сообщения без точки. Должно быть: " +
          "No, he isn't in Rome. He's in Almaty.",
      },
      {
        id: "q-sobrat-razgovor-vozrazheniya",
        kind: "order",
        outcome: "вести разговор, в котором возражаешь и поправляешь собеседника",
        prompt: "Расставь реплики по порядку.",
        items: ["Sorry, I'm not Dana. I'm Aigul.", "Are you Dana?", "Nice to meet you, Aigul."],
        answer: [1, 0, 2],
        why: "Догадка, поправка в два шага, вежливая концовка.",
      },
      {
        id: "q-popravit-i-vernut-vopros",
        kind: "short",
        outcome: "вести разговор, в котором возражаешь и поправляешь собеседника",
        prompt: "«Are you a nurse?» Ты врач. Возрази, скажи как есть и верни вопрос — три предложения.",
        answer: "I'm not a nurse. I'm a doctor. And you?",
        exact: true,
        accept: [
          "I'm not a nurse. I'm a doctor. And you",
          "I am not a nurse. I am a doctor. And you?",
          "I am not a nurse. I am a doctor. And you",
        ],
        why: "I'm not a nurse. I'm a doctor. And you? Три шага, и очередь у собеседника.",
      },
    ],
  },
};

export default module;
