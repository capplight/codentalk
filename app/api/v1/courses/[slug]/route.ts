import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { currentUser } from "@/lib/api/session";
import { checkCourseAccess } from "@/lib/api/access";

/**
 * Курс с модулями, уроками и правами текущего ученика.
 *
 * Гостю тоже отвечаем: он должен увидеть содержание курса до регистрации.
 * Просто без сведений об успехах.
 */
export const GET = handler(
  async (_request: Request, { params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const course = await prisma.course.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        title: true,
        level: true,
        access: true,
        isPublished: true,
        track: { select: { slug: true, title: true } },
        modules: {
          orderBy: { sort: "asc" },
          select: {
            slug: true,
            title: true,
            sort: true,
            lessons: {
              orderBy: { sort: "asc" },
              select: {
                slug: true,
                title: true,
                kind: true,
                estimatedMinutes: true,
              },
            },
          },
        },
        lessons: {
          where: { moduleId: null },
          orderBy: { sort: "asc" },
          select: { slug: true, title: true, kind: true, estimatedMinutes: true },
        },
      },
    });

    if (!course || !course.isPublished) {
      throw new ApiError("not_found", "Курс не найден");
    }

    const user = await currentUser();

    // Сведения об успехах и доступе — только для вошедших
    let access = null;
    let progress: Record<string, string> = {};

    if (user) {
      const decision = await checkCourseAccess(user.id, course.id, course.access);
      access = {
        allowed: decision.allowed,
        reason: decision.reason ?? null,
        usedSlots: decision.usedSlots,
        slotsFreeAt: decision.slotsFreeAt ?? null,
      };

      const rows = await prisma.lessonProgress.findMany({
        where: { userId: user.id, lesson: { courseId: course.id } },
        select: { status: true, lesson: { select: { slug: true } } },
      });
      progress = Object.fromEntries(rows.map((r) => [r.lesson.slug, r.status]));
    }

    return ok({
      course: {
        slug: course.slug,
        title: course.title,
        level: course.level,
        access: course.access,
        track: course.track,
        modules: course.modules,
        // Уроки вне модулей — например, библиотека текстов
        extraLessons: course.lessons,
      },
      access,
      progress,
    });
  }
);
