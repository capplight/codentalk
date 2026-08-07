import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks, getTrack } from "@/content";
import PlacementTest from "@/components/PlacementTest";

/**
 * Тест уровня — раздел направления, а не всей платформы: у каждого направления
 * своя шкала (у английского — CEFR). Страница появляется только у тех
 * направлений, где в данных задан placement.
 *
 * Пока тест есть только у английского, поэтому PlacementTest берёт вопросы из
 * content/placement.ts напрямую. Когда тест появится у второго направления,
 * вопросы и шкалу нужно будет передавать в компонент пропсами.
 */
export function generateStaticParams() {
  return tracks
    .filter((t) => !t.comingSoon && t.placement)
    .map((t) => ({ track: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ track: string }> }) {
  const track = getTrack((await params).track);
  return {
    title: track?.placement?.title ?? "Тест на определение уровня",
    description: track?.placement?.lead,
  };
}

export default async function TrackPlacementPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const track = getTrack((await params).track);
  if (!track || track.comingSoon || !track.placement) notFound();

  return (
    <main className="wrap" style={{ paddingBottom: 48 }}>
      <div style={{ padding: "36px 0 20px", textAlign: "center" }}>
        <Link
          href={`/track/${track.slug}`}
          style={{ fontSize: 14, textDecoration: "none", color: "var(--ink-soft)" }}
        >
          ← {track.emoji} {track.title}
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-story)",
            fontSize: "clamp(26px, 5vw, 36px)",
            margin: "14px 0 8px",
          }}
        >
          🎯 {track.placement.title}
        </h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: "48ch", margin: "0 auto" }}>
          {track.placement.lead}
        </p>
      </div>
      <PlacementTest />
    </main>
  );
}
