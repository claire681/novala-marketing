import { useTranslations } from 'next-intl';

export default function Insights() {
  const t = useTranslations('insights');

  return (
    <section className="py-24 px-8 md:px-16 bg-gradient-to-br from-emerald-darker to-emerald-deep">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center min-h-[400px] flex flex-col items-center justify-center">
          <div className="text-8xl opacity-40">👤</div>
          <div className="text-sm text-white/50 italic mt-4">{t('photoPlaceholder')}</div>
        </div>

        <div>
          <div className="text-xs font-bold text-white uppercase tracking-widest mb-4">
            {t('eyebrow')}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {t('headline')}
          </h2>

          <div className="bg-white rounded-2xl p-5 mb-6 max-w-xs">
            <div className="text-[10px] font-bold text-[#5A6970] uppercase tracking-widest">
              {t('statLabel')}
            </div>
            <div className="text-5xl font-black text-emerald-rich my-1.5 leading-none">
              {t('statValue')}
            </div>
            <div className="text-xs text-[#5A6970]">
              {t('statPeriod')}
            </div>
          </div>

          <button className="bg-white hover:bg-mint-pale text-near-black px-6 py-3.5 rounded-lg font-bold text-sm transition-colors cursor-pointer">
            {t('cta')} →
          </button>
        </div>
      </div>
    </section>
  );
}
