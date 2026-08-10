import type { Module } from "@/lib/content/types";

/**
 * Модуль 5 курса «Английский с нуля»: отрицание с be.
 *
 * Программа: docs/programma-english-starter.md, модуль 5 — «отрицать: сказать,
 * что это не так»; грамматика: отрицание с `be`, отрицательное предложение.
 *
 * ЧЕМ ОГРАНИЧЕН МОДУЛЬ:
 *
 * 1. Отрицается только `be`. Отрицание с `don't` описание ступени тоже ставит
 *    на A1, но настоящее простое время программа отдаёт модулю 15 — значит и
 *    `don't` ждёт там же. Здесь его нет.
 *
 * 2. Множественного числа нет (модуль 8), притяжательных нет (модуль 7),
 *    прилагательных сверх пройденных `fine` и `OK` нет (модуль 11).
 *
 * 3. ПРОДОЛЖЕНИЕ МОДУЛЯ 4. Там `No, I'm not` был дан готовым оборотом, без
 *    разбора. Здесь он разбирается и распространяется на любое предложение с
 *    `be`. Повтор намеренный: сначала оборот, потом устройство — тот же
 *    порядок, что в модуле 2.
 *
 * 4. Звука нет — решение об источнике записей за владельцем
 *    (docs/zadachi-vladeltsa.md, п. 1.4).
 */
const module: Module = {
  slug: "ne-tak",
  title: "Не так",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, NEGATION negation «FORM: MAIN VERB 'BE'»: «Can form negative statements of main " +
        "verb 'be', with contracted and uncontracted forms», пример источника — «My college " +
        "is not very big». Обе записи, полная и короткая, названы источником прямо, поэтому " +
        "модуль даёт обе. " +
        "A1, VERBS types «FORM: LINKING VERB, 'BE'». " +
        "A1, PRONOUNS subject/object «FORM: (SUBJECT) STATEMENTS». " +
        "ЧЕГО ЗДЕСЬ НЕТ НАМЕРЕННО: A1, NEGATION «FORM: AUXILIARY VERB 'DO', PRESENT» — " +
        "отрицание с don't. По ступени оно проходит, но требует настоящего простого " +
        "времени, а его программа отдаёт модулю 15",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Council of Europe, CEFR Companion Volume 2020",
      section:
        "с. 79, Information exchange, A1: «Can ask and answer questions about themselves and " +
        "other people…» — поправить собеседника значит ответить на его вопрос точнее. " +
        "ОГОВОРКА: отдельного описания «умеет отрицать» в книге нет ни на одной ступени. " +
        "Отрицание — не умение общения, а устройство языка, и описания его не перечисляют. " +
        "Основание модуля — строка English Grammar Profile выше и программа курса",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Oxford 3000",
      section:
        "новые слова написанных уроков с пометкой A1: not, right, wrong (прилагательное; " +
        "наречие wrong стоит на B1 и не берётся). Остальное — слова модулей 1–4. " +
        "Произношение: not /nɒt/, right /raɪt/, wrong /rɒŋ/ — сверено по ipa-en-uk.txt, " +
        "где вместо `r` стоит `ɹ`. Курс держит словарную запись `r` во всех модулях",
      license: "внутреннее использование",
    },
    {
      ref: "ipa-en-uk.txt и wikipron-en-uk.tsv",
      section:
        "произношение слов модуля, британская норма. Условности курса соблюдены " +
        "(CLAUDE.md, раздел о британской норме)",
      license: "CC BY-SA и свободная лицензия, базы не перепубликуются",
    },
  ],

  outcomes: [
    "строит отрицание, поставив not после формы be",
    "пишет короткие формы отрицания: isn't, aren't, I'm not",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "not-posle-be",
      title: "Not после формы be",
      estimatedMinutes: 14,
      outcome: "строит отрицание, поставив not после формы be",

      blocks: [
        {
          id: "zachem-otricanie",
          kind: "explain",
          text: [
            "В прошлом модуле ответ «нет» брался целиком: No, I'm not. Теперь разберём, как " +
              "он устроен, — и тогда отрицать можно будет любое предложение, а не только " +
              "отвечать на вопрос.",
            "Устроено просто: слово not ставят сразу после формы be. I am a student → " +
              "I am not a student. Больше ничего не меняется: ни порядок слов, ни всё " +
              "остальное в предложении.",
          ],
        },
        {
          id: "tablica-otricaniya",
          kind: "table",
          caption: "Утверждение и отрицание",
          head: ["Как есть", "Как не есть", "Перевод"],
          rows: [
            ["I am a student.", "I am not a student.", "Я не студент."],
            ["She is from Turkey.", "She is not from Turkey.", "Она не из Турции."],
            ["He is in Astana.", "He is not in Astana.", "Он не в Астане."],
            ["They are doctors.", "They are not doctors.", "Они не врачи."],
          ],
        },
        {
          id: "not-ne-pered-be",
          kind: "note",
          tone: "mistake",
          text:
            "«I not am a student» — самая понятная ошибка: по-русски «не» стоит перед " +
            "глаголом, и рука тянется поставить not туда же. По-английски наоборот: " +
            "сначала форма be, и только за ней not.",
        },
        {
          id: "odno-otricanie",
          kind: "note",
          tone: "info",
          text:
            "Отрицание в английском предложении одно. По-русски можно сказать «я не студент " +
            "никакой», по-английски второе отрицание не ставят — одного not достаточно.",
        },
        {
          id: "primer-popravki",
          kind: "example",
          caption: "Зачем это нужно в разговоре",
          text: "— Is she a nurse?\n— No, she is not a nurse. She is a doctor.",
          explain:
            "Краткого «нет» часто мало: собеседник узнал только то, чего нет. Полное " +
            "отрицание позволяет сказать, что именно не так, а следующим предложением — " +
            "как на самом деле.",
        },
        {
          id: "zapis-otricaniya",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай утверждение и отрицание рядом",
          transcript:
            "I am a student. I am not a student. She is from Turkey. She is not from Turkey.",
        },
        {
          id: "slovar-otricaniya",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "not", translation: "не", example: "I am not a doctor.", hint: "/nɒt/" },
            { term: "right", translation: "правильный, верный", example: "You are right.", hint: "/raɪt/" },
            { term: "wrong", translation: "неправильный, не тот", example: "It is wrong.", hint: "/rɒŋ/" },
          ],
        },

        // ---- задания ----
        {
          id: "z1-gde-stoit-not",
          kind: "choice",
          prompt: "Куда ставят слово not?",
          options: [
            { text: "Сразу после формы be", correct: true },
            { text: "Перед формой be" },
            { text: "В самый конец предложения" },
          ],
          hint: "По-русски «не» стоит перед глаголом, по-английски — наоборот.",
          why:
            "Not идёт сразу после формы be: I am not, she is not. Перед формой be его " +
            "ставят по русской привычке, и это ошибка.",
        },
        {
          id: "z2-dopisat-not",
          kind: "gap",
          prompt: "Допиши слово, чтобы вышло отрицание: «Он не водитель».",
          before: "He is ",
          after: " a driver.",
          answer: "not",
          hint: "Три буквы, стоят сразу за is.",
          why: "He is not a driver. Слово not встало после is, остальное осталось на месте.",
        },
        {
          id: "z3-sdelat-otricanie",
          kind: "short",
          prompt: "Сделай отрицание из «She is from Spain.» Запиши целиком, без короткой формы.",
          answer: "She is not from Spain.",
          exact: true,
          accept: ["She is not from Spain"],
          hint: "Добавляется одно слово, и место у него определённое.",
          why: "She is not from Spain. Not встало после is; больше ничего не менялось.",
        },
        {
          id: "z4-otmetit-oshibki",
          kind: "hottext",
          prompt: "Отметь строки, где not стоит не на своём месте.",
          parts: [
            { text: "I not am a student.", selectable: true, correct: true },
            { text: " · " },
            { text: "He is not in Rome.", selectable: true },
            { text: " · " },
            { text: "She not is a nurse.", selectable: true, correct: true },
            { text: " · " },
            { text: "They are not from Turkey.", selectable: true },
          ],
          hint: "Not должен стоять сразу после формы be, а не перед ней.",
          why:
            "«I not am» и «She not is» — not перед формой be. Правильно: I am not, she is " +
            "not. Две другие строки построены верно.",
        },
        {
          id: "z5-sobrat-otricanie",
          kind: "order",
          prompt: "Собери предложение: «Я не врач».",
          items: ["doctor", "not", "I", "am", "a"],
          answer: [2, 3, 1, 4, 0],
          hint: "Сначала тот, о ком речь, потом форма be, потом not.",
          why:
            "I am not a doctor. Порядок неизменный: кто, форма be, not, дальше всё " +
            "остальное вместе со словом a.",
        },
        {
          id: "z6-popravit-sobesednika",
          kind: "short",
          prompt: "Собеседник сказал: «You are a teacher.» Ты студент. Возрази целиком, без короткой формы.",
          answer: "I am not a teacher.",
          exact: true,
          accept: ["I am not a teacher"],
          hint: "Отвечаешь о себе, значит местоимение меняется на I.",
          why:
            "I am not a teacher. Про you спросили — про I отвечаешь; форма be меняется на " +
            "am, за ней встаёт not.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "korotkie-formy-otricaniya",
      title: "Isn't, aren't, I'm not",
      estimatedMinutes: 14,
      outcome: "пишет короткие формы отрицания: isn't, aren't, I'm not",

      blocks: [
        {
          id: "zachem-korotkie-otricaniya",
          kind: "explain",
          text: [
            "У отрицания, как и у утверждения, есть короткая запись. She is not → " +
              "she isn't. They are not → they aren't. Апостроф стоит на месте выпавшей " +
              "буквы o — ровно как в I'm и he's.",
            "Описание ступени называет обе записи прямо: и полную, и короткую. Значит знать " +
              "нужно обе, а выбирать можно любую.",
          ],
        },
        {
          id: "tablica-korotkih-otricaniy",
          kind: "table",
          caption: "Полная запись и короткая",
          head: ["Полная", "Короткая", "Что выпало"],
          rows: [
            ["I am not", "I'm not", "a в am — слипается местоимение с глаголом"],
            ["you are not", "you aren't", "o в not"],
            ["he is not", "he isn't", "o в not"],
            ["she is not", "she isn't", "o в not"],
            ["it is not", "it isn't", "o в not"],
            ["we are not", "we aren't", "o в not"],
            ["they are not", "they aren't", "o в not"],
          ],
        },
        {
          id: "pervoe-lico-osoboe",
          kind: "note",
          tone: "mistake",
          text:
            "Первая строка стоит особняком: у неё слипается не глагол с not, а местоимение " +
            "с глаголом. Получается I'm not, а не «I amn't» — такого слова в английском нет " +
            "вовсе. У остальных шести строк наоборот.",
        },
        {
          id: "dve-korotkie-u-odnogo",
          kind: "note",
          tone: "info",
          text:
            "У строк с are и is коротких записей на самом деле две: they aren't и " +
            "they're not, she isn't и she's not. Обе верны. Чтобы не путаться, в курсе " +
            "берём первую — ту, где слипается глагол с not.",
        },
        {
          id: "zapis-korotkih-otricaniy",
          kind: "audio",
          planned: true,
          pace: "slow",
          caption: "Послушай короткие формы",
          transcript: "I'm not a student. She isn't from Turkey. They aren't in Astana.",
        },

        // ---- задания ----
        {
          id: "z1-korotkaya-dlya-is-not",
          kind: "choice",
          prompt: "Как записать she is not коротко?",
          options: [
            { text: "she isnt" },
            { text: "she isn't", correct: true },
            { text: "she is'nt" },
          ],
          hint: "Апостроф стоит ровно на месте выпавшей буквы.",
          why:
            "She isn't. Выпала o из not, на её месте апостроф. Без апострофа и с апострофом " +
            "не на месте — обе записи неверны.",
        },
        {
          id: "z2-dopisat-arent",
          kind: "gap",
          prompt: "Запиши коротко: they are not.",
          before: "They ",
          after: " in Rome.",
          answer: "aren't",
          hint: "Выпадает та же буква, что у isn't.",
          why: "They aren't in Rome. Из not выпала o, на её месте апостроф.",
        },
        {
          id: "z3-razvernut",
          kind: "short",
          prompt: "Запиши полностью, без короткой формы: «He isn't a driver.»",
          answer: "He is not a driver.",
          exact: true,
          accept: ["He is not a driver"],
          hint: "Апостроф уходит, буква возвращается.",
          why: "He is not a driver. Isn't разворачивается в is not.",
        },
        {
          id: "z4-otmetit-nevernye",
          kind: "hottext",
          prompt: "Отметь строки с ошибкой в короткой форме.",
          parts: [
            { text: "I amn't a doctor.", selectable: true, correct: true },
            { text: " · " },
            { text: "She isn't from Spain.", selectable: true },
            { text: " · " },
            { text: "They arent in Almaty.", selectable: true, correct: true },
            { text: " · " },
            { text: "I'm not a nurse.", selectable: true },
          ],
          hint: "Одного слова в английском нет вовсе, в другом пропущен апостроф.",
          why:
            "«Amn't» не существует — нужно I'm not. «Arent» без апострофа — нужно aren't. " +
            "Две другие строки записаны верно.",
        },
        {
          id: "z5-sopostavit-korotkie",
          kind: "match",
          prompt: "Сопоставь полную запись и короткую.",
          left: ["I am not", "it is not", "we are not"],
          right: ["we aren't", "I'm not", "it isn't"],
          answer: [1, 2, 0],
          hint: "У одной пары слипается не глагол с not, а местоимение с глаголом.",
          why: "I am not — I'm not, it is not — it isn't, we are not — we aren't.",
        },
        {
          id: "z6-zapisat-korotko",
          kind: "short",
          prompt: "Запиши коротко: «Я не преподаватель». Начни с I'm.",
          answer: "I'm not a teacher.",
          exact: true,
          accept: ["I'm not a teacher"],
          hint: "У первого лица короткая форма только одна.",
          why: "I'm not a teacher. Слова «amn't» нет, поэтому слипается I с am.",
        },
      ],
    },
  ],

  // =======================================================================
  // Проверочная работа модуля.
  // Модуль дописывается: сейчас два урока из восьми, работа покрывает их итоги.
  // Третий итог появится вместе с уроком о поправке собеседника.
  // =======================================================================
  quiz: {
    ask: 6,
    passRatio: 0.7,
    questions: [
      {
        id: "q-gde-not",
        kind: "choice",
        outcome: "строит отрицание, поставив not после формы be",
        prompt: "Куда ставят слово not?",
        options: [
          { text: "Перед формой be" },
          { text: "Сразу после формы be", correct: true },
          { text: "В конец предложения" },
        ],
        why: "Not идёт сразу после формы be: I am not, she is not.",
      },
      {
        id: "q-sdelat-otricanie",
        kind: "short",
        outcome: "строит отрицание, поставив not после формы be",
        prompt: "Сделай отрицание из «He is in Rome.» Запиши целиком, без короткой формы.",
        answer: "He is not in Rome.",
        exact: true,
        accept: ["He is not in Rome"],
        why: "He is not in Rome. Not встало после is.",
      },
      {
        id: "q-dopisat-not",
        kind: "gap",
        outcome: "строит отрицание, поставив not после формы be",
        prompt: "Допиши слово: «Она не медсестра».",
        before: "She is ",
        after: " a nurse.",
        answer: "not",
        why: "She is not a nurse. Слово not стоит сразу за формой be.",
      },
      {
        id: "q-korotkaya-isnt",
        kind: "short",
        outcome: "пишет короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Запиши коротко: he is not.",
        answer: "he isn't",
        exact: true,
        accept: ["He isn't"],
        why: "He isn't. Из not выпала o, на её месте апостроф.",
      },
      {
        id: "q-amnt",
        kind: "choice",
        outcome: "пишет короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Как коротко сказать «я не врач»?",
        options: [
          { text: "I'm not a doctor.", correct: true },
          { text: "I amn't a doctor." },
          { text: "I not am a doctor." },
        ],
        why: "I'm not a doctor. Слова «amn't» в английском нет, а «I not am» — неверный порядок.",
      },
      {
        id: "q-razvernut-arent",
        kind: "short",
        outcome: "пишет короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Запиши полностью, без короткой формы: «They aren't in Astana.»",
        answer: "They are not in Astana.",
        exact: true,
        accept: ["They are not in Astana"],
        why: "They are not in Astana. Aren't разворачивается в are not.",
      },
      {
        id: "q-najti-oshibku-v-poryadke",
        kind: "hottext",
        outcome: "строит отрицание, поставив not после формы be",
        prompt: "Отметь строки, где not стоит не на своём месте.",
        parts: [
          { text: "She not is a teacher.", selectable: true, correct: true },
          { text: " · " },
          { text: "They are not from Spain.", selectable: true },
          { text: " · " },
          { text: "I not am a driver.", selectable: true, correct: true },
          { text: " · " },
          { text: "He is not in Almaty.", selectable: true },
        ],
        why: "Not идёт после формы be: she is not, I am not. В двух строках он встал перед ней.",
      },
      {
        id: "q-sobrat-otricanie",
        kind: "order",
        outcome: "строит отрицание, поставив not после формы be",
        prompt: "Собери предложение: «Она не преподаватель».",
        items: ["teacher", "is", "She", "not", "a"],
        answer: [2, 1, 3, 4, 0],
        why: "She is not a teacher. Кто, форма be, not, дальше всё остальное.",
      },
      {
        id: "q-sopostavit-korotkie-otricaniya",
        kind: "match",
        outcome: "пишет короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Сопоставь полную запись и короткую.",
        left: ["you are not", "she is not", "I am not"],
        right: ["I'm not", "you aren't", "she isn't"],
        answer: [1, 2, 0],
        why: "You are not — you aren't, she is not — she isn't, I am not — I'm not.",
      },
      {
        id: "q-apostrof-na-meste",
        kind: "gap",
        outcome: "пишет короткие формы отрицания: isn't, aren't, I'm not",
        prompt: "Запиши коротко: they are not.",
        before: "They ",
        after: " in Rome.",
        answer: "aren't",
        why: "They aren't in Rome. Апостроф стоит ровно на месте выпавшей буквы o.",
      },
    ],
  },
};

export default module;
