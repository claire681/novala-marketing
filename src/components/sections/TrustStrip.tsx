import { useTranslations } from 'next-intl';

export default function TrustStrip() {
  const t = useTranslations('trustStrip');

  return (
    <section className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-6">
          {t('eyebrow')}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-base font-bold text-near-black text-center">
            {t('item1')}
          </div>
          <div className="text-base font-bold text-near-black text-center">
            {t('item2')}
          </div>
          <div className="text-base font-bold text-near-black text-center">
            {t('item3')}
          </div>
          <div className="text-base font-bold text-near-black text-center">
            {t('item4')}
          </div>
        </div>
      </div>
    </section>
  );
}
