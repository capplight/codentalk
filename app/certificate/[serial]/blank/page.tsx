import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { isValidSerialFormat } from "@/lib/domain/certificate";
import { svedeniyaKursa } from "@/lib/content/kurs-svedeniya";
import { plural } from "@/lib/plural";
import PechatButton from "./PechatButton";
import styles from "./blank.module.css";

type Params = { params: Promise<{ serial: string }> };

export async function generateMetadata({ params }: Params) {
  const { serial } = await params;
  return {
    title: `Сертификат ${serial.toUpperCase()}`,
    robots: { index: false, follow: false },
  };
}

/**
 * Дата на документе — без «г.» в конце.
 *
 * Полная запись даёт «16 августа 2026 г.»: на странице проверки это уместно,
 * на бланке сокращение выглядит канцелярской пометкой. Отрезаем его, а не
 * собираем дату руками: месяцы по-русски склоняются, и своя сборка — верный
 * способ получить «16 август».
 */
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(/\s*г\.$/, "");
}

/**
 * Бланк сертификата — то, что кладут в папку и прикладывают к отклику.
 *
 * Отдельная страница, а не вид соседней: у них разные задачи. Соседняя
 * отвечает на вопрос «настоящий ли», и там уместны печать «подлинный» и
 * пояснения. Здесь — документ, и всё лишнее с листа убрано.
 *
 * ФАЙЛ ДЕЛАЕТ САМ БРАУЗЕР. Кнопка открывает окно печати, человек выбирает
 * «Сохранить как PDF» — и получает файл. Своей выделки PDF нет намеренно: она
 * тянет библиотеку, шрифты с кириллицей и вес на сервере ради того, что уже
 * умеет каждый браузер, включая телефонный.
 *
 * Прошедшее время держится за курс, а не за человека: пола владельца
 * сертификата платформа не знает, и «прошёл» на бланке было бы прямой ошибкой
 * у половины.
 */
export default async function BlankPage({ params }: Params) {
  const serial = (await params).serial.toUpperCase();
  if (!isValidSerialFormat(serial)) notFound();

  const certificate = await prisma.certificate.findUnique({
    where: { serial },
    select: {
      serial: true,
      issuedAt: true,
      finalScore: true,
      revokedAt: true,
      user: { select: { displayName: true } },
      course: { select: { title: true, slug: true } },
    },
  });

  if (!certificate) notFound();

  // Отозванный сертификат бланка не имеет: печатать нечего.
  if (certificate.revokedAt !== null) notFound();

  const svedeniya = svedeniyaKursa(certificate.course.slug);
  const podpis = [
    svedeniya.stupen,
    svedeniya.chasov > 0
      ? `${svedeniya.chasov} ${plural(svedeniya.chasov, "час", "часа", "часов")} занятий`
      : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const itogovayaStroka =
    certificate.finalScore !== null
      ? `пройден полностью, итоговый экзамен сдан на ${certificate.finalScore} из 100.`
      : "пройден полностью.";

  return (
    <main className={styles.stranica}>
      <div className={styles.upravlenie}>
        <PechatButton />
        <Link className="btn btn--ghost" href={`/certificate/${certificate.serial}`}>
          ← К проверке
        </Link>
      </div>

      <article className={styles.list}>
        <div className={styles.ramka}>
          <span className={styles.logo}>
            Code<span className={styles.logoAccent}>N</span>Talk
          </span>

          <h1 className={styles.zagolovok}>Сертификат</h1>

          <p className={styles.podzagolovok}>Настоящим удостоверяется, что курс</p>
          <p className={styles.kurs}>{certificate.course.title}</p>
          {podpis && <p className={styles.stupen}>{podpis}</p>}

          {/* Строка собирается целиком в коде, а не по кускам в разметке:
              разметка переносит строки, и перед запятой с точкой появлялись
              пробелы — «пройден полностью , сдан на 92 из 100 .» */}
          <p className={styles.itog}>{itogovayaStroka}</p>

          <p className={styles.podzagolovok}>Сертификат получает</p>
          <p className={styles.imya}>{certificate.user.displayName}</p>

          <div className={styles.niz}>
            <span>{formatDate(certificate.issuedAt)}</span>
            <span className={styles.nomer}>№ {certificate.serial}</span>
          </div>

          <p className={styles.proverka}>
            Подлинность проверяется по номеру: codentalk.kz/certificate/{certificate.serial}
          </p>
        </div>
      </article>
    </main>
  );
}
