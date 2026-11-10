'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-store';
import { useFavorites } from '@/lib/favorites-store';
import { useState } from 'react';

interface BreadProduct extends Product {
  unit?: string;
}

interface BreadCardProps {
  product: BreadProduct;
}

export default function BreadCard({ product }: BreadCardProps) {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const wishlisted = isFavorite(product.id);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-[#E6D2B5]/75 bg-[#FFF9F0] p-3 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-[#C08A3E] hover:shadow-xs">
      
      {/* Top right: Wishlist heart */}
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/70 backdrop-blur-xs text-[#4A2015] transition-all hover:scale-110 hover:bg-white"
        aria-label={wishlisted ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={wishlisted ? '#A83232' : 'none'}
          stroke={wishlisted ? '#A83232' : 'currentColor'}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Bread & Croissant Food Image */}
      <div className="relative mt-1 mb-2 flex h-[92px] w-full items-center justify-center overflow-hidden">
        <div className="relative h-[82px] w-[118px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col">
        {/* Title */}
        <h3 className="line-clamp-1 text-[13.5px] font-medium text-[#4A2015] tracking-tight">
          {product.name}
        </h3>

        {/* Price & Rating */}
        <div className="mt-1 mb-2.5 flex items-center justify-between text-[12.5px]">
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-[#4A2015] text-[14.5px]">
              ₹{product.price}
            </span>
            {product.unit && (
              <span className="text-[11px] font-normal text-[#7A5C4D]">
                ({product.unit})
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1 text-[11.5px] text-[#7A5C4D]">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="#D98A1F"
              className="text-[#D98A1F]"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="font-semibold text-[#4A2015]">{product.rating}</span>
            <span className="text-[10.5px] text-[#7A5C4D]/80">({product.reviewCount})</span>
          </div>
        </div>

        {/* Add to Cart button with mini shopping cart icon */}
        <button
          onClick={handleAddToCart}
          className={`flex items-center justify-center gap-1.5 w-full rounded-full py-1.5 px-3 text-[12px] font-medium transition-all duration-150 active:scale-[0.98] ${
            isAdding
              ? 'bg-[#4E7A3E] text-[#FDF1E1]'
              : 'bg-[#6B3320] text-[#FDF1E1] hover:bg-[#4A2015]'
          }`}
        >
          {!isAdding && (
            <svg
              width="13"
              height="13"
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
          )}
          <span>{isAdding ? '✓ Added' : 'Add to Cart'}</span>
        </button>
      </div>

    </div>
  );
}
