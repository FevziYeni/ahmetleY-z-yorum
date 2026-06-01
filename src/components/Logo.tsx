type LogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function Logo({ compact = false, inverted = false }: LogoProps) {
  return (
    <a href="#ana-sayfa" className="flex items-center gap-3" aria-label="Ahmet Onur Yüzme Hocası ana sayfa">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-950 shadow-soft ring-1 ring-cyan-100/80">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-10 w-10">
          <circle cx="32" cy="32" r="28" fill="#E8FBFF" />
          <path d="M19 36l9-18 9 18" fill="none" stroke="#164e63" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 28h8" fill="none" stroke="#164e63" strokeLinecap="round" strokeWidth="4" />
          <path d="M39 18v18" fill="none" stroke="#164e63" strokeLinecap="round" strokeWidth="4" />
          <path d="M39 18h5.5a8.5 8.5 0 0 1 0 17H39" fill="none" stroke="#164e63" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path
            d="M12 47c7 0 7-4.5 14-4.5S33 47 40 47s7-4.5 14-4.5"
            fill="none"
            stroke="#0891b2"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <path
            d="M18 54c6 0 6-3.5 12-3.5S36 54 42 54"
            fill="none"
            stroke="#06b6d4"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className={`block text-base font-extrabold ${inverted ? 'text-white' : 'text-slate-950'}`}>Ahmet Onur</span>
          <span className="block text-xs font-bold uppercase tracking-wide text-cyan-700">Yüzme Hocası</span>
        </span>
      )}
    </a>
  );
}
