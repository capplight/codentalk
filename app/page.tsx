import Link from "next/link";
import { courseCards, type CourseCard } from "@/courses";
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

export default function HomePage() {
  const cards: CourseCard[] = courseCards();
  const lessons = cards.reduce((sum, card) => sum + card.lessons, 0);
  const hours = Math.max(1, Math.round(cards.reduce((s, c) => s + c.minutes, 0) / 60));

  return (
    <main>
      <div className="wrap-wide">
        <section className={styles.hero}>
          <div className={styles.heroCol}>
            <span className={styles.eyebrow}>Языки и программирование</span>
            <h1 className={styles.title}>Сначала понятно, потом упражнение, потом проверка</h1>
            <p className={styles.lead}>
              Каждый урок объясняет правило простыми словами и сразу даёт разобрать его на деле.
              Занимает восемь–пятнадцать минут.
            </p>

            <div className={styles.actions}>
              <Link className="btn big" href="/register">
                Начать бесплатно
              </Link>
              <Link className="btn big ghost" href="#podpiska">
                Что входит в подписку
              </Link>
            </div>

            <p className={styles.heroMeta}>
              {withCount(lessons, "урок", "урока", "уроков")} открыто ·{" "}
              {withCount(hours, "час", "часа", "часов")} занятий с проверкой · английский бесплатен
              навсегда
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
            {cards.map((card) => {
              const cover = COVERS[card.slug];
              return (
                <Link key={card.slug} href={`/learn/${card.slug}`} className={styles.track}>
                  <div
                    className={`${styles.cover} ${
                      cover?.kind === "code" ? styles.coverCode : styles.coverLang
                    }`}
                    aria-hidden="true"
                  >
                    <CourseArt id={cover?.art ?? ""} title={card.title} />
                  </div>

                  <div className={styles.trackBody}>
                    <h3 className={styles.trackTitle}>{card.title}</h3>

                    {/* Одна строка, а не абзац: карточки в сетке должны быть одной
                        высоты, иначе ряд разваливается. */}
                    <p className={styles.trackDesc}>{card.tagline ?? ""}</p>

                    <div className={styles.trackMetaRow}>
                      <span className={styles.trackMeta}>
                        {withCount(card.lessons, "урок", "урока", "уроков")}
                        {card.hasExam ? " · с экзаменом" : ""}
                      </span>
                      <span
                        className={`${styles.badge} ${
                          card.access === "free" ? styles.badgeFree : ""
                        }`}
                      >
                        {card.access === "free" ? "Бесплатно" : "По подписке"}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className={styles.soonHead}>
            Готовятся ещё {PLANNED.length} направлений — по каждому уже собраны источники.
          </p>

          {/* Карточка без ссылки: обещание, за которым пока ничего нет, хуже
              честного «готовится». Поэтому они мельче и без действия. */}
          <div className={styles.soon}>
            {PLANNED.map((planned) => (
              <div key={planned.title} className={styles.soonCard}>
                <div
                  className={`${styles.cover} ${styles.coverSoon} ${
                    planned.cover.kind === "code" ? styles.coverCode : ""
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
              Открытые курсы — английский с нуля и основы веб-разработки. Начинать можно с
              первого урока: он короткий, и сразу видно, подходит ли темп.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <h3 className={styles.stepTitle}>Проходишь модуль</h3>
            <p className={styles.stepText}>
              Сначала объяснение простым языком, потом упражнения, потом проверочная работа. Урок
              занимает 8–15 минут.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <h3 className={styles.stepTitle}>Получаешь сертификат</h3>
            <p className={styles.stepText}>
              После итогового экзамена. С уникальным номером и страницей проверки — её можно
              отправить работодателю.
            </p>
          </div>
        </div>
      </div>

      {/*
        Подписка переехала сюда из первого экрана: выбранная витрина отдала
        правую колонку заданию. Якорь podpiska сохранён — на него ссылается
        шапка сайта, и ссылка не должна вести в пустоту.
      */}
      <div className={styles.sectionAlt} id="podpiska">
        <div className={`wrap-wide ${styles.section}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Подписка</span>
            <h2 className={styles.sectionTitle}>Что входит</h2>
          </div>

          <div className={styles.plan}>
            <p className={styles.planItem}>
              <b>Два курса одновременно</b>
              Достаточно, чтобы не распыляться, и честно: платишь за то, что действительно
              проходишь.
            </p>
            <p className={styles.planItem}>
              <b>Настоящие проверочные работы</b>
              Вопросы каждый раз новые — работу не пройти, нажимая одну и ту же кнопку.
            </p>
            <p className={styles.planItem}>
              <b>Сертификат с проверкой</b>
              Работодатель откроет ссылку и убедится, что он подлинный.
            </p>
          </div>

          <div className={styles.planAction}>
            <Link className="btn big" href="/register">
              Начать бесплатно
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
