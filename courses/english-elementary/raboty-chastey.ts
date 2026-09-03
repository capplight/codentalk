import type { Quiz } from "@/lib/content/types";

/**
 * Проверочные работы частей курса «Английский · Elementary».
 *
 * ЧЕМ ОНИ ОТЛИЧАЮТСЯ ОТ РАБОТЫ МОДУЛЯ. Работа модуля спрашивает сразу после
 * материала: ученик только что прочитал правило и тут же его применяет. Работа
 * части приходит спустя шесть-десять модулей, и памяти на свежее правило у неё
 * уже нет. Поэтому спрашивает она не правило по отдельности, а случай целиком:
 * рассказать о дне, возразить, расспросить, объяснить, о чём строка.
 *
 * ИЗ ЭТОГО СЛЕДУЕТ УСТРОЙСТВО. Почти каждый вопрос требует ПРОИЗВЕСТИ ответ, а
 * не узнать его среди трёх кнопок: узнавание спустя месяц ничего не
 * показывает.
 *
 * ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО. Ни один вопрос не повторяет задание урока, вопрос
 * работы модуля или строку урочного текста. Первые два сверяет
 * `npm run check:content`, третье — `npm run bliznetsy`. Соблазн тут сильнее
 * обычного: работа части пишется последней, все модули перед глазами, и
 * показательный пример просится в вопрос сам.
 *
 * СКОЛЬКО ВОПРОСОВ. В банке двадцать, показывается десять, порог зачёта —
 * восемь из десяти. Каждый модуль части затрагивается в банке не меньше двух
 * раз — пересчитано по итогам вопросов, ни один модуль не пропущен.
 *
 * И СРАЗУ ОГОВОРКА, ЧТОБЫ СЛЕДУЮЩИЙ НЕ ОБОПРЁЛСЯ НА ЛОЖНЫЙ ВЫВОД. Из «два
 * вопроса на модуль в банке» НЕ следует, что ученику достанется хотя бы один
 * вопрос по каждому модулю: показывается десять из двадцати, и в части 4 при
 * десяти модулях в среднем два-три модуля не спрашиваются вовсе
 * (10·C(18,10)/C(20,10) ≈ 2,4). Первая редакция шапки писала «часть считается
 * сданной, только если работают все её модули» — это неверно, посчитал
 * методист 3 сентября 2026.
 *
 * ПРОВЕРКИ ЭТОТ ФАЙЛ ПОЧТИ НЕ ВИДЯТ, и это надо знать. `npm run kontrol` и
 * `npm run bliznetsy` обходят `course.modules` и в `course.parts[].quiz` не
 * заходят вовсе: долг словаря, форму впереди курса и близнецов они здесь не
 * ищут. `npm run check:content` файл видит, но меряет целостность — пустые
 * ответы, один верный вариант, распределение верных, наличие записи. Всё
 * содержательное здесь проверяется руками.
 *
 * УРОКИ УМЕНИЙ СПРАШИВАЮТСЯ НАРАВНЕ С ПРАВИЛАМИ. Это долг, найденный на прошлой
 * ступени 20 августа: работы частей писались раньше уроков чтения, слушания и
 * письма и не спрашивали о них вовсе. Здесь в каждой части не меньше шести
 * таких вопросов: слушание идёт через поле `zvuk` (наружу уходит только адрес
 * записи, расшифровка остаётся на сервере), чтение — коротким текстом прямо в
 * условии.
 *
 * РАБОТЫ ЧАСТЕЙ НИ НА ЧТО НЕ ВЛИЯЮТ — решение владельца от 20 августа. Экзамен
 * ступени и сертификат открываются по прежнему условию: все уроки и все работы
 * МОДУЛЕЙ. Место работы части — репетиция экзамена, а не ворота к нему.
 */

// ===========================================================================
// Часть 1 — модули 1–7: прошедшее время.
// ===========================================================================
export const rabotaProshloe: Quiz = {
  ask: 10,
  passRatio: 0.8,
  questions: [
    // ---- Это было: was и were ----
    {
      id: "ch1-gde-proshyol-den",
      kind: "short",
      outcome: "рассказывать, где прошёл вчерашний день: I was at home",
      prompt:
        "Тебя спросили: «Where were you yesterday?» Твой ответ — рынок. Ответь одной строкой.",
      answer: "I was at the market.",
      accept: ["I was at the market", "At the market.", "At the market"],
      hint: "Форма be при I в прошлом одна.",
      why: "I was at the market. При I стоит was, а место идёт после предлога at.",
    },
    {
      id: "ch1-kakim-byl-vecher",
      kind: "gap",
      outcome: "говорить, каким что-то было: The film was great",
      prompt: "Вечер выдался тихим. Допиши недостающее слово.",
      before: "The evening ",
      after: " quiet.",
      answer: "was",
      hint: "Вечер один.",
      why: "The evening was quiet. О свойстве в прошлом говорят формой be, а не глаголом с окончанием.",
    },
    {
      id: "ch1-na-sluh-gde-byl",
      kind: "short",
      outcome: "слышать в записи, где человек был и каким это было",
      zvuk: "I was at the station all morning.",
      prompt: "Послушай. Где был человек? Ответь одним английским словом.",
      answer: "station",
      accept: ["Station", "at the station", "the station"],
      hint: "Место названо сразу после предлога.",
      why: "I was at the station all morning. Место стоит после at, а не в конце строки.",
    },

    // ---- Вчера я работал: окончание -ed ----
    {
      id: "ch1-okonchanie-u-glagola",
      kind: "gap",
      outcome: "рассказывать о законченном деле: I worked yesterday",
      prompt: "Вчерашний вечер ушёл на английский. Допиши глагол, у которого перед окончанием стоит y.",
      before: "Yesterday I ",
      after: " English.",
      answer: "studied",
      hint: "Буква y перед окончанием меняется.",
      why: "Yesterday I studied English. У глагола на согласный + y выходит -ied, а не -yed.",
    },
    {
      id: "ch1-slovo-poryadka",
      kind: "gap",
      outcome: "рассказывать о дне несколькими делами подряд",
      prompt: "Ты перечисляешь вчерашние дела по порядку. Допиши первое слово рассказа.",
      before: "",
      after: " I cleaned the flat, then I cooked dinner.",
      answer: "First",
      accept: ["first"],
      hint: "Это слово стоит перед самым первым делом.",
      why: "First I cleaned the flat, then I cooked dinner. Слова порядка держат рассказ вместе.",
    },
    {
      id: "ch1-pismo-chto-sdelal-s-mashinoy",
      kind: "short",
      outcome: "понимать письмо о том, как прошёл день",
      prompt:
        "В письме строка: «I cleaned the flat and I washed the car.» Что человек сделал с машиной? Ответь одним английским словом.",
      answer: "washed",
      accept: ["Washed", "he washed it", "washed the car"],
      hint: "Дел в строке два, и каждое стоит при своей вещи.",
      why: "I washed the car. Первое дело в строке о квартире, второе о машине.",
    },

    // ---- Неправильные глаголы ----
    {
      id: "ch1-ispravit-nepravilnyy",
      kind: "short",
      outcome: "рассказывать о поездке неправильными глаголами: I went to Astana",
      prompt: "Ученик написал: I goed to the coast. Запиши строку без ошибки.",
      answer: "I went to the coast.",
      accept: ["I went to the coast"],
      hint: "У этого глагола прошедшее не берёт окончания вовсе.",
      why: "I went to the coast. Форма goed не существует: у go прошедшее время своё — went.",
    },
    {
      id: "ch1-vzyal-podarok",
      kind: "gap",
      outcome: "говорить о том, что было и что взял: I had a headache, I took a gift",
      prompt: "Вчера подарок был взят с собой на праздник. Допиши глагол.",
      before: "I ",
      after: " a gift.",
      answer: "took",
      hint: "Словарная форма этого глагола — take.",
      why: "I took a gift. Прошедшее у take — took, окончания -ed он не берёт.",
    },
    {
      id: "ch1-soobshchenie-chto-kupili",
      kind: "short",
      outcome: "понимать короткое сообщение о поездке",
      prompt:
        "В сообщении строка: «We went abroad and bought a poster at the harbour.» Что купили? Ответь одним английским словом.",
      answer: "poster",
      accept: ["Poster", "a poster"],
      hint: "Покупка названа сразу после глагола покупки.",
      why: "We bought a poster. Место покупки — гавань, а куплен плакат.",
    },

    // ---- Я не делал ----
    {
      id: "ch1-ispravit-otricanie",
      kind: "short",
      outcome:
        "возвращать глагол к словарной форме после didn't: I didn't go, а не I didn't went",
      prompt: "Ученик написал: I didn't went to the dentist. Запиши строку без ошибки.",
      answer: "I didn't go to the dentist.",
      accept: ["I didn't go to the dentist", "I did not go to the dentist.", "I did not go to the dentist"],
      hint: "Прошедшее уже внутри didn't.",
      why:
        "I didn't go to the dentist. Прошедшее время держит didn't, и глаголу оно " +
        "уже не нужно: остаётся словарная форма.",
    },
    {
      id: "ch1-sdelal-no-ne-sdelal",
      kind: "gap",
      outcome: "противопоставлять сделанное и несделанное через but",
      prompt: "Позвонить получилось, а написать нет. Допиши союз.",
      before: "I called, ",
      after: " I didn't write.",
      answer: "but",
      hint: "Первое дело сделано, второе нет.",
      why: "I called, but I didn't write. Союз but ставят там, где второе простое предложение возражает первому.",
    },
    {
      id: "ch1-na-sluh-chego-ne-delal",
      kind: "short",
      outcome: "слышать в записи, чего человек не делал",
      zvuk: "I didn't fix the printer yesterday.",
      prompt: "Послушай. Чего человек не починил? Ответь одним английским словом.",
      answer: "printer",
      accept: ["Printer", "the printer"],
      hint: "Вещь названа сразу после глагола.",
      why: "I didn't repair the printer. Отрицание стоит при починке, а вещь — принтер.",
    },

    // ---- Спросить о прошлом ----
    {
      id: "ch1-vopros-s-did-celikom",
      kind: "short",
      outcome: "спрашивать о действии: Did you go to the concert?",
      prompt: "Спроси, ходил ли собеседник в музей. Запиши вопрос целиком.",
      answer: "Did you go to the museum?",
      accept: ["Did you go to the museum"],
      hint: "Вопрос о прошлом открывает одно слово, и глагол после него словарный.",
      why: "Did you go to the museum? Слово did стоит первым, а глагол за ним не меняется.",
    },
    {
      id: "ch1-did-ili-was",
      kind: "gap",
      outcome: "выбирать между did и was в вопросе о прошлом",
      prompt: "Ты спрашиваешь не о деле, а о месте. Допиши недостающее слово.",
      before: "",
      after: " you at the station at six?",
      answer: "Were",
      accept: ["were"],
      hint: "Глагола дела в строке нет вовсе.",
      why:
        "Were you at the station at six? Слово did открывает вопрос о деле, а здесь " +
        "спрашивают о месте, и вопрос открывает форма be.",
    },
    {
      id: "ch1-otvetit-na-vopros-pisma",
      kind: "short",
      outcome: "находить в письме вопросы и проверять, на все ли есть ответ",
      prompt:
        "В письме три строки: «We stayed at a hotel. My sister took a lot of photos. What did you cook on Sunday?» Ответь на вопрос письма одной строкой. Твой ответ — рыба.",
      answer: "I cooked fish.",
      accept: ["I cooked fish", "Fish.", "Fish"],
      hint: "Вопрос в письме один, и он в последней строке.",
      why:
        "I cooked fish. Первые две строки о самом авторе, и отвечать на них не надо: " +
        "вопрос только в третьей.",
    },

    // ---- Что происходило ----
    {
      id: "ch1-okonchanie-ing-celikom",
      kind: "gap",
      outcome: "писать окончание -ing по правилу",
      prompt: "В семь дело шло и не кончилось. Допиши глагол целиком.",
      before: "At seven I was ",
      after: " the ceiling.",
      answer: "cleaning",
      hint: "Словарная форма — clean.",
      why: "At seven I was cleaning the ceiling. Окончание -ing прибавляется к словарной форме.",
    },
    {
      id: "ch1-vopros-o-dlitelnom",
      kind: "short",
      outcome: "спрашивать, что происходило: What were you doing?",
      // Первая редакция спрашивала «что собеседник делал в семь» — и совпадала с
      // заданием 5 урока «Спросить, что происходило» дословно, вплоть до ответа.
      // Спрашиваем о третьем человеке: там форма be другая.
      prompt: "Спроси, что делала Дана в девять. Запиши вопрос целиком.",
      answer: "What was Dana doing at nine?",
      accept: ["What was Dana doing at nine"],
      hint: "Дана одна, и форма be при ней своя.",
      why: "What was Dana doing at nine? При одном человеке стоит was, а время идёт в конец.",
    },
    {
      id: "ch1-na-sluh-chto-proishodilo",
      kind: "short",
      outcome: "слышать в записи, что происходило в тот момент",
      zvuk: "At eight I was washing a spoon.",
      prompt: "Послушай. Что человек мыл? Ответь одним английским словом.",
      answer: "spoon",
      accept: ["Spoon", "a spoon"],
      hint: "Вещь названа в самом конце.",
      why: "I was washing a spoon. Время стоит в начале строки, вещь — в конце.",
    },

    // ---- Пока и когда ----
    {
      id: "ch1-soyuz-dvuh-dlitelnyh",
      kind: "gap",
      outcome: "соединять два длительных действия словом while",
      prompt: "Оба дела тянулись весь вечер, и ни одно не случилось в один миг. Допиши союз.",
      before: "I was reading all evening ",
      after: " my brother was cooking.",
      answer: "while",
      hint: "Этот союз ставят, когда тянутся обе части и мига в строке нет вовсе.",
      why:
        "I was reading all evening while my brother was cooking. Союз while связывает " +
        "два дела, которые шли одновременно.",
    },
    {
      id: "ch1-rasskaz-chto-tyanulos-v-chasti",
      kind: "choice",
      outcome: "понимать рассказ, где длительное действие прервано законченным",
      prompt: "В рассказе строка: «I was washing up when my friend called.» Что тянулось?",
      options: [
        { text: "Звонок друга" },
        { text: "Мытьё посуды", correct: true },
        { text: "И мытьё, и звонок — оба тянулись" },
      ],
      hint: "Ищи форму с окончанием -ing.",
      why:
        "Мытьё посуды. Оно шло и не кончилось, а звонок случился разом — потому when " +
        "и стоит при звонке.",
    },
  ],
};

// ===========================================================================
// Часть 2 — модули 8–13: планы, обещания, договорённости.
// ===========================================================================
export const rabotaPlany: Quiz = {
  ask: 10,
  passRatio: 0.8,
  questions: [
    // ---- Я собираюсь ----
    {
      id: "ch2-namerenie-celikom",
      kind: "short",
      outcome: "говорить о намерении: I am going to play chess",
      prompt: "Скажи по-английски, что собираешься купить билет. Начни с I'm.",
      answer: "I'm going to buy a ticket.",
      accept: ["I'm going to buy a ticket", "I am going to buy a ticket."],
      hint: "После оборота идёт словарная форма глагола.",
      why: "I'm going to buy a ticket. Оборот going to берёт глагол без окончания.",
    },
    {
      id: "ch2-kakoy-budet-den",
      kind: "gap",
      outcome: "говорить, каким что-то будет: It is going to be foggy",
      prompt: "Видно, что день будет туманный. Допиши недостающее слово.",
      before: "It is going to ",
      after: " foggy.",
      answer: "be",
      hint: "О свойстве говорят формой be, а не глаголом дела.",
      why: "It is going to be foggy. О том, каким что-то будет, говорят через be.",
    },
    {
      id: "ch2-obyavlenie-chto-prinesti",
      kind: "short",
      outcome: "находить нужное сведение в трёх объявлениях",
      prompt:
        "В объявлении строка: «Bring a towel: we are going to clean the pool.» Что просят принести? Ответь одним английским словом.",
      answer: "towel",
      accept: ["Towel", "a towel"],
      hint: "В строке две части: просьба и причина.",
      why: "Bring a towel. Вторая часть строки объясняет причину, а просьба в первой.",
    },

    // ---- Я сделаю ----
    {
      id: "ch2-obeshchanie-celikom",
      kind: "short",
      outcome: "обещать: I will call you tomorrow",
      prompt: "Пообещай, что вечером напишешь ему. Запиши строку целиком, начни с I.",
      answer: "I will write to you in the evening.",
      accept: [
        "I will write to you in the evening",
        "I'll write to you in the evening.",
        "I'll write to you in the evening",
      ],
      hint: "После will глагол остаётся словарным.",
      why: "I will write to you in the evening. После will глагол стоит словарной формой. Годится и короткая запись I'll.",
    },
    {
      id: "ch2-chego-ne-sdelayu",
      kind: "gap",
      outcome: "говорить, чего не сделаешь: I won't be late",
      prompt: "Ты обещаешь не забыть. Допиши недостающее слово.",
      before: "I ",
      after: " forget.",
      answer: "won't",
      accept: ["will not"],
      hint: "Отрицание при will записывают одним коротким словом.",
      why: "I won't forget. Отрицание при will сливается в одно слово: will + not = won't.",
    },
    {
      id: "ch2-kto-otkroet-ofis",
      kind: "choice",
      outcome: "понимать переписку о договорённости",
      prompt:
        "В переписке строка: «I'm busy till four, but my colleague will open the office.» Кто откроет офис?",
      options: [
        { text: "Тот, кто пишет" },
        { text: "Тот, кому пишут" },
        { text: "Сослуживец того, кто пишет", correct: true },
      ],
      hint: "Смотри, кто стоит перед will.",
      why: "My colleague will open the office. Перед will стоит тот, кто и берётся за дело.",
    },

    // ---- Уже договорились ----
    {
      id: "ch2-dogovorennost-celikom",
      kind: "short",
      outcome: "говорить о договорённости: I'm meeting Dana at five",
      prompt:
        "Вы с Алимом условились встретиться в четыре. Запиши строку целиком, начни с I'm.",
      answer: "I'm meeting Alim at four.",
      accept: ["I'm meeting Alim at four", "I am meeting Alim at four."],
      hint: "О назначенном говорят формой с окончанием -ing.",
      why:
        "I'm meeting Alim at four. Договорённость с другим человеком записывают этой " +
        "формой, а не оборотом going to.",
    },
    {
      id: "ch2-chego-net-v-raspisanii",
      kind: "gap",
      outcome: "говорить, чего в расписании нет: I'm not working on Friday",
      prompt: "Четверг в твоём расписании пустой. Допиши недостающее слово.",
      before: "I'm ",
      after: " working on Thursday.",
      answer: "not",
      hint: "Отрицание встаёт сразу после формы be.",
      why: "I'm not working on Thursday. Слово not стоит между формой be и глаголом.",
    },
    {
      id: "ch2-pismo-o-nedele-vremya",
      kind: "short",
      outcome: "понимать письмо о делах на неделе",
      prompt:
        "В письме строка: «I'm meeting Dana at nine, so I'm not coming to the lesson.» Во сколько назначена встреча? Ответь одним английским словом.",
      answer: "nine",
      accept: ["Nine", "at nine"],
      hint: "В строке назван час, а во второй части — что из этого следует.",
      why: "I'm meeting Dana at nine. Вторая часть строки говорит, что из этого следует.",
    },

    // ---- По расписанию ----
    {
      id: "ch2-raspisanie-forma",
      kind: "gap",
      outcome: "называть время по расписанию: The train leaves at six tomorrow",
      prompt: "Час открытия взят из расписания музея. Допиши глагол целиком.",
      before: "The museum ",
      after: " at ten tomorrow.",
      answer: "opens",
      hint: "О расписании говорят обычной формой настоящего.",
      why:
        "The museum opens at ten tomorrow. Расписание не своё решение, поэтому строка " +
        "берёт обычную форму, а не оборот о намерении.",
    },
    {
      id: "ch2-pozvonyu-kogda",
      kind: "gap",
      outcome: "связывать два дела словом when: I'll call you when I arrive",
      prompt: "Ты позвонишь, как только доберёшься. Допиши союз.",
      before: "I'll call you ",
      after: " I arrive.",
      answer: "when",
      hint: "Второе дело назначает время первому.",
      why:
        "I'll call you when I arrive. После when будущего не ставят: там стоит обычная " +
        "форма настоящего.",
    },
    {
      id: "ch2-zametka-vo-skolko-pervyy",
      kind: "short",
      outcome: "находить нужное время в заметке о поезде",
      prompt:
        "В заметке строка: «The last bus leaves at eleven and the first bus at five.» Во сколько уходит первый? Ответь одним английским словом.",
      answer: "five",
      accept: ["Five", "at five"],
      hint: "Слово first называет первый рейс, last — последний.",
      why: "The first bus at five. Одиннадцать — время последнего, а спрашивают про первый.",
    },

    // ---- Давай я ----
    {
      id: "ch2-predlozhit-pomoshch",
      kind: "short",
      outcome: "предлагать помощь: Shall I carry your bag?",
      // Первая редакция предлагала открыть окно — тот же пример, что в экзамене
      // ступени. Работа части репетирует экзамен, а не пересказывает его.
      prompt: "Предложи собеседнику понести его сумку. Запиши вопрос целиком.",
      answer: "Shall I carry your bag?",
      accept: ["Shall I carry your bag"],
      hint: "Дело сделаешь ты, и вопрос открывает слово о предложении.",
      why: "Shall I carry your bag? Слово shall стоит первым, за ним тот, кто берётся за дело.",
    },
    {
      id: "ch2-zvat-korotko",
      kind: "gap",
      outcome: "звать коротко: Let's bake a pizza",
      prompt: "Ты зовёшь пойти пешком. Допиши недостающее слово.",
      before: "",
      after: " walk to the park.",
      answer: "Let's",
      accept: ["let's", "Let us"],
      hint: "Короткий зов начинается одним словом с апострофом.",
      why: "Let's walk to the park. Зов делает первое слово, а глагол после него остаётся словарным. Полная запись — Let us, но так почти не пишут.",
    },
    {
      id: "ch2-soobshchenie-kuda-zovut",
      kind: "short",
      outcome: "находить в сообщении, куда и во сколько зовут",
      prompt:
        "В сообщении строка: «Shall we meet at the gallery at three?» Куда зовут? Ответь одним английским словом.",
      answer: "gallery",
      accept: ["Gallery", "the gallery", "to the gallery"],
      hint: "Место названо после предлога.",
      why: "Shall we meet at the gallery at three? Три — это час, а место — галерея.",
    },

    // ---- Может быть ----
    {
      id: "ch2-vozmozhnoe-might",
      kind: "gap",
      outcome: "говорить о возможном: It might rain tomorrow",
      prompt: "Снег возможен, но наверняка неизвестно. Допиши недостающее слово.",
      before: "It ",
      after: " snow tomorrow.",
      answer: "might",
      accept: ["may"],
      hint: "Слово говорит: может быть, а может и нет.",
      why: "It might snow tomorrow. Слово might оставляет место сомнению. Годится и may: оба слова о возможном.",
    },
    {
      id: "ch2-uverennost-ili-predpolozhenie",
      kind: "choice",
      outcome: "отличать уверенность от предположения",
      prompt:
        "Две строки: «I'm sure it's in the cabinet» и «It might be in the cabinet». Чем они различаются?",
      options: [
        { text: "Первая о сегодняшнем дне, вторая о завтрашнем." },
        { text: "В первой человек уверен, во второй только предполагает.", correct: true },
        { text: "Первая о вещи, вторая о месте." },
      ],
      hint: "Проверь по каждой строке: человек знает наверняка или только предполагает?",
      why:
        "В первой уверен, во второй предполагает. Слово might оставляет место сомнению, " +
        "а оборот I'm sure его снимает.",
    },
    {
      id: "ch2-na-sluh-chto-obeshchayut",
      kind: "short",
      outcome: "слышать в прогнозе, что обещают наверняка, а что нет",
      zvuk: "Tomorrow will be cold, and it might snow in the evening.",
      prompt: "Послушай прогноз. Что обещают наверняка? Ответь одним английским словом.",
      answer: "cold",
      accept: ["Cold"],
      hint: "Наверняка обещают то, при чём стоит will.",
      why:
        "Tomorrow will be cold. О снеге сказано словом might — это предположение, а не " +
        "обещание.",
    },

    // ---- Умения части ----
    {
      id: "ch2-na-sluh-kto-chto-sobiraetsya",
      kind: "short",
      outcome: "слышать в разговоре, кто что собирается делать",
      zvuk: "Are you going to swim? — No, I'm going to read.",
      prompt: "Послушай. Что собирается делать тот, кто отвечает? Ответь одним английским словом.",
      answer: "read",
      accept: ["Read"],
      hint: "Ответ звучит во второй реплике.",
      why: "No, I'm going to read. Первая реплика о плавании — это вопрос, а не ответ.",
    },
    {
      id: "ch2-na-sluh-chto-naznacheno",
      kind: "short",
      outcome: "слышать в записи, что и когда назначено",
      zvuk: "Are you free on Monday? — No, I'm playing football at four.",
      prompt: "Послушай. Чем занят человек в ответе? Ответь одним английским словом.",
      answer: "football",
      accept: ["Football"],
      hint: "В первой реплике назван день, а спрашивают о том, что во второй.",
      why: "No, I'm playing football at four. Понедельник и четыре — это день и час, а занятие названо одно.",
    },
  ],
};

// ===========================================================================
// Часть 3 — модули 14–21: какой, насколько, сколько и чей.
// ===========================================================================
export const rabotaKakoyISkolko: Quiz = {
  ask: 10,
  passRatio: 0.8,
  questions: [
    // ---- Больше и меньше ----
    {
      id: "ch3-sravnit-dve-veshchi",
      kind: "short",
      outcome: "сравнивать две вещи: My flat is smaller than yours",
      prompt: "Скажи по-английски, что твоя комната теплее этой. Начни с My room.",
      answer: "My room is warmer than this one.",
      accept: [
        "My room is warmer than this one",
        "My room is warmer than this room.",
        "My room is warmer than this room",
      ],
      hint: "После формы сравнения ставят слово, которое вводит вторую вещь.",
      why: "My room is warmer than this one. Вторую вещь вводит than, без него сравнения нет.",
    },
    {
      id: "ch3-luchshe-i-huzhe",
      kind: "gap",
      outcome: "говорить better и worse там, где нет окончания -er",
      // Первая редакция брала ту же погоду, что и экзамен ступени. Взята другая
      // вещь и обратное слово: там worse, здесь better.
      prompt: "Второй снимок вышел лучше первого. Допиши недостающее слово.",
      before: "The second photo is ",
      after: " than the first one.",
      answer: "better",
      hint: "У этого слова форма сравнения своя, окончания -er она не берёт.",
      why: "The second photo is better than the first one. Формы gooder не бывает: форма сравнения у good своя.",
    },
    {
      id: "ch3-obyavlenie-chto-deshevle",
      kind: "short",
      outcome: "находить в объявлении, что дешевле и что больше",
      prompt:
        "В объявлении строка: «The leather bag is 9 000 tenge, and the wool one is 6 000.» Из чего сделана сумка подешевле? Ответь одним английским словом.",
      answer: "wool",
      accept: ["Wool", "the wool one", "wool one"],
      hint: "Сравни числа и посмотри, при какой вещи меньшее.",
      why: "The wool one is 6 000. Кожаная сумка дороже, шерстяная дешевле.",
    },

    // ---- Самый ----
    {
      id: "ch3-vydelit-odno-iz-mnogih",
      kind: "gap",
      outcome: "выделять одно из многих: the biggest animal",
      prompt: "Это самая старая улица в городе. Допиши форму выделения целиком.",
      before: "It is the ",
      after: " street in the city.",
      answer: "oldest",
      hint: "Перед формой уже стоит the, значит нужна сама форма.",
      why: "It is the oldest street in the city. Короткое слово берёт окончание -est.",
    },
    {
      id: "ch3-samyy-cherez-most",
      kind: "gap",
      outcome: "выделять длинным прилагательным: the most beautiful",
      prompt: "Это самая дорогая вещь в магазине. Допиши недостающее слово.",
      before: "It is the ",
      after: " expensive thing in the shop.",
      answer: "most",
      hint: "Длинное слово окончания не берёт, ему нужен помощник.",
      why: "It is the most expensive thing in the shop. Формы expensivest не бывает.",
    },
    {
      id: "ch3-na-sluh-chto-nazvali-samym",
      kind: "short",
      outcome: "слышать в разговоре, что назвали самым",
      zvuk: "Which room is the quietest? — The one near the garden.",
      prompt: "Послушай. Где самая тихая комната? Ответь одним английским словом.",
      answer: "garden",
      accept: ["Garden", "near the garden", "the garden"],
      hint: "Место названо во второй реплике.",
      why: "The one near the garden. Первая реплика — вопрос, ответ звучит во второй.",
    },

    // ---- Очень и слишком ----
    {
      id: "ch3-slishkom-dlya-kogo",
      kind: "short",
      outcome: "называть, кому слишком: too small for me",
      prompt: "Куртка мала именно тебе. Запиши строку целиком, начни с The jacket.",
      answer: "The jacket is too small for me.",
      accept: ["The jacket is too small for me"],
      hint: "Того, кому слишком, вводит предлог.",
      why: "The jacket is too small for me. Без for строка не говорит, кому именно мала куртка.",
    },
    {
      id: "ch3-pismo-chto-ne-podoshlo",
      kind: "short",
      outcome: "находить в письме, что подошло, а что нет",
      prompt:
        "В письме строка: «The shirt was quite cheap, but the shoes were too big.» Что не подошло? Ответь одним английским словом.",
      answer: "shoes",
      accept: ["Shoes", "the shoes"],
      hint: "Не подошло то, при чём стоит too.",
      why: "The shoes were too big. Слово quite говорит о мере, а помеху называет too.",
    },

    // ---- Как это делается ----
    {
      id: "ch3-narechie-iz-prilagatelnogo",
      kind: "gap",
      outcome: "собирать наречие из прилагательного: easy — easily",
      prompt: "Он говорит понятно. Допиши слово целиком.",
      before: "He speaks ",
      after: ".",
      answer: "clearly",
      hint: "Прилагательное здесь — clear.",
      why: "He speaks clearly. К прилагательному прибавляют -ly, и выходит наречие.",
    },
    {
      id: "ch3-svoi-formy-narechiy",
      kind: "gap",
      outcome: "говорить well, fast и hard там, где нет окончания -ly",
      prompt: "Она играет хорошо. Допиши слово целиком.",
      before: "She plays ",
      after: ".",
      answer: "well",
      hint: "Формы goodly не бывает.",
      why: "She plays well. У good наречие своё — well.",
    },
    {
      id: "ch3-na-sluh-kak-proshlo",
      kind: "order",
      outcome: "слышать в разговоре, как что-то прошло",
      zvuk: "The band played loudly at the concert.",
      prompt: "Послушай запись и собери из карточек то, что в ней сказано.",
      items: ["at the concert", "loudly", "The band", "played"],
      answer: [2, 3, 1, 0],
      hint: "Слово о том, КАК идёт дело, стоит сразу после самого дела.",
      why: "The band played loudly at the concert. Наречие встаёт после глагола, а место — в самый конец.",
    },

    // ---- Сколько чего ----
    {
      id: "ch3-much-ili-many",
      kind: "gap",
      outcome: "выбирать much или many в отрицании: not much time, not many tickets",
      prompt: "Билетов осталось мало. Допиши недостающее слово.",
      before: "There aren't ",
      after: " tickets left.",
      answer: "many",
      hint: "Билеты считают поштучно.",
      why: "There aren't many tickets left. Билеты считают поштучно, и при них стоит many. Слово much идёт с тем, что поштучно не считают.",
    },
    {
      id: "ch3-hvatit-li",
      kind: "gap",
      outcome: "говорить, хватает ли: enough bread, not enough tickets",
      prompt: "Хлеба на всех хватает. Допиши недостающее слово.",
      before: "There is ",
      after: " bread for everybody.",
      answer: "enough",
      hint: "Слово значит «столько, сколько нужно».",
      why: "There is enough bread for everybody. Слово enough встаёт перед названием вещи.",
    },
    {
      id: "ch3-na-sluh-chego-ne-hvataet",
      kind: "short",
      outcome: "слышать в разговоре, чего не хватает",
      zvuk: "Do we have enough rice? — No, and we need oil too.",
      prompt: "Послушай. Чего ещё не хватает, кроме риса? Ответь одним английским словом.",
      answer: "oil",
      accept: ["Oil"],
      hint: "Ответ звучит после слова and.",
      why: "We need oil too. Рис назван в вопросе, а вторая нехватка — масло.",
    },

    // ---- Кто-то и что-то ----
    {
      id: "ch3-otricanie-cherez-any",
      kind: "gap",
      outcome: "строить отрицание через any-: I didn't see anyone",
      prompt: "В коридоре ты никого не видел. Допиши недостающее слово.",
      before: "I didn't see ",
      after: " in the hall.",
      answer: "anyone",
      accept: ["anybody"],
      hint: "Отрицание уже стоит при глаголе, второго не нужно.",
      why: "I didn't see anyone in the hall. Отрицание уже стоит при глаголе, второго не нужно. Годится и anybody.",
    },
    {
      id: "ch3-utochnenie-posle-mestoimeniya",
      kind: "short",
      outcome: "ставить уточнение после местоимения: something cold, something else",
      prompt: "Скажи по-английски, что хочешь чего-нибудь горячего. Начни с I want.",
      answer: "I want something hot.",
      accept: ["I want something hot"],
      hint: "Уточнение идёт после местоимения, а не перед ним.",
      why: "I want something hot. По-русски «горячего» стоит впереди, по-английски — позади.",
    },

    // ---- Этот, тот и другой ----
    {
      id: "ch3-eti-i-te",
      kind: "gap",
      outcome: "показывать на несколько вещей: these tights, those shorts",
      prompt: "Шорты лежат далеко от тебя. Допиши недостающее слово.",
      before: "",
      after: " shorts are cheap.",
      answer: "Those",
      accept: ["those"],
      hint: "Вещей несколько, и они не рядом.",
      why: "Those shorts are cheap. Про несколько вещей вдали говорят those, вблизи — these.",
    },
    {
      id: "ch3-obyavlenie-skolko-stoit-drugaya",
      kind: "short",
      outcome: "находить в объявлении, что продают и почём",
      prompt:
        "В объявлении строка: «We have two drums. This one is 30 000 tenge, and the other one is 45 000.» Сколько стоит второй? Ответь числом.",
      answer: "45000",
      accept: ["45 000", "45000 tenge", "45 000 tenge", "45000 тенге", "45 000 тенге"],
      hint: "Второй назван оборотом the other one.",
      why: "45 000. Оборот the other one говорит о втором из двух, и цена стоит рядом с ним.",
    },

    // ---- Свой и сам ----
    {
      id: "ch3-chya-veshch",
      kind: "gap",
      outcome: "назвать хозяина любой вещи: his, hers, ours, theirs",
      prompt: "Ключ принадлежит ей. Допиши недостающее слово.",
      before: "The key is ",
      after: ".",
      answer: "hers",
      hint: "После be ставят форму, за которой вещь уже не повторяют.",
      why: "The key is hers. Форма her требует вещи следом, а hers стоит сама по себе.",
    },
    {
      id: "ch3-na-sluh-chya-veshch",
      kind: "short",
      outcome: "слышать в разговоре, чья вещь",
      zvuk: "Whose scarf is this? — I think it's Dana's.",
      prompt: "Послушай. Чей шарф? Ответь одним английским именем.",
      answer: "Dana",
      accept: ["Dana's", "dana", "Dana's."],
      hint: "Имя звучит во второй реплике.",
      why: "I think it's Dana's. Первая реплика — вопрос, а хозяин назван во второй.",
    },
  ],
};

// ===========================================================================
// Часть 4 — модули 22–31: опыт, правила и чужие слова.
// ===========================================================================
export const rabotaOpytIPravila: Quiz = {
  ask: 10,
  passRatio: 0.8,
  questions: [
    // ---- Я это делал ----
    {
      id: "ch4-tretya-forma-posle-have",
      kind: "short",
      outcome: "строить третью форму глагола: visited, seen, been",
      prompt: "Ученик написал: I have ate goat cheese. Запиши строку без ошибки.",
      answer: "I have eaten goat cheese.",
      accept: ["I have eaten goat cheese"],
      hint: "После have стоит не вторая форма глагола, а третья.",
      why: "I have eaten goat cheese. Ate — вторая форма, а после have нужна eaten.",
    },
    {
      id: "ch4-sprosit-ob-opyte",
      kind: "short",
      outcome: "спросить об опыте: Have you ever been to Astana?",
      // Первая редакция спрашивала про остров — и совпадала с заданием 5 урока
      // «Я там был» дословно. Взят другой опыт, слово curry — карточка модуля.
      prompt: "Спроси собеседника, пробовал ли он когда-нибудь острый карри. Запиши вопрос целиком.",
      answer: "Have you ever tried hot curry?",
      accept: ["Have you ever tried hot curry"],
      hint: "Слово о жизненном опыте стоит между you и третьей формой.",
      why: "Have you ever tried hot curry? Слово ever и делает вопрос вопросом об опыте.",
    },

    // ---- Уже и ещё нет ----
    {
      id: "ch4-eshchyo-ne-sdelano",
      kind: "gap",
      outcome: "сообщить, что дело ещё не сделано: I haven't packed yet",
      prompt: "Ужин ещё не готов. Допиши недостающее слово.",
      before: "I haven't cooked dinner ",
      after: ".",
      answer: "yet",
      hint: "Это слово стоит в самом конце строки.",
      why: "I haven't cooked dinner yet. Слово yet идёт в конец и говорит: дело ещё впереди.",
    },
    {
      id: "ch4-spisok-chto-ostalos",
      kind: "short",
      outcome: "находить в списке дел, что сделано, а что нет",
      prompt:
        "В записке строка: «I have already prepared the food, but I haven't washed the plates yet.» Что ещё не вымыто? Ответь одним английским словом.",
      answer: "plates",
      accept: ["Plates", "the plates"],
      hint: "Оставшееся стоит при отрицании.",
      why: "I haven't washed the plates yet. Еда готова, а тарелки ещё не вымыты.",
    },

    // ---- Как долго ----
    {
      id: "ch4-skolko-dlitsya",
      kind: "gap",
      outcome: "сказать, сколько времени длится дело: I have studied English for two years",
      prompt: "Дело идёт уже три месяца и не кончилось. Допиши недостающее слово.",
      before: "I have worked here ",
      after: " three months.",
      answer: "for",
      hint: "Перед отрезком времени стоит короткое слово.",
      why: "I have worked here for three months. Слово for вводит отрезок, а не точку во времени.",
    },
    {
      id: "ch4-sprosit-o-dlitelnosti",
      kind: "short",
      outcome: "спросить о длительности: How long have you studied English?",
      prompt: "Спроси, сколько времени собеседник живёт в этом городе. Запиши вопрос целиком.",
      answer: "How long have you lived in this city?",
      accept: ["How long have you lived in this city"],
      hint: "Вопрос о сроке открывают два слова.",
      why: "How long have you lived in this city? Оборот how long и спрашивает о сроке.",
    },

    // ---- Надо и не надо ----
    {
      id: "ch4-chuzhaya-obyazannost",
      kind: "gap",
      outcome: "сказать о чужой обязанности: He has to show his passport",
      prompt: "Форму носит не ты, а сослуживец. Допиши недостающее слово.",
      before: "My colleague ",
      after: " to wear a uniform.",
      answer: "has",
      hint: "Человек один, и форма при нём своя.",
      why: "My colleague has to wear a uniform. Когда речь об одном человеке — he, she, my colleague — стоит has.",
    },
    {
      id: "ch4-na-sluh-chto-neobyazatelno",
      kind: "short",
      outcome: "слышать в разговоре, что нельзя и что необязательно",
      zvuk: "You mustn't smoke here, but you don't have to buy a ticket.",
      prompt: "Послушай. Что покупать необязательно? Ответь одним английским словом.",
      answer: "ticket",
      accept: ["Ticket", "buy a ticket", "a ticket"],
      hint: "Необязательное стоит при обороте don't have to.",
      why:
        "You don't have to buy a ticket. Курение здесь запрещено — это mustn't, а билет " +
        "просто не нужен.",
    },

    // ---- Стоит и не стоит ----
    {
      id: "ch4-sovet-ne-delat",
      kind: "short",
      outcome: "советовать не делать: You shouldn't eat that",
      prompt: "Посоветуй собеседнику не ходить пешком в темноте. Запиши строку целиком.",
      answer: "You shouldn't walk in the dark.",
      accept: [
        "You shouldn't walk in the dark",
        "You should not walk in the dark.",
        "You should not walk in the dark",
      ],
      hint: "Совет не делать строят одним словом с отрицанием.",
      why: "You shouldn't walk in the dark. Совет не делать строят отрицанием при should. Полная запись — you should not.",
    },
    {
      id: "ch4-sovety-chto-stoit",
      kind: "short",
      outcome: "находить в советах приезжему, что стоит делать, а что нет",
      prompt:
        "В письме строка: «You should take the tram, and you shouldn't drive in the centre.» Чем советуют ехать? Ответь одним английским словом.",
      answer: "tram",
      accept: ["Tram", "the tram", "by tram"],
      hint: "Один совет зовёт сделать, другой отговаривает.",
      why: "You should take the tram. Вторая часть строки, наоборот, отговаривает.",
    },

    // ---- Раньше мог ----
    {
      id: "ch4-chego-ne-umel",
      kind: "gap",
      outcome: "говорить, чего человек не умел: I couldn't ride a bike",
      prompt: "Речь о себе в шесть лет: плавать тогда не получалось. Допиши недостающее слово.",
      before: "At six I ",
      after: " swim.",
      answer: "couldn't",
      accept: ["could not"],
      hint: "Об умении в прошлом говорят одним словом, и здесь оно с отрицанием.",
      why: "At six I couldn't swim. Об умении в прошлом говорят словом could, и отрицание встаёт при нём. Полная запись — I could not swim.",
    },
    {
      id: "ch4-na-sluh-chto-umel-v-detstve",
      kind: "short",
      outcome: "слышать в разговоре, что человек умел в детстве",
      zvuk: "Could you play chess at seven? — No, but I could draw well.",
      prompt: "Послушай. Что умел в семь лет тот, кто отвечает? Ответь одним английским словом.",
      answer: "draw",
      accept: ["Draw", "drawing"],
      hint: "Ответ звучит во второй реплике, после слова but.",
      why: "No, but I could draw well. Шахматы названы в вопросе, а умение — рисование.",
    },

    // ---- Вежливо ----
    {
      id: "ch4-vezhlivaya-prosba-celikom",
      kind: "short",
      outcome: "вежливо просить: Could you help me?",
      prompt: "Вежливо попроси незнакомого человека повторить. Запиши вопрос целиком.",
      answer: "Could you repeat that?",
      accept: [
        "Could you repeat that",
        "Could you repeat it?",
        "Could you repeat it",
        "Could you repeat that, please?",
        "Could you repeat that please?",
        "Could you repeat that, please",
        "Could you repeat it, please?",
        "Could you repeat it please?",
        "Excuse me, could you repeat that?",
        "Excuse me, could you repeat that",
      ],
      hint: "Вежливую просьбу открывает не can.",
      why:
        "Could you repeat that? Слово could звучит мягче, чем can, и потому годится " +
        "с незнакомым человеком. Годится и с please в конце, и с Excuse me впереди.",
    },
    {
      id: "ch4-chto-luchshe",
      kind: "gap",
      outcome: "называть, что лучше: I'd prefer Sunday",
      prompt: "Из двух дней тебе больше подходит суббота. Допиши недостающее слово.",
      before: "I'd ",
      after: " Saturday.",
      answer: "prefer",
      hint: "Слово говорит не «хочу», а «мне подходит больше».",
      why: "I'd prefer Saturday. Оборот I'd prefer называет то, что подходит больше другого.",
    },

    // ---- Если ----
    {
      id: "ch4-uslovie-s-obeshchaniem",
      kind: "gap",
      outcome: "ставить условие с обещанием: If you come, I'll show you the city",
      prompt: "Если Дана позвонит, ты ответишь. Допиши глагол целиком.",
      before: "If Dana ",
      after: ", I'll answer.",
      answer: "calls",
      hint: "После if будущего не ставят.",
      why:
        "If Dana calls, I'll answer. В части с условием стоит обычная форма настоящего, " +
        "а обещание — в главной части.",
    },
    {
      id: "ch4-pamyatka-chto-sluchitsya",
      kind: "choice",
      outcome: "находить в письме, что случится при каком условии",
      prompt:
        "В памятке строка: «If you lose the key, you can take another key at the office.» Что она разрешает?",
      options: [
        { text: "Терять ключ." },
        { text: "Взять другой ключ в конторе, если этот потерян.", correct: true },
        { text: "Уйти со своим ключом." },
      ],
      hint: "Смотри главную часть — ту, где стоит can.",
      why: "Взять другой ключ в конторе. Слово can стоит именно при этом действии, а условие — в части с if.",
    },

    // ---- Который ----
    {
      id: "ch4-opisat-veshch",
      kind: "gap",
      outcome: "описывать вещь: the bag which is on the table",
      prompt: "Речь о вещи, а не о человеке. Допиши недостающее слово.",
      before: "This is the album ",
      after: " I bought in Almaty.",
      answer: "which",
      accept: ["that"],
      hint: "О человеке говорят who, а о вещи другое слово.",
      why: "This is the album which I bought in Almaty. Слово who идёт к человеку, а к вещи — which. Годится и that.",
    },
    {
      id: "ch4-na-sluh-o-kom-rech",
      kind: "short",
      outcome: "слышать в разговоре, о каком человеке или вещи речь",
      zvuk: "Which one is Alim? — The man who is holding the guitar.",
      prompt: "Послушай. Что держит в руках Алим? Ответь одним английским словом.",
      answer: "guitar",
      accept: ["Guitar", "the guitar", "a guitar"],
      hint: "Описание держится на слове who.",
      why: "The man who is holding the guitar. Описание держится на слове who, а вещь — гитара.",
    },

    // ---- Он сказал, что ----
    {
      id: "ch4-komu-skazali",
      kind: "gap",
      outcome: "называть, кому сказали: She told me that the shop is closed",
      prompt: "В строке назван тот, кому сказали, — me. Допиши глагол.",
      before: "She ",
      after: " me that the office is closed.",
      answer: "told",
      hint: "Один из двух глаголов требует того, кому сказали.",
      why:
        "She told me that the office is closed. Глагол said того, кому сказали, при себе не " +
        "держит: с ним вышло бы She said that…",
    },
    {
      id: "ch4-pereprosit",
      kind: "gap",
      outcome: "переспрашивать: It's fantastic, isn't it?",
      prompt: "Ты ждёшь согласия собеседника. Допиши недостающее слово переспроса.",
      before: "The film was great, ",
      after: " it?",
      answer: "wasn't",
      hint: "После утверждения переспрос идёт с отрицанием.",
      why:
        "The film was great, wasn't it? В первой части стоит was, значит и переспрос " +
        "строится от was.",
    },
  ],
};
