import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { FileText, Shield, Scale } from 'lucide-react';

export const metadata = {
  title: 'Obchodní podmínky | Aura Beauty Salon',
  description: 'Obchodní podmínky kosmetického salonu Aura Beauty Salon. Seznamte se s našimi podmínkami poskytování služeb.',
};

export default function TermsPage() {
  return (
    <main className="bg-[#F5F3F0]">
      <Breadcrumbs />

      <PageHero
        title="Obchodní podmínky"
        subtitle="Seznamte se s našimi obchodními podmínkami pro poskytování kosmetických služeb."
        backgroundClass="bg-[#F8F4E9]"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-[#C9B8A8]">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-light text-[#121212] mb-3">Smluvní podmínky</h3>
            <p className="text-[#121212]/70 font-light">
              Naše obchodní podmínky upravují vztah mezi salonem a klientem při poskytování služeb.
            </p>
          </div>

          <div className="bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-[#C9B8A8]">
              <Scale className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-light text-[#121212] mb-3">Práva a povinnosti</h3>
            <p className="text-[#121212]/70 font-light">
              Přehled práv a povinností klienta a salonu při poskytování kosmetických služeb.
            </p>
          </div>

          <div className="bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-[#C9B8A8]">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-light text-[#121212] mb-3">Ochrana osobních údajů</h3>
            <p className="text-[#121212]/70 font-light">
              Informace o tom, jak zpracováváme a chráníme vaše osobní údaje v souladu s GDPR.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden mb-16">
          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">1. Všeobecná ustanovení</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                1.1 Tyto obchodní podmínky upravují vztahy mezi poskytovatelem služeb, společností Aura Beauty Salon, IČO: [DOPLNIT], se sídlem Vítkovická 3080/10, 702 00 Ostrava (dále jen „poskytovatel") a zákazníkem při poskytování kosmetických služeb.
              </p>
              <p>
                1.2 Zákazník je povinen se před objednáním služby seznámit s těmito obchodními podmínkami. Objednáním služby zákazník vyjadřuje, že se seznámil s těmito obchodními podmínkami, a že s nimi souhlasí.
              </p>
              <p>
                1.3 Tyto obchodní podmínky jsou nedílnou součástí smlouvy uzavřené mezi poskytovatelem a zákazníkem.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">2. Objednávka služeb</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                2.1 Zákazník si může objednat služby telefonicky, e-mailem nebo prostřednictvím online rezervačního systému na webových stránkách poskytovatele.
              </p>
              <p>
                2.2 Objednávka je závazná po potvrzení termínu poskytovatelem.
              </p>
              <p>
                2.3 Poskytovatel si vyhrazuje právo odmítnout objednávku v případě, že není možné požadovanou službu poskytnout z kapacitních nebo jiných provozních důvodů.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">3. Zrušení objednávky</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                3.1 Zákazník může zrušit objednávku nejpozději 24 hodin před sjednaným termínem bez storno poplatku.
              </p>
              <p>
                3.2 Při zrušení objednávky méně než 24 hodin před sjednaným termínem nebo v případě nedostavení se na sjednaný termín může poskytovatel požadovat storno poplatek ve výši 50% z ceny objednané služby.
              </p>
              <p>
                3.3 Poskytovatel si vyhrazuje právo zrušit objednávku z důvodu nemoci, technických problémů nebo jiných závažných důvodů. V takovém případě bude zákazník neprodleně informován a bude mu nabídnut náhradní termín.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">4. Ceny a platební podmínky</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                4.1 Ceny služeb jsou uvedeny v ceníku poskytovatele, který je k dispozici v provozovně a na webových stránkách poskytovatele.
              </p>
              <p>
                4.2 Poskytovatel si vyhrazuje právo na změnu cen. Změna cen nemá vliv na již potvrzené objednávky.
              </p>
              <p>
                4.3 Platba za poskytnuté služby probíhá v hotovosti nebo platební kartou po poskytnutí služby, pokud není dohodnuto jinak.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">5. Práva a povinnosti zákazníka</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                5.1 Zákazník je povinen dostavit se na sjednaný termín včas. V případě zpoždění může být doba poskytnutí služby zkrácena o dobu zpoždění, aby nebyli poškozeni další zákazníci.
              </p>
              <p>
                5.2 Zákazník je povinen informovat poskytovatele o svém zdravotním stavu, alergiích a jiných skutečnostech, které by mohly ovlivnit poskytnutí služby.
              </p>
              <p>
                5.3 Zákazník je povinen dodržovat pokyny poskytovatele během poskytování služby.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">6. Práva a povinnosti poskytovatele</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                6.1 Poskytovatel je povinen poskytovat služby v souladu s objednávkou zákazníka a v odpovídající kvalitě.
              </p>
              <p>
                6.2 Poskytovatel je povinen dodržovat hygienické předpisy a používat kvalitní a certifikované produkty.
              </p>
              <p>
                6.3 Poskytovatel má právo odmítnout poskytnutí služby zákazníkovi, který je pod vlivem alkoholu nebo jiných návykových látek, nebo jehož chování je nevhodné či ohrožující.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">7. Ochrana osobních údajů</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                7.1 Poskytovatel zpracovává osobní údaje zákazníků v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
              </p>
              <p>
                7.2 Podrobné informace o zpracování osobních údajů jsou uvedeny v dokumentu Zásady ochrany osobních údajů, který je k dispozici na webových stránkách poskytovatele.
              </p>
            </div>
          </div>

          <div className="p-6 border-b border-[#E6CCB2]/30">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">8. Reklamace</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                8.1 Zákazník má právo reklamovat poskytnutou službu, pokud nebyla poskytnuta v odpovídající kvalitě nebo rozsahu.
              </p>
              <p>
                8.2 Reklamaci je třeba uplatnit bez zbytečného odkladu, nejpozději do 24 hodin od poskytnutí služby.
              </p>
              <p>
                8.3 Poskytovatel se zavazuje vyřídit reklamaci bez zbytečného odkladu, nejpozději do 30 dnů od jejího uplatnění.
              </p>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-4">9. Závěrečná ustanovení</h2>
            <div className="prose prose-sm max-w-none text-[#121212]/80 font-light">
              <p>
                9.1 Tyto obchodní podmínky nabývají účinnosti dnem [DOPLNIT].
              </p>
              <p>
                9.2 Poskytovatel si vyhrazuje právo tyto obchodní podmínky změnit. Změna obchodních podmínek bude oznámena na webových stránkách poskytovatele.
              </p>
              <p>
                9.3 Právní vztahy neupravené těmito obchodními podmínkami se řídí příslušnými ustanoveními zákona č. 89/2012 Sb., občanský zákoník, ve znění pozdějších předpisů, a dalšími právními předpisy České republiky.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-8 text-center">
          <h2 className="text-2xl font-serif font-light mb-4 text-[#121212]">Máte dotazy k obchodním podmínkám?</h2>
          <p className="mb-8 text-[#121212]/70 font-light max-w-2xl mx-auto">
            Pokud máte jakékoliv dotazy týkající se našich obchodních podmínek, neváhejte nás kontaktovat.
          </p>
          <a
            href="mailto:info@aurabeauty.cz"
            className="inline-flex items-center bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-3 px-6 rounded-sm transition-all duration-300 border border-[#E6CCB2]/20 text-sm tracking-wide"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </main>
  );
}
