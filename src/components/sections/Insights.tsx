import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import CountUp from '@/components/CountUp';

export default function Insights() {
  const t = useTranslations('insights');
  const locale = useLocale();
  const suffix = locale === 'fr' ? ' %' : '%';

  return (
    <section className="py-24 px-8 md:px-16" style={{ background: 'linear-gradient(135deg, #0A0A0A, #000000)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/photos/insights.jpg" alt="Business insights dashboard" width={1440} height={1080} className="w-full h-auto" />
        </div>
        <div>
          <div className="text-xs font-bold text-white uppercase tracking-widest mb-4">{t('eyebrow')}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">{t('headline')}</h2>
          <div className="bg-white rounded-2xl p-5 mb-6 max-w-xs">
            <div className="text-[10px] font-bold text-[#5A6970] uppercase tracking-widest">{t('statLabel')}</div>
            <div className="text-5xl font-black text-emerald-rich my-1.5 leading-none">
              <CountUp end={24} prefix="+" suffix={suffix} />
            </div>
            <div className="text-xs text-[#5A6970]">{t('statPeriod')}</div>
          </div>
          <button className="bg-white hover:bg-mint-pale text-near-black px-6 py-3.5 rounded-lg font-bold text-sm transition-colors cursor-pointer">{t('cta')} →</button>
        </div>
      </div>
    </section>
  );
}
