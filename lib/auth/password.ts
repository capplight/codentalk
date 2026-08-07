import { hash, verify } from "@node-rs/argon2";

/**
 * Хеширование паролей. Argon2id — по разделу 10 техзадания.
 * Параметры взяты из рекомендаций OWASP: 19 МиБ памяти, 2 прохода.
 */
const OPTIONS = {
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
} as const;

export function hashPassword(plain: string): Promise<string> {
  return hash(plain, OPTIONS);
}

/**
 * Проверка пароля. Возвращает false вместо исключения, если хеш повреждён или
 * отсутствует: вызывающему коду важен только ответ «пустили или нет», а
 * различать «неверный пароль» и «битый хеш» наружу нельзя — это подсказка
 * тому, кто подбирает.
 */
export async function verifyPassword(
  storedHash: string | null | undefined,
  plain: string
): Promise<boolean> {
  if (!storedHash) return false;
  try {
    return await verify(storedHash, plain, OPTIONS);
  } catch {
    return false;
  }
}
