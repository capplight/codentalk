/**
 * Рисунок для карточки направления: флаг у языка, значок у программирования.
 *
 * ПОЧЕМУ СВОИ SVG, А НЕ ГОТОВЫЕ ЗНАЧКИ И НЕ ЭМОДЗИ.
 *
 * Эмодзи-флаги на Windows не работают: система рисует их не флагом, а парой
 * букв — «FR» вместо французского флага. Наша аудитория в основном на Windows,
 * так что этот путь отпадает сразу.
 *
 * Готовый набор значков — это лишняя зависимость и лишний вес на каждой
 * странице. Здесь всего десяток рисунков, и они дешевле нарисованные прямо в
 * разметке: ничего не грузится, цвет берётся из токенов.
 *
 * ПРО ЛОГОТИПЫ. Значки HTML, CSS и Python — товарные знаки, и перерисовывать
 * их для платного продукта не стоит. Поэтому у курсов по коду нарисованы свои
 * знаки: окно браузера с угловыми скобками и змейка. Они узнаются, но ничей
 * знак не повторяют.
 *
 * ПРО ФЛАГ ДЛЯ АРАБСКОГО. Одной страны у арабского нет. Владелец решил взять
 * флаг Саудовской Аравии — страны литературного арабского; подробности у
 * самого флага ниже. Прежде здесь стоял флаг арабского восстания, и это
 * пояснение отстало от кода.
 */

type Props = { id: string; title: string };

/** Рамка флага: скругление и тонкая обводка, чтобы белые поля не сливались с карточкой. */
function Flag({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <svg viewBox="0 0 60 40" width="84" height="56" role="img" aria-label={title}>
      <defs>
        <clipPath id={`clip-${title}`}>
          <rect x="0" y="0" width="60" height="40" rx="5" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${title})`}>{children}</g>
      <rect
        x="0.5"
        y="0.5"
        width="59"
        height="39"
        rx="4.5"
        fill="none"
        stroke="rgba(0,0,0,0.14)"
      />
    </svg>
  );
}

function Icon({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <svg viewBox="0 0 48 48" width="56" height="56" role="img" aria-label={title} fill="none">
      {children}
    </svg>
  );
}

export default function CourseArt({ id, title }: Props) {
  switch (id) {
    /* ---------- языки ---------- */
    case "en":
      // Британский флаг: курс держится британской нормы, и это её знак.
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="13" />
          <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="8" />
        </Flag>
      );
    case "fr":
      return (
        <Flag title={title}>
          <rect width="20" height="40" fill="#002395" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#ED2939" />
        </Flag>
      );
    case "es":
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
        </Flag>
      );
    case "de":
      return (
        <Flag title={title}>
          <rect width="60" height="13.4" fill="#000" />
          <rect y="13.4" width="60" height="13.2" fill="#DD0000" />
          <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
        </Flag>
      );
    case "it":
      return (
        <Flag title={title}>
          <rect width="20" height="40" fill="#008C45" />
          <rect x="20" width="20" height="40" fill="#F4F5F0" />
          <rect x="40" width="20" height="40" fill="#CD212A" />
        </Flag>
      );
    case "tr":
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#E30A17" />
          <circle cx="23" cy="20" r="10" fill="#fff" />
          <circle cx="27" cy="20" r="8" fill="#E30A17" />
          <path
            d="M36 20 l7.6 2.5 -4.7 -6.5 0 8 4.7 -6.5 z"
            fill="#fff"
            transform="rotate(15 38 20)"
          />
        </Flag>
      );
    case "cn":
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#EE1C25" />
          <path d="M10 6 l1.8 5.4 -4.6 -3.3 5.6 0 -4.6 3.3 z" fill="#FFDE00" />
          <circle cx="20" cy="4" r="1.6" fill="#FFDE00" />
          <circle cx="24" cy="8" r="1.6" fill="#FFDE00" />
          <circle cx="24" cy="14" r="1.6" fill="#FFDE00" />
          <circle cx="20" cy="18" r="1.6" fill="#FFDE00" />
        </Flag>
      );
    case "jp":
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#fff" />
          <circle cx="30" cy="20" r="11" fill="#BC002D" />
        </Flag>
      );
    case "kr":
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#fff" />
          <path d="M30 9 a11 11 0 0 1 0 22 a5.5 5.5 0 0 1 0 -11 a5.5 5.5 0 0 0 0 -11 z" fill="#CD2E3A" />
          <path d="M30 9 a11 11 0 0 0 0 22 a5.5 5.5 0 0 0 0 -11 a5.5 5.5 0 0 1 0 -11 z" fill="#0047A0" />
          <g fill="#000">
            <rect x="6" y="8" width="9" height="1.6" />
            <rect x="6" y="11" width="9" height="1.6" />
            <rect x="45" y="8" width="9" height="1.6" />
            <rect x="45" y="11" width="9" height="1.6" />
            <rect x="6" y="28" width="9" height="1.6" />
            <rect x="6" y="31" width="9" height="1.6" />
            <rect x="45" y="28" width="9" height="1.6" />
            <rect x="45" y="31" width="9" height="1.6" />
          </g>
        </Flag>
      );
    case "ar":
      /*
       * Флаг Саудовской Аравии — решение владельца: это страна литературного
       * арабского, а нейтрального флага у языка нет.
       *
       * Надпись набрана настоящим текстом, а не срисована линиями. На флаге
       * стоит шахада — исповедание веры, и рисовать вместо неё волнистую
       * закорючку «под арабскую вязь» было бы неуважительно. На мелком размере
       * текст всё равно читается как узор, но это настоящий текст.
       */
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#006C35" />
          <text
            x="30"
            y="17"
            textAnchor="middle"
            fill="#fff"
            fontSize="7"
            fontFamily="'Segoe UI', 'Noto Naskh Arabic', 'Traditional Arabic', serif"
          >
            لا إله إلا الله
          </text>
          <path d="M12 26 H45 M45 26 l-4 -2.4 M45 26 l-4 2.4" stroke="#fff" strokeWidth="1.6" />
          <rect x="8" y="24.4" width="4.5" height="3.2" rx="1" fill="#fff" />
        </Flag>
      );

    /* ---------- программирование ---------- */
    case "web":
      // Окно браузера с угловыми скобками: разметка страниц.
      return (
        <Icon title={title}>
          <rect x="4" y="8" width="40" height="32" rx="5" stroke="currentColor" strokeWidth="2.5" />
          <path d="M4 17 H44" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="10" cy="12.5" r="1.6" fill="currentColor" />
          <circle cx="15.5" cy="12.5" r="1.6" fill="currentColor" />
          <path
            d="M19 24 L14 29.5 L19 35 M29 24 L34 29.5 L29 35"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
      );
    case "python":
      // Змея: знак узнаётся, но чужой логотип не повторяет. Тело одной толстой
      // линией — тонкая закорючка на мелком размере не читается вовсе.
      return (
        <Icon title={title}>
          <path
            d="M31 12 C20 12 20 22 27 24 C34 26 34 36 23 36 C17 36 14 33 14 29"
            stroke="currentColor"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <circle cx="31" cy="12" r="4.6" fill="currentColor" />
          <circle cx="32.6" cy="10.8" r="1.15" fill="var(--surface)" />
          <path
            d="M35.5 12 L41 12 M41 12 L38.6 10.2 M41 12 L38.6 13.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </Icon>
      );
    default:
      return null;
  }
}
