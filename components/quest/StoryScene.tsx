"use client";

import type { StoryStep } from "@/lib/types";
import SpeakButton from "./SpeakButton";
import TapText from "./TapText";
import styles from "./quest.module.css";

export default function StoryScene({ step }: { step: StoryStep }) {
  if (step.who && step.say) {
    return (
      <div className={styles.dialog}>
        <div className={styles.dialogWho}>
          {step.who} <SpeakButton text={step.say} />
        </div>
        <div className={styles.dialogEn}>“{step.say}”</div>
        {step.ru !== "…" && <div className={styles.dialogRu}>{step.ru}</div>}
      </div>
    );
  }
  return (
    <div className={styles.story}>
      {step.en && <TapText text={step.en} />}
      <span className={styles.storyRu}>{step.ru}</span>
    </div>
  );
}
