'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import BreadsHero from '@/components/breads/BreadsHero';
import BreadCard from '@/components/breads/BreadCard';
import { breadsList, breadTabs as defaultBreadTabs } from '@/lib/data';

const fallbackBreadTabs = [
  { id: 'all', label: 'All Breads & Croissants' },
  { id: 'croissants', label: 'Croissants & Danishes' },
  { id: 'artisan', label: 'Artisan Sourdough' },
  { id: 'indian', label: 'Indian Specialty Breads' },
  { id: 'stuffed', label: 'Stuffed Buns & Rolls' },
  { id: 'loaves', label: 'Daily Loaves' },
  { id: 'healthy', label: 'Healthy & Gluten-Free' },
];

export default function BreadsPage() {
  const [selectedTab, setSelectedTab] = useState('all');
  const tabs = defaultBreadTabs || fallbackBreadTabs;
  const items = breadsList || [];

  // Filter items based on the active tab
  const filteredBreads = useMemo(() => {
    if (selectedTab === 'all') return items;

    return items.filter((item) => {
      if (selectedTab === 'croissants') {
        return item.name.toLowerCase().includes('croissant');
      }
      if (selectedTab === 'artisan') {
        return (
          item.name.toLowerCase().includes('sourdough') ||
          item.name.toLowerCase().includes('garlic bread')
        );
      }
      if (selectedTab === 'indian') {
        return (
          item.name.toLowerCase().includes('pav') ||
          item.name.toLowerCase().includes('kulcha') ||
          item.name.toLowerCase().includes('naan')
        );
      }
      if (selectedTab === 'stuffed') {
        return (
          item.name.toLowerCase().includes('roll') ||
          item.name.toLowerCase().includes('stuffed')
        );
      }
      if (selectedTab === 'loaves') {
        return item.name.toLowerCase().includes('loaf');
      }
      if (selectedTab === 'healthy') {
        return (
          item.name.toLowerCase().includes('wheat') ||
          item.name.toLowerCase().includes('multigrain') ||
          item.name.toLowerCase().includes('sourdough')
        );
      }
      return true;
    });
  }, [selectedTab]);

  return (
    <div className="w-full bg-[#FDF1E1] min-h-screen">
      {/* Hero Section */}
      <BreadsHero />

      {/* Main Catalog Section */}
      <section id="breads-catalog" className="w-full py-8 md:py-12">
        <div className="mx-auto max-w-[1360px] px-6">
          
          {/* Section Header with Golden Croissant Divider */}
          <div className="mb-6 flex flex-col items-center text-center">
            
            {/* Title with decorative lines */}
            <div className="flex items-center justify-center gap-4 w-full">
              <span className="hidden sm:block h-[1px] w-16 md:w-28 bg-[#C08A3E]/60" />
              <h2
                className="text-[26px] font-semibold tracking-tight text-[#4A2015] sm:text-[30px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore Our Breads & Croissants
              </h2>
              <span className="hidden sm:block h-[1px] w-16 md:w-28 bg-[#C08A3E]/60" />
            </div>

            {/* Golden Croissant Motif under title */}
            <div className="relative mt-1 h-[18px] w-[140px]">
              <Image
                src="/images/brand/croissant-divider.png"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Filter Tabs Bar (Pill selector) */}
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

          {/* 6-Column Responsive Product Grid */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3.5">
            {filteredBreads.map((product) => (
              <BreadCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty state fallback */}
          {filteredBreads.length === 0 && (
            <div className="rounded-xl border border-[#E6D2B5] bg-[#FFF9F0] p-12 text-center">
              <p className="text-[16px] font-medium text-[#4A2015]">
                No items found in this category.
              </p>
              <button
                onClick={() => setSelectedTab('all')}
                className="mt-4 rounded-full bg-[#4A2015] px-6 py-2 text-[13px] font-semibold text-[#FDF1E1] hover:bg-[#6B3320]"
              >
                View All Breads & Croissants
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
