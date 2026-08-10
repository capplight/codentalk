/**
 * Отчёт по пометкам «непонятно».
 *
 * Показывает, какие блоки уроков ученики отметили как непонятные — по убыванию
 * числа пометок. Это приборная панель качества уроков: если абзац помечают,
 * плох абзац, а не ученик.
 *
 * Запуск: npx tsx scripts/confusion-report.mts
 */

import "dotenv/config";
import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";

config({ path: ".env.local", override: true });

const { PrismaClient } = await import("../lib/db/generated/client.js");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const marks = await prisma.confusionMark.findMany({
  include: {
    lesson: { select: { slug: true, title: true, module: { select: { slug: true, sort: true } } } },
    user: { select: { email: true } },
  },
  orderBy: { createdAt: "asc" },
});

console.log(`Всего пометок: ${marks.length}\n`);

for (const mark of marks) {
  const moduleSlug = mark.lesson.module?.slug ?? "—";
  console.log(
    [
      `${moduleSlug} / ${mark.lesson.slug}`,
      `  блок: ${mark.blockId}`,
      `  кто: ${mark.user.email}`,
      mark.comment ? `  словами: ${mark.comment}` : null,
      `  когда: ${mark.createdAt.toISOString()}`,
    ]
      .filter(Boolean)
      .join("\n")
  );
  console.log("");
}

// Заодно — состояние прохождения уроков: владелец сообщил, что часть уроков
// не сохраняется как пройденная.
const progress = await prisma.lessonProgress.findMany({
  include: {
    lesson: { select: { slug: true, sort: true, module: { select: { slug: true, sort: true } } } },
    user: { select: { email: true } },
  },
  orderBy: { updatedAt: "asc" },
});

console.log(`\n=== Прохождение уроков: ${progress.length} записей ===\n`);
for (const item of progress) {
  console.log(
    `${item.user.email} · ${item.lesson.module?.slug ?? "—"}/${item.lesson.slug} · ${item.status} · ${item.updatedAt.toISOString()}`
  );
}

await prisma.$disconnect();
