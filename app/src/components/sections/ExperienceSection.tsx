import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Levá strana - Text */}
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-[#121212]">
              Zážitek
            </h2>

            <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mb-8"></div>

            <p className="text-[#121212]/80 mb-6 font-light leading-relaxed">
              V Aura Beauty Salon věříme, že péče o sebe je více než jen rutina – je to okamžik, kdy se sebepéče setkává s eleganci. Naše ošetření jsou navržena tak, aby vytvořila harmonii mezi tělem a mysli, a poskytla vám prostor, kde můžete zpomalit, nadechnout se a vychutnat si moment klidu v dnešním hektickém světě.
            </p>

            <p className="text-[#C9B8A8] font-light">
              Každý detail našeho salonu je pečlivě navržen tak, aby vytvořil atmosféru, kde se luxus setkává s jednoduchosti a kde se můžete cítit uvolněně a zároveň výjimečně.
            </p>
          </div>

          {/* Pravá strana - Obrázek */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] bg-[#E6CCB2]/20 relative overflow-hidden">
              {/* Skutečný obrázek */}
              <Image
                src="/images/gallery/gallery-1.jpg"
                alt="Profesionální kosmetické ošetření"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Jemný overlay pro lepší kontrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E6CCB2]/5 to-[#D8C3B0]/10 mix-blend-multiply"></div>

              {/* Jemný rámeček */}
              <div className="absolute inset-4 border border-[#C9B8A8]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
