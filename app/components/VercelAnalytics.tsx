"use client";

import { Analytics } from "@vercel/analytics/react";

export default function VercelAnalytics() {
  return (
    <>
      <Analytics />

      {/* Script pour étendre les fonctionnalités d'analytics */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Configuration personnalisée pour Vercel Analytics
            if (typeof window !== 'undefined') {
              // Événements personnalisés pour le blog
              if (window.va) {
                window.va('event', 'blog_loaded', {
                  timestamp: new Date().toISOString(),
                  user_agent: navigator.userAgent,
                  language: navigator.language
                });
              }
              
              // Suivi des performances
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData && window.va) {
                      window.va('event', 'page_performance', {
                        load_time: perfData.loadEventEnd - perfData.loadEventStart,
                        dom_content_loaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
                        page: window.location.pathname
                      });
                    }
                  }, 0);
                });
              }
            }
          `,
        }}
      />
    </>
  );
}
