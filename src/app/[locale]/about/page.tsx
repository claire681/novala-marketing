import InfoPageLayout from '@/components/InfoPageLayout';
import { ABOUT_EN, ABOUT_FR } from '@/data/info-pages';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? ABOUT_FR : ABOUT_EN;
  return <InfoPageLayout content={content} />;
}
