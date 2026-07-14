import { About } from '../components/About';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';
import { WhyChooseMe } from '../components/WhyChooseMe';

export function AboutPage() {
  return (
    <>
      <SEO
        title="Ahmet Onur Kimdir? | İstanbul Yüzme Hocası"
        description="Ahmet Onur hakkında bilgi alın. İstanbul'da çocuk, yetişkin ve birebir özel yüzme dersi için güvenli, disiplinli ve profesyonel eğitim yaklaşımı."
        path="/hakkimda"
        keywords="Ahmet Onur yüzme hocası, İstanbul yüzme hocası, profesyonel yüzme eğitmeni"
      />
      <PageHero
        eyebrow="Hakkımda"
        title="Ahmet Onur ile profesyonel yüzme eğitimi"
        description="Güven, disiplin, sabır ve kişiye özel gelişim planı üzerine kurulu yüzme dersleri."
        image="/images/gallery/coach-mba.jpg"
      />
      <About />
      <WhyChooseMe />
    </>
  );
}
