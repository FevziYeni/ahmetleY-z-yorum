import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { contact } from '../data/siteContent';
import { Logo } from './Logo';

const navItems = [
  { label: 'Ana Sayfa', href: '#ana-sayfa' },
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'Dersler', href: '#yuzme-dersleri' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 pr-20 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-slate-700 transition hover:text-cyan-700">
              {item.label}
            </a>
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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
