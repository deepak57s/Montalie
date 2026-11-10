'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface StoredOrder {
  orderId: string;
  createdAt: string;
  items: Array<{
    product: {
      id: string;
      name: string;
      price: number;
      image: string;
      category: string;
    };
    quantity: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  packagingFee: number;
  grandTotal: number;
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'upi' | 'cod';
  customer: {
    fullName: string;
    phone: string;
    email?: string;
  };
  deliveryDetails?: {
    streetAddress?: string;
    landmark?: string;
    city?: string;
    pincode?: string;
    deliverySlot?: string;
    outlet?: string;
    pickupTime?: string;
  };
  notes?: string;
}

function OrderReceivedContent() {
  const searchParams = useSearchParams();
  const urlOrderId = searchParams.get('orderId');
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('montalie-last-order');
      if (saved) {
        setOrder(JSON.parse(saved));
      }
    } catch {
      // fallback
    }
  }, []);

  const orderId = order?.orderId || urlOrderId || 'MNT-482910';
  const isPickup = order?.deliveryMethod === 'pickup';

  return (
    <main className="min-h-screen bg-[#FDF1E1] pb-24 pt-8">
      <div className="mx-auto max-w-3xl px-6">
        {/* Success Card */}
        <div className="overflow-hidden rounded-3xl border border-[#E6D2B5] bg-[#FFF9F0] shadow-sm">
          {/* Header Banner */}
          <div className="border-b border-[#E6D2B5]/60 bg-gradient-to-b from-[#FFF9F0] to-[#FDF1E1] px-6 py-10 text-center sm:px-12">
            {/* Green Checkmark Badge */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4E7A3E]/15 text-[#4E7A3E] ring-8 ring-[#4E7A3E]/10">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[#C08A3E]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A5A1C]">
                Order Confirmed
              </span>
              <span className="h-px w-6 bg-[#C08A3E]" />
            </div>

            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#4A2015] sm:text-4xl">
              Thank You for Your Order!
            </h1>
            <p className="mt-2 text-sm text-[#7A5C4D]">
              We have received your order and our bakers are preparing your fresh artisanal bakes.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E6D2B5] bg-white px-4 py-1.5 text-xs">
              <span className="text-[#7A5C4D]">Order ID:</span>
              <span className="font-mono font-bold text-[#4A2015]">{orderId}</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Status Steps Tracker */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8A5A1C]">
                Live Bakery Status
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl border border-[#4E7A3E]/40 bg-[#4E7A3E]/10 p-3">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#4E7A3E] text-white">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-bold text-[#4A2015]">Received</p>
                  <p className="text-[10px] text-[#7A5C4D]">Kitchen notified</p>
                </div>

                <div className="rounded-xl border border-[#C08A3E]/40 bg-[#C08A3E]/10 p-3">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#C08A3E] text-white animate-pulse">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-bold text-[#4A2015]">In Oven / Prep</p>
                  <p className="text-[10px] text-[#7A5C4D]">Baking with care</p>
                </div>

                <div className="rounded-xl border border-[#E6D2B5] bg-white p-3 opacity-60">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#E6D2B5] text-[#7A5C4D]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-bold text-[#4A2015]">
                    {isPickup ? 'Ready for Pickup' : 'Out for Delivery'}
                  </p>
                  <p className="text-[10px] text-[#7A5C4D]">
                    {isPickup ? 'At bakery counter' : 'Dispatched'}
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery / Pickup Summary */}
            <div className="rounded-2xl border border-[#E6D2B5] bg-white p-5">
              <h3 className="font-serif text-base font-bold text-[#4A2015]">
                {isPickup ? 'Bakery Pickup Information' : 'Delivery Address & Slot'}
              </h3>

              <div className="mt-3 grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-[#8A5A1C] uppercase tracking-wider text-[11px]">
                    Customer
                  </p>
                  <p className="mt-1 font-semibold text-[#4A2015] text-sm">
                    {order?.customer.fullName || 'Valued Guest'}
                  </p>
                  <p className="text-[#7A5C4D]">{order?.customer.phone || '+91 98765 43210'}</p>
                  {order?.customer.email && (
                    <p className="text-[#7A5C4D]">{order.customer.email}</p>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-[#8A5A1C] uppercase tracking-wider text-[11px]">
                    {isPickup ? 'Pickup Location & Time' : 'Destination Address'}
                  </p>
                  {isPickup ? (
                    <div className="mt-1 text-[#4A2015]">
                      <p className="font-semibold">
                        {order?.deliveryDetails?.outlet || 'Montalie Waltair Uplands (Flagship Bakery)'}
                      </p>
                      <p className="text-[#7A5C4D]">
                        Slot: {order?.deliveryDetails?.pickupTime || 'Today, within 45 mins'}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-1 text-[#4A2015]">
                      <p className="font-semibold">{order?.deliveryDetails?.streetAddress || 'Beach Road'}</p>
                      <p className="text-[#7A5C4D]">
                        {order?.deliveryDetails?.city || 'Visakhapatnam'} - {order?.deliveryDetails?.pincode || '530002'}
                      </p>
                      <p className="mt-0.5 text-[#8A5A1C] font-medium">
                        Slot: {order?.deliveryDetails?.deliverySlot || 'Today Evening (5:00 PM - 8:00 PM)'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2 border-t border-[#E6D2B5]/60 pt-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[#7A5C4D]">Payment Mode: </span>
                      <span className="font-semibold text-[#4A2015]">
                        {order?.paymentMethod === 'upi'
                          ? 'UPI Online Payment (Verified)'
                          : isPickup
                          ? 'Pay on Counter at Pickup'
                          : 'Cash on Delivery (COD)'}
                      </span>
                    </div>
                    {order?.notes && (
                      <p className="w-full text-[11px] italic text-[#8A5A1C]">
                        Special Request: &quot;{order.notes}&quot;
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Items Ordered List */}
            <div>
              <h3 className="font-serif text-base font-bold text-[#4A2015]">Bakes in This Order</h3>
              <div className="mt-3 divide-y divide-[#E6D2B5]/60 rounded-2xl border border-[#E6D2B5] bg-white p-4">
                {order?.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-[#FDF1E1]">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate font-serif text-sm font-semibold text-[#4A2015]">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-[#7A5C4D]">
                          Qty: {item.quantity} &times; ₹{item.product.price}
                        </p>
                      </div>
                      <span className="font-bold text-[#4A2015] text-sm">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="py-2 text-center text-xs text-[#7A5C4D]">
                    Montalie Artisan Delights &bull; Freshly Baked
                  </div>
                )}

                {/* Subtotals & Grand Total */}
                <div className="pt-3 space-y-1 text-xs text-[#7A5C4D]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#4A2015]">₹{order?.subtotal || 499}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fulfillment Fee</span>
                    <span className="font-semibold text-[#4E7A3E]">
                      {order?.deliveryFee === 0 ? 'FREE' : `₹${order?.deliveryFee || 0}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging Fee</span>
                    <span className="font-semibold text-[#4A2015]">₹{order?.packagingFee || 15}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#4A2015] pt-2 border-t border-[#E6D2B5]/60">
                    <span>Total Paid / Payable</span>
                    <span className="text-lg text-[#4A2015]">₹{order?.grandTotal || 514}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Continue Shopping or Explore Menu */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/"
                className="flex-1 rounded-xl bg-[#4A2015] py-3 text-center text-sm font-semibold text-[#FDF1E1] shadow-2xs transition-all hover:bg-[#6B3320]"
              >
                Back to Montalie Home
              </Link>
              <Link
                href="/cakes"
                className="flex-1 rounded-xl border border-[#C08A3E] bg-[#FFF9F0] py-3 text-center text-sm font-semibold text-[#8A5A1C] transition-all hover:bg-[#FDF1E1]"
              >
                Explore More Cakes &amp; Bakes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function OrderReceivedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FDF1E1] py-20 text-center text-[#4A2015]">
          Loading order details...
        </div>
      }
    >
      <OrderReceivedContent />
    </Suspense>
  );
}
