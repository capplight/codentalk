import type { Module } from "@/lib/content/types";

/**
 * Модуль 21 курса «Английский · Elementary»: свой и сам.
 *
 * Программа: docs/programma-english-elementary.md, модуль 21 — «говорить о
 * принадлежности и о самостоятельном действии». Строка проверена и расширена
 * 24 августа 2026, до написания; разбор с цитатами — там же, под таблицей.
 *
 * ИМЁН ГЛАВНЫХ ВЕЩЕЙ В МОДУЛЕ ДВА, И ОБА НАСТОЯЩИЕ:
 *
 * - уроки 1–3 — «ПРИТЯЖАТЕЛЬНОЕ МЕСТОИМЕНИЕ» (`mine`, `yours`, `his`, `hers`,
 *   `ours`, `theirs`);
 * - уроки 4–5 — «ВОЗВРАТНОЕ МЕСТОИМЕНИЕ» (`myself`, `yourself`, `himself`,
 *   `herself`, `ourselves`, `themselves`).
 *
 * Так эти разряды зовут русские учебники, придумывать взамен нечего, и слово
 * «местоимение» курс уже вводил. Оба имени объясняются на месте, при первой
 * встрече, одной строкой с примером.
 *
 * ГЛАВНАЯ ТРУДНОСТЬ МОДУЛЯ НЕ ГРАММАТИЧЕСКАЯ, А ПЕРЕВОДНАЯ. По-русски «мой»
 * годится обоим случаям — «мой рюкзак» и «это мой», — а по-английски это два
 * разных слова: `my bag` и `It's mine`. Ученик, идущий от русского, скажет
 * «It's my», и это не выдуманная, а самая настоящая ошибка. Модуль строится
 * вокруг неё: сперва случай, потом таблица, и только потом правило.
 *
 * НАБОР ПОКАЗЫВАЕТСЯ ЦЕЛИКОМ, И ЭТО РЕШЕНИЕ. Программа обещала половину —
 * `mine` и `yours`, — а модуль даёт все шесть форм и таблицу по лицу в строке.
 * Основание двойное. Первое: три источника из четырёх дают разряд без
 * ограничения по лицам (руководство A2 Key, с. 52, перечень Pronouns:
 * «Personal (subject, object, possessive)»; там же Genitive: «Double genitive:
 * a friend of theirs»; словник A2 Key содержит все шесть). Второе: половина
 * набора хуже целого. Таблица с пустыми клетками у «её» и «их» — это не
 * осторожность, а брошенный на полпути ученик, и правило владельца о показе
 * форм столбиком требует обратного.
 *
 * ВЗЯТО ВЫШЕ ГРАФЫ ПО МЕРКЕ СЛОВНИКА, И ОБЪЯВЛЯЕТСЯ ЗДЕСЬ:
 *
 * - **`hers`, `ours`, `theirs`** — English Grammar Profile ставит их на B2 и C1
 *   («FORM: 'HERS' AS OBJECT», «FORM: 'OURS' AS SUBJECT» и прочие), тогда как
 *   `mine` у него A2 целиком («FORM: 'MINE'» — и подлежащим, и дополнением, и
 *   после `be`, и после предлогов), а `yours` A2 дополнением. Довод берётся
 *   не отсюда: графы English Grammar Profile говорят, в работах какого уровня
 *   форма встретилась, а руководство и словник говорят, что входит в
 *   требования экзамена. Мерка курса — вторая, и применена ко всем шести
 *   одинаково.
 *
 *   ОСТОРОЖНО, ЗДЕСЬ БЫЛО ЛИШНЕЕ УТВЕРЖДЕНИЕ. Первая редакция шапки писала,
 *   что `theirs` просто редкое слово и потому не попало в работы A2. Проверить
 *   это в `materials/` нечем: `ngsl-stats.csv` устроен по леммам и отдельных
 *   записей для `hers`, `ours`, `theirs`, `yours` не держит вовсе. Нашёл
 *   методист. Утверждение снято — довод без него крепче.
 * - **`by myself`** в значении «сам, без помощи» — B1, «FORM/USE: 'BY' +
 *   SINGULAR». А словник A2 Key даёт этот оборот собственной строкой:
 *   `myself (pron) • by myself`, и так же у `himself` и `herself`. Оборот
 *   назван самим словником, и без него вторая половина строки программы —
 *   «самостоятельное действие» — теряет смысл.
 * - **`ourselves`, `themselves`** — у English Grammar Profile все графы
 *   множественных возвратных стоят на B2, но Oxford 3000 помечает оба слова
 *   A2, а словник содержит оба. Взяты по тому же доводу, что и притяжательные:
 *   набор показывается целиком. В ЗАДАНИЯХ ИХ НЕТ — таблица показывает ряд, а
 *   спрашивается то, что источник подтверждает на A2.
 * - **`himself`, `herself` и глагол `hurt`** — графа A2 сама называет свой круг
 *   узким: «a limited range of singular reflexive pronouns ('myself',
 *   'yourself') with a limited range of verbs ('enjoy', 'buy')». Расширение
 *   круга лиц и глаголов — это по прямому слову источника шаг на B1: «an
 *   increasing range of singular reflexive pronouns with an increasing range of
 *   verbs». Шаг сделан нарочно и берётся по мерке словника (`himself (pron)`,
 *   `herself (pron)`, `hurt (v)`). Первая редакция шапки писала обратное — что
 *   урок держится «лиц я и ты», — а уроки давали `himself` и `herself` в
 *   таблице, примере и трёх заданиях. Нашёл методист.
 * - **`his` местоимением** (`It's his`) — у English Grammar Profile «FORM:
 *   'HIS'» стоит на C2. В словнике `his` помечен `(det & pron)`, и мерка берёт
 *   его оттуда.
 * - **Притяжательное подлежащим** — «No, his is black», «No, hers is purple» в
 *   примерах уроков 2 и 3. У источника подлежащее стоит на C2 («FORM: 'HERS'
 *   AS SUBJECT»). В ЗАДАНИЯХ его нет нигде, а в примерах оно есть, и это надо
 *   было объявить сразу: без такой строки урок 2 не показал бы, зачем форма
 *   вообще нужна. Нашёл методист.
 *
 * И ОДНА ОГОВОРКА ПРО МЕРКУ СЛОВНИКА В УРОКЕ 5. Подстрока `• by …` стоит в
 * словнике у трёх слов из четырёх: `myself (pron) • by myself`, `himself
 * (pron) • by himself`, `herself (pron) • by herself`. У `yourself (pron)`
 * подстроки нет — за ней сразу идёт «Z». Значит `by yourself` держится не
 * словником, а графой B1 English Grammar Profile, где оно названо прямо.
 * Проверено методистом построчно.
 *
 * ЗАДАНИЯ ДЕРЖАТСЯ МЕСТ, ПОДТВЕРЖДЁННЫХ НА A2. Притяжательное спрашивается
 * после `be` («It's mine»), дополнением («I loved yours») и после предлога.
 * Подлежащим («Ours is the only store…») не спрашивается нигде: там у
 * источника C1 и C2.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ:
 *
 * - возвратное для усиления («you decide yourself what to do») — B1, отдельная
 *   графа, и к нашему случаю не относится;
 * - `a friend of yours` — B1 («FORM: + 'OF YOURS'»), тогда как `a friend of
 *   mine` стоит на A2 отдельной графой и берётся. Урок 3 даёт только первое;
 * - `itself` — все его графы у источника B2, и в словник оно входит, но ряду
 *   таблицы ничего не добавляет: вещь редко делает что-то с собой.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать две карточки у самого модуля, из них новых для
 * ступени двадцать девять. Счёт поправлен 30 августа 2026 по разбору методиста:
 * стояло «тридцать», а карточек был тридцать один. Тридцать второй стала
 * карточка found — форму прошедшего от find модуль требовал во всём уроке
 * письма, а дать её забыл. Настоящий счёт даёт `npm run kontrol`.
 *
 * КАРТОЧКА found ВЗЯТА ВЫШЕ СТУПЕНИ, И ЭТО ОБЪЯВЛЯЕТСЯ. Oxford 3000 помечает
 * found как B2 — но там это другое слово, глагол «основать»; нам нужна форма
 * прошедшего от find, а её словники по ступеням не размечают вовсе. Курс даёт
 * неправильные глаголы десятком в модуле 3 и парой lose — lost в модуле 7;
 * find — found в тот десяток не попал, а урок письма этого модуля стоит на нём
 * целиком: таблица, образец, задание и сочинение. Карточка сделана по образцу
 * lost и даёт ровно форму, а не второе значение. Найдено методистом 30 августа
 * 2026; та же порода, что fell в модуле 7 и stole в модуле 19.
 *
 * ПОСЛЕДНИЙ УРОК — «СЛОВА ЧАСТИ», И ОН НЕ МОДУЛЯ, А ЧАСТИ ТРЕТЬЕЙ. Решение
 * владельца от 29 августа 2026, разбор — в модуле 7.
 *
 * Тема части третьей — еда, спорт и живое вокруг: тридцать записей из словника
 * A2 Key. Тема выбрана по самой части: её модули учат сравнивать, а сравнивают
 * чаще всего именно еду, занятия и зверей. Поэтому почти каждая строка примеров
 * здесь идёт со сравнением — оно и есть предмет части.
 *
 * ТРИ СЛОВА УРОКА ЧАСТИ ВЫШЕ СТУПЕНИ ПО OXFORD 3000: bee — B1, creature — B2,
 * wildlife — B2. Все три стоят в словнике A2 Key, то есть входят в требования
 * экзамена, и взяты по мерке ступени. Третье слово дописано 30 августа 2026 по
 * разбору методиста: оно было пропущено при первом счёте.
 *
 * `wind` В УРОК НЕ ВЗЯТО, ХОТЯ ЛЕЖИТ В ЗАПАСЕ: оба наших источника читают его
 * как глагол «наматывать», а не как «ветер». Такие слова решает владелец как
 * преподаватель — то же решение, что было принято в модуле 13.
 *
 * ТРАНСКРИПЦИЯ СОСТАВНЫХ ЗАПИСЕЙ СОБРАНА ИЗ ЧАСТЕЙ — как в модулях 7 и 13.
 *
 * `yours` и `hers` КАРТОЧЕК ЗДЕСЬ НЕ ПОЛУЧАЮТ, И ЭТО НАРОЧНО: их уже завёл
 * модуль 14 «Больше и меньше» в сравнении — «My flat is smaller than yours».
 * Вторая карточка сказала бы ученику, что слово новое. В таблице модуля обе
 * формы стоят наравне с прочими.
 *
 * И ПОПУТНАЯ НАХОДКА, О КОТОРОЙ СТОИТ ЗНАТЬ СЛЕДУЮЩЕМУ. Ученик встретил
 * `yours` в модуле 14 раньше, чем `mine`, — а у English Grammar Profile
 * сравнительные обороты с `mine` и `yours` стоят на B1. Порядок вышел
 * обратный удобному; модуль 21 его выправляет, давая весь набор разом.
 *
 * КАРТИНКИ. Первые две в курсе: `/kartinki/chey-ryukzak.svg` (урок 3) и
 * `/kartinki/stol-nahodok.svg` (урок 6). Обе нарисованы схемой, а не
 * фотографией, и красок темы не наследуют: внешний файл через `<img>` —
 * отдельный документ, переменные страницы до него не доходят. Поэтому цвета в
 * них выбраны так, чтобы читаться и на светлой странице, и на тёмной.
 *
 * ОСТОРОЖНО С ПОДПИСЬЮ `alt` У КАРТИНКИ УРОКА 6: она называет вещи, но не
 * говорит, чьи они. Иначе описание напечатало бы ученику верный ответ, и
 * задание решалось бы чтением разметки, а не текста.
 *
 * СНЯТО ИЗ-ЗА ТРАНСКРИПЦИИ: `drawer`, `envelope`, `selfie`, `penfriend`,
 * `underground`, `upset` — `ipa-en-uk` молчит, согласного ответа источники не
 * дают. Правило то же, что в модулях 19 и 20: не угадывать.
 */
const module: Module = {
  slug: "svoy-i-sam",
  title: "Свой и сам",

  outcomes: [
    "сказать, что вещь твоя: It's mine",
    "назвать хозяина любой вещи: his, hers, ours, theirs",
    "спросить и ответить, чья вещь: Whose is it? A friend of mine",
    "сказать о действии с самим собой: I hurt myself",
    "сказать, что справился без помощи: by myself",
    "находить в объявлении о находках, что нашли и где забрать",
    "слышать в разговоре, чья вещь",
    "проверять объявление о находке по четырём строкам: вещь и день, приметы, чьё оно, где забрать",
    "называть еду, занятия спортом и живое вокруг: main course, ice skating, wildlife",
  ],

  sources: [
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications. Перечень Pronouns: «Personal " +
        "(subject, object, possessive)» — разряд назван прямо, лица не " +
        "оговорены; отсюда весь набор уроков 1 и 2. Перечень Genitive: «Double " +
        "genitive: a friend of theirs» — форма theirs названа руководством " +
        "открытым текстом, и это же опора урока 3 для оборота a friend of mine. " +
        "ВОЗВРАТНЫХ РУКОВОДСТВО НЕ НАЗЫВАЕТ ВОВСЕ, и это проверено по обоим " +
        "разборам: в перечне Pronouns стоят Personal, Impersonal, " +
        "Demonstrative, Quantitative, Indefinite, Relative — строки Reflexive " +
        "нет. Это не запрет, а молчание: опора уроков 4 и 5 — English Grammar " +
        "Profile и словник. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1–3, ПРИТЯЖАТЕЛЬНЫЕ. PRONOUNS possessive, A2, «FORM: 'MINE'» — " +
        "«Can use the possessive pronoun 'mine', with singular and plural " +
        "reference, in subject and object positions, and complement positions " +
        "after 'be' and after prepositions», примеры «I bought a new jacket " +
        "because mine was very old», «I bought a pullover and trousers because " +
        "mine are too small for me». Там же A2, «FORM: 'YOURS' AS OBJECT» — " +
        "«…in object positions, and complement positions after 'be' and after " +
        "prepositions», примеры «It was my best present, although I also loved " +
        "yours», «My favourite meal is spaghetti with garlic bread. What's " +
        "yours?». Отсюда же оборот урока 3: A2, «FORM: + 'OF MINE'» — «Can use " +
        "the possessive pronoun 'mine' after 'of' in the phrases 'a friend of " +
        "mine' and 'friends of mine'», пример «A friend of mine gave me a " +
        "present for my birthday». " +
        "ВЗЯТО ВЫШЕ ГРАФЫ ПО МЕРКЕ СЛОВНИКА: `hers`, `ours`, `theirs` стоят у " +
        "источника на B2 и C1, а `yours` подлежащим — на B1. Довод — в шапке " +
        "модуля. " +
        "УРОК 4, ВОЗВРАТНЫЕ. PRONOUNS reflexive, A2, «FORM: SAME SUBJECT AND " +
        "OBJECT.» — «Can use a limited range of singular reflexive pronouns " +
        "('myself', 'yourself') with a limited range of verbs ('enjoy', 'buy') " +
        "to refer to actions where the subject and object of the verb are the " +
        "same», примеры «I enjoyed myself so much», «I bought myself a yellow " +
        "T-shirt with nothing on it». ГРАФА САМА НАЗЫВАЕТ СВОЙ КРУГ УЗКИМ " +
        "(«limited range»), А УРОК ЕГО РАСШИРЯЕТ: к enjoy и buy добавлен hurt, " +
        "к myself и yourself — himself и herself. По прямому слову источника " +
        "это шаг на B1 («an increasing range of singular reflexive pronouns " +
        "with an increasing range of verbs»), и он объявлен в шапке модуля " +
        "наравне с прочим, взятым по мерке словника. " +
        "О РУКОВОДСТВАХ см. отдельную опору ниже: возвратных не называет " +
        "руководство A2 Key, но называет руководство B1 Preliminary. " +
        "УРОК 5, БЕЗ ПОМОЩИ. Та же подкатегория, B1, «FORM/USE: 'BY' + " +
        "SINGULAR» — «Can use the singular reflexive pronouns 'myself', " +
        "'yourself', 'himself' and 'herself' with 'by' to mean alone, without " +
        "any help», примеры «I will ask my friends from the class and I will " +
        "study by myself», «You can do some exercise by yourself». Взято выше " +
        "графы по мерке словника, где запись читается `myself (pron) • by " +
        "myself`. " +
        "ЧЕГО НЕТ. Возвратное для усиления — B1, «USE: SINGULAR, FOR " +
        "EMPHASIS». `a friend of yours` — B1, «FORM: + 'OF YOURS'». " +
        "Множественные возвратные — B2 всеми графами; в таблице урока 4 они " +
        "показаны рядом, но ни одно задание их не спрашивает",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, B1 Preliminary handbook for teachers",
      section:
        "УРОКИ 4 И 5, ГДЕ ИСКАТЬ ВОЗВРАТНЫЕ. Руководство A2 Key их не называет " +
        "вовсе — в перечне Pronouns на с. 52 стоят Personal, Impersonal, " +
        "Demonstrative, Quantitative, Indefinite, Relative. А руководство " +
        "следующей ступени называет: перечень Pronouns, строка «Reflexive and " +
        "emphatic: myself, etc.». То есть ближайший источник, который знает " +
        "этот разряд, ставит его ступенью выше. Проверено методистом по обоим " +
        "разборам. Модуль берёт разряд по мерке словника A2 Key, где стоят все " +
        "шесть возвратных, и объявляет это в шапке",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем объявление стола находок» и УРОК ПИСЬМА «Пишем " +
        "объявление о находке». с. 66, шкала «Overall written production», " +
        "графа A2: «Can produce a series of simple phrases and sentences linked " +
        "with simple connectors like» — далее в источнике перечислены and, but " +
        "и because. Объявление вешают для читателей вообще, а не пишут " +
        "человеку, и потому опора здесь — производство текста, а не переписка. " +
        "ШКАЛА ВЫБРАНА НАРОЧНО: с. 81 разводит соседей прямо, Correspondence — " +
        "о переписке, «Notes, messages and forms» — о передаче сведений " +
        "человеку. Здесь читателя по имени нет, есть объявление на доске. " +
        "И ОСТОРОЖНО С СОСЕДНЕЙ СТРОКОЙ ТОЙ ЖЕ ШКАЛЫ: «Can produce simple " +
        "isolated phrases and sentences» — это графа A1, проверил; наша графа " +
        "требует связок",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Тридцать две карточки модуля взяты из словника ступени; новых для " +
        "ступени двадцать девять. " +
        "УРОК СЛОВ ЧАСТИ ТРЕТЬЕЙ БЕРЁТ ЕЩЁ ТРИДЦАТЬ ЗАПИСЕЙ, и все они тоже " +
        "стоят в словнике: ice cream, fast food, main course, mineral water, " +
        "barbecue, stomach ache, gas, table tennis, ice skating, swimming pool, " +
        "swimming costume, snowboard, surfboard, surf, get fit, tennis player, " +
        "football player, Olympic, rap, hip hop, digital camera, bee, beetle, " +
        "jellyfish, polar bear, creature, wildlife, extinct, desert, dead. " +
        "ТРИ СЛОВА ВЫШЕ СТУПЕНИ ПО OXFORD 3000, И ЭТО ОБЪЯВЛЯЕТСЯ: `bee` — B1, " +
        "`creature` — B2, `wildlife` — B2 (oxford-3000.txt, строка 2983). Все " +
        "три стоят в словнике A2 Key, то есть входят в требования экзамена, и " +
        "взяты по мерке ступени. " +
        "`gas` СТОИТ В СЛОВНИКЕ С ПОМЕТОЙ (Am Eng), И ЭТО РАЗБИРАЛОСЬ. Алфавитная " +
        "запись словника — «gas (n) (Am Eng) (Br Eng: petrol)», то есть о горючем; " +
        "бытовой газ тот же словник даёт в приложении 2 дважды, в перечнях " +
        "Appliances и House and Home. Карточка взята именно в бытовом значении и " +
        "так и переведена, а горючее курс зовёт `petrol` (модуль 7 и `petrol " +
        "station` в модуле 13). Вынесено владельцу вопросом. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `mine (pron)`, `ours (pron)`, " +
        "`theirs (pron)` — местоимения, а не определители, и уроки дают именно " +
        "их; `myself (pron) • by myself`, `himself (pron) • by himself`, " +
        "`herself (pron) • by herself` — оборот назван словником при самом " +
        "слове, и на этом стоит урок 5; `stuff (n)` — берётся разговорное " +
        "значение «вещи»; `rent (n & v)` — карточка берёт глагол, снимать " +
        "жильё. " +
        "ЧЕТЫРНАДЦАТЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000, И ЭТО ОБЪЯВЛЯЕТСЯ " +
        "НАРОЧНО: ours, theirs, toe, chain, stuff, rent, heating, shy, " +
        "frightened, photographer, hurry, horrible, indoors, outdoors — B1. Все " +
        "четырнадцать стоят в словнике A2 Key, то есть входят в требования " +
        "экзамена, к которому ведёт ступень. Мерка та же, что в модулях 18–20: " +
        "слово в словнике — слово ступени. " +
        "ИХ БОЛЬШЕ, ЧЕМ В ПРЕЖНИХ МОДУЛЯХ, И ЭТО НЕ СЛУЧАЙНОСТЬ: запас " +
        "ступени, ещё не взятый курсом, к двадцать первому модулю состоит " +
        "почти целиком из слов, которые Oxford помечает B1. Дальше доля будет " +
        "только расти, и это стоит знать заранее. " +
        "ПЯТИ СЛОВ OXFORD 3000 НЕ ЗНАЕТ ВОВСЕ: grandma, grandpa, grandson, " +
        "granddaughter, skateboard. Это не «выше ступени», а отсутствие " +
        "пометы: словник A2 Key их содержит, и мерка берёт их оттуда. " +
        "СНЯТО ПРИ ПОДБОРЕ: `drawer`, `envelope`, `selfie`, `penfriend`, " +
        "`underground`, `upset` — из-за транскрипции, см. шапку модуля",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "moy-i-eto-moyo",
      title: "Мой и это моё: my bag и mine",
      estimatedMinutes: 15,
      outcome: "сказать, что вещь твоя: It's mine",

      vozvrat: [{ iz: "etot-tot-i-drugoy", zadanie: "z2-dopisat-that" }],

      blocks: [
        {
          id: "dve-odinakovye-sumki",
          kind: "explain",
          text: [
            "В раздевалке две одинаковые сумки, и Данияр берёт не свою.",
            "Айгуль надо сказать: эта сумка моя.",
            "It's mine. — Она моя.",
            "Слово «моя» Айгуль уже знает — my.",
            "Но сказать It's my по-английски нельзя, и вот почему.",
            "По-русски «моя» годится и с вещью, и без неё: «моя сумка» и просто «моя».",
            "По-английски на эти два случая два разных слова: my и mine.",
          ],
        },
        {
          id: "pered-veshchyu-i-vmesto-veshchi",
          kind: "table",
          caption: "Перед вещью и вместо вещи",
          zvuchat: [
            "my bag",
            "It's mine.",
            "your bag",
            "It's yours.",
          ],
          head: ["Перед вещью", "Вместо вещи"],
          rows: [
            ["my bag", "It's mine."],
            ["your bag", "It's yours."],
          ],
        },
        {
          id: "chem-otlichayutsya-my-i-mine",
          kind: "explain",
          text: [
            "Слово my стоит ПЕРЕД вещью и без неё не работает: my bag.",
            "Слово mine стоит ВМЕСТО вещи, и вещь после него не нужна.",
            "По-русски и там, и там «моя», поэтому их легко перепутать.",
            "Спроси себя: названы ли после слова вещь или человек?",
            "Названы — нужно my: my bag, my friend.",
            "Не названы, потому что о них сказали раньше, — нужно mine.",
            "Местоимения, которые говорят о хозяине вещи, называют притяжательными.",
          ],
        },
        {
          id: "ne-its-my",
          kind: "note",
          tone: "mistake",
          text:
            "«It's my» — так не говорят.\n\nСлово my требует вещи после себя. " +
            "Без вещи ставят mine: It's mine.",
        },
        {
          id: "razgovor-v-razdevalke",
          kind: "example",
          caption: "Разговор в раздевалке",
          razgovor: true,
          zvuchat: [
            "Is this your bag?",
            "No, it isn't mine. My bag is black.",
            "Then it's mine! Sorry.",
          ],
          text:
            "Is this your bag?\nNo, it isn't mine. My bag is black.\nThen it's mine! Sorry.",
          perevod: {
            "Is this your bag?": "Это ваша сумка?",
            "No, it isn't mine. My bag is black.":
              "Нет, не моя. Моя сумка чёрная.",
            "Then it's mine! Sorry.": "Тогда она моя! Простите.",
          },
          explain:
            "В первой строке вещь названа — your bag. Во второй её уже назвали, " +
            "и вместо неё стоит mine. А следом идёт My bag is black, потому что " +
            "там вещь названа заново.",
        },
        {
          id: "slovar-razdevalki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "mine", translation: "мой, моя, моё", example: "No, it isn't mine.", hint: "/maɪn/" },
            { term: "stuff", translation: "вещи (разговорное слово)", example: "All my stuff is in this bag.", hint: "/stʌf/" },
            { term: "skateboard", translation: "скейтборд", example: "This is my skateboard.", hint: "/ˈskeɪtbɔːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-bez-veshchi",
          kind: "choice",
          prompt:
            "Сумку уже назвали, и Айгуль говорит, что сумка её. Как она скажет?",
          options: [
            { text: "It's my." },
            { text: "It's mine.", correct: true },
            { text: "It's mine bag." },
          ],
          hint: "После слова вещь не названа.",
          why:
            "It's mine. Запись It's my оборвана — после my ждут вещь; а в It's " +
            "mine bag слово mine, наоборот, вещи перед собой не терпит.",
        },
        {
          id: "z2-dopisat-my",
          kind: "gap",
          prompt: "Вещь названа сразу после слова. Допиши слово.",
          before: "This is ",
          after: " bag. It is black.",
          answer: "my",
          hint: "Дальше стоит слово bag.",
          why:
            "This is my bag. Слово mine сюда не встанет: после него вещь не " +
            "называют.",
        },
        {
          id: "z3-otmetit-gde-mine",
          kind: "hottext",
          prompt: "Отметь строки, где слово поставлено верно.",
          parts: [
            { text: "This is my skateboard.", selectable: true, correct: true },
            { text: " · " },
            { text: "This one is my.", selectable: true },
            { text: " · " },
            { text: "The black bag is mine.", selectable: true, correct: true },
            { text: " · " },
            { text: "Is this mine stuff?", selectable: true },
          ],
          hint: "Спроси у каждой строки: названа ли вещь после слова?",
          why:
            "Верны первая и третья. Во второй после my вещи нет, а в четвёртой " +
            "после mine вещь стоит — там нужно my.",
        },
        {
          id: "z4-sobrat-o-sumke",
          kind: "order",
          prompt: "Собери строку: эта сумка не моя. О сумке уже говорили.",
          items: ["isn't", "This bag", "mine."],
          answer: [1, 0, 2],
          hint: "Вещь названа в начале строки, а в конце её уже не повторяют.",
          why:
            "This bag isn't mine. Слово my в конце оборвало бы строку: после " +
            "него ждут вещь.",
        },
        {
          id: "z5-otvetit-chto-tvoyo",
          kind: "short",
          prompt:
            "Тебя спрашивают: Is this your skateboard? Ответь, что скейтборд твой, поставив слово вместо вещи. Начни с Yes,.",
          answer: "Yes, it's mine.",
          accept: ["Yes, it's mine", "Yes, it is mine.", "Yes, it is mine"],
          hint: "Вещь уже названа в вопросе, повторять её не надо.",
          why:
            "Yes, it's mine. Скейтборд назвали в вопросе, и вместо него встаёт " +
            "mine.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ego-eyo-nash-i-ih",
      title: "Его, её, наш и их: his, hers, ours, theirs",
      estimatedMinutes: 15,
      outcome: "назвать хозяина любой вещи: his, hers, ours, theirs",

      blocks: [
        {
          id: "hozyain-ne-tolko-ya",
          kind: "explain",
          text: [
            "Вещи в раздевалке не только твои и не только собеседника.",
            "Одна сумка Данияра, другая Айгуль, третья — всего класса.",
            "О первой говорят It's his, о второй It's hers, о третьей It's ours.",
            "У каждого лица своё слово, и ниже весь ряд по одному в строке.",
          ],
        },
        {
          id: "ves-ryad-po-licam",
          kind: "table",
          caption: "Весь ряд по лицам",
          zvuchat: [
            "It's mine.",
            "It's yours.",
            "It's his.",
            "It's hers.",
            "It's ours.",
            "It's theirs.",
          ],
          head: ["Перед вещью", "Вместо вещи"],
          rows: [
            ["my bag", "It's mine."],
            ["your bag", "It's yours."],
            ["his bag", "It's his."],
            ["her bag", "It's hers."],
            ["our bag", "It's ours."],
            ["their bag", "It's theirs."],
          ],
        },
        {
          id: "chto-vidno-v-tablice",
          kind: "explain",
          text: [
            "У пяти лиц слово меняется: my — mine, your — yours, her — hers, our — ours, their — theirs.",
            "У одного не меняется вовсе: his bag и It's his пишутся одинаково.",
            "Формы ours и theirs говорят о нескольких хозяевах сразу.",
            "Вместо имени работает то же слово: Aigul's bag — It's hers.",
          ],
        },
        {
          id: "ne-its-her",
          kind: "note",
          tone: "mistake",
          text:
            "«It's her» — так не говорят.\n\nБез вещи ставят hers: It's hers. " +
            "Слово her требует вещи после себя, как и my.",
        },
        {
          id: "razgovor-o-chuzhih-veshchah",
          kind: "example",
          caption: "Разговор о чужих вещах",
          razgovor: true,
          zvuchat: [
            "Is this Daniyar's uniform?",
            "No, his is black. This one is hers.",
            "And the big bag near the door?",
            "That one is ours. All our stuff is in it.",
          ],
          text:
            "Is this Daniyar's uniform?\nNo, his is black. This one is hers.\nAnd the big bag near the door?\nThat one is ours. All our stuff is in it.",
          perevod: {
            "Is this Daniyar's uniform?": "Это форма Данияра?",
            "No, his is black. This one is hers.":
              "Нет, его чёрная. Эта её.",
            "And the big bag near the door?": "А большая сумка у двери?",
            "That one is ours. All our stuff is in it.":
              "Та наша. В ней все наши вещи.",
          },
          explain:
            "Костюм назвали в первой строке, и дальше вещь не повторяют: his, " +
            "hers, ours. В последней строке стоит our stuff — там вещь названа " +
            "заново, и потому our, а не ours.",
        },
        {
          id: "primer-o-syomnoy-kvartire",
          kind: "example",
          caption: "Про съёмную квартиру",
          zvuchat: [
            "My grandpa rents this flat, and the heating isn't ours.",
          ],
          text: "My grandpa rents this flat, and the heating isn't ours.",
          perevod: {
            "My grandpa rents this flat, and the heating isn't ours.":
              "Мой дед снимает эту квартиру, и отопление не наше.",
          },
          explain:
            "Квартира снята, и потому отопление чужое. В конце строки стоит " +
            "ours, а не our: вещь названа раньше и второй раз не звучит.",
        },
        {
          id: "slovar-chuzhih-veshchey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "ours", translation: "наш, наша, наше", example: "That one is ours.", hint: "/ˈaʊəz/" },
            { term: "chain", translation: "цепочка", example: "The blue chain is theirs.", hint: "/tʃeɪn/" },
            { term: "theirs", translation: "их", example: "The red bags are theirs.", hint: "/ðeəz/" },
            { term: "grandma", translation: "бабушка", example: "This chain is my grandma's.", hint: "/ˈgrændmɑː/" },
            { term: "grandpa", translation: "дедушка", example: "My grandpa rents this flat.", hint: "/ˈgrændpɑː/" },
            { term: "rent", translation: "снимать жильё", example: "My grandpa rents this flat.", hint: "/rent/" },
            { term: "heating", translation: "отопление", example: "The heating isn't ours.", hint: "/ˈhiːtɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-hers",
          kind: "gap",
          prompt: "Про форму Айгуль уже сказали. Допиши слово.",
          before: "The black uniform is ",
          after: ".",
          answer: "hers",
          hint: "После слова вещь не называют.",
          why:
            "The black uniform is hers. Слово her сюда не встанет: после него " +
            "ждут вещь.",
        },
        {
          id: "z2-vybrat-o-klasse",
          kind: "choice",
          prompt:
            "Сумка принадлежит всему классу, и ты в этом классе. Как сказать?",
          options: [
            { text: "It's theirs." },
            { text: "It's ours.", correct: true },
            { text: "It's our." },
          ],
          hint: "Ты тоже один из хозяев.",
          why:
            "It's ours. Запись It's theirs сказала бы о чужом классе, а It's " +
            "our оборвана: после our ждут вещь.",
        },
        {
          id: "z3-otmetit-vernye-o-hozyaine",
          kind: "hottext",
          prompt: "Отметь строки, где слово поставлено верно.",
          parts: [
            { text: "The blue chain is theirs.", selectable: true, correct: true },
            { text: " · " },
            { text: "This flat is our.", selectable: true },
            { text: " · " },
            { text: "The heating isn't ours.", selectable: true, correct: true },
            { text: " · " },
            { text: "That uniform is his.", selectable: true, correct: true },
          ],
          hint: "У одного лица слово перед вещью и вместо вещи пишется одинаково.",
          why:
            "Верны первая, третья и четвёртая. Во второй после our вещи нет — " +
            "там нужно ours. А his одинаково годится обоим случаям.",
        },
        {
          id: "z4-sobrat-o-babushke",
          kind: "order",
          prompt: "Собери строку: эта цепочка бабушкина. Вещь названа в начале.",
          items: ["my grandma's.", "This chain", "is"],
          answer: [1, 2, 0],
          hint: "Начни с вещи, а хозяина назови в конце.",
          why:
            "This chain is my grandma's. С именем хозяина работает та же " +
            "запись, что с местоимением: вещь после него не называют.",
        },
        {
          id: "z5-napisat-ob-otoplenii",
          kind: "short",
          prompt:
            "Дедушка снимает квартиру, и отопление не его. Скажи это по-английски, начав с The heating.",
          answer: "The heating isn't his.",
          accept: [
            "The heating isn't his",
            "The heating is not his.",
            "The heating is not his",
          ],
          hint: "Вещь названа в начале строки, значит в конце её не повторяют.",
          why:
            "The heating isn't his. У этого лица слово не меняется: и his flat, " +
            "и It's his.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chey-eto",
      title: "Чьё это: Whose is it?",
      estimatedMinutes: 14,
      outcome: "спросить и ответить, чья вещь: Whose is it? A friend of mine",

      vozvrat: [{ iz: "kto-to-i-chto-to", zadanie: "z1-dopisat-anyone" }],

      blocks: [
        {
          id: "veshch-lezhit-a-hozyaina-net",
          kind: "explain",
          text: [
            "На парте лежит рюкзак, и никто не знает, чей он.",
            "Спросить надо коротко, не называя вещи дважды.",
            "Для такого вопроса есть слово whose — курс давал его в модуле «Уже договорились».",
          ],
        },
        {
          id: "risunok-dva-ryukzaka",
          kind: "image",
          src: "/kartinki/chey-ryukzak.svg",
          alt:
            "Два рюкзака рядом. Слева синий, под ним подпись Daniyar. Справа сиреневый, под ним подпись Aigul. Между ними знак вопроса и надпись Whose is it?",
          caption: "Чей это рюкзак?",
        },
        {
          id: "vopros-i-otvet-o-hozyaine",
          kind: "table",
          caption: "Вопрос и ответ",
          zvuchat: [
            "Whose is this backpack?",
            "It's mine.",
            "Whose backpack is this?",
            "It's Aigul's.",
          ],
          head: ["Вопрос", "Ответ"],
          rows: [
            ["Whose is this backpack?", "It's mine."],
            ["Whose backpack is this?", "It's Aigul's."],
          ],
        },
        {
          id: "kak-ustroen-vopros-o-hozyaine",
          kind: "explain",
          text: [
            "Слово whose спрашивает о хозяине: чей, чья, чьё.",
            "Вещь при нём можно назвать сразу: Whose backpack is this?",
            "А можно не называть: Whose is this?",
            "Отвечают тем же словом вместо вещи: It's mine. It's hers.",
            "С именем хозяина к имени добавляют 's: It's Aigul's.",
          ],
        },
        {
          id: "drug-moy-a-ne-moy-drug",
          kind: "explain",
          text: [
            "Есть оборот, который по-русски звучит наоборот.",
            "A friend of mine — «один мой друг», а дословно «друг из моих друзей».",
            "Так говорят, когда друг для собеседника новый и по имени не назван.",
            "Во множественном числе так же: some friends of mine.",
          ],
        },
        {
          id: "ne-whose-is-his",
          kind: "note",
          tone: "mistake",
          text:
            "«Whose this backpack?» — так не спрашивают.\n\nПосле whose нужна " +
            "связка is: Whose is this backpack?",
        },
        {
          id: "razgovor-o-naydennom-ryukzake",
          kind: "example",
          caption: "Разговор о найденном рюкзаке",
          razgovor: true,
          zvuchat: [
            "Whose is this backpack?",
            "It isn't mine. Maybe it's Aigul's.",
            "No, hers is purple. This one is a friend of mine.",
          ],
          text:
            "Whose is this backpack?\nIt isn't mine. Maybe it's Aigul's.\nNo, hers is purple. This one is a friend of mine.",
          perevod: {
            "Whose is this backpack?": "Чей это рюкзак?",
            "It isn't mine. Maybe it's Aigul's.":
              "Не мой. Может быть, Айгуль.",
            "No, hers is purple. This one is a friend of mine.":
              "Нет, у неё фиолетовый. Этот — моего друга.",
          },
          explain:
            "Вещь названа один раз, в вопросе, и дальше не повторяется: mine, " +
            "Aigul's, hers. В последней строке стоит a friend of mine — друг по " +
            "имени не назван, и собеседник его не знает.",
        },
        {
          id: "primer-veshchi-vnukov",
          kind: "example",
          caption: "Вещи внуков",
          zvuchat: [
            "The skateboard is her grandson's.",
            "The chain is her granddaughter's.",
          ],
          text: "The skateboard is her grandson's.\nThe chain is her granddaughter's.",
          perevod: {
            "The skateboard is her grandson's.": "Скейтборд её внука.",
            "The chain is her granddaughter's.": "Цепочка её внучки.",
          },
          explain:
            "С именем хозяина работает та же запись, что с местоимением: к " +
            "хозяину добавляют 's, а вещь после него не называют.",
        },
        {
          id: "slovar-nahodki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "grandson", translation: "внук", example: "The skateboard is her grandson's.", hint: "/ˈgrændsʌn/" },
            { term: "granddaughter", translation: "внучка", example: "This chain is her granddaughter's.", hint: "/ˈgrændɔːtə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-whose",
          kind: "gap",
          prompt: "Хозяин цепочки неизвестен. Допиши вопросительное слово.",
          before: "",
          after: " is this chain?",
          answer: "Whose",
          hint: "Спрашивают не о вещи, а о хозяине.",
          why:
            "Whose is this chain? Слово who спросило бы о человеке вообще, а не " +
            "о том, чья вещь.",
        },
        {
          id: "z2-vybrat-otvet-o-vnuke",
          kind: "choice",
          prompt:
            "Скейтборд принадлежит её внуку. Как ответить на вопрос Whose is this skateboard?",
          options: [
            { text: "It's her grandson." },
            { text: "It's her grandson skateboard." },
            { text: "It's her grandson's.", correct: true },
          ],
          hint: "К имени хозяина добавляют две буквы.",
          why:
            "It's her grandson's. Без 's выходит «это её внук», а сам скейтборд " +
            "повторять не надо.",
        },
        {
          id: "z3-otmetit-vopros-bez-povtora",
          kind: "hottext",
          prompt: "Отметь вопросы, заданные верно.",
          parts: [
            { text: "Whose is this uniform?", selectable: true, correct: true },
            { text: " · " },
            { text: "Whose this uniform?", selectable: true },
            { text: " · " },
            { text: "Whose uniform is this?", selectable: true, correct: true },
            { text: " · " },
            { text: "Whose is this?", selectable: true, correct: true },
          ],
          hint: "В каждом вопросе должна стоять связка is.",
          why:
            "Верны первый, третий и четвёртый. Во втором пропала связка is, а " +
            "без неё вопроса не выходит.",
        },
        {
          id: "z4-sobrat-o-druge",
          kind: "order",
          prompt: "Собери строку: это один мой друг. Друга по имени не называют.",
          items: ["of mine.", "is", "This one", "a friend"],
          answer: [2, 1, 3, 0],
          hint: "Оборот кончается словом вместо вещи, а не словом my.",
          why:
            "This one is a friend of mine. Запись a friend of my не годится: " +
            "после my ждут вещь.",
        },
        {
          id: "z5-sprosit-o-veshchi",
          kind: "short",
          prompt:
            "На столе лежит чужой рюкзак. Спроси по-английски, чей он.",
          answer: "Whose backpack is this?",
          accept: [
            "Whose backpack is this",
            "Whose backpack is it?",
            "Whose backpack is it",
            "Whose is this backpack?",
            "Whose is this backpack",
          ],
          hint: "Вещь можно назвать сразу после первого слова, а можно в конце.",
          why:
            "Whose backpack is this? Годится и Whose is this backpack — оба " +
            "порядка верны, вещь просто встаёт в другое место.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sam-sebya",
      title: "Сам себя: I hurt myself",
      estimatedMinutes: 15,
      outcome: "сказать о действии с самим собой: I hurt myself",

      blocks: [
        {
          id: "deystvie-vernulos-k-tomu-zhe",
          kind: "explain",
          text: [
            "Данияр упал со скейтборда и ушиб палец.",
            "I hurt myself. — Я ушибся.",
            "Палец этот его собственный, и потому в строке стоит myself.",
            "По-русски это «себя», и слово одно на все лица.",
            "По-английски у каждого лица своё слово, и ниже весь ряд.",
          ],
        },
        {
          id: "ryad-sebya",
          kind: "table",
          caption: "Кто действует и на кого",
          zvuchat: [
            "myself",
            "yourself",
            "himself",
            "herself",
            "ourselves",
            "themselves",
          ],
          head: ["Кто", "Себя"],
          rows: [
            ["I", "myself"],
            ["you", "yourself"],
            ["he", "himself"],
            ["she", "herself"],
            ["we", "ourselves"],
            ["they", "themselves"],
          ],
        },
        {
          id: "kak-ustroeno-sebya",
          kind: "explain",
          text: [
            "Такое слово ставят, когда действующий и тот, на кого действуют, — одно лицо.",
            "I hurt myself — ушиб себя, а не кого-то другого.",
            "У четырёх лиц слово кончается на -self, у двух на -selves.",
            "Местоимения, которые возвращают действие к самому действующему, называют возвратными.",
            "Чаще всего они идут с тремя глаголами: enjoy, buy и hurt.",
          ],
        },
        {
          id: "razlichie-hurt-me-i-myself",
          kind: "table",
          caption: "Себя и другого",
          zvuchat: [
            "I hurt myself.",
            "He hurt me.",
            "She enjoyed herself.",
            "She enjoyed the film.",
          ],
          head: ["О себе", "О другом"],
          rows: [
            ["I hurt myself.", "He hurt me."],
            ["She enjoyed herself.", "She enjoyed the film."],
          ],
        },
        {
          id: "ne-i-hurt-me",
          kind: "note",
          tone: "mistake",
          text:
            "«I hurt me» — так не говорят.\n\nЕсли действующий и тот, на кого " +
            "действуют, одно лицо, ставят myself: I hurt myself.",
        },
        {
          id: "razgovor-posle-padeniya",
          kind: "example",
          caption: "Разговор после падения",
          razgovor: true,
          zvuchat: [
            "What happened? Did you hurt yourself?",
            "Yes, I hurt myself. My finger, my toe and my stomach.",
            "And Daniyar? Did he enjoy himself?",
            "He enjoyed himself, but now his neck hurts too.",
          ],
          text:
            "What happened? Did you hurt yourself?\nYes, I hurt myself. My finger, my toe and my stomach.\nAnd Daniyar? Did he enjoy himself?\nHe enjoyed himself, but now his neck hurts too.",
          perevod: {
            "What happened? Did you hurt yourself?":
              "Что случилось? Вы ушиблись?",
            "Yes, I hurt myself. My finger, my toe and my stomach.":
              "Да, ушибся. Палец на руке, палец на ноге и живот.",
            "And Daniyar? Did he enjoy himself?":
              "А Данияр? Ему понравилось?",
            "He enjoyed himself, but now his neck hurts too.":
              "Ему понравилось, но теперь у него ещё и шея болит.",
          },
          explain:
            "В каждой строке действующий и тот, на кого действуют, — одно лицо. " +
            "Слово подобрано под него: yourself к you, myself к I, himself к he. " +
            "В последней строке стоит his neck. Там вещь названа, и потому his, " +
            "а не himself.",
        },
        {
          id: "slovar-tela",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "enjoy", translation: "радоваться, получать удовольствие", example: "Did he enjoy himself?", hint: "/enˈdʒɔɪ/" },
            { term: "myself", translation: "себя (о себе)", example: "Yes, I hurt myself.", hint: "/maɪˈself/" },
            { term: "yourself", translation: "себя (о тебе)", example: "Did you hurt yourself?", hint: "/jɔːˈself/" },
            { term: "himself", translation: "себя (о нём)", example: "He enjoyed himself.", hint: "/hɪmˈself/" },
            { term: "herself", translation: "себя (о ней)", example: "She enjoyed herself.", hint: "/hɜːˈself/" },
            { term: "ourselves", translation: "себя (о нас)", example: "We enjoyed ourselves.", hint: "/aʊəˈselvz/" },
            { term: "themselves", translation: "себя (о них)", example: "They enjoyed themselves.", hint: "/ðemˈselvz/" },
            { term: "finger", translation: "палец на руке", example: "My finger, my toe and my stomach.", hint: "/ˈfɪŋgə/" },
            { term: "toe", translation: "палец на ноге", example: "My finger, my toe and my stomach.", hint: "/təʊ/" },
            { term: "neck", translation: "шея", example: "Now his neck hurts too.", hint: "/nek/" },
            { term: "stomach", translation: "живот", example: "My finger, my toe and my stomach.", hint: "/ˈstʌmək/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-myself",
          kind: "gap",
          prompt: "Речь о себе: пострадал не кто-то другой. Допиши слово.",
          before: "I hurt ",
          after: " yesterday.",
          answer: "myself",
          hint: "Действующий и тот, на кого действуют, — одно лицо.",
          why:
            "I hurt myself yesterday. Запись I hurt me не годится: у этого лица " +
            "своё слово.",
        },
        {
          id: "z2-vybrat-o-nem",
          kind: "choice",
          prompt: "Данияру на празднике было хорошо. Как сказать?",
          options: [
            { text: "He enjoyed himself.", correct: true },
            { text: "He enjoyed him." },
            { text: "He enjoyed." },
          ],
          hint: "Хорошо было ему самому, а не кому-то другому.",
          why:
            "He enjoyed himself. Запись He enjoyed him сказала бы о другом " +
            "человеке, а He enjoyed оборвана: после enjoy всегда говорят, чем " +
            "или кем.",
        },
        {
          id: "z3-otmetit-o-sebe",
          kind: "hottext",
          prompt: "Отметь строки, где действие возвращается к самому действующему.",
          parts: [
            { text: "She enjoyed herself.", selectable: true, correct: true },
            { text: " · " },
            { text: "She enjoyed the film.", selectable: true },
            { text: " · " },
            { text: "I bought myself a chain.", selectable: true, correct: true },
            { text: " · " },
            { text: "He hurt me.", selectable: true },
          ],
          hint: "Спроси у каждой строки: действующий и тот, на кого действуют, — одно лицо?",
          why:
            "Первая и третья. Во второй хорошо было ей от фильма, а в четвёртой " +
            "ушибли не его самого.",
        },
        {
          id: "z4-sobrat-o-pokupke",
          kind: "order",
          prompt: "Собери строку: я купил себе скейтборд.",
          items: ["a skateboard.", "bought", "I", "myself"],
          answer: [2, 1, 3, 0],
          hint: "Слово о себе стоит сразу после действия, а вещь — в конце.",
          why:
            "I bought myself a skateboard. Слово о себе идёт перед вещью, а не " +
            "после неё.",
        },
        {
          id: "z5-napisat-o-nej",
          kind: "short",
          prompt:
            "Айгуль ушибла себя, а не кого-то. Скажи это по-английски, начав с She.",
          answer: "She hurt herself.",
          accept: ["She hurt herself"],
          hint: "У этого лица слово кончается на -self.",
          why:
            "She hurt herself. Запись She hurt her сказала бы о другой женщине.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sam-bez-pomoshchi",
      title: "Сам, без помощи: by myself",
      estimatedMinutes: 14,
      outcome: "сказать, что справился без помощи: by myself",

      blocks: [
        {
          id: "sdelal-bez-chuzhoy-pomoshchi",
          kind: "explain",
          text: [
            "Айгуль дошла до музея, и никто ей не помогал.",
            "По-русски это «сама», и слово то же, что в «ушибла себя».",
            "По-английски слово то же, но перед ним встаёт короткое by.",
          ],
        },
        {
          id: "sebya-i-bez-pomoshchi",
          kind: "table",
          caption: "Себя и без помощи",
          zvuchat: [
            "I hurt myself.",
            "I went there by myself.",
            "She enjoyed herself.",
            "She lives here by herself.",
          ],
          head: ["Действие на себя", "Без чужой помощи"],
          rows: [
            ["I hurt myself.", "I went there by myself."],
            ["She enjoyed herself.", "She lives here by herself."],
          ],
        },
        {
          id: "chto-menyaet-by",
          kind: "explain",
          text: [
            "Без by слово говорит, на кого пошло действие: hurt myself — ушиб себя.",
            "С by оно говорит, что рядом никого не было: by myself — один, без помощи.",
            "Само слово при этом не меняется: myself, yourself, himself, herself.",
            "Ставят такой оборот обычно в конце строки.",
          ],
        },
        {
          id: "ne-by-my",
          kind: "note",
          tone: "mistake",
          text:
            "«I did it by my» — так не говорят.\n\nПосле by стоит слово на " +
            "-self: by myself.",
        },
        {
          id: "razgovor-o-poezdke-odnoy",
          kind: "example",
          caption: "Разговор о поездке",
          razgovor: true,
          zvuchat: [
            "Did your grandma go with you?",
            "No, I went by myself. I wasn't frightened.",
            "And the photographer? Did he work by himself?",
            "Yes, and he did not hurry at all.",
          ],
          text:
            "Did your grandma go with you?\nNo, I went by myself. I wasn't frightened.\nAnd the photographer? Did he work by himself?\nYes, and he did not hurry at all.",
          perevod: {
            "Did your grandma go with you?": "Бабушка поехала с вами?",
            "No, I went by myself. I wasn't frightened.":
              "Нет, я поехал сам. Мне не было страшно.",
            "And the photographer? Did he work by himself?":
              "А фотограф? Он работал один?",
            "Yes, and he did not hurry at all.":
              "Да, и совсем не торопился.",
          },
          explain:
            "Оборот by myself говорит, что бабушка не поехала и помощи не было. " +
            "К третьему лицу берётся своё слово: by himself. Ушибов и падений " +
            "здесь нет вовсе — by меняет смысл целиком.",
        },
        {
          id: "slovar-samostoyatelnosti",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "shy", translation: "застенчивый", example: "My grandson is shy, but he goes to school by himself.", hint: "/ʃaɪ/" },
            { term: "frightened", translation: "испуганный", example: "I wasn't frightened.", hint: "/ˈfraɪtnd/" },
            { term: "photographer", translation: "фотограф", example: "Did the photographer work by himself?", hint: "/fəˈtɒgrəfə/" },
            { term: "hurry", translation: "спешить", example: "He did not hurry at all.", hint: "/ˈhʌri/" },
            { term: "indoors", translation: "в помещении", example: "I stayed indoors by myself.", hint: "/ɪnˈdɔːz/" },
            { term: "outdoors", translation: "на улице", example: "She works outdoors by herself.", hint: "/aʊtˈdɔːz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-by",
          kind: "gap",
          prompt: "Никто ей не помогал. Допиши короткое слово.",
          before: "She went to the museum ",
          after: " herself.",
          answer: "by",
          hint: "Без этого слова вышло бы, что она сходила сама на себя.",
          why:
            "She went to the museum by herself. Слово by и говорит, что помощи " +
            "не было.",
        },
        {
          id: "z2-vybrat-smysl",
          kind: "choice",
          prompt:
            "Строка: Daniyar cooked dinner by himself. Что она значит?",
          options: [
            { text: "Он приготовил ужин для себя." },
            { text: "Он приготовил ужин без чужой помощи.", correct: true },
            { text: "Он обжёгся, когда готовил." },
          ],
          hint: "Смотри на короткое слово перед himself.",
          why:
            "Без чужой помощи. Про ужин для себя сказали бы cooked himself " +
            "dinner, и это уже другая строка.",
        },
        {
          id: "z3-otmetit-bez-pomoshchi",
          kind: "hottext",
          prompt: "Отметь строки, где сказано, что помощи не было.",
          parts: [
            { text: "He goes to school by himself.", selectable: true, correct: true },
            { text: " · " },
            { text: "He hurt himself at school.", selectable: true },
            { text: " · " },
            { text: "I painted the room by myself.", selectable: true, correct: true },
            { text: " · " },
            { text: "I bought myself a uniform.", selectable: true },
          ],
          hint: "Ищи короткое слово перед словом на -self.",
          why:
            "Первая и третья: в них стоит by. Во второй ушиб, в четвёртой " +
            "покупка — там действие идёт на самого себя.",
        },
        {
          id: "z4-sobrat-o-vnuke",
          kind: "order",
          prompt: "Собери строку: мой внук ходит в школу сам.",
          items: ["by himself.", "goes to school", "My grandson"],
          answer: [2, 1, 0],
          hint: "Оборот о самостоятельности ставят в конец.",
          why:
            "My grandson goes to school by himself. Оборот стоит последним, " +
            "после места.",
        },
        {
          id: "z5-napisat-o-sebe-odnom",
          kind: "short",
          prompt:
            "Скажи по-английски, что живёшь здесь один, оборотом с коротким by. Начни с I live here.",
          answer: "I live here by myself.",
          accept: ["I live here by myself"],
          hint: "После места встаёт оборот с коротким by.",
          why:
            "I live here by myself. Без by вышло бы, что ты живёшь на самого " +
            "себя, а это ничего не значит.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-stol-nahodok",
      title: "Читаем объявление стола находок",
      estimatedMinutes: 13,
      outcome: "находить в объявлении о находках, что нашли и где забрать",

      blocks: [
        {
          id: "zachem-chitat-o-nahodkah",
          kind: "explain",
          text: [
            "В школе есть стол находок: туда кладут забытые вещи.",
            "Над столом висит объявление, и в нём ищут три вещи.",
            "Что нашли, где это лежит и когда можно забрать.",
            "Ниже объявление, и вопросы будут о нём.",
          ],
        },
        {
          id: "risunok-stol-nahodok",
          kind: "image",
          src: "/kartinki/stol-nahodok.svg",
          alt:
            "Полка стола находок. На ней четыре вещи, и у каждой лежит бумажка с номером от одного до четырёх.",
          caption: "Что лежит на столе находок",
        },
        {
          id: "obyavlenie-o-nahodkah",
          kind: "text",
          title: "LOST PROPERTY",
          genre: "notice",
          body: [
            "This is our lost property table.",
            "These things are not ours. Somebody lost them last week.",
            "Number 1 is a long scarf. A boy from class 7B lost it, and it is his.",
            "Number 2 is a glove. Maybe we have the other one too.",
            "Number 3 is an umbrella. It isn't new, but it works!",
            "Number 4 is a chain. It is a horrible day for the owner!",
            "The table is near the door. Come indoors and take yours.",
          ],
          glossary: [
            { term: "lost property", translation: "стол находок" },
            { term: "owner", translation: "хозяин" },
            { term: "class 7B", translation: "класс 7Б" },
          ],
        },
        {
          id: "kak-iskat-v-obyavlenii-o-nahodkah",
          kind: "note",
          tone: "info",
          text:
            "Вещь ищут по номеру, а хозяина — по слову вместо вещи.\n\nСлова " +
            "his, hers, ours и theirs говорят, чья вещь, не называя её заново.",
        },
        {
          id: "slovar-stola-nahodok",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "horrible", translation: "ужасный", example: "It is a horrible day for its owner.", hint: "/ˈhɒrɪbl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-lezhit-pod-nomerom-tri",
          about: "obyavlenie-o-nahodkah",
          kind: "short",
          prompt: "Что лежит под номером 3? Ответь одним словом по-английски.",
          answer: "umbrella",
          accept: ["Umbrella", "an umbrella"],
          hint: "Каждая строка объявления начинается с номера.",
          why: "Number 3 is an umbrella.",
        },
        {
          id: "z2-chey-sharf",
          about: "obyavlenie-o-nahodkah",
          kind: "choice",
          prompt: "Что объявление говорит о хозяине шарфа?",
          options: [
            { text: "Хозяина не нашли." },
            { text: "Это мальчик из 7Б.", correct: true },
            { text: "Шарф принадлежит школе." },
          ],
          hint: "Про шарф сказано в строке с номером 1.",
          why:
            "Это мальчик из 7Б: A boy from class 7B lost it, and it is his. " +
            "Слово his и говорит, что хозяин мужского пола.",
        },
        {
          id: "z3-gde-stol",
          about: "obyavlenie-o-nahodkah",
          kind: "short",
          prompt: "Рядом с чем стоит стол находок? Ответь одним словом по-английски.",
          answer: "door",
          accept: ["Door", "the door", "near the door"],
          hint: "Про место сказано в самой последней строке.",
          why: "The table is near the door.",
        },
        {
          id: "z4-otmetit-verno-o-nahodkah",
          about: "obyavlenie-o-nahodkah",
          kind: "hottext",
          prompt: "Отметь то, что верно по объявлению.",
          parts: [
            { text: "вещи потеряли на прошлой неделе", selectable: true, correct: true },
            { text: " · " },
            { text: "зонт старый, но целый", selectable: true, correct: true },
            { text: " · " },
            { text: "перчаток нашли ровно две", selectable: true },
            { text: " · " },
            { text: "вещи принадлежат школе", selectable: true },
          ],
          hint: "Про перчатку сказано в строке 2, а про хозяев — в самой первой.",
          why:
            "Верно первое и второе. Про вторую перчатку сказано maybe — " +
            "«может быть», а первая строка прямо говорит These things are not " +
            "ours.",
        },
        {
          id: "z5-chto-znachit-take-yours",
          about: "obyavlenie-o-nahodkah",
          kind: "choice",
          prompt:
            "Последняя строка кончается словами take yours. Что это значит?",
          options: [
            { text: "Забери всё, что лежит на столе." },
            { text: "Забери свою вещь.", correct: true },
            { text: "Забери вещь друга." },
          ],
          hint: "Слово yours стоит вместо вещи и называет хозяина.",
          why:
            "Забери свою вещь. Слово yours говорит, что вещь твоя, а какая " +
            "именно — сказано выше по номерам.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chya-eto-veshch",
      title: "Слушаем, чья это вещь",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, чья вещь",

      blocks: [
        {
          id: "zachem-slushat-o-hozyaine",
          kind: "explain",
          text: [
            "Двое разбирают вещи после поездки и ищут хозяев.",
            "Слушать надо, чья вещь и что с ней делают дальше.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-veshchah-posle-poezdki",
          kind: "audio",
          caption: "Разговор после поездки",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Whose is this uniform? — It isn't mine. Maybe it's hers. — " +
            "And the skateboard? — That one is theirs. They bought it in May.",
        },
        {
          id: "chto-slushat-o-hozyaine",
          kind: "note",
          tone: "info",
          text:
            "Слушай слово, которое стоит вместо вещи.\n\nОно и называет " +
            "хозяина: mine, hers, theirs.",
        },
        // ---- задания ----
        {
          id: "z1-chya-veshch-v-zapisi",
          about: "zapis-o-veshchah-posle-poezdki",
          kind: "choice",
          prompt: "Послушай. Чья, скорее всего, форма?",
          options: [
            { text: "Того, кто спрашивает." },
            { text: "Женщины, о которой говорят.", correct: true },
            { text: "Никто не знает." },
          ],
          hint: "Ответ звучит во второй реплике.",
          why:
            "Женщины: Maybe it's hers. Слово hers и называет хозяйку.",
        },
        {
          id: "z2-kogda-kupili-skeytbord",
          about: "zapis-o-veshchah-posle-poezdki",
          kind: "short",
          prompt: "Послушай. В каком месяце купили скейтборд? Ответь одним словом по-английски.",
          answer: "May",
          accept: ["may"],
          hint: "Месяц звучит в самой последней реплике.",
          why: "They bought it in May.",
        },
        {
          id: "z3-chto-znachit-theirs-v-zapisi",
          about: "zapis-o-veshchah-posle-poezdki",
          kind: "choice",
          prompt: "В записи звучит theirs. О скольких хозяевах это слово?",
          options: [
            { text: "Об одном." },
            { text: "О нескольких.", correct: true },
            { text: "Ни о ком: это про вещь." },
          ],
          hint: "Вспомни ряд по лицам из второго урока.",
          why:
            "О нескольких. Об одном сказали бы his или hers, а theirs идёт к " +
            "they.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-veshchah",
          about: "zapis-o-veshchah-posle-poezdki",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "форма не принадлежит спрашивающему", selectable: true, correct: true },
            { text: " · " },
            { text: "скейтборд купили в мае", selectable: true, correct: true },
            { text: " · " },
            { text: "форму нашли на улице", selectable: true },
            { text: " · " },
            { text: "скейтборд принадлежит фотографу", selectable: true },
          ],
          hint: "Про форму говорят в первых двух репликах.",
          why:
            "Прозвучали первое и второе. Про улицу и фотографа речи не было " +
            "вовсе.",
        },
        {
          id: "z5-uslyshat-veshch",
          about: "zapis-o-veshchah-posle-poezdki",
          kind: "short",
          prompt: "Послушай. О какой второй вещи спрашивают? Ответь одним словом по-английски.",
          answer: "skateboard",
          accept: ["Skateboard", "the skateboard"],
          hint: "Вторая вещь названа в третьей реплике.",
          why: "And the skateboard?",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-obyavlenie-o-nahodke",
      title: "Пишем объявление о находке",
      estimatedMinutes: 15,
      outcome: "проверять объявление о находке по четырём строкам: вещь и день, приметы, чьё оно, где забрать",

      blocks: [
        {
          id: "zachem-proveryat-obyavlenie-o-nahodke",
          kind: "explain",
          text: [
            "Ученик повесил объявление: «I found a bag. Come and take it.»",
            "За вещью никто не пришёл: непонятно, какая сумка и куда идти.",
            "В объявлении о находке пропускают не саму вещь, а её приметы и место.",
            "Проверить своё объявление можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-obyavlenii-o-nahodke",
          kind: "table",
          caption: "Что должно быть в объявлении",
          zvuchat: [
            "I found a chain on Monday.",
            "It is long and it isn't new.",
            "It isn't mine, and maybe it is yours.",
            "The chain is with our teacher indoors.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["что и когда нашли", "I found a chain on Monday."],
            ["какая эта вещь", "It is long and it isn't new."],
            ["что вещь не твоя, а может быть его", "It isn't mine, and maybe it is yours."],
            ["где её забрать", "The chain is with our teacher indoors."],
          ],
        },
        {
          id: "chem-derzhitsya-obyavlenie-o-nahodke",
          kind: "explain",
          text: [
            "Первая строка называет вещь и день: без дня хозяин не поймёт, его ли это.",
            "Вторая даёт приметы: длинная, старая, в полоску.",
            "Третья говорит, что вещь не твоя, и вот тут нужно слово вместо вещи.",
            "Четвёртая говорит, где забрать: у кого и в каком месте.",
            "Строки связывают словами and, but и because: без них выйдет список.",
          ],
        },
        {
          id: "slovar-obyavleniya-o-nahodke",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "find", translation: "находить", example: "I found a chain on Monday.", hint: "/faɪnd/" },
            { term: "found", translation: "нашёл: прошедшее от find", example: "I found a chain on Monday.", hint: "/faʊnd/" },
          ],
        },
        {
          id: "obrazec-obyavleniya-o-nahodke",
          kind: "example",
          caption: "Объявление Данияра",
          perevod: {
            "I found a chain on Monday.": "В понедельник я нашёл цепочку.",
            "It is long and it isn't new, but it is nice.":
              "Она длинная и не новая, но красивая.",
            "It isn't mine, and maybe it is yours.":
              "Она не моя, и, может быть, ваша.",
            "The chain is with our teacher indoors because the table is outdoors.":
              "Цепочка у нашего учителя внутри, потому что стол на улице.",
          },
          zvuchat: [
            "I found a chain on Monday.",
            "It is long and it isn't new, but it is nice.",
            "It isn't mine, and maybe it is yours.",
            "The chain is with our teacher indoors because the table is outdoors.",
          ],
          text:
            "I found a chain on Monday.\nIt is long and it isn't new, but it is nice.\nIt isn't mine, and maybe it is yours.\nThe chain is with our teacher indoors because the table is outdoors.",
          explain:
            "Вещь названа в первой строке, и дальше вместо неё стоят it и mine. " +
            "Приметы, день и место на месте, а строки связаны словами but, and " +
            "и because.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-obyavleniyu-o-nahodke",
          kind: "choice",
          prompt:
            "Объявление целиком: I found a bag on Monday. Come and take it. Чего в нём не хватает?",
          options: [
            { text: "Имени того, кто нашёл." },
            { text: "Не сказано, какая сумка и где её забрать.", correct: true },
            { text: "Благодарности хозяину." },
          ],
          hint: "Представь себя хозяином: поймёшь ли ты, твоя это сумка или нет?",
          why:
            "Не сказано, какая сумка и где её забрать. День назван, а примет и " +
            "места нет, и хозяин не узнает свою вещь.",
        },
        {
          id: "z2-dopisat-mine-v-obyavlenie",
          kind: "gap",
          prompt:
            "Перчатка уже названа. Допиши слово так, чтобы вещь не повторялась.",
          before: "The glove isn't ",
          after: ". Maybe it is your glove.",
          answer: "mine",
          hint: "После слова вещь не называют.",
          why:
            "The glove isn't mine. Слово my оборвало бы строку: после него " +
            "ждут вещь, а она уже названа в начале.",
        },
        {
          id: "z3-otmetit-poleznye-stroki-o-nahodke",
          kind: "hottext",
          prompt: "Отметь строки, которые помогут хозяину узнать свою вещь.",
          parts: [
            { text: "It is small and it is purple.", selectable: true, correct: true },
            { text: " · " },
            { text: "I did not hurry.", selectable: true },
            { text: " · " },
            { text: "I found it outdoors on Friday.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am a shy person.", selectable: true },
          ],
          hint: "Спроси у каждой строки: узнал ли хозяин из неё что-то о вещи?",
          why:
            "Первая и третья: одна даёт приметы, другая — место и день. Строки " +
            "про спешку и застенчивость говорят о нашедшем, а не о вещи.",
        },
        {
          id: "z4-svyazat-stroki-o-nahodke",
          kind: "order",
          prompt:
            "Собери строку объявления: перчатка у преподавателя, и сказано почему.",
          items: [
            "it was outdoors all night.",
            "The glove is",
            "because",
            "with our teacher",
          ],
          answer: [1, 3, 2, 0],
          hint: "Сначала вещь и где она, потом слово причины, потом сама причина.",
          why:
            "The glove is with our teacher because it was outdoors all night. " +
            "Причина стоит последней, и перед ней слово because.",
        },
        {
          id: "z5-napisat-obyavlenie-o-nahodke",
          kind: "essay",
          prompt:
            "Напиши объявление о находке, четырьмя строками. Назови вещь и день, дай приметы, скажи, что вещь не твоя, и назови место.",
          minWords: 16,
          sample:
            "I found a glove on Friday.\nIt is small and it is purple, but it isn't new.\nIt isn't mine, and maybe it is yours.\nThe glove is with our teacher indoors because I found it outdoors.",
          checklist: [
            "названы вещь и день находки",
            "даны приметы: какая эта вещь",
            "есть строка со словом вместо вещи: mine или yours",
            "сказано, где вещь забрать",
          ],
          hint:
            "Бери обороты, которые знаешь: I found, it isn't mine, maybe it is yours.",
          why:
            "Объявление работает, когда хозяин узнаёт свою вещь, не приходя " +
            "смотреть.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slova-chasti-eda-i-sport",
      title: "Слова о еде, спорте и природе",
      estimatedMinutes: 15,
      outcome: "называть еду, занятия спортом и живое вокруг: main course, ice skating, wildlife",

      blocks: [
        {
          id: "zachem-slova-o-ede-i-sporte",
          kind: "explain",
          text: [
            "Разговор о жизни быстро сворачивает на три вещи: что ели, чем занимались и что видели.",
            "Этот урок даёт слова для всех трёх.",
            "Многие из них тоже из двух слов: ice cream, table tennis, polar bear.",
            "Первое слово уточняет второе: bear — медведь, polar bear — белый медведь.",
          ],
        },
        {
          id: "chto-na-stole",
          kind: "table",
          caption: "Что на столе",
          zvuchat: ["ice cream", "fast food", "main course", "mineral water", "barbecue"],
          head: ["Английский", "Перевод"],
          rows: [
            ["ice cream", "мороженое"],
            ["fast food", "быстрая еда"],
            ["main course", "основное блюдо"],
            ["mineral water", "минеральная вода"],
            ["barbecue", "жарка мяса на огне"],
          ],
        },
        {
          id: "slovar-edy-chasti",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "ice cream", translation: "мороженое", example: "The ice cream was better than the cake.", hint: "/ˌaɪs ˈkriːm/" },
            { term: "fast food", translation: "быстрая еда", example: "Fast food is cheaper here.", hint: "/ˌfɑːst ˈfuːd/" },
            { term: "main course", translation: "основное блюдо", example: "The main course was the best part.", hint: "/ˌmeɪn ˈkɔːs/" },
            { term: "mineral water", translation: "минеральная вода", example: "A bottle of mineral water is enough.", hint: "/ˈmɪnərəl wɔːtə/" },
            { term: "barbecue", translation: "жарка мяса на огне", example: "Our barbecue was longer than usual.", hint: "/ˈbɑːbɪkjuː/" },
            { term: "stomach ache", translation: "боль в животе", example: "I had a stomach ache after the fast food.", hint: "/ˈstʌmək eɪk/" },
            { term: "gas", translation: "газ (бытовой, в плите)", example: "The gas cooker is older than ours.", hint: "/gæs/" },
          ],
        },
        {
          id: "primer-za-stolom",
          kind: "example",
          caption: "За столом",
          zvuchat: [
            "The main course was the best part.",
            "The ice cream was better than the cake.",
            "A bottle of mineral water is enough.",
            "Fast food is cheaper here.",
            "Our barbecue was longer than usual.",
            "I had a stomach ache after the fast food.",
            "The gas cooker is older than ours.",
          ],
          text:
            "The main course was the best part.\nThe ice cream was better than the cake.\nA bottle of mineral water is enough.\nFast food is cheaper here.\nOur barbecue was longer than usual.\nI had a stomach ache after the fast food.\nThe gas cooker is older than ours.",
          explain:
            "Семь строк об одном обеде. В пяти из них стоит сравнение — так о еде " +
            "и говорят: что вкуснее, что дешевле, что дольше.",
        },
        {
          id: "slovar-sporta-chasti",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "table tennis", translation: "настольный теннис", example: "Table tennis is easier than tennis.", hint: "/ˈteɪbl tenɪs/" },
            { term: "ice skating", translation: "катание на коньках (полное имя того же skating)", example: "Ice skating is harder in the morning.", hint: "/ˈaɪs skeɪtɪŋ/" },
            { term: "swimming pool", translation: "плавательный бассейн", example: "Our swimming pool is bigger than theirs.", hint: "/ˈswɪmɪŋ puːl/" },
            { term: "swimming costume", translation: "купальник (второе имя, рядом со swimsuit)", example: "Take your swimming costume with you.", hint: "/ˈswɪmɪŋ kɒstjuːm/" },
            { term: "snowboard", translation: "сноуборд", example: "His snowboard is newer than mine.", hint: "/ˈsnəʊbɔːd/" },
            { term: "surfboard", translation: "доска для сёрфинга", example: "A surfboard is longer than a snowboard.", hint: "/ˈsɜːfbɔːd/" },
            { term: "surf", translation: "кататься на доске по волнам", example: "They surf here every summer.", hint: "/sɜːf/" },
            { term: "get fit", translation: "прийти в форму", example: "I want to get fit before the race.", hint: "/get ˈfɪt/" },
          ],
        },
        {
          id: "primer-vyhodnye",
          kind: "example",
          caption: "Выходные",
          zvuchat: [
            "Table tennis is easier than tennis.",
            "Ice skating is harder in the morning.",
            "Our swimming pool is bigger than theirs.",
            "Take your swimming costume with you.",
            "His snowboard is newer than mine.",
            "A surfboard is longer than a snowboard.",
            "They surf here every summer.",
            "I want to get fit before the race.",
          ],
          text:
            "Table tennis is easier than tennis.\nIce skating is harder in the morning.\nOur swimming pool is bigger than theirs.\nTake your swimming costume with you.\nHis snowboard is newer than mine.\nA surfboard is longer than a snowboard.\nThey surf here every summer.\nI want to get fit before the race.",
          explain:
            "Восемь строк о занятиях. Слово surf называет само дело, а surfboard — " +
            "доску, на которой его делают.",
        },
        {
          id: "slovar-lyudey-i-muzyki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "tennis player", translation: "теннисист", example: "This tennis player is younger than the winner.", hint: "/ˈtenɪs pleɪə/" },
            { term: "football player", translation: "футболист (то же, что footballer)", example: "Our football player is the tallest here.", hint: "/ˈfʊtbɔːl pleɪə/" },
            { term: "Olympic", translation: "олимпийский", example: "The Olympic race is the longest of all.", hint: "/əˈlɪmpɪk/" },
            { term: "rap", translation: "рэп", example: "He likes rap more than classical music.", hint: "/ræp/" },
            { term: "hip hop", translation: "хип-хоп", example: "Hip hop is louder than jazz.", hint: "/ˌhɪp ˈhɒp/" },
            { term: "digital camera", translation: "цифровой фотоаппарат", example: "Her digital camera is smaller than mine.", hint: "/ˈdɪdʒɪtl kæmərə/" },
          ],
        },
        {
          id: "primer-o-lyudyah",
          kind: "example",
          caption: "О людях и музыке",
          zvuchat: [
            "This tennis player is younger than the winner.",
            "Our football player is the tallest here.",
            "The Olympic race is the longest of all.",
            "He likes rap more than classical music.",
            "Hip hop is louder than jazz.",
            "Her digital camera is smaller than mine.",
          ],
          text:
            "This tennis player is younger than the winner.\nOur football player is the tallest here.\nThe Olympic race is the longest of all.\nHe likes rap more than classical music.\nHip hop is louder than jazz.\nHer digital camera is smaller than mine.",
          explain:
            "Шесть строк, и в каждой сравнение. Имя занятия часто выходит из имени " +
            "игры: tennis — tennis player, football — football player.",
        },
        {
          id: "zhivoe-vokrug",
          kind: "table",
          caption: "Живое вокруг",
          zvuchat: ["bee", "beetle", "jellyfish", "polar bear", "creature", "wildlife", "extinct", "desert", "dead"],
          head: ["Английский", "Перевод"],
          rows: [
            ["bee", "пчела"],
            ["beetle", "жук"],
            ["jellyfish", "медуза"],
            ["polar bear", "белый медведь"],
            ["creature", "живое существо"],
            ["wildlife", "дикая природа"],
            ["extinct", "вымерший"],
            ["desert", "пустыня"],
            ["dead", "мёртвый"],
          ],
        },
        {
          id: "slovar-zhivogo",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bee", translation: "пчела", example: "A bee is smaller than a beetle.", hint: "/biː/" },
            { term: "beetle", translation: "жук", example: "A bee is smaller than a beetle.", hint: "/ˈbiːtl/" },
            { term: "jellyfish", translation: "медуза", example: "The jellyfish was the strangest creature there.", hint: "/ˈdʒelifɪʃ/" },
            { term: "polar bear", translation: "белый медведь", example: "The polar bear is the heaviest animal here.", hint: "/ˈpəʊlə beə/" },
            { term: "creature", translation: "живое существо", example: "The jellyfish was the strangest creature there.", hint: "/ˈkriːtʃə/" },
            { term: "wildlife", translation: "дикая природа", example: "The wildlife park is bigger than the zoo.", hint: "/ˈwaɪldlaɪf/" },
            { term: "extinct", translation: "вымерший", example: "That bird is extinct now.", hint: "/ɪkˈstɪŋkt/" },
            { term: "desert", translation: "пустыня", example: "The desert is drier than the coast.", hint: "/ˈdezət/" },
            { term: "dead", translation: "мёртвый", example: "The tree near the gate is dead.", hint: "/ded/" },
          ],
        },
        {
          id: "primer-o-zhivom",
          kind: "example",
          caption: "В парке и на берегу",
          zvuchat: [
            "A bee is smaller than a beetle.",
            "The jellyfish was the strangest creature there.",
            "The polar bear is the heaviest animal here.",
            "The wildlife park is bigger than the zoo.",
            "That bird is extinct now.",
            "The desert is drier than the coast.",
            "The tree near the gate is dead.",
          ],
          text:
            "A bee is smaller than a beetle.\nThe jellyfish was the strangest creature there.\nThe polar bear is the heaviest animal here.\nThe wildlife park is bigger than the zoo.\nThat bird is extinct now.\nThe desert is drier than the coast.\nThe tree near the gate is dead.",
          explain:
            "Семь строк о живом. Слово creature годится любому существу, а extinct " +
            "говорят о тех, кого не осталось вовсе.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-blyudo",
          kind: "choice",
          prompt: "Как называют основное блюдо обеда?",
          options: [
            { text: "fast food" },
            { text: "main course", correct: true },
            { text: "ice cream" },
          ],
          hint: "Первое слово нужной пары значит «главный».",
          why:
            "main course. Fast food — быстрая еда, а ice cream — мороженое, и оба " +
            "основным блюдом не бывают.",
        },
        {
          id: "z2-dopisat-medvedya",
          kind: "gap",
          prompt: "Белого медведя называют двумя словами. Допиши первое.",
          before: "The ",
          after: " bear is the heaviest animal here.",
          answer: "polar",
          hint: "Это слово о полюсе, а не о цвете.",
          why:
            "The polar bear. Английский называет его по месту, где он живёт, а не " +
            "по цвету шерсти.",
        },
        {
          id: "z3-soedinit-sport",
          kind: "match",
          prompt: "Соедини вещь с тем, для чего она нужна.",
          left: ["snowboard", "surfboard", "swimming costume", "table tennis"],
          right: [
            "для катания по волнам",
            "для игры за столом",
            "для катания по снегу",
            "для бассейна",
          ],
          answer: [2, 0, 3, 1],
          hint: "Досок здесь две: одна для снега, другая для воды.",
          why:
            "snowboard — для катания по снегу, surfboard — для катания по волнам, " +
            "swimming costume — для бассейна, table tennis — для игры за столом.",
        },
        {
          id: "z4-skazat-o-meduze",
          kind: "short",
          prompt: "Скажи по-английски: медуза оказалась самым странным существом там. Начни с The jellyfish.",
          answer: "The jellyfish was the strangest creature there.",
          accept: [
            "The jellyfish was the strangest creature there",
            "The jellyfish was the strangest creature.",
          ],
          hint: "Существо по-английски — creature.",
          why:
            "The jellyfish was the strangest creature there. Слово creature " +
            "годится и рыбе, и насекомому, и зверю.",
        },
        {
          id: "z5-otmetit-o-ede",
          kind: "hottext",
          prompt: "Отметь то, что относится к еде.",
          parts: [
            { text: "main course", selectable: true, correct: true },
            { text: " · " },
            { text: "table tennis", selectable: true },
            { text: " · " },
            { text: "mineral water", selectable: true, correct: true },
            { text: " · " },
            { text: "polar bear", selectable: true },
          ],
          hint: "Ищи то, что подают на стол.",
          why:
            "Верны main course и mineral water. Table tennis — игра, а polar bear " +
            "— зверь.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: назвать причину
      // выбора, отличить две записи по смыслу, исправить чужую строку,
      // произвести ответ на вопрос собеседника.

      // ---- итог 1 ----
      {
        id: "q-pochemu-ne-its-my",
        kind: "choice",
        outcome: "сказать, что вещь твоя: It's mine",
        prompt: "Почему запись It's my не годится?",
        options: [
          { text: "Слово my требует вещи после себя.", correct: true },
          { text: "Слово my годится только к людям." },
          { text: "Слово my не ставят в конце вопроса." },
        ],
        hint: "Посмотри, чего в этой записи не хватает.",
        why:
          "Слово my требует вещи после себя. Без вещи ставят mine, и запись " +
          "становится законченной.",
      },
      {
        id: "q-ispravit-its-my",
        kind: "short",
        outcome: "сказать, что вещь твоя: It's mine",
        prompt:
          "Ученик написал: The black bag is my. Запиши строку без ошибки, не повторяя слово bag.",
        answer: "The black bag is mine.",
        accept: ["The black bag is mine"],
        hint: "Вещь названа в начале строки, и в конце её не повторяют.",
        why:
          "The black bag is mine. Слово my требует вещи после себя, а повторять " +
          "bag условие запрещает.",
      },

      // ---- итог 2 ----
      {
        id: "q-chem-his-osobennyy",
        kind: "choice",
        outcome: "назвать хозяина любой вещи: his, hers, ours, theirs",
        prompt: "Чем слово his отличается от остальных в ряду?",
        options: [
          { text: "Оно годится только вещам." },
          { text: "После него всегда ставят 's." },
          { text: "Перед вещью и вместо вещи оно пишется одинаково.", correct: true },
        ],
        hint: "Сравни его с парами my — mine и her — hers.",
        why:
          "Перед вещью и вместо вещи оно пишется одинаково: his bag и It's " +
          "his. У остальных лиц формы две.",
      },
      {
        id: "q-ispravit-its-their",
        kind: "short",
        outcome: "назвать хозяина любой вещи: his, hers, ours, theirs",
        prompt:
          "Ученик написал: These bags are their. Запиши строку без ошибки.",
        answer: "These bags are theirs.",
        accept: ["These bags are theirs"],
        hint: "Строка кончается этим словом, а сумки названы в начале.",
        why:
          "These bags are theirs. Форма their живёт только перед вещью: their " +
          "bags. В конце строки её место занимает theirs.",
      },
      {
        id: "q-napisat-o-nashey-kvartire",
        kind: "short",
        outcome: "назвать хозяина любой вещи: his, hers, ours, theirs",
        prompt:
          "Квартира принадлежит твоей семье. Скажи это по-английски, начав с This flat.",
        answer: "This flat is ours.",
        accept: ["This flat is ours"],
        hint: "Хозяев несколько, и ты один из них.",
        why:
          "This flat is ours. Запись This flat is our оборвана: после our ждут " +
          "вещь, как в our flat.",
      },

      // ---- итог 3 ----
      {
        id: "q-otvetit-na-whose",
        kind: "short",
        outcome: "спросить и ответить, чья вещь: Whose is it? A friend of mine",
        prompt:
          "Тебя спросили: Whose is this chain? Цепочка принадлежит твоей бабушке. Ответь по-английски, начав с It's.",
        answer: "It's my grandma's.",
        accept: [
          "It's my grandma's",
          "It is my grandma's.",
          "It is my grandma's",
        ],
        hint: "К имени хозяина добавляют две буквы, а вещь не повторяют.",
        why:
          "It's my grandma's. Запись It's my grandma сказала бы, что цепочка и " +
          "есть бабушка.",
      },
      {
        id: "q-napisat-o-druge-neznakomom",
        kind: "short",
        outcome: "спросить и ответить, чья вещь: Whose is it? A friend of mine",
        prompt:
          "Здесь работает один твой друг, и собеседник его не знает. Скажи это по-английски, начав с A friend.",
        answer: "A friend of mine works here.",
        accept: ["A friend of mine works here"],
        hint: "Начни с человека, а себя назови в конце оборота.",
        why:
          "A friend of mine works here. Запись My friend works here сказала бы " +
          "о друге, уже известном собеседнику.",
      },

      // ---- итог 4 ----
      {
        id: "q-pochemu-ne-hurt-me",
        kind: "choice",
        outcome: "сказать о действии с самим собой: I hurt myself",
        prompt: "Почему в строке I hurt … нельзя поставить me?",
        options: [
          { text: "Слово me не ставят после действия." },
          { text: "Слово me годится только вопросам." },
          { text: "Действующий и тот, на кого действуют, — одно лицо.", correct: true },
        ],
        hint: "Спроси, кого ушибли.",
        why:
          "Действующий и тот, на кого действуют, — одно лицо. Для такого " +
          "случая берут слово на -self.",
      },
      {
        id: "q-otvetit-o-prazdnike",
        kind: "short",
        outcome: "сказать о действии с самим собой: I hurt myself",
        prompt:
          "Тебя спросили: Did you enjoy the party? Ответь, что хорошо было тебе самому, словом на -self. Начни с Yes, I.",
        answer: "Yes, I enjoyed myself.",
        accept: ["Yes, I enjoyed myself"],
        hint: "Хорошо было тебе самому.",
        why:
          "Yes, I enjoyed myself. Так отвечают о себе, а не о самом празднике.",
      },
      {
        id: "q-otlichit-sebya-ot-drugogo",
        kind: "choice",
        outcome: "сказать о действии с самим собой: I hurt myself",
        prompt: "Строки She hurt her и She hurt herself говорят о разном. Чем?",
        options: [
          { text: "Первая о прошлом, вторая о настоящем." },
          { text: "Первая вопрос, вторая ответ." },
          { text: "В первой пострадала другая женщина, во второй — она сама.", correct: true },
        ],
        hint: "Спроси у каждой строки, кто пострадал.",
        why:
          "В первой пострадала другая женщина, во второй — она сама. Слово на " +
          "-self и возвращает действие к действующему.",
      },

      // ---- итог 5 ----
      {
        id: "q-chto-dobavlyaet-by",
        kind: "choice",
        outcome: "сказать, что справился без помощи: by myself",
        prompt: "Что меняет короткое by перед словом на -self?",
        options: [
          { text: "Делает строку вежливее." },
          { text: "Говорит, что рядом никого не было.", correct: true },
          { text: "Переносит действие в прошлое." },
        ],
        hint: "Сравни I hurt myself и I went there by myself.",
        why:
          "Говорит, что рядом никого не было. Без by слово называет того, на " +
          "кого пошло действие.",
      },
      {
        id: "q-napisat-o-rabote-odnoy",
        kind: "short",
        outcome: "сказать, что справился без помощи: by myself",
        prompt:
          "Фотограф работал без помощников. Скажи это по-английски, начав с The photographer worked.",
        answer: "The photographer worked by himself.",
        accept: ["The photographer worked by himself"],
        hint: "Оборот о самостоятельности ставят в конец строки.",
        why:
          "The photographer worked by himself. Без by вышло бы, что он работал " +
          "над самим собой.",
      },
      {
        id: "q-ispravit-by-my",
        kind: "short",
        outcome: "сказать, что справился без помощи: by myself",
        prompt:
          "Ученик написал: I painted the room by my. Запиши строку без ошибки.",
        answer: "I painted the room by myself.",
        accept: ["I painted the room by myself"],
        hint: "После by стоит слово на -self.",
        why:
          "I painted the room by myself. Слово my требует вещи после себя и " +
          "после by не работает.",
      },

      // ---- итог 6 ----
      {
        id: "q-najti-hozyaina-v-obyavlenii",
        kind: "choice",
        outcome: "находить в объявлении о находках, что нашли и где забрать",
        prompt:
          "В объявлении строка: Number 5 is a glove. It is hers. Что из этого следует?",
        options: [
          { text: "Перчатку потеряла женщина.", correct: true },
          { text: "Перчатку потеряли несколько человек." },
          { text: "Перчатка принадлежит школе." },
        ],
        hint: "Слово вместо вещи называет хозяина.",
        why:
          "Перчатку потеряла женщина. Про мужчину сказали бы his, про " +
          "нескольких — theirs.",
      },
      {
        id: "q-najti-veshch-i-mesto",
        kind: "short",
        outcome: "находить в объявлении о находках, что нашли и где забрать",
        prompt:
          "В объявлении строка: Number 2 is a glove. The table is near the door. Где забрать перчатку? Ответь одним словом по-английски.",
        answer: "door",
        accept: ["Door", "the door", "near the door"],
        hint: "Место названо во второй строке.",
        why:
          "Door. Первая строка говорит, что нашли, вторая — где это лежит: " +
          "объявление о находках всегда отвечает на оба вопроса.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-chya-veshch",
        kind: "short",
        outcome: "слышать в разговоре, чья вещь",
        zvuk: "Whose is this umbrella? — It isn't mine. It's my grandpa's.",
        prompt:
          "Послушай. Чей зонт? Ответь одним словом по-английски.",
        answer: "grandpa",
        accept: ["Grandpa", "grandpa's"],
        hint: "Хозяин назван в самой последней реплике.",
        why:
          "Grandpa. В записи звучит It's my grandpa's — хозяин назван через 's.",
      },
      {
        id: "q-uslyshat-chi-sumki",
        kind: "short",
        outcome: "слышать в разговоре, чья вещь",
        zvuk: "Are these bags ours? — No, they aren't. They are theirs.",
        prompt:
          "Послушай. Чьи сумки? Ответь одним словом по-английски.",
        answer: "theirs",
        accept: ["Theirs"],
        hint: "Хозяин назван в самой последней реплике.",
        why:
          "Theirs. Спрашивали, не наши ли сумки, и ответ отвёл: они чужие.",
      },

      // ---- итог 8 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-obyavleniyu-o-nahodke",
        kind: "choice",
        outcome: "проверять объявление о находке по четырём строкам: вещь и день, приметы, чьё оно, где забрать",
        prompt:
          "Объявление: I found a glove. It is long and it isn't new. It isn't mine. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что даёт приметы вещи." },
          { text: "Той, что говорит, где вещь забрать.", correct: true },
          { text: "Той, что называет вещь." },
        ],
        hint: "Пройди по объявлению строку за строкой и вычёркивай найденное.",
        why:
          "Той, что говорит, где вещь забрать. Вещь названа, приметы даны, " +
          "хозяин отсечён — а куда идти, хозяин не узнает.",
      },
      {
        id: "q-dopisat-stroku-o-meste",
        kind: "short",
        outcome: "проверять объявление о находке по четырём строкам: вещь и день, приметы, чьё оно, где забрать",
        prompt:
          "К объявлению допиши строку о месте: форма у нашего учителя. Начни с The uniform.",
        answer: "The uniform is with our teacher.",
        accept: [
          "The uniform is with our teacher",
          "The uniform is with our teacher indoors.",
          "The uniform is with our teacher indoors",
        ],
        hint: "Вещь названа в начале строки, а место — в конце.",
        why:
          "The uniform is with our teacher. Здесь стоит our, а не ours, потому " +
          "что дальше назван человек — teacher.",
      },
      {
        id: "q-pochemu-nuzhen-den-v-obyavlenii",
        kind: "choice",
        outcome: "проверять объявление о находке по четырём строкам: вещь и день, приметы, чьё оно, где забрать",
        prompt: "Зачем в объявлении о находке называют день?",
        options: [
          { text: "Чтобы хозяин понял, его ли это вещь.", correct: true },
          { text: "Чтобы объявление выглядело длиннее." },
          { text: "Чтобы школа знала, кто дежурил." },
        ],
        hint: "Представь: вещь пропала во вторник, а нашли её в пятницу.",
        why:
          "Чтобы хозяин понял, его ли это вещь. Потерявший в другой день сразу " +
          "видит, что вещь не его.",
      },

      // ---- итог 9 ----
      {
        id: "q-ispravit-nazvanie-katania",
        kind: "short",
        outcome: "называть еду, занятия спортом и живое вокруг: main course, ice skating, wildlife",
        prompt:
          "Ученик написал: Skating on ice is harder in the morning. У этого занятия есть своё имя из двух слов. Запиши строку без ошибки.",
        answer: "Ice skating is harder in the morning.",
        accept: ["Ice skating is harder in the morning"],
        hint: "Оба слова остаются, но лёд встаёт первым.",
        why:
          "Ice skating is harder in the morning. Имя занятия складывают из двух " +
          "слов, и лёд в нём стоит впереди.",
      },
      {
        id: "q-chto-znachit-extinct",
        kind: "choice",
        outcome: "называть еду, занятия спортом и живое вокруг: main course, ice skating, wildlife",
        prompt: "Что значит extinct?",
        options: [
          { text: "дикий" },
          { text: "вымерший", correct: true },
          { text: "редкий" },
        ],
        hint: "Так говорят о тех, кого не осталось вовсе.",
        why:
          "Вымерший. Дикую природу называют словом wildlife, а само существо — " +
          "creature.",
      },
    ],
  },
};

export default module;
