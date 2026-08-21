import type { Module } from "@/lib/content/types";

/**
 * Модуль 5 курса «Английский · Elementary»: спросить о прошлом.
 *
 * Программа: docs/programma-english-elementary.md, модуль 5 — «расспрашивать о
 * том, что было»; грамматика: Past Simple, вопрос с `did`; вопросительные слова
 * с `did`; короткий ответ.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, PAST past simple, «FORM: QUESTIONS» — «Can use
 *    'yes/no' and 'wh-' question forms with 'you' with a limited range of verbs»,
 *    пример источника «Did you buy something yesterday?».
 *
 * 2. English Grammar Profile, A2, QUESTIONS yes/no, «FORM: LEXICAL VERBS WITH
 *    'DO'» — «Can use auxiliary 'do' + subject + main verb to form 'yes/no'
 *    questions». Это порядок слов урока 1.
 *
 * 3. English Grammar Profile, A2, QUESTIONS wh-, «FORM: WITH AUXILIARY 'DO'» —
 *    «Can use 'wh-'words + auxiliary 'do' + subject + main verb to form
 *    'wh-'questions», и сам источник помечает пункт ссылкой на past simple.
 *    Это урок 3.
 *
 * 4. Описания Совета Европы, с. 79, шкала Information exchange, графа A2: «Can
 *    ask and answer questions about pastimes and past activities» и «Can ask and
 *    answer simple questions about an event (e.g. ask where and when it took
 *    place, who was there and what it was like)». Источник называет обе стороны —
 *    спросить и ответить, — поэтому короткий ответ стоит отдельным уроком (2), а
 *    расспрос целиком уроком 5.
 *
 * 5. Cambridge, A2 Key handbook, с. 52, Language specifications: «Short questions
 *    (Can you?) and answers (No, he doesn't)» — опора урока 2. Там же, раздел
 *    Interrogatives: перечень идёт в несколько строк («Where; When», «Who; Whose;
 *    Which») и кончается оговоркой «(including the interrogative forms of all
 *    tenses and modals listed)».
 *
 * 6. Описания Совета Европы, с. 83, шкала Correspondence, графа A2: «Can exchange
 *    information by text message, by e-mail or in short letters, responding to
 *    questions from the other person (e.g. about a new product or activity)».
 *    Это урок 8 целиком: жанр тот же, что в уроке чтения, а дело — ответить на
 *    заданные вопросы.
 *
 * ГЛАВНАЯ ТРУДНОСТЬ МОДУЛЯ.
 *
 * Она та же, что в модуле 4, и потому урок 1 на неё опирается прямо: рядом с
 * `did` глагол возвращается к словарной форме. `I went`, но `Did you go?`. Кто
 * прошёл модуль 4, узнаёт правило, а не учит его заново, — поэтому возвращение
 * взято именно оттуда.
 *
 * Вторая трудность своя и разбирается уроком 4: о прошлом спрашивают двумя
 * разными словами. `Did you go?` — о действии; `Was it good?` — о том, каким
 * что-то было. Курс дал их в разных модулях (`was` в первом, `did` здесь), и
 * ученик впервые оказывается перед выбором.
 *
 * ИМЯ ДЛЯ ГЛАВНОЙ ВЕЩИ — «ДЕЙСТВИЕ», И ОНО ОДНО НА ВЕСЬ МОДУЛЬ.
 *
 * Правило выбора между `did` и `was` держится на том, есть ли в вопросе то, что
 * кто-то делает. Первая редакция звала это «делом», а в уроке 4 ещё и
 * «свойством» — и получила три имени одной вещи в одном модуле (подпись таблицы
 * говорила «о том, каким было», объяснение — «о свойстве», урок 8 — «оценка»).
 * Нашёл редактор. «Свойство» вдобавок неверно по существу: `wet`, `scared`,
 * `long` — это состояние, а не свойство, и ученик спотыкается на первом же
 * `Were you surprised?`. Теперь всюду одно слово — «действие», и вводится оно в
 * уроке 1 строкой с примерами, а не в подсказке пятого урока.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ВОПРОСА, ГДЕ ВОПРОСИТЕЛЬНОЕ СЛОВО САМО НАЗЫВАЕТ ДЕЯТЕЛЯ: `Who came?`, `What
 *   happened?`. English Grammar Profile ставит его на B1: CLAUSES interrogatives,
 *   «FORM: 'WH-' INTERROGATIVE, SUBJECT» — «Can form questions with a 'wh-' word
 *   as subject, without an auxiliary verb», пример «What happened?».
 * — ВОПРОСА С ОТРИЦАНИЕМ: `Didn't you go?`. English Grammar Profile ставит его
 *   на B1: QUESTIONS yes/no, «FORM: NEGATIVE QUESTIONS, AUXILIARY VERBS» — «Can
 *   use auxiliary 'do' and 'have' + 'n't' + subject + main verb to form negative
 *   'yes/no' questions», пример «Don't you think so?». Первая редакция сослалась
 *   здесь на строку B2 про `wh-`-вопросы — цитата была не та, нашёл методист.
 * — ВОПРОСА-ПЕРЕСПРОСА `…, did you?`. Мимо ступени и мимо программы.
 *
 * `WHO WAS THERE?` В УРОКЕ 5 — МЕСТО, ГДЕ ИСТОЧНИКИ РАСХОДЯТСЯ.
 *
 * Записано нарочно, а не замазано. English Grammar Profile относит вопрос, где
 * `wh-`-слово стоит подлежащим, к B1 (строка выше), и `Who was there?` под это
 * описание подходит — глагол тут ни при чём, признак источника в роли слова.
 * Но два других источника дают тот же оборот на A2:
 *
 *   — описания Совета Европы, с. 79, Information exchange, графа A2, прямым
 *     текстом: «…ask where and when it took place, WHO WAS THERE and what it was
 *     like»;
 *   — A2 Key handbook, с. 52, Interrogatives: `Who` в перечне.
 *
 * Взято по описаниям Совета Европы — как и в модуле 1 этой же ступени, где
 * `Who was there?` уже введён полностью. Ссылка внутри ступени законна.
 *
 * ЛИЦО В ВОПРОСЕ: ЧТО ДАЁТСЯ НА ПРОИЗВОДСТВО, А ЧТО НА УЗНАВАНИЕ.
 *
 * Оговорка «with 'you'» есть только в строке про past simple (пункт 1). Три
 * другие строки ступени A2 описывают то же умение без неё: QUESTIONS yes/no
 * «auxiliary 'do' + SUBJECT + main verb», QUESTIONS wh- «'wh-'words + auxiliary
 * 'do' + SUBJECT + main verb», CLAUSES interrogatives «FORM: AFFIRMATIVE
 * INTERROGATIVE». Перечень вопросительных слов в A2 Key (с. 52) тоже ничем по
 * лицу не ограничен. Значит оговорка описывает разброс, наблюдённый у сдающих, а
 * не запрет на третье лицо.
 *
 * Поэтому модуль устроен так: третье лицо есть и в объяснении (строка `she came`
 * — `Did she come?` в таблице урока 1), и в заданиях на выбор и сборку (`When
 * did the opera start?` в уроках 3 и 5). Свободное производство — там, где
 * ученик пишет вопрос сам, — держится на `you`, как в примере источника.
 * Первая редакция шапки утверждала, что третье лицо идёт только на узнавание, и
 * это расходилось с собственными заданиями модуля; нашёл методист.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать восемь карточек, и все тридцать восемь несут слово,
 * которого на прошлой ступени не было. Все тридцать восемь есть в словнике
 * A2 Key — проверено методистом поимённо по обоим разборам.
 *
 *    Oxford 3000 помечает A2: season, camping, winner, score, goal, musician,
 *    comedy, cartoon, character, celebrity, stage, brilliant, excellent, unusual,
 *    scared, surprised, storm, cloud, dry, wet, sky, chef.
 *
 *    Oxford 3000 помечает B1, но словник A2 Key содержит: stadium, pleasant,
 *    tent. По правилу ступени (CLAUDE.md, «Объём словаря») такое слово в запасе
 *    и взято. Случай тот же, что у `shelf` в модуле 4.
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: luggage, suitcase,
 *    campsite, timetable, quiz, fog, guidebook, sightseeing, postcard, tram,
 *    motorway. Ещё два слова того же ряда — opera и harbour — Oxford 3000 не
 *    содержит, а Oxford 5000 помечает B2; словник A2 Key требует оба, и по
 *    правилу ступени они взяты. Помета названа здесь нарочно: в модуле 4 первая
 *    редакция промолчала о такой помете, и это была ошибка.
 *
 *    Норма ступени — не меньше тридцати карточек и не меньше пятнадцати новых,
 *    считает `npm run kontrol`.
 *
 *    СЛОВА-ПОДПОРКИ — те, что стоят в примерах и текстах, а своей карточки не
 *    имеют: late, wrong, grey, match, cinema, train, family, afternoon, food,
 *    start, watch, dark, cold, happy, full, big, small, nothing, quiet — все A1
 *    по Oxford 3000. Одна подпорка стоит выше: `ill` Oxford 3000 помечает A2, и
 *    словник A2 Key его содержит. Плюс слова прошлых модулей этой же ступени,
 *    у которых карточка уже есть: coast, poster, concert, guest, colleague.
 *
 * ВОЗВРАЩЕНИЕ. Три задания из пройденного: два в уроке 1 (там они и работают —
 * словарная форма после `didn't` и после `did` одна и та же) и одно в уроке 4
 * (вопрос с `was` из модуля 1, ровно то, с чем сравнивают). Берутся ссылкой
 * (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "sprosit-o-proshlom",
  title: "Спросить о прошлом",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PAST past simple, «FORM: QUESTIONS»: «Can use 'yes/no' and 'wh-' " +
        "question forms with 'you' with a limited range of verbs», пример источника " +
        "— «Did you buy something yesterday?». " +
        "A2, QUESTIONS yes/no, «FORM: LEXICAL VERBS WITH 'DO'»: «Can use auxiliary " +
        "'do' + subject + main verb to form 'yes/no' questions» — порядок слов " +
        "урока 1. " +
        "A2, QUESTIONS wh-, «FORM: WITH AUXILIARY 'DO'»: «Can use 'wh-'words + " +
        "auxiliary 'do' + subject + main verb to form 'wh-'questions», сам пункт " +
        "помечен ссылкой на past simple — это урок 3. " +
        "ЧЕГО НЕТ. B1, CLAUSES interrogatives, «FORM: 'WH-' INTERROGATIVE, " +
        "SUBJECT»: «Can form questions with a 'wh-' word as subject, without an " +
        "auxiliary verb», пример «What happened?» — вопрос вида «Who came?» выше " +
        "ступени. B1, QUESTIONS yes/no, «FORM: NEGATIVE QUESTIONS, AUXILIARY " +
        "VERBS»: «Can use auxiliary 'do' and 'have' + 'n't' + subject + main verb " +
        "to form negative 'yes/no' questions», пример «Don't you think so?» — " +
        "отрицательного вопроса в модуле нет по той же причине",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОКИ 2 И 5. с. 79, Information exchange, A2: «Can ask and answer " +
        "questions about pastimes and past activities» — источник называет обе " +
        "стороны, спросить и ответить, поэтому короткий ответ стоит отдельным " +
        "уроком. Там же, с. 79: «Can ask and answer simple questions about an event " +
        "(e.g. ask where and when it took place, who was there and what it was " +
        "like)» — это урок 5 целиком. Оттуда же взят и оборот Who was there?: " +
        "English Grammar Profile относит вопрос с wh-словом в роли подлежащего к " +
        "B1, а эта строка даёт его на A2, и модуль 1 этой же ступени уже стоит на " +
        "ней. Расхождение источников названо в шапке файла. " +
        "УРОК 6, ЧТЕНИЕ. с. 55, Reading correspondence, A2: «Can understand short, " +
        "simple personal letters». " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority (e.g. " +
        "very basic personal and family information, shopping, local geography, " +
        "employment), provided people articulate clearly and slowly» — отсюда " +
        "pace: \"slow\". " +
        "УРОК 8, ПИСЬМО. с. 83, Correspondence, A2: «Can exchange information by " +
        "text message, by e-mail or in short letters, responding to questions from " +
        "the other person (e.g. about a new product or activity)» — жанр и дело " +
        "урока письма. Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 2, КОРОТКИЙ ОТВЕТ. с. 52, Language specifications, Verb forms: " +
        "«Short questions (Can you?) and answers (No, he doesn't)» — короткий ответ " +
        "повторяет то служебное слово, что стоит в вопросе. " +
        "УРОКИ 3 И 5, ВОПРОСИТЕЛЬНЫЕ СЛОВА. с. 52, раздел Interrogatives, перечень " +
        "идёт в несколько строк — «Where; When», «Who; Whose; Which», — и кончается " +
        "оговоркой «(including the interrogative forms of all tenses and modals " +
        "listed)». Никакого ограничения по лицу там нет. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: season, camping, winner, score, goal, " +
        "musician, comedy, cartoon, character, celebrity, stage, brilliant, " +
        "excellent, unusual, scared, surprised, storm, cloud, dry, wet, sky, chef. " +
        "Помету B1 Oxford 3000 ставит трём словам — stadium, pleasant, tent, — а " +
        "словник A2 Key их содержит: по правилу ступени (CLAUDE.md, «Объём " +
        "словаря») они в запасе и потому взяты. " +
        "Слов luggage, suitcase, campsite, timetable, quiz, fog, guidebook, " +
        "sightseeing, postcard, tram, motorway Oxford 3000 не содержит вовсе, а " +
        "словник A2 Key требует. Слова opera и harbour Oxford 3000 тоже не " +
        "содержит, а Oxford 5000 помечает B2; словник A2 Key требует оба. " +
        "Подпорки в примерах и текстах: late, wrong, grey, match, cinema, train, " +
        "family, afternoon, food, start, watch, dark, cold, happy, full, big, " +
        "small, nothing, quiet — все A1. Подпорка ill стоит на A2, и словник A2 " +
        "Key её содержит",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Все тридцать " +
        "восемь карточек модуля в нём есть. Правило самого словника, с. 2, раздел " +
        "«Exemplification»: пример при слове дан только там, где значение надо " +
        "сузить, — «Example phrases and sentences … are given only where words with " +
        "different meanings need to be constrained»",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ, слоговой согласный без ə): luggage /ˈlʌgɪdʒ/, suitcase " +
        "/ˈsuːtkeɪs/, season /ˈsiːzn/, campsite /ˈkæmpsaɪt/, timetable " +
        "/ˈtaɪmteɪbl/, musician /mjuːˈzɪʃn/, celebrity /səˈlebrɪti/, character " +
        "/ˈkærɪktə/, opera /ˈɒpərə/, pleasant /ˈpleznt/, harbour /ˈhɑːbə/, " +
        "motorway /ˈməʊtəweɪ/",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "спрашивать о действии: Did you go to the concert?",
    "отвечать коротко: Yes, I did и No, I didn't",
    "спрашивать вопросительным словом: What did you buy?",
    "выбирать между did и was в вопросе о прошлом",
    "расспрашивать о событии несколькими вопросами подряд",
    "понимать письмо, где спрашивают о прошедших днях",
    "слышать в записи вопрос о прошлом и ответ на него",
    "находить в письме вопросы и проверять, на все ли есть ответ",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vopros-s-did",
      title: "Спросить, было ли: Did you go?",
      estimatedMinutes: 15,
      outcome: "спрашивать о действии: Did you go to the concert?",
      vozvrat: [
        { iz: "ya-ne-delal", zadanie: "z1-dopisat-prostuyu" },
        { iz: "ya-ne-delal", zadanie: "z2-vybrat-prostuyu" },
      ],

      blocks: [
        {
          id: "zachem-sprashivat-o-deystvii",
          kind: "explain",
          text: [
            "Твой сослуживец ездил на побережье, и тебе хочется расспросить его о поездке.",
            "По-английски первый вопрос звучит так: Did you go to the coast?",
            "Вопрос о прошлом начинается со слова did, и оно берёт на себя прошедшее время.",
          ],
        },
        {
          id: "kak-stroitsya-vopros",
          kind: "table",
          caption: "Строка и вопрос к ней",
          zvuchat: [
            "you went",
            "Did you go?",
            "you bought",
            "Did you buy?",
            "you saw",
            "Did you see?",
            "you had",
            "Did you have?",
            "she came",
            "Did she come?",
          ],
          head: ["Так говорят о прошлом", "Так об этом спрашивают"],
          rows: [
            ["you went", "Did you go?"],
            ["you bought", "Did you buy?"],
            ["you saw", "Did you see?"],
            ["you had", "Did you have?"],
            ["she came", "Did she come?"],
          ],
        },
        {
          id: "pochemu-glagol-slovarnyy",
          kind: "explain",
          text: [
            "О прошлом в вопросе говорит слово did, и оно стоит в начале.",
            "Поэтому глагол рядом с ним возвращается к словарной форме: не went, а go.",
            "Это то же правило, что после didn't: о прошлом говорят один раз.",
            "В последней строке вместо you стоит she, а did осталось прежним.",
          ],
        },
        {
          id: "ne-did-went",
          kind: "note",
          tone: "mistake",
          text:
            "«Did you went?» и «Did you saw?» — так не говорят.\n\nПрошедшее время в " +
            "этих записях названо дважды: сначала словом did, потом формой глагола.",
        },
        {
          id: "chto-takoe-deystvie",
          kind: "explain",
          text: [
            "Порядок в вопросе такой: did, потом тот, кто действует, потом само действие.",
            "Действие — это то, что происходит: пойти, купить, увидеть, начаться.",
            "В прошлых модулях курс звал такое делом: слово «действие» значит то же самое.",
            "Остальные слова стоят там же, где в обычной строке.",
          ],
        },
        {
          id: "primery-o-poezdke",
          kind: "example",
          caption: "Вопросы о поездке",
          zvuchat: [
            "Did you go to the coast?",
            "Did you take a suitcase?",
            "Did you buy a postcard?",
          ],
          text:
            "Did you go to the coast?\nDid you take a suitcase?\nDid you buy a postcard?",
          explain:
            "Три вопроса об одной поездке. В каждом did стоит первым, а действие — go, " +
            "take, buy — в словарной форме.",
        },
        {
          id: "slovar-poezdki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "luggage", translation: "багаж", example: "Did you take the luggage?", hint: "/ˈlʌgɪdʒ/" },
            { term: "suitcase", translation: "чемодан", example: "Did you buy a suitcase?", hint: "/ˈsuːtkeɪs/" },
            { term: "season", translation: "время года, сезон", example: "The season was long.", hint: "/ˈsiːzn/" },
            { term: "camping", translation: "отдых в палатке", example: "Did you go camping?", hint: "/ˈkæmpɪŋ/" },
            { term: "campsite", translation: "место для палаток", example: "The campsite was quiet.", hint: "/ˈkæmpsaɪt/" },
            { term: "timetable", translation: "расписание", example: "Did you see the timetable?", hint: "/ˈtaɪmteɪbl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-did",
          kind: "gap",
          prompt: "Спроси своего сослуживца, ездил ли он на побережье. Допиши первое слово вопроса.",
          before: "",
          after: " you go to the coast?",
          answer: "Did",
          hint: "Одно слово, и с него вопрос о прошлом начинается.",
          why: "Did you go to the coast? Вопрос о прошлом начинается словом did.",
        },
        {
          id: "z2-vybrat-vopros-o-chemodane",
          kind: "choice",
          prompt: "Как спросить, покупал ли он чемодан?",
          options: [
            { text: "Did you bought a suitcase?" },
            { text: "Did you buy a suitcase?", correct: true },
            { text: "Do you buy a suitcase?" },
          ],
          hint: "В одной записи прошедшее названо дважды, в другой вопрос вышел о том, что бывает всегда.",
          why:
            "Did you buy a suitcase? Слово did уже сказало о прошлом, и глагол рядом " +
            "с ним стоит в словарной форме.",
        },
        {
          id: "z3-otmetit-vernye-voprosy",
          kind: "hottext",
          prompt: "Отметь вопросы, построенные верно.",
          parts: [
            { text: "Did you see the timetable", selectable: true, correct: true },
            { text: " · " },
            { text: "Did you saw the timetable", selectable: true },
            { text: " · " },
            { text: "Did you take the luggage", selectable: true, correct: true },
            { text: " · " },
            { text: "Did you took the luggage", selectable: true },
          ],
          hint: "Смотри на глагол: в верном вопросе он стоит так, как записан в словаре.",
          why:
            "Верны Did you see the timetable и Did you take the luggage. В двух других " +
            "глагол остался в форме прошедшего, а рядом с did она не нужна.",
        },
        {
          id: "z4-sobrat-vopros-o-chemodane",
          kind: "order",
          prompt: "Собери вопрос: спроси, брал ли он чемодан.",
          items: ["a suitcase?", "take", "you", "Did"],
          answer: [3, 2, 1, 0],
          hint: "Первым стоит did, потом тот, кто действует, потом само действие.",
          why: "Did you take a suitcase? Порядок в вопросе один: did, человек, действие.",
        },
        {
          id: "z5-napisat-vopros-o-pohode",
          kind: "short",
          prompt:
            "Спроси своего сослуживца, ездил ли он отдыхать в палатке. Обратись к нему на you и начни с Did.",
          answer: "Did you go camping?",
          accept: ["Did you go camping"],
          hint: "Отдых в палатке — это go camping.",
          why: "Did you go camping? После did глагол go стоит в словарной форме.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "korotkiy-otvet-did",
      title: "Короткий ответ: Yes, I did",
      estimatedMinutes: 14,
      outcome: "отвечать коротко: Yes, I did и No, I didn't",

      blocks: [
        {
          id: "zachem-korotkiy-otvet",
          kind: "explain",
          text: [
            "Тебя спросили: Did you go to the stadium?",
            "Повторять весь вопрос в ответе не нужно — хватает двух слов.",
            "Yes, I did — да. No, I didn't — нет.",
          ],
        },
        {
          id: "dva-korotkih-otveta",
          kind: "table",
          caption: "Один ответ на любой вопрос с did",
          zvuchat: [
            "Did you go?",
            "Yes, I did.",
            "No, I didn't.",
            "Did you buy it?",
            "Did you see the goal?",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Did you go?", "Yes, I did.", "No, I didn't."],
            ["Did you buy it?", "Yes, I did.", "No, I didn't."],
            ["Did you see the goal?", "Yes, I did.", "No, I didn't."],
          ],
        },
        {
          id: "pochemu-otvet-odin",
          kind: "explain",
          text: [
            "Правый столбец во всех трёх строках одинаковый, и это не случайность.",
            "В коротком ответе стоит did, а само действие не называют.",
            "Действие уже названо в вопросе, и повторять его незачем.",
            "Поэтому ответ не зависит от того, о чём спросили.",
          ],
        },
        {
          id: "ne-yes-i-do",
          kind: "note",
          tone: "mistake",
          text:
            "«Did you go?» — «Yes, I do» — так не отвечают.\n\nСлово do отвечает о " +
            "том, что бывает всегда, а этот вопрос был о прошлом: о нём сказало слово did.",
        },
        {
          id: "otvet-i-podrobnost",
          kind: "explain",
          text: [
            "После короткого ответа можно добавить подробность, и это делают часто.",
            "Сначала идёт Yes, I did или No, I didn't, и только потом остальное.",
          ],
        },
        {
          id: "razgovor-o-matche",
          kind: "example",
          caption: "Разговор о матче",
          razgovor: true,
          text:
            "— Did you go to the stadium?\n— Yes, I did. The match was long.\n— Did you see the goal?\n— No, I didn't.",
          explain:
            "Два вопроса и два ответа. В первом ответе после коротких слов добавлена " +
            "подробность, во втором её нет — и так тоже можно.",
        },
        {
          id: "slovar-sobytiya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "stadium", translation: "стадион", example: "Did you go to the stadium?", hint: "/ˈsteɪdiəm/" },
            { term: "winner", translation: "победитель", example: "Did you see the winner?", hint: "/ˈwɪnə/" },
            { term: "score", translation: "счёт в игре", example: "Did you see the score?", hint: "/skɔː/" },
            { term: "goal", translation: "гол", example: "Did you see the goal?", hint: "/gəʊl/" },
            { term: "musician", translation: "музыкант", example: "Did you meet the musician?", hint: "/mjuːˈzɪʃn/" },
            { term: "quiz", translation: "викторина", example: "The quiz was long.", hint: "/kwɪz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-korotkiy-otvet",
          kind: "gap",
          prompt: "Тебя спросили: «Did you see the goal?» Гол ты видишь. Допиши недостающее слово ответа.",
          before: "Yes, I ",
          after: ".",
          answer: "did",
          hint: "В коротком ответе стоит то же слово, с которого начался вопрос.",
          why: "Yes, I did. Короткий ответ о прошлом строится словом did.",
        },
        {
          id: "z2-vybrat-otricatelnyy-otvet",
          kind: "choice",
          prompt: "Тебя спросили: «Did you meet the musician?» Ответь коротко — нет.",
          options: [
            { text: "No, I don't." },
            { text: "No, I didn't.", correct: true },
            { text: "No, I wasn't." },
          ],
          hint: "Два ответа взяли не то время, а один из них ещё и не тот глагол.",
          why:
            "No, I didn't. Вопрос начался словом did, и короткий ответ берёт то же " +
            "слово с отрицанием.",
        },
        {
          id: "z3-otmetit-korotkie-otvety",
          kind: "hottext",
          prompt: "Отметь короткие ответы о прошлом.",
          parts: [
            { text: "Yes, I did", selectable: true, correct: true },
            { text: " · " },
            { text: "Yes, I do", selectable: true },
            { text: " · " },
            { text: "No, I didn't", selectable: true, correct: true },
            { text: " · " },
            { text: "No, I am not", selectable: true },
          ],
          hint: "О прошлом отвечает только одно слово, и оно же стоит в начале вопроса.",
          why:
            "О прошлом отвечают Yes, I did и No, I didn't. Ответы с do и am говорят о " +
            "том, что есть сейчас.",
        },
        {
          id: "z4-sopostavit-vopros-i-otvet",
          kind: "match",
          prompt: "Соедини вопрос с ответом, который ему подходит.",
          left: ["Did you go to the stadium?", "Were you at the quiz?", "Did you see the winner?"],
          right: ["Yes, I was.", "Yes, I did, and the winner was happy.", "Yes, I did. The stadium was full."],
          answer: [2, 0, 1],
          hint: "Подробность в каждом ответе называет своё место или своего человека.",
          why:
            "Did you go to the stadium? — Yes, I did. The stadium was full. Were you " +
            "at the quiz? — Yes, I was. Did you see the winner? — Yes, I did, and the " +
            "winner was happy. Ответ на вопрос с were берёт was, а не did.",
        },
        {
          id: "z5-napisat-otvet-o-stadione",
          kind: "short",
          prompt: "Тебя спросили: «Did you go to the stadium?» Ответь коротко — да. Три слова.",
          answer: "Yes, I did.",
          accept: ["Yes, I did", "Yes I did", "Yes I did."],
          hint: "Начни с yes, потом назови себя, потом did.",
          why: "Yes, I did. Действие из вопроса в коротком ответе не повторяют.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-gde-kogda",
      title: "Что, где и когда: What did you buy?",
      estimatedMinutes: 15,
      outcome: "спрашивать вопросительным словом: What did you buy?",

      blocks: [
        {
          id: "zachem-voprosnoe-slovo",
          kind: "explain",
          text: [
            "На вопрос Did you buy a poster? ответом будет только да или нет.",
            "А узнать хочется другое: что именно куплено.",
            "Тогда перед did ставят вопросительное слово: What did you buy?",
          ],
        },
        {
          id: "voprosnye-slova-s-did",
          kind: "table",
          caption: "Вопросительное слово впереди",
          zvuchat: [
            "What did you buy?",
            "Where did you go?",
            "When did you come?",
            "Why did you wait?",
          ],
          head: ["Вопрос", "О чём спрашивают"],
          rows: [
            ["What did you buy?", "о вещи"],
            ["Where did you go?", "о месте"],
            ["When did you come?", "о времени"],
            ["Why did you wait?", "о причине"],
          ],
        },
        {
          id: "pochemu-slovo-pervym",
          kind: "explain",
          text: [
            "Вопросительное слово встаёт впереди, а дальше вопрос не меняется.",
            "За ним идут did, человек и действие в словарной форме — тот же порядок, что в уроке про Did you go?",
            "Меняется только начало, и оно говорит, какой ответ нужен.",
          ],
        },
        {
          id: "ne-what-you-did",
          kind: "note",
          tone: "mistake",
          text:
            "«What you did buy?» и «What did you bought?» — так не говорят.\n\nПосле " +
            "вопросительного слова сразу стоит did, а глагол остаётся словарным.",
        },
        {
          id: "razgovor-o-vechere",
          kind: "example",
          caption: "Разговор о вчерашнем вечере",
          razgovor: true,
          text:
            "— Where did you go yesterday?\n— I went to the cinema.\n— What did you see?\n— A cartoon.",
          explain:
            "Вопрос со словом Where или What ждёт подробности, а не слова «да». Второй " +
            "вопрос уже не называет кино: о нём сказал первый ответ, и повторять незачем.",
        },
        {
          id: "slovar-kino",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "comedy", translation: "комедия", example: "Did you see the comedy?", hint: "/ˈkɒmədi/" },
            { term: "cartoon", translation: "мультфильм", example: "What did you watch? A cartoon.", hint: "/kɑːˈtuːn/" },
            { term: "character", translation: "герой книги или фильма", example: "I liked the character.", hint: "/ˈkærɪktə/" },
            { term: "celebrity", translation: "знаменитость", example: "Did you see a celebrity?", hint: "/səˈlebrɪti/" },
            { term: "stage", translation: "сцена", example: "The musician was on the stage.", hint: "/steɪdʒ/" },
            { term: "opera", translation: "опера", example: "When did you go to the opera?", hint: "/ˈɒpərə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-where",
          kind: "gap",
          prompt: "Ты хочешь узнать место. Допиши вопросительное слово.",
          before: "",
          after: " did you go?",
          answer: "Where",
          hint: "О месте спрашивают одним словом, и оно стоит перед did.",
          why: "Where did you go? О месте спрашивает слово where.",
        },
        {
          id: "z2-vybrat-vopros-o-veshchi",
          kind: "choice",
          prompt: "Как спросить, что он купил?",
          options: [
            { text: "What you did buy?" },
            { text: "What did you buy?", correct: true },
            { text: "What did you bought?" },
          ],
          hint: "В одной записи did ушло со своего места, в другой глагол взял форму прошедшего.",
          why:
            "What did you buy? После вопросительного слова стоит did, потом человек, " +
            "потом глагол в словарной форме.",
        },
        {
          id: "z3-otmetit-nachalo-voprosa",
          kind: "hottext",
          prompt: "Отметь вопросы, в которых спрашивают о времени.",
          parts: [
            { text: "When did you come", selectable: true, correct: true },
            { text: " · " },
            { text: "Where did you come", selectable: true },
            { text: " · " },
            { text: "When did the opera start", selectable: true, correct: true },
            { text: " · " },
            { text: "Why did the opera start", selectable: true },
          ],
          hint: "О времени спрашивает только одно из четырёх начал.",
          why:
            "О времени спрашивают When did you come и When did the opera start. Where " +
            "спрашивает о месте, why — о причине.",
        },
        {
          id: "z4-sobrat-vopros-o-meste",
          kind: "order",
          prompt: "Собери вопрос: узнай, где он видел знаменитость.",
          items: ["a celebrity?", "see", "you", "did", "Where"],
          answer: [4, 3, 2, 1, 0],
          hint: "Впереди вопросительное слово, за ним did, человек и действие.",
          why:
            "Where did you see a celebrity? Вопросительное слово стоит первым, и " +
            "дальше порядок обычный.",
        },
        {
          id: "z5-napisat-vopros-o-komedii",
          kind: "short",
          prompt:
            "Спроси собеседника, когда он смотрел комедию. Обратись к нему на you и начни с When.",
          answer: "When did you watch the comedy?",
          accept: [
            "When did you watch the comedy",
            "When did you watch a comedy?",
            "When did you watch a comedy",
            "When did you see the comedy?",
            "When did you see the comedy",
            "When did you see a comedy?",
            "When did you see a comedy",
          ],
          hint: "После When ставят did, потом you, потом глагол в словарной форме.",
          why:
            "When did you watch the comedy? О времени спрашивает when, и глагол после " +
            "did остаётся словарным.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "did-ili-was",
      title: "Did или was: о действии и о том, каким было",
      estimatedMinutes: 15,
      outcome: "выбирать между did и was в вопросе о прошлом",
      vozvrat: [{ iz: "eto-bylo", zadanie: "z2-vybrat-vopros" }],

      blocks: [
        {
          id: "dva-raznyh-voprosa",
          kind: "explain",
          text: [
            "О вчерашнем концерте спрашивают двумя разными вопросами.",
            "Did you go to the concert? — о действии: ездил или нет.",
            "Was the concert good? — о самом концерте: каким он вышел.",
            "Слово выбирают по тому, о чём спрашиваешь.",
          ],
        },
        {
          id: "did-i-was-ryadom",
          kind: "table",
          caption: "О действии и о том, каким было",
          zvuchat: [
            "Did you go?",
            "Was it good?",
            "Did you buy it?",
            "Was it cheap?",
            "Did you see it?",
            "Was it long?",
          ],
          head: ["О действии", "О том, каким было"],
          rows: [
            ["Did you go?", "Was it good?"],
            ["Did you buy it?", "Was it cheap?"],
            ["Did you see it?", "Was it long?"],
          ],
        },
        {
          id: "pochemu-raznye-slova",
          kind: "explain",
          text: [
            "Слева всюду есть действие: пойти, купить, увидеть.",
            "Справа действия нет — там сказано, каким что-то было.",
            "Did спрашивает о действии, а was и were — о том, каким что-то было.",
            "В одном вопросе стоит либо did, либо was.",
          ],
        },
        {
          id: "ne-was-you-go",
          kind: "note",
          tone: "mistake",
          text:
            "«Was you go to the concert?» и «Did the concert was good?» — так не " +
            "говорят.\n\nВ первой записи есть действие, значит нужен did. Во второй " +
            "действия нет, значит нужен was.",
        },
        {
          id: "kak-vybrat-slovo",
          kind: "explain",
          text: [
            "Проверить себя можно так: найди в вопросе действие.",
            "Есть действие — бери did. Действия нет — бери was или were.",
          ],
        },
        {
          id: "razgovor-o-kontserte",
          kind: "example",
          caption: "Разговор о концерте",
          razgovor: true,
          text:
            "— Did you go to the concert?\n— Yes, I did.\n— Was it good?\n— It was brilliant.",
          explain:
            "Первый вопрос о действии и потому берёт did. Второй о самом концерте и " +
            "потому берёт was.",
        },
        {
          id: "slovar-vpechatleniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "brilliant", translation: "замечательный", example: "The concert was brilliant.", hint: "/ˈbrɪliənt/" },
            { term: "excellent", translation: "отличный", example: "The food was excellent.", hint: "/ˈeksələnt/" },
            { term: "unusual", translation: "необычный", example: "Was the film unusual?", hint: "/ʌnˈjuːʒuəl/" },
            { term: "scared", translation: "испуганный", example: "I was scared.", hint: "/skeəd/" },
            { term: "surprised", translation: "удивлённый", example: "We were surprised.", hint: "/səˈpraɪzd/" },
            { term: "pleasant", translation: "приятный", example: "The evening was pleasant.", hint: "/ˈpleznt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-was-ili-did",
          kind: "gap",
          prompt: "Ты спрашиваешь не о действии, а о самом фильме. Допиши недостающее слово.",
          before: "",
          after: " the film unusual?",
          answer: "Was",
          hint: "Действия в этом вопросе нет — есть только то, каким был фильм.",
          why: "Was the film unusual? Действия в вопросе нет, поэтому взято was.",
        },
        {
          id: "z2-vybrat-o-deystvii",
          kind: "choice",
          prompt: "Как спросить, ходил ли он в оперу?",
          options: [
            { text: "Was you go to the opera?" },
            { text: "Did you go to the opera?", correct: true },
            { text: "Did you was at the opera?" },
          ],
          hint: "В вопросе есть действие — сходить. Значит одно из трёх слов лишнее.",
          why:
            "Did you go to the opera? В вопросе есть действие, и поэтому он строится " +
            "словом did.",
        },
        {
          id: "z3-otmetit-voprosy-o-tom-kakim",
          kind: "hottext",
          prompt: "Отметь вопросы, в которых спрашивают, каким что-то было.",
          parts: [
            { text: "Was the evening pleasant", selectable: true, correct: true },
            { text: " · " },
            { text: "Did you meet the guest", selectable: true },
            { text: " · " },
            { text: "Were you scared", selectable: true, correct: true },
            { text: " · " },
            { text: "Did you buy the poster", selectable: true },
          ],
          hint: "В двух вопросах названо действие, а в двух других — нет.",
          why:
            "О том, каким что-то было, спрашивают Was the evening pleasant и Were you " +
            "scared. В двух остальных есть действие — встретить и купить, — и там " +
            "стоит did.",
        },
        {
          id: "z4-sopostavit-vopros-i-slovo",
          kind: "match",
          prompt: "Соедини вопрос с ответом, который ему подходит.",
          left: ["Did you go to the concert?", "Was the concert good?", "Were you surprised?"],
          right: ["It was excellent.", "Yes, I was. It was unusual.", "Yes, I did."],
          answer: [2, 0, 1],
          hint: "Ответ берёт то же слово, что и вопрос: did отвечает did, was отвечает was.",
          why:
            "Did you go to the concert? — Yes, I did. Was the concert good? — It was " +
            "excellent. Were you surprised? — Yes, I was. It was unusual. Ответ берёт " +
            "то же слово, что и вопрос.",
        },
        {
          id: "z5-napisat-vopros-o-vechere",
          kind: "short",
          prompt: "Спроси по-английски, был ли вечер приятным. Действия в вопросе нет.",
          answer: "Was the evening pleasant?",
          accept: ["Was the evening pleasant"],
          hint: "Начни со слова, которым спрашивают, каким что-то было.",
          why:
            "Was the evening pleasant? Действия в вопросе нет, поэтому он строится " +
            "словом was.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rassprosit-o-sobytii",
      title: "Расспросить о событии",
      estimatedMinutes: 15,
      outcome: "расспрашивать о событии несколькими вопросами подряд",

      blocks: [
        {
          id: "zachem-neskolko-voprosov",
          kind: "explain",
          text: [
            "Об одном событии редко спрашивают одним вопросом.",
            "Спрашивают о месте, о времени, о людях и о том, каким событие вышло.",
            "Каждый следующий вопрос опирается на прежний ответ и потому бывает коротким.",
          ],
        },
        {
          id: "chetyre-voprosa-o-sobytii",
          kind: "table",
          caption: "Четыре вопроса о событии",
          zvuchat: [
            "Where was the concert?",
            "When did it start?",
            "Who was there?",
            "Was it good?",
          ],
          head: ["О чём", "Вопрос"],
          rows: [
            ["о месте", "Where was the concert?"],
            ["о времени", "When did it start?"],
            ["о людях", "Who was there?"],
            ["о впечатлении", "Was it good?"],
          ],
        },
        {
          id: "who-i-pochemu-was",
          kind: "explain",
          text: [
            "О людях спрашивает who — такое же вопросительное слово, как what и where.",
            "Три вопроса из четырёх берут was, и это не случайность.",
            "О месте, о людях и о впечатлении спрашивают без всякого действия.",
            "Действие есть только во втором вопросе — начаться, — и там стоит did.",
          ],
        },
        {
          id: "poryadok-rassprosa",
          kind: "note",
          tone: "info",
          text:
            "В разговоре эти четыре вопроса идут обычно от места и времени к " +
            "подробностям.\n\nЕсли начать с впечатления, собеседник не поймёт, о чём " +
            "речь: событие ещё не названо.",
        },
        {
          id: "razgovor-rassprosa",
          kind: "example",
          caption: "Расспрос о концерте",
          razgovor: true,
          text:
            "— Where was the concert?\n— At the stadium.\n— When did it start?\n— At seven.\n— Who was there?\n— My colleague and my sister.\n— Was it good?\n— The sky was grey, but the concert was excellent.",
          explain:
            "Восемь строк: четыре вопроса и четыре ответа. Вопросы идут в том же " +
            "порядке, что и в таблице выше.",
        },
        {
          id: "slovar-pogody",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "storm", translation: "гроза, буря", example: "Did you see the storm?", hint: "/stɔːm/" },
            { term: "cloud", translation: "облако", example: "The clouds were dark.", hint: "/klaʊd/" },
            { term: "fog", translation: "туман", example: "The morning fog was cold.", hint: "/fɒg/" },
            { term: "dry", translation: "сухой", example: "The season was dry.", hint: "/draɪ/" },
            { term: "wet", translation: "мокрый", example: "My luggage was wet.", hint: "/wet/" },
            { term: "sky", translation: "небо", example: "The sky was grey.", hint: "/skaɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-o-chem-eshche-sprosit",
          kind: "choice",
          prompt: "В расспросе о концерте уже спросили о месте и о времени. О чём спрашивают дальше?",
          options: [
            { text: "Where was it?" },
            { text: "Who was there?", correct: true },
            { text: "When did it start?" },
          ],
          hint: "Два вопроса из трёх уже прозвучали. Посмотри таблицу и найди третий.",
          why:
            "Who was there? О месте и о времени уже спросили, и следующий вопрос " +
            "таблицы — о людях.",
        },
        {
          id: "z2-dopisat-o-lyudyah",
          kind: "gap",
          prompt: "Спроси, кто был на концерте. Допиши вопросительное слово.",
          before: "",
          after: " was there?",
          answer: "Who",
          hint: "О людях спрашивают одним словом.",
          why: "Who was there? О людях спрашивает слово who.",
        },
        {
          id: "z3-otmetit-voprosy-bez-deystviya",
          kind: "hottext",
          prompt: "Отметь вопросы, в которых нет действия.",
          parts: [
            { text: "Where was the storm", selectable: true, correct: true },
            { text: " · " },
            { text: "When did it start", selectable: true },
            { text: " · " },
            { text: "Was the sky grey", selectable: true, correct: true },
            { text: " · " },
            { text: "What did you see", selectable: true },
          ],
          hint: "Действие — это то, что происходит: начаться, увидеть.",
          why:
            "Действия нет в Where was the storm и Was the sky grey. В двух других есть " +
            "начаться и увидеть, поэтому там стоит did.",
        },
        {
          id: "z4-sobrat-rassprosom",
          kind: "order",
          prompt: "Собери расспрос: сначала о месте, потом о времени, потом о впечатлении.",
          items: ["Was it good?", "Where was the quiz?", "When did it start?"],
          answer: [1, 2, 0],
          hint: "Порядок назван в самом задании: место, время, впечатление.",
          why:
            "Where was the quiz? When did it start? Was it good? Порядок взят из " +
            "условия задания.",
        },
        {
          id: "z5-napisat-dva-voprosa",
          kind: "short",
          prompt:
            "Ты расспрашиваешь о вчерашней викторине и уже знаешь, где она была. Запиши два следующих вопроса: о времени и о людях.",
          answer: "When did it start? Who was there?",
          accept: [
            "When did it start Who was there",
            "When did it start? Who was there",
            "When did the quiz start? Who was there?",
          ],
          hint: "О времени спрашивает when, о людях — who. Первый вопрос берёт did, второй was.",
          why:
            "When did it start? Who was there? В первом вопросе есть действие, поэтому " +
            "он берёт did. Во втором действия нет, и там стоит was.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pismo-s-voprosami",
      title: "Читаем письмо с расспросом",
      estimatedMinutes: 13,
      outcome: "понимать письмо, где спрашивают о прошедших днях",

      blocks: [
        {
          id: "zachem-chitat-rassprosy",
          kind: "explain",
          text: [
            "В личном письме рассказ и вопросы идут вперемешку.",
            "Ниже письмо о поездке, и в конце его автор спрашивает о твоих днях.",
            "Читай целиком, потом отвечай.",
          ],
        },
        {
          id: "pismo-o-poezdke",
          kind: "text",
          title: "Письмо от Айгуль",
          genre: "email",
          body: [
            "Hi Alim!",
            "Last week I went to the coast with my family. We took a lot of luggage, " +
              "and the timetable was wrong: the train came late.",
            "The campsite was near the harbour. In the mornings the sky was grey, but " +
              "the afternoons were dry.",
            "I bought a guidebook and went sightseeing. I wrote you a postcard on " +
              "the last day.",
            "Now tell me about your week. Did you go to the stadium? Was the match " +
              "good? What did you buy at the market?",
            "Aigul",
          ],
          glossary: [
            { term: "a lot of", translation: "много" },
            { term: "wrong", translation: "неверный" },
            { term: "late", translation: "с опозданием" },
            { term: "near", translation: "рядом с" },
          ],
        },
        {
          id: "kak-ustroeno-pismo",
          kind: "note",
          tone: "info",
          text:
            "Письмо устроено в два хода: сначала рассказ о своей неделе, потом вопросы " +
            "о неделе того, кому пишут.\n\nВопросы стоят в конце, и их всегда больше " +
            "одного.",
        },
        {
          id: "slovar-pisma",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "harbour", translation: "гавань", example: "The campsite was near the harbour.", hint: "/ˈhɑːbə/" },
            { term: "guidebook", translation: "путеводитель", example: "I bought a guidebook.", hint: "/ˈgaɪdbʊk/" },
            { term: "sightseeing", translation: "осмотр достопримечательностей", example: "I went sightseeing.", hint: "/ˈsaɪtsiːɪŋ/" },
            { term: "postcard", translation: "открытка", example: "I wrote you a postcard.", hint: "/ˈpəʊstkɑːd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kuda-ezdila",
          kind: "choice",
          about: "pismo-o-poezdke",
          prompt: "Куда ездила Айгуль?",
          options: [
            { text: "В горы" },
            { text: "На побережье", correct: true },
            { text: "За границу" },
          ],
          hint: "Место названо в первой строке рассказа.",
          why: "Last week I went to the coast with my family.",
        },
        {
          id: "z2-chto-bylo-nevernym",
          kind: "short",
          about: "pismo-o-poezdke",
          prompt: "Что оказалось неверным? Ответь одним английским словом.",
          answer: "timetable",
          accept: ["the timetable"],
          hint: "Из-за этого поезд пришёл с опозданием.",
          why: "The timetable was wrong: the train came late.",
        },
        {
          id: "z3-otmetit-voprosy-pisma",
          kind: "hottext",
          about: "pismo-o-poezdke",
          prompt: "Отметь то, о чём Айгуль спрашивает Алима.",
          parts: [
            { text: "ходил ли он на стадион", selectable: true, correct: true },
            { text: " · " },
            { text: "каким был матч", selectable: true, correct: true },
            { text: " · " },
            { text: "сколько стоил путеводитель", selectable: true },
            { text: " · " },
            { text: "что он купил на рынке", selectable: true, correct: true },
          ],
          hint: "Вопросы стоят в последней строке перед подписью.",
          why:
            "Did you go to the stadium? Was the match good? What did you buy at the " +
            "market? О цене путеводителя Айгуль не спрашивает.",
        },
        {
          id: "z4-kakogo-otveta-zhdet",
          kind: "match",
          about: "pismo-o-poezdke",
          prompt: "Соедини вопрос из письма с тем, какого ответа он ждёт.",
          left: ["Did you go to the stadium?", "Was the match good?", "What did you buy at the market?"],
          right: ["названия вещи", "да или нет", "того, каким что-то было"],
          answer: [1, 2, 0],
          hint: "Начало вопроса говорит, какого ответа ждут: did, was или what.",
          why:
            "Did you go to the stadium? ждёт да или нет. Was the match good? " +
            "спрашивает, каким что-то было. What did you buy at the market? ждёт " +
            "названия вещи.",
        },
        {
          id: "z5-skolko-voprosov",
          kind: "short",
          about: "pismo-o-poezdke",
          prompt: "Сколько вопросов задаёт Айгуль в конце письма? Ответь цифрой.",
          answer: "3",
          accept: ["три"],
          hint: "Считай знаки вопроса в последней строке перед подписью.",
          why:
            "Три: Did you go to the stadium? Was the match good? What did you buy at " +
            "the market?",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-rassprosy",
      title: "Слушаем расспрос о выходных",
      estimatedMinutes: 13,
      outcome: "слышать в записи вопрос о прошлом и ответ на него",

      blocks: [
        {
          id: "zachem-slushat-vopros",
          kind: "explain",
          text: [
            "В разговоре вопрос звучит быстро, и did в нём почти не слышно.",
            "Первое слово поэтому лови по смыслу: если речь о вчерашнем дне, это did.",
            "Ниже запись: двое говорят о прошедших выходных.",
            "Слушай целиком, потом отвечай. Расшифровка спрятана под кнопкой.",
          ],
        },
        {
          id: "zapis-o-vyhodnyh",
          kind: "audio",
          caption: "Разговор о выходных",
          pace: "slow",
          skryt: true,
          transcript:
            "Did you go to the campsite? — No, I didn't. I took the tram to the " +
            "opera. — Was it good? — It was excellent. The stage was very small. — " +
            "What did you eat after that? — Nothing. The chef was ill.",
        },
        {
          id: "chto-slushat-v-razgovore",
          kind: "note",
          tone: "info",
          text:
            "Слушай, куда человек не поехал, на чём он приехал и каким было место.\n\n" +
            "Об этом и будут вопросы.",
        },
        {
          id: "slovar-zapisi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "tram", translation: "трамвай", example: "I took the tram to the opera.", hint: "/træm/" },
            { term: "tent", translation: "палатка", example: "The tent was wet.", hint: "/tent/" },
            { term: "motorway", translation: "автомагистраль", example: "The motorway was dry.", hint: "/ˈməʊtəweɪ/" },
            { term: "chef", translation: "повар", example: "The chef was ill.", hint: "/ʃef/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kuda-ne-poehal-v-zapisi",
          kind: "choice",
          about: "zapis-o-vyhodnyh",
          prompt: "Куда человек не поехал?",
          options: [
            { text: "В оперу" },
            { text: "На место для палаток", correct: true },
            { text: "На стадион" },
          ],
          hint: "На первый вопрос дан отрицательный ответ.",
          why: "Did you go to the campsite? — No, I didn't.",
        },
        {
          id: "z2-na-chem-priehal",
          kind: "short",
          about: "zapis-o-vyhodnyh",
          prompt: "На чём человек приехал в оперу? Ответь одним английским словом.",
          answer: "tram",
          accept: ["the tram"],
          hint: "Оно названо в той же реплике, где стоит отрицательный ответ.",
          why: "I took the tram to the opera.",
        },
        {
          id: "z3-kakoy-byla-stsena",
          kind: "choice",
          about: "zapis-o-vyhodnyh",
          prompt: "Какой была сцена?",
          options: [
            { text: "Большой" },
            { text: "Маленькой", correct: true },
            { text: "Тёмной" },
          ],
          hint: "О сцене сказано сразу после слов It was excellent.",
          why: "The stage was very small.",
        },
        {
          id: "z4-kto-byl-bolen",
          kind: "short",
          about: "zapis-o-vyhodnyh",
          prompt: "Кто был болен? Ответь одним английским словом.",
          answer: "chef",
          accept: ["the chef"],
          hint: "Это слово стоит в самом конце записи, перед словами was ill.",
          why: "The chef was ill.",
        },
        {
          id: "z5-vosstanovit-vopros",
          kind: "order",
          zvuk: "What did you eat after that? — Nothing.",
          prompt: "Послушай запись и собери из карточек то, что в ней сказано.",
          items: ["after that?", "eat", "you", "did", "What"],
          answer: [4, 3, 2, 1, 0],
          hint: "Вопросительное слово стоит впереди, и услышать его можно только в записи.",
          why:
            "What did you eat after that? Вопросительное слово стоит первым, за ним " +
            "did, человек и действие в словарной форме.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "otvechaem-na-voprosy-pisma",
      title: "Отвечаем на письмо с вопросами",
      estimatedMinutes: 15,
      outcome: "находить в письме вопросы и проверять, на все ли есть ответ",

      blocks: [
        {
          id: "zachem-otvechat-na-vse",
          kind: "explain",
          text: [
            "Тебе написали и о чём-то спросили.",
            "Ответ считается полным, когда отвечено на каждый вопрос, а не только на первый.",
            "Поэтому перед отправкой вопросы пересчитывают и сверяют с ответом.",
          ],
        },
        {
          id: "vopros-i-otvet-na-nego",
          kind: "table",
          caption: "Вопрос и ответ на него",
          zvuchat: [
            "Did you go camping?",
            "Yes, I did.",
            "Was the campsite quiet?",
            "Yes, it was.",
            "What did you take with you?",
            "I took a tent.",
          ],
          head: ["Вопрос письма", "Ответ"],
          rows: [
            ["Did you go camping?", "Yes, I did."],
            ["Was the campsite quiet?", "Yes, it was."],
            ["What did you take with you?", "I took a tent."],
          ],
        },
        {
          id: "pochemu-otvety-raznye",
          kind: "explain",
          text: [
            "Три вопроса получили три разных по устройству ответа.",
            "Вопрос с did ждёт коротких слов, вопрос с was — того, каким что-то было, вопрос со словом what — названия вещи.",
            "Отвечать всюду одинаково нельзя: часть ответов окажется не о том.",
          ],
        },
        {
          id: "obrazets-otveta",
          kind: "example",
          caption: "Образец ответа",
          zvuchat: [
            "Hi Daniyar!",
            "Yes, I went camping last week.",
            "The campsite was quiet, but the mornings were cold.",
            "I took a tent and a guidebook.",
            "Alim",
          ],
          text:
            "Hi Daniyar!\nYes, I went camping last week.\nThe campsite was quiet, but the mornings were cold.\nI took a tent and a guidebook.\nAlim",
          explain:
            "Пять строк: обращение, три ответа и подпись. Ответы идут в том же порядке, " +
            "в каком стояли вопросы, и найти нужный поэтому легко.",
        },
        {
          id: "chto-proverit-pered-otpravkoy",
          kind: "note",
          tone: "info",
          text:
            "Проверь четыре вещи. На каждый вопрос есть строка, и порядок ответов " +
            "тот же, что у вопросов. О прошлом сказано формой прошедшего, а в первой " +
            "строке стоит обращение.\n\nЕсли вопросов было три, а строк с ответом " +
            "две, письмо ещё не готово.",
        },

        // ---- задания ----
        {
          id: "z1-nayti-propushchennyy-otvet",
          kind: "choice",
          prompt:
            "Данияр спросил: «Did you go camping? Was the campsite quiet? What did you take with you?» В ответе написано: «Yes, I went camping. I took a tent.» Чего не хватает?",
          options: [
            { text: "Ответа о месте для палаток", correct: true },
            { text: "Ответа о самой поездке" },
            { text: "Ответа о взятых вещах" },
          ],
          hint: "Сравни вопросы и строки ответа по одному.",
          why:
            "Не хватает ответа о месте для палаток. О поездке и о вещах строки есть, а " +
            "вопрос Was the campsite quiet? остался без ответа.",
        },
        {
          id: "z2-sopostavit-vopros-i-vid-otveta",
          kind: "match",
          prompt: "Соедини вопрос с ответом, который на него отвечает.",
          left: ["Did you take the tent?", "Was the tent wet?", "What did you buy?"],
          right: ["A guidebook.", "No, I didn't.", "It was dry."],
          answer: [1, 2, 0],
          hint: "Начало вопроса говорит, какого ответа ждут: did, was или what.",
          why:
            "Did you take the tent? — No, I didn't. Was the tent wet? — It was dry. " +
            "What did you buy? — A guidebook.",
        },
        {
          id: "z3-otmetit-stroki-ne-o-proshlom",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят не о прошлом и потому в ответ не годятся.",
          parts: [
            { text: "I buy a guidebook every year", selectable: true, correct: true },
            { text: " · " },
            { text: "I bought a guidebook", selectable: true },
            { text: " · " },
            { text: "The campsite is quiet", selectable: true, correct: true },
            { text: " · " },
            { text: "The campsite was quiet", selectable: true },
          ],
          hint: "Смотри на форму глагола: bought и was говорят о прошлом, buy и is — о сегодняшнем дне.",
          why:
            "Не о прошлом говорят I buy a guidebook every year и The campsite is " +
            "quiet. Формы bought и was — это прошлое.",
        },
        {
          id: "z4-napisat-otvet-na-pismo",
          kind: "essay",
          prompt:
            "Данияр спросил: «Did you go camping? Was the campsite quiet? What did you take with you?» Ответь ему четырьмя строками: обращение и три ответа.",
          minWords: 11,
          sample:
            "Hi Daniyar!\nYes, I went camping last week.\nThe campsite was quiet, but the mornings were cold.\nI took a tent and a guidebook.",
          checklist: [
            "на каждый из трёх вопросов есть своя строка",
            "ответы идут в том же порядке, что и вопросы",
            "о прошлом сказано формой прошедшего, а не настоящим временем",
            "в первой строке стоит обращение к Данияру",
          ],
          hint: "Ответ на первый вопрос начинается с yes или no.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы ни один вопрос не " +
            "остался без строки.",
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
      // отличить по русскому переводу. Совпадений с заданиями уроков нет.

      // ---- итог 1 ----
      {
        id: "q-vopros-ispravit",
        kind: "short",
        outcome: "спрашивать о действии: Did you go to the concert?",
        prompt: "Исправь ошибку и запиши целиком: «Did you took the timetable?»",
        answer: "Did you take the timetable?",
        accept: ["Did you take the timetable"],
        why:
          "Did you take the timetable? О прошлом уже сказало слово did, и глагол " +
          "рядом с ним стоит в словарной форме.",
      },
      {
        id: "q-vopros-prichina",
        kind: "choice",
        outcome: "спрашивать о действии: Did you go to the concert?",
        prompt: "Почему запись «You go camping yesterday?» не годится в вопрос?",
        options: [
          { text: "Потому что в ней нет did, а без него вопроса о прошлом не выходит", correct: true },
          { text: "Потому что слово camping нельзя ставить перед yesterday" },
          { text: "Потому что после you нужен ещё один человек" },
        ],
        why:
          "Did you go camping yesterday? Вопрос о прошлом строится словом did, и оно " +
          "стоит впереди того, кто действует.",
      },

      // ---- итог 2 ----
      {
        id: "q-otvet-ispravit",
        kind: "short",
        outcome: "отвечать коротко: Yes, I did и No, I didn't",
        prompt: "Тебя спросили: «Did you see the winner?» Исправь ответ и запиши целиком: «No, I don't.»",
        answer: "No, I didn't.",
        accept: ["No, I didn't", "No I didn't", "No I didn't."],
        why:
          "No, I didn't. Вопрос начался словом did, и короткий ответ берёт то же " +
          "слово.",
      },
      {
        id: "q-otvet-otlichit",
        kind: "short",
        outcome: "отвечать коротко: Yes, I did и No, I didn't",
        prompt:
          "Тебя спросили: «Were you at the quiz?» Ответ «Yes, I did» сюда не подходит. Запиши подходящий короткий ответ — да.",
        answer: "Yes, I was.",
        accept: ["Yes, I was", "Yes I was", "Yes I was."],
        why:
          "Yes, I was. Короткий ответ повторяет то слово, с которого начался вопрос, " +
          "а этот начался с were.",
      },

      // ---- итог 3 ----
      {
        id: "q-voprosnoe-slovo-ispravit",
        kind: "short",
        outcome: "спрашивать вопросительным словом: What did you buy?",
        prompt: "Исправь ошибку и запиши целиком: «Where you did see the celebrity?»",
        answer: "Where did you see the celebrity?",
        accept: ["Where did you see the celebrity"],
        why:
          "Where did you see the celebrity? После вопросительного слова сразу стоит " +
          "did, и только потом человек.",
      },
      {
        id: "q-voprosnoe-slovo-vybrat",
        kind: "choice",
        outcome: "спрашивать вопросительным словом: What did you buy?",
        prompt: "Ответ был: «At seven.» Какой вопрос его вызвал?",
        options: [
          { text: "Where did the opera start?" },
          { text: "When did the opera start?", correct: true },
          { text: "Why did the opera start?" },
        ],
        why:
          "When did the opera start? — At seven. Ответ называет время, а о времени " +
          "спрашивает when.",
      },

      // ---- итог 4 ----
      {
        id: "q-did-was-ispravit",
        kind: "short",
        outcome: "выбирать между did и was в вопросе о прошлом",
        prompt: "Исправь ошибку и запиши целиком: «Did the campsite quiet?»",
        answer: "Was the campsite quiet?",
        accept: ["Was the campsite quiet"],
        why:
          "Was the campsite quiet? Спрошено не о действии, а о самом месте — и такой " +
          "вопрос начинают словом was.",
      },
      {
        id: "q-did-was-po-perevodu",
        kind: "choice",
        outcome: "выбирать между did и was в вопросе о прошлом",
        prompt:
          "Два русских вопроса: «Ты ходил на стадион?» и «Ты был на стадионе?» Какая пара переводов верна?",
        options: [
          { text: "Was you go to the stadium? — Did you at the stadium?" },
          { text: "Did you go to the stadium? — Did you at the stadium?" },
          { text: "Did you go to the stadium? — Were you at the stadium?", correct: true },
        ],
        why:
          "Did you go to the stadium? — Were you at the stadium? В первом вопросе есть " +
          "действие «ходил», во втором его нет.",
      },

      // ---- итог 5 ----
      {
        id: "q-rassprosom-poryadok",
        kind: "choice",
        outcome: "расспрашивать о событии несколькими вопросами подряд",
        prompt: "Ты ничего не знаешь о вчерашней викторине. С какого вопроса начать расспрос?",
        options: [
          { text: "Where was the quiz?", correct: true },
          { text: "Was the winner happy?" },
          { text: "What did you eat there?" },
        ],
        why:
          "Where was the quiz? Два других вопроса спрашивают о подробностях, а само " +
          "событие ещё не названо.",
      },
      {
        id: "q-rassprosom-vosstanovit",
        kind: "short",
        outcome: "расспрашивать о событии несколькими вопросами подряд",
        prompt:
          "В расспросе о вчерашней опере прозвучали два ответа подряд: «At the stadium.» и «It was excellent.» Запиши два вопроса, которые их вызвали.",
        answer: "Where was the opera? Was it good?",
        accept: [
          "Where was the opera Was it good",
          "Where was the opera? Was it good",
          "Where was it? Was it good?",
        ],
        why:
          "Where was the opera? Was it good? Первый ответ называет место, второй — " +
          "впечатление.",
      },

      // ---- итог 6 ----
      {
        id: "q-pismo-najti-vopros",
        kind: "choice",
        outcome: "понимать письмо, где спрашивают о прошедших днях",
        prompt:
          "В письме написано: «I went to the coast. The train came late. Did you go to the stadium?» О чём тебя спросили?",
        options: [
          { text: "О поездке на побережье" },
          { text: "О стадионе", correct: true },
          { text: "Об опоздании поезда" },
        ],
        why:
          "Did you go to the stadium? Первые две строки — это рассказ о себе, а вопрос " +
          "стоит только в третьей.",
      },
      {
        id: "q-pismo-otvet-k-voprosu",
        kind: "short",
        outcome: "понимать письмо, где спрашивают о прошедших днях",
        prompt:
          "В письме спрашивают: «What did you buy at the market?» Твоя покупка — открытка. Ответь одной строкой.",
        answer: "I bought a postcard.",
        accept: ["I bought a postcard", "A postcard.", "A postcard"],
        why:
          "I bought a postcard. Вопрос со словом what ждёт названия вещи, и ответить " +
          "на него словом «да» нельзя.",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-vopros",
        kind: "choice",
        outcome: "слышать в записи вопрос о прошлом и ответ на него",
        zvuk: "Did you take the tram? — No, I didn't.",
        prompt: "Послушай и ответь: человек ехал на трамвае?",
        options: [
          { text: "Да, ехал" },
          { text: "В записи об этом не сказано" },
          { text: "Нет, не ехал", correct: true },
        ],
        why: "Did you take the tram? — No, I didn't. Ответ отрицательный.",
      },
      {
        id: "q-na-sluh-slovo",
        kind: "short",
        outcome: "слышать в записи вопрос о прошлом и ответ на него",
        zvuk: "What did you see at the opera? — A celebrity.",
        prompt: "Послушай и запиши одним английским словом, кого человек видел.",
        answer: "celebrity",
        accept: ["a celebrity"],
        why: "What did you see at the opera? — A celebrity.",
      },

      // ---- итог 8 ----
      {
        id: "q-pismo-vopros-bez-otveta",
        kind: "short",
        outcome: "находить в письме вопросы и проверять, на все ли есть ответ",
        prompt:
          "В письме спросили: «Did you go camping? Was the tent wet?» Ответ пришёл такой: «No, I didn't.» Запиши вопрос, который остался без ответа.",
        answer: "Was the tent wet?",
        accept: ["Was the tent wet"],
        why:
          "Was the tent wet? Короткий ответ No, I didn't отвечает только на первый " +
          "вопрос, а второй остался без строки.",
      },
      {
        id: "q-pismo-lishnyaya-stroka",
        kind: "short",
        outcome: "находить в письме вопросы и проверять, на все ли есть ответ",
        prompt:
          "Тебя спросили о вчерашнем дне, а строка ответа получилась о сегодняшнем. Исправь её и запиши целиком: «The match is brilliant.»",
        answer: "The match was brilliant.",
        accept: ["The match was brilliant"],
        why:
          "The match was brilliant. Слово is говорит о том, что есть сейчас, а речь " +
          "шла о вчерашнем дне.",
      },
    ],
  },
};

export default module;
