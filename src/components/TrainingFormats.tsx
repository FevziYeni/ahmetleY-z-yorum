import { CheckCircle2 } from 'lucide-react';
import { trainingFormats } from '../data/siteContent';
import { CTAButton } from './CTAButton';
import { SectionHeading } from './SectionHeading';

export function TrainingFormats() {
  return (
    <section id="ders-formatlari" className="bg-white px-4 py-20 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ders Formatları"
          title="Bireysel, grup ve teknik gelişim odaklı yüzme dersleri"
          description="Her öğrencinin hedefi farklıdır. Bu yüzden dersler yaş, seviye, özgüven, kondisyon ve teknik ihtiyaca göre planlanır."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {trainingFormats.map((format) => {
            const Icon = format.icon;
            return (
              <article
                key={format.title}
                className="group overflow-hidden rounded-lg border border-cyan-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cyan-50">
                  <img
                    src={format.image}
                    alt={format.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-100 text-cyan-800">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-black text-slate-950">{format.title}</h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">{format.description}</p>
                  <div className="mt-5 grid gap-2">
                    {format.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/iletisim">Bana Uygun Dersi Planla</CTAButton>
        </div>
      </div>
    </section>
  );
}
