'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

const QUESTION_KEYS = ['whatIs', 'easyToLearn', 'cost', 'payroll', 'expenses'] as const;

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="bg-white pt-24 pb-16 px-8 md:px-16">
      <h2 className="text-4xl md:text-6xl font-light text-[#161616] text-center leading-tight tracking-tight mb-16 md:mb-20 max-w-5xl mx-auto">
        {t('heading')}
      </h2>

      <div className="max-w-5xl mx-auto">
        {QUESTION_KEYS.map((key, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={key} className="border-t border-[#D9D9D9]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full py-7 flex items-center justify-between text-left cursor-pointer gap-4"
              >
                <span
                  className="text-lg font-bold transition-colors"
                  style={{ color: isOpen ? '#046A38' : '#161616' }}
                >
                  {t(`items.${key}.q`)}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke={isOpen ? '#046A38' : '#161616'}
                  strokeWidth="2"
                  className="flex-shrink-0 transition-transform"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                  <polyline points="5 8 10 13 15 8" />
                </svg>
              </button>
              {isOpen && (
                <div className="pb-11 max-w-3xl">
                  <p className="text-base text-[#161616] leading-relaxed">
                    {t(`items.${key}.a`)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
        <div className="border-t border-[#D9D9D9]"></div>
      </div>

      <div className="text-center pt-16">
        <a href="#" className="inline-flex items-center gap-4 text-lg text-[#161616] hover:text-emerald-rich transition-colors">
          {t('seeMore')}
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="5 8 10 13 15 8" />
          </svg>
        </a>
      </div>
    </section>
  );
}
