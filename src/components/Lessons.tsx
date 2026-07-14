import { lessons } from '../data/siteContent';
import { CTAButton } from './CTAButton';
import { SectionHeading } from './SectionHeading';

export function Lessons() {
  return (
    <section id="yuzme-dersleri" className="bg-cyan-50/70 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Yüzme Dersleri"
          title="Çocuk, yetişkin ve özel yüzme dersi seçenekleri"
          description="Başlangıç seviyesinden teknik geliştirmeye kadar her ders, öğrencinin hedefi ve seviyesine göre planlanır."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;
            return (
              <article key={lesson.title} className="rounded-lg border border-cyan-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-100 text-cyan-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{lesson.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{lesson.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/iletisim">Ücretsiz Ön Görüşme Yap</CTAButton>
        </div>
      </div>
    </section>
  );
}
