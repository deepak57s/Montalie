'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PastriesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDF1E1] pb-6 pt-4">
      <div className="mx-auto max-w-[1360px] px-6">
        {/* Breadcrumbs: Home › Pastries */}
        <nav aria-label="Breadcrumbs" className="mb-4 flex items-center gap-1.5 text-xs text-[#7A5C4D]">
          <Link href="/" className="flex items-center gap-1 hover:text-[#4A2015] transition-colors">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Home</span>
          </Link>
          <span className="text-[#C08A3E]">›</span>
          <span className="font-semibold text-[#4A2015]">Pastries</span>
        </nav>

        {/* 2-Column Hero: Left Copy, Right High-Def Bakery & Ice Cream Spread */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Headlines, Buttons, Trust Badges */}
          <div className="lg:col-span-5">
            {/* Kicker with golden accent rules */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-[#C08A3E]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#8A5A1C] uppercase">
                Pastries &amp; Ice Creams
              </span>
              <span className="h-px w-6 bg-[#C08A3E]" />
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#4A2015] sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
              Pastries &amp; Ice Creams <br className="hidden sm:inline" />
              for Every Craving
            </h1>

            <p className="mt-3.5 max-w-[440px] text-[15px] italic text-[#7A5C4D]">
              Delicate pastries, rich desserts and creamy ice creams to make life sweeter.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-[#6B3320] px-6 py-2.5 text-sm font-semibold text-[#FDF1E1] shadow-sm transition-all hover:bg-[#4A2015]"
              >
                <span>Shop Pastries</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full border border-[#C08A3E] bg-[#FFF9F0] px-5 py-2.5 text-sm font-semibold text-[#8A5A1C] transition-all hover:bg-[#FDF1E1]"
              >
                {/* Ice cream cone bespoke SVG */}
                <svg
                  className="h-4 w-4 text-[#C08A3E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21l-5-10h10l-5 10z" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Explore Ice Creams</span>
              </Link>
            </div>

            {/* 4 Trust Badges matching exact image pill row */}
            <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-[#E6D2B5]/50 pt-5 text-xs text-[#4A2015]">
              {/* Badge 1: Premium Desserts */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF9F0] text-[#C08A3E] shadow-2xs border border-[#E6D2B5]/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z" />
                    <path d="M6 10c0-3 3-6 6-6s6 3 6 6" />
                    <path d="M12 2v2" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <span className="block font-semibold">Premium</span>
                  <span className="text-[#7A5C4D]">Desserts</span>
                </div>
              </div>

              {/* Badge 2: Creamy Ice Creams */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF9F0] text-[#C08A3E] shadow-2xs border border-[#E6D2B5]/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21l-4-9h8l-4 9z" />
                    <circle cx="12" cy="8" r="4" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <span className="block font-semibold">Creamy</span>
                  <span className="text-[#7A5C4D]">Ice Creams</span>
                </div>
              </div>

              {/* Badge 3: Fresh Ingredients */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF9F0] text-[#C08A3E] shadow-2xs border border-[#E6D2B5]/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3c-4.97 0-9 4.03-9 9 0 3.53 2.04 6.58 5 8.05V15a4 4 0 0 1 4-4h4.95A8.99 8.99 0 0 0 12 3z" />
                    <path d="M12 12c2.21 0 4-1.79 4-4" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <span className="block font-semibold">Fresh</span>
                  <span className="text-[#7A5C4D]">Ingredients</span>
                </div>
              </div>

              {/* Badge 4: Fast & Safe Delivery */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF9F0] text-[#C08A3E] shadow-2xs border border-[#E6D2B5]/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <span className="block font-semibold">Fast &amp; Safe</span>
                  <span className="text-[#7A5C4D]">Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Banner Image Spread */}
          <div className="relative h-[250px] w-full sm:h-[300px] lg:col-span-7 lg:h-[330px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#E6D2B5]/60 bg-[#FFF9F0] shadow-sm">
              <Image
                src="/images/pastries/pastries-hero-banner.jpg"
                alt="Montalie Artisan Pastries and Churned Ice Creams Spread"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
