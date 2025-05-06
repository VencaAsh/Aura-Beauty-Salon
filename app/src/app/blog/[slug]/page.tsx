'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { useParams } from 'next/navigation';
import { NewsItem } from '@/components/news/NewsFilter';

// Ukázková data pro blog - stejná jako v blog/page.tsx
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
  },
  {
    id: '7',
    title: 'AURA BEAUTY SALON– MÍSTO, KDE ZÁŘÍ VAŠE PŘIROZENÁ KRÁSA',
    excerpt: 'Vítejte v Aura Beauty, salonu, který vznikl z touhy vytvořit místo, kde se každá žena může na chvíli zastavit, odpočinout si a cítit se krásná a sebevědomá.',
    date: '2023-07-01',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'aura-beauty-salon-misto-kde-zari-vase-prirozena-krasa',
    category: 'Nové služby',
    content: `
      <p>Vítejte v Aura Beauty, salonu, který vznikl z touhy vytvořit místo, kde se každá žena může na
      chvíli zastavit, odpočinout si a cítit se krásná a sebevědomá. Mým cílem nebylo jen nabízet
      kosmetické služby, ale především prostor s příjemnou atmosférou, kde se péče o vzhled stává
      i péčí o duši.</p>
      
      <p>Název Aura Beauty není náhodný. Věřím, že každá z nás má svou jedinečnou auru – a když se
      cítíme dobře, odráží se to nejen na našem vzhledu, ale i v tom, jak působíme na své okolí. V
      mém salonu proto nejde jen o krásu navenek, ale i o pocit klidu, uvolnění a vnitřní
      spokojenosti.</p>
      
      <p>Nabízím širokou škálu služeb, od laminace obočí, lash liftingu, barvení obočí a řas, až po
      hloubková kosmetická ošetření, mikrojehličkování a poradenství v péči o pleť. Používám
      kvalitní a šetrné produkty korejské kosmetiky, které doporučuji i pro domácí rutinu. V salonu
      najdete také přístrojová ošetření, jako je ultrazvuková špachtle, elektroporace a LED
      fotonovou terapii, které podpoří výsledky ošetření.</p>
      
      <p>Ke každé klientce přistupuji individuálně – s péčí, respektem a touhou vybrat to nejlepší právě
      pro její potřeby. Mým cílem je, aby každá návštěva byla nejen o kráse, ale i o příjemném
      zážitku a chvíli jen pro sebe.</p>
      
      <p>Pokud hledáte místo, kde se spojí profesionální péče s lidským přístupem a příjemnou
      atmosférou, srdečně vás zvu do Aura Beauty. Těším se na každou z vás – ať už přicházíte pro
      nový vzhled, relax, nebo obojí.</p>
      
      <p>S láskou, Alex Aura Beauty</p>
    `
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Najít článek podle slugu
  const post = news.find(item => item.slug === slug);
  
  // Pokud článek neexistuje, zobrazit chybovou zprávu
  if (!post) {
    return (
      <main className="bg-[#F5F3F0] min-h-screen">
        <Breadcrumbs />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-serif font-light mb-4 text-[#121212]">Článek nenalezen</h1>
          <p className="mb-8 text-[#121212]/70">Požadovaný článek bohužel neexistuje.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#121212] hover:text-[#C9B8A8] transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Zpět na blog</span>
          </Link>
        </div>
      </main>
    );
  }

  // Formátování data
  const formattedDate = new Date(post.date).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="bg-[#F5F3F0]">
      <Breadcrumbs />
      
      {/* Hero sekce s obrázkem */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/90 px-4 py-2 mb-4 rounded-sm">
              <span className="text-[#121212] text-sm">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-4 max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-white/90 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Obsah článku */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Navigace zpět */}
          <div className="mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#121212] hover:text-[#C9B8A8] transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="font-light">Zpět na blog</span>
            </Link>
          </div>
          
          {/* Perex */}
          <div className="mb-12">
            <p className="text-lg text-[#121212]/80 font-light italic leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          
          {/* Obsah */}
          <div className="prose prose-lg max-w-none text-[#121212]/90 font-light leading-relaxed">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>Obsah článku se připravuje...</p>
            )}
          </div>
          
          {/* Sdílení a kategorie */}
          <div className="mt-16 pt-8 border-t border-[#E6CCB2]/30 flex flex-wrap justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Tag className="w-4 h-4 mr-2 text-[#C9B8A8]" />
              <span className="text-sm text-[#121212]/70">Kategorie:</span>
              <span className="ml-2 text-sm text-[#121212]">{post.category}</span>
            </div>
          </div>
        </div>
        
        {/* Související články - zde by mohly být v budoucnu */}
        
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
