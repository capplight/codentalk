import type { Module } from "@/lib/content/types";

/**
 * Модуль 8 курса «Английский · Elementary»: я собираюсь.
 *
 * Программа: docs/programma-english-elementary.md, модуль 8 — «говорить о
 * намерениях»; грамматика: `be going to`, утверждение и вопрос. Это первый
 * модуль второй части курса.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «НАМЕРЕНИЕ».
 *
 * Так и только так модуль зовёт то, о чём учит говорить: намерение — то, что
 * человек решил сделать. Слов «план», «замысел» и «будущее время» в тексте для
 * ученика нет ни разу: это были бы вторые имена той же вещи (CLAUDE.md,
 * «Понятность объяснения», пункт 3). У формы имя своё и тоже одно — «оборот
 * going to».
 *
 * ЧЕМУ МОДУЛЬ УЧИТ, А ЧЕМУ НЕТ — САМОЕ ВАЖНОЕ МЕСТО.
 *
 * Программа обещала здесь «предсказание по видимому признаку» — вроде «It's
 * going to rain». Источник этого не подтверждает, и я это увидел только потому,
 * что прочитал примеры при графах, а не одни описания (правило из разбора
 * модуля 7).
 *
 * English Grammar Profile делит предсказания надвое. На A2 стоит «USE:
 * PREDICTIONS WITH 'BE'» — «Can use 'be going to' with 'be' to make
 * predictions», пример источника «I think this Saturday is going to be a nice
 * day». А «USE: PREDICTIONS» с любыми другими глаголами стоит уже на B1 —
 * «Can use 'be going to' with an increasing range of verbs to make
 * predictions», пример «I think you're going to like it».
 *
 * Поэтому урок 5 учит говорить о том, КАКИМ что-то будет: `It is going to be
 * foggy`, `The trip is going to be long`. Записи вида `It is going to rain` в
 * модуле нет нигде — и запрета на неё тоже нет нигде: ни одно задание не
 * объявляет такую строку ошибкой.
 *
 * И ЭТО НЕ ЗНАЧИТ, ЧТО ТАКАЯ ЗАПИСЬ ВЫШЕ СТУПЕНИ. Оговорка приписана по разбору
 * методиста, иначе следующий проверяющий прочтёт запрет там, где его нет. Графа
 * A2 «FORM: AFFIRMATIVE» держит пример «It is going to start at half past
 * four» — это `it` и обычный глагол, и это A2. Выше ступени стоит не сама
 * запись, а её употребление ради предсказания.
 *
 * ОТРИЦАНИЯ В МОДУЛЕ НЕТ ВОВСЕ. English Grammar Profile ставит «FUTURE future
 * with be going to, FORM: NEGATIVE» на B1 («I am not going to go to school
 * tomorrow»). Значит записи `I am not going to work` в модуле не встречается ни
 * разу — ни в примере, ни в задании, ни в проверочной работе.
 *
 * Короткий ответ `No, I'm not` при этом есть, и опора у него другая. Первая
 * редакция сослалась на A1 NEGATION, «FORM: MAIN VERB 'BE'», и методист эту
 * ссылку снял, прочитав её пример: «My college is not very big» — там `be` и
 * есть смысловой глагол, а у нас он вспомогательный при обороте going to.
 * Соседняя графа A2 («FORM: AUXILIARY VERBS 'BE', 'HAVE', PRESENT») тоже не
 * подходит: она сама оговорена как «in the present continuous and present
 * perfect».
 *
 * Опора, которая подходит и стоит в тех же `sources`: описания Совета Европы,
 * с. 79, Information exchange, A2 — «Can ask and answer questions about plans
 * and intentions». Слово «answer» и есть короткий ответ, в том числе
 * отрицательный. Так же поступил модуль 1 этой ступени с `No, I wasn't`.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, FUTURE future with be going to, «FORM:
 *    AFFIRMATIVE» — «Can use the affirmative form», пример источника «[about
 *    some new jeans] I'm going to wear them on holiday». Это уроки 1 и 2.
 *
 * 2. English Grammar Profile, A2, FUTURE future with be going to, «FORM:
 *    QUESTIONS» — «Can use the question form», пример «What are you going to
 *    wear?». Это уроки 3 и 4.
 *
 * 3. English Grammar Profile, A2, FUTURE future with be going to, «USE:
 *    INTENTIONS» — «Can use the affirmative and question forms of 'be going to'
 *    talk about plans and intentions», примеры «I'm going to use pink paint»,
 *    «My mum is going to take us by car», «What time are you going to come? And
 *    what are you going to bring?». Источник называет обе стороны — сказать и
 *    спросить, — и обе в модуле есть.
 *
 * 4. English Grammar Profile, A2, FUTURE future with be going to, «USE:
 *    PREDICTIONS WITH 'BE'» — разобрано выше, это урок 5.
 *
 * 5. Описания Совета Европы, с. 79, шкала Information exchange, графа A2: «Can
 *    ask and answer questions about plans and intentions». Прямая опора уроков
 *    3, 4 и 7: спросить и ответить стоят рядом, а не порознь.
 *
 * 6. Описания Совета Европы, с. 56, шкала Reading for orientation, графа A2:
 *    «Can find specific, predictable information in simple everyday material
 *    such as advertisements, prospectuses, menus, reference lists and
 *    timetables» и «Can understand everyday signs and notices, etc. in public
 *    places». Это урок 6 — три объявления и вопросы поиском.
 *
 * 7. Описания Совета Европы, с. 66, шкала Overall written production, графа A2:
 *    «Can produce a series of simple phrases and sentences linked with simple
 *    connectors like "and", "but" and "because"». Отсюда размер объявления в
 *    уроке 8: несколько коротких строк.
 *
 * 8. Руководство Cambridge A2 Key, с. 29, раздел THE TASK: «The candidates
 *    should only write ONE word, or a number, or a date, or a time for their
 *    answer». Поэтому все ответы на слух в уроке 7 односложные.
 *
 * ДВА НОВЫХ ВИДА ЗАДАНИЯ, назначенные раскладкой на вторую часть курса
 * (docs/vidy-zadaniy.md, раздел «Где они появляются»):
 *
 * — «ПЕРЕДАЙ ПО-АНГЛИЙСКИ»: русский текст в условии, ответ английским словом.
 *   Опора — описания Совета Европы, с. 95, шкала Relaying specific information,
 *   ПИСЬМЕННАЯ колонка, графа A2: «Can relay (in Language B) specific, relevant
 *   information contained in short, simple texts, labels and notices (in
 *   Language A) on familiar subjects». Там же, A2: «Can list (in Language B)
 *   specific information contained in simple texts (in Language A) on everyday
 *   subjects of immediate interest or need». Источник разрешает ПЕРЕЧИСЛИТЬ
 *   сведение, а не пересказать, — поэтому ответ здесь всегда одно слово. Два
 *   таких задания: урок 4 и урок 6.
 *
 *   ССЫЛКА ЗДЕСЬ БЫЛА НЕ ТА, и это нашёл методист. Первая редакция сослалась на
 *   графу A1 той же страницы, а она вся про устный исходник: «in oral texts»,
 *   «provided the articulation is very slow and clear». У нас исходник
 *   письменный — записка по-русски, — и шкала эту колонку держит отдельно.
 *   Верная графа оказалась не ниже ступени, а ровно на ней, и она прямо
 *   называет объявления.
 *
 * — «ВОССТАНОВИ УСЛЫШАННОЕ»: задание на сборку вместе с полем `zvuk`. Ученик
 *   слушает фразу и собирает её из карточек-слов. Одно такое задание, урок 7.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ.
 *
 * — ОБОРОТА `WILL`. Он весь целиком — следующий модуль, и сравнивать с ним
 *   здесь нечего: ученик его ещё не видел.
 * — ЗАПИСИ `GO SKIING`, `GO FISHING`. Словник A2 Key даёт такое сочетание
 *   единственным входом — `go shopping`. Слова `skiing`, `cycling`, `fishing`,
 *   `skating`, `climbing` стоят в словнике с пометой (n), то есть названиями
 *   занятий, — и в модуле они работают только так: `the cycling club`, `skiing
 *   equipment`.
 * — ОБОРОТА `LET'S`. Программа его не называет вовсе, но звать вместе она
 *   поручает модулю 12 («Давай я»: `shall I`, `shall we`), и место такому
 *   обороту там. Здесь его нет, поэтому разговор в уроке 7 договаривается о
 *   встрече без него.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать девять карточек. Проверка новизны засчитывает
 * новыми тридцать пять; `climbing` и `details` она относит к прошлой ступени по
 * основам `climb` и `detail`, хотя словник A2 Key даёт их отдельными входами, а
 * `tonight` и `join` Oxford 3000 и правда помечает A1 — они взяты не ради
 * новизны, а потому что курс не давал их ни разу нигде. Норма ступени —
 * тридцать карточек и пятнадцать новых — выдержана с запасом в обе стороны.
 *
 *    Oxford 3000 помечает A2: basketball, skiing, equipment, fishing, coach,
 *    adventure, instead, finally, notice, degree, chat, print, copy, nearly,
 *    closed.
 *
 *    Oxford 3000 помечает B1, а словник A2 Key содержит: court, exhibition,
 *    entrance, staff, countryside, till, appointment, daily.
 *
 *    Oxford 3000 не содержит вовсе, а словник A2 Key требует: chess,
 *    volleyball, badminton, cycling, climbing, skating, spare, disco, midday,
 *    foggy, details, weekly, monthly, calendar.
 *
 *    Oxford 3000 помечает A1, и потому новыми они не считаются: tonight, join.
 *
 *    ТРИ ПОМЕТЫ ИСПРАВЛЕНЫ ПО РАЗБОРУ МЕТОДИСТА. `skating` Oxford 3000 не
 *    содержит вовсе (проверено поиском и по oxford-5000), и место ему в третьей
 *    группе, а не в первой. `daily` Oxford помечает по частям речи —
 *    «adj. A2, adv. B1», — а модуль берёт наречие («The club is open daily»),
 *    значит опора у него словник A2 Key. `copy` словник A2 Key даёт только
 *    глаголом, а карточка вводит существительное: ступень ему подтверждает
 *    Oxford 3000 («copy n., v. A2»), и опора здесь на него.
 *
 *    КАЖДАЯ КАРТОЧКА РАБОТАЕТ В МОДУЛЕ и стоит в том уроке, где слово впервые
 *    встречается. Проверено счётом, а не на глаз: первая редакция дала четыре
 *    карточки — `hurry`, `disco`, `monthly`, `nearly`, — не встречавшиеся нигде,
 *    кроме себя. Три из них вплетены в уроки, `hurry` убран: его обиходные
 *    сочетания (`be in a hurry`, `hurry up`) модуль не даёт, и держать слово
 *    ради счёта незачем.
 *
 *    СЛОВА-ПОДПОРКИ: play, watch, buy, call, come, help, meet, open, close,
 *    start, bring, visit, look, get, work, free, new, real, long, cold, day,
 *    week, weekend, evening, hour, there, Saturday, Sunday, Monday, Tuesday,
 *    Thursday, Friday, winter, spring, January, time, ten, nine, six, club,
 *    station, park, ticket, meeting, sister, brother, parents, match — все A1
 *    по Oxford 3000. Плюс слово прошлого модуля этой же ступени: trip.
 *
 * ВОЗВРАЩЕНИЕ. Два задания из пройденного. В уроке 1 — выбор формы по числу из
 * модуля 1, урок 2: «Твои родители вчера были на рынке. Где нет ошибки?» с
 * разбором `My parents was` против `My parents were`. Это прямая параллель к
 * тому, чему учит здесь урок 2: там форма выбиралась по числу людей в прошедшем
 * времени, здесь — в настоящем. В уроке 3 — сборка вопроса из модуля 5, урок 1.
 * Берутся ссылкой (`vozvrat`), устройство — docs/format-uroka.md.
 */
const module: Module = {
  slug: "ya-sobirayus",
  title: "Я собираюсь",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, FUTURE future with be going to, «FORM: AFFIRMATIVE»: «Can use the " +
        "affirmative form», пример источника — «[about some new jeans] I'm going to " +
        "wear them on holiday» — уроки 1 и 2. " +
        "A2, FUTURE future with be going to, «FORM: QUESTIONS»: «Can use the " +
        "question form», пример источника — «What are you going to wear?» — уроки 3 " +
        "и 4. " +
        "A2, FUTURE future with be going to, «USE: INTENTIONS»: «Can use the " +
        "affirmative and question forms of 'be going to' talk about plans and " +
        "intentions», примеры — «I'm going to use pink paint», «My mum is going to " +
        "take us by car», «What time are you going to come? And what are you going " +
        "to bring?». " +
        "A2, FUTURE future with be going to, «USE: PREDICTIONS WITH 'BE'»: «Can use " +
        "'be going to' with 'be' to make predictions», пример — «I think this " +
        "Saturday is going to be a nice day» — урок 5. " +
        "ЭТА ГРАФА ВАЖНА ОТДЕЛЬНО: предсказание с ДРУГИМИ глаголами источник " +
        "ставит на B1 («USE: PREDICTIONS»: «Can use 'be going to' with an " +
        "increasing range of verbs to make predictions», пример «I think you're " +
        "going to like it»). Поэтому урок 5 говорит только о том, каким что-то " +
        "будет, а записи вроде It is going to rain в модуле нет — и запрета на неё " +
        "тоже нет нигде. Выше ступени стоит не сама такая запись, а её " +
        "употребление ради предсказания: графа A2 «FORM: AFFIRMATIVE» держит " +
        "пример «It is going to start at half past four» — it и обычный глагол. " +
        "ЧЕГО НЕТ. B1, FUTURE future with be going to, «FORM: NEGATIVE»: «Can use " +
        "the negative form», пример «I am not going to go to school tomorrow» — " +
        "отрицания оборота going to в модуле нет ни разу. " +
        "КОРОТКИЙ ОТВЕТ No, I'm not опирается не на English Grammar Profile, а на " +
        "описания Совета Европы (см. ниже, с. 79). Ссылка на A1 NEGATION, «FORM: " +
        "MAIN VERB 'BE'» снята по разбору методиста: пример той графы — «My " +
        "college is not very big», где be и есть смысловой глагол, а в коротком " +
        "ответе на вопрос о намерении форма am вспомогательная при обороте going " +
        "to. Соседняя графа A2 («FORM: AUXILIARY VERBS 'BE', 'HAVE', PRESENT») " +
        "оговорена как «in the present continuous and present perfect» и тоже не " +
        "подходит. По ступени короткий ответ проходит в любом случае: обе " +
        "кандидатные графы стоят не выше A2",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОКИ 3, 4 И 7. с. 79, шкала Information exchange, A2: «Can ask and answer " +
        "questions about plans and intentions» — источник называет обе стороны, и " +
        "потому короткий ответ стоит в уроке рядом с вопросом. " +
        "УРОК 6, ЧТЕНИЕ. с. 56, шкала Reading for orientation, A2: «Can find " +
        "specific, predictable information in simple everyday material such as " +
        "advertisements, prospectuses, menus, reference lists and timetables»; там " +
        "же: «Can understand everyday signs and notices, etc. in public places, " +
        "such as streets, restaurants, railway stations». " +
        "УРОК 8, ПИСЬМО. с. 66, шкала Overall written production, A2: «Can produce " +
        "a series of simple phrases and sentences linked with simple connectors " +
        "like \"and\", \"but\" and \"because\"» — отсюда размер объявления. " +
        "ЗАДАНИЕ «ПЕРЕДАЙ ПО-АНГЛИЙСКИ» (уроки 4 и 6). с. 95, шкала Relaying " +
        "specific information, ПИСЬМЕННАЯ колонка, A2: «Can relay (in Language B) " +
        "specific, relevant information contained in short, simple texts, labels " +
        "and notices (in Language A) on familiar subjects»; там же, A2: «Can list " +
        "(in Language B) specific information contained in simple texts (in " +
        "Language A) on everyday subjects of immediate interest or need». Источник " +
        "разрешает перечислить сведение, а не пересказать, поэтому ответ там всегда " +
        "одно слово. ГРАФА ИСПРАВЛЕНА ПО РАЗБОРУ МЕТОДИСТА: первая редакция " +
        "сослалась на A1 той же страницы, а вся графа A1 про устный исходник («in " +
        "oral texts», «provided the articulation is very slow and clear»), тогда " +
        "как у нас исходник письменный. Шкала держит устную и письменную колонки " +
        "порознь, и верная графа оказалась ровно на нашей ступени. " +
        "УРОК 7, СЛУШАНИЕ. с. 48, Overall oral comprehension, A2: «Can understand " +
        "phrases and expressions related to areas of most immediate priority… " +
        "provided people articulate clearly and slowly» — отсюда pace: \"slow\", и " +
        "отсюда же задание z3 «восстанови услышанное»: понимание записи оно " +
        "проверяет так же, как вопрос с ответом одним словом. " +
        "Номера страниц взяты разборщиком PDF (npm run pdf --find)",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы НА ВОПРОСЫ к записи здесь односложные. Задание z3 " +
        "«восстанови услышанное» под эту графу не подходит и на неё не опирается: " +
        "там ученик ничего не пишет, а собирает услышанное из готовых карточек, и " +
        "опора у него — описания Совета Европы, с. 48. " +
        "ОГОВОРКА, ПРИПИСАННАЯ ПО РАЗБОРУ МЕТОДИСТА: та же графа руководства " +
        "говорит «They listen to a monologue», а запись урока 7 — разговор двоих. " +
        "Формы ответа это не меняет, но при следующей сверке расхождение видно " +
        "сразу, и потому оно записано здесь",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова модуля с пометой A2: basketball, skiing, equipment, fishing, " +
        "coach, adventure, instead, finally, notice, degree, chat, print, copy, " +
        "nearly, closed. " +
        "Помету B1 Oxford 3000 ставит восьми словам — court, exhibition, entrance, " +
        "staff, countryside, till, appointment, daily, — а словник A2 Key их " +
        "содержит: по правилу ступени они в запасе и потому взяты. " +
        "Слов chess, volleyball, badminton, cycling, climbing, skating, spare, " +
        "disco, midday, foggy, details, weekly, monthly, calendar Oxford 3000 не " +
        "содержит вовсе, а словник A2 Key требует. " +
        "ТРИ ПОМЕТЫ ИСПРАВЛЕНЫ ПО РАЗБОРУ МЕТОДИСТА. skating Oxford 3000 не " +
        "содержит вовсе — первая редакция числила его в группе A2 по соседству со " +
        "skiing. daily Oxford помечает по частям речи, «adj. A2, adv. B1», а модуль " +
        "берёт наречие, и потому опора у него словник A2 Key. copy словник A2 Key " +
        "даёт только глаголом («copy (v)»), а карточка вводит существительное: " +
        "ступень ему подтверждает Oxford 3000 — «copy n., v. A2». " +
        "Слова tonight и join Oxford 3000 помечает A1, и новыми они не считаются. " +
        "Взяты потому, что курс не давал их карточкой ни разу нигде, а модулю они " +
        "нужны: без tonight не сказать о вечере, без join не сказать о вступлении в " +
        "клуб. " +
        "Подпорки: play, watch, buy, call, come, help, meet, open, close, start, " +
        "bring, visit, look, get, work, free, new, real, long, cold, day, week, " +
        "weekend, evening, hour, there, club, station, park, ticket, meeting, " +
        "sister, brother, parents, match — все A1",
      license: "внутреннее использование",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "словник ступени, по которому проверена новизна: 1637 слов. Из тридцати " +
        "девяти карточек модуля словник содержит тридцать восемь; единственное " +
        "исключение — copy в значении «экземпляр»: словник даёт copy только " +
        "глаголом, и ступень этому слову подтверждает Oxford 3000. " +
        "ОТТУДА ЖЕ ЗАПРЕТ НА GO SKIING: сочетания go со словом на -ing словник даёт " +
        "единственным входом — go shopping («Let's go shopping tomorrow»). Слова " +
        "skiing, cycling, fishing, skating и climbing стоят там с пометой (n), и в " +
        "модуле они работают только названиями занятий",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "записи приведены к условностям курса (r вместо ɹ, g вместо ɡ, e вместо ɛ, " +
        "ə вместо ɐ): chess /tʃes/, basketball /ˈbɑːskɪtbɔːl/, volleyball " +
        "/ˈvɒlibɔːl/, badminton /ˈbædmɪntən/, court /kɔːt/, coach /kəʊtʃ/, skiing " +
        "/ˈskiːɪŋ/, skating /ˈskeɪtɪŋ/, climbing /ˈklaɪmɪŋ/, cycling /ˈsaɪklɪŋ/, " +
        "fishing /ˈfɪʃɪŋ/, equipment /ɪˈkwɪpmənt/, spare /speə/, join /dʒɔɪn/, " +
        "closed /kləʊzd/, tonight /təˈnaɪt/, " +
        "instead /ɪnˈsted/, exhibition /eksɪˈbɪʃən/, disco /ˈdɪskəʊ/, midday " +
        "/ˌmɪdˈdeɪ/, till /tɪl/, countryside /ˈkʌntrisaɪd/, adventure /ədˈventʃə/, " +
        "finally /ˈfaɪnəli/, foggy /ˈfɒgi/, degree /dɪˈgriː/, notice /ˈnəʊtɪs/, " +
        "staff /stɑːf/, details /ˈdiːteɪlz/, weekly /ˈwiːkli/, monthly /ˈmʌnθli/, " +
        "calendar /ˈkæləndə/, appointment /əˈpɔɪntmənt/, daily /ˈdeɪli/, chat " +
        "/tʃæt/, print /prɪnt/, copy /ˈkɒpi/, nearly /ˈnɪəli/. " +
        "Слова entrance словарь не содержит; запись /ˈentrəns/ взята из " +
        "materials/wikipron-en-uk.tsv (ɛntɹəns) и приведена к тем же условностям",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "говорить о намерении: I am going to play chess",
    "записывать намерение кратко и выбирать форму, когда вместо местоимения стоит имя или вещь",
    "спрашивать о намерении и коротко отвечать",
    "спрашивать подробности: What are you going to do?",
    "говорить, каким что-то будет: It is going to be foggy",
    "находить нужное сведение в трёх объявлениях",
    "слышать в разговоре, кто что собирается делать",
    "проверять объявление: форму перед going to и словарную форму после него",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "sobirayus-sdelat",
      title: "Я собираюсь: I am going to play",
      estimatedMinutes: 15,
      outcome: "говорить о намерении: I am going to play chess",
      vozvrat: [{ iz: "eto-bylo", zadanie: "z2-vybrat-formu" }],

      blocks: [
        {
          id: "zachem-govorit-o-namerenii",
          kind: "explain",
          text: [
            "В субботу у Данияра шахматы, и он говорит об этом заранее.",
            "По-английски это I am going to play chess.",
            "Так говорят о намерении — о том, что человек решил сделать.",
            "После I стоит форма am, дальше идут слова going to и сам глагол.",
          ],
        },
        {
          id: "formy-po-licam",
          kind: "table",
          caption: "Кто собирается: формы по лицам",
          zvuchat: [
            "I am going to play chess.",
            "You are going to play chess.",
            "He is going to play chess.",
            "She is going to play chess.",
            "We are going to play chess.",
            "They are going to play chess.",
          ],
          head: ["Кто", "Запись"],
          rows: [
            ["I", "I am going to play chess."],
            ["you", "You are going to play chess."],
            ["he", "He is going to play chess."],
            ["she", "She is going to play chess."],
            ["we", "We are going to play chess."],
            ["they", "They are going to play chess."],
          ],
        },
        {
          id: "pochemu-tri-formy",
          kind: "explain",
          text: [
            "Меняется в записи одно слово: am, are или is.",
            "Это формы настоящего времени, и каждому лицу полагается своя: I am, you are, he is, she is, we are, they are.",
            "Слова going to и сам глагол при этом остаются прежними.",
          ],
        },
        {
          id: "posle-going-to-slovarnaya-forma",
          kind: "note",
          tone: "info",
          text:
            "После going to глагол стоит в словарной форме — той, что записана в " +
            "словаре: play, watch, buy.\n\nОкончаний он не берёт: ни plays, ни played.",
        },
        {
          id: "subbota-daniyara",
          kind: "example",
          caption: "Суббота Данияра",
          zvuchat: [
            "On Saturday I am going to play basketball.",
            "We are going to be at the court at ten.",
            "After that I am going to watch a volleyball match.",
            "On Monday I am going to join the chess club.",
          ],
          text:
            "On Saturday I am going to play basketball.\nWe are going to be at the court at ten.\nAfter that I am going to watch a volleyball match.\nOn Monday I am going to join the chess club.",
          explain:
            "Четыре строки, и в каждой перед going to стоит форма настоящего времени. " +
            "Там, где говорящий один, стоит am; во второй строке речь о двоих, и " +
            "потому are.",
        },
        {
          id: "slovar-igr",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "chess", translation: "шахматы", example: "I am going to play chess.", hint: "/tʃes/" },
            { term: "basketball", translation: "баскетбол", example: "On Saturday I am going to play basketball.", hint: "/ˈbɑːskɪtbɔːl/" },
            { term: "volleyball", translation: "волейбол", example: "After that I am going to watch a volleyball match.", hint: "/ˈvɒlibɔːl/" },
            { term: "court", translation: "площадка, корт", example: "We are going to be at the court at ten.", hint: "/kɔːt/" },
            { term: "coach", translation: "тренер", example: "I am going to call my coach.", hint: "/kəʊtʃ/" },
            { term: "join", translation: "вступить, присоединиться", example: "I am going to join the chess club.", hint: "/dʒɔɪn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-am",
          kind: "gap",
          prompt: "Данияр говорит о своём намерении. Допиши недостающее слово.",
          before: "I ",
          after: " going to play chess.",
          answer: "am",
          hint: "Лицу I полагается своя форма настоящего времени.",
          why: "I am going to play chess. Лицу I полагается форма am.",
        },
        {
          id: "z2-vybrat-formu-dlya-dvoih",
          kind: "choice",
          prompt: "Двое собираются быть на площадке к десяти. Какая запись верна?",
          options: [
            { text: "We going to be at the court at ten." },
            { text: "We are going to be at the court at ten.", correct: true },
            { text: "We is going to be at the court at ten." },
          ],
          hint: "Лицу we полагается та же форма, что и they.",
          why:
            "We are going to be at the court at ten. Лицу we полагается форма are, и " +
            "пропускать её нельзя.",
        },
        {
          id: "z3-otmetit-vernye-formy",
          kind: "hottext",
          prompt: "Отметь записи, где форма перед going to выбрана верно.",
          parts: [
            { text: "She is going to play volleyball", selectable: true, correct: true },
            { text: " · " },
            { text: "They is going to play chess", selectable: true },
            { text: " · " },
            { text: "We are going to watch the match", selectable: true, correct: true },
            { text: " · " },
            { text: "He are going to call the coach", selectable: true },
          ],
          hint: "Одному человеку полагается is, двоим и больше — are.",
          why:
            "Верны She is going to play volleyball и We are going to watch the match. " +
            "Лицу they полагается are, лицу he — is.",
        },
        {
          id: "z4-sobrat-o-voleybole",
          kind: "order",
          prompt: "Собери строку: они собираются играть в волейбол.",
          items: ["volleyball.", "play", "going to", "are", "They"],
          answer: [4, 3, 2, 1, 0],
          hint: "Сначала кто, потом форма настоящего времени, дальше going to и глагол.",
          why:
            "They are going to play volleyball. Форма are стоит сразу после they, а " +
            "глагол — после going to.",
        },
        {
          id: "z5-napisat-o-subbote",
          kind: "short",
          prompt:
            "Скажи о себе по-английски: в субботу собираешься играть в шахматы. Начни с On Saturday I.",
          answer: "On Saturday I am going to play chess.",
          accept: [
            "On Saturday I am going to play chess",
            "On Saturday I'm going to play chess.",
            "On Saturday I'm going to play chess",
          ],
          hint: "После I ставь форму am, дальше going to и словарную форму глагола.",
          why:
            "On Saturday I am going to play chess. Форма am полагается лицу I, а " +
            "глагол после going to стоит в словарной форме.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kratko-i-s-imenem",
      title: "Кратко и с именем: I'm going to",
      estimatedMinutes: 15,
      outcome: "записывать намерение кратко и выбирать форму, когда вместо местоимения стоит имя или вещь",

      blocks: [
        {
          id: "zachem-kratkaya-zapis",
          kind: "explain",
          text: [
            "В разговоре и в письме друзьям запись сокращают.",
            "Вместо I am говорят I'm, вместо he is — he's.",
            "Смысл остаётся тот же, короче становится только запись.",
          ],
        },
        {
          id: "polnaya-i-kratkaya",
          kind: "table",
          caption: "Полная запись и краткая",
          zvuchat: [
            "I am going to come",
            "I'm going to come",
            "you are going to come",
            "you're going to come",
            "he is going to come",
            "he's going to come",
            "she is going to come",
            "she's going to come",
            "we are going to come",
            "we're going to come",
            "they are going to come",
            "they're going to come",
          ],
          head: ["Полностью", "Кратко"],
          rows: [
            ["I am going to come", "I'm going to come"],
            ["you are going to come", "you're going to come"],
            ["he is going to come", "he's going to come"],
            ["she is going to come", "she's going to come"],
            ["we are going to come", "we're going to come"],
            ["they are going to come", "they're going to come"],
          ],
        },
        {
          id: "chto-menyaetsya-v-kratkoy",
          kind: "explain",
          text: [
            "Форма прирастает к тому, кто стоит перед ней, а на месте убранных букв ставится апостроф — значок '.",
            "От am остаётся m, от is — s, от are — re.",
            "Больше в строке не меняется ничего.",
          ],
        },
        {
          id: "imya-vmesto-mestoimeniya",
          kind: "table",
          caption: "Вместо местоимения — имя или вещь",
          zvuchat: [
            "Dana is going to come.",
            "My sister is going to come.",
            "Dana and Alim are going to come.",
            "My parents are going to come.",
            "The court is going to be free at ten.",
            "The courts are going to be free at ten.",
          ],
          head: ["Кто или что", "Запись"],
          rows: [
            ["Dana", "Dana is going to come."],
            ["my sister", "My sister is going to come."],
            ["Dana and Alim", "Dana and Alim are going to come."],
            ["my parents", "My parents are going to come."],
            ["the court", "The court is going to be free at ten."],
            ["the courts", "The courts are going to be free at ten."],
          ],
        },
        {
          id: "kak-vybrat-formu-pri-imeni",
          kind: "explain",
          text: [
            "На месте местоимения часто стоит имя человека или слово, которое его называет: Dana, my sister, my parents.",
            "Один человек берёт is, как he и she.",
            "Двое и больше берут are, как they.",
            "Поэтому смотреть надо на число, а не на длину записи.",
          ],
        },
        {
          id: "ne-tolko-o-lyudyah",
          kind: "explain",
          text: [
            "Две последние строки таблицы говорят о вещи, и считают её так же.",
            "Одна вещь берёт is, несколько — are.",
            "Про клуб, площадку и выставку говорят is, про билеты и подробности — are.",
          ],
        },
        {
          id: "propushchena-forma",
          kind: "note",
          tone: "mistake",
          text:
            "«My sister going to come» — так сказать нельзя: пропущена форма " +
            "is.\n\nВ записи о намерении форма am, is или are стоит всегда.",
        },
        {
          id: "plany-na-zimu",
          kind: "example",
          caption: "О зиме",
          zvuchat: [
            "My sister is going to buy skiing equipment.",
            "I'm going to be at the skating club on Friday.",
            "We're going to have a lot of spare time in January.",
          ],
          text:
            "My sister is going to buy skiing equipment.\nI'm going to be at the skating club on Friday.\nWe're going to have a lot of spare time in January.",
          explain:
            "Три строки. В первой стоит имя одного человека, и потому форма is; во " +
            "второй и третьей запись краткая, и форма приросла к местоимению.",
        },
        {
          id: "slovar-zimnih-zanyatiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "skiing", translation: "катание на лыжах", example: "My sister is going to buy skiing equipment.", hint: "/ˈskiːɪŋ/" },
            { term: "skating", translation: "катание на коньках", example: "I'm going to be at the skating club on Friday.", hint: "/ˈskeɪtɪŋ/" },
            { term: "climbing", translation: "лазание по скалам", example: "The climbing club is going to meet in spring.", hint: "/ˈklaɪmɪŋ/" },
            { term: "equipment", translation: "снаряжение", example: "My sister is going to buy skiing equipment.", hint: "/ɪˈkwɪpmənt/" },
            { term: "spare", translation: "свободный", example: "We're going to have a lot of spare time in January.", hint: "/speə/" },
          ],
        },
        {
          id: "ing-vroslo-v-slovo",
          kind: "note",
          tone: "info",
          text:
            "Слова skiing, skating и climbing называют занятие целиком: катание на " +
            "лыжах, катание на коньках, лазание по скалам.\n\nВ строке они стоят там " +
            "же, где стояло бы название вещи: the skating club, skiing equipment.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-is-pri-imeni",
          kind: "gap",
          prompt: "Сестра собирается прийти. Допиши недостающее слово.",
          before: "My sister ",
          after: " going to come.",
          answer: "is",
          hint: "Один человек берёт ту же форму, что he и she.",
          why: "My sister is going to come. Речь об одном человеке, и потому форма is.",
        },
        {
          id: "z2-vybrat-kratkuyu-zapis",
          kind: "choice",
          prompt: "Как записать кратко «They are going to buy the equipment»?",
          options: [
            { text: "They're going to buy the equipment.", correct: true },
            { text: "Theyre going to buy the equipment." },
            { text: "They is going to buy the equipment." },
          ],
          hint: "От are остаётся re, а на месте убранных букв ставится апостроф.",
          why:
            "They're going to buy the equipment. От формы are остаётся re, и апостроф " +
            "занимает место убранных букв.",
        },
        {
          id: "z3-otmetit-vernyy-vybor-formy",
          kind: "hottext",
          prompt:
            "Здесь на месте местоимения стоят имена и вещи. Отметь записи, где форма выбрана верно.",
          parts: [
            { text: "Dana is going to be at the skating club", selectable: true, correct: true },
            { text: " · " },
            { text: "My parents is going to be at home", selectable: true },
            { text: " · " },
            { text: "The tickets are going to be free", selectable: true, correct: true },
            { text: " · " },
            { text: "My sister are going to come", selectable: true },
          ],
          hint: "Считай: один человек или одна вещь берёт is, двое и больше — are.",
          why:
            "Верны Dana is going to be at the skating club и The tickets are going to " +
            "be free. Слово parents называет двоих, а sister — одного.",
        },
        {
          id: "z4-ispravit-propusk",
          kind: "short",
          prompt: "Форма выбрана не та. Исправь и запиши целиком: «My brother are going to buy skiing equipment.»",
          answer: "My brother is going to buy skiing equipment.",
          accept: ["My brother is going to buy skiing equipment"],
          hint: "Посчитай, о скольких людях речь.",
          why:
            "My brother is going to buy skiing equipment. Брат один, а форма are " +
            "полагается двоим и больше.",
        },
        {
          id: "z5-sobrat-kratkuyu-stroku",
          kind: "order",
          prompt: "Собери строку краткой записью: мы собираемся купить снаряжение в пятницу.",
          items: ["on Friday.", "buy the equipment", "going to", "We're"],
          answer: [3, 2, 1, 0],
          hint: "Краткая запись начинается с We're, дальше идёт going to.",
          why:
            "We're going to buy the equipment on Friday. Форма are приросла к we, а " +
            "глагол стоит после going to.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-o-namerenii",
      title: "Спросить: Are you going to play?",
      estimatedMinutes: 15,
      outcome: "спрашивать о намерении и коротко отвечать",
      vozvrat: [{ iz: "sprosit-o-proshlom", zadanie: "z4-sobrat-vopros-o-chemodane" }],

      blocks: [
        {
          id: "zachem-sprosit-o-namerenii",
          kind: "explain",
          text: [
            "Алим хочет позвать Дану на бадминтон и сначала спрашивает про её субботу.",
            "По-английски вопрос начинается с формы: Are you going to play badminton?",
            "Форма ушла в начало, а всё остальное осталось на прежних местах.",
          ],
        },
        {
          id: "utverzhdenie-i-vopros",
          kind: "table",
          caption: "Утверждение и вопрос",
          zvuchat: [
            "You are going to play badminton.",
            "Are you going to play badminton?",
            "He is going to watch the match.",
            "Is he going to watch the match?",
            "They are going to help us.",
            "Are they going to help us?",
          ],
          head: ["Утверждение", "Вопрос"],
          rows: [
            ["You are going to play badminton.", "Are you going to play badminton?"],
            ["He is going to watch the match.", "Is he going to watch the match?"],
            ["They are going to help us.", "Are they going to help us?"],
          ],
        },
        {
          id: "chto-menyaetsya-v-voprose",
          kind: "explain",
          text: [
            "Форма am, is или are уходит в начало строки.",
            "Тот, о ком речь, становится вторым словом.",
            "В конце строки вместо точки стоит вопросительный знак.",
          ],
        },
        {
          id: "korotkie-otvety",
          kind: "table",
          caption: "Короткие ответы",
          zvuchat: [
            "Are you going to play badminton?",
            "Yes, I am.",
            "No, I'm not.",
            "Is Dana going to come?",
            "Yes, she is.",
            "No, she isn't.",
            "Are they going to help?",
            "Yes, they are.",
            "No, they aren't.",
          ],
          head: ["Вопрос", "Да", "Нет"],
          rows: [
            ["Are you going to play badminton?", "Yes, I am.", "No, I'm not."],
            ["Is Dana going to come?", "Yes, she is.", "No, she isn't."],
            ["Are they going to help?", "Yes, they are.", "No, they aren't."],
          ],
        },
        {
          id: "pochemu-otvet-ne-nachalo-voprosa",
          kind: "explain",
          text: [
            "В вопросе форма стоит первой, а в ответе — второй: Are you…? — Yes, I am.",
            "Меняется и лицо: спрашивают про you, а отвечать надо про I.",
            "Поэтому короткий ответ собирают заново, а не переписывают начало вопроса.",
          ],
        },
        {
          id: "kak-szhimayut-otricanie",
          kind: "explain",
          text: [
            "В ответе «нет» после формы стоит слово not, и в разговоре два слова сжимают в одно.",
            "Is not становится isn't, are not — aren't: на месте убранной буквы встаёт апостроф.",
            "С формой am так не выходит: там сжимают не not, а саму форму — I am not становится I'm not.",
          ],
        },
        {
          id: "razgovor-o-subbote",
          kind: "example",
          caption: "Разговор о субботе",
          razgovor: true,
          zvuchat: [
            "Are you going to play badminton on Saturday?",
            "Yes, I am. Are you going to come?",
            "No, I'm not. I'm going to be at the fishing club instead.",
          ],
          text:
            "Are you going to play badminton on Saturday?\nYes, I am. Are you going to come?\nNo, I'm not. I'm going to be at the fishing club instead.",
          explain:
            "Три реплики. В первой и второй вопрос начинается с формы are, а короткие " +
            "ответы в двух последних строках повторяют её вторым словом.",
        },
        {
          id: "slovar-kluba",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "badminton", translation: "бадминтон", example: "Are you going to play badminton on Saturday?", hint: "/ˈbædmɪntən/" },
            { term: "cycling", translation: "езда на велосипеде", example: "Is the cycling club going to meet on Sunday?", hint: "/ˈsaɪklɪŋ/" },
            { term: "fishing", translation: "рыбалка", example: "I'm going to be at the fishing club instead.", hint: "/ˈfɪʃɪŋ/" },
            { term: "instead", translation: "вместо этого", example: "I'm going to be at the fishing club instead.", hint: "/ɪnˈsted/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-nachalo-voprosa",
          kind: "gap",
          prompt: "Спроси у собеседника про бадминтон. Допиши недостающее слово.",
          before: "",
          after: " you going to play badminton?",
          answer: "Are",
          hint: "Вопрос начинается с той формы, что полагается лицу you.",
          why:
            "Are you going to play badminton? Лицу you полагается форма are, и в " +
            "вопросе она стоит первой.",
        },
        {
          id: "z2-vybrat-korotkiy-otvet",
          kind: "choice",
          prompt: "У тебя спросили про Дану: «Is Dana going to come?» Она придёт. Какой ответ верен?",
          options: [
            { text: "Yes, is she." },
            { text: "Yes, she does." },
            { text: "Yes, she is.", correct: true },
          ],
          hint: "В ответе форма стоит второй, а не первой.",
          why:
            "Yes, she is. Форма из вопроса возвращается на второе место, и вместо " +
            "имени встаёт she.",
        },
        {
          id: "z3-otmetit-verno-postroennye-voprosy",
          kind: "hottext",
          prompt: "Отметь верно построенные вопросы.",
          parts: [
            { text: "Are you going to come?", selectable: true, correct: true },
            { text: " · " },
            { text: "Do you going to come?", selectable: true },
            { text: " · " },
            { text: "Is the cycling club going to meet on Sunday?", selectable: true, correct: true },
            { text: " · " },
            { text: "Does the cycling club going to meet on Sunday?", selectable: true },
          ],
          hint: "В вопросе о намерении первым стоит форма am, is или are.",
          why:
            "Верны Are you going to come? и Is the cycling club going to meet on " +
            "Sunday? Вопрос о намерении начинают формой, а не словом do или does.",
        },
        {
          id: "z4-sopostavit-vopros-i-otvet",
          kind: "match",
          prompt: "Собери пары: вопрос и короткий ответ «да».",
          left: [
            "Are you going to play chess?",
            "Is Alim going to come?",
            "Are your parents going to help?",
          ],
          right: ["Yes, they are.", "Yes, I am.", "Yes, he is."],
          answer: [1, 2, 0],
          hint: "Смотри, о ком речь: об одном человеке, о двоих или о самом собеседнике.",
          why:
            "Вопрос про you требует I am, вопрос про Alim — he is, вопрос про parents " +
            "— they are.",
        },
        {
          id: "z5-napisat-otvet-net",
          kind: "short",
          prompt:
            "Тебя спросили: «Are you going to be at the fishing club?» Ответь коротко — нет.",
          answer: "No, I'm not.",
          accept: ["No, I'm not", "No, I am not.", "No, I am not"],
          hint: "После No ставится лицо I, а за ним форма с отрицанием.",
          why:
            "No, I'm not. Отвечают про I, и форма am стоит после лица, а не перед ним.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-sobirayeshsya-delat",
      title: "Подробности: What are you going to do?",
      estimatedMinutes: 15,
      outcome: "спрашивать подробности: What are you going to do?",

      blocks: [
        {
          id: "zachem-sprashivat-podrobnosti",
          kind: "explain",
          text: [
            "Айгуль зовёт Алима в воскресенье, но он уже занят, и она хочет знать чем.",
            "Ответ «да» или «нет» тут говорит мало.",
            "Чтобы узнать подробности, к вопросу спереди приставляют вопросительное слово.",
            "Так выходит What are you going to do on Sunday?",
          ],
        },
        {
          id: "voprositelnoe-slovo-vperedi",
          kind: "table",
          caption: "Вопросительное слово впереди",
          zvuchat: [
            "What are you going to do on Sunday?",
            "Where are you going to be at midday?",
            "When are you going to come?",
            "How are you going to get to the club?",
          ],
          head: ["Слово", "О чём спрашивает", "Вопрос"],
          rows: [
            ["What", "о деле", "What are you going to do on Sunday?"],
            ["Where", "о месте", "Where are you going to be at midday?"],
            ["When", "о времени", "When are you going to come?"],
            ["How", "о способе", "How are you going to get to the club?"],
          ],
        },
        {
          id: "poryadok-v-podrobnom-voprose",
          kind: "explain",
          text: [
            "Вопросительное слово занимает первое место, и форма отступает на второе.",
            "Дальше строка идёт так же, как в вопросе с ответом «да» или «нет».",
            "Отвечают на такой вопрос сведением, а не словами «да» и «нет».",
            "В последней строке таблицы get to значит «добраться до»: How are you going to get to the club? — «Как ты собираешься добраться до клуба?»",
          ],
        },
        {
          id: "razgovor-o-vystavke",
          kind: "example",
          caption: "Разговор о выставке",
          razgovor: true,
          zvuchat: [
            "What are you going to do on Sunday?",
            "I'm going to be at the exhibition.",
            "When are you going to come?",
            "The entrance is open till midday, so I'm going to come at ten. In the evening I'm going to be at the disco.",
          ],
          text:
            "What are you going to do on Sunday?\nI'm going to be at the exhibition.\nWhen are you going to come?\nThe entrance is open till midday, so I'm going to come at ten. In the evening I'm going to be at the disco.",
          explain:
            "Четыре реплики. Два вопроса начинаются с вопросительного слова, и оба " +
            "ответа дают сведение: место и время.",
        },
        {
          id: "slovar-vyhodnogo-dnya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "exhibition", translation: "выставка", example: "I'm going to be at the exhibition.", hint: "/eksɪˈbɪʃən/" },
            { term: "disco", translation: "дискотека", example: "The disco is going to start at nine.", hint: "/ˈdɪskəʊ/" },
            { term: "entrance", translation: "вход", example: "The entrance is open till midday.", hint: "/ˈentrəns/" },
            { term: "midday", translation: "полдень", example: "Where are you going to be at midday?", hint: "/ˌmɪdˈdeɪ/" },
            { term: "till", translation: "до", example: "The entrance is open till midday.", hint: "/tɪl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-where",
          kind: "gap",
          prompt: "Спроси о месте: где собеседник собирается быть в полдень. Допиши недостающее слово.",
          before: "",
          after: " are you going to be at midday?",
          answer: "Where",
          hint: "О месте спрашивает то же слово, что и в вопросе «где».",
          why: "Where are you going to be at midday? О месте спрашивает слово Where.",
        },
        {
          id: "z2-vybrat-vopros-o-vremeni",
          kind: "choice",
          prompt: "Какой вопрос спрашивает о времени?",
          options: [
            { text: "What are you going to do at the exhibition?" },
            { text: "When are you going to come?", correct: true },
            { text: "Where is the entrance?" },
          ],
          hint: "Смотри на первое слово: у каждого своя работа.",
          why:
            "When are you going to come? Слово When спрашивает о времени, What — о " +
            "деле, Where — о месте.",
        },
        {
          id: "z3-otmetit-poryadok-slov",
          kind: "hottext",
          prompt: "Отметь вопросы, где порядок слов верен.",
          parts: [
            { text: "What are you going to do on Sunday?", selectable: true, correct: true },
            { text: " · " },
            { text: "What you are going to do on Sunday?", selectable: true },
            { text: " · " },
            { text: "How are they going to get to the club?", selectable: true, correct: true },
            { text: " · " },
            { text: "Where do you going to be at midday?", selectable: true },
          ],
          hint: "После вопросительного слова сразу идёт форма, а лицо — за ней.",
          why:
            "Верны What are you going to do on Sunday? и How are they going to get " +
            "to the club? В двух других вопрос собран не так: в одном форма ушла за " +
            "лицо, в другом на её месте стоит do.",
        },
        {
          id: "z4-peredat-po-angliyski",
          kind: "short",
          prompt:
            "На доске висит записка по-русски: «Дискотека в клубе — в пятницу, вход до полуночи». Напиши по-английски одним словом день недели.",
          answer: "Friday",
          accept: ["on Friday"],
          hint: "Нужен день недели, и записать его надо английским словом.",
          why: "Friday. В записке назван день недели, и по-английски он пишется так.",
        },
        {
          id: "z5-napisat-vopros-o-dele",
          kind: "short",
          prompt: "Спроси по-английски, что собеседник собирается делать в воскресенье. Начни с What.",
          answer: "What are you going to do on Sunday?",
          accept: ["What are you going to do on Sunday"],
          hint: "После What ставь форму are, потом you и going to.",
          why:
            "What are you going to do on Sunday? Вопросительное слово идёт первым, " +
            "форма are — вторым.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kakim-eto-budet",
      title: "Каким это будет: It is going to be foggy",
      estimatedMinutes: 14,
      outcome: "говорить, каким что-то будет: It is going to be foggy",

      blocks: [
        {
          id: "zachem-govorit-kakim-budet",
          kind: "explain",
          text: [
            "Поездка за город назначена на воскресенье, и Дана заранее говорит о погоде.",
            "По-английски это It is going to be foggy.",
            "Так же говорят и о самой поездке: The trip is going to be long.",
            "После going to здесь стоит be, а за ним — то, каким что-то будет.",
          ],
        },
        {
          id: "kakim-eto-budet-tablica",
          kind: "table",
          caption: "Каким это будет",
          zvuchat: [
            "It is going to be foggy tomorrow.",
            "Tonight it is going to be twenty degrees.",
            "The trip is going to be long.",
            "The exhibition is going to be free.",
          ],
          head: ["Запись", "О чём речь"],
          rows: [
            ["It is going to be foggy tomorrow.", "о погоде"],
            ["Tonight it is going to be twenty degrees.", "о погоде"],
            ["The trip is going to be long.", "о поездке"],
            ["The exhibition is going to be free.", "о выставке"],
          ],
        },
        {
          id: "chto-stoit-posle-be",
          kind: "explain",
          text: [
            "Во всех четырёх записях после going to стоит одно и то же слово — be.",
            "Меняется только то, что идёт за ним: foggy, twenty degrees, long, free.",
            "Слово перед going to называет то, о чём речь: поездка, выставка, погода.",
          ],
        },
        {
          id: "pustoe-it-o-pogode",
          kind: "note",
          tone: "info",
          text:
            "В строке о погоде на первом месте стоит it: It is going to be " +
            "foggy.\n\nЭто слово ничего не называет и стоит там просто потому, что " +
            "первое место в английской строке пустым не бывает.",
        },
        {
          id: "poezdka-za-gorod",
          kind: "example",
          caption: "Поездка за город",
          zvuchat: [
            "On Sunday we're going to visit the countryside.",
            "The trip is going to be nearly four hours.",
            "It is going to be foggy, and it is going to be cold.",
            "Finally, it is going to be a real adventure.",
          ],
          text:
            "On Sunday we're going to visit the countryside.\nThe trip is going to be nearly four hours.\nIt is going to be foggy, and it is going to be cold.\nFinally, it is going to be a real adventure.",
          explain:
            "Четыре строки. В первой сказано о намерении, а в остальных — о том, " +
            "каким всё это будет: там после going to стоит be.",
        },
        {
          id: "slovar-poezdki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "countryside", translation: "сельская местность", example: "On Sunday we're going to visit the countryside.", hint: "/ˈkʌntrisaɪd/" },
            { term: "adventure", translation: "приключение", example: "It is going to be a real adventure.", hint: "/ədˈventʃə/" },
            { term: "finally", translation: "наконец", example: "Finally, it is going to be a real adventure.", hint: "/ˈfaɪnəli/" },
            { term: "foggy", translation: "туманный", example: "It is going to be foggy tomorrow.", hint: "/ˈfɒgi/" },
            { term: "degree", translation: "градус", example: "It is going to be twenty degrees.", hint: "/dɪˈgriː/" },
            { term: "nearly", translation: "почти", example: "The trip is going to be nearly four hours.", hint: "/ˈnɪəli/" },
            { term: "tonight", translation: "сегодня вечером", example: "Tonight it is going to be cold.", hint: "/təˈnaɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-be",
          kind: "gap",
          prompt: "Скажи о завтрашней погоде. Допиши недостающее слово.",
          before: "It is going to ",
          after: " foggy tomorrow.",
          answer: "be",
          hint: "Это то же слово, что стоит и в строке о поездке, и в строке о выставке.",
          why:
            "It is going to be foggy tomorrow. О том, каким что-то будет, говорят " +
            "словом be после going to.",
        },
        {
          id: "z2-vybrat-o-poezdke",
          kind: "choice",
          prompt: "В какой записи сказано, какой будет поездка?",
          options: [
            { text: "The trip is going to be long.", correct: true },
            { text: "We're going to visit the countryside." },
            { text: "The trip is long." },
          ],
          hint: "Ищи строку, где после going to стоит be.",
          why:
            "The trip is going to be long. Вторая строка говорит о намерении, третья " +
            "— о нынешнем положении дел.",
        },
        {
          id: "z3-otmetit-o-tom-kakim",
          kind: "hottext",
          prompt: "Отметь записи, где сказано, каким что-то будет.",
          parts: [
            { text: "Tonight it is going to be twenty degrees", selectable: true, correct: true },
            { text: " · " },
            { text: "We're going to visit the countryside", selectable: true },
            { text: " · " },
            { text: "The exhibition is going to be free", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm going to buy the tickets", selectable: true },
          ],
          hint: "После going to там стоит be, а за ним — какое что-то.",
          why:
            "Верны Tonight it is going to be twenty degrees и The exhibition is going " +
            "to be free. В двух других строках названо дело, а не свойство.",
        },
        {
          id: "z4-sobrat-o-pogode",
          kind: "order",
          prompt: "Собери строку: завтра будет туманно.",
          items: ["foggy tomorrow.", "be", "going to", "is", "It"],
          answer: [4, 3, 2, 1, 0],
          hint: "Строка о погоде начинается с it, а после going to стоит be.",
          why:
            "It is going to be foggy tomorrow. Первое место занимает it, и за going " +
            "to идёт be.",
        },
        {
          id: "z5-napisat-o-vystavke",
          kind: "short",
          prompt: "Скажи по-английски, что выставка будет бесплатной. Начни с The exhibition.",
          answer: "The exhibition is going to be free.",
          accept: ["The exhibition is going to be free"],
          hint: "Речь об одной вещи, и потому форма is, а после going to стоит be.",
          why:
            "The exhibition is going to be free. О том, какой будет выставка, говорят " +
            "словом be после going to.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-obyavleniya",
      title: "Читаем три объявления",
      estimatedMinutes: 14,
      outcome: "находить нужное сведение в трёх объявлениях",

      blocks: [
        {
          id: "zachem-chitat-obyavleniya",
          kind: "explain",
          text: [
            "Дана пришла в клуб и хочет узнать, работает ли площадка во вторник.",
            "Ради этого объявление не читают подряд, как письмо.",
            "В нём ищут одно нужное сведение: день, время или место.",
            "Ниже три объявления с доски в клубе, и вопросы будут именно такие.",
          ],
        },
        {
          id: "doska-obyavleniy",
          kind: "text",
          title: "Доска объявлений в клубе",
          genre: "notice",
          body: [
            "A. CHESS CLUB. We are going to start a new chess club on Monday. The first meeting is going to be at six. Ask the staff for details.",
            "B. VOLLEYBALL. The court is going to be closed on Tuesday. We are going to open it again on Wednesday. The weekly game is going to be on Thursday instead.",
            "C. EXHIBITION. Our exhibition is going to be open till midday on Saturday. The entrance is free, and our monthly meeting is going to be there at ten.",
          ],
          glossary: [
            { term: "meeting", translation: "встреча" },
            { term: "again", translation: "снова" },
          ],
        },
        {
          id: "kak-iskat-v-obyavlenii",
          kind: "note",
          tone: "info",
          text:
            "В каждом объявлении названы день и время — их и ищут глазами в первую " +
            "очередь.\n\nОстальные строки читают только тогда, когда нужного там не " +
            "нашлось.",
        },
        {
          id: "slovar-obyavleniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "notice", translation: "объявление", example: "There is a new notice in the club.", hint: "/ˈnəʊtɪs/" },
            { term: "staff", translation: "сотрудники", example: "Ask the staff for details.", hint: "/stɑːf/" },
            { term: "details", translation: "подробности", example: "Ask the staff for details.", hint: "/ˈdiːteɪlz/" },
            { term: "weekly", translation: "еженедельный", example: "The weekly game is going to be on Thursday.", hint: "/ˈwiːkli/" },
            { term: "monthly", translation: "ежемесячный", example: "Our monthly meeting is going to be there at ten.", hint: "/ˈmʌnθli/" },
            { term: "closed", translation: "закрыт", example: "The court is going to be closed on Tuesday.", hint: "/kləʊzd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-gde-o-zakrytoy-ploshchadke",
          kind: "choice",
          about: "doska-obyavleniy",
          prompt: "В каком объявлении сказано, что площадка будет закрыта?",
          options: [
            { text: "В объявлении A" },
            { text: "В объявлении B", correct: true },
            { text: "В объявлении C" },
          ],
          hint: "Ищи слово court: площадка названа только в одном объявлении.",
          why: "The court is going to be closed on Tuesday — это второе объявление.",
        },
        {
          id: "z2-kogda-pervaya-vstrecha",
          kind: "short",
          about: "doska-obyavleniy",
          prompt: "В какой день будет первая встреча шахматного клуба? Ответь одним английским словом.",
          answer: "Monday",
          accept: ["on Monday"],
          hint: "День назван в первой строке объявления A.",
          why: "We are going to start a new chess club on Monday.",
        },
        {
          id: "z3-do-kakogo-vremeni-vystavka",
          kind: "short",
          about: "doska-obyavleniy",
          prompt: "До какого времени открыта выставка в субботу? Ответь одним английским словом.",
          answer: "midday",
          accept: ["till midday", "to midday"],
          hint: "Время названо в объявлении C, сразу после слова till.",
          why: "Our exhibition is going to be open till midday on Saturday.",
        },
        {
          id: "z4-kuda-za-podrobnostyami",
          kind: "choice",
          about: "doska-obyavleniy",
          prompt: "К кому предлагают обратиться за подробностями о шахматном клубе?",
          options: [
            { text: "К сотрудникам клуба", correct: true },
            { text: "К тренеру по волейболу" },
            { text: "К посетителям выставки" },
          ],
          hint: "Об этом сказано последней строкой объявления A.",
          why: "Ask the staff for details — обратиться предлагают к сотрудникам.",
        },
        {
          id: "z5-kogda-ezhenedelnaya-igra",
          kind: "choice",
          about: "doska-obyavleniy",
          prompt: "В какой день пройдёт еженедельная игра?",
          options: [
            { text: "Во вторник" },
            { text: "В субботу" },
            { text: "В четверг", correct: true },
          ],
          hint: "В объявлении B названы три дня: для закрытия, для открытия и для игры.",
          why: "The weekly game is going to be on Thursday instead.",
        },
        {
          id: "z6-otmetit-namereniya-kluba",
          kind: "hottext",
          about: "doska-obyavleniy",
          prompt: "Отметь строки, где клуб говорит о деле, которое собирается сделать.",
          parts: [
            { text: "We are going to start a new chess club", selectable: true, correct: true },
            { text: " · " },
            { text: "The entrance is free", selectable: true },
            { text: " · " },
            { text: "We are going to open it again on Wednesday", selectable: true, correct: true },
            { text: " · " },
            { text: "Ask the staff for details", selectable: true },
          ],
          hint: "Ищи строки, где после going to стоит дело, а не be.",
          why:
            "О деле говорят We are going to start a new chess club и We are going to " +
            "open it again on Wednesday. Две другие строки сообщают о нынешнем " +
            "положении дел и просьбе.",
        },
        {
          id: "z7-peredat-den-po-angliyski",
          kind: "short",
          prompt:
            "Рядом висит записка по-русски: «Клуб снова открывается в среду, вход бесплатный». Напиши по-английски одним словом день недели.",
          answer: "Wednesday",
          accept: ["on Wednesday"],
          hint: "Нужен день недели, и записать его надо английским словом.",
          why: "Wednesday. В записке назван день недели, и по-английски он пишется так.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-o-planah",
      title: "Слушаем, кто что собирается делать",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, кто что собирается делать",

      blocks: [
        {
          id: "zachem-slushat-o-planah",
          kind: "explain",
          text: [
            "Алим и Айгуль ищут день, когда оба свободны, и перебирают выходные вслух.",
            "Намерения в таком разговоре называют быстро и подряд.",
            "Держаться помогает один и тот же оборот — going to.",
            "Ниже запись: двое договариваются о встрече.",
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
            "What are you going to do at the weekend? — I'm going to play badminton on " +
            "Saturday. — Are you going to be free on Sunday? — No, I'm not. I have an " +
            "appointment at midday. — Is the club open on Monday? — Yes, it is. The " +
            "club is open daily. — Then I'm going to come on Monday, and we are going " +
            "to have a long chat. — Good. I'm going to look at my calendar tonight.",
        },
        {
          id: "chto-slushat-o-planah",
          kind: "note",
          tone: "info",
          text:
            "Слушай, что человек собирается делать в субботу, чем занято воскресенье " +
            "и как часто открыт клуб.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-dogovorennosti",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "appointment", translation: "назначенная встреча", example: "I have an appointment at midday.", hint: "/əˈpɔɪntmənt/" },
            { term: "calendar", translation: "календарь", example: "I'm going to look at my calendar tonight.", hint: "/ˈkæləndə/" },
            { term: "daily", translation: "ежедневно", example: "The club is open daily.", hint: "/ˈdeɪli/" },
            { term: "chat", translation: "разговор", example: "We are going to have a long chat.", hint: "/tʃæt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-v-subbotu",
          kind: "choice",
          about: "zapis-o-vyhodnyh",
          prompt: "Что человек собирается делать в субботу?",
          options: [
            { text: "Играть в бадминтон", correct: true },
            { text: "Смотреть волейбол" },
            { text: "Быть на выставке" },
          ],
          hint: "Об этом сказано во второй реплике.",
          why: "I'm going to play badminton on Saturday.",
        },
        {
          id: "z2-vo-skolko-vstrecha",
          kind: "short",
          about: "zapis-o-vyhodnyh",
          prompt: "На какое время в воскресенье назначена встреча? Ответь одним английским словом.",
          answer: "midday",
          accept: ["at midday"],
          hint: "Время названо сразу после слов I have an appointment.",
          why: "I have an appointment at midday.",
        },
        {
          id: "z3-vosstanovit-uslyshannoe",
          kind: "order",
          zvuk: "I'm going to look at my calendar tonight.",
          prompt: "Послушай и собери фразу из услышанного.",
          items: ["tonight.", "at my calendar", "look", "going to", "I'm"],
          answer: [4, 3, 2, 1, 0],
          hint: "Начало фразы — краткая запись, дальше going to и глагол.",
          why:
            "I'm going to look at my calendar tonight. Форма am приросла к I, а " +
            "глагол стоит после going to.",
        },
        {
          id: "z4-kak-chasto-otkryt-klub",
          kind: "short",
          about: "zapis-o-vyhodnyh",
          prompt: "Как часто открыт клуб? Ответь одним английским словом.",
          answer: "daily",
          accept: ["open daily"],
          hint: "Ответ звучит сразу после слов The club is open.",
          why: "The club is open daily.",
        },
        {
          id: "z5-kogda-pridyot",
          kind: "choice",
          about: "zapis-o-vyhodnyh",
          prompt: "В какой день собеседник собирается прийти в клуб?",
          options: [
            { text: "В субботу" },
            { text: "В воскресенье" },
            { text: "В понедельник", correct: true },
          ],
          hint: "Об этом сказано в предпоследней реплике.",
          why: "Then I'm going to come on Monday, and we are going to have a long chat.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-obyavlenie",
      title: "Пишем объявление на доску клуба",
      estimatedMinutes: 15,
      outcome: "проверять объявление: форму перед going to и словарную форму после него",

      blocks: [
        {
          id: "zachem-proveryat-formu",
          kind: "explain",
          text: [
            "Дана написала объявление о поездке и просит посмотреть, нет ли ошибок.",
            "Ошибаются в таких строках чаще всего в одном месте — перед going to.",
            "Проверить его можно так: закрой пальцем going to и посмотри, что осталось слева.",
            "Там должна стоять форма am, is или are — либо сама, либо приросшая к местоимению.",
          ],
        },
        {
          id: "chto-stoit-pered-going-to",
          kind: "table",
          caption: "Что стоит перед going to",
          zvuchat: [
            "We are going to print the notice",
            "The club is going to be open",
            "I'm going to bring a copy",
          ],
          head: ["Запись", "Что перед going to", "Годится"],
          rows: [
            ["We are going to print the notice", "форма are", "да"],
            ["The club is going to be open", "форма is", "да"],
            ["I'm going to bring a copy", "форма am, приросшая к I", "да"],
            ["The staff going to help", "ничего нет", "нет"],
          ],
        },
        {
          id: "pochemu-proverka-rabotaet",
          kind: "explain",
          text: [
            "Проверка смотрит только влево, и остальная часть строки для неё не важна.",
            "Поэтому проверить объявление можно быстро, по одному месту в каждой строке.",
            "Вторым делом смотрят вправо: после going to глагол стоит в словарной форме.",
          ],
        },
        {
          id: "obrazets-obyavleniya",
          kind: "example",
          caption: "Образец объявления",
          zvuchat: [
            "TRIP TO THE COUNTRYSIDE",
            "Our club is going to visit the countryside on Sunday.",
            "We are going to be at the station at nine.",
            "I'm going to bring the tickets.",
          ],
          text:
            "TRIP TO THE COUNTRYSIDE\nOur club is going to visit the countryside on Sunday.\nWe are going to be at the station at nine.\nI'm going to bring the tickets.",
          explain:
            "Заголовок и три строки. Перед going to везде стоит форма — is, are и " +
            "приросшая к I, — а названы и день, и время.",
        },
        {
          id: "chto-proverit-v-obyavlenii",
          kind: "note",
          tone: "info",
          text:
            "Проверь четыре вещи.\n\nПеред going to стоит форма. После going to глагол " +
            "стоит в словарной форме. Названы день и время. Есть строка о том, что " +
            "собираешься сделать сам.\n\nЕсли строку пришлось переписать, проверь её " +
            "заново с начала.",
        },
        {
          id: "slovar-pechati",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "print", translation: "напечатать", example: "We are going to print the notice.", hint: "/prɪnt/" },
            { term: "copy", translation: "экземпляр", example: "I'm going to bring a copy.", hint: "/ˈkɒpi/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-nayti-propusk-formy",
          kind: "hottext",
          prompt: "Отметь строки, где перед going to формы нет.",
          parts: [
            { text: "The disco going to start at nine", selectable: true, correct: true },
            { text: " · " },
            { text: "The coach is going to be there at six", selectable: true },
            { text: " · " },
            { text: "Our club going to visit the countryside", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm going to bring a copy", selectable: true },
          ],
          hint: "Закрой пальцем going to и посмотри, что осталось слева.",
          why:
            "Формы нет в The disco going to start at nine и Our club going to visit " +
            "the countryside. В двух других строках стоят is и приросшая к I форма am.",
        },
        {
          id: "z2-ispravit-stroku-obyavleniya",
          kind: "short",
          prompt: "Исправь строку объявления и запиши целиком: «The club going to open at nine.»",
          answer: "The club is going to open at nine.",
          accept: ["The club is going to open at nine"],
          hint: "Речь об одной вещи, и потому нужна форма is.",
          why:
            "The club is going to open at nine. Перед going to была пропущена форма " +
            "is.",
        },
        {
          id: "z3-vybrat-slovarnuyu-formu",
          kind: "choice",
          prompt: "Какая строка объявления записана верно?",
          options: [
            { text: "We are going to printed the notice." },
            { text: "We are going to prints the notice." },
            { text: "We are going to print the notice.", correct: true },
          ],
          hint: "Смотри вправо от going to: там глагол стоит в словарной форме.",
          why:
            "We are going to print the notice. После going to глагол окончаний не " +
            "берёт: ни -ed, ни -s.",
        },
        {
          id: "z4-napisat-obyavlenie",
          kind: "essay",
          prompt:
            "Напиши объявление о своём клубе: заголовок и три строки. Назови день, время и то, что собираешься сделать сам.",
          minWords: 18,
          sample:
            "CHESS EVENING\nThe chess club is going to meet on Thursday.\nThe first game is going to start at six, and the entrance is free.\nI'm going to print the notice tonight.",
          checklist: [
            "перед going to стоит форма am, is или are",
            "после going to глагол стоит в словарной форме",
            "названы день и время",
            "есть строка о том, что собираешься сделать сам",
          ],
          hint: "Бери глаголы, которые знаешь: visit, be, bring, print, come.",
          why:
            "Проверь по четырём пунктам списка. Главное — чтобы перед going to стояла " +
            "форма am, is или are.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, развернуть сокращённую, перенести сказанное на другое лицо,
      // перестроить настоящее в намеченное, подобрать вопрос к готовому ответу,
      // назвать причину ошибки, ответить по записи.
      //
      // ШЕСТЬ ВОПРОСОВ ПЕРЕПИСАНЫ ПОСЛЕ РАЗБОРА МЕТОДИСТА. Первая редакция
      // писалась после заданий уроков и по их образцу: тот же вид, та же рамка,
      // заменено одно слово, а разборы разошлись на союз — и потому проверка
      // повторов молчала. Это самая устойчивая ошибка проекта, и здесь она
      // повторилась снова.

      // ---- итог 1 ----
      {
        id: "q-forma-ispravit",
        kind: "short",
        outcome: "говорить о намерении: I am going to play chess",
        prompt: "Форма перед going to выбрана неверно. Исправь и запиши целиком: «We is going to be at the court at ten.»",
        answer: "We are going to be at the court at ten.",
        accept: ["We are going to be at the court at ten"],
        why:
          "We are going to be at the court at ten. Лицу we полагается форма are, а " +
          "не is.",
      },
      {
        id: "q-forma-prichina",
        kind: "choice",
        outcome: "говорить о намерении: I am going to play chess",
        prompt: "Почему в записи «He is going to play chess» стоит именно is?",
        options: [
          { text: "Потому что речь об одном человеке — he", correct: true },
          { text: "Потому что игра одна" },
          { text: "Потому что после going to стоит play" },
        ],
        why:
          "Форму выбирают по лицу: he и she берут is, we и they — are, I — am. От " +
          "того, что стоит после going to, она не зависит.",
      },

      // ---- итог 2 ----
      {
        id: "q-razvernut-zapis",
        kind: "short",
        outcome: "записывать намерение кратко и выбирать форму, когда вместо местоимения стоит имя или вещь",
        prompt:
          "В строгом письме сокращений не ставят. Запиши без сокращения и целиком: «She's going to join the chess club.»",
        answer: "She is going to join the chess club.",
        accept: ["She is going to join the chess club"],
        why:
          "She is going to join the chess club. Буква s после апострофа — это форма " +
          "is, и в полной записи она возвращается целым словом.",
      },
      {
        id: "q-perenesti-na-sestru",
        kind: "short",
        outcome: "записывать намерение кратко и выбирать форму, когда вместо местоимения стоит имя или вещь",
        prompt:
          "Собеседник сказал: «I'm going to join the chess club.» Скажи то же о своей сестре и запиши целиком, начав с My sister.",
        answer: "My sister is going to join the chess club.",
        accept: ["My sister is going to join the chess club"],
        why:
          "My sister is going to join the chess club. Сестра одна, и потому вместо " +
          "формы am встаёт is.",
      },

      // ---- итог 3 ----
      {
        id: "q-korotkiy-otvet-da",
        kind: "short",
        outcome: "спрашивать о намерении и коротко отвечать",
        prompt:
          "Собеседник спросил: «Is the club going to be open on Monday?» Клуб откроется. Ответь коротко — да.",
        answer: "Yes, it is.",
        accept: ["Yes, it is"],
        why: "Yes, it is. Вместо названия клуба встаёт it, а форма is идёт за ним.",
      },
      {
        id: "q-zadat-vopros-ob-alime",
        kind: "short",
        outcome: "спрашивать о намерении и коротко отвечать",
        prompt:
          "Ты хочешь узнать, собирается ли Алим прийти. Задай вопрос по-английски, начав с Is.",
        answer: "Is Alim going to come?",
        accept: ["Is Alim going to come"],
        why:
          "Is Alim going to come? Речь об одном человеке, и потому вопрос начинается " +
          "с формы is.",
      },

      // ---- итог 4 ----
      {
        id: "q-vopros-k-gotovomu-otvetu",
        kind: "short",
        outcome: "спрашивать подробности: What are you going to do?",
        prompt:
          "Собеседник ответил: «I'm going to be at the disco.» Задай вопрос, на который это ответ, начав с Where.",
        answer: "Where are you going to be?",
        accept: ["Where are you going to be"],
        why:
          "Where are you going to be? Ответ называет место, значит спрашивали " +
          "словом Where.",
      },
      {
        id: "q-podobrat-vopros-k-otvetu",
        kind: "choice",
        outcome: "спрашивать подробности: What are you going to do?",
        prompt: "Собеседник ответил: «At ten.» На какой вопрос?",
        options: [
          { text: "What are you going to do?" },
          { text: "When are you going to come?", correct: true },
          { text: "Where are you going to be?" },
        ],
        why:
          "When are you going to come? Ответ называет время, а о времени спрашивает " +
          "слово When.",
      },

      // ---- итог 5 ----
      {
        id: "q-kakim-budet-napisat",
        kind: "short",
        outcome: "говорить, каким что-то будет: It is going to be foggy",
        prompt:
          "О нынешнем дне говорят «It is cold.» Скажи то же о завтрашнем и запиши целиком, добавив в конце tomorrow.",
        answer: "It is going to be cold tomorrow.",
        accept: ["It is going to be cold tomorrow"],
        why:
          "It is going to be cold tomorrow. О нынешнем дне довольно формы is, а о " +
          "завтрашнем между ней и словом cold встают going to и be.",
      },
      {
        id: "q-kakim-budet-otlichit",
        kind: "choice",
        outcome: "говорить, каким что-то будет: It is going to be foggy",
        prompt: "В какой записи сказано о свойстве, а не о деле?",
        options: [
          { text: "I'm going to visit the countryside." },
          { text: "We are going to bring the tickets." },
          { text: "The day is going to be cold.", correct: true },
        ],
        why:
          "The day is going to be cold. После going to там стоит be, а за ним — " +
          "какой будет день.",
      },

      // ---- итог 6 ----
      {
        id: "q-obyavlenie-den",
        kind: "short",
        outcome: "находить нужное сведение в трёх объявлениях",
        prompt:
          "В объявлении написано: «The court is going to be closed on Tuesday.» Запиши одним английским словом день, когда площадка закрыта.",
        answer: "Tuesday",
        accept: ["on Tuesday"],
        why: "The court is going to be closed on Tuesday.",
      },
      {
        id: "q-obyavlenie-k-komu",
        kind: "choice",
        outcome: "находить нужное сведение в трёх объявлениях",
        prompt: "В объявлении написано: «Ask the staff for details.» Что предлагают сделать?",
        options: [
          { text: "Оставить подробности сотрудникам" },
          { text: "Спросить подробности у сотрудников", correct: true },
          { text: "Записаться у сотрудников на встречу" },
        ],
        why: "Слово ask значит «спросить», а details — «подробности».",
      },

      // ---- итог 7 ----
      {
        id: "q-na-sluh-svoboden-li",
        kind: "choice",
        outcome: "слышать в разговоре, кто что собирается делать",
        zvuk: "Are you going to be free on Sunday? — No, I'm not.",
        prompt: "Послушай и ответь: будет ли человек свободен в воскресенье?",
        options: [
          { text: "Да" },
          { text: "Нет", correct: true },
          { text: "В записи об этом не сказано" },
        ],
        why: "Are you going to be free on Sunday? — No, I'm not.",
      },
      {
        id: "q-na-sluh-gde-budet",
        kind: "short",
        outcome: "слышать в разговоре, кто что собирается делать",
        zvuk: "What are you going to do at midday? — I'm going to be at the exhibition.",
        prompt: "Послушай и запиши одним английским словом, где человек собирается быть.",
        answer: "exhibition",
        accept: ["the exhibition", "at the exhibition"],
        why: "What are you going to do at midday? — I'm going to be at the exhibition.",
      },

      // ---- итог 8 ----
      {
        id: "q-obyavlenie-ispravit",
        kind: "short",
        outcome: "проверять объявление: форму перед going to и словарную форму после него",
        prompt:
          "В объявлении написали «The details is going to be on the notice.» Форма перед going to выбрана не та. Перепиши строку.",
        answer: "The details are going to be on the notice.",
        accept: ["The details are going to be on the notice"],
        why:
          "The details are going to be on the notice. Слово details называет " +
          "несколько вещей, а форма is полагается одной.",
      },
      {
        id: "q-obyavlenie-chto-ne-tak",
        kind: "choice",
        outcome: "проверять объявление: форму перед going to и словарную форму после него",
        prompt: "В объявлении написали «We are going to played volleyball on Friday». Что не так?",
        options: [
          { text: "Форма are выбрана неверно" },
          { text: "День недели написан не на своём месте" },
          { text: "После going to глагол должен стоять в словарной форме", correct: true },
        ],
        why:
          "We are going to play volleyball on Friday. После going to глагол " +
          "окончаний не берёт.",
      },
    ],
  },
};

export default module;
