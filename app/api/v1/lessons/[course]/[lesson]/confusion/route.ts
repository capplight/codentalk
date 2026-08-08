import { z } from "zod";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { checkCourseAccess } from "@/lib/api/access";

const bodySchema = z.object({
  /** Имя блока внутри урока. Задаётся автором и не меняется после выхода урока. */
  blockId: z.string().min(1).max(80),
  /** Что именно неясно, словами. Необязательно: пометить должно быть можно молча. */
  comment: z.string().max(2000).optional(),
});

type Params = { params: Promise<{ course: string; lesson: string }> };

/**
 * Пометка «непонятно» на месте урока.
 *
 * Ученику это список мест, куда он собирался вернуться. Владельцу — сведения
 * о качестве урока: если один и тот же абзац помечает половина учеников, плох
 * абзац, а не ученики.
 *
 * Доступ проверяется заново, как и везде: скрытая в интерфейсе кнопка защитой
 * не является.
 */
async function findLesson(courseSlug: string, lessonSlug: string, userId: string) {
  const lesson = await prisma.lesson.findFirst({
    where: { slug: lessonSlug, course: { slug: courseSlug } },
    select: { id: true, course: { select: { id: true, access: true, isPublished: true } } },
  });

  if (!lesson || !lesson.course.isPublished) {
    throw new ApiError("not_found", "Урок не найден");
  }

  const access = await checkCourseAccess(userId, lesson.course.id, lesson.course.access);
  if (!access.allowed) {
    throw new ApiError(
      access.reason === "needs_subscription" ? "needs_subscription" : "no_free_slots",
      access.reason === "needs_subscription"
        ? "Этот курс доступен по подписке"
        : "Этот курс сейчас не входит в два активных"
    );
  }

  return lesson;
}

export const POST = handler(async (request: Request, { params }: Params) => {
  const user = await requireUser();
  const { course, lesson: lessonSlug } = await params;
  const body = bodySchema.parse(await readJson(request));

  const lesson = await findLesson(course, lessonSlug, user.id);

  const mark = await prisma.confusionMark.upsert({
    where: {
      userId_lessonId_blockId: {
        userId: user.id,
        lessonId: lesson.id,
        blockId: body.blockId,
      },
    },
    create: {
      userId: user.id,
      lessonId: lesson.id,
      blockId: body.blockId,
      comment: body.comment,
    },
    // Повторное нажатие с пояснением дописывает его, а не заводит вторую пометку
    update: { comment: body.comment ?? undefined, resolvedAt: null },
    select: { blockId: true, createdAt: true },
  });

  return ok({ marked: true, blockId: mark.blockId, at: mark.createdAt });
});

/** Снять пометку: ученик вернулся и разобрался. */
export const DELETE = handler(async (request: Request, { params }: Params) => {
  const user = await requireUser();
  const { course, lesson: lessonSlug } = await params;
  const body = bodySchema.parse(await readJson(request));

  const lesson = await findLesson(course, lessonSlug, user.id);

  await prisma.confusionMark.deleteMany({
    where: { userId: user.id, lessonId: lesson.id, blockId: body.blockId },
  });

  return ok({ marked: false, blockId: body.blockId });
});
