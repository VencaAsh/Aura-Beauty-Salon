'use client';

import { CONTACT_INFO, BRANCHES } from '@/constants';

// Komponenta pro strukturovaná data kosmetického salonu
export function SalonStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Aura Beauty Salon',
    description: 'Profesionální kosmetický salon v Ostravě nabízející laminaci obočí, úpravu obočí, barvení obočí, prodlužování řas, lash lifting, kosmetiku, čištění pleti a pánskou kosmetiku.',
    url: 'https://www.aurabeautysalon.cz',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vítkovická 3080/10',
      addressLocality: 'Ostrava',
      postalCode: '702 00',
      addressCountry: 'CZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.8209',
      longitude: '18.2625'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      }
    ],
    priceRange: '$$',
    image: 'https://www.aurabeautysalon.cz/images/salon.jpg',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61573920463799',
      'https://www.instagram.com/aura.beautyy.salon'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Laminace obočí',
        description: 'Profesionální laminace obočí v Ostravě',
        price: '790-890',
        priceCurrency: 'CZK'
      },
      {
        '@type': 'Offer',
        name: 'Úprava obočí',
        description: 'Precizní úprava obočí v Ostravě',
        price: '250-490',
        priceCurrency: 'CZK'
      },
      {
        '@type': 'Offer',
        name: 'Lash Lifting',
        description: 'Profesionální lash lifting v Ostravě',
        price: '950',
        priceCurrency: 'CZK'
      },
      {
        '@type': 'Offer',
        name: 'Prodlužování řas',
        description: 'Kvalitní prodlužování řas v Ostravě',
        price: '1100-1200',
        priceCurrency: 'CZK'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Komponenta pro strukturovaná data lokálního podnikání
export function LocalBusinessStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aura Beauty Salon',
    image: 'https://www.aurabeautysalon.cz/images/salon.jpg',
    '@id': 'https://www.aurabeautysalon.cz',
    url: 'https://www.aurabeautysalon.cz',
    telephone: CONTACT_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vítkovická 3080/10',
      addressLocality: 'Ostrava',
      postalCode: '702 00',
      addressCountry: 'CZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.8209',
      longitude: '18.2625'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      }
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61573920463799',
      'https://www.instagram.com/aura.beautyy.salon'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Komponenta pro strukturovaná data FAQ
export function FAQStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Co je to laminace obočí?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Laminace obočí je moderní kosmetický zákrok, který upravuje tvar a vzhled obočí pomocí speciálních přípravků. Výsledkem je upravené, plnější a perfektně tvarované obočí, které vydrží až 6-8 týdnů.'
        }
      },
      {
        '@type': 'Question',
        name: 'Jak dlouho trvá prodlužování řas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aplikace prodloužených řas trvá přibližně 1,5-2 hodiny při prvním nasazení. Doplnění řas pak zabere asi 1-1,5 hodiny, v závislosti na počtu chybějících řas.'
        }
      },
      {
        '@type': 'Question',
        name: 'Jak často je potřeba doplňovat prodloužené řasy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Doporučujeme doplnění prodloužených řas každé 2-3 týdny pro udržení plného a krásného vzhledu.'
        }
      },
      {
        '@type': 'Question',
        name: 'Jak se starat o laminované obočí?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Po laminaci obočí je důležité první 24-48 hodin nenamáčet obočí vodou, nepoužívat make-up a vyhnout se sauně či bazénu. Poté stačí obočí pravidelně pročesávat a používat výživný olej pro maximální efekt a trvanlivost.'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
