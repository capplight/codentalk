import type { Module } from "@/lib/content/types";

/**
 * Модуль 7 курса «Английский · Elementary»: пока и когда.
 *
 * Программа: docs/programma-english-elementary.md, модуль 7 — «связывать два
 * прошедших дела»; грамматика: Past Simple и Past Continuous вместе; `when`,
 * `while`.
 *
 * ИМЕНА ГЛАВНЫХ ВЕЩЕЙ — «ДЛИТЕЛЬНОЕ ДЕЙСТВИЕ» И «ЗАКОНЧЕННОЕ ДЕЙСТВИЕ».
 *
 * Оба имени взяты из модуля 6 и не меняются здесь ни разу. Слов «фон» и
 * «событие» в тексте для ученика нет вовсе: это были бы вторые имена тем же
 * вещам (CLAUDE.md, «Понятность объяснения», пункт 3).
 *
 * ЧЕМУ МОДУЛЬ УЧИТ, А ЧЕМУ НЕТ — САМОЕ ВАЖНОЕ МЕСТО.
 *
 * Первая редакция ввела правило «после `when` стоит только законченное
 * действие» и трижды объявила ошибкой безупречный английский. Нашёл методист, и
 * он же привёл строку, которая это опровергает: CLAUSES subordinated, графа A2,
 * «FORM/USE: TIME» — пример источника «I feel comfortable **when I am wearing**
 * these clothes». Это `when` при длительном действии, на нашей же ступени.
 *
 * И ТУ ЖЕ ОШИБКУ МОДУЛЬ ПОВТОРИЛ ДЛЯ `while`. Найдено 30 августа 2026, общим
 * проходом по ступени. Первая редакция писала «после `while` **всегда**
 * длительное действие», объявляла ошибкой строки с законченным и требовала их
 * «исправить» — в задании урока 8 и в двух вопросах работы.
 *
 * Опровергает это та самая графа, которую модуль цитирует в опоре: CONJUNCTIONS
 * subordinating, **A2**, «FORM: SIMPLE». В её собственном перечне примеров
 * стоит «All of us were dancing **while my father sang** my favourite song».
 * `while` с законченным действием, на нашей ступени, в нашей же графе.
 *
 * Урок этого случая шире `while`: **вылечив выдуманный запрет в одном месте,
 * я тут же завёл такой же в соседнем** — и написал об этом в шапке, гордясь
 * первой починкой. Признак один и тот же: слово «всегда» в правиле.
 *
 * Поэтому модуль учит теперь ВЫБОРУ ПО СМЫСЛУ, а не проверке формы: тянулось
 * дело — берут `while` и форму с `-ing`, случилось разом — простую форму
 * прошедшего. `When` называет тот миг, о котором речь, и после него встречается
 * и то, и другое. Ни одно задание не объявляет ошибкой ни `when` при
 * длительном действии, ни `while` при законченном.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, PAST past continuous, «USE: BACKGROUND
 *    EVENTS» — «Can use the past continuous to show that an event was happening
 *    in the background to the main event», пример «Yesterday we were studying
 *    maths in your house, and I left my book». Это уроки 1 и 5.
 *
 * 2. English Grammar Profile, A2, PAST past continuous, «USE: EVENTS IN
 *    PROGRESS» — «Can use the past continuous to talk about actions and states
 *    in progress around a particular time in the past». Это урок 4, где оба
 *    действия тянутся разом. Первая редакция сослалась и для него на «BACKGROUND
 *    EVENTS» — ссылка была не та, нашёл методист.
 *
 * 3. English Grammar Profile, A2, CONJUNCTIONS subordinating, «FORM: SIMPLE» —
 *    «Can use a limited range of simple subordinating conjunctions '(if, when,
 *    so, while)' to introduce a subordinate clause». Источник называет `when` и
 *    `while` прямо и держит их на A2.
 *
 * 4. English Grammar Profile, A2, CLAUSES subordinated, «FORM/USE: TIME» — «Can
 *    use a finite subordinate clause with time conjunctions, before or after a
 *    main clause», пример «I feel comfortable when I am wearing these clothes».
 *    Отсюда и порядок частей (урок 3), и отказ от выдуманного ограничения.
 *
 * 5. English Grammar Profile, A2, PAST past simple, «FORM: WITH 'WHEN'» — «Can
 *    use 'when' + past simple in subordinate clauses», пример «When I arrived,
 *    the weather was horrible». Пример графы A2 с вынесенной вперёд частью и
 *    запятой — прямая опора урока 3. Первая редакция её не назвала.
 *
 * 6. Описания Совета Европы, с. 67, шкала Creative writing, графа A2: «Can give
 *    very short, basic descriptions of events, past activities and personal
 *    experiences». Отсюда размер рассказа в уроках 5 и 8.
 *
 * ЗАПЯТАЯ — МЕСТО, ГДЕ ИСТОЧНИКИ МОЛЧАТ.
 *
 * Правил пунктуации наши материалы не содержат вовсе. Что запятая СТОИТ, когда
 * часть с союзом вынесена вперёд, видно из примера графы A2 в пункте 5 («When I
 * arrived, the weather was horrible»); что её НЕ ставят, когда часть с союзом
 * идёт позади, видно из примера пункта 4. Обратного утверждения — «так писать
 * нельзя» — в модуле нет нигде: оно было бы заявлением об употреблении без
 * источника.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ОТРИЦАНИЯ И ВОПРОСА ДА/НЕТ У ДЛИТЕЛЬНОГО ДЕЙСТВИЯ. English Grammar Profile
 *   ставит обе строки на B1 (PAST past continuous, «FORM: NEGATIVE» и «FORM:
 *   QUESTIONS»), и модуль 6 их не давал. Здесь их тоже нет.
 * — СОЮЗОВ `as`, `until`, `before`, `after`. Источник в пункте 3 называет
 *   «limited range» и перечисляет четыре союза, из которых времени касаются два.
 * — НЕПРАВИЛЬНЫХ ГЛАГОЛОВ СВЕРХ ДЕСЯТКА МОДУЛЯ 3 И ПАРЫ `LOSE — LOST`. Курс дал
 *   `went`, `came`, `saw`, `met`, `had`, `got`, `took`, `ate`, `bought`,
 *   `wrote`. Пара `lose — lost` нужна модулю на каждом шагу и потому дана
 *   карточками в уроке 2 — так же, как модуль 3 давал `see — saw`. Первая
 *   редакция употребила `lost` в четырнадцати местах, не дав самого глагола, и
 *   вдобавок требовала форм `read` и `fell`, которых курс не давал никогда. Всё
 *   нашёл методист; `read` и `fell` из модуля убраны.
 *
 * СЛОВАРЬ МОДУЛЯ. Шестьдесят восемь карточек: тридцать восемь у самого модуля и
 * тридцать у урока слов части, который стоит последним (о нём ниже). Новых для
 * ступени шестьдесят три.
 *
 * У самого модуля тридцать девять карточек, из них тридцать восемь несут слово,
 * которого на прошлой ступени не было. Тридцать девятая — глагол `lose`
 * (Oxford 3000 ставит A1): он взят не ради новизны, а потому что без него нельзя
 * дать форму `lost`.
 *
 *    СЛОВА УРОКА ЧАСТИ. Тридцать записей, все из словника A2 Key: living room,
 *    sitting room, dining room, washing machine, washing-up, wash up, tidy up,
 *    lie down, sit down, fall over, look out, work out, take part, go out, get
 *    dressed, put on, take off, try on, write down, get back, bring back, give
 *    back, make-up, pencil case, text message, video game, social media,
 *    working hours, a few, lots.
 *
 *    Oxford 3000 не знает почти ни одной из них, и это ожидаемо: список ведёт
 *    отдельные слова, а здесь связки и составные имена. Помету A1 он ставит
 *    двум — `lots` (от `lot`) и `a few` (от `few`), — и они взяты не ради
 *    новизны, а потому что бытовая речь без них не строится.
 *
 *    ТРАНСКРИПЦИЯ СОСТАВНЫХ ЗАПИСЕЙ СОБРАНА ИЗ ЧАСТЕЙ. Словарь произношения
 *    `ipa-en-uk` многословных записей не знает вовсе, и курс уже делал так же
 *    в `swimming kit`, `mad about`, `What a shame!`. Ударение поставлено там,
 *    где его слышно: у связки с послелогом на послелоге (`wash ˈup`), у
 *    составного имени на первом слове (`ˈliving room`). Вопрос об этом стоит
 *    перед владельцем и записан в записке.
 *
 *    Oxford 3000 помечает A2: accident, suddenly, hurt, lost, drop, missing,
 *    carefully, immediately, unfortunately, trouble, engine, petrol, wheel,
 *    lock, broken, danger, cry, track, safe, luck, lucky, careful.
 *
 *    Oxford 3000 помечает B1, но словник A2 Key содержит: tyre, helicopter,
 *    deliver, receipt, battery, glove.
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: ambulance,
 *    wallet, purse, luckily, motorbike, scooter, scarf, crossing, roundabout.
 *
 *    Два слова — `lock` и `track` — Oxford 3000 помечает A2, а словника A2 Key в
 *    них нет. Правило ступени принимает любое из двух оснований.
 *
 *    КАЖДАЯ КАРТОЧКА РАБОТАЕТ В МОДУЛЕ, и стоит она в том уроке, где слово
 *    впервые встречается. Первая редакция дала восемь карточек, не встречавшихся
 *    нигде, кроме себя, и шесть таких, что работали раньше своего урока.
 *
 *    СЛОВА-ПОДПОРКИ: road, street, car, bus, door, window, phone, bag, money,
 *    home, work, shop, rain, wait, call, stop, open, close, help, run, walk,
 *    drive, look, find, cold, dark, late, quick, dog, book, dinner, people,
 *    nobody, everybody, quickly, near, way, key — все A1 по Oxford 3000. Плюс
 *    слова прошлых модулей этой же ступени: gate, timetable, colleague, sofa,
 *    kitchen, motorway, stairs.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного: одно в уроке 1 (форма `was` + `-ing`
 * из модуля 6 — она и есть левая половина каждой строки этого модуля) и одно в
 * уроке 4 (окончание `-ed` из модуля 2, а оно нужно правой половине). Берутся
 * ссылкой (`vozvrat`), устройство — docs/format-uroka.md.
 *
 * ПОСЛЕДНИЙ УРОК — «СЛОВА ЧАСТИ», И ОН НОВОГО ВИДА. Решение владельца от 29
 * августа 2026, общий проход по ступени.
 *
 * Повод: девять поздних модулей ступени держали от 11 до 20 карточек при норме
 * в тридцать. Добрать норму в самих модулях было нечем — они грамматические, и
 * слова о еде или спорте в модуле про `if` стали бы мёртвыми карточками, что
 * запрещает уточнение владельца от 21 августа. Владелец выбрал другое: в конце
 * каждой из четырёх частей ступени стоит урок слов одной темы.
 *
 * Здесь конец части первой, и тема её — дом и день: тридцать карточек, все из
 * словника A2 Key. Двадцать семь из тридцати — запись из двух слов: семнадцать
 * глаголов с послелогом (`wash up`, `put on`) и девять составных имён (`video
 * game`, `pencil case`), плюс `a few`. Ещё две пишутся через дефис
 * (`washing-up`, `make-up`), и однословная запись здесь одна — `lots`.
 *
 * Это нарочно: бытовая речь держится на таких связках, а курс их до сих пор не
 * брал вовсе.
 *
 * ПОРЯДОК УРОКОВ ЭТОТ УРОК НЕ ЛОМАЕТ. Правила, чтение, слушание и письмо стоят
 * до него в обычном порядке; урок слов идёт после письма, потому что он не
 * модуля, а части.
 */
const module: Module = {
  slug: "poka-i-kogda",
  title: "Пока и когда",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past continuous, «USE: BACKGROUND EVENTS»: «Can use the past " +
        "continuous to show that an event was happening in the background to the " +
        "main event», пример источника — «Yesterday we were studying maths in your " +
        "house, and I left my book» — уроки 1 и 5. " +
        "A2, PAST past continuous, «USE: EVENTS IN PROGRESS»: «Can use the past " +
        "continuous to talk about actions and states in progress around a " +
        "particular time in the past» — урок 4, где оба действия тянутся разом. " +
        "A2, CONJUNCTIONS subordinating, «FORM: SIMPLE»: «Can use a limited range " +
        "of simple subordinating conjunctions '(if, when, so, while)' to introduce " +
        "a subordinate clause» — источник называет when и while прямо. " +
        "A2, CLAUSES subordinated, «FORM/USE: TIME»: «Can use a finite subordinate " +
        "clause with time conjunctions, before or after a main clause», пример «I " +
        "feel comfortable when I am wearing these clothes». ЭТОТ ПРИМЕР ВАЖЕН " +
        "ОТДЕЛЬНО: в нём when стоит при длительном действии на графе A2, и потому " +
        "модуль нигде не объявляет такое сочетание ошибкой. " +
        "A2, PAST past simple, «FORM: WITH 'WHEN'»: «Can use 'when' + past simple " +
        "in subordinate clauses», пример «When I arrived, the weather was " +
        "horrible» — часть с союзом вынесена вперёд и отделена запятой, это опора " +
        "урока 3. " +
        "ЧЕГО НЕТ. B1, PAST past continuous, «FORM: NEGATIVE» и «FORM: QUESTIONS» " +
        "— отрицания и вопроса да/нет у длительного действия в модуле нет",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОКИ 5 И 8. с. 67, Creative writing, A2: «Can give very short, basic " +
        "descriptions of events, past activities and personal experiences» — отсюда " +
        "размер рассказа. " +
        "УРОК 6, ЧТЕНИЕ. с. 55, Reading correspondence, A2: «Can understand short, " +
        "simple personal letters». " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority (e.g. " +
        "very basic personal and family information, shopping, local geography, " +
        "employment), provided people articulate clearly and slowly» — отсюда " +
        "pace: \"slow\". Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "ИМЕНА ДВУХ ВРЕМЁН. с. 52, Language specifications, раздел Tenses: «Past " +
        "simple: past events» и «Past continuous: parallel past actions, continuous " +
        "actions interrupted by the past simple tense». Вторая строка описывает " +
        "ровно устройство этого модуля — длительное, прерванное законченным, — и " +
        "называет оба времени в одной фразе. " +
        "Имена уже названы раньше на ступени (модули 1, 2 и 6), и правило требует " +
        "называть время один раз. Повтор здесь — решение владельца от 22 августа " +
        "2026: это единственный модуль, где два времени стоят рядом и " +
        "противопоставляются, и английские имена помогают перенести различение в " +
        "учебник. Довод принёс методист при разборе правки. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: accident, suddenly, hurt, lost, drop, " +
        "missing, carefully, immediately, unfortunately, trouble, engine, petrol, " +
        "wheel, lock, broken, danger, cry, track, safe, luck, lucky, careful. " +
        "Помету B1 Oxford 3000 ставит шести словам — tyre, helicopter, deliver, " +
        "receipt, battery, glove, — а словник A2 Key их содержит: по правилу " +
        "ступени они в запасе и потому взяты. " +
        "Слов ambulance, wallet, purse, luckily, motorbike, scooter, scarf, " +
        "crossing, roundabout Oxford 3000 не содержит вовсе, а словник A2 Key " +
        "требует. " +
        "Глагол lose Oxford 3000 помечает A1: он взят не ради новизны, а потому " +
        "что без него нельзя дать форму lost, которая модулю нужна на каждом шагу. " +
        "Подпорки: road, street, car, bus, door, window, phone, bag, money, home, " +
        "work, shop, rain, wait, call, stop, open, close, help, run, walk, drive, " +
        "look, find, cold, dark, late, quick, dog, book, dinner, people, nobody, " +
        "everybody, quickly, near, way, key — все A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Слов lock и " +
        "track словник не содержит, и взяты они по помете Oxford 3000 (A2) — " +
        "правило ступени принимает любое из двух оснований. Остальные карточки в " +
        "словнике есть. " +
        "УРОК СЛОВ ЧАСТИ ПЕРВОЙ берёт ещё тридцать записей, и все тридцать " +
        "словник содержит: living room, sitting room, dining room, washing " +
        "machine, washing-up, wash up, tidy up, lie down, sit down, fall over, " +
        "look out, work out, take part, go out, get dressed, put on, take off, " +
        "try on, write down, get back, bring back, give back, make-up, pencil " +
        "case, text message, video game, social media, working hours, a few, " +
        "lots",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): accident /ˈæksɪdənt/, ambulance " +
        "/ˈæmbjʊləns/, suddenly /ˈsʌdnli/, careful /ˈkeəfl/, trouble /ˈtrʌbl/, " +
        "engine /ˈendʒɪn/, petrol /ˈpetrəl/, motorbike /ˈməʊtəbaɪk/, scooter " +
        "/ˈskuːtə/, tyre /ˈtaɪə/, helicopter /ˈhelɪkɒptə/, roundabout " +
        "/ˈraʊndəbaʊt/, deliver /dɪˈlɪvə/, receipt /rɪˈsiːt/, crossing " +
        "/ˈkrɒsɪŋ/, lose /luːz/, lost /lɒst/",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "связывать длительное и законченное действие: I was cooking when he came",
    "ставить while там, где после союза идёт длительное действие",
    "ставить запятую, когда часть с союзом стоит впереди",
    "соединять два длительных действия словом while",
    "рассказывать о случае в три хода",
    "понимать рассказ, где длительное действие прервано законченным",
    "слышать в записи, что шло и что случилось",
    "проверять рассказ: там ли стоит while",
    "называть дом и дела по дому: wash up, tidy up, put on",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "dva-deystviya-razom",
      title: "Два действия разом: I was cooking when he came",
      estimatedMinutes: 15,
      outcome: "связывать длительное и законченное действие: I was cooking when he came",
      vozvrat: [{ iz: "chto-proishodilo", zadanie: "z2-vybrat-formu" }],

      blocks: [
        {
          id: "zachem-dva-deystviya",
          kind: "explain",
          text: [
            "Вчера шла готовка, и посреди неё пришёл сослуживец.",
            "Одно действие тянулось, другое случилось разом — и оба в одной строке.",
            "I was cooking when my colleague came. — Я готовил, когда пришёл сослуживец.",
            "Русская строка различает эти два дела не хуже английской: «готовил» тянулось, «пришёл» случилось разом.",
            "Только по-русски разницу несёт сам глагол, а по-английски — время.",
            "Длительное действие берёт was и окончание -ing, законченное — форму прошедшего.",
            "У этих двух времён есть имена: длительное — Past Continuous, законченное — Past Simple.",
          ],
        },
        {
          id: "dve-poloviny-stroki",
          kind: "table",
          caption: "Две половины одной строки",
          zvuchat: [
            "I was cooking",
            "when my colleague came",
            "She was waiting at the crossing",
            "when she saw the accident",
            "They were walking home",
            "when the ambulance arrived",
          ],
          head: ["Что тянулось", "Что случилось"],
          rows: [
            ["I was cooking", "when my colleague came"],
            ["She was waiting at the crossing", "when she saw the accident"],
            ["They were walking home", "when the ambulance arrived"],
          ],
        },
        {
          id: "pochemu-dve-formy-ryadom",
          kind: "explain",
          text: [
            "Левая половина показывает, что уже шло к тому мигу.",
            "Правая называет то, что случилось и заняло один миг.",
            "Поэтому формы у них разные.",
            "Поменяешь местами — строка останется верной, но скажет другое: об этом врезка ниже.",
          ],
        },
        {
          id: "ne-oba-odinakovo",
          kind: "note",
          tone: "mistake",
          text:
            "«I cooked when my colleague came» говорит другое: сначала пришёл " +
            "сослуживец, а потом началась готовка.\n\nЧтобы сказать, что готовка уже " +
            "шла, левая половина берёт was cooking.",
        },
        {
          id: "primer-o-sluchae-na-doroge",
          kind: "example",
          caption: "Случай на дороге",
          zvuchat: [
            "I was walking home when I saw an accident.",
            "A car stopped near the crossing.",
            "The ambulance arrived very quickly.",
          ],
          text:
            "I was walking home when I saw an accident.\nA car stopped near the crossing.\nThe ambulance arrived very quickly.",
          perevod: {
            "I was walking home when I saw an accident.":
              "Я шёл домой, когда увидел аварию.",
            "A car stopped near the crossing.": "У перехода остановилась машина.",
            "The ambulance arrived very quickly.": "Скорая приехала очень быстро.",
          },
          explain:
            "В первой строке две половины: ходьба уже шла, а вид происшествия случился " +
            "разом. Во второй и третьей строках названо только то, что случилось.",
        },
        {
          id: "slovar-proisshestviya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "accident", translation: "происшествие, авария", example: "I saw an accident.", hint: "/ˈæksɪdənt/" },
            { term: "ambulance", translation: "скорая помощь", example: "The ambulance arrived very quickly.", hint: "/ˈæmbjʊləns/" },
            { term: "crossing", translation: "пешеходный переход", example: "A car stopped near the crossing.", hint: "/ˈkrɒsɪŋ/" },
            { term: "suddenly", translation: "вдруг", example: "Suddenly a car stopped.", hint: "/ˈsʌdnli/" },
            { term: "luckily", translation: "к счастью", example: "Luckily, nobody was hurt.", hint: "/ˈlʌkɪli/" },
            { term: "hurt", translation: "пострадать, ушибиться", example: "Luckily, nobody was hurt.", hint: "/hɜːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dlitelnoe",
          kind: "gap",
          prompt: "Готовка уже шла к тому мигу. Допиши недостающее слово.",
          before: "I ",
          after: " cooking when my colleague came.",
          answer: "was",
          hint: "Левая половина берёт ту же форму, что и всякое длительное действие.",
          why:
            "I was cooking when my colleague came. Длительное действие держится на " +
            "was и окончании -ing.",
        },
        {
          id: "z2-vybrat-paru-form",
          kind: "choice",
          prompt: "Ожидание уже шло, а потом приехала скорая. Какая запись это говорит?",
          options: [
            { text: "She waited when the ambulance arrived." },
            { text: "She was waiting when the ambulance arrived.", correct: true },
            { text: "She was waiting when the ambulance was arriving." },
          ],
          hint: "Первая половина должна тянуться, вторая — занять один миг.",
          why:
            "She was waiting when the ambulance arrived. Ожидание тянулось, поэтому " +
            "was waiting, а приезд занял миг, поэтому arrived.",
        },
        {
          id: "z3-otmetit-chto-tyanulos",
          kind: "hottext",
          prompt: "Отметь половины, которые говорят о длительном действии.",
          parts: [
            { text: "I was walking home", selectable: true, correct: true },
            { text: " · " },
            { text: "when I saw an accident", selectable: true },
            { text: " · " },
            { text: "They were waiting at the crossing", selectable: true, correct: true },
            { text: " · " },
            { text: "when the ambulance arrived", selectable: true },
          ],
          hint: "У длительного действия рядом с глаголом стоит форма was или were.",
          why:
            "О длительном действии говорят I was walking home и They were waiting at " +
            "the crossing. Две другие половины называют то, что случилось разом.",
        },
        {
          id: "z4-sobrat-dve-poloviny",
          kind: "order",
          prompt: "Собери строку: готовка шла, и в этот миг пришёл сослуживец.",
          items: ["came.", "when my colleague", "cooking", "was", "I"],
          answer: [4, 3, 2, 1, 0],
          hint: "Сначала то, что тянулось, потом when и то, что случилось.",
          why:
            "I was cooking when my colleague came. Длительное действие идёт первым, " +
            "законченное — после when.",
        },
        {
          id: "z5-napisat-o-hodbe",
          kind: "short",
          prompt:
            "Скажи о себе по-английски: ходьба домой шла, и в этот миг случилось увидеть происшествие. Начни с I was walking.",
          answer: "I was walking home when I saw an accident.",
          accept: [
            "I was walking home when I saw an accident",
            "I was walking home when I saw the accident.",
            "I was walking home when I saw the accident",
          ],
          hint: "Левая половина берёт was и окончание -ing, правая — форму saw.",
          why:
            "I was walking home when I saw an accident. Ходьба тянулась, а вид " +
            "происшествия занял миг.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "when-i-while",
      title: "While: что стоит после него",
      estimatedMinutes: 15,
      outcome: "ставить while там, где после союза идёт длительное действие",

      blocks: [
        {
          id: "zachem-dva-soyuza",
          kind: "explain",
          text: [
            "Связать две половины можно двумя словами: when и while.",
            "Такие связывающие слова называют союзами.",
            "Оба переводятся «когда», но ведут себя по-разному.",
          ],
        },
        {
          id: "chto-posle-soyuza",
          kind: "table",
          caption: "Что стоит после союза",
          zvuchat: [
            "while I was walking to the shop",
            "while she was looking for the wallet",
            "when I lost my purse",
            "when I was walking home",
          ],
          head: ["Союз", "Что стоит после него", "Пример"],
          rows: [
            ["while", "чаще всего длительное действие", "while I was walking to the shop"],
            ["while", "чаще всего длительное действие", "while she was looking for the wallet"],
            ["when", "то, что случилось", "when I lost my purse"],
            ["when", "или то, что шло", "when I was walking home"],
          ],
        },
        {
          id: "pochemu-while-svyazan",
          kind: "explain",
          text: [
            "While само значит «пока», и потому после него обычно стоит то, что тянулось.",
            "When называет тот миг, о котором речь, и после него встречается и то, и другое.",
            "Выбор идёт по смыслу: тянулось — берут while, случилось разом — when.",
          ],
        },
        {
          id: "chto-znachit-while",
          kind: "note",
          tone: "info",
          text:
            "While ставят там, где действие тянулось: while I was walking to the " +
            "shop.\n\nWhen берёт и то, что случилось, и то, что шло, — за ним " +
            "следить не нужно.",
        },
        {
          id: "primer-o-poteryannom-koshelke",
          kind: "example",
          caption: "Пропажа кошелька",
          zvuchat: [
            "While I was walking to the shop, I lost my purse.",
            "I dropped it near the roundabout.",
            "The wallet was missing too.",
          ],
          text:
            "While I was walking to the shop, I lost my purse.\nI dropped it near the roundabout.\nThe wallet was missing too.",
          perevod: {
            "While I was walking to the shop, I lost my purse.":
              "Пока я шёл в магазин, я потерял кошелёк.",
            "I dropped it near the roundabout.": "Я обронил его у кольца.",
            "The wallet was missing too.": "Бумажника тоже не было.",
          },
          explain:
            "В первой строке после while стоит длительное действие, и это его " +
            "обычное место. Вторая и третья строки союза не берут вовсе.",
        },
        {
          id: "slovar-propazhi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "lose", translation: "терять", example: "I lose my key every week.", hint: "/luːz/" },
            { term: "lost", translation: "потерял", example: "I lost my purse.", hint: "/lɒst/" },
            { term: "wallet", translation: "бумажник", example: "The wallet was missing too.", hint: "/ˈwɒlɪt/" },
            { term: "purse", translation: "кошелёк", example: "I lost my purse.", hint: "/pɜːs/" },
            { term: "drop", translation: "ронять", example: "I dropped it near the roundabout.", hint: "/drɒp/" },
            { term: "missing", translation: "пропавший", example: "The wallet was missing too.", hint: "/ˈmɪsɪŋ/" },
            { term: "roundabout", translation: "круговое движение", example: "I was near the roundabout.", hint: "/ˈraʊndəbaʊt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-while",
          kind: "gap",
          prompt: "После союза идёт длительное действие. Допиши союз.",
          before: "",
          after: " I was walking to the shop, I lost my purse.",
          answer: "While",
          hint: "Одно из двух слов значит «пока».",
          why:
            "While I was walking to the shop, I lost my purse. После while стоит " +
            "длительное действие.",
        },
        {
          id: "z2-vybrat-formy-pri-while",
          kind: "choice",
          prompt: "Ходьба шла, а кошелёк пропал разом. Какая запись это говорит?",
          options: [
            { text: "While I walked to the shop, I was losing my purse." },
            { text: "While I was walking to the shop, I lost my purse.", correct: true },
            { text: "While I was walking to the shop, I was losing my purse." },
          ],
          hint: "Пропажа заняла один миг, а ходьба тянулась.",
          why:
            "While I was walking to the shop, I lost my purse. После while стоит " +
            "длительное действие, а пропажа заняла миг и потому взяла форму lost.",
        },
        {
          id: "z3-otmetit-dlitelnoe-posle-while",
          kind: "hottext",
          prompt: "Отметь части, где после while стоит длительное действие.",
          parts: [
            { text: "while I was cooking", selectable: true, correct: true },
            { text: " · " },
            { text: "while my colleague came", selectable: true },
            { text: " · " },
            { text: "while the rain was falling", selectable: true, correct: true },
            { text: " · " },
            { text: "while the bus arrived", selectable: true },
          ],
          hint: "У длительного действия стоит форма was или were и окончание -ing.",
          why:
            "Длительное действие стоит в while I was cooking и while the rain was " +
            "falling. В двух других после while названо то, что заняло миг.",
        },
        {
          id: "z4-sopostavit-poloviny",
          kind: "match",
          prompt: "Соедини начало с концом. В каждом конце есть слово из своего начала.",
          left: ["While I was reading a book,", "When I opened the door,", "While she was cooking dinner,"],
          right: ["I helped her with the dinner.", "I dropped the book.", "my sister came in."],
          answer: [1, 2, 0],
          hint: "Ищи в ответах слова book, дверь и dinner.",
          why:
            "While I was reading a book, I dropped the book. When I opened the door, " +
            "my sister came in. While she was cooking dinner, I helped her with the " +
            "dinner.",
        },
        {
          id: "z5-napisat-s-while",
          kind: "short",
          prompt:
            "Скажи о себе по-английски: пока шла ходьба в магазин, кошелёк потерялся. Начни с While I was walking.",
          answer: "While I was walking to the shop, I lost my purse.",
          accept: [
            "While I was walking to the shop, I lost my purse",
            "While I was walking to the shop I lost my purse.",
            "While I was walking to the shop I lost my purse",
          ],
          hint: "После While ставь длительное действие, а потом запятую и вторую половину.",
          why:
            "While I was walking to the shop, I lost my purse. После While стоит " +
            "длительное действие.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-vperedi",
      title: "Что впереди: запятая при перестановке",
      estimatedMinutes: 14,
      outcome: "ставить запятую, когда часть с союзом стоит впереди",

      blocks: [
        {
          id: "zachem-perestanovka",
          kind: "explain",
          text: [
            "Половины строки можно ставить в любом порядке.",
            "I was cooking when he came и When he came, I was cooking значат одно и то же.",
            "Меняется только одно: запятая.",
          ],
        },
        {
          id: "gde-zapyataya",
          kind: "table",
          caption: "Порядок и запятая",
          zvuchat: [
            "I was cooking when he came.",
            "When he came, I was cooking.",
            "I lost my purse while I was walking.",
            "While I was walking, I lost my purse.",
          ],
          head: ["Порядок", "Запись"],
          rows: [
            ["часть с союзом позади", "I was cooking when he came."],
            ["часть с союзом впереди", "When he came, I was cooking."],
            ["часть с союзом позади", "I lost my purse while I was walking."],
            ["часть с союзом впереди", "While I was walking, I lost my purse."],
          ],
        },
        {
          id: "pochemu-zapyataya",
          kind: "explain",
          text: [
            "Запятая стоит в двух записях из четырёх, и обе начинаются с союза.",
            "Она показывает, где кончилась часть с союзом и началась главная.",
            "Когда часть с союзом идёт позади, разделять нечего, и запятая не нужна.",
          ],
        },
        {
          id: "zapyataya-i-vvodnoe-slovo",
          kind: "note",
          tone: "info",
          text:
            "Запятая бывает в строке и по другой причине — после вводного слова: " +
            "Unfortunately, I did not open the door.\n\nЭто другой случай, и с союзом " +
            "он не связан.",
        },
        {
          id: "primer-o-dostavke",
          kind: "example",
          caption: "Посылка у двери",
          zvuchat: [
            "When the postman called, I was cleaning the stairs.",
            "Unfortunately, I did not open the door.",
            "Immediately I looked for the receipt.",
            "While they were delivering the parcel, I was waiting at the door.",
            "Carefully I opened the box.",
          ],
          text:
            "When the postman called, I was cleaning the stairs.\nUnfortunately, I did not open the door.\nImmediately I looked for the receipt.\nWhile they were delivering the parcel, I was waiting at the door.\nCarefully I opened the box.",
          perevod: {
            "When the postman called, I was cleaning the stairs.":
              "Когда пришёл почтальон, я мыл лестницу.",
            "Unfortunately, I did not open the door.": "К сожалению, я не открыл дверь.",
            "Immediately I looked for the receipt.": "Я сразу же стал искать квитанцию.",
            "While they were delivering the parcel, I was waiting at the door.":
              "Пока посылку несли, я ждал у двери.",
            "Carefully I opened the box.": "Я осторожно открыл коробку.",
          },
          explain:
            "В первой и четвёртой строках часть с союзом стоит впереди, и потому в " +
            "середине запятая. Во второй запятая стоит после вводного слова, а в " +
            "третьей и пятой её нет вовсе.",
        },
        {
          id: "slovar-dostavki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "carefully", translation: "осторожно, внимательно", example: "She was driving carefully.", hint: "/ˈkeəfəli/" },
            { term: "immediately", translation: "сразу же", example: "Immediately I looked for the receipt.", hint: "/ɪˈmiːdiətli/" },
            { term: "unfortunately", translation: "к сожалению", example: "Unfortunately, I did not open the door.", hint: "/ʌnˈfɔːtʃənətli/" },
            { term: "receipt", translation: "чек", example: "Immediately I looked for the receipt.", hint: "/rɪˈsiːt/" },
            { term: "deliver", translation: "доставлять", example: "They were delivering a book.", hint: "/dɪˈlɪvə/" },
            { term: "trouble", translation: "неприятность", example: "There was no trouble.", hint: "/ˈtrʌbl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-postavit-zapyatuyu",
          kind: "short",
          prompt:
            "Поставь недостающий знак и запиши целиком: «When the postman called I was cleaning the stairs.»",
          answer: "When the postman called, I was cleaning the stairs.",
          accept: ["When the postman called, I was cleaning the stairs"],
          hint: "Часть с союзом стоит впереди, и её надо отделить.",
          why:
            "When the postman called, I was cleaning the stairs. Запятая показывает, " +
            "где кончилась часть с союзом.",
        },
        {
          id: "z2-perestavit-poloviny",
          kind: "order",
          prompt: "Собери ту же мысль, начав с части со while.",
          items: ["I lost my purse.", "I was walking,", "While"],
          answer: [2, 1, 0],
          hint: "Впереди союз, потом длительное действие с запятой, потом вторая половина.",
          why:
            "While I was walking, I lost my purse. Часть с while стоит впереди, и " +
            "после неё запятая.",
        },
        {
          id: "z3-otmetit-gde-nuzhna-zapyataya",
          kind: "hottext",
          prompt: "Отметь записи, где часть с союзом стоит впереди и запятая нужна.",
          parts: [
            { text: "When the postman called I was cleaning", selectable: true, correct: true },
            { text: " · " },
            { text: "I was cleaning when the postman called", selectable: true },
            { text: " · " },
            { text: "While I was sleeping she was driving", selectable: true, correct: true },
            { text: " · " },
            { text: "She was driving while I was sleeping", selectable: true },
          ],
          hint: "Смотри на первое слово записи: если это союз, запятая нужна.",
          why:
            "Запятая нужна в When the postman called и While I was sleeping: обе " +
            "записи начинаются с союза. В двух других часть с союзом стоит позади.",
        },
        {
          id: "z4-sopostavit-poryadok",
          kind: "match",
          prompt: "Соедини запись с тем, как в ней стоят половины.",
          left: [
            "When the postman called, I was cleaning.",
            "I was cleaning when the postman called.",
            "While I was cleaning, the postman called.",
          ],
          right: [
            "впереди часть со while, запятая есть",
            "впереди часть с when, запятая есть",
            "часть с союзом позади, запятой нет",
          ],
          answer: [1, 2, 0],
          hint: "Смотри на первое слово записи и на запятую.",
          why:
            "Первая запись начинается с when и берёт запятую. Вторая ставит часть с " +
            "союзом позади и обходится без запятой. Третья начинается с while.",
        },
        {
          id: "z5-napisat-s-perestanovkoy",
          kind: "short",
          prompt:
            "Перепиши эту мысль, начав с части с When: «I was cleaning the stairs when the postman called.»",
          answer: "When the postman called, I was cleaning the stairs.",
          accept: ["When the postman called, I was cleaning the stairs"],
          hint: "Часть с When уходит вперёд, и после неё нужна запятая.",
          why:
            "When the postman called, I was cleaning the stairs. Половины поменялись " +
            "местами, и запятая встала в середину.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dva-dlitelnyh",
      title: "Два длительных разом: while she was driving",
      estimatedMinutes: 14,
      outcome: "соединять два длительных действия словом while",
      vozvrat: [{ iz: "vchera-ya-rabotal", zadanie: "z1-dopisat-ed" }],

      blocks: [
        {
          id: "zachem-dva-dlitelnyh",
          kind: "explain",
          text: [
            "Иногда ни одно из двух действий не занимало миг: оба тянулись разом.",
            "Тогда обе половины берут was или were с окончанием -ing.",
            "Связывает их while, и это его прямое дело.",
          ],
        },
        {
          id: "oba-dlitelnyh",
          kind: "table",
          caption: "Оба действия тянулись",
          zvuchat: [
            "She was driving",
            "while I was sleeping",
            "I was cleaning the engine",
            "while my brother was waiting",
            "They were talking",
            "while the rain was falling",
          ],
          head: ["Первое действие", "Второе действие"],
          rows: [
            ["She was driving", "while I was sleeping"],
            ["I was cleaning the engine", "while my brother was waiting"],
            ["They were talking", "while the rain was falling"],
          ],
        },
        {
          id: "pochemu-tolko-while",
          kind: "explain",
          text: [
            "После while стоит длительное действие — значит для этого случая он и создан.",
            "Формы was и were выбираются в каждой половине отдельно, по своему лицу.",
            "Порядок половин любой: важно, что после while стоит то, что тянулось.",
          ],
        },
        {
          id: "primer-o-poezdke-na-mopede",
          kind: "example",
          caption: "По дороге за город",
          zvuchat: [
            "My brother was cleaning the engine while I was checking the wheel.",
            "The scooter was old, and the tyre was broken.",
            "We bought petrol near the motorway.",
          ],
          text:
            "My brother was cleaning the engine while I was checking the wheel.\nThe scooter was old, and the tyre was broken.\nWe bought petrol near the motorway.",
          perevod: {
            "My brother was cleaning the engine while I was checking the wheel.":
              "Мой брат чистил двигатель, пока я проверял колесо.",
            "The scooter was old, and the tyre was broken.":
              "Мопед был старый, и шина была пробита.",
            "We bought petrol near the motorway.": "Бензин мы купили у трассы.",
          },
          explain:
            "В первой строке оба действия тянулись, и между ними стоит while. Во " +
            "второй сказано, каким что-то было, а в третьей — что случилось.",
        },
        {
          id: "slovar-transporta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "engine", translation: "двигатель", example: "My brother was cleaning the engine.", hint: "/ˈendʒɪn/" },
            { term: "petrol", translation: "бензин", example: "We bought petrol near the motorway.", hint: "/ˈpetrəl/" },
            { term: "wheel", translation: "колесо", example: "I was checking the wheel.", hint: "/wiːl/" },
            { term: "motorbike", translation: "мотоцикл", example: "The motorbike stopped near the crossing.", hint: "/ˈməʊtəbaɪk/" },
            { term: "scooter", translation: "самокат, мопед", example: "The scooter was old.", hint: "/ˈskuːtə/" },
            { term: "tyre", translation: "шина", example: "The tyre was broken.", hint: "/ˈtaɪə/" },
            { term: "drive", translation: "вести машину", example: "She was driving to work.", hint: "/draɪv/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-vtoroe-dlitelnoe",
          kind: "gap",
          prompt: "Оба действия тянулись. Допиши недостающее слово во второй половине.",
          before: "She was driving while I ",
          after: " sleeping.",
          answer: "was",
          hint: "Речь об одном человеке, и форма при нём короткая.",
          why: "She was driving while I was sleeping. При I стоит was.",
        },
        {
          id: "z2-vybrat-formy-dlya-dvuh",
          kind: "choice",
          prompt: "Разговор шёл, и дождь шёл в то же время. Какая запись это говорит?",
          options: [
            { text: "They talked while the rain was falling." },
            { text: "They were talking while the rain was falling.", correct: true },
            { text: "They were talking while the rain stopped." },
          ],
          hint: "Тянуться должны обе половины сразу.",
          why:
            "They were talking while the rain was falling. В обеих половинах стоит " +
            "форма was или were и окончание -ing.",
        },
        {
          id: "z3-otmetit-dva-dlitelnyh",
          kind: "hottext",
          prompt: "Отметь записи, где оба действия тянулись.",
          parts: [
            { text: "She was driving while I was sleeping", selectable: true, correct: true },
            { text: " · " },
            { text: "She was driving when I called", selectable: true },
            { text: " · " },
            { text: "They were talking while the rain was falling", selectable: true, correct: true },
            { text: " · " },
            { text: "They were talking when the bus arrived", selectable: true },
          ],
          hint: "Смотри на обе половины сразу: есть ли was или were в каждой.",
          why:
            "Оба действия тянулись в She was driving while I was sleeping и They were " +
            "talking while the rain was falling. В двух других вторая половина " +
            "называет то, что случилось разом.",
        },
        {
          id: "z4-sobrat-dva-dlitelnyh",
          kind: "order",
          prompt: "Собери строку о себе: пока брат чистил двигатель, шла проверка колеса.",
          items: ["the wheel.", "I was checking", "while", "was cleaning the engine", "My brother"],
          answer: [4, 3, 2, 1, 0],
          hint: "Сначала первое действие целиком, потом while, потом второе.",
          why:
            "My brother was cleaning the engine while I was checking the wheel. Оба " +
            "действия тянулись, и между ними стоит while.",
        },
        {
          id: "z5-napisat-dva-dlitelnyh",
          kind: "short",
          prompt:
            "Скажи по-английски: сестра вела машину, а в это время шёл дождь. Начни с My sister was driving.",
          answer: "My sister was driving while the rain was falling.",
          accept: [
            "My sister was driving while the rain was falling",
            "My sister was driving while it was raining.",
            "My sister was driving while it was raining",
          ],
          hint: "Оба действия тянулись, значит в обеих половинах стоит was.",
          why:
            "My sister was driving while the rain was falling. Оба действия тянулись, " +
            "и связывает их while.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-sluchae",
      title: "Рассказ о том, как это вышло",
      estimatedMinutes: 15,
      outcome: "рассказывать о случае в три хода",

      blocks: [
        {
          id: "zachem-rasskaz-o-sluchae",
          kind: "explain",
          text: [
            "Рассказ о случае строится в три хода.",
            "Сначала говорят, что уже шло. Потом — что случилось. Потом — чем это кончилось.",
            "Первый ход берёт длительное действие, второй — законченное.",
          ],
        },
        {
          id: "tri-hoda-rasskaza",
          kind: "table",
          caption: "Три хода рассказа",
          zvuchat: [
            "I was looking for my key.",
            "Suddenly the lock opened.",
            "Luckily, the battery was new.",
          ],
          head: ["Ход", "Что в нём", "Пример"],
          rows: [
            ["что шло", "длительное действие", "I was looking for my key."],
            ["что случилось", "законченное действие", "Suddenly the lock opened."],
            ["чем кончилось", "оценка или короткий итог", "Luckily, the battery was new."],
          ],
        },
        {
          id: "pochemu-imenno-tak",
          kind: "explain",
          text: [
            "Первый ход нужен, чтобы слушающий понял обстановку.",
            "Без него рассказ начинается с середины, и случай повисает в пустоте.",
            "Третий ход действия уже не требует: там обычно говорят, чем всё обернулось.",
          ],
        },
        {
          id: "ne-nachinat-so-sluchivshegosya",
          kind: "note",
          tone: "info",
          text:
            "Начать сразу со второго хода можно, но тогда обстановку придётся " +
            "объяснять после.\n\nДержись порядка: сперва что шло, потом что случилось.",
        },
        {
          id: "primer-rasskaza-o-klyuche",
          kind: "example",
          caption: "Ключ и замок",
          zvuchat: [
            "I was looking for my key while my sister was waiting outside.",
            "Suddenly the lock opened.",
            "Luckily, the battery in my phone was new.",
          ],
          text:
            "I was looking for my key while my sister was waiting outside.\nSuddenly the lock opened.\nLuckily, the battery in my phone was new.",
          perevod: {
            "I was looking for my key while my sister was waiting outside.":
              "Я искал ключ, пока сестра ждала снаружи.",
            "Suddenly the lock opened.": "Вдруг замок открылся.",
            "Luckily, the battery in my phone was new.":
              "К счастью, батарея в телефоне была новая.",
          },
          explain:
            "Три строки и три хода: сперва два длительных действия, потом то, что " +
            "случилось, потом оценка того, чем всё кончилось.",
        },
        {
          // Свод связки «Прошедшее» — модули 1–7. Стоит здесь, в последнем уроке
          // правил части: дальше идут чтение, слушание и письмо, а к ним ученик
          // подходит, уже имея всё прошедшее в одном месте.
          id: "vsyo-o-proshlom-svod",
          kind: "table",
          caption: "Всё о прошлом в одном месте",
          zvuchat: [
            "The film was good.",
            "I worked yesterday.",
            "I went to Astana.",
            "I didn't work.",
            "Did you work?",
            "I was working at seven.",
          ],
          head: ["По-английски", "По-русски", "О чём речь"],
          rows: [
            ["The film was good.", "Фильм был хороший.", "каким что-то было"],
            ["I worked yesterday.", "Вчера я работал.", "дело было"],
            ["I went to Astana.", "Я ездил в Астану.", "дело было, глагол особый"],
            ["I didn't work.", "Я не работал.", "дела не было"],
            ["Did you work?", "Вы работали?", "спросить о деле"],
            ["I was working at seven.", "В семь я работал.", "дело шло в тот миг"],
          ],
        },
        {
          id: "chem-derzhitsya-vsyo-proshloe",
          kind: "explain",
          text: [
            "Шесть строк — это весь рассказ о прошлом, какой даёт эта часть курса.",
            "Посмотри на средний столбец: по-русски прошедшее у всех шести показано одинаково — «был», «работал», «ездил».",
            "По-английски способов шесть, и выбирают их по тому, о чём речь.",
            "Каждому отведён свой модуль: «Это было», «Вчера я работал», «Неправильные глаголы», «Я не делал», «Спросить о прошлом», «Что происходило».",
          ],
        },
        {
          id: "slovar-melochey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "lock", translation: "замо́к (на двери)", example: "Suddenly the lock opened.", hint: "/lɒk/" },
            { term: "battery", translation: "батарейка", example: "The battery in my phone was new.", hint: "/ˈbætəri/" },
            { term: "glove", translation: "перчатка", example: "I dropped my glove near the lock.", hint: "/glʌv/" },
            { term: "scarf", translation: "шарф", example: "My scarf was in the bag.", hint: "/skɑːf/" },
            { term: "danger", translation: "опасность", example: "There was no danger.", hint: "/ˈdeɪndʒə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nayti-pervyy-hod",
          kind: "choice",
          prompt: "С какой строки начинают рассказ о случае?",
          options: [
            { text: "Suddenly the lock opened." },
            { text: "I was looking for my key.", correct: true },
            { text: "Luckily, the battery was new." },
          ],
          hint: "Первый ход говорит об обстановке, а не о том, что случилось.",
          why:
            "I was looking for my key. Первый ход берёт длительное действие и " +
            "показывает, что уже шло.",
        },
        {
          id: "z2-vybrat-vtoroy-hod",
          kind: "choice",
          prompt: "Обстановка названа: I was waiting at the gate. Какая строка идёт следом?",
          options: [
            { text: "I was waiting for a long time." },
            { text: "I was looking at the timetable." },
            { text: "Suddenly a scooter stopped near me.", correct: true },
          ],
          hint: "Второй ход называет то, что случилось разом.",
          why:
            "Suddenly a scooter stopped near me. Две другие строки снова говорят о " +
            "том, что тянулось, а рассказ уже ждёт случившегося.",
        },
        {
          id: "z3-otmetit-hody",
          kind: "hottext",
          prompt: "Отметь строки, где названо то, что случилось разом.",
          parts: [
            { text: "Suddenly the lock opened", selectable: true, correct: true },
            { text: " · " },
            { text: "I was looking for my key", selectable: true },
            { text: " · " },
            { text: "I dropped my glove near the lock", selectable: true, correct: true },
            { text: " · " },
            { text: "My sister was waiting outside", selectable: true },
          ],
          hint: "У случившегося нет окончания -ing.",
          why:
            "Случились Suddenly the lock opened и I dropped my glove near the lock. " +
            "Две другие строки говорят о том, что тянулось.",
        },
        {
          id: "z4-sobrat-rasskaz",
          kind: "order",
          prompt: "Собери рассказ по ходам: что шло, что случилось, чем кончилось.",
          items: [
            "Luckily, the battery was new.",
            "Suddenly the lock opened.",
            "I was looking for my key.",
          ],
          answer: [2, 1, 0],
          hint: "Порядок ходов назван в самом задании.",
          why:
            "I was looking for my key. Suddenly the lock opened. Luckily, the battery " +
            "was new. Порядок взят из условия задания.",
        },
        {
          id: "z5-napisat-pervyy-hod",
          kind: "short",
          prompt:
            "Начни рассказ о случае: скажи о себе, что поиск ключа шёл. Начни с I was looking.",
          answer: "I was looking for my key.",
          accept: [
            "I was looking for my key",
            "I was looking for the key.",
            "I was looking for the key",
          ],
          hint: "Первый ход берёт длительное действие: was и окончание -ing.",
          why:
            "I was looking for my key. Первый ход рассказа показывает, что уже шло.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-proisshestvii",
      title: "Читаем о происшествии на дороге",
      estimatedMinutes: 13,
      outcome: "понимать рассказ, где длительное действие прервано законченным",

      blocks: [
        {
          id: "zachem-chitat-o-proisshestvii",
          kind: "explain",
          text: [
            "В рассказе о случае две линии идут разом.",
            "Одна показывает обстановку, другая двигает события.",
            "Ниже сообщение о том, что случилось по дороге домой.",
          ],
        },
        {
          id: "soobshchenie-o-proisshestvii",
          kind: "text",
          title: "Сообщение от Айгуль",
          genre: "message",
          body: [
            "Yesterday I was walking home from work when I saw an accident near the crossing.",
            "A motorbike stopped very quickly, and the driver dropped his glove on the track.",
            "While the ambulance was coming, two people were helping him. The driver was in danger, but the trouble was over quickly. Luckily, nobody was hurt, and he was safe.",
            "A helicopter was going over the road at that moment. Some children were crying.",
            "When the ambulance arrived, I walked home. Unfortunately, I lost my scarf on the way.",
          ],
          glossary: [
            { term: "from work", translation: "с работы" },
            { term: "quickly", translation: "быстро" },
            { term: "over", translation: "над" },
            { term: "on the way", translation: "по дороге" },
          ],
        },
        {
          id: "kak-ustroen-rasskaz-o-sluchae",
          kind: "note",
          tone: "info",
          text:
            "Обстановку в сообщении держат длительные действия: шла ходьба, ехала " +
            "скорая, летел вертолёт.\n\nСобытия двигают законченные: увидела, " +
            "остановился, уронил, пришла.",
        },
        {
          id: "slovar-chteniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "cry", translation: "плакать", example: "Some children were crying.", hint: "/kraɪ/" },
            { term: "helicopter", translation: "вертолёт", example: "A helicopter was going over the road.", hint: "/ˈhelɪkɒptə/" },
            { term: "track", translation: "дорожка, тропа", example: "The driver dropped his glove on the track.", hint: "/træk/" },
            { term: "safe", translation: "невредимый, в безопасности", example: "Everybody was safe.", hint: "/seɪf/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-shlo-snachala",
          kind: "choice",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Что шло, когда Айгуль увидела происшествие?",
          options: [
            { text: "Она ехала на автобусе" },
            { text: "Она шла домой с работы", correct: true },
            { text: "Она ждала на остановке" },
          ],
          hint: "Об этом сказано в первой строке.",
          why: "Yesterday I was walking home from work when I saw an accident.",
        },
        {
          id: "z2-chto-uronil-voditel",
          kind: "short",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Что уронил водитель? Ответь одним английским словом.",
          answer: "glove",
          accept: ["his glove", "the glove"],
          hint: "Загляни во вторую строку: там сказано, что упало на дорожку.",
          why: "The driver dropped his glove on the track.",
        },
        {
          id: "z3-otmetit-dlitelnye-v-tekste",
          kind: "hottext",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Отметь части сообщения, где стоит длительное действие.",
          parts: [
            { text: "the ambulance was coming", selectable: true, correct: true },
            { text: " · " },
            { text: "a motorbike stopped", selectable: true },
            { text: " · " },
            { text: "a helicopter was going over the road", selectable: true, correct: true },
            { text: " · " },
            { text: "the ambulance arrived", selectable: true },
          ],
          hint: "У длительного действия есть форма was или were и окончание -ing.",
          why:
            "Длительные — the ambulance was coming и a helicopter was going over the " +
            "road. Остановка мотоцикла и приход скорой заняли миг.",
        },
        {
          id: "z4-chto-poteryala",
          kind: "short",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Что Айгуль потеряла по дороге? Ответь одним английским словом.",
          answer: "scarf",
          accept: ["my scarf", "the scarf"],
          hint: "Об этом сказано в последней строке, после слов Unfortunately, I lost my.",
          why: "Unfortunately, I lost my scarf on the way.",
        },
        {
          id: "z5-postradal-li-kto",
          kind: "choice",
          about: "soobshchenie-o-proisshestvii",
          prompt: "Кто-нибудь пострадал?",
          options: [
            { text: "Водитель" },
            { text: "Никто, все были невредимы", correct: true },
            { text: "Дети" },
          ],
          hint: "Это сказано в третьей строке, после слова Luckily.",
          why: "Luckily, nobody was hurt, and he was safe.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-propazhe",
      title: "Слушаем о пропаже",
      estimatedMinutes: 13,
      outcome: "слышать в записи, что шло и что случилось",

      blocks: [
        {
          id: "zachem-slushat-dve-linii",
          kind: "explain",
          text: [
            "В рассказе на слух две линии идут вперемешку.",
            "Различать их помогает окончание -ing: где оно есть, там действие тянулось.",
            "Ниже запись: двое говорят о пропавшем кошельке.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-o-propazhe",
          kind: "audio",
          caption: "Разговор о пропаже",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "What were you doing when you lost it? — I was walking to the shop. — " +
            "And where were you then? — Near the roundabout. — Was the purse in your " +
            "bag? — No, it was in my pocket. I dropped it there. — That was bad " +
            "luck. Be careful with it.",
        },
        {
          id: "chto-slushat-o-propazhe",
          kind: "note",
          tone: "info",
          text:
            "Слушай, что человек делал, где он был в тот миг и где лежал " +
            "кошелёк.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-dorogi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "luck", translation: "удача", example: "It was good luck.", hint: "/lʌk/" },
            { term: "lucky", translation: "удачливый, счастливый", example: "I was lucky: the purse was safe.", hint: "/ˈlʌki/" },
            { term: "careful", translation: "осторожный", example: "My sister is careful with her wallet.", hint: "/ˈkeəfl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-delal-chelovek",
          kind: "choice",
          about: "zapis-o-propazhe",
          prompt: "Что человек делал, когда кошелёк пропал?",
          options: [
            { text: "Ждал автобус" },
            { text: "Шёл в магазин", correct: true },
            { text: "Считал деньги" },
          ],
          hint: "Ответ идёт сразу за первым вопросом записи.",
          why: "What were you doing when you lost it? — I was walking to the shop.",
        },
        {
          id: "z2-gde-byl",
          kind: "short",
          about: "zapis-o-propazhe",
          prompt: "Где человек был в тот миг? Ответь одним английским словом.",
          answer: "roundabout",
          accept: ["the roundabout", "near the roundabout"],
          hint: "Это слово стоит в ответе на второй вопрос записи.",
          why: "And where were you then? — Near the roundabout.",
        },
        {
          id: "z3-gde-lezhal-koshelek",
          kind: "short",
          about: "zapis-o-propazhe",
          prompt: "Где лежал кошелёк? Ответь одним английским словом.",
          answer: "pocket",
          accept: ["my pocket", "the pocket"],
          hint: "Это слово стоит после слов No, it was in my.",
          why: "No, it was in my pocket.",
        },
        {
          id: "z4-byl-li-koshelek-v-sumke",
          kind: "choice",
          about: "zapis-o-propazhe",
          prompt: "Кошелёк лежал в сумке?",
          options: [
            { text: "Да, в сумке" },
            { text: "В записи об этом не сказано" },
            { text: "Нет, в кармане", correct: true },
          ],
          hint: "На третий вопрос записи дан отрицательный ответ.",
          why: "Was the purse in your bag? — No, it was in my pocket.",
        },
        {
          id: "z5-vosstanovit-so-sluha",
          kind: "order",
          zvuk: "What were you doing when you lost it? — I was walking to the shop.",
          prompt: "Послушай запись и собери из карточек первый вопрос.",
          items: ["when you lost it?", "doing", "you", "were", "What"],
          answer: [4, 3, 2, 1, 0],
          hint: "Впереди вопросительное слово, за ним were, человек и действие.",
          why:
            "What were you doing when you lost it? Вопросительное слово стоит первым, " +
            "за ним were, потом человек и действие с окончанием.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-sluchae",
      title: "Пишем о том, как это вышло",
      estimatedMinutes: 15,
      outcome: "проверять рассказ: там ли стоит while",

      blocks: [
        {
          id: "zachem-proveryat-soyuz",
          kind: "explain",
          text: [
            "В рассказе о случае легче всего ошибиться в одном месте — после while.",
            "Проверить его можно так: посмотри, что стоит сразу за ним.",
            "Там должно быть длительное действие: форма was или were и окончание -ing.",
          ],
        },
        {
          id: "proverka-while",
          kind: "table",
          caption: "Что должно стоять после while",
          zvuchat: [
            "while I was waiting",
            "while the rain was falling",
            "while my brother was cleaning the engine",
          ],
          head: ["Запись", "Что после while", "Годится"],
          rows: [
            ["while I was waiting", "was и waiting", "да"],
            ["while the rain was falling", "was и falling", "да"],
            ["while my brother was cleaning the engine", "was и cleaning", "да"],
            ["while the bus arrived", "arrived, без -ing", "нет"],
          ],
        },
        {
          id: "pochemu-proverka-rabotaet",
          kind: "explain",
          text: [
            "Смотреть надо только вперёд: что стоит перед while, значения не имеет.",
            "Поэтому проверять можно по одной половине, не читая всей строки.",
            "За when следить не нужно: после него годится и то, и другое.",
          ],
        },
        {
          id: "obrazets-rasskaza",
          kind: "example",
          caption: "Образец рассказа",
          perevod: {
            "Yesterday I was waiting at the gate when a scooter stopped near me.":
              "Вчера я ждал у ворот, когда рядом остановился мопед.",
            "While the driver was looking at the wheel, I called my brother.":
              "Пока водитель смотрел на колесо, я позвонил брату.",
            "Unfortunately, my phone was cold and it stopped.":
              "К сожалению, телефон замёрз и выключился.",
            "Luckily, the bus arrived and I got home.":
              "К счастью, пришёл автобус, и я добрался домой.",
          },
          zvuchat: [
            "Yesterday I was waiting at the gate when a scooter stopped near me.",
            "While the driver was looking at the wheel, I called my brother.",
            "Unfortunately, my phone was cold and it stopped.",
            "Luckily, the bus arrived and I got home.",
          ],
          text:
            "Yesterday I was waiting at the gate when a scooter stopped near me.\nWhile the driver was looking at the wheel, I called my brother.\nUnfortunately, my phone was cold and it stopped.\nLuckily, the bus arrived and I got home.",
          explain:
            "Четыре строки. В первой после when стоит форма прошедшего, во второй " +
            "после while — длительное действие, и оба союза на своих местах.",
        },
        {
          id: "chto-proverit-v-rasskaze",
          kind: "note",
          tone: "info",
          text:
            "Проверь три вещи. Там, где дело тянулось, после while стоит форма was " +
            "и окончание -ing. В первой строке есть и длительное, и законченное. " +
            "Запятая есть там, где часть с союзом идёт впереди.\n\nЕсли союз " +
            "пришлось менять, проверь запятую заново.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-zapis-po-smyslu",
          kind: "choice",
          prompt: "Дождь шёл долго, а автобус пришёл разом. Какая запись говорит именно это?",
          options: [
            { text: "While the rain fell, the bus was arriving." },
            { text: "While the rain was falling, the bus arrived.", correct: true },
            { text: "While the rain was falling, the bus was arriving." },
          ],
          hint: "Форма was и окончание -ing стоят у того дела, которое тянулось.",
          why:
            "While the rain was falling, the bus arrived. У дождя was и -ing, потому " +
            "что он тянулся; у автобуса простая форма прошедшего, потому что он " +
            "пришёл разом. В третьей записи тянутся оба дела, и это уже другой смысл.",
        },
        {
          id: "z2-skazat-o-dlitelnom-posle-while",
          kind: "short",
          prompt:
            "Скорая ехала долго, и в это время был твой звонок брату. Скажи это по-английски, начав с While the ambulance.",
          answer: "While the ambulance was coming, I called my brother.",
          accept: [
            "While the ambulance was coming, I called my brother",
            "While the ambulance was arriving, I called my brother.",
            "While the ambulance was arriving, I called my brother",
          ],
          hint: "Глагол после while берёт форму was и окончание -ing: поездка тянулась.",
          why:
            "While the ambulance was coming, I called my brother. Форма was и " +
            "окончание -ing показывают, что поездка скорой тянулась, а звонок " +
            "случился внутри неё.",
        },
        {
          id: "z3-vybrat-zapyatuyu",
          kind: "choice",
          prompt: "В рассказе строка начинается с While. Какая запись верна?",
          options: [
            { text: "While the driver was looking at the wheel I called my brother." },
            { text: "While the driver was looking at the wheel, I called my brother.", correct: true },
            { text: "While, the driver was looking at the wheel I called my brother." },
          ],
          hint: "Запятая стоит там, где кончилась часть с союзом.",
          why:
            "While the driver was looking at the wheel, I called my brother. Часть с " +
            "союзом стоит впереди, и запятая идёт после неё.",
        },
        {
          id: "z4-napisat-rasskaz",
          kind: "essay",
          prompt:
            "Напиши рассказ о случае четырьмя строками. В первой скажи, что шло и что случилось, дальше — чем всё кончилось.",
          minWords: 15,
          sample:
            "Yesterday I was waiting at the gate when a scooter stopped near me.\nWhile the driver was looking at the wheel, I called my brother.\nUnfortunately, my phone was cold and it stopped.\nLuckily, the bus arrived and I got home.",
          checklist: [
            "в первой строке есть и длительное действие, и законченное",
            "после while стоит длительное действие",
            "запятая стоит там, где часть с союзом идёт впереди",
            "у длительного действия есть форма was или were и окончание -ing",
          ],
          hint: "Бери законченные действия, формы которых знаешь: came, saw, stopped, called, arrived.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы после while стояло " +
            "длительное действие.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slova-chasti-dom",
      title: "Слова о доме и дне",
      estimatedMinutes: 15,
      outcome: "называть дом и дела по дому: wash up, tidy up, put on",

      blocks: [
        {
          id: "zachem-slova-o-dome",
          kind: "explain",
          text: [
            "Рассказ о дне держится не на одной грамматике, а на словах о вещах вокруг.",
            "Здесь собраны слова о доме, о сборах и о делах, которые повторяются каждый день.",
            "Многие из них состоят из двух слов: wash up, put on, go out.",
            "Такую пару запоминают целиком: по частям её смысл виден не всегда.",
          ],
        },
        {
          id: "tri-komnaty",
          kind: "table",
          caption: "Комнаты",
          zvuchat: ["living room", "sitting room", "dining room"],
          head: ["Английский", "Перевод"],
          rows: [
            ["living room", "гостиная"],
            ["sitting room", "гостиная, второе имя той же комнаты"],
            ["dining room", "столовая"],
          ],
        },
        {
          id: "dva-imeni-odnoy-komnaty",
          kind: "note",
          tone: "info",
          text:
            "У гостиной два имени: living room и sitting room.\n\nВыбирать " +
            "между ними не надо — понятны оба.",
        },
        {
          id: "slovar-doma",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "living room", translation: "гостиная", example: "We were in the living room after dinner.", hint: "/ˈlɪvɪŋ ruːm/" },
            { term: "sitting room", translation: "гостиная (второе имя)", example: "My brother wanted to lie down in the sitting room.", hint: "/ˈsɪtɪŋ ruːm/" },
            { term: "dining room", translation: "столовая (комната в доме)", example: "I was tidying up the dining room.", hint: "/ˈdaɪnɪŋ ruːm/" },
            { term: "washing machine", translation: "стиральная машина", example: "The washing machine was working all evening.", hint: "/ˈwɒʃɪŋ məʃiːn/" },
            { term: "washing-up", translation: "мытьё посуды", example: "My sister was doing the washing-up.", hint: "/ˌwɒʃɪŋ ˈʌp/" },
            { term: "wash up", translation: "мыть посуду", example: "I washed up too.", hint: "/wɒʃ ˈʌp/" },
            { term: "tidy up", translation: "прибираться", example: "I was tidying up the dining room.", hint: "/ˌtaɪdi ˈʌp/" },
            { term: "lie down", translation: "прилечь", example: "My brother wanted to lie down in the sitting room.", hint: "/laɪ ˈdaʊn/" },
            { term: "sit down", translation: "сесть", example: "Then he sat down at the table with us.", hint: "/sɪt ˈdaʊn/" },
          ],
        },
        {
          id: "primer-vecher-doma",
          kind: "example",
          caption: "Вечер дома",
          zvuchat: [
            "We were in the living room after dinner.",
            "My sister was doing the washing-up in the kitchen.",
            "The washing machine was working all evening.",
            "I was tidying up the dining room.",
            "My brother wanted to lie down in the sitting room.",
            "Then he sat down at the table with us.",
            "I washed up too.",
          ],
          text:
            "We were in the living room after dinner.\nMy sister was doing the washing-up in the kitchen.\nThe washing machine was working all evening.\nI was tidying up the dining room.\nMy brother wanted to lie down in the sitting room.\nThen he sat down at the table with us.\nI washed up too.",
          perevod: {
            "We were in the living room after dinner.":
              "После ужина мы были в гостиной.",
            "My sister was doing the washing-up in the kitchen.":
              "Моя сестра мыла посуду на кухне.",
            "The washing machine was working all evening.":
              "Стиральная машина работала весь вечер.",
            "I was tidying up the dining room.": "Я прибирал в столовой.",
            "My brother wanted to lie down in the sitting room.":
              "Мой брат хотел прилечь в гостиной.",
            "Then he sat down at the table with us.":
              "Потом он сел за стол вместе с нами.",
            "I washed up too.": "Я тоже помыл посуду.",
          },
          explain:
            "Семь строк об одном вечере. Дела по дому чаще всего называют парой " +
            "слов: wash up, tidy up, lie down, sit down.",
        },
        {
          id: "slovar-sborov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "get dressed", translation: "одеться", example: "I got dressed and put on my coat.", hint: "/get ˈdrest/" },
            { term: "put on", translation: "надеть", example: "I got dressed and put on my coat.", hint: "/pʊt ˈɒn/" },
            { term: "take off", translation: "снять (одежду)", example: "The room was warm, and I took off my coat.", hint: "/teɪk ˈɒf/" },
            { term: "try on", translation: "примерить", example: "In the shop I tried on a new coat.", hint: "/traɪ ˈɒn/" },
            { term: "write down", translation: "записать", example: "I wrote down the address.", hint: "/raɪt ˈdaʊn/" },
            { term: "get back", translation: "вернуться (то же, что come back)", example: "I got back at six.", hint: "/get ˈbæk/" },
            { term: "go out", translation: "выйти из дома, отправиться куда-нибудь", example: "After that I went out.", hint: "/gəʊ ˈaʊt/" },
          ],
        },
        {
          id: "primer-utro-pered-vyhodom",
          kind: "example",
          caption: "Утро перед выходом",
          zvuchat: [
            "I got dressed and put on my coat.",
            "The room was warm, and I took off my coat.",
            "In the shop I tried on a new coat.",
            "I wrote down the address.",
            "After that I went out.",
            "I got back at six.",
          ],
          text:
            "I got dressed and put on my coat.\nThe room was warm, and I took off my coat.\nIn the shop I tried on a new coat.\nI wrote down the address.\nAfter that I went out.\nI got back at six.",
          perevod: {
            "I got dressed and put on my coat.": "Я оделся и надел пальто.",
            "The room was warm, and I took off my coat.":
              "В комнате было тепло, и я снял пальто.",
            "In the shop I tried on a new coat.":
              "В магазине я примерил новое пальто.",
            "I wrote down the address.": "Я записал адрес.",
            "After that I went out.": "После этого я вышел из дома.",
            "I got back at six.": "Я вернулся в шесть.",
          },
          explain:
            "Шесть строк по порядку: сборы, выход и возвращение. У каждой пары " +
            "второе слово короткое — on, off, down, out, back.",
        },
        {
          id: "slovar-del-po-domu",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "fall over", translation: "упасть", example: "People often fall over near the door.", hint: "/fɔːl ˈəʊvə/" },
            { term: "look out", translation: "берегись, осторожно", example: "Look out! The floor is wet.", hint: "/lʊk ˈaʊt/" },
            { term: "work out", translation: "заниматься спортом", example: "We work out every morning.", hint: "/wɜːk ˈaʊt/" },
            { term: "take part", translation: "участвовать", example: "Our class takes part in the competition.", hint: "/teɪk ˈpɑːt/" },
            { term: "bring back", translation: "принести обратно", example: "Please bring back my pencil case.", hint: "/brɪŋ ˈbæk/" },
            { term: "give back", translation: "отдать, вернуть чужое", example: "And give back her make-up too.", hint: "/gɪv ˈbæk/" },
            { term: "make-up", translation: "косметика", example: "And give back her make-up too.", hint: "/ˈmeɪk ʌp/" },
            { term: "pencil case", translation: "пенал", example: "Please bring back my pencil case.", hint: "/ˈpensl keɪs/" },
            { term: "text message", translation: "сообщение с телефона", example: "I wrote her a text message about it.", hint: "/ˈtekst mesɪdʒ/" },
          ],
        },
        {
          id: "primer-dnyom",
          kind: "example",
          caption: "Днём",
          zvuchat: [
            "Look out! The floor is wet.",
            "People often fall over near the door.",
            "We work out every morning.",
            "Our class takes part in the competition.",
            "Please bring back my pencil case.",
            "And give back her make-up too.",
            "I wrote her a text message about it.",
          ],
          text:
            "Look out! The floor is wet.\nPeople often fall over near the door.\nWe work out every morning.\nOur class takes part in the competition.\nPlease bring back my pencil case.\nAnd give back her make-up too.\nI wrote her a text message about it.",
          perevod: {
            "Look out! The floor is wet.": "Осторожно! Пол мокрый.",
            "People often fall over near the door.":
              "У двери часто спотыкаются.",
            "We work out every morning.": "Мы занимаемся спортом каждое утро.",
            "Our class takes part in the competition.":
              "Наш класс участвует в соревновании.",
            "Please bring back my pencil case.":
              "Верни, пожалуйста, мой пенал.",
            "And give back her make-up too.": "И косметику ей тоже отдай.",
            "I wrote her a text message about it.":
              "Я написал ей об этом сообщение.",
          },
          explain:
            "Семь строк с парами слов. Пары bring back и give back отличаются " +
            "первым словом: одна о том, чтобы принести, другая — чтобы отдать.",
        },
        {
          id: "den-i-rabota",
          kind: "table",
          caption: "День и работа",
          zvuchat: [
            "Our working hours are long.",
            "She reads social media in the evening.",
            "A few friends came.",
            "We took lots of photos.",
            "They played video games.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["Our working hours are long.", "У нас длинный рабочий день."],
            ["She reads social media in the evening.", "Вечером она читает социальные сети."],
            ["A few friends came.", "Пришли несколько друзей."],
            ["We took lots of photos.", "Мы сделали много фотографий."],
            ["They played video games.", "Они играли в компьютерные игры."],
          ],
        },
        {
          id: "slovar-dnya-i-veshchey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "video game", translation: "компьютерная игра", example: "They played video games.", hint: "/ˈvɪdiəʊ geɪm/" },
            { term: "social media", translation: "социальные сети", example: "She reads social media in the evening.", hint: "/ˈsəʊʃl ˈmiːdiə/" },
            { term: "working hours", translation: "рабочие часы", example: "Our working hours are long.", hint: "/ˈwɜːkɪŋ aʊəz/" },
            { term: "a few", translation: "несколько (то же, что several)", example: "A few friends came.", hint: "/ə ˈfjuː/" },
            { term: "lots", translation: "много (второе имя a lot of)", example: "We took lots of photos.", hint: "/lɒts/" },
          ],
        },

        // ---- задания ----

        {
          id: "z1-vybrat-o-posude",
          kind: "choice",
          prompt: "Какая пара слов говорит о мытье посуды?",
          options: [
            { text: "work out" },
            { text: "wash up", correct: true },
            { text: "look out" },
          ],
          hint: "Первое слово в нужной паре значит «мыть».",
          why:
            "wash up. Пара work out о занятиях спортом, а look out — окрик об " +
            "опасности.",
        },
        {
          id: "z2-dopisat-put-on",
          kind: "gap",
          prompt: "Утром надевают пальто. Допиши первое слово пары.",
          before: "I ",
          after: " on my coat.",
          answer: "put",
          hint: "Это слово значит «класть, помещать», а с on выходит «надеть».",
          why: "I put on my coat. Вторым словом пары стоит on.",
        },
        {
          id: "z3-soedinit-pary",
          kind: "match",
          prompt: "Соедини пару слов с её переводом.",
          left: ["tidy up", "get back", "try on", "give back"],
          right: ["вернуться", "примерить", "прибираться", "отдать чужое"],
          answer: [2, 0, 1, 3],
          hint: "Смысл пары не складывается из двух слов — вспомни её целиком.",
          why:
            "tidy up — прибираться, get back — вернуться, try on — примерить, " +
            "give back — отдать чужое.",
        },
        {
          id: "z4-napisat-zapisal",
          kind: "short",
          prompt: "Скажи по-английски: Данияр записал адрес. Возьми пару со словом down.",
          answer: "Daniyar wrote down the address.",
          accept: [
            "Daniyar wrote down the address",
            "Daniyar wrote the address down.",
            "Daniyar wrote the address down",
          ],
          hint: "Первое слово пары значит «писать».",
          why:
            "Daniyar wrote down the address. Пара write down значит не просто " +
            "«писать», а «записать, чтобы не забыть». Дополнение стоит и после " +
            "пары, и между её словами: wrote the address down тоже верно.",
        },
        {
          id: "z5-otmetit-o-dome",
          kind: "hottext",
          prompt: "Отметь то, что говорят о доме, а не о человеке.",
          parts: [
            { text: "washing machine", selectable: true, correct: true },
            { text: " · " },
            { text: "get dressed", selectable: true },
            { text: " · " },
            { text: "dining room", selectable: true, correct: true },
            { text: " · " },
            { text: "work out", selectable: true },
          ],
          hint: "Одни записи называют вещь или комнату, другие — дело человека.",
          why:
            "Верны washing machine и dining room: это стиральная машина и " +
            "столовая. Пары get dressed и work out говорят о человеке.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от заданий уроков и другими углами: восстановить
      // половину строки, назвать разницу в смысле, поставить знак, ответить по
      // записи. Строк уроков в ней нет.

      // ---- итог 1 ----
      {
        id: "q-dve-formy-ispravit",
        kind: "short",
        outcome: "связывать длительное и законченное действие: I was cooking when he came",
        prompt:
          "Уборка двигателя уже шла к приходу брата. Исправь и запиши целиком: «I cleaned the engine when my brother arrived.»",
        answer: "I was cleaning the engine when my brother arrived.",
        accept: ["I was cleaning the engine when my brother arrived"],
        why:
          "I was cleaning the engine when my brother arrived. Уборка тянулась, и " +
          "потому левая половина берёт was и окончание -ing.",
      },
      {
        id: "q-dve-formy-prichina",
        kind: "choice",
        outcome: "связывать длительное и законченное действие: I was cooking when he came",
        prompt: "Чем «I cooked when he came» отличается от «I was cooking when he came»?",
        options: [
          { text: "В первой готовка началась после его прихода", correct: true },
          { text: "В первой он пришёл дважды" },
          { text: "Ничем, это одно и то же" },
        ],
        why:
          "I was cooking when he came говорит, что готовка уже шла. I cooked when he " +
          "came ставит готовку после прихода.",
      },

      // ---- итог 2 ----
      {
        id: "q-skazat-o-gotovke-sestry",
        kind: "short",
        outcome: "ставить while там, где после союза идёт длительное действие",
        prompt:
          "Готовка ужина у сестры тянулась, и посреди неё ты ей помог. Скажи это по-английски, начав с While my sister.",
        answer: "While my sister was cooking dinner, I helped her.",
        accept: ["While my sister was cooking dinner, I helped her"],
        why:
          "While my sister was cooking dinner, I helped her. Форма was и окончание " +
          "-ing показывают, что готовка тянулась, а помощь случилась внутри неё.",
      },
      {
        id: "q-posle-while-vybrat",
        kind: "choice",
        outcome: "ставить while там, где после союза идёт длительное действие",
        prompt: "В какой части после while стоит длительное действие?",
        options: [
          { text: "while the lock opened" },
          { text: "while the postman called" },
          { text: "while the rain was falling", correct: true },
        ],
        why:
          "while the rain was falling. Только здесь после союза стоит форма was и " +
          "окончание -ing.",
      },

      // ---- итог 3 ----
      {
        id: "q-zapyataya-postavit",
        kind: "short",
        outcome: "ставить запятую, когда часть с союзом стоит впереди",
        prompt: "Поставь недостающий знак и запиши целиком: «While I was sleeping she was driving.»",
        answer: "While I was sleeping, she was driving.",
        accept: ["While I was sleeping, she was driving"],
        why:
          "While I was sleeping, she was driving. Часть с союзом стоит впереди, и её " +
          "отделяют запятой.",
      },
      {
        id: "q-zapyataya-ubrat",
        kind: "short",
        outcome: "ставить запятую, когда часть с союзом стоит впереди",
        prompt:
          "Перепиши эту мысль так, чтобы часть с союзом стояла позади: «When he came, I was cooking.»",
        answer: "I was cooking when he came.",
        accept: ["I was cooking when he came"],
        why:
          "I was cooking when he came. Часть с союзом ушла назад, и разделять стало " +
          "нечего: запятая не нужна.",
      },

      // ---- итог 4 ----
      {
        id: "q-dva-dlitelnyh-ispravit",
        kind: "short",
        outcome: "соединять два длительных действия словом while",
        prompt:
          "Оба действия тянулись. Исправь и запиши целиком: «My brother was waiting while I cleaned the wheel.»",
        answer: "My brother was waiting while I was cleaning the wheel.",
        accept: ["My brother was waiting while I was cleaning the wheel"],
        why:
          "My brother was waiting while I was cleaning the wheel. Раз тянулись оба, " +
          "форма was и окончание -ing нужны в обеих половинах.",
      },
      {
        id: "q-dva-dlitelnyh-otlichit",
        kind: "choice",
        outcome: "соединять два длительных действия словом while",
        prompt: "В какой записи оба действия тянулись?",
        options: [
          { text: "She was driving while I was sleeping.", correct: true },
          { text: "She was driving when I called her." },
          { text: "She stopped while I was sleeping." },
        ],
        why:
          "She was driving while I was sleeping. В обеих половинах стоит was и " +
          "окончание -ing.",
      },

      // ---- итог 5 ----
      {
        id: "q-rasskaz-pervyy-hod",
        kind: "short",
        outcome: "рассказывать о случае в три хода",
        prompt:
          "Рассказ начали так: «I cleaned the engine. Suddenly the rain started.» Первая строка должна описывать обстановку. Перепиши её.",
        answer: "I was cleaning the engine.",
        accept: ["I was cleaning the engine"],
        why:
          "I was cleaning the engine. Обстановку описывает длительное действие, и " +
          "потому первая строка берёт was и окончание -ing.",
      },
      {
        id: "q-rasskaz-tretiy-hod",
        kind: "choice",
        outcome: "рассказывать о случае в три хода",
        prompt: "Два хода уже есть: обстановка и то, что случилось. Чем кончают третий?",
        options: [
          { text: "Ещё одним длительным действием" },
          { text: "Тем, чем всё обернулось: Luckily, nobody was hurt.", correct: true },
          { text: "Вопросом к собеседнику" },
        ],
        why: "Третий ход говорит, чем всё обернулось, и действия там обычно уже нет.",
      },

      // ---- итог 6 ----
      {
        id: "q-rasskaz-chto-prervalo",
        kind: "short",
        outcome: "понимать рассказ, где длительное действие прервано законченным",
        prompt:
          "Данияр готовил ужин, и в этот миг уронил тарелку. Составь строку целиком: сначала то, что тянулось, потом when и то, что случилось.",
        answer: "Daniyar was cooking dinner when he dropped a plate.",
        accept: [
          "Daniyar was cooking dinner when he dropped a plate",
          "Daniyar was cooking the dinner when he dropped a plate.",
          "Daniyar was cooking dinner when he dropped the plate.",
        ],
        why:
          "Daniyar was cooking dinner when he dropped a plate. Готовка тянулась и " +
          "потому взяла was cooking, а падение тарелки заняло миг и потому dropped.",
      },
      {
        id: "q-rasskaz-chto-tyanulos",
        kind: "choice",
        outcome: "понимать рассказ, где длительное действие прервано законченным",
        prompt: "В сообщении написано: «When the ambulance arrived, I walked home.» Что тянулось?",
        options: [
          { text: "Приход скорой" },
          { text: "Ходьба домой" },
          { text: "Ничего: обе половины называют то, что случилось", correct: true },
        ],
        why:
          "Здесь нет длительного действия вовсе: и arrived, и walked — формы " +
          "прошедшего, окончания -ing нет ни у одного.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-chto-shlo",
        kind: "choice",
        outcome: "слышать в записи, что шло и что случилось",
        zvuk: "While I was waiting at the gate, the scooter stopped.",
        prompt: "Послушай и ответь: что тянулось?",
        options: [
          { text: "Остановка мопеда" },
          { text: "Ожидание у ворот", correct: true },
          { text: "В записи об этом не сказано" },
        ],
        why:
          "While I was waiting at the gate, the scooter stopped. Тянулось ожидание: " +
          "оно стоит после while.",
      },
      {
        id: "q-na-sluh-gde-byl",
        kind: "short",
        outcome: "слышать в записи, что шло и что случилось",
        zvuk: "Where were you when the rain started? — Near the motorway.",
        prompt: "Послушай и запиши одним английским словом, где был человек.",
        answer: "motorway",
        accept: ["the motorway", "near the motorway"],
        why: "Where were you when the rain started? — Near the motorway.",
      },

      // ---- итог 8 ----
      {
        id: "q-skazat-o-dvuh-dlitelnyh",
        kind: "short",
        outcome: "проверять рассказ: там ли стоит while",
        prompt:
          "Почтальон звонил, и всё это время шла твоя уборка лестницы — тянулись оба дела. Скажи это по-английски, начав с While the postman.",
        answer: "While the postman was calling, I was cleaning the stairs.",
        accept: ["While the postman was calling, I was cleaning the stairs"],
        why:
          "While the postman was calling, I was cleaning the stairs. Тянулись оба " +
          "дела, и потому форма was и окончание -ing стоят в обеих половинах.",
      },
      {
        id: "q-proverka-chto-smotret",
        kind: "choice",
        outcome: "проверять рассказ: там ли стоит while",
        prompt:
          "В рассказе надо сказать, что одно дело тянулось, а другое случилось внутри него. Что проверять в строке с while?",
        options: [
          { text: "Есть ли форма was и окончание -ing сразу за while", correct: true },
          { text: "Сколько слов в первой половине" },
          { text: "Стоит ли в конце строки точка" },
        ],
        why:
          "Форма was и окончание -ing и говорят, что дело тянулось. Что идёт перед " +
          "союзом, для этой проверки значения не имеет.",
      },

      // ---- итог 9 ----
      {
        id: "q-ispravit-poryadok-sit-down",
        kind: "short",
        outcome: "называть дом и дела по дому: wash up, tidy up, put on",
        prompt:
          "Ученик написал: Then he sat at the table down. Запиши строку без ошибки.",
        answer: "Then he sat down at the table.",
        accept: ["Then he sat down at the table", "He sat down at the table."],
        hint: "Слова пары стоят рядом, а место называют после неё.",
        why:
          "Then he sat down at the table. Пару sit down не разрывают, и место " +
          "прибавляют следом.",
      },
      {
        id: "q-otlichit-bring-i-give-back",
        kind: "choice",
        outcome: "называть дом и дела по дому: wash up, tidy up, put on",
        prompt: "Чем bring back отличается от give back?",
        options: [
          {
            text: "bring back — принести вещь обратно, give back — отдать её хозяину",
            correct: true,
          },
          { text: "bring back говорят о вещах, give back — о людях" },
          { text: "разницы нет, пары заменяют друг друга" },
        ],
        hint: "Посмотри на первое слово каждой пары: принести и дать — разные дела.",
        why:
          "bring back — принести вещь обратно, give back — отдать её хозяину. " +
          "Пары различаются первым словом, а не тем, о ком идёт речь.",
      },
    ],
  },
};

export default module;
