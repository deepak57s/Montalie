'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BreadsHero() {
  return (
    <section className="w-full bg-[#FDF1E1] overflow-hidden pt-4 pb-8">
      <div className="mx-auto max-w-[1360px] px-6">
        
        {/* Breadcrumb: Home > Breads */}
        <div className="mb-6 flex items-center gap-2 text-[12.5px] text-[#7A5C4D]">
          <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-[#4A2015]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </Link>
          <span className="text-[#C08A3E] font-medium">›</span>
          <span className="font-medium text-[#4A2015]">Breads</span>
        </div>

        {/* Hero Grid: Left Content (5 cols) + Right Image (7 cols) */}
        <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-5 z-10 pr-0 lg:pr-4">
            
            {/* Kicker badge */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C08A3E]" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[2.8px] text-[#8A5A1C]">
                Our Bread Collection
              </span>
              <span className="h-[1px] w-8 bg-[#C08A3E]" />
            </div>

            {/* Display Headline */}
            <h1
              className="mb-4 text-[42px] font-bold leading-[1.12] text-[#4A2015] sm:text-[50px] lg:text-[54px] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Breads & Croissants
            </h1>

            {/* Subtitle / paragraph */}
            <p className="mb-7 max-w-[440px] text-[15px] italic leading-relaxed text-[#7A5C4D]">
              From classic loaves to indian-inspired bakes and flaky croissants, discover freshly baked delights for every taste.
            </p>

            {/* Action buttons */}
            <div className="mb-10 flex flex-wrap items-center gap-3.5">
              <Link
                href="#breads-catalog"
                className="inline-flex items-center gap-2 rounded-full bg-[#4A2015] px-7 py-3 text-[14px] font-semibold text-[#FDF1E1] shadow-xs transition-all duration-150 hover:bg-[#6B3320] active:scale-[0.98]"
              >
                <span>Shop Breads</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link
                href="#recipes"
                className="inline-flex items-center gap-2 rounded-full border border-[#C08A3E] bg-[#FFF9F0]/60 px-6 py-3 text-[14px] font-semibold text-[#8A5A1C] transition-all duration-150 hover:bg-[#C08A3E]/15 active:scale-[0.98]"
              >
                {/* Chef hat recipe icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                  <line x1="6" y1="17" x2="18" y2="17" />
                </svg>
                <span>Explore Recipes</span>
              </Link>
            </div>

            {/* 3 Feature trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-[#4A2015] w-full max-w-[440px]">
              {/* Feature 1: Fresh Ingredients */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[#C08A3E]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12A10 10 0 0 1 12 2z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-[#4A2015]">Fresh</p>
                  <p className="text-[11px] text-[#7A5C4D]">Ingredients</p>
                </div>
              </div>

              {/* Feature 2: Baked Daily */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[#C08A3E]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                    <line x1="6" y1="17" x2="18" y2="17" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-[#4A2015]">Baked</p>
                  <p className="text-[11px] text-[#7A5C4D]">Daily</p>
                </div>
              </div>

              {/* Feature 3: Fast & Safe Delivery */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[#C08A3E]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-[#4A2015]">Fast & Safe</p>
                  <p className="text-[11px] text-[#7A5C4D]">Delivery</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Breads & Croissants Photography */}
          <div className="relative flex items-center justify-center lg:col-span-7">
            <div className="relative w-full aspect-[594/200] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero/breads-hero-clean.jpg"
                alt="Montalie breads and croissants selection including country sourdough, pav, stuffed paneer roll, and flaky croissants on rustic wooden boards"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
