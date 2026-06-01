type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
};

export function SectionHeading({ eyebrow, title, description, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-extrabold uppercase tracking-wide ${isDark ? 'text-cyan-200' : 'text-cyan-700'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      <p className={`mt-4 text-base leading-8 ${isDark ? 'text-cyan-50' : 'text-slate-600'}`}>{description}</p>
    </div>
  );
}
