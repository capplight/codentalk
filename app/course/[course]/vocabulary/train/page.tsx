import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/content";
import { getCourseVocabulary } from "@/lib/vocabulary";
import VocabTrainer from "@/components/VocabTrainer";
import styles from "../../course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course ? `Тренажёр слов · ${course.title}` : "Тренажёр слов" };
}

export default async function VocabTrainPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const words = getCourseVocabulary(course);

  return (
    <main className="wrap" style={{ paddingBottom: 40 }}>
      <div style={{ padding: "36px 0 20px", textAlign: "center" }}>
        <Link href={`/course/${slug}/vocabulary`} className={styles.backLink}>
          ← Словарь уровня
        </Link>
        <h1 className={styles.pageTitle}>🧠 Тренажёр слов</h1>
        <p className={styles.pageLead} style={{ margin: "0 auto" }}>
          10 слов за раз. Ошибся — слово вернётся раньше в следующий заход.
        </p>
      </div>
      <VocabTrainer courseSlug={slug} words={words} />
    </main>
  );
}
