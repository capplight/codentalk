import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
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
        <SiteHeader />
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
