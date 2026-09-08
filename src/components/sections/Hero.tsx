import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 bg-gradient-to-br from-emerald-darker to-emerald-deep">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-bold text-emerald-bright uppercase tracking-widest mb-4">
            {t('eyebrow')}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
            {t('headline1')}
          </h1>
          <h1 className="text-5xl md:text-7xl font-black text-emerald-bright leading-none tracking-tight mt-2">
            {t('headline2')}
          </h1>
          <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-lg">
            {t('subheadline')}
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <button className="bg-emerald-bright hover:bg-emerald-rich text-white px-7 py-4 rounded-lg font-bold text-base transition-colors cursor-pointer">
              {t('ctaPrimary')} →
            </button>
            <button className="bg-transparent border border-white/40 hover:border-white text-white px-6 py-4 rounded-lg font-bold text-base transition-colors cursor-pointer">
              ▶ {t('ctaSecondary')}
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center">
          <div className="text-8xl opacity-40">👤</div>
          <div className="text-sm text-white/50 italic mt-4">{t('photoPlaceholder')}</div>
        </div>
      </div>
    </section>
  );
}
