import Image from 'next/image';
import { useTranslations } from 'next-intl';

const PRODUCT_LINKS = ['payroll', 'accounting', 'invoicing', 'workforce', 'vela'] as const;
const FEATURE_LINKS = ['payments', 'cashFlow', 'scheduling', 'craFiling', 't4Forms'] as const;
const RESOURCE_LINKS = ['sbHub', 'payrollCalc', 'invoiceGen', 'guides', 'blog'] as const;
const LEARN_LINKS = ['helpCenter', 'gettingStarted', 'tutorials', 'contactSupport', 'systemStatus'] as const;
const CORPORATE_LINKS = ['about', 'careers', 'press', 'partners'] as const;

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-emerald-deep text-white pt-20 pb-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Tier 1: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="text-base font-bold mb-6">{t('columns.products.title')}</div>
            <div className="flex flex-col gap-3.5">
              {PRODUCT_LINKS.map(key => (
                <a key={key} href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                  {t(`columns.products.links.${key}`)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-base font-bold mb-6">{t('columns.features.title')}</div>
            <div className="flex flex-col gap-3.5">
              {FEATURE_LINKS.map(key => (
                <a key={key} href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                  {t(`columns.features.links.${key}`)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-base font-bold mb-6">{t('columns.resources.title')}</div>
            <div className="flex flex-col gap-3.5">
              {RESOURCE_LINKS.map(key => (
                <a key={key} href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                  {t(`columns.resources.links.${key}`)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-base font-bold mb-6">{t('columns.learn.title')}</div>
            <div className="flex flex-col gap-3.5">
              {LEARN_LINKS.map(key => (
                <a key={key} href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                  {t(`columns.learn.links.${key}`)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tier 2: Utility row */}
        <div className="border-t border-white/20 border-b py-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-sm hover:text-emerald-bright transition-colors">{t('sitemap')}</a>
          <div className="flex items-center gap-3.5">
            <span className="text-xl">🇨🇦</span>
            <span className="text-sm">{t('country.label')}</span>
            <span className="text-xs">▾</span>
          </div>
          <div className="flex gap-7 text-xl">
            <a href="#" className="hover:text-emerald-bright transition-colors">f</a>
            <a href="#" className="hover:text-emerald-bright transition-colors">𝕏</a>
            <a href="#" className="hover:text-emerald-bright transition-colors">▶</a>
            <a href="#" className="hover:text-emerald-bright transition-colors">in</a>
          </div>
        </div>

        {/* Tier 3: Wordmark */}
        <div className="mb-10">
          <Image
            src="/logo-mark.svg"
            alt="Novala"
            width={200}
            height={56}
            className="h-14 w-auto opacity-90"
          />
        </div>

        {/* Legal block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3.5">
            {CORPORATE_LINKS.map(key => (
              <a key={key} href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                {t(`corporate.${key}`)}
              </a>
            ))}
          </div>
          <div>
            <p className="text-sm leading-relaxed mb-3.5">{t('copyright')}</p>
            <p className="text-sm leading-relaxed">{t('trademark')}</p>
          </div>
          <div className="text-sm md:text-right">
            <a href="#" className="hover:text-emerald-bright transition-colors">{t('legal.legal')}</a>
            <span className="mx-2.5 text-white/50">|</span>
            <a href="#" className="hover:text-emerald-bright transition-colors">{t('legal.privacy')}</a>
            <span className="mx-2.5 text-white/50">|</span>
            <a href="#" className="hover:text-emerald-bright transition-colors">{t('legal.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
