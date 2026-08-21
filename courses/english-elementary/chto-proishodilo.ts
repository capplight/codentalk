import type { Module } from "@/lib/content/types";

/**
 * Модуль 6 курса «Английский · Elementary»: что происходило.
 *
 * Программа: docs/programma-english-elementary.md, модуль 6 — «описывать
 * обстановку, а не событие»; грамматика: Past Continuous, `was`/`were` + `-ing`;
 * наречия при нём.
 *
 * ИМЯ ДЛЯ ГЛАВНОЙ ВЕЩИ — «ДЛИТЕЛЬНОЕ ДЕЙСТВИЕ», И ОНО ОДНО НА ВЕСЬ МОДУЛЬ.
 *
 * Правило приписано после разбора модуля 5, где одна вещь звалась тремя именами
 * (CLAUDE.md, «Понятность объяснения», пункт 3). Здесь имя одно: **длительное
 * действие** — то, которое шло какое-то время. Объясняется при первой встрече, в
 * уроке 1, строкой с примером. Противопоставляется **законченному действию** —
 * тому, что курс давал модулями 2–5. Оба слова настоящие, а не наши ярлыки.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, PAST past continuous, «FORM: AFFIRMATIVE» —
 *    «Can use the affirmative form», пример источника «I was waiting for you all
 *    Saturday evening». Это уроки 1 и 2.
 *
 * 2. English Grammar Profile, A2, PAST past continuous, «USE: EVENTS IN
 *    PROGRESS» — «Can use the past continuous to talk about actions and states in
 *    progress around a particular time in the past». Это урок 3, и оттуда же
 *    обстоятельства вида `at seven`, `all evening`.
 *
 * 3. English Grammar Profile, A2, PAST past continuous, «FORM: WITH ADVERBS»
 *    (ступень 1) — «Can use the past continuous with a limited range of adverbs
 *    in the normal mid position», пример «I was just watching a football match».
 *    Это урок 4, и оговорка «limited range» держит его на трёх наречиях.
 *
 * 4. Описания Совета Европы, с. 67, шкала Creative writing, графа A2: «Can
 *    describe everyday aspects of their environment e.g. people, places, a job or
 *    study experience in linked sentences». Это уроки 6 и 8: описание обстановки
 *    связными предложениями.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ОТРИЦАНИЯ `wasn't working`. English Grammar Profile ставит его на B1: PAST
 *   past continuous, «FORM: NEGATIVE». Ступени не по росту.
 * — ВОПРОСА ДА/НЕТ `Were you working?`. Тот же источник, PAST past continuous,
 *   «FORM: QUESTIONS» — B1.
 * — СВЯЗКИ С ЗАКОНЧЕННЫМ ДЕЙСТВИЕМ через `when` и `while`. Программа отдаёт её
 *   модулю 7, и здесь её нет ни строкой: сперва надо освоить саму форму.
 * — НАРЕЧИЙ СВЕРХ ТРЁХ. Источник говорит «limited range» и числа не задаёт.
 *   Модуль берёт `just`, `still` и `always`, и это НАДО ЧИТАТЬ ТОЧНО. В примере
 *   строки A2 стоит только `just` («I was just watching a football match»).
 *   `still` при этом времени иллюстрирует строку B1 («He was still waiting at
 *   the traffic light»), а `always` — строку B1 «USE: REPEATED EVENTS» и строку
 *   C2 «USE: UNDESIRED EVENTS». Первая редакция шапки написала, что все три
 *   стоят в примерах графы A2, — неверно, нашёл методист. Форма (наречие между
 *   `was` и глаголом) остаётся A2 по строке «FORM: WITH ADVERBS»; набор из трёх
 *   наречий — решение автора, и методисту стоит посмотреть на него отдельно.
 *
 * ВОПРОС `WHAT WERE YOU DOING?` — МЕСТО, ГДЕ ИСТОЧНИКИ РАСХОДЯТСЯ.
 *
 * Записано нарочно, как и `Who was there?` в модуле 5. Строка PAST past
 * continuous «FORM: QUESTIONS» относит вопросы этого времени к B1. Но строка
 * QUESTIONS wh-, графа A2, «FORM: WITH AUXILIARY 'BE'» говорит: «Can use
 * 'wh-'words + auxiliary 'be' to form 'wh-'questions», и сам источник помечает
 * пункт ссылками «► present continuous ► past continuous». То есть вопрос с
 * вопросительным словом источник кладёт на A2, а вопрос да/нет — на B1.
 *
 * Взято по второй строке: урок 5 даёт `What were you doing?`, `Where were you
 * going?` и `What was your sister doing?`, а `Were you working?` в модуле не
 * встречается вовсе.
 *
 * НЕСИММЕТРИЯ ЗДЕСЬ ЕСТЬ, И ЕЁ НАДО ЗНАТЬ. У вопроса да/нет тоже есть встречная
 * строка графы A2: QUESTIONS yes/no, «FORM: AUXILIARY 'BE'» — «Can use auxiliary
 * 'be' + subject + the '-ing' form (continuous form) to form 'yes/no' questions».
 * Довод тот же самый, каким взят `What were you doing?`. Разница одна: у строки
 * про `wh-`-вопросы стоит помета «► past continuous», а у строки про да/нет её
 * нет. Поэтому `wh-`-вопрос взят, а вопрос да/нет — нет. Нашёл методист; решение
 * автора держится на этой помете и больше ни на чём.
 *
 * Первая редакция урока 5 давала ещё и `Who was cooking?`. Строка снята: правило
 * того же урока говорит «после were идёт человек», а в ней его нет, и ученик
 * читает противоречие. Разбор `Who was there?` живёт в модуле 5, там ему место.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать восемь карточек, и все тридцать восемь несут слово,
 * которого на прошлой ступени не было.
 *
 *    Oxford 3000 помечает A2: roof, hall, cupboard, lamp, oven, cooker, fridge,
 *    field, grass, ground, insect, smoke, knock, wave, bin, board, brush, bowl,
 *    spoon, knife, fork.
 *
 *    Oxford 3000 помечает B1, но словник A2 Key содержит: ceiling, curtain,
 *    garage. По правилу ступени (CLAUDE.md, «Объём словаря») такое слово в
 *    запасе и взято.
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: stairs, sofa,
 *    armchair, wardrobe, exit, playground, thunderstorm, mug, blanket, pillow,
 *    toast, sausage, pasta, cereal.
 *
 *    Норма ступени — не меньше тридцати карточек и не меньше пятнадцати новых,
 *    считает `npm run kontrol`.
 *
 *    СЛОВА-ПОДПОРКИ: still, just, always, rain, kitchen, garden, street, window,
 *    door, wall, floor, outside, together, sit, stand, run, cook, wait, clean,
 *    play, read, write, watch, listen, talk, sleep, dark, cold, hot, long, small,
 *    make, take, come, dance, swim, stop, wash, fall, go, empty, wet, white,
 *    full, horse, quiet, message, film, moment, somebody, move, tea, neighbour —
 *    все A1 или A2 по Oxford 3000 и все в словнике A2 Key. Первая редакция
 *    списка описывала не тот урок: два десятка работающих слов в неё не попали,
 *    нашёл методист. Плюс слова прошлых модулей этой же ступени, у которых
 *    карточка уже есть: noise, loud, storm, sky, cloud, tent, chef, plate.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного: одно в уроке 2 (написание окончания
 * `-ed` из модуля 2 — там разбиралась замена `y` на `i`, и рядом с уроком про
 * `-ing` это к месту: перед `-ing` буква `y` как раз НЕ меняется) и одно в
 * уроке 5 (вопрос с `did` из модуля 5, ровно то, с чем сравнивают порядок слов).
 * Первая редакция шапки написала, что возврат про удвоение согласной, — неверно,
 * удвоения в модуле 2 нет вовсе, нашёл методист. Берутся ссылкой (`vozvrat`),
 * устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "chto-proishodilo",
  title: "Что происходило",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past continuous, «FORM: AFFIRMATIVE»: «Can use the affirmative " +
        "form», пример источника — «I was waiting for you all Saturday evening». " +
        "A2, PAST past continuous, «USE: EVENTS IN PROGRESS»: «Can use the past " +
        "continuous to talk about actions and states in progress around a " +
        "particular time in the past» — это урок 3. " +
        "A2, PAST past continuous, «FORM: WITH ADVERBS»: «Can use the past " +
        "continuous with a limited range of adverbs in the normal mid position», " +
        "пример «I was just watching a football match» — это урок 4, и оговорка " +
        "«limited range» держит урок на трёх наречиях. " +
        "A2, QUESTIONS wh-, «FORM: WITH AUXILIARY 'BE'»: «Can use 'wh-'words + " +
        "auxiliary 'be' to form 'wh-'questions», и сам пункт помечен ссылками «► " +
        "present continuous ► past continuous» — отсюда урок 5. " +
        "ЧЕГО НЕТ. B1, PAST past continuous, «FORM: NEGATIVE» и «FORM: QUESTIONS» " +
        "— отрицания и вопроса да/нет в модуле нет вовсе. Про расхождение этой " +
        "строки с предыдущей сказано в шапке файла",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОКИ 6 И 8. с. 67, Creative writing, A2: «Can describe everyday aspects " +
        "of their environment e.g. people, places, a job or study experience in " +
        "linked sentences» — описание обстановки связными предложениями. " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority (e.g. " +
        "very basic personal and family information, shopping, local geography, " +
        "employment), provided people articulate clearly and slowly» — отсюда " +
        "pace: \"slow\". Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: roof, hall, cupboard, lamp, oven, " +
        "cooker, fridge, field, grass, ground, insect, smoke, knock, wave, bin, " +
        "board, brush, bowl, spoon, knife, fork. Слово wave взято " +
        "СУЩЕСТВИТЕЛЬНЫМ («волна»): Oxford 3000 ставит wave n. A2, а глагол wave " +
        "— B1, и словника A2 Key в этом слове нет вовсе. Первая редакция дала " +
        "глагол, нашёл методист. " +
        "Помету B1 Oxford 3000 ставит трём словам — ceiling, curtain, garage, — а " +
        "словник A2 Key их содержит: по правилу ступени они в запасе и потому " +
        "взяты. " +
        "Слов stairs, sofa, armchair, wardrobe, exit, playground, thunderstorm, " +
        "mug, blanket, pillow, toast, sausage, pasta, cereal Oxford 3000 не " +
        "содержит вовсе, а словник A2 Key требует. " +
        "Подпорки: still, just, always, rain, kitchen, garden, street, window, " +
        "door, wall, floor, outside, together, sit, stand, run, cook, wait, clean, " +
        "play, read, write, watch, listen, talk, sleep, dark, cold, hot, long, " +
        "small — все A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Слова knock и " +
        "wave словник не содержит, и взяты они по помете Oxford 3000 (A2) — " +
        "правило ступени принимает любое из двух оснований. Остальные тридцать " +
        "шесть карточек в словнике есть",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): cupboard /ˈkʌbəd/, oven /ˈʌvn/, " +
        "cooker /ˈkʊkə/, sofa /ˈsəʊfə/, armchair /ˈɑːmtʃeə/, wardrobe " +
        "/ˈwɔːdrəʊb/, curtain /ˈkɜːtn/, garage /ˈgærɪdʒ/, exit /ˈegzɪt/, " +
        "playground /ˈpleɪgraʊnd/, thunderstorm /ˈθʌndəstɔːm/, insect /ˈɪnsekt/, " +
        "cereal /ˈsɪəriəl/, pasta /ˈpɑːstə/",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "говорить о длительном действии: I was working",
    "писать окончание -ing по правилу",
    "называть время длительного действия: at seven, all evening",
    "ставить наречие между was и глаголом",
    "спрашивать, что происходило: What were you doing?",
    "понимать текст, где описано, что происходило вокруг",
    "слышать в записи, что происходило в тот момент",
    "проверять описание: всюду ли стоит форма was и окончание -ing",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "chto-shlo-v-tot-mig",
      title: "Что шло: I was working",
      estimatedMinutes: 15,
      outcome: "говорить о длительном действии: I was working",

      blocks: [
        {
          id: "zachem-dlitelnoe",
          kind: "explain",
          text: [
            "Вчера в семь вечера у тебя шла работа. Она занимала время, а не случилась в один миг.",
            "Такое действие называют длительным: оно занимает время.",
            "По-английски о нём говорят так: I was working.",
            "Рядом стоят два слова: was и глагол с окончанием -ing.",
          ],
        },
        {
          id: "formy-po-licam",
          kind: "table",
          caption: "Кому was, а кому were",
          zvuchat: [
            "I was working",
            "you were working",
            "he was working",
            "she was working",
            "we were working",
            "they were working",
          ],
          head: ["Кто", "Длительное действие"],
          rows: [
            ["I", "I was working"],
            ["you", "you were working"],
            ["he", "he was working"],
            ["she", "she was working"],
            ["we", "we were working"],
            ["they", "they were working"],
          ],
        },
        {
          id: "pochemu-dve-formy",
          kind: "explain",
          text: [
            "Форм две, и выбирают их так же, как в рассказе о том, каким что-то было.",
            "Was стоит при I, he, she и it. Were — при you, we и they.",
            "Глагол при этом не меняется вовсе: окончание -ing одно на все лица.",
          ],
        },
        {
          id: "imya-vmesto-mestoimeniya",
          kind: "explain",
          text: [
            "Вместо местоимения часто стоит имя или название вещи.",
            "Тогда форму выбирают по числу: my sister was cooking, my parents were cooking.",
            "Один — was, несколько — were.",
          ],
        },
        {
          id: "ne-i-working",
          kind: "note",
          tone: "mistake",
          text:
            "«I working» и «I was work» — так не говорят.\n\nДлительное действие " +
            "держится на двух словах сразу: без was нет времени, без -ing нет " +
            "длительности.",
        },
        {
          id: "primer-vecher-doma",
          kind: "example",
          caption: "Вечер дома",
          zvuchat: [
            "I was working in the kitchen.",
            "My sister was cooking.",
            "My parents were watching a film.",
          ],
          text:
            "I was working in the kitchen.\nMy sister was cooking.\nMy parents were watching a film.",
          explain:
            "Три строки об одном вечере. В первых двух один человек и потому was, в " +
            "третьей их двое и потому were.",
        },
        {
          id: "slovar-doma",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "hall", translation: "прихожая, коридор", example: "The lamp was in the hall.", hint: "/hɔːl/" },
            { term: "cupboard", translation: "шкаф для посуды", example: "The cupboard was open.", hint: "/ˈkʌbəd/" },
            { term: "oven", translation: "духовка", example: "The oven was hot.", hint: "/ˈʌvn/" },
            { term: "cooker", translation: "плита", example: "The cooker was old.", hint: "/ˈkʊkə/" },
            { term: "fridge", translation: "холодильник", example: "The fridge was loud.", hint: "/frɪdʒ/" },
            { term: "lamp", translation: "лампа", example: "The lamp was in the hall.", hint: "/læmp/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-was",
          kind: "gap",
          prompt: "Речь об одном человеке, и дело было вчера. Допиши недостающее слово.",
          before: "My sister ",
          after: " cooking.",
          answer: "was",
          hint: "Человек один, и форма при нём короткая.",
          why: "My sister was cooking. При одном человеке стоит was.",
        },
        {
          id: "z2-vybrat-formu",
          kind: "choice",
          prompt: "Как сказать, что твои родители смотрели фильм?",
          options: [
            { text: "My parents were watching a film.", correct: true },
            { text: "My parents was watching a film." },
            { text: "My parents were watch a film." },
          ],
          hint: "Родителей двое, и у глагола должно остаться окончание.",
          why:
            "My parents were watching a film. Их несколько, поэтому were, и окончание " +
            "-ing при этом никуда не девается.",
        },
        {
          id: "z3-otmetit-dlitelnye",
          kind: "hottext",
          prompt: "Отметь записи, в которых сказано о длительном действии.",
          parts: [
            { text: "I was working", selectable: true, correct: true },
            { text: " · " },
            { text: "I worked", selectable: true },
            { text: " · " },
            { text: "they were cooking", selectable: true, correct: true },
            { text: " · " },
            { text: "they cooked", selectable: true },
          ],
          hint: "У длительного действия рядом с глаголом стоит ещё одно слово.",
          why:
            "О длительном действии сказано в I was working и they were cooking. Две " +
            "другие записи говорят о законченном действии.",
        },
        {
          id: "z4-sobrat-vecher",
          kind: "order",
          prompt: "Собери строку: скажи о себе, что работа шла на кухне.",
          items: ["in the kitchen.", "working", "was", "I"],
          answer: [3, 2, 1, 0],
          hint: "Сначала кто, потом was, потом глагол с окончанием, потом место.",
          why: "I was working in the kitchen. Порядок обычный: кто, was, глагол, остальное.",
        },
        {
          id: "z5-napisat-o-sestre",
          kind: "short",
          prompt: "Скажи по-английски, что твоя сестра чистила плиту. Четыре слова после My sister.",
          answer: "My sister was cleaning the cooker.",
          accept: ["My sister was cleaning the cooker"],
          hint: "Человек один, значит was. Глагол clean берёт окончание -ing.",
          why: "My sister was cleaning the cooker. Один человек — was, глагол с -ing.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "okonchanie-ing",
      title: "Окончание -ing: как оно пишется",
      estimatedMinutes: 15,
      outcome: "писать окончание -ing по правилу",
      vozvrat: [{ iz: "vchera-ya-rabotal", zadanie: "z2-vybrat-napisanie" }],

      blocks: [
        {
          id: "zachem-pravilo-ing",
          kind: "explain",
          text: [
            "Окончание -ing слышится одинаково, а пишется по-разному.",
            "Watch даёт watching, а write даёт writing — буква e пропала.",
            "Правил всего три, и они зависят от последних букв глагола.",
          ],
        },
        {
          id: "tri-sluchaya-ing",
          kind: "table",
          caption: "Три случая",
          // Пара «глагол — глагол с окончанием» звучит одной кнопкой: ученику
          // важна именно разница между ними. Кнопка стоит на второй ячейке.
          zvuk: {
            watching: "watch, watching",
            playing: "play, playing",
            writing: "write, writing",
            making: "make, making",
            sitting: "sit, sitting",
            running: "run, running",
          },
          head: ["Глагол", "С окончанием", "Что случилось"],
          rows: [
            ["watch", "watching", "ничего, просто прибавили"],
            ["play", "playing", "ничего, просто прибавили"],
            ["write", "writing", "буква e на конце пропала"],
            ["make", "making", "буква e на конце пропала"],
            ["sit", "sitting", "последняя буква удвоилась"],
            ["run", "running", "последняя буква удвоилась"],
          ],
        },
        {
          id: "kogda-e-propadaet",
          kind: "explain",
          text: [
            "Буква e на конце пропадает потому, что её и так не читают.",
            "Write кончается на e, и в writing её уже нет.",
            "Так же ведут себя make, take, come, dance.",
          ],
        },
        {
          id: "kogda-bukva-udvaivaetsya",
          kind: "explain",
          text: [
            "Гласные буквы — это a, e, i, o, u, а все прочие согласные.",
            "Согласная на конце удваивается, если глагол в один слог и гласная перед ней одна.",
            "Sit, run, swim, stop — везде одна гласная перед последней согласной, и она удваивается.",
            "У wait, sleep, read, cook гласных перед ней две, и удвоения не бывает.",
            "Буквы w, x и y на конце не удваиваются никогда: play даёт playing.",
          ],
        },
        {
          id: "ne-writeing",
          kind: "note",
          tone: "mistake",
          text:
            "«writeing» и «siting» — так не пишут.\n\nВ первом случае букву e надо " +
            "было убрать, во втором — удвоить t.",
        },
        {
          id: "primer-utro-v-dome",
          kind: "example",
          caption: "Утро в доме",
          zvuchat: [
            "My brother was writing a message.",
            "The children were running in the hall.",
            "I was making tea.",
          ],
          text:
            "My brother was writing a message.\nThe children were running in the hall.\nI was making tea.",
          explain:
            "Три глагола и три разных случая: в writing и making пропала буква e, в " +
            "running удвоилась n.",
        },
        {
          id: "slovar-komnaty",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "sofa", translation: "диван", example: "The cat was sleeping on the sofa.", hint: "/ˈsəʊfə/" },
            { term: "armchair", translation: "кресло", example: "My father was reading in the armchair.", hint: "/ˈɑːmtʃeə/" },
            { term: "wardrobe", translation: "шкаф для одежды", example: "The wardrobe was open.", hint: "/ˈwɔːdrəʊb/" },
            { term: "curtain", translation: "штора", example: "The curtain was long.", hint: "/ˈkɜːtn/" },
            { term: "ceiling", translation: "потолок", example: "The lamp was on the ceiling.", hint: "/ˈsiːlɪŋ/" },
            { term: "stairs", translation: "лестница в доме", example: "The stairs were dark.", hint: "/steəz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-ing",
          kind: "gap",
          prompt: "Глагол write берёт окончание. Допиши его целиком.",
          before: "My brother was ",
          after: " a message.",
          answer: "writing",
          hint: "Буква e на конце глагола не читается, и в записи её не остаётся.",
          why: "My brother was writing a message. У write буква e пропадает.",
        },
        {
          id: "z2-vybrat-udvoenie",
          kind: "choice",
          prompt: "Как пишется глагол run с окончанием?",
          options: [
            { text: "runing" },
            { text: "running", correct: true },
            { text: "runnning" },
          ],
          hint: "Глагол короткий, из одного слога, и последняя буква у него одна.",
          why: "running. У коротких глаголов вроде run и sit последняя буква удваивается.",
        },
        {
          id: "z3-otmetit-vernoe-napisanie",
          kind: "hottext",
          prompt: "Отметь верно написанные глаголы.",
          parts: [
            { text: "making", selectable: true, correct: true },
            { text: " · " },
            { text: "makeing", selectable: true },
            { text: " · " },
            { text: "sitting", selectable: true, correct: true },
            { text: " · " },
            { text: "siting", selectable: true },
          ],
          hint: "В одном случае лишняя буква e, в другом не хватает второй t.",
          why:
            "Верны making и sitting. У make буква e пропадает, у sit последняя буква " +
            "удваивается.",
        },
        {
          id: "z4-sopostavit-ing",
          kind: "match",
          prompt: "Соедини глагол с тем, что с ним случилось при окончании -ing.",
          left: ["play", "dance", "swim"],
          right: ["последняя буква удвоилась", "ничего не изменилось", "буква e пропала"],
          answer: [1, 2, 0],
          hint: "Посмотри на последние буквы: где e, где один гласный и одна согласная.",
          why:
            "play — playing, ничего не изменилось. dance — dancing, буква e пропала. " +
            "swim — swimming, последняя буква удвоилась.",
        },
        {
          id: "z5-napisat-o-detyah",
          kind: "short",
          prompt: "Скажи по-английски, что дети бегали на лестнице. Начни с The children.",
          answer: "The children were running on the stairs.",
          accept: ["The children were running on the stairs"],
          hint: "Детей несколько, значит were. У run удваивается последняя буква.",
          why:
            "The children were running on the stairs. Несколько — were, и у run буква " +
            "n удваивается.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "v-tot-moment",
      title: "В тот момент: at seven, all evening",
      estimatedMinutes: 15,
      outcome: "называть время длительного действия: at seven, all evening",

      blocks: [
        {
          id: "zachem-vremya",
          kind: "explain",
          text: [
            "Длительное действие само по себе повисает: шло — а когда?",
            "Поэтому рядом почти всегда стоит время.",
            "Времени тут два вида: точка и промежуток.",
          ],
        },
        {
          id: "tochka-i-promezhutok",
          kind: "table",
          caption: "Точка и промежуток",
          zvuchat: [
            "at seven",
            "at that moment",
            "all evening",
            "all day",
            "I was working at seven.",
            "I was working all evening.",
          ],
          head: ["Какое время", "Оборот", "Пример"],
          rows: [
            ["точка", "at seven", "I was working at seven."],
            ["точка", "at that moment", "I was cooking at that moment."],
            ["промежуток", "all evening", "I was working all evening."],
            ["промежуток", "all day", "The rain was falling all day."],
          ],
        },
        {
          id: "pochemu-oba-goditsya",
          kind: "explain",
          text: [
            "Точка говорит, что в ту минуту действие уже шло и ещё не кончилось.",
            "Промежуток говорит, что оно шло всё это время без перерыва.",
            "Оба вида годятся длительному действию, а вот законченному — нет.",
          ],
        },
        {
          id: "gde-stoit-oborot",
          kind: "explain",
          text: [
            "Оборот времени ставят в конце строки, после самого действия.",
            "Там его и ищут, когда хотят узнать, когда всё это шло.",
          ],
        },
        {
          id: "ne-at-all-evening",
          kind: "note",
          tone: "mistake",
          text:
            "«at all evening» — так не говорят.\n\nПеред all предлог не нужен: " +
            "промежуток называют без него.",
        },
        {
          id: "primer-dozhdlivyy-den",
          kind: "example",
          caption: "Дождливый день",
          zvuchat: [
            "The rain was falling all day.",
            "At seven the street was empty.",
            "My neighbour was cleaning his garage.",
          ],
          text:
            "The rain was falling all day.\nAt seven the street was empty.\nMy neighbour was cleaning his garage.",
          explain:
            "В первой строке промежуток all day, во второй точка at seven. Третья " +
            "строка времени не называет вовсе.",
        },
        {
          id: "slovar-ulicy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "roof", translation: "крыша", example: "The rain was falling on the roof.", hint: "/ruːf/" },
            { term: "garage", translation: "гараж", example: "My neighbour was cleaning his garage.", hint: "/ˈgærɪdʒ/" },
            { term: "exit", translation: "выход", example: "The exit was open.", hint: "/ˈegzɪt/" },
            { term: "playground", translation: "детская площадка", example: "The playground was near the field.", hint: "/ˈpleɪgraʊnd/" },
            { term: "field", translation: "поле", example: "The horses were running in the field.", hint: "/fiːld/" },
            { term: "grass", translation: "трава", example: "The grass was wet.", hint: "/grɑːs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-at",
          kind: "gap",
          prompt: "Речь о точке во времени — о семи часах. Допиши недостающее слово.",
          before: "I was working ",
          after: " seven.",
          answer: "at",
          hint: "Перед часом ставят короткое слово из двух букв.",
          why: "I was working at seven. Точку во времени называют с предлогом at.",
        },
        {
          id: "z2-vybrat-promezhutok",
          kind: "choice",
          prompt: "Как сказать, что дождь шёл весь день?",
          options: [
            { text: "The rain was falling at all day." },
            { text: "The rain was falling all day.", correct: true },
            { text: "The rain was falling in all day." },
          ],
          hint: "Промежуток называют без предлога перед all.",
          why: "The rain was falling all day. Перед all предлога не ставят.",
        },
        {
          id: "z3-otmetit-tochki",
          kind: "hottext",
          prompt: "Отметь обороты, которые называют точку во времени.",
          parts: [
            { text: "at seven", selectable: true, correct: true },
            { text: " · " },
            { text: "all evening", selectable: true },
            { text: " · " },
            { text: "at that moment", selectable: true, correct: true },
            { text: " · " },
            { text: "all day", selectable: true },
          ],
          hint: "Точка — это одна минута, промежуток — целое время подряд.",
          why:
            "Точку называют at seven и at that moment. Обороты с all говорят о " +
            "промежутке.",
        },
        {
          id: "z4-sobrat-so-vremenem",
          kind: "order",
          prompt: "Собери строку: скажи, что сосед весь день убирал гараж.",
          items: ["all day.", "his garage", "cleaning", "was", "My neighbour"],
          answer: [4, 3, 2, 1, 0],
          hint: "Оборот времени стоит в самом конце.",
          why:
            "My neighbour was cleaning his garage all day. Оборот времени поставлен " +
            "после действия и того, над чем оно шло.",
        },
        {
          id: "z5-napisat-o-detyah-na-ploshchadke",
          kind: "short",
          prompt: "Скажи по-английски, что дети играли на площадке весь вечер.",
          answer: "The children were playing in the playground all evening.",
          accept: [
            "The children were playing in the playground all evening",
            "The children were playing on the playground all evening.",
            "The children were playing on the playground all evening",
          ],
          hint: "Детей несколько, значит were. Промежуток идёт в конце и без предлога.",
          why:
            "The children were playing in the playground all evening. Оборот all " +
            "evening стоит последним и предлога перед собой не берёт.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "narechie-v-seredine",
      title: "Наречие в середине: I was just watching",
      estimatedMinutes: 14,
      outcome: "ставить наречие между was и глаголом",

      blocks: [
        {
          id: "zachem-narechie",
          kind: "explain",
          text: [
            "К длительному действию часто добавляют одно слово: только что, всё ещё, всегда.",
            "По-английски это just, still и always.",
            "Такое слово называют наречием, и место у него особое.",
          ],
        },
        {
          id: "gde-stoit-narechie",
          kind: "table",
          caption: "Место наречия",
          zvuchat: [
            "I was just watching a film.",
            "I was still working.",
            "He was always talking.",
          ],
          head: ["Наречие", "Что значит", "Пример"],
          rows: [
            ["just", "только что, как раз", "I was just watching a film."],
            ["still", "всё ещё", "I was still working."],
            ["always", "всегда, постоянно", "He was always talking."],
          ],
        },
        {
          id: "pochemu-v-seredine",
          kind: "explain",
          text: [
            "Все три наречия встали между was и глаголом, и это не случайность.",
            "Длительное действие состоит из двух слов, и наречие вклинивается ровно между ними.",
            "Это и есть его место при длительном действии.",
          ],
        },
        {
          id: "ne-just-v-nachale",
          kind: "note",
          tone: "mistake",
          text:
            "«Just I was watching a film» — так не говорят.\n\nМесто у наречия одно: " +
            "сразу после was.",
        },
        {
          id: "primer-vecher-s-narechiyami",
          kind: "example",
          caption: "Что шло в тот момент",
          zvuchat: [
            "I was just making tea.",
            "My sister was still sleeping.",
            "The fridge was always making a noise.",
          ],
          text:
            "I was just making tea.\nMy sister was still sleeping.\nThe fridge was always making a noise.",
          explain:
            "Три строки и три наречия, и все три стоят на одном месте — сразу после " +
            "was.",
        },
        {
          id: "slovar-prirody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "ground", translation: "земля под ногами", example: "The ground was wet.", hint: "/graʊnd/" },
            { term: "thunderstorm", translation: "гроза", example: "The thunderstorm was loud.", hint: "/ˈθʌndəstɔːm/" },
            { term: "smoke", translation: "дым", example: "The smoke was going up.", hint: "/sməʊk/" },
            { term: "knock", translation: "стучать", example: "Somebody was knocking on the door.", hint: "/nɒk/" },
            { term: "wave", translation: "волна", example: "The waves were big.", hint: "/weɪv/" },
            { term: "insect", translation: "насекомое", example: "An insect was sitting on the grass.", hint: "/ˈɪnsekt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-still",
          kind: "gap",
          prompt: "Работа тогда ещё не кончилась. Допиши наречие «всё ещё».",
          before: "I was ",
          after: " working.",
          answer: "still",
          hint: "Одно слово из пяти букв, и стоит оно сразу после was.",
          why: "I was still working. Наречие still значит «всё ещё».",
        },
        {
          id: "z2-vybrat-mesto-narechiya",
          kind: "choice",
          prompt: "Выбери запись со значением «как раз шёл просмотр фильма».",
          options: [
            { text: "Just I was watching a film." },
            { text: "I was just watching a film.", correct: true },
            { text: "I was watching just a film." },
          ],
          hint: "Наречие вклинивается между двумя словами длительного действия.",
          why:
            "I was just watching a film. Место наречия одно — сразу после was, перед " +
            "глаголом.",
        },
        {
          id: "z3-otmetit-vernoe-mesto",
          kind: "hottext",
          prompt: "Отметь записи, где наречие стоит на своём месте.",
          parts: [
            { text: "She was still sleeping", selectable: true, correct: true },
            { text: " · " },
            { text: "She still was sleeping", selectable: true },
            { text: " · " },
            { text: "He was always talking", selectable: true, correct: true },
            { text: " · " },
            { text: "He was talking always", selectable: true },
          ],
          hint: "Своё место у наречия между was и глаголом.",
          why:
            "Верны She was still sleeping и He was always talking. В двух других " +
            "наречие встало перед was и после глагола, а его место между ними.",
        },
        {
          id: "z4-sopostavit-narechiya",
          kind: "match",
          prompt: "Соедини наречие с его значением.",
          left: ["just", "still", "always"],
          right: ["всегда, постоянно", "только что, как раз", "всё ещё"],
          answer: [1, 2, 0],
          hint: "Одно говорит о недавнем, другое о непрекращённом, третье о постоянном.",
          why: "just — только что, still — всё ещё, always — всегда.",
        },
        {
          id: "z5-napisat-s-narechiem",
          kind: "short",
          prompt: "Скажи по-английски, что гроза всё ещё шла. Начни с The thunderstorm.",
          answer: "The thunderstorm was still going.",
          accept: ["The thunderstorm was still going"],
          hint: "Наречие ставь между was и глаголом.",
          why:
            "The thunderstorm was still going. Наречие still стоит сразу после was.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-chto-proishodilo",
      title: "Спросить: What were you doing?",
      estimatedMinutes: 15,
      outcome: "спрашивать, что происходило: What were you doing?",
      vozvrat: [{ iz: "sprosit-o-proshlom", zadanie: "z2-vybrat-vopros-o-veshchi" }],

      blocks: [
        {
          id: "zachem-vopros-o-dlitelnom",
          kind: "explain",
          text: [
            "Хочется узнать, чем человек занимался вчера в семь.",
            "Спрашивают так: What were you doing at seven?",
            "Вопросительное слово стоит впереди, за ним were, потом человек, потом глагол с -ing.",
          ],
        },
        {
          id: "poryadok-v-voprose",
          kind: "table",
          caption: "Порядок слов в вопросе",
          zvuchat: [
            "What were you doing?",
            "Where were you going?",
            "What was your sister doing?",
          ],
          head: ["Вопрос", "О чём спрашивают"],
          rows: [
            ["What were you doing?", "о занятии"],
            ["Where were you going?", "о направлении"],
            ["What was your sister doing?", "о занятии другого"],
          ],
        },
        {
          id: "pochemu-was-menyaetsya",
          kind: "explain",
          text: [
            "Форма was или were выбирается по тому, кто действует.",
            "При you стоит were, при your sister — was.",
            "Глагол с окончанием -ing уходит в самый конец и не меняется.",
          ],
        },
        {
          id: "ne-what-you-were",
          kind: "note",
          tone: "mistake",
          text:
            "«What you were doing?» — так не спрашивают.\n\nПосле вопросительного " +
            "слова сразу идёт were, и только потом человек.",
        },
        {
          id: "razgovor-o-vechere-vchera",
          kind: "example",
          caption: "Кто чем был занят",
          razgovor: true,
          text:
            "— What were you doing at seven?\n— I was making tea.\n— And your sister?\n— She was still sleeping.",
          explain:
            "Первый вопрос полный, второй короткий: чтобы не повторять всё, называют " +
            "только человека.",
        },
        {
          id: "slovar-stola",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bowl", translation: "миска", example: "The bowl was on the table.", hint: "/bəʊl/" },
            { term: "spoon", translation: "ложка", example: "I was washing a spoon.", hint: "/spuːn/" },
            { term: "knife", translation: "нож", example: "The knife was on the plate.", hint: "/naɪf/" },
            { term: "fork", translation: "вилка", example: "The fork was on the plate.", hint: "/fɔːk/" },
            { term: "mug", translation: "кружка", example: "My mug was full.", hint: "/mʌg/" },
            { term: "brush", translation: "щётка", example: "My brother was cleaning the floor with a brush.", hint: "/brʌʃ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-were-v-voprose",
          kind: "gap",
          prompt: "Спроси собеседника, чем он был занят. Допиши недостающее слово.",
          before: "What ",
          after: " you doing?",
          answer: "were",
          hint: "При you стоит длинная из двух форм.",
          why: "What were you doing? При you всегда стоит were.",
        },
        {
          id: "z2-vybrat-poryadok-v-voprose",
          kind: "choice",
          prompt: "Как спросить собеседника, куда он шёл?",
          options: [
            { text: "Where you were going?" },
            { text: "Where were you going?", correct: true },
            { text: "Where were you go?" },
          ],
          hint: "В одной записи were ушло со своего места, в другой у глагола пропало окончание.",
          why:
            "Where were you going? После вопросительного слова стоит were, потом " +
            "человек, потом глагол с -ing.",
        },
        {
          id: "z3-otmetit-vernye-voprosy-o-dlitelnom",
          kind: "hottext",
          prompt: "Отметь верно построенные вопросы.",
          parts: [
            { text: "What was your sister doing", selectable: true, correct: true },
            { text: " · " },
            { text: "What your sister was doing", selectable: true },
            { text: " · " },
            { text: "Where were you going", selectable: true, correct: true },
            { text: " · " },
            { text: "Where you were going", selectable: true },
          ],
          hint: "Смотри, что стоит сразу после вопросительного слова.",
          why:
            "Верны What was your sister doing и Where were you going. В двух других " +
            "человек встал перед формой was, а должен после.",
        },
        {
          id: "z4-sobrat-vopros-o-zanyatii",
          kind: "order",
          prompt: "Собери вопрос: узнай, чем была занята сестра собеседника.",
          items: ["doing?", "your sister", "was", "What"],
          answer: [3, 2, 1, 0],
          hint: "Впереди вопросительное слово, за ним форма was, потом человек.",
          why:
            "What was your sister doing? Сестра одна, поэтому was, а глагол с " +
            "окончанием уходит в конец.",
        },
        {
          id: "z5-napisat-vopros-o-semi",
          kind: "short",
          prompt:
            "Спроси собеседника, чем он был занят в семь. Обратись к нему на you и начни с What.",
          answer: "What were you doing at seven?",
          accept: ["What were you doing at seven"],
          hint: "После What ставь were, потом you, потом глагол с -ing и время.",
          why:
            "What were you doing at seven? При you стоит were, а оборот времени идёт " +
            "в конец.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-opisanie",
      title: "Читаем описание двора",
      estimatedMinutes: 13,
      outcome: "понимать текст, где описано, что происходило вокруг",

      blocks: [
        {
          id: "zachem-chitat-opisanie",
          kind: "explain",
          text: [
            "В описании обстановки нет одного главного события.",
            "Там несколько действий идут разом, и все они длительные.",
            "Ниже сообщение о том, что происходило во дворе.",
          ],
        },
        {
          id: "soobshchenie-o-dvore",
          kind: "text",
          title: "Сообщение от Данияра",
          genre: "message",
          body: [
            "Yesterday at seven I was standing at the window.",
            "The rain was falling on the roof, and the ground was wet.",
            "The children were playing in the playground. My neighbour was cleaning his garage all evening.",
            "An insect was sitting on the grass near the exit. The smoke was going up.",
            "I was just making tea and watching all this.",
          ],
          glossary: [
            { term: "at the window", translation: "у окна" },
            { term: "near", translation: "рядом с" },
            { term: "all this", translation: "всё это" },
            { term: "up", translation: "вверх" },
          ],
        },
        {
          id: "kak-ustroeno-opisanie",
          kind: "note",
          tone: "info",
          text:
            "Почти всё в сообщении длительное: там стоит was или were и окончание " +
            "-ing.\n\nСтрока the ground was wet выпадает: она говорит не о " +
            "действии, а о том, каким было место.",
        },
        {
          id: "slovar-veshchey",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "bin", translation: "мусорное ведро", example: "The bin was near the exit.", hint: "/bɪn/" },
            { term: "board", translation: "доска", example: "The board was on the wall.", hint: "/bɔːd/" },
            { term: "blanket", translation: "одеяло", example: "The blanket was on the sofa.", hint: "/ˈblæŋkɪt/" },
            { term: "pillow", translation: "подушка", example: "The pillow was white.", hint: "/ˈpɪləʊ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-gde-stoyal",
          kind: "choice",
          about: "soobshchenie-o-dvore",
          prompt: "Где стоял Данияр?",
          options: [
            { text: "На площадке" },
            { text: "У окна", correct: true },
            { text: "В гараже" },
          ],
          hint: "Место названо в первой строке.",
          why: "Yesterday at seven I was standing at the window.",
        },
        {
          id: "z2-chto-delal-sosed",
          kind: "short",
          about: "soobshchenie-o-dvore",
          prompt: "Что убирал сосед? Ответь одним английским словом.",
          answer: "garage",
          accept: ["his garage", "the garage"],
          hint: "Загляни в строку про соседа: там названо, что он убирал.",
          why: "My neighbour was cleaning his garage all evening.",
        },
        {
          id: "z3-otmetit-chto-proishodilo",
          kind: "hottext",
          about: "soobshchenie-o-dvore",
          prompt: "Отметь то, что происходило во дворе.",
          parts: [
            { text: "шёл дождь", selectable: true, correct: true },
            { text: " · " },
            { text: "дети играли", selectable: true, correct: true },
            { text: " · " },
            { text: "сосед мыл машину", selectable: true },
            { text: " · " },
            { text: "насекомое сидело на траве", selectable: true, correct: true },
          ],
          hint: "Одно из четырёх в сообщении не названо вовсе.",
          why:
            "The rain was falling, the children were playing, an insect was sitting " +
            "on the grass. Сосед убирал гараж, а о машине не сказано.",
        },
        {
          id: "z4-chto-bylo-mokrym",
          kind: "short",
          about: "soobshchenie-o-dvore",
          prompt: "Что было мокрым? Ответь одним английским словом.",
          answer: "ground",
          accept: ["the ground"],
          hint: "Об этом сказано во второй строке, после слов the rain was falling.",
          why: "The rain was falling on the roof, and the ground was wet.",
        },
        {
          id: "z5-chto-delal-sam",
          kind: "choice",
          about: "soobshchenie-o-dvore",
          prompt: "Чем был занят сам Данияр?",
          options: [
            { text: "Убирал кухню" },
            { text: "Спал" },
            { text: "Делал чай и смотрел во двор", correct: true },
          ],
          hint: "Об этом сказано в последней строке.",
          why: "I was just making tea and watching all this.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chto-proishodilo",
      title: "Слушаем, что происходило",
      estimatedMinutes: 13,
      outcome: "слышать в записи, что происходило в тот момент",

      blocks: [
        {
          id: "zachem-slushat-dlitelnoe",
          kind: "explain",
          text: [
            "В речи was и were звучат коротко и сливаются с глаголом.",
            "Лови окончание -ing: оно слышно лучше и говорит, что действие шло.",
            "Ниже запись: двое вспоминают вчерашний вечер.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-o-vchera-vechere",
          kind: "audio",
          caption: "Разговор о вчерашнем вечере",
          pace: "slow",
          skryt: true,
          transcript:
            "What were you doing at seven? — I was making pasta in the kitchen. — " +
            "And your brother? — He was still sleeping on the sofa. — Was it quiet? " +
            "— No. The fridge was making a noise all evening.",
        },
        {
          id: "chto-slushat-v-opisanii",
          kind: "note",
          tone: "info",
          text:
            "Слушай, что человек готовил, где спал его брат и что шумело весь " +
            "вечер.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-edy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "toast", translation: "тост, поджаренный хлеб", example: "I was making toast.", hint: "/təʊst/" },
            { term: "sausage", translation: "сосиска, колбаса", example: "The sausage was hot.", hint: "/ˈsɒsɪdʒ/" },
            { term: "pasta", translation: "макароны", example: "I was making pasta.", hint: "/ˈpɑːstə/" },
            { term: "cereal", translation: "хлопья на завтрак", example: "The cereal was in the bowl.", hint: "/ˈsɪəriəl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-gotovil",
          kind: "short",
          about: "zapis-o-vchera-vechere",
          prompt: "Что человек готовил? Ответь одним английским словом.",
          answer: "pasta",
          accept: ["the pasta"],
          hint: "Это слово стоит сразу после слова making.",
          why: "I was making pasta in the kitchen.",
        },
        {
          id: "z2-gde-spal-brat",
          kind: "choice",
          about: "zapis-o-vchera-vechere",
          prompt: "Где спал брат?",
          options: [
            { text: "В кресле" },
            { text: "На диване", correct: true },
            { text: "На лестнице" },
          ],
          hint: "Место названо сразу после слова sleeping.",
          why: "He was still sleeping on the sofa.",
        },
        {
          id: "z3-chto-shumelo",
          kind: "short",
          about: "zapis-o-vchera-vechere",
          prompt: "Что шумело весь вечер? Ответь одним английским словом.",
          answer: "fridge",
          accept: ["the fridge"],
          hint: "Это слово стоит в самом конце записи, перед словом was.",
          why: "The fridge was making a noise all evening.",
        },
        {
          id: "z4-vo-skolko",
          kind: "short",
          about: "zapis-o-vchera-vechere",
          prompt: "О каком часе спрашивали в самом начале? Ответь цифрой.",
          answer: "7",
          accept: ["seven", "семь"],
          hint: "Час назван в первом вопросе записи.",
          why: "What were you doing at seven?",
        },
        {
          id: "z5-kto-eshche-byl-doma",
          kind: "short",
          about: "zapis-o-vchera-vechere",
          prompt: "О ком ещё спросили в записи? Ответь одним английским словом.",
          answer: "brother",
          accept: ["your brother", "the brother"],
          hint: "Этот человек назван в третьей реплике, короткой.",
          why: "And your brother? — He was still sleeping on the sofa.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-opisanie",
      title: "Пишем описание вечера",
      estimatedMinutes: 15,
      outcome: "проверять описание: всюду ли стоит форма was и окончание -ing",

      blocks: [
        {
          id: "zachem-opisanie",
          kind: "explain",
          text: [
            "Описание обстановки строится не как рассказ о событии.",
            "В рассказе дела идут по очереди, а в описании — разом.",
            "Поэтому в каждой строке описания стоит длительное действие.",
          ],
        },
        {
          id: "stroka-opisaniya",
          kind: "table",
          caption: "Из чего состоит строка",
          // Звука тут нет нарочно: в ячейках стоят куски предложения, и читать
          // вслух «was» отдельно не значит ничего. Строки целиком звучат в
          // образце ниже.
          head: ["Кто или что", "Форма", "Глагол с -ing"],
          rows: [
            ["The rain", "was", "falling"],
            ["My sister", "was", "cooking"],
            ["The children", "were", "playing"],
          ],
        },
        {
          id: "pochemu-tri-chasti",
          kind: "explain",
          text: [
            "Части всегда три, и пропуск любой из них ломает строку.",
            "Без формы was непонятно время, без окончания -ing — что действие шло.",
            "Третья строка взяла were: детей несколько.",
          ],
        },
        {
          id: "obrazets-opisaniya",
          kind: "example",
          caption: "Образец описания",
          zvuchat: [
            "Yesterday at nine I was sitting on the blanket.",
            "My brother was washing a bowl in the kitchen.",
            "The curtain was moving near the window.",
            "My sister was looking for a spoon in the cupboard.",
          ],
          text:
            "Yesterday at nine I was sitting on the blanket.\nMy brother was washing a bowl in the kitchen.\nThe curtain was moving near the window.\nMy sister was looking for a spoon in the cupboard.",
          explain:
            "Четыре строки, и в каждой те же три части. Время названо один раз, в " +
            "первой строке.",
        },
        {
          id: "chto-proverit-v-opisanii",
          kind: "note",
          tone: "info",
          text:
            "Проверь три вещи. В каждой строке есть was или were, у каждого глагола " +
            "есть окончание -ing, и форма выбрана по числу.\n\nВремя достаточно " +
            "назвать один раз.",
        },

        // ---- задания ----
        {
          id: "z1-nayti-slomannuyu-stroku",
          kind: "hottext",
          prompt: "Отметь строки описания, в которых что-то пропало.",
          parts: [
            { text: "The rain falling on the roof", selectable: true, correct: true },
            { text: " · " },
            { text: "My sister was washing a mug", selectable: true },
            { text: " · " },
            { text: "The children playing on the stairs", selectable: true, correct: true },
            { text: " · " },
            { text: "I was sitting in the armchair", selectable: true },
          ],
          hint: "Проверь по трём частям: кто, форма, глагол с окончанием.",
          why:
            "Пропало в двух строках: The rain falling on the roof и The children " +
            "playing on the stairs. В обеих нет формы was или were, а без неё " +
            "время непонятно.",
        },
        {
          id: "z2-vybrat-formu-po-chislu",
          kind: "choice",
          prompt: "В описании строка о детях. Какая форма нужна?",
          options: [
            { text: "The children was playing." },
            { text: "The children playing." },
            { text: "The children were playing.", correct: true },
          ],
          hint: "Детей несколько, и форма при них длинная.",
          why: "The children were playing. При нескольких стоит were.",
        },
        {
          id: "z3-otmetit-propushchennoe-okonchanie",
          kind: "hottext",
          prompt: "Отметь строки, где у глагола пропало окончание.",
          parts: [
            { text: "My sister was wash a mug", selectable: true, correct: true },
            { text: " · " },
            { text: "My sister was washing a mug", selectable: true },
            { text: " · " },
            { text: "The smoke was go up", selectable: true, correct: true },
            { text: " · " },
            { text: "The smoke was going up", selectable: true },
          ],
          hint: "Смотри на конец глагола: там должно стоять -ing.",
          why:
            "Окончание пропало в My sister was wash a mug и The smoke was go up. " +
            "Верные записи — washing и going.",
        },
        {
          id: "z4-napisat-opisanie",
          kind: "essay",
          prompt:
            "Опиши вчерашний вечер четырьмя строками. В первой назови время и своё место, в остальных — что происходило вокруг.",
          minWords: 16,
          sample:
            "Yesterday at nine I was sitting on the blanket.\nMy brother was washing a bowl in the kitchen.\nThe curtain was moving near the window.\nMy sister was looking for a spoon in the cupboard.",
          checklist: [
            "в каждой строке стоит was или were",
            "у каждого глагола есть окончание -ing",
            "форма выбрана по числу: один — was, несколько — were",
            "время названо один раз, в первой строке",
          ],
          hint: "Бери глаголы, которые обозначают длительное занятие: sit, cook, play, read.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы ни одна строка не " +
            "осталась без формы was и без окончания -ing.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Работа написана отдельно от заданий уроков и другими углами: исправить
      // чужую запись, назвать причину ошибки, восстановить вопрос по ответу,
      // выбрать по числу. Совпадений с заданиями уроков нет.

      // ---- итог 1 ----
      {
        id: "q-forma-ispravit",
        kind: "short",
        outcome: "говорить о длительном действии: I was working",
        prompt: "Исправь ошибку и запиши целиком: «The children was playing in the hall.»",
        answer: "The children were playing in the hall.",
        accept: ["The children were playing in the hall"],
        why:
          "The children were playing in the hall. Детей несколько, и при них стоит " +
          "were.",
      },
      {
        id: "q-forma-prichina",
        kind: "choice",
        outcome: "говорить о длительном действии: I was working",
        prompt: "Чем «I was working» отличается от «I worked»?",
        options: [
          { text: "Первое говорит, что работа шла и к тому мигу не кончилась", correct: true },
          { text: "Первое говорит о том, что будет завтра" },
          { text: "Разницы между ними нет" },
        ],
        why:
          "I was working показывает работу в ходу. I worked говорит о ней как о " +
          "законченной.",
      },

      // ---- итог 2 ----
      {
        id: "q-ing-ispravit",
        kind: "short",
        outcome: "писать окончание -ing по правилу",
        prompt: "Исправь ошибку и запиши целиком: «She was danceing near the stage.»",
        answer: "She was dancing near the stage.",
        accept: ["She was dancing near the stage"],
        why: "She was dancing near the stage. У dance буква e на конце пропадает.",
      },
      {
        id: "q-ing-udvoenie",
        kind: "short",
        outcome: "писать окончание -ing по правилу",
        prompt: "Запиши глагол stop с окончанием -ing.",
        answer: "stopping",
        accept: ["Stopping"],
        why: "stopping. Глагол в один слог, и гласная перед последней согласной одна.",
      },

      // ---- итог 3 ----
      {
        id: "q-vremya-ispravit",
        kind: "short",
        outcome: "называть время длительного действия: at seven, all evening",
        prompt: "Исправь ошибку и запиши целиком: «She was reading at all evening.»",
        answer: "She was reading all evening.",
        accept: ["She was reading all evening"],
        why:
          "She was reading all evening. Оборот с all называет время сам, и лишнее " +
          "слово перед ним только мешает.",
      },
      {
        id: "q-vremya-otlichit",
        kind: "choice",
        outcome: "называть время длительного действия: at seven, all evening",
        prompt: "Какой оборот называет промежуток, а не точку?",
        options: [
          { text: "at that moment" },
          { text: "all evening", correct: true },
          { text: "at seven" },
        ],
        why:
          "all evening. Обороты с all говорят о времени подряд, а обороты с at — об " +
          "одной минуте.",
      },

      // ---- итог 4 ----
      {
        id: "q-narechie-ispravit",
        kind: "short",
        outcome: "ставить наречие между was и глаголом",
        prompt: "Исправь ошибку и запиши целиком: «She still was sleeping.»",
        answer: "She was still sleeping.",
        accept: ["She was still sleeping"],
        why: "She was still sleeping. Место наречия одно — сразу после was.",
      },
      {
        id: "q-narechie-po-smyslu",
        kind: "short",
        outcome: "ставить наречие между was и глаголом",
        prompt: "Вставь наречие just в строку и запиши её целиком: «She was cleaning the oven.»",
        answer: "She was just cleaning the oven.",
        accept: ["She was just cleaning the oven"],
        why:
          "She was just cleaning the oven. Наречие встаёт между was и глаголом.",
      },

      // ---- итог 5 ----
      {
        id: "q-vopros-ispravit",
        kind: "short",
        outcome: "спрашивать, что происходило: What were you doing?",
        prompt: "Исправь ошибку и запиши целиком: «Where your sister was going?»",
        answer: "Where was your sister going?",
        accept: ["Where was your sister going"],
        why:
          "Where was your sister going? Форма was встаёт сразу за вопросительным " +
          "словом, а человек идёт после неё.",
      },
      {
        id: "q-vopros-vosstanovit",
        kind: "short",
        outcome: "спрашивать, что происходило: What were you doing?",
        prompt:
          "Ответ был: «He was cleaning the garage.» Запиши вопрос о занятии, который его вызвал. Спроси про брата собеседника — your brother.",
        answer: "What was your brother doing?",
        accept: ["What was your brother doing"],
        why:
          "What was your brother doing? Брат один, поэтому was, и стоит оно сразу за " +
          "вопросительным словом.",
      },

      // ---- итог 6 ----
      {
        id: "q-opisanie-najti-deystvie",
        kind: "choice",
        outcome: "понимать текст, где описано, что происходило вокруг",
        prompt:
          "В сообщении написано: «The rain was falling. My neighbour was cleaning his garage. I was making tea.» Что делал сосед?",
        options: [
          { text: "Делал тосты" },
          { text: "Убирал гараж", correct: true },
          { text: "Смотрел на дождь" },
        ],
        why:
          "My neighbour was cleaning his garage. Первая строка о дожде, третья о " +
          "самом пишущем.",
      },
      {
        id: "q-opisanie-skolko-dlitelnyh",
        kind: "short",
        outcome: "понимать текст, где описано, что происходило вокруг",
        prompt:
          "В сообщении написано: «The rain was falling. The ground was wet. The children were playing.» Какая строка говорит не о действии?",
        answer: "The ground was wet.",
        accept: ["The ground was wet", "the ground was wet"],
        why:
          "The ground was wet. Тут сказано, каким было место, а не что кто-то делал.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-zanyatie",
        kind: "short",
        outcome: "слышать в записи, что происходило в тот момент",
        zvuk: "What were you doing? — I was cleaning the oven.",
        prompt: "Послушай и запиши одним английским словом, что человек чистил.",
        answer: "oven",
        accept: ["the oven"],
        why: "What were you doing? — I was cleaning the oven.",
      },
      {
        id: "q-na-sluh-kto",
        kind: "choice",
        outcome: "слышать в записи, что происходило в тот момент",
        zvuk: "My brother was sleeping on the sofa. — And your sister? — She was reading.",
        prompt: "Послушай и ответь: кто спал?",
        options: [
          { text: "Сестра" },
          { text: "Никто" },
          { text: "Брат", correct: true },
        ],
        why: "My brother was sleeping on the sofa. Сестра читала.",
      },

      // ---- итог 8 ----
      {
        id: "q-opisanie-chego-ne-hvataet",
        kind: "short",
        outcome: "проверять описание: всюду ли стоит форма was и окончание -ing",
        prompt:
          "В описании стоит строка «My sister washing a bowl.» Исправь её и запиши целиком.",
        answer: "My sister was washing a bowl.",
        accept: ["My sister was washing a bowl"],
        why:
          "My sister was washing a bowl. Пропала форма was, а без неё строка не " +
          "говорит о прошлом.",
      },
      {
        id: "q-opisanie-lishnyaya-stroka",
        kind: "choice",
        outcome: "проверять описание: всюду ли стоит форма was и окончание -ing",
        prompt: "Какая строка в описание обстановки не годится?",
        options: [
          { text: "My sister cooked dinner.", correct: true },
          { text: "My sister was cooking dinner." },
          { text: "The children were playing outside." },
        ],
        why:
          "My sister cooked dinner говорит о законченном действии, а описание " +
          "обстановки строится на длительных.",
      },
    ],
  },
};

export default module;
