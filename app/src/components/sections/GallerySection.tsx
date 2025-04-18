import Link from 'next/link';
import Image from 'next/image';

// Definice typu pro galerii
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

// Obrázky pro galerii
const galleryImages: GalleryImage[] = [
  {
    id: 'img1',
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Péče o řasy a obočí',
    caption: 'Péče o řasy'
  },
  {
    id: 'img2',
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Kosmetické ošetření pleti',
    caption: 'Péče o pleť'
  },
  {
    id: 'img3',
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Profesionální kosmetické ošetření',
    caption: 'Kosmetické ošetření'
  },
  // Doplňující placeholdery pro zachování designu
  {
    id: 'img4',
    src: '/images/gallery/gallery-1.jpg', // Opakujeme první obrázek
    alt: 'Péče o řasy a obočí',
    caption: 'Lash lifting'
  },
  {
    id: 'img5',
    src: '/images/gallery/gallery-2.jpg', // Opakujeme druhý obrázek
    alt: 'Kosmetické ošetření pleti',
    caption: 'Hloubkové čištění'
  },
  {
    id: 'img6',
    src: '/images/gallery/gallery-3.jpg', // Opakujeme třetí obrázek
    alt: 'Profesionální kosmetické ošetření',
    caption: 'Laminace obočí'
  }
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
      {/* Jemné pozadí a dekorativní prvky */}
      <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-4 tracking-wide text-[#121212]">Galerie</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6"></div>
          <p className="text-[#121212]/70 font-light max-w-2xl mx-auto">
            Nahlédněte do našeho světa krásy a elegance prostřednictvím fotografií zachycujících naši práci a prostředí
          </p>
        </div>

        {/* Galerie obrázků */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden bg-[#E6CCB2]/10 aspect-square">
              {/* Skutečný obrázek */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority={image.id === 'img1' || image.id === 'img2' || image.id === 'img3'}
              />

              {/* Overlay s popiskem */}
              <div className="absolute inset-0 bg-[#121212]/0 group-hover:bg-[#121212]/20 transition-all duration-500 flex items-end justify-start p-6">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-light tracking-wider">{image.caption}</p>
                </div>
              </div>

              {/* Jemný rámeček */}
              <div className="absolute inset-4 border border-[#C9B8A8]/0 group-hover:border-[#C9B8A8]/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Odkaz na celou galerii */}
        <div className="text-center mt-16">
          <Link
            href="/galerie"
            className="relative inline-block group overflow-hidden"
          >
            <span className="relative z-10 inline-flex items-center font-light tracking-widest text-xs uppercase py-3 px-10 border border-[#C9B8A8]/50 transition-all duration-500">
              <span>Zobrazit celou galerii</span>
              <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#C9B8A8]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-[#121212] font-light tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <span>Zobrazit celou galerii</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
