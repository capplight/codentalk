import type { Module } from "@/lib/content/types";

/**
 * Модуль 26 курса «Английский · Elementary»: стоит и не стоит.
 *
 * Программа: docs/programma-english-elementary.md, модуль 26 — «советовать»;
 * грамматика: `should`, `shouldn't`, `Why don't we…?`. Строка проверена 25
 * августа 2026, до написания; разбор с цитатами — там же.
 *
 * СТРОКА ДЕРЖИТСЯ ЛУЧШЕ ВСЕХ ПРЕДЫДУЩИХ: ГРАНИЦ У НЕЁ НЕТ ВОВСЕ.
 *
 * - **`should` стоит на ПЯТИ графах A2:** «FORM: AFFIRMATIVE» (пример «You
 *   should come at 6 o'clock»), «FORM: NEGATIVE» («You shouldn't miss it»),
 *   «FORM: QUESTIONS» («Should I wear special clothes?»), «USE: ADVICE» и «USE:
 *   SUGGESTIONS» («I think we should meet at 2 pm»).
 * - **Ограничения по лицам, как у `must` в модуле 25, здесь НЕТ ни в одной
 *   графе.** Это важно помнить: в модуле 25 я вычитал у графы `must` запрет,
 *   которого там не было, и модуль сам его нарушал девять раз. Здесь границы
 *   нет — значит и выдумывать её не из чего.
 * - **`Why don't we…?` — на ТРЁХ графах A2:** CLAUSES interrogatives, «FORM:
 *   NEGATIVE 'WH-' INTERROGATIVE»; PRESENT simple, «USE: SUGGESTIONS» — «Can
 *   use the present simple with 'why don't you…?', 'Why don't we…?' … to make
 *   suggestions»; QUESTIONS wh-, «FORM/USE: NEGATIVE QUESTONS, SUGGESTIONS».
 *
 * ОСТОРОЖНО С ПОСЛЕДНЕЙ ГРАФОЙ: `QUESTONS` — ОПЕЧАТКА САМОГО ИСТОЧНИКА, буква
 * `I` пропущена. Цитата повторяет её как есть, иначе следующий проверяющий
 * «исправит» верное. Тот же случай, что двойное `with` в графе вопросов
 * Present Perfect (модуль 22).
 *
 * ИМЕНИ КЛАССА У `SHOULD` МОДУЛЬ НЕ ДАЁТ. В модуле 25 я написал, что термин
 * «модальный глагол» уже введён в курсе, — и ошибся: его нет в видимом тексте
 * нигде. Вводить его здесь незачем: модуль учит совету, а имя класса ученику
 * ничего не добавит.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ВСЁ ЭТО B1:
 *
 * - `should have` о прошлом («I knew I should have written before»);
 * - вопрос-переспрос («we should rent some movies, shouldn't we?»);
 * - `should` о вероятном («It should be a good day»);
 * - `should` о желаемом положении дел («British people should eat more
 *   vegetables»).
 *
 * СЛОВАРЬ МОДУЛЯ — ДВЕНАДЦАТЬ КАРТОЧЕК, ИЗ НИХ НОВЫХ ДЛЯ СТУПЕНИ ПЯТЬ:
 * `toothache`, `blood`, `brain`, `windsurfing`, `snowboarding`.
 *
 * Это четвёртый модуль подряд с недобором до тридцати, и вопрос владельцу
 * открыт — разбор в программе, под таблицей четвёртой части.
 *
 * ПЕРВАЯ РЕДАКЦИЯ ШАПКИ НАСЧИТАЛА ВОСЕМЬ НОВЫХ. Сверка считает иначе, и она
 * права: `walking`, `riding` и `feelings` она сводит к `walk`, `ride` и
 * `feel`, а их Oxford помечает A1. Слово с окончанием `-ing` или `-s` не
 * становится новым оттого, что у него своя строка в словнике. Это уже
 * четвёртая ошибка на пометах за четыре модуля, и все четыре — разной
 * породы.
 *
 * СЕМЬ СЛОВ ИДУТ С ПРОШЛОЙ СТУПЕНИ: `advice`, `health`, `exercise`,
 * `tourist` — Oxford помечает их A1 прямо; `walking`, `riding`, `feelings` —
 * через основы `walk`, `ride`, `feel`. Карточки у них всё же есть: слова
 * опорные и стоят в каждом уроке.
 *
 * ДВА СЛОВА A2: `blood`, `brain`. ШЕСТИ OXFORD НЕ ЗНАЕТ ВОВСЕ: `toothache`,
 * `walking`, `riding`, `snowboarding`, `windsurfing`, `feelings` — все шесть
 * стоят в словнике A2 Key.
 *
 * ПРОВЕРЕНО ПОСТРОЧНО по `oxford-3000` И `oxford-5000`. За три модуля подряд я
 * ошибся на пометах трижды и по-разному: поверил сверке там, где она сравнила
 * основы (`fried`); опроверг её там, где она была права (`plus1` с цифрой
 * омонима); и не заглянул в `oxford-5000` вовсе (`id`, `kit`). Здесь смотрел
 * оба списка и по строкам.
 */
const module: Module = {
  slug: "stoit-i-ne-stoit",
  title: "Стоит и не стоит",

  outcomes: [
    "советовать сделать: You should try walking",
    "советовать не делать: You shouldn't eat that",
    "спросить совета: Should I take a map?",
    "предложить вместе: Why don't we go riding?",
    "находить в советах приезжему, что стоит делать, а что нет",
    "слышать в разговоре, что советуют",
    "проверять советы: сказано, что стоит, чего не стоит и что предложено вместе",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "УРОКИ 1–3. MODALITY, should, ПЯТЬ ГРАФ A2: «FORM: AFFIRMATIVE» — «Can " +
        "use the affirmative form», примеры «You should come at 6 o'clock», " +
        "«Someday we should go there together»; «FORM: NEGATIVE» — «Can use the " +
        "negative form», примеры «You shouldn't miss it», «It is a new flat, so " +
        "there shouldn't be any problems»; «FORM: QUESTIONS» — «Can use the " +
        "question form», примеры «Should I wear special clothes?», «It's going " +
        "to be in São Paulo. Should we go by plane?»; «USE: ADVICE» — «Can use " +
        "'should' to give advice», пример " +
        "«My advice, you should buy this»; «USE: SUGGESTIONS» — «Can use " +
        "'should' to make suggestions», пример «I think we should meet at 2 pm». " +
        "ОГРАНИЧЕНИЯ ПО ЛИЦАМ НЕТ НИ В ОДНОЙ ИЗ ПЯТИ ГРАФ. Это отличает `should` " +
        "от `must`, у которого графа A2 «USE: OBLIGATION AND NECESSITY» прямо " +
        "называет круг «'I' and 'you'». " +
        "УРОК 4. CLAUSES interrogatives, A2, «FORM: NEGATIVE 'WH-' " +
        "INTERROGATIVE» — «Can form negative 'wh-' interrogative clauses», " +
        "пример «Why don't we watch a film?». PRESENT, present simple, A2, " +
        "«USE: SUGGESTIONS» — «Can use the present simple with 'why don't " +
        "you…?', 'Why don't we…?' and 'if you want or if you like' to make " +
        "suggestions», примеры «Why don't you wear your black suit?», «Why " +
        "don't we go to a disco…». QUESTIONS wh-, A2, «FORM/USE: NEGATIVE " +
        "QUESTONS, SUGGESTIONS» — «Can use negative question 'why don't' + " +
        "pronoun + verb, to make a suggestion or invitation». " +
        "СЛОВО `QUESTONS` В ИМЕНИ ПОСЛЕДНЕЙ ГРАФЫ — ОПЕЧАТКА ИСТОЧНИКА, буква " +
        "`I` пропущена; цитата повторяет её как есть. " +
        "ЧЕГО НЕТ, И ВСЁ ЭТО B1: `should have` о прошлом («FORM: PAST " +
        "AFFIRMATIVE», «FORM: PAST NEGATIVE»); вопрос-переспрос («FORM/USE: " +
        "QUESTION TAGS»); `should` о вероятном («USE: LIKELIHOOD»); `should` о " +
        "желаемом положении дел («USE: IDEAL OR DESIRED SITUATIONS»)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, перечень Modals: `should (advice)` " +
        "стоит там с тем самым значением, которому учит модуль. " +
        "УРОК 6, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем советы приезжему». с. 55, шкала «Reading " +
        "correspondence», графа A2: «Can understand short, simple personal " +
        "letters». Советы написаны письмом знакомому, и потому шкала здесь " +
        "именно эта. " +
        "УРОК ПИСЬМА «Пишем советы». с. 66, шкала «Overall written production», " +
        "графа A2: «Can produce a series of simple phrases and sentences linked " +
        "with simple connectors like» — далее в источнике перечислены and, but " +
        "и because. " +
        "ОПОРЫ ЧТЕНИЯ И ПИСЬМА РАЗВЕДЕНЫ НАРОЧНО — так подсказал методист при " +
        "разборе модуля 23",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Двенадцать карточек модуля взяты из словника ступени; новых для " +
        "ступени пять: toothache, blood, brain, windsurfing, snowboarding. " +
        "Первая редакция насчитала восемь — сверка сводит `walking`, `riding` и " +
        "`feelings` к `walk`, `ride` и `feel`, которые Oxford помечает A1, и " +
        "она права. Почему двенадцать, а не тридцать — разобрано в программе: " +
        "запас ступени подошёл к концу. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `walking (n)`, `riding (n)`, " +
        "`snowboarding (n)`, `windsurfing (n)` — названия занятий, и уроки " +
        "берут именно их; `feelings (n pl)` — только множественное число; " +
        "`advice (n)` — неисчисляемое, поэтому в модуле стоит `some advice`, а " +
        "не `an advice`. " +
        "ЧЕТЫРЕ СЛОВА OXFORD 3000 ПОМЕЧАЕТ A1: advice, health, exercise, " +
        "tourist — они с прошлой ступени, но карточки у них есть: слова " +
        "опорные и стоят в каждом уроке. ДВА СЛОВА A2: blood, brain. ШЕСТИ " +
        "OXFORD НЕ ЗНАЕТ ВОВСЕ: toothache, walking, riding, snowboarding, " +
        "windsurfing, feelings. " +
        "ПРОВЕРЕНО ПОСТРОЧНО ПО ОБОИМ СПИСКАМ — `oxford-3000` и `oxford-5000`. " +
        "За три модуля подряд я ошибся на пометах трижды и по-разному, и один " +
        "из трёх раз — потому что не заглянул во второй список",
      license: "внутреннее использование, публично не называем",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "stoit-sdelat",
      title: "Стоит сделать: You should try walking",
      estimatedMinutes: 15,
      outcome: "советовать сделать: You should try walking",

      vozvrat: [{ iz: "nado-i-ne-nado", zadanie: "z1-dopisat-have-to" }],

      blocks: [
        {
          id: "sovet-a-ne-prikaz",
          kind: "explain",
          text: [
            "К Данияру приехал друг из другого города, и всё для него ново.",
            "Данияр не приказывает, а советует: вот это стоит попробовать.",
            "Совет и обязанность — разные вещи, и слова у них разные.",
          ],
        },
        {
          id: "obyazan-i-stoit",
          kind: "table",
          caption: "Обязан и стоит",
          zvuchat: [
            "You have to show your ID.",
            "You should try walking.",
            "You have to buy a ticket.",
            "You should take a map.",
          ],
          head: ["Обязан: таковы правила", "Стоит: это мой совет"],
          rows: [
            ["You have to show your ID.", "You should try walking."],
            ["You have to buy a ticket.", "You should take a map."],
          ],
        },
        {
          id: "kak-ustroen-sovet",
          kind: "explain",
          text: [
            "Слово should значит «стоит», «следует» — это совет, а не правило.",
            "После него глагол стоит в обычной форме, и to не ставят.",
            "Слово не меняется ни у одного лица: I should, you should, he should.",
            "Совет можно смягчить словами I think: I think you should take a map.",
          ],
        },
        {
          id: "ne-should-to",
          kind: "note",
          tone: "mistake",
          text:
            "«You should to take a map» — так не говорят.\n\nПосле should слово " +
            "to не ставят: You should take a map.",
        },
        {
          id: "razgovor-o-sovetah-gostyu",
          kind: "example",
          caption: "Разговор с гостем",
          razgovor: true,
          zvuchat: [
            "I think you should try walking in the old town.",
            "And the river?",
            "You should take a map: every tourist gets lost there.",
          ],
          text:
            "I think you should try walking in the old town.\nAnd the river?\nYou should take a map: every tourist gets lost there.",
          explain:
            "В обеих строках с should глагол стоит в обычной форме. Оборот I " +
            "think в начале делает совет мягче, но само слово should не меняет.",
        },
        {
          id: "slovar-sovetov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "advice", translation: "совет", example: "Thank you for the advice!", hint: "/ədˈvaɪs/" },
            { term: "walking", translation: "прогулки пешком", example: "You should try walking in the old town.", hint: "/ˈwɔːkɪŋ/" },
            { term: "tourist", translation: "приезжий, турист", example: "Every tourist gets lost there.", hint: "/ˈtɔːrɪst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-should",
          kind: "gap",
          prompt: "Это совет, а не правило. Допиши слово.",
          before: "You ",
          after: " take a map.",
          answer: "should",
          hint: "Это слово значит «стоит», «следует».",
          why:
            "You should take a map. Оборот have to сказал бы, что карту брать " +
            "обязательно.",
        },
        {
          id: "z2-vybrat-sovet",
          kind: "choice",
          prompt: "В какой записи совет построен верно?",
          options: [
            { text: "You should to try walking." },
            { text: "You should trying walking." },
            { text: "You should try walking.", correct: true },
          ],
          hint: "После should глагол стоит в обычной форме, без to.",
          why:
            "You should try walking. В первой записи лишнее to, во второй " +
            "глагол взял окончание -ing.",
        },
        {
          id: "z3-otmetit-sovety",
          kind: "hottext",
          prompt: "Отметь строки, где дан совет, а не названо правило.",
          parts: [
            { text: "You should take a map.", selectable: true, correct: true },
            { text: " · " },
            { text: "You have to buy a ticket.", selectable: true },
            { text: " · " },
            { text: "I think you should try walking.", selectable: true, correct: true },
            { text: " · " },
            { text: "You must show your ID.", selectable: true },
          ],
          hint: "Совет советуют, а правило не выбирают.",
          why:
            "Первая и третья. Во второй и четвёртой стоят have to и must — это " +
            "обязанность.",
        },
        {
          id: "z4-sobrat-sovet",
          kind: "order",
          prompt: "Собери совет: тебе стоит попробовать прогулки пешком.",
          items: ["try walking.", "You", "should"],
          answer: [1, 2, 0],
          hint: "Слово совета стоит сразу после того, к кому обращаются.",
          why:
            "You should try walking. Глагол идёт следом и стоит в обычной " +
            "форме.",
        },
        {
          id: "z5-napisat-sovet",
          kind: "short",
          prompt:
            "Посоветуй гостю взять карту, смягчив совет. Начни с I think.",
          answer: "I think you should take a map.",
          accept: ["I think you should take a map"],
          hint: "Оборот I think ставят перед советом целиком.",
          why:
            "I think you should take a map. Слово should при этом не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-stoit",
      title: "Не стоит: You shouldn't eat that",
      estimatedMinutes: 14,
      outcome: "советовать не делать: You shouldn't eat that",

      blocks: [
        {
          id: "sovet-naoborot",
          kind: "explain",
          text: [
            "Советуют и обратное: вот этого лучше не делать.",
            "По-русски говорят «не стоит», «лучше не надо».",
            "По-английски слово то же, только с отрицанием.",
          ],
        },
        {
          id: "stoit-i-ne-stoit-tablica",
          kind: "table",
          caption: "Стоит и не стоит",
          zvuchat: [
            "You should try the soup.",
            "You shouldn't eat that.",
            "You should sleep more.",
            "You shouldn't work at night.",
          ],
          head: ["Стоит", "Не стоит"],
          rows: [
            ["You should try the soup.", "You shouldn't eat that."],
            ["You should sleep more.", "You shouldn't work at night."],
          ],
        },
        {
          id: "chem-shouldnt-otlichaetsya-ot-mustnt",
          kind: "explain",
          text: [
            "Слово should берёт not и сливается с ним: shouldn't.",
            "Глагол после него в обычной форме, и to по-прежнему не ставят.",
            "Это совет, а не запрет: сделаешь наоборот — никто не накажет.",
            "Запрет называют словом mustn't, и оно строже.",
          ],
        },
        {
          id: "ne-dont-should",
          kind: "note",
          tone: "mistake",
          text:
            "«You don't should eat that» — так не говорят.\n\nСлово should " +
            "берёт not само: You shouldn't eat that.",
        },
        {
          id: "razgovor-o-zdorove",
          kind: "example",
          caption: "Разговор о здоровье",
          razgovor: true,
          zvuchat: [
            "I have toothache, and my head hurts.",
            "You shouldn't eat so much sugar. It is bad for your health.",
            "And exercise? You shouldn't sit all day: it is bad for your blood.",
          ],
          text:
            "I have toothache, and my head hurts.\nYou shouldn't eat so much sugar. It is bad for your health.\nAnd exercise? You shouldn't sit all day: it is bad for your blood.",
          explain:
            "В обеих строках с shouldn't дан совет, а не запрет: никто не " +
            "накажет за сахар. Оборот bad for your health значит «вредно для " +
            "здоровья».",
        },
        {
          id: "slovar-zdorovya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "health", translation: "здоровье", example: "It is bad for your health.", hint: "/helθ/" },
            { term: "toothache", translation: "зубная боль", example: "I have toothache, and my head hurts.", hint: "/ˈtuːθeɪk/" },
            { term: "exercise", translation: "зарядка, упражнения", example: "And exercise? You shouldn't sit all day.", hint: "/ˈeksəsaɪz/" },
            { term: "blood", translation: "кровь", example: "It is bad for your blood.", hint: "/blʌd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-shouldnt",
          kind: "gap",
          prompt: "Столько сахара есть не стоит. Допиши слово.",
          before: "You ",
          after: " eat so much sugar.",
          answer: "shouldn't",
          hint: "Слово совета берёт not и сливается с ним.",
          why:
            "You shouldn't eat so much sugar. Слово mustn't сказало бы, что " +
            "сахар запрещён, а это совет.",
        },
        {
          id: "z2-otlichit-sovet-ot-zapreta",
          kind: "choice",
          prompt:
            "Строки You shouldn't eat that и You mustn't eat that говорят о разном. Чем?",
          options: [
            { text: "Первая о сегодняшнем дне, вторая о завтрашнем." },
            { text: "Первая — совет, вторая — запрет.", correct: true },
            { text: "Первая строже второй." },
          ],
          hint: "Спроси у каждой строки: накажут ли, если сделать наоборот?",
          why:
            "Первая — совет, вторая — запрет. За совет никто не накажет, а " +
            "запрет — это правило.",
        },
        {
          id: "z3-otmetit-sovety-naoborot",
          kind: "hottext",
          prompt: "Отметь строки, где советуют чего-то не делать.",
          parts: [
            { text: "You shouldn't work at night.", selectable: true, correct: true },
            { text: " · " },
            { text: "You mustn't run indoors.", selectable: true },
            { text: " · " },
            { text: "You shouldn't sit all day.", selectable: true, correct: true },
            { text: " · " },
            { text: "You should sleep more.", selectable: true },
          ],
          hint: "Ищи слово совета с not, а не слово запрета.",
          why:
            "Первая и третья. Во второй стоит запрет, а в четвёртой — совет " +
            "сделать, а не не делать.",
        },
        {
          id: "z4-sobrat-sovet-naoborot",
          kind: "order",
          prompt: "Собери совет: не стоит работать по ночам.",
          items: ["work at night.", "shouldn't", "You"],
          answer: [2, 1, 0],
          hint: "Слово совета с not стоит сразу после того, к кому обращаются.",
          why:
            "You shouldn't work at night. Глагол после него в обычной форме.",
        },
        {
          id: "z5-napisat-sovet-o-zdorove",
          kind: "short",
          prompt:
            "Посоветуй другу не сидеть весь день. Начни с You.",
          answer: "You shouldn't sit all day.",
          accept: ["You shouldn't sit all day", "You should not sit all day."],
          hint: "Это совет, а не запрет.",
          why:
            "You shouldn't sit all day. Годится и полная запись You should not " +
            "sit all day.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "stoit-li",
      title: "Стоит ли: Should I take a map?",
      estimatedMinutes: 14,
      outcome: "спросить совета: Should I take a map?",

      blocks: [
        {
          id: "sprosit-soveta",
          kind: "explain",
          text: [
            "Совета не только дают — его и спрашивают.",
            "По-русски спрашивают «стоит ли мне…?».",
            "По-английски слово совета выходит в начало строки.",
          ],
        },
        {
          id: "sovet-i-vopros-o-sovete",
          kind: "table",
          caption: "Совет и вопрос о совете",
          zvuchat: [
            "You should take a map.",
            "Should I take a map?",
            "We should go by bus.",
            "Should we go by bus?",
          ],
          head: ["Совет", "Вопрос"],
          rows: [
            ["You should take a map.", "Should I take a map?"],
            ["We should go by bus.", "Should we go by bus?"],
          ],
        },
        {
          id: "kak-ustroen-vopros-o-sovete",
          kind: "explain",
          text: [
            "Слово should уходит в начало, а тот, о ком речь, встаёт за ним.",
            "Глагол остаётся в обычной форме: take, go.",
            "Слово do в такой вопрос не добавляют вовсе.",
            "Отвечают коротко: Yes, you should или No, you shouldn't.",
          ],
        },
        {
          id: "ne-do-i-should",
          kind: "note",
          tone: "mistake",
          text:
            "«Do I should take a map?» — так не спрашивают.\n\nВ начало " +
            "выходит само should: Should I take a map?",
        },
        {
          id: "razgovor-o-poezdke-na-more",
          kind: "example",
          caption: "Разговор о поездке",
          razgovor: true,
          zvuchat: [
            "Should I try windsurfing there?",
            "Yes, you should. But you shouldn't go if it is cold.",
            "And riding? Should we take the horses?",
          ],
          text:
            "Should I try windsurfing there?\nYes, you should. But you shouldn't go if it is cold.\nAnd riding? Should we take the horses?",
          explain:
            "В обоих вопросах should стоит первым, а глагол остаётся в обычной " +
            "форме. Короткий ответ повторяет только should: Yes, you should.",
        },
        {
          id: "slovar-zanyatiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "windsurfing", translation: "виндсёрфинг", example: "Should I try windsurfing there?", hint: "/ˈwɪndsɜːfɪŋ/" },
            { term: "riding", translation: "верховая езда", example: "And riding? Should we take the horses?", hint: "/ˈraɪdɪŋ/" },
            { term: "snowboarding", translation: "катание на сноуборде", example: "You should try snowboarding in winter.", hint: "/ˈsnəʊbɔːdɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vopros-o-sovete",
          kind: "choice",
          prompt: "Спроси, стоит ли брать карту.",
          options: [
            { text: "Do I should take a map?" },
            { text: "I should take a map?" },
            { text: "Should I take a map?", correct: true },
          ],
          hint: "В начало выходит само слово совета.",
          why:
            "Should I take a map? Слово do к нему не добавляют, а во второй " +
            "записи should осталось на месте совета.",
        },
        {
          id: "z2-otvetit-korotko-o-sovete",
          kind: "short",
          prompt:
            "Тебя спросили: Should I try windsurfing? Ответь коротко — да, стоит.",
          answer: "Yes, you should.",
          accept: ["Yes, you should"],
          hint: "В коротком ответе глагол не повторяют.",
          why:
            "Yes, you should. Слово try в таком ответе не звучит вовсе.",
        },
        {
          id: "z3-otmetit-voprosy-o-sovete",
          kind: "hottext",
          prompt: "Отметь вопросы, заданные верно.",
          parts: [
            { text: "Should I take a map?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do we should go by bus?", selectable: true },
            { text: " · " },
            { text: "Should we go by bus?", selectable: true, correct: true },
            { text: " · " },
            { text: "Should I to try riding?", selectable: true },
          ],
          hint: "Слово do тут лишнее, и to после should тоже.",
          why:
            "Первый и третий. Во втором лишнее do, в четвёртом лишнее to.",
        },
        {
          id: "z4-sobrat-vopros-o-snouborde",
          kind: "order",
          prompt: "Собери вопрос: стоит ли мне попробовать сноуборд?",
          items: ["try snowboarding?", "Should", "I"],
          answer: [1, 2, 0],
          hint: "Начни со слова совета.",
          why:
            "Should I try snowboarding? Глагол остаётся в обычной форме.",
        },
        {
          id: "z5-sprosit-sovet-o-verhovoy-ezde",
          kind: "short",
          prompt:
            "Спроси, стоит ли вам двоим попробовать верховую езду. Начни с Should.",
          answer: "Should we try riding?",
          accept: ["Should we try riding"],
          hint: "После слова совета встаёт тот, о ком речь.",
          why:
            "Should we try riding? Слово we говорит, что советуются двое.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pochemu-by-nam-ne",
      title: "Почему бы не: Why don't we go riding?",
      estimatedMinutes: 14,
      outcome: "предложить вместе: Why don't we go riding?",

      blocks: [
        {
          id: "predlozhit-a-ne-posovetovat",
          kind: "explain",
          text: [
            "Есть четвёртый случай: не совет другому, а предложение вместе.",
            "По-русски говорят «а почему бы нам не…?».",
            "По-английски это вопрос, который начинается с двух слов.",
          ],
        },
        {
          id: "sovet-i-predlozhenie",
          kind: "table",
          caption: "Совет и предложение",
          zvuchat: [
            "You should go riding.",
            "Why don't we go riding?",
            "You should try the soup.",
            "Why don't you try the soup?",
          ],
          head: ["Совет тебе", "Предложение"],
          rows: [
            ["You should go riding.", "Why don't we go riding?"],
            ["You should try the soup.", "Why don't you try the soup?"],
          ],
        },
        {
          id: "kak-ustroeno-predlozhenie",
          kind: "explain",
          text: [
            "Два слова why don't стоят в начале, а за ними — тот, кому предлагают.",
            "Слово we значит «нам вместе», you — «тебе».",
            "Глагол после них в обычной форме: go, try.",
            "Это вопрос по виду, но по смыслу — предложение, и отвечают на него согласием.",
          ],
        },
        {
          id: "ne-why-we-dont",
          kind: "note",
          tone: "mistake",
          text:
            "«Why we don't go riding?» — так не предлагают.\n\nСлово don't " +
            "стоит сразу после why: Why don't we go riding?",
        },
        {
          id: "razgovor-o-vyhodnyh",
          kind: "example",
          caption: "Разговор о выходных",
          razgovor: true,
          zvuchat: [
            "Why don't we go riding on Saturday?",
            "Good idea! And why don't you take your brother?",
            "He is tired. Why don't we ask him tomorrow?",
          ],
          text:
            "Why don't we go riding on Saturday?\nGood idea! And why don't you take your brother?\nHe is tired. Why don't we ask him tomorrow?",
          explain:
            "Во всех трёх строках why don't стоит в начале, а глагол остаётся в " +
            "обычной форме. Отвечают на такое не «потому что», а согласием: " +
            "Good idea!",
        },
        {
          id: "slovar-vyhodnyh",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "feelings", translation: "чувства", example: "Think about his feelings: he is tired.", hint: "/ˈfiːlɪŋz/" },
            { term: "brain", translation: "мозг", example: "Walking is good for your brain.", hint: "/breɪn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-dont",
          kind: "gap",
          prompt: "Это предложение вместе. Допиши слово.",
          before: "Why ",
          after: " we go riding?",
          answer: "don't",
          hint: "Это слово стоит сразу после why.",
          why:
            "Why don't we go riding? Без него вышел бы вопрос о причине: «почему " +
            "мы едем верхом?».",
        },
        {
          id: "z2-vybrat-predlozhenie",
          kind: "choice",
          prompt: "Как предложить вместе пойти на прогулку?",
          options: [
            { text: "Why we don't go walking?" },
            { text: "Why don't we going walking?" },
            { text: "Why don't we go walking?", correct: true },
          ],
          hint: "Слово don't стоит сразу после why, а глагол — в обычной форме.",
          why:
            "Why don't we go walking? В первой записи don't ушло за we, во " +
            "второй глагол взял окончание -ing.",
        },
        {
          id: "z3-otmetit-predlozheniya",
          kind: "hottext",
          prompt: "Отметь строки, где предлагают что-то сделать вместе.",
          parts: [
            { text: "Why don't we go riding?", selectable: true, correct: true },
            { text: " · " },
            { text: "Why don't you try the soup?", selectable: true },
            { text: " · " },
            { text: "Why don't we ask him tomorrow?", selectable: true, correct: true },
            { text: " · " },
            { text: "You should try snowboarding.", selectable: true },
          ],
          hint: "Ищи слово we: оно и значит «вместе».",
          why:
            "Первая и третья. Во второй предлагают одному собеседнику, а в " +
            "четвёртой дан совет.",
        },
        {
          id: "z4-sobrat-predlozhenie",
          kind: "order",
          prompt: "Собери предложение: а почему бы нам не спросить его завтра?",
          items: ["ask him tomorrow?", "Why don't", "we"],
          answer: [1, 2, 0],
          hint: "Начни с двух слов, которые стоят вместе.",
          why:
            "Why don't we ask him tomorrow? Глагол после them в обычной форме.",
        },
        {
          id: "z5-predlozhit-progulku",
          kind: "short",
          prompt:
            "Предложи собеседнику вместе пойти на прогулку в субботу. Начни с Why.",
          answer: "Why don't we go walking on Saturday?",
          accept: ["Why don't we go walking on Saturday"],
          hint: "Слово we говорит, что предлагаешь вместе.",
          why:
            "Why don't we go walking on Saturday? Слово you сказало бы, что " +
            "идёшь не ты.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-sovety-priezzhemu",
      title: "Читаем советы приезжему",
      estimatedMinutes: 13,
      outcome: "находить в советах приезжему, что стоит делать, а что нет",

      blocks: [
        {
          id: "zachem-chitat-sovety",
          kind: "explain",
          text: [
            "Друг Данияра написал ему письмо перед приездом.",
            "В таком письме ищут две вещи: что стоит делать и чего не стоит.",
            "Ниже письмо, и вопросы будут о нём.",
          ],
        },
        {
          id: "pismo-s-sovetami",
          kind: "text",
          title: "Some advice before you come",
          genre: "email",
          body: [
            "Hello! Here is some advice before your trip.",
            "You should try walking in the old town: every tourist likes it.",
            "You shouldn't take a taxi there, because the streets are small.",
            "Why don't we go riding on Saturday? I know a good place.",
            "You shouldn't eat much sugar here: it is bad for your health.",
            "Should I book a room for you, or will you stay with us?",
          ],
          glossary: [
            { term: "streets", translation: "улицы" },
            { term: "a good place", translation: "хорошее место" },
            { term: "stay with us", translation: "остановиться у нас" },
          ],
        },
        {
          id: "kak-iskat-v-sovetah",
          kind: "note",
          tone: "info",
          text:
            "Совет ищут по слову should, а совет наоборот — по " +
            "shouldn't.\n\nПредложение вместе начинается с why don't.",
        },

        // ---- задания ----
        {
          id: "z1-chto-stoit-poprobovat",
          about: "pismo-s-sovetami",
          kind: "short",
          prompt: "Что автор советует попробовать в старом городе? Ответь одним словом по-английски.",
          answer: "walking",
          accept: ["Walking"],
          hint: "Про старый город сказано во второй строке.",
          why: "You should try walking in the old town.",
        },
        {
          id: "z2-chego-ne-stoit",
          about: "pismo-s-sovetami",
          kind: "choice",
          prompt: "Чего автор советует не делать?",
          options: [
            { text: "Гулять по старому городу." },
            { text: "Брать такси и есть много сахара.", correct: true },
            { text: "Ехать верхом в субботу." },
          ],
          hint: "Ищи строки со словом shouldn't.",
          why:
            "Брать такси и есть много сахара: You shouldn't take a taxi, You " +
            "shouldn't eat much sugar.",
        },
        {
          id: "z3-chto-predlozheno-vmeste",
          about: "pismo-s-sovetami",
          kind: "short",
          prompt: "В какой день автор предлагает поехать верхом? Ответь одним словом по-английски.",
          answer: "Saturday",
          accept: ["saturday", "on Saturday"],
          hint: "Предложение вместе начинается с why don't.",
          why: "Why don't we go riding on Saturday?",
        },
        {
          id: "z4-otmetit-verno-o-pisme",
          about: "pismo-s-sovetami",
          kind: "hottext",
          prompt: "Отметь то, что верно по письму.",
          parts: [
            { text: "прогулки в старом городе нравятся приезжим", selectable: true, correct: true },
            { text: " · " },
            { text: "автор готов заказать комнату", selectable: true, correct: true },
            { text: " · " },
            { text: "по старому городу удобно ездить на такси", selectable: true },
            { text: " · " },
            { text: "сахар здесь полезен", selectable: true },
          ],
          hint: "Про такси сказано в третьей строке, про сахар — в пятой.",
          why:
            "Верно первое и второе. Про такси и сахар письмо говорит обратное.",
        },
        {
          id: "z5-chto-znachit-should-i-book",
          about: "pismo-s-sovetami",
          kind: "choice",
          prompt:
            "Последняя строка: Should I book a room for you? Что делает автор?",
          options: [
            { text: "Даёт совет." },
            { text: "Спрашивает совета у гостя.", correct: true },
            { text: "Запрещает снимать комнату." },
          ],
          hint: "Слово should стоит в начале, а не после того, к кому обращаются.",
          why:
            "Спрашивает совета. Слово should в начале строки делает из совета " +
            "вопрос.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-sovet",
      title: "Слушаем совет",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что советуют",

      blocks: [
        {
          id: "zachem-slushat-sovet",
          kind: "explain",
          text: [
            "Айгуль спрашивает совета у врача: у неё болит зуб.",
            "Слушать надо, что врач советует делать, а чего не советует.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-soveta",
          kind: "audio",
          caption: "Разговор с врачом",
          pace: "slow",
          skryt: true,
          transcript:
            "I have toothache. Should I take a medicine? — You should go to " +
            "the dentist today. And you shouldn't eat sugar. — And exercise? — " +
            "Walking is good, but you shouldn't go swimming.",
        },
        {
          id: "chto-slushat-v-sovete",
          kind: "note",
          tone: "info",
          text:
            "Слушай, где звучит should, а где shouldn't.\n\nПервое — совет " +
            "сделать, второе — совет не делать.",
        },

        // ---- задания ----
        {
          id: "z1-kuda-sovetuyut-poyti",
          about: "zapis-soveta",
          kind: "short",
          prompt: "Послушай. К кому советуют пойти? Ответь одним словом по-английски.",
          answer: "dentist",
          accept: ["Dentist", "the dentist"],
          hint: "Ответ звучит во второй реплике.",
          why: "You should go to the dentist today.",
        },
        {
          id: "z2-chego-ne-sovetuyut-est",
          about: "zapis-soveta",
          kind: "short",
          prompt: "Послушай. Чего не советуют есть? Ответь одним словом по-английски.",
          answer: "sugar",
          accept: ["Sugar"],
          hint: "Об этом сказано в конце второй реплики.",
          why: "And you shouldn't eat sugar.",
        },
        {
          id: "z3-kakoe-zanyatie-sovetuyut",
          about: "zapis-soveta",
          kind: "choice",
          prompt: "Послушай. Какое занятие врач советует?",
          options: [
            { text: "Плавание." },
            { text: "Прогулки пешком.", correct: true },
            { text: "Верховую езду." },
          ],
          hint: "Про занятия говорят в самой последней реплике.",
          why:
            "Прогулки: Walking is good, but you shouldn't go swimming.",
        },
        {
          id: "z4-otmetit-uslyshannyy-sovet",
          about: "zapis-soveta",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "к зубному стоит пойти сегодня", selectable: true, correct: true },
            { text: " · " },
            { text: "плавать не стоит", selectable: true, correct: true },
            { text: " · " },
            { text: "сахар есть можно", selectable: true },
            { text: " · " },
            { text: "верховая езда полезна", selectable: true },
          ],
          hint: "Про плавание сказано в самой последней реплике.",
          why:
            "Прозвучали первое и второе. Про сахар сказано обратное, а про " +
            "верховую езду речи не было вовсе.",
        },
        {
          id: "z5-chto-znachit-should-i-take",
          about: "zapis-soveta",
          kind: "choice",
          prompt: "В записи звучит Should I take a medicine? Что делает Айгуль?",
          options: [
            { text: "Даёт совет врачу." },
            { text: "Спрашивает совета.", correct: true },
            { text: "Отказывается от лекарства." },
          ],
          hint: "Слово should стоит в начале строки.",
          why:
            "Спрашивает совета. Совет ей дают в следующей реплике: You should " +
            "go to the dentist.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-sovety",
      title: "Пишем советы",
      estimatedMinutes: 15,
      outcome: "проверять советы: сказано, что стоит, чего не стоит и что предложено вместе",

      blocks: [
        {
          id: "zachem-proveryat-sovety",
          kind: "explain",
          text: [
            "Ученик написал другу: «Come. It is nice here.»",
            "Совета в этом нет: непонятно, что делать и чего избегать.",
            "В письме с советами пропускают не приглашение, а сами советы.",
            "Проверить своё письмо можно по четырём строкам.",
          ],
        },
        {
          id: "chto-dolzhno-byt-v-sovetah",
          kind: "table",
          caption: "Что должно быть в письме с советами",
          zvuchat: [
            "Here is some advice before your trip.",
            "You should try walking in the old town.",
            "You shouldn't take a taxi there.",
            "Why don't we go riding on Saturday?",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["зачем письмо", "Here is some advice before your trip."],
            ["что стоит делать", "You should try walking in the old town."],
            ["чего не стоит", "You shouldn't take a taxi there."],
            ["что предложено вместе", "Why don't we go riding on Saturday?"],
          ],
        },
        {
          id: "chem-derzhitsya-pismo-s-sovetami",
          kind: "explain",
          text: [
            "Первая строка говорит, зачем письмо: тут будут советы.",
            "Вторая советует сделать — через should.",
            "Третья советует не делать — через shouldn't, и объясняет почему.",
            "Четвёртая предлагает вместе — через why don't we.",
            "Строки связывают словом because, когда одна объясняет другую.",
          ],
        },
        {
          id: "obrazec-pisma-s-sovetami",
          kind: "example",
          caption: "Письмо Айгуль",
          zvuchat: [
            "Hello! Here is some advice before your trip to the mountains.",
            "You should try snowboarding: every tourist wants it here.",
            "You shouldn't go alone, because the weather changes fast.",
            "Why don't we go together on Sunday? I am free all day.",
          ],
          text:
            "Hello! Here is some advice before your trip to the mountains.\nYou should try snowboarding: every tourist wants it here.\nYou shouldn't go alone, because the weather changes fast.\nWhy don't we go together on Sunday? I am free all day.",
          explain:
            "Вторая строка советует, третья советует наоборот и называет " +
            "причину, четвёртая предлагает вместе. Слово because связывает " +
            "совет с причиной.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-pismu",
          kind: "choice",
          prompt:
            "Письмо целиком: Come. It is nice here. Чего в нём не хватает?",
          options: [
            { text: "Не сказано, что делать и чего избегать.", correct: true },
            { text: "Имени того, кто писал." },
            { text: "Даты приезда." },
          ],
          hint: "Представь себя гостем: что даёт тебе это письмо?",
          why:
            "Не сказано, что делать и чего избегать. Приглашение есть, а " +
            "советов нет ни одного.",
        },
        {
          id: "z2-dopisat-shouldnt-v-pismo",
          kind: "gap",
          prompt: "Одному идти не стоит. Допиши слово.",
          before: "You ",
          after: " go alone, because the weather changes fast.",
          answer: "shouldn't",
          hint: "Это совет наоборот, а не запрет.",
          why:
            "You shouldn't go alone. Слово mustn't сказало бы, что одному " +
            "ходить запрещено.",
        },
        {
          id: "z3-otmetit-stroki-s-sovetom",
          kind: "hottext",
          prompt: "Отметь строки, из которых гость узнаёт, что ему делать.",
          parts: [
            { text: "You should try snowboarding.", selectable: true, correct: true },
            { text: " · " },
            { text: "The weather is nice today.", selectable: true },
            { text: " · " },
            { text: "You shouldn't go alone.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am free all day.", selectable: true },
          ],
          hint: "Ищи слово совета — с not и без.",
          why:
            "Первая и третья. Про погоду и свободный день гость узнаёт, но " +
            "делать ему с этим нечего.",
        },
        {
          id: "z4-svyazat-sovet-s-prichinoy",
          kind: "short",
          prompt:
            "Соедини две строки одним словом: You shouldn't go alone. The weather changes fast. Запиши получившуюся строку целиком.",
          answer: "You shouldn't go alone, because the weather changes fast.",
          accept: [
            "You shouldn't go alone, because the weather changes fast",
            "You shouldn't go alone because the weather changes fast.",
            "You shouldn't go alone because the weather changes fast",
          ],
          hint: "Вторая строка называет причину первой.",
          why:
            "You shouldn't go alone, because the weather changes fast. Слово " +
            "because и связывает совет с причиной.",
        },
        {
          id: "z5-napisat-pismo-s-sovetami",
          kind: "essay",
          prompt:
            "Напиши другу письмо с советами, четырьмя строками. Скажи, зачем письмо, что стоит делать, чего не стоит и что предлагаешь вместе.",
          minWords: 16,
          sample:
            "Hello! Here is some advice before your trip to the mountains.\nYou should try snowboarding: every tourist wants it here.\nYou shouldn't go alone, because the weather changes fast.\nWhy don't we go together on Sunday? I am free all day.",
          checklist: [
            "сказано, зачем письмо",
            "есть строка со словом should",
            "есть строка со словом shouldn't и причиной",
            "есть строка с why don't we",
          ],
          hint:
            "Бери обороты, которые знаешь: Here is some advice, You should, You shouldn't … because, Why don't we.",
          why:
            "Письмо работает, когда гость понимает, что ему делать, ещё до " +
            "приезда.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, переписать строку, отличить совет от обязанности.

      // ---- итог 1 ----
      {
        id: "q-ispravit-should-to",
        kind: "short",
        outcome: "советовать сделать: You should try walking",
        prompt:
          "Ученик написал: You should to take a map. Запиши строку без ошибки.",
        answer: "You should take a map.",
        accept: ["You should take a map"],
        hint: "Одно слово в строке лишнее.",
        why:
          "You should take a map. После should слово to не ставят.",
      },
      {
        id: "q-otlichit-sovet-ot-obyazannosti",
        kind: "choice",
        outcome: "советовать сделать: You should try walking",
        prompt:
          "Строки You should take a map и You have to take a map говорят о разном. Чем?",
        options: [
          { text: "В первой это совет, во второй — правило.", correct: true },
          { text: "Первая о завтрашнем дне, вторая о сегодняшнем." },
          { text: "Первая вежливее второй." },
        ],
        hint: "Спроси: можно ли не послушаться?",
        why:
          "В первой совет, во второй правило. Совета можно не послушаться, " +
          "правила — нет.",
      },

      // ---- итог 2 ----
      {
        id: "q-ispravit-dont-should",
        kind: "short",
        outcome: "советовать не делать: You shouldn't eat that",
        prompt:
          "Ученик написал: You don't should work at night. Запиши строку без ошибки.",
        answer: "You shouldn't work at night.",
        accept: [
          "You shouldn't work at night",
          "You should not work at night.",
          "You should not work at night",
        ],
        hint: "Слово совета берёт not само.",
        why:
          "You shouldn't work at night. Слово don't при should не бывает.",
      },
      {
        id: "q-otlichit-shouldnt-ot-mustnt",
        kind: "choice",
        outcome: "советовать не делать: You shouldn't eat that",
        prompt:
          "На двери висит табличка. Какая запись на ней уместнее?",
        options: [
          { text: "You shouldn't use this machine." },
          { text: "You mustn't use this machine.", correct: true },
          { text: "You don't have to use this machine." },
        ],
        hint: "Табличка называет правило, а не совет.",
        why:
          "You mustn't use this machine. Запись с shouldn't была бы советом, а " +
          "третья сказала бы, что пользоваться просто необязательно.",
      },

      // ---- итог 3 ----
      {
        id: "q-perepisat-sovet-v-vopros",
        kind: "short",
        outcome: "спросить совета: Should I take a map?",
        prompt:
          "Строку You should book a room перепиши так, чтобы вышел вопрос о совете от первого лица.",
        answer: "Should I book a room?",
        accept: ["Should I book a room"],
        hint: "Слово совета уходит в начало, а за ним встаёт тот, о ком речь.",
        why:
          "Should I book a room? Слово do в такой вопрос не добавляют.",
      },
      {
        id: "q-otvetit-net-na-sovet",
        kind: "short",
        outcome: "спросить совета: Should I take a map?",
        prompt:
          "Тебя спросили: Should I take a taxi? Ответь коротко — нет, не стоит.",
        answer: "No, you shouldn't.",
        accept: ["No, you shouldn't", "No, you should not."],
        hint: "Короткий ответ строится на первом слове вопроса.",
        why:
          "No, you shouldn't. Глагол take в таком ответе не звучит.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-why-we-dont",
        kind: "short",
        outcome: "предложить вместе: Why don't we go riding?",
        prompt:
          "Ученик написал: Why we don't go walking? Запиши предложение без ошибки.",
        answer: "Why don't we go walking?",
        accept: ["Why don't we go walking"],
        hint: "Два слова в начале стоят вместе.",
        why:
          "Why don't we go walking? Слово don't идёт сразу за why.",
      },
      {
        id: "q-chto-znachit-why-dont-we",
        kind: "choice",
        outcome: "предложить вместе: Why don't we go riding?",
        prompt: "Строка: Why don't we ask him tomorrow? Что это?",
        options: [
          { text: "Вопрос о причине: почему мы не спрашиваем." },
          { text: "Запрет спрашивать." },
          { text: "Предложение сделать это вместе.", correct: true },
        ],
        hint: "Отвечают на такое согласием, а не «потому что».",
        why:
          "Предложение вместе. Про причину спросили бы иначе, а запрет " +
          "назвали бы через mustn't.",
      },

      // ---- итог 5 ----
      {
        id: "q-najti-sovet-v-pisme",
        kind: "choice",
        outcome: "находить в советах приезжему, что стоит делать, а что нет",
        prompt:
          "В письме строка: You shouldn't take a taxi there, because the streets are small. Что советует автор?",
        options: [
          { text: "Такси там лучше не брать.", correct: true },
          { text: "Брать такси только на маленьких улицах." },
          { text: "Такси там запрещено." },
        ],
        hint: "Слово shouldn't — совет, а не запрет.",
        why:
          "Такси лучше не брать. Про запрет сказали бы mustn't.",
      },
      {
        id: "q-najti-predlozhenie-v-pisme",
        kind: "short",
        outcome: "находить в советах приезжему, что стоит делать, а что нет",
        prompt:
          "В письме строка: Why don't we go riding on Saturday? Чем занимается автор этой строкой? Ответь одним словом по-русски.",
        answer: "предлагает",
        accept: ["предложение", "предлагает вместе"],
        hint: "Это не совет и не вопрос о причине.",
        why:
          "Предлагает. Оборот why don't we и значит «а почему бы нам не».",
      },

      // ---- итог 6 ----
      {
        id: "q-uslyshat-sovet",
        kind: "short",
        outcome: "слышать в разговоре, что советуют",
        zvuk: "You should go to the dentist today, and you shouldn't eat sugar.",
        prompt: "Послушай. К кому советуют пойти? Ответь одним словом по-английски.",
        answer: "dentist",
        accept: ["Dentist", "the dentist"],
        hint: "Ответ звучит в первой половине записи.",
        why:
          "Dentist. Совет сходить стоит первым, а второй половиной идёт " +
          "совет наоборот — про сахар.",
      },
      {
        id: "q-uslyshat-chego-ne-sovetuyut",
        kind: "short",
        outcome: "слышать в разговоре, что советуют",
        zvuk: "Walking is good for your health, but you shouldn't go swimming today.",
        prompt:
          "Послушай. Чего сегодня не советуют? Ответь одним словом по-английски.",
        answer: "swimming",
        accept: ["Swimming"],
        hint: "Ответ стоит после слов you shouldn't go.",
        why: "But you shouldn't go swimming today.",
      },

      // ---- итог 7 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-pismu",
        kind: "choice",
        outcome: "проверять советы: сказано, что стоит, чего не стоит и что предложено вместе",
        prompt:
          "Письмо: Here is some advice. You should try snowboarding. You shouldn't go alone. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что говорит, зачем письмо." },
          { text: "Той, что предлагает сделать что-то вместе.", correct: true },
          { text: "Той, что советует не делать." },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, что предлагает вместе. Зачем письмо — сказано, совет есть, " +
          "совет наоборот тоже — а предложения нет.",
      },
      {
        id: "q-dopisat-predlozhenie-v-pismo",
        kind: "short",
        outcome: "проверять советы: сказано, что стоит, чего не стоит и что предложено вместе",
        prompt:
          "К письму допиши строку с предложением: пойти вместе в воскресенье. Начни с Why.",
        answer: "Why don't we go together on Sunday?",
        accept: ["Why don't we go together on Sunday"],
        hint: "Два слова в начале стоят вместе, а we значит «вместе».",
        why:
          "Why don't we go together on Sunday? Два слова в начале стоят " +
          "вместе, а день идёт в конец.",
      },
      {
        id: "q-pochemu-v-pisme-tri-oborota",
        kind: "choice",
        outcome: "проверять советы: сказано, что стоит, чего не стоит и что предложено вместе",
        prompt:
          "Отчего в письме с советами нужны все три оборота: should, shouldn't и why don't we?",
        options: [
          { text: "Чтобы письмо было длиннее." },
          { text: "Так принято начинать письмо." },
          { text: "Они говорят о разном: что делать, чего избегать и что вместе.", correct: true },
        ],
        hint: "Представь гостя, которому назвали только запреты.",
        why:
          "Они говорят о разном. Без строки с предложением письмо остаётся " +
          "списком указаний, а не разговором.",
      },
    ],
  },
};

export default module;
