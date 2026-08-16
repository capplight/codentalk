"use client";

/**
 * Задание урока. Девять видов, один вид поведения:
 * попытки не ограничены, подсказка по запросу, после верного ответа — разбор.
 *
 * Почему ответы приходят в браузер. Это УПРАЖНЕНИЕ, а не проверочная работа:
 * оно учит, на оценку не влияет, отвечать надо мгновенно и без сети. Ответы
 * проверочных работ на сторону ученика не уходят никогда — там проверка на
 * сервере (правило в CLAUDE.md).
 */

import { useState } from "react";
import { checkAnswer, missingParts, type Answer } from "@/lib/content/check";
import type { TaskBlock } from "@/lib/content/types";
import { adresObrazca, adresVoprosa } from "@/lib/content/zvuk";
import { useLessonFlow } from "./LessonFlow";
import Zvuk from "./Zvuk";
import s from "./lesson.module.css";

type Status = "idle" | "right" | "wrong" | "shown";

export default function TaskCard({
  task,
  index,
  total,
}: {
  task: TaskBlock;
  index: number;
  total: number;
}) {
  const { markAnswered } = useLessonFlow();
  const [status, setStatus] = useState<Status>("idle");
  const [hintOpen, setHintOpen] = useState(false);

  // Ответ хранится в форме, удобной виду задания
  const [picked, setPicked] = useState<number[]>([]);
  const [text, setText] = useState("");
  const [order, setOrder] = useState<number[]>(() =>
    task.kind === "order" ? task.items.map((_, i) => i) : []
  );
  const [pairs, setPairs] = useState<number[]>(() =>
    task.kind === "match" ? task.left.map(() => -1) : []
  );

  const locked = status === "right" || status === "shown";

  function judge(answer: Answer): void {
    // Задание считается отвеченным при любом исходе, включая ошибку: отметка
    // «урок пройден» требует работы, а не правильности.
    markAnswered(task.id);

    const verdict = checkAnswer(task, answer);
    if (verdict === null) {
      setStatus("shown");
      return;
    }
    setStatus(verdict ? "right" : "wrong");
    // Ошибка сама раскрывает подсказку: искать кнопку в этот момент — лишняя работа
    if (!verdict && task.hint) setHintOpen(true);
  }

  function pick(i: number): void {
    if (locked) return;
    if (task.kind === "choice" && task.multiple) {
      const next = picked.includes(i) ? picked.filter((n) => n !== i) : [...picked, i];
      setPicked(next);
      setStatus("idle");
      return;
    }
    setPicked([i]);
    judge([i]);
  }

  function togglePart(i: number): void {
    if (locked) return;
    setPicked(picked.includes(i) ? picked.filter((n) => n !== i) : [...picked, i]);
    setStatus("idle");
  }

  function move(from: number, to: number): void {
    if (locked || to < 0 || to >= order.length) return;
    const next = [...order];
    [next[from], next[to]] = [next[to], next[from]];
    setOrder(next);
    setStatus("idle");
  }

  return (
    <section className={s.task} aria-label={`Задание ${index} из ${total}`}>
      <span className={s.taskLabel}>
        Задание {index} из {total}
      </span>
      <p className={s.prompt}>{task.prompt}</p>

      {/* Запись, по которой спрашивают. Расшифровки тут нет и быть не может:
          она была бы ответом. Слушать можно сколько угодно раз. */}
      {task.zvuk && (
        <div className={s.obrazec}>
          <Zvuk src={adresVoprosa(task.zvuk)} chto="запись к заданию" vid="stroka" />
        </div>
      )}

      {/* ------------------------------------------------ выбор варианта */}
      {task.kind === "choice" && (
        <>
          <div className={s.options} role="group">
            {task.options.map((option, i) => (
              <button
                key={i}
                type="button"
                className={[
                  s.option,
                  picked.includes(i) && !locked ? s.optionPicked : "",
                  locked && option.correct ? s.optionRight : "",
                  status === "wrong" && picked.includes(i) && !option.correct ? s.optionWrong : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => pick(i)}
                disabled={locked}
                aria-pressed={picked.includes(i)}
              >
                {option.text}
              </button>
            ))}
          </div>
          {task.multiple && !locked && (
            <button type="button" className={s.option} onClick={() => judge(picked)}>
              Проверить
            </button>
          )}
        </>
      )}

      {/* ------------------------------------------------ вставить пропущенное */}
      {task.kind === "gap" && (
        <form
          className={s.gapLine}
          onSubmit={(e) => {
            e.preventDefault();
            judge(text);
          }}
        >
          <span>{task.before}</span>
          <input
            className={s.input}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setStatus("idle");
            }}
            disabled={locked}
            aria-label="Пропущенное"
            autoComplete="off"
            spellCheck={false}
          />
          <span>{task.after}</span>
        </form>
      )}

      {/* ------------------------------------------------ отметить в тексте */}
      {task.kind === "hottext" && (
        <div className={s.hottext}>
          {task.parts.map((part, i) =>
            part.selectable ? (
              <button
                key={i}
                type="button"
                className={[
                  s.part,
                  picked.includes(i) && !locked ? s.partPicked : "",
                  locked && part.correct ? s.partRight : "",
                  status === "wrong" && picked.includes(i) && !part.correct ? s.partWrong : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => togglePart(i)}
                disabled={locked}
                aria-pressed={picked.includes(i)}
              >
                {part.text}
              </button>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </div>
      )}

      {/* ------------------------------------------------ расставить по порядку */}
      {task.kind === "order" && (
        <ol className={s.orderList}>
          {order.map((itemIndex, position) => (
            <li key={itemIndex} className={s.orderItem}>
              <span className={s.orderNum}>{position + 1}</span>
              <span className={s.orderText}>{task.items[itemIndex]}</span>
              <button
                type="button"
                className={s.moveBtn}
                onClick={() => move(position, position - 1)}
                disabled={locked || position === 0}
                aria-label="Выше"
              >
                ↑
              </button>
              <button
                type="button"
                className={s.moveBtn}
                onClick={() => move(position, position + 1)}
                disabled={locked || position === order.length - 1}
                aria-label="Ниже"
              >
                ↓
              </button>
            </li>
          ))}
        </ol>
      )}

      {/* ------------------------------------------------ сопоставить пары */}
      {task.kind === "match" && (
        <div>
          {task.left.map((left, i) => (
            <div className={s.matchRow} key={i}>
              <span className={s.matchLeft}>{left}</span>
              <select
                className={s.select}
                value={pairs[i]}
                disabled={locked}
                aria-label={`Пара для «${left}»`}
                onChange={(e) => {
                  const next = [...pairs];
                  next[i] = Number(e.target.value);
                  setPairs(next);
                  setStatus("idle");
                }}
              >
                <option value={-1}>— выбери —</option>
                {task.right.map((right, j) => (
                  <option key={j} value={j}>
                    {right}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* ------------------------------------------------ короткий ответ */}
      {task.kind === "short" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            judge(text);
          }}
        >
          <input
            className={s.field}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setStatus("idle");
            }}
            disabled={locked}
            aria-label="Твой ответ"
            autoComplete="off"
          />
        </form>
      )}

      {/* ------------------------------------------------ развёрнутый ответ */}
      {task.kind === "essay" && (
        <textarea
          className={`${s.field} ${s.area}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={locked}
          aria-label="Твой ответ"
          placeholder={task.minWords ? `Примерно от ${task.minWords} слов` : undefined}
        />
      )}

      {/* ------------------------------------------------ написать код */}
      {task.kind === "code" && (
        <textarea
          className={`${s.field} ${s.area} ${s.codeArea}`}
          value={text || task.starter}
          onChange={(e) => {
            setText(e.target.value);
            setStatus("idle");
          }}
          disabled={locked}
          aria-label="Твой код"
          spellCheck={false}
        />
      )}

      {/* ------------------------------------------------ произнести вслух */}
      {task.kind === "speak" && (
        <div className={s.hottext}>
          <span lang="en">{task.phrase}</span>
          {task.translation && <div className={s.transcript}>{task.translation}</div>}
          {/* Образец обязателен: без него ученику предлагают произнести то,
              чего он ни разу не слышал, и он произносит по написанию. */}
          <div className={s.obrazec}>
            <Zvuk src={adresObrazca(task.phrase)} chto={task.phrase} vid="stroka" />
          </div>
        </div>
      )}

      {/* ------------------------------------------------ кнопки */}
      {!locked && (
        <div className={s.actions}>
          {task.kind !== "choice" && (
            <button
              type="button"
              className={s.option}
              onClick={() => {
                if (task.kind === "order") judge(order);
                else if (task.kind === "match") judge(pairs);
                else if (task.kind === "hottext") judge(picked);
                else judge(text);
              }}
            >
              {task.kind === "essay" || task.kind === "speak" ? "Показать разбор" : "Проверить"}
            </button>
          )}
          {task.hint && !hintOpen && (
            <button type="button" className={s.hintBtn} onClick={() => setHintOpen(true)}>
              Подсказка
            </button>
          )}
        </div>
      )}

      {hintOpen && task.hint && !locked && <div className={s.hint}>{task.hint}</div>}

      {/* ------------------------------------------------ разбор */}
      {status === "right" && (
        <div className={`${s.feedback} ${s.good}`}>
          <b>Верно.</b> {task.why}
        </div>
      )}

      {status === "wrong" && (
        <div className={`${s.feedback} ${s.bad}`}>
          <b>Пока не так.</b>{" "}
          {task.kind === "code" && text
            ? `В коде ${missingParts(task, text).join(", ")}. Попробуй ещё, попытки не ограничены.`
            : "Попробуй ещё раз — попытки не ограничены."}
        </div>
      )}

      {status === "shown" && (
        <div className={`${s.feedback} ${s.neutral}`}>
          {task.kind === "essay" && (
            <>
              {/* Счёт слов, а не оценка. Cambridge требует от письма «25 words
                  or more», и ученику надо знать, добрал ли он объём. Короткий
                  ответ не объявляется ошибкой: письмо машина не оценивает. */}
              {task.minWords && (
                <p className={s.exampleExplain}>
                  {(() => {
                    const napisano = text.trim().split(/\s+/).filter(Boolean).length;
                    return napisano >= task.minWords
                      ? `Слов написано: ${napisano}, нужно было от ${task.minWords}. Объём набран.`
                      : `Слов написано: ${napisano}, а нужно от ${task.minWords}. Допиши и сравни снова.`;
                  })()}
                </p>
              )}
              <b>Так мог бы выглядеть ответ.</b>
              <p className={s.sample}>{task.sample}</p>
              <p className={s.exampleExplain}>Сравни со своим:</p>
              <ul className={s.checklist}>
                {task.checklist.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <p className={s.sample}>{task.why}</p>
        </div>
      )}
    </section>
  );
}
