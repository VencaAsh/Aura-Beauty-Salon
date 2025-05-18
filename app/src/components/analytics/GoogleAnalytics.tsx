'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from '@/utils/analytics';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Funkce pro kontrolu souhlasu s cookies
    const checkConsent = () => {
      if (typeof window !== 'undefined') {
        try {
          const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
          return preferences && preferences['analytics'] === true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };

    // Sledování změny stránky pouze pokud je souhlas
    if (checkConsent()) {
      // Získáme search params z window.location místo useSearchParams
      const searchParams = typeof window !== 'undefined' ? window.location.search : '';
      const url = pathname + searchParams;
      pageview(url);
    }
  }, [pathname]);

  return (
    <>
      {/* Google Analytics - základní skript */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Google Analytics - inicializační kód */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure'
          });

          // Kontrola souhlasu s cookies
          try {
            const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
            if (!preferences || preferences['analytics'] !== true) {
              // Pokud není souhlas, nastavíme opt-out
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
            }
          } catch (e) {
            // V případě chyby nastavíme opt-out
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
          }
        `}
      </Script>
    </>
  );
}
