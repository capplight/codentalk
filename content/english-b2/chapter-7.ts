import type { Chapter } from "@/lib/types";

const chapter7: Chapter = {
  slug: "the-big-interview",
  title: "Большое интервью",
  subtitle:
    "Эпилог: деловой журнал берёт у Алима большое интервью, а на конференции звучит вопрос, который стоит услышать каждому ученику. Читаем и слушаем на уровне B2.",
  section: "text",
  stages: [
    { icon: "📰", name: "Журнал" },
    { icon: "📄", name: "Читаем" },
    { icon: "🎤", name: "Конференция" },
    { icon: "🎧", name: "Слушаем" },
    { icon: "🏁", name: "Эпилог" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Алматы, зима. Клуб английского растёт, приложение живёт своей жизнью. Деловой журнал просит большое интервью. Журналистка приходит прямо в клуб — и потом присылает текст на согласование. Прочитай его как читатель.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "Almaty Business Magazine: «Not bad for a start»",
      note: "Текст уровня B2: здесь работают идиомы и британские преуменьшения из прошлых глав. Замечай их в живом тексте — это и есть свободное чтение.",
      text: [
        "Interviewer: Your app has a million downloads, you said no to a big investor, and you have opened a free English club in Almaty. Not bad!",
        "Alim (laughs): A very British compliment! Honestly, it hasn't been a piece of cake. We have made mistakes, we have lost sleep, and once in a blue moon we still argue about design.",
        "But when a student from a small town writes «your app has changed my life» — that is worth more than any money.",
        "Interviewer: What's next?",
        "Alim: Programming courses. If languages open doors, code builds new ones. And of course — we will never stop learning.",
      ],
      questions: [
        {
          q: "Журналистка сказала «Not bad!». Как это понимать?",
          options: [
            { t: "Это высокая похвала — британское преуменьшение", ok: true },
            { t: "Она разочарована результатами" },
            { t: "Она сомневается в цифрах" },
          ],
          why: "Not bad! — классическое understatement: чем сдержаннее слова, тем выше похвала. Алим и сам это отметил: «A very British compliment!»",
        },
        {
          q: "«It hasn't been a piece of cake» — что говорит Алим о пути?",
          options: [
            { t: "Было непросто", ok: true },
            { t: "Всё было легко" },
            { t: "Он не любит сладкое" },
          ],
          why: "A piece of cake — «проще простого», а с отрицанием: it hasn't been a piece of cake — «это было совсем не просто».",
        },
        {
          q: "Как часто друзья спорят о дизайне?",
          options: [
            { t: "Очень редко", ok: true },
            { t: "Каждый день" },
            { t: "Никогда" },
          ],
          why: "Once in a blue moon we still argue about design — «очень редко мы всё ещё спорим о дизайне». Идиома из паба с Эммой!",
        },
        {
          q: "Что для Алима дороже денег?",
          options: [
            { t: "Сообщение ученика «ваше приложение изменило мою жизнь»", ok: true },
            { t: "Миллион скачиваний" },
            { t: "Публикации в журналах" },
          ],
          why: "When a student writes «your app has changed my life» — that is worth more than any money. Worth more than — «дороже, чем».",
        },
        {
          q: "Верно или неверно: Алим жалеет, что отказал инвестору?",
          options: [{ t: "Неверно", ok: true }, { t: "Верно" }],
          why: "В тексте нет ни слова сожаления — наоборот, отказ стоит в одном ряду с достижениями. Умение читать «между строк» — это тоже B2!",
        },
      ],
    },
    {
      kind: "story",
      stage: 2,
      ru: "Весной вас снова зовут на конференцию — теперь в Алматы, уже как главных гостей. В конце выступления из зала звучит вопрос, ради которого стоило приезжать. Послушай этот момент.",
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Финальный вопрос из зала на конференции",
      note: "Финальное аудирование курса — без подстраховок: обычный темп, живые фразы. Ты готов.",
      audio: [
        "We have time for one final question.",
        "Alim, what is the secret of your English?",
        "There is no secret.",
        "I made a thousand mistakes — and I never stopped.",
        "Mistakes are not the enemy. Silence is.",
      ],
      questions: [
        {
          q: "В чём, по словам Алима, секрет его английского?",
          options: [
            { t: "Секрета нет: тысяча ошибок — и он не останавливался", ok: true },
            { t: "Дорогие курсы и репетиторы" },
            { t: "Врождённый талант к языкам" },
          ],
          why: "There is no secret. I made a thousand mistakes — and I never stopped. — «Секрета нет. Я сделал тысячу ошибок — и не останавливался».",
        },
        {
          q: "«Mistakes are not the enemy. Silence is». Что Алим называет врагом?",
          options: [
            { t: "Молчание — когда боишься говорить", ok: true },
            { t: "Ошибки в речи" },
            { t: "Сложную грамматику" },
          ],
          why: "Mistakes are not the enemy. Silence is. — «Ошибки — не враг. Враг — молчание». Не бойся ошибаться — бойся молчать.",
        },
      ],
    },
    {
      kind: "assemble",
      stage: 4,
      tag: "Последняя фраза курса",
      q: "Собери фразу, которую завтра процитируют все СМИ:",
      note: "Ты только что слышал её. Enemy — враг. Это главный урок всего пути от «Hello» до B2.",
      words: ["Mistakes", "are", "not", "the", "enemy."],
      answer: "Mistakes are not the enemy.",
      why: "Mistakes are not the enemy — «Ошибки — не враг». Ты прошёл путь от первого Hello до чтения статей и живых выступлений. Курс английского пройден ПОЛНОСТЬЮ.",
      phrase: { en: "Mistakes are not the enemy.", ru: "Ошибки — не враг." },
    },
    {
      kind: "story",
      stage: 4,
      ru: "Занавес. Пять уровней, одна история, сотни фраз в твоём разговорнике. Всё, что было у героя, — одно слово «Hello» и решение не останавливаться. У тебя теперь есть и то, и другое. Never stop learning!",
    },
  ],
  words: [
    { en: "downloads", ru: "скачивания" },
    { en: "worth more than…", ru: "дороже, чем…" },
    { en: "argue", ru: "спорить" },
    { en: "secret", ru: "секрет" },
    { en: "enemy", ru: "враг" },
    { en: "silence", ru: "молчание" },
  ],
};

export default chapter7;
