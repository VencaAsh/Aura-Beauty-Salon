import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import { Bell } from 'lucide-react';

export const metadata = {
  title: 'Novinky a speciální nabídky | Aura Beauty Salon',
  description: 'Aktuální novinky, speciální nabídky a akce v Aura Beauty Salon. Sledujte naše nejnovější služby a výhodné balíčky.',
};

// Ukázková data pro novinky
const news = [
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
const categories = [
  { id: 'all', name: 'Všechny novinky' },
  { id: 'nove-sluzby', name: 'Nové služby' },
  { id: 'akce', name: 'Akce' },
  { id: 'produkty', name: 'Produkty' }
];

export default function NewsPage() {
  return (
    <main>
      <Breadcrumbs />

      {/* Hero sekce */}
      <section className="relative overflow-hidden bg-brand-secondary-light py-24">
        {/* Dekorativní prvky */}
        <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-brand-secondary/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-brand-secondary/10 blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-brand-black mb-6">Novinky</h1>
            <div className="h-[1px] w-16 bg-brand-secondary mx-auto mb-6"></div>
            <p className="text-center text-brand-secondary-dark mb-0 max-w-2xl mx-auto font-light">
              Buďte mezi prvními, kdo se dozví o našich novinkách, akcích a doporučeních.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Filtry kategorií - v reálné aplikaci by byly interaktivní */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 transition-all duration-300 ${category.id === 'all' ? 'border-b-2 border-brand-secondary-dark text-brand-black font-medium' : 'border-b border-brand-secondary-light/50 text-brand-secondary-dark hover:border-brand-secondary hover:text-brand-black'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Seznam novinek */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-sm overflow-hidden border border-brand-secondary-light/30 hover:shadow-md hover:border-brand-secondary transition-all duration-500 h-full flex flex-col">
                <div className="h-56 relative overflow-hidden">
                  {item.image ? (
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-secondary-light text-brand-secondary-dark">
                      <span>{item.title}</span>
                    </div>
                  )}
                  {item.category && (
                    <div className="absolute top-3 right-3 bg-white/90 text-brand-black text-xs px-3 py-1 rounded-sm">
                      {item.category}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-brand-secondary-dark mb-2">
                    <p className="text-xs">{new Date(item.date).toLocaleDateString('cs-CZ', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</p>
                  </div>
                  <h3 className="text-xl font-serif font-medium text-brand-black mb-2 group-hover:text-brand-secondary-dark transition-colors duration-300">{item.title}</h3>
                  <p className="text-brand-secondary-dark mb-4 text-sm flex-grow">{item.excerpt}</p>
                  <Link
                    href={`/novinky/${item.slug}`}
                    className="mt-2 inline-flex items-center text-brand-black hover:text-brand-secondary-dark text-sm transition-colors duration-300"
                  >
                    Zobrazit více
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Přihlášení k odběru novinek */}
        <div className="bg-brand-secondary-light border border-brand-secondary/20 p-12 mt-24 text-center">
          <h2 className="text-2xl font-serif font-light mb-4 text-brand-black">Odebírejte naše novinky</h2>
          <div className="h-[1px] w-16 bg-brand-secondary/50 mx-auto mb-6"></div>
          <p className="mb-10 max-w-2xl mx-auto text-brand-secondary-dark font-light">
            Přihlaste se k odběru našeho newsletteru a buďte první, kdo se dozví o našich novinkách, speciálních nabídkách a akcích.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Váš e-mail"
                  className="w-full px-4 py-3 border border-brand-secondary/30 bg-white focus:outline-none focus:border-brand-secondary rounded-sm placeholder-brand-secondary-dark/50 text-brand-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-sm font-sans text-sm tracking-wider text-brand-black transition-all duration-500 group bg-brand-secondary opacity-90 border border-brand-secondary/20"
              >
                <span className="relative z-10 flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Odebírat
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-[calc(100%-20px)] transition-all duration-700 ease-out"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
