"use client";

import { useRef, useState } from "react";
import type { AssembleStep } from "@/lib/types";
import { speak } from "@/lib/speech";
import RuleLink, { type RuleRef } from "./RuleLink";
import styles from "./quest.module.css";

interface Props {
  step: AssembleStep;
  taskNumber: number;
  taskTotal: number;
  ruleLink?: RuleRef;
  onHint: () => void;
  onComplete: () => void;
}

function shuffled(words: string[]): string[] {
  const a = [...words];
  for (let k = a.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [a[k], a[j]] = [a[j], a[k]];
  }
  // случайно собравшийся правильный порядок — сдвигаем
  if (a.join(" ") === words.join(" ") && a.length > 1) a.push(a.shift()!);
  return a;
}

export default function AssembleTask({ step, taskNumber, taskTotal, ruleLink, onHint, onComplete }: Props) {
  // индексы слов из step.words: что в ответе, что в пуле
  const [pool, setPool] = useState<number[]>(() =>
    shuffled(step.words.map((_, i) => String(i))).map(Number)
  );
  const [placed, setPlaced] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const doneRef = useRef(false);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    setTimeout(onComplete, 900);
  }

  function moveToLine(idx: number) {
    if (solved || revealed) return;
    const nextPlaced = [...placed, idx];
    setPool(pool.filter((i) => i !== idx));
    setPlaced(nextPlaced);
    check(nextPlaced);
  }

  function moveBack(idx: number) {
    if (solved || revealed) return;
    setPlaced(placed.filter((i) => i !== idx));
    setPool([...pool, idx]);
    setWrong(false);
  }

  function check(current: number[]) {
    if (current.length !== step.words.length) {
      setWrong(false);
      return;
    }
    const got = current.map((i) => step.words[i]).join(" ");
    if (got === step.answer) {
      setSolved(true);
      speak(step.answer);
      finish();
    } else {
      onHint();
      setWrong(true);
      setAttempts((a) => a + 1);
      setShaking(false);
      requestAnimationFrame(() => setShaking(true));
    }
  }

  function reveal() {
    setRevealed(true);
    speak(step.answer);
    finish();
  }

  return (
    <div className={`${styles.task} ${shaking ? styles.shake : ""}`}>
      <div className={styles.taskTag}>
        {step.tag} · {taskNumber} из {taskTotal}
      </div>
      <div className={styles.taskQ}>{step.q}</div>
      <div className={styles.answerLine}>
        {placed.length === 0 && <span className={styles.answerHint}>Собери фразу из слов ниже…</span>}
        {placed.map((i) => (
          <button
            key={i}
            type="button"
            className={`${styles.chip} ${styles.chipPlaced}`}
            disabled={solved || revealed}
            onClick={() => moveBack(i)}
          >
            {step.words[i]}
          </button>
        ))}
      </div>
      <div className={styles.chips}>
        {pool.map((i) => (
          <button
            key={i}
            type="button"
            className={styles.chip}
            disabled={revealed}
            onClick={() => moveToLine(i)}
          >
            {step.words[i]}
          </button>
        ))}
      </div>
      {solved && (
        <div className={`${styles.feedback} ${styles.feedbackOk}`}>
          Верно! ✓<span className={styles.feedbackWhy}>{step.why}</span>
          <RuleLink rule={ruleLink} />
        </div>
      )}
      {revealed && (
        <div className={styles.revealBox}>
          Правильный порядок: <b>{step.answer}</b>
          <span className={styles.revealWhy}>{step.why}</span>
          <RuleLink rule={ruleLink} />
        </div>
      )}
      {!solved && !revealed && wrong && (
        <div className={styles.note} style={{ marginTop: 12, marginBottom: 0 }}>
          💡{" "}
          {step.note ??
            `Первое слово — «${step.answer.split(" ")[0]}». Нажми на слово в строке, чтобы вернуть его вниз.`}
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
