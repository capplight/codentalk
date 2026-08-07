"use client";

import Link from "next/link";
import type { Chapter, Course, Phrase } from "@/lib/types";
import SpeakButton from "./SpeakButton";
import styles from "./quest.module.css";

interface Props {
  chapter: Chapter;
  courseSlug: string;
  nextChapter?: Chapter;
  nextCourse?: Course;
  taskTotal: number;
  hints: number;
  phrases: Phrase[];
}

function PhraseList({ title, items }: { title: string; items: Phrase[] }) {
  if (items.length === 0) return null;
  return (
    <div className={styles.phrasebook}>
      <h3>{title}</h3>
      {items.map((p) => (
        <div key={p.en} className={styles.phraseRow}>
          <SpeakButton text={p.en} />
          <div className={styles.phraseEn}>{p.en}</div>
          <div className={styles.phraseRu}>{p.ru}</div>
        </div>
      ))}
    </div>
  );
}

export default function Finale({
  chapter,
  courseSlug,
  nextChapter,
  nextCourse,
  taskTotal,
  hints,
  phrases,
}: Props) {
  const courseDone = !nextChapter;
  const grade =
    hints === 0 ? "Отлично — ни одной подсказки!" : hints <= 3 ? "Хорошо!" : "Сдано — уровень подтверждён!";
  return (
    <div className={styles.finale}>
      <div className={styles.medal}>{chapter.exam ? "🎓" : courseDone ? "🏆" : "🏅"}</div>
      <h2 className={styles.finaleTitle}>
        {chapter.exam
          ? `Экзамен сдан! ${grade}`
          : courseDone
            ? "Курс пройден — это большая победа!"
            : "Глава пройдена!"}
      </h2>
      <p style={{ color: "var(--ink-soft)", maxWidth: "44ch", margin: "0 auto" }}>
        {chapter.exam
          ? "Уровень пройден по-настоящему: грамматика, слова, чтение и аудирование — всё проверено в одном испытании."
          : "Именно так и учится язык: не зубрёжкой, а маленькими победами. Фразы из главы уже в твоём разговорнике — забирай их с собой."}
      </p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <b>{taskTotal}</b>
          <span>заданий выполнено</span>
        </div>
        {!chapter.exam && (
          <div className={styles.stat}>
            <b>{phrases.length}</b>
            <span>фраз в разговорнике</span>
          </div>
        )}
        <div className={styles.stat}>
          <b>{hints}</b>
          <span>{hints === 0 ? "подсказок — ни одной!" : "подсказок использовано"}</span>
        </div>
      </div>
      {chapter.goals && chapter.goals.length > 0 && (
        <div className={`${styles.goalsCard} ${styles.goalsDone}`}>
          <div className={styles.goalsCardTitle}>✅ Теперь ты умеешь</div>
          <ul className={styles.goalsCardList}>
            {chapter.goals.map((goal) => (
              <li key={goal} className={styles.goalsCardItem}>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      )}
      <PhraseList title="📒 Твой разговорник" items={phrases} />
      <PhraseList title="✨ Новые слова" items={chapter.words} />
      <div className={styles.finaleActions}>
        {nextChapter ? (
          <Link className="btn big" href={`/course/${courseSlug}/${nextChapter.slug}`}>
            Глава дальше: {nextChapter.title} →
          </Link>
        ) : nextCourse ? (
          <Link
            className="btn big"
            href={`/course/${nextCourse.slug}/${nextCourse.chapters[0].slug}`}
          >
            Следующий уровень: {nextCourse.emoji} {nextCourse.title} →
          </Link>
        ) : (
          <Link className="btn big" href={`/course/${courseSlug}`}>
            К списку глав →
          </Link>
        )}
        <Link className="btn ghost" href={`/course/${courseSlug}`}>
          Все главы
        </Link>
      </div>
    </div>
  );
}
