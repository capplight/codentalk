import { prisma } from "@/lib/db";
import { handler, ok } from "@/lib/api/respond";

/** Направления обучения с числом опубликованных курсов в каждом. */
export const GET = handler(async () => {
  const tracks = await prisma.track.findMany({
    orderBy: { sort: "asc" },
    select: {
      slug: true,
      title: true,
      kind: true,
      courses: {
        where: { isPublished: true },
        select: { slug: true, title: true, level: true, access: true, sort: true },
        orderBy: { sort: "asc" },
      },
    },
  });

  return ok({
    tracks: tracks.map((t) => ({
      slug: t.slug,
      title: t.title,
      kind: t.kind,
      coursesCount: t.courses.length,
      // Направление без опубликованных курсов — это анонс
      comingSoon: t.courses.length === 0,
      courses: t.courses,
    })),
  });
});
