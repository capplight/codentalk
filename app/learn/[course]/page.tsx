import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findCourse, lessonsInOrder } from "@/courses";
import CourseActions from "@/components/lesson/CourseActions";
import s from "../learn.module.css";

/** Склонение при числе: 1 урок, 2 урока, 5 уроков. */
function plural(count: number, one: string, few: string, many: string): string {
  const mod100 = count % 100;
  if (mod100 >= 11 && mod100 <= 14) return many;
  const mod10 = count % 10;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

type Params = { params: Promise<{ course: string }> };

export async function generateMetadata({ params }: Params) {
  const { course } = await params;
  return { title: findCourse(course)?.title ?? "Курс" };
}

/**
 * Страница уровня: модули, уроки внутри них и проверочная работа.
 *
 * Проверочная работа закрыта, пока не пройдены все уроки модуля. Это не
 * наказание, а бережливость: работа проверяет знания, а не догадливость, и
 * сдавать её, не прочитав уроков, значит зря потратить попытку.
 */
export default async function CoursePage({ params }: Params) {
  const { course: courseSlug } = await params;
  const course = findCourse(courseSlug);
  if (!course) notFound();

  const session = await auth();
  const userId = session?.user?.id;

  // Пройденные уроки. Нового содержания может ещё не быть в базе — тогда
  // отметок нет, и страница показывает курс так, как видит его новичок.
  let done: Set<string> = new Set();
  if (userId) {
    const rows = await prisma.lessonProgress.findMany({
      where: {
        userId,
        status: "completed",
        lesson: { course: { slug: courseSlug } },
      },
      select: { lesson: { select: { slug: true } } },
    });
    done = new Set(rows.map((row) => row.lesson.slug));
  }

  // Записан ли ученик, сданы ли работы, есть ли уже сертификат — от этого
  // зависит, что предложить внизу страницы
  let enrolled = false;
  let quizzesTotal = 0;
  let quizzesPassed = 0;
  let serial: string | null = null;
  if (userId) {
    const [enrollment, tests, passed, certificate] = await Promise.all([
      prisma.enrollment.findFirst({
        where: { userId, course: { slug: courseSlug } },
        select: { id: true },
      }),
      prisma.test.findMany({
        where: { kind: "module_quiz", course: { slug: courseSlug } },
        select: { id: true },
      }),
      prisma.testAttempt.findMany({
        where: { userId, passed: true, test: { course: { slug: courseSlug } } },
        select: { testId: true },
      }),
      prisma.certificate.findFirst({
        where: { userId, course: { slug: courseSlug }, revokedAt: null },
        select: { serial: true },
      }),
    ]);
    enrolled = enrollment !== null;
    quizzesTotal = tests.length;
    const passedIds = new Set(passed.map((attempt) => attempt.testId));
    quizzesPassed = tests.filter((test) => passedIds.has(test.id)).length;
    serial = certificate?.serial ?? null;
  }

  const all = lessonsInOrder(course);
  // «Продолжить» — первый непройденный урок по порядку, а не последний открытый:
  // если человек из любопытства заглянул вперёд, возвращать его туда неправильно.
  const current = all.find((entry) => !done.has(entry.lesson.slug))?.lesson.slug;

  const totalMinutes = all.reduce((sum, entry) => sum + entry.lesson.estimatedMinutes, 0);

  return (
    <main className="wrap-wide" style={{ paddingBottom: 56 }}>
      <div className={s.head}>
        <span className={s.eyebrow}>{course.level ? `Ступень ${course.level}` : "Курс"}</span>
        <h1 className={s.title}>{course.title}</h1>
        <span className={s.meta}>
          {course.modules.length} {plural(course.modules.length, "модуль", "модуля", "модулей")} ·{" "}
          {all.length} {plural(all.length, "урок", "урока", "уроков")} · около{" "}
          {Math.max(1, Math.round(totalMinutes / 60))} ч занятий
        </span>
      </div>

      <div className={s.modules}>
        {course.modules.map((module, index) => {
          const lessonsDone = module.lessons.filter((lesson) => done.has(lesson.slug)).length;
          const moduleReady = lessonsDone === module.lessons.length;
          const asked = module.quiz.ask ?? module.quiz.questions.length;

          return (
            <section className={s.module} key={module.slug}>
              <div className={s.moduleHead}>
                <span className={s.moduleNum}>{index + 1}</span>
                <h2 className={s.moduleTitle}>{module.title}</h2>
                <span className={s.moduleMeta}>
                  {lessonsDone} из {module.lessons.length} уроков
                </span>
              </div>

              <ul className={s.outcomes}>
                {module.outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>

              <ul className={s.lessons}>
                {module.lessons.map((lesson) => {
                  const isDone = done.has(lesson.slug);
                  const isNow = lesson.slug === current;
                  return (
                    <li className={s.lessonRow} key={lesson.slug}>
                      <span
                        className={`${s.dot} ${isDone ? s.dotDone : ""} ${isNow ? s.dotNow : ""}`}
                        aria-hidden
                      />
                      <Link className={s.lessonLink} href={`/learn/${course.slug}/${lesson.slug}`}>
                        {lesson.title}
                      </Link>
                      <span className={s.lessonMeta}>
                        {isDone ? "пройден" : `${lesson.estimatedMinutes} мин`}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className={s.quiz}>
                <span className={s.quizTitle}>Проверочная работа</span>
                <span className={s.quizMeta}>
                  {asked} {plural(asked, "вопрос", "вопроса", "вопросов")} ·{" "}
                  {moduleReady ? "можно сдавать" : "откроется, когда пройдены все уроки модуля"}
                </span>
                <span className={s.quizAction}>
                  {moduleReady ? (
                    <Link className="btn" href={`/learn/${course.slug}/proverochnaya/${module.slug}`}>
                      Начать
                    </Link>
                  ) : (
                    <button className={`btn ${s.locked}`} type="button" disabled>
                      Пока закрыта
                    </button>
                  )}
                </span>
              </div>
            </section>
          );
        })}
      </div>

      {userId && (
        <div style={{ marginTop: 28 }}>
          {!enrolled ? (
            <CourseActions course={courseSlug} mode="enroll" />
          ) : serial ? (
            <CourseActions course={courseSlug} mode="certificate" serial={serial} />
          ) : done.size >= all.length && quizzesTotal > 0 && quizzesPassed >= quizzesTotal ? (
            <CourseActions course={courseSlug} mode="certificate" />
          ) : null}
        </div>
      )}
    </main>
  );
}
