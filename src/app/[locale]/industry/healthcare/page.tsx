import IndustryPageLayout from '@/components/IndustryPageLayout';
import { HEALTHCARE_EN, HEALTHCARE_FR } from '@/data/industry-content';

export default async function IndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? HEALTHCARE_FR : HEALTHCARE_EN;
  return <IndustryPageLayout content={content} />;
}
