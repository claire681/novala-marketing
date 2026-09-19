import { useTranslations } from 'next-intl';
import Image from 'next/image';

const COMPETITORS = [
  { name: 'QuickBooks', slug: 'quickbooks', width: 32, height: 32 },
  { name: 'Xero', slug: 'xero', width: 32, height: 32 },
  { name: 'Wave', slug: 'wave', width: 80, height: 30 },
  { name: 'FreshBooks', slug: 'freshbooks', width: 90, height: 26 },
  { name: 'Sage', slug: 'sage', width: 32, height: 32 },
];

export default function TrustStrip() {
  const t = useTranslations('trustStrip');

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-near-black tracking-tight leading-tight mb-4">
          {t('headline')}
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('subheadline')}
        </p>
        <div className="bg-gray-50 rounded-2xl px-8 py-10 md:py-12">
          <div className="flex flex-wrap justify-around items-center gap-8 md:gap-12">
            {COMPETITORS.map((c) => (
              <div key={c.name} className="text-center group">
                <div className="w-[110px] h-[60px] rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-2  p-3">
                  <Image src={`/logos/${c.slug}.svg`} alt={c.name} width={c.width} height={c.height} unoptimized style={{ maxWidth: c.width, maxHeight: c.height, width: 'auto', height: 'auto' }} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
