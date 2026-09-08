import { useTranslations } from 'next-intl';

export default function OnePlatform() {
  const t = useTranslations('onePlatform');

  return (
    <section className="py-24 px-8 md:px-16 bg-gradient-to-br from-[#EDF3F1] to-[#DDEEE4]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">
            {t('eyebrow')}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-near-black leading-tight mb-2">
            {t('headline1')}
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-near-black leading-tight mb-6">
            {t('headline2')}
          </h2>
          <p className="text-lg text-near-black mb-8 max-w-md">
            {t('subheadline')}
          </p>
          <button className="bg-emerald-rich hover:bg-emerald-deep text-white px-6 py-3.5 rounded-lg font-bold text-sm transition-colors cursor-pointer">
            {t('cta')} →
          </button>
        </div>

        <div className="bg-black/5 border border-black/10 rounded-3xl p-16 text-center min-h-[400px] flex items-center justify-center">
          <div className="text-8xl opacity-30">💻</div>
        </div>
      </div>
    </section>
  );
}
