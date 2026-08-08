import { ApiError } from "./respond";

/**
 * Ограничение частоты обращений (раздел 10 техзадания).
 *
 * СОЗНАТЕЛЬНОЕ УПРОЩЕНИЕ. Счётчики живут в памяти процесса. Это значит:
 * при нескольких обработчиках у каждого свой счёт, а при перезапуске счёт
 * обнуляется. Для защиты от перебора паролей одним человеком этого достаточно,
 * от распределённой нагрузки — нет.
 *
 * Когда появится настоящий поток посетителей, счётчики надо перенести в общее
 * хранилище (Redis или Upstash). Тогда меняется только внутренность этого
 * файла: наружу смотрит одна функция.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** Раз в пять минут выкидываем протухшие записи, чтобы память не росла. */
let lastCleanup = Date.now();
function cleanup(now: number) {
  if (now - lastCleanup < 5 * 60_000) return;
  lastCleanup = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitOptions {
  /** Сколько обращений разрешено в окне */
  limit: number;
  /** Длина окна в секундах */
  windowSeconds: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function checkRateLimit(
  key: string,
  { limit, windowSeconds }: RateLimitOptions,
  now = Date.now()
): RateLimitResult {
  cleanup(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  if (bucket.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { allowed: true, remaining: limit - bucket.count, retryAfterSeconds: 0 };
}

/** Бросает понятную ошибку, если предел исчерпан. */
export function enforceRateLimit(key: string, options: RateLimitOptions): void {
  const result = checkRateLimit(key, options);
  if (!result.allowed) {
    throw new ApiError(
      "too_many_requests",
      `Слишком много попыток. Попробуй снова через ${result.retryAfterSeconds} с.`
    );
  }
}

/**
 * Ключ ограничения по обращающемуся. Берём адрес из заголовков, которые
 * проставляет Vercel; при отсутствии — общий ключ, чтобы ограничение всё же
 * работало, пусть и грубее.
 */
export function clientKey(request: Request, scope: string): string {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return `${scope}:${ip}`;
}

/** Только для тестов: очистить состояние между проверками. */
export function resetRateLimits() {
  buckets.clear();
}
