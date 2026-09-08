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
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#161616] text-center mb-16 tracking-tight leading-tight max-w-4xl">
        {t('heading')}
      </h2>
      <button className="bg-emerald-bright hover:bg-emerald-rich text-white px-8 py-4 rounded-lg text-lg font-bold min-w-[230px] transition-colors cursor-pointer">
        {t('ctaButton')}
      </button>
      
        href="#"
        className="absolute bottom-8 text-base font-bold text-[#161616] hover:text-emerald-rich transition-colors"
      >
        {t('disclosure')}
      </a>
    </section>
  );
}
