"use client";

/**
 * Пометка «непонятно» рядом с блоком материала.
 *
 * Нажатие ничего не требует: ни объяснений, ни выбора. Человек, который что-то
 * не понял, уже устал — заставлять его в этот момент формулировать значит не
 * получить пометку вовсе.
 *
 * Кнопка бледная, пока на блок не навели указатель: она не должна перебивать
 * чтение. При переходе клавиатурой проявляется сразу.
 */

import { useState } from "react";
import s from "./lesson.module.css";

export default function ConfusionButton({
  course,
  lesson,
  blockId,
  initial = false,
}: {
  course: string;
  lesson: string;
  blockId: string;
  initial?: boolean;
}) {
  const [marked, setMarked] = useState(initial);
  const [busy, setBusy] = useState(false);

  async function toggle(): Promise<void> {
    if (busy) return;
    const next = !marked;
    setBusy(true);
    // Показываем новое состояние сразу: ждать сеть ради одной пометки незачем
    setMarked(next);

    try {
      const response = await fetch(`/api/v1/lessons/${course}/${lesson}/confusion`, {
        method: next ? "POST" : "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blockId }),
      });
      if (!response.ok) setMarked(!next);
    } catch {
      setMarked(!next);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      className={`${s.mark} ${marked ? s.markOn : ""}`}
      onClick={toggle}
      aria-pressed={marked}
    >
      {marked ? "✓ отмечено как непонятное" : "непонятно"}
    </button>
  );
}
