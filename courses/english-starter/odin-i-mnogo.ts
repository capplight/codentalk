import type { Module } from "@/lib/content/types";

/**
 * Модуль 8 курса «Английский с нуля»: один предмет и несколько.
 *
 * Программа: docs/programma-english-starter.md, модуль 8 — «различать один
 * предмет и несколько»; грамматика: множественное `-s`, прилагательное +
 * существительное во множественном.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ ПОСТРОЧНО ПО ENGLISH GRAMMAR PROFILE:
 *
 *   своей ступени — только окончание `-s`:
 *   A1, NOUNS plural «FORM: PLURAL '-S'»: «Can form plurals by adding '-s' to
 *   common countable nouns», пример источника «We play computer games».
 *
 *   СВЕРХ СТУПЕНИ, и обойтись без этого нельзя:
 *   A2, «FORM: PLURAL '-ES'» — после -o, -ch, -s, -sh, -x, -z. Без него ученик
 *   напишет «boxs» и «buss»: слова box и bus даны в модуле 6, и они как раз
 *   такие.
 *   A2, «FORM: IRREGULAR PLURAL NOUNS» — man, woman, child. По ngsl-stats.csv это
 *   102-е, 112-е и 169-е слова по частоте; обойти их значит оставить ученика
 *   без «люди».
 *   B1, PRONOUNS demonstratives «FORM: 'THESE'» и «FORM: 'THOSE'» — «These are
 *   my books» и «What are these?». Определительное these books стоит на A2, а
 *   самостоятельное — на B1, и в модуле таких мест шесть. Держится это решение
 *   на руководстве для младших ступеней, с. 21: образец Starters проверяет
 *   ровно «These are grapes.»
 *
 * Всё взято по решению 1 программы и помечено в `sources` поимённо. Ошибка
 * модуля 7 (я объявил, что строки в источнике нет, а плохо искал) заставила
 * проверять по подкатегории, а не по одному слову.
 *
 * ЧЕГО ЗДЕСЬ НЕТ:
 *
 * — чисел (модуль 9): «много книг», но не «три книги»;
 * — прилагательных (модуль 11). Программа упоминает «прилагательное +
 *   существительное во множественном», но разбор прилагательных стоит в
 *   модуле 11, и там же — правило о том, что прилагательное во множественном
 *   не меняется (урок «Перед названием: a big house»). В ЭТОМ модуле прилагательных
 *   нет ни одного, и раньше шапка обещала здесь оговорку, которой тоже не было.
 *   Расхождение нашёл методист; поправить надо программу, а не модуль;
 * — `there are` (модуль 13);
 * — настоящего простого времени (модуль 14).
 *
 * Звук есть: синтез речи Azure, британские голоса (решение владельца 16 августа).
 *
 * ДВА УРОКА УМЕНИЙ ДОБАВЛЕНЫ ПОЗЖЕ ОСТАЛЬНЫХ — чтение и слушание. Модуль 8
 * первый, где связный текст вообще можно построить: до него не из чего.
 * Числа появляются только в модуле 9, поэтому в объявлении о находке нет ни
 * одного числа — количество показано окончанием s и артиклем a.
 */
const module: Module = {
  slug: "odin-i-mnogo",
  title: "Один и много",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "СВОЕЙ СТУПЕНИ: A1, NOUNS plural «FORM: PLURAL '-S'»: «Can form plurals by adding " +
        "'-s' to common countable nouns», пример источника — «We play computer games». " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'» — форма are с несколькими предметами. " +
        "A1, DETERMINERS articles «FORM/USE: NO ARTICLE»: «Can use no article before a " +
        "limited range of singular, plural and uncountable nouns when referring to things " +
        "in general» — отсюда исчезновение артикля во множественном. " +
        "СВЕРХ СТУПЕНИ, ЧЕТЫРЕ ПУНКТА: " +
        "A2, NOUNS plural «FORM: PLURAL '-ES'»: «Can form plurals by adding '-es' to " +
        "countable nouns ending in '-o', '-ch', '-s', '-sh', '-x' or '-z'». " +
        "ОГОВОРКА: правило источника перечисляет шесть окончаний, урок берёт четыре. " +
        "Не взято -o: photo и video стоят на A1 в Oxford 3000 и берут обычную -s, а довод " +
        "урока («конец и так звучит как s») к -o не подходит вовсе. Не взято и -z, но там " +
        "учить нечего: слов на -z в курсе нет ни одного. Оба исключения названы здесь, " +
        "чтобы проверяющий не искал в уроке то, чего в нём нет намеренно. " +
        "A2, NOUNS plural «FORM: IRREGULAR PLURAL NOUNS»: «Can form some irregular plural " +
        "nouns», пример источника — «I bought some clothes for my children». " +
        "A2, DETERMINERS demonstratives «FORM: 'THESE'» и «FORM: 'THOSE'»: «Can use " +
        "'these'/'those' with plural nouns» — это покрывает these books. " +
        "B1, PRONOUNS demonstratives «FORM: 'THESE'» и «FORM: 'THOSE'»: «Can use 'these' as " +
        "a pronoun with plural reference» — а это покрывает «These are my books» и «What " +
        "are these?», и таких мест в модуле шесть. Ступень здесь B1, не A2. " +
        "Защита у этого решения не в English Grammar Profile, а в руководстве для младших " +
        "ступеней, с. 21: образец Pre A1 Starters Reading and Writing Part 1 проверяет " +
        "ровно эту конструкцию — «These are grapes.» То есть Cambridge спрашивает её ниже " +
        "ступени A1. " +
        "Все четыре взяты по решению 1 программы: слова box и bus даны в модуле 6, и " +
        "без правила про -es ученик напишет «boxs»; man, woman и child — слова первых " +
        "двухсот по ngsl-stats.csv; без these и those указательные слова модуля 6 не работают " +
        "с несколькими " +
        "предметами",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, перечень структур ступени Pre A1 Starters, дословно: «Nouns Singular and " +
        "plural including irregular plural forms, countable and uncountable and names» — " +
        "то есть Cambridge ставит и множественное " +
        "число, и неправильные формы НИЖЕ ступени A1. Источники расходятся с English " +
        "Grammar Profile так же, как с `have got` в модуле 7",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves " +
        "and other people, where they live, people they know, things they have» — «things» " +
        "во множественном числе. Отдельного описания «умеет ставить множественное число» " +
        "в книге нет ни на одной ступени: это устройство языка, а описания перечисляют " +
        "умения общения. " +
        "ОПОРА ДВУХ УРОКОВ УМЕНИЙ, с. 56, графа A1: «Can recognise familiar names, " +
        "words/signs and very basic phrases on simple notices in the most common everyday " +
        "situations» — это объявление о находке. " +
        "с. 55, Reading correspondence, графа A1: «Can understand short, simple messages " +
        "on postcards» — это записка от Даны. Проверено построчно обоими разборами: " +
        "строка стоит именно в графе A1, а не в соседней. " +
        "ОПОРА УРОКА СЛУШАНИЯ, с. 52, шкала понимания записей, графа A1, дословно: " +
        "«Can pick out concrete information (e.g. places and times) from short recordings " +
        "on familiar everyday topics, provided they are delivered very slowly and " +
        "clearly». Отсюда и медленный темп, и то, что спрашиваем конкретную вещь, а не " +
        "смысл целиком. " +
        "ОСТОРОЖНО: сначала я поставил здесь «с. 45» и неточную цитату по памяти. " +
        "Страница 52, и проверять номер надо всегда — `kontrol` ищет цитату, но номера " +
        "страницы не сверяет вовсе",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометкой A1: man, woman, child, people, thing, а также " +
        "watch (с. 11, «watch v., n. A1») и dish (с. 3, «dish n. A1»). Формы men, " +
        "women и children в словнике отдельными записями не стоят — это формы тех же слов. " +
        "Остальное — предметы из модулей 6 и 7. " +
        "ПРЕЖНЯЯ РЕДАКЦИЯ относила watch и dish к предметам модулей 6 и 7, а их там нет " +
        "вовсе: оба слова новые и вводятся здесь. Проверяющий по такой записи решил бы, " +
        "что они уже сверены. Нашёл методист",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены " +
        "(CLAUDE.md, раздел о британской норме)",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить о нескольких вещах сразу: books, keys, cars",
    "прибавлять es там, где одной буквы s мало: boxes, buses",
    "говорить о нескольких предметах без артикля: They're books",
    "выбирать форму be по числу: It is — They are",
    "называть людей во множественном числе: men, women, children, people",
    "показывать на несколько предметов: these и those",
    "строить вопрос и отрицание, когда предметов несколько",
    "рассказывать о своих вещах и близких во множественном числе",
    "находить в коротком объявлении, чего сколько и где это",
    "понимать на слух, об одной вещи говорят или о нескольких",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "okonchanie-s",
      title: "Одно и много: буква s",
      estimatedMinutes: 13,
      outcome: "говорить о нескольких вещах сразу: books, keys, cars",

      blocks: [
        {
          id: "zachem-mnozhestvennoe",
          kind: "explain",
          text: [
            "До сих пор предмет был один: a book, a key, a car. Чтобы сказать, что их " +
              "несколько, к слову добавляют s: books, keys, cars. Такую форму называют " +
              "множественным числом, а прежнюю — единственным.",
            "По-русски окончание меняется по-разному: «книга — книги», «ключ — ключи», " +
              "«машина — машины». По-английски ко всем таким словам прибавляется одна и та " +
              "же буква, а меняется только конец слова.",
          ],
        },
        {
          id: "tablica-s",
          kind: "table",
          caption: "Один и несколько",
          // Соседние кнопки: окончание s на конце слова короткое, и услышать
          // его вернее всего, включив пару подряд.
          zvuchat: ["a book", "books", "a key", "keys", "a car", "cars", "a pen", "pens",
            "a friend", "friends",
          ],
          head: ["Один", "Несколько", "Перевод"],
          rows: [
            ["a book", "books", "книга — книги"],
            ["a key", "keys", "ключ — ключи"],
            ["a car", "cars", "машина — машины"],
            ["a pen", "pens", "ручка — ручки"],
            ["a friend", "friends", "друг — друзья"],
          ],
        },
        {
          id: "s-ne-menyaet-slovo",
          kind: "note",
          tone: "info",
          text:
            "Само слово при этом не меняется: books — это то же book с буквой s на конце. " +
            "Начало слова остаётся прежним. У key то же самое: keys, буква y на месте — " +
            "перед ней стоит гласная e.",
        },
        {
          id: "s-ne-vezde",
          kind: "note",
          tone: "mistake",
          text:
            "Буква s прибавляется не ко всякому слову. У box и bus окончание другое, у man " +
            "и child форма своя — оба случая в следующих уроках. А у слов на согласный с -y " +
            "на конце меняется и сама буква y: family, city и country дают families, cities, " +
            "countries. Это правило разбирается в модуле «Что я делаю», в уроке «Когда " +
            "одной s мало».",
        },
        // Запись убрана: каждая пара звучит в таблице выше двумя кнопками.
        {
          id: "slovar-s",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "thing", translation: "вещь, предмет", example: "my things", hint: "/θɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-dobavlyayut",
          kind: "choice",
          prompt: "Что добавляют к слову, когда предметов несколько?",
          options: [{ text: "букву s", correct: true }, { text: "артикль a" }, { text: "ничего" }],
          hint: "Одна буква на конце.",
          why: "Букву s: book — books. Артикль a при этом уходит, но об этом отдельный урок.",
        },
        {
          id: "z2-dopisat-mnozhestvennoe",
          kind: "gap",
          prompt: "Допиши слово «ключи» — от key.",
          before: "They're my ",
          after: ".",
          answer: "keys",
          hint: "Четыре буквы.",
          why: "Keys. К слову key прибавилась s, само слово не изменилось.",
        },
        {
          id: "z3-otmetit-neskolko",
          kind: "hottext",
          prompt: "Отметь слова, которые называют несколько предметов.",
          parts: [
            { text: "pens", selectable: true, correct: true },
            { text: " · " },
            { text: "a car", selectable: true },
            { text: " · " },
            { text: "books", selectable: true, correct: true },
            { text: " · " },
            { text: "a key", selectable: true },
          ],
          hint: "Смотри на конец слова и на то, есть ли перед ним a.",
          why: "Pens и books оканчиваются на s. У a car и a key предмет один.",
        },
        {
          id: "z4-sopostavit-formy",
          kind: "match",
          prompt: "Сопоставь слово и его форму для нескольких предметов.",
          left: ["a friend", "a car", "a pen"],
          right: ["cars", "pens", "friends"],
          answer: [2, 0, 1],
          hint: "К каждому слову прибавляется одна и та же буква.",
          why: "A friend — friends, a car — cars, a pen — pens.",
        },
        {
          id: "z5-napisat-drug",
          kind: "short",
          prompt: "Напиши по-английски «друзья».",
          answer: "friends",
          hint: "Слово friend и одна буква.",
          why: "Friends. По-русски слово меняется целиком, по-английски прибавляется s.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kogda-es",
      title: "Когда нужна не s, а es",
      estimatedMinutes: 13,
      outcome: "прибавлять es там, где одной буквы s мало: boxes, buses",

      blocks: [
        {
          id: "zachem-es",
          kind: "explain",
          text: [
            "Слова box и bus уже оканчиваются на звук, который сам похож на s: «с», «кс», " +
              "«ш», «ч». Прибавить к нему ещё одну s невозможно — не выговорить. Поэтому " +
              "прибавляют es: boxes, buses.",
            "Смотрят на конец слова: если оно оканчивается на -s, -x, -ch или -sh, " +
              "ставят es. Слова на -o живут по своему правилу, и оно ждёт своего модуля.",
          ],
        },
        {
          id: "tablica-es",
          kind: "table",
          caption: "Когда es",
          // Урок о том, что прибавляется целый слог. Пара кнопок это и
          // показывает: boxes длиннее box на слух, а не только на письме.
          zvuchat: ["a box", "boxes", "a bus", "buses", "a watch", "watches", "a dish",
            "dishes",
          ],
          head: ["Один", "Несколько", "Почему es"],
          rows: [
            ["a box", "boxes", "оканчивается на x"],
            ["a bus", "buses", "оканчивается на s"],
            ["a watch", "watches", "оканчивается на ch"],
            ["a dish", "dishes", "оканчивается на sh"],
          ],
        },
        {
          id: "es-slyshno",
          kind: "note",
          tone: "info",
          text:
            "Окончание es не только пишется, но и слышится отдельным слогом: box — /bɒks/, " +
            "boxes — /ˈbɒksɪz/. Слово стало длиннее на слог, и это первая подсказка, что " +
            "нужна именно es.",
        },
        {
          id: "boxs-oshibka",
          kind: "note",
          tone: "mistake",
          text:
            "«Boxs» и «buss» — обычная ошибка: буква s прибавлена туда, где её не " +
            "выговорить. Произнеси слово вслух: если конец не выговаривается, нужна es.",
        },
        {
          id: "slovar-es",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "watch", translation: "наручные часы", example: "It's my watch.", hint: "/wɒtʃ/" },
            { term: "dish", translation: "тарелка, блюдо", example: "It's a dish.", hint: "/dɪʃ/" },
          ],
        },
        // Запись убрана: каждая пара звучит в таблице выше двумя кнопками.

        // ---- задания ----
        {
          id: "z1-s-ili-es",
          kind: "choice",
          prompt: "Что прибавить к слову bus?",
          options: [{ text: "s" }, { text: "es", correct: true }, { text: "ничего" }],
          hint: "Произнеси «bus» и попробуй добавить один звук s.",
          why: "Buses. Слово оканчивается на s, и ещё одну s к нему не прибавить.",
        },
        {
          id: "z2-dopisat-boxes",
          kind: "gap",
          prompt: "Допиши слово «коробки» — от box.",
          before: "They're ",
          after: ".",
          answer: "boxes",
          hint: "Пять букв.",
          why: "Boxes. Слово оканчивается на x, поэтому es.",
        },
        {
          id: "z3-otmetit-es",
          kind: "hottext",
          prompt: "Отметь слова, к которым нужна es.",
          parts: [
            { text: "book", selectable: true },
            { text: " · " },
            { text: "watch", selectable: true, correct: true },
            { text: " · " },
            { text: "bus", selectable: true, correct: true },
            { text: " · " },
            { text: "friend", selectable: true },
          ],
          hint: "Произнеси каждое слово: два из них уже оканчиваются на звук вроде «с» или «ч».",
          why: "Watch оканчивается на ch, bus — на s. Book и friend берут обычную s.",
        },
        {
          id: "z4-sopostavit-es",
          kind: "match",
          prompt: "Сопоставь слово и его форму для нескольких предметов.",
          left: ["a watch", "a box", "a bus"],
          right: ["buses", "watches", "boxes"],
          answer: [1, 2, 0],
          hint: "Ко всем трём прибавляется одно и то же окончание.",
          why: "A watch — watches, a box — boxes, a bus — buses.",
        },
        {
          id: "z5-napisat-chasy",
          kind: "short",
          prompt: "Наручные часы watch, а если их несколько? Напиши форму.",
          answer: "watches",
          hint: "Слово оканчивается на ch.",
          why: "Watches. К словам на ch прибавляют es.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "a-uhodit",
      title: "Артикль a уходит",
      estimatedMinutes: 12,
      outcome: "говорить о нескольких предметах без артикля: They're books",

      blocks: [
        {
          id: "zachem-a-uhodit",
          kind: "explain",
          text: [
            "Артикль a значит «один из таких». Когда предметов несколько, он теряет смысл и " +
              "уходит: a book → books, a car → cars.",
            "«A books» сказать нельзя ни при каких условиях: a обещает один предмет, а s " +
              "говорит, что их много. Получаются два знака, которые противоречат друг другу.",
          ],
        },
        {
          id: "tablica-bez-a",
          kind: "table",
          caption: "Что происходит с артиклем",
          zvuchat: ["It's a book.", "They're books.", "It's a car.", "They're cars.",
            "It's my book.", "They're my books.",
          ],
          head: ["Один", "Несколько", "Что изменилось"],
          rows: [
            ["It's a book.", "They're books.", "a ушло, прибавилась s"],
            ["It's a car.", "They're cars.", "то же самое"],
            ["It's my book.", "They're my books.", "my осталось, a и не было"],
          ],
        },
        {
          id: "my-ostayotsya",
          kind: "note",
          tone: "info",
          text:
            "Слово о принадлежности остаётся: my books, your keys, her friends. Уходит " +
            "только a — оно одно означает «один».",
        },
        {
          id: "a-books-nelzya",
          kind: "note",
          tone: "mistake",
          text:
            "«A books» заметить легко: артикль стоит перед словом с окончанием s. Одно из " +
            "двух лишнее, и лишнее всегда a.",
        },
        // Запись убрана: оба предложения каждой строки звучат в таблице выше.

        // ---- задания ----
        {
          id: "z1-chto-uhodit",
          kind: "choice",
          prompt: "Что уходит, когда предметов становится несколько?",
          options: [{ text: "слово my" }, { text: "артикль a", correct: true }, { text: "буква s" }],
          hint: "Уходит то, что значит «один из таких».",
          why: "Артикль a. Слово my остаётся: my books.",
        },
        {
          id: "z2-otmetit-lishnee-a",
          kind: "hottext",
          prompt: "Отметь строки, где артикль лишний.",
          parts: [
            { text: "a book", selectable: true },
            { text: " · " },
            { text: "a books", selectable: true, correct: true },
            { text: " · " },
            { text: "my keys", selectable: true },
            { text: " · " },
            { text: "a cars", selectable: true, correct: true },
          ],
          hint: "Ищи a рядом со словом, которое оканчивается на s.",
          why: "«A books» и «a cars» — a обещает один предмет, а s говорит, что их несколько.",
        },
        {
          id: "z3-perepisat-vo-mnozhestvennom",
          kind: "short",
          prompt: "Перепиши во множественном числе: «It's a car.» Начни с They're.",
          answer: "They're cars.",
          exact: true,
          accept: ["They're cars", "They are cars.", "They are cars"],
          hint: "Артикль уходит, буква s прибавляется, форма be меняется.",
          why: "They're cars. Меняются сразу три вещи: местоимение, форма be и само слово.",
        },
        {
          id: "z4-my-ostayotsya",
          kind: "gap",
          prompt: "Допиши: «Это мои ключи».",
          before: "They're my ",
          after: ".",
          answer: "keys",
          hint: "Слово my остаётся, а к key прибавляется буква.",
          why: "They're my keys. Слово о принадлежности не уходит, уходит только a.",
        },
        {
          id: "z5-sobrat-bez-a",
          kind: "order",
          prompt: "Собери предложение: «Это книги».",
          items: ["books", "They're"],
          answer: [1, 0],
          hint: "Артикля здесь нет вовсе.",
          why: "They're books. Ни a, ни другого слова перед books не нужно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "are-o-neskolkih",
      title: "Форма are, когда их несколько",
      estimatedMinutes: 12,
      outcome: "выбирать форму be по числу: It is — They are",

      blocks: [
        {
          id: "zachem-are",
          kind: "explain",
          text: [
            "Глагол be тоже меняется. Об одном предмете говорят is: It is a book. О " +
              "нескольких — are: They are books.",
            "Правило то же, что в модуле про местоимения: is идёт с he, she и it, are — с " +
              "you, we и they. Новое здесь одно: they означает не только людей, но и предметы.",
          ],
        },
        {
          id: "tablica-is-are",
          kind: "table",
          caption: "Один и несколько",
          zvuchat: ["It is a book.", "They are books.", "It's a key.", "They're keys.",
            "This is my bag.", "These are my bags.", "Is it a car?", "Are they cars?",
          ],
          head: ["Один", "Несколько"],
          rows: [
            ["It is a book.", "They are books."],
            ["It's a key.", "They're keys."],
            ["This is my bag.", "These are my bags."],
            ["Is it a car?", "Are they cars?"],
          ],
        },
        {
          id: "they-o-predmetah",
          kind: "note",
          tone: "info",
          text:
            "They говорят и о людях, и о предметах: They are my friends. They are my keys. " +
            "В английском неважно, о людях идёт речь или о вещах, — важно только, сколько их.",
        },
        {
          id: "is-books-oshibka",
          kind: "note",
          tone: "mistake",
          text:
            "«It is books» — форма be осталась от одного предмета, а название уже во " +
            "множественном. Меняются оба сразу: They are books.",
        },
        // Запись убрана: оба предложения каждой строки звучат в таблице выше.

        // ---- задания ----
        {
          id: "z1-forma-o-neskolkih",
          kind: "choice",
          prompt: "Какая форма be нужна, когда предметов несколько?",
          options: [{ text: "is" }, { text: "am" }, { text: "are", correct: true }],
          hint: "Та же, что идёт с they.",
          why: "Are. Форма is идёт с одним предметом: It is a book.",
        },
        {
          id: "z2-dopisat-are",
          kind: "gap",
          prompt: "Допиши форму глагола: «Это книги».",
          before: "They ",
          after: " books.",
          answer: "are",
          hint: "Три буквы.",
          why: "They are books. С they идёт форма are.",
        },
        {
          id: "z3-otmetit-nesoglasovannye",
          kind: "hottext",
          prompt: "Отметь строки, где форма be не подходит.",
          parts: [
            { text: "They is books.", selectable: true, correct: true },
            { text: " · " },
            { text: "They are keys.", selectable: true },
            { text: " · " },
            { text: "It is a car.", selectable: true },
            { text: " · " },
            { text: "It are a pen.", selectable: true, correct: true },
          ],
          hint: "С they идёт are, с it — is.",
          why: "«They is books» и «It are a pen» — формы перепутаны местами.",
        },
        {
          id: "z4-perepisat-s-are",
          kind: "short",
          prompt: "Перепиши во множественном числе: «It is a pen.» Начни с They.",
          answer: "They are pens.",
          exact: true,
          accept: ["They are pens", "They're pens.", "They're pens"],
          hint: "Меняются местоимение, форма be и само слово, а a уходит.",
          why: "They are pens — или коротко They're pens.",
        },
        {
          id: "z5-sopostavit-formy",
          kind: "match",
          prompt: "Сопоставь начало и продолжение.",
          left: ["It is", "They are", "I am"],
          right: ["a student.", "books.", "a key."],
          answer: [2, 1, 0],
          hint: "Смотри, об одном предмете речь или о нескольких.",
          why: "It is a key. They are books. I am a student.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "osobye-formy",
      title: "Особые формы: men, women, children",
      estimatedMinutes: 13,
      outcome: "называть людей во множественном числе: men, women, children, people",

      blocks: [
        {
          id: "zachem-osobye",
          kind: "explain",
          text: [
            "Несколько слов не подчиняются правилу вовсе: у них своя форма для нескольких, " +
              "и её приходится запоминать. Таких слов немного, но встречаются они постоянно.",
            "Man — мужчина, men — мужчины. Woman — женщина, women — женщины. Child — " +
              "ребёнок, children — дети.",
            // Было «поменялась вторая буква»: в woman — women меняется буква перед
            // n, четвёртая по счёту. Считать её второй можно, только мысленно
            // разложив слово на wo- и -man, а этого нигде не сказано.
            "Со звуком тут отдельная ловушка. На письме в woman — women поменялась одна " +
              "буква, та, что перед n: a на e. А на слух заметнее всего меняется первый " +
              "слог: /ˈwʊmən/ и /ˈwɪmɪn/. У child — children меняется и то и другое: " +
              "/tʃaɪld/ и /ˈtʃɪldrən/.",
          ],
        },
        {
          id: "tablica-osobyh",
          kind: "table",
          caption: "Четыре слова, которые надо запомнить",
          // Здесь звук важнее, чем в других таблицах модуля: man и men на
          // письме различает одна буква, а не окончание.
          zvuchat: ["a man", "men", "a woman", "women", "a child", "children", "a person",
            "people",
          ],
          head: ["Один", "Несколько", "Перевод"],
          rows: [
            ["a man", "men", "мужчина — мужчины"],
            ["a woman", "women", "женщина — женщины"],
            ["a child", "children", "ребёнок — дети"],
            ["a person", "people", "человек — люди"],
          ],
        },
        {
          id: "people-vsegda-mnogo",
          kind: "note",
          tone: "info",
          text:
            "People значит «люди» и само по себе стоит во множественном: They are people. " +
            "Прибавлять к нему s не нужно — оно уже про нескольких.",
        },
        {
          id: "s-k-osobym-ne-stavyat",
          kind: "note",
          tone: "mistake",
          text:
            "«Mans», «childs», «womans» — здесь общее правило не работает. У этих слов форма " +
            "своя, и буква s к ней не прибавляется.",
        },
        // Запись убрана: каждая пара звучит в таблице выше двумя кнопками.
        {
          id: "slovar-osobyh",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "man", translation: "мужчина", example: "He's a man.", hint: "/mæn/" },
            { term: "woman", translation: "женщина", example: "She's a woman.", hint: "/ˈwʊmən/" },
            { term: "child", translation: "ребёнок", example: "She's a child.", hint: "/tʃaɪld/" },
            { term: "people", translation: "люди", example: "They're people.", hint: "/ˈpiːpl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-forma-ot-child",
          kind: "choice",
          prompt: "Как сказать «дети»?",
          options: [{ text: "childs" }, { text: "children", correct: true }, { text: "childes" }],
          hint: "Форма своя, и на s она не оканчивается.",
          why: "Children. Общее правило к этому слову не применяют.",
        },
        {
          id: "z2-dopisat-women",
          kind: "gap",
          prompt: "Допиши слово «женщины» — от woman.",
          before: "They're ",
          after: ".",
          answer: "women",
          hint: "Пять букв. На письме меняется буква перед n, а в речи — первый слог.",
          why: "Women. Буква a в середине превратилась в e, а s не прибавилась.",
        },
        {
          id: "z3-otmetit-nevernye-formy",
          kind: "hottext",
          prompt: "Отметь слова, написанные с ошибкой.",
          parts: [
            { text: "men", selectable: true },
            { text: " · " },
            { text: "childs", selectable: true, correct: true },
            { text: " · " },
            { text: "people", selectable: true },
            { text: " · " },
            { text: "womans", selectable: true, correct: true },
          ],
          hint: "У этих слов буква s не прибавляется вовсе.",
          why: "Правильно children и women. Men и people записаны верно.",
        },
        {
          id: "z4-sopostavit-osobye",
          kind: "match",
          prompt: "Сопоставь одно и несколько.",
          left: ["a man", "a child", "a woman"],
          right: ["women", "men", "children"],
          answer: [1, 2, 0],
          hint: "У двух слов меняется гласная, у третьего — конец.",
          why: "A man — men, a child — children, a woman — women.",
        },
        {
          id: "z5-napisat-lyudi",
          kind: "short",
          prompt: "Напиши по-английски «люди».",
          answer: "people",
          hint: "Шесть букв, и это слово само по себе значит «много».",
          why: "People. Буква s к нему не прибавляется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "these-i-those",
      title: "These и those",
      estimatedMinutes: 12,
      outcome: "показывать на несколько предметов: these и those",

      blocks: [
        {
          id: "zachem-these",
          kind: "explain",
          text: [
            "This и that из модуля про предметы годятся только для одного предмета. Для " +
              "нескольких у них есть пара: these — «эти», those — «те».",
            "Расстояние прежнее: these о том, что рядом, those — о том, что подальше.",
          ],
        },
        {
          id: "tablica-these-those",
          kind: "table",
          caption: "Один и несколько, рядом и подальше",
          zvuchat: ["this book", "these books", "that car", "those cars", "What is this?",
            "What are these?", "What is that?", "What are those?",
          ],
          head: ["", "Один", "Несколько"],
          rows: [
            ["рядом", "this book", "these books"],
            ["подальше", "that car", "those cars"],
            ["рядом, само по себе", "What is this?", "What are these?"],
            ["подальше, само по себе", "What is that?", "What are those?"],
          ],
        },
        {
          id: "these-i-vopros",
          kind: "note",
          tone: "info",
          text:
            "В вопросе о нескольких меняется и форма be: What are these? — а не «What is " +
            "these?». Правило то же: несколько предметов — форма are.",
        },
        {
          id: "these-book-oshibka",
          kind: "note",
          tone: "mistake",
          text:
            "«These book» — изменение сделано наполовину. Если ставишь these, то и название " +
            "должно стоять во множественном: these books. Оба знака идут вместе.",
        },
        // Запись убрана: каждая пара звучит в таблице выше.

        // ---- задания ----
        {
          id: "z1-para-k-this",
          kind: "choice",
          prompt: "Какое слово — пара к this, когда предметов несколько?",
          options: [{ text: "those" }, { text: "these", correct: true }, { text: "they" }],
          hint: "Начинается с тех же букв, что и this.",
          why: "These. Those — пара к that, о том, что подальше.",
        },
        {
          id: "z2-dopisat-these",
          kind: "gap",
          prompt: "Допиши: «Это мои книги» — книги лежат рядом.",
          before: "",
          after: " are my books.",
          answer: "These",
          exact: true,
          hint: "С заглавной — слово открывает предложение.",
          why: "These are my books. Рядом и несколько — значит these.",
        },
        {
          id: "z3-otmetit-nepolnye",
          kind: "hottext",
          prompt: "Отметь строки, где изменение сделано наполовину.",
          parts: [
            { text: "these books", selectable: true },
            { text: " · " },
            { text: "these book", selectable: true, correct: true },
            { text: " · " },
            { text: "those cars", selectable: true },
            { text: " · " },
            { text: "those car", selectable: true, correct: true },
          ],
          hint: "Если слово указывает на несколько, то и название должно стоять во множественном.",
          why: "«These book» и «those car» — указательное слово во множественном, а название нет.",
        },
        {
          id: "z4-sopostavit-ukazatelnye",
          kind: "match",
          prompt: "Сопоставь слово и то, что оно показывает.",
          left: ["this", "these", "those"],
          right: ["несколько подальше", "один рядом", "несколько рядом"],
          answer: [1, 2, 0],
          hint: "Два слова из трёх — о нескольких предметах.",
          why: "This — один рядом, these — несколько рядом, those — несколько подальше.",
        },
        {
          id: "z5-sprosit-o-neskolkih",
          kind: "short",
          prompt: "Спроси о нескольких предметах, которые лежат рядом. Запиши вопрос целиком.",
          answer: "What are these?",
          exact: true,
          accept: ["What are these"],
          hint: "Форма be тоже меняется.",
          why: "What are these? Несколько предметов — значит are и these.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vopros-i-otricanie-o-neskolkih",
      title: "Вопрос и отрицание о нескольких",
      estimatedMinutes: 13,
      outcome: "строить вопрос и отрицание, когда предметов несколько",

      blocks: [
        {
          id: "zachem-vopros-mnozh",
          kind: "explain",
          text: [
            "Вопрос и отрицание строятся ровно так же, как в прежних модулях. Меняется " +
              "только форма be: вместо is стоит are.",
            "They are books → Are they books? → They aren't books. Всё остальное на своих " +
              "местах.",
          ],
        },
        {
          id: "tablica-vopros-mnozh",
          kind: "table",
          caption: "Три предложения об одном и о нескольких",
          zvuchat: ["It's a book.", "They're books.", "Is it a book?", "Are they books?",
            "It isn't a book.", "They aren't books.", "Yes, it is.", "Yes, they are.",
          ],
          head: ["", "Один", "Несколько"],
          rows: [
            ["сообщение", "It's a book.", "They're books."],
            ["вопрос", "Is it a book?", "Are they books?"],
            ["отрицание", "It isn't a book.", "They aren't books."],
            ["краткий ответ", "Yes, it is.", "Yes, they are."],
          ],
        },
        {
          id: "otvet-cherez-they",
          kind: "note",
          tone: "info",
          text:
            "В кратком ответе о нескольких предметах стоит they: Yes, they are. Про один " +
            "предмет там было it — как и раньше, отвечают тем местоимением, которое " +
            "подходит по числу.",
        },
        {
          id: "aren-t-znakomo",
          kind: "note",
          tone: "info",
          text:
            "Форма aren't знакома по модулю про отрицание — там она шла с you, we и they. " +
            "Теперь they может означать предметы, и форма остаётся той же.",
        },
        // Запись убрана: все четыре строки звучат в таблице выше.

        // ---- задания ----
        {
          id: "z1-sdelat-vopros-mnozh",
          kind: "short",
          prompt: "Сделай вопрос из «They are keys.»",
          answer: "Are they keys?",
          exact: true,
          accept: ["Are they keys"],
          hint: "Первые два слова меняются местами.",
          why: "Are they keys? Перестановка та же, что и с одним предметом.",
        },
        {
          id: "z2-otricanie-mnozh",
          kind: "gap",
          prompt: "Допиши отрицание: «Это не книги».",
          before: "They ",
          after: " books.",
          answer: "aren't",
          accept: ["are not"],
          hint: "Форма are с апострофом и not.",
          why: "They aren't books. Полная запись — They are not books.",
        },
        {
          id: "z3-kratkiy-otvet-mnozh",
          kind: "choice",
          prompt: "«Are they your keys?» Ключи твои. Ответь коротко.",
          options: [
            { text: "Yes, it is." },
            { text: "Yes, they are.", correct: true },
            { text: "Yes, these are." },
          ],
          hint: "Предметов несколько, значит и местоимение другое.",
          why:
            "Yes, they are. Ответ «Yes, it is» — об одном предмете, а «Yes, these are» " +
            "невозможно: в кратком ответе стоит they.",
        },
        {
          id: "z4-otmetit-o-neskolkih",
          kind: "hottext",
          prompt: "Отметь строки, в которых речь о нескольких предметах.",
          parts: [
            { text: "Are they books?", selectable: true, correct: true },
            { text: " · " },
            { text: "Is it a key?", selectable: true },
            { text: " · " },
            { text: "They aren't cars.", selectable: true, correct: true },
            { text: " · " },
            { text: "It isn't a pen.", selectable: true },
          ],
          hint: "Смотри на форму be и на окончание слова.",
          why:
            "О нескольких говорят are и aren't, и название стоит во множественном. Об " +
            "одном — is и isn't со словом a.",
        },
        {
          id: "z5-popravit-o-neskolkih",
          kind: "short",
          prompt: "«Are they pens?» На самом деле это карандаши. Ответь «нет» и скажи, что это. Нужно два предложения.",
          answer: "No, they aren't. They're pencils.",
          exact: true,
          accept: [
            "No, they aren't. They're pencils",
            "No, they are not. They are pencils.",
            "No, they are not. They are pencils",
          ],
          hint: "Оба предложения о нескольких предметах.",
          why: "No, they aren't. They're pencils. Артикль не нужен ни в одном из них.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-neskolkih",
      title: "Рассказ о нескольких предметах",
      estimatedMinutes: 14,
      outcome: "рассказывать о своих вещах и близких во множественном числе",

      blocks: [
        {
          id: "zachem-rasskaz-mnozh",
          kind: "explain",
          text: [
            "У тебя не одна книга, а десять, и не один друг, а трое. Теми же словами, что " +
              "об одном предмете, тут не обойтись: меняется название предмета, меняется " +
              "форма be, а артикль вовсе уходит.",
            "Рассказ тот же, что в модуле «Мои вещи», только во множественном числе: " +
              "I've got friends, These are my books.",
          ],
        },
        {
          id: "polnyy-rasskaz-mnozh",
          kind: "example",
          caption: "Рассказ целиком",
          text:
            "I'm Alim. I've got sisters. These are my books. Those aren't my books. " +
            "My friends are students.",
          zvuchat: [
            "I'm Alim. I've got sisters. These are my books. Those aren't my books. " +
              "My friends are students.",
          ],
          explain:
            "Сколько именно сестёр, здесь не сказано: числа идут в следующем модуле. " +
            "Книги рядом — These are my books, книги подальше — Those aren't my books. " +
            "Обрати внимание и на последнее предложение: friends во множественном, и форма " +
            "be тоже множественная — are.",
        },
        {
          id: "tablica-oborotov-mnozh",
          kind: "table",
          caption: "Обороты рассказа",
          zvuchat: ["I've got a friend.", "I've got friends.", "It's my book.",
            "These are my books.", "He is a student.", "They are students.",
          ],
          head: ["Оборот", "Один", "Несколько"],
          rows: [
            ["что есть", "I've got a friend.", "I've got friends."],
            ["чьё это", "It's my book.", "These are my books."],
            ["кто они", "He is a student.", "They are students."],
          ],
        },
        {
          id: "chto-teryayut-mnozh",
          kind: "note",
          tone: "mistake",
          text:
            "В длинном рассказе легко потерять одно из двух изменений: окончание s или " +
            "форму are. «They are book» и «They is books» — как раз такие случаи, и оба " +
            "заметны сразу.",
        },
        // Запись убрана: она слово в слово повторяла рассказ выше, а теперь сам рассказ и звучит.

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-mnozh",
          kind: "order",
          prompt: "Расставь рассказ по порядку: имя, кто у тебя есть, что рядом.",
          items: ["These are my books.", "I'm Alim.", "I've got friends."],
          answer: [1, 2, 0],
          hint: "Начни с имени.",
          why: "I'm Alim. I've got friends. These are my books.",
        },
        {
          id: "z2-otmetit-poteri-mnozh",
          kind: "hottext",
          prompt: "Отметь предложения с ошибкой.",
          parts: [
            { text: "They are books.", selectable: true },
            { text: " · " },
            { text: "They are book.", selectable: true, correct: true },
            { text: " · " },
            { text: "These are my keys.", selectable: true },
            { text: " · " },
            { text: "They is students.", selectable: true, correct: true },
          ],
          hint: "В одном предложении нет окончания, в другом не та форма be.",
          why:
            "«They are book» — нет окончания s. «They is students» — с they идёт are.",
        },
        {
          id: "z3-dopisat-o-druzyah",
          kind: "gap",
          prompt: "Допиши: «Мои друзья — студенты».",
          before: "My friends are ",
          after: ".",
          answer: "students",
          hint: "Слово во множественном числе, артикля перед ним нет.",
          why: "My friends are students. Оба слова во множественном, и артикль не нужен.",
        },
        {
          id: "z4-sopostavit-odin-mnogo",
          kind: "match",
          prompt: "Сопоставь предложение об одном и о нескольких.",
          left: ["It's my book.", "He is a student.", "I've got a friend."],
          right: ["They are students.", "I've got friends.", "These are my books."],
          answer: [2, 0, 1],
          hint: "Смотри, что стоит в начале каждого предложения.",
          why:
            "It's my book — These are my books. He is a student — They are students. " +
            "I've got a friend — I've got friends.",
        },
        {
          id: "z5-perepisat-rasskaz",
          kind: "short",
          prompt: "Перепиши во множественном числе: «It's my key.» Начни с These.",
          answer: "These are my keys.",
          exact: true,
          accept: ["These are my keys"],
          hint: "Меняются указательное слово, форма be и само название.",
          why: "These are my keys. Слово my остаётся, а к key прибавляется s.",
        },
        {
          id: "z6-rasskaz-vsluh",
          kind: "speak",
          prompt: "Расскажи вслух о себе: кто у тебя есть и какие вещи рядом. Говори о нескольких сразу.",
          phrase: "I've got ... . These are my ... .",
          translation: "У меня есть ... . Это мои ... .",
          hint: "Не забудь окончание s в обоих предложениях.",
          why: "Это весь модуль в одном упражнении: окончание, исчезновение a и форма are.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Первым в курсе он был, пока чтение не появилось в модулях
    // 1, 2, 4, 5 и 6 — там читают список, переписку, разговор и опись. Здесь
    // первый СВЯЗНЫЙ текст: раньше восьмого модуля такого не
    // построить — не из чего. Опора — `sources`, запись о Совете Европы.
    // =====================================================================
    {
      slug: "chitaem-spisok-veshchey",
      title: "Читаем список вещей",
      estimatedMinutes: 12,
      outcome: "находить в коротком объявлении, чего сколько и где это",

      blocks: [
        {
          id: "zachem-chitat-spisok",
          kind: "explain",
          text: [
            "Списки вещей встречаются чаще, чем кажется: объявление о находке, записка " +
              "от родных, ценник в витрине.",
            "Читать их подряд не нужно. Ищи в списке одну строку — ту, где стоит нужная " +
              "вещь, — и читай её до конца.",
          ],
        },
        {
          id: "obyavlenie-o-nahodke",
          kind: "text",
          genre: "notice",
          // Определённого артикля здесь НЕТ, и это не случайность: `the`
          // разбирается в модуле 10, а до него в курсе не встречается ни разу.
          // Сначала я поставил «in the shop» — методист поймал и заодно
          // показал, что на этом счёте держится обоснование урока об артикле.
          // Место называется так же, как на ценнике модуля 9: без артикля.
          title: "LOST AND FOUND",
          body: [
            "Keys — shop",
            "A camera — bus",
            "Books and pencils — room",
            "A watch — street",
          ],
          glossary: [
            { term: "LOST AND FOUND", translation: "бюро находок: где хранят потерянное" },
          ],
        },
        {
          // Врезка нарочно НЕ называет те вещи, о которых спрашивают задания:
          // сначала называла, и задание решалось чтением врезки, а объявление
          // можно было не открывать.
          id: "razbor-nahodki",
          kind: "note",
          tone: "info",
          text:
            "Строка объявления устроена так: сначала вещь, потом тире, потом место.\n" +
              "Присмотрись к первому слову каждой строки. Если на конце s — вещей " +
              "несколько. Если перед словом стоит a — она одна.",
        },
        {
          id: "zapiska-o-veshchah",
          kind: "text",
          genre: "message",
          title: "A message from Dana",
          body: [
            "Hi Alim! My books are in your bag. My pen and my pencil are in your bag too.",
            "That watch is not my watch. Sorry! Dana",
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-neskolko",
          kind: "choice",
          about: "obyavlenie-o-nahodke",
          prompt: "Прочитай объявление LOST AND FOUND. Каких вещей нашли несколько?",
          options: [
            { text: "Ключи и книги", correct: true },
            { text: "Камеру и часы" },
            { text: "Часы и ключи" },
          ],
          hint: "Несколько — это окончание s на конце слова.",
          why:
            "Keys и Books стоят с окончанием s, значит их больше одного. A camera и " +
            "A watch стоят с артиклем a — каждая одна.",
        },
        {
          id: "z2-gde-kamera",
          kind: "short",
          about: "obyavlenie-o-nahodke",
          prompt:
            "Прочитай объявление LOST AND FOUND. Где нашли камеру? Ответь английским " +
            "словом из объявления.",
          answer: "bus",
          hint: "Найди строку со словом camera и прочитай её до конца.",
          why: "A camera — bus. Камеру нашли в автобусе.",
        },
        {
          id: "z3-chto-v-sumke",
          kind: "choice",
          about: "zapiska-o-veshchah",
          prompt: "Прочитай записку от Даны. Что лежит в сумке у Алима?",
          options: [
            { text: "Книги, ручка и карандаш Даны", correct: true },
            { text: "Часы Даны" },
            { text: "Только книги Даны" },
          ],
          hint: "Второе предложение добавляет к первому ещё две вещи словом too.",
          why:
            "My books are in your bag. My pen and my pencil are in your bag too. " +
            "Слово too — «тоже», оно и добавляет ручку с карандашом.",
        },
        {
          id: "z4-chi-chasy",
          kind: "choice",
          about: "zapiska-o-veshchah",
          // Третий вариант убран: он был вторым верным прочтением. Про часы в
          // записке сказано, но не сказано, ЧЬИ они, — и ученик, выбравший
          // «не сказано», был прав по-своему. Нашёл методист.
          prompt: "Прочитай записку от Даны. Что Дана говорит про часы?",
          options: [
            { text: "Что они не её", correct: true },
            { text: "Что они её" },
            { text: "Что они у Алима в сумке" },
          ],
          hint: "Найди предложение со словом watch и посмотри, есть ли в нём not.",
          why:
            "That watch is not my watch. Дана говорит только одно: часы не её. Чьи " +
            "они и где лежат — в записке не сказано.",
        },
        {
          id: "z5-sobrat-stroku",
          kind: "order",
          about: "obyavlenie-o-nahodke",
          prompt: "Собери строку объявления о книгах и карандашах.",
          items: ["room", "Books and pencils", "—"],
          answer: [1, 2, 0],
          hint: "Порядок строки описан во врезке выше.",
          why:
            "Books and pencils — room. В объявлении сначала называют вещь, потом место " +
            "через тире.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-o-veshchah",
      title: "Слушаем про вещи",
      estimatedMinutes: 12,
      outcome: "понимать на слух, об одной вещи говорят или о нескольких",

      blocks: [
        {
          id: "zachem-slushat-veshchi",
          kind: "explain",
          text: [
            "На слух окончание s короткое и почти незаметное. Но именно оно отличает " +
              "одну вещь от нескольких.",
            "Помогает второе место, где слышна разница: форма be. Is — про одну вещь, " +
              "are — про несколько, и звучат они совсем по-разному.",
          ],
        },
        {
          id: "dva-mesta-na-sluh",
          kind: "table",
          caption: "Два места, где слышно число",
          // Урок слушания: обе записи ниже остаются, они и есть его предмет.
          // Кнопки у образцов добавлены вдобавок — прежде чем ловить число на
          // слух в потоке, полезно услышать пару отдельно.
          zvuchat: ["This is a book.", "These are books.", "It is my key.", "They are my keys.",
            "That is a box.", "Those are boxes.",
          ],
          head: ["Про одну", "Про несколько"],
          rows: [
            ["This is a book.", "These are books."],
            ["It is my key.", "They are my keys."],
            ["That is a box.", "Those are boxes."],
          ],
        },
        {
          id: "zapis-odna-ili-neskolko",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай три предложения",
          transcript: "These are my books. That is a camera. Those are boxes.",
        },
        {
          id: "zapis-razgovor-o-veshchah",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Are these your pencils? — No, they are not my pencils. " +
            "My pencils are in my bag. — And this pen? — Yes, it is my pen.",
        },

        // ---- задания ----
        {
          id: "z1-skolko-knig",
          kind: "choice",
          about: "zapis-odna-ili-neskolko",
          prompt: "Послушай первую запись. О книгах говорят как об одной вещи или о нескольких?",
          options: [
            { text: "О нескольких", correct: true },
            { text: "Об одной" },
            { text: "Про книги в записи не говорят" },
          ],
          hint: "Слушай форму be перед словом books.",
          why: "These are my books. Форма are и слово these — оба про несколько.",
        },
        {
          id: "z2-chto-odno",
          kind: "short",
          about: "zapis-odna-ili-neskolko",
          prompt:
            "Послушай первую запись. Какая вещь в ней одна? Ответь английским словом.",
          answer: "camera",
          accept: ["a camera"],
          hint: "Одна вещь идёт с формой is.",
          why: "That is a camera. Форма is и артикль a — оба про одну вещь.",
        },
        {
          id: "z3-chi-karandashi",
          kind: "choice",
          about: "zapis-razgovor-o-veshchah",
          prompt: "Послушай разговор. Чьи карандаши лежат перед собеседниками?",
          options: [
            { text: "Не того, кого спросили", correct: true },
            { text: "Того, кого спросили" },
            { text: "В разговоре это не выясняется" },
          ],
          hint: "Слушай ответ на первый вопрос: в нём есть not.",
          why:
            "No, they are not my pencils. My pencils are in my bag. Свои карандаши " +
            "у него в сумке, значит эти чужие.",
        },
        {
          id: "z4-pro-ruchku",
          kind: "choice",
          about: "zapis-razgovor-o-veshchah",
          prompt: "Послушай разговор. Что ответили про ручку?",
          options: [
            { text: "Что она не его" },
            { text: "Что она его", correct: true },
            { text: "Про ручку не спрашивали" },
          ],
          hint: "Последний ответ короткий и начинается с Yes.",
          why: "Yes, it is my pen. Форма it is — про одну вещь.",
        },
        {
          id: "z5-skazat-vsluh",
          kind: "speak",
          prompt:
            "Скажи вслух про свои вещи так, чтобы было ясно: их несколько. Начни с These.",
          phrase: "These are my books.",
          translation: "Это мои книги.",
          hint: "Форма are и окончание s должны прозвучать оба.",
          why:
            "These are my books. Слушающий понимает число по форме are, даже если " +
            "окончание s расслышал не полностью.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 18, спрашиваем восемь — по одному на каждый итог.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.8,
    questions: [
      // ---- чтение и слушание ------------------------------------------
      // ПЕРЕПИСАНЫ ПОСЛЕ МЕТОДИСТА. Первый вопрос повторял задание урока почти
      // дословно — тот же набор вещей, тот же вопрос, тот же разбор. Второй
      // требовал исправить форму слова и никакого объявления не содержал,
      // хотя помечен итогом чтения: ученик закрывал этот итог, ничего не
      // прочитав.
      {
        id: "q-zapiska-gde-veshchi",
        kind: "short",
        outcome: "находить в коротком объявлении, чего сколько и где это",
        prompt:
          "Записка: «Hi! My pens are in my room. My bag is in your car. Dana». " +
          "Где лежит сумка? Ответь английским словом из записки.",
        answer: "car",
        accept: ["your car"],
        why: "My bag is in your car. Сумка в машине, а ручки в комнате.",
      },
      {
        id: "q-zapiska-chego-neskolko",
        kind: "choice",
        outcome: "находить в коротком объявлении, чего сколько и где это",
        prompt:
          "Та же записка: «My pens are in my room. My bag is in your car». " +
          "Чего у Даны несколько?",
        options: [
          { text: "Сумок" },
          { text: "Ручек", correct: true },
          { text: "И сумок, и ручек" },
        ],
        why:
          "My pens are — окончание s и форма are, ручек несколько. My bag is — форма " +
          "is, сумка одна.",
      },
      {
        id: "q-na-sluh-odna-ili-mnogo",
        kind: "choice",
        outcome: "понимать на слух, об одной вещи говорят или о нескольких",
        zvuk: "This is my bag. Those are my keys.",
        prompt: "Послушай запись. О чём говорят как о нескольких вещах?",
        options: [
          { text: "О ключах", correct: true },
          { text: "О сумке" },
          { text: "И о сумке, и о ключах" },
        ],
        why:
          "This is my bag — форма is, вещь одна. Those are my keys — форма are, " +
          "вещей несколько.",
      },
      {
        id: "q-na-sluh-chto-nazvali",
        kind: "short",
        outcome: "понимать на слух, об одной вещи говорят или о нескольких",
        zvuk: "Are these your pencils? — No, these are my pens.",
        prompt:
          "Послушай запись. Что оказалось на самом деле? Ответь английским словом во " +
          "множественном числе.",
        answer: "pens",
        accept: ["my pens", "pens."],
        why: "No, these are my pens. Спрашивали про карандаши, а это ручки.",
      },
      {
        id: "q-okonchanie-mnozh",
        kind: "short",
        outcome: "говорить о нескольких вещах сразу: books, keys, cars",
        prompt: "Напиши по-английски «машины» — от car.",
        answer: "cars",
        why: "Cars. К слову car прибавилась s.",
      },
      {
        id: "q-otmetit-mnozh",
        kind: "hottext",
        outcome: "говорить о нескольких вещах сразу: books, keys, cars",
        prompt: "Отметь строки, где о предметах сказано верно.",
        parts: [
          { text: "a bags", selectable: true },
          { text: " · " },
          { text: "my bags", selectable: true, correct: true },
          { text: " · " },
          { text: "a bag", selectable: true, correct: true },
          { text: " · " },
          { text: "a friends", selectable: true },
        ],
        why:
          "«My bags» и «a bag» построены верно. В «a bags» и «a friends» артикль стоит " +
          "перед словом с окончанием s — так не бывает.",
      },
      {
        id: "q-es-ili-s",
        kind: "gap",
        outcome: "прибавлять es там, где одной буквы s мало: boxes, buses",
        prompt: "Допиши слово «автобусы» — от bus.",
        before: "They're ",
        after: ".",
        answer: "buses",
        why: "Buses. Слово оканчивается на s, поэтому прибавляется es.",
      },
      {
        id: "q-gde-nuzhna-es",
        kind: "choice",
        outcome: "прибавлять es там, где одной буквы s мало: boxes, buses",
        prompt: "К какому слову нужна es?",
        options: [{ text: "book" }, { text: "watch", correct: true }, { text: "key" }],
        why: "Watch оканчивается на ch, поэтому watches. Book и key берут обычную s.",
      },
      {
        id: "q-a-lishnee",
        kind: "choice",
        outcome: "говорить о нескольких предметах без артикля: They're books",
        prompt: "В какой строке артикль лишний?",
        // «A books» стояло образцом ошибки в задании урока. Взято другое слово.
        options: [
          { text: "a pen" },
          { text: "my keys" },
          { text: "a friends", correct: true },
        ],
        why: "«A friends» — a обещает одного, а s говорит, что их несколько.",
      },
      {
        id: "q-perepisat-bez-a",
        kind: "short",
        outcome: "говорить о нескольких предметах без артикля: They're books",
        prompt: "Перепиши во множественном числе: «It's a bag.» Начни с They're.",
        answer: "They're bags.",
        exact: true,
        accept: ["They're bags", "They are bags.", "They are bags"],
        why: "They're bags. Артикль ушёл, прибавилась s, форма be сменилась.",
      },
      {
        id: "q-forma-be-mnozh",
        kind: "gap",
        outcome: "выбирать форму be по числу: It is — They are",
        prompt: "Допиши форму глагола: «Мои друзья — студенты».",
        before: "My friends ",
        after: " students.",
        answer: "are",
        why: "My friends are students. Друзей несколько, значит форма are.",
      },
      {
        id: "q-nesoglasovanie",
        kind: "choice",
        outcome: "выбирать форму be по числу: It is — They are",
        prompt: "В какой строке форма be не подходит?",
        options: [
          { text: "They are cars." },
          { text: "It is a pen." },
          { text: "They is books.", correct: true },
        ],
        why: "«They is books» — с they идёт are.",
      },
      {
        id: "q-osobaya-forma",
        kind: "short",
        outcome: "называть людей во множественном числе: men, women, children, people",
        prompt: "Напиши по-английски «мужчины» — от man.",
        answer: "men",
        accept: ["Men"],
        why: "Men. Форма своя: буква s к слову man не прибавляется, меняется гласная.",
      },
      {
        id: "q-otmetit-osobye",
        kind: "hottext",
        outcome: "называть людей во множественном числе: men, women, children, people",
        prompt: "Отметь слова, написанные с ошибкой.",
        // Верные слова были те же, что в задании урока: men и people. Ученик помнил
        // их как безопасные и отмечал остальные, не читая. Взяты другие верные формы.
        parts: [
          { text: "women", selectable: true },
          { text: " · " },
          { text: "mans", selectable: true, correct: true },
          { text: " · " },
          { text: "children", selectable: true },
          { text: " · " },
          { text: "peoples", selectable: true, correct: true },
        ],
        why: "Правильно women и children. К ним s не прибавляется, и к people тоже.",
      },
      {
        id: "q-these-ili-this",
        kind: "gap",
        outcome: "показывать на несколько предметов: these и those",
        prompt: "Машины стоят вдалеке, их несколько. Допиши указательное слово.",
        before: "",
        after: " are my cars.",
        answer: "Those",
        exact: true,
        why: "Those are my cars. Вдалеке и несколько — значит those.",
      },
      {
        id: "q-nepolnoe-izmenenie",
        kind: "choice",
        outcome: "показывать на несколько предметов: these и those",
        prompt: "Книги лежат рядом, их несколько. Как сказать о них верно?",
        options: [
          { text: "this books" },
          { text: "these books", correct: true },
          { text: "these book" },
        ],
        why:
          "These books. «This books» — указательное слово от одного предмета, «these book» — " +
          "название от одного. Оба знака идут вместе.",
      },
      {
        id: "q-vopros-mnozh",
        kind: "short",
        outcome: "строить вопрос и отрицание, когда предметов несколько",
        prompt: "Сделай вопрос из «They are your bags.»",
        answer: "Are they your bags?",
        exact: true,
        accept: ["Are they your bags"],
        why: "Are they your bags? Первые два слова поменялись местами.",
      },
      {
        id: "q-kratkiy-otvet-mnozh",
        kind: "choice",
        outcome: "строить вопрос и отрицание, когда предметов несколько",
        prompt: "«Are they books?» Это правда. Ответь коротко.",
        options: [
          { text: "Yes, these are." },
          { text: "Yes, they are.", correct: true },
          { text: "Yes, it is." },
        ],
        why: "Yes, they are. В кратком ответе о нескольких предметах стоит they.",
      },
      {
        id: "q-rasskaz-mnozh",
        kind: "order",
        outcome: "рассказывать о своих вещах и близких во множественном числе",
        prompt: "Расставь рассказ по порядку.",
        items: ["My friends are students.", "I'm Dana.", "I've got friends."],
        answer: [1, 2, 0],
        why:
          "I'm Dana. I've got friends. My friends are students. Сначала имя, потом кто " +
          "есть, потом кто они.",
      },
      {
        id: "q-perepisat-vo-mnozh",
        kind: "short",
        outcome: "рассказывать о своих вещах и близких во множественном числе",
        prompt: "Перепиши во множественном числе: «It's my pen.» Начни с These.",
        answer: "These are my pens.",
        exact: true,
        accept: ["These are my pens"],
        why: "These are my pens. Слово my остаётся, к pen прибавляется s.",
      },
      {
        id: "q-otricanie-mnozh-quiz",
        kind: "gap",
        outcome: "строить вопрос и отрицание, когда предметов несколько",
        prompt: "Допиши отрицание: «Это не машины».",
        before: "They ",
        after: " cars.",
        answer: "aren't",
        accept: ["are not"],
        why: "They aren't cars — или полностью They are not cars. Засчитываются обе записи.",
      },
      {
        id: "q-lyudi-po-angliyski",
        kind: "choice",
        outcome: "называть людей во множественном числе: men, women, children, people",
        prompt: "Как по-английски «люди»?",
        options: [{ text: "peoples" }, { text: "man" }, { text: "people", correct: true }],
        why: "People. Прибавлять s к этому слову не нужно, оно и так о нескольких. Man — один мужчина.",
      },
    ],
  },
};

export default module;
