import type { Module } from "@/lib/content/types";

/**
 * Модуль 4 курса «Английский с нуля»: вопрос с be и краткий ответ.
 *
 * Программа: docs/programma-english-starter.md, модуль 4 — «спросить с be и
 * коротко ответить»; грамматика: вопрос с `be`, местоимения в вопросе, краткие
 * ответы (сверх A1).
 *
 * ЧЕМ ОГРАНИЧЕН МОДУЛЬ:
 *
 * 1. Глагол по-прежнему один — `be`. Настоящее простое время в модуле 14,
 *    поэтому вопросов вида `Do you live…?` здесь нет.
 *
 * 2. Множественного числа нет (модуль 8), притяжательных нет (модуль 7),
 *    определённого артикля нет нигде в курсе до модуля 10.
 *
 * 3. Прилагательных сверх уже пройденных `fine` и `OK` не вводится: описание
 *    признаков программа отдаёт модулю 11. Вопросы строятся на занятиях и
 *    местах из модуля 3.
 *
 * 4. ПЕРЕСЕЧЕНИЕ С МОДУЛЕМ 5, ОСОЗНАННОЕ. Краткий отрицательный ответ
 *    (`No, I'm not`) — это отрицание, а отрицание программа отдаёт модулю 5.
 *    Разделить их нельзя: вопрос без ответа «нет» бесполезен. Поэтому здесь
 *    `No, I'm not` даётся как ГОТОВЫЙ ОБОРОТ, без разбора устройства, а модуль
 *    5 разбирает отрицание целиком и распространяет его на любые предложения.
 *
 * 5. Новых слов в модуле мало — `no` и `not`. Программа отводит модулю 55 слов,
 *    и это расхождение записано честно: модуль про устройство вопроса, а не
 *    про лексику. Слова добираются в модулях 6–8.
 *
 * Звук есть: синтез речи Azure, британские голоса — решение владельца
 * 16 августа 2026 (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "vopros-i-otvet",
  title: "Вопрос и краткий ответ",

  sources: [
    {
      ref: "Council of Europe, CEFR Companion Volume 2020 — опора урока чтения",
      section:
        "УРОК ЧТЕНИЯ «Читаем разговор с вопросами». с. 54, шкала Overall reading comprehension, графа A1, дословно: «Can understand very short, simple texts a single phrase at a time, picking up familiar names, words and basic phrases and rereading as required». Строка «a single phrase at a time» и «rereading as required» описывают то, что урок требует прямо: читать по строке и возвращаться назад, потому что верное стоит не в вопросе, а в ответе. " +
        "Там же, с. 55, шкала Reading correspondence, графа A1: «Can understand short, simple messages sent via social media or e-mail» — разговор из восьми строк это и есть короткое сообщение. " +
        "ЧЕГО В ИСТОЧНИКЕ НЕТ: он не говорит, что в вопросе стоит догадка, а в ответе — как есть. Это устройство самого языка, разобранное в уроках модуля, а не утверждение об обиходе. " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find).",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "ОПОРА УРОКА СЛУШАНИЯ, добавленного позже остальных. Cambridge English, руководство для младших ступеней, с. 5, блок Pre A1 «Below 100» — ступень НИЖЕ нашей, значит умение посильно. Дословно: «CAN understand some very short conversations that use familiar questions and answers» — вопрос и краткий ответ названы вместе. ЧЕГО В ИСТОЧНИКАХ НЕТ: правила «у вопроса голос идёт вверх». Я его написал и снял после методиста. В `cambridge-a2-key-handbook.pdf`, с. 50, intonation определена вообще («the way the voice rises and falls»), про вопросы там ничего; в English Grammar Profile слова intonation нет ни разу. Урок теперь опирается на порядок слов, которому модуль и учит.",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1, CLAUSES interrogatives «FORM: AFFIRMATIVE INTERROGATIVE, WITH 'BE'»: «Can form " +
        "interrogative clauses with 'be'», пример источника — «How are you?». Это основа " +
        "модуля. " +
        "A1, PRONOUNS subject/object «FORM: (SUBJECT) STATEMENTS»: перечень I, you, he, she, " +
        "it, we, they — те же местоимения работают и в вопросе. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'». " +
        "A1, NEGATION «FORM: MAIN VERB 'BE'»: «Can form negative statements of main verb " +
        "'be', with contracted and uncontracted forms» — отсюда `No, I'm not`. Разбор " +
        "отрицания идёт в модуле 5, здесь оборот берётся целиком. " +
        "ЧЕГО В ИСТОЧНИКЕ НЕТ: отдельной строки о кратких ответах. Поиск по SHORT ANSWER " +
        "не даёт совпадений ни на одной ступени. Программа помечает их «сверх A1» именно " +
        "поэтому — основание не в описании, а в невозможности вести разговор без них",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves and " +
        "other people, where they live, people they know, things they have». " +
        "с. 72, Overall oral interaction, A1: «Can ask and answer simple questions, initiate " +
        "and respond to simple statements in areas of immediate need or on very familiar " +
        "topics» — умение спрашивать названо на A1 прямо",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 51, «Inventory of functions, notions and communicative tasks», дословно: " +
        "«asking for and giving personal details: (full) name, age, address, names of " +
        "relatives and friends, etc.» — отсюда состав вопросов модуля. Там же " +
        "«asking and answering questions about personal possessions». " +
        "ЧЕГО В ЭТОМ ПЕРЕЧНЕ НЕТ: строки о согласии и несогласии. Проверено поиском: " +
        "«agreeing» — ноль совпадений во всём файле. Краткий ответ «да» и «нет» источником " +
        "как функция не назван, основание для него — решение программы (сверх A1)",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометкой A1: no, not. Остальное — слова модулей 1–3: " +
        "student, teacher, doctor, driver, nurse, artist, from, in, fine, OK, city, country. " +
        "РАСХОЖДЕНИЕ С ПРОГРАММОЙ, ПРИЗНАНО: программа отводит модулю 55 слов, здесь их " +
        "два. Модуль про устройство вопроса, а не про лексику; добор идёт в модулях 6–8",
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
    "строить вопрос с be, поменяв местами первые два слова",
    "коротко отвечать «да»: Yes, I am, Yes, he is",
    "коротко отвечать «нет»: No, I'm not, No, she isn't",
    "подбирать форму be к местоимению в вопросе",
    "спрашивать о другом человеке: Is he, Is she",
    "выбирать между кратким и полным ответом",
    "отличать вопрос от сообщения по порядку слов",
    "вести разговор из вопросов и ответов",
    "отличать на слух вопрос от сообщения и понимать краткий ответ",
    "отличать в разговоре догадку спрашивающего от того, как есть",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vopros-s-be",
      title: "Вопрос с be: меняем местами",
      estimatedMinutes: 14,
      outcome: "строить вопрос с be, поменяв местами первые два слова",

      blocks: [
        {
          id: "zachem-vopros",
          kind: "explain",
          text: [
            "Рассказывать о себе научились. Теперь научимся спрашивать — без этого разговор " +
              "идёт в одну сторону.",
            "Вопрос с глаголом be строят так: берут сообщение и меняют местами первые два " +
              "слова. You are a student — сообщение. Are you a student? — вопрос. Ничего " +
              "добавлять не нужно.",
          ],
        },
        {
          id: "tablica-perestanovki",
          kind: "table",
          caption: "Сообщение и вопрос",
          // Сообщение и вопрос звучат отдельными кнопками: слова в них те же, а
          // голос идёт по-разному, и это слышно только в сравнении.
          zvuchat: ["You are a student.", "Are you a student?", "She is from Turkey.",
            "Is she from Turkey?", "He is in Astana.", "Is he in Astana?", "It is a city.",
            "Is it a city?",
          ],
          head: ["Сообщение", "Вопрос", "Перевод вопроса"],
          rows: [
            ["You are a student.", "Are you a student?", "Ты студент?"],
            ["She is from Turkey.", "Is she from Turkey?", "Она из Турции?"],
            ["He is in Astana.", "Is he in Astana?", "Он в Астане?"],
            ["It is a city.", "Is it a city?", "Это город?"],
          ],
        },
        {
          id: "znak-voprosa",
          kind: "note",
          tone: "info",
          text:
            "В конце вопроса ставят знак вопроса — тот же, что и в русском. А заглавная " +
            "буква переезжает: в сообщении с неё начиналось You, в вопросе — Are.",
        },
        {
          id: "korotkuyu-formu-ne-perestavlyayut",
          kind: "note",
          tone: "mistake",
          text:
            "«You're a student» так сразу не переставишь: короткая форма слиплась в одно " +
            "слово. Сначала разверни её — You are a student, — и только потом меняй " +
            "местами: Are you a student?",
        },
        {
          id: "primer-voprosov",
          kind: "example",
          caption: "Ещё два примера",
          text: "I am a doctor. → Am I a doctor?\nWe are in Almaty. → Are we in Almaty?",
          // Стрелка не звучит: она наша разметка, а не слово. Строка читается
          // как пара — сообщение, потом вопрос.
          zvuk: {
            "I am a doctor. → Am I a doctor?": "I am a doctor. Am I a doctor?",
            "We are in Almaty. → Are we in Almaty?": "We are in Almaty. Are we in Almaty?",
          },
          explain:
            "Правило одно для всех: что стоит первым, уходит на второе место, а глагол " +
            "выходит вперёд. Больше в предложении ничего не меняется.",
        },
        // Запись убрана: те же четыре предложения звучат в таблице выше, каждое
        // своей кнопкой, — а сравнить сообщение с вопросом так даже проще.

        // ---- задания ----
        {
          id: "z1-chto-menyaetsya",
          kind: "choice",
          prompt: "Что делают с сообщением, чтобы получился вопрос с be?",
          options: [
            { text: "Меняют местами первые два слова", correct: true },
            { text: "Добавляют слово в начало" },
            { text: "Убирают глагол" },
          ],
          hint: "Посмотри на таблицу: что в вопросе стоит первым?",
          why:
            "Первые два слова меняются местами: You are → Are you. Ничего не добавляют и " +
            "ничего не убирают.",
        },
        {
          id: "z2-sdelat-vopros",
          kind: "short",
          prompt: "Сделай из сообщения вопрос: «She is a nurse.»",
          answer: "Is she a nurse?",
          exact: true,
          accept: ["Is she a nurse"],
          hint: "Первые два слова меняются местами, в конце — знак вопроса.",
          why: "Is she a nurse? Слова she и is поменялись местами, точка стала знаком вопроса.",
        },
        {
          id: "z3-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Ты из Алматы?»",
          items: ["Almaty", "you", "Are", "from"],
          answer: [2, 1, 3, 0],
          hint: "Вопрос начинается с глагола.",
          why: "Are you from Almaty? Глагол вышел вперёд, остальное осталось на месте.",
        },
        {
          id: "z4-otmetit-voprosy",
          kind: "hottext",
          prompt: "Отметь строки, в которых задан вопрос.",
          parts: [
            { text: "Is he a driver?", selectable: true, correct: true },
            { text: " · " },
            { text: "She is in Rome.", selectable: true },
            { text: " · " },
            { text: "Are you a teacher?", selectable: true, correct: true },
            { text: " · " },
            { text: "I am from Spain.", selectable: true },
          ],
          hint: "Смотри, что стоит первым словом.",
          why:
            "В вопросе первым стоит форма be: Is he…?, Are you…? В сообщении первым идёт " +
            "тот, о ком речь.",
        },
        {
          id: "z5-iz-korotkoy-formy",
          kind: "short",
          prompt: "Сделай вопрос из «He's a student.» Сначала разверни короткую форму.",
          answer: "Is he a student?",
          exact: true,
          accept: ["Is he a student"],
          hint: "He's — это he is. Дальше как обычно.",
          why:
            "He's → he is → Is he a student? Короткую форму сначала разворачивают, потом " +
            "переставляют.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kratkiy-otvet-da",
      title: "Yes, I am: короткий ответ «да»",
      estimatedMinutes: 13,
      outcome: "коротко отвечать «да»: Yes, I am, Yes, he is",

      blocks: [
        {
          id: "zachem-kratkiy",
          kind: "explain",
          text: [
            "На вопрос Are you a student? по-русски отвечают одним словом: «да». " +
              "По-английски одного yes мало — за ним повторяют того, о ком речь, и глагол: " +
              "Yes, I am.",
            "Повторяют ровно две вещи и ничего больше. Не «Yes, I am a student», а просто " +
              "Yes, I am. Остальное собеседник уже сказал в вопросе.",
          ],
        },
        {
          id: "tablica-otvetov-da",
          kind: "table",
          caption: "Вопрос и короткий ответ",
          zvuchat: ["Are you a student?", "Is she from Turkey?", "Is he a doctor?",
            "Are they in Astana?", "Yes, I am.", "Yes, she is.", "Yes, he is.",
            "Yes, they are.",
          ],
          head: ["Вопрос", "Ответ", "Перевод ответа"],
          rows: [
            ["Are you a student?", "Yes, I am.", "Да."],
            ["Is she from Turkey?", "Yes, she is.", "Да."],
            ["Is he a doctor?", "Yes, he is.", "Да."],
            ["Are they in Astana?", "Yes, they are.", "Да."],
          ],
        },
        {
          id: "otvechaet-drugoe-mestoimenie",
          kind: "note",
          tone: "mistake",
          text:
            "На вопрос про you отвечают про I: «Are you a student?» — «Yes, I am». Это не " +
            "описка: спрашивают тебя, отвечаешь ты о себе. Повторить you в ответе — та же " +
            "ошибка, что по-русски ответить «да, ты».",
        },
        {
          id: "bez-korotkoy-formy",
          kind: "note",
          tone: "info",
          text:
            "В кратком ответе сокращённую форму не ставят: «Yes, I'm» сказать нельзя, только " +
            "Yes, I am. Об этом уже шла речь в модуле про приветствие: после короткой " +
            "формы всегда идут другие слова, а здесь после неё ничего нет.",
        },
        // Запись убрана: и вопрос, и ответ звучат в таблице выше по отдельности.
        {
          id: "slovar-otvetov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "yes", translation: "да", example: "Yes, I am.", hint: "/jes/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-otvetit-da",
          kind: "choice",
          prompt: "«Are you a teacher?» Ответь утвердительно.",
          options: [
            { text: "Yes, you are." },
            { text: "Yes, I am.", correct: true },
            { text: "Yes, I'm." },
          ],
          hint: "Спрашивают тебя — отвечаешь о себе.",
          why:
            "Yes, I am. На вопрос про you отвечают про I, и короткую форму в конце не ставят.",
        },
        {
          id: "z2-dopisat-otvet",
          kind: "gap",
          prompt: "«Is he a driver?» Допиши ответ.",
          before: "Yes, he ",
          after: ".",
          answer: "is",
          hint: "Та же форма, что в вопросе.",
          why: "Yes, he is. В коротком ответе повторяют то же местоимение и ту же форму be.",
        },
        {
          id: "z3-sopostavit-otvety",
          kind: "match",
          prompt: "Сопоставь вопрос и короткий ответ.",
          left: ["Is she a nurse?", "Are they in Rome?", "Are you a student?"],
          right: ["Yes, I am.", "Yes, she is.", "Yes, they are."],
          answer: [1, 2, 0],
          hint: "Один из ответов говорит не о том, о ком спрашивали.",
          why:
            "Is she…? — Yes, she is. Are they…? — Yes, they are. Are you…? — Yes, I am: " +
            "здесь местоимение меняется.",
        },
        {
          id: "z4-otmetit-oshibki-v-otvetah",
          kind: "hottext",
          prompt: "Отметь ответы с ошибкой.",
          parts: [
            { text: "Yes, I'm.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, she is.", selectable: true },
            { text: " · " },
            { text: "Yes, I am a student.", selectable: true },
            { text: " · " },
            { text: "Yes, are they.", selectable: true, correct: true },
          ],
          hint: "Одна ошибка — короткая форма в конце, другая — перевёрнутый порядок.",
          why:
            "«Yes, I'm» — в конце нужна полная форма. «Yes, are they» — порядок как в " +
            "вопросе, а нужен как в сообщении: Yes, they are. Ответ «Yes, I am a student» " +
            "длиннее нужного, но не ошибочен.",
        },
        {
          id: "z5-zapisat-otvet",
          kind: "short",
          prompt: "«Are you from Kazakhstan?» Ответь коротко и утвердительно.",
          answer: "Yes, I am.",
          exact: true,
          accept: ["Yes, I am"],
          hint: "Три слова, и второе — местоимение о себе.",
          why: "Yes, I am. Ни короткой формы, ни повтора остальной части вопроса.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kratkiy-otvet-net",
      title: "No, I'm not: короткий ответ «нет»",
      estimatedMinutes: 13,
      outcome: "коротко отвечать «нет»: No, I'm not, No, she isn't",

      blocks: [
        {
          id: "zachem-otvet-net",
          kind: "explain",
          text: [
            "Ответ «нет» устроен почти так же, только добавляется слово not — «не». " +
              "No, I'm not. No, she isn't.",
            "Здесь оборот берётся целиком, как есть. Как устроено отрицание и что с ним " +
              "можно делать дальше, разберём в следующем модуле — а пока выучи четыре " +
              "строки таблицы наизусть.",
          ],
        },
        {
          id: "tablica-otvetov-net",
          kind: "table",
          caption: "Вопрос и короткий ответ «нет»",
          // Звучат обе записи ответа, короткая и полная: на слух они разной
          // длины, и в разговоре встречаются обе.
          zvuchat: ["Are you a student?", "Is she from Turkey?", "Is he a doctor?",
            "Are they in Astana?", "No, I'm not.", "No, she isn't.", "No, he isn't.",
            "No, they aren't.", "No, I am not.", "No, she is not.", "No, he is not.",
            "No, they are not.",
          ],
          head: ["Вопрос", "Ответ", "Полная запись"],
          rows: [
            ["Are you a student?", "No, I'm not.", "No, I am not."],
            ["Is she from Turkey?", "No, she isn't.", "No, she is not."],
            ["Is he a doctor?", "No, he isn't.", "No, he is not."],
            ["Are they in Astana?", "No, they aren't.", "No, they are not."],
          ],
        },
        {
          id: "dve-zapisi-otricaniya",
          kind: "note",
          tone: "info",
          text:
            "У ответа «нет» две записи, и обе верны: полная — No, she is not, короткая — " +
            "No, she isn't. Апостроф в isn't стоит на месте выпавшей буквы o. В I'm и he's " +
            "он делает то же самое, только выпадают там другие буквы.",
        },
        {
          id: "amnt-ne-byvaet",
          kind: "note",
          tone: "mistake",
          text:
            "У I короткая форма только одна: No, I'm not. Слова «amn't» в " +
            "английском нет вовсе, поэтому слипается не глагол с not, а I с am. У остальных " +
            "наоборот: she isn't, they aren't.",
        },
        // Запись четырёх ответов подряд убрана: каждый звучит в таблице выше.
        {
          id: "slovar-net",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "no", translation: "нет", example: "No, I'm not.", hint: "/nəʊ/" },
            { term: "not", translation: "не", example: "I am not a doctor.", hint: "/nɒt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-otvetit-net",
          kind: "choice",
          prompt: "«Are you a doctor?» Ответь отрицательно.",
          options: [
            { text: "No, I amn't." },
            { text: "No, I not am." },
            { text: "No, I'm not.", correct: true },
          ],
          hint: "У I короткая форма только одна.",
          why:
            "No, I'm not. Слова «amn't» не существует, а «I not am» — перевёрнутый порядок.",
        },
        {
          id: "z2-dopisat-isnt",
          kind: "gap",
          prompt: "«Is she from Spain?» Допиши короткий ответ «нет».",
          before: "No, she ",
          after: ".",
          answer: "isn't",
          hint: "Форма is с апострофом и not.",
          why: "No, she isn't. Полная запись — No, she is not; обе верны.",
        },
        {
          id: "z3-razvernut-otricanie",
          kind: "short",
          prompt: "Запиши полностью, без короткой формы: «No, they aren't.»",
          answer: "No, they are not.",
          exact: true,
          accept: ["No, they are not"],
          hint: "Апостроф уходит, буква возвращается.",
          why: "No, they are not. Форма aren't разворачивается в are not.",
        },
        {
          id: "z4-otmetit-nevernye",
          kind: "hottext",
          prompt: "Отметь ответы с ошибкой.",
          parts: [
            { text: "No, I amn't.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, he isn't.", selectable: true },
            { text: " · " },
            { text: "No, they aren't.", selectable: true },
            { text: " · " },
            { text: "No, she not is.", selectable: true, correct: true },
          ],
          hint: "Одного слова в английском нет вовсе, в другой строке нарушен порядок.",
          why:
            "«Amn't» не существует — нужно I'm not. «She not is» — порядок перевёрнут, " +
            "нужно she isn't.",
        },
        {
          id: "z5-sopostavit-otricaniya",
          kind: "match",
          prompt: "Сопоставь местоимение и краткий отрицательный ответ.",
          left: ["I", "he", "they"],
          right: ["aren't", "'m not", "isn't"],
          answer: [1, 2, 0],
          hint: "У одного местоимения слипается не глагол с not, а само местоимение с глаголом.",
          why: "I'm not, he isn't, they aren't.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mestoimeniya-v-voprose",
      title: "Вопросы обо всех",
      estimatedMinutes: 14,
      outcome: "подбирать форму be к местоимению в вопросе",

      blocks: [
        {
          id: "zachem-vse-mestoimeniya",
          kind: "explain",
          text: [
            "Формы be в вопросе те же, что и в сообщении. Am идёт с I, is — с he, she и it, " +
              "are — с you, we и they. Меняется только место: форма выходит вперёд.",
            "Собрать всё вместе стоит ради одного: тогда вопрос строишь по правилу, а не " +
              "вспоминаешь подходящий пример.",
          ],
        },
        {
          id: "tablica-vseh-voprosov",
          kind: "table",
          caption: "Все семь вопросов",
          // Начало вопроса звучит без продолжения: в ячейке стоит именно
          // начало, и озвучивается ровно то, что напечатано.
          zvuchat: ["Am I…?", "Are you…?", "Is he…?", "Is she…?", "Is it…?", "Are we…?",
            "Are they…?", "Yes, you are.", "Yes, I am.", "Yes, he is.", "Yes, she is.",
            "Yes, it is.", "Yes, we are.", "Yes, they are.", "No, you aren't.", "No, I'm not.",
            "No, he isn't.", "No, she isn't.", "No, it isn't.", "No, we aren't.",
            "No, they aren't.",
          ],
          head: ["Кто", "Вопрос", "Ответ «да»", "Ответ «нет»"],
          rows: [
            ["I", "Am I…?", "Yes, you are.", "No, you aren't."],
            ["you", "Are you…?", "Yes, I am.", "No, I'm not."],
            ["he", "Is he…?", "Yes, he is.", "No, he isn't."],
            ["she", "Is she…?", "Yes, she is.", "No, she isn't."],
            ["it", "Is it…?", "Yes, it is.", "No, it isn't."],
            ["we", "Are we…?", "Yes, we are.", "No, we aren't."],
            ["they", "Are they…?", "Yes, they are.", "No, they aren't."],
          ],
        },
        {
          id: "vopros-pro-i",
          kind: "note",
          tone: "info",
          text:
            "Строка с Am I…? нужна не только для полноты таблицы. Вопрос «Am I right?» — " +
            "«я прав?» — пригодится, когда хочешь проверить себя.",
        },
        {
          id: "otvet-menyaet-lico",
          kind: "note",
          tone: "mistake",
          text:
            "Две строки таблицы меняют местоимение в ответе: на Am I…? отвечают про you, на " +
            "Are you…? — про I. Остальные пять отвечают тем же местоимением, каким " +
            "спрашивали.",
        },
        // Запись всех семи начал подряд убрана: каждое звучит в таблице выше, у
        // своей строки, — а вместе с ним и оба ответа.

        // ---- задания ----
        {
          id: "z1-forma-dlya-they",
          kind: "choice",
          prompt: "Какая форма be открывает вопрос про they?",
          options: [{ text: "Is" }, { text: "Am" }, { text: "Are", correct: true }],
          hint: "They из той же строки, что you и we.",
          why: "Are they…? Форма are идёт с you, we и they.",
        },
        {
          id: "z2-dopisat-formu",
          kind: "gap",
          prompt: "Допиши форму be, чтобы получился вопрос про Дану.",
          before: "",
          after: " she from Almaty?",
          answer: "Is",
          exact: true,
          hint: "Это слово стоит в вопросе первым, поэтому пишется с заглавной буквы.",
          why: "Is she from Almaty? С she идёт форма is, и она стоит первой.",
        },
        {
          id: "z3-sopostavit-formy",
          kind: "match",
          prompt: "Сопоставь местоимение и форму, с которой начинается вопрос.",
          left: ["I", "it", "we"],
          right: ["Are", "Am", "Is"],
          answer: [1, 2, 0],
          hint: "Одна форма годится только для одного местоимения.",
          why: "Am I…?, Is it…?, Are we…?",
        },
        {
          id: "z4-otmetit-nevernye-voprosy",
          kind: "hottext",
          prompt: "Отметь вопросы, где форма be не подходит местоимению.",
          parts: [
            { text: "Is you a student?", selectable: true, correct: true },
            { text: " · " },
            { text: "Are they in Rome?", selectable: true },
            { text: " · " },
            { text: "Am I from Spain?", selectable: true },
            { text: " · " },
            { text: "Are he a doctor?", selectable: true, correct: true },
          ],
          hint: "Сверься с таблицей: какая форма с каким местоимением.",
          why:
            "«Is you» — с you идёт are. «Are he» — с he идёт is. Должно быть Are you…? и " +
            "Is he…?",
        },
        {
          id: "z5-sobrat-vopros-pro-nas",
          kind: "order",
          prompt: "Собери вопрос: «Мы в Астане?»",
          items: ["Astana", "we", "Are", "in"],
          answer: [2, 1, 3, 0],
          hint: "С we идёт форма are, и она стоит первой.",
          why: "Are we in Astana? Форма be открывает вопрос, местоимение идёт вторым.",
        },
        {
          id: "z6-otvetit-na-am-i",
          kind: "choice",
          prompt: "«Am I right?» Как ответить утвердительно?",
          options: [
            { text: "Yes, you are.", correct: true },
            { text: "Yes, I am." },
            { text: "Yes, am I." },
          ],
          hint: "Собеседник спрашивает про себя — отвечай про него.",
          why:
            "Yes, you are. На Am I…? отвечают про you: спрашивает один, отвечает другой, и " +
            "местоимение меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vopros-o-drugom",
      title: "Спросить о другом человеке",
      estimatedMinutes: 13,
      outcome: "спрашивать о другом человеке: Is he, Is she",

      blocks: [
        {
          id: "zachem-o-drugom",
          kind: "explain",
          text: [
            "Всё, что ты умеешь рассказать о себе, можно спросить и о другом человеке. " +
              "I'm from Almaty — Is he from Almaty? I'm a doctor — Is she a doctor?",
            "Ничего нового учить не нужно. Возьми сообщение из модуля про рассказ о себе, " +
              "поставь вместо I слово he или she — и переставь первые два слова.",
          ],
        },
        {
          id: "tablica-o-drugom",
          kind: "table",
          caption: "О себе и о другом",
          // He и she на слух различает один звук в начале. Кнопки стоят рядом
          // нарочно: включив две подряд, эту разницу и слышно.
          zvuchat: ["I'm from Almaty.", "Is he from Almaty?", "Is she from Almaty?",
            "I'm a student.", "Is he a student?", "Is she a student?", "I'm in Astana.",
            "Is he in Astana?", "Is she in Astana?",
          ],
          head: ["О себе", "Вопрос о нём", "Вопрос о ней"],
          rows: [
            ["I'm from Almaty.", "Is he from Almaty?", "Is she from Almaty?"],
            ["I'm a student.", "Is he a student?", "Is she a student?"],
            ["I'm in Astana.", "Is he in Astana?", "Is she in Astana?"],
          ],
        },
        {
          id: "artikl-ostayotsya",
          kind: "note",
          tone: "mistake",
          text:
            "В вопросе артикль никуда не девается: «Is he a doctor?», а не «Is he doctor?». " +
            "Перестановка касается только первых двух слов, остальное предложение стоит как " +
            "стояло.",
        },
        {
          id: "razgovor-o-tretem",
          kind: "example",
          caption: "Разговор о третьем",
          razgovor: true,
          text:
            "— Is she from Turkey?\n— No, she isn't. She's from Spain.\n— Is she a teacher?\n— Yes, she is.",
          explain:
            "После краткого «нет» часто добавляют, как на самом деле: No, she isn't. She's " +
            "from Spain. Так разговор не обрывается на отрицании.",
        },
        // Запись убрана: разговор выше звучит целиком и на два голоса.

        // ---- задания ----
        {
          id: "z1-vopros-o-nyom",
          kind: "short",
          prompt: "Сделай вопрос о нём из сообщения «He is a driver.»",
          answer: "Is he a driver?",
          exact: true,
          accept: ["Is he a driver"],
          hint: "Первые два слова меняются местами.",
          why: "Is he a driver? Артикль остался на месте.",
        },
        {
          id: "z2-najti-propusk-a",
          kind: "choice",
          prompt: "В каком вопросе пропущено слово перед занятием?",
          options: [
            { text: "Is she a nurse?" },
            { text: "Is he doctor?", correct: true },
            { text: "Is he an artist?" },
          ],
          hint: "Перед названием занятия всегда стоит короткое слово.",
          why: "«Is he doctor?» — пропущено a. Правильно: Is he a doctor?",
        },
        {
          id: "z3-dopolnit-otvet",
          kind: "gap",
          prompt: "«Is she from Turkey?» Ответь «нет» и добавь, что она из Испании.",
          before: "No, she isn't. She's ",
          after: " Spain.",
          answer: "from",
          hint: "Речь о происхождении.",
          why:
            "No, she isn't. She's from Spain. После краткого «нет» добавляют, как на самом " +
            "деле, — иначе разговор обрывается.",
        },
        {
          id: "z4-sobrat-vopros-o-ney",
          kind: "order",
          prompt: "Собери вопрос: «Она в Риме?»",
          items: ["Rome", "she", "Is", "in"],
          answer: [2, 1, 3, 0],
          hint: "С she идёт форма is.",
          why: "Is she in Rome? Форма be впереди, местоимение вторым, дальше всё остальное.",
        },
        {
          id: "z5-otmetit-voprosy-o-drugom",
          kind: "hottext",
          prompt: "Отметь вопросы о третьем человеке.",
          parts: [
            { text: "Are you a student?", selectable: true },
            { text: " · " },
            { text: "Is he from Almaty?", selectable: true, correct: true },
            { text: " · " },
            { text: "Is she a nurse?", selectable: true, correct: true },
            { text: " · " },
            { text: "Am I right?", selectable: true },
          ],
          hint: "Третий человек — это he и she, а не you и I.",
          why:
            "О третьем спрашивают через he и she. Are you…? — о собеседнике, Am I…? — о себе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "polnyy-ili-kratkiy",
      title: "Ответить коротко или полно",
      estimatedMinutes: 12,
      outcome: "выбирать между кратким и полным ответом",

      blocks: [
        {
          id: "zachem-vybor",
          kind: "explain",
          text: [
            "На вопрос Are you a student? можно ответить двумя способами. Коротко: " +
              "Yes, I am. Или полно: Yes, I am a student.",
            "Оба ответа верны. Короткий годится, когда собеседник уже всё назвал в вопросе. " +
              "Полный нужен, когда к ответу добавляют что-то новое: Yes, I am. I'm from " +
              "Almaty.",
          ],
        },
        {
          id: "tablica-polnyy-kratkiy",
          kind: "table",
          caption: "Один вопрос — два ответа",
          zvuchat: ["Are you a student?", "Is he a doctor?", "Is she in Rome?", "Yes, I am.",
            "No, he isn't.", "Yes, she is.", "Yes, I am. I'm from Almaty.",
            "No, he isn't. He's a driver.", "Yes, she is. She's a teacher.",
          ],
          head: ["Вопрос", "Коротко", "С добавлением"],
          rows: [
            ["Are you a student?", "Yes, I am.", "Yes, I am. I'm from Almaty."],
            ["Is he a doctor?", "No, he isn't.", "No, he isn't. He's a driver."],
            ["Is she in Rome?", "Yes, she is.", "Yes, she is. She's a teacher."],
          ],
        },
        {
          id: "odno-yes-malo",
          kind: "note",
          tone: "mistake",
          text:
            "Одного слова yes или no для ответа мало: за ним идут местоимение и форма be. " +
            "«Yes» само по себе годится, только если больше ничего сказать не нужно, — но " +
            "в разговоре после него ждут продолжения.",
        },
        {
          id: "posle-net-dobavlyayut",
          kind: "note",
          tone: "info",
          text:
            "После отрицательного ответа особенно полезно добавить, как на самом деле: " +
            "No, he isn't. He's a driver. Иначе собеседник узнал только то, чего нет.",
        },
        // Запись убрана: и вопрос, и оба ответа звучат в таблице выше — включив
        // соседние кнопки, короткий и полный ответ и сравнивают.

        // ---- задания ----
        {
          id: "z1-korotkiy-otvet",
          kind: "choice",
          prompt: "«Is she a nurse?» Какой ответ короткий и верный?",
          options: [
            { text: "Yes, she is a nurse." },
            { text: "Yes.", },
            { text: "Yes, she is.", correct: true },
          ],
          hint: "Короткий ответ — это yes, местоимение и форма be.",
          why:
            "Yes, she is. Первый ответ верен, но не короток; одного «Yes» в разговоре мало.",
        },
        {
          id: "z2-dobavit-posle-net",
          kind: "short",
          prompt: "«Is he a doctor?» Ответь «нет» коротко.",
          answer: "No, he isn't.",
          exact: true,
          accept: ["No, he isn't", "No, he is not.", "No, he is not"],
          hint: "No, местоимение и форма be с not.",
          why: "No, he isn't — или полностью No, he is not. Оба написания засчитываются.",
        },
        {
          id: "z3-otmetit-polnye",
          kind: "hottext",
          prompt: "Отметь ответы, в которых к «да» или «нет» добавлено что-то новое.",
          parts: [
            { text: "Yes, I am.", selectable: true },
            { text: " · " },
            { text: "No, he isn't. He's a driver.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, she is. She's from Spain.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, they aren't.", selectable: true },
          ],
          hint: "Ищи ответы из двух предложений.",
          why:
            "В двух ответах после краткого идёт второе предложение с новым сведением. Два " +
            "других коротки и на этом заканчиваются.",
        },
        {
          id: "z4-sopostavit-otvety",
          kind: "match",
          prompt: "Сопоставь вопрос и подходящее добавление после «нет».",
          left: ["Is he a doctor?", "Is she from Turkey?", "Are you in Astana?"],
          right: ["I'm in Almaty.", "He's a driver.", "She's from Spain."],
          answer: [1, 2, 0],
          hint: "Добавление отвечает на то же, о чём спрашивали.",
          why:
            "О занятии спрашивают — о занятии и добавляют: He's a driver. О стране — " +
            "She's from Spain. О городе — I'm in Almaty.",
        },
        {
          id: "z5-otvetit-s-dobavleniem",
          kind: "short",
          prompt: "«Are you a teacher?» Ответь «нет» коротко.",
          answer: "No, I'm not.",
          exact: true,
          accept: ["No, I'm not", "No, I am not.", "No, I am not"],
          hint: "У I короткая форма только одна.",
          why: "No, I'm not — или полностью No, I am not.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vopros-ili-soobshchenie",
      title: "Вопрос или сообщение",
      estimatedMinutes: 12,
      outcome: "отличать вопрос от сообщения по порядку слов",

      blocks: [
        {
          id: "zachem-otlichat",
          kind: "explain",
          text: [
            "По-русски вопрос от сообщения часто отличает только голос. «Ты студент» и " +
              "«ты студент?» — одни и те же слова в одном порядке.",
            "По-английски так нельзя. Порядок слов разный, и по нему видно всё сразу: " +
              "You are a student — сообщение, Are you a student? — вопрос. Даже без знака " +
              "вопроса понятно, что перед тобой.",
          ],
        },
        {
          id: "tablica-otlichiy",
          kind: "table",
          caption: "Чем отличаются",
          // В ячейке знака в конце нет нарочно — о нём говорит соседний
          // столбец. Произносится строка со знаком: без него у вопроса не
          // будет вопросительного голоса, а урок как раз о нём.
          zvuk: {
            "She is a nurse": "She is a nurse.",
            "Is she a nurse": "Is she a nurse?",
          },
          head: ["", "Первым стоит", "Пример", "В конце"],
          rows: [
            ["Сообщение", "тот, о ком речь", "She is a nurse", "точка"],
            ["Вопрос", "форма be", "Is she a nurse", "знак вопроса"],
          ],
        },
        {
          id: "znak-ne-edinstvennoe",
          kind: "note",
          tone: "info",
          text:
            "Знак вопроса — не единственная примета и не главная. Главная — порядок: если " +
            "предложение открывается формой be, это вопрос, даже когда знак забыли " +
            "поставить.",
        },
        {
          id: "russkiy-poryadok",
          kind: "note",
          tone: "mistake",
          text:
            "«You are a student?» со знаком вопроса — по русской привычке: слова остались на " +
            "местах, а знак поменяли. По-английски вопрос строится перестановкой, а не " +
            "знаком: Are you a student?",
        },
        // Запись убрана: пара «сообщение — вопрос» звучит в таблице выше двумя
        // соседними кнопками, а вторая такая же пара разбирается в уроке
        // слушания этого же модуля.

        // ---- задания ----
        {
          id: "z1-chto-pered-toboy",
          kind: "choice",
          prompt: "«Are they in Almaty» — что это, даже без знака в конце?",
          options: [
            { text: "Вопрос", correct: true },
            { text: "Сообщение" },
            { text: "По записи не понять" },
          ],
          hint: "Смотри, что стоит первым словом.",
          why:
            "Вопрос: предложение открывается формой be. Знак в конце подтверждает это, но " +
            "решает порядок.",
        },
        {
          id: "z2-otmetit-soobshcheniya",
          kind: "hottext",
          prompt: "Отметь сообщения — то есть не вопросы.",
          parts: [
            { text: "Is he a driver", selectable: true },
            { text: " · " },
            { text: "She is from Rome", selectable: true, correct: true },
            { text: " · " },
            { text: "Are you a student", selectable: true },
            { text: " · " },
            { text: "They are in Astana", selectable: true, correct: true },
          ],
          hint: "В сообщении первым идёт тот, о ком речь.",
          why:
            "«She is from Rome» и «They are in Astana» начинаются с того, о ком речь, — это " +
            "сообщения. Две другие строки открываются формой be.",
        },
        {
          id: "z3-ispravit-vopros",
          kind: "short",
          prompt: "Исправь и запиши верно: «You are a doctor?»",
          answer: "Are you a doctor?",
          exact: true,
          accept: ["Are you a doctor"],
          hint: "Знака вопроса мало — нужна перестановка.",
          why:
            "Are you a doctor? По-английски вопрос строится порядком слов, а не только " +
            "знаком в конце.",
        },
        {
          id: "z4-sdelat-soobshchenie",
          kind: "short",
          prompt: "Сделай из вопроса сообщение: «Is she in Almaty?»",
          answer: "She is in Almaty.",
          exact: true,
          accept: ["She is in Almaty", "She's in Almaty.", "She's in Almaty"],
          hint: "Перестановка работает и в обратную сторону.",
          why: "She is in Almaty. Первые два слова вернулись на свои места, знак стал точкой.",
        },
        {
          id: "z5-sopostavit-pary",
          kind: "match",
          prompt: "Сопоставь сообщение и вопрос из тех же слов.",
          left: ["He is a driver.", "You are in Rome.", "They are students."],
          right: ["Are you in Rome?", "Are they students?", "Is he a driver?"],
          answer: [2, 0, 1],
          hint: "Смотри, кто стоит вторым словом в вопросе.",
          why: "В каждой паре первые два слова поменялись местами, остальное совпадает.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "razgovor-s-voprosami",
      title: "Разговор из вопросов и ответов",
      estimatedMinutes: 15,
      outcome: "вести разговор из вопросов и ответов",

      blocks: [
        {
          id: "zachem-razgovor",
          kind: "explain",
          text: [
            "Собеседник рассказал о себе и замолчал. Дальше говорить тебе — и проще всего " +
              "спросить его о том же самом.",
            "Разговор идёт парами: вопрос — ответ, вопрос — ответ. Каждый ответ можно " +
              "продолжить встречным вопросом, и разговор идёт дальше.",
          ],
        },
        {
          id: "polnyy-razgovor-voprosov",
          kind: "example",
          caption: "Разговор целиком",
          razgovor: true,
          text:
            "— Hello! I'm Dana. Are you a student?\n— No, I'm not. I'm a teacher. And you?\n" +
            "— Yes, I am. Are you from Astana?\n— No, I'm not. I'm from Almaty.\n— Nice to meet you!",
          explain:
            "Каждый ответ «нет» дополнен тем, как на самом деле. And you? возвращает вопрос " +
            "собеседнику — приём из модуля про приветствие.",
        },
        {
          id: "tablica-shagov-razgovora",
          kind: "table",
          caption: "Из чего складывается такой разговор",
          zvuchat: ["Are you a student?", "No, I'm not.", "I'm a teacher.", "And you?",
          ],
          head: ["Шаг", "Пример"],
          rows: [
            ["спросить", "Are you a student?"],
            ["ответить коротко", "No, I'm not."],
            ["добавить, как есть", "I'm a teacher."],
            ["вернуть вопрос", "And you?"],
          ],
        },
        {
          id: "vopros-bez-otveta",
          kind: "note",
          tone: "mistake",
          text:
            "Ответить одним «No» и замолчать — оставить собеседника ни с чем: он узнал " +
            "только то, чего нет. Добавь одно предложение о том, как на самом деле, и " +
            "разговор продолжится сам.",
        },
        // Запись убрана: разговор выше звучит целиком и на два голоса, а шаги
        // разговора — по одному в таблице.

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor",
          kind: "order",
          prompt: "Расставь реплики разговора по порядку.",
          items: [
            "No, I'm not. I'm a teacher.",
            "Hello! Are you a student?",
            "Yes, I am.",
            "And you?",
          ],
          answer: [1, 0, 3, 2],
          hint: "Сначала приветствие с вопросом, встречный вопрос идёт после ответа.",
          why:
            "Вопрос, ответ с добавлением, встречный вопрос, ответ на него. And you? стоит " +
            "после того, как первый собеседник рассказал о себе.",
        },
        {
          id: "z2-chto-otvetit",
          kind: "choice",
          prompt: "«Are you from Astana?» Ты из Алматы. Что ответить?",
          options: [
            { text: "Yes, I am. I'm from Almaty." },
            { text: "No, I'm not. I'm from Almaty.", correct: true },
            { text: "No, I'm not from Astana Almaty." },
          ],
          hint: "Сначала краткий ответ, потом отдельное предложение о том, как есть.",
          why:
            "No, I'm not. I'm from Almaty. Первый ответ противоречит сам себе, третий — " +
            "два предложения, слитые в одно.",
        },
        {
          id: "z3-dopisat-vstrechnyy",
          kind: "gap",
          prompt: "Допиши встречный вопрос после своего ответа.",
          before: "Yes, I am. And ",
          after: "?",
          answer: "you",
          hint: "Тот же приём, что в модуле про приветствие.",
          why: "And you? Так вопрос возвращают, не повторяя его целиком.",
        },
        {
          id: "z4-otmetit-nepolnye",
          kind: "hottext",
          prompt: "Отметь ответы, после которых собеседник остался ни с чем.",
          parts: [
            { text: "No, I'm not. I'm a driver.", selectable: true },
            { text: " · " },
            { text: "No.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, she isn't.", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, I am. I'm from Almaty.", selectable: true },
          ],
          hint: "Ищи ответы, которые говорят только о том, чего нет.",
          why:
            "«No» и «No, she isn't» сообщают только отрицание. Два других добавляют, как на " +
            "самом деле, и разговор идёт дальше.",
        },
        {
          id: "z5-zadat-vopros",
          kind: "short",
          prompt: "Спроси собеседника, преподаватель ли он. Запиши вопрос целиком.",
          answer: "Are you a teacher?",
          exact: true,
          accept: ["Are you a teacher"],
          hint: "Вопрос открывает форма be, перед занятием стоит короткое слово.",
          why: "Are you a teacher? Форма are идёт с you, артикль перед занятием обязателен.",
        },
        {
          id: "z6-razgovor-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух свою часть разговора: спроси, ответь на встречный вопрос и верни его.",
          phrase: "Are you a student? ... No, I'm not. I'm a ... . And you?",
          translation: "Ты студент? ... Нет. Я ... . А ты?",
          hint: "Между репликами оставляй паузу — там отвечает собеседник.",
          why:
            "Это весь модуль в одном упражнении: вопрос, краткий ответ, добавление и " +
            "встречный вопрос.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания. Модуль весь о вопросах, и на слух вопрос от сообщения
    // отличает не порядок слов, а интонация — это и есть трудность урока.
    //
    // Расшифровки спрятаны за кнопку, открытую всегда.
    // =====================================================================
    {
      slug: "slushaem-vopros-i-otvet",
      title: "Слушаем вопрос и ответ",
      estimatedMinutes: 13,
      outcome: "отличать на слух вопрос от сообщения и понимать краткий ответ",

      blocks: [
        {
          id: "zachem-slushat-vopros",
          kind: "explain",
          text: [
            "На письме вопрос виден сразу: знак в конце и переставленные слова. На слух " +
              "знака нет, а слова летят быстро.",
            "Зато перестановка слышна. В сообщении первым звучит тот, о ком речь: You " +
              "are. В вопросе первой выходит форма be: Are you. Лови первое слово.",
          ],
        },
        {
          id: "golos-vverh-i-vniz",
          kind: "table",
          caption: "Те же слова в другом порядке — нажми и сравни",
          zvuchat: ["You are a student.", "Are you a student?", "He is a doctor.",
            "Is he a doctor?",
          ],
          head: ["Сообщение — первым тот, о ком речь", "Вопрос — первой форма be"],
          rows: [
            ["You are a student.", "Are you a student?"],
            ["He is a doctor.", "Is he a doctor?"],
          ],
        },
        {
          id: "kratkiy-otvet-na-sluh",
          kind: "note",
          tone: "info",
          text:
            "Краткий ответ звучит совсем коротко, и на нём надо успеть. Зато в нём есть " +
              "всё: Yes или No, потом тот, о ком речь, потом та же форма be, что была в " +
              "вопросе. Yes, I am. No, she isn't.",
        },
        {
          id: "zapis-vopros-ili-soobshchenie",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "Are you a teacher? She is a nurse. Is he from Turkey?",
        },
        {
          id: "zapis-razgovor-voprosov",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Is Dana a student? — No, she isn't. She is a teacher. — " +
            "And Alim? Is he a student? — Yes, he is.",
        },

        // ---- задания ----
        {
          id: "z1-skolko-voprosov",
          kind: "choice",
          about: "zapis-vopros-ili-soobshchenie",
          prompt: "Послушай первую запись. Сколько в ней вопросов?",
          options: [
            { text: "Один" },
            { text: "Два", correct: true },
            { text: "Три" },
          ],
          hint: "Считай те предложения, где первой звучит форма be.",
          why:
            "Are you a teacher? и Is he from Turkey? — вопросы: первой идёт форма be. " +
            "She is a nurse — сообщение: первой идёт she.",
        },
        {
          id: "z2-kakoe-soobshchenie",
          kind: "short",
          about: "zapis-vopros-ili-soobshchenie",
          prompt:
            "Послушай первую запись. Одно предложение не вопрос. Чем занят человек, " +
            "о котором в нём говорят? Ответь английским словом.",
          answer: "nurse",
          accept: ["a nurse", "she is a nurse"],
          hint: "Это то предложение, где форма be стоит не первой.",
          why: "She is a nurse. Медсестра.",
        },
        {
          id: "z3-dana-student",
          kind: "choice",
          about: "zapis-razgovor-voprosov",
          prompt: "Послушай разговор. Дана студентка?",
          options: [
            { text: "Да" },
            { text: "Нет, она преподаватель", correct: true },
            { text: "Об этом не спрашивали" },
          ],
          hint: "После краткого ответа собеседник добавляет, кто она на самом деле.",
          why:
            "No, she isn't. She is a teacher. Краткий ответ отрицает, а следующее " +
            "предложение называет верное.",
        },
        {
          id: "z4-alim-student",
          kind: "choice",
          about: "zapis-razgovor-voprosov",
          prompt: "Послушай разговор. А Алим студент?",
          options: [
            { text: "Да", correct: true },
            { text: "Нет" },
            { text: "Про Алима не спрашивали" },
          ],
          hint: "Про Алима спрашивают во второй половине записи.",
          why: "Is he a student? — Yes, he is. Да.",
        },
        {
          id: "z5-sprosit-vsluh-s-golosom",
          kind: "speak",
          prompt:
            "Произнеси вслух два предложения подряд: сначала сообщение, потом вопрос из " +
            "тех же слов.",
          phrase: "She is a teacher. Is she a teacher?",
          translation: "Она преподаватель. Она преподаватель?",
          hint: "Меняются местами только первые два слова, остальное то же.",
          why:
            "Собеседник понимает, вопрос это или нет, по первому слову. Оставишь " +
            "порядок сообщения — он и услышит сообщение.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Разговор из догадок и поправок: половина сказанного здесь
    // НЕВЕРНА, и понять текст — значит отличить догадку спрашивающего от
    // того, как есть на самом деле. Новых английских слов урок не вводит.
    //
    // Опора — в `sources`.
    // =====================================================================
    {
      slug: "chitaem-vopros-i-otvet",
      title: "Читаем разговор с вопросами",
      estimatedMinutes: 12,
      outcome: "отличать в разговоре догадку спрашивающего от того, как есть",

      blocks: [
        {
          id: "zachem-chitat-vopros-i-otvet",
          kind: "explain",
          text: [
            "В разговоре из вопросов половина сказанного — догадки. Спрашивающий думает " +
              "одно, а на деле выходит другое.",
            "Читать такой разговор по вопросам нельзя: в вопросе стоит предположение. " +
              "Смотреть надо на ответ — там сказано, как есть.",
          ],
        },
        {
          id: "razgovor-s-dogadkami",
          kind: "text",
          genre: "message",
          title: "Is she Dana?",
          body: [
            "— Is she Dana?",
            "— No, she isn't. She's Aigul.",
            "— Is she a teacher?",
            "— No, she isn't. She's a doctor.",
            "— Is she from Astana?",
            "— Yes, she is.",
            "— And you? Are you a doctor too?",
            "— No, I'm not. I'm a student.",
          ],
        },
        {
          id: "gde-iskat-vernoe",
          kind: "note",
          tone: "mistake",
          text:
            "Прочитав «Is she a teacher?», легко решить, что она преподаватель. Но это " +
            "догадка спрашивающего, и следующая строка её отменяет: No, she isn't. She's " +
            "a doctor. Верное стоит после «нет», а не в вопросе.",
        },
        {
          id: "gde-dogadka-verna",
          kind: "note",
          tone: "info",
          text:
            "Про Айгуль спросили трижды, и подтвердилась только одна догадка — про " +
            "город. Ответ «Yes, she is» ничего не добавляет, и это значит: спрашивающий " +
            "угадал, а сведения надо брать из его же вопроса.",
        },

        // ---- задания ----
        {
          id: "z1-kem-rabotaet",
          kind: "choice",
          about: "razgovor-s-dogadkami",
          prompt: "Кем работает Aigul?",
          options: [
            { text: "Преподавателем" },
            { text: "Врачом", correct: true },
            { text: "Она студентка" },
          ],
          hint: "Про занятие спросили один раз, и ответ начался с «нет».",
          why:
            "She's a doctor. «Is she a teacher?» — это догадка, и она не подтвердилась: " +
            "верное занятие названо после No, she isn't.",
        },
        {
          id: "z2-otkuda-aigul",
          kind: "short",
          about: "razgovor-s-dogadkami",
          prompt: "Из какого города Aigul? Напиши название по-английски.",
          answer: "Astana",
          exact: true,
          accept: ["Astana.", "She's from Astana."],
          hint: "Здесь ответ короткий — значит смотри, о чём спрашивали.",
          why:
            "Astana. Ответ «Yes, she is» города не называет: он подтверждает то, что " +
            "стоит в вопросе.",
        },
        {
          id: "z3-kto-student",
          kind: "choice",
          about: "razgovor-s-dogadkami",
          prompt: "Кто из двоих собеседников студент?",
          options: [
            { text: "Тот, кто задаёт вопросы" },
            { text: "Тот, кто отвечает", correct: true },
            { text: "Aigul" },
          ],
          hint: "Последняя строка — ответ, а не вопрос.",
          why:
            "Отвечающий: «I'm a student». Aigul в разговоре не участвует, о ней говорят " +
            "в третьем лице — she.",
        },
        {
          // Прежде задание просило отметить поправки — а врезка выше называла
          // единственный ответ, который поправкой не был, прямым текстом.
          // Ученик закрывал задание, не читая разговор. Нашёл методист.
          // Теперь отмечают занятия, и найти их можно только в тексте.
          id: "z4-otmetit-zanyatiya",
          kind: "hottext",
          about: "razgovor-s-dogadkami",
          prompt: "Отметь занятия, которые названы в разговоре.",
          parts: [
            { text: "a teacher", selectable: true, correct: true },
            { text: " · " },
            { text: "a nurse", selectable: true },
            { text: " · " },
            { text: "a doctor", selectable: true, correct: true },
            { text: " · " },
            { text: "a driver", selectable: true },
            { text: " · " },
            { text: "a student", selectable: true, correct: true },
          ],
          hint: "Занятие называют и в вопросе, и в ответе. Считаются оба места.",
          why:
            "A teacher, a doctor и a student. Teacher стоит в догадке, doctor — в " +
            "поправке к ней, student — в последнем ответе. Nurse и driver в разговоре " +
            "не звучат вовсе.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 18, из них 10 требуют написать ответ самому. Итогов восемь,
  // спрашиваем восемь — по одному на каждый.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.8,
    questions: [
      // ---- слушание ---------------------------------------------------
      // Другой случай и другой вид задания, чем в уроке: там три предложения
      // подряд и разговор о Дане, здесь одна пара и вопрос о стране.
      {
        id: "q-na-sluh-vopros-ili-net",
        kind: "choice",
        outcome: "отличать на слух вопрос от сообщения и понимать краткий ответ",
        zvuk: "You are from Turkey.",
        prompt: "Послушай запись. Это вопрос или сообщение?",
        options: [
          { text: "Сообщение", correct: true },
          { text: "Вопрос" },
          { text: "По записи не понять" },
        ],
        why:
          "You are from Turkey. Первым звучит you, а не форма be, — значит это " +
          "сообщение. В вопросе было бы Are you from Turkey?",
      },
      {
        id: "q-na-sluh-chto-otvetili",
        kind: "short",
        outcome: "отличать на слух вопрос от сообщения и понимать краткий ответ",
        zvuk: "Are they from Kazakhstan? — Yes, they are.",
        prompt:
          "Послушай запись. Ответ был «да» или «нет»? Напиши одно английское слово.",
        answer: "yes",
        accept: ["Yes", "yes, they are"],
        why: "Yes, they are. Краткий ответ повторяет ту же форму be, что и вопрос.",
      },
      {
        id: "q-sdelat-vopros",
        kind: "short",
        outcome: "строить вопрос с be, поменяв местами первые два слова",
        prompt: "Сделай вопрос из сообщения «She is a driver.»",
        answer: "Is she a driver?",
        exact: true,
        accept: ["Is she a driver"],
        why: "Is she a driver? Первые два слова меняются местами, точка становится знаком вопроса.",
      },
      {
        id: "q-chto-delayut",
        kind: "choice",
        outcome: "строить вопрос с be, поменяв местами первые два слова",
        prompt: "Что делают с сообщением, чтобы вышел вопрос с be?",
        options: [
          { text: "Убирают глагол" },
          { text: "Меняют местами первые два слова", correct: true },
          { text: "Ставят слово do в начало" },
        ],
        why: "Первые два слова меняются местами. Слово do понадобится с другими глаголами, позже в курсе.",
      },
      {
        id: "q-otvet-da",
        kind: "short",
        outcome: "коротко отвечать «да»: Yes, I am, Yes, he is",
        prompt: "«Are you a student?» Ответь коротко и утвердительно.",
        answer: "Yes, I am.",
        exact: true,
        accept: ["Yes, I am"],
        why: "Yes, I am. На вопрос про you отвечают про I, короткая форма в конце не ставится.",
      },
      {
        id: "q-otvet-da-o-ney",
        kind: "gap",
        outcome: "коротко отвечать «да»: Yes, I am, Yes, he is",
        prompt: "«Is she a nurse?» Допиши утвердительный ответ.",
        before: "Yes, she ",
        after: ".",
        answer: "is",
        why: "Yes, she is. Повторяют то же местоимение и ту же форму be.",
      },
      {
        id: "q-otvet-net",
        kind: "short",
        outcome: "коротко отвечать «нет»: No, I'm not, No, she isn't",
        prompt: "«Are you a doctor?» Ответь коротко и отрицательно.",
        answer: "No, I'm not.",
        exact: true,
        accept: ["No, I'm not", "No, I am not.", "No, I am not"],
        why: "No, I'm not. Слова «amn't» в английском нет.",
      },
      {
        id: "q-otvet-net-o-nyom",
        kind: "gap",
        outcome: "коротко отвечать «нет»: No, I'm not, No, she isn't",
        prompt: "«Is he from Spain?» Допиши отрицательный ответ короткой формой.",
        before: "No, he ",
        after: ".",
        answer: "isn't",
        why: "No, he isn't — или полностью No, he is not.",
      },
      {
        id: "q-forma-v-voprose",
        kind: "gap",
        outcome: "подбирать форму be к местоимению в вопросе",
        prompt: "Допиши форму be, чтобы получился вопрос про they.",
        before: "",
        after: " they in Rome?",
        answer: "Are",
        exact: true,
        why: "Are they in Rome? С they идёт форма are, и она открывает вопрос.",
      },
      {
        id: "q-najti-nesovpadenie",
        kind: "choice",
        outcome: "подбирать форму be к местоимению в вопросе",
        prompt: "В каком вопросе форма be не подходит местоимению?",
        options: [
          { text: "Am I right?" },
          { text: "Are you a student?" },
          { text: "Are he a doctor?", correct: true },
        ],
        why: "«Are he» — форма are осталась от you, а он один: Is he a doctor?",
      },
      {
        id: "q-vopros-o-drugom",
        kind: "short",
        outcome: "спрашивать о другом человеке: Is he, Is she",
        // Было «Is she from Turkey?» — самая частая строка модуля: она стоит в двух
        // таблицах, в разговоре, в расшифровке записи и в задании на сопоставление.
        // Ученик писал её по памяти. Взята пара, которой в модуле нет.
        prompt: "Спроси, из Италии ли он. Запиши вопрос целиком.",
        answer: "Is he from Italy?",
        exact: true,
        accept: ["Is he from Italy"],
        why: "Is he from Italy? Форма is впереди, местоимение вторым, дальше предлог и страна.",
      },
      {
        id: "q-propusk-artiklya",
        kind: "choice",
        outcome: "спрашивать о другом человеке: Is he, Is she",
        prompt: "В каком вопросе пропущено короткое слово перед занятием?",
        options: [
          { text: "Is she an artist?" },
          { text: "Is he a nurse?" },
          { text: "Is she teacher?", correct: true },
        ],
        why: "«Is she teacher?» — пропущено a. Правильно: Is she a teacher?",
      },
      {
        id: "q-kratkiy-ili-polnyy",
        kind: "choice",
        outcome: "выбирать между кратким и полным ответом",
        prompt: "«Is he a driver?» Какой ответ короткий и верный?",
        options: [
          { text: "Yes, he is.", correct: true },
          { text: "Yes, he is a driver." },
          { text: "Yes." },
        ],
        why: "Yes, he is. Второй ответ верен, но не короток; одного «Yes» в разговоре мало.",
      },
      {
        id: "q-dobavit-posle-net",
        kind: "gap",
        outcome: "выбирать между кратким и полным ответом",
        prompt: "«Is she a teacher?» Ответили «нет» и добавили, что она врач. Допиши недостающее.",
        before: "No, she isn't. She's ",
        after: " doctor.",
        answer: "a",
        why: "No, she isn't. She's a doctor. Перед названием занятия ставят a.",
      },
      {
        id: "q-vopros-ili-soobshchenie",
        kind: "choice",
        outcome: "отличать вопрос от сообщения по порядку слов",
        prompt: "«Is he from Almaty» — что это, даже без знака в конце?",
        options: [{ text: "Сообщение" }, { text: "Вопрос", correct: true }, { text: "По записи не понять" }],
        why: "Вопрос: предложение открывается формой be. Решает порядок слов, а не знак.",
      },
      {
        id: "q-ispravit-vopros",
        kind: "short",
        outcome: "отличать вопрос от сообщения по порядку слов",
        prompt: "Исправь и запиши верно: «You are a nurse?»",
        answer: "Are you a nurse?",
        exact: true,
        accept: ["Are you a nurse"],
        why: "Are you a nurse? Одного знака вопроса мало — нужна перестановка.",
      },
      {
        id: "q-sobrat-razgovor",
        kind: "order",
        outcome: "вести разговор из вопросов и ответов",
        prompt: "Расставь реплики по порядку.",
        items: ["No, I'm not. I'm a driver.", "Are you a teacher?", "And you?"],
        answer: [1, 0, 2],
        why: "Вопрос, ответ с добавлением, встречный вопрос.",
      },
      {
        id: "q-chto-otvetit-v-razgovore",
        kind: "choice",
        outcome: "вести разговор из вопросов и ответов",
        // Вопрос был точной копией урочного задания: то же условие слово в слово и
        // те же три варианта, переставленные местами. Взяты другая пара стран и
        // другая настоящая ошибка — пропущенное «нет» в начале.
        prompt: "«Are you from Italy?» Ты из Испании. Что ответить?",
        options: [
          { text: "No, I'm not. I'm from Spain.", correct: true },
          { text: "Yes, I am. I'm from Spain." },
          { text: "I'm not. I'm from Spain." },
        ],
        why:
          "No, I'm not. I'm from Spain. Ответ начинается со слова No — без него собеседник " +
          "не слышит отказа. Дальше идёт отдельное предложение о том, как есть.",
      },
      {
        id: "q-otvet-na-am-i",
        kind: "short",
        outcome: "подбирать форму be к местоимению в вопросе",
        // Условие совпадало с урочным заданием слово в слово, менялся один
        // отвлекающий вариант. Теперь ответ надо произвести, а не узнать.
        prompt: "Собеседник спрашивает: «Am I your teacher?» Ответь коротко и утвердительно.",
        answer: "Yes, you are.",
        accept: ["Yes, you are", "yes, you are."],
        why:
          "Yes, you are. Спрашивают про I, а отвечают про you — и вместе с местоимением " +
          "меняется форма be.",
      },
      {
        id: "q-sdelat-soobshchenie",
        kind: "short",
        outcome: "отличать вопрос от сообщения по порядку слов",
        prompt: "Сделай из вопроса сообщение: «Is he in Rome?»",
        answer: "He is in Rome.",
        exact: true,
        accept: ["He is in Rome", "He's in Rome.", "He's in Rome"],
        why: "He is in Rome. Первые два слова вернулись на места, знак стал точкой.",
      },

      // ---- чтение -----------------------------------------------------
      // Угол другой, чем в уроке. Там разбирают разговор, где поправляют три
      // раза из четырёх; здесь одна пара строк, и догадка в ней ПОДТВЕРДИЛАСЬ —
      // значит сведения приходится брать из самого вопроса.
      {
        id: "q-otkuda-brat-vernoe",
        kind: "short",
        outcome: "отличать в разговоре догадку спрашивающего от того, как есть",
        prompt:
          "Разговор: «— Is Nurlan a driver?» / «— Yes, he is.» Запиши по-английски " +
          "целиком, кем работает Nurlan. Начни с He's.",
        answer: "He's a driver.",
        exact: true,
        accept: ["He's a driver", "He is a driver.", "He is a driver"],
        hint: "Короткое «да» подтверждает то, что стоит в вопросе, и занятие берут оттуда.",
        why:
          "He's a driver. «Yes, he is» подтверждает догадку целиком и своего занятия не " +
          "называет — значит его берут из вопроса. Если бы догадка не подтвердилась, за " +
          "«нет» стояло бы верное.",
      },
    ],
  },
};

export default module;
