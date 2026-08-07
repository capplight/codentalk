"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Phrase } from "@/lib/types";
import { buildSession, getVocabProgressSnapshot, markWord } from "@/lib/vocabulary";
import SpeakButton from "@/components/quest/SpeakButton";
import { speak } from "@/lib/speech";
import questStyles from "@/components/quest/quest.module.css";
import styles from "./VocabTrainer.module.css";

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let k = a.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [a[k], a[j]] = [a[j], a[k]];
  }
  return a;
}

interface Props {
  courseSlug: string;
  words: Phrase[];
}

export default function VocabTrainer({ courseSlug, words }: Props) {
  const [session, setSession] = useState<Phrase[] | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  // Сессия собирается один раз на клиенте, чтобы учесть уже сохранённый прогресс.
  useEffect(() => {
    const snapshot = getVocabProgressSnapshot();
    setSession(buildSession(words, snapshot, courseSlug, 10));
  }, [words, courseSlug]);

  const current = session?.[index];

  const options = useMemo(() => {
    if (!current) return [];
    const pool = words.filter((w) => w.ru !== current.ru);
    const distractors: string[] = [];
    for (const w of shuffled(pool)) {
      if (distractors.length >= 3) break;
      if (!distractors.includes(w.ru)) distractors.push(w.ru);
    }
    return shuffled([current.ru, ...distractors]);
  }, [current, words]);

  if (!session) {
    return <p className={styles.empty}>Готовим слова…</p>;
  }
  if (session.length === 0) {
    return (
      <p className={styles.empty}>
        В этом уровне пока нет слов для тренировки. Пройди пару глав — и здесь появится словарь.
      </p>
    );
  }

  function choose(option: string) {
    if (picked || !current) return;
    setPicked(option);
    const isCorrect = option === current.ru;
    markWord(courseSlug, current.en, isCorrect);
    if (isCorrect) setCorrectCount((c) => c + 1);
    else speak(current.en);
    setTimeout(() => {
      setPicked(null);
      setIndex((i) => i + 1);
    }, 900);
  }

  if (index >= session.length) {
    const percent = Math.round((correctCount / session.length) * 100);
    return (
      <div className={styles.wrap}>
        <div className={styles.result}>
          <div className={styles.badge}>{percent >= 80 ? "🏆" : percent >= 50 ? "👍" : "🌱"}</div>
          <h2 className={styles.resultTitle}>
            {correctCount} из {session.length} верно
          </h2>
          <p className={styles.resultLead}>
            {percent === 100
              ? "Все слова этой сессии — точно в цель! В следующий раз тренажёр подберёт новые."
              : "Слова, где была ошибка, снова появятся в начале следующей тренировки — это нормальная часть запоминания."}
          </p>
          <div className={styles.actions}>
            <Link className="btn big" href={`/course/${courseSlug}/vocabulary/train`}>
              Тренировать ещё →
            </Link>
            <Link className="btn ghost" href={`/course/${courseSlug}/vocabulary`}>
              К словарю
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const percentDone = Math.round((index / session.length) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>
          Слово {index + 1} из {session.length}
        </span>
        <span className={styles.progressTrack}>
          <span className={styles.progressFill} style={{ width: `${percentDone}%` }} />
        </span>
      </div>

      <div className={questStyles.task}>
        <div className={questStyles.taskTag}>Как переводится это слово?</div>
        <div className={styles.word}>
          <SpeakButton text={current!.en} />
          {current!.en}
        </div>
        <div className={questStyles.opts}>
          {options.map((option) => {
            const cls = [questStyles.opt];
            if (picked === option) cls.push(option === current!.ru ? questStyles.right : questStyles.wrong);
            else if (picked && option === current!.ru) cls.push(questStyles.right);
            return (
              <button
                key={option}
                type="button"
                className={cls.join(" ")}
                disabled={!!picked}
                onClick={() => choose(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
