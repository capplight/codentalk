"use client";

/**
 * Проверочная работа модуля.
 *
 * Ввод ответов написан отдельно от заданий урока (TaskCard) НАМЕРЕННО, и
 * объединять их не нужно: там после каждого ответа сразу видно, верно или нет,
 * — здесь этого не должно быть до сдачи. Общий компонент неизбежно оброс бы
 * признаком «показывать ли правду», и однажды он оказался бы включён не там.
 *
 * Ответы, разборы и подсказки в браузер не приходят: вопросы отдаёт сервер уже
 * очищенными, он же считает балл.
 */

import { useState } from "react";
import Link from "next/link";
import s from "./lesson.module.css";

interface BrowserQuestion {
  id: string;
  kind: string;
  prompt: string;
  options?: string[];
  multiple?: boolean;
  before?: string;
  after?: string;
  parts?: Array<{ text: string; selectable: boolean }>;
  items?: string[];
  left?: string[];
  right?: string[];
  starter?: string;
  phrase?: string;
  translation?: string;
}

interface Result {
  score: number;
  correctCount: number;
  total: number;
  passed: boolean;
  passScore: number;
  weakOutcomes: string[];
  suggestedLessons: Array<{ slug: string; course: string; title: string; outcome: string | null }>;
  review: Array<{
    questionId: string;
    correct: boolean;
    prompt: string;
    why: string;
  }>;
}

type Answer = string | number[];

export default function QuizRunner({
  testId,
  courseSlug,
  bestScore = null,
}: {
  testId: string;
  courseSlug: string;
  /** Лучший балл сданной работы, если она уже сдана. Иначе null. */
  bestScore?: number | null;
}) {
  const [questions, setQuestions] = useState<BrowserQuestion[] | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start(): Promise<void> {
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/api/v1/tests/${testId}/attempts`, { method: "POST" });
      const body = await response.json();
      if (!response.ok) {
        setError(body?.error?.message ?? "Не удалось начать работу");
        return;
      }
      setQuestions(body.questions);
      setAttemptId(body.attempt.id);
      setAnswers({});
    } catch {
      setError("Не удалось связаться с сервером");
    } finally {
      setBusy(false);
    }
  }

  async function submit(): Promise<void> {
    if (!attemptId) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/api/v1/tests/attempts/${attemptId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      const body = await response.json();
      if (!response.ok) {
        setError(body?.error?.message ?? "Не удалось сдать работу");
        return;
      }
      setResult(body);
      setQuestions(null);
    } catch {
      setError("Не удалось связаться с сервером");
    } finally {
      setBusy(false);
    }
  }

  function setAnswer(id: string, value: Answer): void {
    setAnswers((current) => ({ ...current, [id]: value }));
  }

  // ------------------------------------------------------------------ итог
  if (result) {
    return (
      <div className={s.body}>
        <div className={`${s.feedback} ${result.passed ? s.good : s.neutral}`}>
          <b>
            {result.correctCount} из {result.total} — {result.score} баллов.
          </b>{" "}
          {result.passed
            ? "Работа сдана."
            : `Для зачёта нужно ${result.passScore}. Повтори слабые места и попробуй снова — попытки не отнимаются.`}
        </div>

        {result.weakOutcomes.length > 0 && (
          <div className={s.noteBox}>
            <span className={s.noteBoxHead}>Что стоит повторить</span>
            <ul className={s.checklist}>
              {result.weakOutcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            {result.suggestedLessons.length > 0 && (
              <div className={s.actions}>
                {result.suggestedLessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    className={s.option}
                    href={`/learn/${lesson.course}/${lesson.slug}`}
                  >
                    К уроку «{lesson.title}»
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={s.body}>
          {result.review.map((item, i) => (
            <div key={item.questionId} className={s.task}>
              <span className={s.taskLabel}>
                Вопрос {i + 1} · {item.correct ? "верно" : "ошибка"}
              </span>
              <p className={s.prompt}>{item.prompt}</p>
              <div className={`${s.feedback} ${item.correct ? s.good : s.bad}`}>{item.why}</div>
            </div>
          ))}
        </div>

        <div className={s.footer}>
          <Link className="btn btn--ghost" href={`/learn/${courseSlug}`}>
            ← К уровню
          </Link>
          <button className="btn" type="button" onClick={start} disabled={busy}>
            Пройти ещё раз
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------- до начала
  if (!questions) {
    return (
      <div className={s.body}>
        {error && <div className={`${s.feedback} ${s.bad}`}>{error}</div>}
        {bestScore !== null && (
          <div className={`${s.feedback} ${s.good}`}>
            Работа сдана, лучший результат — {bestScore} из 100. Он сохранён: проходить заново
            необязательно, а если пройдёшь, прежний результат никуда не денется.
          </div>
        )}
        <div className={s.noteBox}>
          <span className={s.noteBoxHead}>Как устроена работа</span>
          <span className={s.noteBoxHint}>
            Вопросы выбираются из банка, поэтому вторая попытка даст другой набор. Подсказок здесь
            нет: работа проверяет знания, а не догадливость. Число попыток не ограничено, и ошибка
            ничего не отнимает — после сдачи ты увидишь разбор каждого вопроса.
          </span>
          <div className={s.actions}>
            <button className="btn" type="button" onClick={start} disabled={busy}>
              {busy ? "Готовим вопросы…" : bestScore !== null ? "Пройти ещё раз" : "Начать работу"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------- вопросы
  const answered = questions.filter((question) => answers[question.id] !== undefined).length;

  return (
    <div className={s.body}>
      {error && <div className={`${s.feedback} ${s.bad}`}>{error}</div>}

      {questions.map((question, index) => (
        <section className={s.task} key={question.id}>
          <span className={s.taskLabel}>
            Вопрос {index + 1} из {questions.length}
          </span>
          <p className={s.prompt}>{question.prompt}</p>

          {question.kind === "choice" && question.options && (
            <div className={s.options}>
              {question.options.map((option, i) => {
                const picked = ((answers[question.id] as number[]) ?? []).includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    className={`${s.option} ${picked ? s.optionPicked : ""}`}
                    aria-pressed={picked}
                    onClick={() => {
                      const current = (answers[question.id] as number[]) ?? [];
                      if (question.multiple) {
                        setAnswer(
                          question.id,
                          picked ? current.filter((n) => n !== i) : [...current, i]
                        );
                      } else {
                        setAnswer(question.id, [i]);
                      }
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )}

          {question.kind === "gap" && (
            <div className={s.gapLine}>
              <span>{question.before}</span>
              <input
                className={s.input}
                value={(answers[question.id] as string) ?? ""}
                onChange={(e) => setAnswer(question.id, e.target.value)}
                aria-label="Пропущенное"
                autoComplete="off"
                spellCheck={false}
              />
              <span>{question.after}</span>
            </div>
          )}

          {question.kind === "short" && (
            <input
              className={s.field}
              value={(answers[question.id] as string) ?? ""}
              onChange={(e) => setAnswer(question.id, e.target.value)}
              aria-label="Твой ответ"
              autoComplete="off"
            />
          )}

          {question.kind === "code" && (
            <textarea
              className={`${s.field} ${s.area} ${s.codeArea}`}
              value={(answers[question.id] as string) ?? question.starter ?? ""}
              onChange={(e) => setAnswer(question.id, e.target.value)}
              aria-label="Твой код"
              spellCheck={false}
            />
          )}

          {question.kind === "hottext" && question.parts && (
            <div className={s.hottext}>
              {question.parts.map((part, i) =>
                part.selectable ? (
                  <button
                    key={i}
                    type="button"
                    className={`${s.part} ${
                      ((answers[question.id] as number[]) ?? []).includes(i) ? s.partPicked : ""
                    }`}
                    onClick={() => {
                      const current = (answers[question.id] as number[]) ?? [];
                      setAnswer(
                        question.id,
                        current.includes(i) ? current.filter((n) => n !== i) : [...current, i]
                      );
                    }}
                  >
                    {part.text}
                  </button>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </div>
          )}

          {question.kind === "order" && question.items && (
            <ol className={s.orderList}>
              {(
                (answers[question.id] as number[]) ?? question.items.map((_, i) => i)
              ).map((itemIndex, position, current) => (
                <li key={itemIndex} className={s.orderItem}>
                  <span className={s.orderNum}>{position + 1}</span>
                  <span className={s.orderText}>{question.items![itemIndex]}</span>
                  <button
                    type="button"
                    className={s.moveBtn}
                    disabled={position === 0}
                    aria-label="Выше"
                    onClick={() => {
                      const next = [...current];
                      [next[position], next[position - 1]] = [next[position - 1], next[position]];
                      setAnswer(question.id, next);
                    }}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className={s.moveBtn}
                    disabled={position === current.length - 1}
                    aria-label="Ниже"
                    onClick={() => {
                      const next = [...current];
                      [next[position], next[position + 1]] = [next[position + 1], next[position]];
                      setAnswer(question.id, next);
                    }}
                  >
                    ↓
                  </button>
                </li>
              ))}
            </ol>
          )}

          {question.kind === "match" && question.left && question.right && (
            <div>
              {question.left.map((left, i) => (
                <div className={s.matchRow} key={i}>
                  <span className={s.matchLeft}>{left}</span>
                  <select
                    className={s.select}
                    value={((answers[question.id] as number[]) ?? [])[i] ?? -1}
                    aria-label={`Пара для «${left}»`}
                    onChange={(e) => {
                      const current = [
                        ...(((answers[question.id] as number[]) ??
                          question.left!.map(() => -1)) as number[]),
                      ];
                      current[i] = Number(e.target.value);
                      setAnswer(question.id, current);
                    }}
                  >
                    <option value={-1}>— выбери —</option>
                    {question.right!.map((right, j) => (
                      <option key={j} value={j}>
                        {right}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      <div className={s.footer}>
        <span className={s.meta}>
          Отвечено {answered} из {questions.length}
        </span>
        <button className="btn" type="button" onClick={submit} disabled={busy}>
          {busy ? "Проверяем…" : "Сдать работу"}
        </button>
      </div>
    </div>
  );
}
