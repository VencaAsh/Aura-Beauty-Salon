import type { Metadata } from 'next'; // Import typu Metadata

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů - Aura Beauty Salon', // Specifický titulek
  description: 'Přečtěte si, jak chráníme vaše osobní údaje v souladu s GDPR.', // Specifický popis
  robots: { // Instrukce pro roboty - tuto stránku není třeba indexovat
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ZasadyOchranyOsobníchUdajuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-pink-800">
        Zásady ochrany osobních údajů
      </h1>

      <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Úvod</h2>
        <p className="leading-relaxed">
          V Aura Beauty Salon si vážíme vaší důvěry a zavazujeme se chránit vaše osobní údaje.
          Tyto zásady vysvětlují, jaké informace shromažďujeme, jak je používáme a jaká máte práva
          v souvislosti s vašimi údaji.
        </p>

        {/* Zde bude detailní obsah zásad ochrany osobních údajů */}
        <h2 className="text-2xl font-semibold text-gray-800 pt-4">Jaké údaje shromažďujeme</h2>
        <p className="leading-relaxed">
          Shromažďujeme údaje, které nám poskytnete při rezervaci služeb, vyplnění kontaktního formuláře
          nebo přihlášení k odběru novinek (např. jméno, e-mail, telefonní číslo). Dále můžeme
          shromažďovat technické údaje prostřednictvím cookies pro zlepšení funkčnosti webu.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 pt-4">Jak údaje používáme</h2>
        <p className="leading-relaxed">
          Vaše údaje používáme k vyřízení vašich objednávek a dotazů, ke komunikaci s vámi,
          k zasílání informací o našich službách (pokud jste udělili souhlas) a ke zlepšování
          našich služeb a webových stránek.
        </p>

         <h2 className="text-2xl font-semibold text-gray-800 pt-4">Vaše práva</h2>
         <p className="leading-relaxed">
           Máte právo na přístup k vašim údajům, jejich opravu, výmaz, omezení zpracování,
           přenositelnost a právo vznést námitku proti zpracování. Pro uplatnění těchto práv
           nás prosím kontaktujte.
         </p>

        <p className="leading-relaxed pt-6 text-sm text-gray-500">
          Toto je pouze základní osnova. Kompletní a právně závazné znění Zásad ochrany osobních údajů
          bude doplněno v souladu s platnou legislativou (GDPR).
        </p>
      </div>
    </div>
  );
}
