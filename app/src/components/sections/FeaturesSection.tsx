export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Jemné pozadí */}
      <div className="absolute inset-0 bg-[#F5F3F0]/30 z-0"></div>

      {/* Dekorativní prvky - jemnější */}
      <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-4 tracking-wide text-[#121212]">Proč nás zvolit</h2>
          <div className="h-[1px] w-16 bg-[#C9B8A8]/50 mx-auto mb-2"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Výhoda 1 */}
          <div className="group transition-all duration-500 border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 p-8">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C9B8A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-light mb-4 text-[#121212]">Individuální přístup</h3>
            <div className="w-8 h-[1px] bg-[#E6CCB2]/30 mb-4"></div>
            <p className="text-base font-light leading-relaxed text-[#121212]/70">
              Před každou procedurou si vás pečlivě vyslechneme, abychom pochopili vaše potřeby a přání. Váš komfort a spokojenost jsou pro nás prioritou.
            </p>
          </div>

          {/* Výhoda 2 */}
          <div className="group transition-all duration-500 border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 p-8">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C9B8A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-light mb-4 text-[#121212]">Korejská kosmetika</h3>
            <div className="w-8 h-[1px] bg-[#E6CCB2]/30 mb-4"></div>
            <p className="text-base font-light leading-relaxed text-[#121212]/70">
              Používáme výhradně vysoce kvalitní korejskou kosmetiku, která je známá svými inovativními postupy a účinnými ingrediencemi pro zdraví a krásu vaší pleti.
            </p>
          </div>

          {/* Výhoda 3 */}
          <div className="group transition-all duration-500 border border-[#E6CCB2]/10 hover:border-[#E6CCB2]/30 p-8">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C9B8A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-lg font-light mb-4 text-[#121212]">Luxusní prostředí</h3>
            <div className="w-8 h-[1px] bg-[#E6CCB2]/30 mb-4"></div>
            <p className="text-base font-light leading-relaxed text-[#121212]/70">
              Náš salon je navržen tak, aby vám poskytl maximální pohodlí a relaxaci. Každý detail je pečlivě vybrán pro vytvoření luxusního a uklidněného prostředí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
