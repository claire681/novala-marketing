import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LanguageBanner from '@/components/LanguageBanner';
import VelaChat from '@/components/VelaChat';
import CookieConsent from '@/components/CookieConsent';
import Script from 'next/script';
import "../globals.css";

const SITE_URL = 'https://www.getnovala.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const title = isEn
    ? 'Novala - Payroll, Accounting & Business Management'
    : 'Novala - Paie, comptabilité et gestion d entreprise canadienne';
  const description = isEn
    ? 'All-in-one business management for small and mid-size businesses. Payroll, accounting, invoicing, workforce management. compliance-ready. Try free.'
    : 'Gestion tout-en-un pour PME canadiennes. Paie, comptabilité, facturation, gestion du personnel. Conforme ARC. Essai gratuit.';

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: '%s | Novala' },
    description,
    keywords: isEn
      ? ['payroll canada', 'payroll software', 'accounting software canada', 'tax compliance', 'small business software', 'novala']
      : ['paie canada', 'logiciel comptabilité canada', 'ARC conformité', 'logiciel PME'],
    authors: [{ name: 'Novala', url: SITE_URL }],
    creator: 'Novala',
    publisher: 'Novala',
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
      icon: [
        { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: isEn ? SITE_URL : `${SITE_URL}/fr`,
      languages: { 'en-CA': SITE_URL, 'fr-CA': `${SITE_URL}/fr` },
    },
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_CA' : 'fr_CA',
      alternateLocale: isEn ? 'fr_CA' : 'en_CA',
      url: isEn ? SITE_URL : `${SITE_URL}/fr`,
      siteName: 'Novala',
      title,
      description,
      images: [{ url: '/photos/hero.jpg', width: 1200, height: 630, alt: 'Novala for growing businesses' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/photos/hero.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novala',
    url: SITE_URL,
    logo: `${SITE_URL}/logo-mark.svg`,
    description: 'All-in-one business management for small and mid-size businesses.',
    address: { '@type': 'PostalAddress', addressLocality: 'Edmonton', addressRegion: 'AB', addressCountry: 'CA' },
    areaServed: { '@type': 'Country', name: 'Canada' },
    sameAs: [],
  };

  return (
    <html lang={locale}>
      <body className="antialiased">
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <NextIntlClientProvider>
          <LanguageBanner />
          {children}
          <VelaChat />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
