import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Aura Beauty Salon',
  description: 'Aktuální články, tipy, novinky a speciální nabídky v Aura Beauty Salon. Sledujte náš blog pro nejnovější trendy a informace.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
