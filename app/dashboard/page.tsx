import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { buildOverview } from "@/lib/api/overview";
import styles from "./dashboard.module.css";

export const metadata = {
  title: "Мои курсы",
};

/** Дата по-русски: «1 сентября» */
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(date);
}

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const overview = await buildOverview(session.user.id);
  const { continueWith, courses, certificates, slots } = overview;
  const firstName = overview.displayName.split(" ")[0];

  return (
    <main className="wrap-wide" style={{ paddingBottom: 48 }}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>С возвращением</span>
        <h1 className={styles.hello}>Здравствуйте, {firstName}</h1>
      </div>

      {continueWith?.nextLesson ? (
        <div className={styles.continue}>
          <div>
            <span className={styles.meta}>{continueWith.title}</span>
            <h2 className={styles.continueTitle}>{continueWith.nextLesson.title}</h2>
            <span className={styles.meta}>
              {continueWith.nextLesson.minutes
                ? `Около ${continueWith.nextLesson.minutes} мин`
                : "Продолжим с того места, где вы остановились"}
            </span>
          </div>
          <Link className="btn big" href={continueWith.nextLessonHref ?? continueWith.href}>
            Продолжить
          </Link>
        </div>
      ) : (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {courses.length === 0 ? "Пора выбрать курс" : "Все курсы пройдены"}
          </h2>
          <p className={styles.emptyText}>
            {courses.length === 0
              ? "Английский и введение в веб-разработку открыты бесплатно и без ограничения по времени. Начните с любого — прогресс сохранится, даже если вернётесь через полгода."
              : "Вы прошли всё, что взяли. Загляните в каталог: там есть, чем продолжить."}
          </p>
          <Link className="btn" href="/">
            Открыть каталог
          </Link>
        </div>
      )}

      {courses.length > 0 && (
        <>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Мои курсы</h2>
            <span className={styles.meta}>
              Занято {slots.used} из {slots.total} мест
            </span>
          </div>

          <div className={styles.courses}>
            {courses.map((course) => {
              const percent =
                course.lessonsTotal === 0
                  ? 0
                  : Math.round((course.lessonsCompleted / course.lessonsTotal) * 100);
              return (
                <Link key={course.slug} href={course.href} className={styles.course}>
                  {course.completedAt ? (
                    <span className={`${styles.badge} ${styles.badgeDone}`}>Пройден</span>
                  ) : course.access === "free" ? (
                    <span className={`${styles.badge} ${styles.badgeFree}`}>Бесплатно</span>
                  ) : (
                    <span className={styles.badge}>По подписке</span>
                  )}

                  <h3 className={styles.courseTitle}>{course.title}</h3>

                  <div className={styles.bar}>
                    <span className={styles.barFill} style={{ width: `${percent}%` }} />
                  </div>

                  <span className={styles.meta}>
                    Пройдено {course.lessonsCompleted} из {course.lessonsTotal} уроков
                    {course.quizzes &&
                      ` · проверочных сдано ${course.quizzes.passed} из ${course.quizzes.total}`}
                    {course.holdsSlot && " · занимает место"}
                  </span>
                </Link>
              );
            })}
          </div>

          {slots.freeAt && (
            <p className={styles.slots}>
              Оба места заняты. Следующее освободится {formatDate(slots.freeAt)} — или раньше, если
              закончите один из курсов.
            </p>
          )}
        </>
      )}

      {certificates.length > 0 && (
        <>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Сертификаты</h2>
          </div>
          <div className={styles.courses}>
            {certificates.map((cert) => (
              <Link key={cert.serial} href={`/certificate/${cert.serial}`} className={styles.cert}>
                <div>
                  <h3 className={styles.courseTitle}>{cert.courseTitle}</h3>
                  <span className={styles.meta}>
                    Выдан {formatDate(cert.issuedAt)} · {cert.serial}
                  </span>
                </div>
                <span className={`${styles.meta} ${styles.certEnd}`}>Открыть →</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
