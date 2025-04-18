import React from 'react';
import { PageHero, CookieSettingsButton } from '@/components/ui';
import EnhancedCookieConsentBanner from '@/components/ui/EnhancedCookieConsentBanner';

export const metadata = {
  title: 'Cookies | Aura Beauty Salon',
  description: 'Informace o používání cookies na stránkách Aura Beauty Salon',
};

export default function CookiesPage() {
  return (
    <main>
      <PageHero title="Cookies" subtitle="Informace o používání cookies" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-8 text-[#121212]">Co jsou cookies?</h2>
            <p className="text-[#121212]/80 mb-6 font-light leading-relaxed">
              Cookies jsou malé textové soubory, které jsou ukládány ve vašem prohlížeči nebo na pevném disku vašeho počítače.
              Cookies používáme k tomu, abychom vám mohli nabídnout co nejlepší uživatelský zážitek.
            </p>

            <h2 className="text-2xl font-light mb-8 mt-12 text-[#121212]">Jaké cookies používáme?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-light mb-2 text-[#121212]">Nezbytné cookies</h3>
                <p className="text-[#121212]/80 font-light leading-relaxed">
                  Tyto cookies jsou nezbytné pro fungování našich webových stránek. Bez těchto cookies by naše webové stránky nefungovaly správně.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light mb-2 text-[#121212]">Analytické cookies</h3>
                <p className="text-[#121212]/80 font-light leading-relaxed">
                  Tyto cookies nám pomáhají analyzovat, jak návštěvníci používají naše webové stránky. Díky těmto informacím můžeme naše stránky neustále vylepšovat.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light mb-2 text-[#121212]">Marketingové cookies</h3>
                <p className="text-[#121212]/80 font-light leading-relaxed">
                  Tyto cookies používáme k zobrazování relevantní a personalizované reklamy na jiných webových stránkách.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light mb-2 text-[#121212]">Preferenční cookies</h3>
                <p className="text-[#121212]/80 font-light leading-relaxed">
                  Tyto cookies umožňují webové stránce zapamatovat si informace, které mění způsob, jakým se webová stránka chová nebo jak vypadá.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-light mb-8 mt-12 text-[#121212]">Správa cookies</h2>
            <p className="text-[#121212]/80 mb-6 font-light leading-relaxed">
              Své preference ohledně cookies můžete kdykoliv změnit kliknutím na tlačítko níže:
            </p>

            <div className="mt-8 mb-16">
              <EnhancedCookieConsentBanner hideFooterButton={true} />
              <CookieSettingsButton
                className="px-6 py-3 border border-[#E6CCB2] text-[#121212] hover:bg-[#E6CCB2]/20 transition-colors duration-300 text-sm font-light mt-4"
                label="Upravit nastavení cookies"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
