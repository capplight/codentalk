import type { Module } from "@/lib/content/types";

/**
 * Модуль 19 курса «Английский · Elementary»: кто-то и что-то.
 *
 * Программа: docs/programma-english-elementary.md, модуль 19 — «говорить о
 * неизвестном или неважном».
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «НЕОПРЕДЕЛЁННОЕ МЕСТОИМЕНИЕ».
 *
 * Так эти слова зовут и русские учебники, и источник (indefinite pronouns), и
 * словник A2 Key помечает каждое из них `(pron)`. Слово «местоимение» курс уже
 * вводил, «неопределённое» объясняется в уроке 1 на месте: местоимение, которое
 * не называет, кто именно. Ярлыков вроде «слова о незнакомом» в тексте для
 * ученика нет ни разу.
 *
 * ВТОРОЕ ИМЯ, И ОНО НЕ ОПИСКА. Слова `somewhere`, `anywhere`, `everywhere` —
 * НАРЕЧИЯ МЕСТА, а не местоимения. Так помечает их словник — `somewhere (adv)`,
 * — и руководство A2 Key держит для них отдельную строку: «Adverbs … Place:
 * here, there, etc.» (с. 52). Поэтому урок 5 называет их своим именем, а не
 * подкладывает под главное имя модуля. Общее у них с местоимениями — устройство
 * слова (some-, any-, every-) и правило отрицания, и об этом урок говорит прямо.
 *
 * СТРОКА ПРОГРАММЫ С ИСТОЧНИКАМИ НЕ РАЗОШЛАСЬ — ВПЕРВЫЕ ЗА ТРИ МОДУЛЯ. Она
 * обещала `something`, `anyone`, `nobody`, `everywhere`; все четыре стоят в
 * словнике A2 Key, а руководство на с. 52 называет их разряд прямо:
 * «Quantitative: one, something, everybody, etc.», «Indefinite: some, any,
 * something, one, etc.». Расширена она не по ошибке, а по объёму: четыре слова
 * стояли там, где источник даёт семь отдельных граф A2, и половина из них — не
 * слова, а обороты. Разбор в программе.
 *
 * МЕРКА ВЗЯТА ОДНА НА ВЕСЬ МОДУЛЬ, И ЭТО ГЛАВНОЕ РЕШЕНИЕ ЗДЕСЬ. English Grammar
 * Profile ставит на B1 три вещи, которые модуль всё-таки берёт: `something` и
 * `nobody` подлежащим, `anyone` и `nothing` дополнением, слова на `-where`.
 * Все они стоят в словнике A2 Key — то есть входят в требования экзамена, к
 * которому ведёт ступень. Это та же мерка, по которой в модуль 18 вернулся
 * `enough`, и применена она ко всем одинаково: единственное слово этого ряда,
 * которого в словнике НЕТ, — `nowhere`, и его в модуле нет тоже, хотя Oxford
 * помечает его A2. Кто рассудит иначе, снимает не слово, а всю мерку сразу.
 *
 * ДВОЙНОЕ ОТРИЦАНИЕ ПРИШЛОСЬ ПОДТВЕРЖДАТЬ ОТКРЫТЫМ ИСТОЧНИКОМ, И БЕЗ ЭТОГО
 * МОДУЛЯ БЫ НЕ БЫЛО. Русский двойное отрицание требует («я никого не видел»),
 * английский его не терпит, и это первая ошибка, которую здесь сделает наш
 * ученик. Наши материалы про это молчат: графа A2 «FORM: NEGATIVE + 'ANYTHING'»
 * — разрешение поставить `anything`, а не запрет ставить `nobody`. Вывести из
 * неё запрет значило бы повторить ошибку модулей 7, 10, 11, 16 и 17. Поэтому
 * запрет стоит на выписке из Википедии — docs/istochniki-norma-yazyka.md,
 * пункт 12, — и сформулирован так, как там написано: не «так никто не говорит»
 * (многие разновидности английского как раз говорят), а «так не говорят на
 * правильном английском».
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК:
 *
 * - `nowhere` — нет в словнике A2 Key, см. мерку выше. Отсюда следствие для
 *   урока 5: «нигде» ученик говорит только через `not … anywhere`, и второго
 *   способа модуль не даёт вовсе;
 * - `something` с придаточным («Something that I like…») — B2, «FORM/USE: WITH
 *   RELATIVE CLAUSES, FOCUS»;
 * - `almost everyone`, `absolutely anything` — B1, «FORM/USE: PREMODIFIERS,
 *   INTENSIFYING»;
 * - `one` и `ones` вместо названного — это модуль 20 по программе;
 * - `no one` в два слова — в словнике есть, но модуль даёт `nobody`: два
 *   написания одного слова в первом же уроке о нём только мешают.
 *
 * ЧЕТЫРЕ ВЕЩИ, СНЯТЫЕ ПО РАЗБОРУ МЕТОДИСТА 23 АВГУСТА. Все четыре я взял, не
 * заметив, и каждая ломала мерку, объявленную выше:
 *
 * - **`nothing` подлежащим — это B2**, а не B1, как я сперва записал. В графе
 *   B1 «FORM: OBJECT OR COMPLEMENT» `nothing` стоит ДОПОЛНЕНИЕМ («I have
 *   nothing to do», «there was nothing on the wall»); подлежащим он впервые
 *   появляется в B2 «FORM: SUBJECT» («nowadays nothing is free»). Поэтому урок
 *   3 говорит `There is nothing on the bookshelf`, а не `Nothing is on the
 *   bookshelf`: оборот тот же по смыслу и остаётся в графе B1. Подлежащим у нас
 *   работает только `nobody` — он назван в графе B1 прямо;
 * - **прилагательное после `nothing`** — B1, ADJECTIVES position, «FORM: WITH
 *   PRONOUN». Строка урока 8 «There is nothing valuable inside» была построена
 *   слово в слово по примеру этой графы, да ещё и на слове `valuable`, которого
 *   нет в словнике A2 Key (Oxford ставит его на B1). Осталось `There is nothing
 *   inside`;
 * - **вопрос `Who called you?` со смысловым глаголом** — B1, CLAUSES
 *   interrogatives, «FORM: 'WH-' INTERROGATIVE, SUBJECT». Модуль 1 этой же
 *   ступени взял `Who was there?` и только его, с опорой на CEFR с. 79. Здесь
 *   стоит `Did anybody call you today?` — заодно это тот самый оборот, которому
 *   учит урок 2;
 * - **`I have already asked…`** — Present Perfect и слово `already`
 *   принадлежат модулям 22 и 23 по программе. Строка заменена на
 *   `I asked the manager too`, карточка `already` снята.
 *
 * СЛОВАРЬ МОДУЛЯ. Тридцать карточек, из них новых для ступени семнадцать.
 *
 * ДВЕНАДЦАТЬ КАРТОЧЕК — ОПОРНЫЕ СЛОВА САМОГО МОДУЛЯ, и они здесь по правилу,
 * выведенному после разбора модулей 17 и 18: слова, на которых модуль стоит,
 * ученик обязан получить на этой ступени. Oxford помечает их A1, и проверка
 * новизны на них молчит, — но между ступенями нет ссылок на память (решение
 * владельца от 16 августа), а модуль о `nobody` без карточки `nobody` написать
 * нельзя. Одиннадцать из них — сами местоимения, двенадцатое — `waiter`:
 * карточки у него не было ни в одном модуле Elementary, а урок 2 на нём стоит.
 *
 * `somewhere` и `anybody` карточки здесь НЕ получают: они уже даны на ступени —
 * в модулях 18 и 10 соответственно. Работают в уроках наравне с прочими.
 */
const module: Module = {
  slug: "kto-to-i-chto-to",
  title: "Кто-то и что-то",

  outcomes: [
    "говорить о неизвестном человеке и о неизвестной вещи: someone, something",
    "строить отрицание через any-: I didn't see anyone",
    "говорить через nobody и nothing, не ставя второго отрицания",
    "говорить обо всех и обо всём: everyone is, everything is",
    "называть неизвестное место: somewhere, anywhere, everywhere",
    "ставить уточнение после местоимения: something cold, something else",
    "находить в письме, кто что видел и чего не нашли",
    "слышать в разговоре, кто что нашёл",
    "проверять письмо о случившемся: названо, кого и чего не видели",
  ],

  sources: [
    {
      ref: "Cambridge English, A2 Key handbook for teachers",
      section:
        "с. 52, Language specifications, раздел Pronouns: «Quantitative: one, " +
        "something, everybody, etc.» и «Indefinite: some, any, something, one, " +
        "etc.». Это опора всего модуля: требования экзамена ступени называют этот " +
        "разряд своим и приводят в примерах ровно наши слова. " +
        "УРОК 5 СТОИТ НА ДРУГОЙ СТРОКЕ ТОГО ЖЕ ПЕРЕЧНЯ, и это нарочно. Слова на " +
        "`-where` словник помечает наречиями (`somewhere (adv)`), а руководство " +
        "держит для них строку «Adverbs … Place: here, there, etc.». Поэтому урок " +
        "вводит их вторым именем — наречия места. " +
        "УРОК 8, ФОРМА ОТВЕТА. с. 29, раздел THE TASK: «The candidates should only " +
        "write ONE word, or a number, or a date, or a time for their answer» — " +
        "поэтому ответы на слух здесь односложные",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "Всё в подкатегории PRONOUNS «indefinite - thing, -one, -body etc». " +
        "A2, «FORM: SUBJECT»: «Can use a limited range of indefinite pronouns " +
        "('someone', 'everyone') as subjects, with a singular verb», пример " +
        "источника — «someone stole my luggage at the airport». Это уроки 1 и 4, и " +
        "оттуда же требование единственного числа глагола. " +
        "A2, «FORM: OBJECT OR COMPLEMENT»: «Can use an increasing range of " +
        "indefinite pronouns as objects or complements of prepositions», примеры — " +
        "«I have to call someone», «I have borrowed it from somebody». Урок 1. " +
        "A2, «FORM: NEGATIVE + 'ANYTHING'»: «Can use 'anything' after a negative " +
        "verb form», примеры — «You don't have to bring anything», «I can't find " +
        "anything because it is too dark». Урок 2. " +
        "A2, «FORM/USE: WITH ADJECTIVE, SPECIFYING»: «Can modify 'something' or " +
        "'anything' with an adjective, to make it more specific», примеры — «I " +
        "needed something new to wear», «You need to wear something comfortable», " +
        "«But I didn't find anything wrong». Урок 6. " +
        "A2, «FORM/USE: WITH 'TO' INFINITIVE, SPECIFYING», примеры — «Please, " +
        "bring something to drink», «I didn't have anything to wear on my " +
        "holidays». Урок 6. " +
        "A2, «FORM: WITH 'ELSE'»: «Can use indefinite pronouns with 'else'», " +
        "примеры — «Have you got something else to do on Saturday…», «but nothing " +
        "else», «I am looking for someone else to go with me». Урок 6. " +
        "A2, «USE: 'SOMETHING' IN VAGUE EXPRESSIONS»: «Can use 'something' in " +
        "vague expressions, to refer to things in a non-specific way», примеры — " +
        "«we can have a pizza or something else», «wine, coke or something». Урок " +
        "6, оборот `or something`. Сперва графа в уроки не попала; методист " +
        "назвал это потерей, и оборот дописан: он бытовой и стоит ровно на A2. " +
        "ЧТО ЗДЕСЬ ВЗЯТО ВЫШЕ ГРАФЫ, И ПО КАКОЙ МЕРКЕ. B1, «FORM: SUBJECT» — «an " +
        "increasing range … ('something', 'nobody') as subjects»; B1, «FORM: " +
        "OBJECT OR COMPLEMENT», LR 3 — там впервые названы `anyone`, `nothing` и " +
        "`everywhere`. Модуль их берёт, потому что все они стоят в словнике A2 " +
        "Key, то есть входят в требования экзамена ступени. Мерка одна на всех: " +
        "`nowhere`, которого в словнике нет, из модуля убран. " +
        "ЧЕГО НЕТ. Придаточное после местоимения — B2. Усилители `almost`, " +
        "`absolutely` — B1. Прилагательное после `nothing` и `somewhere` — B1, " +
        "ADJECTIVES position, «FORM: WITH PRONOUN»; урок 6 держится `something` и " +
        "`anything`, как названо в графе A2",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "docs/istochniki-norma-yazyka.md — выписки из открытых источников, пункт 12 (Википедия, статья «Double negative»)",
      section:
        "УРОК 2, ЗАПРЕТ НА ДВА ОТРИЦАНИЯ. «Chinese, Latin, German …, Dutch, " +
        "Japanese, Swedish and modern Standard English are examples of languages " +
        "that do not have negative concord». И там же о замене: «Languages without " +
        "negative concord typically have negative polarity items that are used in " +
        "place of additional negatives when another negating word already occurs. " +
        "Examples are 'ever', 'anything' and 'anyone' in the sentence 'I haven't " +
        "ever owed anything to anyone'». " +
        "ПОЧЕМУ ЭТО ПРИШЛОСЬ ИСКАТЬ СНАРУЖИ: наши материалы дают графу «FORM: " +
        "NEGATIVE + 'ANYTHING'», а это разрешение поставить `anything`, а не " +
        "запрет ставить `nobody`. Пять раз за две недели я выводил из таких граф " +
        "запрет и всякий раз объявлял ошибкой правильный английский. " +
        "И ЧЕГО ГОВОРИТЬ НЕЛЬЗЯ: та же статья пишет, что многие разновидности " +
        "английского двойное отрицание как раз употребляют. Поэтому врезка урока " +
        "говорит «на правильном английском так не говорят», а не «так никто не " +
        "говорит». Выписка целиком — docs/istochniki-norma-yazyka.md, пункт 12",
      license: "CC BY-SA 4.0",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ЧТЕНИЯ «Читаем письмо о пропаже». с. 55, шкала Reading " +
        "correspondence, графа A2: «Can understand short, simple personal " +
        "letters». Опора была пропущена и дописана по разбору методиста. " +
        "УРОК ПИСЬМА «Пишем письмо о случившемся». с. 83, шкала Correspondence, " +
        "графа A2: «Can compose short, simple notes, e-mails and text messages». " +
        "Там же A2: «Can exchange information by text message, by e-mail or in " +
        "short letters, responding to questions from the other person». Ученик " +
        "пишет другу письмо о том, что случилось, — это переписка, а не передача " +
        "сведений. " +
        "СОСЕДНЯЯ ШКАЛА ВЗЯТА БЫ ЗРЯ, и на этом уже обжигались дважды: с. 81 " +
        "разводит их прямо — Correspondence о переписке, «Notes, messages and " +
        "forms» о передаче сведений. В модуле 17 я взял вторую там, где нужна была " +
        "с. 66; в модуле 16 — строку графы A1 с отброшенным хвостом «with " +
        "reference to a dictionary». Здесь графа A2 и шкала переписки. " +
        "ЖАНР ТОТ ЖЕ, ЧТО У УРОКА ЧТЕНИЯ этого модуля (`email`), поэтому новых слов " +
        "уроку письма не нужно",
      license: "CC BY-NC-SA 4.0",
    },
    {
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Тридцать карточек модуля взяты из словника ступени. Новых для " +
        "ступени семнадцать; двенадцать — сами местоимения, у которых на ступени " +
        "Elementary карточки не было ни в одном модуле, хотя Oxford помечает их A1. " +
        "Правило выведено после разбора модулей 17 и 18: между ступенями нет " +
        "ссылок на память, значит опорные слова модуля даются здесь. " +
        "ЗНАЧЕНИЯ СВЕРЕНЫ С ОГРАНИЧИВАЮЩИМИ ПОМЕТАМИ СЛОВНИКА: `bright (adj – for " +
        "colours)` — карточка говорит о цвете и только о цвете; `glasses (n pl)` и " +
        "`scissors (n pl)` — только множественное число: scissors в уроке 3, " +
        "glasses в уроке 6; " +
        "`along (prep)` — предлог, а не наречие; `such (det)` и `fair (adj)` " +
        "рассматривались и сняты: у первого нет ограничивающего примера, у второго " +
        "два разных значения без пометы. " +
        "`chips` — БРИТАНСКОЕ СЛОВО, и это стоило проверки двумя разборами. Первый " +
        "разбор дал строку «chips (n pl) (Br Eng) (Am Eng: biscuit)», что явная " +
        "чепуха. Помета «(Am Eng: biscuit)» стоит одинаково в обоих разборах — " +
        "значит дело в двухстолбцовой вёрстке самой страницы, а не в разборщике. " +
        "Вывод держится на другом: тот же словник даёт обратную строку «French " +
        "fries (n) (Am Eng) (Br Eng: chips)» и примеры «egg and chips», «Chicken " +
        "and chips is my favourite dish». Значит `chips` — британское имя " +
        "жареного картофеля брусочками, и перевод карточки говорит именно это, " +
        "а не «чипсы»: русское «чипсы» — ложный друг, оно про crisps. " +
        "`somewhere` и `anybody` карточек не получают: даны в модулях 18 и 10",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словари произношения materials/ipa-en-uk.txt и materials/wikipron-en-uk.tsv",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə` (подтверждено владельцем 22 августа " +
        "2026) — отсюда `puzzle` как `/ˈpʌzl/`. " +
        "ВТОРОЙ СЛОВАРЬ ПОПРАВИЛ ПЕРВЫЙ, И ЭТО РОВНО ТОТ СЛУЧАЙ, РАДИ КОТОРОГО ОН " +
        "ЛЕЖИТ В ПРОЕКТЕ. `ipa-en-uk` даёт `sˈʌmwɒn`, `ˈɛnɪwˌɒn`, `ˈɛvɹɪwˌɒn` — " +
        "гласный `ɒ` на месте слова `one`. Он собран машиной; `wikipron-en-uk`, " +
        "писанный людьми, даёт для всех трёх `w ʌ n`, и это совпадает со словарной " +
        "нормой. Отсюда `/ˈsʌmwʌn/`, `/ˈeniwʌn/`, `/ˈevriwʌn/`. " +
        "Для `document` первый словарь записи не даёт вовсе; второй даёт " +
        "британскую `d ɒ k j ʊ m ə n t`, отсюда `/ˈdɒkjʊmənt/`. " +
        "СНЯТО ИЗ-ЗА ТРАНСКРИПЦИИ: `drawer`, `envelope` и `wifi` — первый словарь " +
        "молчит, второй даёт разнобой (`drawer` вовсе в американском чтении, через " +
        "`ɚ`). Угадывать не стал: слова заменены такими, чьё чтение источники дают " +
        "согласно",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "kto-to-vzyal-sumku",
      title: "Кто-то и что-то: Someone took my bag",
      estimatedMinutes: 15,
      outcome: "говорить о неизвестном человеке и о неизвестной вещи: someone, something",
      vozvrat: [{ iz: "skolko-chego", zadanie: "z2-dopisat-some" }],

      blocks: [
        {
          id: "propala-sumka",
          kind: "explain",
          text: [
            "Данияр отошёл к стойке, вернулся к столику — а сумки нет.",
            "Он не видел, кто её взял, и назвать человека по имени не может.",
            "Someone took my bag. — Кто-то взял мою сумку.",
            "Слово someone и значит «кто-то»: человек есть, а имени у него нет.",
            "Собрано оно из двух частей, и первая уже знакома.",
            "В модуле «Сколько чего» слово some значило «сколько-то»: some water, some bread.",
            "Здесь оно значит то же самое неопределённое «какой-то», только приросло к слову one.",
            "По-русски вышло бы так же: «кто» плюс «-то» даёт «кто-то».",
          ],
        },
        {
          id: "slova-o-neizvestnom",
          kind: "table",
          caption: "Слова о неизвестном",
          zvuchat: [
            "Someone took my bag.",
            "Somebody is at the door.",
            "Something is in my pocket.",
          ],
          head: ["Слово", "О ком или о чём", "Пример"],
          rows: [
            ["someone", "о человеке", "Someone took my bag."],
            ["somebody", "о человеке", "Somebody is at the door."],
            ["something", "о вещи", "Something is in my pocket."],
          ],
        },
        {
          id: "chto-eto-za-slova",
          kind: "explain",
          text: [
            "Слово, которое стоит вместо имени, называют местоимением: he, it, they.",
            "Эти три слова тоже местоимения, но они не называют, кто именно.",
            "Такие местоимения называют неопределёнными.",
            "Someone и somebody значат одно и то же — «кто-то», и любое из них можно взять.",
            "Something значит «что-то» и говорит о вещи, а не о человеке.",
          ],
        },
        {
          id: "glagol-v-edinstvennom",
          kind: "explain",
          text: [
            "Человек неизвестен, но он один, и глагол при этих словах стоит в единственном числе.",
            "Someone is at the door, а не are.",
            "Something is in my pocket, а не are.",
            "Считать надо не людей, о которых думаешь, а само слово: оно одно.",
          ],
        },
        {
          id: "ne-someone-are",
          kind: "note",
          tone: "mistake",
          text:
            "«Someone are here» — так не говорят.\n\nПри someone, somebody и " +
            "something глагол стоит в единственном числе: Someone is here.",
        },
        {
          id: "razgovor-u-stoyki",
          kind: "example",
          caption: "Разговор у стойки",
          razgovor: true,
          zvuchat: [
            "Someone took my bag!",
            "Are you sure?",
            "Yes. And something is missing from the table too.",
            "Let me call somebody from the office.",
          ],
          text:
            "Someone took my bag!\nAre you sure?\nYes. And something is missing from the table too.\nLet me call somebody from the office.",
          perevod: {
            "Someone took my bag!": "Кто-то взял мою сумку!",
            "Are you sure?": "Вы уверены?",
            "Yes. And something is missing from the table too.":
              "Да. И со стола что-то тоже пропало.",
            "Let me call somebody from the office.":
              "Давайте я позову кого-нибудь из конторы.",
          },
          explain:
            "Данияр не знает ни человека, ни вещи, и потому берёт someone и " +
            "something. В последней строке somebody стоит после глагола call — эти " +
            "слова годятся и в начале строки, и после глагола.",
        },
        {
          id: "slovar-o-propazhe",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "someone", translation: "кто-то", example: "Someone took my bag.", hint: "/ˈsʌmwʌn/" },
            { term: "somebody", translation: "кто-то", example: "Somebody is at the door.", hint: "/ˈsʌmbɒdi/" },
            { term: "something", translation: "что-то", example: "Something is in my pocket.", hint: "/ˈsʌmθɪŋ/" },
            { term: "steal", translation: "красть", example: "Someone stole his bag in the cafe.", hint: "/stiːl/" },
            { term: "stole", translation: "украл: прошедшее от steal", example: "Someone stole his bag in the cafe.", hint: "/stəʊl/" },
            { term: "document", translation: "документ", example: "My documents are in the bag.", hint: "/ˈdɒkjʊmənt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-o-cheloveke",
          kind: "choice",
          prompt:
            "Данияр говорит о человеке, которого не видел. Какое слово он возьмёт?",
          options: [
            { text: "something" },
            { text: "someone", correct: true },
            { text: "some" },
          ],
          hint: "Одно из этих слов говорит о вещи, другое — о человеке.",
          why:
            "Someone. Слово something сказало бы о вещи, а some стоит перед самой " +
            "вещью: some water.",
        },
        {
          id: "z2-dopisat-is",
          kind: "gap",
          prompt: "Кто-то стоит у двери. Допиши глагол.",
          before: "Somebody ",
          after: " at the door.",
          answer: "is",
          hint: "Слово somebody одно, и глагол при нём тоже в единственном числе.",
          why:
            "Somebody is at the door. Форма are пошла бы к нескольким, а здесь " +
            "слово одно.",
        },
        {
          id: "z3-otmetit-neopredelennye",
          kind: "hottext",
          prompt: "Отметь неопределённые местоимения.",
          parts: [
            { text: "someone", selectable: true, correct: true },
            { text: " · " },
            { text: "he", selectable: true },
            { text: " · " },
            { text: "something", selectable: true, correct: true },
            { text: " · " },
            { text: "they", selectable: true },
          ],
          hint: "Неопределённое местоимение не называет, кто именно.",
          why:
            "Someone и something. Слова he и they тоже местоимения, но они " +
            "указывают на известного человека или на известных людей.",
        },
        {
          id: "z4-sobrat-o-krazhe",
          kind: "order",
          prompt: "Собери строку: кто-то украл мою сумку.",
          items: ["my bag.", "stole", "Someone"],
          answer: [2, 1, 0],
          hint: "Начни с того, кто это сделал.",
          why:
            "Someone stole my bag. Слово о неизвестном человеке стоит там же, где " +
            "стояло бы имя.",
        },
        {
          id: "z5-napisat-o-veshchi",
          kind: "short",
          prompt:
            "В кармане у Даны что-то лежит. Скажи это по-английски, начав со слова Something.",
          answer: "Something is in her pocket.",
          accept: [
            "Something is in her pocket",
            "Something is in Dana's pocket.",
            "Something is in Dana's pocket",
          ],
          hint: "Глагол при something стоит в единственном числе.",
          why:
            "Something is in her pocket. Вещь неизвестна, но она одна, и потому is.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nikogo-ne-videl",
      title: "Никого не видел: I didn't see anyone",
      estimatedMinutes: 15,
      outcome: "строить отрицание через any-: I didn't see anyone",

      blocks: [
        {
          id: "u-portie",
          kind: "explain",
          text: [
            "Данияр подошёл к официанту и спрашивает про сумку.",
            "Официант не видел ни человека, ни вещи, и отвечает I didn't see anyone.",
            "По-русски отрицаний в такой строке два: «не видел никого».",
            "По-английски отрицание одно — didn't, а на месте «никого» стоит anyone.",
          ],
        },
        {
          id: "some-menyaetsya-na-any",
          kind: "table",
          caption: "Обычная строка и отрицание",
          zvuchat: [
            "I saw someone.",
            "I didn't see anyone.",
            "I took something.",
            "I didn't take anything.",
          ],
          head: ["Обычная строка", "Отрицание"],
          rows: [
            ["I saw someone.", "I didn't see anyone."],
            ["I took something.", "I didn't take anything."],
          ],
        },
        {
          id: "pochemu-any",
          kind: "explain",
          text: [
            "Отрицание в строке одно, и его несёт глагол: didn't see.",
            "Само местоимение отрицания уже не несёт, и потому меняет начало.",
            "Someone становится anyone, something становится anything.",
            "Anybody работает наравне с anyone: I didn't see anybody.",
            "Переводится всё это по-русски привычным «никого» и «ничего».",
          ],
        },
        {
          id: "dva-otricaniya",
          kind: "note",
          tone: "mistake",
          text:
            "«I didn't see nobody» — так не говорят на правильном английском.\n\n" +
            "Слова nobody («никто») и nothing («ничего») сами несут отрицание, и " +
            "рядом с didn't выходит два отрицания сразу. Отрицание в строке одно: " +
            "если оно уже при глаголе, дальше идёт anyone или anything. Как " +
            "говорить через nobody и nothing — следующий урок.",
        },
        {
          id: "any-i-v-voprose",
          kind: "explain",
          text: [
            "Те же слова на any- идут и в вопросе: Did you see anything?",
            "Вопрос ведь тоже не утверждает, что там кто-то был.",
            "Отвечают на такой вопрос обычно коротко: Yes, I did или No, I didn't.",
          ],
        },
        {
          id: "razgovor-s-portie",
          kind: "example",
          caption: "Разговор с официантом",
          razgovor: true,
          zvuchat: [
            "Did you see anyone near my table?",
            "No, I didn't see anyone.",
            "And did you find anything there?",
            "I looked, but I didn't find anything. I asked the manager too.",
          ],
          text:
            "Did you see anyone near my table?\nNo, I didn't see anyone.\nAnd did you find anything there?\nI looked, but I didn't find anything. I asked the manager too.",
          perevod: {
            "Did you see anyone near my table?":
              "Вы видели кого-нибудь у моего столика?",
            "No, I didn't see anyone.": "Нет, я никого не видел.",
            "And did you find anything there?":
              "А вы там что-нибудь нашли?",
            "I looked, but I didn't find anything. I asked the manager too.":
              "Я смотрел, но ничего не нашёл. Управляющего я тоже спросил.",
          },
          explain:
            "И в вопросах, и в ответах стоят слова на any-. В ответах отрицание " +
            "несут didn't see и didn't find, а второго отрицания в строке нет.",
        },
        {
          id: "slovar-o-poiske",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "anyone", translation: "кто-нибудь; никого в отрицании", example: "I didn't see anyone.", hint: "/ˈeniwʌn/" },
            { term: "anything", translation: "что-нибудь; ничего в отрицании", example: "I didn't find anything.", hint: "/ˈeniθɪŋ/" },
            { term: "waiter", translation: "официант", example: "The waiter didn't see anyone.", hint: "/ˈweɪtə/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-anyone",
          kind: "gap",
          prompt: "Официант никого не видел. Допиши слово.",
          before: "The waiter didn't see ",
          after: ".",
          answer: "anyone",
          accept: ["anybody"],
          hint: "Отрицание уже стоит при глаголе, значит местоимение начинается на any-.",
          why:
            "The waiter didn't see anyone. Слово someone сюда не встанет: " +
            "строка отрицательная.",
        },
        {
          id: "z2-vybrat-vernoe-otricanie",
          kind: "choice",
          prompt: "Какая строка построена верно?",
          options: [
            { text: "I didn't take nothing." },
            { text: "I didn't take anything.", correct: true },
            { text: "I didn't take something." },
          ],
          hint: "Посчитай отрицания в каждой строке.",
          why:
            "I didn't take anything. В первой строке отрицаний два, а во второй " +
            "стоит слово на some-, которое в отрицании не работает.",
        },
        {
          id: "z3-otmetit-any",
          kind: "hottext",
          prompt: "Отметь строки, где слово выбрано верно.",
          parts: [
            { text: "She didn't buy anything.", selectable: true, correct: true },
            { text: " · " },
            { text: "She didn't buy nothing.", selectable: true },
            { text: " · " },
            { text: "Did you meet anyone?", selectable: true, correct: true },
            { text: " · " },
            { text: "He didn't call anybody.", selectable: true, correct: true },
          ],
          hint: "Ищи строку, где отрицание стоит дважды.",
          why:
            "Неверна только вторая: в ней отрицание и при глаголе, и в самом слове. " +
            "Anybody в четвёртой строке работает наравне с anyone.",
        },
        {
          id: "z4-perevesti-vopros",
          kind: "short",
          prompt:
            "Спроси у официанта, нашёл ли он что-нибудь. Начни с Did you find.",
          answer: "Did you find anything?",
          accept: ["Did you find anything"],
          hint: "В вопросе идёт то же слово, что и в отрицании.",
          why:
            "Did you find anything? Вопрос не утверждает, что там что-то было, и " +
            "потому берёт слово на any-.",
        },
        {
          id: "z5-ispravit-dva-otricaniya",
          kind: "short",
          prompt:
            "Ученик написал: I didn't see nobody at the door. Запиши строку без ошибки.",
          answer: "I didn't see anyone at the door.",
          accept: [
            "I didn't see anyone at the door",
            "I didn't see anybody at the door.",
            "I didn't see anybody at the door",
          ],
          hint: "Отрицание уже несёт глагол, значит второе надо убрать.",
          why:
            "I didn't see anyone at the door. Годится и anybody: эти два слова " +
            "равны.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "nikto-i-nichego",
      title: "Никто и ничего: Nobody knows",
      estimatedMinutes: 14,
      outcome: "говорить через nobody и nothing, не ставя второго отрицания",

      blocks: [
        {
          id: "doma-posle-kafe",
          kind: "explain",
          text: [
            "Данияр вернулся домой и обзванивает друзей: не видел ли кто сумку.",
            "Никто ничего не знает, и отвечать полной строкой каждый раз долго.",
            "Nobody knows. — Никто не знает.",
            "И вот главное расхождение: по-русски отрицание сказано дважды — «никто НЕ знает».",
            "По-английски оно сказано один раз, словом nobody, а глагол остаётся без «не».",
            "Оттого Nobody doesn't know и звучит для англичанина странно: отрицание там задвоено.",
          ],
        },
        {
          id: "korotkiy-otvet",
          kind: "table",
          caption: "Короткий ответ",
          zvuchat: [
            "Who was there?",
            "Nobody.",
            "What did you find?",
            "Nothing.",
          ],
          head: ["Вопрос", "Ответ"],
          rows: [
            ["Who was there?", "Nobody."],
            ["What did you find?", "Nothing."],
          ],
        },
        {
          id: "kak-oni-ustroeny",
          kind: "explain",
          text: [
            "Nobody значит «никто», nothing значит «ничего».",
            "Отрицание сидит в самом слове, и потому глагол при них идёт без not.",
            "Nobody knows — «никто не знает», хотя слова not в строке нет.",
            "There is nothing on the bookshelf — «на полке ничего нет».",
            "Глагол при nobody в единственном числе, как и в первом уроке: knows.",
          ],
        },
        {
          id: "ne-nobody-doesnt",
          kind: "note",
          tone: "mistake",
          text:
            "«Nobody doesn't know» — так не говорят на правильном английском.\n\n" +
            "Отрицание уже стоит в слове nobody, и второе при глаголе не нужно: " +
            "Nobody knows.",
        },
        {
          id: "dva-sposoba-odno-i-to-zhe",
          kind: "explain",
          text: [
            "Выходит два способа сказать одно и то же, и оба верны.",
            "I didn't see anyone — отрицание при глаголе, местоимение на any-.",
            "I saw nobody — отрицание в местоимении, глагол обычный.",
            "Короткий ответ строят вторым способом: Nobody, Nothing.",
          ],
        },
        {
          id: "razgovor-doma",
          kind: "example",
          caption: "Разговор дома",
          razgovor: true,
          zvuchat: [
            "Did anybody call you today?",
            "Nobody.",
            "And the bookshelf? Is anything there?",
            "There is nothing on the bookshelf. There are only scissors and two old books in the cupboard.",
          ],
          text:
            "Did anybody call you today?\nNobody.\nAnd the bookshelf? Is anything there?\nThere is nothing on the bookshelf. There are only scissors and two old books in the cupboard.",
          perevod: {
            "Did anybody call you today?": "Вам сегодня кто-нибудь звонил?",
            "Nobody.": "Никто.",
            "And the bookshelf? Is anything there?":
              "А книжная полка? Там что-нибудь есть?",
            "There is nothing on the bookshelf. There are only scissors and two old books in the cupboard.":
              "На полке ничего нет. В шкафу только ножницы и две старые книги.",
          },
          explain:
            "Короткий ответ Nobody стоит вместо целой строки. В последней строке " +
            "nothing стоит после there is — так говорят о том, чего нет вовсе.",
        },
        {
          id: "slovar-korotkih-otvetov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "nobody", translation: "никто", example: "Nobody knows.", hint: "/ˈnəʊbɒdi/" },
            { term: "nothing", translation: "ничего", example: "There is nothing on the bookshelf.", hint: "/ˈnʌθɪŋ/" },
            { term: "scissors", translation: "ножницы", example: "Scissors and two old books.", hint: "/ˈsɪsəz/" },
            { term: "bookshelf", translation: "книжная полка", example: "There is nothing on the bookshelf.", hint: "/ˈbʊkʃelf/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-otvetit-korotko",
          kind: "choice",
          prompt:
            "У Данияра спросили: Did anybody call you today? Никто не звонил. Что он ответит?",
          options: [
            { text: "Nobody.", correct: true },
            { text: "Anybody." },
            { text: "Somebody." },
          ],
          hint: "В коротком ответе отрицание несёт само слово.",
          why:
            "Nobody. Слово anybody живёт при глаголе с отрицанием, а somebody сказало " +
            "бы, что кто-то всё-таки звонил.",
        },
        {
          id: "z2-dopisat-glagol-pri-nobody",
          kind: "gap",
          prompt: "Никто не знает. Допиши глагол.",
          before: "Nobody ",
          after: ".",
          answer: "knows",
          hint: "Отрицание уже в слове nobody, значит глагол идёт обычный.",
          why:
            "Nobody knows. Запись doesn't know поставила бы в строку второе " +
            "отрицание.",
        },
        {
          id: "z3-otmetit-vernye-stroki-o-nikom",
          kind: "hottext",
          prompt: "Отметь строки, построенные верно.",
          parts: [
            { text: "There is nothing on the bookshelf.", selectable: true, correct: true },
            { text: " · " },
            { text: "Nobody doesn't know.", selectable: true },
            { text: " · " },
            { text: "Nobody knows my name.", selectable: true, correct: true },
            { text: " · " },
            { text: "There isn't nothing in the cupboard.", selectable: true },
          ],
          hint: "Посчитай отрицания в каждой строке: их должно быть одно.",
          why:
            "Верны первая и третья. Во второй и четвёртой отрицание стоит дважды: и " +
            "в слове, и при глаголе.",
        },
        {
          id: "z4-sobrat-o-nichego",
          kind: "order",
          prompt: "Собери строку: на книжной полке ничего нет.",
          items: ["on the bookshelf.", "is nothing", "There"],
          answer: [2, 1, 0],
          hint: "Начни со слова There — так говорят о том, что где-то есть или чего нет.",
          why:
            "There is nothing on the bookshelf. Глагол здесь обычный: is, а не " +
            "isn't — отрицание уже сидит в слове nothing.",
        },
        {
          id: "z5-skazat-dvumya-sposobami",
          kind: "short",
          prompt:
            "Строку I saw nobody скажи вторым способом — через отрицание при глаголе. Начни с I didn't.",
          answer: "I didn't see anyone.",
          accept: [
            "I didn't see anyone",
            "I didn't see anybody.",
            "I didn't see anybody",
          ],
          hint: "Когда отрицание уходит к глаголу, местоимение начинается на any-.",
          why:
            "I didn't see anyone. Смысл тот же, а отрицание переехало с " +
            "местоимения на глагол.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vse-i-vsyo",
      title: "Все и всё: Everyone is here",
      estimatedMinutes: 14,
      outcome: "говорить обо всех и обо всём: everyone is, everything is",

      blocks: [
        {
          id: "u-dany-prazdnik",
          kind: "explain",
          text: [
            "У Даны день рождения, и гости уже собрались.",
            "Она говорит Everyone is here — «все здесь».",
            "По-русски «все» — это много людей, и глагол при них во множественном числе.",
            "А по-английски в этой строке стоит is, а не are.",
          ],
        },
        {
          id: "glagol-pri-etih-slovah",
          kind: "table",
          caption: "Глагол при этих словах",
          zvuchat: [
            "Everyone is here.",
            "Everybody likes chips.",
            "Everything is on the table.",
          ],
          head: ["Строка", "Какой глагол"],
          rows: [
            ["Everyone is here.", "is, а не are"],
            ["Everybody likes chips.", "likes, а не like"],
            ["Everything is on the table.", "is, а не are"],
          ],
        },
        {
          id: "pochemu-edinstvennoe",
          kind: "explain",
          text: [
            "Everyone и everybody значат «все» и говорят о людях.",
            "Everything значит «всё» и говорит о вещах.",
            "Людей за столом много, но слово в строке одно, и глагол берут по слову.",
            "Поэтому Everyone is here, а глагол в третьем лице получает -s: likes.",
            "Everyone и everybody равны между собой, как someone и somebody.",
          ],
        },
        {
          id: "ne-everyone-are",
          kind: "note",
          tone: "mistake",
          text:
            "«Everyone are here» — так не говорят.\n\nГлагол берут по самому слову, " +
            "а оно одно: Everyone is here.",
        },
        {
          id: "razgovor-na-prazdnike",
          kind: "example",
          caption: "Разговор на празднике",
          razgovor: true,
          zvuchat: [
            "Is everyone here?",
            "Yes, everybody is here.",
            "And the food?",
            "Everything is on the table. Everybody likes burgers and chips.",
          ],
          text:
            "Is everyone here?\nYes, everybody is here.\nAnd the food?\nEverything is on the table. Everybody likes burgers and chips.",
          perevod: {
            "Is everyone here?": "Все на месте?",
            "Yes, everybody is here.": "Да, все здесь.",
            "And the food?": "А еда?",
            "Everything is on the table. Everybody likes burgers and chips.":
              "Всё на столе. Бургеры и картошку любят все.",
          },
          explain:
            "Гостей много, а глагол при everyone и everybody стоит в единственном " +
            "числе: is, likes. Слово everything говорит о еде, то есть о вещах.",
        },
        {
          id: "slovar-prazdnika",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "everyone", translation: "все", example: "Everyone is here.", hint: "/ˈevriwʌn/" },
            { term: "everybody", translation: "все", example: "Everybody likes chips.", hint: "/ˈevribɒdi/" },
            { term: "everything", translation: "всё", example: "Everything is on the table.", hint: "/ˈevriθɪŋ/" },
            { term: "burger", translation: "бургер", example: "Everybody likes burgers and chips.", hint: "/ˈbɜːgə/" },
            { term: "chips", translation: "жареный картофель брусочками", example: "Egg and chips.", hint: "/tʃɪps/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-glagol-pri-everyone",
          kind: "choice",
          prompt: "Какая строка построена верно?",
          options: [
            { text: "Everyone are here." },
            { text: "Everyone is here.", correct: true },
            { text: "Everyone were here." },
          ],
          hint: "Глагол берут не по числу людей, а по самому слову.",
          why:
            "Everyone is here. Слово everyone одно, и глагол при нём в " +
            "единственном числе.",
        },
        {
          id: "z2-dopisat-likes",
          kind: "gap",
          prompt: "Всем нравится картофель ломтиками. Допиши глагол.",
          before: "Everybody ",
          after: " chips.",
          answer: "likes",
          hint: "Слово everybody ведёт себя как he и she.",
          why:
            "Everybody likes chips. Форма like пошла бы к they, а everybody слово " +
            "одно.",
        },
        {
          id: "z3-otmetit-o-veshchah",
          kind: "hottext",
          prompt: "Отметь строки, где речь о вещах, а не о людях.",
          parts: [
            { text: "Everything is on the table.", selectable: true, correct: true },
            { text: " · " },
            { text: "Everyone is here.", selectable: true },
            { text: " · " },
            { text: "Everything is ready.", selectable: true, correct: true },
            { text: " · " },
            { text: "Everybody likes burgers.", selectable: true },
          ],
          hint: "О людях говорят два слова, о вещах — одно.",
          why:
            "Первая и третья: в них стоит everything. Слова everyone и everybody " +
            "говорят о людях.",
        },
        {
          id: "z4-ispravit-everyone-are",
          kind: "short",
          prompt:
            "Ученик написал: Everyone are at home. Запиши строку без ошибки.",
          answer: "Everyone is at home.",
          accept: ["Everyone is at home"],
          hint: "Одно слово в строке надо заменить, и это глагол.",
          why:
            "Everyone is at home. Гостей может быть двадцать, но слово в строке " +
            "одно.",
        },
        {
          id: "z5-skazat-o-gotovnosti",
          kind: "short",
          prompt:
            "Всё готово. Скажи это по-английски, начав со слова Everything.",
          answer: "Everything is ready.",
          accept: ["Everything is ready"],
          hint: "Глагол при этом слове в единственном числе.",
          why:
            "Everything is ready. Вещей много, а слово одно, и глагол берут по " +
            "слову.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "gde-to-i-vezde",
      title: "Где-то и везде: somewhere, anywhere, everywhere",
      estimatedMinutes: 15,
      outcome: "называть неизвестное место: somewhere, anywhere, everywhere",

      blocks: [
        {
          id: "iskali-doma",
          kind: "explain",
          text: [
            "Сумка нашлась не сразу: Дана и Данияр искали её весь вечер.",
            "Говорить пришлось не о людях и не о вещах, а о месте.",
            "У места есть свои слова, и устроены они так же — на some-, any- и every-.",
          ],
        },
        {
          id: "slova-o-meste",
          kind: "table",
          caption: "Слова о месте",
          zvuchat: [
            "The bag is somewhere here.",
            "I can't find it anywhere.",
            "We looked everywhere.",
          ],
          head: ["Слово", "Что значит", "Пример"],
          rows: [
            ["somewhere", "где-то", "The bag is somewhere here."],
            ["anywhere", "где-нибудь; при отрицании — нигде", "I can't find it anywhere."],
            ["everywhere", "везде", "We looked everywhere."],
          ],
        },
        {
          id: "tot-zhe-zakon",
          kind: "explain",
          text: [
            "Эти три слова — не местоимения, а наречия места: они отвечают на вопрос «где».",
            "Закон тут тот же, что был со словами о людях и вещах.",
            "В обычной строке идёт somewhere: It is somewhere in the flat.",
            "Как только появилось отрицание, слово меняется на anywhere.",
            "I can't find it anywhere — по-русски это «нигде не могу найти».",
            "А everywhere в отрицании не ставят: «нигде» говорят через not … anywhere.",
          ],
        },
        {
          id: "ne-somewhere-v-otricanii",
          kind: "note",
          tone: "mistake",
          text:
            "«I can't find it somewhere» — так не говорят.\n\nВ строке уже есть " +
            "отрицание can't, значит дальше идёт anywhere.",
        },
        {
          id: "razgovor-vo-vremya-poiskov",
          kind: "example",
          caption: "Разговор во время поисков",
          razgovor: true,
          zvuchat: [
            "I can't find my bag anywhere.",
            "We looked everywhere. Under the sofa too?",
            "Yes. And beside the door. We walked along the street too.",
            "Look in the big box! Your bag is here, at the bottom.",
          ],
          text:
            "I can't find my bag anywhere.\nWe looked everywhere. Under the sofa too?\nYes. And beside the door. We walked along the street too.\nLook in the big box! Your bag is here, at the bottom.",
          perevod: {
            "I can't find my bag anywhere.": "Я нигде не могу найти сумку.",
            "We looked everywhere. Under the sofa too?":
              "Мы искали везде. Под диваном тоже?",
            "Yes. And beside the door. We walked along the street too.":
              "Да. И у двери. По улице мы тоже прошли.",
            "Look in the big box! Your bag is here, at the bottom.":
              "Посмотри в большой коробке! Сумка здесь, на дне.",
          },
          explain:
            "После can't идёт anywhere, а в строке без отрицания стоит everywhere. " +
            "Обороты beside the door, along the street и at the bottom называют " +
            "место точно, когда оно известно.",
        },
        {
          id: "slovar-mesta",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "anywhere", translation: "где-нибудь; нигде в отрицании", example: "I can't find my bag anywhere.", hint: "/ˈeniweə/" },
            { term: "everywhere", translation: "везде", example: "We looked everywhere.", hint: "/ˈevriweə/" },
            { term: "beside", translation: "рядом с", example: "And beside the door.", hint: "/bɪˈsaɪd/" },
            { term: "bottom", translation: "дно, низ", example: "It was at the bottom yesterday.", hint: "/ˈbɒtəm/" },
            { term: "along", translation: "вдоль", example: "We walked along the street and looked everywhere.", hint: "/əˈlɒŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-anywhere",
          kind: "gap",
          prompt: "Она нигде не может найти сумку. Допиши слово.",
          before: "She can't find her bag ",
          after: ".",
          answer: "anywhere",
          hint: "В строке уже есть отрицание can't.",
          why:
            "She can't find her bag anywhere. Слово somewhere стоит в строках " +
            "без отрицания.",
        },
        {
          id: "z2-vybrat-o-meste",
          kind: "choice",
          prompt: "Сумка где-то в квартире, но точное место неизвестно. Как это сказать?",
          options: [
            { text: "The bag is anywhere in the flat." },
            { text: "The bag is somewhere in the flat.", correct: true },
            { text: "The bag is everywhere in the flat." },
          ],
          hint: "Отрицания в строке нет.",
          why:
            "The bag is somewhere in the flat. Слово anywhere работает при " +
            "отрицании, а everywhere сказало бы, что сумка сразу во всех местах.",
        },
        {
          id: "z3-otmetit-vernye-o-meste",
          kind: "hottext",
          prompt: "Отметь строки, где слово о месте выбрано верно.",
          parts: [
            { text: "We looked everywhere.", selectable: true, correct: true },
            { text: " · " },
            { text: "I didn't see it somewhere.", selectable: true },
            { text: " · " },
            { text: "He didn't go anywhere.", selectable: true, correct: true },
            { text: " · " },
            { text: "It is somewhere near the door.", selectable: true, correct: true },
          ],
          hint: "Проверь, есть ли в строке отрицание, и посмотри на слово после него.",
          why:
            "Неверна только вторая: после didn't see нужно anywhere. В четвёртой " +
            "отрицания нет, и somewhere там на месте.",
        },
        {
          id: "z4-sobrat-o-poiskah",
          kind: "order",
          prompt: "Собери строку: мы искали везде.",
          items: ["everywhere.", "looked", "We"],
          answer: [2, 1, 0],
          hint: "Слово о месте встанет в конец.",
          why:
            "We looked everywhere. Слово о месте стоит после глагола, как и в " +
            "строках с anywhere.",
        },
        {
          id: "z5-napisat-o-nenahodke",
          kind: "short",
          prompt:
            "Данияр нигде не нашёл документы. Скажи это по-английски, начав с He didn't find.",
          answer: "He didn't find his documents anywhere.",
          accept: [
            "He didn't find his documents anywhere",
            "He didn't find the documents anywhere.",
            "He didn't find the documents anywhere",
          ],
          hint: "Отрицание в строке уже есть, значит слово о месте начинается на any-.",
          why:
            "He didn't find his documents anywhere. Отрицание уже несёт didn't, и " +
            "потому слово о месте начинается на any-.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chto-stoit-posle",
      title: "Что стоит после: something cold, something else",
      estimatedMinutes: 15,
      outcome: "ставить уточнение после местоимения: something cold, something else",

      blocks: [
        {
          id: "v-kafe-posle-poiskov",
          kind: "explain",
          text: [
            "Сумка нашлась, и вечером Дана с Данияром зашли в кафе.",
            "Официант спрашивает, чего им хочется, а точного названия у них нет.",
            "Им хочется чего-нибудь холодного: something cold.",
            "Уточнение встаёт после такого слова, а не перед ним, как в a cold drink.",
          ],
        },
        {
          id: "gde-stoit-utochnenie",
          kind: "table",
          caption: "Где стоит уточнение",
          zvuchat: [
            "a cold drink",
            "something cold",
            "a tasty burger",
            "something tasty",
          ],
          head: ["С обычным словом", "С этим местоимением"],
          rows: [
            ["a cold drink", "something cold"],
            ["a tasty burger", "something tasty"],
          ],
        },
        {
          id: "utochnenie-idet-posle",
          kind: "explain",
          text: [
            "Слева уточнение стоит перед вещью: cold drink, tasty burger.",
            "Справа оно стоит после местоимения: something cold, something tasty.",
            "Обычно в английском прилагательное стоит перед вещью, а здесь наоборот.",
            "Так же уточняют и слово anything: I didn't find anything tasty.",
          ],
        },
        {
          id: "eshche-dva-utochneniya",
          kind: "table",
          caption: "Чем ещё уточняют",
          zvuchat: [
            "something to drink",
            "something to eat",
            "something else",
            "anything else",
          ],
          head: ["Уточнение", "Пример"],
          rows: [
            ["to и глагол", "something to drink"],
            ["to и глагол", "something to eat"],
            ["слово else", "something else"],
            ["слово else", "anything else"],
          ],
        },
        {
          id: "chto-znachit-else",
          kind: "explain",
          text: [
            "Оборот to и глагол говорит, зачем вещь нужна: something to drink — чтобы выпить.",
            "Слово else значит «ещё» и тоже стоит после местоимения.",
            "Anything else? — «Что-нибудь ещё?»; так спрашивают в кафе и в магазине.",
            "И оно идёт с любым из этих слов: someone else, nothing else.",
            "А когда точного названия нет вовсе, к вещи прибавляют or something.",
            "A burger or something — «бургер или что-нибудь такое».",
          ],
        },
        {
          id: "ne-cold-something",
          kind: "note",
          tone: "mistake",
          text:
            "«a cold something» и «else something» — так не говорят.\n\nПрилагательное " +
            "и слово else ставят после местоимения: something cold, something else.",
        },
        {
          id: "razgovor-v-kafe",
          kind: "example",
          caption: "Разговор в кафе",
          razgovor: true,
          zvuchat: [
            "Would you like something to drink?",
            "Yes, something cold, please.",
            "Anything else?",
            "Something to eat — a burger or something. And I think my glasses are here somewhere!",
          ],
          text:
            "Would you like something to drink?\nYes, something cold, please.\nAnything else?\nSomething to eat — a burger or something. And I think my glasses are here somewhere!",
          perevod: {
            "Would you like something to drink?": "Хотите чего-нибудь выпить?",
            "Yes, something cold, please.": "Да, что-нибудь холодное, пожалуйста.",
            "Anything else?": "Что-нибудь ещё?",
            "Something to eat — a burger or something. And I think my glasses are here somewhere!":
              "Что-нибудь поесть — бургер или вроде того. И, кажется, мои очки где-то здесь!",
          },
          explain:
            "В каждой строке уточнение стоит после местоимения: to drink, cold, " +
            "else, to eat.",
        },
        {
          id: "slovar-kafe",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "else", translation: "ещё", example: "Anything else?", hint: "/els/" },
            { term: "tasty", translation: "вкусный", example: "I didn't find anything tasty.", hint: "/ˈteɪsti/" },
            { term: "glasses", translation: "очки", example: "My glasses are here somewhere!", hint: "/ˈglɑːsɪz/" },
            { term: "bright", translation: "яркий (о цвете)", example: "Her bag is bright red.", hint: "/braɪt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-utochnenie-s-to",
          kind: "choice",
          prompt:
            "Дана хочет пить. Какая запись встанет после Can I have?",
          options: [
            { text: "something to drink", correct: true },
            { text: "something drink" },
            { text: "to drink something" },
          ],
          hint: "Между местоимением и глаголом стоит короткое слово to.",
          why:
            "Can I have something to drink? Оборот из to и глагола идёт после " +
            "местоимения и говорит, зачем вещь нужна.",
        },
        {
          id: "z2-dopisat-else",
          kind: "gap",
          prompt: "Официант спрашивает: что-нибудь ещё? Допиши слово.",
          before: "Anything ",
          after: "?",
          answer: "else",
          hint: "Это слово значит «ещё» и стоит после местоимения.",
          why:
            "Anything else? Так спрашивают и в кафе, и в магазине.",
        },
        {
          id: "z3-otmetit-vernyy-poryadok",
          kind: "hottext",
          prompt: "Отметь записи, где порядок слов верный.",
          parts: [
            { text: "something tasty", selectable: true, correct: true },
            { text: " · " },
            { text: "else something", selectable: true },
            { text: " · " },
            { text: "something to eat", selectable: true, correct: true },
            { text: " · " },
            { text: "nothing else", selectable: true, correct: true },
          ],
          hint: "Проверь, где стоит уточнение — до местоимения или после.",
          why:
            "Неверна только вторая: слово else всегда идёт после, а не перед.",
        },
        {
          id: "z4-sobrat-o-pit-e",
          kind: "order",
          prompt: "Собери строку: я хочу чего-нибудь выпить.",
          items: ["to drink.", "want something", "I"],
          answer: [2, 1, 0],
          hint: "Оборот to и глагол встанет в самый конец.",
          why:
            "I want something to drink. Уточнение стоит после местоимения, как и " +
            "прилагательное.",
        },
        {
          id: "z5-ispravit-poryadok",
          kind: "short",
          prompt:
            "Ученик написал: I want cold something. Запиши строку без ошибки.",
          answer: "I want something cold.",
          accept: ["I want something cold"],
          hint: "Слова надо поменять местами, а не заменять.",
          why:
            "I want something cold. Оба слова верные, неверен был только порядок.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-pismo-o-propazhe",
      title: "Читаем письмо о пропаже",
      estimatedMinutes: 13,
      outcome: "находить в письме, кто что видел и чего не нашли",

      blocks: [
        {
          id: "zachem-chitat-pismo-dany",
          kind: "explain",
          text: [
            "Дана написала подруге письмо про свой день рождения и про пропажу.",
            "В таком письме ищут две вещи: кто что сделал и чего не нашли.",
            "Обе они названы словами на some-, any-, no- и every-.",
            "Ниже письмо, и вопросы будут о них.",
          ],
        },
        {
          id: "pismo-dany",
          kind: "text",
          title: "TO AIGERIM",
          genre: "email",
          body: [
            "Hi Aigerim!",
            "Yesterday was my birthday and everyone came.",
            "Somebody brought balloons, and someone brought a big cake.",
            "Nurlan sang with a microphone, and everybody was happy.",
            "Then Daniyar lost his bag at the cafe near my flat.",
            "He asked the waiter, but the waiter didn't see anyone near his table.",
            "Nobody found anything there.",
            "We looked everywhere at home, and the bag was in the box, at the bottom!",
            "He didn't lose anything: his documents were inside.",
            "Write to me soon!",
            "Dana",
          ],
          glossary: [
            { term: "brought", translation: "принёс" },
            { term: "inside", translation: "внутри" },
          ],
        },
        {
          id: "kak-iskat-v-pisme",
          kind: "note",
          tone: "info",
          text:
            "Кто что сделал — ищут по словам на some- и every-.\n\nЧего не нашли — " +
            "по строкам с отрицанием и по словам на no-.",
        },
        {
          id: "slovar-pisma",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "balloon", translation: "воздушный шар", example: "Somebody brought balloons.", hint: "/bəˈluːn/" },
            { term: "microphone", translation: "микрофон", example: "Nurlan sang with a microphone.", hint: "/ˈmaɪkrəfəʊn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kto-prines-shary",
          about: "pismo-dany",
          kind: "choice",
          prompt: "Что письмо говорит о том, кто принёс шары?",
          options: [
            { text: "Их принёс Нурлан." },
            { text: "Имя не названо.", correct: true },
            { text: "Их принесла сама Дана." },
          ],
          hint: "Посмотри, каким словом названо это лицо.",
          why:
            "Имя не названо: в письме стоит somebody. Нурлан в письме есть, но он " +
            "пел с микрофоном.",
        },
        {
          id: "z2-kogo-ne-videl-oficiant",
          about: "pismo-dany",
          kind: "short",
          prompt:
            "Каким словом в письме названо то, кого не видел официант? Ответь одним словом по-английски.",
          answer: "anyone",
          accept: ["Anyone"],
          hint: "Слово стоит в строке про официанта, после слова see.",
          why: "He asked the waiter, but the waiter didn't see anyone near his table.",
        },
        {
          id: "z3-gde-nashlas-sumka",
          about: "pismo-dany",
          kind: "choice",
          prompt: "Где нашлась сумка?",
          options: [
            { text: "В кафе, у столика." },
            { text: "Дома, на дне коробки.", correct: true },
            { text: "У официанта в кафе." },
          ],
          hint: "Про находку сказано в строке, которая начинается с We looked.",
          why:
            "Дома, на дне коробки: the bag was in the box, at the bottom. В кафе как " +
            "раз ничего не нашли.",
        },
        {
          id: "z4-otmetit-verno-o-pisme",
          about: "pismo-dany",
          kind: "hottext",
          prompt: "Отметь то, что верно по письму.",
          parts: [
            { text: "на праздник пришли все", selectable: true, correct: true },
            { text: " · " },
            { text: "из сумки ничего не пропало", selectable: true, correct: true },
            { text: " · " },
            { text: "официант нашёл сумку", selectable: true },
            { text: " · " },
            { text: "документы Данияр потерял", selectable: true },
          ],
          hint: "Про сумку и документы сказано в двух последних строках письма.",
          why:
            "Верно первое и второе. Сумку нашли дома, а документы лежали в ней.",
        },
        {
          id: "z5-pochemu-anyone-v-pisme",
          about: "pismo-dany",
          kind: "choice",
          prompt:
            "В письме стоит: the waiter didn't see anyone. Почему не someone?",
          options: [
            { text: "Потому что официант был один." },
            { text: "Потому что в строке есть отрицание.", correct: true },
            { text: "Потому что речь о незнакомом человеке." },
          ],
          hint: "Сравни эту строку с соседней, где стоит somebody brought balloons.",
          why:
            "Потому что в строке есть отрицание didn't. После него идёт слово на " +
            "any-: anyone или anybody.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-kto-chto-nashyol",
      title: "Слушаем, кто что нашёл",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, кто что нашёл",

      blocks: [
        {
          id: "zachem-slushat-o-nahodke",
          kind: "explain",
          text: [
            "Женщина пришла на стойку находок и спрашивает про свою сумку.",
            "Слушать надо, что нашли и что лежало внутри.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-o-nahodke",
          kind: "audio",
          caption: "Разговор на стойке находок",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Did anybody find a bag here? — Somebody left a bag yesterday. Is it " +
            "bright red? — Yes, it is! — There is no money inside. Only a puzzle and " +
            "a violin. — The puzzle is my son's. Nobody plays the violin at home, " +
            "but it is my son's too.",
        },
        {
          id: "chto-slushat-o-nahodke",
          kind: "note",
          tone: "info",
          text:
            "Слушай, какого цвета сумка и что лежит внутри.\n\nИ слушай, чья вещь: " +
            "об этом говорят в самом конце.",
        },
        {
          id: "slovar-nahodki",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "puzzle", translation: "головоломка", example: "Only a puzzle and a violin.", hint: "/ˈpʌzl/" },
            { term: "violin", translation: "скрипка", example: "Nobody plays the violin at home.", hint: "/ˌvaɪəˈlɪn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakogo-cveta-sumka",
          about: "zapis-o-nahodke",
          kind: "short",
          prompt: "Послушай. Какого цвета сумка? Ответь одним словом по-английски.",
          answer: "red",
          accept: ["Red", "bright red"],
          hint: "Цвет назван во второй реплике, в вопросе.",
          why: "Is it bright red? — Yes, it is!",
        },
        {
          id: "z2-chto-lezhit-vnutri",
          about: "zapis-o-nahodke",
          kind: "choice",
          prompt: "Послушай. Что лежит в сумке?",
          options: [
            { text: "Головоломка и скрипка.", correct: true },
            { text: "Только головоломка." },
            { text: "Документы и очки." },
          ],
          hint: "Про содержимое говорят после слова Only.",
          why:
            "Головоломка и скрипка. Денег внутри нет: there is no money inside.",
        },
        {
          id: "z3-chya-golovolomka",
          about: "zapis-o-nahodke",
          kind: "short",
          prompt:
            "Послушай. Чья головоломка? Ответь одним словом по-английски.",
          answer: "son",
          accept: ["Son", "son's", "my son", "my son's", "her son"],
          hint: "Об этом говорят в последней реплике, сразу после слова puzzle.",
          why: "Ответ — son: в записи звучит The puzzle is my son's.",
        },
        {
          id: "z4-otmetit-uslyshannoe-o-nahodke",
          about: "zapis-o-nahodke",
          kind: "hottext",
          prompt: "Отметь то, что прозвучало в записи.",
          parts: [
            { text: "сумку кто-то оставил вчера", selectable: true, correct: true },
            { text: " · " },
            { text: "дома на скрипке никто не играет", selectable: true, correct: true },
            { text: " · " },
            { text: "внутри лежат документы", selectable: true },
            { text: " · " },
            { text: "сумка чёрная", selectable: true },
          ],
          hint: "Про скрипку сказано в самой последней реплике.",
          why:
            "Прозвучали первое и второе. Про документы речи не было, а сумка красная.",
        },
        {
          id: "z5-kto-ostavil-sumku",
          about: "zapis-o-nahodke",
          kind: "choice",
          prompt: "Послушай. Названо ли имя того, кто оставил сумку?",
          options: [
            { text: "Да, его назвали в первой реплике." },
            { text: "Нет: сказано только somebody.", correct: true },
            { text: "Да, это сын женщины." },
          ],
          hint: "Вспомни, каким словом назван этот человек.",
          why:
            "Нет: в записи стоит somebody left a bag. Имени там не звучит вовсе.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-pismo-o-sluchivshemsya",
      title: "Пишем письмо о случившемся",
      estimatedMinutes: 15,
      outcome: "проверять письмо о случившемся: названо, кого и чего не видели",

      blocks: [
        {
          id: "zachem-proveryat-pismo",
          kind: "explain",
          text: [
            "Нурлан написал другу о пропаже: «I lost my umbrella. It is bad.»",
            "Друг прочитал и не понял главного: кто его взял и искали ли его.",
            "В письме о случившемся пропускают не саму беду, а подробности.",
            "Проверить письмо можно по четырём словам, и все они из этого модуля.",
          ],
        },
        {
          id: "chetyre-slova-v-pisme",
          kind: "table",
          caption: "Что должно быть в письме",
          zvuchat: [
            "Someone took it from the table.",
            "She didn't see anyone there.",
            "Nobody found it.",
            "I looked everywhere.",
          ],
          head: ["Что сказано", "Пример строки"],
          rows: [
            ["кто это сделал", "Someone took it from the table."],
            ["кого не видели", "She didn't see anyone there."],
            ["чего не нашли", "Nobody found it."],
            ["где искали", "I looked everywhere."],
          ],
        },
        {
          id: "chem-derzhitsya-takoe-pismo",
          kind: "explain",
          text: [
            "Первая строка называет виновника, даже если имени нет: someone.",
            "Вторая говорит, кого не видели, и берёт слово на any-.",
            "Третья говорит, чего не нашли, и берёт nobody или nothing.",
            "Четвёртая называет место поисков: everywhere или somewhere.",
            "Без любой из четырёх друг переспросит, и письмо придётся писать заново.",
          ],
        },
        {
          id: "obrazets-pisma-o-propazhe",
          kind: "example",
          caption: "Письмо Нурлана",
          perevod: {
            "Yesterday I lost my umbrella at school.":
              "Вчера я потерял зонт в школе.",
            "Someone took it from the table near the door.":
              "Кто-то взял его со стола у двери.",
            "I asked the teacher, but she didn't see anyone there.":
              "Я спросил учительницу, но она никого там не видела.",
            "Nobody found it, and I looked everywhere.":
              "Никто его не нашёл, а я искал везде.",
          },
          zvuchat: [
            "Hi Ali!",
            "Yesterday I lost my umbrella at school.",
            "Someone took it from the table near the door.",
            "I asked the teacher, but she didn't see anyone there.",
            "Nobody found it, and I looked everywhere.",
          ],
          text:
            "Hi Ali!\nYesterday I lost my umbrella at school.\nSomeone took it from the table near the door.\nI asked the teacher, but she didn't see anyone there.\nNobody found it, and I looked everywhere.",
          explain:
            "Все четыре слова на месте: someone, anyone, nobody, everywhere. Друг " +
            "теперь знает и что случилось, и где искали.",
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-pismu",
          kind: "choice",
          prompt:
            "Нурлан написал другу: Hi Ali! I lost my umbrella. It is bad. Чего другу не хватает?",
          options: [
            { text: "Подробностей: кто взял и где искали.", correct: true },
            { text: "Названия дня, когда это случилось." },
            { text: "Названия школы." },
          ],
          hint: "Представь себя другом с этими двумя строками в руках.",
          why:
            "Подробностей. Приветствие на месте, день можно и не называть, а вот кто " +
            "взял зонт и искали ли его — друг не узнает.",
        },
        {
          id: "z2-dopisat-o-vinovnike",
          kind: "gap",
          prompt: "Допиши слово: зонт кто-то взял со стола.",
          before: "",
          after: " took it from the table.",
          answer: "Someone",
          accept: ["Somebody"],
          hint: "Имени мы не знаем, а строка обычная, без отрицания.",
          why:
            "Someone took it from the table. Слово anyone пошло бы в строку с " +
            "отрицанием.",
        },
        {
          id: "z3-otmetit-polnye-stroki-pisma",
          kind: "hottext",
          prompt: "Отметь строки, которые говорят другу что-то новое.",
          parts: [
            { text: "Nobody found it.", selectable: true, correct: true },
            { text: " · " },
            { text: "It is bad.", selectable: true },
            { text: " · " },
            { text: "I looked everywhere.", selectable: true, correct: true },
            { text: " · " },
            { text: "I am sad.", selectable: true },
          ],
          hint: "Спроси у каждой строки: что друг узнал из неё о пропаже?",
          why:
            "Первая и третья. Строки It is bad и I am sad говорят о настроении, а " +
            "о самой пропаже не говорят ничего.",
        },
        {
          id: "z4-ispravit-stroku-pisma",
          kind: "short",
          prompt:
            "Строку I asked the teacher, but she didn't see nobody there. Запиши без ошибки.",
          answer: "I asked the teacher, but she didn't see anyone there.",
          accept: [
            "I asked the teacher, but she didn't see anyone there",
            "I asked the teacher, but she didn't see anybody there.",
            "I asked the teacher, but she didn't see anybody there",
          ],
          hint: "Отрицание в строке уже есть, и оно при глаголе.",
          why:
            "I asked the teacher, but she didn't see anyone there. Двух отрицаний в " +
            "одной строке не ставят.",
        },
        {
          id: "z5-napisat-pismo-o-propazhe",
          kind: "essay",
          prompt:
            "Напиши другу письмо о пропаже, пятью строками. Скажи, кто взял вещь, кого не видели, чего не нашли и где искали.",
          minWords: 15,
          sample:
            "Hi Ali!\nYesterday I lost my umbrella at school.\nSomeone took it from the table near the door.\nI asked the teacher, but she didn't see anyone there.\nNobody found it, and I looked everywhere.",
          checklist: [
            "есть строка со словом someone или somebody",
            "есть строка с отрицанием и словом anyone или anything",
            "есть строка со словом nobody или nothing",
            "есть слово о месте: everywhere или somewhere",
          ],
          hint:
            "Бери слова, которые знаешь: someone took it, didn't see anyone, nobody found it, looked everywhere.",
          why:
            "Письмо работает, когда друг может пересказать случившееся, не " +
            "переспрашивая.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину выбора, отличить две строки по смыслу,
      // услышать разговор.

      // ---- итог 1 ----
      {
        id: "q-pochemu-is-a-ne-are",
        kind: "choice",
        outcome: "говорить о неизвестном человеке и о неизвестной вещи: someone, something",
        prompt:
          "Ученик решил, что в строке Someone ___ at the door нужна форма are. Почему он ошибся?",
        options: [
          { text: "Потому что глагол берут по слову, а оно одно.", correct: true },
          { text: "Потому что за дверью может стоять один человек." },
          { text: "Потому что someone значит несколько человек." },
        ],
        hint: "Глагол смотрит не на людей, а на слово перед ним.",
        why:
          "Потому что глагол берут по слову, а оно одно. Слово someone о числе " +
          "людей не говорит ничего: оно говорит, что имени мы не знаем.",
      },
      {
        id: "q-ispravit-something-are",
        kind: "short",
        outcome: "говорить о неизвестном человеке и о неизвестной вещи: someone, something",
        prompt:
          "Ученик написал: Something are wrong with my phone. Запиши строку без ошибки.",
        answer: "Something is wrong with my phone.",
        accept: ["Something is wrong with my phone"],
        hint: "Заменить надо один глагол.",
        why:
          "Something is wrong with my phone. При something глагол всегда в " +
          "единственном числе.",
      },

      // ---- итог 2 ----
      {
        id: "q-nazvat-oshibku-dvuh-otricaniy",
        kind: "choice",
        outcome: "строить отрицание через any-: I didn't see anyone",
        prompt:
          "Чем плоха запись I didn't buy nothing?",
        options: [
          { text: "В ней глагол стоит не в том времени." },
          { text: "В ней два отрицания сразу.", correct: true },
          { text: "В ней не хватает подлежащего." },
        ],
        hint: "Найди в строке все слова, которые несут отрицание.",
        why:
          "В ней два отрицания сразу: didn't и nothing. Время глагола тут ни при " +
          "чём: didn't buy — обычное прошедшее.",
      },
      {
        id: "q-skazat-o-nesostoyavsheysya-pokupke",
        kind: "short",
        outcome: "строить отрицание через any-: I didn't see anyone",
        prompt:
          "Дана ничего не купила в магазине. Скажи это по-английски, начав с She didn't buy.",
        answer: "She didn't buy anything.",
        accept: ["She didn't buy anything"],
        hint: "Отрицание уже несёт didn't, значит второе слово начинается на any-.",
        why:
          "She didn't buy anything. Русское «ничего» здесь превращается в " +
          "anything, потому что отрицание в строке уже стоит.",
      },

      // ---- итог 3 ----
      {
        id: "q-otlichit-dve-stroki-o-nikom",
        kind: "choice",
        outcome: "говорить через nobody и nothing, не ставя второго отрицания",
        prompt:
          "Строки Nobody called me и I didn't call anybody говорят разное. Чем?",
        options: [
          { text: "Первая о прошлом, вторая о настоящем." },
          { text: "Ничем: обе значат одно и то же." },
          { text: "В первой не звонили мне, во второй не звонил я.", correct: true },
        ],
        hint: "Спроси у каждой строки: кто звонит, а кому звонят?",
        why:
          "В первой не звонили мне, во второй не звонил я. Слово nobody стоит " +
          "подлежащим, а anybody — после глагола.",
      },
      {
        id: "q-ispravit-nobody-doesnt",
        kind: "short",
        outcome: "говорить через nobody и nothing, не ставя второго отрицания",
        prompt:
          "Ученик написал: Nobody doesn't live here. Запиши строку без ошибки.",
        answer: "Nobody lives here.",
        accept: ["Nobody lives here"],
        hint: "Отрицание уже сидит в первом слове.",
        why:
          "Nobody lives here. Глагол при nobody идёт обычный, и в третьем лице " +
          "берёт -s.",
      },

      // ---- итог 4 ----
      {
        id: "q-pochemu-everyone-odno",
        kind: "choice",
        outcome: "говорить обо всех и обо всём: everyone is, everything is",
        prompt:
          "На празднике двадцать гостей, а в строке Everyone is here стоит is. Почему?",
        options: [
          { text: "Потому что глагол берут по слову everyone, а оно одно.", correct: true },
          { text: "Потому что гости считаются по одному." },
          { text: "Потому что по-русски здесь множественное число." },
        ],
        hint: "Смотри не на праздник, а на само слово в строке.",
        why:
          "Потому что глагол берут по слову everyone, а оно одно. По-русски здесь и " +
          "правда множественное число — на этом спотыкаются чаще всего, но " +
          "английский глагол смотрит только на слово перед ним.",
      },
      {
        id: "q-skazat-o-vkusah-vseh",
        kind: "short",
        outcome: "говорить обо всех и обо всём: everyone is, everything is",
        prompt:
          "Всем нравится эта песня. Скажи это по-английски, начав с Everybody.",
        answer: "Everybody likes this song.",
        accept: ["Everybody likes this song", "Everyone likes this song."],
        hint: "Слово everybody ведёт себя как he: глагол при нём берёт -s.",
        why:
          "Everybody likes this song. Годится и Everyone likes this song: эти два " +
          "слова равны.",
      },
      {
        id: "q-skazat-o-ede-na-stole",
        kind: "short",
        outcome: "говорить обо всех и обо всём: everyone is, everything is",
        prompt:
          "Все вещи уже в сумке. Скажи это по-английски, начав со слова о вещах.",
        answer: "Everything is in the bag.",
        accept: ["Everything is in the bag", "Everything is in my bag."],
        hint: "О людях говорят everyone и everybody, а о вещах — другое слово.",
        why:
          "Everything is in the bag. Вещи — не люди, и потому everyone сюда не " +
          "встанет.",
      },

      // ---- итог 5 ----
      {
        id: "q-vybrat-smysl-everywhere",
        kind: "choice",
        outcome: "называть неизвестное место: somewhere, anywhere, everywhere",
        prompt:
          "Друг написал: I looked everywhere. Что он сделал?",
        options: [
          { text: "Не искал нигде." },
          { text: "Заглянул в одно место." },
          { text: "Искал во всех местах, какие были.", correct: true },
        ],
        hint: "Слово everywhere говорит не об одном месте.",
        why:
          "Искал во всех местах. Про «нигде не искал» сказали бы иначе: I didn't " +
          "look anywhere.",
      },
      {
        id: "q-otlichit-mesta",
        kind: "choice",
        outcome: "называть неизвестное место: somewhere, anywhere, everywhere",
        prompt:
          "Строки We looked everywhere и The keys are somewhere here говорят о разном. Чем?",
        options: [
          { text: "Первая о доме, вторая об улице." },
          { text: "Первая о всех местах, вторая об одном неизвестном.", correct: true },
          { text: "Первая о прошлом, вторая о будущем." },
        ],
        hint: "Спроси у каждой строки: сколько мест она называет?",
        why:
          "Первая о всех местах, вторая об одном неизвестном. Время у них и правда " +
          "разное, но говорят они не об этом.",
      },
      {
        id: "q-dopisat-mesto-v-otricanii",
        kind: "short",
        outcome: "называть неизвестное место: somewhere, anywhere, everywhere",
        prompt:
          "Допиши одно слово: They didn't go ___ yesterday. Они никуда не ходили.",
        answer: "anywhere",
        accept: ["Anywhere"],
        hint: "Отрицание в строке несёт didn't.",
        why:
          "They didn't go anywhere yesterday. Запись didn't go somewhere дала бы " +
          "обратное: будто куда-то они всё-таки не ходили, а куда-то ходили.",
      },

      // ---- итог 6 ----
      {
        id: "q-skazat-o-holodnom-pit-e",
        kind: "short",
        outcome: "ставить уточнение после местоимения: something cold, something else",
        prompt:
          "Гость хочет чего-нибудь холодного попить. Скажи это по-английски, начав с He wants.",
        answer: "He wants something cold to drink.",
        accept: ["He wants something cold to drink"],
        hint: "Оба уточнения встанут после местоимения, одно за другим.",
        why:
          "He wants something cold to drink. Сперва идёт свойство вещи, потом " +
          "оборот с to — зачем она нужна.",
      },
      {
        id: "q-nazvat-osobennost-poryadka",
        kind: "choice",
        outcome: "ставить уточнение после местоимения: something cold, something else",
        prompt:
          "Чем запись something cold отличается от записи a cold drink?",
        options: [
          { text: "В ней прилагательное стоит после, а не перед.", correct: true },
          { text: "В ней нет глагола." },
          { text: "В ней говорится о напитке, а не о еде." },
        ],
        hint: "Сравни, где в каждой записи стоит слово cold.",
        why:
          "В ней прилагательное стоит после. Это редкий случай: обычно в " +
          "английском прилагательное идёт перед вещью.",
      },
      {
        id: "q-napisat-o-ede",
        kind: "short",
        outcome: "ставить уточнение после местоимения: something cold, something else",
        prompt:
          "Дана хочет чего-нибудь поесть. Скажи это по-английски, начав с She wants.",
        answer: "She wants something to eat.",
        accept: ["She wants something to eat"],
        hint: "Уточнение — оборот из to и глагола — встанет в конец.",
        why:
          "She wants something to eat. Оборот to eat говорит, зачем ей эта вещь " +
          "нужна.",
      },

      // ---- итог 7 ----
      {
        id: "q-najti-vinovnika-v-pisme",
        kind: "choice",
        outcome: "находить в письме, кто что видел и чего не нашли",
        prompt:
          "В письме строка: Somebody took my umbrella, but nobody saw it. Что из этого следует?",
        options: [
          { text: "Зонт никто не брал." },
          { text: "Зонт взял друг, который писал письмо." },
          { text: "Зонт взяли, но кто — неизвестно.", correct: true },
        ],
        hint: "Первая половина строки говорит о деле, вторая — о свидетелях.",
        why:
          "Зонт взяли, но кто — неизвестно. Слово somebody говорит, что человек " +
          "был, а nobody saw it — что его не видели.",
      },
      {
        id: "q-chto-znachit-nobody-found",
        kind: "choice",
        outcome: "находить в письме, кто что видел и чего не нашли",
        prompt:
          "В письме стоит: Nobody found anything there. Что это значит?",
        options: [
          { text: "Кто-то там что-то нашёл." },
          { text: "Там никто ничего не нашёл.", correct: true },
          { text: "Там нашли всё, что пропало." },
        ],
        hint: "Отрицание в этой строке сидит в первом слове, а второго при глаголе нет.",
        why:
          "Там никто ничего не нашёл. Слово nobody уже отрицательное, и потому " +
          "глагол при нём обычный — found, а не didn't find.",
      },

      // ---- итог 8 ----
      {
        id: "q-uslyshat-chto-nashli",
        kind: "short",
        outcome: "слышать в разговоре, кто что нашёл",
        zvuk:
          "Did anybody find a violin here? — Yes, somebody left a violin yesterday.",
        prompt:
          "Послушай. Что нашли? Ответь одним словом по-английски.",
        answer: "violin",
        accept: ["Violin", "a violin"],
        hint: "Вещь названа в первой реплике, в самом вопросе.",
        why: "Did anybody find a violin here? — Yes, somebody left a violin yesterday.",
      },
      {
        id: "q-uslyshat-est-li-imya",
        kind: "short",
        outcome: "слышать в разговоре, кто что нашёл",
        zvuk:
          "Did anybody find the bag? — Nobody. It was here all day.",
        prompt:
          "Послушай. Кто нашёл сумку? Ответь одним словом по-английски.",
        answer: "nobody",
        accept: ["Nobody"],
        hint: "Ответ во второй реплике состоит из одного слова.",
        why: "Did anybody find the bag? — Nobody.",
      },

      // ---- итог 9 ----
      {
        id: "q-chego-ne-hvataet-chuzhomu-pismu",
        kind: "choice",
        outcome: "проверять письмо о случившемся: названо, кого и чего не видели",
        prompt:
          "Письмо целиком: I lost my keys. Someone took them. Чего в нём не хватает?",
        options: [
          { text: "Не сказано, кого не видели и где искали.", correct: true },
          { text: "Не сказано, какого цвета ключи." },
          { text: "Не сказано, сколько ключей было." },
        ],
        hint: "Сравни письмо с четырьмя строками, которые в таком письме нужны.",
        why:
          "Не сказано, кого не видели и где искали. Цвет и число ключей другу для " +
          "рассказа не нужны.",
      },
      {
        id: "q-dopisat-stroku-o-poiskah",
        kind: "short",
        outcome: "проверять письмо о случившемся: названо, кого и чего не видели",
        prompt:
          "К письму допиши строку о поисках: я искал везде. Начни с I looked.",
        answer: "I looked everywhere.",
        accept: ["I looked everywhere"],
        hint: "Слово о месте встанет после глагола.",
        why:
          "I looked everywhere. Отрицания в строке нет, и потому anywhere сюда не " +
          "встанет.",
      },
      {
        id: "q-napisat-o-svidetelyah",
        kind: "short",
        outcome: "проверять письмо о случившемся: названо, кого и чего не видели",
        prompt:
          "К письму допиши строку о свидетелях: никто ничего не видел. Начни с Nobody.",
        answer: "Nobody saw anything.",
        accept: ["Nobody saw anything"],
        hint: "Отрицание уже сидит в первом слове, значит глагол идёт обычный.",
        why:
          "Nobody saw anything. Запись Nobody didn't see anything поставила бы в " +
          "строку два отрицания.",
      },
    ],
  },
};

export default module;
