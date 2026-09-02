import type { Module } from "@/lib/content/types";

/**
 * Модуль 10 курса «Английский · Elementary»: уже договорились.
 *
 * Программа: docs/programma-english-elementary.md, модуль 10 — «сообщать о
 * назначенном»; грамматика: Present Continuous о будущем; отличие от `be going
 * to`.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «ДОГОВОРЁННОСТЬ».
 *
 * Так и только так модуль зовёт то, о чём учит говорить: договорённость — то, о
 * чём уже условились, и у чего есть назначенное время. Слов «план» и «будущее
 * время» в тексте для ученика нет ни разу. Слово «намерение» в модуле есть, но
 * оно чужое: им зовётся то, чему учил модуль 8, и урок 5 сравнивает две вещи,
 * а не даёт одной вещи два имени.
 *
 * ЧЕМУ МОДУЛЬ УЧИТ, А ЧЕМУ НЕТ — САМОЕ ВАЖНОЕ МЕСТО.
 *
 * Здесь легче всего повторить ошибку модуля 7: ввести правило и начать
 * объявлять ошибкой безупречный английский. Оборот `be going to` и Present
 * Continuous о будущем в живой речи сплошь и рядом взаимозаменимы, и источник
 * границы между ними не проводит — он лишь по-разному называет их работу:
 * «arrangements» у одного и «plans and intentions» у другого.
 *
 * Поэтому урок 5 учит ЧИТАТЬ разницу, а не выбирать единственно верное. Ни одно
 * задание модуля не объявляет `be going to` ошибкой, и ни одно не требует
 * заменить одну запись на другую.
 *
 * ПЕРВАЯ РЕДАКЦИЯ ЗДЕСЬ ОШИБЛАСЬ, И ОШИБКА БЫЛА ТОЙ ЖЕ ПОРОДЫ, ЧТО В МОДУЛЕ 7.
 * Она объявила признаком названное время: «есть at five — договорённость, нет —
 * намерение». Методист опроверг это примерами самого источника: у `be going to`
 * время стоит на всех ступенях — A2 «I'm going to wear them **on holiday**», A2
 * «I think **this Saturday** is going to be a nice day», B1 «I'm not going to be
 * able to meet you **next Tuesday**… **at 5.30**». И наш же модуль 8 даёт три
 * такие строки из четырёх в первом же примере.
 *
 * Поэтому урок 5 различает не записи, а СЛУЧАИ, и называет их так же, как
 * источник: `arrangements` — о чём условились с кем-то, `plans and intentions` —
 * что человек решил сам. В письме случай виден по соседним строкам: ждёт ли
 * собеседник, куплены ли билеты. По одной строке без случая часто не разобрать
 * вовсе, и урок говорит это прямо.
 *
 * «LIMITED RANGE OF VERBS» — ОГРАНИЧЕНИЕ ИСТОЧНИКА. Обе графы A2 говорят о
 * будущем «with a limited range of verbs», списка источник не даёт. В записях о
 * будущем модуль держится десяти глаголов: `meet`, `come`, `go`, `leave`,
 * `work`, `start`, `stay`, `take`, `do`, `send`. Первая редакция заявляла
 * восемь и называла среди них `play`, которого в модуле нет ни разу, а четырёх
 * настоящих не называла: счёт исправлен по разбору методиста.
 *
 * ОТРИЦАНИЕ СОБРАНО ИЗ ДВУХ ГРАФ, и это надо сказать прямо. Отдельной графы
 * «отрицание при разговоре о будущем» источник не даёт вовсе. Модуль соединяет
 * две строки, обе на A2: `PRESENT present continuous, FORM: NEGATIVE` («I'm not
 * using it any more») и `FUTURE present continuous for future use, USE: FUTURE
 * ARRANGEMENTS`. Ни одна из них ступени не превышает, а без отрицания урок о
 * расписании невозможен: «I'm not working on Friday» — первое, что о неделе
 * говорят.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, FUTURE present continuous for future use,
 *    «USE: FUTURE ARRANGEMENTS» — «Can use the present continuous with a
 *    limited range of verbs to talk about future arrangements», пример
 *    источника «I'm working this Saturday and Sunday morning». Это уроки 1 и 2.
 *
 * 2. English Grammar Profile, A2, там же, «USE: QUESTIONS ABOUT THE FUTURE» —
 *    «Can use the present continuous with a limited range of verbs to ask about
 *    future plans», пример «[talking about a Rolling Stones concert] Are you
 *    coming?». Это урок 3.
 *
 * 3. English Grammar Profile, A1, PRESENT present continuous, «FORM:
 *    AFFIRMATIVE» — «Can use the affirmative form», пример «I am sending you
 *    some flowers, because you are not well». Форма урока 1 стоит на A1.
 *
 * 4. English Grammar Profile, A2, PRESENT present continuous, «FORM: NEGATIVE»
 *    — «Can use the negative form», пример «[talking about a computer] I'm not
 *    using it any more». Это урок 2.
 *
 * 5. English Grammar Profile, A2, PRESENT present continuous, «FORM:
 *    QUESTIONS» — «Can use 'wh-' questions, especially in the context of
 *    letters and emails», пример «Dear Mom, How are you doing?». Это урок 4.
 *
 * 6. English Grammar Profile, A2, FUTURE future with be going to, «USE:
 *    INTENTIONS» — «Can use the affirmative and question forms of 'be going to'
 *    talk about plans and intentions». Это вторая половина урока 5; сам оборот
 *    ученик получил модулем 8.
 *
 * 7. Описания Совета Европы, с. 79, шкала Information exchange, графа A2: «Can
 *    ask and answer questions about plans and intentions» — отсюда короткий
 *    ответ в уроке 3 стоит рядом с вопросом.
 *
 * 8. Описания Совета Европы, с. 55, шкала Reading correspondence, графа A2:
 *    «Can understand short, simple personal letters». Это урок 6.
 *
 * 9. Описания Совета Европы, с. 84, шкала Notes, messages and forms, графа A2:
 *    «Can formulate short, simple notes and messages relating to matters in
 *    areas of immediate need». Это урок 8.
 *
 * 10. Руководство Cambridge A2 Key, с. 29, раздел THE TASK: «The candidates
 *     should only write ONE word, or a number, or a date, or a time for their
 *     answer». Поэтому ответы на вопросы к записи в уроке 7 односложные.
 *
 * ОКОНЧАНИЕ `-ING` ЗДЕСЬ НЕ РАЗБИРАЕТСЯ ЗАНОВО. Его правила дал модуль 6 этой
 * же ступени, и внутри одной ступени ссылка на свой модуль законна и полезна
 * (CLAUDE.md, решения владельца от 16 августа, пункт 4). Урок 1 напоминает
 * правило одной строкой и отсылает к модулю 6.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать одна карточка, из них двадцать пять несут слово,
 * которого на прошлой ступени не было. Счёт поправлен 30 августа 2026 по
 * разбору методиста: в перечни ниже не попала карточка `yet`, хотя слово
 * законно — `yet (adv)` стоит в словнике A2 Key.
 *
 *    Oxford 3000 помечает A2: available, middle, term, schedule, except,
 *    exactly, especially, loud, physics, chemistry, biology, whose, site,
 *    normal.
 *
 *    Oxford 3000 помечает выше A2, а словник A2 Key содержит: grade (B1).
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: cafeteria, pity,
 *    pardon, directions, classmate, textbook, headteacher, blackboard,
 *    schoolchild, instructions, anybody.
 *
 *    Oxford 3000 помечает A1, и потому новыми они не считаются: interview,
 *    class, geography, break, telephone. Взяты потому, что курс не давал их
 *    карточкой ни разу нигде.
 *
 *    СЛОВО `HURRY` УБРАНО ПО РАЗБОРУ МЕТОДИСТА. Первая редакция дала его
 *    существительным («спешка», I'm in a hurry), а существительное не проходит
 *    ни по одному основанию: Oxford 3000 ставит «hurry n., v. B1», словник A2
 *    Key даёт только «hurry (v)». Из текста урока 3 оно тоже убрано.
 *
 *    Слово schedule словник A2 Key не содержит, и ступень ему подтверждает
 *    Oxford 3000 (A2). Правило ступени принимает любое из двух оснований.
 *
 *    ЗАПИСЬ `SCHEDULE` — БРИТАНСКАЯ: /ˈʃedjuːl/, а не американская /ˈskedʒuːl/.
 *    Решение владельца о британской норме стоит давно, и нового здесь не нужно.
 *
 *    КАЖДАЯ КАРТОЧКА РАБОТАЕТ В МОДУЛЕ и стоит в том уроке, где слово впервые
 *    встречается. Проверяет `npm run check:content`.
 *
 *    СЛОВА-ПОДПОРКИ: meet, come, go, leave, work, start, stay, take, do, send,
 *    read, week, weekend, day, time, one, four, five, six, eight, nine, ten,
 *    eleven, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
 *    morning, evening, room, school, shop, parents, free, busy, new, full,
 *    this — все A1 по Oxford 3000. Плюс слово прошлого модуля этой же ступени:
 *    village.
 *
 *    ПЕРЕЧЕНЬ ВЫВЕРЕН ПОИСКОМ, а не памятью: первая редакция называла здесь
 *    девять слов, которых в модуле нет ни разу (lesson, teacher, station, next,
 *    notebook, sheet, appointment, calendar, exhibition). Нашёл методист.
 *
 *    А ГЛАГОЛ `play` ТОГДА СНЯЛИ ЗРЯ, и это нашёл второй методист 30 августа
 *    2026: он работает дважды в видимом тексте — в подсказке урока 8 и в
 *    вопросе работы, который требует произвести строку We are playing chess.
 *    Возвращён и в перечень подпорок, и в список глаголов для записей о будущем.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного. В уроке 1 — окончание `-ing` из
 * модуля 6, урок 2: именно оно нужно правой половине каждой записи этого
 * модуля. В уроке 5 — форма перед `going to` из модуля 8, урок 1: урок 5 как
 * раз сравнивает две записи, и обе держатся на формах am, is, are. Берутся
 * ссылкой (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "uzhe-dogovorilis",
  title: "Уже договорились",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, FUTURE present continuous for future use, «USE: FUTURE ARRANGEMENTS»: " +
        "«Can use the present continuous with a limited range of verbs to talk about " +
        "future arrangements», пример источника — «I'm working this Saturday and " +
        "Sunday morning» — уроки 1 и 2. " +
        "A2, там же, «USE: QUESTIONS ABOUT THE FUTURE»: «Can use the present " +
        "continuous with a limited range of verbs to ask about future plans», пример " +
        "— «[talking about a Rolling Stones concert] Are you coming?» — урок 3. " +
        "ОГРАНИЧЕНИЕ «LIMITED RANGE OF VERBS»: списка глаголов источник не даёт, и в " +
        "записях о будущем модуль держится одиннадцати — meet, come, go, leave, " +
        "work, play, start, stay, take, do, send. Счёт правился дважды: первая " +
        "редакция заявляла восемь, вторая сняла `play` как отсутствующий, а он в " +
        "модуле есть — работа требует произвести строку We are playing chess. " +
        "Возвращён 30 августа 2026 по разбору методиста. " +
        "A1, PRESENT present continuous, «FORM: AFFIRMATIVE»: «Can use the " +
        "affirmative form», пример — «I am sending you some flowers because you are " +
        "not well» — форма урока 1. " +
        "A2, PRESENT present continuous, «FORM: NEGATIVE»: «Can use the negative " +
        "form», пример — «[talking about a computer] I'm not using it any more» — " +
        "урок 2. " +
        "ОТРИЦАНИЕ СОБРАНО ИЗ ДВУХ ГРАФ: отдельной строки «отрицание при разговоре о " +
        "будущем» источник не даёт вовсе, и модуль соединяет FORM: NEGATIVE с USE: " +
        "FUTURE ARRANGEMENTS. Обе на A2, превышения нет. " +
        "A2, PRESENT present continuous, «FORM: QUESTIONS»: «Can use 'wh-' " +
        "questions, especially in the context of letters and emails», пример — «Dear " +
        "Mom, How are you doing?» — урок 4. " +
        "A2, FUTURE future with be going to, «USE: INTENTIONS»: «Can use the " +
        "affirmative and question forms of 'be going to' talk about plans and " +
        "intentions» — вторая половина урока 5. " +
        "ЧЕГО НЕТ И ПОЧЕМУ. Источник границы между двумя записями не проводит: он " +
        "лишь по-разному называет их работу — «arrangements» у одного и «plans and " +
        "intentions» у другого. Поэтому урок 5 учит читать разницу, а не выбирать " +
        "единственно верное, и НИ ОДНО задание модуля не объявляет be going to " +
        "ошибкой и не требует заменить одну запись другой",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК 3. с. 79, шкала Information exchange, A2: «Can ask and answer " +
        "questions about plans and intentions» — источник называет обе стороны, и " +
        "потому короткий ответ стоит рядом с вопросом. " +
        "УРОК 6, ЧТЕНИЕ. с. 55, шкала Reading correspondence, A2: «Can understand " +
        "short, simple personal letters». " +
        "УРОК 8, ПИСЬМО. с. 83, шкала Correspondence, A2: «Can compose short, " +
        "simple notes, e-mails and text messages (e.g. to send or reply to an " +
        "invitation, to confirm or change an arrangement)» — эта строка описывает " +
        "урок 8 точнее прежней и прямо называет перенос договорённости, то есть " +
        "ровно то, что в нём просят написать. Нашёл методист. Прежняя опора, с. 84, " +
        "шкала Notes, messages and forms, A2 («Can formulate short, simple notes and " +
        "messages relating to matters in areas of immediate need»), тоже верна и " +
        "остаётся как общая. " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority… " +
        "provided people articulate clearly and slowly» — отсюда pace: \"slow\". " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "ОПОРА ВСЕГО МОДУЛЯ. с. 52, Language specifications, раздел Tenses: " +
        "«Present continuous: present actions and future meaning»; там же Verb " +
        "forms: «Affirmative, interrogative, negative». Эта строка даёт и " +
        "употребление о будущем, и все три формы разом — то, что English Grammar " +
        "Profile приходится склеивать из двух граф. Найдена методистом. " +
        "ИМЯ ВРЕМЕНИ. Та же строка — опора двух дел разом. Первое: урок 1 называет " +
        "время ученику, и первая встреча на ступени здесь. Второе: строка «Им же " +
        "говорят о том, что идёт прямо сейчас: I'm working» стоит потому, что " +
        "источник даёт оба употребления в одной строке — «present actions AND " +
        "future meaning». Без неё ученик свяжет имя только с договорённостью. " +
        "Слова времени в примере нет нарочно: урок различает два употребления по " +
        "названному времени, и пример с `now` спорил бы с подсказками заданий " +
        "того же урока. Нашёл методист при разборе правки. " +
        "УРОК 4, СЛОВО WHOSE. с. 52, там же, раздел Interrogatives: «What; What (+ " +
        "noun) / Where; When / Who; Whose; Which / How; How much…» — требования " +
        "экзамена A2 вопросительное whose содержат. ЗДЕСЬ ИСТОЧНИКИ РАСХОДЯТСЯ: " +
        "English Grammar Profile отдельной строки A2 про вопросительное whose не " +
        "содержит, а CLAUSES interrogatives «FORM: 'WHICH', 'WHOSE'» стоит на B1 " +
        "с пустым описанием и пустым примером. Само слово на ступени: Oxford 3000 — " +
        "«whose det./pron. A2», словник A2 Key — «whose (det & pron)». Первая " +
        "редакция ссылалась здесь на графу про wh-вопросы, которая о whose не " +
        "говорит ничего; поправлено по разбору методиста. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы НА ВОПРОСЫ к записи здесь односложные. Задание z3 " +
        "«восстанови услышанное» под эту графу не подходит и на неё не опирается: " +
        "там ученик ничего не пишет, а собирает услышанное из готовых карточек",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: available, middle, term, schedule, except, " +
        "exactly, especially, loud, physics, chemistry, biology, whose, site, " +
        "normal. " +
        "Выше A2 Oxford 3000 ставит одно слово — grade (B1), — а словник A2 Key его " +
        "содержит. Слово hurry убрано: его существительное Oxford 3000 ставит на " +
        "B1, а словник A2 Key даёт только глагол. " +
        "Слов cafeteria, pity, pardon, directions, classmate, textbook, " +
        "headteacher, blackboard, schoolchild, instructions, anybody Oxford 3000 не содержит " +
        "вовсе, а словник A2 Key требует. " +
        "СЛОВО `pity` СТОИТ КАРТОЧКОЙ-СВЯЗКОЙ `What a pity!` — так его даёт и " +
        "словник: «pity (n) • What a pity!». Порознь оно значит «жалость», и " +
        "карточка научила бы ученика не тому значению, в котором он слово " +
        "встретит. Тот же разбор, что у `What a shame!` в модуле 31; поправлено " +
        "общим проходом 29 августа 2026. " +
        "Слова interview, class, geography, break и telephone Oxford 3000 помечает A1, и новыми " +
        "они не считаются; взяты потому, что курс не давал их карточкой ни разу " +
        "нигде. " +
        "Слова schedule словник A2 Key не содержит, и ступень ему подтверждает " +
        "Oxford 3000 (A2). " +
        "Подпорки: meet, come, go, leave, work, play, start, stay, week, weekend, " +
        "day, time, five, six, ten, morning, evening, room, school, shop, free, " +
        "busy, new, full — все A1. " +
        "ПЕРЕЧЕНЬ ВЫВЕРЕН ПОИСКОМ 30 августа 2026, и он расходился с шапкой: " +
        "здесь оставался прежний список. Сняты `lesson`, `teacher`, `station` — " +
        "их в теле модуля нет ни разу; снято `class` — подпорка это слово БЕЗ " +
        "карточки, а карточка `class` в модуле есть. Глагол `play` при этом " +
        "оставлен: он работает дважды в видимом тексте — в подсказке урока 8 и в " +
        "вопросе работы `q-odin-raz-ili-vsegda`",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Из тридцати " +
        "карточек модуля словник содержит двадцать восемь. Двух слов — schedule и " +
        "interview — в нём нет, и ступень им подтверждает Oxford 3000 (A2 и A1): " +
        "правило ступени принимает любое из двух оснований",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): available /əˈveɪləbl/, middle " +
        "/ˈmɪdl/, term /tɜːm/, schedule /ˈʃedjuːl/, except /ɪkˈsept/, especially " +
        "/ɪˈspeʃəli/, loud /laʊd/, cafeteria /ˌkæfɪˈtɪəriə/, What a pity! " +
        "/wɒt ə ˈpɪti/, pardon " +
        "/ˈpɑːdn/, directions /daɪˈrekʃənz/, exactly /ɪgˈzæktli/, physics /ˈfɪzɪks/, " +
        "chemistry /ˈkemɪstri/, biology /baɪˈɒlədʒi/, classmate /ˈklɑːsmeɪt/, " +
        "textbook /ˈtekstbʊk/, whose /huːz/, site /saɪt/, grade /greɪd/, geography " +
        "/dʒɪˈɒgrəfi/, headteacher /ˈhedtiːtʃə/, blackboard /ˈblækbɔːd/, schoolchild " +
        "/ˈskuːltʃaɪld/, normal /ˈnɔːməl/, instructions /ɪnˈstrʌkʃənz/, interview " +
        "/ˈɪntəvjuː/, class /klɑːs/, break /breɪk/, anybody /ˈenibɒdi/, telephone " +
        "/ˈtelɪfəʊn/. " +
        "СВЕРХ ПЯТИ УСЛОВНОСТЕЙ КУРСА три записи приведены к словарной норме, и по " +
        "одним условностям их не вывести: except (источник /ɛksˈɛpt/, у нас " +
        "/ɪkˈsept/), especially (/ɪspˈɛʃəlˌi/ → /ɪˈspeʃəli/) и exactly (/ɛɡzˈæktli/ → " +
        "/ɪgˈzæktli/). Во всех трёх источник, " +
        "собранный машиной, расходится со словарями в безударном гласном, и взята " +
        "словарная запись. Так же поступил модуль 9 с пятью записями",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "говорить о договорённости: I'm meeting Dana at five",
    "говорить, чего в расписании нет: I'm not working on Friday",
    "спрашивать о договорённости и коротко отвечать",
    "спрашивать подробности: What are you doing on Saturday?",
    "понимать по случаю, о чём условились, а что человек решил сам",
    "понимать письмо о делах на неделе",
    "слышать в записи, что и когда назначено",
    "проверять письмо: названо ли у каждой договорённости время",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "dogovorilis-na-pyat",
      title: "Уже договорились: I'm meeting Dana at five",
      estimatedMinutes: 15,
      outcome: "говорить о договорённости: I'm meeting Dana at five",
      vozvrat: [{ iz: "chto-proishodilo", zadanie: "z1-dopisat-ing" }],

      blocks: [
        {
          id: "zachem-govorit-o-dogovorennosti",
          kind: "explain",
          text: [
            "Алим и Дана условились встретиться в пятницу, и час уже назначен.",
            "I'm meeting Dana at five. — Я встречаюсь с Даной в пять.",
            "Присмотрись к переводу: «встречаюсь» — это настоящее время, а речь о будущем.",
            "По-русски так говорят постоянно: «завтра я работаю», «в субботу мы уезжаем».",
            "По-английски делают ровно то же самое — берут настоящее время и говорят им о назначенном.",
            "Запись собирают из формы am, is или are и глагола с окончанием -ing.",
            "Время, в котором стоит I'm meeting, называется Present Continuous.",
            "Им же говорят о том, что идёт прямо сейчас: I'm working.",
          ],
        },
        {
          id: "formy-dogovorennosti",
          kind: "table",
          caption: "Формы по лицам",
          zvuchat: [
            "I am meeting Dana at five.",
            "You are meeting Dana at five.",
            "He is meeting Dana at five.",
            "She is meeting Dana at five.",
            "We are meeting Dana at five.",
            "They are meeting Dana at five.",
          ],
          head: ["Кто", "По-английски", "По-русски"],
          rows: [
            ["I", "I am meeting Dana at five.", "Я встречаюсь с Даной в пять."],
            ["you", "You are meeting Dana at five.", "Ты встречаешься с Даной в пять."],
            ["he", "He is meeting Dana at five.", "Он встречается с Даной в пять."],
            ["she", "She is meeting Dana at five.", "Она встречается с Даной в пять."],
            ["we", "We are meeting Dana at five.", "Мы встречаемся с Даной в пять."],
            ["they", "They are meeting Dana at five.", "Они встречаются с Даной в пять."],
          ],
        },
        {
          id: "chto-menyaetsya-a-chto-net",
          kind: "explain",
          text: [
            "Меняется одно слово: am, are или is — по лицу.",
            "Глагол с окончанием -ing остаётся прежним у всех.",
            "И в переводе везде настоящее время: встречаюсь, встречаешься, встречается.",
            "Такая запись говорит об одном назначенном разе, а не о том, что бывает всегда.",
            "We are meeting on Friday — про одну пятницу, We meet on Fridays — про каждую.",
            "Как пишется это окончание, разобрано в модуле «Что происходило», урок 2.",
          ],
        },
        {
          id: "chto-delaet-zapis-dogovorennostyu",
          kind: "note",
          tone: "info",
          text:
            "У договорённости в строке почти всегда названо время: at five, on " +
            "Friday, this weekend.\n\nБез времени такая строка чаще говорит о том, что " +
            "идёт сейчас.\n\nНо не всегда: если вокруг речь о будущем, годится и она — " +
            "Are you coming?",
        },
        {
          id: "nedelya-daniyara",
          kind: "example",
          caption: "Неделя Данияра",
          zvuchat: [
            "I'm meeting Alim in the cafeteria at five.",
            "We're starting a new term on Monday.",
            "On Tuesday I'm going to an interview at nine.",
            "The room is available in the middle of the week.",
            "My schedule is full this week.",
          ],
          text:
            "I'm meeting Alim in the cafeteria at five.\nWe're starting a new term on Monday.\nOn Tuesday I'm going to an interview at nine.\nThe room is available in the middle of the week.\nMy schedule is full this week.",
          perevod: {
            "I'm meeting Alim in the cafeteria at five.":
              "В пять я встречаюсь с Алимом в столовой.",
            "We're starting a new term on Monday.":
              "В понедельник мы начинаем новый семестр.",
            "On Tuesday I'm going to an interview at nine.":
              "Во вторник в девять я иду на собеседование.",
            "The room is available in the middle of the week.":
              "Комната свободна в середине недели.",
            "My schedule is full this week.": "На этой неделе у меня всё расписано.",
          },
          explain:
            "Пять строк. В первых трёх стоит договорённость: форма, глагол с -ing " +
            "и названное время. Две последние говорят о нынешнем положении дел, и " +
            "окончания -ing в них нет.",
        },
        {
          id: "slovar-nedeli",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "cafeteria", translation: "столовая", example: "I'm meeting Alim in the cafeteria at five.", hint: "/ˌkæfɪˈtɪəriə/" },
            { term: "term", translation: "учебная четверть", example: "We're starting a new term on Monday.", hint: "/tɜːm/" },
            { term: "available", translation: "свободен, доступен", example: "The room is available in the middle of the week.", hint: "/əˈveɪləbl/" },
            { term: "middle", translation: "середина", example: "The room is available in the middle of the week.", hint: "/ˈmɪdl/" },
            { term: "schedule", translation: "расписание (второе имя, рядом с timetable)", example: "My schedule is full this week.", hint: "/ˈʃedjuːl/" },
            { term: "interview", translation: "собеседование", example: "On Tuesday I'm going to an interview at nine.", hint: "/ˈɪntəvjuː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-formu",
          kind: "gap",
          prompt: "Алим и Дана условились на пять. Допиши недостающее слово.",
          before: "I ",
          after: " meeting Dana at five.",
          answer: "am",
          hint: "Лицу I полагается своя форма настоящего времени.",
          why: "I am meeting Dana at five. Лицу I полагается форма am.",
        },
        {
          id: "z2-vybrat-dogovorennost",
          kind: "choice",
          prompt: "В какой записи сказано о договорённости на пятницу?",
          options: [
            { text: "We are meeting on Friday.", correct: true },
            { text: "We meet on Fridays." },
            { text: "We are meeting." },
          ],
          hint: "У договорённости названо время, а у глагола стоит окончание -ing.",
          why:
            "We are meeting on Friday. Вторая запись говорит о том, что бывает " +
            "каждую пятницу, а в третьей времени нет вовсе.",
        },
        {
          id: "z3-otmetit-dogovorennosti",
          kind: "hottext",
          prompt: "Отметь записи, где названа договорённость.",
          parts: [
            { text: "I'm meeting Alim at five", selectable: true, correct: true },
            { text: " · " },
            { text: "My schedule is full", selectable: true },
            { text: " · " },
            { text: "We're starting a new term on Monday", selectable: true, correct: true },
            { text: " · " },
            { text: "The room is available", selectable: true },
          ],
          hint: "Ищи окончание -ing и названное время.",
          why:
            "Договорённость в I'm meeting Alim at five и We're starting a new term on " +
            "Monday. Две другие строки говорят о нынешнем положении дел.",
        },
        {
          id: "z4-sobrat-dogovorennost",
          kind: "order",
          prompt: "Собери строку: мы начинаем новую четверть в понедельник.",
          items: ["on Monday.", "a new term", "starting", "are", "We"],
          answer: [4, 3, 2, 1, 0],
          hint: "Сначала кто, потом форма, потом глагол с окончанием -ing.",
          why:
            "We are starting a new term on Monday. Форма are стоит после we, а глагол " +
            "берёт окончание -ing.",
        },
        {
          id: "z5-napisat-o-vstreche",
          kind: "short",
          prompt:
            "С Алимом условились на пять в столовой. Скажи об этом записью, разобранной в этом уроке, начав с I'm.",
          answer: "I'm meeting Alim in the cafeteria at five.",
          accept: [
            "I'm meeting Alim in the cafeteria at five",
            "I am meeting Alim in the cafeteria at five.",
            "I am meeting Alim in the cafeteria at five",
          ],
          hint: "После формы ставь глагол с окончанием -ing, а в конце — время.",
          why:
            "I'm meeting Alim in the cafeteria at five. Названо и место, и время, и " +
            "потому это договорённость.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-v-etot-den",
      title: "Не в этот день: I'm not working on Friday",
      estimatedMinutes: 14,
      outcome: "говорить, чего в расписании нет: I'm not working on Friday",

      blocks: [
        {
          id: "zachem-govorit-chego-net-v-raspisanii",
          kind: "explain",
          text: [
            "Дану зовут в пятницу, а пятница у неё свободна от работы.",
            "I'm not working on Friday. — В пятницу я не работаю.",
            "По-русски «не» снова стоит перед самим глаголом.",
            "По-английски not встаёт после формы am, is или are — там же, где в модуле «Я сделаю» оно вставало после will.",
            "Правило тут одно: not идёт сразу за словом, которое стоит перед глаголом.",
          ],
        },
        {
          id: "otricanie-po-licam",
          kind: "table",
          caption: "Отрицание: полностью и кратко",
          zvuchat: [
            "I am not working on Friday",
            "I'm not working on Friday",
            "he is not working on Friday",
            "he isn't working on Friday",
            "we are not working on Friday",
            "we aren't working on Friday",
          ],
          head: ["Полностью", "Кратко"],
          rows: [
            ["I am not working on Friday", "I'm not working on Friday"],
            ["he is not working on Friday", "he isn't working on Friday"],
            ["we are not working on Friday", "we aren't working on Friday"],
          ],
        },
        {
          id: "gde-stoit-not",
          kind: "explain",
          text: [
            "Слово not стоит между формой и глаголом, и это место не меняется.",
            "В краткой записи not прирастает к форме: isn't, aren't.",
            "У формы am так не выходит: там сжимают саму форму — I'm not.",
          ],
        },
        {
          id: "ne-posle-glagola",
          kind: "note",
          tone: "mistake",
          text:
            "«I not working on Friday» — так сказать нельзя: пропала форма " +
            "am.\n\nПо-русски её нет вовсе, и по-английски её легче всего забыть " +
            "именно в отрицании.",
        },
        {
          id: "chego-net-na-nedele",
          kind: "example",
          caption: "Чего нет на неделе",
          zvuchat: [
            "I'm not working on Friday.",
            "We aren't meeting in the cafeteria: it's loud there.",
            "I'm free every day except Tuesday.",
            "I'm busy this week, especially on Monday.",
            "What a pity! Dana isn't coming on Saturday.",
          ],
          text:
            "I'm not working on Friday.\nWe aren't meeting in the cafeteria: it's loud there.\nI'm free every day except Tuesday.\nI'm busy this week, especially on Monday.\nWhat a pity! Dana isn't coming on Saturday.",
          perevod: {
            "I'm not working on Friday.": "В пятницу я не работаю.",
            "We aren't meeting in the cafeteria: it's loud there.":
              "Мы не встречаемся в столовой: там шумно.",
            "I'm free every day except Tuesday.":
              "У меня занят только вторник.",
            "I'm busy this week, especially on Monday.":
              "На этой неделе у меня много дел, особенно в понедельник.",
            "What a pity! Dana isn't coming on Saturday.":
              "Какая жалость! Дана не придёт в субботу.",
          },
          explain:
            "Пять строк. В трёх из них стоит отрицание, и слово not везде занимает " +
            "место перед глаголом. Третья и четвёртая строки отрицания не содержат: " +
            "там о занятых днях сказано словами except и especially.",
        },
        {
          id: "slovar-svobodnyh-dney",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "except", translation: "кроме", example: "I'm free every day except Tuesday.", hint: "/ɪkˈsept/" },
            { term: "What a pity!", translation: "Какая жалость!", example: "What a pity! Dana isn't coming on Saturday.", hint: "/wɒt ə ˈpɪti/" },
            { term: "exactly", translation: "ровно, точно", example: "We're meeting at exactly five.", hint: "/ɪgˈzæktli/" },
            { term: "especially", translation: "особенно", example: "I'm busy this week, especially on Monday.", hint: "/ɪˈspeʃəli/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-not",
          kind: "gap",
          prompt: "В пятницу Дана не работает. Допиши недостающее слово.",
          before: "I'm ",
          after: " working on Friday.",
          answer: "not",
          hint: "Это слово встаёт между формой и глаголом.",
          why: "I'm not working on Friday. Слово not стоит перед глаголом.",
        },
        {
          id: "z2-vybrat-otricanie-v-raspisanii",
          kind: "choice",
          prompt: "В субботу они не встречаются. Какая запись верна?",
          options: [
            { text: "We not are meeting on Saturday." },
            { text: "We aren't meeting on Saturday.", correct: true },
            { text: "We aren't meet on Saturday." },
          ],
          hint: "Смотри, где стоит not и есть ли у глагола окончание -ing.",
          why:
            "We aren't meeting on Saturday. Слово not прирастает к форме, а глагол " +
            "берёт окончание -ing.",
        },
        {
          id: "z3-otmetit-vernye-otricaniya-raspisaniya",
          kind: "hottext",
          prompt: "Отметь верно записанные отрицания.",
          parts: [
            { text: "I'm not working on Friday", selectable: true, correct: true },
            { text: " · " },
            { text: "She isn't coming on Saturday", selectable: true, correct: true },
            { text: " · " },
            { text: "They not are staying here", selectable: true },
            { text: " · " },
            { text: "He isn't come on Monday", selectable: true },
          ],
          hint: "Проверь место слова not и окончание -ing у глагола.",
          why:
            "Верны I'm not working on Friday и She isn't coming on Saturday. В " +
            "третьей строке not стоит перед формой, в четвёртой у глагола нет " +
            "окончания -ing.",
        },
        {
          id: "z4-perepisat-kratko",
          kind: "short",
          prompt: "Сожми not с формой и запиши целиком: «He is not coming on Saturday.»",
          answer: "He isn't coming on Saturday.",
          accept: ["He isn't coming on Saturday", "He's not coming on Saturday.", "He's not coming on Saturday"],
          hint: "Слово not прирастает к форме, и на месте убранной буквы встаёт апостроф.",
          why:
            "He isn't coming on Saturday. От not остаётся n't, и оно прирастает к " +
            "форме is.",
        },
        {
          id: "z5-napisat-o-svobodnom-dne",
          kind: "short",
          prompt:
            "Скажи о себе по-английски: в пятницу ты не работаешь. Начни с I'm.",
          answer: "I'm not working on Friday.",
          accept: [
            "I'm not working on Friday",
            "I am not working on Friday.",
            "I am not working on Friday",
          ],
          hint: "Слово not встаёт между формой и глаголом с окончанием -ing.",
          why:
            "I'm not working on Friday. Слово not стоит перед глаголом, а глагол " +
            "берёт окончание -ing.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-o-dogovorennosti",
      title: "Спросить: Are you coming?",
      estimatedMinutes: 14,
      outcome: "спрашивать о договорённости и коротко отвечать",

      blocks: [
        {
          id: "zachem-sprosit-o-dogovorennosti",
          kind: "explain",
          text: [
            "Айгуль назначила встречу и хочет знать, будет ли Алим.",
            "Are you coming on Friday? — Ты придёшь в пятницу?",
            "Вопрос строят уже знакомым способом: вперёд уходит форма am, is или are.",
            "Так же было в модуле «Я собираюсь», а в модуле «Я сделаю» вперёд уходило will.",
            "Глагол с окончанием -ing при этом остаётся на месте.",
          ],
        },
        {
          id: "utverzhdenie-i-vopros-o-dogovorennosti",
          kind: "table",
          caption: "Утверждение и вопрос",
          zvuchat: [
            "You are coming on Friday.",
            "Are you coming on Friday?",
            "He is leaving at six.",
            "Is he leaving at six?",
            "They are staying till Sunday.",
            "Are they staying till Sunday?",
          ],
          head: ["Утверждение", "Вопрос"],
          rows: [
            ["You are coming on Friday.", "Are you coming on Friday?"],
            ["He is leaving at six.", "Is he leaving at six?"],
            ["They are staying till Sunday.", "Are they staying till Sunday?"],
          ],
        },
        {
          id: "chto-menyaetsya-v-voprose-o-dogovorennosti",
          kind: "explain",
          text: [
            "Форма am, is или are становится первым словом строки.",
            "Тот, о ком речь, отходит на второе место.",
            "Глагол с окончанием -ing не двигается вовсе.",
          ],
        },
        {
          id: "korotkie-otvety-o-dogovorennosti",
          kind: "table",
          caption: "Короткие ответы",
          zvuchat: [
            "Are you coming on Friday?",
            "Yes, I am.",
            "No, I'm not.",
            "Is he leaving at six?",
            "Yes, he is.",
            "No, he isn't.",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Are you coming on Friday?", "Yes, I am.", "No, I'm not."],
            ["Is he leaving at six?", "Yes, he is.", "No, he isn't."],
          ],
        },
        {
          id: "otvet-obryvaetsya-na-forme",
          kind: "explain",
          text: [
            "Короткий ответ собирают по тому же правилу: за yes или no повторяют слово из вопроса.",
            "Здесь этим словом будет форма: Are you…? — Yes, I am.",
            "Меняется и лицо: спрашивают про you, а отвечать надо про I.",
            "Глагол в коротком ответе не повторяется: строка обрывается сразу после формы.",
          ],
        },
        {
          id: "razgovor-o-pyatnice",
          kind: "example",
          caption: "Разговор о пятнице",
          razgovor: true,
          zvuchat: [
            "Are you coming on Friday?",
            "Yes, I am. Are you sending me the directions?",
            "Pardon? I didn't hear you.",
          ],
          text:
            "Are you coming on Friday?\nYes, I am. Are you sending me the directions?\nPardon? I didn't hear you.",
          perevod: {
            "Are you coming on Friday?": "Ты придёшь в пятницу?",
            "Yes, I am. Are you sending me the directions?":
              "Да. А ты пришлёшь мне, как добраться?",
            "Pardon? I didn't hear you.": "Извини, что? Не слышно.",
          },
          explain:
            "Три реплики. Оба вопроса начинаются с формы are, а короткий ответ " +
            "повторяет её вторым словом и на этом обрывается.",
        },
        {
          id: "slovar-razgovora-o-vstreche",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "directions", translation: "указания, как пройти", example: "Are you sending me the directions?", hint: "/daɪˈrekʃənz/" },
            { term: "pardon", translation: "простите, не расслышал", example: "Pardon? I didn't hear you.", hint: "/ˈpɑːdn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-nachalo-voprosa-o-vstreche",
          kind: "gap",
          prompt: "Спроси у собеседника, придёт ли он в пятницу. Допиши недостающее слово.",
          before: "",
          after: " you coming on Friday?",
          answer: "Are",
          hint: "Лицу you полагается своя форма настоящего времени.",
          why: "Are you coming on Friday? В вопросе форма уходит на первое место.",
        },
        {
          id: "z2-vybrat-korotkiy-otvet-o-vstreche",
          kind: "choice",
          prompt: "У тебя спросили: «Are you coming on Friday?» Ты придёшь. Какой ответ верен?",
          options: [
            { text: "Yes, I do." },
            { text: "Yes, I coming." },
            { text: "Yes, I am.", correct: true },
          ],
          hint: "В ответе повторяется та же форма, с которой начался вопрос.",
          why:
            "Yes, I am. Ответ повторяет форму из вопроса, а глагол в нём не нужен " +
            "вовсе.",
        },
        {
          id: "z3-otmetit-verno-postroennye-voprosy-o-vstreche",
          kind: "hottext",
          prompt: "Отметь верно построенные вопросы.",
          parts: [
            { text: "Is he leaving at six?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you coming on Friday?", selectable: true },
            { text: " · " },
            { text: "Are they staying till Sunday?", selectable: true, correct: true },
            { text: " · " },
            { text: "Are you come on Friday?", selectable: true },
          ],
          hint: "В начале стоит форма, а у глагола есть окончание -ing.",
          why:
            "Верны Is he leaving at six? и Are they staying till Sunday? В третьей " +
            "строке на первое место встало лишнее do, в четвёртой у глагола нет " +
            "окончания -ing.",
        },
        {
          id: "z4-sopostavit-vopros-i-otvet-o-vstreche",
          kind: "match",
          prompt: "Собери пары: вопрос и короткий ответ «да».",
          left: ["Are you coming on Friday?", "Is Dana leaving at six?", "Are your parents staying till Sunday?"],
          right: ["Yes, they are.", "Yes, I am.", "Yes, she is."],
          answer: [1, 2, 0],
          hint: "Смотри, о ком речь: об одном человеке, о двоих или о самом собеседнике.",
          why:
            "Вопрос про you требует I am, вопрос про Dana — she is, вопрос про " +
            "parents — they are.",
        },
        {
          id: "z5-napisat-vopros-ob-otezde",
          kind: "short",
          prompt: "Спроси по-английски, уезжает ли он в шесть. Начни с Is.",
          answer: "Is he leaving at six?",
          accept: ["Is he leaving at six"],
          hint: "После формы ставь того, о ком речь, потом глагол с окончанием -ing.",
          why:
            "Is he leaving at six? Форма стоит первой, лицо вторым, глагол сохраняет " +
            "окончание -ing.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-ty-delaesh-v-subbotu",
      title: "Подробности: What are you doing on Saturday?",
      estimatedMinutes: 14,
      outcome: "спрашивать подробности: What are you doing on Saturday?",

      blocks: [
        {
          id: "zachem-sprashivat-podrobnosti-o-subbote",
          kind: "explain",
          text: [
            "Дана хочет позвать Алима в субботу, но сначала узнаёт, чем он занят.",
            "Ответ «да» или «нет» тут ничего не даст.",
            "Поэтому к вопросу спереди приставляют вопросительное слово.",
            "What are you doing on Saturday? — Что ты делаешь в субботу?",
            "Здесь русский и английский снова совпадают: «что» и What стоят первыми одинаково.",
          ],
        },
        {
          id: "voprositelnye-slova-o-dogovorennosti",
          kind: "table",
          caption: "Вопросительное слово впереди",
          zvuchat: [
            "What are you doing on Saturday?",
            "Where are we meeting?",
            "When are you leaving?",
            "Whose textbook are you taking?",
          ],
          head: ["Слово", "По-русски", "Вопрос"],
          rows: [
            ["What", "что", "What are you doing on Saturday?"],
            ["Where", "где", "Where are we meeting?"],
            ["When", "когда", "When are you leaving?"],
            ["Whose", "чей", "Whose textbook are you taking?"],
          ],
        },
        {
          id: "poryadok-v-podrobnom-voprose-o-dogovorennosti",
          kind: "explain",
          text: [
            "Вопросительное слово занимает первое место, и форма отходит на второе.",
            "Дальше строка идёт так же, как в вопросе с ответом «да» или «нет».",
            "Слово whose спрашивает о хозяине вещи, и название вещи стоит сразу за ним.",
            "Оборот for two значит «на двоих».",
          ],
        },
        {
          id: "raspisanie-zanyatiy",
          kind: "example",
          caption: "Расписание занятий",
          razgovor: true,
          zvuchat: [
            "What are you doing on Saturday?",
            "I'm going to a physics class at ten.",
            "And where are you meeting your classmate?",
            "In the cafeteria. We're taking one textbook for two.",
          ],
          text:
            "What are you doing on Saturday?\nI'm going to a physics class at ten.\nAnd where are you meeting your classmate?\nIn the cafeteria. We're taking one textbook for two.",
          perevod: {
            "What are you doing on Saturday?": "Что ты делаешь в субботу?",
            "I'm going to a physics class at ten.":
              "В десять я иду на занятие по физике.",
            "And where are you meeting your classmate?":
              "А где ты встречаешься с однокурсником?",
            "In the cafeteria. We're taking one textbook for two.":
              "В столовой. Мы берём один учебник на двоих.",
          },
          explain:
            "Четыре реплики. Оба вопроса начинаются с вопросительного слова, и оба " +
            "ответа дают сведение: дело и место.",
        },
        {
          id: "slovar-zanyatiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "physics", translation: "физика", example: "I'm going to a physics class at ten.", hint: "/ˈfɪzɪks/" },
            { term: "chemistry", translation: "химия", example: "We're starting chemistry this term.", hint: "/ˈkemɪstri/" },
            { term: "classmate", translation: "одноклассник", example: "Where are you meeting your classmate?", hint: "/ˈklɑːsmeɪt/" },
            { term: "textbook", translation: "учебник", example: "We're taking one textbook for two.", hint: "/ˈtekstbʊk/" },
            { term: "whose", translation: "чей", example: "Whose textbook are you taking?", hint: "/huːz/" },
            { term: "class", translation: "занятие", example: "I'm going to a physics class at ten.", hint: "/klɑːs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-where-o-vstreche",
          kind: "gap",
          prompt: "Спроси о месте: где вы встречаетесь. Допиши недостающее слово.",
          before: "",
          after: " are we meeting?",
          answer: "Where",
          hint: "О месте спрашивает то же слово, что и в вопросе «где».",
          why: "Where are we meeting? О месте спрашивает слово Where.",
        },
        {
          id: "z2-vybrat-vopros-o-hozyaine",
          kind: "choice",
          prompt: "Какой вопрос спрашивает о хозяине учебника?",
          options: [
            { text: "What are you taking?" },
            { text: "Whose textbook are you taking?", correct: true },
            { text: "Where are you taking the textbook?" },
          ],
          hint: "Смотри на первое слово: у каждого своя работа.",
          why:
            "Whose textbook are you taking? Слово Whose спрашивает о хозяине вещи, и " +
            "название вещи стоит сразу за ним.",
        },
        {
          id: "z3-otmetit-poryadok-v-voprose-o-dogovorennosti",
          kind: "hottext",
          prompt: "Отметь вопросы, где порядок слов верен.",
          parts: [
            { text: "What are you doing on Saturday?", selectable: true, correct: true },
            { text: " · " },
            { text: "When you are leaving?", selectable: true },
            { text: " · " },
            { text: "Where are we meeting?", selectable: true, correct: true },
            { text: " · " },
            { text: "What do you doing on Saturday?", selectable: true },
          ],
          hint: "После вопросительного слова сразу идёт форма, а лицо — за ней.",
          why:
            "Верны What are you doing on Saturday? и Where are we meeting? Во второй " +
            "строке форма ушла за лицо, в четвёртой на её месте стоит do.",
        },
        {
          id: "z4-sobrat-vopros-o-meste",
          kind: "order",
          prompt: "Собери вопрос: где вы встречаетесь в субботу?",
          items: ["on Saturday?", "meeting", "are", "we", "Where"],
          answer: [4, 2, 3, 1, 0],
          hint: "После вопросительного слова сразу идёт форма, а лицо — за ней.",
          why:
            "Where are we meeting on Saturday? Вопросительное слово первое, форма " +
            "вторая, лицо третье.",
        },
        {
          id: "z5-napisat-vopros-o-dele",
          kind: "short",
          prompt: "Спроси по-английски, что собеседник делает в субботу. Начни с What.",
          answer: "What are you doing on Saturday?",
          accept: ["What are you doing on Saturday"],
          hint: "После What ставь форму are, потом you и глагол с окончанием -ing.",
          why:
            "What are you doing on Saturday? Вопросительное слово идёт первым, форма " +
            "are — вторым.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dogovorilis-ili-sobirayus",
      title: "Договорились или собираюсь",
      estimatedMinutes: 14,
      outcome: "понимать по случаю, о чём условились, а что человек решил сам",
      vozvrat: [{ iz: "ya-sobirayus", zadanie: "z1-dopisat-am" }],

      blocks: [
        {
          id: "zachem-razlichat-dve-zapisi",
          kind: "explain",
          text: [
            "Про субботу можно сказать двумя записями, и обе верны.",
            "I'm meeting Dana at five. — Я встречаюсь с Даной в пять.",
            "I'm going to meet Dana. — Я собираюсь встретиться с Даной.",
            "По-русски разница слышна сразу, и делается она теми же двумя способами.",
            "«Встречаюсь» значит, что с Даной условились и она этого ждёт.",
            "«Собираюсь встретиться» значит, что решение принято, а Дана может ещё и не знать.",
            "Решение без договорённости называют намерением — о нём модуль «Я собираюсь».",
          ],
        },
        {
          id: "dve-zapisi-ryadom",
          kind: "table",
          caption: "Какой случай — такая запись",
          zvuchat: [
            "I'm meeting Dana at five.",
            "I'm going to meet Dana.",
            "We're leaving on Monday.",
            "We're going to leave on Monday.",
          ],
          head: ["Случай", "По-английски", "По-русски"],
          rows: [
            [
              "с Даной условились, она ждёт",
              "I'm meeting Dana at five.",
              "Я встречаюсь с Даной в пять.",
            ],
            [
              "решение принято, Дана ещё не знает",
              "I'm going to meet Dana.",
              "Я собираюсь встретиться с Даной.",
            ],
            [
              "билеты куплены, поезд в понедельник",
              "We're leaving on Monday.",
              "Мы уезжаем в понедельник.",
            ],
            [
              "решили ехать, билетов ещё нет",
              "We're going to leave on Monday.",
              "Мы собираемся уехать в понедельник.",
            ],
          ],
        },
        {
          id: "raznica-v-sluchae",
          kind: "explain",
          text: [
            "Разница здесь в случае, а не в самой записи.",
            "Обе строки могут назвать время: и I'm meeting Dana at five, и We're going to leave on Monday.",
            "Поэтому одну строку без случая часто не разобрать вовсе, и это не беда.",
            "В письме случай виден по соседним строкам: ждёт ли собеседник, куплены ли билеты.",
            "И осторожно: после going to бывает не глагол, а место — I'm going to the shop значит просто «иду в магазин».",
          ],
        },
        {
          id: "obe-zapisi-vernye",
          kind: "note",
          tone: "info",
          text:
            "Обе записи правильные, и выбирать между ними как между верным и " +
            "неверным не надо.\n\nОни говорят немного разное, и это всё.",
        },
        {
          id: "pismo-s-dvumya-zapisyami",
          kind: "example",
          caption: "Суббота Айгуль",
          zvuchat: [
            "I'm meeting my classmate at ten on Saturday: we're taking one textbook.",
            "After that I'm going to read about biology and geography, but I'm not meeting anybody.",
            "In the evening we're leaving for the village: my parents are meeting us at the station.",
            "My grade for biology is coming on Monday, and my parents know about it.",
          ],
          text:
            "I'm meeting my classmate at ten on Saturday: we're taking one textbook.\nAfter that I'm going to read about biology and geography, but I'm not meeting anybody.\nIn the evening we're leaving for the village: my parents are meeting us at the station.\nMy grade for biology is coming on Monday, and my parents know about it.",
          perevod: {
            "I'm meeting my classmate at ten on Saturday: we're taking one textbook.":
              "В субботу в десять я встречаюсь с однокурсницей: мы берём один учебник.",
            "After that I'm going to read about biology and geography, but I'm not meeting anybody.":
              "После этого я собираюсь почитать про биологию и географию, но ни с кем не встречаюсь.",
            "In the evening we're leaving for the village: my parents are meeting us at the station.":
              "Вечером мы уезжаем в село: родители встречают нас на вокзале.",
            "My grade for biology is coming on Monday, and my parents know about it.":
              "Оценку по биологии объявят в понедельник, и родители об этом знают.",
          },
          explain:
            "Четыре строки. В первой, третьей и четвёртой рядом стоит второй человек: " +
            "одноклассник ждёт, родители встречают и знают об оценке. Во второй " +
            "сказано «но я ни с кем не встречаюсь» — значит договорённости нет ни с кем, и " +
            "это намерение.",
        },
        {
          id: "slovar-uchyoby",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "biology", translation: "биология", example: "I'm going to read about biology and geography.", hint: "/baɪˈɒlədʒi/" },
            { term: "grade", translation: "оценка", example: "My grade for biology is coming on Monday.", hint: "/greɪd/" },
            { term: "geography", translation: "география", example: "I'm going to read about biology and geography.", hint: "/dʒɪˈɒgrəfi/" },
            { term: "headteacher", translation: "директор школы", example: "The headteacher is coming on Tuesday.", hint: "/ˈhedtiːtʃə/" },
            { term: "anybody", translation: "кто-нибудь", example: "I'm not meeting anybody.", hint: "/ˈenibɒdi/" },
            { term: "telephone", translation: "звонить по телефону; телефон", example: "I'm not telephoning her yet.", hint: "/ˈtelɪfəʊn/" },
            { term: "yet", translation: "пока ещё", example: "I'm not telephoning her yet.", hint: "/jet/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-o-chem-uslovilis",
          kind: "choice",
          prompt:
            "Алим пишет: «I'm meeting Dana at five. She is waiting for me.» О чём это говорит?",
          options: [
            { text: "С Даной уже условились, и она этого ждёт", correct: true },
            { text: "Алим решил сам, а Дана ещё не знает" },
            { text: "Встреча не состоится" },
          ],
          hint: "Смотри на вторую строку: есть ли в случае второй человек.",
          why:
            "She is waiting for me — Дана ждёт, значит об этом условились. Одна " +
            "первая строка сказала бы меньше.",
        },
        {
          id: "z2-otmetit-vtorogo-cheloveka",
          kind: "hottext",
          prompt: "Отметь строки, где рядом назван второй человек.",
          parts: [
            { text: "We're leaving on Monday: my parents are meeting us", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm going to read about biology", selectable: true },
            { text: " · " },
            { text: "I'm meeting my classmate at ten", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm going to leave on Monday", selectable: true },
          ],
          hint: "Ищи того, кто ждёт или с кем условились.",
          why:
            "Второй человек есть в We're leaving on Monday: my parents are meeting us " +
            "и I'm meeting my classmate at ten. Две другие строки говорят о " +
            "собственном решении, и обе при этом верны.",
        },
        {
          id: "z3-vybrat-zapis-po-sluchayu",
          kind: "choice",
          prompt:
            "Случай такой: билеты куплены, поезд в понедельник. Какой записью об этом скажут скорее?",
          options: [
            { text: "We leave on Mondays." },
            { text: "We're leaving on Monday.", correct: true },
            { text: "We left on Monday." },
          ],
          hint: "О деле, о котором уже условились, говорят записью этого модуля.",
          why:
            "We're leaving on Monday. Первая запись говорит о каждом понедельнике, " +
            "третья — о прошлом.",
        },
        {
          id: "z4-chto-govorit-zapis",
          kind: "choice",
          prompt:
            "Собеседник написал: «I'm going to meet Dana, but I'm not telephoning her yet.» Что из этого видно?",
          options: [
            { text: "Встреча не состоится" },
            { text: "Дана ждёт его в пять" },
            { text: "Он так решил, а Дана ещё не знает", correct: true },
          ],
          hint: "Вторая половина строки говорит, звонил ли он ей.",
          why:
            "Он ещё не звонит, значит договорённости нет и сказано о намерении. Отказом " +
            "такая запись не является.",
        },
        {
          id: "z5-napisat-dogovorennost",
          kind: "short",
          prompt:
            "С одноклассником уже условились на десять. Скажи об этом записью, разобранной в этом уроке, начав с I'm.",
          answer: "I'm meeting my classmate at ten.",
          accept: [
            "I'm meeting my classmate at ten",
            "I am meeting my classmate at ten.",
            "I am meeting my classmate at ten",
          ],
          hint: "После формы ставь глагол с окончанием -ing, а в конце — час.",
          why:
            "I'm meeting my classmate at ten. О деле, о котором условились, говорят " +
            "записью этого урока.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-nedele",
      title: "Читаем письмо о делах на неделе",
      estimatedMinutes: 13,
      outcome: "понимать письмо о делах на неделе",

      blocks: [
        {
          id: "zachem-chitat-o-nedele",
          kind: "explain",
          text: [
            "Дана расписывает Алиму свою неделю в одном письме.",
            "Дел там много, и у каждого своё время.",
            "Читая, отмечай день и час: вопросы будут именно о них.",
          ],
        },
        {
          id: "pismo-o-nedele",
          kind: "text",
          title: "Письмо от Даны",
          genre: "message",
          body: [
            "Hi Alim! This isn't a normal week: my schedule is full, but I'm free on Thursday.",
            "On Monday I'm meeting my classmate at ten: we're taking one textbook for two. The break is at eleven.",
            "On Tuesday the headteacher is coming to our school with new instructions, so we're staying till six.",
            "On Wednesday every schoolchild is coming at eight: we're starting the term with a new blackboard.",
            "I'm not working on Friday, but I'm going to the site of the new school in the middle of the day.",
            "What are you doing at the weekend? Are you coming to the cafeteria on Sunday?",
          ],
          glossary: [
            { term: "one textbook for two", translation: "один учебник на двоих" },
            { term: "at the weekend", translation: "в выходные" },
            { term: "till six", translation: "до шести" },
          ],
        },
        {
          id: "kak-chitat-raspisanie",
          kind: "note",
          tone: "info",
          text:
            "У каждой строки письма свой день, и день назван первым словом или " +
            "почти первым.\n\nПоэтому нужное сведение ищут по дню недели, а не читают " +
            "письмо подряд.",
        },
        {
          id: "slovar-shkoly",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "blackboard", translation: "школьная доска", example: "We're starting the term with a new blackboard.", hint: "/ˈblækbɔːd/" },
            { term: "schoolchild", translation: "школьник", example: "Every schoolchild is coming at eight.", hint: "/ˈskuːltʃaɪld/" },
            { term: "normal", translation: "обычный (то же, что usual)", example: "This isn't a normal week.", hint: "/ˈnɔːməl/" },
            { term: "instructions", translation: "указания", example: "The headteacher is coming with new instructions.", hint: "/ɪnˈstrʌkʃənz/" },
            { term: "break", translation: "перемена, перерыв", example: "The break is at eleven.", hint: "/breɪk/" },
            { term: "site", translation: "площадка, участок", example: "I'm going to the site of the new school.", hint: "/saɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoy-den-svoboden",
          kind: "short",
          about: "pismo-o-nedele",
          prompt: "В какой день Дана свободна? Ответь одним английским словом.",
          answer: "Thursday",
          accept: ["on Thursday"],
          hint: "Об этом сказано в первой строке, после слова but.",
          why: "This isn't a normal week: my schedule is full, but I'm free on Thursday.",
        },
        {
          id: "z2-s-kem-vstrecha-v-ponedelnik",
          kind: "choice",
          about: "pismo-o-nedele",
          prompt: "С кем Дана встречается в понедельник?",
          options: [
            { text: "С директором школы" },
            { text: "С одноклассником", correct: true },
            { text: "С Алимом" },
          ],
          hint: "Об этом сказано во второй строке.",
          why: "On Monday I'm meeting my classmate at ten.",
        },
        {
          id: "z3-do-kakogo-chasa-vo-vtornik",
          kind: "short",
          about: "pismo-o-nedele",
          prompt: "До какого часа они остаются во вторник? Ответь одним английским словом.",
          answer: "six",
          accept: ["till six", "at six"],
          hint: "Час назван в третьей строке, после слова till.",
          why:
            "On Tuesday the headteacher is coming to our school with new " +
            "instructions, so we're staying till six.",
        },
        {
          id: "z4-otmetit-dogovorennosti-pisma",
          kind: "hottext",
          about: "pismo-o-nedele",
          prompt: "Отметь строки письма, где назван час.",
          parts: [
            { text: "I'm meeting my classmate at ten", selectable: true, correct: true },
            { text: " · " },
            { text: "my schedule is full", selectable: true },
            { text: " · " },
            { text: "the headteacher is coming to our school with new instructions", selectable: true },
            { text: " · " },
            { text: "we're staying till six", selectable: true, correct: true },
          ],
          hint: "Час — это at ten или till six, а не день недели.",
          why:
            "Час назван в I'm meeting my classmate at ten и we're staying till six. " +
            "В двух других частях письма его нет.",
        },
        {
          id: "z5-o-chem-sprashivaet-dana",
          kind: "choice",
          about: "pismo-o-nedele",
          prompt: "О чём Дана спрашивает Алима в конце письма?",
          options: [
            { text: "Придёт ли он в столовую в воскресенье", correct: true },
            { text: "Свободен ли он во вторник" },
            { text: "Есть ли у него учебник" },
          ],
          hint: "Вопросы стоят последней строкой письма.",
          why: "Are you coming to the cafeteria on Sunday?",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-naznachennom",
      title: "Слушаем, что и когда назначено",
      estimatedMinutes: 13,
      outcome: "слышать в записи, что и когда назначено",

      blocks: [
        {
          id: "zachem-slushat-o-naznachennom",
          kind: "explain",
          text: [
            "Двое сверяют расписание на неделю и называют дни быстро.",
            "Держаться помогает одно: у каждой договорённости есть свой час.",
            "Ниже запись такого разговора.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-o-raspisanii",
          kind: "audio",
          caption: "Разговор о расписании",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "What are you doing on Monday? — I'm meeting my classmate at ten on " +
            "Monday. — And are you coming to the chemistry class? — No, I'm not. I'm " +
            "not working on Friday, so I'm leaving. — Pardon? — I'm leaving on " +
            "Friday. — Then we're meeting on Thursday, at exactly five.",
        },
        {
          id: "chto-slushat-o-raspisanii",
          kind: "note",
          tone: "info",
          text:
            "Слушай, во сколько встреча в понедельник, в какой день человек уезжает " +
            "и на какой день они условились в конце.\n\nОб этом и будут вопросы.",
        },

        // ---- задания ----
        {
          id: "z1-vo-skolko-vstrecha-v-ponedelnik",
          kind: "short",
          about: "zapis-o-raspisanii",
          prompt: "Во сколько встреча в понедельник? Ответь одним английским словом.",
          answer: "ten",
          accept: ["at ten"],
          hint: "Час назван во второй реплике.",
          why: "I'm meeting my classmate at ten on Monday.",
        },
        {
          id: "z2-idet-li-na-himiyu",
          kind: "choice",
          about: "zapis-o-raspisanii",
          prompt: "Придёт ли человек на занятие по химии?",
          options: [
            { text: "Да" },
            { text: "Нет", correct: true },
            { text: "В записи об этом не сказано" },
          ],
          hint: "Ответ звучит сразу после вопроса о химии.",
          why: "Are you coming to the chemistry class? — No, I'm not.",
        },
        {
          id: "z3-vosstanovit-uslyshannoe-o-vstreche",
          kind: "order",
          zvuk: "I'm meeting my classmate at ten on Monday.",
          prompt: "Послушай и собери фразу из услышанного.",
          items: ["on Monday.", "at ten", "my classmate", "meeting", "I'm"],
          answer: [4, 3, 2, 1, 0],
          hint: "Слушай, что человек назвал раньше — час или день.",
          why:
            "I'm meeting my classmate at ten on Monday. Час назван раньше дня, и " +
            "услышать это можно только по записи.",
        },
        {
          id: "z4-v-kakoy-den-uezzhaet",
          kind: "short",
          about: "zapis-o-raspisanii",
          prompt: "В какой день человек уезжает? Ответь одним английским словом.",
          answer: "Friday",
          accept: ["on Friday"],
          hint: "День назван дважды: сначала как свободный, потом как день отъезда.",
          why: "I'm not working on Friday… I'm leaving on Friday.",
        },
        {
          id: "z5-na-kakoy-den-uslovilis",
          kind: "choice",
          about: "zapis-o-raspisanii",
          prompt: "На какой день они условились в конце разговора?",
          options: [
            { text: "На понедельник" },
            { text: "На пятницу" },
            { text: "На четверг", correct: true },
          ],
          hint: "Об этом сказано последней репликой.",
          why: "Then we're meeting on Thursday, at exactly five.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-o-nedele",
      title: "Пишем письмо о своей неделе",
      estimatedMinutes: 15,
      outcome: "проверять письмо: названо ли у каждой договорённости время",

      blocks: [
        {
          id: "zachem-proveryat-vremya",
          kind: "explain",
          text: [
            "Алим написал Дане о своей неделе и просит посмотреть, всё ли понятно.",
            "В письме о расписании ошибаются не в грамматике, а в пропущенном времени.",
            "Проверить можно так: у каждой строки с окончанием -ing найди день или час.",
            "Если их нет, читатель не поймёт, о чём условились, а о чём только думают.",
          ],
        },
        {
          id: "est-li-vremya-v-stroke",
          kind: "table",
          caption: "Есть ли в строке время",
          zvuchat: [
            "I'm meeting Dana at five",
            "We're leaving on Monday",
            "I'm working",
          ],
          head: ["Строка", "Время", "Понятно ли"],
          rows: [
            ["I'm meeting Dana at five", "at five", "да"],
            ["We're leaving on Monday", "on Monday", "да"],
            ["I'm working", "нет", "нет: непонятно, когда"],
          ],
        },
        {
          id: "pochemu-proverka-po-vremeni",
          kind: "explain",
          text: [
            "Грамматика в такой строке обычно верна, и глазами ошибку не поймать.",
            "Поэтому проверяют не запись, а сведения: день, час, место.",
            "Вторым делом смотрят, у каждого ли дела есть свой день.",
          ],
        },
        {
          id: "obrazets-pisma-o-nedele",
          kind: "example",
          caption: "Образец письма",
          perevod: {
            "Hi Dana! About Saturday: I'm not coming at ten.":
              "Привет, Дана! Насчёт субботы: в десять я не приду.",
            "The headteacher is coming to us at nine, so I'm staying at school.":
              "В девять к нам приходит директор, поэтому я остаюсь в школе.",
            "Are you meeting me at one instead?":
              "Может, встретимся в час вместо этого?",
            "Whose textbook are we taking?": "Чей учебник мы берём?",
          },
          zvuchat: [
            "Hi Dana! About Saturday: I'm not coming at ten.",
            "The headteacher is coming to us at nine, so I'm staying at school.",
            "Are you meeting me at one instead?",
            "Whose textbook are we taking?",
          ],
          text:
            "Hi Dana! About Saturday: I'm not coming at ten.\nThe headteacher is coming to us at nine, so I'm staying at school.\nAre you meeting me at one instead?\nWhose textbook are we taking?",
          explain:
            "Четыре строки, и это не рассказ о неделе, а перенос уже назначенной " +
            "встречи. Сначала сказано, чего не будет, потом причина, потом новый час " +
            "и вопрос.",
        },
        {
          id: "chto-proverit-v-pisme",
          kind: "note",
          tone: "info",
          text:
            "Проверь четыре вещи.\n\nУ каждой строки с окончанием -ing есть день или " +
            "час. Слово not стоит перед глаголом. В конце есть вопрос собеседнику. " +
            "Дни недели написаны с заглавной буквы.\n\nЕсли строку пришлось " +
            "переписать, проверь её заново с начала.",
        },

        // ---- задания ----
        {
          id: "z1-nayti-stroku-bez-vremeni",
          kind: "hottext",
          prompt: "Отметь строки, где время не названо.",
          parts: [
            { text: "I'm going to the shop", selectable: true, correct: true },
            { text: " · " },
            { text: "On Monday I'm meeting my classmate", selectable: true },
            { text: " · " },
            { text: "We're staying at school", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm not working on Friday", selectable: true },
          ],
          hint: "Ищи день недели или час.",
          why:
            "Времени нет в I'm going to the shop и We're staying at school. В двух " +
            "других строках названы Monday и Friday.",
        },
        {
          id: "z2-dopisat-vremya-v-stroku",
          kind: "short",
          prompt:
            "В письме строка «I'm meeting my classmate.» Допиши час — шесть — и запиши строку целиком.",
          answer: "I'm meeting my classmate at six.",
          accept: ["I'm meeting my classmate at six", "I am meeting my classmate at six.", "I am meeting my classmate at six"],
          hint: "Час ставят в конце строки со словом at.",
          why:
            "I'm meeting my classmate at six. Без часа читатель не узнает, когда " +
            "встреча, и записка своего дела не делает.",
        },
        {
          id: "z3-vybrat-mesto-not",
          kind: "choice",
          prompt: "Какая строка письма записана верно?",
          options: [
            { text: "I working not on Friday." },
            { text: "I'm not working on Friday.", correct: true },
            { text: "I not am working on Friday." },
          ],
          hint: "Слово not стоит между формой и глаголом.",
          why:
            "I'm not working on Friday. Слово not встаёт после формы и перед " +
            "глаголом.",
        },
        {
          id: "z4-napisat-pismo-o-nedele",
          kind: "essay",
          prompt:
            "Встречу надо перенести. Напиши об этом четырьмя строками: чего не будет, почему, какой час предлагаешь взамен и вопрос собеседнику.",
          minWords: 16,
          sample:
            "Hi Dana! About Saturday: I'm not coming at ten.\nThe headteacher is coming to us at nine, so I'm staying at school.\nAre you meeting me at one instead?\nWhose textbook are we taking?",
          checklist: [
            "у каждой строки с окончанием -ing есть день или час",
            "слово not стоит перед глаголом",
            "в конце есть вопрос собеседнику",
            "дни недели написаны с заглавной буквы",
          ],
          hint: "Бери глаголы, которые знаешь: meet, come, go, leave, work, play, start, stay.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы у каждой " +
            "договорённости был назван день или час.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, развернуть краткую, перенести на другое лицо, назвать причину
      // ошибки, прочитать смысл строки, ответить по записи. Рамок и предметов
      // заданий уроков здесь нет.

      // ---- итог 1 ----
      {
        id: "q-ispravit-formu-dogovorennosti",
        kind: "short",
        outcome: "говорить о договорённости: I'm meeting Dana at five",
        prompt:
          "У глагола пропало окончание. Исправь и запиши целиком: «We are meet at five on Friday.»",
        answer: "We are meeting at five on Friday.",
        accept: ["We are meeting at five on Friday"],
        why:
          "We are meeting at five on Friday. В записи о договорённости глагол берёт " +
          "окончание -ing.",
      },
      {
        id: "q-odin-raz-ili-vsegda",
        kind: "short",
        outcome: "говорить о договорённости: I'm meeting Dana at five",
        prompt:
          "Запись «We play chess on Saturdays» говорит о каждой субботе. Перепиши её так, чтобы речь шла об одной назначенной субботе.",
        answer: "We are playing chess on Saturday.",
        accept: [
          "We are playing chess on Saturday",
          "We're playing chess on Saturday.",
          "We're playing chess on Saturday",
        ],
        why:
          "We are playing chess on Saturday. Об одном назначенном разе говорят формой " +
          "и глаголом с окончанием -ing.",
      },

      // ---- итог 2 ----
      {
        id: "q-perenesti-otricanie",
        kind: "short",
        outcome: "говорить, чего в расписании нет: I'm not working on Friday",
        prompt:
          "О себе говорят так: «I'm not staying till six.» Скажи то же о сестре, начав с My sister.",
        answer: "My sister isn't staying till six.",
        accept: [
          "My sister isn't staying till six",
          "My sister is not staying till six.",
          "My sister is not staying till six",
        ],
        why:
          "My sister isn't staying till six. Сестра одна, и потому вместо am встаёт " +
          "is, а not остаётся перед глаголом.",
      },
      {
        id: "q-gde-oshibka-v-otricanii",
        kind: "choice",
        outcome: "говорить, чего в расписании нет: I'm not working on Friday",
        prompt: "В записи «They not are coming on Sunday» одна ошибка. Какая?",
        options: [
          { text: "У глагола лишнее окончание -ing" },
          { text: "День недели написан не на своём месте" },
          { text: "Два слова стоят в обратном порядке", correct: true },
        ],
        why:
          "They aren't coming on Sunday. Порядок обратный: сначала форма, потом not.",
      },

      // ---- итог 3 ----
      {
        id: "q-zadat-vopros-o-nochevke",
        kind: "short",
        outcome: "спрашивать о договорённости и коротко отвечать",
        prompt:
          "Ты хочешь узнать, остаются ли они до воскресенья. Задай вопрос по-английски, начав с Are.",
        answer: "Are they staying till Sunday?",
        accept: ["Are they staying till Sunday"],
        why:
          "Are they staying till Sunday? Форма идёт первой, лицо вторым, а глагол " +
          "сохраняет окончание -ing.",
      },
      {
        id: "q-korotkiy-otvet-o-daniyare",
        kind: "short",
        outcome: "спрашивать о договорённости и коротко отвечать",
        prompt:
          "У тебя спросили: «Is Daniyar leaving at six?» Он не уезжает. Ответь коротко — нет.",
        answer: "No, he isn't.",
        accept: ["No, he isn't", "No, he is not.", "No, he is not"],
        why: "No, he isn't. Вместо имени встаёт he, а форма из вопроса возвращается.",
      },

      // ---- итог 4 ----
      {
        id: "q-podobrat-voprositelnoe-slovo",
        kind: "gap",
        outcome: "спрашивать подробности: What are you doing on Saturday?",
        prompt: "Собеседник ответил: «At six.» Допиши слово, с которого начинался вопрос.",
        before: "",
        after: " are you leaving?",
        answer: "When",
        why:
          "When are you leaving? Ответ называет час, а о времени спрашивает слово " +
          "When.",
      },
      {
        id: "q-vopros-o-hozyaine-veshchi",
        kind: "short",
        outcome: "спрашивать подробности: What are you doing on Saturday?",
        prompt:
          "Спроси по-английски, чей учебник вы берёте. Начни с Whose.",
        answer: "Whose textbook are we taking?",
        accept: ["Whose textbook are we taking"],
        why:
          "Whose textbook are we taking? Название вещи стоит сразу за словом Whose, " +
          "и только потом идёт форма.",
      },

      // ---- итог 5 ----
      {
        id: "q-chitat-smysl-stroki",
        kind: "choice",
        outcome: "понимать по случаю, о чём условились, а что человек решил сам",
        prompt:
          "В письме стоят две строки подряд: «I'm leaving on Monday. My parents are meeting me at the station.» Что из этого видно?",
        options: [
          { text: "Об отъезде условились: родители встречают", correct: true },
          { text: "Отъезд ещё под вопросом" },
          { text: "Родители не знают об отъезде" },
        ],
        why:
          "Вторая строка называет второго человека, который этого ждёт. Именно она и " +
          "показывает, что о деле уже условились.",
      },
      {
        id: "q-dobavit-vremya-k-zapisi",
        kind: "short",
        outcome: "понимать по случаю, о чём условились, а что человек решил сам",
        prompt:
          "Из записи «We're staying at school» непонятно, до каких пор. Допиши час — до шести — и запиши строку целиком.",
        answer: "We're staying at school till six.",
        accept: [
          "We're staying at school till six",
          "We are staying at school till six.",
          "We are staying at school till six",
        ],
        why:
          "We're staying at school till six. Без часа читатель не узнает, до " +
          "которого времени ждать.",
      },

      // ---- итог 6 ----
      {
        id: "q-pismo-kto-prihodit",
        kind: "choice",
        outcome: "понимать письмо о делах на неделе",
        // Строка была дословно из письма для чтения того же модуля — девять слов
        // подряд. Строка новая, того же жанра; о пятнице и физике письмо модуля
        // не говорит, так что спор с ним исключён.
        prompt:
          "В письме написано: «On Friday we're having a physics lesson, so we're staying till five.» Почему они остаются до пяти?",
        options: [
          { text: "Потому что в пятницу занятие по физике", correct: true },
          { text: "Потому что в пятницу нет занятий" },
          { text: "Потому что они встречаются с одноклассником" },
        ],
        why: "Слово so связывает две половины: есть занятие — значит остаются.",
      },
      {
        id: "q-pismo-skolko-uchebnikov",
        kind: "choice",
        outcome: "понимать письмо о делах на неделе",
        // Строка была дословно из письма для чтения того же модуля — двенадцать слов
        // подряд. Первая половина взята новая; оборот one textbook for two остаётся
        // нарочно: он и есть предмет вопроса и стоит в словнике модуля.
        prompt:
          "В письме написано: «I'm meeting my classmate in the cafeteria at one: we're taking one textbook for two.» Сколько у них учебников?",
        options: [
          { text: "Два — по одному на каждого" },
          { text: "Один на двоих", correct: true },
          { text: "Ни одного" },
        ],
        why: "one textbook for two — один учебник на двоих.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-kto-ostayotsya",
        kind: "short",
        outcome: "слышать в записи, что и когда назначено",
        zvuk: "Is your classmate staying till six? — No, she isn't. She's leaving at four.",
        prompt: "Послушай и запиши одним английским словом, во сколько она уходит.",
        answer: "four",
        accept: ["at four"],
        why:
          "Названы два часа: до шести не остаётся, а уходит в four. Нужен второй.",
      },
      {
        id: "q-na-sluh-kakim-slovom-tochno",
        kind: "short",
        outcome: "слышать в записи, что и когда назначено",
        zvuk: "When are we meeting? — We're meeting at exactly five.",
        prompt:
          "Послушай и запиши одним английским словом, которым сказано, что час назван точно.",
        answer: "exactly",
        why: "When are we meeting? — We're meeting at exactly five.",
      },

      // ---- итог 8 ----
      {
        id: "q-pismo-chto-propushcheno",
        kind: "choice",
        outcome: "проверять письмо: названо ли у каждой договорённости время",
        prompt: "В письме строка «I'm meeting my classmate.» Чего в ней не хватает?",
        options: [
          { text: "Окончания -ing у глагола" },
          { text: "Дня или часа", correct: true },
          { text: "Слова not" },
        ],
        why:
          "Грамматика здесь верна, а сведений мало: без дня или часа читатель не " +
          "поймёт, когда встреча.",
      },
      {
        id: "q-pismo-dopisat-chas",
        kind: "short",
        outcome: "проверять письмо: названо ли у каждой договорённости время",
        prompt:
          "В письме строка «The headteacher is coming to us.» Читателю непонятно, когда. Допиши час — в девять — и запиши строку целиком.",
        answer: "The headteacher is coming to us at nine.",
        accept: ["The headteacher is coming to us at nine"],
        why:
          "The headteacher is coming to us at nine. Грамматика в строке была верна, " +
          "не хватало именно часа.",
      },
    ],
  },
};

export default module;
