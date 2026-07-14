import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { contact } from '../data/siteContent';
import { Logo } from './Logo';

const navItems = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımda', to: '/hakkimda' },
  { label: 'Dersler', to: '/yuzme-dersleri' },
  { label: 'İstanbul', to: '/istanbul-yuzme-dersi' },
  { label: 'Havuzlar', to: '/havuzlar' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'SSS', to: '/sss' },
  { label: 'İletişim', to: '/iletisim' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 pr-16 sm:px-5 sm:pr-20 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-bold transition hover:text-cyan-700 ${isActive ? 'text-cyan-700' : 'text-slate-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          className="hidden items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:bg-cyan-700 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="absolute right-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-cyan-200 bg-white text-cyan-900 shadow-sm lg:hidden"
          aria-label="Menüyü aç veya kapat"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-100 bg-white px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobil menü">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-bold hover:bg-cyan-50 hover:text-cyan-800 ${
                    isActive ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
