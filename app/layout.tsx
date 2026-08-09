import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codentalk.kz"),
  title: {
    default: "CodeNTalk — учись в своём темпе",
    template: "%s · CodeNTalk",
  },
  description:
    "Языки и программирование: объяснение простым языком, упражнения с разбором и серьёзная проверка знаний. Английский и основы веб-разработки бесплатны, остальное — по одной подписке.",
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
    <html lang="ru" data-theme="light">
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
          </div>
        </footer>
      </body>
    </html>
  );
}
