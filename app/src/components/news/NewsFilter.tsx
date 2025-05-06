'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, Filter, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Typy pro články a kategorie
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  content?: string; // Volitelný obsah článku pro detail stránky
}

export interface Category {
  id: string;
  name: string;
}

interface NewsFilterProps {
  news: NewsItem[];
  categories: Category[];
  onFilterChange: (filteredNews: NewsItem[]) => void;
}

export default function NewsFilter({ news, categories, onFilterChange }: NewsFilterProps) {
  // Stavy pro filtrování
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  // Efekt pro filtrování článků
  useEffect(() => {
    const filteredNews = news.filter((item) => {
      // Filtrování podle vyhledávacího výrazu
      const matchesSearch = searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtrování podle kategorie
      const matchesCategory = selectedCategory === 'all' ||
        item.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;

      // Filtrování podle data
      let matchesDate = true;
      if (dateRange.from) {
        matchesDate = matchesDate && new Date(item.date) >= new Date(dateRange.from);
      }
      if (dateRange.to) {
        matchesDate = matchesDate && new Date(item.date) <= new Date(dateRange.to);
      }

      return matchesSearch && matchesCategory && matchesDate;
    });

    // Řazení novinek
    const sortedNews = [...filteredNews].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (sortBy === 'newest') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    onFilterChange(sortedNews);
  }, [news, searchTerm, selectedCategory, sortBy, dateRange, onFilterChange]);

  // Funkce pro resetování filtrů
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('newest');
    setDateRange({ from: '', to: '' });
    setIsAdvancedFilterOpen(false);
  };

  return (
    <div className="mb-12">
      {/* Hlavní vyhledávací pole */}
      <div className="relative mb-6">
        <div className="flex items-center bg-white border border-[#E6CCB2]/30 rounded-sm overflow-hidden focus-within:border-[#E6CCB2] transition-all duration-300 shadow-sm">
          <div className="pl-4 text-[#C9B8A8]">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Hledat v blogu..."
            className="w-full py-3 px-3 text-[#121212] bg-transparent border-none focus:outline-none font-light"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="pr-4 text-[#C9B8A8] hover:text-[#121212] transition-colors duration-300"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={() => setIsAdvancedFilterOpen(!isAdvancedFilterOpen)}
            className={`px-4 py-3 border-l border-[#E6CCB2]/30 text-[#121212] hover:bg-[#F8F4E9]/50 transition-all duration-300 flex items-center ${isAdvancedFilterOpen ? 'bg-[#F8F4E9]/50' : ''}`}
          >
            <Filter size={16} className="mr-2" />
            <span className="text-sm font-light">Filtry</span>
          </button>
        </div>

        {/* Rozšířené filtry */}
        <AnimatePresence>
          {isAdvancedFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#E6CCB2]/30 rounded-sm mt-2 overflow-hidden shadow-sm"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Filtr podle data */}
                  <div>
                    <h3 className="text-sm font-medium text-[#121212] mb-3 flex items-center">
                      <Calendar size={16} className="mr-2 text-[#C9B8A8]" />
                      Filtrovat podle data
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date-from" className="block text-xs text-[#121212]/70 mb-1">Od</label>
                        <input
                          type="date"
                          id="date-from"
                          value={dateRange.from}
                          onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                          className="w-full p-2 border border-[#E6CCB2]/30 rounded-sm focus:outline-none focus:border-[#E6CCB2] text-sm font-light"
                        />
                      </div>
                      <div>
                        <label htmlFor="date-to" className="block text-xs text-[#121212]/70 mb-1">Do</label>
                        <input
                          type="date"
                          id="date-to"
                          value={dateRange.to}
                          onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                          className="w-full p-2 border border-[#E6CCB2]/30 rounded-sm focus:outline-none focus:border-[#E6CCB2] text-sm font-light"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Řazení */}
                  <div>
                    <h3 className="text-sm font-medium text-[#121212] mb-3 flex items-center">
                      <Tag size={16} className="mr-2 text-[#C9B8A8]" />
                      Řazení
                    </h3>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === 'newest'}
                          onChange={() => setSortBy('newest')}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 mr-2 border rounded-full flex items-center justify-center ${sortBy === 'newest' ? 'border-[#C9B8A8]' : 'border-[#E6CCB2]/30'}`}>
                          {sortBy === 'newest' && <span className="w-2 h-2 rounded-full bg-[#C9B8A8]"></span>}
                        </span>
                        <span className="text-sm font-light">Nejnovější</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === 'oldest'}
                          onChange={() => setSortBy('oldest')}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 mr-2 border rounded-full flex items-center justify-center ${sortBy === 'oldest' ? 'border-[#C9B8A8]' : 'border-[#E6CCB2]/30'}`}>
                          {sortBy === 'oldest' && <span className="w-2 h-2 rounded-full bg-[#C9B8A8]"></span>}
                        </span>
                        <span className="text-sm font-light">Nejstarší</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={resetFilters}
                    className="text-sm font-light text-[#121212]/70 hover:text-[#121212] transition-colors duration-300 mr-4"
                  >
                    Resetovat filtry
                  </button>
                  <button
                    onClick={() => setIsAdvancedFilterOpen(false)}
                    className="px-4 py-2 bg-[#E6CCB2]/80 hover:bg-[#E6CCB2] text-[#121212] transition-colors duration-300 rounded-sm text-sm font-light"
                  >
                    Použít filtry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Kategorie */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 transition-all duration-300 ${
              category.id === selectedCategory
                ? 'border-b-2 border-[#C9B8A8] text-[#121212] font-medium'
                : 'border-b border-[#E6CCB2]/30 text-[#121212]/70 hover:border-[#C9B8A8] hover:text-[#121212]'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
