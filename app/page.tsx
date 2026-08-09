import Link from "next/link";
import { courseCards, type CourseCard } from "@/courses";
import { withCount } from "@/lib/plural";
import styles from "./page.module.css";

/**
 * Витрина для гостя.
 *
 * Вид намеренно узнаваемый — белый лист, синий акцент, поиск, карточная сетка.
 * Аудитория взрослая, часто меняющая профессию, и знакомая форма работает на
 * доверие сильнее, чем оригинальность: человек понимает, где он и что делать,
 * ещё не прочитав заголовок.
 */
/** Направления, о которых сказано на витрине, но курсов по ним ещё нет. */
const PLANNED: Array<{ title: string; tagline: string }> = [
  { title: "Казахский язык", tagline: "Разговорный казахский для повседневных дел" },
  { title: "Python", tagline: "От первой программы до работы с данными" },
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
            <h1 className={styles.title}>
              Учись в своём темпе — и возвращайся, когда сможешь
            </h1>
            <p className={styles.lead}>
              Английский и основы веб-разработки бесплатны навсегда. Остальные курсы — по одной
              подписке, которую можно приостановить в любой месяц. Всё сохранится: вернётесь на
              тот же урок, даже спустя полгода.
            </p>

            <form className={styles.search} action="#" role="search">
              <input
                className={styles.searchInput}
                type="search"
                name="q"
                placeholder="Какой предмет тебе нужен?"
                aria-label="Поиск по направлениям"
              />
              <button className={`btn ${styles.searchBtn}`} type="submit">
                Найти
              </button>
            </form>

            <div className={styles.trust}>
              <div>
                <span className={styles.trustNum}>{lessons}</span>
                <span className={styles.trustLabel}>уроков открыто</span>
              </div>
              <div>
                <span className={styles.trustNum}>{hours} ч</span>
                <span className={styles.trustLabel}>занятий с проверкой</span>
              </div>
              <div>
                <span className={styles.trustNum}>0 ₸</span>
                <span className={styles.trustLabel}>английский навсегда</span>
              </div>
            </div>
          </div>

          <aside className={styles.panel} id="podpiska">
            <span className={styles.eyebrow}>Что входит в подписку</span>
            <p className={styles.panelItem}>
              <b>Два курса одновременно.</b> Достаточно, чтобы не распыляться, и честно: платишь
              за то, что действительно проходишь.
            </p>
            <p className={styles.panelItem}>
              <b>Настоящие проверочные работы.</b> Вопросы каждый раз новые — работу не пройти,
              нажимая одну и ту же кнопку.
            </p>
            <p className={styles.panelItem}>
              <b>Сертификат с проверкой.</b> Работодатель откроет ссылку и убедится, что он
              подлинный.
            </p>
            <Link className="btn" href="/register">
              Начать бесплатно
            </Link>
          </aside>
        </section>
      </div>

      <div className={styles.sectionAlt} id="napravleniya">
        <div className={`wrap-wide ${styles.section}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Направления</span>
            <h2 className={styles.sectionTitle}>С чего начнём</h2>
          </div>

          <div className={styles.tracks}>
            {cards.map((card) => (
              <Link key={card.slug} href={`/learn/${card.slug}`} className={styles.track}>
                <span
                  className={`${styles.badge} ${card.access === "free" ? styles.badgeFree : ""}`}
                >
                  {card.access === "free" ? "Бесплатно" : "По подписке"}
                </span>

                <h3 className={styles.trackTitle}>{card.title}</h3>

                {/* Одна строка, а не абзац: карточки в сетке должны быть одной
                    высоты, иначе ряд разваливается. */}
                <p className={styles.trackDesc}>{card.tagline ?? ""}</p>

                <span className={styles.trackMeta}>
                  {withCount(card.lessons, "урок", "урока", "уроков")}
                  {card.hasExam ? " · с экзаменом" : ""}
                </span>
              </Link>
            ))}

            {/* Направления, о которых сказано, но содержания по ним ещё нет.
                Карточка без ссылки: обещание, за которым пока ничего нет,
                хуже честного «готовится». */}
            {PLANNED.map((planned) => (
              <div key={planned.title} className={`${styles.track} ${styles.trackSoon}`}>
                <span className={`${styles.badge} ${styles.badgeSoon}`}>Скоро</span>
                <h3 className={styles.trackTitle}>{planned.title}</h3>
                <p className={styles.trackDesc}>{planned.tagline}</p>
                <span className={styles.trackMeta}>готовится</span>
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
              Не уверен в уровне — короткий тест подскажет, с какого модуля начать, чтобы не
              скучать и не тонуть.
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
    </main>
  );
}
