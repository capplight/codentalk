import type { Module } from "@/lib/content/types";

/**
 * Модуль 25 курса «Английский · Elementary»: надо и не надо.
 *
 * Программа: docs/programma-english-elementary.md, модуль 25 — «говорить об
 * обязанности и её отсутствии»; грамматика: `have to`, `must`, `mustn't`,
 * `don't have to`. Строка проверена 25 августа 2026, до написания; разбор с
 * цитатами — там же.
 *
 * ИМЕНИ КЛАССА У `MUST` И `HAVE TO` МОДУЛЬ НЕ ДАЁТ, И ЭТО РЕШЕНИЕ.
 *
 * Первая редакция шапки писала, что термин «модальный глагол» уже введён в
 * модуле 13 при `may` и `might`. ЭТО НЕВЕРНО: поиск по видимому тексту
 * всего курса даёт слово «модальный» ровно один раз — в этом самом модуле,
 * в строке, которая на модуль 13 и ссылалась. Нашёл методист.
 *
 * Ссылка снята. Вводить термин здесь незачем: модуль учит двум оборотам и
 * их различию, а имя класса ученику ничего не добавит. Правило курса
 * прямое — либо строка с примером здесь же, либо слова нет.
 *
 * СТРОКА ЭТОГО МОДУЛЯ — САМАЯ ПОДКРЕПЛЁННАЯ ИЗ ЧЕТЫРЁХ ПОСЛЕДНИХ.
 *
 * - **`have to` стоит на ЧЕТЫРЁХ графах A2 сразу:** «FORM: AFFIRMATIVE»
 *   (пример «This weekend I have to go to a party», и там же «my mom **has to**
 *   go»), «FORM: NEGATIVE» (пример «You **don't have to** bring many things
 *   with you»), «FORM: QUESTIONS» («Do you have to wear a skirt?») и «USE:
 *   OBLIGATION». То есть `don't have to` из строки программы подтверждён прямо
 *   примером графы.
 * - **`must` и `mustn't` — тоже A2:** «FORM: AFFIRMATIVE» и «FORM: NEGATIVE»
 *   (пример «… you **mustn't** forget to buy some strawberry juice for us»).
 *   Руководство A2 Key называет его на с. 52 прямо и с нужным модулю
 *   значением: «**mustn't (prohibition)**».
 *
 * ГРАНИЦА ЕСТЬ, И ОНА ТОЛЬКО У `MUST`. Графа A2 «USE: OBLIGATION AND
 * NECESSITY» говорит: «Can use 'must' with **a limited range of pronouns ('I'
 * and 'you')** to talk about obligation and necessity». Широкий круг лиц —
 * B1, там же. А у `have to` такой оговорки нет вовсе, и пример графы A2 сам
 * показывает третье лицо: «my mom has to go».
 *
 * ОТСЮДА ПРАВИЛО, КОТОРОЕ МОДУЛЬ ПРОВОДИТ ЧЕРЕЗ ВСЕ УРОКИ: о себе и о
 * собеседнике годятся оба оборота, а о третьем лице — только `has to`. Это не
 * выдумка курса, а прямое чтение двух граф рядом, и ученику оно даётся как
 * случай, а не как запрет: «о нём говорят так».
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ:
 *
 * - `must` для приглашения («You must come and stay»), совета и догадки («it
 *   must be boring») — все три графы B1;
 * - `must` без подлежащего («Must go now») — B1, «FORM: ELLIPSIS»;
 * - `have to` инфинитивом («I am going to have to buy») — B1;
 * - `need` в значении необходимости — руководство его называет, но графы A2 у
 *   него нет; оставлено следующей ступени.
 *
 * СЛОВАРЬ МОДУЛЯ — ОДИННАДЦАТЬ КАРТОЧЕК, И ЗАПАС СТУПЕНИ ПОЧТИ КОНЧИЛСЯ.
 *
 * Это третий модуль подряд, где норма в тридцать карточек не берётся: 20 в
 * модуле 23, 17 в модуле 24, 9 здесь. Но в этом модуле впервые не берётся и
 * ВТОРАЯ половина нормы — пятнадцать НОВЫХ для ступени слов: новых тут семь,
 * потому что `passport` и `machine` Oxford помечает A1.
 *
 * На теме правил из остатка ступени нашлось одиннадцать слов, которые в
 * модуле работают. Остальные пришлось бы вписывать силой — а это и есть
 * мёртвые карточки, которые ловит проверка и запрещает уточнение владельца
 * от 21 августа.
 *
 * ПЕРВАЯ РЕДАКЦИЯ ОСТАНОВИЛАСЬ НА ДЕВЯТИ И НАПИСАЛА «запас кончился
 * совсем». Методист показал, что это сказано на шаг раньше срока: из
 * остатка брались ещё `dive` («You mustn't dive here» — самая известная
 * табличка бассейна) и `against` («It is against the rules»). Оба взяты.
 *
 * **ЭТО МЕСТО, ГДЕ РЕШЕНИЕ ВЛАДЕЛЬЦА ПЕРЕСТАЛО ИСПОЛНЯТЬСЯ, И ДАЛЬШЕ БУДЕТ
 * ТОЛЬКО ХУЖЕ.** До двадцатого модуля слов хватало. Вопрос записан в
 * программе и в записке: либо поздние модули берут меньше карточек, либо
 * словарь ступени пополняется из другого источника — например, словником
 * B1 Preliminary, размеченным по ступеням.
 *
 * ОТДЕЛЬНО ПРО СЛОВО `RULE`. Модуль о правилах, а карточки у слова «правило»
 * нет: словник A2 Key его не содержит. Oxford помечает `rule` как A1, то есть
 * это слово прошлой ступени, и в текстах оно употребляется без карточки — по
 * тому же основанию, по которому курс не карточит `the` и `and`.
 *
 * ПЯТЬ СЛОВ ВЫШЕ СТУПЕНИ: `set` — B1; `licence`, `pupil`, `id`, `kit` — B2.
 * Все пять стоят в словнике A2 Key. Проверено ПОСТРОЧНО по
 * `oxford-3000` и `oxford-5000`, а не по ответу сверки: она сравнивает основы
 * и в модулях 23 и 24 из-за этого ошиблась дважды в обе стороны.
 *
 * ОСТОРОЖНО: первая редакция шапки писала, что `id` и `kit` не знает ни один
 * список. Это неверно — оба стоят в `oxford-5000` на B2. Сверка их не нашла
 * потому, что смотрит только `oxford-3000`, и её сведения об этом прямо
 * предупреждают: «Это НЕ значит, что их там нет… Проверь глазами». Нашёл
 * методист. Это третья ошибка того же рода за три модуля.
 */
const module: Module = {
  slug: "nado-i-ne-nado",
  title: "Надо и не надо",

  outcomes: [
    "сказать, что делать обязан: I have to wear a uniform",
    "сказать о чужой обязанности: He has to show his passport",
    "сказать, что делать нельзя: You mustn't use the machine",
    "сказать, что делать не обязан: You don't have to bring a kit",
    "находить в правилах, что обязательно, а что нет",
    "слышать в разговоре, что нельзя и что необязательно",
    "проверять правила: сказано, что надо, чего нельзя и что необязательно",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1, 2 И 4. MODALITY, have (got) to, A2, четыре графы: «FORM: " +
        "AFFIRMATIVE» — «Can use the affirmative forms», примеры «This weekend " +
        "I have to go to a party», «We'll meet at four o'clock because my mom " +
        "has to go to the Shopping Centre»; «FORM: NEGATIVE» — «Can use the " +
        "negative forms», пример «You don't have to bring many things with " +
        "you»; «FORM: QUESTIONS» — примеры «What do you have to wear?», «Do you " +
        "have to wear a skirt?»; «USE: OBLIGATION» — «Can use 'have (got) to' " +
        "to talk about obligations». " +
        "ПРИМЕР ГРАФЫ «FORM: AFFIRMATIVE» САМ ПОКАЗЫВАЕТ ТРЕТЬЕ ЛИЦО («my mom " +
        "has to go»), и на этом стоит урок 2. " +
        "УРОКИ 2 И 3. MODALITY, must, A2: «FORM: AFFIRMATIVE» — «Can use the " +
        "affirmative form», примеры «You must wear your sports shoes and you " +
        "must also bring your racket!», «I must be back at 10.15»; «FORM: " +
        "NEGATIVE» — «Can use the negative forms», примеры «… you mustn't " +
        "forget to buy some strawberry juice for us», «You must not wear a " +
        "white …». " +
        "ГРАНИЦА ЛИЦ У `MUST`, И ОНА ОБЪЯВЛЯЕТСЯ: A2, «USE: OBLIGATION AND " +
        "NECESSITY» — «Can use 'must' with a limited range of pronouns ('I' and " +
        "'you') to talk about obligation and necessity». Широкий круг лиц " +
        "стоит на B1 в графе того же имени. У `have to` такой оговорки нет " +
        "вовсе — отсюда правило модуля: о третьем лице говорят через has to. " +
        "ЧЕГО НЕТ: `must` для приглашения («USE: INVITATIONS»), совета («USE: " +
        "SUGGESTIONS») и догадки («USE: DEDUCTIONS AND CONCLUSIONS») — все три " +
        "B1; `must` без подлежащего («FORM: ELLIPSIS») — B1; `have to` " +
        "инфинитивом («FORM: INFINITIVE») — B1",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень Modals: «mustn't " +
        "(prohibition)», «need (necessity)». Руководство называет `mustn't` " +
        "прямо и с тем самым значением, которому учит урок 3, — запрет. " +
        "`need` руководство называет тоже, но графы A2 у него нет, и модуль " +
        "его не берёт: оставлено следующей ступени. " +
        "УРОК 6, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем правила бассейна». с. 56, шкала «Reading for " +
        "orientation», графа A2: «Can find specific, predictable information in " +
        "simple everyday material such as advertisements, prospectuses, menus, " +
        "reference lists and timetables». Правила на стене читают именно так — " +
        "поиском нужной строки, а не подряд. " +
        "ПЕРВАЯ РЕДАКЦИЯ ОПОРЫ НАЗВАЛА С. 54 И УРЕЗАЛА ЦИТАТУ, выбросив из неё " +
        "«predictable», «prospectuses» и «reference lists». Поймала сверка. " +
        "УРОК ПИСЬМА «Пишем правила». с. 66, шкала «Overall written " +
        "production», графа A2: «Can produce a series of simple phrases and " +
        "sentences linked with simple connectors like» — далее в источнике " +
        "перечислены and, but и because. Правила пишутся для читателей вообще, " +
        "а не человеку по имени, и потому здесь производство текста, а не " +
        "переписка; с. 81 разводит эти шкалы прямо. " +
        "ОПОРЫ ЧТЕНИЯ И ПИСЬМА РАЗВЕДЕНЫ НАРОЧНО — так подсказал методист при " +
        "разборе модуля 23, где урок чтения остался подпёрт шкалой письменного " +
        "взаимодействия",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Одиннадцать карточек модуля взяты из словника ступени; новых для " +
        "ступени девять, а `passport` и `machine` Oxford помечает A1. " +
        "Первая редакция взяла девять и объявила запас кончившимся — методист " +
        "показал, что из остатка брались ещё `dive` и `against`. Почему " +
        "одиннадцать, а не " +
        "тридцать — разобрано в шапке модуля и в программе: запас ступени " +
        "выбран совсем, и набирать норму словами, которые в модуле не " +
        "работают, запрещает уточнение владельца от 21 августа. Здесь впервые " +
        "не берётся и вторая половина нормы — пятнадцать новых слов. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `id (n)` — удостоверение; `kit " +
        "(n)` — набор вещей для занятия, британское спортивное значение; " +
        "`licence (n)` — права, разрешение; `set (n)` — набор; `pupil (n)` — " +
        "ученик школы. " +
        "ПЯТЬ СЛОВ ВЫШЕ СТУПЕНИ, И ЭТО ОБЪЯВЛЯЕТСЯ НАРОЧНО: set — B1; " +
        "licence, pupil, id, kit — B2. Проверено ПОСТРОЧНО. " +
        "ПЕРВАЯ РЕДАКЦИЯ ПИСАЛА, ЧТО `id` И `kit` НЕ ЗНАЕТ НИ ОДИН СПИСОК: это " +
        "неверно, оба стоят в `oxford-5000` (`ID n. B2`, `kit n. B2`). Сверка " +
        "их не нашла потому, что смотрит только `oxford-3000`, и её сведения " +
        "об этом прямо предупреждают. Нашёл методист. " +
        "СЛОВА `rule` В СЛОВНИКЕ НЕТ, и карточки у него нет: Oxford помечает " +
        "его A1, то есть это слово прошлой ступени, и в текстах оно " +
        "употребляется без карточки",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ya-obyazan",
      title: "Я обязан: I have to wear a uniform",
      estimatedMinutes: 15,
      outcome: "сказать, что делать обязан: I have to wear a uniform",

      vozvrat: [{ iz: "kak-dolgo", zadanie: "z1-dopisat-for" }],

      blocks: [
        {
          id: "pravila-shkoly",
          kind: "explain",
          text: [
            "В школе есть правила, и их не выбирают.",
            "Форму носить обязательно, телефон на уроке держать нельзя.",
            "Про обязанность по-английски говорят особым оборотом.",
          ],
        },
        {
          id: "hochu-i-obyazan",
          kind: "table",
          caption: "Хочу и обязан",
          zvuchat: [
            "I wear a uniform.",
            "I have to wear a uniform.",
            "We bring a kit.",
            "We have to bring a kit.",
          ],
          head: ["Просто делаю", "Обязан делать"],
          rows: [
            ["I wear a uniform.", "I have to wear a uniform."],
            ["We bring a kit.", "We have to bring a kit."],
          ],
        },
        {
          id: "kak-ustroeno-have-to",
          kind: "explain",
          text: [
            "Слева сказано, что человек делает, и почему — неважно.",
            "Справа стоит have to, и это значит: так велят правила.",
            "После have to глагол стоит в обычной форме: wear, bring.",
            "Оборот годится и о себе, и о собеседнике: I have to, you have to.",
          ],
        },
        {
          id: "ne-i-have-to-wearing",
          kind: "note",
          tone: "mistake",
          text:
            "«I have to wearing a uniform» — так не говорят.\n\nПосле have to " +
            "глагол берёт обычную форму: I have to wear a uniform.",
        },
        {
          id: "razgovor-o-shkolnyh-pravilah",
          kind: "example",
          caption: "Разговор о школьных правилах",
          razgovor: true,
          zvuchat: [
            "I have to wear a uniform every day.",
            "And we have to bring a kit for the pool.",
            "Do you have to show your ID at the door?",
          ],
          text:
            "I have to wear a uniform every day.\nAnd we have to bring a kit for the pool.\nDo you have to show your ID at the door?",
          explain:
            "Во всех трёх строках стоит have to, и после него глагол в обычной " +
            "форме. В вопросе перед have выходит do: Do you have to…?",
        },
        {
          id: "slovar-shkoly",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "kit", translation: "набор вещей для занятия", example: "We have to bring a kit for the pool.", hint: "/kɪt/" },
            { term: "id", translation: "удостоверение", example: "Do you have to show your ID at the door?", hint: "/ˌaɪˈdiː/" },
            { term: "pupil", translation: "школьник", example: "Pupils have to wear a uniform.", hint: "/ˈpjuːpl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-have-to",
          kind: "gap",
          prompt: "Форму носить обязательно. Допиши два слова.",
          before: "I ",
          after: " wear a uniform.",
          answer: "have to",
          hint: "Эти два слова и говорят, что так велят правила.",
          why:
            "I have to wear a uniform. Без них строка сказала бы просто, что " +
            "человек носит форму.",
        },
        {
          id: "z2-vybrat-formu-glagola",
          kind: "choice",
          prompt: "В какой записи глагол после have to поставлен верно?",
          options: [
            { text: "We have to bringing a kit." },
            { text: "We have to bring a kit.", correct: true },
            { text: "We have to brought a kit." },
          ],
          hint: "После have to глагол стоит в обычной форме.",
          why:
            "We have to bring a kit. Форма bringing идёт при is и are, а " +
            "brought — при рассказе о прошлом дне.",
        },
        {
          id: "z3-otmetit-ob-obyazannosti",
          kind: "hottext",
          prompt: "Отметь строки, где сказано об обязанности.",
          parts: [
            { text: "I have to wear a uniform.", selectable: true, correct: true },
            { text: " · " },
            { text: "I wear a uniform every day.", selectable: true },
            { text: " · " },
            { text: "We have to show our ID.", selectable: true, correct: true },
            { text: " · " },
            { text: "We show our ID at the door.", selectable: true },
          ],
          hint: "Ищи два коротких слова перед глаголом.",
          why:
            "Первая и третья. Во второй и четвёртой сказано, что человек " +
            "делает, а обязан он или нет — не сказано.",
        },
        {
          id: "z4-sobrat-o-nabore",
          kind: "order",
          prompt: "Собери строку: мы обязаны приносить набор для бассейна.",
          items: ["a kit for the pool.", "have to", "We", "bring"],
          answer: [2, 1, 3, 0],
          hint: "Два слова об обязанности стоят сразу после того, кто говорит.",
          why:
            "We have to bring a kit for the pool. Глагол идёт следом и стоит в " +
            "обычной форме.",
        },
        {
          id: "z5-sprosit-ob-obyazannosti",
          kind: "short",
          prompt:
            "Спроси по-английски, обязан ли собеседник показывать удостоверение. Начни с Do.",
          answer: "Do you have to show your ID?",
          accept: [
            "Do you have to show your ID",
            "Do you have to show your id?",
            "Do you have to show your id",
          ],
          hint: "В вопросе перед have выходит короткое do.",
          why:
            "Do you have to show your ID? Само have to при этом не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-obyazan",
      title: "Он обязан: He has to show his passport",
      estimatedMinutes: 15,
      outcome: "сказать о чужой обязанности: He has to show his passport",

      blocks: [
        {
          id: "pravila-ne-tolko-dlya-menya",
          kind: "explain",
          text: [
            "Правила касаются не только тебя и собеседника.",
            "Про третьего человека говорят так же, но одно слово меняется.",
            "И есть второе слово об обязанности — must, а у него свои границы.",
          ],
        },
        {
          id: "ryad-have-to-po-licam",
          kind: "table",
          caption: "Как это звучит у каждого лица",
          zvuchat: [
            "I have to show my passport",
            "you have to show your passport",
            "he has to show his passport",
            "she has to show her passport",
            "we have to show our passports",
            "they have to show their passports",
          ],
          head: ["Кто", "Как это звучит целиком"],
          rows: [
            ["I", "I have to show my passport"],
            ["you", "you have to show your passport"],
            ["he", "he has to show his passport"],
            ["she", "she has to show her passport"],
            ["we", "we have to show our passports"],
            ["they", "they have to show their passports"],
          ],
        },
        {
          id: "chto-menyaetsya-v-ryadu-have-to",
          kind: "explain",
          text: [
            "У четырёх лиц стоит have to, и только у he и she — has to.",
            "Сам глагол при этом не меняется: show остаётся show.",
            "Это то же чередование, что у обычного глагола: I show, he shows.",
          ],
        },
        {
          id: "must-i-have-to",
          kind: "table",
          caption: "Что меняется, а что нет",
          zvuchat: [
            "I must show",
            "I have to show",
            "you must show",
            "you have to show",
            "he must show",
            "he has to show",
          ],
          head: ["Кто", "must", "have to"],
          rows: [
            ["I", "I must show", "I have to show"],
            ["you", "you must show", "you have to show"],
            ["he", "he must show", "he has to show"],
          ],
        },
        {
          id: "gde-must-a-gde-has-to",
          kind: "explain",
          text: [
            "Слово must — тоже об обязанности, и оно короче: после него сразу глагол.",
            "Про себя и про собеседника must и have to близки: I must show и I have to show — оба верны.",
            "У must есть удобство: оно не меняется вовсе. I must, you must, he must.",
            "А have to меняется, как обычный глагол: I have to, а he has to.",
            "В наших уроках о третьем человеке чаще берут has to — так привычнее звучит.",
          ],
        },
        {
          id: "ne-he-must",
          kind: "note",
          tone: "mistake",
          text:
            "«He must to show his passport» — так не говорят.\n\nПосле must " +
            "слово to не ставят вовсе: You must show your passport.",
        },
        {
          id: "razgovor-v-aeroportu",
          kind: "example",
          caption: "Разговор в аэропорту",
          razgovor: true,
          zvuchat: [
            "I must show my passport here.",
            "And your brother? He has to show his ID.",
            "The driver has to show a licence too.",
          ],
          text:
            "I must show my passport here.\nAnd your brother? He has to show his ID.\nThe driver has to show a licence too.",
          explain:
            "В первой строке речь о себе, и там стоит must. Во второй и третьей " +
            "речь о других людях, и там has to — о них так и говорят.",
        },
        {
          id: "slovar-aeroporta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "passport", translation: "паспорт", example: "I must show my passport here.", hint: "/ˈpɑːspɔːt/" },
            { term: "licence", translation: "водительские права", example: "The driver has to show a licence too.", hint: "/ˈlaɪsəns/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-has-to",
          kind: "gap",
          prompt: "Речь о водителе, а не о тебе. Допиши два слова.",
          before: "The driver ",
          after: " show a licence.",
          answer: "has to",
          hint: "У третьего лица первое слово меняется.",
          why:
            "The driver has to show a licence. Запись have to идёт к I, you, we " +
            "и they.",
        },
        {
          id: "z2-vybrat-o-tretem-lice",
          kind: "choice",
          prompt: "Как сказать, что твой брат обязан показать удостоверение?",
          options: [
            { text: "He must to show his ID." },
            { text: "He have to show his ID." },
            { text: "He has to show his ID.", correct: true },
          ],
          hint: "Оборот have to меняется, как обычный глагол.",
          why:
            "He has to show his ID. В первой записи лишнее to после must, во " +
            "второй осталось have вместо has.",
        },
        {
          id: "z3-otmetit-vernye-o-obyazannosti",
          kind: "hottext",
          prompt: "Отметь строки, построенные верно.",
          parts: [
            { text: "I must show my passport.", selectable: true, correct: true },
            { text: " · " },
            { text: "She must to show her ID.", selectable: true },
            { text: " · " },
            { text: "She has to show her ID.", selectable: true, correct: true },
            { text: " · " },
            { text: "He have to bring a kit.", selectable: true },
          ],
          hint: "После must слово to не ставят, а у третьего лица стоит has to.",
          why:
            "Первая и третья. Во второй лишнее to, в четвёртой осталось have " +
            "вместо has.",
        },
        {
          id: "z4-sobrat-o-brate",
          kind: "order",
          prompt: "Собери строку: мой брат обязан показать паспорт.",
          items: ["show his passport.", "My brother", "has to"],
          answer: [1, 2, 0],
          hint: "Два слова об обязанности стоят после того, о ком речь.",
          why:
            "My brother has to show his passport. О третьем человеке говорят " +
            "через has to.",
        },
        {
          id: "z5-napisat-o-sebe-must",
          kind: "short",
          prompt:
            "Скажи по-английски, что обязан показать паспорт. Начни с I must.",
          answer: "I must show my passport.",
          accept: ["I must show my passport"],
          hint: "После must глагол идёт сразу, без to.",
          why:
            "I must show my passport. Годится и I have to show my passport: о " +
            "себе оба оборота равны.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nelzya",
      title: "Нельзя: You mustn't use the machine",
      estimatedMinutes: 14,
      outcome: "сказать, что делать нельзя: You mustn't use the machine",

      blocks: [
        {
          id: "chto-zapreshcheno",
          kind: "explain",
          text: [
            "У правил есть и обратная сторона: чего делать нельзя.",
            "На стенах висят таблички, и на них стоит одно короткое слово.",
            "Оно значит запрет, а не совет.",
          ],
        },
        {
          id: "nado-i-nelzya",
          kind: "table",
          caption: "Надо и нельзя",
          zvuchat: [
            "You must show your ID.",
            "You mustn't use the machine.",
            "You must bring a kit.",
            "You mustn't run indoors.",
          ],
          head: ["Надо", "Нельзя"],
          rows: [
            ["You must show your ID.", "You mustn't use the machine."],
            ["You must bring a kit.", "You mustn't run indoors."],
          ],
        },
        {
          id: "kak-ustroeno-mustnt",
          kind: "explain",
          text: [
            "Слово must берёт not и сливается с ним: mustn't.",
            "После него глагол стоит в обычной форме, и to не ставят.",
            "Оно значит: этого делать нельзя, это запрещено.",
            "Так пишут таблички и правила.",
          ],
        },
        {
          id: "ne-mustnt-to",
          kind: "note",
          tone: "mistake",
          text:
            "«You mustn't to use the machine» — так не говорят.\n\nПосле " +
            "mustn't слово to не ставят: You mustn't use the machine.",
        },
        {
          id: "razgovor-v-basseyne",
          kind: "example",
          caption: "Разговор в бассейне",
          razgovor: true,
          zvuchat: [
            "You mustn't run indoors, and you mustn't dive here. It is against the rules.",
            "And the machine at the door?",
            "You mustn't use it. Only the manager has the set of keys.",
          ],
          text:
            "You mustn't run indoors, and you mustn't dive here. It is against the rules.\nAnd the machine at the door?\nYou mustn't use it. Only the manager has the set of keys.",
          explain:
            "В каждой строке с mustn't стоит запрет, и глагол после него в " +
            "обычной форме. Оборот against the rules значит «вопреки " +
            "правилам», а set of keys — набор ключей.",
        },
        {
          id: "slovar-basseyna",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "machine", translation: "аппарат, машина", example: "You mustn't use the machine.", hint: "/məˈʃiːn/" },
            { term: "dive", translation: "нырять", example: "You mustn't dive here.", hint: "/daɪv/" },
            { term: "against", translation: "против; вопреки", example: "It is against the rules.", hint: "/əˈgenst/" },
            { term: "set", translation: "набор", example: "Only the manager has the set of keys.", hint: "/set/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-mustnt",
          kind: "gap",
          prompt: "Пользоваться аппаратом запрещено. Допиши слово.",
          before: "You ",
          after: " use the machine.",
          answer: "mustn't",
          hint: "Слово must берёт not и сливается с ним.",
          why:
            "You mustn't use the machine. Слово don't сюда не встанет: при " +
            "must его не бывает.",
        },
        {
          id: "z2-vybrat-zapret",
          kind: "choice",
          prompt: "Бегать в помещении запрещено. Как это написать на табличке?",
          options: [
            { text: "You mustn't to run indoors." },
            { text: "You don't must run indoors." },
            { text: "You mustn't run indoors.", correct: true },
          ],
          hint: "После mustn't слово to не ставят, и don't при must не бывает.",
          why:
            "You mustn't run indoors. В первой записи лишнее to, во второй " +
            "лишнее don't.",
        },
        {
          id: "z3-otmetit-zaprety",
          kind: "hottext",
          prompt: "Отметь строки, где сказано о запрете.",
          parts: [
            { text: "You mustn't use the machine.", selectable: true, correct: true },
            { text: " · " },
            { text: "You must show your ID.", selectable: true },
            { text: " · " },
            { text: "You mustn't run indoors.", selectable: true, correct: true },
            { text: " · " },
            { text: "You have to bring a kit.", selectable: true },
          ],
          hint: "Ищи слово, в котором must слилось с not.",
          why:
            "Первая и третья. Во второй и четвёртой сказано, что делать надо, а " +
            "не чего нельзя.",
        },
        {
          id: "z4-sobrat-zapret",
          kind: "order",
          prompt: "Собери табличку: брать ключи нельзя.",
          items: ["take the keys.", "You", "mustn't"],
          answer: [1, 2, 0],
          hint: "Глагол идёт сразу после слова о запрете, без to.",
          why:
            "You mustn't take the keys. Слово to после mustn't не ставят.",
        },
        {
          id: "z5-napisat-zapret",
          kind: "short",
          prompt:
            "Напиши по-английски правило: в помещении бегать нельзя. Начни с You.",
          answer: "You mustn't run indoors.",
          accept: ["You mustn't run indoors", "You must not run indoors."],
          hint: "Слово о запрете стоит сразу после того, к кому обращаются.",
          why:
            "You mustn't run indoors. Годится и полная запись You must not run " +
            "indoors: на табличках пишут и так.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mozhno-ne-delat",
      title: "Можно не делать: You don't have to bring a kit",
      estimatedMinutes: 15,
      outcome: "сказать, что делать не обязан: You don't have to bring a kit",

      blocks: [
        {
          id: "raznica-mezhdu-nelzya-i-neobyazatelno",
          kind: "explain",
          text: [
            "Есть третий случай, и по-русски он звучит похоже на запрет.",
            "«Форму приносить не надо» — это не запрет, а свобода.",
            "Хочешь — принеси, не хочешь — не приноси, правила не против.",
            "По-английски запрет и свобода называются разными словами.",
          ],
        },
        {
          id: "nelzya-i-neobyazatelno",
          kind: "table",
          caption: "Нельзя и необязательно",
          zvuchat: [
            "You mustn't bring a kit.",
            "You don't have to bring a kit.",
            "You mustn't use the machine.",
            "You don't have to use the machine.",
          ],
          head: ["Нельзя: запрещено", "Необязательно: как хочешь"],
          rows: [
            ["You mustn't bring a kit.", "You don't have to bring a kit."],
            ["You mustn't use the machine.", "You don't have to use the machine."],
          ],
        },
        {
          id: "chem-oni-otlichayutsya",
          kind: "explain",
          text: [
            "Слева запрет: принесёшь набор — нарушишь правило.",
            "Справа свобода: набор можно принести, а можно не приносить.",
            "По-русски обе строки часто переводят одинаково, и это сбивает.",
            "Спроси себя: этого делать НЕЛЬЗЯ или просто НЕ НУЖНО?",
            "Нельзя — mustn't. Не нужно, а хочешь — делай — don't have to.",
          ],
        },
        {
          id: "ne-dont-must",
          kind: "note",
          tone: "mistake",
          text:
            "«You don't must bring a kit» — так не говорят.\n\nСлово don't " +
            "работает при have to, а при must не бывает: You don't have to " +
            "bring a kit.",
        },
        {
          id: "razgovor-o-poezdke",
          kind: "example",
          caption: "Разговор о поездке",
          razgovor: true,
          zvuchat: [
            "You don't have to bring a kit. We give one to every pupil.",
            "And the ID?",
            "You must show it at the door. That is a rule.",
            "So the kit is free, but the ID isn't.",
          ],
          text:
            "You don't have to bring a kit. We give one to every pupil.\nAnd the ID?\nYou must show it at the door. That is a rule.\nSo the kit is free, but the ID isn't.",
          explain:
            "Первая строка о свободе: набор дадут, приносить не нужно. Третья о " +
            "правиле: удостоверение показать обязательно.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dont-have-to",
          kind: "gap",
          prompt: "Набор приносить не нужно, но и не запрещено. Допиши три слова.",
          before: "You ",
          after: " bring a kit.",
          answer: "don't have to",
          hint: "Эти слова говорят о свободе, а не о запрете.",
          why:
            "You don't have to bring a kit. Слово mustn't сказало бы, что " +
            "приносить нельзя.",
        },
        {
          id: "z2-vybrat-svobodu-ili-zapret",
          kind: "choice",
          prompt:
            "Удостоверение можно не показывать: за это ничего не будет. Как сказать?",
          options: [
            { text: "You mustn't show your ID." },
            { text: "You don't have to show your ID.", correct: true },
            { text: "You don't must show your ID." },
          ],
          hint: "Спроси себя: это нельзя или просто не нужно?",
          why:
            "You don't have to show your ID. Запись с mustn't сказала бы, что " +
            "показывать запрещено, а третья построена неверно.",
        },
        {
          id: "z3-otmetit-svobodu",
          kind: "hottext",
          prompt: "Отметь строки, где сказано о свободе, а не о запрете.",
          parts: [
            { text: "You don't have to bring a kit.", selectable: true, correct: true },
            { text: " · " },
            { text: "You mustn't use the machine.", selectable: true },
            { text: " · " },
            { text: "You don't have to come early.", selectable: true, correct: true },
            { text: " · " },
            { text: "You mustn't run indoors.", selectable: true },
          ],
          hint: "Спроси у каждой строки: это нельзя или просто не нужно?",
          why:
            "Первая и третья. Во второй и четвёртой стоит mustn't, а это " +
            "запрет.",
        },
        {
          id: "z4-sobrat-o-svobode",
          kind: "order",
          prompt: "Собери строку: приходить рано необязательно.",
          items: ["come early.", "don't have to", "You"],
          answer: [2, 1, 0],
          hint: "Три слова о свободе стоят после того, к кому обращаются.",
          why:
            "You don't have to come early. Глагол после них в обычной форме.",
        },
        {
          id: "z5-otlichit-po-smyslu",
          kind: "short",
          prompt:
            "Бассейн на улице сегодня закрыт, и ходить туда нельзя. Напиши это правило по-английски, начав с You.",
          answer: "You mustn't go to the outdoor pool.",
          accept: [
            "You mustn't go to the outdoor pool",
            "You must not go to the outdoor pool.",
            "You must not go to the outdoor pool",
          ],
          hint: "Это нельзя, а не «можно и не делать».",
          why:
            "You mustn't go to the outdoor pool. Запись don't have to сказала " +
            "бы, что ходить просто необязательно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pravila-basseyna",
      title: "Читаем правила бассейна",
      estimatedMinutes: 13,
      outcome: "находить в правилах, что обязательно, а что нет",

      blocks: [
        {
          id: "zachem-chitat-pravila",
          kind: "explain",
          text: [
            "Правила висят на стене, и читают их не подряд, а по нужной строке.",
            "Ищут три вещи: что обязательно, чего нельзя и что необязательно.",
            "Ниже правила бассейна, и вопросы будут о них.",
          ],
        },
        {
          id: "pravila-basseyna",
          kind: "text",
          title: "POOL RULES",
          genre: "notice",
          body: [
            "Every pupil must show an ID at the door.",
            "You have to wear a swimming kit in the water.",
            "You mustn't run indoors: the floor is wet.",
            "You mustn't use the machine near the door.",
            "You don't have to bring a towel: we give one to everybody.",
            "The outdoor pool is closed, so please use the indoor pool.",
          ],
          glossary: [
            { term: "swimming kit", translation: "купальные принадлежности" },
            { term: "wet", translation: "мокрый" },
            { term: "floor", translation: "пол" },
          ],
        },
        {
          id: "kak-iskat-v-pravilah",
          kind: "note",
          tone: "info",
          text:
            "Обязательное ищут по словам must и have to.\n\nЗапрет — по " +
            "mustn't, а свободу — по don't have to.",
        },

        // ---- задания ----
        {
          id: "z1-chto-nado-pokazat",
          about: "pravila-basseyna",
          kind: "short",
          prompt: "Что каждый ученик обязан показать у двери? Ответь одним словом по-английски.",
          answer: "ID",
          accept: ["id", "an ID", "an id"],
          hint: "Про это сказано в самой первой строке.",
          why: "Every pupil must show an ID at the door.",
        },
        {
          id: "z2-chto-nelzya",
          about: "pravila-basseyna",
          kind: "choice",
          prompt: "Что в бассейне запрещено?",
          options: [
            { text: "Приносить полотенце." },
            { text: "Бегать в помещении и пользоваться аппаратом.", correct: true },
            { text: "Пользоваться внутренним бассейном." },
          ],
          hint: "Ищи строки со словом mustn't.",
          why:
            "Бегать и пользоваться аппаратом: You mustn't run indoors, You mustn't " +
            "use the machine.",
        },
        {
          id: "z3-chego-mozhno-ne-delat",
          about: "pravila-basseyna",
          kind: "short",
          prompt: "Что приносить необязательно? Ответь одним словом по-английски.",
          answer: "towel",
          accept: ["Towel", "a towel"],
          hint: "Ищи строку со словами don't have to.",
          why: "You don't have to bring a towel: we give one to everybody.",
        },
        {
          id: "z4-otmetit-verno-o-pravilah",
          about: "pravila-basseyna",
          kind: "hottext",
          prompt: "Отметь то, что верно по правилам.",
          parts: [
            { text: "купальные принадлежности обязательны", selectable: true, correct: true },
            { text: " · " },
            { text: "полотенце выдают всем", selectable: true, correct: true },
            { text: " · " },
            { text: "бассейн на улице сегодня работает", selectable: true },
            { text: " · " },
            { text: "удостоверение показывать необязательно", selectable: true },
          ],
          hint: "Про бассейн на улице сказано в самой последней строке.",
          why:
            "Верно первое и второе. Бассейн на улице закрыт, а удостоверение " +
            "показать обязан каждый.",
        },
        {
          id: "z5-otlichit-zapret-ot-svobody",
          about: "pravila-basseyna",
          kind: "choice",
          prompt:
            "Строки про полотенце и про аппарат построены по-разному. Чем они различаются?",
          options: [
            { text: "Про полотенце — свобода, про аппарат — запрет.", correct: true },
            { text: "Про полотенце — запрет, про аппарат — свобода." },
            { text: "Обе строки о запрете." },
          ],
          hint: "Сравни don't have to и mustn't.",
          why:
            "Про полотенце свобода: его дадут. Про аппарат запрет: " +
            "пользоваться нельзя.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chto-nelzya",
      title: "Слушаем, что нельзя",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что нельзя и что необязательно",

      blocks: [
        {
          id: "zachem-slushat-pravila",
          kind: "explain",
          text: [
            "Ученик спрашивает у работника бассейна, что можно и чего нельзя.",
            "Слушать надо, что запрещено, а что просто необязательно.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-pravilah",
          kind: "audio",
          caption: "Разговор о правилах",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Do I have to bring a towel? — No, you don't have to. We give one " +
            "to everybody. — And the machine at the door? — You mustn't use " +
            "it. Only the manager has the keys.",
        },
        {
          id: "chto-slushat-o-pravilah",
          kind: "note",
          tone: "info",
          text:
            "Слушай, где звучит mustn't, а где don't have to.\n\nПервое — " +
            "запрет, второе — свобода.",
        },

        // ---- задания ----
        {
          id: "z1-nado-li-polotence",
          about: "zapis-o-pravilah",
          kind: "choice",
          prompt: "Послушай. Надо ли приносить полотенце?",
          options: [
            { text: "Приносить запрещено." },
            { text: "Необязательно: его дадут.", correct: true },
            { text: "Обязательно: своё." },
          ],
          hint: "Ответ звучит во второй реплике.",
          why:
            "Необязательно: No, you don't have to. We give one to everybody.",
        },
        {
          id: "z2-chto-nelzya-v-zapisi",
          about: "zapis-o-pravilah",
          kind: "short",
          prompt: "Послушай. Чем нельзя пользоваться? Ответь одним словом по-английски.",
          answer: "machine",
          accept: ["Machine", "the machine"],
          hint: "Об этом говорят в третьей и четвёртой репликах.",
          why: "And the machine at the door? — You mustn't use it.",
        },
        {
          id: "z3-u-kogo-klyuchi",
          about: "zapis-o-pravilah",
          kind: "short",
          prompt: "Послушай. У кого ключи? Ответь одним словом по-английски.",
          answer: "manager",
          accept: ["Manager", "the manager"],
          hint: "Об этом сказано в самой последней реплике.",
          why: "Only the manager has the keys.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-pravilah",
          about: "zapis-o-pravilah",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "полотенце выдают всем", selectable: true, correct: true },
            { text: " · " },
            { text: "аппаратом пользоваться нельзя", selectable: true, correct: true },
            { text: " · " },
            { text: "полотенце приносить запрещено", selectable: true },
            { text: " · " },
            { text: "ключи лежат у двери", selectable: true },
          ],
          hint: "Про полотенце говорят в первых двух репликах.",
          why:
            "Прозвучали первое и второе. Про полотенце сказана свобода, а не " +
            "запрет; ключи у заведующего.",
        },
        {
          id: "z5-skolko-zapretov-v-zapisi",
          about: "zapis-o-pravilah",
          kind: "short",
          prompt: "Послушай. Сколько запретов прозвучало в записи? Ответь числом.",
          answer: "1",
          accept: ["one", "один"],
          hint: "Считай только строки со словом mustn't.",
          why:
            "Один: You mustn't use it. Про полотенце сказано you don't have " +
            "to, а это не запрет.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-pravila",
      title: "Пишем правила",
      estimatedMinutes: 15,
      outcome: "проверять правила: сказано, что надо, чего нельзя и что необязательно",

      blocks: [
        {
          id: "zachem-proveryat-pravila",
          kind: "explain",
          text: [
            "Ученик написал правила клуба: «Be good. Don't be bad.»",
            "Такие правила не работают: непонятно, что именно делать.",
            "В правилах пропускают не сами дела, а то, обязательны они или нет.",
            "Проверить свои правила можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-pravilah",
          kind: "table",
          caption: "Что должно быть в правилах",
          zvuchat: [
            "Every pupil must bring an ID.",
            "You have to wear a kit.",
            "You mustn't use the machine.",
            "You don't have to bring a towel.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["кому правила и что обязательно", "Every pupil must bring an ID."],
            ["что ещё обязательно", "You have to wear a kit."],
            ["чего нельзя", "You mustn't use the machine."],
            ["что необязательно", "You don't have to bring a towel."],
          ],
        },
        {
          id: "chem-derzhatsya-pravila",
          kind: "explain",
          text: [
            "Первая строка называет, к кому правила, и одно обязательное дело.",
            "Вторая добавляет ещё одно обязательное — через have to.",
            "Третья называет запрет, и там mustn't.",
            "Четвёртая говорит о свободе, и там don't have to.",
            "Строки связывают словом because, когда одна объясняет другую.",
          ],
        },
        {
          id: "obrazec-pravil",
          kind: "example",
          caption: "Правила клуба фотографии",
          zvuchat: [
            "Every pupil must bring a camera to the club.",
            "You have to come at four, because we start together.",
            "You mustn't use the machine in the dark room.",
            "You don't have to buy a set of keys: the club has one.",
          ],
          text:
            "Every pupil must bring a camera to the club.\nYou have to come at four, because we start together.\nYou mustn't use the machine in the dark room.\nYou don't have to buy a set of keys: the club has one.",
          explain:
            "Первые две строки об обязательном, третья о запрете, четвёртая о " +
            "свободе. Слово because связывает время с причиной.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-pravilam",
          kind: "choice",
          prompt:
            "Правила целиком: Be good. Don't be bad. Чего в них не хватает?",
          options: [
            { text: "Не сказано, что именно надо и чего нельзя.", correct: true },
            { text: "Имени того, кто их написал." },
            { text: "Названия клуба." },
          ],
          hint: "Представь новичка: поймёт ли он, что делать?",
          why:
            "Не сказано, что именно надо и чего нельзя. Слова есть, а дел в " +
            "них нет ни одного.",
        },
        {
          id: "z2-dopisat-zapret-v-pravila",
          kind: "gap",
          prompt: "Пользоваться аппаратом в тёмной комнате запрещено. Допиши слово.",
          before: "You ",
          after: " use the machine in the dark room.",
          answer: "mustn't",
          hint: "Это запрет, а не свобода.",
          why:
            "You mustn't use the machine in the dark room. Запись don't have to " +
            "сказала бы, что пользоваться просто необязательно.",
        },
        {
          id: "z3-otmetit-stroki-o-svobode",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят о свободе, а не об обязанности.",
          parts: [
            { text: "You don't have to buy a set of keys.", selectable: true, correct: true },
            { text: " · " },
            { text: "You have to come at four.", selectable: true },
            { text: " · " },
            { text: "You don't have to bring a towel.", selectable: true, correct: true },
            { text: " · " },
            { text: "Every pupil must bring a camera.", selectable: true },
          ],
          hint: "Ищи три слова, которые говорят «как хочешь».",
          why:
            "Первая и третья. Во второй и четвёртой сказано об обязанности: " +
            "have to и must.",
        },
        {
          id: "z4-svyazat-stroki-pravil",
          kind: "short",
          prompt:
            "Соедини две строки одним словом: You have to come at four. We start together. Запиши получившуюся строку целиком.",
          answer: "You have to come at four, because we start together.",
          accept: [
            "You have to come at four, because we start together",
            "You have to come at four because we start together.",
            "You have to come at four because we start together",
          ],
          hint: "Вторая строка называет причину первой.",
          why:
            "You have to come at four, because we start together. Слово because " +
            "и связывает причину со следствием.",
        },
        {
          id: "z5-napisat-pravila",
          kind: "essay",
          prompt:
            "Напиши правила своего клуба, четырьмя строками. Назови, к кому они, два обязательных дела, один запрет и одну свободу.",
          minWords: 14,
          sample:
            "Every pupil must bring a camera to the club.\nYou have to come at four, because we start together.\nYou mustn't use the machine in the dark room.\nYou don't have to buy a set of keys: the club has one.",
          checklist: [
            "сказано, к кому правила",
            "есть строка с must или have to",
            "есть строка с mustn't",
            "есть строка с don't have to",
          ],
          hint:
            "Бери обороты, которые знаешь: Every pupil must, You have to, You mustn't, You don't have to.",
          why:
            "Правила работают, когда новичок сразу видит, что обязательно, чего " +
            "нельзя и что на его выбор.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, отличить две строки по последствиям, переписать строку.

      // ---- итог 1 ----
      {
        id: "q-ispravit-have-to-ing",
        kind: "short",
        outcome: "сказать, что делать обязан: I have to wear a uniform",
        prompt:
          "Ученик написал: I have to wearing a uniform. Запиши строку без ошибки.",
        answer: "I have to wear a uniform.",
        accept: ["I have to wear a uniform"],
        hint: "Проверь форму глагола после двух коротких слов.",
        why:
          "I have to wear a uniform. Форма wearing идёт при is и are.",
      },
      {
        id: "q-chto-dobavlyaet-have-to",
        kind: "choice",
        outcome: "сказать, что делать обязан: I have to wear a uniform",
        prompt:
          "Строки I wear a uniform и I have to wear a uniform говорят о разном. Чем?",
        options: [
          { text: "Во второй форма новая." },
          { text: "Во второй сказано, что так велят правила.", correct: true },
          { text: "Во второй речь о завтрашнем дне." },
        ],
        hint: "Спроси у каждой строки: по своей воле или нет?",
        why:
          "Во второй сказано, что так велят правила. Первая говорит только о " +
          "том, что человек делает.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-he-must-to",
        kind: "short",
        outcome: "сказать о чужой обязанности: He has to show his passport",
        prompt:
          "Ученик написал: My brother must to show his ID. Запиши строку без ошибки.",
        answer: "My brother must show his ID.",
        accept: [
          "My brother must show his ID",
          "My brother must show his id.",
          "My brother must show his id",
          "My brother has to show his ID.",
          "My brother has to show his ID",
          "My brother has to show his id.",
        ],
        hint: "Одно слово в строке лишнее.",
        why:
          "My brother must show his ID. После must слово to не ставят вовсе. " +
          "Годится и My brother has to show his ID — оба оборота об " +
          "обязанности.",
      },
      {
        id: "q-napisat-o-sestre",
        kind: "short",
        outcome: "сказать о чужой обязанности: He has to show his passport",
        prompt:
          "Скажи по-английски, что твоя сестра обязана носить форму. Начни с My sister.",
        answer: "My sister has to wear a uniform.",
        accept: ["My sister has to wear a uniform"],
        hint: "О третьем человеке первое слово оборота меняется.",
        why:
          "My sister has to wear a uniform. Форма has тут та же, что в обычном " +
          "настоящем: she wears, she has to wear.",
      },

      // ---- итог 3 ----
      {
        id: "q-ispravit-mustnt-to",
        kind: "short",
        outcome: "сказать, что делать нельзя: You mustn't use the machine",
        prompt:
          "Ученик написал: You mustn't to run indoors. Запиши строку без ошибки.",
        answer: "You mustn't run indoors.",
        accept: ["You mustn't run indoors", "You must not run indoors."],
        hint: "Одно слово в строке лишнее.",
        why:
          "You mustn't run indoors. После mustn't слово to не ставят.",
      },
      {
        id: "q-chto-znachit-mustnt",
        kind: "choice",
        outcome: "сказать, что делать нельзя: You mustn't use the machine",
        prompt: "Табличка: You mustn't use the machine. Что будет, если тронуть?",
        options: [
          { text: "Это нарушение правила.", correct: true },
          { text: "Ничего: это просто совет." },
          { text: "Ничего: это про других людей." },
        ],
        hint: "Слово mustn't пишут на табличках, а не в просьбах.",
        why:
          "Это нарушение правила. Слово mustn't и значит запрет.",
      },

      // ---- итог 4 ----
      {
        id: "q-otlichit-zapret-ot-svobody-v-rabote",
        kind: "choice",
        outcome: "сказать, что делать не обязан: You don't have to bring a kit",
        prompt:
          "Две строки: You mustn't bring a towel и You don't have to bring a towel. Чем они различаются?",
        options: [
          { text: "Первая о сегодняшнем дне, вторая о завтрашнем." },
          { text: "Первая строже второй по наказанию." },
          { text: "В первой полотенце запрещено, во второй просто не нужно.", correct: true },
        ],
        hint: "Спроси у каждой строки: полотенце нельзя или просто не нужно?",
        why:
          "В первой запрещено, во второй просто не нужно. По-русски обе строки " +
          "часто переводят одинаково, и это сбивает.",
      },
      {
        id: "q-perepisat-zapret-v-svobodu",
        kind: "short",
        outcome: "сказать, что делать не обязан: You don't have to bring a kit",
        prompt:
          "Строку You mustn't come early перепиши так, чтобы она говорила: приходить рано просто необязательно.",
        answer: "You don't have to come early.",
        accept: ["You don't have to come early"],
        hint: "Слово о запрете уходит, а на его место встают три других.",
        why:
          "You don't have to come early. Слово don't работает при have to, а " +
          "при must его не бывает.",
      },

      // ---- итог 5 ----
      {
        id: "q-najti-obyazatelnoe-v-pravilah",
        kind: "short",
        outcome: "находить в правилах, что обязательно, а что нет",
        prompt:
          "В правилах строка: Every pupil must show an ID at the door. Кто обязан это делать? Ответь одним словом по-английски.",
        answer: "pupil",
        accept: ["Pupil", "every pupil", "pupils"],
        hint: "Ответ стоит в самом начале строки.",
        why:
          "Pupil. Слово every перед ним говорит, что правило касается каждого " +
          "без исключения.",
      },
      {
        id: "q-najti-svobodu-v-pravilah",
        kind: "choice",
        outcome: "находить в правилах, что обязательно, а что нет",
        prompt:
          "В правилах строка: You don't have to bring a towel: we give one to everybody. Что из этого следует?",
        options: [
          { text: "Полотенце приносить запрещено." },
          { text: "Полотенце можно принести, а можно не приносить.", correct: true },
          { text: "Полотенце надо купить на месте." },
        ],
        hint: "Вторая половина строки объясняет первую.",
        why:
          "Можно принести, а можно нет. Полотенце дадут, но своё никто не " +
          "запрещает.",
      },

      // ---- итог 6 ----
      {
        id: "q-uslyshat-chto-nelzya",
        kind: "short",
        outcome: "слышать в разговоре, что нельзя и что необязательно",
        zvuk: "You mustn't run indoors, but you don't have to wear a kit in the hall.",
        prompt: "Послушай. Чего делать нельзя? Ответь одним словом по-английски.",
        answer: "run",
        accept: ["Run"],
        hint: "Ответ стоит сразу после слова о запрете.",
        why: "You mustn't run indoors.",
      },
      {
        id: "q-uslyshat-chto-neobyazatelno",
        kind: "choice",
        outcome: "слышать в разговоре, что нельзя и что необязательно",
        zvuk: "Do I have to show my ID? — No, you don't have to. But you must show your ticket.",
        prompt: "Послушай. Что показывать обязательно?",
        options: [
          { text: "Удостоверение." },
          { text: "Билет.", correct: true },
          { text: "И то, и другое." },
        ],
        hint: "Слово must стоит во второй половине ответа.",
        why:
          "Билет: But you must show your ticket. Про удостоверение сказано " +
          "you don't have to.",
      },

      // ---- итог 7 ----
      {
        id: "q-chego-ne-hvataet-chuzhim-pravilam",
        kind: "choice",
        outcome: "проверять правила: сказано, что надо, чего нельзя и что необязательно",
        prompt:
          "Правила: Every pupil must bring a camera. You have to come at four. You mustn't use the machine. Какая из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что говорит о свободе.", correct: true },
          { text: "Той, что называет запрет." },
          { text: "Той, что называет обязательное." },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что говорит о свободе. Обязательное названо дважды, запрет " +
          "один — а что на выбор новичка, не сказано.",
      },
      {
        id: "q-dopisat-stroku-o-svobode",
        kind: "short",
        outcome: "проверять правила: сказано, что надо, чего нельзя и что необязательно",
        prompt:
          "К правилам допиши строку о свободе: набор ключей покупать необязательно. Начни с You.",
        answer: "You don't have to buy a set of keys.",
        accept: ["You don't have to buy a set of keys"],
        hint: "Три слова о свободе стоят перед глаголом.",
        why:
          "You don't have to buy a set of keys. Слово mustn't сказало бы, " +
          "что покупать запрещено.",
      },
      {
        id: "q-dopisat-zapret-v-pravila-raboty",
        kind: "short",
        outcome: "проверять правила: сказано, что надо, чего нельзя и что необязательно",
        prompt:
          "К правилам допиши строку о запрете: пользоваться аппаратом нельзя. Начни с You.",
        answer: "You mustn't use the machine.",
        accept: [
          "You mustn't use the machine",
          "You must not use the machine.",
          "You must not use the machine",
        ],
        hint: "За такой строкой стоит табличка, а не совет.",
        why:
          "You mustn't use the machine. Запись don't have to сказала бы, что " +
          "пользоваться им просто необязательно.",
      },
    ],
  },
};

export default module;
