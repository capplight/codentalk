import type { Quiz } from "@/lib/content/types";

/**
 * Проверочные работы частей курса «Английский с нуля».
 *
 * ЧЕМ ОНИ ОТЛИЧАЮТСЯ ОТ РАБОТЫ МОДУЛЯ. Работа модуля спрашивает сразу после
 * материала: ученик только что прочитал правило и тут же его применяет. Работа
 * части приходит спустя шесть-семь модулей, и памяти на свежее правило у неё
 * уже нет. Поэтому спрашивает она не правило по отдельности, а случай целиком:
 * заполни бланк, спроси о человеке, возрази собеседнику, попроси, объясни
 * причину.
 *
 * ИЗ ЭТОГО СЛЕДУЕТ УСТРОЙСТВО. Почти каждый вопрос требует ПРОИЗВЕСТИ ответ, а
 * не узнать его среди трёх кнопок: узнавание спустя месяц ничего не показывает.
 * В работе модуля выбор уместен — там он ловит свежую ошибку; здесь он почти
 * не нужен.
 *
 * ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО. Ни один вопрос не повторяет задание урока и не
 * берёт сквозной пример модуля — тот, что напечатан в таблицах и врезках по
 * пять раз. Это проверяется скриптом (`npm run check:content`), и правило то же,
 * что для работ модулей: ученик должен строить ответ, а не вспоминать картинку.
 *
 * СКОЛЬКО ВОПРОСОВ. В банке четырнадцать, показывается десять, порог зачёта —
 * семь из десяти, как у работы модуля. Каждый модуль части затрагивается не
 * меньше двух раз: часть считается сданной, только если работают все шесть-семь
 * модулей, а не половина.
 */

// ===========================================================================
export const rabotaYaIDrugie: Quiz = {
  ask: 10,
  passRatio: 0.7,
  questions: [
    // ---- Алфавит и своё имя ----
    {
      id: "ch1-imya-po-bukvam",
      kind: "short",
      outcome: "узнавать букву по названию и записывать слово, продиктованное по буквам",
      prompt: "Собеседник диктует имя: A-I-G-U-L. Запиши его одним словом.",
      answer: "Aigul",
      why: "Aigul. Названия букв складываются в слово, дефисы на письме не остаются.",
    },
    {
      id: "ch1-blank-strana",
      kind: "gap",
      outcome: "заполнять простой бланк: имя, фамилия, страна, адрес",
      prompt: "Заполни поле бланка: ты из Казахстана.",
      before: "Country: ",
      after: "",
      answer: "Kazakhstan",
      exact: true,
      why: "Country: Kazakhstan. Название страны пишется с заглавной буквы и в бланке тоже.",
    },

    // ---- Приветствие ----
    {
      id: "ch1-vecherom-i-imya",
      kind: "short",
      outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",
      prompt:
        "Ты заходишь в гости в семь вечера. Поздоровайся и спроси имя — два предложения.",
      answer: "Good evening! What's your name?",
      accept: ["Good evening. What's your name?", "Good evening! What is your name?"],
      why: "Good evening! What's your name? В семь вечера идёт good evening, а не good afternoon.",
    },
    {
      id: "ch1-forma-be-my",
      kind: "gap",
      outcome: "выбирать am, is или are по слову перед глаголом",
      prompt: "Допиши форму глагола be.",
      before: "We ",
      after: " from Almaty.",
      answer: "are",
      why: "We are from Almaty. С we идёт are — та же форма, что с you и they.",
    },

    // ---- Рассказ о себе ----
    {
      id: "ch1-rasskaz-chetyre",
      kind: "short",
      outcome: "рассказывать о себе четырьмя предложениями",
      prompt:
        "Расскажи о себе четырьмя предложениями: тебя зовут Алим, ты из Астаны, " +
        "ты водитель, сейчас ты в Алматы.",
      answer: "I'm Alim. I'm from Astana. I'm a driver. I'm in Almaty.",
      accept: [
        "I am Alim. I am from Astana. I am a driver. I am in Almaty.",
        "I'm Alim. I'm from Astana. I'm a driver. I'm in Almaty",
      ],
      why:
        "I'm Alim. I'm from Astana. I'm a driver. I'm in Almaty. Имя, страна или город, " +
        "занятие, место — четыре коротких предложения по одному шагу.",
    },
    {
      id: "ch1-an-pered-glasnym",
      kind: "gap",
      outcome: "ставить a или an по первому звуку следующего слова",
      prompt: "Допиши артикль.",
      before: "She's ",
      after: " artist.",
      answer: "an",
      why: "She's an artist. Слово artist начинается с гласного звука, поэтому an.",
    },

    // ---- Вопрос и краткий ответ ----
    {
      id: "ch1-sprosit-o-ney",
      kind: "short",
      outcome: "спрашивать о другом человеке: Is he, Is she",
      prompt: "Тебе сказали: This is Dana. Спроси, врач ли она. Запиши вопрос целиком.",
      answer: "Is she a doctor?",
      accept: ["Is she a doctor"],
      why: "Is she a doctor? Форма be выходит вперёд, а Dana заменяется словом she.",
    },
    {
      id: "ch1-korotko-i-polno",
      kind: "short",
      outcome: "выбирать между кратким и полным ответом",
      prompt:
        "«Are you from Turkey?» Ты из Казахстана. Ответь коротко и добавь, откуда ты, — " +
        "два предложения.",
      answer: "No, I'm not. I'm from Kazakhstan.",
      accept: [
        "No, I am not. I am from Kazakhstan.",
        "No, I'm not. I'm from Kazakhstan",
      ],
      why:
        "No, I'm not. I'm from Kazakhstan. Краткий ответ говорит «нет», а второе " +
        "предложение — как есть на самом деле.",
    },

    // ---- Не так ----
    {
      id: "ch1-not-ne-na-meste",
      kind: "hottext",
      outcome: "строить отрицание, поставив not после формы be",
      prompt: "Отметь записи, где not стоит не на своём месте.",
      parts: [
        { text: "I not am your teacher.", selectable: true, correct: true },
        { text: " · " },
        { text: "They aren't from Italy.", selectable: true },
        { text: " · " },
        { text: "It not is a key.", selectable: true, correct: true },
        { text: " · " },
        { text: "We aren't in Astana.", selectable: true },
      ],
      why: "Not идёт после формы be: I am not, it is not. В двух записях он встал перед ней.",
    },
    {
      id: "ch1-popravit-sestru",
      kind: "short",
      outcome: "поправлять собеседника: говорить, что не так и как на самом деле",
      prompt:
        "Собеседник сказал: «You're a student.» Ты медсестра. Возрази и скажи, как есть, " +
        "— два предложения.",
      answer: "I'm not a student. I'm a nurse.",
      accept: [
        "I am not a student. I am a nurse.",
        "I'm not a student. I'm a nurse",
      ],
      why:
        "I'm not a student. I'm a nurse. Одного отрицания мало: собеседник узнает, что " +
        "ошибся, но не узнает, как на самом деле.",
    },

    // ---- Что это такое ----
    {
      id: "ch1-that-vdaleke",
      kind: "gap",
      outcome: "различать this и that: близко и далеко",
      prompt: "Предмет лежит на другом конце комнаты. Допиши слово.",
      before: "What's ",
      after: "?",
      answer: "that",
      why: "What's that? О дальнем предмете спрашивают через that, о ближнем — через this.",
    },
    {
      id: "ch1-vopros-o-blizkom",
      kind: "short",
      outcome: "спрашивать о предмете с be и коротко отвечать",
      prompt: "Предмет у тебя в руке. Спроси, ключ ли это. Запиши вопрос целиком.",
      answer: "Is this a key?",
      accept: ["Is this a key"],
      why: "Is this a key? Предмет в руке — значит this, а форма be стоит впереди.",
    },

    // ---- Мои вещи ----
    {
      id: "ch1-chego-net",
      kind: "short",
      outcome: "говорить, чего у тебя нет: I haven't got a car",
      prompt: "Напиши, что у тебя нет велосипеда. Велосипед — a bike.",
      answer: "I haven't got a bike.",
      accept: ["I have not got a bike.", "I haven't got a bike"],
      why: "I haven't got a bike. Отрицание встаёт между have и got.",
    },
    {
      id: "ch1-nasha-komnata",
      kind: "gap",
      outcome: "говорить «его», «её», «наш»: his phone, her bag, our room",
      prompt: "Комната принадлежит тебе и твоему другу. Допиши слово.",
      before: "It's ",
      after: " room.",
      answer: "our",
      why: "It's our room. Слово our говорит о нескольких хозяевах, включая тебя.",
    },
  ],
};

// ===========================================================================
export const rabotaMirVokrug: Quiz = {
  ask: 10,
  passRatio: 0.7,
  questions: [
    // ---- Один и много ----
    {
      id: "ch2-mnozhestvennoe-es",
      kind: "short",
      outcome: "прибавлять es там, где одной буквы s мало: boxes, buses",
      prompt: "Напиши во множественном числе: a box.",
      answer: "boxes",
      why: "Boxes. Слово кончается на x, и одной s тут мало.",
    },
    {
      id: "ch2-osobaya-forma",
      kind: "short",
      outcome: "называть людей во множественном числе: men, women, children, people",
      prompt: "Напиши во множественном числе: a child.",
      answer: "children",
      why: "Children. У этого слова своя форма, и буква s к ней не прибавляется.",
    },

    // ---- Числа, возраст, цена ----
    {
      id: "ch2-chislo-slovom",
      kind: "short",
      outcome: "называть числа от двадцати до ста",
      prompt: "Напиши словом число 85.",
      answer: "eighty-five",
      accept: ["Eighty-five", "eighty five"],
      why: "Eighty-five. Десяток и единица соединяются в одно слово через дефис.",
    },
    {
      id: "ch2-vozrast-brata",
      kind: "short",
      outcome: "говорить свой возраст и спрашивать о возрасте",
      prompt: "Спроси у собеседника, сколько лет его брату. Брат — your brother.",
      answer: "How old is your brother?",
      accept: ["How old is your brother"],
      why: "How old is your brother? О возрасте спрашивают через how old и форму be.",
    },

    // ---- Дни, даты, время ----
    {
      id: "ch2-predlog-vremeni",
      kind: "gap",
      outcome: "ставить at, in или on перед словом о времени",
      prompt: "Занятие в понедельник. Допиши предлог.",
      before: "The lesson is ",
      after: " Monday.",
      answer: "on",
      why: "The lesson is on Monday. Дни недели берут on, месяцы — in, точное время — at.",
    },
    {
      id: "ch2-chetvert-chasa",
      kind: "short",
      outcome: "называть половину и четверть часа",
      prompt: "На часах 7:45. Запиши, который час.",
      answer: "a quarter to eight",
      accept: [
        "It's a quarter to eight.",
        "It's a quarter to eight",
        "A quarter to eight",
      ],
      why: "A quarter to eight. До восьми осталась четверть часа, поэтому to, а не past.",
    },

    // ---- Какой он ----
    {
      id: "ch2-dva-priznaka",
      kind: "short",
      outcome: "соединять два прилагательных словом and",
      prompt: "Дом большой и очень старый. Запиши предложение целиком, начни с The house.",
      answer: "The house is big and very old.",
      accept: [
        "The house is very old and big.",
        "The house is big and very old",
      ],
      why: "The house is big and very old. Форма be одна на оба слова, very усиливает второе.",
    },
    {
      id: "ch2-pered-nazvaniem",
      kind: "short",
      outcome: "ставить прилагательное перед названием предмета: a big house",
      prompt: "Скажи по-английски: это маленькая комната.",
      answer: "It's a small room.",
      accept: ["It is a small room.", "It's a small room"],
      why: "It's a small room. Прилагательное встаёт между артиклем и названием предмета.",
    },

    // ---- Где это ----
    {
      id: "ch2-pod-stolom",
      kind: "short",
      outcome: "говорить, где предмет: in, on, under",
      prompt: "Ключ лежит под столом. Запиши предложение целиком, начни с The key.",
      answer: "The key is under the table.",
      accept: ["The key is under the table"],
      why: "The key is under the table. Предлог under говорит, что предмет снизу.",
    },
    {
      id: "ch2-gde-vokzal",
      kind: "short",
      outcome: "спрашивать, где предмет: Where is и Where are",
      prompt: "Спроси, где вокзал. Вокзал — the station. Запиши вопрос целиком.",
      answer: "Where is the station?",
      accept: ["Where is the station", "Where's the station?"],
      why: "Where is the station? Вокзал один, поэтому форма be — is.",
    },

    // ---- Здесь есть ----
    {
      id: "ch2-est-park",
      kind: "short",
      outcome: "говорить, что где-то есть один предмет: There is a shop",
      prompt: "Рядом с домом есть парк. Запиши предложение целиком.",
      answer: "There is a park near the house.",
      accept: [
        "There's a park near the house.",
        "There is a park near the house",
      ],
      why: "There is a park near the house. Оборот there is открывает предложение о том, что есть.",
    },
    {
      id: "ch2-chego-net-v-gorode",
      kind: "gap",
      outcome: "говорить, чего нет: There isn't a garden",
      prompt: "В городе нет кинотеатра. Допиши недостающее слово.",
      before: "There isn't ",
      after: " cinema.",
      answer: "a",
      why: "There isn't a cinema. Артикль в отрицании остаётся: он говорит, что речь об одном.",
    },

    // ---- Два случая на стык ----
    {
      id: "ch2-forma-be-po-chislu",
      kind: "hottext",
      outcome: "выбирать форму be по числу: It is — They are",
      prompt: "Отметь записи с ошибкой.",
      parts: [
        { text: "It is a book.", selectable: true },
        { text: " · " },
        { text: "They is books.", selectable: true, correct: true },
        { text: " · " },
        { text: "They are keys.", selectable: true },
        { text: " · " },
        { text: "It are a key.", selectable: true, correct: true },
      ],
      why: "Об одном предмете — it is, о нескольких — they are. В двух записях формы перепутаны.",
    },
    {
      id: "ch2-ugovor-o-vstreche",
      kind: "order",
      outcome: "договариваться о встрече: называть день, время и часть суток",
      prompt: "Расставь реплики разговора по порядку.",
      items: [
        "Yes, I am.",
        "Are you free on Friday?",
        "The meeting is at six in the evening. Is that OK?",
      ],
      answer: [1, 0, 2],
      why:
        "Are you free on Friday? — Yes, I am. — The meeting is at six in the evening. " +
        "Is that OK? Сначала спрашивают о дне, потом называют время.",
    },
  ],
};

// ===========================================================================
export const rabotaKazhdyyDen: Quiz = {
  ask: 10,
  passRatio: 0.7,
  questions: [
    // ---- Что я делаю ----
    {
      id: "ch3-sestra-rabotaet",
      kind: "short",
      outcome: "прибавлять -s, когда речь об одном человеке: he works, she lives",
      prompt: "Напиши, что твоя сестра работает в больнице. Сестра — my sister.",
      answer: "My sister works in a hospital.",
      accept: ["My sister works in a hospital"],
      why: "My sister works in a hospital. Речь об одном человеке, поэтому у глагола -s.",
    },
    {
      id: "ch3-okonchanie-es",
      kind: "gap",
      outcome: "прибавлять -es там, где одной s мало: goes, watches, studies",
      prompt: "Он смотрит футбол каждый день. Допиши глагол в нужной форме. Смотреть — watch.",
      before: "He ",
      after: " football every day.",
      answer: "watches",
      why: "He watches football every day. После ch одной s мало, дописывают es.",
    },

    // ---- Я не делаю ----
    {
      id: "ch3-brat-ne-pyot",
      kind: "short",
      outcome: "говорить, чего не делает другой человек: He doesn't work on Sunday",
      prompt: "Напиши, что твой брат не пьёт кофе. Брат — my brother.",
      answer: "My brother doesn't drink coffee.",
      accept: [
        "My brother does not drink coffee.",
        "My brother doesn't drink coffee",
      ],
      why: "My brother doesn't drink coffee. Окончание ушло в doesn't, глагол остался голым.",
    },
    {
      id: "ch3-druzya-ne-zhivut",
      kind: "short",
      outcome: "говорить, чего не делают несколько человек: My friends don't live here",
      prompt: "Напиши, что твои друзья не живут в Астане. Друзья — my friends.",
      answer: "My friends don't live in Astana.",
      accept: [
        "My friends do not live in Astana.",
        "My friends don't live in Astana",
      ],
      why: "My friends don't live in Astana. Людей несколько — значит don't, а не doesn't.",
    },

    // ---- Спросить о делах ----
    {
      id: "ch3-gde-zhivyot-sestra",
      kind: "short",
      outcome: "спрашивать о другом человеке: Does he work here?",
      prompt: "Спроси у собеседника, где живёт его сестра. Сестра — your sister.",
      answer: "Where does your sister live?",
      accept: ["Where does your sister live"],
      why: "Where does your sister live? Об одном другом человеке спрашивают через does.",
    },
    {
      id: "ch3-korotkiy-otvet-da",
      kind: "short",
      outcome: "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",
      prompt: "Тебя спросили: Do you drink tea? Ты пьёшь чай. Ответь коротко.",
      answer: "Yes, I do.",
      accept: ["Yes, I do"],
      why: "Yes, I do. Отвечают тем словом, с которого начался вопрос, а глагол не повторяют.",
    },

    // ---- Как часто ----
    {
      id: "ch3-nikogda-v-voskresenie",
      kind: "short",
      outcome: "говорить, что чего-то не бывает никогда: I never drink coffee",
      prompt: "Напиши, что ты никогда не работаешь по воскресеньям.",
      answer: "I never work on Sunday.",
      accept: ["I never work on Sunday"],
      why: "I never work on Sunday. Слово never отрицает само, и don't рядом с ним не нужен.",
    },
    {
      id: "ch3-narechie-pri-be",
      kind: "gap",
      outcome: "ставить наречие при форме be: I am always busy",
      prompt: "У него по понедельникам всегда много дел. Допиши слово о частоте.",
      before: "He is ",
      after: " busy on Monday.",
      answer: "always",
      why: "He is always busy on Monday. При форме be наречие встаёт после неё, а не до.",
    },

    // ---- Прямо сейчас ----
    {
      id: "ch3-deti-igrayut",
      kind: "short",
      outcome: "говорить о нескольких: We are waiting",
      prompt: "Напиши, что дети сейчас играют. Дети — the children, играть — play.",
      answer: "The children are playing.",
      accept: ["The children are playing"],
      why: "The children are playing. Детей несколько, поэтому форма be — are.",
    },
    {
      id: "ch3-napisanie-ing",
      kind: "gap",
      outcome: "писать окончание -ing без ошибок: make — making, sit — sitting",
      prompt: "Он сейчас сидит за столом. Допиши глагол в нужной форме. Сидеть — sit.",
      before: "He is ",
      after: " at the table.",
      answer: "sitting",
      why: "He is sitting at the table. У короткого слова с одним согласным на конце он удваивается.",
    },

    // ---- Я умею ----
    {
      id: "ch3-umeyu-i-ne-umeyu",
      kind: "short",
      outcome: "рассказывать, что умеешь и чего не умеешь",
      prompt:
        "Напиши два предложения о себе: ты умеешь водить машину, а плавать не умеешь. " +
        "Водить — drive, плавать — swim.",
      answer: "I can drive. I can't swim.",
      accept: ["I can drive. I cannot swim.", "I can drive. I can't swim"],
      why: "I can drive. I can't swim. После can глагол стоит голым и в утверждении, и в отрицании.",
    },
    {
      id: "ch3-chto-umeesh",
      kind: "short",
      outcome: "спрашивать, что человек умеет: What can you do?",
      prompt: "Спроси у собеседника, что он умеет. Запиши вопрос целиком.",
      answer: "What can you do?",
      accept: ["What can you do"],
      why: "What can you do? Вторым словом встаёт can, слово do здесь не нужно.",
    },

    // ---- Два случая на стык ----
    {
      id: "ch3-be-ili-dont",
      kind: "hottext",
      outcome: "различать отрицание с формой be и с don't: I'm not a doctor — I don't work",
      prompt: "Отметь записи с ошибкой.",
      parts: [
        { text: "I'm not a driver.", selectable: true },
        { text: " · " },
        { text: "I don't a driver.", selectable: true, correct: true },
        { text: " · " },
        { text: "I don't drive.", selectable: true },
        { text: " · " },
        { text: "I'm not drive.", selectable: true, correct: true },
      ],
      why:
        "Названию человека нужна форма be с not, действию — don't. В двух записях они " +
        "поменялись местами.",
    },
    {
      id: "ch3-razgovor-o-delah",
      kind: "order",
      outcome: "вести короткий разговор о делах: спросить и ответить",
      prompt: "Расставь реплики разговора по порядку.",
      items: ["Yes, I do. I work in a shop.", "Do you work?", "And you?"],
      answer: [1, 0, 2],
      why: "Do you work? — Yes, I do. I work in a shop. — And you? Вопрос, ответ, встречный вопрос.",
    },
  ],
};

// ===========================================================================
export const rabotaDelaIRazgovory: Quiz = {
  ask: 10,
  passRatio: 0.7,
  questions: [
    // ---- Про него и про них ----
    {
      id: "ch4-znayu-eyo",
      kind: "gap",
      outcome: "заменять имя словом после глагола: I know him",
      prompt: "Речь о женщине, которую ты знаешь. Допиши слово.",
      before: "I know ",
      after: ".",
      answer: "her",
      why: "I know her. После глагола о ней говорят her — то же слово, что и перед вещью.",
    },
    {
      id: "ch4-eto-dlya-nas",
      kind: "short",
      outcome: "ставить слово после предлога: This is for me",
      prompt: "Напиши, что это для вас с другом.",
      answer: "This is for us.",
      accept: ["This is for us"],
      why: "This is for us. После предлога стоит us, а не we.",
    },

    // ---- Мне нравится ----
    {
      id: "ch4-vopros-o-vkusah",
      kind: "short",
      outcome: "спрашивать о вкусах: Do you like coffee?",
      prompt: "Спроси у собеседника, нравится ли ему спорт. Спорт — sport. Запиши вопрос целиком.",
      answer: "Do you like sport?",
      accept: ["Do you like sport"],
      why: "Do you like sport? Вопрос о вкусах строится так же, как вопрос о делах.",
    },
    {
      id: "ch4-ne-nravitsya-gotovit",
      kind: "short",
      outcome: "говорить, что не нравится: I don't like waiting",
      // Первая редакция брала «не нравится готовить» — и это оказалось заданием
      // урока слово в слово. Поймала новая проверка работ частей.
      prompt: "Напиши, что тебе не нравится смотреть фильмы. Смотреть — watch, фильмы — films.",
      answer: "I don't like watching films.",
      accept: [
        "I don't like to watch films.",
        "I do not like watching films.",
        "I do not like to watch films.",
      ],
      why: "I don't like watching films. После like годятся оба способа: и с -ing, и с to.",
    },

    // ---- Просьбы и указания ----
    {
      id: "ch4-poprosit-otkryt",
      kind: "short",
      outcome: "просить: Can you help?",
      prompt: "Попроси незнакомого человека открыть дверь. Открыть — open, дверь — the door.",
      answer: "Can you open the door?",
      accept: [
        "Can you open the door, please?",
        "Can you open the door",
      ],
      why: "Can you open the door? Просьба звучит вопросом с can, и please к ней можно добавить.",
    },
    {
      id: "ch4-sprosit-razresheniya",
      kind: "short",
      outcome: "спрашивать разрешения: Can I sit here?",
      prompt: "Попроси разрешения закрыть дверь. Закрыть — close, дверь — the door.",
      answer: "Can I close the door?",
      accept: ["Can I close the door, please?", "Can I close the door"],
      why: "Can I close the door? Дверь закроешь ты, поэтому после can стоит I.",
    },

    // ---- В магазине и кафе ----
    {
      id: "ch4-some-s-risom",
      kind: "gap",
      outcome: "говорить о количестве: some water",
      prompt: "У тебя есть немного риса. Допиши недостающее слово.",
      before: "I have got ",
      after: " rice.",
      answer: "some",
      why: "I have got some rice. Рис не считают, и вместо числа перед ним стоит some.",
    },
    {
      id: "ch4-skolko-hleba",
      kind: "short",
      outcome: "спрашивать о количестве: How much bread?",
      prompt: "Спроси, сколько нужно хлеба. Хлеб — bread. Запиши вопрос целиком.",
      answer: "How much bread?",
      accept: ["How much bread"],
      why: "How much bread? Хлеб не считают по штукам, поэтому much, а не many.",
    },

    // ---- И, но, потому что ----
    {
      id: "ch4-nazvat-prichinu",
      kind: "short",
      outcome: "называть причину: because",
      prompt: "Соедини в одно предложение: I like this shop. It is near.",
      answer: "I like this shop because it is near.",
      accept: ["I like this shop because it is near"],
      why:
        "I like this shop because it is near. Причина идёт после главной части, и запятая " +
        "перед because не нужна.",
    },
    {
      id: "ch4-perechislit-pokupki",
      kind: "short",
      outcome: "перечислять через запятую: tea, coffee and water",
      prompt: "Перечисли три покупки: хлеб, рис и молоко.",
      answer: "bread, rice and milk",
      accept: ["Bread, rice and milk"],
      why: "Bread, rice and milk. Между первыми двумя запятая, перед последним — and.",
    },

    // ---- Вчера и завтра ----
    {
      id: "ch4-vchera-smotrela",
      kind: "short",
      outcome: "рассказывать о вчерашнем дне: I worked yesterday",
      prompt: "Напиши, что вчера твоя сестра смотрела фильм. Сестра — my sister, фильм — a film.",
      answer: "My sister watched a film yesterday.",
      accept: ["My sister watched a film yesterday"],
      why: "My sister watched a film yesterday. У обычного глагола прошедшее время берёт -ed.",
    },
    {
      id: "ch4-osobyy-glagol",
      kind: "gap",
      outcome: "пользоваться особыми глаголами: go — went",
      prompt: "Вчера он ходил в школу. Допиши глагол в нужной форме. Ходить — go.",
      before: "He ",
      after: " to school yesterday.",
      answer: "went",
      why: "He went to school yesterday. У go прошедшее время — отдельное слово went.",
    },

    // ---- Два случая на стык ----
    {
      id: "ch4-poobeshchat-pomoch",
      kind: "short",
      outcome: "рассказывать о планах: I'll come tomorrow",
      // Условие просило короткую запись, а список принимаемых ответов брал и
      // полную. Либо условие лишнее, либо ответ. Оставлено условие: короткая
      // запись — предмет урока, и разбор о ней же. Нашёл редактор.
      prompt: "Пообещай собеседнику помочь завтра, короткой записью. Помочь — help.",
      answer: "I'll help you tomorrow.",
      accept: ["I'll help you tomorrow"],
      why:
        "I'll help you tomorrow. Полная запись I will help you tomorrow тоже верна, " +
        "но задание просило короткую.",
    },
    {
      id: "ch4-glagol-s-predlogom",
      kind: "hottext",
      outcome: "соединять глагол с предлогом: I listen to him",
      prompt: "Отметь записи, где потерялся предлог.",
      parts: [
        { text: "I listen to music.", selectable: true },
        { text: " · " },
        { text: "I look them.", selectable: true, correct: true },
        { text: " · " },
        { text: "I look at her.", selectable: true },
        { text: " · " },
        { text: "I listen music.", selectable: true, correct: true },
      ],
      why:
        "Когда слушают кого-то, у listen стоит to; когда смотрят на кого-то, у look стоит at. " +
        "В двух записях предлога нет.",
    },
  ],
};
