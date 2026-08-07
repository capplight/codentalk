"use client";

import Link from "next/link";
import type { Chapter } from "@/lib/types";
import { chapterKey, useProgress } from "@/lib/progress";
import styles from "@/app/course/[course]/units/[unit]/unit.module.css";

export interface UnitStepData {
  kind: string;
  chapter: Chapter;
}

interface Props {
  courseSlug: string;
  steps: UnitStepData[];
  /** С какого номера начинать нумерацию (после шага «Правило», если он есть) */
  startNumber: number;
}

/** Интерактивные шаги юнита: упражнения, квест, текст — со статусом «пройдено». */
export default function UnitSteps({ courseSlug, steps, startNumber }: Props) {
  const progress = useProgress();

  return (
    <div className={styles.stepList}>
      {steps.map((step, i) => {
        const done = progress[chapterKey(courseSlug, step.chapter.slug)]?.done;
        const number = startNumber + i;
        return (
          <Link
            key={step.chapter.slug}
            href={`/course/${courseSlug}/${step.chapter.slug}`}
            className={`${styles.step} ${styles.stepLink}`}
          >
            <div className={`${styles.stepDot} ${done ? styles.done : ""}`}>
              {done ? "✓" : number}
            </div>
            <div className={styles.stepBody}>
              <div className={styles.stepKind}>{step.kind}</div>
              <div className={styles.stepTitle}>{step.chapter.title}</div>
              <div className={styles.stepDesc}>{step.chapter.subtitle}</div>
            </div>
            <div className={styles.stepGo}>{done ? "↻" : "→"}</div>
          </Link>
        );
      })}
    </div>
  );
}
