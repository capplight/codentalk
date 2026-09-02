import type { Quiz } from "@/lib/content/types";

/**
 * Итоговый экзамен ступени «Английский · Elementary».
 *
 * ЗАЧЕМ ОН ПОНАДОБИЛСЯ СРОЧНО. 1 сентября 2026 ступень выложили на боевой сайт,
 * и выкладка вскрыла то, что раньше лежало бумажным долгом: экзамена у ступени
 * НЕ БЫЛО ВОВСЕ. Адрес `/learn/english-elementary/ekzamen` отвечал 404. Пока
 * ступень не была выложена, это никого не задевало; после выкладки ученик
 * доходит до конца тридцать первого модуля и упирается в пустоту.
 *
 * И НИ ОДНА ПРОВЕРКА ОБ ЭТОМ НЕ ГОВОРИЛА. В `scripts/check-content.mts` каждая
 * проверка экзамена обёрнута в `if (course.exam)`, а работ частей — в
 * `if (course.parts …)`. Курс без экзамена проходит отчёт молча. Это та же
 * порода, что была с работами частей 20 августа: содержание, до которого нет
 * дороги, выглядит в отчёте как работающее — только здесь наоборот, отсутствие
 * содержания выглядит как порядок.
 *
 * ЧТО ОН РЕШАЕТ. Пройдена ли ступень. На нём держится сертификат. Порог — 80
 * из 100, как у работы модуля; ниже быть не может, за этим следит проверка.
 *
 * ЧЕМ ОТЛИЧАЕТСЯ ОТ РАБОТЫ МОДУЛЯ. Работа спрашивает сразу после материала,
 * экзамен — спустя весь курс. Памяти на свежее правило у него нет, поэтому
 * почти каждый вопрос требует ПРОИЗВЕСТИ ответ: узнавание среди трёх кнопок
 * через два месяца после урока не показывает ничего.
 *
 * СКОЛЬКО ВОПРОСОВ. Программа ступени (`docs/programma-english-elementary.md`)
 * называла пятьдесят — но это прикидка, сделанная до правила охвата. Правило
 * требует не меньше ДВУХ вопросов на каждый из 31 модуля, иначе проверка
 * останавливает сборку. Отсюда шестьдесят четыре: по два на модуль и два
 * сверх того на узлах ступени, где сходятся несколько модулей.
 * Показывается тридцать — столько же по объёму, сколько экзамены Cambridge на
 * этой ступени. Это проверка, а не второе прохождение курса.
 *
 * ОБ УРОКАХ УМЕНИЙ спрашивают четырнадцать вопросов. Мера та же, что на
 * Beginner: уроков умений на ступени около четверти, столько же примерно
 * приходится на них в попытке.
 *
 * ЧЕГО ЗДЕСЬ НЕТ. Ни один вопрос не повторяет задание урока и не берёт
 * сквозной пример модуля — это проверяется скриптом, и проверка написана
 * после того, как в первой редакции экзамена Beginner методист нашёл
 * одиннадцать повторов. Соблазн здесь сильнее, чем где-либо: экзамен пишется
 * последним, весь курс уже перед глазами, и показательный пример модуля
 * просится в вопрос сам.
 *
 * Развёрнутого письма и говорения нет: машина их не оценивает, засчитывать
 * наугад нечестно. То же решение, что на прошлой ступени.
 */
export const ekzamenEnglishElementary: Quiz = {
  ask: 30,
  passRatio: 0.8,
  questions: [
    // ===================================================================
    // ЧАСТЬ ПЕРВАЯ. ПРОШЛОЕ — модули 1–7
    // ===================================================================

    // ---- 1. Это было ----
    {
      id: "ex-el-gde-byl",
      kind: "short",
      outcome: "рассказывать, где прошёл вчерашний день: I was at home",
      prompt:
        "Ученик написал о вчерашнем дне: «I am at my grandmother.» Он говорит о вчера. Запиши строку без ошибки.",
      answer: "I was at my grandmother.",
      exact: true,
      accept: ["I was at my grandmother"],
      why:
        "I was at my grandmother. Речь о вчерашнем дне, значит нужна форма прошлого — was.",
    },
    {
      id: "ex-el-vopros-bylo",
      kind: "short",
      outcome: "спрашивать, было ли: Were you at the party?",
      prompt:
        "Спроси у двух друзей, были ли они в театре вчера. Театр — the theatre. Запиши вопрос целиком.",
      answer: "Were you at the theatre yesterday?",
      exact: true,
      accept: [
        "Were you at the theatre yesterday",
        "Were you at the theatre yesterday?",
      ],
      why:
        "Were you at the theatre yesterday? Форма were выходит вперёд, дальше идёт " +
        "тот, о ком речь, потом место и время.",
    },

    // ---- 2. Вчера я работал ----
    {
      id: "ex-el-okonchanie-ed",
      kind: "short",
      outcome: "писать окончание -ed без ошибок: like — liked, study — studied",
      prompt:
        "Запиши в прошедшем времени три глагола через запятую и пробел: carry, close, plan.",
      answer: "carried, closed, planned",
      accept: ["carried closed planned", "carried, closed, planned."],
      why:
        "carried, closed, planned. У carry конечное -y после согласной становится -ied; " +
        "у close на конце уже есть e, прибавляется одна d; у plan согласная удваивается.",
    },
    {
      id: "ex-el-chtenie-ed",
      kind: "choice",
      outcome: "различать три чтения окончания -ed по последнему звуку глагола",
      prompt: "В каком из трёх слов окончание -ed читается отдельным слогом?",
      options: [
        { text: "wanted", correct: true },
        { text: "watched" },
        { text: "played" },
      ],
      why:
        "wanted — /ˈwɒntɪd/. Отдельный слог появляется после звуков /t/ и /d/. " +
        "В watched окончание звучит как /t/, в played — как /d/.",
    },

    // ---- 3. Неправильные глаголы ----
    {
      id: "ex-el-nepravilnye-tri",
      kind: "short",
      outcome: "рассказывать о поездке неправильными глаголами: I went to Astana",
      prompt:
        "Запиши в прошедшем времени три глагола через запятую и пробел: go, see, take.",
      answer: "went, saw, took",
      accept: ["went saw took", "went, saw, took."],
      why:
        "went, saw, took. Окончания -ed у них нет: форму прошлого приходится помнить целиком.",
    },
    {
      id: "ex-el-nepravilnyy-v-stroke",
      kind: "short",
      outcome: "рассказывать о еде, покупках и записях: I ate fish, I wrote in my diary",
      prompt:
        "Ученик написал: «Yesterday I eated soup and writed a letter.» Запиши строку без ошибок.",
      answer: "Yesterday I ate soup and wrote a letter.",
      exact: true,
      accept: ["Yesterday I ate soup and wrote a letter"],
      why:
        "Yesterday I ate soup and wrote a letter. У eat и write форма прошлого своя, " +
        "и окончание -ed к ней не прибавляют.",
    },

    // ---- 4. Я не делал ----
    {
      id: "ex-el-otricanie-proshlogo",
      kind: "short",
      outcome: "возвращать глагол к словарной форме после didn't: I didn't go, а не I didn't went",
      prompt:
        "Ученик написал: «She didn't came to the lesson.» Запиши строку без ошибки.",
      answer: "She didn't come to the lesson.",
      exact: true,
      accept: [
        "She didn't come to the lesson",
        "She did not come to the lesson.",
        "She did not come to the lesson",
      ],
      why:
        "She didn't come to the lesson. Прошлое уже сказано словом didn't, и глагол " +
        "возвращается к словарной форме.",
    },
    {
      id: "ex-el-sdelal-i-net",
      kind: "short",
      outcome: "противопоставлять сделанное и несделанное через but",
      prompt:
        "Напиши о себе одно предложение: вчера ты работал, но не звонил сестре. " +
        "Работать — work, звонить — call, сестра — my sister.",
      answer: "I worked yesterday, but I didn't call my sister.",
      accept: [
        "I worked yesterday but I didn't call my sister.",
        "I worked yesterday, but I did not call my sister.",
        "Yesterday I worked, but I didn't call my sister.",
      ],
      why:
        "I worked yesterday, but I didn't call my sister. Слово but соединяет сделанное " +
        "с несделанным, и во второй половине глагол стоит в словарной форме.",
    },

    // ---- 5. Спросить о прошлом ----
    {
      id: "ex-el-vopros-did",
      kind: "short",
      outcome: "спрашивать вопросительным словом: What did you buy?",
      prompt:
        "Спроси, где собеседник купил эту книгу. Купить — buy, эта книга — this book. Запиши вопрос целиком.",
      answer: "Where did you buy this book?",
      exact: true,
      accept: ["Where did you buy this book"],
      why:
        "Where did you buy this book? Сначала вопросительное слово, потом did, потом " +
        "тот, о ком речь, и только затем глагол в словарной форме.",
    },
    {
      id: "ex-el-did-ili-was",
      kind: "choice",
      outcome: "выбирать между did и was в вопросе о прошлом",
      prompt: "В каком вопросе нужно did, а не was?",
      options: [
        { text: "___ the film interesting?" },
        { text: "___ you buy the tickets?", correct: true },
        { text: "___ your friends at home?" },
      ],
      why:
        "Did you buy the tickets? — там есть своё действие, buy. В двух других строках " +
        "действия нет вовсе, и работать приходится форме was или were.",
    },

    // ---- 6. Что происходило ----
    {
      id: "ex-el-dlitelnoe-proshloe",
      kind: "short",
      outcome: "говорить о длительном действии: I was working",
      prompt:
        "Напиши: в семь вечера ты готовил ужин. Готовить — cook, ужин — dinner, " +
        "в семь вечера — at seven in the evening.",
      answer: "I was cooking dinner at seven in the evening.",
      accept: [
        "I was cooking dinner at seven in the evening",
        "At seven in the evening I was cooking dinner.",
      ],
      why:
        "I was cooking dinner at seven in the evening. Форма was и окончание -ing " +
        "вместе говорят, что дело шло в тот момент.",
    },
    {
      id: "ex-el-ing-napisanie",
      kind: "short",
      outcome: "писать окончание -ing по правилу",
      prompt:
        "Запиши с окончанием -ing три глагола через запятую и пробел: run, write, study.",
      answer: "running, writing, studying",
      accept: ["running writing studying", "running, writing, studying."],
      why:
        "running, writing, studying. У run согласная удваивается, у write конечное e " +
        "уходит, а у study не меняется ничего.",
    },

    // ---- 7. Пока и когда ----
    {
      id: "ex-el-while-i-when",
      kind: "short",
      outcome: "связывать длительное и законченное действие: I was cooking when he came",
      prompt:
        "Собери одно предложение: ты читал книгу, когда позвонил друг. Читать книгу — " +
        "read a book, позвонить — call, друг — my friend.",
      answer: "I was reading a book when my friend called.",
      accept: [
        "I was reading a book when my friend called",
        "When my friend called, I was reading a book.",
      ],
      why:
        "I was reading a book when my friend called. Долгое дело стоит в форме was + -ing, " +
        "а короткое, которое его прервало, — с окончанием -ed.",
    },
    {
      id: "ex-el-zapyataya-pri-soyuze",
      kind: "choice",
      outcome: "ставить запятую, когда часть с союзом стоит впереди",
      prompt: "В какой строке запятая стоит верно?",
      options: [
        { text: "I was sleeping, when the phone rang." },
        { text: "While I was sleeping the phone rang." },
        { text: "While I was sleeping, the phone rang.", correct: true },
      ],
      why:
        "While I was sleeping, the phone rang. Запятая нужна, когда часть с союзом " +
        "стоит впереди. Если она идёт второй, запятой нет.",
    },

    // ===================================================================
    // ЧАСТЬ ВТОРАЯ. ВПЕРЕДИ — модули 8–13
    // ===================================================================

    // ---- 8. Я собираюсь ----
    {
      id: "ex-el-going-to",
      kind: "short",
      outcome: "говорить о намерении: I am going to play chess",
      prompt:
        "Напиши: твоя сестра собирается купить велосипед. Сестра — my sister, " +
        "купить — buy, велосипед — a bike.",
      answer: "My sister is going to buy a bike.",
      exact: true,
      accept: ["My sister is going to buy a bike"],
      why:
        "My sister is going to buy a bike. Речь об одном человеке, значит форма is, " +
        "а после going to глагол стоит в словарной форме.",
    },
    {
      id: "ex-el-going-to-vopros",
      kind: "short",
      outcome: "спрашивать подробности: What are you going to do?",
      prompt:
        "Спроси, что собеседник собирается делать в субботу. В субботу — on Saturday. Запиши вопрос целиком.",
      answer: "What are you going to do on Saturday?",
      exact: true,
      accept: ["What are you going to do on Saturday"],
      why:
        "What are you going to do on Saturday? Сначала вопросительное слово, потом " +
        "форма are, потом тот, о ком речь.",
    },

    // ---- 9. Я сделаю ----
    {
      id: "ex-el-will-obeshchanie",
      kind: "short",
      outcome: "обещать: I will call you tomorrow",
      prompt:
        "Пообещай, что завтра принесёшь книгу. Принести — bring, книга — the book, завтра — tomorrow.",
      answer: "I will bring the book tomorrow.",
      accept: [
        "I will bring the book tomorrow",
        "I'll bring the book tomorrow.",
        "I'll bring the book tomorrow",
      ],
      why:
        "I will bring the book tomorrow. После will глагол стоит в словарной форме, " +
        "без окончаний.",
    },
    {
      id: "ex-el-wont",
      kind: "gap",
      outcome: "говорить, чего не сделаешь: I won't be late",
      prompt: "Ты не опоздаешь. Допиши недостающее слово.",
      before: "I ",
      after: " be late.",
      answer: "won't",
      accept: ["will not"],
      why: "I won't be late. Won't — это короткая запись will not.",
    },

    // ---- 10. Уже договорились ----
    {
      id: "ex-el-dogovorennost",
      kind: "short",
      outcome: "говорить о договорённости: I'm meeting Dana at five",
      prompt:
        "Напиши о назначенном: в пятницу ты встречаешься с врачом. Встречаться — meet, " +
        "врач — the doctor, в пятницу — on Friday.",
      answer: "I'm meeting the doctor on Friday.",
      accept: [
        "I'm meeting the doctor on Friday",
        "I am meeting the doctor on Friday.",
        "I am meeting the doctor on Friday",
      ],
      why:
        "I'm meeting the doctor on Friday. О назначенном говорят формой be с окончанием " +
        "-ing — так же, как по-русски говорят «встречаюсь».",
    },
    {
      id: "ex-el-chego-net-v-raspisanii",
      kind: "short",
      outcome: "говорить, чего в расписании нет: I'm not working on Friday",
      prompt:
        "Напиши, что в воскресенье ты не работаешь. Работать — work, в воскресенье — on Sunday.",
      answer: "I'm not working on Sunday.",
      accept: [
        "I'm not working on Sunday",
        "I am not working on Sunday.",
        "I am not working on Sunday",
      ],
      why: "I'm not working on Sunday. Слово not встаёт после формы be.",
    },

    // ---- 11. По расписанию ----
    {
      id: "ex-el-raspisanie",
      kind: "short",
      outcome: "называть время по расписанию: The train leaves at six tomorrow",
      prompt:
        "Напиши о расписании: автобус уходит в семь. Автобус — the bus, уходить — leave, в семь — at seven.",
      answer: "The bus leaves at seven.",
      exact: true,
      accept: ["The bus leaves at seven"],
      why:
        "The bus leaves at seven. О расписании говорят обычным настоящим временем, и " +
        "у глагола стоит окончание -s: автобус один.",
    },
    {
      id: "ex-el-when-svyaz",
      kind: "short",
      outcome: "связывать два дела словом when: I'll call you when I arrive",
      prompt:
        "Собери предложение: ты позвонишь, когда придёшь домой. Позвонить — call you, " +
        "прийти домой — get home.",
      answer: "I'll call you when I get home.",
      accept: [
        "I'll call you when I get home",
        "I will call you when I get home.",
        "I will call you when I get home",
      ],
      why:
        "I'll call you when I get home. В первой половине стоит will, а во второй, " +
        "после when, — обычное настоящее время.",
    },

    // ---- 12. Давай я ----
    {
      id: "ex-el-shall-i",
      kind: "short",
      outcome: "предлагать помощь: Shall I carry your bag?",
      prompt:
        "Предложи помочь: ты откроешь окно. Открыть — open, окно — the window. Запиши предложение целиком.",
      answer: "Shall I open the window?",
      exact: true,
      accept: ["Shall I open the window"],
      why:
        "Shall I open the window? Слово shall стоит первым, за ним I — помогать берётся " +
        "тот, кто спрашивает.",
    },
    {
      id: "ex-el-zov-vmeste",
      kind: "choice",
      outcome: "звать вместе: Shall we play golf on Saturday?",
      prompt: "Ты зовёшь друга пойти в кино вместе. Какая строка годится?",
      options: [
        { text: "Shall we go to the cinema?", correct: true },
        { text: "Shall I go to the cinema?" },
        { text: "Shall you go to the cinema?" },
      ],
      why:
        "Shall we go to the cinema? Слово we значит «мы» — зовут вместе. Shall I " +
        "предлагает сделать что-то самому.",
    },

    // ---- 13. Может быть ----
    {
      id: "ex-el-might",
      kind: "short",
      outcome: "говорить о возможном: It might rain tomorrow",
      prompt:
        "Скажи о возможном: завтра может быть холодно. Холодно — cold, завтра — tomorrow. " +
        "Начни с It might.",
      answer: "It might be cold tomorrow.",
      exact: true,
      accept: ["It might be cold tomorrow"],
      why:
        "It might be cold tomorrow. После might глагол стоит в словарной форме, и be " +
        "не пропускают.",
    },
    {
      id: "ex-el-uverennost-ili-net",
      kind: "hottext",
      outcome: "отличать уверенность от предположения",
      prompt: "Отметь строки, в которых человек не уверен.",
      parts: [
        { text: "I'm sure the keys are in the car.", selectable: true },
        { text: " · " },
        { text: "The keys might be in the car.", selectable: true, correct: true },
        { text: " · " },
        { text: "Maybe the keys are in the car.", selectable: true, correct: true },
        { text: " · " },
        { text: "The keys are in the car.", selectable: true },
      ],
      why:
        "Might и maybe говорят о возможном. I'm sure и голая строка без этих слов " +
        "говорят о том, что человек знает наверняка.",
    },

    // ===================================================================
    // ЧАСТЬ ТРЕТЬЯ. СРАВНЕНИЕ И ПОДРОБНОСТИ — модули 14–21
    // ===================================================================

    // ---- 14. Больше и меньше ----
    {
      id: "ex-el-sravnenie-korotkoe",
      kind: "short",
      outcome: "сравнивать две вещи: My flat is smaller than yours",
      prompt:
        "Сравни: этот город больше, чем Алматы. Город — this city, большой — big.",
      answer: "This city is bigger than Almaty.",
      exact: true,
      accept: ["This city is bigger than Almaty"],
      why:
        "This city is bigger than Almaty. У big согласная удваивается перед -er, а " +
        "вторую вещь вводит слово than.",
    },
    {
      id: "ex-el-better-worse",
      kind: "gap",
      outcome: "говорить better и worse там, где нет окончания -er",
      prompt: "Погода сегодня хуже, чем вчера. Допиши недостающее слово.",
      before: "The weather is ",
      after: " than yesterday.",
      answer: "worse",
      why:
        "The weather is worse than yesterday. У bad формы сравнения своя — worse, " +
        "окончания -er у неё нет.",
    },

    // ---- 15. Самый ----
    {
      id: "ex-el-vydelenie",
      kind: "short",
      outcome: "выделять одно из многих: the biggest animal",
      prompt:
        "Скажи: это самая длинная река в стране. Река — river, длинный — long, " +
        "в стране — in the country.",
      answer: "This is the longest river in the country.",
      accept: [
        "This is the longest river in the country",
        "It is the longest river in the country.",
      ],
      why:
        "This is the longest river in the country. Перед формой выделения стоит the, " +
        "а слово in называет, среди кого выделяют.",
    },
    {
      id: "ex-el-vydelenie-dlinnoe",
      kind: "choice",
      outcome: "выделять длинным прилагательным: the most beautiful",
      prompt: "В какой строке форма выделения записана верно?",
      options: [
        { text: "It is the interestingest book." },
        { text: "It is the most interesting book.", correct: true },
        { text: "It is the more interesting book." },
      ],
      why:
        "It is the most interesting book. У длинного прилагательного окончания нет: " +
        "перед ним ставят most. А more — это сравнение двух, а не выделение одного.",
    },

    // ---- 16. Очень и слишком ----
    {
      id: "ex-el-too",
      kind: "short",
      outcome: "говорить, что мешает: too small, too expensive",
      prompt:
        "Скажи, что куртка слишком дорогая и ты её не купил. Куртка — the jacket, " +
        "дорогой — expensive, купить — buy. Два предложения.",
      answer: "The jacket was too expensive. I didn't buy it.",
      accept: [
        "The jacket was too expensive. I didn't buy it",
        "The jacket was too expensive, so I didn't buy it.",
      ],
      why:
        "The jacket was too expensive. I didn't buy it. Слово too говорит о том, что " +
        "мешает, и потому за ним обычно следует, чем дело кончилось.",
    },
    {
      id: "ex-el-mera-pri-veshchah",
      kind: "gap",
      outcome: "говорить, что вещей слишком много: too many people",
      prompt: "В автобусе было слишком много людей. Допиши недостающее слово.",
      before: "There were too ",
      after: " people on the bus.",
      answer: "many",
      why:
        "There were too many people on the bus. Людей считают, значит many. Слово much " +
        "стоит при том, что не считают.",
    },

    // ---- 17. Как это делается ----
    {
      id: "ex-el-narechie-obraza",
      kind: "short",
      outcome: "собирать наречие из прилагательного: easy — easily",
      prompt:
        "Запиши наречия от трёх прилагательных через запятую и пробел: quick, easy, careful.",
      answer: "quickly, easily, carefully",
      accept: ["quickly easily carefully", "quickly, easily, carefully."],
      why:
        "quickly, easily, carefully. У easy конечное -y перед -ly становится -i, у " +
        "остальных прибавляется -ly без изменений.",
    },
    {
      id: "ex-el-good-ili-well",
      kind: "short",
      outcome: "различать прилагательное и наречие: a good singer, sings well",
      prompt:
        "Ученик написал: «She is a good singer and she sings good.» Запиши строку без ошибки.",
      answer: "She is a good singer and she sings well.",
      exact: true,
      accept: ["She is a good singer and she sings well"],
      why:
        "She is a good singer and she sings well. Перед словом singer стоит good — оно " +
        "говорит, какая она. При глаголе sings нужно well — оно говорит, как она поёт.",
    },

    // ---- 18. Сколько чего ----
    {
      id: "ex-el-much-many",
      kind: "short",
      outcome: "спрашивать сколько: How much bread? How many eggs?",
      prompt:
        "Спроси два раза: сколько молока и сколько яиц. Молоко — milk, яйца — eggs. " +
        "Запиши оба вопроса через пробел.",
      answer: "How much milk? How many eggs?",
      accept: ["How much milk? How many eggs", "How much milk How many eggs"],
      why:
        "How much milk? How many eggs? Молоко не считают — much. Яйца считают — many.",
    },
    {
      id: "ex-el-hvataet-li",
      kind: "gap",
      outcome: "говорить, хватает ли: enough bread, not enough tickets",
      prompt: "Билетов не хватило. Допиши недостающее слово.",
      before: "We didn't have ",
      after: " tickets.",
      answer: "enough",
      why:
        "We didn't have enough tickets. Слово enough стоит перед тем, чего считают, и " +
        "говорит, хватило этого или нет.",
    },

    // ---- 19. Кто-то и что-то ----
    {
      id: "ex-el-nikto-nichto",
      kind: "short",
      outcome: "говорить через nobody и nothing, не ставя второго отрицания",
      prompt:
        "Ученик написал: «I didn't see nobody in the room.» Запиши строку без ошибки.",
      answer: "I didn't see anyone in the room.",
      exact: true,
      accept: [
        "I didn't see anyone in the room",
        "I saw nobody in the room.",
        "I saw nobody in the room",
      ],
      why:
        "I didn't see anyone in the room — или I saw nobody in the room. Отрицание в " +
        "строке одно: либо didn't и anyone, либо nobody без didn't.",
    },
    {
      id: "ex-el-utochnenie-posle-mestoimeniya",
      kind: "choice",
      outcome: "ставить уточнение после местоимения: something cold, something else",
      prompt: "В какой строке уточнение стоит на своём месте?",
      options: [
        { text: "I want cold something to drink." },
        { text: "I want something to drink cold." },
        { text: "I want something cold to drink.", correct: true },
      ],
      why:
        "I want something cold to drink. Уточнение идёт ПОСЛЕ слова something — не так, " +
        "как по-русски, где «холодное» стоит впереди.",
    },

    // ---- 20. Этот, тот и другой ----
    {
      id: "ex-el-ne-povtoryat-nazvannoe",
      kind: "gap",
      outcome: "не повторять названное: the pale one",
      prompt:
        "В магазине два шарфа. Ты просишь синий, не повторяя слова «шарф». Допиши недостающее слово.",
      before: "I'll take the blue ",
      after: ", please.",
      answer: "one",
      why:
        "I'll take the blue one, please. Слово one встаёт вместо названного предмета, " +
        "чтобы не повторять его дважды.",
    },
    {
      id: "ex-el-another-ili-other",
      kind: "choice",
      outcome: "различать the other one и another",
      prompt:
        "Ты примерил рубашку, она мала, и ты просишь ещё одну — любую другую. Что сказать?",
      options: [
        { text: "Can I try another one?", correct: true },
        { text: "Can I try the other one?" },
        { text: "Can I try other one?" },
      ],
      why:
        "Can I try another one? Слово another значит «ещё одну, любую». The other one — " +
        "это про вторую из двух, когда обе известны.",
    },

    // ---- 21. Свой и сам ----
    {
      id: "ex-el-chya-veshch",
      kind: "short",
      outcome: "назвать хозяина любой вещи: his, hers, ours, theirs",
      prompt:
        "Ученик написал: «This bag isn't my. It's her.» Запиши обе строки без ошибок.",
      answer: "This bag isn't mine. It's hers.",
      exact: true,
      accept: ["This bag isn't mine. It's hers"],
      why:
        "This bag isn't mine. It's hers. Когда вещь уже названа, вместо my и her стоят " +
        "mine и hers — они работают сами по себе.",
    },
    {
      id: "ex-el-sam-spravilsya",
      kind: "gap",
      outcome: "сказать, что справился без помощи: by myself",
      prompt: "Ты сделал это без чужой помощи. Допиши недостающее слово.",
      before: "I did it by ",
      after: ".",
      answer: "myself",
      why: "I did it by myself. Оборот by myself говорит, что помощи не было.",
    },

    // ===================================================================
    // ЧАСТЬ ЧЕТВЁРТАЯ. РАЗГОВОР О ЖИЗНИ — модули 22–31
    // ===================================================================

    // ---- 22. Я это делал ----
    {
      id: "ex-el-opyt",
      kind: "short",
      outcome: "рассказать об опыте: I have seen a dolphin",
      prompt:
        "Скажи об опыте: ты видел кита. Видеть — see, кит — a whale. Начни с I have.",
      answer: "I have seen a whale.",
      exact: true,
      accept: ["I have seen a whale", "I've seen a whale.", "I've seen a whale"],
      why:
        "I have seen a whale. У see третья форма своя — seen, и окончания -ed у неё нет.",
    },
    {
      id: "ex-el-nikogda-ne-proboval",
      kind: "short",
      outcome: "назвать то, чего не было в жизни: I have never tried it",
      prompt:
        "Скажи, что никогда не пробовал это блюдо. Пробовать — try, это блюдо — this dish.",
      answer: "I have never tried this dish.",
      accept: [
        "I have never tried this dish",
        "I've never tried this dish.",
        "I've never tried this dish",
      ],
      why:
        "I have never tried this dish. Слово never встаёт между have и третьей формой, " +
        "и второго отрицания при нём не ставят.",
    },

    // ---- 23. Уже и ещё нет ----
    {
      id: "ex-el-uzhe-i-eshchyo-net",
      kind: "short",
      outcome: "сообщить, что дело ещё не сделано: I haven't packed yet",
      prompt:
        "Напиши два предложения: чемодан ты уже собрал, а билет ещё не купил. " +
        "Собрать чемодан — pack, купить билет — buy the ticket.",
      answer: "I have already packed. I haven't bought the ticket yet.",
      accept: [
        "I have already packed. I haven't bought the ticket yet",
        "I've already packed. I haven't bought the ticket yet.",
      ],
      why:
        "I have already packed. I haven't bought the ticket yet. Слово already стоит " +
        "между have и третьей формой, а yet уходит в конец.",
    },
    {
      id: "ex-el-tolko-chto",
      kind: "gap",
      outcome: "сказать о только что сделанном: I have just finished",
      prompt: "Ты только что закончил работу. Допиши недостающее слово.",
      before: "I have ",
      after: " finished my work.",
      answer: "just",
      why:
        "I have just finished my work. Слово just стоит на том же месте, что already, — " +
        "между have и третьей формой.",
    },

    // ---- 24. Как долго ----
    {
      id: "ex-el-kak-dolgo",
      kind: "short",
      outcome: "сказать, сколько времени длится дело: I have studied English for two years",
      prompt:
        "Скажи, что живёшь в этом городе три года. Жить — live, этот город — this city, " +
        "три года — three years.",
      answer: "I have lived in this city for three years.",
      accept: [
        "I have lived in this city for three years",
        "I've lived in this city for three years.",
      ],
      why:
        "I have lived in this city for three years. Дело идёт до сих пор, и срок вводит " +
        "слово for. По-русски здесь стоит настоящее время — «живу», — и это главное " +
        "расхождение.",
    },
    {
      id: "ex-el-vopros-kak-dolgo",
      kind: "short",
      outcome: "спросить о длительности: How long have you studied English?",
      prompt:
        "Спроси, сколько времени собеседник работает в этой фирме. Работать — work, " +
        "эта фирма — this company. Запиши вопрос целиком.",
      answer: "How long have you worked in this company?",
      exact: true,
      accept: ["How long have you worked in this company"],
      why:
        "How long have you worked in this company? Оборот How long стоит первым, за ним " +
        "have, потом тот, о ком речь, и третья форма.",
    },

    // ---- 25. Надо и не надо ----
    {
      id: "ex-el-nelzya-i-neobyazatelno",
      kind: "choice",
      outcome: "сказать, что делать не обязан: You don't have to bring a kit",
      prompt:
        "Форму приносить можно, но необязательно. Какая строка это говорит?",
      options: [
        { text: "You mustn't bring a uniform." },
        { text: "You don't have to bring a uniform.", correct: true },
        { text: "You have to bring a uniform." },
      ],
      why:
        "You don't have to bring a uniform. Оборот don't have to значит «не обязан». " +
        "А mustn't — это запрет, совсем другое.",
    },
    {
      id: "ex-el-chuzhaya-obyazannost",
      kind: "gap",
      outcome: "сказать о чужой обязанности: He has to show his passport",
      prompt: "Твой брат обязан носить форму. Допиши недостающее слово.",
      before: "My brother ",
      after: " to wear a uniform.",
      answer: "has",
      why:
        "My brother has to wear a uniform. Речь об одном другом человеке, поэтому has, " +
        "а не have.",
    },

    // ---- 26. Стоит и не стоит ----
    {
      id: "ex-el-sovet",
      kind: "short",
      outcome: "советовать не делать: You shouldn't eat that",
      prompt:
        "Посоветуй не пить кофе на ночь. Пить — drink, кофе — coffee, на ночь — at night. " +
        "Начни с You.",
      answer: "You shouldn't drink coffee at night.",
      accept: [
        "You shouldn't drink coffee at night",
        "You should not drink coffee at night.",
      ],
      why:
        "You shouldn't drink coffee at night. После shouldn't глагол стоит в словарной " +
        "форме.",
    },
    {
      id: "ex-el-sovet-vopros",
      kind: "short",
      outcome: "спросить совета и коротко ответить: Should I take a map? — Yes, you should",
      prompt:
        "Спроси совета: брать ли зонт. Брать — take, зонт — an umbrella. Запиши вопрос целиком.",
      answer: "Should I take an umbrella?",
      exact: true,
      accept: ["Should I take an umbrella"],
      why:
        "Should I take an umbrella? Слово should выходит вперёд, за ним I — совета " +
        "просит тот, кто спрашивает.",
    },

    // ---- 27. Раньше мог ----
    {
      id: "ex-el-mog-ranshe",
      kind: "short",
      outcome: "рассказывать, что умел герой раньше: I could swim at six",
      prompt:
        "Скажи: в семь лет ты умел кататься на коньках. Кататься на коньках — skate, " +
        "в семь лет — at seven.",
      answer: "I could skate at seven.",
      exact: true,
      accept: ["I could skate at seven"],
      why:
        "I could skate at seven. Форма could говорит об умении в прошлом, и после неё " +
        "глагол стоит в словарной форме.",
    },
    {
      id: "ex-el-ne-umel",
      kind: "gap",
      outcome: "говорить, чего человек не умел: I couldn't ride a bike",
      prompt: "В детстве ты не умел плавать. Допиши недостающее слово.",
      before: "I ",
      after: " swim when I was a child.",
      answer: "couldn't",
      accept: ["could not"],
      why: "I couldn't swim when I was a child. Couldn't — это короткая запись could not.",
    },

    // ---- 28. Вежливо ----
    {
      id: "ex-el-vezhlivaya-prosba",
      kind: "short",
      outcome: "вежливо просить: Could you help me?",
      prompt:
        "Попроси вежливо открыть окно. Открыть — open, окно — the window. Запиши просьбу целиком.",
      answer: "Could you open the window?",
      exact: true,
      accept: ["Could you open the window", "Could you open the window, please?"],
      why:
        "Could you open the window? Оборот Could you звучит вежливее, чем Can you, а " +
        "глагол после него стоит в словарной форме.",
    },
    {
      id: "ex-el-chto-luchshe",
      kind: "gap",
      outcome: "называть, что лучше: I'd prefer Sunday",
      prompt: "Тебе больше подходит вторник. Допиши недостающее слово.",
      before: "I'd ",
      after: " Tuesday.",
      answer: "prefer",
      why:
        "I'd prefer Tuesday. Оборот I'd prefer называет то, что подходит больше, и " +
        "звучит мягче прямого выбора.",
    },

    // ---- 29. Если ----
    {
      id: "ex-el-uslovie",
      kind: "short",
      outcome: "ставить условие с обещанием: If you come, I'll show you the city",
      prompt:
        "Собери предложение: если завтра будет дождь, ты останешься дома. Дождь — rain, " +
        "остаться дома — stay at home.",
      answer: "If it rains tomorrow, I'll stay at home.",
      accept: [
        "If it rains tomorrow, I'll stay at home",
        "If it rains tomorrow, I will stay at home.",
        "I'll stay at home if it rains tomorrow.",
      ],
      why:
        "If it rains tomorrow, I'll stay at home. После if стоит обычное настоящее " +
        "время, а обещание во второй половине берёт will.",
    },
    {
      id: "ex-el-if-ili-when",
      kind: "choice",
      outcome: "различать условие и срок: if it rains — when it rains",
      prompt: "В какой строке речь о том, что случится наверняка, а не о возможном?",
      options: [
        { text: "If I finish early, I'll call you." },
        { text: "If it rains, I'll take a taxi." },
        { text: "When I finish work, I'll call you.", correct: true },
      ],
      why:
        "When I finish work, I'll call you. Работа кончится наверняка — вопрос только " +
        "когда. А if говорит о том, что может и не случиться.",
    },

    // ---- 30. Который ----
    {
      id: "ex-el-opisat-veshch",
      kind: "short",
      outcome: "описывать вещь: the bag which is on the table",
      prompt:
        "Собери одно предложение из двух: «This is the book. It is on the shelf.» " +
        "Соедини их словом which.",
      answer: "This is the book which is on the shelf.",
      exact: true,
      accept: ["This is the book which is on the shelf"],
      why:
        "This is the book which is on the shelf. Слово which встаёт сразу после того, " +
        "что описывают, и заменяет собой it.",
    },
    {
      id: "ex-el-kogo-opisyvayut",
      kind: "choice",
      outcome: "описывать вещь: the bag which is on the table",
      prompt: "В какой строке описание стоит на своём месте?",
      options: [
        { text: "The man who lives next door is a doctor.", correct: true },
        { text: "The man which lives next door is a doctor." },
        { text: "The man who is a doctor lives which next door." },
      ],
      why:
        "The man who lives next door is a doctor. О человеке говорят who, о вещи — " +
        "which, и описание идёт сразу за тем, к кому относится.",
    },

    // ---- 31. Он сказал, что ----
    {
      id: "ex-el-pereskaz",
      kind: "short",
      outcome: "пересказывать чужие слова: He said that he is busy",
      prompt:
        "Перескажи: Алим сказал: «I am tired.» Начни с Alim said that.",
      answer: "Alim said that he is tired.",
      exact: true,
      accept: ["Alim said that he is tired"],
      why:
        "Alim said that he is tired. Слово I меняется на he — речь уже не от лица " +
        "Алима, а о нём.",
    },
    {
      id: "ex-el-komu-skazali",
      kind: "gap",
      outcome: "называть, кому сказали: She told me that the shop is closed",
      prompt: "Она сказала ТЕБЕ, что магазин закрыт. Допиши недостающее слово.",
      before: "She ",
      after: " me that the shop is closed.",
      answer: "told",
      why:
        "She told me that the shop is closed. Когда назван тот, кому сказали, берут " +
        "told, а не said.",
    },

    // ===================================================================
    // УРОКИ УМЕНИЙ. Четырнадцать вопросов — чтение, слушание и проверка
    // написанного. Мера та же, что на Beginner: уроков умений на ступени
    // около четверти, столько же приходится на них в попытке.
    // ===================================================================

    {
      id: "ex-el-sluh-gde-byl",
      kind: "short",
      outcome: "слышать в записи, где человек был и каким это было",
      zvuk: "I was at the museum on Saturday. It was really interesting.",
      prompt: "Послушай. Где человек был в субботу? Ответь одним словом по-английски.",
      answer: "museum",
      accept: ["Museum", "at the museum", "the museum"],
      why: "Museum. Место названо в первой половине записи, оценка — во второй.",
    },
    {
      id: "ex-el-sluh-chto-delal",
      kind: "short",
      outcome: "слышать в записи, что человек делал",
      zvuk: "Yesterday I cleaned the flat and then I painted the door.",
      prompt: "Послушай. Что человек делал после уборки? Ответь одним словом по-английски.",
      answer: "painted",
      accept: ["Painted", "paint"],
      why: "Painted. Слово then делит запись надвое: сначала уборка, потом покраска.",
    },
    {
      id: "ex-el-sluh-kuda-ezdil",
      kind: "short",
      outcome: "слышать в записи, куда человек ездил и что делал",
      zvuk: "Last summer we went to the coast. We swam every day.",
      prompt: "Послушай. Куда люди ездили прошлым летом? Ответь одним словом по-английски.",
      answer: "coast",
      accept: ["Coast", "the coast", "to the coast"],
      why: "Coast. Место названо в первой строке, дело — во второй.",
    },
    {
      id: "ex-el-sluh-chego-ne-delal",
      kind: "short",
      outcome: "слышать в записи, чего человек не делал",
      zvuk: "I finished the report, but I didn't send the email.",
      prompt: "Послушай. Чего человек не сделал? Ответь одним словом по-английски.",
      answer: "email",
      accept: ["Email", "the email", "send the email"],
      why: "Email. Слово but делит запись: до него сделанное, после — несделанное.",
    },
    {
      id: "ex-el-sluh-chto-proishodilo",
      kind: "short",
      outcome: "слышать в записи, что происходило в тот момент",
      zvuk: "At eight I was waiting for the bus. It was raining.",
      prompt: "Послушай. Чего человек ждал в восемь? Ответь одним словом по-английски.",
      answer: "bus",
      accept: ["Bus", "the bus", "a bus"],
      why: "Bus. Ответ звучит в первой строке; вторая говорит о погоде.",
    },
    {
      id: "ex-el-sluh-kto-sobiraetsya",
      kind: "short",
      outcome: "слышать в разговоре, кто что собирается делать",
      zvuk:
        "What are you going to do at the weekend? — I'm going to visit my aunt.",
      prompt: "Послушай. К кому человек собирается? Ответь одним словом по-английски.",
      answer: "aunt",
      accept: ["Aunt", "his aunt", "my aunt"],
      why: "Aunt. Ответ стоит во второй реплике, после оборота going to.",
    },
    {
      id: "ex-el-sluh-chto-naznacheno",
      kind: "short",
      outcome: "слышать в записи, что и когда назначено",
      zvuk: "I'm seeing the dentist on Thursday at four.",
      prompt: "Послушай. В какой день назначена встреча? Ответь одним словом по-английски.",
      answer: "Thursday",
      accept: ["thursday", "on Thursday"],
      why: "Thursday. В записи названы и день, и час — спрашивают о дне.",
    },
    {
      id: "ex-el-sluh-chto-vybrali",
      kind: "short",
      outcome: "слышать в разговоре, что из двух выбрали",
      zvuk:
        "The red one is cheaper, but the green one is nicer. — Let's take the green one.",
      prompt: "Послушай. Какую вещь взяли? Ответь одним словом по-английски.",
      answer: "green",
      accept: ["Green", "the green one"],
      why:
        "Green. Слова Let's take стоят во второй реплике и называют то, на чём сошлись.",
    },
    {
      id: "ex-el-sluh-chto-ne-podoshlo",
      kind: "short",
      outcome: "слышать в разговоре, что не подошло",
      zvuk: "The shoes were too small, so I didn't buy them.",
      prompt: "Послушай. Что было не так с обувью? Ответь одним словом по-английски.",
      answer: "small",
      accept: ["Small", "too small"],
      why: "Small. Слово too называет то, что помешало, и за ним следует, чем дело кончилось.",
    },
    {
      id: "ex-el-sluh-kto-chto-videl",
      kind: "short",
      outcome: "слышать в разговоре, кто что видел",
      zvuk: "Have you ever seen a camel? — Yes, I have. I saw one in the desert.",
      prompt: "Послушай. Где человек видел это животное? Ответь одним словом по-английски.",
      answer: "desert",
      accept: ["Desert", "in the desert", "the desert"],
      why: "Desert. Вопрос спрашивает об опыте, а место названо в последней строке.",
    },
    {
      id: "ex-el-sluh-chto-nelzya",
      kind: "short",
      outcome: "слышать в разговоре, что нельзя и что необязательно",
      zvuk:
        "You mustn't take photos here, but you don't have to buy a ticket.",
      prompt:
        "Послушай. Что здесь запрещено? Ответь одним словом по-английски.",
      answer: "photos",
      accept: ["Photos", "take photos", "photo"],
      why:
        "Photos. Запрет говорит mustn't; вторая половина записи — о том, что как раз " +
        "необязательно.",
    },
    {
      id: "ex-el-sluh-uslovie",
      kind: "short",
      outcome: "слышать в разговоре, при каком условии человек согласен",
      zvuk: "If the weather is good, I'll come with you.",
      prompt:
        "Послушай. От чего зависит согласие? Ответь одним словом по-английски.",
      answer: "weather",
      accept: ["Weather", "the weather"],
      why: "Weather. Условие вводит слово if, и оно стоит в первой половине записи.",
    },
    {
      id: "ex-el-proverit-rasskaz-o-dne",
      kind: "choice",
      outcome:
        "проверять рассказ о дне: окончание -ed, слова порядка, was в строке о самом дне",
      prompt:
        "Ученик написал о вчерашнем дне: «First I study English. Then I helped my brother. " +
        "It was a long day.» Чего не хватает в первой строке?",
      options: [
        { text: "Слова порядка." },
        { text: "Окончания -ed у глагола.", correct: true },
        { text: "Формы was." },
      ],
      why:
        "Окончания -ed. Слово First на месте, а глагол остался в настоящем времени: " +
        "нужно studied.",
    },
    {
      id: "ex-el-proverit-obyavlenie",
      kind: "choice",
      outcome:
        "проверять объявление о находке по четырём строкам: вещь и день, приметы, чьё оно, где забрать",
      prompt:
        "В объявлении о находке написано: «FOUND: a black umbrella on Monday. It's not mine. " +
        "Call me.» Какой из четырёх нужных строк здесь нет?",
      options: [
        { text: "Той, что называет вещь и день." },
        { text: "Той, что говорит, где забрать." },
        { text: "Той, что описывает приметы.", correct: true },
      ],
      why:
        "Той, что описывает приметы. Вещь и день названы, чьё оно — сказано, забрать " +
        "зовут звонком. А по каким приметам узнать зонт, не сказано вовсе.",
    },
  ],
};
