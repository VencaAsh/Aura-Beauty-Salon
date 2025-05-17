import type { Metadata } from 'next'; // Import typu Metadata
import { services, categories } from './services-data';

export const metadata: Metadata = {
  title: 'Služby - Aura Beauty Salon | Prodlužování řas, Obočí a Kosmetika',
  description: 'Nabízíme profesionální služby v Ostravě: prodlužování řas, lash lifting, laminace obočí, kosmetické ošetření pleti a další. Profesionální péče s důrazem na kvalitu a individuální přístup.',
  keywords: 'prodlužování řas Ostrava, lash lifting Ostrava, architektura obočí Ostrava, laminace obočí Ostrava, kosmetické ošetření Ostrava, mikrojehlíčkování Ostrava, dermaplaning Ostrava',
};

export default function SluzbyPage() {
  return (
    <>
      {/* Hero sekce */}
      <section className="relative bg-brand-secondary-light pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-light text-[#121212]">Naše služby</h1>
            <div className="h-[1px] w-16 bg-[#E6CCB2] mx-auto mt-4 mb-2"></div>
          </div>
        </div>
      </section>

      {/* Hlavní obsah */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Filtry kategorií */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 border-b border-[#E6CCB2]/20 pb-4">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={`px-3 py-3 mb-2 text-center min-w-[100px] ${
                    category.id === 'all'
                      ? 'text-[#121212] font-medium bg-[#E6CCB2]/20'
                      : 'text-brand-secondary-dark hover:text-[#121212] hover:bg-[#E6CCB2]/10'
                  } transition-all duration-300 text-sm tracking-wide rounded-sm`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          {/* Sekce Řasy */}
          <section id="rasy" className="mb-20">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-light text-[#121212] mb-2">Řasy</h2>
              <div className="h-[1px] w-full bg-[#E6CCB2]/20 mb-8"></div>
            </div>

            {/* Služby */}
            {services
              .filter(service => service.category === 'rasy')
              .map(service => (
                <div key={service.id} className="mb-12 pb-8 border-b border-[#E6CCB2]/10">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-light text-[#121212] mb-2">{service.name}</h3>
                      <p className="text-brand-secondary-dark text-sm font-light mb-3">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-[#121212]/80 text-sm font-light mb-4">{service.longDescription}</p>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="/rezervace"
                        className="inline-flex items-center bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide whitespace-nowrap"
                      >
                        Rezervovat
                      </a>
                      <a
                        href="/cenik"
                        className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide whitespace-nowrap"
                      >
                        Ceník
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </section>

          {/* Sekce Obočí */}
          <section id="oboci" className="mb-20">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-light text-[#121212] mb-2">Obočí</h2>
              <div className="h-[1px] w-full bg-[#E6CCB2]/20 mb-8"></div>
            </div>

            {/* Služby */}
            {services
              .filter(service => service.category === 'oboci')
              .map(service => (
                <div key={service.id} className="mb-12 pb-8 border-b border-[#E6CCB2]/10">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-light text-[#121212] mb-2">{service.name}</h3>
                      <p className="text-brand-secondary-dark text-sm font-light mb-3">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-[#121212]/80 text-sm font-light mb-4">{service.longDescription}</p>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="/rezervace"
                        className="inline-flex items-center bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide whitespace-nowrap"
                      >
                        Rezervovat
                      </a>
                      <a
                        href="/cenik"
                        className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide whitespace-nowrap"
                      >
                        Ceník
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </section>

          {/* Sekce Kosmetika */}
          <section id="kosmetika" className="mb-20">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-light text-[#121212] mb-2">Kosmetika</h2>
              <div className="h-[1px] w-full bg-[#E6CCB2]/20 mb-8"></div>
            </div>

            {/* Služby */}
            {services
              .filter(service => service.category === 'kosmetika')
              .map(service => (
                <div key={service.id} className="mb-12 pb-8 border-b border-[#E6CCB2]/10">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-light text-[#121212] mb-2">{service.name}</h3>
                      <p className="text-brand-secondary-dark text-sm font-light mb-3">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-[#121212]/80 text-sm font-light mb-4">{service.longDescription}</p>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="/rezervace"
                        className="inline-flex items-center bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide whitespace-nowrap"
                      >
                        Rezervovat
                      </a>
                      <a
                        href="/cenik"
                        className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide whitespace-nowrap"
                      >
                        Ceník
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </section>

          {/* CTA sekce */}
          <div className="bg-[#F5F3F0] p-8 md:p-12 text-center rounded-sm">
            <h2 className="text-2xl font-serif font-light mb-4 text-[#121212]">Rezervujte si termín</h2>
            <div className="h-[1px] w-16 bg-[#E6CCB2] mx-auto mb-6"></div>
            <p className="mb-8 max-w-2xl mx-auto text-brand-secondary-dark font-light">
              Dopřejte si profesionální péči s individuálním přístupem v našem salonu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/rezervace"
                className="inline-flex items-center bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-2 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Rezervovat termín
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-2 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
