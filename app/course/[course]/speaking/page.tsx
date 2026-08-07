import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/content";
import { getCoursePhrasebook } from "@/lib/phrasebook";
import SpeakingTrainer from "@/components/SpeakingTrainer";
import styles from "../course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course ? `Разговорная практика · ${course.title}` : "Разговорная практика" };
}

export default async function SpeakingPage({ params }: { params: Promise<{ course: string }> }) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const phrases = getCoursePhrasebook(course);

  return (
    <main className="wrap" style={{ paddingBottom: 40 }}>
      <div style={{ padding: "36px 0 20px", textAlign: "center" }}>
        <Link href={`/course/${slug}`} className={styles.backLink}>
          ← {course.title}
        </Link>
        <h1 className={styles.pageTitle}>🎙️ Разговорная практика</h1>
        <p className={styles.pageLead} style={{ margin: "0 auto" }}>
          Фразы из этого уровня — послушай образец, затем скажи вслух. Оценка приблизительная,
          важна сама практика.
        </p>
      </div>
      <SpeakingTrainer courseSlug={slug} phrases={phrases} />
    </main>
  );
}
