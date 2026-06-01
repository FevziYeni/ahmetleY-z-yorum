import { About } from './components/About';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Lessons } from './components/Lessons';
import { WhyChooseMe } from './components/WhyChooseMe';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-display text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Lessons />
        <WhyChooseMe />
        <FAQ />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
