import { Link } from 'react-router-dom';
import { Locations } from '../components/Locations';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';
import { TrainingFormats } from '../components/TrainingFormats';

export function IstanbulSwimmingPage() {
  return (
    <>
      <SEO
        title="İstanbul Yüzme Dersi | İstanbul Yüzme Hocası Ahmet Onur"
        description="İstanbul'da yüzme dersi almak isteyen çocuk ve yetişkinler için birebir, grup ve özel yüzme eğitimi. Başakşehir, Florya ve çevresinde profesyonel yüzme hocası."
        path="/istanbul-yuzme-dersi"
        keywords="İstanbul yüzme dersi, İstanbul yüzme hocası, İstanbul yüzme havuzu hocası, yüzme kursu İstanbul, birebir yüzme dersi İstanbul"
      />
      <PageHero
        eyebrow="İstanbul Yüzme Dersi"
        title="İstanbul'da yüzme hocası arayanlar için profesyonel eğitim"
        description="Çocuklar, yetişkinler ve başlangıç seviyesindeki öğrenciler için güvenli havuz ortamında birebir ve grup yüzme dersleri."
        image="/images/gallery/elitegarden-basaksehir.jpg"
      />
      <section className="bg-white px-4 py-20 sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-700">Yerel SEO odaklı eğitim</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              İstanbul yüzme havuzu hocası ve özel yüzme dersi arayanlara net program
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Dersler Başakşehir, Florya ve İstanbul'un ulaşılabilir kapalı havuzlarında planlanabilir. Amaç yalnızca
              yüzme öğretmek değil; su güvenliği, doğru nefes, kontrollü ilerleme ve teknik gelişimi sürdürülebilir hale
              getirmektir.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/havuzlar" className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-600 px-6 text-sm font-extrabold text-white shadow-soft">
                Havuzları İncele
              </Link>
              <Link to="/iletisim" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200 bg-white px-6 text-sm font-extrabold text-cyan-900">
                Ders Planı Al
              </Link>
            </div>
          </div>
          <img
            src="/images/gallery/pool-training-lane.jpg"
            alt="İstanbul yüzme dersi için kulvar çalışması"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </section>
      <TrainingFormats />
      <Locations />
    </>
  );
}
