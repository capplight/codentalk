import type { Module } from "@/lib/content/types";

/**
 * Модуль 17 курса «Английский · Elementary»: как это делается.
 *
 * Программа: docs/programma-english-elementary.md, модуль 17 — «описывать, как
 * происходит действие»; грамматика: наречия образа действия, их место в
 * предложении. Строка программы сошлась с источниками, править её не пришлось.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «ОБРАЗ ДЕЙСТВИЯ», А ИМЯ СЛОВ — «НАРЕЧИЯ ОБРАЗА ДЕЙСТВИЯ».
 *
 * Образ действия — это то, КАК идёт действие: быстро, тихо, плохо. Наречие
 * образа действия — слово, которое это называет. Оба имени настоящие: источник
 * зовёт эти слова manner adverbs, и русское имя класса именно такое.
 *
 * ОСТОРОЖНО, ТЕРМИН «НАРЕЧИЕ» В КУРСЕ УЖЕ ЕСТЬ, И МЕСТО У НЕГО БЫЛО ДРУГОЕ.
 * Модуль 6 этой ступени ввёл слово «наречие» на `just`, `still` и `always` и
 * научил ставить их МЕЖДУ was и глаголом. Здесь наречие идёт в КОНЕЦ. Для
 * ученика это выглядит противоречием, если промолчать, поэтому урок 4 говорит о
 * расхождении прямо: наречия бывают разного рода, и место зависит от рода.
 * Внутри ступени ссылки на наши модули законны (CLAUDE.md), и здесь без них
 * было бы хуже.
 *
 * ЗАОДНО СУЖЕНА ОДНА СТРОКА МОДУЛЯ 6. Врезка там писала «Место у наречия одно:
 * сразу после was» — слишком широко для трёх наречий времени. Стало «Место у
 * этого наречия одно». Модуль 6 выложен на боевой сайт, значит правка видимого
 * текста требует проверяющего и новой выкладки — сказано владельцу.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, ADVERBS adverbs and adverb phrases, «USE:
 *    MANNER» — «Can use a limited range of manner adverbs and adverb phrases to
 *    modify how something happens», примеры источника «… both the players played
 *    well», «Some of them can swim very fast». Это опора всего модуля.
 *
 * 2. A2, ADVERBS adverbs as modifiers, «FORM: MANNER, MODIFYING VERBS» — «Can
 *    use a limited range of manner adverbs to modify verbs», примеры «swam very
 *    fast», «I learned to use my phone very quickly and easily». Уроки 1–3.
 *
 * 3. A2, ADVERBS position, «FORM: END POSITION, MANNER» — «Can use manner
 *    adverbs in the usual end position», примеры «Please answer me quickly
 *    because there are only eleven tickets» и «My house is opposite the train
 *    station so you can find it easily». Это урок 4, и второй пример показывает
 *    главное: наречие идёт ПОСЛЕ того, над чем действие («find it easily»), а не
 *    между действием и вещью.
 *
 * 4. Cambridge English, A2 Key handbook, с. 52, Language specifications, раздел
 *    Adverbs: «Regular and irregular forms», «Manner: quickly, carefully, etc.»,
 *    «Pre-verbal, post-verbal and end-position adverbs». Второй источник, и он
 *    называет `carefully` прямо — то есть слово ступени, а не выше.
 *
 * 5. A2, ADJECTIVES position, «FORM: ATTRIBUTIVE (WITH NOUNS)» и «FORM:
 *    PREDICATIVE, WITH 'BE'» — на паре этих граф с графой о наречиях стоит урок
 *    5: прилагательное о человеке, наречие о действии.
 *
 * 6. Описания Совета Европы, с. 84, шкала «Notes, messages and forms», графа
 *    A2: «Can formulate short, simple notes and messages relating to matters in
 *    areas of immediate need». Опора урока письма.
 *
 * ОТКУДА ВЗЯТА ФОРМА, ЕСЛИ ГРАФЫ О НЕЙ НЕТ. English Grammar Profile описывает
 * употребление и место, но не морфологию: графы «наречие собирают из
 * прилагательного через -ly» я в нём не нашёл — искал по ADVERBS целиком и по
 * строке «-ly» по всему файлу. Форму даёт второй источник строкой «Regular and
 * irregular forms» в разделе Adverbs. Это «не нашёл», а не «нет».
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК:
 *
 * - `carefully`, `slowly`, `seriously` СТОЯТ В ПРИМЕРАХ ГРАФЫ B1 того же
 *   раздела («USE: MANNER», B1, и «FORM: MANNER, MODIFYING VERBS», B1). Но
 *   уровень там задан не словом, а оговоркой: A2 — «a limited range», B1 — «an
 *   increasing range». Модуль берёт ограниченный набор и держится его. Слово
 *   `carefully` вдобавок названо вторым источником прямо на A2, а `slowly`
 *   Oxford 3000 ставит на A2;
 * - сравнение наречий (`faster`, `more quickly`) — второй источник даёт его
 *   строкой «Comparative and superlative forms» в разделе Adverbs, но графы A2
 *   об этом в English Grammar Profile я не нашёл, а модули 14 и 15 уже заняты
 *   сравнением прилагательных. Отложено;
 * - `hardly` — слово, похожее на `hard`, но значащее совсем другое. Ученику
 *   рядом с `hard` оно опасно, и модуль его не берёт;
 * - наречия в середине при простом действии (`He always plays well`) — это
 *   наречия частоты, они на прошлой ступени, и модуль о них молчит.
 *
 * СЛОВАРЬ МОДУЛЯ. Счёт даёт `npm run kontrol`. Норма владельца от 20 августа —
 * не меньше тридцати карточек и не меньше пятнадцати новых для ступени.
 *
 * Слова собраны вокруг случая модуля: образ действия виден там, где что-то
 * делают на людях — в спорте и в музыке. Отсюда `runner`, `ski`, `hockey`,
 * `throw`, `jump`, `hit` и `jazz`, `rock`, `classical`, `instrument`, `singing`.
 *
 * КАРТОЧЕК СОРОК, А НЕ ТРИДЦАТЬ, И ВОСЕМЬ ИЗ НИХ — ОПОРНЫЕ СЛОВА САМОГО МОДУЛЯ.
 * Методист нашёл дыру, которую я бы не увидел: у слов `good`, `bad`, `easy`,
 * `well`, `fast`, `hard`, `sing`, `speak` не было карточки НИ В ОДНОМ модуле
 * ступени Elementary — все они даны только на прошлой ступени. А между
 * ступенями нет ссылок на память (решение владельца от 16 августа): человек,
 * пришедший сразу сюда, не встречал ни `good`, ни `bad`, ни `sing`. При этом
 * пара good — well держит весь урок 3, bad — badly весь урок 1, easy — easily
 * весь урок 2. Карточки добавлены, и это не добор нормы: без них модуль стоял
 * на словах, которых ученик не получал.
 *
 * Туда же `carefully`: слово стоит в заголовке урока 2, а карточки не имело.
 * Модуль 7 этой ступени даёт его со значением «осторожно» (о вождении), здесь
 * оно работает как «внимательно, аккуратно» — карточка называет оба.
 *
 * ЗНАЧЕНИЯ КАРТОЧЕК СВЕРЕНЫ СО СЛОВНИКОМ — урок модуля 16, где четыре карточки
 * стояли в значениях, которые словник ограничивает другими. Здесь: `rock` —
 * музыка («rock concert»), `fan` — болельщик («She's a football fan»), `act` —
 * глагол, `ski` — глагол, `running` — существительное, `musical` —
 * прилагательное («musical instrument»), а не «мюзикл».
 *
 * СНЯТО ПРИ ПОДБОРЕ: `soccer` и `baseball` — американские слова, курс держит
 * британскую норму; `politely` — Oxford его не знает, и в словнике A2 Key я его
 * не нашёл.
 */
const module: Module = {
  slug: "kak-eto-delaetsya",
  title: "Как это делается",

  outcomes: [
    "говорить, как идёт действие: He plays badly",
    "собирать наречие из прилагательного: easy — easily",
    "говорить well, fast и hard там, где нет окончания -ly",
    "ставить наречие в конец: I speak English well",
    "различать прилагательное и наречие: a good singer, sings well",
    "находить в заметке, как именно что-то делали",
    "слышать в разговоре, как что-то прошло",
    "проверять заметку: у каждого действия сказано, как",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, ADVERBS adverbs and adverb phrases: types and meanings, «USE: " +
        "MANNER»: «Can use a limited range of manner adverbs and adverb phrases to " +
        "modify how something happens», примеры источника — «… both the players " +
        "played well» и «Some of them can swim very fast». Это опора всего модуля. " +
        "A2, ADVERBS adverbs as modifiers, «FORM: MANNER, MODIFYING VERBS»: «Can " +
        "use a limited range of manner adverbs to modify verbs», примеры — «swam " +
        "very fast» и «I learned to use my phone very quickly and easily» — уроки " +
        "1–3. " +
        "A2, ADVERBS position, «FORM: END POSITION, MANNER»: «Can use manner " +
        "adverbs in the usual end position», примеры — «Please answer me quickly " +
        "because there are only eleven tickets» и «My house is opposite the train " +
        "station so you can find it easily» — урок 4. ВТОРОЙ ПРИМЕР И ЕСТЬ " +
        "ОСНОВАНИЕ УРОКА: наречие стоит после того, над чем действие («find it " +
        "easily»), а не между действием и вещью. " +
        "A2, ADJECTIVES position, «FORM: ATTRIBUTIVE (WITH NOUNS)» и «FORM: " +
        "PREDICATIVE, WITH 'BE'» — вместе с графой о наречиях держат урок 5. " +
        "ЧЕГО НЕТ И ПОЧЕМУ. Графы о том, КАК наречие собирается из " +
        "прилагательного, я в этом файле не нашёл — искал по разделу ADVERBS " +
        "целиком и по строке «-ly» по всему файлу. Это «не нашёл», а не «нет»: " +
        "форму даёт второй источник. " +
        "ОСТОРОЖНО С УРОВНЕМ СЛОВ. Слова `carefully`, `slowly`, `seriously` стоят " +
        "в примерах граф B1 того же раздела. Но уровень там задан не словом, а " +
        "оговоркой: A2 — «a limited range», B1 — «an increasing range». Модуль " +
        "берёт ограниченный набор. Сравнение наречий (`faster`, `more quickly`) " +
        "отложено: графы A2 о нём я не нашёл",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, раздел Adverbs: «Regular and irregular " +
        "forms» — на этой строке стоят уроки 2 и 3; «Manner: quickly, carefully, " +
        "etc.» — второй источник называет `carefully` прямо на A2, поэтому слово " +
        "берётся без оговорок; «Pre-verbal, post-verbal and end-position adverbs» " +
        "— урок 4. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ПИСЬМА «Пишем заметку о кружке». с. 66, шкала «Overall written " +
        "production», графа A2: «Can produce a series of simple phrases and " +
        "sentences linked with simple connectors like “and”, “but” and “because”». " +
        "Урок описан ею точнее некуда: четыре строки, и два наречия соединяются " +
        "словом and. " +
        "ОСТОРОЖНО, СПЕРВА ЗДЕСЬ СТОЯЛА ДРУГАЯ ШКАЛА, И ЭТО БЫЛА ОШИБКА. Я опёрся " +
        "на с. 84, «Notes, messages and forms», потому что русское «заметка» " +
        "совпало с английским note по словарю. Но эта шкала лежит в разделе " +
        "3.3.1.2 Written interaction, и её собственное описание на с. 83 говорит: " +
        "«This scale encompasses a range of transactional interactive writing… From " +
        "A2 the focus is on taking or leaving messages and writing/signing short " +
        "notes… to friends, service people, teachers». Это записка, оставленная " +
        "человеку, а наша заметка — текст для читателей. Нашёл методист. " +
        "ТА ЖЕ ПОДСТАНОВКА ЕСТЬ В МОДУЛЯХ 14 И 15 — там опоры уроков письма тоже " +
        "названы по «Notes, messages and forms». Разбирать их надо отдельно: у " +
        "модуля 14 это записка о выборе, и там шкала может оказаться верной. " +
        "ЖАНР ТОТ ЖЕ, ЧТО У УРОКА ЧТЕНИЯ этого модуля (`article`), поэтому новых " +
        "слов уроку письма не нужно",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Все сорок карточек модуля взяты из словника ступени. Подбор шёл через " +
        "`npm run slovo -- --zapas`. Новых для ступени тридцать одна; остальные " +
        "девять — опорные слова самого модуля (`good`, `bad`, `easy`, `well`, " +
        "`fast`, `hard`, `sing`, `speak`, `run`), которых на ступени Elementary не " +
        "было ни одной карточкой, хотя на них стоят уроки 1–3. Нашёл методист. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ОГРАНИЧИВАЮЩИМИ ПРИМЕРАМИ СЛОВНИКА — урок модуля 16, " +
        "где четыре карточки стояли в значениях, которые словник ограничивает " +
        "другими. Здесь: `rock (n)` • «rock concert» — музыка, а не камень; `fan " +
        "(n)` • «She's a football fan» — болельщик, а не вентилятор; `musical " +
        "(adj)` — прилагательное, а не «мюзикл»; `act (v)`, `ski (v)`, `throw " +
        "(v)`, `jump (v)`, `hit (v)` — глаголы; `running (n)`, `mark (n)`, `circle " +
        "(n)`, `drawing (n)` — существительные. " +
        "СНЯТЫ ПРИ ПОДБОРЕ: `soccer` и `baseball` — американские слова, а курс " +
        "держит британскую норму; `politely` — Oxford его не знает, и в словнике " +
        "A2 Key я его не нашёл; `loudly` и `quietly` в словнике не нашёл, но Oxford " +
        "3000 ставит оба на A2, и модуль их берёт",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə` (подтверждено владельцем 22 августа " +
        "2026), знак ударения перед слогом. " +
        "Слово `drawing` источник читает с лишним `r` — `dɹˈɔːɹɪŋ`; в словарях " +
        "этого `r` нет, и карточка даёт `/ˈdrɔːɪŋ/`. Слово `experiment` источник " +
        "начинает с `ɛk`, словари — с `ɪk`; курс уже держит второе (`explorer` в " +
        "модуле 15), и карточка даёт `/ɪkˈsperɪmənt/`",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "kak-delayut",
      title: "Как делают: He plays badly",
      estimatedMinutes: 15,
      outcome: "говорить, как идёт действие: He plays badly",
      vozvrat: [{ iz: "ochen-i-slishkom", zadanie: "z1-dopisat-quite" }],

      blocks: [
        {
          id: "zachem-obraz-deystviya",
          kind: "explain",
          text: [
            "Брат Даны играет на гитаре, и Дана хочет рассказать об этом другу.",
            "Сказать He plays мало: слушатель не знает, хорошо он играет или плохо.",
            "То, как идёт действие, называют образом действия.",
            "По-английски его называют отдельным словом после действия: He plays badly.",
          ],
        },
        {
          id: "iz-prilagatelnogo-v-narechie",
          kind: "table",
          caption: "Из прилагательного в наречие",
          zvuchat: [
            "He plays badly.",
            "He speaks slowly.",
            "She sings quietly.",
            "She sings loudly.",
            "She speaks clearly.",
          ],
          head: ["Прилагательное", "Как идёт действие"],
          rows: [
            ["bad", "He plays badly."],
            ["slow", "He speaks slowly."],
            ["quiet", "She sings quietly."],
            ["loud", "She sings loudly."],
            ["clear", "She speaks clearly."],
          ],
        },
        {
          id: "kak-sobrano-narechie",
          kind: "explain",
          text: [
            "К прилагательному прибавляют окончание -ly, и выходит наречие.",
            "Такое наречие называют наречием образа действия: оно говорит, КАК.",
            "Слово «наречие» в курсе уже было — в модуле 6, на словах just и still.",
            "Наречия бывают разные, и эти отвечают на вопрос «как».",
            "Прилагательное говорит, какой человек; наречие — как идёт его действие.",
          ],
        },
        {
          id: "ne-prilagatelnoe-pri-deystvii",
          kind: "note",
          tone: "mistake",
          text:
            "«He plays bad» — так не говорят.\n\nПри действии стоит наречие, а не " +
            "прилагательное: He plays badly.",
        },
        {
          id: "razgovor-o-brate",
          kind: "example",
          caption: "Разговор о брате",
          zvuchat: [
            "Does your brother play well? — No, he plays badly. But he sings loudly! — And your sister? — She sings quietly, and she speaks very clearly.",
          ],
          text:
            "Does your brother play well? — No, he plays badly. But he sings loudly! — And your sister? — She sings quietly, and she speaks very clearly.",
          explain:
            "Каждое наречие здесь стоит после действия и отвечает на вопрос «как». " +
            "Слово very перед наречием работает так же, как перед прилагательным.",
        },
        {
          id: "slovar-obraza-deystviya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "badly", translation: "плохо", example: "He plays badly.", hint: "/ˈbædli/" },
            { term: "slowly", translation: "медленно", example: "He speaks slowly.", hint: "/ˈsləʊli/" },
            { term: "quietly", translation: "тихо", example: "She sings quietly.", hint: "/ˈkwaɪətli/" },
            { term: "loudly", translation: "громко", example: "She sings loudly.", hint: "/ˈlaʊdli/" },
            { term: "clearly", translation: "чётко, ясно", example: "She speaks very clearly.", hint: "/ˈklɪəli/" },
            { term: "bad", translation: "плохой", example: "He is a bad singer.", hint: "/bæd/" },
            { term: "sing", translation: "петь", example: "She sings quietly.", hint: "/sɪŋ/" },
            { term: "speak", translation: "говорить", example: "He speaks slowly.", hint: "/spiːk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-slowly",
          kind: "gap",
          prompt: "Он говорит медленно. Допиши наречие.",
          before: "He speaks ",
          after: ".",
          answer: "slowly",
          hint: "Возьми прилагательное slow и прибавь окончание.",
          why:
            "He speaks slowly. Окончание -ly и делает из прилагательного наречие.",
        },
        {
          id: "z2-vybrat-narechie",
          kind: "choice",
          prompt: "Она поёт тихо. Какая запись верна?",
          options: [
            { text: "She sings quiet." },
            { text: "She sings quietly.", correct: true },
            { text: "She is quietly." },
          ],
          hint: "При действии стоит слово с окончанием -ly.",
          why:
            "She sings quietly. Слово quiet — прилагательное, оно сказало бы, какая " +
            "она, а не как она поёт.",
        },
        {
          id: "z3-otmetit-narechiya",
          kind: "hottext",
          prompt: "Отметь наречия образа действия.",
          parts: [
            { text: "badly", selectable: true, correct: true },
            { text: " · " },
            { text: "loud", selectable: true },
            { text: " · " },
            { text: "clearly", selectable: true, correct: true },
            { text: " · " },
            { text: "quiet", selectable: true },
          ],
          hint: "Наречие узнают по окончанию -ly.",
          why:
            "Наречия — badly и clearly. Слова loud и quiet стоят в форме " +
            "прилагательного и говорят, какой человек.",
        },
        {
          id: "z4-sobrat-o-sestre",
          kind: "order",
          prompt: "Собери строку: моя сестра поёт громко.",
          items: ["loudly.", "sings", "My sister"],
          answer: [2, 1, 0],
          hint: "Наречие идёт после действия.",
          why:
            "My sister sings loudly. Сначала кто, потом действие, потом уже как.",
        },
        {
          id: "z5-napisat-o-brate",
          kind: "short",
          prompt:
            "Брат играет плохо. Скажи это по-английски, начав с My brother.",
          answer: "My brother plays badly.",
          accept: ["My brother plays badly"],
          hint: "Наречие от bad кончается на -ly.",
          why:
            "My brother plays badly. Слово bad сказало бы, какой он человек, а " +
            "разговор о его игре.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-pishetsya-narechie",
      title: "Как пишется: easily, carefully",
      estimatedMinutes: 15,
      outcome: "собирать наречие из прилагательного: easy — easily",

      blocks: [
        {
          id: "zachem-pravopisanie",
          kind: "explain",
          text: [
            "Данияр учится бросать мяч и хочет сказать, что бросает легко.",
            "Прилагательное easy кончается на -y, и вместе с -ly вышло бы easyly.",
            "Так не пишут: буква y меняется на i, и выходит easily.",
            "Три случая ниже покрывают почти всё, что встретится.",
          ],
        },
        {
          id: "tri-sluchaya-napisaniya",
          kind: "table",
          caption: "Три случая написания",
          zvuchat: [
            "He throws the ball easily.",
            "She jumps happily.",
            "He hits the ball carefully.",
            "She speaks slowly.",
          ],
          head: ["Прилагательное", "Что происходит", "Наречие"],
          rows: [
            ["easy", "y меняется на i", "He throws the ball easily."],
            ["happy", "y меняется на i", "She jumps happily."],
            ["careful", "просто прибавили -ly", "He hits the ball carefully."],
            ["slow", "просто прибавили -ly", "She speaks slowly."],
          ],
        },
        {
          id: "pochemu-dve-l",
          kind: "explain",
          text: [
            "У слова careful на конце уже стоит одна буква l.",
            "Окончание -ly приносит вторую, и в наречии их две: carefully.",
            "Терять одну из них нельзя — это разные буквы разных частей слова.",
            "У слов без y и без l на конце ничего не меняется вовсе: slow — slowly.",
          ],
        },
        {
          id: "ne-easyly",
          kind: "note",
          tone: "mistake",
          text:
            "«He throws the ball easyly» — так не пишут.\n\nПеред окончанием буква " +
            "y меняется на i: easily.",
        },
        {
          id: "razgovor-na-trenirovke",
          kind: "example",
          caption: "Разговор на тренировке",
          zvuchat: [
            "Can you throw the ball? — Yes, I throw it easily. — And can you jump? — I jump happily, but I hit the ball badly. — Then hit it carefully.",
          ],
          text:
            "Can you throw the ball? — Yes, I throw it easily. — And can you jump? — I jump happily, but I hit the ball badly. — Then hit it carefully.",
          explain:
            "Наречия здесь собраны по-разному: у easily буква y сменилась на i, у " +
            "carefully сошлись две l, а badly не поменяло ничего.",
        },
        {
          id: "slovar-trenirovki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "easily", translation: "легко", example: "I throw it easily.", hint: "/ˈiːzɪli/" },
            { term: "throw", translation: "бросать", example: "Can you throw the ball?", hint: "/θrəʊ/" },
            { term: "jump", translation: "прыгать", example: "I jump happily.", hint: "/dʒʌmp/" },
            { term: "hit", translation: "ударять, бить", example: "Then hit it carefully.", hint: "/hɪt/" },
            { term: "easy", translation: "лёгкий", example: "The ball is easy for him.", hint: "/ˈiːzi/" },
            { term: "carefully", translation: "внимательно, аккуратно", example: "Then hit it carefully.", hint: "/ˈkeəfəli/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-easily",
          kind: "gap",
          prompt: "Он бросает мяч легко. Допиши наречие от слова easy.",
          before: "He throws the ball ",
          after: ".",
          answer: "easily",
          hint: "Буква y перед окончанием не остаётся.",
          why:
            "He throws the ball easily. Буква y сменилась на i, и только потом " +
            "встало окончание.",
        },
        {
          id: "z2-skolko-l",
          kind: "choice",
          prompt: "Наречие от слова careful. Какая запись верна?",
          options: [
            { text: "carefuly" },
            { text: "careful" },
            { text: "carefully", correct: true },
          ],
          hint: "Одна буква l от прилагательного, вторая от окончания.",
          why:
            "Carefully. Букв l ровно две: третья лишняя, а одной не хватает.",
        },
        {
          id: "z3-otmetit-verno-napisannye",
          kind: "hottext",
          prompt: "Отметь верно написанные наречия.",
          parts: [
            { text: "easily", selectable: true, correct: true },
            { text: " · " },
            { text: "happyly", selectable: true },
            { text: " · " },
            { text: "slowly", selectable: true, correct: true },
            { text: " · " },
            { text: "carefuly", selectable: true },
          ],
          hint: "Смотри на две вещи: букву y и число букв l.",
          why:
            "Верно написаны easily и slowly. В happyly осталась y, а в carefuly " +
            "потерялась одна l.",
        },
        {
          id: "z4-sobrat-o-pryzhke",
          kind: "order",
          prompt: "Собери строку: она прыгает радостно.",
          items: ["happily.", "jumps", "She"],
          answer: [2, 1, 0],
          hint: "Наречие идёт последним.",
          why:
            "She jumps happily. Наречие собрано из happy, и буква y в нём сменилась " +
            "на i.",
        },
        {
          id: "z5-napisat-o-udare",
          kind: "short",
          prompt:
            "Он бьёт по мячу аккуратно. Скажи это по-английски, начав с He hits the ball.",
          answer: "He hits the ball carefully.",
          accept: ["He hits the ball carefully"],
          hint: "Наречие от careful пишется с двумя буквами l.",
          why:
            "He hits the ball carefully. Одна l пришла из careful, вторая из " +
            "окончания.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "svoi-formy-narechiy",
      title: "Свои формы: well, fast, hard",
      estimatedMinutes: 14,
      outcome: "говорить well, fast и hard там, где нет окончания -ly",

      blocks: [
        {
          id: "zachem-svoi-formy",
          kind: "explain",
          text: [
            "Друг Даны бегает, и Дана хочет сказать, что бегает он хорошо.",
            "Прибавить -ly к good нельзя: у этого слова наречие своё — well.",
            "А слова fast и hard в роли наречия не меняются совсем.",
            "Выучить их проще, чем вывести: правила для них нет.",
          ],
        },
        {
          id: "tri-svoi-formy",
          kind: "table",
          caption: "Свои формы",
          zvuchat: [
            "He is a good runner.",
            "He runs well.",
            "She is fast.",
            "She skis fast.",
            "The work is hard.",
            "He works hard.",
          ],
          head: ["Прилагательное", "Наречие"],
          rows: [
            ["He is a good runner.", "He runs well."],
            ["She is fast.", "She skis fast."],
            ["The work is hard.", "He works hard."],
          ],
        },
        {
          id: "pochemu-tak",
          kind: "explain",
          text: [
            "Слово well — отдельное слово, и на good оно совсем не похоже.",
            "Слова fast и hard пишутся одинаково и прилагательным, и наречием.",
            "Отличить их можно по месту: при вещи это прилагательное, при действии наречие.",
            "Строка She is fast говорит о ней самой, а She skis fast — о том, как она едет.",
          ],
        },
        {
          id: "ne-goodly",
          kind: "note",
          tone: "mistake",
          text:
            "«He runs goodly» — так не говорят.\n\nНаречия goodly у слова good нет; " +
            "наречие от него — well: He runs well.",
        },
        {
          id: "razgovor-o-sporte",
          kind: "example",
          caption: "Разговор о спорте",
          zvuchat: [
            "Is your friend a good runner? — Yes, he runs well and he works hard. — Does he ski? — He skis fast, but running is his sport. — Does he play hockey too? — Badly!",
          ],
          text:
            "Is your friend a good runner? — Yes, he runs well and he works hard. — Does he ski? — He skis fast, but running is his sport. — Does he play hockey too? — Badly!",
          explain:
            "Слово good стоит при человеке, а well при действии. Слова fast и hard " +
            "не поменялись, и место в строке говорит, чем они здесь работают.",
        },
        {
          id: "slovar-sporta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "runner", translation: "бегун", example: "Is your friend a good runner?", hint: "/ˈrʌnə/" },
            { term: "running", translation: "бег", example: "Running is his sport.", hint: "/ˈrʌnɪŋ/" },
            { term: "ski", translation: "кататься на лыжах", example: "He skis fast.", hint: "/skiː/" },
            { term: "hockey", translation: "хоккей", example: "Does he play hockey too?", hint: "/ˈhɒki/" },
            { term: "good", translation: "хороший", example: "Is your friend a good runner?", hint: "/gʊd/" },
            { term: "well", translation: "хорошо", example: "He runs well.", hint: "/wel/" },
            { term: "fast", translation: "быстрый; быстро", example: "He skis fast.", hint: "/fɑːst/" },
            { term: "hard", translation: "трудный; много и усердно", example: "He works hard.", hint: "/hɑːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-well",
          kind: "gap",
          prompt: "Он бегает хорошо. Допиши наречие.",
          before: "He runs ",
          after: ".",
          answer: "well",
          hint: "У слова good наречие своё, и на -ly оно не кончается.",
          why: "He runs well. Слова goodly в языке нет вовсе.",
        },
        {
          id: "z2-good-ili-well",
          kind: "choice",
          prompt: "Он хороший бегун. Какая запись верна?",
          options: [
            { text: "He is a well runner." },
            { text: "He is a good runner.", correct: true },
            { text: "He is a goodly runner." },
          ],
          hint: "Здесь слово стоит при человеке, а не при действии.",
          why:
            "He is a good runner. Слово well работает при действии, а бегуна " +
            "называют good.",
        },
        {
          id: "z3-otmetit-narechiya-v-strokah",
          kind: "hottext",
          prompt: "Отметь строки, где слово говорит о действии.",
          parts: [
            { text: "He runs well.", selectable: true, correct: true },
            { text: " · " },
            { text: "He is a good runner.", selectable: true },
            { text: " · " },
            { text: "She skis fast.", selectable: true, correct: true },
            { text: " · " },
            { text: "She is fast.", selectable: true },
          ],
          hint: "Спроси у каждой строки: она о человеке или о том, что он делает?",
          why:
            "О действии говорят первая и третья строки. Вторая и четвёртая " +
            "рассказывают о самом человеке.",
        },
        {
          id: "z4-sobrat-o-rabote",
          kind: "order",
          prompt: "Собери строку: мой брат работает много.",
          items: ["hard.", "works", "My brother"],
          answer: [2, 1, 0],
          hint: "Слово hard в роли наречия не меняется.",
          why:
            "My brother works hard. Окончание -ly здесь не нужно: слово и так " +
            "работает наречием.",
        },
        {
          id: "z5-napisat-o-lyzhah",
          kind: "short",
          prompt:
            "Она катается на лыжах быстро. Скажи это по-английски, начав с She.",
          answer: "She skis fast.",
          accept: ["She skis fast"],
          hint: "Слово fast в роли наречия остаётся таким же.",
          why:
            "She skis fast. Записи fastly в языке нет, и менять слово не нужно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-stoit-narechie-obraza",
      title: "Где стоит: I speak English well",
      estimatedMinutes: 15,
      outcome: "ставить наречие в конец: I speak English well",

      blocks: [
        {
          id: "zachem-mesto",
          kind: "explain",
          text: [
            "Дана хочет сказать, что говорит по-английски хорошо.",
            "По-английски это I speak English well: сначала действие, потом язык, и только потом как.",
            "Обычное место наречия образа действия — конец строки.",
            "Если после действия стоит вещь, наречие идёт после неё, а не перед ней.",
          ],
        },
        {
          id: "narechie-v-konce",
          kind: "table",
          caption: "Наречие в конце",
          zvuchat: [
            "He sings well.",
            "I speak English well.",
            "She plays an instrument badly.",
            "You can find it easily.",
          ],
          head: ["Строка", "Что стоит перед наречием"],
          rows: [
            ["He sings well.", "только действие"],
            ["I speak English well.", "действие и язык"],
            ["She plays an instrument badly.", "действие и вещь"],
            ["You can find it easily.", "действие и слово it"],
          ],
        },
        {
          id: "raznye-narechiya-raznye-mesta",
          kind: "explain",
          text: [
            "В модуле 6 наречие стояло в середине: I was just watching a film.",
            "Здесь оно стоит в конце, и противоречия тут нет.",
            "Наречия бывают разные, и место зависит от того, о чём наречие говорит.",
            "Слова just и still говорят про время, и их место в середине.",
            "Слова well, badly, easily говорят про образ действия, и их место в конце.",
          ],
        },
        {
          id: "ne-mezhdu-deystviem-i-veshchyu",
          kind: "note",
          tone: "mistake",
          text:
            "«I speak well English» — так не говорят.\n\nНаречие идёт после языка, " +
            "а не перед ним: I speak English well.",
        },
        {
          id: "razgovor-o-muzyke",
          kind: "example",
          caption: "Разговор о музыке",
          zvuchat: [
            "Do you like jazz? — I like rock more. — Does your friend play an instrument? — He plays classical music badly, but he sings rock loudly. — And his singing?",
          ],
          text:
            "Do you like jazz? — I like rock more. — Does your friend play an instrument? — He plays classical music badly, but he sings rock loudly. — And his singing?",
          explain:
            "Наречие каждый раз стоит последним: после instrument, после music, " +
            "после rock. Вещь всегда идёт раньше него.",
        },
        {
          id: "slovar-muzyki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "jazz", translation: "джаз", example: "Do you like jazz?", hint: "/dʒæz/" },
            { term: "rock", translation: "рок", example: "I like rock more.", hint: "/rɒk/" },
            { term: "classical", translation: "классический", example: "He plays classical music badly.", hint: "/ˈklæsɪkl/" },
            { term: "instrument", translation: "музыкальный инструмент", example: "Does your friend play an instrument?", hint: "/ˈɪnstrəmənt/" },
            { term: "singing", translation: "пение", example: "And his singing?", hint: "/ˈsɪŋɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-poryadok",
          kind: "choice",
          prompt: "Он хорошо говорит по-русски. Какая запись верна?",
          options: [
            { text: "He speaks well Russian." },
            { text: "He speaks Russian good." },
            { text: "He speaks Russian well.", correct: true },
          ],
          hint: "Наречие идёт после языка, а не до него.",
          why:
            "He speaks Russian well. Между действием и языком наречие не встаёт: язык " +
            "идёт раньше него.",
        },
        {
          id: "z2-dopisat-badly",
          kind: "gap",
          prompt: "Она играет на инструменте плохо. Допиши наречие.",
          before: "She plays an instrument ",
          after: ".",
          answer: "badly",
          hint: "Место у наречия последнее — после самого инструмента.",
          why:
            "She plays an instrument badly. Наречие идёт после вещи, над которой " +
            "действие.",
        },
        {
          id: "z3-otmetit-vernyy-poryadok",
          kind: "hottext",
          prompt: "Отметь строки с верным порядком слов.",
          parts: [
            { text: "He sings rock loudly.", selectable: true, correct: true },
            { text: " · " },
            { text: "He sings loudly rock.", selectable: true },
            { text: " · " },
            { text: "You can find it easily.", selectable: true, correct: true },
            { text: " · " },
            { text: "You can find it easy.", selectable: true },
          ],
          hint: "Проверь, что стоит между действием и вещью.",
          why:
            "Верны первая и третья строки. В остальных наречие влезло между " +
            "действием и вещью, а там ему места нет.",
        },
        {
          id: "z4-sobrat-o-dzhaze",
          kind: "order",
          prompt: "Собери строку: она играет джаз хорошо.",
          items: ["well.", "jazz", "She plays"],
          answer: [2, 1, 0],
          hint: "Наречие последнее, а джаз идёт перед ним.",
          why:
            "She plays jazz well. Порядок один и тот же: кто, действие, вещь, как.",
        },
        {
          id: "z5-napisat-o-klassike",
          kind: "short",
          prompt:
            "Он играет классическую музыку плохо. Скажи это по-английски, начав с He plays.",
          answer: "He plays classical music badly.",
          accept: ["He plays classical music badly"],
          hint: "Сначала музыка, потом наречие.",
          why:
            "He plays classical music badly. Наречие ушло в конец, за саму музыку.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kakoy-ili-kak",
      title: "Какой или как: a good singer, sings well",
      estimatedMinutes: 15,
      outcome: "различать прилагательное и наречие: a good singer, sings well",

      blocks: [
        {
          id: "zachem-razlichat",
          kind: "explain",
          text: [
            "Об одном и том же человеке говорят двумя способами.",
            "Можно назвать его самого: He is a good singer.",
            "А можно сказать про его дело: He sings well.",
            "Слово при человеке и слово при действии разные, и путать их нельзя.",
          ],
        },
        {
          id: "pri-cheloveke-i-pri-deystvii",
          kind: "table",
          caption: "При человеке и при действии",
          zvuchat: [
            "He is a good singer.",
            "He sings well.",
            "She is a quiet journalist.",
            "She speaks quietly.",
            "He is a bad singer.",
            "He sings badly.",
          ],
          head: ["При человеке", "При действии"],
          rows: [
            ["He is a good singer.", "He sings well."],
            ["She is a quiet journalist.", "She speaks quietly."],
            ["He is a bad singer.", "He sings badly."],
          ],
        },
        {
          id: "kak-vybrat",
          kind: "explain",
          text: [
            "Выбирают по вопросу: «какой он?» — прилагательное, «как он делает?» — наречие.",
            "Когда выбираешь между bad и badly, смотри на слово слева.",
            "После is и are бери bad: речь пойдёт о самом человеке.",
            "После действия бери badly: речь пойдёт о том, как это действие идёт.",
          ],
        },
        {
          id: "ne-narechie-posle-is",
          kind: "note",
          tone: "mistake",
          text:
            "«He is badly» — так не говорят о плохом певце.\n\nПосле is стоит " +
            "прилагательное: He is bad. А о деле говорят He sings badly.",
        },
        {
          id: "razgovor-o-koncerte",
          kind: "example",
          caption: "Разговор о концерте",
          zvuchat: [
            "Is he a good singer? — He sings well, but he acts badly. — And the musical family next door? — The son is a quiet journalist, and he speaks very quietly. His fan club is small.",
          ],
          text:
            "Is he a good singer? — He sings well, but he acts badly. — And the musical family next door? — The son is a quiet journalist, and he speaks very quietly. His fan club is small.",
          explain:
            "Слова good, quiet и musical стоят при людях и вещах, а well, badly и " +
            "quietly — при действиях. Один и тот же смысл, две разные формы.",
        },
        {
          id: "slovar-professiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "journalist", translation: "журналист", example: "The son is a quiet journalist.", hint: "/ˈdʒɜːnəlɪst/" },
            { term: "act", translation: "играть роль", example: "He acts in films.", hint: "/ækt/" },
            { term: "musical", translation: "музыкальный", example: "He plays a musical instrument.", hint: "/ˈmjuːzɪkl/" },
            { term: "fan", translation: "болельщик, поклонник", example: "She is a football fan.", hint: "/fæn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-po-voprosu",
          kind: "choice",
          prompt: "Он хороший певец. Какая запись верна?",
          options: [
            { text: "He is a well singer." },
            { text: "He sings a good singer." },
            { text: "He is a good singer.", correct: true },
          ],
          hint: "Спроси себя: строка о самом человеке или о его деле?",
          why:
            "He is a good singer. Строка о самом певце, а well работает только при " +
            "действии.",
        },
        {
          id: "z2-dopisat-quietly",
          kind: "gap",
          prompt: "Она говорит тихо. Допиши слово при действии.",
          before: "She speaks ",
          after: ".",
          answer: "quietly",
          hint: "Речь о том, как идёт разговор, а не о ней самой.",
          why:
            "She speaks quietly. Слово quiet сказало бы, какая она, а спрошено о " +
            "речи.",
        },
        {
          id: "z3-otmetit-o-cheloveke",
          kind: "hottext",
          prompt: "Отметь строки, где сказано о самом человеке.",
          parts: [
            { text: "He is a bad actor.", selectable: true, correct: true },
            { text: " · " },
            { text: "He acts badly.", selectable: true },
            { text: " · " },
            { text: "She is a quiet journalist.", selectable: true, correct: true },
            { text: " · " },
            { text: "She speaks quietly.", selectable: true },
          ],
          hint: "Смотри, что стоит перед словом: is или действие.",
          why:
            "О человеке говорят первая и третья строки. Во второй и четвёртой речь " +
            "о деле, и потому там наречие.",
        },
        {
          id: "z4-sobrat-o-zhurnaliste",
          kind: "order",
          prompt: "Собери строку: она тихий журналист.",
          items: ["journalist.", "is a quiet", "She"],
          answer: [2, 1, 0],
          hint: "После is стоит прилагательное, а за ним сам человек.",
          why:
            "She is a quiet journalist. Наречие quietly сюда не встанет: речь о " +
            "ней самой.",
        },
        {
          id: "z5-perepisat-o-dele",
          kind: "short",
          prompt:
            "Строку He is a bad singer перепиши так, чтобы она была о его пении. Начни с He.",
          answer: "He sings badly.",
          accept: ["He sings badly"],
          hint: "Слово bad придётся сменить на наречие.",
          why:
            "He sings badly. Строка о самом человеке стала строкой о деле, и потому " +
            "прилагательное сменилось наречием.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-zametku-o-prazdnike",
      title: "Читаем заметку о празднике",
      estimatedMinutes: 13,
      outcome: "находить в заметке, как именно что-то делали",

      blocks: [
        {
          id: "zachem-chitat-zametku",
          kind: "explain",
          text: [
            "В школьной газете вышла заметка о празднике.",
            "В такой заметке ищут не только что было, но и как это прошло.",
            "Подсказывают это наречия: они стоят после действий.",
            "Ниже заметка, и вопросы будут о том, как всё прошло.",
          ],
        },
        {
          id: "zametka-o-prazdnike",
          kind: "text",
          title: "SCHOOL DAY",
          genre: "article",
          body: [
            "The school day started slowly. The rain was heavy and the buses came late.",
            "Then the concert started. The first group played classical music very well.",
            "The second group sang rock loudly, and the fans jumped happily.",
            "One boy played his instrument badly, but everybody clapped.",
            "After the concert there was a hockey match. The national team came to watch it.",
            "Our runners ran fast, and our team won easily.",
            "The teacher gave every player a good mark.",
            "Next year we want to do it all again.",
          ],
          glossary: [
            { term: "sang", translation: "пели (от sing)" },
            { term: "ran", translation: "бежали (от run)" },
            { term: "clapped", translation: "хлопали" },
            { term: "national team", translation: "сборная страны" },
            { term: "won", translation: "выиграли" },
            { term: "every player", translation: "каждый игрок" },
          ],
        },
        {
          id: "kak-iskat-obraz-deystviya",
          kind: "note",
          tone: "info",
          text:
            "Наречие ищут сразу после действия или в самом конце строки.\n\nЧаще " +
            "всего оно кончается на -ly, но well, fast и hard так не кончаются.",
        },
        {
          id: "slovar-zametki-o-prazdnike",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "mark", translation: "оценка", example: "The teacher gave every player a good mark.", hint: "/mɑːk/" },
            { term: "national", translation: "государственный", example: "The national team came to watch it.", hint: "/ˈnæʃnəl/" },
            { term: "run", translation: "бежать", example: "Our runners ran fast.", hint: "/rʌn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kak-igrala-pervaya-gruppa",
          about: "zametka-o-prazdnike",
          kind: "short",
          prompt:
            "Как играла первая группа? Ответь одним словом по-английски.",
          answer: "well",
          accept: ["Well", "very well"],
          hint: "Наречие стоит в самом конце той строки.",
          why: "The first group played classical music very well.",
        },
        {
          id: "z2-kak-nachalsya-den",
          about: "zametka-o-prazdnike",
          kind: "choice",
          prompt: "Как начался школьный день?",
          options: [
            { text: "Медленно: был дождь и автобусы опоздали.", correct: true },
            { text: "Быстро и весело." },
            { text: "С хоккейного матча." },
          ],
          hint: "Ответ стоит в самой первой строке заметки.",
          why:
            "Медленно. The school day started slowly, а матч был уже после " +
            "концерта.",
        },
        {
          id: "z3-kak-vyigrala-komanda",
          about: "zametka-o-prazdnike",
          kind: "short",
          prompt: "Как команда выиграла матч? Ответь одним словом по-английски.",
          answer: "easily",
          accept: ["Easily"],
          hint: "Наречие стоит в конце строки о матче.",
          why: "Our runners ran fast, and our team won easily.",
        },
        {
          id: "z4-otmetit-verno-o-zametke",
          about: "zametka-o-prazdnike",
          kind: "hottext",
          prompt: "Отметь то, что верно по заметке.",
          parts: [
            { text: "вторая группа пела громко", selectable: true, correct: true },
            { text: " · " },
            { text: "один мальчик играл плохо", selectable: true, correct: true },
            { text: " · " },
            { text: "автобусы пришли вовремя", selectable: true },
            { text: " · " },
            { text: "бегуны бежали медленно", selectable: true },
          ],
          hint: "Про автобусы и про бегунов в заметке сказано прямо.",
          why:
            "Верно первое и второе. Автобусы опоздали, а бегуны бежали быстро — " +
            "fast, а не slowly.",
        },
        {
          id: "z5-kakuyu-otsenku",
          about: "zametka-o-prazdnike",
          kind: "choice",
          prompt: "Какую оценку учитель поставил игрокам?",
          options: [
            { text: "Разные: кому как." },
            { text: "Плохую." },
            { text: "Хорошую, и всем одинаковую.", correct: true },
          ],
          hint: "Оценка названа в предпоследней строке заметки.",
          why:
            "Хорошую, и всем одинаковую: The teacher gave every player a good mark.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-kak-proshlo",
      title: "Слушаем, как прошёл опыт",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, как что-то прошло",

      blocks: [
        {
          id: "zachem-slushat-ob-opyte",
          kind: "explain",
          text: [
            "Двое обсуждают урок науки: там ставили опыт.",
            "Слушать надо, как всё прошло, а не только что делали.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-ob-opyte",
          kind: "audio",
          caption: "Разговор об опыте",
          pace: "slow",
          skryt: true,
          transcript:
            "How was the experiment? — It started badly. We worked too slowly. — " +
            "And then? — Then we read the book carefully, and it worked easily. — " +
            "So you discovered it? — Yes. Our teacher says people invent " +
            "things slowly, and every invention starts like this.",
        },
        {
          id: "chto-slushat-ob-opyte",
          kind: "note",
          tone: "info",
          text:
            "Слушай, как опыт начался и как кончился.\n\nОба ответа стоят сразу " +
            "после действий, и об этом будут вопросы.",
        },
        {
          id: "slovar-nauki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "experiment", translation: "опыт", example: "How was the experiment?", hint: "/ɪkˈsperɪmənt/" },
            { term: "discover", translation: "узнавать, открывать", example: "So you discovered it?", hint: "/dɪˈskʌvə/" },
            { term: "invent", translation: "изобретать", example: "People invent things slowly.", hint: "/ɪnˈvent/" },
            { term: "invention", translation: "изобретение", example: "Every invention starts like this.", hint: "/ɪnˈvenʃn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kak-nachalsya-opyt",
          about: "zapis-ob-opyte",
          kind: "short",
          prompt: "Как начался опыт? Ответь одним словом по-английски.",
          answer: "badly",
          accept: ["Badly"],
          hint: "Ответ стоит во второй реплике записи.",
          why: "It started badly. We worked too slowly.",
        },
        {
          id: "z2-chto-oni-sdelali-potom",
          about: "zapis-ob-opyte",
          kind: "choice",
          prompt: "Что они сделали потом?",
          options: [
            { text: "Позвали учителя." },
            { text: "Внимательно прочитали книгу.", correct: true },
            { text: "Начали опыт заново." },
          ],
          hint: "Про книгу сказано сразу после слова «then».",
          why:
            "Внимательно прочитали книгу: Then we read the book carefully. Учитель " +
            "в записи говорит другое, и уже в конце.",
        },
        {
          id: "z3-kak-vsyo-poluchilos",
          about: "zapis-ob-opyte",
          kind: "short",
          prompt: "Как в итоге всё получилось? Ответь одним словом по-английски.",
          answer: "easily",
          accept: ["Easily"],
          hint: "Наречие стоит в конце той же реплики, где книга.",
          why: "Then we read the book carefully, and it worked easily.",
        },
        {
          id: "z4-otmetit-uslyshannoe-ob-opyte",
          about: "zapis-ob-opyte",
          kind: "hottext",
          prompt: "Отметь то, что сказано в записи.",
          parts: [
            { text: "сначала работали слишком медленно", selectable: true, correct: true },
            { text: " · " },
            { text: "книгу читали внимательно", selectable: true, correct: true },
            { text: " · " },
            { text: "опыт так и не вышел", selectable: true },
            { text: " · " },
            { text: "учитель ставил опыт сам", selectable: true },
          ],
          hint: "Про то, вышел ли опыт, сказано прямо.",
          why:
            "Сказано первое и второе. Опыт в итоге вышел, а учитель только " +
            "рассказал, как это бывает.",
        },
        {
          id: "z5-skazat-vsluh-ob-opyte",
          kind: "speak",
          prompt: "Скажи вслух: мы работали слишком медленно.",
          phrase: "We worked too slowly.",
          translation: "Мы работали слишком медленно.",
          hint: "Наречие идёт последним, после слова too.",
          why:
            "We worked too slowly. Слово too меряет наречие, а само наречие стоит " +
            "после действия.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-zametku-o-kruzhke",
      title: "Пишем заметку о кружке",
      estimatedMinutes: 15,
      outcome: "проверять заметку: у каждого действия сказано, как",

      blocks: [
        {
          id: "zachem-proveryat-zametku-o-kruzhke",
          kind: "explain",
          text: [
            "Данияр написал заметку о кружке рисования, и читатель не понял, идти туда или нет.",
            "В такой заметке пропускают не действия, а образ действия.",
            "Строка We draw говорит, чем там занимаются, но не говорит, как проходит занятие.",
            "Проверить можно так: у каждого действия найди слово, отвечающее на «как».",
          ],
        },
        {
          id: "skazano-li-kak",
          kind: "table",
          caption: "Сказано ли как",
          zvuchat: [
            "We draw slowly and carefully.",
            "We draw.",
            "The teacher speaks quietly.",
            "The teacher speaks.",
          ],
          head: ["Строка", "Сказано как", "Годится в заметке"],
          rows: [
            ["We draw slowly and carefully.", "медленно и внимательно", "да"],
            ["We draw.", "не сказано", "нет"],
            ["The teacher speaks quietly.", "тихо", "да"],
            ["The teacher speaks.", "не сказано", "нет"],
          ],
        },
        {
          id: "kogda-kak-ne-nuzhno",
          kind: "explain",
          text: [
            "Наречие нужно не в каждой строке заметки.",
            "Там, где называют вещь или время, отвечать на «как» нечему.",
            "Строка The club meets on Friday говорит когда, и этого довольно.",
            "А вот у действий, ради которых человек придёт, образ действия называют.",
            "И последнее об этих строках: два наречия подряд соединяют словом and.",
            "Выходит slowly and carefully — оба стоят после действия.",
          ],
        },
        {
          id: "obrazets-zametki-o-kruzhke",
          kind: "example",
          caption: "Заметка Данияра",
          zvuchat: [
            "Our drawing club meets on Friday.",
            "We draw slowly and carefully, and we talk quietly.",
            "The teacher speaks quietly and shows everything clearly.",
            "New people learn fast here.",
          ],
          text:
            "Our drawing club meets on Friday.\nWe draw slowly and carefully, and we talk quietly.\nThe teacher speaks quietly and shows everything clearly.\nNew people learn fast here.",
          explain:
            "У каждого действия заметки сказано, как оно идёт. Первая строка " +
            "называет день, и наречия ей не нужно. Последнее наречие — fast — " +
            "собрано без окончания.",
        },
        {
          id: "slovar-kruzhka",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "drawing", translation: "рисование", example: "Our drawing club meets on Friday.", hint: "/ˈdrɔːɪŋ/" },
            { term: "circle", translation: "круг", example: "We draw a circle slowly.", hint: "/ˈsɜːkl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-zametke",
          kind: "choice",
          prompt:
            "В заметке стоит одна строка: We draw. Чего в ней не хватает читателю?",
          options: [
            { text: "Слова о том, как проходит занятие.", correct: true },
            { text: "Дня недели." },
            { text: "Названия клуба." },
          ],
          hint: "Спроси себя, что читатель хочет узнать перед тем, как прийти.",
          why:
            "Слова о том, как проходит занятие. День и название важны тоже, но " +
            "заметка о кружке живёт именно образом действия.",
        },
        {
          id: "z2-dopisat-narechie-v-zametku",
          kind: "gap",
          prompt: "Допиши: учитель говорит тихо.",
          before: "The teacher speaks ",
          after: ".",
          answer: "quietly",
          hint: "Наречие собрано из прилагательного quiet.",
          why:
            "The teacher speaks quietly. Слово quiet сказало бы, какой он человек, " +
            "а строка о занятии.",
        },
        {
          id: "z3-otmetit-polnye-stroki-zametki",
          kind: "hottext",
          prompt: "Отметь строки, где сказано, как идёт действие.",
          parts: [
            { text: "New people learn easily here.", selectable: true, correct: true },
            { text: " · " },
            { text: "New people learn here.", selectable: true },
            { text: " · " },
            { text: "He shows everything clearly.", selectable: true, correct: true },
            { text: " · " },
            { text: "He shows everything.", selectable: true },
          ],
          hint: "Ищи слово, отвечающее на вопрос «как».",
          why:
            "Сказано в первой и третьей строках. Во второй и четвёртой названо " +
            "только действие.",
        },
        {
          id: "z4-soedinit-dva-narechiya",
          kind: "short",
          prompt:
            "Строку We draw a circle допиши так, чтобы вышло: рисуем круг медленно и внимательно. Запиши строку целиком.",
          answer: "We draw a circle slowly and carefully.",
          accept: [
            "We draw a circle slowly and carefully",
            "We draw a circle carefully and slowly.",
            "We draw a circle carefully and slowly",
          ],
          hint: "Два наречия соединяют словом and.",
          why:
            "We draw a circle slowly and carefully. Оба наречия стоят после круга, и " +
            "порядок между ними свободный.",
        },
        {
          id: "z5-napisat-zametku-o-kruzhke",
          kind: "essay",
          prompt:
            "Напиши заметку о своём кружке четырьмя строками. В первой назови день, а в остальных трёх скажи о действиях и о том, как они идут. Хотя бы одно наречие возьми без окончания -ly.",
          minWords: 14,
          sample:
            "Our drawing club meets on Friday.\nWe draw slowly and carefully, and we talk quietly.\nThe teacher speaks quietly and shows everything clearly.\nNew people learn fast here.",
          checklist: [
            "в первой строке назван день",
            "в остальных строках есть действия",
            "у каждого действия сказано, как оно идёт",
            "хотя бы одно наречие без окончания -ly: well, fast или hard",
          ],
          hint:
            "Бери наречия, которые знаешь: slowly, carefully, quietly, clearly, easily, well, fast, hard.",
          why:
            "Заметка работает, когда читатель узнаёт не только чем занимаются, но " +
            "и как проходит занятие.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, переписать строку с другого конца,
      // услышать разговор, дописать пропущенное.

      // ---- итог 1 ----
      {
        id: "q-zachem-narechie-obraza",
        kind: "choice",
        outcome: "говорить, как идёт действие: He plays badly",
        prompt:
          "Две строки: He plays и He plays badly. Что добавляет второе слово?",
        options: [
          { text: "Оно говорит, как идёт игра.", correct: true },
          { text: "Оно говорит, когда он играет." },
          { text: "Оно говорит, на чём он играет." },
        ],
        hint: "Спроси себя, на какой вопрос отвечает слово badly.",
        why:
          "Оно говорит, как идёт игра. Время и инструмент наречие образа действия " +
          "не называет.",
      },
      {
        id: "q-ispravit-prilagatelnoe-pri-deystvii",
        kind: "short",
        outcome: "говорить, как идёт действие: He plays badly",
        prompt:
          "Ученик написал: My sister sings loud. Запиши строку без ошибки.",
        answer: "My sister sings loudly.",
        accept: ["My sister sings loudly"],
        hint: "При действии стоит не прилагательное.",
        why:
          "My sister sings loudly. Слово loud сказало бы, какая она, а строка о " +
          "пении.",
      },

      // ---- итог 2 ----
      {
        id: "q-pochemu-y-menyaetsya",
        kind: "choice",
        outcome: "собирать наречие из прилагательного: easy — easily",
        prompt:
          "Почему у слова easy в наречии на месте y стоит i — easily?",
        options: [
          { text: "Потому что так короче писать." },
          { text: "Потому что перед окончанием y меняется на i.", correct: true },
          { text: "Потому что буква y не читается." },
        ],
        hint: "Посмотри, какая буква стоит перед окончанием.",
        why:
          "Потому что перед окончанием y меняется на i. То же случилось со словом " +
          "happy: happily.",
      },
      {
        id: "q-ispravit-poteryannuyu-l",
        kind: "short",
        outcome: "собирать наречие из прилагательного: easy — easily",
        prompt:
          "Ученик написал: She listens carefuly. Запиши строку без ошибки.",
        answer: "She listens carefully.",
        accept: ["She listens carefully"],
        hint: "В наречии не хватает одной буквы.",
        why:
          "She listens carefully. Одна буква l пришла из careful, вторая из " +
          "окончания, и терять их нельзя.",
      },

      // ---- итог 3 ----
      {
        id: "q-ispravit-goodly",
        kind: "short",
        outcome: "говорить well, fast и hard там, где нет окончания -ly",
        prompt:
          "Ученик написал: Our team played goodly. Запиши строку без ошибки.",
        answer: "Our team played well.",
        accept: ["Our team played well"],
        hint: "У слова good наречие своё, и оно ни на что не похоже.",
        why:
          "Our team played well. Наречия goodly у слова good нет: у него своё " +
          "слово — well.",
      },
      {
        id: "q-fastly-ili-fast",
        kind: "choice",
        outcome: "говорить well, fast и hard там, где нет окончания -ly",
        prompt: "Он бегает быстро. Какая запись верна?",
        options: [
          { text: "He runs fastly." },
          { text: "He runs fast.", correct: true },
          { text: "He runs good." },
        ],
        hint: "Одно из трёх слов в роли наречия не меняется вовсе.",
        why:
          "He runs fast. Слово fast работает наречием без всякого окончания.",
      },
      {
        id: "q-fast-eto-kakoe-slovo",
        kind: "short",
        outcome: "говорить well, fast и hard там, где нет окончания -ly",
        prompt:
          "В строке She is fast слово fast работает прилагательным или наречием? Ответь одним словом.",
        answer: "прилагательным",
        accept: ["Прилагательным", "прилагательное"],
        hint: "Посмотри, что стоит перед словом fast: is или действие.",
        why:
          "Прилагательным. Перед fast стоит is, а значит строка о ней самой, а не " +
          "о том, как она едет.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-mesto-narechiya",
        kind: "short",
        outcome: "ставить наречие в конец: I speak English well",
        prompt:
          "Ученик написал: She plays badly an instrument. Запиши строку без ошибки.",
        answer: "She plays an instrument badly.",
        accept: ["She plays an instrument badly"],
        hint: "Наречие влезло не туда.",
        why:
          "She plays an instrument badly. Между действием и вещью наречию места " +
          "нет: оно идёт последним.",
      },
      {
        id: "q-pochemu-mesta-raznye",
        kind: "choice",
        outcome: "ставить наречие в конец: I speak English well",
        prompt:
          "В строке I was just watching наречие стоит в середине, а в строке I speak English well — в конце. Почему?",
        options: [
          { text: "Потому что первая строка о прошлом." },
          { text: "Потому что слово well длиннее." },
          { text: "Потому что just отвечает на «когда», а well — на «как».", correct: true },
        ],
        hint: "Задай каждому из двух слов вопрос: «когда» или «как»?",
        why:
          "Потому что вопросы у них разные. От вопроса и зависит место: «когда» — " +
          "в середину, «как» — в конец.",
      },

      {
        id: "q-kuda-vstanet-bez-veshchi",
        kind: "short",
        outcome: "ставить наречие в конец: I speak English well",
        prompt:
          "В строке She sings rock loudly слово loudly стоит последним. Запиши эту строку без слова rock.",
        answer: "She sings loudly.",
        accept: ["She sings loudly"],
        hint: "Наречие остаётся там же, где стояло: в конце.",
        why:
          "She sings loudly. Вещь из строки ушла, а место наречия от этого не " +
          "изменилось.",
      },

      // ---- итог 5 ----
      {
        id: "q-ispravit-narechie-pri-veshchi",
        kind: "short",
        outcome: "различать прилагательное и наречие: a good singer, sings well",
        prompt:
          "Ученик написал: She is a quietly journalist. Запиши строку без ошибки.",
        answer: "She is a quiet journalist.",
        accept: ["She is a quiet journalist"],
        hint: "Окончание -ly тут лишнее: строка о самом человеке.",
        why:
          "She is a quiet journalist. Наречие встаёт при действии, а перед словом " +
          "journalist нужно прилагательное.",
      },
      {
        id: "q-perepisat-o-cheloveke",
        kind: "short",
        outcome: "различать прилагательное и наречие: a good singer, sings well",
        prompt:
          "Строку She speaks quietly перепиши так, чтобы она была о ней самой, а не о её речи. Она работает журналистом. Начни с She is.",
        answer: "She is a quiet journalist.",
        accept: [
          "She is a quiet journalist",
          "She is quiet.",
          "She is quiet",
        ],
        hint: "Окончание -ly придётся убрать: строка пойдёт о человеке.",
        why:
          "She is a quiet journalist. Наречие сменилось прилагательным, потому что " +
          "речь пошла о человеке.",
      },
      {
        id: "q-chto-stoit-posle-is",
        kind: "choice",
        outcome: "различать прилагательное и наречие: a good singer, sings well",
        prompt:
          "Ученик хочет сказать «он плохой певец» и дошёл до He is a … Какое слово он поставит — bad или badly?",
        options: [
          { text: "bad, потому что речь о самом певце.", correct: true },
          { text: "badly: перед singer всегда стоит наречие." },
          { text: "Любое из двух: они об одном." },
        ],
        hint: "Спроси, о ком строка: о человеке или о его пении.",
        why:
          "Bad. Строка о самом певце, а badly сказало бы, как он поёт.",
      },

      // ---- итог 6 ----
      {
        id: "q-o-kom-skazano-fast",
        kind: "short",
        outcome: "находить в заметке, как именно что-то делали",
        prompt:
          "В заметке строка: Our runners ran fast, and our team won easily. О ком в ней сказано fast — о бегунах или о команде? Ответь одним словом.",
        answer: "о бегунах",
        accept: ["бегунах", "бегуны", "о бегунах."],
        hint: "Наречие относится к тому действию, после которого стоит.",
        why:
          "О бегунах. В строке два действия и два наречия, и каждое наречие " +
          "относится к своему.",
      },
      {
        id: "q-skolko-narechiy-v-stroke",
        kind: "choice",
        outcome: "находить в заметке, как именно что-то делали",
        prompt:
          "Сколько наречий образа действия в строке The second group sang rock loudly?",
        options: [
          { text: "Одно.", correct: true },
          { text: "Два." },
          { text: "Ни одного." },
        ],
        hint: "Спроси у каждого слова, отвечает ли оно на вопрос «как».",
        why:
          "Одно — loudly. Слово rock называет музыку, а не образ действия.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-chto-izmenilos",
        kind: "short",
        outcome: "слышать в разговоре, как что-то прошло",
        zvuk:
          "How was the match? — It started badly. — And then? — Then we played well and won.",
        prompt:
          "Послушай. Как команда играла во второй половине матча? Ответь одним словом по-английски.",
        answer: "well",
        accept: ["Well"],
        hint: "Начало и продолжение в записи разные.",
        why:
          "Well. Плохо было только начало, а потом игра пошла и матч выиграли.",
      },
      {
        id: "q-uslyshat-kak-chital",
        kind: "short",
        outcome: "слышать в разговоре, как что-то прошло",
        zvuk:
          "Did you read the book? — Yes, I read it carefully. — And the letter? — I read it quickly.",
        prompt:
          "Послушай. Как он прочитал письмо? Ответь одним словом по-английски.",
        answer: "quickly",
        accept: ["Quickly"],
        hint: "Про книгу и про письмо сказано по-разному.",
        why: "I read it quickly. Внимательно — carefully — читали книгу.",
      },

      // ---- итог 8 ----
      {
        id: "q-dopisat-kak-v-zametku",
        kind: "short",
        outcome: "проверять заметку: у каждого действия сказано, как",
        prompt:
          "К строке заметки Our team plays допиши, что играет хорошо. Запиши строку целиком.",
        answer: "Our team plays well.",
        accept: ["Our team plays well"],
        hint: "Наречие тут собирается не по общему правилу.",
        why:
          "Our team plays well. Читателю заметки важно не только что делают, но и " +
          "как — иначе строка ничего не сообщает.",
      },
      {
        id: "q-nuzhno-li-narechie-vezde",
        kind: "choice",
        outcome: "проверять заметку: у каждого действия сказано, как",
        prompt:
          "В заметке две строки: The club meets on Friday и We draw. К какой из них читатель ждёт наречия?",
        options: [
          { text: "К обеим." },
          { text: "К первой." },
          { text: "Ко второй.", correct: true },
        ],
        hint: "Спроси у каждой строки, можно ли к ней задать вопрос «как».",
        why:
          "Ко второй. У первой строки спрашивать «как» не о чем: она отвечает на " +
          "«когда».",
      },
      {
        id: "q-perepisat-stroku-zametki",
        kind: "short",
        outcome: "проверять заметку: у каждого действия сказано, как",
        prompt:
          "Строку The club works перепиши так, чтобы читатель узнал: клуб работает хорошо. Запиши строку целиком.",
        answer: "The club works well.",
        accept: ["The club works well"],
        hint: "Наречие тут собирается не по общему правилу.",
        why:
          "The club works well. Без наречия строка сообщает только, что клуб " +
          "работает, а читателю важно, каково там.",
      },
    ],
  },
};

export default module;
