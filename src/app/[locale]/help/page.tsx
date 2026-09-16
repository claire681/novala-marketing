import InfoPageLayout from '@/components/InfoPageLayout';
import { HELP_EN, HELP_FR } from '@/data/info-pages';

export default async function HelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? HELP_FR : HELP_EN;
  return <InfoPageLayout content={content} />;
}
