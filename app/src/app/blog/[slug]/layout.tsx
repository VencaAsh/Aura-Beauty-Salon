import type { Metadata } from 'next';
import { NewsItem } from '@/components/news/NewsFilter';

// Příspěvky na blogu - stejné jako v blog/page.tsx
const news: NewsItem[] = [
  {
    id: '2',
    title: 'LETNÍ GLOW UP AKCE – DOPŘEJTE SI ZÁŘIVOU PROMĚNU',
    excerpt: 'Léto je ideální čas na svěží změnu! V Aura Beauty jsme pro vás připravili speciální letní Glow Up akci, díky které zazáříte na dovolené, festivalu i ve městě.',
    date: '2025-05-15',
    image: '/images/news/20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.webp',
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
    image: '/images/news/Salon-hero.webp',
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
