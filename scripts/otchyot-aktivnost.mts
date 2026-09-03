/**
 * Отчёт об активности учеников за месяц — из того, что пишет сама платформа.
 *
 * ЧЕГО ЭТОТ ОТЧЁТ НЕ ЗНАЕТ И НЕ МОЖЕТ УЗНАТЬ. Слой учёта поведения не построен
 * (docs/uchyot-povedeniya.md, «Слой 2 — НЕ СДЕЛАНО»), поэтому здесь нет и не
 * будет ответов на три главных вопроса:
 *
 *   · сколько человек зашло на сайт и ушло, ничего не открыв, — база видит
 *     только вошедших;
 *   · сколько времени человек провёл в уроке и на каком абзаце бросил, —
 *     событий `lesson_open`, `block_seen` не пишется;
 *   · вернулся ли он назавтра — поле `lastSeenAt` объявлено в схеме и не
 *     пишется НИ РАЗУ.
 *
 * Что база знает точно: кто зарегистрировался, кто записался на курс, какие
 * уроки открыл и досмотрел до задания, какие работы сдавал и с каким баллом,
 * какие абзацы пометил «непонятно».
 *
 * ВАЖНАЯ ОГОВОРКА О СЧЁТЕ УРОКОВ. Урок отмечается, ТОЛЬКО когда ученик ответил
 * на задание (LessonFlow.tsx). Человек, который открыл урок, почитал и ушёл,
 * следа не оставляет вовсе. Значит «открытых уроков» здесь — это «уроков, где
 * хоть раз ответили», и настоящее число открытий больше.
 *
 *     npm run otchyot-aktivnost            за 30 дней
 *     npm run otchyot-aktivnost -- 90      за другой срок
 */
import "dotenv/config";
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { PrismaClient } from "../lib/db/generated/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const dney = Number(process.argv[2]) || 30;
const ot = new Date(Date.now() - dney * 24 * 60 * 60 * 1000);

// Сайт ходит в базу через пул (DATABASE_URL) — скрипту он годится: читаем, а не
// накатываем миграции.
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("Не задан DATABASE_URL — отчёт собрать не из чего.");
  process.exit(1);
}
const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

function stroka(imya: string, znachenie: string | number): void {
  console.log(`  ${imya.padEnd(48, ".")} ${znachenie}`);
}

async function main(): Promise<void> {
  console.log(`\n=== Активность за ${dney} дней (с ${ot.toISOString().slice(0, 10)})\n`);

  const vsegoLyudey = await db.user.count();
  const novyh = await db.user.count({ where: { createdAt: { gte: ot } } });
  console.log("ЛЮДИ");
  stroka("всего учётных записей", vsegoLyudey);
  stroka("из них заведено за срок", novyh);

  const podtverdili = await db.user.count({ where: { emailVerifiedAt: { not: null } } });
  stroka("подтвердили почту", podtverdili);

  const sOnboardingom = await db.user.count({ where: { onboarding: { not: null } } });
  stroka("ответили на вопросы при регистрации", sOnboardingom);

  const kogdaVideli = await db.user.count({ where: { lastSeenAt: { not: null } } });
  stroka("у скольких записано время последнего входа", kogdaVideli);
  if (kogdaVideli === 0) {
    console.log("     ↑ ноль — это не «никто не заходил», а «поле не пишется»");
    console.log("       (docs/uchyot-povedeniya.md, слой 2, починка 1)");
  }

  console.log("\nЗАПИСИ НА КУРС");
  const zapisey = await db.enrollment.count({ where: { activatedAt: { gte: ot } } });
  const zapiseyVsego = await db.enrollment.count();
  stroka("всего записей на курсы", zapiseyVsego);
  stroka("из них за срок", zapisey);
  const poKursam = await db.enrollment.groupBy({ by: ["courseId"], _count: { _all: true } });
  for (const z of poKursam) {
    const k = await db.course.findUnique({ where: { id: z.courseId }, select: { slug: true } });
    stroka(`  ${k?.slug ?? z.courseId}`, z._count._all);
  }

  console.log("\nУРОКИ (отметка ставится, только когда ответили на задание)");
  const urokovVsego = await db.lessonProgress.count();
  const urokovZaSrok = await db.lessonProgress.count({ where: { updatedAt: { gte: ot } } });
  const proydeno = await db.lessonProgress.count({ where: { status: "completed" } });
  stroka("всего отметок об уроках", urokovVsego);
  stroka("из них тронуто за срок", urokovZaSrok);
  stroka("отмечено пройденными", proydeno);

  const lyudeySUrokami = await db.lessonProgress.groupBy({ by: ["userId"], _count: { _all: true } });
  stroka("человек, у кого есть хоть один урок", lyudeySUrokami.length);
  if (lyudeySUrokami.length) {
    const chisla = lyudeySUrokami.map((l) => l._count._all).sort((a, b) => b - a);
    stroka("уроков у самого прилежного", chisla[0]);
    stroka("серединное число уроков на человека", chisla[Math.floor(chisla.length / 2)]);
    stroka("сколько людей остановились на одном уроке", chisla.filter((n) => n === 1).length);
  }

  // РАЗБОР ПО ЛЮДЯМ. Без него общие числа врут: восемнадцать уроков одного
  // человека и по одному у троих дают «серединное 1» и «всего 21», а картина за
  // этим совсем разная. Почта наружу не выводится — только пометка, свой это
  // заход или посторонний.
  console.log("\nКТО ЭТИ ЛЮДИ И ГДЕ ОСТАНОВИЛИСЬ");
  const lyudi = await db.user.findMany({
    select: { id: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: "asc" },
  });
  const metkaCheloveka = (email: string): string =>
    /nauryzbek|capplight/i.test(email) ? "ВЛАДЕЛЕЦ"
      : /demo|test|example/i.test(email) ? "учебный"
      : "посторонний";

  for (const u of lyudi) {
    const lp = await db.lessonProgress.findMany({
      where: { userId: u.id },
      select: {
        status: true,
        updatedAt: true,
        lesson: { select: { slug: true, module: { select: { slug: true } } } },
      },
      orderBy: { updatedAt: "asc" },
    });
    const dney = new Set(lp.map((x) => x.updatedAt.toISOString().slice(0, 10)));
    const zagolovok =
      `${metkaCheloveka(u.email)} · заведён ${u.createdAt.toISOString().slice(0, 10)}` +
      ` · уроков ${lp.length} · дней захода ${dney.size}`;
    console.log(`  ${zagolovok}`);
    for (const x of lp.slice(0, 6)) {
      console.log(
        `     ${x.updatedAt.toISOString().slice(0, 16)} ` +
        `${x.status === "completed" ? "прошёл" : "открыл"} ` +
        `${x.lesson.module.slug} → ${x.lesson.slug}`
      );
    }
    if (lp.length > 6) console.log(`     … и ещё ${lp.length - 6}`);
  }

  console.log("\nПРОВЕРОЧНЫЕ РАБОТЫ");
  const popytokVsego = await db.testAttempt.count();
  const popytokZaSrok = await db.testAttempt.count({ where: { startedAt: { gte: ot } } });
  const sdano = await db.testAttempt.count({ where: { submittedAt: { not: null } } });
  const proshli = await db.testAttempt.count({ where: { passed: true } });
  stroka("всего попыток", popytokVsego);
  stroka("из них за срок", popytokZaSrok);
  stroka("доведено до конца", sdano);
  stroka("сдано с проходным баллом", proshli);
  stroka("брошено, не досдав", popytokVsego - sdano);

  console.log("\nПОМЕТКИ «НЕПОНЯТНО» — прямая оценка качества уроков");
  const pometokVsego = await db.confusionMark.count();
  stroka("всего пометок", pometokVsego);
  if (pometokVsego) {
    const poBlokam = await db.confusionMark.groupBy({
      by: ["blockId"],
      _count: { _all: true },
      orderBy: { _count: { blockId: "desc" } },
      take: 15,
    });
    for (const b of poBlokam) stroka(`  блок ${b.blockId}`, b._count._all);
  } else {
    console.log("     ↑ ноль пометок при живых учениках значит одно из двух:");
    console.log("       кнопку не находят или ею не пользуются");
  }

  console.log("\nЗАМЕТКИ И СЕРТИФИКАТЫ");
  stroka("заметок к урокам", await db.lessonNote.count());
  stroka("выдано сертификатов", await db.certificate.count());

  console.log("\nПОДПИСКИ");
  const podpisok = await db.subscription.groupBy({ by: ["status"], _count: { _all: true } });
  if (!podpisok.length) stroka("нет ни одной", 0);
  for (const p of podpisok) stroka(`  ${p.status}`, p._count._all);

  await db.$disconnect();
}

main().catch(async (e) => {
  console.error("Не вышло:", e instanceof Error ? e.message : e);
  await db.$disconnect();
  process.exit(1);
});
