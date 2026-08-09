import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findCourse } from "@/courses";
import QuizRunner from "@/components/lesson/QuizRunner";
import s from "@/components/lesson/lesson.module.css";

type Params = { params: Promise<{ course: string }> };

export async function generateMetadata({ params }: Params) {
  const { course } = await params;
  const found = findCourse(course);
  return { title: found ? `Итоговый экзамен: ${found.title}` : "Итоговый экзамен" };
}

/**
 * Итоговый экзамен курса.
 *
 * Отличается от проверочной работы модуля не сложностью, а охватом и временем:
 * спрашивает про весь курс и спустя время, поэтому проверяет знания, а не
 * свежую память. На нём держится сертификат.
 */
export default async function ExamPage({ params }: Params) {
  const { course: courseSlug } = await params;

  const course = findCourse(courseSlug);
  if (!course || !course.exam) notFound();

  const session = await auth();
  if (!session?.user?.id) {
    redirect(`/login?next=/learn/${courseSlug}/ekzamen`);
  }

  const test = await prisma.test.findFirst({
    where: { kind: "final_exam", course: { slug: courseSlug } },
    select: { id: true, passScore: true, questionsPerAttempt: true },
  });
  if (!test) notFound();

  // Условие открытия проверяется и здесь, и в методе интерфейса: ссылку можно
  // набрать руками, а скрытая кнопка защитой не является.
  const [quizzes, passedAttempts, best] = await Promise.all([
    prisma.test.findMany({
      where: { kind: "module_quiz", course: { slug: courseSlug } },
      select: { id: true },
    }),
    prisma.testAttempt.findMany({
      where: { userId: session.user.id, passed: true, test: { course: { slug: courseSlug } } },
      select: { testId: true },
    }),
    prisma.testAttempt.findFirst({
      where: { userId: session.user.id, testId: test.id, passed: true },
      orderBy: { score: "desc" },
      select: { score: true },
    }),
  ]);

  const passedIds = new Set(passedAttempts.map((attempt) => attempt.testId));
  const quizzesPassed = quizzes.filter((quiz) => passedIds.has(quiz.id)).length;
  const open = quizzes.length === 0 || quizzesPassed >= quizzes.length;

  return (
    <main className="wrap" style={{ paddingBottom: 56 }}>
      <div className={s.head}>
        <span className={s.eyebrow}>{course.title}</span>
        <h1 className={s.title}>Итоговый экзамен</h1>
        <span className={s.meta}>
          {test.questionsPerAttempt} вопросов · для зачёта нужно {test.passScore} баллов
        </span>
        <p className={s.outcome}>
          Экзамен спрашивает про <b>весь курс</b>, а не про последний модуль. После него выдаётся
          сертификат.
        </p>
      </div>

      {best ? (
        <div className={s.body}>
          <div className={`${s.feedback} ${s.good}`}>
            <b>Экзамен сдан на {best.score} баллов.</b> Пересдать можно, но лучший результат
            останется прежним.
          </div>
          <div className={s.footer}>
            <Link className="btn btn--ghost" href={`/learn/${courseSlug}`}>
              ← К курсу
            </Link>
          </div>
          <QuizRunner testId={test.id} courseSlug={courseSlug} />
        </div>
      ) : open ? (
        <QuizRunner testId={test.id} courseSlug={courseSlug} />
      ) : (
        <div className={s.body}>
          <div className={`${s.feedback} ${s.neutral}`}>
            Экзамен откроется, когда сданы все проверочные работы модулей: сдано {quizzesPassed} из{" "}
            {quizzes.length}. Он спрашивает про весь курс, и сдавать его, не разобравшись с
            частями, — потратить попытку впустую.
          </div>
          <div className={s.footer}>
            <Link className="btn" href={`/learn/${courseSlug}`}>
              ← К модулям курса
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
