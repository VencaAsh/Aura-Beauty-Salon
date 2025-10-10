import type { Metadata } from 'next';
import { SITE_METADATA } from '@/constants';
import { HeroSection, ExperienceSection, ServicesSection, GallerySection, TestimonialsSection, SocialLinksSection, ContactSection } from '@/components/sections';

export const metadata: Metadata = SITE_METADATA;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <ExperienceSection />

      <ServicesSection />

      <GallerySection />

      <TestimonialsSection />

      <SocialLinksSection />

      <ContactSection />
    </main>
  );
}
