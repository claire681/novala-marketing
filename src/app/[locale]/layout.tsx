import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LanguageBanner from '@/components/LanguageBanner';
import VelaChat from '@/components/VelaChat';
import "../globals.css";

export const metadata: Metadata = {
  title: "Novala",
  description: "Payroll, accounting, and workforce management for Canadian businesses",
};

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

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider>
          <LanguageBanner />
          {children}
          <VelaChat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
