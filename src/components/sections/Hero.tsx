import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative min-h-[85vh] pt-40 pb-20 px-8 md:px-16 overflow-hidden">
      <Image src="/photos/hero-people.jpg" alt="Novala for growing businesses" fill className="object-cover z-0" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-emerald-bright uppercase tracking-widest mb-6">{t('eyebrow')}</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">{t('headline1')}</h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-emerald-bright leading-none tracking-tight mt-2">{t('headline2')}</h1>
          <p className="mt-8 text-xl text-white leading-relaxed max-w-2xl">{t('subheadline')}</p>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href="https://app.getnovala.com/pricing" className="inline-block bg-emerald-bright hover:bg-emerald-rich text-white px-8 py-4 rounded-lg font-bold text-base transition-colors cursor-pointer shadow-2xl">{t('ctaPrimary')} →</a>
            <button className="inline-block bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 hover:border-white text-white px-6 py-4 rounded-lg font-bold text-base transition-colors cursor-pointer" disabled>▶ {t('ctaSecondary')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
