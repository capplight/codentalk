import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/content";
import WritingPractice from "@/components/WritingPractice";
import styles from "../../course.module.css";

export function generateStaticParams() {
  return courses
    .filter((c) => !c.comingSoon)
    .flatMap((c) => (c.writing ?? []).map((p) => ({ course: c.slug, prompt: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; prompt: string }>;
}) {
  const { course: courseSlug, prompt: promptSlug } = await params;
  const course = getCourse(courseSlug);
  const prompt = course?.writing?.find((p) => p.slug === promptSlug);
  return { title: prompt ? `${prompt.title} · ${course?.title}` : "Письмо" };
}

export default async function WritingPromptPage({
  params,
}: {
  params: Promise<{ course: string; prompt: string }>;
}) {
  const { course: slug, prompt: promptSlug } = await params;
  const course = getCourse(slug);
  if (!course || course.comingSoon) notFound();
  const prompt = course.writing?.find((p) => p.slug === promptSlug);
  if (!prompt) notFound();

  return (
    <main className="wrap" style={{ paddingBottom: 40 }}>
      <div style={{ padding: "36px 0 20px" }}>
        <Link href={`/course/${slug}/writing`} className={styles.backLink}>
          ← Письмо
        </Link>
        <h1 className={styles.pageTitle}>{prompt.title}</h1>
      </div>
      <WritingPractice courseSlug={slug} prompt={prompt} />
    </main>
  );
}
