import Link from "next/link";
import { tracks } from "@/content";
import { countTasks } from "@/lib/types";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className="wrap-wide" style={{ paddingBottom: 24 }}>
      <section className={styles.hero}>
        <div className={styles.stamp}>✦ QUEST-BASED LEARNING</div>
        <h1 className={styles.title}>
          Учись чему угодно через <em>истории</em>, а не зубрёжку
        </h1>
        <p className={styles.lead}>
          Выбери направление и проходи его как приключение: задания вплетены в сюжет, за ошибки
          здесь не наказывают, а знания остаются с тобой. И всё это бесплатно.
        </p>
        <div className={styles.heroActions}>
          <Link className="btn big" href="#tracks">
            Выбрать направление →
          </Link>
          <span className={styles.heroActionsHint}>
            бесплатно и без регистрации — прогресс сохраняется сам
          </span>
        </div>

        <div className={styles.howItWorks}>
          <div className={styles.howStep}>
            <span className={styles.howNum}>1</span>
            <div>
              <b>Выбери направление</b>
              <span>Языки, программирование и всё, что появится дальше. Внутри — уровни: начинай с нуля или с того места, где остановился.</span>
            </div>
          </div>
          <div className={styles.howStep}>
            <span className={styles.howNum}>2</span>
            <div>
              <b>Проходи юниты по методичке</b>
              <span>В каждом юните один и тот же порядок: правило простым языком → упражнения → квест-история → закрепление.</span>
            </div>
          </div>
          <div className={styles.howStep}>
            <span className={styles.howNum}>3</span>
            <div>
              <b>Закрепляй, пока не станет своим</b>
              <span>Тренажёры с повторением, живая практика и разбор ошибок — чтобы знание осталось, а не забылось назавтра.</span>
            </div>
          </div>
        </div>

        <div className={styles.principles}>
          <div className={styles.principle}>
            <b>🎯 Спокойный темп, никаких штрафов</b>
            <span>Ошибся — получи подсказку и иди дальше. Без сердечек, счётчиков дней и чувства вины.</span>
          </div>
          <div className={styles.principle}>
            <b>📖 Сюжет вместо карточек</b>
            <span>Фразы запоминаются сами собой, потому что ты проживаешь их в истории, а не повторяешь по сто раз.</span>
          </div>
          <div className={styles.principle}>
            <b>💡 Понятные объяснения</b>
            <span>Перед каждым заданием — простое правило человеческим языком. Сначала понимаешь, потом применяешь.</span>
          </div>
        </div>
      </section>

      <h2 id="tracks" className={styles.sectionTitle}>
        Направления
      </h2>
      <p className={styles.tracksLead}>
        Один и тот же метод работает для любого предмета, поэтому список будет расти. Открытые
        направления можно проходить прямо сейчас, остальные — в работе.
      </p>
      <div className={styles.tracks}>
        {tracks.map((track) => {
          const levels = track.levels.length;
          const tasks = track.levels.reduce(
            (sum, lvl) => sum + lvl.chapters.reduce((s, ch) => s + countTasks(ch), 0),
            0
          );
          const body = (
            <>
              <div className={styles.trackEmoji}>{track.emoji}</div>
              <div className={styles.trackBody}>
                <div className={styles.trackTitle}>
                  {track.title}
                  {track.comingSoon && <span className={styles.soonBadge}>скоро</span>}
                </div>
                <div className={styles.trackTagline}>{track.tagline}</div>
                <p className={styles.trackDesc}>{track.description}</p>
                {!track.comingSoon ? (
                  <div className={styles.trackMeta}>
                    {levels} уровней · {tasks} заданий · начать бесплатно →
                  </div>
                ) : (
                  track.syllabus && (
                    <div className={styles.syllabus}>
                      {track.syllabus.map((s) => (
                        <span key={s} className={styles.syllabusItem}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )
                )}
              </div>
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
    </main>
  );
}
