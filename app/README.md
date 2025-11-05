# Aura Beauty Salon – Předání projektu a dokumentace

Tento repozitář obsahuje zdrojové kódy webu Aura Beauty Salon. Projekt je postaven na Next.js 15 s výstupem „static export“ a je připraven pro nasazení na Netlify.

Produkční web: https://aura-beauty-salon.netlify.app/

---

## Rychlý start

Požadavky:
- Node.js 18+ (doporučeno LTS)
- npm 9+ (součást Node.js)

Instalace a spuštění:

```bash
cd app
npm install
npm run dev
```

Build pro produkci a statický export:

```bash
npm run build
```

- Výstup se vygeneruje do složky `app/out`.
- Tento obsah je připraven k nahrání na statický hosting (Netlify).

---

## Nasazení na Netlify

Repo je připraveno pro Netlify s konfigurací v rootu: `netlify.toml`.

Základní kroky:
1. Na Netlify založte nový projekt „Import from Git“ a propojte tento GitHub repozitář.
2. Build settings:
   - Base directory: `app`
   - Build command: `npm run build`
   - Publish directory: `app/out`
3. Environment variables (viz níže) doplňte v UI Netlify v sekci Site settings → Build & deploy → Environment.
4. Po buildu proběhne publikace statického obsahu ze složky `out`.

Poznámky:
- Netlify Forms jsou nastaveny (viz sekce „Kontaktní formulář“). Pro detekci během buildu je v `app/public` soubor `netlify-form.html` se shodnou strukturou.
- K dispozici je offline fallback (`public/offline.html`) a service worker (`public/sw.js`).

---

## Proměnné prostředí (.env)

Šablona je v `app/.env.example`. Vytvořte soubor `app/.env.local` (pro development) a/nebo nastavte proměnné v Netlify:

- `NEXT_PUBLIC_BASE_URL` – Veřejná URL webu (např. `https://www.aurabeautysalon.cz`).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` – ID měření GA4 ve formátu `G-XXXXXXXXXX` (volitelné; pokud není vyplněno, Analytics se nenačte).

Důležité:
- ID a klíče nikde netvrdo-kódujte. Používejte proměnné prostředí.
- Obsah `.env` souborů nedávejte do verzovacího systému.

---

## Google Analytics 4 (souhlas a načítání)

- Integrace je komponentou `src/components/analytics/GoogleAnalytics.tsx` a načítá se v `src/app/layout.tsx`.
- GA4 se aktivuje pouze pokud:
  1) je definováno `NEXT_PUBLIC_GA_MEASUREMENT_ID` a
  2) uživatel udělil souhlas s analytickými cookies v cookie liště.
- Podrobný postup nastavení je v `app/docs/google-analytics-setup.md` (CZ).

Vypnutí GA: prostě nevyplňujte `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

---

## Cookies a centrum preferencí

- Banner a preference: `src/components/ui/EnhancedCookieConsentBanner.tsx` + `src/components/ui/CookiePreferenceCenter.tsx`.
- Funkce pro otevření centra preferencí: `window.openCookiePreferences?.()` (je dostupná po načtení banneru).
- Preference jsou ukládány do `localStorage` a změny vyvolávají CustomEvent `cookieConsentChanged`.

---

## Kontaktní formulář (Netlify Forms)

- Interaktivní komponenta: `src/components/ContactForm.tsx` (odesílání nativně přes atribut `action="/dekujeme"`).
- Statická šablona pro Netlify detekci při buildu: `app/public/netlify-form.html` – musí mít shodné názvy polí a `name="contact"`.
- Anti-spam: `data-netlify-honeypot="bot-field"` + skryté pole.
- Stránka s poděkováním: `app/public/dekujeme.html` (statická) a route `src/app/dekujeme/page.tsx` (pokud existuje jako SPA varianta).

Kde uvidím odeslané zprávy:
- Netlify → Site → Forms → contact.

Testování:
- Odešlete formulář na `/kontakt`, v Netlify se objeví záznam. Dočasně můžete vypnout JS a otestovat čisté HTML odeslání.

---

## Struktura projektu (zkráceně)

- `app/src/app` – App Router (stránky, layouty)
- `app/src/components` – Znovupoužitelné komponenty (UI, layout, analytics, formuláře…)
- `app/src/assets` – Obrázky a statická aktiva
- `app/src/utils` – Utility (např. `analytics.ts`)
- `app/public` – Statické soubory publikované „as-is“ (favicony, `robots.txt`, `sw.js`, Netlify form šablona…)
- `app/docs` – Dokumentace (např. GA4 setup)

---

## Úpravy obsahu

- Obrázky: přidejte do `app/src/assets/images`. Preferujte WebP (80–90 % kvalita).
- Blog: články jsou definované staticky v `src/app/blog/page.tsx` a `src/app/blog/[slug]/page.tsx` (včetně `generateStaticParams()` pro export). Pro přidání článku stačí doplnit položku do pole `news` na obou místech.
- Ceník/služby: stránky `src/app/cenik`, `src/app/sluzby`.
- Kontakty a informace o pobočce: viz `src/constants/index.ts` (adresa, telefon, otevírací doba, odkazy).

---

## Rezervace (Noona)

- Odkaz/iframe je na stránce `/rezervace` a směřuje na: `https://noona.app/cs/kosmetikaarasysalonstyle`.
- Umístění a integraci lze upravit ve stránce a odpovídajících komponentách.

---

## Kvalita kódu a build

- ESLint + TypeScript jsou nastavené.
- `npm run build` provádí statický export. Po úspěchu otestujte náhodně několik stránek z `app/out` (např. `/index.html`, `/blog/index.html`).
- Web Vitals logování je aktivní pouze v developmentu.

---

## Bezpečnost a předání

- V repozitáři nejsou uloženy žádné tajné klíče.
- Všechny identifikátory (GA4) a URL jsou spravovány přes `.env` a Netlify Environment Variables.
- Před předáním změňte hesla a přístupy u externích služeb (pokud nějaké existují) na klienta.

---

## Řešení problémů

- „GA se nenačítá“ – zkontrolujte: 1) vyplněné `NEXT_PUBLIC_GA_MEASUREMENT_ID`, 2) udělení souhlasu v cookie liště.
- „Formulář neodesílá“ – zajistěte, že `public/netlify-form.html` existuje a pole mají stejná `name`. V Netlify musí být Forms povoleny.
- „Výstup chybí“ – ověřte, že build běží z adresáře `app`, a publish dir je `app/out`.

---

## Licence

Copyright © Aura Beauty Salon.
