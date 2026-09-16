import IndustryPageLayout from '@/components/IndustryPageLayout';
import { CONSTRUCTION_EN, CONSTRUCTION_FR } from '@/data/industry-content';

export default async function IndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? CONSTRUCTION_FR : CONSTRUCTION_EN;
  return <IndustryPageLayout content={content} />;
}
