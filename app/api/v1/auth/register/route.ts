import { Prisma } from "@/lib/db/generated/client";
import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/auth/password";
import { registerSchema } from "@/lib/auth/schema";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { clientKey, enforceRateLimit } from "@/lib/api/rate-limit";

/**
 * Регистрация нового ученика.
 *
 * Частота ограничена: без этого один человек мог бы создать тысячу аккаунтов
 * за минуту.
 */
export const POST = handler(async (request: Request) => {
  enforceRateLimit(clientKey(request, "register"), {
    limit: 5,
    windowSeconds: 15 * 60,
  });

  const parsed = registerSchema.parse(await readJson(request));
  const { email, password, displayName } = parsed;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        displayName,
        passwordHash: await hashPassword(password),
        // Бесплатный доступ есть у всех с первой секунды: английский и
        // введение в веб-разработку открыты без оплаты.
        subscriptions: { create: { plan: "free", status: "active" } },
      },
      select: { id: true, email: true, displayName: true },
    });

    return ok({ user }, 201);
  } catch (error) {
    // Занятый адрес почты. Проверять отдельным запросом «есть ли такой
    // пользователь» нельзя: между проверкой и вставкой возможна гонка, и
    // двое одновременно зарегистрировались бы на один адрес. Полагаемся на
    // ограничение уникальности в базе.
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ApiError(
        "conflict",
        "На эту почту уже есть аккаунт. Попробуй войти."
      );
    }
    throw error;
  }
});
