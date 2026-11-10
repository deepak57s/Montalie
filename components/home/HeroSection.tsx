'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FDF1E1] overflow-hidden">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center lg:grid-cols-12 px-6 pt-6 pb-12 lg:py-10">
        
        {/* Left column: Text & CTAs (5 columns on desktop) */}
        <div className="flex flex-col items-start lg:col-span-5 z-10 pr-0 lg:pr-4">
          
          {/* Kicker badge */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C08A3E]" />
            <span className="text-[11.5px] font-semibold uppercase tracking-[2.8px] text-[#8A5A1C]">
              Freshly Baked, Every Day
            </span>
            <span className="h-[1px] w-8 bg-[#C08A3E]" />
          </div>

          {/* Main Display Headline */}
          <h1
            className="mb-4 text-[42px] font-bold leading-[1.12] text-[#4A2015] sm:text-[50px] lg:text-[56px] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Artisan Bakes for
            <br />
            Every Occasion
          </h1>

          {/* Subtitle / paragraph */}
          <p className="mb-7 max-w-[430px] text-[15px] italic leading-relaxed text-[#7A5C4D]">
            Handcrafted breads, decadent cakes and irresistible pastries, made
            with the finest ingredients.
          </p>

          {/* Action buttons */}
          <div className="mb-10 flex flex-wrap items-center gap-3.5">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#4A2015] px-7 py-3 text-[14px] font-semibold text-[#FDF1E1] shadow-xs transition-all duration-150 hover:bg-[#6B3320] active:scale-[0.98]"
            >
              <span>Shop Now</span>
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
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-[#C08A3E] bg-transparent px-6 py-3 text-[14px] font-semibold text-[#8A5A1C] transition-all duration-150 hover:bg-[#C08A3E]/10 active:scale-[0.98]"
            >
              Explore Our Menu
            </Link>
          </div>

          {/* 3 Feature trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-[#4A2015] w-full max-w-[440px]">
            {/* Feature 1: Premium Ingredients */}
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
                <p className="text-[12.5px] font-semibold text-[#4A2015]">Premium</p>
                <p className="text-[11px] text-[#7A5C4D]">Ingredients</p>
              </div>
            </div>

            {/* Feature 2: Freshly Baked Daily */}
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
                <p className="text-[12.5px] font-semibold text-[#4A2015]">Freshly</p>
                <p className="text-[11px] text-[#7A5C4D]">Baked Daily</p>
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

        {/* Right column: Cohesive Hero Photography (7 columns on desktop) */}
        <div className="relative mt-8 flex items-center justify-center lg:col-span-7 lg:mt-0">
          <div className="relative w-full aspect-[664/290] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero/hero-banner.jpg"
              alt="Artisan bakery spread featuring freshly baked rustic sourdough bread, butter croissants, rich chocolate drizzle cake, and strawberry cream celebration cake"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
