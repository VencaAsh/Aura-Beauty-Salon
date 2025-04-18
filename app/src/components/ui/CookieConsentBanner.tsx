'use client'; // Tato komponenta potřebuje být klientská

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom" // Umístění lišty
      buttonText="Rozumím" // Text tlačítka pro souhlas
      cookieName="auraBeautyCookieConsent" // Název cookie pro uložení souhlasu
      style={{ background: "#fce7f3", color: "#4b5563" }} // Základní styling (růžové pozadí, šedý text)
      buttonStyle={{ color: "#ffffff", background: "#db2777", fontSize: "13px", borderRadius: "5px", padding: "8px 15px" }} // Styling tlačítka
      expires={150} // Platnost cookie v dnech
      // enableDeclineButton // Možnost přidat tlačítko pro odmítnutí
      // declineButtonText="Odmítnout"
    >
      Tato webová stránka používá soubory cookies k zajištění co nejlepšího zážitku z našich webových stránek.{" "}
      <Link href="/zasady-ochrany-osobnich-udaju" className="text-pink-600 hover:underline">
        Více informací
      </Link>
      {/* Poznámka: Odkaz '/zasady-ochrany-osobnich-udaju' zatím neexistuje, bude potřeba vytvořit stránku. */}
    </CookieConsent>
  );
}
