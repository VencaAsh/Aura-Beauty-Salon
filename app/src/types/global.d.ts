// Rozšíření globálního window objektu pro TypeScript
interface Window {
  dataLayer: any[];
  fbq: any;
  // Další globální proměnné, které používáte
}

// Rozšíření pro Google Analytics
declare function gtag(...args: any[]): void;
