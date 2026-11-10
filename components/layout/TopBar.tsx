'use client';

export default function TopBar() {
  return (
    <div className="w-full bg-[#4A2015] text-[#FDF1E1] text-[12px] font-normal tracking-wide">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-2">
        {/* Left: delivery message with truck icon */}
        <div className="flex items-center gap-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#FDF1E1]"
          >
            <path d="M1 3h15v13H1zM16 8h4l3 4v4h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <span>Free delivery on orders above ₹499</span>
        </div>

        {/* Right: location, track, help */}
        <div className="hidden items-center gap-4 text-[12px] md:flex">
          <button className="flex items-center gap-1.5 transition-opacity hover:opacity-85">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#FDF1E1]"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>Deliver to Visakhapatnam</span>
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <span className="text-[#E6D2B5]/40">|</span>
          <a href="/track" className="transition-opacity hover:opacity-85">
            Track Order
          </a>
          <span className="text-[#E6D2B5]/40">|</span>
          <a href="/help" className="transition-opacity hover:opacity-85">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}
