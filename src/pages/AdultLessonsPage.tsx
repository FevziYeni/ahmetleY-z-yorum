import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';

export function AdultLessonsPage() {
  return (
    <>
      <SEO
        title="Yetişkin Yüzme Dersi İstanbul | Başlangıç ve Teknik Gelişim"
        description="İstanbul'da yetişkin yüzme dersi. Yüzme bilmeyen yetişkinler, su korkusu olanlar ve tekniğini geliştirmek isteyenler için birebir eğitim."
        path="/yetiskin-yuzme-dersi"
        keywords="yetişkin yüzme dersi İstanbul, yetişkin yüzme hocası, yüzme öğrenmek istiyorum, birebir yüzme dersi"
      />
      <PageHero
        eyebrow="Yetişkin Yüzme Dersi"
        title="Yetişkinler için sakin, anlaşılır ve hedef odaklı yüzme dersi"
        description="Başlangıç seviyesinden teknik gelişime kadar her ders öğrencinin rahatlığı ve ilerleme hızına göre planlanır."
        image="/images/gallery/adult-technique-york.jpg"
      />
      <section className="bg-white px-4 py-20 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-slate-950">Yüzme bilmeyen yetişkinler için doğru başlangıç</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Yetişkin yüzme derslerinde su korkusunu azaltma, doğru nefes alma, su üstünde kalma, temel ayak vuruşu ve
            kontrollü ilerleme adımları kullanılır. Daha önce yüzme bilen öğrenciler için stil tekniği, kondisyon ve
            verimlilik üzerine çalışılır.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
