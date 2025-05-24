"use client";

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { Camera } from 'lucide-react';

// Metadata is now in a separate file

// Importy obrázků
import galleryImage1 from '@/assets/images/gallery/IMG_0719-min.webp';
import galleryImage2 from '@/assets/images/gallery/IMG_0790-min.webp';
import galleryImage3 from '@/assets/images/gallery/IMG_0981-min.webp';
import galleryImage4 from '@/assets/images/gallery/IMG_0984-min.webp';
import galleryImage5 from '@/assets/images/gallery/IMG_0985-min.webp';
import galleryImage6 from '@/assets/images/gallery/IMG_2886-min.webp';
import galleryImage7 from '@/assets/images/gallery/IMG_3177-min.webp';
import galleryImage8 from '@/assets/images/gallery/IMG_9531-min.webp';
import galleryImage9 from '@/assets/images/gallery/IMG_3044-min.webp';
import galleryImage10 from '@/assets/images/gallery/IMG_3178-min.webp';
import galleryImage11 from '@/assets/images/gallery/IMG_1158-min.webp';
import galleryImage12 from '@/assets/images/gallery/IMG_9512-min.webp';
import galleryImage13 from '@/assets/images/gallery/IMG_9769-min.webp';
import galleryImage14 from '@/assets/images/gallery/IMG_9991-min.webp';
import galleryImage15 from '@/assets/images/gallery/IMG_3289-min.webp';
// Náhledový obrázek pro galerii byl odstraněn, protože se nepoužívá

// Data pro galerii
const galleryItems = [
  { id: 1, title: 'Rozjasnění', category: 'kosmetika', image: galleryImage1 },
  { id: 2, title: 'Rozjasněná pleť po hydratačním ošetření', category: 'kosmetika', image: galleryImage2 },
  { id: 3, title: 'Speciální péče pro problematickou pleť', category: 'kosmetika', image: galleryImage14 },
  { id: 4, title: 'Hloubkové čištění s ultrazvukovou špachtlí', category: 'kosmetika', image: galleryImage11 },
  { id: 5, title: 'Laminace obočí - výrazná proměna', category: 'oboci', image: galleryImage6 },
  { id: 6, title: 'Precizní barvení a úprava obočí', category: 'oboci', image: galleryImage7 },
  { id: 7, title: 'Architektura obočí podle tvaru obličeje', category: 'oboci', image: galleryImage8 },
  { id: 8, title: 'Prodloužení řas', category: 'rasy', image: galleryImage15 },
  { id: 9, title: 'Elegantní odpočinkový prostor salonu', category: 'salon', image: galleryImage5 },
  { id: 10, title: 'Ošetřovací lůžko s osvětlením', category: 'salon', image: galleryImage3 },
  { id: 11, title: 'Kosmetický koutek s profesionální péčí o pleť', category: 'salon', image: galleryImage4 },


];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Mapování českých názvů kategorií na hodnoty v datech
  const categoryMapping: Record<string, string> = {
    'Kosmetika': 'kosmetika',
    'Obočí': 'oboci',
    'Řasy': 'rasy',
    'Salon': 'salon',
    'Produkty': 'produkty'
  };

  // Filtrování položek galerie podle aktivního filtru
  const filteredItems = activeFilter
    ? galleryItems.filter(item => item.category === categoryMapping[activeFilter])
    : galleryItems;

  // Funkce pro nastavení aktivního filtru
  const handleFilterClick = (category: string | null) => {
    setActiveFilter(category);
  };

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
            <button
              onClick={() => handleFilterClick(null)}
              className={`px-4 py-2 rounded-sm text-sm font-light tracking-wide transition-all duration-300 ${
                activeFilter === null
                  ? 'bg-[#E6CCB2] text-[#121212] hover:bg-[#E6CCB2]/80'
                  : 'bg-transparent text-[#121212] border border-[#E6CCB2]/50 hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10'
              }`}
            >
              Všechny fotografie
            </button>
            {['Kosmetika', 'Obočí', 'Řasy', 'Salon', 'Produkty'].map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 rounded-sm text-sm font-light tracking-wide transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#E6CCB2] text-[#121212] hover:bg-[#E6CCB2]/80'
                    : 'bg-transparent text-[#121212] border border-[#E6CCB2]/50 hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
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
