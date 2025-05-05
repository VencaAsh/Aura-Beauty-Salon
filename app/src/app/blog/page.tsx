'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/ui';
import { NewsFilter, NewsGrid, NewsItem, Category } from '@/components/news';
import { Bell } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulace odeslání formuláře
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 1500);
  };

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

        {/* Přihlášení k odběru novinek */}
        <div className="bg-[#F8F4E9] border border-[#E6CCB2]/20 p-8 md:p-12 mt-24 text-center rounded-sm shadow-sm">
          <h2 className="text-2xl font-serif font-light mb-4 text-[#121212]">Odebírejte náš blog</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6"></div>
          <p className="mb-10 max-w-2xl mx-auto text-[#121212]/70 font-light">
            Přihlaste se k odběru našeho newsletteru a buďte první, kdo se dozví o našich novinkách, speciálních nabídkách a akcích.
          </p>

          <div className="max-w-md mx-auto">
            {subscribed ? (
              <div className="bg-white/80 p-6 rounded-sm border border-[#E6CCB2]/30 text-center">
                <p className="text-[#121212] font-light">Děkujeme za přihlášení k odběru novinek!</p>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                <div className="flex-grow">
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Váš e-mail"
                    className="w-full px-4 py-3 border border-[#E6CCB2]/30 bg-white focus:outline-none focus:border-[#E6CCB2] rounded-sm placeholder-[#121212]/50 text-[#121212]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-sm font-sans text-sm tracking-wider text-[#121212] transition-all duration-500 group bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] border border-[#E6CCB2]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#121212]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Bell className="mr-2 h-4 w-4" />
                    )}
                    <span className="font-light">{isSubmitting ? 'Odesílání...' : 'Odebírat'}</span>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
