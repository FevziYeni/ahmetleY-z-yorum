import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle, ShieldCheck, Waves } from 'lucide-react';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Locations } from '../components/Locations';
import { SEO } from '../components/SEO';
import { TrainingFormats } from '../components/TrainingFormats';
import { WhyChooseMe } from '../components/WhyChooseMe';
import { contact, galleryHighlights, lessonLocations } from '../data/siteContent';

const serviceLinks = [
  {
    title: 'Çocuk Yüzme Dersi',
    text: 'Çocuklar için güvenli, sabırlı ve oyun destekli temel yüzme eğitimi.',
    to: '/cocuk-yuzme-dersi',
    image: '/images/gallery/child-confidence-pool.jpg',
    label: 'Çocuklar için',
  },
  {
    title: 'Yetişkin Yüzme Dersi',
    text: 'Yüzme bilmeyen veya tekniğini geliştirmek isteyen yetişkinler için özel program.',
    to: '/yetiskin-yuzme-dersi',
    image: '/images/gallery/adult-technique-york.jpg',
    label: 'Yetişkinler için',
  },
  {
    title: 'Özel Yüzme Dersi',
    text: 'Birebir takip, kişiye özel program ve hedefe yönelik gelişim planı.',
    to: '/ozel-yuzme-dersi',
    image: '/images/gallery/baby-private-lesson.jpg',
    label: 'Birebir eğitim',
  },
  {
    title: 'İstanbul Yüzme Dersi',
    text: 'Başakşehir, Florya ve ulaşılabilir kapalı havuzlarda planlanabilen profesyonel dersler.',
    to: '/istanbul-yuzme-dersi',
    image: '/images/gallery/elitegarden-basaksehir.jpg',
    label: 'İstanbul genelinde',
  },
  {
    title: 'Ders Verilen Havuzlar',
    text: 'Temiz, güvenli ve yüzme eğitimi için uygun havuz ortamlarını inceleyin.',
    to: '/havuzlar',
    image: '/images/gallery/york-athletic-club.jpg',
    label: 'Havuzlar',
  },
  {
    title: 'Ders Galerisi',
    text: 'Bireysel, grup, çocuk ve teknik gelişim derslerinden gerçek eğitim kareleri.',
    to: '/galeri',
    image: '/images/gallery/student-progress-collage.jpg',
    label: 'Gerçek dersler',
  },
];

const processSteps = [
  {
    title: 'Ön görüşme',
    text: 'Yaş, seviye, hedef ve uygun bölge bilgileri alınır.',
  },
  {
    title: 'Seviye planı',
    text: 'Suya alışma, temel teknik veya gelişim ihtiyacına göre ders yolu çıkarılır.',
  },
  {
    title: 'Düzenli takip',
    text: 'Her derste güven, teknik ve kondisyon gelişimi izlenir.',
  },
];

export function HomePage() {
  return (
    <>
      <SEO
        title="Ahmet Onur Yüzme Hocası | İstanbul Özel Yüzme Dersi"
        description="İstanbul'da çocuk, yetişkin, birebir ve özel yüzme dersi. Ahmet Onur ile profesyonel yüzme eğitimi, güvenli havuz ortamı ve kişiye özel gelişim takibi."
        path="/"
        keywords="İstanbul yüzme hocası, yüzme dersi İstanbul, özel yüzme dersi, çocuk yüzme dersi, yetişkin yüzme dersi"
      />
      <Hero />

      <section className="bg-white px-4 py-20 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-700">İstanbul'da yüzme eğitimi</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Yüzme öğrenmek isteyenler için profesyonel, güvenli ve hedef odaklı ders planı
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Ahmet Onur yüzme hocası olarak İstanbul'da çocuk yüzme dersi, yetişkin yüzme dersi, birebir yüzme dersi
                ve teknik gelişim eğitimleri sunar. Dersler öğrencinin seviyesine, suya alışkanlığına ve hedefine göre
                yapılandırılır.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryHighlights.map((item) => (
                <div key={item.value} className="rounded-lg border border-cyan-100 bg-cyan-50/70 p-5">
                  <strong className="block text-2xl font-black text-cyan-800">{item.value}</strong>
                  <span className="mt-1 block text-sm font-bold text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceLinks.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group overflow-hidden rounded-lg border border-cyan-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cyan-50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-extrabold text-cyan-800">
                    {service.label}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-700">
                    Detayları incele
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-950 px-4 py-20 text-white sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-200">İstanbul yüzme hocası</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              İstanbul’da yüzme havuzu hocası arayanlar için net, güvenli ve profesyonel eğitim
            </h2>
            <p className="mt-5 text-lg leading-8 text-cyan-50">
              Yüzme dersleri İstanbul içinde öğrencinin ulaşımına, seviyesine ve hedeflerine göre planlanır. Çocuk yüzme
              dersi, yetişkin yüzme dersi, birebir yüzme dersi ve teknik gelişim çalışmalarında amaç; öğrencinin suda
              güven kazanması, doğru teknik öğrenmesi ve düzenli ilerlemesidir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/istanbul-yuzme-dersi"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-cyan-950 shadow-soft"
              >
                İstanbul Derslerini İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300 px-6 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp’tan Bilgi Al
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {lessonLocations.map((location) => (
              <Link key={location.name} to="/havuzlar" className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15">
                <MapPin className="h-5 w-5 text-cyan-200" />
                <h3 className="mt-4 text-lg font-black">{location.name}</h3>
                <p className="mt-2 text-sm font-bold text-cyan-100">{location.region}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-700">Ders süreci</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Her öğrenci için sakin, ölçülebilir ve hedefe yönelik ilerleme
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Eğitim süreci hazır kalıplarla değil, öğrencinin gerçek ihtiyacına göre ilerler. Bu yaklaşım hem çocuklarda
                güven duygusunu korur hem de yetişkinlerde su korkusu, teknik eksik veya kondisyon hedefini daha net yönetir.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-cyan-100 bg-cyan-50/70 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-sm font-black text-cyan-800 shadow-sm">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrainingFormats />
      <Locations />
      <Gallery />
      <WhyChooseMe />
      <section className="bg-cyan-50/70 px-4 py-20 sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-700">Güven veren detaylar</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Derse başlamadan önce merak edilenleri netleştirin
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Yüzme bilmeyenler, çocuklar için uygun yaş, birebir ve grup ders seçenekleri, öğrenme süresi ve ücretlendirme
              gibi konularda en çok sorulan cevaplar aşağıda yer alır.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/sss"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 text-sm font-extrabold text-white shadow-soft"
              >
                Tüm Soruları İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-200 bg-white px-6 text-sm font-extrabold text-cyan-900"
              >
                Ücretsiz Ön Görüşme Yap
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-cyan-100 bg-white p-5 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-cyan-50 p-5">
                <ShieldCheck className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-4 font-black text-slate-950">Güvenli başlangıç</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Suya alışma ve temel beceriler kontrollü ilerler.</p>
              </div>
              <div className="rounded-lg bg-cyan-50 p-5">
                <Waves className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-4 font-black text-slate-950">Teknik gelişim</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Nefes, ayak vuruşu ve su pozisyonu takip edilir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Contact />
    </>
  );
}
