import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galerie - Aura Beauty Salon | Kosmetika, Řasy a Obočí',
  description: 'Prohlédněte si fotografie našich prací v oblasti kosmetiky, péče o řasy a obočí. Výsledky laminace obočí, prodlužování řas a kosmetických ošetření.',
};

// Importy obrázků
import galleryImage1 from '@/assets/images/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png';
import galleryImage2 from '@/assets/images/20250418_1148_Grainy Filtered Eye_remix_01js44nzzwe45bymjg9mhqg886-min.png';
import galleryImage3 from '@/assets/images/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png';
// Náhledový obrázek pro galerii
import galleryPreview from '../../../public/images/gallery/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk.png';

// Data pro galerii
const galleryItems = [
  { id: 1, title: 'Kosmetické ošetření pleti', category: 'kosmetika', image: galleryImage1 },
  { id: 2, title: 'Výsledek po ošetření', category: 'kosmetika', image: galleryImage2 },
  { id: 3, title: 'Ošetření problematické pleti', category: 'kosmetika', image: galleryImage3 },
  { id: 4, title: 'Anti-age ošetření', category: 'kosmetika', image: galleryImage1 },
  { id: 5, title: 'Pánská kosmetika', category: 'kosmetika', image: galleryImage2 },
  { id: 6, title: 'Laminace obočí - před a po', category: 'oboci', image: galleryImage3 },
  { id: 7, title: 'Barvení obočí - před a po', category: 'oboci', image: galleryImage1 },
  { id: 8, title: 'Úprava obočí', category: 'oboci', image: galleryImage2 },
  { id: 9, title: 'Prodlužování řas - před a po', category: 'rasy', image: galleryImage3 },
  { id: 10, title: 'Lash lifting - před a po', category: 'rasy', image: galleryImage1 },
  { id: 11, title: 'Interiér salonu', category: 'salon', image: galleryImage2 },
  { id: 12, title: 'Používaná kosmetika', category: 'produkty', image: galleryImage3 },
];

export default function GaleriePage() {
  return (
    <main className="bg-[#F5F3F0]">
      <Breadcrumbs />

      <PageHero
        title="Galerie"
        subtitle="Prohlédněte si fotografie našich prací, interiéru salonu a výsledků našich služeb. Přesvědčte se o kvalitě, kterou nabízíme."
        backgroundClass="bg-[#F8F4E9]"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Filtry kategorií */}
        <div className="mb-12 bg-white shadow-sm rounded-sm border border-[#E6CCB2]/30 p-4 max-w-5xl mx-auto">
          <h3 className="text-center text-sm uppercase tracking-wider text-[#121212]/70 mb-4 font-medium">Vyberte kategorii</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#" className="px-4 py-2 bg-[#E6CCB2] text-[#121212] rounded-sm hover:bg-[#E6CCB2]/80 transition-all duration-300 text-sm font-light tracking-wide">
              Všechny fotografie
            </a>
            {['Kosmetika', 'Obočí', 'Řasy', 'Salon', 'Produkty'].map((category, index) => (
              <a
                key={index}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-transparent text-[#121212] border border-[#E6CCB2]/50 rounded-sm hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 transition-all duration-300 text-sm font-light tracking-wide"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-sm shadow-md hover:shadow-lg transition-all duration-500 bg-white border border-[#E6CCB2]/20">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="p-5 border-t border-[#E6CCB2]/20">
                <h3 className="text-lg font-medium text-[#121212] mb-1">{item.title}</h3>
                <p className="text-sm text-brand-secondary-dark capitalize">{item.category.replace('-', ' ')}</p>
              </div>
            </div>
          ))}
        </div>



        {/* Instagram odkaz */}
        <div className="text-center mt-16 bg-white p-8 rounded-sm shadow-sm border border-[#E6CCB2]/30 max-w-3xl mx-auto">
          <h3 className="text-xl font-serif font-light mb-4 text-[#121212]">Sledujte nás na Instagramu</h3>
          <p className="text-[#121212]/70 mb-6 font-light">
            Pro více fotografií a aktuální novinky sledujte náš Instagram profil.
          </p>
          <a
            href="https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-3 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
          >
            <Camera className="mr-3 h-5 w-5 text-[#C9B8A8]" />
            Aura Beauty Salon
          </a>
        </div>
      </div>
    </main>
  );
}
