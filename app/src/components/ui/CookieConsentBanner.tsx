'use client'; // Tato komponenta potřebuje být klientská

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom" // Umístění lišty
      buttonText="Rozumím" // Text tlačítka pro souhlas
      cookieName="auraBeautyCookieConsent" // Název cookie pro uložení souhlasu
      style={{
        background: "rgba(248, 244, 233, 0.95)", // Světlé béžové pozadí s průhledností
        color: "#121212", // Tmavý text
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "14px",
        padding: "16px 24px",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.05)",
        borderTop: "1px solid rgba(230, 204, 178, 0.3)",
        backdropFilter: "blur(10px)",
        zIndex: 9999
      }}
      buttonStyle={{
        color: "#121212",
        background: "#E6CCB2", // Béžová barva tlačítka
        fontSize: "13px",
        fontWeight: 300,
        letterSpacing: "0.05em",
        padding: "10px 20px",
        border: "none",
        borderRadius: "2px",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
      }}
      buttonWrapperClasses="flex items-center justify-center mt-3 md:mt-0"
      expires={150} // Platnost cookie v dnech
      enableDeclineButton // Možnost přidat tlačítko pro odmítnutí
      declineButtonText="Odmítnout"
      declineButtonStyle={{
        color: "#121212",
        background: "transparent",
        fontSize: "13px",
        fontWeight: 300,
        letterSpacing: "0.05em",
        padding: "10px 20px",
        border: "1px solid #E6CCB2",
        borderRadius: "2px",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
        marginRight: "10px"
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
        <div className="mb-3 md:mb-0">
          <span className="font-light">Tato webová stránka používá soubory cookies k zajištění co nejlepšího zážitku z našich webových stránek.</span>{" "}
          <Link href="/zasady-ochrany-osobnich-udaju" className="text-[#C9B8A8] hover:text-[#D8C3B0] transition-colors duration-300 ml-1 font-medium">
            Více informací
          </Link>
          {/* Poznámka: Odkaz '/zasady-ochrany-osobnich-udaju' zatím neexistuje, bude potřeba vytvořit stránku. */}
        </div>
      </div>
    </CookieConsent>
  );
}
