import Link from 'next/link';
import Image from 'next/image';
import { FlowingLines, FadeInView, FloatingElement, GradientText } from '@/components/animations';
import { GoldenButton } from '@/components/ui';
import { CONTACT_INFO } from '@/constants';
import heroImage from '@/assets/images/salon/IMG_0986-min.webp';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#f1ede6]">
      {/* Subtle flowing lines animation background */}
      <FlowingLines
        colors={['#E6CCB2', '#D8C3B0', '#C9B8A8', '#F5F5F5']}
        lineCount={4}
        className="opacity-10"
        elegant={true}
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <FadeInView direction="right" duration={1200} className="w-full md:w-1/2 mb-10 md:mb-0 relative">
          <div className="aspect-[3/4] bg-[#E6CCB2]/20 rounded-sm overflow-hidden relative">
            {/* Actual image */}
            <Image
              src={heroImage}
              alt="Kosmetický salon Ostrava - laminace obočí, prodlužování řas a kosmetika"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#E6CCB2]/10 to-[#121212]/20 mix-blend-multiply"></div>

            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#E6CCB2]/10 blur-xl">
              <FloatingElement amplitude={15} speed={2} direction="vertical">
                <div className="w-full h-full"></div>
              </FloatingElement>
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-[#D8C3B0]/10 blur-xl">
              <FloatingElement amplitude={10} speed={1.5} direction="vertical">
                <div className="w-full h-full"></div>
              </FloatingElement>
            </div>
          </div>
        </FadeInView>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 md:pl-16 text-left">
          {/* Salon location indicator */}
          <FadeInView direction="left" delay={200} className="mb-6">
            <p className="text-[#C9B8A8] text-xs tracking-[0.2em] uppercase font-light">{CONTACT_INFO.address}</p>
          </FadeInView>

          {/* Main tagline with minimalist typography */}
          <FadeInView direction="left" delay={400} className="mb-6">
            <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-wide text-[#121212]">
              Kosmetický salon<br/>
              <GradientText colors={['#C9B8A8', '#E6CCB2', '#D8C3B0']} className="font-extralight">
                Ostrava
              </GradientText>
            </h1>
          </FadeInView>

          <FadeInView direction="left" delay={600} className="flex items-center mb-8">
            <div className="h-[1px] w-16 bg-[#C9B8A8]/30"></div>
          </FadeInView>

          {/* Descriptive text - minimalist messaging */}
          <FadeInView direction="left" delay={800} className="mb-6">
            <p className="text-md text-[#121212]/80 max-w-md font-light tracking-wide">
              Profesionální kosmetický salon v Ostravě zaměřený na úpravu obočí, řasy a kosmetické procedury s medicínskou kosmetikou Cell by Cell
            </p>
          </FadeInView>


          {/* Minimalist booking button */}
          <FadeInView direction="left" delay={1200}>
            <GoldenButton href="/rezervace" variant="square">
              Rezervovat termín
            </GoldenButton>
          </FadeInView>

          {/* Services indicator */}
          <FadeInView direction="up" delay={1400} className="mt-12">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="px-4 py-2 mb-2 md:mb-0 border-b md:border-b-0 md:border-r border-[#C9B8A8]/20 hover:bg-[#E6CCB2]/5 transition-colors duration-300">
                <span className="text-[#121212] text-sm tracking-wider font-light">Obočí</span>
              </div>
              <div className="px-4 py-2 mb-2 md:mb-0 border-b md:border-b-0 md:border-r border-[#C9B8A8]/20 hover:bg-[#E6CCB2]/5 transition-colors duration-300">
                <span className="text-[#121212] text-sm tracking-wider font-light">Řasy</span>
              </div>
              <div className="px-4 py-2 hover:bg-[#E6CCB2]/5 transition-colors duration-300">
                <span className="text-[#121212] text-sm tracking-wider font-light">Kosmetika</span>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
