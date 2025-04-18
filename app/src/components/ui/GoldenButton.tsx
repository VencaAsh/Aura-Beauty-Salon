'use client';

import React from 'react';
import Link from 'next/link';

interface GoldenButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'rounded' | 'square';
}

const GoldenButton: React.FC<GoldenButtonProps> = ({
  href,
  children,
  className = '',
  variant = 'square'
}) => {
  const roundedClass = variant === 'rounded' ? 'rounded-full' : 'rounded-sm';

  return (
    <Link
      href={href}
      className={`
        relative inline-flex items-center justify-center
        px-8 py-3 overflow-hidden
        ${roundedClass}
        font-sans text-sm tracking-wider
        text-[#121212]
        transition-all duration-500
        group
        ${className}
      `}
    >
      {/* Background - minimalist and elegant */}
      <span className="absolute inset-0 bg-[#E6CCB2] opacity-90"></span>

      {/* Border - very subtle */}
      <span className={`absolute inset-0 border border-[#D8C3B0]/20 ${roundedClass}`}></span>

      {/* Hover effect - soft and minimal */}
      <span className={`absolute inset-0 ${roundedClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[#D8C3B0] blur-sm`}></span>

      {/* Inner shadow - very subtle */}
      <span className={`absolute inset-0 ${roundedClass} shadow-inner opacity-30`}></span>

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>

      {/* Shine effect - more subtle */}
      <span className={`absolute inset-0 ${roundedClass} bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></span>

      {/* Bottom highlight line that appears on hover */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-[calc(100%-20px)] transition-all duration-700 ease-out"></span>
    </Link>
  );
};

export default GoldenButton;
