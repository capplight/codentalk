"use client";

/**
 * Учёт работы внутри урока и её сохранение.
 *
 * Отметка «урок пройден» раньше ставилась одним нажатием, ничего не требуя.
 * Значит она означала «я долистал», а не «я прошёл», — и при этом открывала
 * проверочную работу модуля. Владелец на это указал, и появилось условие:
 * отметка требует, чтобы к каждому заданию был дан ответ. Именно ответ, а НЕ
 * верный ответ: ошибка в уроке ведёт к подсказке и новой попытке, а не к
 * запрету идти дальше. Это принцип продукта, а не послабление.
 *
 * ЧЕГО НЕ ХВАТАЛО И ЧТО ИСПРАВЛЕНО. Сделанная работа жила только в памяти
 * страницы. Ученик отвечал на восемь заданий из девяти, уходил дальше — и не
 * оставалось ничего: ни отметки, ни ответов. Вернувшись, он видел урок
 * нетронутым и должен был проходить его заново. Со стороны это и выглядит как
 * «уроки не сохраняются», о чём владелец и сказал.
 *
 * Теперь каждый ответ уходит в базу сразу. Как только отвечено последнее
 * задание, урок сам становится пройденным: работа сделана, и требовать сверх
 * неё ещё и попадания по кнопке внизу страницы незачем. Кнопка остаётся —
 * но она ведёт дальше, а не решает судьбу успехов.
 *
 * Уйти на следующий урок можно в любом случае. Запирать человека на странице
 * мы не будем: свой темп важнее нашей статистики.
 */

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

interface Flow {
  total: number;
  answered: number;
  /** Урок засчитан — отметка лежит в базе */
  done: boolean;
  /** Запись не прошла: сеть или вход. Ученик должен об этом знать */
  saveFailed: boolean;
  markAnswered: (taskId: string) => void;
  /** Записать отметку вручную — для уроков без заданий и для повторного захода */
  finish: () => Promise<boolean>;
}

const LessonFlowContext = createContext<Flow>({
  total: 0,
  answered: 0,
  done: false,
  saveFailed: false,
  markAnswered: () => {},
  finish: async () => false,
});

export function useLessonFlow(): Flow {
  return useContext(LessonFlowContext);
}

export default function LessonFlow({
  course,
  lesson,
  total,
  answeredIds,
  completed,
  signedIn,
  children,
}: {
  course: string;
  lesson: string;
  total: number;
  /** Задания, на которые ответ уже был дан раньше — приходят из базы */
  answeredIds: string[];
  completed: boolean;
  /** Гость читает урок свободно, но успехи ему сохранять некуда */
  signedIn: boolean;
  children: React.ReactNode;
}) {
  // Набор живёт в ссылке, а не в состоянии: запись в базу — побочное действие,
  // и внутри обновления состояния ему не место. React в разработке вызывает
  // такое обновление дважды, и запрос уходил бы дважды.
  const answered = useRef<Set<string>>(new Set(answeredIds));
  const [count, setCount] = useState(answered.current.size);
  const [done, setDone] = useState(completed);
  const [saveFailed, setSaveFailed] = useState(false);

  // Ответы идут один за другим, а запись уходит по сети. Без очереди два
  // соседних ответа перегоняют друг друга, и в базе остаётся тот, что ушёл
  // раньше, — то есть меньший.
  const queue = useRef<Promise<unknown>>(Promise.resolve());

  const save = useCallback(
    (list: string[], status: "in_progress" | "completed"): Promise<boolean> => {
      // Гость успехов не имеет: слать за него запросы значит получать 401 на
      // каждый ответ. Ему предложена регистрация, и этого достаточно.
      if (!signedIn) return Promise.resolve(false);

      const request = queue.current
        .catch(() => undefined)
        .then(async () => {
          try {
            const response = await fetch(`/api/v1/lessons/${course}/${lesson}/progress`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status, position: { answered } }),
            });
            setSaveFailed(!response.ok);
            return response.ok;
          } catch {
            setSaveFailed(true);
            return false;
          }
        });

      queue.current = request;
      return request;
    },
    [course, lesson, signedIn]
  );

  const markAnswered = useCallback(
    (taskId: string) => {
      if (answered.current.has(taskId)) return;
      answered.current.add(taskId);
      setCount(answered.current.size);

      const list = [...answered.current];
      const finished = total > 0 && list.length >= total;
      void save(list, finished ? "completed" : "in_progress").then((okay) => {
        if (okay && finished) setDone(true);
      });
    },
    [save, total]
  );

  const finish = useCallback(async () => {
    const okay = await save([...answered.current], "completed");
    if (okay) setDone(true);
    return okay;
  }, [save]);

  const value = useMemo(
    () => ({ total, answered: count, done, saveFailed, markAnswered, finish }),
    [total, count, done, saveFailed, markAnswered, finish]
  );

  return <LessonFlowContext.Provider value={value}>{children}</LessonFlowContext.Provider>;
}
