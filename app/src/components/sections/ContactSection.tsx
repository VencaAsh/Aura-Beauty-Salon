import Link from 'next/link';
import { CONTACT_INFO } from '@/constants';

// Otevírací doba
const openingHours = [
  { day: 'Pondělí', hours: '11:00 - 20:00' },
  { day: 'Úterý', hours: '11:00 - 20:00' },
  { day: 'Středa', hours: '11:00 - 20:00' },
  { day: 'Čtvrtek', hours: '11:00 - 20:00' },
  { day: 'Pátek', hours: '11:00 - 20:00' },
  { day: 'Sobota', hours: 'Zavřeno' },
  { day: 'Neděle', hours: 'Zavřeno' }
];

// Sociální sítě
const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'instagram' },
  { name: 'Facebook', url: 'https://facebook.com/aurabeautysalon', icon: 'facebook' }
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
      {/* Jemné pozadí */}
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-[#E6CCB2]/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] rounded-full bg-[#E6CCB2]/5 blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-4 tracking-wide text-[#121212]">Kontakt</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6"></div>
          <p className="text-[#121212]/70 font-light max-w-2xl mx-auto">
            Navštivte nás v našem salonu nebo nás kontaktujte pro rezervaci termínu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Levá strana - Mapa a kontaktní informace */}
          <div className="flex flex-col">
            {/* Mapa */}
            <div className="aspect-[4/3] mb-8 relative overflow-hidden border border-[#E6CCB2]/20 rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.6714211929143!2d18.275112676587614!3d49.829840531854515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e338bb0afe21%3A0x340fb2aed411f544!2zVsOtdGtvdmlja8OhIDMwODAvMTAsIDcwMiAwMCBNb3JhdnNrw6EgT3N0cmF2YSBhIFDFmcOtdm96!5e0!3m2!1scs!2scz!4v1744911423660!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa lokace Aura Beauty Salon"
                className="absolute inset-0"
              ></iframe>

              {/* Odkaz na Google Maps */}
              <Link
                href="https://maps.google.com/?q=V%C3%ADtkovick%C3%A1+3080%2F10%2C+702+00+Ostrava"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 bg-white/90 text-[#121212] text-xs tracking-wider py-2 px-4 rounded-sm shadow-md hover:bg-white transition-colors duration-300"
              >
                Otevřít v Google Maps
              </Link>
            </div>


          </div>

          {/* Pravá strana - Otevírací doba a rezervační tlačítko */}
          <div className="flex flex-col">
            <div className="border border-[#E6CCB2]/20 p-8 mb-8">
              <h3 className="text-lg font-light mb-6 text-[#121212]">Otevírací doba</h3>

              <div className="space-y-3">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-[#121212]/80 font-light">{item.day}</span>
                    <span className="text-[#121212] font-light">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rezervační tlačítko */}
            <div className="text-center mt-8">
              <Link
                href="/rezervace"
                className="relative inline-block group overflow-hidden"
              >
                <span className="relative z-10 inline-flex items-center font-light tracking-widest text-xs uppercase py-3 px-10 border border-[#C9B8A8]/50 transition-all duration-500">
                  <span>Rezervovat termín</span>
                  <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#C9B8A8]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-[#121212] font-light tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <span>Rezervovat termín</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
