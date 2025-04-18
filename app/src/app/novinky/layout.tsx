import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novinky a speciální nabídky | Aura Beauty Salon',
  description: 'Aktuální novinky, speciální nabídky a akce v Aura Beauty Salon. Sledujte naše nejnovější služby a výhodné balíčky.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
