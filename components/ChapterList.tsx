"use client";

import Link from "next/link";
import type { Chapter } from "@/lib/types";
import { countTasks } from "@/lib/types";
import { chapterKey, useProgress } from "@/lib/progress";
import styles from "./ChapterList.module.css";

interface Props {
  courseSlug: string;
  chapters: Chapter[];
  /** Анонсы будущих глав */
  upcoming?: string[];
}

export default function ChapterList({ courseSlug, chapters, upcoming }: Props) {
  const progress = useProgress();

  return (
    <div className={styles.list}>
      {chapters.map((chapter, i) => {
        const done = progress[chapterKey(courseSlug, chapter.slug)]?.done;
        return (
          <Link
            key={chapter.slug}
            href={`/course/${courseSlug}/${chapter.slug}`}
            className={styles.item}
          >
            <div className={`${styles.badge} ${done ? styles.badgeDone : ""}`}>
              {done ? "✓" : chapter.exam ? "🎓" : i + 1}
            </div>
            <div className={styles.body}>
              <div className={styles.itemTitle}>
                {chapter.exam ? "Экзамен" : `Глава ${i + 1}`} · {chapter.title}
              </div>
              <div className={styles.itemSub}>{chapter.subtitle}</div>
              <div className={styles.itemMeta}>
                {chapter.stages.map((s) => s.icon).join(" ")} · {countTasks(chapter)} заданий
                {done && <span className={styles.doneLabel}> · пройдена — можно повторить</span>}
              </div>
            </div>
            <div className={styles.go}>{done ? "↻" : "→"}</div>
          </Link>
        );
      })}
      {upcoming?.map((title) => (
        <div key={title} className={`${styles.item} ${styles.itemSoon}`}>
          <div className={styles.badge}>…</div>
          <div className={styles.body}>
            <div className={styles.itemTitle}>{title}</div>
            <div className={styles.itemSub}>Скоро — следите за @codentalk.kz</div>
          </div>
        </div>
      ))}
    </div>
  );
}
