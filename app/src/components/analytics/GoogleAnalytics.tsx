'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from '@/utils/analytics';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [consentGranted, setConsentGranted] = useState(false);

  // Inicializace stavu souhlasu a posluchadice na zm1bny
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        setConsentGranted(!!preferences?.analytics);

        const handler = (event: any) => {
          try {
            setConsentGranted(!!(event?.detail && event.detail.analytics));
          } catch {
            setConsentGranted(false);
          }
        };
        window.addEventListener('cookieConsentChanged', handler);
        return () => window.removeEventListener('cookieConsentChanged', handler);
      }
    } catch {
      // ignore
    }
  }, []);


  useEffect(() => {
    if (!consentGranted) return;
    try {
      const searchParams = typeof window !== 'undefined' ? window.location.search : '';
      const url = pathname + searchParams;
      pageview(url);
    } catch {}
  }, [pathname, consentGranted]);

  return (GA_MEASUREMENT_ID && consentGranted) ? (
    <>
      {/* Google Analytics - základní skript */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics loaded successfully');
        }}
        onError={(e) => {
          // Některé prohlížeče/rozšíření (adblock) blokují GA; událost může být prázdný objekt
          try {
            const target = (e as any)?.currentTarget as HTMLScriptElement | undefined;
            console.error('Failed to load Google Analytics:', target?.src || e);
          } catch {
            console.error('Failed to load Google Analytics');
          }
        }}
      />

      {/* Google Analytics - inicializační kód */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Consent is granted at this point
          gtag('js', new Date());
          gtag('consent', 'update', { 'analytics_storage': 'granted' });
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure',
            send_page_view: true,
            // Performance tracking
            custom_map: {
              'custom_parameter_1': 'page_load_time',
              'custom_parameter_2': 'core_web_vitals'
            },
            // Enhanced measurement for better insights
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: false,
              file_downloads: true
            }
          });

          // Listen for consent changes (revoke)
          window.addEventListener('cookieConsentChanged', function(event) {
            if (!event.detail || !event.detail.analytics) {
              gtag('consent', 'update', { 'analytics_storage': 'denied' });
            }
          });
        `}
      </Script>
    </>
  ) : null;
}
