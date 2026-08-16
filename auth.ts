import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/password";
import { loginSchema } from "@/lib/auth/schema";
import { checkRateLimit, clientKey } from "@/lib/api/rate-limit";

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
      async authorize(raw, request) {
        const parsed = loginSchema.safeParse(raw);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        /*
         * Ограничение попыток входа.
         *
         * Регистрация была им прикрыта с самого начала, а вход — нет: подбирать
         * пароль можно было сколько угодно. Считаем по двум ключам сразу. По
         * адресу почты — чтобы один аккаунт нельзя было ломать перебором с
         * тысячи разных сетей. По сетевому адресу — чтобы с одного места нельзя
         * было перебирать сами адреса почты.
         *
         * Пределы намеренно щедрые: человек, забывший пароль, пробует три-четыре
         * раза, а подбор при таком пределе бессмыслен.
         *
         * ЧЕГО ЭТА ЗАЩИТА НЕ УМЕЕТ: счётчики живут в памяти обработчика, а на
         * рабочем сайте обработчиков несколько. Настоящий предел появится с
         * общим хранилищем — тогда меняется только внутренность rate-limit.ts.
         */
        const poAdresu = checkRateLimit(`vhod-pochta:${email}`, {
          limit: 10,
          windowSeconds: 15 * 60,
        });
        const poSeti = checkRateLimit(clientKey(request as Request, "vhod"), {
          limit: 30,
          windowSeconds: 15 * 60,
        });
        // Отказ здесь неотличим от неверного пароля. Это сознательно: точное
        // сообщение подсказало бы подбирающему, что предел вообще есть.
        if (!poAdresu.allowed || !poSeti.allowed) return null;

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
