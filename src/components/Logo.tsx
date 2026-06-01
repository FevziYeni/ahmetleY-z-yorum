type LogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function Logo({ compact = false, inverted = false }: LogoProps) {
  return (
    <a
      href="#ana-sayfa"
      className={`inline-flex items-center ${inverted ? 'rounded-lg bg-white px-4 py-3 shadow-soft' : ''}`}
      aria-label="Ahmet Onur Yüzme Hocası ana sayfa"
    >
      <img
        src={compact ? '/favicon.png' : '/images/logo.png'}
        alt="Ahmet Onur Yüzme Hocası logosu"
        className={compact ? 'h-11 w-11 object-contain' : 'h-10 w-auto max-w-[150px] object-contain sm:h-14 sm:max-w-[260px]'}
      />
    </a>
  );
}
