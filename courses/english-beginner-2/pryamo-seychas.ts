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
       * УРОК 1. СТРОЕНИЕ ПЕРЕДЕЛАНО ПО РЕШЕНИЯМ 17 И 18 ЗАМЫСЛА (18 сентября
       * 2026) — они главнее разделов 7.1 и 16. Разбор второго редактора —
       * `docs/beginner-2/priyomka-uroka-1-modul-17.md`, семнадцать находок.
       *
       * НАЧАЛО — РУССКАЯ ФРАЗА: «я читаю» по-русски и о каждом вечере, и об этой
       * минуте.
       *
       * ЭКРАНОВ СТАЛО СЕМЬ: сцена, пять случаев и врезка (18.2). Прежний случай
       * «Три части строки» снят: он говорил то же, что случай 1, а имя времени
       * `Present Continuous` переехало в случай 1 отдельной строкой.
       *
       * ПРЕЖНИЕ СЛУЧАИ «Где я и что делаю» и «Кто я и что я делаю сейчас» СЛИТЫ
       * В ОДИН (18.3): обе половины ученик знает, новое только соседство двух
       * строк. Две пары примеров на одном экране.
       *
       * СТРОКА `I am studying at a college.` СНЯТА (17.1): она дословно повторяет
       * пример графы English Grammar Profile A2 `USE: TEMPORARY SITUATIONS` —
       * это другое дело, временное положение, а не эта минута. Вместо неё
       * `I am singing.` (`sing` — карточка модуля «Я не делаю», написание формы
       * не меняется, ответом заданий строка не служит).
       *
       * ВРЕЗКА СУДИТ ЗАПИСЬ, А НЕ ЯЗЫК (18.4). Формула «глагол без изменений
       * после am не ставят» ЛОЖНА как утверждение о языке: `I am read books.` —
       * законный страдательный залог (`docs/istochniki-norma-yazyka.md`, раздел
       * 41). Врезка говорит о СВОЁМ случае («когда говорим, что делаем сейчас»)
       * и судит одну напечатанную строку, у которой нет верного чтения.
       *
       * ВРЕЗКА И З1 РАЗВЕДЕНЫ ПО ОШИБКЕ И ПО ДЕЙСТВИЮ (18.1): врезка называет
       * пропавшее окончание, З1 берёт вторую ошибку — потерянное am — и меняет
       * вид на `short`, «исправить чужую запись».
       *
       * РЕЗЕРВ СТРОК УРОКА 1 (в материал не идут): `I am drinking juice.` —
       * ответ З1; `walking` — ответ З2; `I am eating lunch now.` — ответ З3;
       * `I am learning English now.` — ответ З4.
       */
      slug: "ya-chitayu",
      title: "Я читаю: I am reading",
      estimatedMinutes: 12,
      outcome: "говорить о себе, что делаешь сейчас: I am reading",

      vstuplenie:
        "По-русски мы говорим «я читаю» и о каждом вечере, и о том, что идёт прямо сейчас. " +
        "По-английски у этих двух случаев разные строки. Здесь мы разберём строку о том, что " +
        "человек делает в эту минуту.",

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
          caption: "Ким пишет Дане, где он сейчас и что делает",
          text: "Hi, Dana! I am at home. I am reading.",
          perevod: {
            "Hi, Dana! I am at home. I am reading.": "Привет, Дана! Я дома. Я читаю.",
          },
          zvuchat: ["Hi, Dana! I am at home. I am reading."],
          /*
           * РАЗБОР СЦЕНЫ ГОВОРИТ О СМЫСЛЕ, А НЕ О ЧАСТЯХ СТРОКИ (18.2): правило
           * даётся один раз и только в случае 1. Прежний разбор перечислял I, am
           * и окончание — то же самое, что говорит случай 1.
           */
          explain:
            "Ким пишет Дане о том, что идёт у него прямо сейчас. Он говорит не о каждом " +
            "вечере, а об этой самой минуте.",
        },
        {
          /*
           * СЛУЧАЙ 1. Правило даётся ОДИН РАЗ и с русской параллелью (18.3,
           * находка 2). ЗДЕСЬ И ТОЛЬКО ЗДЕСЬ называется имя времени: «Это время
           * называется Present Continuous.» Прежний случай «Три части строки»
           * снят, имя переехало сюда.
           */
          id: "sluchay-seychas-chitayu",
          kind: "explain",
          znak: "1f4d6",
          text: [
            "Я читаю сейчас",
            "По-русски мы говорим «я читаю». По-английски то же самое собираем из трёх слов: " +
              "I, am и глагол с окончанием -ing. Такая строка говорит о том, что идёт прямо " +
              "сейчас.",
            "Это время называется Present Continuous.",
            "I am reading. — Я читаю.",
            "I am sleeping. — Я сплю.",
          ],
          zvuchat: ["I am reading.", "I am sleeping."],
        },
        {
          /* СЛУЧАЙ 3. Короткая запись — как в модуле 2. */
          id: "sluchay-korotkaya-zapis-im",
          kind: "explain",
          znak: "2702",
          text: [
            "Короткая запись I'm",
            "Вместо I am пишем короткую запись I'm. Эту запись мы брали в модуле " +
              "«Здравствуйте, меня зовут», и смысл строки от неё не меняется.",
            "I'm working. — Я работаю.",
            "I'm playing. — Я играю.",
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
            "Слово now значит «сейчас»",
            "Слово now ставим в строку тогда, когда надо прямо назвать эту минуту. В строках " +
              "ниже оно стоит в конце. А в уроке «Каждый день и сейчас: I work, I am working» " +
              "оно стоит и в начале.",
            "I am reading now. — Я сейчас читаю.",
            "I'm eating now. — Я сейчас ем.",
          ],
          zvuchat: ["I am reading now.", "I'm eating now."],
        },
        {
          /*
           * СЛУЧАЙ 4. ДВА ПРЕЖНИХ СЛУЧАЯ СЛИТЫ В ОДИН (18.3): «Где я и что делаю»
           * и «Кто я и что я делаю сейчас». Обе половины ученик знает, новое
           * только соседство двух строк — на него довольно одного экрана с двумя
           * парами примеров.
           *
           * АДРЕС СТРОКИ С НАЗВАНИЕМ ЗАНЯТИЯ — МОДУЛЬ «МОЯ СЕМЬЯ И ЗНАКОМЫЕ»
           * (18.5), а не модуль «Что я делаю каждый день»: разбирал её он.
           *
           * Пары `I am at work. I am working.` и `I am a cook. I am cooking.`
           * сняты вместе со слиянием — замысел называет две пары.
           */
          id: "sluchay-ryadom-vtoraya-stroka",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "Рядом ставим вторую строку",
            "Первая строка называет место или говорит, кто человек. Вторая строка говорит, " +
              "что он делает сейчас.",
            "Где человек сейчас, мы говорили в модуле «Откуда ты и где живёшь». Как назвать " +
              "его занятие, мы разбирали в модуле «Моя семья и знакомые».",
            "I am in the kitchen. I am cooking. — Я на кухне. Я готовлю.",
            "I am a student. I am studying. — Я студент. Я учусь.",
          ],
          zvuchat: ["I am in the kitchen. I am cooking.", "I am a student. I am studying."],
        },
        {
          /*
           * СЛУЧАЙ 5. Другие глаголы. СТРОКА `I am studying at a college.` СНЯТА
           * (17.1) — она дословно пример графы A2 о временном положении. Вместо
           * неё `I am singing.`
           *
           * ПЕРЕЧЕНЬ МОДУЛЕЙ В ПРАВИЛЕ СНЯТ (18.3): З2 того же урока просит форму
           * от `walk`, а это карточка модуля «Я не делаю», и перечень сразу же
           * врал бы. Вместо него — ОБЕЩАНИЕ С АДРЕСОМ про написание формы.
           */
          id: "sluchay-drugie-glagoly",
          kind: "explain",
          znak: "26bd",
          text: [
            "Другие глаголы",
            "В строку о том, что идёт сейчас, мы ставим и другие знакомые глаголы. К каждому " +
              "из них прибавляем окончание -ing.",
            "У некоторых глаголов при этом меняется написание, и о них урок «Как пишется: " +
              "writing, swimming».",
            "I am singing. — Я пою.",
            "I am playing football. — Я играю в футбол.",
          ],
          zvuchat: ["I am singing.", "I am playing football."],
        },
        {
          /*
           * СЛУЧАЙ 6. ВРЕЗКА — ГЛАВНОЕ МЕСТО МОДУЛЯ, ПЕРЕПИСАНА ПО 18.4.
           *
           * ЗАГОЛОВОК — «Окончание -ing после am»: `is` и `are` приходят уроком 2,
           * и заголовок не должен обещать больше тела (находка 12).
           *
           * ФОРМУЛА «глагол без изменений после am не ставят» СНЯТА как ложная о
           * языке: `I am read books.` — законный страдательный залог
           * (`docs/istochniki-norma-yazyka.md`, раздел 41). Врезка говорит о СВОЁМ
           * случае и судит одну НАПЕЧАТАННУЮ запись.
           *
           * СТРОКА `I drinking tea.` ИЗ ВРЕЗКИ УШЛА (18.1): вторую ошибку —
           * потерянное am — берёт З1.
           *
           * СТРОКИ «ТАК НЕЛЬЗЯ» ЗВУКА НЕ ПОЛУЧАЮТ: звучит только верная.
           */
          id: "vrezka-v-module-13-bylo-i-am-drink",
          kind: "note",
          tone: "mistake",
          znak: "26a0",
          text:
            "Окончание -ing после am\n\nКогда мы говорим, что делаем сейчас, после am ставим " +
            "глагол с окончанием -ing.\n\nВ записи I am drink tea. окончания нет, и так " +
            "по-английски не говорят. Верной будет строка I am drinking tea.",
          zvuchat: ["I am drinking tea."],
        },
        {
          id: "slova-uroka-1",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "now",
              translation: "сейчас",
              example: "I am reading now.",
              hint: "/naʊ/",
            },
          ],
        },
        {
          /*
           * З1. ВИД И ДЕЙСТВИЕ СМЕНЕНЫ ПО 18.1: было «отметь строку без ошибки»
           * (выбор из трёх строк, которые врезка только что назвала), стало
           * «исправить чужую запись». Врезка судит запись `I am drink tea.` —
           * задание берёт ВТОРУЮ ошибку, потерянное am.
           *
           * `I am drinking juice.` выше по уроку не печатается (врезка теперь на
           * `tea`); `juice` — карточка модуля «Один и много», `drink` — модуля
           * «Что я делаю каждый день».
           *
           * ЛЕСТНИЦА НЕ РУШИТСЯ: узнавание остаётся у З2, а «произвести» с первого
           * задания — ориентир владельца от 6 сентября это допускает.
           */
          id: "z1-ispravit-zapis-kima",
          kind: "short",
          prompt:
            "Ким хотел написать, что он сейчас пьёт сок, и записал: I drinking juice. Запиши " +
            "строку без ошибки.",
          answer: "I am drinking juice.",
          accept: ["I'm drinking juice."],
          hint: "В строке Кима не хватает одного слова, и оно стоит перед глаголом.",
          why:
            "Верной будет строка I am drinking juice. В записи Кима потерялось am, а мы " +
            "ставим его перед глаголом с окончанием -ing.",
        },
        {
          /*
           * З2. ПРОИЗВЕСТИ. ПРАВКА 14.2 (Н6): глагол walk, форма в уроке не
           * напечатана; do «делать» отложено до урока 8.
           */
          id: "z2-vpisat-walking",
          kind: "gap",
          prompt: "Ты сейчас гуляешь в парке. Впиши глагол walk в нужной форме.",
          before: "I am ",
          after: " in the park now.",
          answer: "walking",
          hint: "Строка говорит о том, что идёт прямо сейчас, и глагол в ней стоит с окончанием.",
          why:
            "Полностью строка выглядит так: I am walking in the park now. Перед глаголом " +
            "стоит am, а у глагола окончание -ing.",
        },
        {
          /* З3. ПРОИЗВЕСТИ. Сборка; порядок оговорён условием: now в конце. */
          id: "z3-sobrat-ya-obedayu",
          kind: "order",
          prompt: "Собери строку «я сейчас обедаю». Слово now поставь в конце.",
          items: ["lunch", "now.", "I am", "eating"],
          answer: [2, 3, 0, 1],
          hint: "Первым поставь I am, потом глагол с окончанием -ing, а потом слово о еде.",
          why:
            "Получается строка I am eating lunch now. Она говорит о том, что идёт прямо " +
            "сейчас, поэтому у глагола стоит окончание -ing, а слово now прямо называет эту " +
            "минуту.",
        },
        {
          /*
           * З4. ПРОИЗВЕСТИ. «учу» годится на оба глагола модуля 13 — learn и study
           * приняты оба.
           */
          id: "z4-zapisat-uchu-angliyskiy",
          kind: "short",
          prompt:
            "Запиши по-английски «я сейчас учу английский». Слово now поставь в конце.",
          answer: "I am learning English now.",
          accept: [
            "I'm learning English now.",
            "I am studying English now.",
            "I'm studying English now.",
          ],
          hint: "Начни с I am, а глагол поставь с окончанием -ing.",
          why:
            "Верной будет строка I am learning English now. Годится и строка I am studying " +
            "English now. По-английски «учу» можно сказать и словом learn, и словом study.",
        },
        {
          /* З5. О СЕБЕ. Один голос: не разговор. */
          id: "z5-skazat-gde-ty-i-chto-delaesh",
          kind: "speak",
          prompt:
            "Скажи вслух о себе две строки. В первой назови место, где ты сейчас, а во второй " +
            "скажи, что ты делаешь.",
          phrase: "I am at home. I am learning English.",
          translation: "Я дома. Я учу английский.",
          hint: "В первой строке после I am назови место, а во второй поставь глагол с окончанием -ing.",
          why:
            "I am at home. I am learning English. В первой строке после am названо место, а во " +
            "второй строке стоит глагол с окончанием -ing. Ответ на это задание не проверяется, " +
            "поэтому сверься с образцом. Послушай его и повтори следом за ним.",
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
        "Алим пишет другу о том, что у него дома делают прямо сейчас. По-русски мы говорим " +
        "«жена готовит», «сын спит», «родители гуляют». По-английски в таких строках вместо am " +
        "встают другие формы be. Здесь мы разберём is и are с глаголом на -ing.",

      blocks: [
        {
          /* СЦЕНА. Одна реплика, голос Алима — мужской. */
          id: "scena-alim-pishet-o-dome",
          kind: "example",
          znak: "1f3e0",
          pervyyGolos: "muzhskoy",
          caption: "Алим пишет другу, что у него дома делают прямо сейчас",
          text: "My wife is cooking. My son is sleeping. My parents are walking in the park.",
          perevod: {
            "My wife is cooking. My son is sleeping. My parents are walking in the park.":
              "Моя жена готовит. Мой сын спит. Мои родители гуляют в парке.",
          },
          zvuchat: ["My wife is cooking. My son is sleeping. My parents are walking in the park."],
          explain:
            "Алим называет трёх человек и о каждом говорит, что тот делает прямо сейчас. Так он " +
            "показывает другу свой вечер, а не рассказывает, как у них бывает обычно.",
        },
        {
          /*
           * ТАБЛИЦА СРАЗУ ПОСЛЕ ВСТУПЛЕНИЯ (правило «формы таблицей»). Строка про
           * `it` — со своим глаголом: о собаке «читает» не скажешь.
           */
          id: "tablica-kto-i-forma-be",
          kind: "table",
          znak: "1f4c3",
          caption: "У каждого своя форма be, а глагол в этих строках стоит с окончанием -ing",
          head: ["Строка", "Перевод"],
          rows: [
            ["I am reading", "Я читаю"],
            ["you are reading", "Ты читаешь"],
            ["he is reading", "Он читает"],
            ["she is reading", "Она читает"],
            ["it is sleeping", "Оно спит"],
            ["we are reading", "Мы читаем"],
            ["they are reading", "Они читают"],
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
            "Он: he is",
            "О нём говорим словом he. После него стоит форма is, а глагол остаётся с " +
              "окончанием -ing.",
            "He is sleeping. — Он спит.",
            "He is talking. — Он разговаривает.",
          ],
          zvuchat: ["He is sleeping.", "He is talking."],
        },
        {
          /* СЛУЧАЙ 2. Она: she is. */
          id: "sluchay-ona-she-is",
          kind: "explain",
          znak: "1f469",
          text: [
            "Она: she is",
            "О ней говорим словом she. После него стоит та же форма is, что и после he.",
            "She is cooking. — Она готовит.",
            "She is drinking coffee. — Она пьёт кофе.",
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
            "Имя вместо he и she",
            "На место he или she встаёт имя человека или слово о родном, например my brother. " +
              "Форма be от этого не меняется и остаётся is.",
            "Dana is reading. — Дана читает.",
            "My brother is playing football. — Мой брат играет в футбол.",
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
            "Мы и они: are",
            "Когда людей несколько, ставим форму are. Слово we говорит о себе вместе с кем-то, " +
              "а слово they говорит о других.",
            "We are cleaning the kitchen. — Мы убираем кухню.",
            "They are drinking tea. — Они пьют чай.",
          ],
          zvuchat: ["We are cleaning the kitchen.", "They are drinking tea."],
        },
        {
          /* СЛУЧАЙ 5. Два имени — are. */
          id: "sluchay-dva-imeni-are",
          kind: "explain",
          znak: "1f46b",
          text: [
            "Два имени: are",
            "Если людей двое и они названы через and, ставим форму are. Два имени вместе значат " +
              "то же, что they.",
            "Dana and Kim are eating. — Дана и Ким едят.",
            "My parents are working. — Мои родители работают.",
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
            "Собака и кошка: it is",
            "О собаке или кошке в этих строках говорим словом it. По-русски мы зовём их «она» и " +
              "«он», а по-английски здесь стоит одно слово it. В модуле «Что это такое» это же " +
              "слово стояло о вещи.",
            "The dog is in the garden. It is playing. — Собака в саду. Она играет.",
            "The cat is in the kitchen. It is eating. — Кошка на кухне. Она ест.",
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
            "Ты: you are",
            "О собеседнике говорим словом you. После него стоит форма are, как и в модуле " +
              "«Какой человек».",
            "You are reading my book! — Ты читаешь мою книгу!",
            "You are eating my lunch! — Ты ешь мой обед!",
          ],
          zvuchat: ["You are reading my book!", "You are eating my lunch!"],
        },
        {
          /* СЛУЧАЙ 8. Короткая запись. */
          id: "sluchay-korotkaya-zapis-shes-theyre",
          kind: "explain",
          znak: "2702",
          text: [
            "Короткая запись о нём, о ней и о них",
            "Коротко пишем не только I'm. Записи he's и she's мы разбирали в модуле " +
              "«Здравствуйте, меня зовут», а теперь так же коротко пишем и they are.",
            "She's cooking. — Она готовит.",
            "They're playing. — Они играют.",
          ],
          zvuchat: ["She's cooking.", "They're playing."],
        },
        {
          /*
           * СЛОВАРЬ УРОКА 2. Переводы всех четырнадцати карточек модуля
           * названы методистом (замысел, 16.1) и взяты дословно; скобок-толкований
           * нет ни у одной. Примеры здесь — строки случаев этого же урока.
           */
          id: "slova-uroka-2",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "talk",
              translation: "говорить, разговаривать",
              example: "He is talking.",
              hint: "/tɔːk/",
              znak: "1f5e3",
            },
            {
              term: "clean",
              translation: "убирать, чистить",
              example: "We are cleaning the kitchen.",
              hint: "/kliːn/",
              znak: "1f9f9",
            },
            {
              term: "dog",
              translation: "собака",
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
          prompt: "Соедини слово о том, кто делает, с формой be.",
          left: ["I", "she", "they"],
          right: ["are", "am", "is"],
          answer: [1, 2, 0],
          hint: "Начни с того слова, при котором стоит am.",
          why:
            "Верны три пары: I am, she is, they are. При I стоит am, при she стоит is, а при " +
            "they стоит are, потому что they говорит о нескольких людях.",
        },
        {
          /*
           * З2. ПРОИЗВЕСТИ. ПРАВКА 14.2 (Н12): сборка вместо вставки; вставку
           * формы be при двух именах спрашивает вопрос 8 работы. Порядок один.
           */
          id: "z2-sobrat-aygerim-i-nurlan-pyut-chay",
          kind: "order",
          prompt: "Собери строку «Айгерим и Нурлан пьют чай».",
          items: ["tea.", "are", "drinking", "Aigerim and Nurlan"],
          answer: [3, 1, 2, 0],
          hint: "Начни с имён, а форму be поставь сразу за ними.",
          why:
            "Получается строка Aigerim and Nurlan are drinking tea. Людей здесь двое, поэтому " +
            "стоит форма are.",
        },
        {
          /* З3. УЗНАТЬ. Неверные: форма об одном; нет формы be. */
          id: "z3-vybrat-o-sestrah",
          kind: "choice",
          prompt: "Твои сёстры сейчас спят. Отметь строку без ошибки.",
          options: [
            { text: "My sisters is sleeping." },
            { text: "My sisters sleeping." },
            { text: "My sisters are sleeping.", correct: true },
          ],
          hint: "Сестёр несколько, и форма be это показывает.",
          why:
            "Верна строка My sisters are sleeping. В записи My sisters is sleeping. форма is " +
            "говорит об одном человеке. В записи My sisters sleeping. формы be нет вовсе.",
        },
        {
          /* З4. ПРОИЗВЕСТИ. `mum` — карточка модуля 6. */
          id: "z4-zapisat-mama-pyot-kofe",
          kind: "short",
          prompt:
            "Запиши по-английски «мама сейчас пьёт кофе». Слово now поставь в конце.",
          answer: "My mother is drinking coffee now.",
          accept: [
            "My mum is drinking coffee now.",
            "Mum is drinking coffee now.",
            "My mother's drinking coffee now.",
            "My mum's drinking coffee now.",
            "Mum's drinking coffee now.",
          ],
          hint: "Мама одна, и форма be при ней своя.",
          why:
            "Верной будет строка My mother is drinking coffee now. Мама одна, поэтому стоит is, " +
            "а не are.",
        },
        {
          /* З5. О СВОИХ. Один голос: не разговор. */
          id: "z5-skazat-o-dvuh-rodnyh",
          kind: "speak",
          prompt:
            "Скажи вслух о двух своих родных. О каждом скажи, что он делает прямо сейчас.",
          phrase: "My brother is working. My sister is sleeping.",
          translation: "Мой брат работает. Моя сестра спит.",
          hint: "О каждом родном скажи отдельную строку и поставь в неё форму is.",
          why:
            "My brother is working. My sister is sleeping. В обеих строках речь об одном " +
            "человеке, поэтому стоит is. Ответ на это задание не проверяется, поэтому сверься с " +
            "образцом. Послушай его и повтори следом за ним.",
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
        "Айгерим пишет подруге: «я пишу тебе», «мой брат плавает». В её английских строках оба " +
        "глагола стоят с окончанием -ing, но написаны они по-разному. У одного перед окончанием " +
        "пропала буква, а у другого буква прибавилась. Здесь мы разберём, как пишется форма на " +
        "-ing у разных глаголов.",

      blocks: [
        {
          id: "scena-aygerim-pishet-podruge",
          kind: "example",
          znak: "270d",
          caption: "Айгерим пишет подруге о себе и о брате",
          text: "I am writing to you. My brother is swimming.",
          perevod: {
            "I am writing to you. My brother is swimming.": "Я пишу тебе. Мой брат плавает.",
          },
          zvuchat: ["I am writing to you. My brother is swimming."],
          explain:
            "Айгерим рассказывает подруге, чем занята она сама и чем занят её брат. Обе строки " +
            "говорят об этой самой минуте.",
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
            "Просто прибавляем -ing",
            "К глаголам read и play окончание прибавляем без всяких перемен. Так же пишем eat, " +
              "drink, walk и sleep.",
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
            "Буква e пропадает",
            "У глагола write на конце стоит e, и перед окончанием -ing её не пишем. Так же " +
              "поступаем с dance, drive и ride.",
            "write — writing",
            "She is writing an email. — Она пишет электронное письмо.",
          ],
          zvuchat: ["write — writing", "She is writing an email."],
        },
        {
          /* СЛУЧАЙ 3. Последняя буква дважды. Список «так же»: sit, run. */
          id: "sluchay-poslednyaya-bukva-dvazhdy",
          kind: "explain",
          znak: "270c",
          text: [
            "Последняя буква дважды",
            "У глагола swim последнюю букву перед окончанием пишем два раза. Так же пишем sit " +
              "и run.",
            "swim — swimming",
            "We are swimming. — Мы плаваем.",
          ],
          zvuchat: ["swim — swimming", "We are swimming."],
        },
        {
          /* СЛУЧАЙ 4. study и studies — мост к модулю 13. */
          id: "sluchay-study-i-studies",
          kind: "explain",
          znak: "1f4da",
          text: [
            "study и studies",
            "В модуле «Что я делаю каждый день» глагол study стоял как studies, и буква y там " +
              "сменилась на i. Перед окончанием -ing буква y остаётся на месте.",
            "She studies. — Она учится.",
            "She is studying. — Она учится.",
          ],
          zvuchat: ["She studies.", "She is studying."],
        },
        {
          /* СЛУЧАЙ 5. get up — меняется первое слово. */
          id: "sluchay-get-up",
          kind: "explain",
          znak: "23f0",
          text: [
            "Вставать: get up",
            "У get up окончание получает первое слово, а второе слово остаётся прежним.",
            "get up — getting up",
            "I am getting up. — Я встаю.",
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
            "Лишняя буква и пропавшая буква\n\nВ записи writeing осталась лишняя буква e, а мы " +
            "пишем writing. В записи swiming не хватает второй буквы m, а мы пишем swimming.",
          zvuchat: ["writing", "swimming"],
        },
        {
          /*
           * СЛОВАРЬ УРОКА 3. `bike` стоит здесь, а не в уроке 9 — РЕШЕНИЕ
           * МЕТОДИСТА 16.3: пример карточки `ride` — `I ride a bike.`, и слово не
           * может прийти позже строки, где работает. В замысле (8.2) оно стояло при
           * уроке 9 — ошибка замысла, исправленная там же.
           */
          id: "slova-uroka-3",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "sit",
              translation: "сидеть",
              example: "I sit at the table.",
              hint: "/sɪt/",
              znak: "1fa91",
            },
            {
              term: "run",
              translation: "бегать, бежать",
              example: "I run in the park.",
              hint: "/rʌn/",
              znak: "1f3c3",
            },
            {
              term: "ride",
              translation: "ездить, кататься",
              example: "I ride a bike.",
              hint: "/raɪd/",
              znak: "1f6b4",
            },
            {
              term: "bike",
              translation: "велосипед",
              example: "My bike is new.",
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
          prompt: "Соедини глагол с его формой на -ing.",
          left: ["dance", "drink", "play"],
          right: ["playing", "dancing", "drinking"],
          answer: [1, 2, 0],
          hint: "У одного из трёх глаголов перед окончанием пропадает буква.",
          why:
            "Верны пары dance — dancing, drink — drinking, play — playing. У глагола dance на " +
            "конце стоит e, и перед окончанием мы её не пишем.",
        },
        {
          /* З2. ПРОИЗВЕСТИ. drive — из списка случая 2. */
          id: "z2-vpisat-driving",
          kind: "gap",
          prompt: "Отец сейчас ведёт автобус. Впиши глагол drive в нужной форме.",
          before: "My father is ",
          after: " a bus.",
          answer: "driving",
          hint: "Посмотри, какая буква стоит у drive на конце.",
          why:
            "Получается строка My father is driving a bus. У глагола drive на конце e, и перед " +
            "окончанием -ing мы её не пишем.",
        },
        {
          /* З3. УЗНАТЬ. Неверные — перенос правила -ies модуля 13. */
          id: "z3-vybrat-studying",
          kind: "choice",
          prompt: "Отметь, как пишется глагол study с окончанием -ing.",
          options: [
            { text: "studying", correct: true },
            { text: "studiing" },
            { text: "studing" },
          ],
          hint: "В этом уроке глагол study уже стоял с окончанием -ing.",
          why:
            "Верно studying. Перед окончанием -ing буква y остаётся на месте. Записи studiing " +
            "и studing сделаны по образцу studies, а к окончанию -ing он не подходит.",
        },
        {
          /* З4. ПРОИЗВЕСТИ. sit — из списка случая 3; спрашивает только З4. */
          id: "z4-zapisat-sitting",
          kind: "short",
          prompt: "Напиши форму на -ing у глагола sit.",
          answer: "sitting",
          hint: "Глагол sit назван в уроке рядом со swim.",
          why:
            "Верно sitting. У глагола sit последнюю букву перед окончанием пишем два раза, как " +
            "и у swim.",
        },
      ],
    },

    {
      /*
       * УРОК 4. Замысел, 7.4 с правками 14.2 (Н4, Н15): случай 5
       * `He is eating now.`; случай 6 — «Now в начале строки»; З1 и З2 без слов
       * every day и now, выбор только по форме; З3 с расширенным `accept`.
       *
       * ЯДРО МОДУЛЯ: здесь встречаются модуль 13 и модуль 17.
       *
       * ПРОВЕРЕНО ПРОТИВ «СТРОКА МОЖЕТ БЫТЬ ВЕРНОЙ»: `I am working every day`
       * бывает верной (EGP A2, TEMPORARY SITUATIONS), поэтому во врезке 8 стоит
       * `I am work every day.` — строка без верного чтения. Владелец 8 сентября
       * 2026 принял `I am work` законным неверным вариантом.
       *
       * РЕЗЕРВ СТРОК УРОКА 4: `I walk to school.` — верный вариант З2;
       * `Aigerim swims every evening. Now she is swimming.` — ответ З3.
       */
      slug: "kazhdyy-den-i-seychas",
      title: "Каждый день и сейчас: I work, I am working",
      estimatedMinutes: 13,
      outcome:
        "различать строку о том, что бывает каждый день, и строку о том, что идёт сейчас",

      vstuplenie:
        "По-русски «я работаю в школе» и «не звони, я работаю» сказаны одним словом «работаю». " +
        "По-английски это две разные строки. Одна говорит о работе вообще, а другая говорит об " +
        "этой минуте. Здесь мы разберём, чем они различаются.",

      blocks: [
        {
          /*
           * ТАБЛИЦА ГЛАВНОГО ПРОТИВОПОСТАВЛЕНИЯ. Имена столбцов названы
           * методистом; `Present Simple` дан модулем 13 и здесь не объясняется.
           */
          id: "tablica-kazhdyy-den-i-seychas",
          kind: "table",
          znak: "1f4c3",
          caption: "Русская фраза одна, а английских строк две",
          head: ["Каждый день (Present Simple)", "Сейчас (Present Continuous)", "По-русски"],
          rows: [
            ["I work.", "I am working.", "я работаю"],
            ["She works.", "She is working.", "она работает"],
            ["They play.", "They are playing.", "они играют"],
          ],
          zvuchat: [
            "I work.",
            "I am working.",
            "She works.",
            "She is working.",
            "They play.",
            "They are playing.",
          ],
        },
        {
          /* СЛУЧАЙ 1. Одно «работаю» — две строки. */
          id: "sluchay-odno-rabotayu-dve-stroki",
          kind: "explain",
          znak: "2696",
          text: [
            "Одно «работаю», а строки две",
            "Первая строка говорит о работе вообще, а вторая строка говорит об этой самой " +
              "минуте.",
            "I work at a school. — Я работаю в школе.",
            "I am working now. — Я сейчас работаю.",
          ],
          zvuchat: ["I work at a school.", "I am working now."],
        },
        {
          /* СЛУЧАЙ 2. Каждый день и now. */
          id: "sluchay-every-day-i-now",
          kind: "explain",
          znak: "1f5d3",
          text: [
            "Каждый день и now",
            "Оборот every day стоит в строке о привычном деле, а слово now стоит в строке о " +
              "том, что идёт сейчас.",
            "I drink tea every day. — Я пью чай каждый день.",
            "I am drinking tea now. — Я сейчас пью чай.",
          ],
          zvuchat: ["I drink tea every day.", "I am drinking tea now."],
        },
        {
          /* СЛУЧАЙ 3. Об одном человеке: -s и is. */
          id: "sluchay-ob-odnom-s-i-is",
          kind: "explain",
          znak: "1f4d0",
          text: [
            "Об одном человеке: -s и is",
            "О привычном деле одного человека у глагола стоит окончание -s. О том, что он " +
              "делает сейчас, говорим формой is и глаголом с окончанием -ing.",
            "Dana reads every evening. — Дана читает каждый вечер.",
            "Dana is reading now. — Дана сейчас читает.",
          ],
          zvuchat: ["Dana reads every evening.", "Dana is reading now."],
        },
        {
          /* СЛУЧАЙ 4. Часть суток и сейчас. Оборот `in the morning` — модуль 13. */
          id: "sluchay-chast-sutok-i-seychas",
          kind: "explain",
          znak: "1f305",
          text: [
            "Часть суток и сейчас",
            "Оборот in the morning из модуля «Что я делаю каждый день» говорит о каждом утре. " +
              "А строка с окончанием -ing говорит об этой минуте.",
            "I eat breakfast in the morning. — Я завтракаю утром.",
            "I am eating breakfast now. — Я сейчас завтракаю.",
          ],
          zvuchat: ["I eat breakfast in the morning.", "I am eating breakfast now."],
        },
        {
          /* СЛУЧАЙ 5. Кто человек и что он делает сейчас. ПРАВКА 14.2. */
          id: "sluchay-rabota-voobshche-i-eta-minuta",
          kind: "explain",
          znak: "1f68c",
          text: [
            "Кто человек и что он делает сейчас",
            "Строка о работе вообще и строка об этой минуте стоят рядом. Первая говорит, кем " +
              "человек работает, а вторая говорит, что он делает прямо сейчас.",
            "My father drives a bus. — Мой отец водит автобус.",
            "He is eating now. — Он сейчас ест.",
          ],
          zvuchat: ["My father drives a bus.", "He is eating now."],
        },
        {
          /*
           * СЛУЧАЙ 6. Now в начале строки. ПРАВКА 14.2 (Н4). Опора — пример графы
           * EGP A2 NEGATION: «Now, I haven't got any money, but I am really
           * happy!»: пример показывает законность строки. Утверждение — «стоит и
           * в начале», без «только».
           */
          id: "sluchay-now-v-nachale-stroki",
          kind: "explain",
          znak: "1f51d",
          text: [
            "Now в начале строки",
            "Слово now стоит и в начале строки. В уроке «Я читаю: I am reading» оно стояло в " +
              "конце, и обе строки верны.",
            "Now I am driving. — Сейчас я веду машину.",
            "Now we are eating. — Сейчас мы едим.",
          ],
          zvuchat: ["Now I am driving.", "Now we are eating."],
        },
        {
          /* СЛУЧАЙ 7. Где сейчас и что делает — мост к модулю 3. */
          id: "sluchay-gde-seychas-i-chto-delaet",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "Где сейчас и что делает",
            "В модуле «Откуда ты и где живёшь» о месте говорили формой be без глагола. Строка с " +
              "окончанием -ing добавляет к месту и само действие.",
            "I am at work. — Я на работе.",
            "I am working. — Я работаю.",
          ],
          zvuchat: ["I am at work.", "I am working."],
        },
        {
          /*
           * СЛУЧАЙ 8. ВРЕЗКА: I am work every day. Настоящая ошибка — строка о
           * привычном деле со словом am.
           */
          id: "vrezka-i-am-work-every-day",
          kind: "note",
          tone: "mistake",
          znak: "26a0",
          text:
            "Строка о привычном деле\n\nО привычном деле говорим одним глаголом.\n\nВ записи " +
            "I am work every day. рядом стоят am и глагол без окончания, и так по-английски не " +
            "говорят. Верной будет строка I work every day.",
          zvuchat: ["I work every day."],
        },
        {
          /*
           * З1. УЗНАТЬ. ПРАВКА 14.2 (Н15): слов every day и now в строках нет,
           * вторую и третью разводит только форма.
           */
          id: "z1-soedinit-stroku-i-russkiy-smysl",
          kind: "match",
          prompt: "Соедини строку о Киме с её русским смыслом.",
          left: ["Kim is a teacher.", "Kim teaches at a school.", "Kim is teaching."],
          right: ["Ким сейчас ведёт урок", "Ким учитель", "Ким преподаёт в школе"],
          answer: [1, 2, 0],
          hint: "Различай строки по форме глагола, а не по словам вокруг него.",
          why:
            "Kim is a teacher. — Ким учитель. Kim teaches at a school. — Ким преподаёт в школе. " +
            "Kim is teaching. — Ким сейчас ведёт урок. Вторую и третью строки разводит форма " +
            "глагола, потому что в третьей стоят is и окончание -ing.",
        },
        {
          /*
           * З2. УЗНАТЬ. ПРАВКА 14.2 (Н15): без now. Обе неверные — верный
           * английский, но условие сужено словами «каждый день».
           */
          id: "z2-vybrat-stroku-o-privychke",
          kind: "choice",
          prompt:
            "Отметь строку, которая говорит о том, что бывает каждый день.",
          options: [
            { text: "I am walking to school." },
            { text: "I am at school." },
            { text: "I walk to school.", correct: true },
          ],
          hint: "Смотри, стоит ли в строке форма be рядом с глаголом.",
          why:
            "Верна строка I walk to school. Обе другие строки написаны без ошибки, но говорят " +
            "не о каждом дне. Строка I am walking to school. говорит про эту минуту, а строка " +
            "I am at school. называет место.",
        },
        {
          /* З3. ПРОИЗВЕСТИ ОБЕ СТРОКИ. `accept` — замысел 14.2 и решение владельца 15 сентября о запятой. */
          id: "z3-zapisat-dve-stroki-o-aygerim",
          kind: "short",
          prompt:
            "Айгерим каждый вечер плавает. Сейчас вечер, и она плавает. Напиши об этом две " +
            "строки: первую о каждом вечере, вторую о том, что идёт сейчас.",
          answer: "Aigerim swims every evening. Now she is swimming.",
          accept: [
            "She swims every evening. She is swimming now.",
            "Aigerim swims every evening. She is swimming now.",
            "She swims every evening. Now she is swimming.",
            "Every evening Aigerim swims. Now she is swimming.",
            "Aigerim swims every evening. Aigerim is swimming now.",
            "Aigerim swims every evening. Now, she is swimming.",
            "Aigerim swims every evening. Now she's swimming.",
            "She swims every evening. She's swimming now.",
            "Aigerim swims every evening. She's swimming now.",
            "She swims every evening. Now she's swimming.",
            "Every evening Aigerim swims. Now she's swimming.",
            "Aigerim swims every evening. Aigerim's swimming now.",
            "Aigerim swims every evening. Now, she's swimming.",
          ],
          hint: "В первой строке у глагола своё окончание, а во второй нужна форма be.",
          why:
            "Aigerim swims every evening. Now she is swimming. В первой строке глагол стоит с " +
            "окончанием -s, потому что она говорит о каждом вечере. Во второй строке стоят is и " +
            "глагол с окончанием -ing, потому что речь об этой минуте.",
        },
        {
          /* З4. О СЕБЕ. Один голос: не разговор. */
          id: "z4-skazat-o-kazhdom-vechere-i-seychas",
          kind: "speak",
          prompt:
            "Скажи вслух две строки о себе. В первой скажи, что ты делаешь каждый вечер, а во " +
            "второй скажи, что делаешь прямо сейчас.",
          phrase: "I read every evening. Now I am learning English.",
          translation: "Я читаю каждый вечер. Сейчас я учу английский.",
          hint: "В первой строке форма be не нужна, а во второй нужна.",
          why:
            "I read every evening. Now I am learning English. В первой строке стоит один глагол, " +
            "потому что она о каждом вечере. Во второй строке стоят am и глагол с окончанием " +
            "-ing. Ответ на это задание не проверяется, поэтому сверься с образцом. Послушай его " +
            "и повтори следом за ним.",
        },
      ],
    },

    {
      /*
       * УРОК 5. Замысел, 7.5 с правкой 14.2 (Н14): `accept` З4 принимает оборот
       * с in, и ошибкой он нигде не назван (Young Learners, Movers R&W Part 6,
       * образцы ответов, с. 44–45: «the girl in the black skirt»).
       *
       * ПЕРЕДАЧА МОДУЛЯ 11 ИСПОЛНЕНА: `wear` и одежда модуля 11 работают здесь.
       *
       * ВРЕЗКА 8 — РЕШЕНИЕ ВЛАДЕЛЬЦА от 17 сентября 2026: «Оставить». Строка
       * `Nurlan is a blue shirt.` ни при каком чтении не верна.
       *
       * РЕЗЕРВ СТРОК УРОКА 5: `Aigerim is wearing a white T-shirt.` — верный
       * вариант З1; `wearing` — ответ З2; `We are wearing black jackets.` — ответ З4.
       */
      slug: "chto-nadeto",
      title: "Что на ней надето: she is wearing a dress",
      estimatedMinutes: 12,
      outcome: "говорить, что надето на человеке: is wearing и название одежды",

      vstuplenie:
        "По-русски мы говорим «на ней красное платье», и глагола в этой фразе нет. По-английски " +
        "в такой строке глагол нужен, и это wear с окончанием -ing. Здесь мы разберём, как " +
        "сказать, что на человеке надето.",

      blocks: [
        {
          /* СЛУЧАЙ 1. На ней платье. */
          id: "sluchay-na-ney-platye",
          kind: "explain",
          znak: "1f457",
          text: [
            "На ней платье",
            "По-русски мы говорим «на ней», а по-английски в такой строке стоят is и глагол " +
              "wear с окончанием -ing.",
            "She is wearing a dress. — На ней платье.",
            "He is wearing a hat. — На нём шляпа.",
          ],
          zvuchat: ["She is wearing a dress.", "He is wearing a hat."],
        },
        {
          /* СЛУЧАЙ 2. Цвет модуля 9 перед названием одежды. */
          id: "sluchay-cvet-pered-odezhdoy",
          kind: "explain",
          znak: "1f308",
          text: [
            "Цвет перед названием одежды",
            "Цвет из модуля «Цвет и размер» встаёт перед названием одежды, как и в русской " +
              "фразе «синяя рубашка».",
            "Kim is wearing a blue shirt. — На Киме синяя рубашка.",
            "Dana is wearing a green skirt. — На Дане зелёная юбка.",
          ],
          zvuchat: ["Kim is wearing a blue shirt.", "Dana is wearing a green skirt."],
        },
        {
          /* СЛУЧАЙ 3. Две вещи соединяются and. */
          id: "sluchay-dve-veshchi-and",
          kind: "explain",
          znak: "1f9e5",
          text: [
            "Две вещи",
            "Если вещей две, соединяем их словом and.",
            "He is wearing a jacket and jeans. — На нём куртка и джинсы.",
            "She is wearing a coat and boots. — На ней пальто и сапоги.",
          ],
          zvuchat: ["He is wearing a jacket and jeans.", "She is wearing a coat and boots."],
        },
        {
          /* СЛУЧАЙ 4. На мне — I am wearing. */
          id: "sluchay-na-mne-i-am-wearing",
          kind: "explain",
          znak: "1f9e3",
          text: [
            "На мне",
            "О себе говорим I am wearing, и дальше идёт название одежды.",
            "I am wearing a sweater. — На мне свитер.",
            "I am wearing black shoes. — На мне чёрные ботинки.",
          ],
          zvuchat: ["I am wearing a sweater.", "I am wearing black shoes."],
        },
        {
          /* СЛУЧАЙ 5. На них — are wearing. */
          id: "sluchay-na-nih-are-wearing",
          kind: "explain",
          znak: "1f455",
          text: [
            "На них",
            "Когда людей несколько, ставим are, а глагол wear остаётся с окончанием -ing.",
            "They are wearing T-shirts. — На них футболки.",
            "My sisters are wearing dresses. — На моих сёстрах платья.",
          ],
          zvuchat: ["They are wearing T-shirts.", "My sisters are wearing dresses."],
        },
        {
          /*
           * СЛУЧАЙ 6. Очки и джинсы — без `a`. Урок НЕ говорит «слова без
           * единственного числа»: такого утверждения источники не дают.
           */
          id: "sluchay-ochki-i-dzhinsy",
          kind: "explain",
          znak: "1f453",
          text: [
            "Очки и джинсы",
            "Слова glasses и jeans в модуле «Одежда» стоят во множественном числе, и артикль a " +
              "перед ними не ставим.",
            "He is wearing glasses. — На нём очки.",
            "I am wearing jeans. — На мне джинсы.",
          ],
          zvuchat: ["He is wearing glasses.", "I am wearing jeans."],
        },
        {
          /* СЛУЧАЙ 7. have got и is wearing — мост к модулю 11. */
          id: "sluchay-have-got-i-is-wearing",
          kind: "explain",
          znak: "1f9e5",
          text: [
            "have got и is wearing",
            "В модуле «Одежда» оборот have got говорил, что вещь у человека есть. Строка с is " +
              "wearing говорит, что вещь на нём прямо сейчас.",
            "I have got a red jacket. — У меня есть красная куртка.",
            "I am wearing a red jacket. — На мне красная куртка.",
          ],
          zvuchat: ["I have got a red jacket.", "I am wearing a red jacket."],
        },
        {
          /*
           * СЛУЧАЙ 8. ВРЕЗКА: Nurlan is a blue shirt. Перенос русского «на
           * Нурлане синяя рубашка» без глагола. РЕШЕНИЕ ВЛАДЕЛЬЦА 17 сентября
           * 2026: «Оставить».
           */
          id: "vrezka-nurlan-is-a-blue-shirt",
          kind: "note",
          tone: "mistake",
          znak: "26a0",
          text:
            "Глагол в строке об одежде\n\nКогда говорим, что на человеке надето, ставим is " +
            "wearing и название одежды.\n\nПо-русски мы говорим «на Нурлане синяя рубашка», и " +
            "глагола здесь нет. В записи Nurlan is a blue shirt. глагола тоже нет, и так " +
            "по-английски не говорят. Верной будет строка Nurlan is wearing a blue shirt.",
          zvuchat: ["Nurlan is wearing a blue shirt."],
        },
        {
          id: "slova-uroka-5",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "wear",
              translation: "носить",
              example: "She is wearing a dress.",
              hint: "/weə/",
              znak: "1f454",
            },
          ],
        },
        {
          /* З1. УЗНАТЬ. Неверные: врезка 8 и строка без формы be. */
          id: "z1-vybrat-o-futbolke",
          kind: "choice",
          prompt:
            "На Айгерим белая футболка. Отметь строку без ошибки.",
          options: [
            { text: "Aigerim is a white T-shirt." },
            { text: "Aigerim is wearing a white T-shirt.", correct: true },
            { text: "Aigerim wearing a white T-shirt." },
          ],
          hint: "Проверь в каждой строке, стоит ли в ней форма be.",
          why:
            "Верна строка Aigerim is wearing a white T-shirt. В записи Aigerim is a white " +
            "T-shirt. нет глагола, а в записи Aigerim wearing a white T-shirt. нет формы be.",
        },
        {
          /* З2. ПРОИЗВЕСТИ. */
          id: "z2-vpisat-wearing",
          kind: "gap",
          prompt: "На твоём брате чёрное пальто. Впиши недостающий глагол.",
          before: "My brother is ",
          after: " a black coat.",
          answer: "wearing",
          hint: "Этот глагол назван в словах урока.",
          why:
            "Получается строка My brother is wearing a black coat. После is стоит глагол wear с " +
            "окончанием -ing.",
        },
        {
          /*
           * З3. УЗНАТЬ. Три строки о шляпе разводятся смыслом. Русский перевод
           * «хожу в шляпе» широкий и значения слова не сужает.
           */
          id: "z3-soedinit-tri-stroki-o-shlyape",
          kind: "match",
          prompt: "Соедини строку о шляпе с её русским смыслом.",
          left: ["I have got a hat.", "I am wearing a hat.", "I wear a hat every day."],
          right: ["на мне шляпа", "я каждый день хожу в шляпе", "у меня есть шляпа"],
          answer: [2, 0, 1],
          hint: "Смотри на форму глагола в каждой строке.",
          why:
            "I have got a hat. — у меня есть шляпа. I am wearing a hat. — на мне шляпа. " +
            "I wear a hat every day. — я каждый день хожу в шляпе. Оборот have got говорит, что " +
            "вещь есть, а строка с is wearing говорит про эту минуту. Строка с every day " +
            "говорит о каждом дне.",
        },
        {
          /*
           * З4. ПРОИЗВЕСТИ. `accept` принимает оборот с in — он законен и в
           * уроке ошибкой не назван (Н14).
           */
          id: "z4-zapisat-na-nas-kurtki",
          kind: "short",
          prompt: "Запиши по-английски «на нас чёрные куртки».",
          answer: "We are wearing black jackets.",
          accept: [
            "We're wearing black jackets.",
            "We are in black jackets.",
            "We're in black jackets.",
          ],
          hint: "Людей несколько, и форма be это показывает.",
          why:
            "Верной будет строка We are wearing black jackets. Людей несколько, поэтому стоит " +
            "are, а после него идёт глагол wear с окончанием -ing.",
        },
        {
          /* З5. О СЕБЕ. Один голос: не разговор. */
          id: "z5-skazat-chto-na-tebe",
          kind: "speak",
          prompt: "Скажи вслух, что на тебе сейчас надето.",
          phrase: "I am wearing a blue sweater and jeans.",
          translation: "На мне синий свитер и джинсы.",
          hint: "Начни с I am wearing, а потом назови вещи.",
          why:
            "I am wearing a blue sweater and jeans. После I am стоит глагол wear с окончанием " +
            "-ing, а две вещи соединены словом and. Ответ на это задание не проверяется, поэтому " +
            "сверься с образцом. Послушай его и повтори следом за ним.",
        },
      ],
    },

    {
      /*
       * УРОК 6. Замысел, 7.6 с правками 14.2: случай 2 — `She isn't eating.`
       * (прежняя строка совпадала с ответом вопроса 7 работы); случай 6 — мост к
       * модулю 14; З3 — сборка вместо перевода.
       *
       * СЦЕНА НА ДВА ГОЛОСА: первой говорит Дана (женский), вторым Алим
       * (мужской). Ни одна строка сцены не совпадает с ответом вопроса 7 работы.
       *
       * ВРЕЗКА 8 ПРОВЕРЕНА ПРОТИВ ЗАКОННОГО ЧТЕНИЯ: `She doesn't cooking.` не
       * складывается ни при каком чтении.
       *
       * РЕЗЕРВ СТРОК УРОКА 6: `They aren't playing now.` — верный вариант З1;
       * `aren't` — ответ З2; `I am not working now.` — ответ З3.
       */
      slug: "ne-seychas",
      title: "Не сейчас: he isn't sleeping",
      estimatedMinutes: 12,
      outcome:
        "говорить, что человек сейчас этого не делает: isn't и aren't с глаголом на -ing",

      vstuplenie:
        "Дана звонит Алиму и спрашивает, занят ли он. По-русски Алим ответил бы «нет, я не " +
        "готовлю, я смотрю телевизор». Здесь мы разберём, как сказать по-английски, чего " +
        "человек сейчас не делает.",

      blocks: [
        {
          /* СЦЕНА-РАЗГОВОР. Первой говорит Дана — женский голос. */
          id: "scena-dana-zvonit-alimu",
          kind: "example",
          znak: "1f4de",
          razgovor: true,
          pervyyGolos: "zhenskiy",
          caption: "Дана звонит Алиму. Первой говорит Дана",
          text: "Alim, are you busy?\nNo, I am not cooking. I am watching television.",
          perevod: {
            "Alim, are you busy?": "Алим, занят?",
            "No, I am not cooking. I am watching television.":
              "Нет, я не готовлю. Я смотрю телевизор.",
          },
          explain:
            "Дана спрашивает, занят ли Алим прямо сейчас. Алим отвечает про эту самую минуту, и " +
            "выходит, что он не готовит, а смотрит телевизор.",
        },
        {
          /* ТАБЛИЦА ОТРИЦАНИЯ — сразу после сцены. */
          id: "tablica-otricanie-s-ing",
          kind: "table",
          znak: "1f4c3",
          caption: "У каждого своя форма be с not, а глагол в этих строках с окончанием -ing",
          head: ["Строка", "Перевод"],
          rows: [
            ["I am not reading", "Я не читаю"],
            ["he isn't reading", "Он не читает"],
            ["she isn't reading", "Она не читает"],
            ["we aren't reading", "Мы не читаем"],
            ["they aren't reading", "Они не читают"],
          ],
          zvuchat: [
            "I am not reading",
            "he isn't reading",
            "she isn't reading",
            "we aren't reading",
            "they aren't reading",
          ],
        },
        {
          /* СЛУЧАЙ 1. Я не: I am not — как в модуле 3. */
          id: "sluchay-ya-ne-i-am-not",
          kind: "explain",
          znak: "1f6ab",
          text: [
            "Я не: I am not",
            "Слово not ставим после am, как и в модуле «Откуда ты и где живёшь».",
            "I am not working. — Я не работаю.",
            "I'm not eating. — Я не ем.",
          ],
          zvuchat: ["I am not working.", "I'm not eating."],
        },
        {
          /* СЛУЧАЙ 2. Он и она: isn't. ПРАВКА 14.2. */
          id: "sluchay-on-i-ona-isnt",
          kind: "explain",
          znak: "1f645",
          text: [
            "Он и она: isn't",
            "О нём и о ней ставим is not, а коротко пишем isn't. Эту короткую запись мы брали " +
              "в модуле «Что это такое».",
            "She isn't eating. — Она не ест.",
            "Kim isn't writing. — Ким не пишет.",
          ],
          zvuchat: ["She isn't eating.", "Kim isn't writing."],
        },
        {
          /* СЛУЧАЙ 3. Мы и они: aren't — новая карточка. */
          id: "sluchay-my-i-oni-arent",
          kind: "explain",
          znak: "1f46a",
          text: [
            "Мы и они: aren't",
            "О нескольких людях ставим are not, а коротко пишем aren't.",
            "We aren't dancing. — Мы не танцуем.",
            "They aren't playing. — Они не играют.",
          ],
          zvuchat: ["We aren't dancing.", "They aren't playing."],
        },
        {
          /* СЛУЧАЙ 4. Полная и короткая запись — обе верны. */
          id: "sluchay-polnaya-i-korotkaya-zapis",
          kind: "explain",
          znak: "2702",
          text: [
            "Полная и короткая запись",
            "Полная запись is not и короткая isn't значат одно и то же, и верны обе.",
            "He is not driving. — Он не ведёт машину.",
            "He isn't driving. — Он не ведёт машину.",
          ],
          zvuchat: ["He is not driving.", "He isn't driving."],
        },
        {
          /* СЛУЧАЙ 5. Не это, а другое. */
          id: "sluchay-ne-eto-a-drugoe",
          kind: "explain",
          znak: "1f504",
          text: [
            "Не это, а другое",
            "Первая строка говорит, чего человек сейчас не делает. Вторая строка говорит, что " +
              "он делает вместо этого.",
            "I am not cooking. I am eating. — Я не готовлю. Я ем.",
            "We aren't walking. We are driving. — Мы не идём пешком. Мы едем на машине.",
          ],
          zvuchat: ["I am not cooking. I am eating.", "We aren't walking. We are driving."],
        },
        {
          /*
           * СЛУЧАЙ 6. МОСТ К МОДУЛЮ 14 — его словами после правки редактора
           * 17 сентября 2026: «когда сказано, чего человек обычно не делает,
           * перед глаголом встаёт don't или doesn't».
           */
          id: "sluchay-dont-i-not-zdes",
          kind: "explain",
          znak: "1f500",
          text: [
            "don't и not",
            "В модуле «Я не делаю» о том, чего человек обычно не делает, говорили словом don't. " +
              "О том, чего он не делает сейчас, говорим формой be и словом not.",
            "I don't swim. — Я не плаваю.",
            "I am not swimming now. — Я сейчас не плаваю.",
          ],
          zvuchat: ["I don't swim.", "I am not swimming now."],
        },
        {
          /* СЛУЧАЙ 7. Имя и not. */
          id: "sluchay-imya-i-not",
          kind: "explain",
          znak: "1f464",
          text: [
            "Имя и not",
            "Два имени через and или слова my parents говорят о нескольких людях. Поэтому при " +
              "них стоит aren't.",
            "My parents aren't working. — Мои родители не работают.",
            "Dana and Kim aren't sleeping. — Дана и Ким не спят.",
          ],
          zvuchat: ["My parents aren't working.", "Dana and Kim aren't sleeping."],
        },
        {
          /*
           * СЛУЧАЙ 8. ВРЕЗКА: doesn't cooking — перенос модуля 14 в строку с -ing.
           */
          id: "vrezka-she-doesnt-cooking",
          kind: "note",
          tone: "mistake",
          znak: "26a0",
          text:
            "Отрицание в строке о сейчас\n\nКогда говорим, чего человек не делает сейчас, " +
            "ставим форму be и not.\n\nВ записи She doesn't cooking. слово doesn't взято из " +
            "строки о том, что человек делает обычно, и так по-английски не говорят. Верной " +
            "будет строка She isn't cooking.",
          zvuchat: ["She isn't cooking."],
        },
        {
          /*
           * СЛОВАРЬ УРОКА 6. Служебная запись со стяжением получает карточку —
           * решение владельца от 10 сентября 2026: её чтение не выводится.
           * Чтения приняты владельцем 17 сентября 2026.
           */
          id: "slova-uroka-6",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "aren't",
              translation: "не",
              example: "We aren't dancing.",
              hint: "/ɑːnt/",
            },
            {
              term: "are not",
              translation: "не",
              example: "They are not sleeping.",
              hint: "/ɑː nɒt/",
            },
          ],
        },
        {
          /* З1. УЗНАТЬ. Неверные: перенос модуля 14 и форма об одном. */
          id: "z1-vybrat-oni-ne-igrayut",
          kind: "choice",
          prompt: "Отметь строку «они сейчас не играют».",
          options: [
            { text: "They aren't playing now.", correct: true },
            { text: "They don't playing now." },
            { text: "They isn't playing now." },
          ],
          hint: "Людей несколько, и форма be при них своя.",
          why:
            "Верна строка They aren't playing now. В записи They don't playing now. слово don't " +
            "взято из строки о привычном деле. В записи They isn't playing now. форма is говорит " +
            "об одном человеке.",
        },
        {
          /* З2. ПРОИЗВЕСТИ. Полная запись принимается наравне. */
          id: "z2-vpisat-arent",
          kind: "gap",
          prompt:
            "Твои сёстры сейчас не плавают. Впиши то, чего в строке не хватает.",
          before: "My sisters ",
          after: " swimming now.",
          answer: "aren't",
          accept: ["are not"],
          hint: "Нужна форма be вместе с not.",
          why:
            "Получается строка My sisters aren't swimming now. Сестёр несколько, поэтому стоит " +
            "are, а not вошло в короткую запись aren't. Полная запись are not тоже верна.",
        },
        {
          /* З3. ПРОИЗВЕСТИ. ПРАВКА 14.2 (Н12): сборка вместо перевода. Порядок задан условием. */
          id: "z3-sobrat-ya-seychas-ne-rabotayu",
          kind: "order",
          prompt: "Собери строку «я сейчас не работаю». Слово now поставь в конце.",
          items: ["working", "I am", "now.", "not"],
          answer: [1, 3, 0, 2],
          hint: "Слово not ставим сразу после am.",
          why:
            "Получается строка I am not working now. Она говорит о том, чего я не делаю в эту " +
            "минуту. Поэтому в ней стоят am и not, а глагол идёт с окончанием -ing.",
        },
        {
          /* З4. УЗНАТЬ. `cook` здесь и глагол, и карточка модуля 6 «повар». */
          id: "z4-soedinit-tri-stroki-so-slovom-ne",
          kind: "match",
          prompt: "Соедини каждую строку с её русским смыслом.",
          left: ["I don't cook.", "I am not cooking.", "I am not a cook."],
          right: ["я не повар", "я не готовлю (вообще)", "я сейчас не готовлю"],
          answer: [1, 2, 0],
          hint: "Смотри, что стоит после not и после don't.",
          why:
            "I don't cook. — я не готовлю (вообще). I am not cooking. — я сейчас не готовлю. " +
            "I am not a cook. — я не повар. Строка с don't говорит о привычном деле. Строка с am " +
            "not и глаголом на -ing говорит про эту минуту. А строка с am not и названием " +
            "говорит, что человек не повар.",
        },
        {
          /*
           * З5. О СЕБЕ. Образец переписан замыслом на `watching television`:
           * ответ вопроса 7 работы в уроке 6 не встречается.
           */
          id: "z5-skazat-chego-ne-delaesh",
          kind: "speak",
          prompt:
            "Скажи вслух две строки о себе. В первой скажи, чего ты сейчас не делаешь, а во " +
            "второй скажи, что делаешь.",
          phrase: "I am not watching television. I am learning English.",
          translation: "Я не смотрю телевизор. Я учу английский.",
          hint: "В первой строке поставь not после am, а во второй обойдись без not.",
          why:
            "I am not watching television. I am learning English. В первой строке после am " +
            "стоит not, а во второй строке его нет. Ответ на это задание не проверяется, поэтому " +
            "сверься с образцом. Послушай его и повтори следом за ним.",
        },
      ],
    },

    {
      /*
       * УРОК 7. Замысел, 7.7 с правками 14.2: случай 7 — мост к модулю 15; З1
       * неверный `Is Kim eat?` вместо `Kim is eating?` (у переспроса есть верное
       * чтение, Н16); З4 `accept` с именем; З5 без родовой формы.
       *
       * ВРЕЗКИ О `Yes, I'm.` В МОДУЛЕ НЕТ, И ЭТО РЕШЕНИЕ: утверждения «короткую
       * запись в конце ответа не пишут» нет ни в одном файле materials/, а самой
       * строки в курсе не встречается ни разу. Отвлекающим она тоже не стоит.
       *
       * ВИДА `match` В ЗАДАНИЯХ УРОКА 7 НЕТ НАРОЧНО: соединение трёх вопросов по
       * форме занято вопросом 8 работы (замысел, 7.7).
       *
       * РЕЗЕРВ СТРОК УРОКА 7: `Is Kim eating?` — верный вариант З1; `are` —
       * ответ З2; `Is your sister dancing?` — ответ З3; `Are you cooking now?` —
       * ответ З4.
       */
      slug: "ty-chitaesh",
      title: "Ты читаешь? Are you reading?",
      estimatedMinutes: 12,
      outcome: "спрашивать, делает ли человек это сейчас, и коротко отвечать",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается РУССКОЙ ФРАЗОЙ. «Ты спишь?» по-русски — та же " +
        "строка, что «ты спишь», только с вопросом; по-английски форма be выходит вперёд, как в " +
        "модуле «Откуда ты и где живёшь».",

      blocks: [
        {
          /* СЛУЧАЙ 1. Are you…? */
          id: "sluchay-are-you",
          kind: "explain",
          znak: "2753",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Are you…?».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. are встаёт перед you.",
            "Are you sleeping? — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Are you working? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Are you sleeping?", "Are you working?"],
        },
        {
          /* СЛУЧАЙ 2. Is he, is she. */
          id: "sluchay-is-he-is-she",
          kind: "explain",
          znak: "1f464",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Is he, is she».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. is встаёт перед he, she или именем.",
            "Is Dana cooking? — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Is your brother playing? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Is Dana cooking?", "Is your brother playing?"],
        },
        {
          /* СЛУЧАЙ 3. Are they. */
          id: "sluchay-are-they",
          kind: "explain",
          znak: "1f46a",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Are they».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. О нескольких — are.",
            "Are they swimming? — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Are your parents eating? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Are they swimming?", "Are your parents eating?"],
        },
        {
          /* СЛУЧАЙ 4. Ответ да — короткий ответ модуля 3. */
          id: "sluchay-otvet-da",
          kind: "explain",
          znak: "2705",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Ответ да».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Yes, местоимение и форма be.",
            "Yes, I am. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Yes, she is. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Yes, I am.", "Yes, she is."],
        },
        {
          /* СЛУЧАЙ 5. Ответ нет. */
          id: "sluchay-otvet-net",
          kind: "explain",
          znak: "274c",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Ответ нет».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. No и короткая запись с not.",
            "No, I'm not. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "No, he isn't. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["No, I'm not.", "No, he isn't."],
        },
        {
          /* СЛУЧАЙ 6. Из строки — вопрос. */
          id: "sluchay-iz-stroki-vopros",
          kind: "explain",
          znak: "1f504",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Из строки — вопрос».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В строке форма be после местоимения, в " +
              "вопросе — перед ним.",
            "You are reading. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Are you reading? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["You are reading.", "Are you reading?"],
        },
        {
          /*
           * СЛУЧАЙ 7. МОСТ К МОДУЛЮ 15 — его словами после правки редактора
           * 17 сентября 2026: «вопрос о том, что человек делает вообще, начинают
           * словом do». Строки-разговоры звучат на два голоса; кто говорит, не
           * назван — голоса идут по очереди, первый женский.
           */
          id: "sluchay-do-you-i-are-you",
          kind: "explain",
          znak: "1f500",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Do you и Are you».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В модуле «Спросить о делах» вопрос о том, " +
              "что человек делает вообще, начинали словом do. Вопрос о том, что он делает " +
              "сейчас, начинают формой be. Ответ повторяет то, с чего начат вопрос.",
            "Do you swim? — Yes, I do. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Are you swimming? — Yes, I am. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Do you swim? — Yes, I do.", "Are you swimming? — Yes, I am."],
        },
        {
          /* СЛУЧАЙ 8. Вопрос со словом now. */
          id: "sluchay-vopros-so-slovom-now",
          kind: "explain",
          znak: "23f1",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Вопрос со словом now».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. now встаёт в конце вопроса, как в конце строки.",
            "Are you working now? — ПИШЕТ РЕДАКТОР: перевод строки.",
            "Is he sleeping now? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Are you working now?", "Is he sleeping now?"],
        },
        {
          /* З1. УЗНАТЬ. Неверные — ошибки, названные модулем 15. */
          id: "z1-vybrat-vopros-o-kime",
          kind: "choice",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — дана строка Kim is eating. Отметь вопрос о том же.",
          options: [
            { text: "Is Kim eat?" },
            { text: "Does Kim eating?" },
            { text: "Is Kim eating?", correct: true },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1, урок «Ты читаешь?» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет верный вопрос; в первом глагол без изменений, во " +
            "втором слово из модуля «Спросить о делах».",
        },
        {
          /* З2. ПРОИЗВЕСТИ. Короткий ответ. */
          id: "z2-vpisat-korotkiy-otvet",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие — ответь «да»: впиши недостающее слово.",
          before: "Are your parents working? — Yes, they ",
          after: ".",
          answer: "are",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2, урок «Ты читаешь?» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет ответ Yes, they are. и правило случая 4.",
        },
        {
          /* З3. ПРОИЗВЕСТИ. Порядок один. */
          id: "z3-sobrat-vopros-o-sestre",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие — собери вопрос из трёх кусков.",
          items: ["dancing?", "Is", "your sister"],
          answer: [1, 2, 0],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3, урок «Ты читаешь?» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет вопрос Is your sister dancing? и порядок слов.",
        },
        {
          /* З4. ПРОИЗВЕСТИ. Вопрос по ситуации; имя принимается в обоих местах. */
          id: "z4-sprosit-alima-gotovit-li-on",
          kind: "short",
          prompt: "ПИШЕТ РЕДАКТОР: условие по мысли методиста (16.7): ты звонишь Алиму и хочешь " +
            "узнать, готовит ли он сейчас. Задай ему вопрос.",
          answer: "Are you cooking now?",
          accept: [
            "Are you cooking?",
            "Alim, are you cooking?",
            "Alim, are you cooking now?",
            "Are you cooking now, Alim?",
            "Are you cooking, Alim?",
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4, урок «Ты читаешь?» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет вопрос Are you cooking now? и место формы be.",
        },
        {
          /*
           * З5. РАЗГОВОР. Первым говорит Ким — мужской голос, отвечает Дана —
           * женский. Условие без родовой формы (правка 14.2).
           */
          id: "z5-sprosit-i-otvetit-za-sobesednika",
          kind: "speak",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — спроси, читает ли собеседник, и ответь за него «нет, пишу».",
          phrase: "Are you reading? — No, I'm not. I'm writing.",
          pervyyGolos: "muzhskoy",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца-разговора с вопросом да-нет.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З5, урок «Ты читаешь?» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет образец-разговор с вопросом да-нет и формулу самопроверки уговора 8.1.",
        },
      ],
    },

    {
      /*
       * УРОК 8. Замысел, 7.8 с правками 14.2: случай 2 — do модуля 15 не
       * переводился, значение «делать» пришло строкой модуля 16 (Н6); случай 5 —
       * опора на засчитанный ответ Movers R&W Part 6, с. 44–45 (Н19); З3 —
       * `What are your friends doing?`, а прежний ответ отдан вопросу 9 работы.
       *
       * `What are you doing?` СТОИТ ПРИМЕРОМ ЗАКОННО — это предмет урока;
       * заданием с этим ответом целиком она не стоит.
       *
       * ЗАДАНИЙ ЧЕТЫРЕ: `match` и «составь вопрос» заняты работой (вопросы 8 и 9).
       *
       * РЕЗЕРВ СТРОК УРОКА 8: `He is drinking coffee.` — верный вариант З1;
       * `are` — ответ З2; `What are your friends doing?` — ответ З3.
       */
      slug: "chto-ty-delaesh",
      title: "Что ты делаешь? What are you doing?",
      estimatedMinutes: 12,
      outcome: "спрашивать, что человек делает сейчас, и отвечать на такой вопрос",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Дана звонит Киму вечером и спрашивает, " +
        "что он делает.",

      blocks: [
        {
          /* СЦЕНА-РАЗГОВОР. Первой говорит Дана — женский голос, отвечает Ким. */
          id: "scena-dana-zvonit-kimu",
          kind: "example",
          znak: "1f4de",
          razgovor: true,
          pervyyGolos: "zhenskiy",
          caption: "ПИШЕТ РЕДАКТОР: подпись сцены — Дана звонит Киму, первой говорит Дана.",
          text: "Hi, Kim! What are you doing?\nI am doing my homework.",
          perevod: {
            "Hi, Kim! What are you doing?": "ПИШЕТ РЕДАКТОР: перевод первой реплики.",
            "I am doing my homework.": "ПИШЕТ РЕДАКТОР: перевод второй реплики.",
          },
          explain:
            "ПИШЕТ РЕДАКТОР: разбор сцены — вопрос начинается словом What, а в ответе стоит " +
            "форма be и глагол с -ing.",
        },
        {
          /* СЛУЧАЙ 1. What are you doing? — опора Starters, с. 29. */
          id: "sluchay-what-are-you-doing",
          kind: "explain",
          znak: "2753",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «What are you doing?».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Вопрос «что делаешь сейчас»: What, форма be, " +
              "you, doing.",
            "What are you doing? — I am cooking. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "What are you doing? — I am reading. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: [
            "What are you doing? — I am cooking.",
            "What are you doing? — I am reading.",
          ],
        },
        {
          /*
           * СЛУЧАЙ 2. doing — это do с -ing. ПРАВКА 14.2 (Н6): в модуле 15 do не
           * переводилось («с него начинают вопрос»), а значение «делать» стояло
           * строкой модуля 16 `I usually do my homework in the evening.`
           */
          id: "sluchay-doing-eto-do-s-ing",
          kind: "explain",
          znak: "1f4dd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «doing — это do с -ing».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В модуле «Спросить о делах» словом do начинали вопрос, и оно " +
              "не переводилось; второе его значение, «делать», стояло строкой модуля «Как часто». С -ing " +
              "это «делаешь сейчас».",
            "I am doing my homework. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "She is doing her homework. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am doing my homework.", "She is doing her homework."],
        },
        {
          /* СЛУЧАЙ 3. О нём и о ней. */
          id: "sluchay-o-nyom-i-o-ney",
          kind: "explain",
          znak: "1f464",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «О нём и о ней».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. is и he, she или имя.",
            "What is Dana doing? — She is writing. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "What is your father doing? — He is driving. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: [
            "What is Dana doing? — She is writing.",
            "What is your father doing? — He is driving.",
          ],
        },
        {
          /* СЛУЧАЙ 4. О них. */
          id: "sluchay-o-nih-what-are-they-doing",
          kind: "explain",
          znak: "1f46a",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «О них».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. are и they.",
            "What are they doing? — They are playing football. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "What are your parents doing? — They are walking. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: [
            "What are they doing? — They are playing football.",
            "What are your parents doing? — They are walking.",
          ],
        },
        {
          /*
           * СЛУЧАЙ 5. Ответ одним словом — РАЗРЕШЕНИЕ ИСТОЧНИКА, а не
           * предпочтение: Young Learners, Movers R&W Part 6, образцы ответов,
           * с. 44–45 («Riding a bike» — 1 балл), и совет Starters, с. 27. Урок НЕ
           * говорит, что полная строка хуже.
           */
          id: "sluchay-otvet-odnim-slovom",
          kind: "explain",
          znak: "1f4ac",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Ответ одним словом».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. В разговоре отвечают и одним словом с -ing.",
            "What is the man doing? — Eating. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "What are you doing? — Swimming. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["What is the man doing? — Eating.", "What are you doing? — Swimming."],
        },
        {
          /* СЛУЧАЙ 6. Где ты и что делаешь — вопрос модуля 3 рядом. */
          id: "sluchay-gde-ty-i-chto-delaesh",
          kind: "explain",
          znak: "1f4cd",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Где ты и что делаешь».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Вопрос из модуля «Откуда ты и где живёшь» и вопрос этого урока идут рядом.",
            "Where are you? — I am in the garden. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "What are you doing? — I am drawing. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["Where are you? — I am in the garden.", "What are you doing? — I am drawing."],
        },
        {
          /* СЛУЧАЙ 7. And you? — как в модуле 3. */
          id: "sluchay-and-you",
          kind: "explain",
          znak: "1f501",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «And you?».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. Вопрос возвращают собеседнику, как в модуле «Откуда ты и где живёшь».",
            "I am eating. And you? — ПИШЕТ РЕДАКТОР: перевод строки.",
            "I am working. And you? — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["I am eating. And you?", "I am working. And you?"],
        },
        {
          /*
           * СЛУЧАЙ 8. Ответ о действии. ЗАПРЕТА ЗДЕСЬ НЕТ: случай показывает,
           * чем отвечают, а не говорит «Yes здесь нельзя».
           */
          id: "sluchay-otvet-o-deystvii",
          kind: "explain",
          znak: "27a1",
          text: [
            "ПИШЕТ РЕДАКТОР: имя случая — «Ответ о действии».",
            "ПИШЕТ РЕДАКТОР: правило одной строкой. На вопрос с What отвечают строкой о действии.",
            "What are you doing? — I am dancing. — ПИШЕТ РЕДАКТОР: перевод строки.",
            "What is Kim doing? — He is sleeping. — ПИШЕТ РЕДАКТОР: перевод строки.",
          ],
          zvuchat: ["What are you doing? — I am dancing.", "What is Kim doing? — He is sleeping."],
        },
        {
          id: "slova-uroka-8",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "draw",
              translation: "рисовать",
              example: "What are you doing? — I am drawing.",
              hint: "/drɔː/",
              znak: "270f",
            },
          ],
        },
        {
          /* З1. УЗНАТЬ. Неверные: ответ на вопрос да-нет и строка без формы be. */
          id: "z1-vybrat-otvet-o-nurlane",
          kind: "choice",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — про Нурлана спросили What is Nurlan doing? Отметь ответ.",
          options: [
            { text: "Yes, he is." },
            { text: "He is drinking coffee.", correct: true },
            { text: "He drinking coffee." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1, урок «Что ты делаешь?» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет верный ответ; первый отвечает на вопрос да-нет, в " +
            "третьем нет формы be.",
        },
        {
          /* З2. ПРОИЗВЕСТИ. */
          id: "z2-vpisat-formu-be-v-vopros",
          kind: "gap",
          prompt: "ПИШЕТ РЕДАКТОР: условие — впиши форму be в вопрос о сёстрах.",
          before: "What ",
          after: " your sisters doing?",
          answer: "are",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2, урок «Что ты делаешь?» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет вопрос What are your sisters doing? и почему are.",
        },
        {
          /* З3. ПРОИЗВЕСТИ. Порядок один. */
          id: "z3-sobrat-vopros-o-druzyah",
          kind: "order",
          prompt: "ПИШЕТ РЕДАКТОР: условие — собери вопрос о нескольких людях.",
          items: ["your friends", "doing?", "What", "are"],
          answer: [2, 3, 0, 1],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3, урок «Что ты делаешь?» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет вопрос What are your friends doing? и порядок частей.",
        },
        {
          /*
           * З4. РАЗГОВОР. Первым говорит Алим — мужской голос, отвечает Айгерим —
           * женский.
           */
          id: "z4-otvetit-i-vernut-vopros",
          kind: "speak",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — друг спрашивает, что ты делаешь; ответь вслух и спроси его " +
            "в ответ.",
          phrase: "What are you doing? — I am learning English. And you?",
          pervyyGolos: "muzhskoy",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца-разговора с вопросом What.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4, урок «Что ты делаешь?» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет образец-разговор с вопросом What и формулу самопроверки уговора 8.1.",
        },
      ],
    },

    {
      /*
       * УРОК 9 — ЧТЕНИЕ. Замысел, 7.9 с правками 14.2 (сняты `all` и `And me?`).
       *
       * ОПОРА: CEFR, с. 59, Reading as a leisure activity, A1 — «short,
       * illustrated narratives about everyday activities». Жанр `message`.
       *
       * ИМЯ УРОКА ПОДТВЕРЖДЕНО МЕТОДИСТОМ (16.4). Строка таблицы раздела 5
       * («Читаем: кто чем занят») была рабочим именем и исправлена в замысле.
       *
       * ПЕРЕВОДА У СВЯЗНОГО ТЕКСТА НЕТ и звука у него тоже нет — решения
       * владельца от 6 сентября 2026.
       *
       * СОСТАВ ДЕЙСТВИЙ МЕНЯТЬ НЕЛЬЗЯ: редактор вправе сократить текст, но не
       * менять, кто что делает (замысел, 7.9).
       */
      slug: "chitaem-vyhodnoy-u-aygerim",
      title: "Читаем: выходной у Айгерим",
      estimatedMinutes: 12,
      outcome: "находить в сообщении, кто что делает сейчас",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. Айгерим пишет Дане, что у них дома " +
        "делает каждый.",

      blocks: [
        {
          id: "tekst-soobshchenie-aygerim",
          kind: "text",
          znak: "1f4e9",
          title: "ПИШЕТ РЕДАКТОР: заголовок сообщения.",
          genre: "message",
          body: [
            "Hi Dana! It is the weekend, and we are at home.",
            "My father is washing his bike.",
            "My mother is cooking lunch.",
            "My brother Nurlan isn't doing his homework. He is watching television!",
            "Our dog is sleeping under the table.",
            "I am writing to you.",
            "Aigerim",
          ],
        },
        {
          id: "slova-uroka-9",
          kind: "vocab",
          caption: "Слова сообщения",
          items: [
            {
              term: "wash",
              translation: "мыть, стирать",
              example: "I wash my car at the weekend.",
              hint: "/wɒʃ/",
              znak: "1f9fc",
            },
          ],
        },
        {
          /* З1. Найти действие человека. Оба неверных — из того же текста. */
          id: "z1-vybrat-chto-delaet-papa",
          kind: "choice",
          about: "tekst-soobshchenie-aygerim",
          prompt: "ПИШЕТ РЕДАКТОР: условие — что делает папа Айгерим?",
          options: [
            { text: "cooking lunch" },
            { text: "watching television" },
            { text: "washing his bike", correct: true },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1, урок «Читаем: выходной у Айгерим» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет строку сообщения о папе и говорит, кто делает две " +
            "другие вещи.",
        },
        {
          /* З2. Понять отрицание и ответить коротко. Неверный третий — перенос модуля 15. */
          id: "z2-vybrat-korotkiy-otvet-o-nurlane",
          kind: "choice",
          about: "tekst-soobshchenie-aygerim",
          prompt: "ПИШЕТ РЕДАКТОР: условие — Is Nurlan doing his homework?",
          options: [
            { text: "No, he isn't.", correct: true },
            { text: "Yes, he is." },
            { text: "No, he doesn't." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2, урок «Читаем: выходной у Айгерим» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет строку сообщения о Нурлане и говорит, почему в " +
            "ответе стоит isn't.",
        },
        {
          /* З3. Выписать одно слово. */
          id: "z3-zapisat-gde-spit-sobaka",
          kind: "short",
          about: "tekst-soobshchenie-aygerim",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — где спит собака? Запиши одним английским словом, под чем она спит.",
          answer: "table",
          accept: ["the table"],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3, урок «Читаем: выходной у Айгерим» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку сообщения о собаке.",
        },
        {
          /*
           * З4. ВЗЯТ ВИДОМ `choice`, А НЕ «ВЫПИШИ ИМЯ»: действие «выпиши имя из
           * записи» стоит в работе модуля 14 (замысел, 7.9).
           */
          id: "z4-vybrat-chto-delaet-aygerim",
          kind: "choice",
          about: "tekst-soobshchenie-aygerim",
          prompt: "ПИШЕТ РЕДАКТОР: условие — что делает сама Айгерим?",
          options: [
            { text: "She is sleeping." },
            { text: "She is writing to Dana.", correct: true },
            { text: "She is cooking lunch." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4, урок «Читаем: выходной у Айгерим» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет последнюю строку сообщения и говорит, кто готовит обед.",
        },
      ],
    },

    {
      /*
       * УРОК 10 — СЛУШАНИЕ. Замысел, 7.10 с правкой 14.2 (снято `with his dog`).
       *
       * ОПОРА: Young Learners, с. 9, Pre A1 Starters — «understand… what they
       * are doing»; формат — Starters Listening Part 1, с. 15 (соединить имя с
       * человеком).
       *
       * ЗАПИСЬ НА ДВА ГОЛОСА: первой говорит Айгерим (женский), отвечает Ким
       * (мужской). ОТВЕТЫ РЯДОМ НЕ ПЕЧАТАЮТСЯ: ни «парк», ни «рисует», ни
       * «птица» в подписи и условиях нет.
       *
       * СЛОВАРЬ УРОКА СТОИТ ПОСЛЕ ЗАДАНИЙ — ПОДТВЕРЖДЕНО МЕТОДИСТОМ (16.3),
       * и причина сильнее, чем назвал сборщик: ответ З2 — само слово `bird`,
       * и это ответ НА СЛУХ. Карточка перед заданиями отменила бы задание целиком.
       */
      slug: "slushaem-kto-chto-delaet",
      title: "Слушаем: кто что делает",
      estimatedMinutes: 11,
      outcome: "понимать на слух, что сейчас делает человек",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ и не называет ни одного ответа заданий.",

      blocks: [
        {
          id: "zapis-aygerim-zvonit-kimu",
          kind: "audio",
          znak: "1f3a7",
          voice: "два голоса",
          pace: "slow",
          skryt: true,
          pervyyGolos: "zhenskiy",
          caption: "ПИШЕТ РЕДАКТОР: подпись записи — Айгерим звонит Киму; ответов заданий в ней нет.",
          transcript:
            "Hi, Kim! Where are you? — I am in the park. — Is Alim in the park? — Yes, he is. " +
            "He is walking. — And Dana? — Dana is sitting. She is drawing a bird. — And Bill? — " +
            "Bill is playing football.",
        },
        {
          /* З1. ФОРМАТ STARTERS: соединить имя с действием по записи. */
          id: "z1-soedinit-imya-i-deystvie",
          kind: "match",
          about: "zapis-aygerim-zvonit-kimu",
          prompt: "ПИШЕТ РЕДАКТОР: условие — соедини имя с тем, что человек делает.",
          left: ["Alim", "Dana", "Bill"],
          right: ["drawing", "playing football", "walking"],
          answer: [2, 0, 1],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1, урок «Слушаем: кто что делает» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет три строки записи, где сказано о каждом.",
        },
        {
          /* З2. ОДНО СЛОВО НА СЛУХ — A2 Key, с. 29. */
          id: "z2-zapisat-kogo-risuet-dana",
          kind: "short",
          about: "zapis-aygerim-zvonit-kimu",
          prompt: "ПИШЕТ РЕДАКТОР: условие — кого рисует Дана? Запиши одним английским словом.",
          answer: "bird",
          accept: ["a bird"],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2, урок «Слушаем: кто что делает» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку записи о Дане.",
        },
        {
          /* З3. Где говорящий. */
          id: "z3-vybrat-gde-kim",
          kind: "choice",
          about: "zapis-aygerim-zvonit-kimu",
          prompt: "ПИШЕТ РЕДАКТОР: условие — где сейчас Ким?",
          options: [{ text: "at home" }, { text: "in the park", correct: true }, { text: "at school" }],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3, урок «Слушаем: кто что делает» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет первую пару реплик записи.",
        },
        {
          /*
           * СЛОВАРЬ ПОСЛЕ ЗАДАНИЙ — нарочно: карточка `bird` печатает ответ З2.
           */
          id: "slova-uroka-10",
          kind: "vocab",
          caption: "Слово урока",
          items: [
            {
              term: "bird",
              translation: "птица",
              example: "The bird is in the garden.",
              hint: "/bɜːd/",
              znak: "1f426",
            },
          ],
        },
      ],
    },

    {
      /*
       * УРОК 11 — ГОВОРЕНИЕ. Замысел, 7.11.
       *
       * ОПОРА: Young Learners, с. 9, A1 Movers — «simple descriptions of
       * objects, pictures and actions»; формат — Movers Speaking Part 2, с. 50
       * («The man is talking. The children are eating.»).
       *
       * КАРТИНКА СОБРАНА ОТСТУПЛЕНИЕМ ОТ ЗАМЫСЛА, И ВОТ КАКИМ. Замысел просит
       * «ряд из четырёх значков, и у каждого русская подпись». В коде значок у
       * блока ОДИН (`znak`), а `znakov` повторяет тот же значок. Поэтому подписи
       * стоят строками объяснения, а значок того, о ком задание, — у самого
       * задания. Решения владельца от 8 сентября 2026 это не нарушает: угадывать
       * по картинке не надо, подпись стоит рядом.
       *
       * `children` — форма модуля 8, введена случаем урока «Свои формы»;
       * карточкой не берётся (замысел, 8.3).
       */
      slug: "govorim-chto-na-kartinke",
      title: "Говорим: что на картинке",
      estimatedMinutes: 10,
      outcome: "строить строки о том, кто что делает на картинке",

      vstuplenie:
        "ПИШЕТ РЕДАКТОР: вступление начинается СЦЕНОЙ. На картинке четыре человека и кошка, и " +
        "каждый занят своим.",

      blocks: [
        {
          id: "kartinka-chetyre-podpisi",
          kind: "explain",
          znak: "1f5bc",
          text: [
            "ПИШЕТ РЕДАКТОР: имя экрана — «Что на картинке».",
            "ПИШЕТ РЕДАКТОР: строка о том, что у каждой картинки есть русская подпись, а сказать " +
              "надо по-английски.",
            "ПИШЕТ РЕДАКТОР: подпись первой картинки — мужчина читает газету.",
            "ПИШЕТ РЕДАКТОР: подпись второй картинки — женщина у плиты готовит.",
            "ПИШЕТ РЕДАКТОР: подпись третьей картинки — кошка спит под столом.",
            "ПИШЕТ РЕДАКТОР: подпись четвёртой картинки — дети играют с мячом.",
          ],
        },
        {
          /* З1. ПРОИЗВЕСТИ. Подпись «мужчина читает газету». */
          id: "z1-vpisat-reading",
          kind: "gap",
          znak: "1f4f0",
          prompt: "ПИШЕТ РЕДАКТОР: условие — подпись «мужчина читает газету»; впиши глагол.",
          before: "The man is ",
          after: " a newspaper.",
          answer: "reading",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З1, урок «Говорим: что на картинке» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку The man is reading a newspaper.",
        },
        {
          /* З2. ПРОИЗВЕСТИ. Порядок задан условием: начать с The cat. */
          id: "z2-sobrat-stroku-o-koshke",
          kind: "order",
          znak: "1f408",
          prompt:
            "ПИШЕТ РЕДАКТОР: условие — подпись «кошка спит под столом»; собери строку, начни с The cat.",
          items: ["under", "the table.", "is sleeping", "The cat"],
          answer: [3, 2, 0, 1],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З2, урок «Говорим: что на картинке» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет строку The cat is sleeping under the table.",
        },
        {
          /* З3. УЗНАТЬ. Неверные: форма об одном и строка без формы be. */
          id: "z3-vybrat-stroku-o-detyah",
          kind: "choice",
          znak: "1f9d2",
          znakov: 2,
          prompt: "ПИШЕТ РЕДАКТОР: условие — подпись «дети играют с мячом»; отметь строку без ошибки.",
          options: [
            { text: "The children are playing.", correct: true },
            { text: "The children is playing." },
            { text: "The children playing." },
          ],
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З3, урок «Говорим: что на картинке» — дорога, а не ответ.",
          why:
            "ПИШЕТ РЕДАКТОР: разбор называет верную строку; во второй форма об одном, в третьей " +
            "нет формы be.",
        },
        {
          /* З4. ОПИСАТЬ ВСЮ КАРТИНКУ. Один голос: это не разговор. */
          id: "z4-skazat-chetyre-stroki-o-kartinke",
          kind: "speak",
          prompt: "ПИШЕТ РЕДАКТОР: условие — скажи четыре строки о картинке: кто что делает.",
          phrase:
            "The man is reading. The woman is cooking. The cat is sleeping. The children are playing.",
          translation: "ПИШЕТ РЕДАКТОР: перевод образца из четырёх строк о картинке.",
          hint: "ПИШЕТ РЕДАКТОР: подсказка к З4, урок «Говорим: что на картинке» — дорога, а не ответ.",
          why: "ПИШЕТ РЕДАКТОР: разбор называет образец из четырёх строк о картинке и формулу самопроверки уговора 8.1.",
        },
      ],
    },
  ],

  /*
   * РАБОТА МОДУЛЯ — двенадцать вопросов, редакция 14.3 замысла (она ЗАМЕНЯЕТ
   * таблицу 6.2). Работа написана ПЕРВОЙ, до заданий уроков.
   *
   * ПРОИЗВОДЯТ ОТВЕТ 7 ИЗ 12 — вопросы 1, 3, 4, 7, 8, 9, 12 (`PRODUCTIVE_KINDS`).
   *
   * ИТОГИ УРОКОВ ПОКРЫТЫ ВСЕ ОДИННАДЦАТЬ: 1 — в.6; 2 — в.8; 3 — в.4 и в.5; 4 —
   * в.2; 5 — в.1; 6 — в.7; 7 — в.3; 8 — в.9; 9 — в.10; 10 — в.11; 11 — в.12.
   *
   * МЕСТА ВЕРНЫХ ОТВЕТОВ РАССТАВЛЕНЫ СБОРЩИКОМ (замысел, 14.3: в нём верный
   * записан первым только для чтения).
   *
   * ПОДСКАЗОК У ВОПРОСОВ РАБОТЫ НЕТ: `hint` до ученика не доходит, и
   * `check:content` его запрещает.
   *
   * ЧЕГО РАБОТА НЕ БЕРЁТ (замысел, 6.1, с датой 17 сентября 2026): сборку из
   * кусков; «соедини человека с действием»; «выпиши имя из записи»; вопрос на
   * слух «запиши одно слово»; «ученик написал — запиши без ошибки».
   */
  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      {
        /*
         * ВОПРОС 1. Итог урока 5. ПРАВКА 14.3 (Н3): работа спрашивает одежду.
         * Действие — пересказать чужую строку о себе в третьем лице.
         */
        id: "q1-pereskazat-o-dane-v-tretem-lice",
        kind: "short",
        outcome: "говорить, что надето на человеке: is wearing и название одежды",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — Дана пишет Алиму из магазина: I am wearing a new dress. " +
          "Алим рассказывает брату, что на Дане; запиши его строку.",
        answer: "Dana is wearing a new dress.",
        accept: [
          "She is wearing a new dress.",
          "Dana is in a new dress.",
          "She is in a new dress.",
          "Dana's wearing a new dress.",
          "She's wearing a new dress.",
          "Dana's in a new dress.",
          "She's in a new dress.",
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет строку Dana is wearing a new dress. и говорит, почему " +
          "am сменилось на is.",
      },
      {
        /*
         * ВОПРОС 2. Итог урока 4. Обе неверные: `She sleeps.` верна по-английски,
         * но о сейчас не говорит, а условие называет «сейчас» печатно;
         * `She is sleep.` — ошибка, названная модулем 13.
         */
        id: "q2-vybrat-stroku-o-seychas",
        kind: "choice",
        outcome:
          "различать строку о том, что бывает каждый день, и строку о том, что идёт сейчас",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — Айгерим учительница; сегодня выходной, и сейчас она спит. " +
          "Отметь строку о том, что она делает сейчас.",
        options: [
          { text: "She sleeps." },
          { text: "She is sleep." },
          { text: "She is sleeping.", correct: true },
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет верную строку; первая говорит о привычном деле, вторая " +
          "написана с ошибкой.",
      },
      {
        /* ВОПРОС 3. Итог урока 7. Короткий ответ по прочитанной записке. */
        id: "q3-otvetit-korotko-o-dane",
        kind: "short",
        outcome: "спрашивать, делает ли человек это сейчас, и коротко отвечать",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — Дана оставила записку: I am in the park. I am walking. Папа " +
          "спрашивает: Is Dana sleeping? Ответь коротко.",
        answer: "No, she isn't.",
        accept: ["No, she is not.", "No, she's not."],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет ответ No, she isn't. и говорит, по какой строке записки " +
          "это видно.",
      },
      {
        /*
         * ВОПРОС 4. Итог урока 3. Глагол run назван правилом случая 3 урока 3, а
         * форма `running` не напечатана нигде в модуле.
         */
        id: "q4-vpisat-running",
        kind: "gap",
        outcome: "писать форму на -ing у глаголов, где написание меняется",
        prompt: "ПИШЕТ РЕДАКТОР: условие — впиши глагол run в нужной форме.",
        before: "My brothers are ",
        after: " in the park.",
        answer: "running",
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку My brothers are running in the park. и правило.",
      },
      {
        /*
         * ВОПРОС 5. Итог урока 3. Варианты названы методистом дословно (14.3):
         * обе неверные — ошибки учеников, обе требуют английского.
         */
        id: "q5-nazvat-oshibku-v-rideing",
        kind: "choice",
        outcome: "писать форму на -ing у глаголов, где написание меняется",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — в сообщении стоит Dana is rideing a bike. Отметь, что здесь " +
          "не так.",
        options: [
          { text: "-ing здесь лишнее, надо Dana is ride a bike" },
          { text: "у ride перед -ing пропадает e", correct: true },
          { text: "перед -ing надо удвоить d: ridding" },
        ],
        why: "ПИШЕТ РЕДАКТОР: разбор называет верное написание и правило случая 2 урока «Как пишется».",
      },
      {
        /*
         * ВОПРОС 6. Итог урока 1. Найти в чужом сообщении глагол без -ing.
         * ПРАВКА 14.3 (Н11): рассказчик и люди другие, чем в сцене урока 2.
         *
         * ОТМЕЧАТЬ МОЖНО КАЖДОЕ СЛОВО, КРОМЕ АРТИКЛЯ И ПРЕДЛОГА, — как в уроках
         * модулей 13 и 16: иначе задание проходится выделением всего подряд.
         */
        id: "q6-otmetit-glagol-bez-ing",
        kind: "hottext",
        outcome: "говорить о себе, что делаешь сейчас: I am reading",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — отметь в сообщении Нурлана слово, где пропало окончание -ing.",
        parts: [
          { text: "My ", selectable: true },
          { text: "sister ", selectable: true },
          { text: "is ", selectable: true },
          { text: "reading ", selectable: true },
          { text: "a " },
          { text: "magazine", selectable: true },
          { text: ".\n" },
          { text: "I ", selectable: true },
          { text: "am ", selectable: true },
          { text: "sit ", selectable: true, correct: true },
          { text: "in the " },
          { text: "garden", selectable: true },
          { text: ".\n" },
          { text: "Our ", selectable: true },
          { text: "dog ", selectable: true },
          { text: "is ", selectable: true },
          { text: "playing", selectable: true },
          { text: "." },
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет слово sit, говорит, какой должна быть строка, и почему " +
          "две другие строки верны.",
      },
      {
        /*
         * ВОПРОС 7. Итог урока 6. ПРАВКА 14.3: глагол сменён на dancing — строка
         * `She is drawing a bird.` стоит в записи урока 10.
         *
         * `No, she isn't.` ПРИНИМАЕТСЯ: он сам говорит «не готовит», и наказывать
         * за правоту нельзя.
         */
        id: "q7-zapisat-dve-stroki-ob-aygerim",
        kind: "short",
        outcome:
          "говорить, что человек сейчас этого не делает: isn't и aren't с глаголом на -ing",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — мама спрашивает: Is Aigerim cooking? Айгерим не готовит, она " +
          "танцует. Напиши две строки: сначала что она не готовит, потом что делает.",
        answer: "She isn't cooking. She is dancing.",
        accept: [
          "She is not cooking. She is dancing.",
          "She's not cooking. She's dancing.",
          "She isn't cooking. She's dancing.",
          "Aigerim isn't cooking. She is dancing.",
          "No, she isn't. She is dancing.",
          "No, she isn't. She's dancing.",
          "No, she's not. She's dancing.",
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет обе строки и говорит, что короткий ответ вместо первой " +
          "строки тоже верен.",
      },
      {
        /* ВОПРОС 8. Итог урока 2. Форма be при двух именах. */
        id: "q8-vpisat-are-pri-dvuh-imenah",
        kind: "gap",
        outcome:
          "говорить, что сейчас делает другой человек или несколько людей: is и are с глаголом на -ing",
        prompt: "ПИШЕТ РЕДАКТОР: условие — впиши форму be в строку о Дане и Айгерим.",
        before: "Dana and Aigerim ",
        after: " swimming now.",
        answer: "are",
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет строку Dana and Aigerim are swimming now. и почему здесь are.",
      },
      {
        /*
         * ВОПРОС 9. Итог урока 8. Восстановить вопрос по ответу — действие, какого
         * в уроках нет (там вопрос составляют по ситуации).
         */
        id: "q9-vosstanovit-vopros-po-otvetu",
        kind: "short",
        outcome: "спрашивать, что человек делает сейчас, и отвечать на такой вопрос",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — Дана ответила о брате: He is drawing. Запиши вопрос со словом " +
          "What, на который она отвечала.",
        answer: "What is your brother doing?",
        accept: [
          "What is he doing?",
          "What is your brother doing now?",
          "What is he doing now?",
          "What's your brother doing?",
          "What's he doing?",
          "What's your brother doing now?",
          "What's he doing now?",
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет вопрос What is your brother doing? и говорит, что вопрос " +
          "о нём же со словом he тоже верен.",
      },
      {
        /*
         * ВОПРОС 10. Итог урока 9. ПРАВКА 14.3 (Н9): отметить строку о том, что
         * жена делает СЕЙЧАС. `I work in an office` о сейчас не говорит, `It is
         * the weekend.` не о действии.
         */
        id: "q10-otmetit-stroku-o-zhene",
        kind: "hottext",
        outcome: "находить в сообщении, кто что делает сейчас",
        prompt: "ПИШЕТ РЕДАКТОР: условие — отметь строку о том, что жена сейчас делает.",
        parts: [
          { text: "I work in an office.\n", selectable: true },
          { text: "It is the weekend.\n", selectable: true },
          { text: "I am cleaning the flat.\n", selectable: true },
          { text: "My wife teaches at a school.\n", selectable: true },
          { text: "Now she is reading.", selectable: true, correct: true },
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет строку Now she is reading. и говорит, почему строка о " +
          "школе о сейчас не говорит.",
      },
      {
        /*
         * ВОПРОС 11. Итог урока 10. Разговор на два голоса: первым говорит Ким
         * (мужской), отвечает Дана (женский).
         *
         * ОТВЕТ РЯДОМ НЕ НАПЕЧАТАН: в условии нет ни «моет», ни «машина».
         * Варианты напечатаны законно — это выбор из трёх, а правило «одно слово»
         * (A2 Key, с. 29) касается письменного ответа.
         */
        id: "q11-na-sluh-chto-delaet-dana",
        kind: "choice",
        outcome: "понимать на слух, что сейчас делает человек",
        zvuk: "Hi, Dana! Are you at home? — Yes, I am. I am washing my car.",
        pervyyGolos: "muzhskoy",
        prompt: "ПИШЕТ РЕДАКТОР: условие — отметь, что Дана делает сейчас.",
        options: [
          { text: "washing", correct: true },
          { text: "driving" },
          { text: "sleeping" },
        ],
        why: "ПИШЕТ РЕДАКТОР: разбор называет строку записи, где Дана говорит о себе.",
      },
      {
        /*
         * ВОПРОС 12. Итог урока 11. ПРАВКА 14.3 (Н10, Н12): строка разворачивается
         * из начальных форм, а условие прямо говорит «прямо сейчас».
         */
        id: "q12-sostavit-stroku-o-kartinke",
        kind: "short",
        outcome: "строить строки о том, кто что делает на картинке",
        prompt:
          "ПИШЕТ РЕДАКТОР: условие — на картинке Айгерим и Нурлан прямо сейчас играют в саду. " +
          "Составь строку о картинке из слов Aigerim and Nurlan, play, in the garden.",
        answer: "Aigerim and Nurlan are playing in the garden.",
        accept: [
          "Aigerim and Nurlan are playing in the garden now.",
          "Now Aigerim and Nurlan are playing in the garden.",
          "Now, Aigerim and Nurlan are playing in the garden.",
        ],
        why:
          "ПИШЕТ РЕДАКТОР: разбор называет строку и говорит, почему при двух именах стоит are.",
      },
    ],
  },
};

export default modul;
