import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <section className="bg-white px-4 py-24 sm:px-5 lg:px-8">
      <SEO
        title="Sayfa Bulunamadı | Ahmet Onur Yüzme Hocası"
        description="Aradığınız sayfa bulunamadı. İstanbul yüzme dersleri ve iletişim sayfalarına ulaşabilirsiniz."
        path="/404"
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-wide text-cyan-700">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">Sayfa bulunamadı</h1>
        <p className="mt-5 leading-8 text-slate-600">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-600 px-6 text-sm font-extrabold text-white shadow-soft"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}
