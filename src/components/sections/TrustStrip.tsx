import { useTranslations } from 'next-intl';

export default function TrustStrip() {
  const t = useTranslations('trustStrip');

  return (
    <section className="bg-white py-16 px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm font-bold text-near-black uppercase tracking-widest text-center mb-10">
          {t('eyebrow')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-lg font-bold text-near-black text-center flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-rich flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4 10 8 14 16 6" /></svg>
            </div>
            {t('item1')}
          </div>
          <div className="text-lg font-bold text-near-black text-center flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-rich flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4 10 8 14 16 6" /></svg>
            </div>
            {t('item2')}
          </div>
          <div className="text-lg font-bold text-near-black text-center flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-rich flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4 10 8 14 16 6" /></svg>
            </div>
            {t('item3')}
          </div>
          <div className="text-lg font-bold text-near-black text-center flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-rich flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4 10 8 14 16 6" /></svg>
            </div>
            {t('item4')}
          </div>
        </div>
      </div>
    </section>
  );
}
