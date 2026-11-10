# Montalie Boulangerie

An artisan bakery and pastry web application crafted with Next.js (App Router, Turbopack), TypeScript, and Tailwind CSS.

## Features

- **Home Experience:** Hero banner, curated category navigation, bestseller bakes, and custom celebration cake ordering.
- **Cakes Catalog (`/cakes`):** Category filtering, sorting by price and ratings, and custom cake options.
- **Breads & Croissants (`/breads`):** Artisan sourdough loaves, French butter croissants, and fresh daily baked goods.
- **Pastries & Gelato (`/pastries`):** Signature pastries, French éclairs, fruit tarts, and slow-churned gelato.
- **Live Search Modal:** Global `Ctrl + K` quick search across all products with category filtering.
- **Wishlist / Favorites (`/favorites`):** Save favorite bakes with local persistence and one-click cart transfer.
- **Shopping Cart & Checkout (`/checkout`):** Slide-over cart drawer with threshold indicator (free delivery above ₹499), pickup vs delivery selector, and payment options (UPI QR/ID and Cash on Delivery).
- **Order Confirmation (`/order-received`):** Real-time order status tracking with itemized receipts.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (Turbopack, App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Typography:** Playfair Display (Serif) & DM Sans

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Production Build

```bash
npm run build
npm run start
```
