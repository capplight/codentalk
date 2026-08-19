import type { Module } from "@/lib/content/types";

/**
 * Модуль 16 курса «Английский с нуля»: спросить о делах.
 *
 * Программа: docs/programma-english-starter.md, модуль 16 — «спрашивать о делах
 * других: что, где, когда, кто»; грамматика: вопросы с `do`; вопросительные
 * слова.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ:
 *
 * 1. Вопрос `Do you…?` — A2. English Grammar Profile, PRESENT present simple,
 *    «FORM: QUESTIONS»: «Can use 'yes/no' and 'wh-' question forms with 'you'»,
 *    пример источника — «Do you have a mobile phone?».
 *
 * 2. Вопросительное слово с `do` — A2. QUESTIONS wh-, «FORM: WITH AUXILIARY
 *    'DO'»: «Can use 'wh-'words + auxiliary 'do' + subject + main verb to form
 *    'wh-'questions», пример источника — «What do you think?».
 *
 * 3. Вопросительные слова сами по себе — Pre A1. Руководство Cambridge для
 *    младших ступеней, с. 29, грамматический список: строка «Question words» с
 *    примерами «Who is that man?» и «Where is Alex?». Это вопросы с формой be,
 *    и именно они известны ученику с модулей 6 и 12.
 *
 * 4. Слова — Oxford 3000, все A1: job, office, weekend, company, university,
 *    college, restaurant, cafe, language, film, sport, bus, lunch, breakfast,
 *    city, together, holiday, about.
 *
 * ЧТО ВЗЯТО СВЕРХ СТУПЕНИ:
 *
 * — ВОПРОС `Do you…?` и `What do you…?` — A2, обе строки приведены выше. Это
 *   и есть предмет модуля, программа его называет прямо.
 *
 * — ВОПРОС О ТРЕТЬЕМ ЛИЦЕ `Does he…?` — A2, но графы источника между собой не
 *   согласны, и честнее сказать именно так. English Grammar Profile, PRESENT
 *   present simple, «FORM: QUESTIONS» даёт две строки: A2 — «Can use 'yes/no'
 *   and 'wh-' question forms with 'you'», B1 — «Can use 'yes/no' and 'wh-'
 *   question forms with a wide range of subjects», пример «Does your brother go
 *   with your parents?». По ним выходит B1. Но соседние графы того же файла
 *   ограничения на лицо не ставят вовсе: QUESTIONS yes/no, A2, «FORM: LEXICAL
 *   VERBS WITH 'DO'» — «Can use auxiliary 'do' + subject + main verb to form
 *   'yes/no' questions»; QUESTIONS wh-, A2, «FORM: WITH AUXILIARY 'DO'» — там
 *   тоже «subject», а не «you». Первая редакция шапки объявляла B1 как
 *   единственное чтение; это поправил методист.
 *
 *   ПОЧЕМУ ВЗЯТО: модуль 14 научил говорить `he works`, модуль 15 —
 *   `he doesn't work`. Без `Does he work?` ученик умеет о другом человеке
 *   утверждать и отрицать, но не умеет спросить. Это та же дыра, из-за которой
 *   в модуле 15 пришлось брать `doesn't`, и заделывать её надо здесь же.
 *   Второе подтверждение: руководство Cambridge, с. 52, список «что нового на
 *   A1 Movers», строка «Question words» — «When does school start?».
 *
 * — КОРОТКИЙ ОТВЕТ `Yes, I do.` — A2. English Grammar Profile, VERBS types,
 *   «FORM: AUXILIARY VERBS 'HAVE' AND 'DO'»: «Can use auxiliary verbs 'have'
 *   and 'do'», среди примеров источника — «[responding to a question] Yes, I
 *   do.». Второе подтверждение: Cambridge, с. 52, A1 Movers — «Did you go to
 *   the cinema? Yes, I did.».
 *
 *   ПЕРВАЯ РЕДАКЦИЯ ПИСАЛА ЗДЕСЬ «строки о коротком ответе в источнике нет
 *   вовсе». Это неправда, и нашёл её методист. Утверждение «в источнике этого
 *   нет» — самое опасное из всех, и в этом проекте оно не выдержало проверки
 *   уже трижды: `have got` в модуле 7, `o'clock` в модуле 10, короткий ответ
 *   здесь. Причина всегда одна: искал по той подкатегории, где ожидал найти.
 *
 * — ОБОРОТ `What do you do?` (урок 5, врезка и задание). Ступень установить не
 *   удалось вовсе: в English Grammar Profile его нет, в словнике A2 Key нет, у
 *   Cambridge на с. 29, 52 и 77 нет. Взят как готовая фраза, потому что это
 *   первый вопрос, который задают при знакомстве взрослому. Источником это не
 *   подтверждается — нужно решение владельца как преподавателя, п. 1.22.
 *   Нашёл методист.
 *
 * ЧЕГО НЕТ И ПОЧЕМУ СНЯТО:
 *
 * — ВОПРОС СО СЛОВОМ `who` В РОЛИ ДЕЙСТВУЮЩЕГО ЛИЦА — «Who works here?». Такой
 *   строки нет ни в English Grammar Profile (в подкатегории QUESTIONS wh-
 *   девять строк, и ни одна такого вопроса не описывает; порядок везде «слово
 *   + вспомогательный глагол + тот, кто действует + глагол», кроме строки
 *   «FORM: MAIN VERB 'BE'», где вспомогательного глагола нет вовсе), ни в
 *   списках Cambridge на с. 29, 52 и 77. Проверено методистом построчно.
 *   Вопрос устроен наособицу: `do` в нём не появляется, и объяснять это
 *   исключение сразу после правила рано. Остаётся у владельца, п. 1.22.
 *
 * — САМО СЛОВО `who` при этом В МОДУЛЕ ВВОДИТСЯ, и это исправление после
 *   методиста. Первая редакция ссылалась на модуль 6 — «такие вопросы уже
 *   встречались», — а слова `who` в курсе не было ни разу: модуль 11 снял
 *   обороты `Who's that?` именно поэтому. Теперь `who` введено словарём и
 *   примером в уроке 6, до первого задания.
 *
 *   РАСХОЖДЕНИЕ ИСТОЧНИКОВ, КОТОРОЕ НАДО ЗНАТЬ: модуль 11 снял `Who's that?`
 *   как A2, а Cambridge кладёт `Who is that man?` на Pre A1 Starters (с. 29,
 *   строка «Question words»). Один оборот, две ступени в двух модулях. Модуль
 *   16 держится Cambridge, потому что без `who` итог модуля неисполним. Свести
 *   это — решение владельца, п. 1.22.
 *
 * ОСТОРОЖНО СО ССЫЛКОЙ на строку Cambridge «Impersonal you — How do you spell
 * that?» (с. 29). Соблазн привести её как доказательство, что вопросы с `do`
 * стоят на Pre A1, велик, и это была бы подмена того же рода, что уже случалась
 * дважды: графа названа по безличному `you`, а не по вопросу, и доказывает она
 * ступень одной этой фразы. Ступень вопросов с `do` держится только на English
 * Grammar Profile — см. записи 1 и 2 выше.
 */
const module: Module = {
  slug: "sprosit-o-delah",
  title: "Спросить о делах",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, PRESENT present simple, «FORM: QUESTIONS»: «Can use 'yes/no' and 'wh-' " +
        "question forms with 'you'», пример источника — «Do you have a mobile phone?». " +
        "A2, QUESTIONS wh-, «FORM: WITH AUXILIARY 'DO'»: «Can use 'wh-'words + auxiliary " +
        "'do' + subject + main verb to form 'wh-'questions», пример источника — «What do " +
        "you think?». " +
        "A2, QUESTIONS yes/no, «FORM: LEXICAL VERBS WITH 'DO'»: «Can use auxiliary 'do' " +
        "+ subject + main verb to form 'yes/no' questions» — здесь ограничения на лицо " +
        "нет вовсе, стоит subject. " +
        "A2, VERBS types, «FORM: AUXILIARY VERBS 'HAVE' AND 'DO'»: «Can use auxiliary " +
        "verbs 'have' and 'do'», среди примеров источника — «[responding to a question] " +
        "Yes, I do.». Это ступень короткого ответа. " +
        "B1, PRESENT present simple, «FORM: QUESTIONS»: «Can use 'yes/no' and 'wh-' " +
        "question forms with a wide range of subjects», пример источника — «Does your " +
        "brother go with your parents?». " +
        "ГРАФЫ МЕЖДУ СОБОЙ НЕ СОГЛАСНЫ: по этой строке вопрос о третьем лице выходит B1, " +
        "по двум строкам выше — A2. Модуль держится A2 и говорит об этом прямо. " +
        "ЧЕГО В ИСТОЧНИКЕ НЕТ: строки о вопросе, где who — само действующее лицо. " +
        "Подкатегория QUESTIONS wh- проверена построчно, все девять строк",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 52, список «что нового на A1 Movers», строка «Question words» — «When does " +
        "school start?», и строка о прошедшем времени — «Did you go to the cinema? Yes, " +
        "I did.». Отсюда два подтверждения сразу: вопрос со вспомогательным do о третьем " +
        "лице и короткий ответ с тем же do. " +
        "с. 29, список Pre A1 Starters, строка «Question words» с примерами «Who is that " +
        "man?» и «Where is Alex?» — вопросительные слова с формой be на самой низкой " +
        "ступени. Отсюда взят Who is your teacher? в уроке 6. " +
        "ОСТОРОЖНО СО СТРОКОЙ «Verbs» на с. 29: скобка «Positive, negative, question, " +
        "imperative and short-answer forms, including contractions» выглядит как защита " +
        "для Does he…? и Yes, I do, но среди примеров графы нет ни одного вопроса с do " +
        "и ни одного краткого ответа с do. Первая редакция модуля приводила графу как защиту; это " +
        "подмена графы, и нашёл её методист. Ступень вопроса с do держится на с. 52. " +
        "ОСТОРОЖНО: строку «Impersonal you» с примером «How do you spell that?» нельзя " +
        "приводить как защиту для вопросов с do. Графа названа по безличному you, и " +
        "доказывает она ступень одной этой фразы. Это порода ошибки, уже случавшаяся в " +
        "модулях 14 и 15",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves " +
        "and other people, where they live, people they know, things they have». Это " +
        "ровно предмет модуля, и строка прямо называет вопросы о другом человеке. " +
        "ПЕРВАЯ РЕДАКЦИЯ ССЫЛАЛАСЬ НА с. 80, шкалу Interviewing and being interviewed. " +
        "Цитата была дословной, а шкала — не та: её строка A1 описывает только ответы, " +
        "а спрашивать по ней начинают с B1. Модуль же требует именно спрашивать. Нашёл " +
        "методист",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля, все с пометкой A1: job (n.), office (n.), weekend (n.), " +
        "company (n.), university (n.), college (n.), cafe (n.), " +
        "language (n.), film (n.), sport (n.), holiday (n.), about (prep.). " +
        "ПРЕЖНЯЯ РЕДАКЦИЯ считала новыми ещё шесть: restaurant введён в модуле 13, " +
        "bus — в модуле 6, lunch и breakfast — в модуле 14, city — в модуле 3, " +
        "together введено здесь и повторно объявлялось в модуле 17. Карточки-повторы " +
        "убраны, список пересчитан. Нашёл методист. Слова прежних модулей: " +
        "work, live, study, read, play, watch, go, like, eat, drink, know, speak, start, " +
        "finish, coffee, football, music, teacher, doctor, student, school, shop",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e вместо ɛ, конечный безударный через ə вместо ɐ (together — " +
        "/təˈgeðə/), r вместо ɹ (restaurant — /ˈrestrɒnt/). " +
        "Отдельно: does — /dʌz/, и гласный в нём не такой, как в do /duː/. Пара do — does " +
        "на слух не похожа, и при озвучке это надо передать",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "спрашивать собеседника о его делах: Do you work on Sunday?",
    "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",
    "спрашивать о другом человеке: Does he work here?",
    "различать вопрос с формой be и вопрос с do: Are you a doctor? — Do you work?",
    "спрашивать, что человек делает: What do you study?",
    "спрашивать, где, когда и кто: Where do you work? Who is your teacher?",
    "спрашивать о нескольких людях: Do they live here?",
    "вести короткий разговор о делах: спросить и ответить",
    "понимать вопросы анкеты и находить ответ на них в чужом бланке",
    "понимать на слух вопрос с do и короткий ответ на него",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vopros-do-you",
      title: "Спросить: Do you work?",
      estimatedMinutes: 13,
      outcome: "спрашивать собеседника о его делах: Do you work on Sunday?",

      blocks: [
        {
          id: "zachem-vopros",
          kind: "explain",
          text: [
            "Ты знакомишься с человеком и хочешь узнать, работает ли он по воскресеньям. " +
              "Сказать о себе — I work on Sunday — ты умеешь. А как спросить об этом — ещё не сказано.",
            "Вопрос строят так: перед всем предложением ставят Do. " +
              "Do you work on Sunday?",
            "Само слово Do на русский не переводится. Оно только показывает, что это вопрос.",
          ],
        },
        {
          id: "tablica-do",
          kind: "table",
          caption: "Сказать и спросить",
          zvuchat: ["You work on Sunday.", "Do you work on Sunday?", "You live here.",
            "Do you live here?", "You drink coffee.", "Do you drink coffee?", "You know Dana.",
            "Do you know Dana?",
          ],
          head: ["Сказать", "Спросить", "Перевод вопроса"],
          rows: [
            ["You work on Sunday.", "Do you work on Sunday?", "Ты работаешь по воскресеньям?"],
            ["You live here.", "Do you live here?", "Ты живёшь здесь?"],
            ["You drink coffee.", "Do you drink coffee?", "Ты пьёшь кофе?"],
            ["You know Dana.", "Do you know Dana?", "Ты знаешь Дану?"],
          ],
        },
        {
          id: "poryadok-voprosa",
          kind: "explain",
          text: [
            "Порядок такой: сначала Do, потом тот, о ком речь, потом сам глагол.",
            "Do | you | work | on Sunday?",
            "То же слово do стоит и в отрицании, только в другом месте: там оно спрятано " +
              "в don't перед глаголом — you don't work.",
            "В вопросе оно выходит из середины к самому началу — Do you work?",
          ],
        },
        {
          id: "glagol-ne-menyaetsya",
          kind: "note",
          tone: "mistake",
          text:
            "Сам глагол в вопросе не меняется.\n\nDo you work? — верно. «Do you works?» — " +
            "нет. Вопрос уже показан словом Do, и глаголу окончание не нужно.",
        },
        {
          id: "primer-voprosa",
          kind: "example",
          caption: "Разговор на новой работе",
          razgovor: true,
          text:
            "— Do you work on Sunday?\n— No. I don't work on Sunday.\n— Do you live here?\n" +
            "— Yes. I live near the office.",
          explain:
            "Оба вопроса устроены одинаково: Do, потом you, потом глагол. Ответы ты уже " +
            "умеешь строить с модуля «Я не делаю».",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-voprosa",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "do", translation: "стоит в начале вопроса, само не переводится", example: "Do you work?", hint: "/duː/" },
            { term: "job", translation: "работа (место, должность)", example: "I like my job.", hint: "/dʒɒb/" },
            { term: "office", translation: "офис", example: "I work in an office.", hint: "/ˈɒfɪs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-do",
          kind: "gap",
          prompt: "Ты хочешь спросить, работает ли собеседник по воскресеньям. Допиши недостающее слово.",
          before: "",
          after: " you work on Sunday?",
          answer: "Do",
          accept: ["do"],
          hint: "Оно стоит в самом начале и показывает, что это вопрос.",
          why: "Do you work on Sunday? Слово Do ставят перед всем предложением.",
        },
        {
          id: "z2-vybrat-vopros",
          kind: "choice",
          prompt: "Ты спрашиваешь, живёт ли человек здесь. Как сказать?",
          options: [
            { text: "You do live here?" },
            { text: "Do you live here?", correct: true },
            { text: "Do you lives here?" },
          ],
          hint: "Do идёт первым, а глагол не меняется.",
          why:
            "Do you live here? Do стоит в начале, глагол остаётся без окончания: live, а не lives.",
        },
        {
          id: "z3-otmetit-lishnee-s",
          kind: "hottext",
          prompt: "Отметь вопросы, где к глаголу приписано лишнее окончание.",
          parts: [
            { text: "Do you work here?", selectable: true },
            { text: " · " },
            { text: "Do you works here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you knows Dana?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you drink coffee?", selectable: true },
          ],
          hint: "Ищи -s на конце глагола.",
          why:
            "Лишнее окончание в «Do you works here?» и «Do you knows Dana?». После Do глагол " +
            "стоит без окончания: work, know.",
        },
        {
          id: "z4-sobrat-vopros",
          kind: "order",
          prompt: "Собери вопрос: «Ты пьёшь кофе?»",
          items: ["coffee?", "Do", "drink", "you"],
          answer: [1, 3, 2, 0],
          hint: "Первым идёт Do.",
          why: "Do you drink coffee? Порядок: Do, потом you, потом глагол.",
        },
        {
          id: "z5-napisat-vopros",
          kind: "short",
          prompt: "Спроси у собеседника, знает ли он Алима. Запиши вопрос целиком.",
          answer: "Do you know Alim?",
          accept: ["do you know Alim?", "Do you know Alim"],
          hint: "Do, потом you, потом глагол know.",
          why: "Do you know Alim? Глагол после Do не меняется.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "korotkiy-otvet-do",
      title: "Короткий ответ: Yes, I do",
      estimatedMinutes: 12,
      outcome: "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",

      blocks: [
        {
          id: "zachem-korotkiy",
          kind: "explain",
          text: [
            "Тебя спросили: Do you work on Sunday? Весь ответ — I work on Sunday — " +
              "при этом не повторяют.",
            "Отвечают коротко: Yes, I do. Или No, I don't.",
            "Повторяют не глагол, а do — то слово, с которого начался вопрос.",
          ],
        },
        {
          id: "tablica-korotkogo",
          kind: "table",
          caption: "Вопрос и два ответа",
          zvuchat: ["Do you work on Sunday?", "Yes, I do.", "No, I don't.", "Do you live here?",
            "Do you drink coffee?",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Do you work on Sunday?", "Yes, I do.", "No, I don't."],
            ["Do you live here?", "Yes, I do.", "No, I don't."],
            ["Do you drink coffee?", "Yes, I do.", "No, I don't."],
          ],
        },
        {
          id: "odin-otvet-na-vsyo",
          kind: "explain",
          text: [
            "Ответ один и тот же, о чём бы ни спрашивали. Меняется только да или нет.",
            "Так же устроен и короткий ответ с формой be: Are you a doctor? — Yes, I am. " +
              "Такой ответ разобран в модуле «Вопрос и краткий ответ».",
          ],
        },
        {
          id: "ne-povtoryay-glagol",
          kind: "note",
          tone: "mistake",
          text:
            "В коротком ответе глагол не повторяют.\n\nНа Do you work on Sunday? отвечают " +
            "Yes, I do. Этих трёх слов достаточно, и ответ на них кончается.",
        },
        {
          id: "primer-korotkogo",
          kind: "example",
          caption: "Три вопроса подряд",
          razgovor: true,
          text:
            "— Do you live in Almaty?\n— Yes, I do.\n— Do you work in an office?\n" +
            "— No, I don't. I work at a school.",
          explain:
            "После короткого «нет» добавляют, как на самом деле. Тот же порядок был " +
            "в модуле «Я не делаю».",
        },
        // Запись убрана: и вопросы, и оба ответа звучат в таблице выше.
        {
          id: "slovar-korotkogo",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "weekend", translation: "выходные", example: "I read at the weekend.", hint: "/ˌwiːkˈend/" },
            { term: "cafe", translation: "кафе", example: "We drink coffee in a cafe.", hint: "/ˈkæfeɪ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-korotkiy",
          kind: "gap",
          prompt: "Тебя спросили: Do you live here? Ты живёшь здесь. Допиши ответ.",
          before: "Yes, I ",
          after: ".",
          answer: "do",
          hint: "Повторяют слово, с которого начался вопрос.",
          why: "Yes, I do. В коротком ответе повторяют do, а не глагол.",
        },
        {
          id: "z2-vybrat-korotkiy",
          kind: "choice",
          prompt: "Тебя спросили: Do you drink coffee? Ты не пьёшь. Как ответить коротко?",
          options: [
            { text: "No, I don't drink." },
            { text: "No, I not." },
            { text: "No, I don't.", correct: true },
          ],
          hint: "Ответ короткий: два слова после No.",
          why: "No, I don't. Глагол в коротком ответе не повторяют.",
        },
        {
          id: "z3-sopostavit-otvety",
          kind: "match",
          prompt:
            "Собеседник здесь работает, он преподаватель, а Дану не знает. Сопоставь " +
            "вопрос и его ответ.",
          left: ["Do you work here?", "Are you a teacher?", "Do you know Dana?"],
          right: ["Yes, I am.", "Yes, I do.", "No, I don't."],
          answer: [1, 0, 2],
          hint:
            "Что ответить — да или нет — сказано в условии. Каким словом — тем, с " +
            "которого начался вопрос.",
          why:
            "Do you work here? — Yes, I do. Are you a teacher? — Yes, I am. Do you know " +
            "Dana? — No, I don't. Ответ повторяет то слово, с которого начался вопрос.",
        },
        {
          id: "z4-otmetit-dlinnye",
          kind: "hottext",
          prompt: "Отметь ответы, где глагол повторён лишний раз.",
          parts: [
            { text: "Yes, I do.", selectable: true },
            { text: " · " },
            { text: "Yes, I work.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, I don't.", selectable: true },
            { text: " · " },
            { text: "No, I don't live.", selectable: true, correct: true },
          ],
          hint: "Короткий ответ кончается на do или don't.",
          why:
            "Глагол повторён в «Yes, I work» и «No, I don't live». Короткий ответ " +
            "кончается на do или don't: Yes, I do. No, I don't.",
        },
        {
          id: "z5-otvetit-korotko",
          kind: "short",
          prompt: "Тебя спросили: Do you work in an office? Ты работаешь. Ответь коротко — да.",
          answer: "Yes, I do.",
          accept: ["yes, I do.", "Yes, I do"],
          hint: "Три слова.",
          why: "Yes, I do. Больше в коротком ответе ничего не нужно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vopros-does",
      title: "Спросить о другом: Does he work?",
      estimatedMinutes: 14,
      outcome: "спрашивать о другом человеке: Does he work here?",

      blocks: [
        {
          id: "zachem-does",
          kind: "explain",
          text: [
            "Ты говоришь о брате: He works here. Отрицать это ты тоже умеешь: " +
              "He doesn't work here.",
            "А как спросить о нём — ещё не сказано: Do you work? годится только для собеседника.",
            "Когда спрашивают об одном другом человеке, вместо Do ставят Does. " +
              "Does he work here?",
          ],
        },
        {
          id: "tablica-does",
          kind: "table",
          caption: "О себе и о другом",
          zvuchat: ["Do you work here?", "Does he work here?", "Do you live in Almaty?",
            "Does she live in Almaty?", "Do you study English?", "Does Alim study English?",
          ],
          head: ["О собеседнике", "Об одном другом", "Перевод"],
          rows: [
            ["Do you work here?", "Does he work here?", "Он здесь работает?"],
            ["Do you live in Almaty?", "Does she live in Almaty?", "Она живёт в Алматы?"],
            ["Do you study English?", "Does Alim study English?", "Алим учит английский?"],
          ],
        },
        {
          id: "okonchanie-uhodit-v-does",
          kind: "explain",
          text: [
            "Окончание уходит с глагола в Does: do превращается в does.\n\nОб одном человеке " +
              "говорят he works, а спрашивают — Does he work?",
            "Ровно то же было с отрицанием: he works, но he doesn't work. Окончание всегда " +
              "остаётся только в одном месте.",
          ],
        },
        {
          id: "dva-okonchaniya",
          kind: "note",
          tone: "mistake",
          text:
            "У глагола и у Does сразу окончания не бывает.\n\n«Does he works here?» — ошибка. Оно " +
            "уже внутри Does, и глаголу не нужно: Does he work here?",
        },
        {
          id: "primer-does",
          kind: "example",
          caption: "Разговор о брате",
          razgovor: true,
          text:
            "— Does your brother work here?\n— No, he doesn't. He works at a company.\n" +
            "— Does he like his job?\n— Yes, he does.",
          explain:
            "Короткий ответ устроен как в прошлом уроке, только вместо do стоит does: " +
            "Yes, he does. No, he doesn't.",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-does",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "does", translation: "то же do в вопросе об одном другом человеке", example: "Does he work?", hint: "/dʌz/" },
            { term: "company", translation: "фирма", example: "He works at a company.", hint: "/ˈkʌmpəni/" },
            { term: "university", translation: "университет", example: "She studies at a university.", hint: "/ˌjuːnɪˈvɜːsəti/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-does",
          kind: "gap",
          prompt: "Ты спрашиваешь о своей сестре. Допиши недостающее слово.",
          before: "",
          after: " she live in Almaty?",
          answer: "Does",
          accept: ["does"],
          hint: "Об одном другом человеке спрашивают не через Do.",
          why: "Does she live in Almaty? Об одном другом человеке спрашивают через Does.",
        },
        {
          id: "z2-gde-okonchanie-v-voprose",
          kind: "choice",
          prompt: "Ты спрашиваешь, работает ли Алим здесь. Как сказать?",
          options: [
            { text: "Does Alim works here?" },
            { text: "Do Alim work here?" },
            { text: "Does Alim work here?", correct: true },
          ],
          hint: "Окончание стоит только в одном месте.",
          why:
            "Does Alim work here? Окончание уже внутри Does, поэтому глагол остаётся " +
            "без окончания: work.",
        },
        {
          id: "z3-otmetit-dva-okonchaniya",
          kind: "hottext",
          prompt: "Отметь вопросы, где окончание стоит дважды.",
          parts: [
            { text: "Does he work here?", selectable: true },
            { text: " · " },
            { text: "Does she studies English?", selectable: true, correct: true },
            { text: " · " },
            { text: "Does Alim lives here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Does she like coffee?", selectable: true },
          ],
          hint: "Смотри на конец глагола после Does.",
          why:
            "Дважды окончание стоит в «Does she studies English?» и «Does Alim lives here?». " +
            "После Does глагол без окончания: study, live.",
        },
        {
          id: "z4-perestroit-v-vopros",
          kind: "short",
          prompt: "Перестрой в вопрос: He works at a company.",
          answer: "Does he work at a company?",
          accept: ["does he work at a company?", "Does he work at a company"],
          hint: "Does выходит вперёд, а окончание уходит с глагола.",
          why:
            "Does he work at a company? Окончание переехало в Does, глагол остался без него.",
        },
        {
          id: "z5-sprosit-o-sestre",
          kind: "short",
          prompt: "Спроси, учит ли твоя сестра английский. Сестра — my sister.",
          answer: "Does my sister study English?",
          accept: ["does my sister study English?", "Does my sister study English"],
          hint: "Начни с Does, потом назови её, потом глагол.",
          why:
            "Does my sister study English? После Does глагол стоит без окончания: study.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ne-be-a-do",
      title: "Не be, а do",
      estimatedMinutes: 13,
      outcome: "различать вопрос с формой be и вопрос с do: Are you a doctor? — Do you work?",

      blocks: [
        {
          id: "zachem-razlichenie",
          kind: "explain",
          text: [
            "Теперь у тебя два вида вопросов, и различает их одно.",
            "Are you a doctor? спрашивает, кто человек. Do you work? спрашивает, что он " +
              "делает.",
            "Чтобы не спутать, посмотри, что идёт после того, о ком речь.",
            "Если действие — нужен Do. Если действия нет — нужна форма be: после неё идёт " +
              "название человека, прилагательное или место.",
          ],
        },
        {
          id: "tablica-razlicheniya",
          kind: "table",
          caption: "Два вида вопроса",
          // Столбец «чем открывается вопрос» отдельных кнопок не получает: Do и
          // Does слышны в самих вопросах, а «форма be» — это русская подпись.
          zvuchat: ["Are you a doctor?", "Do you work here?", "Is she a student?",
            "Does she study here?",
          ],
          head: ["Вопрос", "О чём спрашивает", "Что стоит первым"],
          rows: [
            ["Are you a doctor?", "кто он", "форма be"],
            ["Do you work here?", "что он делает", "Do"],
            ["Is she a student?", "кто она", "форма be"],
            ["Does she study here?", "что она делает", "Does"],
          ],
        },
        {
          id: "kak-proverit-vopros",
          kind: "explain",
          text: [
            "Посмотри, что стоит после того, о ком речь.",
            "work, live, study — это действие, и вопрос начинается с Do или Does.",
            "a doctor, busy, from Almaty — это не действие, и вопрос начинается с формы " +
              "be: Are you a doctor? Are you busy? Are you from Almaty?",
          ],
        },
        {
          id: "dve-oshibki-v-voprose",
          kind: "note",
          tone: "mistake",
          text:
            "Do и форму be сразу не ставят.\n\n«Do you are a doctor?» и «Are you work " +
            "here?» сказать нельзя. Вопрос начинает что-то одно: либо Do, либо форма be.",
        },
        {
          id: "primer-razlicheniya",
          kind: "example",
          caption: "Знакомство",
          razgovor: true,
          text:
            "— Are you a teacher?\n— Yes, I am.\n— Do you work at a school?\n" +
            "— No, I don't. I work at a college.",
          explain:
            "Первый вопрос о том, кто человек, второй — о том, что он делает. И ответы " +
            "разные: на первый Yes, I am, на второй No, I don't.",
        },
        // Запись убрана: все четыре вопроса звучат в таблице выше.
        {
          id: "slovar-razlicheniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "college", translation: "колледж", example: "I work at a college.", hint: "/ˈkɒlɪdʒ/" },
            { term: "sport", translation: "спорт", example: "I like sport.", hint: "/spɔːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-vid-voprosa",
          kind: "choice",
          prompt: "Ты хочешь спросить, работает ли человек здесь. Как начать?",
          options: [
            { text: "Do you work here?", correct: true },
            { text: "Are you work here?" },
            // Стояло «Do you are work here?» — нагромождение из трёх ошибок
            // сразу, такого не пишет никто. Замена предложена методистом: эта
            // ошибка уже работает отвлекающей в том же модуле («Does you a
            // teacher?»), то есть признана настоящей самим уроком.
            { text: "Does you work here?" },
          ],
          hint: "После you идёт действие.",
          why: "Do you work here? После того, о ком речь, идёт действие — значит Do.",
        },
        {
          id: "z2-vybrat-vtoroy-vid",
          kind: "choice",
          prompt: "Ты хочешь спросить, преподаватель ли он. Как начать?",
          options: [
            { text: "Do you a teacher?" },
            { text: "Are you a teacher?", correct: true },
            { text: "Does you a teacher?" },
          ],
          hint: "После you идёт название человека, а не действие.",
          why: "Are you a teacher? После you стоит название — значит форма be.",
        },
        {
          id: "z3-otmetit-pereputannye",
          kind: "hottext",
          prompt: "Отметь вопросы, где начало выбрано неверно: Do вместо формы be или наоборот.",
          parts: [
            { text: "Do you live here?", selectable: true },
            { text: " · " },
            { text: "Are you work here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you a student?", selectable: true, correct: true },
            { text: " · " },
            { text: "Is she busy?", selectable: true },
          ],
          hint: "Смотри, действие идёт дальше или название.",
          why:
            "Неверно в «Are you work here?» — там действие, нужен Do. И в «Do you a " +
            "student?» — там название, нужна форма be.",
        },
        {
          id: "z4-dva-voprosa-podryad",
          kind: "short",
          prompt: "Спроси одним предложением, студент ли собеседник. Студент — a student.",
          answer: "Are you a student?",
          accept: ["are you a student?", "Are you a student"],
          hint: "После you идёт название, а не действие.",
          why: "Are you a student? Название человека — значит вопрос начинается с формы be.",
        },
        {
          id: "z5-vopros-o-brate-razlichenie",
          kind: "short",
          prompt: "Спроси, учится ли твой брат в университете. Брат — my brother, учиться — study.",
          answer: "Does my brother study at a university?",
          accept: [
            "does my brother study at a university?",
            "Does my brother study at a university",
          ],
          hint: "Действие, и человек один другой — значит Does.",
          why:
            "Does my brother study at a university? Дальше идёт действие, поэтому вопрос " +
            "начинается с Does, а глагол остаётся без окончания.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-what-do",
      title: "Что: What do you study?",
      estimatedMinutes: 13,
      outcome: "спрашивать, что человек делает: What do you study?",

      blocks: [
        {
          id: "zachem-what",
          kind: "explain",
          text: [
            "Do you study English? — на такой вопрос отвечают только да или нет.",
            "А узнать хочется другое: что именно человек учит. Тогда перед Do ставят " +
              "слово what. What do you study?",
            "Слово what значит «что». Оно идёт первым, а дальше вопрос устроен как прежде.",
          ],
        },
        {
          id: "tablica-what",
          kind: "table",
          caption: "Да или нет — и что именно",
          zvuchat: ["Do you study English?", "What do you study?", "Do you read books?",
            "What do you read?", "Do you eat fish?", "What do you eat?",
          ],
          head: ["Только да или нет", "Что именно", "Перевод"],
          rows: [
            ["Do you study English?", "What do you study?", "Что ты учишь?"],
            ["Do you read books?", "What do you read?", "Что ты читаешь?"],
            ["Do you eat fish?", "What do you eat?", "Что ты ешь?"],
          ],
        },
        {
          id: "chto-posle-what",
          kind: "explain",
          text: [
            "Порядок такой: What, потом Do, потом тот, о ком речь, потом глагол.",
            "What | do | you | study?",
            "О другом человеке — так же, только вместо do стоит does: What does he study?",
          ],
        },
        {
          id: "what-do-you-do",
          kind: "note",
          tone: "info",
          text:
            "Есть вопрос, где do встречается дважды: What do you do?\n\nПервое do " +
            "начинает вопрос, второе — глагол «делать». Целиком это вопрос о работе: " +
            "«чем ты занимаешься». Отвечают названием работы: I'm a teacher.",
        },
        {
          id: "primer-what",
          kind: "example",
          caption: "Разговор о занятиях",
          razgovor: true,
          text:
            "— What do you study?\n— I study English.\n— And what does your sister study?\n" +
            "— She studies music.",
          explain:
            "На такой вопрос отвечают не да и не нет, а полным предложением. И заметь: в " +
            "ответе окончание вернулось к глаголу — She studies music, — потому что в ответе нет does.",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-what",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "language", translation: "язык", example: "English is a language.", hint: "/ˈlæŋgwɪdʒ/" },
            { term: "film", translation: "фильм", example: "I watch a film.", hint: "/fɪlm/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-what",
          kind: "gap",
          prompt: "Ты хочешь узнать, что собеседник читает. Допиши недостающее слово.",
          before: "",
          after: " do you read?",
          answer: "What",
          accept: ["what"],
          hint: "Оно значит «что» и стоит первым.",
          why: "What do you read? Слово what ставят перед Do.",
        },
        {
          id: "z2-poryadok-what",
          kind: "choice",
          prompt: "Ты спрашиваешь, что учит твоя сестра. Как сказать?",
          options: [
            { text: "What does your sister study?", correct: true },
            { text: "What your sister does study?" },
            { text: "What does your sister studies?" },
          ],
          hint: "Сначала what, потом does, потом человек, потом глагол.",
          why:
            "What does your sister study? Порядок: вопросительное слово, does, человек, глагол " +
            "без окончания.",
        },
        {
          id: "z3-sobrat-what",
          kind: "order",
          prompt: "Собери вопрос: «Что ты ешь?»",
          items: ["eat?", "What", "you", "do"],
          answer: [1, 3, 2, 0],
          hint: "Первым идёт слово «что».",
          why: "What do you eat? Порядок: What, do, you, глагол.",
        },
        {
          id: "z4-perevesti-what",
          kind: "short",
          prompt: "Спроси у собеседника, что он смотрит. Смотреть — watch.",
          answer: "What do you watch?",
          accept: ["what do you watch?", "What do you watch"],
          hint: "Четыре слова.",
          why: "What do you watch? После what идёт do, потом you, потом глагол.",
        },
        {
          id: "z5-o-rabote",
          kind: "choice",
          prompt: "Собеседник спросил: What do you do? О чём он спрашивает?",
          options: [
            { text: "Что ты делаешь прямо сейчас." },
            { text: "Кем ты работаешь.", correct: true },
            { text: "Что ты умеешь делать." },
          ],
          hint: "Первое do начинает вопрос, второе — глагол «делать».",
          why:
            "What do you do? — так спрашивают о работе. Отвечают названием: I'm a teacher.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-kogda-kto",
      title: "Где, когда и кто",
      estimatedMinutes: 15,
      outcome: "спрашивать, где, когда и кто: Where do you work? Who is your teacher?",

      blocks: [
        {
          id: "zachem-gde-kogda",
          kind: "explain",
          text: [
            "Слово what в прошлом уроке уже стояло перед Do. Точно так же ставят и другие " +
              "вопросительные слова.",
            "Where do you work? — где ты работаешь. When do you start? — когда ты " +
              "начинаешь.",
            "Меняется только первое слово, дальше всё то же самое.",
            // Об одном другом человеке в этом уроке спрашивать требовалось, а
            // примера с does тут не было ни одного — он остался в прошлом уроке.
            // Задание опиралось на перенос через урок. Нашёл методист.
            "Об одном другом человеке спрашивают так же, только вместо Do встаёт Does: " +
              "Where does she work? — где она работает.",
          ],
        },
        {
          id: "tablica-slov-voprosa",
          kind: "table",
          caption: "Вопросительные слова перед Do",
          zvuchat: ["what", "What do you study?", "where", "Where do you work?",
            "Where does she work?", "when", "When do you start?", "who", "Who is your teacher?",
          ],
          head: ["Слово", "О чём", "Пример"],
          rows: [
            ["what", "что", "What do you study?"],
            ["where", "где", "Where do you work?"],
            ["where", "где, об одном другом", "Where does she work?"],
            ["when", "когда", "When do you start?"],
            ["who", "кто", "Who is your teacher?"],
          ],
        },
        {
          id: "kto-cherez-be",
          kind: "explain",
          text: [
            "Четвёртое вопросительное слово — who, «кто». Спрашивают им о человеке: " +
              "Who is your teacher? — кто твой преподаватель.",
            "В этом вопросе Do не нужен: дальше идёт не действие, а человек. Порядок такой: " +
              "who, потом is, потом всё остальное.",
          ],
        },
        {
          id: "primer-who",
          kind: "example",
          caption: "Спросить о человеке",
          razgovor: true,
          text: "— Who is your teacher?\n— Dana is my teacher.\n— Who is that?\n— That's Alim.",
          explain:
            "В обоих вопросах после who стоит форма be. Отвечают именем, а не да или нет.",
        },
        {
          id: "slovo-voprosa-odno",
          kind: "note",
          tone: "mistake",
          text:
            "Вопросительное слово стоит в самом начале.\n\n«Do you where work?» " +
            "сказать нельзя. Верно — Where do you work?",
        },
        {
          id: "primer-gde-kogda",
          kind: "example",
          caption: "Расспросить о работе",
          razgovor: true,
          text:
            "— Where do you work?\n— I work at a school.\n— When do you start?\n" +
            "— I start at nine.\n— Who is your teacher?\n— Dana is my teacher.",
          explain:
            "Первые два вопроса устроены одинаково: слово, Do, you, глагол. Третий — с " +
            "формой be, потому что дальше идёт не действие, а человек.",
        },
        // Запись убрана: каждое вопросительное слово и пример к нему звучат в таблице выше.
        {
          id: "slovar-gde-kogda",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "who", translation: "кто", example: "Who is your teacher?", hint: "/huː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-where",
          kind: "gap",
          prompt: "Ты хочешь узнать, где собеседник работает. Допиши недостающее слово.",
          before: "",
          after: " do you work?",
          answer: "Where",
          accept: ["where"],
          hint: "Оно значит «где».",
          why: "Where do you work? Вопросительное слово ставят перед Do.",
        },
        {
          id: "z2-vybrat-slovo",
          kind: "choice",
          prompt: "Ты хочешь узнать, когда собеседник начинает работать. Какое слово нужно?",
          options: [
            { text: "Where do you start?" },
            { text: "When do you start?", correct: true },
            { text: "What do you start?" },
          ],
          hint: "Речь о времени.",
          why: "When do you start? Слово when спрашивает о времени.",
        },
        {
          // Здесь стояло сопоставление what/where/when с переводом при подсказке
          // «Вспомни таблицу урока» — то есть проверка памяти о таблице, а не
          // умения спрашивать. И «кто» не проверялось ничем, хотя стоит в итоге.
          // Нашёл методист.
          id: "z3-sprosit-kto",
          kind: "short",
          prompt: "Спроси у собеседника, кто его преподаватель. Преподаватель — teacher.",
          answer: "Who is your teacher?",
          accept: ["who is your teacher?", "Who is your teacher", "Who's your teacher?"],
          hint: "Дальше идёт человек, а не действие — значит Do не нужен.",
          why:
            "Who is your teacher? После who стоит форма be: спрашивают о человеке, а не " +
            "о действии.",
        },
        {
          id: "z4-otmetit-poryadok",
          kind: "hottext",
          prompt: "Отметь вопросы, где вопросительное слово стоит не на своём месте.",
          parts: [
            { text: "Where do you work?", selectable: true },
            { text: " · " },
            { text: "Do you where work?", selectable: true, correct: true },
            { text: " · " },
            { text: "When do you start?", selectable: true },
            { text: " · " },
            { text: "Do when you start?", selectable: true, correct: true },
          ],
          hint: "Вопросительное слово стоит первым.",
          why:
            "Не на месте в «Do you where work?» и «Do when you start?». Вопросительное слово " +
            "всегда идёт в самом начале.",
        },
        {
          id: "z5-sprosit-gde-zhivyot",
          kind: "short",
          prompt: "Спроси, где живёт твой брат. Брат — my brother.",
          answer: "Where does my brother live?",
          accept: ["where does my brother live?", "Where does my brother live"],
          hint: "Человек один другой — значит does.",
          why:
            "Where does my brother live? Вопросительное слово первым, потом does, потом человек и " +
            "глагол.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vopros-o-neskolkih",
      title: "Спросить о нескольких: Do they live here?",
      estimatedMinutes: 12,
      outcome: "спрашивать о нескольких людях: Do they live here?",

      blocks: [
        {
          id: "zachem-o-neskolkih",
          kind: "explain",
          text: [
            "Об одном другом человеке спрашивают через Does: Does he live here?",
            "А если людей несколько — вернётся Do. Do they live here?",
            "Does ставят только там, где речь об одном другом человеке — he, she, Alim. О себе, о собеседнике и о нескольких — Do.",
          ],
        },
        {
          id: "tablica-o-neskolkih",
          kind: "table",
          caption: "Один и несколько",
          zvuchat: ["Does he live here?", "Do they live here?", "Does she work in a shop?",
            "Do they work in a shop?", "Does your brother study?", "Do your friends study?",
          ],
          head: ["Об одном", "О нескольких", "Перевод"],
          rows: [
            ["Does he live here?", "Do they live here?", "Они здесь живут?"],
            ["Does she work in a shop?", "Do they work in a shop?", "Они работают в магазине?"],
            ["Does your brother study?", "Do your friends study?", "Твои друзья учатся?"],
          ],
        },
        {
          id: "smotri-skolko-ih-v-voprose",
          kind: "explain",
          text: [
            "Считай людей, о которых спрашиваешь.",
            "my brother — один, значит Does. my friends — несколько, значит Do.",
            "То же правило работало в модуле «Я не делаю»: там выбирали между doesn't и " +
              "don't.",
          ],
        },
        {
          id: "does-tolko-ob-odnom",
          kind: "note",
          tone: "mistake",
          text:
            "Does о нескольких не говорят.\n\n«Does they live here?» — ошибка. Верно — Do " +
            "they live here?",
        },
        {
          id: "primer-o-neskolkih",
          kind: "example",
          caption: "Разговор о соседях",
          razgovor: true,
          text:
            "— Do your friends live in this city?\n— Yes, they do.\n" +
            "— Do they work together?\n— No, they don't.",
          explain:
            "Короткий ответ о нескольких устроен так же: Yes, they do. No, they don't.",
        },
        // Запись убрана: обе половины каждой пары звучат в таблице выше.
        {
          id: "slovar-o-neskolkih",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "together", translation: "вместе", example: "They work together.", hint: "/təˈgeðə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-o-neskolkih",
          kind: "gap",
          prompt: "Ты спрашиваешь о своих друзьях. Допиши недостающее слово.",
          before: "",
          after: " your friends live here?",
          answer: "Do",
          accept: ["do"],
          hint: "Людей несколько.",
          why: "Do your friends live here? О нескольких людях спрашивают через Do.",
        },
        {
          id: "z2-odin-ili-neskolko",
          kind: "choice",
          prompt: "Ты спрашиваешь, работают ли твои родители вместе. Родители — my parents.",
          options: [
            { text: "Does my parents work together?" },
            { text: "Do my parents work together?", correct: true },
            { text: "Do my parents works together?" },
          ],
          hint: "Родителей несколько.",
          why:
            "Do my parents work together? Людей несколько, поэтому Do, а глагол остаётся " +
            "без окончания.",
        },
        {
          id: "z3-otmetit-does-o-mnogih",
          kind: "hottext",
          prompt: "Отметь вопросы, где Does стоит там, где людей несколько.",
          parts: [
            { text: "Do they work here?", selectable: true },
            { text: " · " },
            { text: "Does they work here?", selectable: true, correct: true },
            { text: " · " },
            { text: "Does she work here?", selectable: true },
            { text: " · " },
            { text: "Does your friends work here?", selectable: true, correct: true },
          ],
          hint: "Does бывает только там, где речь об одном.",
          why:
            "Does стоит не на месте в «Does they work here?» и «Does your friends work " +
            "here?»: в обоих случаях людей несколько.",
        },
        {
          id: "z4-perestroit-na-nih",
          kind: "short",
          prompt: "Перестрой вопрос на нескольких: Does he live in this city?",
          answer: "Do they live in this city?",
          accept: ["do they live in this city?", "Do they live in this city"],
          hint: "Он — они, а Does меняется на Do.",
          why: "Do they live in this city? О нескольких спрашивают через Do.",
        },
        {
          id: "z5-sobrat-o-neskolkih",
          kind: "order",
          prompt: "Собери вопрос: «Твои друзья учатся вместе?»",
          items: ["study", "Do", "together?", "your friends"],
          answer: [1, 3, 0, 2],
          hint: "Первым идёт Do.",
          why: "Do your friends study together? Порядок: Do, люди, глагол, остальное.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-i-otvetit",
      title: "Спросить и ответить",
      estimatedMinutes: 15,
      outcome: "вести короткий разговор о делах: спросить и ответить",

      blocks: [
        {
          id: "zachem-razgovor",
          kind: "explain",
          text: [
            "Отдельный вопрос разговором не становится. Разговор — это вопрос, ответ и " +
              "следующий вопрос.",
            "Все части у тебя уже есть. Осталось сложить их в нужном порядке.",
          ],
        },
        {
          id: "shagi-razgovora",
          kind: "table",
          caption: "Из чего складывается разговор",
          zvuchat: ["Do you work here?", "Yes, I do.", "Where do you work?",
            "I work at a school.",
          ],
          head: ["Шаг", "Пример"],
          rows: [
            ["задать вопрос, на который отвечают да или нет", "Do you work here?"],
            ["ответить коротко", "Yes, I do."],
            ["спросить подробнее", "Where do you work?"],
            ["ответить целиком", "I work at a school."],
          ],
        },
        {
          id: "primer-razgovora",
          kind: "example",
          caption: "Разговор целиком",
          razgovor: true,
          text:
            "— Do you work in this city?\n— Yes, I do.\n— Where do you work?\n" +
            "— I work at a school. And you?\n— I don't work. I study at a university.",
          explain:
            "Сначала вопрос на да или нет, потом подробность. В конце собеседник " +
            "рассказывает о себе — и вопросительное слово там уже не нужно.",
        },
        {
          id: "primer-razgovora-o-tretem",
          kind: "example",
          caption: "Разговор о третьем человеке",
          razgovor: true,
          text:
            "— Does your sister live in Almaty?\n— No, she doesn't. She lives in Astana.\n" +
            "— What does she do?\n— She's a doctor.",
          explain:
            "Тот же порядок, только об одном другом человеке: Does в вопросе и doesn't в " +
            "коротком ответе.",
        },
        {
          id: "i-vy",
          kind: "note",
          tone: "info",
          text:
            "Короткий способ вернуть вопрос собеседнику — And you?\n\nЭто значит «а ты?» " +
            "Повторять весь вопрос не нужно.",
        },
        // Запись убрана: оба разговора выше звучат целиком и на два голоса.
        {
          id: "slovar-razgovora",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "holiday", translation: "отпуск, каникулы", example: "I read on holiday.", hint: "/ˈhɒlədeɪ/" },
            { term: "about", translation: "о, про", example: "a film about Almaty", hint: "/əˈbaʊt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-sobrat-razgovor",
          kind: "order",
          prompt: "Собери разговор по порядку.",
          items: [
            "I work at a school.",
            "Do you work in this city?",
            "Where do you work?",
            "Yes, I do.",
          ],
          answer: [1, 3, 2, 0],
          hint: "Сначала тот вопрос, на который отвечают да или нет.",
          why:
            "Do you work in this city? — Yes, I do. — Where do you work? — I work at a " +
            "school. Сначала общий вопрос, потом уточнение.",
        },
        {
          id: "z2-otvetit-i-sprosit",
          kind: "short",
          prompt:
            "Тебя спросили: Do you live in Almaty? Ты живёшь. Ответь коротко и верни вопрос двумя словами.",
          answer: "Yes, I do. And you?",
          accept: ["yes, I do. And you?", "Yes, I do. And you", "Yes I do. And you?"],
          hint: "Короткий ответ, потом два слова.",
          why: "Yes, I do. And you? Возвращать вопрос целиком не нужно.",
        },
        {
          id: "z3-sprosit-podrobnost",
          kind: "short",
          prompt:
            "Собеседник ответил: Yes, I do. Спроси подробнее: где он работает.",
          answer: "Where do you work?",
          accept: ["where do you work?", "Where do you work"],
          hint: "Вопросительное слово первым.",
          why: "Where do you work? После общего вопроса спрашивают подробнее.",
        },
        {
          id: "z4-o-tretem-cheloveke",
          kind: "short",
          prompt: "Спроси, живёт ли сестра собеседника в Астане. Сестра — your sister.",
          answer: "Does your sister live in Astana?",
          accept: [
            "does your sister live in Astana?",
            "Does your sister live in Astana",
          ],
          hint: "Человек один другой.",
          why:
            "Does your sister live in Astana? Об одном другом человеке спрашивают через " +
            "Does, а глагол остаётся без окончания.",
        },
        {
          id: "z5-razgovor-vsluh",
          kind: "speak",
          prompt: "Произнеси вслух разговор из трёх шагов: вопрос, короткий ответ, подробность.",
          phrase: "Do you work here? Yes, I do. Where do you work?",
          translation: "Ты работаешь здесь? Да. Где ты работаешь?",
          hint: "Do в начале, ответ короткий.",
          why:
            "Do you work here? Yes, I do. Where do you work? Три шага разговора подряд.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Анкета с вопросами — текст, который целиком состоит из
    // вопросов, и это редкий случай: обычно ученик их только задаёт.
    // =====================================================================
    {
      slug: "chitaem-anketu",
      title: "Читаем анкету",
      estimatedMinutes: 13,
      outcome: "понимать вопросы анкеты и находить ответ на них в чужом бланке",

      blocks: [
        {
          id: "zachem-chitat-anketu",
          kind: "explain",
          text: [
            "Анкету читают дважды: сначала вопросы, потом чужие ответы. Первое нужно, " +
              "чтобы понять, о чём спрашивают, второе — чтобы найти нужное.",
            "Вопросы в анкете короткие и почти все начинаются одинаково — с Do you или " +
              "Where do you. Дальше идёт само дело.",
          ],
        },
        {
          id: "anketa-s-voprosami",
          kind: "text",
          genre: "notice",
          title: "STUDENT FORM",
          body: [
            "1. What is your name?",
            "2. Where do you live?",
            "3. Do you work?",
            "4. What do you study?",
          ],
        },
        {
          id: "razbor-ankety",
          kind: "note",
          tone: "info",
          text:
            "Первый вопрос начинается с What is — он про имя, а не про дело. Остальные " +
              "три идут с do, и после него всегда стоит тот, кто действует: do you.",
        },
        {
          id: "zapolnennaya-anketa",
          kind: "text",
          genre: "notice",
          title: "STUDENT FORM — Aigerim",
          body: [
            "1. Aigerim",
            "2. Almaty",
            "3. Yes, I do. I work in a shop.",
            "4. English",
          ],
        },

        // ---- задания ----
        {
          id: "z1-o-chem-vtoroy-vopros",
          kind: "choice",
          about: "anketa-s-voprosami",
          prompt: "Прочитай анкету STUDENT FORM. О чём спрашивает второй вопрос?",
          options: [
            { text: "Об имени" },
            { text: "О месте, где человек живёт", correct: true },
            { text: "О работе" },
          ],
          hint: "Вопрос начинается с вопросительного слова — оно и говорит, о чём речь.",
          why: "Where do you live? Where — «где».",
        },
        {
          id: "z2-gde-zhivyot-aigerim",
          kind: "short",
          about: "zapolnennaya-anketa",
          prompt:
            "Прочитай заполненную анкету. Где живёт Айгерим? Ответь английским словом.",
          answer: "Almaty",
          accept: ["almaty", "in Almaty"],
          hint: "Ответы стоят под теми же номерами, что и вопросы.",
          why:
            "Второй вопрос — Where do you live?, и под номером 2 стоит Almaty. Номера " +
            "и связывают вопрос с ответом.",
        },
        {
          id: "z3-rabotaet-li",
          kind: "choice",
          about: "zapolnennaya-anketa",
          prompt: "Прочитай заполненную анкету. Работает ли Айгерим?",
          options: [
            { text: "Работает, в магазине", correct: true },
            { text: "Не работает" },
            { text: "Про работу она не ответила" },
          ],
          hint: "Под номером 3 стоит короткий ответ и одна подробность.",
          why:
            "Yes, I do. I work in a shop. Короткий ответ говорит «да», а следующее " +
            "предложение добавляет где.",
        },
        {
          id: "z4-chto-izuchaet",
          kind: "short",
          about: "zapolnennaya-anketa",
          prompt:
            "Прочитай заполненную анкету. Что изучает Айгерим? Ответь английским словом.",
          answer: "English",
          accept: ["english"],
          hint: "Найди номер вопроса про учёбу и посмотри тот же номер в ответах.",
          why: "Четвёртый вопрос — What do you study?, и под номером 4 стоит English.",
        },
        {
          id: "z5-kakoy-vopros-bez-do",
          kind: "hottext",
          about: "anketa-s-voprosami",
          prompt:
            "Прочитай анкету STUDENT FORM. Отметь вопрос, в котором нет слова do.",
          parts: [
            { text: "What is your name?", selectable: true, correct: true },
            { text: "Where do you live?", selectable: true },
            { text: "Do you work?", selectable: true },
            { text: "What do you study?", selectable: true },
          ],
          hint: "Этот вопрос спрашивает не о деле, а о том, кто человек такой.",
          why:
            "What is your name? Здесь работает форма be, а не do: вопрос об имени, " +
            "а не о деле.",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-vopros-o-delah",
      title: "Слушаем вопросы о делах",
      estimatedMinutes: 13,
      outcome: "понимать на слух вопрос с do и короткий ответ на него",

      blocks: [
        {
          id: "zachem-slushat-vopros-do",
          kind: "explain",
          text: [
            "Вопрос с do слышно по первому слову: оно и открывает предложение. Дальше " +
              "идёт тот, кто действует, и само дело.",
            "Труднее с ответом. Он короткий — два слова, — и его легко принять за начало " +
              "нового предложения.",
          ],
        },
        {
          id: "vopros-i-otvet-na-sluh",
          kind: "table",
          caption: "Вопрос и ответ — нажми и сравни",
          zvuchat: ["Do you work here?", "Yes, I do.", "Does he work here?", "No, he doesn't.",
          ],
          head: ["Вопрос", "Короткий ответ"],
          rows: [
            ["Do you work here?", "Yes, I do."],
            ["Does he work here?", "No, he doesn't."],
          ],
        },
        {
          id: "otvet-povtoryaet-vopros",
          kind: "note",
          tone: "info",
          text:
            "Короткий ответ повторяет то же слово, что было в вопросе: спросили do — " +
              "ответят do, спросили does — ответят does. Если расслышать вопрос не " +
              "вышло, ответ подскажет, о ком он был.",
        },
        {
          id: "zapis-razgovor-o-rabote",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Do you work here? — Yes, I do. — And does your brother work here? — " +
            "No, he doesn't. He works in a school.",
        },
        {
          id: "zapis-vopros-gde-i-chto",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай второй разговор",
          transcript:
            "Where do you live? — I live in Astana. — And what do you study? — " +
            "I study English.",
        },

        // ---- задания ----
        {
          id: "z1-rabotaet-li-sobesednik",
          kind: "choice",
          about: "zapis-razgovor-o-rabote",
          prompt: "Послушай первую запись. Работает ли здесь тот, кого спросили?",
          options: [
            { text: "Работает", correct: true },
            { text: "Не работает" },
            { text: "Про него не спрашивали" },
          ],
          hint: "Первый короткий ответ идёт сразу после первого вопроса.",
          why: "Do you work here? — Yes, I do. Да, работает.",
        },
        {
          id: "z2-gde-rabotaet-brat",
          kind: "short",
          about: "zapis-razgovor-o-rabote",
          prompt:
            "Послушай первую запись. Где работает брат? Ответь английским словом.",
          answer: "school",
          accept: ["a school", "in a school"],
          hint: "После короткого ответа идёт предложение о том, как есть.",
          why: "No, he doesn't. He works in a school. В школе.",
        },
        {
          id: "z3-gde-zhivyot",
          kind: "short",
          about: "zapis-vopros-gde-i-chto",
          prompt:
            "Послушай вторую запись. Где живёт собеседник? Ответь английским словом.",
          answer: "Astana",
          accept: ["astana", "in Astana"],
          hint: "Ответ идёт сразу после вопроса со словом where.",
          why: "Where do you live? — I live in Astana. В Астане.",
        },
        {
          id: "z4-chto-izuchaet-na-sluh",
          kind: "choice",
          about: "zapis-vopros-gde-i-chto",
          prompt: "Послушай вторую запись. Что изучает собеседник?",
          options: [
            { text: "Английский", correct: true },
            { text: "Про учёбу не спрашивали" },
            { text: "Он не учится" },
          ],
          hint: "Второй вопрос начинается со слова what.",
          why: "And what do you study? — I study English. Английский.",
        },
        {
          id: "z5-sprosit-i-otvetit",
          kind: "speak",
          prompt:
            "Произнеси вслух вопрос и короткий ответ на него: спроси, работает ли " +
            "собеседник здесь, и ответь за него «да».",
          phrase: "Do you work here? Yes, I do.",
          translation: "Ты работаешь здесь? Да.",
          hint: "В ответе повтори то же слово, что стояло в начале вопроса.",
          why:
            "Короткий ответ и вопрос держатся на одном слове. Ответишь Yes, I am — " +
            "собеседник услышит ответ на другой вопрос.",
        },
      ],
    },
  ],

  quiz: {
    ask: 8,
    passRatio: 0.8,
    questions: [
      // ---- итог 1 ----
      // ---- чтение и слушание ------------------------------------------
      // Другой случай, чем в уроках: там анкета ученика и разговор о брате,
      // здесь анкета работника и вопрос о сестре.
      {
        id: "q-anketa-o-chem-vopros",
        kind: "choice",
        outcome: "понимать вопросы анкеты и находить ответ на них в чужом бланке",
        prompt:
          "Анкета: «1. Where do you work? 2. What do you do? 3. Do you work on Sunday?» " +
          "Какой вопрос требует ответа «да» или «нет»?",
        options: [
          { text: "Первый" },
          { text: "Второй" },
          { text: "Третий", correct: true },
        ],
        why:
          "Do you work on Sunday? Вопрос начинается с do и вопросительного слова не " +
          "содержит, значит ответ короткий. Первые два начинаются с where и what — " +
          "на них отвечают словами.",
      },
      {
        id: "q-anketa-nayti-otvet",
        kind: "short",
        outcome: "понимать вопросы анкеты и находить ответ на них в чужом бланке",
        prompt:
          "Анкета: «1. Where do you live? 2. What do you study?» Ответы: «1. Astana " +
          "2. English». Что изучает человек? Ответь английским словом.",
        answer: "English",
        accept: ["english"],
        why:
          "Второй вопрос — What do you study?, и под номером 2 стоит English. Astana " +
          "отвечает на первый вопрос, про место.",
      },
      {
        id: "q-na-sluh-otvet-na-vopros",
        kind: "choice",
        outcome: "понимать на слух вопрос с do и короткий ответ на него",
        zvuk: "Does your sister live in Almaty? — No, she doesn't. She lives in Astana.",
        prompt: "Послушай запись. Где живёт сестра?",
        options: [
          { text: "В Астане", correct: true },
          { text: "В Алматы" },
          { text: "Про сестру не спрашивали" },
        ],
        why:
          "No, she doesn't. She lives in Astana. Алматы назвали в вопросе, и ответ на " +
          "него отрицательный.",
      },
      {
        id: "q-na-sluh-o-chem-sprosili",
        kind: "short",
        outcome: "понимать на слух вопрос с do и короткий ответ на него",
        zvuk: "What do you study? — I study English.",
        prompt:
          "Послушай запись. О чём спросили — о месте, о деле или об учёбе? Ответь " +
          "одним русским словом.",
        answer: "об учёбе",
        accept: ["учёба", "учеба", "об учебе", "учёбе", "учебе"],
        why: "What do you study? Study — «изучать», значит вопрос об учёбе.",
      },
      {
        id: "q-do-you-dopisat",
        kind: "gap",
        outcome: "спрашивать собеседника о его делах: Do you work on Sunday?",
        prompt: "Спроси, живёт ли собеседник здесь. Допиши недостающее слово.",
        before: "",
        after: " you live here?",
        answer: "Do",
        accept: ["do"],
        hint: "Это слово стоит первым, а само не переводится.",
        why: "Do you live here? Вопрос начинается с Do.",
      },
      {
        id: "q-do-you-vybor",
        kind: "choice",
        outcome: "спрашивать собеседника о его делах: Do you work on Sunday?",
        prompt: "Ты спрашиваешь, знает ли собеседник Дану. Как сказать?",
        options: [
          { text: "You do know Dana?" },
          { text: "Do you knows Dana?" },
          { text: "Do you know Dana?", correct: true },
        ],
        hint: "Глагол после Do не меняется.",
        why: "Do you know Dana? Do первым, глагол без окончания.",
      },
      {
        id: "q-do-you-sobrat",
        kind: "order",
        outcome: "спрашивать собеседника о его делах: Do you work on Sunday?",
        prompt: "Собери вопрос: «Ты работаешь в офисе?»",
        items: ["in an office?", "you", "Do", "work"],
        answer: [2, 1, 3, 0],
        hint: "Первым идёт Do.",
        why: "Do you work in an office? Порядок: Do, you, глагол, остальное.",
      },

      // ---- итог 2 ----
      {
        id: "q-korotkiy-o-brate",
        // Этот вопрос был близнецом соседнего: то же условие, те же три варианта,
        // тот же верный ответ — менялось одно слово. Один из двадцати четырёх
        // вопросов работы не проверял ничего нового. Теперь здесь короткий ответ
        // «нет», и его надо написать, а не узнать. Нашёл методист.
        kind: "short",
        outcome: "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",
        prompt: "Тебя спросили: Do you drive? Ты не водишь машину. Ответь коротко.",
        answer: "No, I don't.",
        accept: ["No, I don't", "No, I do not.", "No, I do not"],
        hint: "Отвечают тем же словом, с которого начался вопрос.",
        why: "No, I don't. Вопрос начался с Do — им и отвечают, а глагол не повторяют.",
      },
      {
        id: "q-korotkiy-vybor",
        kind: "choice",
        outcome: "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",
        prompt: "Тебя спросили: Do you study English? Ты учишь. Как ответить коротко?",
        // Верный ответ переставлен первым: в работе он трижды подряд оказывался
        // третьим, и тест проходился нажатием одной кнопки. Нашла проверка.
        options: [
          { text: "Yes, I do.", correct: true },
          { text: "Yes, I study." },
          { text: "Yes, I am." },
        ],
        hint: "Повторяют не глагол, а то слово, с которого начался вопрос.",
        why: "Yes, I do. Ответ на вопрос с Do повторяет do, а не глагол.",
      },
      {
        id: "q-korotkiy-sobrat",
        kind: "order",
        outcome: "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",
        prompt: "Собери короткий ответ «нет» на вопрос Do you eat fish?",
        items: ["don't.", "No,", "I"],
        answer: [1, 2, 0],
        hint: "Три части, и последняя — don't.",
        why: "No, I don't. Дальше в коротком ответе ничего не идёт.",
      },

      // ---- итог 3 ----
      {
        id: "q-does-dopisat",
        kind: "gap",
        outcome: "спрашивать о другом человеке: Does he work here?",
        prompt: "Ты спрашиваешь о своём брате. Допиши недостающее слово.",
        before: "",
        after: " he work here?",
        answer: "Does",
        accept: ["does"],
        hint: "Речь об одном другом человеке.",
        why: "Does he work here? Брат один, и он не ты, поэтому вопрос открывает Does.",
      },
      {
        id: "q-does-vybor",
        // Было узнавание из трёх записей — с тем же условием и той же парой
        // ошибок, что в задании урока. Теперь вопрос надо построить самому.
        kind: "short",
        outcome: "спрашивать о другом человеке: Does he work here?",
        prompt: "Ты спрашиваешь, учит ли Дана английский. Запиши вопрос целиком.",
        answer: "Does Dana study English?",
        accept: ["Does Dana study English"],
        hint: "Дважды одно окончание в вопросе не ставят.",
        why: "Does Dana study English? Окончание уже внутри Does, поэтому глагол остаётся голым.",
      },
      {
        id: "q-does-otmetit",
        kind: "hottext",
        outcome: "спрашивать о другом человеке: Does he work here?",
        prompt: "Отметь вопросы, где окончание осталось у глагола.",
        parts: [
          { text: "Does she live in Astana?", selectable: true },
          { text: " · " },
          { text: "Does she lives in Astana?", selectable: true, correct: true },
          { text: " · " },
          { text: "Does he study here?", selectable: true },
          { text: " · " },
          { text: "Does he studies here?", selectable: true, correct: true },
        ],
        hint: "Окончание уходит в Does и у глагола не остаётся.",
        why: "Окончание осталось у глагола в «Does she lives in Astana?» и «Does he studies here?».",
      },

      // ---- итог 4 ----
      {
        id: "q-razlichenie-vybor",
        // Было узнавание с тем же условием и теми же вариантами, что в уроке.
        kind: "short",
        outcome: "различать вопрос с формой be и вопрос с do: Are you a doctor? — Do you work?",
        prompt: "Ты хочешь спросить, врач ли собеседник. Запиши вопрос целиком.",
        answer: "Are you a doctor?",
        accept: ["Are you a doctor"],
        hint: "Спрашивают не о деле, а о том, кто человек.",
        why: "Are you a doctor? Названию человека нужна форма be, а do спрашивает о действии.",
      },
      {
        id: "q-razlichenie-sprosit",
        kind: "short",
        outcome: "различать вопрос с формой be и вопрос с do: Are you a doctor? — Do you work?",
        prompt: "Спроси у собеседника, занят ли он. Занят — busy.",
        answer: "Are you busy?",
        accept: ["are you busy?", "Are you busy"],
        hint: "Дальше идёт прилагательное, а не действие.",
        why: "Are you busy? Прилагательное — значит вопрос начинается с формы be.",
      },
      {
        id: "q-razlichenie-napisat",
        kind: "short",
        outcome: "различать вопрос с формой be и вопрос с do: Are you a doctor? — Do you work?",
        prompt: "Спроси, работает ли собеседник в магазине. Магазин — a shop.",
        answer: "Do you work in a shop?",
        accept: ["do you work in a shop?", "Do you work in a shop"],
        hint: "Дальше идёт действие.",
        why: "Do you work in a shop? Действие — значит вопрос начинается с Do.",
      },

      // ---- итог 5 ----
      {
        id: "q-what-dopisat",
        kind: "gap",
        outcome: "спрашивать, что человек делает: What do you study?",
        prompt: "Ты хочешь узнать, что собеседник ест. Допиши недостающее слово.",
        before: "",
        after: " do you eat?",
        answer: "What",
        accept: ["what"],
        hint: "Оно значит «что».",
        why: "What do you eat? Слово what встаёт впереди, а сам вопрос за ним остаётся прежним.",
      },
      {
        id: "q-what-dopisat-does",
        kind: "gap",
        outcome: "спрашивать, что человек делает: What do you study?",
        prompt: "Ты хочешь узнать, что твоя сестра смотрит. Допиши недостающее слово.",
        before: "What ",
        after: " your sister watch?",
        answer: "does",
        accept: ["Does"],
        hint: "Речь об одном другом человеке.",
        why: "What does your sister watch? После вопросительного слова идёт does.",
      },
      {
        id: "q-what-otmetit",
        kind: "hottext",
        outcome: "спрашивать, что человек делает: What do you study?",
        prompt: "Отметь вопросы, построенные неверно.",
        parts: [
          { text: "What do you read?", selectable: true },
          { text: " · " },
          { text: "What does you read?", selectable: true, correct: true },
          { text: " · " },
          { text: "What do you eat?", selectable: true },
          { text: " · " },
          { text: "What do you eats?", selectable: true, correct: true },
        ],
        hint: "Смотри на форму do и на окончание у глагола.",
        why:
          "«What does you read?» неверно: о собеседнике говорят do, а не does. "
          + "«What do you eats?» неверно тоже: после do глагол остаётся без окончания.",
      },

      // ---- итог 6 ----
      {
        id: "q-gde-dopisat",
        kind: "gap",
        outcome: "спрашивать, где, когда и кто: Where do you work? Who is your teacher?",
        prompt: "Ты хочешь узнать, где собеседник учится. Допиши недостающее слово.",
        before: "",
        after: " do you study?",
        answer: "Where",
        accept: ["where"],
        hint: "Оно значит «где».",
        why: "Where do you study? Вопросительное слово стоит первым.",
      },
      {
        id: "q-kto-dopisat",
        kind: "gap",
        outcome: "спрашивать, где, когда и кто: Where do you work? Who is your teacher?",
        prompt: "Ты хочешь узнать, кто её брат. Допиши недостающее слово.",
        before: "",
        after: " is her brother?",
        answer: "Who",
        accept: ["who"],
        hint: "Дальше идёт человек, а не действие.",
        why: "Who is her brother? После who стоит форма be, а не Do.",
      },
      {
        id: "q-gde-sobrat",
        kind: "order",
        outcome: "спрашивать, где, когда и кто: Where do you work? Who is your teacher?",
        prompt: "Собери вопрос: «Когда твои друзья заканчивают?»",
        items: ["finish?", "When", "your friends", "do"],
        answer: [1, 3, 2, 0],
        hint: "Вопросительное слово первым, людей несколько.",
        why: "When do your friends finish? Людей несколько, поэтому do, а не does.",
      },

      // ---- итог 7 ----
      {
        id: "q-neskolko-sobrat",
        kind: "order",
        outcome: "спрашивать о нескольких людях: Do they live here?",
        prompt: "Собери вопрос: «Твои родители живут здесь?»",
        items: ["live here?", "Do", "your parents"],
        answer: [1, 2, 0],
        hint: "Родителей несколько.",
        why: "Do your parents live here? Родители — это не один человек, и вопрос о них открывает Do.",
      },
      {
        id: "q-neskolko-dopisat",
        kind: "gap",
        outcome: "спрашивать о нескольких людях: Do they live here?",
        prompt: "Ты спрашиваешь о своих родителях. Родители — my parents. Допиши недостающее слово.",
        before: "",
        after: " my parents live in this city?",
        answer: "Do",
        accept: ["do"],
        hint: "Родителей несколько.",
        why: "Do my parents live in this city? Does понадобилось бы для одного человека, а тут их несколько.",
      },
      {
        id: "q-neskolko-vybor",
        // Было узнавание с тем же условием и той же парой ошибок, что в уроке.
        kind: "short",
        outcome: "спрашивать о нескольких людях: Do they live here?",
        prompt: "Ты спрашиваешь, учат ли твои друзья английский. Друзья — my friends. Запиши вопрос целиком.",
        answer: "Do my friends study English?",
        accept: ["Do my friends study English"],
        hint: "Друзей несколько, и глагол остаётся без окончания.",
        why: "Do my friends study English? Людей несколько — значит Do, глагол без окончания.",
      },

      // ---- итог 8 ----
      {
        id: "q-razgovor-dopisat",
        kind: "gap",
        outcome: "вести короткий разговор о делах: спросить и ответить",
        prompt:
          "Разговор идёт так: — Do you study here? — Yes, I do. Допиши недостающее слово "
          + "в следующем вопросе.",
        before: "",
        after: " do you study?",
        answer: "What",
        accept: ["what"],
        hint: "После короткого ответа спрашивают о новом.",
        why:
          "What do you study? Общий вопрос и короткий ответ уже были — дальше "
          + "спрашивают подробнее.",
      },
      {
        id: "q-razgovor-vernut",
        kind: "gap",
        outcome: "вести короткий разговор о делах: спросить и ответить",
        prompt: "Ответ дан, и теперь вопрос надо вернуть собеседнику. Допиши недостающее слово.",
        before: "Yes, I do. ",
        after: "?",
        answer: "And you",
        accept: ["and you"],
        hint: "Двух слов достаточно, повторять весь вопрос не нужно.",
        why: "And you? Так вопрос возвращают собеседнику, не повторяя его целиком.",
      },
      {
        id: "q-razgovor-o-tretem",
        kind: "choice",
        outcome: "вести короткий разговор о делах: спросить и ответить",
        prompt: "Собеседник сказал: My sister works at a school. Чем продолжить разговор?",
        options: [
          { text: "Does she work at a school?" },
          { text: "Where does she live?", correct: true },
          { text: "Do she work at a school?" },
        ],
        hint: "Переспрашивать уже сказанное незачем — спроси о новом.",
        why:
          "Where does she live? Про работу сестры уже сказано — переспрашивать незачем, " +
          "лучше спросить о новом.",
      },
    ],
  },
};

export default module;
