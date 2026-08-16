import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

/**
 * Коды для смены забытого пароля.
 *
 * Файл нарочно не знает ни про базу, ни про почту: здесь только правила —
 * какой код считается годным и как он превращается в отпечаток. Это позволяет
 * проверить их тестами без поднятия сервера.
 *
 * Почему в базе хранится отпечаток, а не сам код: код из письма равносилен
 * паролю. Если содержимое базы однажды утечёт, по отпечатку войти нельзя.
 */

/** Час — достаточно, чтобы дойти до почты, и мало, чтобы код успел разойтись. */
export const ZHIZN_KODA_MINUT = 60;

/** Длина случайной части в байтах. 32 байта — 256 бит, перебор невозможен. */
const DLINA_BAYT = 32;

export interface NovyyKod {
  /** Уходит в письмо и больше нигде не хранится. */
  kod: string;
  /** Ложится в базу вместо кода. */
  otpechatok: string;
  /** До какого мгновения код годен. */
  godenDo: Date;
}

export function otpechatokKoda(kod: string): string {
  return createHash("sha256").update(kod).digest("hex");
}

export function sozdatKod(seychas = new Date()): NovyyKod {
  // base64url, а не hex: короче в письме и не ломается переносом строки.
  const kod = randomBytes(DLINA_BAYT).toString("base64url");
  return {
    kod,
    otpechatok: otpechatokKoda(kod),
    godenDo: new Date(seychas.getTime() + ZHIZN_KODA_MINUT * 60_000),
  };
}

/**
 * Сравнение отпечатков за постоянное время.
 *
 * Обычное сравнение строк заканчивается на первом несовпавшем знаке, и по
 * времени ответа можно подбирать код по одному знаку. Здесь ищут по отпечатку
 * в базе, где такой возможности и так нет, но правило одно для всех сравнений
 * тайного: иначе однажды его забудут там, где оно важно.
 */
export function otpechatkiSovpadayut(a: string, b: string): boolean {
  const first = Buffer.from(a, "utf8");
  const second = Buffer.from(b, "utf8");
  if (first.length !== second.length) return false;
  return timingSafeEqual(first, second);
}

/** Годен ли код: не просрочен и ещё не использован. */
export function kodGoden(
  zapis: { expiresAt: Date; usedAt: Date | null },
  seychas = new Date()
): boolean {
  if (zapis.usedAt !== null) return false;
  return zapis.expiresAt.getTime() > seychas.getTime();
}
