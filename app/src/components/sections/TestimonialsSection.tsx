import React from 'react';

// Definice typu pro recenze
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  initials: string;
  bgColor: string;
}

// Data recenzí
const testimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    quote: 'Dnes jsem byla poprvé na kosmetice a rozhodně nelituji! Slečna je moc příjemná, prostředí salonu je pěkné a kromě krásně vyčištěné pleti jsem i super zrelaxovaná. Vřele doporučuji ❤️',
    author: 'Aneta Helešicová',
    role: 'Google recenze',
    initials: 'AH',
    bgColor: '#E6CCB2'
  },
  {
    id: 'testimonial2',
    quote: 'Byla jsem zde na lash lifting a musím říct, že jsem maximálně spokojená. Slečna je velice milá, prostředí moc příjemné, takže se sem budu určitě ráda vracet ✨',
    author: 'Klára Bártková',
    role: 'Google recenze',
    initials: 'KB',
    bgColor: '#D8C3B0'
  },
  {
    id: 'testimonial3',
    quote: 'Včera jsem zde byla na prodloužení řas metodou řasa na řasu a úpravu obočí a byla jsem naprosto nadšená ❤️. Ačkoliv se velmi nerada svěřuji do cizích rukou, zde jsem byla maximálně spokojená.',
    author: 'Karolína Kolková',
    role: 'Google recenze',
    initials: 'KK',
    bgColor: '#C9B8A8'
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

              {/* Stylizované iniciály */}
              <div
                className="w-16 h-16 rounded-full overflow-hidden mb-4 relative flex items-center justify-center"
                style={{
                  backgroundColor: `${testimonial.bgColor}20`,
                  borderColor: `${testimonial.bgColor}40`,
                  borderWidth: '2px',
                  borderStyle: 'solid'
                }}
              >
                <span className="text-sm font-light tracking-wider" style={{ color: testimonial.bgColor }}>
                  {testimonial.initials}
                </span>
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
