'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import PastriesHero from '@/components/pastries/PastriesHero';
import PastryCard from '@/components/pastries/PastryCard';
import { pastriesList, pastryTabs } from '@/lib/data';

export default function PastriesPage() {
  const [selectedTab, setSelectedTab] = useState('all');
  const tabs = pastryTabs || [];
  const items = pastriesList || [];

  // Filter items based on active tab
  const filteredPastries = useMemo(() => {
    if (selectedTab === 'all') return items;

    return items.filter((item) => {
      const name = item.name.toLowerCase();
      if (selectedTab === 'pastries') {
        return name.includes('pastry') || name.includes('cheesecake') || name.includes('éclair');
      }
      if (selectedTab === 'ice-creams') {
        return name.includes('ice cream');
      }
      if (selectedTab === 'dessert-cups') {
        return name.includes('cheesecake') || name.includes('tiramisu');
      }
      if (selectedTab === 'eclairs') {
        return name.includes('éclair') || name.includes('eclair');
      }
      if (selectedTab === 'tarts') {
        return name.includes('cheesecake') || name.includes('pastry');
      }
      if (selectedTab === 'mousse') {
        return name.includes('mousse') || name.includes('tiramisu');
      }
      return true;
    });
  }, [selectedTab, items]);

  return (
    <main className="min-h-screen bg-[#FDF1E1]">
      {/* 1. Hero Section */}
      <PastriesHero />

      {/* 2. Catalog Section */}
      <section id="catalog" className="w-full pb-16 pt-2">
        <div className="mx-auto max-w-[1360px] px-6">
          {/* Section Heading with Croissant Divider Icon */}
          <div className="mb-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C08A3E]" />
              <h2 className="font-serif text-2xl font-bold tracking-tight text-[#4A2015] sm:text-3xl">
                Our Pastries &amp; Ice Creams
              </h2>
              <span className="h-px w-10 bg-[#C08A3E]" />
            </div>

            {/* Centered croissant divider motif */}
            <div className="relative mt-2 h-4 w-12 opacity-80">
              <Image
                src="/images/brand/croissant-divider.png"
                alt=""
                fill
                sizes="48px"
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Filter Tabs Bar (Clean text-only pill selector, exactly like Breads) */}
          <div className="mb-8 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#E6D2B5]/80 bg-[#FFF9F0]/80 p-1.5 shadow-2xs backdrop-blur-xs">
              {tabs.map((tab) => {
                const isActive = selectedTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`rounded-full px-5 py-2 text-[13.5px] font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-[#6B3320] text-[#FDF1E1] shadow-2xs font-semibold'
                        : 'text-[#4A2015] hover:bg-[#FDF1E1] hover:text-[#6B3320]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6-Column Product Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {filteredPastries.map((product) => (
              <PastryCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty state fallback */}
          {filteredPastries.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[#E6D2B5] bg-[#FFF9F0] py-16 text-center">
              <p className="font-serif text-lg font-semibold text-[#4A2015]">
                No items found in this category
              </p>
              <button
                onClick={() => setSelectedTab('all')}
                className="mt-4 rounded-full bg-[#6B3320] px-5 py-2 text-xs font-semibold text-[#FDF1E1]"
              >
                View All Pastries &amp; Ice Creams
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
