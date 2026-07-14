import { Locations } from '../components/Locations';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';

export function LocationsPage() {
  return (
    <>
      <SEO
        title="İstanbul Yüzme Havuzları | Ders Verilen Havuzlar"
        description="Ahmet Onur yüzme dersleri için kullanılan İstanbul kapalı havuzları. Başakşehir, Florya, York Athletic Club, Elitegarden ve okul havuzu seçenekleri."
        path="/havuzlar"
        keywords="İstanbul yüzme havuzu hocası, Başakşehir yüzme dersi, Florya yüzme dersi, kapalı havuz yüzme dersi"
      />
      <PageHero
        eyebrow="Ders Verilen Havuzlar"
        title="İstanbul'da yüzme dersi için uygun havuz ortamları"
        description="Ders programı öğrencinin konumuna, seviyesine ve uygun saatlere göre farklı kapalı havuzlarda planlanabilir."
        image="/images/gallery/elitegarden-basaksehir.jpg"
      />
      <Locations />
    </>
  );
}
