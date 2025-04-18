import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Scissors } from 'lucide-react';

interface TeamMemberProps {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  phone?: string;
  email?: string;
  branch: string;
  specializations: string[];
}

export default function TeamMember({
  id,
  name,
  position,
  bio,
  image,
  phone,
  email,
  branch,
  specializations
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-sm overflow-hidden border border-brand-secondary-light/30 hover:shadow-md transition-all duration-500 group">
      <div className="h-72 relative overflow-hidden">
        {image ? (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-secondary-light text-brand-secondary-dark">
            <span>{name}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4 pt-12">
          <h3 className="text-xl font-serif font-medium text-white">{name}</h3>
          <p className="text-white/90 text-sm">{position}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-brand-secondary-dark mb-5 text-sm leading-relaxed">{bio}</p>

        <div className="space-y-4 mb-6 text-sm">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-brand-secondary mr-2 mt-0.5" />
            <span className="text-brand-black/80">{branch}</span>
          </div>

          {specializations.length > 0 && (
            <div className="flex items-start">
              <Scissors className="w-4 h-4 text-brand-secondary mr-2 mt-0.5" />
              <div className="flex flex-wrap gap-1.5">
                {specializations.map((specialization, index) => (
                  <span
                    key={index}
                    className="text-brand-black/80"
                  >
                    {index > 0 ? ', ' : ''}{specialization}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-brand-secondary-light/30 flex flex-col gap-2">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center text-brand-secondary-dark hover:text-brand-secondary transition-colors duration-300 text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              {phone}
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center text-brand-secondary-dark hover:text-brand-secondary transition-colors duration-300 text-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
