'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

interface MenuColumn { labelKey: string; linkKeys: string[]; }
interface MenuConfig { columns: MenuColumn[]; supportCard: 'helpDecide' | 'getSupport'; footerLinks: string[]; }

const MENUS: Record<string, MenuConfig> = {
  product: {
    columns: [
      { labelKey: 'manageAccounting', linkKeys: ['bookkeeping', 'getInsights', 'planAhead', 'workWithExpert', 'accountingOverview'] },
      { labelKey: 'manageTeam', linkKeys: ['runPayroll', 'trackTime', 'offerBenefits', 'manageHR', 'teamOverview'] },
      { labelKey: 'manageMoney', linkKeys: ['getPaidBills', 'manageBanking', 'directDeposit', 'moneyOverview'] },
    ],
    supportCard: 'helpDecide',
    footerLinks: ['seeAllProducts', 'tryDemo'],
  },
  features: {
    columns: [{ labelKey: 'featuresLabel', linkKeys: ['payroll', 'accounting', 'invoicing', 'workforce', 'reporting', 'compliance'] }],
    supportCard: 'helpDecide',
    footerLinks: ['seeAllProducts', 'tryDemo'],
  },
  businessTypes: {
    columns: [
      { labelKey: 'industry', linkKeys: ['nonprofit', 'construction', 'professional', 'retail', 'restaurants', 'healthcare', 'seeAllIndustries'] },
      { labelKey: 'stage', linkKeys: ['newBusiness', 'smallBusiness', 'midSized', 'selfEmployed'] },
    ],
    supportCard: 'helpDecide',
    footerLinks: ['seeAllProducts', 'tryDemo'],
  },
  resources: {
    columns: [
      { labelKey: 'whyNovala', linkKeys: ['exploreFeatures', 'compareNovala', 'addApps'] },
      { labelKey: 'learn', linkKeys: ['blog', 'guides', 'tutorials', 'seeMore'] },
      { labelKey: 'freeTools', linkKeys: ['invoiceGen', 'paychequeCalc', 'timesheetCalc', 'invoiceTemplates'] },
    ],
    supportCard: 'getSupport',
    footerLinks: ['helpSupport', 'contactUs'],
  },
};

type MenuKey = keyof typeof MENUS;

export default function Header() {
  const t = useTranslations('header');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<MenuKey | null>(null);
  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenMenu(null); setMobileMenuOpen(false); }
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

  const NAV_ITEMS: { key: string; menuKey?: MenuKey; href?: string }[] = [
    { key: 'product', menuKey: 'product' },
    { key: 'features', menuKey: 'features' },
    { key: 'businessTypes', menuKey: 'businessTypes' },
    { key: 'pricing', href: '#pricing' },
    { key: 'resources', menuKey: 'resources' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-deep" style={{ height: '80px' }}>
        <div className="w-full h-full px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <Image src="/logo-mark.svg" alt={t('logoAlt')} width={160} height={44} priority className="h-11 w-auto" />
          </Link>

          <nav className="hidden md:flex gap-8 mx-auto" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              item.menuKey ? (
                <div key={item.key} className="relative" onMouseEnter={() => handleTriggerMouseEnter(item.menuKey!)} onMouseLeave={handleTriggerMouseLeave}>
                  <button aria-expanded={openMenu === item.menuKey} aria-controls={`panel-${item.menuKey}`} onClick={() => setOpenMenu(openMenu === item.menuKey ? null : item.menuKey!)} className={`text-[15px] py-2 flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm transition-all ${openMenu === item.menuKey ? 'text-white font-semibold' : 'text-white/90 font-normal hover:text-white'}`}>
                    {t(`nav.${item.key}`)}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200" style={{ transform: openMenu === item.menuKey ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <polyline points="3 5 6 8 9 5" />
                    </svg>
                  </button>
                </div>
              ) : (
                <a key={item.key} href={item.href} className="text-[15px] text-white/90 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">{t(`nav.${item.key}`)}</a>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-sm">
              <button onClick={() => switchTo('en')} className={`transition-colors cursor-pointer ${currentLocale === 'en' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}>EN</button>
              <span className="text-white/40">|</span>
              <button onClick={() => switchTo('fr')} className={`transition-colors cursor-pointer ${currentLocale === 'fr' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}>FR</button>
            </div>
            <a href="#talk-to-sales" className="text-[15px] text-white/90 hover:text-white transition-colors">{t('utility.talkToSales')}</a>
            <a href="#signin" className="text-[15px] text-white/90 hover:text-white transition-colors">{t('utility.signIn')}</a>
            <button className="bg-mint-pale hover:bg-white text-emerald-deep px-5 py-2.5 rounded-lg text-[15px] font-semibold transition-colors cursor-pointer">{t('utility.getStarted')}</button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center cursor-pointer text-white" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>

        {openMenu && (
          <div id={`panel-${openMenu}`} role="region" aria-label={t(`nav.${openMenu}`)} className="hidden md:block absolute top-full left-0 right-0 bg-white shadow-lg" onMouseEnter={handlePanelMouseEnter} onMouseLeave={handlePanelMouseLeave} style={{ animation: 'popup-slide-down 200ms ease-out' }}>
            <div className="mx-auto py-10 pr-8 md:pr-16" style={{ paddingLeft: '18vw' }}>
              <div className="flex flex-col lg:flex-row justify-between gap-12 max-w-6xl">
                <div className="flex gap-24 flex-wrap">
                  {MENUS[openMenu].columns.map((col) => (
                    <div key={col.labelKey}>
                      <div className="text-xs font-semibold text-[#7A8580] uppercase mb-5" style={{ letterSpacing: '0.08em' }}>
                        {t(`megaMenu.${openMenu}.columns.${col.labelKey}.label`)}
                      </div>
                      <ul className="space-y-4">
                        {col.linkKeys.map((linkKey) => (
                          <li key={linkKey}>
                            <a href="#" onClick={() => setOpenMenu(null)} className="text-base text-[#161616] hover:text-emerald-rich transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-rich rounded-sm">
                              {t(`megaMenu.${openMenu}.columns.${col.labelKey}.links.${linkKey}`)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl p-7 flex-shrink-0" style={{ background: '#F6F8F7', width: '400px' }}>
                  <div className="text-lg font-semibold text-[#161616] mb-2">{t(`supportCards.${MENUS[openMenu].supportCard}.heading`)}</div>
                  <p className="text-sm text-[#5A6970] mb-4 leading-relaxed">{t(`supportCards.${MENUS[openMenu].supportCard}.body`)}</p>
                  <a href="#" className="text-sm font-semibold text-emerald-rich hover:text-emerald-deep transition-colors inline-flex items-center gap-1">{t(`supportCards.${MENUS[openMenu].supportCard}.link`)} →</a>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200 flex gap-8 max-w-6xl">
                {MENUS[openMenu].footerLinks.map((linkKey) => (
                  <a key={linkKey} href="#" className="text-[15px] font-medium text-emerald-rich hover:text-emerald-deep transition-colors">{t(`footerLinks.${linkKey}`)}</a>
                ))}
              </div>
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
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mobileOpenMenu === item.menuKey ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <polyline points="3 5 6 8 9 5" />
                    </svg>
                  </button>
                  {mobileOpenMenu === item.menuKey && (
                    <div className="pb-6 space-y-6">
                      {MENUS[item.menuKey].columns.map((col) => (
                        <div key={col.labelKey}>
                          <div className="text-xs font-semibold text-[#7A8580] uppercase mb-3" style={{ letterSpacing: '0.08em' }}>
                            {t(`megaMenu.${item.menuKey}.columns.${col.labelKey}.label`)}
                          </div>
                          <ul className="space-y-3 pl-2">
                            {col.linkKeys.map((linkKey) => (
                              <li key={linkKey}>
                                <a href="#" onClick={closeMobileMenu} className="text-base text-[#161616]">{t(`megaMenu.${item.menuKey}.columns.${col.labelKey}.links.${linkKey}`)}</a>
                              </li>
                            ))}
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

          <div className="rounded-xl p-6 mt-8" style={{ background: '#F6F8F7' }}>
            <div className="text-lg font-semibold text-[#161616] mb-2">{t('supportCards.helpDecide.heading')}</div>
            <p className="text-sm text-[#5A6970] mb-3">{t('supportCards.helpDecide.body')}</p>
            <a href="#" className="text-sm font-semibold text-emerald-rich">{t('supportCards.helpDecide.link')} →</a>
          </div>

          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <span className="text-sm text-[#5A6970]">Language:</span>
            <button onClick={() => switchTo('en')} className={`text-lg cursor-pointer ${currentLocale === 'en' ? 'text-near-black font-bold' : 'text-[#5A6970]'}`}>EN</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => switchTo('fr')} className={`text-lg cursor-pointer ${currentLocale === 'fr' ? 'text-near-black font-bold' : 'text-[#5A6970]'}`}>FR</button>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <a onClick={closeMobileMenu} href="#talk-to-sales" className="text-center py-3 border border-gray-300 text-near-black rounded-lg font-semibold text-base">{t('utility.talkToSales')}</a>
            <a onClick={closeMobileMenu} href="#signin" className="text-center py-3 border border-gray-300 text-near-black rounded-lg font-semibold text-base">{t('utility.signIn')}</a>
            <button onClick={closeMobileMenu} className="bg-emerald-rich text-white py-3 rounded-lg font-semibold text-base">{t('utility.getStarted')} →</button>
          </div>
        </div>
      )}
    </>
  );
}
