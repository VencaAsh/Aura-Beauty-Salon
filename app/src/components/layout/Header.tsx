'use client'; // Potřebujeme pro interaktivitu (useState)

import Link from 'next/link';
import { useState } from 'react'; // Import useState pro stav menu

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stav pro mobilní menu

  return (
    // Minimalistický header v souladu s designem hero sekce
    <header className="bg-[#F5F3F0] p-5 sticky top-0 z-50 border-b border-[#E6CCB2]/10">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo - minimalistické, elegantní */}
        <Link href="/" className="flex items-center space-x-2 group">
           <span className="text-xl font-light tracking-wide text-[#121212] transition-all duration-300 group-hover:text-[#C9B8A8]">Aura Beauty</span>
        </Link>

        {/* Minimalistické hamburger tlačítko */}
        <button
          className="md:hidden p-2 text-[#121212] hover:text-[#C9B8A8] focus:outline-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Minimalistická ikona hamburgeru */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Minimalistické navigační odkazy - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">domů</Link>
          <Link href="/sluzby" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">služby</Link>
          <Link href="/novinky" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">novinky</Link>
          <Link href="/tym" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">náš tým</Link>
          <Link href="/cenik" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">ceník</Link>
          <Link href="/galerie" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">galerie</Link>
          <Link href="/kontakt" className="px-2 py-1 text-[#121212] hover:text-[#C9B8A8] transition-all duration-300 font-light text-xs tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C9B8A8]/50 after:transition-all after:duration-300 hover:after:w-full">kontakt</Link>
          <Link href="/rezervace" className="ml-2 text-[#121212] bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] transition-all duration-300 font-light text-xs tracking-widest px-5 py-2 border border-[#E6CCB2]/20">rezervace</Link>
        </div>
      </nav>

      {/* Minimalistické mobilní menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#F5F3F0]/95 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-[72px] right-0 w-full h-screen bg-[#F5F3F0] z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-start p-8 space-y-6">
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>domů</Link></li>
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/sluzby" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>služby</Link></li>
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/novinky" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>novinky</Link></li>
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/tym" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>náš tým</Link></li>
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/cenik" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>ceník</Link></li>
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/galerie" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>galerie</Link></li>
            <li className="w-full border-b border-[#E6CCB2]/10 pb-2"><Link href="/kontakt" className="text-[#121212] hover:text-[#C9B8A8] block font-light text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>kontakt</Link></li>
            <li className="w-full mt-6"><Link href="/rezervace" className="text-[#121212] bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] block font-light text-sm tracking-widest px-4 py-2 border border-[#E6CCB2]/20 text-center transition-all duration-300" onClick={() => setIsMenuOpen(false)}>rezervace</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
