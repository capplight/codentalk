import type { Module } from "@/lib/content/types";

/**
 * Модуль 23 курса «Английский · Elementary»: уже и ещё нет.
 *
 * Программа: docs/programma-english-elementary.md, модуль 23 — «сообщать о
 * сделанном и несделанном»; грамматика: Present Perfect, `yet`, `already`,
 * `just`, вопрос и отрицание. Строка проверена 25 августа 2026, до написания;
 * разбор с цитатами — там же, под таблицей четвёртой части.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «PRESENT PERFECT», И ЗДЕСЬ ОНО НЕ НАЗЫВАЕТСЯ.
 *
 * Правило курса: время называют один раз, при первой встрече ВНУТРИ СТУПЕНИ.
 * Первая встреча была в модуле 22, там имя и стоит. Модуль 23 работает тем же
 * временем, и повторять имя не должен.
 *
 * ЧЕМ ЭТОТ МОДУЛЬ ОТЛИЧАЕТСЯ ОТ ДВАДЦАТЬ ВТОРОГО. Тот говорил об опыте за всю
 * жизнь («видел ли когда-нибудь»), этот — о делах, которые надо было сделать к
 * сроку: сделано уже или ещё нет. Слова `already`, `yet` и `just` и есть
 * приметы этого случая.
 *
 * ГРАНИЦЫ, ПРОВЕРЕННЫЕ ПО КАЖДОМУ СЛОВУ ОТДЕЛЬНО:
 *
 * - **`yet` — A2, но графа у него ровно про отрицание.** «FORM/USE: WITH
 *   'YET'»: «Can use **the negative form** with 'yet'…», пример «I haven't seen
 *   it yet». Про вопрос («Have you finished yet?») графа молчит, а руководство
 *   A2 Key, с. 52, называет `yet` без такой оговорки. Модуль берёт и вопрос, и
 *   отрицание; примерами A2 подтверждено только отрицание, и это объявляется
 *   здесь.
 * - **`just` подтверждён дважды.** Руководство: «recent past with just».
 *   English Grammar Profile — примером графы A2 «FORM: WITH ADVERBS»: «I have
 *   **just** seen your notice». Тот же случай, что с `been` в модуле 22:
 *   дескриптор говорит «a limited range of adverbs», а какие именно — показывает
 *   пример.
 * - **`already` — B1 у English Grammar Profile и A2 у руководства.** Графа
 *   «FORM/USE: WITH 'ALREADY'» стоит на B1. Берём по руководству и словнику,
 *   мерка та же, что в модулях 18–22.
 *
 * ГРАНИЦА ЛИЦ — ТРЕТИЙ МОДУЛЬ ПОДРЯД, И У ОТРИЦАНИЯ ОНА УЖЕ.
 *
 * Графа A2 «FORM: NEGATIVE» говорит: «Can use the negative form 'haven't' +
 * '-ed' **with 'I'** with a limited range of verbs» — не «I и we», как у
 * утверждения в модуле 22, а только `I`. B1 «FORM: NEGATIVE» — «with a range of
 * pronouns». Поэтому **отрицание спрашивается только у `I`**, вопрос — у `you`
 * (графа A2 «FORM: QUESTIONS»), а ряд по-прежнему показывается таблицей
 * целиком: половина парадигмы хуже целой.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ:
 *
 * - **отрицательный вопрос** («Haven't you seen it yet?») — B1, отдельная графа
 *   «FORM: NEGATIVE QUESTIONS». Это ровно та строка, которую тянет поставить
 *   рядом с `yet`, и брать её нельзя;
 * - `for` и `since` — модуль 24 по программе;
 * - `ever` и `never` — их место в модуле 22, и повторять их здесь незачем.
 *
* СЛОВАРЬ МОДУЛЯ — ДВАДЦАТЬ КАРТОЧЕК, А НЕ ТРИДЦАТЬ, И ЭТО РЕШЕНИЕ, КОТОРОЕ
 * НАДО ОБЪЯСНИТЬ. Из них новых для ступени восемнадцать: `just` и `prepare`
 * Oxford помечает A1.
 *
 * Первая редакция набрала тридцать. Методист показал, что ТРИНАДЦАТЬ из них не
 * работали в модуле нигде, кроме себя самих: `channel`, `pop`, `ad`, `length`,
 * `birth`, `smoking`, `businessman`, `fail`, `further`, `against`, `fair`,
 * `able`, `including`. Это ровно «след добитой ради счёта нормы», о котором
 * говорят правила проекта.
 *
 * Пять из тринадцати вплетены в текст и остались: `fair` и `able` — в разговор
 * урока 4, `including` — в записку урока 5, `smoking` — туда же, `businessman`
 * — в запись урока 6. Остальные восемь сняты: втиснуть поп-музыку и дату
 * рождения в модуль о сборах к приезду гостя можно только силой, а силой и
 * получаются мёртвые карточки.
 *
 * ЗДЕСЬ СТАЛКИВАЮТСЯ ДВА РЕШЕНИЯ ВЛАДЕЛЬЦА, И ЭТО НАДО РЕШИТЬ ЕМУ.
 * Решение от 20 августа: «не меньше 30 карточек на модуль, из них 15 новых».
 * Уточнение от 21 августа: «не надо форсить, можно по ходу добавлять чуть
 * больше слов», и проверка на карточку-одиночку написана именно против
 * форсирования.
 *
 * До модуля 20 они не спорили: слов ступени хватало. Теперь запас — 147 слов
 * против 200 перед модулем 21, больше половины из них Oxford помечает B1,
 * часть американские (`candy`, `elevator`, `eraser`, `mail`, `soccer`), у
 * десятка молчит транскрипция. Набрать тридцать слов, которые в ОДНОМ модуле
 * работают друг на друга, из такого остатка уже нельзя.
 *
 * Пока владелец не решил иначе, модуль держит двадцать работающих карточек, а
 * не тридцать с тринадцатью мёртвыми. Сверка `kontrol` пишет об этом вопросом,
 * а не ошибкой — то есть решает методист, и он решил так.
 *
 * `yet` КАРТОЧКИ ЗДЕСЬ НЕ ПОЛУЧАЕТ, И ЭТО НАРОЧНО: её завёл модуль 10 «Уже
 * договорились». Вторая карточка сказала бы ученику, что слово новое.
 *
 * ВОСЕМЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000: accommodation, block,
 * ingredient, slice, various, kiss, ad, length — B1. Все восемь стоят в
 * словнике A2 Key.
 *
 * ШЕСТИ СЛОВ OXFORD 3000 НЕ ЗНАЕТ ВОВСЕ: pharmacy, boiled, fried, roast,
 * lunchtime, sink. Это не «выше ступени», а отсутствие пометы.
 *
 * ОСТОРОЖНО, ЗДЕСЬ Я УЖЕ ОШИБСЯ ОДИН РАЗ. Сверка `kontrol` сказала «fried
 * (B1)», я поверил на слово и перенёс слово в список взятых выше ступени.
 * В `oxford-3000` строки `fried` НЕТ ВОВСЕ — есть `fry v. B1`, другое
 * слово и другая часть речи; сверка сравнила основы. То же у `sink`: там
 * `sink v. B1`, «тонуть», а карточка даёт существительное «раковина»
 * (`sink (n)` словника). Нашёл методист. Урок: **помету Oxford проверяют
 * по строке файла, а не по ответу скрипта** — усечение основ врёт в обе
 * стороны, и об этом прямо сказано в правилах проекта.
 *
 * ЗАПАС СТУПЕНИ ПОДХОДИТ К КОНЦУ — 147 слов против 200 перед модулем 21, и
 * больше половины из них B1. Разбор и что с этим делать — в программе, под
 * таблицей четвёртой части. Здесь довольно знать, что слова подбирались из
 * остатка и потому мир модуля широк нарочно: сборы к приезду гостей, готовка и
 * дела по дому.
 */
const module: Module = {
  slug: "uzhe-i-eshchyo-net",
  title: "Уже и ещё нет",

  outcomes: [
    "сообщить, что дело сделано: I have already packed",
    "сообщить, что дело ещё не сделано: I haven't packed yet",
    "сказать о только что сделанном: I have just finished",
    "спросить, сделано ли дело: Have you packed yet?",
    "находить в списке дел, что сделано, а что нет",
    "слышать в разговоре, что готово, а что нет",
    "проверять записку о делах: названо сделанное и несделанное",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1–4. PAST, present perfect simple. " +
        "A2, «FORM: NEGATIVE»: «Can use the negative form 'haven't' + '-ed' " +
        "with 'I' with a limited range of verbs», примеры «I haven't eaten " +
        "Italian food for a long time», «I haven't seen you for a long time». " +
        "ЛИЦО ЗДЕСЬ УЖЕ, ЧЕМ У УТВЕРЖДЕНИЯ: там графа называет «I and we», а " +
        "здесь только «I». B1 «FORM: NEGATIVE» — «with a range of pronouns». " +
        "Отрицание поэтому спрашивается только у первого лица; ряд показан " +
        "таблицей целиком, и это объявлено в шапке. " +
        "A2, «FORM/USE: WITH 'YET'»: «Can use the negative form with 'yet' to " +
        "talk about events which are expected to be completed at some point in " +
        "the future», пример «[talking about a new mobile phone] I haven't seen " +
        "it yet». ГРАФА ГОВОРИТ ТОЛЬКО ОБ ОТРИЦАНИИ; вопрос с `yet` берётся по " +
        "руководству, см. опору ниже. " +
        "A2, «FORM: QUESTIONS»: «Can use the question form 'have you' + '-ed' " +
        "with with a limited range of verbs» — предлог `with` в источнике стоит " +
        "ДВАЖДЫ, это его опечатка, и цитата повторяет её как есть. Примеры " +
        "графы: «Have you bought anything?», «Where have you been?». " +
        "A2, «FORM: WITH ADVERBS»: «Can use the present perfect simple with a " +
        "limited range of adverbs in the normal mid position». ДЕСКРИПТОР НЕ " +
        "НАЗЫВАЕТ НАРЕЧИЙ, А ПРИМЕР НАЗЫВАЕТ: «I have just seen your notice». " +
        "Отсюда `just` урока 3. " +
        "ВЗЯТО ВЫШЕ ГРАФЫ: `already` стоит на B1 («FORM/USE: WITH 'ALREADY'» — " +
        "«to emphasise that something is done, often before the expected " +
        "time»), а руководство A2 Key называет его наравне с `yet`. Мерка та " +
        "же, что в модулях 18–22. " +
        "ЧЕГО НЕТ: отрицательный вопрос — B1, «FORM: NEGATIVE QUESTIONS», " +
        "пример «Haven't you seen it yet?»; `for` и `since` — модуль 24 по " +
        "программе",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень Tenses: «Present perfect " +
        "simple: recent past with just, indefinite past with yet, already, " +
        "never, ever; unfinished past with for and since». Отсюда `just` " +
        "(«recent past with just» — руководство называет его прямо), `already` " +
        "и вопрос с `yet`: оговорки об отрицании руководство не делает. " +
        "ОСТОРОЖНО С РАЗБОРАМИ ЭТОЙ СТРОКИ. Разбор `.md` вклеивает в неё " +
        "соседний столбец и читается «indefinite past with Double genitive: a " +
        "friend of theirs». Строку подтверждают разбор `.text` и прямой поиск " +
        "по PDF через `npm run pdf`. Проверено при написании модуля 22, где " +
        "первая редакция опоры на этом и ошиблась. " +
        "УРОК 6, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем список дел» и УРОК ПИСЬМА «Пишем записку о " +
        "делах». с. 84, шкала «Notes, messages and forms», графа A2: «Can formulate " +
        "short, simple notes and messages relating to matters in areas of " +
        "immediate need» — глагол у источника `formulate`, и первая редакция " +
        "опоры поставила вместо него `write`; поймала сверка. ШКАЛА ЗДЕСЬ ДРУГАЯ, ЧЕМ В МОДУЛЯХ 20–22, И НАРОЧНО: " +
        "с. 81 разводит соседей прямо — Correspondence о переписке, «Notes, " +
        "messages and forms» о передаче сведений человеку. Записка о делах " +
        "пишется своему, а не читателям вообще, и потому берётся вторая. В " +
        "модуле 17 я взял её там, где нужна была шкала производства текста; " +
        "здесь обратный случай, и он проверен по обеим страницам",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Двадцать карточек модуля взяты из словника ступени; новых для ступени " +
        "восемнадцать, `just` и `prepare` Oxford помечает A1. Почему двадцать, а " +
        "не тридцать — разобрано в шапке модуля: тринадцать карточек первой " +
        "редакции не работали нигде, кроме себя, и восемь из них сняты. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `slice (n)` — берётся " +
        "существительное, кусок хлеба; глагол словник не помечает, и по этой " +
        "же причине слово однажды снимали из модуля 12. `boiled (adj)`, `fried " +
        "(adj)`, `roast (adj)` — прилагательные при еде. `sink (n)` — раковина, " +
        "а не глагол. `record (n)` в модуль не берётся: `ipa-en-uk` о нём " +
        "молчит. " +
        "ВОСЕМЬ СЛОВ ВЫШЕ СТУПЕНИ ПО OXFORD 3000, И ЭТО ОБЪЯВЛЯЕТСЯ " +
        "НАРОЧНО: accommodation, block, ingredient, slice, various, kiss, " +
        "ad, length — B1. Все восемь стоят в словнике A2 Key. " +
        "ШЕСТИ СЛОВ OXFORD 3000 НЕ ЗНАЕТ ВОВСЕ: pharmacy, boiled, fried, " +
        "roast, lunchtime, sink — у последних двух Oxford знает ГЛАГОЛЫ " +
        "(`fry v. B1`, `sink v. B1`), а карточки дают прилагательное и " +
        "существительное, и словник помечает именно их: `fried (adj)`, " +
        "`sink (n)`. " +
        "`yet` КАРТОЧКИ НЕ ПОЛУЧАЕТ: её завёл модуль 10, и вторая сказала бы " +
        "ученику, что слово новое",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "uzhe-sdelano",
      title: "Уже сделано: I have already packed",
      estimatedMinutes: 15,
      outcome: "сообщить, что дело сделано: I have already packed",

      vozvrat: [{ iz: "ya-eto-delal", zadanie: "z2-dopisat-have" }],

      blocks: [
        {
          id: "delo-k-sroku",
          kind: "explain",
          text: [
            "Утром Данияр и Айгуль собираются к приезду Алима — он приедет к двум.",
            "У них список дел, и каждое надо успеть до обеда.",
            "Про такие дела говорят не «когда сделал», а «сделано или нет».",
            "И если сделано раньше срока, ставят особое слово.",
          ],
        },
        {
          id: "prosto-sdelano-i-uzhe-sdelano",
          kind: "table",
          caption: "Просто сделано и сделано уже",
          zvuchat: [
            "I have packed the bags.",
            "I have already packed the bags.",
            "We have prepared lunch.",
            "We have already prepared lunch.",
          ],
          head: ["Сделано", "Сделано уже"],
          rows: [
            ["I have packed the bags.", "I have already packed the bags."],
            ["We have prepared lunch.", "We have already prepared lunch."],
          ],
        },
        {
          id: "chto-dobavlyaet-already",
          kind: "explain",
          text: [
            "Слово already значит «уже», и место у него строгое.",
            "Оно встаёт между have и третьей формой глагола.",
            "Оно говорит, что дело сделано, и часто — раньше, чем ждали.",
            "Без него строка просто сообщает о сделанном, без этого оттенка.",
          ],
        },
        {
          id: "ne-already-v-konce",
          kind: "note",
          tone: "mistake",
          text:
            "«I have already prepared lunch yesterday» — так не " +
            "говорят.\n\nВ такой строке дня не называют вовсе: I have already " +
            "prepared lunch.",
        },
        {
          id: "razgovor-o-sborah",
          kind: "example",
          caption: "Разговор о сборах",
          razgovor: true,
          zvuchat: [
            "I have already prepared lunch.",
            "Good! And the accommodation for Alim?",
            "I have already booked a double room.",
          ],
          text:
            "I have already prepared lunch.\nGood! And the accommodation for Alim?\nI have already booked a double room.",
          explain:
            "В обеих строках already стоит между have и третьей формой. Гостя " +
            "зовут Алим, и комната для него заказана заранее — потому и already.",
        },
        {
          id: "slovar-sborov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "already", translation: "уже", example: "I have already prepared lunch.", hint: "/ɔːlˈredi/" },
            { term: "prepare", translation: "готовить, приготовить", example: "I have already prepared lunch.", hint: "/prɪˈpeə/" },
            { term: "accommodation", translation: "жильё", example: "And the accommodation for Alim?", hint: "/əˌkɒməˈdeɪʃn/" },
            { term: "double", translation: "двухместный", example: "I have already booked a double room.", hint: "/ˈdʌbl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-already",
          kind: "gap",
          prompt: "Обед готов, и готов раньше срока. Допиши слово.",
          before: "I have ",
          after: " prepared lunch.",
          answer: "already",
          hint: "Место этого слова — между have и глаголом.",
          why:
            "I have already prepared lunch. Слово yet сюда не встанет: оно идёт " +
            "к делам, которые ещё не сделаны.",
        },
        {
          id: "z2-vybrat-mesto-already",
          kind: "choice",
          prompt: "В какой записи already стоит на обычном месте?",
          options: [
            { text: "Already I have booked a double room." },
            { text: "I have already booked a double room.", correct: true },
            { text: "I already have booked a double room." },
          ],
          hint: "Слово стоит между have и третьей формой глагола.",
          why:
            "I have already booked a double room. В первой записи already ушло " +
            "в начало, во второй — встало перед have.",
        },
        {
          id: "z3-otmetit-sdelannoe",
          kind: "hottext",
          prompt: "Отметь строки, которые сообщают о сделанном деле.",
          parts: [
            { text: "I have already packed the bags.", selectable: true, correct: true },
            { text: " · " },
            { text: "I pack the bags every summer.", selectable: true },
            { text: " · " },
            { text: "We have already prepared lunch.", selectable: true, correct: true },
            { text: " · " },
            { text: "We prepare lunch at twelve.", selectable: true },
          ],
          hint: "Ищи have и третью форму глагола.",
          why:
            "Первая и третья. Во второй и четвёртой речь о том, что бывает " +
            "обычно, а не о деле, которое сделано.",
        },
        {
          id: "z4-sobrat-ob-obede",
          kind: "order",
          prompt: "Собери строку: мы уже приготовили обед.",
          items: ["already", "prepared lunch.", "We have"],
          answer: [2, 0, 1],
          hint: "Порядок такой: кто, have, already, глагол.",
          why:
            "We have already prepared lunch. Слово already встаёт ровно между " +
            "have и глаголом.",
        },
        {
          id: "z5-napisat-o-komnate",
          kind: "short",
          prompt:
            "Скажи по-английски, что двухместная комната уже заказана. Начни с I have.",
          answer: "I have already booked a double room.",
          accept: ["I have already booked a double room"],
          hint: "Слово о том, что дело сделано, стоит после have.",
          why:
            "I have already booked a double room. Глагол book берёт -ed, как " +
            "большинство.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "eshchyo-ne-sdelano",
      title: "Ещё не сделано: I haven't packed yet",
      estimatedMinutes: 15,
      outcome: "сообщить, что дело ещё не сделано: I haven't packed yet",

      blocks: [
        {
          id: "delo-ostalos",
          kind: "explain",
          text: [
            "Половина дел из списка сделана, а половина ещё нет.",
            "Про несделанное говорят отдельно, и слово тут другое.",
            "Оно значит «ещё не» и стоит не там, где already.",
          ],
        },
        {
          id: "sdelano-i-ne-sdelano",
          kind: "table",
          caption: "Сделано и ещё не сделано",
          zvuchat: [
            "I have already packed the bags.",
            "I haven't packed the bags yet.",
            "I have already washed the sink.",
            "I haven't washed the sink yet.",
          ],
          head: ["Сделано", "Ещё не сделано"],
          rows: [
            ["I have already packed the bags.", "I haven't packed the bags yet."],
            ["I have already washed the sink.", "I haven't washed the sink yet."],
          ],
        },
        {
          id: "kak-ustroeno-otricanie",
          kind: "explain",
          text: [
            "Слово have берёт not и сливается с ним: haven't.",
            "Третья форма глагола после этого не меняется: packed остаётся packed.",
            "Слово yet встаёт в самый конец строки; вместе с haven't оно и даёт «ещё не».",
            "Оно говорит, что дело ещё впереди, а не отменено.",
          ],
        },
        {
          id: "ryad-otricaniya",
          kind: "table",
          caption: "Как это звучит у каждого лица",
          zvuchat: [
            "I haven't packed",
            "we haven't packed",
            "you haven't packed",
            "he hasn't packed",
            "she hasn't packed",
            "they haven't packed",
          ],
          head: ["Кто", "Как это звучит целиком"],
          rows: [
            ["I", "I haven't packed"],
            ["we", "we haven't packed"],
            ["you", "you haven't packed"],
            ["he", "he hasn't packed"],
            ["she", "she hasn't packed"],
            ["they", "they haven't packed"],
          ],
        },
        {
          id: "ne-yet-v-seredine",
          kind: "note",
          tone: "mistake",
          text:
            "«I haven't packed the bags already» — так не " +
            "говорят.\n\nВ строке о несделанном стоит yet, а already идёт к " +
            "сделанному: I haven't packed the bags yet.",
        },
        {
          id: "razgovor-o-nesdelannom",
          kind: "example",
          caption: "Разговор о несделанном",
          razgovor: true,
          zvuchat: [
            "I haven't washed the sink yet.",
            "And the bags?",
            "I haven't packed them yet. But I have already been to the pharmacy.",
          ],
          text:
            "I haven't washed the sink yet.\nAnd the bags?\nI haven't packed them yet. But I have already been to the pharmacy.",
          explain:
            "В строках о несделанном стоит haven't, а yet идёт в конец. В " +
            "последней строке рядом обе записи: одно дело ещё впереди, другое " +
            "уже сделано.",
        },
        {
          id: "slovar-del-po-domu",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sink", translation: "раковина", example: "I haven't washed the sink yet.", hint: "/sɪŋk/" },
            { term: "pharmacy", translation: "аптека", example: "I have already been to the pharmacy.", hint: "/ˈfɑːməsi/" },
            { term: "block", translation: "дом с квартирами; квартал", example: "The pharmacy is in our block.", hint: "/blɒk/" },
            { term: "lunchtime", translation: "обеденное время", example: "Please do the rest before lunchtime.", hint: "/ˈlʌntʃtaɪm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-yet",
          kind: "gap",
          prompt: "Сумки ещё не собраны. Допиши слово в конец строки.",
          before: "I haven't packed the bags ",
          after: ".",
          answer: "yet",
          hint: "Это слово значит «ещё не» и стоит последним.",
          why:
            "I haven't packed the bags yet. Слово already сюда не встанет: оно " +
            "идёт к сделанному.",
        },
        {
          id: "z2-vybrat-otricanie",
          kind: "choice",
          prompt: "Раковина ещё не вымыта. Как это сказать?",
          options: [
            { text: "I haven't washed the sink yet.", correct: true },
            { text: "I don't have washed the sink yet." },
            { text: "I haven't wash the sink yet." },
          ],
          hint: "Слово have берёт not и сливается с ним, а глагол стоит в третьей форме.",
          why:
            "I haven't washed the sink yet. Во второй записи лишнее do, а в " +
            "третьей глагол остался без третьей формы.",
        },
        {
          id: "z3-otmetit-nesdelannoe",
          kind: "hottext",
          prompt: "Отметь строки, где дело ещё впереди.",
          parts: [
            { text: "I haven't packed the bags yet.", selectable: true, correct: true },
            { text: " · " },
            { text: "I have already packed the bags.", selectable: true },
            { text: " · " },
            { text: "I haven't been to the pharmacy yet.", selectable: true, correct: true },
            { text: " · " },
            { text: "I have already prepared lunch.", selectable: true },
          ],
          hint: "Ищи haven't и слово в конце строки.",
          why:
            "Первая и третья. Во второй и четвёртой стоит already — там дело " +
            "уже сделано.",
        },
        {
          id: "z4-sobrat-o-rakovine",
          kind: "order",
          prompt: "Собери строку: я ещё не вымыл раковину.",
          items: ["yet.", "washed the sink", "I haven't"],
          answer: [2, 1, 0],
          hint: "Слово о несделанном стоит последним.",
          why:
            "I haven't washed the sink yet. Порядок такой: кто, haven't, " +
            "глагол, вещь, yet.",
        },
        {
          id: "z5-napisat-ob-apteke",
          kind: "short",
          prompt:
            "Скажи по-английски, что в аптеку ещё не сходил. Начни с I haven't.",
          answer: "I haven't been to the pharmacy yet.",
          accept: ["I haven't been to the pharmacy yet"],
          hint: "После haven't стоит третья форма, а слово о несделанном — в конце.",
          why:
            "I haven't been to the pharmacy yet. Третья форма глагола be — " +
            "been, и при ней стоит to.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "tolko-chto",
      title: "Только что: I have just finished",
      estimatedMinutes: 14,
      outcome: "сказать о только что сделанном: I have just finished",

      blocks: [
        {
          id: "sdelal-minutu-nazad",
          kind: "explain",
          text: [
            "Бывает, что дело закончено минуту назад, прямо сейчас.",
            "По-русски тут говорят «только что»: я только что закончил.",
            "По-английски для этого есть своё слово, и место у него то же, что у already.",
          ],
        },
        {
          id: "uzhe-i-tolko-chto",
          kind: "table",
          caption: "Уже и только что",
          zvuchat: [
            "I have already finished.",
            "I have just finished.",
            "We have already prepared lunch.",
            "We have just prepared lunch.",
          ],
          head: ["Уже", "Только что"],
          rows: [
            ["I have already finished.", "I have just finished."],
            ["We have already prepared lunch.", "We have just prepared lunch."],
          ],
        },
        {
          id: "chem-just-otlichaetsya-ot-already",
          kind: "explain",
          text: [
            "Слово just значит «только что» и стоит между have и глаголом.",
            "Оно говорит, что дело кончилось совсем недавно — минуту, час назад.",
            "Слово already о том, насколько недавно, молчит: оно говорит, что дело сделано, и часто раньше срока.",
            "Поэтому just годится и там, где дело сделано позже срока: важно, что только что.",
          ],
        },
        {
          id: "ne-just-o-davnem",
          kind: "note",
          tone: "mistake",
          text:
            "«I have just prepared lunch» о вчерашнем обеде — так не " +
            "говорят.\n\nСлово just годится делу, законченному минуту назад.",
        },
        {
          id: "razgovor-na-kuhne",
          kind: "example",
          caption: "Разговор на кухне",
          razgovor: true,
          zvuchat: [
            "I have just fried the fish.",
            "And the roast meat?",
            "I have just taken it out. The boiled eggs are ready too.",
            "You have prepared various dishes!",
          ],
          text:
            "I have just fried the fish.\nAnd the roast meat?\nI have just taken it out. The boiled eggs are ready too.\nYou have prepared various dishes!",
          explain:
            "В первой и третьей строках just стоит между have и третьей формой: " +
            "оба дела кончились минуту назад. Во второй строке глагола нет " +
            "вовсе, а в последней just не нужно: там говорят обо всём " +
            "приготовленном, без срока.",
        },
        {
          id: "slovar-kuhni",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "just", translation: "только что", example: "I have just fried the fish.", hint: "/dʒʌst/" },
            { term: "fried", translation: "жареный", example: "I have just fried the fish.", hint: "/fraɪd/" },
            { term: "roast", translation: "запечённый", example: "And the roast meat?", hint: "/rəʊst/" },
            { term: "boiled", translation: "варёный", example: "The boiled eggs are ready.", hint: "/bɔɪld/" },
            { term: "various", translation: "разные", example: "You have prepared various dishes!", hint: "/ˈveəriəs/" },
            { term: "fair", translation: "справедливый", example: "That isn't fair!", hint: "/feə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-just",
          kind: "gap",
          prompt: "Рыбу пожарили минуту назад. Допиши слово.",
          before: "I have ",
          after: " fried the fish.",
          answer: "just",
          hint: "Это слово значит «только что» и стоит перед глаголом.",
          why:
            "I have just fried the fish. Слово already сказало бы, что дело " +
            "сделано, но о минуте назад молчало бы.",
        },
        {
          id: "z2-vybrat-just-ili-already",
          kind: "choice",
          prompt:
            "Обед был готов ещё утром, задолго до срока. Какое слово тут годится?",
          options: [
            { text: "just — дело кончилось минуту назад." },
            { text: "yet — дело ещё впереди." },
            { text: "already — дело сделано, и раньше срока.", correct: true },
          ],
          hint: "Спроси, когда именно кончилось дело.",
          why:
            "Already. Слово just сказало бы о минуте назад, а yet — о деле, " +
            "которое ещё не сделано.",
        },
        {
          id: "z3-otmetit-tolko-chto",
          kind: "hottext",
          prompt: "Отметь строки о деле, законченном минуту назад.",
          parts: [
            { text: "I have just fried the fish.", selectable: true, correct: true },
            { text: " · " },
            { text: "I have already been to the pharmacy.", selectable: true },
            { text: " · " },
            { text: "We have just prepared lunch.", selectable: true, correct: true },
            { text: " · " },
            { text: "We haven't washed the sink yet.", selectable: true },
          ],
          hint: "Ищи слово между have и глаголом.",
          why:
            "Первая и третья: в них стоит just. Во второй дело сделано без " +
            "срока, в четвёртой — ещё впереди.",
        },
        {
          id: "z4-sobrat-o-myase",
          kind: "order",
          prompt: "Собери строку: мы только что вынули запечённое мясо.",
          items: ["the roast meat.", "just taken out", "We have"],
          answer: [2, 1, 0],
          hint: "Слово о минуте назад стоит сразу после have.",
          why:
            "We have just taken out the roast meat. Место у just то же, что у " +
            "already.",
        },
        {
          id: "z5-napisat-o-yaycah",
          kind: "short",
          prompt:
            "Скажи по-английски, что варёные яйца только что приготовлены. Начни с I have.",
          answer: "I have just prepared the boiled eggs.",
          accept: [
            "I have just prepared the boiled eggs",
            "I have just prepared boiled eggs.",
            "I have just prepared boiled eggs",
          ],
          hint: "Слово о минуте назад стоит между have и глаголом.",
          why:
            "I have just prepared the boiled eggs. Слово boiled стоит перед " +
            "вещью и говорит, какая она.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sdelal-li-ty",
      title: "Сделано ли: Have you packed yet?",
      estimatedMinutes: 15,
      outcome: "спросить, сделано ли дело: Have you packed yet?",

      blocks: [
        {
          id: "sprosit-o-dele",
          kind: "explain",
          text: [
            "Про чужие дела спрашивают так же коротко, как рассказывают о своих.",
            "Слово have уходит в начало, а слово о сделанном остаётся в конце.",
          ],
        },
        {
          id: "rasskaz-i-vopros-o-dele",
          kind: "table",
          caption: "Рассказ и вопрос",
          zvuchat: [
            "You have packed the bags.",
            "Have you packed the bags yet?",
            "You have washed the sink.",
            "Have you washed the sink yet?",
          ],
          head: ["Рассказ", "Вопрос"],
          rows: [
            ["You have packed the bags.", "Have you packed the bags yet?"],
            ["You have washed the sink.", "Have you washed the sink yet?"],
          ],
        },
        {
          id: "kak-ustroen-vopros-o-dele",
          kind: "explain",
          text: [
            "Слово have уходит в начало, а тот, о ком речь, встаёт за ним.",
            "Третья форма глагола остаётся на месте: packed, washed.",
            "Слово yet идёт в конец и здесь читается иначе, чем в отрицании: там «ещё не», а тут «уже».",
            "Отвечают коротко: Yes, I have или No, not yet.",
          ],
        },
        {
          id: "korotkie-otvety-o-dele",
          kind: "table",
          caption: "Короткие ответы",
          zvuchat: [
            "Yes, I have.",
            "No, not yet.",
            "No, I haven't.",
          ],
          head: ["Сделано", "Ещё нет"],
          rows: [
            ["Yes, I have.", "No, not yet."],
            ["Yes, I have.", "No, I haven't."],
          ],
        },
        {
          id: "ne-do-you-packed",
          kind: "note",
          tone: "mistake",
          text:
            "«Do you packed the bags yet?» — так не спрашивают.\n\nВ начало " +
            "выходит have, а не do: Have you packed the bags yet?",
        },
        {
          id: "razgovor-pered-vyhodom",
          kind: "example",
          caption: "Разговор перед выходом",
          razgovor: true,
          zvuchat: [
            "Have you packed the bags yet?",
            "Yes, I have. And you?",
            "No, not yet. I have just finished the washing.",
            "That isn't fair! Will you be able to help me?",
          ],
          text:
            "Have you packed the bags yet?\nYes, I have. And you?\nNo, not yet. I have just finished the washing.\nThat isn't fair! Will you be able to help me?",
          explain:
            "В вопросе have стоит первым, а yet — последним. Короткий ответ " +
            "повторяет только have, а No, not yet говорит, что дело впереди. В " +
            "последней строке про сделанное не говорят вовсе — там просят о " +
            "помощи.",
        },
        {
          id: "slovar-vyhoda",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "able", translation: "способный, могущий", example: "Will you be able to help me?", hint: "/ˈeɪbl/" },
            { term: "including", translation: "включая", example: "Lunch is ready, including boiled eggs.", hint: "/ɪnˈkluːdɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vopros-o-dele",
          kind: "choice",
          prompt: "Спроси, вымыта ли уже раковина.",
          options: [
            { text: "Do you washed the sink yet?" },
            { text: "You have washed the sink yet?" },
            { text: "Have you washed the sink yet?", correct: true },
          ],
          hint: "В начало вопроса выходит то же слово, что стоит в рассказе перед глаголом.",
          why:
            "Have you washed the sink yet? Слово do к этому времени не " +
            "подходит, а во второй записи have осталось на месте рассказа.",
        },
        {
          id: "z2-dopisat-yet-v-vopros",
          kind: "gap",
          prompt: "Спрашивают, вымыта ли раковина. Допиши слово в конец.",
          before: "Have you washed the sink ",
          after: "?",
          answer: "yet",
          hint: "Это то же слово, что стоит в конце строк о несделанном.",
          why:
            "Have you washed the sink yet? В вопросе оно значит «уже».",
        },
        {
          id: "z3-otvetit-chto-eshchyo-net",
          kind: "short",
          prompt:
            "Тебя спросили: Have you packed the bags yet? Ответь коротко — ещё нет.",
          answer: "No, not yet.",
          accept: [
            "No, not yet",
            "Not yet.",
            "Not yet",
            "No, I haven't.",
            "No, I haven't",
            "No, I have not.",
          ],
          hint: "В коротком ответе глагол не повторяют.",
          why:
            "No, not yet. Так отвечают, когда дело ещё впереди.",
        },
        {
          id: "z4-sobrat-vopros-ob-obede",
          kind: "order",
          prompt: "Собери вопрос: обед уже приготовлен?",
          items: ["prepared lunch", "you", "yet?", "Have"],
          answer: [3, 1, 0, 2],
          hint: "Начни со слова, которое вышло в начало из рассказа.",
          why:
            "Have you prepared lunch yet? Порядок такой: have, кто, третья " +
            "форма, вещь, yet.",
        },
        {
          id: "z5-sprosit-ob-apteke",
          kind: "short",
          prompt:
            "Спроси по-английски, сходил ли собеседник в аптеку уже. Начни с Have.",
          answer: "Have you been to the pharmacy yet?",
          accept: [
            "Have you been to the pharmacy yet",
            "Have you been to the pharmacy?",
            "Have you been to the pharmacy",
          ],
          hint: "Третья форма глагола be — been, а слово со значением «уже» идёт в конец.",
          why:
            "Have you been to the pharmacy yet? При been стоит to, как в " +
            "рассказе о местах.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-spisok-del",
      title: "Читаем список дел",
      estimatedMinutes: 13,
      outcome: "находить в списке дел, что сделано, а что нет",

      blocks: [
        {
          id: "zachem-chitat-spisok-del",
          kind: "explain",
          text: [
            "Айгуль оставила Данияру записку со списком дел.",
            "В таком списке ищут две вещи: что уже сделано и что осталось.",
            "Ниже записка, и вопросы будут о ней.",
          ],
        },
        {
          id: "zapiska-o-delah",
          kind: "text",
          title: "Before Alim arrives",
          genre: "message",
          body: [
            "Daniyar, I have already done a lot, but not everything.",
            "I have already booked a double room in the block near the park.",
            "I have just been to the pharmacy, so we have the medicine.",
            "I haven't washed the sink yet, and I haven't packed the bags yet.",
            "Lunch is ready, including boiled eggs, fried fish and various slices of bread.",
            "There is no smoking in our block, so please tell Alim.",
            "Please do the rest before lunchtime!",
          ],
          glossary: [
            { term: "the rest", translation: "остальное" },
            { term: "medicine", translation: "лекарство" },
          ],
        },
        {
          id: "kak-iskat-v-spiske-del",
          kind: "note",
          tone: "info",
          text:
            "Сделанное ищут по слову already, а оставшееся — по yet в конце " +
            "строки.\n\nСлово just говорит, что дело кончилось совсем недавно.",
        },
        {
          id: "slovar-zapiski",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "slice", translation: "кусок, ломоть", example: "Various slices of bread.", hint: "/slaɪs/" },
            { term: "smoking", translation: "курение", example: "There is no smoking in our block.", hint: "/ˈsməʊkɪŋ/" },
            { term: "ingredient", translation: "ингредиент", example: "We have all the ingredients for lunch.", hint: "/ɪnˈgriːdiənt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-uzhe-zakazano",
          about: "zapiska-o-delah",
          kind: "short",
          prompt: "Что Айгуль уже заказала? Ответь одним словом по-английски.",
          answer: "room",
          accept: ["Room", "a room", "a double room"],
          hint: "Про заказ сказано во второй строке.",
          why: "I have already booked a double room in the block near the park.",
        },
        {
          id: "z2-chto-ostalos",
          about: "zapiska-o-delah",
          kind: "choice",
          prompt: "Какие дела остались Данияру?",
          options: [
            { text: "Заказать комнату и сходить в аптеку." },
            { text: "Вымыть раковину и собрать сумки.", correct: true },
            { text: "Приготовить обед." },
          ],
          hint: "Ищи строку со словом yet в конце.",
          why:
            "Вымыть раковину и собрать сумки: I haven't washed the sink yet, " +
            "and I haven't packed the bags yet.",
        },
        {
          id: "z3-kogda-nado-uspet",
          about: "zapiska-o-delah",
          kind: "short",
          prompt: "К какому времени надо всё успеть? Ответь одним словом по-английски.",
          answer: "lunchtime",
          accept: ["Lunchtime", "before lunchtime"],
          hint: "Срок назван в самой последней строке.",
          why: "Please do the rest before lunchtime.",
        },
        {
          id: "z4-otmetit-verno-o-zapiske",
          about: "zapiska-o-delah",
          kind: "hottext",
          prompt: "Отметь то, что верно по записке.",
          parts: [
            { text: "в аптеку Айгуль сходила совсем недавно", selectable: true, correct: true },
            { text: " · " },
            { text: "обед уже готов", selectable: true, correct: true },
            { text: " · " },
            { text: "сумки уже собраны", selectable: true },
            { text: " · " },
            { text: "комната ещё не заказана", selectable: true },
          ],
          hint: "Про аптеку сказано в третьей строке, про сумки — в четвёртой.",
          why:
            "Верно первое и второе. Про сумки и комнату записка говорит " +
            "обратное: сумки ещё не собраны, а комната уже заказана.",
        },
        {
          id: "z5-chto-znachit-just-v-zapiske",
          about: "zapiska-o-delah",
          kind: "choice",
          prompt:
            "В записке стоит: I have just been to the pharmacy. Что это значит?",
          options: [
            { text: "Айгуль ходила в аптеку давно." },
            { text: "Айгуль только собирается в аптеку." },
            { text: "Айгуль вернулась из аптеки совсем недавно.", correct: true },
          ],
          hint: "Слово just говорит не о том, было ли дело, а о том, когда.",
          why:
            "Вернулась совсем недавно. О давнем сказали бы без just, а о " +
            "несделанном — с yet в конце.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chto-uzhe-gotovo",
      title: "Слушаем, что уже готово",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что готово, а что нет",

      blocks: [
        {
          id: "zachem-slushat-o-gotovom",
          kind: "explain",
          text: [
            "Двое сверяют список дел перед приездом гостя.",
            "Слушать надо, что уже готово, а что осталось.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-gotovnosti",
          kind: "audio",
          caption: "Разговор о делах",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Have you packed the bags yet? — No, not yet. But I have already " +
            "prepared lunch. — And the sink? — I have just washed it. — Good. " +
            "Alim is a businessman, and he arrives at two.",
        },
        {
          id: "slovar-sverki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "businessman", translation: "предприниматель", example: "Alim is a businessman, and he arrives at two.", hint: "/ˈbɪznəsmən/" },
          ],
        },
        {
          id: "chto-slushat-o-gotovom",
          kind: "note",
          tone: "info",
          text:
            "Слушай, где звучит already, а где not yet.\n\nПервое говорит, что " +
            "дело сделано, второе — что оно ещё впереди.",
        },

        // ---- задания ----
        {
          id: "z1-sobrany-li-sumki",
          about: "zapis-o-gotovnosti",
          kind: "choice",
          prompt: "Послушай. Собраны ли сумки?",
          options: [
            { text: "Да, собраны." },
            { text: "Нет, ещё нет.", correct: true },
            { text: "Об этом не говорили." },
          ],
          hint: "Ответ звучит во второй реплике.",
          why: "Нет: No, not yet. Так отвечают, когда дело ещё впереди.",
        },
        {
          id: "z2-chto-uzhe-gotovo",
          about: "zapis-o-gotovnosti",
          kind: "short",
          prompt: "Послушай. Что уже приготовлено? Ответь одним словом по-английски.",
          answer: "lunch",
          accept: ["Lunch"],
          hint: "Об этом сказано во второй реплике, после слова already.",
          why: "But I have already prepared lunch.",
        },
        {
          id: "z3-chto-sdelano-tolko-chto",
          about: "zapis-o-gotovnosti",
          kind: "short",
          prompt: "Послушай. Что вымыли совсем недавно? Ответь одним словом по-английски.",
          answer: "sink",
          accept: ["Sink", "the sink"],
          hint: "Об этом сказано в самой последней реплике.",
          why:
            "Sink. В записи звучит I have just washed it, а речь о раковине из " +
            "вопроса выше.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-delah",
          about: "zapis-o-gotovnosti",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "обед уже приготовлен", selectable: true, correct: true },
            { text: " · " },
            { text: "раковину вымыли совсем недавно", selectable: true, correct: true },
            { text: " · " },
            { text: "сумки уже собраны", selectable: true },
            { text: " · " },
            { text: "в аптеку уже сходили", selectable: true },
          ],
          hint: "Про сумки говорят в самом начале.",
          why:
            "Прозвучали первое и второе. Про сумки сказано обратное, а про " +
            "аптеку речи не было вовсе.",
        },
        {
          id: "z5-chto-znachit-not-yet",
          about: "zapis-o-gotovnosti",
          kind: "choice",
          prompt: "В записи звучит No, not yet. Что это значит?",
          options: [
            { text: "Дело отменили." },
            { text: "Дело сделали давно." },
            { text: "Дело ещё впереди.", correct: true },
          ],
          hint: "Слово yet говорит о том, чего ещё не случилось.",
          why:
            "Дело ещё впереди. Про отменённое сказали бы иначе, а про давнее — " +
            "без yet.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-zapisku-o-delah",
      title: "Пишем записку о делах",
      estimatedMinutes: 15,
      outcome: "проверять записку о делах: названо сделанное и несделанное",

      blocks: [
        {
          id: "zachem-proveryat-zapisku",
          kind: "explain",
          text: [
            "Ученик оставил записку: «I have done a lot. Please help.»",
            "Тот, кто её прочтёт, не поймёт, за что браться.",
            "В записке о делах пропускают не сами дела, а то, что осталось.",
            "Проверить свою записку можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-zapiske",
          kind: "table",
          caption: "Что должно быть в записке",
          zvuchat: [
            "Aigul, I have already made the fried fish.",
            "I have just cut the bread.",
            "I haven't found the ingredients yet.",
            "Please buy them before lunchtime.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["кому записка и что сделано", "Aigul, I have already made the fried fish."],
            ["что сделано совсем недавно", "I have just cut the bread."],
            ["что осталось", "I haven't found the ingredients yet."],
            ["к какому сроку", "Please buy them before lunchtime."],
          ],
        },
        {
          id: "chem-derzhitsya-zapiska",
          kind: "explain",
          text: [
            "Первая строка называет, кому записка, и одно сделанное дело.",
            "Вторая говорит о том, что закончено совсем недавно, — со словом just.",
            "Третья называет оставшееся, и там haven't и yet в конце.",
            "Четвёртая ставит срок: к обеду, к вечеру, к приезду гостя.",
            "Строки связывают словами and, but и because: без них выйдет список.",
          ],
        },
        {
          id: "obrazec-zapiski",
          kind: "example",
          caption: "Записка Данияра",
          zvuchat: [
            "Aigul, I have already made the boiled eggs and the fried fish.",
            "I have just cut various slices of bread.",
            "But I haven't found the ingredients for the salad yet.",
            "Please buy them before lunchtime because Alim is hungry after the road.",
          ],
          text:
            "Aigul, I have already made the boiled eggs and the fried fish.\nI have just cut various slices of bread.\nBut I haven't found the ingredients for the salad yet.\nPlease buy them before lunchtime because Alim is hungry after the road.",
          explain:
            "Сделанное стоит со словами already и just, оставшееся — с haven't " +
            "и yet в конце. Последняя строка называет срок и причину.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-zapiske",
          kind: "choice",
          prompt:
            "Записка целиком: I have done a lot. Please help. Чего в ней не хватает?",
          options: [
            { text: "Не сказано, что именно осталось сделать.", correct: true },
            { text: "Имени того, кто писал." },
            { text: "Благодарности читателю." },
          ],
          hint: "Представь себя тем, кто её прочтёт: за что ты возьмёшься?",
          why:
            "Не сказано, что осталось. Слов о сделанном много, а дел для " +
            "читателя нет ни одного.",
        },
        {
          id: "z2-dopisat-yet-v-zapisku",
          kind: "gap",
          prompt: "Дело осталось. Допиши слово в конец строки.",
          before: "I haven't packed the bags ",
          after: ", so please do it.",
          answer: "yet",
          hint: "Слово о несделанном стоит последним перед запятой.",
          why:
            "I haven't packed the bags yet, so please do it. Слово already " +
            "сказало бы обратное.",
        },
        {
          id: "z3-otmetit-poleznye-stroki-zapiski",
          kind: "hottext",
          prompt: "Отметь строки, из которых читатель узнаёт, что ему делать.",
          parts: [
            { text: "I haven't washed the sink yet.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am very tired today.", selectable: true },
            { text: " · " },
            { text: "I haven't packed the bags yet.", selectable: true, correct: true },
            { text: " · " },
            { text: "The weather is nice.", selectable: true },
          ],
          hint: "Спроси у каждой строки: назвала ли она дело?",
          why:
            "Первая и третья: в них стоит haven't и yet, то есть дело осталось. " +
            "Про усталость и погоду читателю делать нечего.",
        },
        {
          id: "z4-svyazat-stroki-zapiski",
          kind: "short",
          prompt:
            "В записке есть просьба — Please do the rest before lunchtime, — но нет причины. Допиши только вторую половину: Алим приходит в два.",
          answer: "because Alim arrives at two",
          accept: [
            "because Alim arrives at two.",
            "Because Alim arrives at two",
            "because Alim arrives at two,",
          ],
          hint: "Начни со слова причины, а дальше скажи, кто и во сколько приходит.",
          why:
            "because Alim arrives at two. Целиком записка звучит так: Please do " +
            "the rest before lunchtime because Alim arrives at two.",
        },
        {
          id: "z5-napisat-zapisku",
          kind: "essay",
          prompt:
            "Напиши записку о делах, четырьмя строками. Назови, кому она, одно сделанное дело, одно законченное только что, одно оставшееся и срок.",
          minWords: 16,
          sample:
            "Aigul, I have already made the boiled eggs and the fried fish.\nI have just cut various slices of bread.\nBut I haven't found the ingredients for the salad yet.\nPlease buy them before lunchtime because Alim is hungry after the road.",
          checklist: [
            "названо, кому записка",
            "есть строка со словом already или just",
            "есть строка с haven't и yet в конце",
            "назван срок: к какому времени успеть",
          ],
          hint:
            "Бери обороты, которые знаешь: I have already, I have just, I haven't … yet.",
          why:
            "Записка работает, когда читатель сразу видит, за что ему браться.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, выбрать слово по смыслу случая, переписать строку.

      // ---- итог 1 ----
      {
        id: "q-ispravit-mesto-already",
        kind: "short",
        outcome: "сообщить, что дело сделано: I have already packed",
        prompt:
          "Ученик написал: Already I have booked a room. Запиши строку так, чтобы already стояло на обычном месте.",
        answer: "I have already booked a room.",
        accept: ["I have already booked a room"],
        hint: "Обычное место этого слова — между have и глаголом.",
        why:
          "I have already booked a room. В начале строки already встречается " +
          "редко, и записка так не пишется.",
      },
      {
        id: "q-chto-govorit-already",
        kind: "choice",
        outcome: "сообщить, что дело сделано: I have already packed",
        prompt: "Что добавляет already к строке о сделанном деле?",
        options: [
          { text: "Что дело сделано, и часто раньше срока.", correct: true },
          { text: "Что дело сделали вдвоём." },
          { text: "Что дело сделали вчера." },
        ],
        hint: "Сравни I have booked a room и I have already booked a room.",
        why:
          "Что дело сделано, и часто раньше срока. О том, минуту назад или " +
          "утром, already не говорит: для этого есть just.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-otricanie",
        kind: "short",
        outcome: "сообщить, что дело ещё не сделано: I haven't packed yet",
        prompt:
          "Ученик написал: I haven't prepare the medicine yet. Запиши строку без ошибки.",
        answer: "I haven't prepared the medicine yet.",
        accept: ["I haven't prepared the medicine yet"],
        hint: "После haven't глагол берёт ту же форму, что после have.",
        why:
          "I haven't prepared the medicine yet. Отрицание формы глагола не меняет.",
      },
      {
        id: "q-gde-stoit-yet",
        kind: "choice",
        outcome: "сообщить, что дело ещё не сделано: I haven't packed yet",
        prompt: "Где в строке о несделанном обычно стоит yet?",
        options: [
          { text: "Сразу после haven't." },
          { text: "Перед тем, кто говорит." },
          { text: "В самом конце строки.", correct: true },
        ],
        hint: "Вспомни строку I haven't packed the bags yet.",
        why:
          "В самом конце. Место already и just другое — между have и глаголом.",
      },

      // ---- итог 3 ----
      {
        id: "q-chto-izmenit-zamena-slova",
        kind: "choice",
        outcome: "сказать о только что сделанном: I have just finished",
        prompt:
          "В записке стояло I have just cut the bread, а стало I have already cut the bread. Что изменилось для читателя?",
        options: [
          { text: "Хлеб теперь не нарезан." },
          { text: "Хлеб нарежет кто-то другой." },
          { text: "Пропало, что хлеб нарезали минуту назад.", correct: true },
        ],
        hint: "Оба слова говорят, что дело сделано. Разница в другом.",
        why:
          "Пропало, что хлеб нарезали минуту назад. Слово already о том, " +
          "насколько недавно, молчит.",
      },
      {
        id: "q-perepisat-v-tolko-chto",
        kind: "short",
        outcome: "сказать о только что сделанном: I have just finished",
        prompt:
          "Строку I have prepared lunch перепиши так, чтобы она говорила: обед готов минуту назад.",
        answer: "I have just prepared lunch.",
        accept: ["I have just prepared lunch"],
        hint: "Нужное слово встаёт между have и глаголом.",
        why:
          "I have just prepared lunch. Слово встаёт после have, а глагол " +
          "остаётся в третьей форме.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-do-you-packed",
        kind: "short",
        outcome: "спросить, сделано ли дело: Have you packed yet?",
        prompt:
          "Ученик написал: Do you packed the suitcase yet? Запиши вопрос без ошибки.",
        answer: "Have you packed the suitcase yet?",
        accept: ["Have you packed the suitcase yet"],
        hint: "Слово do к этому времени не подходит вовсе.",
        why:
          "Have you packed the suitcase yet? В рассказе стоит you have packed, и " +
          "в вопрос выходит have.",
      },
      {
        id: "q-vybrat-vernyy-korotkiy-otvet",
        kind: "choice",
        outcome: "спросить, сделано ли дело: Have you packed yet?",
        prompt:
          "На вопрос Have you washed the sink yet? один ответ не годится. Какой?",
        options: [
          { text: "Yes, I have." },
          { text: "Yes, I washed.", correct: true },
          { text: "No, not yet." },
        ],
        hint: "В коротком ответе повторяют не глагол, а первое слово вопроса.",
        why:
          "Yes, I washed. Такого короткого ответа не бывает: глагол в нём не " +
          "звучит вовсе.",
      },
      {
        id: "q-otvetit-chto-eshchyo-net-v-rabote",
        kind: "short",
        outcome: "спросить, сделано ли дело: Have you packed yet?",
        prompt:
          "Ты хочешь узнать у Данияра, забрал ли он лекарство из аптеки. Составь вопрос со словом yet.",
        answer: "Have you collected the medicine yet?",
        accept: [
          "Have you collected the medicine yet",
          "Have you collected the medicine from the pharmacy yet?",
        ],
        hint: "Впереди have, за ним человек, потом третья форма, а yet в конце.",
        why:
          "Have you collected the medicine yet? Слово yet стоит последним и " +
          "показывает, что дело ждали к этому сроку.",
      },

      // ---- итог 5 ----
      {
        id: "q-perepisat-v-nesdelannoe",
        kind: "short",
        outcome: "находить в списке дел, что сделано, а что нет",
        prompt:
          "Строку I have already tidied the flat перепиши так, чтобы она говорила: дело ещё не сделано.",
        answer: "I haven't tidied the flat yet.",
        accept: ["I haven't tidied the flat yet"],
        hint: "Слово о сделанном уходит, а в конец встаёт другое.",
        why:
          "I haven't tidied the flat yet. Слово already в отрицании не " +
          "остаётся: там его место занимает yet в конце.",
      },
      {
        id: "q-najti-sdelannoe-nedavno",
        kind: "short",
        outcome: "находить в списке дел, что сделано, а что нет",
        prompt:
          "В записке строка: I have just been to the pharmacy, so we have the medicine. Что уже есть дома? Ответь одним словом по-английски.",
        answer: "medicine",
        accept: ["Medicine", "the medicine"],
        hint: "Ответ стоит в самом конце строки.",
        why: "So we have the medicine.",
      },

      // ---- итог 6 ----
      {
        id: "q-uslyshat-chto-gotovo",
        kind: "short",
        outcome: "слышать в разговоре, что готово, а что нет",
        zvuk: "Have you prepared lunch yet? — Yes, I have. I have just fried the fish.",
        prompt: "Послушай. Что пожарили? Ответь одним словом по-английски.",
        answer: "fish",
        accept: ["Fish", "the fish"],
        hint: "Ответ звучит в самой последней реплике.",
        why: "I have just fried the fish.",
      },
      {
        id: "q-uslyshat-chto-ostalos",
        kind: "short",
        outcome: "слышать в разговоре, что готово, а что нет",
        zvuk: "I have already washed the sink, but I haven't packed the bags yet.",
        prompt:
          "Послушай. Что ещё не сделано? Ответь одним словом по-английски.",
        answer: "bags",
        accept: ["Bags", "the bags"],
        hint: "Ответ стоит после слов haven't packed.",
        why: "But I haven't packed the bags yet.",
      },

      // ---- итог 7 ----
      {
        id: "q-chego-ne-hvataet-chuzhoy-zapiske",
        kind: "choice",
        outcome: "проверять записку о делах: названо сделанное и несделанное",
        prompt:
          "Записка: Daniyar, I have already booked a room. I have just been to the pharmacy. I haven't washed the sink yet. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что называет срок.", correct: true },
          { text: "Той, что называет, кому записка." },
          { text: "Той, что называет оставшееся дело." },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что называет срок. Имя есть, сделанное есть, сделанное только " +
          "что есть, оставшееся есть — а к какому времени успеть, читатель не " +
          "узнает.",
      },
      {
        id: "q-dopisat-stroku-o-sroke",
        kind: "short",
        outcome: "проверять записку о делах: названо сделанное и несделанное",
        prompt:
          "К записке допиши строку о сроке: купи хлеб до вечера. Начни с Please.",
        answer: "Please buy the bread before the evening.",
        accept: ["Please buy the bread before the evening"],
        hint: "Время, к которому надо успеть, ставят в конец строки.",
        why:
          "Please buy the bread before the evening. Без такой строки читатель " +
          "не поймёт, когда браться.",
      },
      {
        id: "q-pochemu-v-zapiske-dva-vida-strok",
        kind: "choice",
        outcome: "проверять записку о делах: названо сделанное и несделанное",
        prompt:
          "Отчего в записке о делах нужны и строки с already, и строки с yet?",
        options: [
          { text: "Чтобы записка была длиннее." },
          { text: "Так принято начинать записку." },
          { text: "Чтобы читатель не взялся за сделанное и не забыл оставшееся.", correct: true },
        ],
        hint: "Представь читателя, которому назвали только сделанное.",
        why:
          "Чтобы читатель не взялся за сделанное и не забыл оставшееся. Одни " +
          "строки закрывают дела, другие открывают.",
      },
    ],
  },
};

export default module;
