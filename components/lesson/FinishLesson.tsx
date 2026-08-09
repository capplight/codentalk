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
import { plural } from "@/lib/plural";
import { useLessonFlow } from "./LessonFlow";
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
  const { total, answered } = useLessonFlow();
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  async function finish(): Promise<void> {
    setBusy(true);
    setFailed(false);
    try {
      const response = await fetch(`/api/v1/lessons/${course}/${lesson}/progress`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });

      // Раньше неудача проглатывалась молча, и ученик уходил дальше, думая,
      // что отметка поставлена. Потеря успехов — последнее, о чём он должен
      // узнавать сам: если запись не прошла, говорим и остаёмся на месте.
      if (!response.ok) {
        setFailed(true);
        return;
      }
    } catch {
      setFailed(true);
      return;
    } finally {
      setBusy(false);
    }

    startTransition(() => {
      router.push(nextHref);
      router.refresh();
    });
  }

  // Урок засчитывается, когда к каждому заданию дан ответ — любой, в том числе
  // неверный. Пока не все, идти дальше можно, но без отметки: назвать урок
  // пройденным, если задания не тронуты, значит соврать самому ученику.
  const left = Math.max(0, total - answered);
  const worked = done || left === 0;

  function skip(): void {
    startTransition(() => {
      router.push(nextHref);
    });
  }

  return (
    <span className={s.finish}>
      {failed && (
        <span className={s.saveFailed}>
          Не удалось сохранить отметку. Проверь связь и нажми ещё раз — урок останется здесь.
        </span>
      )}

      {!worked && total > 0 && (
        <span className={s.finishHint}>
          Осталось ответить на {left} {plural(left, "задание", "задания", "заданий")}. Ошибиться
          не страшно: любой ответ засчитывается, а разбор покажет, как правильно.
        </span>
      )}

      {worked ? (
        <button className="btn" type="button" onClick={finish} disabled={busy || pending}>
          {busy || pending
            ? "Сохраняем…"
            : failed
              ? "Попробовать снова"
              : done
                ? label
                : `Отметить пройденным · ${label}`}
        </button>
      ) : (
        <button className="btn btn--ghost" type="button" onClick={skip} disabled={pending}>
          {label} — без отметки
        </button>
      )}
    </span>
  );
}
