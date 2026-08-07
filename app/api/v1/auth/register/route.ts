import { NextResponse } from "next/server";
import { Prisma } from "@/lib/db/generated/client";
import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/auth/password";
import { registerSchema } from "@/lib/auth/schema";

/**
 * Регистрация. Раздел 9 техзадания.
 *
 * Ошибки отдаются в едином виде { error: { code, message } } — так же, как
 * условились для всего программного интерфейса.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: { code: "bad_request", message: "Не удалось разобрать запрос" } },
      { status: 400 }
    );
  }

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: {
          code: "validation_failed",
          message: "Проверь заполненные поля",
          details: parsed.error.flatten().fieldErrors,
        },
      },
      { status: 400 }
    );
  }

  const { email, password, displayName } = parsed.data;

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

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    // Занятый адрес почты. Проверять отдельным запросом «есть ли такой
    // пользователь» нельзя: между проверкой и вставкой возможна гонка, и
    // двое одновременно зарегистрировались бы на один адрес. Полагаемся на
    // ограничение уникальности в базе.
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          error: {
            code: "email_taken",
            message: "На эту почту уже есть аккаунт. Попробуй войти.",
          },
        },
        { status: 409 }
      );
    }
    throw error;
  }
}
