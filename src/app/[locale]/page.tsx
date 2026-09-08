import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('landing');
  const tHero = useTranslations('hero');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0A2618] to-[#023E22] text-white">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-6xl font-bold text-[#00A651]">{t('welcomeTitle')}</h1>
        <p className="text-xl text-gray-300">{t('welcomeText')}</p>
        <div className="mt-12 space-y-2">
          <div className="text-xs uppercase tracking-widest text-[#00A651]">{tHero('eyebrow')}</div>
          <div className="text-3xl font-bold">{tHero('headline1')}</div>
          <div className="text-3xl font-bold text-[#00A651]">{tHero('headline2')}</div>
        </div>
      </div>
    </main>
  );
}
