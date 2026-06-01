import { MessageCircle } from 'lucide-react';
import { contact } from '../data/siteContent';

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_16px_40px_rgba(16,185,129,0.38)] transition duration-200 hover:-translate-y-1 hover:bg-emerald-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4"
      aria-label="WhatsApp'tan bilgi al"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-extrabold sm:inline">WhatsApp</span>
    </a>
  );
}
