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
        onLoad={() => {
          console.log('Google Analytics loaded successfully');
        }}
        onError={(e) => {
          console.error('Failed to load Google Analytics:', e);
        }}
      />

      {/* Google Analytics - inicializační kód */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Initialize with consent management
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'granted',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });

          gtag('js', new Date());
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

          // Check cookie consent and update accordingly
          try {
            const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
            if (preferences && preferences['analytics'] === true) {
              // Grant analytics consent
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });

              // Track initial page view
              gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                send_to: '${GA_MEASUREMENT_ID}'
              });
            }
          } catch (e) {
            console.warn('Cookie consent check failed:', e);
          }

          // Listen for consent changes
          window.addEventListener('cookieConsentChanged', function(event) {
            if (event.detail && event.detail.analytics) {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            } else {
              gtag('consent', 'update', {
                'analytics_storage': 'denied'
              });
            }
          });
        `}
      </Script>
    </>
  );
}
