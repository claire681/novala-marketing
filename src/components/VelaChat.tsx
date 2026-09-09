'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function VelaChat() {
  const t = useTranslations('velaChat');
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} aria-label={t('openLabel')} className="w-14 h-14 rounded-full bg-emerald-rich shadow-2xl flex items-center justify-center hover:bg-emerald-deep transition-colors cursor-pointer">
          <span className="text-white font-bold text-xl">V</span>
        </button>
      )}

      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 flex flex-col" style={{ animation: 'popup-slide-up 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="bg-emerald-rich text-white px-5 py-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-emerald-rich flex items-center justify-center font-bold">V</div>
              <div>
                <div className="font-bold">Vela</div>
                <div className="text-xs opacity-80">{t('role')}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label={t('closeLabel')} className="text-white/80 hover:text-white cursor-pointer">✕</button>
          </div>
          <div className="p-5 space-y-3">
            <div className="bg-mint-pale text-near-black rounded-2xl p-3 text-sm leading-relaxed">
              {t('greeting')}
            </div>
            <div className="text-xs text-center text-gray-500 py-1">
              {t('note')}
            </div>
          </div>
          <div className="p-4 pt-0">
            <button className="w-full bg-emerald-rich text-white py-3 rounded-xl font-bold hover:bg-emerald-deep transition-colors cursor-pointer text-sm">
              {t('cta')} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
