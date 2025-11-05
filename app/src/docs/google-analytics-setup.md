# Nastavení Google Analytics 4 (GA4) pro Aura Beauty Salon

Tento dokument obsahuje instrukce pro nastavení a používání Google Analytics 4 (GA4) na webových stránkách Aura Beauty Salon.

## Obsah
1. [Vytvoření účtu Google Analytics](#1-vytvoření-účtu-google-analytics)
2. [Získání měřicího ID](#2-získání-měřicího-id)
3. [Konfigurace v kódu](#3-konfigurace-v-kódu)
4. [Ověření implementace](#4-ověření-implementace)
5. [Sledování událostí](#5-sledování-událostí)
6. [Řešení problémů](#6-řešení-problémů)

## 1. Vytvoření účtu Google Analytics

1. Přejděte na [Google Analytics](https://analytics.google.com/)
2. Přihlaste se pomocí Google účtu
3. Klikněte na "Nastavit měření"
4. Vytvořte nový účet:
   - Zadejte název účtu (např. "Aura Beauty Salon")
   - Nastavte časové pásmo a měnu
   - Klikněte na "Další"
5. Nastavte vlastnosti:
   - Zadejte název vlastnosti (např. "Aura Beauty Salon Web")
   - Vyberte časové pásmo a měnu
   - Klikněte na "Další"
6. Vyplňte informace o podnikání
7. Vytvořte datový stream:
   - Vyberte "Web"
   - Zadejte URL webu (např. "https://aura-beauty-salon.netlify.app")
   - Zadejte název streamu (např. "Aura Beauty Salon Web")
   - Klikněte na "Vytvořit stream"

## 2. Získání měřicího ID

Po vytvoření datového streamu získáte měřicí ID (Measurement ID), které začíná na "G-" (např. G-XXXXXXXXXX).

1. V Google Analytics přejděte do sekce "Admin"
2. V sloupci "Vlastnost" klikněte na "Datové streamy"
3. Klikněte na váš webový stream
4. Zkopírujte "Measurement ID" (např. G-XXXXXXXXXX)

## 3. Konfigurace v kódu

1. Vytvořte soubor `.env` v adresáři `app/` podle šablony `app/.env.example`
2. Nastavte proměnnou prostředí s vaším měřicím ID:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Poznámka: Aplikace načítá ID z proměnné prostředí a v kódu není žádné hardcodované fallback ID.

## 4. Ověření implementace

Po nasazení webu s aktualizovaným měřicím ID můžete ověřit, zda Google Analytics správně funguje:

1. Přejděte na váš web
2. Otevřete vývojářské nástroje prohlížeče (F12 nebo pravé tlačítko myši -> Prozkoumat)
3. Přejděte na záložku "Network" (Síť)
4. Do filtru zadejte "collect"
5. Obnovte stránku
6. Měli byste vidět požadavky na "collect" endpoint Google Analytics

Alternativně můžete použít rozšíření prohlížeče "Google Analytics Debugger" nebo "Tag Assistant".

## 5. Sledování událostí

Pro sledování vlastních událostí můžete použít funkci `event` z `app/src/utils/analytics.ts`:

```typescript
import { event } from '@/utils/analytics';

// Příklad sledování události
event({
  action: 'button_click',
  category: 'engagement',
  label: 'rezervace',
  value: 1
});
```

Běžné události, které byste mohli chtít sledovat:
- Kliknutí na tlačítko rezervace
- Odeslání kontaktního formuláře
- Zobrazení galerie
- Kliknutí na sociální sítě

## 6. Řešení problémů

Pokud Google Analytics nefunguje správně, zkontrolujte:

1. **Správné ID měření** - Ujistěte se, že jste nahradili placeholder ID skutečným ID
2. **Souhlas s cookies** - GA se načte pouze pokud uživatel souhlasil s analytickými cookies
3. **Blokování prohlížečem** - Některá rozšíření prohlížeče nebo režimy soukromí mohou blokovat GA
4. **Správné načtení skriptu** - Zkontrolujte v konzoli prohlížeče, zda nedochází k chybám

Pro další pomoc navštivte [oficiální dokumentaci Google Analytics](https://developers.google.com/analytics/devguides/collection/ga4).
