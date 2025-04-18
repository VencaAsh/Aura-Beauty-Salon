import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Náš tým | Aura Beauty Salon',
  description: 'Seznamte se s naším týmem profesionálů, kteří se postarají o vaši krásu a pohodu.',
};

// Data pro majitelku salonu
const teamMember = {
  id: '1',
  name: 'Alexandra Makrushyna',
  position: 'Majitelka & Kosmetička',
  bio: 'Makrushyna je zakladatelkou a majitelkou Aura Beauty Salonu s více než 15 lety zkušeností v oblasti kosmetiky a wellness. Specializuje se na luxusní ošetření pleti, anti-aging procedury a holístický přístup ke kráse. Její vášeň pro dokonalost a individuální přístup ke každému klientovi z ní dělá vyhledávanou odbornici v oboru.',
  image: '/images/team/makrushyna.jpeg',
  phone: '+420 777 123 456',
  email: 'makrushyna@aurabeauty.cz',
  branch: 'Brno - Řečkovice',
  specializations: ['Luxusní kosmetika', 'Anti-aging procedury', 'Přístrojové ošetření', 'Masáže'],
  education: [
    'Certifikovaná kosmetička s mezinárodním diplomem CIDESCO',
    'Specialistka na anti-aging procedury',
    'Absolventka kurzů pokročilých technik v péči o pleť',
    'Certifikace v oblasti luxusní kosmetiky a wellness'
  ],
  philosophy: 'Věřím, že skutečná krása vychází zevnitř. Mým cílem je nejen zlepšit vzhled vaší pleti, ale také vám pomoci cítit se sebevědoměji a harmonicky. Každé ošetření je pro mě příležitostí vytvořit jedinečný zážitek přizpůsobený vašim potřebám.'
};

export default function TeamPage() {
  return (
    <main>
      <Breadcrumbs />
      {/* Hero sekce */}
      <section className="relative overflow-hidden bg-brand-secondary-light py-24">
        {/* Dekorativní prvky */}
        <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-brand-secondary/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-brand-secondary/10 blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-brand-black mb-6">O majitelce</h1>
            <div className="h-[1px] w-16 bg-brand-secondary mx-auto mb-6"></div>
            <p className="text-center text-brand-secondary-dark mb-0 max-w-2xl mx-auto font-light">
              Poznejte zakladatelku a majitelku Aura Beauty Salonu, její příběh, odbornost a filozofii. Její vášeň pro krásu a wellness se odráží v každém detailu našeho salonu a v péči, kterou věnuje svým klientům.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Profil majitelky */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Levá strana - fotografie */}
            <div className="w-full lg:w-2/5 relative">
              <div className="max-w-sm mx-auto lg:mx-0 aspect-square relative overflow-hidden rounded-sm">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-brand-secondary/20 rounded-sm z-[-1] hidden lg:block"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-brand-secondary/20 rounded-sm z-[-1] hidden lg:block"></div>
            </div>

            {/* Pravá strana - informace */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-brand-black">{teamMember.name}</h2>
              <p className="text-brand-secondary mb-6 text-lg">{teamMember.position}</p>
              <div className="h-[1px] w-16 bg-brand-secondary/50 mb-8"></div>

              <div className="space-y-10">
                {/* Bio */}
                <div>
                  <p className="text-brand-secondary-dark leading-relaxed mb-6">{teamMember.bio}</p>
                  <p className="text-brand-secondary-dark leading-relaxed italic">{teamMember.philosophy}</p>
                </div>

                {/* Specializace */}
                <div>
                  <h3 className="text-2xl font-serif font-light mb-4 text-brand-black">Specializace</h3>
                  <div className="flex flex-wrap gap-3">
                    {teamMember.specializations.map((specialization, index) => (
                      <span key={index} className="px-5 py-2 bg-brand-secondary-light/50 text-brand-secondary-dark text-sm rounded-sm transition-all hover:bg-brand-secondary/10">
                        {specialization}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vzdělání */}
                <div>
                  <h3 className="text-2xl font-serif font-light mb-4 text-brand-black">Vzdělání & Certifikace</h3>
                  <ul className="list-disc ml-5 space-y-3 text-brand-secondary-dark">
                    {teamMember.education.map((item, index) => (
                      <li key={index} className="pl-1">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Kontakt */}
                <div>
                  <h3 className="text-2xl font-serif font-light mb-4 text-brand-black">Kontakt</h3>
                  <div className="space-y-3">
                    <a href={`tel:${teamMember.phone.replace(/\s/g, '')}`} className="flex items-center text-brand-secondary-dark hover:text-brand-secondary transition-colors duration-300">
                      <Phone className="w-5 h-5 mr-4" />
                      {teamMember.phone}
                    </a>
                    <a href={`mailto:${teamMember.email}`} className="flex items-center text-brand-secondary-dark hover:text-brand-secondary transition-colors duration-300">
                      <Mail className="w-5 h-5 mr-4" />
                      {teamMember.email}
                    </a>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-4 mt-0.5" />
                      <span className="text-brand-secondary-dark">{teamMember.branch}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA sekce */}
        <div className="bg-brand-secondary-light border border-brand-secondary/20 p-12 md:p-16 mt-32 text-center rounded-sm shadow-sm">
          <h2 className="text-3xl font-serif font-light mb-4 text-brand-black">Rezervujte si konzultaci</h2>
          <div className="h-[1px] w-20 bg-brand-secondary/50 mx-auto mb-8"></div>
          <p className="mb-12 max-w-2xl mx-auto text-brand-secondary-dark font-light text-lg">
            Chtěli byste se dozvědět více o našich službách nebo si rezervovat osobní konzultaci? Neváhejte nás kontaktovat. Těšíme se na vaši návštěvu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rezervace"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-sm font-sans text-sm tracking-wider text-white transition-all duration-500 bg-brand-secondary border border-brand-secondary hover:bg-brand-secondary-dark shadow-sm"
            >
              <span className="relative z-10 flex items-center font-medium">
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
