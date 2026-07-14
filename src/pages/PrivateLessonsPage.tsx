import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';
import { TrainingFormats } from '../components/TrainingFormats';

export function PrivateLessonsPage() {
  return (
    <>
      <SEO
        title="Özel Yüzme Dersi İstanbul | Birebir Yüzme Hocası"
        description="İstanbul'da özel yüzme dersi ve birebir yüzme hocası. Çocuk ve yetişkinler için kişiye özel program, güvenli havuz ortamı ve gelişim takibi."
        path="/ozel-yuzme-dersi"
        keywords="özel yüzme dersi İstanbul, birebir yüzme dersi, özel yüzme hocası, İstanbul özel yüzme eğitimi"
      />
      <PageHero
        eyebrow="Özel Yüzme Dersi"
        title="Birebir takip ile kişiye özel yüzme eğitimi"
        description="Öğrencinin seviyesine, hedeflerine ve öğrenme hızına göre planlanan özel yüzme dersleri."
        image="/images/gallery/baby-private-lane.jpg"
      />
      <TrainingFormats />
      <Contact />
    </>
  );
}
