import { FadeInView, SmoothReveal } from '@/components/animations';

export default function ExperienceSection() {
  return (
    <section className="py-32 bg-brand-secondary-light relative overflow-hidden">
      {/* Jemné dekorativní pozadí (v souladu s ostatními sekcemi) */}
      <div className="absolute top-0 right-0 w-[18rem] h-[18rem] rounded-full bg-[#E6CCB2]/10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[18rem] h-[18rem] rounded-full bg-[#E6CCB2]/10 blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView direction="up" className="mb-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-[#121212]">
              Zážitek
            </h2>
          </FadeInView>

          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-6">
            <SmoothReveal direction="left" duration={1200}>
              <div className="h-full w-full bg-[#C9B8A8]/50"></div>
            </SmoothReveal>
          </div>

          <FadeInView direction="up" delay={200}>
            <p className="text-base md:text-sm text-[#121212]/80 font-light leading-relaxed mx-auto">
              V Aura Beauty Salon věříme, že péče o sebe je více než jen rutina – je to okamžik, kdy se sebepéče setkává s elegancí. Naše ošetření jsou navržena tak, aby vytvořila harmonii mezi tělem a myslí, a poskytla vám prostor, kde můžete zpomalit, nadechnout se a vychutnat si moment klidu v dnešním hektickém světě.
            </p>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
