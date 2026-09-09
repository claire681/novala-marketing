'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#0E2A2A] py-24 px-8 md:px-16 text-white">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-8 leading-tight">
        {t('heading')}
      </h2>
      <p className="text-xl text-white/90 text-center mb-14 max-w-4xl mx-auto leading-relaxed">
        {t('subheadline')}
      </p>

      {submitted ? (
        <div className="text-center max-w-md mx-auto bg-white/10 border border-emerald-bright rounded-xl p-8">
          <div className="text-6xl mb-4">✓</div>
          <div className="text-xl font-bold text-white mb-2">{t('thanksTitle')}</div>
          <div className="text-white/80">{t('thanksText')}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">{t('fields.firstName.label')}</label>
              <input type="text" required placeholder={t('fields.firstName.placeholder')} className="w-full h-14 bg-white px-5 text-base text-near-black rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-bright" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">{t('fields.lastName.label')}</label>
              <input type="text" required placeholder={t('fields.lastName.placeholder')} className="w-full h-14 bg-white px-5 text-base text-near-black rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-bright" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">{t('fields.businessName.label')}</label>
              <input type="text" placeholder={t('fields.businessName.placeholder')} className="w-full h-14 bg-white px-5 text-base text-near-black rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-bright" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">{t('fields.email.label')}</label>
              <input type="email" required placeholder={t('fields.email.placeholder')} className="w-full h-14 bg-white px-5 text-base text-near-black rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-bright" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">{t('fields.phone.label')}</label>
              <input type="tel" placeholder={t('fields.phone.placeholder')} className="w-full h-14 bg-white px-5 text-base text-near-black rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-bright" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">{t('fields.employees.label')}</label>
              <select className="w-full h-14 bg-white px-5 text-base text-near-black rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-bright">
                <option>{t('fields.employees.placeholder')}</option>
                <option>Just me</option>
                <option>2 to 9</option>
                <option>10 to 49</option>
                <option>50+</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-3 max-w-4xl mx-auto mb-8">
            <input type="checkbox" required id="consent" className="mt-1 w-5 h-5 accent-emerald-bright cursor-pointer" />
            <label htmlFor="consent" className="text-sm text-white/85 leading-relaxed">
              {t('consent')}
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-emerald-bright hover:bg-emerald-rich text-white w-52 h-16 rounded-lg text-lg font-bold transition-colors cursor-pointer">
              {t('cta')}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
