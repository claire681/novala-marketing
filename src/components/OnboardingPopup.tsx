'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const STORAGE_KEY = 'novala-onboarding-seen';
const COOLDOWN_DAYS = 30;
const SHOW_DELAY_MS = 1500;

const Q1_KEYS = ['solo', 'small', 'large'] as const;
const Q2_KEYS = ['getPaid', 'payTeam', 'expenses', 'customers', 'salesTax', 'reports'] as const;

export default function OnboardingPopup() {
  const t = useTranslations('onboardingPopup');
  const [visible, setVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedNeeds, setSelectedNeeds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const seenAt = parseInt(stored, 10);
      const daysSince = (Date.now() - seenAt) / (1000 * 60 * 60 * 24);
      if (daysSince < COOLDOWN_DAYS) return;
    }
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  };

  const toggleNeed = (key: string) => {
    setSelectedNeeds(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(14, 42, 42, 0.7)', animation: 'popup-fade-in 400ms ease-out' }}>
      <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl relative" style={{ animation: 'popup-slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <button onClick={dismiss} className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white border border-gray-200 text-near-black text-xs cursor-pointer hover:bg-gray-50 flex items-center justify-center" aria-label={t('closeLabel')}>
          ✕
        </button>

        <div className="p-6 pb-3">
          <div className="text-[10px] font-extrabold text-near-black uppercase tracking-widest mb-3">
            {t('eyebrow')}
          </div>
          <h2 className="text-xl font-extrabold text-near-black mb-1.5 leading-tight">
            {t('title')}
          </h2>
          <p className="text-xs text-[#5A6970]">{t('subtitle')}</p>
        </div>

        <div className="px-6 pb-3">
          <div className="text-xs font-bold text-near-black mb-2.5">{t('q1Label')}</div>
          <div className="flex gap-1.5">
            {Q1_KEYS.map(key => {
              const isSelected = selectedSize === key;
              return (
                <button key={key} onClick={() => setSelectedSize(key)} className="flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer" style={{ background: isSelected ? '#046A38' : '#fff', color: isSelected ? '#fff' : '#0E2A2A', border: `1.5px solid ${isSelected ? '#046A38' : '#D1D5DB'}` }}>
                  {t(`q1Options.${key}`)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-6 pb-3">
          <div className="text-xs font-bold text-near-black">{t('q2Label')}</div>
          <div className="text-[10px] text-[#5A6970] mb-2.5">{t('q2Note')}</div>
          <div className="flex flex-wrap gap-1.5">
            {Q2_KEYS.map(key => {
              const isSelected = selectedNeeds.has(key);
              return (
                <button key={key} onClick={() => toggleNeed(key)} className="py-1.5 px-2.5 rounded-full text-xs transition-all cursor-pointer" style={{ background: isSelected ? '#046A38' : '#fff', color: isSelected ? '#fff' : '#0E2A2A', border: `1.5px solid ${isSelected ? '#046A38' : '#D1D5DB'}` }}>
                  {t(`q2Options.${key}`)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 flex flex-col gap-1">
          <button onClick={dismiss} className="w-full py-3 bg-emerald-rich hover:bg-emerald-deep text-white rounded-xl text-sm font-bold transition-colors cursor-pointer">
            {t('ctaPrimary')} →
          </button>
          <button onClick={dismiss} className="w-full py-2 text-[#5A6970] hover:text-near-black text-xs font-semibold transition-colors cursor-pointer bg-transparent border-none">
            {t('ctaSecondary')}
          </button>
        </div>
      </div>
    </div>
  );
}
