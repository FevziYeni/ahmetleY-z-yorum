import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';

export function ContactPage() {
  return (
    <>
      <SEO
        title="İletişim | Ahmet Onur Yüzme Hocası"
        description="İstanbul'da çocuk, yetişkin ve özel yüzme dersi için Ahmet Onur ile telefon, WhatsApp, e-posta veya iletişim formu üzerinden görüşün."
        path="/iletisim"
        keywords="Ahmet Onur iletişim, yüzme hocası telefon, İstanbul yüzme dersi iletişim"
      />
      <PageHero
        eyebrow="İletişim"
        title="Yüzme dersi için hızlıca iletişime geçin"
        description="Seviye, yaş grubu, hedef ve tercih ettiğiniz bölgeye göre uygun ders programını birlikte netleştirelim."
        image="/images/gallery/york-family-lesson.jpg"
      />
      <Contact />
    </>
  );
}
