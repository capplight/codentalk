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
import gdeEto from "./gde-eto";
import kakoyOn from "./kakoy-on";
import zdesEst from "./zdes-est";
import chtoYaDelayu from "./chto-ya-delayu";
import yaNeDelayu from "./ya-ne-delayu";
import sprositODelah from "./sprosit-o-delah";
import kakChasto from "./kak-chasto";
import pryamoSeychas from "./pryamo-seychas";

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
    kakoyOn,
    gdeEto,
    zdesEst,
    chtoYaDelayu,
    yaNeDelayu,
    sprositODelah,
    kakChasto,
    // Модуль 18 «Прямо сейчас» написан и прошёл машинные проверки, но
    // проверяющие его ещё не видели. Содержание, прошедшее половину приёмки,
    // не выкладывается — строка открывается после разбора.
    pryamoSeychas,
  ],
};

export default course;
