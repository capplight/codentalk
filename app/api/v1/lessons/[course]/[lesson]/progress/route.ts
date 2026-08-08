import { z } from "zod";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { checkCourseAccess } from "@/lib/api/access";

const bodySchema = z.object({
  status: z.enum(["in_progress", "completed"]).default("in_progress"),
  /** Где именно ученик остановился внутри урока — форму задаёт сам урок */
  position: z.unknown().optional(),
});

type Params = { params: Promise<{ course: string; lesson: string }> };

/**
 * Сохранить место внутри урока.
 *
 * Вызывается часто, поэтому отвечает коротко и ничего лишнего не считает.
 * Доступ проверяется заново: скрытая в интерфейсе кнопка защитой не является.
 */
export const PUT = handler(async (request: Request, { params }: Params) => {
  const user = await requireUser();
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const body = bodySchema.parse(await readJson(request));

  const lesson = await prisma.lesson.findFirst({
    where: { slug: lessonSlug, course: { slug: courseSlug } },
    select: {
      id: true,
      course: { select: { id: true, access: true, isPublished: true } },
    },
  });

  if (!lesson || !lesson.course.isPublished) {
    throw new ApiError("not_found", "Урок не найден");
  }

  const access = await checkCourseAccess(user.id, lesson.course.id, lesson.course.access);
  if (!access.allowed) {
    throw new ApiError(
      access.reason === "needs_subscription" ? "needs_subscription" : "no_free_slots",
      access.reason === "needs_subscription"
        ? "Этот курс доступен по подписке"
        : "Этот курс сейчас не входит в два активных"
    );
  }

  const saved = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
    create: {
      userId: user.id,
      lessonId: lesson.id,
      status: body.status,
      position: body.position === undefined ? undefined : (body.position as never),
      completedAt: body.status === "completed" ? new Date() : null,
    },
    update: {
      status: body.status,
      position: body.position === undefined ? undefined : (body.position as never),
      completedAt: body.status === "completed" ? new Date() : null,
    },
    select: { status: true, updatedAt: true },
  });

  return ok({ status: saved.status, savedAt: saved.updatedAt });
});
