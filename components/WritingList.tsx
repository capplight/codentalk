"use client";

import Link from "next/link";
import type { WritingPrompt } from "@/lib/types";
import { chapterKey, useProgress } from "@/lib/progress";
import styles from "./UnitList.module.css";

interface Props {
  courseSlug: string;
  prompts: WritingPrompt[];
}

export default function WritingList({ courseSlug, prompts }: Props) {
  const progress = useProgress();

  return (
    <div className={styles.list}>
      {prompts.map((prompt, i) => {
        const done = !!progress[chapterKey(courseSlug, `writing-${prompt.slug}`)]?.done;
        return (
          <Link
            key={prompt.slug}
            href={`/course/${courseSlug}/writing/${prompt.slug}`}
            className={styles.item}
          >
            <div className={`${styles.badge} ${done ? styles.badgeDone : ""}`}>
              {done ? "✓" : i + 1}
            </div>
            <div className={styles.body}>
              <div className={styles.itemTitle}>{prompt.title}</div>
              <div className={styles.itemSub}>{prompt.instruction}</div>
              {done && <div className={styles.progress}>выполнено</div>}
            </div>
            <div className={styles.go}>{done ? "↻" : "→"}</div>
          </Link>
        );
      })}
    </div>
  );
}
