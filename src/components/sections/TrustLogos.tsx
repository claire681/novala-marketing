import { useTranslations } from 'next-intl';

const LOGO_KEYS = ['maple', 'northland', 'aurora', 'cascade', 'ravenwood', 'silverpeak'] as const;

const LOGO_STYLES: Record<string, string> = {
  maple: 'font-serif font-bold text-lg',
  northland: 'font-sans font-bold text-sm tracking-widest uppercase',
  aurora: 'italic font-semibold text-lg',
  cascade: 'font-sans font-black text-base',
  ravenwood: 'font-serif italic text-lg',
  silverpeak: 'font-sans font-bold text-sm tracking-widest uppercase',
};

export default function TrustLogos() {
  const t = useTranslations('trustLogos');

  return (
    <section className="bg-white py-16 px-8 border-b border-gray-100">
      <div className="text-center max-w-6xl mx-auto">
        <p className="text-xs font-semibold text-[#5A6970] uppercase tracking-widest mb-10">
          {t('heading')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
          {LOGO_KEYS.map((key) => (
            <span key={key} className={`text-[#5A6970] ${LOGO_STYLES[key]}`}>
              {t(`logos.${key}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
