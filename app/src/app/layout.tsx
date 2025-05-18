import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google"; // Elegantní kombinace fontů
import { Header, Footer } from "@/components/layout"; // Import layout komponent
// import { CookieConsentBanner } from "@/components/ui"; // Původní cookie banner - nyní nepoužíváme
import EnhancedCookieConsentBanner from "@/components/ui/EnhancedCookieConsentBanner"; // Import vylepšeného cookie banneru
import { SalonStructuredData, LocalBusinessStructuredData } from "@/components/seo/StructuredData"; // Import strukturovaných dat pro SEO
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"; // Import Google Analytics komponenty
import { SITE_METADATA } from "@/constants";
import "@/styles/globals.css";

// Nastavení fontů
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
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
    <html lang="cs" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Použití komponenty Header */}
          <main className="flex-grow"> {/* Hlavní obsah */}
            {children}
          </main>
          <Footer /> {/* Použití komponenty Footer */}
          {/* <CookieConsentBanner /> */} {/* Původní cookie lišta - zaměněno za vylepšenou verzi */}
          <EnhancedCookieConsentBanner hideFooterButton={true} /> {/* Vylepšená cookie lišta s centrem preferencí */}

          {/* Strukturovaná data pro SEO */}
          <SalonStructuredData />
          <LocalBusinessStructuredData />

          {/* Google Analytics */}
          <GoogleAnalytics />
        </div>
      </body>
    </html>
  );
}
