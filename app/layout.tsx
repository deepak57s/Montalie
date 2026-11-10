import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import SearchModal from "@/components/search/SearchModal";
import { CartProvider } from "@/lib/cart-store";
import { FavoritesProvider } from "@/lib/favorites-store";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Montalie Boulangerie | Artisan Bakes for Every Occasion",
  description:
    "Handcrafted breads, decadent cakes and irresistible pastries, made with the finest ingredients. Free delivery on orders above ₹499.",
  keywords: [
    "bakery",
    "cakes",
    "breads",
    "pastries",
    "croissants",
    "Visakhapatnam",
    "online bakery",
    "artisan bakes",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <CartProvider>
          <FavoritesProvider>
            <TopBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <SearchModal />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
