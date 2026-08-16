import type { Quiz } from "@/lib/content/types";

/**
 * Итоговый экзамен ступени «Английский с нуля».
 *
 * ЧТО ОН РЕШАЕТ. Пройден ли уровень. На нём держится сертификат, поэтому порог
 * выше, чем у работы модуля: 75 против 70.
 *
 * ЧЕМ ОТЛИЧАЕТСЯ ОТ ВСЕГО ОСТАЛЬНОГО. Работа модуля спрашивает сразу после
 * материала, работа части — спустя шесть модулей, экзамен — спустя весь курс.
 * Памяти на свежее правило у него нет вовсе, поэтому почти каждый вопрос
 * требует ПРОИЗВЕСТИ ответ. Узнавание среди трёх кнопок через два месяца после
 * урока не показывает ничего.
 *
 * СКОЛЬКО ВОПРОСОВ. В банке пятьдесят — по два на каждый модуль курса.
 * Показывается тридцать: столько же по объёму, сколько экзамены Cambridge на
 * этих ступенях, и это проверка, а не второе прохождение курса.
 *
 * ПОЧЕМУ НЕ ПО ИТОГАМ, А ПО МОДУЛЯМ. Итогов в курсе двести. Требовать вопрос на
 * каждый — значит сделать экзамен на двести вопросов, который не сдаёт никто.
 * Правило охвата изменено вместе с этим файлом и объяснено в
 * `scripts/check-content.mts`.
 *
 * ЧЕГО ЗДЕСЬ НЕТ. Ни один вопрос не повторяет задание урока и не берёт сквозной
 * пример модуля. Проверяется скриптом.
 */
export const ekzamenEnglishStarter: Quiz = {
  ask: 30,
  passRatio: 0.75,
  questions: [
    // ===== 1. Алфавит и своё имя =====
    {
      id: "ex-diktovka-familii",
      kind: "short",
      outcome: "узнавать букву по названию и записывать слово, продиктованное по буквам",
      prompt: "Собеседник диктует фамилию: N-U-R-L-A-N. Запиши её одним словом.",
      answer: "Nurlan",
      why: "Nurlan. Названия букв складываются в слово, дефисы на письме не остаются.",
    },
    {
      id: "ex-zaglavnaya-v-yazyke",
      kind: "short",
      outcome: "писать с заглавной буквы имена, страны и названия языков",
      prompt: "Исправь ошибку и запиши целиком: «I speak english.»",
      answer: "I speak English.",
      accept: ["I speak English"],
      why: "I speak English. Название языка пишется с заглавной буквы и в середине предложения.",
    },

    // ===== 2. Приветствие =====
    {
      id: "ex-privetstvie-utrom",
      kind: "short",
      outcome: "здороваться, выбирая приветствие по времени дня, и прощаться",
      prompt: "Ты заходишь в магазин в девять утра. Поздоровайся.",
      answer: "Good morning!",
      accept: ["Good morning", "Good morning."],
      why: "Good morning! До полудня идёт good morning, после — good afternoon.",
    },
    {
      id: "ex-korotkaya-forma-be",
      kind: "short",
      outcome: "узнавать и писать короткие формы глагола be: I'm, you're, he's",
      prompt: "Запиши коротко: they are.",
      answer: "they're",
      accept: ["They're"],
      why: "They're. Из are выпала буква a, и на её месте стоит апостроф.",
    },

    // ===== 3. Рассказ о себе =====
    {
      id: "ex-otkuda-ty",
      kind: "short",
      outcome: "говорить, откуда ты: I'm from и название страны или города",
      prompt: "Напиши, что ты из Испании. Испания — Spain.",
      answer: "I'm from Spain.",
      accept: ["I am from Spain.", "I'm from Spain"],
      why: "I'm from Spain. Название страны идёт после from и пишется с заглавной.",
    },
    {
      id: "ex-zanyatie-s-artiklem",
      kind: "gap",
      outcome: "называть своё занятие: I'm a doctor, I'm a student",
      prompt: "Допиши недостающее слово: он актёр.",
      before: "He's ",
      after: " actor.",
      answer: "an",
      why: "He's an actor. Слово actor начинается с гласного звука, поэтому an, а не a.",
    },

    // ===== 4. Вопрос и краткий ответ =====
    {
      id: "ex-vopros-perestanovkoy",
      kind: "short",
      outcome: "строить вопрос с be, поменяв местами первые два слова",
      prompt: "Сделай вопрос из сообщения: «They are in Rome.»",
      answer: "Are they in Rome?",
      accept: ["Are they in Rome"],
      why: "Are they in Rome? Первые два слова меняются местами, остальное не трогают.",
    },
    {
      id: "ex-kratkiy-otvet-da",
      kind: "short",
      outcome: "коротко отвечать «да»: Yes, I am, Yes, he is",
      prompt: "«Is he a driver?» Он водитель. Ответь коротко.",
      answer: "Yes, he is.",
      accept: ["Yes, he is"],
      why: "Yes, he is. В кратком ответе «да» форму be не сокращают.",
    },

    // ===== 5. Не так =====
    {
      id: "ex-otricanie-s-be",
      kind: "short",
      outcome: "строить отрицание, поставив not после формы be",
      prompt: "Сделай отрицание: «She is in Paris.»",
      answer: "She is not in Paris.",
      accept: ["She isn't in Paris.", "She's not in Paris."],
      why: "She is not in Paris. Слово not встаёт сразу после формы be.",
    },
    {
      id: "ex-prav-ili-net",
      kind: "gap",
      outcome: "говорить, прав собеседник или нет: You're right, You're wrong",
      prompt: "Собеседник угадал верно. Допиши слово.",
      before: "You are ",
      after: ".",
      answer: "right",
      why: "You are right. О согласии говорят right, об ошибке — wrong.",
    },

    // ===== 6. Что это такое =====
    {
      id: "ex-chto-eto-vopros",
      kind: "short",
      outcome: "спрашивать «что это» и отвечать: What is this? — It's a book",
      prompt: "Предмет у тебя в руке, и ты не знаешь его названия. Спроси, что это.",
      answer: "What's this?",
      accept: ["What is this?", "What's this", "What is this"],
      why: "What's this? О предмете в руке спрашивают через this.",
    },
    {
      id: "ex-dengi-bez-artiklya",
      kind: "hottext",
      outcome: "называть то, что вокруг на улице",
      prompt: "Отметь записи с ошибкой.",
      parts: [
        { text: "It's money.", selectable: true },
        { text: " · " },
        { text: "It's a money.", selectable: true, correct: true },
        { text: " · " },
        { text: "It's a taxi.", selectable: true },
        { text: " · " },
        { text: "It's moneys.", selectable: true, correct: true },
      ],
      why: "Деньги по-английски не считают: ни артикля, ни окончания -s слово money не берёт.",
    },

    // ===== 7. Мои вещи =====
    {
      id: "ex-u-menya-est",
      kind: "short",
      outcome: "говорить, что у тебя есть: I've got a car",
      prompt: "Напиши, что у тебя есть фотоаппарат. Фотоаппарат — a camera.",
      answer: "I've got a camera.",
      accept: ["I have got a camera.", "I've got a camera"],
      why: "I've got a camera. Оборот берётся целиком: have и got вместе.",
    },
    {
      id: "ex-chya-veshch",
      kind: "gap",
      outcome: "спрашивать и отвечать, чья это вещь",
      prompt: "Сумка принадлежит ему. Допиши слово.",
      before: "It's ",
      after: " bag.",
      answer: "his",
      why: "It's his bag. Перед вещью о нём говорят his.",
    },

    // ===== 8. Один и много =====
    {
      id: "ex-mnozhestvennoe-s",
      kind: "short",
      outcome: "говорить о нескольких вещах сразу: books, keys, cars",
      prompt: "Напиши во множественном числе: a picture.",
      answer: "pictures",
      why: "Pictures. К обычному слову дописывают одну s.",
    },
    {
      id: "ex-these-ili-this",
      kind: "gap",
      outcome: "показывать на несколько предметов: these и those",
      prompt: "Ты показываешь на книги рядом с собой. Допиши слово.",
      before: "",
      after: " are my books.",
      answer: "These",
      accept: ["these"],
      why: "These are my books. О нескольких предметах рядом говорят these.",
    },

    // ===== 9. Числа, возраст, цена =====
    {
      id: "ex-sostavnoe-chislo",
      kind: "short",
      outcome: "называть числа от двадцати до ста",
      prompt: "Напиши словом число 34.",
      answer: "thirty-four",
      accept: ["Thirty-four", "thirty four"],
      why: "Thirty-four. Десяток и единица соединяются в одно слово через дефис.",
    },
    {
      id: "ex-vopros-o-cene",
      kind: "short",
      outcome: "спрашивать цену: How much is it?",
      prompt: "Ты держишь в руках одну книгу и хочешь узнать её цену. Спроси.",
      answer: "How much is it?",
      accept: ["How much is it"],
      why: "How much is it? Книга одна, поэтому форма be — is.",
    },

    // ===== 10. Дни, даты, время =====
    {
      id: "ex-data-v-blanke",
      kind: "gap",
      outcome: "называть месяцы и записывать дату цифрой и месяцем",
      prompt: "Запиши дату в бланке: седьмое января.",
      before: "Date: 7 ",
      after: "",
      answer: "January",
      exact: true,
      why: "7 January. День остаётся цифрой, месяц пишут словом и с заглавной буквы.",
    },
    {
      id: "ex-polovina-chasa",
      kind: "short",
      outcome: "называть половину и четверть часа",
      prompt: "На часах 9:30. Запиши, который час.",
      answer: "half past nine",
      accept: ["It's half past nine.", "Half past nine", "It's half past nine"],
      why: "Half past nine. Половина часа — это half past и час, который уже прошёл.",
    },

    // ===== 11. Какой он =====
    {
      id: "ex-priznak-posle-be",
      kind: "short",
      outcome: "говорить, какой предмет: The house is big",
      prompt: "Машина новая. Запиши предложение целиком, начни с The car.",
      answer: "The car is new.",
      accept: ["The car is new"],
      why: "The car is new. Прилагательное встаёт после формы be и не меняется.",
    },
    {
      id: "ex-very-k-priznaku",
      kind: "gap",
      outcome: "усиливать прилагательное словом very",
      prompt: "Комната очень маленькая. Допиши недостающее слово.",
      before: "The room is ",
      after: " small.",
      answer: "very",
      why: "The room is very small. Слово very встаёт перед тем словом, которое усиливает.",
    },

    // ===== 12. Где это =====
    {
      id: "ex-predlog-mesta",
      kind: "gap",
      outcome: "говорить, где предмет: in, on, under",
      prompt: "Карта лежит в сумке. Допиши предлог.",
      before: "The map is ",
      after: " the bag.",
      answer: "in",
      why: "The map is in the bag. Внутри — это in, на поверхности — on, снизу — under.",
    },
    {
      id: "ex-obyasnit-dorogu",
      kind: "order",
      outcome: "объяснять дорогу двумя-тремя указаниями",
      prompt: "Собери объяснение дороги: сначала прямо, потом налево, потом где магазин.",
      items: ["Turn left.", "Go straight.", "The shop is near the station."],
      answer: [1, 0, 2],
      why:
        "Go straight. Turn left. The shop is near the station. Каждое указание — " +
        "отдельное предложение, последним говорят, где цель.",
    },

    // ===== 13. Здесь есть =====
    {
      id: "ex-there-are-neskolko",
      kind: "short",
      outcome: "говорить, что предметов несколько: There are two rooms",
      prompt: "В квартире три комнаты. Запиши предложение целиком.",
      answer: "There are three rooms.",
      accept: ["There are three rooms"],
      why: "There are three rooms. Комнат несколько — значит are и окончание -s у слова.",
    },
    {
      id: "ex-est-li-vopros",
      kind: "short",
      outcome: "спрашивать, есть ли что-то, и коротко отвечать: Is there a shop? — Yes, there is",
      prompt: "Спроси, есть ли поблизости аптека. Аптека — a chemist. Запиши вопрос целиком.",
      answer: "Is there a chemist?",
      accept: ["Is there a chemist"],
      why: "Is there a chemist? В вопросе оборот переворачивается: сначала is, потом there.",
    },

    // ===== 14. Что я делаю =====
    {
      id: "ex-okonchanie-s",
      kind: "gap",
      outcome: "прибавлять -s, когда речь об одном человеке: he works, she lives",
      prompt: "Она живёт в Алматы. Допиши глагол в нужной форме. Жить — live.",
      before: "She ",
      after: " in Almaty.",
      answer: "lives",
      why: "She lives in Almaty. Речь об одном человеке — значит у глагола -s.",
    },
    {
      id: "ex-rasskaz-o-dne",
      kind: "short",
      outcome: "рассказывать распорядок дня со временем: I get up at seven",
      prompt: "Напиши, что ты встаёшь в восемь. Вставать — get up.",
      answer: "I get up at eight.",
      accept: ["I get up at eight"],
      why: "I get up at eight. Точное время идёт с предлогом at и стоит в конце.",
    },

    // ===== 15. Я не делаю =====
    {
      id: "ex-otricanie-dont",
      kind: "short",
      outcome: "говорить, чего не делаешь сам: I don't work on Sunday",
      prompt: "Напиши, что ты не смотришь футбол. Смотреть — watch.",
      answer: "I don't watch football.",
      accept: ["I do not watch football.", "I don't watch football"],
      why: "I don't watch football. Отрицание строится через don't, глагол остаётся голым.",
    },
    {
      id: "ex-doesnt-o-drugom",
      kind: "gap",
      outcome: "говорить, чего не делает другой человек: He doesn't work on Sunday",
      prompt: "Он не водит машину. Допиши недостающее слово.",
      before: "He ",
      after: " drive.",
      answer: "doesn't",
      accept: ["does not"],
      why: "He doesn't drive. Окончание ушло в doesn't, и глагол остался без него.",
    },

    // ===== 16. Спросить о делах =====
    {
      id: "ex-vopros-do-you",
      kind: "short",
      outcome: "спрашивать собеседника о его делах: Do you work on Sunday?",
      prompt: "Спроси у собеседника, читает ли он книги. Читать — read. Запиши вопрос целиком.",
      answer: "Do you read books?",
      accept: ["Do you read books"],
      why: "Do you read books? Вопрос о делах открывает слово Do.",
    },
    {
      id: "ex-vopros-what-do",
      kind: "short",
      outcome: "спрашивать, что человек делает: What do you study?",
      prompt: "Спроси у собеседника, что он ест на завтрак. Есть — eat. Запиши вопрос целиком.",
      answer: "What do you eat for breakfast?",
      accept: ["What do you eat for breakfast"],
      why: "What do you eat for breakfast? Вопросительное слово встаёт впереди, дальше всё как прежде.",
    },

    // ===== 17. Как часто =====
    {
      id: "ex-mesto-narechiya",
      kind: "short",
      outcome: "говорить, как часто что-то бывает: I always work on Monday",
      prompt: "Напиши, что ты всегда пьёшь чай по утрам. Пить — drink, утром — in the morning.",
      answer: "I always drink tea in the morning.",
      accept: ["I always drink tea in the morning"],
      why: "I always drink tea in the morning. Наречие частоты стоит между I и глаголом.",
    },
    {
      id: "ex-narechie-o-drugom",
      kind: "gap",
      outcome: "говорить о частоте у другого человека: He always works late",
      prompt: "Она обычно встаёт рано. Допиши глагол в нужной форме. Вставать — get up.",
      before: "She usually ",
      after: " early.",
      answer: "gets up",
      why: "She usually gets up early. Наречие не сдвигает окончание -s: оно остаётся при глаголе.",
    },

    // ===== 18. Прямо сейчас =====
    {
      id: "ex-seychas-delayu",
      kind: "short",
      outcome: "говорить, что делаешь прямо сейчас: I am working",
      prompt: "Напиши, что ты сейчас пишешь письмо. Писать — write, письмо — a letter.",
      answer: "I am writing a letter.",
      accept: ["I'm writing a letter.", "I am writing a letter"],
      why: "I am writing a letter. Форма be и окончание -ing идут вместе, одно без другого не работает.",
    },
    {
      id: "ex-chto-proishodit",
      kind: "short",
      outcome: "спрашивать, что происходит: What are you doing?",
      prompt: "Спроси у собеседника, что он сейчас делает. Запиши вопрос целиком.",
      answer: "What are you doing?",
      accept: ["What are you doing"],
      why: "What are you doing? Форма be выходит вперёд, а глагол остаётся с окончанием -ing.",
    },

    // ===== 19. Я умею =====
    {
      id: "ex-umenie-can",
      kind: "short",
      outcome: "говорить, что умеешь: I can swim",
      prompt: "Напиши, что ты умеешь рисовать. Рисовать — draw.",
      answer: "I can draw.",
      accept: ["I can draw"],
      why: "I can draw. После can глагол стоит голым: ни to, ни окончания.",
    },
    {
      id: "ex-vopros-ob-umenii",
      kind: "short",
      outcome: "спрашивать об умении и коротко отвечать: Can you swim? Yes, I can.",
      prompt: "Тебя спросили: Can you ride a bike? Ты не умеешь. Ответь коротко.",
      answer: "No, I can't.",
      accept: ["No, I cannot.", "No, I can't"],
      why: "No, I can't. В коротком ответе глагол не повторяют.",
    },

    // ===== 20. Про него и про них =====
    {
      id: "ex-slovo-posle-glagola",
      kind: "gap",
      outcome: "заменять имя словом после глагола: I know him",
      prompt: "Речь о твоих друзьях, которых ты видишь каждый день. Допиши слово.",
      before: "I see ",
      after: " every day.",
      answer: "them",
      why: "I see them every day. После глагола о них говорят them, а не they.",
    },
    {
      id: "ex-o-veshchi-it",
      kind: "short",
      outcome: "говорить о вещи словом it: I like it",
      prompt: "Собеседник показал тебе свою машину. Скажи, что она тебе нравится.",
      answer: "I like it.",
      accept: ["I like it"],
      why: "I like it. О вещи говорят it, даже если по-русски она «она».",
    },

    // ===== 21. Мне нравится =====
    {
      id: "ex-nravitsya-delat",
      kind: "short",
      outcome: "говорить, что нравится делать: I like to read",
      prompt: "Напиши, что тебе нравится плавать. Плавать — swim.",
      answer: "I like to swim.",
      accept: ["I like swimming.", "I like to swim"],
      why: "I like to swim. После like годятся оба способа: с to и с окончанием -ing.",
    },
    {
      id: "ex-hochu-seychas",
      kind: "short",
      outcome: "просить то, чего хочешь сейчас: I'd like a coffee",
      prompt: "Ты в кафе и хочешь чаю. Попроси и добавь «пожалуйста».",
      answer: "I'd like a tea, please.",
      accept: ["I would like a tea, please.", "I'd like some tea, please."],
      why: "I'd like a tea, please. Оборот I'd like говорит о желании прямо сейчас, а не о вкусе вообще.",
    },

    // ===== 22. Просьбы и указания =====
    {
      id: "ex-zapret",
      kind: "short",
      outcome: "запрещать: Don't open the door",
      prompt: "Попроси знакомого не открывать окно. Открывать — open, окно — the window.",
      answer: "Don't open the window.",
      accept: ["Do not open the window.", "Don't open the window"],
      why: "Don't open the window. Запрет открывает don't, и того, к кому обращаются, не называют.",
    },
    {
      id: "ex-priglashenie",
      kind: "short",
      outcome: "приглашать: Would you like to come?",
      prompt: "Пригласи друга прийти в воскресенье. Прийти — come, в воскресенье — on Sunday.",
      answer: "Would you like to come on Sunday?",
      accept: ["Would you like to come on Sunday"],
      why: "Would you like to come on Sunday? Приглашение открывает would, а действие идёт после to.",
    },

    // ===== 23. В магазине и кафе =====
    {
      id: "ex-neschitaemoe-bez-s",
      kind: "hottext",
      outcome: "не ставить a и -s к таким словам",
      prompt: "Отметь записи с ошибкой.",
      parts: [
        { text: "I like bread.", selectable: true },
        { text: " · " },
        { text: "I like breads.", selectable: true, correct: true },
        { text: " · " },
        { text: "I like a water.", selectable: true, correct: true },
        { text: " · " },
        { text: "I like water.", selectable: true },
      ],
      why: "Хлеб и воду не считают: ни артикль, ни окончание -s к ним не приходят.",
    },
    {
      id: "ex-pokupka-v-magazine",
      kind: "short",
      outcome: "покупать в магазине",
      prompt: "Попроси в магазине немного молока. Молоко — milk. Добавь «пожалуйста».",
      answer: "I'd like some milk, please.",
      accept: [
        "Can I have some milk, please?",
        "I would like some milk, please.",
      ],
      why: "I'd like some milk, please. Годится и просьба вопросом: Can I have some milk, please?",
    },

    // ===== 24. И, но, потому что =====
    {
      id: "ex-soedinit-but",
      kind: "short",
      outcome: "противопоставлять: I work, but I don't study",
      prompt:
        "Соедини в одно предложение так, чтобы было слышно противопоставление: " +
        "I like tea. I don't like milk.",
      answer: "I like tea, but I don't like milk.",
      accept: ["I like tea, but I do not like milk."],
      why:
        "I like tea, but I don't like milk. Обе части — целые предложения, поэтому перед but " +
        "стоит запятая.",
    },
    {
      id: "ex-vopros-o-prichine",
      kind: "short",
      outcome: "спрашивать о причине: Why do you work here?",
      prompt: "Спроси у собеседника, почему он учит английский. Учить — study. Запиши вопрос целиком.",
      answer: "Why do you study English?",
      accept: ["Why do you study English"],
      why: "Why do you study English? После why идёт do, как и после других вопросительных слов.",
    },

    // ===== 25. Вчера и завтра =====
    {
      id: "ex-proshedshee-ed",
      kind: "short",
      outcome: "рассказывать о вчерашнем дне: I worked yesterday",
      prompt: "Напиши, что вчера твой брат играл в футбол. Брат — my brother, играть — play.",
      answer: "My brother played football yesterday.",
      accept: ["My brother played football yesterday"],
      why: "My brother played football yesterday. У обычного глагола прошедшее время берёт -ed.",
    },
    {
      id: "ex-zavtra-will",
      kind: "short",
      outcome: "говорить о завтрашнем дне: I will work",
      prompt: "Напиши, что завтра ты будешь работать дома. Дома — at home.",
      answer: "I will work at home tomorrow.",
      accept: ["I'll work at home tomorrow.", "I will work at home tomorrow"],
      why: "I will work at home tomorrow. После will глагол стоит голым, без окончаний.",
    },
  ],
};
