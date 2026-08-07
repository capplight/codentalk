import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  slug: "text-father-and-sons",
  title: "Отец и сыновья (по Эзопу)",
  subtitle:
    "Басня о пучке прутьев, который невозможно сломать. История о силе единства — в прошедшем времени, как раз для уровня A2.",
  section: "text",
  stages: [
    { icon: "📚", name: "Басня" },
    { icon: "👨‍👦‍👦", name: "Читаем" },
    { icon: "❓", name: "Вопросы" },
    { icon: "🎧", name: "Мораль" },
    { icon: "⭐", name: "Готово" },
  ],
  steps: [
    {
      kind: "story",
      stage: 0,
      ru: "Эту басню рассказывают детям во всех странах мира — где-то с прутьями, где-то со стрелами или карандашами. Суть одна: вместе мы сильнее. Читай в Past Simple и лови неправильные глаголы.",
    },
    {
      kind: "reading",
      stage: 1,
      tag: "Чтение",
      title: "The Father and His Sons",
      note: "Sticks — прутья, палки. Текст в прошедшем времени: следи за gave, took, broke, could.",
      text: [
        "An old father had three sons. The sons {argued|ссорились} every day, and it made the father sad.",
        "One day he called them and gave them a {bundle|пучок} of {sticks|прутья}.",
        "«Break it», — he said. The first son tried. The second tried. The third tried. Nobody could break the bundle.",
        "Then the father untied the bundle and gave each son one stick. «Now try again».",
        "Crack! Crack! Crack! Each son broke his stick easily.",
        "«You see, — said the father. — Together you are strong like the bundle. Alone you are weak like one stick»." ,
      ],
      questions: [
        {
          q: "Почему отец был печален?",
          options: [
            { t: "Сыновья ссорились каждый день", ok: true },
            { t: "Сыновья уехали из дома" },
            { t: "У него не было дров" },
          ],
          why: "The sons argued every day, and it made the father sad — ежедневные ссоры сыновей огорчали отца.",
        },
        {
          q: "Что случилось, когда сыновья ломали ЦЕЛЫЙ пучок?",
          options: [
            { t: "Никто не смог его сломать", ok: true },
            { t: "Сломал только старший" },
            { t: "Пучок сломали все трое вместе" },
          ],
          why: "Nobody could break the bundle — «Никто не смог сломать пучок». Could — прошлое от can.",
        },
        {
          q: "А что случилось с прутьями поодиночке?",
          options: [
            { t: "Каждый сын легко сломал свой прут", ok: true },
            { t: "Они тоже не сломались" },
            { t: "Отец забрал их обратно" },
          ],
          why: "Each son broke his stick easily — «Каждый сын легко сломал свой прут». Break → broke.",
        },
        {
          q: "Что отец хотел показать сыновьям?",
          options: [
            { t: "Вместе они сильны, поодиночке — слабы", ok: true },
            { t: "Ломать прутья — плохая привычка" },
            { t: "Старший сын сильнее младших" },
          ],
          why: "Together you are strong like the bundle. Alone you are weak like one stick — урок не про прутья, а про семью.",
        },
      ],
    },
    {
      kind: "listening",
      stage: 3,
      tag: "Аудирование",
      intro: "Мораль басни",
      note: "United — объединённые, divided — разделённые. Торжественная формула — её цитируют политики и тренеры.",
      audio: ["United we stand, divided we fall."],
      questions: [
        {
          q: "Как звучит мораль?",
          options: [
            { t: "«Вместе мы стоим, порознь — падаем»", ok: true },
            { t: "«Один в поле не воин, но и семеро одного не ждут»" },
            { t: "«Сила есть — ума не надо»" },
          ],
          why: "United we stand, divided we fall — «Едины — стоим, разделены — падаем». Девиз, рождённый этой басней.",
        },
      ],
    },
    {
      kind: "fill",
      stage: 4,
      tag: "Грамматика в тексте",
      qBefore: "Nobody ",
      qAfter: " break the bundle.",
      hintRu: "Никто не смог сломать пучок. (can — но в прошлом!)",
      note: "Прошлое от can — could. Nobody could — «никто не смог».",
      answer: "could",
      why: "Nobody could break the bundle — «Никто не смог сломать пучок». Can → could — ещё одна пара в коллекцию.",
    },
  ],
  words: [
    { en: "argue", ru: "ссориться, спорить" },
    { en: "bundle / sticks", ru: "пучок / прутья" },
    { en: "break → broke", ru: "ломать → сломал" },
    { en: "can → could", ru: "мочь → смог" },
    { en: "together / alone", ru: "вместе / поодиночке" },
    { en: "strong / weak", ru: "сильный / слабый" },
  ],
};

export default chapter;
