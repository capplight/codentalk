import { prisma } from "@/lib/db";
import { ApiError, handler, ok } from "@/lib/api/respond";
import { requireUser } from "@/lib/api/session";
import { ensureEnrolled } from "@/lib/api/access";

/**
 * Взять курс в работу.
 *
 * Проверяет подписку и лимит в два курса. Бесплатные курсы места не занимают —
 * само правило живёт в lib/domain/enrollment.ts.
 */
export const POST = handler(
  async (_request: Request, { params }: { params: Promise<{ slug: string }> }) => {
    const user = await requireUser();
    const { slug } = await params;

    const course = await prisma.course.findUnique({
      where: { slug },
      select: { id: true, access: true, isPublished: true, title: true },
    });

    if (!course || !course.isPublished) {
      throw new ApiError("not_found", "Курс не найден");
    }

    const decision = await ensureEnrolled(user.id, course.id, course.access);

    return ok({
      enrolled: true,
      course: { slug, title: course.title },
      usedSlots: decision.usedSlots + (decision.wouldUseSlot ? 1 : 0),
      tookSlot: decision.wouldUseSlot,
    });
  }
);
