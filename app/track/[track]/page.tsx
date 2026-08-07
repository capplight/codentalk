import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks, getTrack } from "@/content";
import { countTasks } from "@/lib/types";
import CourseProgress from "@/components/CourseProgress";
import styles from "../../page.module.css";

export function generateStaticParams() {
  return tracks.filter((t) => !t.comingSoon).map((t) => ({ track: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ track: string }> }) {
  const track = getTrack((await params).track);
  return { title: track?.title ?? "Направление" };
}

export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const track = getTrack((await params).track);
  if (!track || track.comingSoon) notFound();

  return (
    <main className="wrap-wide" style={{ paddingBottom: 24 }}>
      <div style={{ padding: "36px 0 8px" }}>
        <Link href="/" style={{ fontSize: 14, textDecoration: "none", color: "var(--ink-soft)" }}>
          ← Все направления
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-story)",
            fontSize: "clamp(28px, 5.5vw, 40px)",
            margin: "14px 0 8px",
          }}
        >
          {track.emoji} {track.title}
        </h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: "56ch", margin: 0 }}>{track.description}</p>

        {track.placement && (
          <p style={{ marginTop: 14 }}>
            <Link className="btn ghost" href={`/track/${track.slug}/placement`}>
              {track.placement.cta}
            </Link>
          </p>
        )}

        <div className={styles.path} aria-label="Путь по уровням">
          {track.levels.map((lvl, i) => (
            <span key={lvl.slug} style={{ display: "contents" }}>
              {i > 0 && <span className={styles.pathArrow}>→</span>}
              <span className={`${styles.pathStep} ${styles.pathStepOpen}`} title={lvl.title}>
                {lvl.emoji} {lvl.short}
              </span>
            </span>
          ))}
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Уровни — проходи по порядку</h2>
      <div className={styles.courses}>
        {track.levels.map((level) => {
          const tasks = level.chapters.reduce((sum, ch) => sum + countTasks(ch), 0);
          return (
            <Link key={level.slug} href={`/course/${level.slug}`} className={styles.course}>
              <div className={styles.courseEmoji}>{level.emoji}</div>
              <div>
                <div className={styles.courseTitle}>
                  {level.title}
                  <span className={styles.courseLevel}>{level.level}</span>
                </div>
                <p className={styles.courseDesc}>{level.description}</p>
                <div className={styles.courseMeta}>
                  {level.chapters.length} гл. · {tasks} заданий · начать бесплатно →
                </div>
                <CourseProgress
                  courseSlug={level.slug}
                  chapterSlugs={level.chapters.map((ch) => ch.slug)}
                  compact
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
