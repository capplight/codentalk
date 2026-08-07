import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/content";
import { chaptersOf } from "@/lib/types";
import ChapterList from "@/components/ChapterList";
import styles from "../course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course ? `Упражнения · ${course.title}` : "Упражнения" };
}

export default async function ExercisesPage({ params }: { params: Promise<{ course: string }> }) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const exercises = chaptersOf(course, "exercise");

  return (
    <main className="wrap" style={{ paddingBottom: 24 }}>
      <div style={{ padding: "36px 0 24px" }}>
        <Link href={`/course/${slug}`} className={styles.backLink}>
          ← {course.title}
        </Link>
        <h1 className={styles.pageTitle}>🏋️ Упражнения</h1>
        <p className={styles.pageLead}>
          Тренажёры без сюжета: быстрая отработка грамматики уровня короткими заданиями. Сначала
          загляни в «Правила», потом закрепи здесь.
        </p>
      </div>
      <ChapterList courseSlug={course.slug} chapters={exercises} />
    </main>
  );
}
