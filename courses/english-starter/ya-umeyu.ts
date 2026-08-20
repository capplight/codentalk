import type { Module } from "@/lib/content/types";

/**
 * Модуль 19 курса «Английский с нуля»: я умею.
 *
 * Программа: docs/programma-english-starter.md, модуль 19 — «говорить об
 * умениях, просить и предлагать»; грамматика: `can` в утверждении, вопросе и
 * отрицании; умение, просьба, предложение, возможность.
 *
 * ГЛАВНАЯ ОПАСНОСТЬ МОДУЛЯ. Пять модулей подряд ученик приделывал к глаголу
 * то одно, то другое: `-s` о третьем человеке (модуль 14), `don't` в отрицании
 * (модуль 15), `do` в вопросе (модуль 16), `-ing` о происходящем (модуль 18).
 * Здесь всё это разом отменяется: после `can` глагол стоит голым, `can` не
 * берёт `-s`, отрицает `not`, а вопрос строится без `do`.
 *
 * Поэтому отмена в каждом уроке говорится прямо и с оглядкой на прежний
 * модуль, а не подразумевается. Ошибки `He cans play`, `He can plays`,
 * `I don't can swim`, `Do you can swim?`, `I can to swim`, `I can swimming`
 * ученики делают настоящим образом — они и стоят в заданиях неверными
 * вариантами.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Сам `can` целиком стоит на A1 — все семь
 * записей. Но два оборота модуля на A1 не стоят, и первая редакция шапки
 * утверждала обратное. Нашёл методист, исправлено:
 *
 * — ВОПРОС `What can you do?` (урок 5) — A2, QUESTIONS wh-, «FORM: MODAL
 *   VERBS»: «Can use 'wh-'words + modal verbs + subject + main verb to form
 *   'wh-'questions», пример источника — «What will you bring?». Взят сверх
 *   ступени по тому же основанию, что вопрос в модулях 16 и 18: курс, который
 *   учит отвечать и отнимает вопрос, оставляет ученика с половиной умения.
 * — БЕЗЛИЧНОЕ `you` (урок 6, «You can buy milk here») — A2, PRONOUNS generic
 *   use, «USE: 'YOU', GENERAL»: «Can use 'you' to refer to people in general»,
 *   пример источника — «You can play games, you can take pictures». Графы
 *   между собой не согласны: A1-строка «USE: POSSIBILITY» сама содержит «There
 *   you can find milk…», то есть безличное you в ней уже есть. Держим A1-строку
 *   как основание урока, а расхождение объявляем здесь.
 *
 * 1. English Grammar Profile, MODALITY can, ступень A1 у всех семи записей:
 *    — «FORM: AFFIRMATIVE» — «Can use the affirmative form», пример источника:
 *      «You can see a lot of special places in Wroclaw»;
 *    — «FORM: QUESTION» — «Can use the affirmative question form», пример:
 *      «Can you come for dinner Monday at 6.00 pm?»;
 *    — «FORM: NEGATIVE» — «Can use the negative forms», пример:
 *      «I cannot come to see you»;
 *    — «USE: ABILITY» — «Can use 'can' to talk about ability to do something»,
 *      пример: «I can cook»;
 *    — «USE: REQUESTS» — «Can use 'can' to make a request», пример:
 *      «Can you come on Sunday at seven o'clock?»;
 *    — «USE: OFFERS» — «Can use 'can' to make an offer», пример:
 *      «Can I help you?»;
 *    — «USE: POSSIBILITY» — «Can use 'can' to talk about possibility», пример:
 *      «The shop is next to the post office. There you can find milk, juices
 *      and sweets but you can't buy meat».
 *
 * 2. Cambridge, руководство для молодых учеников, список грамматики Pre A1
 *    Starters, с. 29 — две отдельные строки: «Can for ability — The baby can
 *    wave» и «Can for requests/permission — Can I have some birthday cake?».
 *    Это подтверждение с другой стороны: ступень ниже A1, а умение то же.
 *
 * 3. Слова модуля — Oxford 3000, все A1: can (can1 modal v. A1), cannot
 *    (cannot v. A1), ride, draw, run, guitar, milk, bread. Уже введены раньше:
 *    swim, cook, drive (модуль 15), play, speak, help, football (модуль 14),
 *    buy (модуль 15).
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — МЕСТОИМЕНИЙ-ДОПОЛНЕНИЙ (`help me`, `ask him`). Они идут в модуле 20, и
 *   брать их здесь незачем: просьба живёт и без них — «Can you help?»,
 *   «Can I help you?», «Can I have some bread?». Слово `you` в этих оборотах
 *   выглядит так же, как подлежащее, новой формы ученик не встречает.
 * — РАЗРЕШЕНИЯ КАК ОТДЕЛЬНОГО УРОКА («Can I go?»). Источник соединяет просьбу
 *   и разрешение в одну строку, и модуль делает так же: `Can I…?` показано
 *   как предложение помощи и как просьба дать вещь.
 * — ВЕЖЛИВЫХ ОБОРОТОВ `could` И `would like`. Первого нет на этой ступени,
 *   второй идёт в модуле 21.
 *
 * УСЛОВНОСТЬ ЗАПИСИ, НОВАЯ ДЛЯ КУРСА. В слове guitar впервые встречается звук
 * /g/. В `ipa-en-uk.txt` он записан знаком `g`, в словарях — обычной буквой
 * `g`. Держим словарную запись — по тому же основанию, что `r` вместо `ɹ` и
 * `e` вместо `ɛ`. Записано в CLAUDE.md.
 *
 * ПРОИЗНОШЕНИЕ can и can't. Гласный в них разный: /kæn/ и /kɑːnt/. Это не
 * мелочь — на слух отрицание узнаётся именно по гласному, потому что конечное
 * `t` в беглой речи почти пропадает. Урок 3 говорит об этом отдельно.
 */
const module: Module = {
  slug: "ya-umeyu",
  title: "Я умею",
  outcomes: [
    "говорить, что умеешь: I can swim",
    "говорить, что умеет другой человек: He can drive",
    "говорить, чего не умеешь: I can't swim",
    "спрашивать об умении и коротко отвечать: Can you swim? Yes, I can.",
    "спрашивать, что человек умеет: What can you do?",
    "говорить о возможности: You can buy milk here",
    "просить и предлагать: Can you help? Can I have your pen?",
    "рассказывать, что умеешь и чего не умеешь",
    "понимать по объявлению, что нужно уметь и что там можно",
    "слышать разницу между can и can't и понимать просьбу",
  ],
  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, MODALITY can, «FORM: AFFIRMATIVE»: «Can use the affirmative form». " +
        "A1, MODALITY can, «FORM: QUESTION»: «Can use the affirmative question form». " +
        "A1, MODALITY can, «FORM: NEGATIVE»: «Can use the negative forms». " +
        "A1, MODALITY can, «USE: ABILITY»: «Can use 'can' to talk about ability to " +
        "do something», пример источника — «I can cook». " +
        "A1, MODALITY can, «USE: REQUESTS»: «Can use 'can' to make a request», " +
        "пример источника — «Can you come on Sunday at seven o'clock?». " +
        "A1, MODALITY can, «USE: OFFERS»: «Can use 'can' to make an offer», " +
        "пример источника — «Can I help you?». " +
        "A1, MODALITY can, «USE: POSSIBILITY»: «Can use 'can' to talk about " +
        "possibility». " +
        "Все семь записей про сам can стоят на A1. " +
        "A2, QUESTIONS wh-, «FORM: MODAL VERBS»: «Can use 'wh-'words + modal " +
        "verbs + subject + main verb to form 'wh-'questions», пример источника — " +
        "«What will you bring?» — это вопрос What can you do? из урока 5, взят " +
        "сверх ступени и объявлен в шапке. " +
        "A2, PRONOUNS generic use, «USE: 'YOU', GENERAL»: «Can use 'you' to " +
        "refer to people in general», пример источника — «You can play games, you " +
        "can take pictures» — это безличное you из урока 6. При этом A1-строка " +
        "«USE: POSSIBILITY» сама содержит «There you can find milk…»: графы между " +
        "собой не согласны, и расхождение объявлено в шапке. " +
        "ПЕРВАЯ РЕДАКЦИЯ утверждала, что модуль не берёт ничего сверх A1. Оба " +
        "оборота нашёл методист.",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "Pre A1 Starters, список грамматики, с. 29: «Can for ability» с примером " +
        "«The baby can wave» и «Can for requests/permission» с примером «Can I have " +
        "some birthday cake?». Ступень ниже A1, а умение то же — подтверждение с " +
        "другой стороны.",
    },
    {
      ref: "Oxford 3000",
      section:
        "can1 modal v. A1; cannot v. A1; ride v. A1; draw v. A1; run v. A1; " +
        "guitar n. A1; milk n. A1; bread n. A1. Уже введены раньше: swim, cook, " +
        "drive, buy (модуль 15), play, speak, help (модуль 14).",
    },
    {
      // Модуль говорит о вежливости в двух местах — про please и про ответ на
      // предложение помощи, — а ссылки на разобранное не имел: она стояла только
      // у модуля 22, хотя утверждение то же самое. Нашёл методист.
      ref: "docs/istochniki-vezhlivost.md",
      section:
        "слово please смягчает: Grammarly — «You can make imperative sentences sound " +
        "a little softer in tone by adding the word please». " +
        "Отказ: Longman, статья «no, thank you» — «used to say politely that you do " +
        "not want something». Отсюда ответ «No, thank you» на предложение помощи в " +
        "уроке 7: он вежливый и не повторяет can, потому что отказываются не от " +
        "умения, а от самой помощи.",
      license: "открытые источники, ссылки в файле",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ya-umeyu-can",
      title: "Я умею: I can swim",
      estimatedMinutes: 13,
      outcome: "говорить, что умеешь: I can swim",

      blocks: [
        {
          id: "zachem-umenie",
          kind: "explain",
          text: [
            "Тебя спрашивают, чем ты занимаешься летом. Ты плаваешь — но не в эту " +
              "минуту и не каждый день. Ты просто это умеешь.",
            "Для такого случая перед глаголом ставят слово can: I can swim.",
            "Can не переводится отдельным словом. Оно всегда стоит перед другим " +
              "глаголом и добавляет к нему «умею».",
          ],
        },
        {
          id: "tablica-umeniya",
          kind: "table",
          caption: "Три умения",
          zvuchat: ["I can swim.", "I can cook.", "I can drive.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["I can swim.", "Я умею плавать."],
            ["I can cook.", "Я умею готовить."],
            ["I can drive.", "Я умею водить машину."],
          ],
        },
        {
          id: "glagol-posle-can",
          kind: "explain",
          text: [
            "После can глагол стоит в том виде, в каком он записан в словаре урока.",
            "Ничего к нему не приделывается: ни окончания, ни лишнего слова.",
            "I can swim — и всё. Не I can swimming и не I can to swim.",
          ],
        },
        {
          id: "ne-dva-slova",
          kind: "note",
          tone: "mistake",
          text:
            "«I can to swim» — так не говорят.\n\nСлово to сюда не приходит: can " +
            "и без него соединяется с глаголом напрямую.",
        },
        {
          id: "primer-umeniya",
          kind: "example",
          caption: "Что человек умеет",
          zvuchat: ["I can swim.", "I can ride a bike.", "I can speak English.",
          ],
          text: "I can swim.\nI can ride a bike.\nI can speak English.",
          explain:
            "Во всех трёх can стоит перед глаголом, а глагол — без окончания. " +
            "После глагола идёт всё остальное: a bike, English.",
        },
        // Запись убрана: все три умения звучат в таблице выше.
        {
          id: "slovar-umeniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "can", translation: "уметь, мочь", example: "I can swim.", hint: "/kæn/" },
            { term: "ride", translation: "ездить верхом или на велосипеде", example: "I can ride a bike.", hint: "/raɪd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-can",
          kind: "gap",
          prompt: "Ты умеешь готовить. Допиши недостающее слово.",
          before: "I ",
          after: " cook.",
          answer: "can",
          hint: "Оно встаёт перед глаголом и добавляет «умею».",
          why: "I can cook. Слово can стоит перед глаголом, а глагол — без окончания.",
        },
        {
          id: "z2-vybrat-can",
          kind: "choice",
          prompt: "Ты умеешь плавать. В каком предложении нет ошибки?",
          options: [
            { text: "I can to swim." },
            { text: "I can swimming." },
            { text: "I can swim.", correct: true },
          ],
          hint: "После can глагол стоит так, как записан в словаре.",
          why:
            "I can swim. Слово to сюда не приходит, и окончание -ing тоже: после can " +
            "глагол стоит без добавок.",
        },
        {
          id: "z3-otmetit-lishnee-posle-can",
          kind: "hottext",
          prompt: "Отметь записи, где после can стоит лишнее.",
          parts: [
            { text: "I can drive.", selectable: true },
            { text: " · " },
            { text: "I can to drive.", selectable: true, correct: true },
            { text: " · " },
            { text: "I can cooking.", selectable: true, correct: true },
            { text: " · " },
            { text: "I can cook.", selectable: true },
          ],
          hint: "Лишним бывает и слово to, и окончание -ing.",
          why:
            "В «I can to drive» лишнее слово to, в «I can cooking» — окончание -ing. " +
            "Верно: I can drive, I can cook.",
        },
        {
          id: "z4-sobrat-umenie",
          kind: "order",
          prompt: "Собери предложение: «Я умею кататься на велосипеде.»",
          items: ["a bike", "can", "I", "ride"],
          answer: [2, 1, 3, 0],
          hint: "Сначала I, потом can, потом глагол.",
          why: "I can ride a bike. Can стоит перед глаголом, а всё остальное — после.",
        },
        {
          id: "z5-napisat-umenie",
          kind: "short",
          prompt: "Напиши, что ты умеешь водить машину. Водить — drive, машина — a car.",
          answer: "I can drive.",
          // «Водить машину» по-английски говорят и без слова car, и с ним.
          accept: ["I can drive a car."],
          hint: "Can стоит перед глаголом.",
          why: "I can drive. Годится и полное I can drive a car — оба сказаны верно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-umeet",
      title: "Он умеет: He can drive",
      estimatedMinutes: 13,
      outcome: "говорить, что умеет другой человек: He can drive",

      blocks: [
        {
          id: "zachem-o-drugom-umenie",
          kind: "explain",
          text: [
            "Теперь то же самое о другом человеке: твоя сестра умеет водить машину.",
            // Пример «she drives» был приписан модулю 14, а глагола drive там нет
            // вовсе: он вводится в модуле 15 и только в отрицании. Нашёл методист.
            "В модуле «Что я делаю» глагол о третьем человеке брал окончание -s: " +
              "she lives.",
            "С can этого не происходит. Окончания нет ни у can, ни у глагола после " +
              "него: She can drive.",
          ],
        },
        {
          id: "tablica-can-po-licam",
          kind: "table",
          caption: "Can у всех одинаковое",
          // Столбец с местоимениями отдельных кнопок не получает: урок здесь о том,
          // что can у всех одинаковое, — это и слышно в предложениях.
          zvuchat: ["I can swim.", "She can swim.", "They can swim.",
          ],
          head: ["О ком", "Пример"],
          rows: [
            ["I", "I can swim."],
            ["he, she", "She can swim."],
            ["we, they", "They can swim."],
          ],
        },
        {
          id: "can-ne-menyaetsya",
          kind: "explain",
          text: [
            "Строка таблицы одна и та же для всех: can не меняется никогда.",
            "Это первое слово в курсе, которое ведёт себя так. Форма be менялась " +
              "(am, is, are), глагол брал -s — а can стоит как стоит.",
            "Значит и запоминать тут нечего: одна форма годится для всех.",
          ],
        },
        {
          id: "ne-cans",
          kind: "note",
          tone: "mistake",
          text:
            "«He cans play» и «He can plays» — так не говорят.\n\nОкончание -s не " +
            "приходит ни к can, ни к глаголу после него. Верно: He can play.",
        },
        {
          id: "primer-o-drugom-umenie",
          kind: "example",
          caption: "Что умеют другие",
          zvuchat: ["She can drive.", "My brother can play football.",
            "They can speak English.",
          ],
          text: "She can drive.\nMy brother can play football.\nThey can speak English.",
          explain:
            "Во всех трёх can стоит без окончания, и глагол после него — тоже. " +
            "Меняется только то, о ком речь.",
        },
        // Запись убрана: все предложения звучат в таблице выше и в примере под ней.
        {
          id: "slovar-o-drugom-umenie",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "draw", translation: "рисовать", example: "My sister can draw.", hint: "/drɔː/" },
            { term: "run", translation: "бегать", example: "He can run.", hint: "/rʌn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-can-o-drugom",
          kind: "gap",
          prompt: "Твоя сестра умеет рисовать. Допиши недостающее слово.",
          before: "My sister ",
          after: " draw.",
          answer: "can",
          hint: "Оно одинаково для всех.",
          why: "My sister can draw. Can не берёт окончания ни с he, ни с she, ни с именем.",
        },
        {
          id: "z2-vybrat-can-o-drugom",
          kind: "choice",
          prompt: "Твой брат умеет играть в футбол. В каком предложении нет ошибки?",
          options: [
            { text: "My brother cans play football." },
            { text: "My brother can play football.", correct: true },
            { text: "My brother can plays football." },
          ],
          hint: "Окончание -s здесь не нужно нигде.",
          why:
            "My brother can play football. Окончание -s не приходит ни к can, ни к " +
            "глаголу после него.",
        },
        {
          id: "z3-otmetit-lishnee-s-can",
          kind: "hottext",
          prompt: "Отметь записи с лишним окончанием -s.",
          parts: [
            { text: "She can cook.", selectable: true },
            { text: " · " },
            { text: "She cans cook.", selectable: true, correct: true },
            { text: " · " },
            { text: "He can runs.", selectable: true, correct: true },
            { text: " · " },
            { text: "He can run.", selectable: true },
          ],
          hint: "Смотри и на can, и на глагол после него.",
          why:
            "В «She cans cook» окончание попало на can, в «He can runs» — на глагол. " +
            "Верно: She can cook, He can run.",
        },
        {
          id: "z4-perestroit-na-sestru",
          kind: "short",
          prompt: "Скажи то же самое о сестре: I can swim. Сестра — my sister.",
          answer: "My sister can swim.",
          hint: "Меняется только то, о ком речь.",
          why: "My sister can swim. Can осталось прежним, глагол тоже.",
        },
        {
          id: "z5-sobrat-o-drugom-umenie",
          kind: "order",
          prompt: "Собери предложение: «Он умеет говорить по-английски.»",
          items: ["speak", "He", "English", "can"],
          answer: [1, 3, 0, 2],
          hint: "Вторым идёт can, третьим — глагол.",
          why: "He can speak English. Порядок тот же, что и с I.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ya-ne-umeyu",
      title: "Я не умею: I can't swim",
      estimatedMinutes: 13,
      outcome: "говорить, чего не умеешь: I can't swim",

      blocks: [
        {
          id: "zachem-otricanie-umeniya",
          kind: "explain",
          text: [
            "Рассказ о себе неполон, пока не сказано и обратное: чего ты не умеешь.",
            "Отрицает здесь слово not, и встаёт оно сразу после can.",
            "Но пишут почти всегда короче — can't: I can't swim.",
          ],
        },
        {
          id: "tablica-otricanie-umeniya",
          kind: "table",
          caption: "Умею и не умею",
          zvuchat: ["I can swim.", "I can't swim.", "She can't drive.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["I can swim.", "Я умею плавать."],
            ["I can't swim.", "Я не умею плавать."],
            ["She can't drive.", "Она не умеет водить машину."],
          ],
        },
        {
          id: "cannot-odnim-slovom",
          kind: "explain",
          text: [
            "У полной записи есть особенность: can и not сливаются в одно слово — " +
              "cannot.",
            "Так только здесь. У остальных слов полная запись из двух: is not, " +
              "do not.",
            "В разговоре и в письме другу берут короткую запись can't, полная нужна " +
              "редко.",
          ],
        },
        {
          id: "ne-dont-can",
          kind: "note",
          tone: "mistake",
          text:
            "«I don't can swim» — так не говорят.\n\nСлово don't при can не нужно: " +
            "отрицает сам can. Верно: I can't swim.",
        },
        {
          id: "primer-otricaniya-umeniya",
          kind: "example",
          caption: "Чего человек не умеет",
          zvuchat: ["I can't drive.", "My brother can't cook.", "They can't speak English.",
          ],
          text: "I can't drive.\nMy brother can't cook.\nThey can't speak English.",
          explain:
            "Во всех трёх стоит can't, а глагол после него — без окончания, как и в " +
            "утверждении.",
        },
        // Запись убрана: и can, и can't звучат в таблице выше.
        {
          id: "glasnyy-v-cant",
          kind: "note",
          tone: "info",
          text:
            "На слух can и can't различаются гласным: /kæn/ и /kɑːnt/.\n\nЗвук /ɑː/ " +
            "длиннее и глубже. Опираться на конечное t не стоит: в быстрой речи его " +
            "почти не слышно.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-cant",
          kind: "gap",
          prompt: "Ты не умеешь водить машину. Допиши недостающее слово.",
          before: "I ",
          after: " drive.",
          answer: "can't",
          accept: ["cannot"],
          hint: "Короткая запись из can и not.",
          why: "I can't drive. Годится и полная запись I cannot drive.",
        },
        {
          id: "z2-vybrat-otricanie-umeniya",
          kind: "choice",
          prompt: "Она не умеет плавать. В каком предложении нет ошибки?",
          options: [
            { text: "She doesn't can swim." },
            { text: "She can't swim.", correct: true },
            { text: "She can't swims." },
          ],
          hint: "Отрицает сам can, а глагол после него — без окончания.",
          why:
            "She can't swim. Слово doesn't при can не нужно, и окончание -s глаголу " +
            "тоже не нужно.",
        },
        {
          id: "z3-otmetit-dont-can",
          kind: "hottext",
          prompt: "Отметь записи, где отрицание построено не тем словом.",
          parts: [
            { text: "I can't cook.", selectable: true },
            { text: " · " },
            { text: "I don't can cook.", selectable: true, correct: true },
            { text: " · " },
            { text: "He doesn't can drive.", selectable: true, correct: true },
            { text: " · " },
            { text: "He can't drive.", selectable: true },
          ],
          hint: "При can отрицает сам can, а не don't и не doesn't.",
          why:
            "Don't и doesn't при can не нужны. Верно: I can't cook, He can't drive.",
        },
        {
          id: "z4-koroche-cannot",
          kind: "short",
          prompt: "Запиши короче: I cannot draw.",
          answer: "I can't draw.",
          hint: "Cannot сливается в одно короткое слово.",
          why: "I can't draw. Полная запись cannot и короткая can't значат одно и то же.",
        },
        {
          id: "z5-napisat-otricanie-umeniya",
          kind: "short",
          prompt: "Напиши, что ты не умеешь готовить. Готовить — cook.",
          answer: "I can't cook.",
          accept: ["I cannot cook."],
          hint: "После can't глагол стоит без окончания.",
          why: "I can't cook. Или полностью: I cannot cook.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "umeesh-li-ty",
      title: "Умеешь ли ты: Can you swim?",
      estimatedMinutes: 13,
      outcome: "спрашивать об умении и коротко отвечать: Can you swim? Yes, I can.",

      blocks: [
        {
          id: "zachem-vopros-umenie",
          kind: "explain",
          text: [
            "Ты знакомишься с человеком и хочешь узнать, умеет ли он плавать.",
            "Вопрос строится так: can выходит вперёд. Can you swim?",
            "Это тот же приём, что с формой be: Are you a doctor? Слово do здесь не " +
              "нужно.",
          ],
        },
        {
          id: "tablica-vopros-umenie",
          kind: "table",
          caption: "Утверждение и вопрос",
          zvuchat: ["You can swim.", "Can you swim?", "Can your brother drive?",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["You can swim.", "Ты умеешь плавать."],
            ["Can you swim?", "Ты умеешь плавать?"],
            ["Can your brother drive?", "Твой брат умеет водить машину?"],
          ],
        },
        {
          id: "korotkiy-otvet-can",
          kind: "explain",
          text: [
            "Отвечают коротко: Yes, I can. No, I can't.",
            "Глагол в коротком ответе не повторяют — хватает самого can.",
            "О другом человеке так же: Yes, she can. No, she can't.",
          ],
        },
        {
          id: "ne-do-you-can",
          kind: "note",
          tone: "mistake",
          text:
            "«Do you can swim?» — так не говорят.\n\nВперёд выходит сам can, и " +
            "второе слово для вопроса не нужно. Верно: Can you swim?",
        },
        {
          id: "primer-voprosa-umenie",
          kind: "example",
          caption: "Короткий разговор",
          razgovor: true,
          text: "— Can you swim?\n— Yes, I can.\n— Can you drive?\n— No, I can't.",
          explain:
            "В обоих вопросах can стоит первым. В ответах повторяется только can — " +
            "с yes или с no.",
        },
        // Запись убрана: вопрос звучит в таблице выше, а разговор — целиком.
        {
          id: "slovar-voprosa-umenie",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "play the guitar",
              translation: "играть на гитаре",
              example: "She can play the guitar.",
              // Было «с названиями инструментов ставят the» — правило, источника
              // которому не нашёл ни методист, ни я. Оборот показан как целый.
              hint: "/pleɪ ðə gɪˈtɑː/ — оборот берётся целиком, вместе с the",
            },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-can-v-voprose",
          kind: "gap",
          prompt: "Ты хочешь узнать, умеет ли собеседник готовить. Допиши недостающее слово.",
          before: "",
          after: " you cook?",
          answer: "Can",
          hint: "Вопрос открывает то же слово, что стоит перед глаголом в утверждении.",
          why: "Can you cook? В вопросе can выходит вперёд, и слово do не нужно.",
        },
        {
          id: "z2-vybrat-vopros-umenie",
          kind: "choice",
          prompt: "Ты хочешь узнать, умеет ли твой брат плавать. Как спросить?",
          options: [
            { text: "Can your brother swim?", correct: true },
            { text: "Does your brother can swim?" },
            { text: "Can swim your brother?" },
          ],
          hint: "Сначала can, потом тот, о ком речь, потом глагол.",
          why:
            "Can your brother swim? Слово does здесь не нужно, а в третьем варианте " +
            "порядок перевёрнут.",
        },
        {
          id: "z3-otvetit-da-can",
          kind: "short",
          prompt: "Тебя спросили: Can you play the guitar? Ты умеешь. Ответь коротко — да.",
          answer: "Yes, I can.",
          hint: "Глагол в коротком ответе не повторяют.",
          why: "Yes, I can. Хватает одного can — слово play повторять не нужно.",
        },
        {
          id: "z4-otvetit-net-can",
          kind: "short",
          prompt: "Тебя спросили: Can you drive? Ты не умеешь. Ответь коротко — нет.",
          answer: "No, I can't.",
          accept: ["No, I cannot."],
          hint: "В коротком ответе на нет стоит короткая запись.",
          why: "No, I can't. Полная запись No, I cannot тоже верна, но встречается редко.",
        },
        {
          id: "z5-sobrat-vopros-umenie",
          kind: "order",
          prompt: "Собери вопрос: «Твоя сестра умеет рисовать?»",
          items: ["draw?", "Can", "your sister"],
          answer: [1, 2, 0],
          hint: "Первым идёт can.",
          why: "Can your sister draw? Сначала can, потом тот, о ком речь, потом глагол.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-ty-umeesh",
      title: "Что ты умеешь: What can you do?",
      estimatedMinutes: 12,
      outcome: "спрашивать, что человек умеет: What can you do?",

      blocks: [
        {
          id: "zachem-chto-umeesh",
          kind: "explain",
          text: [
            "Вопрос Can you swim? годится, когда ты уже примерно догадываешься об " +
              "ответе.",
            "А если не догадываешься, спрашивают шире: What can you do?",
            "Это тот же вопрос, только впереди встало вопросительное слово.",
          ],
        },
        {
          id: "tablica-chto-umeesh",
          kind: "table",
          caption: "Вопрос с вопросительным словом",
          zvuchat: ["What can you do?", "What can your sister do?", "What can your friends do?",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["What can you do?", "Что ты умеешь?"],
            ["What can your sister do?", "Что умеет твоя сестра?"],
            ["What can your friends do?", "Что умеют твои друзья?"],
          ],
        },
        {
          id: "poryadok-s-voprosnym-slovom",
          kind: "explain",
          text: [
            "Порядок такой: вопросительное слово, can, тот, о ком речь, глагол.",
            "What can your sister do? — What, can, your sister, do.",
            "Порядок один и тот же, о ком бы ни шла речь: What can your friends do?",
          ],
        },
        {
          id: "ne-what-you-can",
          kind: "note",
          tone: "mistake",
          text:
            "«What you can do?» — так не говорят.\n\nПосле вопросительного слова сразу " +
            "идёт can, а не тот, о ком речь. Верно: What can you do?",
        },
        {
          id: "primer-chto-umeesh",
          kind: "example",
          caption: "Разговор при знакомстве",
          razgovor: true,
          text: "— What can you do?\n— I can swim.\n— What can your sister do?\n— She can drive.",
          explain:
            "В обоих вопросах can стоит вторым, сразу после What. Дальше идёт тот, о " +
            "ком речь, и только потом глагол.",
        },
        // Запись убрана: все три вопроса звучат в таблице выше, а разговор — целиком.
        {
          id: "otvet-odnim-can",
          kind: "note",
          tone: "info",
          text:
            "Отвечать на такой вопрос можно и коротко: She can drive.\n\nПовторять " +
            "вопрос целиком не нужно — хватает того, что человек умеет.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-can-v-voprose-what",
          kind: "gap",
          prompt: "Ты хочешь узнать, что умеет твой брат. Допиши недостающее слово.",
          before: "What ",
          after: " your brother do?",
          answer: "can",
          hint: "Оно встаёт сразу после вопросительного слова.",
          why: "What can your brother do? После What сразу идёт can.",
        },
        {
          id: "z2-vybrat-vopros-what-can",
          kind: "choice",
          prompt: "Ты хочешь узнать, что умеет твоя мать. Как спросить?",
          options: [
            { text: "What your mother can do?" },
            { text: "What can do your mother?" },
            { text: "What can your mother do?", correct: true },
          ],
          hint: "Вторым словом идёт can.",
          why:
            "What can your mother do? После вопросительного слова сразу идёт can, а тот, " +
            "о ком речь, встаёт между can и делом.",
        },
        {
          id: "z3-otmetit-poryadok-what-can",
          kind: "hottext",
          prompt: "Отметь вопросы с ошибкой в порядке слов.",
          parts: [
            { text: "What can you do?", selectable: true },
            { text: " · " },
            { text: "What you can do?", selectable: true, correct: true },
            { text: " · " },
            { text: "What can your sister do?", selectable: true },
            { text: " · " },
            { text: "What can do your sister?", selectable: true, correct: true },
          ],
          hint: "Can идёт сразу после вопросительного слова, а глагол — в конце.",
          why:
            "Верно: What can you do? и What can your sister do? В первой ошибке can " +
            "ушло с места, во второй глагол встал слишком рано.",
        },
        {
          id: "z4-sobrat-vopros-what-can",
          kind: "order",
          prompt: "Собери вопрос: «Что умеет твоя сестра?»",
          items: ["do?", "can", "What", "your sister"],
          answer: [2, 1, 3, 0],
          hint: "Первым идёт вопросительное слово, вторым can.",
          why: "What can your sister do? Порядок: What, can, your sister, do.",
        },
        {
          id: "z5-sprosit-chto-umeesh",
          kind: "short",
          prompt: "Спроси у собеседника, что он умеет.",
          answer: "What can you do?",
          hint: "Четыре слова, первое — вопросительное.",
          why: "What can you do? После What идёт can, потом you, потом do.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "zdes-mozhno",
      title: "Здесь можно: You can buy milk here",
      estimatedMinutes: 13,
      outcome: "говорить о возможности: You can buy milk here",

      blocks: [
        {
          id: "zachem-vozmozhnost",
          kind: "explain",
          text: [
            "Друг спрашивает, где купить молоко. Ты объясняешь: вон в том магазине.",
            "Умение тут ни при чём — молоко купит кто угодно. Речь о возможности: " +
              "там она есть, а в соседнем месте её нет.",
            "В английском для этого используют то же слово can: You can buy milk here.",
          ],
        },
        {
          id: "tablica-umenie-i-vozmozhnost",
          kind: "table",
          caption: "Одно слово, два случая",
          zvuchat: ["I can swim.", "You can buy milk here.", "You can't buy bread here.",
          ],
          head: ["Английский", "Перевод", "О чём речь"],
          rows: [
            ["I can swim.", "Я умею плавать.", "умение человека"],
            ["You can buy milk here.", "Здесь можно купить молоко.", "возможность в этом месте"],
            ["You can't buy bread here.", "Здесь нельзя купить хлеб.", "возможности нет"],
          ],
        },
        {
          id: "kak-otlichit-vozmozhnost",
          kind: "explain",
          text: [
            "Отличают их по смыслу, а не по виду: вид у обоих один.",
            "Умение принадлежит человеку: его можно приобрести и потерять.",
            "Возможность принадлежит месту или случаю: в этом магазине есть молоко, " +
              "и купить его может любой.",
          ],
        },
        {
          id: "you-ne-o-sobesednike",
          kind: "note",
          tone: "info",
          text:
            "В таких предложениях you значит «кто угодно», а не твой собеседник.\n\n" +
            "«You can buy milk here» значит «здесь можно купить молоко» — про " +
            "любого, а не только про тебя.",
        },
        {
          id: "primer-vozmozhnosti",
          kind: "example",
          caption: "Где что купить",
          zvuchat: ["The shop is next to the school.", "You can buy milk there.",
            "You can't buy bread there.",
          ],
          text: "The shop is next to the school.\nYou can buy milk there.\nYou can't buy bread there.",
          explain:
            "Первое предложение говорит, где магазин. Второе и третье — что там " +
            "можно и чего нельзя. Про умение здесь нет ни слова.",
        },
        // Запись убрана: все строки звучат в таблице выше и в примере под ней.
        {
          id: "slovar-vozmozhnosti",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "milk", translation: "молоко", example: "You can buy milk here.", hint: "/mɪlk/" },
            { term: "bread", translation: "хлеб", example: "I can't buy bread here.", hint: "/bred/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-vozmozhnost",
          kind: "gap",
          prompt: "Здесь можно купить молоко. Допиши недостающее слово.",
          before: "You ",
          after: " buy milk here.",
          answer: "can",
          hint: "То же слово, что и в рассказе об умении.",
          why: "You can buy milk here. О возможности говорят тем же словом can.",
        },
        {
          id: "z2-vybrat-nelzya",
          kind: "choice",
          prompt: "Здесь нельзя купить хлеб. Как сказать?",
          options: [
            { text: "You can't buy bread here.", correct: true },
            { text: "You don't can buy bread here." },
            { text: "You can't buys bread here." },
          ],
          hint: "Отрицает сам can, а глагол после него — без окончания.",
          why:
            "You can't buy bread here. Слово don't здесь не нужно, и окончание -s " +
            "глаголу тоже не нужно.",
        },
        {
          id: "z3-otmetit-vozmozhnost",
          kind: "hottext",
          prompt: "Отметь записи, где речь о возможности, а не об умении человека.",
          parts: [
            { text: "I can swim.", selectable: true },
            { text: " · " },
            { text: "You can buy bread here.", selectable: true, correct: true },
            { text: " · " },
            { text: "My brother can drive.", selectable: true },
            { text: " · " },
            { text: "You can't buy milk here.", selectable: true, correct: true },
          ],
          hint: "Умение принадлежит человеку, возможность — месту.",
          why:
            "О возможности говорят «You can buy bread here» и «You can't buy milk " +
            "here»: они о месте. Два других предложения — об умении человека.",
        },
        {
          id: "z4-sopostavit-sluchai",
          kind: "match",
          prompt: "Сопоставь предложение и то, о чём в нём речь.",
          left: ["I can draw.", "You can buy milk here.", "My sister can't drive."],
          right: ["чего человек не умеет", "что умеет человек", "что можно в этом месте"],
          answer: [1, 2, 0],
          hint: "Смотри, о ком или о чём говорит предложение.",
          why:
            "I can draw — что умеет человек. You can buy milk here — что можно в этом " +
            "месте. My sister can't drive — чего человек не умеет.",
        },
        {
          id: "z5-napisat-vozmozhnost",
          kind: "short",
          prompt: "Напиши, что здесь можно купить хлеб. Хлеб — bread.",
          answer: "You can buy bread here.",
          hint: "Начни со слова you.",
          why: "You can buy bread here. Слово you здесь означает «кто угодно».",
        },
      ],
    },

    // =====================================================================
    {
      slug: "prosba-i-pomoshch",
      title: "Просьба о помощи: Can you help?",
      estimatedMinutes: 13,
      outcome: "просить и предлагать: Can you help? Can I have your pen?",

      blocks: [
        {
          id: "zachem-prosba",
          kind: "explain",
          text: [
            "У тебя тяжёлые сумки, и рядом стоит человек. Нужно попросить.",
            "Просьба строится тем же вопросом: Can you help?",
            "А если помощь нужна не тебе, а собеседнику, спрашивают наоборот: " +
              "Can I help you?",
          ],
        },
        {
          id: "tablica-prosby",
          kind: "table",
          caption: "Просьба и предложение помощи",
          zvuchat: ["Can you help?", "Can I help you?", "Can I have your pen?",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["Can you help?", "Ты не поможешь?"],
            ["Can I help you?", "Тебе помочь?"],
            ["Can I have your pen?", "Можно взять твою ручку?"],
          ],
        },
        {
          id: "kto-delaet-delo",
          kind: "explain",
          text: [
            "Разница между двумя вопросами — в том, кто будет помогать.",
            "Can you help? — помогать будет собеседник, значит это просьба.",
            "Can I help you? — помогать будешь ты, значит это предложение помощи.",
          ],
        },
        {
          id: "please-v-prosbe",
          kind: "note",
          tone: "info",
          text:
            "Слово please делает просьбу мягче и ставится в конце: Can you help, " +
            "please?\n\nБез него просьба тоже верна, но звучит суше.",
        },
        {
          id: "primer-prosby",
          kind: "example",
          caption: "Два коротких разговора",
          razgovor: true,
          text:
            "— Can you help, please?\n— Yes, I can.\n\n— Can I help you?\n— No, thank you.",
          explain:
            "Во втором разговоре ответ не повторяет can, и это не оговорка: " +
            "отказываются не от умения, а от самой помощи. " +
            "В первом разговоре помощи просят, во втором её предлагают. Отвечают так " +
            "же коротко, как на любой вопрос с can.",
        },
        // Запись убрана: все три просьбы звучат в таблице выше, а разговоры — целиком.
        {
          id: "slovar-prosby",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            {
              term: "Can I have…?",
              translation: "можно мне…?",
              example: "Can I have your pen?",
              hint: "берётся целым оборотом: have здесь значит «взять», а не «иметь»",
            },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-prosbu",
          kind: "choice",
          prompt: "Ты просишь собеседника помочь тебе. Как сказать?",
          options: [
            { text: "Can I help?" },
            { text: "Can you help?", correct: true },
            { text: "You can help." },
          ],
          hint: "Помогать должен собеседник — значит он и стоит после can.",
          why:
            "Can you help? Первый вопрос предлагает помощь, а третье предложение " +
            "просто сообщает, что собеседник умеет помогать.",
        },
        {
          id: "z2-dopisat-predlozhenie-pomoshchi",
          kind: "gap",
          prompt: "Ты предлагаешь помощь собеседнику. Допиши недостающее слово.",
          before: "Can ",
          after: " help you?",
          answer: "I",
          exact: true,
          hint: "Помогать будешь ты — значит после can стоишь ты.",
          why: "Can I help you? Слово I пишется с заглавной буквы всегда.",
        },
        {
          id: "z3-vybrat-kto-predlagaet",
          kind: "choice",
          prompt: "В каком вопросе человек предлагает помощь?",
          options: [
            { text: "Can I help you?", correct: true },
            { text: "Can you help?" },
            { text: "Can you drive?" },
          ],
          hint: "Смотри, кто будет помогать.",
          why:
            "Can I help you? Помогает тот, кто спрашивает. Во втором вопросе " +
            "помощи просят, а третий — об умении.",
        },
        {
          id: "z4-poprosit-pomoshch",
          kind: "short",
          prompt: "Попроси у собеседника его ручку и добавь «пожалуйста».",
          answer: "Can I have your pen, please?",
          accept: ["Can I have your pen please?", "Can I have your pen, please"],
          hint: "Слово please идёт в конце.",
          why:
            "Can I have your pen, please? Слово please ставится после просьбы, через " +
            "запятую.",
        },
        {
          id: "z5-sobrat-prosbu",
          kind: "order",
          prompt: "Собери просьбу: «Можно взять твою ручку?»",
          items: ["your pen?", "have", "Can", "I"],
          answer: [2, 3, 1, 0],
          hint: "Первым идёт can, вторым — тот, кто просит.",
          why: "Can I have your pen? Порядок тот же, что и в вопросе об умении.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-ob-umeniyah",
      title: "Рассказ об умениях",
      estimatedMinutes: 14,
      outcome: "рассказывать, что умеешь и чего не умеешь",

      blocks: [
        {
          id: "zachem-rasskaz-umeniya",
          kind: "explain",
          text: [
            "Всё, что нужно для рассказа о себе, у тебя уже есть.",
            "Осталось соединить: что умеешь, чего не умеешь и что умеют другие.",
            "Рассказ из трёх-четырёх предложений — это уже настоящий ответ на " +
              "вопрос What can you do?",
          ],
        },
        {
          id: "tablica-chetyre-formy",
          kind: "table",
          caption: "Всё про can на одной странице",
          zvuchat: ["I can swim.", "I can't drive.", "Can you swim?",
            "Yes, I can. No, I can't.",
          ],
          head: ["Что нужно", "Как это выглядит"],
          rows: [
            ["сказать, что умеешь", "I can swim."],
            ["сказать, чего не умеешь", "I can't drive."],
            ["спросить", "Can you swim?"],
            ["ответить коротко", "Yes, I can. No, I can't."],
          ],
        },
        {
          id: "shagi-rasskaza-umeniya",
          kind: "explain",
          text: [
            "Начни с того, что умеешь: этого обычно больше.",
            "Потом скажи, чего не умеешь, — с этим рассказ становится живым.",
            "И добавь про кого-нибудь ещё: про сестру, брата, друга.",
          ],
        },
        {
          id: "primer-rasskaza-umeniya",
          kind: "example",
          caption: "Рассказ целиком",
          zvuchat: ["I can swim.", "I can't drive.", "My sister can drive.",
          ],
          text:
            "I can swim.\nI can't drive.\nMy sister can drive.",
          explain:
            "Первое предложение о том, что умеешь, второе — об обратном, третье — о " +
            "другом человеке. Соединять их в одно длинное пока не нужно.",
        },
        // Запись убрана: рассказ выше звучит построчно.
        {
          id: "ne-tolko-pro-sebya",
          kind: "note",
          tone: "info",
          text:
            "Рассказ только про себя выходит однообразным.\n\nСкажи и о других: " +
            "у них умения другие, и разговор идёт дальше сам собой.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-umeniya",
          kind: "order",
          prompt: "Собери рассказ: сначала о своём умении, потом о своём неумении, потом о сестре.",
          items: ["My sister can drive.", "I can swim.", "I can't drive."],
          answer: [1, 2, 0],
          hint: "Порядок задан в условии.",
          why: "I can swim. I can't drive. My sister can drive.",
        },
        {
          id: "z2-dva-predlozheniya-umeniya",
          kind: "short",
          prompt: "Напиши два предложения о себе: что ты умеешь плавать и что не умеешь водить машину.",
          answer: "I can swim. I can't drive.",
          accept: ["I can swim. I cannot drive."],
          hint: "Во втором предложении отрицает сам can.",
          why: "I can swim. I can't drive. Первое об умении, второе — об обратном.",
        },
        {
          id: "z3-dopisat-o-sestre",
          kind: "gap",
          prompt: "Твоя сестра не умеет плавать. Допиши недостающее слово.",
          before: "My sister ",
          after: " swim.",
          answer: "can't",
          accept: ["cannot"],
          hint: "Короткая запись из can и not.",
          why: "My sister can't swim. Годится и полная запись cannot.",
        },
        {
          id: "z4-dva-predlozheniya-o-sestre",
          kind: "short",
          prompt:
            "Напиши два предложения о сестре: она умеет водить машину и не умеет " +
            "плавать. Сестра — my sister.",
          answer: "My sister can drive. She can't swim.",
          accept: ["My sister can drive. She cannot swim."],
          hint: "Во втором предложении имя не повторяй — поставь she.",
          why:
            "My sister can drive. She can't swim. Во второй раз имя заменено словом " +
            "she.",
        },
        {
          id: "z5-rasskaz-vsluh-umeniya",
          kind: "speak",
          prompt: "Расскажи вслух, что ты умеешь и чего не умеешь: три предложения.",
          phrase: "I can swim. I can't drive. My brother can drive.",
          translation: "Я умею плавать. Я не умею водить машину. Мой брат умеет.",
          hint: "Начни с умений, потом скажи об обратном, потом о другом человеке.",
          why:
            "Три предложения — это уже рассказ. Can в них не меняется, меняется " +
            "только то, о ком речь.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Объявление о наборе — текст, где can работает сразу в двух
    // смыслах: умение человека и возможность, которую даёт место.
    // =====================================================================
    {
      slug: "chitaem-o-umeniyah",
      title: "Читаем объявление об умениях",
      estimatedMinutes: 13,
      outcome: "понимать по объявлению, что нужно уметь и что там можно",

      blocks: [
        {
          id: "zachem-chitat-ob-umeniyah",
          kind: "explain",
          text: [
            "В объявлениях слово can встречается в двух разных смыслах. Одно дело " +
              "«ты должен уметь», другое — «здесь это можно».",
            "Различает их то, о ком речь. You can swim в объявлении о работе — это " +
              "требование к человеку. You can buy tea here — это про место.",
          ],
        },
        {
          id: "obyavlenie-o-nabore",
          kind: "text",
          genre: "notice",
          title: "WE NEED A TEACHER",
          body: [
            "You can speak English.",
            "You can work in the evening.",
            "You can't work on Sunday.",
            "Phone: 8 7 0 5 4 3 2",
          ],
          glossary: [{ term: "speak", translation: "говорить" }],
        },
        {
          id: "razbor-obyavleniya-can",
          kind: "note",
          tone: "info",
          text:
            "Строка с can't в таком объявлении — не про неумение. Она говорит, что " +
              "в этот день работать нельзя: место закрыто.",
        },
        {
          id: "obyavlenie-o-klube",
          kind: "text",
          genre: "notice",
          title: "SPORT CLUB",
          body: [
            "You can swim here. You can play football.",
            "You can't drive here.",
            "Open: Monday — Friday",
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-nuzhno-umet",
          kind: "short",
          about: "obyavlenie-o-nabore",
          prompt:
            "Прочитай объявление WE NEED A TEACHER. На каком языке нужно говорить? " +
            "Ответь английским словом.",
          answer: "English",
          accept: ["english"],
          hint: "Первая строка называет умение.",
          why: "You can speak English. По-английски.",
        },
        {
          id: "z2-kogda-nelzya",
          kind: "choice",
          about: "obyavlenie-o-nabore",
          prompt: "Прочитай объявление WE NEED A TEACHER. Что говорит строка с can't?",
          options: [
            { text: "Что человек не умеет работать" },
            { text: "Что в воскресенье работать нельзя", correct: true },
            { text: "Что вечером работать нельзя" },
          ],
          hint: "Посмотри, какой день назван в этой строке.",
          why:
            "You can't work on Sunday. Это про место и день, а не про умение человека: " +
            "в воскресенье там не работают.",
        },
        {
          id: "z3-chto-mozhno-v-klube",
          kind: "hottext",
          about: "obyavlenie-o-klube",
          prompt: "Прочитай объявление SPORT CLUB. Отметь то, что там можно.",
          parts: [
            { text: "swim", selectable: true, correct: true },
            { text: "play football", selectable: true, correct: true },
            { text: "drive", selectable: true },
          ],
          hint: "Одно из трёх дел стоит в строке с can't.",
          why:
            "You can swim here. You can play football. Водить там нельзя: You can't " +
            "drive here.",
        },
        {
          id: "z4-rabotaet-li-klub-v-subbotu",
          kind: "choice",
          about: "obyavlenie-o-klube",
          prompt: "Прочитай объявление SPORT CLUB. Работает ли клуб в субботу?",
          options: [
            { text: "Работает" },
            { text: "Не работает", correct: true },
            { text: "Про субботу не сказано" },
          ],
          hint: "Последняя строка называет промежуток дней через тире.",
          why:
            "Open: Monday — Friday. Тире значит «с … по …»: с понедельника по пятницу. " +
            "Суббота в этот промежуток не входит.",
        },
        {
          id: "z5-dva-smysla-can",
          kind: "choice",
          about: "obyavlenie-o-nabore",
          prompt:
            "Сравни два объявления. В каком из них can говорит об умении человека, а " +
            "не о том, что можно в этом месте?",
          options: [
            { text: "В объявлении о клубе" },
            { text: "В объявлении о работе учителя", correct: true },
            { text: "В обоих одинаково" },
          ],
          hint: "Спроси себя: строка требует чего-то от человека или разрешает что-то?",
          why:
            "You can speak English — это требование к человеку, он должен уметь. " +
            "You can swim here — это про место: здесь есть такая возможность.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-ob-umeniyah",
      title: "Слушаем об умениях",
      estimatedMinutes: 13,
      outcome: "слышать разницу между can и can't и понимать просьбу",

      blocks: [
        {
          id: "zachem-slushat-can",
          kind: "explain",
          text: [
            "Can и can't различает только хвостик в конце, и звучит он коротко. " +
              "А смысл от него переворачивается целиком.",
            "Помогает то, что can в утверждении произносят слабо и быстро, а can't — " +
              "отчётливо и с нажимом. Если слово прозвучало заметно, это отрицание.",
          ],
        },
        {
          id: "can-i-cant-na-sluh",
          kind: "table",
          caption: "Умею и не умею — нажми и сравни",
          zvuchat: ["I can swim.", "I can't swim.", "He can drive.", "He can't drive.",
          ],
          head: ["Умеет", "Не умеет"],
          rows: [
            ["I can swim.", "I can't swim."],
            ["He can drive.", "He can't drive."],
          ],
        },
        {
          id: "prosba-tozhe-can",
          kind: "note",
          tone: "info",
          text:
            "С can начинается и просьба: Can you help me? Отличить её от вопроса об " +
              "умении можно по смыслу — просят обычно о том, что собеседник и так умеет.",
        },
        {
          id: "zapis-chto-umeyu",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай рассказ об умениях",
          transcript: "I can swim. I can't drive a car. My sister can drive.",
        },
        {
          id: "zapis-prosba",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Can you help me? — Yes, of course. — Can I have your pen? — " +
            "Sorry, I can't. I am writing.",
        },

        // ---- задания ----
        {
          id: "z1-chto-umeet",
          kind: "choice",
          about: "zapis-chto-umeyu",
          prompt: "Послушай первую запись. Что человек умеет?",
          options: [
            { text: "Водить машину" },
            { text: "Плавать", correct: true },
            { text: "И то, и другое" },
          ],
          hint: "Слушай, где слово can прозвучало отчётливо, а где проскочило.",
          why: "I can swim. I can't drive a car. Плавать умеет, водить — нет.",
        },
        {
          id: "z2-kto-umeet-vodit",
          kind: "short",
          about: "zapis-chto-umeyu",
          prompt:
            "Послушай первую запись. Кто умеет водить машину? Ответь английским словом.",
          answer: "sister",
          accept: ["my sister", "his sister", "her sister"],
          hint: "Про другого человека говорят в последнем предложении.",
          why: "My sister can drive. Сестра.",
        },
        {
          id: "z3-o-chem-poprosili-snachala",
          kind: "choice",
          about: "zapis-prosba",
          prompt: "Послушай вторую запись. О чём попросили первым делом?",
          options: [
            { text: "Дать ручку" },
            { text: "Помочь", correct: true },
            { text: "Ничего не просили, спрашивали об умении" },
          ],
          hint: "Первая реплика записи и есть просьба.",
          why:
            "Can you help me? Это просьба, а не вопрос об умении: спрашивающему нужна " +
            "помощь, а не сведения.",
        },
        {
          id: "z4-dali-li-ruchku",
          kind: "choice",
          about: "zapis-prosba",
          prompt: "Послушай вторую запись. Дали ли ручку?",
          options: [
            { text: "Дали" },
            { text: "Не дали, она занята", correct: true },
            { text: "Про ручку не спрашивали" },
          ],
          hint: "После отказа человек объясняет причину.",
          why:
            "Sorry, I can't. I am writing. Отказ смягчён словом sorry, а причина " +
            "названа следом.",
        },
        {
          id: "z5-poprosit-vsluh",
          kind: "speak",
          prompt:
            "Попроси вслух о помощи и отдельно попроси ручку. Два коротких вопроса.",
          phrase: "Can you help me? Can I have your pen?",
          translation: "Можешь мне помочь? Можно твою ручку?",
          hint: "Оба начинаются с can, но дальше идут разные слова: you и I.",
          why:
            "Can you — просьба сделать. Can I — просьба дать. Перепутаешь их, и " +
            "собеседник услышит не ту просьбу.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа не повторяет задания уроков: другие глаголы, другие люди, другой
      // пропущенный кусок. Заучившему задания она не сдаётся.
      //
      // В списках accept стоят только по-настоящему другие записи. Заглавные
      // буквы и точка в конце ответа сверкой и так не учитываются.

      // ---- итог 1 ----
      // ---- чтение и слушание ------------------------------------------
      // Другой случай, чем в уроках: там набор учителя и спортивный клуб,
      // здесь объявление о курсах и разговор с просьбой о помощи.
      {
        id: "q-obyavlenie-chto-mozhno",
        kind: "choice",
        outcome: "понимать по объявлению, что нужно уметь и что там можно",
        prompt:
          "Объявление: «ENGLISH CLUB. You can read books here. You can watch films. " +
          "You can't eat here.» Чего в клубе делать нельзя?",
        options: [
          { text: "Читать книги" },
          { text: "Есть", correct: true },
          { text: "Смотреть фильмы" },
        ],
        why:
          "You can't eat here. Есть нельзя. Читать и смотреть фильмы — можно.",
      },
      {
        id: "q-obyavlenie-chto-nuzhno-umet",
        kind: "short",
        outcome: "понимать по объявлению, что нужно уметь и что там можно",
        prompt:
          "Объявление о работе: «WE NEED A DRIVER. You can drive a bus. You can work " +
          "in the morning.» Что нужно уметь? Ответь английским словом.",
        answer: "drive",
        accept: ["to drive", "drive a bus"],
        why:
          "You can drive a bus. Первая строка требует умения водить: без него на эту " +
          "работу не берут.",
      },
      {
        id: "q-na-sluh-umeet-ili-net",
        kind: "choice",
        outcome: "слышать разницу между can и can't и понимать просьбу",
        zvuk: "My brother can play football. He can't swim.",
        prompt: "Послушай запись. Что брат не умеет?",
        options: [
          { text: "Играть в футбол" },
          { text: "Плавать", correct: true },
          { text: "Он умеет и то, и другое" },
        ],
        why:
          "He can't swim. Плавать не умеет. В футбол играть умеет: can play football.",
      },
      {
        id: "q-na-sluh-o-chem-prosba",
        kind: "choice",
        outcome: "слышать разницу между can и can't и понимать просьбу",
        zvuk: "Can I have your book? — Yes, of course.",
        prompt: "Послушай запись. О чём просят?",
        options: [
          { text: "Дать книгу", correct: true },
          { text: "Прочитать книгу вслух" },
          { text: "Спрашивают, умеет ли собеседник читать" },
        ],
        why:
          "Can I have your book? Can I — просьба дать. Can you было бы просьбой " +
          "что-то сделать.",
      },
      {
        id: "q-umenie-vybor",
        kind: "choice",
        outcome: "говорить, что умеешь: I can swim",
        prompt: "Ты умеешь бегать. В каком предложении нет ошибки?",
        options: [
          { text: "I cans run." },
          { text: "I can runs." },
          { text: "I can run.", correct: true },
        ],
        hint: "Проверь оба слова: и can, и глагол за ним.",
        why: "I can run. В первой записи -s прилипло к can, во второй — к run, а лишнее оно и там и там.",
      },
      {
        id: "q-umenie-dopisat",
        kind: "gap",
        outcome: "говорить, что умеешь: I can swim",
        prompt: "Ты умеешь играть на гитаре. Допиши недостающее слово.",
        before: "I ",
        after: " play the guitar.",
        answer: "can",
        hint: "Оно встаёт перед глаголом.",
        why: "I can play the guitar. Об умении говорит can, и место ему нашлось сразу за I.",
      },
      {
        id: "q-umenie-napisat",
        kind: "short",
        outcome: "говорить, что умеешь: I can swim",
        prompt: "Напиши, что ты умеешь плавать. Плавать — swim.",
        answer: "I can swim.",
        hint: "Два слова перед глаголом: I и can.",
        why: "I can swim. После can глагол стоит без добавок.",
      },

      // ---- итог 2 ----
      {
        id: "q-drugoy-umenie-vybor",
        kind: "choice",
        outcome: "говорить, что умеет другой человек: He can drive",
        prompt: "Твоя сестра умеет петь. В каком предложении нет ошибки?",
        options: [
          { text: "My sister can sing.", correct: true },
          { text: "My sister can sings." },
          { text: "My sister cans sing." },
        ],
        hint: "С he, she и с именем can не меняется.",
        why:
          "My sister can sing. Can одинаково для всех, и глагол после него — без " +
          "окончания.",
      },
      {
        id: "q-drugoy-umenie-dopisat",
        kind: "gap",
        outcome: "говорить, что умеет другой человек: He can drive",
        prompt: "Алим и Дана умеют петь. Допиши недостающее слово.",
        before: "Alim and Dana ",
        after: " sing.",
        answer: "can",
        hint: "Слово одно и то же, о ком бы ни шла речь.",
        why: "Alim and Dana can sing. Can не меняется и о двоих.",
      },
      {
        id: "q-drugoy-umenie-sobrat",
        kind: "order",
        outcome: "говорить, что умеет другой человек: He can drive",
        prompt: "Собери предложение: «Она умеет играть на гитаре.»",
        items: ["the guitar", "play", "She", "can"],
        answer: [2, 3, 1, 0],
        hint: "Начни с того, о ком речь, а глагол поставь последним.",
        why: "She can play the guitar. После can глагол стоит без добавок.",
      },

      // ---- итог 3 ----
      {
        id: "q-neumenie-dopisat",
        kind: "gap",
        outcome: "говорить, чего не умеешь: I can't swim",
        prompt: "Она не умеет водить машину. Допиши недостающее слово.",
        before: "She ",
        after: " drive.",
        answer: "can't",
        accept: ["cannot"],
        hint: "Два слова слились в одно.",
        why: "She can't drive. Полная запись cannot тоже засчитывается.",
      },
      {
        id: "q-neumenie-vybor",
        kind: "choice",
        outcome: "говорить, чего не умеешь: I can't swim",
        prompt: "Ты не умеешь петь. В каком предложении нет ошибки?",
        options: [
          { text: "I don't can sing." },
          { text: "I can't sing.", correct: true },
          { text: "I can't sings." },
        ],
        hint: "Слово don't при can не нужно.",
        why: "I can't sing. Слово don't при can не нужно, и окончание -s тоже.",
      },
      {
        id: "q-neumenie-polnostyu",
        kind: "short",
        outcome: "говорить, чего не умеешь: I can't swim",
        prompt: "Запиши полностью: I can't cook.",
        answer: "I cannot cook.",
        hint: "Can и not в полной записи пишутся слитно.",
        why: "I cannot cook. Это то же самое, что I can't cook, только полностью.",
      },

      // ---- итог 4 ----
      {
        id: "q-vopros-umenie-dopisat",
        kind: "gap",
        outcome: "спрашивать об умении и коротко отвечать: Can you swim? Yes, I can.",
        prompt: "Ты хочешь узнать, умеет ли твой друг петь. Допиши недостающее слово.",
        before: "",
        after: " your friend sing?",
        answer: "Can",
        hint: "Первым в вопросе стоит не do.",
        why: "Can your friend sing? В вопросе об умении вперёд выходит сам can.",
      },
      {
        id: "q-vopros-umenie-sobrat",
        kind: "order",
        outcome: "спрашивать об умении и коротко отвечать: Can you swim? Yes, I can.",
        prompt: "Собери вопрос: «Ты умеешь готовить?»",
        items: ["cook?", "you", "Can"],
        answer: [2, 1, 0],
        hint: "Вопрос открывается одним коротким словом.",
        why: "Can you cook? Три слова, и глагол среди них последний.",
      },
      {
        id: "q-vopros-umenie-otvetit",
        kind: "short",
        outcome: "спрашивать об умении и коротко отвечать: Can you swim? Yes, I can.",
        prompt: "Тебя спросили: Can you play the guitar? Ты не умеешь. Ответь коротко — нет.",
        answer: "No, I can't.",
        accept: ["No, I cannot."],
        hint: "Ответ из трёх слов, и глагола среди них нет.",
        why: "No, I can't. Оборот play the guitar в ответе не повторяют.",
      },

      // ---- итог 5 ----
      {
        id: "q-chto-umeet-vybor",
        kind: "choice",
        outcome: "спрашивать, что человек умеет: What can you do?",
        prompt: "Ты хочешь узнать, что умеет твоя сестра. Как спросить?",
        options: [
          { text: "What your sister can do?" },
          { text: "What can your sister do?", correct: true },
          { text: "What does your sister can?" },
        ],
        hint: "Между вопросительным словом и сестрой стоит одно слово.",
        why:
          "What can your sister do? Слово does в вопросе с can не нужно, а порядок " +
          "«What your sister can» перевёрнут.",
      },
      {
        id: "q-chto-umeet-dopisat",
        kind: "gap",
        outcome: "спрашивать, что человек умеет: What can you do?",
        prompt: "Ты хочешь узнать, что умеют твои друзья. Допиши недостающее слово.",
        before: "What ",
        after: " your friends do?",
        answer: "can",
        hint: "Нужное слово говорит об умении.",
        why: "What can your friends do? Спрашивают об умении, поэтому вторым словом встаёт can.",
      },
      {
        id: "q-chto-umeet-sprosit",
        kind: "short",
        outcome: "спрашивать, что человек умеет: What can you do?",
        prompt: "Спроси у собеседника, что умеет его брат. Брат — your brother.",
        answer: "What can your brother do?",
        hint: "Пять слов, первое — вопросительное.",
        why: "What can your brother do? Порядок: What, can, your brother, do.",
      },

      // ---- итог 6 ----
      {
        id: "q-vozmozhnost-vybor",
        kind: "choice",
        outcome: "говорить о возможности: You can buy milk here",
        prompt: "Здесь можно купить хлеб. Как сказать?",
        options: [
          { text: "You can bread buy here." },
          { text: "You can buying bread here." },
          { text: "You can buy bread here.", correct: true },
        ],
        hint: "После can сразу идёт глагол, а всё остальное — за ним.",
        why:
          "You can buy bread here. Глагол стоит сразу после can и без окончания -ing.",
      },
      {
        id: "q-vozmozhnost-otmetit",
        kind: "hottext",
        outcome: "говорить о возможности: You can buy milk here",
        prompt: "Отметь записи, где речь об умении человека, а не о возможности.",
        parts: [
          { text: "You can buy milk here.", selectable: true },
          { text: " · " },
          { text: "I can cook.", selectable: true, correct: true },
          { text: " · " },
          { text: "You can't buy bread here.", selectable: true },
          { text: " · " },
          { text: "My sister can draw.", selectable: true, correct: true },
        ],
        hint: "Спроси себя: это про человека или про место.",
        why:
          "«I can cook» и «My sister can draw» — про человека и его умение. Два " +
          "других предложения — про то, что доступно всякому в этом месте.",
      },
      {
        id: "q-vozmozhnost-napisat",
        kind: "short",
        outcome: "говорить о возможности: You can buy milk here",
        prompt: "Напиши, что здесь нельзя купить молоко. Молоко — milk.",
        answer: "You can't buy milk here.",
        accept: ["You cannot buy milk here."],
        hint: "Первым идёт слово, которое здесь значит «кто угодно».",
        why: "You can't buy milk here. Речь о месте, а не о собеседнике.",
      },

      // ---- итог 7 ----
      {
        id: "q-prosba-vybor",
        kind: "choice",
        outcome: "просить и предлагать: Can you help? Can I have your pen?",
        prompt: "Собеседнику тяжело, и ты предлагаешь свою помощь. Как сказать?",
        // Вариант «I can help you.» был помечен неверным, а в этом самом случае —
        // у собеседника тяжёлые сумки — так и предлагают помощь. Задание наказывало
        // за верный ответ. Взята ошибка того же рода, что в уроке: про умение
        // собеседника, а не своё. Нашёл методист.
        options: [
          { text: "Can I help you?", correct: true },
          { text: "Can you help?" },
          { text: "You can help me." },
        ],
        hint: "Дело будешь делать ты — значит после can стоишь ты.",
        why:
          "Can I help you? Второй вопрос помощи просит, а третье предложение просто " +
          "сообщает, что ты умеешь помочь.",
      },
      {
        id: "q-prosba-dopisat",
        kind: "gap",
        outcome: "просить и предлагать: Can you help? Can I have your pen?",
        prompt: "Ты просишь собеседника помочь. Допиши недостающее слово.",
        before: "Can ",
        after: " help, please?",
        answer: "you",
        hint: "Дело должен сделать собеседник.",
        why: "Can you help, please? После can стоит тот, кого просят помочь.",
      },
      {
        id: "q-prosba-napisat",
        kind: "short",
        outcome: "просить и предлагать: Can you help? Can I have your pen?",
        prompt: "Тебе нужна помощь. Попроси о ней и добавь «пожалуйста».",
        answer: "Can you help, please?",
        accept: ["Can you help me, please?", "Can you help, please", "Can you help me, please"],
        hint: "Начни с can, вторым поставь того, кого просишь.",
        why: "Can you help, please? По виду это вопрос, а по делу — просьба.",
      },

      // ---- итог 8 ----
      {
        id: "q-rasskaz-umeniya-sobrat",
        kind: "order",
        outcome: "рассказывать, что умеешь и чего не умеешь",
        prompt: "Собери рассказ: сначала о своём неумении, потом о своём умении, потом о брате.",
        items: ["I can swim.", "My brother can drive.", "I can't drive."],
        answer: [2, 0, 1],
        hint: "Условие называет порядок прямо.",
        why: "I can't drive. I can swim. My brother can drive.",
      },
      {
        id: "q-rasskaz-umeniya-napisat",
        kind: "short",
        outcome: "рассказывать, что умеешь и чего не умеешь",
        prompt:
          "Напиши два предложения о себе: что ты умеешь рисовать и что не умеешь " +
          "играть на гитаре. Рисовать — draw, играть на гитаре — play the guitar.",
        answer: "I can draw. I can't play the guitar.",
        accept: ["I can draw. I cannot play the guitar."],
        hint: "Второе предложение говорит об обратном первому.",
        why:
          "I can draw. I can't play the guitar. Во втором предложении к can приросло n't — " +
          "то же not, только короче.",
      },
      {
        id: "q-rasskaz-umeniya-otmetit",
        kind: "hottext",
        outcome: "рассказывать, что умеешь и чего не умеешь",
        prompt: "Отметь записи, где сказано о чужом умении, а не о своём.",
        parts: [
          { text: "I can swim.", selectable: true },
          { text: " · " },
          { text: "My sister can drive.", selectable: true, correct: true },
          { text: " · " },
          { text: "I can't cook.", selectable: true },
          { text: " · " },
          { text: "My brother can play football.", selectable: true, correct: true },
        ],
        hint: "Смотри, о ком идёт речь в начале предложения.",
        why:
          "О чужом умении говорят «My sister can drive» и «My brother can play " +
          "football». Два других предложения — о себе.",
      },
    ],
  },
};

export default module;
