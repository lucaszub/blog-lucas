import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundAccents from "./components/BackgroundAccents";

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
        <title>ConnectLab — Modern websites for small businesses</title>
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
      </body>
    </html>
  );
}
