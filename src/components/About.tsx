import { CheckCircle2 } from 'lucide-react';
import { quickTrustItems } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="hakkimda" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Hakkımda"
          title="Ahmet Onur ile güven veren, disiplinli ve kişiye özel yüzme eğitimi"
          description="Yüzme öğrenmek yalnızca teknik değil, doğru güven ilişkisi ve sürdürülebilir bir eğitim planı ister. Ders süreci öğrencinin seviyesine göre yapılandırılır."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-lg bg-cyan-950 text-white shadow-soft">
            <img
              src="/images/swim-lesson-hero.png"
              alt="Ahmet Onur yüzme hocası özel ders havuz atmosferi"
              className="h-64 w-full object-cover opacity-85"
            />
            <div className="p-7">
              <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-200">Kişisel marka</p>
              <h3 className="mt-3 text-2xl font-black">Ahmet Onur Yüzme Hocası</h3>
              <p className="mt-4 leading-7 text-cyan-50">
                Çocuk yüzme dersi, yetişkin yüzme dersi ve birebir yüzme dersi alanlarında öğrencinin ihtiyacına
                göre güvenli, anlaşılır ve profesyonel bir eğitim yaklaşımı.
              </p>
            </div>
          </div>

          <div className="grid content-center gap-5">
            <p className="text-lg leading-9 text-slate-700">
              Ahmet Onur, öğrencilerinin suyla sağlıklı bir ilişki kurmasına, temel yüzme becerilerini doğru
              teknikle öğrenmesine ve hedeflerine ölçülebilir şekilde ilerlemesine odaklanır. Eğitimlerde güven,
              disiplin, sabır ve kişiye özel gelişim planı ön plandadır.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickTrustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg border border-cyan-100 bg-cyan-50/70 p-4">
                    <Icon className="h-5 w-5 shrink-0 text-cyan-700" />
                    <span className="text-sm font-extrabold text-slate-800">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="leading-7 text-slate-700">
                  Ders programı öğrencinin yaşına, suya alışkanlığına, fiziksel durumuna ve hedeflerine göre planlanır.
                  Böylece yüzme eğitimi hem daha güvenli hem de daha verimli ilerler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
