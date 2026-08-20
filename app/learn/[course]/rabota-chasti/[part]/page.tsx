import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findCourse } from "@/courses";
import QuizRunner from "@/components/lesson/QuizRunner";
import { plural } from "@/lib/plural";
import { nuzhnoVerno } from "@/lib/domain/porog";
import s from "@/components/lesson/lesson.module.css";

type Params = { params: Promise<{ course: string; part: string }> };

export async function generateMetadata({ params }: Params) {
  const { course, part } = await params;
  const found = findCourse(course)?.parts?.find((item) => item.slug === part);
  return { title: found ? `Работа части: ${found.title}` : "Проверочная работа части" };
}

/**
 * Проверочная работа части курса.
 *
 * ЧЕМ ОТЛИЧАЕТСЯ ОТ РАБОТЫ МОДУЛЯ. Работа модуля спрашивает сразу после
 * материала. Работа части приходит спустя шесть-семь модулей и спрашивает не
 * правило по отдельности, а случай целиком. Поэтому и открывается она по
 * другому условию: пройдены все уроки ВСЕХ модулей части.
 *
 * Страница только открывает доступ и показывает условия. Вопросы приходят от
 * сервера уже без ответов, и балл считает тоже сервер.
 */
export default async function PartQuizPage({ params }: Params) {
  const { course: courseSlug, part: partSlug } = await params;

  const course = findCourse(courseSlug);
  const part = course?.parts?.find((item) => item.slug === partSlug);
  if (!course || !part || !part.quiz) notFound();

  const session = await auth();
  if (!session?.user?.id) {
    redirect(
      `/login?dalshe=${encodeURIComponent(`/learn/${courseSlug}/rabota-chasti/${partSlug}`)}`
    );
  }

  const test = await prisma.test.findFirst({
    where: { kind: "part_quiz", partSlug, course: { slug: courseSlug } },
    select: { id: true, passScore: true, questionsPerAttempt: true },
  });

  if (!test) notFound();

  // Условие открытия проверяется и здесь, и в методе интерфейса. Скрытая
  // кнопка защитой не является: ссылку можно набрать руками.
  const lessons = await prisma.lesson.findMany({
    where: { module: { slug: { in: part.modules }, course: { slug: courseSlug } } },
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

  const best = await prisma.testAttempt.findFirst({
    where: { userId: session.user.id, testId: test.id, passed: true },
    orderBy: { score: "desc" },
    select: { score: true },
  });

  // Итоги части — это итоги её модулей. Перечислять полсотни строк на странице
  // незачем: человек их только что прошёл. Показываем сами модули.
  const moduli = part.modules
    .map((name) => course.modules.find((module) => module.slug === name))
    .filter((module): module is NonNullable<typeof module> => module !== undefined);

  return (
    <main className="wrap" style={{ paddingBottom: 56 }}>
      <div className={s.head}>
        <span className={s.eyebrow}>
          {course.title} · часть «{part.title}»
        </span>
        <h1 className={s.title}>Проверочная работа части</h1>
        {/* Порог счётом, а не в баллах: «нужно 8 из 10» человек понимает
            сразу, «нужно 80 баллов» требует пересчёта в уме. */}
        <span className={s.meta}>
          {test.questionsPerAttempt}{" "}
          {plural(test.questionsPerAttempt, "вопрос", "вопроса", "вопросов")} · для зачёта
          нужно {nuzhnoVerno(test.passScore, test.questionsPerAttempt)} из{" "}
          {test.questionsPerAttempt}
        </span>
        <p className={s.outcomeLabel}>О чём спросят</p>
        <ul className={s.outcomes}>
          {moduli.map((module) => (
            <li key={module.slug}>{module.title}</li>
          ))}
        </ul>
      </div>

      {open ? (
        <QuizRunner testId={test.id} courseSlug={courseSlug} bestScore={best?.score ?? null} />
      ) : (
        <div className={s.body}>
          <div className={`${s.feedback} ${s.neutral}`}>
            Работа откроется, когда пройдены все уроки части: пройдено {done} из{" "}
            {lessons.length} {plural(lessons.length, "урока", "уроков", "уроков")}.
            Она спрашивает не о правиле, а о случае целиком, и сдавать её, не пройдя модулей,
            значит зря потратить время.
          </div>
          <div className={s.footer}>
            <Link className="btn" href={`/learn/${courseSlug}`}>
              ← К модулям части
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
