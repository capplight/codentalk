/**
 * Какие модули ступени открыты ученику.
 *
 * РЕШЕНИЕ ВЛАДЕЛЬЦА ОТ 10 СЕНТЯБРЯ 2026. Оно меняет прежнее — «замков нет
 * нигде и никогда» (16 августа 2026), — и меняет нарочно: владелец выбрал
 * замок ПО УРОКАМ, при котором проверочная работа вперёд не держит.
 *
 * Разбор и три степени, из которых он выбирал, —
 * `docs/beginner-2/zamysel-ekrana-stupeni.md`.
 *
 * ЧЕТЫРЕ ПРАВИЛА, И КАЖДОЕ ЗАЩИЩАЕТ СВОЁ.
 *
 * 1. Первый модуль открыт всегда, в том числе гостю. Иначе ступень встречает
 *    человека запертой дверью.
 * 2. Следующий модуль открывается, когда пройдены ВСЕ УРОКИ предыдущего.
 *    Сданная работа при этом не требуется: она проверяет знания, а не
 *    прилежание, и человек, споткнувшийся о порог, не должен упираться в
 *    стену. Экзамен ступени всё равно потребует всех работ.
 * 3. Пройденное открыто навсегда. Замок ведёт вперёд, а не запирает позади:
 *    вернуться и перечитать разобранное можно всегда.
 * 4. НИКОГО НЕ ОТБРАСЫВАЕМ НАЗАД. Замка не было полтора месяца, и люди
 *    проходили модули вразнобой. Если в модуле пройден хоть один урок, он
 *    открыт — и все, что до него. Иначе правка кода отняла бы у человека то,
 *    что он уже открыл.
 *
 * Здесь нет ни базы, ни React — только вычисление, по правилу слоёв. Проверка
 * на сервере зовёт эту же функцию: скрытая в разметке ссылка замком не
 * является, и адрес можно набрать руками.
 */

/** Модуль в порядке курса. Уроки — слаги, тоже по порядку. */
export interface ModulDlyaDostupa {
  slug: string;
  uroki: string[];
}

export interface SostoyanieModulya {
  slug: string;
  /** Открыт ли модуль: можно заходить в его уроки */
  otkryt: boolean;
  /** Пройдены ли все уроки модуля */
  zakonchen: boolean;
  urokovVsego: number;
  urokovProydeno: number;
  /**
   * Почему модуль закрыт. Пусто у открытого. Строка служебная: видимый текст
   * по ней пишет редактор, а не эта функция.
   */
  zhdyot?: "предыдущий модуль не пройден";
}

/**
 * Состояние каждого модуля курса.
 *
 * `proydennye` — слаги пройденных уроков. Пустое множество значит и гостя, и
 * новичка: разницы для доступа нет.
 */
export function sostoyanieModuley(
  moduli: readonly ModulDlyaDostupa[],
  proydennye: ReadonlySet<string>,
  mozhnoProyti?: ReadonlySet<string>
): SostoyanieModulya[] {
  // Сперва считаем по каждому модулю то, что не зависит от соседей.
  const schyot = moduli.map((m) => {
    const proydeno = m.uroki.filter((slug) => proydennye.has(slug)).length;
    /*
     * КАПКАН, РАДИ КОТОРОГО ЗАВЕДЁН ТРЕТИЙ ДОВОД.
     *
     * Уроки живут в файлах, а отметки о прохождении — в базе, и содержание
     * попадает туда отдельным переносом (`npm run db:seed:courses`). Урок, до
     * базы не доехавший, пройти НЕЛЬЗЯ: отметке негде лечь.
     *
     * Пока замков не было, это было безобидно. С замком такой модуль запер бы
     * ступень навсегда и молча: человек делает всё, что может, и упирается в
     * стену, а отчёты чисты. Поэтому модуль, ни одного урока которого база не
     * знает, вперёд не держит.
     *
     * Пропущенный довод значит «считать все уроки проходимыми» — так зовут
     * испытания и всё, что базы не касается.
     */
    const dostizhimo = mozhnoProyti
      ? m.uroki.filter((slug) => mozhnoProyti.has(slug)).length
      : m.uroki.length;
    return {
      slug: m.slug,
      urokovVsego: m.uroki.length,
      urokovProydeno: proydeno,
      // Модуль без уроков считается законченным: иначе он запер бы ступень
      // навсегда, а такой модуль — недописанный, а не непроходимый.
      zakonchen: dostizhimo === 0 || proydeno >= dostizhimo,
      nachat: proydeno > 0,
    };
  });

  /*
   * Самый дальний модуль, где хоть что-то пройдено. Правило 4: до него всё
   * открыто, сколько бы дыр ни осталось позади. Ищем с конца, а не с начала:
   * дыра посередине не должна обрывать счёт.
   */
  let dalniy = -1;
  for (let i = schyot.length - 1; i >= 0; i -= 1) {
    if (schyot[i].nachat) {
      dalniy = i;
      break;
    }
  }

  return schyot.map((m, i) => {
    const predydushchiyGotov = i === 0 || schyot[i - 1].zakonchen;
    const otkryt = i === 0 || predydushchiyGotov || i <= dalniy;
    return {
      slug: m.slug,
      otkryt,
      zakonchen: m.zakonchen,
      urokovVsego: m.urokovVsego,
      urokovProydeno: m.urokovProydeno,
      ...(otkryt ? {} : { zhdyot: "предыдущий модуль не пройден" as const }),
    };
  });
}

/**
 * Открыт ли модуль. Тот же расчёт, только ответ один — так зовут проверки на
 * сервере, которым не нужен весь список.
 */
export function modulOtkryt(
  moduli: readonly ModulDlyaDostupa[],
  proydennye: ReadonlySet<string>,
  slug: string,
  mozhnoProyti?: ReadonlySet<string>
): boolean {
  const found = sostoyanieModuley(moduli, proydennye, mozhnoProyti).find((m) => m.slug === slug);
  return found?.otkryt ?? false;
}

/**
 * Открыт ли УРОК. Урок открыт ровно тогда, когда открыт его модуль: внутри
 * модуля порядка нет и не будет — правило владельца «свой темп» остаётся в
 * силе на том уровне, где оно ничего не ломает.
 *
 * Урок, не найденный ни в одном модуле, считается открытым: такие уроки в
 * курсе бывают (библиотека текстов), и запирать их этой функции не поручено.
 */
export function urokOtkryt(
  moduli: readonly ModulDlyaDostupa[],
  proydennye: ReadonlySet<string>,
  urokSlug: string,
  mozhnoProyti?: ReadonlySet<string>
): boolean {
  const svoy = moduli.find((m) => m.uroki.includes(urokSlug));
  if (!svoy) return true;
  return modulOtkryt(moduli, proydennye, svoy.slug, mozhnoProyti);
}

/**
 * Модуль, который показывать на экране: первый открытый и незаконченный.
 *
 * Если закончены все — последний модуль курса: человеку показывают то, чем он
 * кончил, а не пустоту. Курс без модулей отдаёт пусто.
 */
export function modulSeychas(
  moduli: readonly ModulDlyaDostupa[],
  proydennye: ReadonlySet<string>,
  mozhnoProyti?: ReadonlySet<string>
): string | null {
  const sost = sostoyanieModuley(moduli, proydennye, mozhnoProyti);
  const idyot = sost.find((m) => m.otkryt && !m.zakonchen);
  if (idyot) return idyot.slug;
  return sost.length > 0 ? sost[sost.length - 1].slug : null;
}
