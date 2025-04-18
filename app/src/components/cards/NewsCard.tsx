import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  slug: string;
  category?: string;
}

export default function NewsCard({
  id,
  title,
  excerpt,
  date,
  image,
  slug,
  category
}: NewsCardProps) {
  // Formátování data
  const formattedDate = new Date(date).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-brand-secondary-light hover:shadow-lg hover:border-brand-gold transition-all duration-300">
      <div className="h-48 relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-secondary-light to-brand-secondary text-white font-medium text-lg">
            <span>{title}</span>
          </div>
        )}
        {category && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-brand-gold-light to-brand-gold text-white text-sm px-3 py-1 rounded-full shadow-sm">
            {category}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center text-brand-secondary-dark mb-2">
          <Calendar className="w-4 h-4 mr-1 text-brand-gold" />
          <p className="text-sm">{formattedDate}</p>
        </div>

        <h3 className="text-xl font-semibold text-brand-gold mb-2">{title}</h3>
        <p className="text-brand-secondary-dark mb-4">{excerpt}</p>

        <Link
          href={`/novinky/${slug}`}
          className="mt-2 inline-flex items-center text-brand-gold hover:text-brand-gold-dark font-medium transition-colors duration-300"
        >
          Číst více
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
