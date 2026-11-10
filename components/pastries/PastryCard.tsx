'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-store';
import { useFavorites } from '@/lib/favorites-store';

interface PastryCardProps {
  product: Product;
}

export default function PastryCard({ product }: PastryCardProps) {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const isWished = isFavorite(product.id);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 900);
  };

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E6D2B5]/70 bg-[#FFF9F0] p-2.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-[#C08A3E]/60 hover:shadow-md">
      {/* Top Image + Wishlist Heart button */}
      <div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-[#FDF1E1]/80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />

          {/* Heart / Wishlist button */}
          <button
            onClick={() => toggleFavorite(product)}
            aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
            className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF9F0]/90 text-[#4A2015] shadow-xs backdrop-blur-xs transition-colors hover:text-[#A83232]"
          >
            <svg
              className={`h-3.5 w-3.5 transition-colors ${
                isWished ? 'fill-[#A83232] text-[#A83232]' : 'fill-none text-[#7A5C4D]'
              }`}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        {/* Product Details */}
        <div className="mt-2.5">
          <h3 className="line-clamp-1 font-serif text-[13.5px] font-bold text-[#4A2015] group-hover:text-[#6B3320]">
            {product.name}
          </h3>

          {/* Price, Unit, and Star Rating Row */}
          <div className="mt-1 flex items-center justify-between text-xs">
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-[#4A2015] text-[14px]">₹{product.price}</span>
              {product.unit && (
                <span className="text-[11px] text-[#7A5C4D]">({product.unit})</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-[11px] font-medium text-[#7A5C4D]">
              <span className="text-[#C08A3E]">★</span>
              <span>{product.rating}</span>
              <span className="text-[#7A5C4D]/70">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={handleAddToCart}
        className={`mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold text-[#FDF1E1] shadow-2xs transition-all duration-150 ${
          addedAnimation
            ? 'bg-[#4E7A3E]'
            : 'bg-[#6B3320] hover:bg-[#4A2015] active:scale-95'
        }`}
      >
        <svg
          className="h-3 w-3 text-[#FDF1E1]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span>{addedAnimation ? 'Added!' : 'Add to Cart'}</span>
      </button>
    </article>
  );
}
