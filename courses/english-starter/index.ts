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
import yaUmeyu from "./ya-umeyu";
import proNegoIProNih from "./pro-nego-i-pro-nih";
import mneNravitsya from "./mne-nravitsya";
import prosbyIUkazaniya from "./prosby-i-ukazaniya";

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
    // Модуль 18 «Прямо сейчас» первый разбор прошёл, правки по нему внесены —
    // проверочная работа написана заново. Строка открыта, чтобы модуль видели
    // проверки и проверяющие. На сайт он выкладывается по слову владельца.
    pryamoSeychas,
    // Модуль 19 «Я умею» написан и прошёл машинные проверки, проверяющие его
    // ещё не видели. Строка открыта, чтобы его видели проверки. На сайт он
    // идёт по слову владельца и не раньше разбора.
    yaUmeyu,
    proNegoIProNih,
    mneNravitsya,
    prosbyIUkazaniya,
  ],
};

export default course;
