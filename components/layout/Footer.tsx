'use client';

import Link from 'next/link';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Track Order', href: '/track' },
    { label: 'FAQs', href: '/faq' },
  ],
  'Categories': [
    { label: 'Breads', href: '/breads' },
    { label: 'Cakes', href: '/cakes' },
    { label: 'Pastries', href: '/pastries' },
    { label: 'Croissants', href: '/croissants' },
    { label: 'Cookies', href: '/cookies' },
  ],
  'Policies': [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'Refund Policy', href: '/refund' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#E6D2B5] bg-[#FFF9F0]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3
                className="text-2xl font-bold text-[#4A2015]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Montalie
              </h3>
              <p className="text-[10px] font-medium uppercase tracking-[3px] text-[#4A2015]">
                Boulangerie
              </p>
            </div>
            <p className="mb-6 max-w-xs text-[14px] leading-relaxed text-[#7A5C4D]">
              Handcrafted breads, decadent cakes and irresistible pastries, made
              with the finest ingredients since 2018. Delivering happiness to
              your doorstep.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6D2B5] text-[#4A2015] transition-all hover:border-[#C08A3E] hover:bg-[#4A2015] hover:text-[#FDF1E1]"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6D2B5] text-[#4A2015] transition-all hover:border-[#C08A3E] hover:bg-[#4A2015] hover:text-[#FDF1E1]"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6D2B5] text-[#4A2015] transition-all hover:border-[#C08A3E] hover:bg-[#4A2015] hover:text-[#FDF1E1]"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6D2B5] text-[#4A2015] transition-all hover:border-[#C08A3E] hover:bg-[#4A2015] hover:text-[#FDF1E1]"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-[#4A2015]">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#7A5C4D] transition-colors hover:text-[#8A5A1C]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-[#E6D2B5] pt-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h4 className="text-[15px] font-semibold text-[#4A2015]">
                Subscribe to our newsletter
              </h4>
              <p className="mt-1 text-[13px] text-[#7A5C4D]">
                Get updates on new flavours, seasonal specials and exclusive offers.
              </p>
            </div>
            <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-[#E6D2B5] bg-white px-4 py-2.5 text-[14px] text-[#4A2015] placeholder:text-[#7A5C4D]/60 focus:border-[#C08A3E] focus:outline-none focus:ring-1 focus:ring-[#C08A3E]"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#4A2015] px-5 py-2.5 text-[14px] font-medium text-[#FDF1E1] transition-colors hover:bg-[#6B3320] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#E6D2B5] pt-6 text-[12px] text-[#7A5C4D] md:flex-row">
          <p>© 2024 Montalie Boulangerie. All rights reserved.</p>
          <p>
            Crafted with care in Visakhapatnam, India
          </p>
        </div>
      </div>
    </footer>
  );
}
