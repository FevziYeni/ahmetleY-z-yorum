import { contact } from '../data/siteContent';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-cyan-100 bg-slate-950 px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Ahmet Onur yüzme hocası ile çocuk, yetişkin, özel ve birebir yüzme dersi için profesyonel yüzme eğitimi.
          </p>
        </div>
        <div className="text-sm leading-7 text-slate-300 md:text-right">
          <p>{contact.region}</p>
          <p>{contact.phone}</p>
          <p>{contact.instagram}</p>
        </div>
      </div>
    </footer>
  );
}
