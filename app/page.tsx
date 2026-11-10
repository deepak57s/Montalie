import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import BestsellerGrid from "@/components/home/BestsellerGrid";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <BestsellerGrid />

      {/* ── Why Montalie section ── */}
      <section className="w-full border-t border-[#E6D2B5] bg-[#FFF9F0] py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center">
            <h2
              className="text-center text-[26px] font-semibold text-[#4A2015] md:text-[30px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose Montalie?
            </h2>
            <span className="mt-3 h-px w-16 bg-[#C08A3E]" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-lg border border-[#E6D2B5] bg-[#FDF1E1] p-8 text-center transition-all duration-200 hover:-translate-y-[2px] hover:border-[#C08A3E]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C08A3E]/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#C08A3E]"
                >
                  {/* Hand with wheat — artisan craft icon */}
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#4A2015]">
                Made from Scratch
              </h3>
              <p className="text-[14px] leading-relaxed text-[#7A5C4D]">
                Every loaf, every pastry, every cake — made from scratch daily
                in our kitchen. No pre-mixes, no shortcuts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-lg border border-[#E6D2B5] bg-[#FDF1E1] p-8 text-center transition-all duration-200 hover:-translate-y-[2px] hover:border-[#C08A3E]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C08A3E]/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#C08A3E]"
                >
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#4A2015]">
                FSSAI Certified
              </h3>
              <p className="text-[14px] leading-relaxed text-[#7A5C4D]">
                Food safety is non-negotiable. Our kitchen is FSSAI certified
                and follows the highest hygiene standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-lg border border-[#E6D2B5] bg-[#FDF1E1] p-8 text-center transition-all duration-200 hover:-translate-y-[2px] hover:border-[#C08A3E]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C08A3E]/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#C08A3E]"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#4A2015]">
                Baked with Love
              </h3>
              <p className="text-[14px] leading-relaxed text-[#7A5C4D]">
                From our family kitchen to your table. Every order is packed
                with care and delivered with a smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="w-full bg-[#FDF1E1] py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex flex-col items-center">
            <h2
              className="text-center text-[26px] font-semibold text-[#4A2015] md:text-[30px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Customers Say
            </h2>
            <span className="mt-3 h-px w-16 bg-[#C08A3E]" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: 'Priya Sharma',
                text: 'The sourdough bread is absolutely incredible. You can taste the love and patience that goes into every loaf. My family refuses to buy bread from anywhere else now!',
                rating: 5,
                order: 'Sourdough Bread',
              },
              {
                name: 'Rajesh Nair',
                text: 'Ordered a custom cake for my daughter\'s birthday — it was a showstopper. The design was exactly what we wanted and the taste was even better. Thank you, Montalie!',
                rating: 5,
                order: 'Custom Birthday Cake',
              },
              {
                name: 'Ananya Reddy',
                text: 'Their butter croissants are flaky perfection. I order a box every weekend. The delivery is always on time and everything arrives fresh. Highly recommend!',
                rating: 5,
                order: 'Butter Croissants (Box of 6)',
              },
            ].map((review, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-[#E6D2B5] bg-[#FFF9F0] p-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-[#C08A3E]"
              >
                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#C08A3E"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-4 flex-1 text-[14px] leading-relaxed text-[#7A5C4D]">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="border-t border-[#E6D2B5] pt-3">
                  <p className="text-[14px] font-semibold text-[#4A2015]">
                    {review.name}
                  </p>
                  <p className="text-[12px] text-[#7A5C4D]">
                    Ordered: {review.order}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-[#4A2015] py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center">
          <h2
            className="mb-4 text-[28px] font-semibold text-[#FDF1E1] md:text-[34px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Taste the Difference?
          </h2>
          <p className="mb-8 max-w-lg text-[15px] text-[#E6D2B5]">
            Order freshly baked artisan breads, cakes and pastries.
            Free delivery on orders above ₹499.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#FDF1E1] px-8 py-3 text-[15px] font-semibold text-[#4A2015] transition-all duration-150 hover:bg-white active:scale-[0.98]"
            >
              Order Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/919876543210"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#C08A3E] px-8 py-[10px] text-[15px] font-semibold text-[#C08A3E] transition-all duration-150 hover:bg-[#C08A3E]/10 active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
