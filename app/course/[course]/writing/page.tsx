import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/content";
import WritingList from "@/components/WritingList";
import styles from "../course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course ? `Письмо · ${course.title}` : "Письмо" };
}

export default async function WritingIndexPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const prompts = course.writing ?? [];
  if (prompts.length === 0) notFound();

  return (
    <main className="wrap" style={{ paddingBottom: 24 }}>
      <div style={{ padding: "36px 0 20px" }}>
        <Link href={`/course/${slug}`} className={styles.backLink}>
          ← {course.title}
        </Link>
        <h1 className={styles.pageTitle}>✍️ Письмо</h1>
        <p className={styles.pageLead}>
          {prompts.length} задания на письмо уровня. Пиши в поле ниже, потом сверься с примером
          ответа и чек-листом.
        </p>
      </div>
      <WritingList courseSlug={slug} prompts={prompts} />
    </main>
  );
}
