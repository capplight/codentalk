import type { Course } from "@/lib/content/types";
import etoBylo from "./eto-bylo";
import vcheraYaRabotal from "./vchera-ya-rabotal";
import osobyeFormy from "./osobye-formy";
import yaNeDelal from "./ya-ne-delal";
import sprositOProshlom from "./sprosit-o-proshlom";
import chtoProishodilo from "./chto-proishodilo";
import pokaIKogda from "./poka-i-kogda";
import yaSobirayus from "./ya-sobirayus";
import yaSdelayu from "./ya-sdelayu";
import uzheDogovorilis from "./uzhe-dogovorilis";
import poRaspisaniyu from "./po-raspisaniyu";
import davayYa from "./davay-ya";
import mozhetByt from "./mozhet-byt";
import bolsheIMenshe from "./bolshe-i-menshe";
import samyy from "./samyy";
import ochenISlishkom from "./ochen-i-slishkom";
import kakEtoDelaetsya from "./kak-eto-delaetsya";
import skolkoChego from "./skolko-chego";
import ktoToIChtoTo from "./kto-to-i-chto-to";
import etotTotIDrugoy from "./etot-tot-i-drugoy";
import svoyISam from "./svoy-i-sam";
import yaEtoDelal from "./ya-eto-delal";
import uzheIEshchyoNet from "./uzhe-i-eshchyo-net";
import kakDolgo from "./kak-dolgo";
import nadoINeNado from "./nado-i-ne-nado";
import stoitINeStoit from "./stoit-i-ne-stoit";
import ransheMog from "./ranshe-mog";
import vezhlivo from "./vezhlivo";
import esli from "./esli";
import kotoryy from "./kotoryy";
import onSkazalChto from "./on-skazal-chto";
import { ekzamenEnglishElementary } from "./ekzamen";
import {
  rabotaProshloe,
  rabotaPlany,
  rabotaKakoyISkolko,
  rabotaOpytIPravila,
} from "./raboty-chastey";

/**
 * Английский · Elementary — ступень до A2.
 *
 * Программа курса: docs/programma-english-elementary.md. Задумано тридцать
 * один модуль в четырёх частях, здесь пока написанные. Модули добавляются по
 * одному: каждый проходит скрипт проверок, методиста, редактора и владельца.
 *
 * ЧАСТИ ЗАВОДЯТСЯ ПО ОДНОЙ, ПО МЕРЕ НАПИСАНИЯ РАБОТ. Границы взяты из
 * программы: модули 1–7, 8–13, 14–21, 22–31. Работа части ни на что не влияет
 * — экзамен и сертификат открываются по работам МОДУЛЕЙ, решение владельца от
 * 20 августа.
 *
 * ГЛАВНОЕ ПРАВИЛО СТУПЕНИ, которое держат все модули: между ступенями нет
 * ссылок на память. Человек мог прийти сразу сюда, не проходя Beginner
 * (решение владельца от 16 августа), поэтому оборотов «ты уже знаешь» и «как
 * мы учили в прошлом курсе» в модулях не бывает вовсе.
 */
const course: Course = {
  slug: "english-elementary",
  track: "english",
  // Имя ступени, а не описание: на хабе направления карточка зовётся
  // Elementary, и внутри должно стоять то же самое.
  title: "Английский · Elementary",
  level: "до A2",
  tagline: "Для тех, кто говорит о себе в настоящем времени и хочет рассказать о прошлом",
  access: "premium",
  modules: [etoBylo, vcheraYaRabotal, osobyeFormy, yaNeDelal, sprositOProshlom, chtoProishodilo, pokaIKogda, yaSobirayus, yaSdelayu, uzheDogovorilis, poRaspisaniyu, davayYa, mozhetByt, bolsheIMenshe, samyy, ochenISlishkom, kakEtoDelaetsya, skolkoChego, ktoToIChtoTo, etotTotIDrugoy, svoyISam, yaEtoDelal, uzheIEshchyoNet, kakDolgo, nadoINeNado, stoitINeStoit, ransheMog, vezhlivo, esli, kotoryy, onSkazalChto],
  parts: [
    {
      slug: "proshloe",
      title: "Прошлое",
      tagline: "Рассказать о вчерашнем дне, возразить и расспросить",
      modules: [
        "eto-bylo",
        "vchera-ya-rabotal",
        "osobye-formy",
        "ya-ne-delal",
        "sprosit-o-proshlom",
        "chto-proishodilo",
        "poka-i-kogda",
      ],
      quiz: rabotaProshloe,
    },
    {
      slug: "plany",
      title: "Планы и договорённости",
      tagline: "Сказать о намерении, обещать, договориться и предложить",
      modules: [
        "ya-sobirayus",
        "ya-sdelayu",
        "uzhe-dogovorilis",
        "po-raspisaniyu",
        "davay-ya",
        "mozhet-byt",
      ],
      quiz: rabotaPlany,
    },
    {
      slug: "kakoy-i-skolko",
      title: "Какой и сколько",
      tagline: "Сравнить, оценить, сказать о количестве и не повторять названное",
      modules: [
        "bolshe-i-menshe",
        "samyy",
        "ochen-i-slishkom",
        "kak-eto-delaetsya",
        "skolko-chego",
        "kto-to-i-chto-to",
        "etot-tot-i-drugoy",
        "svoy-i-sam",
      ],
      quiz: rabotaKakoyISkolko,
    },
    {
      slug: "opyt-i-pravila",
      title: "Опыт и правила",
      tagline: "Рассказать о пережитом, разобрать правила и пересказать чужие слова",
      modules: [
        "ya-eto-delal",
        "uzhe-i-eshchyo-net",
        "kak-dolgo",
        "nado-i-ne-nado",
        "stoit-i-ne-stoit",
        "ranshe-mog",
        "vezhlivo",
        "esli",
        "kotoryy",
        "on-skazal-chto",
      ],
      quiz: rabotaOpytIPravila,
    },
  ],

  /*
   * Итоговый экзамен ступени. Устройство и счёт вопросов объяснены в
   * `ekzamen.ts`: семьдесят шесть вопросов в банке, тридцать в попытке, порог
   * восемьдесят. Открывается он, только когда пройдены все уроки и все работы
   * МОДУЛЕЙ, — работы частей в это условие не входят.
   */
  exam: ekzamenEnglishElementary,
};

export default course;
