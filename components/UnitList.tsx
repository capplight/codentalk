"use client";

import Link from "next/link";
import type { Unit } from "@/lib/types";
import { chapterKey, useProgress } from "@/lib/progress";
import styles from "./UnitList.module.css";

interface Props {
  courseSlug: string;
  units: Unit[];
  examSlug?: string;
  /** Две колонки — для страниц в широком контейнере (.wrap-wide) */
  wide?: boolean;
}

function unitChapterSlugs(unit: Unit): string[] {
  return [...(unit.exerciseSlugs ?? []), unit.questSlug, unit.textSlug].filter(
    (s): s is string => !!s
  );
}

export default function UnitList({ courseSlug, units, examSlug, wide }: Props) {
  const progress = useProgress();

  return (
    <div className={`${styles.list} ${wide ? styles.listWide : ""}`}>
      {units.map((unit, i) => {
        const slugs = unitChapterSlugs(unit);
        const doneCount = slugs.filter((s) => progress[chapterKey(courseSlug, s)]?.done).length;
        const done = slugs.length > 0 && doneCount === slugs.length;
        const stepChips = [
          unit.ruleIds.length > 0 && "📖 правило",
          ...(unit.exerciseSlugs ?? []).map(() => "🏋️ упражнение"),
          unit.questSlug && "🗺️ квест",
          unit.textSlug && "📄 чтение",
        ].filter(Boolean) as string[];

        return (
          <Link
            key={unit.slug}
            href={`/course/${courseSlug}/units/${unit.slug}`}
            className={styles.item}
          >
            <div className={`${styles.badge} ${done ? styles.badgeDone : ""}`}>
              {done ? "✓" : i + 1}
            </div>
            <div className={styles.body}>
              <div className={styles.itemTitle}>
                Юнит {i + 1} · {unit.title}
              </div>
              <div className={styles.itemSub}>{unit.subtitle}</div>
              <div className={styles.itemMeta}>
                {stepChips.map((chip, ci) => (
                  <span key={ci} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
              {slugs.length > 0 && (
                <div className={styles.progress}>
                  {done ? "пройден полностью" : `${doneCount} из ${slugs.length} шагов`}
                </div>
              )}
            </div>
            <div className={styles.go}>{done ? "↻" : "→"}</div>
          </Link>
        );
      })}

      {examSlug && (
        <Link href={`/course/${courseSlug}/${examSlug}`} className={styles.item}>
          <div className={`${styles.badge} ${styles.badgeExam}`}>🎓</div>
          <div className={styles.body}>
            <div className={styles.itemTitle}>Итоговый экзамен уровня</div>
            <div className={styles.itemSub}>
              Проверь все темы юнитов разом: грамматика, чтение и аудирование в одном испытании.
            </div>
          </div>
          <div className={styles.go}>→</div>
        </Link>
      )}
    </div>
  );
}
