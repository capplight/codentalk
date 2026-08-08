/**
 * Перенос учебных материалов из репозитория в базу данных.
 *
 * Материалы живут в папке content/ как данные под контролем версий, а в базе
 * хранится только их зеркало — чтобы записи об успехах учеников могли на них
 * ссылаться. Раздел 2.2 документа docs/TZ-platform-v2.md.
 *
 * Запуск:  npx tsx scripts/seed-content.mts
 *          npx tsx scripts/seed-content.mts --dry   (только показать, что будет)
 *
 * ВАЖНО. Скрипт останавливается с ошибкой, если урок, по которому у кого-то
 * есть успехи, исчез из репозитория. Без этой проверки достигнутое учениками
 * молча портилось бы при каждой правке материалов.
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });
config({ quiet: true });

const { prisma } = await import("../lib/db/index.ts");
const { tracks } = await import("../content/index.ts");
const { countTasks } = await import("../lib/types.ts");
import type { Chapter, Course, Track, Unit } from "../lib/types.ts";

const dryRun = process.argv.includes("--dry");

/** Направления языков бесплатны целиком; введение в веб-разработку — тоже. */
function trackKind(track: Track): string {
  if (track.slug === "english" || track.slug === "kazakh") return "language";
  if (track.slug === "python" || track.slug === "web") return "programming";
  return "other";
}

/**
 * Платность курса. Пока бесплатны английский целиком и введение в
 * веб-разработку — так записано в разделе 1.2 техзадания. Остальное по подписке.
 */
function courseAccess(track: Track, course: Course): "free" | "premium" {
  if (track.slug === "english") return "free";
  if (track.slug === "web" && course.slug.includes("intro")) return "free";
  return "premium";
}

/**
 * Оценка времени урока. Считаем по числу заданий: примерно минута на задание
 * плюс три минуты на чтение объяснения. Норматив из раздела 5.1 — от восьми до
 * пятнадцати минут; выходящее за рамки видно сразу и подлежит разделению.
 */
function estimateMinutes(chapter: Chapter): number {
  return Math.max(3, Math.round(countTasks(chapter) * 1 + 3));
}

/** Какому модулю принадлежит глава: ищем юнит, который на неё ссылается. */
function moduleSlugForChapter(units: Unit[], chapterSlug: string): string | undefined {
  const unit = units.find(
    (u) =>
      u.questSlug === chapterSlug ||
      u.textSlug === chapterSlug ||
      (u.exerciseSlugs ?? []).includes(chapterSlug)
  );
  return unit?.slug;
}

function lessonKind(chapter: Chapter): string {
  if (chapter.exam) return "exam";
  const section = chapter.section ?? "quest";
  if (section === "text") return "reading";
  if (section === "exercise") return "practice";
  return "quest";
}

async function main() {
  const seenCourseSlugs = new Set<string>();
  const seenLessonKeys = new Set<string>();
  let trackCount = 0;
  let courseCount = 0;
  let moduleCount = 0;
  let lessonCount = 0;

  for (const [trackIndex, track] of tracks.entries()) {
    trackCount += 1;
    const trackRow = dryRun
      ? { id: "dry" }
      : await prisma.track.upsert({
          where: { slug: track.slug },
          create: {
            slug: track.slug,
            title: track.title,
            kind: trackKind(track),
            sort: trackIndex,
          },
          update: { title: track.title, kind: trackKind(track), sort: trackIndex },
        });

    for (const [courseIndex, course] of track.levels.entries()) {
      courseCount += 1;
      seenCourseSlugs.add(course.slug);

      const access = courseAccess(track, course);
      const courseRow = dryRun
        ? { id: "dry" }
        : await prisma.course.upsert({
            where: { slug: course.slug },
            create: {
              slug: course.slug,
              trackId: trackRow.id,
              title: course.title,
              level: course.level,
              access,
              sort: courseIndex,
              isPublished: !course.comingSoon,
            },
            update: {
              trackId: trackRow.id,
              title: course.title,
              level: course.level,
              access,
              sort: courseIndex,
              isPublished: !course.comingSoon,
            },
          });

      const units = course.units ?? [];
      const moduleIdBySlug = new Map<string, string>();

      for (const [unitIndex, unit] of units.entries()) {
        moduleCount += 1;
        if (dryRun) {
          moduleIdBySlug.set(unit.slug, "dry");
          continue;
        }
        const moduleRow = await prisma.module.upsert({
          where: { courseId_slug: { courseId: courseRow.id, slug: unit.slug } },
          create: {
            courseId: courseRow.id,
            slug: unit.slug,
            title: unit.title,
            sort: unitIndex,
          },
          update: { title: unit.title, sort: unitIndex },
        });
        moduleIdBySlug.set(unit.slug, moduleRow.id);
      }

      for (const [chapterIndex, chapter] of course.chapters.entries()) {
        lessonCount += 1;
        seenLessonKeys.add(`${course.slug}::${chapter.slug}`);
        if (dryRun) continue;

        const moduleSlug = moduleSlugForChapter(units, chapter.slug);
        const moduleId = moduleSlug ? moduleIdBySlug.get(moduleSlug) ?? null : null;

        await prisma.lesson.upsert({
          where: { courseId_slug: { courseId: courseRow.id, slug: chapter.slug } },
          create: {
            courseId: courseRow.id,
            moduleId,
            slug: chapter.slug,
            title: chapter.title,
            kind: lessonKind(chapter),
            estimatedMinutes: estimateMinutes(chapter),
            sort: chapterIndex,
          },
          update: {
            moduleId,
            title: chapter.title,
            kind: lessonKind(chapter),
            estimatedMinutes: estimateMinutes(chapter),
            sort: chapterIndex,
          },
        });
      }
    }
  }

  // --- Проверка целостности -------------------------------------------------
  // Ищем уроки, которые есть в базе, но исчезли из репозитория.
  if (!dryRun) {
    const dbLessons = await prisma.lesson.findMany({
      select: {
        id: true,
        slug: true,
        course: { select: { slug: true } },
        _count: { select: { progress: true } },
      },
    });

    const orphans = dbLessons.filter(
      (l) => !seenLessonKeys.has(`${l.course.slug}::${l.slug}`)
    );
    const withProgress = orphans.filter((l) => l._count.progress > 0);
    const withoutProgress = orphans.filter((l) => l._count.progress === 0);

    if (withProgress.length > 0) {
      const list = withProgress
        .map((l) => `  ${l.course.slug}/${l.slug} — успехов: ${l._count.progress}`)
        .join("\n");
      throw new Error(
        `Из репозитория исчезли уроки, по которым у учеников есть успехи:\n${list}\n\n` +
          `Перенос остановлен, база не изменена в этой части.\n` +
          `Верни уроки на место либо осознанно перенеси успехи на другие уроки — ` +
          `но не удаляй молча, иначе достигнутое учениками пропадёт.`
      );
    }

    // Уроки без чьих-либо успехов удаляем спокойно — терять нечего.
    if (withoutProgress.length > 0) {
      await prisma.lesson.deleteMany({
        where: { id: { in: withoutProgress.map((l) => l.id) } },
      });
      console.log(`Удалено уроков без успехов: ${withoutProgress.length}`);
    }
  }

  console.log(
    dryRun
      ? "Пробный запуск, база не изменена."
      : "Перенос завершён."
  );
  console.log(
    `Направлений: ${trackCount}, курсов: ${courseCount}, ` +
      `модулей: ${moduleCount}, уроков: ${lessonCount}`
  );
}

try {
  await main();
} finally {
  await prisma.$disconnect();
}
