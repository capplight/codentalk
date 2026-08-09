"use client";

/**
 * Действия над курсом: записаться и получить сертификат.
 *
 * Запись отдельным действием, а не молча при открытии урока: место из двух
 * возможных — вещь, о которой ученик должен знать, что он её занял. Для
 * бесплатных курсов место не занимается, но правило одно на всех, чтобы
 * поведение не зависело от цены.
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import s from "./lesson.module.css";

type Mode = "enroll" | "certificate";

export default function CourseActions({
  course,
  mode,
  serial,
}: {
  course: string;
  mode: Mode;
  serial?: string | null;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [issued, setIssued] = useState<string | null>(serial ?? null);

  if (issued) {
    return (
      <div className={s.noteBox}>
        <span className={s.noteBoxHead}>Сертификат выдан</span>
        <span className={s.noteBoxHint}>Номер {issued} — по нему сертификат можно проверить.</span>
        <div className={s.actions}>
          <Link className="btn" href={`/certificate/${issued}`}>
            Открыть сертификат
          </Link>
        </div>
      </div>
    );
  }

  async function act(): Promise<void> {
    setBusy(true);
    setError(null);
    try {
      const path =
        mode === "enroll"
          ? `/api/v1/courses/${course}/enroll`
          : `/api/v1/courses/${course}/certificate`;
      const response = await fetch(path, { method: "POST" });
      const body = await response.json();

      if (!response.ok) {
        setError(body?.error?.message ?? "Не получилось");
        return;
      }
      if (mode === "certificate") {
        setIssued(body.certificate?.serial ?? null);
      }
      router.refresh();
    } catch {
      setError("Не удалось связаться с сервером");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={s.noteBox}>
      <span className={s.noteBoxHead}>
        {mode === "enroll" ? "Начать курс" : "Курс пройден полностью"}
      </span>
      <span className={s.noteBoxHint}>
        {mode === "enroll"
          ? "Курс появится в личном кабинете, и успехи будут сохраняться."
          : "Все уроки пройдены, все проверочные работы сданы. Можно получить сертификат: он проверяется по номеру и не содержит твоих личных сведений."}
      </span>
      {error && <div className={`${s.feedback} ${s.bad}`}>{error}</div>}
      <div className={s.actions}>
        <button className="btn" type="button" onClick={act} disabled={busy}>
          {busy
            ? "Минуту…"
            : mode === "enroll"
              ? "Записаться на курс"
              : "Получить сертификат"}
        </button>
      </div>
    </div>
  );
}
