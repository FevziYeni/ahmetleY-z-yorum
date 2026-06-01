import { ArrowRight, MessageCircle, PhoneCall, Star } from 'lucide-react';
import { contact, stats } from '../data/siteContent';
import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <section id="ana-sayfa" className="relative isolate overflow-hidden bg-pool">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/swim-lesson-hero.png"
          alt="Profesyonel yüzme eğitimi için modern havuz ortamı"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-cyan-900/18" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-white/85 px-4 py-2 text-xs font-extrabold text-cyan-900 shadow-sm sm:text-sm">
            <Star className="h-4 w-4 fill-cyan-500 text-cyan-500" />
            <span>Ahmet Onur ile profesyonel yüzme eğitimi</span>
          </div>
          <h1 className="mt-7 max-w-full break-words text-3xl font-black leading-tight text-slate-950 sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Profesyonel Yüzme Eğitimi ile güvenle suya adım atın.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Ahmet Onur yüzme hocası olarak çocuk, yetişkin ve başlangıç seviyesindeki öğrenciler için
            birebir yüzme dersi, özel yüzme dersi ve teknik geliştirme programları sunar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#iletisim">
              Hemen Ders Al
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton href={`https://wa.me/${contact.whatsapp}`} variant="secondary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp'tan Bilgi Al
            </CTAButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.value} className="rounded-lg border border-white/70 bg-white/82 p-4 shadow-sm backdrop-blur">
                <strong className="block text-lg font-black text-cyan-800">{item.value}</strong>
                <span className="mt-1 block text-sm font-semibold text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <div className="w-full max-w-sm rounded-lg border border-white/80 bg-white/88 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-700">Ücretsiz ön görüşme</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">Size uygun ders planını birlikte netleştirelim.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Seviye, hedef, yaş grubu ve hizmet bölgesi bilgilerine göre en doğru yüzme dersi programı hazırlanır.
            </p>
            <a
              href={`tel:${contact.tel}`}
              className="mt-6 inline-flex items-center gap-3 text-sm font-extrabold text-cyan-800 hover:text-cyan-950"
            >
              <PhoneCall className="h-5 w-5" />
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
