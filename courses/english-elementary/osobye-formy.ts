import type { Module } from "@/lib/content/types";

/**
 * Модуль 3 курса «Английский · Elementary»: особые формы.
 *
 * Программа: docs/programma-english-elementary.md, модуль 3 — «рассказывать о
 * делах глаголами, которые не берут -ed»; грамматика: неправильные глаголы,
 * первый десяток.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A1, PAST past simple, «FORM: AFFIRMATIVE» — «Can
 *    use the affirmative form with a limited range of regular and IRREGULAR
 *    verbs». Особые формы источник называет прямо и ставит их ступенью НИЖЕ
 *    нашей, а примеры даёт наши же: «Every day at college I went to class at 9
 *    am», «I met her about ten years ago», «Every time I went to Hendon Park, I
 *    saw so many people there». Три из десяти глаголов модуля стоят в самих
 *    примерах источника.
 *
 * 2. English Grammar Profile, A2, PAST past simple, «FORM: AFFIRMATIVE» — «Can
 *    use the affirmative form with an increasing range of verbs», примеры
 *    источника: «I forgot to tell you some details about tomorrow evening», «I
 *    spent about £35 on all those clothes», «my favourite team won, it was
 *    great». Все три — особые формы, то есть на нашей ступени круг таких
 *    глаголов растёт.
 *
 * 3. Cambridge, руководство для младших ступеней, список «что нового на A1
 *    Movers»: «Past simple regular and irregular forms», пример источника — «We
 *    went to the park yesterday». Это ровно первый урок модуля.
 *
 * 4. Описания Совета Европы, с. 67, шкала Creative writing, графа A2: «Can give
 *    very short, basic descriptions of events, past activities and personal
 *    experiences» — отсюда размер рассказа в уроке 5 и сообщения в уроке 8.
 *    Первая редакция брала с. 63, Sustained monologue: цитата верна, но шкала
 *    устная, а оба урока письменные. Нашёл методист.
 *
 * ТЕРМИН — «НЕПРАВИЛЬНЫЙ ГЛАГОЛ», И ЭТО НЕ МЕЛОЧЬ.
 *
 * Первая редакция звала их «особыми формами» — своим ярлыком вместо настоящего
 * термина. Это повторение ошибки модуля 11 ступени Beginner, где прилагательное
 * звали «признаком» и владелец споткнулся первым же уроком. Хуже: модуль 2
 * говорит «у глагола для этого есть СВОЯ ФОРМА: к нему прибавляется -ed», и то
 * же выражение здесь означало бы обратное.
 *
 * Теперь термин вводится в уроке 1 прямо («Такие глаголы называются
 * неправильными») и дальше работает во всех уроках, заданиях и итогах. Название
 * модуля осталось прежним — оно взято из программы ступени, принятой владельцем.
 * Найдено методистом.
 *
 * ПОЧЕМУ ДЕСЯТЬ ГЛАГОЛОВ, А НЕ БОЛЬШЕ.
 *
 * Число взято из программы ступени («неправильные глаголы, первый десяток») и
 * держится нарочно: особая форма запоминается только применением, а десять форм
 * — это уже сорок заданий модуля. Остальные приходят в модулях 4 и 5, где к ним
 * добавляются отрицание и вопрос.
 *
 * Десять: go — went, come — came, see — saw, meet — met, have — had, get — got,
 * take — took, eat — ate, buy — bought, write — wrote.
 *
 * 5. СЛОВАРЬ МОДУЛЯ. Сорок карточек, из них двадцать несут слово,
 *    которого на прошлой ступени не было. Норма ступени — не меньше тридцати
 *    карточек и не меньше пятнадцати новых (CLAUDE.md, «Объём словаря и число
 *    модулей»), считает `npm run kontrol`.
 *
 *    ОГОВОРКА, БЕЗ КОТОРОЙ СЧЁТ ВВОДИТ В ЗАБЛУЖДЕНИЕ. Все десять глаголов
 *    модуля Oxford 3000 помечает A1, и заменить их нечем: частотные особые
 *    формы — это и есть go, have, see, get. Новизну ступени несёт не глагол, а
 *    то, о чём с ним говорят: abroad, platform, passenger, coast, guest,
 *    colleague, crowd, guide, gift, invitation, prize, headache, plate, sauce,
 *    sale, diary, view, ship, stamp, poster — все двадцать стоят в Oxford 3000
 *    с пометой A2.
 *
 *    ОДНО РАСХОЖДЕНИЕ ИСТОЧНИКОВ, и его нашёл методист: `abroad` в словнике A2
 *    Key отсутствует, он стоит в словнике B1 Preliminary. Oxford 3000 при этом
 *    даёт ему A2. Слово оставлено по помете Oxford, но первая редакция шапки
 *    утверждала обратное — «все есть в словнике A2 Key», — и это было неверно.
 *
 *    СЛОВА-ПОДПОРКИ — те, что стоят в примерах и текстах, а своей карточки не
 *    имеют: sea, letter, box, park, tea, bus, train, fast, hotel, fish, photos.
 *    Все A1 по Oxford 3000. Список дописан 20 августа по разбору методиста:
 *    первая редакция объявила шесть слов из одиннадцати.
 *
 *    РЕШЕНИЕ ВЛАДЕЛЬЦА от 21 августа 2026. Чтение `ate`: в `ipa-en-uk.txt` этой
 *    формы нет вовсе, `wikipron-en-uk.tsv` даёт две записи — `e ɪ t` и `ɛ t`.
 *    Владелец как преподаватель выбрал /eɪt/. Вопрос закрыт.
 *
 *    ТАМ ЖЕ ЗАКРЫТ ВОПРОС ПО `abroad`: расхождение источников владелец видел и
 *    слово одобрил. Оставлено по помете Oxford 3000.
 *
 *    РЕШЕНИЯ ПРЕПОДАВАТЕЛЯ, которых в источниках нет: `colleague`
 *    переведён «сослуживец, коллега» двумя словами, потому что первое понятнее,
 *    а второе привычнее; `sale` сужен до «распродажа», иначе он сливается с
 *    `shop`.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ОТРИЦАНИЯ И ВОПРОСА (`I didn't go`, `Did you go?`). Программа отдаёт их
 *   модулям 4 и 5. Здесь только утверждение — как и в модуле 2.
 * — ФОРМЫ ДЛЯ ПРИЧАСТИЯ (`gone`, `seen`, `taken`). Третья форма нужна только
 *   Present Perfect, а он приходит в модуле 22. Показать её здесь значит дать
 *   ученику форму, которой он не сможет воспользоваться двадцать модулей.
 * — ПОЛНОГО СПИСКА НЕПРАВИЛЬНЫХ ГЛАГОЛОВ. Список из двухсот форм не учит
 *   ничему: он не помещается в память и не связан ни с одним делом ученика.
 *
 * ВОЗВРАЩЕНИЕ. Три задания из пройденного: два в уроке 3 и одно в уроке 5, из
 * модулей 1 и 2. Берутся ссылкой (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "osobye-formy",
  title: "Неправильные глаголы",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, PAST past simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with a limited range of regular and irregular verbs», примеры источника — " +
        "«Every day at college I went to class at 9 am», «I met her about ten years " +
        "ago». Особые формы источник называет прямо. " +
        "A1, PAST past simple, «USE: EVERYDAY EVENTS AND STATES»: «Can use the past " +
        "simple to talk about everyday events or states», пример источника — «Every " +
        "time I went to Hendon Park, I saw so many people there»: в одной строке две " +
        "особые формы из наших десяти. " +
        "A2, PAST past simple, «FORM: AFFIRMATIVE»: «Can use the affirmative form " +
        "with an increasing range of verbs», примеры источника — «I forgot to tell " +
        "you some details about tomorrow evening», «I spent about £35 on all those " +
        "clothes», «my favourite team won, it was great»; все три примера — особые " +
        "формы, то есть круг их на нашей ступени растёт",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge, руководство для младших ступеней (Pre A1 Starters — A2 Flyers)",
      section:
        "список «что нового на A1 Movers»: «Past simple regular and irregular " +
        "forms», пример источника — «We went to the park yesterday». Это первый " +
        "урок модуля дословно",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОКИ 5 И 8, РАССКАЗ И ПИСЬМО. с. 67, шкала Creative writing, графа A2: " +
        "«Can give very short, basic descriptions of events, past activities and " +
        "personal experiences». Первая редакция ссылалась на с. 63, Sustained " +
        "monologue — цитата верна, но это шкала устной речи, а оба урока письменные. " +
        "Поправлено по разбору методиста. " +
        "УРОК 6, ЧТЕНИЕ. с. 55, Reading correspondence, A2: «Can understand short, " +
        "simple personal letters». " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority (e.g. " +
        "very basic personal and family information, shopping, local geography, " +
        "employment), provided people articulate clearly and slowly» — отсюда " +
        "pace: \"slow\". " +
        "Опора на с. 83, Correspondence, снята: там пять описаний, и ни одно не о " +
        "рассказе про поездку. Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile — опора урока 5",
      section:
        "A2, ADVERBS adverbs and adverb phrases: types and meanings, «USE: " +
        "SEQUENCING»: «Can use a limited range of adverbs and adverb phrases " +
        "('first', 'then', 'after that') to order segments of discourse». Урок 5 " +
        "и его итог стоят на словах порядка First и Then; в первой редакции опора " +
        "названа не была, дописана по разбору методиста",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "глаголы модуля, все A1: go, come, see, meet, have, get, take, eat, buy, " +
        "write. Заменить их нечем: частотные особые формы — это и есть они. " +
        "Новизну ступени несёт окружение, и все двадцать слов стоят с пометой A2: " +
        "abroad, platform, passenger, coast, guest, colleague, crowd, guide, gift, " +
        "invitation, prize, headache, plate, sauce, sale, diary, view, ship, stamp, " +
        "poster. " +
        "ОГОВОРКА ПО СЛОВУ abroad: Oxford 3000 даёт ему A2 («abroad adv. A2»), а в " +
        "словнике A2 Key его нет — оно стоит в словнике B1 Preliminary. Проверено " +
        "обоими разборами, соседние строки алфавита целы. Слово оставлено по помете " +
        "Oxford; расхождение названо здесь, а не замолчано. Найдено методистом. " +
        "Подпорки в примерах и текстах: sea, letter, box, park, tea, bus, train, " +
        "fast, hotel, fish, photos — тоже A1",
      license: "внутреннее использование",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "особые формы записаны по словарю, с условностями курса (r вместо ɹ, g " +
        "вместо ɡ, e вместо ɛ, ə вместо ɐ, слоговой согласный без ə): went /went/, " +
        "came /keɪm/, saw /sɔː/, met /met/, had /hæd/, got /gɒt/, took /tʊk/, " +
        "bought /bɔːt/, wrote /rəʊt/. " +
        "Форма ate в ipa-en-uk отсутствует, взята из wikipron-en-uk.tsv: e ɪ t, то " +
        "есть /eɪt/. В британской речи слышно и /et/ — выбор записан как решение " +
        "преподавателя в шапке модуля",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "рассказывать о поездке неправильными глаголами: I went to Astana",
    "рассказывать о встрече: I saw my friend, I met my colleague",
    "говорить о том, что было и что взял: I had a headache, I took a gift",
    "рассказывать о еде, покупках и записях: I ate fish, I wrote in my diary",
    "собирать рассказ о поездке из неправильных глаголов и оборотов времени",
    "понимать короткое сообщение о поездке",
    "слышать в записи, куда человек ездил и что делал",
    "проверять своё сообщение о поездке: форма неправильного глагола, оборот времени, порядок слов",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "kuda-ezdil",
      title: "Куда ездил: I went to Astana",
      estimatedMinutes: 15,
      outcome: "рассказывать о поездке неправильными глаголами: I went to Astana",

      blocks: [
        {
          id: "zachem-osobye",
          kind: "explain",
          text: [
            "Вчера я работал — это worked: к глаголу прибавилось окончание -ed.",
            "Но у части глаголов окончания нет вовсе. Для прошлого у них другое слово: go — went.",
            "Такие глаголы называются неправильными.",
            "Правильный глагол берёт -ed, неправильный — свою форму, и её не вывести по правилу.",
            "Неправильных глаголов немного, зато они нужны чаще других: go, come, see, have.",
          ],
        },
        {
          id: "go-i-come",
          kind: "table",
          caption: "Два неправильных глагола",
          zvuchat: ["go", "went", "come", "came"],
          head: ["О настоящем", "О прошлом"],
          rows: [
            ["go", "went"],
            ["come", "came"],
          ],
        },
        {
          id: "forma-odna-na-vseh",
          kind: "explain",
          text: [
            "Форма для прошлого одна на всех: I went, he went, they went.",
            "По лицам она не меняется — как и форма с окончанием -ed.",
            "Вместо местоимения может стоять имя, и форма та же: my sister went, my parents came.",
          ],
        },
        {
          id: "ne-goed",
          kind: "note",
          tone: "mistake",
          text:
            "«I goed to Astana» — так не говорят.\n\nОкончание -ed к таким глаголам не " +
            "приставляют: у них уже есть своя форма.",
        },
        {
          id: "primer-poezdki",
          kind: "example",
          caption: "Поездка в Астану",
          zvuchat: [
            "Last week I went to Astana.",
            "My colleague came with me.",
            "The train was fast.",
          ],
          text:
            "Last week I went to Astana.\nMy colleague came with me.\nThe train was fast.",
          explain:
            "В первых двух строках неправильные глаголы, в третьей — was из первого модуля. " +
            "Рассказ о поездке так и устроен: дела неправильными глаголами, обстановка через was.",
        },
        {
          id: "slovar-dorogi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "go", translation: "ехать, идти", example: "I go to work.", hint: "/gəʊ/" },
            { term: "went", translation: "ездил, ходил", example: "I went to Astana.", hint: "/went/" },
            { term: "come", translation: "приходить, приезжать", example: "They come at seven.", hint: "/kʌm/" },
            { term: "came", translation: "пришёл, приехал", example: "My colleague came with me.", hint: "/keɪm/" },
            { term: "abroad", translation: "за границу, за границей", example: "Last year I went abroad.", hint: "/əˈbrɔːd/" },
            { term: "platform", translation: "перрон", example: "The platform was long.", hint: "/ˈplætfɔːm/" },
            { term: "passenger", translation: "пассажир", example: "The passengers were tired.", hint: "/ˈpæsɪndʒə/" },
            { term: "coast", translation: "морское побережье", example: "We went to the coast.", hint: "/kəʊst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-went",
          kind: "gap",
          prompt: "На прошлой неделе — поездка в Астану. Допиши форму глагола go для прошлого.",
          before: "Last week I ",
          after: " to Astana.",
          answer: "went",
          hint: "Окончание -ed этому глаголу не приставляют.",
          why: "Last week I went to Astana. У глагола go для прошлого своя форма — went.",
        },
        {
          id: "z2-vybrat-osobuyu",
          kind: "choice",
          prompt: "Друг приехал вчера. Выбери верную запись.",
          options: [
            { text: "My friend came yesterday.", correct: true },
            { text: "My friend comed yesterday." },
            { text: "My friend come yesterday." },
          ],
          hint: "Одна из трёх записей берёт форму для прошлого: остальные две её не берут.",
          why:
            "My friend came yesterday. Форма came и есть прошлое от come; comed не бывает, " +
            "а come без изменений говорит о настоящем.",
        },
        {
          id: "z3-otmetit-osobye",
          kind: "hottext",
          prompt: "Отметь формы, которые говорят о прошлом.",
          parts: [
            { text: "went", selectable: true, correct: true },
            { text: " · " },
            { text: "go", selectable: true },
            { text: " · " },
            { text: "came", selectable: true, correct: true },
            { text: " · " },
            { text: "come", selectable: true },
          ],
          hint: "О прошлом говорят те формы, которых нет в настоящем времени.",
          why: "О прошлом говорят went и came. Формы go и come — о настоящем.",
        },
        {
          id: "z4-sobrat-poezdku",
          kind: "order",
          prompt:
            "Собери предложение: поездка на побережье была на прошлой неделе. Оборот " +
            "времени поставь в конец.",
          items: ["to the coast", "I", "last week", "went"],
          answer: [1, 3, 0, 2],
          hint: "Сначала кто, потом дело, потом куда, и оборот времени в конце.",
          why:
            "I went to the coast last week. Порядок обычный: кто, дело, остальное, " +
            "а оборот времени встаёт в конец.",
        },
        {
          id: "z5-napisat-o-poezdke",
          kind: "short",
          prompt: "Расскажи о вчерашнем дне: поездка за границу. Запиши предложение целиком.",
          answer: "Yesterday I went abroad.",
          accept: ["I went abroad yesterday.", "Yesterday I went abroad"],
          hint: "После abroad ничего не ставят: ни to, ни at.",
          why:
            "Yesterday I went abroad. Оборот времени стоит в начале или в конце, а " +
            "abroad идёт сразу после глагола: ни to, ни at перед ним не ставят.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "videl-i-vstretil",
      title: "Видел и встретил: I saw, I met",
      estimatedMinutes: 15,
      outcome: "рассказывать о встрече: I saw my friend, I met my colleague",

      blocks: [
        {
          id: "zachem-videl",
          kind: "explain",
          text: [
            "Рассказ о поездке почти всегда о людях: кого видел, с кем встретился.",
            "Два глагола для этого тоже неправильные.",
            "See — это увидеть глазами: человек попал в поле зрения.",
            "Meet — встретиться с человеком: вы оказались вместе и заговорили.",
          ],
        },
        {
          id: "see-i-meet",
          kind: "table",
          caption: "Увидеть и встретиться",
          zvuchat: ["see", "saw", "meet", "met"],
          head: ["О настоящем", "О прошлом"],
          rows: [
            ["see", "saw"],
            ["meet", "met"],
          ],
        },
        {
          id: "raznica-see-meet",
          kind: "explain",
          text: [
            "I saw my colleague — сослуживец попался на глаза; разговора могло и не быть.",
            "I met my colleague — сошлись и заговорили: так говорят и о первом знакомстве.",
            "По-русски разница та же, что между «видел» и «встретился».",
          ],
        },
        {
          id: "ne-seed",
          kind: "note",
          tone: "mistake",
          text:
            "«I seed the guide» и «I meeted the guide» — так не говорят.\n\nУ обоих " +
            "глаголов форма для прошлого своя, и окончания -ed у них нет.",
        },
        {
          id: "primer-vstrechi",
          kind: "example",
          caption: "Встреча в толпе",
          zvuchat: [
            "I saw a big crowd.",
            "Then I met my guide.",
            "The guests were friendly.",
          ],
          text: "I saw a big crowd.\nThen I met my guide.\nThe guests were friendly.",
          explain:
            "Первая строка о том, что попало на глаза, вторая — о встрече, третья " +
            "описывает людей через were. Порядок обычный: кто, дело, остальное.",
        },
        {
          id: "slovar-vstrechi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "see", translation: "видеть", example: "I see my friend every day.", hint: "/siː/" },
            { term: "saw", translation: "видел", example: "I saw a big crowd.", hint: "/sɔː/" },
            { term: "meet", translation: "встречаться", example: "We meet at the station.", hint: "/miːt/" },
            { term: "met", translation: "встретился", example: "I met my guide.", hint: "/met/" },
            { term: "guest", translation: "гость", example: "The guests were friendly.", hint: "/gest/" },
            { term: "colleague", translation: "сослуживец, коллега", example: "My colleague came with me.", hint: "/ˈkɒliːg/" },
            { term: "crowd", translation: "толпа", example: "I saw a big crowd.", hint: "/kraʊd/" },
            { term: "guide", translation: "экскурсовод", example: "I met my guide.", hint: "/gaɪd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-saw",
          kind: "gap",
          prompt: "Вчера толпа попалась тебе на глаза. Допиши форму глагола see для прошлого.",
          before: "Yesterday I ",
          after: " a big crowd.",
          answer: "saw",
          hint: "Форма этого глагола начинается на ту же букву, а дальше не похожа вовсе.",
          why: "Yesterday I saw a big crowd. Прошлое от see — saw.",
        },
        {
          id: "z2-vybrat-see-meet",
          kind: "choice",
          prompt: "Знакомство с экскурсоводом случилось вчера. Выбери верную запись.",
          options: [
            { text: "I meeted my guide yesterday." },
            { text: "I met my guide yesterday.", correct: true },
            { text: "I meet my guide yesterday." },
          ],
          hint: "Одна запись приставляет окончание, другая оставляет форму настоящего.",
          why:
            "I met my guide yesterday. Форма met и есть прошлое от meet: meeted не " +
            "бывает, а meet со словом yesterday спорит сам с собой.",
        },
        {
          id: "z3-sopostavit-formy",
          kind: "match",
          prompt: "Соедини неправильный глагол с его формой для прошлого.",
          left: ["see", "meet", "come", "go"],
          right: ["met", "went", "saw", "came"],
          answer: [2, 0, 3, 1],
          hint: "Две формы из четырёх стоят в таблице прошлого урока.",
          why: "see — saw, meet — met, come — came, go — went.",
        },
        {
          id: "z4-otmetit-vstrechu",
          kind: "hottext",
          prompt: "Отметь слова, которыми называют людей.",
          parts: [
            { text: "guest", selectable: true, correct: true },
            { text: " · " },
            { text: "coast", selectable: true },
            { text: " · " },
            { text: "guide", selectable: true, correct: true },
            { text: " · " },
            { text: "platform", selectable: true },
          ],
          hint: "Два слова из четырёх называют места.",
          why: "Людей называют guest и guide. Слова coast и platform — о местах.",
        },
        {
          id: "z5-napisat-o-vstreche",
          kind: "short",
          prompt: "Расскажи о вчерашней встрече с сослуживцем. Запиши предложение целиком.",
          answer: "Yesterday I met my colleague.",
          accept: ["I met my colleague yesterday.", "Yesterday I met my colleague"],
          hint: "Встреча по уговору — это meet, а не see.",
          why:
            "Yesterday I met my colleague. Форма met, а оборот времени стоит " +
            "в начале или в конце.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "bylo-i-vzyal",
      title: "Было и взял: I had, I got, I took",
      estimatedMinutes: 15,
      outcome: "говорить о том, что было и что взял: I had a headache, I took a gift",
      vozvrat: [
        { iz: "vchera-ya-rabotal", zadanie: "z1-dopisat-ed" },
        { iz: "eto-bylo", zadanie: "z4-sobrat-gde-byl" },
      ],

      blocks: [
        {
          id: "zachem-imel",
          kind: "explain",
          text: [
            "Три глагола об одном и том же, но с разных сторон.",
            "Что у тебя было, что тебе дали, что оказалось у тебя в руках.",
            "Все три неправильные.",
            "Have — это «есть у меня»: I have a car — машина у меня есть.",
          ],
        },
        {
          id: "have-get-take",
          kind: "table",
          caption: "Три неправильных глагола",
          zvuchat: ["have", "had", "get", "got", "take", "took"],
          head: ["О настоящем", "О прошлом"],
          rows: [
            ["have", "had"],
            ["get", "got"],
            ["take", "took"],
          ],
        },
        {
          id: "chem-otlichayutsya",
          kind: "explain",
          text: [
            "I had a gift — подарок был у меня.",
            "I got a gift — подарок мне дали, он появился.",
            "I took a gift — я взял подарок и унёс.",
            "Разница та же, что между «у меня был», «мне дали» и «я взял».",
            "У take есть и второе применение: так говорят о поездке и о снимке — I take the bus, I take photos.",
          ],
        },
        {
          id: "haved-ne-byvaet",
          kind: "note",
          tone: "mistake",
          text:
            "«I haved a headache» — так не говорят.\n\nУ глагола have форма для прошлого " +
            "своя, и окончания -ed он не берёт.",
        },
        {
          id: "primer-podarka",
          kind: "example",
          caption: "Подарок и приглашение",
          zvuchat: [
            "I had a headache in the morning.",
            "Then I got an invitation.",
            "I took a gift and went to the party.",
          ],
          text:
            "I had a headache in the morning.\nThen I got an invitation.\nI took a gift and went to the party.",
          explain:
            "Три строки об одном дне: сначала состояние, потом полученное, потом дело. " +
            "В последней строке два дела сразу, и оба глагола неправильные: took и went.",
        },
        {
          id: "slovar-veshchey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "have", translation: "есть у меня", example: "I have a car.", hint: "/hæv/" },
            { term: "had", translation: "было у меня", example: "I had a headache.", hint: "/hæd/" },
            { term: "get", translation: "получать", example: "I get letters every day.", hint: "/get/" },
            { term: "got", translation: "получил", example: "I got an invitation.", hint: "/gɒt/" },
            { term: "take", translation: "брать", example: "I take the bus.", hint: "/teɪk/" },
            { term: "took", translation: "взял", example: "I took a gift.", hint: "/tʊk/" },
            { term: "gift", translation: "подарок", example: "I took a gift.", hint: "/gɪft/" },
            { term: "invitation", translation: "приглашение", example: "I got an invitation.", hint: "/ˌɪnvɪˈteɪʃn/" },
            { term: "prize", translation: "приз, награда", example: "My sister got a prize.", hint: "/praɪz/" },
            { term: "headache", translation: "головная боль", example: "I had a headache.", hint: "/ˈhedeɪk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-had",
          kind: "gap",
          prompt: "Утром у тебя болела голова. Допиши форму глагола have для прошлого.",
          before: "In the morning I ",
          after: " a headache.",
          answer: "had",
          hint: "Форма короткая и начинается с той же буквы.",
          why: "In the morning I had a headache. Прошлое от have — had.",
        },
        {
          id: "z2-vybrat-got-took",
          kind: "choice",
          prompt: "Приглашение тебе прислали. Выбери верную запись.",
          options: [
            { text: "I got an invitation.", correct: true },
            { text: "I took an invitation." },
            { text: "I had an invitation." },
          ],
          hint: "Получил — это когда дали, взял — когда взял сам.",
          why:
            "I got an invitation. Глагол get говорит о полученном, take — о взятом " +
            "самим, а had сказал бы только, что приглашение у тебя было.",
        },
        {
          id: "z3-sopostavit-tri",
          kind: "match",
          prompt: "У каждого глагола своя форма для прошлого. Найди пару каждому.",
          left: ["take", "have", "get"],
          right: ["got", "took", "had"],
          answer: [1, 2, 0],
          hint: "У всех трёх форм первая буква та же, что у глагола: t, h, g.",
          why: "take — took, have — had, get — got.",
        },
        {
          id: "z4-otmetit-poluchennoe",
          kind: "hottext",
          prompt: "Отметь то, что человеку дарят.",
          parts: [
            { text: "gift", selectable: true, correct: true },
            { text: " · " },
            { text: "headache", selectable: true },
            { text: " · " },
            { text: "prize", selectable: true, correct: true },
            { text: " · " },
            { text: "crowd", selectable: true },
          ],
          hint: "Два слова из четырёх называют не вещь, а состояние и людей вокруг.",
          why: "Дарят gift и prize. Слово headache — о состоянии, crowd — о людях вокруг.",
        },
        {
          id: "z5-napisat-o-prize",
          kind: "short",
          prompt: "Расскажи о сестре: вчера она взяла подарок и ушла. Запиши предложение целиком.",
          answer: "Yesterday my sister took a gift.",
          accept: ["My sister took a gift yesterday.", "Yesterday my sister took a gift"],
          hint: "Форма неправильного глагола одна на всех: после my sister она не меняется.",
          why:
            "Yesterday my sister took a gift. Форма took стоит и при I, и при my sister — " +
            "по лицам она не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "syel-i-kupil",
      title: "Съел и купил: I ate, I bought, I wrote",
      estimatedMinutes: 15,
      outcome: "рассказывать о еде, покупках и записях: I ate fish, I wrote in my diary",

      blocks: [
        {
          id: "zachem-eda",
          kind: "explain",
          text: [
            "Рассказ о дне почти всегда доходит до еды и покупок.",
            "Три глагола для этого тоже неправильные, и формы у них непохожие.",
            "Write — писать: письмо, сообщение, дневник. Форма для прошлого у него тоже своя.",
          ],
        },
        {
          id: "eat-buy-write",
          kind: "table",
          caption: "Ещё три неправильных глагола",
          zvuchat: ["eat", "ate", "buy", "bought", "write", "wrote"],
          head: ["О настоящем", "О прошлом"],
          rows: [
            ["eat", "ate"],
            ["buy", "bought"],
            ["write", "wrote"],
          ],
        },
        {
          id: "bought-chitaetsya",
          kind: "explain",
          text: [
            "Форма bought пишется длинно, а звучит коротко: /bɔːt/.",
            "Четыре буквы ough читаются как один звук /ɔː/, а t остаётся t.",
            "Так же читаются и другие формы на -ought.",
          ],
        },
        {
          id: "ne-eated",
          kind: "note",
          tone: "mistake",
          text:
            "«I eated soup» и «I buyed a poster» — так не говорят.\n\nУ обоих глаголов " +
            "форма для прошлого своя, и окончание -ed к ним не приставляют.",
        },
        {
          id: "primer-pokupok",
          kind: "example",
          caption: "Обед и распродажа",
          zvuchat: [
            "I ate fish with sauce.",
            "Then I bought a poster at the sale.",
            "In the evening I wrote in my diary.",
          ],
          text:
            "I ate fish with sauce.\nThen I bought a poster at the sale.\nIn the evening I wrote in my diary.",
          explain:
            "Три дела одного дня, и все три глагола неправильные. Слово порядка Then и " +
            "оборот времени In the evening стоят в начале своих строк — как и раньше.",
        },
        {
          id: "slovar-edy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "eat", translation: "есть, кушать", example: "I eat fish every week.", hint: "/iːt/" },
            { term: "ate", translation: "съел", example: "I ate fish with sauce.", hint: "/eɪt/" },
            { term: "buy", translation: "покупать", example: "I buy bread here.", hint: "/baɪ/" },
            { term: "bought", translation: "купил", example: "I bought a poster.", hint: "/bɔːt/" },
            { term: "write", translation: "писать", example: "I write letters.", hint: "/raɪt/" },
            { term: "wrote", translation: "написал", example: "I wrote in my diary.", hint: "/rəʊt/" },
            { term: "plate", translation: "тарелка", example: "The plate was hot.", hint: "/pleɪt/" },
            { term: "sauce", translation: "соус", example: "I ate fish with sauce.", hint: "/sɔːs/" },
            { term: "sale", translation: "распродажа", example: "I bought a poster at the sale.", hint: "/seɪl/" },
            { term: "diary", translation: "дневник", example: "I wrote in my diary.", hint: "/ˈdaɪəri/" },
            { term: "poster", translation: "плакат", example: "I bought a poster.", hint: "/ˈpəʊstə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-bought",
          kind: "gap",
          prompt: "Плакат куплен вчера. Допиши форму глагола buy для прошлого.",
          before: "Yesterday I ",
          after: " a poster.",
          answer: "bought",
          hint: "В этой форме есть буквы gh, и они не читаются.",
          why: "Yesterday I bought a poster. Прошлое от buy — bought, звучит /bɔːt/.",
        },
        {
          id: "z2-vybrat-ate",
          kind: "choice",
          prompt: "Обед с рыбой был вчера. Выбери верную запись.",
          options: [
            { text: "I eated fish yesterday." },
            { text: "I ate fish yesterday.", correct: true },
            { text: "I eat fish yesterday." },
          ],
          hint: "Одна запись приставляет окончание, другая оставляет форму настоящего.",
          why:
            "I ate fish yesterday. Форма ate; eated не бывает, а eat со словом " +
            "yesterday спорит сам с собой.",
        },
        {
          id: "z3-otmetit-osobye-formy",
          kind: "hottext",
          prompt: "Отметь формы неправильных глаголов.",
          parts: [
            { text: "bought", selectable: true, correct: true },
            { text: " · " },
            { text: "cooked", selectable: true },
            { text: " · " },
            { text: "wrote", selectable: true, correct: true },
            { text: " · " },
            { text: "cleaned", selectable: true },
          ],
          hint: "У двух форм из четырёх на конце стоит окончание -ed.",
          why:
            "Формы неправильных глаголов — bought и wrote. Формы cooked и cleaned получились " +
            "прибавлением -ed: эти глаголы правильные.",
        },
        {
          id: "z4-sobrat-pokupku",
          kind: "order",
          prompt: "Собери предложение: плакат куплен на распродаже. Начни с того, кто покупал.",
          items: ["at the sale", "bought", "a poster", "I"],
          answer: [3, 1, 2, 0],
          hint: "Сначала кто, потом дело, потом что купил, и место в конце.",
          why: "I bought a poster at the sale. Порядок обычный: кто, дело, что, где.",
        },
        {
          id: "z5-napisat-o-dnevnike",
          kind: "short",
          prompt: "Расскажи о вечере: запись в дневнике. Запиши предложение целиком.",
          answer: "In the evening I wrote in my diary.",
          accept: ["I wrote in my diary in the evening.", "In the evening I wrote in my diary"],
          hint: "Оборот времени поставь в начало, как в примере урока.",
          why:
            "In the evening I wrote in my diary. Форма wrote, а оборот времени " +
            "вынесен в начало.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vse-desyat-vmeste",
      title: "Все десять вместе",
      estimatedMinutes: 15,
      outcome: "собирать рассказ о поездке из неправильных глаголов и оборотов времени",
      vozvrat: [{ iz: "vchera-ya-rabotal", zadanie: "z2-vybrat-formu-ed" }],

      blocks: [
        {
          id: "zachem-vmeste",
          kind: "explain",
          text: [
            "Раньше в предложении стоял один неправильный глагол.",
            "В рассказе их идёт несколько подряд, вперемешку с правильными: у тех окончание -ed.",
            "Узнавать неправильный глагол по виду не нужно — нужно помнить, какие глаголы неправильные.",
          ],
        },
        {
          id: "desyat-form",
          kind: "table",
          caption: "Десять неправильных глаголов",
          zvuchat: [
            "go", "went", "come", "came", "see", "saw", "meet", "met", "have", "had",
            "get", "got", "take", "took", "eat", "ate", "buy", "bought", "write", "wrote",
          ],
          head: ["О настоящем", "О прошлом"],
          rows: [
            ["go", "went"],
            ["come", "came"],
            ["see", "saw"],
            ["meet", "met"],
            ["have", "had"],
            ["get", "got"],
            ["take", "took"],
            ["eat", "ate"],
            ["buy", "bought"],
            ["write", "wrote"],
          ],
        },
        {
          id: "gde-stoit-oborot",
          kind: "explain",
          text: [
            "В отдельном предложении оборот времени стоит в конце, но в рассказе его выносят вперёд.",
            "Так он задаёт время всем строкам сразу, и повторять его в каждой не нужно.",
            "Повторять его в каждой строке не нужно.",
            "Дальше строки идут по порядку дел, и слова порядка помогают их различить.",
          ],
        },
        {
          id: "ne-vezde-oborot",
          kind: "note",
          tone: "info",
          text:
            "«Last week I went to the coast. Last week I saw a ship. Last week I ate " +
            "fish» — все три строки построены верно.\n\nНо время в них названо трижды, " +
            "и рассказ распадается на отдельные дни.\n\nНазови его один раз, в первой " +
            "строке: дальше он и так понятен.",
        },
        {
          id: "primer-rasskaza-o-poezdke",
          kind: "example",
          caption: "Поездка на побережье",
          zvuchat: [
            "Last week I went to the coast.",
            "First I saw a big ship.",
            "Then I ate fish and watched the sea.",
            "The view was beautiful.",
          ],
          text:
            "Last week I went to the coast.\nFirst I saw a big ship.\nThen I ate fish and watched the sea.\nThe view was beautiful.",
          explain:
            "Четыре строки: первая называет время и место, две следующие — дела по " +
            "порядку, последняя описывает увиденное через was.\n\nВ третьей строке " +
            "рядом стоят неправильный глагол ate и правильный watched — в рассказе " +
            "они и идут вперемешку.",
        },
        {
          id: "slovar-poezdki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "view", translation: "вид, то, что видно вокруг", example: "The view was beautiful.", hint: "/vjuː/" },
            { term: "ship", translation: "корабль", example: "I saw a big ship.", hint: "/ʃɪp/" },
            { term: "stamp", translation: "почтовая марка", example: "I bought a stamp.", hint: "/stæmp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-took-v-rasskaze",
          kind: "gap",
          prompt: "На побережье — поездка на автобусе. Допиши форму глагола take для прошлого.",
          before: "Then I ",
          after: " the bus.",
          answer: "took",
          hint: "Гласная в этой форме меняется на другую.",
          why: "Then I took the bus. Прошлое от take — took.",
        },
        {
          id: "z2-vybrat-lishnyuyu-formu",
          kind: "choice",
          prompt: "В рассказе о прошлом одна форма лишняя. Какая?",
          options: [
            { text: "saw" },
            { text: "buy", correct: true },
            { text: "came" },
          ],
          hint: "Две формы говорят о прошлом, одна — о настоящем.",
          why:
            "Лишняя buy: это форма настоящего времени. Прошлое от неё — bought, а saw " +
            "и came уже стоят в прошедшей форме.",
        },
        {
          id: "z3-sopostavit-desyat",
          kind: "match",
          prompt: "Собери пары: слева глагол, справа его форма для прошлого.",
          left: ["eat", "write", "get", "see"],
          right: ["saw", "got", "ate", "wrote"],
          answer: [2, 3, 1, 0],
          hint: "Две формы из четырёх меняют не только гласную.",
          why: "eat — ate, write — wrote, get — got, see — saw.",
        },
        {
          id: "z4-sobrat-rasskaz",
          kind: "order",
          prompt:
            "Собери первую строку рассказа так, чтобы она начиналась с оборота времени: " +
            "поездка к озеру была на прошлой неделе.",
          items: ["went", "Last week", "to the lake", "I"],
          answer: [1, 3, 0, 2],
          hint: "Оборот времени стоит первым, дальше обычный порядок.",
          why:
            "Last week I went to the lake. Оборот времени вынесен в начало и задаёт " +
            "время всему рассказу.",
        },
        {
          id: "z5-napisat-dve-stroki",
          kind: "short",
          prompt:
            "Продолжи рассказ одной строкой: сначала на глаза попался корабль. Начни со слова First.",
          answer: "First I saw a ship.",
          accept: ["First I saw a big ship.", "First I saw a ship"],
          hint: "Слово порядка стоит первым, дальше кто и дело.",
          why:
            "First I saw a ship. Слово порядка встаёт в начало строки, а оборот времени " +
            "повторять не нужно — он назван раньше.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-more",
      title: "Читаем сообщение о поездке",
      estimatedMinutes: 13,
      outcome: "понимать короткое сообщение о поездке",

      blocks: [
        {
          id: "zachem-chitat-o-more",
          kind: "explain",
          text: [
            "В сообщении неправильные глаголы идут вперемешку с правильными, и узнавать их надо по ходу чтения.",
            "Ниже сообщение о поездке на побережье.",
            "Читай целиком, потом отвечай. Вопросы — о том, что человек делал.",
          ],
        },
        {
          id: "soobshchenie-o-more",
          kind: "text",
          title: "Сообщение от Айгуль",
          genre: "message",
          body: [
            "Hi Dana!",
            "Last week I went to the coast with my colleague. We came on Friday and " +
              "stayed in a small hotel near the sea.",
            "On Saturday I saw a big ship and took a lot of photos. Then we met " +
              "our guide and walked along the coast.",
            "In the evening I ate fish with sauce. It was delicious. I bought a poster " +
              "and a stamp for my brother.",
            "The view was beautiful, but the beach was crowded.",
            "Aigul",
          ],
          glossary: [
            { term: "near", translation: "рядом с" },
            { term: "a lot of", translation: "много" },
            { term: "photos", translation: "фотографии" },
            { term: "along", translation: "вдоль" },
          ],
        },
        {
          id: "kak-chitat-o-more",
          kind: "note",
          tone: "info",
          text:
            "В сообщении рядом стоят неправильные глаголы, правильные с окончанием -ed " +
            "и форма was из первого модуля.\n\nЧитая, отмечай про себя, какой глагол " +
            "какой: дальше об этом спросят.",
        },

        // ---- задания ----
        {
          id: "z1-s-kem-ezdila",
          kind: "choice",
          about: "soobshchenie-o-more",
          prompt: "С кем Айгуль ездила на побережье?",
          options: [
            { text: "С братом" },
            { text: "С сослуживцем", correct: true },
            { text: "С экскурсоводом" },
          ],
          hint: "Спутник назван в первой строке сообщения.",
          why:
            "Last week I went to the coast with my colleague. Экскурсовода она встретила " +
            "уже там, а брату купила марку.",
        },
        {
          id: "z2-chto-uvidela",
          kind: "short",
          about: "soobshchenie-o-more",
          prompt: "Что она увидела в субботу? Ответь одним английским словом.",
          answer: "ship",
          accept: ["a ship", "a big ship", "big ship"],
          hint: "Слово стоит после формы saw.",
          why: "On Saturday I saw a big ship.",
        },
        {
          id: "z3-chto-kupila",
          kind: "short",
          about: "soobshchenie-o-more",
          prompt: "Что она купила брату? Ответь одним английским словом.",
          answer: "stamp",
          accept: ["a stamp", "stamp for my brother"],
          hint: "Брат назван в той же строке, что и покупка.",
          why: "I bought a poster and a stamp for my brother.",
        },
        {
          id: "z4-kakoy-byl-plyazh",
          kind: "choice",
          about: "soobshchenie-o-more",
          prompt: "Каким был пляж?",
          options: [
            { text: "Тихим" },
            { text: "Дорогим" },
            { text: "Многолюдным", correct: true },
          ],
          hint: "О пляже сказано в последней строке, после слова but.",
          why: "The view was beautiful, but the beach was crowded.",
        },
        {
          id: "z5-chto-kupila-forma",
          kind: "short",
          about: "soobshchenie-o-more",
          prompt:
            "Каким глаголом в сообщении названа покупка? Выпиши форму, как она стоит " +
            "в тексте.",
          answer: "bought",
          accept: ["I bought"],
          hint: "Покупка названа в третьем абзаце, в строке про плакат и марку.",
          why: "I bought a poster and a stamp for my brother.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-poezdke",
      title: "Слушаем рассказ о поездке",
      estimatedMinutes: 13,
      outcome: "слышать в записи, куда человек ездил и что делал",

      blocks: [
        {
          id: "zachem-slushat-poezdku",
          kind: "explain",
          text: [
            "Неправильный глагол на слух узнать труднее, чем окончание: его форма не похожа на сам глагол.",
            "Ниже запись: человек рассказывает о поездке.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
            "Открой её после ответов.",
          ],
        },
        {
          id: "zapis-o-poezdke",
          kind: "audio",
          caption: "Рассказ о поездке",
          pace: "slow",
          skryt: true,
          transcript:
            "Last month I went to Almaty with my family. We came on Sunday and stayed " +
            "with my sister. On Monday I met my colleague and we walked in the park. " +
            "I bought a small gift for my mother. The weather was cold, but the city " +
            "was beautiful.",
        },
        {
          id: "chto-slushat-v-poezdke",
          kind: "note",
          tone: "info",
          text:
            "Слушай, куда человек ездил, в какой день приехал, кого встретил и кому " +
            "купил подарок.\n\nОб этом и будут вопросы.",
        },

        // ---- задания ----
        {
          id: "z1-kuda-ezdil-na-sluh",
          kind: "choice",
          about: "zapis-o-poezdke",
          prompt: "Куда человек ездил?",
          options: [
            { text: "На побережье" },
            { text: "За границу" },
            { text: "В Алматы", correct: true },
          ],
          hint: "Место названо в самой первой фразе.",
          why: "Last month I went to Almaty with my family.",
        },
        {
          id: "z2-v-kakoy-den-priehal",
          kind: "short",
          about: "zapis-o-poezdke",
          prompt: "В какой день он приехал? Ответь одним английским словом.",
          answer: "Sunday",
          accept: ["on Sunday", "sunday", "On Sunday"],
          hint: "День стоит сразу после формы came.",
          why: "We came on Sunday and stayed with my sister.",
        },
        {
          id: "z3-kogo-vstretil",
          kind: "choice",
          about: "zapis-o-poezdke",
          prompt: "Кого он встретил в понедельник?",
          options: [
            { text: "Сослуживца", correct: true },
            { text: "Экскурсовода" },
            { text: "Сестру" },
          ],
          hint: "Встреча названа сразу после дня недели.",
          why:
            "On Monday I met my colleague and we walked in the park. У сестры он " +
            "остановился, а экскурсовода в записи нет вовсе.",
        },
        {
          id: "z4-komu-podarok",
          kind: "short",
          about: "zapis-o-poezdke",
          prompt: "Кому он купил подарок? Ответь одним английским словом.",
          answer: "mother",
          accept: ["my mother", "for my mother", "Mother"],
          hint: "Слово стоит в конце строки о подарке.",
          why: "I bought a small gift for my mother.",
        },
        {
          id: "z5-vosstanovit-o-poezdke",
          kind: "order",
          prompt: "Послушай запись и собери из карточек то, что в ней сказано.",
          zvuk: "Last month I went to Almaty with my family.",
          items: ["with my family", "to Almaty", "Last month", "went", "I"],
          answer: [2, 4, 3, 1, 0],
          hint: "Правило порядка тут не поможет: последние две карточки различит только запись.",
          why:
            "Last month I went to Almaty with my family. Оборот времени вынесен в " +
            "начало, а с кем — в самый конец.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-soobshchenie",
      title: "Пишем сообщение о поездке",
      estimatedMinutes: 13,
      outcome:
        "проверять своё сообщение о поездке: форма неправильного глагола, оборот времени, порядок слов",

      blocks: [
        {
          id: "zachem-pisat-soobshchenie",
          kind: "explain",
          text: [
            "При письме форму неправильного глагола не подскажет никто: выбирать её тебе.",
            "Ниже образец на четыре строки. По нему и напишешь о своей поездке.",
            "Поездка может быть любой — хоть в соседний город, хоть на рынок.",
          ],
        },
        {
          id: "obrazec-soobshcheniya",
          kind: "example",
          caption: "Образец: четыре строки о поездке",
          zvuchat: [
            "Last week I went to the lake.",
            "First I saw a big ship.",
            "Then I ate fish.",
            "The lake was quiet.",
          ],
          text:
            "Last week I went to the lake.\nFirst I saw a big ship.\nThen I ate fish.\nThe lake was quiet.",
          explain:
            "Первая строка называет время и место, две следующие — дела по порядку, " +
            "последняя описывает озеро через was. Неправильных глаголов в образце " +
            "три: went, saw, ate.",
        },
        {
          id: "chto-proverit-v-soobshchenii",
          kind: "note",
          tone: "info",
          text:
            "Перед тем как сравнить с образцом, проверь себя.\n\nУ каждого дела стоит " +
            "форма неправильного глагола, а не окончание -ed.\n\nОборот времени назван один " +
            "раз, в первой строке.\n\nВ строке о месте стоит was, а не глагол дела.\n\n" +
            "Порядок в строке обычный: кто, дело, остальное.\n\nВсе четыре строки — об " +
            "одной поездке, а не о том, что бывает всегда.",
        },

        // ---- задания ----
        {
          id: "z1-ispravit-osobuyu",
          kind: "short",
          prompt: "Исправь ошибку и запиши строку целиком: «Last week I goed to the coast.»",
          answer: "Last week I went to the coast.",
          accept: ["Last week I went to the coast"],
          hint: "Ошибка в форме глагола.",
          why:
            "Last week I went to the coast. Форма goed не бывает: у глагола go для " +
            "прошлого своя форма.",
        },
        {
          id: "z2-vybrat-poslednyuyu-stroku",
          kind: "choice",
          prompt:
            "Сообщение кончается строкой, которая описывает место поездки. Какая из " +
            "трёх годится?",
          options: [
            { text: "The station was noisy.", correct: true },
            { text: "Then I got a gift." },
            { text: "I wrote in my diary." },
          ],
          hint: "Последняя строка описывает, а не рассказывает о деле.",
          why:
            "The station was noisy. Две другие строки называют дела, а последняя " +
            "строка сообщения описывает место через was.",
        },
        {
          id: "z3-napisat-soobshchenie",
          kind: "essay",
          prompt:
            "Напиши сообщение о своей поездке: четыре строки, как в образце. Время и " +
            "место, два дела по порядку, строка о том, каким было место.",
          minWords: 14,
          sample:
            "Last week I went to the market.\nFirst I met my colleague.\nThen I bought " +
            "a plate.\nThe market was crowded.",
          checklist: [
            "у каждого дела стоит форма неправильного глагола, а не окончание -ed",
            "оборот времени назван один раз: повторять его в каждой строке не нужно",
            "в строке о месте стоит was, а не глагол дела",
            "порядок в строке обычный: кто, дело, остальное",
            "все четыре строки — об одной поездке, а не о том, что бывает всегда",
          ],
          hint: "Дела бери те, для которых знаешь форму: went, saw, met, ate, bought.",
          why:
            "Проверь по пяти пунктам. Форма неправильного глагола у каждого дела, " +
            "оборот времени один раз в первой строке, was в строке о месте. " +
            "Дальше — обычный порядок слов, и все четыре строки об одной поездке.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от заданий уроков и другими углами: исправить
      // чужую запись, назвать причину ошибки, отличить по смыслу, собрать другой
      // разговор. Совпадений видов и устройства с уроками нет.

      // ---- итог 1 ----
      {
        id: "q-poezdka-ispravit",
        kind: "short",
        outcome: "рассказывать о поездке неправильными глаголами: I went to Astana",
        prompt: "Исправь ошибку и запиши целиком: «Last year my parents go abroad.»",
        answer: "Last year my parents went abroad.",
        accept: ["Last year my parents went abroad"],
        why:
          "Last year my parents went abroad. Слова last year говорят о прошлом, а форма " +
          "go — о том, что бывает всегда.",
      },
      {
        id: "q-poezdka-prichina",
        kind: "choice",
        outcome: "рассказывать о поездке неправильными глаголами: I went to Astana",
        prompt: "Почему запись «My sister taked a prize» неверна?",
        options: [
          { text: "Потому что take — неправильный глагол и окончания -ed не берёт", correct: true },
          { text: "Потому что после my sister глагол не меняется вовсе" },
          { text: "Потому что слово prize нельзя ставить в конец" },
        ],
        why:
          "My sister took a prize. Правильный глагол берёт -ed, неправильный — свою " +
          "форму, и take из вторых.",
      },
      // ---- итог 2 ----
      {
        id: "q-vstrecha-otlichit",
        kind: "choice",
        outcome: "рассказывать о встрече: I saw my friend, I met my colleague",
        prompt: "Знакомство с гостем случилось вчера. Какая запись об этом?",
        options: [
          { text: "I meet my guest yesterday." },
          { text: "I met my guest yesterday.", correct: true },
          { text: "I meeted my guest yesterday." },
        ],
        why:
          "I met my guest yesterday. Форма meet говорит о том, что бывает всегда, а " +
          "meeted не бывает вовсе.",
      },
      {
        id: "q-vstrecha-dopisat",
        kind: "gap",
        outcome: "рассказывать о встрече: I saw my friend, I met my colleague",
        prompt: "Гость приехал в пятницу. Допиши форму глагола come для прошлого.",
        before: "The guest ",
        after: " on Friday.",
        answer: "came",
        why: "The guest came on Friday. Прошлое от come — came.",
      },
      // ---- итог 3 ----
      {
        id: "q-vzyal-nazvat",
        kind: "short",
        outcome: "говорить о том, что было и что взял: I had a headache, I took a gift",
        prompt: "Подарок брату вручили вчера. Запиши строку целиком, начав с My brother.",
        answer: "My brother got a gift yesterday.",
        accept: ["My brother got a gift yesterday", "Yesterday my brother got a gift."],
        why:
          "My brother got a gift yesterday. Глагол get говорит о полученном; took " +
          "сказал бы, что подарок взяли, а не вручили.",
      },
      {
        id: "q-vzyal-prichina",
        kind: "choice",
        outcome: "говорить о том, что было и что взял: I had a headache, I took a gift",
        prompt: "Почему запись «My parents geted a prize» неверна?",
        options: [
          { text: "Потому что get — неправильный глагол и окончания -ed не берёт", correct: true },
          { text: "Потому что после my parents глагол берёт окончание -s" },
          { text: "Потому что о призе говорят только через was" },
        ],
        why:
          "My parents got a prize. Окончание -ed берут правильные глаголы, а get не " +
          "из них.",
      },
      // ---- итог 4 ----
      {
        id: "q-eda-sobrat",
        kind: "order",
        outcome: "рассказывать о еде, покупках и записях: I ate fish, I wrote in my diary",
        prompt: "Собери строку: тарелку купили на распродаже. Начни с того, кто покупал.",
        items: ["a plate", "at the sale", "bought", "We"],
        answer: [3, 2, 0, 1],
        why:
          "We bought a plate at the sale. Место покупки встаёт последним, после того, " +
          "что купили.",
      },
      {
        id: "q-eda-otlichit",
        kind: "choice",
        outcome: "рассказывать о еде, покупках и записях: I ate fish, I wrote in my diary",
        prompt: "В какой строке глагол правильный?",
        options: [
          { text: "I wrote in my diary." },
          { text: "I cooked fish with sauce.", correct: true },
          { text: "I ate fish with sauce." },
        ],
        why:
          "I cooked fish with sauce. Форма cooked получилась прибавлением -ed, а wrote и " +
          "ate — от неправильных глаголов.",
      },
      // ---- итог 5 ----
      {
        id: "q-rasskaz-lishniy-oborot",
        kind: "short",
        outcome: "собирать рассказ о поездке из неправильных глаголов и оборотов времени",
        prompt:
          "Вторая строка рассказа называет время во второй раз: «Last month I went to " +
          "Almaty. Last month I bought a gift.» Запиши её короче, оставив только дело.",
        answer: "I bought a gift.",
        accept: ["I bought a gift"],
        why:
          "I bought a gift. Время названо первой строкой и держится до конца рассказа, " +
          "а повтор делает его похожим на список отдельных дней.",
      },
      {
        id: "q-rasskaz-poryadok",
        kind: "gap",
        outcome: "собирать рассказ о поездке из неправильных глаголов и оборотов времени",
        prompt: "Рассказ о прошлой неделе. Допиши форму глагола see для прошлого.",
        before: "Last week I ",
        after: " a big ship.",
        answer: "saw",
        why:
          "Last week I saw a big ship. Оборот времени стоит первым и задаёт время, а " +
          "глагол берёт свою форму.",
      },
      // ---- итог 6 ----
      {
        id: "q-chtenie-nayti",
        kind: "choice",
        outcome: "понимать короткое сообщение о поездке",
        prompt:
          "В сообщении написано: «We came on Friday and stayed in a small hotel near the " +
          "sea.» Что из этого верно?",
        options: [
          { text: "Гостиница стояла у моря", correct: true },
          { text: "Они приехали в субботу" },
          { text: "Они остановились у сестры" },
        ],
        why: "We came on Friday and stayed in a small hotel near the sea.",
      },
      // ---- итог 7 ----
      {
        id: "q-sluh-den",
        kind: "short",
        outcome: "слышать в записи, куда человек ездил и что делал",
        zvuk: "Last month I went to Almaty with my family.",
        prompt: "Послушай и запиши, с кем человек ездил. Одно английское слово.",
        answer: "family",
        accept: ["my family", "with my family"],
        why: "Family. С кем — названо в самом конце строки, после места.",
      },
      // ---- итог 8 ----
      {
        id: "q-pismo-proverit",
        kind: "choice",
        outcome: "проверять своё сообщение о поездке: форма неправильного глагола, оборот времени, порядок слов",
        prompt: "В сообщении о поездке одна строка лишняя. Какая?",
        options: [
          { text: "Last month I went to Almaty." },
          { text: "I buy a gift every week.", correct: true },
          { text: "The city was beautiful." },
        ],
        why:
          "I buy a gift every week. Эта строка о том, что бывает всегда, а сообщение — " +
          "о поездке, которая уже была.",
      },
      {
        id: "q-pismo-ispravit-oborot",
        kind: "short",
        outcome: "проверять своё сообщение о поездке: форма неправильного глагола, оборот времени, порядок слов",
        prompt: "Исправь порядок слов и запиши целиком: «I went last week to the coast.»",
        answer: "I went to the coast last week.",
        accept: ["I went to the coast last week", "Last week I went to the coast."],
        why:
          "I went to the coast last week. Оборот времени встаёт в конец предложения " +
          "или в самое его начало, но не в середину.",
      },
    ],
  },
};

export default module;
