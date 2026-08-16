/**
 * Образец сертификата — чтобы увидеть документ, не проходя курс.
 *
 * Заработать сертификат честно можно только пройдя все 202 урока, сдав все 25
 * проверочных работ и экзамен. Смотреть на вид документа при каждой правке
 * оформления, проходя курс заново, нельзя — отсюда этот скрипт.
 *
 * Запуск:  npm run obrazec
 * Убрать:  npm run obrazec -- --clean
 *
 * ПОСЛЕ ПРОСМОТРА УБИРАТЬ ОБЯЗАТЕЛЬНО. Это живой аккаунт с живым сертификатом
 * в рабочей базе: оставленный, он будет считаться выданным и попадёт в любую
 * будущую сводку.
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });

const { prisma } = await import("../lib/db/index.ts");
const { formatSerial } = await import("../lib/domain/certificate.ts");
const { randomBytes } = await import("node:crypto");

const POCHTA = "vremenno-sertifikat@codentalk.kz";

if (process.argv.includes("--clean")) {
  const removed = await prisma.user.deleteMany({ where: { email: POCHTA } });
  console.log(`Убрано аккаунтов: ${removed.count}`);
  await prisma.$disconnect();
  process.exit(0);
}

await prisma.user.deleteMany({ where: { email: POCHTA } });

const course = await prisma.course.findUnique({
  where: { slug: "english-starter" },
  select: { id: true },
});

const user = await prisma.user.create({
  data: { email: POCHTA, displayName: "Айгуль Смагулова" },
  select: { id: true },
});

const serial = formatSerial(randomBytes(12));
await prisma.certificate.create({
  data: { userId: user.id, courseId: course!.id, serial, finalScore: 92 },
});

console.log(`Номер: ${serial}`);
console.log(`Проверка: http://localhost:3010/certificate/${serial}`);
console.log(`Бланк:    http://localhost:3010/certificate/${serial}/blank`);

await prisma.$disconnect();
