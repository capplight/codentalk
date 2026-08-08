import { handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { buildOverview } from "@/lib/api/overview";

/**
 * Данные личного кабинета для будущего мобильного приложения.
 *
 * Сама страница кабинета берёт их не отсюда, а из той же функции напрямую:
 * ходить по сети к самому себе ради собственной страницы бессмысленно.
 * Считает при этом одно и то же — расхождению взяться неоткуда.
 */
export const GET = handler(async () => {
  const user = await requireUser();
  return ok(await buildOverview(user.id));
});
