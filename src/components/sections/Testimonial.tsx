import { useTranslations } from 'next-intl';

export default function Testimonial() {
  const t = useTranslations('testimonial');

  return (
    <section className="py-24 px-8 md:px-16 bg-[#F4F8F8]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-[#E8ECEA] rounded-3xl p-24 text-center flex items-center justify-center min-h-[400px]">
          <div>
            <div className="text-8xl opacity-30">👤</div>
            <div className="text-sm text-[#5A6970] italic mt-4">{t('photoPlaceholder')}</div>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-4">
            {t('eyebrow')}
          </div>
          <div className="text-8xl text-emerald-rich opacity-20 leading-none mb-3 font-serif">&ldquo;</div>
          <p className="text-2xl md:text-3xl font-semibold text-near-black leading-relaxed mb-5">
            {t('quote')}
          </p>
          <div className="text-sm font-bold text-near-black">{t('author')}</div>
        </div>
      </div>
    </section>
  );
}
