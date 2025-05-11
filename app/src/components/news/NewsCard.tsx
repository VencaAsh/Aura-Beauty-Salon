'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NewsItem } from './NewsFilter';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

export default function NewsCard({ item, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="bg-white h-full flex flex-col">
        <div className="h-56 relative overflow-hidden">
          {item.image ? (
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#F8F6F4] text-[#121212]/70">
              <span>{item.title}</span>
            </div>
          )}
        </div>
        <div className="pt-6 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="text-[#121212]/60 text-xs uppercase tracking-widest">{new Date(item.date).toLocaleDateString('cs-CZ', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
          </div>
          <h3 className="text-xl font-serif font-light text-[#121212] mb-3 group-hover:text-[#121212]/80 transition-colors duration-300">{item.title}</h3>
          <p className="text-[#121212]/70 mb-5 text-sm flex-grow font-light leading-relaxed">{item.excerpt}</p>
          <Link
            href={`/blog/${item.slug}`}
            className="mt-2 inline-flex items-center text-[#121212]/80 hover:text-[#121212] text-xs uppercase tracking-widest transition-colors duration-300"
          >
            <span className="font-light">Číst článek</span>
            <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
