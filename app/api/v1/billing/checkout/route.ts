import { handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { getBillingProvider } from "@/lib/billing/provider";

/**
 * Начать оформление подписки.
 *
 * Сейчас за этим стоит заглушка: настоящая система выбирается после того, как
 * владелец решит, где регистрируется дело (Stripe с Казахстаном не работает).
 * Наружу это выглядит одинаково, поэтому страницы менять не придётся.
 */
export const POST = handler(async () => {
  const user = await requireUser();
  const provider = getBillingProvider();
  const { redirectUrl } = await provider.createCheckout(user.id, "premium");
  return ok({ redirectUrl, provider: provider.name });
});
