import { auth } from "@/auth";
import { ApiError } from "./respond";

export interface CurrentUser {
  id: string;
  email: string;
  role: string;
}

/** Кто сейчас обращается — или пусто, если не вошёл. */
export async function currentUser(): Promise<CurrentUser | null> {
  const session = await auth();
  if (!session?.user?.id) return null;
  return {
    id: session.user.id,
    email: session.user.email ?? "",
    role: session.user.role ?? "learner",
  };
}

/**
 * Требует входа. Права проверяются на сервере при каждом обращении — скрытая
 * в интерфейсе кнопка защитой не является (раздел 10 техзадания).
 */
export async function requireUser(): Promise<CurrentUser> {
  const user = await currentUser();
  if (!user) {
    throw new ApiError("unauthorized", "Нужно войти в аккаунт");
  }
  return user;
}

export async function requireAdmin(): Promise<CurrentUser> {
  const user = await requireUser();
  if (user.role !== "admin") {
    throw new ApiError("forbidden", "Недостаточно прав");
  }
  return user;
}
