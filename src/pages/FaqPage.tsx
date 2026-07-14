import { FAQ } from '../components/FAQ';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';

export function FaqPage() {
  return (
    <>
      <SEO
        title="Yüzme Dersi Sık Sorulan Sorular | Ahmet Onur"
        description="Yüzme dersi ücretleri, ders süresi, çocuklar için uygun yaş, birebir ve grup dersleri hakkında sık sorulan sorular."
        path="/sss"
        keywords="yüzme dersi sık sorulan sorular, yüzme dersi ücretleri, yüzme öğrenme süresi"
      />
      <PageHero
        eyebrow="Sık Sorulan Sorular"
        title="Yüzme dersi almadan önce merak edilenler"
        description="Ders formatı, yaş grubu, öğrenme süresi ve ücretlendirme hakkında temel bilgiler."
      />
      <FAQ />
    </>
  );
}
