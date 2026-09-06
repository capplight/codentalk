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

/**
 * Слова курса, случайно сложившиеся в сетке помимо списка.
 *
 * Нашёл методист 5 сентября 2026: ученик видит в поле знакомое `CAT`, отмечает
 * его — и не получает ничего. Задание молчит там, где ученик прав, а это тот же
 * запрет «не наказывать за верный ответ», только с другого конца.
 *
 * Спрашивается по словарю САМОГО курса: обидно бывает лишь за то, чему учили.
 */
export function lishnieSlova(stroki: string[], slova: string[], slovar: string[]): string[] {
  const iskomye = new Set(slova.map((s) => s.toUpperCase()));
  const lishnie = new Set<string>();
  for (const slovo of slovar) {
    const bolshimi = slovo.toUpperCase();
    // Слова короче трёх букв не считаются, и это не поблажка ради тишины.
    //
    // 6 сентября 2026 сетку впервые поставили в уроки, и ДВА модуля независимо
    // упёрлись в одно и то же: `HI` лежит внутри `THIRTEEN` и `THIRTY`, `IN` —
    // внутри `SINGER`. Убрать это перестановкой нельзя: лишнее слово лежит
    // ВНУТРИ искомого, а не рядом с ним. Оба сборщика назвали это вслух.
    //
    // Двухбуквенные слова курса — сплошь служебные (`am`, `is`, `in`, `at`,
    // `hi`, `my`, `we`), и ученик их в поле не ищет: список говорит, что
    // искать. А проверка, кричащая на неизбежное, перестаёт читаться — этим
    // правилом проект дорожит с тех пор, как первая редакция другой проверки
    // дала 168 срабатываний почти сплошь на правильном.
    if (iskomye.has(bolshimi) || bolshimi.length < 3) continue;
    if (mestaSlova(stroki, bolshimi).length > 0) lishnie.add(slovo);
  }
  return [...lishnie].sort();
}

/* ------------------------------------------------------------------------ */
/*  ОТМЕЧАЮТСЯ ВСЕ БУКВЫ СЛОВА — решение владельца от 6 сентября 2026.        */
/* ------------------------------------------------------------------------ */
/*
 * Дословно: «пусть ученик выбирает не первую и вторую букву, пусть выбирает
 * все буквы в слове и при нажатии последней буквы ответ будет засчитан, так
 * лучше запомнится».
 *
 * Прежний способ — нажать первую ячейку и последнюю — считал `vydelenie()`.
 * Она остаётся: по ней собран `yacheykiSlova` и обе проверки. Меняется то, что
 * делает РУКА ученика, и потому здесь заведены две новые чистые функции.
 *
 * НАПРАВЛЕНИЕ ТОЛЬКО ВПЕРЁД — вправо или вниз. Слова в сетке лежат так же (см.
 * шапку файла), и обратный ход означал бы, что ученик собирает слово с конца.
 */

/**
 * Можно ли добавить ячейку к уже отмеченным.
 *
 * Пусто — можно любую: это начало слова. Дальше ячейка обязана стоять вплотную
 * к последней и продолжать то же направление, которое задали две первые.
 */
export function mozhnoDobavit(stroki: string[], otmecheny: number[], yacheyka: number): boolean {
  const w = shirina(stroki);
  if (w === 0) return false;
  if (yacheyka < 0 || yacheyka >= stroki.length * w) return false;
  if (otmecheny.length === 0) return true;
  if (otmecheny.includes(yacheyka)) return false;

  const gde = (n: number) => ({ r: Math.floor(n / w), c: n % w });
  const posledn = gde(otmecheny[otmecheny.length - 1]);
  const novaya = gde(yacheyka);

  const vpravo = novaya.r === posledn.r && novaya.c === posledn.c + 1;
  const vniz = novaya.c === posledn.c && novaya.r === posledn.r + 1;
  if (!vpravo && !vniz) return false;

  // Две первые ячейки задают направление, третья и дальше обязаны его держать.
  if (otmecheny.length === 1) return true;
  const pervaya = gde(otmecheny[0]);
  const vtoraya = gde(otmecheny[1]);
  return vtoraya.r === pervaya.r ? vpravo : vniz;
}

/** Буквы отмеченных ячеек подряд, заглавными. Порядок — тот, в каком нажимали. */
export function bukvyYacheek(stroki: string[], otmecheny: number[]): string {
  const w = shirina(stroki);
  return otmecheny.map((n) => bukva(stroki, Math.floor(n / w), n % w)).join("");
}

/**
 * ОБРАЗЕЦ НАД ПОЛЕМ — вторая половина того же решения владельца: «еще надо
 * чтобы сверху был пример правильного ответа и горизонтально и вертикально.
 * одна картина где правильно выбраны два слова вертикально и горизонтально.
 * картина может быть небольшая».
 *
 * Образец один на весь курс и лежит здесь, а не в уроке, нарочно: он говорит о
 * ТОМ, КАК НАЖИМАТЬ, а не о предмете урока. Урок, который завёл бы свой,
 * показал бы ученику вторую правду о том же.
 *
 * СЛОВА ВЗЯТЫ ЧУЖИЕ СПЕЦИАЛЬНО. `CAT` и `CUP` не ищутся ни в одной из четырёх
 * сеток курса (проверено по коду: там `FORM`, `COUNTRY`, `ADDRESS`, `EMAIL`,
 * `PASSPORT`, `THIRTEEN`, `THIRTY`, `TABLE`, `WALL`, `DESK`, `CHAIR`, `COOK`,
 * `NURSE`, `ACTOR`, `DRIVER`, `SINGER`). Образец, показавший искомое слово,
 * был бы ответом.
 */
export interface ObrazecSetki {
  stroki: string[];
  /** Ячейки слова, лежащего по строке. */
  poStroke: number[];
  /** Ячейки слова, лежащего по столбцу. */
  poStolbcu: number[];
}

export const OBRAZEC_SETKI: ObrazecSetki = {
  stroki: ["CAT", "UKX", "PMR"],
  poStroke: [0, 1, 2],
  poStolbcu: [0, 3, 6],
};
