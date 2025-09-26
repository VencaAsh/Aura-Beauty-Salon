'use client';

// Inicializace Google Analytics
import { loadGAScript, removeGAScript } from './analytics';

// Pomocná funkce pro kontrolu, zda jsme v prohlížeči
const isBrowser = typeof window !== 'undefined';

// Kontrola, zda uživatel souhlasil s danou kategorií cookies
export function hasConsent(category: string): boolean {
  if (!isBrowser) return false;

  try {
    const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
    return preferences && preferences[category] === true;
  } catch (e) {
    return false;
  }
}

// Dynamické načtení skriptu, pokud je souhlas
export function loadScriptIfConsented(category: string, src: string, attributes: Record<string, string> = {}): boolean {
  if (!isBrowser) return false;

  try {
    if (hasConsent(category)) {
      // Kontrola, zda skript již existuje
      if (document.querySelector(`script[src="${src}"]`)) return true;

      const script = document.createElement('script');
      script.src = src;

      // Přidání dalších atributů
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });

      document.head.appendChild(script);
      return true;
    }
  } catch (error) {
    console.error('Chyba při načítání skriptu:', error);
  }
  return false;
}

export function initializeAnalytics(): void {
  if (!isBrowser) return;

  try {
    const granted = hasConsent('analytics');
    // Oznámit změnu souhlasu ostatním částem aplikace (např. GA komponentě)
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: { analytics: granted } }));
  } catch (error) {
    console.error('Chyba při inicializaci Google Analytics:', error);
  }
}

// Příklad použití pro Facebook Pixel
export function initializeMarketing(): void {
  if (!isBrowser) return;

  try {
    if (hasConsent('marketing')) {
      // Facebook Pixel kód
      // Zde byste přidali skutečný kód pro Facebook Pixel
      console.log('Facebook Pixel inicializován');

      // Načtení FB Pixel skriptu
      loadScriptIfConsented(
        'marketing',
        'https://connect.facebook.net/en_US/fbevents.js'
      );
    }
  } catch (error) {
    console.error('Chyba při inicializaci Facebook Pixel:', error);
  }
}

// Inicializace všech skriptů podle preferencí
export function initializeAllScripts(): void {
  try {
    if (isBrowser) {
      initializeAnalytics();
      initializeMarketing();
      // Další inicializace...
    }
  } catch (error) {
    console.error('Chyba při inicializaci skriptů:', error);
  }
}
