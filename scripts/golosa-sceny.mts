/**
 * Кто каким голосом читает каждую реплику — прогоном, а не слухом.
 *
 * ЗАЧЕМ. Правило проекта говорит: раскладка голосов «проверяется ТОЛЬКО слухом»,
 * потому что имя звукового файла считается от текста и от числа голосов, а
 * порядок в него не входит. Это верно про ОТЧЁТЫ: `check:content` и `ozvuchka`
 * промолчат при любом раскладе, они видят, что файл есть, а не что в нём звучит.
 *
 * Но сама раскладка живёт в `lib/content/zvuk.ts` и вычисляется чистой функцией
 * `repliki()`. Значит спросить её МОЖНО — и тогда сверка подписи сцены («говорит
 * Алим») с голосом первой реплики перестаёт быть делом слуха.
 *
 * На этом проект уже обжигался трижды: примеры-разговоры сорока уроков читались
 * одним голосом, блоки `audio` целой ступени — тоже, ряд букв уходил синтезу без
 * разметки. Каждый раз отчёты были чисты.
 *
 *   npm run golosa -- english-beginner-2 ya-ne-delayu
 */
import { courses } from "../courses/index.ts";
import { isTask } from "../lib/content/types.ts";
import { raskladkaGolosov, razgovorLi, repliki } from "../lib/content/zvuk.ts";

const [imyaKursa, imyaModulya] = process.argv.slice(2);
if (!imyaKursa) {
  console.error("Скажи курс и, если надо, модуль: npm run golosa -- english-beginner-2 ya-ne-delayu");
  process.exit(1);
}
const kurs = courses.find((c) => c.slug === imyaKursa);
if (!kurs) {
  console.error(`Курса «${imyaKursa}» нет. Есть: ${courses.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

const IMYA = /^(?:zhenskiy|muzhskoy)$/;
let vsego = 0;

for (const mod of kurs.modules) {
  if (imyaModulya && mod.slug !== imyaModulya) continue;
  for (const les of mod.lessons) {
    for (const b of les.blocks) {
      if (isTask(b)) {
        /*
         * ОБРАЗЕЦ УСТНОГО ЗАДАНИЯ ТОЖЕ БЫВАЕТ РАЗГОВОРОМ, а прежняя редакция
         * этого скрипта отбрасывала все задания разом. Методист просил сверить
         * голоса образца урока 5 модуля 15 — и получил бы пустой вывод, то есть
         * согласие там, где проверки нет вовсе. Ровно эта ловушка описана в
         * шапке про `transcript`: пустая выборка и чистый отчёт выглядят
         * одинаково.
         */
        const zadanie = b as unknown as {
          id: string;
          kind: string;
          phrase?: string;
          golosa?: ("zhenskiy" | "muzhskoy")[];
          pervyyGolos?: "zhenskiy" | "muzhskoy";
        };
        if (zadanie.kind !== "speak" || !zadanie.phrase) continue;
        const dvaGolosa = razgovorLi(zadanie.phrase);
        const chasti = repliki(zadanie.phrase, dvaGolosa, raskladkaGolosov(zadanie));
        if (chasti.length < 2) continue;
        vsego += 1;
        const raskladka = raskladkaGolosov(zadanie) || "(по очереди, первый женский)";
        console.log(`\n${mod.slug} → ${les.slug} → ${zadanie.id}  [${raskladka}] образец`);
        for (const ch of chasti) {
          const kto = ch.golos === "muzhskoy" ? "муж." : "жен.";
          console.log(`  ${kto}  ${ch.text.replace(/\s+/g, " ").trim()}`);
        }
        continue;
      }
      const blok = b as unknown as {
        id: string;
        kind: string;
        text?: string | string[];
        transcript?: string;
        razgovor?: boolean;
        caption?: string;
        golosa?: ("zhenskiy" | "muzhskoy")[];
        pervyyGolos?: "zhenskiy" | "muzhskoy";
      };
      const razgovor = blok.kind === "audio" || blok.razgovor === true;
      if (!razgovor) continue;
      /*
       * У ЗАПИСИ ТЕКСТ ЛЕЖИТ В `transcript`, А НЕ В `text`, и первая редакция
       * этого скрипта смотрела только `text`. Отчёт вышел чистым и назвал шесть
       * разговоров из восьми — а промолчал ровно о тех двух, ради которых
       * проверка и писалась: о записях урока слушания, где голос решает поле
       * `pervyyGolos`. Пустая выборка и чистый отчёт выглядят одинаково.
       */
      const stroki = Array.isArray(blok.text) ? blok.text : [blok.text ?? ""];
      const text = blok.kind === "audio" ? (blok.transcript ?? "") : stroki.join("\n");
      const dvaGolosa = blok.kind === "audio" ? razgovorLi(text) : true;
      const chasti = repliki(text, dvaGolosa, raskladkaGolosov(blok));
      if (chasti.length < 2) continue;
      vsego += 1;
      const raskladka = raskladkaGolosov(blok) || "(по очереди, первый женский)";
      console.log(`\n${mod.slug} → ${les.slug} → ${blok.id}  [${raskladka}]`);
      if (blok.caption) console.log(`  подпись: ${blok.caption}`);
      for (const ch of chasti) {
        const kto = ch.golos === "muzhskoy" ? "муж." : "жен.";
        console.log(`  ${kto}  ${ch.text.replace(/\s+/g, " ").trim()}`);
      }
    }
  }
}
console.log(`\nРазговоров разобрано: ${vsego}. Сверь подписи и имена с голосами глазами: машина знает, КТО читает, но не знает, кто должен.`);
