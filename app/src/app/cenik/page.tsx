import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { Download, CalendarCheck } from 'lucide-react';

// Definice typů
type Service = {
  name: string;
  price: string;
  duration: string;
  description?: string;
};

type PriceCategory = {
  category: string;
  services: Service[];
};

export const metadata = {
  title: 'Ceník služeb | Aura Beauty Salon',
  description: 'Ceník služeb nabízených v Aura Beauty Salon. Prodlužování řas, architektura obočí a laminace obočí.',
};

// Data pro ceník
const priceList: PriceCategory[] = [
  {
    category: 'Prodlužování řas',
    services: [
      { name: 'Prodloužení řas - metoda řasa na řasu (Nový set)', price: '1 100 Kč', duration: '150 min' },
      { name: 'Doplnění řas (2 týdny)', price: '550 Kč', duration: '100 min' },
      { name: 'Doplnění řas (3 týdny)', price: '750 Kč', duration: '130 min' },
      { name: 'Doplnění řas (4 týdny)', price: '1 050 Kč', duration: '150 min' },
      { name: 'Prodloužení řas - metoda 2D/3D (Nový set)', price: '1 200 Kč', duration: '150 min' },
      { name: 'Odstranění řas', price: '250 Kč', duration: '20 min' }
    ]
  },
  {
    category: 'Architektura obočí',
    services: [
      { name: 'Architektura & Barvení obočí', price: '490 Kč', duration: '60 min', description: 'Architektura a barvení obočí zvýrazní kontury, dodá symetrii a vytvoří přirozeně plný a upravený vzhled.' },
      { name: 'Úprava tvaru voskem a pinzetou & Výživa', price: '250 Kč', duration: '50 min', description: 'Přirozené zvýraznění tvaru obočí pomocí vosku/pinzety bez barvení.' }
    ]
  },
  {
    category: 'Laminace obočí',
    services: [
      { name: 'Laminace obočí bez barvy', price: '790 Kč', duration: '60 min', description: 'Laminace obočí zafixuje chloupky do požadovaného tvaru, zvýrazní je a dodá upravený vzhled. Výdrž 4-6 týdnů.' },
      { name: 'Laminace obočí s barvou', price: '890 Kč', duration: '60 min', description: 'Laminace obočí zafixuje chloupky do požadovaného tvaru, zvýrazní je a dodá upravený vzhled. Výdrž 4-6 týdnů.' }
    ]
  },
  {
    category: 'Řasy - Lash lifting & Barvení',
    services: [
      { name: 'Lash lifting + barvení', price: '950 Kč', duration: '60 min', description: 'Lash lifting krásně natočí a zvýrazní řasy, opticky je prodlouží a otevře pohled. Výsledkem jsou přirozeně výrazné řasy na 3-6 týdnů.' },
      { name: 'Barvení řas & Výživa', price: '200 Kč', duration: '30 min', description: 'Barvení řas se závěrečnou botoxovou péčí.' }
    ]
  }
];

export default function PriceListPage() {
  return (
    <main className="bg-[#F5F3F0]">
      <Breadcrumbs />

      {/* Hero sekce */}
      <section className="relative overflow-hidden bg-brand-secondary-light py-24">
        {/* Dekorativní prvky */}
        <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-brand-secondary/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-brand-secondary/10 blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-brand-black mb-6">Ceník služeb</h1>
            <div className="h-[1px] w-16 bg-brand-secondary mx-auto mb-6"></div>
            <p className="text-center text-brand-secondary-dark mb-0 max-w-2xl mx-auto font-light">
              Ceník služeb nabízených v Aura Beauty Salon. Specializujeme se na prodlužování řas, architekturu obočí a laminaci obočí. Ceny jsou uvedeny včetně DPH.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Filtry kategorií */}
        <div className="mb-12 bg-white shadow-sm rounded-sm border border-[#E6CCB2]/30 p-4 max-w-5xl mx-auto">
          <h3 className="text-center text-sm uppercase tracking-wider text-[#121212]/70 mb-4 font-medium">Vyberte kategorii</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#" className="px-4 py-2 bg-[#E6CCB2] text-[#121212] rounded-sm hover:bg-[#E6CCB2]/80 transition-all duration-300 text-sm font-light tracking-wide">
              Všechny služby
            </a>
            {priceList.map((category, index) => (
              <a
                key={index}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-transparent text-[#121212] border border-[#E6CCB2]/50 rounded-sm hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 transition-all duration-300 text-sm font-light tracking-wide"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>

        {/* Ceník - zjednodušená verze */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {priceList.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
              <h2 className="text-2xl font-serif font-light mb-6 text-[#121212] text-center">
                {category.category}
              </h2>
              <div className="bg-white shadow-lg rounded-sm overflow-hidden border-2 border-[#E6CCB2]/40">
                {/* Desktop verze */}
                <div className="hidden md:block">
                  <table className="w-full border-collapse">
                    <thead className="bg-[#E6CCB2]/30 border-b-2 border-[#E6CCB2]/50">
                      <tr>
                        <th className="text-left p-4 font-medium text-sm text-[#121212]/80">Služba</th>
                        <th className="text-center p-4 font-medium text-sm text-[#121212]/80">Doba trvání</th>
                        <th className="text-center p-4 font-medium text-sm text-[#121212]/80">Cena</th>
                        <th className="text-right p-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6CCB2]/20">
                      {category.services.map((service, serviceIndex) => (
                        <tr
                          key={serviceIndex}
                          className={`hover:bg-[#F5F3F0]/50 transition-colors duration-300 ${serviceIndex % 2 === 0 ? 'bg-white' : 'bg-[#F5F3F0]/20'}`}
                        >
                          <td className="p-4 border-b border-[#E6CCB2]/10">
                            <h3 className="text-base font-medium text-[#121212]">{service.name}</h3>
                            {service.description && (
                              <p className="text-xs text-[#121212]/70 mt-1 font-light">{service.description}</p>
                            )}
                          </td>
                          <td className="p-4 text-center border-b border-[#E6CCB2]/10">
                            <span className="text-sm text-brand-secondary-dark">{service.duration}</span>
                          </td>
                          <td className="p-4 text-center border-b border-[#E6CCB2]/10">
                            <span className="text-base font-medium text-[#121212]">{service.price}</span>
                          </td>
                          <td className="p-4 text-right border-b border-[#E6CCB2]/10">
                            <Link
                              href="/rezervace"
                              className="bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-2 px-3 rounded-sm text-xs transition-all duration-300 border border-[#E6CCB2]/20 whitespace-nowrap inline-block"
                            >
                              Rezervovat
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobilní verze */}
                <div className="md:hidden divide-y divide-[#E6CCB2]/30 border-t-2 border-[#E6CCB2]/40">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`p-4 ${serviceIndex % 2 === 0 ? 'bg-white' : 'bg-[#F5F3F0]/20'}`}
                    >
                      <div className="flex justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-[#121212] mr-4">{service.name}</h3>
                          {service.description && (
                            <p className="text-xs text-[#121212]/70 mt-1 font-light">{service.description}</p>
                          )}
                        </div>
                        <span className="text-base font-medium text-[#121212] ml-2 whitespace-nowrap">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-brand-secondary-dark bg-[#F5F3F0] px-2 py-1 rounded-sm">{service.duration}</span>
                        <Link
                          href="/rezervace"
                          className="bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-1 px-3 rounded-sm text-xs transition-all duration-300 border border-[#E6CCB2]/20 whitespace-nowrap inline-block"
                        >
                          Rezervovat
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stažení ceníku */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-3 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
          >
            <Download className="mr-3 h-5 w-5 text-[#C9B8A8]" />
            Stáhnout ceník v PDF
          </a>
        </div>

        {/* CTA sekce */}
        <div className="bg-brand-secondary-light border border-brand-secondary/20 p-12 md:p-16 mt-32 text-center rounded-sm shadow-sm">
          <h2 className="text-3xl font-serif font-light mb-4 text-brand-black">Rezervujte si termín</h2>
          <div className="h-[1px] w-20 bg-brand-secondary/50 mx-auto mb-8"></div>
          <p className="mb-12 max-w-2xl mx-auto text-brand-secondary-dark font-light text-lg">
            Dopřejte si profesionální péči s individuálním přístupem v našem salonu. Jsme připraveni se o vás postarat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rezervace"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-sm font-sans text-sm tracking-wider text-white transition-all duration-500 bg-brand-secondary border border-brand-secondary hover:bg-brand-secondary-dark shadow-sm"
            >
              <span className="relative z-10 flex items-center font-medium">
                <CalendarCheck className="mr-3 h-5 w-5" />
                Rezervovat termín
              </span>
            </Link>
            <Link
              href="/kontakt"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-sm font-sans text-sm tracking-wider text-brand-black transition-all duration-500 group bg-transparent border border-brand-secondary/50 hover:border-brand-secondary/80"
            >
              <span className="relative z-10 flex items-center font-medium">
                Kontaktujte nás
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-secondary group-hover:w-[calc(100%-20px)] transition-all duration-700 ease-out"></span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
