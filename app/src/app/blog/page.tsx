'use client';

import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { NewsGrid, NewsItem } from '@/components/news';

// Příspěvky na blogu
const news: NewsItem[] = [
  {
    id: '2',
    title: 'LETNÍ GLOW UP AKCE – DOPŘEJTE SI ZÁŘIVOU PROMĚNU',
    excerpt: 'Léto je ideální čas na svěží změnu! V Aura Beauty jsme pro vás připravili speciální letní Glow Up akci, díky které zazáříte na dovolené, festivalu i ve městě.',
    date: '2025-05-15',
    image: '/images/news/IMG_3044-min.jpeg',
    slug: 'letni-glow-up-akce-dopreje-si-zarivou-promenu',
    category: 'Akce'
  },
  {
    id: '1',
    title: 'AURA BEAUTY SALON– MÍSTO, KDE ZÁŘÍ VAŠE PŘIROZENÁ KRÁSA',
    excerpt: 'Vítejte v Aura Beauty, salonu, který vznikl z touhy vytvořit místo, kde se každá žena může na chvíli zastavit, odpočinout si a cítit se krásná a sebevědomá.',
    date: '2025-05-06',
    image: '/images/news/Salon-hero.jpeg',
    slug: 'aura-beauty-salon-misto-kde-zari-vase-prirozena-krasa',
    category: 'Nové služby'
  }
];

export default function BlogPage() {

  return (
    <main className="bg-white">
      <Breadcrumbs />

      <PageHero
        title="Blog"
        subtitle="Buďte mezi prvními, kdo se dozví o našich novinkách, akcích a doporučeních."
        backgroundClass="bg-[#F8F4E9]"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Seznam článků */}
        <NewsGrid news={news} />

        {/* Sociální sítě - minimalistická verze */}
        <div className="mt-24 mb-16 text-center max-w-md mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#121212]/50 mb-8">Sledujte nás</p>

          <div className="flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#121212]/70 hover:text-[#121212] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573920463799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#121212]/70 hover:text-[#121212] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
