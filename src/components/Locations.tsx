import { MapPin } from 'lucide-react';
import { lessonLocations } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Locations() {
  return (
    <section id="havuzlar" className="bg-cyan-50/70 px-4 py-20 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ders Verdiğimiz Yerler"
          title="Temiz, güvenli ve eğitim için uygun havuz ortamları"
          description="Dersler; öğrencinin seviyesine, ulaşım tercihine ve program uygunluğuna göre farklı kapalı havuzlarda planlanabilir."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {lessonLocations.map((location) => (
            <article key={location.name} className="overflow-hidden rounded-lg border border-cyan-100 bg-white shadow-sm">
              <div className="aspect-[4/5] overflow-hidden bg-cyan-100">
                <img src={location.image} alt={location.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-extrabold text-cyan-800">
                  <MapPin className="h-3.5 w-3.5" />
                  {location.region}
                </div>
                <h3 className="mt-4 text-lg font-black text-slate-950">{location.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{location.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
