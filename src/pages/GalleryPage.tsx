import { Gallery } from '../components/Gallery';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';

export function GalleryPage() {
  return (
    <>
      <SEO
        title="Yüzme Dersi Galeri | Ahmet Onur Yüzme Hocası"
        description="Ahmet Onur ile çocuk, yetişkin, bireysel ve grup yüzme derslerinden gerçek fotoğraflar. İstanbul yüzme eğitimi galeri sayfası."
        path="/galeri"
        keywords="yüzme dersi fotoğrafları, çocuk yüzme dersi galeri, İstanbul yüzme eğitimi"
      />
      <PageHero
        eyebrow="Galeri"
        title="Yüzme derslerinden gerçek kareler"
        description="Ders ortamını, öğrencilerin gelişim anlarını ve kullanılan havuzları yakından inceleyin."
        image="/images/gallery/underwater-child.jpg"
      />
      <Gallery />
    </>
  );
}
