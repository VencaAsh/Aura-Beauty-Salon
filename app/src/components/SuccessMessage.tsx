'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessMessage() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Kontrola, zda URL obsahuje parametr success
    const hasSuccessParam = searchParams.has('success');
    console.log('URL parametr success:', hasSuccessParam);

    if (hasSuccessParam) {
      console.log('Nastavuji showSuccess na true');
      setShowSuccess(true);

      // Scrollování na začátek stránky pro lepší viditelnost zprávy
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  if (!showSuccess) return null;

  return (
    <div className="mb-6 p-6 bg-[#F5F3F0] text-[#121212] rounded-sm border-2 border-[#E6CCB2] shadow-md">
      <h3 className="text-xl font-serif font-light mb-2 text-[#121212]">Děkujeme za vaši zprávu!</h3>
      <p>Vaše zpráva byla úspěšně odeslána. Budeme vás kontaktovat co nejdříve.</p>
    </div>
  );
}
