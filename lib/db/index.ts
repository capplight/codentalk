import { PrismaClient } from "./generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

/**
 * Подключение к базе данных.
 *
 * В разработке Next.js перезагружает модули при каждом изменении файла, и без
 * сохранения клиента в глобальной области на каждой перезагрузке создавалось бы
 * новое подключение — база быстро упёрлась бы в предел числа соединений.
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "Не задан DATABASE_URL. Скопируй .env.example в .env.local и заполни его."
    );
  }
  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
}

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
