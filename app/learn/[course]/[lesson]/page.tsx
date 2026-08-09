import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findLesson } from "@/courses";
import { isTask } from "@/lib/content/types";
import Material from "@/components/lesson/Material";
import TaskCard from "@/components/lesson/TaskCard";
import ConfusionButton from "@/components/lesson/ConfusionButton";
import FinishLesson from "@/components/lesson/FinishLesson";
import s from "@/components/lesson/lesson.module.css";

type Params = { params: Promise<{ course: string; lesson: string }> };

export async function generateMetadata({ params }: Params) {
  const { course, lesson } = await params;
  const place = findLesson(course, lesson);
  return { title: place ? place.lesson.title : "Урок" };
}

/**
 * Страница урока.
 *
 * Материал разворачивается на сервере, а в браузер островками уезжают только
 * задания и кнопка «непонятно»: читать можно и без выполнения кода на стороне
 * ученика.
 */
export default async function LessonPage({ params }: Params) {
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const place = findLesson(courseSlug, lessonSlug);
  if (!place) notFound();

  const { course, module, lesson, number, total, previous, next } = place;

  const session = await auth();
  const userId = session?.user?.id;

  // Уже поставленные пометки, чтобы кнопки открылись в нужном состоянии.
  // Урока может не быть в базе (новое содержание переносится отдельно) —
  // тогда пометок просто нет, а читать урок это не мешает.
  let marked: Set<string> = new Set();
  let completed = false;
  if (userId) {
    const progress = await prisma.lessonProgress.findFirst({
      where: {
        userId,
        status: "completed",
        lesson: { slug: lessonSlug, course: { slug: courseSlug } },
      },
      select: { id: true },
    });
    completed = progress !== null;

    const rows = await prisma.confusionMark.findMany({
      where: {
        userId,
        lesson: { slug: lessonSlug, course: { slug: courseSlug } },
        resolvedAt: null,
      },
      select: { blockId: true },
    });
    marked = new Set(rows.map((row) => row.blockId));
  }

  const tasks = lesson.blocks.filter(isTask);
  let taskNumber = 0;

  return (
    <main className="wrap" style={{ paddingBottom: 56 }}>
      <div className={s.head}>
        <span className={s.eyebrow}>
          {course.title} · {module.title}
        </span>
        <h1 className={s.title}>{lesson.title}</h1>
        <span className={s.meta}>
          Урок {number} из {total} · около {lesson.estimatedMinutes} минут
        </span>
        {/* Итоги написаны от третьего лица («здоровается»), поэтому рамке нужно
            третье лицо: «после урока ты здоровается» — рассогласование. */}
        <p className={s.outcome}>
          После урока ученик <b>{lesson.outcome}</b>
        </p>
      </div>

      <div className={s.body}>
        {lesson.blocks.map((block) => {
          if (isTask(block)) {
            taskNumber += 1;
            return (
              <TaskCard key={block.id} task={block} index={taskNumber} total={tasks.length} />
            );
          }

          return (
            <div className={s.block} key={block.id}>
              <Material block={block} />
              {userId && (
                <ConfusionButton
                  course={courseSlug}
                  lesson={lessonSlug}
                  blockId={block.id}
                  initial={marked.has(block.id)}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className={s.footer}>
        {previous ? (
          <Link className="btn btn--ghost" href={`/learn/${courseSlug}/${previous.slug}`}>
            ← {previous.title}
          </Link>
        ) : (
          <Link className="btn btn--ghost" href={`/learn/${courseSlug}`}>
            ← К списку уроков
          </Link>
        )}

        {userId ? (
          <FinishLesson
            course={courseSlug}
            lesson={lessonSlug}
            nextHref={next ? `/learn/${courseSlug}/${next.slug}` : `/learn/${courseSlug}`}
            label={next ? `дальше: ${next.title}` : "к уровню"}
            done={completed}
          />
        ) : (
          <Link className="btn" href="/register">
            Зарегистрируйтесь, чтобы сохранять успехи
          </Link>
        )}
      </div>
    </main>
  );
}
