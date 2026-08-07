import type { DefaultSession } from "next-auth";

/**
 * Расширяем типы Auth.js: нам нужны идентификатор и роль пользователя
 * прямо в сессии, чтобы не ходить за ними в базу на каждой странице.
 */
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}
