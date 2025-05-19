import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Děkujeme za vaši zprávu | Aura Beauty Salon',
  description: 'Vaše zpráva byla úspěšně odeslána. Děkujeme za kontaktování Aura Beauty Salon.',
};

export default function ThankYouPage() {
  return (
    <main className="bg-[#F5F3F0] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-[#E6CCB2]" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-light text-brand-black mb-6">
            Děkujeme za vaši zprávu
          </h1>
          
          <div className="h-[1px] w-16 bg-[#E6CCB2] mx-auto mb-8"></div>
          
          <div className="bg-white shadow-md border border-[#E6CCB2]/40 rounded-sm overflow-hidden p-8 mb-8">
            <p className="text-lg mb-4">
              Vaše zpráva byla úspěšně odeslána. Budeme vás kontaktovat co nejdříve.
            </p>
            <p className="text-[#121212]/80 mb-6">
              Děkujeme za váš zájem o služby Aura Beauty Salon.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/" 
              className="bg-[#E6CCB2] hover:bg-[#D8C3B0] text-[#121212] font-light py-3 px-8 rounded-sm transition-all duration-300 border-2 border-[#E6CCB2] inline-flex items-center text-sm tracking-wide shadow-sm"
            >
              Zpět na úvodní stránku
            </Link>
            
            <Link 
              href="/kontakt" 
              className="bg-transparent hover:bg-[#F5F3F0] text-[#121212] font-light py-3 px-8 rounded-sm transition-all duration-300 border-2 border-[#E6CCB2] inline-flex items-center text-sm tracking-wide shadow-sm"
            >
              Zpět na kontakt
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
