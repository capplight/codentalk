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
 * НО УРОКА ПРО `WHY DON'T WE` ЗДЕСЬ НЕТ, И ЭТО ГЛАВНАЯ ПРАВКА ПО РАЗБОРУ.
 *
 * Первая редакция дала ему четвёртый урок правил — а такой урок в курсе уже
 * есть: модуль 12 «Давай я», урок 4 «Почему бы не: Why don't we meet at the
 * square?». Совпала не тема, а урок целиком: та же графа источника, та же
 * формула заголовка, тот же набор заданий по порядку. Нашёл методист.
 *
 * Хуже совпадения было расхождение. Модуль 12 режет строку на `why` + `don't
 * we` + глагол, а здешний урок резал её на `why don't` + местоимение. Ученик
 * одной ступени получал два несовместимых разбора одной строки.
 *
 * Урок снят целиком, вместе с итогом «предложить вместе» и двумя вопросами
 * работы. `Why don't we` остаётся в письме урока чтения — на узнавание, со
 * ссылкой на модуль «Давай я» во врезке. Строка программы поправлена там же.
 *
 * ЧЕТВЁРТОЙ СТРОКОЙ ПИСЬМА СТАЛ ВОПРОС СО `SHOULD`. Урок письма проверял
 * четыре вещи, и четвёртой было «предложено вместе» — то есть оборот, которого
 * модуль больше не учит. На её место встал вопрос `Should I book a room for
 * you?`: он стоит в письме урока чтения и разобран уроком 3.
 *
 * ИМЕНИ КЛАССА У `SHOULD` МОДУЛЬ НЕ ДАЁТ. В модуле 25 я написал, что термин
 * «модальный глагол» уже введён в курсе, — и ошибся: его нет в видимом тексте
 * нигде. Вводить его здесь незачем: модуль учит совету, а имя класса ученику
 * ничего не добавит.
 *
 * ЧТО МОДУЛЬ БЕРЁТ ВПЕРЁД И ОБЪЯВЛЯЕТ:
 *
 * - **`if` + настоящее время** — «You shouldn't go if it is windy». Условным
 *   предложениям отведён модуль 29, но уровню это не противоречит: English
 *   Grammar Profile даёт A2 пример «If you agree, we can go shopping after the
 *   film».
 * - **`go` + `-ing`** — `go swimming`, `go walking`. English Grammar Profile,
 *   NOUNS noun phrases, A1, пример «Every Friday I go swimming and play
 *   computer games». Карточки при этом дают `walking` и `riding`
 *   существительными, а сама связка нигде не разбирается — она работает как
 *   готовый оборот.
 *
 * Оба заимствования назвал методист. Незаявленное заимствование хуже
 * заявленного: следующий проверяющий не отличит намерение от недосмотра.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ВСЁ ЭТО B1:
 *
 * - `should have` о прошлом («I knew I should have written before»);
 * - вопрос-переспрос («we should rent some movies, shouldn't we?»);
 * - `should` о вероятном («It should be a good day»);
 * - `should` о желаемом положении дел («British people should eat more
 *   vegetables»).
 *
 * СЛОВАРЬ МОДУЛЯ — ПЯТНАДЦАТЬ КАРТОЧЕК.
 *
 * Первая редакция дала двенадцать, и две из них — `feelings` и `brain` — не
 * встречались в модуле нигде, кроме себя самих. Это добор нормы, и уточнение
 * владельца от 21 августа его запрещает прямо. Методист их и нашёл.
 *
 * `feelings` снят. `brain` оставлен и переставлен в разговор о здоровье, где
 * работает строкой «it is bad for your blood and your brain».
 *
 * ЧЕТЫРЕ СЛОВА ДОБАВЛЕНЫ, И У КАЖДОГО ЕСТЬ РАБОТА: `explore` (третья пара
 * таблицы урока 1 и отвлекающий там же), `path` (третья пара таблицы урока 2),
 * `windy` (разговор о поездке, урок 3), `skateboarding` (задание урока 3).
 * Все четыре стоят в словнике A2 Key.
 *
 * ТРАНСКРИПЦИЯ ТРЁХ ИЗ НИХ ВЗЯТА ПО СЛОВАРНОЙ НОРМЕ, А НЕ ИЗ ИСТОЧНИКА:
 * `ipa-en-uk` не знает `windy` и `path` вовсе, а для `explore` даёт
 * `ɛksplˈɔː` — гласный `ɛ` в первом слоге, тогда как словари пишут
 * `ɪkˈsplɔː`. Взято словарное. Это тот же ряд, что `r` вместо `ɹ` и `g`
 * вместо `ɡ`, и владельцу стоит на него взглянуть.
 *
 * НОВЫХ ДЛЯ СТУПЕНИ ДЕВЯТЬ: `toothache`, `blood`, `brain`, `windsurfing`,
 * `snowboarding`, `explore`, `path`, `windy`, `skateboarding`.
 *
 * ПЕРВАЯ РЕДАКЦИЯ ШАПКИ НАСЧИТАЛА ВОСЕМЬ НОВЫХ ИЗ ДВЕНАДЦАТИ. Сверка считает
 * иначе, и она права: `walking`, `riding` и `feelings` она сводит к `walk`,
 * `ride` и `feel`, а их Oxford помечает A1. Слово с окончанием `-ing` или
 * `-s` не становится новым оттого, что у него своя строка в словнике. Это уже
 * четвёртая ошибка на пометах за четыре модуля, и все четыре — разной породы.
 *
 * ШЕСТЬ СЛОВ ИДУТ С ПРОШЛОЙ СТУПЕНИ: `advice`, `health`, `exercise`,
 * `tourist` — Oxford помечает их A1 прямо; `walking` и `riding` — через основы
 * `walk` и `ride`. Карточки у них есть потому, что все шесть — опорные слова
 * модуля, а не потому, что они стоят в каждом уроке: `exercise` работает в
 * двух местах, `blood` — в одном. Первая редакция шапки писала «стоят в каждом
 * уроке», и это было неверно.
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
    "спросить совета и коротко ответить: Should I take a map? — Yes, you should",
    "находить в советах приезжему, что стоит делать, а что нет",
    "слышать в разговоре, что советуют",
    "проверять советы: сказано, что стоит, чего не стоит и о чём спрашивают",
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
        "с. 51, Language specifications, перечень Modals: `should (advice)` " +
        "стоит там с тем самым значением, которому учит модуль. " +
        "УРОК 6, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should " +
        "only write ONE word, or a number, or a date, or a time for their " +
        "answer» — поэтому ответы на слух здесь односложные. " +
        "НОМЕР СТРАНИЦЫ ИСПРАВЛЕН ПО РАЗБОРУ: первая редакция писала с. 52, " +
        "перенеся его с модуля 25, где на 52 стоит `mustn't (prohibition)`. " +
        "Проверено поиском по разбору источника: `should (advice)` лежит между " +
        "меткой с. 51 и меткой с. 52. " +
        "КОРОТКОГО ОТВЕТА `Yes, you should` НИ ОДИН ИСТОЧНИК НЕ ПОДПИРАЕТ: " +
        "искали в English Grammar Profile по `MODALITY,should`, по `ellipsis` " +
        "и по самой строке — не нашли. Это не «нет», а «не нашли»; оборот " +
        "взят по условности курса, который так же отвечает на вопросы с `will` " +
        "и `can`",
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
        "Пятнадцать карточек модуля взяты из словника ступени; новых для " +
        "ступени девять: toothache, blood, brain, windsurfing, snowboarding, " +
        "explore, path, windy, skateboarding. " +
        "Первая редакция дала двенадцать карточек и насчитала восемь новых. " +
        "Обе цифры были неверны: сверка сводит `walking`, `riding` и " +
        "`feelings` к `walk`, `ride` и `feel`, которые Oxford помечает A1, — и " +
        "она права; а две карточки из двенадцати нигде в модуле не работали. " +
        "Почему пятнадцать, а не тридцать — разобрано в программе: запас " +
        "ступени подошёл к концу. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ПОМЕТАМИ СЛОВНИКА: `walking (n)`, `riding (n)`, " +
        "`snowboarding (n)`, `skateboarding (n)`, `windsurfing (n)` — названия " +
        "занятий, и уроки берут именно их. " +
        "ПОМЕТА `(n pl)` У `feelings` В СЛОВНИКЕ НЕ СТОИТ — первая редакция " +
        "приписала её источнику. В словнике `feelings (n)`; помета `(n pl)` " +
        "там существует и работает, но у других слов: `chips`, `clothes`, " +
        "`glasses`, `jeans`, `people`. Само слово из модуля снято по другой " +
        "причине — ему негде было работать. " +
        "И ПОМЕТЫ «неисчисляемое» В ЭТОМ СЛОВНИКЕ НЕТ НИ У ОДНОГО СЛОВА: " +
        "утверждение про `advice` было верно как факт языка, но стояло под " +
        "заголовком «сверено с пометами словника». Убрано. Оба места нашёл " +
        "методист. " +
        "ЧЕТЫРЕ СЛОВА OXFORD 3000 ПОМЕЧАЕТ A1: advice, health, exercise, " +
        "tourist — они с прошлой ступени, но карточки у них есть: это опорные " +
        "слова модуля. ДВА СЛОВА A2: blood, brain. ДВА СЛОВА B1: explore, " +
        "path — взяты по мерке ступени, оба стоят в словнике A2 Key. " +
        "OXFORD НЕ ЗНАЕТ ВОВСЕ: toothache, walking, riding, snowboarding, " +
        "skateboarding, windsurfing, windy. " +
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
            "You have to wait here.",
            "You should explore the old town.",
          ],
          head: ["Обязан: таковы правила", "Стоит: это мой совет"],
          rows: [
            ["You have to show your ID.", "You should try walking."],
            ["You have to buy a ticket.", "You should take a map."],
            ["You have to wait here.", "You should explore the old town."],
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
            { term: "explore", translation: "осматривать, изучать", example: "You should explore the old town.", hint: "/ɪkˈsplɔː/" },
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
            { text: "You have to wait here.", selectable: true },
          ],
          hint: "Ищи слово should — это совет. Слова have to называют обязанность.",
          why:
            "Первая и третья. Во второй и четвёртой стоит have to: это " +
            "обязанность, а не совет.",
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
          accept: [
            "I think you should take a map",
            "I think you should take the map.",
            "I think you should take the map",
            "I think that you should take a map.",
            "I think that you should take a map",
          ],
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
            "You should take the big road.",
            "You shouldn't take that path at night.",
          ],
          head: ["Стоит", "Не стоит"],
          rows: [
            ["You should try the soup.", "You shouldn't eat that."],
            ["You should sleep more.", "You shouldn't work at night."],
            ["You should take the big road.", "You shouldn't take that path at night."],
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
            "And exercise? You shouldn't sit all day: it is bad for your blood and your brain.",
          ],
          text:
            "I have toothache, and my head hurts.\nYou shouldn't eat so much sugar. It is bad for your health.\nAnd exercise? You shouldn't sit all day: it is bad for your blood and your brain.",
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
            { term: "blood", translation: "кровь", example: "It is bad for your blood and your brain.", hint: "/blʌd/" },
            { term: "brain", translation: "мозг", example: "It is bad for your blood and your brain.", hint: "/breɪn/" },
            { term: "path", translation: "тропинка, дорожка", example: "You shouldn't take that path at night.", hint: "/pɑːθ/" },
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
      outcome: "спросить совета и коротко ответить: Should I take a map? — Yes, you should",

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
            "Yes, you should. But you shouldn't go if it is windy.",
            "And riding? Should we take the horses?",
          ],
          text:
            "Should I try windsurfing there?\nYes, you should. But you shouldn't go if it is windy.\nAnd riding? Should we take the horses?",
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
            { term: "skateboarding", translation: "катание на скейтборде", example: "Should we try skateboarding?", hint: "/ˈskeɪtbɔːdɪŋ/" },
            { term: "windy", translation: "ветрено, ветреный", example: "You shouldn't go if it is windy.", hint: "/ˈwɪndi/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vopros-o-sovete",
          kind: "choice",
          prompt: "Спроси, стоит ли брать такси.",
          options: [
            { text: "Do I should take a taxi?" },
            { text: "I should take a taxi?" },
            { text: "Should I take a taxi?", correct: true },
          ],
          hint: "В начало выходит само слово совета.",
          why:
            "Should I take a taxi? Слово do к нему не добавляют, а во второй " +
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
          id: "z5-sprosit-sovet-o-skeytborde",
          kind: "short",
          prompt:
            "Спроси, стоит ли вам двоим попробовать скейтборд. Начни с Should.",
          answer: "Should we try skateboarding?",
          accept: ["Should we try skateboarding"],
          hint: "После слова совета встаёт тот, о ком речь.",
          why:
            "Should we try skateboarding? Слово we говорит, что советуются " +
            "двое, а не один.",
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
            "Данияр написал другу письмо перед его приездом.",
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
            "You shouldn't take a taxi there because the streets are small.",
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
            "shouldn't.\n\nСтрока Why don't we… зовёт вместе: так звали в " +
            "модуле «Давай я».",
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
          voice: "два голоса",
          transcript:
            "I have toothache. Should I take the medicine? — You should go to " +
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
          prompt: "В записи звучит Should I take the medicine? Что делает Айгуль?",
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
      outcome: "проверять советы: сказано, что стоит, чего не стоит и о чём спрашивают",

      blocks: [
        {
          id: "zachem-proveryat-sovety",
          kind: "explain",
          text: [
            "Ученик написал другу: «Come. It is nice here.»",
            "Гость прочтёт это и приедет так же, как приехал бы без письма.",
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
            "Should I book a room for you?",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["зачем письмо", "Here is some advice before your trip."],
            ["что стоит делать", "You should try walking in the old town."],
            ["чего не стоит", "You shouldn't take a taxi there."],
            ["о чём спрашивают", "Should I book a room for you?"],
          ],
        },
        {
          id: "chem-derzhitsya-pismo-s-sovetami",
          kind: "explain",
          text: [
            "Первая строка говорит, зачем письмо: тут будут советы.",
            "Вторая советует сделать — через should.",
            "Третья советует не делать — через shouldn't, и объясняет почему.",
            "Четвёртая о чём-то спрашивает — вопросом со Should в начале.",
            "Строки связывают словом because, когда одна объясняет другую.",
          ],
        },
        {
          id: "obrazec-pisma-s-sovetami",
          kind: "example",
          caption: "Письмо Айгуль",
          zvuchat: [
            "Hi! Read this before you come to the mountains.",
            "You should take the small path to the lake: it is quiet there.",
            "You shouldn't go alone because the weather changes fast.",
            "Should I meet you at the station?",
          ],
          text:
            "Hi! Read this before you come to the mountains.\nYou should take the small path to the lake: it is quiet there.\nYou shouldn't go alone because the weather changes fast.\nShould I meet you at the station?",
          explain:
            "Вторая строка советует, третья советует наоборот и называет " +
            "причину, четвёртая спрашивает. Слово because связывает совет с " +
            "причиной, а вопрос со Should оставляет выбор за гостем.",
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
          after: " go alone because the weather changes fast.",
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
            { text: "You should take the small path to the lake.", selectable: true, correct: true },
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
          answer: "You shouldn't go alone because the weather changes fast.",
          accept: [
            "You shouldn't go alone because the weather changes fast",
            "You shouldn't go alone because the weather changes fast.",
            "You shouldn't go alone, because the weather changes fast",
            "You shouldn't go alone, because the weather changes fast.",
          ],
          hint: "Вторая строка называет причину первой.",
          why:
            "You shouldn't go alone because the weather changes fast. Слово " +
            "because и связывает совет с причиной.",
        },
        {
          id: "z5-napisat-pismo-s-sovetami",
          kind: "essay",
          prompt:
            "Напиши другу письмо с советами, четырьмя строками. Скажи, зачем письмо, что стоит делать, чего не стоит, и спроси о чём-нибудь через Should.",
          minWords: 16,
          sample:
            "Hi! Read this before you come to the mountains.\nYou should take the small path to the lake: it is quiet there.\nYou shouldn't go alone because the weather changes fast.\nShould I meet you at the station?",
          checklist: [
            "сказано, зачем письмо",
            "есть строка со словом should",
            "есть строка со словом shouldn't и причиной",
            "есть вопрос, который начинается со Should",
          ],
          hint:
            "Бери обороты, которые знаешь: Here is some advice, You should, You shouldn't … because, Should I …?",
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
          "Ученик написал: You should takes the bus. Запиши строку без ошибки.",
        answer: "You should take the bus.",
        accept: ["You should take the bus"],
        hint: "Глагол после слова совета стоит в словарной форме.",
        why:
          "You should take the bus. После should глагол не берёт окончания -s " +
          "ни при ком.",
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
          { text: "В первой я советую себе, во второй — тебе." },
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
          "Ученик написал: You shouldn't to drink coffee at night. Запиши строку без ошибки.",
        answer: "You shouldn't drink coffee at night.",
        accept: [
          "You shouldn't drink coffee at night",
          "You should not drink coffee at night.",
          "You should not drink coffee at night",
        ],
        hint: "Одно слово в строке лишнее.",
        why:
          "You shouldn't drink coffee at night. Частица to после should не " +
          "ставится и в отрицании.",
      },
      {
        id: "q-otlichit-shouldnt-ot-mustnt",
        kind: "choice",
        outcome: "советовать не делать: You shouldn't eat that",
        prompt:
          "Врач считает, что сахар вреден, но запретить его он не может. Какую строку он скажет?",
        options: [
          { text: "You mustn't eat sugar." },
          { text: "You shouldn't eat sugar.", correct: true },
          { text: "You don't have to eat sugar." },
        ],
        hint: "Это совет, а не запрет и не разрешение.",
        why:
          "You shouldn't eat sugar. Первая запись была бы запретом, а третья " +
          "сказала бы, что сахар есть просто необязательно.",
      },

      // ---- итог 3 ----
      {
        id: "q-perepisat-sovet-v-vopros",
        kind: "short",
        outcome: "спросить совета и коротко ответить: Should I take a map? — Yes, you should",
        prompt:
          "Строку You should book a room перепиши так, чтобы вышел вопрос: стоит ли мне снять комнату.",
        answer: "Should I book a room?",
        accept: ["Should I book a room"],
        hint: "Слово совета уходит в начало, а за ним встаёт тот, о ком речь.",
        why:
          "Should I book a room? Слово do в такой вопрос не добавляют.",
      },
      {
        id: "q-otvetit-net-na-sovet",
        kind: "choice",
        outcome: "спросить совета и коротко ответить: Should I take a map? — Yes, you should",
        prompt:
          "Друг спросил: Should I take a taxi? Ты считаешь, что не стоит. Какой ответ верен?",
        options: [
          { text: "No, you don't." },
          { text: "No, I'm not." },
          { text: "No, you shouldn't.", correct: true },
        ],
        hint: "Короткий ответ повторяет то слово, с которого начался вопрос.",
        why:
          "No, you shouldn't. Слово do в таком ответе не появляется вовсе, а " +
          "I'm не годится: спрашивают не о тебе.",
      },

      // ---- итог 5 ----
      {
        id: "q-najti-sovet-v-pisme",
        kind: "choice",
        outcome: "находить в советах приезжему, что стоит делать, а что нет",
        prompt:
          "В письме строка: You shouldn't take a taxi there because the streets are small. Что советует автор?",
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
        accept: ["Предлагает", "предложение", "приглашает", "зовёт"],
        hint: "Это не совет и не вопрос о причине.",
        why:
          "Предлагает. Оборот why don't we и значит «а почему бы нам не».",
      },

      // ---- итог 6 ----
      {
        id: "q-uslyshat-sovet",
        kind: "short",
        outcome: "слышать в разговоре, что советуют",
        zvuk: "You shouldn't drink coffee at night, and you should try walking in the morning.",
        prompt:
          "Послушай. Что советуют делать по утрам? Ответь одним словом по-английски.",
        answer: "walking",
        accept: ["Walking"],
        hint: "Совет сделать стоит во второй половине записи.",
        why:
          "Walking. Первой половиной идёт совет наоборот — про кофе на ночь.",
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
        outcome: "проверять советы: сказано, что стоит, чего не стоит и о чём спрашивают",
        prompt:
          "Письмо: Here is some advice. You should try snowboarding. You shouldn't go alone. Какой из четырёх нужных строк здесь нет?",
        options: [
          { text: "Той, что говорит, зачем письмо." },
          { text: "Той, в которой о чём-то спрашивают.", correct: true },
          { text: "Той, что советует не делать." },
        ],
        hint: "Пройди по четырём нужным строкам и вычёркивай найденное.",
        why:
          "Той, в которой спрашивают. Зачем письмо — сказано, совет есть, " +
          "совет наоборот тоже — а вопроса нет.",
      },
      {
        id: "q-dopisat-vopros-v-pismo",
        kind: "short",
        outcome: "проверять советы: сказано, что стоит, чего не стоит и о чём спрашивают",
        prompt:
          "К письму допиши строку с вопросом: стоит ли тебе брать тёплую одежду. Начни с Should.",
        answer: "Should I take warm clothes?",
        accept: ["Should I take warm clothes"],
        hint: "Слово совета уходит в начало, а за ним встаёт тот, о ком речь.",
        why:
          "Should I take warm clothes? Слово do в такой вопрос не добавляют.",
      },
      {
        id: "q-pochemu-v-pisme-tri-oborota",
        kind: "choice",
        outcome: "проверять советы: сказано, что стоит, чего не стоит и о чём спрашивают",
        prompt:
          "Отчего в письме с советами нужны и should, и shouldn't, и вопрос со Should?",
        options: [
          { text: "Чтобы письмо было длиннее." },
          { text: "Они говорят о разном: что делать, чего избегать и о чём стоит спросить.", correct: true },
          { text: "Так принято начинать письмо." },
        ],
        hint: "Представь гостя, которому назвали только запреты.",
        why:
          "Они говорят о разном. Без вопроса письмо остаётся списком " +
          "указаний, а не разговором.",
      },
    ],
  },
};

export default module;
