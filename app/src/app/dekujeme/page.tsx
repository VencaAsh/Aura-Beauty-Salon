import React from 'react';
import Link from 'next/link';
import { CheckCircle, Home, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';

export const metadata = {
  title: 'Děkujeme za zprávu | Aura Beauty Salon',
  description: 'Děkujeme za odeslání kontaktního formuláře. Brzy se vám ozveme.',
};

export default function ThankYouPage() {
  return (
    <main className="bg-[#F5F3F0] min-h-screen">
      <Breadcrumbs />

      <PageHero
        title="Děkujeme"
        backgroundClass="bg-[#f1ede6]"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden p-12 text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="h-16 w-16 text-[#C9B8A8]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-[#121212]">
            Vaše zpráva byla úspěšně odeslána
          </h2>

          <p className="text-[#121212] mb-10 font-light">
            Děkujeme za Vaši zprávu.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#E6CCB2] hover:bg-[#D8C3B0] text-[#121212] font-light py-3 px-8 rounded-sm transition-all duration-300 border border-[#E6CCB2] text-sm tracking-wide shadow-sm"
            >
              <Home className="mr-2 h-5 w-5" />
              Zpět na úvodní stránku
            </Link>

            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-transparent border-2 border-[#E6CCB2] text-[#121212] hover:bg-[#E6CCB2]/20 font-light py-3 px-8 rounded-sm transition-all duration-300 text-sm tracking-wide"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zpět na kontakt
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
