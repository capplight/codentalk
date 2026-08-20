import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findCourse, lessonsInOrder } from "@/courses";
import CourseActions from "@/components/lesson/CourseActions";
import { plural } from "@/lib/plural";
import s from "../learn.module.css";

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
  let examPassed = false;
  let serial: string | null = null;
  // Модуль → лучший балл сданной работы. Без этого страница показывает
  // сданную работу так же, как несданную, и результат выглядит потерянным.
  const quizScoreByModule = new Map<string, number>();
  // То же для работ частей: часть → лучший балл сданной работы.
  const quizScoreByPart = new Map<string, number>();
  if (userId) {
    const [enrollment, tests, passed, certificate, exam] = await Promise.all([
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
        select: {
          testId: true,
          score: true,
          test: { select: { partSlug: true, module: { select: { slug: true } } } },
        },
      }),
      prisma.certificate.findFirst({
        where: { userId, course: { slug: courseSlug }, revokedAt: null },
        select: { serial: true },
      }),
      prisma.testAttempt.findFirst({
        where: {
          userId,
          passed: true,
          test: { kind: "final_exam", course: { slug: courseSlug } },
        },
        select: { id: true },
      }),
    ]);
    enrolled = enrollment !== null;
    quizzesTotal = tests.length;
    const passedIds = new Set(passed.map((attempt) => attempt.testId));
    quizzesPassed = tests.filter((test) => passedIds.has(test.id)).length;
    serial = certificate?.serial ?? null;
    examPassed = exam !== null;
    for (const attempt of passed) {
      const partSlug = attempt.test.partSlug;
      if (partSlug) {
        const wasPart = quizScoreByPart.get(partSlug);
        if (wasPart === undefined || (attempt.score ?? 0) > wasPart) {
          quizScoreByPart.set(partSlug, attempt.score ?? 0);
        }
        continue;
      }
      const moduleSlug = attempt.test.module?.slug;
      if (!moduleSlug) continue;
      const before = quizScoreByModule.get(moduleSlug);
      if (before === undefined || (attempt.score ?? 0) > before) {
        quizScoreByModule.set(moduleSlug, attempt.score ?? 0);
      }
    }
  }

  const all = lessonsInOrder(course);
  // «Продолжить» — первый непройденный урок по порядку, а не последний открытый:
  // если человек из любопытства заглянул вперёд, возвращать его туда неправильно.
  const currentEntry = all.find((entry) => !done.has(entry.lesson.slug));
  const current = currentEntry?.lesson.slug;

  // Модуль, в котором человек сейчас: по нему решается, какую часть раскрыть.
  const currentModule = currentEntry?.module.slug;

  /*
   * Модули, разложенные по частям.
   *
   * Проверка check:content следит, чтобы части покрывали все модули ровно по
   * разу, поэтому здесь можно не бояться, что модуль потеряется. Курс без
   * частей отдаёт одну группу без заголовка — так короткие курсы не обрастают
   * лишней рамкой.
   */
  const byName = new Map(course.modules.map((module) => [module.slug, module]));
  const groups = course.parts?.length
    ? course.parts.map((part) => ({
        part,
        modules: part.modules
          .map((name) => byName.get(name))
          .filter((module): module is NonNullable<typeof module> => module !== undefined),
      }))
    : [{ part: null, modules: course.modules }];

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

      {/*
        Одна строка для вернувшегося: куда идти дальше. Раньше её не было, и
        человек, вернувшийся через неделю, искал своё место глазами по всему
        списку.
      */}
      {current && (
        <p className={s.resume}>
          <Link className="btn" href={`/learn/${course.slug}/${currentEntry?.lesson.slug}`}>
            {!userId ? "Начать учиться" : done.size === 0 ? "Начать с первого урока" : "Продолжить"}
          </Link>
          <span className={s.resumeWhere}>
            {userId
              ? `${currentEntry?.module.title} · ${currentEntry?.lesson.title}`
              : "Уроки открываются после входа — так сохраняются успехи"}
          </span>
        </p>
      )}

      <div className={s.modules}>
        {groups.map((group) => {
          // Раскрыта та часть, где человек сейчас. Если курс пройден целиком —
          // последняя: возвращаться логичнее туда, где остановился.
          const openGroup =
            group.part === null ||
            (currentModule
              ? group.modules.some((m) => m.slug === currentModule)
              : group === groups[groups.length - 1]);
          const partLessons = group.modules.flatMap((m) => m.lessons);
          const partDone = partLessons.filter((lesson) => done.has(lesson.slug)).length;

          const body = group.modules.map((module) => {
          const index = course.modules.indexOf(module);
          const lessonsDone = module.lessons.filter((lesson) => done.has(lesson.slug)).length;
          const moduleReady = lessonsDone === module.lessons.length;
          const asked = module.quiz.ask ?? module.quiz.questions.length;
          const quizScore = quizScoreByModule.get(module.slug);

          return (
            <section className={s.module} key={module.slug}>
              <div className={s.moduleHead}>
                <span className={s.moduleNum}>{index + 1}</span>
                <h2 className={s.moduleTitle}>{module.title}</h2>
                <span className={s.moduleMeta}>
                  {lessonsDone} из {module.lessons.length} уроков
                </span>
              </div>

              {/* Без заголовка список читался непонятно: владелец прошёл
                  модуль и спросил, что это за строки над уроками. */}
              <p className={s.outcomesLabel}>Чему научишься в модуле</p>
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
                  {quizScore !== undefined
                    ? `сдана, ${quizScore} из 100`
                    : `${asked} ${plural(asked, "вопрос", "вопроса", "вопросов")} · ${
                        moduleReady ? "можно сдавать" : "откроется, когда пройдены все уроки модуля"
                      }`}
                </span>
                <span className={s.quizAction}>
                  {moduleReady ? (
                    <Link className="btn" href={`/learn/${course.slug}/proverochnaya/${module.slug}`}>
                      {quizScore !== undefined ? "Пройти ещё раз" : "Начать"}
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
          });

          // Курс без частей (например, из одного модуля) показывается плоско:
          // сворачивать там нечего.
          if (group.part === null) return <div key="vse">{body}</div>;

          /*
           * Работа части. Открывается, когда пройдены все уроки части, — то же
           * правило, что у работы модуля, только уроков больше. Условие
           * проверяется ещё раз в методе интерфейса: скрытая кнопка защитой не
           * является.
           */
          const partQuiz = group.part.quiz;
          const partReady = partLessons.length > 0 && partDone === partLessons.length;
          const partScore = quizScoreByPart.get(group.part.slug);
          const partAsked = partQuiz ? partQuiz.ask ?? partQuiz.questions.length : 0;

          return (
            <details className={s.part} key={group.part.slug} open={openGroup}>
              <summary className={s.partHead}>
                <span className={s.partTitle}>{group.part.title}</span>
                {group.part.tagline && (
                  <span className={s.partTagline}>{group.part.tagline}</span>
                )}
                <span className={s.partMeta}>
                  {group.modules.length}{" "}
                  {plural(group.modules.length, "модуль", "модуля", "модулей")} ·{" "}
                  {partDone === partLessons.length
                    ? "пройдена"
                    : `${partDone} из ${partLessons.length} уроков`}
                </span>
              </summary>
              <div className={s.partBody}>
                {body}
                {partQuiz && (
                  <div className={s.partQuiz}>
                    <span className={s.quizTitle}>Работа части: {group.part.title}</span>
                    <span className={s.quizMeta}>
                      {partScore !== undefined
                        ? `сдана, ${partScore} из 100`
                        : `${partAsked} ${plural(partAsked, "вопрос", "вопроса", "вопросов")} · ${
                            partReady
                              ? "можно сдавать"
                              : "откроется, когда пройдены все уроки части"
                          }`}
                    </span>
                    <span className={s.quizAction}>
                      {partReady ? (
                        <Link
                          className="btn"
                          href={`/learn/${course.slug}/rabota-chasti/${group.part.slug}`}
                        >
                          {partScore !== undefined ? "Пройти ещё раз" : "Начать"}
                        </Link>
                      ) : (
                        <button className={`btn ${s.locked}`} type="button" disabled>
                          Пока закрыта
                        </button>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </details>
          );
        })}
      </div>

      {course.exam && (
        <section className={s.module} style={{ marginTop: 24 }}>
          <div className={s.moduleHead}>
            <span className={s.moduleNum}>✓</span>
            <h2 className={s.moduleTitle}>Итоговый экзамен</h2>
            <span className={s.moduleMeta}>
              {examPassed
                ? "сдан"
                : `${course.exam.questions.length} ${plural(
                    course.exam.questions.length,
                    "вопрос",
                    "вопроса",
                    "вопросов"
                  )} обо всём курсе`}
            </span>
          </div>
          <div className={s.quiz}>
            <span className={s.quizMeta}>
              {examPassed
                ? "Экзамен сдан — можно получать сертификат."
                : quizzesTotal > 0 && quizzesPassed >= quizzesTotal
                  ? "Все проверочные работы сданы, экзамен открыт."
                  : `Откроется, когда сданы все проверочные работы: сдано ${quizzesPassed} из ${quizzesTotal} ${plural(quizzesTotal, "работы", "работ", "работ")}`}
            </span>
            <span className={s.quizAction}>
              {quizzesTotal > 0 && quizzesPassed >= quizzesTotal ? (
                <Link className="btn" href={`/learn/${course.slug}/ekzamen`}>
                  {examPassed ? "Пересдать" : "Сдавать экзамен"}
                </Link>
              ) : (
                <button className={`btn ${s.locked}`} type="button" disabled>
                  Пока закрыт
                </button>
              )}
            </span>
          </div>
        </section>
      )}

      {userId && (
        <div style={{ marginTop: 28 }}>
          {!enrolled ? (
            <CourseActions course={courseSlug} mode="enroll" />
          ) : serial ? (
            <CourseActions course={courseSlug} mode="certificate" serial={serial} />
          ) : done.size >= all.length &&
            quizzesTotal > 0 &&
            quizzesPassed >= quizzesTotal &&
            (!course.exam || examPassed) ? (
            <CourseActions course={courseSlug} mode="certificate" />
          ) : null}
        </div>
      )}
    </main>
  );
}
