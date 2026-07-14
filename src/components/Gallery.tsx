import { Images } from 'lucide-react';
import { galleryHighlights, galleryImages } from '../data/siteContent';
import { CTAButton } from './CTAButton';
import { SectionHeading } from './SectionHeading';

export function Gallery() {
  return (
    <section id="galeri" className="bg-white px-4 py-20 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galeri"
          title="Derslerden gerçek kareler ve gelişim anları"
          description="Çocuk, yetişkin, bireysel ve grup derslerinden seçilmiş fotoğraflarla eğitim ortamını yakından görün."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {galleryHighlights.map((item) => (
            <div key={item.value} className="rounded-lg border border-cyan-100 bg-cyan-50/70 p-5 text-center">
              <strong className="block text-2xl font-black text-cyan-800">{item.value}</strong>
              <span className="mt-1 block text-sm font-bold text-slate-600">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-lg bg-cyan-100 shadow-sm ${
                image.featured ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 4 ? 'lg:row-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4 text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold backdrop-blur">
                  <Images className="h-3.5 w-3.5" />
                  {image.category}
                </span>
                <h3 className="mt-3 text-base font-black">{image.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/iletisim">Galeri Sonrası Bilgi Al</CTAButton>
        </div>
      </div>
    </section>
  );
}
