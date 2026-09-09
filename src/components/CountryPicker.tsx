'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

interface Country {
  id: string;
  flag: string | null;
  name: string;
  locale: 'en' | 'fr' | null;
  available: boolean;
}

const COUNTRIES: Country[] = [
  { id: 'ca-en', flag: 'ca', name: 'Canada (English)', locale: 'en', available: true },
  { id: 'ca-fr', flag: 'ca', name: 'Canada (Français)', locale: 'fr', available: true },
  { id: 'us', flag: 'us', name: 'United States', locale: null, available: false },
  { id: 'gb', flag: 'gb', name: 'United Kingdom', locale: null, available: false },
  { id: 'au', flag: 'au', name: 'Australia', locale: null, available: false },
  { id: 'in', flag: 'in', name: 'India', locale: null, available: false },
  { id: 'fr-fr', flag: 'fr', name: 'France', locale: null, available: false },
  { id: 'mx', flag: 'mx', name: 'México', locale: null, available: false },
  { id: 'br', flag: 'br', name: 'Brasil', locale: null, available: false },
  { id: 'other', flag: null, name: 'Other countries', locale: null, available: false },
];

export default function CountryPicker() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentCountry = COUNTRIES.find(c => c.locale === locale) ?? COUNTRIES[0];

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

  const handleSelect = (country: Country) => {
    if (!country.available || !country.locale) return;
    router.replace(pathname, { locale: country.locale });
    setOpen(false);
  };

  const renderFlag = (country: Country, sizeClass: string) => {
    if (country.flag) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`https://flagcdn.com/w40/${country.flag}.png`} alt={country.name} className={`${sizeClass} object-cover rounded-sm flex-shrink-0`} />
      );
    }
    return <span className={`${sizeClass} inline-flex items-center justify-center text-base`}>🌐</span>;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-3 text-sm hover:text-emerald-bright transition-colors cursor-pointer">
        {renderFlag(currentCountry, 'w-6 h-4')}
        <span>{currentCountry.name}</span>
        <span className="text-xs">{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-2xl overflow-hidden min-w-[280px] z-50 max-h-96 overflow-y-auto">
          {COUNTRIES.map((country) => {
            const isActive = country.locale === locale && country.available;
            return (
              <button
                key={country.id}
                onClick={() => handleSelect(country)}
                disabled={!country.available}
                className={`w-full px-4 py-3 flex items-center gap-3 text-sm text-left transition-colors ${country.available ? 'text-near-black cursor-pointer hover:bg-mint-pale' : 'text-gray-400 cursor-not-allowed'}`}
                style={{ background: isActive ? '#F4FBF7' : 'white' }}
              >
                {renderFlag(country, 'w-6 h-4')}
                <span className="flex-1">{country.name}</span>
                {!country.available && <span className="text-xs text-gray-400 italic">Coming soon</span>}
                {isActive && <span className="text-emerald-rich">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
