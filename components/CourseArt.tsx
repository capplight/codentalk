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

/**
 * Флаг во всю обложку карточки.
 *
 * Прежде флаг был картинкой 84×56 посреди пустой подложки — владелец сказал,
 * что это выглядит как вставленный рисунок, а не как обложка.
 *
 * ПОЧЕМУ РАСТЯГИВАЕМ, А НЕ ОБРЕЗАЕМ. Обложка шире флага: у большой карточки
 * она примерно 4,5 к 1 против флажных 3 к 2. Если сохранять пропорции и
 * обрезать лишнее (`slice`), от флага остаётся средняя треть — а там у
 * половины флагов ничего опознавательного нет. Британский превратился бы в
 * красно-белую полосу: его горизонтальный крест как раз занимает всю середину.
 * Немецкий стал бы просто красным, испанский — просто жёлтым.
 *
 * Растяжение (`none`) сохраняет все части флага. Полосатым оно идёт даже на
 * пользу, а круг на японском становится чуть шире положенного — это заметно
 * только если знать. Из двух зол выбрано меньшее.
 *
 * Размер задаётся снаружи, оформлением обложки, — здесь только пропорции.
 */
function Flag({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <svg viewBox="0 0 60 40" preserveAspectRatio="none" role="img" aria-label={title}>
      {children}
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

/**
 * Знак курса по коду — во всю обложку, как флаг у языка.
 *
 * Отличие от флага одно, и оно важное: флаг растягивается, а знак сохраняет
 * пропорции (`meet`). Растянутый флаг остаётся флагом, растянутая надпись
 * `.css {}` выглядит поломкой. Поэтому знак стоит по центру, а поле вокруг
 * него заливает сама обложка — цветом из page.module.css.
 */
function Znak({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid meet" role="img" aria-label={title}>
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
       *
       * По той же причине надпись не растягивается вместе с флагом. Обложка
       * шире флага, и всё остальное на ней растянуто — но растянутая вязь
       * выглядела бы искажённой надписью, а не флагом. Вложенный svg со своим
       * `meet` даёт надписи сохранить пропорции внутри растянутого поля.
       */
      return (
        <Flag title={title}>
          <rect width="60" height="40" fill="#006C35" />
          <svg x="0" y="8" width="60" height="14" viewBox="0 0 60 14" preserveAspectRatio="xMidYMid meet">
            <text
              x="30"
              y="10"
              textAnchor="middle"
              fill="#fff"
              fontSize="7"
              fontFamily="'Segoe UI', 'Noto Naskh Arabic', 'Traditional Arabic', serif"
            >
              لا إله إلا الله
            </text>
          </svg>
          <path d="M12 26 H45 M45 26 l-4 -2.4 M45 26 l-4 2.4" stroke="#fff" strokeWidth="1.6" />
          <rect x="8" y="24.4" width="4.5" height="3.2" rx="1" fill="#fff" />
        </Flag>
      );

    /* ---------- программирование ---------- */
    case "web":
      /*
       * Шестиугольник и два ярлыка с названиями языков разметки.
       *
       * Владелец показал похожую картинку и сказал: можно такую. Нарисована
       * заново своими руками — чужое изображение нельзя брать даже когда оно
       * лежит в поиске первым.
       */
      return (
        <Znak title={title}>
          <path
            d="M30 3.5 L44.7 11.75 L44.7 28.25 L30 36.5 L15.3 28.25 L15.3 11.75 Z"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <rect x="18.5" y="10.6" width="23" height="7.2" rx="2.2" fill="#fff" />
          <text
            x="30"
            y="15.6"
            textAnchor="middle"
            fill="#1f6b68"
            fontSize="4.6"
            fontWeight="700"
            fontFamily="ui-monospace, 'Cascadia Mono', 'Consolas', monospace"
          >
            &lt;html&gt;
          </text>
          <rect x="18.5" y="22.2" width="23" height="7.2" rx="2.2" fill="#fff" />
          <text
            x="30"
            y="27.2"
            textAnchor="middle"
            fill="#1f6b68"
            fontSize="4.6"
            fontWeight="700"
            fontFamily="ui-monospace, 'Cascadia Mono', 'Consolas', monospace"
          >
            .css &#123; &#125;
          </text>
        </Znak>
      );
    case "python":
      /*
       * Ярлык с расширением файла на синем поле — цвета питоновские, но сам
       * знак наш.
       *
       * ПОЧЕМУ НЕ ДВЕ ЗМЕИ. Логотип Python — товарный знак фонда. Брать его
       * как есть ещё можно, а вот «подправить под наши карточки» — уже нет:
       * переделка чужого знака требует разрешения владельца знака. Цвета под
       * запрет не попадают, и узнаётся курс по ним не хуже.
       */
      return (
        <Znak title={title}>
          <rect x="13" y="11.5" width="34" height="17" rx="4" fill="#ffd43b" />
          <text
            x="30"
            y="24.4"
            textAnchor="middle"
            fill="#2b5b84"
            fontSize="10"
            fontWeight="800"
            fontFamily="ui-monospace, 'Cascadia Mono', 'Consolas', monospace"
          >
            .py
          </text>
        </Znak>
      );
    default:
      return null;
  }
}
