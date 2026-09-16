import IndustryPageLayout from '@/components/IndustryPageLayout';
import { PROFESSIONAL_EN, PROFESSIONAL_FR } from '@/data/industry-content';

export default async function IndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? PROFESSIONAL_FR : PROFESSIONAL_EN;
  return <IndustryPageLayout content={content} />;
}
