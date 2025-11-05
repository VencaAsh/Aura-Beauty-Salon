import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google"; // Globální display font
import { Header, Footer } from "@/components/layout"; // Import layout komponent

import EnhancedCookieConsentBanner from "@/components/ui/EnhancedCookieConsentBanner"; // Import vylepšeného cookie banneru
import { SalonStructuredData, LocalBusinessStructuredData } from "@/components/seo/StructuredData"; // Import strukturovaných dat pro SEO
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"; // Import Google Analytics komponenty
import ServiceWorkerRegistration from "@/components/performance/ServiceWorkerRegistration"; // Service Worker
import WebVitals from "@/components/performance/WebVitals"; // Enhanced Web Vitals monitoring
import ResourcePreloader from "@/components/performance/ResourcePreloader"; // Resource preloading
import { SITE_METADATA } from "@/constants";
import "@/styles/globals.css";

// Nastavení fontů (Bebas Neue pro display, Montserrat pro body/UI)
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-bebas",
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300','400','500','600','700'],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${bebas.variable} ${montserrat.variable}`}>
      <head>
        {/* Performance optimizations */}
        <ResourcePreloader />

        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#F5F3F0" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Použití komponenty Header */}
          <main className="flex-grow"> {/* Hlavní obsah */}
            {children}
          </main>
          <Footer /> {/* Použití komponenty Footer */}

          <EnhancedCookieConsentBanner hideFooterButton={true} /> {/* Vylepšená cookie lišta s centrem preferencí */}

          {/* Strukturovaná data pro SEO */}
          <SalonStructuredData />
          <LocalBusinessStructuredData />

          {/* Google Analytics */}
          <GoogleAnalytics />

          {/* Performance monitoring and optimization */}
          <ServiceWorkerRegistration />
          <WebVitals />
        </div>
      </body>
    </html>
  );
}
