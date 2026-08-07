"use client";

import type { ReadingStep } from "@/lib/types";
import CompQuestions from "./CompQuestions";
import TapText from "./TapText";
import styles from "./quest.module.css";

interface Props {
  step: ReadingStep;
  taskNumber: number;
  taskTotal: number;
  onHint: () => void;
  onComplete: () => void;
}

export default function ReadingTask({ step, taskNumber, taskTotal, onHint, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <div className={styles.taskTag}>
        {step.tag} · {taskNumber} из {taskTotal}
      </div>
      {step.note && <div className={styles.note}>💡 {step.note}</div>}
      <div className={styles.readingBox}>
        <div className={styles.readingTitle}>📄 {step.title}</div>
        {step.text.map((paragraph, i) => (
          <p key={i} className={styles.readingParagraph}>
            <TapText text={paragraph} />
          </p>
        ))}
      </div>
      <CompQuestions questions={step.questions} onHint={onHint} onComplete={onComplete} />
    </div>
  );
}
