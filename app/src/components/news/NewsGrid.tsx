'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewsCard from './NewsCard';
import { NewsItem } from './NewsFilter';

interface NewsGridProps {
  news: NewsItem[];
}

export default function NewsGrid({ news }: NewsGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, news.length));
  };

  const hasMore = visibleCount < news.length;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {news.slice(0, visibleCount).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {news.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-[#121212]/70 font-light">Nebyly nalezeny žádné články odpovídající vašemu filtru.</p>
        </motion.div>
      )}

      {hasMore && (
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={showMore}
            className="relative inline-block group overflow-hidden"
          >
            <span className="relative z-10 inline-flex items-center font-light tracking-widest text-xs uppercase py-3 px-10 border border-[#C9B8A8]/50 transition-all duration-500">
              <span>Načíst další</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#C9B8A8]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-[#121212] font-light tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <span>Načíst další</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </motion.button>
        </div>
      )}
    </div>
  );
}
