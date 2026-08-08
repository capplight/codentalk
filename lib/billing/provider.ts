/**
 * Приём оплаты. Раздел 11 документа docs/TZ-platform-v2.md.
 *
 * ПОЧЕМУ ЗДЕСЬ ЗАГЛУШКА, А НЕ НАСТОЯЩАЯ СИСТЕМА.
 * Stripe не работает с Казахстаном для получения выплат, а выбор между
 * посредниками (Paddle, Lemon Squeezy) и местными системами (Freedom Pay,
 * CloudPayments, Kaspi) зависит от того, где владелец зарегистрирует дело.
 * Пока ответа нет, разработку не останавливаем: логика доступа полностью
 * пишется и проверяется на заглушке, а подключение настоящей системы —
 * это замена одной реализации этого же интерфейса.
 */

export type BillingPlan = "premium";

export interface CheckoutResult {
  redirectUrl: string;
}

export interface BillingEvent {
  type: "subscription_started" | "subscription_renewed" | "subscription_canceled" | "payment_failed";
  userId: string;
  providerCustomerId?: string;
  providerSubscriptionId?: string;
  currentPeriodEnd?: Date;
}

export interface BillingProvider {
  readonly name: string;
  /** Ссылка на оплату */
  createCheckout(userId: string, plan: BillingPlan): Promise<CheckoutResult>;
  /** Ссылка на управление подпиской: смена карты, отмена */
  createPortalLink(userId: string): Promise<CheckoutResult>;
  /** Разбор оповещения от платёжной системы */
  parseWebhook(request: Request): Promise<BillingEvent | null>;
}

/**
 * Заглушка для разработки. Денег не берёт, но проходит весь путь: ссылка,
 * возврат, оповещение. Это позволяет проверить логику доступа целиком.
 */
export class StubBillingProvider implements BillingProvider {
  readonly name = "stub";

  async createCheckout(userId: string): Promise<CheckoutResult> {
    // Возвращаем на страницу, которая сразу включит подписку. В настоящей
    // системе здесь была бы ссылка на её сайт оплаты.
    return { redirectUrl: `/api/v1/billing/stub-complete?user=${userId}` };
  }

  async createPortalLink(): Promise<CheckoutResult> {
    return { redirectUrl: "/settings/subscription" };
  }

  async parseWebhook(): Promise<BillingEvent | null> {
    // У заглушки оповещений нет
    return null;
  }
}

let provider: BillingProvider = new StubBillingProvider();

export function getBillingProvider(): BillingProvider {
  return provider;
}

/** Только для тестов: подменить систему приёма оплаты. */
export function setBillingProvider(next: BillingProvider) {
  provider = next;
}
