'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessMessage() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.has('success')) {
      setShowSuccess(true);
    }
  }, [searchParams]);

  if (!showSuccess) return null;

  return (
    <div className="mb-6 p-4 bg-[#F5F3F0] text-[#121212] rounded-sm border-2 border-[#E6CCB2]/40 shadow-sm">
      Zpráva úspěšně odeslána!
    </div>
  );
}
