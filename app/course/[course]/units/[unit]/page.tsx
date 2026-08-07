import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getUnit } from "@/content";
import RulesView from "@/components/RulesView";
import UnitSteps from "@/components/UnitSteps";
import type { UnitStepData } from "@/components/UnitSteps";
import courseStyles from "../../course.module.css";
import styles from "./unit.module.css";

export function generateStaticParams() {
  return courses
    .filter((c) => !c.comingSoon)
    .flatMap((c) => (c.units ?? []).map((u) => ({ course: c.slug, unit: u.slug })));
}

interface Params {
  params: Promise<{ course: string; unit: string }>;
}

export async function generateMetadata({ params }: Params) {
  const p = await params;
  const found = getUnit(p.course, p.unit);
  return { title: found ? `${found.unit.title} · ${found.course.title}` : "Юнит" };
}

export default async function UnitPage({ params }: Params) {
  const p = await params;
  const found = getUnit(p.course, p.unit);
  if (!found) notFound();
  const { course, unit, number, total, prev, next } = found;

  const findChapter = (slug?: string) => course.chapters.find((ch) => ch.slug === slug);

  const steps: UnitStepData[] = [
    ...(unit.exerciseSlugs ?? [])
      .map(findChapter)
      .filter((ch): ch is NonNullable<typeof ch> => !!ch)
      .map((chapter) => ({ kind: "🏋️ Упражнение", chapter })),
    ...(unit.questSlug
      ? (() => {
          const chapter = findChapter(unit.questSlug);
          return chapter ? [{ kind: "🗺️ Квест", chapter }] : [];
        })()
      : []),
    ...(unit.textSlug
      ? (() => {
          const chapter = findChapter(unit.textSlug);
          return chapter ? [{ kind: "📄 Чтение и аудирование", chapter }] : [];
        })()
      : []),
  ];

  const hasRule = unit.ruleIds.length > 0 && !!course.rules;

  return (
    <main className="wrap-wide" style={{ paddingBottom: 48 }}>
      <div style={{ padding: "36px 0 8px" }}>
        <Link href={`/course/${course.slug}`} className={courseStyles.backLink}>
          ← {course.title}
        </Link>

        <div className={styles.unitPath} aria-label="Юниты уровня">
          {(course.units ?? []).map((u, i) => (
            <Link
              key={u.slug}
              href={`/course/${course.slug}/units/${u.slug}`}
              className={`${styles.unitPill} ${u.slug === unit.slug ? styles.current : ""}`}
            >
              {i + 1}. {u.title}
            </Link>
          ))}
        </div>

        <h1 className={courseStyles.pageTitle}>
          Юнит {number} из {total} · {unit.title}
        </h1>
        <p className={courseStyles.pageLead}>{unit.subtitle}</p>

        {unit.goals && unit.goals.length > 0 && (
          <div className={courseStyles.goalsBox}>
            <h2 className={courseStyles.goalsTitle}>Чему ты научишься в этом юните</h2>
            <ul className={courseStyles.goalsList}>
              {unit.goals.map((goal) => (
                <li key={goal} className={courseStyles.goalItem}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* На широком экране: правило слева в читаемой колонке, шаги и чек-лист справа. */}
      <div className={`${styles.unitBody} ${hasRule ? "" : styles.unitBodyFull}`}>
        {hasRule && (
          <div className={styles.ruleCard}>
            <div className={styles.ruleHeader}>
              <div className={styles.stepDot}>1</div>
              <div>
                <div className={styles.stepKind}>📖 Правило</div>
                <div className={styles.stepTitle}>Изучи тему перед практикой</div>
              </div>
            </div>
            <div className={styles.ruleEmbed}>
              <RulesView rules={course.rules!} onlyIds={unit.ruleIds} />
            </div>
          </div>
        )}

        <div className={styles.sideCol}>
          <UnitSteps courseSlug={course.slug} steps={steps} startNumber={hasRule ? 2 : 1} />

          {unit.goals && unit.goals.length > 0 && (
            <div className={styles.checklist}>
              <h2 className={styles.checklistTitle}>✅ Проверь себя: теперь я умею…</h2>
              <ul className={styles.checklistList}>
                {unit.goals.map((goal) => (
                  <li key={goal} className={styles.checklistItem}>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={styles.unitNav}>
        {prev ? (
          <Link href={`/course/${course.slug}/units/${prev.slug}`} className={styles.navLink}>
            ← Юнит {number - 1}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/course/${course.slug}/units/${next.slug}`} className={styles.navLink}>
            Юнит {number + 1}: {next.title} →
          </Link>
        ) : (
          <Link href={`/course/${course.slug}`} className={styles.navLink}>
            К списку уровня →
          </Link>
        )}
      </div>
    </main>
  );
}
