"use client";

import { useState } from "react";
import styles from "./quest.module.css";

/**
 * Рендерит английский текст с разметкой {word|перевод}:
 * слова с переводом становятся кликабельными подсказками.
 */
export default function TapText({ text }: { text: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const parts = text.split(/(\{[^}]+\})/g);

  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\{([^|]+)\|([^}]+)\}$/);
        if (!m) return <span key={i}>{part}</span>;
        const [, en, ru] = m;
        return (
          <span
            key={i}
            className={`${styles.word} ${open === i ? styles.open : ""}`}
            data-t={ru}
            role="button"
            tabIndex={0}
            onClick={() => setOpen(open === i ? null : i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(open === i ? null : i);
              }
            }}
          >
            {en}
          </span>
        );
      })}
    </>
  );
}
