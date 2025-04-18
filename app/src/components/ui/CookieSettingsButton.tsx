'use client';

import React from 'react';

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => {
        // @ts-ignore - Přístup k window objektu
        if (typeof window !== 'undefined' && window.openCookiePreferences) {
          // @ts-ignore
          window.openCookiePreferences();
        }
      }}
      className="text-xs text-[#121212]/50 hover:text-[#C9B8A8] transition-colors font-light px-1"
    >
      Nastavení cookies
    </button>
  );
}
