import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { NewsItem } from '@/components/news/NewsFilter';

// Required for static export
export const dynamic = 'force-static';

// Příspěvky na blogu - stejné jako v blog/page.tsx a layout.tsx
const news: NewsItem[] = [
  {
    id: '2',
    title: 'LETNÍ GLOW UP AKCE – DOPŘEJTE SI ZÁŘIVOU PROMĚNU',
    excerpt: 'Léto je ideální čas na svěží změnu! V Aura Beauty jsme pro vás připravili speciální letní Glow Up akci, díky které zazáříte na dovolené, festivalu i ve městě.',
    date: '2025-05-15',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'letni-glow-up-akce-dopreje-si-zarivou-promenu',
    category: 'Akce',
    content: `
      <p>Léto je ideální čas na svěží změnu! V Aura Beauty jsme pro vás připravili speciální letní Glow Up akci, díky které zazáříte na dovolené, festivalu i ve městě. Vybrané kombinace oblíbených ošetření nyní získáte za zvýhodněné ceny – ať už toužíte po výrazném pohledu, krásně upraveném obočí nebo zdravé, rozjasněné pleti.</p>

      <p>Představujeme vám naše letní balíčky:</p>

      <p><strong>• Laminace obočí & Lash lifting – 1550 Kč</strong><br>
      Tato kombinace vám zajistí dokonale upravené a zvýrazněné obočí, které drží tvar až několik týdnů, a zároveň krásně natočené, zvýrazněné řasy bez nutnosti řasenky. Ideální balíček pro ty, kdo chtějí zvýraznit oči a mít upravený vzhled i bez make-upu.</p>

      <p><strong>• Lash lifting & Barvení obočí – 1250 Kč</strong><br>
      Natočení přírodních řas bez lepidla a umělých řas, spolu s barvením obočí pro výraznější a sjednocený vzhled. Skvělá volba pro přirozené zvýraznění během letních dnů.</p>

      <p><strong>• Prodlužování řas & Barvení obočí – 1400 Kč</strong><br>
      Kombinace, která vytvoří výrazný pohled s prodlouženými řasami a upraveným obočím podle vašeho tvaru obličeje.</p>

      <p><strong>• Kosmetika Pure Balance & Barvení obočí – 1250 Kč</strong><br>
      Hloubkové kosmetické ošetření pleti Pure Balance pro svěží, čistou a zklidněnou pleť spolu s architekturou barvením obočí. Ideální pro restart pleti po zimě nebo jako příprava na léto.</p>

      <p><strong>• Kosmetika Pure Balance & Lash lifting – 1750 Kč</strong><br>
      Spojení kosmetického ošetření, které navrací pleti rovnováhu, s lash liftingem pro přirozeně otevřený pohled. Dokonalý balíček pro celkové oživení pleti i očí.</p>

      <p>Nečekejte na poslední chvíli – rezervujte si svůj letní termín co nejdříve a dopřejte si péči, díky které se budete cítit sebevědomě a krásně.</p>

      <p>Těšíme se na vás v Aura Beauty.</p>
    `
  },
  {
    id: '1',
    title: 'AURA BEAUTY SALON– MÍSTO, KDE ZÁŘÍ VAŠE PŘIROZENÁ KRÁSA',
    excerpt: 'Vítejte v Aura Beauty, salonu, který vznikl z touhy vytvořit místo, kde se každá žena může na chvíli zastavit, odpočinout si a cítit se krásná a sebevědomá.',
    date: '2025-05-06',
    image: '/images/news/Salon-hero.jpeg',
    slug: 'aura-beauty-salon-misto-kde-zari-vase-prirozena-krasa',
    category: 'Nové služby',
    content: `
      <p>Vítejte v Aura Beauty, salonu, který vznikl z touhy vytvořit místo, kde se každá žena může na chvíli zastavit, odpočinout si a cítit se krásná a sebevědomá. Mým cílem nebylo jen nabízet kosmetické služby, ale především prostor s příjemnou atmosférou, kde se péče o vzhled stává i péčí o duši.</p>

      <p>Název Aura Beauty není náhodný. Věřím, že každá z nás má svou jedinečnou auru – a když se cítíme dobře, odráží se to nejen na našem vzhledu, ale i v tom, jak působíme na své okolí. V mém salonu proto nejde jen o krásu navenek, ale i o pocit klidu, uvolnění a vnitřní spokojenosti.</p>

      <p>Nabízím širokou škálu služeb, od laminace obočí, lash liftingu, barvení obočí a řas, až po hloubková kosmetická ošetření, mikrojehličkování a poradenství v péči o pleť. Používám kvalitní a šetrné produkty korejské kosmetiky, které doporučuji i pro domácí rutinu. V salonu najdete také přístrojová ošetření, jako je ultrazvuková špachtle, elektroporace a LED fotonovou terapii, které podpoří výsledky ošetření.</p>

      <p>Ke každé klientce přistupuji individuálně – s péčí, respektem a touhou vybrat to nejlepší právě pro její potřeby. Mým cílem je, aby každá návštěva byla nejen o kráse, ale i o příjemném zážitku a chvíli jen pro sebe.</p>

      <p>Pokud hledáte místo, kde se spojí profesionální péče s lidským přístupem a příjemnou atmosférou, srdečně vás zvu do Aura Beauty. Těším se na každou z vás – ať už přicházíte pro nový vzhled, relax, nebo obojí.</p>

      <p>S láskou, Alex Aura Beauty</p>
    `
  }
];

// Generate static paths for all blog posts
export function generateStaticParams() {
  return news.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

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
    <main className="bg-white">
      <Breadcrumbs />

      {/* Hero sekce s obrázkem - minimalistická verze */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden bg-[#F8F6F4]">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-3">
              <span className="text-[#121212]/60 text-xs uppercase tracking-widest">{post.category}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-[#121212] mb-4 max-w-3xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-[#121212]/60 text-xs">
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Obsah článku */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto bg-white">
          {/* Navigace zpět */}
          <div className="mb-16 mt-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#121212]/60 hover:text-[#121212] transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-3 w-3" />
              <span className="font-light text-xs uppercase tracking-widest">Zpět na blog</span>
            </Link>
          </div>

          {/* Perex */}
          <div className="mb-16 mt-8">
            <p className="text-lg md:text-xl text-[#121212]/70 font-light leading-relaxed tracking-wide">
              {post.excerpt}
            </p>
          </div>

          {/* Obsah */}
          <div className="prose max-w-none text-[#121212]/80 font-light leading-relaxed">
            {post.content ? (
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="article-content"
              />
            ) : (
              <p>Obsah článku se připravuje...</p>
            )}
          </div>

          <style jsx global>{`
            .article-content p {
              margin-bottom: 2.5rem;
              line-height: 1.7;
              font-size: 1rem;
              letter-spacing: 0.01em;
            }

            .article-content p:last-child {
              margin-bottom: 0;
            }

            @media (min-width: 768px) {
              .article-content p {
                font-size: 1.05rem;
              }
            }
          `}</style>

          {/* Kategorie - minimalistická verze */}
          <div className="mt-24 mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-[#121212]/50">{post.category}</span>
          </div>
        </div>

        {/* Související články - zde by mohly být v budoucnu */}

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
