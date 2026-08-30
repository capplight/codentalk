import type { Module } from "@/lib/content/types";

/**
 * Модуль 14 курса «Английский · Elementary»: больше и меньше.
 *
 * Программа: docs/programma-english-elementary.md, модуль 14 — «сравнивать две
 * вещи»; грамматика: сравнительная степень, `than`, особые формы `better`,
 * `worse`. Это первый модуль третьей части курса.
 *
 * ИМЯ ГЛАВНОЙ ВЕЩИ — «СРАВНЕНИЕ», А ИМЯ ФОРМЫ — «ФОРМА СРАВНЕНИЯ».
 *
 * Вещей здесь две, и потому имён два: сравнение — то, что делает говорящий,
 * форма сравнения — то, во что встаёт прилагательное. Слов «степень»,
 * «сопоставление», «противопоставление» в тексте для ученика нет ни разу
 * (CLAUDE.md, «Понятность объяснения», пункт 3).
 *
 * Слово «прилагательное» здесь настоящее и уже введено курсом: ступень Beginner,
 * модуль «Какой он», и модуль 1 этой ступени. Придумывать ему замену вроде
 * «слова о вещи» нельзя — на этом курс уже обжигался дважды.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Все графы English Grammar Profile, A2, раздел
 * ADJECTIVES comparatives:
 *
 * 1. «FORM: + -ER» — «Can form comparative adjectives from adjectives of one
 *    syllable by adding '-er'», пример источника «I played computer games with
 *    my older brother». Это урок 1.
 *
 * 2. «FORM: WITH 'THAN'» — «Can use a comparative adjective with 'than' to
 *    compare two nouns or noun phrases», пример «It's smaller than my old phone
 *    and I like it». Это урок 1, и пример источника сам о сравнении двух вещей.
 *
 * 3. «FORM: WITH 'MORE'» — «Can form a range of comparative adjective phrases
 *    using 'more' + longer adjectives (usually three or more syllables)»,
 *    пример «I think you must be more careful». Это урок 2.
 *
 * 4. «FORM: ENDING IN '-E' + '-R'», «FORM: DOUBLE CONSONANT + '-ER'» и «FORM: +
 *    -IER» — три графы о правописании, все A2. Это урок 3.
 *
 * 5. «FORM: IRREGULAR» — «Can form irregular comparative adjectives», пример
 *    источника «What colour do you think is better?». Это урок 4.
 *
 * 6. «FORM: BEFORE NOUNS» — «Can use comparative adjectives attributively,
 *    before nouns», пример «I just watched a cricket match with my younger
 *    brother and my father». Это урок 5. Там же «FORM: COMPLEMENT OF 'BE'» —
 *    форма сравнения после be, на ней стоят уроки 1–4.
 *
 * 7. Описания Совета Европы, с. 84, шкала «Notes, messages and forms», графа
 *    A2: «Can formulate short, simple notes and messages relating to matters in
 *    areas of immediate need». Опора урока письма.
 *
 * ЧЕГО В МОДУЛЕ НЕТ, И ПОЧЕМУ ЭТО РЕШЕНИЕ, А НЕ ПРОПУСК. Четыре графы того же
 * раздела стоят на B1, и все четыре — про усиление сравнения:
 * «FORM/USE: WITH '(SO) MUCH'» (much better), «FORM/USE: WITH 'A (LITTLE) BIT'»
 * (a bit smaller), «FORM/USE: WITH 'EVEN'» (even better) и «FORM/USE: WITH
 * 'AND'» (better and better). Выше ступени, и в уроке об этом не сказано ни
 * слова — просто нет.
 *
 * СЛОВАРЬ МОДУЛЯ. Счёт даёт `npm run kontrol`, и сверяться надо с ним, а не с
 * памятью. Норма владельца от 20 августа — не меньше тридцати карточек и не
 * меньше пятнадцати новых для ступени.
 *
 * Слова собраны вокруг случая модуля: сравнивают две вещи, а сравнивать
 * приходится жильё, работу и цену. Отсюда и `engineer` с `mechanic`, и
 * `electricity` со `size`, и `cheque` с `pence`.
 *
 * СНЯТО ПРИ ПОДБОРЕ: `underground` — Викисловарь читает его `ʊndɐɡɹʊnd`, что
 * неверно, а `ipa-en-uk` слова не знает вовсе; `pale`, `shy`, `horrible`,
 * `length`, `heating`, `photographer` — Oxford 3000 ставит их на B1; `article` —
 * слово ступени, но курс уже зовёт артиклем служебное слово, и второе значение
 * рядом с первым ученику не нужно.
 */
const module: Module = {
  slug: "bolshe-i-menshe",
  title: "Больше и меньше",

  outcomes: [
    "сравнивать две вещи: My flat is smaller than yours",
    "сравнивать длинным прилагательным: This job is more attractive",
    "выбирать написание формы сравнения: bigger, nicer, easier",
    "говорить better и worse там, где нет окончания -er",
    "ставить форму сравнения перед вещью: my older brother",
    "находить в объявлении, что дешевле и что больше",
    "слышать в разговоре, что из двух выбрали",
    "проверять записку со сравнением: названы обе вещи",
  ],

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A2, ADJECTIVES comparatives, «FORM: + -ER»: «Can form comparative " +
        "adjectives from adjectives of one syllable by adding '-er'», пример " +
        "источника — «I played computer games with my older brother» — урок 1. " +
        "A2, там же, «FORM: WITH 'THAN'»: «Can use a comparative adjective with " +
        "'than' to compare two nouns or noun phrases», пример — «It's smaller than " +
        "my old phone and I like it» — урок 1. Пример источника сам о сравнении " +
        "двух вещей, и отсюда случай модуля. " +
        "A2, там же, «FORM: COMPLEMENT OF 'BE'»: «Can use comparative adjectives as " +
        "a complement of 'be'» — на этой графе стоят уроки 1–4: форма сравнения " +
        "идёт после is, are, was. " +
        "A2, там же, «FORM: WITH 'MORE'»: «Can form a range of comparative " +
        "adjective phrases using 'more' + longer adjectives (usually three or more " +
        "syllables)», пример — «I think you must be more careful» — урок 2. " +
        "ОСТОРОЖНО, ЗДЕСЬ ЦИФРА ГРАФЫ НЕ ПОРОГ. Графа пишет «usually three or " +
        "more», а её единственный пример — `careful`, слово из ДВУХ слогов " +
        "(`/ˈkeəfl/`). Значит три — частотное наблюдение с оговоркой «usually», а " +
        "не правило. Урок берёт порог в два слога, как в графе превосходной " +
        "степени («two or more syllables»), и отдельно называет исключения: слова " +
        "на -y, -er и -et берут окончание. Нашёл методист по правилу «к цитате " +
        "всегда читается её пример». " +
        "A2, там же, три графы правописания — урок 3: «FORM: ENDING IN '-E' + " +
        "'-R'» («Can form comparative adjectives with adjectives of one syllable " +
        "ending in 'e', by adding '-r'»), «FORM: DOUBLE CONSONANT + '-ER'» («with " +
        "adjectives of one syllable with a short vowel, by doubling the final " +
        "consonant and adding '-er'») и «FORM: + -IER» («with adjectives of two " +
        "syllables ending in '-y' by changing the 'y' to an 'I' and adding '-er'»). " +
        "A2, там же, «FORM: IRREGULAR»: «Can form irregular comparative " +
        "adjectives», пример — «What colour do you think is better?» — урок 4. " +
        "A2, там же, «FORM: BEFORE NOUNS»: «Can use comparative adjectives " +
        "attributively, before nouns», пример — «I just watched a cricket match " +
        "with my younger brother and my father» — урок 5. " +
        "ЧЕГО НЕТ. Четыре графы того же раздела стоят на B1, и все про усиление " +
        "сравнения: «FORM/USE: WITH '(SO) MUCH'», «FORM/USE: WITH 'A (LITTLE) " +
        "BIT'», «FORM/USE: WITH 'EVEN'» и «FORM/USE: WITH 'AND'» (better and " +
        "better). Выше ступени, запрета на них в уроке не написано",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "УРОК ПИСЬМА «Пишем записку о выборе». с. 84, шкала «Notes, messages and " +
        "forms», графа A2: «Can formulate short, simple notes and messages relating " +
        "to matters in areas of immediate need». " +
        "ЖАНР ЗДЕСЬ НЕ ИЗ УРОКА ЧТЕНИЯ, И ЭТО ОГОВОРКА. Урок 6 даёт объявление " +
        "(`notice`), урок 8 просит записку. Правило CLAUDE.md требует брать жанр из " +
        "урока чтения того же модуля или оговорить расхождение — оговариваю. " +
        "Основание: объявление о сдаче жилья пишет не жилец, а хозяин, и просить " +
        "ученика написать такое значило бы сменить ему роль посреди модуля. Новых " +
        "слов записке при этом не нужно: формы сравнения и слова о выборе те же. " +
        "Нашёл методист. " +
        "Шкала выбрана нарочно, а не соседняя: с. 81 того же документа разводит их " +
        "прямо — Correspondence о переписке, «Notes, messages and forms» о передаче " +
        "сведений. Записка о выборе жилья — второе",
      license: "CC BY-NC-SA 4.0",
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
      ref: "Cambridge English, A2 Key vocabulary list (август 2025)",
      section:
        "Все карточки модуля взяты из словника ступени. Подбор шёл через " +
        "`npm run slovo -- --zapas`: это слова требований экзамена A2, до которых " +
        "курс ещё не дошёл. " +
        "СНЯТЫ ПРИ ПОДБОРЕ: `pale`, `shy`, `horrible`, `length`, `heating`, " +
        "`photographer` — Oxford 3000 ставит их на B1; `underground` — спорное " +
        "чтение (см. опору о произношении); `article` — слово в словнике есть, но " +
        "курс уже зовёт артиклем служебное слово, и второе значение рядом с первым " +
        "ученику не нужно. " +
        "`hers` И `yours` ПОСЛЕ `than` ВЗЯТЫ ВЫШЕ ГРАФЫ, И ЭТО ОБЪЯВЛЯЕТСЯ. " +
        "Найдено методистом 30 августа 2026. English Grammar Profile даёт ровно " +
        "наш оборот на B2: PRONOUNS possessive, «FORM: COMPARATIVE CLAUSES WITH " +
        "'OURS', 'HERS'» — «Can use the possessive pronouns 'hers' and 'ours' in " +
        "comparative clauses», пример «I told my mother that your Spanish omelette " +
        "is better than hers». Графа B1 того же ряда, «COMPARATIVE CLAUSES WITH " +
        "'MINE', 'YOURS'», ограничена оборотом `(not) as … as`; графы A2, " +
        "покрывающей `than hers`, методист не нашёл. Оба слова стоят в словнике A2 " +
        "Key (`hers (pron)`, `yours (pron)`), значит берутся по мерке ступени — " +
        "той же, что в модулях 18–21. Вопрос вынесен владельцу: если решение " +
        "«не берём», меняются заголовок урока 1 и итог модуля",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Словарь произношения materials/ipa-en-uk.txt",
      section:
        "Чтение карточек модуля. Условности курса применены: `r` вместо `ɹ`, `g` " +
        "вместо `ɡ`, краткий гласный через `e` вместо `ɛ`, безударный на конце " +
        "через `ə`, слоговой согласный без `ə`, знак ударения перед слогом. " +
        "Слова `transport` в этом файле нет — чтение взято из " +
        "`materials/wikipron-en-uk.tsv` (`tɹænspɔːt`) и приведено к условностям. " +
        "СНЯТО: `underground` — Викисловарь читает его `ʊndɐɡɹʊnd`, что неверно, а " +
        "`ipa-en-uk` слова не знает вовсе. Такие слова решает владелец как " +
        "преподаватель, и слово осталось в запасе ступени",
      license: "свободная лицензия",
    },
  ],

  lessons: [
    // =====================================================================
    {
      slug: "menshe-chem",
      title: "Меньше, чем: My flat is smaller than yours",
      estimatedMinutes: 15,
      outcome: "сравнивать две вещи: My flat is smaller than yours",
      vozvrat: [{ iz: "mozhet-byt", zadanie: "z1-dopisat-might" }],

      blocks: [
        {
          id: "zachem-sravnivat",
          kind: "explain",
          text: [
            "Алим снял новую квартиру и рассказывает о ней Данияру.",
            "My flat is smaller than yours. — Моя квартира меньше твоей.",
            "Так делают сравнение: называют две вещи и говорят, какая из них какая.",
            "Прилагательное для этого встаёт в особую форму: small становится smaller.",
            "По-русски то же самое: «маленький» становится «меньше», «дешёвый» — «дешевле».",
            "И в обоих языках меняется конец слова, а не начало.",
          ],
        },
        {
          id: "forma-sravneniya",
          kind: "table",
          caption: "Обычная форма и форма сравнения",
          zvuchat: [
            "small — smaller",
            "old — older",
            "young — younger",
            "cheap — cheaper",
            "low — lower",
          ],
          head: ["Слово и его форма сравнения", "Пример"],
          rows: [
            ["small — smaller", "My flat is smaller."],
            ["old — older", "My phone is older."],
            ["young — younger", "My brother is younger."],
            ["cheap — cheaper", "This flat is cheaper."],
            ["low — lower", "The price is lower."],
          ],
        },
        {
          id: "kak-delaetsya-forma",
          kind: "explain",
          text: [
            "К короткому прилагательному прибавляют окончание -er: small — smaller.",
            "Форма сравнения одна на все лица и на любое число: I am older, they are older.",
            "Сама вещь при этом стоит перед is или are, как и в обычной строке.",
          ],
        },
        {
          id: "than-vtoraya-veshch",
          kind: "explain",
          text: [
            "Сравнение требует двух вещей, и вторую называют после слова than.",
            "My flat is smaller than yours — «моя квартира меньше твоей».",
            "Слово than стоит сразу после формы сравнения, а за ним идёт вторая вещь.",
            "Без than строка тоже верна, если из разговора ясно, с чем сравнивают.",
          ],
        },
        {
          id: "dve-kvartiry",
          kind: "example",
          caption: "Две квартиры",
          razgovor: true,
          zvuchat: [
            "My flat is smaller than yours.",
            "But the price is lower?",
            "Yes, and the kitchen is bigger.",
            "What about the size of the rooms?",
            "They are smaller.",
          ],
          text:
            "My flat is smaller than yours.\nBut the price is lower?\nYes, and the kitchen is bigger.\nWhat about the size of the rooms?\nThey are smaller.",
          perevod: {
            "My flat is smaller than yours.": "Моя квартира меньше твоей.",
            "But the price is lower?": "Но цена ниже?",
            "Yes, and the kitchen is bigger.": "Да, и кухня больше.",
            "What about the size of the rooms?": "А размер комнат?",
            "They are smaller.": "Комнаты меньше.",
          },
          explain:
            "Каждая строка сравнивает одну вещь с другой. В первой вторая вещь " +
            "названа после than, в остальных она уже известна из разговора.",
        },
        {
          id: "slovar-zhilya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "low", translation: "низкий", example: "The price is lower.", hint: "/ləʊ/" },
            { term: "size", translation: "размер", example: "What about the size of the rooms?", hint: "/saɪz/" },
            { term: "huge", translation: "огромный", example: "Their kitchen is huge.", hint: "/hjuːdʒ/" },
            { term: "electricity", translation: "электричество", example: "The electricity here is cheaper.", hint: "/ɪˌlekˈtrɪsɪti/" },
            { term: "yours", translation: "твой, ваш", example: "My flat is smaller than yours.", hint: "/jɔːz/" },
            { term: "hers", translation: "её", example: "My room is smaller than hers.", hint: "/hɜːz/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-okonchanie-sravneniya",
          kind: "gap",
          prompt: "Твоя квартира меньше. Допиши недостающее слово.",
          before: "My flat is ",
          after: " than yours.",
          answer: "smaller",
          hint: "К прилагательному small прибавляется окончание.",
          why:
            "My flat is smaller than yours. Окончание -er и делает из прилагательного " +
            "форму сравнения.",
        },
        {
          id: "z2-vybrat-so-than",
          kind: "choice",
          prompt: "Цена здесь ниже, чем там. Какая запись верна?",
          options: [
            { text: "The price here is lower that there." },
            { text: "The price here is more low than there." },
            { text: "The price here is lower than there.", correct: true },
          ],
          hint: "Вторую вещь вводит одно короткое слово, и оно не that.",
          why:
            "The price here is lower than there. Вторую вещь называют после than, а " +
            "короткое прилагательное берёт окончание, а не слово more.",
        },
        {
          id: "z3-otmetit-formy-sravneniya",
          kind: "hottext",
          prompt: "Отметь строки, где стоит форма сравнения.",
          parts: [
            { text: "The kitchen is bigger", selectable: true, correct: true },
            { text: " · " },
            { text: "The kitchen is big", selectable: true },
            { text: " · " },
            { text: "My brother is younger than me", selectable: true, correct: true },
            { text: " · " },
            { text: "The size is huge", selectable: true },
          ],
          hint: "Форму сравнения узнают по окончанию -er.",
          why:
            "Форма сравнения в первой и третьей строках. Во второй и четвёртой " +
            "прилагательное стоит в обычной форме и ни с чем не сравнивается.",
        },
        {
          id: "z4-sobrat-sravnenie",
          kind: "order",
          prompt: "Собери строку: электричество здесь дешевле, чем там.",
          items: ["than there.", "cheaper", "is", "The electricity here"],
          answer: [3, 2, 1, 0],
          hint: "Сначала о чём речь, потом is, потом форма сравнения, потом than.",
          why:
            "The electricity here is cheaper than there. Слово than стоит сразу " +
            "после формы сравнения.",
        },
        {
          id: "z5-napisat-sravnenie",
          kind: "short",
          prompt:
            "Комната у тебя меньше, чем у Даны. Скажи это по-английски, начав с My room.",
          answer: "My room is smaller than Dana's.",
          accept: [
            "My room is smaller than Dana's",
            "My room is smaller than Dana's room.",
            "My room is smaller than hers.",
          ],
          hint: "Вторая вещь идёт после than, и это комната Даны.",
          why:
            "My room is smaller than Dana's. Вторую вещь можно назвать и короче — " +
            "Dana's, — если понятно, о чём речь.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "dlinnoe-slovo-more",
      title: "Длинное слово: This job is more attractive",
      estimatedMinutes: 14,
      outcome: "сравнивать длинным прилагательным: This job is more attractive",

      blocks: [
        {
          id: "zachem-more",
          kind: "explain",
          text: [
            "Дане предложили другую работу, и она сравнивает её с прежней.",
            "This job is more attractive. — Эта работа привлекательнее.",
            "И тут снова как по-русски: «привлекательнее» можно сказать и «более привлекательная».",
            "Русский выбирает между окончанием и словом «более», английский — между -er и more.",
            "Длинному прилагательному хватает слова more, и само оно при этом не меняется.",
          ],
        },
        {
          id: "korotkoe-i-dlinnoe",
          kind: "table",
          caption: "Короткое прилагательное и длинное",
          zvuchat: ["cheaper", "younger", "more attractive", "more expensive"],
          head: ["Слово", "Форма сравнения"],
          rows: [
            ["cheap", "cheaper"],
            ["young", "younger"],
            ["attractive", "more attractive"],
            ["expensive", "more expensive"],
          ],
        },
        {
          id: "kakoe-slovo-dlinnoe",
          kind: "explain",
          text: [
            "Слог — это часть слова с одним гласным звуком: cheap один слог, po-lite два.",
            "Длинным считают прилагательное из двух слогов и больше: po-lite, at-trac-tive.",
            "Слова на -y — исключение: они двусложные, но берут окончание, а не more.",
            "Так же ведут себя clever и quiet: easier, busier, cleverer, quieter.",
            "У остальных длинных слов форма сравнения собирается из двух слов: more и само прилагательное.",
            "Слово than после неё стоит так же, как после короткой формы.",
          ],
        },
        {
          id: "ne-oba-srazu",
          kind: "note",
          tone: "mistake",
          text:
            "«more cheaper» и «more attractiver» — так не говорят.\n\nЛибо окончание " +
            "-er, либо слово more: cheaper, more attractive.",
        },
        {
          id: "dve-raboty",
          kind: "example",
          caption: "Две работы",
          razgovor: true,
          zvuchat: [
            "This job is more attractive than my old one.",
            "Is the pay higher?",
            "No, but the people are more polite.",
            "Who works there?",
            "An engineer. He is more careful than me and he has more experience.",
          ],
          text:
            "This job is more attractive than my old one.\nIs the pay higher?\nNo, but the people are more polite.\nWho works there?\nAn engineer. He is more careful than me and he has more experience.",
          perevod: {
            "This job is more attractive than my old one.":
              "Эта работа привлекательнее прежней.",
            "Is the pay higher?": "Платят больше?",
            "No, but the people are more polite.":
              "Нет, зато люди вежливее.",
            "Who works there?": "Кто там работает?",
            "An engineer. He is more careful than me and he has more experience.":
              "Инженер. Он аккуратнее меня, и опыта у него больше.",
          },
          explain:
            "Длинные прилагательные берут more, короткое high — окончание. В одном " +
            "разговоре встречаются оба способа, и это обычное дело.",
        },
        {
          id: "slovar-raboty",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "attractive", translation: "привлекательный", example: "This job is more attractive.", hint: "/əˈtræktɪv/" },
            { term: "polite", translation: "вежливый", example: "The people are more polite.", hint: "/pəˈlaɪt/" },
            { term: "clever", translation: "умный", example: "The engineer is clever.", hint: "/ˈklevə/" },
            { term: "engineer", translation: "инженер", example: "An engineer earns more than a painter.", hint: "/ˌendʒɪˈnɪə/" },
            { term: "experience", translation: "опыт, накопленный работой", example: "A pilot needs more experience.", hint: "/ɪkˈspɪəriəns/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-vybrat-sposob",
          kind: "choice",
          prompt: "Эта работа привлекательнее. Какая запись верна?",
          options: [
            { text: "This job is attractiver." },
            { text: "This job is more attractive.", correct: true },
            { text: "This job is more attractiver." },
          ],
          hint: "У длинного прилагательного окончания не бывает.",
          why:
            "This job is more attractive. Длинное слово берёт more и само не " +
            "меняется; два способа разом не соединяют.",
        },
        {
          id: "z2-dopisat-more",
          kind: "gap",
          prompt: "Люди здесь вежливее. Допиши недостающее слово.",
          before: "The people here are ",
          after: " polite.",
          answer: "more",
          hint: "Слово polite длинное, и окончание к нему не прибавляют.",
          why:
            "The people here are more polite. Форма сравнения у длинного слова " +
            "собирается из двух слов.",
        },
        {
          id: "z3-otmetit-vernye",
          kind: "hottext",
          prompt: "Отметь строки, где форма сравнения собрана верно.",
          parts: [
            { text: "This flat is more expensive", selectable: true, correct: true },
            { text: " · " },
            { text: "This flat is more cheaper", selectable: true },
            { text: " · " },
            { text: "The price is lower", selectable: true, correct: true },
            { text: " · " },
            { text: "The office is expensiver", selectable: true },
          ],
          hint: "У каждого слова один способ, а не два.",
          why:
            "Верны первая и третья строки. Во второй сошлись more и окончание, а в " +
            "четвёртой длинное слово взяло окончание, которого у него не бывает.",
        },
        {
          id: "z4-sobrat-s-more",
          kind: "order",
          prompt: "Собери строку: эта работа привлекательнее прежней.",
          items: ["than my old one.", "attractive", "more", "is", "This job"],
          answer: [4, 3, 2, 1, 0],
          hint: "Слово more стоит перед прилагательным, а than — после него.",
          why:
            "This job is more attractive than my old one. Оборот my old one " +
            "заменяет «прежняя работа», чтобы не повторять слово job.",
        },
        {
          id: "z5-napisat-o-lyudyah",
          kind: "short",
          prompt:
            "Люди здесь вежливее, чем там. Скажи это по-английски, начав с The people.",
          answer: "The people here are more polite than there.",
          accept: [
            "The people here are more polite than there",
            "The people are more polite than there.",
            "The people here are more polite than the people there.",
          ],
          hint: "Длинное прилагательное берёт more, а вторую вещь вводит than.",
          why:
            "The people here are more polite than there. Слова here и there и есть " +
            "два места, которые сравнивают.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "kak-pishetsya-forma",
      title: "Как пишется форма: bigger, nicer, easier",
      estimatedMinutes: 14,
      outcome: "выбирать написание формы сравнения: bigger, nicer, easier",

      blocks: [
        {
          id: "zachem-pravopisanie",
          kind: "explain",
          text: [
            "Окончание -er прибавляется не ко всякому короткому слову одинаково.",
            "У big выходит bigger, у nice — nicer, у easy — easier.",
            "Три случая, и каждый узнают по концу самого слова.",
          ],
        },
        {
          id: "tri-sluchaya",
          kind: "table",
          caption: "Три случая написания",
          zvuchat: [
            "big — bigger",
            "hot — hotter",
            "nice — nicer",
            "large — larger",
            "easy — easier",
            "busy — busier",
          ],
          head: ["Чем кончается слово", "Что делают", "Пример"],
          rows: [
            ["одна согласная после краткого гласного", "согласную удваивают", "big — bigger"],
            ["одна согласная после краткого гласного", "согласную удваивают", "hot — hotter"],
            ["буква e", "прибавляют только -r", "nice — nicer"],
            ["буква e", "прибавляют только -r", "large — larger"],
            ["буква y", "y меняют на i и прибавляют -er", "easy — easier"],
            ["буква y", "y меняют на i и прибавляют -er", "busy — busier"],
          ],
        },
        {
          id: "pochemu-tak",
          kind: "explain",
          text: [
            "Удвоение нужно, чтобы гласный остался кратким: без второй g вышло бы biger.",
            "У слов на e второй e не пишут: nice уже кончается на нужную букву.",
            "Слова на y — двусложные: ea-sy, bu-sy. Окончание им годится, а буква меняется.",
            "Так же ведут себя два слова из этого модуля: clever — cleverer, quiet — quieter.",
            "Остальные короткие слова берут -er без изменений: small — smaller.",
          ],
        },
        {
          id: "slovar-svoystv",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "lazy", translation: "ленивый", example: "My cat is lazier than yours.", hint: "/ˈleɪzi/" },
            { term: "slim", translation: "стройный", example: "He is slimmer than his brother.", hint: "/slɪm/" },
            { term: "top", translation: "верх", example: "The top floor is quieter.", hint: "/tɒp/" },
            { term: "side", translation: "сторона", example: "This side of the street is nicer.", hint: "/saɪd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-udvoenie",
          kind: "gap",
          prompt: "Кухня больше. Допиши форму сравнения слова big.",
          before: "The kitchen is ",
          after: ".",
          answer: "bigger",
          hint: "После краткого гласного согласную удваивают.",
          why:
            "The kitchen is bigger. Без второй g гласный читался бы иначе, поэтому " +
            "согласная удваивается.",
        },
        {
          id: "z2-vybrat-napisanie-y",
          kind: "choice",
          prompt: "Работа стала легче. Какая запись верна?",
          options: [
            { text: "The work is easyer." },
            { text: "The work is more easy." },
            { text: "The work is easier.", correct: true },
          ],
          hint: "Слово кончается на y, и эта буква меняется.",
          why:
            "The work is easier. Буква y уступает место i, а окончание -er остаётся.",
        },
        {
          id: "z3-sootnesti-slovo-i-formu",
          kind: "match",
          prompt: "Соедини слово и его форму сравнения.",
          left: ["nice", "hot", "busy"],
          right: ["busier", "nicer", "hotter"],
          answer: [1, 2, 0],
          hint: "Смотри на последнюю букву каждого слова.",
          why:
            "Слово на e берёт только -r, слово с краткой гласной удваивает " +
            "согласную, слово на y меняет её на i.",
        },
        {
          id: "z4-otmetit-vernoe-napisanie",
          kind: "hottext",
          prompt: "Отметь формы сравнения, написанные верно.",
          parts: [
            { text: "larger", selectable: true, correct: true },
            { text: " · " },
            { text: "lazyer", selectable: true },
            { text: " · " },
            { text: "slimmer", selectable: true, correct: true },
            { text: " · " },
            { text: "hoter", selectable: true },
          ],
          hint: "Проверь каждое слово по его последней букве.",
          why:
            "Верны larger и slimmer. В lazyer буква y должна была стать i, а в " +
            "hoter не удвоилась согласная.",
        },
        {
          id: "z5-napisat-tri-formy",
          kind: "short",
          prompt:
            "Напиши форму сравнения слова lazy — по-английски, одним словом.",
          answer: "lazier",
          accept: ["Lazier"],
          hint: "Слово кончается на y.",
          why: "Lazier. Буква y меняется на i, и прибавляется -er.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "luchshe-i-huzhe",
      title: "Лучше и хуже: better, worse",
      estimatedMinutes: 14,
      outcome: "говорить better и worse там, где нет окончания -er",

      blocks: [
        {
          id: "zachem-osobye-formy",
          kind: "explain",
          text: [
            "У двух прилагательных форма сравнения не собирается по правилу вовсе.",
            "Good не даёт gooder, а bad не даёт badder.",
            "Вместо них стоят другие слова: better и worse.",
            "Их запоминают целиком, как и неправильные глаголы прошедшего времени.",
          ],
        },
        {
          id: "osobye-pary",
          kind: "table",
          caption: "Особые формы",
          zvuchat: [
            "better",
            "worse",
            "This phone is better.",
            "The weather is worse today.",
          ],
          head: ["Слово", "Форма сравнения", "Пример"],
          rows: [
            ["good", "better", "This phone is better."],
            ["bad", "worse", "The weather is worse today."],
          ],
        },
        {
          id: "kak-ih-stavyat",
          kind: "explain",
          text: [
            "Better и worse ставят в строку так же, как обычную форму сравнения.",
            "После них тоже идёт than: This phone is better than my old one.",
            "Слово more к ним не прибавляют: они уже форма сравнения.",
          ],
        },
        {
          id: "ne-more-better",
          kind: "note",
          tone: "mistake",
          text:
            "«more better» и «gooder» — так не говорят.\n\nФорма сравнения у good " +
            "одна: better.",
        },
        {
          id: "vybor-telefona",
          kind: "example",
          caption: "Какой телефон брать",
          razgovor: true,
          zvuchat: [
            "What colour do you think is better?",
            "The black one.",
            "And the memory?",
            "The black one is better, but the price is worse.",
            "How much worse?",
            "A penny. Forty pence.",
          ],
          text:
            "What colour do you think is better?\nThe black one.\nAnd the memory?\nThe black one is better, but the price is worse.\nHow much worse?\nA penny. Forty pence.",
          perevod: {
            "What colour do you think is better?": "Какой цвет, по-твоему, лучше?",
            "The black one.": "Чёрный.",
            "And the memory?": "А память?",
            "The black one is better, but the price is worse.":
              "У чёрного память лучше, зато цена хуже.",
            "How much worse?": "Насколько хуже?",
            "A penny. Forty pence.": "На пенни. Сорок пенсов.",
          },
          explain:
            "Слово better стоит дважды и оба раза без than: с чем сравнивают, ясно " +
            "из разговора. Слово worse собрано так же.",
        },
        {
          id: "slovar-vybora",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "memory", translation: "память", example: "The black one is better, and the memory is bigger.", hint: "/ˈmeməri/" },
            { term: "cheque", translation: "чек", example: "A cheque is worse than cash here.", hint: "/tʃek/" },
            { term: "penny", translation: "пенни", example: "The difference is one penny.", hint: "/ˈpeni/" },
            { term: "pence", translation: "пенсы", example: "The difference is only forty pence.", hint: "/pens/" },
            { term: "worse", translation: "хуже", example: "The weather is worse today.", hint: "/wɜːs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-better",
          kind: "gap",
          prompt: "Этот телефон лучше. Допиши недостающее слово.",
          before: "This phone is ",
          after: " than my old one.",
          answer: "better",
          hint: "Форма сравнения у good своя, и на -er она не кончается.",
          why:
            "This phone is better than my old one. Слово gooder в английском не " +
            "бывает: у good своя форма.",
        },
        {
          id: "z2-vybrat-worse",
          kind: "choice",
          prompt: "Погода сегодня хуже. Какая запись верна?",
          options: [
            { text: "The weather is more bad today." },
            { text: "The weather is worse today.", correct: true },
            { text: "The weather is badder today." },
          ],
          hint: "У bad форма сравнения своя.",
          why:
            "The weather is worse today. Ни окончание, ни слово more к bad не " +
            "прибавляют: у него есть worse.",
        },
        {
          id: "z3-otmetit-osobye",
          kind: "hottext",
          prompt: "Отметь строки, записанные верно.",
          parts: [
            { text: "The black one is better than the grey one", selectable: true, correct: true },
            { text: " · " },
            { text: "The black one is more better", selectable: true },
            { text: " · " },
            { text: "The price is worse here", selectable: true, correct: true },
            { text: " · " },
            { text: "The weather is worser today", selectable: true },
          ],
          hint: "Better и worse уже форма сравнения, добавлять к ним нечего.",
          why:
            "Верны первая и третья строки. Во второй к better прибавили more, а в " +
            "четвёртой к worse — окончание.",
        },
        {
          id: "z4-sobrat-s-worse",
          kind: "order",
          prompt: "Собери строку: чек здесь хуже наличных.",
          items: ["than cash.", "worse", "is", "A cheque here"],
          answer: [3, 2, 1, 0],
          hint: "Особая форма стоит там же, где стояла бы обычная.",
          why:
            "A cheque here is worse than cash. Слово than идёт сразу после worse, " +
            "как и после любой формы сравнения.",
        },
        {
          id: "z5-napisat-o-pamyati",
          kind: "short",
          prompt:
            "У этого телефона память больше, и сам он лучше прежнего. Скажи вторую часть по-английски, начав с This phone.",
          answer: "This phone is better than my old one.",
          accept: [
            "This phone is better than my old one",
            "This phone is better than the old one.",
          ],
          hint: "Прежний телефон по-английски my old one.",
          why:
            "This phone is better than my old one. Оборот my old one избавляет от " +
            "повтора слова phone.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pered-samoy-veshchyu",
      title: "Перед вещью: my younger brother",
      estimatedMinutes: 14,
      outcome: "ставить форму сравнения перед вещью: my older brother",

      blocks: [
        {
          id: "zachem-pered-veshchyu",
          kind: "explain",
          text: [
            "До сих пор форма сравнения стояла после is и are: My flat is smaller.",
            "Но она умеет стоять и прямо перед самой вещью, как обычное прилагательное.",
            "Данияр говорит I watched the match with my younger brother — «я смотрел матч с младшим братом».",
            "Здесь никто ни с кем не сравнивается вслух: форма просто отличает одного брата от другого.",
          ],
        },
        {
          id: "dva-mesta-formy",
          kind: "table",
          caption: "Два места одной формы",
          zvuchat: [
            "My brother is younger.",
            "my younger brother",
            "This flat is cheaper.",
            "a cheaper flat",
          ],
          head: ["После is", "Перед вещью"],
          rows: [
            ["My brother is younger.", "my younger brother"],
            ["This flat is cheaper.", "a cheaper flat"],
          ],
        },
        {
          id: "chto-menyaetsya-ot-mesta",
          kind: "explain",
          text: [
            "После is форма сравнения о чём-то сообщает: брат младше.",
            "Перед вещью она эту вещь называет: младший брат, а не старший.",
            "Само слово при этом не меняется: younger и там, и там.",
            "Перед формой стоит то же слово, что стояло бы перед вещью: my, a, the.",
          ],
        },
        {
          id: "vybor-kvartiry",
          kind: "example",
          caption: "Разговор о работе",
          razgovor: true,
          zvuchat: [
            "I want a quieter job.",
            "A painter works in a quieter place than a mechanic.",
            "And a pilot?",
            "A pilot has a harder job.",
            "What about a waitress?",
            "Longer hours and lower pay.",
          ],
          text:
            "I want a quieter job.\nA painter works in a quieter place than a mechanic.\nAnd a pilot?\nA pilot has a harder job.\nWhat about a waitress?\nLonger hours and lower pay.",
          perevod: {
            "I want a quieter job.": "Мне хочется работу потише.",
            "A painter works in a quieter place than a mechanic.":
              "У маляра место потише, чем у механика.",
            "And a pilot?": "А у лётчика?",
            "A pilot has a harder job.": "У лётчика работа тяжелее.",
            "What about a waitress?": "А у официантки?",
            "Longer hours and lower pay.": "Часы длиннее, а платят меньше.",
          },
          explain:
            "Формы сравнения здесь стоят перед самими вещами и называют их: " +
            "a quieter job, a harder job, longer hours. В строке про маляра вторая " +
            "вещь всё же названа — после than стоит механик.",
        },
        {
          id: "slovar-professiy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "mechanic", translation: "механик", example: "A mechanic earns more than a cleaner.", hint: "/mɪˈkænɪk/" },
            { term: "pilot", translation: "лётчик", example: "A pilot has a harder job.", hint: "/ˈpaɪlət/" },
            { term: "painter", translation: "маляр, художник", example: "An engineer earns more than a painter.", hint: "/ˈpeɪntə/" },
            { term: "cleaner", translation: "уборщик", example: "A mechanic earns more than a cleaner.", hint: "/ˈkliːnə/" },
            { term: "waitress", translation: "официантка", example: "The waitress here is more polite.", hint: "/ˈweɪtrəs/" },
            { term: "earn", translation: "зарабатывать", example: "A mechanic earns more than a cleaner.", hint: "/ɜːn/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-postavit-pered-veshchyu",
          kind: "short",
          prompt:
            "Строку My brother is younger скажи иначе: назови его младшим братом. Начни со слова My.",
          answer: "My younger brother.",
          accept: ["My younger brother", "my younger brother"],
          hint: "Форма сравнения встаёт прямо перед словом brother.",
          why:
            "My younger brother. Слово my осталось на месте, а форма сравнения " +
            "переехала к самой вещи.",
        },
        {
          id: "z2-vybrat-poryadok",
          kind: "choice",
          prompt: "Ты ищешь квартиру подешевле. Какая запись верна?",
          options: [
            { text: "I want a flat cheaper." },
            { text: "I want a cheaper flat.", correct: true },
            { text: "I want a more cheap flat." },
          ],
          hint: "В английском прилагательное стоит перед вещью, а не после неё.",
          why:
            "I want a cheaper flat. Форма сравнения занимает место обычного " +
            "прилагательного — перед словом flat.",
        },
        {
          id: "z3-otmetit-pered-veshchyu",
          kind: "hottext",
          prompt: "Отметь строки, где форма сравнения стоит перед самой вещью.",
          parts: [
            { text: "a lower floor", selectable: true, correct: true },
            { text: " · " },
            { text: "The floor is lower", selectable: true },
            { text: " · " },
            { text: "my younger brother", selectable: true, correct: true },
            { text: " · " },
            { text: "My brother is younger", selectable: true },
          ],
          hint: "Смотри, стоит ли между формой и вещью слово is.",
          why:
            "Перед вещью форма стоит в первой и третьей строках. В остальных она " +
            "стоит после is и о вещи сообщает, а не называет её.",
        },
        {
          id: "z4-sobrat-s-formoy-vperedi",
          kind: "order",
          prompt: "Собери строку: я хочу квартиру на этаже пониже.",
          items: ["floor.", "lower", "a flat on a", "I want"],
          answer: [3, 2, 1, 0],
          hint: "Форма сравнения встаёт прямо перед словом floor.",
          why:
            "I want a flat on a lower floor. Форма стоит перед вещью, а слово a — " +
            "перед ней самой.",
        },
        {
          id: "z5-napisat-o-storone",
          kind: "short",
          prompt:
            "Ты хочешь квартиру на более тихой стороне улицы. Скажи это по-английски, начав с I want.",
          answer: "I want a flat on a quieter side of the street.",
          accept: [
            "I want a flat on a quieter side of the street",
            "I want a flat on a quieter side.",
          ],
          hint: "Форма сравнения от quiet — quieter, и стоит она перед словом side.",
          why:
            "I want a flat on a quieter side of the street. Слово quiet кончается " +
            "на согласную, и потому берёт обычное -er.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "chitaem-dva-obyavleniya",
      title: "Читаем два объявления о жилье",
      estimatedMinutes: 13,
      outcome: "находить в объявлении, что дешевле и что больше",

      blocks: [
        {
          id: "zachem-chitat-dva",
          kind: "explain",
          text: [
            "Дана выбирает жильё и держит перед собой два объявления.",
            "Такие тексты читают не подряд, а парами: цена и цена, размер и размер.",
            "Ниже оба объявления, и вопросы будут о том, что в каком больше.",
          ],
        },
        {
          id: "dva-obyavleniya",
          kind: "text",
          title: "TWO FLATS",
          genre: "notice",
          body: [
            "FLAT A — 55 000 tenge a month.",
            "Two rooms on the top floor. The kitchen is small, but the rooms are big.",
            "Electricity is not in the price. The street is noisy: there is a factory near it.",
            "FLAT B — 62 000 tenge a month.",
            "Two rooms on a lower floor. The kitchen is huge, the rooms are smaller.",
            "Electricity is in the price, and there is an electric cooker. The side of the street is quieter.",
            "The rooms are wider in flat A, but transport is cheaper near flat B.",
          ],
          glossary: [
            { term: "a month", translation: "в месяц" },
            { term: "in the price", translation: "входит в цену" },
            { term: "not in the price", translation: "не входит в цену" },
          ],
        },
        {
          id: "kak-sravnivat-obyavleniya",
          kind: "note",
          tone: "info",
          text:
            "Сравнивай по одной паре за раз: цена и цена, кухня и кухня, улица и " +
            "улица.\n\nЧитать оба объявления подряд целиком не нужно.",
        },
        {
          id: "slovar-obyavleniy",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "electric", translation: "электрический", example: "The flat has an electric cooker.", hint: "/ɪˈlektrɪk/" },
            { term: "level", translation: "уровень", example: "The noise level is lower here.", hint: "/ˈlevl/" },
            { term: "factory", translation: "завод", example: "The factory near flat A is noisy.", hint: "/ˈfæktəri/" },
            { term: "transport", translation: "транспорт", example: "Transport is cheaper near flat B.", hint: "/ˈtrænspɔːt/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakaya-deshevle",
          about: "dva-obyavleniya",
          kind: "short",
          prompt: "Какая квартира дешевле? Ответь одной буквой.",
          answer: "A",
          accept: ["a", "Flat A", "flat A"],
          hint: "Сравни два числа в начале объявлений.",
          why: "Flat A. Пятьдесят пять тысяч меньше шестидесяти двух.",
        },
        {
          id: "z2-gde-kuhnya-bolshe",
          about: "dva-obyavleniya",
          kind: "short",
          prompt: "Где кухня больше? Ответь одной буквой.",
          answer: "B",
          accept: ["b", "Flat B", "flat B"],
          hint: "Про кухню сказано в обоих объявлениях по одному разу.",
          why:
            "Flat B. Там кухня названа словом huge, а в первом объявлении — словом " +
            "small.",
        },
        {
          id: "z3-otmetit-o-flat-b",
          about: "dva-obyavleniya",
          kind: "hottext",
          prompt: "Отметь то, что верно для квартиры B.",
          parts: [
            { text: "электричество входит в цену", selectable: true, correct: true },
            { text: " · " },
            { text: "верхний этаж", selectable: true },
            { text: " · " },
            { text: "сторона улицы тише", selectable: true, correct: true },
            { text: " · " },
            { text: "комнаты больше", selectable: true },
          ],
          hint: "Читай только вторую половину текста.",
          why:
            "У квартиры B электричество входит в цену и сторона улицы тише. Верхний " +
            "этаж и большие комнаты — приметы квартиры A.",
        },
        {
          id: "z4-chto-vhodit-v-cenu",
          about: "dva-obyavleniya",
          kind: "choice",
          prompt: "В какой квартире электричество входит в цену?",
          options: [
            { text: "В обеих." },
            { text: "Только в A." },
            { text: "Только в B.", correct: true },
          ],
          hint: "Про электричество сказано в обоих объявлениях, но по-разному.",
          why:
            "Только в B. У квартиры A стоит not in the price, у квартиры B — in the " +
            "price.",
        },
        {
          id: "z5-nazvat-raznicu-v-cene",
          about: "dva-obyavleniya",
          kind: "short",
          prompt: "На сколько тенге квартира B дороже? Ответь числом.",
          answer: "7000",
          accept: ["7 000", "семь тысяч", "7000 tenge"],
          hint: "Вычти меньшее число из большего.",
          why: "Семь тысяч: шестьдесят две тысячи минус пятьдесят пять тысяч.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushaem-vybor",
      title: "Слушаем, что выбрали",
      estimatedMinutes: 13,
      outcome: "слышать в разговоре, что из двух выбрали",

      blocks: [
        {
          id: "zachem-slushat-vybor",
          kind: "explain",
          text: [
            "В разговоре о выборе сравнивают несколько раз подряд.",
            "Слушать надо две вещи: что с чем сравнили и на чём остановились.",
            "Ниже запись, а расшифровка спрятана под кнопкой.",
            "Слушай целиком, потом отвечай.",
          ],
        },
        {
          id: "zapis-vybora",
          kind: "audio",
          caption: "Разговор о двух квартирах",
          pace: "slow",
          skryt: true,
          voice: "два голоса",
          transcript:
            "Flat B is more expensive, but the kitchen is bigger. — And the street? " +
            "— Quieter. The noise level is lower. — Is there transport? — A bigger " +
            "variety of buses. — Then B is better. — Yes, we take B.",
        },
        {
          id: "chto-slushat-v-vybore",
          kind: "note",
          tone: "info",
          text:
            "Слушай, что дороже, что больше, что тише и какую квартиру взяли в " +
            "конце.\n\nОб этом и будут вопросы.",
        },
        {
          id: "slovar-razgovora",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "variety", translation: "разнообразие", example: "There is a bigger variety of flats here.", hint: "/vəˈraɪəti/" },
            { term: "half-price", translation: "за полцены", example: "The second month is half-price.", hint: "/ˌhɑːfˈpraɪs/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kakuyu-vzyali",
          about: "zapis-vybora",
          kind: "short",
          prompt: "Какую квартиру взяли? Ответь одной буквой.",
          answer: "B",
          accept: ["b", "Flat B", "flat B"],
          hint: "Решение стоит в самой последней строке.",
          why: "We take B. Последняя строка и называет выбор.",
        },
        {
          id: "z2-chto-dorozhe",
          about: "zapis-vybora",
          kind: "choice",
          prompt: "Что сказано про цену квартиры B?",
          options: [
            { text: "Она дороже.", correct: true },
            { text: "Она дешевле." },
            { text: "Про цену не сказано." },
          ],
          hint: "Про цену сказано в самой первой строке.",
          why:
            "Она дороже: Flat B is more expensive. Дальше идут доводы за неё, а не " +
            "против.",
        },
        {
          id: "z3-chto-tishe",
          about: "zapis-vybora",
          kind: "hottext",
          prompt: "Отметь то, что в квартире B лучше.",
          parts: [
            { text: "кухня", selectable: true, correct: true },
            { text: " · " },
            { text: "цена", selectable: true },
            { text: " · " },
            { text: "улица", selectable: true, correct: true },
            { text: " · " },
            { text: "этаж", selectable: true },
          ],
          hint: "Про этаж в этой записи не говорят вовсе.",
          why:
            "Лучше кухня и улица: кухня больше, улица тише. Цена, наоборот, выше, а " +
            "об этаже речи нет.",
        },
        {
          id: "z4-nazvat-slovo-o-shume",
          about: "zapis-vybora",
          kind: "short",
          prompt:
            "Каким словом сказано про шум — lower или higher? Ответь одним словом.",
          answer: "lower",
          accept: ["Lower"],
          hint: "Про шум сказано после слова про улицу.",
          why: "The noise level is lower. Шума меньше, и потому квартиру и выбрали.",
        },
        {
          id: "z5-skazat-vsluh",
          kind: "speak",
          prompt:
            "Скажи вслух: квартира B дороже, но кухня там больше.",
          phrase: "Flat B is more expensive, but the kitchen is bigger.",
          translation: "Квартира B дороже, но кухня там больше.",
          hint: "Первое прилагательное длинное, второе короткое.",
          why:
            "Flat B is more expensive, but the kitchen is bigger. Длинное слово " +
            "берёт more, короткое — окончание.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pishem-zapisku-o-vybore",
      title: "Пишем записку о выборе",
      estimatedMinutes: 15,
      outcome: "проверять записку со сравнением: названы обе вещи",

      blocks: [
        {
          id: "zachem-proveryat-sravnenie",
          kind: "explain",
          text: [
            "Дана написала Алиму записку о двух телефонах, и он не понял, какой она берёт.",
            "В записке со сравнением пропускают не слова, а вторую вещь.",
            "Проверить можно так: у каждого сравнения найди, с чем сравнивают.",
            "Если второй вещи нет и из записки она не ясна, читатель будет гадать.",
          ],
        },
        {
          id: "est-li-vtoraya-veshch",
          kind: "table",
          caption: "Есть ли вторая вещь",
          zvuchat: [
            "Flat B is more expensive than flat A.",
            "Flat B is more expensive.",
            "The kitchen is bigger, but the rooms are smaller.",
          ],
          head: ["Строка", "С чем сравнивают", "Годится"],
          rows: [
            ["Flat B is more expensive than flat A.", "названо после than", "да"],
            ["Flat B is more expensive.", "не названо и не ясно", "нет"],
            ["The kitchen is bigger, but the rooms are smaller.", "ясно из первой половины", "да"],
          ],
        },
        {
          id: "kogda-than-ne-nuzhen",
          kind: "explain",
          text: [
            "Слово than нужно не всегда: вторая вещь может стоять рядом в той же записке.",
            "В строке The kitchen is bigger, but the rooms are smaller сравниваются две квартиры, названные выше.",
            "А вот первое сравнение в записке лучше писать со словом than: до него читателю сравнивать не с чем.",
          ],
        },
        {
          id: "obrazets-zapiski",
          kind: "example",
          caption: "Записка Даны",
          perevod: {
            "Alim, I saw two phones today.":
              "Алим, я сегодня посмотрела два телефона.",
            "The black one is more expensive than the grey one, but the memory is bigger.":
              "Чёрный дороже серого, зато память больше.",
            "The photos are wider and the price of the cover is lower.":
              "Снимки шире, и чехол дешевле.",
            "I take the black one. The second cover is half-price.":
              "Беру чёрный. Второй чехол за полцены.",
          },
          zvuchat: [
            "Alim, I saw two phones today.",
            "The black one is more expensive than the grey one, but the memory is bigger.",
            "The photos are wider and the price of the cover is lower.",
            "I take the black one. The second cover is half-price.",
          ],
          text:
            "Alim, I saw two phones today.\nThe black one is more expensive than the grey one, but the memory is bigger.\nThe photos are wider and the price of the cover is lower.\nI take the black one. The second cover is half-price.",
          explain:
            "Первое сравнение идёт со словом than, дальше оно уже не нужно: оба " +
            "телефона названы. Последняя строка говорит о решении прямо: I take.",
        },
        {
          id: "slovar-zapiski",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "wide", translation: "широкий", example: "The rooms are wider in flat A.", hint: "/waɪd/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-chego-ne-hvataet-v-sravnenii",
          kind: "choice",
          prompt:
            "В записке стоит одна строка: Flat B is more expensive. Чего в ней не хватает?",
          options: [
            { text: "Формы сравнения." },
            { text: "Второй вещи: непонятно, дороже чего.", correct: true },
            { text: "Названия квартиры." },
          ],
          hint: "Спроси себя, дороже чего именно.",
          why:
            "Второй вещи. Форма сравнения собрана верно, квартира названа, а вот " +
            "than flat A читателю не хватает.",
        },
        {
          id: "z2-dopisat-vtoruyu-veshch",
          kind: "gap",
          prompt:
            "Допиши вторую вещь: квартира B дороже квартиры A.",
          before: "Flat B is more expensive ",
          after: ".",
          answer: "than flat A",
          hint: "Вторую вещь вводит одно короткое слово.",
          why:
            "Flat B is more expensive than flat A. Без этих слов читателю сравнивать " +
            "не с чем.",
        },
        {
          id: "z3-otmetit-polnye-sravneniya",
          kind: "hottext",
          prompt: "Отметь строки, по которым понятно, с чем сравнивают.",
          parts: [
            { text: "The price is lower than in flat A", selectable: true, correct: true },
            { text: " · " },
            { text: "The kitchen is bigger", selectable: true },
            { text: " · " },
            { text: "A mechanic earns more than a cleaner", selectable: true, correct: true },
            { text: " · " },
            { text: "The street is quieter", selectable: true },
          ],
          hint: "Вторую вещь ищи после слова than.",
          why:
            "Понятно в первой и третьей строках: там после than названа вторая вещь. " +
            "Во второй и четвёртой её нет, и сами по себе они не годятся.",
        },
        {
          id: "z4-ispravit-zapisku",
          kind: "short",
          prompt:
            "Строку The rooms are smaller допиши так, чтобы стало понятно: меньше, чем в квартире A.",
          answer: "The rooms are smaller than in flat A.",
          accept: [
            "The rooms are smaller than in flat A",
            "The rooms are smaller than in Flat A.",
          ],
          hint: "После than назови, где именно комнаты больше.",
          why:
            "The rooms are smaller than in flat A. Слово in нужно, потому что " +
            "сравнивают комнаты с комнатами, а не комнаты с квартирой.",
        },
        {
          id: "z5-napisat-zapisku",
          kind: "essay",
          prompt:
            "Напиши записку о выборе из двух телефонов четырьмя строками. Скажи, что смотрел два, сравни цену со словом than, назови ещё два отличия и скажи, какой берёшь.",
          minWords: 16,
          sample:
            "Alim, I saw two phones today.\nThe black one is more expensive than the grey one, but the memory is bigger.\nThe photos are wider and the price of the cover is lower.\nI take the black one. The second cover is half-price.",
          checklist: [
            "в первом сравнении есть слово than",
            "названы оба телефона",
            "есть ещё два отличия",
            "сказано, какой телефон берёшь",
          ],
          hint:
            "Бери формы, которые знаешь: cheaper, bigger, smaller, quieter, lower, better, more expensive.",
          why:
            "Записка со сравнением работает, когда у каждого сравнения ясна вторая " +
            "вещь, а в конце сказано, чем дело кончилось.",
        },
      ],
    },
  ],

  quiz: {
    ask: 10,
    passRatio: 0.8,
    questions: [
      // Углы работы нарочно другие, чем у заданий уроков: исправить чужую
      // запись, назвать причину, выбрать способ по длине слова, услышать
      // разговор, дописать вторую вещь.

      // ---- итог 1 ----
      {
        id: "q-ispravit-that-vmesto-than",
        kind: "short",
        outcome: "сравнивать две вещи: My flat is smaller than yours",
        prompt:
          "Ученик написал: My room is smaller that yours. Запиши строку без ошибки.",
        answer: "My room is smaller than yours.",
        accept: ["My room is smaller than yours"],
        hint: "Ошибка в коротком слове перед второй вещью.",
        why:
          "My room is smaller than yours. Вторую вещь вводит than, а that значит " +
          "«тот» и сюда не годится.",
      },
      {
        id: "q-zachem-nuzhen-than",
        kind: "choice",
        outcome: "сравнивать две вещи: My flat is smaller than yours",
        prompt: "Что делает слово than в строке сравнения?",
        options: [
          { text: "Заменяет глагол is." },
          { text: "Делает прилагательное длиннее." },
          { text: "Называет вторую вещь.", correct: true },
        ],
        hint: "Прочитай строку без than и посмотри, чего в ней не хватает.",
        why:
          "Называет вторую вещь. Без неё сравнение остаётся половинчатым: " +
          "непонятно, меньше чего.",
      },
      {
        id: "q-napisat-o-cene",
        kind: "short",
        outcome: "сравнивать две вещи: My flat is smaller than yours",
        prompt:
          "Твой брат моложе Данияра. Скажи это по-английски, начав с My brother.",
        answer: "My brother is younger than Daniyar.",
        accept: [
          "My brother is younger than Daniyar",
          "My brother is younger than Daniyar's.",
        ],
        hint: "Вторую вещь вводит than, а короткое слово берёт окончание.",
        why:
          "My brother is younger than Daniyar. Слово young короткое, и потому " +
          "форма сравнения собирается окончанием.",
      },

      // ---- итог 2 ----
      {
        id: "q-vybrat-sposob-po-dline",
        kind: "choice",
        outcome: "сравнивать длинным прилагательным: This job is more attractive",
        prompt:
          "Какое из этих прилагательных возьмёт more, а не окончание?",
        options: [
          { text: "expensive", correct: true },
          { text: "cheap" },
          { text: "young" },
        ],
        hint: "Посчитай слоги: сколько гласных звуков в каждом слове.",
        why:
          "Expensive. В нём три слога — ex-pen-sive, — и окончания оно не берёт; " +
          "cheap и young короткие.",
      },
      {
        id: "q-ispravit-dva-sposoba",
        kind: "short",
        outcome: "сравнивать длинным прилагательным: This job is more attractive",
        prompt:
          "Ученик написал: This flat is more cheaper. Запиши строку без ошибки.",
        answer: "This flat is cheaper.",
        accept: ["This flat is cheaper"],
        hint: "Способов два, а в строке они сошлись оба.",
        why:
          "This flat is cheaper. Слово cheap короткое, значит берёт окончание, а " +
          "more при нём лишнее.",
      },

      // ---- итог 3 ----
      {
        id: "q-pochemu-udvoenie",
        kind: "choice",
        outcome: "выбирать написание формы сравнения: bigger, nicer, easier",
        prompt: "Почему у слова big в форме сравнения две буквы g?",
        options: [
          { text: "Чтобы гласный остался кратким.", correct: true },
          { text: "Так короче." },
          { text: "Потому что слово кончается на согласную." },
        ],
        hint: "Прочитай вслух biger и bigger.",
        why:
          "Чтобы гласный остался кратким. На согласную кончаются и small, и low, " +
          "а удвоения там нет.",
      },
      {
        id: "q-pochemu-tolko-r",
        kind: "choice",
        outcome: "выбирать написание формы сравнения: bigger, nicer, easier",
        prompt:
          "Почему у слова nice в форме сравнения прибавилась только буква r, а не -er?",
        options: [
          { text: "Потому что слово короткое." },
          { text: "Потому что оно уже кончается на e.", correct: true },
          { text: "Потому что после n не бывает двух гласных." },
        ],
        hint: "Прочитай слово по буквам и посмотри, чего в нём уже хватает.",
        why:
          "Потому что оно уже кончается на e. Второй такой буквы не пишут, и от " +
          "окончания остаётся одна r.",
      },
      {
        id: "q-ispravit-y",
        kind: "short",
        outcome: "выбирать написание формы сравнения: bigger, nicer, easier",
        prompt: "Ученик написал: My cat is lazyer. Запиши строку без ошибки.",
        answer: "My cat is lazier.",
        accept: ["My cat is lazier"],
        hint: "Ошибка в одной букве внутри слова.",
        why: "My cat is lazier. Буква y уступает место i, и уже потом идёт -er.",
      },

      // ---- итог 4 ----
      {
        id: "q-sobrat-o-pogode",
        kind: "order",
        outcome: "говорить better и worse там, где нет окончания -er",
        prompt: "Собери строку: погода сегодня хуже вчерашней.",
        items: ["than yesterday.", "worse", "is", "The weather today"],
        answer: [3, 2, 1, 0],
        hint: "Особая форма стоит там же, где стояла бы форма с окончанием.",
        why:
          "The weather today is worse than yesterday. Собрано верно, если вторая " +
          "вещь оказалась в самом конце, а перед ней встало одно короткое слово.",
      },
      {
        id: "q-ispravit-more-better",
        kind: "short",
        outcome: "говорить better и worse там, где нет окончания -er",
        prompt:
          "Ученик написал: The weather is more worse today. Запиши строку без ошибки.",
        answer: "The weather is worse today.",
        accept: ["The weather is worse today"],
        hint: "Одно слово в строке лишнее.",
        why:
          "The weather is worse today. Слово worse уже форма сравнения, и more " +
          "при нём не ставят.",
      },

      // ---- итог 5 ----
      {
        id: "q-gde-stoit-forma",
        kind: "choice",
        outcome: "ставить форму сравнения перед вещью: my older brother",
        prompt:
          "В строке I want a cheaper flat форма сравнения стоит перед словом flat. Что она делает?",
        options: [
          { text: "Сообщает, что квартира дешевле другой." },
          { text: "Заменяет слово a." },
          { text: "Называет саму вещь: не любую квартиру, а подешевле.", correct: true },
        ],
        hint: "Сравни со строкой This flat is cheaper.",
        why:
          "Называет саму вещь. После is форма о вещи сообщает, а перед вещью — " +
          "выделяет её среди прочих.",
      },
      {
        id: "q-perestavit-formu",
        kind: "short",
        outcome: "ставить форму сравнения перед вещью: my older brother",
        prompt:
          "Строку The street is quieter скажи иначе: назови улицу потише. Начни со слова a.",
        answer: "a quieter street",
        accept: ["A quieter street", "a quieter street."],
        hint: "Слов в ответе три, и глагола среди них нет.",
        why:
          "A quieter street. Глагол is уходит вместе с сообщением: вещь теперь " +
          "называют, а не рассказывают о ней.",
      },

      // ---- итог 6 ----
      {
        id: "q-prochitat-dva-obyavleniya",
        kind: "choice",
        outcome: "находить в объявлении, что дешевле и что больше",
        prompt:
          "В объявлении стоит: FLAT C — 48 000 tenge. Electricity is not in the price. Что это значит?",
        options: [
          { text: "За электричество платят отдельно.", correct: true },
          { text: "Электричество бесплатное." },
          { text: "Электричества в квартире нет." },
        ],
        hint: "Слово not меняет смысл всей строки.",
        why:
          "За электричество платят отдельно. Строка in the price значила бы " +
          "обратное: входит в цену.",
      },
      {
        id: "q-nazvat-chto-deshevle",
        kind: "short",
        outcome: "находить в объявлении, что дешевле и что больше",
        prompt:
          "FLAT C стоит 48 000, FLAT D — 51 000. Какая дешевле? Ответь одной буквой.",
        answer: "C",
        accept: ["c", "Flat C", "flat C"],
        hint: "Сравни два числа.",
        why: "Flat C. Сорок восемь тысяч меньше пятидесяти одной.",
      },

      // ---- итог 7 ----
      {
        id: "q-uslyshat-chto-vybrali",
        kind: "short",
        outcome: "слышать в разговоре, что из двух выбрали",
        zvuk:
          "Flat A is cheaper, but the street is noisier. — How much cheaper? — Six thousand.",
        prompt:
          "Послушай. На сколько тысяч одна квартира дешевле? Ответь числом.",
        answer: "six",
        accept: ["6", "Six", "6000", "six thousand"],
        hint: "Число названо в самом конце разговора.",
        why:
          "Six thousand. Дешевле квартира A, но улица там шумнее — об этом " +
          "сказано в первой строке.",
      },
      {
        id: "q-uslyshat-chto-luchshe",
        kind: "short",
        outcome: "слышать в разговоре, что из двух выбрали",
        zvuk:
          "The kitchen in B is bigger. — And the price? — Higher than in A.",
        prompt:
          "Послушай. Что сказано про плату в квартире B — выше или ниже? Ответь одним словом по-английски.",
        answer: "higher",
        accept: ["Higher"],
        hint: "Про плату сказано в самом конце.",
        why:
          "Higher. Кухня там больше, а плата выше — за большее и платят больше.",
      },

      // ---- итог 8 ----
      {
        id: "q-dopisat-than-v-zapisku",
        kind: "short",
        outcome: "проверять записку со сравнением: названы обе вещи",
        prompt:
          "К строке записки The price is lower допиши вторую вещь: чем в квартире A.",
        answer: "The price is lower than in flat A.",
        accept: [
          "The price is lower than in flat A",
          "The price is lower than in Flat A.",
        ],
        hint: "После than назови, где цена выше.",
        why:
          "The price is lower than in flat A. Слово in нужно, потому что сравнивают " +
          "плату с платой.",
      },
      {
        id: "q-kogda-than-ne-nuzhen",
        kind: "choice",
        outcome: "проверять записку со сравнением: названы обе вещи",
        prompt:
          "В записке уже сказано про две квартиры. Нужно ли слово than в каждой следующей строке?",
        options: [
          { text: "Да, в каждой." },
          { text: "Нет, than вообще не нужен." },
          { text: "Нет, если из записки ясно, с чем сравнивают.", correct: true },
        ],
        hint: "Вспомни, зачем than нужен в первой строке записки.",
        why:
          "Нет, если ясно из записки. В первом сравнении than нужен: до него " +
          "читателю сравнивать не с чем.",
      },
      {
        id: "q-pochemu-zapiska-ne-yasna",
        kind: "choice",
        outcome: "проверять записку со сравнением: названы обе вещи",
        prompt:
          "Записка целиком: I saw a flat. It is bigger and cheaper. I take it. Почему читатель не поймёт?",
        options: [
          { text: "Не сказано, какую квартиру берут." },
          { text: "Названо одно жильё, а сравнений два.", correct: true },
          { text: "В записке нет формы сравнения." },
        ],
        hint: "Посчитай, сколько квартир названо и сколько сравнений сделано.",
        why:
          "Названо одно жильё. Формы сравнения собраны верно, но второй вещи нет " +
          "ни в строке, ни в записке.",
      },
    ],
  },
};

export default module;
