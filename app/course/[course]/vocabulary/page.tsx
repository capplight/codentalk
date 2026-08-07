import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse, getTrackOfCourse } from "@/content";
import { getCourseVocabulary } from "@/lib/vocabulary";
import VocabularyList from "@/components/VocabularyList";
import styles from "../course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course ? `Словарь · ${course.title}` : "Словарь" };
}

export default async function VocabularyPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const track = getTrackOfCourse(slug);
  const words = getCourseVocabulary(course);

  return (
    <main className="wrap" style={{ paddingBottom: 40 }}>
      <div style={{ padding: "36px 0 8px" }}>
        <Link href={`/course/${slug}`} className={styles.backLink}>
          ← {course.title}
        </Link>
        <h1 className={styles.pageTitle}>🧠 Словарь уровня</h1>
        <p className={styles.pageLead}>
          Все новые слова из глав этого уровня в одном месте. Тренажёр запоминает, что ты уже
          знаешь, и в следующий раз спрашивает в первую очередь то, что сложнее.
        </p>
      </div>
      <VocabularyList courseSlug={slug} words={words} />
    </main>
  );
}
