'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header() {
  const t = useTranslations('header');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const switchTo = (locale: 'en' | 'fr') => {
    router.replace(pathname, { locale });
    closeMobileMenu();
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
        <div className="w-full px-8 md:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <Image src="/logo-mark.svg" alt="Novala" width={160} height={44} priority className="h-11 w-auto" />
          </Link>

          <nav className="hidden md:flex gap-8 mx-auto">
            <a href="#product" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">{t('nav.product')}</a>
            <a href="#solutions" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">{t('nav.solutions')}</a>
            <a href="#pricing" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">{t('nav.pricing')}</a>
            <a href="#resources" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">{t('nav.resources')}</a>
          </nav>

          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-sm border-r border-white/20 pr-4">
              <button onClick={() => switchTo('en')} className={`transition-colors cursor-pointer ${currentLocale === 'en' ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}>EN</button>
              <span className="text-white/40">|</span>
              <button onClick={() => switchTo('fr')} className={`transition-colors cursor-pointer ${currentLocale === 'fr' ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}>FR</button>
            </div>
            <a href="#signin" className="text-sm text-white/90 hover:text-emerald-bright transition-colors">{t('signIn')}</a>
            <button className="bg-emerald-bright hover:bg-emerald-rich text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer">{t('getStarted')}</button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center cursor-pointer" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden pt-24 px-8 pb-8 overflow-y-auto">
          <nav className="flex flex-col gap-6 mb-10">
            <a onClick={closeMobileMenu} href="#product" className="text-2xl font-bold text-white hover:text-emerald-bright transition-colors">{t('nav.product')}</a>
            <a onClick={closeMobileMenu} href="#solutions" className="text-2xl font-bold text-white hover:text-emerald-bright transition-colors">{t('nav.solutions')}</a>
            <a onClick={closeMobileMenu} href="#pricing" className="text-2xl font-bold text-white hover:text-emerald-bright transition-colors">{t('nav.pricing')}</a>
            <a onClick={closeMobileMenu} href="#resources" className="text-2xl font-bold text-white hover:text-emerald-bright transition-colors">{t('nav.resources')}</a>
          </nav>

          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
            <span className="text-sm text-white/60">Language:</span>
            <button onClick={() => switchTo('en')} className={`text-lg cursor-pointer ${currentLocale === 'en' ? 'text-white font-bold' : 'text-white/60'}`}>EN</button>
            <span className="text-white/40">|</span>
            <button onClick={() => switchTo('fr')} className={`text-lg cursor-pointer ${currentLocale === 'fr' ? 'text-white font-bold' : 'text-white/60'}`}>FR</button>
          </div>

          <div className="flex flex-col gap-3">
            <a onClick={closeMobileMenu} href="#signin" className="text-center py-3 border border-white/20 text-white rounded-lg font-bold text-base transition-colors hover:bg-white/10">{t('signIn')}</a>
            <button onClick={closeMobileMenu} className="bg-emerald-bright hover:bg-emerald-rich text-white py-3 rounded-lg font-bold text-base transition-colors cursor-pointer">{t('getStarted')} →</button>
          </div>
        </div>
      )}
    </>
  );
}
