import { z } from "zod";

/**
 * Проверка данных регистрации и входа.
 *
 * Живёт отдельным файлом без импорта базы и React: те же правила нужны и на
 * сервере, и в форме на странице, и в будущем мобильном приложении.
 */

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "Укажи почту")
  .email("Проверь адрес почты — похоже, в нём опечатка");

/**
 * Минимум восемь знаков и без ограничения сверху в пределах разумного.
 * Требования вида «обязательно цифра и заглавная буква» намеренно не вводим:
 * они заставляют людей придумывать «Parol1!» вместо длинной фразы, которая
 * надёжнее.
 */
export const passwordSchema = z
  .string()
  .min(8, "Пароль должен быть не короче восьми знаков")
  .max(200, "Слишком длинный пароль");

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  displayName: z
    .string()
    .trim()
    .min(1, "Как тебя зовут?")
    .max(80, "Слишком длинное имя"),
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Введи пароль"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
