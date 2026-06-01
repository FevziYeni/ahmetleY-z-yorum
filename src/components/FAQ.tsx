import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function FAQ() {
  return (
    <section id="sss" className="bg-cyan-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Sık Sorulan Sorular"
          title="Yüzme dersi almadan önce merak edilenler"
          description="Ders formatı, yaş grubu, öğrenme süresi ve ücretlendirme gibi konularda en sık gelen sorular."
          tone="dark"
        />
        <div className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-white/15 bg-white/8 p-5 open:bg-white/12">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-extrabold">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-7 text-cyan-50">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
