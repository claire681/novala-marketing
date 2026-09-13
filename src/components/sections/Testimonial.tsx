import { useTranslations } from 'next-intl';

export default function Testimonial() {
  const t = useTranslations('testimonial');

  return (
    <section className="py-32 px-8 md:px-16 bg-[#F4F8F8]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-6">
          {t('eyebrow')}
        </div>

        <div className="text-9xl text-emerald-rich opacity-25 leading-none mb-6 font-serif select-none">&ldquo;</div>

        <p className="text-3xl md:text-4xl lg:text-5xl font-light text-near-black leading-tight mb-10 tracking-tight max-w-4xl mx-auto">
          {t('quote')}
        </p>

        <div className="flex flex-col items-center gap-1">
          <div className="text-base font-bold text-near-black">{t('author')}</div>
          <div className="text-sm text-[#5A6970]">{t('role')}</div>
        </div>
      </div>
    </section>
  );
}
