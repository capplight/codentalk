/**
 * Перенос курсов нового формата из репозитория в базу.
 *
 * Материалы живут в папке courses/ как данные под контролем версий. В базе
 * хранится их зеркало — чтобы записи об успехах, пометки «непонятно» и заметки
 * могли на них ссылаться.
 *
 * Запуск:  npm run db:seed:courses
 *          npx tsx scripts/seed-courses.mts --dry
 *
 * ВАЖНО. Скрипт останавливается, если урок, по которому у кого-то есть успехи
 * или пометки, исчез из репозитория. Без этой проверки достигнутое учениками
 * молча пропадало бы при каждой правке материалов.
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });
config({ quiet: true });

const { prisma } = await import("../lib/db/index.ts");
const { courses } = await import("../courses/index.ts");
const { isTask } = await import("../lib/content/types.ts");

const dryRun = process.argv.includes("--dry");

/** Название направления по его имени. Направлений пока мало, список короткий. */
const TRACK_TITLES: Record<string, { title: string; kind: string }> = {
  english: { title: "Английский язык", kind: "language" },
  web: { title: "Веб-разработка", kind: "programming" },
};

async function main(): Promise<void> {
  const slugsInRepo = new Set<string>();
  for (const course of courses) {
    for (const module of course.modules) {
      for (const lesson of module.lessons) slugsInRepo.add(`${course.slug}/${lesson.slug}`);
    }
  }

  // ---- защита достигнутого -------------------------------------------------
  const known = await prisma.lesson.findMany({
    where: { course: { slug: { in: courses.map((c) => c.slug) } } },
    select: {
      slug: true,
      title: true,
      course: { select: { slug: true } },
      _count: { select: { progress: true, confusionMarks: true } },
    },
  });

  const lost = known.filter(
    (lesson) =>
      !slugsInRepo.has(`${lesson.course.slug}/${lesson.slug}`) &&
      lesson._count.progress + lesson._count.confusionMarks > 0
  );

  if (lost.length > 0) {
    const list = lost.map((l) => `  · ${l.course.slug}/${l.slug} — «${l.title}»`).join("\n");
    throw new Error(
      `Из репозитория исчезли уроки, по которым у учеников есть успехи или пометки:\n${list}\n\n` +
        `Перенос остановлен, база не изменена.\n` +
        `Верни уроки на место либо осознанно перенеси успехи на другие уроки — ` +
        `но не удаляй молча, иначе достигнутое учениками пропадёт.`
    );
  }

  // ---- перенос -------------------------------------------------------------
  for (const course of courses) {
    const trackInfo = TRACK_TITLES[course.track] ?? { title: course.track, kind: "other" };

    console.log(`\n${course.title} (${course.slug})`);
    if (dryRun) {
      const lessons = course.modules.reduce((n, m) => n + m.lessons.length, 0);
      console.log(`  будет перенесено: модулей ${course.modules.length}, уроков ${lessons}`);
      continue;
    }

    const track = await prisma.track.upsert({
      where: { slug: course.track },
      create: { slug: course.track, title: trackInfo.title, kind: trackInfo.kind },
      update: { title: trackInfo.title, kind: trackInfo.kind },
      select: { id: true },
    });

    const savedCourse = await prisma.course.upsert({
      where: { slug: course.slug },
      create: {
        slug: course.slug,
        trackId: track.id,
        title: course.title,
        level: course.level,
        access: course.access,
        format: "lessons",
        isPublished: true,
      },
      update: {
        trackId: track.id,
        title: course.title,
        level: course.level,
        access: course.access,
        format: "lessons",
        isPublished: true,
      },
      select: { id: true },
    });

    let lessonSort = 0;

    for (const [moduleIndex, module] of course.modules.entries()) {
      const savedModule = await prisma.module.upsert({
        where: { courseId_slug: { courseId: savedCourse.id, slug: module.slug } },
        create: {
          courseId: savedCourse.id,
          slug: module.slug,
          title: module.title,
          sort: moduleIndex,
          outcomes: module.outcomes,
          sources: module.sources,
        },
        update: {
          title: module.title,
          sort: moduleIndex,
          outcomes: module.outcomes,
          sources: module.sources,
        },
        select: { id: true },
      });

      for (const lesson of module.lessons) {
        const savedLesson = await prisma.lesson.upsert({
          where: { courseId_slug: { courseId: savedCourse.id, slug: lesson.slug } },
          create: {
            courseId: savedCourse.id,
            moduleId: savedModule.id,
            slug: lesson.slug,
            title: lesson.title,
            outcome: lesson.outcome,
            estimatedMinutes: lesson.estimatedMinutes,
            sort: lessonSort,
          },
          update: {
            moduleId: savedModule.id,
            title: lesson.title,
            outcome: lesson.outcome,
            estimatedMinutes: lesson.estimatedMinutes,
            sort: lessonSort,
          },
          select: { id: true },
        });
        lessonSort += 1;

        // Задания урока в базу не кладутся: ученик решает их на странице по
        // данным из courses/, а база хранит только достигнутое. Здесь их
        // считают ради отчёта.
        const tasks = lesson.blocks.filter(isTask);

        console.log(`  ✓ ${lesson.slug} (${tasks.length} заданий)`);
      }

      // ---- проверочная работа модуля -------------------------------------
      // Банк вопросов переписывается целиком. Сданные попытки хранят свои
      // ответы и балл отдельно, поэтому правка вопросов их не портит.
      const quiz = module.quiz;
      const existing = await prisma.test.findFirst({
        where: { courseId: savedCourse.id, moduleId: savedModule.id, kind: "module_quiz" },
        select: { id: true },
      });

      const test = existing
        ? await prisma.test.update({
            where: { id: existing.id },
            data: {
              title: `Проверочная работа: ${module.title}`,
              questionsPerAttempt: quiz.ask ?? quiz.questions.length,
              passScore: Math.round((quiz.passRatio ?? 0.7) * 100),
            },
            select: { id: true },
          })
        : await prisma.test.create({
            data: {
              courseId: savedCourse.id,
              moduleId: savedModule.id,
              kind: "module_quiz",
              title: `Проверочная работа: ${module.title}`,
              questionsPerAttempt: quiz.ask ?? quiz.questions.length,
              passScore: Math.round((quiz.passRatio ?? 0.7) * 100),
            },
            select: { id: true },
          });

      await prisma.testQuestion.deleteMany({ where: { testId: test.id } });
      await prisma.testQuestion.createMany({
        data: quiz.questions.map((question) => ({
          testId: test.id,
          kind: question.kind,
          payload: question as never,
          // Тема разбора слабых мест — это итог урока, который вопрос проверяет
          topic: question.outcome,
        })),
      });

      console.log(`  ✓ проверочная работа: ${quiz.questions.length} вопросов`);
    }

    // ---- итоговый экзамен курса -------------------------------------------
    if (course.exam) {
      const exam = course.exam;

      /*
       * Каждому вопросу экзамена проставляем модуль — по итогу урока, который
       * вопрос проверяет.
       *
       * Зачем: выборка вопросов идёт по кругу групп. На экзамене группой была
       * тема, а тема — это итог урока, и у каждого из пятидесяти вопросов он
       * свой. Круг вырождался в случайную горсть, и примерно четыре модуля из
       * двадцати пяти не попадали в попытку вовсе — при том что шапка экзамена
       * обещает весь курс.
       */
      const modulPoItogu = new Map<string, string>();
      for (const module of course.modules) {
        for (const lesson of module.lessons) modulPoItogu.set(lesson.outcome, module.slug);
      }
      const existingExam = await prisma.test.findFirst({
        where: { courseId: savedCourse.id, kind: "final_exam" },
        select: { id: true },
      });

      const examTest = existingExam
        ? await prisma.test.update({
            where: { id: existingExam.id },
            data: {
              title: `Итоговый экзамен: ${course.title}`,
              questionsPerAttempt: exam.ask ?? exam.questions.length,
              passScore: Math.round((exam.passRatio ?? 0.8) * 100),
            },
            select: { id: true },
          })
        : await prisma.test.create({
            data: {
              courseId: savedCourse.id,
              kind: "final_exam",
              title: `Итоговый экзамен: ${course.title}`,
              questionsPerAttempt: exam.ask ?? exam.questions.length,
              passScore: Math.round((exam.passRatio ?? 0.8) * 100),
            },
            select: { id: true },
          });

      await prisma.testQuestion.deleteMany({ where: { testId: examTest.id } });
      await prisma.testQuestion.createMany({
        data: exam.questions.map((question) => ({
          testId: examTest.id,
          kind: question.kind,
          payload: question as never,
          topic: question.outcome,
          groupKey: modulPoItogu.get(question.outcome) ?? null,
        })),
      });

      const bezModulya = exam.questions.filter((q) => !modulPoItogu.has(q.outcome)).length;
      if (bezModulya > 0) {
        // Молчать об этом нельзя: такой вопрос выпадает из круга по модулям и
        // снова делает охват случайным.
        console.log(`  ⚠ вопросов экзамена без модуля: ${bezModulya}`);
      }

      console.log(`  ✓ итоговый экзамен: ${exam.questions.length} вопросов`);
    }
  }

  console.log(dryRun ? "\nПробный прогон: база не изменена." : "\nПеренос завершён.");
}

try {
  await main();
} finally {
  await prisma.$disconnect();
}
