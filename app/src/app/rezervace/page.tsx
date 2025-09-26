import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { CalendarCheck, Clock, CheckCircle, Phone, Mail, Info } from 'lucide-react';
import NoonaReservation from '@/components/NoonaReservation';

export const metadata = {
  title: 'Online rezervace | Aura Beauty Salon',
  description: 'Rezervujte si termín v našem salonu online. Vyberte si službu, specialistu a termín, který vám vyhovuje.',
};

export default function ReservationPage() {
  return (
    <main className="bg-[#F5F3F0]">
      <Breadcrumbs />

      <PageHero
        title="Rezervace"
        subtitle="Rezervujte si termín v našem salonu online. Vyberte si službu, specialistu a termín, který vám vyhovuje."
        backgroundClass="bg-[#f1ede6]"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-[#C9B8A8]">
              <CalendarCheck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-light text-[#121212] mb-3">Jednoduchá rezervace</h3>
            <p className="text-[#121212]/70 font-light">
              Vyberte si službu, specialistu a termín, který vám vyhovuje, a rezervujte si návštěvu online.
            </p>
          </div>

          <div className="bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-[#C9B8A8]">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-light text-[#121212] mb-3">Flexibilní termíny</h3>
            <p className="text-[#121212]/70 font-light">
              Nabízíme širokou škálu termínů od pondělí do pátku, abyste si mohli vybrat ten, který vám nejlépe vyhovuje.
            </p>
          </div>

          <div className="bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-[#C9B8A8]">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-light text-[#121212] mb-3">Okamžité potvrzení</h3>
            <p className="text-[#121212]/70 font-light">
              Po dokončení rezervace obdržíte okamžité potvrzení e-mailem s detaily vaší návštěvy.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white shadow-lg border border-[#E6CCB2]/30 rounded-sm overflow-hidden mb-16">
          <div className="p-6 border-b border-[#E6CCB2]/30 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-serif font-light text-[#121212] mb-3 md:mb-0">Online rezervační systém</h2>
            <div className="text-sm text-[#121212]/70 font-light">
              <span className="inline-flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#C9B8A8]" />
                Otevíraci doba: Po-Pá 11:00-20:00
              </span>
            </div>
          </div>
          <div className="p-0 md:p-2 bg-[#f1ede6]/30">
            <div className="bg-white rounded-sm overflow-hidden">
              <NoonaReservation />
            </div>
          </div>
          <div className="p-4 border-t border-[#E6CCB2]/30 bg-[#f1ede6]/20">
            <div className="flex items-center justify-center text-sm text-[#121212]/70 font-light">
              <Info className="w-4 h-4 mr-2 text-[#C9B8A8]" />
              <span>Rezervační systém je poskytován službou Noona</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-md border border-[#E6CCB2]/30 rounded-sm overflow-hidden p-8 text-center">
          <h2 className="text-2xl font-serif font-light mb-4 text-[#121212]">Potřebujete pomoc s rezervací?</h2>
          <p className="mb-8 text-[#121212]/70 font-light max-w-2xl mx-auto">
            Pokud máte jakékoliv dotazy nebo potřebujete pomoc s rezervací, neváhejte nás kontaktovat telefonicky nebo e-mailem.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="tel:+420773054563"
              className="inline-flex items-center bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] font-light py-3 px-6 rounded-sm transition-all duration-300 border border-[#E6CCB2]/20 text-sm tracking-wide"
            >
              <Phone className="mr-3 h-5 w-5 text-[#C9B8A8]" />
              +420 773 054 563
            </a>
            <a
              href="mailto:alexandramak@seznam.cz"
              className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-3 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
            >
              <Mail className="mr-3 h-5 w-5 text-[#C9B8A8]" />
              alexandramak@seznam.cz
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
