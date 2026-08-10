import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findCourse } from "@/courses";
import QuizRunner from "@/components/lesson/QuizRunner";
import s from "@/components/lesson/lesson.module.css";

type Params = { params: Promise<{ course: string; module: string }> };

export async function generateMetadata({ params }: Params) {
  const { course, module } = await params;
  const found = findCourse(course)?.modules.find((m) => m.slug === module);
  return { title: found ? `Проверочная работа: ${found.title}` : "Проверочная работа" };
}

/**
 * Проверочная работа модуля.
 *
 * Страница только открывает доступ и показывает условия. Сами вопросы приходят
 * от сервера уже без ответов, и балл считает тоже сервер: иначе работу можно
 * было бы пройти, заглянув в исходный код страницы.
 */
export default async function QuizPage({ params }: Params) {
  const { course: courseSlug, module: moduleSlug } = await params;

  const course = findCourse(courseSlug);
  const module = course?.modules.find((item) => item.slug === moduleSlug);
  if (!course || !module) notFound();

  const session = await auth();
  if (!session?.user?.id) {
    redirect(`/login?next=/learn/${courseSlug}/proverochnaya/${moduleSlug}`);
  }

  const test = await prisma.test.findFirst({
    where: {
      kind: "module_quiz",
      course: { slug: courseSlug },
      module: { slug: moduleSlug },
    },
    select: { id: true, passScore: true, questionsPerAttempt: true },
  });

  if (!test) notFound();

  // Условие открытия проверяется и здесь, и в методе интерфейса. Скрытая
  // кнопка защитой не является: ссылку можно набрать руками.
  const lessons = await prisma.lesson.findMany({
    where: { module: { slug: moduleSlug, course: { slug: courseSlug } } },
    select: { id: true },
  });
  const done = await prisma.lessonProgress.count({
    where: {
      userId: session.user.id,
      status: "completed",
      lessonId: { in: lessons.map((lesson) => lesson.id) },
    },
  });
  const open = lessons.length > 0 && done >= lessons.length;

  // Работа могла быть сдана раньше. Показать это обязательно: иначе страница
  // выглядит так, будто ученик здесь впервые, а результат никуда не записан.
  const best = await prisma.testAttempt.findFirst({
    where: { userId: session.user.id, testId: test.id, passed: true },
    orderBy: { score: "desc" },
    select: { score: true },
  });

  return (
    <main className="wrap" style={{ paddingBottom: 56 }}>
      <div className={s.head}>
        <span className={s.eyebrow}>
          {course.title} · {module.title}
        </span>
        <h1 className={s.title}>Проверочная работа</h1>
        <span className={s.meta}>
          {test.questionsPerAttempt} вопросов · для зачёта нужно {test.passScore} баллов
        </span>
        <p className={s.outcome}>
          Работа проверяет, что ученик <b>{module.outcomes.join("; ")}</b>
        </p>
      </div>

      {open ? (
        <QuizRunner testId={test.id} courseSlug={courseSlug} bestScore={best?.score ?? null} />
      ) : (
        <div className={s.body}>
          <div className={`${s.feedback} ${s.neutral}`}>
            Работа откроется, когда пройдены все уроки модуля: пройдено {done} из {lessons.length}.
            Это не наказание — она проверяет знания, а не догадливость, и сдавать её, не прочитав
            уроков, значит зря потратить время.
          </div>
          <div className={s.footer}>
            <Link className="btn" href={`/learn/${courseSlug}`}>
              ← К урокам модуля
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
