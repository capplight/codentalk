"use client";

import { chapterKey, useProgress } from "@/lib/progress";
import styles from "./CourseProgress.module.css";

interface Props {
  courseSlug: string;
  /** Слаги всех глав уровня — по ним считается процент прохождения */
  chapterSlugs: string[];
  /** Компактный вид для карточек в списке уровней */
  compact?: boolean;
}

export default function CourseProgress({ courseSlug, chapterSlugs, compact }: Props) {
  const progress = useProgress();
  const done = chapterSlugs.filter((slug) => progress[chapterKey(courseSlug, slug)]?.done).length;
  const total = chapterSlugs.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  if (compact) {
    return (
      <div className={styles.compact}>
        <span className={styles.track}>
          <span className={styles.fill} style={{ width: `${percent}%` }} />
        </span>
        <span className={styles.compactLabel}>
          {done > 0 ? `${percent}%` : "не начат"}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <span className={styles.title}>
          {percent === 100 ? "🎉 Уровень пройден полностью!" : "Твой прогресс на уровне"}
        </span>
        <span className={styles.count}>
          {done} из {total}
        </span>
      </div>
      <span className={styles.track}>
        <span className={styles.fill} style={{ width: `${percent}%` }} />
      </span>
      <div className={styles.hint}>
        {percent === 0
          ? "Начни с первого шага — правил уровня."
          : percent === 100
            ? "Все главы, тексты и упражнения закрыты. Можно двигаться на следующий уровень."
            : `Пройдено ${percent}% материалов уровня. Прогресс хранится в этом браузере.`}
      </div>
    </div>
  );
}
