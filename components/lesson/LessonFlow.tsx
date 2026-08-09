"use client";

/**
 * Учёт отвеченных заданий внутри урока.
 *
 * Отметка «урок пройден» раньше ставилась одним нажатием, ничего не требуя.
 * Значит она означала «я долистал», а не «я прошёл», — и при этом открывала
 * проверочную работу модуля. Владелец на это и указал.
 *
 * Теперь отметка требует, чтобы к каждому заданию был дан ответ. Именно ответ,
 * а НЕ верный ответ: ошибка в уроке ведёт к подсказке и новой попытке, а не к
 * запрету идти дальше. Это принцип продукта, а не послабление.
 *
 * Уйти на следующий урок можно в любом случае — просто без отметки. Запирать
 * человека на странице мы не будем: свой темп важнее нашей статистики.
 */

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface Flow {
  total: number;
  answered: number;
  markAnswered: (taskId: string) => void;
}

const LessonFlowContext = createContext<Flow>({
  total: 0,
  answered: 0,
  markAnswered: () => {},
});

export function useLessonFlow(): Flow {
  return useContext(LessonFlowContext);
}

export default function LessonFlow({
  total,
  children,
}: {
  total: number;
  children: React.ReactNode;
}) {
  const [ids, setIds] = useState<Set<string>>(() => new Set());

  const markAnswered = useCallback((taskId: string) => {
    setIds((current) => {
      if (current.has(taskId)) return current;
      const next = new Set(current);
      next.add(taskId);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ total, answered: ids.size, markAnswered }),
    [total, ids, markAnswered]
  );

  return <LessonFlowContext.Provider value={value}>{children}</LessonFlowContext.Provider>;
}
