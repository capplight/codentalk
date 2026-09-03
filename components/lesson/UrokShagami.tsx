/**
 * Урок в пошаговом виде. Серверная сборка экранов.
 *
 * Здесь решается только ОДНО: что считать отдельным экраном и как его
 * подписать. Показывает экраны `Shagi`, рисует содержимое `Ekran`, задания
 * остаются прежним `TaskCard` — он уже умеет девять видов, подсказку, разбор и
 * запись ответа, и переписывать его ради нового вида урока было бы вредно.
 *
 * ОДИН БЛОК — ОДИН ЭКРАН. Дробить блок на части незачем: в новом формате
 * объяснение УЖЕ разбито автором на названные случаи, и каждый случай лежит
 * отдельным блоком. Если экран вышел длинным — это не беда вида, а знак, что
 * случай написан слишком широко.
 */
import Link from "next/link";
import type { Course, Lesson, Module } from "@/lib/content/types";
import { isTask } from "@/lib/content/types";
import Ekran, { Znak } from "./Ekran";
import FinishLesson from "./FinishLesson";
import Shagi, { type OpisanieEkrana } from "./Shagi";
import TaskCard from "./TaskCard";
import s from "./shagi.module.css";

/** Чем подписан экран материала. */
function podpis(kind: string): string {
  switch (kind) {
    case "example":
      return "сначала посмотри целиком";
    case "table":
      return "всё вместе";
    case "note":
      return "остановись здесь";
    case "vocab":
      return "слова урока";
    case "audio":
      return "послушай";
    case "text":
      return "прочитай";
    default:
      return "разбор";
  }
}

export default function UrokShagami({
  course,
  module: modul,
  lesson,
  next,
  courseSlug,
}: {
  course: Course;
  module: Module;
  lesson: Lesson;
  next?: Lesson;
  courseSlug: string;
}) {
  const bloki = lesson.blocks;
  const zadaniya = bloki.filter(isTask);
  const sluchaev = bloki.filter((b) => !isTask(b) && b.kind === "explain").length;

  const opisaniya: OpisanieEkrana[] = [];
  const ekrany: React.ReactNode[] = [];

  // Всего шагов: вступление, блоки, «готово».
  const vsegoShagov = bloki.length + 2;
  const shag = (n: number) => `Шаг ${n} из ${vsegoShagov}`;

  // ---- Вступление ----
  opisaniya.push({ metka: `${shag(1)} · с чего начнём` });
  ekrany.push(
    <div key="nachalo">
      <h1 className={s.zagolovok}>{lesson.title}</h1>
      <p className={s.vyvod}>{lesson.outcome}</p>
      <div className={s.karta}>
        <Znak kod="1f9ed" razmer={52} />
        <p>
          {sluchaev > 0
            ? `Впереди ${sluchaev} случаев и ${zadaniya.length} заданий. `
            : `Впереди ${zadaniya.length} заданий. `}
          Один экран — одна мысль, спешить некуда.
        </p>
      </div>
    </div>
  );

  // ---- Блоки урока ----
  let nomerZadaniya = 0;
  let kakoySluchay = 0;

  bloki.forEach((blok, i) => {
    const nomer = shag(i + 2);
    if (isTask(blok)) {
      nomerZadaniya += 1;
      /*
       * Подпись говорит, где ученик, и НЕ говорит, как задание устроено у нас.
       * Первая редакция писала «ступенька 1: узнать» — лестница заданий это
       * наша кухня, а слово «ступень» в курсе к тому же занято ступенями A1 и
       * A2. Правило первое: ученику не рассказывают о нашей кухне.
       */
      opisaniya.push({
        metka: `${nomer} · задание ${nomerZadaniya} из ${zadaniya.length}`,
        zadanie: blok.id,
      });
      ekrany.push(
        <TaskCard key={blok.id} task={blok} index={nomerZadaniya} total={zadaniya.length} />
      );
      return;
    }

    if (blok.kind === "explain") kakoySluchay += 1;
    const metka =
      blok.kind === "explain"
        ? `${nomer} · случай ${kakoySluchay} из ${sluchaev}`
        : `${nomer} · ${podpis(blok.kind)}`;

    opisaniya.push({ metka });
    ekrany.push(<Ekran key={blok.id} block={blok} />);
  });

  // ---- Готово ----
  opisaniya.push({ metka: `${shag(vsegoShagov)} · урок пройден`, konec: true });
  ekrany.push(
    <div key="konec">
      <h1 className={s.zagolovok}>Готово</h1>
      <p className={s.vyvod}>Теперь ты умеешь: {lesson.outcome}</p>
      <div className={s.karta}>
        <Znak kod="2705" razmer={52} />
        <p>
          {next ? (
            <>
              Дальше — <b>{next.title}</b>.
            </>
          ) : (
            <>Модуль пройден. Дальше — проверочная работа модуля.</>
          )}
        </p>
      </div>
      <div style={{ marginTop: 18 }}>
        <FinishLesson
          nextHref={next ? `/learn/${courseSlug}/${next.slug}` : `/learn/${courseSlug}`}
          label={next ? `дальше: ${next.title}` : "к уровню"}
        />
      </div>
      <p className={s.podskazkaKlaviatura}>
        <Link href={`/learn/${courseSlug}`}>Ко всем урокам курса «{course.title}»</Link>
      </p>
    </div>
  );

  return (
    <Shagi ekrany={opisaniya} vyhod={`/learn/${courseSlug}`} modul={modul.title}>
      {ekrany}
    </Shagi>
  );
}
