import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-darker/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-white tracking-wide">
          {t('logo')}
        </Link>

        <nav className="hidden md:flex gap-8">
          <a href="#product" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">
            {t('nav.product')}
          </a>
          <a href="#solutions" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">
            {t('nav.solutions')}
          </a>
          <a href="#pricing" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">
            {t('nav.pricing')}
          </a>
          <a href="#resources" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">
            {t('nav.resources')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#signin" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">
            {t('signIn')}
          </a>
          <button className="bg-emerald-bright hover:bg-emerald-rich text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer">
            {t('getStarted')}
          </button>
        </div>
      </div>
    </header>
  );
}
