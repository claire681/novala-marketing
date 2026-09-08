import { useTranslations } from 'next-intl';

const CATEGORIES = ['payroll', 'accounting', 'invoicing', 'workforce', 'reporting', 'compliance'] as const;

export default function Features() {
  const t = useTranslations('features');

  return (
    <section className="bg-white py-24 px-8 md:px-16">
      <div className="text-center mb-16">
        <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-near-black">
          {t('heading')}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => (
          <div key={cat} className="bg-mint-pale rounded-xl px-7 py-8">
            <div className="text-2xl font-light text-near-black mb-2.5" style={{ letterSpacing: '-0.01em' }}>
              {t(`items.${cat}.title`)}
            </div>
            <div className="h-0.5 w-9 bg-emerald-rich mb-4"></div>
            <div className="text-sm text-[#5A6970] leading-relaxed">
              {t(`items.${cat}.description`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
