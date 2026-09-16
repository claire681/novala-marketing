'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const STORAGE_KEY = 'novala-cookie-consent';

export default function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: true, timestamp: Date.now() }));
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: false, timestamp: Date.now() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-md z-[60] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6" style={{ animation: 'popup-slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
      <h3 className="text-base font-bold text-near-black mb-2">{t('title')}</h3>
      <p className="text-sm text-[#5A6970] leading-relaxed mb-4">
        {t('body')}{' '}
        <Link href="/privacy" className="text-emerald-rich underline hover:text-emerald-deep">{t('learnMore')}</Link>
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button onClick={handleAccept} className="flex-1 bg-emerald-rich hover:bg-emerald-deep text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer">
          {t('accept')}
        </button>
        <button onClick={handleReject} className="flex-1 bg-white hover:bg-gray-50 text-near-black border border-gray-300 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer">
          {t('reject')}
        </button>
      </div>
    </div>
  );
}
