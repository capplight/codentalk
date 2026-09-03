import type { Module } from "@/lib/content/types";

/**
 * Модуль 16 курса «Английский · Elementary»: очень и слишком.
 *
 * Программа: docs/programma-english-elementary.md, модуль 16 — «говорить о
 * мере: насколько и не слишком ли».
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «МЕРА», А ИМЯ СЛОВ — «НАРЕЧИЯ МЕРЫ».
 *
 * Мера — это насколько вещь такая: хорошая, довольно хорошая, очень хорошая.
 * Наречие меры — слово, которое эту меру называет: very, really, so, quite,
 * too. Слов «степень», «усиление», «интенсивность» в тексте для ученика нет ни
 * разу. Имя «наречие меры» настоящее, а не наш ярлык: источник зовёт эти слова
 * adverbs of degree, и следующий модуль возьмёт у того же класса наречия
 * образа действия.
 *
 * ОСТОРОЖНО С СОСЕДНИМИ МОДУЛЯМИ. Модуль 14 зовёт своё «сравнением», модуль 15
 * — «выделением». Здесь ни того, ни другого: мера не берёт вторую вещь и не
 * выбирает одну из многих, она говорит о том, какая одна вещь.
 *
 * ПРОГРАММА РАСХОДИЛАСЬ С ИСТОЧНИКОМ, И МОДУЛЬ ПЕРЕПИСАН ЦЕЛИКОМ. Прежняя
 * строка звалась «Такой же» и обещала «`as … as`; `too`, `enough`; `quite`,
 * `really`». Два обещания из четырёх стоят выше ступени:
 *
 * - `as … as` — English Grammar Profile, CLAUSES comparatives, «FORM/USE:
 *   'AS … AS'», B1. В перечне Language specifications руководства A2 Key
 *   (с. 52) оборота я не нашёл — смотрел разделы Adjectives, Adverbs, Clause
 *   types и искал по строке «as» по всему файлу. Это «не нашёл», а не «нет».
 * - `enough` при прилагательном — тот же файл, ADJECTIVES modifying, «FORM:
 *   WITH 'ENOUGH'», B1, пример «My room is big enough».
 *
 * Равенство отложено на Pre-Intermediate. В уроках о нём не сказано ни слова —
 * его там просто нет, и запрета на него тоже нет: графа B1 говорит, где оборот
 * обычно появляется, а не что раньше нельзя. Основание записано в программе,
 * там же оговорка вперёд для модуля 18.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ.
 *
 * 1. English Grammar Profile, A2, ADJECTIVES modifying, «FORM: WITH DEGREE
 *    ADVERBS» — «Can use adverbs of degree ('really', 'so', 'quite') with an
 *    increasing range of common gradable adjectives», пример источника «It was
 *    sunny and really hot every day!». Это урок 1. Там же A1, «FORM: WITH
 *    'VERY'» — отсюда very в той же таблице.
 *
 * 2. A2, ADVERBS adverbs and adverb phrases, «USE: DEGREE, WITH ADJECTIVES» —
 *    «Can use a limited range of degree adverbs ('so', 'quite', 'too') to
 *    modify adjectives», пример «It was quite expensive, it cost £100». Урок 1,
 *    и он же связывает урок 1 с уроком 2: too стоит в том же ряду.
 *
 * 3. A2, ADJECTIVES modifying, «FORM: WITH 'TOO'» — «Can use 'too' with common
 *    gradable adjectives». Это урок 2. ПРИМЕР ГРАФЫ И ЕСТЬ ОСНОВАНИЕ УРОКА: «I
 *    bought a jacket because the other one that I had was too small» — вещь не
 *    подошла, и потому купили другую. Отсюда правило урока: after too всегда
 *    есть, что помешало.
 *
 * 4. A2, там же, «FORM: WITH 'TOO' + PREPOSITIONAL PHRASE» — «Can use 'too' +
 *    adjective + prepositional phrase», единственный пример «I bought them
 *    because I noticed that most of my clothes were too small for me». Урок 3.
 *
 * 5. A2, DETERMINERS quantity, «FORM: 'SO MANY' WITH PLURAL NOUNS» — «Can use
 *    'so many' and 'too many' with plural nouns», примеры «We played so many
 *    games», «We visited so many places». Урок 4.
 *
 * 6. A2, ADVERBS adverbs and adverb phrases, «USE: DEGREE WITH VERBS» — «Can
 *    use a limited range of adverbs and adverb phrases ('so much', 'a lot')
 *    with verbs to indicate degree or intensity», примеры «I am looking forward
 *    to seeing you so much!» и «We listened to music and we danced a lot too».
 *    Урок 5. Там же A1, «USE: DEGREE WITH VERBS» — «Can use 'really' and 'very
 *    much' with verbs expressing preference ('like', 'love')», пример «I really
 *    like theatre»: отсюда really перед действием, а a lot после.
 *
 * 7. Cambridge English, A2 Key handbook, с. 52, Language specifications, раздел
 *    Adverbs: «Degree: very, too, rather, etc.» — второй источник на весь
 *    модуль.
 *
 * 8. Описания Совета Европы, с. 83, шкала Correspondence, графа A2: «Can
 *    compose messages and online postings as a series of very short sentences
 *    about hobbies and likes/dislikes, using simple words and formulaic
 *    expressions» — опора урока письма. Там же «Can compose short, simple
 *    notes, e-mails and text messages».
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК:
 *
 * - `as … as` и `enough` при прилагательном — B1, см. выше;
 * - `too much` с неисчисляемым — B1, DETERMINERS quantity, «FORM: 'SO MUCH',
 *   'TOO MUCH' WITH UNCOUNTABLE NOUNS», пример «My neighbours are making too
 *   much noise». Урок 4 учит только `too many` перед вещами во множественном
 *   числе и о `too much` молчит;
 * - `too` перед действием через `to` («too busy to write») — B1, «FORM: WITH
 *   'TOO' + 'TO'-INFINITIVE»;
 * - `so` + прилагательное + `that` — B1, CLAUSES comparatives, «FORM: 'SO' +
 *   ADJECTIVE + 'THAT' CLAUSE». Поэтому в текстах модуля `so many toys` стоит
 *   отдельным предложением, а не «so many toys that…»;
 * - `a bit`, `a little` при действии — B1, «USE: DEGREE WITH VERBS».
 *
 * СИЛА СЛОВА `QUITE` — РЕШЕНИЕ ВЛАДЕЛЬЦА ОТ 22 АВГУСТА 2026. Урок 1 говорит, что
 * `quite` перед словами вроде `good`, `expensive`, `old` слабее, чем `very`,
 * `really` и `so`. Ни один источник в `materials/` силу этих слов не
 * размечает: графа зовёт их всех adverbs of degree и на этом останавливается.
 * Открытые источники дают только ряд — Викисловарь ставит `quite` рядом с
 * `fairly`, `rather`, `somewhat`. Прямого сравнения с `very` нет нигде, поэтому
 * я вынес вопрос владельцу, и он ответил: так правильно.
 *
 * Методист вдобавок показал, что утверждение нельзя оставлять широким: словник
 * A2 Key даёт `quite (adv)` с ДВУМЯ примерами — «Are you quite sure?» и «quite
 * old», — и в первом это «совершенно», а не «довольно». Поэтому урок говорит о
 * quite не вообще, а перед словами того ряда, которому учит. Второе значение
 * модуль не берёт и не запрещает: его там просто нет.
 *
 * ИМЯ КЛАССА СЛОВ УКОРОЧЕНО, И ЭТО ТОЖЕ РЕШЕНИЕ ВЛАДЕЛЬЦА ОТ 22 АВГУСТА 2026.
 * Полное русское имя — «наречия меры и степени», но слово «степень» в курсе
 * занято сравнением (модули 14 и 15), и полное имя увело бы ученика туда.
 * Укороченное имя составлено из настоящего термина, а не выдумано взамен него.
 *
 * СЛОВАРЬ МОДУЛЯ. Счёт даёт `npm run kontrol`, и сверяться надо с ним, а не с
 * памятью. Норма владельца от 20 августа — не меньше тридцати карточек и не
 * меньше пятнадцати новых для ступени.
 *
 * Слова собраны вокруг случая модуля: мера видна там, где вещь меряют — в
 * магазине и дома. Отсюда `fit`, `suit`, `tie`, `trainers`, `furniture`,
 * `round`, `deep`. Впечатление меряют тоже, отсюда `strange`, `scary`,
 * `serious`, `almost`, `impossible`.
 *
 * СНЯТО ПРИ ПОДБОРЕ: `queue` и `tight` — Oxford ставит их на B1, а словника A2
 * Key я в них не нашёл; `loose` — B2; `record` — чтения в `ipa-en-uk` нет, а
 * читается оно по-разному в зависимости от того, вещь это или действие;
 * `store` — слово американское, курс держит британскую норму и зовёт магазин
 * `shop`.
 */
const module: Module = {
  slug: "ochen-i-slishkom",
  title: "Очень и слишком",
  znak: "1f4c8",

  outcomes: [
    "говорить, насколько: really good, quite expensive",
    "говорить, что мешает: too small, too expensive",
    "называть, кому слишком: too small for me",
    "говорить, что вещей слишком много: too many people",
    "называть меру при действии: I liked it a lot",
    "находить в письме, что подошло, а что нет",
    "слышать в разговоре, что не подошло",
    "проверять письмо: у каждого too сказано, чем дело кончилось",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, ADJECTIVES modifying, «FORM: WITH DEGREE ADVERBS»: «Can use adverbs " +
        "of degree ('really', 'so', 'quite') with an increasing range of common " +
        "gradable adjectives», пример источника — «It was sunny and really hot " +
        "every day!» — урок 1. Там же A1, «FORM: WITH 'VERY'»: «Can use 'very' " +
        "with a limited range of common gradable adjectives» — отсюда very в той " +
        "же таблице. " +
        "A2, ADVERBS adverbs and adverb phrases, «USE: DEGREE, WITH ADJECTIVES»: " +
        "«Can use a limited range of degree adverbs ('so', 'quite', 'too') to " +
        "modify adjectives», пример — «It was quite expensive, it cost £100» — " +
        "урок 1. Эта графа держит quite и too в одном ряду, и потому уроки 1 и 2 " +
        "идут подряд. " +
        "A2, ADJECTIVES modifying, «FORM: WITH 'TOO'»: «Can use 'too' with common " +
        "gradable adjectives» — урок 2. ПРИМЕР ГРАФЫ И ЕСТЬ ОСНОВАНИЕ УРОКА: «I " +
        "bought a jacket because the other one that I had was too small» — вещь не " +
        "подошла, и потому купили другую. Отсюда правило урока: после too всегда " +
        "есть, что помешало. Сама графа этого не пишет, показывает пример. " +
        "A2, там же, «FORM: WITH 'TOO' + PREPOSITIONAL PHRASE»: «Can use 'too' + " +
        "adjective + prepositional phrase», единственный пример — «I bought them " +
        "because I noticed that most of my clothes were too small for me» — урок 3. " +
        "A2, DETERMINERS quantity, «FORM: 'SO MANY' WITH PLURAL NOUNS»: «Can use " +
        "'so many' and 'too many' with plural nouns», примеры — «We played so many " +
        "games» и «We visited so many places» — урок 4. " +
        "A2, ADVERBS adverbs and adverb phrases, «USE: DEGREE WITH VERBS»: «Can use " +
        "a limited range of adverbs and adverb phrases ('so much', 'a lot') with " +
        "verbs to indicate degree or intensity», примеры — «I am looking forward to " +
        "seeing you so much!» и «We listened to music and we danced a lot too» — " +
        "урок 5. Там же A1, «USE: DEGREE WITH VERBS»: «Can use 'really' and 'very " +
        "much' with verbs expressing preference ('like', 'love')», пример — «I " +
        "really like theatre» — отсюда really перед действием, а a lot после. " +
        "ЧЕГО НЕТ И ПОЧЕМУ. `as … as` — CLAUSES comparatives, «FORM/USE: 'AS … " +
        "AS'», B1. `enough` при прилагательном — ADJECTIVES modifying, «FORM: WITH " +
        "'ENOUGH'», B1, пример «My room is big enough». `too much` с " +
        "неисчисляемым — DETERMINERS quantity, «FORM: 'SO MUCH', 'TOO MUCH' WITH " +
        "UNCOUNTABLE NOUNS», B1. `too` через to («too busy to write») — «FORM: WITH " +
        "'TOO' + 'TO'-INFINITIVE», B1. `so` + прилагательное + that — CLAUSES " +
        "comparatives, B1: поэтому в текстах модуля so many toys стоит отдельным " +
        "предложением. Всё это выше ступени, и запрета на них в уроках не написано",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, раздел Adverbs: «Degree: very, too, " +
        "rather, etc.» — второй источник на весь модуль. Слова very и too стоят в " +
        "требованиях ступени прямо. " +
        "УРОК 2, ВТОРОЕ ЗНАЧЕНИЕ TOO. с. 36, расшифровка задания на слух: «M: I'll " +
        "take this shirt too» — то самое too в конце фразы, которое значит «тоже». " +
        "Оно взято из самого экзамена, а не придумано уроком. " +
        "УРОК 7, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ПИСЬМА «Пишем письмо о покупке». с. 83, шкала Correspondence, графа " +
        "A2: «Can exchange information by text message, by e-mail or in short " +
        "letters, responding to questions from the other person (e.g. about a new " +
        "product or activity)». Урок ровно об этом: друг переспросил, купил Данияр " +
        "вещь или нет, и письмо ему отвечает. Там же A2: «Can compose short, " +
        "simple notes, e-mails and text messages». " +
        "ОСТОРОЖНО, ЗДЕСЬ БЫЛА ОШИБКА. Сперва опорой стояла строка «Can compose " +
        "messages and online postings … about hobbies and likes/dislikes» — она " +
        "той же шкалы, но графы A1, и у неё есть отброшенный мною хвост «with " +
        "reference to a dictionary». Нашёл методист. Урок письма ступени не может " +
        "стоять на описании прошлой ступени. " +
        "Жанр тот же, что у урока чтения этого модуля (`email`), поэтому новых слов " +
        "уроку письма не нужно. " +
        "Шкала выбрана нарочно, а не соседняя: с. 81 того же документа разводит их " +
        "прямо — Correspondence о переписке, «Notes, messages and forms» о передаче " +
        "сведений. Письмо другу о покупке — первое",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Тридцать карточек модуля взяты из словника ступени. Подбор шёл через " +
        "`npm run slovo -- --zapas`: это слова требований экзамена A2, до которых " +
        "курс ещё не дошёл. Слова very, too, quite, really, so и a lot в словнике " +
        "тоже есть, но карточками они не идут: им отданы сами уроки. " +
        "ОДНО РАСХОЖДЕНИЕ СО СЛОВНИКОМ, И ОНО НАЗВАНО НАРОЧНО. Словник на с. 2 " +
        "объясняет свои примеры так: «Example phrases and sentences showing how " +
        "words might be used are given only where words with different meanings " +
        "need to be constrained… candidates are not expected to know other " +
        "meanings». Значит пример при записи — граница значения. У записи `fit` " +
        "стоят «I joined a gym to get fit» и «I run to keep fit», то есть словник " +
        "держит только прилагательное о здоровье. Модуль берёт глагол «подходить " +
        "по размеру», и держится он вторым источником: Oxford 3000 даёт `fit v. " +
        "A2`. Ступень подтверждена, требование экзамена — нет. " +
        "ПО ТОЙ ЖЕ ПРИЧИНЕ СНЯТЫ ТРИ КАРТОЧКИ, найденные методистом: `fair` " +
        "(словник: «She has fair hair» — о цвете волос, а не о справедливости), " +
        "`double` («a double room» — о номере на двоих) и прежнее значение " +
        "`serious` о фильме («She is a very serious person» — о человеке). " +
        "Карточка `serious` осталась, но говорит теперь о человеке. " +
        "СНЯТЫ ПРИ ПОДБОРЕ: `queue` и `tight` — Oxford ставит их на B1, а в " +
        "словнике A2 Key я их не нашёл; `loose` — B2; `store` — слово " +
        "американское, а курс держит британскую норму и зовёт магазин shop",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "docs/istochniki-norma-yazyka.md — выписки из открытых источников",
      section:
        "Наши материалы отвечают «как читается слово» и «на какой ступени оно " +
        "стоит», но не «что оно значит» и не «где как принято». Четыре " +
        "утверждения модуля стоят на выписках оттуда, и каждая цитата открыта " +
        "своими глазами. " +
        "УРОК 2, ЧТО ЗНАЧИТ TOO. Викисловарь, статья «too»: «To an excessive " +
        "degree, more than enough — indicates that the degree of a quality is " +
        "more than what is needed or wanted». Определение говорит о степени " +
        "качества и ничего не требует дописывать — отсюда правка правила урока. " +
        "УРОК 2, ВТОРОЕ TOO. Та же статья: «Also, in addition», пометка «Used " +
        "postpositively». Слово postpositively и значит «после» — на этом стоит " +
        "врезка о двух too. " +
        "УРОК 1, СЛОВО QUITE. Викисловарь, статья «quite»: значение «completely, " +
        "entirely» и значение «To a moderate extent or degree; somewhat, rather», " +
        "с пометкой «similar to fairly and rather and somewhat». Двузначность " +
        "подтверждена, и потому урок говорит о quite не вообще, а перед словами " +
        "вроде good, expensive, old. ПРЯМОГО сравнения «quite слабее, чем very» " +
        "ни один открытый источник, который я сумел открыть, не даёт: это " +
        "остаётся решением владельца как преподавателя. " +
        "УРОК 5, МЕСТО A LOT. Викисловарь, статья «a lot»: примеры «I go swimming " +
        "a lot» и «Thanks a lot for listening to me». Первый подтверждает место " +
        "после действия, второй показывает, что после оборота бывает " +
        "продолжение, — отсюда снята прежняя строка «в самом конце строки». " +
        "УРОК 6, ПОЧТА ПО-БРИТАНСКИ. Википедия, «Comparison of American and " +
        "British English», таблица различий: post (British) — mail (American). " +
        "Строка письма исправлена на by post, карточка `mail` снята, её место " +
        "заняло `surprising`. " +
        "ЧЕГО В МОДУЛЕ НЕТ ПО ТОЙ ЖЕ ПРИЧИНЕ: этажей. Википедия, «Storey»: «the " +
        "floor at ground level is called the “ground floor”… the next floor up is " +
        "assigned the number 1». Значит британское second floor — это третий " +
        "этаж, и прежний словарик урока чтения переводил его неверно",
      license: "открытые источники, ссылки внутри файла",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə`, знак ударения перед слогом. " +
        "Слов `review` и `inside` в этом файле нет — чтение взято из " +
        "`materials/wikipron-en-uk.tsv` (`ɹɪvjuː`, `ɪnsaɪd`) и приведено к " +
        "условностям, ударение поставлено словарное: /rɪˈvjuː/, /ɪnˈsaɪd/. " +
        "СНЯТО: `record` — записи в `ipa-en-uk` нет, а читается слово по-разному в " +
        "зависимости от того, вещь это или действие. Такие слова решает владелец " +
        "как преподаватель, и слово осталось в запасе ступени",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "naskolko",
      title: "Насколько: really good, quite expensive",
      estimatedMinutes: 15,
      outcome: "говорить, насколько: really good, quite expensive",
      vozvrat: [{ iz: "samyy", zadanie: "z1-dopisat-est" }],

      blocks: [
        {
          id: "zachem-mera",
          kind: "explain",
          text: [
            "Дана рассказывает о новом магазине и говорит: It is good.",
            "Слушателю этого мало: хорош он немного или очень?",
            "Ответ на этот вопрос и есть мера: насколько вещь такая, как о ней сказали.",
            "The shop is very good. — Магазин очень хороший.",
            "По-русски мера тоже стоит отдельным словом перед прилагательным: очень, довольно, слишком.",
            "И место у неё то же самое, что в английской строке.",
            "Два прошлых модуля отвечали на другие вопросы: какая из двух вещей больше и какая из многих самая.",
            "Здесь вещь одна, и вопрос к ней: насколько.",
          ],
        },
        {
          id: "slova-mery",
          kind: "table",
          caption: "Насколько хорош магазин",
          zvuchat: [
            "The shop is good.",
            "The shop is quite good.",
            "The shop is very good.",
            "The shop is really good.",
            "The shop is so good.",
          ],
          head: ["Строка", "Насколько"],
          rows: [
            ["The shop is good.", "хороший"],
            ["The shop is quite good.", "довольно хороший"],
            ["The shop is very good.", "очень хороший"],
            ["The shop is really good.", "очень хороший"],
            ["The shop is so good.", "очень хороший"],
          ],
        },
        {
          id: "kak-ustroena-mera",
          kind: "explain",
          text: [
            "Такое слово встаёт между is и прилагательным: is + very + good.",
            "Такие слова называют наречиями меры: они и говорят, насколько.",
            "Наречий меры здесь четыре: very, really, so и quite.",
            "Первые три говорят об одном — сильно, и в строке взаимозаменимы.",
            "А quite перед такими словами, как good, expensive, old, слабее: «довольно».",
            "Вещь хорошая, но не отличная — и это ровно то, что говорит quite good.",
            "Порядок один и тот же с любым из них, а вот сила разная.",
          ],
        },
        {
          id: "odno-mesto-mery",
          kind: "note",
          tone: "info",
          text:
            "У всех четырёх наречий меры место одно: слева от прилагательного." +
            "\n\nThe shop is very good, The shop is really good, The shop is quite " +
            "good — порядок не меняется.",
        },
        {
          id: "razgovor-ob-otzyve",
          kind: "example",
          caption: "Дана и Алим об отзыве",
          razgovor: true,
          zvuchat: [
            "Did you read the review on the web?",
            "Yes, it is really good.",
            "Is the jewellery expensive there?",
            "Quite expensive. Gold is in fashion now, and the shop is very successful.",
          ],
          text:
            "Did you read the review on the web?\nYes, it is really good.\nIs the jewellery expensive there?\nQuite expensive. Gold is in fashion now, and the shop is very successful.",
          perevod: {
            "Did you read the review on the web?":
              "Ты читал отзыв в сети?",
            "Yes, it is really good.": "Да, он очень хороший.",
            "Is the jewellery expensive there?":
              "Украшения там дорогие?",
            "Quite expensive. Gold is in fashion now, and the shop is very successful.":
              "Довольно дорогие. Золото сейчас в моде, и у магазина дела идут очень хорошо.",
          },
          explain:
            "Наречия меры стоят перед прилагательным каждый раз: really good, " +
            "quite expensive, very successful. Меняется слово, а место не меняется.",
        },
        {
          id: "slovar-o-magazine",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "review", translation: "отзыв", example: "The review is really good.", hint: "/rɪˈvjuː/" },
            { term: "web", translation: "интернет, сеть", example: "I read the review on the web.", hint: "/web/" },
            { term: "jewellery", translation: "украшения", example: "The jewellery here is quite expensive.", hint: "/ˈdʒuːələri/" },
            { term: "gold", translation: "золото, золотой", example: "The gold ring is very small.", hint: "/gəʊld/" },
            { term: "fashion", translation: "мода", example: "Gold is in fashion now.", hint: "/ˈfæʃn/" },
            { term: "successful", translation: "успешный", example: "The shop is very successful.", hint: "/səkˈsesfl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-quite",
          kind: "gap",
          prompt:
            "Украшения тут довольно дорогие — не очень, а именно довольно. Допиши наречие меры.",
          before: "The jewellery here is ",
          after: " expensive.",
          answer: "quite",
          hint: "Из наших наречий меры «довольно» значит только одно.",
          why:
            "The jewellery here is quite expensive. Слова very, really и so " +
            "сказали бы «очень», а это сильнее, чем просили.",
        },
        {
          id: "z2-kakoe-slovo-mery",
          kind: "choice",
          prompt:
            "Кольцо очень маленькое, а не просто маленькое. Какая запись верна?",
          options: [
            { text: "The gold ring is small." },
            { text: "The gold ring is quite small." },
            { text: "The gold ring is very small.", correct: true },
          ],
          hint: "Нужно слово, которое говорит «очень».",
          why:
            "The gold ring is very small. Первая строка о мере молчит вовсе, а " +
            "quite значит «довольно» — это слабее, чем просили.",
        },
        {
          id: "z3-otmetit-narechiya-mery",
          kind: "hottext",
          prompt: "Отметь наречия меры.",
          parts: [
            { text: "really", selectable: true, correct: true },
            { text: " · " },
            { text: "successful", selectable: true },
            { text: " · " },
            { text: "quite", selectable: true, correct: true },
            { text: " · " },
            { text: "fashion", selectable: true },
          ],
          hint: "Наречие меры отвечает на вопрос «насколько», а не «какой» и не «что».",
          why:
            "Наречия меры — really и quite. Слово successful — прилагательное, оно " +
            "говорит, какой магазин, а fashion называет вещь.",
        },
        {
          id: "z4-sobrat-stroku-o-koltse",
          kind: "order",
          prompt: "Собери строку: золотое кольцо такое красивое.",
          items: ["beautiful.", "is so", "The gold ring"],
          answer: [2, 1, 0],
          hint: "Наречие меры встаёт сразу после is.",
          why:
            "The gold ring is so beautiful. Слово so стоит между is и beautiful, как " +
            "very и really в таблице.",
        },
        {
          id: "z5-napisat-ob-otzyve",
          kind: "short",
          prompt:
            "Отзыв очень хороший — скажи это словом really. Начни с The review.",
          answer: "The review is really good.",
          accept: ["The review is really good"],
          hint: "Порядок тот же: is, потом наречие меры, потом прилагательное.",
          why:
            "The review is really good. Слово really стоит там же, где стояло бы " +
            "very.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slishkom",
      title: "Слишком: too small",
      estimatedMinutes: 15,
      outcome: "говорить, что мешает: too small, too expensive",

      blocks: [
        {
          id: "zachem-too",
          kind: "explain",
          text: [
            "Данияр примерил куртку и не купил её: надеть её не вышло.",
            "По-английски это The jacket was too small.",
            "Слово too — тоже наречие меры, и стоит оно на том же месте.",
            "Но говорит оно другое: этой меры больше, чем нужно, и оттого что-то не выходит.",
          ],
        },
        {
          id: "very-i-too",
          kind: "table",
          caption: "Very и too",
          zvuchat: [
            "The jacket is very warm.",
            "The jacket is too warm.",
            "The trainers are very big.",
            "The trainers are too big.",
          ],
          head: ["Строка", "Что из неё понятно"],
          rows: [
            ["The jacket is very warm.", "куртка тёплая, и это хорошо"],
            ["The jacket is too warm.", "в ней жарко, носить её нельзя"],
            ["The trainers are very big.", "кроссовки большие"],
            ["The trainers are too big.", "они спадают с ноги"],
          ],
        },
        {
          id: "chto-govorit-too",
          kind: "explain",
          text: [
            "Very просто усиливает прилагательное и о деле ничего не сообщает.",
            "Too сообщает: этой меры больше, чем нужно, и оттого что-то не выходит.",
            "Само помешавшее называть не обязательно — слушатель понимает его и так.",
            "В строке The weather was too hot ничего не дописано, и всё равно ясно: жара мешала.",
            "Проверить свою строку можно так: спроси себя, мешает ли эта мера.",
            "Если ничто не мешает, а просто сильно, там нужно very или really.",
          ],
        },
        {
          id: "too-o-horoshem",
          kind: "note",
          tone: "mistake",
          text:
            "«The trainers were too comfortable, so I bought them» — здесь too " +
            "лишнее.\n\nПокупке ничто не помешало, а too говорит об обратном: The " +
            "trainers were really comfortable, so I bought them.",
        },
        {
          id: "dva-too",
          kind: "note",
          tone: "info",
          text:
            "Слово too бывает и в конце строки, и там оно значит «тоже»: I'll take " +
            "this shirt too.\n\nРазличают их по месту: перед словом, которое " +
            "меряют, — «слишком», в конце строки — «тоже».",
        },
        {
          id: "razgovor-o-pokupkah",
          kind: "example",
          caption: "Айгуль расспрашивает Данияра о покупках",
          razgovor: true,
          zvuchat: [
            "Did you buy the jacket?",
            "No, it was too small.",
            "And the suit?",
            "Too expensive. The guy in the shop is very serious, but he helped me. I bought a tie.",
            "Does the tie fit?",
            "Yes.",
          ],
          text:
            "Did you buy the jacket?\nNo, it was too small.\nAnd the suit?\nToo expensive. The guy in the shop is very serious, but he helped me. I bought a tie.\nDoes the tie fit?\nYes.",
          perevod: {
            "Did you buy the jacket?": "Ты купил куртку?",
            "No, it was too small.": "Нет, она была слишком мала.",
            "And the suit?": "А костюм?",
            "Too expensive. The guy in the shop is very serious, but he helped me. I bought a tie.":
              "Слишком дорогой. Парень в магазине очень серьёзный, но он мне помог. Я купил галстук.",
            "Does the tie fit?": "Галстук подходит?",
            "Yes.": "Да.",
          },
          explain:
            "Каждое too здесь стоит перед прилагательным. Первое объясняет, почему " +
            "куртку не купили, второе — почему остался в магазине костюм.",
        },
        {
          id: "slovar-pokupok",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "suit", translation: "костюм", example: "The suit was too expensive.", hint: "/suːt/" },
            { term: "tie", translation: "галстук", example: "I bought a tie.", hint: "/taɪ/" },
            { term: "trainers", translation: "кроссовки", example: "The trainers are too big.", hint: "/ˈtreɪnəz/" },
            { term: "fit", translation: "подходить по размеру", example: "Does the tie fit?", hint: "/fɪt/" },
            { term: "guy", translation: "парень", example: "The guy in the shop helped me.", hint: "/gaɪ/" },
            { term: "serious", translation: "серьёзный", example: "The guy in the shop is very serious.", hint: "/ˈsɪəriəs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-too-small",
          kind: "choice",
          prompt:
            "Данияр не купил куртку: надеть её не вышло. Какая запись говорит именно об этом?",
          options: [
            { text: "The jacket was too small.", correct: true },
            { text: "The jacket was very small." },
            { text: "The jacket was small too." },
          ],
          hint: "Нужно слово, которое говорит не о размере, а о помехе.",
          why:
            "The jacket was too small. Вторая строка говорит только о размере, а " +
            "третья значит «куртка тоже была маленькая».",
        },
        {
          id: "z2-dopisat-too",
          kind: "gap",
          prompt:
            "Костюм оказался так дорог, что Данияр его не купил. Допиши недостающее слово.",
          before: "The suit was ",
          after: " expensive.",
          answer: "too",
          hint: "Покупка не состоялась — значит цена помешала.",
          why:
            "The suit was too expensive. Слово very сказало бы только о цене и " +
            "молчало бы о том, почему костюм остался в магазине.",
        },
        {
          id: "z3-otmetit-gde-pomeshalo",
          kind: "hottext",
          prompt: "Отметь строки, где что-то помешало.",
          parts: [
            { text: "The room was too small.", selectable: true, correct: true },
            { text: " · " },
            { text: "The room was very small.", selectable: true },
            { text: " · " },
            { text: "The trainers were too big.", selectable: true, correct: true },
            { text: " · " },
            { text: "The trainers were really big.", selectable: true },
          ],
          hint: "Помеху называет одно наречие меры, а не любое.",
          why:
            "Помешало в первой и третьей строках. Very и really усиливают " +
            "прилагательное и о деле молчат.",
        },
        {
          id: "z4-sobrat-o-krossovkah",
          kind: "order",
          prompt: "Собери строку: кроссовки были слишком велики.",
          items: ["big.", "were too", "The trainers"],
          answer: [2, 1, 0],
          hint: "Наречие меры встаёт сразу после were.",
          why:
            "The trainers were too big. Место у too то же, что у very: между were " +
            "и прилагательным.",
        },
        {
          id: "z5-kakoe-too",
          kind: "choice",
          prompt: "В строке I'll take this shirt too слово too значит «тоже». Почему это видно?",
          options: [
            { text: "Потому что рядом стоит слово shirt." },
            { text: "Потому что оно стоит в конце строки, а не перед прилагательным.", correct: true },
            { text: "Потому что строка о будущем." },
          ],
          hint: "Сравни, где стояло too в строке The jacket was too small.",
          why:
            "Потому что оно стоит в конце строки. Перед прилагательным too значит " +
            "«слишком», а в конце строки — «тоже».",
        },
        {
          id: "z6-napisat-o-galstuke",
          kind: "short",
          prompt:
            "Галстук оказался так дорог, что покупка не состоялась. Скажи это по-английски, начав с The tie.",
          answer: "The tie was too expensive.",
          accept: ["The tie was too expensive"],
          hint: "Покупка не состоялась — значит нужно наречие меры о помехе.",
          why:
            "The tie was too expensive. Слово too и объясняет, почему галстук " +
            "остался в магазине.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slishkom-dlya-kogo",
      title: "Кому слишком: too small for me",
      estimatedMinutes: 15,
      outcome: "называть, кому слишком: too small for me",

      blocks: [
        {
          id: "zachem-nazyvat-komu",
          kind: "explain",
          text: [
            "Строка The jacket is too small говорит о помехе, но не говорит, кому.",
            "Одна и та же куртка мала взрослому и велика ребёнку.",
            "Поэтому после наречия меры и прилагательного ставят слово for и того, кому не подошло.",
            "Выходит The jacket is too small for me.",
          ],
        },
        {
          id: "komu-ne-podoshlo",
          kind: "table",
          caption: "Кому не подошло",
          zvuchat: [
            "The jacket is too small for me.",
            "The room is too small for us.",
            "The table is too big for the kitchen.",
          ],
          head: ["Строка", "Кому или чему"],
          rows: [
            ["The jacket is too small for me.", "мне"],
            ["The room is too small for us.", "нам"],
            ["The table is too big for the kitchen.", "кухне"],
          ],
        },
        {
          id: "chto-stoit-posle-for",
          kind: "explain",
          text: [
            "После for стоит либо человек: me, us, him, her.",
            "Либо место или вещь: the kitchen, the room, the shelf.",
            "Оборот идёт после прилагательного.",
            "Слово for отвечает на вопрос «для кого мало или много», и потому стоит после самого прилагательного.",
            "Без него слушатель домысливает сам и часто домысливает не то.",
          ],
        },
        {
          id: "for-a-ne-to",
          kind: "note",
          tone: "mistake",
          text:
            "«The jacket is too small to me» — так не говорят.\n\nПеред тем, кому " +
            "не подошло, стоит for: The jacket is too small for me.",
        },
        {
          id: "razgovor-o-mebeli",
          kind: "example",
          caption: "Разговор о мебели",
          razgovor: true,
          zvuchat: [
            "We bought new furniture. The round table is too big for the kitchen.",
            "And the wooden shelf?",
            "Too heavy for me.",
            "Is the cupboard deep?",
            "Yes, but inside it is empty.",
          ],
          text:
            "We bought new furniture. The round table is too big for the kitchen.\nAnd the wooden shelf?\nToo heavy for me.\nIs the cupboard deep?\nYes, but inside it is empty.",
          perevod: {
            "We bought new furniture. The round table is too big for the kitchen.":
              "Мы купили новую мебель. Круглый стол слишком велик для кухни.",
            "And the wooden shelf?": "А деревянная полка?",
            "Too heavy for me.": "Слишком тяжёлая для меня.",
            "Is the cupboard deep?": "Шкаф глубокий?",
            "Yes, but inside it is empty.": "Да, но внутри пусто.",
          },
          explain:
            "Первое for называет место, второе — человека. Оба стоят в конце " +
            "строки, сразу после прилагательного.",
        },
        {
          id: "slovar-mebeli",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "furniture", translation: "мебель", example: "The furniture is too big for the kitchen.", hint: "/ˈfɜːnɪtʃə/" },
            { term: "wooden", translation: "деревянный", example: "The wooden shelf is too heavy for me.", hint: "/ˈwʊdn/" },
            { term: "round", translation: "круглый", example: "We bought a round table.", hint: "/raʊnd/" },
            { term: "deep", translation: "глубокий", example: "Is the cupboard deep?", hint: "/diːp/" },
            { term: "inside", translation: "внутри", example: "Inside it is empty.", hint: "/ɪnˈsaɪd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-for",
          kind: "gap",
          prompt: "Комната мала для нас. Допиши недостающее слово перед us.",
          before: "The room is too small ",
          after: " us.",
          answer: "for",
          hint: "Перед тем, кому не подошло, стоит одно короткое слово.",
          why:
            "The room is too small for us. Слово to здесь не годится: с ним " +
            "получилось бы «мала К нам».",
        },
        {
          id: "z2-chego-ne-hvataet",
          kind: "choice",
          prompt:
            "Данияр написал: The table is too big. Хозяйка кухни переспросила. Чего не хватает строке?",
          options: [
            { text: "Наречия меры." },
            { text: "Прилагательного." },
            { text: "Слов о том, чему стол велик.", correct: true },
          ],
          hint: "Спроси себя: велик — для чего именно?",
          why:
            "Слов о том, чему велик. Наречие меры и прилагательное на месте, а " +
            "for the kitchen хозяйке и не хватило.",
        },
        {
          id: "z3-otmetit-s-for",
          kind: "hottext",
          prompt: "Отметь строки, где сказано, кому или чему не подошло.",
          parts: [
            { text: "too heavy for me", selectable: true, correct: true },
            { text: " · " },
            { text: "too heavy", selectable: true },
            { text: " · " },
            { text: "too deep for the shelf", selectable: true, correct: true },
            { text: " · " },
            { text: "really deep", selectable: true },
          ],
          hint: "Нужный оборот начинается с for.",
          why:
            "Сказано в первой и третьей строках. Во второй и четвёртой стоит одно " +
            "прилагательное, и кому оно мешает — неясно.",
        },
        {
          id: "z4-sobrat-o-stule",
          kind: "order",
          prompt: "Собери строку: деревянная полка слишком тяжела для меня.",
          items: ["for me.", "is too heavy", "The wooden shelf"],
          answer: [2, 1, 0],
          hint: "Оборот с for идёт последним.",
          why:
            "The wooden shelf is too heavy for me. Сначала прилагательное с наречием " +
            "меры, потом уже for me.",
        },
        {
          id: "z5-dopisat-komu",
          kind: "short",
          prompt:
            "Строку The round table is too big допиши так, чтобы стало ясно: велик кухне. Запиши строку целиком.",
          answer: "The round table is too big for the kitchen.",
          accept: ["The round table is too big for the kitchen"],
          hint: "Кухня — это место, и перед местом здесь стоит то же слово, что перед человеком.",
          why:
            "The round table is too big for the kitchen. После for стоят и люди, и " +
            "места — оборот один и тот же.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slishkom-mnogo",
      title: "Слишком много: too many people",
      estimatedMinutes: 15,
      outcome: "говорить, что вещей слишком много: too many people",

      blocks: [
        {
          id: "zachem-too-many",
          kind: "explain",
          text: [
            "Мешать может не только то, какая вещь, но и то, сколько вещей.",
            "Дана пришла в магазин на распродажу и ушла ни с чем: людей было не пробиться.",
            "По-английски это There were too many people.",
            "Перед many стоит то же самое too и значит то же: больше, чем нужно.",
          ],
        },
        {
          id: "mnogo-i-slishkom-mnogo",
          kind: "table",
          caption: "Много и слишком много",
          zvuchat: [
            "There were too many people.",
            "There are too many advertisements here.",
            "We saw so many toys.",
          ],
          head: ["Строка", "Что из неё понятно"],
          rows: [
            ["There were too many people.", "людей столько, что это мешало"],
            ["There are too many advertisements here.", "реклама надоела"],
            ["We saw so many toys.", "игрушек очень много, и это не мешало"],
          ],
        },
        {
          id: "many-i-mnozhestvennoe",
          kind: "explain",
          text: [
            "Оборот too many ставят перед вещами, которых несколько.",
            "Сама вещь после него стоит во множественном числе: people, shops, toys.",
            "Рядом живёт оборот so many, и место у него то же.",
            "Разница та же, что была у too и very: too many упрекает, so many просто считает.",
            "So many toys значит «игрушек очень много», и ничего плохого в этом нет.",
          ],
        },
        {
          id: "many-trebuet-mnozhestvennogo",
          kind: "note",
          tone: "mistake",
          text:
            "«There are too many shop» — так не говорят.\n\nПосле too many вещь " +
            "стоит во множественном числе: There are too many shops.",
        },
        {
          id: "razgovor-o-rasprodazhe",
          kind: "example",
          caption: "Алим расспрашивает Дану о распродаже",
          razgovor: true,
          zvuchat: [
            "How was the sale?",
            "There were too many people. I saw Dana among them.",
            "What sort of toy did you want?",
            "A red car. There were so many toys, and I did not choose. It was impossible!",
          ],
          text:
            "How was the sale?\nThere were too many people. I saw Dana among them.\nWhat sort of toy did you want?\nA red car. There were so many toys, and I did not choose. It was impossible!",
          perevod: {
            "How was the sale?": "Как прошла распродажа?",
            "There were too many people. I saw Dana among them.":
              "Народу было слишком много. Я заметил среди них Дану.",
            "What sort of toy did you want?": "Какую игрушку ты хотел?",
            "A red car. There were so many toys, and I did not choose. It was impossible!":
              "Красную машинку. Игрушек было так много, что я так и не выбрал. Это было невозможно!",
          },
          explain:
            "Too many стоит там, где число мешало, а so many — там, где просто " +
            "было много. Вещь после обоих оборотов во множественном числе.",
        },
        {
          id: "slovar-rasprodazhi",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "toy", translation: "игрушка", example: "There were so many toys.", hint: "/tɔɪ/" },
            { term: "advertisement", translation: "реклама, объявление", example: "There are too many advertisements here.", hint: "/ədˈvɜːtɪsmənt/" },
            { term: "among", translation: "среди", example: "I saw Dana among them.", hint: "/əˈmʌŋ/" },
            { term: "sort", translation: "вид, сорт", example: "What sort of toy did you want?", hint: "/sɔːt/" },
            { term: "impossible", translation: "невозможный", example: "There were so many toys. It was impossible!", hint: "/ɪmˈpɒsəbl/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-many",
          kind: "gap",
          prompt:
            "Людей было столько, что Дана ушла ни с чем. Допиши недостающее слово после too.",
          before: "There were too ",
          after: " people.",
          answer: "many",
          hint: "Людей можно сосчитать, и слово перед ними об этом.",
          why:
            "There were too many people. Оборот too many и ставят перед вещами, " +
            "которых несколько.",
        },
        {
          id: "z2-mnozhestvennoe-chislo",
          kind: "choice",
          prompt: "На этой улице слишком много рекламы. Какая запись верна?",
          options: [
            { text: "There are too many advertisement here." },
            { text: "There are too many advertisements here.", correct: true },
            { text: "There are too advertisements here." },
          ],
          hint: "Проверь два места: слово после too и окончание у вещи.",
          why:
            "There are too many advertisements here. После too many вещь идёт во " +
            "множественном числе, а само many пропускать нельзя.",
        },
        {
          id: "z3-otmetit-gde-uprek",
          kind: "hottext",
          prompt: "Отметь строки, где число мешало.",
          parts: [
            { text: "There were too many people.", selectable: true, correct: true },
            { text: " · " },
            { text: "We saw so many toys.", selectable: true },
            { text: " · " },
            { text: "There are too many advertisements here.", selectable: true, correct: true },
            { text: " · " },
            { text: "I have so many books.", selectable: true },
          ],
          hint: "Упрёк слышен там, где стоит too, а не so.",
          why:
            "Мешало в первой и третьей строках. So many говорит только о числе и " +
            "ничего плохого не сообщает.",
        },
        {
          id: "z4-sobrat-o-magazinah",
          kind: "order",
          prompt: "Собери строку: на этой улице слишком много магазинов.",
          items: ["on this street.", "too many shops", "There are"],
          answer: [2, 1, 0],
          hint: "Оборот стоит сразу после There are.",
          why:
            "There are too many shops on this street. Место у оборота то же, что " +
            "у so many.",
        },
        {
          id: "z5-napisat-ob-igrushkah",
          kind: "short",
          prompt:
            "Игрушек было очень много, и это не мешало. Скажи это по-английски, начав с There were.",
          answer: "There were so many toys.",
          accept: ["There were so many toys"],
          hint: "Упрёка нет — значит и too здесь не нужно.",
          why:
            "There were so many toys. Оборот so many считает, а too many упрекал " +
            "бы за число.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "mera-pri-deystvii",
      title: "Мера при действии: I liked it a lot",
      estimatedMinutes: 15,
      outcome: "называть меру при действии: I liked it a lot",

      blocks: [
        {
          id: "zachem-mera-pri-deystvii",
          kind: "explain",
          text: [
            "Мера бывает не только у прилагательного, но и у действия.",
            "Понравиться можно немного, а можно сильно.",
            "По-английски сильно — это I liked it a lot.",
            "Оборот a lot тоже называет меру, но встаёт он в другое место.",
          ],
        },
        {
          id: "gde-stoit-mera",
          kind: "table",
          caption: "Где стоит наречие меры",
          zvuchat: [
            "The film is really scary.",
            "I liked the film a lot.",
            "Thank you so much.",
            "I really like this film.",
          ],
          head: ["Строка", "Где стоит мера"],
          rows: [
            ["The film is really scary.", "перед прилагательным"],
            ["I liked the film a lot.", "после действия, в конце"],
            ["Thank you so much.", "после действия, в конце"],
            ["I really like this film.", "перед действием"],
          ],
        },
        {
          id: "dva-mesta-mery",
          kind: "explain",
          text: [
            "При прилагательном мера стоит слева от него: really scary.",
            "При действии мест два, и они зависят от слова.",
            "Обороты a lot и so much идут после действия.",
            "А слово really при действии встаёт перед ним: I really like this film.",
            "Говорят они одно и то же — сильно, — но местами не меняются.",
          ],
        },
        {
          id: "a-lot-v-konce",
          kind: "note",
          tone: "mistake",
          text:
            "«I a lot liked the film» — так не говорят.\n\nОборот a lot идёт после " +
            "действия: I liked the film a lot.",
        },
        {
          id: "razgovor-o-filme",
          kind: "example",
          caption: "Айгуль расспрашивает Данияра о фильме",
          razgovor: true,
          zvuchat: [
            "How was the film?",
            "I liked it a lot. The end is really strange.",
            "Was it scary?",
            "Yes, I almost left.",
            "Thanks so much for the ticket.",
          ],
          text:
            "How was the film?\nI liked it a lot. The end is really strange.\nWas it scary?\nYes, I almost left.\nThanks so much for the ticket.",
          perevod: {
            "How was the film?": "Как фильм?",
            "I liked it a lot. The end is really strange.":
              "Мне очень понравилось. Конец совсем странный.",
            "Was it scary?": "Страшно было?",
            "Yes, I almost left.": "Да, я чуть не ушёл из зала.",
            "Thanks so much for the ticket.": "Большое спасибо за билет.",
          },
          explain:
            "Обороты a lot и so much стоят после действия, а really — перед " +
            "прилагательным strange. Место зависит от слова, а не от настроения.",
        },
        {
          // Свод связки «Сравнение и мера» — модули 14–16. Их путают, и модуль 17
          // это уже находил у себя. Три строки об одной квартире разводят три
          // разных вопроса: какая из двух, какая из многих, насколько.
          id: "sravnenie-vydelenie-mera-svod",
          kind: "table",
          caption: "Три разных вопроса об одной квартире",
          zvuchat: [
            "My flat is smaller than yours.",
            "This is the smallest flat.",
            "My flat is very small.",
            "My flat is too small.",
          ],
          head: ["По-английски", "По-русски", "Что этим говорят"],
          rows: [
            [
              "My flat is smaller than yours.",
              "Моя квартира меньше твоей.",
              "которая из двух больше",
            ],
            [
              "This is the smallest flat.",
              "Это самая маленькая квартира.",
              "которая из многих самая",
            ],
            ["My flat is very small.", "Моя квартира очень маленькая.", "насколько она такая"],
            [
              "My flat is too small.",
              "Моя квартира слишком маленькая.",
              "что жить в ней тесно",
            ],
          ],
        },
        {
          id: "chem-razlichat-tri-voprosa",
          kind: "explain",
          text: [
            "Три прошлых модуля отвечали на разные вопросы, и путать их не надо.",
            "Модуль «Больше и меньше» сравнивает две вещи, «Самый» выделяет одну из многих.",
            "Этот модуль не сравнивает вовсе: вещь одна, и сказано только, насколько она такая.",
            "Различить их проще всего по переводу: «меньше», «самая маленькая», «очень маленькая».",
          ],
        },
        {
          id: "slovar-vpechatleniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "strange", translation: "странный", example: "The end is really strange.", hint: "/streɪndʒ/" },
            { term: "scary", translation: "страшный", example: "Was the film scary?", hint: "/ˈskeəri/" },
            { term: "almost", translation: "почти", example: "I almost left.", hint: "/ˈɔːlməʊst/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-postavit-a-lot",
          kind: "choice",
          prompt: "Фильм тебе очень понравился. Какая запись верна?",
          options: [
            { text: "I a lot liked the film." },
            { text: "I liked a lot the film." },
            { text: "I liked the film a lot.", correct: true },
          ],
          hint: "Оборот a lot идёт последним, после того, что понравилось.",
          why:
            "I liked the film a lot. Между действием и самим фильмом оборот a lot " +
            "не встаёт, он идёт в конец строки.",
        },
        {
          id: "z2-dopisat-really",
          kind: "gap",
          prompt:
            "Ты очень любишь этот магазин. Допиши наречие меры перед действием.",
          before: "I ",
          after: " like this shop.",
          answer: "really",
          hint: "Перед действием встаёт не a lot и не so much, а третье наречие меры.",
          why:
            "I really like this shop. Оборот a lot стоял бы в конце строки, а " +
            "перед действием идёт really.",
        },
        {
          id: "z3-otmetit-meru-v-konce",
          kind: "hottext",
          prompt: "Отметь строки, где мера стоит в конце.",
          parts: [
            { text: "I liked the film a lot.", selectable: true, correct: true },
            { text: " · " },
            { text: "I really like this film.", selectable: true },
            { text: " · " },
            { text: "Thank you so much.", selectable: true, correct: true },
            { text: " · " },
            { text: "The film is really scary.", selectable: true },
          ],
          hint: "Смотри на последнее слово каждой строки.",
          why:
            "Мера в конце у первой и третьей строк. Во второй really стоит перед " +
            "действием, в четвёртой — перед прилагательным.",
        },
        {
          id: "z4-sobrat-blagodarnost",
          kind: "order",
          prompt: "Собери строку: большое спасибо за билет.",
          items: ["for the ticket.", "so much", "Thank you"],
          answer: [2, 1, 0],
          hint: "Оборот so much идёт сразу после действия.",
          why:
            "Thank you so much for the ticket. Мера встаёт после действия, а за " +
            "что благодарят — уже после неё.",
        },
        {
          id: "z5-skazat-o-konce-filma",
          kind: "short",
          prompt:
            "Конец фильма очень странный — скажи это словом really. Начни с The end.",
          answer: "The end is really strange.",
          accept: ["The end is really strange"],
          hint: "Здесь мера при прилагательном, а не при действии.",
          why:
            "The end is really strange. Перед прилагательным really стоит слева, " +
            "как very и so.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pismo-o-pokupkah",
      title: "Читаем письмо о покупках",
      estimatedMinutes: 13,
      outcome: "находить в письме, что подошло, а что нет",

      blocks: [
        {
          id: "zachem-chitat-pismo",
          kind: "explain",
          text: [
            "Дана съездила в новый торговый центр и написала об этом Данияру.",
            "В таком письме ищут две вещи: что человек взял и что не взял.",
            "Подсказывают их наречия меры: too говорит о помехе, а really и quite просто усиливают.",
            "Ниже письмо, и вопросы будут об этих двух вещах.",
          ],
        },
        {
          id: "pismo-dany",
          kind: "text",
          title: "Hi Daniyar!",
          genre: "email",
          body: [
            "I was at the new shopping centre yesterday. It is really big.",
            "There were too many people, so we waited a long time.",
            "I wanted a suit for work, but every suit was too expensive for me.",
            "So I bought a tie and a pair of trainers. The trainers fit me very well.",
            "The cafe there is quite good, but the coffee was too hot.",
            "There is a foreign shop near the entrance. The jewellery there is so beautiful.",
            "That shop sends everything by post. The prices there are surprising.",
            "See you soon, Dana",
          ],
          glossary: [
            { term: "shopping centre", translation: "торговый центр" },
            { term: "a pair of", translation: "пара" },
            { term: "near the entrance", translation: "у входа" },
          ],
        },
        {
          id: "kak-iskat-pomehu",
          kind: "note",
          tone: "info",
          text:
            "Помеху ищут по слову too рядом с прилагательным.\n\nСразу за ним " +
            "часто стоит и то, кому не подошло: for me, for us.",
        },
        {
          id: "slovar-pisma",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "foreign", translation: "иностранный", example: "There is a foreign shop near the entrance.", hint: "/ˈfɒrən/" },
            { term: "surprising", translation: "неожиданный", example: "The prices there are surprising.", hint: "/səˈpraɪzɪŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-dana-kupila",
          about: "pismo-dany",
          kind: "choice",
          prompt: "Что Дана купила?",
          options: [
            { text: "Костюм и галстук." },
            { text: "Галстук и кроссовки.", correct: true },
            { text: "Костюм и кроссовки." },
          ],
          hint: "Про костюм в письме сказано отдельно, и там стоит too.",
          why:
            "Галстук и кроссовки. Костюм оказался слишком дорог, и потому Дана его " +
            "не взяла.",
        },
        {
          id: "z2-pochemu-ne-kupila-kostyum",
          about: "pismo-dany",
          kind: "short",
          prompt:
            "Какое одно слово в письме говорит, что костюм был не по карману? Ответь одним словом по-английски.",
          answer: "expensive",
          accept: ["Expensive", "too expensive"],
          hint: "Ищи прилагательное сразу после too.",
          why: "Every suit was too expensive for me.",
        },
        {
          id: "z3-kak-prisylayut",
          about: "pismo-dany",
          kind: "short",
          prompt: "Как иностранный магазин присылает покупки? Ответь одним словом по-английски.",
          answer: "post",
          accept: ["Post", "by post"],
          hint: "Ответ стоит в предпоследней строке письма.",
          why: "That shop sends everything by post. По-британски почта — post.",
        },
        {
          id: "z4-otmetit-verno-o-pisme",
          about: "pismo-dany",
          kind: "hottext",
          prompt: "Отметь то, что верно по письму.",
          parts: [
            { text: "кроссовки подошли", selectable: true, correct: true },
            { text: " · " },
            { text: "кофе был слишком горячий", selectable: true, correct: true },
            { text: " · " },
            { text: "в центре было мало людей", selectable: true },
            { text: " · " },
            { text: "кафе оказалось плохим", selectable: true },
          ],
          hint: "Про людей и про кафе в письме сказано прямо.",
          why:
            "Верно первое и второе. Людей было слишком много, а кафе Дана назвала " +
            "quite good.",
        },
        {
          id: "z5-chto-ponravilos-bez-pomehi",
          about: "pismo-dany",
          kind: "choice",
          prompt:
            "Про украшения Дана пишет: The jewellery there is so beautiful. Что это значит?",
          options: [
            { text: "Украшения такие красивые, и ничто ей не помешало.", correct: true },
            { text: "Украшения слишком красивые, и она их не взяла." },
            { text: "Украшения были дороги." },
          ],
          hint: "Наречие меры здесь so, а не too.",
          why:
            "Украшения такие красивые. Слово so только усиливает прилагательное, а о " +
            "помехе сказало бы too.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-chto-ne-podoshlo",
      title: "Слушаем, что не подошло",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что не подошло",

      blocks: [
        {
          id: "zachem-slushat-o-pokupke",
          kind: "explain",
          text: [
            "В магазине покупатель и продавец быстро перебирают вещи.",
            "Слушать надо две вещи: что не подошло и что помешало.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-v-magazine",
          kind: "audio",
          caption: "Разговор в магазине",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "This phone is quite cheap. — But the screen is too small for me. — " +
            "And this one? — The digital camera is really good, and the screen is " +
            "big. — Fine. I like this technology a lot.",
        },
        {
          id: "chto-slushat-v-magazine",
          kind: "note",
          tone: "info",
          text:
            "Слушай, что покупателю не подошло у первого телефона.\n\nИ слушай, " +
            "чем хорош второй: об этом и будут вопросы.",
        },
        {
          id: "slovar-tehniki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "digital", translation: "цифровой", example: "The digital camera is really good.", hint: "/ˈdɪdʒɪtl/" },
            { term: "technology", translation: "техника", example: "I like this technology a lot.", hint: "/tekˈnɒlədʒi/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chto-ne-podoshlo",
          about: "zapis-v-magazine",
          kind: "short",
          prompt:
            "Что у первого телефона не подошло покупателю? Ответь одним словом по-английски.",
          answer: "screen",
          accept: ["Screen", "the screen"],
          hint: "Ответ стоит сразу после слова but.",
          why: "But the screen is too small for me.",
        },
        {
          id: "z2-pochemu-ne-podoshel",
          about: "zapis-v-magazine",
          kind: "choice",
          prompt: "Почему первый телефон не подошёл?",
          options: [
            { text: "Он был слишком дорогой." },
            { text: "У него был слишком маленький экран.", correct: true },
            { text: "У него была плохая камера." },
          ],
          hint: "Про цену первого телефона в записи сказано другое.",
          why:
            "Слишком маленький экран. Цену покупатель как раз назвал невысокой: " +
            "quite cheap.",
        },
        {
          id: "z3-chem-horosh-vtoroy",
          about: "zapis-v-magazine",
          kind: "short",
          prompt:
            "Что во втором телефоне названо really good? Ответь одним словом по-английски.",
          answer: "camera",
          accept: ["Camera", "the camera", "digital camera"],
          hint: "Ответ стоит в четвёртой реплике записи.",
          why: "The digital camera is really good, and the screen is big.",
        },
        {
          id: "z4-otmetit-uslyshannoe",
          about: "zapis-v-magazine",
          kind: "hottext",
          prompt: "Отметь то, что сказано в записи.",
          parts: [
            { text: "первый телефон недорогой", selectable: true, correct: true },
            { text: " · " },
            { text: "экран второго телефона большой", selectable: true, correct: true },
            { text: " · " },
            { text: "покупатель ушёл ни с чем", selectable: true },
            { text: " · " },
            { text: "камера первого телефона плохая", selectable: true },
          ],
          hint: "Про камеру говорят только один раз, и не о первом телефоне.",
          why:
            "Сказано первое и второе. Покупателю второй телефон понравился, а " +
            "камеру первого никто не обсуждал.",
        },
        {
          id: "z5-skazat-vsluh-o-tehnike",
          kind: "speak",
          prompt: "Скажи вслух: экран слишком мал для меня.",
          phrase: "The screen is too small for me.",
          translation: "Экран слишком мал для меня.",
          hint: "Сначала прилагательное с наречием меры, потом for me.",
          why:
            "The screen is too small for me. Оборот for me и говорит, кому экран " +
            "не подошёл.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-pismo-o-pokupke",
      title: "Пишем письмо о покупке",
      estimatedMinutes: 15,
      outcome: "проверять письмо: у каждого too сказано, чем дело кончилось",

      blocks: [
        {
          id: "zachem-proveryat-pismo",
          kind: "explain",
          text: [
            "Данияр написал другу о покупке, и тому пришлось переспрашивать: купил или нет?",
            "В таком письме пропускают не слова, а исход дела.",
            "В разговоре переспрашивают сразу, а письмо читают без тебя.",
            "Поэтому в письме о покупке после too пишут, чем дело кончилось.",
            "Проверить можно так: у каждого too найди, что из-за него вышло.",
          ],
        },
        {
          id: "nazvano-li-posledstvie",
          kind: "table",
          caption: "Названо ли последствие",
          zvuchat: [
            "The suit was too expensive, so I did not buy it.",
            "The suit was too expensive, and I was unhappy.",
            "The suit was too expensive.",
            "The tie was really nice, and I bought it.",
          ],
          head: ["Строка", "Что вышло", "Годится в письме"],
          rows: [
            ["The suit was too expensive, so I did not buy it.", "не купил", "да"],
            ["The suit was too expensive, and I was unhappy.", "остался недоволен", "да"],
            ["The suit was too expensive.", "не сказано", "нет"],
            ["The tie was really nice, and I bought it.", "купил", "да"],
          ],
        },
        {
          id: "kogda-posledstvie-ne-nuzhno",
          kind: "explain",
          text: [
            "Последствие нужно не в каждой строке письма.",
            "Там, где стоит really, quite или very, читатель ничего плохого не ждёт.",
            "А после too ждёт: слово сказало, что мера мешает.",
            "Значит рядом с ним пишут, чем дело кончилось.",
            "В разговоре так подробно не говорят: там можно переспросить сразу.",
            "То же делает оборот for me: он называет, кому именно мера мешала.",
          ],
        },
        {
          id: "obrazets-pisma",
          kind: "example",
          caption: "Письмо Данияра",
          perevod: {
            "I was at the phone shop on Friday.":
              "В пятницу я был в магазине телефонов.",
            "There were too many people, so I did not stay.":
              "Народу было слишком много, и я не стал задерживаться.",
            "The first phone was too expensive for me, and I was unhappy.":
              "Первый телефон был для меня слишком дорогой, и я расстроился.",
            "The second phone is quite small. I like the screen a lot.":
              "Второй телефон довольно маленький. Экран мне очень нравится.",
          },
          zvuchat: [
            "I was at the phone shop on Friday.",
            "There were too many people, so I did not stay.",
            "The first phone was too expensive for me, and I was unhappy.",
            "The second phone is quite small. I like the screen a lot.",
          ],
          text:
            "I was at the phone shop on Friday.\nThere were too many people, so I did not stay.\nThe first phone was too expensive for me, and I was unhappy.\nThe second phone is quite small. I like the screen a lot.",
          explain:
            "У обоих too названо, чем дело кончилось: Данияр не остался и остался " +
            "недоволен ценой. У quite последствия нет, и оно не нужно.",
        },
        {
          id: "slovar-pisma-o-pokupke",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "unhappy", translation: "недовольный", example: "The phone was too expensive, and I was unhappy.", hint: "/ʌnˈhæpi/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-pismu",
          kind: "choice",
          prompt:
            "В письме стоит одна строка: The suit was too expensive. Чего в ней не хватает?",
          options: [
            { text: "Того, чем дело кончилось.", correct: true },
            { text: "Слова for и того, кому дорого." },
            { text: "Второго наречия меры." },
          ],
          hint: "Спроси себя, чего читатель ждёт после слова too.",
          why:
            "Того, чем дело кончилось. Строка сообщила о помехе, а исход остался за " +
            "кадром, и переспросить читатель не может.",
        },
        {
          id: "z2-dopisat-posledstvie",
          kind: "gap",
          prompt:
            "Допиши последствие: людей было слишком много, и потому Данияр не остался.",
          before: "There were too many people, so I did not ",
          after: ".",
          answer: "stay",
          hint: "После did not действие стоит без окончания.",
          why:
            "There were too many people, so I did not stay. Слово so и вводит " +
            "последствие.",
        },
        {
          id: "z3-otmetit-polnye-stroki",
          kind: "hottext",
          prompt: "Отметь строки, где последствие названо.",
          parts: [
            { text: "The room was too small, so we changed it.", selectable: true, correct: true },
            { text: " · " },
            { text: "The room was too small.", selectable: true },
            { text: " · " },
            { text: "The bag was too heavy, and I left it.", selectable: true, correct: true },
            { text: " · " },
            { text: "The bag was too heavy for me.", selectable: true },
          ],
          hint: "Последствие вводят слова so и and.",
          why:
            "Названо в первой и третьей строках. Четвёртая говорит, кому тяжело, " +
            "но не говорит, чем дело кончилось.",
        },
        {
          id: "z4-ispravit-stroku-pisma",
          kind: "short",
          prompt:
            "Строку The trainers were too big допиши так, чтобы стало ясно: поэтому Данияр их не купил. Запиши строку целиком.",
          answer: "The trainers were too big, so I did not buy them.",
          accept: [
            "The trainers were too big, so I did not buy them",
            "The trainers were too big, and I did not buy them.",
            "The trainers were too big, and I did not buy them",
          ],
          hint: "Последствие идёт после запятой, со словом so или and.",
          why:
            "The trainers were too big, so I did not buy them. В письме после too " +
            "читатель ждёт, чем дело кончилось.",
        },
        {
          id: "z5-napisat-pismo",
          kind: "essay",
          prompt:
            "Напиши другу о покупке четырьмя строками. В одной строке поставь too и назови последствие, в другой — too many и последствие, в третьей — quite или really без последствия.",
          minWords: 20,
          sample:
            "I was at the phone shop on Friday.\nThere were too many people, so I did not stay.\nThe first phone was too expensive for me, and I was unhappy.\nThe second phone is quite small. I like the screen a lot.",
          checklist: [
            "есть строка с too и прилагательным",
            "у неё названо последствие: so или and",
            "есть строка с too many и вещью во множественном числе",
            "есть строка с quite или really, и последствия у неё нет",
          ],
          hint:
            "Бери обороты, которые знаешь: too expensive for me, too many people, quite small, a lot.",
          why:
            "Письмо работает, когда после каждого too читатель узнаёт, чем дело " +
            "кончилось: переспросить он не может.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину ошибки, отличить меру от помехи, услышать
      // разговор, дописать последствие.

      // ---- итог 1 ----
      {
        id: "q-zachem-narechie-mery",
        kind: "choice",
        outcome: "говорить, насколько: really good, quite expensive",
        prompt:
          "Две строки: The shop is good и The shop is really good. Что добавляет второе слово?",
        options: [
          { text: "Оно говорит, насколько магазин хорош.", correct: true },
          { text: "Оно говорит, где магазин." },
          { text: "Оно говорит, что магазин один такой." },
        ],
        hint: "Спроси себя, на какой вопрос отвечает слово really.",
        why:
          "Оно говорит, насколько. Место магазина и его единственность наречие " +
          "меры не называет.",
      },
      {
        id: "q-vybrat-silu-slova",
        kind: "short",
        outcome: "говорить, насколько: really good, quite expensive",
        prompt:
          "Данияр написал: The review is very good. Он хотел похвалить сдержаннее — «довольно хороший». Перепиши строку.",
        answer: "The review is quite good.",
        accept: ["The review is quite good"],
        hint: "Строка верна, но сила слова не та: нужно слово послабее.",
        why:
          "The review is quite good. Строка с very ошибки не содержит — она " +
          "говорит «очень», а Данияр хотел сказать сдержаннее.",
      },
      {
        id: "q-kakoe-slovo-slabee",
        kind: "choice",
        outcome: "говорить, насколько: really good, quite expensive",
        prompt: "Дана сказала: The shop is quite good. Как она оценила магазин?",
        options: [
          { text: "Магазин отличный." },
          { text: "Магазин хороший, но не отличный.", correct: true },
          { text: "Магазин плохой." },
        ],
        hint: "Перед словом good это quite значит «довольно».",
        why:
          "Хороший, но не отличный. Про отличный она сказала бы very good или " +
          "really good.",
      },

      // ---- итог 2 ----
      {
        id: "q-pochemu-tut-too",
        kind: "choice",
        outcome: "говорить, что мешает: too small, too expensive",
        prompt:
          "Почему в строке The jacket was too small стоит too, а не very?",
        options: [
          { text: "Потому что куртка была маленькая." },
          { text: "Потому что very ставят только с длинными словами." },
          { text: "Потому что куртку не вышло надеть.", correct: true },
        ],
        hint: "Спроси, чем дело кончилось.",
        why:
          "Потому что надеть её не вышло. Very сказало бы только о размере и о " +
          "помехе промолчало.",
      },
      {
        id: "q-ispravit-too-happy",
        kind: "short",
        outcome: "говорить, что мешает: too small, too expensive",
        prompt:
          "Данияр хотел сказать, что очень рад покупке, и написал: I am too happy. Запиши строку без ошибки.",
        answer: "I am very happy.",
        accept: [
          "I am very happy",
          "I am really happy.",
          "I am really happy",
          "I am so happy.",
          "I am so happy",
        ],
        hint: "Радости ничто не мешает, а выбранное слово говорит об обратном.",
        why:
          "I am very happy. Слово too сказало бы, что радости больше нужного, — " +
          "а по-русски «очень рад» это very, really или so.",
      },
      {
        id: "q-dva-too-v-odnoy-stroke",
        kind: "short",
        outcome: "говорить, что мешает: too small, too expensive",
        prompt:
          "В строке The suit was too expensive, and the tie was expensive too слово too стоит дважды. Какое из них значит «слишком»? Ответь: первое или второе.",
        answer: "первое",
        accept: ["Первое", "1", "первое too", "the first"],
        hint: "Смотри, что стоит сразу после каждого too.",
        why:
          "Первое: за ним идёт прилагательное. Второе стоит в конце строки и " +
          "значит «тоже» — галстук был дорогим наравне с костюмом.",
      },

      // ---- итог 3 ----
      {
        id: "q-ispravit-to-me",
        kind: "short",
        outcome: "называть, кому слишком: too small for me",
        prompt:
          "Ученик написал: The box is too deep to me. Запиши строку без ошибки.",
        answer: "The box is too deep for me.",
        accept: ["The box is too deep for me"],
        hint: "Ошибка в коротком слове перед me.",
        why:
          "The box is too deep for me. Слово to сказало бы «глубока КО мне», а " +
          "нужен тот, кому вещь не подошла.",
      },
      {
        id: "q-zachem-for-me",
        kind: "choice",
        outcome: "называть, кому слишком: too small for me",
        prompt: "Зачем в строке нужен оборот for me?",
        options: [
          { text: "Он усиливает прилагательное." },
          { text: "Он говорит, кому именно не подошло.", correct: true },
          { text: "Он заменяет слово too." },
        ],
        hint: "Прочитай строку без него и посмотри, что осталось неясным.",
        why:
          "Он говорит, кому не подошло. Одна и та же вещь мала взрослому и велика " +
          "ребёнку.",
      },

      // ---- итог 4 ----
      {
        id: "q-ispravit-mnozhestvennoe",
        kind: "short",
        outcome: "говорить, что вещей слишком много: too many people",
        prompt:
          "Ученик написал: There were too many toy in the box. Запиши строку без ошибки.",
        answer: "There were too many toys in the box.",
        accept: ["There were too many toys in the box"],
        hint: "Ошибка в окончании у вещи.",
        why:
          "There were too many toys in the box. Оборот too many берёт вещь во " +
          "множественном числе.",
      },
      {
        id: "q-so-many-ili-too-many",
        kind: "choice",
        outcome: "говорить, что вещей слишком много: too many people",
        prompt:
          "Дана обрадовалась: игрушек в магазине было очень много. Какой оборот она возьмёт?",
        options: [
          { text: "too many" },
          { text: "very many" },
          { text: "so many", correct: true },
        ],
        hint: "Упрёка в её словах нет.",
        why:
          "So many. Оборот too many сказал бы, что число мешало, а Дана " +
          "обрадовалась.",
      },

      // ---- итог 5 ----
      {
        id: "q-ispravit-mesto-so-much",
        kind: "short",
        outcome: "называть меру при действии: I liked it a lot",
        prompt:
          "Ученик написал: I so much like this shop. Запиши строку без ошибки.",
        answer: "I like this shop so much.",
        accept: [
          "I like this shop so much",
          "I really like this shop.",
          "I really like this shop",
        ],
        hint: "Оборот so much стоит не там, где стояло бы really.",
        why:
          "I like this shop so much. Оборот so much идёт после действия, а перед " +
          "действием на его месте стоит really.",
      },
      {
        id: "q-pochemu-a-lot-v-konce",
        kind: "choice",
        outcome: "называть меру при действии: I liked it a lot",
        prompt:
          "Данияр написал: I liked the film a lot и The film is really scary. Почему мера в этих строках стоит в разных местах?",
        options: [
          { text: "Потому что первая строка о прошлом, а вторая о настоящем." },
          { text: "Потому что в первой мера при действии, а во второй при прилагательном.", correct: true },
          { text: "Потому что a lot длиннее, чем really." },
        ],
        hint: "Посмотри, к какому слову цепляется мера в каждой строке.",
        why:
          "Потому что в первой мера при действии, а во второй при прилагательном. " +
          "При прилагательном мера идёт слева, а обороты a lot и so much — после " +
          "действия.",
      },

      // ---- итог 6 ----
      {
        id: "q-najti-pomehu-v-pisme",
        kind: "short",
        outcome: "находить в письме, что подошло, а что нет",
        prompt:
          "В письме две строки: The cafe is quite good. The coffee was too hot. О какой из двух вещей сказано, что она помешала? Ответь одним словом по-английски.",
        answer: "coffee",
        accept: ["Coffee", "the coffee"],
        hint: "Помеху выдаёт наречие меры, а не сама вещь.",
        why:
          "Coffee. Про кафе стоит quite good, а помеху обещает только слово too.",
      },
      {
        id: "q-chto-znachit-fit-me",
        kind: "short",
        outcome: "находить в письме, что подошло, а что нет",
        prompt:
          "В письме стоит: The trainers fit me very well. Подошли кроссовки или нет? Ответь одним словом: да или нет.",
        answer: "да",
        accept: ["Да", "подошли", "yes"],
        hint: "Слова too в строке нет вовсе.",
        why:
          "Да. Действие fit и значит «подошли», а very well его усиливает.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-chto-malo",
        kind: "short",
        outcome: "слышать в разговоре, что не подошло",
        zvuk:
          "This bag is quite cheap. — But it is too small for me. — And this one? — Better.",
        prompt:
          "Послушай. Что сказано о первой сумке? Ответь одним словом по-английски: она мала или дорога?",
        answer: "small",
        accept: ["Small", "too small"],
        hint: "Про цену сказано quite cheap.",
        why: "But it is too small for me. Цену покупатель назвал невысокой.",
      },
      {
        id: "q-uslyshat-chto-pomeshalo",
        kind: "short",
        outcome: "слышать в разговоре, что не подошло",
        zvuk:
          "How was the sale? — There were too many people. — Did you buy the suit? — No, it was too expensive.",
        prompt:
          "Послушай. Купил ли он костюм? Ответь одним словом: да или нет.",
        answer: "нет",
        accept: ["Нет", "не купил", "no"],
        hint: "Ответ стоит после второго вопроса записи.",
        why: "No, it was too expensive. Цена и помешала покупке.",
      },

      // ---- итог 8 ----
      {
        id: "q-dopisat-posledstvie-v-pismo",
        kind: "short",
        outcome: "проверять письмо: у каждого too сказано, чем дело кончилось",
        prompt:
          "К строке письма The coffee was too hot допиши последствие: и я его не выпил. Запиши строку целиком.",
        answer: "The coffee was too hot, so I did not drink it.",
        accept: [
          "The coffee was too hot, so I did not drink it",
          "The coffee was too hot, and I did not drink it.",
          "The coffee was too hot, and I did not drink it",
        ],
        hint: "Последствие вводят слова so или and.",
        why:
          "The coffee was too hot, so I did not drink it. Без второй половины " +
          "строка обрывается на полуслове: жар мешал, а исход остался за кадром.",
      },
      {
        id: "q-nuzhno-li-posledstvie-vezde",
        kind: "choice",
        outcome: "проверять письмо: у каждого too сказано, чем дело кончилось",
        prompt:
          "В письме стоит строка The tie is quite nice. Нужно ли дописывать к ней последствие?",
        options: [
          { text: "Да, к каждой строке письма." },
          { text: "Нет, последствия в письмах не пишут вовсе." },
          { text: "Нет: quite ничего плохого не обещало.", correct: true },
        ],
        hint: "Вспомни, какое наречие меры обещает читателю помеху.",
        why:
          "Нет: помеху обещает только too. После quite, really и very читатель " +
          "ничего плохого не ждёт.",
      },
      {
        id: "q-pochemu-pismo-ne-yasno",
        kind: "choice",
        outcome: "проверять письмо: у каждого too сказано, чем дело кончилось",
        prompt:
          "Письмо целиком: I saw a suit. It was too expensive. Почему друг переспросит?",
        options: [
          { text: "Непонятно, купил Данияр костюм или нет.", correct: true },
          { text: "Непонятно, где магазин." },
          { text: "В письме нет наречия меры." },
        ],
        hint: "Наречие меры стоит верно — не хватает другого.",
        why:
          "Непонятно, купил или нет. Слово too обещало помеху, а чем дело " +
          "кончилось, письмо не говорит.",
      },
    ],
  },
};

export default module;
