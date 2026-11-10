'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '@/lib/favorites-store';
import { useCart } from '@/lib/cart-store';

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const { addItem } = useCart();

  return (
    <main className="min-h-screen bg-[#FDF1E1] pb-20 pt-6">
      <div className="mx-auto max-w-[1360px] px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-[#7A5C4D]">
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
          <span className="font-semibold text-[#4A2015]">Favorites</span>
        </nav>

        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#C08A3E]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A5A1C]">
                Saved Bakes
              </span>
            </div>
            <h1 className="mt-1 font-serif text-3xl font-bold tracking-tight text-[#4A2015] sm:text-4xl">
              Your Favorite Treats
            </h1>
            <p className="mt-1 text-sm text-[#7A5C4D]">
              {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved to your wishlist
            </p>
          </div>

          {favorites.length > 0 && (
            <button
              onClick={() => {
                favorites.forEach((p) => addItem(p));
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#4A2015] px-5 py-2.5 text-sm font-semibold text-[#FDF1E1] shadow-2xs transition-all hover:bg-[#6B3320]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Add All to Cart</span>
            </button>
          )}
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#E6D2B5] bg-[#FFF9F0] py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF1E1] text-[#8A5A1C] shadow-2xs">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h2 className="mt-4 font-serif text-xl font-bold text-[#4A2015]">
              No favorites saved yet
            </h2>
            <p className="mt-1.5 max-w-sm text-sm text-[#7A5C4D]">
              Click the heart icon on any cake, sourdough loaf, or pastry to save your favorite treats here for quick ordering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/cakes"
                className="rounded-full bg-[#6B3320] px-5 py-2.5 text-xs font-semibold text-[#FDF1E1] hover:bg-[#4A2015]"
              >
                Browse Cakes
              </Link>
              <Link
                href="/breads"
                className="rounded-full border border-[#C08A3E] bg-[#FFF9F0] px-5 py-2.5 text-xs font-semibold text-[#8A5A1C] hover:bg-[#FDF1E1]"
              >
                Explore Breads
              </Link>
              <Link
                href="/pastries"
                className="rounded-full border border-[#C08A3E] bg-[#FFF9F0] px-5 py-2.5 text-xs font-semibold text-[#8A5A1C] hover:bg-[#FDF1E1]"
              >
                View Pastries
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E6D2B5]/80 bg-[#FFF9F0] p-3 shadow-2xs transition-all hover:border-[#C08A3E] hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-[#FDF1E1]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Remove button */}
                    <button
                      onClick={() => removeFavorite(product.id)}
                      aria-label="Remove from favorites"
                      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF9F0]/90 text-[#A83232] shadow-xs backdrop-blur-xs hover:bg-[#A83232] hover:text-white transition-colors"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A5A1C]">
                      {product.category}
                    </span>
                    <h3 className="line-clamp-1 font-serif text-sm font-bold text-[#4A2015]">
                      {product.name}
                    </h3>
                    <div className="mt-1 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#4A2015] text-[15px]">₹{product.price}</span>
                      <span className="text-[#C08A3E]">★ {product.rating}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addItem(product)}
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#6B3320] py-2 text-xs font-semibold text-[#FDF1E1] transition-all hover:bg-[#4A2015] active:scale-95"
                >
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
