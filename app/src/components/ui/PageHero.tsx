import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundClass = "bg-[#F8F4E9]" 
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${backgroundClass} py-24`}>
      {/* Dekorativní prvky */}
      <div className="absolute top-0 right-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[15rem] h-[15rem] rounded-full bg-[#E6CCB2]/10 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#121212] mb-6">{title}</h1>
          <div className="h-[1px] w-16 bg-[#C9B8A8] mx-auto mb-6"></div>
          {subtitle && (
            <p className="text-center text-[#121212]/70 mb-0 max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
