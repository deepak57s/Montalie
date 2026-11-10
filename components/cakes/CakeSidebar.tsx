'use client';

import { cakeCategories } from '@/lib/data';

interface CakeSidebarProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CakeSidebar({
  selectedCategory,
  onSelectCategory,
}: CakeSidebarProps) {
  return (
    <aside className="w-full rounded-xl border border-[#E6D2B5]/75 bg-[#FFF9F0] p-4 shadow-2xs">
      {/* Title */}
      <h2
        className="mb-4 text-[17px] font-semibold text-[#4A2015]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Cake Categories
      </h2>

      {/* Categories List */}
      <nav className="flex flex-col gap-1" aria-label="Cake Categories">
        {cakeCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13.5px] font-medium transition-all duration-150 ${
                isSelected
                  ? 'bg-[#F2DFCA] text-[#4A2015] font-semibold shadow-2xs'
                  : 'text-[#4A2015]/85 hover:bg-[#FDF1E1] hover:text-[#4A2015]'
              }`}
            >
              {/* Category-specific bespoke SVG Icon */}
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-[#8A5A1C]">
                {cat.id === 'all' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="10" width="18" height="11" rx="2" />
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    <circle cx="12" cy="4" r="1" fill="currentColor" />
                  </svg>
                )}
                {cat.id === 'chocolate' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <line x1="3.27" y1="6.96" x2="12" y2="12.01" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                )}
                {cat.id === 'fruit' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 0 0-5 5c0 5 5 13 5 13s5-8 5-13a5 5 0 0 0-5-5z" />
                    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                  </svg>
                )}
                {cat.id === 'cream' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                )}
                {cat.id === 'cheesecakes' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 17 21 7 21 17 3 17" />
                    <path d="M3 17v4h18v-4" />
                  </svg>
                )}
                {cat.id === 'custom' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                )}
                {cat.id === 'photo' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                )}
                {cat.id === 'birthday' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                    <path d="M2 21h20" />
                    <line x1="8" y1="8" x2="8" y2="11" />
                    <line x1="12" y1="8" x2="12" y2="11" />
                    <line x1="16" y1="8" x2="16" y2="11" />
                    <circle cx="8" cy="5" r="1" fill="currentColor" />
                    <circle cx="12" cy="5" r="1" fill="currentColor" />
                    <circle cx="16" cy="5" r="1" fill="currentColor" />
                  </svg>
                )}
                {cat.id === 'anniversary' && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                )}
              </span>

              <span>{cat.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
