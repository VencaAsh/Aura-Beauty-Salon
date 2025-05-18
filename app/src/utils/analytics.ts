'use client';

// Definice typů pro Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// ID měření Google Analytics
export const GA_MEASUREMENT_ID = 'G-KBDHJVFH3G';

// Inicializace Google Analytics
export function initializeGA(): void {
  if (typeof window === 'undefined') return;

  // Vytvoření dataLayer, pokud neexistuje
  window.dataLayer = window.dataLayer || [];

  // Definice funkce gtag
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }

  // Nastavení základních parametrů
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    cookie_flags: 'SameSite=None;Secure',
  });
}

// Sledování zobrazení stránky
export function pageview(url: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;

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
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Načtení GA skriptu
export function loadGAScript(): void {
  if (typeof window === 'undefined' || document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Inicializace GA po načtení skriptu
  script.onload = () => {
    initializeGA();
  };
}

// Odstranění GA skriptu
export function removeGAScript(): void {
  if (typeof window === 'undefined') return;

  // Odstranění skriptu
  const script = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (script) {
    script.remove();
  }

  // Odstranění dataLayer
  delete window.dataLayer;
  delete window.gtag;

  // Odstranění cookies
  removeGACookies();
}

// Odstranění GA cookies
function removeGACookies(): void {
  if (typeof window === 'undefined') return;

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
}
