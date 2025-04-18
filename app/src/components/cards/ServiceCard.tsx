import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image?: string;
  slug: string;
  category: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  price,
  duration,
  image,
  slug,
  category
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-brand-secondary-light hover:shadow-md transition-shadow duration-300">
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
          <div className="absolute inset-0 flex items-center justify-center bg-brand-secondary-light text-brand-secondary-dark">
            <span>{title}</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-brand-primary-light text-brand-primary text-sm px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brand-primary mb-2">{title}</h3>
        <p className="text-brand-secondary-dark mb-4">{description}</p>
        
        <div className="flex justify-between items-center pt-4 border-t border-brand-secondary-light">
          <p className="text-lg font-medium text-brand-primary">{price}</p>
          <div className="flex items-center text-brand-secondary-dark">
            <Clock className="w-4 h-4 mr-1" />
            <p className="text-sm">{duration}</p>
          </div>
        </div>
        
        <Link
          href={`/sluzby/${slug}`}
          className="mt-4 inline-flex items-center text-brand-primary hover:text-brand-primary-dark font-medium"
        >
          Více informací
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
