'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from '@/utils/analytics';
import { hasConsent } from '@/utils/cookieConsent';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (hasConsent('analytics')) {
      // Sledování změny stránky
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Pokud uživatel nemá souhlas s analytickými cookies, nevkládáme nic
  if (!hasConsent('analytics')) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - základní skript */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      
      {/* Google Analytics - inicializační kód */}
      <script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </script>
    </>
  );
}
