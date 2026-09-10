import Link from "next/link";
import { adresZnachka } from "@/lib/content/znaki";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { findCourse, lessonsInOrder } from "@/courses";
import CourseActions from "@/components/lesson/CourseActions";
import CourseArt from "@/components/CourseArt";
import { findNapravlenie } from "@/courses/napravleniya";
import { plural } from "@/lib/plural";
import s from "../learn.module.css";
import { ZNACHKI_VIDA } from "@/lib/content/znaki";
import { moduliKursa } from "@/lib/content/dostup";
// Имя `modulSeychas` в этом файле уже занято переменной внутри разметки, и
// тень над импортом читалась бы как ошибка. Зовём функцию по делу: она выбирает
// модуль, который показать.
import { modulSeychas as vybratModul, sostoyanieModuley } from "@/lib/domain/dostup-moduley";
import EkranModulya from "@/components/learn/EkranModulya";
import ShkalaUmeniy from "@/components/learn/ShkalaUmeniy";
import TropaModulya from "@/components/learn/TropaModulya";
import { SLOVA } from "@/components/learn/slova";
import t from "../tropa.module.css";

type Params = {
  params: Promise<{ course: string }>;
  /**
   * `vse=1` — показать карту всей ступени вместо экрана одного модуля.
   * `modul=<слаг>` — показать именно этот модуль, если он открыт.
   *
   * Оба живут в адресе, а не в памяти браузера: ссылку на своё место можно
   * послать себе же на телефон, и она откроет то же самое.
   */
  searchParams: Promise<{ vse?: string; modul?: string; umeniya?: string }>;
};

export async function generateMetadata({ params }: Params) {
  const { course } = await params;
  return { title: findCourse(course)?.title ?? "Курс" };
}

/**
 * Внутренность узла тропы: кружок и подпись.
 *
 * Нажимается ВЕСЬ узел, а не одно название: кружок с номером выглядит кнопкой,
 * значит должен ею быть. Владелец ткнул в кружок и не попал никуда.
 *
 * Закрытая работа ссылки не получает, но обёртку получает ту же — иначе она
 * встала бы в сетке иначе, чем соседи, и тропа сломалась бы на одном узле.
 */
function Uzel({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <span className={t.uzelSsylka}>{children}</span>;
  return (
    <Link className={t.uzelSsylka} href={href}>
      {children}
    </Link>
  );
}

/**
 * Кольцо успеха части.
 *
 * Рисуется прямо в разметке, без картинки и без кода на стороне ученика: два
 * круга, у второго обводка обрезана по доле. Цвет берётся из токенов, значит
 * кольцо само меняется вместе с темой.
 */
function Kolco({ dolya }: { dolya: number }) {
  const r = 13;
  const dlina = 2 * Math.PI * r;
  return (
    <svg className={t.kolco} width={32} height={32} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r={r} className={t.kolcoFon} />
      <circle
        cx="16"
        cy="16"
        r={r}
        className={t.kolcoDolya}
        strokeDasharray={`${dlina * dolya} ${dlina}`}
        transform="rotate(-90 16 16)"
      />
    </svg>
  );
}

/** Замок у закрытой работы. Значок лежит у нас, забирает `npm run znachki`. */
function Zamok() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={adresZnachka(ZNACHKI_VIDA.zamok)} alt="" width={18} height={18} />;
}

/**
 * Страница уровня: модули, уроки внутри них и проверочная работа.
 *
 * Проверочная работа закрыта, пока не пройдены все уроки модуля. Это не
 * наказание, а бережливость: работа проверяет знания, а не догадливость, и
 * сдавать её, не прочитав уроков, значит зря потратить попытку.
 */
export default async function CoursePage({ params, searchParams }: Params) {
  const { course: courseSlug } = await params;
  const { vse, modul: modulIzAdresa, umeniya } = await searchParams;
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
  const napravlenie = findNapravlenie(course.track);

  /*
   * ЗАМОК НА МОДУЛИ — решение владельца от 10 сентября 2026.
   *
   * Правило живёт в `lib/domain/dostup-moduley.ts` и покрыто испытаниями. Здесь
   * оно только СПРАШИВАЕТСЯ: страница показывает то, что правило разрешило, а
   * запрещает по-настоящему сервер — страница урока и метод интерфейса.
   * Скрытая в разметке ссылка замком не является.
   */
  /*
   * Какие уроки база вообще знает. Содержание живёт в файлах, а отметки о
   * прохождении — в базе, и попадает туда содержание отдельным переносом. Урок,
   * до базы не доехавший, пройти нельзя, и без этого довода замок запер бы
   * ступень на первом же неперенесённом модуле — молча, при чистых отчётах.
   */
  const znaetBaza = userId
    ? new Set(
        (
          await prisma.lesson.findMany({
            where: { course: { slug: courseSlug } },
            select: { slug: true },
          })
        ).map((row) => row.slug)
      )
    : undefined;

  const dostup = new Map(
    sostoyanieModuley(moduliKursa(course), done, znaetBaza).map((m) => [m.slug, m])
  );

  /*
   * ЧТО ПОКАЗАТЬ: экран одного модуля или карту всей ступени.
   *
   * Гость всегда видит карту целиком — это витрина, по ней человек решает, идти
   * ли учиться, и по ней же приходят из поиска. Ученику по умолчанию
   * показывается его модуль, а карта — по кнопке.
   */
  const naEkraneModul = (() => {
    if (!userId || vse === "1") return null;
    const prosyat = modulIzAdresa
      ? course.modules.find((m) => m.slug === modulIzAdresa)
      : undefined;
    // Модуль из адреса берётся, только если он открыт: иначе замок обходился бы
    // правкой строки адреса, а человек попадал бы туда, где ему рано.
    if (prosyat && dostup.get(prosyat.slug)?.otkryt) return prosyat;
    const slug = vybratModul(moduliKursa(course), done, znaetBaza);
    return course.modules.find((m) => m.slug === slug) ?? null;
  })();

  /*
   * Работа части — только если показанный модуль в своей части ПОСЛЕДНИЙ.
   *
   * Без этого работа части стала бы недостижимой в ежедневной работе: она
   * стоит в конце части из шести модулей, а экран показывает один модуль. Это
   * ровно та порода, о которой проект знает по работам частей Elementary:
   * содержание, до которого нет дороги, выглядит в отчётах работающим.
   */
  const rabotaChasti = (() => {
    if (!naEkraneModul) return undefined;
    const chast = course.parts?.find((part) => part.modules.includes(naEkraneModul.slug));
    if (!chast?.quiz) return undefined;
    if (chast.modules[chast.modules.length - 1] !== naEkraneModul.slug) return undefined;

    const urokiChasti = chast.modules
      .map((name) => byName.get(name))
      .filter((m): m is NonNullable<typeof m> => m !== undefined)
      .flatMap((m) => m.lessons);
    const sdelano = urokiChasti.filter((lesson) => done.has(lesson.slug)).length;

    return {
      href: `/learn/${course.slug}/rabota-chasti/${chast.slug}`,
      title: `Работа части: ${chast.title}`,
      otkryta: urokiChasti.length > 0 && sdelano === urokiChasti.length,
      sdana: quizScoreByPart.get(chast.slug) !== undefined,
    };
  })();

  return (
    <main className="wrap-wide" style={{ paddingBottom: 56 }}>
      {/*
        ЭТИ ТРИ СЛОЯ ВИДИТ ТОЛЬКО ГОСТЬ — обложка ступени, кнопка «Продолжить» и
        свод по всему курсу.

        Ученику они не показываются с 10 сентября 2026. Владелец: «я хотел чтобы
        ученик видел только один модуль, чтобы это выглядело единственным его
        миром… сейчас слоеное тесто получается». Слоёв над картой уроков стояло
        четыре, и модуль начинался ниже сгиба экрана.

        Гостю они нужны и остаются: это витрина, по ней человек решает, идти ли
        учиться, и по ней же приходят из поиска.
      */}
      {!naEkraneModul && (
        <>
      <div className={t.shapka}>
        {/* Рисунок направления — тот же, что на карточке в каталоге. Человек
            узнаёт курс раньше, чем прочитал заголовок. */}
        {napravlenie && (
          <span className={t.oblozhka}>
            <CourseArt id={napravlenie.art} title={course.title} />
          </span>
        )}
        <div className={s.head} style={{ margin: 0 }}>
          <span className={s.eyebrow}>{course.level ? `Ступень ${course.level}` : "Курс"}</span>
          <h1 className={s.title}>{course.title}</h1>
          <span className={s.meta}>
            {course.modules.length} {plural(course.modules.length, "модуль", "модуля", "модулей")} ·{" "}
            {all.length} {plural(all.length, "урок", "урока", "уроков")} · около{" "}
            {Math.max(1, Math.round(totalMinutes / 60))} ч занятий
          </span>
        </div>
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

      {/*
        Свод: сколько пройдено на ступени целиком.

        Тропа показывает ближний шаг, а этот свод — весь путь. Без него человек
        видит свой участок и не видит, сколько сделано вообще, — а это и есть
        то, ради чего он возвращается.

        Гостю не показывается: у него ничего не пройдено, и полоса в ноль
        встречала бы его упрёком.
      */}
      {userId && (
        <div className={t.svod}>
          <div className={t.svodPolosa} aria-hidden>
            <i style={{ width: `${all.length ? (done.size / all.length) * 100 : 0}%` }} />
          </div>
          <span className={t.svodStroka}>
            Пройдено <b>{done.size}</b> из {all.length}{" "}
            {plural(all.length, "урока", "уроков", "уроков")}
            {quizzesTotal > 0 && (
              <>
                {" · "}сдано <b>{quizzesPassed}</b> из {quizzesTotal}{" "}
                {plural(quizzesTotal, "работы", "работ", "работ")}
              </>
            )}
          </span>
        </div>
      )}
        </>
      )}

      {/*
        ТРОПА ВМЕСТО СПИСКА. Владелец 3 сентября 2026: «мне не нравится
        бесконечный список модулей и потом списков».

        Устроено так: часть — раздел, модуль — участок тропы, урок — узел.
        Развёрнут только тот модуль, где человек сейчас; остальные свёрнуты в
        строку с полосой успеха. Это прямой ответ на главную жалобу к тропе
        Duolingo — «листать вечность, чтобы вернуться к теме»: у нас заголовки
        модулей стоят рядом, и до любого два нажатия.

        С 10 сентября 2026 эта карта — ВТОРОЙ экран, а не первый: ученику
        сперва показывается его модуль, а карта открывается по кнопке. Здесь же
        стоят замки на модулях, заведённые тем же решением; прежняя запись
        говорила «замков на уроках нет», и она отменена. Внутри открытого
        модуля порядка по-прежнему нет.
      */}
      {naEkraneModul && (
        <EkranModulya
          course={course}
          module={naEkraneModul}
          nomer={course.modules.indexOf(naEkraneModul) + 1}
          done={done}
          current={current}
          quizScore={quizScoreByModule.get(naEkraneModul.slug)}
          sleduyushchiy={course.modules[course.modules.indexOf(naEkraneModul) + 1]}
          sleduyushchiyOtkryt={
            dostup.get(course.modules[course.modules.indexOf(naEkraneModul) + 1]?.slug ?? "")
              ?.otkryt ?? false
          }
          chast={
            course.parts?.find((part) => part.modules.includes(naEkraneModul.slug))?.title
          }
          rabotaChasti={rabotaChasti}
          umeniya={umeniya === "1"}
        />
      )}

      {/* Строка обратно к своему модулю: с карты возвращаются чаще, чем уходят
          на неё, и искать своё место глазами по тридцати строкам не надо. */}
      {!naEkraneModul && userId && (
        <p className={s.resume} style={{ marginTop: 4 }}>
          <Link className={s.resumeWhere} href={`/learn/${course.slug}`}>
            ← {SLOVA.kSvoyemuModulyu}
          </Link>
        </p>
      )}

      {!naEkraneModul && (
      <div className={t.karta}>
        {groups.map((group) => {
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
            const modulSeychas = module.slug === currentModule;
            /*
             * Закрытый модуль на карте не раскрывается вовсе: показывать уроки,
             * в которые нельзя войти, значит дразнить. Гость при этом видит
             * карту без замков — у него нет прогресса, и первый модуль ему
             * открыт, а дальше он и так не пойдёт, пока не войдёт.
             */
            const zakryt = userId !== undefined && dostup.get(module.slug)?.otkryt === false;

            return (
              <details
                className={`${t.modul} ${modulSeychas ? t.modulSeychas : ""} ${
                  zakryt ? t.modulZakryt : ""
                }`}
                key={module.slug}
                open={modulSeychas && !zakryt}
              >
                <summary className={t.modulShapka}>
                  {/* Значок вместо номера: свёрнутые модули стоят строками, и
                      одинаковые кружки с цифрами глазом не различаются. Номер
                      при этом не пропал — он ушёл в подпись под названием. */}
                  <span
                    className={`${t.nomer} ${
                      moduleReady ? t.nomerGotov : modulSeychas ? t.nomerSeychas : ""
                    }`}
                  >
                    {zakryt ? (
                      <Zamok />
                    ) : module.znak ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={adresZnachka(module.znak)} alt="" width={22} height={22} />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span className={t.modulImyaStolb}>
                    <h2 className={t.modulImya}>{module.title}</h2>
                    <span className={t.modulNomer}>
                      {zakryt ? (
                        SLOVA.modulZakryt
                      ) : (
                        <>
                          Модуль {index + 1} · {module.lessons.length}{" "}
                          {plural(module.lessons.length, "урок", "урока", "уроков")}
                        </>
                      )}
                    </span>
                  </span>
                  <span className={t.polosa} aria-hidden>
                    <i style={{ width: `${(lessonsDone / module.lessons.length) * 100}%` }} />
                  </span>
                  <span className={t.modulSchyot}>
                    {lessonsDone} из {module.lessons.length}
                  </span>
                </summary>

                <div className={t.modulTelo}>
                  {/* Та же шкала умений, что на экране модуля, а не второй
                      такой же список. Строка «Чему научишься» жила бы иначе в
                      двух местах разом и разошлась бы при первой правке — на
                      этом проект уже обжигался. */}
                  <ShkalaUmeniy module={module} done={done} />

                  {/* Та же тропа, что на экране модуля. До 10 сентября 2026
                      здесь стоял второй такой же кусок разметки на девяносто
                      строк, и разошёлся бы он с первым при первой же правке. */}
                  <TropaModulya
                    courseSlug={course.slug}
                    module={module}
                    done={done}
                    current={current}
                    quizScore={quizScore}
                    gost={!userId}
                  />
                </div>
              </details>
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
          const partAsked = partQuiz ? (partQuiz.ask ?? partQuiz.questions.length) : 0;

          return (
            <details className={t.chast} key={group.part.slug} open={openGroup}>
              <summary className={t.chastShapka}>
                <span className={t.chastImya}>{group.part.title}</span>
                {group.part.tagline && <span className={t.chastVyvod}>{group.part.tagline}</span>}
                {/* Кольцо вместо строки со счётом: доля видна глазом, не считая.
                    Строка рядом остаётся — кольцо без числа приблизительно. */}
                <Kolco dolya={partLessons.length ? partDone / partLessons.length : 0} />
                <span className={t.chastSchyot}>
                  {partDone === partLessons.length
                    ? "часть пройдена"
                    : `${partDone} из ${partLessons.length}`}
                </span>
              </summary>
              <div className={t.chastTelo}>
                {body}
                {partQuiz && (
                  <ol className={t.tropa}>
                    <li
                      className={`${t.uzel} ${t.sprava} ${t.rabota} ${
                        partScore !== undefined ? t.rabotaSdana : ""
                      } ${partReady ? "" : t.rabotaZakryta}`}
                    >
                      <Uzel
                        href={
                          partReady || partScore !== undefined
                            ? `/learn/${course.slug}/rabota-chasti/${group.part.slug}`
                            : undefined
                        }
                      >
                        <span className={t.krug} aria-hidden>
                          {partScore !== undefined ? "✓" : partReady ? "?" : <Zamok />}
                        </span>
                        <span className={t.podpis}>
                          <span className={t.imyaUroka}>Работа части: {group.part.title}</span>
                          <span className={t.melko}>
                            {partScore !== undefined
                              ? `сдана, ${partScore} из 100`
                              : partReady
                                ? `${partAsked} ${plural(partAsked, "вопрос", "вопроса", "вопросов")} · можно сдавать`
                                : SLOVA.rabotaChastiZakrytaKratko}
                          </span>
                        </span>
                      </Uzel>
                    </li>
                  </ol>
                )}
              </div>
            </details>
          );
        })}
      </div>
      )}

      {!naEkraneModul && course.exam && (
        <section className={t.ekzamen}>
          <span
            className={`${t.krug} ${examPassed ? t.krugGotov : ""}`}
            style={{ borderRadius: 14 }}
            aria-hidden
          >
            {examPassed ? "✓" : "★"}
          </span>
          <span className={t.ekzamenImya}>Итоговый экзамен</span>
          <span className={t.ekzamenChto}>
            {examPassed
              ? "Экзамен сдан — можно получать сертификат."
              : quizzesTotal > 0 && quizzesPassed >= quizzesTotal
                ? `${course.exam.questions.length} ${plural(course.exam.questions.length, "вопрос", "вопроса", "вопросов")} обо всём курсе. Все проверочные работы сданы, экзамен открыт.`
                : `Откроется, когда сданы все проверочные работы: сдано ${quizzesPassed} из ${quizzesTotal} ${plural(quizzesTotal, "работы", "работ", "работ")}`}
          </span>
          {quizzesTotal > 0 && quizzesPassed >= quizzesTotal ? (
            <Link className="btn" href={`/learn/${course.slug}/ekzamen`}>
              {examPassed ? "Пересдать" : "Сдавать экзамен"}
            </Link>
          ) : (
            <button className={`btn ${s.locked}`} type="button" disabled>
              Пока закрыт
            </button>
          )}
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
