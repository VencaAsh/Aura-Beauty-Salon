// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'domů' },
  { href: '/sluzby', label: 'služby' },
  { href: '/blog', label: 'blog' },
  { href: '/salon', label: 'salon' },
  { href: '/cenik', label: 'ceník' },
  { href: '/galerie', label: 'galerie' },
  { href: '/kontakt', label: 'kontakt' },
];

// Social media links
export const SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
  { href: 'https://www.instagram.com/aura.beautyy.salon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram', icon: 'instagram' },
];

// Contact information
export const CONTACT_INFO = {
  address: 'Vítkovická 3080/10, 702 00 Ostrava',
  phone: '+420 773 054 563',
  email: 'info@aurabeauty.cz',
};

// Branch information
export const BRANCHES = [
  {
    id: 'ostrava',
    name: 'Ostrava',
    address: 'Vítkovická 3080/10, 702 00 Ostrava',
    phone: '+420 773 054 563',
    email: 'info@aurabeauty.cz',
    hours: {
      weekdays: 'Po - Pá: 11:00 - 20:00',
      saturday: 'So: Zavřeno',
      sunday: 'Ne: Zavřeno'
    },
    mapUrl: 'https://maps.google.com/?q=V%C3%ADtkovick%C3%A1+3080%2F10%2C+702+00+Ostrava'
  }
];

// Services
export const SERVICES = [
  {
    id: 'facial',
    title: 'Péče o pleť',
    description: 'Kompletní ošetření pleti s inovativní korejskou kosmetikou pro viditelné výsledky a zdravý vzhled.',
    icon: 'facial',
  },
  {
    id: 'brows',
    title: 'Úprava obočí',
    description: 'Precizní tvarování a úprava obočí podle vašeho obličeje pro dokonalý rámec vašich očí.',
    icon: 'brows',
  },
  {
    id: 'lashes',
    title: 'Prodlužování řas',
    description: 'Zvýrazněte svůj pohled s našimi luxusními řasami, které jsou lehké, pohodlné a přirozeně vypadající.',
    icon: 'lashes',
  },
];

// Site metadata
export const SITE_METADATA = {
  title: 'Aura Beauty Salon - Kosmetika, Řasy a Obočí v Ostravě',
  description: 'Profesionální kosmetický salon v Ostravě nabízející laminaci obočí, úpravu obočí, barvení obočí, prodlužování řas, lash lifting, kosmetiku, čištění pleti a pánskou kosmetiku.',
  keywords: 'laminace obočí Ostrava, úprava obočí Ostrava, barvení obočí Ostrava, řasy Ostrava, lash lifting Ostrava, kosmetika Ostrava, čištění pleti Ostrava, pánská kosmetika Ostrava, chemický peeling Ostrava, masáž obličeje, LHA LALA peeling, anti age, problematická pleť, prodlužování řas',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
    ],
  },
};
