/**
 * Возвращение: задания из пройденных модулей внутри нового урока.
 *
 * ЗАЧЕМ ЭТОТ ФАЙЛ. Разбор видов заданий (docs/vidy-zadaniy.md) назвал
 * возвращение первым из того, что стоит взять на этой ступени: разрыв между
 * повторениями и перемешивание тем — единственное из списка Бьорков, чего у
 * курса не было вовсе. Раскладка, принятая владельцем 20 августа, ставит его
 * со второго модуля и дальше в каждом.
 *
 * ПОЧЕМУ ССЫЛКА, А НЕ КОПИЯ. Скопированное задание расходится с оригиналом при
 * первой же правке: методист чинит формулировку в её модуле, а копия остаётся
 * с прежней ошибкой — и ни одна проверка об этом не скажет, потому что для неё
 * это два разных задания. Ссылка разворачивается при показе, и правка доезжает
 * всюду сама.
 *
 * ЧТО НЕЛЬЗЯ БРАТЬ. Вопросы проверочных работ. Их банк живёт в базе и не
 * показывается до сдачи попытки — правило ответов из CLAUDE.md. Возвращение
 * берёт только задания уроков.
 *
 * ГДЕ РАЗВОРАЧИВАЕТСЯ. На странице урока, перед показом. Сами данные курса
 * остаются со ссылкой: скрипты проверок смотрят именно её.
 */
import type { Block, Course, Lesson, Module, TaskBlock, VozvratRef } from "./types";
import { isTask } from "./types";

/** Найденное задание вместе с тем, откуда оно взято. */
export interface NaydennoeZadanie {
  zadanie: TaskBlock;
  module: Module;
  lesson: Lesson;
}

/**
 * Найти задание по ссылке. Возвращает undefined, если модуля или задания нет:
 * решать, ошибка это или нет, — дело того, кто спрашивает. Скрипту проверок
 * нужна ошибка, странице урока — молчание, потому что показывать ученику
 * поломку ссылки хуже, чем не показать задание вовсе.
 */
export function nayti(course: Course, ssylka: VozvratRef): NaydennoeZadanie | undefined {
  const module = course.modules.find((m) => m.slug === ssylka.iz);
  if (!module) return undefined;

  for (const lesson of module.lessons) {
    for (const block of lesson.blocks) {
      if (block.id === ssylka.zadanie && isTask(block)) {
        return { zadanie: block, module, lesson };
      }
    }
  }
  return undefined;
}

/**
 * Имя блока для развёрнутого задания.
 *
 * Своё, а не исходное: одно и то же задание может вернуться в двух уроках, а
 * имена блоков должны оставаться уникальными — на них держатся и отметки
 * «непонятно», и ответы ученика.
 */
export function imyaVozvrata(ssylka: VozvratRef): string {
  return `vozvrat-${ssylka.iz}-${ssylka.zadanie}`;
}

/**
 * Развернуть возвращения урока в обычные блоки.
 *
 * Возвращение встаёт В КОНЕЦ урока, после своих заданий, и это не техническое
 * удобство: сначала ученик разбирается с новым, потом достаёт из памяти старое.
 * Перед ними — врезка, иначе вопрос о давно пройденном читается как ошибка
 * составителя.
 *
 * Урок без возвращений возвращается тем же объектом: лишних копий не делаем.
 */
export function razvernutVozvraty(course: Course, lesson: Lesson): Lesson {
  if (!lesson.vozvrat?.length) return lesson;

  const dobavleno: Block[] = [];
  for (const ssylka of lesson.vozvrat) {
    const naydeno = nayti(course, ssylka);
    if (!naydeno) continue;

    dobavleno.push({
      ...naydeno.zadanie,
      id: imyaVozvrata(ssylka),
    } as Block);
  }

  if (!dobavleno.length) return lesson;

  const vrezka: Block = {
    id: "vozvrashchenie",
    kind: "note",
    tone: "info",
    text:
      "Дальше — задания из пройденных модулей.\n\nОни здесь не для проверки, а " +
      "потому, что забытое возвращается труднее, чем свежее, — и именно поэтому " +
      "запоминается лучше.",
  };

  return { ...lesson, blocks: [...lesson.blocks, vrezka, ...dobavleno] };
}
