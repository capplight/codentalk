import { prisma } from "@/lib/db";
import { smenaParolyaSchema } from "@/lib/auth/schema";
import { hashPassword } from "@/lib/auth/password";
import { kodGoden, otpechatokKoda } from "@/lib/auth/reset";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { clientKey, enforceRateLimit } from "@/lib/api/rate-limit";

/**
 * Смена пароля по коду из письма.
 *
 * Просроченный код и код, которого не было вовсе, дают одно и то же
 * сообщение: разница подсказывала бы подбирающему, что он на верном пути.
 */
export const POST = handler(async (request: Request) => {
  enforceRateLimit(clientKey(request, "novyy-parol"), { limit: 10, windowSeconds: 60 * 60 });

  const { kod, password } = smenaParolyaSchema.parse(await readJson(request));

  const zapis = await prisma.passwordResetToken.findUnique({
    where: { tokenHash: otpechatokKoda(kod) },
    select: { id: true, userId: true, expiresAt: true, usedAt: true },
  });

  if (!zapis || !kodGoden(zapis)) {
    throw new ApiError(
      "bad_request",
      "Ссылка устарела или уже сработала. Попроси новую — она придёт письмом."
    );
  }

  // Пароль и отметка «код сработал» меняются вместе. Порознь возможен случай,
  // когда пароль сменился, а ссылка осталась рабочей — и по ней сменят ещё раз.
  await prisma.$transaction([
    prisma.user.update({
      where: { id: zapis.userId },
      data: { passwordHash: await hashPassword(password) },
    }),
    prisma.passwordResetToken.update({
      where: { id: zapis.id },
      data: { usedAt: new Date() },
    }),
    prisma.passwordResetToken.updateMany({
      where: { userId: zapis.userId, usedAt: null },
      data: { usedAt: new Date() },
    }),
  ]);

  return ok({ message: "Пароль сменён. Теперь войди с новым." });
});
