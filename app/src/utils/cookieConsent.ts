// Kontrola, zda uživatel souhlasil s danou kategorií cookies
export function hasConsent(category: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
    return preferences && preferences[category] === true;
  } catch (e) {
    return false;
  }
}

// Dynamické načtení skriptu, pokud je souhlas
export function loadScriptIfConsented(category: string, src: string, attributes: Record<string, string> = {}): boolean {
  if (typeof window === 'undefined') return false;
  
  if (hasConsent(category)) {
    const script = document.createElement('script');
    script.src = src;
    
    // Přidání dalších atributů
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    
    document.head.appendChild(script);
    return true;
  }
  return false;
}

// Příklad použití pro Google Analytics
export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  if (hasConsent('analytics')) {
    // Google Analytics kód
    // Zde byste přidali skutečný kód pro Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Nahraďte vaším ID
    
    // Načtení GA skriptu
    loadScriptIfConsented(
      'analytics',
      'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' // Nahraďte vaším ID
    );
  }
}

// Příklad použití pro Facebook Pixel
export function initializeMarketing(): void {
  if (typeof window === 'undefined') return;
  
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
}

// Inicializace všech skriptů podle preferencí
export function initializeAllScripts(): void {
  initializeAnalytics();
  initializeMarketing();
  // Další inicializace...
}
