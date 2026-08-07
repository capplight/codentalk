import type { Course, Track } from "@/lib/types";
import starterCh1 from "./english-starter/chapter-1";
import starterCh2 from "./english-starter/chapter-2";
import starterCh3 from "./english-starter/chapter-3";
import starterCh4 from "./english-starter/chapter-4";
import starterCh5 from "./english-starter/chapter-5";
import starterExam from "./english-starter/exam";
import starterDrills from "./english-starter/drills";
import starterRules from "./english-starter/rules";
import starterUnits from "./english-starter/units";
import starterWriting from "./english-starter/writing";
import starterTextLion from "./english-starter/text-lion-mouse";
import starterTextHare from "./english-starter/text-hare-tortoise";
import starterTextWind from "./english-starter/text-wind-sun";
import starterTextAnt from "./english-starter/text-ant-dove";
import starterDrills2 from "./english-starter/drills-2";
import starterDrills3 from "./english-starter/drills-3";
import starterDrills4 from "./english-starter/drills-4";
import a1Ch1 from "./english-a1/chapter-1";
import a1Ch2 from "./english-a1/chapter-2";
import a1Ch3 from "./english-a1/chapter-3";
import a1Ch4 from "./english-a1/chapter-4";
import a1Ch5 from "./english-a1/chapter-5";
import a1Ch6 from "./english-a1/chapter-6";
import a1Ch7 from "./english-a1/chapter-7";
import a1Exam from "./english-a1/exam";
import a1Drills from "./english-a1/drills";
import a1Rules from "./english-a1/rules";
import a1Units from "./english-a1/units";
import a1Writing from "./english-a1/writing";
import a1TextMice from "./english-a1/text-two-mice";
import a1TextCrow from "./english-a1/text-crow";
import a1TextFox from "./english-a1/text-fox-grapes";
import a1TextDog from "./english-a1/text-dog-bone";
import a1Drills2 from "./english-a1/drills-2";
import a1DrillsU1 from "./english-a1/drills-u1";
import a1DrillsU2 from "./english-a1/drills-u2";
import a1DrillsU4 from "./english-a1/drills-u4";
import a1DrillsU5 from "./english-a1/drills-u5";
import a2Ch1 from "./english-a2/chapter-1";
import a2Ch2 from "./english-a2/chapter-2";
import a2Ch3 from "./english-a2/chapter-3";
import a2Ch4 from "./english-a2/chapter-4";
import a2Ch5 from "./english-a2/chapter-5";
import a2Ch6 from "./english-a2/chapter-6";
import a2Ch7 from "./english-a2/chapter-7";
import a2Exam from "./english-a2/exam";
import a2Drills from "./english-a2/drills";
import a2Rules from "./english-a2/rules";
import a2Units from "./english-a2/units";
import a2Writing from "./english-a2/writing";
import a2TextWolf from "./english-a2/text-wolf";
import a2TextGoose from "./english-a2/text-goose";
import a2TextMilkmaid from "./english-a2/text-milkmaid";
import a2TextFather from "./english-a2/text-father-sons";
import a2Drills2 from "./english-a2/drills-2";
import a2DrillsU2 from "./english-a2/drills-u2";
import a2DrillsU3 from "./english-a2/drills-u3";
import b1Ch1 from "./english-b1/chapter-1";
import b1Ch2 from "./english-b1/chapter-2";
import b1Ch3 from "./english-b1/chapter-3";
import b1Ch4 from "./english-b1/chapter-4";
import b1Ch5 from "./english-b1/chapter-5";
import b1Ch6 from "./english-b1/chapter-6";
import b1Ch7 from "./english-b1/chapter-7";
import b1Exam from "./english-b1/exam";
import b1Drills from "./english-b1/drills";
import b1Rules from "./english-b1/rules";
import b1Units from "./english-b1/units";
import b1Writing from "./english-b1/writing";
import b1TextPrince from "./english-b1/text-happy-prince";
import b1TextMagi from "./english-b1/text-magi";
import b1TextQuestions from "./english-b1/text-three-questions";
import b1TextCop from "./english-b1/text-cop-anthem";
import b1Drills2 from "./english-b1/drills-2";
import b1DrillsU2 from "./english-b1/drills-u2";
import b1DrillsU4 from "./english-b1/drills-u4";
import b1DrillsU5 from "./english-b1/drills-u5";
import b2Ch1 from "./english-b2/chapter-1";
import b2Ch2 from "./english-b2/chapter-2";
import b2Ch3 from "./english-b2/chapter-3";
import b2Ch4 from "./english-b2/chapter-4";
import b2Ch5 from "./english-b2/chapter-5";
import b2Ch6 from "./english-b2/chapter-6";
import b2Ch7 from "./english-b2/chapter-7";
import b2Exam from "./english-b2/exam";
import b2Drills from "./english-b2/drills";
import b2Rules from "./english-b2/rules";
import b2Units from "./english-b2/units";
import b2Writing from "./english-b2/writing";
import b2TextLeaf from "./english-b2/text-last-leaf";
import b2TextSherlock from "./english-b2/text-sherlock";
import b2TextBet from "./english-b2/text-the-bet";
import b2TextBoat from "./english-b2/text-three-men";
import b2Drills2 from "./english-b2/drills-2";
import b2DrillsU2 from "./english-b2/drills-u2";
import b2DrillsU3 from "./english-b2/drills-u3";
import b2DrillsU4 from "./english-b2/drills-u4";
import b2DrillsU6 from "./english-b2/drills-u6";
import c1Ch1 from "./english-c1/chapter-1";
import c1Ch2 from "./english-c1/chapter-2";
import c1Ch3 from "./english-c1/chapter-3";
import c1Ch4 from "./english-c1/chapter-4";
import c1Ch5 from "./english-c1/chapter-5";
import c1Ch6 from "./english-c1/chapter-6";
import c1Exam from "./english-c1/exam";
import c1Rules from "./english-c1/rules";
import c1Units from "./english-c1/units";
import c1Writing from "./english-c1/writing";
import c1TextNecklace from "./english-c1/text-the-necklace";
import c1TextIfPoem from "./english-c1/text-if-poem";
import c1TheProposal from "./english-c1/the-proposal";
import c1TextJumpingFrog from "./english-c1/text-jumping-frog";
import c1ThePressRelease from "./english-c1/the-press-release";
import c1DrillsU1 from "./english-c1/drills-u1";
import c1DrillsU2 from "./english-c1/drills-u2";
import c1DrillsU3 from "./english-c1/drills-u3";
import c1DrillsU4 from "./english-c1/drills-u4";
import c1DrillsU5 from "./english-c1/drills-u5";
import c1DrillsU6 from "./english-c1/drills-u6";

/**
 * Уровни английского: Starter → A1 → A2 → B1 → B2.
 * Каждый уровень — «сезон» одной сквозной истории.
 */
export const englishLevels: Course[] = [
  {
    slug: "english-starter",
    title: "Английский Starter: с абсолютного нуля",
    description:
      "Пролог истории: ты выиграл поездку в Лондон, но не знаешь ни слова. Подруга-репетитор Айдана готовит тебя к вылету — приветствие, числа, семья и чемодан.",
    level: "Starter · нулевой уровень",
    short: "Starter",
    emoji: "🐣",
    goals: [
      "здороваться, знакомиться и прощаться",
      "называть своё имя, возраст и откуда я",
      "считать до 100 и понимать числа на слух",
      "рассказывать о своей семье",
      "называть вещи, цвета и говорить «мне нужно…»",
      "читать короткую записку и понимать простое голосовое сообщение",
    ],
    chapters: [starterCh1, starterCh2, starterCh3, starterCh4, starterCh5, starterTextLion, starterTextHare, starterTextWind, starterTextAnt, starterExam, starterDrills, starterDrills2, starterDrills3, starterDrills4],
    rules: starterRules,
    units: starterUnits,
    writing: starterWriting,
  },
  {
    slug: "english-a1",
    title: "Английский A1: Сезон 1 — Лондон",
    description:
      "Неделя в Лондоне как сериал: аэропорт, музей, прогулки с новым другом Данияром, рынок Кэмден и первая победа над бытовыми проблемами — всё по-английски.",
    level: "A1 · для начинающих",
    short: "A1",
    emoji: "🇬🇧",
    goals: [
      "объясняться в аэропорту, такси и отеле",
      "делать заказ в кафе и спрашивать цену",
      "спрашивать дорогу и понимать ответ",
      "рассказывать о своих привычках и о том, что происходит сейчас",
      "вежливо просить о помощи и сообщать о проблеме",
      "читать открытку и понимать объявления на слух",
    ],
    chapters: [a1Ch1, a1Ch2, a1Ch3, a1Ch4, a1Ch5, a1Ch6, a1Ch7, a1TextMice, a1TextCrow, a1TextFox, a1TextDog, a1Exam, a1Drills, a1Drills2, a1DrillsU1, a1DrillsU2, a1DrillsU4, a1DrillsU5],
    rules: a1Rules,
    units: a1Units,
    writing: a1Writing,
  },
  {
    slug: "english-a2",
    title: "Английский A2: Сезон 2 — Возвращение",
    description:
      "Год спустя герой возвращается в Лондон на стажировку. Прошедшее время, планы, сравнения, врач, собеседование — и путешествие в Эдинбург в финале.",
    level: "A2 · после A1",
    short: "A2",
    emoji: "🗺️",
    goals: [
      "рассказывать о прошлом: что было, куда ходил, что делал",
      "говорить о планах и обещаниях (going to и will)",
      "сравнивать вещи: дешевле, больше, самый лучший",
      "давать советы и говорить об обязанностях",
      "объясняться у врача и снимать жильё",
      "читать деловое письмо и понимать голосовое сообщение",
    ],
    chapters: [a2Ch1, a2Ch2, a2Ch3, a2Ch4, a2Ch5, a2Ch6, a2Ch7, a2TextWolf, a2TextGoose, a2TextMilkmaid, a2TextFather, a2Exam, a2Drills, a2Drills2, a2DrillsU2, a2DrillsU3],
    rules: a2Rules,
    units: a2Units,
    writing: a2Writing,
  },
  {
    slug: "english-b1",
    title: "Английский B1: Сезон 3 — Своя жизнь в Лондоне",
    description:
      "Герой переезжает насовсем: команда со всего мира, деловые звонки, большая идея с Данияром и работа мечты. Уровень уверенного общения.",
    level: "B1 · средний",
    short: "B1",
    emoji: "🎓",
    goals: [
      "рассказывать о своём опыте (Present Perfect)",
      "высказывать мнение и вежливо не соглашаться",
      "вести деловой телефонный разговор",
      "писать деловое письмо по всем правилам",
      "строить условия: «если…, то…» и «на твоём месте я бы…»",
      "проходить собеседование и читать статьи",
    ],
    chapters: [b1Ch1, b1Ch2, b1Ch3, b1Ch4, b1Ch5, b1Ch6, b1Ch7, b1TextPrince, b1TextMagi, b1TextQuestions, b1TextCop, b1Exam, b1Drills, b1Drills2, b1DrillsU2, b1DrillsU4, b1DrillsU5],
    rules: b1Rules,
    units: b1Units,
    writing: b1Writing,
  },
  {
    slug: "english-b2",
    title: "Английский B2: Сезон 4 — Финал",
    description:
      "Финал большой истории: все времена в живой речи, идиомы, выступление на конференции, переговоры с инвестором, британский юмор — и возвращение домой, где всё началось.",
    level: "B2 · выше среднего",
    short: "B2",
    emoji: "🏆",
    goals: [
      "свободно выбирать время в живой речи",
      "понимать и использовать идиомы",
      "выступать с презентацией и отвечать на вопросы",
      "вести переговоры и вежливо отказывать",
      "различать британские преуменьшения и иронию",
      "читать художественную литературу и понимать речь в обычном темпе",
    ],
    chapters: [b2Ch1, b2Ch2, b2Ch3, b2Ch4, b2Ch5, b2Ch6, b2Ch7, b2TextLeaf, b2TextSherlock, b2TextBet, b2TextBoat, b2Exam, b2Drills, b2Drills2, b2DrillsU2, b2DrillsU3, b2DrillsU4, b2DrillsU6],
    rules: b2Rules,
    units: b2Units,
    writing: b2Writing,
  },
  {
    slug: "english-c1",
    title: "Английский C1: Сезон 5 — На международной сцене",
    description:
      "Приложение скачали миллион раз. Теперь Алима зовут выступать на конференциях, давать интервью иностранной прессе и вести переговоры о партнёрстве — почти свободное владение языком, где важны не новые слова, а тонкости.",
    level: "C1 · почти свободное владение",
    short: "C1",
    emoji: "🌍",
    goals: [
      "строить смешанные условные и предполагать о прошлом",
      "расставлять акценты через эмфазу и инверсию",
      "писать и говорить в официальном, деловом регистре",
      "понимать живую речь носителей: фразовые глаголы, эллипсис",
      "сокращать фразы через причастные обороты",
      "произносить убедительную речь с риторическими приёмами",
    ],
    chapters: [
      c1Ch1,
      c1Ch2,
      c1Ch3,
      c1Ch4,
      c1Ch5,
      c1Ch6,
      c1TextNecklace,
      c1TextIfPoem,
      c1TheProposal,
      c1TextJumpingFrog,
      c1ThePressRelease,
      c1Exam,
      c1DrillsU1,
      c1DrillsU2,
      c1DrillsU3,
      c1DrillsU4,
      c1DrillsU5,
      c1DrillsU6,
    ],
    rules: c1Rules,
    units: c1Units,
    writing: c1Writing,
  },
];

/** Направления обучения — верхний уровень каталога (карточки на главной). */
export const tracks: Track[] = [
  {
    slug: "english",
    title: "Английский",
    tagline: "Одна история от «Hello» до свободной речи",
    description:
      "Шесть уровней-сезонов как единый сериал: от первого слова до международных выступлений и деловых переговоров. Истории-квесты, чтение, аудирование и экзамен на каждом уровне.",
    emoji: "🇬🇧",
    levels: englishLevels,
    placement: {
      title: "С какого уровня начать английский?",
      lead: "20 коротких вопросов — от самых простых к сложным. Отвечай честно и не подглядывай: тест нужен, чтобы подобрать подходящий старт, а не поставить оценку.",
      cta: "🎯 Не знаешь, с чего начать? Пройди тест уровня",
    },
  },
  {
    slug: "python",
    title: "Python: код-квесты",
    tagline: "Программирование в том же формате историй",
    description:
      "Тот же подход, но про код: чини программы и пиши маленькие скрипты, чтобы герой прошёл дальше. Без сухой теории — только живые задачи.",
    emoji: "🐍",
    comingSoon: true,
    levels: [],
    syllabus: [
      "Первая программа: print и переменные",
      "Числа, строки и ввод пользователя",
      "Условия: if / else",
      "Циклы: for и while",
      "Списки и словари",
      "Свои функции",
    ],
  },
  {
    slug: "kazakh",
    title: "Казахский",
    tagline: "Живой язык, а не таблицы окончаний",
    description:
      "Тот же метод историй, но про ситуации, которые случаются каждый день: разговор с семьёй, город, работа, поход в поликлинику. Начинаем с речи, грамматику подкладываем под неё.",
    emoji: "🇰🇿",
    comingSoon: true,
    levels: [],
    syllabus: [
      "Первые слова и знакомство",
      "Семья и дом",
      "Город: транспорт, магазины, кафе",
      "Работа и учёба",
      "Праздники и традиции",
      "Официальные ситуации: банк, ЦОН, поликлиника",
    ],
  },
  {
    slug: "web",
    title: "Веб-разработка",
    tagline: "Первый сайт, собранный своими руками",
    description:
      "HTML, CSS и JavaScript через задачи: собери страницу, оживи кнопку, почини сломанную вёрстку. Каждый юнит заканчивается тем, что уже можно показать друзьям.",
    emoji: "💻",
    comingSoon: true,
    levels: [],
    syllabus: [
      "HTML: скелет страницы",
      "CSS: цвет, шрифт, отступы",
      "Вёрстка: как расставить блоки",
      "JavaScript: первая живая кнопка",
      "Формы и проверка того, что ввёл человек",
      "Свой проект в интернете",
    ],
  },
];

/** Все играбельные курсы всех направлений (для роутинга и прогресса). */
export const courses: Course[] = tracks.flatMap((t) => t.levels);

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

/** Направление, которому принадлежит уровень. */
export function getTrackOfCourse(courseSlug: string): Track | undefined {
  return tracks.find((t) => t.levels.some((c) => c.slug === courseSlug));
}

/** Юнит уровня вместе с соседями — для навигации «предыдущий / следующий». */
export function getUnit(courseSlug: string, unitSlug: string) {
  const course = getCourse(courseSlug);
  const units = course?.units ?? [];
  const index = units.findIndex((u) => u.slug === unitSlug);
  if (!course || index === -1) return undefined;
  return {
    course,
    unit: units[index],
    number: index + 1,
    total: units.length,
    prev: units[index - 1],
    next: units[index + 1],
  };
}

export function getChapter(courseSlug: string, chapterSlug: string) {
  const course = getCourse(courseSlug);
  const chapter = course?.chapters.find((ch) => ch.slug === chapterSlug);
  if (!course || !chapter) return undefined;
  // «следующая глава» ищется внутри того же раздела (квесты / тексты / упражнения)
  const section = chapter.section ?? "quest";
  const sectionChapters = course.chapters.filter((ch) => (ch.section ?? "quest") === section);
  const index = sectionChapters.indexOf(chapter);
  const isLast = index === sectionChapters.length - 1;
  const track = getTrackOfCourse(courseSlug);
  // мостик на следующий уровень — только из сюжетной ветки (после экзамена)
  const levelIndex = track ? track.levels.indexOf(course) : -1;
  const nextCourse =
    section === "quest" && isLast && track && levelIndex >= 0 && levelIndex + 1 < track.levels.length
      ? track.levels[levelIndex + 1]
      : undefined;
  return {
    course,
    chapter,
    track,
    next: sectionChapters[index + 1],
    nextCourse,
    number: index + 1,
  };
}
