import IndustryPageLayout from '@/components/IndustryPageLayout';
import { WHOLESALE_EN, WHOLESALE_FR } from '@/data/industry-content';

export default async function IndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = locale === 'fr' ? WHOLESALE_FR : WHOLESALE_EN;
  return <IndustryPageLayout content={content} />;
}
