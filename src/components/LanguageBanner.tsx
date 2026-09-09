'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const STORAGE_KEY = 'novala-lang-banner-dismissed';
const SUPPORTED_LOCALES = ['en', 'fr'] as const;
type SupportedLocale = typeof SUPPORTED_LOCALES[number];

const LANG_NAMES: Record<SupportedLocale, string> = {
  en: 'English',
  fr: 'Français',
};

export default function LanguageBanner() {
  const t = useTranslations('languageBanner');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [suggestedLocale, setSuggestedLocale] = useState<SupportedLocale | null>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') return;

    const browserLang = navigator.language.split('-')[0].toLowerCase();

    if (SUPPORTED_LOCALES.includes(browserLang as SupportedLocale) && browserLang !== currentLocale) {
      setSuggestedLocale(browserLang as SupportedLocale);
    }
  }, [currentLocale]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setSuggestedLocale(null);
  };

  const switchLang = () => {
    if (!suggestedLocale) return;
    localStorage.setItem(STORAGE_KEY, 'true');
    router.replace(pathname, { locale: suggestedLocale });
  };

  if (!suggestedLocale) return null;

  const langName = LANG_NAMES[suggestedLocale];

  return (
    <div className="fixed top-24 right-6 z-[90] max-w-xs bg-white rounded-xl shadow-2xl border border-gray-200 p-4" style={{ animation: 'popup-slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="text-sm font-semibold text-near-black mb-2">
            {t('message', { language: langName })}
          </div>
          <button onClick={switchLang} className="text-sm text-emerald-rich font-bold hover:underline cursor-pointer">
            {t('switchTo', { language: langName })} →
          </button>
        </div>
        <button onClick={dismiss} className="text-gray-400 hover:text-near-black flex-shrink-0 cursor-pointer" aria-label={t('dismiss')}>
          ✕
        </button>
      </div>
    </div>
  );
}
