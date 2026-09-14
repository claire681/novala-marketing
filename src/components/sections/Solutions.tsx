import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Solutions() {
  const t = useTranslations('solutions');

  return (
    <section id="solutions" className="bg-white py-24 px-8 md:px-16">
      <h2 className="text-4xl md:text-6xl font-light text-[#161616] text-center leading-tight tracking-tight mb-16 md:mb-24 max-w-5xl mx-auto">
        {t('heading')}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-mint-pale rounded-2xl p-12">
          <svg width="52" height="52" viewBox="0 0 42 42" fill="none" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-9"><circle cx="21" cy="21" r="12" /><circle cx="21" cy="21" r="4" fill="#161616" /></svg>
          <h3 className="text-3xl font-light text-[#161616] mb-8">{t('sizeCards.new.title')}</h3>
          <p className="text-base text-[#161616] leading-relaxed mb-10">{t('sizeCards.new.description')}</p>
          <a href="#" className="text-sm text-[#161616] underline">{t('learnMore')}</a>
        </div>
        <div className="bg-emerald-rich rounded-2xl p-12">
          <svg width="52" height="52" viewBox="0 0 42 42" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-9"><circle cx="16" cy="16" r="9" /><circle cx="26" cy="16" r="9" /><circle cx="21" cy="27" r="9" /></svg>
          <h3 className="text-3xl font-light text-white mb-8">{t('sizeCards.small.title')}</h3>
          <p className="text-base text-white leading-relaxed mb-10">{t('sizeCards.small.description')}</p>
          <a href="#" className="text-sm text-white underline">{t('learnMore')}</a>
        </div>
        <div className="bg-emerald-deep rounded-2xl p-12">
          <svg width="52" height="52" viewBox="0 0 42 42" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-9"><circle cx="21" cy="14" r="4" /><path d="M13 30 C 13 24, 17 22, 21 22 C 25 22, 29 24, 29 30" /><circle cx="9" cy="17" r="3" /><path d="M4 30 C 4 26, 6 24, 9 24" /><circle cx="33" cy="17" r="3" /><path d="M38 30 C 38 26, 36 24, 33 24" /></svg>
          <h3 className="text-3xl font-light text-white mb-8">{t('sizeCards.mid.title')}</h3>
          <p className="text-base text-white leading-relaxed mb-10">{t('sizeCards.mid.description')}</p>
          <a href="#" className="text-sm text-white underline">{t('learnMore')}</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="#" className="group relative rounded-2xl overflow-hidden h-96 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image src="/photos/construction.jpg" alt="Construction and trades" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>
          <div className="relative h-full p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-light text-white mb-4 transition-transform duration-500 group-hover:-translate-y-1">{t('industries.construction.title')}</h3>
            <p className="text-sm text-white leading-relaxed mb-6 transition-all duration-500 group-hover:opacity-100 opacity-95">{t('industries.construction.description')}</p>
            <span className="text-sm text-white underline self-start transition-transform duration-500 group-hover:translate-x-1">{t('learnMore')} →</span>
          </div>
        </a>
        <a href="#" className="group relative rounded-2xl overflow-hidden h-96 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image src="/photos/professional-services.jpg" alt="Professional services" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>
          <div className="relative h-full p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-light text-white mb-4 transition-transform duration-500 group-hover:-translate-y-1">{t('industries.professional.title')}</h3>
            <p className="text-sm text-white leading-relaxed mb-6">{t('industries.professional.description')}</p>
            <span className="text-sm text-white underline self-start transition-transform duration-500 group-hover:translate-x-1">{t('learnMore')} →</span>
          </div>
        </a>
        <a href="#" className="group relative rounded-2xl overflow-hidden h-96 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image src="/photos/wholesale.jpg" alt="Wholesale and manufacturing" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>
          <div className="relative h-full p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-light text-white mb-4 transition-transform duration-500 group-hover:-translate-y-1">{t('industries.wholesale.title')}</h3>
            <p className="text-sm text-white leading-relaxed mb-6">{t('industries.wholesale.description')}</p>
            <span className="text-sm text-white underline self-start transition-transform duration-500 group-hover:translate-x-1">{t('learnMore')} →</span>
          </div>
        </a>
        <a href="#" className="group relative rounded-2xl overflow-hidden h-96 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image src="/photos/healthcare.jpg" alt="Healthcare and clinics" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>
          <div className="relative h-full p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-light text-white mb-4 transition-transform duration-500 group-hover:-translate-y-1">{t('industries.healthcare.title')}</h3>
            <p className="text-sm text-white leading-relaxed mb-6">{t('industries.healthcare.description')}</p>
            <span className="text-sm text-white underline self-start transition-transform duration-500 group-hover:translate-x-1">{t('learnMore')} →</span>
          </div>
        </a>
      </div>
    </section>
  );
}
