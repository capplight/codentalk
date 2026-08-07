"use client";

import { speak } from "@/lib/speech";
import styles from "./quest.module.css";

export default function SpeakButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className={styles.speak}
      aria-label={`Озвучить: ${text}`}
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
    >
      🔊
    </button>
  );
}
