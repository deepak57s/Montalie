'use client';

import Link from 'next/link';
import Image from 'next/image';
import { bestsellers } from '@/lib/data';
import ProductCard from '@/components/product/ProductCard';

export default function BestsellerGrid() {
  return (
    <section className="w-full bg-[#FDF1E1] py-8 sm:py-12">
      <div className="mx-auto max-w-[1360px] px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="text-[24px] font-semibold tracking-tight text-[#4A2015] sm:text-[28px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bestsellers
          </h2>

          <Link
            href="/shop"
            className="group flex items-center gap-1.5 text-[13.5px] font-medium text-[#4A2015] transition-colors hover:text-[#8A5A1C]"
          >
            <span>View All</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* 12-Column Responsive Layout: 4 products (2 cols each = 8 cols) + 1 Custom Cakes card (4 cols) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* 4 Product Cards */}
          {bestsellers.map((product) => (
            <div key={product.id} className="lg:col-span-2">
              <ProductCard product={product} />
            </div>
          ))}

          {/* Custom Cakes Promotional Card (Spans 4 columns) */}
          <div className="relative overflow-hidden rounded-xl border border-[#C08A3E]/30 bg-gradient-to-r from-[#7D3F1E] via-[#8E4A25] to-[#B87A4A] p-5 text-white shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-xs sm:col-span-2 lg:col-span-4 flex flex-col justify-between min-h-[220px]">
            
            {/* Background image containing the decorated 2-tier celebration cake */}
            <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden pointer-events-none">
              <Image
                src="/images/products/custom-cake-only.jpg"
                alt="Two tier custom celebration cake decorated with pastel roses and Montalie gold emblem"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </div>

            {/* Left Content */}
            <div className="relative z-10 max-w-[62%] flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-[20px] font-bold leading-snug text-[#FFF9F0] sm:text-[22px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Custom Cakes
                  <br />
                  for Your
                  <br />
                  Special Moments
                </h3>

                <p className="mt-1 text-[11.5px] italic text-[#FDF1E1]/85">
                  Birthdays · Anniversaries · Celebrations
                </p>
              </div>

              {/* Order a Custom Cake CTA button */}
              <div className="mt-6">
                <Link
                  href="/custom-cakes"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#FFF9F0] bg-transparent px-4 py-1.5 text-[12.5px] font-medium text-[#FFF9F0] transition-all hover:bg-white/15 active:scale-[0.98]"
                >
                  <span>Order a Custom Cake</span>
                  <svg
                    width="12"
                    height="12"
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
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
