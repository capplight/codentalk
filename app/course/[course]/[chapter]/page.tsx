import { notFound } from "next/navigation";
import { courses, getChapter } from "@/content";
import QuestPlayer from "@/components/quest/QuestPlayer";

export function generateStaticParams() {
  return courses.flatMap((c) =>
    c.chapters.map((ch) => ({ course: c.slug, chapter: ch.slug }))
  );
}

interface Params {
  params: Promise<{ course: string; chapter: string }>;
}

export async function generateMetadata({ params }: Params) {
  const p = await params;
  const found = getChapter(p.course, p.chapter);
  return { title: found ? `${found.chapter.title} · ${found.course.title}` : "Глава" };
}

export default async function ChapterPage({ params }: Params) {
  const p = await params;
  const found = getChapter(p.course, p.chapter);
  if (!found) notFound();

  // id правила → заголовок: для ссылок «📖 Правило» в обратной связи заданий
  const ruleTitles: Record<string, string> = {};
  found.course.rules?.groups.forEach((group) =>
    group.blocks.forEach((block) => {
      ruleTitles[block.id] = block.title;
    })
  );

  return (
    <main>
      <QuestPlayer
        chapter={found.chapter}
        chapterNumber={found.number}
        courseSlug={found.course.slug}
        courseLevel={found.course.level}
        nextChapter={found.next}
        nextCourse={found.nextCourse}
        ruleTitles={ruleTitles}
      />
    </main>
  );
}
