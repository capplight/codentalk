import type { Module } from "@/lib/content/types";

/**
 * ОБРАЗЕЦ НОВОГО BEGINNER. Модуль 2: «Я, ты, он».
 *
 * Замысел целиком — `docs/beginner-2/zamysel.md`.
 *
 * КУРС ПОДКЛЮЧЁН к `courses/index.ts` 3 сентября 2026 и потому проверяется
 * наравне с остальными. Пока он там не стоял, отчёт был чист — а первый же
 * прогон нашёл шесть ошибок: одинаковые части в задании, столбцы соответствия
 * напротив друг друга, два разбора работы слово в слово с уроком, «артикль» и
 * «апостроф» в заданиях без объяснения в материале и семнадцать ненаписанных
 * записей. Содержание, до которого нет дороги, выглядит в отчётах работающим.
 *
 * В каталоге курса при этом не видно: он недописан, и его прячет `courseCards`.
 *
 * ЧТО ЗДЕСЬ СРАВНИВАЕТСЯ С ЧЕМ. Тот же предмет, что в нынешнем модуле
 * «Приветствие» (`courses/english-starter/privetstvie.ts`), уроки 4–6:
 * местоимения и три формы `be`. Взято нарочно, чтобы разницу можно было
 * прочитать строка в строку.
 *
 * ЧЕМ ОТЛИЧАЕТСЯ УСТРОЙСТВО.
 *
 * 1. Нынешний урок «Am, is, are» даёт ВСЕ ТРИ формы за раз: одно объяснение из
 *    двух предложений, одна таблица, две врезки, один разговор. Здесь три урока,
 *    и в каждом по восемь-девять НАЗВАННЫХ СЛУЧАЕВ, у каждого случая правило
 *    одной строкой и ДВА целых примера с переводом.
 * 2. Урок начинается связным разговором, где форма встречается пять-шесть раз, и
 *    только потом идёт разбор. Приём Мёрфи.
 * 3. Задания идут лестницей: сперва узнать форму, потом произвести, потом
 *    применить к себе. Прежний вперемешку порядок уходит.
 *
 * СЧЁТ ДЛЯ СРАВНЕНИЯ. Нынешний урок `svyazka-be`: 2 строки объяснения, 4 примера
 * с переводом. Урок 1 этого модуля: 9 случаев, 20 примеров с переводом.
 *
 * КАРТИНКИ. У случая, таблицы, врезки и словарного слова стоит поле `znak` —
 * код значка Twemoji. Своё рисование прекращено по слову владельца («сделанные
 * тобой картинки плохие»), библиотеки и лицензии разобраны в
 * `docs/beginner-2/kartinki-otkuda.md`. Файлы забирает `npm run znachki`.
 *
 * ЧЕГО ЗДЕСЬ НЕТ И ПОЧЕМУ. Нового вида задания `bank` (восстановить письмо
 * из словаря-подсказки) нет — он требует правки `lib/content/types.ts`, а трогать
 * общий код ради образца нельзя. Уроков чтения, слушания и письма нет: они у
 * модуля будут, но показывают они не то, ради чего образец затевался.
 *
 * ИСТОЧНИКИ СОСТАВА — прежние, менять их незачем: English Grammar Profile, A1,
 * `VERBS be`, «FORM: PRESENT SIMPLE AFFIRMATIVE» и `PRONOUNS personal subject`.
 * Устройство объяснения взято из `materials/russkie-obyasneniya/` — это форма, а
 * не сведения о языке.
 */
const modul: Module = {
  slug: "kto-eto",
  title: "Я, ты, он",
  znak: "1f465",

  sources: [
    {
      ref: "English Grammar Profile",
      section:
        "A1, VERBS be, «FORM: PRESENT SIMPLE AFFIRMATIVE»: «Can use the present " +
        "simple form of 'be' with a subject pronoun». " +
        "A1, PRONOUNS personal subject: «Can use the subject pronouns I, you, he, " +
        "she, it, we, they»",
      license: "внутреннее использование, публично не называем",
    },
    {
      ref: "Устройство объяснения",
      section:
        "materials/russkie-obyasneniya/ — 673 страницы четырёх русских " +
        "источников. Взято ТОЛЬКО устройство: дробление темы на названные " +
        "случаи, правило одной строкой, два примера с переводом у каждого " +
        "случая. Ни одного утверждения о языке отсюда не взято",
      license: "чужой текст, в репозиторий не попадает",
    },
  ],

  outcomes: [
    "говорить о себе через I am: имя, занятие, место, состояние",
    "выбирать are для you, we, they и для двух имён",
    "выбирать is для he, she, it и для одного имени",
  ],

  lessons: [
    // =====================================================================
    {
      slug: "ya-eto-i-am",
      title: "Я — это I am",
      estimatedMinutes: 25,
      outcome: "говорить о себе через I am: имя, занятие, место, состояние",

      blocks: [
        {
          // НАЧАЛО — СВЯЗНЫЙ РАЗГОВОР, А НЕ ПРАВИЛО. Форма am встречается в нём
          // четыре раза, и ученик видит вещь целиком раньше, чем её разбор.
          id: "razgovor-snachala",

          znak: "1f44b",
          kind: "example",
          caption: "Знакомство в первый день",
          razgovor: true,
          text:
            "— Hello! I am Alim.\n— Hi! I am Dana.\n— I am a student. And you?\n" +
            "— I am a teacher. I am from Almaty.",
          perevod: {
            "— Hello! I am Alim.": "Здравствуйте! Я Алим.",
            "— Hi! I am Dana.": "Привет! Я Дана.",
            "— I am a student. And you?": "Я студент. А ты?",
            "— I am a teacher. I am from Almaty.": "Я учитель. Я из Алматы.",
          },
          explain:
            "Четыре раза подряд — I am. Дальше разберём, почему после I стоит " +
            "именно am и что можно поставить после него.",
        },
        {
          id: "sluchay-1-am-tolko-s-i",

          znak: "261d",
          kind: "explain",
          text: [
            "Форма am бывает только с I. Никакое другое слово её за собой не тянет.",
            "I am Alim. — Я Алим.",
            "I am at home. — Я дома.",
          ],
        },
        {
          id: "sluchay-2-po-russki-glagola-net",

          znak: "1f504",
          kind: "explain",
          text: [
            "По-русски в таких фразах глагола нет вовсе: «я Алим», «я дома». По-английски он обязателен.",
            "I am a student. — Я студент.",
            "I am ready. — Я готов.",
          ],
        },
        {
          id: "sluchay-3-imya",

          znak: "1faaa",
          kind: "explain",
          text: [
            "После am ставят имя — своё или чужое.",
            "I am Aigul. — Я Айгуль.",
            "I am Daniyar. — Я Данияр.",
          ],
        },
        {
          id: "sluchay-4-zanyatie",

          znak: "1f9d1-200d-2695-fe0f",
          kind: "explain",
          text: [
            "После am ставят занятие, а перед занятием стоит артикль — короткое слово a, " +
              "которого в русском нет вовсе.",
            "I am a doctor. — Я врач.",
            "I am a driver. — Я водитель.",
          ],
        },
        {
          id: "sluchay-5-an-pered-glasnym",

          znak: "1f3a8",
          kind: "explain",
          text: [
            "Если занятие начинается с гласного звука, вместо a ставят an.",
            "I am an artist. — Я художник.",
            "I am an actor. — Я актёр.",
          ],
        },
        {
          id: "sluchay-6-mesto",

          znak: "1f3e2",
          kind: "explain",
          text: [
            "После am ставят место, и перед местом нужен предлог: at или in.",
            "I am at work. — Я на работе.",
            "I am in the car. — Я в машине.",
          ],
        },
        {
          id: "sluchay-7-otkuda",

          znak: "1f5fa",
          kind: "explain",
          text: [
            "Откуда человек — это from и название города или страны.",
            "I am from Astana. — Я из Астаны.",
            "I am from Kazakhstan. — Я из Казахстана.",
          ],
        },
        {
          id: "sluchay-8-sostoyanie",

          znak: "1f62a",
          kind: "explain",
          text: [
            "После am ставят и состояние: как человеку сейчас.",
            "I am fine. — У меня всё хорошо.",
            "I am tired. — Я устал.",
          ],
        },
        {
          id: "sluchay-9-korotkaya-zapis",

          znak: "2702",
          kind: "explain",
          text: [
            "В разговоре I am сокращают до I'm. Значение то же, а на месте выпавшей буквы a " +
              "стоит апостроф — знак '.",
            "I'm Alim. — Я Алим.",
            "I'm at home. — Я дома.",
          ],
        },
        {
          id: "tablica-chto-posle-am",

          znak: "1f4d0",
          kind: "table",
          caption: "Что ставят после I am",
          zvuchat: [
            "I am Alim.",
            "I am a doctor.",
            "I am at work.",
            "I am from Astana.",
            "I am tired.",
          ],
          head: ["Что называем", "Английский", "Перевод"],
          rows: [
            ["имя", "I am Alim.", "Я Алим."],
            ["занятие", "I am a doctor.", "Я врач."],
            ["место", "I am at work.", "Я на работе."],
            ["откуда", "I am from Astana.", "Я из Астаны."],
            ["состояние", "I am tired.", "Я устал."],
          ],
        },
        {
          id: "ne-propuskat-am",

          znak: "26a0",
          kind: "note",
          tone: "mistake",
          text:
            "«I student» — так не говорят.\n\nПо-русски «я студент» обходится без " +
            "глагола, по-английски между I и остальным обязательно стоит am: " +
            "I am a student.",
        },
        {
          id: "i-vsegda-zaglavnaya",

          znak: "1f524",
          kind: "note",
          tone: "info",
          text:
            "Слово I пишется с заглавной буквы всегда, а не только в начале " +
            "предложения.\n\nДругие такие слова — you, he, she — пишутся с " +
            "маленькой, если стоят не первыми.",
        },
        {
          id: "slovar-uroka",

          znak: "1f4d6",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "student", znak: "1f9d1-200d-1f393", translation: "студент", example: "I am a student.", hint: "/ˈstjuːdənt/" },
            { term: "teacher", znak: "1f9d1-200d-1f3eb", translation: "учитель", example: "I am a teacher.", hint: "/ˈtiːtʃə/" },
            { term: "doctor", znak: "1f9d1-200d-2695-fe0f", translation: "врач", example: "I am a doctor.", hint: "/ˈdɒktə/" },
            { term: "driver", znak: "1f695", translation: "водитель", example: "I am a driver.", hint: "/ˈdraɪvə/" },
            { term: "artist", znak: "1f3a8", translation: "художник", example: "I am an artist.", hint: "/ˈɑːtɪst/" },
            { term: "actor", znak: "1f3ad", translation: "актёр", example: "I am an actor.", hint: "/ˈæktə/" },
            { term: "fine", znak: "1f642", translation: "хорошо (о состоянии)", example: "I am fine.", hint: "/faɪn/" },
            { term: "tired", znak: "1f62a", translation: "усталый", example: "I am tired.", hint: "/ˈtaɪəd/" },
            { term: "ready", znak: "2705", translation: "готовый", example: "I am ready.", hint: "/ˈredi/" },
            { term: "work", znak: "1f3e2", translation: "работа", example: "I am at work.", hint: "/wɜːk/" },
          ],
        },

        // ---- ПРОВЕРЬ СЕБЯ. Лестница: узнать → произвести → применить ----
        {
          id: "u1-uznat-formu",
          kind: "choice",
          prompt: "Какая запись верна?",
          options: [
            { text: "I am a driver.", correct: true },
            { text: "I a driver." },
            { text: "I is a driver." },
          ],
          hint: "После I стоит своя форма, и она одна.",
          why: "I am a driver. Форма am бывает только с I, а без неё предложение не собирается.",
        },
        {
          id: "u2-uznat-artikl",
          kind: "choice",
          prompt: "Занятие начинается с гласного звука. Какая запись верна?",
          options: [
            { text: "I am an actor.", correct: true },
            { text: "I am a actor." },
            { text: "I am actor." },
          ],
          hint: "Перед гласным звуком короткое слово меняется.",
          why: "I am an actor. Перед гласным звуком вместо a ставят an, и совсем без него нельзя.",
        },
        {
          id: "u3-otmetit-am",
          kind: "hottext",
          prompt: "Отметь в разговоре все формы глагола be.",
          parts: [
            { text: "I " },
            { text: "am", selectable: true, correct: true },
            { text: " Dana. I " },
            { text: "am", selectable: true, correct: true },
            { text: " a teacher. I " },
            { text: "work", selectable: true },
            { text: " at school." },
          ],
          hint: "Форма be связывает, а не называет дело.",
          why: "Обе формы am. Слово work называет дело, а не связывает: это другой глагол.",
        },
        {
          id: "u4-dopisat-formu",
          kind: "gap",
          prompt: "Ты у себя дома. Допиши недостающее слово.",
          before: "I ",
          after: " at home.",
          answer: "am",
          hint: "После I форма одна.",
          why: "I am at home. Между I и местом обязательно стоит am.",
        },
        {
          id: "u5-sobrat-stroku",
          kind: "order",
          prompt: "Собери строку: ты врач.",
          items: ["a doctor", "I", "am"],
          answer: [1, 2, 0],
          hint: "Сначала тот, о ком речь, потом форма, потом занятие.",
          why: "I am a doctor. Порядок один: кто, форма be, остальное.",
        },
        {
          id: "u6-ispravit-chuzhuyu-zapis",
          kind: "short",
          prompt: "Ученик написал: I an artist. Запиши строку без ошибки.",
          answer: "I am an artist.",
          accept: ["I am an artist"],
          hint: "Пропущена форма глагола, а не артикль.",
          why: "I am an artist. Слово an на месте, а формы am не было вовсе.",
        },
        {
          id: "u7-korotkaya-zapis",
          kind: "short",
          prompt: "Запиши ту же строку коротко: I am tired.",
          answer: "I'm tired.",
          accept: ["I'm tired", "I’m tired.", "I’m tired"],
          exact: true,
          hint: "Знак ' встаёт вместо выпавшей буквы.",
          why: "I'm tired. Буква a выпадает, и на её месте стоит апостроф.",
        },
        {
          id: "u8-diktant",
          kind: "short",
          zvuk: "I am from Kazakhstan.",
          prompt: "Диктант. Послушай и запиши строку целиком.",
          answer: "I am from Kazakhstan.",
          accept: ["I am from Kazakhstan", "I'm from Kazakhstan.", "I'm from Kazakhstan"],
          hint: "Откуда человек — это from и название страны.",
          why: "I am from Kazakhstan. Короткая запись I'm тоже верна: на слух они различаются мало.",
        },
        {
          id: "u9-o-sebe",
          kind: "essay",
          prompt:
            "Напиши о себе две строки: как тебя зовут и чем ты занимаешься. " +
            "Занятие возьми из словаря урока.",
          sample: "I am Alim. I am a student.",
          minWords: 6,
          checklist: [
            "в каждой строке стоит am",
            "перед занятием стоит a или an",
            "слово I написано с заглавной буквы",
          ],
          hint: "Две строки, и каждая начинается с I am.",
          why:
            "Например: I am Alim. I am a student. Твои имя и занятие будут другими, " +
            "а устройство строки то же.",
        },
        {
          id: "u10-skazat-vsluh",
          kind: "speak",
          prompt: "Скажи вслух три строки о себе: имя, занятие, откуда ты.",
          phrase: "I am Dana. I am a teacher. I am from Almaty.",
          translation: "Я Дана. Я учитель. Я из Алматы.",
          hint: "Каждая строка начинается с I am.",
          why:
            "Например: I am Dana. I am a teacher. I am from Almaty. Имя, занятие и " +
            "город будут твои, а начало у всех трёх строк одно.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "ty-my-oni-are",
      title: "Ты, мы, они — are",
      estimatedMinutes: 20,
      outcome: "выбирать are для you, we, they и для двух имён",

      blocks: [
        {
          id: "razgovor-are",

          znak: "1f4ac",
          kind: "example",
          caption: "В первый день, продолжение",
          razgovor: true,
          text:
            "— You are a teacher, right?\n— Yes. And you are students.\n" +
            "— We are students. Dana and Alim are students too.",
          perevod: {
            "— You are a teacher, right?": "Ты учитель, верно?",
            "— Yes. And you are students.": "Да. А вы студенты.",
            "— We are students. Dana and Alim are students too.":
              "Мы студенты. Дана и Алим тоже студенты.",
          },
          explain:
            "Четыре раза are, и каждый раз перед ним разное слово: you, you, we, " +
            "два имени. Разберём, что их объединяет.",
        },
        {
          id: "are-1-you",

          znak: "1f449",
          kind: "explain",
          text: [
            "После you стоит are — и когда речь об одном человеке, и когда о нескольких.",
            "You are a doctor. — Ты врач.",
            "You are students. — Вы студенты.",
          ],
        },
        {
          id: "are-2-we",

          znak: "1f465",
          kind: "explain",
          text: [
            "После we — тоже are. We значит «мы»: говорящий и кто-то ещё.",
            "We are at home. — Мы дома.",
            "We are ready. — Мы готовы.",
          ],
        },
        {
          id: "are-3-they",

          znak: "1f9d1-200d-1f91d-200d-1f9d1",
          kind: "explain",
          text: [
            "После they — are. They значит «они», и это могут быть и люди, и вещи.",
            "They are teachers. — Они учителя.",
            "They are in the car. — Они в машине.",
          ],
        },
        {
          id: "are-4-dva-imeni",

          znak: "1faaa",
          kind: "explain",
          text: [
            "Вместо they часто стоят два имени. Форма от этого не меняется: их двое, значит are.",
            "Dana and Alim are students. — Дана и Алим студенты.",
            "Aigul and Daniyar are at work. — Айгуль и Данияр на работе.",
          ],
        },
        {
          id: "are-5-mnozhestvennoe-zanyatie",

          znak: "1f469-200d-1f3a8",
          kind: "explain",
          text: [
            "Когда людей несколько, занятие тоже ставят во множественное число, и слово a перед ним не нужно.",
            "We are drivers. — Мы водители.",
            "They are artists. — Они художники.",
          ],
        },
        {
          id: "are-6-korotkie-zapisi",

          znak: "2702",
          kind: "explain",
          text: [
            "В разговоре are сокращают: you're, we're, they're. Апостроф стоит вместо выпавшей буквы a.",
            "You're a teacher. — Ты учитель.",
            "We're at home. — Мы дома.",
          ],
        },
        {
          id: "are-7-imena-ne-sokrashchayut",

          znak: "1f6ab",
          kind: "explain",
          text: [
            "После двух имён are коротко не записывают: сокращение бывает только у местоимения.",
            "Dana and Alim are students. — Дана и Алим студенты.",
            "They're students. — Они студенты.",
          ],
        },
        {
          id: "tablica-are",

          znak: "1f4d0",
          kind: "table",
          caption: "Кому какая форма",
          zvuchat: ["You are a doctor.", "We are at home.", "They are teachers."],
          head: ["Кто", "Английский", "Перевод"],
          rows: [
            ["ты, вы", "You are a doctor.", "Ты врач."],
            ["мы", "We are at home.", "Мы дома."],
            ["они", "They are teachers.", "Они учителя."],
            ["два имени", "Dana and Alim are students.", "Дана и Алим студенты."],
          ],
        },
        {
          id: "ne-you-is",

          znak: "26a0",
          kind: "note",
          tone: "mistake",
          text:
            "«You is a teacher» — так не говорят.\n\nФорма is с you не сочетается " +
            "никогда, даже если речь об одном человеке: You are a teacher.",
        },
        {
          id: "slovar-are",

          znak: "1f4d6",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "you", znak: "1f449", translation: "ты, вы", example: "You are a doctor.", hint: "/juː/" },
            { term: "we", znak: "1f465", translation: "мы", example: "We are at home.", hint: "/wiː/" },
            { term: "they", znak: "1f9d1-200d-1f91d-200d-1f9d1", translation: "они", example: "They are teachers.", hint: "/ðeɪ/" },
            { term: "too", znak: "2795", translation: "тоже", example: "They are students too.", hint: "/tuː/" },
            { term: "right", znak: "2714", translation: "верно", example: "You are a teacher, right?", hint: "/raɪt/" },
          ],
        },

        // ---- ПРОВЕРЬ СЕБЯ ----
        {
          id: "a1-uznat",
          kind: "choice",
          prompt: "Речь об одном человеке. Какая запись верна?",
          options: [
            { text: "You are a driver.", correct: true },
            { text: "You is a driver." },
            { text: "You am a driver." },
          ],
          hint: "С you форма одна, сколько бы людей ни было.",
          why: "You are a driver. Форма is с you не сочетается никогда.",
        },
        {
          id: "a2-otmetit-are",
          kind: "hottext",
          prompt: "Отметь строки, где нужна форма are.",
          parts: [
            { text: "Dana and Alim", selectable: true, correct: true },
            { text: " · " },
            { text: "I", selectable: true },
            { text: " · " },
            { text: "we", selectable: true, correct: true },
            { text: " · " },
            { text: "they", selectable: true, correct: true },
          ],
          hint: "Одно слово из четырёх тянет за собой другую форму.",
          why: "Are нужна двум именам, we и they. У I своя форма — am.",
        },
        {
          id: "a3-dopisat",
          kind: "gap",
          prompt: "Речь о двоих. Допиши недостающее слово.",
          before: "Dana and Alim ",
          after: " at work.",
          answer: "are",
          hint: "Их двое.",
          why: "Dana and Alim are at work. Два имени — это те же «они», значит are.",
        },
        {
          id: "a4-sobrat",
          kind: "order",
          prompt: "Собери строку: мы художники.",
          items: ["artists", "We", "are"],
          answer: [1, 2, 0],
          hint: "Когда людей несколько, занятие тоже ставят во множественное число.",
          why: "We are artists. Слово a перед artists не нужно: их несколько.",
        },
        {
          id: "a5-ispravit",
          kind: "short",
          prompt: "Ученик написал: They is teachers. Запиши строку без ошибки.",
          answer: "They are teachers.",
          accept: ["They are teachers"],
          hint: "Форму выбирает слово перед ней.",
          why: "They are teachers. После they стоит are, а is бывает у одного.",
        },
        {
          id: "a6-diktant",
          kind: "short",
          zvuk: "We are students.",
          prompt: "Диктант. Послушай и запиши строку целиком.",
          answer: "We are students.",
          accept: ["We are students", "We're students.", "We're students"],
          hint: "Речь о нескольких, и занятие тоже во множественном.",
          why: "We are students. Короткая запись We're тоже верна.",
        },
        {
          id: "a7-o-svoih",
          kind: "essay",
          prompt:
            "Напиши одну строку о двух своих знакомых: назови их имена и общее занятие. " +
            "Занятие возьми из словаря.",
          sample: "Dana and Alim are students.",
          minWords: 5,
          checklist: [
            "имён два, и между ними стоит and",
            "после имён стоит are",
            "занятие стоит во множественном числе, и слова a перед ним нет",
          ],
          hint: "Два имени, потом are, потом занятие во множественном числе.",
          why:
            "Например: Dana and Alim are students. Имена будут твои, а устройство " +
            "строки то же: два имени тянут за собой are.",
        },
      ],
    },

    // =====================================================================
    {
      slug: "on-ona-ono-is",
      title: "Он, она, оно — is",
      estimatedMinutes: 20,
      outcome: "выбирать is для he, she, it и для одного имени",

      blocks: [
        {
          id: "razgovor-is",

          znak: "1f5e3",
          kind: "example",
          caption: "Кто есть кто",
          razgovor: true,
          text:
            "— Who is that?\n— That is Daniyar. He is a driver.\n" +
            "— And she is Aigul. She is a doctor.\n— The car is new.",
          perevod: {
            "— Who is that?": "Кто это?",
            "— That is Daniyar. He is a driver.": "Это Данияр. Он водитель.",
            "— And she is Aigul. She is a doctor.": "А это Айгуль. Она врач.",
            "— The car is new.": "Машина новая.",
          },
          explain:
            "Пять раз is: с who, с that, с he, со she и с машиной. Общее у них " +
            "одно — речь всякий раз об одном.",
        },
        {
          id: "is-1-he-she",

          znak: "1f468",
          kind: "explain",
          text: [
            "После he и she стоит is. He — о мужчине, she — о женщине.",
            "He is a driver. — Он водитель.",
            "She is a doctor. — Она врач.",
          ],
        },
        {
          id: "is-2-it",

          znak: "1f4e6",
          kind: "explain",
          text: [
            "После it — тоже is. Слово it ставят о предмете, а не о человеке.",
            "It is a car. — Это машина.",
            "It is new. — Оно новое.",
          ],
        },
        {
          id: "is-3-odno-imya",

          znak: "1faaa",
          kind: "explain",
          text: [
            "Вместо he и she часто стоит одно имя. Форма та же: человек один, значит is.",
            "Daniyar is a driver. — Данияр водитель.",
            "Aigul is at work. — Айгуль на работе.",
          ],
        },
        {
          id: "is-4-veshch-bez-it",

          znak: "1f697",
          kind: "explain",
          text: [
            "Вместо it может стоять название самой вещи, и форма не меняется.",
            "The car is new. — Машина новая.",
            "The house is big. — Дом большой.",
          ],
        },
        {
          id: "is-5-korotkie-zapisi",

          znak: "2702",
          kind: "explain",
          text: [
            "В разговоре is сокращают до 's: he's, she's, it's. Апостроф стоит вместо выпавшей буквы i.",
            "He's a driver. — Он водитель.",
            "It's new. — Оно новое.",
          ],
        },
        {
          id: "is-6-imya-tozhe-sokrashchayut",

          znak: "1f4dd",
          kind: "explain",
          text: [
            "С одним именем короткую запись тоже делают — в отличие от двух имён.",
            "Daniyar's at work. — Данияр на работе.",
            "Aigul's a doctor. — Айгуль врач.",
          ],
        },
        {
          id: "is-7-pogoda",

          znak: "2744",
          kind: "explain",
          text: [
            "О погоде и о времени говорят через it, хотя по-русски никакого «оно» там нет.",
            "It is cold. — Холодно.",
            "It is Monday. — Понедельник.",
          ],
        },
        {
          id: "tablica-is",

          znak: "1f4d0",
          kind: "table",
          caption: "Кому и чему нужна is",
          zvuchat: ["He is a driver.", "She is a doctor.", "It is a car.", "The house is big."],
          head: ["Кто или что", "Английский", "Перевод"],
          rows: [
            ["он", "He is a driver.", "Он водитель."],
            ["она", "She is a doctor.", "Она врач."],
            ["предмет", "It is a car.", "Это машина."],
            ["одно имя", "Daniyar is a driver.", "Данияр водитель."],
            ["название вещи", "The house is big.", "Дом большой."],
          ],
        },
        {
          id: "svod-treh-form",

          znak: "1f9e9",
          kind: "table",
          caption: "Все три формы разом",
          zvuchat: ["I am a student.", "You are a student.", "He is a student."],
          head: ["Кто", "Форма", "Пример", "Перевод"],
          rows: [
            ["I", "am", "I am a student.", "Я студент."],
            ["you, we, they", "are", "You are a student.", "Ты студент."],
            ["he, she, it", "is", "He is a student.", "Он студент."],
          ],
        },
        {
          id: "ne-he-are",

          znak: "26a0",
          kind: "note",
          tone: "mistake",
          text:
            "«He are a driver» — так не говорят.\n\nФорма are бывает у нескольких, " +
            "а he — это один человек: He is a driver.",
        },
        {
          id: "slovar-is",

          znak: "1f4d6",
          kind: "vocab",
          caption: "Слова урока",
          items: [
            { term: "he", znak: "1f468", translation: "он", example: "He is a driver.", hint: "/hiː/" },
            { term: "she", znak: "1f469", translation: "она", example: "She is a doctor.", hint: "/ʃiː/" },
            { term: "it", znak: "1f4e6", translation: "оно (о предмете)", example: "It is a car.", hint: "/ɪt/" },
            { term: "car", znak: "1f697", translation: "машина", example: "The car is new.", hint: "/kɑː/" },
            { term: "house", znak: "1f3e0", translation: "дом", example: "The house is big.", hint: "/haʊs/" },
            { term: "new", znak: "2728", translation: "новый", example: "The car is new.", hint: "/njuː/" },
            { term: "big", znak: "1f418", translation: "большой", example: "The house is big.", hint: "/bɪg/" },
            { term: "cold", znak: "2744", translation: "холодный, холодно", example: "It is cold.", hint: "/kəʊld/" },
          ],
        },

        // ---- ПРОВЕРЬ СЕБЯ ----
        {
          id: "i1-uznat",
          kind: "choice",
          prompt: "Речь об одном человеке. Какая запись верна?",
          options: [
            // Занятие взято не то, что стоит в примерах выше: иначе верную
            // строку находят глазами по странице, а не разбирая язык.
            { text: "He is an actor.", correct: true },
            { text: "He are an actor." },
            { text: "He am an actor." },
          ],
          hint: "Форма are бывает у нескольких.",
          why: "He is an actor. Он один, и потому is.",
        },
        {
          id: "i2-otmetit-is",
          kind: "hottext",
          prompt: "Отметь слова, после которых нужна форма is.",
          parts: [
            { text: "he", selectable: true, correct: true },
            { text: " · " },
            { text: "they", selectable: true },
            { text: " · " },
            { text: "the car", selectable: true, correct: true },
            { text: " · " },
            { text: "we", selectable: true },
          ],
          hint: "Считай, об одном речь или о нескольких.",
          why: "Is нужна he и the car: там речь об одном. They и we — о нескольких.",
        },
        {
          id: "i3-dopisat",
          kind: "gap",
          prompt: "Речь о машине. Допиши недостающее слово.",
          before: "The car ",
          after: " new.",
          answer: "is",
          hint: "Машина одна.",
          why: "The car is new. Название вещи ведёт себя как it: речь об одном.",
        },
        {
          id: "i4-sopostavit",
          kind: "match",
          prompt: "Соедини слово и нужную ему форму.",
          left: ["I", "we", "she"],
          // Столбцы нарочно не совпадают по порядку: иначе задание решается
          // выбором первого пункта в каждом списке, не читая слов.
          right: ["is", "am", "are"],
          answer: [1, 2, 0],
          hint: "У I форма своя и только своя.",
          why: "I — am, we — are, she — is. Форму выбирает слово, стоящее перед ней.",
        },
        {
          id: "i5-ispravit",
          kind: "short",
          prompt: "Ученик написал: She are a doctor. Запиши строку без ошибки.",
          answer: "She is a doctor.",
          accept: ["She is a doctor"],
          hint: "Она одна.",
          why: "She is a doctor. После she стоит is, а are бывает у нескольких.",
        },
        {
          id: "i6-diktant",
          kind: "short",
          zvuk: "The house is big.",
          prompt: "Диктант. Послушай и запиши строку целиком.",
          answer: "The house is big.",
          accept: ["The house is big"],
          hint: "Речь о доме, и он один.",
          why: "The house is big. Название вещи тянет за собой is.",
        },
        {
          id: "i7-o-znakomom",
          kind: "essay",
          prompt:
            "Напиши две строки об одном своём знакомом: назови имя и занятие. " +
            "Занятие возьми из словаря.",
          sample: "That is Daniyar. He is a driver.",
          minWords: 6,
          checklist: [
            "в обеих строках стоит is",
            "перед занятием стоит a или an",
            "во второй строке вместо имени стоит he или she",
          ],
          hint: "Человек один, значит форма во всех строках одна.",
          why:
            "Например: That is Daniyar. He is a driver. Имя будет твоё, а форма та " +
            "же: об одном человеке говорят через is.",
        },
      ],
    },
  ],

  quiz: {
    ask: 6,
    passRatio: 0.8,
    questions: [
      {
        id: "kto-eto-forma-pri-i",
        // Урок спрашивал то же самое пропуском («Ты у себя дома. Допиши
        // недостающее слово»). Замена места близнеца не снимает — снимает
        // смена того, что ученик ДЕЛАЕТ: здесь он не вписывает форму, а
        // называет причину чужой ошибки.
        kind: "choice",
        outcome: "говорить о себе через I am: имя, занятие, место, состояние",
        prompt: "Ученик написал: I at work. Что в записи не так?",
        options: [
          { text: "Пропущена форма am.", correct: true },
          { text: "Пропущен артикль a." },
          { text: "Слово work здесь лишнее." },
        ],
        why:
          "I am at work. По-русски «я на работе» обходится без глагола, " +
          "по-английски am обязателен.",
      },
      {
        id: "kto-eto-ispravit-you",
        kind: "short",
        outcome: "выбирать are для you, we, they и для двух имён",
        prompt: "Ученик написал: You is at home. Запиши строку без ошибки.",
        answer: "You are at home.",
        accept: ["You are at home"],
        why: "You are at home. С you форма одна — are, сколько бы людей ни было.",
      },
      {
        id: "kto-eto-dva-imeni",
        // Урок давал выбор из трёх записей — работа требует записать строку
        // самому. Узнавание среди трёх кнопок и запись с нуля показывают
        // разное.
        kind: "short",
        outcome: "выбирать are для you, we, they и для двух имён",
        prompt: "Айгуль и Данияр — врачи. Запиши эту строку по-английски.",
        answer: "Aigul and Daniyar are doctors.",
        accept: ["Aigul and Daniyar are doctors"],
        why:
          "Aigul and Daniyar are doctors. Людей двое, а формы is и am бывают " +
          "только там, где речь об одном.",
      },
      {
        id: "kto-eto-veshch",
        // Урок спрашивал форму пропуском («Речь о машине. Допиши недостающее
        // слово»). Здесь ученик судит три готовые строки и ищет неверную —
        // другое дело, хотя правило то же.
        kind: "choice",
        outcome: "выбирать is для he, she, it и для одного имени",
        prompt: "В какой строке ошибка?",
        options: [
          { text: "The car is new." },
          { text: "She is at home." },
          { text: "The house are big.", correct: true },
        ],
        why: "The house are big. Дом один, и форма у него та же, что у he и she: is.",
      },
      {
        id: "kto-eto-na-sluh",
        kind: "short",
        outcome: "говорить о себе через I am: имя, занятие, место, состояние",
        zvuk: "I am from Astana.",
        prompt: "Послушай. Откуда человек? Ответь одним английским словом.",
        answer: "Astana",
        accept: ["astana", "from Astana"],
        why: "I am from Astana. Откуда человек — это from и название города.",
      },
      {
        id: "kto-eto-sobrat",
        kind: "order",
        outcome: "выбирать is для he, she, it и для одного имени",
        // Строка взята не из материала: «She is a doctor» напечатана в модуле
        // пять раз, и такой ответ собирают по памяти картинки, а не по правилу.
        prompt: "Собери строку: он актёр.",
        items: ["an actor", "He", "is"],
        answer: [1, 2, 0],
        why: "He is an actor. Сначала тот, о ком речь, потом форма be, потом занятие.",
      },
    ],
  },
};

export default modul;
