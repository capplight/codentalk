/**
 * Сетка букв: поле, в котором спрятаны знакомые слова.
 *
 * Просьба владельца от 5 сентября 2026: «упражнение типа ячейками с рандомными
 * буквами и найти среди этих букв знакомые слова».
 *
 * ЗДЕСЬ ТОЛЬКО ЧИСТЫЕ ПРАВИЛА — без React и без базы, как того требует правило
 * слоёв. Одно и то же место ищет слово и для страницы (подсветить найденное), и
 * для проверок (убедиться, что слово в сетке вообще есть). Иначе они разойдутся,
 * и ученик получит задание без ответа при зелёном отчёте.
 *
 * НАПРАВЛЕНИЯ ТОЛЬКО ДВА: слева направо и сверху вниз. Ни задом наперёд, ни по
 * диагонали. Это не упрощение ради кода: ступень учит, что английское слово
 * читается слева направо, а строка списка идёт сверху вниз. Слово, спрятанное
 * задом наперёд, учит обратному.
 */

/** Где стоит слово: с какой ячейки начинается и куда идёт. */
export interface MestoSlova {
  stroka: number;
  stolbec: number;
  /** true — слово идёт сверху вниз, false — слева направо. */
  vniz: boolean;
  dlina: number;
}

/** Сколько ячеек в строке. Сетка обязана быть прямоугольной — это проверяет `bedaSetki`. */
export function shirina(stroki: string[]): number {
  return stroki.length === 0 ? 0 : stroki[0].length;
}

/** Буква в ячейке. Заглавные и строчные не различаются: в сетке они одна и та же буква. */
function bukva(stroki: string[], stroka: number, stolbec: number): string {
  return (stroki[stroka]?.[stolbec] ?? "").toUpperCase();
}

/**
 * Все места, где стоит слово. Пусто — слова в сетке нет.
 *
 * Возвращается СПИСОК, а не первое попавшееся: проверке нужно знать про второе
 * место, чтобы сказать об этом методисту.
 */
export function mestaSlova(stroki: string[], slovo: string): MestoSlova[] {
  const iskomoe = slovo.toUpperCase();
  const dlina = iskomoe.length;
  const mesta: MestoSlova[] = [];
  if (dlina < 2) return mesta;

  for (let stroka = 0; stroka < stroki.length; stroka += 1) {
    for (let stolbec = 0; stolbec < shirina(stroki); stolbec += 1) {
      for (const vniz of [false, true]) {
        let sovpalo = true;
        for (let n = 0; n < dlina && sovpalo; n += 1) {
          const r = vniz ? stroka + n : stroka;
          const c = vniz ? stolbec : stolbec + n;
          sovpalo = bukva(stroki, r, c) === iskomoe[n];
        }
        if (sovpalo) mesta.push({ stroka, stolbec, vniz, dlina });
      }
    }
  }
  return mesta;
}

/** Ячейки, занятые словом: номера вида «строка * ширина + столбец». */
export function yacheykiSlova(stroki: string[], mesto: MestoSlova): number[] {
  const w = shirina(stroki);
  const yacheyki: number[] = [];
  for (let n = 0; n < mesto.dlina; n += 1) {
    const r = mesto.vniz ? mesto.stroka + n : mesto.stroka;
    const c = mesto.vniz ? mesto.stolbec : mesto.stolbec + n;
    yacheyki.push(r * w + c);
  }
  return yacheyki;
}

/**
 * Что ученик выделил: он нажимает первую и последнюю ячейку слова.
 *
 * Выделение засчитывается только прямое — по строке или по столбцу; наискось
 * даёт `null`. И читается оно всегда в ту сторону, в какую пишут: выделив
 * слово с конца, ученик получает те же буквы в том же порядке, а не задом
 * наперёд. Иначе задание наказывало бы за порядок нажатий, а не за незнание.
 */
export function vydelenie(stroki: string[], ot: number, do_: number): string | null {
  const w = shirina(stroki);
  if (w === 0) return null;
  const a = { r: Math.floor(ot / w), c: ot % w };
  const b = { r: Math.floor(do_ / w), c: do_ % w };
  if (a.r !== b.r && a.c !== b.c) return null;

  const shagi = Math.max(Math.abs(a.r - b.r), Math.abs(a.c - b.c));
  const nachalo = a.r > b.r || a.c > b.c ? b : a;
  const vniz = a.c === b.c && shagi > 0;

  let slovo = "";
  for (let n = 0; n <= shagi; n += 1) {
    slovo += bukva(stroki, vniz ? nachalo.r + n : nachalo.r, vniz ? nachalo.c : nachalo.c + n);
  }
  return slovo;
}

/**
 * Беды сетки, которые ученик увидел бы заданием без ответа.
 *
 * Возвращает список готовых строк — их печатает `check:content`. Пусто — сетка
 * решаема.
 */
export function bedySetki(stroki: string[], slova: string[]): string[] {
  const bedy: string[] = [];
  const w = shirina(stroki);

  if (stroki.length < 2 || w < 2) bedy.push("сетка меньше двух ячеек в стороне");
  for (const stroka of stroki) {
    if (stroka.length !== w) {
      bedy.push(`строки разной длины: «${stroka}» из ${stroka.length} при ширине ${w}`);
      break;
    }
  }
  for (const stroka of stroki) {
    const chuzhie = stroka.replace(/[A-Za-z]/g, "");
    if (chuzhie.length > 0) {
      bedy.push(`в сетке не только латинские буквы: «${chuzhie}» в строке «${stroka}»`);
      break;
    }
  }

  const vidennye = new Set<string>();
  for (const slovo of slova) {
    const klyuch = slovo.toUpperCase();
    if (vidennye.has(klyuch)) bedy.push(`слово «${slovo}» названо дважды`);
    vidennye.add(klyuch);

    if (slovo.length < 2) {
      bedy.push(`слово «${slovo}» короче двух букв — искать нечего`);
      continue;
    }
    const mesta = mestaSlova(stroki, slovo);
    if (mesta.length === 0) {
      bedy.push(`слова «${slovo}» в сетке нет ни по строке, ни по столбцу`);
    }
  }
  return bedy;
}
