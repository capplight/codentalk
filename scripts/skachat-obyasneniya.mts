/**
 * Скачивание русских объяснений грамматики в `materials/russkie-obyasneniya/`.
 *
 * ЗАЧЕМ. Владелец 3 сентября 2026: «твоё объяснение правил короткое и вообще
 * непонятное… классические учебники от и до объясняют правила с примерами, потом
 * закрепляют упражнениями. найди объяснения уроков на русском в интернете
 * несколько источников, скачай и сохрани».
 *
 * ЧТО ЭТО ЗА ИСТОЧНИК И ЧЕГО ИЗ НЕГО БРАТЬ НЕЛЬЗЯ. Это источник ФОРМЫ, как и
 * `docs/istochniki-russkogo-obyasneniya.md`: оттуда берётся устройство
 * объяснения — на сколько случаев его дробят, сколько примеров даёт каждый
 * случай, где стоит таблица. Ни одного утверждения о языке отсюда брать нельзя:
 * у прежнего образца точность оказалась хуже нашей, и он был полон выдуманных
 * запретов. Проверять всё по `materials/` (EGP, Cambridge, CEFR).
 *
 * ПОЧЕМУ В `materials/`, А НЕ В РЕПОЗИТОРИЙ. Тексты чужие и защищены авторским
 * правом, а репозиторий открыт всем. Папка `materials/` в `.gitignore` — там же
 * лежат руководства Cambridge. Скачанное — рабочая копия для чтения и сверки,
 * она никуда не публикуется и в уроки не переносится.
 *
 * УСТРОЙСТВО. Рядом с каждой страницей кладётся `.txt` — снятая разметка,
 * чтобы искать по ним `grep`-ом, как по разбору PDF в `materials/.text/`.
 *
 *     npm run skachat-obyasneniya                 все источники
 *     npm run skachat-obyasneniya -- lingust      один
 *     npm run skachat-obyasneniya -- --spisok     что вообще есть
 */
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { join } from "node:path";

const KORNI = "materials/russkie-obyasneniya";

/** Откуда берутся адреса: указатель раздела и образец ссылки на тему. */
const ISTOCHNIKI: Record<
  string,
  { ukazatel: string; obrazec: RegExp; koren: string; dvaUrovnya?: boolean }
> = {
  grammarway: {
    ukazatel: "https://grammarway.com/ru/",
    obrazec: /href="(\/ru\/[a-z0-9-]+\/)"/g,
    koren: "https://grammarway.com",
  },
  lingust: {
    ukazatel: "https://lingust.ru/english/grammar",
    // Ссылки на уроки там ОТНОСИТЕЛЬНЫЕ. Первая редакция искала полный адрес и
    // скачала ноль страниц из ста сорока пяти, сказав при этом «Готово».
    obrazec: /href="(\/english\/grammar\/lesson\d+)"/g,
    koren: "https://lingust.ru",
  },
  "native-english": {
    ukazatel: "https://www.native-english.ru/grammar",
    obrazec: /href="(\/grammar\/[a-z0-9-]+)"/g,
    koren: "https://www.native-english.ru",
  },
  puzzle: {
    ukazatel: "https://puzzle-english.com/directory",
    obrazec: /href="(\/directory\/[a-z0-9-]+)"/g,
    koren: "https://puzzle-english.com",
    // Указатель ведёт не на статьи, а на тридцать РАЗДЕЛОВ, и статьи лежат уже
    // внутри них. Первая редакция скачала тридцать оглавлений и отчиталась
    // «скачано 30» — то же самое, что скачать ничего.
    dvaUrovnya: true,
  },
};

const BRAUZER =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120 Safari/537.36";

async function vzyat(url: string): Promise<string | null> {
  try {
    const otvet = await fetch(url, { headers: { "User-Agent": BRAUZER } });
    if (!otvet.ok) return null;
    return await otvet.text();
  } catch {
    return null;
  }
}

/** Разметка снимается грубо: нужен текст для чтения и поиска, а не вёрстка. */
function bezRazmetki(html: string): string {
  let s = html
    .replace(/<(script|style|noscript|svg)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<h([1-4])[^>]*>/gi, "\n\n## ")
    .replace(/<(p|li|td|th|tr|div|br)[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, "");
  for (const [a, b] of [
    ["&nbsp;", " "], ["&mdash;", "—"], ["&ndash;", "–"], ["&laquo;", "«"],
    ["&raquo;", "»"], ["&amp;", "&"], ["&quot;", '"'], ["&#8217;", "'"],
  ] as const) {
    s = s.split(a).join(b);
  }
  return s
    .split("\n")
    .map((x) => x.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

/** Имя файла из адреса: последний кусок пути, без косых черт. */
function imyaFayla(url: string): string {
  const chasti = url.replace(/\/$/, "").split("/");
  return chasti[chasti.length - 1] || "index";
}

async function skachatIstochnik(imya: string): Promise<void> {
  const ist = ISTOCHNIKI[imya];
  const papka = join(KORNI, imya);
  await mkdir(papka, { recursive: true });

  const ukazatel = await vzyat(ist.ukazatel);
  if (!ukazatel) {
    console.log(`  ${imya}: указатель не открылся — пропускаю`);
    return;
  }
  let adresa = [...new Set([...ukazatel.matchAll(ist.obrazec)].map((m) => ist.koren + m[1]))];
  if (ist.dvaUrovnya) {
    console.log(`  ${imya}: разделов ${adresa.length}, захожу в каждый`);
    const glubzhe = new Set<string>();
    for (const razdel of adresa) {
      const html = await vzyat(razdel);
      if (!html) continue;
      for (const m of html.matchAll(ist.obrazec)) glubzhe.add(ist.koren + m[1]);
      await new Promise((r) => setTimeout(r, 400));
    }
    adresa = [...glubzhe];
  }
  console.log(`  ${imya}: тем в указателе ${adresa.length}`);

  let vzyato = 0;
  let bylo = 0;
  for (const url of adresa) {
    const f = join(papka, imyaFayla(url) + ".txt");
    try {
      await access(f);
      bylo += 1;
      continue; // уже лежит — второй раз не тянем
    } catch {
      /* нет файла — качаем */
    }
    const html = await vzyat(url);
    if (!html) continue;
    await writeFile(f, `ИСТОЧНИК: ${url}\n\n${bezRazmetki(html)}`, "utf8");
    vzyato += 1;
    // Вежливая пауза: мы в гостях, а не на своём сервере.
    await new Promise((r) => setTimeout(r, 400));
  }
  console.log(`  ${imya}: скачано ${vzyato}, уже лежало ${bylo}`);
}

const dovod = process.argv[2];
if (dovod === "--spisok") {
  console.log("Источники:", Object.keys(ISTOCHNIKI).join(", "));
} else {
  const nuzhnye = dovod ? [dovod] : Object.keys(ISTOCHNIKI);
  console.log(`Кладу в ${KORNI}/ — папка вне репозитория (.gitignore)\n`);
  for (const i of nuzhnye) {
    if (!ISTOCHNIKI[i]) {
      console.error(`Источника «${i}» нет. Есть: ${Object.keys(ISTOCHNIKI).join(", ")}`);
      process.exit(1);
    }
    await skachatIstochnik(i);
  }
  console.log("\nГотово. Это ФОРМА объяснения, а не сведения о языке:");
  console.log("утверждения об английском проверяются по materials/, а не отсюда.");
}
