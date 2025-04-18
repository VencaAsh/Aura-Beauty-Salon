// import Image from 'next/image';

// Definice typu pro recenze
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  imageSrc: string;
}

// Data recenzí
const testimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    quote: 'Návštěva Aura Beauty Salon je vždy jako malý útěk od reality. Péče o obočí je naprosto precizní a výsledek vydrží neuvěřitelně dlouho. Miluji ten pocit, když odcházím a cítím se krásná a sebevědomá.',
    author: 'Karolína M.',
    role: 'Stálá klientka',
    imageSrc: '/images/testimonials/testimonial-1.jpg'
  },
  {
    id: 'testimonial2',
    quote: 'Konečně jsem našla salon, kde se cítím jako doma. Atmosféra je uklidňující, personál profesionální a výsledky vždy překonají moje očekávání. Jejich péče o pleť s korejskou kosmetikou je něco, co musíte zažít!',
    author: 'Tereza K.',
    role: 'Klientka již 2 roky',
    imageSrc: '/images/testimonials/testimonial-2.jpg'
  },
  {
    id: 'testimonial3',
    quote: 'Prodlužování řas v Aura Beauty Salon je naprostá špička. Řasy jsou lehké, přirozené a vydrží neuvěřitelně dlouho. Oceňuji individuální přístup a pečlivost, se kterou se mi vždy věnují.',
    author: 'Martina V.',
    role: 'Nová klientka',
    imageSrc: '/images/testimonials/testimonial-3.jpg'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Jemné pozadí */}
      <div className="absolute inset-0 bg-[#F5F3F0]/30 z-0"></div>

      {/* Dekorativní prvky */}
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-[#E6CCB2]/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] rounded-full bg-[#E6CCB2]/5 blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-4 tracking-wide text-[#121212]">Recenze klientek</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6"></div>
          <p className="text-[#121212]/70 font-light max-w-2xl mx-auto">
            Přečtěte si, co o nás říkají naše klientky a jejich zkušenosti s našimi službami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-[#F9F7F5] p-8 rounded-sm border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 transition-all duration-500 flex flex-col items-center text-center relative"
            >
              {/* Jemný dekorativní prvek */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6CCB2]/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Uvozovky */}
              <div className="text-[#E6CCB2] text-4xl font-serif mb-4 opacity-30">&ldquo;</div>

              {/* Text recenze */}
              <p className="text-[#121212]/80 font-light italic mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Kruhová fotka */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E6CCB2]/20 mb-4 relative">
                {/* Zde by byl skutečný obrázek */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E6CCB2]/20 to-[#D8C3B0]/20"></div>

                {/* Placeholder text - odstranit při použití skutečných obrázků */}
                <div className="absolute inset-0 flex items-center justify-center text-[#C9B8A8]/30 text-xs tracking-widest">
                  <span>FOTO</span>
                </div>

                {/* <Image
                  src={testimonial.imageSrc}
                  alt={`Fotka ${testimonial.author}`}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Jméno a role */}
              <h4 className="text-[#121212] font-light text-base mb-1">{testimonial.author}</h4>
              {testimonial.role && (
                <p className="text-[#C9B8A8] text-xs tracking-wider">{testimonial.role}</p>
              )}

              {/* Jemná linka pod recenzí - viditelná pouze při hover */}
              <div className="h-[1px] w-0 bg-[#C9B8A8]/30 mt-6 group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
