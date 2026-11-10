'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-store';
import { useFavorites } from '@/lib/favorites-store';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
    <div className="group relative flex flex-col justify-between rounded-xl border border-[#E6D2B5]/70 bg-[#FFF9F0] p-3.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-[#C08A3E] hover:shadow-xs">
      
      {/* Top right: Wishlist heart icon */}
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/70 backdrop-blur-xs text-[#4A2015] transition-all hover:scale-110 hover:bg-white"
        aria-label={wishlisted ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg
          width="16"
          height="16"
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

      {/* Product Image */}
      <div className="relative mt-1 mb-2 flex h-[105px] w-full items-center justify-center overflow-hidden">
        <div className="relative h-[95px] w-[130px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 18vw"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col">
        {/* Name */}
        <h3 className="line-clamp-1 text-[14px] font-medium text-[#4A2015] tracking-tight">
          {product.name}
        </h3>

        {/* Price & Rating */}
        <div className="mt-1 mb-3 flex items-center justify-between text-[13px]">
          <span className="font-bold text-[#4A2015] text-[15px]">
            ₹{product.price}
          </span>
          
          <div className="flex items-center gap-1 text-[12px] text-[#7A5C4D]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="#D98A1F"
              className="text-[#D98A1F]"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="font-semibold text-[#4A2015]">{product.rating}</span>
            <span className="text-[11px] text-[#7A5C4D]/80">({product.reviewCount})</span>
          </div>
        </div>

        {/* Pill-shaped Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className={`w-full rounded-full py-1.5 px-4 text-[12.5px] font-medium transition-all duration-150 active:scale-[0.98] ${
            isAdding
              ? 'bg-[#4E7A3E] text-[#FDF1E1]'
              : 'bg-[#6B3320] text-[#FDF1E1] hover:bg-[#4A2015]'
          }`}
        >
          {isAdding ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>

    </div>
  );
}
