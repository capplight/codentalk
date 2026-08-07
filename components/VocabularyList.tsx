"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Phrase } from "@/lib/types";
import { vocabKey } from "@/lib/vocabulary";
import { useVocabProgress } from "@/lib/useVocabProgress";
import SpeakButton from "@/components/quest/SpeakButton";
import styles from "./VocabularyList.module.css";

function masteryIcon(box: number | undefined): string {
  if (box === undefined) return "⚪";
  if (box <= 1) return "🌱";
  if (box === 2) return "🌿";
  return "⭐";
}

export default function VocabularyList({
  courseSlug,
  words,
}: {
  courseSlug: string;
  words: Phrase[];
}) {
  const progress = useVocabProgress();
  const [query, setQuery] = useState("");

  const stats = useMemo(() => {
    let mastered = 0;
    let learning = 0;
    for (const w of words) {
      const box = progress[vocabKey(courseSlug, w.en)]?.box;
      if (box === undefined) continue;
      if (box >= 3) mastered++;
      else learning++;
    }
    return { total: words.length, mastered, learning, fresh: words.length - mastered - learning };
  }, [words, progress, courseSlug]);

  const filtered = query.trim()
    ? words.filter(
        (w) =>
          w.en.toLowerCase().includes(query.toLowerCase()) ||
          w.ru.toLowerCase().includes(query.toLowerCase())
      )
    : words;

  return (
    <div>
      <div className={styles.stats}>
        <span className={styles.statChip}>Всего слов: {stats.total}</span>
        <span className={styles.statChip}>⭐ Выучено: {stats.mastered}</span>
        <span className={styles.statChip}>🌱 Учу: {stats.learning}</span>
        <span className={styles.statChip}>⚪ Новые: {stats.fresh}</span>
      </div>

      <div className={styles.toolbar}>
        <input
          type="text"
          className={styles.search}
          placeholder="Поиск слова…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Поиск по словарю"
        />
        <Link className="btn big" href={`/course/${courseSlug}/vocabulary/train`}>
          🧠 Начать тренировку →
        </Link>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>Ничего не нашлось. Попробуй другое слово.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((w) => {
            const box = progress[vocabKey(courseSlug, w.en)]?.box;
            return (
              <div key={w.en} className={styles.row}>
                <span className={styles.mastery} title="Прогресс">
                  {masteryIcon(box)}
                </span>
                <SpeakButton text={w.en} />
                <span className={styles.en}>{w.en}</span>
                <span className={styles.ru}>{w.ru}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
