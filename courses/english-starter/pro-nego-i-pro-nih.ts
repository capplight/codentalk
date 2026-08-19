import type { Module } from "@/lib/content/types";

/**
 * Модуль 20 курса «Английский с нуля»: про него и про них.
 *
 * Программа: docs/programma-english-starter.md, модуль 20 — «заменять уже
 * названное местоимением»; грамматика: местоимения-дополнения `me, you, him,
 * her, us, them`, `it`, глагол с предлогом (`listen to`, `look at`).
 *
 * ГЛАВНАЯ ОПАСНОСТЬ МОДУЛЯ — слово `her`. Оно уже встречалось ученику в модуле
 * 7 в значении «её книга», а здесь появляется в значении «знаю её». Слово одно
 * и то же, работы разные, и различает их только место. У мужского рода при
 * этом слова РАЗНЫЕ: `his book`, но `I know him`. Ученик, выучивший `her` как
 * «её книга», строит по образцу `I know his` — и ошибается.
 *
 * Поэтому урок 3 посвящён этой паре целиком, а не разбирается вскользь.
 *
 * ВТОРАЯ ОПАСНОСТЬ — род вещей. По-русски книга «она», стол «он», и ученик
 * говорит `I like her` о книге. По-английски для вещей есть `it`, и урок 4
 * называет эту ошибку прямо.
 *
 * ЧТО ПРОВЕРЕНО ДО НАПИСАНИЯ. Ступень подтверждена по всем трём пунктам,
 * ничего сверх A1 модуль не берёт.
 *
 * 1. English Grammar Profile, PRONOUNS subject/object, ступень A1:
 *    — «FORM: (OBJECT) 'ME', 'YOU', 'HER', 'HIM', 'US', 'THEM'» — «Can use the
 *      pronouns 'me', 'you', 'him', 'her', 'us' and 'them' in the direct object
 *      position after a transitive verb», пример источника: «I'm very happy
 *      that you want to see me»;
 *    — «FORM: (OBJECT) 'IT'» — «Can use the pronoun 'it' as a direct object to
 *      refer to an object or situation already referred to», пример источника:
 *      «The maths is boring and I don't like it»;
 *    — «FORM: (OBJECT) WITH PREPOSITION» — «Can use the object pronouns 'me',
 *      'you', 'him', 'her', 'it', 'us' and 'them' in the object position after
 *      prepositions», пример источника: «It's very important for me».
 *
 * 2. Cambridge, руководство для младших ступеней, список грамматики Pre A1
 *    Starters, с. 29: графа «Pronouns. Including demonstrative, personal, and
 *    possessive interrogative pronouns and 'one'» с примером «Can you see me?».
 *    Ступень ниже A1, а умение то же.
 *
 * 3. Слова модуля — Oxford 3000, все A1: me pron. A1, him pron. A1, her pron.,
 *    det. A1, us pron. A1, them pron. A1, it pron. A1, listen v. A1, look v.
 *    A1, call v. A1, see v. A1, ask v. A1, for prep. A1, with prep. A1.
 *
 * ЧЕГО В МОДУЛЕ НЕТ И ПОЧЕМУ:
 *
 * — ПОВЕЛИТЕЛЬНОГО НАКЛОНЕНИЯ. Оборот `Listen to me!` просится сам, но
 *   повелительное наклонение идёт в модуле 22, и брать его здесь — значит
 *   отобрать у того модуля его же предмет. Поэтому все примеры с `listen` и
 *   `look` стоят в утверждении: `I listen to him`, `I am looking at them`.
 * — МЕСТОИМЕНИЙ `mine`, `yours`, `hers`. Это притяжательные местоимения, и в
 *   программе их нет вовсе.
 * — ДВУХ ДОПОЛНЕНИЙ СРАЗУ (`give it to him`). Оборот требует глаголов,
 *   которых курс не давал, и на этой ступени не нужен.
 */
const module: Module = {
  slug: "pro-nego-i-pro-nih",
  title: "Про него и про них",

  sources: [
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "ОПОРА УРОКА ЧТЕНИЯ. с. 54, шкала Overall reading comprehension, графа A1: «Can understand very short, simple texts a single phrase at a time, picking up familiar names, words and basic phrases and rereading as required». Слова «picking up familiar names» описывают этот модуль дословно: имена в письме названы один раз, дальше идут местоимения. с. 55, шкала Reading correspondence, графа A1: «Can understand short, simple messages sent via social media or e-mail (e.g. proposing what to do, when and where to meet)». ОПОРА УРОКА СЛУШАНИЯ. Council of Europe, CEFR Companion Volume 2020, с. 48, шкала Overall oral comprehension, графа A1, дословно: «Can follow language which is very slow and carefully articulated, with long pauses for them to assimilate meaning» — отсюда pace: \"slow\" во всех записях. Там же: «Can recognise concrete information (e.g. places and times) on familiar topics encountered in everyday life, provided it is delivered slowly and clearly» — отсюда то, что спрашиваем конкретную вещь, а не смысл целиком. Для записей в два голоса — с. 49, шкала Understanding conversation between other people, графа A1: «Can understand words/signs and short sentences in a simple conversation (e.g. between a customer and a salesperson in a shop), provided people communicate very slowly and very clearly». Там же с. 49, A1: «Can understand some expressions when people are discussing them, family, school, hobbies or surroundings, provided the delivery is slow and clear» — разговор о родных и знакомых.",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "English Grammar Profile",
      section:
        "A1, PRONOUNS subject/object, «FORM: (OBJECT) 'ME', 'YOU', 'HER', 'HIM', " +
        "'US', 'THEM'»: «Can use the pronouns 'me', 'you', 'him', 'her', 'us' and " +
        "'them' in the direct object position after a transitive verb», пример " +
        "источника — «I'm very happy that you want to see me». " +
        "A1, PRONOUNS subject/object, «FORM: (OBJECT) 'IT'»: «Can use the pronoun " +
        "'it' as a direct object to refer to an object or situation already referred " +
        "to», пример источника — «The maths is boring and I don't like it». " +
        "A1, PRONOUNS subject/object, «FORM: (OBJECT) WITH PREPOSITION»: «Can use " +
        "the object pronouns 'me', 'you', 'him', 'her', 'it', 'us' and 'them' in the " +
        "object position after prepositions», пример источника — «It's very " +
        "important for me». " +
        "A1, VERBS prepositional, «FORM: VERB + PREPOSITION + OBJECT»: «Can use a " +
        "limited range of prepositional verbs followed by noun or pronoun objects», " +
        "пример источника — «I listen to music in the living room…» — это урок 6, " +
        "глагол с предлогом. Строку нашёл методист: прежде урок 6 источником " +
        "подтверждён не был вовсе. " +
        "Все записи стоят на A1 — модуль не берёт ничего сверх ступени",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Cambridge English, руководство для младших ступеней",
      section:
        "с. 29, Grammar and Structures List ступени Pre A1 Starters, графа " +
        "«Pronouns» с примером «Can you see me?». Ступень ниже A1, а умение то же. " +
        "с. 50, A1 Movers, Speaking Part 2: «…the present continuous tense of some " +
        "action verbs (for example: play, read, look at, write, laugh, go)» — это " +
        "подтверждение сочетания look at, которого Oxford 3000 не даёт",
      license: "свободно распространяется, в уроки не копируется",
    },
    {
      ref: "Oxford 3000",
      section:
        "все слова модуля с пометкой A1: me pron. A1, him pron. A1, her pron., det. " +
        "A1, us pron. A1, them pron. A1, it pron. A1, listen v. A1, look v. A1, " +
        "call v. A1, see v. A1, ask v. A1, for prep. A1, with prep. A1",
      license: "внутреннее использование",
    },
  ],

  outcomes: [
    "заменять имя словом после глагола: I know him",
    "выбирать нужное слово из шести: me, you, him, her, us, them",
    "различать «её» и «его» в двух местах: her book — I know her, his book — I know him",
    "говорить о вещи словом it: I like it",
    "ставить слово после предлога: This is for me",
    "соединять глагол с предлогом: I listen to him",
    "спрашивать о человеке: Do you know her?",
    "рассказывать, не повторяя имён",
    "понимать в тексте, о ком идёт речь, когда имя не повторяют",
    "понимать на слух, о ком говорят, когда имя не повторяют",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "vmesto-imeni",
      title: "Вместо имени: I know him",
      estimatedMinutes: 13,
      outcome: "заменять имя словом после глагола: I know him",

      blocks: [
        {
          id: "zachem-vmesto-imeni",
          kind: "explain",
          text: [
            "Ты рассказываешь о друге: «Алим работает в магазине. Я знаю Алима».",
            "Второе имя звучит лишним — по-русски тут говорят «его».",
            "По-английски так же: Alim works in a shop. I know him.",
          ],
        },
        {
          id: "tablica-nego-i-neyo",
          kind: "table",
          caption: "Два первых слова",
          zvuchat: ["him", "I know him.", "her", "I know her.",
          ],
          head: ["О ком речь", "Слово вместо имени", "Пример"],
          rows: [
            ["о нём", "him", "I know him."],
            ["о ней", "her", "I know her."],
          ],
        },
        {
          id: "gde-stoit-slovo",
          kind: "explain",
          text: [
            "Место у этих слов строгое: сразу после глагола.",
            "He works — тот, кто работает, стоит перед глаголом.",
            "I know him — тот, кого знают, стоит после глагола.",
          ],
        },
        {
          id: "ne-he-posle-glagola",
          kind: "note",
          tone: "mistake",
          text:
            "«I know he» — так не говорят.\n\nПеред глаголом идёт he, после " +
            "глагола — him. Место решает, какое слово брать.",
        },
        {
          id: "primer-vmesto-imeni",
          kind: "example",
          caption: "Два человека, два слова",
          zvuchat: ["Alim works in a shop.", "I know him.", "Dana is a teacher.",
            "I see her every day.",
          ],
          text: "Alim works in a shop.\nI know him.\nDana is a teacher.\nI see her every day.",
          explain:
            "В первой паре имя Alim во втором предложении заменено на him. Во второй " +
            "паре имя Dana заменено на her. Оба слова стоят после глагола.",
        },
        // Запись убрана: оба слова и примеры к ним звучат в таблице выше.
        {
          id: "slovar-vmesto-imeni",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "him", translation: "его, ему", example: "I know him.", hint: "/hɪm/" },
            { term: "her", translation: "её, ей", example: "I see her.", hint: "/hɜː/" },
            { term: "see", translation: "видеть", example: "I see her every day.", hint: "/siː/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-him",
          kind: "gap",
          prompt: "Ты знаешь Алима. Скажи это, не называя имени. Допиши недостающее слово.",
          before: "I know ",
          after: ".",
          answer: "him",
          hint: "Слово об одном мужчине, стоит после глагола.",
          why: "I know him. После глагола идёт him, а не he.",
        },
        {
          id: "z2-vybrat-her",
          kind: "choice",
          prompt: "Ты знаешь Дану. В каком предложении нет ошибки?",
          options: [
            { text: "I know she." },
            { text: "I her know." },
            { text: "I know her.", correct: true },
          ],
          hint: "Слово стоит после глагола, а не перед ним.",
          why:
            "I know her. Перед глаголом было бы she, а после глагола идёт her. И " +
            "порядок слов в английском другой, чем в русском «я её знаю».",
        },
        {
          id: "z3-otmetit-he-posle-glagola",
          kind: "hottext",
          prompt: "Отметь записи, где после глагола стоит не то слово.",
          parts: [
            { text: "I know him.", selectable: true },
            { text: " · " },
            { text: "I know he.", selectable: true, correct: true },
            { text: " · " },
            { text: "I see she.", selectable: true, correct: true },
            { text: " · " },
            { text: "I see her.", selectable: true },
          ],
          hint: "После глагола идут him и her, а не he и she.",
          why:
            "В «I know he» и «I see she» после глагола стоят he и she. Верно: I know " +
            "him, I see her.",
        },
        {
          id: "z4-sobrat-znayu-ego",
          kind: "order",
          prompt: "Собери предложение: «Я вижу его.»",
          items: ["him", "see", "I"],
          answer: [2, 1, 0],
          hint: "Слово о нём стоит после глагола.",
          why: "I see him. Сначала тот, кто видит, потом глагол, потом тот, кого видят.",
        },
        {
          id: "z5-napisat-znayu-eyo",
          kind: "short",
          prompt: "Напиши, что ты знаешь Дану, не называя её имени. Знать — know.",
          answer: "I know her.",
          hint: "Слово о ней стоит после глагола.",
          why: "I know her. Имя заменено словом her, и стоит оно после глагола.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "vse-shest-slov",
      title: "Все шесть слов",
      estimatedMinutes: 13,
      outcome: "выбирать нужное слово из шести: me, you, him, her, us, them",

      blocks: [
        {
          id: "zachem-vse-shest",
          kind: "explain",
          text: [
            "Друг спрашивает, знают ли тебя в этом магазине. Сказать «знают меня» " +
              "словом him не выйдет — оно о другом человеке.",
            "Значит нужны и остальные: о себе, о вас двоих, о них.",
            "Всего таких слов шесть — по одному на каждое слово перед глаголом.",
          ],
        },
        {
          id: "tablica-shest-par",
          kind: "table",
          caption: "Шесть пар",
          // Слово I отдельной кнопки не получает: одиночная латинская буква звучит
          // названием буквы, а не местоимением. Оно слышно в предложениях.
          zvuchat: ["me", "She knows me.", "you", "I know you.", "he", "him", "I know him.",
            "she", "her", "I know her.", "we", "us", "They know us.", "they", "them",
            "I know them.",
          ],
          head: ["Перед глаголом", "После глагола", "Пример"],
          rows: [
            ["I", "me", "She knows me."],
            ["you", "you", "I know you."],
            ["he", "him", "I know him."],
            ["she", "her", "I know her."],
            ["we", "us", "They know us."],
            ["they", "them", "I know them."],
          ],
        },
        {
          id: "you-ne-menyaetsya",
          kind: "explain",
          text: [
            "У слова you пара одинаковая: и перед глаголом, и после него — you.",
            "Запоминать тут нечего, и это единственное такое слово из шести.",
            "Остальные пять меняются, и учить их лучше парами: I — me, he — him.",
          ],
        },
        {
          id: "ne-me-pered-glagolom",
          kind: "note",
          tone: "mistake",
          text:
            "«Me know him» — так не говорят.\n\nПеред глаголом стоит I. Слово me " +
            "приходит только после глагола: He knows me.",
        },
        {
          id: "primer-shesti",
          kind: "example",
          caption: "Все шесть в деле",
          zvuchat: ["She knows me.", "I know you.", "We know them.", "They know us.",
          ],
          text: "She knows me.\nI know you.\nWe know them.\nThey know us.",
          explain:
            "В каждом предложении первое слово — то, что стоит перед глаголом, а " +
            "второе — то, что после него. Перепутать их местами нельзя.",
        },
        // Запись убрана: все шесть пар звучат в таблице выше.
        {
          id: "slovar-shesti",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "me", translation: "меня, мне", example: "She knows me.", hint: "/miː/" },
            { term: "us", translation: "нас, нам", example: "They know us.", hint: "/ʌs/" },
            { term: "them", translation: "их, им", example: "I know them.", hint: "/ðem/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-me",
          kind: "gap",
          prompt: "Дана знает тебя. Напиши это о себе — допиши недостающее слово.",
          before: "Dana knows ",
          after: ".",
          answer: "me",
          hint: "Слово о себе, но после глагола.",
          why: "Dana knows me. Перед глаголом было бы I, после глагола идёт me.",
        },
        {
          id: "z2-vybrat-them",
          kind: "choice",
          prompt: "Ты знаешь этих людей. В каком предложении нет ошибки?",
          options: [
            { text: "I know they." },
            { text: "I know them.", correct: true },
            { text: "I them know." },
          ],
          hint: "После глагола идут me, him, her, us и them.",
          why:
            "I know them. Перед глаголом стояло бы they, а порядок слов в английском " +
            "другой, чем в русском «я их знаю».",
        },
        {
          id: "z3-sopostavit-pary",
          kind: "match",
          prompt: "Сопоставь слово перед глаголом и его пару после глагола.",
          left: ["I", "he", "we"],
          right: ["us", "me", "him"],
          answer: [1, 2, 0],
          hint: "Пары учат вместе: одно слово о том же человеке, что и другое.",
          why: "I — me, he — him, we — us.",
        },
        {
          id: "z4-otmetit-pereputannye-slova",
          kind: "hottext",
          prompt: "Отметь записи, где слово стоит не на своём месте.",
          // Здесь стояло «Know him.» — а там слово не на чужом месте, а пропущено
          // вовсе. Условие говорило об одном, а ошибка была другой породы. Хуже
          // того, курс уже учил, что в указании подлежащего нет: «Go straight.»
          // Ученик мог прочесть «Know him» как указание и был бы прав. Нашёл методист.
          parts: [
            { text: "We know them.", selectable: true },
            { text: " · " },
            { text: "We know they.", selectable: true, correct: true },
            { text: " · " },
            { text: "Them know us.", selectable: true, correct: true },
            { text: " · " },
            { text: "I know him.", selectable: true },
          ],
          hint: "Перед глаголом идут I, we, they, а после — me, us, them.",
          why:
            "В «We know they» после глагола нужно them. В «Them know us» наоборот: " +
            "перед глаголом стоит слово, место которому после. Верно: We know them, " +
            "They know us.",
        },
        {
          id: "z5-napisat-znayut-nas",
          kind: "short",
          prompt: "Напиши, что они знают вас с другом. Они — they, знать — know.",
          answer: "They know us.",
          hint: "Вас двое, и слово стоит после глагола.",
          why: "They know us. Перед глаголом было бы we, после глагола идёт us.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "eyo-kniga-i-eyo-samu",
      title: "Её книга и её саму",
      estimatedMinutes: 14,
      outcome: "различать «её» и «его» в двух местах: her book — I know her, his book — I know him",

      blocks: [
        {
          id: "zachem-dve-raboty-her",
          kind: "explain",
          text: [
            "Слово her уже встречалось в модуле «Мои вещи»: her book — её книга.",
            "Теперь то же her стоит после глагола: I know her — я знаю её.",
            "Это одно и то же слово, только у него два места.",
          ],
        },
        {
          id: "tablica-her-dvazhdy",
          kind: "table",
          caption: "Одно слово, два места",
          zvuchat: ["her book", "I know her.",
          ],
          head: ["Английский", "Перевод", "Где стоит"],
          rows: [
            ["her book", "её книга", "перед вещью"],
            ["I know her.", "Я знаю её.", "после глагола"],
          ],
        },
        {
          id: "u-nego-slova-raznye",
          kind: "explain",
          text: [
            "А вот о мужчине слова разные, и это главная ловушка модуля.",
            "his book — его книга, перед вещью стоит his.",
            "I know him — я знаю его, после глагола стоит him.",
          ],
        },
        {
          id: "ne-know-his",
          kind: "note",
          tone: "mistake",
          text:
            "«I know his» — так не говорят.\n\nПутаница здесь из-за her: там " +
            "одно слово на оба места, а у мужчины слов два. После глагола — только him.",
        },
        {
          id: "primer-her-i-him",
          kind: "example",
          caption: "Четыре записи рядом",
          zvuchat: ["This is her book.", "I know her.", "This is his book.", "I know him.",
          ],
          text: "This is her book.\nI know her.\nThis is his book.\nI know him.",
          explain:
            "Слева от книги стоят her и his. После глагола — her и him. У женского " +
            "рода слово одно, у мужского — два разных.",
        },
        // Запись убрана: все четыре записи звучат в примере выше.
        {
          id: "kak-zapomnit-his-him",
          kind: "note",
          tone: "info",
          text:
            "Различить his и him помогает вопрос: чьё это или кого знают.\n\nЧьё — " +
            "his book. Кого — I know him.",
        },

        // ---- задания ----
        {
          id: "z1-vybrat-his-ili-him",
          kind: "choice",
          prompt: "Это его книга. Как сказать?",
          options: [
            { text: "This is him book." },
            { text: "This is his book.", correct: true },
            { text: "This is he book." },
          ],
          hint: "Перед вещью стоит слово о том, чья она.",
          why: "This is his book. Слово him стоит только после глагола: I know him.",
        },
        {
          id: "z2-dopisat-him-posle-glagola",
          kind: "gap",
          prompt: "Ты знаешь Алима. Допиши недостающее слово.",
          before: "I know ",
          after: ".",
          answer: "him",
          hint: "После глагола у мужского рода своё слово.",
          why: "I know him. Перед вещью было бы his, а после глагола идёт him.",
        },
        {
          id: "z3-otmetit-his-vmesto-him",
          kind: "hottext",
          prompt: "Отметь записи с ошибкой.",
          parts: [
            { text: "This is his bike.", selectable: true },
            { text: " · " },
            { text: "I see his.", selectable: true, correct: true },
            { text: " · " },
            { text: "I see him.", selectable: true },
            { text: " · " },
            { text: "This is him bike.", selectable: true, correct: true },
          ],
          hint: "His стоит перед вещью, him — после глагола.",
          why:
            "В «I see his» после глагола нужно him. В «This is him bike» перед вещью " +
            "нужно his. Верно: I see him, This is his bike.",
        },
        {
          id: "z4-sopostavit-her-his",
          kind: "match",
          prompt: "Сопоставь запись и её перевод.",
          left: ["her book", "I know her.", "his book"],
          right: ["Я знаю её.", "его книга", "её книга"],
          answer: [2, 0, 1],
          hint: "Смотри, стоит ли после слова вещь.",
          why: "Her book — её книга. I know her — я знаю её. His book — его книга.",
        },
        {
          id: "z5-napisat-dve-zapisi-her",
          kind: "short",
          prompt:
            "Напиши два предложения: это её велосипед и ты знаешь её. Велосипед — a bike.",
          answer: "This is her bike. I know her.",
          // Курс учил и обороту It's (модуль «Мои вещи»), значит он тоже верен.
          accept: ["It's her bike. I know her."],
          hint: "Слово her в обоих предложениях одно и то же.",
          why:
            "This is her bike. I know her. У женского рода одно слово на оба места, " +
            "и в этом вся разница с мужским.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "pro-veshch-it",
      title: "Про вещь: I like it",
      estimatedMinutes: 12,
      outcome: "говорить о вещи словом it: I like it",

      blocks: [
        {
          id: "zachem-it",
          kind: "explain",
          text: [
            "Вещь тоже не называют дважды подряд.",
            "«Это мой велосипед. Мне нравится велосипед» — второе слово лишнее.",
            "По-английски вместо него ставят it: This is my bike. I like it.",
          ],
        },
        {
          id: "tablica-it",
          kind: "table",
          caption: "It на двух местах",
          zvuchat: ["It is my bike.", "I like it.", "I can see it.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["It is my bike.", "Это мой велосипед."],
            ["I like it.", "Мне он нравится."],
            ["I can see it.", "Я его вижу."],
          ],
        },
        {
          id: "it-ne-menyaetsya",
          kind: "explain",
          text: [
            "Слово it не меняется совсем: и перед глаголом, и после него оно одно.",
            "Слов теперь семь: шесть про людей и it про вещи. Так же, как it, не " +
              "меняется только you.",
            "Поэтому и учить нечего: увидел вещь — берёшь it.",
          ],
        },
        {
          id: "veshchi-bez-roda",
          kind: "note",
          tone: "mistake",
          text:
            "«I like her» о книге — так не говорят.\n\nПо-русски книга «она», а стол " +
            "«он», но в английском у вещей рода нет. Про любую вещь — it.",
        },
        {
          id: "primer-it",
          kind: "example",
          caption: "Вещь названа один раз",
          zvuchat: ["This is my bike. I like it.", "This is her book. I can see it.",
          ],
          text: "This is my bike. I like it.\nThis is her book. I can see it.",
          explain:
            "В обеих парах вещь названа в первом предложении, а во втором заменена " +
            "на it. Слово it стоит после глагола, как him и her.",
        },
        // Запись убрана: все три предложения звучат в таблице выше.
        {
          id: "it-uzhe-znakomo",
          kind: "note",
          tone: "info",
          text:
            "Слово it тебе уже знакомо: им говорят о погоде и о времени — It is " +
            "raining, It is eight o'clock.\n\nЗдесь оно используется по-другому, но " +
            "слово то же.",
        },

        // ---- задания ----
        {
          id: "z1-dopisat-it",
          kind: "gap",
          prompt: "Тебе нравится этот велосипед. Допиши недостающее слово.",
          before: "This is my bike. I like ",
          after: ".",
          answer: "it",
          hint: "Про вещь — одно слово на все случаи.",
          why: "I like it. Про любую вещь говорят it.",
        },
        {
          id: "z2-vybrat-it",
          kind: "choice",
          prompt: "Речь о книге, и ты её видишь. В каком предложении нет ошибки?",
          options: [
            { text: "I can see her." },
            { text: "I can see it.", correct: true },
            { text: "I can see she." },
          ],
          hint: "Книга — вещь, а у вещей в английском рода нет.",
          why:
            "I can see it. Слово her годится только о человеке, а про вещь говорят it.",
        },
        {
          id: "z3-otmetit-rod-u-veshchi",
          kind: "hottext",
          prompt: "Отметь записи, где о вещи сказано словом о человеке.",
          parts: [
            { text: "This is my car. I like it.", selectable: true },
            { text: " · " },
            { text: "This is my car. I like her.", selectable: true, correct: true },
            { text: " · " },
            { text: "This is his pen. I can see him.", selectable: true, correct: true },
            { text: " · " },
            { text: "This is his pen. I can see it.", selectable: true },
          ],
          hint: "Машина и ручка — вещи, о них говорят it.",
          why:
            "Про машину и ручку нужно it. Слова her и him говорят о людях. Верно: " +
            "I like it, I can see it.",
        },
        {
          id: "z4-sobrat-mne-nravitsya",
          kind: "order",
          prompt: "Собери предложение: «Мне это нравится.»",
          items: ["it", "like", "I"],
          answer: [2, 1, 0],
          hint: "Порядок тот же, что в I know him.",
          why: "I like it. Слово it стоит после глагола.",
        },
        {
          id: "z5-napisat-pro-veshch",
          kind: "short",
          prompt: "Напиши два предложения: это её ручка и тебе она нравится. Ручка — a pen.",
          answer: "This is her pen. I like it.",
          accept: ["It's her pen. I like it."],
          hint: "Во втором предложении речь о вещи.",
          why:
            "This is her pen. I like it. Ручка — вещь, поэтому во втором предложении " +
            "стоит it, а не her.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "posle-predloga",
      title: "После предлога: This is for me",
      estimatedMinutes: 12,
      outcome: "ставить слово после предлога: This is for me",

      blocks: [
        {
          id: "zachem-posle-predloga",
          kind: "explain",
          text: [
            "Тебе протягивают подарок и говорят: это для тебя.",
            "Слово «для» — предлог, а после предлога стоит то же слово, что после " +
              "глагола: This is for me.",
            "Правило выходит одно на два случая — после глагола и после предлога.",
          ],
        },
        {
          id: "tablica-posle-predloga",
          kind: "table",
          caption: "Слово после предлога",
          zvuchat: ["This is for me.", "This book is for her.", "I work with them.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["This is for me.", "Это для меня."],
            ["This book is for her.", "Эта книга для неё."],
            ["I work with them.", "Я работаю с ними."],
          ],
        },
        {
          id: "odno-pravilo-na-dva-sluchaya",
          kind: "explain",
          text: [
            "Проверить себя можно так: перед глаголом идут I, he, we, а после глагола и " +
              "после предлога — me, him, us.",
            "I know him — после глагола. This is for him — после предлога.",
            "Слова me, him, her, us и them первыми в предложении не стоят никогда.",
          ],
        },
        {
          id: "ne-for-i",
          kind: "note",
          tone: "mistake",
          text:
            "«This is for I» — так не говорят.\n\nПосле предлога идёт me: This is " +
            "for me. Слово I стоит только первым, перед глаголом.",
        },
        {
          id: "primer-posle-predloga",
          kind: "example",
          caption: "Три предлога подряд",
          zvuchat: ["This is for me.", "I work with him.", "This book is for them.",
          ],
          text: "This is for me.\nI work with him.\nThis book is for them.",
          explain:
            "После for и with стоят me, him и them — те же слова, что после глагола. " +
            "Предлог их не меняет.",
        },
        // Запись убрана: все три предложения звучат в таблице выше.
        {
          id: "slovar-predlogov",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "for", translation: "для", example: "This is for me.", hint: "/fɔː/" },
            { term: "with", translation: "с, вместе с", example: "I work with him.", hint: "/wɪð/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-for-me",
          kind: "gap",
          prompt: "Ты говоришь, что подарок предназначен тебе. Допиши недостающее слово.",
          before: "This is for ",
          after: ".",
          answer: "me",
          hint: "После предлога идут me, him, her, us и them.",
          why: "This is for me. Слово I стоит только перед глаголом.",
        },
        {
          id: "z2-vybrat-with-them",
          kind: "choice",
          prompt: "Ты работаешь вместе с ними. В каком предложении нет ошибки?",
          options: [
            { text: "I work with they." },
            { text: "I work with them.", correct: true },
            { text: "I with them work." },
          ],
          hint: "После предлога идут me, him, her, us и them.",
          why:
            "I work with them. После with стоит them, а порядок слов в английском " +
            "другой, чем в русском «я с ними работаю».",
        },
        {
          id: "z3-otmetit-posle-predloga",
          kind: "hottext",
          prompt: "Отметь записи, где после предлога стоит не то слово.",
          parts: [
            { text: "This is for me.", selectable: true },
            { text: " · " },
            { text: "This is for I.", selectable: true, correct: true },
            { text: " · " },
            { text: "I work with he.", selectable: true, correct: true },
            { text: " · " },
            { text: "I work with him.", selectable: true },
          ],
          hint: "После предлога идут me, him, her, us, them.",
          why:
            "В «This is for I» нужно me, в «I work with he» нужно him. Верно: This " +
            "is for me, I work with him.",
        },
        {
          id: "z4-sobrat-dlya-neyo",
          kind: "order",
          prompt: "Собери предложение: «Эта книга для неё.»",
          items: ["her", "This book", "for", "is"],
          answer: [1, 3, 2, 0],
          hint: "Предлог стоит перед словом о человеке.",
          why: "This book is for her. После for идёт her.",
        },
        {
          id: "z5-napisat-dlya-nih",
          kind: "short",
          prompt: "Напиши, что эта книга для них. Книга — this book.",
          answer: "This book is for them.",
          hint: "После for идут me, him, her, us и them.",
          why: "This book is for them. После предлога идёт them, а не they.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "slushat-i-smotret",
      title: "Слушать и смотреть: I listen to him",
      estimatedMinutes: 13,
      outcome: "соединять глагол с предлогом: I listen to him",

      blocks: [
        {
          id: "zachem-glagol-s-predlogom",
          kind: "explain",
          text: [
            "По-русски «слушать» идёт без предлога: слушаю музыку, слушаю тебя.",
            "По-английски у глагола listen предлог обязателен: I listen to music.",
            // Было «он всегда at» — а у look есть и look for, и look after, и look
            // like. Правило верно для этого значения, не для глагола вообще.
            // Ровно та же порода уже находилась здесь про listen. Нашёл методист.
            "У look предлог есть и по-русски — «смотрю на картинку», — и в английском, " +
              "когда говоришь, на что смотришь, ставят at: I look at the picture.",
          ],
        },
        {
          id: "tablica-glagol-s-predlogom",
          kind: "table",
          caption: "Глагол вместе с предлогом",
          zvuchat: ["I listen to music.", "I listen to him.", "I look at the picture.",
            "I look at them.",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["I listen to music.", "Я слушаю музыку."],
            ["I listen to him.", "Я слушаю его."],
            ["I look at the picture.", "Я смотрю на картинку."],
            ["I look at them.", "Я смотрю на них."],
          ],
        },
        {
          id: "predlog-prikleen",
          kind: "explain",
          text: [
            "Предлог у таких глаголов не выбирают: он задан самим глаголом.",
            "Когда назван тот, кого слушают, у listen идёт to. Когда назван тот, на " +
              "кого смотрят, у look идёт at.",
            "А слово после предлога берётся то же, что после глагола, — как везде.",
          ],
        },
        {
          id: "ne-listen-him",
          kind: "note",
          tone: "mistake",
          text:
            "«I listen him» — так не говорят.\n\nБез to получается набор слов. " +
            "Верно: I listen to him.",
        },
        {
          id: "primer-glagola-s-predlogom",
          kind: "example",
          caption: "Два глагола со своими предлогами",
          zvuchat: ["I listen to her.", "She is listening to me.", "I look at them.",
            "They are looking at us.",
          ],
          text: "I listen to her.\nShe is listening to me.\nI look at them.\nThey are looking at us.",
          explain:
            "Предлог остаётся на месте и в рассказе о происходящем: listening to me, " +
            "looking at us. Меняется только форма глагола.",
        },
        // Запись убрана: оба глагола со своими предлогами звучат в таблице выше.
        {
          id: "slovar-slushat-smotret",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "listen to", translation: "слушать (кого-то, что-то)", example: "I listen to music.", hint: "/ˈlɪsn tuː/" },
            { term: "look at", translation: "смотреть на", example: "I look at the picture.", hint: "/lʊk ət/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-to",
          kind: "gap",
          prompt: "Ты слушаешь его. Допиши недостающее слово.",
          before: "I listen ",
          after: " him.",
          answer: "to",
          hint: "Когда слушаешь кого-то, у listen есть предлог.",
          why: "I listen to him. Без to получается набор слов.",
        },
        {
          id: "z2-vybrat-look-at",
          kind: "choice",
          prompt: "Ты смотришь на них. В каком предложении нет ошибки?",
          options: [
            { text: "I look them." },
            { text: "I look at they." },
            { text: "I look at them.", correct: true },
          ],
          hint: "Нужны обе части: предлог at и слово, которое идёт после глагола.",
          why:
            "I look at them. Без at предложение неполно, а после предлога идёт them, " +
            "а не they.",
        },
        {
          id: "z3-otmetit-poteryannyy-predlog",
          kind: "hottext",
          prompt: "Отметь записи, где потерян предлог.",
          parts: [
            { text: "I listen to her.", selectable: true },
            { text: " · " },
            { text: "I listen her.", selectable: true, correct: true },
            { text: " · " },
            { text: "I look it.", selectable: true, correct: true },
            { text: " · " },
            { text: "I look at it.", selectable: true },
          ],
          hint: "У listen предлог to, у look предлог at.",
          why: "Верно: I listen to her и I look at it. Без предлога эти глаголы не живут.",
        },
        {
          id: "z4-sobrat-smotryu-na-kartinku",
          kind: "order",
          prompt: "Собери предложение: «Я смотрю на картинку.»",
          items: ["the picture", "look", "I", "at"],
          answer: [2, 1, 3, 0],
          hint: "Предлог идёт сразу за глаголом.",
          why: "I look at the picture. Предлог at стоит между глаголом и картинкой.",
        },
        {
          id: "z5-napisat-slushayu-eyo",
          kind: "short",
          prompt: "Напиши, что ты слушаешь её. Слушать — listen.",
          answer: "I listen to her.",
          accept: ["I am listening to her.", "I'm listening to her."],
          hint: "Не забудь предлог.",
          why: "I listen to her. У глагола listen предлог обязателен.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "sprosit-o-cheloveke",
      title: "Спросить о человеке: Do you know her?",
      estimatedMinutes: 12,
      outcome: "спрашивать о человеке: Do you know her?",

      blocks: [
        {
          id: "zachem-vopros-o-cheloveke",
          kind: "explain",
          text: [
            "Ты хочешь узнать, знает ли собеседник твою подругу.",
            "Вопрос строится как обычно, а слово о человеке стоит на своём месте — " +
              "после глагола.",
            "Do you know her? Can you see him?",
          ],
        },
        {
          id: "tablica-vopros-o-cheloveke",
          kind: "table",
          caption: "Вопросы о людях",
          zvuchat: ["Do you know her?", "Can you see him?", "Do they know us?",
          ],
          head: ["Английский", "Перевод"],
          rows: [
            ["Do you know her?", "Ты её знаешь?"],
            ["Can you see him?", "Ты его видишь?"],
            ["Do they know us?", "Они нас знают?"],
          ],
        },
        {
          id: "otvet-na-vopros-o-cheloveke",
          kind: "explain",
          text: [
            "Ответ короткий, и берётся он по тому, с чего вопрос начался.",
            "На вопрос с do отвечают Yes, I do или No, I don't.",
            "На вопрос с can — Yes, I can или No, I can't.",
          ],
        },
        {
          id: "ne-do-you-know-she",
          kind: "note",
          tone: "mistake",
          text:
            "«Do you know she?» — так не говорят.\n\nВопрос ничего не меняет: после " +
            "глагола по-прежнему стоит her.",
        },
        {
          id: "primer-voprosa-o-cheloveke",
          kind: "example",
          caption: "Разговор о знакомых",
          razgovor: true,
          // Слово ask стояло в словаре урока и не работало нигде: ни в объяснении,
          // ни в задании. Теперь оно живёт в этом разговоре. Нашёл методист.
          text:
            "— Do you know Dana?\n— Yes, I do. I see her every day.\n— Can you call her?\n" +
            "— Yes, I can. I ask her about the lesson.",
          explain:
            "Имя названо в первом вопросе, а дальше идёт her — четыре раза подряд. В " +
            "ответах повторяется только do или can.",
        },
        // Запись убрана: все три вопроса звучат в таблице выше, а разговор — целиком.
        {
          id: "slovar-voprosa-o-cheloveke",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "call", translation: "звонить", example: "Can you call her?", hint: "/kɔːl/" },
            { term: "ask", translation: "спрашивать", example: "I ask her about the lesson.", hint: "/ɑːsk/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-dopisat-her-v-voprose",
          kind: "gap",
          prompt: "Ты хочешь узнать, знает ли собеседник Дану. Допиши недостающее слово.",
          before: "Do you know ",
          after: "?",
          answer: "her",
          hint: "Слово о ней стоит после глагола и в вопросе тоже.",
          why: "Do you know her? Вопрос порядок слова после глагола не меняет.",
        },
        {
          id: "z2-vybrat-vopros-o-nyom",
          kind: "choice",
          prompt: "Ты хочешь узнать, видит ли собеседник Алима. Как спросить?",
          options: [
            { text: "Can you see him?", correct: true },
            { text: "Can you see he?" },
            { text: "Can you him see?" },
          ],
          hint: "После глагола идут me, him, her, us и them.",
          why:
            "Can you see him? После глагола идёт him, и стоит оно сразу за глаголом.",
        },
        {
          id: "z3-otvetit-korotko-o-cheloveke",
          kind: "short",
          prompt: "Тебя спросили: Do you know them? Ты их знаешь. Ответь коротко — да.",
          answer: "Yes, I do.",
          hint: "Короткий ответ повторяет то, с чего начался вопрос.",
          why: "Yes, I do. Вопрос начинался с do, значит и в ответе стоит do.",
        },
        {
          id: "z4-otmetit-oshibki-v-voprose",
          kind: "hottext",
          prompt: "Отметь вопросы с ошибкой.",
          parts: [
            { text: "Do you know her?", selectable: true },
            { text: " · " },
            { text: "Do you know she?", selectable: true, correct: true },
            { text: " · " },
            { text: "Can you see they?", selectable: true, correct: true },
            { text: " · " },
            { text: "Can you see them?", selectable: true },
          ],
          hint: "После глагола идут her и them, а не she и they.",
          why: "Верно: Do you know her? и Can you see them?",
        },
        {
          id: "z5-sprosit-znaesh-li-menya",
          kind: "short",
          prompt: "Спроси у собеседника, знает ли он тебя. Знать — know.",
          answer: "Do you know me?",
          hint: "Слово о себе после глагола — me.",
          why: "Do you know me? После глагола идёт me, а не I.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "rasskaz-bez-povtorov",
      title: "Рассказ без повторов",
      estimatedMinutes: 13,
      outcome: "рассказывать, не повторяя имён",

      blocks: [
        {
          id: "zachem-bez-povtorov",
          kind: "explain",
          text: [
            "Ты рассказываешь о подруге, и в каждом предложении звучит её имя.",
            "Рассказ от этого делается тяжёлым, как список.",
            "Имя называют один раз, а дальше берут her — и рассказ идёт легко.",
          ],
        },
        {
          id: "tablica-chem-zamenyat",
          kind: "table",
          caption: "Чем заменять названное",
          zvuchat: ["Dana", "her", "Alim", "him", "my friends", "them", "my bike", "it",
          ],
          head: ["Названо в первый раз", "Дальше"],
          rows: [
            ["Dana", "her"],
            ["Alim", "him"],
            ["my friends", "them"],
            ["my bike", "it"],
          ],
        },
        {
          id: "shagi-rasskaza-bez-povtorov",
          kind: "explain",
          text: [
            "Первое предложение называет человека или вещь по имени.",
            "Дальше вместо имени идёт короткое слово: her, him, them или it.",
            "Так же поступают и с вещью: назвал велосипед — дальше говори it.",
          ],
        },
        {
          id: "ne-nachinay-s-zameny",
          kind: "note",
          tone: "info",
          text:
            "Начинать сразу с her нельзя: собеседник не поймёт, о ком речь.\n\n" +
            "Сначала имя, потом замена — порядок именно такой.",
        },
        {
          id: "primer-rasskaza-bez-povtorov",
          kind: "example",
          caption: "Рассказ о подруге",
          zvuchat: ["Dana is my friend.", "I see her every day.", "She has got a bike.",
            "I like it.",
          ],
          text: "Dana is my friend.\nI see her every day.\nShe has got a bike.\nI like it.",
          explain:
            "Имя Dana названо один раз. Дальше идут her и she — о ней, и it — о " +
            "велосипеде, названном в третьем предложении.",
        },
        // Запись убрана: оба рассказа выше звучат построчно.
        {
          id: "primer-s-povtorami-i-bez",
          kind: "example",
          caption: "Одно и то же дважды",
          zvuchat: ["Dana is my friend. I see Dana every day.",
            "Dana is my friend. I see her every day.",
          ],
          text: "Dana is my friend. I see Dana every day.\nDana is my friend. I see her every day.",
          explain:
            "В первой записи имя звучит дважды подряд и цепляет слух. Во второй оно " +
            "названо один раз, а дальше стоит her. Значение то же, а читается легче.",
        },

        // ---- задания ----
        {
          id: "z1-sobrat-rasskaz-bez-povtorov",
          kind: "order",
          prompt:
            "Собери рассказ: сначала кто такая Дана, потом что ты видишь её каждый " +
            "день, потом что у неё есть велосипед.",
          items: ["I see her every day.", "Dana is my friend.", "She has got a bike."],
          answer: [1, 0, 2],
          hint: "Порядок задан в условии.",
          why: "Dana is my friend. I see her every day. She has got a bike.",
        },
        {
          id: "z2-dva-predlozheniya-bez-povtorov",
          kind: "short",
          prompt:
            "Напиши два предложения: Алим — твой друг, и ты видишь его каждый день. " +
            "Каждый день — every day.",
          answer: "Alim is my friend. I see him every day.",
          hint: "Во втором предложении имя не повторяй.",
          why:
            "Alim is my friend. I see him every day. Имя названо один раз, дальше " +
            "стоит him.",
        },
        {
          id: "z3-dopisat-them",
          kind: "gap",
          prompt: "Речь об Алиме и Дане, и ты их знаешь. Допиши недостающее слово.",
          before: "Alim and Dana are my friends. I know ",
          after: ".",
          answer: "them",
          hint: "Людей двое.",
          why: "I know them. О нескольких после глагола идёт them.",
        },
        {
          id: "z4-otmetit-povtory",
          kind: "hottext",
          prompt: "Отметь записи, где имя повторено там, где хватило бы одного слова.",
          parts: [
            { text: "Dana is my friend. I see her every day.", selectable: true },
            { text: " · " },
            { text: "Dana is my friend. I see Dana every day.", selectable: true, correct: true },
            { text: " · " },
            { text: "Alim works here. I know Alim.", selectable: true, correct: true },
            { text: " · " },
            { text: "Alim works here. I know him.", selectable: true },
          ],
          hint: "Во втором предложении имя уже известно собеседнику.",
          why:
            "Верно: I see her every day и I know him. Имя, названное один раз, " +
            "дальше заменяют коротким словом.",
        },
        {
          id: "z5-rasskaz-vsluh-bez-povtorov",
          kind: "speak",
          prompt: "Расскажи вслух о своём друге: три предложения, имя назови один раз.",
          phrase: "Alim is my friend. I see him every day. I know his sister.",
          translation: "Алим — мой друг. Я вижу его каждый день. Я знаю его сестру.",
          hint: "После первого предложения бери him.",
          why:
            "Три предложения, одно имя. Дальше идут him и his — оба о том же " +
            "человеке, но на разных местах.",
        },
      ],
    },

    // =====================================================================
    // Урок чтения. Письмо о людях — текст, где имена названы один раз, а
    // дальше идут местоимения. Держать в голове, кто есть кто, и есть умение.
    // =====================================================================
    {
      slug: "chitaem-pismo-o-lyudyah",
      title: "Читаем письмо о людях",
      estimatedMinutes: 13,
      outcome: "понимать в тексте, о ком идёт речь, когда имя не повторяют",

      blocks: [
        {
          id: "zachem-chitat-o-lyudyah",
          kind: "explain",
          text: [
            "В письме о людях имя называют один раз, а дальше говорят him, her, them. " +
              "Читатель должен сам помнить, кто за каким словом стоит.",
            "Приём простой: дойдя до местоимения, вернись глазами назад и найди " +
              "ближайшее имя. Оно почти всегда и есть ответ.",
          ],
        },
        {
          id: "pismo-o-druzyah",
          kind: "text",
          genre: "email",
          title: "A message from Aigul",
          body: [
            "Hi! I have got two friends: Dana and Alim.",
            "Dana works in a shop. I see her every day.",
            "Alim studies English. I help him with his lessons.",
            "I like them very much. Aigul",
          ],
          // Словарика здесь нет: every day и help введены карточками в модуле 14,
          // и вторая подача сказала бы ученику, что слова новые. Нашёл методист.
        },
        {
          id: "razbor-pisma-o-lyudyah",
          kind: "note",
          tone: "info",
          text:
            "Слово them говорит о нескольких людях сразу — о тех, кого назвали " +
              "раньше по именам. Him и her — каждое об одном.",
        },
        {
          id: "zapiska-o-sosede",
          kind: "text",
          genre: "message",
          title: "A note",
          body: [
            "Nurlan is my brother. He works in a hospital.",
            "I don't see him on Monday. He is busy.",
            "His wife is a teacher. I know her well.",
          ],
          glossary: [
            { term: "wife", translation: "жена" },
            { term: "well", translation: "хорошо" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-kogo-vidit-kazhdyy-den",
          kind: "choice",
          about: "pismo-o-druzyah",
          prompt: "Прочитай письмо от Айгуль. Кого она видит каждый день?",
          options: [
            { text: "Алима" },
            { text: "Дану", correct: true },
            { text: "Обоих" },
          ],
          hint: "Найди слово her и вернись глазами к ближайшему имени.",
          why:
            "Dana works in a shop. I see her every day. Слово her стоит сразу после " +
            "предложения о Дане.",
        },
        {
          id: "z2-komu-pomogaet",
          kind: "short",
          about: "pismo-o-druzyah",
          prompt:
            "Прочитай письмо от Айгуль. Кому она помогает с занятиями? Напиши имя.",
          answer: "Alim",
          accept: ["alim", "ALIM"],
          hint: "Слово him указывает на мужчину, названного строкой выше.",
          why: "Alim studies English. I help him with his lessons. Алиму.",
        },
        {
          id: "z3-o-kom-them",
          kind: "choice",
          about: "pismo-o-druzyah",
          prompt: "Прочитай письмо от Айгуль. О ком она говорит them в последней строке?",
          options: [
            { text: "Только о Дане" },
            { text: "Только об Алиме" },
            { text: "О Дане и Алиме вместе", correct: true },
          ],
          hint: "Them — слово о нескольких людях сразу.",
          why:
            "I like them very much. В письме названы двое, и them собирает обоих.",
        },
        {
          id: "z4-kogo-ne-vidit-v-ponedelnik",
          kind: "short",
          about: "zapiska-o-sosede",
          prompt:
            "Прочитай записку A note. Кого не видят по понедельникам? Напиши имя.",
          answer: "Nurlan",
          accept: ["nurlan", "NURLAN"],
          hint: "Слово him указывает назад, на ближайшее мужское имя.",
          why: "Nurlan is my brother… I don't see him on Monday. Нурлана.",
        },
        {
          id: "z5-kto-takaya-ona",
          kind: "choice",
          about: "zapiska-o-sosede",
          prompt: "Прочитай записку A note. Кого пишущий хорошо знает?",
          options: [
            { text: "Жену брата", correct: true },
            { text: "Брата" },
            { text: "Обоих одинаково" },
          ],
          hint: "Слово her в последней строке указывает на женщину, названную рядом.",
          why:
            "His wife is a teacher. I know her well. Her — про жену, о ней и сказано " +
            "«хорошо знаю».",
        },
      ],
    },

    // =====================================================================
    // Урок слушания.
    // =====================================================================
    {
      slug: "slushaem-o-lyudyah",
      title: "Слушаем, о ком речь",
      estimatedMinutes: 13,
      outcome: "понимать на слух, о ком говорят, когда имя не повторяют",

      blocks: [
        {
          id: "zachem-slushat-o-lyudyah",
          kind: "explain",
          text: [
            "В разговоре имена звучат один раз, в самом начале. Дальше идут him, her и " +
              "them, и вернуться назад уже нельзя.",
            "Значит запомнить надо сразу: кто мужчина, кто женщина, сколько всего " +
              "людей. Остальное потом разберётся по этим трём словам.",
          ],
        },
        {
          id: "him-her-them-na-sluh",
          kind: "table",
          caption: "Три слова о людях — нажми и сравни",
          zvuchat: ["I know him.", "I know her.", "I know them.",
          ],
          head: ["Слово", "О ком", "Пример"],
          rows: [
            ["him", "о мужчине", "I know him."],
            ["her", "о женщине", "I know her."],
            ["them", "о нескольких", "I know them."],
          ],
        },
        {
          id: "them-slyshno-luchshe",
          kind: "note",
          tone: "info",
          text:
            "Her кончается гласным, а him и them — согласным m. Это и есть первая " +
              "примета: слышишь m на конце — речь не о женщине.",
        },
        {
          id: "zapis-o-dvuh-lyudyah",
          kind: "audio",
          skryt: true,
          pace: "slow",
          caption: "Послушай рассказ о двух людях",
          transcript:
            "My mother is a nurse. My father is a driver. I help her at home. " +
            "I don't see him in the morning.",
        },
        {
          id: "zapis-razgovor-o-znakomyh",
          kind: "audio",
          skryt: true,
          pace: "slow",
          voice: "два голоса",
          caption: "Послушай разговор",
          transcript:
            "Do you know Aigul? — Yes, I know her well. — And her brother? — " +
            "No, I don't know him.",
        },

        // ---- задания ----
        {
          id: "z1-kogo-vidit-kazhdyy-den-na-sluh",
          kind: "choice",
          about: "zapis-o-dvuh-lyudyah",
          prompt: "Послушай первую запись. Кому помогают дома?",
          options: [
            { text: "Отцу" },
            { text: "Матери", correct: true },
            { text: "Обоим" },
          ],
          hint: "Слово her — про женщину, а людей в записи двое.",
          why: "I help her at home. Her указывает на мать: она названа первой.",
        },
        {
          id: "z2-kem-rabotaet-otec",
          kind: "short",
          about: "zapis-o-dvuh-lyudyah",
          prompt:
            "Послушай первую запись. Кем работает отец? Ответь английским словом.",
          answer: "driver",
          accept: ["a driver"],
          hint: "Про отца сказано во втором предложении.",
          why: "My father is a driver. Водитель.",
        },
        {
          id: "z3-znaet-li-aigul",
          kind: "choice",
          about: "zapis-razgovor-o-znakomyh",
          prompt: "Послушай разговор. Кого собеседник знает хорошо?",
          options: [
            { text: "Айгуль", correct: true },
            { text: "Её брата" },
            { text: "Обоих" },
          ],
          hint: "Слушай, после какого имени идёт her.",
          why: "Yes, I know her well. Her — про Айгуль, о ней и спросили первой.",
        },
        {
          id: "z4-znaet-li-brata",
          kind: "choice",
          about: "zapis-razgovor-o-znakomyh",
          prompt: "Послушай разговор. Знает ли собеседник брата Айгуль?",
          options: [
            { text: "Знает" },
            { text: "Не знает", correct: true },
            { text: "Про брата не спрашивали" },
          ],
          hint: "Последний ответ начинается с No.",
          why: "No, I don't know him. Him — про брата.",
        },
        {
          id: "z5-rasskazat-o-dvuh",
          kind: "speak",
          prompt:
            "Расскажи вслух о двух знакомых: назови имена, а потом говори him и her, " +
            "не повторяя имён.",
          phrase: "I have got two friends: Dana and Alim. I see her every day. I know him well.",
          translation: "У меня двое друзей: Дана и Алим. Я вижу её каждый день. Его я хорошо знаю.",
          hint: "Имена назови один раз, в самом начале.",
          why:
            "Слушающий держит в голове, кто мужчина, а кто женщина, и дальше разбирает " +
            "рассказ по словам him и her. Повторять имена не нужно.",
        },
      ],
    },
  ],

  quiz: {
    ask: 12,
    passRatio: 0.8,
    questions: [
      // Работа не повторяет задания уроков: другие люди, другие глаголы, другой
      // пропущенный кусок. Заучившему задания она не сдаётся.
      //
      // В списках accept стоят только по-настоящему другие записи. Заглавные
      // буквы и точка в конце ответа сверкой и так не учитываются.

      // ---- итог 1 ----
      // ---- чтение и слушание ------------------------------------------
      // Другой случай, чем в уроках: там письмо Айгуль и записка о брате,
      // здесь письмо о родителях и разговор о соседях. Оба вопроса чтения
      // содержат сам текст.
      {
        id: "q-tekst-o-kom-rech",
        kind: "choice",
        outcome: "понимать в тексте, о ком идёт речь, когда имя не повторяют",
        prompt:
          "Письмо: «My mother is a doctor. My father is a driver. I see him at home " +
          "every day.» Кого видят дома каждый день?",
        options: [
          { text: "Отца", correct: true },
          { text: "Мать" },
          { text: "Обоих" },
        ],
        why: "I see him at home every day. Him — про мужчину, то есть про отца.",
      },
      {
        id: "q-tekst-kogo-znayut",
        kind: "choice",
        outcome: "понимать в тексте, о ком идёт речь, когда имя не повторяют",
        prompt:
          "Записка: «Dana and Alim are my friends. I see them on Sunday. I know him " +
          "well.» Кого знают хорошо?",
        options: [
          { text: "Дану" },
          { text: "Алима", correct: true },
          { text: "Обоих" },
        ],
        why:
          "I know him well. Him — про мужчину, то есть про Алима. Them в предыдущем " +
          "предложении — про обоих сразу.",
      },
      {
        id: "q-na-sluh-o-kom-govoryat",
        kind: "choice",
        outcome: "понимать на слух, о ком говорят, когда имя не повторяют",
        zvuk: "Alim and Aigul are my friends. I work with him. I don't know her well.",
        prompt: "Послушай запись. С кем говорящий работает?",
        options: [
          { text: "С Айгуль" },
          { text: "С обоими" },
          { text: "С Алимом", correct: true },
        ],
        why: "I work with him. Him — про мужчину, то есть про Алима.",
      },
      {
        id: "q-na-sluh-kogo-znayut-ploho",
        kind: "short",
        outcome: "понимать на слух, о ком говорят, когда имя не повторяют",
        zvuk: "Alim and Aigul are my friends. I work with him. I don't know her well.",
        prompt:
          "Послушай запись. Кого говорящий знает плохо? Напиши имя.",
        answer: "Aigul",
        accept: ["aigul", "AIGUL"],
        why: "I don't know her well. Her — про женщину, то есть про Айгуль.",
      },
      {
        id: "q-vmesto-imeni-vybor",
        kind: "choice",
        outcome: "заменять имя словом после глагола: I know him",
        prompt: "Ты звонишь Дане. В каком предложении нет ошибки?",
        options: [
          { text: "I call she." },
          { text: "I call her.", correct: true },
          { text: "I call to her." },
        ],
        hint: "Слово о ней стоит сразу после глагола.",
        why:
          "I call her. Перед глаголом стояло бы she, а предлог to у глагола call " +
          "не нужен: по-русски «звоню ей», по-английски просто call her.",
      },
      {
        id: "q-vmesto-imeni-dopisat",
        kind: "gap",
        outcome: "заменять имя словом после глагола: I know him",
        prompt: "Дана и Алим тебя знают. Допиши недостающее слово.",
        before: "Dana and Alim know ",
        after: ".",
        answer: "me",
        hint: "Слово о себе, но не первое в предложении.",
        why: "Dana and Alim know me. Первым стояло бы I, после глагола идёт me.",
      },
      {
        id: "q-vmesto-imeni-napisat",
        kind: "short",
        outcome: "заменять имя словом после глагола: I know him",
        prompt: "Напиши, что твоя сестра знает Алима, не называя имени. Знать — know.",
        answer: "My sister knows him.",
        hint: "О сестре у глагола есть окончание, а слово об Алиме идёт следом.",
        why: "My sister knows him. У knows окончание -s, а имя заменено словом him.",
      },

      // ---- итог 2 ----
      {
        id: "q-shest-slov-dopisat",
        kind: "gap",
        outcome: "выбирать нужное слово из шести: me, you, him, her, us, them",
        prompt: "Вы с другом знаете этих людей. Допиши недостающее слово.",
        before: "We know ",
        after: ".",
        answer: "them",
        hint: "Людей несколько, и слово стоит после глагола.",
        why: "We know them. Перед глаголом было бы they, после глагола идёт them.",
      },
      {
        id: "q-shest-slov-vybor",
        kind: "choice",
        outcome: "выбирать нужное слово из шести: me, you, him, her, us, them",
        prompt: "Дана знает вас с братом. В каком предложении нет ошибки?",
        options: [
          { text: "Dana knows we." },
          { text: "Dana knows our." },
          { text: "Dana knows us.", correct: true },
        ],
        hint: "Речь о двоих, и слово стоит не на месте подлежащего.",
        why:
          "Dana knows us. Перед глаголом стояло бы we, а our стоит перед вещью: " +
          "our house.",
      },
      {
        id: "q-shest-slov-sopostavit",
        kind: "match",
        outcome: "выбирать нужное слово из шести: me, you, him, her, us, them",
        prompt: "Сопоставь слово перед глаголом и его пару после глагола.",
        left: ["you", "she", "they"],
        right: ["them", "you", "her"],
        answer: [1, 2, 0],
        hint: "Одно слово из шести не меняется вовсе.",
        why: "You — you, she — her, they — them. Слово you одинаково на обоих местах.",
      },

      // ---- итог 3 ----
      {
        id: "q-her-his-vybor",
        kind: "choice",
        outcome: "различать «её» и «его» в двух местах: her book — I know her, his book — I know him",
        prompt: "Ты видишь этого человека. В каком предложении нет ошибки?",
        options: [
          { text: "I see him.", correct: true },
          { text: "I see his." },
          { text: "I see he." },
        ],
        hint: "После глагола у мужского рода своё слово, и оно не his.",
        why:
          "I see him. Слово his стоит только перед вещью: his bike. Слово he — " +
          "только перед глаголом.",
      },
      {
        id: "q-her-his-dopisat",
        kind: "gap",
        outcome: "различать «её» и «его» в двух местах: her book — I know her, his book — I know him",
        prompt: "Это её ручка. Допиши недостающее слово.",
        before: "This is ",
        after: " pen.",
        answer: "her",
        hint: "Спроси себя: чья это ручка?",
        why: "This is her pen. У женского рода одно слово и перед вещью, и после глагола.",
      },
      {
        id: "q-her-his-sopostavit",
        kind: "match",
        outcome: "различать «её» и «его» в двух местах: her book — I know her, his book — I know him",
        prompt: "Сопоставь запись и её перевод.",
        left: ["his bike", "I know him.", "her bike"],
        right: ["его велосипед", "её велосипед", "Я знаю его."],
        answer: [0, 2, 1],
        hint: "Различай по тому, что идёт следом за словом.",
        why: "His bike — его велосипед. I know him — я знаю его. Her bike — её велосипед.",
      },

      // ---- итог 4 ----
      {
        id: "q-it-vybor",
        kind: "choice",
        outcome: "говорить о вещи словом it: I like it",
        prompt: "Речь о машине, и она тебе нравится. В каком предложении нет ошибки?",
        options: [
          { text: "I like her." },
          { text: "I like it.", correct: true },
          { text: "I like she." },
        ],
        hint: "Машина — вещь, а у вещей в английском рода нет.",
        why: "I like it. По-русски машина «она», а по-английски о любой вещи — it.",
      },
      {
        id: "q-it-dopisat",
        kind: "gap",
        outcome: "говорить о вещи словом it: I like it",
        prompt: "Речь о её ручке, и ты её видишь. Допиши недостающее слово.",
        before: "This is her pen. I can see ",
        after: ".",
        answer: "it",
        hint: "Ручка — не человек.",
        why: "I can see it. Ручка — вещь, поэтому her сюда не годится.",
      },
      {
        id: "q-it-napisat",
        kind: "short",
        outcome: "говорить о вещи словом it: I like it",
        prompt: "Напиши два предложения: это его велосипед и тебе он нравится. Велосипед — a bike.",
        answer: "This is his bike. I like it.",
        accept: ["It's his bike. I like it."],
        hint: "Во втором предложении речь о вещи, а не о человеке.",
        why: "This is his bike. I like it. Перед вещью стоит his, а сама вещь — это it.",
      },

      // ---- итог 5 ----
      {
        id: "q-predlog-dopisat",
        kind: "gap",
        outcome: "ставить слово после предлога: This is for me",
        prompt: "Эта книга для него. Допиши недостающее слово.",
        before: "This book is for ",
        after: ".",
        answer: "him",
        hint: "После for форма слова меняется.",
        why: "This book is for him. После for идёт him, а не he.",
      },
      {
        id: "q-predlog-vybor",
        kind: "choice",
        outcome: "ставить слово после предлога: This is for me",
        prompt: "Ты работаешь вместе с ней. В каком предложении нет ошибки?",
        options: [
          { text: "I work with her.", correct: true },
          { text: "I work with she." },
          { text: "I with her work." },
        ],
        hint: "Смотри и на форму слова, и на место глагола.",
        why:
          "I work with her. После with стоит her, и порядок слов в английском другой, " +
          "чем в русском «я с ней работаю».",
      },
      {
        id: "q-predlog-napisat",
        kind: "short",
        outcome: "ставить слово после предлога: This is for me",
        prompt: "Напиши, что это для них. Это — this.",
        answer: "This is for them.",
        hint: "Форма после for не та, что перед глаголом.",
        why: "This is for them. После for идёт them, а не they.",
      },

      // ---- итог 6 ----
      {
        id: "q-glagol-predlog-dopisat",
        kind: "gap",
        outcome: "соединять глагол с предлогом: I listen to him",
        prompt: "Ты смотришь на неё. Допиши недостающее слово.",
        before: "I look ",
        after: " her.",
        answer: "at",
        hint: "Когда смотришь на кого-то, у look есть предлог.",
        why: "I look at her. У look предлог at, у listen — to.",
      },
      {
        id: "q-glagol-predlog-vybor",
        kind: "choice",
        outcome: "соединять глагол с предлогом: I listen to him",
        prompt: "Ты слушаешь их. В каком предложении нет ошибки?",
        options: [
          { text: "I listen them." },
          { text: "I listen to they." },
          { text: "I listen to them.", correct: true },
        ],
        hint: "Нужны обе части: предлог и слово, которое идёт после глагола.",
        why:
          "I listen to them. Без to предложение неполно, а после предлога идёт them, " +
          "а не they.",
      },
      {
        id: "q-glagol-predlog-napisat",
        kind: "short",
        outcome: "соединять глагол с предлогом: I listen to him",
        prompt: "Напиши, что ты смотришь на него. Смотреть — look.",
        answer: "I look at him.",
        hint: "Не забудь предлог.",
        why: "I look at him. У глагола look предлог обязателен.",
      },

      // ---- итог 7 ----
      {
        id: "q-vopros-o-cheloveke-vybor",
        kind: "choice",
        outcome: "спрашивать о человеке: Do you know her?",
        prompt: "Ты хочешь узнать, знает ли собеседник этих людей. Как спросить?",
        options: [
          { text: "Do you know they?" },
          { text: "Do you know them?", correct: true },
          { text: "Do you them know?" },
        ],
        hint: "Вопрос порядок слов после глагола не меняет.",
        why:
          "Do you know them? Вопрос порядок слова после глагола не меняет, и после " +
          "глагола идёт them.",
      },
      {
        id: "q-vopros-o-cheloveke-dopisat",
        kind: "gap",
        outcome: "спрашивать о человеке: Do you know her?",
        prompt: "Ты хочешь узнать, видит ли тебя собеседник. Допиши недостающее слово.",
        before: "Can you see ",
        after: "?",
        answer: "me",
        hint: "Слово о себе после глагола.",
        why: "Can you see me? Видят тебя, а не ты видишь, — и слово о себе меняется на me.",
      },
      {
        id: "q-vopros-o-cheloveke-sprosit",
        kind: "short",
        outcome: "спрашивать о человеке: Do you know her?",
        prompt: "Спроси у собеседника, знает ли он Алима. Имя не называй. Знать — know.",
        answer: "Do you know him?",
        hint: "Вопрос открывает do.",
        why: "Do you know him? После глагола идёт him.",
      },

      // ---- итог 8 ----
      {
        id: "q-bez-povtorov-sobrat",
        kind: "order",
        outcome: "рассказывать, не повторяя имён",
        prompt:
          "Собери рассказ: сначала кто такой Алим, потом что ты его знаешь, потом " +
          "что у него есть машина.",
        items: ["He has got a car.", "Alim is my friend.", "I know him."],
        answer: [1, 2, 0],
        hint: "Условие называет порядок прямо.",
        why: "Alim is my friend. I know him. He has got a car.",
      },
      {
        id: "q-bez-povtorov-napisat",
        kind: "short",
        outcome: "рассказывать, не повторяя имён",
        prompt:
          "Напиши два предложения: Дана — твоя подруга, и ты звонишь ей каждый день. " +
          "Звонить — call, каждый день — every day.",
        answer: "Dana is my friend. I call her every day.",
        hint: "Во втором предложении поставь замену имени.",
        why:
          "Dana is my friend. I call her every day. Имя названо один раз, дальше " +
          "стоит her.",
      },
      {
        id: "q-bez-povtorov-otmetit",
        kind: "hottext",
        outcome: "рассказывать, не повторяя имён",
        prompt: "Отметь записи, где вещь названа дважды подряд.",
        parts: [
          { text: "This is my bike. I like it.", selectable: true },
          { text: " · " },
          { text: "This is my bike. I like my bike.", selectable: true, correct: true },
          { text: " · " },
          { text: "This is her pen. I can see her pen.", selectable: true, correct: true },
          { text: " · " },
          { text: "This is her pen. I can see it.", selectable: true },
        ],
        hint: "Во втором предложении вещь уже известна собеседнику.",
        why:
          "Верно: I like it и I can see it. Вещь, названную один раз, дальше заменяют " +
          "словом it.",
      },
    ],
  },
};

export default module;
