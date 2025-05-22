import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

// Předpokládaná základní URL webu - upravte podle potřeby pro produkci
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  // Základní statické stránky
  const staticRoutes = [
    '', // Domovská stránka
    '/sluzby',
    '/galerie',
    '/salon',
    '/cenik',
    '/blog',
    '/kontakt',
    '/zasady-ochrany-osobnich-udaju',
    '/obchodni-podminky',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(), // Jednoduché nastavení aktuálního data
    changeFrequency: 'monthly' as const, // Jak často se očekává změna obsahu
    priority: route === '' ? 1.0 : 0.8, // Priorita URL (0.0 - 1.0)
  }));

  // Zde by se v budoucnu mohly přidat dynamické URL (např. blogové články, detaily služeb)
  // const dynamicRoutes = ...

  return [
    ...staticRoutes,
    // ...dynamicRoutes,
  ];
}
