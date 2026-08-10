"use client";

/**
 * Низ урока: отметка о прохождении и переход дальше.
 *
 * Отметку ставит не эта кнопка. Урок засчитывается тогда, когда к каждому
 * заданию дан ответ, и запись уходит в базу в тот же миг (см. LessonFlow).
 * Кнопка только сообщает об этом и ведёт к следующему уроку — потерять успехи
 * из-за того, что человек закрыл страницу, не долистав до низа, нельзя.
 *
 * Уроки без заданий отмечаются вручную: работы, по которой можно судить, в них
 * нет, и решение остаётся за учеником.
 */

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { plural } from "@/lib/plural";
import { useLessonFlow } from "./LessonFlow";
import s from "./lesson.module.css";

export default function FinishLesson({
  nextHref,
  label,
}: {
  nextHref: string;
  label: string;
}) {
  const router = useRouter();
  const { total, answered, done, saveFailed, finish } = useLessonFlow();
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);

  function go(): void {
    startTransition(() => {
      router.push(nextHref);
      router.refresh();
    });
  }

  async function markAndGo(): Promise<void> {
    setBusy(true);
    const okay = await finish();
    setBusy(false);
    if (okay) go();
  }

  const left = Math.max(0, total - answered);
  const hasTasks = total > 0;

  return (
    <span className={s.finish}>
      {saveFailed && (
        <span className={s.saveFailed}>
          Не удалось сохранить работу. Проверь связь: ответы запишутся, как только она появится.
        </span>
      )}

      {done && !saveFailed && <span className={s.finishDone}>✓ Урок засчитан</span>}

      {hasTasks && !done && left > 0 && (
        <span className={s.finishHint}>
          Урок засчитывается, когда отвечено каждое задание. Осталось {left}{" "}
          {plural(left, "задание", "задания", "заданий")}. Ошибиться не страшно: засчитывается
          любой ответ, а разбор покажет, как правильно.
        </span>
      )}

      {done || !hasTasks ? (
        <button
          className="btn"
          type="button"
          onClick={done ? go : markAndGo}
          disabled={busy || pending}
        >
          {busy ? "Сохраняем…" : done ? label : `Отметить пройденным · ${label}`}
        </button>
      ) : (
        <button className="btn btn--ghost" type="button" onClick={go} disabled={pending}>
          {label} — без отметки
        </button>
      )}
    </span>
  );
}
