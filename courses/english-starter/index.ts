import type { Course } from "@/lib/content/types";
import alfavit from "./alfavit";
import privetstvie from "./privetstvie";
import rasskazOSebe from "./rasskaz-o-sebe";
import voprosIOtvet from "./vopros-i-otvet";
import neTak from "./ne-tak";
import chtoEtoTakoe from "./chto-eto-takoe";
import moiVeshchi from "./moi-veshchi";
import odinIMnogo from "./odin-i-mnogo";
import chislaVozrastCena from "./chisla-vozrast-cena";
import dniDatyVremya from "./dni-daty-vremya";

/**
 * Английский с нуля — ступень до A1.
 *
 * Программа курса: docs/programma-english-starter.md. Всего задумано 24 модуля,
 * здесь пока написанные. Модули добавляются по одному: каждый проходит скрипт
 * проверок, методиста, редактора и владельца.
 *
 * Экзамен появится, когда будут написаны все модули: он обязан затрагивать
 * каждый итог курса, а до тех пор такой экзамен собрать не из чего.
 */
const course: Course = {
  slug: "english-starter",
  track: "english",
  title: "Английский с нуля",
  level: "до A1",
  tagline: "Для тех, кто не учил язык или всё забыл",
  access: "free",
  modules: [
    alfavit,
    privetstvie,
    rasskazOSebe,
    voprosIOtvet,
    neTak,
    chtoEtoTakoe,
    moiVeshchi,
    odinIMnogo,
    chislaVozrastCena,
    dniDatyVremya,
    // Модуль 11 «Какой он» написан и лежит в `kakoy-on.ts`, но в курс пока не
    // включён: методист его не разбирал (docs/zadachi-vladeltsa.md, п. 1.20).
    // Автор не принимает свою работу — это правило проекта, а не формальность:
    // в модуле 10 методист нашёл три ложных утверждения об источниках.
    // Раскомментировать после разбора.
    // kakoyOn,
  ],
};

export default course;
