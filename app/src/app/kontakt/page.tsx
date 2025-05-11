import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { BRANCHES } from '@/constants';

export const metadata: Metadata = {
  title: 'Kontakt | Aura Beauty Salon',
  description: 'Kontaktujte Aura Beauty Salon pro objednání kosmetických služeb, péče o řasy a obočí. Najdete nás na adresách v Brně a Praze.',
};

// Používáme pobočky z konstant

export default function KontaktPage() {
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
            <h1 className="text-3xl md:text-4xl font-serif font-light text-brand-black mb-6">Kontakt</h1>
            <div className="h-[1px] w-16 bg-brand-secondary mx-auto mb-6"></div>
            <p className="text-center text-[#121212] mb-0 max-w-2xl mx-auto font-light">
              Máte dotaz, přání nebo se chcete objednat? Neváhejte nás kontaktovat! Jsme vám k dispozici na všech našich pobočkách.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">

        {/* Pobočka */}
        <h2 className="text-2xl md:text-3xl font-serif font-light mb-10 text-[#121212] text-center">Naše pobočka</h2>
        <div className="mb-20 max-w-3xl mx-auto">
          <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <h3 className="text-xl font-serif font-light text-[#121212] mb-5 pb-3 border-b border-[#E6CCB2]/40">{BRANCHES[0].name}</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#C9B8A8] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-[#121212] text-sm uppercase tracking-wider mb-2">Adresa</h4>
                      <p className="text-[#121212] font-light">{BRANCHES[0].address}</p>
                      <a
                        href={BRANCHES[0].mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C9B8A8] hover:text-[#121212] text-sm inline-flex items-center mt-2 transition-colors duration-300"
                      >
                        Zobrazit na mapě
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#C9B8A8] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-[#121212] text-sm uppercase tracking-wider mb-2">Telefon</h4>
                      <a
                        href={`tel:${BRANCHES[0].phone.replace(/\s/g, '')}`}
                        className="text-[#121212] hover:text-[#C9B8A8] transition-colors duration-300 font-light"
                      >
                        {BRANCHES[0].phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#C9B8A8] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-[#121212] text-sm uppercase tracking-wider mb-2">E-mail</h4>
                      <a
                        href={`mailto:${BRANCHES[0].email}`}
                        className="text-[#121212] hover:text-[#C9B8A8] transition-colors duration-300 font-light"
                      >
                        {BRANCHES[0].email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C9B8A8] mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-[#121212] text-sm uppercase tracking-wider mb-2">Otevírací doba</h4>
                      <p className="text-[#121212] font-light">
                        {BRANCHES[0].hours.weekdays}<br />
                        {BRANCHES[0].hours.saturday}<br />
                        {BRANCHES[0].hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Kontaktní formulář */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#121212]">Napište nám</h2>
            <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden">
              <ContactForm />
            </div>
          </div>

          {/* Doplňující informace */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#121212]">Sledujte nás</h2>
              <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden p-8">
                <p className="text-[#121212] mb-8 font-light">
                  Sledujte nás na sociálních sítích, kde pravidelně zveřejňujeme novinky, tipy na péči a inspiraci.
                </p>
                <a
                  href="https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-transparent border-2 border-[#E6CCB2] text-[#121212] hover:bg-[#E6CCB2]/20 font-light py-3 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-5 w-5 text-[#C9B8A8]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Aura Beauty Salon
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#121212]">Rezervace</h2>
              <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden p-8">
                <p className="text-[#121212] mb-8 font-light">
                  Chcete si rezervovat termín? Využijte náš online rezervační systém nebo nás kontaktujte telefonicky.
                </p>
                <Link
                  href="/rezervace"
                  className="inline-flex items-center bg-[#E6CCB2] hover:bg-[#D8C3B0] text-[#121212] font-light py-3 px-6 rounded-sm transition-all duration-300 border border-[#E6CCB2] text-sm tracking-wide shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Rezervovat termín
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
