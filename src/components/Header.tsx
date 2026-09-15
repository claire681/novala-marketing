'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

interface MenuColumn { labelKey: string; linkKeys: string[]; seeAllKey?: string; }
interface MenuConfig { columns: MenuColumn[]; }

const MENUS: Record<string, MenuConfig> = {
  productsFeatures: {
    columns: [
      { labelKey: 'products', linkKeys: ['accounting', 'payroll', 'invoicing', 'timeTracking', 'businessManagement'] },
      { labelKey: 'features', linkKeys: ['bookkeeping', 'getInsights', 'planAhead', 'expenseTracking', 'manageBills', 'receiptCapture', 'reporting', 'cashFlow', 'manageCustomers', 'directDeposit', 'velaAI'], seeAllKey: 'seeAllFeatures' },
      { labelKey: 'businessStage', linkKeys: ['newBusiness', 'smallBusiness', 'midSized', 'freelance'] },
      { labelKey: 'industry', linkKeys: ['construction', 'professional', 'wholesale', 'healthcare', 'retail', 'restaurants', 'nonprofit'], seeAllKey: 'seeAllIndustries' },
    ],
  },
  resources: {
    columns: [
      { labelKey: 'compare', linkKeys: ['vsQuickbooks', 'vsXero', 'vsWave'] },
      { labelKey: 'exploreNovala', linkKeys: ['whatsNew', 'moveToNovala', 'appsIntegrations'] },
      { labelKey: 'freeTools', linkKeys: ['invoiceGen', 'payrollCalc', 'timesheetCalc', 'invoiceTemplates', 'employeeCostCalc'], seeAllKey: 'seeAllTools' },
      { labelKey: 'learnSupport', linkKeys: ['blog', 'guides', 'tutorials', 'productSupport'] },
    ],
  },
};

type MenuKey = keyof typeof MENUS;

const SIGNIN_ITEMS = ['novala', 'accountantPortal', 'employeeApp'] as const;

export default function Header() {
  const t = useTranslations('header');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<MenuKey | null>(null);
  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const signInCloseTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenMenu(null); setSignInOpen(false); setMobileMenuOpen(false); }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMobileMenu = () => { setMobileMenuOpen(false); setMobileOpenMenu(null); };
  const switchTo = (locale: 'en' | 'fr') => { router.replace(pathname, { locale }); closeMobileMenu(); };
  const handleTriggerMouseEnter = (key: MenuKey) => { if (closeTimer.current) clearTimeout(closeTimer.current); openTimer.current = setTimeout(() => setOpenMenu(key), 100); };
  const handleTriggerMouseLeave = () => { if (openTimer.current) clearTimeout(openTimer.current); closeTimer.current = setTimeout(() => setOpenMenu(null), 200); };
  const handlePanelMouseEnter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const handlePanelMouseLeave = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 200); };
  const handleSignInMouseEnter = () => { if (signInCloseTimer.current) clearTimeout(signInCloseTimer.current); setSignInOpen(true); };
  const handleSignInMouseLeave = () => { signInCloseTimer.current = setTimeout(() => setSignInOpen(false), 200); };

  const NAV_ITEMS: { key: string; menuKey?: MenuKey; href?: string }[] = [
    { key: 'productsFeatures', menuKey: 'productsFeatures' },
    { key: 'plansPricing', href: '#pricing' },
    { key: 'resources', menuKey: 'resources' },
  ];

  const VelaPromoCard = () => (
    <div className="flex-shrink-0" style={{ width: '380px' }}>
      <div className="p-8 relative" style={{ background: 'linear-gradient(#0E2A2A, #0E2A2A) padding-box, linear-gradient(135deg, #00A651, #4EDDA0) border-box', border: '2px solid transparent', borderRadius: '16px' }}>
        <div className="inline-block px-2.5 py-1 rounded text-[11px] font-bold uppercase mb-4 tracking-wider" style={{ background: '#F4FBF7', color: '#023E22' }}>{t('promoCard.newLabel')}</div>
        <h3 className="text-white text-3xl font-normal mb-3 leading-tight">{t('promoCard.heading')}</h3>
        <p className="text-white/80 text-[15px] leading-relaxed mb-6">{t('promoCard.body')}</p>
        <a href="#vela" onClick={() => setOpenMenu(null)} className="inline-block bg-emerald-bright hover:bg-emerald-rich text-white font-bold px-7 py-3.5 rounded-lg transition-colors">{t('promoCard.cta')} →</a>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ height: '72px', background: '#0A0A0A' }}>
        <div className="w-full h-full px-8 md:px-10 flex items-center">
          <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <Image src="/logo-mark.svg" alt="Novala" width={160} height={40} priority className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex gap-11 ml-44" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              item.menuKey ? (
                <div key={item.key} className="relative" onMouseEnter={() => handleTriggerMouseEnter(item.menuKey!)} onMouseLeave={handleTriggerMouseLeave}>
                  <button aria-expanded={openMenu === item.menuKey} aria-controls={`panel-${item.menuKey}`} onClick={() => setOpenMenu(openMenu === item.menuKey ? null : item.menuKey!)} className={`text-base py-2 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm transition-all ${openMenu === item.menuKey ? 'text-white font-semibold' : 'text-white/95 font-normal hover:text-white'}`}>
                    {t(`nav.${item.key}`)}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200" style={{ transform: openMenu === item.menuKey ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <polyline points="3 5 7 9 11 5" />
                    </svg>
                  </button>
                  {openMenu === item.menuKey && <div className="absolute left-0 right-0 h-0.5 -bottom-1" style={{ background: '#F4FBF7' }}></div>}
                </div>
              ) : (
                <a key={item.key} href={item.href} className="text-base text-white/95 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">{t(`nav.${item.key}`)}</a>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5 ml-auto flex-shrink-0">
            <a href="#talk-to-sales" className="text-base text-white/95 hover:text-white transition-colors flex items-center gap-1">
              {t('utility.talkToSales')}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2 4 5 7 8 4" /></svg>
            </a>
            <span className="text-white/30">|</span>
            <button onClick={() => switchTo(currentLocale === 'en' ? 'fr' : 'en')} className="text-base text-white font-semibold cursor-pointer hover:text-white/80 transition-colors">{currentLocale === 'en' ? 'FR' : 'EN'}</button>
            <span className="text-white/30">|</span>
            <div className="relative" onMouseEnter={handleSignInMouseEnter} onMouseLeave={handleSignInMouseLeave}>
              <button aria-expanded={signInOpen} aria-controls="signin-panel" onClick={() => setSignInOpen(!signInOpen)} className="text-base text-white/95 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                {t('utility.signIn')}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200" style={{ transform: signInOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <polyline points="2 4 5 7 8 4" />
                </svg>
              </button>
              {signInOpen && (
                <div id="signin-panel" role="menu" className="absolute top-full right-0 mt-2 bg-white shadow-2xl rounded-lg py-3 min-w-[280px]" style={{ animation: 'popup-slide-down 200ms ease-out' }}>
                  {SIGNIN_ITEMS.map((key) => (
                    <a key={key} href="#" onClick={() => setSignInOpen(false)} className="block px-5 py-2.5 text-[15px] text-[#161616] hover:bg-[#F4FBF7] hover:text-emerald-rich transition-colors">
                      {t(`signInMenu.${key}`)}
                    </a>
                  ))}
                  <div className="border-t border-gray-200 my-2"></div>
                  <a href="#help-signin" onClick={() => setSignInOpen(false)} className="flex items-center justify-between px-5 py-2.5 text-[15px] text-[#161616] hover:bg-[#F4FBF7] hover:text-emerald-rich transition-colors">
                    {t('signInMenu.needHelp')}
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="9" /><path d="M7.5 7.5 A 2.5 2.5 0 1 1 10 10 L 10 12" /><circle cx="10" cy="15.5" r="0.5" fill="currentColor" /></svg>
                  </a>
                </div>
              )}
            </div>
            <button className="bg-mint-pale hover:bg-white text-emerald-deep px-5 py-2.5 rounded-lg text-base font-semibold transition-colors cursor-pointer">{t('utility.getStarted')}</button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden ml-auto w-10 h-10 flex items-center justify-center cursor-pointer text-white" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>

        {openMenu && (
          <div id={`panel-${openMenu}`} role="region" aria-label={t(`nav.${openMenu}`)} className="hidden md:block absolute top-full left-0 right-0 bg-white shadow-lg" onMouseEnter={handlePanelMouseEnter} onMouseLeave={handlePanelMouseLeave} style={{ animation: 'popup-slide-down 200ms ease-out' }}>
            <div className="max-w-[1600px] mx-auto py-10 px-8 md:px-16 flex justify-between gap-8">
              <div className="flex gap-5">
                {MENUS[openMenu].columns.map((col) => (
                  <div key={col.labelKey} style={{ width: '260px' }}>
                    <h3 className="text-[15px] font-normal text-[#6B6B6B] mb-3.5">{t(`megaMenu.${openMenu}.columns.${col.labelKey}.label`)}</h3>
                    <div className="border-t border-[#D9D9D9] mb-6"></div>
                    <ul className="space-y-5">
                      {col.linkKeys.map((linkKey) => (
                        <li key={linkKey}>
                          <a href="#" onClick={() => setOpenMenu(null)} className="text-base text-[#161616] hover:text-emerald-rich transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-rich rounded-sm">{t(`megaMenu.${openMenu}.columns.${col.labelKey}.links.${linkKey}`)}</a>
                        </li>
                      ))}
                    </ul>
                    {col.seeAllKey && (
                      <>
                        <div className="border-t border-[#D9D9D9] my-5"></div>
                        <a href="#" onClick={() => setOpenMenu(null)} className="text-base text-[#161616] hover:text-emerald-rich transition-colors">{t(`megaMenu.${openMenu}.columns.${col.labelKey}.links.${col.seeAllKey}`)}</a>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <VelaPromoCard />
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 pb-8 overflow-y-auto">
          <nav className="flex flex-col divide-y divide-gray-200" aria-label="Primary mobile">
            {NAV_ITEMS.map((item) => (
              item.menuKey ? (
                <div key={item.key}>
                  <button onClick={() => setMobileOpenMenu(mobileOpenMenu === item.menuKey ? null : item.menuKey!)} className="w-full flex items-center justify-between py-4 text-xl font-semibold text-near-black" aria-expanded={mobileOpenMenu === item.menuKey}>
                    {t(`nav.${item.key}`)}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mobileOpenMenu === item.menuKey ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <polyline points="3 5 7 9 11 5" />
                    </svg>
                  </button>
                  {mobileOpenMenu === item.menuKey && (
                    <div className="pb-6 space-y-6">
                      {MENUS[item.menuKey].columns.map((col) => (
                        <div key={col.labelKey}>
                          <div className="text-[15px] text-[#6B6B6B] mb-2">{t(`megaMenu.${item.menuKey}.columns.${col.labelKey}.label`)}</div>
                          <div className="border-t border-[#D9D9D9] mb-3"></div>
                          <ul className="space-y-3 pl-2">
                            {col.linkKeys.map((linkKey) => (
                              <li key={linkKey}>
                                <a href="#" onClick={closeMobileMenu} className="text-base text-[#161616]">{t(`megaMenu.${item.menuKey}.columns.${col.labelKey}.links.${linkKey}`)}</a>
                              </li>
                            ))}
                            {col.seeAllKey && <li className="pt-2"><a href="#" onClick={closeMobileMenu} className="text-base text-[#161616]">{t(`megaMenu.${item.menuKey}.columns.${col.labelKey}.links.${col.seeAllKey}`)}</a></li>}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={item.key} href={item.href} onClick={closeMobileMenu} className="py-4 text-xl font-semibold text-near-black">{t(`nav.${item.key}`)}</a>
              )
            ))}
          </nav>

          <div className="mt-8"><VelaPromoCard /></div>

          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <a onClick={closeMobileMenu} href="#talk-to-sales" className="block text-center py-3 border border-gray-300 text-near-black rounded-lg font-semibold text-base">{t('utility.talkToSales')}</a>
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-[#5A6970]">Language:</span>
              <button onClick={() => switchTo('en')} className={`text-lg cursor-pointer ${currentLocale === 'en' ? 'text-near-black font-bold' : 'text-[#5A6970]'}`}>EN</button>
              <span className="text-gray-400">|</span>
              <button onClick={() => switchTo('fr')} className={`text-lg cursor-pointer ${currentLocale === 'fr' ? 'text-near-black font-bold' : 'text-[#5A6970]'}`}>FR</button>
            </div>
            <a onClick={closeMobileMenu} href="#signin" className="block text-center py-3 border border-gray-300 text-near-black rounded-lg font-semibold text-base">{t('utility.signIn')}</a>
            <button onClick={closeMobileMenu} className="w-full bg-emerald-rich text-white py-3 rounded-lg font-semibold text-base">{t('utility.getStarted')} →</button>
          </div>
        </div>
      )}
    </>
  );
}
