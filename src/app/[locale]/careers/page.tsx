import InfoPageLayout from '@/components/InfoPageLayout';
import { CAREERS_EN, CAREERS_FR } from '@/data/info-pages';

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? CAREERS_FR : CAREERS_EN;
  return <InfoPageLayout content={content} />;
}
