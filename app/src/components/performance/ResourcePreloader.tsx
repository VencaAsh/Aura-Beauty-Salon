'use client';

import Head from 'next/head';

interface ResourcePreloaderProps {
  criticalImages?: string[];
  criticalFonts?: string[];
  preconnectDomains?: string[];
  dnsPrefetchDomains?: string[];
}

export default function ResourcePreloader({
  criticalImages = [
    '/images/hero/hero-main.webp',
    '/images/hero/image.webp',
  ],
  criticalFonts = [],
  preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
  ],
  dnsPrefetchDomains = [
    'https://noona.app',
    'https://www.facebook.com',
    'https://www.instagram.com',
  ],
}: ResourcePreloaderProps) {
  return (
    <Head>
      {/* Preconnect to external domains */}
      {preconnectDomains.map((domain) => (
        <link
          key={domain}
          rel="preconnect"
          href={domain}
          crossOrigin="anonymous"
        />
      ))}

      {/* DNS prefetch for external domains */}
      {dnsPrefetchDomains.map((domain) => (
        <link
          key={domain}
          rel="dns-prefetch"
          href={domain}
        />
      ))}

      {/* Preload critical images */}
      {criticalImages.map((image) => (
        <link
          key={image}
          rel="preload"
          href={image}
          as="image"
          type="image/webp"
        />
      ))}

      {/* Preload critical fonts */}
      {criticalFonts.map((font) => (
        <link
          key={font}
          rel="preload"
          href={font}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      ))}

      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/_next/static/css/app.css"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />

      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/sluzby" />
      <link rel="prefetch" href="/galerie" />
      <link rel="prefetch" href="/kontakt" />

      {/* Optimize third-party scripts */}
      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
        crossOrigin="anonymous"
      />
      
      {/* Preload Google Analytics */}
      <link
        rel="preload"
        href="https://www.googletagmanager.com/gtag/js?id=G-KBDHJVFH3G"
        as="script"
      />

      {/* Critical CSS inlining hint */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            .hero-section {
              min-height: 100vh;
              background-color: #F5F3F0;
            }
            
            .header {
              background-color: #F5F3F0;
              position: sticky;
              top: 0;
              z-index: 50;
            }
            
            /* Font display optimization */
            @font-face {
              font-family: 'Playfair Display';
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Montserrat';
              font-display: swap;
            }
            
            /* Prevent layout shift */
            img {
              max-width: 100%;
              height: auto;
            }
            
            /* Loading states */
            .loading-skeleton {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `,
        }}
      />
    </Head>
  );
}
