import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Kosmetický salon Ostrava - Laminace obočí, Řasy a Kosmetika',
  description: 'Aktuální články, tipy a novinky o laminaci obočí, úpravě obočí, barvení obočí, prodlužování řas, lash liftingu a kosmetice v Ostravě.',
  keywords: 'blog laminace obočí Ostrava, blog úprava obočí Ostrava, blog barvení obočí Ostrava, blog řasy Ostrava, blog lash lifting Ostrava, blog kosmetika Ostrava, blog čištění pleti Ostrava, blog pánská kosmetika Ostrava',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
