import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codentalk.kz"),
  title: {
    default: "CodeNTalk — языки и код через истории-квесты",
    template: "%s · CodeNTalk",
  },
  description:
    "Бесплатная платформа обучения через истории-квесты: языки, программирование и другие направления. Понятное правило, упражнения и живая практика в каждом юните — от нуля до уверенного уровня.",
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
    <html lang="ru">
      <body>
        <header
          style={{
            borderBottom: "1px solid var(--line)",
            padding: "14px 0",
          }}
        >
          <div
            className="wrap-wide"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: "var(--ink)",
                fontSize: 17,
              }}
            >
              Code<span style={{ color: "var(--accent)" }}>N</span>Talk
            </Link>
            <span className="tag-label" style={{ color: "var(--ink-soft)" }}>
              бесплатно · в своём темпе
            </span>
          </div>
        </header>
        {children}
        <footer
          style={{
            textAlign: "center",
            color: "var(--ink-soft)",
            fontSize: 13,
            padding: "40px 20px 32px",
          }}
        >
          CodeNTalk · знания должны быть доступны каждому ·{" "}
          <a href="https://instagram.com/codentalk.kz" target="_blank" rel="noreferrer">
            @codentalk.kz
          </a>
        </footer>
      </body>
    </html>
  );
}
