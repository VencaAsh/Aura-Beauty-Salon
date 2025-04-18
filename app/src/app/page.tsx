import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_METADATA } from '@/constants';
import { HeroSection, ExperienceSection, ServicesSection, GallerySection, TestimonialsSection, ContactSection } from '@/components/sections';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = SITE_METADATA;

export default function Home() {
  return (
    <main className={`min-h-screen bg-white ${inter.className}`}>
      <HeroSection />

      <ExperienceSection />

      <ServicesSection />

      <GallerySection />

      <TestimonialsSection />

      <ContactSection />
    </main>
  );
}
