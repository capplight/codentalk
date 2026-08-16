import { prisma } from "@/lib/db";
import { zabylSchema } from "@/lib/auth/schema";
import { sozdatKod, ZHIZN_KODA_MINUT } from "@/lib/auth/reset";
import { otpravitPismo, pochtaNastroena } from "@/lib/mail/send";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { clientKey, enforceRateLimit } from "@/lib/api/rate-limit";

/**
 * Просьба прислать ссылку на смену забытого пароля.
 *
 * ГЛАВНОЕ ПРАВИЛО ЭТОГО МЕТОДА: ответ одинаков и для существующего адреса, и
 * для несуществующего. Иначе любой желающий подставляет адреса по списку и
 * узнаёт, кто у нас учится. Ученики — часто дети, и такой список выдавать
 * нельзя.
 *
 * Из этого следует и порядок проверок: настроена ли отправка писем, выясняем
 * ДО того, как искать человека в базе. Иначе разница в ответах вернулась бы с
 * другой стороны.
 */
export const POST = handler(async (request: Request) => {
  // Ссылка на смену пароля уходит на чужую почту, поэтому предел строже, чем
  // у регистрации: десяток писем в час с одного адреса — уже беспокойство
  // человеку, а не помощь.
  enforceRateLimit(clientKey(request, "zabyl"), { limit: 5, windowSeconds: 60 * 60 });

  const { email } = zabylSchema.parse(await readJson(request));

  if (!pochtaNastroena()) {
    console.error("Просьба о смене пароля пришла, а отправка писем не настроена");
    throw new ApiError(
      "internal_error",
      "Отправка писем пока не настроена. Напиши преподавателю — пароль сменят вручную."
    );
  }

  // Второй предел — по самому адресу почты. Без него один человек завалил бы
  // чужой ящик письмами, меняя сеть.
  enforceRateLimit(`zabyl-adres:${email}`, { limit: 3, windowSeconds: 60 * 60 });

  const user = await prisma.user.findUnique({ where: { email }, select: { id: true } });

  if (user) {
    // Прежние неиспользованные ссылки гасим: живой должна быть одна, последняя.
    await prisma.passwordResetToken.updateMany({
      where: { userId: user.id, usedAt: null },
      data: { usedAt: new Date() },
    });

    const { kod, otpechatok, godenDo } = sozdatKod();
    await prisma.passwordResetToken.create({
      data: { userId: user.id, tokenHash: otpechatok, expiresAt: godenDo },
    });

    const osnova = process.env.AUTH_URL ?? "https://codentalk.kz";
    const ssylka = `${osnova.replace(/\/$/, "")}/novyy-parol?kod=${encodeURIComponent(kod)}`;

    await otpravitPismo({
      komu: email,
      tema: "Смена пароля на CodeNTalk",
      tekst:
        `Кто-то попросил сменить пароль на CodeNTalk.\n\n` +
        `Если это ты, открой ссылку и придумай новый пароль:\n${ssylka}\n\n` +
        `Ссылка годна ${ZHIZN_KODA_MINUT} минут и срабатывает один раз.\n\n` +
        `Если это не ты — письмо можно не читать дальше: пароль остаётся прежним, ` +
        `пока по ссылке никто не прошёл.\n`,
    });
  }

  return ok({
    message:
      "Если такая почта у нас есть, письмо со ссылкой уже отправлено. Проверь ящик и папку «Спам».",
  });
});
