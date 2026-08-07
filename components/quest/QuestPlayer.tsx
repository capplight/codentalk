"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Chapter, Course, Phrase, Step, TaskStep } from "@/lib/types";
import { countTasks, isTask } from "@/lib/types";
import type { RuleRef } from "./RuleLink";
import { saveChapterDone } from "@/lib/progress";
import JourneyBar from "./JourneyBar";
import StoryScene from "./StoryScene";
import ChoiceTask from "./ChoiceTask";
import AssembleTask from "./AssembleTask";
import FillTask from "./FillTask";
import ListenTask from "./ListenTask";
import ReadingTask from "./ReadingTask";
import ListeningTask from "./ListeningTask";
import Finale from "./Finale";
import styles from "./quest.module.css";

interface Props {
  chapter: Chapter;
  chapterNumber: number;
  courseSlug: string;
  courseLevel: string;
  nextChapter?: Chapter;
  nextCourse?: Course;
  /** id правила → заголовок (для ссылок «📖 Правило» в обратной связи) */
  ruleTitles?: Record<string, string>;
}

export default function QuestPlayer({
  chapter,
  chapterNumber,
  courseSlug,
  courseLevel,
  nextChapter,
  nextCourse,
  ruleTitles,
}: Props) {
  const [started, setStarted] = useState(false);
  /** Сколько шагов открыто. visible > steps.length означает финал */
  const [visible, setVisible] = useState(0);
  const [hints, setHints] = useState(0);
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const endRef = useRef<HTMLDivElement>(null);
  const savedRef = useRef(false);

  const steps = chapter.steps;
  const taskTotal = useMemo(() => countTasks(chapter), [chapter]);
  const finished = visible > steps.length;

  const advance = useCallback(() => setVisible((v) => v + 1), []);
  const onHint = useCallback(() => setHints((h) => h + 1), []);

  // сюжетные шаги не блокируют — открываются сами
  useEffect(() => {
    if (!started || finished) return;
    const current = steps[visible - 1];
    if (visible === 0 || (current && current.kind === "story")) {
      const t = setTimeout(advance, visible === 0 ? 100 : 500);
      return () => clearTimeout(t);
    }
  }, [started, visible, steps, finished, advance]);

  // автопрокрутка к новому шагу
  useEffect(() => {
    if (visible > 1) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visible]);

  // сохранение прогресса — один раз при завершении
  useEffect(() => {
    if (finished && !savedRef.current) {
      savedRef.current = true;
      saveChapterDone(courseSlug, chapter.slug, hints);
    }
  }, [finished, courseSlug, chapter.slug, hints]);

  const collectPhrase = useCallback((step: Step) => {
    if (isTask(step) && step.phrase) {
      setPhrases((prev) =>
        prev.some((p) => p.en === step.phrase!.en) ? prev : [...prev, step.phrase!]
      );
    }
  }, []);

  if (!started) {
    return (
      <div className="wrap">
        <div className={styles.cover}>
          <div className="tag-label" style={{ color: "var(--accent)" }}>
            {chapter.exam ? "Экзамен" : `Глава ${chapterNumber}`} · {courseLevel}
          </div>
          <div className={styles.coverStamp}>{chapter.exam ? "🎓 FINAL EXAM" : "✈ QUEST — START"}</div>
          <h1 className={styles.coverTitle}>{chapter.title}</h1>
          <p className={styles.coverLead}>{chapter.subtitle}</p>
          {chapter.goals && chapter.goals.length > 0 && (
            <div className={styles.goalsCard}>
              <div className={styles.goalsCardTitle}>Чему ты научишься</div>
              <ul className={styles.goalsCardList}>
                {chapter.goals.map((goal) => (
                  <li key={goal} className={styles.goalsCardItem}>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className={styles.coverLead} style={{ fontSize: "13.5px" }}>
            {chapter.exam
              ? "Правила те же: если ошибёшься, получишь подсказку и продолжишь. Но чем меньше подсказок, тем выше итоговая оценка. Не торопись — время здесь не ограничено."
              : "Ошибаться не страшно: если что-то не получится, мы подскажем. Нажимай на подчёркнутые слова, чтобы увидеть перевод, а кнопка 🔊 озвучит фразу."}
          </p>
          <button type="button" className="btn big" onClick={() => setStarted(true)}>
            {chapter.exam ? "Начать экзамен →" : "Начать квест →"}
          </button>
        </div>
      </div>
    );
  }

  const ruleFor = (step: TaskStep): RuleRef | undefined => {
    if (step.kind === "reading" || step.kind === "listening") return undefined;
    if (!step.rule || !ruleTitles?.[step.rule]) return undefined;
    return { href: `/course/${courseSlug}/rules#${step.rule}`, title: ruleTitles[step.rule] };
  };

  const stageIndex = finished
    ? chapter.stages.length - 1
    : steps[Math.min(visible, steps.length) - 1]?.stage ?? 0;

  let taskCounter = 0;

  return (
    <>
      <JourneyBar
        stages={chapter.stages}
        current={stageIndex}
        finished={finished}
        chapterLabel={chapter.exam ? "Экзамен" : `Глава ${chapterNumber}`}
      />
      <div className="wrap" style={{ paddingBottom: 96 }}>
        {steps.slice(0, Math.min(visible, steps.length)).map((step, i) => {
          if (isTask(step)) taskCounter++;
          const number = taskCounter;
          return (
            <div key={i} className={styles.scene}>
              {step.kind === "story" ? (
                <StoryScene step={step} />
              ) : step.kind === "choice" ? (
                <ChoiceTask
                  step={step}
                  taskNumber={number}
                  taskTotal={taskTotal}
                  ruleLink={ruleFor(step)}
                  onHint={onHint}
                  onComplete={() => {
                    collectPhrase(step);
                    advance();
                  }}
                />
              ) : step.kind === "assemble" ? (
                <AssembleTask
                  step={step}
                  taskNumber={number}
                  taskTotal={taskTotal}
                  ruleLink={ruleFor(step)}
                  onHint={onHint}
                  onComplete={() => {
                    collectPhrase(step);
                    advance();
                  }}
                />
              ) : step.kind === "listen" ? (
                <ListenTask
                  step={step}
                  taskNumber={number}
                  taskTotal={taskTotal}
                  ruleLink={ruleFor(step)}
                  onHint={onHint}
                  onComplete={() => {
                    collectPhrase(step);
                    advance();
                  }}
                />
              ) : step.kind === "reading" ? (
                <ReadingTask
                  step={step}
                  taskNumber={number}
                  taskTotal={taskTotal}
                  onHint={onHint}
                  onComplete={advance}
                />
              ) : step.kind === "listening" ? (
                <ListeningTask
                  step={step}
                  taskNumber={number}
                  taskTotal={taskTotal}
                  onHint={onHint}
                  onComplete={advance}
                />
              ) : (
                <FillTask
                  step={step}
                  taskNumber={number}
                  taskTotal={taskTotal}
                  ruleLink={ruleFor(step)}
                  onHint={onHint}
                  onComplete={() => {
                    collectPhrase(step);
                    advance();
                  }}
                />
              )}
            </div>
          );
        })}
        {finished && (
          <div className={styles.scene}>
            <Finale
              chapter={chapter}
              courseSlug={courseSlug}
              nextChapter={nextChapter}
              nextCourse={nextCourse}
              taskTotal={taskTotal}
              hints={hints}
              phrases={phrases}
            />
          </div>
        )}
        <div ref={endRef} />
      </div>
    </>
  );
}
