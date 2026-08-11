import type { Module } from "@/lib/content/types";

/**
 * Модуль 12 курса «Английский с нуля»: где это.
 *
 * Программа: docs/programma-english-starter.md, модуль 12 — «сказать, где
 * находится предмет; понять, как пройти»; грамматика: предлоги места; наречия
 * места в конце предложения; повелительное наклонение для указаний (сверх A1).
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ (English Grammar Profile):
 *
 * — простые предлоги (in, on, under, behind, between, near, at) — A1,
 *   PREPOSITIONS «FORM: SIMPLE»;
 * — here и there — A1, ADVERBS types «USE: PLACE», дословно: «Can use a limited
 *   range of adverbs ('here', 'there') to indicate place»;
 * — наречие места в конце предложения — A1, ADVERBS position «FORM: PLACE, END
 *   POSITION», пример источника «I have many friends there»;
 * — СВЕРХ СТУПЕНИ: `next to` и `in front of` — A2, PREPOSITIONS «FORM: COMPLEX»;
 * — СВЕРХ СТУПЕНИ: повелительное наклонение — A2, CLAUSES imperatives «FORM:
 *   AFFIRMATIVE» и «USE: INSTRUCTIONS». Программа берёт его прямо и помечает;
 * — СВЕРХ СТУПЕНИ: слово `straight` — A2 по Oxford 3000.
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ:
 *
 * — оборота `there is`: он в модуле 13, и это самое опасное место модуля.
 *   «Здесь есть магазин» сказать нельзя — только «Магазин рядом со станцией».
 *   Все примеры построены через `be` с названным предметом;
 * — настоящего простого времени (модуль 14): «я иду» сказать нельзя, `go` стоит
 *   только в повелительном наклонении;
 * — сравнения и превосходной степени (A2).
 *
 * Звука нет — решение об источнике записей за владельцем
 * (docs/zadachi-vladeltsa.md, п. 1.4).
 *
 * МОДУЛЬ ПРИНЯТ: скрипт, редактор, методист. Полный перечень найденного —
 * docs/zadachi-vladeltsa.md, п. 1.21. Что важно помнить прямо здесь:
 *
 * 1. Превышений ступени НЕ ТРИ, А ЧЕТЫРЕ. Четвёртое — само умение объяснить
 *    дорогу: описания Совета Европы, с. 63, ставят его на A2 и называют
 *    теми же словами, что урок 8. Понимание указаний при этом A1 (с. 51, 58),
 *    и эти строки держат урок 7 прямее всего остального.
 *
 * 2. Правило «перед here и there предлог не ставят» БЫЛО НЕВЕРНО вообще:
 *    у Cambridge в образцах стоят over there и up there, а урок 8 этого же
 *    модуля требует not from here. Правило ограничено ответом о месте.
 *
 * 3. Определённый артикль здесь стоит 315 раз — больше, чем в любом другом
 *    модуле курса (счёт по тексту для ученика, вместе с проверочной работой).
 *    Разбирается он в модуле 10, урок «A и the»; здесь две врезки показывают,
 *    как он работает с предметом-ориентиром и с местом в городе. Заплатка «бери
 *    как есть» снята, блокер п. 1.18 закрыт.
 */
const module: Module = {
  slug: "gde-eto",
  title: "Где это",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "СВОЕЙ СТУПЕНИ, A1: " +
        "PREPOSITIONS «FORM: SIMPLE»: «Can use a limited range of simple (single-word) " +
        "prepositions» — in, on, under, behind, between, near, at. Там же «FORM: " +
        "PREPOSITION + NOUN PHRASE». " +
        "ADVERBS types «USE: PLACE»: «Can use a limited range of adverbs ('here', 'there') " +
        "to indicate place» — оба слова названы в описании поимённо. " +
        "ADVERBS position «FORM: PLACE, END POSITION»: «Can use place adverbs in the usual " +
        "end position», пример источника — «I have many friends there». Это прямая опора " +
        "для грамматики модуля по программе. " +
        "ADVERBS as modifiers «FORM: PLACE, COMPLEMENT», пример — «I am happy here». " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'» — единственный глагол в утверждениях. " +
        "СВЕРХ СТУПЕНИ, ТРИ ПУНКТА, ВСЕ ОБЪЯВЛЕНЫ: " +
        "1) PREPOSITIONS «FORM: COMPLEX», A2: «Can use a limited range of complex " +
        "prepositions», пример источника — «We can meet in the park near to my house». " +
        "Отсюда next to и in front of. Без них не сказать, где стоит предмет в комнате; " +
        "2) CLAUSES imperatives «FORM: AFFIRMATIVE» и «USE: INSTRUCTIONS», A2, пример — " +
        "«Take a taxi to the Petrol station then call me». Программа берёт повелительное " +
        "наклонение для указаний прямо и помечает как сверх ступени. Защита та же, что в " +
        "модуле 1: руководство Cambridge для младших ступеней, с. 11, перечисляет " +
        "imperative среди форм глагола для Pre A1 Starters; " +
        "3) вопросительное слово where — QUESTIONS wh-, A2, взято по решению 1 программы " +
        "и уже встречалось в модуле 3; " +
        "4) САМО УМЕНИЕ ОБЪЯСНИТЬ ДОРОГУ. Нашёл методист, я его не объявлял. Описания " +
        "Совета Европы, с. 63, шкала Giving information, A2: «Can give simple directions " +
        "on how to get from X to Y, using basic expressions such as “turn right” and “go " +
        "straight”». То есть источник называет наш урок 8 своими словами — и ставит его " +
        "на A2. Понимание указаний при этом A1 (запись о Совете Европы ниже)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key Handbook for Teachers",
      section:
        "с. 53, перечень предлогов, дословно: «Location: to, on, inside, next to, at " +
        "(home), etc.» — предлоги места названы отдельной строкой от предлогов времени. " +
        "Именно поэтому at места вводится здесь, а не в модуле 10: там ученик выучил " +
        "«at — перед часами», и at the school в том модуле сбивало бы. " +
        "с. 51, «Inventory of functions», дословно: «asking the way and giving directions» — " +
        "отсюда состав уроков 7 и 8. Раньше я цитировал эту строку неточно. " +
        "Там же с. 53: «Prepositional phrases: at the end of, in front of, etc.» — прямая " +
        "опора урока 4, которую я пропустил",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 56, Reading for orientation, Pre-A1: «Can understand simple everyday signs such " +
        "as “Parking”, “Station”, “Dining room”, “No smoking”» — названия мест в городе " +
        "названы прямо, и ступень ниже A1. " +
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves " +
        "and other people, where they live». " +
        "ГЛАВНАЯ ОПОРА УРОКА 7, НАЙДЕНА МЕТОДИСТОМ: с. 51, A1, дословно — «Can understand " +
        "instructions addressed carefully and slowly to them and follow short, simple " +
        "directions. Can understand when someone tells them slowly and clearly where " +
        "something is, provided the object is in the immediate environment». И с. 58, A1: " +
        "«Can follow short, simple directions (e.g. to go from X to Y)». Раньше этих " +
        "строк в записи не было вовсе, а они держат модуль прямее всего остального. " +
        "ЧЕСТНАЯ ОГОВОРКА: обе строки описывают ПОНИМАНИЕ. Производство указаний стоит " +
        "на A2 (с. 63) и объявлено выше как четвёртое превышение ступени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "проверено построчно, все A1: in, on, under, behind, between, near, at, opposite; " +
        "here, there, left, right; go, turn; shop, station, hospital, park, school, street, " +
        "city, room, kitchen, house, hotel, table, chair, door, window, wall, bus, stop, " +
        "map, bag, key. " +
        "ЕДИНСТВЕННОЕ СЛОВО ВЫШЕ СТУПЕНИ: straight — «straight adv., adj. A2». Взято " +
        "потому, что без него не объяснить дорогу: «иди прямо» — первое, что говорят. " +
        "Объявлено и в шапке модуля. " +
        "ОТДЕЛЬНО ПРОВЕРЕНО: opposite стоит на A1 сразу как предлог («opposite adj., adv., " +
        "prep., n. A1»). " +
        "ИСПРАВЛЕНО ПОСЛЕ ПРОВЕРКИ МЕТОДИСТОМ: я записал, что next to и in front of " +
        "словник не разбирает. Это неправда — в Oxford 3000 есть отдельная строка «next " +
        "to prep. A1», а в словнике A2 Key стоят обе пометы: «next to (prep)», с. 15, и " +
        "«in front of (prep phr)», с. 12. По ступени они допустимы; как СОСТАВНЫЕ " +
        "предлоги English Grammar Profile ставит их на A2, и модуль держится осторожной " +
        "оценки. " +
        "СЛОВО excuse me: в Oxford 3000 только «excuse n., v. B2», в словнике A2 Key — " +
        "«excuse (v) • Excuse me!», с. 9. То есть оно выше ступени, и раньше я его не " +
        "объявлял. Взято как готовое обращение к незнакомому человеку. " +
        "РАСХОЖДЕНИЕ ИСТОЧНИКОВ, ТО ЖЕ, ЧТО В п. 1.19: тематический список Cambridge " +
        "(с. 82, «Places & directions») ставит left и right как направления на A2 Flyers, " +
        "а straight — на A1 Movers, то есть ровно наоборот моей записи по Oxford 3000. " +
        "Модуль держится Oxford 3000",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e, конечный безударный через ə, слоговой согласный без ə, r вместо " +
        "ɹ (CLAUDE.md, раздел о британской норме). " +
        "СЛОГОВОЙ СОГЛАСНЫЙ: table — /ˈteɪbl/, hospital — /ˈhɒspɪtl/, station — /ˈsteɪʃn/",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "говорить, где предмет: in, on, under",
    "говорить, что предмет рядом, позади или между: near, behind, between",
    "ставить here и there в конец предложения",
    "говорить, где предмет относительно другого: next to, in front of, opposite",
    "спрашивать, где предмет: Where is и Where are",
    "называть места в городе: shop, station, hospital, park",
    "понимать и повторять указания дороги: go, turn left, turn right",
    "объяснять дорогу двумя-тремя указаниями",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "gde-predmet",
      title: "Где предмет: in, on, under",
      estimatedMinutes: 13,
      outcome: "говорить, где предмет: in, on, under",

      blocks: [
        {
          id: "zachem-gde",
          kind: "explain",
          text: [
            "Ключ в сумке, книга на столе, сумка под стулом. Три места — три разных слова, " +
              "и все три короткие: in, on, under.",
            "Ставят их так же, как предлоги времени из модуля «Дни, даты, время»: предлог, " +
              "потом название предмета. The key is in the bag.",
          ],
        },
        {
          id: "tablica-treh-predlogov",
          kind: "table",
          caption: "Три места",
          head: ["Предлог", "Где именно", "Пример"],
          rows: [
            ["in", "внутри", "The key is in the bag."],
            ["on", "на поверхности", "The book is on the table."],
            ["under", "под чем-то", "The bag is under the chair."],
          ],
        },
        {
          id: "on-dva-znacheniya",
          kind: "note",
          tone: "mistake",
          text:
            "Слово on уже встречалось в модуле «Дни, даты, время»: on Monday — «в понедельник». " +
            "Это то же самое слово, но здесь оно говорит не о дне, а о месте: on the table. " +
            "Что имеется в виду, показывает следующее слово: on Monday — день, on the table — предмет.",
        },
        {
          // Методист: в модуле 12 определённый артикль стоит 315 раз — больше,
          // чем в любом другом. Разобран он в модуле 10, урок «A и the»; здесь
          // и в уроке «Места в городе» показано, как он работает с местом.
          id: "pochemu-the-v-meste",
          kind: "note",
          tone: "info",
          text:
            "Перед названием предмета здесь всюду стоит the: the bag, the table, the chair. " +
            "Причина та же, что в уроке «A и the»: собеседник понимает, о чём речь.\n\n" +
            "Сумка и стол тут те самые, которые вы оба видите, — значит the, даже если " +
            "вслух их ещё не называли.",
        },
        {
          id: "in-i-at",
          kind: "note",
          tone: "info",
          text:
            "Есть и четвёртый предлог места — at. Он говорит не «внутри», а «у, при». " +
            "Пока хватит двух готовых пар: at the door — у двери, at home — дома.",
        },
        {
          id: "primer-gde",
          kind: "example",
          caption: "Ищем ключи",
          text:
            "— Where is my key?\n— It's in your bag.\n— And my phone?\n" +
            "— It's on the table.",
          explain:
            "Where is…? — «где». Отвечают через it и предлог: It's in your bag. Сам вопрос " +
            "разберём в уроке «Где это: вопрос», пока запомни его целиком.",
        },
        {
          id: "zapis-treh-predlogov",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предлога",
          transcript:
            "The key is in the bag. The book is on the table. The bag is under the chair.",
        },
        {
          id: "slovar-treh-predlogov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "in", translation: "в, внутри", example: "in the bag", hint: "/ɪn/" },
            { term: "on", translation: "на", example: "on the table", hint: "/ɒn/" },
            { term: "under", translation: "под", example: "under the chair", hint: "/ˈʌndə/" },
            { term: "table", translation: "стол", example: "on the table", hint: "/ˈteɪbl/" },
            { term: "chair", translation: "стул", example: "under the chair", hint: "/tʃeə/" },
            { term: "door", translation: "дверь", example: "at the door", hint: "/dɔː/" },
            { term: "window", translation: "окно", example: "a big window", hint: "/ˈwɪndəʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kluchi-v-sumke",
          kind: "gap",
          prompt: "Ключ внутри сумки. Допиши предлог.",
          before: "The key is ",
          after: " the bag.",
          answer: "in",
          hint: "Внутри — значит не на поверхности и не под ней.",
          why: "The key is in the bag. Предлог in говорит «внутри».",
        },
        {
          id: "z2-tri-predloga",
          kind: "match",
          prompt: "Сопоставь предлог и то, что он значит.",
          left: ["under", "on", "in"],
          right: ["внутри", "под", "на поверхности"],
          answer: [1, 2, 0],
          hint: "Сверься с таблицей урока.",
          why: "Under — под, on — на поверхности, in — внутри.",
        },
        {
          id: "z3-otmetit-oshibki-mesta",
          kind: "hottext",
          // Раньше «The key is on the bag» помечалось неверным предлогом, хотя
          // предложение правильное: ключ может лежать и на сумке. Задание
          // проверяло житейское допущение, а не язык. Нашёл редактор.
          prompt:
            "Ключ лежит внутри сумки, а стул стоит под столом. Отметь записи, которые этому не соответствуют.",
          parts: [
            { text: "The key is in the bag.", selectable: true },
            { text: " · " },
            { text: "The key is on the bag.", selectable: true, correct: true },
            { text: " · " },
            { text: "The chair is under the table.", selectable: true },
            { text: " · " },
            { text: "The chair is in the table.", selectable: true, correct: true },
          ],
          hint: "Внутри — это in, на поверхности — on, под чем-то — under.",
          why:
            "Ключ внутри сумки — in the bag, а не on. Стул под столом — under the table; " +
            "in the table значило бы «внутри стола».",
        },
        {
          id: "z4-sobrat-gde",
          kind: "order",
          prompt: "Собери предложение: «Сумка под стулом».",
          items: ["the chair", "under", "The bag", "is"],
          answer: [2, 3, 1, 0],
          hint: "Сначала предмет, потом is, потом предлог с местом.",
          why:
            "The bag is under the chair. Порядок тот же, что и во всех предложениях с be.",
        },
        {
          id: "z5-otvetit-gde",
          kind: "short",
          prompt: "Телефон на столе. Ответь на вопрос «Where is my phone?» целиком, начни с It's.",
          answer: "It's on the table.",
          exact: true,
          accept: ["It's on the table", "It is on the table.", "It is on the table"],
          hint: "Образец есть в примере урока.",
          why: "It's on the table. Отвечают через it, за ним предлог и место.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ryadom-i-za",
      title: "Рядом, позади, между",
      estimatedMinutes: 13,
      outcome: "говорить, что предмет рядом, позади или между: near, behind, between",

      blocks: [
        {
          id: "zachem-ryadom",
          kind: "explain",
          text: [
            "Магазин рядом со станцией, машина за домом, аптека между ними. Три новых " +
              "предлога: near, behind, between.",
            "Работают они так же, как in, on и under: предлог, потом название. Порядок " +
              "слов не меняется — меняется только то, где именно стоит предмет.",
          ],
        },
        {
          id: "tablica-ryadom",
          kind: "table",
          caption: "Ещё три предлога",
          head: ["Предлог", "Где именно", "Пример"],
          rows: [
            ["near", "недалеко, поблизости", "The shop is near the station."],
            ["behind", "позади", "The car is behind the house."],
            ["between", "между двумя", "The shop is between the park and the school."],
          ],
        },
        {
          id: "between-dva-mesta",
          kind: "note",
          tone: "mistake",
          text:
            "После between всегда стоят два места, и соединяет их and: between the park " +
            "and the school. Одного места мало: из «between the park» непонятно, между " +
            "чем и чем.",
        },
        {
          id: "near-bez-to",
          kind: "note",
          tone: "info",
          text:
            "По-русски говорят «рядом со станцией» — с предлогом. По-английски хватает " +
            "одного слова: near the station. Само near уже значит «рядом с».",
        },
        {
          id: "primer-ryadom",
          kind: "example",
          caption: "Где что стоит",
          text:
            "The station is near my house.\nThe park is behind the school.\n" +
            "The shop is between the park and the station.",
          explain:
            "Все три предложения устроены одинаково: предмет, форма be, предлог, второе " +
            "место. В последнем мест два, и между ними and.",
        },
        {
          id: "zapis-ryadom",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предлога",
          transcript:
            "The shop is near the station. The car is behind the house. " +
            "The shop is between the park and the school.",
        },
        {
          id: "slovar-ryadom",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "near", translation: "рядом с, недалеко от", example: "near the station", hint: "/nɪə/" },
            { term: "behind", translation: "позади, за", example: "behind the house", hint: "/bɪˈhaɪnd/" },
            { term: "between", translation: "между", example: "between the park and the shop", hint: "/bɪˈtwiːn/" },
            { term: "shop", translation: "магазин", example: "a big shop", hint: "/ʃɒp/" },
            { term: "station", translation: "станция, вокзал", example: "near the station", hint: "/ˈsteɪʃn/" },
            { term: "park", translation: "парк", example: "behind the park", hint: "/pɑːk/" },
            // school стояло в заданиях этого урока за четыре урока до перевода
            { term: "school", translation: "школа", example: "behind the school", hint: "/skuːl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-mezhdu-dvumya",
          kind: "gap",
          prompt: "Магазин между парком и школой. Допиши недостающее слово.",
          before: "The shop is between the park ",
          after: " the school.",
          answer: "and",
          hint: "После between называют два места, а между ними ставят одно слово.",
          why:
            "Between the park and the school. После between называют два места, иначе " +
            "непонятно, между чем и чем.",
        },
        {
          id: "z2-za-domom",
          kind: "short",
          prompt: "Машина позади дома. Запиши предложение целиком, начни с The car.",
          answer: "The car is behind the house.",
          exact: true,
          accept: ["The car is behind the house"],
          hint: "Образец есть в примере урока, замени предмет и место.",
          why: "The car is behind the house. Behind значит «позади».",
        },
        {
          id: "z3-otmetit-between",
          kind: "hottext",
          prompt: "Отметь записи, где после between не хватает второго места.",
          parts: [
            { text: "between the park and the shop", selectable: true },
            { text: " · " },
            { text: "between the station", selectable: true, correct: true },
            { text: " · " },
            { text: "between the house and the school", selectable: true },
            { text: " · " },
            { text: "between the door", selectable: true, correct: true },
          ],
          hint: "Между чем и чем — вот что должно быть названо.",
          why:
            "«Between the station» и «between the door» называют одно место, а нужно два, " +
            "соединённых словом and.",
        },
        {
          id: "z4-vybrat-predlog",
          kind: "choice",
          prompt: "Станция недалеко от твоего дома. Какой предлог нужен?",
          options: [
            { text: "behind" },
            { text: "near", correct: true },
            { text: "between" },
          ],
          hint: "Речь не о том, что позади, и не о двух местах сразу.",
          why:
            "Near my house. Behind значит «позади», а between требует двух мест.",
        },
        {
          id: "z5-sobrat-ryadom",
          kind: "order",
          prompt: "Собери предложение: «Парк позади школы».",
          items: ["the school", "The park", "behind", "is"],
          answer: [1, 3, 2, 0],
          hint: "Сначала предмет, потом is, потом предлог с местом.",
          why: "The park is behind the school. Порядок тот же, что и всегда с be.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "zdes-i-tam",
      title: "Здесь и там",
      estimatedMinutes: 12,
      outcome: "ставить here и there в конец предложения",

      blocks: [
        {
          id: "zachem-zdes",
          kind: "explain",
          text: [
            "Не всегда нужно называть место словами. Достаточно показать: «Мой дом здесь», " +
              "«Магазин там». По-английски это here и there.",
            "Отличаются они расстоянием: here — рядом с тобой, there — подальше. Та же " +
              "пара, что this и that в модуле «Что это такое».",
          ],
        },
        {
          id: "tablica-zdes-tam",
          kind: "table",
          caption: "Здесь и там",
          head: ["Слово", "Перевод", "Пример"],
          rows: [
            ["here", "здесь, тут", "My house is here."],
            ["there", "там", "The shop is there."],
          ],
        },
        {
          id: "v-konce-predlozheniya",
          kind: "note",
          tone: "mistake",
          text:
            "Here и there ставят в конец предложения: My house is here. По-русски можно " +
            "сказать и «здесь мой дом» — мы так делать не будем. Место называют " +
            "последним.",
        },
        {
          id: "bez-predloga",
          kind: "note",
          tone: "info",
          text:
            "Когда отвечаешь, где что находится, предлог перед here и there не нужен. " +
            "Говорят The shop is there, а не «The shop is at there». В самих этих " +
            "словах уже сказано, где — рядом или подальше.",
        },
        {
          id: "primer-zdes",
          kind: "example",
          caption: "У входа",
          text:
            "— Where is the shop?\n— It's there.\n— And your car?\n— It's here.",
          explain:
            "Отвечают целым предложением: It's there, а не просто There. Показать рукой " +
            "при этом можно, но слово о месте всё равно ставят в конец.",
        },
        {
          id: "zapis-zdes",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай here и there",
          transcript:
            "My house is here. The shop is there. Where is the shop? It's there.",
        },
        {
          id: "slovar-zdes",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "here", translation: "здесь, тут", example: "My house is here.", hint: "/hɪə/" },
            { term: "there", translation: "там", example: "The shop is there.", hint: "/ðeə/" },
            { term: "house", translation: "дом", example: "a big house", hint: "/haʊs/" },
            { term: "street", translation: "улица", example: "a long street", hint: "/striːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-zdes-v-konce",
          kind: "order",
          prompt: "Собери предложение: «Мой дом здесь».",
          items: ["here", "My house", "is"],
          answer: [1, 2, 0],
          hint: "Слово о месте идёт последним.",
          why: "My house is here. Here и there ставят в конец предложения.",
        },
        {
          id: "z2-bez-predloga",
          kind: "hottext",
          prompt: "Отметь записи с лишним предлогом.",
          parts: [
            { text: "The shop is there.", selectable: true },
            { text: " · " },
            { text: "The shop is at there.", selectable: true, correct: true },
            { text: " · " },
            { text: "My car is here.", selectable: true },
            { text: " · " },
            { text: "My car is at here.", selectable: true, correct: true },
          ],
          hint: "Here и there сами по себе называют место.",
          why:
            "Предлог здесь не нужен. Верно: The shop is there, My car is here.",
        },
        {
          id: "z3-zdes-ili-tam",
          kind: "choice",
          prompt: "Магазин на другой стороне улицы, далеко от тебя. Как сказать?",
          options: [
            { text: "The shop is here." },
            { text: "The shop is at there." },
            { text: "The shop is there.", correct: true },
          ],
          hint: "Далеко — значит не here. И предлог перед этим словом не нужен.",
          why:
            "The shop is there. Here говорят о том, что рядом, а предлог перед there " +
            "не ставят.",
        },
        {
          id: "z4-dopisat-here",
          kind: "gap",
          prompt: "Твоя сумка рядом с тобой. Допиши слово о месте.",
          before: "My bag is ",
          after: ".",
          answer: "here",
          hint: "Рядом с тобой — то же расстояние, что у this в модуле «Что это такое».",
          why: "My bag is here. Here — о том, что рядом.",
        },
        {
          id: "z5-otvetit-tam",
          kind: "short",
          prompt: "Тебя спросили: «Where is the station?» Она далеко. Ответь целиком, начни с It's.",
          answer: "It's there.",
          exact: true,
          accept: ["It's there", "It is there.", "It is there"],
          hint: "Двух слов достаточно, но предложение должно быть целым.",
          why:
            "It's there. Одно слово There собеседник поймёт, но целое предложение звучит " +
            "законченно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "next-to-i-opposite",
      title: "Рядом с, перед и напротив",
      estimatedMinutes: 13,
      outcome: "говорить, где предмет относительно другого: next to, in front of, opposite",

      blocks: [
        {
          id: "zachem-next-to",
          kind: "explain",
          text: [
            "Слова near мало, когда нужно точнее: стул стоит вплотную к столу, машина — " +
              "перед домом, магазин — напротив станции. Для этого есть ещё три предлога.",
            "Два из них состоят не из одного слова: next to и in front of. Ставят их так " +
              "же, как in или under, а запоминают целиком.",
          ],
        },
        {
          id: "tablica-next-to",
          kind: "table",
          caption: "Ещё три предлога",
          head: ["Оборот", "Где именно", "Пример"],
          rows: [
            ["next to", "вплотную, сбоку", "The chair is next to the table."],
            ["in front of", "перед", "The car is in front of the house."],
            ["opposite", "напротив, через дорогу", "The shop is opposite the station."],
          ],
        },
        {
          id: "next-to-i-near",
          kind: "note",
          tone: "info",
          text:
            "Near и next to значат почти одно, но не совсем. Near — «недалеко», может быть " +
            "и через две улицы. Next to — «вплотную», между ними ничего нет.",
        },
        {
          id: "opposite-bez-of",
          kind: "note",
          tone: "mistake",
          text:
            "После opposite слово of не ставят: opposite the station.\n\nА вот in front of " +
            "без of не работает: in front of the house — все три слова вместе.",
        },
        {
          id: "primer-next-to",
          kind: "example",
          caption: "Комната и улица",
          text:
            "The chair is next to the table.\nThe car is in front of the house.\n" +
            "The shop is opposite the station.",
          explain:
            "Три предлога — три разных положения. Next to — вплотную, in front of — перед " +
            "входом, opposite — с другой стороны улицы.",
        },
        {
          id: "zapis-next-to",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай три предлога",
          transcript:
            "The chair is next to the table. The car is in front of the house. " +
            "The shop is opposite the station.",
        },
        {
          id: "slovar-next-to",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "next to", translation: "рядом с, вплотную", example: "next to the table", hint: "/ˈnekst tuː/" },
            { term: "in front of", translation: "перед", example: "in front of the house", hint: "/ɪn ˈfrʌnt əv/" },
            { term: "opposite", translation: "напротив", example: "opposite the station", hint: "/ˈɒpəzɪt/" },
            { term: "hospital", translation: "больница", example: "opposite the hospital", hint: "/ˈhɒspɪtl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-opposite-bez-of",
          kind: "hottext",
          prompt: "Отметь записи с лишним или пропущенным словом.",
          parts: [
            { text: "opposite the station", selectable: true },
            { text: " · " },
            { text: "opposite of the station", selectable: true, correct: true },
            { text: " · " },
            { text: "in front of the house", selectable: true },
            { text: " · " },
            { text: "in front the house", selectable: true, correct: true },
          ],
          hint: "Одному из двух нужно of, а другому — нет.",
          why:
            "После opposite of не пишут, а in front of без of не работает. " +
            "Остальные две записи собраны наоборот.",
        },
        {
          id: "z2-next-to-ili-near",
          kind: "choice",
          prompt: "Стул стоит вплотную к столу. Какой предлог точнее?",
          options: [
            { text: "near the table" },
            { text: "opposite the table" },
            { text: "next to the table", correct: true },
          ],
          hint: "Вплотную — значит между ними ничего нет.",
          why:
            "Next to the table. Near значило бы просто «недалеко», а opposite — «с другой " +
            "стороны».",
        },
        {
          id: "z3-pered-domom",
          kind: "gap",
          prompt: "Машина перед домом. Допиши все три слова.",
          before: "The car is ",
          after: " the house.",
          answer: "in front of",
          hint: "Три слова, и последнее из них — of.",
          why:
            "In front of the house. Без of так не говорят: in front the house сказать " +
            "нельзя.",
        },
        {
          id: "z4-sopostavit-oboroty",
          kind: "match",
          prompt: "Сопоставь предлог и его перевод.",
          left: ["opposite", "next to", "in front of"],
          right: ["перед", "напротив", "рядом, вплотную"],
          answer: [1, 2, 0],
          hint: "Сверься с таблицей урока.",
          why: "Opposite — напротив, next to — рядом вплотную, in front of — перед.",
        },
        {
          id: "z5-magazin-naprotiv",
          kind: "short",
          prompt: "Магазин напротив больницы. Запиши предложение целиком, начни с The shop.",
          answer: "The shop is opposite the hospital.",
          exact: true,
          accept: ["The shop is opposite the hospital"],
          hint: "После opposite слово of не ставят.",
          why: "The shop is opposite the hospital. Opposite идёт без хвоста.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-eto-vopros",
      title: "Где это: вопрос",
      estimatedMinutes: 12,
      outcome: "спрашивать, где предмет: Where is и Where are",

      blocks: [
        {
          id: "zachem-vopros-gde",
          kind: "explain",
          text: [
            "Слово where уже встречалось в модуле «Рассказ о себе»: Where are you from? " +
              "Там оно спрашивало, откуда человек. Здесь — где находится предмет: Where is my key?",
            "Устроен вопрос как все вопросы с be: сначала where, потом форма be, потом то, " +
              "о чём спрашивают.",
          ],
        },
        {
          id: "tablica-voprosov-gde",
          kind: "table",
          caption: "Вопрос и ответ",
          head: ["Вопрос", "Перевод", "Ответ"],
          rows: [
            ["Where is my key?", "Где мой ключ?", "It's in your bag."],
            ["Where is the shop?", "Где магазин?", "It's opposite the station."],
            ["Where are my keys?", "Где мои ключи?", "They're on the table."],
            ["Where are you?", "Ты где?", "I'm at the door."],
          ],
        },
        {
          id: "is-ili-are-v-voprose",
          kind: "note",
          tone: "mistake",
          text:
            "Форму be выбирают так же, как всегда. Про один предмет — is: Where is my " +
            "key? Про несколько — are: Where are my keys? Ключей несколько, поэтому и " +
            "форма are, и окончание -s у слова keys.\n\nУ слова you форма всегда are, как " +
            "и раньше: Where are you?",
        },
        {
          id: "otvet-s-predlogom-gde",
          kind: "note",
          tone: "info",
          text:
            "В ответе предлог не пропадает: не «your bag», а «in your bag». Это то же " +
            "правило, что в модуле «Дни, даты, время», где на вопрос When отвечали On Friday.",
        },
        {
          id: "primer-voprosa-gde",
          kind: "example",
          caption: "Дома",
          text:
            "— Where are my keys?\n— They're on the table.\n— And my phone?\n" +
            "— It's in your bag.",
          explain:
            "В первом ответе стоит they're — ключей несколько. Во втором it's — телефон " +
            "один. Слово о предмете выбирает и форму be, и местоимение в ответе.",
        },
        {
          id: "zapis-voprosa-gde",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопрос и ответ",
          transcript:
            "Where is my key? It's in your bag. Where are my keys? They're on the table.",
        },
        {
          id: "slovar-voprosa-gde",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "where", translation: "где, куда", example: "Where is my key?", hint: "/weə/" },
            { term: "key", translation: "ключ", example: "my keys", hint: "/kiː/" },
            { term: "room", translation: "комната", example: "in the room", hint: "/ruːm/" },
            { term: "kitchen", translation: "кухня", example: "in the kitchen", hint: "/ˈkɪtʃɪn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-is-ili-are",
          kind: "choice",
          prompt: "Ты ищешь свои ключи — их несколько. Какой вопрос верный?",
          options: [
            { text: "Where are my keys?", correct: true },
            { text: "Where is my keys?" },
            { text: "Where are my key?" },
          ],
          hint: "Форма be и окончание -s должны сойтись: либо оба про несколько, либо оба про один.",
          why:
            "Where are my keys? Ключей несколько, поэтому и форма are, и окончание -s.",
        },
        {
          id: "z2-sobrat-vopros-gde",
          kind: "order",
          prompt: "Собери вопрос: «Где магазин?»",
          items: ["the shop", "Where", "is"],
          answer: [1, 2, 0],
          hint: "Сначала where, потом форма be.",
          why: "Where is the shop? Порядок тот же, что в вопросах модуля про время.",
        },
        {
          id: "z3-otvet-s-predlogom",
          kind: "gap",
          prompt: "Ключ в сумке. Допиши предлог в ответе.",
          before: "It's ",
          after: " your bag.",
          answer: "in",
          hint: "Предлог в ответе не пропадает.",
          why: "It's in your bag. Без предлога ответ был бы незакончен.",
        },
        {
          id: "z4-otmetit-otvety-gde",
          kind: "hottext",
          prompt: "Отметь ответы, которые подходят на вопрос «Where are my keys?»",
          parts: [
            { text: "It's on the table.", selectable: true },
            { text: " · " },
            { text: "They're on the table.", selectable: true, correct: true },
            { text: " · " },
            { text: "They're in your bag.", selectable: true, correct: true },
            { text: " · " },
            { text: "It's in your bag.", selectable: true },
          ],
          hint: "Спрашивают про несколько предметов — значит и отвечать надо про несколько.",
          why:
            "Ключей несколько, поэтому в ответе they're. Ответы с it's подошли бы на " +
            "вопрос про один ключ.",
        },
        {
          id: "z5-sprosit-gde",
          kind: "short",
          prompt: "Спроси, где кухня. Запиши вопрос целиком.",
          answer: "Where is the kitchen?",
          exact: true,
          accept: ["Where is the kitchen"],
          hint: "Кухня одна — значит нужна форма is.",
          why: "Where is the kitchen? Один предмет — форма is.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "v-gorode",
      title: "Места в городе",
      estimatedMinutes: 13,
      outcome: "называть места в городе: shop, station, hospital, park",

      blocks: [
        {
          id: "zachem-mesta",
          kind: "explain",
          text: [
            "Названия мест написаны на вывесках и указателях, и узнавать их приходится " +
              "раньше, чем говорить: Station, Hospital, Bus stop.",
            "Восьми слов хватает, чтобы найти дорогу в незнакомом городе. Шесть из них " +
              "уже встречались в прошлых уроках, новых только два: hotel и bus stop.",
          ],
        },
        {
          id: "tablica-mest",
          kind: "table",
          caption: "Восемь мест",
          head: ["Место", "По-русски", "Как читается"],
          rows: [
            ["shop", "магазин", "/ʃɒp/"],
            ["station", "станция, вокзал", "/ˈsteɪʃn/"],
            ["hospital", "больница", "/ˈhɒspɪtl/"],
            ["park", "парк", "/pɑːk/"],
            ["school", "школа", "/skuːl/"],
            ["hotel", "гостиница", "/həʊˈtel/"],
            ["bus stop", "остановка автобуса", "/ˈbʌs stɒp/"],
            ["street", "улица", "/striːt/"],
          ],
        },
        {
          id: "park-dva-znacheniya",
          kind: "note",
          tone: "info",
          text:
            "На указателе может стоять похожее слово — Parking. Это не парк: так помечают " +
            "место, где ставят машины. Парк — park, а Parking длиннее на четыре буквы.",
        },
        {
          id: "nazvaniya-s-zaglavnoy",
          kind: "note",
          tone: "mistake",
          text:
            "На вывеске слово пишут с заглавной: Hospital, Station. Внутри предложения — с " +
            "маленькой: The hospital is opposite the park.\n\nЗаглавная нужна именам: " +
            "Dana, Almaty, Kazakhstan — как в модуле «Алфавит и своё имя». Слово hospital " +
            "не имя, а обычное слово.",
        },
        {
          // Здесь the работает иначе, чем в уроке «A и the»: место названо
          // впервые, а артикль всё равно определённый. Причина — вокзал в
          // разговоре один, и оба это понимают. Без этой врезки ученик, честно
          // выучивший «первый раз — a», на первом же указателе споткнётся.
          id: "the-o-meste-v-gorode",
          kind: "note",
          tone: "info",
          text:
            "О местах в городе говорят the, когда место в разговоре одно: The station is " +
            "opposite the park.\n\nПричина та же, что в модуле «Дни, даты, время», в " +
            "уроке «A и the». Вокзал в разговоре о городе один, парк один — собеседник и " +
            "так понимает, о чём речь.\n\nA ставят, когда место одно из многих и неважно " +
            "какое: It's a hotel — просто гостиница.",
        },
        {
          id: "primer-goroda",
          kind: "example",
          caption: "Что где в городе",
          text:
            "The hotel is opposite the station.\nThe bus stop is in front of the hotel.\n" +
            "The park is behind the school.",
          explain:
            "Три предложения, три предлога из прошлых уроков. Слова о местах ведут себя " +
            "как любые другие предметы: перед ними стоит the. Дальше всё как раньше — " +
            "форма be, предлог, второе место.",
        },
        {
          id: "zapis-goroda",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай восемь мест",
          transcript:
            "Shop. Station. Hospital. Park. School. Hotel. Bus stop. Street.",
        },
        {
          id: "slovar-goroda",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "hotel", translation: "гостиница", example: "opposite the hotel", hint: "/həʊˈtel/" },
            { term: "bus", translation: "автобус", example: "a bus stop", hint: "/bʌs/" },
            { term: "stop", translation: "остановка", example: "the bus stop", hint: "/stɒp/" },
            { term: "map", translation: "карта", example: "a big map", hint: "/mæp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nazvat-mesto",
          kind: "gap",
          prompt: "Гостиница напротив вокзала. Допиши название места.",
          before: "The hotel is opposite the ",
          after: ".",
          answer: "station",
          hint: "Слово из таблицы, читается /ˈsteɪʃn/.",
          why: "The hotel is opposite the station. Station — станция или вокзал.",
        },
        {
          id: "z2-sopostavit-mesta",
          kind: "match",
          // Раньше сопоставлялись hospital, hotel и station — все три узнаются
          // русскоговорящим без урока. Нашёл методист.
          prompt: "Сопоставь место и то, что там делают.",
          left: ["bus stop", "shop", "hospital"],
          right: ["покупают", "лечат", "ждут автобус"],
          answer: [2, 0, 1],
          hint: "Сверься с таблицей урока.",
          why:
            "На bus stop ждут автобус, в shop покупают, в hospital лечат. Слово bus stop " +
            "состоит из двух: автобус и остановка.",
        },
        {
          id: "z3-zaglavnaya-v-nazvanii",
          kind: "hottext",
          prompt: "Отметь записи, где слово написано с ошибкой.",
          parts: [
            { text: "The hospital is near my house.", selectable: true },
            { text: " · " },
            { text: "The Hospital is near my house.", selectable: true, correct: true },
            { text: " · " },
            { text: "The park is behind the school.", selectable: true },
            { text: " · " },
            { text: "The Park is behind the school.", selectable: true, correct: true },
          ],
          hint: "Заглавная нужна на вывеске, а внутри предложения — нет.",
          why:
            "Внутри предложения названия мест пишут с маленькой буквы: the hospital, the " +
            "park. Заглавная осталась бы на самой вывеске.",
        },
        {
          id: "z4-opisat-gorod",
          kind: "short",
          prompt: "Остановка перед гостиницей. Запиши предложение целиком, начни с The bus stop.",
          answer: "The bus stop is in front of the hotel.",
          exact: true,
          accept: ["The bus stop is in front of the hotel"],
          hint: "Оборот «перед» состоит из трёх слов.",
          why:
            "The bus stop is in front of the hotel. Оборот in front of берётся целиком, " +
            "вместе с of.",
        },
        {
          id: "z5-gde-avtobus",
          kind: "choice",
          prompt: "Ты ищешь остановку автобуса. Какое слово на указателе тебе нужно?",
          options: [
            { text: "Parking" },
            { text: "Bus stop", correct: true },
            { text: "Station" },
          ],
          hint: "Остановка автобуса — два слова, и первое из них про автобус.",
          why:
            "Bus stop. Parking — стоянка машин, Station — вокзал или станция.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-proyti",
      title: "Как пройти",
      estimatedMinutes: 13,
      outcome: "понимать и повторять указания дороги: go, turn left, turn right",

      blocks: [
        {
          id: "zachem-dorogu",
          kind: "explain",
          text: [
            "Тебе объясняют дорогу: Go straight. Turn left. The shop is opposite the park. " +
              "Два коротких указания, потом место — и ты на месте.",
            "Слова тут особые. Go и turn стоят без подлежащего: не «ты идёшь», а просто " +
              "«иди». Так по-английски дают указания, и слово о том, кто идёт, не нужно.",
          ],
        },
        {
          id: "tablica-ukazaniy",
          kind: "table",
          caption: "Четыре указания",
          head: ["Указание", "Перевод", "Когда"],
          rows: [
            ["Go straight.", "Иди прямо.", "дорога не поворачивает"],
            ["Turn left.", "Поверни налево.", "на углу, налево"],
            ["Turn right.", "Поверни направо.", "на углу, направо"],
            ["Go to the station.", "Иди к станции.", "названо, куда идти"],
          ],
        },
        {
          // Раньше здесь стояло «это единственный случай в курсе». Неверно:
          // Excuse me!, Thank you! и Sorry тоже идут без подлежащего, и два из
          // них ученик знает с модуля 2, а третий стоит страницей ниже.
          // Нашёл редактор.
          id: "bez-podlezhashchego",
          kind: "note",
          tone: "mistake",
          text:
            "Указания устроены иначе, чем обычные предложения: Turn left, а не «You turn " +
            "left». Слова о том, кто идёт, в них нет — по-русски так же: не «ты " +
            "повернёшь», а «поверни».\n\nЭто слово называется подлежащим, оно было в " +
            "модуле «Приветствие»: She is fine, Dana is fine. В обычном предложении " +
            "подлежащее обязательно, а в указании его нет.",
        },
        {
          id: "left-i-right",
          kind: "note",
          tone: "info",
          text:
            "Слово right уже встречалось в модуле «Не так» — там оно значило " +
            "«правильный»: You are right. Здесь то же слово значит «направо». Различает их " +
            "то, что стоит рядом: turn right — «направо», You are right — «ты прав».",
        },
        {
          id: "primer-dorogi",
          kind: "example",
          caption: "На улице",
          text:
            "— Where is the hospital?\n— Go straight. Turn left. It's opposite the park.\n" +
            "— Thank you!",
          explain:
            "Дорогу объясняют по шагам: сначала куда идти, потом где повернуть, потом где " +
            "искать. Последнее предложение уже знакомое — предмет, форма be, предлог.",
        },
        {
          id: "zapis-dorogi",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай указания",
          transcript:
            "Go straight. Turn left. Turn right. Go to the station. It's opposite the park.",
        },
        {
          id: "slovar-dorogi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "go", translation: "иди, идти", example: "Go straight.", hint: "/ɡəʊ/" },
            { term: "turn", translation: "поверни, поворачивать", example: "Turn left.", hint: "/tɜːn/" },
            { term: "left", translation: "налево, левый", example: "Turn left.", hint: "/left/" },
            { term: "right", translation: "направо, правый", example: "Turn right.", hint: "/raɪt/" },
            { term: "straight", translation: "прямо", example: "Go straight.", hint: "/streɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-bez-podlezhashchego",
          kind: "choice",
          prompt: "Как сказать «поверни налево»?",
          // Отвлекающие раньше стояли в настоящем простом времени, которого
          // модуль сам не даёт, а «Turn to left» требовало правила, которого в
          // материале нет. Нашёл методист.
          options: [
            { text: "You are left." },
            { text: "Turn left.", correct: true },
            { text: "Left." },
          ],
          hint: "Указание начинается с самого действия.",
          why:
            "Turn left. «You are left» — это вообще не про поворот, а «Left» само по " +
            "себе не говорит, что с ним делать.",
        },
        {
          id: "z2-dopisat-ukazanie",
          kind: "gap",
          prompt: "Дорога не поворачивает. Допиши слово.",
          before: "Go ",
          after: ".",
          answer: "straight",
          hint: "Восемь букв, и звучит как /streɪt/.",
          why: "Go straight. Так говорят, когда идти нужно вперёд, никуда не сворачивая.",
        },
        {
          id: "z3-otmetit-ukazaniya",
          kind: "hottext",
          prompt: "Отметь записи, в которых указание дано верно.",
          parts: [
            { text: "Straight.", selectable: true },
            { text: " · " },
            { text: "Turn right.", selectable: true, correct: true },
            { text: " · " },
            { text: "Go straight.", selectable: true, correct: true },
            { text: " · " },
            { text: "Left.", selectable: true },
          ],
          hint: "В указании есть само действие: go или turn.",
          why:
            "Turn right и Go straight — указания: в каждом есть действие. «Straight» и " +
            "«Left» называют только направление.",
        },
        {
          id: "z4-left-ili-right",
          kind: "match",
          prompt: "Сопоставь указание и перевод.",
          left: ["Turn left.", "Go straight.", "Turn right."],
          right: ["Иди прямо.", "Поверни направо.", "Поверни налево."],
          answer: [2, 0, 1],
          hint: "Сверься с таблицей урока.",
          why: "Turn left — налево, Go straight — прямо, Turn right — направо.",
        },
        {
          id: "z5-dva-ukazaniya",
          kind: "short",
          prompt: "Скажи два указания подряд: иди прямо, поверни направо. Запиши оба предложения.",
          answer: "Go straight. Turn right.",
          exact: true,
          accept: ["Go straight. Turn right"],
          hint: "Каждое указание — отдельное предложение, с точкой.",
          why:
            "Go straight. Turn right. Указания дают по одному, каждое отдельным " +
            "предложением.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "obyasnit-dorogu",
      title: "Объяснить дорогу",
      estimatedMinutes: 14,
      outcome: "объяснять дорогу двумя-тремя указаниями",

      blocks: [
        {
          id: "zachem-obyasnit",
          kind: "explain",
          text: [
            "Спросить дорогу ты уже умеешь: Where is the hospital? Осталось научиться " +
              "отвечать — и это сложнее, потому что говорить придётся больше.",
            "Ответ строится из двух частей: сначала указания — куда идти, потом место — " +
              "где искать. Двух-трёх указаний достаточно: больше собеседник всё равно не запомнит.",
          ],
        },
        {
          id: "shagi-dorogi",
          kind: "table",
          caption: "Ответ по шагам",
          head: ["Шаг", "Что говорят", "Пример"],
          rows: [
            ["1", "куда идти", "Go straight."],
            ["2", "где повернуть", "Turn left."],
            ["3", "где искать", "It's opposite the park."],
          ],
        },
        {
          id: "polnyy-razgovor-dorogi",
          kind: "example",
          caption: "Разговор целиком",
          text:
            "— Excuse me! Where is the hotel?\n— Go straight. Turn right.\n" +
            "— And then?\n— It's next to the bus stop.\n— Thank you!\n— You're welcome.",
          explain:
            "Excuse me — «извините», так начинают разговор с незнакомым человеком. " +
            "And then? — «а потом?»: так просят продолжить, если указаний оказалось мало.",
        },
        {
          id: "esli-ne-znaesh",
          kind: "note",
          tone: "info",
          text:
            "Дорогу спрашивают и у тех, кто её не знает. Ответ на этот случай короткий: " +
            "Sorry, I'm not from here — «извините, я не отсюда». Слово from здесь то же, " +
            "что в I'm from Almaty. Речь не о том, где человек стоит сейчас, а о том, " +
            "откуда он.",
        },
        {
          id: "gde-rvyotsya-doroga",
          kind: "note",
          tone: "mistake",
          text:
            "Указания без последнего шага бесполезны. «Go straight. Turn left.» — и " +
            "человек идёт, не зная, что искать. Назови место в конце: It's opposite the " +
            "park.",
        },
        {
          id: "zapis-obyasneniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор целиком",
          transcript:
            "Excuse me! Where is the hotel? — Go straight. Turn right. — And then? " +
            "— It's next to the bus stop. — Thank you! — You're welcome.",
        },
        {
          id: "slovar-obyasneniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "excuse me", translation: "извините (обращение)", example: "Excuse me! Where is the hotel?", hint: "/ɪkˈskjuːz miː/" },
            { term: "then", translation: "потом, затем", example: "And then?", hint: "/ðen/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sobrat-obyasnenie",
          kind: "order",
          prompt: "Расставь реплики разговора по порядку.",
          items: [
            "It's next to the bus stop.",
            "Excuse me! Where is the hotel?",
            "Go straight. Turn right.",
            "And then?",
          ],
          answer: [1, 2, 3, 0],
          hint: "Сначала спрашивают, в самом конце называют место.",
          why:
            "Сначала вопрос, потом два указания, потом просьба продолжить, и в конце — " +
            "место. Тот же порядок, что в таблице шагов.",
        },
        {
          id: "z2-dopisat-poslednee",
          kind: "gap",
          prompt: "Куда идти, уже сказано. Допиши последний шаг: магазин напротив парка.",
          before: "Go straight. Turn left. It's ",
          after: " the park.",
          answer: "opposite",
          hint: "После этого слова of не нужно.",
          why:
            "It's opposite the park. Без последнего шага человек дойдёт до угла и " +
            "остановится.",
        },
        {
          id: "z3-otmetit-nepolnye",
          kind: "hottext",
          prompt: "Отметь объяснения, после которых человек не найдёт нужное место.",
          parts: [
            { text: "Go straight. It's next to the shop.", selectable: true },
            { text: " · " },
            { text: "Go straight. Turn left.", selectable: true, correct: true },
            { text: " · " },
            { text: "Turn right. It's opposite the park.", selectable: true },
            { text: " · " },
            { text: "Turn left. Go straight.", selectable: true, correct: true },
          ],
          hint: "В объяснении должен быть назван не только путь, но и само место.",
          why:
            "Во втором и четвёртом объяснении есть только указания, а место не названо. " +
            "Человек дойдёт до угла и остановится.",
        },
        {
          id: "z4-esli-ne-znaesh",
          kind: "short",
          prompt: "У тебя спросили дорогу, а ты в этом городе недавно. Ответь: «Извините, я не отсюда».",
          answer: "Sorry, I'm not from here.",
          exact: true,
          accept: ["Sorry, I'm not from here", "Sorry, I am not from here."],
          hint: "Отрицание с be было в модуле «Не так», слово here — в уроке «Здесь и там».",
          why:
            "Sorry, I'm not from here. Отрицание с be и слово here — оба уже знакомы.",
        },
        {
          // Раньше это было задание на три предложения со сверкой по точному
          // совпадению. При такой сверке ученик обязан угадать две внутренние
          // точки и две заглавные буквы, а урок им не учил: он учил порядку
          // «указания, потом место». Нашёл редактор.
          id: "z5-obyasnit-celikom",
          kind: "order",
          prompt: "Собери объяснение дороги: прямо, налево, гостиница напротив станции.",
          items: [
            "opposite the station.",
            "Go straight.",
            "The hotel is",
            "Turn left.",
          ],
          answer: [1, 3, 2, 0],
          hint: "Сначала два указания, потом место.",
          why:
            "Go straight. Turn left. The hotel is opposite the station. Указания идут " +
            "без подлежащего, а последнее предложение обычное, с формой be.",
        },
        {
          id: "z6-proiznesti-dorogu",
          kind: "speak",
          prompt: "Объясни вслух дорогу до остановки: прямо, направо, рядом с магазином.",
          phrase: "Go straight. Turn right. The bus stop is next to the shop.",
          translation: "Иди прямо. Поверни направо. Остановка рядом с магазином.",
          hint: "Между указаниями делай паузу, как на точке.",
          why:
            "Так дорогу и объясняют: короткими предложениями, по одному указанию в каждом.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Вопросов 22, из них 10 требуют написать ответ самому (short и gap), ещё
  // четыре — расставить части. Итогов восемь, на каждый не меньше двух вопросов.
  // =======================================================================
  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      {
        id: "q-in-on-under",
        kind: "gap",
        outcome: "говорить, где предмет: in, on, under",
        prompt: "Книга на столе. Допиши предлог.",
        before: "The book is ",
        after: " the table.",
        answer: "on",
        why: "The book is on the table. Предлог on — о поверхности.",
      },
      {
        id: "q-sobrat-pod-stulom",
        kind: "order",
        outcome: "говорить, где предмет: in, on, under",
        prompt: "Собери предложение: «Ключ под стулом».",
        items: ["under", "The key", "the chair", "is"],
        answer: [1, 3, 0, 2],
        why: "The key is under the chair. Порядок тот же, что во всех предложениях с be.",
      },
      {
        id: "q-tri-predloga-quiz",
        kind: "match",
        outcome: "говорить, где предмет: in, on, under",
        prompt: "Сопоставь предлог и то, что он значит.",
        left: ["in", "under", "on"],
        right: ["на поверхности", "внутри", "под"],
        answer: [1, 2, 0],
        why: "In — внутри, under — под, on — на поверхности.",
      },
      {
        id: "q-between-and",
        kind: "gap",
        outcome: "говорить, что предмет рядом, позади или между: near, behind, between",
        prompt: "Гостиница между парком и вокзалом. Допиши недостающее слово.",
        before: "The hotel is between the park ",
        after: " the station.",
        answer: "and",
        why: "Between the park and the station. После between всегда два места.",
      },
      {
        id: "q-za-shkoloy",
        kind: "short",
        outcome: "говорить, что предмет рядом, позади или между: near, behind, between",
        prompt: "Парк позади школы. Запиши предложение целиком, начни с The park.",
        answer: "The park is behind the school.",
        exact: true,
        accept: ["The park is behind the school"],
        why: "The park is behind the school. Behind значит «позади».",
      },
      {
        id: "q-zdes-v-konce",
        kind: "order",
        outcome: "ставить here и there в конец предложения",
        prompt: "Собери предложение: «Магазин там».",
        items: ["there", "is", "The shop"],
        answer: [2, 1, 0],
        why: "The shop is there. Слово о месте идёт последним.",
      },
      {
        id: "q-bez-predloga-quiz",
        kind: "choice",
        outcome: "ставить here и there в конец предложения",
        prompt: "Какая запись верна?",
        options: [
          { text: "My car is at here." },
          { text: "My car is here.", correct: true },
          { text: "My car is at here." },
        ],
        why: "My car is here. Перед here и there предлог не ставят.",
      },
      {
        // Раньше совпадал с заданием урока поле в поле. Нашёл методист.
        id: "q-here-quiz",
        kind: "short",
        outcome: "ставить here и there в конец предложения",
        prompt: "Станция далеко от тебя. Запиши предложение целиком, начни с The station.",
        answer: "The station is there.",
        exact: true,
        accept: ["The station is there"],
        why: "The station is there. Слово о месте идёт последним, предлог перед ним не нужен.",
      },
      {
        id: "q-in-front-of",
        kind: "gap",
        outcome: "говорить, где предмет относительно другого: next to, in front of, opposite",
        prompt: "Автобус перед гостиницей. Допиши все три слова.",
        before: "The bus is ",
        after: " the hotel.",
        answer: "in front of",
        why: "In front of the hotel. Без of эти слова не работают.",
      },
      {
        id: "q-opposite-quiz",
        kind: "short",
        outcome: "говорить, где предмет относительно другого: next to, in front of, opposite",
        prompt: "Больница напротив парка. Запиши предложение целиком, начни с The hospital.",
        answer: "The hospital is opposite the park.",
        exact: true,
        accept: ["The hospital is opposite the park"],
        why: "The hospital is opposite the park. После opposite слово of не нужно.",
      },
      {
        id: "q-next-to-quiz",
        kind: "short",
        outcome: "говорить, где предмет относительно другого: next to, in front of, opposite",
        // Раньше — то же задание урока с переставленными отвлекающими.
        prompt: "Магазин стоит через дорогу от парка. Запиши предложение целиком, начни с The shop.",
        answer: "The shop is opposite the park.",
        exact: true,
        accept: ["The shop is opposite the park"],
        why: "The shop is opposite the park. Через дорогу — это opposite, и of после него нет.",
      },
      {
        id: "q-where-are",
        kind: "short",
        outcome: "спрашивать, где предмет: Where is и Where are",
        // Раньше совпадал с заданием урока дословно, включая порядок вариантов.
        prompt: "Ты ищешь книги — их несколько. Запиши вопрос целиком.",
        answer: "Where are my books?",
        exact: true,
        accept: ["Where are my books"],
        why:
          "Where are my books? Книг несколько, поэтому и форма are, и окончание -s у " +
          "слова books.",
      },
      {
        id: "q-sprosit-gde-quiz",
        kind: "short",
        outcome: "спрашивать, где предмет: Where is и Where are",
        prompt: "Спроси, где комната. Запиши вопрос целиком.",
        answer: "Where is the room?",
        exact: true,
        accept: ["Where is the room"],
        why: "Where is the room? Один предмет — форма is.",
      },
      {
        id: "q-otvet-they",
        kind: "hottext",
        outcome: "спрашивать, где предмет: Where is и Where are",
        prompt: "Отметь ответы, которые подходят на вопрос «Where are my books?»",
        parts: [
          { text: "It's on the table.", selectable: true },
          { text: " · " },
          { text: "They're on the table.", selectable: true, correct: true },
          { text: " · " },
          { text: "They're in your bag.", selectable: true, correct: true },
          { text: " · " },
          { text: "It's in your bag.", selectable: true },
        ],
        why: "Книг несколько, поэтому в ответе they're, а не it's.",
      },
      {
        id: "q-mesta-sopostavit",
        kind: "match",
        outcome: "называть места в городе: shop, station, hospital, park",
        prompt: "Сопоставь место и то, что там делают.",
        left: ["hotel", "park", "shop"],
        right: ["гуляют", "покупают", "ночуют в чужом городе"],
        answer: [2, 0, 1],
        why: "В hotel ночуют, в park гуляют, в shop покупают.",
      },
      {
        id: "q-nazvat-mesto-quiz",
        kind: "gap",
        outcome: "называть места в городе: shop, station, hospital, park",
        prompt: "Магазин рядом с больницей. Допиши название места.",
        before: "The shop is near the ",
        after: ".",
        answer: "hospital",
        why: "The shop is near the hospital. Hospital — больница.",
      },
      {
        id: "q-zaglavnaya-v-meste",
        kind: "hottext",
        outcome: "называть места в городе: shop, station, hospital, park",
        prompt: "Отметь записи, где слово написано с ошибкой.",
        parts: [
          { text: "The station is near my house.", selectable: true },
          { text: " · " },
          { text: "The Station is near my house.", selectable: true, correct: true },
          { text: " · " },
          { text: "The shop is behind the park.", selectable: true },
          { text: " · " },
          { text: "The Shop is behind the park.", selectable: true, correct: true },
        ],
        why:
          "Внутри предложения названия мест пишут с маленькой буквы. Заглавная остаётся " +
          "на самой вывеске.",
      },
      {
        id: "q-ukazanie-bez-you",
        kind: "choice",
        outcome: "понимать и повторять указания дороги: go, turn left, turn right",
        prompt: "Как сказать «поверни направо»?",
        options: [
          { text: "You are right." },
          { text: "Right." },
          { text: "Turn right.", correct: true },
        ],
        why:
          "Turn right. «You are right» значит «ты прав», а «Right» само по себе не " +
          "говорит, что делать.",
      },
      {
        // Раньше совпадал с заданием урока поле в поле. Нашёл методист.
        id: "q-go-straight-quiz",
        kind: "short",
        outcome: "понимать и повторять указания дороги: go, turn left, turn right",
        prompt: "Скажи два указания подряд: поверни налево, потом иди прямо. Запиши оба предложения.",
        answer: "Turn left. Go straight.",
        accept: ["Turn left. Go straight", "turn left. go straight."],
        why: "Turn left. Go straight. Каждое указание — отдельное предложение.",
      },
      {
        id: "q-ukazaniya-sopostavit",
        kind: "match",
        outcome: "понимать и повторять указания дороги: go, turn left, turn right",
        prompt: "Сопоставь указание и перевод.",
        left: ["Go straight.", "Turn right.", "Turn left."],
        right: ["Поверни налево.", "Иди прямо.", "Поверни направо."],
        answer: [1, 2, 0],
        why: "Go straight — прямо, Turn right — направо, Turn left — налево.",
      },
      {
        // Та же беда, что была в уроке 8: сверка по точному совпадению снимала
        // балл за внутреннюю пунктуацию, к итогу отношения не имеющую.
        id: "q-obyasnit-dorogu-quiz",
        kind: "order",
        outcome: "объяснять дорогу двумя-тремя указаниями",
        prompt: "Собери объяснение дороги: прямо, направо, магазин напротив парка.",
        items: ["Turn right.", "opposite the park.", "Go straight.", "The shop is"],
        answer: [2, 0, 3, 1],
        why:
          "Go straight. Turn right. The shop is opposite the park. Два указания и место в " +
          "конце.",
      },
      {
        id: "q-poryadok-dorogi",
        kind: "order",
        outcome: "объяснять дорогу двумя-тремя указаниями",
        prompt: "Расставь реплики разговора по порядку.",
        items: [
          "It's next to the shop.",
          "Go straight. Turn left.",
          "Excuse me! Where is the bus stop?",
        ],
        answer: [2, 1, 0],
        why: "Вопрос, указания, место. Без последнего шага человек не дойдёт.",
      },
    ],
  },
};

export default module;
