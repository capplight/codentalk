import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse, getTrackOfCourse } from "@/content";
import { getCourseVocabulary } from "@/lib/vocabulary";
import { getCoursePhrasebook } from "@/lib/phrasebook";
import CourseProgress from "@/components/CourseProgress";
import UnitList from "@/components/UnitList";
import styles from "./course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course?.title ?? "Курс" };
}

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const track = getTrackOfCourse(slug);

  const units = course.units ?? [];
  const examChapter = course.chapters.find((ch) => ch.exam);
  const rulesCount = course.rules?.groups.reduce((sum, g) => sum + g.blocks.length, 0) ?? 0;
  const textsCount = course.chapters.filter((ch) => (ch.section ?? "quest") === "text").length;
  const wordsCount = getCourseVocabulary(course).length;
  const writingCount = course.writing?.length ?? 0;
  const phrasesCount = getCoursePhrasebook(course).length;

  const allChapterSlugs = course.chapters.map((ch) => ch.slug);

  return (
    <main className="wrap-wide" style={{ paddingBottom: 24 }}>
      <div style={{ padding: "36px 0 20px" }}>
        <Link href={track ? `/track/${track.slug}` : "/"} className={styles.backLink}>
          ← {track ? track.title : "Все курсы"}
        </Link>
        <h1 className={styles.pageTitle}>
          {course.emoji} {course.title}
        </h1>
        <p className={styles.pageLead}>{course.description}</p>
      </div>

      {course.goals && course.goals.length > 0 && (
        <div className={styles.goalsBox}>
          <h2 className={styles.goalsTitle}>Чему ты научишься на этом уровне</h2>
          <ul className={styles.goalsList}>
            {course.goals.map((goal) => (
              <li key={goal} className={styles.goalItem}>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      )}

      <CourseProgress courseSlug={slug} chapterSlugs={allChapterSlugs} />

      {units.length > 0 && (
        <>
          <p className={styles.orderHint}>
            Уровень разбит на юниты — по одной теме на юнит. В каждом: правило → упражнения →
            квест → чтение → проверка себя. Проходи по порядку.
          </p>
          <UnitList courseSlug={slug} units={units} examSlug={examChapter?.slug} wide />
        </>
      )}

      <h2 className={styles.extraTitle}>Дополнительные материалы</h2>
      <div className={styles.extraGrid}>
        {rulesCount > 0 && (
          <Link href={`/course/${slug}/rules`} className={styles.extraCard}>
            <span className={styles.extraEmoji}>📖</span>
            <div>
              <div className={styles.extraCardTitle}>Полный справочник правил</div>
              <div className={styles.extraCardDesc}>
                Все {rulesCount} правил уровня одним списком — удобно, если нужно быстро свериться.
              </div>
            </div>
          </Link>
        )}
        {textsCount > 0 && (
          <Link href={`/course/${slug}/texts`} className={styles.extraCard}>
            <span className={styles.extraEmoji}>📚</span>
            <div>
              <div className={styles.extraCardTitle}>Библиотека для чтения</div>
              <div className={styles.extraCardDesc}>
                Все {textsCount} текстов уровня, включая те, что не привязаны к темам юнитов.
              </div>
            </div>
          </Link>
        )}
        {wordsCount > 0 && (
          <Link href={`/course/${slug}/vocabulary`} className={styles.extraCard}>
            <span className={styles.extraEmoji}>🧠</span>
            <div>
              <div className={styles.extraCardTitle}>Словарь уровня</div>
              <div className={styles.extraCardDesc}>
                {wordsCount} новых слов и тренажёр, который запоминает, что ты уже знаешь.
              </div>
            </div>
          </Link>
        )}
        {writingCount > 0 && (
          <Link href={`/course/${slug}/writing`} className={styles.extraCard}>
            <span className={styles.extraEmoji}>✍️</span>
            <div>
              <div className={styles.extraCardTitle}>Письмо</div>
              <div className={styles.extraCardDesc}>
                {writingCount} задания на письмо с примером ответа и чек-листом самопроверки.
              </div>
            </div>
          </Link>
        )}
        {phrasesCount > 0 && (
          <Link href={`/course/${slug}/speaking`} className={styles.extraCard}>
            <span className={styles.extraEmoji}>🎙️</span>
            <div>
              <div className={styles.extraCardTitle}>Разговорная практика</div>
              <div className={styles.extraCardDesc}>
                {phrasesCount} фраз уровня — слушай и произноси вслух, браузер оценит на слух.
              </div>
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}
