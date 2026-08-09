"use client";

/**
 * «Урок пройден» — отметка об успехе и переход дальше.
 *
 * Отметку ставит ученик сам, а не счётчик прокрутки: человек может вернуться к
 * уроку через неделю, чтобы перечитать, и это не должно ничего сбрасывать.
 *
 * Если сеть подвела, переход всё равно происходит: держать человека на месте
 * из-за неудачной записи неправильно, отметку он поставит в следующий раз.
 */

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import s from "./lesson.module.css";

export default function FinishLesson({
  course,
  lesson,
  nextHref,
  label,
  done,
}: {
  course: string;
  lesson: string;
  nextHref: string;
  label: string;
  done: boolean;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);

  async function finish(): Promise<void> {
    setBusy(true);
    try {
      await fetch(`/api/v1/lessons/${course}/${lesson}/progress`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });
    } catch {
      // Молча: переход важнее записи, отметка поставится при следующем заходе
    } finally {
      setBusy(false);
      startTransition(() => {
        router.push(nextHref);
        router.refresh();
      });
    }
  }

  return (
    <button className="btn" type="button" onClick={finish} disabled={busy || pending}>
      {busy || pending ? "Сохраняем…" : done ? label : `Отметить пройденным · ${label}`}
    </button>
  );
}
