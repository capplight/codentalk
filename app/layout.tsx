import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

/*
 * Два шрифта, и оба с кириллицей — иначе русский текст поедет на запасной
 * шрифт, а рядом с латиницей это сразу видно.
 *
 * next/font забирает файлы во время сборки и раздаёт их с нашего же адреса:
 * ни одного обращения на сторону при заходе на сайт. Это и быстрее, и не
 * рассказывает чужой стороне, кто к нам пришёл.
 *
 * display: swap — текст читается сразу системным шрифтом и подменяется, когда
 * загрузится наш. Пустая страница в ожидании шрифта хуже подмены.
 */
const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codentalk.kz"),
  title: {
    default: "CodeNTalk — учись в своём темпе",
    template: "%s · CodeNTalk",
  },
  description:
    "Английский с нуля и основы веб-разработки. Сначала объяснение простыми словами, потом упражнения с разбором, а в конце — настоящая проверка знаний и сертификат. Учись в своём темпе.",
  // сайт пока скрыт от поисковиков (см. также app/robots.ts) — снять при публичном запуске
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Тёмный лист по умолчанию — решение владельца от 3 сентября 2026.
       Светлый остаётся на выбор, переключатель в шапке. */
    <html lang="ru" data-theme="dark" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/*
          Тема применяется до первой отрисовки. Без этого страница успевала бы
          мигнуть светлым у того, кто выбрал тёмную, — заметно и неприятно.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <footer
          style={{
            borderTop: "1px solid var(--line)",
            color: "var(--ink-soft)",
            fontSize: 13,
            padding: "28px 0",
            marginTop: 40,
          }}
        >
          <div className="wrap-wide">
            CodeNTalk · Обучение в своём темпе · Алматы ·{" "}
            <a href="https://instagram.com/codentalk.kz" target="_blank" rel="noreferrer">
              @codentalk.kz
            </a>
            <br />
            {/* Значки уроков — Twemoji, лицензия CC-BY 4.0: она требует
                упоминания, и вот оно. Сами файлы лежат у нас, в /twemoji. */}
            Значки в уроках —{" "}
            <a href="https://github.com/jdecked/twemoji" target="_blank" rel="noreferrer">
              Twemoji
            </a>{" "}
            от Twitter, лицензия CC-BY 4.0
          </div>
        </footer>
        {/*
          Счётчик посещений. Считает, сколько человек пришло, откуда и какие
          страницы смотрели, — этого не знала ни одна наша таблица: база видит
          только тех, кто уже вошёл.

          Почему именно он, а не сторонний счётчик. Файлов слежения не ставит и
          человека между заходами не узнаёт, значит согласия и оговорки о
          персональных данных не требует. Считающий код раздаётся с нашего же
          адреса (/_vercel/insights) — стороннему серверу не сообщается, кто к
          нам зашёл. Это то же правило, по которому выше взяты шрифты.

          Работает только на выложенном сайте и только если счётчик включён в
          настройках Vercel: на своей машине он молчит нарочно, чтобы наши
          собственные заходы не портили счёт.
        */}
        <Analytics />
      </body>
    </html>
  );
}
