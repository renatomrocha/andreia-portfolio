export default function LeftColumn() {
  return (
    <div className="flex flex-col h-full">
      {/* Intro */}
      <div className="mt-[140px]">
        <h1 className="font-inter font-semibold text-[48px] leading-[1.1] tracking-[-0.42px]">
          <span className="text-cod-gray block">Hello!</span>
          <span className="text-cod-gray">I'm </span>
          <span className="text-boulder">Andreia.</span>
        </h1>
      </div>

      {/* Social Icons */}
      <div className="mt-auto flex flex-col gap-2">
        {/* Instagram */}
        <a href="#" className="text-cod-gray hover:text-boulder transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        {/* Dribbble */}
        <a href="#" className="text-cod-gray hover:text-boulder transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
          </svg>
        </a>
      </div>

      {/* Services */}
      <div className="mt-auto pb-0">
        {["Ux Ui Designer", "Web design", "Brand Identity"].map((service) => (
          <div
            key={service}
            className="border-b border-mercury py-[4px]"
          >
            <p className="font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] leading-[23px]">
              {service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
