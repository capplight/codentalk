import type { Module } from "@/lib/content/types";

/**
 * Модуль 4 курса «Английский · Elementary»: я не делал.
 *
 * Программа: docs/programma-english-elementary.md, модуль 4 — «отрицать
 * сделанное»; грамматика: Past Simple, отрицание с `didn't`; возврат глагола к
 * словарной форме.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, PAST past simple, «FORM: NEGATIVE» — «Can use
 *    the negative form with a limited range of regular and irregular verbs»,
 *    примеры источника: «The player from China did not look very happy though»,
 *    «You did not keep your promise», «I didn't tell you that my house is
 *    opposite the new cinema», «They didn't cost much». В примерах стоят обе
 *    записи — полная `did not` и краткая `didn't`, и оба вида глаголов.
 *
 * 2. English Grammar Profile, NEGATION, «FORM: AUXILIARY VERB 'DO'»: настоящее
 *    время помечено A1, прошедшее — A2. Источник разводит их нарочно, и наша
 *    ступень берёт именно прошедшее.
 *
 * 3. Cambridge, руководство для младших ступеней, список «что нового на A1
 *    Movers»: там же, где «Past simple regular and irregular forms», стоит
 *    пример «We didn't see the pirate at the party» — отрицание с неправильным
 *    глаголом в словарной форме.
 *
 * 4. Описания Совета Европы, с. 67, шкала Creative writing, графа A2: «Can give
 *    very short, basic descriptions of events, past activities and personal
 *    experiences» — отсюда размер рассказа в уроке 6.
 *
 * ГЛАВНАЯ ТРУДНОСТЬ МОДУЛЯ, И ЕЙ ОТДАН ЦЕЛЫЙ УРОК.
 *
 * После `didn't` глагол возвращается к словарной форме: не `I didn't went`, а `I
 * didn't go`. Для правильных глаголов это заметно мало — `worked` и `work`
 * похожи. Для неправильных заметно сразу: ученик три урока учил `went`, `saw`,
 * `bought`, а теперь их надо снять. Поэтому урок 2 занят только этим, и все его
 * задания стоят на неправильных глаголах модуля 3.
 *
 * 5. СЛОВАРЬ МОДУЛЯ. Тридцать карточек, из них двадцать девять несут слово,
 *    которого на прошлой ступени не было: manager, boss, printer, screen,
 *    department, dentist, medicine, pain, temperature, rest, receive, email,
 *    secretary, assistant, tablet, bridge, corner, gate, lorry, lift, pocket,
 *    uniform, mirror, towel, soap, noise, seat, cash, shelf. Двадцать восемь из
 *    них Oxford 3000 помечает A2; `shelf` он ставит на B1, но словник A2 Key его
 *    содержит, и по правилу ступени слово в запасе. Ещё два слова — `email` и
 *    `message` — стоят на A1 и взяты потому, что нужны урокам 3 и 6.
 *
 *    Норма ступени — не меньше тридцати карточек и не меньше пятнадцати новых
 *    (CLAUDE.md, «Объём словаря и число модулей»), считает `npm run kontrol`.
 *
 *    В отличие от модуля 3, здесь глаголы новых слов не несут вовсе: модуль о
 *    том, как отрицать уже известные дела, и брать к ним новые глаголы значило
 *    бы учить двум вещам сразу. Новизну несут существительные — то, о чём
 *    отрицание говорится.
 *
 *    СЛОВА-ПОДПОРКИ — те, что стоят в примерах и текстах, а своей карточки не
 *    имеют: work, room, film (A1), dark, strong, high, floor (A1), broken,
 *    closed, loud, strange (A2). Четыре последних объяснены словариком урока 7.
 *    Первая редакция перечислила здесь слова, которых в модуле нет вовсе, —
 *    нашёл методист счётом вхождений.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ВОПРОСА `Did you …?`. Программа отдаёт его модулю 5. Здесь только
 *   отрицание: смешать их — верный способ получить `Did you didn't go`.
 * — ОТРИЦАНИЯ ЧЕРЕЗ `wasn't` И `weren't`. Оно из модуля 1 и работает с другим
 *   глаголом. Разница названа один раз, врезкой в уроке 5, и на этом всё:
 *   ученику нужно не сравнение двух правил, а умение выбрать нужное.
 * — `NEVER` И `NOTHING`. Отрицание через них приходит позже, и вместе с
 *   `didn't` они дают двойное отрицание, которого в английском не бывает.
 *
 * ВОЗВРАЩЕНИЕ. Три задания из пройденного: два в уроке 2 (там они и работают —
 * словарная форма берётся из модуля 3) и одно в уроке 6. Берутся ссылкой
 * (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "ya-ne-delal",
  title: "Я не делал",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past simple, «FORM: NEGATIVE»: «Can use the negative form with a " +
        "limited range of regular and irregular verbs», примеры источника — «The " +
        "player from China did not look very happy though», «You did not keep your " +
        "promise», «I didn't tell you that my house is opposite the new cinema», " +
        "«They didn't cost much». " +
        "NEGATION, «FORM: AUXILIARY VERB 'DO'»: настоящее время помечено A1, " +
        "прошедшее — A2; источник разводит их нарочно, и модуль берёт прошедшее",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge, руководство для младших ступеней (Pre A1 Starters — A2 Flyers)",
      section:
        "список «что нового на A1 Movers»: рядом с «Past simple regular and " +
        "irregular forms» стоит пример «We didn't see the pirate at the party» — " +
        "отрицание с неправильным глаголом в словарной форме, то есть ровно урок 2",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК 6, РАССКАЗ. с. 67, шкала Creative writing, графа A2: «Can give very " +
        "short, basic descriptions of events, past activities and personal " +
        "experiences». " +
        "УРОК 7, ЧТЕНИЕ. с. 55, Reading correspondence, A2: «Can understand short, " +
        "simple personal letters». " +
        "УРОК 8, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority (e.g. " +
        "very basic personal and family information, shopping, local geography, " +
        "employment), provided people articulate clearly and slowly» — отсюда " +
        "pace: \"slow\". Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 8, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: manager, boss, printer, screen, " +
        "department, dentist, medicine, pain, temperature, rest, receive, " +
        "secretary, assistant, tablet, bridge, corner, gate, lorry, lift, pocket, " +
        "uniform, mirror, towel, soap, noise, seat, cash. " +
        "Слово shelf Oxford 3000 помечает B1, а словник A2 Key его содержит: по " +
        "правилу ступени (CLAUDE.md, «Объём словаря») оно в запасе и потому взято. " +
        "Первая редакция объявила его A2 — неверно, нашёл методист. " +
        "Слова email и message стоят на A1 и взяты потому, что нужны урокам 3 и 6. " +
        "Подпорки в примерах и текстах: broken A2, closed A2, loud A2, strange A2, " +
        "dark A1, strong A1, high A1, floor A1, work A1, room A1, film A1. Первая " +
        "редакция перечислила слова, которых в модуле нет вовсе, — тоже нашёл " +
        "методист",
      license: "внутреннее использование",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): manager /ˈmænɪdʒə/, secretary " +
        "/ˈsekrətri/, temperature /ˈtemprɪtʃə/, medicine /ˈmedsn/, assistant " +
        "/əˈsɪstənt/, department /dɪˈpɑːtmənt/, uniform /ˈjuːnɪfɔːm/, mirror " +
        "/ˈmɪrə/, towel /ˈtaʊəl/",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "отрицать сделанное: I didn't work yesterday",
    "возвращать глагол к словарной форме после didn't: I didn't go, а не I didn't went",
    "выбирать полную и краткую запись: did not и didn't",
    "отрицать при любом лице и при имени: my sister didn't call",
    "противопоставлять сделанное и несделанное через but",
    "рассказывать о дне, называя и сделанное, и несделанное",
    "понимать письмо, где о части дел сказано, что их не было",
    "слышать в записи, чего человек не делал",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ne-delal-vchera",
      title: "Чего не делал: I didn't work",
      estimatedMinutes: 15,
      outcome: "отрицать сделанное: I didn't work yesterday",

      blocks: [
        {
          id: "zachem-otricanie",
          kind: "explain",
          text: [
            "Сказать, что дело было, ты уже умеешь: I worked, I went.",
            "Чтобы сказать, что дела не было, перед глаголом ставят didn't.",
            "Само слово didn't ничего не значит по отдельности — оно только отрицает.",
            "Русское «не» стоит перед глаголом, и didn't стоит там же.",
          ],
        },
        {
          id: "kak-stroitsya-otricanie",
          kind: "table",
          caption: "Было и не было",
          zvuchat: ["I worked", "I didn't work", "we called", "we didn't call"],
          head: ["Дело было", "Дела не было"],
          rows: [
            ["I worked", "I didn't work"],
            ["we called", "we didn't call"],
          ],
        },
        {
          id: "gde-stoit-didnt",
          kind: "explain",
          text: [
            "Didn't встаёт между тем, кто делает, и самим делом.",
            "Остальное предложение не меняется: то, что стояло после глагола, там и остаётся.",
            "I worked in the office → I didn't work in the office.",
          ],
        },
        {
          id: "ne-ya-ne-worked",
          kind: "note",
          tone: "mistake",
          text:
            "«I not worked» и «I no worked» — так не говорят.\n\nОтрицание в прошедшем " +
            "времени стоит перед глаголом отдельным словом didn't.",
        },
        {
          id: "primer-o-rabote",
          kind: "example",
          caption: "Работа, которой не было",
          zvuchat: [
            "Yesterday I didn't work.",
            "The manager didn't call.",
            "The printer was broken.",
          ],
          text: "Yesterday I didn't work.\nThe manager didn't call.\nThe printer was broken.",
          explain:
            "Три строки: в первых двух дела не было, и в обеих стоит didn't. Третья " +
            "описывает вещь через was — это форма из первого модуля, и отрицание её " +
            "не касается.",
        },
        {
          id: "slovar-kontory",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "manager", translation: "руководитель отдела", example: "The manager didn't call.", hint: "/ˈmænɪdʒə/" },
            { term: "boss", translation: "начальник, у которого работаешь", example: "My boss didn't answer.", hint: "/bɒs/" },
            { term: "printer", translation: "принтер", example: "The printer was broken.", hint: "/ˈprɪntə/" },
            { term: "screen", translation: "экран", example: "The screen was dark.", hint: "/skriːn/" },
            { term: "department", translation: "отдел", example: "Our department didn't work on Friday.", hint: "/dɪˈpɑːtmənt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-didnt",
          kind: "gap",
          prompt: "Вчера работы не было. Допиши слово, которым отрицают дело.",
          before: "Yesterday I ",
          after: " work.",
          answer: "didn't",
          hint: "Одно слово, и стоит оно перед самим делом.",
          why: "Yesterday I didn't work. Отрицание в прошедшем времени строится словом didn't.",
        },
        {
          id: "z2-vybrat-otricanie",
          kind: "choice",
          prompt: "Руководитель не звонил. Выбери верную запись.",
          options: [
            { text: "The manager not called." },
            { text: "The manager didn't call.", correct: true },
            { text: "The manager didn't called." },
          ],
          hint: "Две записи из трёх меняют глагол или ставят отрицание не тем словом.",
          why:
            "The manager didn't call. Отрицание строится словом didn't, а глагол после " +
            "него окончания не берёт.",
        },
        {
          id: "z3-otmetit-otricaniya",
          kind: "hottext",
          prompt: "Отметь строки, где дела не было.",
          parts: [
            { text: "I didn't call", selectable: true, correct: true },
            { text: " · " },
            { text: "I called", selectable: true },
            { text: " · " },
            { text: "we didn't work", selectable: true, correct: true },
            { text: " · " },
            { text: "we worked", selectable: true },
          ],
          hint: "Смотри, стоит ли перед делом отрицание.",
          why: "Дела не было в строках I didn't call и we didn't work.",
        },
        {
          id: "z4-sobrat-otricanie",
          kind: "order",
          prompt: "Собери предложение: начальник вчера не отвечал. Начни с того, кто не отвечал.",
          items: ["answer", "My boss", "yesterday", "didn't"],
          answer: [1, 3, 0, 2],
          hint: "Сначала кто, потом отрицание, потом дело, и время в конце.",
          why:
            "My boss didn't answer yesterday. Didn't встаёт между тем, кто делает, и " +
            "самим делом.",
        },
        {
          id: "z5-napisat-ob-otdele",
          kind: "short",
          prompt: "Расскажи о пятнице: отдел не работал. Запиши предложение целиком.",
          answer: "Our department didn't work on Friday.",
          accept: [
            "Our department didn't work on Friday",
            "On Friday our department didn't work.",
            "The department didn't work on Friday.",
            "The department didn't work on Friday",
          ],
          hint: "Оборот времени поставь в конец, как в примере урока.",
          why:
            "Our department didn't work on Friday. Отрицание стоит перед делом, а " +
            "оборот времени — в конце.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vernut-slovarnuyu-formu",
      title: "После didn't глагол в словарной форме: I didn't go",
      estimatedMinutes: 15,
      outcome: "возвращать глагол к словарной форме после didn't: I didn't go, а не I didn't went",
      vozvrat: [
        { iz: "osobye-formy", zadanie: "z1-dopisat-went" },
        { iz: "osobye-formy", zadanie: "z3-sopostavit-formy" },
      ],

      blocks: [
        {
          id: "zachem-snimat",
          kind: "explain",
          text: [
            "I went — но I didn't go. Форма глагола рядом с отрицанием меняется.",
            "После didn't глагол возвращается к словарной форме — той, что стоит в словаре.",
            "I went, но I didn't go. I saw, но I didn't see.",
            "О прошлом уже сказало слово didn't, и второй раз его не называют.",
          ],
        },
        {
          id: "bylo-i-ne-bylo-osobye",
          kind: "table",
          caption: "Словарная форма возвращается",
          zvuchat: [
            "I went",
            "I didn't go",
            "I saw",
            "I didn't see",
            "I bought",
            "I didn't buy",
            "I ate",
            "I didn't eat",
          ],
          head: ["Дело было", "Дела не было"],
          rows: [
            ["I went", "I didn't go"],
            ["I saw", "I didn't see"],
            ["I bought", "I didn't buy"],
            ["I ate", "I didn't eat"],
          ],
        },
        {
          id: "pochemu-tak",
          kind: "explain",
          text: [
            "Правильные глаголы теряют окончание точно так же: I worked, но I didn't work.",
            "Просто у них потеря незаметна — work и worked похожи.",
            "У неправильных она видна сразу, поэтому правило и запоминают на них.",
          ],
        },
        {
          id: "ne-didnt-went",
          kind: "note",
          tone: "mistake",
          text:
            "«I didn't went» и «I didn't bought» — так не говорят.\n\nПрошедшее время в " +
            "этих записях названо дважды, а называют его один раз.",
        },
        {
          id: "primer-u-vracha",
          kind: "example",
          caption: "День без дел",
          zvuchat: [
            "I didn't go to the dentist.",
            "I didn't take the medicine.",
            "The pain was strong.",
          ],
          text:
            "I didn't go to the dentist.\nI didn't take the medicine.\nThe pain was strong.",
          explain:
            "В первых двух строках после didn't стоят словарные формы go и take, хотя о " +
            "прошлом. В третьей строке отрицания нет, и там обычное was.",
        },
        {
          id: "slovar-zdorovya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "dentist", translation: "зубной врач", example: "I didn't go to the dentist.", hint: "/ˈdentɪst/" },
            { term: "medicine", translation: "лекарство", example: "I didn't take the medicine.", hint: "/ˈmedsn/" },
            { term: "pain", translation: "боль", example: "The pain was strong.", hint: "/peɪn/" },
            { term: "temperature", translation: "температура", example: "My temperature was high.", hint: "/ˈtemprɪtʃə/" },
            { term: "rest", translation: "отдых", example: "I didn't have a rest.", hint: "/rest/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-prostuyu",
          kind: "gap",
          prompt: "К зубному врачу поездки не было. Допиши глагол в словарной форме.",
          before: "I didn't ",
          after: " to the dentist.",
          answer: "go",
          hint: "Прошедшее время уже названо словом didn't.",
          why: "I didn't go to the dentist. После didn't глагол стоит в словарной форме.",
        },
        {
          id: "z2-vybrat-prostuyu",
          kind: "choice",
          prompt: "Лекарство не принято. Выбери верную запись.",
          options: [
            { text: "I didn't took the medicine." },
            { text: "I didn't take the medicine.", correct: true },
            { text: "I not took the medicine." },
          ],
          hint: "В одной записи прошедшее время названо дважды, в другой отрицание построено не тем словом.",
          why:
            "I didn't take the medicine. Слово didn't уже сказало о прошлом, и глагол " +
            "после него стоит в словарной форме.",
        },
        {
          id: "z3-otmetit-lishnyuyu-formu",
          kind: "hottext",
          prompt: "Отметь записи, в которых глагол стоит неверно.",
          parts: [
            { text: "I didn't saw", selectable: true, correct: true },
            { text: " · " },
            { text: "I didn't see", selectable: true },
            { text: " · " },
            { text: "we didn't bought", selectable: true, correct: true },
            { text: " · " },
            { text: "we didn't buy", selectable: true },
          ],
          hint: "Неверна та запись, где о прошлом сказано два раза.",
          why:
            "Неверны I didn't saw и we didn't bought: рядом с didn't должна стоять " +
            "словарная форма.",
        },
        {
          id: "z4-sopostavit-snyatie",
          kind: "match",
          prompt: "Слева дело было, справа — не было. Найди пару каждому.",
          left: ["I went", "I saw", "I bought", "I ate"],
          right: ["I didn't buy", "I didn't eat", "I didn't go", "I didn't see"],
          answer: [2, 3, 0, 1],
          hint: "Смотри на сам глагол, а не на длину записи.",
          why: "I went — I didn't go, I saw — I didn't see, I bought — I didn't buy, I ate — I didn't eat.",
        },
        {
          id: "z5-napisat-ob-otdyhe",
          kind: "short",
          prompt: "Расскажи о вчерашнем дне: отдыха не было. Запиши предложение целиком.",
          answer: "Yesterday I didn't have a rest.",
          accept: [
            "I didn't have a rest yesterday.",
            "Yesterday I didn't have a rest",
            "Yesterday I didn't rest.",
            "I didn't rest yesterday.",
          ],
          hint: "Глагол have после didn't стоит в словарной форме.",
          why:
            "Yesterday I didn't have a rest. После didn't стоит have, а не had: о " +
            "прошлом сказано один раз.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "polnaya-i-kratkaya",
      title: "Did not и didn't",
      estimatedMinutes: 15,
      outcome: "выбирать полную и краткую запись: did not и didn't",

      blocks: [
        {
          id: "zachem-dve-zapisi",
          kind: "explain",
          text: [
            "У отрицания две записи: полная did not и краткая didn't.",
            "Значат они одно и то же, различается только вид записи.",
            "Обе записи верны, и встретиться тебе может любая.",
          ],
        },
        {
          id: "dve-zapisi",
          kind: "table",
          caption: "Полная запись и краткая",
          zvuchat: ["did not", "didn't", "I did not receive", "I didn't receive"],
          head: ["Полная", "Краткая"],
          rows: [
            ["did not", "didn't"],
            ["I did not receive", "I didn't receive"],
          ],
        },
        {
          id: "gde-apostrof",
          kind: "explain",
          text: [
            "В краткой записи вместо буквы o стоит апостроф: did not → didn't.",
            "Он показывает, что буква пропущена, и без него слово написано неверно.",
            "Глагол после обеих записей одинаковый — в словарной форме.",
          ],
        },
        {
          id: "ne-didnot",
          kind: "note",
          tone: "mistake",
          text:
            "«I didnt receive» и «I did'nt receive» — так не пишут.\n\nАпостроф стоит " +
            "ровно на месте пропущенной буквы, между n и t.",
        },
        {
          id: "primer-o-pisme",
          kind: "example",
          caption: "Письмо, которого не было",
          zvuchat: [
            "I didn't receive the email.",
            "The secretary did not send it.",
            "The assistant was on holiday.",
          ],
          text:
            "I didn't receive the email.\nThe secretary did not send it.\nThe assistant was on holiday.",
          explain:
            "В первой строке краткая запись, во второй полная, и обе говорят одно и то " +
            "же. Третья строка описывает человека через was и отрицания не несёт.",
        },
        {
          id: "slovar-perepiski",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "receive", translation: "получать", example: "I didn't receive the email.", hint: "/rɪˈsiːv/" },
            { term: "email", translation: "электронное письмо", example: "I didn't receive the email.", hint: "/ˈiːmeɪl/" },
            { term: "secretary", translation: "секретарь", example: "The secretary did not send it.", hint: "/ˈsekrətri/" },
            { term: "assistant", translation: "помощник", example: "The assistant was on holiday.", hint: "/əˈsɪstənt/" },
            { term: "tablet", translation: "планшет", example: "My tablet didn't work.", hint: "/ˈtæblət/" },
          ],
        },
        {
          id: "tablet-ne-tabletka",
          kind: "note",
          tone: "info",
          text:
            "Русское слово «таблетка» звучит похоже на tablet, но значит другое.\n\n" +
            "tablet — это устройство, на котором читают и смотрят фильмы. Лекарство " +
            "называется medicine.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-apostrof",
          kind: "gap",
          prompt: "Перепиши краткой записью то, что стоит полной: did not.",
          before: "I ",
          after: " receive the email.",
          answer: "didn't",
          hint: "Одна буква пропущена, и на её месте стоит знак.",
          why: "I didn't receive the email. Апостроф стоит между n и t, на месте буквы o.",
        },
        {
          id: "z2-vybrat-zapis",
          kind: "choice",
          prompt: "Какая краткая запись написана верно?",
          options: [
            { text: "did'nt" },
            { text: "didnt" },
            { text: "didn't", correct: true },
          ],
          hint: "Знак стоит там, где выпала буква.",
          why:
            "Верно didn't. В did not выпадает o, и апостроф встаёт ровно на её место — " +
            "между n и t.",
        },
        {
          id: "z3-otmetit-polnye",
          kind: "hottext",
          prompt: "Отметь полные записи.",
          parts: [
            { text: "did not receive", selectable: true, correct: true },
            { text: " · " },
            { text: "didn't receive", selectable: true },
            { text: " · " },
            { text: "did not send", selectable: true, correct: true },
            { text: " · " },
            { text: "didn't send", selectable: true },
          ],
          hint: "В полной записи два отдельных слова.",
          why: "Полные записи — did not receive и did not send.",
        },
        {
          id: "z4-sobrat-polnuyu",
          kind: "order",
          prompt: "Собери предложение полной записью: секретарь его не отправил. Начни с того, кто не отправил.",
          items: ["send", "The secretary", "it", "did not"],
          answer: [1, 3, 0, 2],
          hint: "Полная запись занимает два слова, и оба стоят перед делом.",
          why: "The secretary did not send it. Обе части полной записи стоят перед глаголом.",
        },
        {
          id: "z5-napisat-o-planshete",
          kind: "short",
          prompt: "Расскажи о своём планшете: он не работал. Запиши краткой записью, целиком.",
          answer: "My tablet didn't work.",
          accept: ["My tablet didn't work", "The tablet didn't work.", "The tablet didn't work"],
          hint: "Апостроф в записи обязателен.",
          why: "My tablet didn't work. Краткая запись пишется с апострофом между n и t.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "otricanie-pri-lyubom-lice",
      title: "Отрицание при любом лице: my sister didn't call",
      estimatedMinutes: 15,
      outcome: "отрицать при любом лице и при имени: my sister didn't call",

      blocks: [
        {
          id: "zachem-lica",
          kind: "explain",
          text: [
            "В настоящем времени отрицание меняется по лицам: I don't, но he doesn't.",
            "В прошедшем не меняется вовсе.",
            "Одно слово didn't стоит при I, при he, при we и при имени.",
          ],
        },
        {
          id: "didnt-po-licam",
          kind: "table",
          caption: "Одно слово на всех",
          zvuchat: [
            "I didn't call",
            "you didn't call",
            "he didn't call",
            "we didn't call",
            "they didn't call",
          ],
          head: ["Кто", "Дела не было"],
          rows: [
            ["I", "I didn't call"],
            ["you", "you didn't call"],
            ["he", "he didn't call"],
            ["we", "we didn't call"],
            ["they", "they didn't call"],
          ],
        },
        {
          id: "vmesto-mestoimeniya-imya",
          kind: "explain",
          text: [
            "Тот, кто делает, стоит перед отрицанием: его называют подлежащим.",
            "В The lorry didn't come подлежащее — the lorry, в My sister didn't call — my sister.",
            "Вместо местоимения может стоять имя или название, и запись та же.",
            "My sister didn't call. The lorry didn't come.",
            "Ничего добавлять не нужно: слово didn't уже сказало и о прошлом, и об отрицании.",
          ],
        },
        {
          id: "ne-doesnt-v-proshlom",
          kind: "note",
          tone: "mistake",
          text:
            "«He doesn't called» и «She didn't calls» — так не говорят.\n\nВ прошедшем " +
            "времени отрицание одно на всех, а глагол после него окончаний не берёт.",
        },
        {
          id: "primer-na-uglu",
          kind: "example",
          caption: "У закрытого моста",
          zvuchat: [
            "The lorry didn't come.",
            "We didn't wait at the gate.",
            "The bridge was closed.",
          ],
          text: "The lorry didn't come.\nWe didn't wait at the gate.\nThe bridge was closed.",
          explain:
            "В первой строке подлежащее — название вещи, во второй — we, и didn't в " +
            "обеих одинаковое. Третья строка описывает мост через was.",
        },
        {
          id: "slovar-dorogi-chetyre",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bridge", translation: "мост", example: "The bridge was closed.", hint: "/brɪdʒ/" },
            { term: "corner", translation: "угол", example: "We didn't wait at the corner.", hint: "/ˈkɔːnə/" },
            { term: "gate", translation: "ворота", example: "We didn't wait at the gate.", hint: "/geɪt/" },
            { term: "lorry", translation: "грузовик", example: "The lorry didn't come.", hint: "/ˈlɒri/" },
            { term: "lift", translation: "лифт", example: "The lift didn't work.", hint: "/lɪft/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-pri-imeni",
          kind: "gap",
          prompt: "Грузовик не приехал. Допиши слово отрицания.",
          before: "The lorry ",
          after: " come.",
          answer: "didn't",
          hint: "Оно одинаковое при любом подлежащем.",
          why: "The lorry didn't come. В прошедшем времени отрицание по лицам не меняется.",
        },
        {
          id: "z2-vybrat-pri-he",
          kind: "choice",
          prompt: "Он не ждал у ворот. Выбери верную запись.",
          options: [
            { text: "He doesn't waited at the gate." },
            { text: "He didn't waited at the gate." },
            { text: "He didn't wait at the gate.", correct: true },
          ],
          hint: "Одна запись взяла отрицание настоящего времени, другая оставила окончание у глагола.",
          why:
            "He didn't wait at the gate. Отрицание прошедшего одно на всех, а глагол " +
            "после него стоит в словарной форме.",
        },
        {
          id: "z3-otmetit-vernye-lica",
          kind: "hottext",
          prompt: "Отметь записи, построенные верно.",
          parts: [
            { text: "she didn't call", selectable: true, correct: true },
            { text: " · " },
            { text: "she didn't calls", selectable: true },
            { text: " · " },
            { text: "they didn't come", selectable: true, correct: true },
            { text: " · " },
            { text: "they doesn't come", selectable: true },
          ],
          hint: "Смотри на два места: слово отрицания и окончание глагола.",
          why:
            "Верны she didn't call и they didn't come. В остальных либо у глагола " +
            "лишнее окончание, либо взято отрицание настоящего времени.",
        },
        {
          id: "z4-sobrat-pri-sestre",
          kind: "order",
          prompt: "Собери предложение: сестра вчера не звонила. Начни с того, кто не звонил.",
          items: ["didn't", "yesterday", "My sister", "call"],
          answer: [2, 0, 3, 1],
          hint: "Порядок обычный: кто, отрицание, дело, время.",
          why: "My sister didn't call yesterday. При имени запись та же, что при местоимении.",
        },
        {
          id: "z5-napisat-o-lifte",
          kind: "short",
          prompt: "Расскажи о лифте: он не работал. Запиши предложение целиком.",
          answer: "The lift didn't work.",
          accept: ["The lift didn't work"],
          hint: "Подлежащее — вещь, но отрицание то же самое.",
          why: "The lift didn't work. Didn't стоит и при вещи, и при человеке одинаково.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sdelal-no-ne-sdelal",
      title: "Сделал, но не сделал: I worked, but I didn't finish",
      estimatedMinutes: 15,
      outcome: "противопоставлять сделанное и несделанное через but",

      blocks: [
        {
          id: "zachem-but",
          kind: "explain",
          text: [
            "Чаще всего отрицание стоит не одно, а рядом с тем, что было сделано.",
            "Две части соединяют словом but.",
            "I worked, but I didn't finish — работа была, а конца у неё не было.",
          ],
        },
        {
          id: "dve-chasti",
          kind: "table",
          caption: "Две части одного дня",
          zvuchat: [
            "I cleaned the room",
            "but I didn't wash the towel",
            "I bought soap",
            "but I didn't buy a mirror",
          ],
          head: ["Что было", "Чего не было"],
          rows: [
            ["I cleaned the room", "but I didn't wash the towel"],
            ["I bought soap", "but I didn't buy a mirror"],
          ],
        },
        {
          id: "zapyataya-pered-but",
          kind: "explain",
          text: [
            "Перед but ставят запятую, если после него идёт вторая часть со своим подлежащим — с тем, кто делает.",
            "I worked, but I didn't finish — две части, запятая нужна.",
            "Каждая часть построена по своим правилам: в первой обычное прошедшее, во второй didn't.",
          ],
        },
        {
          id: "ne-wasnt-vmesto-didnt",
          kind: "note",
          tone: "mistake",
          text:
            "Wasn't отрицает то, каким что-то было: I wasn't tired.\n\nДело отрицают " +
            "через didn't: I didn't finish.\n\nОбе записи верны, но говорят о разном.",
        },
        {
          id: "primer-uborki",
          kind: "example",
          caption: "Половина дел",
          zvuchat: [
            "I cleaned the room, but I didn't wash the towel.",
            "I bought soap, but I didn't buy a mirror.",
            "The uniform was in the pocket.",
          ],
          text:
            "I cleaned the room, but I didn't wash the towel.\nI bought soap, but I didn't buy a mirror.\nThe uniform was in the pocket.",
          explain:
            "В первых двух строках по две части: сделанное и несделанное, между ними " +
            "but. Третья строка описывает, где лежала вещь, и отрицания не несёт.",
        },
        {
          id: "slovar-veshchey-chetyre",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "pocket", translation: "карман", example: "The uniform was in the pocket.", hint: "/ˈpɒkɪt/" },
            { term: "uniform", translation: "форменная одежда", example: "The uniform was in the pocket.", hint: "/ˈjuːnɪfɔːm/" },
            { term: "mirror", translation: "зеркало", example: "I didn't buy a mirror.", hint: "/ˈmɪrə/" },
            { term: "towel", translation: "полотенце", example: "I didn't wash the towel.", hint: "/ˈtaʊəl/" },
            { term: "soap", translation: "мыло", example: "I bought soap.", hint: "/səʊp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-but",
          kind: "gap",
          prompt: "Комната убрана, а полотенце — нет. Допиши слово, которое соединяет две части.",
          before: "I cleaned the room, ",
          after: " I didn't wash the towel.",
          answer: "but",
          hint: "Три буквы, и после него идёт вторая часть.",
          why:
            "I cleaned the room, but I didn't wash the towel. Слово but соединяет " +
            "сделанное с несделанным.",
        },
        {
          id: "z2-vybrat-wasnt-ili-didnt",
          kind: "choice",
          prompt: "Работа была, а конца у неё не было. Выбери верную вторую часть.",
          options: [
            { text: "but I wasn't finish" },
            { text: "but I didn't finish", correct: true },
            { text: "but I didn't finished" },
          ],
          hint: "Одна запись отрицает дело не тем словом, другая оставляет глаголу окончание.",
          why:
            "I worked, but I didn't finish. Дело отрицают через didn't, а глагол после " +
            "него стоит в словарной форме.",
        },
        {
          id: "z3-otmetit-vtorye-chasti",
          kind: "hottext",
          prompt: "Отметь части, где сказано, чего не было.",
          parts: [
            { text: "but I didn't buy a mirror", selectable: true, correct: true },
            { text: " · " },
            { text: "I bought soap", selectable: true },
            { text: " · " },
            { text: "but I didn't wash the towel", selectable: true, correct: true },
            { text: " · " },
            { text: "I cleaned the room", selectable: true },
          ],
          hint: "В нужных частях стоит отрицание.",
          why: "О несделанном говорят части but I didn't buy a mirror и but I didn't wash the towel.",
        },
        {
          id: "z4-sobrat-dve-chasti",
          kind: "order",
          prompt: "Собери вторую часть: зеркало куплено не было. Начни со слова but.",
          items: ["a mirror", "but", "buy", "I didn't"],
          answer: [1, 3, 2, 0],
          hint: "Сначала соединительное слово, потом кто и отрицание, потом дело.",
          why: "but I didn't buy a mirror. Вторая часть строится так же, как отдельное предложение.",
        },
        {
          id: "z5-napisat-dve-chasti",
          kind: "short",
          prompt: "Расскажи о покупках: мыло куплено, а зеркало — нет. Запиши обе части целиком.",
          answer: "I bought soap, but I didn't buy a mirror.",
          accept: ["I bought soap but I didn't buy a mirror."],
          hint: "Первая часть о сделанном, вторая начинается с but.",
          why:
            "I bought soap, but I didn't buy a mirror. В первой части обычное прошедшее, " +
            "во второй — didn't и словарная форма.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-o-nesdelannom",
      title: "Рассказ о дне: что было и чего не было",
      estimatedMinutes: 15,
      outcome: "рассказывать о дне, называя и сделанное, и несделанное",
      vozvrat: [{ iz: "vchera-ya-rabotal", zadanie: "z4-sobrat-delo" }],

      blocks: [
        {
          id: "zachem-rasskaz-s-otricaniem",
          kind: "explain",
          text: [
            "Рассказ, где всё удалось, звучит неправдоподобно.",
            "Обычно часть дел удалась, а часть нет, и говорят о том и о другом.",
            "Новое здесь одно: отрицание стоит в рассказе наравне с обычными делами.",
          ],
        },
        {
          id: "poryadok-v-rasskaze",
          kind: "table",
          caption: "Из чего собран рассказ",
          zvuchat: [
            "First I cleaned the room.",
            "Then I didn't have a rest.",
            "After that I wrote a message.",
          ],
          head: ["Слово порядка", "Строка"],
          rows: [
            ["First", "First I cleaned the room."],
            ["Then", "Then I didn't have a rest."],
            ["After that", "After that I wrote a message."],
          ],
        },
        {
          id: "gde-stoit-otricanie-v-rasskaze",
          kind: "explain",
          text: [
            "Слово порядка стоит первым в строке, а отрицание — на своём обычном месте, перед делом.",
            "Оборот времени называют один раз, в самом начале рассказа.",
            "Строка об обстановке берёт was и отрицания не требует.",
          ],
        },
        {
          id: "ne-dva-otricaniya",
          kind: "note",
          tone: "mistake",
          text:
            "«First I didn't cleaned the room» — так не говорят.\n\nСлово порядка " +
            "отрицанию не мешает, но глагол после didn't всё равно стоит в словарной форме.",
        },
        {
          id: "primer-dnya-s-otricaniem",
          kind: "example",
          caption: "Шумный день",
          zvuchat: [
            "Yesterday I worked at home.",
            "First I cleaned the room, but I didn't wash the floor.",
            "Then I wrote a message to my boss.",
            "The noise from the street was loud.",
          ],
          text:
            "Yesterday I worked at home.\nFirst I cleaned the room, but I didn't wash the floor.\nThen I wrote a message to my boss.\nThe noise from the street was loud.",
          explain:
            "Четыре строки: первая называет время и место, две следующие — дела по " +
            "порядку, и в первой из них рядом стоят сделанное и несделанное. " +
            "Последняя строка описывает шум через was.",
        },
        {
          id: "slovar-rasskaza-chetyre",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "noise", translation: "шум", example: "The noise was loud.", hint: "/nɔɪz/" },
            { term: "seat", translation: "сиденье", example: "The seat was cold.", hint: "/siːt/" },
            { term: "cash", translation: "наличные деньги", example: "I didn't have cash.", hint: "/kæʃ/" },
            { term: "shelf", translation: "полка", example: "The soap was on the shelf.", hint: "/ʃelf/" },
            { term: "message", translation: "сообщение", example: "I wrote a message to my boss.", hint: "/ˈmesɪdʒ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-v-rasskaze",
          kind: "gap",
          prompt: "Отдыха в тот день не было. Допиши слово отрицания.",
          before: "Then I ",
          after: " have a rest.",
          answer: "didn't",
          hint: "Слово порядка уже стоит, дальше идёт отрицание.",
          why: "Then I didn't have a rest. Отрицание стоит после слова порядка, перед делом.",
        },
        {
          id: "z2-vybrat-lishnyuyu-stroku",
          kind: "choice",
          prompt: "В рассказе о вчерашнем дне одна строка лишняя. Какая?",
          options: [
            { text: "First I cleaned the room." },
            { text: "I don't wash the floor every day.", correct: true },
            { text: "Then I wrote a message." },
          ],
          hint: "Две строки об одном дне, третья — о том, что бывает всегда.",
          why:
            "I don't wash the floor every day. Эта строка о повторяющемся деле, а " +
            "рассказ — о вчерашнем дне.",
        },
        {
          id: "z3-otmetit-nesdelannoe",
          kind: "hottext",
          prompt: "Отметь дела, которых в рассказе не было.",
          parts: [
            { text: "didn't wash the floor", selectable: true, correct: true },
            { text: " · " },
            { text: "cleaned the room", selectable: true },
            { text: " · " },
            { text: "didn't have a rest", selectable: true, correct: true },
            { text: " · " },
            { text: "wrote a message", selectable: true },
          ],
          hint: "Ищи отрицание перед делом.",
          why: "Не было мытья пола и отдыха: обе строки стоят с отрицанием.",
        },
        {
          id: "z4-sobrat-stroku-rasskaza",
          kind: "order",
          prompt: "Собери строку рассказа: наличных не было. Начни со слова порядка Then.",
          items: ["cash", "didn't have", "Then", "I"],
          answer: [2, 3, 1, 0],
          hint: "Слово порядка первым, потом кто, потом отрицание с делом.",
          why: "Then I didn't have cash. Слово порядка стоит перед тем, кто делает.",
        },
        {
          id: "z5-napisat-stroku-s-but",
          kind: "short",
          prompt:
            "Продолжи рассказ одной строкой: сообщение отправлено, а звонка не было. " +
            "Начни со слова Then.",
          answer: "Then I wrote a message, but I didn't call.",
          accept: ["Then I wrote a message but I didn't call."],
          hint: "Две части, между ними but.",
          why:
            "Then I wrote a message, but I didn't call. Слово порядка открывает строку, " +
            "а but соединяет сделанное с несделанным.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-o-nesdelannom",
      title: "Читаем письмо о несделанном",
      estimatedMinutes: 13,
      outcome: "понимать письмо, где о части дел сказано, что их не было",

      blocks: [
        {
          id: "zachem-chitat-o-nesdelannom",
          kind: "explain",
          text: [
            "В письме сделанное и несделанное идут вперемешку, и различать их надо на ходу.",
            "Ниже письмо о неудачном дне.",
            "Читай целиком, потом отвечай. Вопросы — о том, что произошло и что нет.",
          ],
        },
        {
          id: "pismo-o-neudachnom-dne",
          kind: "text",
          title: "Письмо от Данияра",
          genre: "email",
          body: [
            "Hi Aigul!",
            "Yesterday was a strange day. I went to the office, but I didn't work: " +
              "the lift was broken, and our department was closed.",
            "I waited at the gate for an hour. The manager didn't come and the " +
              "secretary didn't answer my email.",
            "Then I went to the dentist. It wasn't bad, but I didn't take the " +
              "medicine after that.",
            "In the evening I didn't have a rest. I wrote a message to my boss and " +
              "cleaned the room.",
            "Daniyar",
          ],
          glossary: [
            { term: "strange", translation: "странный" },
            { term: "broken", translation: "сломан" },
            { term: "for an hour", translation: "час (о продолжительности)" },
            { term: "closed", translation: "закрыт" },
          ],
        },
        {
          id: "kak-chitat-o-nesdelannom",
          kind: "note",
          tone: "info",
          text:
            "В письме рядом стоят три вида записей: обычное прошедшее, отрицание с " +
            "didn't и отрицание с wasn't.\n\nПервое говорит, что дело было, второе — " +
            "что дела не было, третье — каким что-то не было.",
        },

        // ---- задания ----
        {
          id: "z1-pochemu-ne-rabotal",
          kind: "choice",
          about: "pismo-o-neudachnom-dne",
          prompt: "Почему Данияр не работал?",
          options: [
            { text: "Он не поехал в контору" },
            { text: "Отдел был закрыт", correct: true },
            { text: "Он был у зубного врача" },
          ],
          hint: "Причина названа в той же строке, что и лифт.",
          why:
            "I went to the office, but I didn't work: the lift didn't work either, and " +
            "our department was closed.",
        },
        {
          id: "z2-kto-ne-otvetil",
          kind: "short",
          about: "pismo-o-neudachnom-dne",
          prompt: "Кто не ответил на почту? Ответь одним английским словом.",
          answer: "secretary",
          accept: ["the secretary", "The secretary"],
          hint: "Слово стоит рядом с руководителем, в абзаце про ожидание у ворот.",
          why: "The manager didn't come and the secretary didn't answer my email.",
        },
        {
          id: "z3-chto-ne-vzyal",
          kind: "short",
          about: "pismo-o-neudachnom-dne",
          prompt: "Чего он не принял после зубного врача? Ответь одним английским словом.",
          answer: "medicine",
          accept: ["the medicine"],
          hint: "Слово стоит в строке про зубного врача, после but.",
          why: "It wasn't bad, but I didn't take the medicine after that.",
        },
        {
          id: "z4-chto-sdelal-vecherom",
          kind: "choice",
          about: "pismo-o-neudachnom-dne",
          prompt: "Что он всё-таки сделал вечером?",
          options: [
            { text: "Отдохнул" },
            { text: "Убрал комнату", correct: true },
            { text: "Съездил к врачу" },
          ],
          hint: "В последнем абзаце три дела: одно с отрицанием, два без.",
          why: "I wrote a message to my boss and cleaned the room.",
        },
        {
          id: "z5-skolko-zhdal",
          kind: "short",
          about: "pismo-o-neudachnom-dne",
          prompt: "Сколько он ждал у ворот? Ответь одним английским словом.",
          answer: "hour",
          accept: ["an hour", "for an hour"],
          hint: "Слово стоит в абзаце про ожидание у ворот и объяснено в словарике под письмом.",
          why: "I waited at the gate for an hour.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-nesdelannom",
      title: "Слушаем рассказ о неудачном дне",
      estimatedMinutes: 13,
      outcome: "слышать в записи, чего человек не делал",

      blocks: [
        {
          id: "zachem-slushat-otricanie",
          kind: "explain",
          text: [
            "В речи didn't звучит коротко и легко теряется, а от него зависит весь смысл.",
            "Ниже запись: человек рассказывает о неудачном дне.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
            "Открой её после ответов.",
          ],
        },
        {
          id: "zapis-o-neudachnom-dne",
          kind: "audio",
          caption: "Рассказ о неудачном дне",
          pace: "slow",
          skryt: true,
          transcript:
            "Yesterday I didn't go to work. My temperature was high, and I stayed at " +
            "home. My sister didn't call, but she wrote a message. In the evening I " +
            "didn't watch the film: the screen was broken. I took a book and went to " +
            "bed early.",
        },
        {
          id: "chto-slushat-v-otricanii",
          kind: "note",
          tone: "info",
          text:
            "Слушай, куда человек не поехал, что было высоким, что сделала сестра и " +
            "что было сломано вечером.\n\nОб этом и будут вопросы.",
        },

        // ---- задания ----
        {
          id: "z1-kuda-ne-poehal",
          kind: "choice",
          about: "zapis-o-neudachnom-dne",
          prompt: "Куда человек не поехал?",
          options: [
            { text: "К зубному врачу" },
            { text: "На работу", correct: true },
            { text: "На побережье" },
          ],
          hint: "Это сказано в самой первой фразе.",
          why: "Yesterday I didn't go to work.",
        },
        {
          id: "z2-chto-bylo-vysokim",
          kind: "short",
          about: "zapis-o-neudachnom-dne",
          prompt: "Что было высоким? Ответь одним английским словом.",
          answer: "temperature",
          accept: ["my temperature", "the temperature"],
          hint: "Слово стоит сразу после первой фразы.",
          why: "My temperature was high, and I stayed at home.",
        },
        {
          id: "z3-chto-sdelala-sestra",
          kind: "choice",
          about: "zapis-o-neudachnom-dne",
          prompt: "Что сделала сестра?",
          options: [
            { text: "Позвонила" },
            { text: "Прислала сообщение", correct: true },
            { text: "Приехала" },
          ],
          hint: "В той же строке одно дело отрицается, а другое нет.",
          why: "My sister didn't call, but she wrote a message.",
        },
        {
          id: "z4-pochemu-ne-smotrel",
          kind: "short",
          about: "zapis-o-neudachnom-dne",
          prompt: "Что было сломано? Ответь одним английским словом.",
          answer: "screen",
          accept: ["the screen"],
          hint: "Причина названа сразу после того, чего он не смотрел.",
          why: "In the evening I didn't watch the film: the screen was broken.",
        },
        {
          id: "z5-vosstanovit-otricanie",
          kind: "order",
          zvuk: "My sister didn't call, but she wrote a message in the evening.",
          prompt: "Послушай запись и собери из карточек то, что в ней сказано.",
          items: ["in the evening", "a message", "but she wrote", "didn't call,", "My sister"],
          answer: [4, 3, 2, 1, 0],
          hint: "Оборот времени стоит в самом конце, и услышать его можно только в записи.",
          why:
            "My sister didn't call, but she wrote a message in the evening. Первая " +
            "часть с отрицанием, вторая — о том, что всё же было сделано, и время " +
            "названо в самом конце.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от заданий уроков и другими углами: исправить
      // чужую запись, назвать причину ошибки, отличить по смыслу, передать с
      // русского. Совпадений с заданиями уроков нет.

      // ---- итог 1 ----
      {
        id: "q-otricanie-ispravit",
        kind: "short",
        outcome: "отрицать сделанное: I didn't work yesterday",
        prompt: "Исправь ошибку и запиши целиком: «The assistant not opened the gate.»",
        answer: "The assistant didn't open the gate.",
        accept: ["The assistant didn't open the gate"],
        why:
          "The assistant didn't open the gate. Слово not само по себе дело не " +
          "отрицает: перед глаголом нужно didn't.",
      },
      {
        id: "q-otricanie-prichina",
        kind: "choice",
        outcome: "отрицать сделанное: I didn't work yesterday",
        prompt: "Почему запись «I no worked in the office» неверна?",
        options: [
          { text: "Потому что после office нужно ещё одно слово" },
          { text: "Потому что дело отрицают словом didn't перед глаголом", correct: true },
          { text: "Потому что перед worked всегда ставят was" },
        ],
        why:
          "I didn't work in the office. Слово no отрицает вещь, а дело отрицают " +
          "словом didn't.",
      },
      // ---- итог 2 ----
      {
        id: "q-snyat-formu-ispravit",
        kind: "short",
        outcome: "возвращать глагол к словарной форме после didn't: I didn't go, а не I didn't went",
        prompt: "Исправь ошибку и запиши целиком: «We didn't saw the bridge.»",
        answer: "We didn't see the bridge.",
        accept: ["We didn't see the bridge"],
        why:
          "We didn't see the bridge. О прошлом уже сказало didn't, и глагол рядом с " +
          "ним стоит в словарной форме.",
      },
      {
        id: "q-snyat-formu-otlichit",
        kind: "choice",
        outcome: "возвращать глагол к словарной форме после didn't: I didn't go, а не I didn't went",
        prompt: "Почему запись «We didn't wrote a message» неверна?",
        options: [
          { text: "Потому что рядом с didn't глагол стоит в словарной форме", correct: true },
          { text: "Потому что после didn't вместо глагола ставят was" },
          { text: "Потому что слово message нельзя ставить последним" },
        ],
        why:
          "We didn't write a message. О прошлом уже сказало слово didn't, и второй " +
          "раз его не называют.",
      },
      // ---- итог 3 ----
      {
        id: "q-zapis-nazvat",
        kind: "short",
        outcome: "выбирать полную и краткую запись: did not и didn't",
        prompt: "Запиши кратко: «The assistant did not receive the email.»",
        answer: "The assistant didn't receive the email.",
        accept: ["The assistant didn't receive the email"],
        why:
          "The assistant didn't receive the email. В краткой записи выпадает o, и на её " +
          "месте стоит апостроф.",
      },
      // ---- итог 4 ----
      {
        id: "q-lica-prichina",
        kind: "choice",
        outcome: "отрицать при любом лице и при имени: my sister didn't call",
        prompt: "Почему запись «She doesn't came to the corner» неверна?",
        options: [
          { text: "Потому что при she отрицание не ставят вовсе" },
          { text: "Потому что перед corner нельзя ставить the" },
          { text: "Потому что doesn't отрицает настоящее время, а речь о прошлом", correct: true },
        ],
        why:
          "She didn't come to the corner. Слово doesn't отрицает настоящее время, а " +
          "речь о прошлом. В прошедшем отрицание одно на все лица, и глагол после " +
          "него стоит в словарной форме.",
      },
      {
        id: "q-lica-peredat",
        kind: "short",
        outcome: "отрицать при любом лице и при имени: my sister didn't call",
        prompt: "Передай по-английски: грузовик не приехал к воротам.",
        answer: "The lorry didn't come to the gate.",
        accept: ["The lorry didn't come to the gate"],
        why:
          "The lorry didn't come to the gate. При названии вещи отрицание такое же, " +
          "как при человеке.",
      },
      // ---- итог 5 ----
      {
        id: "q-but-peredat",
        kind: "short",
        outcome: "противопоставлять сделанное и несделанное через but",
        prompt: "Передай по-английски: он получил письмо, а ответа не написал.",
        answer: "He received the email, but he didn't write an answer.",
        accept: [
          "He received the email but he didn't write an answer.",
          "He received the email, but he didn't write an answer",
        ],
        why:
          "He received the email, but he didn't write an answer. Первая часть о " +
          "сделанном, вторая начинается с but и берёт didn't со словарной формой.",
      },
      {
        id: "q-but-ispravit",
        kind: "short",
        outcome: "противопоставлять сделанное и несделанное через but",
        prompt: "Исправь ошибку и запиши целиком: «She called, but she didn't answered.»",
        answer: "She called, but she didn't answer.",
        accept: ["She called but she didn't answer.", "She called, but she didn't answer"],
        why:
          "She called, but she didn't answer. Окончание у глагола лишнее: о прошлом " +
          "уже сказало слово didn't.",
      },
      // ---- итог 6 ----
      {
        id: "q-rasskaz-ispravit",
        kind: "short",
        outcome: "рассказывать о дне, называя и сделанное, и несделанное",
        prompt:
          "Этот рассказ о вчерашнем дне. Одна строка сбилась на настоящее время. " +
          "Вот она: «I didn't have cash, and I don't have it now.» Оставь только " +
          "первую половину и запиши её.",
        answer: "I didn't have cash.",
        accept: ["I didn't have cash"],
        why:
          "I didn't have cash. Вторая половина говорила о том, что есть сейчас, а " +
          "рассказ — о вчерашнем дне.",
      },
      {
        id: "q-rasskaz-sobrat",
        kind: "order",
        outcome: "рассказывать о дне, называя и сделанное, и несделанное",
        prompt: "Собери строку рассказа: полотенце не постирано. Начни со слова порядка After that.",
        items: ["wash the towel", "I", "After that", "didn't"],
        answer: [2, 1, 3, 0],
        why:
          "After that I didn't wash the towel. Слово порядка открывает строку, дальше " +
          "идёт обычный порядок с отрицанием.",
      },
      // ---- итог 7 ----
      {
        id: "q-chtenie-schet",
        kind: "short",
        outcome: "понимать письмо, где о части дел сказано, что их не было",
        prompt:
          "В письме написано: «I waited at the gate for an hour. The manager didn't " +
          "come and the secretary didn't answer my email.» Сколько человек подвели " +
          "Данияра в то утро? Ответь цифрой.",
        answer: "2",
        accept: ["two", "Two"],
        why:
          "Двое: руководитель не пришёл, секретарь не ответил. Оба дела названы с " +
          "отрицанием, и оба относятся к другим людям, а не к самому Данияру.",
      },
      // ---- итог 8 ----
      {
        id: "q-sluh-chego-ne-bylo",
        kind: "short",
        outcome: "слышать в записи, чего человек не делал",
        zvuk: "In the evening I didn't watch the film.",
        prompt: "Послушай и запиши, чего человек не смотрел вечером. Одно английское слово.",
        answer: "film",
        accept: ["the film", "a film"],
        why: "In the evening I didn't watch the film.",
      },
      {
        id: "q-sluh-zapisat-nesdelannoe",
        kind: "short",
        outcome: "слышать в записи, чего человек не делал",
        zvuk: "The lift didn't work, and we waited at the gate.",
        prompt: "Послушай и запиши, что не работало. Одно английское слово.",
        answer: "lift",
        accept: ["the lift"],
        why:
          "The lift didn't work. Отрицание стоит при том, о чём речь: не работал " +
          "лифт, а не те, кто ждал.",
      },
    ],
  },
};

export default module;
