"use client";

import { useEffect, useMemo, useState } from "react";
import type { Phrase } from "@/lib/types";
import { scoreSpeaking, type SpeakingResult } from "@/lib/speaking";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import SpeakButton from "@/components/quest/SpeakButton";
import styles from "./SpeakingTrainer.module.css";

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
  phrases: Phrase[];
}

export default function SpeakingTrainer({ phrases }: Props) {
  const [session, setSession] = useState<Phrase[] | null>(null);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<SpeakingResult | null>(null);

  const { supported, listening, transcript, error, start, stop, reset } = useSpeechRecognition();

  useEffect(() => {
    setSession(shuffled(phrases).slice(0, Math.min(10, phrases.length)));
  }, [phrases]);

  const current = useMemo(() => session?.[index], [session, index]);

  useEffect(() => {
    if (transcript && current) {
      setResult(scoreSpeaking(current.en, transcript));
    }
  }, [transcript, current]);

  function next() {
    reset();
    setResult(null);
    setIndex((i) => i + 1);
  }

  function tryAgain() {
    reset();
    setResult(null);
    start();
  }

  if (!supported) {
    return (
      <p className={styles.unsupported}>
        Твой браузер не поддерживает распознавание речи. Открой эту страницу в Google Chrome на
        компьютере или телефоне — там всё заработает.
      </p>
    );
  }

  if (!session) {
    return <p className={styles.unsupported}>Готовим фразы…</p>;
  }
  if (session.length === 0) {
    return (
      <p className={styles.unsupported}>
        В этом уровне пока нет фраз для практики. Пройди пару глав — здесь появится материал.
      </p>
    );
  }

  if (index >= session.length) {
    return (
      <div className={styles.wrap}>
        <div className={styles.result}>
          <div className={styles.badge}>🎙️</div>
          <h2 className={styles.resultTitle}>Практика завершена</h2>
          <p className={styles.resultLead}>
            Ты проговорил {session.length} фраз этого уровня. Точность распознавания речи не идеальна
            — ориентируйся на собственное ощущение, а не только на оценку.
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              className="btn big"
              onClick={() => {
                setSession(shuffled(phrases).slice(0, Math.min(10, phrases.length)));
                setIndex(0);
                reset();
                setResult(null);
              }}
            >
              Ещё раз →
            </button>
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
          Фраза {index + 1} из {session.length}
        </span>
        <span className={styles.progressTrack}>
          <span className={styles.progressFill} style={{ width: `${percentDone}%` }} />
        </span>
      </div>

      <div className={styles.phraseEn}>
        <SpeakButton text={current!.en} />
        {current!.en}
      </div>
      <p className={styles.phraseRu}>{current!.ru}</p>

      {error && <p className={styles.errorLine}>{error}</p>}

      <div className={styles.micRow}>
        <button
          type="button"
          className={[styles.micBtn, listening ? styles.listening : ""].join(" ")}
          onClick={() => (listening ? stop() : start())}
        >
          {listening ? "⏹ Слушаю…" : "🎙️ Сказать"}
        </button>
      </div>

      {transcript && result && (
        <div className={styles.heardBox}>
          <div className={styles.heardLabel}>Ты сказал</div>
          <div className={styles.heardText}>{transcript}</div>
          <div className={[styles.verdict, styles[result.verdict]].join(" ")}>
            {result.verdict === "great" && "✅ Отлично"}
            {result.verdict === "close" && "🤏 Почти"}
            {result.verdict === "retry" && "🔁 Попробуй ещё раз"}
          </div>
        </div>
      )}

      <div className={styles.actions}>
        {transcript && (
          <button type="button" className="btn ghost" onClick={tryAgain}>
            Ещё раз
          </button>
        )}
        <button type="button" className="btn big" onClick={next}>
          Дальше →
        </button>
      </div>
    </div>
  );
}
