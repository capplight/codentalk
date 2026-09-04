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
import {
  KONEC_DALSHE_UROK,
  KONEC_MODUL_PROYDEN,
  PODPIS_KONCA,
  PODPIS_NACHALA,
  ZAGOLOVOK_KONCA,
  podpisMateriala,
  podpisRazbora,
  podpisZadaniya,
} from "@/lib/content/podpisi-ekranov";
import { ZNACHKI_VIDA } from "@/lib/content/znaki";
import Ekran, { Znak } from "./Ekran";
import FinishLesson from "./FinishLesson";
import Shagi, { type OpisanieEkrana } from "./Shagi";
import TaskCard from "./TaskCard";
import s from "./shagi.module.css";

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

  /*
   * ---- Вступление ----
   *
   * Здесь стоит текст, написанный редактором в самом уроке (`vstuplenie`), а не
   * собранный кодом. Прежде код печатал сюда поле `outcome` («узнавать букву по
   * названию и записывать слово, продиктованное по буквам») и строку «Впереди 8
   * случаев и 8 заданий»: первое написано для сверочного скрипта, второе зовёт
   * ученику «случаем» наше имя блока. Владелец прочёл оба и назвал их
   * рандомным описанием.
   */
  opisaniya.push({ metka: `${shag(1)} · ${PODPIS_NACHALA}` });
  ekrany.push(
    <div key="nachalo">
      <h1 className={s.zagolovok}>{lesson.title}</h1>
      {lesson.vstuplenie && (
        <div className={s.karta}>
          <Znak kod={ZNACHKI_VIDA.nachalo} razmer={52} />
          <p>{lesson.vstuplenie}</p>
        </div>
      )}
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
        metka: `${nomer} · ${podpisZadaniya(nomerZadaniya, zadaniya.length)}`,
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
        ? `${nomer} · ${podpisRazbora(kakoySluchay, sluchaev)}`
        : `${nomer} · ${podpisMateriala(blok.kind)}`;

    opisaniya.push({ metka });
    ekrany.push(<Ekran key={blok.id} block={blok} />);
  });

  // ---- Готово ----
  opisaniya.push({ metka: `${shag(vsegoShagov)} · ${PODPIS_KONCA}`, konec: true });
  ekrany.push(
    <div key="konec">
      <h1 className={s.zagolovok}>{ZAGOLOVOK_KONCA}</h1>
      <div className={s.karta}>
        <Znak kod={ZNACHKI_VIDA.konec} razmer={52} />
        <p>
          {next ? (
            <>
              {KONEC_DALSHE_UROK}<b>{next.title}</b>.
            </>
          ) : (
            <>{KONEC_MODUL_PROYDEN}</>
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
    <Shagi
      ekrany={opisaniya}
      vyhod={`/learn/${courseSlug}`}
      modul={modul.title}
      znakModulya={modul.znak}
    >
      {ekrany}
    </Shagi>
  );
}
