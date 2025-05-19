import { Suspense } from 'react';
import Link from 'next/link';
import SimpleContactForm from '@/components/SimpleContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontaktní formulář | Aura Beauty Salon',
  description: 'Kontaktujte Aura Beauty Salon v Ostravě pomocí našeho kontaktního formuláře.',
};

export default function KontaktFormularPage() {
  return (
    <main className="bg-[#F5F3F0] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-brand-black mb-6 text-center">Kontaktní formulář</h1>
          <div className="h-[1px] w-16 bg-[#E6CCB2] mx-auto mb-8"></div>
          
          <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden mb-8">
            <Suspense fallback={<div className="p-8">Načítání formuláře...</div>}>
              <SimpleContactForm />
            </Suspense>
          </div>
          
          <div className="text-center">
            <Link 
              href="/kontakt" 
              className="inline-flex items-center text-[#121212] hover:text-[#C9B8A8] transition-colors duration-300"
            >
              &larr; Zpět na stránku kontaktu
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
