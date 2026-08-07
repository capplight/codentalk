import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/content";
import RulesView from "@/components/RulesView";
import styles from "../course.module.css";

export function generateStaticParams() {
  return courses.filter((c) => !c.comingSoon && c.rules).map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const course = getCourse((await params).course);
  return { title: course ? `Правила · ${course.title}` : "Правила" };
}

export default async function RulesPage({ params }: { params: Promise<{ course: string }> }) {
  const slug = (await params).course;
  const course = getCourse(slug);
  if (!course || course.comingSoon || !course.rules) notFound();

  return (
    <main className="wrap" style={{ paddingBottom: 48 }}>
      <div style={{ padding: "36px 0 8px" }}>
        <Link href={`/course/${slug}`} className={styles.backLink}>
          ← {course.title}
        </Link>
        <h1 className={styles.pageTitle}>📖 Правила</h1>
        <p className={styles.pageLead}>{course.rules.intro}</p>
      </div>
      <RulesView rules={course.rules} />
    </main>
  );
}
