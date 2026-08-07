"use client";

import { useState } from "react";
import type { CompQuestion } from "@/lib/types";
import styles from "./quest.module.css";

interface Props {
  questions: CompQuestion[];
  onHint: () => void;
  onComplete: () => void;
}

/**
 * Серия вопросов к тексту (reading) или аудио (listening).
 * Вопросы идут по одному; ответившие остаются на экране со своим результатом.
 */
export default function CompQuestions({ questions, onHint, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  // для каждого вопроса: индексы выбранных вариантов
  const [picked, setPicked] = useState<Set<number>[]>(() => questions.map(() => new Set()));
  const [done, setDone] = useState(false);

  function pick(qIndex: number, optIndex: number) {
    if (qIndex !== current || done) return;
    const question = questions[qIndex];
    if (picked[qIndex].has(optIndex)) return;

    const next = picked.map((s, i) => (i === qIndex ? new Set(s).add(optIndex) : s));
    setPicked(next);

    if (question.options[optIndex].ok) {
      if (qIndex + 1 < questions.length) {
        setTimeout(() => setCurrent(qIndex + 1), 700);
      } else {
        setDone(true);
        setTimeout(onComplete, 900);
      }
    } else {
      onHint();
    }
  }

  return (
    <div className={styles.compQuestions}>
      <div className={styles.zoneDivider}>✍️ Задания</div>
      {questions.slice(0, current + 1).map((question, qi) => {
        const answered = [...picked[qi]].some((i) => question.options[i].ok);
        const wrongPicked = [...picked[qi]].some((i) => !question.options[i].ok);
        return (
          <div key={qi} className={styles.compQuestion}>
            <div className={styles.compQLabel}>
              Вопрос {qi + 1} из {questions.length}
            </div>
            <div className={styles.taskQ}>{question.q}</div>
            <div className={styles.opts}>
              {question.options.map((o, oi) => {
                const cls = [styles.opt];
                if (picked[qi].has(oi)) cls.push(o.ok ? styles.right : styles.wrong);
                return (
                  <button
                    key={o.t}
                    type="button"
                    className={cls.join(" ")}
                    disabled={answered || picked[qi].has(oi) || qi !== current}
                    onClick={() => pick(qi, oi)}
                  >
                    {o.t}
                  </button>
                );
              })}
            </div>
            {answered ? (
              <div className={`${styles.feedback} ${styles.feedbackOk}`}>
                Верно! ✓<span className={styles.feedbackWhy}>{question.why}</span>
              </div>
            ) : wrongPicked ? (
              <div className={styles.note} style={{ marginTop: 12, marginBottom: 0 }}>
                💡 Вернись к тексту или аудио — ответ есть там.
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
