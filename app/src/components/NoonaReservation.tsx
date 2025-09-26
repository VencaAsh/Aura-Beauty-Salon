'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function NoonaReservation() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState('800px');

  useEffect(() => {
    // Nastavení výšky iframe po načtení
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        // Nastavíme počáteční výšku
        setIframeHeight('800px');
        setIsLoading(false);

        // Pokus o přizpůsobení výšky podle velikosti obrazovky
        const updateIframeHeight = () => {
          const windowHeight = window.innerHeight;
          const newHeight = Math.max(800, windowHeight * 0.8); // Minimálně 800px nebo 80% výšky okna
          setIframeHeight(`${newHeight}px`);
        };

        // Aktualizace při změně velikosti okna
        window.addEventListener('resize', updateIframeHeight);
        updateIframeHeight(); // Počáteční nastavení

        return () => {
          window.removeEventListener('resize', updateIframeHeight);
        };
      }
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <div className="noona-reservation-container relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f1ede6]/50 z-10">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-[#C9B8A8] mx-auto mb-4" />
            <p className="text-[#121212] font-light">Načítám rezervační systém...</p>
          </div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src="https://noona.app/cs/kosmetikaarasysalonstyle?source=OtherCompanies&rank=2"
        title="Rezervační systém Aura Beauty Salon"
        className="w-full border-0 transition-opacity duration-300"
        style={{
          minHeight: iframeHeight,
          height: iframeHeight,
          opacity: isLoading ? 0.3 : 1
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
