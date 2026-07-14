import { Lessons } from '../components/Lessons';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';
import { TrainingFormats } from '../components/TrainingFormats';

export function LessonsPage() {
  return (
    <>
      <SEO
        title="Yüzme Dersleri İstanbul | Çocuk, Yetişkin ve Özel Ders"
        description="İstanbul'da çocuk yüzme dersi, yetişkin yüzme dersi, özel yüzme dersi ve teknik gelişim eğitimleri. Ahmet Onur ile seviyenize uygun yüzme programı."
        path="/yuzme-dersleri"
        keywords="yüzme dersleri İstanbul, özel yüzme dersi İstanbul, çocuk yüzme dersi, yetişkin yüzme dersi"
      />
      <PageHero
        eyebrow="Yüzme Dersleri"
        title="İstanbul'da çocuk, yetişkin ve özel yüzme dersleri"
        description="Başlangıç seviyesinden teknik gelişime kadar dersler öğrencinin hedeflerine göre planlanır."
        image="/images/gallery/group-children-mba.jpg"
      />
      <Lessons />
      <TrainingFormats />
    </>
  );
}
