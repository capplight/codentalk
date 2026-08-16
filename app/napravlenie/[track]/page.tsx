import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { courseCards } from "@/courses";
import { findNapravlenie } from "@/courses/napravleniya";
import { withCount } from "@/lib/plural";
import styles from "./napravlenie.module.css";

type Params = { params: Promise<{ track: string }> };

export async function generateMetadata({ params }: Params) {
  const { track } = await params;
  const napravlenie = findNapravlenie(track);
  return {
    title: napravlenie?.title ?? "Направление",
    description: napravlenie?.tagline,
  };
}

/**
 * Ступени направления.
 *
 * Страница открыта всем: по ней человек решает, с чего начинать, и она же
 * приводит людей из поиска. Закрыты только сами уроки.
 *
 * ЗАМКОВ ЗДЕСЬ НЕТ И НЕ БУДЕТ (решение владельца). Порядок ступеней — совет, а
 * не запрет: человек, знающий язык на A2, начинает со второй и не обязан
 * просиживать первую. Помечено «готовится» только то, чего ещё не написали.
 */
export default async function NapravleniePage({ params }: Params) {
  const { track } = await params;
  const napravlenie = findNapravlenie(track);
  if (!napravlenie) notFound();

  const cards = new Map(courseCards().map((card) => [card.slug, card]));

  /*
   * Пройденные ступени. Ступень считается пройденной по сданному экзамену —
   * и неважно, открывал ли человек уроки: он мог прийти со своим знанием и
   * сразу сдать. Это решение владельца, а не упрощение.
   */
  const session = await auth();
  const userId = session?.user?.id;
  let proydeno = new Set<string>();
  if (userId) {
    const sdannye = await prisma.testAttempt.findMany({
      where: {
        userId,
        passed: true,
        test: { kind: "final_exam" },
      },
      select: { test: { select: { course: { select: { slug: true } } } } },
    });
    proydeno = new Set(
      sdannye
        .map((popytka) => popytka.test.course?.slug)
        .filter((slug): slug is string => typeof slug === "string")
    );
  }

  return (
    <main className="wrap-wide" style={{ paddingBottom: 56 }}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>Направление</span>
        <h1 className={styles.title}>{napravlenie.title}</h1>
        <p className={styles.lead}>{napravlenie.tagline}</p>
      </div>

      <p className={styles.poryadok}>
        Ступени идут по порядку, но начинать можно с любой. Если язык уже знаком, первая
        тебе не нужна.
      </p>

      <div className={styles.grid}>
        {napravlenie.stupeni.map((stupen, i) => {
          const card = stupen.course ? cards.get(stupen.course) : undefined;
          const gotova = Boolean(stupen.course && card);
          const sdana = stupen.course ? proydeno.has(stupen.course) : false;

          const telo = (
            <>
              {sdana && (
                <span className={styles.pechat} aria-label="Ступень пройдена">
                  Пройдено
                </span>
              )}

              <span className={styles.nomer}>Ступень {i + 1}</span>

              <h2 className={styles.stupenName}>
                {stupen.name}
                <span className={styles.perevod}>{stupen.perevod}</span>
              </h2>

              <span className={styles.cefr}>{stupen.cefr}</span>

              <p className={styles.about}>{stupen.about}</p>

              <span className={styles.meta}>
                {gotova && card
                  ? `${withCount(card.lessons, "урок", "урока", "уроков")} · ${withCount(
                      Math.max(1, Math.round(card.minutes / 60)),
                      "час",
                      "часа",
                      "часов"
                    )}${card.hasExam ? " · с экзаменом" : ""}`
                  : "готовится"}
              </span>
            </>
          );

          // Карточка без курса ссылкой не становится: обещание, за которым
          // пока ничего нет, нажимать некуда.
          return gotova && stupen.course ? (
            <Link
              key={stupen.name}
              href={`/learn/${stupen.course}`}
              className={`${styles.card} ${styles.cardOpen}`}
            >
              {telo}
            </Link>
          ) : (
            <div key={stupen.name} className={`${styles.card} ${styles.cardSoon}`}>
              {telo}
            </div>
          );
        })}
      </div>
    </main>
  );
}
