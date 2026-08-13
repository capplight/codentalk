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
        "company (n.), university (n.), college (n.), restaurant (n.), cafe (n.), " +
        "language (n.), film (n.), sport (n.), bus (n.), lunch (n.), breakfast (n.), " +
        "city (n.), together (adv.), holiday (n.), about (prep.). Слова прежних модулей: " +
        "work, live, study, read, play, watch, go, like, eat, drink, know, speak, start, " +
        "finish, coffee, football, music, teacher, doctor, student, school, shop",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены: краткий " +
        "гласный через e вместо ɛ, конечный безударный через ə вместо ɐ (together — " +
        "/təˈɡeðə/), r вместо ɹ (restaurant — /ˈrestrɒnt/). " +
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
          text:
            "— Do you work on Sunday?\n— No. I don't work on Sunday.\n— Do you live here?\n" +
            "— Yes. I live near the office.",
          explain:
            "Оба вопроса устроены одинаково: Do, потом you, потом глагол. Ответы ты уже " +
            "умеешь строить с модуля «Я не делаю».",
        },
        {
          id: "zapis-voprosa",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары: сказать и спросить",
          transcript:
            "You work on Sunday. Do you work on Sunday? You live here. Do you live here? " +
            "You drink coffee. Do you drink coffee?",
        },
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
          text:
            "— Do you live in Almaty?\n— Yes, I do.\n— Do you work in an office?\n" +
            "— No, I don't. I work at a school.",
          explain:
            "После короткого «нет» добавляют, как на самом деле. Тот же порядок был " +
            "в модуле «Я не делаю».",
        },
        {
          id: "zapis-korotkogo",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопрос и оба ответа",
          transcript:
            "Do you work on Sunday? Yes, I do. No, I don't. Do you live here? Yes, I do. " +
            "No, I don't.",
        },
        {
          id: "slovar-korotkogo",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "weekend", translation: "выходные", example: "I read at the weekend.", hint: "/ˌwiːkˈend/" },
            { term: "restaurant", translation: "ресторан", example: "I eat in a restaurant.", hint: "/ˈrestrɒnt/" },
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
          prompt: "Сопоставь вопрос и подходящий ответ.",
          left: ["Do you work here?", "Are you a teacher?", "Do you know Dana?"],
          right: ["Yes, I am.", "Yes, I do.", "No, I don't."],
          answer: [1, 0, 2],
          hint: "После вопроса с Do отвечают do, после вопроса с формой be — самой формой be.",
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
            { text: "Yes, I am work.", selectable: true, correct: true },
            { text: " · " },
            { text: "No, I don't.", selectable: true },
            { text: " · " },
            { text: "No, I don't live.", selectable: true, correct: true },
          ],
          hint: "Короткий ответ кончается на do или don't.",
          why:
            "Лишний глагол в «Yes, I do work» и «No, I don't live». Короткий ответ на этом " +
            "и кончается: Yes, I do. No, I don't.",
        },
        {
          id: "z5-otvetit-korotko",
          kind: "short",
          prompt: "Тебя спросили: Do you work in an office? Ты работаешь. Ответь коротко.",
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
          text:
            "— Does your brother work here?\n— No, he doesn't. He works at a company.\n" +
            "— Does he like his job?\n— Yes, he does.",
          explain:
            "Короткий ответ устроен как в прошлом уроке, только вместо do стоит does: " +
            "Yes, he does. No, he doesn't.",
        },
        {
          id: "zapis-does",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары: о собеседнике и о другом",
          transcript:
            "Do you work here? Does he work here? Do you live in Almaty? Does she live in " +
            "Almaty? Yes, he does. No, she doesn't.",
        },
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
          text:
            "— Are you a teacher?\n— Yes, I am.\n— Do you work at a school?\n" +
            "— No, I don't. I work at a college.",
          explain:
            "Первый вопрос о том, кто человек, второй — о том, что он делает. И ответы " +
            "разные: на первый Yes, I am, на второй No, I don't.",
        },
        {
          id: "zapis-razlicheniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары вопросов",
          transcript:
            "Are you a doctor? Do you work here? Is she a student? Does she study here?",
        },
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
            { text: "Do you are work here?" },
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
          text:
            "— What do you study?\n— I study English.\n— And what does your sister study?\n" +
            "— She studies music.",
          explain:
            "На такой вопрос отвечают не да и не нет, а полным предложением. И заметь: в " +
            "ответе окончание вернулось к глаголу — She studies music, — потому что в ответе нет does.",
        },
        {
          id: "zapis-what",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай вопросы со словом what",
          transcript:
            "What do you study? What do you read? What does he study? What do you do?",
        },
        {
          id: "slovar-what",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "language", translation: "язык", example: "English is a language.", hint: "/ˈlæŋɡwɪdʒ/" },
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
          ],
        },
        {
          id: "tablica-slov-voprosa",
          kind: "table",
          caption: "Вопросительные слова перед Do",
          head: ["Слово", "О чём", "Пример"],
          rows: [
            ["what", "что", "What do you study?"],
            ["where", "где", "Where do you work?"],
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
          text:
            "— Where do you work?\n— I work at a school.\n— When do you start?\n" +
            "— I start at nine.\n— Who is your teacher?\n— Dana is my teacher.",
          explain:
            "Первые два вопроса устроены одинаково: слово, Do, you, глагол. Третий — с " +
            "формой be, потому что дальше идёт не действие, а человек.",
        },
        {
          id: "zapis-gde-kogda",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай четыре вопросительных слова",
          transcript:
            "What do you study? Where do you work? When do you start? Who is your teacher?",
        },
        {
          id: "slovar-gde-kogda",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "who", translation: "кто", example: "Who is your teacher?", hint: "/huː/" },
            { term: "bus", translation: "автобус", example: "Where is the bus?", hint: "/bʌs/" },
            { term: "lunch", translation: "обед", example: "I eat lunch at one.", hint: "/lʌntʃ/" },
            { term: "breakfast", translation: "завтрак", example: "I eat breakfast at eight.", hint: "/ˈbrekfəst/" },
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
          text:
            "— Do your friends live in this city?\n— Yes, they do.\n" +
            "— Do they work together?\n— No, they don't.",
          explain:
            "Короткий ответ о нескольких устроен так же: Yes, they do. No, they don't.",
        },
        {
          id: "zapis-o-neskolkih",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай пары: об одном и о нескольких",
          transcript:
            "Does he live here? Do they live here? Does she work in a shop? Do they work " +
            "in a shop? Yes, they do. No, they don't.",
        },
        {
          id: "slovar-o-neskolkih",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "city", translation: "город", example: "I live in this city.", hint: "/ˈsɪti/" },
            { term: "together", translation: "вместе", example: "They work together.", hint: "/təˈɡeðə/" },
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
        {
          id: "zapis-razgovora",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай разговор целиком",
          transcript:
            "Do you work in this city? Yes, I do. Where do you work? I work at a school. " +
            "And you? I don't work. I study at a university.",
        },
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
            "Do you work in this city? — Yes, I do. — Where do you work? — I work in a " +
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
  ],

  quiz: {
    ask: 8,
    passRatio: 0.7,
    questions: [
      // ---- итог 1 ----
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
        kind: "choice",
        outcome: "спрашивать о другом человеке: Does he work here?",
        prompt: "Тебя спросили: Does your brother work here? Брат работает. Как ответить коротко?",
        options: [
          { text: "Yes, he does.", correct: true },
          { text: "Yes, he do." },
          { text: "Yes, he is." },
        ],
        hint: "Об одном другом человеке отвечают тем же словом, с которого начался вопрос.",
        why: "Yes, he does. Вопрос начался с Does — им и отвечают.",
      },
      {
        id: "q-korotkiy-vybor",
        kind: "choice",
        outcome: "коротко отвечать на такой вопрос: Yes, I do. No, I don't.",
        prompt: "Тебя спросили: Do you study English? Ты учишь. Как ответить коротко?",
        options: [
          { text: "Yes, I study." },
          { text: "Yes, I am." },
          { text: "Yes, I do.", correct: true },
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
        why: "Does he work here? Об одном другом человеке спрашивают через Does.",
      },
      {
        id: "q-does-vybor",
        kind: "choice",
        outcome: "спрашивать о другом человеке: Does he work here?",
        prompt: "Ты спрашиваешь, учит ли Дана английский. Как сказать?",
        options: [
          { text: "Does Dana studies English?" },
          { text: "Does Dana study English?", correct: true },
          { text: "Do Dana study English?" },
        ],
        hint: "Окончание стоит только в одном месте.",
        why: "Does Dana study English? Окончание уже внутри Does.",
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
        kind: "choice",
        outcome: "различать вопрос с формой be и вопрос с do: Are you a doctor? — Do you work?",
        prompt: "Ты хочешь спросить, врач ли собеседник. Как начать?",
        options: [
          { text: "Do you a doctor?" },
          { text: "Does you a doctor?" },
          { text: "Are you a doctor?", correct: true },
        ],
        hint: "После you идёт название человека.",
        why: "Are you a doctor? Название — значит форма be.",
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
        why: "What do you eat? Вопросительное слово ставят перед Do.",
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
        prompt: "Отметь вопросы, где после what пропущено do.",
        parts: [
          { text: "What do you read?", selectable: true },
          { text: " · " },
          { text: "What you read?", selectable: true, correct: true },
          { text: " · " },
          { text: "What do you eat?", selectable: true },
          { text: " · " },
          { text: "What you eat?", selectable: true, correct: true },
        ],
        hint: "После вопросительного слова идёт do.",
        why: "Do пропущено в «What you read?» и «What you eat?».",
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
        why: "Do your parents live here? О нескольких людях спрашивают через Do.",
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
        why: "Do my parents live in this city? О нескольких людях спрашивают через Do.",
      },
      {
        id: "q-neskolko-vybor",
        kind: "choice",
        outcome: "спрашивать о нескольких людях: Do they live here?",
        prompt: "Ты спрашиваешь, учат ли твои друзья английский. Друзья — my friends.",
        options: [
          { text: "Does my friends study English?" },
          { text: "Do my friends study English?", correct: true },
          { text: "Do my friends studies English?" },
        ],
        hint: "Друзей несколько, и глагол остаётся без окончания.",
        why: "Do my friends study English? Людей несколько — значит Do, глагол без окончания.",
      },

      // ---- итог 8 ----
      {
        id: "q-razgovor-sobrat",
        kind: "order",
        outcome: "вести короткий разговор о делах: спросить и ответить",
        prompt: "Собери разговор по порядку.",
        items: [
          "I work at a school.",
          "Do you work at the weekend?",
          "No, I don't.",
          "Where do you work?",
        ],
        answer: [1, 2, 3, 0],
        hint: "Сначала тот вопрос, на который отвечают да или нет.",
        why:
          "Do you work at the weekend? — No, I don't. — Where do you work? — I work at " +
          "a school. Сначала вопрос и ответ на него, потом уточнение и ответ на него.",
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
