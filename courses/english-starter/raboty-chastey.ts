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
 * СКОЛЬКО ВОПРОСОВ. В банке двадцать, показывается десять, порог зачёта — восемь
 * из десяти (доля 0.8, как у работы модуля и у экзамена). Каждый модуль части
 * затрагивается не меньше двух раз: часть считается сданной, только если
 * работают все шесть-семь модулей, а не половина. Выборка идёт по кругу
 * модулей — устройство описано в `lib/domain/testing.ts`, — поэтому ни один
 * модуль в попытке не пропускается.
 *
 * УМЕНИЯ ДОПИСАНЫ 20 АВГУСТА. Первая редакция работ спрашивала только правила:
 * писалась она 15 августа, когда уроков чтения, слушания и письма ещё не было.
 * Ученик проходил в части полтора десятка таких уроков, и ни один вопрос о них
 * не заходил. Теперь в каждой части шесть вопросов на умения, по одному-двум на
 * модуль: слушание идёт через поле `zvuk` (наружу уходит только адрес записи,
 * расшифровка остаётся на сервере), чтение — коротким текстом прямо в условии.
 */

// ===========================================================================
export const rabotaYaIDrugie: Quiz = {
  ask: 10,
  passRatio: 0.8,
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
      before: "It's ",
      after: " apple.",
      answer: "an",
      why: "It's an apple. Слово apple начинается с гласного звука, поэтому an.",
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
      prompt: "Напиши, что у тебя нет фотоаппарата. Фотоаппарат — a camera.",
      answer: "I haven't got a camera.",
      accept: ["I have not got a camera.", "I haven't got a camera"],
      why: "I haven't got a camera. Отрицание встаёт между have и got.",
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

    /*
     * ---- Умения: чтение, слушание, письмо ----
     *
     * Написаны 20 августа, когда уроки умений уже стояли во всех модулях, а
     * работа части их не спрашивала вовсе: она писалась 15 августа, до них.
     * Ученик проходил в части пятнадцать уроков чтения, слушания и письма, и
     * ни один вопрос о них не заходил.
     */
    {
      id: "ch1-sluh-diktovka",
      kind: "short",
      outcome: "записывать со слуха слово, продиктованное по буквам",
      zvuk: "T-I-C-K-E-T. Ticket.",
      prompt: "Послушай запись. Собеседник продиктовал слово по буквам. Запиши это слово.",
      answer: "ticket",
      accept: ["Ticket"],
      why:
        "ticket. Названия букв идут по одной, а слово целиком звучит последним — по " +
        "нему себя и проверь.",
    },
    {
      id: "ch1-perepiska-kto-sprosil",
      kind: "short",
      outcome: "понимать по переписке, кто что сказал",
      prompt:
        "Прочитай переписку. Кто первым спросил, как дела? Напиши имя.\n" +
        "— Good morning! I'm Aigul.\n" +
        "— Good morning, Aigul! My name is Alim.\n" +
        "— Nice to meet you.\n" +
        "— Nice to meet you too. How are you?",
      answer: "Alim",
      accept: ["alim"],
      why:
        "Alim. Рядом с вопросом имени нет, и очередь приходится считать от первой " +
        "строки: её написала Aigul, значит вторая и четвёртая — Алима.",
    },
    {
      id: "ch1-pismo-zaglavnaya",
      kind: "short",
      outcome:
        "находить в записи о себе потерянные слова: форму be, артикль, заглавную букву",
      prompt:
        "В записи о себе одно предложение написано с ошибкой: «I'm Dana. I'm from " +
        "turkey. I'm a teacher.» Перепиши это предложение верно.",
      answer: "I'm from Turkey.",
      exact: true,
      accept: [
        "I am from Turkey.",
        "I'm from Turkey",
        "I am from Turkey",
      ],
      why:
        "I'm from Turkey. Название страны пишется с заглавной буквы, где бы оно ни " +
        "стояло — в начале предложения или в середине.",
    },
    {
      id: "ch1-sluh-kem-rabotaet",
      kind: "choice",
      outcome: "отличать на слух вопрос от сообщения и понимать краткий ответ",
      zvuk: "You are from Astana. Are you a nurse? — Yes, I am.",
      prompt: "Послушай запись. Сколько в ней вопросов?",
      options: [
        { text: "Два" },
        { text: "Один", correct: true },
        { text: "Ни одного" },
      ],
      why:
        "Один. Первое предложение — сообщение: слова стоят по порядку. Вопрос слышно " +
        "по перестановке: are выходит вперёд.",
    },
    {
      id: "ch1-obyavlenie-popravka",
      kind: "short",
      outcome: "брать из объявления поправку, а не отменённые ею сведения",
      prompt:
        "Прочитай объявление и напиши английским словом, в каком городе идут занятия.\n" +
        "ENGLISH\n" +
        "Astana\n" +
        "Sorry! The lessons aren't in Astana.\n" +
        "They are in Almaty.",
      answer: "Almaty",
      accept: ["almaty", "in Almaty"],
      why:
        "Almaty. Крупная строка отменена припиской, и верное место стоит последним. " +
        "Так устроена любая поправка: сначала что не так, потом как есть.",
    },
    {
      id: "ch1-opis-chego-net",
      kind: "short",
      outcome: "проверять по описи, есть ли нужная вещь",
      prompt:
        "Прочитай две описи. Какой из трёх вещей — a key, a picture, a bag — нет ни в " +
        "одной? Ответь по-английски.\n" +
        "ROOM\n" +
        "A table. A chair. A picture. A window.\n" +
        "BAG\n" +
        "A pen. A book. A key. A phone.",
      answer: "a bag",
      accept: ["bag", "A bag", "Bag"],
      why:
        "a bag. Ключ стоит во второй описи, картина — в первой, а сумка нигде: она сама " +
        "и есть вторая опись.",
    },
    {
      id: "ch1-razgovor-chto-est-u-sestry",
      kind: "short",
      outcome: "понимать по разговору, чья вещь и у кого что есть",
      prompt:
        "Прочитай разговор и напиши одним предложением, что есть у сестры.\n" +
        "— Have you got a car?\n" +
        "— No, I haven't. My sister has got a car.\n" +
        "— And this key? Is it her key?\n" +
        "— No, it's my key.",
      answer: "She has got a car.",
      accept: [
        "She's got a car.",
        "She has got a car",
        "She's got a car",
        "My sister has got a car.",
        "My sister has got a car",
      ],
      why:
        "She has got a car. В разговоре сказано «my sister has got a car». Когда говоришь " +
        "о сестре со стороны, вместо my sister ставится she.",
    },
  ],
};

// ===========================================================================
export const rabotaMirVokrug: Quiz = {
  ask: 10,
  passRatio: 0.8,
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
      prompt: "Скажи по-английски: это старая машина.",
      answer: "It's an old car.",
      accept: ["It is an old car.", "It's an old car"],
      why:
        "It's an old car. Прилагательное встаёт между артиклем и названием предмета, а " +
        "артикль смотрит уже на него: old начинается с гласного звука.",
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

    // ---- Умения: чтение, слушание, письмо ----
    {
      id: "ch2-sluh-chego-neskolko",
      kind: "short",
      outcome: "понимать на слух, об одной вещи говорят или о нескольких",
      zvuk: "I have got two bags and one map.",
      prompt:
        "Послушай запись. Чего у говорящего несколько? Ответь английским словом во " +
        "множественном числе.",
      answer: "bags",
      accept: ["Bags"],
      why:
        "bags. Число two и окончание -s говорят об одном и том же: вещей несколько. " +
        "Карта названа через one — она одна.",
    },
    {
      id: "ch2-cennik-dve-knigi",
      kind: "short",
      outcome: "находить в объявлении цену и количество",
      prompt:
        "Прочитай ценник. Сколько заплатит человек за два билета? Ответь цифрой.\n" +
        "MARKET\n" +
        "A ticket — 8\n" +
        "Two tickets — 14\n" +
        "A map — 5",
      answer: "14",
      why:
        "14. У двух билетов своя строка, и цена в ней уже за оба. Считать 8 и 8 не " +
        "надо — ценник об этом и говорит.",
    },
    {
      id: "ch2-pismo-predlog-dnya",
      kind: "short",
      outcome: "проверять в сообщении о встрече предлог перед днём и перед временем",
      prompt:
        "В сообщении о встрече написали: «See you on the evening!» Перепиши строку с " +
        "верным предлогом.",
      answer: "See you in the evening!",
      exact: true,
      accept: ["See you in the evening"],
      why:
        "See you in the evening! Перед частью суток стоит in, а on остаётся дням недели.",
    },
    {
      id: "ch2-obyavlenie-podhodit-li",
      kind: "short",
      outcome: "понимать по описанию, какая вещь и подходит ли она",
      prompt:
        "Человеку нужен маленький стол. Прочитай объявление и напиши цифрой, сколько он " +
        "заплатит.\n" +
        "FOR SALE\n" +
        "Table 1. It is big and new. Price: 60.\n" +
        "Table 2. It is small but old. Price: 35.",
      answer: "35",
      why:
        "35. Маленький стол только один — второй. Он старый, но человек искал не новый, " +
        "а маленький.",
    },
    {
      id: "ch2-sluh-ryadom-s-chem",
      kind: "short",
      outcome: "понимать на слух указания дороги, а в объявлении — время и цену",
      zvuk: "The bus is at ten. The ticket is thirty.",
      prompt: "Послушай запись. Сколько стоит билет? Ответь цифрой.",
      answer: "30",
      accept: ["thirty", "Thirty"],
      why:
        "30. Чисел в записи два, и различает их предлог: после at идёт время, а цена " +
        "стоит без него.",
    },
    {
      id: "ch2-pismo-poteryannoe-there",
      kind: "short",
      outcome: "находить в объявлении о сдаче потерянное there и форму be не по числу",
      prompt:
        "В объявлении о сдаче квартиры написали: «Is a bathroom in the flat.» Перепиши " +
        "строку верно.",
      answer: "There is a bathroom in the flat.",
      exact: true,
      accept: ["There is a bathroom in the flat"],
      why:
        "There is a bathroom in the flat. Перед формой be стоит there — оно и говорит, " +
        "что речь о наличии, а не о том, какова ванная.",
    },
  ],
};

// ===========================================================================
export const rabotaKazhdyyDen: Quiz = {
  ask: 10,
  passRatio: 0.8,
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

    // ---- Умения: чтение и слушание ----
    {
      id: "ch3-sluh-vo-skolko-sestra",
      kind: "short",
      outcome: "понимать на слух, кто что делает и во сколько",
      zvuk: "I get up at six. My sister gets up at eight.",
      prompt: "Послушай запись. Во сколько встаёт сестра? Ответь цифрой.",
      answer: "8",
      accept: ["eight", "Eight"],
      why:
        "8. Времени в записи два, и различает их то, о ком речь: шесть — о говорящем, " +
        "восемь — о сестре.",
    },
    {
      id: "ch3-obyavlenie-chego-ne-nado",
      kind: "short",
      outcome: "понимать по объявлению, что требуется, а что нет",
      prompt:
        "Прочитай объявление. Какая вещь для этой работы не нужна? Ответь английским " +
        "словом.\n" +
        "WE NEED A TEACHER\n" +
        "You work in a school.\n" +
        "You don't need a car.\n" +
        "You start at nine.",
      answer: "car",
      accept: ["a car", "Car"],
      why:
        "car. О вещах в объявлении сказано один раз, и сказано через don't need: машина " +
        "не требуется.",
    },
    {
      id: "ch3-sluh-kratkiy-otvet",
      kind: "choice",
      outcome: "понимать на слух вопрос с do и короткий ответ на него",
      zvuk: "Does Dana study English? — No, she doesn't. She studies Kazakh.",
      prompt: "Послушай запись. Какой краткий ответ в ней прозвучал?",
      options: [
        { text: "No, she isn't." },
        { text: "No, she doesn't.", correct: true },
        { text: "No, I don't." },
      ],
      why:
        "No, she doesn't. Краткий ответ повторяет слово вопроса: спросили does — " +
        "ответили doesn't. Форма be сюда не подходит: спрашивали о деле.",
    },
    {
      id: "ch3-rasskaz-izredka",
      kind: "short",
      outcome: "понимать по тексту, что бывает всегда, а что изредка",
      prompt:
        "Прочитай рассказ и напиши английским словом, в какой день Дана работает " +
        "изредка.\n" +
        "Dana is a nurse. She always works on Tuesday.\n" +
        "She sometimes works on Sunday.\n" +
        "She never works on Friday.",
      answer: "Sunday",
      accept: ["sunday", "on Sunday"],
      why:
        "Sunday. На лесенке частоты sometimes стоит ниже always, но выше never: изредка " +
        "— это не «никогда».",
    },
    {
      id: "ch3-sluh-chem-zanyat-seychas",
      kind: "choice",
      outcome: "слышать разницу между «сейчас» и «всегда»",
      zvuk: "Dana is a teacher. She isn't working today. She is reading at home.",
      prompt: "Послушай запись. Чем Дана занята сегодня?",
      options: [
        { text: "Ведёт занятия" },
        { text: "Гуляет в парке" },
        { text: "Читает дома", correct: true },
      ],
      why:
        "Читает дома. Работа учителем — это то, что бывает всегда, а окончание -ing " +
        "рядом со словом today говорит о сегодняшнем дне.",
    },
    {
      id: "ch3-obyavlenie-pochemu-ne-podhodit",
      kind: "short",
      outcome: "понимать по объявлению, что нужно уметь и что там можно",
      prompt:
        "Человек умеет водить машину, но не говорит по-английски. Какая работа ему " +
        "подходит? Ответь цифрой 1 или 2.\n" +
        "JOB 1\n" +
        "You can speak English. You can work in the evening.\n" +
        "JOB 2\n" +
        "You can drive. You can work at the weekend.",
      answer: "2",
      accept: ["job 2", "JOB 2"],
      why:
        "2. Первое объявление требует английского, второго умения у человека нет. " +
        "Второе требует водить машину — это он умеет.",
    },
  ],
};

// ===========================================================================
export const rabotaDelaIRazgovory: Quiz = {
  ask: 10,
  passRatio: 0.8,
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
      prompt: "Спроси у собеседника, нравится ли ему музыка. Музыка — music. Запиши вопрос целиком.",
      answer: "Do you like music?",
      accept: ["Do you like music"],
      why: "Do you like music? Вопрос о вкусах строится так же, как вопрос о делах.",
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

    // ---- Умения: чтение, слушание, письмо ----
    {
      id: "ch4-pismo-kogo-vidit-kazhdyy-den",
      kind: "short",
      outcome: "понимать в тексте, о ком идёт речь, когда имя не повторяют",
      prompt:
        "Прочитай сообщение. Кого Дана не видит? Ответь английским словом.\n" +
        "A message from Dana\n" +
        "Hi! I have got a brother and a sister.\n" +
        "My brother lives in Almaty. I don't see him.\n" +
        "My sister works with me. I see her every day.\n" +
        "Dana",
      answer: "brother",
      accept: ["a brother", "Brother", "her brother"],
      why:
        "brother. Имён в последних строках нет: о брате говорит him, о сестре — her. " +
        "Держать, кто из них кто, приходится от первой строки.",
    },
    {
      id: "ch4-pismo-vkus-ili-prosba",
      kind: "short",
      outcome: "различать на письме I like и I'd like и ставить to там, где оно нужно",
      prompt: "Человек написал: «I'd like read a book.» Перепиши строку верно.",
      answer: "I'd like to read a book.",
      accept: [
        "I would like to read a book.",
        "I'd like to read a book",
        "I would like to read a book",
      ],
      why:
        "I'd like to read a book. Перед делом после I'd like ставят to. Перед вещью его " +
        "нет: I'd like a tea.",
    },
    {
      id: "ch4-sluh-chto-poprosili",
      kind: "choice",
      outcome: "различать на слух указание, запрет и просьбу",
      zvuk: "Don't sit here. Can you help me, please?",
      prompt: "Послушай запись. О чём в ней попросили?",
      options: [
        { text: "Сесть здесь" },
        { text: "Помочь", correct: true },
        { text: "Открыть окно" },
      ],
      why:
        "Помочь. Просьба начинается с Can you, а запрет — с Don't. Различает их первое " +
        "слово, и только оно.",
    },
    {
      id: "ch4-menyu-dva-blyuda",
      kind: "short",
      outcome: "находить в меню нужное и понимать, сколько это стоит",
      prompt:
        "Человек заказал только рис, без мяса. Прочитай меню и напиши цифрой, сколько " +
        "он заплатит.\n" +
        "CAFE\n" +
        "Rice — 60\n" +
        "Rice and meat — 90\n" +
        "Tea — 25\n" +
        "Water — 15",
      answer: "60",
      why:
        "60. Цена 90 стоит за рис вместе с мясом — так в меню и пишут о блюде из " +
        "нескольких вещей. У риса отдельно своя строка.",
    },
    {
      id: "ch4-sluh-s-chem-sporit-but",
      kind: "choice",
      outcome: "слышать союз и понимать, добавляет он, спорит или даёт выбор",
      zvuk: "I like my flat, but it is very small.",
      prompt: "Послушай запись. Что сделал союз между двумя частями?",
      options: [
        { text: "Добавил второе дело" },
        { text: "Дал выбор из двух" },
        { text: "Поспорил с первой частью", correct: true },
      ],
      why:
        "Поспорил. Квартира нравится — и всё же она мала: вторая часть спорит с первой. " +
        "Добавляет and, выбор даёт or.",
    },
    {
      id: "ch4-otkrytka-zavtra",
      kind: "short",
      outcome: "проверять в открытке, что время глагола сходится со словом времени",
      prompt: "В открытке написали: «Yesterday I am at home.» Перепиши строку верно.",
      answer: "Yesterday I was at home.",
      exact: true,
      accept: ["Yesterday I was at home"],
      why:
        "Yesterday I was at home. Слово yesterday говорит о вчера, и форма be тоже " +
        "берётся прошедшая: was, а не am.",
    },
  ],
};
