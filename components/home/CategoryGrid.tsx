'use client';

import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function CategoryGrid() {
  return (
    <section className="w-full bg-[#FDF1E1] py-8 sm:py-12">
      <div className="mx-auto max-w-[1360px] px-6">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          {/* Main Title flanked by subtle gold lines */}
          <div className="flex items-center justify-center gap-4 w-full">
            <span className="hidden sm:block h-[1px] w-20 md:w-32 bg-[#C08A3E]/60" />
            <h2
              className="text-[26px] font-semibold tracking-tight text-[#4A2015] sm:text-[30px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Delicious Range
            </h2>
            <span className="hidden sm:block h-[1px] w-20 md:w-32 bg-[#C08A3E]/60" />
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

        {/* 7 Category Cards Grid */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group flex flex-col items-center justify-between rounded-xl border border-[#E6D2B5]/70 bg-[#FFF9F0] px-3 py-4 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-[#C08A3E] hover:shadow-xs"
            >
              {/* Product cutout image */}
              <div className="relative flex h-[74px] w-full items-center justify-center overflow-hidden">
                <div className="relative h-[62px] w-[95px]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="110px"
                  />
                </div>
              </div>

              {/* Category label */}
              <span className="mt-2 text-center text-[13.5px] font-medium text-[#4A2015] group-hover:text-[#6B3320]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
