import Link from 'next/link';
import { BRANCHES } from '@/constants';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import CookieSettingsButton from '@/components/ui/CookieSettingsButton';
import { Logo } from '@/components/ui';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mainBranch = BRANCHES[0]; // Hlavní pobočka (Brno - Řečkovice)

  return (
    <footer className="bg-[#F5F3F0] text-[#121212] border-t border-[#E6CCB2]/20">
      <div className="container mx-auto py-20 px-4 md:px-8">
        {/* Horní část footeru */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 mb-12">
          {/* Logo a popis */}
          <div className="max-w-md">
            <div className="mb-8">
              <Logo
                width={160}
                height={38}
                mobileWidth={130}
                mobileHeight={31}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </div>
            <p className="text-sm text-[#121212]/70 font-light leading-relaxed mb-8">
              Profesionální kosmetický salon nabízející komplexní péči o pleť, řasy a obočí s důrazem na kvalitu a individuální přístup.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-[#E6CCB2]/30 flex items-center justify-center text-[#121212] hover:border-[#C9B8A8] transition-colors duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 border border-[#E6CCB2]/30 flex items-center justify-center text-[#121212] hover:border-[#C9B8A8] transition-colors duration-300"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>

          {/* Kontakt a rezervace */}
          <div className="flex flex-col justify-between md:pl-8">
            <div>
              <h3 className="text-sm font-medium text-[#121212] mb-8">Kontakt</h3>
              <div className="space-y-5 text-sm text-[#121212]/70 font-light">
                <p>{mainBranch.address}</p>
                <p>
                  <a href={`tel:${mainBranch.phone.replace(/\s/g, '')}`} className="hover:text-[#C9B8A8] transition-colors">
                    {mainBranch.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${mainBranch.email}`} className="hover:text-[#C9B8A8] transition-colors">
                    {mainBranch.email}
                  </a>
                </p>
                <p>
                  <a
                    href={mainBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9B8A8] hover:text-[#121212] transition-colors inline-flex items-center"
                  >
                    Zobrazit na mapě
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/rezervace"
                className="inline-flex items-center px-6 py-2.5 border border-[#E6CCB2] text-[#121212] hover:bg-[#E6CCB2]/20 transition-colors duration-300 text-xs tracking-widest font-light"
              >
                REZERVOVAT TERMÍN
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigace */}
        <div className="border-t border-[#E6CCB2]/20 pt-10 pb-4">
          <nav className="mb-14">
            <ul className="flex flex-wrap justify-center gap-x-8 md:gap-x-10 gap-y-6 max-w-3xl mx-auto">
              <li>
                <Link href="/" className="text-xs tracking-widest text-[#121212]/70 hover:text-[#C9B8A8] transition-colors py-1 font-light inline-block px-2">domů</Link>
              </li>
              <li>
                <Link href="/sluzby" className="text-xs tracking-widest text-[#121212]/70 hover:text-[#C9B8A8] transition-colors py-1 font-light inline-block px-2">služby</Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs tracking-widest text-[#121212]/70 hover:text-[#C9B8A8] transition-colors py-1 font-light inline-block px-2">blog</Link>
              </li>
              <li>
                <Link href="/cenik" className="text-xs tracking-widest text-[#121212]/70 hover:text-[#C9B8A8] transition-colors py-1 font-light inline-block px-2">ceník</Link>
              </li>
              <li>
                <Link href="/galerie" className="text-xs tracking-widest text-[#121212]/70 hover:text-[#C9B8A8] transition-colors py-1 font-light inline-block px-2">galerie</Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-xs tracking-widest text-[#121212]/70 hover:text-[#C9B8A8] transition-colors py-1 font-light inline-block px-2">kontakt</Link>
              </li>

            </ul>
          </nav>

          {/* Copyright a právní informace */}
          <div className="border-t border-[#E6CCB2]/10 pt-8 pb-2 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#121212]/50 mb-6 md:mb-0 font-light">
              &copy; {currentYear} Aura Beauty Salon. Všechna práva vyhrazena.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
              <Link href="/zasady-ochrany-osobnich-udaju" className="text-xs text-[#121212]/50 hover:text-[#C9B8A8] transition-colors font-light px-1">
                Zásady ochrany osobních údajů
              </Link>
              <span className="hidden md:inline text-xs text-[#121212]/30 font-light">|</span>
              <Link href="/obchodni-podminky" className="text-xs text-[#121212]/50 hover:text-[#C9B8A8] transition-colors font-light px-1">
                Obchodní podmínky
              </Link>
              <span className="hidden md:inline text-xs text-[#121212]/30 font-light">|</span>
              <CookieSettingsButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
