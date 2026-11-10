'use client';

import { useState, useMemo } from 'react';
import CakesHero from '@/components/cakes/CakesHero';
import CakeSidebar from '@/components/cakes/CakeSidebar';
import CakeCard from '@/components/cakes/CakeCard';
import { cakesList, cakeCategories } from '@/lib/data';

export default function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Filter cakes based on category
  const filteredCakes = useMemo(() => {
    let result = [...cakesList];

    if (selectedCategory !== 'all') {
      result = result.filter((cake) => {
        if (selectedCategory === 'chocolate') {
          return (
            cake.name.toLowerCase().includes('chocolate') ||
            cake.name.toLowerCase().includes('ferrero') ||
            cake.name.toLowerCase().includes('oreo')
          );
        }
        if (selectedCategory === 'fruit') {
          return (
            cake.name.toLowerCase().includes('strawberry') ||
            cake.name.toLowerCase().includes('mango') ||
            cake.name.toLowerCase().includes('blueberry')
          );
        }
        if (selectedCategory === 'cheesecakes') {
          return cake.name.toLowerCase().includes('cheesecake');
        }
        if (selectedCategory === 'cream') {
          return (
            cake.name.toLowerCase().includes('cream') ||
            cake.name.toLowerCase().includes('forest') ||
            cake.name.toLowerCase().includes('velvet') ||
            cake.name.toLowerCase().includes('butterscotch') ||
            cake.name.toLowerCase().includes('tiramisu')
          );
        }
        return true;
      });
    }

    // Sort cakes
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy]);

  const currentCategoryLabel =
    cakeCategories.find((c) => c.id === selectedCategory)?.label || 'All Cakes';

  return (
    <div className="w-full bg-[#FDF1E1] min-h-screen">
      {/* Cakes Page Hero Banner */}
      <CakesHero />

      {/* Main Catalog Section */}
      <section id="cakes-catalog" className="w-full py-8 md:py-12">
        <div className="mx-auto max-w-[1360px] px-6">
          
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            
            {/* Left Column: Categories Sidebar (3 cols on desktop) */}
            <div className="lg:col-span-3">
              <CakeSidebar
                selectedCategory={selectedCategory}
                onSelectCategory={(id) => setSelectedCategory(id)}
              />
            </div>

            {/* Right Column: Catalog Header & 5-Column Grid (9 cols on desktop) */}
            <div className="lg:col-span-9">
              
              {/* Header Bar: Category Title (Count) + Sort Dropdown */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#E6D2B5]/60 pb-4">
                
                {/* Title + Count */}
                <h2
                  className="text-[22px] font-semibold text-[#4A2015] sm:text-[24px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {currentCategoryLabel} <span className="text-[17px] font-normal text-[#7A5C4D]">({selectedCategory === 'all' ? 42 : filteredCakes.length})</span>
                </h2>

                {/* Sort By Dropdown Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-[#7A5C4D]">Sort By:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="cursor-pointer appearance-none rounded-lg border border-[#E6D2B5] bg-[#FFF9F0] py-1.5 pl-3 pr-8 text-[13px] font-medium text-[#4A2015] shadow-2xs transition-colors hover:border-[#C08A3E] focus:outline-none focus:ring-1 focus:ring-[#C08A3E]"
                    >
                      <option value="popular">Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>

                    {/* Chevron icon */}
                    <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4A2015]">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* 5-Column Product Grid */}
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3.5">
                {filteredCakes.map((cake) => (
                  <CakeCard key={cake.id} product={cake} />
                ))}
              </div>

              {/* Empty state if category has no direct cakes */}
              {filteredCakes.length === 0 && (
                <div className="rounded-xl border border-[#E6D2B5] bg-[#FFF9F0] p-12 text-center">
                  <p className="text-[16px] font-medium text-[#4A2015]">
                    No cakes found in this category.
                  </p>
                  <p className="mt-1 text-[13px] text-[#7A5C4D]">
                    Please select another category or view all cakes.
                  </p>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="mt-4 rounded-full bg-[#4A2015] px-6 py-2 text-[13px] font-semibold text-[#FDF1E1] hover:bg-[#6B3320]"
                  >
                    View All Cakes
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
