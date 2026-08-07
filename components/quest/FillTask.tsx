"use client";

import { useEffect, useRef, useState } from "react";
import type { FillStep } from "@/lib/types";
import { speak } from "@/lib/speech";
import RuleLink, { type RuleRef } from "./RuleLink";
import styles from "./quest.module.css";

interface Props {
  step: FillStep;
  taskNumber: number;
  taskTotal: number;
  ruleLink?: RuleRef;
  onHint: () => void;
  onComplete: () => void;
}

export default function FillTask({ step, taskNumber, taskTotal, ruleLink, onHint, onComplete }: Props) {
  const [value, setValue] = useState("");
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 400);
    return () => clearTimeout(t);
  }, []);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    setTimeout(onComplete, 900);
  }

  function check() {
    const v = value.trim().toLowerCase();
    if (!v) {
      inputRef.current?.focus();
      return;
    }
    if (v === step.answer.toLowerCase()) {
      setSolved(true);
      speak(step.qBefore + step.answer + step.qAfter);
      finish();
    } else {
      onHint();
      setWrong(true);
      setAttempts((a) => a + 1);
      setShaking(false);
      requestAnimationFrame(() => setShaking(true));
      inputRef.current?.select();
    }
  }

  function reveal() {
    setRevealed(true);
    setValue(step.answer);
    speak(step.qBefore + step.answer + step.qAfter);
    finish();
  }

  return (
    <div className={`${styles.task} ${shaking ? styles.shake : ""}`}>
      <div className={styles.taskTag}>
        {step.tag} · {taskNumber} из {taskTotal}
      </div>
      <div className={styles.taskQ}>
        <span className={styles.answerHint}>{step.hintRu}</span>
      </div>
      <div className={styles.fillRow}>
        <span className={styles.fillEn}>{step.qBefore}</span>
        <input
          ref={inputRef}
          className={`${styles.fillInput} ${solved ? styles.ok : ""}`}
          type="text"
          autoComplete="off"
          spellCheck={false}
          aria-label="Пропущенное слово"
          disabled={solved || revealed}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") check();
          }}
        />
        <span className={styles.fillEn}>{step.qAfter}</span>
        <button type="button" className="btn" disabled={solved || revealed} onClick={check}>
          Проверить
        </button>
      </div>
      {solved && (
        <div className={`${styles.feedback} ${styles.feedbackOk}`}>
          Верно! ✓<span className={styles.feedbackWhy}>{step.why}</span>
          <RuleLink rule={ruleLink} />
        </div>
      )}
      {revealed && (
        <div className={styles.revealBox}>
          Правильный ответ: <b>{step.answer}</b>
          <span className={styles.revealWhy}>{step.why}</span>
          <RuleLink rule={ruleLink} />
        </div>
      )}
      {!solved && !revealed && wrong && (
        <div className={styles.note} style={{ marginTop: 12, marginBottom: 0 }}>
          💡{" "}
          {step.note ??
            `Это слово из ${step.answer.length} букв, начинается на «${step.answer[0]}».`}
          <RuleLink rule={ruleLink} />
        </div>
      )}
      {!solved && !revealed && attempts >= 3 && (
        <button type="button" className={styles.revealBtn} onClick={reveal}>
          Узнать ответ
        </button>
      )}
    </div>
  );
}
