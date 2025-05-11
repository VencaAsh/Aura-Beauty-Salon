'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Pokud jsme na domovské stránce, nezobrazujeme drobečkovou navigaci
  if (pathname === '/') {
    return null;
  }

  // Rozdělíme cestu na segmenty
  const segments = pathname.split('/').filter(segment => segment !== '');

  // Vytvoříme pole objektů s názvem a URL pro každý segment
  const breadcrumbs = segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join('/')}`;

    // Převedeme segment na čitelnější formát (např. "sluzby" -> "Služby")
    let name = segment.charAt(0).toUpperCase() + segment.slice(1);

    // Speciální případy pro některé URL
    switch (segment) {
      case 'sluzby':
        name = 'Služby';
        break;
      case 'blog':
        name = 'Blog';
        break;
      case 'aktuality':
        name = 'Aktuality';
        break;
      case 'salon':
        name = 'Salon';
        break;
      case 'cenik':
        name = 'Ceník';
        break;
      case 'galerie':
        name = 'Galerie';
        break;
      case 'kontakt':
        name = 'Kontakt';
        break;
      case 'rezervace':
        name = 'Rezervace';
        break;
      default:
        // Pokud je to dynamická stránka (např. /sluzby/kosmetika),
        // můžeme zde později implementovat načítání skutečného názvu z databáze
        break;
    }

    return { name, url };
  });

  return (
    <nav aria-label="Drobečková navigace" className="py-2 px-4 bg-brand-secondary-light">
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link href="/" className="text-brand-primary hover:text-brand-primary-dark transition-colors">
            Domů
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.url} className="flex items-center">
            <ChevronRight className="mx-2 h-4 w-4 text-brand-secondary-dark" />
            {index === breadcrumbs.length - 1 ? (
              // Poslední položka není odkaz
              <span className="text-brand-secondary-dark font-medium" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                href={breadcrumb.url}
                className="text-brand-primary hover:text-brand-primary-dark transition-colors"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
