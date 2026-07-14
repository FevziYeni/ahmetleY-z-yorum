import { Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ChildrenLessonsPage } from './pages/ChildrenLessonsPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { IstanbulSwimmingPage } from './pages/IstanbulSwimmingPage';
import { LessonsPage } from './pages/LessonsPage';
import { LocationsPage } from './pages/LocationsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivateLessonsPage } from './pages/PrivateLessonsPage';
import { AdultLessonsPage } from './pages/AdultLessonsPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-display text-slate-900 antialiased">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimda" element={<AboutPage />} />
          <Route path="/yuzme-dersleri" element={<LessonsPage />} />
          <Route path="/istanbul-yuzme-dersi" element={<IstanbulSwimmingPage />} />
          <Route path="/cocuk-yuzme-dersi" element={<ChildrenLessonsPage />} />
          <Route path="/yetiskin-yuzme-dersi" element={<AdultLessonsPage />} />
          <Route path="/ozel-yuzme-dersi" element={<PrivateLessonsPage />} />
          <Route path="/havuzlar" element={<LocationsPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/sss" element={<FaqPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
