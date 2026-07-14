import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';

export function ChildrenLessonsPage() {
  return (
    <>
      <SEO
        title="Çocuk Yüzme Dersi İstanbul | Ahmet Onur Yüzme Hocası"
        description="İstanbul'da çocuk yüzme dersi. Suya alışma, temel teknik, güvenli havuz ortamı ve sabırlı eğitim yaklaşımıyla çocuklara özel yüzme programı."
        path="/cocuk-yuzme-dersi"
        keywords="çocuk yüzme dersi İstanbul, çocuk yüzme hocası, çocuklara özel yüzme dersi, İstanbul çocuk yüzme eğitimi"
      />
      <PageHero
        eyebrow="Çocuk Yüzme Dersi"
        title="Çocuklar için güvenli ve sabırlı yüzme eğitimi"
        description="Suya alışma, nefes kontrolü, temel koordinasyon ve yüzme sevgisini destekleyen çocuk odaklı dersler."
        image="/images/gallery/child-confidence-pool.jpg"
      />
      <section className="bg-white px-4 py-20 sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {['Suya güvenle alışma', 'Temel teknik ve koordinasyon', 'Hedefe yönelik gelişim takibi'].map((item) => (
            <div key={item} className="rounded-lg border border-cyan-100 bg-cyan-50/70 p-6">
              <h2 className="text-xl font-black text-slate-950">{item}</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Dersler çocuğun yaşına, suyla ilişkisine ve hazır oluşuna göre planlanır. Amaç güvenli, sakin ve kalıcı
                öğrenme süreci oluşturmaktır.
              </p>
            </div>
          ))}
        </div>
      </section>
      <Gallery />
      <Contact />
    </>
  );
}
