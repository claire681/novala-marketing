'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import CountUp from '@/components/CountUp';

export default function Insights() {
  const t = useTranslations('insights');
  const locale = useLocale();
  const suffix = locale === 'fr' ? ' %' : '%';
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const anim = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.85)',
    transition: `opacity 700ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
  });

  return (
    <section className="py-24 px-8 md:px-16" style={{ background: 'linear-gradient(135deg, #0A0A0A, #000000)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[3fr_2fr] gap-12 items-center">
        <div className="relative" ref={sectionRef}>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/photos/insights.jpg" alt="Business insights dashboard" width={1440} height={1080} className="w-full h-auto" />
          </div>
          <div className="hidden md:block absolute z-10" style={{ top: '8%', left: '-4%', ...anim(0) }}>
            <div style={{ transform: 'rotate(-2deg)' }}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-2xl border-l-4 border-[#4F46E5]" style={{ minWidth: '210px', boxShadow: '0 20px 40px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#4F46E5' }}>{t('cards.payroll.label')}</div>
                </div>
                <div className="text-lg font-extrabold text-black leading-tight">{t('cards.payroll.value')}</div>
                <div className="text-xs text-gray-500 mt-1">{t('cards.payroll.sub')}</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute z-10" style={{ top: '6%', right: '-4%', ...anim(150) }}>
            <div style={{ transform: 'rotate(2deg)' }}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-2xl border-l-4 border-[#F59E0B]" style={{ minWidth: '210px', boxShadow: '0 20px 40px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="17" x2="12" y2="17"/></svg>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#F59E0B' }}>{t('cards.accounting.label')}</div>
                </div>
                <div className="text-lg font-extrabold text-black leading-tight">{t('cards.accounting.value')}</div>
                <div className="text-xs text-gray-500 mt-1">{t('cards.accounting.sub')}</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute z-10" style={{ bottom: '8%', left: '-2%', ...anim(300) }}>
            <div style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-2xl border-l-4 border-[#EC4899]" style={{ minWidth: '210px', boxShadow: '0 20px 40px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#EC4899' }}>{t('cards.invoicing.label')}</div>
                </div>
                <div className="text-lg font-extrabold text-black leading-tight">{t('cards.invoicing.value')}</div>
                <div className="text-xs text-gray-500 mt-1">{t('cards.invoicing.sub')}</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute z-10" style={{ bottom: '10%', right: '-4%', ...anim(450) }}>
            <div style={{ transform: 'rotate(2deg)' }}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-2xl border-l-4 border-[#0891B2]" style={{ minWidth: '210px', boxShadow: '0 20px 40px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 11 13 15 9"/></svg>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0891B2' }}>{t('cards.taxFilings.label')}</div>
                </div>
                <div className="text-lg font-extrabold text-black leading-tight">{t('cards.taxFilings.value')}</div>
                <div className="text-xs text-gray-500 mt-1">{t('cards.taxFilings.sub')}</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute z-20" style={{ top: '50%', left: '50%', marginLeft: '-130px', marginTop: '-45px', ...anim(700) }}>
            <div style={{ transform: 'rotate(-1deg)' }}>
              <div className="rounded-2xl px-5 py-4 border border-white/10" style={{ background: 'linear-gradient(135deg, #023E22, #046A38)', minWidth: '260px', boxShadow: '0 24px 48px rgba(0,0,0,0.35), 0 8px 16px rgba(4,106,56,0.2)' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-extrabold" style={{ background: '#00A651', boxShadow: '0 4px 12px rgba(0, 166, 81, 0.5)' }}>V</div>
                  <div className="text-xs font-bold" style={{ color: '#00A651', letterSpacing: '0.05em' }}>Vela</div>
                </div>
                <div className="text-sm font-semibold text-white leading-snug">{t('cards.vela.message')}</div>
              </div>
            </div>
          </div>
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
          <a href="#vela-chat" className="inline-block bg-white hover:bg-mint-pale text-near-black px-6 py-3.5 rounded-lg font-bold text-sm transition-colors cursor-pointer">{t('cta')} →</a>
        </div>
      </div>
    </section>
  );
}
