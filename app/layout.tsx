import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundAccents from "./components/BackgroundAccents";
import Metadata from "./components/Metadata";
import VercelAnalytics from "./components/VercelAnalytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Métadonnées personnalisées */}
        <Metadata />

        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${inter.variable} antialiased selection:bg-emerald-300 selection:text-zinc-900 text-zinc-900 bg-zinc-50`}
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        }}
      >
        <BackgroundAccents />
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/lucide@0.472.0/dist/umd/lucide.js"
          strategy="afterInteractive"
        />
        <Script
          id="lucide-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize icons if needed
              if (window.lucide && lucide.createIcons) {
                lucide.createIcons();
              }
              // Year
              const y = document.getElementById('year');
              if (y) y.textContent = new Date().getFullYear();
            `,
          }}
        />

        {/* Vercel Analytics */}
        <VercelAnalytics />
      </body>
    </html>
  );
}
