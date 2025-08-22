import Script from "next/script";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
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
    </>
  );
}
