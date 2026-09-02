import type { Module } from "@/lib/content/types";

/**
 * Модуль 20 курса «Английский · Elementary»: этот, тот и другой.
 *
 * Программа: docs/programma-english-elementary.md, модуль 20 — «указывать и не
 * повторять названное».
 *
 * ЗАПРЕТ «К TIGHTS И SHORTS THIS И THAT НЕ ПОДХОДЯТ» — НАСТОЯЩИЙ, ПРОВЕРЕН
 * 31 августа 2026.
 *
 * Он выглядит как выдуманный: «всегда», «вовсе», «только» в одном месте — три
 * признака сразу. Методист проверил и подтвердил двумя источниками:
 *
 * - `materials/cambridge-vocab-a2-key.pdf` помечает сами слова: `shorts (n pl)`,
 *   `tights (n pl)`, `jeans (n pl)`, `trousers (n pl)`, `glasses (n pl)`. Помета
 *   `pl plural` — собственная помета словника, а не наш вывод;
 * - `English Grammar Profile Online.csv`: A1 «FORM: 'THIS' WITH SINGULAR NOUNS»,
 *   A2 «FORM: 'THAT'» — с единственным; A2 `these`/`those` — с множественным.
 *
 * Модуль себя не нарушает: `this shorts` стоит только неверным вариантом.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «УКАЗАТЕЛЬНОЕ МЕСТОИМЕНИЕ».
 *
 * Так эти слова зовут и русские учебники, и руководство A2 Key: «Demonstrative:
 * this, that, these, those» (с. 52, перечень Pronouns; там же в перечне
 * Adjectives). Слово «местоимение» курс уже вводил, «указательное» объясняется в
 * уроке 1 на месте: местоимение, которым показывают на вещь.
 *
 * ВТОРОЙ ПОЛОВИНЕ МОДУЛЯ ИМЕНИ НЕ ДАЁТСЯ, И ЭТО РЕШЕНИЕ. Уроки 3–5 учат
 * заменять названное словом `one`, различать `the other one` и `another`,
 * называть часть через `some of`. Русского имени у этого класса слов нет, а
 * придумывать своё запрещено правилом о ярлыках. Поэтому уроки учат случаю и
 * называют сами слова, а класса не называют вовсе. Придуманных ярлыков вроде
 * «слово-заменитель» в тексте для ученика нет ни разу.
 *
 * СТРОКА ПРОГРАММЫ ПРОВЕРЕНА ДО НАПИСАНИЯ, 23 августа 2026, и два обещания из
 * пяти сняты. Разбор с цитатами — в программе; коротко:
 *
 * - **`none` — C1**, сразу тремя графами English Grammar Profile: PRONOUNS
 *   «substitution, one, ones, none» → «FORM: 'NONE'»; PRONOUNS quantity →
 *   «FORM: 'NONE', SUBSTITUTION»; NEGATION → там же. В словнике A2 Key его нет
 *   (искал построчно: есть `another`, `one`, `other`). Случай тот же, что у
 *   `nowhere` в модуле 19, и снят той же меркой;
 * - **`ones` — B1**, «FORM: 'ONES'». В словнике отдельной строкой тоже нет.
 *
 * ОТСЮДА ДЫРА, И ОНА НАЗВАНА ЧЕСТНО: `one` заменяет только вещь в единственном
 * числе, а как не повторять названное во множественном, ступень не даёт. Модуль
 * об этом МОЛЧИТ — учить надо своему случаю, а не отрицанию чужого. Взамен сюда
 * перенесён оборот `some of` / `all of`: он A2 и как раз о том же — говорить о
 * названном, не называя его заново.
 *
 * МЕРКА ТА ЖЕ, ЧТО В МОДУЛЕ 19, И ПРИМЕНЕНА ОДИНАКОВО. English Grammar Profile
 * ставит на B1 обе вещи урока 4 — `another` (DETERMINERS articles, три графы:
 * «FORM: 'ANOTHER'», «USE: ONE MORE», «USE: DIFFERENT») и `the other`
 * («FORM/USE: 'THE OTHER'»). Модуль их берёт, потому что оба стоят в словнике
 * A2 Key — `another (det & pron)`, `other (det & pron)`, — а руководство на
 * с. 52 называет `other` прямо, в перечне Quantitative.
 *
 * И ЗДЕСЬ ПРИМЕР ГРАФЫ СИЛЬНЕЕ ЕЁ ОПИСАНИЯ. Обе графы A2 про `one` —
 * «FORM: PRE-MODIFYING» и «FORM/USE: POSTMODIFYING, SPECIFYING» — приводят в
 * примерах работы, сданные на A2, и в них стоит ровно наш оборот: «It's better
 * than the other one» и «I bought a jacket because the other one that I had was
 * too small». То есть на A2 ученики его уже пишут и им его засчитывают.
 *
 * И ЕЩЁ ОДНО ВЗЯТО ВЫШЕ ГРАФЫ ТОЙ ЖЕ МЕРКОЙ: `this one` и `that one`. English
 * Grammar Profile ставит их на B1 («FORM: 'THIS ONE', 'THAT ONE'»), а словник
 * A2 Key содержит обе части порознь — `one (det & pron)`, `this (det & pron)`,
 * `that (det & pron)`, — и руководство на с. 52 называет указательные дважды, и
 * местоимениями, и определениями.
 *
 * Объявляется это здесь потому, что первая редакция шапки написала обратное —
 * «модуль даёт только `the blue one` и `the other one`», — а уроки давали
 * `this one` и `that one` тринадцать раз, включая подсказку к сочинению. Нашёл
 * методист. Незаявленное заимствование хуже заявленного: следующий проверяющий
 * читает шапку и решает, что оборота в модуле нет.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ:
 *
 * - `none` и `ones` — см. выше;
 * - `these ones`, `those ones` — B2;
 * - `each other` — B1, PRONOUNS reciprocal;
 * - `each of`, `neither of` — `each of` есть в графе A2 наравне с `some of`, но
 *   модуль берёт три оборота из шести (`some of`, `all of`, `both of`): у графы
 *   их перечислено семь, и все семь в один урок не ставят. `neither of` — B2.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать карточек, из них новых для ступени двадцать пять.
 *
 * ПЯТЬ КАРТОЧЕК — ОПОРНЫЕ СЛОВА САМОГО МОДУЛЯ: `this`, `that`, `one`,
 * `another`, `other`. Oxford помечает их A1, и проверка новизны на них молчит,
 * но карточки у них не было ни в одном модуле Elementary, а между ступенями нет
 * ссылок на память (решение владельца от 16 августа). Правило то же, что дало
 * карточки местоимениям в модуле 19.
 *
 * СНЯТО ИЗ-ЗА ТРАНСКРИПЦИИ: `discount`, `hoodie` и `t-shirt` — `ipa-en-uk`
 * молчит, `wikipron-en-uk` согласного ответа не даёт. Правило то же, что в
 * модуле 19: не угадывать, а брать слово, чьё чтение источники дают согласно.
 */
const module: Module = {
  slug: "etot-tot-i-drugoy",
  title: "Этот, тот и другой",

  outcomes: [
    "показывать на вещь: this cap, that shop",
    "показывать на несколько вещей: these tights, those shorts",
    "не повторять названное: the pale one",
    "различать the other one и another",
    "говорить о названном через of: some of my friends, all of my money",
    "находить в объявлении, что продают и почём",
    "слышать в разговоре, какую вещь взяли",
    "проверять объявление: о каждой вещи сказано, какая она и сколько стоит",
  ],

  sources: [
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications. Перечень Pronouns: «Demonstrative: " +
        "this, that, these, those» и «Quantitative: one, something, everybody, " +
        "etc.». Перечень Adjectives: «Demonstrative: this, that, these, those» и " +
        "«Quantitative: some, any, many, much, a few, a lot of, all, other, " +
        "every, etc.». Отсюда весь состав модуля: указательные названы дважды — и " +
        "как местоимения, и как определения при вещи, — а `other` и `all` стоят в " +
        "перечне Quantitative прямо. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1 И 2, УКАЗАТЕЛЬНЫЕ. DETERMINERS demonstratives: A1, «FORM: " +
        "'THIS' WITH SINGULAR NOUNS» — «Can use 'this' with singular nouns», " +
        "пример «I like this place»; A2, «FORM: 'THAT'» — «Can use 'that' with " +
        "singular nouns», пример «I also want to see that film»; A2, «FORM: " +
        "'THESE'» — «Can use 'these' with plural nouns», пример «I bought these " +
        "clothes because they weren't expensive»; A2, «FORM: 'THOSE'» — «Can use " +
        "'those' with plural nouns», пример «The cost of those clothes was £300». " +
        "Отсюда же случай урока 1: A1, «USE: 'THIS', POINTING» — «to refer to " +
        "places from the speaker's or writer's point of view», и A2, «USE: 'THAT', " +
        "POINTING» — «to talk about or point to things which are further away in " +
        "time and space from the speaker or writer». " +
        "ОГОВОРКА, КОТОРУЮ НАДО ЗНАТЬ ЧИТАЮЩЕМУ ЭТУ ОПОРУ. У графы «USE: 'THAT', " +
        "POINTING» поле примера в источнике заполнено словами «Placeholder row, " +
        "lack of spoken data (see A2)» — то же у «USE: 'THESE' POINTING» и «USE: " +
        "THOSE POINTING». Дескриптор есть, свидетельств письменных работ нет: " +
        "показывание пальцем живёт в разговоре, а собран корпус по письму. " +
        "Значит на этих трёх графах держится дескриптор, а не пример, и правило " +
        "проекта «к цитате читается её пример» здесь исполнить нечем. Опоры с " +
        "настоящими примерами у модуля другие и их достаточно: A2 «FORM: 'THAT'» " +
        "(«I also want to see that film»), A2 «USE: 'THAT', ALREADY MENTIONED», " +
        "A2 «FORM: 'THESE'» и «FORM: 'THOSE'», A1 «USE: 'THIS', POINTING». " +
        "PRONOUNS demonstratives, A2: «FORM: 'THIS'» — «Can use 'this' as a " +
        "pronoun with singular reference», пример «This is a very interesting " +
        "place»; «FORM: 'THAT'» — пример «That was amazing»; «FORM/USE: RESPONSE " +
        "TOKENS WITH 'THAT'S'» — «Can use 'that's' + adjective to respond to " +
        "something», примеры «That's great!», «That's a good idea!». " +
        "УРОК 3, ЗАМЕНА НАЗВАННОГО. PRONOUNS «substitution, one, ones, none», A2: " +
        "«FORM: 'ONE'» — «Can use 'one' as a pronoun to substitute for singular " +
        "countable nouns which have already been mentioned», пример «I bought a " +
        "new pullover, because my old one is too small»; «FORM: PRE-MODIFYING» — " +
        "«Can use determiners + premodifers + 'one'», пример «I love blue so I " +
        "bought the blue one»; «FORM/USE: POSTMODIFYING, SPECIFYING» — пример «My " +
        "house is No.8 and it's the one with silver gates». " +
        "УРОК 4, И ЗДЕСЬ ВЗЯТО ВЫШЕ ГРАФЫ — ПО МЕРКЕ СЛОВНИКА. `another` стоит на " +
        "B1 (DETERMINERS articles, «FORM: 'ANOTHER'», «USE: ONE MORE (WITH " +
        "'ANOTHER')», «USE: DIFFERENT (WITH 'ANOTHER')»), `the other` — тоже B1 " +
        "(«FORM/USE: 'THE OTHER'»). Оба стоят в словнике A2 Key, то есть входят в " +
        "требования экзамена ступени, и мерка здесь та же, что в модуле 19. " +
        "Сильнее того: примеры граф A2 про `one` — работы, сданные на A2, — " +
        "содержат ровно наш оборот: «It's better than the other one» и «I bought " +
        "a jacket because the other one that I had was too small». " +
        "УРОК 5. DETERMINERS quantity, A2, «FORM: DETERMINER + 'OF' + " +
        "DETERMINER»: «Can use a range of quantifying determiners + 'of' + " +
        "determiner ('all of', 'some of', 'both of', 'many of', 'any of', number + " +
        "'of', 'each of')», примеры «I spent all of my money!», «Some of my " +
        "friends gave me books», «The competition was very tough because both of " +
        "the teams were good». Оборотов в графе семь; урок берёт три. " +
        "ВЗЯТО ВЫШЕ ГРАФЫ ТОЙ ЖЕ МЕРКОЙ: `this one`, `that one` — B1, «FORM: " +
        "'THIS ONE', 'THAT ONE'», — но словник A2 Key содержит обе части порознь " +
        "(`one (det & pron)`, `this (det & pron)`, `that (det & pron)`), а " +
        "руководство на с. 52 называет указательные и местоимениями, и " +
        "определениями. Оборот стоит в уроках 1, 4, 6, 7, 8 и в работе. " +
        "И ОДИНОЧНОЕ `both` МЕСТОИМЕНИЕМ — в уроке 5 оно стоит в конце последней " +
        "строки разговора, без вещи после себя. PRONOUNS quantity, B1, «FORM: " +
        "SUBJECT AND OBJECT PRONOUNS». " +
        "Мерка та же: `both (det & pron)` стоит в словнике, а в графе A2 " +
        "«DETERMINER + 'OF' + DETERMINER» `both of` названо прямо — одиночное " +
        "`both` от него на шаг. " +
        "ЧЕГО НЕТ. `none` — C1 тремя графами. `ones` — B1. `these ones`, `those " +
        "ones` — B2. `each other` — B1. `neither of` — B2",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем объявление о распродаже» и УРОК ПИСЬМА «Пишем " +
        "объявление о распродаже». с. 66, шкала «Overall written production», " +
        "графа A2: «Can produce a series of simple phrases and sentences linked " +
        "with simple connectors like» — далее в источнике перечислены and, but и " +
        "because. Объявление пишется для читателей вообще, а не человеку, и " +
        "потому опора здесь — производство текста, а не переписка. " +
        "ШКАЛА ВЫБРАНА НАРОЧНО, И НА ЭТОМ УЖЕ ОБЖИГАЛИСЬ ТРИЖДЫ. с. 81 разводит " +
        "соседей прямо: Correspondence — о переписке, «Notes, messages and forms» " +
        "— о передаче сведений человеку. В модуле 17 я взял вторую там, где нужна " +
        "была эта; в модуле 16 — строку графы A1 с отброшенным хвостом «with " +
        "reference to a dictionary». Здесь читателя нет вовсе, есть объявление на " +
        "доске. " +
        "И ОСТОРОЖНО С СОСЕДНЕЙ СТРОКОЙ ТОЙ ЖЕ ШКАЛЫ: «Can produce simple " +
        "isolated phrases and sentences» — это графа A1, проверил. Наша графа " +
        "требует связок",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Тридцать карточек модуля взяты из словника ступени. Новых для ступени " +
        "двадцать пять; пять — опорные слова самого модуля (`this`, `that`, " +
        "`one`, `another`, `other`), у которых карточки не было ни в одном модуле " +
        "Elementary. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `these (det & pron)` и `those (det " +
        "& pron)` помечены и определением, и местоимением, но УРОК 2 ДАЁТ ТОЛЬКО " +
        "СЛУЧАЙ ОПРЕДЕЛЕНИЯ (`these tights`), и это решение: местоименные `these` " +
        "и `those` стоят на B1, а помета словника говорит о слове вообще, не о " +
        "нашей ступени. Первая редакция приписывала уроку оба случая — неправда, " +
        "нашёл методист; " +
        "`shorts (n pl)` и `tights (n pl)` — только множественное число, и " +
        "урок 2 на этом стоит; `leather (n & adj)` — карточка берёт значение " +
        "прилагательного, кожаный; " +
        "`shampoo (n & v)` — карточка берёт вещь; `stripes (n)` и `striped (adj)` " +
        "стоят в словнике двумя отдельными строками, и модуль даёт обе. " +
        "`rubber` — БРИТАНСКОЕ СЛОВО в значении «ластик», и оно здесь нарочно: " +
        "курс держит британскую норму. Американское `eraser` в словнике тоже есть, " +
        "но курс его не берёт — то же решение, что с `chips` и `post`. " +
        "ВОСЕМЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000, И ЭТО ОБЪЯВЛЯЕТСЯ НАРОЧНО: " +
        "leather, pale, wool, drum, album, keyboard, cap — B1, rubber — B2. " +
        "Первая редакция насчитала семь и пропустила `cap`, который стоит в " +
        "названии урока 1 и в итоге модуля; нашёл методист. Карточка `dressed` " +
        "(тоже B1) снята вовсе: она не работала в модуле нигде, кроме себя " +
        "самой. Все восемь " +
        "стоят в словнике A2 Key, то есть входят в требования экзамена, к " +
        "которому ведёт ступень. Два словника здесь расходятся, и это их обычное " +
        "состояние: Oxford размечен по ступеням, но бытовой половины экзамена не " +
        "знает, а словник A2 Key знает её и по ступеням не размечен. Мерка взята " +
        "та же, что в модулях 18 и 19: слово в словнике — слово ступени. " +
        "И отдельно про rubber: Oxford ставит на B2 материал (каучук), а словник " +
        "A2 Key даёт бытовое британское значение — ластик. Это разные слова, и " +
        "карточка берёт второе. " +
        "СНЯТО ПРИ ПОДБОРЕ: `discount`, `hoodie`, `t-shirt` — из-за транскрипции, " +
        "см. шапку модуля",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словари произношения materials/ipa-en-uk.txt и materials/wikipron-en-uk.tsv",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə`, знак ударения перед слогом. Отсюда " +
        "`leather` — `/ˈleðə/`, `golden` — `/ˈgəʊldən/` (гласный здесь слышен и " +
        "стоит в обоих словарях), `ruler` — `/ˈruːlə/`",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "etot-i-tot",
      title: "Этот и тот: this cap, that shop",
      estimatedMinutes: 15,
      outcome: "показывать на вещь: this cap, that shop",
      vozvrat: [{ iz: "kto-to-i-chto-to", zadanie: "z1-dopisat-anyone" }],

      blocks: [
        {
          id: "v-torgovom-centre",
          kind: "explain",
          text: [
            "Дана и Данияр пришли в торговый центр за подарком.",
            "Дана держит в руках кепку, а другую видит далеко, на витрине.",
            "This cap is nice. — Эта кепка красивая.",
            "Ту, что в руках, зовут this cap, а дальнюю — that cap.",
            "По-русски это ровно «эта» и «та», и делят они мир так же: что ближе, что дальше.",
            "Здесь языки совпадают, и запоминать почти нечего.",
            "Разойдутся они в уроке «Эти и те»: на множественное число у английского припасены отдельные слова.",
          ],
        },
        {
          id: "ryadom-i-dalshe",
          kind: "table",
          caption: "Рядом и дальше",
          zvuchat: [
            "this cap",
            "that cap",
            "this shop",
            "that shop",
          ],
          head: ["Рядом", "Дальше"],
          rows: [
            ["this cap", "that cap"],
            ["this shop", "that shop"],
          ],
        },
        {
          id: "chto-eto-za-slova-ukazatelnye",
          kind: "explain",
          text: [
            "Слово, которое стоит вместо имени вещи, называют местоимением.",
            "This и that — местоимения, которыми показывают на вещь.",
            "Такие местоимения называют указательными.",
            "This — о том, что рядом с тобой: эта кепка у меня в руках.",
            "That — о том, что дальше: вон та кепка на витрине.",
            "Вещь при них стоит в единственном числе: this cap, а не this caps.",
          ],
        },
        {
          id: "ne-this-caps",
          kind: "note",
          tone: "mistake",
          text:
            "«this caps» — так не говорят.\n\nПри this и that вещь стоит в " +
            "единственном числе: this cap, that shop.",
        },
        {
          id: "sami-po-sebe",
          kind: "explain",
          text: [
            "Эти же слова работают и без вещи, сами по себе.",
            "This is my number — «вот мой номер».",
            "That was amazing — «это было замечательно».",
            "Особенно часто так отвечают: That's great! That's a good idea!",
          ],
        },
        {
          id: "razgovor-o-kepke",
          kind: "example",
          caption: "Разговор о кепке",
          razgovor: true,
          zvuchat: [
            "Look at this cap. It is leather.",
            "And that cap in the window?",
            "That one is for a child.",
            "Then I take this one. That's a good idea!",
          ],
          text:
            "Look at this cap. It is leather.\nAnd that cap in the window?\nThat one is for a child.\nThen I take this one. That's a good idea!",
          perevod: {
            "Look at this cap. It is leather.":
              "Посмотри на эту кепку. Она кожаная.",
            "And that cap in the window?": "А та кепка на витрине?",
            "That one is for a child.": "Та детская.",
            "Then I take this one. That's a good idea!":
              "Тогда беру эту. Хорошая мысль!",
          },
          explain:
            "Кепка в руках — this cap, кепка на витрине — that cap. В последней " +
            "строке That's a good idea стоит без вещи: так отвечают на сказанное.\n\n" +
            "В третьей и четвёртой строках стоит слово one: that one, this one. " +
            "Оно заменяет слово cap, чтобы не повторять его четыре раза подряд. " +
            "Полностью разберём его в уроке «Без повтора: the pale one».",
        },
        {
          id: "slovar-torgovogo-centra",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "this", translation: "этот, эта, это", example: "Look at this cap.", hint: "/ðɪs/" },
            { term: "that", translation: "тот, та, то", example: "And that cap in the window?", hint: "/ðæt/" },
            { term: "cap", translation: "кепка", example: "Look at this cap.", hint: "/kæp/" },
            { term: "leather", translation: "кожаный", example: "It is leather.", hint: "/ˈleðə/" },
            // Карточка перенесена сюда из модуля 31: слово работает уже в этом
            // уроке — строка «This is my number» стоит в объяснении, — а получал
            // его ученик одиннадцатью модулями позже. И настоящий долг был не
            // здесь, а в модуле 28: там строка «Could you send us your bus
            // number?» стоит в тексте для чтения без перевода и без глоссария, и
            // на ней держатся два задания. Нашёл методист.
            { term: "number", translation: "номер, число", example: "This is my number.", hint: "/ˈnʌmbə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-ryadom",
          kind: "choice",
          prompt:
            "Дана держит кепку в руках. Как она о ней скажет?",
          options: [
            { text: "that cap" },
            { text: "this cap", correct: true },
            { text: "this caps" },
          ],
          hint: "Одно из этих слов говорит о том, что рядом.",
          why:
            "This cap. Слово that сказало бы о кепке подальше, а в this caps " +
            "лишняя буква s: вещь при this стоит в единственном числе.",
        },
        {
          id: "z2-dopisat-that",
          kind: "gap",
          prompt: "Магазин виден в конце этажа, далеко. Допиши слово.",
          before: "Let's go to ",
          after: " shop.",
          answer: "that",
          hint: "Магазин не рядом, а дальше.",
          why:
            "Let's go to that shop. Слово this сказало бы, что магазин прямо тут.",
        },
        {
          id: "z3-otmetit-ukazatelnye",
          kind: "hottext",
          prompt: "Отметь слова, которыми показывают на вещь.",
          parts: [
            { text: "Look at " },
            { text: "this", selectable: true, correct: true },
            { text: " cap. " },
            { text: "It", selectable: true },
            { text: " is leather. " },
            { text: "That", selectable: true, correct: true },
            { text: " shop is closed." },
          ],
          hint: "Одной вещью тут показывают на кепку рядом, другой — на магазин подальше.",
          why:
            "This и That. Слово It ни на что не показывает: оно стоит вместо " +
            "кепки, названной строкой раньше.",
        },
        {
          id: "z4-sobrat-o-magazine",
          kind: "order",
          prompt: "Собери строку: эта кепка кожаная.",
          items: ["is leather.", "cap", "This"],
          answer: [2, 1, 0],
          hint: "Начни со слова, которым показывают на кепку в руках.",
          why:
            "This cap is leather. Вещь при this стоит в единственном числе.",
        },
        {
          id: "z5-otvetit-tokenom",
          kind: "short",
          prompt:
            "Друг предложил хорошее. Ответь ему коротко по-английски, начав с That's.",
          answer: "That's great!",
          accept: [
            "That's great",
            "That's a good idea!",
            "That's a good idea",
            "That's great.",
          ],
          hint: "Так отвечают на сказанное, и вещь при этом не называют.",
          why:
            "That's great! Годится и That's a good idea: оба ответа отвечают на " +
            "сказанное целиком, а не на одну вещь.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "eti-i-te",
      title: "Эти и те: these tights, those shorts",
      estimatedMinutes: 14,
      outcome: "показывать на несколько вещей: these tights, those shorts",

      blocks: [
        {
          id: "veshchey-neskolko",
          kind: "explain",
          text: [
            "На соседнем столе лежат колготки, а на дальнем — шорты.",
            "Вещей на каждом столе много, и слова this и that сюда не встанут.",
            "У них есть пара для нескольких вещей сразу.",
            "Меняются оба слова, и вещь при них тоже.",
          ],
        },
        {
          id: "odna-veshch-i-neskolko",
          kind: "table",
          caption: "Одна вещь и несколько",
          zvuchat: [
            "this cap",
            "these caps",
            "that shop",
            "those shops",
          ],
          head: ["Одна вещь", "Несколько вещей"],
          rows: [
            ["this cap", "these caps"],
            ["that shop", "those shops"],
          ],
        },
        {
          id: "kak-eto-ustroeno-vo-mnozhestvennom",
          kind: "explain",
          text: [
            "This становится these, that становится those.",
            "Вещь при них берёт множественное число: these caps, those shops.",
            "Правило о близости остаётся прежним: these — рядом, those — дальше.",
            "Есть вещи, которые всегда во множественном числе: tights, shorts.",
            "К ним слова this и that не подходят вовсе — только these и those.",
          ],
        },
        {
          id: "ne-this-tights",
          kind: "note",
          tone: "mistake",
          text:
            "«this tights» — так не говорят.\n\nКолготки в английском всегда " +
            "несколько, и потому these tights.",
        },
        {
          id: "razgovor-o-veshchah-na-stole",
          kind: "example",
          caption: "Разговор о вещах на столе",
          razgovor: true,
          zvuchat: [
            "These tights are cheap.",
            "And those shorts?",
            "Those shorts are striped. I like them.",
            "I like these caps too.",
          ],
          text:
            "These tights are cheap.\nAnd those shorts?\nThose shorts are striped. I like them.\nI like these caps too.",
          perevod: {
            "These tights are cheap.": "Эти колготки дешёвые.",
            "And those shorts?": "А те шорты?",
            "Those shorts are striped. I like them.":
              "Те шорты в полоску. Мне они нравятся.",
            "I like these caps too.": "Эти кепки мне тоже нравятся.",
          },
          explain:
            "Колготки рядом — these tights, шорты подальше — those shorts. У всех " +
            "трёх вещей множественное число: tights, shorts, caps.",
        },
        {
          id: "slovar-stola",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "these", translation: "эти", example: "These tights are cheap.", hint: "/ðiːz/" },
            { term: "those", translation: "те", example: "And those shorts?", hint: "/ðəʊz/" },
            { term: "tights", translation: "колготки", example: "These tights are cheap.", hint: "/taɪts/" },
            { term: "shorts", translation: "шорты", example: "Those shorts are striped.", hint: "/ʃɔːts/" },
            { term: "striped", translation: "полосатый", example: "Those shorts are striped.", hint: "/straɪpt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-these",
          kind: "gap",
          prompt: "Колготки лежат прямо перед тобой. Допиши слово.",
          before: "",
          after: " tights are cheap.",
          answer: "These",
          hint: "Вещь во множественном числе и лежит рядом.",
          why:
            "These tights are cheap. Слово this сюда не встанет: колготки в " +
            "английском всегда несколько.",
        },
        {
          id: "z2-vybrat-dalshe-mnogo",
          kind: "choice",
          prompt: "Шорты лежат на дальнем столе. Как о них сказать?",
          options: [
            { text: "these shorts" },
            { text: "that shorts" },
            { text: "those shorts", correct: true },
          ],
          hint: "Вещей несколько, и они не рядом.",
          why:
            "Those shorts. Слово these сказало бы, что шорты рядом, а that идёт к " +
            "одной вещи.",
        },
        {
          id: "z3-otmetit-mnozhestvennoe",
          kind: "hottext",
          prompt: "Отметь записи, где слово и вещь подходят друг другу.",
          parts: [
            { text: "these caps", selectable: true, correct: true },
            { text: " · " },
            { text: "this shorts", selectable: true },
            { text: " · " },
            { text: "those shops", selectable: true, correct: true },
            { text: " · " },
            { text: "that shop", selectable: true, correct: true },
          ],
          hint: "Смотри на число: одна вещь или несколько.",
          why:
            "Неверна только вторая: шорты всегда во множественном числе, и при " +
            "них нужно these или those.",
        },
        {
          id: "z4-sobrat-o-shortah",
          kind: "order",
          prompt: "Собери строку: те шорты полосатые.",
          items: ["are striped.", "shorts", "Those"],
          answer: [2, 1, 0],
          hint: "Начни со слова о нескольких вещах подальше.",
          why:
            "Those shorts are striped. Глагол тоже во множественном числе: are, а " +
            "не is.",
        },
        {
          id: "z5-napisat-o-kepkah",
          kind: "short",
          prompt:
            "Кепки лежат рядом, и они дешёвые. Скажи это по-английски, начав с These.",
          answer: "These caps are cheap.",
          accept: ["These caps are cheap"],
          hint: "Вещь берёт множественное число, и глагол тоже.",
          why:
            "These caps are cheap. Запись These cap не выйдет: при these вещь " +
            "стоит во множественном числе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "bez-povtora-one",
      title: "Без повтора: the pale one",
      estimatedMinutes: 15,
      outcome: "не повторять названное: the pale one",

      blocks: [
        {
          id: "povtor-utomlyaet",
          kind: "explain",
          text: [
            "Дана выбирает блузку и говорит: «Мне не нравится полосатая блузка».",
            "Потом добавляет: «Я возьму светлую блузку».",
            "Слово «блузка» прозвучало дважды, и второй раз оно лишнее.",
            "По-английски вместо повтора ставят короткое слово one.",
          ],
        },
        {
          id: "s-povtorom-i-bez",
          kind: "table",
          caption: "С повтором и без",
          zvuchat: [
            "I take the pale blouse.",
            "I take the pale one.",
            "I take the wool cap.",
            "I take the wool one.",
          ],
          head: ["С повтором", "Без повтора"],
          rows: [
            ["I take the pale blouse.", "I take the pale one."],
            ["I take the wool cap.", "I take the wool one."],
          ],
        },
        {
          id: "kak-rabotaet-one",
          kind: "explain",
          text: [
            "Слово one встаёт на место вещи, о которой уже сказали.",
            "Слово, которое говорит, какая эта вещь, остаётся: the pale one, the wool one.",
            "Слово the перед ним обычно нужно: речь об известной вещи.",
            "Одно условие: вещь должна быть названа раньше или видна обоим.",
          ],
        },
        {
          id: "ne-one-bez-nazvanogo",
          kind: "note",
          tone: "mistake",
          text:
            "«Please send me the pale one» в письме, где ни одна вещь не " +
            "названа, — так не говорят.\n\nЧитатель не знает, о какой вещи речь, и " +
            "увидеть её не может. В магазине сказать так можно: блузки лежат " +
            "перед обоими.",
        },
        {
          id: "one-s-utochneniem",
          kind: "explain",
          text: [
            "Уточнение может стоять и после one, а не только перед ним.",
            "My house is No.8 and it's the one with silver gates.",
            "Здесь the one — «тот самый дом», а with silver gates говорит какой.",
            "Так отвечают, когда вещей много и надо показать на одну.",
          ],
        },
        {
          id: "razgovor-o-bluzke",
          kind: "example",
          caption: "Разговор о блузке",
          razgovor: true,
          zvuchat: [
            "Do you like this striped blouse?",
            "No, I like the pale one.",
            "And the wool one?",
            "The wool one is warm, but it is not my size.",
          ],
          text:
            "Do you like this striped blouse?\nNo, I like the pale one.\nAnd the wool one?\nThe wool one is warm, but it is not my size.",
          perevod: {
            "Do you like this striped blouse?":
              "Тебе нравится эта полосатая блузка?",
            "No, I like the pale one.": "Нет, мне нравится светлая.",
            "And the wool one?": "А шерстяная?",
            "The wool one is warm, but it is not my size.":
              "Шерстяная тёплая, но не моего размера.",
          },
          explain:
            "Слово blouse прозвучало один раз, в первой строке. Дальше вместо него " +
            "стоит one, а слово перед ним меняется: pale, wool.",
        },
        {
          id: "slovar-bluzki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "one", translation: "заменяет названную вещь", example: "No, I like the pale one.", hint: "/wʌn/" },
            { term: "pale", translation: "светлый, бледный", example: "No, I like the pale one.", hint: "/peɪl/" },
            { term: "wool", translation: "шерсть", example: "The wool one is warm.", hint: "/wʊl/" },
            { term: "blouse", translation: "блузка", example: "Do you like this striped blouse?", hint: "/blaʊz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-one",
          kind: "gap",
          prompt:
            "О блузке уже сказали. Допиши слово, чтобы не повторять его снова.",
          before: "I like the pale ",
          after: ".",
          answer: "one",
          hint: "Это короткое слово встаёт на место названной вещи.",
          why:
            "I like the pale one. Слово blouse здесь прозвучало бы вторым разом и " +
            "без пользы.",
        },
        {
          id: "z2-vybrat-bez-povtora",
          kind: "choice",
          prompt:
            "Речь идёт о кепках. Как сказать «я возьму шерстяную», не повторяя слова «кепка»?",
          options: [
            { text: "I take the wool." },
            { text: "I take the wool cap." },
            { text: "I take the wool one.", correct: true },
          ],
          hint: "Место вещи не остаётся пустым: там встаёт короткое слово.",
          why:
            "I take the wool one. Запись the wool оставила бы слово о вещи без самой " +
            "вещи, а " +
            "the wool cap как раз повторяет название.",
        },
        {
          id: "z3-otmetit-gde-one-umesten",
          kind: "hottext",
          prompt:
            "Отметь строки, где слово one поставлено верно.",
          parts: [
            { text: "This blouse is nice, but I take the pale one.", selectable: true, correct: true },
            { text: " · " },
            { text: "Dear Aigul, please send me the pale one.", selectable: true },
            { text: " · " },
            { text: "My house is the one with silver gates.", selectable: true, correct: true },
            { text: " · " },
            { text: "These caps are cheap, and I take the wool one.", selectable: true, correct: true },
          ],
          hint: "Спроси у каждой строки: знает ли собеседник, о какой вещи речь?",
          why:
            "Неверна только вторая: это начало письма, вещь в нём не названа, и " +
            "увидеть её читатель не может.",
        },
        {
          id: "z4-sobrat-o-sherstyanoy",
          kind: "order",
          prompt: "Собери строку: шерстяная тёплая. О кепке уже говорили.",
          items: ["is warm.", "wool one", "The"],
          answer: [2, 1, 0],
          hint: "Слово cap повторять не надо.",
          why:
            "The wool one is warm. Слово the стоит потому, что вещь уже известна " +
            "обоим.",
        },
        {
          id: "z5-napisat-o-svetloy",
          kind: "short",
          prompt:
            "О блузках уже сказали. Скажи по-английски, что берёшь светлую, начав с I take.",
          answer: "I take the pale one.",
          accept: ["I take the pale one"],
          hint: "Вместо слова blouse встанет короткое слово.",
          why:
            "I take the pale one. Слово pale остаётся перед ним, а вещь не " +
            "повторяется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "drugoy-i-eshche-odin",
      title: "Другой и ещё один: the other one, another",
      estimatedMinutes: 15,
      outcome: "различать the other one и another",

      blocks: [
        {
          id: "dva-raznyh-drugih",
          kind: "explain",
          text: [
            "По-русски слово «другой» годится на два разных случая.",
            "Вещей две, одну отложили, берут вторую: the other one.",
            "Вещей много, и берут ещё одну сверх взятой: another swimsuit.",
            "По-английски это два разных слова, и путать их нельзя.",
          ],
        },
        {
          id: "vtoroy-iz-dvuh-i-eshche-odin",
          kind: "table",
          caption: "Второй из двух и ещё один",
          zvuchat: [
            "the other one",
            "another swimsuit",
            "the other shop",
            "another day",
          ],
          head: ["Слово", "Когда берут", "Пример"],
          rows: [
            ["the other", "вещей две, это вторая", "the other one"],
            ["the other", "вещей две, это вторая", "the other shop"],
            ["another", "вещей много, это ещё одна", "another swimsuit"],
            ["another", "вещей много, это ещё одна", "another day"],
          ],
        },
        {
          id: "chem-oni-otlichayutsya-drug-ot-druga",
          kind: "explain",
          text: [
            "The other значит «второй из двух» — тот, что остался.",
            "Перед ним стоит the, потому что эта вещь известна: она одна такая.",
            "Another значит «ещё один» и пишется одним словом.",
            "Перед ним the не бывает: вещь не выбрана, их много.",
            "Спроси себя, сколько вещей всего — две или больше.",
          ],
        },
        {
          id: "ne-the-another",
          kind: "note",
          tone: "mistake",
          text:
            "«the another day» — так не говорят.\n\nСлово another уже содержит в " +
            "себе «один», и the перед ним не ставят.",
        },
        {
          id: "razgovor-o-kupalnike",
          kind: "example",
          caption: "Разговор о купальнике",
          razgovor: true,
          zvuchat: [
            "Here are two swimsuits. This one is golden.",
            "And the other one?",
            "The other one is pale. Take it.",
            "Can I see another swimsuit? These two are not my size.",
          ],
          text:
            "Here are two swimsuits. This one is golden.\nAnd the other one?\nThe other one is pale. Take it.\nCan I see another swimsuit? These two are not my size.",
          perevod: {
            "Here are two swimsuits. This one is golden.":
              "Вот два купальника. Этот золотистый.",
            "And the other one?": "А второй?",
            "The other one is pale. Take it.": "Второй светлый. Бери его.",
            "Can I see another swimsuit? These two are not my size.":
              "Можно посмотреть другой купальник? Эти два не моего размера.",
          },
          explain:
            "Купальников на столе два, и потому the other one — второй из них. В " +
            "последней строке просят ещё один, из всех остальных, и там стоит " +
            "another.",
        },
        {
          id: "slovar-kupalnika",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "other", translation: "другой, второй", example: "And the other one?", hint: "/ˈʌðə/" },
            { term: "another", translation: "ещё один", example: "Can I see another swimsuit?", hint: "/əˈnʌðə/" },
            { term: "swimsuit", translation: "купальник", example: "Can I see another swimsuit?", hint: "/ˈswɪmsuːt/" },
            { term: "golden", translation: "золотой", example: "This one is golden.", hint: "/ˈgəʊldən/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vtoroy-iz-dvuh",
          kind: "choice",
          prompt:
            "На столе два купальника. Один взяли в руки. Как назвать второй?",
          options: [
            { text: "another swimsuit" },
            { text: "the other one", correct: true },
            { text: "other one" },
          ],
          hint: "Вещей всего две, и вторая известна обоим.",
          why:
            "The other one. Оборот another сказал бы «ещё один», а вещей тут " +
            "только две.",
        },
        {
          id: "z2-dopisat-another",
          kind: "gap",
          prompt:
            "Купальников на полке много. Попроси показать ещё один. Допиши слово.",
          before: "Can I see ",
          after: " swimsuit?",
          answer: "another",
          hint: "Вещей много, и эта не выбрана.",
          why:
            "Can I see another swimsuit? Оборот the other сказал бы о втором из " +
            "двух, а тут их целая полка.",
        },
        {
          id: "z3-otmetit-vernye-o-drugom",
          kind: "hottext",
          prompt: "Отметь записи, построенные верно.",
          parts: [
            { text: "the other one", selectable: true, correct: true },
            { text: " · " },
            { text: "the another one", selectable: true },
            { text: " · " },
            { text: "another day", selectable: true, correct: true },
            { text: " · " },
            { text: "the other shop", selectable: true, correct: true },
          ],
          hint: "Проверь, не стоит ли the там, где его не бывает.",
          why:
            "Неверна только вторая: перед another слово the не ставят.",
        },
        {
          id: "z4-sobrat-o-vtorom",
          kind: "order",
          prompt: "Собери строку: второй светлый. Купальников два.",
          items: ["is pale.", "other one", "The"],
          answer: [2, 1, 0],
          hint: "Вещей две, значит нужно слово о втором из них.",
          why:
            "The other one is pale. Слово another сюда не встанет: оно значит «ещё " +
            "один».",
        },
        {
          id: "z5-poprosit-eshche-odin-den",
          kind: "short",
          prompt:
            "Попроси по-английски ещё один день, начав с Can I have.",
          answer: "Can I have another day?",
          accept: ["Can I have another day"],
          hint: "Дней много, и этот не выбран из двух.",
          why:
            "Can I have another day? Оборот the other day сказал бы о втором дне " +
            "из двух названных.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chast-iz-nih",
      title: "Часть и всё: some of my friends, all of my money",
      estimatedMinutes: 15,
      outcome: "говорить о названном через of: some of my friends, all of my money",

      blocks: [
        {
          id: "ne-vse-a-chast",
          kind: "explain",
          text: [
            "Данияр рассказывает про друзей: подарки принесли не все, а некоторые.",
            "Сказать «some friends» мало: это про каких-то друзей вообще.",
            "А ему надо про своих, про тех самых, о которых уже речь.",
            "Для этого между словами ставят короткое of.",
          ],
        },
        {
          id: "o-veshchah-voobshche-i-o-svoih",
          kind: "table",
          caption: "О вещах вообще и о своих",
          zvuchat: [
            "some friends",
            "some of my friends",
            "all shops",
            "all of the shops",
          ],
          head: ["О каких-то вообще", "О тех самых"],
          rows: [
            ["some friends", "some of my friends"],
            ["all shops", "all of the shops"],
          ],
        },
        {
          id: "kogda-nuzhno-of",
          kind: "explain",
          text: [
            "Слово of появляется тогда, когда дальше сказано, о каких именно вещах речь.",
            "Такое слово — my, his, her, the, these, those, а ещё them, «из них».",
            "Some of my friends — «некоторые из моих друзей».",
            "All of my money — «все мои деньги», до последней монеты.",
            "Both of the shops — «оба магазина», когда их ровно два.",
            "А если сразу стоит вещь, of не нужно вовсе: some friends, all shops.",
          ],
        },
        {
          id: "ne-some-of-friends",
          kind: "note",
          tone: "mistake",
          text:
            "«some of friends» — так не говорят.\n\nПосле of сказано, о каких именно " +
            "друзьях речь: some of my friends, some of his friends.",
        },
        {
          id: "razgovor-v-supermarkete",
          kind: "example",
          caption: "Разговор в супермаркете",
          razgovor: true,
          zvuchat: [
            "I spent all of my money today.",
            "On what?",
            "Some of these mangoes, a litre of cola and shampoo.",
            "Both of the shops were open, and I went to both.",
          ],
          text:
            "I spent all of my money today.\nOn what?\nSome of these mangoes, a litre of cola and shampoo.\nBoth of the shops were open, and I went to both.",
          perevod: {
            "I spent all of my money today.":
              "Сегодня я потратил все свои деньги.",
            "On what?": "На что?",
            "Some of these mangoes, a litre of cola and shampoo.":
              "На несколько таких манго, литр колы и шампунь.",
            "Both of the shops were open, and I went to both.":
              "Оба магазина были открыты, и я зашёл в оба.",
          },
          explain:
            "После all, some и both стоит of, потому что дальше идут my, these и " +
            "the. Слово shampoo стоит само по себе: при нём никакого of нет.",
        },
        {
          id: "slovar-supermarketa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "stripes", translation: "полоски", example: "This blouse has stripes.", hint: "/straɪps/" },
            { term: "shampoo", translation: "шампунь", example: "A litre of cola and shampoo.", hint: "/ʃæmˈpuː/" },
            { term: "mango", translation: "манго", example: "Some of these mangoes.", hint: "/ˈmæŋgəʊ/" },
            { term: "litre", translation: "литр", example: "A litre of cola.", hint: "/ˈliːtə/" },
            { term: "cola", translation: "кола", example: "A litre of cola.", hint: "/ˈkəʊlə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-of",
          kind: "gap",
          prompt:
            "Речь о своих друзьях, и пришли не все. Допиши короткое слово.",
          before: "Some ",
          after: " my friends came.",
          answer: "of",
          hint: "Дальше стоит слово my, и перед ним нужно короткое слово.",
          why:
            "Some of my friends came. Без of вышло бы «some my friends», а так не " +
            "говорят.",
        },
        {
          id: "z2-vybrat-nuzhno-li-of",
          kind: "choice",
          prompt: "В какой записи ошибка?",
          options: [
            { text: "all of my money" },
            { text: "some of these mangoes" },
            { text: "some of friends", correct: true },
          ],
          hint: "Посмотри, что стоит сразу после of.",
          why:
            "Some of friends. После of не сказано, о каких именно друзьях речь, — " +
            "сразу стоит вещь. В двух других записях всё на месте.",
        },
        {
          id: "z3-otmetit-vernye-o-chasti",
          kind: "hottext",
          prompt: "Отметь записи, построенные верно.",
          parts: [
            { text: "both of the shops", selectable: true, correct: true },
            { text: " · " },
            { text: "all of shops", selectable: true },
            { text: " · " },
            { text: "some friends", selectable: true, correct: true },
            { text: " · " },
            { text: "some of these mangoes", selectable: true, correct: true },
          ],
          hint: "Слово of нужно только там, где дальше сказано, о каких именно вещах речь.",
          why:
            "Неверна только вторая: после of там стоит сразу вещь. Запись some " +
            "friends верна и без of — она про друзей вообще.",
        },
        {
          id: "z4-sobrat-o-dengah",
          kind: "order",
          prompt: "Собери строку: я потратил все свои деньги.",
          items: ["my money.", "spent all of", "I"],
          answer: [2, 1, 0],
          hint: "Дальше идёт слово my, значит of нужно.",
          why:
            "I spent all of my money. Без of вышло бы «all my money» — так тоже " +
            "говорят, но урок учит записи с of.",
        },
        {
          id: "z5-napisat-o-magazinah",
          kind: "short",
          prompt:
            "Магазинов было два, и оба работали. Скажи это по-английски, начав с Both.",
          answer: "Both of the shops were open.",
          accept: ["Both of the shops were open"],
          hint: "Магазины известны обоим, значит после of встанет the.",
          why:
            "Both of the shops were open. Слово both говорит, что магазинов ровно " +
            "два.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-obyavlenie-o-rasprodazhe",
      title: "Читаем объявление о распродаже",
      estimatedMinutes: 13,
      outcome: "находить в объявлении, что продают и почём",

      blocks: [
        {
          id: "zachem-chitat-obyavlenie-o-rasprodazhe",
          kind: "explain",
          text: [
            "В школе распродажа: ученики продают свои вещи, а деньги идут на поездку.",
            "Объявление висит на доске, и в нём ищут две вещи: что продают и почём.",
            "Вещи в таком объявлении называют один раз, а дальше заменяют.",
            "Ниже объявление, и вопросы будут о нём.",
          ],
        },
        {
          id: "obyavlenie-o-rasprodazhe",
          kind: "text",
          title: "SCHOOL SALE — SATURDAY",
          genre: "notice",
          body: [
            "Come to the school hall on Saturday!",
            "These toys are from our families: a doll, a kite and a drum.",
            "The doll is 500 tenge, and the drum is 2000 tenge.",
            "We have two kites. This one is golden, and the other one is striped.",
            "The golden kite is 800 tenge, and the striped one is 1200 tenge.",
            "Some of the books are old, but all of them are cheap.",
            "Bring your friends because all of the money goes to our trip!",
          ],
          glossary: [
            { term: "hall", translation: "зал" },
            { term: "toys", translation: "игрушки" },
            { term: "goes to", translation: "идёт на" },
          ],
        },
        {
          id: "kak-iskat-v-obyavlenii",
          kind: "note",
          tone: "info",
          text:
            "Цену ищут в той строке, где названа вещь, или в следующей за " +
            "ней.\n\nА саму вещь ищут выше: во второй раз вместо неё часто стоит one.",
        },
        {
          id: "slovar-rasprodazhi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "doll", translation: "кукла", example: "The doll is 500 tenge.", hint: "/dɒl/" },
            { term: "kite", translation: "воздушный змей", example: "We have two kites.", hint: "/kaɪt/" },
            { term: "drum", translation: "барабан", example: "The drum is 2000 tenge.", hint: "/drʌm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-skolko-stoit-baraban",
          about: "obyavlenie-o-rasprodazhe",
          kind: "short",
          prompt: "Сколько стоит барабан? Ответь числом.",
          answer: "2000",
          accept: ["2000 tenge", "две тысячи"],
          hint: "Цена стоит в той же строке, где сказано про барабан.",
          why: "The doll is 500 tenge, and the drum is 2000 tenge.",
        },
        {
          id: "z2-kakie-zmei",
          about: "obyavlenie-o-rasprodazhe",
          kind: "choice",
          prompt: "Какие в объявлении воздушные змеи?",
          options: [
            { text: "Оба полосатые." },
            { text: "Один золотой, другой полосатый.", correct: true },
            { text: "Один золотой, другой белый." },
          ],
          hint: "Про змеев сказано в строке, которая начинается с We have two kites.",
          why:
            "Один золотой, другой полосатый: This one is golden, and the other one " +
            "is striped.",
        },
        {
          id: "z3-chto-znachit-striped-one",
          about: "obyavlenie-o-rasprodazhe",
          kind: "short",
          prompt:
            "В строке про цены стоит the striped one. Какое слово оно заменяет? Ответь одним словом по-английски.",
          answer: "kite",
          hint: "Заменённое слово стоит строкой выше.",
          why:
            "Kite. Строкой выше сказано We have two kites, и повторять слово kite " +
            "в третий раз не надо.",
        },
        {
          id: "z4-otmetit-verno-ob-obyavlenii",
          about: "obyavlenie-o-rasprodazhe",
          kind: "hottext",
          prompt: "Отметь то, что верно по объявлению.",
          parts: [
            { text: "распродажа будет в субботу", selectable: true, correct: true },
            { text: " · " },
            { text: "книги стоят дёшево", selectable: true, correct: true },
            { text: " · " },
            { text: "деньги оставят себе", selectable: true },
            { text: " · " },
            { text: "кукла дороже барабана", selectable: true },
          ],
          hint: "Про деньги сказано в последней строке, про куклу — в третьей.",
          why:
            "Верно первое и второе. Деньги идут на поездку, а кукла стоит 500 " +
            "тенге против 2000 за барабан.",
        },
        {
          id: "z5-pochemu-vse-knigi",
          about: "obyavlenie-o-rasprodazhe",
          kind: "choice",
          prompt:
            "В объявлении стоит: Some of the books are old, but all of them are cheap. Что из этого следует?",
          options: [
            { text: "Старых книг там нет вовсе." },
            { text: "Дешёвые только старые книги." },
            { text: "Старые не все, а дешёвые все.", correct: true },
          ],
          hint: "Сравни слова some и all: они говорят о разном числе книг.",
          why:
            "Старые не все, а дешёвые все. Слово some называет часть, all — всё " +
            "целиком.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-kakuyu-veshch-vzyali",
      title: "Слушаем, какую вещь взяли",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, какую вещь взяли",

      blocks: [
        {
          id: "zachem-slushat-o-vybore",
          kind: "explain",
          text: [
            "Дана и Данияр всё ещё выбирают подарок, а теперь стоят у прилавка с альбомами.",
            "Слушать надо, какую вещь они взяли в конце и почему.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-vybore-podarka",
          kind: "audio",
          caption: "Разговор о подарке",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Look at these two albums. This one is about music, and the other one " +
            "is about animals. — I take the music one. — And a keyboard? — No, " +
            "some of my friends gave him a keyboard last year.",
        },
        {
          id: "chto-slushat-o-vybore",
          kind: "note",
          tone: "info",
          text:
            "Слушай, какую из двух вещей взяли.\n\nИ слушай, почему отказались от " +
            "второго подарка: об этом говорят в конце.",
        },
        {
          id: "slovar-podarka",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "album", translation: "альбом", example: "Look at these two albums.", hint: "/ˈælbəm/" },
            { term: "animal", translation: "животное", example: "The other one is about animals.", hint: "/ˈænɪməl/" },
            { term: "keyboard", translation: "синтезатор, клавишные", example: "And a keyboard?", hint: "/ˈkiːbɔːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakoy-albom-vzyali",
          about: "zapis-o-vybore-podarka",
          kind: "short",
          prompt:
            "Послушай. О чём альбом, который взяли? Ответь одним словом по-английски.",
          answer: "music",
          accept: ["Music"],
          hint: "Ответ звучит во второй реплике, сразу после I take.",
          why: "I take the music one.",
        },
        {
          id: "z2-skolko-albomov",
          about: "zapis-o-vybore-podarka",
          kind: "short",
          prompt: "Послушай. Сколько альбомов лежало на столе? Ответь числом.",
          answer: "2",
          accept: ["two", "два"],
          hint: "Число звучит в самой первой реплике.",
          why: "Look at these two albums.",
        },
        {
          id: "z3-pochemu-ne-klaviatura",
          about: "zapis-o-vybore-podarka",
          kind: "choice",
          prompt: "Послушай. Почему не взяли синтезатор?",
          options: [
            { text: "Она слишком дорогая." },
            { text: "Её уже подарили в прошлом году.", correct: true },
            { text: "Её не было в магазине." },
          ],
          hint: "Про синтезатор говорят в самой последней реплике.",
          why:
            "Её уже подарили: some of my friends gave him a keyboard last year.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-podarke",
          about: "zapis-o-vybore-podarka",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "один альбом про животных", selectable: true, correct: true },
            { text: " · " },
            { text: "синтезатор дарили в прошлом году", selectable: true, correct: true },
            { text: " · " },
            { text: "альбомов было три", selectable: true },
            { text: " · " },
            { text: "подарок выбирали для сестры", selectable: true },
          ],
          hint: "Про животных сказано в первой реплике.",
          why:
            "Прозвучали первое и второе. Альбомов было два, а про сестру речи не " +
            "было вовсе.",
        },
        {
          id: "z5-chto-znachit-the-other-one-v-zapisi",
          about: "zapis-o-vybore-podarka",
          kind: "choice",
          prompt:
            "В записи звучит the other one. Про что это?",
          options: [
            { text: "Про синтезатор." },
            { text: "Про третий альбом." },
            { text: "Про второй из двух альбомов.", correct: true },
          ],
          hint: "Вспомни, сколько вещей лежало на столе.",
          why:
            "Про второй из двух альбомов. Оборот the other one и говорит о втором " +
            "из двух.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-obyavlenie-o-rasprodazhe",
      title: "Пишем объявление о распродаже",
      estimatedMinutes: 15,
      outcome: "проверять объявление: о каждой вещи сказано, какая она и сколько стоит",

      blocks: [
        {
          id: "zachem-proveryat-obyavlenie",
          kind: "explain",
          text: [
            "Ученик написал объявление: «We sell books and toys. Come to the school hall on Saturday.» — «Продаём книги и игрушки. Приходите в школьный зал в субботу.»",
            "Никто не пришёл: непонятно, какие книги, какие игрушки и сколько стоят.",
            "В объявлении пропускают не сами вещи, а то, какие они и сколько стоят.",
            "Проверить своё объявление можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-obyavlenii",
          kind: "table",
          caption: "Что должно быть в объявлении",
          zvuchat: [
            "Come to the school library on Friday at four!",
            "We sell two rulers and some rubbers.",
            "This ruler has stripes, but the other one is pale.",
            "All of the rubbers are 100 tenge.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["куда и когда прийти", "Come to the school library on Friday at four!"],
            ["что продают", "We sell two rulers and some rubbers."],
            ["чем вещи различаются", "This ruler has stripes, but the other one is pale."],
            ["сколько стоит", "All of the rubbers are 100 tenge."],
          ],
        },
        {
          id: "chem-derzhitsya-obyavlenie",
          kind: "explain",
          text: [
            "Первая строка зовёт: куда прийти и в какой день.",
            "Вторая называет вещи и их число: two rulers, three books.",
            "Третья различает вещи, и вот тут пригождается one.",
            "Четвёртая говорит про цену — числом или словом cheap.",
            "Строки связывают словами and, but и because: без них выйдет список.",
          ],
        },
        {
          id: "obrazec-obyavleniya",
          kind: "example",
          caption: "Объявление Айгуль",
          perevod: {
            "Come to the school library on Friday at four!":
              "Приходите в школьную библиотеку в пятницу в четыре!",
            "We sell two rulers and some rubbers.":
              "Продаём две линейки и несколько ластиков.",
            "This ruler has stripes and it is 200 tenge, but the other one is pale and 300 tenge.":
              "Эта линейка в полоску и стоит 200 тенге, а вторая светлая и стоит 300 тенге.",
            "All of the rubbers are 100 tenge because they are old.":
              "Все ластики по 100 тенге, потому что они старые.",
          },
          zvuchat: [
            "Come to the school library on Friday at four!",
            "We sell two rulers and some rubbers.",
            "This ruler has stripes and it is 200 tenge, but the other one is pale and 300 tenge.",
            "All of the rubbers are 100 tenge because they are old.",
          ],
          text:
            "Come to the school library on Friday at four!\nWe sell two rulers and some rubbers.\nThis ruler has stripes and it is 200 tenge, but the other one is pale and 300 tenge.\nAll of the rubbers are 100 tenge because they are old.",
          explain:
            "Слово ruler названо один раз, дальше стоит the other one. У каждой " +
            "вещи сказано и какая она, и сколько стоит: 200, 300 и 100 тенге.",
        },
        {
          id: "slovar-obyavleniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "ruler", translation: "линейка", example: "We sell two rulers and some rubbers.", hint: "/ˈruːlə/" },
            { term: "rubber", translation: "ластик", example: "All of the rubbers are 100 tenge.", hint: "/ˈrʌbə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-obyavleniyu",
          kind: "choice",
          prompt:
            "Объявление целиком: We sell books and toys. Come to the school hall on Saturday. Чего в нём не хватает?",
          options: [
            { text: "Благодарности читателю." },
            { text: "Не сказано, какие это вещи и сколько стоят.", correct: true },
            { text: "Имени того, кто продаёт." },
          ],
          hint: "Представь себя читателем: пойдёшь ли ты по такому объявлению?",
          why:
            "Не сказано, какие вещи и почём. Куда и когда прийти — сказано, а " +
            "вот какие это книги и сколько они стоят, читатель не узнает.",
        },
        {
          id: "z2-dopisat-razlichie",
          kind: "gap",
          prompt:
            "Линейки уже названы. Допиши слово, чтобы не повторять их во второй раз.",
          before: "This ruler has stripes, but the other ",
          after: " is pale.",
          answer: "one",
          hint: "Вместо названной вещи встаёт короткое слово.",
          why:
            "This ruler has stripes, but the other one is pale. Слово ruler во " +
            "второй раз не нужно.",
        },
        {
          id: "z3-otmetit-poleznye-stroki",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят читателю о вещах.",
          parts: [
            { text: "All of the rubbers are 100 tenge.", selectable: true, correct: true },
            { text: " · " },
            { text: "We like this sale.", selectable: true },
            { text: " · " },
            { text: "We sell two rulers.", selectable: true, correct: true },
            { text: " · " },
            { text: "We are happy.", selectable: true },
          ],
          hint: "Спроси у каждой строки: что читатель узнал из неё о вещах?",
          why:
            "Первая и третья. Строки We like this sale и We are happy говорят о " +
            "чувствах продавца: ни вещи, ни цены в них нет.",
        },
        {
          id: "z4-svyazat-stroki",
          kind: "short",
          prompt:
            "Ученик написал: This cap is cheap, it is old. Две мысли стоят рядом, а слова причины между ними нет. Запиши строку без ошибки.",
          answer: "This cap is cheap because it is old.",
          accept: [
            "This cap is cheap because it is old",
            "This cap is cheap because it is old.",
            "This cap is cheap, because it is old",
            "This cap is cheap, because it is old.",
          ],
          hint: "Одной запятой мало: нужно слово, которое назовёт причину.",
          why:
            "This cap is cheap because it is old. Запятая только разделяет, а " +
            "причину со следствием связывает слово because.",
        },
        {
          id: "z5-napisat-obyavlenie",
          kind: "essay",
          prompt:
            "Напиши объявление о школьной распродаже, четырьмя строками. Позови читателя, назови вещи и их число, различи их и скажи про цену.",
          minWords: 16,
          sample:
            "Come to the school library on Friday at four!\nWe sell two rulers and some rubbers.\nThis ruler has stripes and it is 200 tenge, but the other one is pale and 300 tenge.\nAll of the rubbers are 100 tenge because they are old.",
          checklist: [
            "первая строка зовёт: куда и когда прийти",
            "названы вещи и их число",
            "есть строка со словом one вместо повтора",
            "у каждой вещи сказано, сколько она стоит",
          ],
          hint:
            "Бери обороты, которые знаешь: two rulers, this one, the other one, all of the rubbers.",
          why:
            "Объявление работает, когда читатель понимает, что там продают, не " +
            "переспрашивая.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: назвать причину
      // выбора, отличить две записи по смыслу, произвести строку самому,
      // услышать разговор.

      // ---- итог 1 ----
      {
        id: "q-pochemu-this-a-ne-that",
        kind: "choice",
        outcome: "показывать на вещь: this cap, that shop",
        prompt:
          "Дана держит кепку в руках и говорит this cap. Почему не that cap?",
        options: [
          { text: "Потому что кепка у неё в руках, а не поодаль.", correct: true },
          { text: "Потому что кепка одна." },
          { text: "Потому что кепка кожаная." },
        ],
        hint: "Оба слова годятся одной вещи, и выбирают их не по числу.",
        why:
          "Потому что кепка у неё в руках. Число тут ни при чём: this и that оба " +
          "идут к одной вещи.",
      },
      {
        id: "q-napisat-o-dalnem-magazine",
        kind: "short",
        outcome: "показывать на вещь: this cap, that shop",
        prompt:
          "Магазин виден вдалеке, и он дорогой. Скажи это по-английски, начав со слова о дальней вещи.",
        answer: "That shop is expensive.",
        accept: ["That shop is expensive"],
        hint: "Вещь одна и она не рядом.",
        why:
          "That shop is expensive. Кепка, магазин или что угодно — выбор между " +
          "этими двумя словами делают по расстоянию, а не по вещи.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-this-shorts",
        kind: "short",
        outcome: "показывать на несколько вещей: these tights, those shorts",
        prompt:
          "Ученик написал: I like this shorts. Запиши строку без ошибки.",
        answer: "I like these shorts.",
        accept: [
          "I like these shorts",
          "I like those shorts.",
          "I like those shorts",
        ],
        hint: "Шорты в английском всегда несколько.",
        why:
          "I like these shorts. Годится и those, если шорты подальше, но this не " +
          "встанет никак.",
      },
      {
        id: "q-otlichit-these-i-those",
        kind: "choice",
        outcome: "показывать на несколько вещей: these tights, those shorts",
        prompt:
          "Записи these caps и those caps говорят о разном. Чем?",
        options: [
          { text: "Первая о дешёвых, вторая о дорогих." },
          { text: "Первая о кепках рядом, вторая о кепках подальше.", correct: true },
          { text: "Первая об одной кепке, вторая о нескольких." },
        ],
        hint: "Число в обеих записях одно и то же.",
        why:
          "Первая о кепках рядом, вторая о кепках подальше. Кепок и там, и там " +
          "несколько.",
      },

      // ---- итог 3 ----
      {
        id: "q-zachem-nuzhno-one",
        kind: "choice",
        outcome: "не повторять названное: the pale one",
        prompt:
          "Зачем в строке I take the pale one ставят слово one?",
        options: [
          { text: "Чтобы сказать, что вещь одна." },
          { text: "Чтобы не повторять уже названную вещь.", correct: true },
          { text: "Чтобы получилось вежливее." },
        ],
        hint: "Слово one тут не число, хотя пишется так же.",
        why:
          "Чтобы не повторять уже названную вещь. Числом one здесь не работает: " +
          "оно стоит вместо слова.",
      },
      {
        id: "q-zamenit-povtor",
        kind: "short",
        outcome: "не повторять названное: the pale one",
        prompt:
          "Строку I take the wool cap перепиши так, чтобы слово cap не повторялось. О кепках уже говорили.",
        answer: "I take the wool one.",
        accept: ["I take the wool one"],
        hint: "На место вещи встаёт короткое слово.",
        why:
          "I take the wool one. Слово wool остаётся, а вещь заменена коротким one.",
      },

      // ---- итог 4 ----
      {
        id: "q-skolko-veshchey-vsego",
        kind: "choice",
        outcome: "различать the other one и another",
        prompt:
          "По какому вопросу выбирают между the other one и another?",
        options: [
          { text: "Дорогая вещь или дешёвая." },
          { text: "Известна вещь собеседнику или нет." },
          { text: "Всего вещей две или больше.", correct: true },
        ],
        hint: "Оба оборота переводятся русским «другой».",
        why:
          "Всего вещей две или больше. The other one — второй из двух, another — " +
          "ещё один из многих.",
      },
      {
        id: "q-poprosit-vtoruyu-iz-dvuh",
        kind: "short",
        outcome: "различать the other one и another",
        prompt:
          "Блузок в магазине ровно две, и первая уже отложена. Попроси показать вторую, начав с Can I see.",
        answer: "Can I see the other one?",
        accept: [
          "Can I see the other one",
          "Can I see the other blouse?",
          "Can I see the other blouse",
        ],
        hint: "Вещей ровно две, и вторая известна вам обоим.",
        why:
          "Can I see the other one? Слово another сказало бы «ещё одну из " +
          "многих», а блузок всего две.",
      },
      {
        id: "q-ispravit-the-another",
        kind: "short",
        outcome: "различать the other one и another",
        prompt:
          "Ученик написал: Can I come the another day? Запиши вопрос без ошибки.",
        answer: "Can I come another day?",
        accept: ["Can I come another day"],
        hint: "Одно слово в строке лишнее.",
        why:
          "Can I come another day? Слово another уже содержит в себе «один», и the " +
          "перед ним не ставят.",
      },

      // ---- итог 5 ----
      {
        id: "q-kogda-nuzhno-of",
        kind: "choice",
        outcome: "говорить о названном через of: some of my friends, all of my money",
        prompt:
          "В записи some of my friends есть of, а в записи some friends его нет. Отчего это зависит?",
        options: [
          { text: "От того, стоит ли дальше my, the, these или those.", correct: true },
          { text: "От того, сколько друзей всего." },
          { text: "От того, знакомы ли друзья собеседнику." },
        ],
        hint: "Посмотри, что стоит сразу после of в первой записи.",
        why:
          "От того, стоит ли дальше my, the, these или those. Без них of не " +
          "нужно: some friends — про друзей вообще.",
      },
      {
        id: "q-napisat-o-chasti-knig",
        kind: "short",
        outcome: "говорить о названном через of: some of my friends, all of my money",
        prompt:
          "Часть его книг старые. Скажи это по-английски, начав с Some.",
        answer: "Some of his books are old.",
        accept: ["Some of his books are old"],
        hint: "Дальше идёт слово his, значит нужно короткое of.",
        why:
          "Some of his books are old. Без of вышло бы «some his books», а так не " +
          "говорят.",
      },
      {
        id: "q-vse-dengi",
        kind: "short",
        outcome: "говорить о названном через of: some of my friends, all of my money",
        prompt:
          "Он потратил все свои деньги. Скажи это по-английски, начав с He spent.",
        answer: "He spent all of his money.",
        accept: [
          "He spent all of his money",
          "He spent all his money.",
          "He spent all his money",
        ],
        hint: "Слово all работает так же, как some: дальше идёт his.",
        why:
          "He spent all of his money. Слово all называет всё целиком, а не " +
          "часть. Запись без of — He spent all his money — тоже верна, и в " +
          "речи она даже чаще; урок учит записи с of.",
      },

      // ---- итог 6 ----
      {
        id: "q-najti-cenu-v-obyavlenii",
        kind: "short",
        outcome: "находить в объявлении, что продают и почём",
        // Начало строки было дословно из объявления для чтения того же модуля —
        // семь слов подряд. Взята другая вещь, карточка того же модуля.
        prompt:
          "В объявлении строка: We have two caps. This one is 800 tenge, and the other one is 1200 tenge. Сколько стоит вторая кепка? Ответь числом.",
        answer: "1200",
        accept: ["1200 tenge", "тысяча двести"],
        hint: "Второй назван оборотом the other one.",
        why:
          "1200. Оборот the other one говорит о втором из двух, и цена стоит " +
          "рядом с ним.",
      },
      {
        id: "q-chto-znachit-some-of-the-books",
        kind: "choice",
        outcome: "находить в объявлении, что продают и почём",
        prompt:
          "В объявлении стоит: Some of the books are old. Что это значит?",
        options: [
          { text: "Все книги старые." },
          { text: "Старых книг там нет." },
          { text: "Старая только часть книг.", correct: true },
        ],
        hint: "Слово some называет не всё целиком.",
        why:
          "Старая только часть книг. Про все сказали бы all of the books.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-kakoy-albom",
        kind: "short",
        outcome: "слышать в разговоре, какую вещь взяли",
        zvuk:
          "Here are two rulers. This one has stripes. — I take the pale one, please.",
        prompt:
          "Послушай. Какую линейку взяли? Ответь одним словом по-английски.",
        answer: "pale",
        accept: ["Pale"],
        hint: "Взявший назвал линейку не той, что показали первой.",
        why:
          "Pale. Показали линейку в полоску, а взяли вторую — the pale one.",
      },
      {
        id: "q-uslyshat-skolko-veshchey",
        kind: "short",
        outcome: "слышать в разговоре, какую вещь взяли",
        zvuk:
          "Here are two caps. This one is leather. — And the other one? — The other one is wool.",
        prompt:
          "Послушай. Из чего сделана вторая кепка? Ответь одним словом по-английски.",
        answer: "wool",
        accept: ["Wool"],
        hint: "Про вторую кепку говорят в самой последней реплике.",
        why:
          "Wool. Первая кепка кожаная, а про вторую сказано the other one is " +
          "wool.",
      },

      // ---- итог 8 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-obyavleniyu",
        kind: "choice",
        outcome: "проверять объявление: о каждой вещи сказано, какая она и сколько стоит",
        prompt:
          "Объявление: We sell two rulers. Come to the hall on Sunday. This ruler has stripes, but the other one is pale. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что зовёт: куда и когда прийти." },
          { text: "Той, что говорит про цену.", correct: true },
          { text: "Той, что различает две вещи." },
        ],
        hint: "Пройди по объявлению строку за строкой и вычёркивай найденное.",
        why:
          "Той, что говорит про цену. Зовут в зал в воскресенье, продают две " +
          "линейки, различают их полосками и светлым цветом — а сколько они " +
          "стоят, нигде не сказано.",
      },
      {
        id: "q-dopisat-stroku-o-cene",
        kind: "short",
        outcome: "проверять объявление: о каждой вещи сказано, какая она и сколько стоит",
        prompt:
          "К объявлению допиши строку о цене: все линейки дешёвые. Начни с All.",
        answer: "All of the rulers are cheap.",
        accept: ["All of the rulers are cheap"],
        hint: "Линейки известны читателю, значит после of встанет the.",
        why:
          "All of the rulers are cheap. Слово all говорит, что дешёвые все до " +
          "одной.",
      },
      {
        id: "q-razlichit-dve-veshchi-v-obyavlenii",
        kind: "short",
        outcome: "проверять объявление: о каждой вещи сказано, какая она и сколько стоит",
        prompt:
          "В объявлении две кепки: кожаная и шерстяная. Напиши строку, которая их различает, начав с This cap.",
        answer: "This cap is leather, but the other one is wool.",
        accept: [
          "This cap is leather, but the other one is wool",
          "This cap is leather and the other one is wool.",
          "This cap is leather, and the other one is wool.",
        ],
        hint: "Слово cap во второй раз повторять не надо.",
        why:
          "This cap is leather, but the other one is wool. Кепок ровно две, и " +
          "потому the other one, а не another.",
      },
    ],
  },
};

export default module;
