import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// Инструмент Prisma запускается отдельно от Next.js и сам переменные окружения
// не подхватывает. Порядок как у Next.js: сначала .env.local, потом .env.
loadEnv({ path: ".env.local", quiet: true });
loadEnv({ quiet: true });

/**
 * Настройки Prisma 7. Адрес базы данных живёт здесь, а не в schema.prisma —
 * так требует седьмая версия.
 *
 * Адрес намеренно берётся мягко, без падения при его отсутствии: команда
 * `prisma generate` к базе не подключается, а она запускается автоматически
 * после установки зависимостей. Если бы конфигурация требовала адрес всегда,
 * `npm install` на свежей копии репозитория заканчивался бы ошибкой.
 * При настоящем обращении к базе Prisma сама сообщит, что адрес пуст.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
  migrations: {
    path: "prisma/migrations",
  },
});
