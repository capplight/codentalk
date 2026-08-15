import type { Module } from "@/lib/content/types";

/**
 * Модуль 11 курса «Английский с нуля»: какой он.
 *
 * Программа: docs/programma-english-starter.md, модуль 11 — «описывать предметы
 * и людей, называть цвет»; грамматика: прилагательные перед существительным и
 * после `be`; `very`; соединение двух прилагательных через `and`.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ (English Grammar Profile, все четыре — A1):
 *
 * — ADJECTIVES position «FORM: PREDICATIVE, WITH 'BE'» — признак после be;
 * — ADJECTIVES position «FORM: ATTRIBUTIVE (WITH NOUNS)» — признак перед
 *   названием, пример источника «We have a big garden and a small swimming pool»;
 * — ADJECTIVES modifying «FORM: WITH 'VERY'» и ADVERBS «FORM: 'VERY' +
 *   ADJECTIVES»;
 * — ADJECTIVES combining «FORM: COMBINING TWO ADJECTIVES WITH 'AND'», пример
 *   источника «The teachers are very nice and friendly».
 *
 * Отдельная строка A1 закрывает и порядок с артиклем: DETERMINERS articles
 * «FORM: 'A' + 'VERY' + ADJECTIVES», пример источника «He's a very good man».
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ:
 *
 * — настоящего простого времени (модуль 14): «мне нравится синий» сказать
 *   нельзя, поэтому любимое называется через be — `My favourite colour is blue`;
 * — сравнения (bigger, the biggest): в English Grammar Profile сравнительная
 *   степень стоит на A2, а программа отводит ей отдельное место позже;
 * — оборота `there is` (модуль 13) и предлогов места (модуль 12).
 *
 * РАСХОЖДЕНИЕ С ПРОГРАММОЙ, ЗАПИСАНО ЧЕСТНО: программа отдаёт «прилагательное +
 * существительное во множественном» модулю 8, но прилагательных там нет вовсе —
 * они появляются только здесь. Поэтому правило «прилагательное во множественном
 * не меняется» разбирается в этом модуле, во втором уроке.
 *
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
 *
 * МОДУЛЬ ПРИНЯТ: скрипт, редактор, методист. Полный перечень найденного —
 * docs/zadachi-vladeltsa.md, п. 1.20. Три вещи стоит помнить прямо здесь:
 *
 * 1. Два прилагательных подряд (`a very old grey car`) СНЯТЫ. Методист нашёл
 *    источник, которого я не нашёл: два прилагательных перед названием — A2,
 *    порядок их типов — B1, и в перечне A2 Key он стоит отдельной строкой.
 *    Строка A1 про «a very good man» закрывает ОДНО прилагательное, не два.
 *
 * 2. Обороты `What's ... like?` и `Who's that?` СНЯТЫ: все A2, а слово `who`
 *    в курсе не вводилось ни разу. Заменены на вопрос с `be` из модуля 4.
 *
 * 3. Определённый артикль: в модуле 121 вхождение, почти все — предложения
 *    вида `The house is big`, где the стоит при первом упоминании. Разбирается
 *    он в модуле 10, урок «A и the»; врезка `pochemu-the-i-a` показывает, как
 *    правило оттуда работает здесь. Блокер п. 1.18 закрыт.
 */
const module: Module = {
  slug: "kakoy-on",
  title: "Какой он",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "ВСЁ СВОЕЙ СТУПЕНИ, A1: " +
        "ADJECTIVES position «FORM: PREDICATIVE, WITH 'BE'»: «Can use a limited range of " +
        "adjectives predicatively, after 'be'», пример источника — «I like my home because " +
        "my bedroom is big». " +
        "ADJECTIVES position «FORM: ATTRIBUTIVE (WITH NOUNS)»: «Can use a limited range of " +
        "adjectives attributively, before a noun», пример — «We have a big garden and a " +
        "small swimming pool». " +
        "ADJECTIVES modifying «FORM: WITH 'VERY'»: «Can use 'very' with a limited range of " +
        "common gradable adjectives». То же с двух сторон: ADVERBS as modifiers «FORM: " +
        "'VERY' + ADJECTIVES» и ADVERBS position «FORM: DEGREE, BEFORE ADJECTIVES». " +
        "ADJECTIVES combining «FORM: COMBINING TWO ADJECTIVES WITH 'AND'», пример — «The " +
        "teachers are very nice and friendly». " +
        "DETERMINERS articles «FORM: 'A' + 'VERY' + ADJECTIVES», пример — «He's a very good " +
        "man»: отсюда порядок «артикль, very, признак, название». " +
        "СВЕРХ СТУПЕНИ, ОДИН ПУНКТ: вопрос «What colour is it?» — QUESTIONS wh- «FORM: MAIN " +
        "VERB 'BE'», A2. Взят по решению 1 программы, как where в модуле 3 и when в " +
        "модуле 10. " +
        "ПУСТОЕ it здесь не нужно: в «It's red» слово it показывает на предмет, как в " +
        "модуле 6, — это указательное it ступени A1, а не пустое it о времени. " +
        "A1, NOUNS noun phrases «FORM: ADJECTIVE + PLURAL NOUN»: «Can form simple noun " +
        "phrases by pre-modifying plural nouns with an adjective and no determiner», " +
        "пример источника — «I have new neighbours». Отсюда врезка о том, что признак во " +
        "множественном не меняется. Строку нашёл методист: блок и два задания на ней " +
        "держались, а в источниках её не было. " +
        "ЧЕГО НЕТ И ПОЧЕМУ СНЯТО: два прилагательных подряд перед названием — A2, NOUNS " +
        "noun phrases «FORM: NOUN PHRASES WITH ADJECTIVES», пример источника «I bought a " +
        "beautiful pink skirt». Порядок типов прилагательных — B1, ADJECTIVES combining, " +
        "графа «FORM: BEFORE THE NOUN»: «Can use a comma to combine two adjectives used " +
        "before the noun, following the usual order of adjective types». Оговорка: строка " +
        "описывает запятую между прилагательными, а не порядок сам по себе — но порядок " +
        "типов во всём источнике называет только она, и стоит она на B1. Строка " +
        "A1 про «a very good man» закрывает артикль, very и ОДНО прилагательное, а двух " +
        "подряд не закрывает. Врезка и два задания об этом сняты. " +
        "ОПРЕДЕЛЁННЫЙ АРТИКЛЬ: в модуле 114 предложений вида The house is big. По ступени " +
        "вопросов нет — DETERMINERS articles «FORM: WITH NOUNS», A1, покрывает the " +
        "наравне с a и an. В таблице урока 2 the и a стоят бок о бок. " +
        "Разбирается он в модуле 10, урок «A и the»: the стоит потому, что дом — тот " +
        "самый, о котором речь. Блокер п. 1.18 закрыт. " +
        "ЧЕГО НЕТ НАМЕРЕННО: сравнительная и превосходная степень — A2 (ADJECTIVES " +
        "comparatives и superlatives), в модуле не встречается ни разу",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1, дословно: «Can name the colour of clothes or " +
        "other familiar objects and can ask the colour of such objects» — это точное " +
        "описание урока 3 и его итога, слово в слово. ГЛАВНАЯ ОПОРА МОДУЛЯ. Нашёл " +
        "методист: раньше её здесь не было вовсе. " +
        "с. 63, Sustained monologue, A1: «Can describe simple aspects of their everyday " +
        "life in a series of simple sentences, using simple words/signs and basic " +
        "phrases» — отсюда описание тремя предложениями в уроке 8. " +
        "ЧЕСТНАЯ ОГОВОРКА, НАЙДЕННАЯ МЕТОДИСТОМ: описание ЧУЖИХ предметов и людей " +
        "(машины, сумки, Даны) стоит на A2 — та же с. 63: «Can describe people, places " +
        "and possessions in simple terms». Строки A1, которые я цитировал раньше («Can " +
        "describe themselves…»), описывают рассказ О СЕБЕ и модуль не держат. Модуль " +
        "стоит между Pre-A1 и A1 по тому же основанию, что и модуль 3",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 51, «Inventory of functions, notions and communicative tasks», дословно: " +
        "«describing people (personal appearance, qualities)» — отсюда урок 6; и " +
        "«identifying and describing simple objects (shape, size, weight, colour, purpose " +
        "or use, etc.)» — отсюда уроки 1, 2 и 8. " +
        "с. 52, «Inventory of grammatical areas», раздел Adjectives, дословно три строки: " +
        "«Colour, size, shape, quality, nationality», «Predicative and attributive», " +
        "«Order of adjectives». Первые две — прямая опора уроков 1–3. Третья — причина, " +
        "по которой два прилагательных подряд из модуля СНЯТЫ: их порядок стоит в " +
        "инвентаре A2, а не ниже. " +
        "ИСПРАВЛЕНО ПОСЛЕ ПРОВЕРКИ МЕТОДИСТОМ: раньше здесь стояли две ссылки, которых в " +
        "источнике нет вовсе, — «describing things» (ноль совпадений по всем 55 " +
        "страницам) и «с. 52, Colour: red, blue, etc.». Обе выдуманы мною; настоящие " +
        "строки, приведённые выше, к делу ближе. " +
        "Виды заданий взяты по образцу разделов Reading and Writing того же руководства",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 75, образец A2 Flyers: «In my picture the clock is square but in your picture " +
        "the clock is round» — образец описания предмета через признак после be. " +
        "с. 79, тематический список «Colours», столбец PRE A1 STARTERS, дословно: «black, " +
        "blue, brown, colour (US color), gray (UK grey), green, grey (US gray), orange, " +
        "pink, purple, red, white, yellow». Отсюда СРАЗУ ДВА: состав цветов урока 3 и " +
        "британское написание — источник сам помечает colour и grey как британские, а " +
        "color и gray как американские. Раньше врезки о написании держались только на " +
        "решении владельца. " +
        "с. 13, Pre A1 Starters Listening Part 4: «Range of colours is: black, blue, " +
        "brown, green, grey, orange, pink, purple, red, yellow». " +
        "ИСПРАВЛЕНО: раньше здесь стояли страницы 81 и 83 — на них разделы The home, " +
        "Numbers, Places, Time, а цветов нет. Номер был перенесён из модуля 10, где с. 83 " +
        "действительно раздел Time. Нашёл методист. " +
        "ОГОВОРКА ТА ЖЕ, ЧТО В МОДУЛЕ 10 (docs/zadachi-vladeltsa.md, п. 1.19): " +
        "тематические списки Cambridge и Oxford 3000 расходятся в ступени части слов. " +
        "Модуль держится Oxford 3000",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "проверено построчно, все A1: colour, red, blue, green, yellow, white, brown, " +
        "orange, pink, grey, black; big, small, new, old, long, short, tall, young, nice, " +
        "good, bad, hot, cold, clean, beautiful, expensive, cheap, easy, difficult, " +
        "interesting, favourite, very. " +
        "БРИТАНСКОЕ НАПИСАНИЕ: colour, а не color; grey, а не gray; favourite, а не " +
        "favorite. Oxford 3000 даёт именно эти формы. " +
        "ЧЕГО НЕ ВЗЯЛ: friendly (A2), lovely (B1), pretty (A2) — хотя пример источника в " +
        "English Grammar Profile построен на friendly",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e, конечный безударный через ə, слоговой согласный без ə " +
        "(CLAUDE.md, раздел о британской норме). " +
        "ИСКЛЮЧЕНИЕ ТОГО ЖЕ РЯДА, ЧТО student: difficult — /ˈdɪfɪkəlt/, гласный слышен и " +
        "в словарях стоит",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить, какой предмет: The house is big",
    "ставить прилагательное перед названием предмета: a big house",
    "называть цвет предмета и спрашивать о цвете",
    "усиливать прилагательное словом very",
    "соединять два прилагательных словом and",
    "описывать человека: tall, young, nice",
    "называть любимое: my favourite colour is blue",
    "описывать предмет и человека тремя предложениями",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "priznak-posle-be",
      title: "Какой предмет: big, new, old",
      estimatedMinutes: 13,
      outcome: "говорить, какой предмет: The house is big",

      blocks: [
        {
          id: "zachem-priznak",
          kind: "explain",
          text: [
            "Ты показываешь на дом и говоришь: It's a house. Собеседник кивает: дом он " +
              "увидел. А какой этот дом — большой, новый, дорогой — из твоих слов не " +
              "понять.",
            "Для этого есть отдельные слова: big — «большой», new — «новый», " +
              "expensive — «дорогой». Такие слова отвечают на вопрос «какой?», и " +
              "называют их прилагательными.",
            "Ставят их после формы be — там же, где раньше стояло название занятия. " +
              "В I'm a student на этом месте student, в The house is big — big.",
          ],
        },
        {
          id: "tablica-priznakov",
          kind: "table",
          caption: "Прилагательное после формы be",
          head: ["Предложение", "Перевод", "Какое слово"],
          rows: [
            ["The house is big.", "Дом большой.", "big"],
            ["The book is new.", "Книга новая.", "new"],
            ["My car is old.", "Моя машина старая.", "old"],
            ["The water is cold.", "Вода холодная.", "cold"],
          ],
        },
        {
          id: "priznak-ne-menyaetsya",
          kind: "note",
          tone: "mistake",
          text:
            "Русское прилагательное меняется вместе с предметом: «дом большой», «книга " +
            "большая», «окно большое». Английское не меняется никогда: big, big и ещё " +
            "раз big. The house is big. The book is big. The window is big.",
        },
        {
          id: "slova-priznakov",
          kind: "table",
          caption: "Шесть пар слов",
          head: ["Слово", "Перевод", "Пара к нему"],
          rows: [
            ["big", "большой", "small — маленький"],
            ["new", "новый", "old — старый"],
            ["long", "длинный", "short — короткий"],
            ["hot", "горячий", "cold — холодный"],
            ["good", "хороший", "bad — плохой"],
            ["expensive", "дорогой", "cheap — дешёвый"],
          ],
        },
        {
          id: "primer-priznaka",
          kind: "example",
          caption: "Два предмета подряд",
          text:
            "— What's this?\n— It's a book. It's new.\n— And that?\n— It's a car. It's old.",
          explain:
            "Сначала называют предмет, потом говорят, какой он. Двумя короткими предложениями. " +
            "Во фразе It's new слово it показывает на ту же книгу, которую только что " +
            "назвали.",
        },
        {
          id: "zapis-priznakov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай слова парами",
          transcript:
            "Big. Small. New. Old. Long. Short. Hot. Cold. Good. Bad. Expensive. Cheap.",
        },
        {
          id: "slovar-priznakov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "big", translation: "большой", example: "The house is big.", hint: "/bɪg/" },
            { term: "small", translation: "маленький", example: "The room is small.", hint: "/smɔːl/" },
            { term: "new", translation: "новый", example: "My car is new.", hint: "/njuː/" },
            // old и good стоят в таблице пар и нужны заданиям, а в словаре их
            // не было: ученик, который учит по словарю, этих слов не получал.
            { term: "old", translation: "старый", example: "The car is old.", hint: "/əʊld/" },
            { term: "good", translation: "хороший", example: "It's a good book.", hint: "/gʊd/" },
            { term: "long", translation: "длинный", example: "The word is long.", hint: "/lɒŋ/" },
            { term: "short", translation: "короткий", example: "The name is short.", hint: "/ʃɔːt/" },
            { term: "hot", translation: "горячий", example: "The tea is hot.", hint: "/hɒt/" },
            { term: "cold", translation: "холодный", example: "The water is cold.", hint: "/kəʊld/" },
            { term: "bad", translation: "плохой", example: "The day is bad.", hint: "/bæd/" },
            { term: "expensive", translation: "дорогой", example: "The car is expensive.", hint: "/ɪkˈspensɪv/" },
            { term: "cheap", translation: "дешёвый", example: "The pen is cheap.", hint: "/tʃiːp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-priznak",
          kind: "gap",
          prompt: "Допиши слово: чай горячий.",
          before: "The tea is ",
          after: ".",
          answer: "hot",
          hint: "Есть в словаре урока, в паре со словом cold.",
          why: "The tea is hot. Прилагательное стоит после формы be и ничего к себе не прибавляет.",
        },
        {
          id: "z2-para-k-slovu",
          kind: "match",
          prompt: "Сопоставь слово и его пару.",
          left: ["big", "new", "expensive"],
          right: ["cheap", "small", "old"],
          answer: [1, 2, 0],
          hint: "В каждой паре слова противоположны по смыслу.",
          why: "Big — small, new — old, expensive — cheap.",
        },
        {
          id: "z3-priznak-ne-menyaetsya",
          kind: "hottext",
          prompt: "Отметь записи, где к прилагательному прибавили лишнее окончание.",
          parts: [
            { text: "The book is big.", selectable: true },
            { text: " · " },
            { text: "The car is newy.", selectable: true, correct: true },
            { text: " · " },
            { text: "The room is smalls.", selectable: true, correct: true },
            { text: " · " },
            { text: "The tea is cold.", selectable: true },
          ],
          hint: "Английское прилагательное не меняется, о каком бы предмете ни шла речь.",
          why:
            "Newy и smalls — придуманные формы. Верно new и small: прилагательное остаётся " +
            "таким, каким стоит в словаре.",
        },
        {
          id: "z4-sobrat-predlozhenie",
          kind: "order",
          prompt: "Собери предложение: «Машина старая».",
          items: ["old", "car", "is", "The"],
          answer: [3, 1, 2, 0],
          hint: "Сначала то, о чём речь, потом форма be, потом прилагательное.",
          why:
            "The car is old. Порядок тот же, что и во всех предложениях с be: сначала то, " +
            "о чём речь, потом форма be, потом прилагательное.",
        },
        {
          id: "z5-opisat-dva",
          kind: "short",
          prompt: "Ручка дешёвая. Запиши предложение целиком, начни с The pen.",
          answer: "The pen is cheap.",
          exact: true,
          accept: ["The pen is cheap"],
          hint: "Образец есть в таблице урока, замени предмет и прилагательное.",
          why: "The pen is cheap. Форма is идёт с одним предметом, прилагательное — после неё.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pered-nazvaniem",
      title: "Перед названием: a big house",
      estimatedMinutes: 14,
      outcome: "ставить прилагательное перед названием предмета: a big house",

      blocks: [
        {
          id: "zachem-pered",
          kind: "explain",
          text: [
            "Прилагательное можно поставить и в другое место — прямо перед названием предмета: " +
              "a big house, «большой дом». Смысл тот же, что у The house is big.",
            "Но это уже не целое предложение, а часть. Она встаёт туда, где раньше стояло " +
              "одно название: It's a house → It's a big house.",
            "Порядок жёсткий: сначала артикль, потом прилагательное, потом название. " +
              "A big house — и никак иначе.",
          ],
        },
        {
          id: "tablica-pered",
          kind: "table",
          caption: "Два способа сказать одно",
          head: ["После be", "Перед названием"],
          rows: [
            ["The house is big.", "a big house"],
            ["The book is new.", "a new book"],
            ["The car is old.", "an old car"],
            ["The room is small.", "a small room"],
          ],
        },
        {
          // Методист нашёл это первым: the и a стоят в таблице бок о бок, а
          // разницы курс не объяснял нигде. Теперь объясняет — модуль «Дни,
          // даты, время», урок «A и the». Здесь остаётся напоминание.
          id: "pochemu-the-i-a",
          kind: "note",
          tone: "info",
          text:
            "В левом столбце таблицы стоит the, в правом — a. Разница разобрана в модуле " +
            "«Дни, даты, время», в уроке «A и the».\n\nКоротко: the говорит, что предмет уже " +
            "известен и тебе, и собеседнику. В The house is big это тот самый дом, на " +
            "который вы смотрите, — потому the и стоит с первого слова.\n\nС артиклем a " +
            "предмет называют впервые: a big house — какой-то большой дом.",
        },
        {
          id: "artikl-smotrit-na-priznak",
          kind: "note",
          tone: "mistake",
          text:
            "Смотри третью строку таблицы: an old car, а не a old car.\n\n" +
            "Правило то же, что в модуле «Рассказ о себе»: a ставят перед согласным " +
            "звуком, an — перед гласным. Смотрят при этом на слово сразу за артиклем.\n\n" +
            "Раньше сразу за артиклем стояло название предмета: a car. Теперь между " +
            "артиклем и названием встало прилагательное, и артикль выбирают по нему. Old " +
            "начинается с гласного звука — значит an old car.",
        },
        {
          id: "priznak-i-mnozhestvennoe",
          kind: "note",
          tone: "info",
          text:
            "Во множественном числе прилагательное тоже не меняется: big houses, new books, " +
            "old cars. Окончание -s достаётся только названию предмета. Артикль при этом " +
            "уходит, как в модуле «Один и много».",
        },
        {
          id: "primer-pered",
          kind: "example",
          caption: "В разговоре",
          text:
            "— What's this?\n— It's a new book.\n— And that?\n— It's an old car.",
          explain:
            "Прилагательное встало внутрь ответа: It's a new book вместо It's a book. It's new. " +
            "Одно предложение вместо двух.",
        },
        {
          id: "zapis-pered",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай слова перед названием",
          transcript:
            "A big house. A new book. An old car. A small room. Big houses. New books.",
        },

        // ---- задания ----
        {
          id: "z1-a-ili-an",
          // Раньше это был выбор из трёх, где третьим стоял русский вариант
          // «артикль не нужен» — он не верен ни разу во всём модуле и виден
          // глазом среди двух английских. Нашёл методист. Теперь ученик пишет.
          kind: "short",
          prompt: "Запиши целиком, вместе с артиклем: старая книга.",
          answer: "an old book",
          accept: ["An old book"],
          hint: "Смотри на первый звук слова, которое идёт сразу после артикля.",
          why:
            "An old book. Артикль смотрит на слово old, а оно начинается с гласного " +
            "звука. Название book здесь уже ни при чём.",
        },
        {
          id: "z2-perestroit",
          kind: "short",
          prompt: "Скажи то же самое иначе: «The house is big.» Начни с It's.",
          answer: "It's a big house.",
          exact: true,
          accept: ["It's a big house", "It is a big house.", "It is a big house"],
          hint: "Прилагательное встаёт между артиклем и названием.",
          why:
            "It's a big house. Порядок такой: артикль, прилагательное, название предмета.",
        },
        {
          id: "z3-otmetit-poryadok",
          kind: "hottext",
          prompt: "Отметь записи с неверным порядком слов.",
          parts: [
            { text: "a new car", selectable: true },
            { text: " · " },
            { text: "a car new", selectable: true, correct: true },
            { text: " · " },
            { text: "big a house", selectable: true, correct: true },
            { text: " · " },
            { text: "an old book", selectable: true },
          ],
          hint: "Порядок один: артикль, прилагательное, название.",
          why:
            "«A car new» и «big a house» построены не в том порядке. Верно a new car и " +
            "a big house.",
        },
        {
          id: "z4-mnozhestvennoe-s-priznakom",
          kind: "gap",
          prompt: "Допиши название во множественном числе: «новые книги».",
          before: "new ",
          after: "",
          answer: "books",
          hint: "Окончание достаётся только названию предмета.",
          why:
            "New books. К прилагательному -s не прибавляют: оно остаётся new и при одной " +
            "книге, и при десяти.",
        },
        {
          id: "z5-sobrat-s-artiklem",
          kind: "order",
          prompt: "Собери: «дорогая машина».",
          items: ["car", "expensive", "an"],
          answer: [2, 1, 0],
          hint: "Первым идёт артикль, и он выбран по слову expensive.",
          why:
            "An expensive car. Артикль an — потому что expensive начинается с гласного " +
            "звука /ɪ/.",
        },
        {
          id: "z6-dva-sposoba",
          kind: "short",
          prompt: "Скажи то же самое иначе: «It's a small room.» Начни с The room.",
          answer: "The room is small.",
          exact: true,
          accept: ["The room is small"],
          hint: "Прилагательное переезжает из середины в конец, за форму be.",
          why:
            "The room is small. Два способа говорят одно: прилагательное стоит либо перед " +
            "названием, либо после формы be.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "cveta",
      title: "Цвета",
      estimatedMinutes: 13,
      outcome: "называть цвет предмета и спрашивать о цвете",

      blocks: [
        {
          id: "zachem-cveta",
          kind: "explain",
          text: [
            "В магазине, на почте, когда описываешь потерянную сумку, — почти всегда " +
              "приходится назвать цвет.",
            "Слово о цвете работает так же, как big и new: The car is red или a red car.",
            "Слово «цвет» по-английски colour. В британском написании в нём есть буква u, " +
              "в американском её нет: color. Мы пишем colour.",
          ],
        },
        {
          id: "tablica-cvetov",
          kind: "table",
          caption: "Десять цветов",
          head: ["Цвет", "По-русски", "Как читается"],
          rows: [
            ["red", "красный", "/red/"],
            ["blue", "синий", "/bluː/"],
            ["green", "зелёный", "/griːn/"],
            ["yellow", "жёлтый", "/ˈjeləʊ/"],
            ["black", "чёрный", "/blæk/"],
            ["white", "белый", "/waɪt/"],
            ["brown", "коричневый", "/braʊn/"],
            ["orange", "оранжевый", "/ˈɒrɪndʒ/"],
            ["pink", "розовый", "/pɪŋk/"],
            ["grey", "серый", "/greɪ/"],
          ],
        },
        {
          id: "vopros-o-cvete",
          kind: "example",
          caption: "Как спрашивают о цвете",
          text:
            "— What colour is your car?\n— It's blue.\n— And your bag?\n— It's black.",
          explain:
            "What colour is…? — «какого цвета». В ответе слово colour не повторяют: хватает " +
            "It's blue. Вопрос устроен как When и What time из модуля «Дни, даты, время»: сначала " +
            "вопросительные слова, потом форма be.",
        },
        {
          id: "orange-dva-znacheniya",
          kind: "note",
          tone: "info",
          text:
            "Слово orange значит и «апельсин», и «оранжевый». Различает их место в " +
            "предложении: an orange — это сам фрукт, а в an orange bag слово orange называет цвет сумки.",
        },
        {
          id: "grey-po-britanski",
          kind: "note",
          tone: "mistake",
          text:
            "Серый цвет пишут двумя способами: grey и gray. Первый британский, второй " +
            "американский. Мы пишем grey — через e, как в слове they.",
        },
        {
          id: "zapis-cvetov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай десять цветов",
          transcript:
            "Red. Blue. Green. Yellow. Black. White. Brown. Orange. Pink. Grey. " +
            "What colour is your car?",
        },
        {
          id: "slovar-cvetov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "colour", translation: "цвет", example: "What colour is it?", hint: "/ˈkʌlə/" },
            { term: "red", translation: "красный", example: "a red car", hint: "/red/" },
            { term: "blue", translation: "синий", example: "a blue bag", hint: "/bluː/" },
            { term: "green", translation: "зелёный", example: "a green book", hint: "/griːn/" },
            { term: "black", translation: "чёрный", example: "a black bag", hint: "/blæk/" },
            { term: "yellow", translation: "жёлтый", example: "a yellow pen", hint: "/ˈjeləʊ/" },
            { term: "white", translation: "белый", example: "a white house", hint: "/waɪt/" },
            { term: "brown", translation: "коричневый", example: "a brown bag", hint: "/braʊn/" },
            { term: "orange", translation: "оранжевый", example: "an orange bag", hint: "/ˈɒrɪndʒ/" },
            { term: "pink", translation: "розовый", example: "a pink phone", hint: "/pɪŋk/" },
            { term: "grey", translation: "серый", example: "a grey car", hint: "/greɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-cvet",
          kind: "gap",
          prompt: "Сумка чёрная. Допиши цвет.",
          before: "The bag is ",
          after: ".",
          answer: "black",
          hint: "Слово из модуля «Алфавит и своё имя»: цвет ночи и крепкого чая.",
          why: "The bag is black. Цвет стоит после формы be, как любое другое прилагательное.",
        },
        {
          id: "z2-sprosit-o-cvete",
          kind: "short",
          prompt: "Спроси, какого цвета машина собеседника. Запиши вопрос целиком.",
          answer: "What colour is your car?",
          exact: true,
          accept: ["What colour is your car"],
          hint: "Образец есть в примере урока.",
          why:
            "What colour is your car? Сначала вопросительные слова, потом форма be, " +
            "потом то, о чём спрашивают.",
        },
        {
          id: "z3-otmetit-cveta",
          kind: "hottext",
          prompt: "Отметь слова, которые называют цвет.",
          parts: [
            { text: "green", selectable: true, correct: true },
            { text: " · " },
            { text: "cheap", selectable: true },
            { text: " · " },
            { text: "grey", selectable: true, correct: true },
            { text: " · " },
            { text: "short", selectable: true },
          ],
          hint: "Два слова из четырёх есть в таблице цветов.",
          why: "Green и grey — цвета. Cheap значит «дешёвый», short — «короткий».",
        },
        {
          id: "z4-cvet-pered-nazvaniem",
          kind: "short",
          prompt: "Скажи то же самое иначе: «The car is white.» Начни с It's.",
          answer: "It's a white car.",
          exact: true,
          accept: ["It's a white car", "It is a white car.", "It is a white car"],
          hint: "Цвет встаёт между артиклем и названием.",
          why:
            "It's a white car. Цвет ведёт себя как любое прилагательное: его можно поставить и " +
            "перед названием предмета.",
        },
        {
          id: "z5-orange-dvazhdy",
          kind: "choice",
          prompt: "В какой записи orange значит цвет, а не апельсин?",
          options: [
            { text: "It's an orange." },
            { text: "It's an orange bag.", correct: true },
            { text: "The orange is big." },
          ],
          hint: "Цвет стоит перед названием предмета, а сам предмет — после артикля.",
          why:
            "It's an orange bag — здесь orange стоит перед названием и называет цвет. " +
            "В двух других записях orange сам предмет.",
        },
        {
          id: "z6-sopostavit-cveta",
          kind: "match",
          prompt: "Сопоставь цвет и его перевод.",
          left: ["brown", "yellow", "pink"],
          right: ["жёлтый", "розовый", "коричневый"],
          answer: [2, 0, 1],
          hint: "Сверься с таблицей урока.",
          why: "Brown — коричневый, yellow — жёлтый, pink — розовый.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ochen-very",
      title: "Очень: very",
      estimatedMinutes: 12,
      outcome: "усиливать прилагательное словом very",

      blocks: [
        {
          id: "zachem-very",
          kind: "explain",
          text: [
            "Дом не просто большой, а очень большой. По-английски для этого есть слово " +
              "very, и ставят его прямо перед прилагательным: The house is very big.",
            "Само слово very ничего не называет — оно только усиливает то, что идёт " +
              "следом. Без прилагательного оно не работает: «The house is very» не говорят.",
          ],
        },
        {
          id: "tablica-very",
          kind: "table",
          caption: "С very и без него",
          head: ["Без very", "С very", "Перевод"],
          rows: [
            ["The house is big.", "The house is very big.", "Дом очень большой."],
            ["The tea is hot.", "The tea is very hot.", "Чай очень горячий."],
            ["a good day", "a very good day", "очень хороший день"],
            ["an old car", "a very old car", "очень старая машина"],
          ],
        },
        {
          id: "artikl-pered-very",
          kind: "note",
          tone: "mistake",
          text:
            "Смотри последнюю строку таблицы: an old car, но a very old car. Артикль " +
            "по-прежнему смотрит на ближайшее слово, а ближайшим стало very — оно " +
            "начинается с согласного звука. Поэтому артикль сменился с an на a.",
        },
        {
          id: "very-tolko-pered-priznakom",
          kind: "note",
          tone: "info",
          text:
            "Very ставят только перед прилагательным, а не перед названием предмета. «A very " +
            "car» сказать нельзя: машина не бывает «очень». Усиливают то, чего может быть " +
            "больше или меньше: big, hot, expensive.",
        },
        {
          id: "primer-very",
          kind: "example",
          caption: "В разговоре",
          text:
            "— Is your room big?\n— No, it isn't. It's very small.\n— And the house?\n" +
            "— It's a very big house.",
          explain:
            "Very работает в обоих местах: и после формы be — it's very small, и перед " +
            "названием предмета — a very big house. Порядок во втором случае такой: " +
            "артикль, very, прилагательное, название.",
        },
        {
          id: "zapis-very",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай very в предложениях",
          transcript:
            "The house is very big. The tea is very hot. It's a very good day. " +
            "It's a very old car.",
        },
        {
          id: "slovar-very",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "very", translation: "очень", example: "very big", hint: "/ˈveri/" },
            { term: "beautiful", translation: "красивый", example: "a beautiful city", hint: "/ˈbjuːtɪfl/" },
            { term: "clean", translation: "чистый", example: "a clean room", hint: "/kliːn/" },
            { term: "easy", translation: "лёгкий, простой", example: "an easy word", hint: "/ˈiːzi/" },
            { term: "difficult", translation: "трудный", example: "a difficult word", hint: "/ˈdɪfɪkəlt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-usilit-priznak",
          kind: "gap",
          prompt: "Чай очень горячий. Допиши недостающее слово.",
          before: "The tea is ",
          after: " hot.",
          answer: "very",
          hint: "Оно стоит перед прилагательным и само ничего не называет.",
          why: "The tea is very hot. Very усиливает то слово, которое идёт сразу за ним.",
        },
        {
          id: "z2-artikl-s-very",
          kind: "short",
          prompt: "Запиши целиком, вместе с артиклем: очень старая машина.",
          answer: "a very old car",
          accept: ["A very old car"],
          hint: "Артикль смотрит на слово сразу за собой, а там теперь стоит very.",
          why:
            "A very old car. Без very было бы an old car, но very начинается с " +
            "согласного звука и меняет артикль.",
        },
        {
          id: "z3-otmetit-oshibki-very",
          kind: "hottext",
          prompt: "Отметь записи, где very стоит не на своём месте.",
          parts: [
            { text: "a very big house", selectable: true },
            { text: " · " },
            { text: "a big very house", selectable: true, correct: true },
            { text: " · " },
            { text: "The room is very clean.", selectable: true },
            { text: " · " },
            { text: "The room is clean very.", selectable: true, correct: true },
          ],
          hint: "Very всегда стоит вплотную перед прилагательным.",
          why:
            "Very ставят вплотную перед прилагательным: a very big house, The room is very " +
            "clean. В остальных двух very стоит после него — так не говорят.",
        },
        {
          id: "z4-sobrat-s-very",
          kind: "order",
          prompt: "Собери: «очень красивый город».",
          items: ["beautiful", "a", "city", "very"],
          answer: [1, 3, 0, 2],
          hint: "Порядок такой: артикль, very, прилагательное, название.",
          why:
            "A very beautiful city. Very встаёт между артиклем и прилагательным, а название " +
            "остаётся последним.",
        },
        {
          id: "z5-napisat-s-very",
          kind: "short",
          prompt: "Слово трудное. Запиши предложение целиком, начни с The word и добавь «очень».",
          answer: "The word is very difficult.",
          exact: true,
          accept: ["The word is very difficult"],
          hint: "Образец есть в таблице урока.",
          why:
            "The word is very difficult. Very стоит между формой be и прилагательным.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dva-priznaka",
      title: "Два прилагательных сразу: big and new",
      estimatedMinutes: 12,
      outcome: "соединять два прилагательных словом and",

      blocks: [
        {
          id: "zachem-dva",
          kind: "explain",
          text: [
            "Дом бывает сразу и большим, и новым. Два прилагательных соединяют словом and — " +
              "тем самым, которым в модуле «Алфавит и своё имя» соединяли языки: " +
              "Kazakh, Russian and English.",
            "Форма be при этом одна на оба слова: The house is big and new. Повторять " +
              "её не нужно.",
          ],
        },
        {
          id: "tablica-dvuh",
          kind: "table",
          caption: "Одно слово и два",
          head: ["Один", "Два", "Перевод"],
          rows: [
            ["The house is big.", "The house is big and new.", "Дом большой и новый."],
            ["The room is clean.", "The room is clean and small.", "Комната чистая и маленькая."],
            ["The car is very old.", "The car is very old and cheap.", "Машина очень старая и дешёвая."],
          ],
        },
        {
          id: "be-ne-povtoryayut",
          kind: "note",
          tone: "mistake",
          text:
            "«The house is big and is new» — форма be здесь лишняя во второй раз. Она " +
            "одна на всё предложение: The house is big and new.",
        },
        {
          id: "very-k-odnomu",
          kind: "note",
          tone: "info",
          text:
            "Слово very усиливает только то слово, перед которым стоит. В строке The car " +
            "is very old and cheap машина очень старая, а дешёвая — просто дешёвая, без " +
            "«очень». Чтобы усилить оба, very повторяют: very old and very cheap.",
        },
        {
          id: "primer-dvuh",
          kind: "example",
          caption: "Описание в две строки",
          // Здесь стоял оборот What's your room like? Методист показал, что он
          // A2 сразу по трём строкам источника и нигде не был объявлен. Заменён
          // на вопрос из модуля 4, который ученик уже строит сам.
          text:
            "— Is your room big?\n— No, it isn't. It's small and clean.\n— And the house?\n" +
            "— It's very big and beautiful.",
          explain:
            "Два прилагательных через and говорят о предмете больше, чем одно. Вопрос здесь " +
            "знакомый, из модуля «Вопрос и краткий ответ». Новое только and между " +
            "двумя словами.",
        },
        {
          id: "zapis-dvuh",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары слов",
          transcript:
            "The house is big and new. The room is clean and small. It's very big and beautiful.",
        },

        // ---- задания ----
        {
          id: "z1-soedinit-priznaki",
          kind: "gap",
          prompt: "Комната маленькая и чистая. Допиши недостающее слово.",
          before: "The room is small ",
          after: " clean.",
          answer: "and",
          hint: "Это же слово соединяло названия языков в модуле «Алфавит и своё имя».",
          why: "The room is small and clean. And соединяет два прилагательных.",
        },
        {
          id: "z2-lishnyaya-forma-be",
          kind: "hottext",
          prompt: "Отметь записи, где форма be стоит лишний раз.",
          parts: [
            { text: "The car is old and cheap.", selectable: true },
            { text: " · " },
            { text: "The car is old and is cheap.", selectable: true, correct: true },
            { text: " · " },
            { text: "The book is new and good.", selectable: true },
            { text: " · " },
            { text: "The book is new and is good.", selectable: true, correct: true },
          ],
          hint: "Форма be нужна одна на всё предложение.",
          why:
            "Во второй и четвёртой записи is стоит дважды. Верно: The car is old and " +
            "cheap, The book is new and good.",
        },
        {
          id: "z3-sobrat-dva-priznaka",
          kind: "order",
          // Оба порядка прилагательных по-английски верны, а собрать можно только
          // один. Правило проекта: где верных порядков несколько, порядок
          // оговаривают в условии. Нашёл методист.
          prompt: "Собери предложение в том же порядке, что в русском: «Дом большой и красивый».",
          items: ["beautiful", "big", "The house is", "and"],
          answer: [2, 1, 3, 0],
          hint: "And стоит между двумя прилагательными.",
          why:
            "The house is big and beautiful. Прилагательные стоят по обе стороны от and, а " +
            "форма be — одна.",
        },
        {
          id: "z4-very-k-odnomu",
          kind: "choice",
          prompt: "В записи «It's very old and cheap» какое слово усилено словом very?",
          options: [
            { text: "оба" },
            { text: "только cheap" },
            { text: "только old", correct: true },
          ],
          hint: "Very усиливает то слово, перед которым стоит.",
          why:
            "Только old: very стоит перед ним. Чтобы усилить оба, пишут very old and very " +
            "cheap.",
        },
        {
          id: "z5-opisat-dvumya",
          kind: "short",
          prompt: "Машина старая и дешёвая. Запиши предложение целиком, начни с The car.",
          answer: "The car is old and cheap.",
          exact: true,
          // Обратный порядок прилагательных — такой же верный английский, и
          // задание проверяет связку and, а не очерёдность. Принимаем оба.
          accept: [
            "The car is old and cheap",
            "The car is cheap and old.",
            "The car is cheap and old",
          ],
          hint: "Форма be одна, между прилагательными — and.",
          why:
            "The car is old and cheap. Два прилагательных, одна форма be и одно and между ними.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kakoy-chelovek",
      title: "Какой человек",
      estimatedMinutes: 13,
      outcome: "описывать человека: tall, young, nice",

      blocks: [
        {
          id: "zachem-o-cheloveke",
          kind: "explain",
          text: [
            "О человеке говорят теми же словами и в том же порядке, что о предмете: " +
              "She is tall. He's a nice man. Меняется только первое слово: вместо it стоят " +
              "he и she.",
            "Слов для человека немного, и половина уже знакома: good, bad, big, small. " +
              "Добавляются четыре новых.",
          ],
        },
        {
          id: "tablica-o-cheloveke",
          kind: "table",
          caption: "Четыре новых слова",
          head: ["Слово", "Перевод", "Пример"],
          rows: [
            ["tall", "высокий", "She is tall."],
            ["young", "молодой", "He is young."],
            ["nice", "приятный, славный", "She's a nice woman."],
            ["interesting", "интересный", "He's an interesting man."],
          ],
        },
        {
          id: "old-o-cheloveke",
          kind: "note",
          tone: "info",
          text:
            "Слово old работает и о предмете, и о человеке: an old car — старая машина, " +
            "an old man — пожилой мужчина. Пара к нему о человеке — young.",
        },
        {
          id: "he-ili-it",
          kind: "note",
          tone: "mistake",
          text:
            "О человеке говорят he или she, а не it. «It's tall» о человеке звучит так " +
            "же странно, как по-русски «оно высокое» о собеседнике. Слово it остаётся " +
            "предметам.",
        },
        {
          id: "primer-o-cheloveke",
          kind: "example",
          caption: "Двое в разговоре",
          // Здесь стояли Who's that? и What's she like? Слово who в курсе не
          // вводилось ни разу, а оба оборота стоят на A2. Нашёл методист.
          text:
            "— That's Dana. She's my teacher.\n— Is she young?\n" +
            "— Yes, she is. She's young and very nice.",
          explain:
            "О человеке спрашивают так же, как о предмете: Is she young? И отвечают так же — " +
            "краткое «да», а за ним два прилагательных через and.",
        },
        {
          id: "zapis-o-cheloveke",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай описание человека",
          transcript:
            "She is tall. He is young. She's a nice woman. He's an interesting man. " +
            "She's young and very nice.",
        },
        {
          id: "slovar-o-cheloveke",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "tall", translation: "высокий", example: "She is tall.", hint: "/tɔːl/" },
            { term: "young", translation: "молодой", example: "He is young.", hint: "/jʌŋ/" },
            { term: "nice", translation: "приятный, славный", example: "a nice woman", hint: "/naɪs/" },
            { term: "interesting", translation: "интересный", example: "an interesting man", hint: "/ˈɪntrəstɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-he-ili-it",
          kind: "choice",
          prompt: "Речь о Нурлане. Как сказать «он высокий»?",
          options: [
            { text: "It's tall." },
            { text: "He is tall.", correct: true },
            { text: "He is talls." },
          ],
          hint: "О человеке говорят he или she, а прилагательное ничего к себе не прибавляет.",
          why:
            "He is tall. Слово it говорят только о предметах, а прилагательное не меняется, " +
            "о ком бы ни шла речь.",
        },
        {
          id: "z2-dopisat-priznak-cheloveka",
          kind: "gap",
          prompt: "Айгуль молодая. Допиши слово.",
          before: "She is ",
          after: ".",
          answer: "young",
          hint: "Пара к слову old, когда речь о человеке.",
          why: "She is young. Пара old — young работает о людях так же, как new — old о вещах.",
        },
        {
          id: "z3-sobrat-o-cheloveke",
          kind: "order",
          prompt: "Собери предложение: «Она приятная женщина».",
          items: ["woman", "a", "She's", "nice"],
          answer: [2, 1, 3, 0],
          hint: "Порядок тот же, что у предметов: артикль, прилагательное, название.",
          why:
            "She's a nice woman. Прилагательное встало между артиклем и словом woman — ровно как " +
            "в a nice car.",
        },
        {
          id: "z4-otmetit-o-lyudyah",
          kind: "hottext",
          prompt: "Отметь записи, где о человеке сказано неверно.",
          // Вторая ошибка раньше была про артикль без названия — правила об
          // этом в уроке нет, а подсказка прямо называла обе ошибки. Нашёл
          // методист. Теперь обе ошибки об одном: о человеке говорят he и she.
          parts: [
            { text: "She is tall.", selectable: true },
            { text: " · " },
            { text: "It is young.", selectable: true, correct: true },
            { text: " · " },
            { text: "He's an interesting man.", selectable: true },
            { text: " · " },
            { text: "It's a nice woman.", selectable: true, correct: true },
          ],
          hint: "Смотри на первое слово каждой записи.",
          why:
            "«It is young» и «It's a nice woman» — о человеке нужно he или she. Слово it " +
            "остаётся предметам.",
        },
        {
          id: "z5-opisat-cheloveka",
          kind: "short",
          prompt: "Дана молодая и очень приятная. Запиши предложение целиком, начни с She.",
          answer: "She is young and very nice.",
          exact: true,
          accept: [
            "She is young and very nice",
            "She's young and very nice.",
            "She's young and very nice",
            "She is very nice and young.",
            "She's very nice and young.",
          ],
          hint: "Два прилагательных через and, и very стоит перед вторым.",
          why:
            "She is young and very nice. Very усиливает только nice — то слово, перед " +
            "которым стоит.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "lyubimyy",
      title: "Мой любимый",
      estimatedMinutes: 12,
      outcome: "называть любимое: my favourite colour is blue",

      blocks: [
        {
          id: "zachem-lyubimyy",
          kind: "explain",
          text: [
            "Тебя спрашивают, какой цвет тебе больше всех нравится. По-русски это " +
              "«любимый», по-английски — favourite: My favourite colour is blue.",
            "Слово favourite ведёт себя как прилагательное и стоит на том же месте: между " +
              "словами my, his, her и названием. My favourite day, his favourite car, " +
              "her favourite book.",
          ],
        },
        {
          id: "tablica-lyubimogo",
          kind: "table",
          caption: "Что бывает любимым",
          head: ["Английский", "Перевод"],
          rows: [
            ["My favourite colour is blue.", "Мой любимый цвет — синий."],
            ["My favourite day is Saturday.", "Мой любимый день — суббота."],
            ["His favourite month is May.", "Его любимый месяц — май."],
            ["Her favourite book is new.", "Её любимая книга новая."],
          ],
        },
        {
          id: "favourite-i-artikl",
          kind: "note",
          tone: "mistake",
          text:
            "Перед favourite стоит my, his или her — и артикль тогда не нужен. «A my " +
            "favourite colour» сказать нельзя: это то же правило, что в модуле «Мои вещи», " +
            "где артикль уходит после my.",
        },
        {
          id: "favourite-britanskoe",
          kind: "note",
          tone: "info",
          text:
            "В слове favourite есть буква u — favourite. Без неё, favorite, пишут в " +
            "Америке. Та же пара, что colour и color в уроке «Цвета».",
        },
        {
          id: "primer-lyubimogo",
          kind: "example",
          caption: "Разговор о любимом",
          text:
            "— What's your favourite colour?\n— It's green. And yours?\n" +
            "— My favourite colour is blue.",
          explain:
            "Вопрос строится как все вопросы с be: сначала вопросительное слово, потом " +
            "форма be. Ответить можно коротко — It's green — или целым предложением.",
        },
        {
          id: "zapis-lyubimogo",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай разговор о любимом",
          transcript:
            "What's your favourite colour? It's green. My favourite colour is blue. " +
            "My favourite day is Saturday.",
        },
        {
          id: "slovar-lyubimogo",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            // Транскрипция по источникам: и ipa-en-uk.txt, и wikipron дают
            // /ˈfeɪvrɪt/, без ə. Раньше стояло /ˈfeɪvərɪt/ — лишний слог,
            // которого нет ни в одном источнике. Нашёл методист.
            { term: "favourite", translation: "любимый", example: "my favourite colour", hint: "/ˈfeɪvrɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-lyubimyy-cvet",
          kind: "short",
          prompt: "Твой любимый цвет — зелёный. Запиши предложение целиком, начни с My favourite.",
          answer: "My favourite colour is green.",
          exact: true,
          accept: ["My favourite colour is green"],
          hint: "Образец есть в таблице урока, замени только цвет.",
          why:
            "My favourite colour is green. Слово favourite стоит между my и названием.",
        },
        {
          id: "z2-bez-artiklya",
          kind: "hottext",
          prompt: "Отметь записи с лишним артиклем.",
          parts: [
            { text: "my favourite day", selectable: true },
            { text: " · " },
            { text: "a my favourite day", selectable: true, correct: true },
            { text: " · " },
            { text: "his favourite car", selectable: true },
            { text: " · " },
            { text: "a his favourite car", selectable: true, correct: true },
          ],
          hint: "После my и his артикль не ставят — это правило из модуля «Мои вещи».",
          why:
            "Артикль и слова my, his, her вместе не стоят. Верно my favourite day и " +
            "his favourite car.",
        },
        {
          id: "z3-sprosit-o-lyubimom",
          kind: "gap",
          prompt: "Спроси собеседника о любимом месяце. Допиши недостающее слово.",
          before: "What's your favourite ",
          after: "?",
          answer: "month",
          hint: "Слово из модуля «Дни, даты, время».",
          why:
            "What's your favourite month? Вопрос устроен как все вопросы с be, меняется " +
            "только последнее слово.",
        },
        {
          id: "z4-lyubimyy-den",
          kind: "short",
          prompt: "Любимый день Нурлана — пятница. Запиши предложение целиком, начни с His favourite.",
          answer: "His favourite day is Friday.",
          exact: true,
          accept: ["His favourite day is Friday"],
          hint: "День недели пишется с заглавной буквы.",
          why:
            "His favourite day is Friday. Слово his показывает, чей это день, а Friday — " +
            "с заглавной, как все дни недели.",
        },
        {
          id: "z5-najti-oshibku-favourite",
          kind: "choice",
          prompt: "В какой записи слово написано не по-британски?",
          options: [
            { text: "My favourite colour is red." },
            { text: "Her favourite month is June." },
            { text: "My favorite day is Sunday.", correct: true },
          ],
          hint: "Смотри на само слово «любимый»: мы пишем его по-британски.",
          why:
            "Favorite — американское написание, а мы пишем favourite, с буквой u, как и " +
            "colour.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "opisanie-celikom",
      title: "Описать целиком",
      estimatedMinutes: 14,
      outcome: "описывать предмет и человека тремя предложениями",

      blocks: [
        {
          id: "zachem-celikom",
          kind: "explain",
          text: [
            "Знакомый показывает на фотографию и спрашивает, что там. Одним словом не " +
              "ответишь: он хочет знать, что это, какое оно и какого цвета.",
            "Хватит трёх коротких предложений: It's a car. It's very old. It's grey.",
            "Каждое такое предложение уже встречалось по отдельности. Новое здесь одно: " +
              "теперь они идут подряд и вместе дают описание.",
          ],
        },
        {
          id: "shagi-opisaniya",
          kind: "table",
          caption: "Описание по шагам",
          head: ["Шаг", "Что называют", "Пример"],
          rows: [
            ["1", "что это", "It's a car."],
            ["2", "какое оно", "It's very old."],
            ["3", "какого цвета", "It's grey."],
          ],
        },
        {
          // Раньше здесь стояла строка «всё вместе: It's a very old grey car» и
          // врезка о порядке двух признаков подряд. Методист нашёл источник:
          // два прилагательных перед названием — A2 (NOUNS noun phrases, «FORM:
          // NOUN PHRASES WITH ADJECTIVES»), а порядок типов прилагательных —
          // B1, и в перечне A2 Key он стоит отдельной строкой «Order of
          // adjectives». Снято целиком: ни один итог модуля этого не обещал.
          id: "tri-predlozheniya-luchshe",
          kind: "note",
          tone: "info",
          text:
            // Обещание «научимся позже» стояло без адреса. Адрес есть: соединять
            // предложения учит модуль 24. Нашёл методист.
            "Три коротких предложения лучше одного длинного. Собеседник успевает понять " +
            "каждое, а ты не путаешься в порядке слов. Соединять предложения в одно " +
            "научимся в модуле «И, но, потому что».",
        },
        {
          id: "opisanie-cheloveka",
          kind: "example",
          caption: "Описание человека",
          text:
            "This is Alim. He's my teacher.\nHe's young and very nice.\n" +
            "His favourite colour is blue.",
          explain:
            "Тот же порядок: кто это, какой он, что-то ещё о нём. Слово his в третьей " +
            "строке показывает, что речь по-прежнему об Алиме.",
        },
        {
          id: "opisanie-predmeta",
          kind: "example",
          caption: "Описание предмета",
          text:
            "This is my bag. It's new.\nIt's black and very big.\n" +
            "It's an expensive bag.",
          explain:
            "В первой строке два коротких предложения: что это и какое оно. Во второй — два " +
            "прилагательных через and. В третьей прилагательное стоит перед названием: an expensive bag.",
        },
        {
          id: "zapis-opisaniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай оба описания",
          transcript:
            "This is Alim. He's my teacher. He's young and very nice. His favourite colour " +
            "is blue. This is my bag. It's new. It's black and very big.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-opisanie",
          kind: "order",
          prompt: "Расставь предложения так, чтобы вышло описание по шагам.",
          items: [
            "It's very old.",
            "It's grey.",
            "It's a car.",
          ],
          answer: [2, 0, 1],
          hint: "Сначала говорят, что это, и только потом — какое оно.",
          why:
            "It's a car. It's very old. It's grey. Сказать, какая она, раньше, чем назван сам " +
            "предмет, нельзя: непонятно, о чём речь.",
        },
        {
          id: "z2-opisat-predmet",
          kind: "short",
          prompt: "Сумка новая и очень дорогая. Запиши предложение целиком, начни с The bag.",
          answer: "The bag is new and very expensive.",
          exact: true,
          accept: [
            "The bag is new and very expensive",
            "The bag is very expensive and new.",
            "The bag is very expensive and new",
          ],
          hint: "Два прилагательных через and, very перед вторым.",
          why:
            "The bag is new and very expensive. Форма be одна, and между прилагательными, " +
            "very усиливает только expensive.",
        },
        {
          // Здесь стояло задание на два признака подряд — сначала gap на три
          // слова, потом расстановка карточек. Оба сняты: методист показал, что
          // два прилагательных перед названием стоят на A2, а порядок их типов
          // — на B1. Задание заменено на то, что модуль действительно обещает:
          // три отдельных предложения.
          id: "z3-vsyo-v-odnom",
          kind: "short",
          prompt: "Машина очень старая. Запиши второй шаг описания целиком, начни с It's.",
          answer: "It's very old.",
          exact: true,
          accept: ["It's very old", "It is very old.", "It is very old"],
          hint: "Второй шаг говорит, какая машина, а не что это и не какого цвета.",
          why:
            "It's very old. Первый шаг сказал, что это машина, второй говорит, какая она.",
        },
        {
          id: "z4-otmetit-polnoe",
          kind: "hottext",
          prompt: "Отметь описания, в которых назван только предмет и больше ничего.",
          parts: [
            { text: "It's a bag. It's black.", selectable: true },
            { text: " · " },
            { text: "It's a bag.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's a car. It's very old.", selectable: true },
            { text: " · " },
            { text: "It's a car.", selectable: true, correct: true },
          ],
          hint: "Ищи записи, где о предмете ничего не сказано.",
          why:
            "«It's a bag» и «It's a car» называют предмет, но ничего о нём не говорят. " +
            "В остальных двух сказано, какой он.",
        },
        {
          id: "z5-opisat-cheloveka-celikom",
          kind: "short",
          prompt:
            "Дана — твоя преподавательница, она высокая и очень приятная. Запиши второе предложение описания, начни с She.",
          answer: "She is tall and very nice.",
          exact: true,
          accept: [
            "She is tall and very nice",
            "She's tall and very nice.",
            "She's tall and very nice",
            "She is very nice and tall.",
            "She's very nice and tall.",
          ],
          hint: "Начало уже сказано: This is Dana. She's my teacher.",
          why:
            "She is tall and very nice. Второй шаг описания говорит, какая она, и удобно " +
            "сказать сразу два слова через and.",
        },
        {
          id: "z6-proiznesti-opisanie",
          kind: "speak",
          prompt: "Опиши вслух свою сумку: что это, какая она, какого цвета.",
          phrase: "This is my bag. It's new and very big. It's black.",
          translation: "Это моя сумка. Она новая и очень большая. Она чёрная.",
          hint: "Три предложения по шагам таблицы.",
          why:
            "Три коротких предложения дают полное описание. Собирать их в одно длинное " +
            "не обязательно.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 22, из них 10 требуют написать ответ самому. Итогов восемь,
  // на каждый приходится не меньше двух вопросов, поэтому спрашиваем восемь.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      {
        id: "q-priznak-posle-be",
        kind: "short",
        outcome: "говорить, какой предмет: The house is big",
        prompt: "Вода холодная. Запиши предложение целиком, начни с The water.",
        answer: "The water is cold.",
        exact: true,
        accept: ["The water is cold"],
        why: "The water is cold. Прилагательное стоит после формы be и не меняется.",
      },
      {
        id: "q-para-priznakov",
        kind: "match",
        outcome: "говорить, какой предмет: The house is big",
        prompt: "Сопоставь слово и его пару.",
        left: ["long", "hot", "good"],
        right: ["bad", "short", "cold"],
        answer: [1, 2, 0],
        why: "Long — short, hot — cold, good — bad.",
      },
      {
        id: "q-priznak-bez-okonchaniya",
        kind: "hottext",
        outcome: "говорить, какой предмет: The house is big",
        prompt: "Отметь записи, где к прилагательному прибавили лишнее окончание.",
        parts: [
          { text: "The books are new.", selectable: true },
          { text: " · " },
          { text: "The books are news.", selectable: true, correct: true },
          { text: " · " },
          { text: "The cars are old.", selectable: true },
          { text: " · " },
          { text: "The cars are olds.", selectable: true, correct: true },
        ],
        why:
          "Окончание -s достаётся названию предмета, а не прилагательному: The books are new, " +
          "The cars are old.",
      },
      {
        id: "q-artikl-po-priznaku",
        kind: "short",
        outcome: "ставить прилагательное перед названием предмета: a big house",
        prompt: "Запиши целиком, вместе с артиклем: дорогая машина.",
        answer: "an expensive car",
        accept: ["An expensive car"],
        why:
          "An expensive car. Артикль смотрит на слово сразу за собой, а expensive " +
          "начинается с гласного звука.",
      },
      {
        id: "q-perestroit-quiz",
        kind: "short",
        outcome: "ставить прилагательное перед названием предмета: a big house",
        prompt: "Скажи то же самое иначе: «The room is small.» Начни с It's.",
        answer: "It's a small room.",
        exact: true,
        accept: ["It's a small room", "It is a small room.", "It is a small room"],
        why: "It's a small room. Порядок такой: артикль, прилагательное, название.",
      },
      {
        id: "q-mnozhestvennoe-s-priznakom",
        kind: "gap",
        outcome: "ставить прилагательное перед названием предмета: a big house",
        prompt: "Допиши название во множественном числе: «старые машины».",
        before: "old ",
        after: "",
        answer: "cars",
        why: "Old cars. Прилагательное остаётся неизменным, окончание берёт только название.",
      },
      {
        id: "q-cvet-quiz",
        kind: "gap",
        outcome: "называть цвет предмета и спрашивать о цвете",
        prompt: "Машина зелёная. Допиши цвет.",
        before: "The car is ",
        after: ".",
        answer: "green",
        why: "The car is green. Цвет стоит после формы be, как любое прилагательное.",
      },
      {
        id: "q-sprosit-cvet-quiz",
        kind: "short",
        outcome: "называть цвет предмета и спрашивать о цвете",
        prompt: "Спроси, какого цвета сумка собеседника. Запиши вопрос целиком.",
        answer: "What colour is your bag?",
        exact: true,
        accept: ["What colour is your bag"],
        why: "What colour is your bag? Написание colour британское, с буквой u.",
      },
      {
        id: "q-cveta-sopostavit",
        kind: "match",
        outcome: "называть цвет предмета и спрашивать о цвете",
        prompt: "Сопоставь цвет и его перевод.",
        left: ["grey", "white", "blue"],
        right: ["белый", "синий", "серый"],
        answer: [2, 0, 1],
        why: "Grey — серый, white — белый, blue — синий.",
      },
      {
        id: "q-very-mesto",
        kind: "gap",
        outcome: "усиливать прилагательное словом very",
        prompt: "Комната очень чистая. Допиши недостающее слово.",
        before: "The room is ",
        after: " clean.",
        answer: "very",
        why: "The room is very clean. Very стоит вплотную перед прилагательным.",
      },
      {
        id: "q-very-artikl",
        kind: "gap",
        outcome: "усиливать прилагательное словом very",
        prompt: "Допиши артикль: очень старый дом.",
        before: "It's ",
        after: " very old house.",
        answer: "a",
        why:
          "A very old house. Слово сразу за артиклем — very, а оно начинается с " +
          "согласного звука.",
      },
      {
        id: "q-very-sobrat",
        kind: "order",
        outcome: "усиливать прилагательное словом very",
        prompt: "Собери: «очень дорогая книга».",
        items: ["book", "very", "a", "expensive"],
        answer: [2, 1, 3, 0],
        why: "A very expensive book. Порядок: артикль, very, прилагательное, название.",
      },
      {
        id: "q-and-dva",
        kind: "short",
        outcome: "соединять два прилагательных словом and",
        // Ответ «The house is big and new.» напечатан в уроке четыре раза: во
        // вводном тексте, в таблице, во врезке об ошибке и в расшифровке записи.
        // Ученик вспоминал строку, а не собирал её. Взята другая пара.
        prompt: "Стол новый и дешёвый. Запиши предложение целиком, начни с The table.",
        answer: "The table is new and cheap.",
        exact: true,
        accept: [
          "The table is new and cheap",
          "The table is cheap and new.",
          "The table is cheap and new",
        ],
        why: "The table is new and cheap. Форма be одна на оба прилагательных.",
      },
      {
        id: "q-lishnyaya-be",
        kind: "hottext",
        outcome: "соединять два прилагательных словом and",
        // Две записи из четырёх были дословно теми же, что в задании урока 5.
        // Нашёл методист. Заменены целиком.
        prompt: "Отметь записи, где форма be стоит лишний раз.",
        parts: [
          { text: "The house is big and beautiful.", selectable: true },
          { text: " · " },
          { text: "The tea is hot and is good.", selectable: true, correct: true },
          { text: " · " },
          { text: "She is young and nice.", selectable: true },
          { text: " · " },
          { text: "He is tall and is young.", selectable: true, correct: true },
        ],
        why: "Форма be нужна одна на всё предложение, повторять её после and не нужно.",
      },
      {
        // Раньше — близнец задания урока 5 с тем же набором вариантов.
        // Нашёл методист. Теперь ученик производит запись сам.
        id: "q-very-k-odnomu-quiz",
        kind: "short",
        outcome: "соединять два прилагательных словом and",
        prompt:
          "Комната очень маленькая и очень чистая. Усиль оба слова. Запиши предложение целиком, начни с The room.",
        answer: "The room is very small and very clean.",
        exact: true,
        accept: [
          "The room is very small and very clean",
          "The room is very clean and very small.",
          "The room is very clean and very small",
        ],
        why:
          "The room is very small and very clean. Very усиливает только то слово, перед " +
          "которым стоит, поэтому для обоих слов его пишут дважды.",
      },
      {
        // Раньше — близнец задания урока 6 с тем же набором вариантов, менялись
        // только имя и прилагательное. Нашёл методист.
        id: "q-he-ne-it",
        kind: "short",
        outcome: "описывать человека: tall, young, nice",
        prompt: "Карим высокий. Запиши предложение целиком, начни с He.",
        answer: "He is tall.",
        exact: true,
        accept: ["He is tall", "He's tall.", "He's tall"],
        why:
          "He is tall. О человеке говорят he или she, а прилагательное ничего к себе не " +
          "прибавляет.",
      },
      {
        id: "q-opisat-cheloveka-quiz",
        kind: "short",
        outcome: "описывать человека: tall, young, nice",
        // Ответ совпадал с урочным слово в слово: менялось одно имя. Взята другая
        // пара прилагательных.
        prompt: "Айгуль молодая и очень интересная. Запиши предложение целиком, начни с She.",
        answer: "She is young and very interesting.",
        exact: true,
        accept: [
          "She is young and very interesting",
          "She's young and very interesting.",
          "She's young and very interesting",
          "She is very interesting and young.",
        ],
        why: "She is young and very interesting. Два прилагательных через and, very перед вторым.",
      },
      {
        id: "q-nice-woman",
        kind: "order",
        outcome: "описывать человека: tall, young, nice",
        prompt: "Собери предложение: «Он интересный человек».",
        items: ["man", "He's", "interesting", "an"],
        answer: [1, 3, 2, 0],
        why:
          "He's an interesting man. Артикль an — потому что interesting начинается с " +
          "гласного звука.",
      },
      {
        id: "q-lyubimyy-cvet-quiz",
        kind: "short",
        outcome: "называть любимое: my favourite colour is blue",
        prompt: "Твой любимый цвет — красный. Запиши предложение целиком, начни с My favourite.",
        answer: "My favourite colour is red.",
        exact: true,
        accept: ["My favourite colour is red"],
        why: "My favourite colour is red. Артикль после my не нужен.",
      },
      {
        id: "q-favourite-bez-artiklya",
        kind: "hottext",
        outcome: "называть любимое: my favourite colour is blue",
        prompt: "Отметь записи с лишним артиклем.",
        parts: [
          { text: "her favourite month", selectable: true },
          { text: " · " },
          { text: "a her favourite month", selectable: true, correct: true },
          { text: " · " },
          { text: "my favourite car", selectable: true },
          { text: " · " },
          { text: "a my favourite car", selectable: true, correct: true },
        ],
        why: "Артикль и слово о принадлежности вместе не стоят: her favourite month.",
      },
      {
        id: "q-opisanie-poryadok",
        kind: "order",
        outcome: "описывать предмет и человека тремя предложениями",
        prompt: "Расставь предложения так, чтобы вышло описание по шагам.",
        // Два предложения из трёх повторяли речевое задание урока дословно. Взяты
        // другие прилагательные и другой цвет.
        items: ["It's brown.", "It's a bag.", "It's old and very cheap."],
        answer: [1, 2, 0],
        why:
          "It's a bag. It's old and very cheap. It's brown. Сначала называют предмет, потом " +
          "говорят, какой он.",
      },
      {
        // Вопрос был сломан: «It's a » + «expensive white» + « car.» даёт
        // «It's a expensive white car» — артикль a перед гласным звуком, ровно
        // та ошибка, против которой построен весь урок 2. И слова «очень» из
        // условия в ответе не было вовсе, а разбор объяснял другое предложение.
        // Нашёл методист. Заменено на третий шаг описания.
        id: "q-opisanie-v-odnom",
        kind: "short",
        outcome: "описывать предмет и человека тремя предложениями",
        prompt: "Сумка чёрная. Запиши третий шаг описания целиком, начни с It's.",
        answer: "It's black.",
        exact: true,
        accept: ["It's black", "It is black.", "It is black"],
        why: "It's black. Третий шаг описания называет цвет.",
      },
    ],
  },
};

export default module;
