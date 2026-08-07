"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { WritingPrompt } from "@/lib/types";
import { countWords, readDrafts, saveDraft } from "@/lib/writing";
import { chapterKey, saveChapterDone, useProgress } from "@/lib/progress";
import SpeakButton from "@/components/quest/SpeakButton";
import styles from "./WritingPractice.module.css";

interface Props {
  courseSlug: string;
  prompt: WritingPrompt;
}

export default function WritingPractice({ courseSlug, prompt }: Props) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState<boolean[]>(() => prompt.checklist.map(() => false));
  const [showSample, setShowSample] = useState(false);

  const progress = useProgress();
  const done = !!progress[chapterKey(courseSlug, `writing-${prompt.slug}`)]?.done;

  useEffect(() => {
    const drafts = readDrafts();
    setText(drafts[`${courseSlug}:${prompt.slug}`] ?? "");
  }, [courseSlug, prompt.slug]);

  function handleChange(value: string) {
    setText(value);
    saveDraft(courseSlug, prompt.slug, value);
  }

  function toggleChecked(i: number) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  const words = countWords(text);
  const enough = words >= prompt.minWords;

  return (
    <div className={styles.wrap}>
      <div className={styles.instructionBox}>
        <p className={styles.instructionText}>{prompt.instruction}</p>
        <p className={styles.hint}>
          <b>Подсказка:</b> {prompt.hint}
        </p>
      </div>

      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Пиши здесь на английском…"
      />
      <div className={[styles.wordCount, enough ? styles.enough : ""].join(" ")}>
        <span>
          {words} слов {enough ? "— достаточно" : `из ${prompt.minWords}`}
        </span>
        <span className={styles.savedNote}>черновик сохраняется автоматически</span>
      </div>

      <div className={styles.checklistBox}>
        <div className={styles.checklistTitle}>✅ Проверь себя перед эталоном</div>
        {prompt.checklist.map((item, i) => (
          <label
            key={i}
            className={[styles.checklistItem, checked[i] ? styles.checked : ""].join(" ")}
          >
            <input type="checkbox" checked={checked[i]} onChange={() => toggleChecked(i)} />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <div className={styles.actions}>
        <button type="button" className="btn ghost" onClick={() => setShowSample((v) => !v)}>
          {showSample ? "Скрыть пример" : "Показать пример ответа"}
        </button>
        <button
          type="button"
          className="btn big"
          onClick={() => saveChapterDone(courseSlug, `writing-${prompt.slug}`, 0)}
        >
          {done ? "✓ Выполнено" : "Отметить как выполнено"}
        </button>
        <Link href={`/course/${courseSlug}/writing`} className="btn ghost">
          К списку заданий
        </Link>
      </div>

      {showSample && (
        <div className={styles.sampleBox}>
          <div className={styles.sampleLabel}>
            <SpeakButton text={prompt.sample} />
            Пример ответа
          </div>
          <div className={styles.sampleText}>{prompt.sample}</div>
        </div>
      )}
    </div>
  );
}
