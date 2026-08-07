"use client";

import type { Stage } from "@/lib/types";
import styles from "./quest.module.css";

interface Props {
  stages: Stage[];
  current: number;
  finished: boolean;
  chapterLabel: string;
}

export default function JourneyBar({ stages, current, finished, chapterLabel }: Props) {
  const label = finished ? "Пройдена!" : stages[current]?.name ?? "";
  return (
    <div className={styles.journey}>
      <div className={styles.journeyTrack}>
        {stages.map((s, i) => {
          const state = finished || i < current ? styles.done : i === current ? styles.on : "";
          return (
            <span key={s.name} style={{ display: "contents" }}>
              {i > 0 && (
                <span className={styles.leg}>
                  <span
                    className={styles.legFill}
                    style={{ width: finished || i <= current ? "100%" : "0%" }}
                  />
                </span>
              )}
              <span className={`${styles.stageDot} ${state}`} title={s.name}>
                {s.icon}
              </span>
            </span>
          );
        })}
      </div>
      <div className={styles.journeyLabel}>
        {chapterLabel} · {label}
      </div>
    </div>
  );
}
