'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function VelaChat() {
  const t = useTranslations('velaChat');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#vela-chat') {
        setOpen(true);
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} aria-label={t('openLabel')} className="w-16 h-16 rounded-full bg-emerald-rich shadow-2xl flex items-center justify-center hover:bg-emerald-deep transition-colors cursor-pointer">
          <span className="text-white font-bold text-2xl">V</span>
        </button>
      )}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-[420px] max-w-[calc(100vw-3rem)] flex flex-col" style={{ animation: 'popup-slide-up 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="bg-emerald-rich text-white px-6 py-5 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white text-emerald-rich flex items-center justify-center font-bold text-lg">V</div>
              <div>
                <div className="font-bold text-lg">Vela</div>
                <div className="text-sm opacity-80">{t('role')}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label={t('closeLabel')} className="text-white/80 hover:text-white cursor-pointer text-lg">✕</button>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-mint-pale text-near-black rounded-2xl p-4 text-base leading-relaxed">{t('greeting')}</div>
            <div className="text-sm text-center text-gray-500 py-1">{t('note')}</div>
          </div>
          <div className="p-5 pt-0">
            <a href="https://www.getnovala.com/pricing" className="block text-center bg-emerald-rich text-white py-3.5 rounded-xl font-bold hover:bg-emerald-deep transition-colors cursor-pointer text-base">{t('cta')} →</a>
          </div>
        </div>
      )}
    </div>
  );
}
