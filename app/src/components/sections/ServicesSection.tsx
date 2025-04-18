import Link from 'next/link';
import { SERVICES } from '@/constants';
import { FadeInView, SmoothReveal } from '@/components/animations';
import { CustomServiceIcon } from '@/components/ui';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Jemné pozadí */}
      <div className="absolute inset-0 bg-[#F9F7F5]/50 z-0"></div>

      {/* Dekorativní prvky - jemnější */}
      <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView direction="up" className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-4 tracking-wide text-[#121212]">Naše služby</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-2">
            <SmoothReveal direction="left" duration={1500}>
              <div className="h-full w-full bg-[#C9B8A8]/50"></div>
            </SmoothReveal>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <FadeInView
              key={service.id}
              direction="up"
              delay={300 + index * 150}
              duration={800}
            >
              <div className="group transition-all duration-500 border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 p-8 h-full">
                {/* Vlastní ikona */}
                <div className="w-10 h-10 mb-6 flex items-center justify-center">
                  <CustomServiceIcon type={service.icon} />
                </div>

                {/* Název služby */}
                <h3 className="text-lg font-light mb-3 text-[#121212]">{service.title}</h3>

                <div className="w-8 h-[1px] bg-[#E6CCB2]/30 mb-4">
                  <SmoothReveal direction="left" duration={1000} delay={500 + index * 100}>
                    <div className="h-full w-full bg-[#E6CCB2]/30"></div>
                  </SmoothReveal>
                </div>

                <p className="text-[#121212]/70 font-light mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="flex space-x-4 mt-auto">
                  <Link
                    href="/sluzby"
                    className="text-xs font-light tracking-wider inline-flex items-center text-[#121212] hover:text-[#C9B8A8] transition-colors duration-300 group"
                  >
                    <span>Více informací</span>
                    <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/rezervace"
                    className="text-xs font-light tracking-wider inline-flex items-center text-[#C9B8A8] hover:text-[#121212] transition-colors duration-300"
                  >
                    <span>Rezervovat</span>
                  </Link>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView direction="up" delay={800} className="text-center mt-16">
          <Link
            href="/sluzby"
            className="relative inline-block group overflow-hidden"
          >
            <span className="relative z-10 inline-flex items-center font-light tracking-widest text-xs uppercase py-3 px-10 border border-[#C9B8A8]/50 transition-all duration-500">
              <span>Zobrazit všechny služby</span>
              <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#C9B8A8]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-[#121212] font-light tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <span>Zobrazit všechny služby</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}

// Původní komponenta pro ikony služeb byla nahrazena komponentou CustomServiceIcon
