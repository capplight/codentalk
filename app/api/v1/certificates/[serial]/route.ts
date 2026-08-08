import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { isValidSerialFormat } from "@/lib/domain/certificate";
import { clientKey, enforceRateLimit } from "@/lib/api/rate-limit";

type Params = { params: Promise<{ serial: string }> };

/**
 * Публичная проверка сертификата — БЕЗ входа в аккаунт.
 *
 * Именно эту ссылку ученик отправляет работодателю, поэтому она должна
 * открываться у любого. Наружу отдаём минимум: имя, курс, дату. Ни почты, ни
 * идентификаторов — страница проверки не должна становиться способом собирать
 * сведения об учениках.
 *
 * Частота ограничена: иначе номера сертификатов можно было бы перебирать.
 */
export const GET = handler(async (request: Request, { params }: Params) => {
  enforceRateLimit(clientKey(request, "certificate-check"), {
    limit: 30,
    windowSeconds: 60,
  });

  const { serial } = await params;

  // Отсеиваем мусор до обращения к базе
  if (!isValidSerialFormat(serial.toUpperCase())) {
    throw new ApiError("not_found", "Сертификат с таким номером не найден");
  }

  const certificate = await prisma.certificate.findUnique({
    where: { serial: serial.toUpperCase() },
    select: {
      serial: true,
      issuedAt: true,
      finalScore: true,
      revokedAt: true,
      user: { select: { displayName: true } },
      course: { select: { title: true, level: true } },
    },
  });

  if (!certificate) {
    throw new ApiError("not_found", "Сертификат с таким номером не найден");
  }

  return ok({
    valid: certificate.revokedAt === null,
    revoked: certificate.revokedAt !== null,
    certificate: {
      serial: certificate.serial,
      issuedAt: certificate.issuedAt,
      finalScore: certificate.finalScore,
      learnerName: certificate.user.displayName,
      course: certificate.course.title,
      level: certificate.course.level,
    },
  });
});
