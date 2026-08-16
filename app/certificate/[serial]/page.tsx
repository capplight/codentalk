import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { isValidSerialFormat } from "@/lib/domain/certificate";
import { svedeniyaKursa } from "@/lib/content/kurs-svedeniya";
import styles from "./certificate.module.css";

type Params = { params: Promise<{ serial: string }> };

export async function generateMetadata({ params }: Params) {
  const { serial } = await params;
  return {
    title: `Проверка сертификата ${serial.toUpperCase()}`,
    description: "Подтверждение подлинности сертификата CodeNTalk.",
  };
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Публичная проверка сертификата — открыта без входа в аккаунт.
 *
 * Именно эту ссылку ученик отправляет работодателю. Наружу отдаётся минимум:
 * имя, курс, дата и номер. Ни почты, ни каких-либо иных сведений об ученике —
 * страница проверки не должна становиться способом собирать данные о людях.
 */
export default async function CertificatePage({ params }: Params) {
  const raw = (await params).serial;
  const serial = raw.toUpperCase();

  // Мусор отсеиваем до обращения к базе
  if (!isValidSerialFormat(serial)) notFound();

  const certificate = await prisma.certificate.findUnique({
    where: { serial },
    select: {
      serial: true,
      issuedAt: true,
      finalScore: true,
      revokedAt: true,
      user: { select: { displayName: true } },
      course: { select: { title: true, level: true, slug: true } },
    },
  });

  if (!certificate) notFound();

  const revoked = certificate.revokedAt !== null;
  const svedeniya = svedeniyaKursa(certificate.course.slug);

  return (
    <main className="wrap" style={{ paddingBottom: 56 }}>
      <div className={styles.card}>
        <div className={`${styles.seal} ${revoked ? styles.sealBad : ""}`} aria-hidden="true">
          {revoked ? "×" : "✓"}
        </div>

        <div className={styles.headBlock}>
          <span className={styles.eyebrow}>
            {revoked ? "Сертификат отозван" : "Сертификат подлинный"}
          </span>
          <p className={styles.lead}>
            {revoked
              ? "Этот сертификат был отозван и больше не подтверждает прохождение курса."
              : "Выдан платформой CodeNTalk и подтверждён в базе."}
          </p>
        </div>

        {/*
          Прошедшее время держится за КУРС, а не за ученика: «завершил» выдало
          бы мужской род, а пола владельца сертификата платформа не знает.
          Слэш вроде «завершил(а)» в проекте запрещён — он выглядит как бланк,
          а не как награда.

          Настоящее время («получает») выбрано и по второй причине: имя стоит
          в именительном падеже, а «сертификат выдан» потребовало бы дательного
          — склонять чужие имена машина не умеет.
        */}
        <div className={styles.body}>
          <span className={styles.meta}>Курс</span>
          <p className={styles.course}>{certificate.course.title}</p>
          <span className={styles.meta}>пройден полностью. Сертификат получает</span>
          <p className={styles.name}>{certificate.user.displayName}</p>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt className={styles.meta}>Дата выдачи</dt>
            <dd className={styles.factValue}>{formatDate(certificate.issuedAt)}</dd>
          </div>
          {svedeniya.stupen && (
            <div>
              <dt className={styles.meta}>Ступень</dt>
              <dd className={styles.factValue}>{svedeniya.stupen}</dd>
            </div>
          )}
          {svedeniya.chasov > 0 && (
            <div>
              <dt className={styles.meta}>Занятий</dt>
              <dd className={styles.factValue}>{svedeniya.chasov} ч</dd>
            </div>
          )}
          {certificate.finalScore !== null && (
            <div>
              <dt className={styles.meta}>Итоговый балл</dt>
              <dd className={styles.factValue}>{certificate.finalScore} из 100</dd>
            </div>
          )}
          <div>
            <dt className={styles.meta}>Номер</dt>
            <dd className={`${styles.factValue} ${styles.serial}`}>{certificate.serial}</dd>
          </div>
        </dl>
      </div>

      {/* Бланк отдельной страницей: эта отвечает на вопрос «настоящий ли»,
          а та — то, что кладут в папку и прикладывают к отклику. Отозванному
          сертификату бланка нет: печатать нечего. */}
      {!revoked && (
        <p className={styles.actions}>
          <Link className="btn" href={`/certificate/${certificate.serial}/blank`}>
            Открыть для печати
          </Link>
        </p>
      )}

      <p className={styles.footnote}>
        Эта страница открыта без входа в аккаунт — её можно отправить работодателю.
        Она показывает только имя, курс и дату.
      </p>
      <p className={styles.footnote}>
        <Link href="/proverka">Проверить другой сертификат по номеру</Link>
      </p>
    </main>
  );
}
