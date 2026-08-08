import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { getBillingProvider } from "@/lib/billing/provider";

/**
 * Включение подписки заглушкой — ТОЛЬКО ДЛЯ РАЗРАБОТКИ.
 *
 * Метод намеренно отказывается работать, когда включена настоящая платёжная
 * система: иначе он стал бы способом получить платный доступ бесплатно.
 * Настоящая подписка включается исключительно по оповещению от платёжной
 * системы, а не по возврату браузера со страницы «успешно» (раздел 10).
 */
export const GET = handler(async () => {
  const user = await requireUser();
  const provider = getBillingProvider();

  if (provider.name !== "stub") {
    throw new ApiError(
      "forbidden",
      "Этот способ работает только при отключённой оплате"
    );
  }
  if (process.env.NODE_ENV === "production") {
    throw new ApiError("forbidden", "Недоступно на рабочем сайте");
  }

  const now = new Date();
  const periodEnd = new Date(now);
  periodEnd.setUTCMonth(periodEnd.getUTCMonth() + 1);

  await prisma.subscription.updateMany({
    where: { userId: user.id, plan: "premium" },
    data: { status: "canceled" },
  });

  const subscription = await prisma.subscription.create({
    data: {
      userId: user.id,
      plan: "premium",
      status: "active",
      provider: "stub",
      currentPeriodStart: now,
      currentPeriodEnd: periodEnd,
    },
    select: { plan: true, status: true, currentPeriodEnd: true },
  });

  return ok({ subscription, note: "Подписка включена заглушкой, деньги не списаны" });
});
