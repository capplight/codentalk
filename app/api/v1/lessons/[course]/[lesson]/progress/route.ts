import { z } from "zod";
import { prisma } from "@/lib/db";
import { ApiError, handler, ok, readJson } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { checkCourseAccess } from "@/lib/api/access";
import { startOfMonth } from "@/lib/domain/enrollment";

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

  // объявлено здесь, чтобы попасть в ответ ниже
  let enrolled = false;

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

  /*
   * Бесплатный курс записывается сам, как только урок отмечен пройденным.
   *
   * Без этого получалось так: ученик проходит уроки, отметки честно ложатся в
   * базу, а личный кабинет говорит «Пора выбрать курс» — потому что показывает
   * только курсы, на которые есть запись. Со стороны это выглядит как потеря
   * успехов, и владелец на этом и споткнулся.
   *
   * Место из двух возможных при этом не занимается: бесплатные курсы его не
   * занимают (правило в lib/domain/enrollment.ts). Платный курс по-прежнему
   * записывается только осознанно — там место расходуется, и человек должен
   * знать, что он его занял.
   */
  /*
   * Пройденный урок пройденным и остаётся.
   *
   * Ответы уходят в базу по одному, и запись «отвечено восемь из девяти» может
   * прийти позже записи «отвечено девять» — сеть порядка не гарантирует. Без
   * этой проверки опоздавшая запись сняла бы уже поставленную отметку, и успех
   * пропал бы на ровном месте.
   */
  const before = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
    select: { status: true, completedAt: true },
  });

  const wasCompleted = before?.status === "completed";
  const status = wasCompleted ? "completed" : body.status;
  const completedAt =
    status === "completed" ? (before?.completedAt ?? new Date()) : null;

  if (status === "completed" && lesson.course.access === "free") {
    const existing = await prisma.enrollment.findFirst({
      where: { userId: user.id, courseId: lesson.course.id },
      select: { id: true },
    });
    if (!existing) {
      await prisma.enrollment.create({
        data: {
          userId: user.id,
          courseId: lesson.course.id,
          periodMonth: startOfMonth(new Date()),
        },
      });
      enrolled = true;
    }
  }

  const saved = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
    create: {
      userId: user.id,
      lessonId: lesson.id,
      status,
      position: body.position === undefined ? undefined : (body.position as never),
      completedAt,
    },
    update: {
      status,
      position: body.position === undefined ? undefined : (body.position as never),
      completedAt,
    },
    select: { status: true, updatedAt: true },
  });

  return ok({ status: saved.status, savedAt: saved.updatedAt, enrolled });
});
