/**
 * Построитель образца уроков нового Beginner: `docs/mockups/beginner-2-urok.html`.
 *
 * ЗАЧЕМ ПОСТРОИТЕЛЬ, А НЕ РУКИ. Первую редакцию образца я написал руками, и она
 * тут же разошлась бы с уроками при первой же правке содержания. Здесь страница
 * собирается ИЗ САМОГО КУРСА `courses/english-beginner-2/`, значит показывает то,
 * что в уроках и лежит. Поправил урок — пересобрал образец.
 *
 * ЧТО ОН ПОКАЗЫВАЕТ. Урок не списком, а прохождением: один экран — одна мысль.
 * Сцена подаётся перепиской, каждый случай получает картинку, задания щёлкаются
 * и дают разбор. Это ответ на слова владельца от 3 сентября 2026: «дизайн мне не
 * нравится, он должен быть увлекательным… уроки должны быть не списком, а
 * чем-то интересным для учеников».
 *
 * КАРТИНКИ — Twemoji, CC-BY 4.0 (`docs/beginner-2/kartinki-otkuda.md`). Здесь
 * они тянутся с чужого адреса НАРОЧНО, чтобы образец было видно сразу. На боевом
 * сайте так делать нельзя: файлы должны лежать у нас — то же правило, по
 * которому шрифты забираются во время сборки.
 *
 * ГДЕ ЖИВЁТ СВЯЗЬ «БЛОК → КАРТИНКА». Пока в этом файле, в таблице `KARTINKI`, а
 * не в содержании урока. Причина: у блока `explain` поля для картинки нет, а
 * заводить его в общих типах ради образца нельзя. Когда формат примут, поле
 * появится, и таблица отсюда уйдёт.
 *
 *     npm run obrazec-urokov
 */
import { writeFile } from "node:fs/promises";
import * as fayl from "../courses/english-beginner-2/kto-eto.ts";
import { isTask, type Module, type Block } from "../lib/content/types.ts";

const TWEMOJI = "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg";

/** Имя блока → знак Twemoji. Все коды проверены запросом. */
const KARTINKI: Record<string, string> = {
  // урок 1
  "sluchay-1-am-tolko-s-i": "261d",
  "sluchay-2-po-russki-glagola-net": "1f504",
  "sluchay-3-imya": "1faaa",
  "sluchay-4-zanyatie": "1f468-200d-2695-fe0f",
  "sluchay-5-an-pered-glasnym": "1f3a8",
  "sluchay-6-mesto": "1f3e2",
  "sluchay-7-otkuda": "1f5fa",
  "sluchay-8-sostoyanie": "1f62a",
  "sluchay-9-korotkaya-zapis": "2702",
  // урок 2
  "are-1-you": "1f449",
  "are-2-we": "1f465",
  "are-3-they": "1f9d1-200d-1f91d-200d-1f9d1",
  "are-4-dva-imeni": "1faaa",
  "are-5-mnozhestvennoe-zanyatie": "1f469-200d-1f3a8",
  "are-6-korotkie-zapisi": "2702",
  "are-7-imena-ne-sokrashchayut": "1f6ab",
  // урок 3
  "is-1-he-she": "1f468",
  "is-2-it": "1f4e6",
  "is-3-odno-imya": "1faaa",
  "is-4-veshch-bez-it": "1f697",
  "is-5-korotkie-zapisi": "2702",
  "is-6-imya-tozhe-sokrashchayut": "1f4dd",
  "is-7-pogoda": "2744",
};

/** Слово словаря → знак. Чего нет в таблице, идёт без картинки. */
const KARTINKI_SLOV: Record<string, string> = {
  student: "1f9d1-200d-1f393", teacher: "1f9d1-200d-1f3eb", doctor: "1f468-200d-2695-fe0f",
  driver: "1f695", artist: "1f3a8", engineer: "1f6e0", fine: "1f642", tired: "1f62a",
  ready: "2705", work: "1f3e2", you: "1f449", we: "1f465",
  they: "1f9d1-200d-1f91d-200d-1f9d1", too: "2795", right: "2714", he: "1f468",
  she: "1f469", it: "1f4e6", car: "1f697", house: "1f3e0", new: "2728",
  big: "1f418", cold: "2744",
};

const lico = (kto: number) => (kto % 2 === 0 ? "1f9d1-200d-1f393" : "1f9d1-200d-1f3eb");
const kartinka = (kod: string, razmer: number) =>
  `<img src="${TWEMOJI}/${kod}.svg" alt="" width="${razmer}" height="${razmer}">`;

const escape = (s: string) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Строка объяснения — это пример, если в ней есть и английское, и русское, и
 * они разделены тире. Так устроено правило «два примера у каждого случая».
 */
function razobratStrokuSluchaya(s: string): { en: string; ru: string } | null {
  const m = s.match(/^(.+?)\s+—\s+(.+)$/);
  if (!m) return null;
  if (!/[A-Za-z]{2,}/.test(m[1]) || !/[А-Яа-яЁё]{2,}/.test(m[2])) return null;
  return { en: m[1].trim(), ru: m[2].trim() };
}

const knopkaZvuka = '<span class="zvuk" title="послушать">▶</span>';

// ---------------------------------------------------------------------------
// Экраны из блоков
// ---------------------------------------------------------------------------
function ekranPrimera(b: any, nomer: string): string {
  const stroki = String(b.text).split("\n").filter(Boolean);
  const puzyri = stroki
    .map((st: string, i: number) => {
      const ru = b.perevod?.[st] ?? "";
      const svoy = i % 2 === 0;
      return `<div class="puz${svoy ? "" : " spr"}">
        <div class="lico">${kartinka(lico(i), 24)}</div>
        <div class="rech"><div class="en">${knopkaZvuka}${escape(st.replace(/^—\s*/, ""))}</div>
        <div class="ru">${escape(ru)}</div></div></div>`;
    })
    .join("");
  return `<div class="metka">${nomer} · сначала послушай</div>
    <h2>${escape(b.caption ?? "Разговор")}</h2>
    <div class="chat">${puzyri}</div>
    ${b.explain ? `<p class="vyvod">${escape(b.explain)}</p>` : ""}`;
}

function ekranSluchaya(b: any, nomer: string, vsego: number, kakoy: number): string {
  const stroki: string[] = b.text ?? [];
  const imya = stroki[0] ?? "";
  const primery = stroki.slice(1).map(razobratStrokuSluchaya).filter(Boolean) as Array<{ en: string; ru: string }>;
  const prochee = stroki.slice(1).filter((s) => !razobratStrokuSluchaya(s));
  const kod = KARTINKI[b.id];
  return `<div class="metka">${nomer} · случай ${kakoy} из ${vsego}</div>
    <div class="sluchay">
      ${kod ? `<div class="risunok">${kartinka(kod, 58)}</div>` : ""}
      <div class="telo">
        <h2>${escape(imya)}</h2>
        ${prochee.map((p) => `<p class="pravilo">${escape(p)}</p>`).join("")}
        <div class="stroki">${primery
          .map(
            (p) => `<div class="stroka"><div class="en">${knopkaZvuka}${escape(p.en)}</div>
              <div class="ru">${escape(p.ru)}</div></div>`
          )
          .join("")}</div>
      </div>
    </div>`;
}

function ekranTablicy(b: any, nomer: string): string {
  const golova = (b.head ?? []).map((h: string) => `<th>${escape(h)}</th>`).join("");
  const telo = (b.rows ?? [])
    .map(
      (r: string[]) =>
        `<tr>${r
          .map((c) => `<td>${/[A-Za-z]{2,}/.test(c) ? knopkaZvuka : ""}${escape(c)}</td>`)
          .join("")}</tr>`
    )
    .join("");
  return `<div class="metka">${nomer} · всё вместе</div>
    <h2>${escape(b.caption ?? "Свод")}</h2>
    <div class="karta"><table><tr>${golova}</tr>${telo}</table></div>`;
}

function ekranVrezki(b: any, nomer: string): string {
  const oshibka = b.tone === "mistake";
  const chasti = String(b.text).split("\n\n");
  const zagolovok = chasti[0];
  const ostalnoe = chasti.slice(1);
  return `<div class="metka">${nomer} · ${oshibka ? "частая ошибка" : "к сведению"}</div>
    <div class="vrezka ${oshibka ? "nelzya" : "svedenie"}">
      <div class="zn">${oshibka ? "!" : "i"}</div>
      <div><div class="zag">${escape(zagolovok)}</div>
      ${ostalnoe.map((p) => `<p>${escape(p)}</p>`).join("")}</div>
    </div>`;
}

function ekranSlovarya(b: any, nomer: string): string {
  const karty = (b.items ?? [])
    .map((it: any) => {
      const kod = KARTINKI_SLOV[it.term];
      return `<div class="chip">
        ${kod ? kartinka(kod, 40) : '<div class="bez"></div>'}
        <div class="en">${knopkaZvuka}${escape(it.term)}</div>
        <div class="ru">${escape(it.translation)}</div>
        ${it.hint ? `<div class="zvuchit">${escape(it.hint)}</div>` : ""}
      </div>`;
    })
    .join("");
  return `<div class="metka">${nomer} · слова урока</div>
    <h2>${escape(b.caption ?? "Слова урока")}</h2>
    <div class="nabor">${karty}</div>`;
}

let schyotZadaniy = 0;

function ekranZadaniya(b: any, nomer: string, stupenka: string): string {
  schyotZadaniy += 1;
  const id = `z${schyotZadaniy}`;
  const shapka = `<div class="metka">${nomer} · ${stupenka}</div>`;
  const razbor = `<div class="razbor" id="razbor-${id}"></div>`;
  const uslovie = `<h2>${escape(b.prompt)}</h2>`;
  const podskazka = b.hint
    ? `<button class="podskazka" data-hint="${escape(b.hint)}">Подсказка</button>`
    : "";

  if (b.kind === "choice") {
    const varianty = (b.options ?? [])
      .map(
        (o: any) =>
          `<button data-verno="${o.correct ? 1 : 0}"><span class="otm"></span>${escape(o.text)}</button>`
      )
      .join("");
    return `${shapka}${uslovie}
      <div class="vybor" data-id="${id}" data-razbor="${escape(b.why)}">${varianty}</div>
      ${podskazka}${razbor}`;
  }

  if (b.kind === "gap") {
    return `${shapka}${uslovie}
      <div class="propusk">
        <span>${escape(b.before ?? "")}</span>
        <input data-id="${id}" data-otvet="${escape([b.answer, ...(b.accept ?? [])].join("|"))}"
          data-razbor="${escape(b.why)}" placeholder="…">
        <span>${escape(b.after ?? "")}</span>
      </div>
      <button class="proverit" data-id="${id}">Проверить</button>${podskazka}${razbor}`;
  }

  if (b.kind === "short" || b.kind === "essay") {
    const otvety = b.kind === "short" ? [b.answer, ...(b.accept ?? [])] : [];
    const spisok = b.kind === "essay" ? (b.checklist ?? []) : [];
    return `${shapka}${uslovie}
      ${b.zvuk ? `<div class="zapis">${knopkaZvuka} запись к заданию</div>` : ""}
      <input class="stroka-vvoda" data-id="${id}" data-otvet="${escape(otvety.join("|"))}"
        data-razbor="${escape(b.why)}" placeholder="пиши здесь…">
      <button class="proverit" data-id="${id}" data-svoyo="${b.kind === "essay" ? 1 : 0}">
        ${b.kind === "essay" ? "Показать образец" : "Проверить"}</button>${podskazka}
      ${spisok.length ? `<div class="spisok">Проверь себя: ${spisok.map(escape).join(" · ")}</div>` : ""}
      ${razbor}`;
  }

  if (b.kind === "order") {
    const karty = (b.items ?? [])
      .map((s: string, i: number) => `<button data-i="${i}">${escape(s)}</button>`)
      .join("");
    const nuzhno = (b.answer ?? []).join(",");
    return `${shapka}${uslovie}
      <div class="sobrano" id="sobrano-${id}">нажимай карточки по порядку</div>
      <div class="karty" data-id="${id}" data-nuzhno="${nuzhno}" data-razbor="${escape(b.why)}">${karty}</div>
      ${podskazka}${razbor}`;
  }

  if (b.kind === "hottext") {
    const chasti = (b.parts ?? [])
      .map((p: any, i: number) =>
        p.selectable
          ? `<button class="slovo" data-verno="${p.correct ? 1 : 0}">${escape(p.text)}</button>`
          : `<span>${escape(p.text)}</span>`
      )
      .join("");
    return `${shapka}${uslovie}
      <div class="otmetka" data-id="${id}" data-razbor="${escape(b.why)}">${chasti}</div>
      <button class="proverit" data-id="${id}">Проверить</button>${podskazka}${razbor}`;
  }

  if (b.kind === "match") {
    const levo = (b.left ?? []).map((s: string, i: number) => `<button data-i="${i}">${escape(s)}</button>`).join("");
    const pravo = (b.right ?? []).map((s: string, i: number) => `<button data-i="${i}">${escape(s)}</button>`).join("");
    return `${shapka}${uslovie}
      <div class="pary" data-id="${id}" data-otvet="${(b.answer ?? []).join(",")}" data-razbor="${escape(b.why)}">
        <div class="stolb levo">${levo}</div><div class="stolb pravo">${pravo}</div>
      </div>${podskazka}${razbor}`;
  }

  if (b.kind === "speak") {
    return `${shapka}${uslovie}
      <div class="vsluh">
        <div class="mikro">${kartinka("1f5e3", 40)}</div>
        <div><div class="en">${knopkaZvuka}${escape(b.phrase)}</div>
        ${b.translation ? `<div class="ru">${escape(b.translation)}</div>` : ""}</div>
      </div>
      <p class="pravilo">Скажи вслух и сравни с записью.</p>${podskazka}`;
  }

  return `${shapka}${uslovie}<p class="pravilo">(вид задания «${escape(b.kind)}» в образце не показан)</p>`;
}

// ---------------------------------------------------------------------------
// Сборка
// ---------------------------------------------------------------------------
const modul: Module = ((fayl as any).default?.default ?? (fayl as any).default) as Module;

const ekrany: Array<{ urok: string; html: string }> = [];

for (const [ui, urok] of modul.lessons.entries()) {
  const bloki = urok.blocks as Block[];
  const sluchaev = bloki.filter((b) => !isTask(b) && (b as any).kind === "explain").length;
  let kakoy = 0;
  let nomerShaga = 0;
  const vsegoShagov = bloki.length + 1;
  let stupenka = "ступенька 1: узнать";
  let bylProizvesti = false;

  ekrany.push({
    urok: urok.title,
    html: `<div class="metka">Урок ${ui + 1} из ${modul.lessons.length}</div>
      <h1>${escape(urok.title)}</h1>
      <p class="vyvod">${escape(urok.outcome)}</p>
      <div class="nachalo">${kartinka("1f50a", 52)}<p>Впереди ${sluchaev} случаев и задания.
        Один экран — одна мысль.</p></div>`,
  });

  for (const b of bloki) {
    nomerShaga += 1;
    const nomer = `Шаг ${nomerShaga} из ${vsegoShagov}`;
    const bb = b as any;
    let html: string;
    if (isTask(b)) {
      if (["gap", "short", "order"].includes(bb.kind) && !bylProizvesti) {
        stupenka = "ступенька 2: произвести";
        bylProizvesti = true;
      }
      if (bb.kind === "essay" || bb.kind === "speak") stupenka = "ступенька 3: применить к себе";
      html = ekranZadaniya(bb, nomer, stupenka);
    } else if (bb.kind === "example") html = ekranPrimera(bb, nomer);
    else if (bb.kind === "explain") { kakoy += 1; html = ekranSluchaya(bb, nomer, sluchaev, kakoy); }
    else if (bb.kind === "table") html = ekranTablicy(bb, nomer);
    else if (bb.kind === "note") html = ekranVrezki(bb, nomer);
    else if (bb.kind === "vocab") html = ekranSlovarya(bb, nomer);
    else continue;
    ekrany.push({ urok: urok.title, html });
  }

  ekrany.push({
    urok: urok.title,
    html: `<div class="metka">Урок пройден</div>
      <h1>Готово</h1>
      <p class="vyvod">Теперь ты умеешь: ${escape(urok.outcome)}</p>
      <div class="nachalo">${kartinka("2705", 52)}<p>${
        ui + 1 < modul.lessons.length
          ? `Дальше — урок ${ui + 2}: <b>${escape(modul.lessons[ui + 1].title)}</b>.`
          : "Модуль пройден. Дальше — проверочная работа модуля."
      }</p></div>`,
  });
}

const uroki = [...new Set(ekrany.map((e) => e.urok))];

const stil = `
:root{--fon:#0e0e13;--karta:#191922;--karta2:#20202b;--ink:#f4f4f2;--tish:#a0a0ad;
  --liniya:#2c2c39;--zelen:#34d399;--yantar:#fbbf24;--krasn:#fb7185}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{height:100%}
body{margin:0;background:var(--fon);color:var(--ink);display:flex;flex-direction:column;
  align-items:center;font:17px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
.zametka{max-width:680px;margin:14px 16px 0;padding:11px 14px;border-radius:12px;
  background:#1c1c26;border:1px solid var(--liniya);color:var(--tish);font-size:13px}
.zametka b{color:var(--ink)}
.ramka{width:100%;max-width:680px;flex:1;display:flex;flex-direction:column;padding:16px}
.verh{display:flex;align-items:center;gap:12px;margin-bottom:2px}
.krest{width:32px;height:32px;border-radius:50%;background:var(--karta);border:1px solid var(--liniya);
  color:var(--tish);display:flex;align-items:center;justify-content:center;flex:none;font-size:15px}
.shagi{flex:1;display:flex;gap:3px}
.shagi i{flex:1;height:5px;border-radius:3px;background:var(--liniya);transition:background .25s}
.shagi i.est{background:var(--zelen)}
.shagi i.tut{background:var(--yantar)}
.schyot{font-size:13px;color:var(--tish);flex:none;min-width:44px;text-align:right}
.gde{font-size:12px;color:var(--tish);padding:6px 0 0 44px;letter-spacing:.03em}
.ekran{flex:1;display:none;flex-direction:column;justify-content:center;padding:14px 0}
.ekran.vidno{display:flex;animation:vhod .28s ease}
@keyframes vhod{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.metka{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--tish);margin-bottom:10px}
h1{font-size:28px;line-height:1.2;margin:0 0 8px}
h2{font-size:22px;line-height:1.3;margin:0 0 12px}
.vyvod{color:var(--zelen);margin:8px 0 0}
.pravilo{color:#d6d6d2;margin:0 0 12px}
.nachalo{display:flex;gap:14px;align-items:center;background:var(--karta);border:1px solid var(--liniya);
  border-radius:16px;padding:16px;margin-top:16px}
.nachalo p{margin:0;color:var(--tish)}
.chat{display:flex;flex-direction:column;gap:11px;margin-top:4px}
.puz{display:flex;gap:10px;align-items:flex-end;opacity:0;transform:translateY(8px);animation:vsplyt .4s forwards}
.puz:nth-child(1){animation-delay:.05s}.puz:nth-child(2){animation-delay:.4s}
.puz:nth-child(3){animation-delay:.75s}.puz:nth-child(4){animation-delay:1.1s}
@keyframes vsplyt{to{opacity:1;transform:none}}
.puz.spr{flex-direction:row-reverse}
.lico{width:38px;height:38px;border-radius:50%;background:var(--karta2);flex:none;
  display:flex;align-items:center;justify-content:center}
.rech{max-width:80%;background:var(--karta);border:1px solid var(--liniya);
  border-radius:16px 16px 16px 4px;padding:10px 13px}
.spr .rech{border-radius:16px 16px 4px 16px;background:#1e2a28;border-color:#2b3f3a}
.rech .en,.stroka .en,.chip .en,.vsluh .en{font-weight:600}
.rech .ru,.stroka .ru,.chip .ru,.vsluh .ru{color:var(--tish);font-size:14px;margin-top:2px}
.zvuk{display:inline-flex;width:21px;height:21px;border-radius:50%;background:var(--zelen);
  color:#04231a;align-items:center;justify-content:center;font-size:9px;margin-right:7px;
  vertical-align:1px;cursor:pointer;flex:none}
.sluchay{display:flex;gap:18px;align-items:flex-start}
.sluchay .telo{flex:1;min-width:0}
.risunok{width:92px;height:92px;border-radius:22px;background:var(--karta);border:1px solid var(--liniya);
  display:flex;align-items:center;justify-content:center;flex:none}
.stroki{display:flex;flex-direction:column;gap:8px}
.stroka{background:var(--karta);border:1px solid var(--liniya);border-radius:12px;padding:10px 13px}
.karta{background:var(--karta);border:1px solid var(--liniya);border-radius:16px;padding:8px 16px;overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:15px}
th{text-align:left;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--tish);
  font-weight:600;padding:10px 10px 8px 0;border-bottom:1px solid var(--liniya)}
td{padding:10px 10px 10px 0;border-bottom:1px solid var(--liniya)}
tr:last-child td{border-bottom:0}
.nabor{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));gap:9px}
.chip{background:var(--karta);border:1px solid var(--liniya);border-radius:14px;padding:13px;text-align:center}
.chip img{margin-bottom:7px}
.chip .bez{height:40px}
.chip .zvuchit{color:#6a6a78;font-size:12px;margin-top:4px}
.vrezka{border-radius:16px;padding:16px;display:flex;gap:14px;align-items:flex-start}
.vrezka .zag{font-size:19px;font-weight:700;margin-bottom:6px}
.vrezka p{margin:8px 0 0}
.nelzya{background:#2a1519;border:1px solid #4a2028;color:#ffd7dd}
.svedenie{background:#141d2e;border:1px solid #26364f;color:#cfe0f7}
.vrezka .zn{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;
  justify-content:center;font-weight:700;flex:none}
.nelzya .zn{background:var(--krasn);color:#3b0713}
.svedenie .zn{background:#60a5fa;color:#0b1e38}
.vybor{display:flex;flex-direction:column;gap:9px}
.vybor button{text-align:left;background:var(--karta);color:var(--ink);border:1px solid var(--liniya);
  border-radius:14px;padding:14px 16px;font:inherit;cursor:pointer;transition:.15s;
  display:flex;align-items:center;gap:10px}
.vybor button:hover{border-color:#3d3d4d;transform:translateX(2px)}
.vybor button.verno{border-color:var(--zelen);background:#12241d}
.vybor button.mimo{border-color:var(--krasn);background:#241316;opacity:.8}
.otm{width:22px;height:22px;border-radius:50%;border:1px solid var(--liniya);flex:none;
  display:flex;align-items:center;justify-content:center;font-size:12px}
.verno .otm{background:var(--zelen);border-color:var(--zelen);color:#04231a}
.mimo .otm{background:var(--krasn);border-color:var(--krasn);color:#3b0713}
.propusk{display:flex;gap:8px;align-items:center;flex-wrap:wrap;background:var(--karta);
  border:1px solid var(--liniya);border-radius:14px;padding:14px;font-weight:600}
input{background:#0e0e13;color:var(--ink);border:1px solid #3a3a49;border-radius:9px;
  padding:9px 12px;font:inherit;min-width:120px}
input.stroka-vvoda{width:100%;margin-top:4px}
input:focus{outline:0;border-color:var(--zelen)}
.proverit,.podskazka{margin-top:12px;margin-right:8px;background:var(--zelen);color:#04231a;
  border:0;border-radius:12px;padding:11px 18px;font:inherit;font-weight:700;cursor:pointer}
.podskazka{background:none;color:var(--tish);border:1px solid var(--liniya);font-weight:400}
.spisok{margin-top:12px;color:var(--tish);font-size:14px}
.zapis{background:var(--karta);border:1px solid var(--liniya);border-radius:12px;padding:11px 14px;
  color:var(--tish);margin-bottom:10px}
.razbor{margin-top:12px;padding:13px 15px;border-radius:12px;background:#12241d;
  border:1px solid #1f4136;color:#bdf0dc;font-size:15px;display:none}
.razbor.vidno{display:block;animation:vhod .25s}
.razbor.mimo{background:#241316;border-color:#4a2028;color:#ffd7dd}
.karty{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.karty button{background:var(--karta);color:var(--ink);border:1px solid var(--liniya);
  border-radius:12px;padding:10px 15px;font:inherit;cursor:pointer}
.karty button:disabled{opacity:.28}
.sobrano{min-height:52px;border:1px dashed #3a3a49;border-radius:12px;padding:11px 14px;
  display:flex;gap:8px;align-items:center;flex-wrap:wrap;color:var(--tish)}
.sobrano b{background:#1e2a28;border:1px solid #2b3f3a;border-radius:9px;padding:5px 11px;font-weight:600}
.otmetka{background:var(--karta);border:1px solid var(--liniya);border-radius:14px;padding:14px;
  line-height:2.1}
.slovo{background:#0e0e13;color:var(--ink);border:1px solid #3a3a49;border-radius:9px;
  padding:5px 11px;font:inherit;cursor:pointer}
.slovo.vzyato{background:var(--yantar);color:#3b2600;border-color:var(--yantar)}
.pary{display:flex;gap:12px}
.stolb{flex:1;display:flex;flex-direction:column;gap:8px}
.stolb button{background:var(--karta);color:var(--ink);border:1px solid var(--liniya);
  border-radius:12px;padding:12px;font:inherit;cursor:pointer}
.stolb button.vzyato{border-color:var(--yantar)}
.stolb button.gotovo{border-color:var(--zelen);background:#12241d}
.vsluh{display:flex;gap:14px;align-items:center;background:var(--karta);
  border:1px solid var(--liniya);border-radius:16px;padding:16px}
.mikro{flex:none}
.niz{display:flex;gap:10px;align-items:center;padding:12px 0 4px}
.nazad{background:none;border:0;color:var(--tish);font:inherit;cursor:pointer;padding:10px}
.dalshe{flex:1;background:var(--zelen);color:#04231a;border:0;border-radius:14px;padding:15px;
  font:inherit;font-weight:700;font-size:17px;cursor:pointer}
.dalshe:hover{filter:brightness(1.07)}
.podpis{max-width:680px;color:#6a6a78;font-size:12px;padding:0 16px 26px;text-align:center}
`;

const skript = `
const ekrany=[...document.querySelectorAll(".ekran")];
const gde=${JSON.stringify(ekrany.map((e) => e.urok))};
const shagi=document.getElementById("shagi"),schyot=document.getElementById("schyot");
let tut=0;
ekrany.forEach(()=>shagi.appendChild(document.createElement("i")));
function risovat(){
  ekrany.forEach((e,i)=>e.classList.toggle("vidno",i===tut));
  [...shagi.children].forEach((el,i)=>{el.className=i<tut?"est":i===tut?"tut":"";});
  schyot.textContent=(tut+1)+"/"+ekrany.length;
  document.getElementById("gde").textContent=gde[tut];
  document.getElementById("nazad").style.visibility=tut?"visible":"hidden";
  document.getElementById("dalshe").textContent=tut===ekrany.length-1?"В начало":"Дальше";
  window.scrollTo({top:0});
}
document.getElementById("dalshe").onclick=()=>{tut=tut<ekrany.length-1?tut+1:0;risovat();};
document.getElementById("nazad").onclick=()=>{if(tut){tut-=1;risovat();}};
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight")document.getElementById("dalshe").click();
  if(e.key==="ArrowLeft")document.getElementById("nazad").click();
});
risovat();

function pokazat(id,text,mimo){
  const r=document.getElementById("razbor-"+id);
  if(!r)return; r.textContent=text; r.classList.add("vidno"); r.classList.toggle("mimo",!!mimo);
}
const chisto=(s)=>s.toLowerCase().replace(/[.,!?'’]/g,"").replace(/\\s+/g," ").trim();

document.querySelectorAll(".vybor").forEach((g)=>{
  g.querySelectorAll("button").forEach((b)=>{
    b.onclick=()=>{
      if(g.dataset.gotovo)return; g.dataset.gotovo="1";
      const verno=b.dataset.verno==="1";
      b.classList.add(verno?"verno":"mimo");
      b.querySelector(".otm").textContent=verno?"✓":"✕";
      if(!verno){const p=g.querySelector('[data-verno="1"]');
        p.classList.add("verno");p.querySelector(".otm").textContent="✓";}
      pokazat(g.dataset.id,g.dataset.razbor,!verno);
    };
  });
});

document.querySelectorAll(".proverit").forEach((k)=>{
  k.onclick=()=>{
    const id=k.dataset.id;
    const pole=document.querySelector('input[data-id="'+id+'"]');
    if(pole){
      if(k.dataset.svoyo==="1"){pokazat(id,pole.dataset.razbor,false);return;}
      const nado=pole.dataset.otvet.split("|").map(chisto);
      const verno=nado.includes(chisto(pole.value));
      pole.style.borderColor=verno?"#34d399":"#fb7185";
      pokazat(id,verno?pole.dataset.razbor:"Пока не так. "+pole.dataset.razbor,!verno);
      return;
    }
    const otm=document.querySelector('.otmetka[data-id="'+id+'"]');
    if(otm){
      let verno=true;
      otm.querySelectorAll(".slovo").forEach((s)=>{
        const nado=s.dataset.verno==="1", vzyal=s.classList.contains("vzyato");
        if(nado!==vzyal)verno=false;
      });
      pokazat(id,verno?otm.dataset.razbor:"Пока не так. "+otm.dataset.razbor,!verno);
    }
  };
});

document.querySelectorAll(".otmetka .slovo").forEach((s)=>{
  s.onclick=()=>s.classList.toggle("vzyato");
});

document.querySelectorAll(".karty[data-nuzhno]").forEach((g)=>{
  const id=g.dataset.id, nuzhno=g.dataset.nuzhno.split(",").map(Number);
  const pole=document.getElementById("sobrano-"+id); const sobral=[];
  g.querySelectorAll("button").forEach((b)=>{
    b.onclick=()=>{
      b.disabled=true; sobral.push({i:Number(b.dataset.i),t:b.textContent});
      pole.innerHTML=sobral.map((x)=>"<b>"+x.t+"</b>").join(" ");
      if(sobral.length===nuzhno.length){
        const verno=sobral.every((x,k)=>x.i===nuzhno[k]);
        pokazat(id,verno?g.dataset.razbor:"Пока не так. "+g.dataset.razbor,!verno);
      }
    };
  });
});

document.querySelectorAll(".pary").forEach((g)=>{
  const id=g.dataset.id, otvet=g.dataset.otvet.split(",").map(Number);
  let vybral=null, sdelano=0, oshibok=0;
  g.querySelectorAll(".levo button").forEach((b)=>{
    b.onclick=()=>{ if(b.classList.contains("gotovo"))return;
      g.querySelectorAll(".levo button").forEach((x)=>x.classList.remove("vzyato"));
      b.classList.add("vzyato"); vybral=Number(b.dataset.i); };
  });
  g.querySelectorAll(".pravo button").forEach((b)=>{
    b.onclick=()=>{ if(vybral===null||b.classList.contains("gotovo"))return;
      const verno=otvet[vybral]===Number(b.dataset.i);
      if(verno){
        g.querySelectorAll(".levo button")[vybral].classList.add("gotovo");
        g.querySelectorAll(".levo button")[vybral].classList.remove("vzyato");
        b.classList.add("gotovo"); sdelano+=1;
        if(sdelano===otvet.length)pokazat(id,g.dataset.razbor,oshibok>0);
      } else { oshibok+=1; b.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"none"}],160); }
      vybral=null; };
  });
});

document.querySelectorAll(".podskazka").forEach((k)=>{
  k.onclick=()=>{ k.textContent=k.dataset.hint; k.disabled=true; k.style.opacity=".8"; };
});
`;

const html = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Beginner заново — модуль «${escape(modul.title)}»</title>
<style>${stil}</style>
</head>
<body>
<div class="zametka">
  <b>Образец, а не сайт.</b> Модуль «${escape(modul.title)}» целиком: ${uroki.length} урока,
  ${ekrany.length} экранов. Жми «Дальше» или стрелки ← →. Задания щёлкаются и дают разбор.
  Страница собрана из самого курса <code>courses/english-beginner-2/</code> —
  <code>npm run obrazec-urokov</code>. Нынешний Beginner не тронут.
</div>
<div class="ramka">
  <div class="verh">
    <div class="krest">✕</div>
    <div class="shagi" id="shagi"></div>
    <div class="schyot" id="schyot"></div>
  </div>
  <div class="gde" id="gde"></div>
${ekrany.map((e, i) => `  <section class="ekran${i === 0 ? " vidno" : ""}">${e.html}</section>`).join("\n")}
  <div class="niz">
    <button class="nazad" id="nazad">Назад</button>
    <button class="dalshe" id="dalshe">Дальше</button>
  </div>
</div>
<div class="podpis">
  Картинки: Twemoji © Twitter, лицензия CC-BY 4.0. Звук в образце не подключён —
  кнопки ▶ показывают, где он стоит.
</div>
<script>${skript}</script>
</body>
</html>
`;

await writeFile("docs/mockups/beginner-2-urok.html", html, "utf8");
console.log(`Собрано: ${ekrany.length} экранов, ${uroki.length} урока, заданий ${schyotZadaniy}`);
console.log("Открыть: docs/mockups/beginner-2-urok.html");
