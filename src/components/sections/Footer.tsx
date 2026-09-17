import Image from 'next/image';
import { useTranslations } from 'next-intl';
import CountryPicker from '@/components/CountryPicker';

interface LinkDef { key: string; href: string; }

const PRODUCT_LINKS: LinkDef[] = [
  { key: 'payroll', href: '/features' },
  { key: 'accounting', href: '/features' },
  { key: 'invoicing', href: '/features' },
  { key: 'workforce', href: '/features' },
  { key: 'vela', href: '/features' },
];
const FEATURE_LINKS: LinkDef[] = [
  { key: 'payments', href: '/features' },
  { key: 'cashFlow', href: '/features' },
  { key: 'scheduling', href: '/features' },
  { key: 'craFiling', href: '/features' },
  { key: 't4Forms', href: '/features' },
];
const RESOURCE_LINKS: LinkDef[] = [
  { key: 'sbHub', href: '/help' },
  { key: 'payrollCalc', href: '/features' },
  { key: 'invoiceGen', href: '/features' },
  { key: 'guides', href: '/help' },
  { key: 'blog', href: '/help' },
];
const LEARN_LINKS: LinkDef[] = [
  { key: 'helpCenter', href: '/help' },
  { key: 'gettingStarted', href: '/help' },
  { key: 'tutorials', href: '/help' },
  { key: 'contactSupport', href: '/contact' },
  { key: 'systemStatus', href: '/help' },
];
const CORPORATE_LINKS: LinkDef[] = [
  { key: 'about', href: '/about' },
  { key: 'careers', href: '/careers' },
  { key: 'press', href: '/about' },
  { key: 'partners', href: '/contact' },
];

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="text-base font-bold mb-6">{t('columns.products.title')}</div>
            <div className="flex flex-col gap-3.5">
              {PRODUCT_LINKS.map(({ key, href }) => (
                <a key={key} href={href} className="text-sm text-white/85 hover:text-white transition-colors">{t(`columns.products.links.${key}`)}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-base font-bold mb-6">{t('columns.features.title')}</div>
            <div className="flex flex-col gap-3.5">
              {FEATURE_LINKS.map(({ key, href }) => (
                <a key={key} href={href} className="text-sm text-white/85 hover:text-white transition-colors">{t(`columns.features.links.${key}`)}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-base font-bold mb-6">{t('columns.resources.title')}</div>
            <div className="flex flex-col gap-3.5">
              {RESOURCE_LINKS.map(({ key, href }) => (
                <a key={key} href={href} className="text-sm text-white/85 hover:text-white transition-colors">{t(`columns.resources.links.${key}`)}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-base font-bold mb-6">{t('columns.learn.title')}</div>
            <div className="flex flex-col gap-3.5">
              {LEARN_LINKS.map(({ key, href }) => (
                <a key={key} href={href} className="text-sm text-white/85 hover:text-white transition-colors">{t(`columns.learn.links.${key}`)}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 border-b py-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/sitemap.xml" className="text-sm hover:text-emerald-bright transition-colors">{t('sitemap')}</a>
          <CountryPicker />
          <div className="flex gap-7 text-xl">
            <a href="#" className="hover:text-emerald-bright transition-colors">f</a>
            <a href="#" className="hover:text-emerald-bright transition-colors">𝕏</a>
            <a href="#" className="hover:text-emerald-bright transition-colors">▶</a>
            <a href="#" className="hover:text-emerald-bright transition-colors">in</a>
          </div>
        </div>
        <div className="mb-10">
          <Image src="/logo-mark.svg" alt="Novala" width={200} height={56} className="h-14 w-auto opacity-90" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3.5">
            {CORPORATE_LINKS.map(({ key, href }) => (
              <a key={key} href={href} className="text-sm text-white/85 hover:text-white transition-colors">{t(`corporate.${key}`)}</a>
            ))}
          </div>
          <div>
            <p className="text-sm leading-relaxed mb-3.5">{t('copyright')}</p>
            <p className="text-sm leading-relaxed">{t('trademark')}</p>
          </div>
          <div className="text-sm md:text-right">
            <a href="/terms" className="hover:text-emerald-bright transition-colors">{t('legal.legal')}</a>
            <span className="mx-2.5 text-white/80">|</span>
            <a href="/privacy" className="hover:text-emerald-bright transition-colors">{t('legal.privacy')}</a>
            <span className="mx-2.5 text-white/80">|</span>
            <a href="/security" className="hover:text-emerald-bright transition-colors">{t('legal.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
