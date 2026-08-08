import { NextResponse } from "next/server";
import { ZodError } from "zod";

/**
 * Единый вид ответов программного интерфейса.
 *
 * Все ошибки выглядят одинаково: { error: { code, message, details? } }.
 * Код предназначен для программы, сообщение — для человека, поэтому оно на
 * русском и без технических подробностей.
 */

export type ApiErrorCode =
  | "bad_request"
  | "validation_failed"
  | "unauthorized"
  | "forbidden"
  | "not_found"
  | "conflict"
  | "needs_subscription"
  | "no_free_slots"
  | "too_many_requests"
  | "internal_error";

const STATUS: Record<ApiErrorCode, number> = {
  bad_request: 400,
  validation_failed: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
  conflict: 409,
  needs_subscription: 402,
  no_free_slots: 409,
  too_many_requests: 429,
  internal_error: 500,
};

export function ok<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function fail(
  code: ApiErrorCode,
  message: string,
  details?: unknown,
  extraHeaders?: Record<string, string>
) {
  return NextResponse.json(
    { error: details === undefined ? { code, message } : { code, message, details } },
    { status: STATUS[code], headers: extraHeaders }
  );
}

/** Ошибка, которую можно бросить откуда угодно и получить корректный ответ. */
export class ApiError extends Error {
  constructor(
    readonly code: ApiErrorCode,
    message: string,
    readonly details?: unknown
  ) {
    super(message);
  }
}

/**
 * Обёртка для обработчиков запросов.
 *
 * Ловит всё необработанное и отдаёт 500 без подробностей: текст настоящей
 * ошибки может содержать части запроса к базе или адреса подключения, и
 * показывать их наружу нельзя. В журнал сервера при этом пишем полностью.
 */
export function handler<Args extends unknown[]>(
  fn: (...args: Args) => Promise<Response>
) {
  return async (...args: Args): Promise<Response> => {
    try {
      return await fn(...args);
    } catch (error) {
      if (error instanceof ApiError) {
        return fail(error.code, error.message, error.details);
      }
      if (error instanceof ZodError) {
        return fail(
          "validation_failed",
          "Проверь переданные данные",
          error.flatten().fieldErrors
        );
      }
      console.error("Необработанная ошибка обработчика:", error);
      return fail("internal_error", "Что-то пошло не так. Попробуй ещё раз.");
    }
  };
}

/** Разбор тела запроса с понятной ошибкой вместо падения. */
export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    throw new ApiError("bad_request", "Не удалось разобрать запрос");
  }
}
