'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { NewsFilter, NewsGrid, NewsItem, Category } from '@/components/news';

// Metadata je nyní v layout.tsx, protože toto je klientská komponenta

// Ukázková data pro blog
const news: NewsItem[] = [
  {
    id: '1',
    title: 'Nová kolekce letních procedur',
    excerpt: 'Představujeme novou kolekci letních procedur, které osvěží vaši pleť a připraví ji na slunečné dny.',
    date: '2023-06-15',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'nova-kolekce-letnich-procedur',
    category: 'Nové služby'
  },
  {
    id: '2',
    title: 'Speciální nabídka na prodloužení řas',
    excerpt: 'Využijte naši speciální nabídku na prodloužení řas metodou řasa na řasu s 20% slevou do konce měsíce.',
    date: '2023-06-10',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'specialni-nabidka-prodlouzeni-ras',
    category: 'Akce'
  },
  {
    id: '3',
    title: 'Nový přístroj pro omlazení pleti',
    excerpt: 'Do našeho salonu jsme pořídili nový přístroj pro neinvazivní omlazení pleti, který přináší viditelné výsledky již po prvním ošetření.',
    date: '2023-06-05',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'novy-pristroj-omlazeni-pleti',
    category: 'Nové služby'
  },
  {
    id: '4',
    title: 'Letní balíček péče o tělo',
    excerpt: 'Připravte své tělo na léto s naším speciálním balíčkem, který zahrnuje anticelulitidní masáž, zábal a peeling.',
    date: '2023-05-25',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'letni-balicek-pece-o-telo',
    category: 'Akce'
  },
  {
    id: '5',
    title: 'Nová řada korejské kosmetiky',
    excerpt: 'Rozšířili jsme naši nabídku o novou řadu korejské kosmetiky, která je známá svými inovativními přístupy a účinnými složkami.',
    date: '2023-05-15',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'nova-rada-korejske-kosmetiky',
    category: 'Produkty'
  },
  {
    id: '6',
    title: 'Věrnostní program pro stálé klienty',
    excerpt: 'Spouštíme nový věrnostní program pro naše stálé klienty. Sbírejte body za každou návštěvu a získejte zajímavé odměny.',
    date: '2023-05-01',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'vernostni-program-stali-klienti',
    category: 'Akce'
  }
];

// Kategorie pro filtrování
const categories: Category[] = [
  { id: 'all', name: 'Všechny články' },
  { id: 'nove-sluzby', name: 'Nové služby' },
  { id: 'akce', name: 'Akce' },
  { id: 'produkty', name: 'Produkty' }
];

export default function BlogPage() {
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(news);

  return (
    <main className="bg-[#F5F3F0]">
      <Breadcrumbs />

      <PageHero
        title="Blog"
        subtitle="Buďte mezi prvními, kdo se dozví o našich novinkách, akcích a doporučeních."
        backgroundClass="bg-[#F8F4E9]"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Filtr článků */}
        <NewsFilter
          news={news}
          categories={categories}
          onFilterChange={setFilteredNews}
        />

        {/* Seznam článků */}
        <NewsGrid news={filteredNews} />

        {/* Sociální sítě */}
        <div className="bg-[#F8F4E9] border border-[#E6CCB2]/20 p-8 md:p-12 mt-24 text-center rounded-sm shadow-sm">
          <h2 className="text-2xl font-serif font-light mb-4 text-[#121212]">Sledujte nás</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6"></div>
          <p className="mb-10 max-w-2xl mx-auto text-[#121212]/70 font-light">
            Sledujte nás na sociálních sítích, kde pravidelně zveřejňujeme novinky, tipy na péči a inspiraci
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Instagram */}
            <div className="group flex flex-col items-center text-center p-6 bg-white border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 transition-all duration-500 rounded-sm">
              <div className="w-12 h-12 flex items-center justify-center border border-[#E6CCB2]/20 rounded-full mb-4 group-hover:bg-[#E6CCB2]/10 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#121212]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-lg font-serif font-light mb-2 text-[#121212]">Instagram</h3>
              <p className="text-[#121212]/70 mb-4 font-light text-sm">
                Sledujte naše nejnovější práce a inspirace
              </p>
              <a
                href="https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide"
              >
                Sledovat na Instagramu
              </a>
            </div>

            {/* Facebook */}
            <div className="group flex flex-col items-center text-center p-6 bg-white border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 transition-all duration-500 rounded-sm">
              <div className="w-12 h-12 flex items-center justify-center border border-[#E6CCB2]/20 rounded-full mb-4 group-hover:bg-[#E6CCB2]/10 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#121212]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-serif font-light mb-2 text-[#121212]">Facebook</h3>
              <p className="text-[#121212]/70 mb-4 font-light text-sm">
                Sledujte naše akce a speciální nabídky
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61573920463799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent border border-[#E6CCB2]/50 text-[#121212] hover:border-[#E6CCB2] hover:bg-[#E6CCB2]/10 font-light py-2 px-4 rounded-sm transition-all duration-300 text-xs tracking-wide"
              >
                Sledovat na Facebooku
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
