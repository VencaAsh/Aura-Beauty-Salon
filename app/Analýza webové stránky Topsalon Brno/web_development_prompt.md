# Detailní zadání pro vývoj nového webu TOP SALON BRNO

## 1. Základní informace a cíle projektu

### Informace o projektu
- **Název webu**: TOP SALON BRNO
- **URL**: www.topsalonbrno.cz
- **Typ webu**: Prezentační web kosmetického salonu
- **Cílová skupina**: Ženy a muži ve věku 25-55 let, se zájmem o kosmetické služby, manikúru, pedikúru a kadeřnictví
- **Lokace**: Brno (2 pobočky) a Praha (1 pobočka)

### Hlavní cíle nového webu
1. Zachovat elegantní a prémiový vizuální styl stávajícího webu
2. Implementovat všechna navrhovaná vylepšení z provedené analýzy
3. Vytvořit plně responzivní web s optimálním zobrazením na všech zařízeních
4. Zlepšit uživatelskou přívětivost a přístupnost
5. Optimalizovat web pro vyhledávače (SEO)
6. Implementovat online rezervační systém
7. Zajistit snadnou správu obsahu

## 2. Technická specifikace

### Doporučená technologie
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Komponenty**: shadcn/ui
- **Ikony**: Lucide icons
- **Databáze**: Cloudflare D1 (pro rezervační systém)
- **Hosting**: Cloudflare Pages

### Technické požadavky
- Plně responzivní design (mobile-first přístup)
- Optimalizace pro rychlé načítání (Core Web Vitals)
- Kompatibilita s moderními prohlížeči (Chrome, Firefox, Safari, Edge)
- Zabezpečení pomocí HTTPS
- Implementace strukturovaných dat (Schema.org)
- Optimalizace obrázků a implementace lazy loading
- Implementace správných HTML5 sémantických elementů
- Přístupnost dle WCAG 2.1 standardů (úroveň AA)

## 3. Struktura webu

### Hlavní sekce webu
1. **Domovská stránka**
   - Hero sekce s výraznou fotografií a sloganem "You are beautiful..."
   - Sekce poboček (Brno - Řečkovice, Brno - Husovice, Praha-Nové Město)
   - Sekce služeb s odkazy na detailní stránky
   - Sekce novinek a aktuálních nabídek
   - Sekce s výzvou k akci (CTA) pro rezervaci
   - Sekce s aktualitami (nejnovější 3-4 příspěvky)

2. **Služby** (s podsekci pro každou službu)
   - Kosmetika
   - Manikúra
   - Pedikúra
   - Přístrojové ošetření
   - Laser Delighter & Epilace Lycon
   - Řasy a obočí
   - Masáže & Slim Body
   - Kadeřnictví

3. **Novinky**
   - Seznam všech novinek a speciálních nabídek
   - Detailní stránka pro každou novinku

4. **Aktuality**
   - Chronologický seznam aktualit
   - Detailní stránka pro každou aktualitu

5. **Náš tým**
   - Představení týmu s fotografiemi a krátkými bio
   - Filtrování podle poboček a specializací

6. **Ceník**
   - Přehledný ceník všech služeb
   - Filtrování podle kategorií služeb
   - Možnost stažení ceníku v PDF

7. **Kontakt**
   - Kontaktní informace pro všechny pobočky
   - Mapa s lokacemi poboček
   - Kontaktní formulář
   - Odkazy na sociální sítě

8. **Rezervace**
   - Online rezervační systém
   - Výběr pobočky, služby, termínu a pracovníka
   - Potvrzení rezervace e-mailem/SMS

### Navigace
- Fixní hlavní menu v horní části stránky
- Hamburger menu pro mobilní zařízení
- Drobečková navigace (breadcrumbs) na všech podstránkách
- Patička s odkazy na hlavní sekce, kontakty a sociální sítě

## 4. Vizuální design

### Barevná paleta
- **Primární barvy**:
  - Světle zelená (#e6f0e6) - hlavička, pozadí loga
  - Tmavě šedá/černá (#333333) - text, některé prvky
  - Bílá (#ffffff) - pozadí většiny sekcí
- **Sekundární barvy**:
  - Růžová (#e75480) - zvýraznění, tlačítka
  - Modrá (#4169e1) - odkazy, tlačítka
  - Zelená (#228b22) - některé sekce služeb
- **Akcentové barvy**:
  - Béžová/krémová (#f5f5dc) - pozadí některých sekcí
  - Zlatá/okrová (#d4af37) - některé nadpisy a detaily

### Typografie
- **Nadpisy**: Serif font (Playfair Display)
  - H1: 48px/3rem
  - H2: 36px/2.25rem
  - H3: 24px/1.5rem
- **Běžný text**: Sans-serif font (Open Sans)
  - Základní velikost: 16px/1rem
  - Menší text: 14px/0.875rem
  - Větší text: 18px/1.125rem
- **Řezy písma**:
  - Nadpisy: normal, bold
  - Text: light, regular, semibold

### Obrazové prvky
- Profesionální fotografie vysoké kvality
- Konzistentní barevné ladění (neutrální, tlumené tóny)
- Fotografie modelek, detaily rukou, nohou a obličejů
- Fotografie interiéru salonu
- Ikony pro služby a funkční prvky

### Komponenty UI
- **Tlačítka**:
  - Primární: plná barva s bílým textem
  - Sekundární: outline s barevným textem
  - Hover efekty pro všechna tlačítka
- **Karty**:
  - Pro služby, novinky, členy týmu
  - Jemné stíny a zaoblené rohy
- **Formulářové prvky**:
  - Konzistentní styl pro všechny inputy
  - Jasná validace a zpětná vazba
- **Galerie**:
  - Lightbox pro zvětšení fotografií
  - Možnost procházení mezi fotografiemi

## 5. Funkční specifikace

### Online rezervační systém
- Výběr pobočky
- Výběr kategorie služby a konkrétní služby
- Výběr preferovaného pracovníka (nebo možnost "kdokoliv")
- Kalendář s dostupnými termíny
- Formulář pro zadání kontaktních údajů
- Potvrzení rezervace e-mailem/SMS
- Možnost zrušení/změny rezervace

### Kontaktní formulář
- Pole: jméno, e-mail, telefon, předmět, zpráva
- Výběr pobočky, které se dotaz týká
- Validace polí
- Ochrana proti spamu (např. honeypot)
- Potvrzení odeslání

### Vyhledávání
- Vyhledávací pole v hlavičce
- Výsledky rozdělené podle kategorií (služby, aktuality, novinky)
- Našeptávač pro rychlejší vyhledávání

### Filtrování a řazení
- Filtrování služeb podle kategorií
- Filtrování týmu podle poboček a specializací
- Řazení aktualit a novinek podle data

### Sdílení na sociálních sítích
- Tlačítka pro sdílení obsahu na sociálních sítích
- Meta tagy pro správné zobrazení při sdílení

### Newsletter
- Přihlášení k odběru novinek
- Integrace s e-mailovým marketingovým nástrojem

### Recenze a hodnocení
- Zobrazení recenzí zákazníků
- Možnost přidání nové recenze (s moderací)
- Hodnocení služeb hvězdičkami

## 6. Obsahová strategie

### Typy obsahu
- **Služby**: detailní popis, fotografie, cena, trvání
- **Novinky**: speciální nabídky, nové produkty/služby
- **Aktuality**: informace o dění v salonu, personální změny
- **Členové týmu**: fotografie, bio, specializace, pobočka
- **Recenze**: jméno, hodnocení, text recenze, datum

### SEO optimalizace
- Implementace meta tagů (title, description) pro všechny stránky
- Správná hierarchie nadpisů (H1, H2, H3)
- Optimalizace URL struktury
- Implementace alt atributů pro všechny obrázky
- Implementace strukturovaných dat (Schema.org)
- Vytvoření XML sitemap a robots.txt

### Copywriting
- Profesionální, elegantní tón komunikace
- Zaměření na benefity služeb
- Používání klíčových slov relevantních pro kosmetické služby
- Výzvy k akci (CTA) na strategických místech

## 7. Přístupnost a UX vylepšení

### Přístupnost
- Implementace ARIA atributů
- Dostatečný barevný kontrast
- Skiplinky pro přeskočení navigace
- Klávesová navigace s viditelným focus stavem
- Alt atributy pro všechny obrázky
- Správné označení formulářových polí

### UX vylepšení
- Jasná vizuální hierarchie
- Konzistentní interakce a zpětná vazba
- Viditelné hover stavy pro interaktivní prvky
- Animace a přechody pro lepší uživatelský zážitek
- Breadcrumbs pro lepší orientaci
- Jasné indikace aktivní stránky v navigaci

## 8. Mobilní optimalizace

### Responzivní design
- Mobile-first přístup
- Breakpointy:
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
  - Large Desktop: > 1200px

### Mobilní specifika
- Hamburger menu pro mobilní zařízení
- Přizpůsobení velikosti tlačítek pro dotykové ovládání
- Optimalizace formulářů pro mobilní zařízení
- Zjednodušení některých komplexních prvků pro mobilní zobrazení

## 9. Analytika a měření

### Implementace analytických nástrojů
- Google Analytics 4
- Google Tag Manager
- Google Search Console

### Sledované metriky
- Návštěvnost stránek
- Konverzní cesty
- Míra okamžitého opuštění
- Průměrná doba na stránce
- Počet rezervací
- Počet odeslaných kontaktních formulářů

## 10. Správa obsahu

### Administrační rozhraní
- Přihlášení pro administrátory
- Správa služeb, novinek, aktualit
- Správa členů týmu
- Správa rezervací
- Správa recenzí (schvalování)

### Uživatelské role
- Superadmin (plný přístup)
- Editor (správa obsahu)
- Recepční (správa rezervací)

## 11. Testování

### Typy testování
- Funkční testování
- Responzivní testování na různých zařízeních
- Testování přístupnosti
- Testování výkonu (Core Web Vitals)
- Uživatelské testování
- Cross-browser testování

### Testovací scénáře
- Rezervace termínu
- Vyhledávání služby
- Odeslání kontaktního formuláře
- Procházení služeb a filtrování
- Navigace mezi stránkami

## 12. Implementační plán

### Fáze vývoje
1. **Příprava projektu** (1 týden)
   - Nastavení vývojového prostředí
   - Vytvoření základní struktury projektu
   - Definice komponent a stylů

2. **Vývoj základní struktury** (2 týdny)
   - Implementace hlavních layoutů
   - Vytvoření základních komponent
   - Nastavení routingu

3. **Implementace designu** (3 týdny)
   - Vytvoření všech UI komponent
   - Implementace responzivního designu
   - Stylování všech stránek

4. **Vývoj funkcionality** (4 týdny)
   - Implementace rezervačního systému
   - Implementace kontaktního formuláře
   - Implementace vyhledávání a filtrování
   - Implementace administračního rozhraní

5. **Testování a optimalizace** (2 týdny)
   - Funkční testování
   - Testování přístupnosti
   - Optimalizace výkonu
   - Oprava chyb

6. **Nasazení a finalizace** (1 týden)
   - Nasazení na produkční prostředí
   - Finální kontrola
   - Předání projektu

## 13. Příklady a reference

### Inspirativní weby v oboru
- [Example Salon 1](https://www.examplesalon1.com) - inspirace pro rezervační systém
- [Example Salon 2](https://www.examplesalon2.com) - inspirace pro prezentaci služeb
- [Example Salon 3](https://www.examplesalon3.com) - inspirace pro design

### Příklady UI komponent
- Tlačítka: [odkaz na návrh]
- Karty služeb: [odkaz na návrh]
- Formulářové prvky: [odkaz na návrh]
- Navigace: [odkaz na návrh]

## 14. Dodatečné poznámky a požadavky

- Zachovat elegantní a prémiový vzhled stávajícího webu
- Klást důraz na kvalitní fotografie a vizuální prezentaci
- Zajistit snadnou správu obsahu pro personál salonu
- Implementovat všechna navrhovaná vylepšení z provedené analýzy
- Zajistit pravidelné zálohování dat
- Připravit stručný manuál pro správu obsahu

---

Toto zadání slouží jako komplexní podklad pro vývoj nového webu TOP SALON BRNO. Při implementaci je třeba dbát na zachování prémiového vzhledu stávajícího webu a zároveň implementovat všechna navrhovaná vylepšení pro lepší uživatelskou zkušenost, přístupnost a SEO optimalizaci.
