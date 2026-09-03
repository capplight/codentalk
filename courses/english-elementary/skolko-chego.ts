import type { Module } from "@/lib/content/types";

/**
 * Модуль 18 курса «Английский · Elementary»: сколько чего.
 *
 * Программа: docs/programma-english-elementary.md, модуль 18 — «говорить о
 * количестве точно».
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «ИСЧИСЛЯЕМОЕ И НЕИСЧИСЛЯЕМОЕ».
 *
 * Оба слова — настоящие имена, а не наши ярлыки: так эти два вида
 * существительных зовут и русские учебники, и источник (countable, uncountable
 * nouns). Слов «счётное», «штучное», «сыпучее» в тексте для ученика нет ни разу.
 * Слово «существительное» вводится в уроке 1 строкой с примерами: до сих пор
 * курс называл эти слова просто вещами, а здесь нужно имя, потому что вид у них
 * разный.
 *
 * ПРОГРАММА РАСХОДИЛАСЬ С ИСТОЧНИКОМ, И ДВА ОБЕЩАНИЯ ИЗ ЧЕТЫРЁХ СНЯТЫ. Строка
 * обещала «`a few`, `a little`, `a lot of`, `enough`». Расхождение было
 * предсказано ещё при написании модуля 16, теперь проверено по каждой графе:
 *
 * - `a little` — B1, DETERMINERS quantity, «FORM/USE: WITH UNCOUNTABLE NOUNS»:
 *   «(`a little`, `a bit of` and `a little bit of`)». Словник A2 Key даёт только
 *   `little (adj)`, без пометы определителя. Снято.
 * - `enough` Я СНАЧАЛА СНЯЛ ПО ТОЙ ЖЕ ГРАФЕ И ОШИБСЯ. Методист открыл словник
 *   A2 Key и показал строку `enough (adv, det & pron)`: требования экзамена
 *   ступени помечают его определителем. Я проверил сам — строка есть.
 *
 *   И вышел двойной стандарт в одном файле: для `How much` и `How many` графа
 *   B1 объявлена разрешением, а для `enough` та же графа — приговором. Один
 *   довод, два вывода. `enough` вернулся отдельным уроком 6.
 * - `a bit of` вернулся по той же причине: словник даёт `bit (n & adv)` с
 *   примером «Just a little bit of cake, please». Без него у модуля оставалась
 *   дыра — `a few` работает только со счётным, а сказать «немного» о
 *   неисчисляемом было нечем. Теперь оба оборота стоят парой в уроке 3.
 *
 * Ни того, ни другого я не нашёл и в перечне Determiners руководства A2 Key
 * (с. 52): там стоит «Quantitative: some, any, many, much, a few, a lot of, all,
 * other, every, etc.». Взамен модуль взял `much` и `many` в отрицании и вопросы
 * `How much` / `How many`. Основание записано в программе.
 *
 * ЗДЕСЬ ИСТОЧНИКИ РАСХОДЯТСЯ, И ЭТО РЕШАЕТ МЕТОДИСТ. Урок 5 учит спрашивать
 * `How much…?` и `How many…?`. English Grammar Profile ставит `much` и `many` в
 * вопросе на B1 — две отдельные графы, «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS,
 * INTERROGATIVE» и «FORM: 'MANY' WITH PLURAL NOUNS, INTERROGATIVE». А
 * руководство A2 Key на с. 52 в перечне Interrogatives пишет прямо: «How; How
 * much; How many; How often; How long; etc.». Требования экзамена, к которому
 * ведёт ступень, называют эти вопросы своими, и модуль их берёт. Если методист
 * рассудит иначе, урок 5 снимается целиком, а не подрезается.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. Cambridge English, A2 Key handbook, с. 52, Language specifications, раздел
 *    Determiners: «a + countable nouns», «the + countable/uncountable nouns»,
 *    «Quantitative: some, any, many, much, a few, a lot of, all, other, every,
 *    etc.». Это опора урока 1 и весь состав модуля.
 *
 * 2. English Grammar Profile, A2, DETERMINERS quantity, «FORM: WITH PLURAL AND
 *    UNCOUNTABLE NOUNS» — «Can use a range of quantifying determiners ('some',
 *    'any', 'no', 'more', 'a lot of') with both plural nouns and uncountable
 *    nouns», примеры «I think we should bring some water to drink», «I don't
 *    have any clothes for the summer». Уроки 1 и 2.
 *
 * 3. A2, там же, «FORM: WITH PLURAL NOUNS» — «Can use an increasing range of
 *    quantifying determiners with plural nouns ('all', 'both', 'a few')», пример
 *    «This notice is for all students». Урок 3.
 *
 * 4. A2, там же, «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS, NEGATIVE» — «Can use
 *    'much' with uncountable nouns in negative contexts», примеры «we didn't
 *    have much money», «I haven't got much time to watch it». И «FORM: 'MANY'
 *    WITH PLURAL NOUNS, NEGATIVE» — «Can use 'many' with plural nouns in
 *    negative contexts», примеры «There aren't many tickets», «I haven't got
 *    many winter clothes». Это урок 4, и обе графы держат ОТРИЦАНИЕ — отсюда
 *    случай урока.
 *
 * 5. Описания Совета Европы, с. 84, шкала «Notes, messages and forms», графа
 *    A2: «Can formulate short, simple notes and messages relating to matters in
 *    areas of immediate need». Опора урока письма.
 *
 *    ЭТА ШКАЛА ВЗЯТА НАРОЧНО, И ЗДЕСЬ ОНА ВЕРНАЯ. В модуле 17 я опёрся на неё
 *    же и ошибся: она лежит в разделе Written interaction и описывает записку,
 *    оставленную человеку, а там урок просил заметку для читателей. Здесь
 *    ученик пишет сообщение другу с просьбой купить — это и есть «leaving
 *    messages… to friends» из описания шкалы на с. 83. Общий текст для
 *    читателей опирался бы на с. 66, «Overall written production».
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК:
 *
 * - `a little` и `enough` — B1, см. выше. Отсюда дыра, которую надо назвать
 *   честно: урок 3 учит `a few` со счётными, а как сказать «немного» о
 *   неисчисляемом, ступень не даёт. Модуль об этом молчит: учить надо своему
 *   случаю, а не отрицанию чужого;
 * - `too much` и `so much` с неисчисляемым — B1, «FORM: 'SO MUCH', 'TOO MUCH'
 *   WITH UNCOUNTABLE NOUNS». Модуль 16 по той же причине взял только `too
 *   many`;
 * - `most`, `plenty of`, `several`, `a few of` — B1;
 * - `some of`, `all of`, `both of` — это A2 («FORM: DETERMINER + 'OF' +
 *   DETERMINER»), но перенесено в модуль 20: там ученик как раз учится не
 *   повторять названное. Строка программы поправлена.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать карточек, из них новых для ступени шестнадцать.
 *
 * ПОЛОВИНА КАРТОЧЕК — ОБЫЧНЫЕ СЛОВА, КОТОРЫХ НА СТУПЕНИ НЕ БЫЛО. Проверка,
 * заведённая после разбора модуля 17: у слов `water`, `money`, `time`, `food`,
 * `bread`, `milk`, `sugar`, `rice`, `book`, `ticket`, `apple`, `egg`, `tea`,
 * `cheese` не было карточки НИ В ОДНОМ модуле Elementary — все они даны только
 * на прошлой ступени. А между ступенями нет ссылок на память (решение владельца
 * от 16 августа). Модуль о счётности без слова «вода» и без слова «книга»
 * написать нельзя, и потому они здесь.
 *
 * Это не добор нормы: норма выполнена шестнадцатью новыми словами, а эти
 * четырнадцать — опора самого модуля. Похоже, дыра шире одного модуля, и её
 * стоит промерить по всей ступени отдельно.
 *
 * СНЯТО ПРИ ПОДБОРЕ: `gas` — словник помечает его сам, «gas (n) (Am Eng) (Br
 * Eng: petrol)», а курс держит британскую норму; `store` — по той же причине;
 * ОБОРОТ `a bit of` ПРИ ЭТОМ ВЗЯТ, и прежняя строка «`a bit` — B1» снята
 * 30 августа 2026: она осталась от первой редакции и спорила с третьим итогом
 * модуля, на котором стоит весь урок 3.
 */
const module: Module = {
  slug: "skolko-chego",
  title: "Сколько чего",
  znak: "1f9ee",

  outcomes: [
    "отличать исчисляемое от неисчисляемого: a book, water",
    "говорить «много» одним оборотом: a lot of books, a lot of water",
    "говорить о малом количестве: a few biscuits, a bit of jam",
    "выбирать much или many в отрицании: not much time, not many tickets",
    "спрашивать сколько: How much bread? How many eggs?",
    "говорить, хватает ли: enough bread, not enough tickets",
    "находить в сообщении, чего и сколько просят",
    "слышать в разговоре, чего не хватает",
    "проверять просьбу о покупках: у каждой вещи названо количество",
  ],

  sources: [
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, раздел Determiners: «a + countable " +
        "nouns», «the + countable/uncountable nouns», «Quantitative: some, any, " +
        "many, much, a few, a lot of, all, other, every, etc.». Это опора урока 1 " +
        "и весь состав модуля: перечень называет исчисляемые и неисчисляемые " +
        "прямо. " +
        "УРОК 5, И ЗДЕСЬ ИСТОЧНИКИ РАСХОДЯТСЯ. с. 52, перечень Interrogatives: " +
        "«How; How much; How many; How often; How long; etc.» — требования " +
        "экзамена ступени называют эти вопросы своими. English Grammar Profile " +
        "ставит те же обороты в вопросе на B1 (см. соседнюю опору). " +
        "РЕШАЕТ ЗДЕСЬ ТРЕТИЙ ИСТОЧНИК, которого я сперва не открыл: методист " +
        "нашёл `How many` в заданиях Pre A1 Starters — `cambridge-young-learners" +
        "-pre-a1-a2.pdf`, с. 23 и 27: «How many children are there? two» и «How " +
        "many plates are there? (four)». Cambridge ставит этот вопрос НИЖЕ A1, " +
        "а графа B1 начинается со слова Can и потому ничего не запрещает. Мой " +
        "прежний довод — «ступень ведёт к этому экзамену» — был слабее, чем есть " +
        "на деле. `How much` в детском руководстве не нашёлся ни разу. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A2, DETERMINERS quantity, «FORM: WITH PLURAL AND UNCOUNTABLE NOUNS»: " +
        "«Can use a range of quantifying determiners ('some', 'any', 'no', 'more', " +
        "'a lot of') with both plural nouns and uncountable nouns», примеры " +
        "источника — «I think we should bring some water to drink» и «I don't have " +
        "any clothes for the summer» — уроки 1 и 2. Графа держит оба вида в одной " +
        "строке, и отсюда главная мысль урока 2: a lot of годится и там, и там. " +
        "A2, там же, «FORM: WITH PLURAL NOUNS»: «Can use an increasing range of " +
        "quantifying determiners with plural nouns ('all', 'both', 'a few')», " +
        "пример — «This notice is for all students» — урок 3. Графа названа " +
        "PLURAL, и потому a few идёт только со счётными. " +
        "A2, там же, «FORM: 'MUCH' WITH UNCOUNTABLE NOUNS, NEGATIVE»: «Can use " +
        "'much' with uncountable nouns in negative contexts», примеры — «we didn't " +
        "have much money» и «I haven't got much time to watch it». И «FORM: 'MANY' " +
        "WITH PLURAL NOUNS, NEGATIVE»: «Can use 'many' with plural nouns in " +
        "negative contexts», примеры — «There are n't many tickets» (так, с пробелом, стоит в самом " +
        "файле) и «I have n't " +
        "got many winter clothes». Это урок 4, и обе графы держат отрицание: " +
        "отсюда случай урока, а не запрет на прочее. " +
        "ЧЕГО НЕТ И ПОЧЕМУ. `enough` перед вещами — B1, «FORM: WITH PLURAL AND " +
        "UNCOUNTABLE NOUNS» («'most', 'enough', 'plenty of', 'loads of'»). `a " +
        "little` — B1, «FORM/USE: WITH UNCOUNTABLE NOUNS». `too much` и `so much` " +
        "с неисчисляемым — B1. `most`, `several`, `a few of` — B1. Вопросы `How " +
        "much` / `How many` этот источник тоже ставит на B1 — расхождение со " +
        "вторым источником названо выше и не спрятано. " +
        "ДЫРЫ БОЛЬШЕ НЕТ, И ЭТО ПОУЧИТЕЛЬНО. Сперва я написал здесь, что сказать " +
        "«немного» о неисчисляемом ступень не даёт, — и ошибся дважды. Во-первых, " +
        "словник A2 Key даёт `bit (n & adv)` с примером «Just a little bit of " +
        "cake, please»: оборот в требованиях ступени есть. Во-вторых, урок 1 " +
        "тем временем переводил `some` как «немного», хотя оно значит " +
        "«сколько-то», — дыра была объявлена закрытой и заткнута неверным " +
        "равенством. Нашёл методист. Теперь урок 3 даёт `a few` и `a bit of` " +
        "парой, а `some` переведён верно",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ПИСЬМА «Пишем сообщение с просьбой». с. 84, шкала «Notes, messages " +
        "and forms», графа A2: «Can formulate short, simple notes and messages " +
        "relating to matters in areas of immediate need». " +
        "ШКАЛА ВЗЯТА НАРОЧНО, И ЗДЕСЬ ОНА ВЕРНАЯ. В модуле 17 я опёрся на неё же и " +
        "ошибся, что нашёл методист: шкала лежит в разделе Written interaction, и " +
        "её описание на с. 83 говорит о записке, оставленной человеку — «taking or " +
        "leaving messages… notes to friends, service people, teachers». Там урок " +
        "просил заметку для читателей, и опора была не та. Здесь ученик пишет " +
        "сообщение другу с просьбой купить — это ровно её случай. " +
        "Соседняя шкала Correspondence (с. 83) сюда не годится: с. 81 разводит их " +
        "прямо — та о переписке, эта о передаче сведений. Список покупок — второе. " +
        "ЖАНР ТОТ ЖЕ, ЧТО У УРОКА ЧТЕНИЯ этого модуля (`message`), поэтому новых " +
        "слов уроку письма не нужно",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Все тридцать карточек модуля взяты из словника ступени. Новых для ступени " +
        "шестнадцать; остальные четырнадцать — обычные слова (`water`, `money`, " +
        "`time`, `food`, `bread`, `milk`, `sugar`, `rice`, `book`, `ticket`, " +
        "`apple`, `egg`, `tea`, `cheese`), у которых на ступени Elementary не было " +
        "карточки ни в одном модуле. Проверку завёл после разбора модуля 17, где " +
        "та же дыра нашлась у `good`, `bad` и `sing`. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ОГРАНИЧИВАЮЩИМИ ПРИМЕРАМИ СЛОВНИКА: `oil (n)` • «My " +
        "car needs more oil» • «cooking oil» — второй пример и есть наш случай; " +
        "`jam (n)` • «fruit jam»; `cross (n & v)` • «Don't cross the road here! " +
        "(v)» — только про дорогу, и карточка говорит о дороге; `belong (v)` • " +
        "«The bag belongs to me»; `biscuit (n) (Br Eng) (Am Eng: cookie)` — " +
        "британское слово, курс держит британскую норму. " +
        "СНЯТО ПРИ ПОДБОРЕ: `gas` — словник помечает его сам, «gas (n) (Am Eng) " +
        "(Br Eng: petrol)»; `store` — по той же причине",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə` (подтверждено владельцем 22 августа " +
        "2026), знак ударения перед слогом. Отсюда `apple` — `/ˈæpl/`, а не " +
        "`ˈæpəl`, как в источнике",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "schitaem-i-ne-schitaem",
      title: "Считаем и не считаем: a book, water",
      estimatedMinutes: 15,
      outcome: "отличать исчисляемое от неисчисляемого: a book, water",
      vozvrat: [{ iz: "kak-eto-delaetsya", zadanie: "z1-dopisat-slowly" }],

      blocks: [
        {
          id: "zachem-schitat",
          kind: "explain",
          text: [
            "Данияр собирается за город и пишет, что взять.",
            "Книги он считает поштучно: a book, two books.",
            "А воду не считает: он берёт не «две воды», а просто water.",
            "По-русски это деление тоже есть: «две книги» сказать можно, «две воды» — нет.",
            "Значит вид вещи ты и так различаешь; ново тут одно — по-английски от вида зависит выбор слов.",
            "Слова, которые называют вещи, называют существительными.",
            "Существительные бывают двух видов, и от вида зависит многое.",
          ],
        },
        {
          id: "dva-vida",
          kind: "table",
          caption: "Два вида существительных",
          zvuchat: [
            "a book, two books",
            "an apple, three apples",
            "a ticket, five tickets",
            "water",
            "bread",
            "money",
          ],
          head: ["Исчисляемое", "Неисчисляемое"],
          rows: [
            ["a book, two books", "water"],
            ["an apple, three apples", "bread"],
            ["a ticket, five tickets", "money"],
          ],
        },
        {
          id: "chem-oni-otlichayutsya",
          kind: "explain",
          text: [
            "Исчисляемое можно сосчитать поштучно, и у него есть множественное число.",
            "Перед ним в единственном числе стоит a или an: a book, an apple.",
            "Неисчисляемое поштучно не считают, и множественного числа у него нет.",
            "Слово a перед ним не ставят вовсе: просто water, просто bread.",
            "Проверить вид просто: попробуй сказать «два таких» и посмотри, выйдет ли.",
          ],
        },
        {
          id: "ne-a-water",
          kind: "note",
          tone: "mistake",
          text:
            "«two breads» — так не говорят.\n\nПеред неисчисляемым числа не бывает: " +
            "просто bread или some bread.",
        },
        {
          id: "some-goditsya-oboim",
          kind: "explain",
          text: [
            "Одно слово годится обоим видам сразу — это some.",
            "Оно значит «сколько-то» и про счёт не спрашивает вовсе.",
            "Some books — сколько-то книг, some water — сколько-то воды.",
            "С ним можно говорить, пока вид существительного ещё непривычен.",
          ],
        },
        {
          id: "razgovor-o-sborah",
          kind: "example",
          caption: "Разговор о сборах",
          razgovor: true,
          zvuchat: [
            "What do we take?",
            "Some water and some bread.",
            "And books?",
            "Two books and a ticket. Food is in the bag.",
          ],
          text:
            "What do we take?\nSome water and some bread.\nAnd books?\nTwo books and a ticket. Food is in the bag.",
          perevod: {
            "What do we take?": "Что берём?",
            "Some water and some bread.": "Немного воды и немного хлеба.",
            "And books?": "А книги?",
            "Two books and a ticket. Food is in the bag.":
              "Две книги и билет. Еда в сумке.",
          },
          explain:
            "Перед water и bread стоит some, и числа при них нет. А книги и билет " +
            "сосчитаны: two books, a ticket.",
        },
        {
          id: "slovar-sborov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "water", translation: "вода", example: "Some water and some bread.", hint: "/ˈwɔːtə/" },
            { term: "bread", translation: "хлеб", example: "Some water and some bread.", hint: "/bred/" },
            { term: "money", translation: "деньги", example: "We don't have much money.", hint: "/ˈmʌni/" },
            { term: "book", translation: "книга", example: "Two books and a ticket.", hint: "/bʊk/" },
            { term: "ticket", translation: "билет", example: "Two books and a ticket.", hint: "/ˈtɪkɪt/" },
            { term: "food", translation: "еда", example: "Food is in the bag.", hint: "/fuːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vid",
          kind: "choice",
          prompt: "Какое из трёх слов неисчисляемое?",
          options: [
            { text: "ticket" },
            { text: "water", correct: true },
            { text: "apple" },
          ],
          hint: "Попробуй сказать «два таких» про каждое слово.",
          why:
            "Water. Два билета и два яблока сказать можно, а «две воды» — нет.",
        },
        {
          id: "z2-dopisat-some",
          kind: "gap",
          prompt: "Возьмём немного хлеба. Допиши слово перед bread.",
          before: "We take ",
          after: " bread.",
          answer: "some",
          hint: "Перед неисчисляемым a не ставят, а это слово годится обоим видам.",
          why:
            "We take some bread. Слово a перед bread не встанет, а some встанет.",
        },
        {
          id: "z3-otmetit-ischislyaemye",
          kind: "hottext",
          prompt: "Отметь исчисляемые существительные.",
          parts: [
            { text: "book", selectable: true, correct: true },
            { text: " · " },
            { text: "money", selectable: true },
            { text: " · " },
            { text: "ticket", selectable: true, correct: true },
            { text: " · " },
            { text: "food", selectable: true },
          ],
          hint: "Исчисляемое берёт множественное число: books, tickets.",
          why:
            "Исчисляемые — book и ticket. У money и food множественного числа нет, " +
            "и поштучно их не считают.",
        },
        {
          id: "z4-sobrat-o-vode",
          kind: "order",
          prompt: "Собери строку: мы берём немного воды.",
          items: ["water.", "take some", "We"],
          answer: [2, 1, 0],
          hint: "Слово перед water то же, что годится обоим видам.",
          why:
            "We take some water. Числа перед water нет, потому что вода " +
            "неисчисляемая.",
        },
        {
          id: "z5-napisat-o-knigah",
          kind: "short",
          prompt:
            "Данияр берёт две книги и билет. Скажи это по-английски, начав с He takes.",
          answer: "He takes two books and a ticket.",
          accept: ["He takes two books and a ticket"],
          hint: "Оба слова исчисляемые, значит счёт при них законен.",
          why:
            "He takes two books and a ticket. Перед ticket стоит a, потому что " +
            "билет один.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mnogo-a-lot-of",
      title: "Много: a lot of",
      estimatedMinutes: 14,
      outcome: "говорить «много» одним оборотом: a lot of books, a lot of water",

      blocks: [
        {
          id: "zachem-a-lot-of",
          kind: "explain",
          text: [
            "Дана открыла холодильник и хочет сказать, что еды там много.",
            "По-английски это a lot of food.",
            "Оборот a lot of и значит «много».",
            "Он удобен тем, что не спрашивает про вид существительного.",
          ],
        },
        {
          id: "a-lot-of-s-oboimi",
          kind: "table",
          caption: "A lot of с обоими видами",
          zvuchat: [
            "a lot of apples",
            "a lot of eggs",
            "a lot of milk",
            "a lot of rice",
          ],
          head: ["Со счётным", "С неисчисляемым"],
          rows: [
            ["a lot of apples", "a lot of milk"],
            ["a lot of eggs", "a lot of rice"],
          ],
        },
        {
          id: "pochemu-udoben",
          kind: "explain",
          text: [
            "Слева стоят исчисляемые, справа неисчисляемые, а оборот один и тот же.",
            "Меняется только сама вещь: у счётного она во множественном числе.",
            "Apples и eggs берут окончание -s, а milk и rice не берут ничего.",
            "Значит запоминать надо не два оборота, а один и вид вещи при нём.",
          ],
        },
        {
          id: "ne-zabyt-of",
          kind: "note",
          tone: "mistake",
          text:
            "«a lot apples» — так не говорят.\n\nПеред самой вещью стоит of: a lot " +
            "of apples.",
        },
        {
          id: "razgovor-u-holodilnika",
          kind: "example",
          caption: "Разговор у холодильника",
          razgovor: true,
          zvuchat: [
            "Is there food at home?",
            "There is a lot of food. A lot of cheese and a lot of milk.",
            "And eggs?",
            "A lot of eggs, but the rice is finished.",
          ],
          text:
            "Is there food at home?\nThere is a lot of food. A lot of cheese and a lot of milk.\nAnd eggs?\nA lot of eggs, but the rice is finished.",
          perevod: {
            "Is there food at home?": "Дома есть еда?",
            "There is a lot of food. A lot of cheese and a lot of milk.":
              "Еды много. Много сыра и много молока.",
            "And eggs?": "А яйца?",
            "A lot of eggs, but the rice is finished.":
              "Яиц много, а рис кончился.",
          },
          explain:
            "Оборот повторяется четыре раза и ни разу не меняется. Меняется только " +
            "вещь после него: eggs во множественном числе, cheese и milk без него.",
        },
        {
          id: "slovar-holodilnika",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "milk", translation: "молоко", example: "A lot of cheese and a lot of milk.", hint: "/mɪlk/" },
            { term: "cheese", translation: "сыр", example: "A lot of cheese and a lot of milk.", hint: "/tʃiːz/" },
            { term: "rice", translation: "рис", example: "The rice is finished.", hint: "/raɪs/" },
            { term: "egg", translation: "яйцо", example: "A lot of eggs, but the rice is finished.", hint: "/eg/" },
            { term: "apple", translation: "яблоко", example: "A lot of apples.", hint: "/ˈæpl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-of",
          kind: "gap",
          prompt: "Дома много яблок. Допиши недостающее слово после a lot.",
          before: "There are a lot ",
          after: " apples.",
          answer: "of",
          hint: "Оборот состоит из трёх слов, и одно из них короткое.",
          why:
            "There are a lot of apples. Без of оборот распадается и работать " +
            "перестаёт.",
        },
        {
          id: "z2-vybrat-formu-veshchi",
          kind: "choice",
          prompt: "Дома много молока. Какая запись верна?",
          options: [
            { text: "a lot of milks" },
            { text: "a lot of milk", correct: true },
            { text: "a lot milk" },
          ],
          hint: "Молоко поштучно не считают, значит множественного числа у него нет.",
          why:
            "A lot of milk. Окончание -s тут лишнее, а слово of, наоборот, нужно.",
        },
        {
          id: "z3-otmetit-vernye-zapisi",
          kind: "hottext",
          prompt: "Отметь верные записи.",
          parts: [
            { text: "a lot of eggs", selectable: true, correct: true },
            { text: " · " },
            { text: "a lot of rices", selectable: true },
            { text: " · " },
            { text: "a lot of cheese", selectable: true, correct: true },
            { text: " · " },
            { text: "a lot apples", selectable: true },
          ],
          hint: "Смотри на два места: слово of и окончание у вещи.",
          why:
            "Верны первая и третья записи. У rice множественного числа нет, а в " +
            "четвёртой потерялось of.",
        },
        {
          id: "z4-sobrat-o-syre",
          kind: "order",
          prompt: "Собери строку: дома много сыра.",
          items: ["cheese.", "a lot of", "There is"],
          answer: [2, 1, 0],
          hint: "Оборот идёт целиком, между There is и самой вещью.",
          why:
            "There is a lot of cheese. Слово is стоит потому, что сыр " +
            "неисчисляемый: он один и тот же, сколько бы его ни было.",
        },
        {
          id: "z5-napisat-o-yaycah",
          kind: "short",
          prompt:
            "В холодильнике много яиц. Скажи это по-английски, начав с There are.",
          answer: "There are a lot of eggs.",
          accept: ["There are a lot of eggs"],
          hint: "Яйца считают поштучно, значит вещь берёт окончание.",
          why:
            "There are a lot of eggs. Слово are стоит потому, что яиц несколько.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "neskolko-a-few",
      title: "Несколько и немного: a few, a bit of",
      estimatedMinutes: 15,
      outcome: "говорить о малом количестве: a few biscuits, a bit of jam",

      blocks: [
        {
          id: "zachem-a-few",
          kind: "explain",
          text: [
            "Печенья в пачке осталось не много, но и не одна штука.",
            "По-английски это a few biscuits — несколько печений.",
            "А варенья в банке осталось на донышке, и штуками его не мерят.",
            "Про него говорят иначе: a bit of jam.",
            "Оба оборота значат «мало, но есть», и выбор между ними — по виду вещи.",
          ],
        },
        {
          id: "a-few-tolko-so-schyotnym",
          kind: "table",
          caption: "Мало, но есть",
          zvuchat: [
            "a few biscuits",
            "a few beans",
            "a bit of jam",
            "a bit of bread",
          ],
          head: ["Со счётным — a few", "С неисчисляемым — a bit of"],
          rows: [
            ["a few biscuits", "a bit of jam"],
            ["a few beans", "a bit of bread"],
          ],
        },
        {
          id: "pochemu-tolko-so-schyotnym",
          kind: "explain",
          text: [
            "Слово few значит «мало штук», а штуки бывают только у счётного.",
            "Поэтому вещь после a few всегда во множественном числе: biscuits, beans.",
            "Оборот a bit of берут там, где штук нет: варенье, хлеб, чай.",
            "Он длиннее на одно слово, и это слово — of, как в обороте a lot of.",
            "Проверить выбор можно всё тем же вопросом: считают эту вещь поштучно или нет.",
          ],
        },
        {
          id: "ne-a-few-jam",
          kind: "note",
          tone: "mistake",
          text:
            "«a few jam» — так не говорят.\n\nВаренье поштучно не считают, и к нему " +
            "идёт другой оборот: a bit of jam.",
        },
        {
          id: "razgovor-o-pikinike",
          kind: "example",
          caption: "Разговор о пикнике",
          razgovor: true,
          zvuchat: [
            "What is left?",
            "A few biscuits and a few beans.",
            "And the jam?",
            "Only a bit of jam. Take a few lemons too.",
          ],
          text:
            "What is left?\nA few biscuits and a few beans.\nAnd the jam?\nOnly a bit of jam. Take a few lemons too.",
          perevod: {
            "What is left?": "Что осталось?",
            "A few biscuits and a few beans.":
              "Несколько печений и несколько фасолин.",
            "And the jam?": "А варенье?",
            "Only a bit of jam. Take a few lemons too.":
              "Варенья чуть-чуть. Возьми ещё несколько лимонов.",
          },
          explain:
            "Оборот a few стоит перед печеньем, фасолью и лимонами — всё это " +
            "считают. А перед вареньем стоит a bit of, и вещь после него без " +
            "окончания.",
        },
        {
          id: "slovar-pikinika",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "biscuit", translation: "печенье", example: "A few biscuits and a few beans.", hint: "/ˈbɪskɪt/" },
            { term: "bean", translation: "фасолина, боб", example: "A few biscuits and a few beans.", hint: "/biːn/" },
            { term: "jam", translation: "варенье, джем", example: "Only a bit of jam.", hint: "/dʒæm/" },
            { term: "lemon", translation: "лимон", example: "Take a few lemons too.", hint: "/ˈlemən/" },
            { term: "bit", translation: "кусочек, чуть-чуть", example: "Only a bit of jam.", hint: "/bɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-few",
          kind: "gap",
          prompt: "Осталось несколько печений. Допиши слово после a.",
          before: "A ",
          after: " biscuits are left.",
          answer: "few",
          hint: "Печенья считают поштучно, и оборот для этого свой.",
          why:
            "A few biscuits are left. Оборот a few и говорит «мало штук, но они " +
            "есть».",
        },
        {
          id: "z2-few-ili-bit",
          kind: "choice",
          prompt: "Риса осталось чуть-чуть. Какая запись верна?",
          options: [
            { text: "a few rice" },
            { text: "a few rices" },
            { text: "a bit of rice", correct: true },
          ],
          hint: "Рис поштучно не считают.",
          why:
            "A bit of rice. Оборот a few идёт только со счётным, а множественного " +
            "числа у rice нет вовсе.",
        },
        {
          id: "z3-otmetit-gde-a-few",
          kind: "hottext",
          prompt: "Отметь слова, перед которыми встанет a few.",
          parts: [
            { text: "lemons", selectable: true, correct: true },
            { text: " · " },
            { text: "bread", selectable: true },
            { text: " · " },
            { text: "beans", selectable: true, correct: true },
            { text: " · " },
            { text: "milk", selectable: true },
          ],
          hint: "Оборот идёт только к тому, что считают поштучно.",
          why:
            "A few встанет перед lemons и beans. К хлебу и молоку пойдёт a bit of: " +
            "поштучно их не считают.",
        },
        {
          id: "z4-sobrat-o-limonah",
          kind: "order",
          prompt: "Собери строку: возьми несколько лимонов.",
          items: ["lemons.", "a few", "Take"],
          answer: [2, 1, 0],
          hint: "Оборот идёт между действием и самой вещью.",
          why: "Take a few lemons. Вещь после оборота стоит во множественном числе.",
        },
        {
          id: "z5-napisat-o-hlebe",
          kind: "short",
          prompt:
            "Хлеба осталось чуть-чуть. Скажи это по-английски, начав с There is.",
          answer: "There is a bit of bread.",
          accept: ["There is a bit of bread", "There is only a bit of bread."],
          hint: "Хлеб поштучно не считают, значит и оборот нужен второй.",
          why:
            "There is a bit of bread. Оборот a few сюда не встанет: у хлеба нет " +
            "штук.",
        },
      ],
    },
    // =====================================================================
    {
      slug: "ne-mnogo-much-many",
      title: "Не много: much и many",
      estimatedMinutes: 15,
      outcome: "выбирать much или many в отрицании: not much time, not many tickets",

      blocks: [
        {
          id: "zachem-much-many",
          kind: "explain",
          text: [
            "Данияр говорит, что времени у него мало.",
            "I don't have much time. — У меня мало времени.",
            "Здесь языки расходятся заметно.",
            "По-русски «мало» одно на всё: мало времени, мало билетов, мало денег.",
            "По-английски слов два — much и many, — и какое взять, решает вид существительного.",
          ],
        },
        {
          id: "much-ili-many",
          kind: "table",
          caption: "Much или many",
          zvuchat: [
            "I don't have much time.",
            "We didn't have much money.",
            "There aren't many tickets.",
            "I haven't got many books.",
          ],
          head: ["С неисчисляемым — much", "Со счётным — many"],
          rows: [
            ["I don't have much time.", "There aren't many tickets."],
            ["We didn't have much money.", "I haven't got many books."],
          ],
        },
        {
          id: "kak-vybrat-iz-dvuh",
          kind: "explain",
          text: [
            "Слово much идёт к неисчисляемому: time, money, tea, oil.",
            "Слово many идёт к счётному во множественном числе: tickets, books.",
            "Проверить можно тем же вопросом: считают эту вещь поштучно или нет.",
            "Оборот a lot of при этом никуда не делся и в отрицании тоже понятен.",
          ],
        },
        {
          id: "ne-much-tickets",
          kind: "note",
          tone: "mistake",
          text:
            "«I don't have much tickets» — так не говорят.\n\nБилеты считают " +
            "поштучно, и к ним идёт many: I don't have many tickets.",
        },
        {
          id: "razgovor-o-nehvatke",
          kind: "example",
          caption: "Разговор о нехватке",
          razgovor: true,
          zvuchat: [
            "Can you come?",
            "I don't have much time today.",
            "And tomorrow?",
            "There aren't many tickets left. We didn't have much money for two.",
          ],
          text:
            "Can you come?\nI don't have much time today.\nAnd tomorrow?\nThere aren't many tickets left. We didn't have much money for two.",
          perevod: {
            "Can you come?": "Ты сможешь прийти?",
            "I don't have much time today.": "Сегодня у меня мало времени.",
            "And tomorrow?": "А завтра?",
            "There aren't many tickets left. We didn't have much money for two.":
              "Билетов осталось немного. Денег на двоих у нас было мало.",
          },
          explain:
            "Слово much стоит перед time и money, а many перед tickets. Выбор " +
            "каждый раз сделан по виду вещи, а не по слуху.",
        },
        {
          id: "slovar-nehvatki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "time", translation: "время", example: "I don't have much time today.", hint: "/taɪm/" },
            { term: "tea", translation: "чай", example: "There isn't much tea.", hint: "/tiː/" },
            { term: "sugar", translation: "сахар", example: "We don't have much sugar.", hint: "/ˈʃʊgə/" },
            { term: "oil", translation: "масло", example: "There isn't much oil.", hint: "/ɔɪl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-much",
          kind: "gap",
          prompt: "Сахара у нас мало. Допиши слово перед sugar.",
          before: "We don't have ",
          after: " sugar.",
          answer: "much",
          hint: "Сахар поштучно не считают.",
          why:
            "We don't have much sugar. Слово many пошло бы к тому, что считают " +
            "поштучно.",
        },
        {
          id: "z2-vybrat-many",
          kind: "choice",
          prompt: "Билетов осталось мало. Какая запись верна?",
          options: [
            { text: "There aren't much tickets." },
            { text: "There aren't many tickets.", correct: true },
            { text: "There aren't many ticket." },
          ],
          hint: "Проверь два места: слово перед вещью и окончание у вещи.",
          why:
            "There aren't many tickets. Билеты счётные, значит many и " +
            "множественное число.",
        },
        {
          id: "z3-otmetit-much",
          kind: "hottext",
          prompt: "Отметь слова, к которым идёт much.",
          parts: [
            { text: "time", selectable: true, correct: true },
            { text: " · " },
            { text: "books", selectable: true },
            { text: " · " },
            { text: "oil", selectable: true, correct: true },
            { text: " · " },
            { text: "lemons", selectable: true },
          ],
          hint: "Слово much идёт к тому, что поштучно не считают.",
          why:
            "Much идёт к time и oil. Книги и лимоны считают поштучно, и к ним " +
            "пойдёт many.",
        },
        {
          id: "z4-sobrat-o-chae",
          kind: "order",
          prompt: "Собери строку: чая тут не много.",
          items: ["tea here.", "isn't much", "There"],
          answer: [2, 1, 0],
          hint: "Чай поштучно не считают.",
          why:
            "There isn't much tea here. Слово isn't стоит потому, что чай " +
            "неисчисляемый.",
        },
        {
          id: "z5-napisat-o-vremeni",
          kind: "short",
          prompt:
            "Времени сегодня мало. Скажи это по-английски, начав с I don't have.",
          answer: "I don't have much time today.",
          accept: ["I don't have much time today"],
          hint: "Время поштучно не считают.",
          why:
            "I don't have much time today. К неисчисляемому в отрицании идёт much.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "skolko-sprosit",
      title: "Сколько? How much и How many",
      estimatedMinutes: 14,
      outcome: "спрашивать сколько: How much bread? How many eggs?",

      blocks: [
        {
          id: "zachem-sprashivat",
          kind: "explain",
          text: [
            "Дана в магазине и хочет спросить, сколько хлеба брать.",
            "По-английски это How much bread?",
            "А про яйца тот же вопрос звучит иначе: How many eggs?",
            "Выбор между much и many здесь тот же, что был в отрицании.",
          ],
        },
        {
          id: "vopros-skolko",
          kind: "table",
          caption: "Вопрос о количестве",
          zvuchat: [
            "How much bread do we need?",
            "How much wood is there?",
            "How many eggs do we need?",
            "How many tickets are there?",
          ],
          head: ["С неисчисляемым", "Со счётным"],
          rows: [
            ["How much bread do we need?", "How many eggs do we need?"],
            ["How much wood is there?", "How many tickets are there?"],
          ],
        },
        {
          id: "kak-ustroen-vopros",
          kind: "explain",
          text: [
            "Слово How спрашивает о мере, и much или many уточняет её сразу же — раньше самой вещи.",
            "Дальше стоит сама вещь, и только потом остальное предложение.",
            "У счётного вещь во множественном числе: eggs, tickets.",
            "Разделять How и much нельзя: это два слова одного вопроса.",
          ],
        },
        {
          id: "ne-how-many-bread",
          kind: "note",
          tone: "mistake",
          text:
            "«How many bread?» — так не спрашивают.\n\nХлеб поштучно не считают, и " +
            "вопрос о нём начинается с How much.",
        },
        {
          id: "razgovor-v-magazine",
          kind: "example",
          caption: "Разговор в магазине",
          razgovor: true,
          zvuchat: [
            "How much bread do we need?",
            "A lot.",
            "And how many eggs?",
            "Six.",
            "Is there wood somewhere?",
            "Yes, near the river.",
          ],
          text:
            "How much bread do we need?\nA lot.\nAnd how many eggs?\nSix.\nIs there wood somewhere?\nYes, near the river.",
          perevod: {
            "How much bread do we need?": "Сколько хлеба нам нужно?",
            "A lot.": "Много.",
            "And how many eggs?": "А сколько яиц?",
            "Six.": "Шесть.",
            "Is there wood somewhere?": "Дрова где-нибудь есть?",
            "Yes, near the river.": "Да, у реки.",
          },
          explain:
            "Оба вопроса начинаются одинаково, а второе слово разное. Отвечают на " +
            "них числом или оборотом количества.",
        },
        {
          id: "slovar-magazina",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "wood", translation: "дрова, древесина", example: "Is there wood somewhere?", hint: "/wʊd/" },
            { term: "somewhere", translation: "где-то", example: "Is there wood somewhere?", hint: "/ˈsʌmweə/" },

          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-many",
          kind: "gap",
          prompt: "Спроси, сколько яиц нужно. Допиши слово после How.",
          before: "How ",
          after: " eggs do we need?",
          answer: "many",
          hint: "Яйца считают поштучно.",
          why:
            "How many eggs do we need? К счётному идёт many, и вещь при нём во " +
            "множественном числе.",
        },
        {
          id: "z2-vybrat-vopros",
          kind: "choice",
          prompt: "Спроси, сколько хлеба нужно. Какая запись верна?",
          options: [
            { text: "How many bread do we need?" },
            { text: "How many breads do we need?" },
            { text: "How much bread do we need?", correct: true },
          ],
          hint: "Хлеб поштучно не считают, и множественного числа у него нет.",
          why:
            "How much bread do we need? Слово many и окончание -s тут одинаково " +
            "лишние.",
        },
        {
          id: "z3-otmetit-vernye-voprosy",
          kind: "hottext",
          prompt: "Отметь верные вопросы.",
          parts: [
            { text: "How much wood is there?", selectable: true, correct: true },
            { text: " · " },
            { text: "How many wood is there?", selectable: true },
            { text: " · " },
            { text: "How many tickets are there?", selectable: true, correct: true },
            { text: " · " },
            { text: "How much tickets are there?", selectable: true },
          ],
          hint: "У каждой вещи спроси, считают ли её поштучно.",
          why:
            "Верны первый и третий вопросы. Дрова поштучно не считают, а билеты " +
            "считают.",
        },
        {
          id: "z4-sobrat-vopros-o-drovah",
          kind: "order",
          prompt: "Собери вопрос: сколько там дров?",
          items: ["is there?", "much wood", "How"],
          answer: [2, 1, 0],
          hint: "Слова How и much не разделяют.",
          why:
            "How much wood is there? Сначала два слова вопроса, потом вещь, потом " +
            "остальное.",
        },
        {
          id: "z5-napisat-vopros-o-biletah",
          kind: "short",
          prompt:
            "Спроси по-английски, сколько там билетов. Начни с How.",
          answer: "How many tickets are there?",
          accept: ["How many tickets are there"],
          hint: "Билеты считают поштучно.",
          why:
            "How many tickets are there? Слово are стоит потому, что билетов " +
            "несколько.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "hvatit-enough",
      title: "Хватит: enough",
      estimatedMinutes: 14,
      outcome: "говорить, хватает ли: enough bread, not enough tickets",

      blocks: [
        {
          id: "zachem-enough",
          kind: "explain",
          text: [
            "Все прошлые обороты говорили, много вещи или мало.",
            "Но у количества есть и другая мерка: хватает его или нет.",
            "Хлеба может быть мало и всё же хватать, а много — и всё равно не хватать.",
            "По-английски это enough: We have enough bread.",
          ],
        },
        {
          id: "hvataet-ili-net",
          kind: "table",
          caption: "Хватает или нет",
          zvuchat: [
            "We have enough bread.",
            "We don't have enough bread.",
            "There are enough tickets.",
            "There aren't enough tickets.",
          ],
          head: ["Хватает", "Не хватает"],
          rows: [
            ["We have enough bread.", "We don't have enough bread."],
            ["There are enough tickets.", "There aren't enough tickets."],
          ],
        },
        {
          id: "chem-enough-otlichaetsya",
          kind: "explain",
          text: [
            "Слово enough годится обоим видам сразу, как и a lot of.",
            "Слева от него стоит действие, справа — сама вещь: enough bread, enough tickets.",
            "Слова of при нём нет — этим оно и отличается от a lot of и a bit of.",
            "А «не хватает» строят обычным отрицанием: don't have enough, aren't enough.",
            "Мерка тут не в числе, а в деле: хватит ли на то, что задумано.",
          ],
        },
        {
          id: "ne-enough-of",
          kind: "note",
          tone: "mistake",
          text:
            "«enough of bread» — так не говорят.\n\nПеред самой вещью слова of нет: " +
            "enough bread.",
        },
        {
          id: "razgovor-o-zapase",
          kind: "example",
          caption: "Разговор о запасе",
          razgovor: true,
          zvuchat: [
            "Do we have enough food?",
            "There is a lot of rice, so we have enough.",
            "And tickets?",
            "We don't have enough tickets for four.",
          ],
          text:
            "Do we have enough food?\nThere is a lot of rice, so we have enough.\nAnd tickets?\nWe don't have enough tickets for four.",
          perevod: {
            "Do we have enough food?": "Еды нам хватит?",
            "There is a lot of rice, so we have enough.":
              "Риса много, так что хватит.",
            "And tickets?": "А билеты?",
            "We don't have enough tickets for four.":
              "Билетов на четверых не хватает.",
          },
          explain:
            "Слово enough стоит и при неисчисляемом, и при счётном, и вещь после " +
            "него не меняется. Первый ответ говорит «много, и потому хватает» — это " +
            "две разные мерки в одной строке.",
        },
        {
          id: "slovar-zapasa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "enough", translation: "достаточно, хватает", example: "We have enough bread.", hint: "/ɪˈnʌf/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-enough",
          kind: "gap",
          prompt: "Хлеба нам хватает. Допиши слово перед bread.",
          before: "We have ",
          after: " bread.",
          answer: "enough",
          hint: "Речь не о том, много его или мало, а о том, хватит ли.",
          why:
            "We have enough bread. Оборот a lot of сказал бы про количество, а " +
            "спрошено про запас.",
        },
        {
          id: "z2-enough-bez-of",
          kind: "choice",
          prompt: "Билетов нам не хватает. Какая запись верна?",
          options: [
            { text: "We don't have enough of tickets." },
            { text: "We don't have enough tickets.", correct: true },
            { text: "We don't have enough ticket." },
          ],
          hint: "Проверь два места: слово of и окончание у вещи.",
          why:
            "We don't have enough tickets. Слово of тут лишнее, а окончание, " +
            "наоборот, нужно: билеты считают поштучно.",
        },
        {
          id: "z3-otmetit-gde-hvataet",
          kind: "hottext",
          prompt: "Отметь строки, где чего-то хватает.",
          parts: [
            { text: "We have enough rice.", selectable: true, correct: true },
            { text: " · " },
            { text: "We don't have enough rice.", selectable: true },
            { text: " · " },
            { text: "There are enough eggs.", selectable: true, correct: true },
            { text: " · " },
            { text: "There aren't enough eggs.", selectable: true },
          ],
          hint: "Смотри, есть ли в строке отрицание.",
          why:
            "Хватает в первой и третьей строках. Во второй и четвёртой стоит " +
            "отрицание, и оно переворачивает смысл.",
        },
        {
          id: "z4-sobrat-o-vode",
          kind: "order",
          prompt: "Собери строку: воды нам хватает.",
          items: ["water.", "have enough", "We"],
          answer: [2, 1, 0],
          hint: "После enough вещь идёт сразу: enough water.",
          why:
            "We have enough water. Оборот из одного слова, и вещь идёт сразу за " +
            "ним.",
        },
        {
          id: "z5-napisat-o-nehvatke-biletov",
          kind: "short",
          prompt:
            "Билетов на четверых не хватает. Скажи это по-английски, начав с We don't have.",
          answer: "We don't have enough tickets for four.",
          accept: ["We don't have enough tickets for four"],
          hint: "Сначала слово о запасе, потом вещь, потом для кого.",
          why:
            "We don't have enough tickets for four. Отрицание строится обычным " +
            "образом, а enough при этом не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-soobshchenie-o-pokupkah",
      title: "Читаем сообщение о покупках",
      estimatedMinutes: 13,
      outcome: "находить в сообщении, чего и сколько просят",

      blocks: [
        {
          id: "zachem-chitat-soobshchenie",
          kind: "explain",
          text: [
            "Дана уехала за город и написала Данияру, что привезти.",
            "В таком сообщении ищут две вещи: что купить и сколько.",
            "Количество называют оборотами a lot of, a few, much и many.",
            "Ниже сообщение, и вопросы будут о количестве.",
          ],
        },
        {
          id: "soobshchenie-dany",
          kind: "text",
          title: "FROM DANA",
          genre: "message",
          body: [
            "Hi! We are at the lake and we need a few things.",
            "There isn't much bread here, so please take a lot.",
            "We have a lot of water, but we don't have much tea.",
            "Take a few lemons and some sugar too.",
            "There aren't many biscuits left, and the jam is finished.",
            "There are a lot of frogs near the water, and they sing all night.",
            "Wood is not a problem: there is a lot of wood near the river.",
            "A bear came somewhere near last night! It was only a dream, of course.",
            "See you soon!",
          ],
          glossary: [
            { term: "lake", translation: "озеро" },

            { term: "is finished", translation: "кончилось" },
          ],
        },
        {
          id: "kak-iskat-kolichestvo",
          kind: "note",
          tone: "info",
          text:
            "Количество ищут по обороту перед самой вещью.\n\nВ отрицании это much " +
            "и many, а в обычной строке — a lot of и a few.",
        },
        {
          id: "slovar-ozera",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bear", translation: "медведь", example: "A bear came somewhere near last night!", hint: "/beə/" },
            { term: "frog", translation: "лягушка", example: "There are a lot of frogs near the water.", hint: "/frɒg/" },
            { term: "dream", translation: "сон, мечта", example: "It was only a dream, of course.", hint: "/driːm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-skolko-hleba",
          about: "soobshchenie-dany",
          kind: "short",
          prompt: "Каким оборотом Дана просит взять хлеба? Ответь по-английски.",
          answer: "a lot",
          accept: ["a lot of", "take a lot"],
          hint: "Оборот стоит в конце той же строки, где сказано про хлеб.",
          why:
            "There isn't much bread here, so please take a lot. Первая половина " +
            "строки говорит, что хлеба мало, вторая — сколько взять.",
        },
        {
          id: "z2-chego-mnogo",
          about: "soobshchenie-dany",
          kind: "choice",
          prompt: "Чего у них много?",
          options: [
            { text: "Чая и печенья." },
            { text: "Воды и дров.", correct: true },
            { text: "Хлеба и варенья." },
          ],
          hint: "Оборот a lot of стоит в сообщении дважды.",
          why:
            "Воды и дров: a lot of water и a lot of wood. Чая, хлеба и печенья как " +
            "раз не хватает.",
        },
        {
          id: "z3-chego-net-vovse",
          about: "soobshchenie-dany",
          kind: "short",
          prompt:
            "Что у них кончилось совсем? Ответь одним словом по-английски.",
          answer: "jam",
          accept: ["Jam", "the jam"],
          hint: "Про это сказано не «мало», а «кончилось».",
          why: "There aren't many biscuits left, and the jam is finished.",
        },
        {
          id: "z4-otmetit-verno-o-soobshchenii",
          about: "soobshchenie-dany",
          kind: "hottext",
          prompt: "Отметь то, что верно по сообщению.",
          parts: [
            { text: "чая у них мало", selectable: true, correct: true },
            { text: " · " },
            { text: "печенья осталось не много", selectable: true, correct: true },
            { text: " · " },
            { text: "воды у них не хватает", selectable: true },
            { text: " · " },
            { text: "дрова придётся везти", selectable: true },
          ],
          hint: "Про воду и про дрова в сообщении сказано прямо.",
          why:
            "Верно первое и второе. Воды и дров у них как раз много, и везти дрова " +
            "не нужно.",
        },
        {
          id: "z5-pochemu-much-a-ne-many",
          about: "soobshchenie-dany",
          kind: "choice",
          prompt:
            "В сообщении стоит There isn't much bread. Почему не many?",
          options: [
            { text: "Потому что хлеба мало." },
            { text: "Потому что строка отрицательная." },
            { text: "Потому что хлеб поштучно не считают.", correct: true },
          ],
          hint: "Выбор между much и many делают не по смыслу строки.",
          why:
            "Потому что хлеб поштучно не считают. Отрицание в строке есть, но оно " +
            "решает другое: брать much или a lot of.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chego-ne-hvataet",
      title: "Слушаем, чего не хватает",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, чего не хватает",

      blocks: [
        {
          id: "zachem-slushat-o-nehvatke",
          kind: "explain",
          text: [
            "Двое собираются в дорогу и перебирают, что взяли.",
            "Слушать надо, чего у них мало и чего много.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-doroge",
          kind: "audio",
          caption: "Разговор перед дорогой",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Do we have much water? — A lot of water, but we don't have many " +
            "apples. — And money? — Not much. We can buy food while we cross the " +
            "town. — Does this bag belong to you? — Yes, it does.",
        },
        {
          id: "chto-slushat-o-nehvatke",
          kind: "note",
          tone: "info",
          text:
            "Слушай, чего у них много и чего мало.\n\nИ слушай, чей мешок: об этом " +
            "спрашивают в самом конце.",
        },
        {
          id: "slovar-dorogi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "while", translation: "пока", example: "We can buy food while we cross the town.", hint: "/waɪl/" },
            { term: "cross", translation: "переходить", example: "Don't cross the road here!", hint: "/krɒs/" },
            { term: "belong", translation: "принадлежать", example: "Does this bag belong to you?", hint: "/bɪˈlɒŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-mnogo-v-zapisi",
          about: "zapis-o-doroge",
          kind: "short",
          prompt: "Чего у них много? Ответь одним словом по-английски.",
          answer: "water",
          accept: ["Water"],
          hint: "Ответ стоит во второй реплике, сразу после оборота a lot of.",
          why: "A lot of water, but we don't have many apples.",
        },
        {
          id: "z2-chego-malo",
          about: "zapis-o-doroge",
          kind: "choice",
          prompt: "Чего у них мало?",
          options: [
            { text: "Воды и денег." },
            { text: "Яблок и денег.", correct: true },
            { text: "Только еды." },
          ],
          hint: "Про деньги отвечают коротко, в четвёртой реплике.",
          why:
            "Яблок и денег: we don't have many apples и Not much. Воды у них как " +
            "раз много.",
        },
        {
          id: "z3-chto-oni-sdelayut",
          about: "zapis-o-doroge",
          kind: "short",
          prompt:
            "Что они купят по дороге? Ответь одним словом по-английски.",
          answer: "food",
          accept: ["Food"],
          hint: "Ответ стоит в той же реплике, где сказано про город.",
          why: "We can buy food while we cross the town.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-doroge",
          about: "zapis-o-doroge",
          kind: "hottext",
          prompt: "Отметь то, что сказано в записи.",
          parts: [
            { text: "воды у них много", selectable: true, correct: true },
            { text: " · " },
            { text: "мешок принадлежит собеседнику", selectable: true, correct: true },
            { text: " · " },
            { text: "яблок у них много", selectable: true },
            { text: " · " },
            { text: "денег хватает", selectable: true },
          ],
          hint: "Про яблоки и про деньги сказано с отрицанием.",
          why:
            "Сказано первое и второе. Яблок и денег у них как раз мало.",
        },
        {
          id: "z5-skazat-vsluh-o-yablokah",
          kind: "speak",
          prompt: "Скажи вслух: яблок у нас не много.",
          phrase: "We don't have many apples.",
          translation: "Яблок у нас не много.",
          hint: "Яблоки считают поштучно.",
          why:
            "We don't have many apples. К счётному в отрицании идёт many, и вещь " +
            "при нём во множественном числе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-prosbu-o-pokupkah",
      title: "Пишем сообщение с просьбой",
      estimatedMinutes: 15,
      outcome: "проверять просьбу о покупках: у каждой вещи названо количество",

      blocks: [
        {
          id: "zachem-proveryat-spisok",
          kind: "explain",
          text: [
            "Данияр попросил друга купить продукты и написал: bread, eggs, tea.",
            "Друг пришёл в магазин и встал: сколько всего этого брать?",
            "В такой просьбе пропускают не сами вещи, а количество.",
            "Проверить можно так: у каждой строки найди оборот или число.",
          ],
        },
        {
          id: "nazvano-li-kolichestvo",
          kind: "table",
          caption: "Названо ли количество",
          zvuchat: [
            "Please buy a few eggs.",
            "Please buy eggs.",
            "We need a lot of bread.",
            "We need bread.",
          ],
          head: ["Строка", "Сколько", "Годится"],
          rows: [
            ["Please buy a few eggs.", "несколько", "да"],
            ["Please buy eggs.", "не сказано", "нет"],
            ["We need a lot of bread.", "много", "да"],
            ["We need bread.", "не сказано", "нет"],
          ],
        },
        {
          id: "chem-nazyvayut-kolichestvo",
          kind: "explain",
          text: [
            "Количество называют оборотом или числом, и годится любое из двух.",
            "Обороты у нас четыре: a lot of, a few, a bit of и some.",
            "Число ставят прямо перед счётной вещью: four eggs, two books.",
            "Перед неисчисляемым числа не бывает, и там нужен оборот.",
            "И последнее: просьбу начинают со слова please или с Can you buy.",
          ],
        },
        {
          id: "obrazets-prosby",
          kind: "example",
          caption: "Сообщение Данияра",
          perevod: {
            "Hi! Can you buy some food today?":
              "Привет! Купишь сегодня немного еды?",
            "We need a lot of bread and four eggs.":
              "Нам нужно много хлеба и четыре яйца.",
            "There isn't much tea at home, so please take some tea too.":
              "Чая дома мало, так что возьми, пожалуйста, ещё и чай.",
            "A few lemons would be a nice surprise.":
              "Несколько лимонов были бы приятной неожиданностью.",
          },
          zvuchat: [
            "Hi! Can you buy some food today?",
            "We need a lot of bread and four eggs.",
            "There isn't much tea at home, so please take some tea too.",
            "A few lemons would be a nice surprise.",
          ],
          text:
            "Hi! Can you buy some food today?\nWe need a lot of bread and four eggs.\nThere isn't much tea at home, so please take some tea too.\nA few lemons would be a nice surprise.",
          explain:
            "У каждой вещи названо количество: оборотом или числом. Перед tea " +
            "стоит оборот, потому что чай поштучно не считают.",
        },
        {
          id: "slovar-prosby",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "surprise", translation: "сюрприз", example: "A few lemons would be a nice surprise.", hint: "/səˈpraɪz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-prosbe",
          kind: "choice",
          prompt:
            "В сообщении стоит одна строка: Please buy eggs. Чего в ней не хватает другу?",
          options: [
            { text: "Количества: сколько яиц брать.", correct: true },
            { text: "Слова please." },
            { text: "Названия магазина." },
          ],
          hint: "Представь себя в магазине с этой строкой в руках.",
          why:
            "Количества. Слово please на месте, а вот сколько яиц — друг не " +
            "узнает.",
        },
        {
          id: "z2-dopisat-kolichestvo",
          kind: "gap",
          prompt: "Допиши количество: хлеба нужно много.",
          before: "We need ",
          after: " bread.",
          answer: "a lot of",
          hint: "Хлеб поштучно не считают, значит числа тут не будет.",
          why:
            "We need a lot of bread. Перед неисчисляемым ставят оборот, а не " +
            "число.",
        },
        {
          id: "z3-otmetit-polnye-stroki-spiska",
          kind: "hottext",
          prompt: "Отметь строки, где количество названо.",
          parts: [
            { text: "Please buy four eggs.", selectable: true, correct: true },
            { text: " · " },
            { text: "Please buy eggs.", selectable: true },
            { text: " · " },
            { text: "We need some sugar.", selectable: true, correct: true },
            { text: " · " },
            { text: "We need sugar.", selectable: true },
          ],
          hint: "Количество называют оборотом или числом.",
          why:
            "Названо в первой и третьей строках. Во второй и четвёртой стоит одна " +
            "вещь без количества.",
        },
        {
          id: "z4-ispravit-stroku-spiska",
          kind: "short",
          prompt:
            "Строку Please buy tea допиши так, чтобы стало ясно: чая нужно сколько-то. Запиши строку целиком.",
          answer: "Please buy some tea.",
          accept: ["Please buy some tea"],
          hint: "Чай поштучно не считают, и оборот для него у нас один короткий.",
          why:
            "Please buy some tea. Оборот a few сюда не встанет: чай не считают " +
            "поштучно.",
        },
        {
          id: "z5-napisat-prosbu",
          kind: "essay",
          prompt:
            "Напиши другу сообщение с просьбой купить продукты, четырьмя строками. Где-то поставь число, где-то — оборот a lot of или a few, где-то — слово some.",
          minWords: 14,
          sample:
            "Hi! Can you buy some food today?\nWe need a lot of bread and four eggs.\nThere isn't much tea at home, so please take some tea too.\nA few lemons would be a nice surprise.",
          checklist: [
            "есть строка с числом перед счётной вещью",
            "есть строка с оборотом a lot of или a few",
            "есть строка со словом some",
            "у каждой вещи в сообщении названо количество",
          ],
          hint:
            "Бери обороты, которые знаешь: a lot of bread, a few lemons, some tea, four eggs.",
          why:
            "Просьба работает, когда друг может собрать корзину, не переспрашивая.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину выбора, отличить вид по поведению слова,
      // услышать разговор, дописать количество.

      // ---- итог 1 ----
      {
        id: "q-po-chemu-vidno-vid",
        kind: "choice",
        outcome: "отличать исчисляемое от неисчисляемого: a book, water",
        prompt:
          "Ученик решил, что слово money исчисляемое. Какая проверка покажет, что он ошибся?",
        options: [
          { text: "Записи two moneys и a money не выходят.", correct: true },
          { text: "Деньги можно пересчитать в кошельке." },
          { text: "Перед money стоит слово the." },
        ],
        hint: "Проверяют не саму вещь, а то, что выходит со словом.",
        why:
          "Записи two moneys и a money не выходят. Пересчитать монеты и правда " +
          "можно, но вид слова решает не это.",
      },
      {
        id: "q-ispravit-a-water",
        kind: "short",
        outcome: "отличать исчисляемое от неисчисляемого: a book, water",
        prompt:
          "Ученик написал: We take a water and two breads. Запиши строку без ошибки.",
        answer: "We take some water and some bread.",
        accept: [
          "We take some water and some bread",
          "We take water and bread.",
          "We take water and bread",
        ],
        hint: "Оба слова неисчисляемые, значит ни a, ни числа при них не бывает.",
        why:
          "We take some water and some bread. Слово some годится обоим видам и " +
          "заменяет здесь и a, и число.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-a-lot-bez-of",
        kind: "short",
        outcome: "говорить «много» одним оборотом: a lot of books, a lot of water",
        prompt:
          "Ученик написал: There are a lot books here. Запиши строку без ошибки.",
        answer: "There are a lot of books here.",
        accept: ["There are a lot of books here"],
        hint: "В обороте потерялось короткое слово.",
        why:
          "There are a lot of books here. Оборот состоит из трёх слов, и без " +
          "среднего он не работает.",
      },
      {
        id: "q-pochemu-a-lot-udoben",
        kind: "choice",
        outcome: "говорить «много» одним оборотом: a lot of books, a lot of water",
        prompt:
          "Чем оборот a lot of удобнее, чем much и many?",
        options: [
          { text: "Он не требует множественного числа у вещи." },
          { text: "Он не бывает в отрицании." },
          { text: "Он годится обоим видам сразу.", correct: true },
        ],
        hint: "Сравни a lot of milk и a lot of eggs: что в них общего?",
        why:
          "Он годится обоим видам. Выбирать между much и many при нём не " +
          "приходится.",
      },

      // ---- итог 3 ----
      {
        id: "q-pochemu-a-few-ne-vezde",
        kind: "choice",
        outcome: "говорить о малом количестве: a few biscuits, a bit of jam",
        prompt: "Почему оборот a few не ставят перед словом milk?",
        options: [
          { text: "Потому что молоко жидкое, а не твёрдое." },
          { text: "Потому что milk нельзя поставить во множественное число.", correct: true },
          { text: "Потому что молоко бывает только в бутылке." },
        ],
        hint: "Слово few говорит про штуки, а штуки видны во множественном числе.",
        why:
          "Потому что milk нельзя поставить во множественное число. Жидкое оно или " +
          "твёрдое, язык не спрашивает: он смотрит на форму слова.",
      },
      {
        id: "q-ispravit-a-few-jam",
        kind: "short",
        outcome: "говорить о малом количестве: a few biscuits, a bit of jam",
        prompt:
          "Ученик написал: There is a few jam. Запиши строку без ошибки.",
        answer: "There is a bit of jam.",
        accept: [
          "There is a bit of jam",
          "There is a lot of jam.",
          "There is a lot of jam",
          "There is some jam.",
          "There is some jam",
        ],
        hint: "Варенье поштучно не считают, и оборотов для него у нас три.",
        why:
          "There is a bit of jam. Смысл «мало, но есть» у неисчисляемого несёт " +
          "оборот a bit of. Годятся и a lot of, и some, но они о другом " +
          "количестве. Оборот a few идёт только к тому, что считают.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-much-tickets",
        kind: "short",
        outcome: "выбирать much или many в отрицании: not much time, not many tickets",
        prompt:
          "Ученик написал: I don't have much lemons. Запиши строку без ошибки.",
        answer: "I don't have many lemons.",
        accept: ["I don't have many lemons"],
        hint: "Лимоны считают поштучно.",
        why:
          "I don't have many lemons. К счётному идёт many, а much пошло бы к " +
          "тому, что не считают.",
      },
      {
        id: "q-sobrat-otricanie-o-knigah",
        kind: "short",
        outcome: "выбирать much или many в отрицании: not much time, not many tickets",
        prompt:
          "Книг у неё не много. Скажи это по-английски, начав с She doesn't have.",
        answer: "She doesn't have many books.",
        accept: ["She doesn't have many books"],
        hint: "Книги считают поштучно.",
        why:
          "She doesn't have many books. Слово much пошло бы к тому, у чего нет " +
          "множественного числа.",
      },
      {
        id: "q-dopisat-much-o-masle",
        kind: "short",
        outcome: "выбирать much или many в отрицании: not much time, not many tickets",
        prompt:
          "Допиши одно слово: There isn't ___ oil. Масла мало.",
        answer: "much",
        accept: ["Much"],
        hint: "Масло поштучно не считают.",
        why:
          "There isn't much oil. Масло льют, а не считают штуками, и слово при " +
          "нём выбирают по этому.",
      },

      // ---- итог 5 ----
      {
        id: "q-ispravit-how-many-sugar",
        kind: "short",
        outcome: "спрашивать сколько: How much bread? How many eggs?",
        prompt:
          "Ученик написал: How many sugar do we need? Запиши вопрос без ошибки.",
        answer: "How much sugar do we need?",
        accept: ["How much sugar do we need"],
        hint: "Сахар сыплют ложками, а не берут штуками.",
        why:
          "How much sugar do we need? Второе слово вопроса выбирают по виду вещи, " +
          "как и в отрицании.",
      },
      {
        id: "q-otvet-na-how-many",
        kind: "choice",
        outcome: "спрашивать сколько: How much bread? How many eggs?",
        prompt: "На вопрос How many eggs? какой ответ подойдёт?",
        options: [
          { text: "Six.", correct: true },
          { text: "Yes, please." },
          { text: "In the shop." },
        ],
        hint: "Вопрос спрашивает количество, а не место и не согласие.",
        why:
          "Six. Вопрос о количестве, и отвечают на него числом или мерой.",
      },

      // ---- итог 6 ----
      {
        id: "q-ispravit-enough-of",
        kind: "short",
        outcome: "говорить, хватает ли: enough bread, not enough tickets",
        prompt:
          "Ученик написал: We have enough of water. Запиши строку без ошибки.",
        answer: "We have enough water.",
        accept: ["We have enough water"],
        hint: "Одно слово в строке лишнее.",
        why:
          "We have enough water. Слово of живёт в оборотах a lot of и a bit of, а " +
          "при enough его нет.",
      },
      {
        id: "q-mnogo-ili-hvataet",
        kind: "choice",
        outcome: "говорить, хватает ли: enough bread, not enough tickets",
        prompt:
          "Строки There is a lot of rice и We have enough rice говорят разное. Чем?",
        options: [
          { text: "Первая о количестве, вторая о том, хватит ли.", correct: true },
          { text: "Первая о настоящем, вторая о будущем." },
          { text: "Ничем: обе значат «много»." },
        ],
        hint: "Спроси у каждой строки: сколько риса или на что его хватит?",
        why:
          "Первая о количестве, вторая о том, хватит ли. Риса может быть много и " +
          "всё равно не хватать на всех.",
      },
      {
        id: "q-napisat-o-nehvatke-deneg",
        kind: "short",
        outcome: "говорить, хватает ли: enough bread, not enough tickets",
        prompt:
          "Денег им не хватает. Скажи это по-английски, начав с They don't have.",
        answer: "They don't have enough money.",
        accept: ["They don't have enough money"],
        hint: "Слово о запасе не меняется от отрицания.",
        why:
          "They don't have enough money. Отрицание строится обычным образом, а " +
          "enough остаётся как было.",
      },

      // ---- итог 7 ----
      {
        id: "q-najti-kolichestvo-v-soobshchenii",
        kind: "short",
        outcome: "находить в сообщении, чего и сколько просят",
        // Ответом стояло few, а урок 3 учит a few как единое целое: само по себе
        // few значит «мало» — оттенок обратный. Ученику после ошибки показывали
        // few. Заодно строка сообщения повторяла реплику разговора из того же
        // урока («Take a few lemons»); взяты другие вещи, обе с карточками.
        prompt:
          "В сообщении строка: Buy a few apples and a bit of cheese. Сколько просят " +
          "яблок? Ответь двумя словами по-английски.",
        answer: "a few",
        accept: ["A few"],
        hint: "Оборот берут целиком, вместе с a.",
        // Первая правка дописала сюда, что few без a значит «мало». Это различение
        // English Grammar Profile ставит на B2 (DETERMINERS quantity, FORM:
        // 'LITTLE/FEW'), а модуль стоит на графе A2 про a few. Нашёл методист.
        why:
          "A few — несколько. Оборот берут целиком, вместе с a. Про сыр в той же " +
          "строке сказано другим оборотом, и это не случайность: яблоки считают " +
          "поштучно, сыр нет.",
      },
      {
        id: "q-chto-znachit-aren-t-many",
        kind: "choice",
        outcome: "находить в сообщении, чего и сколько просят",
        prompt:
          "В сообщении стоит: There aren't many biscuits left. Что это значит?",
        options: [
          { text: "Печенья не осталось совсем." },
          { text: "Печенья осталось много." },
          { text: "Печенья осталось мало.", correct: true },
        ],
        hint: "Оборот not many говорит о малом числе, а не о пустоте.",
        why:
          "Печенья осталось мало. Про «совсем нет» сказали бы иначе: the biscuits " +
          "are finished.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-chego-malo",
        kind: "short",
        outcome: "слышать в разговоре, чего не хватает",
        zvuk:
          "Do we have much sugar? — Not much. But we have a lot of rice.",
        prompt:
          "Послушай. Хватает ли им сахара? Ответь одним словом: да или нет.",
        answer: "нет",
        accept: ["Нет", "не хватает", "no"],
        hint: "Ответ на вопрос про сахар состоит из двух слов.",
        why:
          "Нет. На вопрос про сахар отвечают Not much, а много у них риса.",
      },
      {
        id: "q-uslyshat-skolko-biletov",
        kind: "short",
        outcome: "слышать в разговоре, чего не хватает",
        zvuk:
          "How many tickets do we need? — Four. — And how much money? — Not much.",
        prompt: "Послушай. Сколько нужно билетов? Ответь числом.",
        answer: "4",
        accept: ["four", "четыре"],
        hint: "Ответ стоит сразу после первого вопроса.",
        why: "How many tickets do we need? — Four.",
      },

      // ---- итог 8 ----
      {
        id: "q-dopisat-kolichestvo-v-prosbu",
        kind: "short",
        outcome: "проверять просьбу о покупках: у каждой вещи названо количество",
        prompt:
          "К строке просьбы Please buy lemons допиши количество: несколько. Запиши строку целиком.",
        answer: "Please buy a few lemons.",
        accept: [
          "Please buy a few lemons",
          "Please buy some lemons.",
          "Please buy some lemons",
        ],
        hint: "Лимоны считают поштучно, и оборотов для них у нас два.",
        why:
          "Please buy a few lemons. Годится и some lemons: оба оборота идут к " +
          "счётному.",
      },
      {
        id: "q-chislo-ili-oborot",
        kind: "choice",
        outcome: "проверять просьбу о покупках: у каждой вещи названо количество",
        prompt:
          "Перед каким словом в просьбе можно поставить число, а не оборот?",
        options: [
          { text: "sugar" },
          { text: "eggs", correct: true },
          { text: "tea" },
        ],
        hint: "Число ставят только перед тем, что считают поштучно.",
        why:
          "Eggs. Сказать «four eggs» можно, а «four sugar» и «four tea» — нет.",
      },
      {
        id: "q-dopisat-oba-kolichestva",
        kind: "short",
        outcome: "проверять просьбу о покупках: у каждой вещи названо количество",
        prompt:
          "Просьба целиком: Please buy bread and eggs. Допиши её так, чтобы друг всё понял: хлеба много, яиц четыре. Запиши обе вещи одной строкой.",
        answer: "Please buy a lot of bread and four eggs.",
        accept: [
          "Please buy a lot of bread and four eggs",
          "Please buy four eggs and a lot of bread.",
        ],
        hint: "Перед хлебом встанет оборот, перед яйцами — число.",
        why:
          "Please buy a lot of bread and four eggs. Число перед хлебом не " +
          "поставить: у него нет штук.",
      },
    ],
  },
};

export default module;
