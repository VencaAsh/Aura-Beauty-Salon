import type { Metadata } from 'next';
import { NewsItem } from '@/components/news/NewsFilter';

// Ukázková data pro blog - stejná jako v blog/page.tsx a [slug]/page.tsx
const news: NewsItem[] = [
  {
    id: '7',
    title: 'AURA BEAUTY SALON– MÍSTO, KDE ZÁŘÍ VAŠE PŘIROZENÁ KRÁSA',
    excerpt: 'Vítejte v Aura Beauty, salonu, který vznikl z touhy vytvořit místo, kde se každá žena může na chvíli zastavit, odpočinout si a cítit se krásná a sebevědomá.',
    date: '2023-07-01',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png',
    slug: 'aura-beauty-salon-misto-kde-zari-vase-prirozena-krasa',
    category: 'Nové služby'
  },
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

// Generování metadat pro stránku článku
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Použití await Promise.resolve() pro zajištění, že params je plně vyhodnoceno
  const { slug } = await Promise.resolve(params);
  const post = news.find(item => item.slug === slug);

  if (!post) {
    return {
      title: 'Článek nenalezen | Aura Beauty Salon',
      description: 'Požadovaný článek bohužel neexistuje.',
    };
  }

  return {
    title: `${post.title} | Aura Beauty Salon`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
