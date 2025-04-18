'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CookiePreferenceCenter from './CookiePreferenceCenter';
import { initializeAllScripts } from '@/utils/cookieConsent';

// Globální funkce pro otevření centra preferencí
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.openCookiePreferences = () => {
    // Tato funkce bude přepsána při inicializaci komponenty
  };
}

export default function EnhancedCookieConsentBanner({ hideFooterButton = false }: { hideFooterButton?: boolean } = {}) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Kontrola, zda uživatel již nastavil preference
    if (typeof window !== 'undefined') {
      // Nastavení globální funkce pro otevření centra preferencí
      // @ts-ignore
      window.openCookiePreferences = () => {
        setShowPreferences(true);
      };

      const preferences = localStorage.getItem('cookiePreferences');
      if (!preferences) {
        // Pokud ne, zobrazíme banner po krátké prodlevě
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Pokud ano, inicializujeme skripty podle preferencí
        initializeAllScripts();
      }
    }
  }, []);

  // Přijmout všechny cookies
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
      initializeAllScripts();
      setShowBanner(false);
    }
  };

  // Odmítnout všechny nepovinné cookies
  const rejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(allRejected));
      setShowBanner(false);
    }
  };

  // Otevřít centrum preferencí
  const openPreferences = () => {
    setShowPreferences(true);
    setShowBanner(false);
  };

  // Po zavření centra preferencí
  const onClosePreferences = () => {
    setShowPreferences(false);
    initializeAllScripts();
  };

  return (
    <>
      {/* Banner s cookies */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#F8F4E9] border-t border-[#E6CCB2]/30 p-4 z-50 shadow-lg" style={{ backdropFilter: 'none', backgroundColor: '#F8F4E9' }}>
          <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <p className="text-[#121212]/80 font-light text-sm">
                Tato webová stránka používá cookies pro zlepšení vašeho zážitku. Můžete je přijmout všechny, odmítnout nebo upravit své preference.
                {" "}
                <Link href="/zasady-ochrany-osobnich-udaju" className="text-[#C9B8A8] hover:text-[#D8C3B0] transition-colors duration-300 font-medium">
                  Více informací
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-xs text-[#121212] border border-[#E6CCB2] rounded-sm hover:bg-[#E6CCB2]/10 transition-colors"
              >
                Odmítnout
              </button>
              <button
                onClick={openPreferences}
                className="px-4 py-2 text-xs text-[#121212] border border-[#E6CCB2] rounded-sm hover:bg-[#E6CCB2]/10 transition-colors"
              >
                Upravit preference
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs text-[#121212] bg-[#E6CCB2] rounded-sm hover:bg-[#D8C3B0] transition-colors"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Centrum preferencí */}
      <CookiePreferenceCenter
        isOpen={showPreferences}
        onClose={onClosePreferences}
      />

      {/* Tlačítko pro otevření centra preferencí (volitelně viditelné v patičce) */}
      {!hideFooterButton && (
        <button
          onClick={() => setShowPreferences(true)}
          className="text-xs text-[#C9B8A8] hover:text-[#D8C3B0] transition-colors border border-[#E6CCB2]/30 px-3 py-1 rounded-sm hover:bg-[#F8F4E9] mt-2"
        >
          Nastavení cookies
        </button>
      )}
    </>
  );
}
