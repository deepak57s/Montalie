'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-store';

type DeliveryMethod = 'delivery' | 'pickup';
type PaymentMethod = 'upi' | 'cod';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();

  // Form states
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [upiOption, setUpiOption] = useState<'qr' | 'id'>('qr');
  const [upiId, setUpiId] = useState('');

  // Customer contact info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Delivery address details
  const [streetAddress, setStreetAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('Visakhapatnam');
  const [pincode, setPincode] = useState('530002');
  const [deliverySlot, setDeliverySlot] = useState('Today Evening (5:00 PM - 8:00 PM)');

  // Bakery pickup details
  const [pickupOutlet, setPickupOutlet] = useState('waltair');
  const [pickupTime, setPickupTime] = useState('Today, 4:00 PM');

  // Special instructions
  const [notes, setNotes] = useState('');

  // Order submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Calculations
  const deliveryFee = deliveryMethod === 'pickup' ? 0 : totalPrice >= 499 ? 0 : 49;
  const packagingFee = 15;
  const grandTotal = totalPrice + deliveryFee + packagingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Please enter your full name and valid 10-digit mobile number.');
      return;
    }

    if (phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please provide a valid 10-digit phone number for delivery updates.');
      return;
    }

    if (deliveryMethod === 'delivery' && (!streetAddress.trim() || !pincode.trim())) {
      setErrorMsg('Please provide your complete street address and pincode.');
      return;
    }

    if (paymentMethod === 'upi' && upiOption === 'id' && !upiId.trim()) {
      setErrorMsg('Please provide your UPI ID (e.g. yourname@oksbi).');
      return;
    }

    setIsSubmitting(true);

    // Generate unique order ID
    const generatedOrderId = `MNT-${Math.floor(100000 + Math.random() * 900000)}`;

    const orderPayload = {
      orderId: generatedOrderId,
      createdAt: new Date().toISOString(),
      items,
      subtotal: totalPrice,
      deliveryFee,
      packagingFee,
      grandTotal,
      deliveryMethod,
      paymentMethod,
      customer: {
        fullName,
        phone,
        email,
      },
      deliveryDetails:
        deliveryMethod === 'delivery'
          ? {
              streetAddress,
              landmark,
              city,
              pincode,
              deliverySlot,
            }
          : {
              outlet:
                pickupOutlet === 'waltair'
                  ? 'Montalie Waltair Uplands (Main Flagship Bakery)'
                  : 'Montalie Siripuram Circle Outlet',
              pickupTime,
            },
      notes,
    };

    // Store in localStorage for Order Received page
    try {
      localStorage.setItem('montalie-last-order', JSON.stringify(orderPayload));
    } catch {
      // fallback
    }

    setTimeout(() => {
      clearCart();
      router.push(`/order-received?orderId=${generatedOrderId}`);
    }, 900);
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#FDF1E1] py-16">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF9F0] text-[#8A5A1C] shadow-sm border border-[#E6D2B5]">
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h1 className="mt-6 font-serif text-2xl font-bold text-[#4A2015]">Your cart is empty</h1>
          <p className="mt-2 text-sm text-[#7A5C4D]">
            Add some freshly baked artisanal cakes, breads, or pastries before checking out.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/cakes"
              className="rounded-full bg-[#4A2015] px-6 py-2.5 text-sm font-semibold text-[#FDF1E1] hover:bg-[#6B3320]"
            >
              Explore Cakes
            </Link>
            <Link
              href="/breads"
              className="rounded-full border border-[#C08A3E] bg-[#FFF9F0] px-6 py-2.5 text-sm font-semibold text-[#8A5A1C] hover:bg-[#FDF1E1]"
            >
              Fresh Breads
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDF1E1] pb-24 pt-6">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-[#7A5C4D]">
          <Link href="/" className="hover:text-[#4A2015] transition-colors">
            Home
          </Link>
          <span className="text-[#C08A3E]">›</span>
          <span className="text-[#7A5C4D]">Cart</span>
          <span className="text-[#C08A3E]">›</span>
          <span className="font-semibold text-[#4A2015]">Checkout</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-[#C08A3E]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A5A1C]">
              Boulangerie Checkout
            </span>
          </div>
          <h1 className="mt-1 font-serif text-3xl font-bold tracking-tight text-[#4A2015] sm:text-4xl">
            Complete Your Order
          </h1>
          <p className="mt-1 text-sm text-[#7A5C4D]">
            Select your delivery preference, contact details, and payment mode.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 rounded-xl border border-[#A83232]/40 bg-[#FFF9F0] p-4 text-sm text-[#A83232] shadow-2xs">
            <div className="flex items-center gap-2 font-semibold">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Please review form</span>
            </div>
            <p className="mt-1 ml-7">{errorMsg}</p>
          </div>
        )}

        {/* 2-Column Checkout Form Layout */}
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Delivery & Payment Options */}
          <div className="space-y-6 lg:col-span-7">
            {/* 1. Fulfillment Mode: Home Delivery vs Bakery Pickup */}
            <div className="rounded-2xl border border-[#E6D2B5] bg-[#FFF9F0] p-6 shadow-2xs">
              <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#4A2015]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4A2015] text-xs font-semibold text-[#FDF1E1]">
                  1
                </span>
                <span>Fulfillment Method</span>
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {/* Home Delivery Card */}
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                    deliveryMethod === 'delivery'
                      ? 'border-[#4A2015] bg-[#FDF1E1]/80 ring-2 ring-[#4A2015]'
                      : 'border-[#E6D2B5] bg-white hover:border-[#C08A3E]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#8A5A1C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    <span className="font-serif text-sm font-bold text-[#4A2015]">Home Delivery</span>
                  </div>
                  <p className="mt-2 text-xs text-[#7A5C4D]">
                    Freshly dispatched from our ovens straight to your doorstep in Visakhapatnam.
                  </p>
                  <span className="mt-3 text-[11px] font-semibold text-[#4E7A3E]">
                    {totalPrice >= 499 ? 'Free Delivery Qualified' : '₹49 Standard (Free above ₹499)'}
                  </span>
                </button>

                {/* Bakery Pickup Card */}
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                    deliveryMethod === 'pickup'
                      ? 'border-[#4A2015] bg-[#FDF1E1]/80 ring-2 ring-[#4A2015]'
                      : 'border-[#E6D2B5] bg-white hover:border-[#C08A3E]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#8A5A1C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span className="font-serif text-sm font-bold text-[#4A2015]">Bakery Pickup</span>
                  </div>
                  <p className="mt-2 text-xs text-[#7A5C4D]">
                    Collect freshly boxed bakes at our Waltair or Siripuram flagship ovens with zero waiting.
                  </p>
                  <span className="mt-3 text-[11px] font-semibold text-[#8A5A1C]">
                    Always Free &bull; Ready in 45 mins
                  </span>
                </button>
              </div>

              {/* Conditional Delivery / Pickup Inputs */}
              {deliveryMethod === 'delivery' ? (
                <div className="mt-6 space-y-4 border-t border-[#E6D2B5]/60 pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A5A1C]">
                    Delivery Address Details
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A2015]">
                      Flat / House No., Apartment &amp; Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="e.g. Flat 402, Sea Breeze Heights, Beach Road"
                      className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] placeholder-[#7A5C4D]/50 focus:border-[#4A2015] focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A2015]">Landmark</label>
                      <input
                        type="text"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        placeholder="Near Kali Temple"
                        className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] placeholder-[#7A5C4D]/50 focus:border-[#4A2015] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4A2015]">City</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] focus:border-[#4A2015] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4A2015]">Pincode *</label>
                      <input
                        type="text"
                        required
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="530002"
                        className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] focus:border-[#4A2015] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2015]">Preferred Delivery Slot</label>
                    <select
                      value={deliverySlot}
                      onChange={(e) => setDeliverySlot(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] focus:border-[#4A2015] focus:outline-hidden"
                    >
                      <option>Today Evening (5:00 PM - 8:00 PM)</option>
                      <option>Tomorrow Morning (9:00 AM - 12:00 PM)</option>
                      <option>Tomorrow Afternoon (1:00 PM - 4:00 PM)</option>
                      <option>Tomorrow Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-4 border-t border-[#E6D2B5]/60 pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A5A1C]">
                    Select Pickup Outlet &amp; Slot
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A2015]">Choose Montalie Bakery</label>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center gap-3 rounded-xl border border-[#E6D2B5] bg-white p-3 cursor-pointer hover:bg-[#FDF1E1]/50">
                        <input
                          type="radio"
                          name="outlet"
                          checked={pickupOutlet === 'waltair'}
                          onChange={() => setPickupOutlet('waltair')}
                          className="accent-[#4A2015]"
                        />
                        <div>
                          <p className="text-sm font-semibold text-[#4A2015]">
                            Montalie Waltair Uplands (Flagship Bakery)
                          </p>
                          <p className="text-xs text-[#7A5C4D]">
                            Opp. Dutt Island, Waltair Main Rd, Visakhapatnam &bull; Open till 10:30 PM
                          </p>
                        </div>
                      </label>

                      <label className="flex items-center gap-3 rounded-xl border border-[#E6D2B5] bg-white p-3 cursor-pointer hover:bg-[#FDF1E1]/50">
                        <input
                          type="radio"
                          name="outlet"
                          checked={pickupOutlet === 'siripuram'}
                          onChange={() => setPickupOutlet('siripuram')}
                          className="accent-[#4A2015]"
                        />
                        <div>
                          <p className="text-sm font-semibold text-[#4A2015]">
                            Montalie Siripuram Circle Outlet
                          </p>
                          <p className="text-xs text-[#7A5C4D]">
                            Near HSBC Building, VIP Road, Visakhapatnam &bull; Open till 10:00 PM
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2015]">Estimated Pickup Time</label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] focus:border-[#4A2015] focus:outline-hidden"
                    >
                      <option>Today, within 45 mins</option>
                      <option>Today, 4:00 PM - 5:00 PM</option>
                      <option>Today, 6:00 PM - 7:00 PM</option>
                      <option>Today, 8:00 PM - 9:00 PM</option>
                      <option>Tomorrow Morning, 10:00 AM</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Contact Information */}
            <div className="rounded-2xl border border-[#E6D2B5] bg-[#FFF9F0] p-6 shadow-2xs">
              <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#4A2015]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4A2015] text-xs font-semibold text-[#FDF1E1]">
                  2
                </span>
                <span>Contact Details</span>
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#4A2015]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] placeholder-[#7A5C4D]/50 focus:border-[#4A2015] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2015]">Phone Number (for SMS &amp; delivery) *</label>
                  <div className="mt-1 flex rounded-xl border border-[#E6D2B5] bg-white overflow-hidden focus-within:border-[#4A2015]">
                    <span className="flex items-center bg-[#FDF1E1] px-3 text-xs font-semibold text-[#8A5A1C] border-r border-[#E6D2B5]">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full bg-white px-3 py-2.5 text-sm text-[#4A2015] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#4A2015]">Email Address (for order invoice &amp; tracking)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ananya@example.com"
                    className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] placeholder-[#7A5C4D]/50 focus:border-[#4A2015] focus:outline-hidden"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#4A2015]">
                    Bake Special Requests / Cake Inscription (Optional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder='e.g. "Happy Birthday Priya!" on chocolate plaque, slice bread thin'
                    className="mt-1 w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2.5 text-sm text-[#4A2015] placeholder-[#7A5C4D]/50 focus:border-[#4A2015] focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* 3. Payment Method: UPI vs Cash on Delivery */}
            <div className="rounded-2xl border border-[#E6D2B5] bg-[#FFF9F0] p-6 shadow-2xs">
              <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#4A2015]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4A2015] text-xs font-semibold text-[#FDF1E1]">
                  3
                </span>
                <span>Payment Method</span>
              </h2>

              <div className="mt-4 space-y-3">
                {/* UPI Option */}
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-[#4A2015] bg-[#FDF1E1]/80 ring-2 ring-[#4A2015]'
                      : 'border-[#E6D2B5] bg-white hover:border-[#C08A3E]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4A2015] text-white">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-bold text-[#4A2015]">UPI Instant Payment</span>
                          <span className="rounded bg-[#4E7A3E]/10 px-2 py-0.5 text-[10px] font-semibold text-[#4E7A3E]">
                            Instant &bull; Zero Fees
                          </span>
                        </div>
                        <p className="text-xs text-[#7A5C4D]">GPay, PhonePe, Paytm, BHIM, or Any UPI App</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="accent-[#4A2015]"
                    />
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="mt-4 border-t border-[#E6D2B5]/60 pt-4">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setUpiOption('qr')}
                          className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                            upiOption === 'qr'
                              ? 'bg-[#4A2015] text-[#FDF1E1]'
                              : 'bg-white text-[#4A2015] border border-[#E6D2B5]'
                          }`}
                        >
                          Scan QR Code
                        </button>
                        <button
                          type="button"
                          onClick={() => setUpiOption('id')}
                          className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                            upiOption === 'id'
                              ? 'bg-[#4A2015] text-[#FDF1E1]'
                              : 'bg-white text-[#4A2015] border border-[#E6D2B5]'
                          }`}
                        >
                          Enter UPI ID
                        </button>
                      </div>

                      {upiOption === 'qr' ? (
                        <div className="mt-3 flex items-center gap-4 rounded-xl border border-[#E6D2B5] bg-white p-3">
                          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg border border-[#C08A3E] bg-[#FFF9F0] text-center p-1">
                            {/* Stylized QR SVG representation */}
                            <svg className="h-16 w-16 text-[#4A2015]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2 2h8v8H2zm2 2v4h4V4zm10-2h8v8h-8zm2 2v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm14-2h4v4h-4zm-4 4h4v4h-4zm4 0h4v4h-4zm-4-4h4v-4h-4z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#4A2015]">Scan to pay ₹{grandTotal}</p>
                            <p className="mt-0.5 text-[11px] text-[#7A5C4D]">
                              UPI ID: <span className="font-mono font-medium text-[#8A5A1C]">montalie.bakery@oksbi</span>
                            </p>
                            <p className="mt-1 text-[11px] text-[#4E7A3E]">
                              Verified Merchant: Montalie Artisanal Boulangerie
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3">
                          <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="username@okhdfcbank"
                            className="w-full rounded-xl border border-[#E6D2B5] bg-white px-3.5 py-2 text-sm text-[#4A2015] placeholder-[#7A5C4D]/50 focus:border-[#4A2015] focus:outline-hidden"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Cash on Delivery / Pay on Pickup */}
                <div
                  onClick={() => setPaymentMethod('cod')}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#4A2015] bg-[#FDF1E1]/80 ring-2 ring-[#4A2015]'
                      : 'border-[#E6D2B5] bg-white hover:border-[#C08A3E]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8A5A1C] text-white">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                          <path d="M12 18V6" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-serif text-sm font-bold text-[#4A2015]">
                          {deliveryMethod === 'pickup' ? 'Pay at Bakery on Pickup' : 'Cash on Delivery (COD)'}
                        </span>
                        <p className="text-xs text-[#7A5C4D]">
                          Pay in cash or tap card/UPI upon receiving your fresh box.
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-[#4A2015]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Place Order */}
          <div className="space-y-6 lg:col-span-5">
            <div className="sticky top-6 rounded-2xl border border-[#E6D2B5] bg-[#FFF9F0] p-6 shadow-sm">
              <h2 className="font-serif text-lg font-bold text-[#4A2015]">Order Summary</h2>
              <p className="text-xs text-[#7A5C4D]">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your bakery basket
              </p>

              {/* Items List */}
              <div className="mt-4 max-h-[300px] space-y-3 overflow-y-auto border-y border-[#E6D2B5]/60 py-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-[#FDF1E1] border border-[#E6D2B5]/50">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="56px"
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
                ))}
              </div>

              {/* Bill Details */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between text-[#7A5C4D]">
                  <span>Item Subtotal</span>
                  <span className="font-semibold text-[#4A2015]">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-[#7A5C4D]">
                  <span>Delivery Charges</span>
                  <span className="font-semibold text-[#4E7A3E]">
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-[#7A5C4D]">
                  <span>Artisan Bakery Eco-Packaging</span>
                  <span className="font-semibold text-[#4A2015]">₹{packagingFee}</span>
                </div>

                <div className="border-t border-[#E6D2B5] pt-3 flex justify-between text-base font-bold text-[#4A2015]">
                  <span>Grand Total</span>
                  <span className="text-lg text-[#4A2015]">₹{grandTotal}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4A2015] py-3.5 text-sm font-bold text-[#FDF1E1] shadow-md transition-all hover:bg-[#6B3320] active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Confirming Order...</span>
                  </>
                ) : (
                  <>
                    <span>Place Order (₹{grandTotal})</span>
                    <span aria-hidden="true">&rarr;</span>
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7A5C4D]">
                <svg className="h-3.5 w-3.5 text-[#4E7A3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Montalie Freshness Guarantee &bull; 100% Oven Fresh</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
