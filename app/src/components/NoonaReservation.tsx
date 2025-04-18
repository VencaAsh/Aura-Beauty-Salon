'use client';

import React, { useEffect, useRef } from 'react';

export default function NoonaReservation() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Nastavení výšky iframe po načtení
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        // Nastavíme počáteční výšku
        iframeRef.current.style.height = '800px';
        
        // Pokud bychom chtěli dynamicky upravovat výšku podle obsahu, 
        // museli bychom implementovat komunikaci mezi iframe a rodičovskou stránkou
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
    <div className="noona-reservation-container">
      <iframe
        ref={iframeRef}
        src="https://noona.app/cs/kosmetikaarasysalonstyle?source=OtherCompanies&rank=2"
        title="Rezervační systém Aura Beauty Salon"
        className="w-full border-0"
        style={{ minHeight: '800px' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
