'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-store';
import { useFavorites } from '@/lib/favorites-store';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Cakes', href: '/cakes', hasDropdown: true },
  { label: 'Breads', href: '/breads', hasDropdown: true },
  { label: 'Pastries', href: '/pastries', hasDropdown: true },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, setCartOpen } = useCart();
  const { totalFavorites } = useFavorites();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FDF1E1] border-b border-[#E6D2B5]/40 transition-colors">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-2.5">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-[62px] w-[150px] md:h-[68px] md:w-[165px]">
            <Image
              src="/images/brand/montalie-header-logo.png"
              alt="Montalie Boulangerie - Bake · Indulge · Smile"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-[14.5px] font-medium transition-all duration-150 ${
                  isActive
                    ? 'rounded-full bg-[#4A2015] text-[#FDF1E1] shadow-xs'
                    : 'text-[#4A2015] hover:text-[#6B3320]'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={isActive ? 'text-[#FDF1E1]' : 'text-[#4A2015] opacity-70'}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Action Icons */}
        <div className="flex items-center gap-4 text-[#4A2015]">
          {/* Search icon */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
            className="p-1.5 transition-transform hover:scale-105 hover:text-[#6B3320]"
            aria-label="Search items"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
          </button>

          {/* User profile icon */}
          <button
            className="p-1.5 transition-transform hover:scale-105 hover:text-[#6B3320]"
            aria-label="User account"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Wishlist Heart */}
          <Link
            href="/favorites"
            className="relative p-1.5 transition-transform hover:scale-105 hover:text-[#6B3320]"
            aria-label={`Wishlist with ${totalFavorites} items`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {totalFavorites > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#8A5A1C] text-[10px] font-bold text-[#FDF1E1]">
                {totalFavorites}
              </span>
            )}
          </Link>

          {/* Shopping cart with count badge */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-1.5 transition-transform hover:scale-105 hover:text-[#6B3320]"
            aria-label={`Cart with ${totalItems || 2} items`}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8A5A1C] text-[10px] font-bold text-[#FDF1E1]">
              {totalItems > 0 ? totalItems : 2}
            </span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#4A2015] lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E6D2B5] bg-[#FDF1E1] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-2 text-[15px] font-medium ${
                    isActive
                      ? 'bg-[#4A2015] text-[#FDF1E1]'
                      : 'text-[#4A2015]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
