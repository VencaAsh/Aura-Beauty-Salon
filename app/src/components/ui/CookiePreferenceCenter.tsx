'use client';

import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

// Definice typů cookies
const COOKIE_TYPES = {
  necessary: {
    id: 'necessary',
    name: 'Nezbytné cookies',
    description: 'Tyto cookies jsou nezbytné pro fungování webu a nemohou být vypnuty.',
    required: true
  },
  analytics: {
    id: 'analytics',
    name: 'Analytické cookies',
    description: 'Pomáhají nám pochopit, jak návštěvníci používají náš web, abychom mohli zlepšit uživatelský zážitek.',
    required: false
  },
  marketing: {
    id: 'marketing',
    name: 'Marketingové cookies',
    description: 'Používají se k zobrazování relevantních reklam a marketingových sdělení.',
    required: false
  },
  preferences: {
    id: 'preferences',
    name: 'Preferenční cookies',
    description: 'Umožňují webu zapamatovat si vaše preference a nastavení.',
    required: false
  }
};

interface CookiePreferenceCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiePreferenceCenter({ isOpen, onClose }: CookiePreferenceCenterProps) {
  // Výchozí stav - všechny nepovinné cookies vypnuté
  const [preferences, setPreferences] = useState({
    necessary: true, // Vždy povoleno
    analytics: false,
    marketing: false,
    preferences: false
  });

  // Načtení uložených preferencí při inicializaci
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        try {
          setPreferences(JSON.parse(savedPreferences));
        } catch (e) {
          console.error('Chyba při načítání preferencí cookies:', e);
        }
      }
    }
  }, []);

  // Změna preference
  const handleToggle = (cookieType: string) => {
    if (COOKIE_TYPES[cookieType as keyof typeof COOKIE_TYPES].required) return; // Nezbytné cookies nelze vypnout

    setPreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType as keyof typeof prev]
    }));
  };

  // Uložení preferencí
  const savePreferences = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

      // Zde byste implementovali logiku pro aktivaci/deaktivaci skriptů
      applyPreferences(preferences);

      onClose();
    }
  };

  // Přijmout vše
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };

    setPreferences(allAccepted);

    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));

      // Aktivace všech skriptů
      applyPreferences(allAccepted);

      onClose();
    }
  };

  // Odmítnout vše kromě nezbytných
  const rejectAll = () => {
    const allRejected = {
      necessary: true, // Vždy povoleno
      analytics: false,
      marketing: false,
      preferences: false
    };

    setPreferences(allRejected);

    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(allRejected));

      // Deaktivace všech nepovinných skriptů
      applyPreferences(allRejected);

      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-[#E6CCB2]/20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="text-[#C9B8A8] w-6 h-6 mr-3" />
              <h2 className="text-xl font-serif font-light text-[#121212]">Nastavení cookies</h2>
            </div>
            <button onClick={onClose} className="text-[#121212]/60 hover:text-[#121212]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-[#121212]/80 font-light mb-6">
            Na našem webu používáme cookies a podobné technologie. Některé z nich jsou nezbytné, zatímco jiné nám pomáhají zlepšovat uživatelský zážitek. Zde můžete upravit své preference.
          </p>

          <div className="space-y-4">
            {Object.values(COOKIE_TYPES).map((cookieType) => (
              <div key={cookieType.id} className="p-4 border border-[#E6CCB2]/20 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-[#121212]">{cookieType.name}</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={preferences[cookieType.id as keyof typeof preferences]}
                      onChange={() => handleToggle(cookieType.id)}
                      disabled={cookieType.required}
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors duration-300 ${
                      preferences[cookieType.id as keyof typeof preferences] ? 'bg-[#E6CCB2]' : 'bg-[#E6CCB2]/30'
                    }`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
                        preferences[cookieType.id as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'
                      } mt-1`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-sm text-[#121212]/70">{cookieType.description}</p>
                {cookieType.required && (
                  <p className="text-xs text-[#C9B8A8] mt-1">Tyto cookies nelze vypnout</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-[#E6CCB2]/20 flex justify-between">
          <button
            onClick={rejectAll}
            className="px-4 py-2 text-sm text-[#121212] border border-[#E6CCB2] rounded-sm hover:bg-[#E6CCB2]/10 transition-colors"
          >
            Odmítnout vše
          </button>
          <div className="space-x-3">
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm text-[#121212] border border-[#E6CCB2] rounded-sm hover:bg-[#E6CCB2]/10 transition-colors"
            >
              Přijmout vše
            </button>
            <button
              onClick={savePreferences}
              className="px-4 py-2 text-sm text-[#121212] bg-[#E6CCB2] rounded-sm hover:bg-[#D8C3B0] transition-colors"
            >
              Uložit preference
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Funkce pro aplikaci preferencí
function applyPreferences(preferences: Record<string, boolean>) {
  // Zde implementujete logiku pro aktivaci/deaktivaci skriptů

  // Příklad: Google Analytics
  if (preferences.analytics) {
    enableGoogleAnalytics();
  } else {
    disableGoogleAnalytics();
  }

  // Příklad: Facebook Pixel
  if (preferences.marketing) {
    enableFacebookPixel();
  } else {
    disableFacebookPixel();
  }

  // Další skripty...
}

// Pomocné funkce pro aktivaci/deaktivaci skriptů
function enableGoogleAnalytics() {
  // Kód pro aktivaci Google Analytics
  console.log('Google Analytics aktivován');
  // Zde byste přidali skutečnou implementaci
}

function disableGoogleAnalytics() {
  // Kód pro deaktivaci Google Analytics
  console.log('Google Analytics deaktivován');
  // Zde byste přidali skutečnou implementaci
}

function enableFacebookPixel() {
  // Kód pro aktivaci Facebook Pixel
  console.log('Facebook Pixel aktivován');
  // Zde byste přidali skutečnou implementaci
}

function disableFacebookPixel() {
  // Kód pro deaktivaci Facebook Pixel
  console.log('Facebook Pixel deaktivován');
  // Zde byste přidali skutečnou implementaci
}
