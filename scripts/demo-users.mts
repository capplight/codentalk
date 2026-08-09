/**
 * Учебные аккаунты для просмотра сайта.
 *
 * Запуск:  npx tsx scripts/demo-users.mts
 * Удалить: npx tsx scripts/demo-users.mts --clean
 *
 * Аккаунты нарочно в двух состояниях: один с наработанным прогрессом и
 * сертификатом, другой чистый — чтобы видеть кабинет и полным, и пустым.
 * Пустой кабинет новичка обычно забывают проверить, а видит его как раз
 * каждый первый пришедший.
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });

const { prisma } = await import("../lib/db/index.ts");
const { hashPassword } = await import("../lib/auth/password.ts");
const { formatSerial } = await import("../lib/domain/certificate.ts");
const { startOfMonth } = await import("../lib/domain/enrollment.ts");
const { randomBytes } = await import("node:crypto");

const PASSWORD = "codentalk2026";
const WITH_PROGRESS = "demo@codentalk.kz";
const FRESH = "new@codentalk.kz";

if (process.argv.includes("--clean")) {
  const removed = await prisma.user.deleteMany({
    where: { email: { in: [WITH_PROGRESS, FRESH] } },
  });
  console.log(`Удалено аккаунтов: ${removed.count}`);
  await prisma.$disconnect();
  process.exit(0);
}

await prisma.user.deleteMany({ where: { email: { in: [WITH_PROGRESS, FRESH] } } });
const passwordHash = await hashPassword(PASSWORD);

/* ---------- 1. Чистый аккаунт ---------- */
await prisma.user.create({
  data: {
    email: FRESH,
    displayName: "Айгуль Смагулова",
    passwordHash,
    subscriptions: { create: { plan: "free", status: "active" } },
  },
});

/* ---------- 2. Аккаунт с прогрессом ---------- */
const user = await prisma.user.create({
  data: {
    email: WITH_PROGRESS,
    displayName: "Алим Нұрлан",
    passwordHash,
    subscriptions: { create: { plan: "free", status: "active" } },
  },
});

/*
 * Скрипт опирается на то, что есть в базе, а не на заранее известные имена
 * курсов: содержание пишется, курсы появляются и переименовываются, и жёсткие
 * имена ломали бы демонстрацию при каждой правке.
 *
 * Берём два курса: в первом отмечаем всё пройденным (под сертификат), во втором
 * — примерно треть, чтобы в кабинете было «Продолжить» и полоса успехов.
 */
const available = await prisma.course.findMany({
  where: { isPublished: true, lessons: { some: {} } },
  orderBy: { slug: "asc" },
  include: { lessons: { orderBy: { sort: "asc" } } },
});

if (available.length === 0) {
  throw new Error(
    "В базе нет ни одного курса с уроками. Сначала перенеси содержание: npm run db:seed:courses"
  );
}

const [done, ...rest] = available;
const started = rest[0];

const month = startOfMonth(new Date());
await prisma.enrollment.createMany({
  data: [
    { userId: user.id, courseId: done.id, periodMonth: month, completedAt: new Date() },
    ...(started ? [{ userId: user.id, courseId: started.id, periodMonth: month }] : []),
  ],
});

// Первый курс пройден целиком — под сертификат
await prisma.lessonProgress.createMany({
  data: done.lessons.map((l) => ({
    userId: user.id,
    lessonId: l.id,
    status: "completed" as const,
    completedAt: new Date(),
  })),
});

// Второй пройден примерно на треть — чтобы в кабинете было «Продолжить»
if (started) {
  const partial = started.lessons.slice(0, Math.max(1, Math.floor(started.lessons.length / 3)));
  await prisma.lessonProgress.createMany({
    data: partial.map((l) => ({
      userId: user.id,
      lessonId: l.id,
      status: "completed" as const,
      completedAt: new Date(),
    })),
  });
}

const certificate = await prisma.certificate.create({
  data: {
    userId: user.id,
    courseId: done.id,
    serial: formatSerial(randomBytes(16)),
    finalScore: 92,
  },
});

console.log(`
Аккаунты созданы. Пароль у обоих одинаковый.

  Почта:  ${WITH_PROGRESS}
  Пароль: ${PASSWORD}
  Что внутри: «${done.title}» пройден и есть сертификат${
    started ? `, «${started.title}» — на треть` : ""
  } —
              в кабинете будет «Продолжить» и полоса прогресса.

  Почта:  ${FRESH}
  Пароль: ${PASSWORD}
  Что внутри: ничего. Так кабинет выглядит у пришедшего впервые.

Страница сертификата (открывается без входа):
  http://localhost:3010/certificate/${certificate.serial}

Удалить оба аккаунта:  npx tsx scripts/demo-users.mts --clean
`);

await prisma.$disconnect();
