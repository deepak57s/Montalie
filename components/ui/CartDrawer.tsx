'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-store';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/40 transition-opacity"
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#FFF9F0] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E6D2B5] px-6 py-4">
          <h2 className="text-[18px] font-semibold text-[#4A2015]">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="rounded-full p-2 text-[#4A2015] transition-colors hover:bg-[#4A2015]/5"
            aria-label="Close cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              {/* Empty cart illustration */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-4 text-[#E6D2B5]"
              >
                <path
                  d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 10a4 4 0 0 1-8 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[15px] font-medium text-[#4A2015]">
                Your cart is empty
              </p>
              <p className="mt-1 text-[13px] text-[#7A5C4D]">
                Add some delicious treats to get started!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 rounded-lg border border-[#E6D2B5] bg-white p-3"
                >
                  {/* Item image */}
                  <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>

                  {/* Item details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-[14px] font-medium leading-snug text-[#4A2015]">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="flex-shrink-0 rounded p-1 text-[#7A5C4D] transition-colors hover:bg-[#A83232]/10 hover:text-[#A83232]"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center rounded-md border border-[#E6D2B5]">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="px-2.5 py-1 text-[14px] text-[#4A2015] transition-colors hover:bg-[#FDF1E1]"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="border-x border-[#E6D2B5] px-3 py-1 text-[13px] font-medium text-[#4A2015]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="px-2.5 py-1 text-[14px] text-[#4A2015] transition-colors hover:bg-[#FDF1E1]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="text-[14px] font-semibold text-[#4A2015]">
                        ₹
                        {(item.product.price * item.quantity).toLocaleString(
                          'en-IN'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals and CTA */}
        {items.length > 0 && (
          <div className="border-t border-[#E6D2B5] px-6 py-5">
            {/* Subtotal */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[14px] text-[#7A5C4D]">Subtotal</span>
              <span className="text-[18px] font-bold text-[#4A2015]">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Free delivery notice */}
            {totalPrice >= 499 ? (
              <p className="mb-4 text-center text-[12px] font-medium text-[#4E7A3E]">
                ✓ You qualify for free delivery!
              </p>
            ) : (
              <p className="mb-4 text-center text-[12px] text-[#7A5C4D]">
                Add ₹{(499 - totalPrice).toLocaleString('en-IN')} more for free
                delivery
              </p>
            )}

            {/* Checkout button */}
            <Link
              href="/checkout"
              onClick={() => setCartOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-[#4A2015] py-3 text-[15px] font-semibold text-[#FDF1E1] transition-all duration-150 hover:bg-[#6B3320] active:scale-[0.98]"
            >
              Proceed to Checkout
            </Link>

            {/* Continue shopping */}
            <button
              onClick={() => setCartOpen(false)}
              className="mt-3 w-full py-2 text-center text-[13px] font-medium text-[#8A5A1C] transition-colors hover:text-[#4A2015]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
