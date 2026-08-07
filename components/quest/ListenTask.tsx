"use client";

import { useRef, useState } from "react";
import type { ListenStep } from "@/lib/types";
import { speak } from "@/lib/speech";
import RuleLink, { type RuleRef } from "./RuleLink";
import styles from "./quest.module.css";

interface Props {
  step: ListenStep;
  taskNumber: number;
  taskTotal: number;
  ruleLink?: RuleRef;
  onHint: () => void;
  onComplete: () => void;
}

export default function ListenTask({ step, taskNumber, taskTotal, ruleLink, onHint, onComplete }: Props) {
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [solved, setSolved] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [playedOnce, setPlayedOnce] = useState(false);
  const doneRef = useRef(false);

  function play() {
    setPlayedOnce(true);
    speak(step.audio);
  }

  function pick(i: number) {
    if (solved || picked.has(i)) return;
    const option = step.options[i];
    setPicked((prev) => new Set(prev).add(i));
    if (option.ok) {
      setSolved(true);
      if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onComplete, 900);
      }
    } else {
      onHint();
      setShaking(false);
      requestAnimationFrame(() => setShaking(true));
    }
  }

  const wrongPicked = [...picked].some((i) => !step.options[i].ok);

  return (
    <div className={`${styles.task} ${shaking ? styles.shake : ""}`}>
      <div className={styles.taskTag}>
        {step.tag} · {taskNumber} из {taskTotal}
      </div>
      <div className={styles.taskQ}>{step.q}</div>
      <button type="button" className={styles.playBtn} onClick={play}>
        🔊 {playedOnce ? "Послушать ещё раз" : "Послушать"}
      </button>
      <div className={styles.opts}>
        {step.options.map((o, i) => {
          const cls = [styles.opt];
          if (picked.has(i)) cls.push(o.ok ? styles.right : styles.wrong);
          return (
            <button
              key={o.t}
              type="button"
              className={cls.join(" ")}
              disabled={solved || picked.has(i)}
              onClick={() => pick(i)}
            >
              {o.t}
            </button>
          );
        })}
      </div>
      {solved ? (
        <div className={`${styles.feedback} ${styles.feedbackOk}`}>
          Верно! ✓ Прозвучало: «{step.audio}»
          <span className={styles.feedbackWhy}>{step.why}</span>
          <RuleLink rule={ruleLink} />
        </div>
      ) : wrongPicked ? (
        <div className={styles.note} style={{ marginTop: 12, marginBottom: 0 }}>
          💡 {step.note ?? "Нажми «Послушать ещё раз» — слушай не спеша, слово за словом."}
          <RuleLink rule={ruleLink} />
        </div>
      ) : null}
    </div>
  );
}
