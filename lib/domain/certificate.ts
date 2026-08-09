/**
 * Правила выдачи сертификатов. Раздел 6.3 документа docs/TZ-platform-v2.md.
 *
 * Ни базы, ни React.
 */

export interface CertificateEligibility {
  eligible: boolean;
  reason?: "course_not_completed" | "quizzes_not_passed" | "exam_not_passed" | "already_issued";
  /** Сколько проверочных работ осталось сдать — чтобы сказать это ученику числом */
  quizzesLeft?: number;
}

export interface EligibilityInput {
  /** Пройдены ли все обычные уроки курса */
  allLessonsCompleted: boolean;
  /** Есть ли у курса итоговый экзамен */
  hasExam: boolean;
  /** Сдан ли экзамен */
  examPassed: boolean;
  /** Уже выданный и не отозванный сертификат */
  alreadyIssued: boolean;
  /**
   * Проверочные работы модулей. В новом формате они и есть доказательство
   * знаний: прочитанный урок говорит лишь о том, что страницу открыли.
   * Для курсов первой версии не заполняется.
   */
  quizzes?: { total: number; passed: number };
}

export function checkEligibility(input: EligibilityInput): CertificateEligibility {
  if (input.alreadyIssued) {
    return { eligible: false, reason: "already_issued" };
  }
  if (!input.allLessonsCompleted) {
    return { eligible: false, reason: "course_not_completed" };
  }

  // Порядок важен: сначала работы модулей, потом экзамен. Отметка «урок пройден»
  // ставится нажатием и знаний не подтверждает — сертификат не может держаться
  // на ней одной.
  if (input.quizzes && input.quizzes.passed < input.quizzes.total) {
    return {
      eligible: false,
      reason: "quizzes_not_passed",
      quizzesLeft: input.quizzes.total - input.quizzes.passed,
    };
  }

  if (input.hasExam && !input.examPassed) {
    return { eligible: false, reason: "exam_not_passed" };
  }
  return { eligible: true };
}

/**
 * Публичный номер сертификата.
 *
 * Он попадает в PDF и в ссылку для проверки, поэтому:
 *   — не содержит сведений об ученике;
 *   — не идёт по порядку, иначе по номеру можно было бы прикинуть, сколько
 *     всего выдано сертификатов, и перебрать чужие;
 *   — читается вслух и переписывается с бумаги без путаницы, поэтому из
 *     алфавита убраны похожие знаки: 0, O, 1, I, L.
 */
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

export function formatSerial(randomBytes: Uint8Array): string {
  const chars: string[] = [];
  for (let i = 0; i < 12; i += 1) {
    chars.push(ALPHABET[randomBytes[i % randomBytes.length] % ALPHABET.length]);
  }
  // Группами по четыре — так проще переписать и продиктовать
  return `${chars.slice(0, 4).join("")}-${chars.slice(4, 8).join("")}-${chars.slice(8, 12).join("")}`;
}

/** Проверка формы номера — до обращения к базе. */
export function isValidSerialFormat(serial: string): boolean {
  return new RegExp(`^[${ALPHABET}]{4}-[${ALPHABET}]{4}-[${ALPHABET}]{4}$`).test(serial);
}
