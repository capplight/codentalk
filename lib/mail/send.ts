/**
 * Отправка писем.
 *
 * Пока письмо у нас одно — со ссылкой на смену забытого пароля, — но служба
 * вынесена отдельно: следом появятся подтверждение почты и уведомление о
 * сертификате, и все они должны уходить одинаково.
 *
 * Отправляем через Resend по обычному запросу, без отдельной библиотеки:
 * запрос там один, а лишняя зависимость — это лишний повод для обновлений и
 * лишний вес сборки.
 *
 * ЕСЛИ КЛЮЧА НЕТ, письмо не уходит, и служба честно об этом говорит.
 * Молчаливый успех здесь недопустим: человек ждал бы письма, которого нет.
 */

export class PochtaNeNastroena extends Error {
  constructor() {
    super("Отправка писем не настроена: нет RESEND_API_KEY или MAIL_FROM");
    this.name = "PochtaNeNastroena";
  }
}

export function pochtaNastroena(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.MAIL_FROM);
}

export interface Pismo {
  komu: string;
  tema: string;
  /** Простой текст. Письмо без разметки доходит вернее и не выглядит рассылкой. */
  tekst: string;
}

export async function otpravitPismo({ komu, tema, tekst }: Pismo): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  if (!key || !from) throw new PochtaNeNastroena();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [komu], subject: tema, text: tekst }),
  });

  if (!response.ok) {
    // Тело ответа пишем в журнал сервера, наружу оно не уходит: там бывает
    // и наш адрес отправителя, и подробности учётной записи.
    const podrobnosti = await response.text().catch(() => "");
    throw new Error(`Письмо не отправлено (${response.status}): ${podrobnosti.slice(0, 300)}`);
  }
}
