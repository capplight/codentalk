"use client";

import { useState } from "react";
import Link from "next/link";
import { placementQuestions } from "@/content/placement";
import { getUnitInfo } from "@/lib/unitInfo";
import {
  BAND_ORDER,
  BAND_COURSE,
  BAND_LABEL,
  evaluatePlacement,
  type PlacementResult,
} from "@/lib/placement";
import styles from "./PlacementTest.module.css";

export default function PlacementTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<PlacementResult | null>(null);

  const total = placementQuestions.length;

  function answer(choice: string) {
    const next = { ...answers, [current]: choice };
    setAnswers(next);
    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      setResult(evaluatePlacement(next, placementQuestions));
    }
  }

  function finishEarly() {
    setResult(evaluatePlacement(answers, placementQuestions));
  }

  if (result) {
    const band = result.recommended;
    const unitInfo = result.recommendedUnit
      ? getUnitInfo(BAND_COURSE[band], result.recommendedUnit)
      : undefined;
    return (
      <div className={styles.wrap}>
        <div className={styles.result}>
          <div className={styles.badge}>{result.aboveTop ? "B2+" : BAND_LABEL[band]}</div>
          <h2 className={styles.resultTitle}>
            {result.aboveTop
              ? "Твой уровень — выше B2!"
              : `Твой уровень — ${BAND_LABEL[band]}`}
          </h2>
          <p className={styles.resultLead}>
            {result.aboveTop
              ? "Ты уверенно справился со всеми заданиями теста. Начни с уровня B2 — там идиомы, переговоры и британский юмор, а дальше просто продолжай практиковаться."
              : `Правильных ответов: ${result.totalCorrect} из ${result.totalQuestions}. Рекомендуем начать с уровня ${BAND_LABEL[band]} — предыдущие темы ты уже знаешь, а здесь начинаются пробелы.`}
          </p>
          {unitInfo && (
            <p className={styles.resultLead} style={{ marginTop: -10 }}>
              Точнее: начни с юнита «{unitInfo.unit.title}» (юнит {unitInfo.number} из{" "}
              {unitInfo.total}) — именно там нашлась первая ошибка в тесте.
            </p>
          )}

          <div className={styles.bands}>
            {BAND_ORDER.map((b) => {
              const { correct, total: t } = result.correctByBand[b];
              const passed = t > 0 && correct / t >= 0.6;
              const isCurrent = !result.aboveTop && b === band;
              return (
                <div key={b} className={`${styles.bandRow} ${isCurrent ? styles.current : ""}`}>
                  <span className={styles.bandMark}>{passed ? "✅" : isCurrent ? "🎯" : "▫️"}</span>
                  <span className={styles.bandName}>{BAND_LABEL[b]}</span>
                  <span>
                    {passed
                      ? "уровень освоен"
                      : isCurrent
                        ? "рекомендуем начать здесь"
                        : "ещё впереди"}
                  </span>
                  <span className={styles.bandScore}>
                    {correct}/{t}
                  </span>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <Link
              className="btn big"
              href={
                unitInfo
                  ? `/course/${BAND_COURSE[band]}/units/${unitInfo.unit.slug}`
                  : `/course/${BAND_COURSE[band]}`
              }
            >
              {unitInfo ? `Начать юнит «${unitInfo.unit.title}» →` : `Начать уровень ${BAND_LABEL[band]} →`}
            </Link>
            <Link className="btn ghost" href={`/course/${BAND_COURSE[band]}`}>
              Посмотреть весь уровень {BAND_LABEL[band]}
            </Link>
          </div>
          <p style={{ color: "var(--ink-soft)", fontSize: 13, marginTop: 18 }}>
            Результат — только ориентир. Если покажется слишком просто или сложно, спокойно
            переходи на соседний уровень: прогресс сохранится.
          </p>
        </div>
      </div>
    );
  }

  const q = placementQuestions[current];
  const percent = Math.round((current / total) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>
          Вопрос {current + 1} из {total}
        </span>
        <span className={styles.progressTrack}>
          <span className={styles.progressFill} style={{ width: `${percent}%` }} />
        </span>
      </div>

      <div className={styles.card}>
        <p className={styles.sentence}>
          {q.before} <span className={styles.blank} /> {q.after}
        </p>
        <div className={styles.options}>
          {q.options.map((option) => (
            <button
              key={option}
              type="button"
              className={styles.option}
              onClick={() => answer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.skip}>
        {current >= 3 ? (
          <button type="button" className={styles.skipBtn} onClick={finishEarly}>
            Дальше слишком сложно — показать результат
          </button>
        ) : (
          <span style={{ color: "var(--ink-soft)", fontSize: 13 }}>
            Не знаешь ответ — выбирай любой, тест это учтёт
          </span>
        )}
      </div>
    </div>
  );
}
