import Link from "next/link";
import { courseCards, type CourseCard } from "@/courses";
import { kursyVNapravleniyah, napravleniya } from "@/courses/napravleniya";
import { withCount } from "@/lib/plural";
import CourseArt from "@/components/CourseArt";
import styles from "./page.module.css";

/**
 * Витрина для гостя.
 *
 * Вид намеренно узнаваемый — белый лист, синий акцент, поиск, карточная сетка.
 * Аудитория взрослая, часто меняющая профессию, и знакомая форма работает на
 * доверие сильнее, чем оригинальность: человек понимает, где он и что делать,
 * ещё не прочитав заголовок.
 */
/**
 * Обложка карточки: флаг у языка, значок у программирования.
 *
 * Рисунки живут в components/CourseArt.tsx — там же записано, почему они
 * нарисованы своими руками, а не взяты эмодзи или готовым набором.
 */
type Cover = { art: string; kind: "lang" | "code" };

const COVERS: Record<string, Cover> = {
  "english-starter": { art: "en", kind: "lang" },
  "web-vvedenie": { art: "web", kind: "code" },
};

/**
 * Направления, о которых сказано на витрине, но содержания по ним ещё нет.
 *
 * Девять языков — это план владельца, записанный в
 * docs/sources-learning-materials.md: под все девять уже найдена законная
 * основа (курсы государственных школ США в общественном достоянии).
 *
 * Карточка без ссылки — обещание, за которым пока ничего нет. Поэтому они
 * стоят отдельной, более скромной сеткой, а не вперемешку с готовым.
 */
const PLANNED: Array<{ title: string; cover: Cover }> = [
  { title: "Французский", cover: { art: "fr", kind: "lang" } },
  { title: "Испанский", cover: { art: "es", kind: "lang" } },
  { title: "Немецкий", cover: { art: "de", kind: "lang" } },
  { title: "Итальянский", cover: { art: "it", kind: "lang" } },
  { title: "Турецкий", cover: { art: "tr", kind: "lang" } },
  { title: "Арабский", cover: { art: "ar", kind: "lang" } },
  { title: "Китайский", cover: { art: "cn", kind: "lang" } },
  { title: "Японский", cover: { art: "jp", kind: "lang" } },
  { title: "Корейский", cover: { art: "kr", kind: "lang" } },
  { title: "Python", cover: { art: "python", kind: "code" } },
];

/**
 * Карточка витрины. Их две породы, и выглядят они одинаково нарочно.
 *
 * Направление ведёт к ступеням («Английский» → Beginner, Elementary), курс —
 * прямо к урокам. Человеку на витрине эта разница не нужна: он выбирает, чему
 * учиться, а не как у нас разложено содержание.
 */
interface VitrinaCard {
  href: string;
  title: string;
  tagline: string;
  art: string;
  kind: "lang" | "code";
  meta: string;
  free: boolean;
}

export default function HomePage() {
  const cards: CourseCard[] = courseCards();
  const lessons = cards.reduce((sum, card) => sum + card.lessons, 0);
  const hours = Math.max(1, Math.round(cards.reduce((s, c) => s + c.minutes, 0) / 60));

  const poSlug = new Map(cards.map((card) => [card.slug, card]));
  const vNapravleniyah = kursyVNapravleniyah();

  const vitrina: VitrinaCard[] = [
    ...napravleniya.map((napravlenie) => {
      const otkrytye = napravlenie.stupeni
        .map((stupen) => (stupen.course ? poSlug.get(stupen.course) : undefined))
        .filter((card): card is CourseCard => card !== undefined);
      const urokov = otkrytye.reduce((sum, card) => sum + card.lessons, 0);
      return {
        href: `/napravlenie/${napravlenie.slug}`,
        title: napravlenie.title,
        tagline: napravlenie.tagline,
        art: napravlenie.art,
        kind: "lang" as const,
        meta: `${withCount(napravlenie.stupeni.length, "ступень", "ступени", "ступеней")} · ${withCount(urokov, "урок", "урока", "уроков")} открыто`,
        free: otkrytye.every((card) => card.access === "free"),
      };
    }),
    // Курсы, которые ни в какое направление не входят, стоят сами по себе.
    ...cards
      .filter((card) => !vNapravleniyah.has(card.slug))
      .map((card) => ({
        href: `/learn/${card.slug}`,
        title: card.title,
        tagline: card.tagline ?? "",
        art: COVERS[card.slug]?.art ?? "",
        kind: COVERS[card.slug]?.kind ?? ("code" as const),
        meta: `${withCount(card.lessons, "урок", "урока", "уроков")}${card.hasExam ? " · с экзаменом" : ""}`,
        free: card.access === "free",
      })),
  ];

  return (
    <main>
      <div className="wrap-wide">
        <section className={styles.hero}>
          <div className={styles.heroCol}>
            <span className={styles.eyebrow}>Языки и программирование</span>
            {/*
              Прежний заголовок — «Сначала понятно, потом упражнение, потом
              проверка» — описывал порядок блоков внутри урока, то есть нашу
              кухню. Человеку, который решает, начинать ли, он не обещал
              ничего, да и повторялся дальше по странице ещё дважды.
            */}
            <h1 className={styles.title}>Учись понимать, а не зазубривать</h1>
            <p className={styles.lead}>
              Каждый урок начинается с объяснения простыми словами, а дальше правило сразу
              пробуешь на деле. Восемь–пятнадцать минут — и можно возвращаться к своим делам.
            </p>

            <div className={styles.actions}>
              <Link className="btn big" href="/register">
                Начать учиться
              </Link>
              <Link className="btn big ghost" href="#kak-eto-ustroeno">
                Как это устроено
              </Link>
            </div>

            <p className={styles.heroMeta}>
              {withCount(lessons, "урок", "урока", "уроков")} ·{" "}
              {withCount(hours, "час", "часа", "часов")} занятий · экзамен и сертификат в конце
            </p>
          </div>

          {/*
            Окно в урок вместо картинки. Задание настоящее: z1-s-ili-es из
            урока «Когда одной s мало» модуля «Что я делаю». Если урок
            изменится, это место надо поправить руками — связи с содержанием
            тут намеренно нет, иначе витрина потянула бы за собой все курсы
            целиком.
          */}
          <div className={styles.peek} aria-label="Пример задания из урока">
            <div className={styles.peekHead}>
              <span>Английский с нуля · «Что я делаю»</span>
              <span>задание 3 из 5</span>
            </div>
            <div className={styles.peekTask}>
              <p className={styles.peekPrompt}>Сестра смотрит футбол. Какую запись выбрать?</p>
              <div className={styles.peekOptions}>
                <div className={styles.peekOption}>She watchs football.</div>
                <div className={`${styles.peekOption} ${styles.peekOptionRight}`}>
                  She watches football.
                </div>
                <div className={styles.peekOption}>She watch football.</div>
              </div>
            </div>
            <p className={styles.peekWhy}>
              She watches football. После звука «ч» прибавляют{" "}
              <span className={styles.nowrap}>es</span>.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.sectionAlt} id="napravleniya">
        <div className={`wrap-wide ${styles.section}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Направления</span>
            <h2 className={styles.sectionTitle}>С чего начнём</h2>
          </div>

          <div className={styles.tracks}>
            {vitrina.map((card) => (
              <Link key={card.href} href={card.href} className={styles.track}>
                <div
                  className={`${styles.cover} ${
                    card.kind === "code"
                      ? styles.coverCode
                      : `${styles.coverLang} ${styles.coverFlag}`
                  }`}
                  aria-hidden="true"
                >
                  <CourseArt id={card.art} title={card.title} />
                </div>

                <div className={styles.trackBody}>
                  <h3 className={styles.trackTitle}>{card.title}</h3>

                  {/* Одна строка, а не абзац: карточки в сетке должны быть одной
                      высоты, иначе ряд разваливается. */}
                  <p className={styles.trackDesc}>{card.tagline}</p>

                  <div className={styles.trackMetaRow}>
                    <span className={styles.trackMeta}>{card.meta}</span>
                    {/*
                      Значок стоит только у открытых курсов. Ветки «по
                      подписке» больше нет: платных курсов сейчас не
                      существует, и рассказывать о цене того, чего нет, —
                      обещание, за которым ничего не стоит.
                    */}
                    {card.free && (
                      <span className={`${styles.badge} ${styles.badgeFree}`}>Бесплатно</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Про собранные источники здесь было лишнее: это наша кухня, а
              человек в этот миг выбирает, чему учиться. */}
          <p className={styles.soonHead}>Готовятся ещё {PLANNED.length} направлений.</p>

          {/* Карточка без ссылки: обещание, за которым пока ничего нет, хуже
              честного «готовится». Поэтому они мельче и без действия. */}
          <div className={styles.soon}>
            {PLANNED.map((planned) => (
              <div key={planned.title} className={styles.soonCard}>
                <div
                  className={`${styles.cover} ${styles.coverSoon} ${
                    planned.cover.kind === "code" ? styles.coverCode : styles.coverFlag
                  }`}
                  aria-hidden="true"
                >
                  <CourseArt id={planned.cover.art} title={planned.title} />
                </div>
                <div className={styles.soonBody}>
                  <span className={styles.soonTitle}>{planned.title}</span>
                  <span className={styles.soonNote}>готовится</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`wrap-wide ${styles.section}`} id="kak-eto-ustroeno">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Как это работает</span>
          <h2 className={styles.sectionTitle}>Три шага, дальше — по кругу</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <h3 className={styles.stepTitle}>Выбираешь направление</h3>
            <p className={styles.stepText}>
              Сейчас это английский с нуля и основы веб-разработки. Начинай прямо с первого
              урока: он короткий, и сразу видно, подходит ли темп.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <h3 className={styles.stepTitle}>Проходишь модуль</h3>
            <p className={styles.stepText}>
              Сначала разбираешь правило, потом упражняешься, а в конце модуля сдаёшь
              проверочную работу.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <h3 className={styles.stepTitle}>Получаешь сертификат</h3>
            <p className={styles.stepText}>
              Сертификат выдаётся после итогового экзамена. У него свой номер и страница
              проверки — её можно отправить работодателю.
            </p>
          </div>
        </div>
      </div>

      {/*
        Здесь был раздел о подписке: два курса разом, «платишь за то, что
        действительно проходишь». Убран целиком по решению владельца — оплаты
        на сайте нет, платных курсов нет, и обещать условия несуществующего
        значит обманывать раньше, чем человек успел начать.

        Место оставлено под разговор о том, что человек получает. Якорь сменил
        имя, ссылка в шапке сайта поправлена вместе с ним.
      */}
      <div className={styles.sectionAlt} id="chto-vnutri">
        <div className={`wrap-wide ${styles.section}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Что внутри</span>
            <h2 className={styles.sectionTitle}>Как здесь учат</h2>
          </div>

          <div className={styles.plan}>
            <p className={styles.planItem}>
              <b>Объяснение до упражнения</b>
              Сначала понимаешь, почему так, и только потом делаешь. Правило — обычными
              словами, без грамматических дебрей.
            </p>
            <p className={styles.planItem}>
              <b>Настоящие проверочные работы</b>
              Вопросы каждый раз новые — работу не пройти, нажимая одну и ту же кнопку.
            </p>
            <p className={styles.planItem}>
              <b>Свой темп и никаких штрафов</b>
              Ошибка ведёт к подсказке и новой попытке, а не к потере очков. Пропадёшь на месяц —
              вернёшься на то же место.
            </p>
          </div>

          <div className={styles.planAction}>
            <Link className="btn big" href="/register">
              Начать учиться
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
