import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/password";
import { loginSchema } from "@/lib/auth/schema";

/**
 * Настройка входа в аккаунт (Auth.js).
 *
 * Способ хранения сессии — токен, а не запись в базе: при входе по паролю
 * Auth.js поддерживает только его. Таблицы сессий в схеме уже есть — они
 * понадобятся, когда добавим вход через сторонние сервисы.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Почта", type: "email" },
        password: { label: "Пароль", type: "password" },
      },
      async authorize(raw) {
        const parsed = loginSchema.safeParse(raw);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;
        const user = await prisma.user.findUnique({ where: { email } });

        // Пароль проверяем даже когда пользователь не найден — иначе по
        // времени ответа можно понять, какие адреса зарегистрированы.
        const ok = await verifyPassword(user?.passwordHash, password);
        if (!user || !ok) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.displayName,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "learner";
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
