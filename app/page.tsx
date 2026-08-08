import Link from "next/link";
import { tracks, englishLevels } from "@/content";
import { countTasks } from "@/lib/types";
import { trackHasFree } from "@/lib/domain/course-access";
import styles from "./page.module.css";

/**
 * Витрина для гостя.
 *
 * Вид намеренно узнаваемый — белый лист, синий акцент, поиск, карточная сетка.
 * Аудитория взрослая, часто меняющая профессию, и знакомая форма работает на
 * доверие сильнее, чем оригинальность: человек понимает, где он и что делать,
 * ещё не прочитав заголовок.
 */
export default function HomePage() {
  const englishTasks = englishLevels.reduce(
    (sum, level) => sum + level.chapters.reduce((s, ch) => s + countTasks(ch), 0),
    0
  );

  return (
    <main>
      <div className="wrap-wide">
        <section className={styles.hero}>
          <div className={styles.heroCol}>
            <h1 className={styles.title}>
              Учитесь в своём темпе — и возвращайтесь, когда сможете
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
                placeholder="Какой предмет вам нужен?"
                aria-label="Поиск по направлениям"
              />
              <button className={`btn ${styles.searchBtn}`} type="submit">
                Найти
              </button>
            </form>

            <div className={styles.trust}>
              <div>
                <span className={styles.trustNum}>{englishLevels.length}</span>
                <span className={styles.trustLabel}>уровней английского</span>
              </div>
              <div>
                <span className={styles.trustNum}>{englishTasks}</span>
                <span className={styles.trustLabel}>заданий с проверкой</span>
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
              <b>Два курса одновременно.</b> Достаточно, чтобы не распыляться, и честно: вы платите
              за то, что действительно проходите.
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
            {tracks.map((track) => {
              const tasks = track.levels.reduce(
                (sum, lvl) => sum + lvl.chapters.reduce((s, ch) => s + countTasks(ch), 0),
                0
              );
              const free = trackHasFree(track);

              const body = (
                <>
                  {track.comingSoon ? (
                    <span className={`${styles.badge} ${styles.badgeSoon}`}>Скоро</span>
                  ) : free ? (
                    <span className={`${styles.badge} ${styles.badgeFree}`}>Бесплатно</span>
                  ) : (
                    <span className={styles.badge}>По подписке</span>
                  )}

                  <h3 className={styles.trackTitle}>{track.title}</h3>

                  {/* Одна строка, а не абзац: карточки в сетке должны быть
                      одной высоты, иначе ряд разваливается. Подробности —
                      на странице направления. */}
                  <p className={styles.trackDesc}>{track.tagline}</p>

                  <span className={styles.trackMeta}>
                    {track.comingSoon
                      ? track.syllabus
                        ? `${track.syllabus.length} тем в программе`
                        : "готовится"
                      : `${track.levels.length} уровней · ${tasks} заданий`}
                  </span>
                </>
              );

              return track.comingSoon ? (
                <div key={track.slug} className={`${styles.track} ${styles.trackSoon}`}>
                  {body}
                </div>
              ) : (
                <Link key={track.slug} href={`/track/${track.slug}`} className={styles.track}>
                  {body}
                </Link>
              );
            })}
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
            <h3 className={styles.stepTitle}>Выбираете направление</h3>
            <p className={styles.stepText}>
              Не уверены в уровне — короткий тест подскажет, с какого модуля начать, чтобы не
              скучать и не тонуть.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <h3 className={styles.stepTitle}>Проходите модуль</h3>
            <p className={styles.stepText}>
              Сначала объяснение простым языком, потом упражнения, потом проверочная работа. Урок
              занимает 8–15 минут.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <h3 className={styles.stepTitle}>Получаете сертификат</h3>
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
