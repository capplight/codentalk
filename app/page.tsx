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
            Окно в урок вместо картинки. Задание настоящее — из модуля «Что я
            делаю» курса английского. Если урок изменится, это место надо
            поправить руками: связи с содержанием тут намеренно нет, иначе
            витрина потянула бы за собой все курсы целиком.
          */}
          <div className={styles.peek} aria-label="Пример задания из урока">
            <div className={styles.peekHead}>
              <span>Английский с нуля · «Что я делаю»</span>
              <span>задание 3 из 5</span>
            </div>
            <div className={styles.peekTask}>
              <p className={styles.peekPrompt}>
                Твоя сестра говорит по-английски. В каком предложении нет ошибки?
              </p>
              <div className={styles.peekOptions}>
                <div className={styles.peekOption}>My sister speak English.</div>
                <div className={`${styles.peekOption} ${styles.peekOptionRight}`}>
                  My sister speaks English.
                </div>
                <div className={styles.peekOption}>My sister is speak English.</div>
              </div>
            </div>
            <p className={styles.peekWhy}>
              Речь об одном человеке, поэтому у глагола появляется{" "}
              <span className={styles.nowrap}>окончание -s</span>.
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
