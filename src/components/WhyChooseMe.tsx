import { advantages } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function WhyChooseMe() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Neden beni tercih etmelisiniz?"
          title="Yüzme öğrenme sürecini güvenli, net ve sürdürülebilir hale getiren yaklaşım"
          description="Profesyonel yüzme eğitimi, doğru teknik kadar öğrencinin motivasyonunu ve güvenini de merkeze almalıdır."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <article key={advantage.title} className="rounded-lg border border-cyan-100 bg-white p-5 shadow-sm">
                <Icon className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-5 text-base font-black text-slate-950">{advantage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{advantage.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
