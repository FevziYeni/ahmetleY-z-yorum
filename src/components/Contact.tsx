import { Instagram, Mail, MapPin, MessageCircle, PhoneCall, Send } from 'lucide-react';
import { FormEvent } from 'react';
import { contact } from '../data/siteContent';
import { CTAButton } from './CTAButton';
import { SectionHeading } from './SectionHeading';

const contactCards = [
  { label: 'Telefon', value: contact.phone, href: `tel:${contact.tel}`, icon: PhoneCall },
  { label: 'WhatsApp', value: 'WhatsApp ile bilgi al', href: `https://wa.me/${contact.whatsapp}`, icon: MessageCircle },
  { label: 'E-posta', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: 'Instagram', value: contact.instagram, href: contact.instagramUrl, icon: Instagram },
  { label: 'Hizmet Bölgesi', value: contact.region, href: '/havuzlar', icon: MapPin },
];

function createWhatsAppUrl(form: HTMLFormElement) {
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const lesson = String(formData.get('lesson') || '').trim();
  const message = String(formData.get('message') || '').trim();

  const text = [
    'Merhaba Ahmet hocam, yüzme dersi hakkında bilgi almak istiyorum.',
    '',
    `Ad Soyad: ${name}`,
    `Telefon: ${phone}`,
    `İlgilendiğim ders: ${lesson}`,
    `Mesaj: ${message}`,
  ].join('\n');

  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

function createMailToUrl() {
  const subject = encodeURIComponent('Yüzme dersi bilgi talebi');
  const body = encodeURIComponent(
    'Merhaba Ahmet hocam,\n\nYüzme dersi hakkında bilgi almak istiyorum.\n\nAd Soyad:\nTelefon:\nİlgilendiğim ders:\nMesaj:',
  );

  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = createWhatsAppUrl(event.currentTarget);
  }

  return (
    <section id="iletisim" className="bg-white px-4 py-20 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="İletişim"
          title="Yüzme dersi için hızlıca iletişime geçin"
          description="Çocuk yüzme dersi, yetişkin yüzme dersi veya özel yüzme dersi için seviye ve hedeflerinizi paylaşarak uygun programı öğrenebilirsiniz."
        />

        <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid min-w-0 gap-4">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-w-0 items-center gap-4 rounded-lg border border-cyan-100 bg-cyan-50/70 p-5 transition hover:border-cyan-200 hover:bg-cyan-50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-cyan-800 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-extrabold uppercase tracking-wide text-cyan-700">{item.label}</span>
                    <span className="mt-1 block break-words font-black text-slate-950">{item.value}</span>
                  </span>
                </a>
              );
            })}

            <div className="rounded-lg bg-cyan-700 p-6 text-white shadow-soft">
              <h3 className="text-2xl font-black">Hızlı dönüş almak ister misiniz?</h3>
              <p className="mt-3 leading-7 text-cyan-50">
                WhatsApp üzerinden yaş, seviye ve hedefinizi yazın; size uygun ders programı için ön değerlendirme yapılsın.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={`https://wa.me/${contact.whatsapp}`} variant="light" className="w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp'tan Bilgi Al
                </CTAButton>
                <CTAButton href={createMailToUrl()} variant="secondary" className="w-full sm:w-auto">
                  <Mail className="h-4 w-4" />
                  Mail Gönder
                </CTAButton>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="min-w-0 rounded-lg border border-cyan-100 bg-white p-5 shadow-soft sm:p-6">
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2 text-sm font-extrabold text-slate-800">
                Ad Soyad
                <input className="input-field" name="name" type="text" placeholder="Adınız Soyadınız" required />
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-extrabold text-slate-800">
                Telefon
                <input className="input-field" name="phone" type="tel" placeholder="05XX XXX XX XX" required />
              </label>
            </div>
            <label className="mt-5 grid min-w-0 gap-2 text-sm font-extrabold text-slate-800">
              İlgilendiğiniz ders
              <select className="input-field" name="lesson" defaultValue="Özel yüzme dersi">
                <option>Çocuk yüzme dersi</option>
                <option>Yetişkin yüzme dersi</option>
                <option>Özel yüzme dersi</option>
                <option>Başlangıç seviyesi eğitim</option>
                <option>Teknik geliştirme dersi</option>
              </select>
            </label>
            <label className="mt-5 grid min-w-0 gap-2 text-sm font-extrabold text-slate-800">
              Mesajınız
              <textarea
                className="input-field min-h-36 resize-y"
                name="message"
                placeholder="Yaş, seviye, hedef ve tercih ettiğiniz bölgeyi yazabilirsiniz."
                required
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 text-sm font-extrabold text-white shadow-soft transition hover:bg-cyan-700 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                WhatsApp'a Gönder
              </button>
              <a
                href={createMailToUrl()}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-cyan-200 bg-white px-6 text-sm font-extrabold text-cyan-900 transition hover:border-cyan-300 hover:bg-cyan-50 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Mail Gönder
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
