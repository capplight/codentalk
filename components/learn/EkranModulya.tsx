import Link from "next/link";
import { adresZnachka } from "@/lib/content/znaki";
import type { Course, Module } from "@/lib/content/types";
import { plural } from "@/lib/plural";
import ShkalaUmeniy from "./ShkalaUmeniy";
import TropaModulya from "./TropaModulya";
import { SLOVA } from "./slova";
import t from "@/app/learn/tropa.module.css";
import e from "./ekran.module.css";

/**
 * ЭКРАН ОДНОГО МОДУЛЯ — то, что ученик видит, открыв ступень.
 *
 * Просьба владельца от 10 сентября 2026: «ученик открывает beginner и видит
 * одну модуль на экране с картой уроков, чтобы его не грузить». До этого дня
 * страница показывала все пять частей и все тридцать модулей разом, и текущий
 * модуль тонул между тридцатью чужими строками.
 *
 * ЧТО ЗДЕСЬ ЕСТЬ И ЧЕГО НЕТ. Есть один модуль: где человек находится, чему
 * учится, карта уроков, работа в конце и одна строка о том, что дальше. Нет
 * ничего о других модулях — они за кнопкой «Все модули», и это нарочно: карта
 * всего пути нужна редко, а мешает каждый день.
 *
 * Гостю этот экран не показывается: у него нет прогресса, и ему нужна витрина
 * со всем составом ступени, по которой он решает, идти ли учиться.
 */
export default function EkranModulya({
  course,
  module,
  nomer,
  done,
  current,
  quizScore,
  sleduyushchiy,
  sleduyushchiyOtkryt,
  chast,
  rabotaChasti,
}: {
  course: Course;
  module: Module;
  /** Номер модуля в курсе, считая с единицы */
  nomer: number;
  done: ReadonlySet<string>;
  current?: string;
  quizScore?: number;
  /** Следующий модуль курса; пусто — этот последний */
  sleduyushchiy?: Module;
  sleduyushchiyOtkryt: boolean;
  /** Название части, если ступень поделена на части */
  chast?: string;
  /**
   * Работа части — только если этот модуль в части последний.
   *
   * Без неё работа части стала бы недостижимой в ежедневной работе: она стоит
   * в конце части, а экран показывает один модуль. Это ровно та порода, о
   * которой проект знает: содержание, до которого нет дороги, выглядит в
   * отчётах работающим.
   */
  rabotaChasti?: { href: string; title: string; otkryta: boolean; sdana: boolean };
}) {
  const lessonsDone = module.lessons.filter((lesson) => done.has(lesson.slug)).length;

  return (
    <section className={e.ekran}>
      <div className={e.gde}>
        <span className={e.gdeStroka}>
          {chast && <b>{chast}</b>}
          {chast && " · "}
          {SLOVA.gdeYa(nomer, course.modules.length)}
        </span>
        <Link className={e.vseModuli} href={`/learn/${course.slug}?vse=1`}>
          {SLOVA.vseModuli}
        </Link>
      </div>

      <div className={e.shapka}>
        <span className={e.znak}>
          {module.znak ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={adresZnachka(module.znak)} alt="" width={30} height={30} />
          ) : (
            nomer
          )}
        </span>
        <h2 className={e.imya}>{module.title}</h2>
        <span className={e.schyot}>
          {lessonsDone} из {module.lessons.length}{" "}
          {plural(module.lessons.length, "урока", "уроков", "уроков")}
        </span>
        <span className={t.polosa} aria-hidden>
          <i style={{ width: `${(lessonsDone / module.lessons.length) * 100}%` }} />
        </span>
      </div>

      {/*
        Две колонки на широком экране и одна на телефоне. Шкала умений стоит
        СБОКУ, а не над картой: над картой она отжимала первый урок за нижний
        край экрана — это и было главной жалобой владельца на снимке.
      */}
      <div className={e.telo}>
        <div className={e.karta}>
          <TropaModulya
            courseSlug={course.slug}
            module={module}
            done={done}
            current={current}
            quizScore={quizScore}
          />
        </div>
        <aside className={e.sboku}>
          <ShkalaUmeniy module={module} done={done} />
        </aside>
      </div>

      {/*
        Что дальше — одной строкой вместо двадцати семи свёрнутых модулей.

        Закрытый следующий модуль говорит, ЧТО его открывает, а не что он
        закрыт: подсказка — это дорога, а не стена. Ссылки у него нет, и это
        честно: нажимать не на что, пока уроки не пройдены.
      */}
      {/* Работа части стоит ПЕРЕД строкой о следующем модуле: по порядку она
          и идёт раньше — часть кончилась, а новая ещё не началась. */}
      {rabotaChasti && (
        <div className={`${e.dalshe} ${rabotaChasti.otkryta ? "" : e.dalsheZakryt}`}>
          <span className={e.dalsheImya}>
            {rabotaChasti.otkryta || rabotaChasti.sdana ? (
              <Link href={rabotaChasti.href}>{rabotaChasti.title}</Link>
            ) : (
              rabotaChasti.title
            )}
          </span>
          {!rabotaChasti.otkryta && !rabotaChasti.sdana && (
            <span className={e.dalsheChto}>{SLOVA.rabotaChastiZakryta}</span>
          )}
        </div>
      )}

      {sleduyushchiy && (
        <div className={`${e.dalshe} ${sleduyushchiyOtkryt ? "" : e.dalsheZakryt}`}>
          <span className={e.dalsheImya}>
            {sleduyushchiyOtkryt ? (
              <Link href={`/learn/${course.slug}?modul=${sleduyushchiy.slug}`}>
                {SLOVA.dalshe}: {sleduyushchiy.title}
              </Link>
            ) : (
              <>
                {SLOVA.dalshe}: {sleduyushchiy.title}
              </>
            )}
          </span>
          {!sleduyushchiyOtkryt && (
            <span className={e.dalsheChto}>{SLOVA.sleduyushchiyZakryt}</span>
          )}
        </div>
      )}
    </section>
  );
}
