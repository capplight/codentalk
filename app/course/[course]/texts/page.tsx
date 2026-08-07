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
  return { title: course ? `Тексты · ${course.title}` : "Тексты" };
}

export default async function TextsPage({ params }: { params: Promise<{ course: string }> }) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const texts = chaptersOf(course, "text");

  return (
    <main className="wrap" style={{ paddingBottom: 24 }}>
      <div style={{ padding: "36px 0 24px" }}>
        <Link href={`/course/${slug}`} className={styles.backLink}>
          ← {course.title}
        </Link>
        <h1 className={styles.pageTitle}>📄 Тексты</h1>
        <p className={styles.pageLead}>
          Чтение и аудирование как в классических методиках: прочитай текст или прослушай аудио —
          и ответь на вопросы по нему, сверяясь с оригиналом.
        </p>
      </div>
      <ChapterList courseSlug={course.slug} chapters={texts} />
    </main>
  );
}
