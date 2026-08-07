"use client";

import { useEffect, useState } from "react";
import type { ListeningStep } from "@/lib/types";
import { speakSequence, stopSpeech } from "@/lib/speech";
import CompQuestions from "./CompQuestions";
import styles from "./quest.module.css";

interface Props {
  step: ListeningStep;
  taskNumber: number;
  taskTotal: number;
  onHint: () => void;
  onComplete: () => void;
}

export default function ListeningTask({ step, taskNumber, taskTotal, onHint, onComplete }: Props) {
  const [playedOnce, setPlayedOnce] = useState(false);

  // останавливаем озвучку, если ученик ушёл со страницы посреди аудио
  useEffect(() => stopSpeech, []);

  function play() {
    setPlayedOnce(true);
    speakSequence(step.audio);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskTag}>
        {step.tag} · {taskNumber} из {taskTotal}
      </div>
      {step.note && <div className={styles.note}>💡 {step.note}</div>}
      <div className={styles.readingBox}>
        <div className={styles.readingTitle}>🎧 {step.intro}</div>
        <button type="button" className={styles.playBtn} onClick={play} style={{ marginBottom: 0 }}>
          🔊 {playedOnce ? "Послушать ещё раз" : "Послушать"}
        </button>
        {!playedOnce && (
          <p className={styles.listeningHint}>
            Сначала прослушай аудио целиком — вопросы откроются после первого прослушивания.
          </p>
        )}
      </div>
      {playedOnce && (
        <CompQuestions questions={step.questions} onHint={onHint} onComplete={onComplete} />
      )}
    </div>
  );
}
