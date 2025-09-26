import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import Link from 'next/link';
import { Shield, Lock, FileText, Mail, Cookie, Server } from 'lucide-react';
import CookiePreferencesButton from './CookiePreferencesButton';

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů - Aura Beauty Salon',
  description: 'Přečtěte si, jak chráníme vaše osobní údaje v souladu s GDPR. Informace o zpracování osobních údajů v Aura Beauty Salon.',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ZasadyOchranyOsobnichUdajuPage() {
  return (
    <main className="bg-[#F5F3F0]">
      <CookiePreferencesButton />
      <Breadcrumbs />

      <PageHero
        title="Zásady ochrany osobních údajů"
        backgroundClass="bg-[#f1ede6]"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-sm border border-[#E6CCB2]/10 p-8 md:p-12">
          <div className="flex items-center mb-8">
            <Shield className="text-[#C9B8A8] w-6 h-6 mr-3" />
            <h2 className="text-xl font-serif font-light text-[#121212]">Úvod</h2>
          </div>

          <p className="text-[#121212]/80 font-light mb-8 leading-relaxed">
            V Aura Beauty Salon si vážíme vaší důvěry a zavazujeme se chránit vaše osobní údaje.
            Tyto zásady vysvětlují, jaké informace shromažďujeme, jak je používáme a jaká máte práva
            v souvislosti s vašimi údaji. Tento dokument je v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
          </p>

          <div className="flex items-center mb-8 mt-12">
            <Lock className="text-[#C9B8A8] w-6 h-6 mr-3" />
            <h2 className="text-xl font-serif font-light text-[#121212]">Jaké údaje shromažďujeme</h2>
          </div>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            Při poskytování našich služeb můžeme shromažďovat následující kategorie osobních údajů:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li><strong>Identifikační údaje</strong> - jméno, příjmení</li>
            <li><strong>Kontaktní údaje</strong> - e-mailová adresa, telefonní číslo, adresa</li>
            <li><strong>Rezervační údaje</strong> - informace o rezervovaných službách, termínech, preferencích</li>
            <li><strong>Platebí údaje</strong> - informace o platbách a fakturační údaje</li>
            <li><strong>Komunikace</strong> - obsah zpráv, které nám posíláte</li>
            <li><strong>Technické údaje</strong> - IP adresa, typ prohlížeče, zařízení, cookies</li>
          </ul>

          <p className="text-[#121212]/80 font-light mb-8 leading-relaxed">
            Osobní údaje získáváme přímo od vás, když:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li>Vytvoříte rezervaci našich služeb</li>
            <li>Kontaktujete nás prostřednictvím kontaktního formuláře</li>
            <li>Přihlásíte se k odběru novinek</li>
            <li>Navštívíte naše webové stránky (prostřednictvím cookies)</li>
          </ul>

          <div className="flex items-center mb-8 mt-12">
            <FileText className="text-[#C9B8A8] w-6 h-6 mr-3" />
            <h2 className="text-xl font-serif font-light text-[#121212]">Jak údaje používáme</h2>
          </div>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            Vaše osobní údaje používáme pro následující účely:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li><strong>Poskytování služeb</strong> - zpracování rezervací, poskytování objednaných služeb</li>
            <li><strong>Komunikace</strong> - odpovídání na vaše dotazy, zasílání potvrzení rezervací</li>
            <li><strong>Marketing</strong> - zasílání informací o našich službách a nabídkách (pouze s vaším souhlasem)</li>
            <li><strong>Zlepšování služeb</strong> - analýza a vylepšování našich služeb a webových stránek</li>
            <li><strong>Právní povinnosti</strong> - plnění zákonných povinností (např. účetnictví)</li>
          </ul>

          <p className="text-[#121212]/80 font-light mb-8 leading-relaxed">
            Vaše osobní údaje zpracováváme na základě následujících právních důvodů:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li><strong>Plnění smlouvy</strong> - pro poskytnutí služeb, které jste si objednali</li>
            <li><strong>Oprávněný zájem</strong> - pro zlepšování našich služeb a komunikaci s vámi</li>
            <li><strong>Souhlas</strong> - pro marketingové účely (zasílání novinek)</li>
            <li><strong>Právní povinnost</strong> - pro plnění zákonných povinností</li>
          </ul>

          <div className="flex items-center mb-8 mt-12">
            <Mail className="text-[#C9B8A8] w-6 h-6 mr-3" />
            <h2 className="text-xl font-serif font-light text-[#121212]">Vaše práva</h2>
          </div>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            V souvislosti se zpracováním vašich osobních údajů máte následující práva:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li><strong>Právo na přístup</strong> - máte právo získat informace o tom, jaké vaše osobní údaje zpracováváme</li>
            <li><strong>Právo na opravu</strong> - máte právo požádat o opravu nepřesných údajů</li>
            <li><strong>Právo na výmaz</strong> - máte právo požádat o vymazání vašich osobních údajů</li>
            <li><strong>Právo na omezení zpracování</strong> - máte právo požádat o omezení zpracování vašich údajů</li>
            <li><strong>Právo na přenositelnost</strong> - máte právo získat vaše údaje ve strukturovaném formátu</li>
            <li><strong>Právo vznést námitku</strong> - máte právo vznést námitku proti zpracování</li>
            <li><strong>Právo odvolat souhlas</strong> - máte právo kdykoliv odvolat svůj souhlas se zpracováním</li>
          </ul>

          <p className="text-[#121212]/80 font-light mb-8 leading-relaxed">
            Pro uplatnění těchto práv nás prosím kontaktujte na e-mailové adrese <a href="mailto:alexandramak@seznam.cz" className="text-[#C9B8A8] hover:text-[#D8C3B0] transition-colors duration-300">alexandramak@seznam.cz</a> nebo na adrese Aura Beauty Salon, Vítkovická 3080/10, 702 00 Ostrava.
          </p>

          <div className="flex items-center mb-8 mt-12">
            <Cookie className="text-[#C9B8A8] w-6 h-6 mr-3" />
            <h2 className="text-xl font-serif font-light text-[#121212]">Cookies a další technologie</h2>
          </div>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            Naše webové stránky používají soubory cookies a podobné technologie pro zlepšení uživatelského zážitku a analýzu návštěvnosti. Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě našich stránek.
          </p>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            Používáme následující typy cookies:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li><strong>Nezbytné cookies</strong> - umožňují základní funkce stránek a jsou nezbytné pro jejich fungování</li>
            <li><strong>Analytické cookies</strong> - pomáhají nám pochopit, jak návštěvníci používají naše stránky</li>
            <li><strong>Funkční cookies</strong> - umožňují rozsáhlejší funkce a personalizaci</li>
            <li><strong>Marketingové cookies</strong> - sledují vaši aktivitu na webu pro cílení reklamy</li>
          </ul>

          <p className="text-[#121212]/80 font-light mb-8 leading-relaxed">
            Většinu moderních webových prohlížečů můžete nastavit tak, aby cookies odmitly nebo vás upozornily, když jsou cookies odesílány. Upozorňujeme však, že některé části našich stránek nemusí bez cookies správně fungovat.
          </p>

          <div className="flex items-center mb-8 mt-12">
            <Server className="text-[#C9B8A8] w-6 h-6 mr-3" />
            <h2 className="text-xl font-serif font-light text-[#121212]">Zabezpečení a uchovávání údajů</h2>
          </div>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            Přijímáme vhodná technická a organizační opatření k ochraně vašich osobních údajů proti náhodné ztrátě, zničení, změně, neoprávněnému přístupu nebo zveřejnění.
          </p>

          <p className="text-[#121212]/80 font-light mb-4 leading-relaxed">
            Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou pro naplnění účelů uvedených v těchto zásadách nebo po dobu vyžadovanou zákonem. Konkrétní doba uchovávání se liší podle typu údajů a účelu zpracování:
          </p>

          <ul className="list-disc pl-6 mb-8 text-[#121212]/80 font-light space-y-2">
            <li>Rezervační údaje uchováváme po dobu 3 let od poslední návštěvy</li>
            <li>Údaje pro marketingové účely uchováváme, dokud neodvoláte svůj souhlas</li>
            <li>Účetní doklady uchováváme po dobu stanovenou zákonem (obvykle 5-10 let)</li>
          </ul>

          <div className="flex items-center mb-8 mt-12">
            <div className="w-full">
              <div className="bg-[#f1ede6] border border-[#E6CCB2]/30 rounded-sm p-6 mb-8">
                <h3 className="text-lg font-serif font-light text-[#121212] mb-4">Správa cookies</h3>
                <p className="text-[#121212]/80 font-light mb-6">
                  Na našem webu používáme různé typy cookies. Některé jsou nezbytné pro fungování webu, zatímco jiné nám pomáhají zlepšovat uživatelský zážitek a poskytovat vám relevantní obsah.
                </p>
                <div className="flex justify-center">
                  <button
                    id="openCookiePreferences"
                    className="px-6 py-3 text-sm text-[#121212] bg-[#E6CCB2] rounded-sm hover:bg-[#D8C3B0] transition-colors"
                  >
                    Upravit nastavení cookies
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E6CCB2]/20 pt-8 mt-12">
            <p className="text-[#121212]/60 font-light text-sm">
              Tyto Zásady ochrany osobních údajů jsou platné a účinné od 1. 6. 2023. Vyhrazujeme si právo tyto zásady kdykoliv upravit. Aktuální verze bude vždy dostupná na této stránce.
            </p>

            <div className="mt-6 flex justify-center">
              <Link href="/" className="text-[#C9B8A8] hover:text-[#D8C3B0] transition-colors duration-300 text-sm font-light">
                &larr; Zpět na úvodní stránku
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
