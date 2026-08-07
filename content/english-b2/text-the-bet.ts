import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-the-bet",
  title: "Пари (по Антону Чехову)",
  subtitle:
    "Банкир и юрист заключают безумное пари: пятнадцать лет добровольного заточения против двух миллионов. Чехов по-английски — уровень B2.",
  section: "text",
  stages: [
    { icon: "📚", name: "Классика" },
    { icon: "⚖️", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "«Пари» (1889) Чехова обошло весь мир в переводе Констанс Гарнетт — и вошло в англоязычные школьные хрестоматии. Читать русского классика по-английски — редкий и полезный опыт: сюжет знакомый, а язык — целевой.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Bet (retold)",
      note: "Banker — банкир, lawyer — юрист. Следи, как за пятнадцать лет меняются ценности героев — в этом весь Чехов.",
      text: [
        "At a party, a rich {banker|банкир} and a young {lawyer|юрист} argued about the death penalty. «Life in prison is worse than death», — said the banker.",
        "«Not true, — answered the lawyer. — Any life is better than no life. I could stay in prison fifteen years!» The banker laughed: «Two million if you do it!» The {bet|пари} was made.",
        "The lawyer lived alone in a small garden house. He could not see people, but he could ask for books. In the first years he read novels. Then — languages, philosophy, history: over six hundred books in fifteen years.",
        "The banker, meanwhile, lost most of his money. The night before the deadline he thought a terrible thing: «If I pay him, I am ruined… What if he dies before morning?»",
        "He crept into the garden house — and found a letter on the table. «I do not want your money, — the lawyer had written. — Books have shown me that everything people fight for is dust. To prove it, I will leave five minutes before the deadline — and lose the bet».",
        "And so he did. The banker locked the letter in his safe — and wept, feeling deep {shame|стыд} for himself.",
      ],
      questions: [
        {
          q: "О чём спорили банкир и юрист?",
          options: [
            { t: "Что хуже: пожизненное заключение или смертная казнь", ok: true },
            { t: "Кто из них богаче" },
            { t: "Сколько стоит свобода" },
          ],
          why: "They argued about the death penalty — банкир считал заточение хуже смерти, юрист — что любая жизнь лучше небытия.",
        },
        {
          q: "Каковы были условия пари?",
          options: [
            { t: "Пятнадцать лет добровольного заточения против двух миллионов", ok: true },
            { t: "Год молчания против одного миллиона" },
            { t: "Пять лет без книг против дома" },
          ],
          why: "«I could stay in prison fifteen years!» — «Two million if you do it!» — молодость против денег.",
        },
        {
          q: "Как юрист провёл эти годы?",
          options: [
            { t: "Прочитал более шестисот книг: языки, философию, историю", ok: true },
            { t: "Копил силы для побега" },
            { t: "Писал письма банкиру" },
          ],
          why: "Over six hundred books in fifteen years — заточение стало университетом.",
        },
        {
          q: "Что банкир задумал в последнюю ночь?",
          options: [
            { t: "Убить юриста, чтобы не платить", ok: true },
            { t: "Удвоить ставку" },
            { t: "Попросить отсрочку" },
          ],
          why: "«What if he dies before morning?» — разорённый банкир пришёл в домик с страшной мыслью. Чехов не щадит героев.",
        },
        {
          q: "Почему юрист сам отказался от выигрыша?",
          options: [
            { t: "Книги убедили его, что всё, за что борются люди, — прах", ok: true },
            { t: "Он пожалел разорённого банкира" },
            { t: "Он нашёл ошибку в условиях пари" },
          ],
          why: "«Books have shown me that everything people fight for is dust» — он вышел за пять минут до срока и сознательно проиграл.",
        },
        {
          q: "«The lawyer had written» — почему had?",
          options: [
            { t: "Письмо было написано ДО того, как банкир его нашёл", ok: true },
            { t: "Из уважения к юристу" },
            { t: "Так писали в XIX веке" },
          ],
          why: "Past Perfect: письмо появилось раньше находки. Had written — «прошлое до прошлого», уже знакомый тебе приём.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Главная мысль письма юриста",
      note: "Despise — презирать, wisdom — мудрость. Сложное аудирование — как и положено Чехову.",
      audio: [
        "You have exchanged heaven for earth.",
        "I do not want to understand you.",
        "I give up the two million, which I once dreamed of as of paradise.",
      ],
      questions: [
        {
          q: "От чего отказывается юрист?",
          options: [
            { t: "От двух миллионов, о которых когда-то мечтал как о рае", ok: true },
            { t: "От свободы" },
            { t: "От своих книг" },
          ],
          why: "I give up the two million, which I once dreamed of as of paradise — деньги перестали быть раем.",
        },
        {
          q: "«You have exchanged heaven for earth» — упрёк в чём?",
          options: [
            { t: "Люди променяли вечное (небо) на материальное (землю)", ok: true },
            { t: "Банкир продал свой дом" },
            { t: "Земля дороже неба" },
          ],
          why: "Обменяли небо на землю — духовное на вещи. Центральный упрёк письма и всего рассказа.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Мысль в разговорник",
      q: "Собери исходное утверждение юриста — то, с которого началось пари:",
      note: "Any — любая, better than — лучше, чем. Сравнение, которое стоило пятнадцати лет.",
      words: ["Any", "life", "is", "better", "than", "no", "life."],
      answer: "Any life is better than no life.",
      why: "Any life is better than no life — «Любая жизнь лучше, чем никакой». Чехов прочитан по-английски — это уровень!",
      phrase: { en: "Any life is better than no life.", ru: "Любая жизнь лучше, чем никакой." },
    },
  ],
  words: [
    { en: "banker / lawyer", ru: "банкир / юрист" },
    { en: "bet", ru: "пари, ставка" },
    { en: "prison", ru: "тюрьма, заточение" },
    { en: "deadline", ru: "крайний срок" },
    { en: "give up", ru: "отказаться" },
    { en: "shame", ru: "стыд" },
  ],
};

export default chapter;
