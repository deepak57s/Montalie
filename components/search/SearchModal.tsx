'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts } from '@/lib/data';
import { useCart } from '@/lib/cart-store';
import { useFavorites } from '@/lib/favorites-store';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Listen to open search event
  useEffect(() => {
    const handleOpenSearch = () => {
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('open-search', handleOpenSearch);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('open-search', handleOpenSearch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  // Filtered results
  const filteredProducts = useMemo(() => {
    if (!query.trim() && activeCategory === 'all') {
      return allProducts.slice(0, 8); // Top featured items by default
    }

    const cleanQuery = query.toLowerCase().trim();

    return allProducts.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        !cleanQuery ||
        product.name.toLowerCase().includes(cleanQuery) ||
        product.description.toLowerCase().includes(cleanQuery) ||
        product.category.toLowerCase().includes(cleanQuery);

      return matchesCategory && matchesSearch;
    });
  }, [query, activeCategory]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search baked goods"
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#4A2015]/60 p-4 pt-12 backdrop-blur-xs sm:pt-20"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#E6D2B5] bg-[#FFF9F0] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Input Bar */}
        <div className="relative flex items-center border-b border-[#E6D2B5] px-4 py-3.5 sm:px-6">
          <svg
            className="h-5 w-5 text-[#8A5A1C]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sourdough, chocolate truffle, croissants, gelato..."
            className="w-full bg-transparent px-3 text-base text-[#4A2015] placeholder-[#7A5C4D]/60 focus:outline-hidden"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="rounded-full p-1 text-[#7A5C4D] hover:bg-[#FDF1E1] hover:text-[#4A2015]"
              aria-label="Clear query"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="ml-2 rounded-lg border border-[#E6D2B5] bg-[#FDF1E1] px-2 py-1 text-[11px] font-semibold text-[#7A5C4D] hover:text-[#4A2015]"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-b border-[#E6D2B5]/50 bg-[#FDF1E1]/70 px-4 py-2 sm:px-6">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'cakes', label: 'Cakes' },
            { id: 'breads', label: 'Breads' },
            { id: 'pastries', label: 'Pastries & Gelato' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#4A2015] text-[#FDF1E1]'
                  : 'text-[#4A2015] hover:bg-[#FFF9F0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          <div className="mb-2 flex items-center justify-between text-xs text-[#7A5C4D]">
            <span>
              {query.trim()
                ? `Results for "${query}" (${filteredProducts.length})`
                : 'Popular & Recommended Bakes'}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-lg font-bold text-[#4A2015]">
                No delicious matches found
              </p>
              <p className="mt-1 text-xs text-[#7A5C4D]">
                Try searching for &quot;sourdough&quot;, &quot;truffle&quot;, &quot;croissant&quot;, or &quot;ice cream&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {filteredProducts.map((product) => {
                const wished = isFavorite(product.id);
                return (
                  <div
                    key={product.id}
                    className="group flex items-center gap-3 rounded-xl border border-[#E6D2B5]/60 bg-white p-2.5 transition-all hover:border-[#C08A3E] hover:shadow-xs"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#FDF1E1]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-serif text-sm font-semibold text-[#4A2015] group-hover:text-[#6B3320]">
                        {product.name}
                      </h4>
                      <div className="mt-0.5 flex items-center gap-2 text-xs">
                        <span className="font-bold text-[#4A2015]">₹{product.price}</span>
                        {product.unit && (
                          <span className="text-[11px] text-[#7A5C4D]">({product.unit})</span>
                        )}
                        <span className="text-[#C08A3E]">★ {product.rating}</span>
                      </div>
                    </div>

                    {/* Actions: Heart + Quick Add */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleFavorite(product)}
                        aria-label={wished ? 'Remove from favorites' : 'Add to favorites'}
                        className="rounded-lg p-1.5 text-[#7A5C4D] hover:bg-[#FDF1E1] hover:text-[#A83232]"
                      >
                        <svg
                          className={`h-4 w-4 ${wished ? 'fill-[#A83232] text-[#A83232]' : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() => {
                          addItem(product);
                          setIsOpen(false);
                        }}
                        aria-label={`Add ${product.name} to cart`}
                        className="rounded-lg bg-[#6B3320] px-2.5 py-1 text-xs font-semibold text-[#FDF1E1] hover:bg-[#4A2015]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-[#E6D2B5]/60 bg-[#FDF1E1]/50 px-4 py-2.5 text-center text-xs text-[#7A5C4D]">
          Tip: Press <kbd className="rounded border border-[#E6D2B5] bg-white px-1.5 py-0.5 text-[10px]">Ctrl</kbd> + <kbd className="rounded border border-[#E6D2B5] bg-white px-1.5 py-0.5 text-[10px]">K</kbd> anywhere to search anytime.
        </div>
      </div>
    </div>
  );
}
