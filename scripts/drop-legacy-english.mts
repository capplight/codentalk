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
 * Что считается первой версией: **курс, которого нет в courses/index.ts**.
 * Поле `format` при этом не смотрим — оно ничего не решает, потому что курс без
 * файлов в репозитории не откроется независимо от пометки.
 *
 * ОСТОРОЖНО. Скрипт удаляет уроки вместе с успехами учеников и останавливается
 * только на сертификатах. Он написан под разовую задачу — вычистить первую
 * версию. Перед повторным запуском убедись, что не переименовывал курс: для
 * скрипта переименование неотличимо от удаления.
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

/*
 * ОСТАНОВКА НА СЕРТИФИКАТАХ.
 *
 * Сертификат обещан ученику как проверяемый по номеру на все времена. Курс
 * уходит вместе с сертификатами (в схеме onDelete: Cascade), и страница
 * проверки перестанет открываться — обещание нельзя ломать молча.
 */
const withCertificates = deadCourses.filter((course) => course._count.certificates > 0);
if (withCertificates.length > 0) {
  const list = withCertificates
    .map((c) => `  · ${c.slug} — сертификатов ${c._count.certificates}`)
    .join("\n");
  throw new Error(
    `Удаление остановлено: по этим курсам выданы сертификаты.\n${list}\n\n` +
      `Вместе с курсом исчезнут и они, а страница проверки по номеру перестанет ` +
      `открываться. Сначала реши, что делать с выданными сертификатами.`
  );
}

if (dryRun) {
  console.log("\nПробный прогон: база не изменена.");
  await prisma.$disconnect();
  process.exit(0);
}

if (staleLessons.length > 0) {
  await prisma.lesson.deleteMany({ where: { id: { in: staleLessons.map((l) => l.id) } } });
}

const deadIds = deadCourses.map((course) => course.id);

// Направления, которые опустеют ИМЕННО от этого удаления. Пустые направления
// вообще трогать нельзя: заведённое заранее под будущий курс исчезло бы молча.
const tracksAtRisk = await prisma.track.findMany({
  where: { courses: { every: { id: { in: deadIds } } } },
  select: { id: true, slug: true },
});

if (deadIds.length > 0) {
  // Уроки, модули, упражнения и записи уходят следом — так задано в схеме
  await prisma.course.deleteMany({ where: { id: { in: deadIds } } });
}

if (tracksAtRisk.length > 0) {
  await prisma.track.deleteMany({
    where: { id: { in: tracksAtRisk.map((t) => t.id) }, courses: { none: {} } },
  });
  console.log(`Удалены опустевшие направления: ${tracksAtRisk.map((t) => t.slug).join(", ")}`);
}

console.log(`\nУдалено: курсов ${deadCourses.length}, уроков ${staleLessons.length}.`);
console.log(
  "Модули без уроков намеренно НЕ трогаются: у нового курса уроки могут ещё писаться."
);

await prisma.$disconnect();
