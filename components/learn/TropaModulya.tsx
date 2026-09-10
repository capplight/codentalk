import Link from "next/link";
import { adresZnachka, ZNACHKI_VIDA } from "@/lib/content/znaki";
import { IMYA_VIDA, ZNAK_VIDA, vidUroka } from "@/lib/content/vid-uroka";
import type { Lesson, Module } from "@/lib/content/types";
import { plural } from "@/lib/plural";
import { SLOVA } from "./slova";
import t from "@/app/learn/tropa.module.css";

/**
 * Тропа одного модуля: узлы уроков и узел проверочной работы в конце.
 *
 * ВЫНЕСЕНО ИЗ СТРАНИЦЫ 10 сентября 2026, когда экранов стало два — экран
 * одного модуля и карта всей ступени. Оба показывают тропу одинаково, и второй
 * такой же кусок разметки разошёлся бы с первым при первой же правке.
 */

/** Значок вида урока — только у умений; у правил его нет нарочно. */
function znakVida(lesson: Lesson): string | undefined {
  return ZNAK_VIDA[vidUroka(lesson)];
}

/**
 * Внутренность узла: кружок и подпись.
 *
 * Нажимается ВЕСЬ узел, а не одно название: кружок с номером выглядит кнопкой,
 * значит должен ею быть. Владелец ткнул в кружок и не попал никуда.
 *
 * Закрытая работа ссылки не получает, но обёртку получает ту же — иначе она
 * встала бы в сетке иначе, чем соседи, и тропа сломалась бы на одном узле.
 */
function Uzel({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <span className={t.uzelSsylka}>{children}</span>;
  return (
    <Link className={t.uzelSsylka} href={href}>
      {children}
    </Link>
  );
}

/** Замок у закрытого узла. Значок лежит у нас, забирает `npm run znachki`. */
function Zamok() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={adresZnachka(ZNACHKI_VIDA.zamok)} alt="" width={18} height={18} />;
}

export default function TropaModulya({
  courseSlug,
  module,
  done,
  current,
  quizScore,
  gost = false,
}: {
  courseSlug: string;
  module: Module;
  /** Слаги пройденных уроков */
  done: ReadonlySet<string>;
  /** Слаг урока, на котором человек стоит сейчас */
  current?: string;
  /** Лучший балл сданной работы модуля; пусто — не сдавалась */
  quizScore?: number;
  /** Человек не вошёл: подпись у первого узла другая */
  gost?: boolean;
}) {
  const lessonsDone = module.lessons.filter((lesson) => done.has(lesson.slug)).length;
  const moduleReady = lessonsDone === module.lessons.length;
  const asked = module.quiz.ask ?? module.quiz.questions.length;

  return (
    <ol className={t.tropa}>
      {module.lessons.map((lesson, i) => {
        const isDone = done.has(lesson.slug);
        const isNow = lesson.slug === current;
        return (
          <li className={`${t.uzel} ${i % 2 === 0 ? t.sleva : t.sprava}`} key={lesson.slug}>
            <Link className={t.uzelSsylka} href={`/learn/${courseSlug}/${lesson.slug}`}>
              <span
                className={`${t.krug} ${isDone ? t.krugGotov : ""} ${isNow ? t.krugSeychas : ""}`}
                aria-hidden
              >
                {isDone ? "✓" : i + 1}
              </span>
              <span className={t.podpis}>
                {isNow && <span className={t.tuty}>{gost ? SLOVA.gostyuNachni : SLOVA.tyZdes}</span>}
                <span className={t.imyaUroka}>{lesson.title}</span>
                <span className={t.melko}>
                  {/* Значок стоит только у уроков умений: их среди правил и надо
                      различать. У правил значка нет нарочно — иначе он у каждого
                      второго узла и превращается в шум. */}
                  {znakVida(lesson) && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className={t.znachokVida}
                        src={adresZnachka(znakVida(lesson)!)}
                        alt=""
                        width={14}
                        height={14}
                      />
                      {IMYA_VIDA[vidUroka(lesson)]}
                      {" · "}
                    </>
                  )}
                  {isDone ? "пройден" : `${lesson.estimatedMinutes} мин`}
                </span>
              </span>
            </Link>
          </li>
        );
      })}

      {/* Работа модуля — такой же узел тропы, только другой формы: она стоит в
          конце пути и открывается, когда уроки пройдены. Отдельной рамкой она
          выглядела концом страницы, а не следующим шагом. */}
      <li
        className={`${t.uzel} ${module.lessons.length % 2 === 0 ? t.sleva : t.sprava} ${
          t.rabota
        } ${quizScore !== undefined ? t.rabotaSdana : ""} ${moduleReady ? "" : t.rabotaZakryta}`}
      >
        <Uzel
          href={
            moduleReady || quizScore !== undefined
              ? `/learn/${courseSlug}/proverochnaya/${module.slug}`
              : undefined
          }
        >
          <span className={t.krug} aria-hidden>
            {quizScore !== undefined ? "✓" : moduleReady ? "?" : <Zamok />}
          </span>
          <span className={t.podpis}>
            <span className={t.imyaUroka}>Проверочная работа</span>
            <span className={t.melko}>
              {quizScore !== undefined
                ? `сдана, ${quizScore} из 100`
                : moduleReady
                  ? `${asked} ${plural(asked, "вопрос", "вопроса", "вопросов")} · можно сдавать`
                  : SLOVA.rabotaModulyaZakryta}
            </span>
          </span>
        </Uzel>
      </li>
    </ol>
  );
}
