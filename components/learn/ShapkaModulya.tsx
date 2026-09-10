import Link from "next/link";
import { adresZnachka } from "@/lib/content/znaki";
import type { Course, Module } from "@/lib/content/types";
import { plural } from "@/lib/plural";
import { SLOVA } from "./slova";
import t from "@/app/learn/tropa.module.css";
import e from "./ekran.module.css";

/**
 * Шапка модуля — единственная шапка на экране ученика.
 *
 * Владелец 10 сентября 2026, после первой редакции: «я хотел чтобы ученик видел
 * только один модуль… чтобы это выглядело единственным его миром… сейчас
 * слоеное тесто получается». Над картой уроков стояло четыре слоя: обложка
 * ступени, счёт часов, кнопка «Продолжить» и свод по всему курсу. Их не стало,
 * и заголовком экрана стал сам модуль.
 *
 * Одна и та же шапка стоит и над картой уроков, и над экраном умений: это один
 * мир, и человек не должен гадать, где он оказался.
 */
export default function ShapkaModulya({
  course,
  module,
  nomer,
  urokovProydeno,
  chast,
  /** На экране умений кнопка ведёт обратно к урокам, а не наоборот. */
  naEkraneUmeniy = false,
}: {
  course: Course;
  module: Module;
  nomer: number;
  urokovProydeno: number;
  chast?: string;
  naEkraneUmeniy?: boolean;
}) {
  const vsego = module.lessons.length;

  return (
    <div className={e.shapka}>
      <span className={e.znak}>
        {module.znak ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={adresZnachka(module.znak)} alt="" width={30} height={30} />
        ) : (
          nomer
        )}
      </span>

      <span className={e.imyaStolb}>
        <span className={e.gdeStroka}>
          {chast && <b>{chast}</b>}
          {chast && " · "}
          {SLOVA.gdeYa(nomer, course.modules.length)}
        </span>
        <h1 className={e.imya}>{module.title}</h1>
      </span>

      {/*
        Умения живут на ОТДЕЛЬНОМ экране, а не сбоку от карты.

        В первой редакции они стояли колонкой рядом с уроками, и владелец назвал
        это слоёным тестом: два разных дела на одном экране. Теперь это кнопка —
        как в тропе Duolingo, где «чему научишься» лежит в отдельной книжке.
      */}
      <Link
        className={e.knopkaUmeniy}
        href={
          naEkraneUmeniy
            ? `/learn/${course.slug}?modul=${module.slug}`
            : `/learn/${course.slug}?modul=${module.slug}&umeniya=1`
        }
      >
        {naEkraneUmeniy ? SLOVA.kUrokam : SLOVA.umeniyaKnopka}
      </Link>

      <span className={e.schyot}>
        {urokovProydeno} из {vsego} {plural(vsego, "урока", "уроков", "уроков")}
      </span>

      <span className={t.polosa} aria-hidden>
        <i style={{ width: `${vsego ? (urokovProydeno / vsego) * 100 : 0}%` }} />
      </span>
    </div>
  );
}
