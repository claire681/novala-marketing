'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const TESTIMONIAL_KEYS = ['t1', 't2', 't3'] as const;
const AUTO_ROTATE_MS = 6000;

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial() {
  const t = useTranslations('testimonial');
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIAL_KEYS.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  const current = t.raw(`items.${TESTIMONIAL_KEYS[activeIdx]}`) as TestimonialItem;

  return (
    <section className="py-20 px-8 md:px-16 bg-[#F4F8F8]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-6">
          {t('eyebrow')}
        </div>

        <div className="text-7xl text-emerald-rich opacity-25 leading-none mb-4 font-serif select-none">&ldquo;</div>

        <div className="min-h-[180px] flex flex-col items-center justify-center" key={activeIdx} style={{ animation: 'fade-in 500ms ease-out' }}>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-near-black leading-relaxed mb-8 max-w-3xl mx-auto">
            {current.quote}
          </p>

          <div className="flex flex-col items-center gap-1">
            <div className="text-sm font-bold text-near-black">{current.author}</div>
            <div className="text-xs text-[#5A6970]">{current.role}</div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIAL_KEYS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="w-2.5 h-2.5 rounded-full transition-all cursor-pointer"
              style={{ background: activeIdx === idx ? '#046A38' : '#D1D5DB' }}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
