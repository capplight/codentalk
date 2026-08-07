import type { RulesSet } from "@/lib/types";

const rules: RulesSet = {
  intro:
    "Грамматический фундамент английского. Здесь собрано всё, что нужно, чтобы строить первые фразы: местоимения, глагол to be, артикли, множественное число и порядок слов. Возвращайся сюда во время квестов — правила и квесты дополняют друг друга.",
  groups: [
    {
      heading: "Местоимения и глагол «быть»",
      blocks: [
        {
          id: "pronouns",
          title: "Личные местоимения",
          summary: "Слова, которые заменяют имя: I — я, you — ты/вы, he — он, she — она, it — оно, we — мы, they — они.",
          body: [
            "Личные местоимения ставятся вместо человека или предмета, чтобы не повторять его название. В английском они обязательны: предложение почти всегда начинается с того, КТО действует.",
            "Отдельно запомни it — «оно». По-английски все предметы, животные (в общем случае) и погода — это it: a book → it, a dog → it, London → it.",
          ],
          table: {
            head: ["Английский", "Русский"],
            rows: [
              ["I", "я (всегда с большой буквы!)"],
              ["you", "ты, вы"],
              ["he", "он (о мужчине)"],
              ["she", "она (о женщине)"],
              ["it", "оно (о предмете, животном, погоде)"],
              ["we", "мы"],
              ["they", "они"],
            ],
          },
          examples: [
            { en: "I am a student.", ru: "Я студент." },
            { en: "She is my sister.", ru: "Она моя сестра." },
            { en: "It is a nice city.", ru: "Это красивый город." },
          ],
          mistakes: [
            { wrong: "i am here.", right: "I am here.", note: "«I» (я) всегда пишется с заглавной буквы — даже в середине предложения." },
          ],
        },
        {
          id: "to-be",
          title: "Глагол to be: am / is / are",
          summary: "Связка «быть»: I am, you/we/they are, he/she/it is. По-русски не переводится, но в английском обязательна.",
          body: [
            "To be соединяет подлежащее с тем, кто/какой оно есть. По-русски мы говорим «Я студент» без глагола, а по-английски связка нужна всегда: I am a student.",
            "Форма зависит от местоимения — выучи три пары наизусть, это ядро всей грамматики.",
          ],
          table: {
            head: ["Местоимение", "Форма to be", "Пример"],
            rows: [
              ["I", "am", "I am ready."],
              ["he / she / it", "is", "He is tired."],
              ["you / we / they", "are", "They are here."],
            ],
          },
          examples: [
            { en: "I am from Kazakhstan.", ru: "Я из Казахстана." },
            { en: "You are my friend.", ru: "Ты мой друг." },
            { en: "The tea is hot.", ru: "Чай горячий." },
          ],
          mistakes: [
            { wrong: "I is tired.", right: "I am tired.", note: "С «I» всегда am, никогда is." },
            { wrong: "She are nice.", right: "She is nice.", note: "С he/she/it — is." },
          ],
        },
        {
          id: "to-be-negative",
          title: "Отрицание и вопрос с to be",
          summary: "Отрицание: добавь not (I am not). Вопрос: поставь am/is/are перед подлежащим (Are you ready?).",
          body: [
            "Чтобы сказать «не», ставим not после am/is/are: I am not, he is not, they are not. Часто сокращают: isn't, aren't.",
            "Чтобы задать вопрос, глагол to be «перепрыгивает» вперёд, перед подлежащее: You are ready → Are you ready?",
          ],
          examples: [
            { en: "I am not tired.", ru: "Я не устал." },
            { en: "She is not at home.", ru: "Её нет дома." },
            { en: "Are you a student?", ru: "Ты студент?" },
            { en: "Is it far?", ru: "Это далеко?" },
          ],
        },
      ],
    },
    {
      heading: "Существительные и артикли",
      blocks: [
        {
          id: "articles",
          title: "Артикли a / an",
          summary: "a / an — «один какой-то». a перед согласным звуком (a car), an перед гласным (an apple).",
          body: [
            "Артикль a/an ставится перед предметом, о котором говорим впервые, и значит «один, какой-то»: a book — (какая-то) книга.",
            "Выбор a или an зависит от ЗВУКА, а не буквы: a cat, a dog, но an apple, an hour (h не читается). Перед множественным числом артикль a/an не ставится.",
          ],
          examples: [
            { en: "I have a brother.", ru: "У меня есть брат." },
            { en: "It is an old city.", ru: "Это старый город." },
            { en: "Can I have a coffee, please?", ru: "Можно мне кофе, пожалуйста?" },
          ],
          mistakes: [
            { wrong: "I have a apple.", right: "I have an apple.", note: "Перед гласным звуком — an." },
          ],
        },
        {
          id: "plural",
          title: "Множественное число",
          summary: "Много предметов → добавь -s: book → books, friend → friends.",
          body: [
            "Чтобы сказать о нескольких предметах, к слову добавляется -s. Это самый частый способ.",
            "Если слово кончается на -s, -sh, -ch, -x, добавляем -es (bus → buses). После согласной + y меняем на -ies (city → cities). Есть особые слова-исключения, которые надо запомнить.",
          ],
          table: {
            head: ["Один", "Много", "Правило"],
            rows: [
              ["book", "books", "+ s"],
              ["bus", "buses", "+ es (после s, sh, ch, x)"],
              ["city", "cities", "y → ies"],
              ["man / woman", "men / women", "исключение"],
              ["child", "children", "исключение"],
            ],
          },
          examples: [
            { en: "I have two sisters.", ru: "У меня две сестры." },
            { en: "There are many cars.", ru: "Здесь много машин." },
          ],
        },
        {
          id: "possessive",
          title: "Притяжательные местоимения",
          summary: "Чьё это: my — мой, your — твой, his — его, her — её, our — наш, their — их.",
          body: [
            "Притяжательные местоимения показывают принадлежность и ставятся перед предметом: my name — моё имя, her book — её книга.",
            "Не путай he/she (он/она) и his/her (его/её): He is my brother. His name is Alim.",
          ],
          table: {
            head: ["Кто", "Чьё"],
            rows: [
              ["I", "my (мой)"],
              ["you", "your (твой)"],
              ["he", "his (его)"],
              ["she", "her (её)"],
              ["we", "our (наш)"],
              ["they", "their (их)"],
            ],
          },
          examples: [
            { en: "My name is Alim.", ru: "Меня зовут Алим." },
            { en: "This is her passport.", ru: "Это её паспорт." },
          ],
        },
        {
          id: "have",
          title: "Глагол have — «иметь»",
          summary: "«У меня есть» = I have. У he/she/it форма меняется на has.",
          body: [
            "Have показывает, что у тебя что-то есть. Русское «у меня есть брат» по-английски строится как «я имею брата»: I have a brother.",
            "С he/she/it форма становится has: She has a car.",
          ],
          examples: [
            { en: "I have a ticket.", ru: "У меня есть билет." },
            { en: "He has two brothers.", ru: "У него два брата." },
          ],
        },
      ],
    },
    {
      heading: "Предложение и вопросы",
      blocks: [
        {
          id: "word-order",
          title: "Порядок слов: кто → действие → что",
          summary: "Английское предложение почти всегда: подлежащее + глагол + остальное (I like tea).",
          body: [
            "В английском строгий порядок слов, потому что от него зависит смысл. Сначала КТО, потом ЧТО ДЕЛАЕТ, потом остальное: I (кто) like (действие) tea (что).",
            "В отличие от русского, нельзя переставлять слова свободно — «Tea I like» звучит неправильно.",
          ],
          examples: [
            { en: "I like this city.", ru: "Мне нравится этот город." },
            { en: "We have a big family.", ru: "У нас большая семья." },
          ],
        },
        {
          id: "question-words",
          title: "Вопросительные слова",
          summary: "What — что, Where — где, Who — кто, How — как, How old — сколько лет, How much — сколько стоит.",
          body: [
            "Вопросительные слова ставятся в начало вопроса. За ними обычно идёт глагол to be или вспомогательный глагол.",
            "How («как») образует полезные пары: How old? — сколько лет, How much? — сколько стоит/сколько (неисчисляемого), How many? — сколько (штук).",
          ],
          table: {
            head: ["Слово", "Значение", "Пример"],
            rows: [
              ["What", "что", "What is your name?"],
              ["Where", "где", "Where is the hotel?"],
              ["Who", "кто", "Who is he?"],
              ["How", "как", "How are you?"],
              ["How old", "сколько лет", "How old are you?"],
              ["How much", "сколько стоит", "How much is it?"],
            ],
          },
          examples: [
            { en: "What is your name?", ru: "Как тебя зовут?" },
            { en: "Where are you from?", ru: "Откуда ты?" },
          ],
        },
        {
          id: "politeness",
          title: "Вежливые просьбы и заказы",
          summary: "Can I have…, please? — «Можно мне…?». Can you…, please? — «Можете ли вы…?».",
          body: [
            "Волшебное слово вежливости — please. Просьбу о предмете строят через Can I have + предмет + please?, а просьбу о действии — через Can you + действие + please?",
            "Прямое «Give me tea» звучит как приказ — в английском так не заказывают.",
          ],
          examples: [
            { en: "Can I have a tea, please?", ru: "Можно мне чай, пожалуйста?" },
            { en: "Can you help me, please?", ru: "Можете мне помочь, пожалуйста?" },
          ],
          mistakes: [
            { wrong: "Give me a coffee.", right: "Can I have a coffee, please?", note: "Без can/please звучит грубо." },
          ],
        },
      ],
    },
  ],
};

export default rules;
