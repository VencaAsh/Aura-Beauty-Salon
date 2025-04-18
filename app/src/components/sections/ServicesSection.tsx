import Link from 'next/link';
import { SERVICES } from '@/constants';
import { FadeInView, SmoothReveal } from '@/components/animations';

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
                {/* Minimalistická ikona */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <ServiceIcon type={service.icon} />
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

// Komponenta pro ikony služeb
function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case 'facial':
      return (
        <svg className="w-10 h-10 text-[#C9B8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
        </svg>
      );
    case 'brows':
      return (
        <svg className="w-10 h-10 text-[#C9B8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      );
    case 'lashes':
      return (
        <svg className="w-10 h-10 text-[#C9B8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10 text-[#C9B8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      );
  }
}
