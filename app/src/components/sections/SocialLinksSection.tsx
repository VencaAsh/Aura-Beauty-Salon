import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/constants';

export default function SocialLinksSection() {
  return (
    <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
      {/* Jemné pozadí */}
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-[#E6CCB2]/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] rounded-full bg-[#E6CCB2]/5 blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-4 tracking-wide text-[#121212]">Sledujte nás</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6"></div>
          <p className="text-[#121212]/70 font-light max-w-2xl mx-auto">
            Sledujte nás na sociálních sítích, kde pravidelně zveřejňujeme novinky, tipy na péči a inspiraci
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#E6CCB2]/20 p-8 md:p-12 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instagram */}
            <div className="group flex flex-col items-center text-center p-6 border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 transition-all duration-500 rounded-sm">
              <div className="w-16 h-16 flex items-center justify-center border border-[#E6CCB2]/20 rounded-full mb-6 group-hover:bg-[#E6CCB2]/10 transition-all duration-500">
                <FaInstagram size={24} className="text-[#121212]" />
              </div>
              <h3 className="text-xl font-serif font-light mb-4 text-[#121212]">Instagram</h3>
              <p className="text-[#121212]/70 mb-6 font-light">
                Sledujte naše nejnovější práce, inspirace a zákulisní momenty ze salonu
              </p>
              <a
                href="https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-3 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
              >
                Sledovat na Instagramu
              </a>
            </div>

            {/* Facebook */}
            <div className="group flex flex-col items-center text-center p-6 border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 transition-all duration-500 rounded-sm">
              <div className="w-16 h-16 flex items-center justify-center border border-[#E6CCB2]/20 rounded-full mb-6 group-hover:bg-[#E6CCB2]/10 transition-all duration-500">
                <FaFacebookF size={24} className="text-[#121212]" />
              </div>
              <h3 className="text-xl font-serif font-light mb-4 text-[#121212]">Facebook</h3>
              <p className="text-[#121212]/70 mb-6 font-light">
                Sledujte naše akce, novinky a speciální nabídky na Facebooku
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61573920463799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-3 px-6 rounded-sm transition-all duration-300 text-sm tracking-wide"
              >
                Sledovat na Facebooku
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
