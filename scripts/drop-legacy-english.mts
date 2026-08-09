/**
 * Убрать из базы содержание ПЕРВОЙ версии.
 *
 * Владелец решил, что старое учебное содержание выбрасывается: оно написано без
 * учебников и заменяется новым. Файлы первой версии удалены из репозитория, но
 * в базе остались её курсы, уроки и упражнения.
 *
 * Удаление сделано отдельным шагом, осознанно и с отчётом, а НЕ внутри переноса
 * содержания. Защиту достигнутого в scripts/seed-courses.mts обходить нельзя:
 * она однажды спасёт настоящие успехи настоящих учеников.
 *
 * Что считается первой версией: курс с полем `format = "legacy"` либо курс,
 * которого нет в courses/index.ts. Новые курсы переносятся с `format = "lessons"`.
 *
 * Запуск:  npx tsx scripts/drop-legacy-english.mts --dry
 *          npx tsx scripts/drop-legacy-english.mts
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });
config({ quiet: true });

const { prisma } = await import("../lib/db/index.ts");
const { courses } = await import("../courses/index.ts");

const dryRun = process.argv.includes("--dry");

const fresh = new Map(courses.map((course) => [course.slug, course]));

const inDb = await prisma.course.findMany({
  select: {
    id: true,
    slug: true,
    title: true,
    format: true,
    _count: { select: { lessons: true, enrollments: true, certificates: true } },
  },
});

// Курсы целиком из первой версии: их в репозитории больше нет
const deadCourses = inDb.filter((course) => !fresh.has(course.slug));

// Курсы, которые остались, но содержат уроки первой версии
const survivors = inDb.filter((course) => fresh.has(course.slug));
const staleLessons: Array<{ id: string; slug: string; title: string; course: string }> = [];

for (const course of survivors) {
  const keep = new Set(
    fresh.get(course.slug)!.modules.flatMap((m) => m.lessons.map((lesson) => lesson.slug))
  );
  const lessons = await prisma.lesson.findMany({
    where: { courseId: course.id },
    select: { id: true, slug: true, title: true },
  });
  for (const lesson of lessons) {
    if (!keep.has(lesson.slug)) {
      staleLessons.push({ ...lesson, course: course.slug });
    }
  }
}

console.log("Курсы под удаление целиком:");
if (deadCourses.length === 0) console.log("  нет");
for (const course of deadCourses) {
  console.log(
    `  · ${course.slug} — «${course.title}» (${course.format}), уроков ${course._count.lessons}, ` +
      `записей ${course._count.enrollments}, сертификатов ${course._count.certificates}`
  );
}

console.log("\nОтдельные уроки первой версии в оставшихся курсах:");
if (staleLessons.length === 0) console.log("  нет");
for (const lesson of staleLessons) {
  console.log(`  · ${lesson.course}/${lesson.slug} — «${lesson.title}»`);
}

if (dryRun) {
  console.log("\nПробный прогон: база не изменена.");
  await prisma.$disconnect();
  process.exit(0);
}

if (staleLessons.length > 0) {
  await prisma.lesson.deleteMany({ where: { id: { in: staleLessons.map((l) => l.id) } } });
}

if (deadCourses.length > 0) {
  // Уроки, модули, упражнения, записи и сертификаты уходят следом — так задано
  // в схеме через onDelete: Cascade
  await prisma.course.deleteMany({ where: { id: { in: deadCourses.map((c) => c.id) } } });
}

// Направления, оставшиеся без курсов
const emptyTracks = await prisma.track.findMany({
  where: { courses: { none: {} } },
  select: { id: true, slug: true },
});
if (emptyTracks.length > 0) {
  await prisma.track.deleteMany({ where: { id: { in: emptyTracks.map((t) => t.id) } } });
}

// Модули без уроков
const emptyModules = await prisma.module.findMany({
  where: { lessons: { none: {} } },
  select: { id: true },
});
if (emptyModules.length > 0) {
  await prisma.module.deleteMany({ where: { id: { in: emptyModules.map((m) => m.id) } } });
}

console.log(
  `\nУдалено: курсов ${deadCourses.length}, уроков ${staleLessons.length}, ` +
    `пустых направлений ${emptyTracks.length}, пустых модулей ${emptyModules.length}.`
);

await prisma.$disconnect();
