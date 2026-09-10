import Link from "next/link";
import type { Course, Module } from "@/lib/content/types";
import ShapkaModulya from "./ShapkaModulya";
import ShkalaUmeniy from "./ShkalaUmeniy";
import TropaModulya from "./TropaModulya";
import { SLOVA } from "./slova";
import e from "./ekran.module.css";

/**
 * ЭКРАН ОДНОГО МОДУЛЯ — весь мир ученика, открывшего ступень.
 *
 * ВТОРАЯ РЕДАКЦИЯ, 10 сентября 2026. Первая показывала модуль, но под четырьмя
 * чужими слоями — обложкой ступени, счётом часов, кнопкой «Продолжить» и сводом
 * по всему курсу, — да ещё держала умения колонкой сбоку от карты. Владелец:
 * «я хотел чтобы ученик видел только один модуль… чтобы это выглядело
 * единственным его миром… сейчас слоеное тесто получается. в дуолинго ученик
 * видит только одну карту уроков за раз, ему не показывают полную ступень».
 *
 * ЧТО ЗДЕСЬ ОСТАЛОСЬ: шапка модуля и карта его уроков. Всё.
 *
 * ЧТО УЕХАЛО И КУДА:
 *
 * - умения — на свой экран, по кнопке в шапке (`?umeniya=1`);
 * - карта всей ступени — за ссылку в самом низу, под концом пути (`?vse=1`);
 * - обложка, свод и счёт часов — остались только гостю, на витрине.
 *
 * Гостю этот экран не показывается вовсе: у него нет прогресса, и ему нужна
 * витрина со всем составом, по которой он решает, идти ли учиться.
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
  /** Показать экран умений вместо карты уроков */
  umeniya = false,
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
  umeniya?: boolean;
}) {
  const urokovProydeno = module.lessons.filter((lesson) => done.has(lesson.slug)).length;

  return (
    <section className={e.ekran}>
      <ShapkaModulya
        course={course}
        module={module}
        nomer={nomer}
        urokovProydeno={urokovProydeno}
        chast={chast}
        naEkraneUmeniy={umeniya}
      />

      {/*
        Экран умений и карта уроков — два разных дела, и стоят они порознь.
        Вместе они и были тем слоёным тестом, на которое владелец жаловался.
      */}
      {umeniya ? (
        <div className={e.telo}>
          <ShkalaUmeniy module={module} done={done} />
        </div>
      ) : (
        <div className={e.telo}>
          <TropaModulya
            courseSlug={course.slug}
            module={module}
            done={done}
            current={current}
            quizScore={quizScore}
          />

          {/*
            Что дальше — тихой строкой в конце пути, а не отдельным слоем.

            Закрытое говорит, ЧТО его открывает, а не что оно закрыто:
            подсказка — это дорога, а не стена. Ссылки у закрытого нет, и это
            честно: нажимать не на что, пока уроки не пройдены.
          */}
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

          {/*
            Выход на карту всей ступени стоит В САМОМ НИЗУ и выглядит тише
            всего остального. Он нужен редко — раз в модуль, чтобы посмотреть,
            где ты вообще, — а мешал бы каждый день, стоя наверху.
          */}
          <p className={e.vseModuli}>
            <Link href={`/learn/${course.slug}?vse=1`}>{SLOVA.vseModuli}</Link>
          </p>
        </div>
      )}
    </section>
  );
}
