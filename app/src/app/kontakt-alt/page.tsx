import { Suspense } from 'react';
import FetchContactForm from '@/components/FetchContactForm';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { BRANCHES } from '@/constants';

export const metadata: Metadata = {
  title: 'Kontakt (Alternativní) | Kosmetický salon Ostrava - Laminace obočí, Řasy a Kosmetika',
  description: 'Kontaktujte Aura Beauty Salon v Ostravě pro objednání kosmetických služeb, laminace obočí, úpravy obočí, prodlužování řas a lash liftingu.',
};

export default function ContactPage() {
  // Získání informací o pobočce Ostrava
  const branch = BRANCHES.find(b => b.id === 'ostrava');

  if (!branch) {
    return <div>Pobočka nenalezena</div>;
  }

  return (
    <main className="bg-[#F5F3F0] min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Úvod', href: '/' },
          { label: 'Kontakt (Alternativní)', href: '/kontakt-alt' },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-center text-[#121212] mb-4">
            Kontaktujte nás
          </h1>
          <p className="text-center text-[#121212]/80 max-w-2xl mx-auto mb-12">
            Máte-li jakékoliv dotazy ohledně našich služeb nebo chcete-li si domluvit termín, neváhejte nás kontaktovat.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Kontaktní formulář */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#121212]">Napište nám</h2>
              <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden">
                <Suspense fallback={<div className="p-8">Načítání formuláře...</div>}>
                  <FetchContactForm />
                </Suspense>
              </div>
            </div>

            {/* Doplňující informace */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#121212]">Kde nás najdete</h2>

                <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 w-full h-64 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.7638259058283!2d18.2635344!3d49.8255611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e33a6c7f8b9d%3A0x7c2e3a0c7d5a5c0a!2zVsOtdGtvdmlja8OhIDMwODAvMTAsIDcwMiAwMCBPc3RyYXZh!5e0!3m2!1scs!2scz!4v1650000000000!5m2!1scs!2scz"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-[#C9B8A8] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-[#121212] mb-1">Adresa</h3>
                        <p className="text-[#121212]/80">
                          {branch.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-[#C9B8A8] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-[#121212] mb-1">Otevírací doba</h3>
                        <div className="grid grid-cols-1 gap-x-4 text-[#121212]/80">
                          <div className="flex justify-between py-1 border-b border-[#E6CCB2]/20">
                            <span className="font-medium">Pracovní dny</span>
                            <span>{branch.hours.weekdays}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-[#E6CCB2]/20">
                            <span className="font-medium">Sobota</span>
                            <span>{branch.hours.saturday}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-[#E6CCB2]/20">
                            <span className="font-medium">Neděle</span>
                            <span>{branch.hours.sunday}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-[#C9B8A8] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-[#121212] mb-1">Telefon</h3>
                        <p className="text-[#121212]/80">
                          <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-[#C9B8A8] transition-colors">
                            {branch.phone}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-[#C9B8A8] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-[#121212] mb-1">E-mail</h3>
                        <p className="text-[#121212]/80">
                          <a href={`mailto:${branch.email}`} className="hover:text-[#C9B8A8] transition-colors">
                            {branch.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-[#121212]">Rezervace</h2>
                <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden p-6">
                  <p className="text-[#121212]/80 mb-4">
                    Pro rezervaci termínu můžete využít náš online rezervační systém, zavolat nám nebo poslat e-mail.
                  </p>
                  <Link
                    href="/rezervace"
                    className="bg-[#E6CCB2] hover:bg-[#D8C3B0] text-[#121212] font-light py-3 px-8 rounded-sm transition-all duration-300 border-2 border-[#E6CCB2] inline-flex items-center text-sm tracking-wide shadow-sm"
                  >
                    Online rezervace
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
