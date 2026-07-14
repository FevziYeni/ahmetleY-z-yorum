import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export function PageHero({ eyebrow, title, description, image, ctaLabel = 'Ücretsiz Ön Görüşme Yap', ctaTo = '/iletisim' }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-cyan-950 px-4 py-20 text-white sm:px-5 lg:px-8">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-cyan-950/88 to-cyan-900/45" />
        </div>
      )}
      <div className="mx-auto min-w-0 max-w-7xl">
        <div className="min-w-0 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-200">{eyebrow}</p>
          <h1 className="mt-4 max-w-full break-words text-3xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-cyan-50">{description}</p>
          <Link
            to={ctaTo}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-cyan-950 shadow-soft transition hover:bg-cyan-50"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
