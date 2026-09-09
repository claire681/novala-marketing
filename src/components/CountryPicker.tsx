'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const LOCALE_LABELS: Record<string, { flag: string; name: string }> = {
  en: { flag: '🇨🇦', name: 'Canada (English)' },
  fr: { flag: '🇨🇦', name: 'Canada (Français)' },
};

export default function CountryPicker() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLabel = LOCALE_LABELS[locale] ?? LOCALE_LABELS.en;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'en' | 'fr' });
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-3.5 text-sm hover:text-emerald-bright transition-colors cursor-pointer">
        <span className="text-xl">{currentLabel.flag}</span>
        <span>{currentLabel.name}</span>
        <span className="text-xs">{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[220px] z-50">
          {routing.locales.map((loc) => {
            const isActive = loc === locale;
            const label = LOCALE_LABELS[loc] ?? LOCALE_LABELS.en;
            return (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className="w-full px-4 py-3 flex items-center gap-3 text-sm text-near-black transition-colors cursor-pointer text-left"
                style={{ background: isActive ? '#F4FBF7' : 'white' }}
              >
                <span className="text-lg">{label.flag}</span>
                <span className="flex-1">{label.name}</span>
                {isActive && <span className="text-emerald-rich">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
