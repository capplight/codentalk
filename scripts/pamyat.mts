/**
 * Снимок памяти агента: из домашней папки в репозиторий и обратно.
 *
 * ЗАЧЕМ. Память живёт вне репозитория — в `~/.claude/projects/<проект>/memory/`.
 * Значит на другом компьютере её нет: клонируешь репозиторий, а агент не знает
 * ни одного решения владельца, ни одной ошибки, на которой уже обжигались.
 * Тайного в этих файлах нет — это записи о проекте, — поэтому снимок кладём
 * рядом с остальными документами.
 *
 * Запуск:
 *   npm run pamyat            снять снимок: память → docs/pamyat/
 *   npm run pamyat -- --vernut   вернуть: docs/pamyat/ → память
 *
 * ОСТОРОЖНО. Снимок — не хранилище. Хранилище — домашняя папка, там агент
 * читает и пишет каждый день. Снимок нужен, чтобы память пережила переезд, и
 * его надо обновлять перед переездом, иначе увезёшь вчерашнее.
 */
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, join } from "node:path";

const KLYUCH_PROEKTA = "e--My-Project-codentalk-kz";
const PAMYAT = join(homedir(), ".claude", "projects", KLYUCH_PROEKTA, "memory");
const SNIMOK = join(process.cwd(), "docs", "pamyat");

const vernut = process.argv.includes("--vernut");

/**
 * Проверка на тайное. Репозиторий открыт всем, и всё, что в него попадает,
 * считается опубликованным завтра в газете. Однажды это уже подвело: пароль от
 * учебных записей лежал открытой строкой в скрипте.
 */
const OPASNOE = [
  /npg_[A-Za-z0-9]{8,}/,
  /postgres(ql)?:\/\/[^\s"]*:[^\s"@]*@/,
  /\b[A-Za-z0-9]{32,}\b/,
];

async function skopirovat(otkuda: string, kuda: string, proveryat: boolean): Promise<number> {
  if (!existsSync(otkuda)) {
    console.error(`Нет папки ${otkuda}`);
    process.exit(1);
  }
  await mkdir(kuda, { recursive: true });

  const imena = (await readdir(otkuda)).filter((f) => f.endsWith(".md"));
  let skopirovano = 0;

  for (const imya of imena) {
    const text = await readFile(join(otkuda, imya), "utf8");

    if (proveryat) {
      for (const obrazec of OPASNOE) {
        const nashlos = text.match(obrazec);
        if (nashlos) {
          console.error(
            `\nОстановлено: в файле ${imya} нашлась строка, похожая на тайное:\n` +
              `  ${nashlos[0].slice(0, 12)}…\n` +
              `Репозиторий открыт всем. Убери строку из памяти и повтори.`
          );
          process.exit(1);
        }
      }
    }

    await writeFile(join(kuda, imya), text, "utf8");
    skopirovano += 1;
  }
  return skopirovano;
}

if (vernut) {
  const skolko = await skopirovat(SNIMOK, PAMYAT, false);
  console.log(`Возвращено в память: ${skolko} ${skolko === 1 ? "файл" : "файлов"}`);
  console.log(`Куда: ${PAMYAT}`);
} else {
  const skolko = await skopirovat(PAMYAT, SNIMOK, true);
  console.log(`Снято в снимок: ${skolko} ${skolko === 1 ? "файл" : "файлов"}`);
  console.log(`Куда: ${basename(SNIMOK)}/ — не забудь закоммитить`);
}
