import type { Module } from "@/lib/content/types";

/**
 * МОДУЛЬ 17 «Прямо сейчас». Present Continuous: форма be и глагол с окончанием
 * -ing — что человек делает сейчас.
 *
 * Замысел целиком — `docs/beginner-2/plan-modul-17.md` (РАЗДЕЛ 14 ГЛАВНЕЕ
 * РАЗДЕЛОВ 6 И 7), разбор второго методиста —
 * `docs/beginner-2/razbor-zamysla-modul-17.md` (девятнадцать находок, все
 * приняты), ответы владельца — `docs/beginner-2/otvety-vladeltsa-17-sentyabrya.md`
 * (четыре вопроса закрыты 17 сентября 2026). Журнал сборки —
 * `docs/beginner-2/sborka-modulya-17.md`.
 *
 * ВЕСЬ ВИДИМЫЙ РУССКИЙ ТЕКСТ СТОИТ ЗАГЛУШКАМИ «ПИШЕТ РЕДАКТОР». Сборщик не пишет
 * ни объяснений, ни условий, ни разборов: решение владельца от 5 сентября 2026
 * — «НИЧЕГО НЕ ПИШИ. Пусть весь урок пишут редактор и методист». Английские
 * строки, ответы, `accept` и варианты взяты из замысла дословно: их назвал
 * методист.
 *
 * ---------------------------------------------------------------------------
 * ТРИ ВЕЩИ ШАПКИ — названы до первой строки редактора (замысел, раздел 3 и 10)
 * ---------------------------------------------------------------------------
 *
 * 1. ИМЯ ГЛАВНОЙ ВЕЩИ — Present Continuous. Имя дано источником (A2 Key, с. 52,
 *    перечень Tenses) и ответом владельца от 11 сентября 2026. Называется
 *    ученику ОДИН РАЗ, в уроке 1, строкой внутри случая 2: «Это время
 *    называется Present Continuous.» Дальше модуль зовёт форму описанием:
 *    «форма be и глагол с окончанием -ing». Часть строки — «окончание -ing».
 *    Других имён нет: ни «длительное время», ни «форма сейчас».
 * 2. ЗАИМСТВОВАННЫЕ ТЕРМИНЫ: форма be (модуль 2); глагол и Present Simple
 *    (модуль 13); короткий ответ (модуль 3); короткая запись (модуль 2);
 *    местоимение (модуль 9); окончание (модуль 4 — окончание -s множественного
 *    числа; модуль 13 — окончание -s у глагола).
 * 3. ОБЩЕЕ СЛОВО — «действие»; рабочее слово — «сейчас» (звучало в модуле 3 о
 *    месте: «где человек сейчас»). Слова «дело» (модуль 2) и «занятие» (модуль
 *    6) не берутся.
 *
 * ---------------------------------------------------------------------------
 * РАСХОЖДЕНИЯ ИСТОЧНИКОВ — ИХ ЧИТАЕТ СЛЕДУЮЩИЙ ПРОВЕРЯЮЩИЙ (замысел, 2.2 и 10)
 * ---------------------------------------------------------------------------
 *
 * БЕЗ ЭТИХ СТРОК СЛЕДУЮЩИЙ ПРОВЕРЯЮЩИЙ СНИМЕТ ЗАКОННОЕ как превышение ступени.
 * Правило владельца от 10 сентября 2026: берём у того источника, кто даёт оборот
 * на ступени.
 *
 * 1. ОТРИЦАНИЕ Present Continuous (`He isn't reading`) — English Grammar Profile
 *    A2 (NEGATION, `1741163716068x574314163168649300`; present continuous FORM:
 *    NEGATIVE, `1741163713121x303053781636601900`), Cambridge Pre A1 Starters
 *    (Young Learners, с. 29, заголовок блока Verbs: «Positive, negative,
 *    question, imperative and short-answer forms, including contractions»).
 * 2. ВОПРОС ДА-НЕТ И КОРОТКИЙ ОТВЕТ (`Are you reading? — Yes, I am.`) — EGP A2
 *    (`1741163715033x134646499658930300`), Cambridge Pre A1 (там же).
 * 3. `What are you doing?` — EGP A2 (`1741163715031x588201738254725100`,
 *    `1741163713121x821705049205782300`), Cambridge Pre A1 (с. 29, пример
 *    напечатан).
 * 4. `now` — EGP A2 (ADVERBS, USE: TIME, `1741163706722x642517242671444100`),
 *    Cambridge Pre A1 (с. 29, строка Adverbs: «I'm colouring it now.»).
 *
 * ДЕСКРИПТОР — у Cambridge (Young Learners, с. 9): Pre A1 Starters — понять,
 * что человек делает; A1 Movers — описать картинку и действия. У CEFR говорения
 * A1 о происходящем нет, только A2 (с. 260). Владелец 17 сентября 2026: «Да, по
 * Cambridge». Чтение — CEFR, с. 59, A1.
 *
 * ПИСЬМА В МОДУЛЕ НЕТ: жанра источник не называет (замысел, раздел 4).
 *
 * ---------------------------------------------------------------------------
 * ЧЕГО В МОДУЛЕ НЕТ — с причиной (замысел, 2.5 и 8.3)
 * ---------------------------------------------------------------------------
 *
 * - `know`, `have got`, `live` в Present Continuous — ни верной строкой, ни
 *   ошибкой. Запрета «этот глагол так не ставят» модуль не говорит.
 * - наречия частоты модуля 16 в строках Present Continuous — не ставятся;
 *   запрета «с always так не бывает» модуль не говорит (EGP A2: `She is always
 *   smiling`).
 * - `I am working every day` в «так нельзя» — нет: у строки есть верное чтение
 *   (EGP A2, TEMPORARY SITUATIONS).
 * - `Yes, I'm.` — ни врезкой, ни отвлекающим: опоры нет.
 * - `guitar`, `music`, `listen to`, `photo`, `take`, `today`, `rain`, `ball`,
 *   `who`, `look`, `there` местом, `too`, дни недели — нет.
 * - `lie — lying` — шестой вид написания не берётся.
 *
 * ---------------------------------------------------------------------------
 * СТРОКИ, ЗАНЯТЫЕ РАБОТОЙ (замысел, 6.1 и 14.3) — УРОКИ ИХ НЕ ПЕЧАТАЮТ
 * ---------------------------------------------------------------------------
 *
 * `running`, `riding` не напечатаны нигде в модуле, включая примеры карточек.
 * Ответы работы `Dana is wearing a new dress.`, `No, she isn't.`, `She isn't
 * cooking. She is dancing.`, `What is your brother doing?`, `Aigerim and Nurlan
 * are playing in the garden.` в уроках не стоят. Сообщения вопросов 6 и 10 и
 * запись вопроса 11 с уроками не совпадают. ВЕРНО НА 17 сентября 2026 — перед
 * приёмкой сверять заново разбором, а не памятью.
 */
const modul: Module = {
  slug: "pryamo-seychas",
  title: "Прямо сейчас",
  znak: "23f1",

  temy: ["Hobbies and Leisure"],

  egp: [
    // PRESENT / present continuous, FORM: AFFIRMATIVE, A1. «Can use the
    // affirmative form.» Уроки 1, 2, 5.
    "1741163713121x244049823776565150",
    // PRESENT / present continuous, USE: EVENTS IN PROGRESS, A1. «Can use the
    // present continuous with a limited range of verbs to talk about situations
    // and events in progress.» «Limited range» — наблюдение о числе глаголов, а не
    // запрет: модуль берёт немного глаголов и не говорит «не со всеми можно».
    "1741163713121x758287721695059000",
    // VERBS / types, FORM: AUXILIARY VERB BE, A1. «Can use auxiliary verb be.»
    // Не роздан никому (прогон `npm run programma` 17 сентября 2026).
    "1741163715288x262148040901666750",
  ],

  egpPovtor: [
    "1741163713626x486355013779909760", // PRESENT simple, FORM: AFFIRMATIVE — модуль 13 (урок 4)
    "1741163713626x414037782388433340", // PRESENT simple, USE: HABITS AND GENERAL FACTS — модуль 13 (урок 4)
    "1741163708336x928067678664856700", // CLAUSES/interrogatives, AFFIRMATIVE INTERROGATIVE, WITH BE — модуль 3 (урок 7)
    "1741163708329x778951051617750700", // CLAUSES/declarative, NEGATIVE DECLARATIVE WITH BE — модуль 3 (урок 6)
  ],

  sources: [
    {
      ref: "Cambridge English, руководство Young Learners, с. 9, Can Do summary — главный дескриптор модуля",
      section:
        "Pre A1 Starters, Listening and Speaking: «CAN understand some very simple spoken " +
        "descriptions of people – such as name, gender, age, mood, appearance or what they are " +
        "doing». A1 Movers, Listening and Speaking: «CAN give simple descriptions of objects, " +
        "pictures and actions». Над таблицей: «These statements are linked to the CEFR.» " +
        "Ступень и столбец обеих строк проверены координатами pdfplumber (замысел, 0.4). " +
        "Решение владельца от 17 сентября 2026: «Да, по Cambridge».",
    },
    {
      ref: "CEFR Companion 2020, с. 59, Reading as a leisure activity, графа A1 — опора урока чтения",
      section:
        "«Can understand short, illustrated narratives about everyday activities described in " +
        "simple words.» Соседняя строка «Can understand what is happening in a photo story» " +
        "стоит на A2 и не берётся.",
    },
    {
      ref: "Cambridge English, Young Learners, с. 29, Pre A1 Starters, Grammar and Structures List",
      section:
        "«Verbs (Positive, negative, question, imperative and short-answer forms, including " +
        "contractions)» — заголовок блока без своих примеров; под ним «Present continuous (not " +
        "with future reference) — What are you doing? / The cat's sleeping.» и «Adverbs — I'm " +
        "colouring it now.» Отсюда на ступени отрицание, вопрос да-нет, короткий ответ, " +
        "What are you doing? и now.",
    },
    {
      ref: "Cambridge English, Young Learners, с. 15 (Starters Listening Part 1), с. 27 (Starters Speaking Part 2), с. 50 (Movers Speaking Part 2) — форма заданий",
      section:
        "С. 15: «Do plenty of practice with describing people in pictures: their hair, their " +
        "clothes and what they are doing». С. 27: «What's the man doing? (reading)». С. 50: " +
        "«the present continuous tense of some action verbs (for example: play, read, look at, " +
        "write, laugh, go)… The man is talking. The children are eating.»",
    },
    {
      ref: "Cambridge English, руководство A2 Key, с. 52, перечень Tenses — имя времени",
      section:
        "«Present continuous: present actions and future meaning». Имя называется ученику " +
        "один раз, в уроке 1.",
    },
    {
      ref: "English Grammar Profile, PRESENT / present continuous и VERBS / types — пункты egp",
      section:
        "A1 FORM: AFFIRMATIVE («I am writing to tell you what I do every day at college.»), " +
        "A1 USE: EVENTS IN PROGRESS (Lexical Range 1), A1 FORM: AUXILIARY VERB BE («I'm " +
        "working today.»). Поиск по всему файлу, 1222 записи (замысел, 2.1).",
    },
    {
      ref: "Правила написания формы на -ing (урок 3) — решение преподавателя",
      section:
        "Опоры в materials/ нет: EGP удвоение даёт только у степеней сравнения, A2 Key и Young " +
        "Learners правил не перечисляют. Владелец 17 сентября 2026: «Оставить». Правило " +
        "говорит о названных глаголах, без «всегда».",
    },
  ],

  outcomes: [
    "говорить о себе, что делаешь сейчас: I am reading",
    "говорить, что сейчас делает другой человек или несколько людей: is и are с глаголом на -ing",
    "писать форму на -ing у глаголов, где написание меняется",
    "различать строку о том, что бывает каждый день, и строку о том, что идёт сейчас",
    "говорить, что надето на человеке: is wearing и название одежды",
    "говорить, что человек сейчас этого не делает: isn't и aren't с глаголом на -ing",
    "спрашивать, делает ли человек это сейчас, и коротко отвечать",
    "спрашивать, что человек делает сейчас, и отвечать на такой вопрос",
    "находить в сообщении, кто что делает сейчас",
    "понимать на слух, что сейчас делает человек",
    "строить строки о том, кто что делает на картинке",
  ],

  lessons: [
    {
      /*
       * УРОК 1. Замысел, 7.1 с правками 14.2 (случай 4 — место now; врезка 8 —
       * мост к модулю 13 по 14.1; З2 walk → walking).
       *
       * НАЧАЛО — РУССКАЯ ФРАЗА: «я читаю» по-русски и о каждом вечере, и об этой
       * минуте.
       *
       * РЕЗЕРВ СТРОК УРОКА 1 (в материал не идут): `I am drinking juice.` —
       * верный вариант З1; `walking` — ответ З2; `I am eating lunch now.` — ответ
       * З3; `I am learning English now.` — ответ З4. ВНИМАНИЕ РЕДАКТОРУ: случай 7
       * печатает `I am learning English.` — без now; ответ З4 с now. Замысел этого
       * совпадения не называет — ВОПРОС МЕТОДИСТУ (журнал сборки).
       */
      slug: "ya-chitayu",
      title: "Я читаю: I am reading",
      estimatedMinutes: 12,
      outcome: "говорить о себе, что делаешь сейчас: I am reading",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается РУССКОЙ ФРАЗОЙ. По-русски «я читаю» говорит и " +
        "о каждом вечере, и об этой минуте. По-английски для этой минуты есть своя строка.",

      blocks: [
        {
          /*
           * СЦЕНА. Одна реплика, голос Кима — мужской (закреплён модулями 1–16).
           * Одна строка, одна запись: замысел даёт её одной репликой.
           */
          id: "scena-kim-doma",
          kind: "example",
          znak: "1f4de",
          pervyyGolos: "muzhskoy",
          caption: "ПИШЕТ РЕДАКТОР: подпись сцены — Ким пишет Дане, где он и что делает.",
          text: "Hi, Dana! I am at home. I am reading.",
          perevod: {
            "Hi, Dana! I am at home. I am reading.": "ПИШЕТ РЕДАКТОР: перевод строки сцены.",
          },
          zvuchat: ["Hi, Dana! I am at home. I am reading."],
          explain:
            "ПИШЕТ РЕДАКТОР: разбор сцены — вторая строка говорит, где Ким, третья — что он " +
            "делает сейчас.",
        },
        {
          /* СЛУЧАЙ 1. Сейчас читаю. */
          id: "sluchay-seychas-chitayu",
          kind: "explain",
          znak: "1f4d6",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Сейчас читаю».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В строке стоят I, am и глагол с окончанием " +
              "-ing, и она говорит, что человек делает это сейчас.",
            "I am reading. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I am sleeping. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am reading.", "I am sleeping."],
        },
        {
          /*
           * СЛУЧАЙ 2. Три части строки. ЗДЕСЬ И ТОЛЬКО ЗДЕСЬ называется имя
           * времени: «Это время называется Present Continuous.»
           */
          id: "sluchay-tri-chasti-stroki",
          kind: "explain",
          znak: "1f9e9",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Три части строки».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. I, форма be, глагол с -ing. Здесь одной " +
              "строкой называется имя: «Это время называется Present Continuous.»",
            "I am eating. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I am drinking tea. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am eating.", "I am drinking tea."],
        },
        {
          /* СЛУЧАЙ 3. Короткая запись — как в модуле 2. */
          id: "sluchay-korotkaya-zapis-im",
          kind: "explain",
          znak: "2702",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Короткая запись».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. I am пишут и коротко, как в модуле 2.",
            "I'm working. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I'm playing. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I'm working.", "I'm playing."],
        },
        {
          /*
           * СЛУЧАЙ 4. Слово now. ПРАВКА 14.2 (Н4): «в этих строках стоит в конце,
           * урок 4 покажет и в начале» — без «только».
           */
          id: "sluchay-slovo-now",
          kind: "explain",
          znak: "23f1",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Слово now».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. now значит «сейчас»; в этих строках оно " +
              "стоит в конце, а урок 4 покажет его и в начале.",
            "I am reading now. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I'm eating now. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am reading now.", "I'm eating now."],
        },
        {
          /* СЛУЧАЙ 5. Где я и что делаю — мост к модулю 3. */
          id: "sluchay-gde-ya-i-chto-delayu",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Где я и что делаю».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Модуль 3 учил говорить, где человек сейчас; " +
              "вторая строка говорит, что он там делает.",
            "I am in the kitchen. I am cooking. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I am at work. I am working. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am in the kitchen. I am cooking.", "I am at work. I am working."],
        },
        {
          /*
           * СЛУЧАЙ 6. Кто я и что я делаю сейчас. `cook` — карточка модуля 6
           * «повар»; обе стороны стоят рядом нарочно.
           */
          id: "sluchay-kto-ya-i-chto-delayu",
          kind: "explain",
          znak: "1f9d1-200d-1f373",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Кто я и что я делаю сейчас».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Строка с названием говорит, кто человек " +
              "(модуль 13); строка с -ing — что он делает сейчас.",
            "I am a student. I am studying. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I am a cook. I am cooking. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am a student. I am studying.", "I am a cook. I am cooking."],
        },
        {
          /* СЛУЧАЙ 7. Другие глаголы — та же форма. */
          id: "sluchay-drugie-glagoly",
          kind: "explain",
          znak: "26bd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Другие глаголы — та же форма».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Любой глагол модуля 13 получает -ing так же.",
            "I am learning English. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I am playing football. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am learning English.", "I am playing football."],
        },
        {
          /*
           * СЛУЧАЙ 8. ВРЕЗКА — ГЛАВНОЕ МЕСТО МОДУЛЯ. Мост к модулю 13 по 14.1.
           *
           * ФОРМУЛИРОВКА ПРОВЕРЕНА ПРОТИВ ЗАПРЕТА (замысел, 7.1): нельзя «после am
           * глагол всегда с -ing» — `I am a cook` и `I am at work` верны без
           * глагола. Врезка говорит о строке С ГЛАГОЛОМ.
           *
           * СТРОКИ «ТАК НЕЛЬЗЯ» ЗВУКА НЕ ПОЛУЧАЮТ: звучит только верная.
           */
          id: "vrezka-v-module-13-bylo-i-am-drink",
          kind: "note",
          tone: "mistake",
          znak: "26a0",
          text:
            "ПИШЕТ РЕДАКТОР: врезка «В модуле 13 было I am drink». Мост к модулю «Что я делаю " +
            "каждый день»: там строка о том, что делаешь обычно, обходилась одним глаголом, и " +
            "строка с am и глаголом без изменений была ошибкой. Строка о том, что делаешь " +
            "сейчас, стоит на форме be и глаголе с окончанием -ing: если после am стоит глагол, у " +
            "него окончание -ing. Вторая ошибка — потерять am. Так нельзя: I am drink tea. и I " +
            "drinking tea. Верно: I am drinking tea.",
          zvuchat: ["I am drinking tea."],
        },
        {
          id: "slova-uroka-1",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "now",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки; правило случая 4 у методиста — «сейчас».",
              example: "I am reading now.",
              hint: "/naʊ/",
            },
          ],
        },
        {
          /* З1. УЗНАТЬ. Обе неверные — ошибки, названные врезкой 8. `juice` — модуль 8. */
          id: "z1-vybrat-p-yu-sok",
          kind: "choice",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — Ким пишет, что он сейчас пьёт сок. Отметь строку без ошибки.",
          options: [
            { text: "I am drink juice." },
            { text: "I am drinking juice.", correct: true },
            { text: "I drinking juice." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1 урока 1 — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет верную строку и две ошибки врезки: глагол без -ing и " +
            "потерянное am.",
        },
        {
          /*
           * З2. ПРОИЗВЕСТИ. ПРАВКА 14.2 (Н6): глагол walk, форма в уроке не
           * напечатана; do «делать» отложено до урока 8.
           */
          id: "z2-vpisat-walking",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие — впиши глагол walk в нужной форме.",
          before: "I am ",
          after: " in the park now.",
          answer: "walking",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2 урока 1 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку целиком: I am walking in the park now.",
        },
        {
          /* З3. ПРОИЗВЕСТИ. Сборка; порядок оговорён условием: now в конце. */
          id: "z3-sobrat-ya-obedayu",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие — собери «Я сейчас обедаю», now в конце.",
          items: ["lunch", "now.", "I am", "eating"],
          answer: [2, 3, 0, 1],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3 урока 1 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет собранную строку I am eating lunch now. и её части.",
        },
        {
          /*
           * З4. ПРОИЗВЕСТИ. «учу» годится на оба глагола модуля 13 — learn и study
           * приняты оба.
           */
          id: "z4-zapisat-uchu-angliyskiy",
          kind: "short",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — запиши по-английски «Я сейчас учу английский», now в конце.",
          answer: "I am learning English now.",
          accept: [
            "I'm learning English now.",
            "I am studying English now.",
            "I'm studying English now.",
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4 урока 1 — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет строку I am learning English now. и говорит, что " +
            "study тоже верно.",
        },
        {
          /* З5. О СЕБЕ. Один голос: не разговор. */
          id: "z5-skazat-gde-ty-i-chto-delaesh",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие — скажи, где ты сейчас и что делаешь.",
          phrase: "I am at home. I am learning English.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З5 урока 1 — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет образец и формулу самопроверки уговора 8.1 (редакция " +
            "13 сентября 2026).",
        },
      ],
    },

    {
      /*
       * УРОК 2. Замысел, 7.2 с правками 14.2 (случай 4 — `They are drinking tea.`
       * вместо формы с пропавшей e; случай 6 — `it` о собаке и кошке, мост к
       * модулю 7; З2 — сборка вместо вставки).
       *
       * НАЧАЛО — СЦЕНА: Алим пишет другу, что происходит у него дома.
       *
       * СЛУЧАЙ 7 БЕЗ ГЛАГОЛОВ, МЕНЯЮЩИХ НАПИСАНИЕ: форму с удвоением разбирает
       * только урок 3.
       *
       * РЕЗЕРВ СТРОК УРОКА 2: `Aigerim and Nurlan are drinking tea.` — ответ З2;
       * `My sisters are sleeping.` — верный вариант З3; `My mother is drinking
       * coffee now.` — ответ З4.
       */
      slug: "ona-gotovit",
      title: "Она готовит: she is cooking, they are playing",
      estimatedMinutes: 12,
      outcome:
        "говорить, что сейчас делает другой человек или несколько людей: is и are с глаголом на -ing",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Алим пишет другу, что происходит у него " +
        "дома.",

      blocks: [
        {
          /* СЦЕНА. Одна реплика, голос Алима — мужской. */
          id: "scena-alim-pishet-o-dome",
          kind: "example",
          znak: "1f3e0",
          pervyyGolos: "muzhskoy",
          caption: "ПИШЕТ РЕДАКТОР: подпись сцены — Алим пишет другу, что происходит у него дома.",
          text: "My wife is cooking. My son is sleeping. My parents are walking in the park.",
          perevod: {
            "My wife is cooking. My son is sleeping. My parents are walking in the park.":
              "ПИШЕТ РЕДАКТОР: перевод строки сцены.",
          },
          zvuchat: ["My wife is cooking. My son is sleeping. My parents are walking in the park."],
          explain:
            "ПИШЕТ РЕДАКТОР: разбор сцены — о жене и сыне стоит is, о родителях are, и у каждого " +
            "глагола окончание -ing.",
        },
        {
          /*
           * ТАБЛИЦА СРАЗУ ПОСЛЕ ВСТУПЛЕНИЯ (правило «формы таблицей»). Строка про
           * `it` — со своим глаголом: о собаке «читает» не скажешь.
           */
          id: "tablica-kto-i-forma-be",
          kind: "table",
          znak: "1f4c3",
          caption: "ПИШЕТ РЕДАКТОР: подпись таблицы — форма be у каждого лица и глагол с -ing.",
          head: ["Строка", "Перевод"],
          rows: [
            ["I am reading", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["you are reading", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["he is reading", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["she is reading", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["it is sleeping", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["we are reading", "ПИШЕТ РЕДАКТОР: перевод строки."],
            ["they are reading", "ПИШЕТ РЕДАКТОР: перевод строки."],
          ],
          zvuchat: [
            "I am reading",
            "you are reading",
            "he is reading",
            "she is reading",
            "it is sleeping",
            "we are reading",
            "they are reading",
          ],
        },
        {
          /* СЛУЧАЙ 1. Он: he is. `He is talking.` — образец Movers, с. 50. */
          id: "sluchay-on-he-is",
          kind: "explain",
          znak: "1f468",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Он: he is».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. О нём — is и глагол с -ing.",
            "He is sleeping. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "He is talking. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["He is sleeping.", "He is talking."],
        },
        {
          /* СЛУЧАЙ 2. Она: she is. */
          id: "sluchay-ona-she-is",
          kind: "explain",
          znak: "1f469",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Она: she is».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. О ней — тоже is.",
            "She is cooking. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "She is drinking coffee. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["She is cooking.", "She is drinking coffee."],
        },
        {
          /*
           * СЛУЧАЙ 3. Имя вместо he и she — отдельной строкой, по правилу
           * «таблица не закрывает имя».
           */
          id: "sluchay-imya-vmesto-he-she",
          kind: "explain",
          znak: "1f464",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Имя вместо he и she».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Имя или «мой брат» встаёт на место he или " +
              "she, форма остаётся is.",
            "Dana is reading. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "My brother is playing football. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Dana is reading.", "My brother is playing football."],
        },
        {
          /*
           * СЛУЧАЙ 4. Мы и они: are. ПРАВКА 14.2 (Н5): второй пример
           * `They are drinking tea.` вместо формы с пропавшей e.
           */
          id: "sluchay-my-i-oni-are",
          kind: "explain",
          znak: "1f46a",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Мы и они: are».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. О нескольких людях — are.",
            "We are cleaning the kitchen. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "They are drinking tea. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["We are cleaning the kitchen.", "They are drinking tea."],
        },
        {
          /* СЛУЧАЙ 5. Два имени — are. */
          id: "sluchay-dva-imeni-are",
          kind: "explain",
          znak: "1f46b",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Два имени — are».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Два человека через and — это «они», и форма are.",
            "Dana and Kim are eating. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "My parents are working. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Dana and Kim are eating.", "My parents are working."],
        },
        {
          /*
           * СЛУЧАЙ 6. Собака и кошка: it is. ПРАВКА 14.2 (Н17). Модуль 7 давал `it`
           * о вещи и переводил «это»; здесь `it` второй строкой после названия
           * животного — «оно». Утверждения «о животном всегда it» НЕТ.
           */
          id: "sluchay-sobaka-i-koshka-it-is",
          kind: "explain",
          znak: "1f415",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Собака и кошка: it is».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В этих строках it — «оно» о собаке или " +
              "кошке; модуль 7 давал it о вещи.",
            "The dog is in the garden. It is playing. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "The cat is in the kitchen. It is eating. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: [
            "The dog is in the garden. It is playing.",
            "The cat is in the kitchen. It is eating.",
          ],
        },
        {
          /* СЛУЧАЙ 7. Ты: you are — как в модуле 2. */
          id: "sluchay-ty-you-are",
          kind: "explain",
          znak: "1f449",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Ты: you are».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. О собеседнике — are, как в модуле 2.",
            "You are reading my book! — ПИШЕТ РЕДАКТОР: перевод строки.",
            "You are eating my lunch! — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["You are reading my book!", "You are eating my lunch!"],
        },
        {
          /* СЛУЧАЙ 8. Короткая запись. */
          id: "sluchay-korotkaya-zapis-shes-theyre",
          kind: "explain",
          znak: "2702",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Короткая запись».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. he is, she is, they are тоже пишут коротко.",
            "She's cooking. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "They're playing. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["She's cooking.", "They're playing."],
        },
        {
          /*
           * СЛОВАРЬ УРОКА 2. Примеры карточек — строки случаев этого урока
           * (журнал сборки, решение 5): замысел примеров не назвал.
           */
          id: "slova-uroka-2",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "talk",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки.",
              example: "He is talking.",
              hint: "/tɔːk/",
              znak: "1f5e3",
            },
            {
              term: "clean",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки.",
              example: "We are cleaning the kitchen.",
              hint: "/kliːn/",
              znak: "1f9f9",
            },
            {
              term: "dog",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки; у методиста в столбце значка — «собака».",
              example: "The dog is in the garden. It is playing.",
              hint: "/dɒg/",
              znak: "1f415",
            },
          ],
        },
        {
          /* З1. УЗНАТЬ. Одно решение. */
          id: "z1-soedinit-kto-i-forma-be",
          kind: "match",
          prompt: "ПИШЕТ РЕДАКТОР: условие — соедини местоимение с формой be.",
          left: ["I", "she", "they"],
          right: ["are", "am", "is"],
          answer: [1, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1 урока 2 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три пары: I am, she is, they are.",
        },
        {
          /*
           * З2. ПРОИЗВЕСТИ. ПРАВКА 14.2 (Н12): сборка вместо вставки; вставку
           * формы be при двух именах спрашивает вопрос 8 работы. Порядок один.
           */
          id: "z2-sobrat-aygerim-i-nurlan-pyut-chay",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие — собери строку «Айгерим и Нурлан пьют чай».",
          items: ["tea.", "are", "drinking", "Aigerim and Nurlan"],
          answer: [3, 1, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2 урока 2 — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет строку Aigerim and Nurlan are drinking tea. и почему " +
            "здесь are.",
        },
        {
          /* З3. УЗНАТЬ. Неверные: форма об одном; нет формы be. */
          id: "z3-vybrat-o-sestrah",
          kind: "choice",
          prompt: "ПИШЕТ РЕДАКТОР: условие — отметь строку без ошибки.",
          options: [
            { text: "My sisters is sleeping." },
            { text: "My sisters sleeping." },
            { text: "My sisters are sleeping.", correct: true },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3 урока 2 — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет верную строку; в первой форма об одном, во второй нет " +
            "формы be.",
        },
        {
          /* З4. ПРОИЗВЕСТИ. `mum` — карточка модуля 6. */
          id: "z4-zapisat-mama-pyot-kofe",
          kind: "short",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — запиши по-английски «Мама сейчас пьёт кофе», now в конце.",
          answer: "My mother is drinking coffee now.",
          accept: [
            "My mum is drinking coffee now.",
            "Mum is drinking coffee now.",
            "My mother's drinking coffee now.",
            "My mum's drinking coffee now.",
            "Mum's drinking coffee now.",
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4 урока 2 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку My mother is drinking coffee now. и почему is.",
        },
        {
          /* З5. О СВОИХ. Один голос: не разговор. */
          id: "z5-skazat-o-dvuh-rodnyh",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие — скажи, что сейчас делают двое твоих родных.",
          phrase: "My brother is working. My sister is sleeping.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З5 урока 2 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет образец и формулу самопроверки уговора 8.1.",
        },
      ],
    },

    {
      /*
       * УРОК 3. Замысел, 7.3 в редакции 14.4 (Н5): у каждого вида ОДНА
       * напечатанная пара и список глаголов «так же», чьи формы не печатаются
       * нигде в модуле. Правило о названных глаголах — решение владельца от
       * 17 сентября 2026: «Оставить». Без «всегда» и «только».
       *
       * ФОРМЫ `dancing`, `driving`, `riding`, `sitting`, `running` В УРОКЕ 3 НЕ
       * НАПЕЧАТАНЫ. `riding` и `running` не напечатаны нигде в модуле.
       *
       * НАЧАЛО — СЦЕНА: Айгерим пишет подруге; голос женский (по умолчанию).
       */
      slug: "kak-pishetsya-ing",
      title: "Как пишется: writing, swimming",
      estimatedMinutes: 11,
      outcome: "писать форму на -ing у глаголов, где написание меняется",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Айгерим пишет подруге и замечает, что в " +
        "writing пропала буква, а в swimming появилась лишняя.",

      blocks: [
        {
          id: "scena-aygerim-pishet-podruge",
          kind: "example",
          znak: "270d",
          caption: "ПИШЕТ РЕДАКТОР: подпись сцены — Айгерим пишет подруге.",
          text: "I am writing to you. My brother is swimming.",
          perevod: {
            "I am writing to you. My brother is swimming.": "ПИШЕТ РЕДАКТОР: перевод строки сцены.",
          },
          zvuchat: ["I am writing to you. My brother is swimming."],
          explain:
            "ПИШЕТ РЕДАКТОР: разбор сцены — в writing пропала буква e, а в swimming буква m стоит " +
            "дважды.",
        },
        {
          /*
           * СЛУЧАЙ 1. Просто прибавляем -ing. Строки-пары со своим тире перевода
           * не получают (оговорка 2 к правилу перевода).
           */
          id: "sluchay-prosto-pribavlyaem-ing",
          kind: "explain",
          znak: "2795",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Просто прибавляем -ing».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. У read и play окончание встаёт без перемен; " +
              "так же у eat, drink, walk, sleep.",
            "read — reading",
            "play — playing",
          ],
          zvuchat: ["read — reading", "play — playing"],
        },
        {
          /* СЛУЧАЙ 2. Буква e пропадает. Список «так же»: dance, drive, ride. */
          id: "sluchay-bukva-e-propadaet",
          kind: "explain",
          znak: "2796",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Буква e пропадает».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. У write на конце e, и перед -ing её не " +
              "пишут; так же у dance, drive и ride.",
            "write — writing",
            "She is writing an email. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["write — writing", "She is writing an email."],
        },
        {
          /* СЛУЧАЙ 3. Последняя буква дважды. Список «так же»: sit, run. */
          id: "sluchay-poslednyaya-bukva-dvazhdy",
          kind: "explain",
          znak: "270c",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Последняя буква дважды».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. У swim последняя буква пишется два раза; так " +
              "же у sit и run.",
            "swim — swimming",
            "We are swimming. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["swim — swimming", "We are swimming."],
        },
        {
          /* СЛУЧАЙ 4. study и studies — мост к модулю 13. */
          id: "sluchay-study-i-studies",
          kind: "explain",
          znak: "1f4da",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «study и studies».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Модуль 13 писал she studies; с -ing буква y " +
              "остаётся.",
            "She studies. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "She is studying. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["She studies.", "She is studying."],
        },
        {
          /* СЛУЧАЙ 5. get up — меняется первое слово. */
          id: "sluchay-get-up",
          kind: "explain",
          znak: "23f0",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «get up».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Меняется первое слово, второе остаётся.",
            "get up — getting up",
            "I am getting up. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["get up — getting up", "I am getting up."],
        },
        {
          /*
           * СЛУЧАЙ 6. ВРЕЗКА: как не пишут. Две настоящие ошибки на напечатанных
           * словах урока. Строки-ошибки звука не получают; верные — звучат.
           */
          id: "vrezka-kak-ne-pishut",
          kind: "note",
          tone: "mistake",
          znak: "26a0",
          text:
            "ПИШЕТ РЕДАКТОР: врезка «Как не пишут». Две настоящие ошибки на напечатанных словах " +
            "урока. Так нельзя: writeing, swiming. Верно: writing, swimming.",
          zvuchat: ["writing", "swimming"],
        },
        {
          /*
           * СЛОВАРЬ УРОКА 3. `bike` перенесён сюда из урока 9: пример карточки
           * `ride` (назван методистом) — `I ride a bike.`, и карточка `bike` не
           * должна прийти позже (журнал сборки).
           */
          id: "slova-uroka-3",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "sit",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки.",
              example:
                "ПИШЕТ РЕДАКТОР: ВОПРОС МЕТОДИСТУ — пример карточки sit замысел не назвал; в нём " +
                "нельзя форму sitting (ответ З4 урока 3).",
              hint: "/sɪt/",
              znak: "1fa91",
            },
            {
              term: "run",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки.",
              example: "I run in the park.",
              hint: "/rʌn/",
              znak: "1f3c3",
            },
            {
              term: "ride",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки.",
              example: "I ride a bike.",
              hint: "/raɪd/",
              znak: "1f6b4",
            },
            {
              term: "bike",
              translation: "ПИШЕТ РЕДАКТОР: перевод карточки.",
              example:
                "ПИШЕТ РЕДАКТОР: ВОПРОС МЕТОДИСТУ — пример карточки bike замысел не назвал; " +
                "строка текста урока 9 с bike служит ответом З1 урока 9, а riding в модуле не " +
                "печатается.",
              hint: "/baɪk/",
              znak: "1f6b2",
            },
          ],
        },
        {
          /*
           * З1. ПРОИЗВЕСТИ ПАРУ. `dancing` и `drinking` урок 3 не печатает;
           * `playing` — опорная пара случая 1.
           */
          id: "z1-soedinit-glagol-i-formu",
          kind: "match",
          prompt: "ПИШЕТ РЕДАКТОР: условие — соедини глагол с его формой на -ing.",
          left: ["dance", "drink", "play"],
          right: ["playing", "dancing", "drinking"],
          answer: [1, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1 урока 3 — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет пары и говорит, у какого глагола пропала e по случаю 2.",
        },
        {
          /* З2. ПРОИЗВЕСТИ. drive — из списка случая 2. */
          id: "z2-vpisat-driving",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие — впиши глагол drive в нужной форме.",
          before: "My father is ",
          after: " a bus.",
          answer: "driving",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2 урока 3 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку My father is driving a bus. и правило случая 2.",
        },
        {
          /* З3. УЗНАТЬ. Неверные — перенос правила -ies модуля 13. */
          id: "z3-vybrat-studying",
          kind: "choice",
          prompt: "ПИШЕТ РЕДАКТОР: условие — отметь, как пишется study с окончанием -ing.",
          options: [
            { text: "studying", correct: true },
            { text: "studiing" },
            { text: "studing" },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3 урока 3 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет studying и говорит, что буква y остаётся (случай 4).",
        },
        {
          /* З4. ПРОИЗВЕСТИ. sit — из списка случая 3; спрашивает только З4. */
          id: "z4-zapisat-sitting",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие — напиши форму на -ing у глагола sit.",
          answer: "sitting",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4 урока 3 — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет sitting и правило случая 3.",
        },
      ],
    },

    // @@DALSHE@@
  ],

  quiz: { questions: [] }, // @@RABOTA@@
};

export default modul;
