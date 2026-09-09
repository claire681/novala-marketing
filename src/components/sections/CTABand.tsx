import { useTranslations } from 'next-intl';

export default function CTABand() {
  const t = useTranslations('ctaBand');

  return (
    <section
      className="relative flex flex-col items-center justify-center px-8 py-24"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 20%, #F0FCF5 45%, #E5F8FA 65%, #D8ECFB 82%, #D0DAFA 100%)',
        minHeight: '400px',
      }}
    >
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-center mb-16 tracking-tight leading-tight max-w-4xl" style={{ color: '#161616' }}>
        {t('heading')}
      </h2>
      <button className="bg-emerald-bright hover:bg-emerald-rich text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors cursor-pointer" style={{ minWidth: '230px' }}>
        {t('ctaButton')}
      </button>
      <a href="#" className="absolute bottom-8 text-base font-bold hover:text-emerald-rich transition-colors" style={{ color: '#161616' }}>
        {t('disclosure')}
      </a>
    </section>
  );
}
