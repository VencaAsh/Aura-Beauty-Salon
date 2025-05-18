'use client';

// Definice typů pro Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Pomocná funkce pro kontrolu, zda jsme v prohlížeči
const isBrowser = typeof window !== 'undefined';

// ID měření Google Analytics
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Nahraďte skutečným ID měření z Google Analytics 4

// Inicializace Google Analytics
export function initializeGA(): void {
  if (!isBrowser) return;

  // Vytvoření dataLayer, pokud neexistuje
  window.dataLayer = window.dataLayer || [];

  // Definice funkce gtag
  window.gtag = function(...args: any[]) {
    window.dataLayer.push(arguments);
  };

  // Nastavení základních parametrů
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    cookie_flags: 'SameSite=None;Secure',
  });
}

// Sledování zobrazení stránky
export function pageview(url: string): void {
  if (!isBrowser || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Sledování událostí
export function event({ action, category, label, value }: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}): void {
  if (!isBrowser || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Načtení GA skriptu - používáme Next/Script místo této funkce
export function loadGAScript(): void {
  if (!isBrowser) return;

  // Kontrola, zda skript již existuje
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;

  try {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializace GA po načtení skriptu
    script.onload = () => {
      initializeGA();
    };
  } catch (error) {
    console.error('Chyba při načítání GA skriptu:', error);
  }
}

// Odstranění GA skriptu
export function removeGAScript(): void {
  if (!isBrowser) return;

  try {
    // Odstranění skriptu
    const script = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
    if (script) {
      script.remove();
    }

    // Odstranění dataLayer a gtag
    if (window.dataLayer) {
      // @ts-ignore - Bezpečné odstranění
      window.dataLayer = undefined;
    }

    if (window.gtag) {
      // @ts-ignore - Bezpečné odstranění
      window.gtag = undefined;
    }

    // Odstranění cookies
    removeGACookies();
  } catch (error) {
    console.error('Chyba při odstraňování GA skriptu:', error);
  }
}

// Odstranění GA cookies
function removeGACookies(): void {
  if (!isBrowser) return;

  try {
    // Seznam cookies, které GA používá
    const gaCookies = document.cookie.split(';').filter(cookie =>
      cookie.trim().startsWith('_ga') ||
      cookie.trim().startsWith('_gid') ||
      cookie.trim().startsWith('_gat')
    );

    // Odstranění cookies
    gaCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}; SameSite=None; Secure`;
    });
  } catch (error) {
    console.error('Chyba při odstraňování GA cookies:', error);
  }
}
