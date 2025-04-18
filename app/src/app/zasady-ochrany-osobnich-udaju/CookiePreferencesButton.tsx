'use client';

import { useEffect, useState } from 'react';
import CookiePreferenceCenter from '@/components/ui/CookiePreferenceCenter';

export default function CookiePreferencesButton() {
  const [showPreferences, setShowPreferences] = useState(false);
  
  useEffect(() => {
    const button = document.getElementById('openCookiePreferences');
    if (button) {
      button.addEventListener('click', () => {
        setShowPreferences(true);
      });
    }
    
    return () => {
      if (button) {
        button.removeEventListener('click', () => {
          setShowPreferences(true);
        });
      }
    };
  }, []);
  
  return (
    <CookiePreferenceCenter 
      isOpen={showPreferences} 
      onClose={() => setShowPreferences(false)} 
    />
  );
}
